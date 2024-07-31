import { useEffect } from 'react';

const useRefetch = (callback: (args?: unknown) => unknown, timeout: number = 60000) => {
  useEffect(() => {
    callback();
    const callbackId = setInterval(callback, timeout);
    return () => {
      clearInterval(callbackId);
    };
  }, [callback, timeout]);
};

export default useRefetch;
