'use client'
import { useEffect, useState } from "react"

const hosts = [
  // "http://localhost:3012/", 
  "http://localhost:3000/", 
  "https://www.apuestatotal.com/", 
  "https://calimaco.apuestatotal.dev/"
]
export const useFrameInfo = (refIframe) => {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [isError, setError] = useState(false)

  useEffect(() => {

    if (window && refIframe && refIframe.current) {
      try {

        refIframe.current.addEventListener("load", () => {
          setLoading(false)
        })

        window.addEventListener('message', function (event) {

          if (hosts.indexOf(event.origin) === -1) return null;

          if (typeof event.data === "object" && !event.data?.detail) return null;

          setData({
            height: (event.data?.detail.height + 10)
          })

          setLoading(false)
        });

        
      } catch (error) {
        setError(true)
      }

      return () => {
        setLoading(false)
        window.removeEventListener('message', null)
      }
    }
  }, [])

  return {
    loading,
    data,
    isError
  }
}