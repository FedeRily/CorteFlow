import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

export default function GeminiChatbot({ apiKey }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: '¡Hola! ¿Qué resultado buscás hoy? (Ej: quiero un cambio de look, solo emparejar, algo relajante...)' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    if (!apiKey) {
      setMessages(prev => [...prev, { role: 'bot', text: 'Por favor, configura tu API Key de Gemini en la parte superior para que pueda ayudarte.' }]);
      setIsLoading(false);
      return;
    }

    try {
      const ai = new GoogleGenAI({ apiKey: apiKey });
      const prompt = `Sos un asistente virtual de una peluquería moderna llamada ServiceFlow. 
Tenemos 3 servicios:
1. Corte Clásico (ARS 8000)
2. Barba y Pelo (ARS 12000)
3. Tratamiento Premium (ARS 18000)

El cliente dijo: "${userMessage}"

Respondé de manera amable, persuasiva y concisa (máximo 3 oraciones). Recomendá cuál de los tres servicios le conviene más basándote en lo que busca.`;

      const response = await ai.models.generateContent({
        model: 'gemini-1.5-flash',
        contents: prompt,
      });

      setMessages(prev => [...prev, { role: 'bot', text: response.text }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', text: 'Hubo un error al conectar con Gemini. Verifica tu API Key.' }]);
    } finally {
      setIsLoading(false);
    }
  };

}
