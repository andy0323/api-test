# api# 这是一个post请求

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
            "createTime": "2014-10-22 06:41:55",
            "icon": "http://218.247.15.102/emm_backend_static/serverType/4f331b28a3e6418cad0945eb92e97259.png",
            "icons": "http://218.247.15.102/emm_backend_static/serverType/500fa7ff5df6486f957cb40eb44a1408.png"
        },
        {
            "id": 22,
            "title": "哦搜哦是",
            "content": "额咖啡机可减肥",
            "createTime": "2014-10-23 03:55:09",
            "icon": "",
            "icons": ""
        }
    ]
}
```# 这是一个get请求

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
        "url": "https://shiren1118.b0.upaiyun.com/AppCenter0627.plist",
        "createTime": "2014-09-22 11:14:30"
    }
}
```