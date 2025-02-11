import { useEffect } from "react";

export const useTImeout = (callback: () => void, delay: number) => {
  useEffect(() => {
    const timer = setTimeout(callback, delay);

    return () => clearTimeout(timer);
  }, [callback, delay]);
};

export default useTImeout;