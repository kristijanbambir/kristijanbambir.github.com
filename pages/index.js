import React from 'react';

import { SPACING_UNIT } from '../common/constants';

function Index() {
  return (
    <div className='container'>
      <h1>
        {'Hi '}
        <span
          aria-label='wave'
          role='img'
        >
          👋
        </span>
        {' I\'m Kristijan.'}
      </h1>
      <h2>
        {'JavaScript Team Lead '}
        <a
          href='http://infinum.co/'
        >
          @infinumco
        </a>
      </h2>
      <style jsx>
        {`
          .container {
            max-width: 500px;
            margin: 0 auto;
            padding: 0 ${SPACING_UNIT * 2}px;
          }
        `}
      </style>
    </div>
  );
}

export default Index;
