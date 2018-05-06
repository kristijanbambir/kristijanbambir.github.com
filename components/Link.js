import React from 'react';
import PropTypes from 'prop-types';

function Link(props) {
  const {
    href,
    title,
  } = props;

  return (
    <div className='container'>
      <a
        className='link'
        href={href}
      >
        {title}
      </a>
      <style jsx>{`
        .container {
          margin: 1.5em 0;
        }

        .link {
          font-size: 1.2em;
        }

        @media (min-width: 544px) {
          .container {
            display: inline-block;
            margin: 1.5em 1em;
          }
        }
      `}</style>
    </div>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Link;
