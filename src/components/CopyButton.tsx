
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface CopyButtonProps {
  text: string;
  disabled?: boolean;
}

const CopyButton: React.FC<CopyButtonProps> = ({ text, disabled = false }) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    if (!text || disabled) return;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast({
        title: "Copied! 📋",
        description: "Result copied to clipboard",
        duration: 2000,
      });
      
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Copy failed 😞",
        description: "Could not copy to clipboard",
        variant: "destructive",
        duration: 2000,
      });
    }
  };

  return (
    <Button
      onClick={handleCopy}
      disabled={disabled || !text}
      variant="outline"
      size="sm"
      className="transition-all duration-200 hover:scale-105 hover:glow-effect"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 mr-2 text-green-500" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="w-4 h-4 mr-2" />
          Copy
        </>
      )}
    </Button>
  );
};

export default CopyButton;
