import { defineStore } from 'pinia';
import { LANG } from '@/constant/index';

export const useAppStore = defineStore('app', {
  state: () => ({
    isFold: false, // 侧边栏是否折叠
    lang: localStorage.getItem(LANG) || 'zh',
  }),
  getters: {},
  actions: {
    setLang(lang: string) {
      localStorage.setItem(LANG, JSON.stringify(lang));
      this.lang = lang;
    },
  },
});
