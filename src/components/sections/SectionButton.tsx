import type { ReactNode } from 'react';
import clsx from 'clsx';

interface SectionButtonProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  active?: boolean;
  onClick?: () => void;
  tech?: string[];
  githubUrl?: string;
  appStoreUrl?: string;
}

export function SectionButton({
  title,
  description = '',
  icon = null,
  active = false,
  onClick = () => { },
  tech = [],
  githubUrl = '',
  appStoreUrl = '',
}: SectionButtonProps) {
  return (
    <button
      type="button"
      className={clsx(
        'flex flex-1 items-center gap-4 rounded-2xl border-2 bg-white px-4 py-4 text-left',
        'dark:bg-slate-900',
        active
          ? ['border-accent-400', 'dark:border-accent-400']
          : ['border-divider-light ', 'dark:border-divider-dark'],
        'w-full'
      )}
      onClick={onClick}
    >
      {icon && (
        <span
          className={clsx(
            'hidden w-24 shrink-0 justify-center text-center text-7xl font-black',
            'xl:flex',
            active
              ? ['text-accent-600', 'dark:text-accent-400']
              : ['text-slate-400', 'dark:text-slate-600']
          )}
        >
          {icon}
        </span>
      )}
      <span className={clsx('flex-1')}>
        <span
          className={clsx(
            'block font-bold',
            active
              ? ['text-accent-600', 'dark:text-accent-400']
              : ['text-slate-700', 'dark:text-slate-200']
          )}
        >
          {title}
        </span>
        {description && (
          <span
            className={clsx(
              'mt-1 block text-sm text-slate-600',
              'dark:text-slate-400'
            )}
          >
            {description}
          </span>
        )}

        <span className="flex-1">
          {tech.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2 px-0 flex-1">
              {tech.map((tech) => (
                <div
                  key={tech}
                  className={clsx(
                    'border-divider-light rounded-full border px-2 py-0.5 text-xs',
                    'dark:border-divider-dark'
                  )}
                >
                  {tech}
                </div>
              ))}
            </div>
          )}
        </span>
        <span className="flex gap-2">
          {appStoreUrl && (
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={clsx(
                'absolute right-14 top-4 p-2',
                'opacity-0 transition-opacity duration-200',
                'group-hover:opacity-100',
                'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
              )}
              title="View on App Store"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
              </svg>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={clsx(
                'absolute right-4 top-4 p-2',
                'opacity-0 transition-opacity duration-200',
                'group-hover:opacity-100',
                'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
              )}
              title="View on GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </span>
      </span>
    </button>
  );
}

export function SectionButtonSmall({
  title,
  icon = null,
  active = false,
  onClick = () => { },
}: Omit<SectionButtonProps, 'description'>) {
  return (
    <button
      type="button"
      className={clsx('flex flex-col items-center rounded-xl p-2 text-sm', [
        active
          ? ['text-accent-600', 'dark:text-accent-400']
          : ['text-slate-400', 'dark:text-slate-600'],
      ])}
      onClick={onClick}
    >
      <span className={clsx('text-4xl font-black')}>{icon}</span>
      <span
        className={clsx(
          'font-medium',
          active
            ? ['text-accent-600', 'dark:text-accent-400']
            : ['text-slate-500', 'dark:text-slate-400']
        )}
      >
        {title}
      </span>
    </button>
  );
}
