import { useEffect, useRef } from 'react';

interface CountUpProps {
  value: number;
}

function CountUp({ value }: CountUpProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const { animate } = require('framer-motion');

    animate(0, value, {
      duration: 2,
      ease: 'easeOut',
      onUpdate(currentValue: number) {
        if (node) {
          node.textContent = currentValue.toFixed(0);
        }
      },
    });
  }, [value]);

  return <span ref={nodeRef} />;
}

export default CountUp;
