'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpDown, Copy, RotateCcw, Shuffle, Type, FileText, Lock, Sparkles } from 'lucide-react';

function caesarCipher(text: string, shift: number, encode: boolean = true): string {
  const actualShift = encode ? shift : -shift;
  
  return text.split('').map(char => {
    if (char.match(/[a-z]/i)) {
      const isUpperCase = char === char.toUpperCase();
      const charCode = char.toLowerCase().charCodeAt(0);
      const shifted = ((charCode - 97 + actualShift + 26) % 26) + 97;
      const result = String.fromCharCode(shifted);
      return isUpperCase ? result.toUpperCase() : result;
    }
    return char;
  }).join('');
}

export default function CaesarCipherPage() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [shift, setShift] = useState(3);
  const [isEncoding, setIsEncoding] = useState(true);

  // Real-time processing
  useEffect(() => {
    if (inputText) {
      setOutputText(caesarCipher(inputText, shift, isEncoding));
    } else {
      setOutputText('');
    }
  }, [inputText, shift, isEncoding]);

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
    setShift(3);
  };

  const handleRandomShift = () => {
    setShift(Math.floor(Math.random() * 25) + 1);
  };

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const shiftedAlphabet = alphabet.split('').map((_, i) => 
    String.fromCharCode(((i + shift) % 26) + 65)
  ).join('');

  return (
    <div className="min-h-screen relative">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-red-900/20 via-purple-900/20 to-blue-900/20" />
      
      {/* Floating Orbs */}
      <div className="fixed top-32 right-20 w-40 h-40 bg-gradient-to-r from-red-400/30 to-pink-500/30 rounded-full blur-xl animate-float" />
      <div className="fixed bottom-20 left-32 w-28 h-28 bg-gradient-to-r from-purple-400/30 to-blue-500/30 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }} />
      
      {/* Grid Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <Type size={96} className="mx-auto text-red-400 animate-bounce" />
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Caesar Cipher
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The classic encryption method used by Julius Caesar himself! Shift letters by any amount to create secret messages.
          </p>
        </div>

        <div className="space-y-8">
          {/* Controls */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <Button
                  onClick={handleSwapMode}
                  variant="outline"
                  className="gap-2 text-lg px-6 py-3 border-red-500/30 hover:border-red-400/50 bg-gradient-to-r from-red-500/10 to-pink-500/10 hover:from-red-500/20 hover:to-pink-500/20"
                >
                  <ArrowUpDown className="w-5 h-5" />
                  {isEncoding ? 'Switch to Decode' : 'Switch to Encode'}
                </Button>
                
                <div className="flex items-center gap-3">
                  <label className="text-lg font-medium text-gray-300 whitespace-nowrap flex items-center gap-2">
                    <RotateCcw size={20} />
                    Shift Amount:
                  </label>
                  <Input
                    type="number"
                    value={shift}
                    onChange={(e) => setShift(Math.max(0, Math.min(25, parseInt(e.target.value) || 0)))}
                    className="w-24 text-center text-lg"
                    min="0"
                    max="25"
                  />
                  <Button
                    onClick={handleRandomShift}
                    variant="outline"
                    size="sm"
                    className="px-3 hover:bg-white/10"
                  >
                    <Shuffle className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <FileText size={24} />
                  {isEncoding ? 'Original Text' : 'Encoded Text'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={isEncoding ? 'Enter your message to encrypt...' : 'Enter encrypted text to decode...'}
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
                    <Lock size={24} />
                    {isEncoding ? 'Encrypted Text' : 'Decrypted Text'}
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
                  placeholder={isEncoding ? 'Encrypted text will appear here...' : 'Decrypted text will appear here...'}
                  className="min-h-[200px] text-lg bg-black/20 resize-none"
                  rows={8}
                />
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            <Button
              onClick={handleReset}
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg border-white/20 hover:border-white/30 hover:bg-white/10 transition-all duration-300"
            >
              <RotateCcw className="w-5 h-5 mr-2" />
              Reset
            </Button>
          </div>

          {/* Alphabet Visualization */}
          <Card className="bg-gradient-to-r from-red-500/10 via-pink-500/10 to-purple-500/10 border-red-500/20 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Type size={28} />
                Alphabet Shift Visualization
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="text-center">
                  <p className="text-sm text-gray-400 mb-2">Original Alphabet</p>
                  <div className="font-mono text-lg tracking-wider bg-white/10 p-4 rounded-xl">
                    {alphabet}
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-gray-400 mb-2">Shifted by {shift} positions</p>
                  <div className="font-mono text-lg tracking-wider bg-gradient-to-r from-red-500/20 to-pink-500/20 p-4 rounded-xl border border-red-500/30">
                    {shiftedAlphabet}
                  </div>
                </div>
              </div>
              
              <div className="text-center text-gray-300">
                <p className="text-lg flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Each letter shifts <strong>{shift}</strong> positions forward in the alphabet
                </p>
                <p className="text-sm mt-2 opacity-75">
                  Example: A → {String.fromCharCode(((0 + shift) % 26) + 65)} | 
                  B → {String.fromCharCode(((1 + shift) % 26) + 65)} | 
                  C → {String.fromCharCode(((2 + shift) % 26) + 65)}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}