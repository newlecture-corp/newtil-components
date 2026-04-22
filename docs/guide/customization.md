# 커스터마이징

`@newtil/*` 패키지는 모두 **3단계 우선순위**를 따릅니다. 원하는 스타일을 만들 때 이 순서로 시도하세요.

```
1. 타입 클래스      (기본 컴포넌트 사용)
       ↓ 부족하면
2. 옵션 클래스      (variant 조합)
       ↓ 옵션도 안 맞으면
3. CSS 변수 오버라이드  (최후의 수단)
```

## 1단계 — 타입

각 컴포넌트의 **기본 모양** 또는 **서로 배타적인 종류**입니다. 한 번에 하나만 적용하세요.

```html
<!-- 기본 -->
<table class="n-table">…</table>

<!-- 타입 변경 -->
<table class="n-table table:striped">…</table>
<table class="n-table table:bordered">…</table>
<table class="n-table table:minimal">…</table>
```

대부분의 경우 1단계에서 충분합니다. 기본 타입은 **가장 자주 쓰는 모양**으로 설계되었습니다.

## 2단계 — 옵션

타입 위에 **조합해서** 얹는 수정자입니다. 여러 개를 함께 사용할 수 있습니다.

```html
<!-- 타입 + 옵션 조합 -->
<table class="n-table table:striped table-hover:row">…</table>

<table class="n-table table:bordered table-shape:rounded table-density:compact">…</table>
```

**옵션 네이밍 규칙:**

| 형식 | 예시 |
|------|------|
| `{컴포넌트}-{속성}:{값}` | `table-shape:rounded`, `table-density:compact` |
| 셀/항목 옵션 (스코프 지역) | `cell:numeric`, `cell:center` |

옵션이 **없어서** 원하는 모양이 안 나오면 — 이는 옵션을 추가할 신호입니다. 변수 오버라이드로 우회하지 마세요.

## 3단계 — CSS 변수

타입·옵션 조합으로 해결 안 되는 **1회성 특수 케이스**에만 사용합니다. 변수는 `@newtil/design-tokens`의 semantic 토큰을 재정의하는 형태입니다.

```html
<!-- 특정 블록 영역에만 primary 색을 브랜드 색으로 강제 -->
<div style="--color-primary: #ff6b35;">
  <table class="n-table">…</table>
</div>
```

전역 테마 변경이 목적이라면 `--color-primary`, `--color-secondary` 등을 `:root`에서 재정의합니다:

```css
:root {
  --color-primary: #4f46e5;
  --color-primary-hover: #4338ca;
  --color-primary-active: #3730a3;
}
```

## 왜 이 순서인가?

- **타입**: 기본값이 실전에 맞지 않으면 → 라이브러리 설계가 잘못됨
- **옵션**: 자주 쓰는 변형을 미리 정의 → 사용자가 매번 변수를 만지지 않아도 됨
- **변수**: "이 한 곳만" 다를 때 → 전체 일관성을 유지하면서 예외 처리

변수 오버라이드가 많다는 것은 → **옵션이 부족하다는 신호**입니다. 이때는 라이브러리에 옵션을 추가하는 것이 옳습니다.

## 다크모드

토큰이 다크모드를 이미 처리하므로 **별도 작업 불필요**합니다. 예외 케이스에서 변수를 오버라이드할 때도 다크모드를 고려해야 합니다:

```css
.my-override {
  --color-surface-muted: #f5f5f5;
}

@media (prefers-color-scheme: dark) {
  .my-override {
    --color-surface-muted: #2a2a2a;
  }
}
```

## 네이밍 규칙 요약

| 패턴 | 뜻 | 예시 |
|------|-----|------|
| `n-{컴포넌트}` | 기본 클래스 | `n-table`, `n-prose` |
| `{컴포넌트}:{타입}` | 타입 (배타) | `table:striped`, `prose:sm` |
| `{컴포넌트}-{속성}:{값}` | 옵션 (조합) | `table-hover:row`, `table-density:compact` |
| `{요소}:{값}` | 요소 스코프 옵션 | `cell:numeric`, `cell:center` |

`@newtil/materials`와 동일한 규칙을 사용합니다. 한 번 익히면 두 패키지 모두에 적용됩니다.
