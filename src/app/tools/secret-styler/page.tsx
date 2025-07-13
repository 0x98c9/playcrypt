'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wand2, Type, Sparkles, Copy, RotateCcw, Palette } from 'lucide-react';

interface UnicodeStyle {
  name: string;
  emoji: string;
  transform: (text: string) => string;
  example: string;
}

const unicodeStyles: UnicodeStyle[] = [
  {
    name: 'Bold',
    emoji: '𝐁',
    transform: (text: string) => text.replace(/[A-Za-z0-9]/g, char => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) return String.fromCharCode(code + 119743); // A-Z
      if (code >= 97 && code <= 122) return String.fromCharCode(code + 119737); // a-z
      if (code >= 48 && code <= 57) return String.fromCharCode(code + 120734); // 0-9
      return char;
    }),
    example: '𝐁𝐨𝐥𝐝 𝐓𝐞𝐱𝐭'
  },
  {
    name: 'Italic',
    emoji: '𝑰',
    transform: (text: string) => text.replace(/[A-Za-z]/g, char => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) return String.fromCharCode(code + 119795); // A-Z
      if (code >= 97 && code <= 122) return String.fromCharCode(code + 119789); // a-z
      return char;
    }),
    example: '𝐼𝑡𝑎𝑙𝑖𝑐 𝑇𝑒𝑥𝑡'
  },
  {
    name: 'Bold Italic',
    emoji: '𝑰',
    transform: (text: string) => text.replace(/[A-Za-z]/g, char => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) return String.fromCharCode(code + 119847); // A-Z
      if (code >= 97 && code <= 122) return String.fromCharCode(code + 119841); // a-z
      return char;
    }),
    example: '𝑩𝒐𝒍𝒅 𝑰𝒕𝒂𝒍𝒊𝒄'
  },
  {
    name: 'Script',
    emoji: '𝒮',
    transform: (text: string) => text.replace(/[A-Za-z]/g, char => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) return String.fromCharCode(code + 119899); // A-Z
      if (code >= 97 && code <= 122) return String.fromCharCode(code + 119893); // a-z
      return char;
    }),
    example: '𝒮𝒸𝓇𝒾𝓅𝓉 𝒯𝑒𝓍𝓉'
  },
  {
    name: 'Double Struck',
    emoji: '𝔻',
    transform: (text: string) => text.replace(/[A-Za-z0-9]/g, char => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) return String.fromCharCode(code + 120055); // A-Z
      if (code >= 97 && code <= 122) return String.fromCharCode(code + 120049); // a-z
      if (code >= 48 && code <= 57) return String.fromCharCode(code + 120744); // 0-9
      return char;
    }),
    example: '𝔻𝕠𝕦𝕓𝕝𝕖 𝕊𝕥𝕣𝕦𝕔𝕜'
  },
  {
    name: 'Monospace',
    emoji: '𝚃',
    transform: (text: string) => text.replace(/[A-Za-z0-9]/g, char => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) return String.fromCharCode(code + 120003); // A-Z
      if (code >= 97 && code <= 122) return String.fromCharCode(code + 119997); // a-z
      if (code >= 48 && code <= 57) return String.fromCharCode(code + 120744); // 0-9
      return char;
    }),
    example: '𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎'
  },
  {
    name: 'Sans Serif',
    emoji: '𝖠',
    transform: (text: string) => text.replace(/[A-Za-z0-9]/g, char => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) return String.fromCharCode(code + 120159); // A-Z
      if (code >= 97 && code <= 122) return String.fromCharCode(code + 120153); // a-z
      if (code >= 48 && code <= 57) return String.fromCharCode(code + 120744); // 0-9
      return char;
    }),
    example: '𝖲𝖺𝗇𝗌 𝖲𝖾𝗋𝗂𝖿'
  },
  {
    name: 'Fraktur',
    emoji: '𝔉',
    transform: (text: string) => text.replace(/[A-Za-z]/g, char => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) return String.fromCharCode(code + 120003); // A-Z
      if (code >= 97 && code <= 122) return String.fromCharCode(code + 119997); // a-z
      return char;
    }),
    example: '𝔉𝔯𝔞𝔨𝔱𝔲𝔯'
  }
];

const upsideDownMap: { [key: string]: string } = {
  'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ',
  'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd',
  'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x',
  'y': 'ʎ', 'z': 'z', '?': '¿', '!': '¡', '.': '˙', ',': "'", ' ': ' '
};

function flipTextUpsideDown(text: string): string {
  return text.toLowerCase().split('').map(char => upsideDownMap[char] || char).reverse().join('');
}

export default function SecretStylerPage() {
  const [inputText, setInputText] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<UnicodeStyle>(unicodeStyles[0]);

  const handleCopy = async (text: string) => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    }
  };

  const handleReset = () => {
    setInputText('');
  };

  const styledText = inputText ? selectedStyle.transform(inputText) : '';
  const upsideDownText = inputText ? flipTextUpsideDown(inputText) : '';

  return (
    <div className="min-h-screen relative">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20" />
      
      {/* Floating Orbs */}
      <div className="fixed top-32 right-20 w-40 h-40 bg-gradient-to-r from-purple-400/30 to-pink-500/30 rounded-full blur-xl animate-float" />
      <div className="fixed bottom-20 left-32 w-28 h-28 bg-gradient-to-r from-pink-400/30 to-purple-500/30 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }} />
      
      {/* Grid Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <Palette size={96} className="mx-auto text-purple-400 animate-bounce" />
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-600 bg-clip-text text-transparent">
            Secret Message Styler
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transform your text into magical Unicode fonts! Create eye-catching messages for social media with fancy text styles.
          </p>
        </div>

        <div className="space-y-8">
          {/* Input */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Type size={24} />
                Your Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Input
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your message here..."
                className="text-lg h-14 text-center"
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

          {/* Style Selection */}
          <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Wand2 size={28} />
                Choose Your Style
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {unicodeStyles.map((style, index) => (
                  <Button
                    key={index}
                    onClick={() => setSelectedStyle(style)}
                    variant={selectedStyle.name === style.name ? "primary" : "outline"}
                    className={`h-auto p-4 flex flex-col items-center gap-2 transition-all duration-300 ${
                      selectedStyle.name === style.name 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
                        : 'hover:bg-white/10'
                    }`}
                  >
                    <span className="text-2xl">{style.emoji}</span>
                    <span className="text-sm font-medium">{style.name}</span>
                    <span className="text-xs opacity-70 text-center">{style.example}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Output */}
          {styledText && (
            <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 justify-between">
                  <span className="flex items-center gap-2">
                    <Sparkles size={28} />
                    Styled Result
                  </span>
                  <Button
                    onClick={() => handleCopy(styledText)}
                    variant="ghost"
                    size="sm"
                    className="hover:bg-white/10"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-6 bg-black/20 rounded-xl border border-white/10">
                  <div className="text-3xl text-center break-all select-all text-purple-300">
                    {styledText}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Upside Down Text */}
          {upsideDownText && (
            <Card className="bg-gradient-to-r from-green-500/10 to-teal-500/10 border-green-500/20 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2 justify-between">
                  <span className="flex items-center gap-2">
                    <Type size={28} />
                    Upside Down Text
                  </span>
                  <Button
                    onClick={() => handleCopy(upsideDownText)}
                    variant="ghost"
                    size="sm"
                    className="hover:bg-white/10"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-6 bg-black/20 rounded-xl border border-white/10">
                  <div className="text-3xl text-center break-all select-all text-green-300">
                    {upsideDownText}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Style Guide */}
          <Card className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-indigo-500/20 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Sparkles size={28} />
                Style Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-purple-300">Perfect For:</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      Social media bios
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      Instagram captions
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      Discord messages
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      Twitter posts
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-pink-300">Pro Tips:</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                      Mix styles for creativity
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                      Use sparingly for impact
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                      Test on different platforms
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                      Keep it readable
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
