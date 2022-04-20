import React from 'react';
import Head from 'next/head';
import propTypes from 'prop-types';

function PageHead({title,description}) {
  return (
    <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  )
}
PageHead.propTypes = {
    title:propTypes.string.isRequired,
    description:propTypes.string.isRequired,
}
export default PageHead