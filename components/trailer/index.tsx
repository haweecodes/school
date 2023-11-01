import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import LoadingSpinner from '../loadingSpinner';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const CourseTrailer = () => {
  
  // did not get any video url in media property all jpg
  const staticUrl = "https://youtu.be/zrlYnaZftEQ"
  return (
    <Suspense fallback={<LoadingSpinner/>}>
      <ReactPlayer
        url={staticUrl}
        height={300}
        width='auto'
        config={{
          youtube: {
            playerVars: { showinfo: 1 }
          },
        }}
      />
    </Suspense>

  );
};

export default CourseTrailer;
