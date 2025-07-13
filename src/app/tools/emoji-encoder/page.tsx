'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpDown, Copy, RotateCcw, Smile, FileText, Lock } from 'lucide-react';

const defaultEmojiMapping: { [key: string]: string } = {
  'a': '🐶', 'b': '🍕', 'c': '🎸', 'd': '🌟', 'e': '🎭',
  'f': '🦋', 'g': '🎯', 'h': '🎪', 'i': '🎨', 'j': '🎺',
  'k': '🎮', 'l': '🎲', 'm': '🎳', 'n': '🎹', 'o': '🎻',
  'p': '🥊', 'q': '🎪', 'r': '🚀', 's': '🌈', 't': '🌺',
  'u': '🌸', 'v': '🌻', 'w': '🌼', 'x': '🌷', 'y': '🌹',
  'z': '🌾', ' ': '⭐', '!': '❗', '?': '❓', '.': '🔵',
  ',': '🟡', ';': '🟠', ':': '🔴', '-': '➖', '_': '〰️'
};

function encodeWithEmojis(text: string, mapping: { [key: string]: string }): string {
  return text.toLowerCase().split('').map(char => mapping[char] || char).join('');
}

function decodeFromEmojis(emojiText: string, mapping: { [key: string]: string }): string {
  const reverseMapping = Object.fromEntries(
    Object.entries(mapping).map(([char, emoji]) => [emoji, char])
  );
  
  const emojiArray = emojiText.match(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{1F900}-\u{1F9FF}]|[\u{1FA70}-\u{1FAFF}]|[⭐❗❓🔵🟡🟠🔴➖〰️]/gu) || [];
  
  return emojiArray.map(emoji => reverseMapping[emoji] || emoji).join('');
}

export default function EmojiEncoderPage() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isEncoding, setIsEncoding] = useState(true);

  const handleProcess = () => {
    if (isEncoding) {
      setOutputText(encodeWithEmojis(inputText, defaultEmojiMapping));
    } else {
      setOutputText(decodeFromEmojis(inputText, defaultEmojiMapping));
    }
  };

  const handleSwapMode = () => {
    setIsEncoding(!isEncoding);
    setInputText(outputText);
    setOutputText(inputText);
  };

  const handleCopy = async () => {
    if (outputText && navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(outputText);
    }
  };

  const handleReset = () => {
    setInputText('');
    setOutputText('');
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20" />
      
      {/* Floating Orbs */}
      <div className="fixed top-20 left-20 w-32 h-32 bg-gradient-to-r from-yellow-400/30 to-orange-500/30 rounded-full blur-xl animate-float" />
      <div className="fixed top-40 right-32 w-24 h-24 bg-gradient-to-r from-pink-400/30 to-purple-500/30 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="fixed bottom-32 left-1/4 w-20 h-20 bg-gradient-to-r from-blue-400/30 to-cyan-500/30 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />
      
      {/* Grid Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <Smile size={96} className="mx-auto text-yellow-400 animate-bounce" />
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
            Emoji Encoder/Decoder
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transform your text into a secret emoji language! Each letter becomes a unique emoji, creating fun and mysterious messages.
          </p>
        </div>

        <div className="space-y-8">
          {/* Mode Toggle */}
          <div className="flex items-center justify-center">
            <Button
              onClick={handleSwapMode}
              variant="outline"
              className="gap-2 text-lg px-8 py-6 border-yellow-500/30 hover:border-yellow-400/50 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 hover:from-yellow-500/20 hover:to-orange-500/20 transition-all duration-300"
            >
              <ArrowUpDown className="w-5 h-5" />
              Switch to {isEncoding ? 'Decode' : 'Encode'} Mode
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <FileText size={24} />
                  {isEncoding ? 'Text to Encode' : 'Emojis to Decode'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={isEncoding ? 'Enter your secret message here...' : 'Paste emoji text here...'}
                  className="min-h-[200px] text-lg resize-none"
                  rows={8}
                />
              </CardContent>
            </Card>

            {/* Output */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2 justify-between">
                  <span className="flex items-center gap-2">
                    <Smile size={24} />
                    {isEncoding ? 'Encoded Emojis' : 'Decoded Text'}
                  </span>
                  {outputText && (
                    <Button
                      onClick={handleCopy}
                      variant="ghost"
                      size="sm"
                      className="hover:bg-white/10"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={outputText}
                  readOnly
                  placeholder={isEncoding ? 'Encoded emojis will appear here...' : 'Decoded text will appear here...'}
                  className="min-h-[200px] text-lg bg-black/20 resize-none"
                  rows={8}
                />
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            <Button
              onClick={handleProcess}
              disabled={!inputText.trim()}
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold px-12 py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105"
            >
              {isEncoding ? 'Encode to Emojis' : 'Decode from Emojis'}
            </Button>
            
            <Button
              onClick={handleReset}
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg border-white/20 hover:border-white/30 hover:bg-white/10 transition-all duration-300"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Reset
            </Button>
          </div>

          {/* Emoji Mapping Preview */}
          <Card className="bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-pink-500/10 border-yellow-500/20 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Smile size={28} />
                Emoji Mapping Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
                {Object.entries(defaultEmojiMapping).slice(0, 30).map(([char, emoji]) => (
                  <div key={char} className="flex flex-col items-center p-3 bg-white/10 rounded-xl border border-white/10 hover:bg-white/20 transition-all duration-300 group">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{emoji}</div>
                    <div className="text-sm text-gray-300 font-mono bg-black/30 px-2 py-1 rounded">{char === ' ' ? 'space' : char}</div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                <p className="text-gray-300 text-lg">
                  <Smile className="inline w-5 h-5 mr-2" />
                  <strong>{Object.keys(defaultEmojiMapping).length}</strong> characters supported with unique emoji mappings!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
