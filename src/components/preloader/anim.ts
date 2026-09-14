export const opacity = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 }
  }
};

export const slideUp = {
  initial: {
    x: 0,
    scale: 1,
    opacity: 1,
  },
  exit: {
    x: 0,
    scale: 1.08,
    opacity: 0,
    transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] as const, delay: 0.15 }
  }
};
