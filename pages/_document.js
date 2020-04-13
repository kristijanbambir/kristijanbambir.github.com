import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return {
      html,
      head,
      errorHtml,
      chunks,
      styles,
    };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
            name="viewport"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Serif"
            rel="stylesheet"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <style>{`
            html {
              height: 100%;
            }

            body {
              margin: 0;
              padding: 0;
              font-family: Noto Serif, serif;
              height: 100%;
            }

            #__next {
              height: 100%;
            }

            a:link,
            a:visited {
              color: #000000;
            }

            @media (prefers-color-scheme: dark) {
              body {
                background-color: #444;
                color: #E4E4E4;
              }

              a,
              a:link,
              a:visited {
                color: #E4E4E4;
              }

              img {
                filter: grayscale(30%);
              }
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
