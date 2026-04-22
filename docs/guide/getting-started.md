# 시작하기

`@newtil/components`는 newtil 패밀리의 기본 컴포넌트 라이브러리입니다. `n-` prefix 클래스로 prose(본문), table, pagination 등을 제공합니다. Material Design 3 구현체가 필요하면 [`@newtil/materials`](https://github.com/newlecture-corp/newtil-materials)를 사용하세요.

## 설치

```bash
npm install @newtil/components
```

`@newtil/design-tokens`가 peer dependency로 함께 설치됩니다.

## 단독 사용

CSS 하나만 불러오면 됩니다.

```html
<!-- HTML -->
<link rel="stylesheet" href="/node_modules/@newtil/components/dist/index.css" />
```

```js
// 번들러 (Vite, Webpack, Next.js 등)
import "@newtil/components";
```

```css
/* 또는 CSS에서 */
@import "@newtil/components";
```

## @newtil/materials와 함께 사용

두 패키지는 각자 자기 prefix (`n-*`, `m3-*`)만 리셋하므로 **순서에 무관**하게 import 해도 됩니다.

```js
import "@newtil/materials";    // m3-* 컴포넌트 + m3-* 스코프 reset
import "@newtil/components";   // n-* 컴포넌트 + n-* 스코프 reset
```

## 기본 사용 예

<Demo>
<article class="n-prose">
  <h2>공지사항 제목</h2>
  <p>본문 내용입니다. <strong>강조</strong>도 되고 <a href="#">링크</a>도 자연스럽게 표시됩니다.</p>
  <ul>
    <li>리스트 항목 1</li>
    <li>리스트 항목 2</li>
  </ul>
</article>
</Demo>

<Demo>
<table class="n-table table:striped table-hover:row">
  <thead>
    <tr><th>이름</th><th>역할</th><th class="cell:numeric">포인트</th></tr>
  </thead>
  <tbody>
    <tr><td>홍길동</td><td>관리자</td><td class="cell:numeric">1,240</td></tr>
    <tr><td>김철수</td><td>강사</td><td class="cell:numeric">870</td></tr>
    <tr><td>이영희</td><td>수강생</td><td class="cell:numeric">520</td></tr>
  </tbody>
</table>
</Demo>

## 다크모드

별도 설정 없이 시스템 테마를 따라갑니다 (`prefers-color-scheme: dark`). 수동 제어는 `data-theme` 속성으로:

```html
<html data-theme="dark">…</html>
<html data-theme="light">…</html>
```

모든 `n-*` 컴포넌트는 semantic 토큰을 참조하므로, 토글 시 자동으로 다크/라이트 테마로 전환됩니다.

## Next.js App Router

Next.js에서 `node_modules` CSS를 `app/layout.tsx` 또는 `app/globals.css`에서 import하면 됩니다.

```ts
// app/layout.tsx
import "@newtil/components";
```

Next.js가 `@import url()` 외부 URL 스타일을 번들링에서 누락시키는 경우가 있지만, `@newtil/components`는 외부 폰트 등 URL import를 사용하지 않으므로 이 문제가 없습니다.

## 다음 단계

- [커스터마이징](/guide/customization) — 타입 → 옵션 → 변수 3단계 원칙
- [Prose](/guide/prose) — 마크다운 본문 렌더링
- [Table](/guide/table) — 데이터 표
