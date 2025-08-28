import React, { useEffect, useRef } from "react";

// Import OpenCV.js (installed via npm: `npm install opencv.js`)
// import cv from "opencv.js";

export default function Test() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    async function initCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing webcam: ", err);
      }
    }
    initCamera();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        width="640"
        height="480"
        className="rounded-lg shadow-lg"
      />
      <canvas ref={canvasRef} width="640" height="480" className="hidden"></canvas>
    </div>
  );
}

// const Test = () => {
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     // Start webcam stream
//     const startCamera = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//           videoRef.current.play();
//         }
//       } catch (err) {
//         console.error("Error accessing webcam: ", err);
//       }
//     };

//     startCamera();

//     // Process frames with OpenCV
//     const processVideo = () => {
//       if (!videoRef.current || !canvasRef.current) return;

//       const video = videoRef.current;
//       const canvas = canvasRef.current;
//       const ctx = canvas.getContext("2d");

//       const cap = new cv.VideoCapture(video);

//       const src = new cv.Mat(video.height, video.width, cv.CV_8UC4);
//       const gray = new cv.Mat(video.height, video.width, cv.CV_8UC1);

//       const FPS = 30;

//       const loop = () => {
//         cap.read(src);
//         cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY);

//         // Show grayscale result
//         cv.imshow(canvas, gray);

//         setTimeout(loop, 1000 / FPS);
//       };

//       loop();
//     };

//     videoRef.current?.addEventListener("play", processVideo);

//     return () => {
//       videoRef.current?.removeEventListener("play", processVideo);
//     };
//   }, []);

//   return (
//     <div className="flex flex-col items-center">
//       <video
//         ref={videoRef}
//         width="640"
//         height="480"
//         style={{ display: "none" }}
//       />
//       <canvas ref={canvasRef} width="640" height="480" />
//     </div>
//   );
// };

// export default Test;
