import * as React from 'react'
import {Helmet} from 'react-helmet'

export default React.memo(
  ({
    canonical,
    thumbnail,
    description,
    title,
    url,
  }) => {

    const jsonLd = {
      "@context": `https://schema.org/`,
      "@type": "Website",
      url: canonical,
      image: thumbnail ?
          {
              "@type": `ImageObject`,
              url: thumbnail,
              width: 60,
              height: 60,
          } : undefined,
      publisher: {
          "@type": `Organization`,
          name: title,
          logo: {
              "@type": `ImageObject`,
              url: thumbnail,
              width: 60,
              height: 60,
          },
      },
      mainEntityOfPage: {
          "@type": `WebPage`,
          "@id": url,
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
