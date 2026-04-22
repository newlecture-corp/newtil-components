# Prose — 본문 렌더링

마크다운이나 WYSIWYG 에디터로 작성된 HTML 본문을 **일관된 스타일**로 표시합니다. 공지사항, 게시글, 블로그 등 읽기 콘텐츠의 표준 컴포넌트입니다.

`@newtil/editor`로 작성 → `n-prose`로 표시 구조를 이루며, **편집 화면과 보기 화면의 스타일이 동일**하도록 설계되었습니다.

## 기본 사용

```html
<article class="n-prose" v-html="contentHtml"></article>
```

React/Next.js에서는 `dangerouslySetInnerHTML`을 사용합니다.

```tsx
<article className="n-prose" dangerouslySetInnerHTML={{ __html: contentHtml }} />
```

<Demo>
<article class="n-prose">
  <h1>공지사항 제목</h1>
  <p>본문 내용은 여기에 들어갑니다. <strong>강조</strong>, <em>기울임</em>, <a href="#">링크</a>가 모두 자연스럽게 표시됩니다.</p>
  <h2>세부 항목</h2>
  <ul>
    <li>리스트 항목 하나</li>
    <li>리스트 항목 둘</li>
  </ul>
  <blockquote>
    <p>인용문도 기본 스타일이 제공됩니다.</p>
  </blockquote>
</article>
</Demo>

## 타입

| 타입 | 설명 |
|------|------|
| (기본) | body 크기 |
| `prose:sm` | 작은 본문 — 캡션, 설명문 |
| `prose:lg` | 큰 본문 — 블로그, 레터 |

<Demo>
<article class="n-prose prose:sm">
  <p>caption 크기의 본문. 보조 설명에 사용.</p>
</article>
</Demo>

<Demo>
<article class="n-prose prose:lg">
  <p>body-lg 크기. 장문 읽기에 편함.</p>
</article>
</Demo>

## 지원 요소

모든 요소는 [디자인 토큰](/guide/customization#_3단계-css-변수)을 참조하며 다크모드에 자동 대응합니다.

### 제목 (h1~h6)

제목은 **위·아래 여백** 모두 있고, 위쪽 여백이 더 큽니다. 섹션 구분이 자연스럽게 이루어집니다.

<Demo>
<article class="n-prose">
  <h1>h1 — heading-lg</h1>
  <h2>h2 — heading-md</h2>
  <h3>h3 — heading-sm</h3>
  <h4>h4 — body-lg</h4>
  <h5>h5 — body</h5>
  <h6>h6 — body-sm / muted</h6>
</article>
</Demo>

### 문장 (p)

문장은 **아래쪽 여백만** 있습니다 (제목 바로 아래에 붙을 수 있도록).

### 텍스트 강조

<Demo>
<article class="n-prose">
  <p>
    <strong>굵은 글씨</strong>,
    <em>기울임</em>,
    <u>밑줄</u>,
    <s>취소선</s>,
    <mark>형광펜</mark>,
    <code>인라인 코드</code>,
    <small>작은 글씨</small>,
    <kbd>Cmd</kbd> + <kbd>K</kbd> 키 표시.
  </p>
</article>
</Demo>

### 링크

secondary 색상 + 밑줄. hover/active 시 어두워집니다.

<Demo>
<article class="n-prose">
  <p>문서 내 <a href="#">일반 링크</a>와 <a href="https://newlecture.com">외부 링크</a> 모두 동일하게 처리됩니다.</p>
</article>
</Demo>

### 리스트

ul (disc), ol (decimal), 중첩 시 circle → square. `li::marker` 색도 토큰 기반.

<Demo>
<article class="n-prose">
  <ul>
    <li>항목 1</li>
    <li>항목 2
      <ul>
        <li>중첩 항목 (circle)</li>
        <li>중첩 항목 둘
          <ul>
            <li>3단 중첩 (square)</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>항목 3</li>
  </ul>
</article>
</Demo>

### 인용 (blockquote)

primary 색 왼쪽 보더 + subtle 배경. 내부 p 여러 개 지원.

<Demo>
<article class="n-prose">
  <blockquote>
    <p>좋은 디자인은 눈에 띄지 않는다.</p>
    <p>— Dieter Rams</p>
  </blockquote>
</article>
</Demo>

### 코드

인라인은 `--color-surface-muted` 배경 + `--color-danger` 텍스트. pre는 `--color-surface-inverse` 배경.

<Demo>
<article class="n-prose">
  <p>인라인 <code>code</code> 와 블록 코드:</p>
  <pre><code>function hello(name) {
  console.log(`Hello, ${name}!`);
}</code></pre>
</article>
</Demo>

### 이미지와 figure

`max-width: 100%`, `height: auto`로 반응형. figcaption 지원.

```html
<figure>
  <img src="..." alt="..." />
  <figcaption>이미지 설명</figcaption>
</figure>
```

### 표 (간이)

마크다운 변환 결과의 표를 자연스럽게 표시합니다. **본격적인 데이터 표는 [`n-table`](/guide/table)** 사용을 권장합니다.

<Demo>
<article class="n-prose">
  <table>
    <thead><tr><th>패키지</th><th>역할</th></tr></thead>
    <tbody>
      <tr><td>@newtil/editor</td><td>편집</td></tr>
      <tr><td>@newtil/components</td><td>표시</td></tr>
    </tbody>
  </table>
</article>
</Demo>

### 가로줄, 키보드 표시

<Demo>
<article class="n-prose">
  <p>구분선:</p>
  <hr />
  <p>키 조합: <kbd>Shift</kbd> + <kbd>Tab</kbd></p>
</article>
</Demo>

## 첫·마지막 요소 여백

`.n-prose > *:first-child`는 `margin-top: 0`, `*:last-child`는 `margin-bottom: 0` 입니다. 컨테이너 여백과 이중으로 겹치지 않습니다.

```html
<div style="padding: 2rem; background: #f0f0f0;">
  <article class="n-prose">
    <!-- 여기 h1 위쪽 여백 없음 -->
    <h1>제목</h1>
    <p>…</p>
    <!-- 여기 p 아래쪽 여백 없음 -->
  </article>
</div>
```

## @newtil/editor와 짝 쓰기

편집은 에디터로, 표시는 prose로. 같은 콘텐츠가 두 화면에서 동일하게 보입니다.

```tsx
// 편집 화면
<NewtilEditor value={content} onChange={setContent} />

// 표시 화면
<article
  className="n-prose"
  dangerouslySetInnerHTML={{ __html: renderedHtml }}
/>
```
