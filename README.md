### 简介

本demo主要演示将light7与zeptojs、webpack结合，完成一个简单的示例代码。可以在此基础上进行功能和业务的扩展。



### 准备

在终端命令行下面命令，安装开发及运行时依赖库：

```bash
$ npm install
```
通过上面的命令，将安装`light7`和`zeptojs`运行库，以及`browser-sync`、`browser-sync-webpack-plugin`、`copy-webpack-plugin`、`css-loader`、`extract-text-webpack-plugin`、`file-loader`、`html-loader`、`html-webpack-plugin`、`less`、`less-loader`、`style-loader`、`url-loader`、`webpack`等开发时需要的依赖库。



### 运行

在终端运行下面命令，以启动页面：

```bash
$ npm run dev
```

运行了上面的命令后，会自动打开浏览器并跳转到`http://localhost:3000`页面。



### 发布

在终端运行下面命令，以编译程序：

```bash
$ npm run build
```

运行了上面的命令后，会在`www`目录生成压缩过的脚本和内容。



### 参考

- light7 : http://light7.org/
- zeptojs : http://zeptojs.com/




### 问题

在运行该示例代码时，请尽量不要在目录名称上包含特殊字符，否则可能导致webpack的自动监控模式失效（即：在`npm run dev`运行模式下，修改了src目录下面的文件，页面不再会自动刷新）。