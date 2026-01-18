'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    // State management for form data and submission status
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    // Initialize EmailJS when component mounts
    useEffect(() => {
        try {
            emailjs.init("aYHsccMGqYR5Axf8L");
        } catch (error) {
            console.error('EmailJS initialization failed:', error);
        }
    }, []);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission with EmailJS
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('📧 Sending message...');

        // Add validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setSubmitMessage('❌ Please fill in all fields.');
            setIsSubmitting(false);
            setTimeout(() => setSubmitMessage(''), 4000);
            return;
        }

        try {
            const templateParams = {
                user_name: formData.name,
                user_email: formData.email,
                message: formData.message
            };

            await emailjs.send(
                'service_8tqrvxm',
                'template_1wgf29f',
                templateParams,
                'aYHsccMGqYR5Axf8L'
            );

            setSubmitMessage('✅ Message sent successfully! I\'ll get back to you soon.');
            setFormData({ name: '', email: '', message: '' });

            setTimeout(() => {
                setSubmitMessage('');
            }, 4000);

        } catch (error) {
            console.error('EmailJS error:', error);
            setSubmitMessage('❌ Failed to send message. Please try again.');

            setTimeout(() => {
                setSubmitMessage('');
            }, 4000);

        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 px-6 md:px-12 text-white border-t border-white/10">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent"
                >
                    Get In Touch
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Left Column: Contact Details + Social */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >

                        <div className="space-y-8 mb-12">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-purple-400">
                                    <FaEnvelope className="text-xl" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <a href="mailto:patelmann2705@gmail.com" className="text-lg font-medium hover:text-purple-400 transition-colors">patelmann2705@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-purple-400">
                                    <FaPhone className="text-xl" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Phone</p>
                                    <p className="text-lg font-medium">+91-7990126127</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-purple-400">
                                    <FaMapMarkerAlt className="text-xl" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="text-lg font-medium">Gujarat, India</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-xl font-semibold mb-6 text-white">Follow Me</h3>
                            <div className="flex space-x-4">
                                <a href="https://github.com/Mann275" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:text-purple-400 transition-all">
                                    <FaGithub className="text-2xl" />
                                </a>
                                <a href="https://www.linkedin.com/in/mann27/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:text-blue-400 transition-all">
                                    <FaLinkedin className="text-2xl" />
                                </a>
                                <a href="http://instagram.com/mann.275" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:text-pink-400 transition-all">
                                    <FaInstagram className="text-2xl" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Text + Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                            I'm always open to discussing new opportunities and interesting projects.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                    disabled={isSubmitting}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                    disabled={isSubmitting}
                                />
                            </div>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                placeholder="Your Message"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                disabled={isSubmitting}
                            />

                            {submitMessage && (
                                <p className={`text-sm font-semibold ${submitMessage.includes('❌') ? 'text-red-400' : 'text-green-400'}`}>
                                    {submitMessage}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
