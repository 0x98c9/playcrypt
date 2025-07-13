'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpDown, Play, Pause, Volume2, Radio, Copy, RotateCcw, FileText } from 'lucide-react';

const morseCodeMapping: { [key: string]: string } = {
  'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.',
  'f': '..-.', 'g': '--.', 'h': '....', 'i': '..', 'j': '.---',
  'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---',
  'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-',
  'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--',
  'z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--',
  '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
  '9': '----.', ' ': '/', '.': '.-.-.-', ',': '--..--', '?': '..--..',
  "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-',
  '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.',
  '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.'
};

function textToMorse(text: string): string {
  return text.toLowerCase().split('').map(char => morseCodeMapping[char] || char).join(' ');
}

function morseToText(morse: string): string {
  const reverseMorseMapping = Object.fromEntries(
    Object.entries(morseCodeMapping).map(([char, code]) => [code, char])
  );
  
  return morse.split(' ').map(code => reverseMorseMapping[code] || code).join('');
}

export default function MorseCodePage() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isTextToMorse, setIsTextToMorse] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  const handleProcess = () => {
    if (isTextToMorse) {
      setOutputText(textToMorse(inputText));
    } else {
      setOutputText(morseToText(inputText));
    }
  };

  const handleSwapMode = () => {
    setIsTextToMorse(!isTextToMorse);
    setInputText(outputText);
    setOutputText(inputText);
  };

  const handleCopy = async (text: string) => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    }
  };

  const handleReset = () => {
    setInputText('');
    setOutputText('');
  };

  const playMorseAudio = async (morseCode: string) => {
    if (isPlaying) return;
    
    setIsPlaying(true);
    
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      
      const audioContext = audioContextRef.current;
      const dotDuration = 100; // milliseconds
      const dashDuration = dotDuration * 3;
      const gapDuration = dotDuration;
      const letterGapDuration = dotDuration * 3;
      const wordGapDuration = dotDuration * 7;
      
      let currentTime = audioContext.currentTime;
      
      for (const char of morseCode) {
        if (char === '.') {
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();
          
          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);
          
          oscillator.frequency.setValueAtTime(800, currentTime);
          gainNode.gain.setValueAtTime(0.1, currentTime);
          gainNode.gain.setValueAtTime(0, currentTime + dotDuration / 1000);
          
          oscillator.start(currentTime);
          oscillator.stop(currentTime + dotDuration / 1000);
          
          currentTime += (dotDuration + gapDuration) / 1000;
        } else if (char === '-') {
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();
          
          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);
          
          oscillator.frequency.setValueAtTime(800, currentTime);
          gainNode.gain.setValueAtTime(0.1, currentTime);
          gainNode.gain.setValueAtTime(0, currentTime + dashDuration / 1000);
          
          oscillator.start(currentTime);
          oscillator.stop(currentTime + dashDuration / 1000);
          
          currentTime += (dashDuration + gapDuration) / 1000;
        } else if (char === ' ') {
          currentTime += letterGapDuration / 1000;
        } else if (char === '/') {
          currentTime += wordGapDuration / 1000;
        }
      }
      
      setTimeout(() => setIsPlaying(false), (currentTime - audioContext.currentTime) * 1000);
    } catch (error) {
      console.error('Audio playback failed:', error);
      setIsPlaying(false);
    }
  };

  // Real-time processing
  const processedText = inputText ? (isTextToMorse ? textToMorse(inputText) : morseToText(inputText)) : '';

  return (
    <div className="min-h-screen relative">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-cyan-900/20 to-green-900/20" />
      
      {/* Floating Orbs */}
      <div className="fixed top-32 right-20 w-40 h-40 bg-gradient-to-r from-blue-400/30 to-cyan-500/30 rounded-full blur-xl animate-float" />
      <div className="fixed bottom-20 left-32 w-28 h-28 bg-gradient-to-r from-green-400/30 to-blue-500/30 rounded-full blur-xl animate-float" style={{ animationDelay: '3s' }} />
      
      {/* Grid Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <Radio size={96} className="mx-auto text-blue-400 animate-pulse" />
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-500 to-green-600 bg-clip-text text-transparent">
            Morse Code Converter
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Convert text to Morse code and back! Listen to your Morse code with audio playback and learn this classic communication method.
          </p>
        </div>

        <div className="space-y-8">
          {/* Controls */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <Button
                  onClick={handleSwapMode}
                  variant="outline"
                  size="lg"
                  className="gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-500/30 px-8 py-3 text-lg"
                >
                  <ArrowUpDown className="w-5 h-5" />
                  {isTextToMorse ? 'Switch to Decode' : 'Switch to Encode'}
                </Button>
                
                {processedText && isTextToMorse && (
                  <Button
                    onClick={() => playMorseAudio(processedText)}
                    disabled={isPlaying}
                    variant="outline"
                    size="lg"
                    className="gap-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border-green-500/30 px-8 py-3 text-lg"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    <Volume2 className="w-5 h-5" />
                    {isPlaying ? 'Playing...' : 'Play Audio'}
                  </Button>
                )}

                <Button
                  onClick={handleReset}
                  variant="outline"
                  size="lg"
                  className="px-8 py-3 text-lg border-white/20 hover:border-white/30 hover:bg-white/10"
                >
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Input/Output Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Input */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <FileText size={24} />
                  {isTextToMorse ? 'Text to Convert' : 'Morse Code to Decode'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={isTextToMorse ? 'Enter text here...' : 'Enter Morse code here... (use . - and spaces)'}
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
                    <Radio size={24} />
                    {isTextToMorse ? 'Morse Code' : 'Decoded Text'}
                  </span>
                  {processedText && (
                    <Button
                      onClick={() => handleCopy(processedText)}
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
                  value={processedText}
                  readOnly
                  placeholder={isTextToMorse ? 'Morse code appears here...' : 'Decoded text appears here...'}
                  className="min-h-[200px] text-lg bg-gray-800/50 font-mono resize-none"
                  rows={8}
                />
              </CardContent>
            </Card>
          </div>

          {/* Morse Code Reference */}
          <Card className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/20 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Radio size={28} />
                Morse Code Reference
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {Object.entries(morseCodeMapping).slice(0, 36).map(([char, code]) => (
                  <div key={char} className="flex justify-between items-center p-2 bg-white/5 rounded-lg">
                    <span className="font-bold text-cyan-300 uppercase">{char === '/' ? 'SPACE' : char}</span>
                    <span className="font-mono text-blue-300">{code}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Audio Instructions */}
          <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/20 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Volume2 size={28} />
                Audio Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-2xl mb-2">•</div>
                  <p className="text-sm font-semibold">Dot (Dit)</p>
                  <p className="text-xs text-gray-400">Short beep - 1 unit</p>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-2xl mb-2">—</div>
                  <p className="text-sm font-semibold">Dash (Dah)</p>
                  <p className="text-xs text-gray-400">Long beep - 3 units</p>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-2xl mb-2">
                    <Pause size={24} className="mx-auto" />
                  </div>
                  <p className="text-sm font-semibold">Pause</p>
                  <p className="text-xs text-gray-400">Gap between letters</p>
                </div>
              </div>
              <p className="text-center text-sm text-gray-300 mt-4">
                Click "Play Audio" to hear your Morse code! Works best with letters and numbers.
              </p>
            </CardContent>
          </Card>

          {/* Fun Facts */}
          <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20 backdrop-blur-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Radio size={28} />
                Morse Code Facts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm text-gray-300">
                  <strong className="text-cyan-400">SOS:</strong> The famous distress signal "SOS" in Morse is <span className="font-mono bg-black/30 px-2 py-1 rounded">... --- ...</span>
                </p>
                <p className="text-sm text-gray-300">
                  <strong className="text-blue-400">History:</strong> Developed in the 1830s-1840s for telegraph communication by Samuel Morse and Alfred Vail.
                </p>
                <p className="text-sm text-gray-300">
                  <strong className="text-green-400">Still Used:</strong> Maritime, aviation, and amateur radio operators still use Morse code today!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
