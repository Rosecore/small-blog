export const debounce = (fn: (...args: unknown[]) => void, delay: number) => {
  let timeout: NodeJS.Timeout;
  return function (...args: unknown[]) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
};
