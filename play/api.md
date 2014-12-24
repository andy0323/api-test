# 这是一个get请求

## 请求连接 

http://218.247.15.102/appfuse_emm_backend/v1/appversions.json

## 请求类型 

get

## 请求参数

```
没有参数
```

## 响应内容 (请求成功)

### 响应体内容

```
{
    "status": {
        "code": 0,
        "msg": ""
    },
    "data": {
        "id": 18,
        "versionId": "4565",
        "content": "67567567",
        "url": "https__//shiren1118.b0.upaiyun.com/AppCenter0627.plist",
        "createTime": "2014-09-22 11__14__30"
    }
}
```

# 这是一个post2请求

## 请求连接 

http://218.247.15.102/appfuse_emm_backend/v1/appschedule/list.json

## 请求类型 

post

## 请求参数

```
没有参数
```

## 响应内容 (请求成功)

### 响应体内容

```
{
    "status": {
        "code": 0,
        "msg": ""
    },
    "dataList": [
        {
            "id": 21,
            "title": "软件服务",
            "content": "软件服务",
            "createTime": "2014-10-22 06__41__55",
            "icon": "http__//218.247.15.102/emm_backend_static/serverType/4f331b28a3e6418cad0945eb92e97259.png",
            "icons": "http__//218.247.15.102/emm_backend_static/serverType/500fa7ff5df6486f957cb40eb44a1408.png"
        },
        {
            "id": 22,
            "title": "哦搜哦是",
            "content": "额咖啡机可减肥",
            "createTime": "2014-10-23 03__55__09",
            "icon": "",
            "icons": ""
        }
    ]
}
```

# 这是一个upload请求

## 请求连接 

http://127.0.0.1:3456/post/formdata

## 请求类型 

upload

## 请求参数

```
{
    "names": "pic",
    "filename": "da_qin_huang_ling_.mobi"
}
```

## 响应内容 (请求成功)

### 响应体内容

```
{
    "statusCode": 302,
    "body": "Moved Temporarily. Redirecting to /",
    "headers": {
        "x-powered-by": "Express",
        "location": "/",
        "vary": "Accept",
        "content-type": "text/plain; charset=utf-8",
        "content-length": "35",
        "date": "Wed, 24 Dec 2014 13__02__17 GMT",
        "connection": "keep-alive"
    },
    "request": {
        "uri": {
            "protocol": "http__",
            "slashes": true,
            "auth": null,
            "host": "127.0.0.1__3456",
            "port": "3456",
            "hostname": "127.0.0.1",
            "hash": null,
            "search": null,
            "query": null,
            "pathname": "/post/formdata",
            "path": "/post/formdata",
            "href": "http__//127.0.0.1__3456/post/formdata"
        },
        "method": "POST",
        "headers": {
            "content-type": "multipart/form-data; boundary=--------------------------054632406431976149445740",
            "content-length": 3430283
        }
    }
}
```

