import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon and general icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Android Chrome Icons */}
        <link rel="android-chrome" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="android-chrome" sizes="512x512" href="/android-chrome-512x512.png" />

        {/* Metadata */}
        {/* General */}
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="description" content="Invest in rental properties like stocks. Start with as little as $100 and earn passive income."></meta>
        <meta name="keywords" content="real estate, rental properties, passive income, fractional ownership, investment"></meta>
        <meta name="author" content="Whimsy"></meta>

        {/* Open Graph Meta tags - covers Facebook Discord */}
        <meta property="og:title" content="Invest in Rental Properties with Whimsy"></meta>
        <meta property="og:description" content="Start with as little as $100 and earn passive income from residential rentals. Be a part of the journey without having to lift a finger."></meta>
        <meta property="og:image" content="https://i.ibb.co/q7G1v0K/wmsy-meta.jpg"></meta>
        <meta property="og:url" content="https://wsmy.co"></meta>
        <meta property="og:type" content="website"></meta>

        {/* Twitter Meta tags - self explainatory */}
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:title" content="Invest in Rental Properties with Whimsy"></meta>
        <meta name="twitter:description" content="Start with as little as $100 and earn passive income from residential rentals."></meta>
        <meta name="twitter:image" content="https://i.ibb.co/q7G1v0K/wmsy-meta.jpg"></meta>
        <meta name="twitter:site" content="@wmsy_estates"></meta>

        // Schema Markup - used by Google to understand business and website content
        // used dangerouslySetInnerHTML as JSON-LD scripts dont work in Javascript
        <script type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: `{
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Whimsy",
              "url": "https://wmsy.co",
              "logo": "https://i.ibb.co/k6nfvxh/whimsy-logo.png",
              "description": "Invest in rental properties like stocks. Start with as little as $100 and earn passive income."
            }` }}
          />

          // NOTE: these can be added into the Schema Markup but were left out due to WMSY's decentralised nature
          // Uncomment and add the following lines if you would like to use them.
          
            {/* "telephone": "YOUR_PHONE_NUMBER",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "YOUR_STREET_ADDRESS",
              "addressLocality": "YOUR_CITY",
              "addressRegion": "YOUR_REGION",
              "postalCode": "YOUR_POSTAL_CODE",
              "addressCountry": "YOUR_COUNTRY"
              } */}

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
