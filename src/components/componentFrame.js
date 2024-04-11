'use client'
import { useFrameInfo } from '@/hooks/useHeightFrame';

export default function ComponentFrame({ src }) {

    const { loading, data, isError } = useFrameInfo(src);

    return (
        <>
            {loading && (
                <div className="loading-container">
                    LOADING....
                </div>
            )}
            {isError && (
                <div className="error-container">
                    Error loading frame.
                </div>
            )}
            <iframe
                style={{ height: data?.height ? `${data.height}px` : "0px" }}
                src={src}
            />
        </>
    );
};

