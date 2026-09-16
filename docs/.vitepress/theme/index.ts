// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './style.css';

// @newtil/components 빌드 산출물 (라이브 프리뷰용) — docs:build 전에 npm run build 필요
import '../../../dist/index.css';

// Demo 컴포넌트
import Demo from './components/Demo.vue';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {});
  },
  enhanceApp({ app }) {
    app.component('Demo', Demo);
  }
} satisfies Theme;
