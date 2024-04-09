'use client'
import { useHeightFrame } from "@/hooks/useHeightFrame";
import { useRef } from "react";


export const ComponentFrame = () => {
    const refIframe = useRef()
    const {loading, isSuccess   } = useHeightFrame(refIframe)
    return <>
        <iframe
            ref={refIframe}
            src="http://localhost:3000/"
        ></iframe>
    </>
}