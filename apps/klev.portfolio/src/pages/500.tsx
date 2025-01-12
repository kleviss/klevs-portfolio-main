import Head from '@/components/meta/Head';

import Error500Contents from '@/contents/500';

import type { ReactElement } from 'react';

function Error500() {
  return (
    <>
      <Head
        title="Server Error"
        description="500 - Server-side error occurred"
        ogImage="/og/500.png"
      />
      <Error500Contents />
    </>
  );
}

Error500.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default Error500;
