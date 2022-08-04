const gql = require('graphql-tag');
const productFragment = require('../fragments/productFragment');

module.exports = gql`
${productFragment}
query Product($sku: SKU!, $offset: Int! = 0, $limit: Int! = 5, $currency: Currency! = GBP, $shippingDestination: Country = GB) {
  product(sku: $sku, strict: false) {
    ...ProductContent
  }
}`;
