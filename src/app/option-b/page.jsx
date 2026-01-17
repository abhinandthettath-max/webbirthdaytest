"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Heart, Sparkles, Crown, Check, X } from "lucide-react"
import { useRouter } from "next/navigation"
import Confetti from "@/components/confetti"

export default function QuizPage() {
    const router = useRouter()
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [showResult, setShowResult] = useState(false)
    const [showConfetti, setShowConfetti] = useState(false)
    const [showCorrectFeedback, setShowCorrectFeedback] = useState(false)
    const [showRewardImage, setShowRewardImage] = useState(false)

    const questions = [
        {
            id: 1,
            question: "Does The whole world choose Disha every single day, without doubt?",
            type: "yesno",
            options: ["Yes", "No"],
            correctAnswer: 0, // Index of correct answer (Yes)
            encouragement: "Of course you got that right. The world agrees with you ✨"
        },
        {
            id: 2,
            question: "Who does Abhinand and Universe love the most?",
            type: "mcq",
            options: [
                "Themselves",
                "Their phone",
                "Sleep",
                "Disha"
            ],
            correctAnswer: 3, // Index of correct answer (Disha)
            encouragement: "Look at you knowing universal truths.Iam so Proud  💫"
        },
        {
            id: 3,
            question: "What makes Disha special?",
            type: "mcq",
            options: [
                "Her smile",
                "Her heart",
                "The way she exists",
                "All of the above"
            ],
            correctAnswer: 3, // Index of correct answer (All of the above)
            encouragement: "Aren't you a little too awesome "
        },
        {
            id: 4,
            question: "Is Disha Abhinand's life?",
            type: "yesno",
            options: ["Yes", "No"],
            correctAnswer: 0, // Index of correct answer (Yes)
            encouragement: "That was easy, wasn't it. I knew u would ace it  💗"
        },
        {
            id: 5,
            question: "Who is the most loved and most beautiful girl in the universe?",
            type: "mcq",
            options: [
                "Couldn't find a worthy comparison",
                "No one even comes close",
                "The universe stopped proving alternatives",
                "Disha Rasalkar"
            ],
            correctAnswer: 3, // Index of correct answer (Disha Rasalkar)
            encouragement: "Correct again. This girl might actually win the price  👑"
        },
        {
            id: 6,
            question: "Is this quiz just an excuse for Abhinand to say 'I love you'?",
            type: "yesno",
            options: ["Yes", "No"],
            correctAnswer: 0, // Index of correct answer (Yes)
            encouragement: "Caught Me red handed. Baby I Love You 💌"
        }
    ]

    const handleAnswerSelect = (answerIndex) => {
        setSelectedAnswer(answerIndex)
    }

    const handleSubmitAnswer = () => {
        const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer

        if (isCorrect) {
            // Show confetti and correct feedback
            setShowConfetti(true)
            setShowCorrectFeedback(true)

            // Hide confetti after 3 seconds
            setTimeout(() => {
                setShowConfetti(false)
                setShowCorrectFeedback(false)

                // Move to next question or show final reward
                if (currentQuestion < questions.length - 1) {
                    setCurrentQuestion(prev => prev + 1)
                    setSelectedAnswer(null)
                } else {
                    // Final question - show result screen first
                    setShowResult(true)
                    // Then show reward image after 2 seconds
                    setTimeout(() => {
                        setShowRewardImage(true)
                    }, 2000)
                }
            }, 3000)
        } else {
            // Show incorrect feedback but don't advance
            setShowCorrectFeedback(false)
            // Reset selection after a moment
            setTimeout(() => {
                setSelectedAnswer(null)
            }, 1000)
        }
    }

    const resetQuiz = () => {
        setCurrentQuestion(0)
        setSelectedAnswer(null)
        setShowResult(false)
        setShowConfetti(false)
        setShowCorrectFeedback(false)
        setShowRewardImage(false)
    }

    return (
        <main className="min-h-screen bg-gradient-to-b from-rose-100 to-purple-100 flex items-center justify-center p-4 overflow-hidden">
            {/* Confetti */}
            {showConfetti && <Confetti />}

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

            <div className="relative z-10 w-full max-w-4xl mx-auto">
                <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl shadow-xl shadow-rose-100 p-8 border-2 border-rose-200">

                    {!showResult ? (
                        <>
                            {/* Quiz Header */}
                            <div className="text-center mb-8">
                                <motion.h1
                                    className="text-3xl md:text-4xl font-bold text-pink-600 mb-2"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                >
                                    Reasons I'm Obsessed With You Quiz
                                </motion.h1>
                                <div className="flex justify-center items-center gap-2 mb-4">
                                    <Sparkles className="w-5 h-5 text-yellow-500" />
                                    <p className="text-purple-700">Question {currentQuestion + 1} of {questions.length}</p>
                                    <Sparkles className="w-5 h-5 text-yellow-500" />
                                </div>

                                {/* Progress Bar */}
                                <div className="w-full bg-pink-200 rounded-full h-2 mb-4">
                                    <motion.div
                                        className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>
                            </div>

                            {/* Correct Answer Feedback */}
                            <AnimatePresence>
                                {showCorrectFeedback && (
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0, opacity: 0 }}
                                        className="fixed inset-0 flex items-center justify-center z-50"
                                    >
                                        <div className="bg-green-500 text-white p-8 rounded-2xl shadow-2xl text-center">
                                            <Check className="w-16 h-16 mx-auto mb-4" />
                                            <h2 className="text-3xl font-bold mb-2">Correct! 🎉</h2>
                                            <p className="text-xl">{questions[currentQuestion].encouragement}</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Question */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentQuestion}
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: -50, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="mb-8"
                                >
                                    <h2 className="text-xl md:text-2xl font-semibold text-purple-800 text-center mb-6">
                                        {questions[currentQuestion].question}
                                    </h2>

                                    {/* Answer Options */}
                                    <div className="grid gap-4">
                                        {questions[currentQuestion].options.map((option, index) => (
                                            <motion.button
                                                key={index}
                                                onClick={() => handleAnswerSelect(index)}
                                                className={`p-4 rounded-xl border-2 text-left transition-all duration-300 ${selectedAnswer === index
                                                    ? selectedAnswer === questions[currentQuestion].correctAnswer
                                                        ? 'border-green-400 bg-green-50 shadow-lg'
                                                        : 'border-red-400 bg-red-50 shadow-lg'
                                                    : 'border-pink-200 bg-white hover:border-pink-300 hover:bg-pink-50'
                                                    }`}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                disabled={selectedAnswer !== null}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedAnswer === index
                                                        ? selectedAnswer === questions[currentQuestion].correctAnswer
                                                            ? 'border-green-500 bg-green-500'
                                                            : 'border-red-500 bg-red-500'
                                                        : 'border-gray-300'
                                                        }`}>
                                                        {selectedAnswer === index && (
                                                            selectedAnswer === questions[currentQuestion].correctAnswer ? (
                                                                <Check className="w-4 h-4 text-white" />
                                                            ) : (
                                                                <X className="w-4 h-4 text-white" />
                                                            )
                                                        )}
                                                    </div>
                                                    <span className="text-purple-700 font-medium">{option}</span>
                                                </div>
                                            </motion.button>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Submit Button */}
                            {selectedAnswer !== null && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center"
                                >
                                    <button
                                        onClick={handleSubmitAnswer}
                                        className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        {selectedAnswer === questions[currentQuestion].correctAnswer ? 'Continue' : 'Try Again'}
                                    </button>
                                </motion.div>
                            )}
                        </>
                    ) : (
                        /* Result Screen */
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <Crown className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                            <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-6">
                                Quiz Complete!
                            </h1>

                            {/* Show reward image after 2 seconds, or show completion message */}
                            {!showRewardImage ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center"
                                >
                                    <motion.p
                                        className="text-lg text-purple-700 mb-6"
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        Preparing your special reward... 💕
                                    </motion.p>
                                </motion.div>
                            ) : (
                                /* Reward Image */
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.8, type: "spring" }}
                                    className="mb-6"
                                >
                                    <div className="bg-gradient-to-r from-pink-200 to-purple-200 rounded-2xl p-6">
                                        <h3 className="text-2xl font-bold text-purple-700 mb-4 text-center">
                                            Your Special Reward 🎁
                                        </h3>
                                        <div className="flex justify-center">
                                            <motion.img
                                                src="/reward-image.jpg"
                                                alt="Special reward for completing the quiz"
                                                className="rounded-xl shadow-2xl max-w-md w-full h-auto"
                                                whileHover={{ scale: 1.02 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </div>
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.5 }}
                                            className="text-center text-purple-700 mt-4 text-lg"
                                        >
                                            You're absolutely perfect! �
                                        </motion.p>
                                    </div>
                                </motion.div>
                            )}

                            <div className="flex gap-4 justify-center">
                                <button
                                    onClick={resetQuiz}
                                    className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    Take Quiz Again
                                </button>
                                <button
                                    onClick={() => router.back()}
                                    className="bg-white text-purple-700 border-2 border-purple-300 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300"
                                >
                                    Back to Menu
                                </button>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </main>
    )
}