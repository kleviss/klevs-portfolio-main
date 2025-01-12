import clsx from 'clsx';
import { m } from 'framer-motion';

import {
  CursorIcon,
  FigmaIcon,
  FramerMotionIcon,
  MuiIcon,
  NextJsIcon,
  ReactIcon,
  TailwindCssIcon,
  TypeScriptIcon,
  VSCodeIcon,
} from '@/components/Icons';
import Tooltip from '@/components/Tooltip';

const animation = {
  hide: { x: -8, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

function HeaderTechStack() {
  return (
    <div>
      <m.p
        className={clsx('mb-2.5 text-sm text-slate-600', 'dark:text-slate-400')}
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.6 }}
      >
        current favorite tech stack/tools:
      </m.p>
      <m.ul
        className={clsx(
          'flex items-center gap-3.5 text-slate-500',
          'dark:text-slate-500'
        )}
        initial="hide"
        animate="show"
        transition={{ delayChildren: 0.6, staggerChildren: 0.025 }}
      >
        <m.li variants={animation}>
          <div className={clsx('transition duration-200 hover:text-[#3178C6]')}>
            <Tooltip content="TypeScript">
              <TypeScriptIcon className={clsx('h-6 w-6')} />
            </Tooltip>
          </div>
        </m.li>
        <m.li variants={animation}>
          <div className={clsx('transition duration-200 hover:text-[#61DAFB]')}>
            <Tooltip content="React">
              <ReactIcon className={clsx('h-6 w-6')} />
            </Tooltip>
          </div>
        </m.li>
        {/* <m.li variants={animation}>
          <div className={clsx('transition duration-200 hover:text-[#06B6D4]')}>
            <TailwindCssIcon className={clsx('h-6 w-6')} />
          </div>
        </m.li> */}
        {/* mui icon */}
        <m.li variants={animation}>
          <div className={clsx('transition duration-200 hover:text-[#06B6D4]')}>
            <Tooltip content="Material UI">
              <MuiIcon className={clsx('h-6 w-6')} />
            </Tooltip>
          </div>
        </m.li>
        <m.li variants={animation}>
          <div className={clsx('transition duration-200 hover:text-[#0055FF]')}>
            <Tooltip content="Framer Motion">
              <FramerMotionIcon className={clsx('h-6 w-6')} />
            </Tooltip>
          </div>
        </m.li>
        <m.li variants={animation}>
          <div
            className={clsx(
              'transition duration-200 hover:text-[#000000] dark:hover:text-[#FFFFFF]'
            )}
          >
            <Tooltip content="Next.js">
              <NextJsIcon className={clsx('h-6 w-6')} />
            </Tooltip>
          </div>
        </m.li>
        <m.li variants={animation}>
          <div className={clsx('h-3 w-[1px] bg-slate-300 dark:bg-slate-700')} />
        </m.li>
        <m.li variants={animation}>

          <Tooltip content="Cursor">
            <div className={clsx(
              'transition duration-200 hover:text-[#000000] dark:hover:text-[#FFFFFF]',
              'mt-1',
              'pt-1',
              'rotate-45',
              'scale-110'
            )}>
              <CursorIcon className={clsx('h-6 w-6')} />
            </div>
          </Tooltip>
        </m.li>
        <m.li variants={animation}>
          <div className={clsx('transition duration-200 hover:text-[#F24E1E]')}>
            <Tooltip content="Figma">
              <FigmaIcon className={clsx('h-6 w-6')} />
            </Tooltip>
          </div>
        </m.li>
      </m.ul>
    </div>
  );
}

export default HeaderTechStack;
