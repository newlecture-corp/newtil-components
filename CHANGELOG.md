# Changelog

## 0.4.10 (2026-09-28) — 그림 가운데 정렬

- `n-prose`: 편집기가 준 정렬(`<div align>` 문단 상자, `<img align>`)을 그림에도 적용한다. 그림은 `display: block` 이라 상자의 `text-align: center` 가 먹지 않아, 편집기에선 가운데였던 그림이 저장 후 읽기 화면에선 왼쪽에 붙어 있었다(정렬은 마크다운에 남아 있었고 화면만 풀렸다). `margin-inline: auto` 로 상자가 시킨 자리에 놓는다.

## 0.4.9 (2026-09-18) — 굵게+기울임 겹침

- reset 이 `strong`·`em` 에 `font-weight`·`font-style` 을 둘 다 되돌려, `<em><strong>…</strong></em>` 처럼 겹치면 안쪽이 바깥 스타일을 지우던 버그. `strong`·`caption` 은 굵기만, `em`·`cite`·`address` 는 기울임만 되돌린다.

## 0.4.8 (2026-09-16) — 문서

- README·LICENSE 신설(게시본에 빠져 있었다). 문서: n-resize-handle 페이지 추가, 옛 이름·잘못된 안내 정정. Pages 워크플로가 dist 를 빌드하지 않아 404 이던 문제 수정.

## 0.4.7 (2026-09-16) — design-tokens 0.2.1 반영

- 의존: `@newtil/design-tokens ^0.2.1`.
- n-layout: `--color-on-surface` → `--color-text`, 존재하지 않던 `--color-outline` → `--color-border`(구분선이 다크에서 검정 fallback 으로 그려지던 문제). 토큰 hex fallback 제거 — design-tokens 는 필수 의존이라 fallback 은 누락을 가릴 뿐이다.
- n-prose: `--color-on-surface-inverse` → `--color-text-inverse`. `hr` 에 `display: block` — reset 이 n-* 안의 hr 를 숨기는데 n-prose 가 되살리지 않아 마크다운 수평선이 안 보였다.
- 문서·테스트 페이지의 `surface-subtle / muted` → `surface-1 / 2`.
