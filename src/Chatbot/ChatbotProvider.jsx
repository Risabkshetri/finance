import React from 'react'
import axios from 'axios'
import conf from '../conf/Conf'
import { useState, useRef, useEffect } from 'react';
import { set } from 'react-hook-form';
import { FaPaperPlane } from 'react-icons/fa'
import ReactMarkdown from 'react-markdown'; 

function ChatbotProvider() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef(null);

  async function generateAnswer(){
    setIsTyping(true);
    const response = await axios({
      url: conf.geminiApiEndPoint,
      method: 'post',
      data: {
        contents:[
          {parts:[{text:question}]}
        ]
      }
    })
    const newAnswer = response['data']['candidates'][0]['content']['parts'][0]['text'];
    typeAnswer(newAnswer);
    setChatHistory([...chatHistory, { question, answer: newAnswer }]);
    setQuestion('');
  }

  function typeAnswer(text) {
    let i = 0;
    setAnswer('');
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setAnswer(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 1); 
  }

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory, answer]);

  return (
    <div className="flex flex-col h-auto bg-gray-100">
      <div className="flex-1 overflow-hidden">
        <div ref={chatContainerRef} className="h-full overflow-y-auto p-4 space-y-4">
          {chatHistory.map((chat, index) => (
            <div key={index}>
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-700 font-bold">U</span>
                </div>
                <div className="ml-3 bg-white p-3 rounded-lg shadow">
                  <p className="text-gray-800">{chat.question}</p>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <div className="ml-3 bg-slate-200 p-3 rounded-lg shadow-md shadow-black">
                  {!isTyping && 
                    <ReactMarkdown className="text-gray-800 prose">
                    {chat.answer}
                  </ReactMarkdown>
                  }
                
                 
                </div>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex items-start mb-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <div className="ml-3 bg-slate-200 p-3 rounded-lg shadow-md shadow-black">
              <ReactMarkdown className="text-gray-800 prose">
                  {answer}
                </ReactMarkdown>
              </div>
            </div>
          )}

        </div>
      </div>
      <div className="bg-slate-600  fixed bottom-0 md:w-[80%] w-full py-4 px-8 border-t border-gray-200 rounded-t-xl shadow-xl shadow-black ">
        <div className="flex space-x-4 ">
          <textarea 
            value={question} 
            placeholder='Enter your question' 
            onChange={(e) => setQuestion(e.target.value)} 
            className="flex-1 border shadow-xl  border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black-500"
            rows={1}
          ></textarea>
          <button 
            onClick={generateAnswer}
            className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isTyping}
          >
            <FaPaperPlane className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatbotProvider