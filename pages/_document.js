import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server'; // eslint-disable-line import/no-extraneous-dependencies

export default class MyDocument extends Document {

  static getInitialProps({ renderPage }) {
    const {
      html,
      head,
      errorHtml,
      chunks,
    } = renderPage();
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
      <html lang='en'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css?family=Noto+Sans'
            rel='stylesheet'
          />
          <style>
            {`
              body {
                margin: 0;
                padding: 0;
                font-family: Noto Sans, sans-serif;
              }
            `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }

}
