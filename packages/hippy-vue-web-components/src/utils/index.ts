/**
 * Warning information output
 */
const warn = (...context: any[]) => {
  // In production build
  if (process.env.NODE_ENV === 'production') {
    return;
  }
  /* eslint-disable-next-line no-console */
  console.warn(...context);
};

const unsupportedWarn = (module: string) => {
  warn(`${module} is not supported in the web`);
};

export { warn, unsupportedWarn };
