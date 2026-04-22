---
layout: home
hero:
  name: "@newtil/components"
  text: "newtil 기본 컴포넌트"
  tagline: 마크다운 본문, 데이터 표, 페이지네이션 등 웹사이트에 꼭 필요한 컴포넌트들. n- prefix, 토큰 기반, 다크모드 내장.
  actions:
    - theme: brand
      text: 시작하기
      link: /guide/getting-started
    - theme: alt
      text: GitHub
      link: https://github.com/newlecture-corp/newtil-components
---

## 어떤 라이브러리인가요?

`@newtil/components`는 newtil 패밀리의 **기본 컴포넌트 라이브러리**입니다. `n-` prefix 클래스로 prose(본문), table, pagination 등을 제공합니다.

Material Design 3 스펙 기반 컴포넌트가 필요하면 [`@newtil/materials`](https://github.com/newlecture-corp/newtil-materials)를 사용하세요. 둘은 같은 토큰(`@newtil/design-tokens`) 위에 살기 때문에 함께 써도 시각적으로 일관됩니다.

| 패키지 | 역할 | Prefix |
|--------|------|--------|
| [`@newtil/design-tokens`](https://github.com/newlecture-corp/newtil-design-tokens) | CSS 변수 (foundation) | — |
| [`@newtil/css`](https://github.com/newlecture-corp/newtil-css) | Utility 클래스 | — |
| **`@newtil/components`** | **newtil 기본 컴포넌트** | **`n-`** |
| [`@newtil/materials`](https://github.com/newlecture-corp/newtil-materials) | Material Design 3 구현 | `m3-` |
| [`@newtil/editor`](https://github.com/newlecture-corp/newtil-editor) | Markdown ↔ HTML 에디터 | — |

## 핵심 원칙

| 원칙 | 설명 |
|------|------|
| **타입 → 옵션 → 변수** | 3단계 커스터마이징. 옵션을 먼저 찾고, 변수 오버라이드는 마지막 수단 |
| **토큰 기반** | 하드코딩 없음. 모든 색/간격/라디우스는 `@newtil/design-tokens` 참조 |
| **다크모드 자동** | semantic 토큰이 다크모드를 처리하므로 별도 스타일 불필요 |
| **프레임워크 무관** | 순수 CSS 클래스 — React, Vue, Svelte, 바닐라 HTML 어디서든 |
| **에디터와 짝** | `@newtil/editor`로 작성한 마크다운이 `n-prose`로 동일하게 렌더링됨 |

## 컴포넌트

- **[Prose](/guide/prose)** — 마크다운/HTML 본문 렌더링 (p, h1-h6, ul, ol, blockquote, pre, code, a, img, table 등)
- **[Table](/guide/table)** — 데이터 표 (striped, bordered, minimal + rounded/hover/compact 옵션)

## 로드맵

다음 순서로 추가됩니다:

1. ✅ **Prose** — 공지·게시글 본문 렌더링 (0.1.0)
2. ✅ **Table** — 데이터 표 (0.1.0)
3. ⏳ **Pagination** — 페이지 네비게이션
4. ⏳ **Breadcrumb** — 계층 경로
5. ⏳ **Accordion** — 접기/펴기
6. ⏳ **Skeleton** — 로딩 플레이스홀더
