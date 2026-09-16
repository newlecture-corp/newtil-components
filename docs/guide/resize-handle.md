# Resize handle — 슬롯 폭 조절

`<n-resize-handle>` 은 [`n-layout`](/guide/layout) 의 sidebar / panel 폭을 마우스 드래그로 조절하는 웹 컴포넌트입니다. 슬롯 안에 자식으로 두면 슬롯 가장자리에 4px 폭의 보이지 않는 핸들이 생기고, 드래그하면 `.n-layout` 의 그리드 컬럼 변수를 픽셀 값으로 덮어씁니다.

이 패키지에서 유일한 JS 컴포넌트입니다. 나머지(`n-prose`, `n-table`, `n-layout`)는 순수 CSS 입니다.

## 등록

한 번만 import 하면 `customElements` 에 `n-resize-handle` 이 등록됩니다.

```js
// 개별 import — 권장
import "@newtil/components/n-resize-handle";

// 또는 이 패키지의 모든 웹 컴포넌트를 한 번에
import "@newtil/components/js";
```

이미 등록되어 있으면(`customElements.get("n-resize-handle")`) 다시 등록하지 않으므로 여러 곳에서 import 해도 안전합니다.

## 기본 사용

```html
<div class="n-layout">
  <nav class="layout-sidebar">
    …
    <n-resize-handle target="--grid-col-sidebar" min="180" max="500"></n-resize-handle>
  </nav>
  <main class="layout-main">…</main>
  <aside class="layout-panel">
    <n-resize-handle target="--grid-col-panel" side="left" min="200" max="600"></n-resize-handle>
    …
  </aside>
</div>
```

- 핸들은 **부모 슬롯**(`layout-sidebar`, `layout-panel`)의 자식으로 둡니다. `position: absolute` 로 부모의 위·아래 전체 높이를 차지하며, n-layout 슬롯에는 `position: relative` 가 이미 잡혀 있습니다.
- sidebar 는 오른쪽 가장자리를 끌므로 기본값(`side="right"`), panel 은 왼쪽 가장자리를 끌므로 `side="left"` 를 지정합니다.
- 조절 대상은 `.n-layout` 이 grid 컬럼에 쓰는 변수 `--grid-col-sidebar` / `--grid-col-panel` 입니다. 핸들은 `closest(".n-layout")` 로 레이아웃을 찾으므로 n-layout 밖에서는 동작하지 않습니다.

## 속성

| 속성 | 기본값 | 설명 |
|---|---|---|
| `target` | `--grid-col-sidebar` | 드래그로 값을 바꿀 CSS 변수명. `.n-layout` 요소의 인라인 스타일에 `px` 로 기록됩니다 |
| `side` | `right` | 핸들이 붙는 부모 슬롯의 가장자리. `right` / `left`. `left` 면 왼쪽으로 끌 때 폭이 커집니다 |
| `min` | `100` | 최소 폭 (px) |
| `max` | `800` | 최대 폭 (px) |

`observedAttributes` 는 네 속성 모두를 선언하지만 값은 드래그 시점에 읽으므로, 동적으로 바꿔도 다음 드래그부터 반영됩니다. 다만 `side` 로 정해지는 핸들 위치는 `connectedCallback` 에서 한 번만 잡히므로, 마운트 후 `side` 를 바꾸려면 요소를 다시 붙여야 합니다.

## 동작

1. `mousedown` — 부모 슬롯의 실제 픽셀 폭(`offsetWidth`)을 기준 폭으로 잡습니다. CSS 변수를 `getComputedStyle` 로 읽으면 `rem` 이나 `var(...)` 문자열이 돌아오는 경우가 있어 실측을 씁니다. 동시에 `.n-layout` 에 `data-resizing` 속성이 붙어 커서가 `col-resize` 로 고정되고 텍스트 선택이 막힙니다.
2. `mousemove` — `기준 폭 + 이동량` 을 `min`~`max` 로 자른 뒤 `target` 변수에 `px` 로 씁니다.
3. `mouseup` — `data-resizing` 을 떼고 핸들 색을 되돌립니다.

핸들 색은 hover 시 `--layout-divider`, 드래그 중 `--color-primary` 입니다.

## 이벤트

커스텀 이벤트를 발행하지 않습니다. 폭 변화를 감지해야 하면 `.n-layout` 의 `style` 속성(변수 값) 또는 `data-resizing` 속성을 `MutationObserver` 로 관찰합니다.

```js
const layout = document.querySelector(".n-layout");
new MutationObserver(() => {
  if (!layout.hasAttribute("data-resizing")) {
    // 드래그 종료 — 현재 폭 읽기
    console.log(layout.style.getPropertyValue("--grid-col-sidebar"));
  }
}).observe(layout, { attributes: true, attributeFilter: ["data-resizing"] });
```

폭을 저장해 두었다가 복원하는 것은 호출자 몫입니다. `.n-layout` 의 `--layout-sidebar-width` / `--layout-panel-width` 를 초기값으로 주면 됩니다.

## JS API

```ts
import NResizeHandle from "@newtil/components/n-resize-handle";
// 또는
import { NResizeHandle } from "@newtil/components/js";
```

default export 는 `HTMLElement` 를 상속한 클래스입니다. `HTMLElement` 가 없는 환경(Node, SSR prerender)에서는 `null` 이므로 타입은 `typeof NResizeHandle | null` 입니다. 보통은 클래스를 직접 쓸 일이 없고 import 의 등록 부수효과만 필요합니다.

`.d.ts` 에 React JSX 타입(`n-resize-handle` 의 `target` / `side` / `min` / `max`)이 선언되어 있어 TSX 에서 바로 쓸 수 있습니다.

```tsx
<n-resize-handle target="--grid-col-sidebar" min={180} max={500} />
```

## SSR / Next.js

모듈은 `typeof HTMLElement !== "undefined"` 가드 안에서만 클래스를 정의·등록하므로 서버에서 import 되어도 오류는 나지 않습니다. 그러나 등록은 브라우저에서만 일어나므로 **클라이언트에서 실행되는 모듈**에서 import 하세요. Next.js App Router 에서는 `"use client"` 컴포넌트(레이아웃 등)에서 import 하면 됩니다.

```tsx
"use client";
import "@newtil/components/n-resize-handle";

export default function AppLayout({ children }) {
  return (
    <div className="n-layout layout:no-status">
      <header className="layout-header">…</header>
      <nav className="layout-rail">…</nav>
      <aside className="layout-sidebar">
        …
        <n-resize-handle target="--grid-col-sidebar" min={180} max={500} />
      </aside>
      <main className="layout-main">{children}</main>
      <aside className="layout-panel">
        <n-resize-handle target="--grid-col-panel" side="left" min={200} max={600} />
        …
      </aside>
    </div>
  );
}
```

## 한계

소스 기준 현재 동작 범위입니다.

- 마우스 이벤트(`mousedown` / `mousemove` / `mouseup`)만 처리합니다. 터치·포인터 이벤트, 키보드 조작은 없습니다.
- 가로 폭만 조절합니다. header / status 높이 조절은 지원하지 않습니다.
- 768px 미만에서는 n-layout 이 좌우 슬롯을 숨기므로 핸들도 함께 사라집니다.
