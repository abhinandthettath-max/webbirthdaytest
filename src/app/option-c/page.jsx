"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Heart, Sparkles, X, ZoomIn } from "lucide-react"
import { useRouter } from "next/navigation"

export default function PhotoGalleryPage() {
    const router = useRouter()
    const [selectedImage, setSelectedImage] = useState(null)

    // Array of gallery images
    const galleryImages = [
        {
            id: 1,
            src: "/gallery1.jpg",
            alt: "Beautiful memory 1"
        },
        {
            id: 2,
            src: "/gallery2.jpg",
            alt: "Beautiful memory 2"
        },
        {
            id: 3,
            src: "/gallery3.jpg",
            alt: "Beautiful memory 3"
        },
        {
            id: 4,
            src: "/gallery4.jpg",
            alt: "Beautiful memory 4"
        },
        {
            id: 5,
            src: "/gallery5.jpg",
            alt: "Beautiful memory 5"
        },
        {
            id: 6,
            src: "/gallery6.jpg",
            alt: "Beautiful memory 6"
        },
        {
            id: 7,
            src: "/gallery7.jpg",
            alt: "Beautiful memory 7"
        },
        {
            id: 8,
            src: "/gallery8.jpg",
            alt: "Beautiful memory 8"
        },
        {
            id: 9,
            src: "/gallery9.jpg",
            alt: "Beautiful memory 9"
        }
    ]

    const openImage = (image) => {
        setSelectedImage(image)
    }

    const closeImage = () => {
        setSelectedImage(null)
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

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-6xl mx-auto">
                <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl shadow-xl shadow-rose-100 p-8 border-2 border-rose-200">

                    {/* Header */}
                    <div className="text-center mb-8">
                        <motion.h1
                            className="text-4xl md:text-5xl font-bold text-pink-600 mb-4"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            Ma princesse et son amour
                        </motion.h1>
                        <div className="flex justify-center items-center gap-2">
                            <Sparkles className="w-5 h-5 text-yellow-500" />
                            <p className="text-purple-700 text-lg">Our Beautiful Memories</p>
                            <Sparkles className="w-5 h-5 text-yellow-500" />
                        </div>
                    </div>

                    {/* Photo Grid */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {galleryImages.map((image, index) => (
                            <motion.div
                                key={image.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.1 * index,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                className="relative group cursor-pointer"
                                onClick={() => openImage(image)}
                            >
                                <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="flex items-center justify-between text-white">
                                                <span className="text-sm font-medium">Memory {image.id}</span>
                                                <ZoomIn className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Heart animation on hover */}
                                    <motion.div
                                        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                                        animate={{
                                            scale: [1, 1.2, 1],
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                        }}
                                    >
                                        <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Footer Message */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="text-center mt-8"
                    >
                        <a
                            href="https://drive.google.com/drive/folders/1kyriq6tpSzpiBEoB9N3eIYbmOm1ydOKV"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-purple-700 text-lg font-medium hover:text-pink-600 transition-colors duration-300 bg-gradient-to-r from-pink-100 to-purple-100 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                        >
                            <Heart className="w-5 h-5 fill-current" />
                            Now you can always see us
                            <Sparkles className="w-5 h-5" />
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
                        onClick={closeImage}
                    >
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeImage}
                                className="absolute top-4 right-4 p-2 bg-white bg-opacity-80 rounded-full hover:bg-opacity-100 transition-all z-10"
                            >
                                <X className="w-6 h-6 text-gray-700" />
                            </button>

                            {/* Large Image */}
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="w-full h-full object-contain"
                            />

                            {/* Image Caption */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                                <h3 className="text-white text-xl font-semibold mb-2">
                                    Beautiful Memory {selectedImage.id}
                                </h3>
                                <p className="text-white/80">
                                    A precious moment captured forever 💖
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    )
}