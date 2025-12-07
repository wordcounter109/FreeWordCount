import React, { useState, useEffect } from 'react';
import { AlignLeft, Type, Hash, FileText, Clock, Volume2, Trash2, Copy } from 'lucide-react';

const WordCounter: React.FC = () => {
  const [text, setText] = useState("");
  const [stats, setStats] = useState({
    words: 0,
    chars: 0,
    charsNoSpaces: 0,
    paragraphs: 0,
    sentences: 0,
    readingTime: '0 sec',
    speakingTime: '0 sec',
  });

  useEffect(() => {
    const trimmedText = text.trim();
    const wordsArray = trimmedText === '' ? [] : text.trim().split(/\s+/);
    const words = wordsArray.length;
    const chars = text.length;
    const charsNoSpaces = text.replace(/\s/g, '').length;
    const paragraphs = trimmedText === '' ? 0 : text.split(/\n+/).filter(p => p.trim().length > 0).length;
    const sentences = trimmedText === '' ? 0 : text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    
    // Reading time: avg 200 words per min
    const readTimeSeconds = Math.ceil((words / 200) * 60);
    const readTimeDisplay = readTimeSeconds < 60 ? `${readTimeSeconds} sec` : `${Math.ceil(words / 200)} min`;

    // Speaking time: avg 130 words per min
    const speakTimeSeconds = Math.ceil((words / 130) * 60);
    const speakTimeDisplay = speakTimeSeconds < 60 ? `${speakTimeSeconds} sec` : `${Math.ceil(words / 130)} min`;

    setStats({
      words,
      chars,
      charsNoSpaces,
      paragraphs,
      sentences,
      readingTime: readTimeDisplay,
      speakingTime: speakTimeDisplay
    });
  }, [text]);

  const handleClear = () => setText("");
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
  };

  return (
    <div className="relative z-10 w-full max-w-4xl mx-auto -mt-10 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 fade-in-up">
      {/* Top Stats Bar */}
      <div className="bg-brand-primary/10 p-6 border-b border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-2 rounded-lg bg-white shadow-sm border border-gray-100 transition-transform hover:scale-105">
          <span className="block text-3xl font-bold text-gray-800">{stats.words}</span>
          <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Words</span>
        </div>
        <div className="text-center p-2 rounded-lg bg-white shadow-sm border border-gray-100 transition-transform hover:scale-105">
          <span className="block text-3xl font-bold text-gray-800">{stats.chars}</span>
          <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Characters</span>
        </div>
        <div className="text-center p-2 rounded-lg bg-white shadow-sm border border-gray-100 transition-transform hover:scale-105">
          <span className="block text-3xl font-bold text-gray-800">{stats.sentences}</span>
          <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Sentences</span>
        </div>
        <div className="text-center p-2 rounded-lg bg-white shadow-sm border border-gray-100 transition-transform hover:scale-105">
          <span className="block text-3xl font-bold text-gray-800">{stats.paragraphs}</span>
          <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Paragraphs</span>
        </div>
      </div>

      {/* Input Area */}
      <div className="p-6 relative">
        <textarea
          className="w-full h-80 p-4 text-lg text-gray-700 placeholder-gray-400 border-2 border-dashed border-gray-300 rounded-lg focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all resize-y"
          placeholder="Start typing or paste your text here to count words..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        
        <div className="flex justify-end gap-3 mt-4">
          <button 
            onClick={handleCopy}
            disabled={!text}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 font-medium"
          >
            <Copy size={18} /> Copy Text
          </button>
          <button 
            onClick={handleClear}
            disabled={!text}
            className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors disabled:opacity-50 font-medium"
          >
            <Trash2 size={18} /> Clear
          </button>
        </div>
      </div>

      {/* Detailed Stats */}
      <div className="bg-gray-50 p-6 border-t border-gray-100">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wide mb-4">Detailed Statistics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatDetail icon={<AlignLeft size={18}/>} label="Chars (no spaces)" value={stats.charsNoSpaces} />
          <StatDetail icon={<Clock size={18}/>} label="Reading Time" value={stats.readingTime} />
          <StatDetail icon={<Volume2 size={18}/>} label="Speaking Time" value={stats.speakingTime} />
          <StatDetail icon={<FileText size={18}/>} label="Reading Level" value="N/A" sub="(Coming Soon)" /> 
        </div>
      </div>
    </div>
  );
};

const StatDetail: React.FC<{icon: React.ReactNode, label: string, value: string | number, sub?: string}> = ({ icon, label, value, sub }) => (
  <div className="flex items-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm">
    <div className="text-brand-primary bg-gray-900 p-2 rounded-md mr-3">
      {icon}
    </div>
    <div>
      <div className="text-xs text-gray-500">{label}</div>
      <div className="font-bold text-gray-800">{value} {sub && <span className="text-xs font-normal text-gray-400">{sub}</span>}</div>
    </div>
  </div>
);

export default WordCounter;
