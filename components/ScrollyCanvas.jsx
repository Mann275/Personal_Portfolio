'use client';

import { useScroll, useMotionValueEvent } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Overlay from './Overlay';

const frameCount = 120;

export default function ScrollyCanvas() {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Preload images
    useEffect(() => {
        const loadedImages = [];
        let loadedCount = 0;

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            const frameIndex = i.toString().padStart(3, '0');
            img.src = `/sequence/frame_${frameIndex}.png`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setIsLoaded(true);
                }
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    const renderFrame = (index) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        const img = images[index];

        if (!canvas || !ctx || !img) return;

        // Canvas sizing to cover the screen (object-fit: cover logic)
        const { width, height } = canvas;
        const imgRatio = img.width / img.height;
        const canvasRatio = width / height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
            drawWidth = width;
            drawHeight = width / imgRatio;
            offsetX = 0;
            offsetY = (height - drawHeight) / 2;
        } else {
            drawWidth = height * imgRatio;
            drawHeight = height;
            offsetX = (width - drawWidth) / 2;
            offsetY = 0;
        }

        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        if (!isLoaded || images.length === 0) return;

        // Map progress 0-1 to frame index 0-119
        const frameIndex = Math.min(
            frameCount - 1,
            Math.floor(latest * frameCount)
        );

        renderFrame(frameIndex);
    });

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // Init size
        return () => window.removeEventListener('resize', handleResize);
    }, [isLoaded, images]);

    // Initial render when loaded
    useEffect(() => {
        if (isLoaded && images.length > 0) {
            renderFrame(0);
        }
    }, [isLoaded, images]);

    return (
        <div ref={containerRef} className="relative h-[500vh] bg-[#121212]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="block h-full w-full object-cover"
                />
                <Overlay scrollYProgress={scrollYProgress} />

                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-white z-50 bg-[#121212]">
                        Loading...
                    </div>
                )}
            </div>
        </div>
    );
}
