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
}

export function SectionButton({
  title,
  description = '',
  icon = null,
  active = false,
  onClick = () => { },
  tech = [],
  githubUrl = '',

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
        <span className="flex-1">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              'absolute right-4 top-4 p-2',
              'opacity-0 transition-opacity duration-200',
              'group-hover:opacity-100',
              'text-slate-500 hover:text-slate-700'
            )}
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
