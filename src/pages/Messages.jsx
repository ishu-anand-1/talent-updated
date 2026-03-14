import { motion } from "framer-motion";
import {
  Search,
  MoreVertical,
  Send,
  Paperclip,
  Smile,
  Phone,
  Video,
} from "lucide-react";

import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import { ScrollArea } from "../components/ui/scroll-area";

import { useState } from "react";

const conversations = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    lastMessage: "Thanks! I'll review the project details",
    timestamp: "2m ago",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    lastMessage: "When can we schedule a call?",
    timestamp: "15m ago",
    unread: 0,
    online: true,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
    lastMessage: "The design looks great!",
    timestamp: "1h ago",
    unread: 1,
    online: false,
  },
];

const initialMessages = [
  {
    id: 1,
    content: "Hi! I saw your profile and I'm really impressed with your portfolio.",
    timestamp: "10:30 AM",
    isMe: false,
  },
  {
    id: 2,
    content: "Thank you! I'd be happy to discuss potential collaboration.",
    timestamp: "10:32 AM",
    isMe: true,
  },
  {
    id: 3,
    content: "Great! We have a project that requires React and Node.js expertise.",
    timestamp: "10:33 AM",
    isMe: false,
  },
];

export function Messages() {
  const [selectedChat, setSelectedChat] = useState(conversations[0]);
  const [messages, setMessages] = useState(initialMessages);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now(),
      content: message,
      timestamp: "Now",
      isMe: true,
    };

    setMessages([...messages, newMessage]);
    setMessage("");
  };

  return (
    <div className="h-[calc(100vh-10rem)]">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="h-full">

        <Card className="bg-white/5 backdrop-blur-xl border-white/10 h-full overflow-hidden">

          <div className="grid grid-cols-12 h-full">

            {/* LEFT CONVERSATION LIST */}

            <div className="col-span-12 md:col-span-4 border-r border-white/10">

              <div className="p-4 border-b border-white/10">

                <div className="relative">

                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

                  <Input
                    placeholder="Search messages..."
                    className="pl-11 bg-white/5 border-white/10"
                  />

                </div>

              </div>

              <ScrollArea className="h-[calc(100%-5rem)]">

                {conversations.map((conv) => (

                  <div
                    key={conv.id}
                    onClick={() => setSelectedChat(conv)}
                    className={`p-4 border-b border-white/10 cursor-pointer transition-colors ${
                      selectedChat.id === conv.id
                        ? "bg-purple-500/20"
                        : "hover:bg-white/5"
                    }`}
                  >

                    <div className="flex items-start gap-3">

                      <div className="relative">

                        <Avatar>
                          <AvatarImage src={conv.avatar} />
                          <AvatarFallback>{conv.name[0]}</AvatarFallback>
                        </Avatar>

                        {conv.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full ring-2 ring-black" />
                        )}

                      </div>

                      <div className="flex-1 min-w-0">

                        <div className="flex items-center justify-between mb-1">

                          <p className="font-semibold truncate">{conv.name}</p>

                          <span className="text-xs text-gray-400">
                            {conv.timestamp}
                          </span>

                        </div>

                        <p className="text-sm text-gray-400 truncate">
                          {conv.lastMessage}
                        </p>

                      </div>

                      {conv.unread > 0 && (
                        <Badge className="bg-purple-500 text-white">
                          {conv.unread}
                        </Badge>
                      )}

                    </div>

                  </div>

                ))}

              </ScrollArea>

            </div>

            {/* RIGHT CHAT AREA */}

            <div className="col-span-12 md:col-span-8 flex flex-col">

              {/* CHAT HEADER */}

              <div className="p-4 border-b border-white/10 flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <Avatar>
                    <AvatarImage src={selectedChat.avatar} />
                    <AvatarFallback>{selectedChat.name[0]}</AvatarFallback>
                  </Avatar>

                  <div>
                    <p className="font-semibold">{selectedChat.name}</p>
                    <p className="text-xs text-gray-400">
                      {selectedChat.online ? "Online" : "Offline"}
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-2">

                  <Button variant="ghost" size="icon">
                    <Phone className="w-5 h-5" />
                  </Button>

                  <Button variant="ghost" size="icon">
                    <Video className="w-5 h-5" />
                  </Button>

                  <Button variant="ghost" size="icon">
                    <MoreVertical className="w-5 h-5" />
                  </Button>

                </div>

              </div>

              {/* MESSAGE LIST */}

              <ScrollArea className="flex-1 p-4">

                <div className="space-y-4">

                  {messages.map((msg) => (

                    <div
                      key={msg.id}
                      className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}
                    >

                      <div
                        className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                          msg.isMe
                            ? "bg-gradient-to-r from-purple-500 to-pink-500"
                            : "bg-white/10"
                        }`}
                      >

                        <p className="text-sm mb-1">{msg.content}</p>

                        <span className="text-xs opacity-70">
                          {msg.timestamp}
                        </span>

                      </div>

                    </div>

                  ))}

                </div>

              </ScrollArea>

              {/* MESSAGE INPUT */}

              <div className="p-4 border-t border-white/10">

                <div className="flex items-center gap-2">

                  <Button variant="ghost" size="icon">
                    <Paperclip className="w-5 h-5" />
                  </Button>

                  <Input
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1 bg-white/5 border-white/10"
                  />

                  <Button variant="ghost" size="icon">
                    <Smile className="w-5 h-5" />
                  </Button>

                  <Button
                    onClick={sendMessage}
                    size="icon"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  >

                    <Send className="w-5 h-5" />

                  </Button>

                </div>

              </div>

            </div>

          </div>

        </Card>

      </motion.div>
    </div>
  );
}