"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Heart, Sparkles, ZoomIn, ZoomOut } from "lucide-react"
import { useRouter } from "next/navigation"

export default function LetterPage() {
    const router = useRouter()
    const [isZoomed, setIsZoomed] = useState(false)

    const toggleZoom = () => {
        setIsZoomed(!isZoomed)
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-rose-100 to-purple-100 flex flex-col items-center justify-center p-4 overflow-hidden">
            {/* Decorative floating hearts */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
                {Array.from({ length: 15 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }}
                        animate={{
                            y: [0, -20, 0],
                            scale: [1, 1.1, 1],
                            rotate: [0, 10, 0, -10, 0]
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                    >
                        <Heart className="w-4 h-4 text-pink-300 opacity-60 fill-pink-300" />
                    </motion.div>
                ))}
            </div>

            {/* Back Button */}
            <motion.button
                onClick={() => router.back()}
                className="fixed top-4 left-4 p-2 rounded-full bg-pink-100 hover:bg-pink-200 transition-colors z-30"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <ArrowLeft className="w-5 h-5 text-pink-600" />
            </motion.button>

            {/* Zoom Button */}
            <motion.button
                onClick={toggleZoom}
                className="fixed top-4 right-4 p-2 rounded-full bg-pink-100 hover:bg-pink-200 transition-colors z-30"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {isZoomed ? (
                    <ZoomOut className="w-5 h-5 text-pink-600" />
                ) : (
                    <ZoomIn className="w-5 h-5 text-pink-600" />
                )}
            </motion.button>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-4xl mx-auto">
                <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl shadow-xl shadow-rose-100 p-8 border-2 border-rose-200">

                    {/* Header */}
                    <div className="text-center mb-8">
                        <motion.h1
                            className="text-4xl md:text-5xl font-bold text-pink-600 mb-4"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            A Letter
                        </motion.h1>
                        <div className="flex justify-center items-center gap-2">
                            <Sparkles className="w-5 h-5 text-yellow-500" />
                            <p className="text-purple-700 text-lg">A Special Message For You</p>
                            <Sparkles className="w-5 h-5 text-yellow-500" />
                        </div>
                    </div>

                    {/* Letter Image Container */}
                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <motion.div
                            className={`relative bg-white rounded-2xl shadow-2xl p-4 transition-all duration-500 ${isZoomed ? 'w-full' : 'max-w-2xl'
                                }`}
                            animate={{
                                scale: isZoomed ? 1.1 : 1,
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Letter Image */}
                            <motion.img
                                src="/letter-image.jpg"
                                alt="A special letter"
                                className={`w-full h-auto rounded-xl shadow-lg transition-all duration-500 ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
                                    }`}
                                onClick={toggleZoom}
                                whileHover={{ scale: isZoomed ? 1 : 1.02 }}
                                transition={{ duration: 0.3 }}
                            />

                            {/* Decorative corners */}
                            <div className="absolute top-2 left-2">
                                <Heart className="w-4 h-4 text-pink-400 fill-pink-400 opacity-70" />
                            </div>
                            <div className="absolute top-2 right-2">
                                <Heart className="w-4 h-4 text-pink-400 fill-pink-400 opacity-70" />
                            </div>
                            <div className="absolute bottom-2 left-2">
                                <Heart className="w-4 h-4 text-pink-400 fill-pink-400 opacity-70" />
                            </div>
                            <div className="absolute bottom-2 right-2">
                                <Heart className="w-4 h-4 text-pink-400 fill-pink-400 opacity-70" />
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Footer Message */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="text-center mt-8"
                    >
                        <p className="text-purple-700 text-lg italic">
                            Words from the heart, written with love 💕
                        </p>
                        <p className="text-purple-600 text-sm mt-2">
                            Click the image to zoom in and read every word
                        </p>
                    </motion.div>
                </div>
            </div>
        </main>
    )
}