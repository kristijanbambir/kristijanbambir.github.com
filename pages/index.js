import React from 'react';
import Link from '../components/Link';

import { SPACING_UNIT } from '../common/constants';

const LINKS = [{
  href: 'https://github.com/kristijanbambir',
  title: 'GitHub',
}, {
  href: 'https://www.linkedin.com/in/kristijanbambir',
  title: 'LinkedIn',
}, {
  href: 'https://twitter.com/KristijanBambir',
  title: 'Twitter',
}, {
  href: 'https://www.instagram.com/kristijanbambir/',
  title: 'Instagram',
}, {
  href: 'mailto:kristijan.bambir@gmail.com',
  title: 'Email',
}];

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
      <div>
        {LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.title}
            title={link.title}
          />
        ))}
      </div>
      <style jsx>{`
        .container {
          padding: 1em 2em;
        }

        @media (min-width: 544px) {
          .container {
            height: 100%;
            width: 100%;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }

          h1 {
            margin: 0.5em 0;
          }

          h2 {
            margin: 0.25em 0;
          }
        }
      `}</style>
    </div>
  );
}

export default Index;
