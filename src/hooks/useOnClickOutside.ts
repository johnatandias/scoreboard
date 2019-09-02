import { useEffect, RefObject } from 'react';

export const useOnClickOutside = (ref: RefObject<any>, handler: Function) => {
  useEffect(() => {
    const handleClick = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [ref, handler]);
};
