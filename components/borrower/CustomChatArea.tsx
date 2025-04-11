"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Loader2 } from "lucide-react"

interface Message {
  text: string
  sender: "user" | "system"
  agentId?: string
}

// Define conversation states
type ConversationState =
  | "initial"
  | "explanation"
  | "application_start"
  | "collecting_income"
  | "collecting_collateral"
  | "collecting_spending"
  | "generating_score"
  | "loan_application"
  | "processing_loans"

export default function SmartChatArea() {
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [conversationState, setConversationState] = useState<ConversationState>("initial")
  const [userInfo, setUserInfo] = useState({
    income: "",
    collateral: "",
    spending: "",
  })
  const [loanRequests, setLoanRequests] = useState<string[]>([])

  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Predefined responses
  const predefinedResponses: Record<string, { text: string; nextState: ConversationState }> = {
    "what is microloan?": {
      text: "Microloans are small, short-term loans typically provided to entrepreneurs and small businesses that may not have access to traditional banking services. They're designed to help individuals start or grow small businesses and are often used in developing economies to promote financial inclusion.\n\nKey features of microloans include:\n\n• Loan amounts are typically smaller than traditional loans (usually under $50,000)\n• Shorter repayment terms (often 6-36 months)\n• More accessible qualification requirements than traditional banks\n• Often come with business training and support\n• May use alternative credit scoring methods like reputation scores\n• Can help build credit history for future financing\n\nMicroloans have been instrumental in helping underserved communities access capital and create economic opportunities. Would you like to learn more or apply for a microloan?",
      nextState: "explanation",
    },
    "i want to apply for three microloans": {
      text: "Great! I'd be happy to help you apply for microloans. Instead of traditional credit scoring, we use a reputation scoring system that provides an alternative evaluation of your trustworthiness. To get started, I'll need some information from you. First, could you please tell me your monthly income?",
      nextState: "collecting_income",
    },
    "i want to apply for microloan": {
      text: "Great! I'd be happy to help you apply for microloans. Instead of traditional credit scoring, we use a reputation scoring system that provides an alternative evaluation of your trustworthiness. To get started, I'll need some information from you. First, could you please tell me your monthly income?",
      nextState: "collecting_income",
    },
  }

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Function to add a system message with typing effect
  const addSystemMessage = (text: string, delay = 500) => {
    setIsTyping(true)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text,
          sender: "system",
          agentId: "ai-agent-1",
        },
      ])
      setIsTyping(false)
    }, delay)
  }

  // Handle state transitions
  useEffect(() => {
    if (conversationState === "collecting_collateral") {
      addSystemMessage(
        "Do you have any assets that could serve as collateral? If yes, please describe them. If not, just type 'none'.",
      )
    } else if (conversationState === "collecting_spending") {
      addSystemMessage("What is your estimated monthly spending?")
    } else if (conversationState === "generating_score") {
      addSystemMessage("Thank you for providing this information. I'm calculating your reputation score now...")

      setTimeout(() => {
        addSystemMessage(
          "Based on the information you've provided, your initial reputation score is 80, which puts you at Level 1. This is a good starting point! You can improve your score by repaying microloans on time. You're now eligible to apply for three microloans. Please list the three loans you'd like to apply for, including purpose and amount for each.",
        )
        setConversationState("loan_application")
      }, 3000)
    } else if (conversationState === "processing_loans") {
      addSystemMessage(
        "Thank you for your loan requests. We're calculating risk scores for each loan. This may take a moment, please hang tight while we process your application...",
      )

      setTimeout(() => {
        const loanResponses = loanRequests
          .map(
            (loan, index) =>
              `Loan ${index + 1}: ${loan} - APPROVED with a risk score of ${Math.floor(Math.random() * 20) + 70}/100`,
          )
          .join("\n\n")

        addSystemMessage(
          `We've completed our assessment:\n\n${loanResponses}\n\nYou can accept these loans and begin the disbursement process. Remember, timely repayments will increase your reputation score for future loans.`,
        )
      }, 5000)
    }
  }, [conversationState])

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    // Add user's message to the chat
    const userMessageText = newMessage.trim()
    setMessages((prev) => [...prev, { text: userMessageText, sender: "user" }])
    setNewMessage("")

    // Check for predefined responses (case insensitive)
    const lowerCaseMessage = userMessageText.toLowerCase()
    const predefinedResponse = predefinedResponses[lowerCaseMessage]

    if (predefinedResponse) {
      addSystemMessage(predefinedResponse.text)
      setConversationState(predefinedResponse.nextState)
    } else {
      // Handle based on conversation state
      if (conversationState === "initial") {
        // For any initial message, provide a welcome and options
        addSystemMessage(
          "Welcome to MicroLoan Assistant! I can help you learn about microloans or assist with your application. Would you like to know 'What is microloan?' or 'I want to apply for microloan'?",
        )
      } else if (conversationState === "collecting_income") {
        setUserInfo((prev) => ({ ...prev, income: userMessageText }))
        setConversationState("collecting_collateral")
      } else if (conversationState === "collecting_collateral") {
        setUserInfo((prev) => ({ ...prev, collateral: userMessageText }))
        setConversationState("collecting_spending")
      } else if (conversationState === "collecting_spending") {
        setUserInfo((prev) => ({ ...prev, spending: userMessageText }))
        setConversationState("generating_score")
      } else if (conversationState === "loan_application") {
        // Assume the user is listing their loans
        setLoanRequests(userMessageText.split("\n").filter((loan) => loan.trim()))
        setConversationState("processing_loans")
      } else {
        // Default response for other states
        addSystemMessage(
          "I'm here to help with your microloan application. If you'd like to know more about microloans, ask 'What is microloan?' or say 'I want to apply for microloan' to get started.",
        )
      }
    }
  }

  return (
    <div className=" max-w-[1005px] mx-auto border border-gray-300 rounded-lg shadow-md overflow-hidden bg-white mt-10">
      <div className="p-4 border-b border-gray-300 bg-gradient-to-r from-blue-500 to-purple-600">
        <h2 className="text-xl font-semibold text-center text-white">MicroLoan Assistant</h2>
      </div>

      <div className="h-[400px] overflow-y-auto p-4 bg-gray-50">
        {messages.length === 0 && (
          <div className="text-center text-gray-500 mt-20">
            <p>Welcome to MicroLoan Assistant!</p>
            <p className="text-sm mt-2">Type anything to get started with your microloan journey.</p>
          </div>
        )}

        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 flex ${message.sender === "user" ? "justify-end" : "justify-start items-start gap-2"}`}
          >
            {message.sender === "system" && (
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                A
              </div>
            )}
            <div
              className={`p-3 rounded-lg max-w-[75%] ${
                message.sender === "user"
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-gray-200 text-gray-800 rounded-bl-none"
              }`}
            >
              <div className="whitespace-pre-line">{message.text}</div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-start gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
              A
            </div>
            <div className="p-3 rounded-lg bg-gray-200 text-gray-800 rounded-bl-none">
              <div className="flex gap-1 items-center">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="text-sm text-gray-500">Typing...</span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSend} className="border-t border-gray-300 p-4 bg-white">
        <div className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type a message..."
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isTyping}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

