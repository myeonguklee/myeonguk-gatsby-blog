---
emoji: 👨🏻‍🍳
title: 'Next.js-모달 구현, 그런데 Intercepting, Parallel Routes를 곁들인'
date: '2024-12-17'
categories: featured-dev
---

## Intercepting Routes, Parallel Routes 활용 예시

![image](https://github.com/user-attachments/assets/254c825d-4cc3-4caf-a694-3f7c889d15e7)

- 목록에서 사진을 클릭하였을 때 모달로 띄워짐 (intercepting, parallel routes)

![image](https://github.com/user-attachments/assets/27ae1fec-13bf-49fe-a872-87c0eeb85d2a)

- 새로고침하거나 다이렉트로 접근했을 때 원래 페이지로 이동 (url 변화 X, intercepting X)



## Intercepting Routes

### 폴더 구조
```bash
app
├── home
│   ├──(..)product/[id]
│   │   └── page.tsx
│   └── page.tsx
│
└── product/[id]
    └──  page.tsx
```
=> ("/home")에서 ("product/[id]")로 이동할 때 (..)product/[id] 디렉토리의 page.tsx 렌더링

(..)는 우리가 디렉토리 이동할 때 ../ 사용하는 것과 같은 의미
- (.) : same level
- (..) : one level above
- (..)(..) : two level above
- (...) : root directory


## Parallel Routes

### 폴더구조
```bash
app
├── @modal
│   ├── default.tsx
│   └── page.tsx
│
├── home
│   └── page.tsx
│
└── page.tsx
```
=> root directory의 page.tsx("/") 에서 @modal의 page.tsx도 같이 렌더링, ("/home")에서는 404 에러(계층이 같지 않아서)

- rootLayout.tsx 에 "modal" props 추가해주기 + {children}옆에 {modal} 추가하기
- **default.tsx 필요!** <- 계층이 같지 않은 페이지에서 혹은 소프트 네비게이션(children 내에서 Link로 이동)상황에서 새로고침 되었을 때 404 에러 막아줌



## 그래서 intercepting, parallel 같이 쓰려면??
```bash
app
├── home
│   ├──@modal
│   │   ├── (..)product/[id]
│   │   │   └── page.tsx
│   │   │
│   │   └── default.tsx
│   │
│   └── page.tsx
│
└── product/[id]
    └──  page.tsx
```

[Next 공식문서 : intercepting-routes](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes)

[Next 공식문서 : parallel-routes](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)

```toc
```