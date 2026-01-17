"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Heart, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"

export default function MenuPage() {
    const router = useRouter()
    const [selectedOption, setSelectedOption] = useState(null)
    const audioRef = useRef(null)

    // Start music when menu loads
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.6;
            audioRef.current.play().catch((e) => {
                console.log("Autoplay prevented, user interaction needed", e)
            })
        }
    }, [])

    const handleOptionClick = (optionId) => {
        setSelectedOption(optionId)

        // Navigate to specific pages based on option
        if (optionId === 'A') {
            router.push('/option-a')
        } else if (optionId === 'B') {
            router.push('/option-b')
        } else if (optionId === 'C') {
            router.push('/option-c')
        } else if (optionId === 'D') {
            router.push('/option-d')
        }
        // Add more navigation logic for other options later
    }

    const menuOptions = [
        {
            id: 'A',
            title: 'Breaking News',
            image: '/menu-option-a.jpg',
            description: 'Latest headlines and stories'
        },
        {
            id: 'B',
            title: 'Reasons I\'m Obsessed With You Quiz',
            image: '/menu-option-b.jpg',
            description: 'Test how loved you are'
        },
        {
            id: 'C',
            title: 'Our Album',
            image: '/menu-option-c.jpg',
            description: 'Beautiful memories together'
        },
        {
            id: 'D',
            title: 'A Letter',
            image: '/menu-option-d.jpg',
            description: 'A special message for you'
        }
    ]

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

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full max-w-4xl mx-auto"
            >
                <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl shadow-xl shadow-rose-100 p-8 border-2 border-rose-200">

                    {/* Header */}
                    <div className="text-center mb-8">
                        <motion.button
                            onClick={() => router.back()}
                            className="absolute top-6 left-6 p-2 rounded-full bg-pink-100 hover:bg-pink-200 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <ArrowLeft className="w-5 h-5 text-pink-600" />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0, rotate: -10 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                delay: 0.3,
                            }}
                            className="relative mb-6"
                        >
                            <h1 className="text-3xl sm:text-4xl font-bold text-center text-pink-600 mb-2">
                                Choose Your Adventure
                            </h1>
                            <div className="flex justify-center gap-3">
                                <Sparkles className="w-6 h-6 text-yellow-500" />
                                <Heart className="w-6 h-6 text-pink-500" />
                                <Sparkles className="w-6 h-6 text-yellow-500" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Menu Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {menuOptions.map((option, index) => (
                            <motion.div
                                key={option.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 * index }}
                                className="relative group cursor-pointer"
                                onClick={() => handleOptionClick(option.id)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className={`bg-gradient-to-br from-pink-200 to-purple-200 rounded-2xl p-6 shadow-lg transition-all duration-300 border-2 ${selectedOption === option.id
                                    ? 'border-pink-400 shadow-xl'
                                    : 'border-pink-100 hover:border-pink-300'
                                    }`}>

                                    {/* Option Letter */}
                                    <div className="absolute top-4 right-4">
                                        <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-lg">{option.id}</span>
                                        </div>
                                    </div>

                                    {/* Image */}
                                    <div className="mb-4 overflow-hidden rounded-xl">
                                        <img
                                            src={option.image}
                                            alt={option.title}
                                            className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="text-center">
                                        <h3 className="text-xl font-semibold text-purple-700 mb-2">
                                            {option.title}
                                        </h3>
                                        <p className="text-purple-600 text-sm">
                                            {option.description}
                                        </p>
                                    </div>

                                    {/* Selection indicator */}
                                    {selectedOption === option.id && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="absolute inset-0 bg-pink-400 bg-opacity-20 rounded-2xl flex items-center justify-center"
                                        >
                                            <div className="bg-white rounded-full p-2">
                                                <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Footer message */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="text-center mt-8"
                    >
                        <p className="text-purple-700 text-lg">
                            Pick one that speaks to your heart 💖
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Background music */}
            <audio ref={audioRef} src="/birthday.mp3" preload="auto" loop />
        </main>
    )
}