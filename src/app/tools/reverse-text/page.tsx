'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RotateCcw, FlipVertical, Type, Copy, ArrowLeftRight, ArrowUpDown } from 'lucide-react';

const upsideDownMap: { [key: string]: string } = {
  'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ',
  'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd',
  'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x',
  'y': 'ʎ', 'z': 'z', 'A': '∀', 'B': 'ᗺ', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'ᖴ',
  'G': 'פ', 'H': 'H', 'I': 'I', 'J': 'ſ', 'K': 'ʞ', 'L': '˥', 'M': 'W', 'N': 'N',
  'O': 'O', 'P': 'Ԁ', 'Q': 'Q', 'R': 'ᴿ', 'S': 'S', 'T': '┴', 'U': '∩', 'V': 'Λ',
  'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z', '0': '0', '1': 'Ɩ', '2': 'ᄅ', '3': 'Ɛ',
  '4': 'ㄣ', '5': 'ϛ', '6': '9', '7': 'ㄥ', '8': '8', '9': '6', '.': '˙', ',': "'",
  '?': '¿', '!': '¡', "'": ',', '"': '„', '(': ')', ')': '(', '[': ']', ']': '[',
  '{': '}', '}': '{', '<': '>', '>': '<', '&': '⅋', '_': '‾', ' ': ' '
};

function reverseText(text: string): string {
  return text.split('').reverse().join('');
}

function flipTextUpsideDown(text: string): string {
  return text.split('').map(char => upsideDownMap[char] || char).reverse().join('');
}

function reverseWords(text: string): string {
  return text.split(' ').reverse().join(' ');
}

function reverseLines(text: string): string {
  return text.split('\n').reverse().join('\n');
}

export default function ReverseTextPage() {
  const [inputText, setInputText] = useState('');

  const handleCopy = async (text: string) => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    }
  };

  const handleReset = () => {
    setInputText('');
  };

  const transformations = [
    {
      name: 'Reverse Characters',
      icon: ArrowLeftRight,
      result: reverseText(inputText),
      description: 'Reverse the order of all characters',
      color: 'from-blue-500 to-purple-500'
    },
    {
      name: 'Upside Down Text',
      icon: FlipVertical,
      result: flipTextUpsideDown(inputText),
      description: 'Flip text upside down with special Unicode characters',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Reverse Words',
      icon: Type,
      result: reverseWords(inputText),
      description: 'Reverse the order of words',
      color: 'from-green-500 to-teal-500'
    },
    {
      name: 'Reverse Lines',
      icon: ArrowUpDown,
      result: reverseLines(inputText),
      description: 'Reverse the order of lines',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-purple-900/20" />
      
      {/* Floating Orbs */}
      <div className="fixed top-32 right-20 w-40 h-40 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full blur-xl animate-float" />
      <div className="fixed bottom-20 left-32 w-28 h-28 bg-gradient-to-r from-purple-400/30 to-pink-500/30 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }} />
      
      {/* Grid Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <RotateCcw size={96} className="mx-auto text-cyan-400 animate-bounce" />
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Text Flipper
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transform your text in magical ways! Reverse characters, flip upside down, or rearrange words and lines.
          </p>
        </div>

        <div className="space-y-8">
          {/* Input */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Type size={24} />
                Your Text
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter your text here to see all the magical transformations..."
                className="min-h-[150px] text-lg resize-none"
                rows={6}
              />
            </CardContent>
          </Card>

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

          {/* Transformations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {transformations.map((transformation, index) => (
              <Card key={transformation.name} className="bg-white/5 border-white/10 backdrop-blur-lg">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2 justify-between">
                    <span className="flex items-center gap-2">
                      <transformation.icon size={20} />
                      {transformation.name}
                    </span>
                    {transformation.result && (
                      <Button
                        onClick={() => handleCopy(transformation.result)}
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
                  <p className="text-sm text-gray-400 mb-3">{transformation.description}</p>
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${transformation.color} bg-opacity-10 border border-white/10`}>
                    <div className="text-lg font-mono break-all">
                      {transformation.result || (
                        <span className="text-gray-500 italic">
                          Transformed text will appear here...
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Examples Section */}
          <Card className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-indigo-500/20 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <FlipVertical size={28} />
                Fun Examples
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-indigo-300">Try These Examples:</h4>
                  {[
                    'Hello World!',
                    'This is amazing',
                    'Reverse me please',
                    'Upside down text'
                  ].map((example, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      onClick={() => setInputText(example)}
                      className="justify-start h-auto p-4 text-left border border-white/10 hover:bg-white/5 w-full"
                    >
                      <div className="w-full">
                        <div className="text-sm font-medium">{example}</div>
                        <div className="text-xs text-gray-400 mt-1">
                          {flipTextUpsideDown(example)}
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-indigo-300">Perfect For:</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      Social media posts
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      Fun messages to friends
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      Creative writing
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      Puzzles and games
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      Stand out in comments
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Unicode Information */}
          <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/20 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Type size={28} />
                How Upside Down Text Works
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-300">
                  Upside down text uses special Unicode characters that look like upside-down versions of regular letters. 
                  Here are some examples:
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { normal: 'A', upside: '∀' },
                    { normal: 'B', upside: 'ᗺ' },
                    { normal: 'C', upside: 'Ɔ' },
                    { normal: 'D', upside: 'ᗡ' },
                    { normal: 'E', upside: 'Ǝ' },
                    { normal: 'F', upside: 'ᖴ' },
                    { normal: 'hello', upside: 'ollǝɥ' },
                    { normal: 'world', upside: 'plɹoʍ' }
                  ].map((pair, index) => (
                    <div key={index} className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-lg font-bold text-green-300">{pair.normal}</div>
                      <div className="text-sm text-gray-400">
                        <ArrowUpDown size={16} className="mx-auto" />
                      </div>
                      <div className="text-lg font-bold text-blue-300">{pair.upside}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
