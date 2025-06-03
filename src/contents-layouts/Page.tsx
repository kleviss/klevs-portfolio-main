import type { PropsWithChildren, ReactNode } from 'react';

import Head from '@/components/meta/Head';
import PageHeader from '@/components/PageHeader';
import SkipNavigation from '@/components/navigations/SkipNavigation';
import type { TPageFrontMatter } from '@/types';
import clsx from 'clsx';
import { getPageOgImageUrl } from '@/helpers/page';

interface PageProps {
  frontMatter: TPageFrontMatter;
  headerImage?: ReactNode;
  removeBottomPaddingMobile?: boolean;
}

function Page({
  frontMatter: { title, description, caption },
  children = null,
  headerImage = null,
  removeBottomPaddingMobile = false,
}: PropsWithChildren<PageProps>) {
  const image = getPageOgImageUrl({
    caption,
    title,
    description,
  });

  return (
    <>
      <Head title={title} description={description} ogImage={image.default} />
      <SkipNavigation skipTableOfContents={false} />
      <PageHeader
        title={title}
        description={description}
        caption={caption}
        headerImage={headerImage}
        removeBottomPaddingMobile={removeBottomPaddingMobile}
      />
      <div className={clsx('scroll-mt-[86px]')} id="main-contents">
        {children}
      </div>
    </>
  );
}

export default Page;
