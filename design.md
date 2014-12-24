# design 

it is a api degign && doc tools


## cli


	api = bin/api.js
	
## 执行

	api
	
## 步骤

- 读取request目录下得所有req文件
- 使用request npm执行，并取得返回结果
- 将返回结果写到对应的response目录
- 生成api目录，以及index.html页面

### 生成api

读取request目录下得所有req文件，遍历
读取req对应的response返回的结果

生成markdown格式文档，利用i5ting_toc生成文档


## post

	sudo npm install -g upload-cli
	sudo uc