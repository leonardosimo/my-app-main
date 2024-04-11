'use client'
import { useEffect, useState } from "react"

// interface customWindow extends Window {
// 	Prometeo?: any
// }
// declare const window: customWindow


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

        const refAt = window.AT("page", {});

        refAt.onHeight((data) => {

          setData({
            height: (data.height + 10)
          })
          setLoading(false)
        });

      } catch (error) {
        setError(true)
      }

      return () => {
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