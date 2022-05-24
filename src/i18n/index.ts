import { createI18n } from 'vue-i18n';
import zhLocale from './lang/zh';
import enLocale from './lang/en';

const messages = {
  en: {
    msg: {
      ...enLocale,
    },
  },
  zh: {
    msg: {
      ...zhLocale,
    },
  },
};

const locale = 'en';

const i18n = createI18n({
  // 设为 false 才能使用组合式API
  legacy: false,
  // 全局使用 t 函数
  globalInjection: true,
  locale,
  messages,
});

export default i18n;
