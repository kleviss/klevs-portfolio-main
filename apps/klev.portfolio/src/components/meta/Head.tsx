import NextHead from 'next/head';

import useCurrentUrl from '@/hooks/useCurrentUrl';

interface HeadProps {
  title: string;
  description?: string;
  ogImage?: string;
  overrideTitle?: boolean;
  structuredData?: string;
}

function Head({
  title,
  description = 'Portfolio',
  ogImage = '/og/projects.png',
  overrideTitle = false,
  structuredData = '',
}: HeadProps) {
  const currentUrl = useCurrentUrl();
  const htmlTitle = overrideTitle ? title : `${title} — Klev · Front-End Developer`;

  return (
    <title key="title">{htmlTitle}</title>
    // <NextHead>
    //   <title key="title">{htmlTitle}</title>
    //   <meta key="description" name="description" content={description} />
    //   <link key="favicon" rel="icon" href="/favicon.ico" />
    //   <link key="canonical" rel="canonical" href={currentUrl} />

    //   <meta key="og:image" property="og:image" content={ogImage} />
    //   <meta key="og:image:width" property="og:image:width" content="1200" />
    //   <meta key="og:image:height" property="og:image:height" content="630" />
    //   <meta key="og:image:alt" property="og:image:alt" content={`Image with "${title}" text.`} />

    //   <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
    //   <meta key="twitter:site" name="twitter:site" content="@klevisxhyra" />
    //   <meta key="twitter:creator" name="twitter:creator" content="@klevisxhyra" />
    //   <meta key="twitter:title" name="twitter:title" content={title} />
    //   <meta key="twitter:description" name="twitter:description" content={description} />
    //   <meta key="twitter:image" name="twitter:image" content={ogImage} />
    //   <meta key="twitter:image:alt" name="twitter:image:alt" content={`Image with "${title}" text.`} />

    //   {structuredData && (
    //     <script key="structured-data" type="application/ld+json">{structuredData}</script>
    //   )}
    // </NextHead>
  );
}

export default Head;
