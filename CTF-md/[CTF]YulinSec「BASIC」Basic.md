# [CTF]YulinSec「BASIC」Basic

## Encode

很简单base64、URL等等，注意特征。

## Calc-1

开启DevTools，修改元素，修改一下对内容长度的限制就OK。

## Calc-2

在这题卡了很久，在浏览器里用 DevTool 改了一切能想到的，提交之后要么和没改一样，要么不返回 flag，最后用 Burp 抓包才发现 POST 的 body 里根本没有 result，手动加上 result=666 再发包，终于成功拿下 Flag。

## Calc-3

这题对结果的返回时间有要求，使用 Python 和 requests 模块解决。

```python
import requests
import re

session = requests.Session()
url = "http://prob00-004.recruit.yulinsec.cn"

get_response = session.get(url, verify=False)

print("GET Status Code:", get_response.status_code)
print("GET Response Headers:", get_response.headers)
print("GET Response Body:\n", get_response.text)

expression_pattern = re.compile(r"(\d+\s*[\+\-\*/]\s*\d+)")
match = expression_pattern.search(get_response.text)

expression = match.group(1)
print(f"\nExtracted Expression: {expression}")

clean_expression = expression.replace(" ", "")
result = eval(clean_expression)
print(f"Calculated Result: {result}")

post_data = {"result": str(result)}

post_response = session.post(url, data=post_data)
post_response.raise_for_status()
print("POST Status Code:", post_response.status_code)
print("POST Response Headers:", post_response.headers)
print("POST Response Body:\n", post_response.text)
```

## Http

根据页面的反馈内容加上各种参数，最后判断是否为 admin 时还需要用到 cookie，加上 header `Cookie：admin=1`即可。

注意，在使用 POST 时，要加上对应的一些 header，例如`Content-type`，否则无法解析 body 中的内容。

## 302

过的莫名其妙的，url 路径里加个 index.php 就拿到 flag 了，后面再研究一下。

## Method

终极傻逼题，全试一遍就过了，但是我漏了一个`OPTIONS`没试，再加上CTFHUB类似的那道题误导了我一下，搞得我折腾半天也没出结果，最后才把`OPTIONS`换上去，非常难受的拿下了。

## Https

这题比较有意思，用到了 JSON Web Token (JWT)。

JWT由三部分组成：**Header, Payload, Signature**

### Header

```js
{
    "alg": "HS256",
    "typ": "JWT"
}
```

主要存放签名算法和Token类型（一般都是JWT）。

### Payload

```js
{
    "key0": "value0",
    "key1": "value1"
}
```

主要存放值，也是我们需要篡改的地方，有一些比较特殊的键值对需要注意：

- iss (issuer）
- exp (expiration time)
- sub (subject)
- aud (audience)
- nbf (Not Before)
- iat (Issued At)
- jti (JWT ID)

尤其是 jti，如果 Payload 带有这个参数，那么重放攻击基本无效，同一个 jti，只要服务器接收到一次，那么后续的接收就会无效。

### Signature

最难搞定的部分，这部分是由服务器所保存的密钥通过Header中的签名算法所计算出来的。

**JWT 的签名计算遵循以下步骤：**

1. **编码头部和负载**：头部和负载分别用 Base64Url 编码。

2. **拼接签名数据**：将 Base64Url 编码的头部和负载用 “.” 连接，形成一个完整的字符串。

3. **加密签名数据**：根据头部中指定的签名算法（如 HMAC、RSA、ECDSA 等），对上述拼接后的字符串进行签名。

   - **HS256**（HMAC-SHA256）：使用一个**共享密钥**来进行哈希运算，想获取这个共享密钥只能通过对已有的JWT进行爆破计算，或者通过弱密码表来撞出简单的共享密钥。

   ```
   HMACSHA256(
       secret_key,
       encodedHeader + "." + encodedPayload
   )
   ```

   - **RS256**（RSA-SHA256）：使用 RSA 的私钥进行签名，公钥用于验证。

   - **ES256**（ECDSA-SHA256）：使用椭圆曲线加密算法进行签名。

4. **拼接 JWT**：最后，将编码后的头部、负载和签名用 “.” 连接，形成最终的 JWT：`header.payload.signature`
