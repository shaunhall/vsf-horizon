console.log(process.env.THEME_CONFIG);

const baseList = [{
  path: '@vue-storefront/nuxt-theme/theme',
  ignore: [],
  variables: {
    options: {
      generate: {
        replace: {
          apiClient: '@vue-storefront/horizon-api',
          composables: '@vue-storefront/horizon'
        }
      }
    }
  },
  watch: true
},
{
  path: './default',
  variables: {},
  watch: true
}];

process.env.THEME_CONFIG === 'fashion' && baseList.push({
  path: './fashion',
  variables: {},
  watch: true
});

process.env.THEME_CONFIG === 'entertainment' && baseList.push({
  path: './entertainment',
  variables: {},
  watch: true
});

module.exports = {
  copy: {
    to: '_theme',
    from: baseList
  }
};
