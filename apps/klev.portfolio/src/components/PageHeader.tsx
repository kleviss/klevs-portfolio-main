import type { ReactNode } from 'react';
import clsx from 'clsx';
import { m } from 'framer-motion';
import { useTranslation } from 'next-i18next';

const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

interface PageHeaderProps {
  title: string;
  description: string;
  caption?: string;
  headerImage?: ReactNode;
  removeBottomPaddingMobile?: boolean;
  translationNamespace?: string;
}

function PageHeader({
  title,
  description,
  caption = '',
  headerImage = null,
  removeBottomPaddingMobile = false,
  translationNamespace = 'common',
}: PageHeaderProps) {
  const { t } = useTranslation(translationNamespace);

  return (
    <header
      id="page-header"
      className={clsx(
        'background-grid background-grid--fade-out border-divider-light z-[900] mb-10 border-b pt-32 pb-10',
        'md:mb-0 md:border-none md:pb-20 md:pt-40',
        'dark:border-divider-dark',
        removeBottomPaddingMobile && 'pb-0'
      )}
    >
      {headerImage && (
        <div
          className={clsx('content-wrapper absolute inset-0 overflow-hidden')}
        >
          <div
            className={clsx(
              'background-image background-image--fade-out pointer-events-none absolute inset-0 hidden select-none',
              'lg:block'
            )}
          >
            <div className={clsx('content-wrapper relative h-full')}>
              <div className={clsx('absolute right-0 -top-24 bottom-0')}>
                {headerImage}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={clsx('content-wrapper')}>
        {caption && (
          <m.div
            initial={animation.hide}
            animate={animation.show}
            transition={{ delay: 0 }}
          >
            <span
              className={clsx(
                'text-accent-600 mb-1 block text-lg font-extrabold capitalize leading-none',
                'md:mb-0 md:text-2xl',
                'dark:text-accent-400'
              )}
            >
              {t(caption)}
            </span>
          </m.div>
        )}
        <m.div
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.1 }}
        >
          <h1
            className={clsx(
              'text-[2.5rem] font-extrabold leading-tight text-slate-700',
              'md:text-7xl md:leading-snug',
              'dark:text-slate-300'
            )}
          >
            {t(title)}
          </h1>
        </m.div>
        <m.div
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.2 }}
        >
          <p
            className={clsx(
              'mt-4 text-lg text-slate-600',
              'md:mt-6 md:text-2xl lg:max-w-[500px] xl:max-w-[700px]',
              'dark:text-slate-400'
            )}
          >
            {t(description)}
          </p>
        </m.div>
      </div>
    </header>
  );
}

export default PageHeader;
