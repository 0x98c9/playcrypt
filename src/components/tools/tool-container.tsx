'use client';

import { ReactNode, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Check, Share2, RefreshCw } from 'lucide-react';

interface ToolContainerProps {
  title: string;
  emoji: string;
  description: string;
  children: ReactNode;
  onCopy?: (text: string) => void;
  onShare?: () => void;
  onReset?: () => void;
  copyText?: string;
}

export function ToolContainer({
  title,
  emoji,
  description,
  children,
  onCopy,
  onShare,
  onReset,
  copyText
}: ToolContainerProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (copyText && onCopy) {
      onCopy(copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="text-8xl mb-4 animate-bounce">{emoji}</div>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      {/* Tool Content */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">Tool Interface</CardTitle>
            <div className="flex gap-2">
              {onReset && (
                <Button onClick={onReset} variant="outline" size="sm" className="gap-2">
                  <RefreshCw className="w-4 h-4" />
                  Reset
                </Button>
              )}
              {copyText && (
                <Button onClick={handleCopy} variant="outline" size="sm" className="gap-2">
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied!' : 'Copy'}
                </Button>
              )}
              {onShare && (
                <Button onClick={onShare} variant="outline" size="sm" className="gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
      </Card>

      {/* Fun Facts or Tips */}
      <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20">
        <CardHeader>
          <CardTitle className="text-lg">💡 Did you know?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">
            This tool processes everything locally in your browser - your data never leaves your device! 
            Feel free to use it for sensitive information. ✨
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
