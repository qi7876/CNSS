import requests

files = {"file": ("aa.txt", "ssss")}
url = "http://prob00-4a655c067bc3391e61c369c8ab5f761d.recruit.yulinsec.cn/"
r = requests.post(url=url, files=files, allow_redirects=False)
print(r.text)
