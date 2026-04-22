import { defineConfig } from "vitepress";

const BASE_PATH = "/newtil-components/";

export default defineConfig({
  ignoreDeadLinks: true,
  base: BASE_PATH,
  title: "@newtil/components",
  description: "newtil 기본 컴포넌트 라이브러리 — n- prefix (prose, table, pagination…)",
  appearance: true,
  lang: "ko",
  head: [
    ["link", { rel: "icon", href: `${BASE_PATH}favicon.ico` }],
  ],

  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/newlecture-corp/newtil-components",
      },
    ],

    search: {
      provider: "local",
    },

    nav: [
      { text: "홈", link: "/" },
      { text: "가이드", link: "/guide/getting-started" },
      { text: "패밀리", link: "https://github.com/newlecture-corp" },
    ],

    sidebar: [
      {
        text: "가이드",
        base: "/guide",
        items: [
          { text: "시작하기", link: "/getting-started" },
          { text: "커스터마이징", link: "/customization" },
        ],
      },
      {
        text: "컴포넌트",
        base: "/guide",
        items: [
          { text: "Prose — 본문 렌더링", link: "/prose" },
          { text: "Table — 데이터 표", link: "/table" },
        ],
      },
    ],

    outline: {
      label: "목차",
    },

    footer: {
      copyright: "Copyright © 2026 newlecture",
    },
  },
});
