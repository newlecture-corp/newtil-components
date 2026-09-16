# @newtil/components

`n-` 접두사 기본 컴포넌트 — prose · table · layout · resize-handle.

`@newtil/components` 는 newtil 패밀리의 기본 컴포넌트 라이브러리다. `n-prose`(마크다운/HTML 본문), `n-table`(데이터 표), `n-layout`(6-슬롯 도구 앱 레이아웃) 세 CSS 컴포넌트와 슬롯 폭을 드래그로 조절하는 웹 컴포넌트 `<n-resize-handle>` 을 제공한다. 모든 색·간격·글꼴은 `@newtil/design-tokens` 의 CSS 변수만 참조하므로 다크모드가 자동으로 따라오고, 포함된 reset 은 `n-*` 클래스 안(또는 `body.reset`)에만 적용되어 기존 페이지 스타일을 건드리지 않는다. Material Design 3 컴포넌트(`m3-*`)는 별도 패키지 `@newtil/materials` 다.

## 설치

```bash
npm install @newtil/components
```

`@newtil/design-tokens` 는 일반 의존성이라 함께 설치된다.

## 빠른 시작

CSS 한 파일을 불러온다. 토큰·reset·컴포넌트가 모두 들어 있다.

```js
// 번들러 (Vite, Webpack, Next.js 등)
import "@newtil/components";
```

```html
<!-- 또는 HTML 에서 직접 -->
<link rel="stylesheet" href="/node_modules/@newtil/components/dist/index.css" />
```

본문 렌더링 — 래퍼에 `n-prose` 만 붙인다.

```html
<article class="n-prose">
  <h1>제목</h1>
  <p>마크다운을 변환한 HTML 이 <strong>일관된 스타일</strong>로 표시된다.</p>
  <blockquote><p>인용</p></blockquote>
  <pre><code>console.log("code");</code></pre>
</article>
```

도구 앱 레이아웃 — 여섯 슬롯 중 안 쓰는 슬롯은 옵션 클래스로 뺀다.

```html
<div class="n-layout layout:no-status" style="--layout-tint: #4f46e5">
  <header class="layout-header">…</header>
  <nav class="layout-rail">…</nav>
  <nav class="layout-sidebar">
    …
    <n-resize-handle target="--grid-col-sidebar" min="180" max="500"></n-resize-handle>
  </nav>
  <main class="layout-main">…</main>
  <aside class="layout-panel">…</aside>
</div>
```

`<n-resize-handle>` 은 브라우저에서 한 번 등록한다.

```js
import "@newtil/components/n-resize-handle";
```

## 문서

- 가이드·라이브 데모: https://newlecture-corp.github.io/newtil-components/
- 변경 이력: [CHANGELOG.md](./CHANGELOG.md)

## 컴포넌트

| 컴포넌트 | 용도 | 문서 |
|---|---|---|
| `n-prose` | 마크다운/HTML 본문 렌더링. `prose:sm` / `prose:lg` | [Prose](https://newlecture-corp.github.io/newtil-components/guide/prose.html) |
| `n-table` | 데이터 표. `table:striped` / `bordered` / `minimal` + `table-shape:rounded` / `table-hover:row` / `table-density:compact` | [Table](https://newlecture-corp.github.io/newtil-components/guide/table.html) |
| `n-layout` | header / rail / sidebar / main / panel / status 6-슬롯 그리드. `--layout-tint` 한 줄로 슬롯 음영 | [Layout](https://newlecture-corp.github.io/newtil-components/guide/layout.html) |
| `<n-resize-handle>` | n-layout 슬롯 폭을 드래그로 조절하는 웹 컴포넌트 | [Resize handle](https://newlecture-corp.github.io/newtil-components/guide/resize-handle.html) |

## newtil 패밀리

| 패키지 | 역할 | 문서 |
|---|---|---|
| [`@newtil/design-tokens`](https://github.com/newlecture-corp/newtil-design-tokens) | CSS 변수(토큰) — 색·간격·글꼴·모서리·그림자·층. 모든 패키지의 바닥 | [docs](https://newlecture-corp.github.io/newtil-design-tokens/) |
| [`@newtil/css`](https://github.com/newlecture-corp/newtil-css) | 실제 CSS 속성명 기반 유틸리티 클래스 + JIT | [docs](https://newlecture-corp.github.io/newtil-css/) |
| **`@newtil/components`** | `n-` 접두사 기본 컴포넌트 — prose·table·layout·resize-handle | [docs](https://newlecture-corp.github.io/newtil-components/) |
| [`@newtil/materials`](https://github.com/newlecture-corp/newtil-materials) | Material Design 3 구현 `m3-` 컴포넌트 | [docs](https://newlecture-corp.github.io/newtil-materials/) |
| [`@newtil/editor`](https://github.com/newlecture-corp/newtil-editor) | 마크다운↔HTML 양방향 편집기 웹 컴포넌트(React/Vue 래퍼) | [docs](https://newlecture-corp.github.io/newtil-editor/) |
| [`@newtil/drawing`](https://github.com/newlecture-corp/newtil-drawing) | 캡처 위에 화살표·상자·글자를 그리는 그림판(PNG+JSON) | [docs](https://newlecture-corp.github.io/newtil-drawing/) |

## 개발

```bash
npm ci
npm run build        # dist/index.css + dist/js/ (rollup)
npm run docs:dev     # VitePress 문서 로컬 서버 (dist 를 읽으므로 build 먼저)
npm run docs:build   # 문서 정적 빌드
```

- 소스: `css/`(reset, component/n-*.css), `js/`(n-resize-handle.js + .d.ts). 빌드 산출물은 `dist/` 로 나가며 git 에 올리지 않는다.
- `test/prose.html`, `test/table.html` — 브라우저에서 직접 여는 정적 확인 페이지.
- 문서 배포: `main` 푸시 시 `.github/workflows/docs.yml` 이 GitHub Pages 로 올린다.
- 게시: `npm run deploy` (build 후 `npm publish`).

## 라이선스

[MIT](./LICENSE) © 2026 newlecture
