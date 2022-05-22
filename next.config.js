const withImages = require('next-images')

module.exports = withImages({
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
})