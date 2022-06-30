import { useEffect, useState, useRef } from "react";

const MyObserver = (options) => {
  const ref_container = useRef(null);
  const [ is_visible, setIsVisible ] = useState(false);

  const callbackFunction = entries => {
    console.log(entries)
    setIsVisible(entries[0].isIntersecting);
  }

  useEffect(() => {
    let observer;

    if(ref_container.current) {
      observer = new IntersectionObserver(callbackFunction, options);
      observer.observe(ref_container.current);      
    }

    return () => {
      if(ref_container.current) {
        observer.unobserve(ref_container.current);
      }
    }
  }, []);

  return [is_visible, ref_container];
}

export default MyObserver;