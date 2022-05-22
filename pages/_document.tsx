import Document, { Html, Head, Main, NextScript } from "next/document";
import packageJson from "../package.json";

class CustomDocument extends Document {
  render = () => (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#000000" />
        <meta name="build version" content={packageJson.version} />
        <link rel="icon" href="/images/logo.png" />
        <link
          rel="preload"
          href="/fonts/Oswald.woff"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/QuattrocentoSans-Regular.woff"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/QuattrocentoSans-Regular.ttf"
          as="font"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Oswald.ttf"
          as="font"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default CustomDocument;