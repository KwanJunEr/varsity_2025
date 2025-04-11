"use client";

import { useState } from "react";

interface Message {
  text: string;
  sender: "user" | "other";
  agentId?: string;
}

export default function ChatArea() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Add user's message to the chat
    setMessages((prev) => [...prev, { text: newMessage, sender: "user" }]);
    setNewMessage("");
    setIsTyping(true);

    try {
      // Call the API
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: newMessage }),
      });

      const data = await response.json();
      setIsTyping(false);

      // Add AI's response to the chat with a random agent
      const agents = ["ai-agent-1", "ai-agent-2", "ai-agent-3"];
      const randomAgent = agents[Math.floor(Math.random() * agents.length)];
      setMessages((prev) => [
        ...prev,
        { text: data.reply, sender: "other", agentId: randomAgent },
      ]);
    } catch (error) {
      setIsTyping(false);
      console.error("Error fetching AI response:", error);
    }
  };

  return (
    <div className="w-full min-w-[420px] mx-auto border border-gray-300">
      <div className="p-4 border-b border-gray-300 bg-white">
        <h2 className="text-xl font-semibold text-center">Chat with Agents</h2>
      </div>
      <div className="h-[300px] overflow-y-auto bg-white">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 flex ${
              message.sender === "user"
                ? "justify-end"
                : "justify-start items-start gap-2"
            }`}
          >
            {message.sender === "other" && message.agentId && (
              <img
                src={`/${message.agentId}.png`}
                alt="AI Agent"
                className="w-8 h-8 rounded-full"
              />
            )}
            <span
              className={`inline-block p-2 rounded-lg max-w-[75%] break-words ${
                message.sender === "user"
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {message.text}
            </span>
          </div>
        ))}
        {isTyping && (
          <div className="p-2 text-left">
            <span className="inline-block p-2 rounded-lg bg-gray-200">
              <span className="flex gap-1">
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </span>
            </span>
          </div>
        )}
      </div>
      <form
        onSubmit={handleSend}
        className="border-t border-gray-300 p-4 bg-white"
      >
        <div className="flex gap-2">
          <input
            type="text"
            
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded mt-[40px]"
            placeholder="Type a message..."
          />
          <button
            type="submit"
            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 mt-[40px]"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
