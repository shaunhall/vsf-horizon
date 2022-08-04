const gql = require('graphql-tag');

module.exports = gql`
fragment VariantContent on ProductVariant {
  sku
  choices {
    optionKey
    key
    colour
    title
  }
  images {
    original
    thumbnail
    largeProduct
    zoom
  }
  title
  inStock
  availabilityMessage
  product {
    url
    images {
      original
      thumbnail
      largeProduct
      zoom
    }
  }
  price(
    currency: $currency
    shippingDestination: $shippingDestination
  ) {
    price {
      currency
      amount
      displayValue
    }
    rrp {
      currency
      amount
      displayValue
    }
  }
  content {
    key
    value {
      ... on ProductContentStringValue {
        stringValue: value
      }
      ... on ProductContentStringListValue {
        stringListValue: value
      }
      ... on ProductContentIntValue {
        intValue: value
      }
      ... on ProductContentIntListValue {
        intListValue: value
      }
      ... on ProductContentRichContentValue {
        richContentValue: value {
          content {
            type
            content
          }
        }
      }
      ... on ProductContentRichContentListValue {
        richContentListValue: value {
          content {
            type
            content
          }
        }
      }
    }
  }
}

fragment ProductContent on Product {
    title
    sku
    sizeGuide {
        content {
            type
            content
        }
    }
    marketedSpecialOffer {
        title {
            content {
                type
                content
            }
        }
        description {
            content {
                type
                content
            }
        }
        landingPageLink {
            text
            url
        }
    }
    inWishlist
    preorder
    cheapestVariantPrice(
      currency: $currency
      shippingDestination: $shippingDestination
    ){
        price {
            currency
            amount
            displayValue
            scalarValue
        }
        rrp {
            currency
            amount
            displayValue
            scalarValue
        }
    }
    images {
        original
        thumbnail
        largeProduct
        zoom
    }
    url
    options {
        key
        choices {
            optionKey
            key
            colour
            title
        }
    }
    content(keys:["synopsis", "keyBenefits", "brand", "whyChoose", "CareInstructions", "material"]) {
        key
        value {
            __typename
            ... on ProductContentStringValue {
                stringValue: value
            }
            ... on ProductContentStringListValue {
                stringListValue: value
            }
            ... on ProductContentIntValue {
                intValue: value
            }
            ... on ProductContentIntListValue {
                intListValue: value
            }
            ... on ProductContentRichContentValue {
                richContentValue: value {
                    content {
                        type

                        content
                    }
                }
            }
            ... on ProductContentRichContentListValue {
                richContentListValue: value {
                    content {
                        type
                        content
                    }
                }
            }
        }
    }
    reviews {
        total
        averageScore
    }
    variants {
        ...VariantContent
    }
    reviews {
      total
      averageScore
      maxScore
      count1Score
      count2Score
      count3Score
      count4Score
      count5Score
      reviews(offset: $offset, limit: $limit) {
        total
        hasMore
        reviews {
          id
          title
          authorName
          verifiedPurchase
          posted
          elements {
            key
          	... on TextReviewElement {
              key
              value
            }
            ... on RatingReviewElement {
              key
              score
              maxScore
            }
          }
          positiveVotes
          negativeVotes
        }
      }
    }
    defaultVariant(options: { 
      currency: $currency
      shippingDestination: $shippingDestination
    }) {
        ...VariantContent
    }
}`;
