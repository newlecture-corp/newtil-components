# Changelog

## 0.4.8 (2026-09-16) — 문서

- README·LICENSE 신설(게시본에 빠져 있었다). 문서: n-resize-handle 페이지 추가, 옛 이름·잘못된 안내 정정. Pages 워크플로가 dist 를 빌드하지 않아 404 이던 문제 수정.

## 0.4.7 (2026-09-16) — design-tokens 0.2.1 반영

- 의존: `@newtil/design-tokens ^0.2.1`.
- n-layout: `--color-on-surface` → `--color-text`, 존재하지 않던 `--color-outline` → `--color-border`(구분선이 다크에서 검정 fallback 으로 그려지던 문제). 토큰 hex fallback 제거 — design-tokens 는 필수 의존이라 fallback 은 누락을 가릴 뿐이다.
- n-prose: `--color-on-surface-inverse` → `--color-text-inverse`. `hr` 에 `display: block` — reset 이 n-* 안의 hr 를 숨기는데 n-prose 가 되살리지 않아 마크다운 수평선이 안 보였다.
- 문서·테스트 페이지의 `surface-subtle / muted` → `surface-1 / 2`.
