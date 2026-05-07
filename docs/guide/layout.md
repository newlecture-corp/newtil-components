# n-layout — Tool app layout

Slack · Discord · VSCode · Linear 같은 도구 앱의 표준 layout 컴포넌트입니다. 6개 슬롯 (header / rail / sidebar / main / panel / status) 을 CSS Grid 로 배치하고, **`--layout-tint` 한 줄로 4개 슬롯 색상이 자동 음영** 처리됩니다. 라이트/다크 테마 자동 분기. M3 의 `m3-layout` 이 단일 navigation 어댑티브 layout 인 것과 다르게, 이 컴포넌트는 *영구적으로 표시되는 다영역 도구 앱* 을 다룹니다.

## 슬롯 구조

```
┌──────────────────────────────────────┐
│             header                   │  전체 폭
├──────┬─────────┬────────┬────────────┤
│ rail │ sidebar │  main  │   panel    │
│      │         │        │            │
├──────┴─────────┴────────┴────────────┤
│             status                   │  전체 폭
└──────────────────────────────────────┘
```

| 슬롯 | 역할 | 예시 |
|---|---|---|
| `layout-header` | 상단 top app bar | 로고·검색·알림·프로필 |
| `layout-rail` | 좌측 최외곽 (좁음, icon-only) | 워크스페이스·앱 전환 |
| `layout-sidebar` | 좌측 sub navigation | 채널 목록·파일 트리·메뉴 그룹 |
| `layout-main` | 중앙 콘텐츠 | 본문 |
| `layout-panel` | 우측 (옵션) | inspector·detail·chat |
| `layout-status` | 하단 status bar (옵션) | VSCode 의 status bar |

## 기본 사용

```html
<div class="n-layout">
  <header class="layout-header">...</header>
  <nav    class="layout-rail">...</nav>
  <nav    class="layout-sidebar">...</nav>
  <main   class="layout-main">...</main>
  <aside  class="layout-panel">...</aside>
  <footer class="layout-status">...</footer>
</div>
```

각 슬롯은 옵션 — 안 쓰는 슬롯은 마크업에서 빼고 옵션 클래스로 grid 도 함께 줄입니다.

## 옵션 클래스

조합 자유. 슬롯이 사라지면서 grid 컬럼/로우도 자동으로 재배치됩니다.

| 클래스 | 효과 |
|---|---|
| `layout:no-header` | header 슬롯 숨김 |
| `layout:no-rail` | rail 슬롯 숨김 |
| `layout:no-sidebar` | sidebar 슬롯 숨김 |
| `layout:no-panel` | panel 슬롯 숨김 |
| `layout:no-status` | status 슬롯 숨김 |
| `layout:sidebar-collapsed` | sidebar 폭을 rail 폭으로 축소 |

```html
<!-- panel·status 없이 사용 -->
<div class="n-layout layout:no-panel layout:no-status">
  <header class="layout-header">...</header>
  <nav class="layout-rail">...</nav>
  <nav class="layout-sidebar">...</nav>
  <main class="layout-main">...</main>
</div>
```

## 색상 시스템 — `--layout-tint`

호출자가 **색 하나만** 지정하면 4개 슬롯 (rail / sidebar / main / panel) 이 자동 단계적 음영으로 채색됩니다. `color-mix(in oklch, ...)` 기반.

```html
<div class="n-layout" style="--layout-tint: #4f46e5">
  ...
</div>
```

| 슬롯 | 라이트 모드 | 다크 모드 |
|---|---|---|
| rail | tint + black 20% | tint + black 50% |
| sidebar | tint + black 10% | tint + black 35% |
| main | tint 4% + surface | tint 3% + dark surface |
| panel | tint 6% + surface | tint 5% + dark surface |

`--layout-tint` 미지정 시 `var(--color-surface)` 따라가서 design-tokens 의 라이트/다크에 자동 적응합니다 (중성 톤).

### 다크 모드 자동 분기

`[data-theme="dark"]` 또는 `@media (prefers-color-scheme: dark)` 가 적용된 환경에서 mix 비율이 자동으로 어두워집니다. 호출자가 별도 처리할 필요 없음.

## 변수 API

### 슬롯 치수

| 변수 | 기본값 | 설명 |
|---|---|---|
| `--layout-rail-width` | `4rem` | rail 폭 |
| `--layout-sidebar-width` | `16rem` | sidebar 폭 |
| `--layout-panel-width` | `20rem` | panel 폭 |
| `--layout-header-height` | `3.5rem` | header 높이 |
| `--layout-status-height` | `1.75rem` | status 높이 |

### 색상 — 자동 파생 (개별 강제 가능)

| 변수 | 기본값 |
|---|---|
| `--layout-tint` | `var(--color-surface)` |
| `--layout-rail-bg` / `--layout-rail-fg` | tint 기반 자동 |
| `--layout-sidebar-bg` / `--layout-sidebar-fg` | tint 기반 자동 |
| `--layout-main-bg` / `--layout-main-fg` | tint 기반 자동 |
| `--layout-panel-bg` / `--layout-panel-fg` | tint 기반 자동 |
| `--layout-header-bg` / `--layout-header-fg` | rail 과 동일 |
| `--layout-status-bg` / `--layout-status-fg` | rail 과 동일 |
| `--layout-divider` | `var(--color-outline)` |

자동 파생을 무시하고 슬롯별 색을 직접 지정하고 싶으면 해당 `*-bg` / `*-fg` 변수를 override 하면 됩니다.

## Resize handle — `<n-resize-handle>`

sidebar / panel 폭을 마우스 드래그로 조절하는 web component 입니다. 슬롯 안 자식으로 두면 자동 동작.

```html
<div class="n-layout">
  <nav class="layout-sidebar">
    ...
    <n-resize-handle target="--grid-col-sidebar" min="180" max="500"></n-resize-handle>
  </nav>
  <main class="layout-main">...</main>
  <aside class="layout-panel">
    <n-resize-handle target="--grid-col-panel" side="left" min="200" max="600"></n-resize-handle>
    ...
  </aside>
</div>
```

```js
// Web component 등록 (한 번만 어딘가에서)
import '@newtil/components/n-resize-handle';
```

| Attribute | 기본값 | 설명 |
|---|---|---|
| `target` | `--grid-col-sidebar` | 조절할 CSS 변수명 |
| `side` | `right` | `right` (slot 의 우측 핸들) / `left` (slot 의 좌측 핸들 — panel 용) |
| `min` | `100` | 최소 폭 (px) |
| `max` | `800` | 최대 폭 (px) |

::: tip Next.js / SSR
0.4.1 부터 `HTMLElement` 가드가 들어 있어 server prerender 시점에서도 import 안전합니다. 별도 dynamic import 불필요.
:::

## 다른 newtil 컴포넌트와의 결합

`n-layout` 의 슬롯 안에 `@newtil/materials` 의 m3-* 컴포넌트를 그대로 넣으면 — **layout 의 톤을 자동으로 따라갑니다**. n-layout 이 슬롯별로 newtil design tokens (`--color-surface`, `--color-on-surface`) 를 layout 톤으로 override 하기 때문입니다.

```html
<div class="n-layout" style="--layout-tint: #4f46e5">
  <!-- m3-top-app-bar 가 자동으로 indigo 진한 톤 -->
  <header class="m3-top-app-bar layout-header">
    <h1 class="bar-title">관리자</h1>
  </header>

  <!-- m3-nav-rail 도 자동으로 같은 톤, m3-deco active indicator 도 자동 -->
  <nav class="m3-nav-rail layout-rail">
    <div class="rail-items">
      <a class="m3-deco icon:home deco-pos:top deco-active">홈</a>
      <a class="m3-deco icon:search deco-pos:top">검색</a>
    </div>
  </nav>

  <main class="layout-main">...</main>
</div>
```

## 커스터마이징 가이드

### 1. 영역 정체성 — `--layout-tint`

각 영역 (admin · my · instructor · workspace) 별로 다른 tint 만 지정하면 일관된 음영 시스템이 자동 적용됩니다.

```css
/* admin 영역 */
.admin-layout {
  --layout-tint: #4f46e5;     /* indigo */
}

/* instructor 영역 */
.instructor-layout {
  --layout-tint: #16a34a;     /* green */
}
```

### 2. 슬롯 치수 조정

```css
.compact-layout {
  --layout-rail-width: 4rem;       /* M3 default 5rem 보다 컴팩트 */
  --layout-sidebar-width: 14rem;
  --layout-header-height: 3.25rem;
}
```

### 3. m3-* 자식 컴포넌트의 변수 customizing

m3-* 의 자체 변수 (`--bar-height`, `--rail-width` 등) 는 layout 의 슬롯 안에서 override 합니다.

```css
.compact-layout :global(.m3-nav-rail) {
  --rail-width: var(--layout-rail-width);   /* 슬롯 너비와 일치 */
}

.compact-layout :global(.layout-rail .m3-deco) {
  --deco-pill-width: calc(var(--icon-size) + 1rem);  /* 컴팩트 active indicator */
  --deco-pill-radius: 0.5rem;
}
```

### 4. ⚠️ m3-* 컴포넌트의 cascade 우선순위 주의

`@newtil/materials` 의 m3-* 컴포넌트들은 **CSS layer 밖(unlayered)** 에서 정의되어 있어 — `@layer components` 안 styling 보다 cascade 우선순위가 높습니다. 따라서 layout 톤을 m3-* 자식에 적용하려면:

- ✅ **불필요한 작업**: m3-* 의 `--bar-background` 같은 자체 변수를 일일이 매핑 (강한 결합)
- ✅ **권장**: design tokens (`--color-surface`, `--color-on-surface`) 만 슬롯 단위로 override → 모든 m3-* 자식이 자동으로 따라감

n-layout 이 이 패턴을 이미 내부에서 처리합니다 — 호출자가 추가 작업할 필요 없음.

## 반응형

| 브레이크 | 동작 |
|---|---|
| ≥ 768px | 정상 grid (모든 슬롯 표시) |
| < 768px | 좌우 슬롯 (`rail`, `sidebar`, `panel`) 자동 숨김. main 만 풀폭 |

::: tip 모바일 master-detail
모바일에서 nav rail 대신 하단 nav bar (`m3-nav-bar`) 로 전환하거나, "Nav 탭 → SidePanel only → 항목 탭 → main" 같은 master-detail 흐름은 호출자가 직접 구현합니다 (n-layout 은 grid 와 색상만 담당). 호출자는 `data-stage="panel|main"` 같은 attribute 로 미디어쿼리 분기하면 됩니다.
:::

## 알려진 한계 (0.4.x)

향후 patch 에서 추가 예정:

- 모바일 drawer (햄버거 → slide-in 오버레이)
- resize 너비 localStorage persist
- 키보드 a11y (resize handle 의 `role="separator"` + 화살표 키)
- panel 위치 옵션 (`:panel-bottom` / `:panel-left`)
- collapse transition 애니메이션

## 종합 예시 — Admin 영역

```css
/* admin/layout.module.css */
.layout {
  --layout-tint: #4f46e5;
  --layout-header-height: 3.25rem;
  --layout-rail-width: 4rem;

  height: 100dvh;
}

/* m3-* 자식 변수 매핑 */
.layout :global(.m3-nav-rail) {
  --rail-width: var(--layout-rail-width);
  --rail-border-right: none;
  height: 100%;
}

.layout :global(.layout-rail .m3-deco),
.layout :global(.m3-nav-bar .m3-deco) {
  --deco-pill-width: calc(var(--icon-size) + 1rem);
  --deco-pill-radius: 0.5rem;
  --deco-font-size: 0.6875rem;
}
```

```tsx
// admin/layout.tsx
import '@newtil/components/n-resize-handle';
import styles from './layout.module.css';

export default function AdminLayout({ children, sidePanel }) {
  return (
    <div className={`n-layout layout:no-status layout:no-panel ${styles.layout}`}>
      <Header />        {/* className 에 layout-header */}
      <Nav />           {/* className 에 layout-rail */}
      <aside className="layout-sidebar">
        {sidePanel}
        <n-resize-handle target="--grid-col-sidebar" min={180} max={500} />
      </aside>
      <main className="layout-main">{children}</main>
    </div>
  );
}
```
