const webpack = require('webpack');
const theme = require('./themeConfig');

const rootDir = './_theme/'
module.exports = {
  server: {
    port: process.env.APP_PORT || 3001,
    host: '0.0.0.0'
  },
  rootDir,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Vue Storefront',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'crossorigin'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,600,700|Roboto:300,300i,400,400i,500,700&display=swap'
      }
    ]
  },

  loading: { color: '#fff' },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/addToContext.js',
    '~/plugins/vee-validate.js'
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // to core
    '@nuxtjs/composition-api/module',
    '@nuxt/typescript-build',
    '@nuxtjs/style-resources',
    ['@vue-storefront/nuxt', {
      // @core-development-only-start
      coreDevelopment: true,
      // @core-development-only-end

      logger: {
        verbosity: 'debug'
      },
      useRawSource: {
        dev: [
          '@vue-storefront/horizon',
          '@vue-storefront/core'
        ],
        prod: [
          '@vue-storefront/horizon',
          '@vue-storefront/core'
        ]
      }
    }],
    // @core-development-only-start
    '@vue-storefront/nuxt-theme',
    ['@vue-storefront/horizon/nuxt', {}]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['nuxt-i18n', {
      baseUrl: process.env.BASE_URL || 'http://localhost:3000'
    }],
    'cookie-universal-nuxt',
    'vue-scrollto/nuxt',
    '@vue-storefront/middleware/nuxt'
  ],

  i18n: {
    currency: 'GBP',
    country: 'GB',
    countries: [
      { name: 'GB', label: 'United Kingdom' },
    ],
    currencies: [
      { name: 'GBP', label: 'Sterling' }
    ],
    locales: [
      { code: 'gb', label: 'English', file: 'gb.js', iso: 'gb' },
      { code: 'de', label: 'German', file: 'de.js', iso: 'de' }
    ],
    autoRedirectByLocale: false,
    cookies: {
      localeCookieName: 'locale_V6',
      currencyCookieName: 'en_currency_V6',
      countryCookieName: 'en_shippingCountry_V6'
    },
    autoChangeCookie: {
      currency: false,
      country: false
    },
    defaultLocale: 'gb',
    lazy: true,
    seo: true,
    langDir: 'lang/',
    vueI18n: {
      fallbackLocale: 'gb',
      numberFormats: {
        GBP: {
          currency: {
            style: 'currency', currency: 'GBP', currencyDisplay: 'symbol'
          }
        },
        EUR: {
          currency: {
            style: 'currency', currency: 'EUR', currencyDisplay: 'symbol'
          }
        },
      }
    },
    detectBrowserLanguage: false
  },

  styleResources: {
    scss: [require.resolve('@storefront-ui/shared/styles/_helpers.scss', { paths: [process.cwd()] })]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'vee-validate/dist/rules'
    ],
    plugins: [
      new webpack.DefinePlugin({
        'process.VERSION': JSON.stringify({
          // eslint-disable-next-line global-require
          version: require('./package.json').version,
          lastCommit: process.env.LAST_COMMIT || ''
        })
      })
    ],
    extend(config) {
      config.module.rules.push({
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      })
    },

  },
  router: {
    extendRoutes(routes, resolve) {
      routes.splice(
        routes.findIndex(route => route.name === 'Search'),
        1
      );
      routes.push({
        name: 'Search',
        path: '/search/:slug?/',
        component: resolve(__dirname, rootDir + 'pages/Search.vue')
      });
    }
  },
  publicRuntimeConfig: {
    theme,
    middlewareUrl: process.env.NODE_ENV === 'production' && `http://localhost:${process.env.APP_PORT || 3001}/api/`
  },
  pwa: {
    meta: {
      theme_color: '#5ECE7B'
    }
  }
};
