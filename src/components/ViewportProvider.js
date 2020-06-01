import React, { createContext, useContext, useState, useEffect } from 'react';

const viewportContext = createContext({});

export const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : null);
  const [height, setHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : null
  )
  
  const handleWindowResize = () => {
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleWindowResize);
    }
    return () => typeof window !== 'undefined' ? window.removeEventListener('resize', handleWindowResize) : null;
  }, [])

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  )
}

export const useViewport = () => {
  const { width, height } = useContext(viewportContext);
  return { width, height}
}