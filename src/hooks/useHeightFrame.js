'use client'
import { useEffect, useState } from "react"

export const useHeightFrame = (refIframe) => {

  const [loading, setLoading] = useState(true)
  const [isSuccess, setSuccess] = useState(false)
  const [isError, setError] = useState(false)

  useEffect(() => {
    if (window && refIframe && refIframe.current) {
      window.addEventListener('message', function (event) {
        try {
          console.log("event.data", event);
          if (typeof event.data === "object" && event.data?.detalleHtml) {
            refIframe.current.style.height = (event.data?.detalleHtml.height + 10)+ "px"
            setSuccess(true)
          }
        } catch (error) {
          setError(true)
        }
        setLoading(false)

      });
      return () => {
        setLoading(false)
        window.removeEventListener('message', null)
      }
    }
  }, [])

  return {
    loading,
    isSuccess,
    isError
  }
}