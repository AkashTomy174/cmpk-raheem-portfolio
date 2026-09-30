import { motion, useReducedMotion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

export default function Reveal({ as = 'div', delay = 0, y = 24, className, children, ...rest }) {
  const Component = motion[as] ?? motion.div;
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    const Static = as;
    return (
      <Static className={className} {...rest}>
        {children}
      </Static>
    );
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease }}
      {...rest}
    >
      {children}
    </Component>
  );
}
