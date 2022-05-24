import { defineStore } from 'pinia';
import { LANG, TAGS_VIEW } from '@/constant/index';

export const useAppStore = defineStore('app', {
  state: () => ({
    isFold: false, // 侧边栏是否折叠
    lang: JSON.parse(localStorage.getItem(LANG)!) || 'zh', // 国际化
    tagsViewList: JSON.parse(localStorage.getItem(TAGS_VIEW)!) || [], // tagsView
  }),
  getters: {
    currentLang: (state) => state.lang,
    tags: (state) => state.tagsViewList,
  },
  actions: {
    // 设置语言
    setLang(lang: string) {
      localStorage.setItem(LANG, JSON.stringify(lang));
      this.lang = lang;
    },

    // tag是否存在
    tagExsit(tag: any) {
      return this.tagsViewList.find((item: any) => {
        return item.path == tag.path;
      });
    },
    // 添加tag
    addTag(tag: any) {
      if (!this.tagExsit(tag)) {
        this.tagsViewList.push(tag);
        localStorage.setItem(TAGS_VIEW, JSON.stringify(this.tagsViewList));
      }
    },
    // 移除tag
    removeTag(tag: any) {
      if (this.tagExsit(tag)) {
        const index = this.tagsViewList.indexOf(tag);
        this.tagsViewList.splice(index, 1);
        localStorage.setItem(TAGS_VIEW, JSON.stringify(this.tagsViewList));
      }
    },
    // 移除其他tags
    removeOtherTags(tag: any) {
      this.tagsViewList.splice(
        0,
        JSON.parse(localStorage.getItem(TAGS_VIEW)!).length,
        tag,
      );
      localStorage.setItem(TAGS_VIEW, JSON.stringify(this.tagsViewList));
    },
    // 关闭左侧标签页
    removeLeftTags(tag: any) {
      const index = this.tagsViewList.indexOf(tag);
      this.tagsViewList.splice(0, index);
      localStorage.setItem(TAGS_VIEW, JSON.stringify(this.tagsViewList));
    },
    // 关闭右侧标签页
    removeRightTags(tag: any) {
      const index = this.tagsViewList.indexOf(tag);
      this.tagsViewList.splice(
        index + 1,
        JSON.parse(localStorage.getItem(TAGS_VIEW)!).length,
      );
      localStorage.setItem(TAGS_VIEW, JSON.stringify(this.tagsViewList));
    },
  },
});
