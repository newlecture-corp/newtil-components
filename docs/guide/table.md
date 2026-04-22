# Table — 데이터 표

관리자 데이터 목록, 비교표, 매출 요약 등 **본격적인 데이터 표**에 사용합니다. (마크다운 본문의 표는 [`n-prose`](/guide/prose#표-간이) 사용)

## 기본 사용

<Demo>
<table class="n-table">
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

## 타입 (배타)

**한 번에 하나만** 사용합니다.

| 타입 | 설명 |
|------|------|
| (기본) | 헤더 배경 + 행 아래 보더 |
| `table:striped` | 짝수행 배경 — 줄무늬 |
| `table:bordered` | 격자 보더 — 엑셀 스타일 |
| `table:minimal` | 헤더 배경 제거 — 대시보드 스타일 |

### table:striped

<Demo>
<table class="n-table table:striped">
  <thead><tr><th>ID</th><th>이름</th><th class="cell:numeric">점수</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>홍길동</td><td class="cell:numeric">98</td></tr>
    <tr><td>2</td><td>김철수</td><td class="cell:numeric">87</td></tr>
    <tr><td>3</td><td>이영희</td><td class="cell:numeric">92</td></tr>
    <tr><td>4</td><td>박민수</td><td class="cell:numeric">75</td></tr>
  </tbody>
</table>
</Demo>

### table:bordered

<Demo>
<table class="n-table table:bordered">
  <thead><tr><th>항목</th><th>값</th><th>단위</th></tr></thead>
  <tbody>
    <tr><td>너비</td><td>1920</td><td>px</td></tr>
    <tr><td>높이</td><td>1080</td><td>px</td></tr>
    <tr><td>비율</td><td>16:9</td><td>—</td></tr>
  </tbody>
</table>
</Demo>

### table:minimal

헤더 배경 없이 uppercase 레이블. 대시보드/메트릭스에 적합.

<Demo>
<table class="n-table table:minimal">
  <thead><tr><th>Metric</th><th class="cell:numeric">Value</th><th class="cell:numeric">Change</th></tr></thead>
  <tbody>
    <tr><td>Page Views</td><td class="cell:numeric">42,103</td><td class="cell:numeric">+12%</td></tr>
    <tr><td>Unique Users</td><td class="cell:numeric">8,421</td><td class="cell:numeric">+8%</td></tr>
    <tr><td>Bounce Rate</td><td class="cell:numeric">38.2%</td><td class="cell:numeric">−4%</td></tr>
  </tbody>
</table>
</Demo>

## 옵션 (조합)

타입 위에 **여러 개 조합**해서 사용합니다.

| 옵션 | 효과 |
|------|------|
| `table-shape:rounded` | 모서리 둥글게 |
| `table-hover:row` | 행 호버 하이라이트 |
| `table-density:compact` | 좁은 패딩 + 작은 글자 |

### table-shape:rounded

<Demo>
<table class="n-table table:bordered table-shape:rounded">
  <thead><tr><th>날짜</th><th>이벤트</th><th class="cell:center">상태</th></tr></thead>
  <tbody>
    <tr><td>2026-04-18</td><td>배포</td><td class="cell:center">완료</td></tr>
    <tr><td>2026-04-19</td><td>테스트</td><td class="cell:center">진행</td></tr>
    <tr><td>2026-04-21</td><td>리뷰</td><td class="cell:center">대기</td></tr>
  </tbody>
</table>
</Demo>

### table-hover:row

<Demo>
<table class="n-table table-hover:row">
  <thead><tr><th>파일</th><th>크기</th><th>수정일</th></tr></thead>
  <tbody>
    <tr><td>README.md</td><td>2.1 KB</td><td>2026-04-19</td></tr>
    <tr><td>index.css</td><td>26 KB</td><td>2026-04-21</td></tr>
    <tr><td>package.json</td><td>1.8 KB</td><td>2026-04-21</td></tr>
  </tbody>
</table>
</Demo>

### table-density:compact

대량 데이터에 적합.

<Demo>
<table class="n-table table:striped table-density:compact">
  <thead><tr><th>#</th><th>SKU</th><th>상품</th><th class="cell:numeric">재고</th><th class="cell:numeric">가격</th></tr></thead>
  <tbody>
    <tr><td>001</td><td>NL-001</td><td>자바 기초</td><td class="cell:numeric">120</td><td class="cell:numeric">49,000</td></tr>
    <tr><td>002</td><td>NL-002</td><td>자바 중급</td><td class="cell:numeric">87</td><td class="cell:numeric">69,000</td></tr>
    <tr><td>003</td><td>NL-003</td><td>스프링 입문</td><td class="cell:numeric">54</td><td class="cell:numeric">89,000</td></tr>
    <tr><td>004</td><td>NL-004</td><td>스프링 실전</td><td class="cell:numeric">32</td><td class="cell:numeric">119,000</td></tr>
  </tbody>
</table>
</Demo>

## 셀 옵션

특정 셀/열에만 적용하는 스코프 옵션입니다.

| 옵션 | 효과 |
|------|------|
| `cell:numeric` | 우측 정렬 + tabular-nums (숫자 정렬에 적합) |
| `cell:center` | 가운데 정렬 |

숫자 열에는 `cell:numeric`을 `th`와 `td` 모두에 적용하세요.

```html
<thead>
  <tr><th>항목</th><th class="cell:numeric">수량</th></tr>
</thead>
<tbody>
  <tr><td>A</td><td class="cell:numeric">1,234</td></tr>
</tbody>
```

## 조합 예시

### Striped + Hover

<Demo>
<table class="n-table table:striped table-hover:row">
  <thead><tr><th>사용자</th><th>역할</th><th>최근 로그인</th></tr></thead>
  <tbody>
    <tr><td>admin@newlecture.com</td><td>관리자</td><td>10분 전</td></tr>
    <tr><td>lecture1@newlecture.com</td><td>강사</td><td>2시간 전</td></tr>
    <tr><td>student1@newlecture.com</td><td>수강생</td><td>어제</td></tr>
  </tbody>
</table>
</Demo>

### Minimal + Hover + Compact

<Demo>
<table class="n-table table:minimal table-hover:row table-density:compact">
  <thead><tr><th>시간</th><th>레벨</th><th>메시지</th></tr></thead>
  <tbody>
    <tr><td>10:42:31</td><td>INFO</td><td>서버 시작</td></tr>
    <tr><td>10:43:05</td><td>DEBUG</td><td>DB 연결 확인</td></tr>
    <tr><td>10:43:12</td><td>WARN</td><td>캐시 미스</td></tr>
    <tr><td>10:44:01</td><td>ERROR</td><td>타임아웃 발생</td></tr>
  </tbody>
</table>
</Demo>

### Bordered + Rounded + Hover

<Demo>
<table class="n-table table:bordered table-shape:rounded table-hover:row">
  <thead><tr><th>코스</th><th>강사</th><th class="cell:numeric">수강생</th><th class="cell:center">상태</th></tr></thead>
  <tbody>
    <tr><td>Next.js 실전</td><td>김강사</td><td class="cell:numeric">342</td><td class="cell:center">진행</td></tr>
    <tr><td>TypeScript 입문</td><td>이강사</td><td class="cell:numeric">215</td><td class="cell:center">모집</td></tr>
  </tbody>
</table>
</Demo>

## 추가 기능

### 캡션

표 위에 설명이 필요할 때 `<caption>` 태그를 사용합니다.

<Demo>
<table class="n-table table:striped">
  <caption>2026년 1분기 매출 (단위: 만원)</caption>
  <thead><tr><th>월</th><th class="cell:numeric">강의</th><th class="cell:numeric">컨설팅</th><th class="cell:numeric">합계</th></tr></thead>
  <tbody>
    <tr><td>1월</td><td class="cell:numeric">1,200</td><td class="cell:numeric">300</td><td class="cell:numeric">1,500</td></tr>
    <tr><td>2월</td><td class="cell:numeric">1,450</td><td class="cell:numeric">250</td><td class="cell:numeric">1,700</td></tr>
    <tr><td>3월</td><td class="cell:numeric">1,800</td><td class="cell:numeric">400</td><td class="cell:numeric">2,200</td></tr>
  </tbody>
  <tfoot>
    <tr><td>합계</td><td class="cell:numeric">4,450</td><td class="cell:numeric">950</td><td class="cell:numeric">5,400</td></tr>
  </tfoot>
</table>
</Demo>

### tfoot (합계 행)

`<tfoot>` 내부의 `td`는 위쪽 보더와 semibold 폰트가 자동 적용됩니다.

### 반응형 (n-table-wrap)

컬럼이 많아 화면을 넘칠 때는 `n-table-wrap`으로 감싸 가로 스크롤을 활성화합니다.

```html
<div class="n-table-wrap">
  <table class="n-table table:bordered table-hover:row">…</table>
</div>
```

<Demo>
<div class="n-table-wrap">
  <table class="n-table table:bordered table-hover:row">
    <thead><tr><th>ID</th><th>제목</th><th>카테고리</th><th>작성자</th><th>작성일</th><th class="cell:numeric">조회수</th><th>상태</th></tr></thead>
    <tbody>
      <tr><td>1024</td><td>신기능 공지</td><td>공지</td><td>관리자</td><td>2026-04-20</td><td class="cell:numeric">1,203</td><td>게시중</td></tr>
      <tr><td>1023</td><td>점검 안내</td><td>공지</td><td>관리자</td><td>2026-04-19</td><td class="cell:numeric">872</td><td>게시중</td></tr>
      <tr><td>1022</td><td>이벤트 종료</td><td>이벤트</td><td>운영팀</td><td>2026-04-15</td><td class="cell:numeric">445</td><td>종료</td></tr>
    </tbody>
  </table>
</div>
</Demo>
