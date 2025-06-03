import clsx from 'clsx';
import { ReactNode } from 'react';

interface TooltipProps {
  content: string;
  children: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

function Tooltip({
  content,
  children,
  position = 'bottom',
}: TooltipProps) {
  const positionClasses = {
    top: 'bottom-full mb-2',
    bottom: 'top-full mt-2',
    left: 'right-full mr-2',
    right: 'left-full ml-2',
  };

  return (
    <div className="group relative inline-block">
      <div className="inline-flex">{children}</div>
      <div
        className={clsx(
          'pointer-events-none absolute left-1/2 -translate-x-1/2',
          'opacity-0 group-hover:opacity-100',
          'transition-opacity duration-200',
          positionClasses[position]
        )}
      >
        <div className="flex flex-col items-center">
          {position === 'bottom' && (
            <div className="h-2 w-2 -mb-1 rotate-45 bg-slate-900" />
          )}
          <div className="rounded bg-slate-900 px-2 py-1">
            <p className="whitespace-nowrap text-xs text-slate-100">{content}</p>
          </div>
          {position === 'top' && (
            <div className="h-2 w-2 -mt-1 rotate-45 bg-slate-900" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Tooltip; 
