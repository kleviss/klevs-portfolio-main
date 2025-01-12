import Head from '@/components/meta/Head';

import Error404Contents from '@/contents/404';

import type { ReactElement } from 'react';

function Error404() {
  return (
    <>
      <Head
        title="Page Not Found"
        description="404 - This page could not be found"
        ogImage="/og/404.png"
      />
      <Error404Contents />
    </>
  );
}

Error404.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default Error404;
