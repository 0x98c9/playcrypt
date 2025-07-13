'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Copy, RefreshCw, Binary, Type } from 'lucide-react';
import { ToolContainer } from '@/components/tools/tool-container';

export default function BinaryTranslatorPage() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<'textToBinary' | 'binaryToText'>('textToBinary');

  const textToBinary = (text: string): string => {
    return text
      .split('')
      .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
      .join(' ');
  };

  const binaryToText = (binary: string): string => {
    try {
      // Remove extra spaces and filter out non-binary characters
      const cleanBinary = binary.replace(/\s+/g, ' ').trim();
      const binaryNumbers = cleanBinary.split(' ').filter(bin => /^[01]+$/.test(bin));
      
      return binaryNumbers
        .map(bin => {
          const decimal = parseInt(bin, 2);
          return decimal <= 127 ? String.fromCharCode(decimal) : '';
        })
        .join('');
    } catch (error) {
      return 'Invalid binary input';
    }
  };

  const handleConvert = () => {
    if (!input.trim()) {
      setOutput('');
      return;
    }

    let result: string;
    if (mode === 'textToBinary') {
      result = textToBinary(input);
    } else {
      result = binaryToText(input);
    }
    setOutput(result);
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
  };

  const handleCopy = async () => {
    if (output) {
      await navigator.clipboard.writeText(output);
    }
  };

  const toggleMode = () => {
    setMode(mode === 'textToBinary' ? 'binaryToText' : 'textToBinary');
    setInput('');
    setOutput('');
  };

  return (
    <ToolContainer
      title="Binary ↔ Text Translator"
      emoji="🧬"
      description="Convert text to binary code and vice versa. Perfect for understanding digital encoding!"
    >
      <div className="space-y-6">
        {/* Mode Toggle */}
        <div className="flex justify-center">
          <Button
            onClick={toggleMode}
            variant="outline"
            className="flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 border-purple-200 dark:border-purple-800"
          >
            {mode === 'textToBinary' ? (
              <>
                <Type className="w-4 h-4" />
                Text → Binary
              </>
            ) : (
              <>
                <Binary className="w-4 h-4" />
                Binary → Text
              </>
            )}
            <RefreshCw className="w-4 h-4" />
          </Button>
        </div>

        {/* Input Section */}
        <Card className="border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20">
          <CardContent className="p-6">
            <div className="space-y-4">
              <label className="text-sm font-medium text-purple-700 dark:text-purple-300">
                {mode === 'textToBinary' ? 'Enter text to convert:' : 'Enter binary code (space-separated):'}
              </label>
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={
                  mode === 'textToBinary' 
                    ? 'Type your message here...'
                    : 'Enter binary like: 01001000 01100101 01101100 01101100 01101111'
                }
                className="min-h-[120px] font-mono text-sm"
              />
              <div className="flex gap-2">
                <Button
                  onClick={handleConvert}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  Convert
                </Button>
                <Button
                  onClick={handleClear}
                  variant="outline"
                  className="px-4"
                >
                  <RefreshCw className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Output Section */}
        <Card className="border-green-200 dark:border-green-800 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-green-700 dark:text-green-300">
                  {mode === 'textToBinary' ? 'Binary Output:' : 'Text Output:'}
                </label>
                <Button
                  onClick={handleCopy}
                  variant="outline"
                  size="sm"
                  disabled={!output}
                  className="text-green-600 hover:text-green-700 border-green-200 hover:border-green-300"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
              <Textarea
                value={output}
                readOnly
                placeholder="Converted result will appear here..."
                className="min-h-[120px] font-mono text-sm bg-white/50 dark:bg-gray-900/50"
              />
            </div>
          </CardContent>
        </Card>

        {/* Info Section */}
        <Card className="border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50/30 to-cyan-50/30 dark:from-blue-950/20 dark:to-cyan-950/20">
          <CardContent className="p-6">
            <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-3">How Binary Encoding Works</h3>
            <div className="space-y-2 text-sm text-blue-600 dark:text-blue-400">
              <p>• Each character is converted to its ASCII value, then to 8-bit binary</p>
              <p>• For example: &apos;A&apos; → 65 (ASCII) → 01000001 (binary)</p>
              <p>• Binary uses only 0s and 1s to represent all digital information</p>
              <p>• This is how computers store and process text at the lowest level</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </ToolContainer>
  );
}
