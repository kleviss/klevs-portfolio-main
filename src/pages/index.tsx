import Head from '@/components/meta/Head';
import IndexContents from '@/contents/index';
import { getBaseUrl } from '@/helpers/url';

function Index() {
  return (
    <>
      <Head
        title="Klevis Xhyra · Front-End Developer"
        description="An online portfolio featuring a showcase of my projects and some thoughts as a Front-End Developer who loves intuitive, clean and modern UI design."
        ogImage={`${getBaseUrl()}/assets/images/og-image.png`}
        overrideTitle
      />
      <IndexContents />
    </>
  );
}

export default Index;
