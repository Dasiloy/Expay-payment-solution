import React from 'react';
import ReactCountryFlag from 'react-country-flag';
import PropTypes from 'prop-types';

function flag({ code = 'usd', title = '' }) {
  return (
    <div>
      <ReactCountryFlag
        countryCode={code}
        svg
        style={{
          width: '1.2em',
          height: '1.2em',
          borderRadius: '60%',
        }}
        title={title}
      />
    </div>
  );
}

flag.propTypes = {
  code: PropTypes.string,
  title: PropTypes.string,
};

export default flag;
