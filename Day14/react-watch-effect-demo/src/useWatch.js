import { useEffect, useRef, useState } from 'react';

export default function useWatch(value) {
  const [watchedValue, setWatchedValue] = useState(value);
  const prevValueRef = useRef();

  useEffect(() => {
    if (prevValueRef.current !== value) {
      setWatchedValue(value);
      prevValueRef.current = value;
    }
  }, [value]);

  return watchedValue;
}
