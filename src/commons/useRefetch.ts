import { useEffect } from 'react';

const useRefetch = (callback: (args?: unknown) => void, timeout: number = 60000) => {
  useEffect(() => {
    callback();
    const callbackId = setInterval(callback, timeout);
    return () => {
      clearInterval(callbackId);
    };
  }, [callback, timeout]);
};

export default useRefetch;
