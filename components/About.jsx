"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function About() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const toRotate = [
    "Full Stack Developer",
    "Frontend Developer",
    "MERN Stack Developer",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1),
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="about" className="bg-[#121212] py-20 px-6 md:px-12 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Centered Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Bio & Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-start text-left"
          >
            {/* Typing Animation */}
            <div className="h-8 mb-4">
              <span className="text-xl md:text-2xl font-semibold text-purple-400">
                I am a {text}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              I’m a Computer Science graduate and full-stack developer focused
              on building clean, scalable web applications using the MERN stack.
              I enjoy turning ideas into real products with solid UI, reliable
              backend logic, and performance in mind. Currently looking for
              opportunities to grow as a full-stack developer and contribute to
              real-world projects.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="bg-white/90 text-black px-6 py-3 rounded-full font-semibold hover:bg-white transition-opacity opacity-80 hover:opacity-100"
              >
                Contact Me
              </a>
              <a
                href="https://drive.google.com/file/d/1oOAHseZ7BHM0lXtXGEWu70Jf_weyubtZ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                View Resume
              </a>
            </div>
          </motion.div>

          {/* Right Column: Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-2 text-purple-400">
              Education
            </h3>

            {/* Parul University */}
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-left hover:border-purple-500/30 transition-colors">
              <h4 className="text-lg font-bold text-white">Parul University</h4>
              <p className="text-gray-400 text-sm">
                B.Tech Computer Science and Engineering
              </p>
              <div className="flex justify-between items-center mt-3 border-t border-white/5 pt-3">
                <p className="text-gray-500 text-xs">Gujarat, India</p>
                <span className="text-purple-400 font-mono text-xs">2026</span>
              </div>
            </div>

            {/* Kendriya Vidyalaya */}
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-left hover:border-purple-500/30 transition-colors">
              <h4 className="text-lg font-bold text-white">
                Kendriya Vidyalaya No.1
              </h4>
              <p className="text-gray-400 text-sm">
                Completed Higher Secondary
              </p>
              <div className="flex justify-between items-center mt-3 border-t border-white/5 pt-3">
                <p className="text-gray-500 text-xs">Vadodara, Gujarat</p>
                <span className="text-purple-400 font-mono text-xs">2022</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
