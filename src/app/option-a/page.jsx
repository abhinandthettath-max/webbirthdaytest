"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Heart, ChevronLeft, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function OptionAPage() {
    const router = useRouter()
    const [currentPage, setCurrentPage] = useState(0)

    // Array of newspaper images
    const newspaperPages = [
        "/newspaper1.png", // Magazine style page with "PICTURE OF THE WEEK"
        "/newspaper2.png", // "EDITOR CONFESSES COMPLETE BIAS TOWARDS BIRTHDAY GIRL"
        "/newspaper3.png", // "EXCLUSIVE FEATURE: WOMAN SO AMAZING SHE REDEFINES LOVE DAILY"
        "/newspaper4.png", // Two-photo layout page
        "/newspaper5.png", // "The Daily Disha" newspaper
    ]

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 2) % newspaperPages.length)
    }

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 2 + newspaperPages.length) % newspaperPages.length)
    }

    const nextMobilePage = () => {
        setCurrentPage((prev) => (prev + 1) % newspaperPages.length)
    }

    const prevMobilePage = () => {
        setCurrentPage((prev) => (prev - 1 + newspaperPages.length) % newspaperPages.length)
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-rose-100 to-purple-100 flex items-center justify-center p-2 overflow-hidden">
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

            {/* Desktop View - Two Pages Side by Side */}
            <div className="hidden md:flex relative z-10 w-full max-w-7xl h-[95vh] items-center justify-center">
                {/* Left Navigation Arrow */}
                <motion.button
                    onClick={prevPage}
                    className="absolute left-4 p-3 rounded-full bg-pink-100 hover:bg-pink-200 transition-colors z-20"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ChevronLeft className="w-6 h-6 text-pink-600" />
                </motion.button>

                {/* Newspaper Container - Two Pages */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="flex gap-4 h-full items-center justify-center"
                >
                    {/* Left Page */}
                    <motion.div
                        key={`left-${currentPage}`}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white shadow-2xl rounded-lg overflow-hidden"
                        style={{ height: '90vh', aspectRatio: '3/4' }}
                    >
                        <img
                            src={newspaperPages[currentPage]}
                            alt={`Newspaper page ${currentPage + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Right Page */}
                    {newspaperPages[currentPage + 1] && (
                        <motion.div
                            key={`right-${currentPage + 1}`}
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white shadow-2xl rounded-lg overflow-hidden"
                            style={{ height: '90vh', aspectRatio: '3/4' }}
                        >
                            <img
                                src={newspaperPages[currentPage + 1]}
                                alt={`Newspaper page ${currentPage + 2}`}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    )}
                </motion.div>

                {/* Right Navigation Arrow */}
                <motion.button
                    onClick={nextPage}
                    className="absolute right-4 p-3 rounded-full bg-pink-100 hover:bg-pink-200 transition-colors z-20"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ChevronRight className="w-6 h-6 text-pink-600" />
                </motion.button>

                {/* Page Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {Array.from({ length: Math.ceil(newspaperPages.length / 2) }).map((_, i) => (
                        <div
                            key={i}
                            className={`w-3 h-3 rounded-full transition-colors ${Math.floor(currentPage / 2) === i ? 'bg-pink-500' : 'bg-pink-200'
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Mobile View - Full Screen Single Page */}
            <div className="md:hidden relative z-10 w-full h-screen flex flex-col">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-3 bg-white bg-opacity-90 backdrop-blur-sm border-b border-pink-200">
                    <motion.button
                        onClick={() => router.back()}
                        className="p-2 rounded-full bg-pink-100 hover:bg-pink-200 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ArrowLeft className="w-5 h-5 text-pink-600" />
                    </motion.button>

                    <h1 className="text-lg font-bold text-pink-600">Breaking News</h1>

                    <div className="flex gap-2">
                        <motion.button
                            onClick={prevMobilePage}
                            className="p-2 rounded-full bg-pink-100 hover:bg-pink-200 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <ChevronLeft className="w-4 h-4 text-pink-600" />
                        </motion.button>
                        <motion.button
                            onClick={nextMobilePage}
                            className="p-2 rounded-full bg-pink-100 hover:bg-pink-200 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <ChevronRight className="w-4 h-4 text-pink-600" />
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Newspaper Container - Full Width & Height */}
                <div className="flex-1 flex items-center justify-center p-2 overflow-hidden">
                    <motion.div
                        key={`mobile-${currentPage}`}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full bg-white shadow-lg rounded-lg overflow-hidden"
                    >
                        <img
                            src={newspaperPages[currentPage]}
                            alt={`Newspaper page ${currentPage + 1}`}
                            className="w-full h-full object-contain bg-white"
                        />
                    </motion.div>
                </div>

                {/* Mobile Page Indicator */}
                <div className="flex justify-center items-center gap-2 p-3 bg-white bg-opacity-90 backdrop-blur-sm border-t border-pink-200">
                    {newspaperPages.map((_, i) => (
                        <div
                            key={i}
                            className={`w-2 h-2 rounded-full transition-colors ${currentPage === i ? 'bg-pink-500' : 'bg-pink-200'
                                }`}
                        />
                    ))}
                    <span className="ml-2 text-sm text-purple-700 font-medium">
                        {currentPage + 1} of {newspaperPages.length}
                    </span>
                </div>
            </div>
        </main>
    )
}