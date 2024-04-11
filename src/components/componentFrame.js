'use client'
import { useFrameInfo } from "@/hooks/useHeightFrame";
import { useId, useRef } from "react";


export const ComponentFrame = ({ src }) => {
    const refIframe = useRef()
    const id = useId()
    const { loading, data } = useFrameInfo(refIframe)
    return <>
        {
            loading ? <div
                style={{
                    width: "100%",
                    height: "100%",
                    background: "red",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    top: 0,
                    left: 0
                }}
            >
                LOADING....
            </div>
                : null
        }
        <iframe
            key={id}
            style={{ height: data ? data.height : "0px" }}
            ref={refIframe}
            src={
                // "http://localhost:3000/"
                src
            }
        ></iframe>
    </>
}