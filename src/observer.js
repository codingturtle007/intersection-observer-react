import { useEffect, useState, useRef } from "react";

const MyObserver = (options) => {
  const ref_container = useRef(null);
  const [ is_visible, setIsVisible ] = useState(false);

  const callbackFunction = (entries) => {
    setIsVisible(entries[0].isIntersecting);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);

    if(ref_container.current) {
      observer.observe(ref_container.current);      
    }

    return () => {
      if(observer) {
        observer.unobserve(ref_container.current);
      }
    }
  }, [ref_container.current]);

  return [is_visible, ref_container];
}

export default MyObserver;