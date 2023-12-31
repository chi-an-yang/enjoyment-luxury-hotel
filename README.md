# Typescript 30 酒店訂房網


## Github flow
1. 從主 repo fork 一份到自己 repo 底下
2. 在自己的 fork repo 開分支出來開發，不限制分支命名
3. 在主 repo 建立 PR (pull request)，根據開發內容決定 PR 要對應的是 master 還是 feature

## 下載專案
1. 從主 repo fork 一份到自己 repository
2. 透過 git clone 下載到 local

```bash
git clone git@github.com:{你的 github username}/enjoyment-luxury-hotel.git
```

## 安裝
- Node.js 版本需求：16.16.0+
- 本專案使用 pnpm 建立，用 yarn/npm 也可以。

```bash
pnpm install
```

## 開發
- 啟動服務，預設頁面是 http://127.0.0.1:3022

```bash
pnpm run dev
```