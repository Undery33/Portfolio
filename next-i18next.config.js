/** @type {import('next-i18next').UserConfig} */

module.exports = {
  i18n: {
    locales: ['ko', 'ja', 'en'],
    defaultLocale: 'ko',
    localeDetection: false,
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
}
