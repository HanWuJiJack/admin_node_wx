# wx-demo 常用说明

## 小程序适配方案: rpx (responsive pixel 响应式像素单位)
### a) 小程序适配单位： rpx
### b) 规定任何屏幕下宽度为 750rpx
### c) 小程序会根据屏幕的宽度不同自动计算 rpx 值的大小
### d) Iphone6（375px * 667px）下： 1rpx = 1 物理像素 = 0.5px
### 总结：ui宽度调成750px、小程序使用Iphone6，px直接转成rpx

## 小程序使用 npm 包
### 1 初始化 package.json
npm init
### 2 勾选允许使用 npm
### 3 下载 npm 包
npm install packageName
### 4 构建 npm
1. 开发工具 ---> 工具 ---> 构建 npm
2. 会将 node_modules 中的包打包到 miniprogram_npm 中

### 基础库 2.9.5