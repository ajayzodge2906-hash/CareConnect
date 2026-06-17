import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User as UserIcon } from 'lucide-react';

const FAQS = [
  {
    q: "How do I request support?",
    a: "Complete the support request form and submit your healthcare concern. Our team will review your request."
  },
  {
    q: "How soon will someone contact me?",
    a: "Response times may vary, but support requests are reviewed as quickly as possible."
  },
  {
    q: "What types of support are available?",
    a: "We provide medication help, appointment support, mental health support, and general health guidance."
  },
  {
    q: "Do I need to create an account?",
    a: "No. CareConnect allows you to submit support requests without creating an account."
  },
  {
    q: "Can I request help for a family member?",
    a: "Yes. You may submit a request on behalf of a family member and include relevant details."
  },
  {
    q: "How can I reschedule an appointment?",
    a: "Select 'Appointment Support' in the form and provide details about the missed appointment."
  },
  {
    q: "What is mental health support?",
    a: "Mental health support helps individuals experiencing stress, anxiety, emotional concerns, or other well-being challenges."
  },
  {
    q: "What happens after I submit a request?",
    a: "Your request is recorded and analyzed to help volunteers quickly understand your needs."
  },
  {
    q: "Who reviews the support requests?",
    a: "Healthcare volunteers or NGO coordinators may review requests and provide appropriate guidance."
  },
  {
    q: "What if I have a medical emergency?",
    a: "If you are experiencing a medical emergency, contact emergency services or seek immediate medical attention immediately."
  }
];

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! I am your CareConnect Assistant. How can I help you today? You can select an FAQ below or type a question."
    }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    const newMessages = [...messages, { sender: 'user', text }];
    setMessages(newMessages);
    setInputText('');

    setTimeout(() => {
      const response = getBotResponse(text);
      setMessages((prev) => [...prev, { sender: 'bot', text: response }]);
    }, 600);
  };

  const getBotResponse = (query) => {
    const cleanQuery = query.toLowerCase().trim();

    const directMatch = FAQS.find(faq => faq.q.toLowerCase().includes(cleanQuery) || cleanQuery.includes(faq.q.toLowerCase()));
    if (directMatch) return directMatch.a;

    if (cleanQuery.includes("emergency") || cleanQuery.includes("accident") || cleanQuery.includes("immediate")) {
      return FAQS[9].a;
    }
    if (cleanQuery.includes("account") || cleanQuery.includes("login") || cleanQuery.includes("register")) {
      return FAQS[3].a;
    }
    if (cleanQuery.includes("family") || cleanQuery.includes("member") || cleanQuery.includes("relative") || cleanQuery.includes("child")) {
      return FAQS[4].a;
    }
    if (cleanQuery.includes("reschedule") || cleanQuery.includes("appointment") || cleanQuery.includes("booking")) {
      return FAQS[5].a;
    }
    if (cleanQuery.includes("soon") || cleanQuery.includes("time") || cleanQuery.includes("contact me") || cleanQuery.includes("when")) {
      return FAQS[1].a;
    }
    if (cleanQuery.includes("who reviews") || cleanQuery.includes("volunteer") || cleanQuery.includes("coordinator")) {
      return FAQS[8].a;
    }
    if (cleanQuery.includes("happen") || cleanQuery.includes("submit")) {
      return FAQS[7].a;
    }
    if (cleanQuery.includes("type") || cleanQuery.includes("available") || cleanQuery.includes("what support")) {
      return FAQS[2].a;
    }
    if (cleanQuery.includes("request") || cleanQuery.includes("how do i")) {
      return FAQS[0].a;
    }
    if (cleanQuery.includes("mental") || cleanQuery.includes("anxi") || cleanQuery.includes("stress") || cleanQuery.includes("depress")) {
      return FAQS[6].a;
    }

    return "Sorry, I don't have an answer for that question. Please submit a support request for assistance.";
  };

  return (
    <div className="fixed bottom-6 right-6 z-55 flex flex-col items-end font-sans">
      
      {isOpen && (
        <div className="mb-4 flex h-[460px] w-80 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl transition-all duration-300 sm:w-96 max-w-[90vw]">
          
          <div className="flex items-center justify-between bg-primary-600 px-4 py-3.5 text-white">
            <div className="flex items-center space-x-2">
              <Bot className="h-5 w-5" />
              <div>
                <h3 className="text-sm font-bold">CareConnect Assistant</h3>
                <span className="text-[10px] text-primary-100 font-medium">FAQ & Support Guide</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 text-primary-100 hover:bg-primary-700/50 hover:text-white transition-colors"
            >
              <X className="h-4.5 w-4.5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto bg-slate-50 p-4 space-y-3.5">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex items-start space-x-2.5 ${msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}
              >
                <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white shadow-sm ${
                  msg.sender === 'user' ? 'bg-primary-600' : 'bg-teal-500'
                }`}>
                  {msg.sender === 'user' ? <UserIcon className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                </div>
                
                <div className={`rounded-2xl px-3.5 py-2 text-xs font-medium leading-relaxed max-w-[78%] shadow-sm ${
                  msg.sender === 'user' 
                    ? 'bg-primary-600 text-white rounded-tr-none' 
                    : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-slate-100 bg-white p-2 flex flex-col space-y-1.5 shrink-0 max-h-32 overflow-y-auto">
            <span className="text-[10px] font-bold text-slate-400 px-2 uppercase tracking-wide">FAQ Suggestions</span>
            <div className="flex flex-wrap gap-1 px-1.5 pb-1">
              {FAQS.map((faq, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(faq.q)}
                  className="rounded-full border border-primary-200 bg-primary-50/50 px-2.5 py-1 text-[10px] font-semibold text-primary-755 hover:bg-primary-100 hover:border-primary-300 transition-colors"
                >
                  {faq.q}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-150 bg-white p-3 shrink-0">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputText);
              }}
              className="flex items-center space-x-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask a question..."
                className="flex-grow rounded-lg border border-slate-350 px-3 py-1.5 text-xs font-medium text-slate-855 shadow-inner focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="rounded-lg bg-primary-600 p-2 text-white shadow hover:bg-primary-500 transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg hover:bg-primary-500 hover:scale-105 transition-all duration-250 cursor-pointer active:scale-95 focus:outline-none"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>

    </div>
  );
}
