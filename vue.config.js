module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? '/vue3-pwa-practice' : '',
  pwa: {
    name: 'vue3-pwa-practice (config in vue.config.js)',
    theme_color: '#000',
    msTile_color: '#aaa',
    appleMobileWebAppCache: 'yes',
    manifestOptions: {
      theme_color: "#000",
      background_color: "#bbb",
      display: 'fullscreen',
      orientation: 'landscape-secondary',
      icons: [
        {
          src: './img/icons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: './img/icons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: './img/icons/android-chrome-maskable-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable'
        },
        {
          src: './img/icons/android-chrome-maskable-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ]
    }
  }
}
