import * as React from 'react'
import {Helmet} from 'react-helmet'

export default React.memo(
  ({
    author,
    canonicalUrl,
    datePublished,
    defaultTitle,
    description,
    image,
    isBlogPost,
    organization,
    title,
    url,
  }) => {
    const baseSchema = [
      {
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        url,
        name: title,
        alternateName: defaultTitle,
      },
    ]

    const jsonLd = {
      "@context": `https://schema.org/`,
      "@type": type,
      url: canonical,
      image: shareImage ?
          {
              "@type": `ImageObject`,
              url: shareImage,
              width: config.shareImageWidth,
              height: config.shareImageHeight,
          } : undefined,
      publisher: {
          "@type": `Organization`,
          name: settings.title,
          logo: {
              "@type": `ImageObject`,
              url: publisherLogo,
              width: 60,
              height: 60,
          },
      },
      mainEntityOfPage: {
          "@type": `WebPage`,
          "@id": config.siteUrl,
      },
      description,
  }

    return (
      <Helmet>
        {/* Schema.org tags */}
        {/* <script type="application/ld+json">{JSON.stringify(schema)}</script> */}
        <script type="application/ld+json">{JSON.stringify(jsonLd, undefined, 4)}</script>
      </Helmet>
    )
  },
)
