import { useEffect, useState } from "react";

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
      v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}


export const useFrameInfo = (src) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    const handleMessage = (event) => {
      setData({
        height: event.detail.height + 10
      });
      setLoading(false);
    };

    const refIframe = {
      current: document.querySelector(`iframe[src='${src}']`)
    }

    if (window && refIframe && refIframe.current) {
      // const resolverAsyn
      refIframe.current.addEventListener("load", handleLoad);

      const AT = window.AT("page", { id: uuidv4(), src }); // Utiliza el módulo AT para configurar la comunicación con el iframe

      if (AT.nameCustomEvent) {
        console.log(AT.nameCustomEvent);
        window.addEventListener(AT.nameCustomEvent, handleMessage);
      }

      return () => {
        refIframe.current.removeEventListener("load", handleLoad);
        AT.closeMss()
      };
    }

    return () => { };
  }, [src]);

  return {
    loading,
    data,
    isError
  };
};
