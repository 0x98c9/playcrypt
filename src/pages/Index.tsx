import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowUpDown, Trash2, Sparkles } from 'lucide-react';
import CopyButton from '@/components/CopyButton';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/FAQ';
import { encryptText, decryptEmojis, isValidEmojiForDecryption } from '@/utils/emojiMapping';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [mode, setMode] = useState<'encrypt' | 'decrypt'>('encrypt');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  // Process conversion
  const handleConvert = () => {
    if (!input.trim()) {
      toast({
        title: "Empty input! 📝",
        description: "Please enter some text to convert",
        duration: 2000,
      });
      return;
    }
    setIsProcessing(true);
    setTimeout(() => {
      try {
        let result = '';
        if (mode === 'encrypt') {
          result = encryptText(input);
          toast({
            title: "Text encrypted! 🔐",
            description: "Your text has been converted to emojis",
            duration: 2000,
          });
        } else {
          if (!isValidEmojiForDecryption(input)) {
            toast({
              title: "Invalid emojis! ⚠️",
              description: "Some emojis cannot be decrypted",
              variant: "destructive",
              duration: 3000,
            });
            setIsProcessing(false);
            return;
          }
          result = decryptEmojis(input);
          toast({
            title: "Emojis decrypted! 🔓",
            description: "Your emojis have been converted back to text",
            duration: 2000,
          });
        }
        setOutput(result);
      } catch (error) {
        toast({
          title: "Conversion failed! 💥",
          description: "Something went wrong during conversion",
          variant: "destructive",
          duration: 3000,
        });
      } finally {
        setIsProcessing(false);
      }
    }, 300);
  };

  // Clear all fields
  const handleClear = () => {
    setInput('');
    setOutput('');
    toast({
      title: "Cleared! 🧹",
      description: "All fields have been reset",
      duration: 1500,
    });
  };

  // Toggle mode
  const toggleMode = () => {
    const newMode = mode === 'encrypt' ? 'decrypt' : 'encrypt';
    setMode(newMode);
    setInput('');
    setOutput('');
    toast({
      title: `Switched to ${newMode} mode! 🔄`,
      description: `Now you can ${newMode} your ${newMode === 'encrypt' ? 'text' : 'emojis'}`,
      duration: 2000,
    });
  };

  const inputPlaceholder = mode === 'encrypt' 
    ? "Type your text here... (e.g., hello world!)"
    : "Paste your emojis here... (e.g., 🏠🥚🦁🦁🍊 🌊🍊🌈🦁🐶❗)";

  return (
    <>
      {/* Hero Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-10 md:mb-12 fade-slide-up">
              <div className="inline-flex items-center justify-center mb-4 sm:mb-6 md:mb-8">
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl bounce-in">🔐</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold emoji-gradient bg-clip-text text-transparent mb-4 sm:mb-6 px-2">
                Playcrypt
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
                Transform your text into secret emoji codes! Convert text to emojis and back again with our fun encryption tool.
              </p>
            </div>

            {/* Mode Toggle */}
            <Card className="mb-6 sm:mb-8 md:mb-10 glow-effect border-2 mx-2 sm:mx-4 md:mx-0">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6">
                  <Badge 
                    variant={mode === 'encrypt' ? 'default' : 'secondary'}
                    className="text-sm sm:text-base md:text-lg lg:text-xl py-2 sm:py-3 px-4 sm:px-6 cursor-pointer transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center min-h-[44px] flex items-center justify-center"
                    onClick={toggleMode}
                  >
                    🔐 Encrypt (Text → Emoji)
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleMode}
                    className="transition-all duration-300 hover:scale-110 order-first sm:order-none p-2 sm:p-3"
                  >
                    <ArrowUpDown className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </Button>
                  <Badge 
                    variant={mode === 'decrypt' ? 'default' : 'secondary'}
                    className="text-sm sm:text-base md:text-lg lg:text-xl py-2 sm:py-3 px-4 sm:px-6 cursor-pointer transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center min-h-[44px] flex items-center justify-center"
                    onClick={toggleMode}
                  >
                    🔓 Decrypt (Emoji → Text)
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Main Conversion Area */}
            <div className="grid gap-4 sm:gap-6 md:gap-8 lg:grid-cols-2 mb-6 sm:mb-8 md:mb-10 mx-2 sm:mx-4 md:mx-0">
              {/* Input */}
              <Card className="transition-all duration-300 hover:glow-effect shadow-lg">
                <CardHeader className="pb-3 sm:pb-4 md:pb-6">
                  <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl">
                    <span className="text-xl sm:text-2xl md:text-3xl">
                      {mode === 'encrypt' ? '📝' : '😀'}
                    </span>
                    Input {mode === 'encrypt' ? 'Text' : 'Emojis'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={inputPlaceholder}
                    className="min-h-[150px] sm:min-h-[180px] md:min-h-[220px] lg:min-h-[250px] text-sm sm:text-base md:text-lg resize-none transition-all duration-300 focus:glow-effect border-2"
                    style={{ fontSize: mode === 'decrypt' ? '1.1rem' : undefined }}
                  />
                  <div className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-muted-foreground">
                    Characters: {input.length}
                  </div>
                </CardContent>
              </Card>

              {/* Output */}
              <Card className="transition-all duration-300 hover:glow-effect shadow-lg">
                <CardHeader className="pb-3 sm:pb-4 md:pb-6">
                  <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl">
                    <span className="text-xl sm:text-2xl md:text-3xl">
                      {mode === 'encrypt' ? '😀' : '📝'}
                    </span>
                    Output {mode === 'encrypt' ? 'Emojis' : 'Text'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <Textarea
                    value={output}
                    readOnly
                    placeholder={`Your ${mode === 'encrypt' ? 'encrypted emojis' : 'decrypted text'} will appear here...`}
                    className="min-h-[150px] sm:min-h-[180px] md:min-h-[220px] lg:min-h-[250px] text-sm sm:text-base md:text-lg resize-none bg-muted/50 transition-all duration-300 border-2"
                    style={{ fontSize: mode === 'encrypt' ? '1.1rem' : undefined }}
                  />
                  <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-2">
                    <div className="text-xs sm:text-sm md:text-base text-muted-foreground">
                      Characters: {output.length}
                    </div>
                    <div className="flex gap-2">
                      <CopyButton text={output} disabled={!output} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-6 mx-2 sm:mx-4 md:mx-0">
              <Button
                onClick={handleConvert}
                disabled={!input.trim() || isProcessing}
                size="lg"
                className="emoji-gradient text-white transition-all duration-300 hover:scale-105 hover:glow-effect min-w-[140px] w-full sm:w-auto text-base sm:text-lg md:text-xl py-3 sm:py-4 px-6 sm:px-8 min-h-[48px] sm:min-h-[52px]"
              >
                {isProcessing ? (
                  <>
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    {mode === 'encrypt' ? '🔐 Encrypt' : '🔓 Decrypt'}
                  </>
                )}
              </Button>
              <Button
                onClick={handleClear}
                variant="outline"
                size="lg"
                className="transition-all duration-300 hover:scale-105 w-full sm:w-auto text-base sm:text-lg md:text-xl py-3 sm:py-4 px-6 sm:px-8 min-h-[48px] sm:min-h-[52px] border-2"
              >
                <Trash2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2" />
                Clear All
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with distinct background */}
      <div className="border-t border-b border-border/30">
        <Features />
      </div>
      
      {/* How It Works Section with distinct background */}
      <div className="border-b border-border/30">
        <HowItWorks />
      </div>
      
      {/* FAQ Section with distinct background */}
      <div className="border-b border-border/30">
        <FAQ />
      </div>
      
      {/* Quick Reference Section with distinct background */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30 border-b border-border/30">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 px-2">
              Quick Reference
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed">
              Everything you need to know about using Playcrypt's features
            </p>
          </div>
          
          <div className="grid gap-6 sm:gap-8 md:gap-10 lg:grid-cols-2 max-w-6xl mx-auto">
            <Card className="hover:glow-effect transition-all duration-300 shadow-lg hover:shadow-xl border-2">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl">
                  <span className="text-2xl sm:text-3xl">🔐</span>
                  Encrypt Mode
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 px-4 sm:px-6 md:px-8">
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                  Converts your text to emojis using our secret mapping. 
                  Each letter, number, and symbol becomes a unique emoji!
                </p>
              </CardContent>
            </Card>
            <Card className="hover:glow-effect transition-all duration-300 shadow-lg hover:shadow-xl border-2">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl">
                  <span className="text-2xl sm:text-3xl">🔓</span>
                  Decrypt Mode
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 px-4 sm:px-6 md:px-8">
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                  Converts emojis back to original text. 
                  Only works with emojis created by our encryption!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
