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
- 本專案使用 [pnpm](https://pnpm.io/zh-TW) 建立。

```bash
pnpm install
```

## 開發
- 啟動服務，預設頁面是 http://127.0.0.1:3022

```bash
pnpm run dev
```

### git commit
- 我們主要參考[約定式提交](https://www.cythilya.tw/2021/03/16/conventional-commits/)的原則撰寫 git commit
- 此專案有引入 git-cz 套件，所以可以執行 `pnpm commit` 來協助撰寫 git commit message

### 專案資料夾結構

```bash
src
├── apis # api 定義
├── assets # 素材
├── common # 共用的頁面元件 Footer、Navbar 等
├── pages # 頁面
├── services # 業務邏輯
├── theme # 樣式設定檔
├── ui-components # 共用基礎元件 InputField、Modal 等
├── utils # 常用工具
├── App.tsx
├── main.tsx
├── routes.tsx # 路由設定
└── vite-env.d.ts
```

### 元件資料夾結構

#### 新元件：建立與資料夾同名的 tsx 檔及 index.ts

- {元件}.tsx 負責元件的 code
- index.ts 負責對外匯出

範例：Model 元件

```bash
Modal
├── Modal.tsx # Modal.tsx 負責元件的 code
└── index.ts # index.ts 負責 export 的 code
```

```tsx
// Modal.tsx
const Modal = () => { ... }
export default Modal;

// index.ts
export { default } from './Modal';
```

#### 功能較複雜的元件：將需要的程式或設定檔寫在一起

範例：區域選擇器
- 需要用到 config.json，就在這元件資料夾裡建立 config 資料夾來放
- 假設有比較複雜的業務邏輯，就建立元件自己的 services

```bash
AreaSelector
├── config
│   ├── config.json
│   └── index.ts
├── services
│   ├── foo.ts
│   ├── bar.ts
│   └── index.ts
├── AreaSelector.tsx
└── index.ts
```