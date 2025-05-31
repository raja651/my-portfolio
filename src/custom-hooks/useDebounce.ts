import { useState, useEffect } from "react";
export function useDebounce(func: () => void, delay: number) {
  const [debouncedFunc, setDecbouncedFunc] = useState(func);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDecbouncedFunc(func);
    }, delay);

    return () => clearTimeout(timerId);
  }, [func, delay]);

  return debouncedFunc;
}
