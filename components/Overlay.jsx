'use client';

import { motion, useTransform } from 'framer-motion';

export default function Overlay({ scrollYProgress }) {
    // Section 1: 0% - 20%
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, 1, 0]);

    // Section 2: 25% - 45%
    const y2 = useTransform(scrollYProgress, [0.25, 0.45], [50, -50]);
    const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [0, 1, 0]);

    // Section 3: 50% - 70%
    const y3 = useTransform(scrollYProgress, [0.5, 0.7], [50, -50]);
    const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7], [0, 1, 0]);

    return (
        <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-center items-center text-white mix-blend-difference">
            {/* Section 1 - Center */}
            <motion.div
                className="absolute text-center px-4"
                style={{ y: y1, opacity: opacity1 }}
            >
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter">Patel Mann</h1>
                <p className="text-lg md:text-2xl mt-4 font-light text-gray-300">Full-Stack Developer.</p>
            </motion.div>

            {/* Section 2 - Left */}
            <motion.div
                className="absolute left-6 md:left-24 top-1/3 pr-6"
                style={{ y: y2, opacity: opacity2 }}
            >
                <h2 className="text-4xl md:text-6xl font-bold max-w-lg leading-tight">Built with the MERN Stack.</h2>
            </motion.div>

            {/* Section 3 - Right */}
            <motion.div
                className="absolute right-6 md:right-24 bottom-1/3 text-right pl-6"
                style={{ y: y3, opacity: opacity3 }}
            >
                <h2 className="text-4xl md:text-6xl font-bold max-w-lg leading-tight">Solving real-world problems.</h2>
            </motion.div>
        </div>
    );
}
