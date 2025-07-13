'use client';

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, Sparkles, Zap, ArrowRight, Github, Twitter, Star, Heart,
  Smile, Type, Radio, EyeOff, Lock, Binary, Wand2, RotateCcw, Mail,
  Palette, Globe, Key, FileText, Play, Volume2
} from "lucide-react";
import { useState } from "react";

const tools = [
  {
    id: "emoji-encoder",
    name: "Emoji Encoder",
    icon: Smile,
    description: "Transform your messages into colorful emoji codes that only you and your friends can understand",
    category: "encoding",
    gradient: "from-yellow-400 via-orange-500 to-red-500",
    delay: "0ms"
  },
  {
    id: "caesar-cipher",
    name: "Caesar Cipher",
    icon: Type,
    description: "Use the ancient Roman encryption technique with modern interactive visualizations",
    category: "cipher",
    gradient: "from-red-400 via-pink-500 to-purple-500",
    delay: "100ms"
  },
  {
    id: "morse-code",
    name: "Morse Code",
    icon: Radio,
    description: "Convert text to dots and dashes with realistic audio playback and timing",
    category: "audio",
    gradient: "from-blue-400 via-cyan-500 to-teal-500",
    delay: "200ms"
  },
  {
    id: "invisible-ink",
    name: "Invisible Ink",
    icon: EyeOff,
    description: "Hide secret messages in plain text using advanced steganography techniques",
    category: "steganography",
    gradient: "from-green-400 via-emerald-500 to-cyan-500",
    delay: "300ms"
  },
  {
    id: "emoji-password",
    name: "Emoji Passwords",
    icon: Lock,
    description: "Generate ultra-secure passwords with emojis that are both strong and memorable",
    category: "security",
    gradient: "from-purple-400 via-violet-500 to-indigo-500",
    delay: "400ms"
  },
  {
    id: "binary-translator",
    name: "Binary Matrix",
    icon: Binary,
    description: "Enter the digital realm with Matrix-style binary conversion and effects",
    category: "binary",
    gradient: "from-green-500 via-emerald-600 to-teal-700",
    delay: "500ms"
  },
  {
    id: "secret-styler",
    name: "Unicode Magic",
    icon: Wand2,
    description: "Transform text into stunning Unicode styles that work everywhere",
    category: "styling",
    gradient: "from-pink-400 via-rose-500 to-red-500",
    delay: "600ms"
  },
  {
    id: "reverse-text",
    name: "Text Flipper",
    icon: RotateCcw,
    description: "Flip, reverse, and transform text in mind-bending ways",
    category: "transformation",
    gradient: "from-cyan-400 via-blue-500 to-indigo-500",
    delay: "700ms"
  },
  {
    id: "password-encryption",
    name: "AES Encryption",
    icon: Mail,
    description: "Military-grade encryption for your most sensitive messages",
    category: "encryption",
    gradient: "from-orange-400 via-red-500 to-pink-500",
    delay: "800ms"
  }
];

export default function Home() {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Playcrypt
                </span>
                <span className="text-xs text-gray-400 -mt-1">.fun</span>
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="#tools" className="relative text-gray-300 hover:text-white transition-all duration-300 group">
                <span>Tools</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link href="#features" className="relative text-gray-300 hover:text-white transition-all duration-300 group">
                <span>Features</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-gray-600 text-gray-300 hover:text-white hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden text-gray-300 hover:text-white hover:bg-purple-500/10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6 pt-32 pb-32">
          <div className="text-center max-w-5xl mx-auto">
            {/* Main Title */}
            <div className="mb-8">            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-none">
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_100%]">
                Playcrypt
              </span>
              <span className="text-white/90">.fun</span>
            </h1>
              
              <div className="flex justify-center items-center gap-2 mb-8">
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <span className="text-gray-400 ml-2">Trusted by crypto enthusiasts</span>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              The most beautiful and powerful collection of cryptographic tools on the web. 
              <span className="text-violet-400 font-semibold"> Encrypt, decode, and transform</span> with style.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl rounded-full px-6 py-3 border border-white/10">
                <Shield className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-medium">100% Client-Side</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl rounded-full px-6 py-3 border border-white/10">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span className="text-sm font-medium">9 Powerful Tools</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl rounded-full px-6 py-3 border border-white/10">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">Lightning Fast</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700">
                Start Encrypting
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="xl">
                <Github className="w-5 h-5 mr-2" />
                View Source
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-cyan-500/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-pink-500/25 rounded-full blur-xl animate-pulse delay-2000"></div>
      </section>

      {/* Tools Grid */}
      <section id="tools" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Cryptographic Arsenal
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Professional-grade tools designed for security, fun, and everything in between
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {tools.map((tool, index) => (
              <Link key={tool.id} href={`/tools/${tool.id}`}>
                <Card 
                  className="group cursor-pointer h-full bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
                  style={{ animationDelay: tool.delay }}
                  onMouseEnter={() => setHoveredTool(tool.id)}
                  onMouseLeave={() => setHoveredTool(null)}
                >
                  <CardHeader className="text-center pb-6">
                    <div className="mb-6 relative">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${tool.gradient} bg-opacity-10 w-24 h-24 mx-auto flex items-center justify-center transition-all duration-300 ${hoveredTool === tool.id ? 'scale-110' : ''}`}>
                        <tool.icon 
                          size={40} 
                          className="text-white/90 group-hover:text-white transition-colors duration-300"
                        />
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl mb-3 text-white/90 group-hover:text-white transition-colors duration-300">
                      {tool.name}
                    </CardTitle>
                    
                    <CardDescription className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed text-sm">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0 pb-6">
                    <Button 
                      variant="outline" 
                      className="w-full border-white/20 text-white/80 hover:bg-white/10 hover:border-white/30 hover:text-white transition-all duration-300"
                    >
                      Try {tool.name}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Why Choose Playcrypt?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center group bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-emerald-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Shield size={32} className="text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Privacy First</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Everything happens in your browser. Zero data collection. 
                    Your secrets stay with you, always.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center group bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-yellow-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Zap size={32} className="text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Lightning Speed</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Instant results with real-time processing. 
                    No waiting, no loading screens.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center group bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-pink-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Palette size={32} className="text-pink-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Beautiful Design</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Stunning interfaces that make cryptography 
                    accessible and enjoyable for everyone.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-gradient-to-r from-violet-400 to-cyan-400 rounded flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-semibold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Playcrypt.fun
              </span>
            </div>
            
            <p className="text-gray-500 text-sm mb-4">
              Open source cryptographic tools. Privacy-focused and completely free.
            </p>
            
            <div className="flex justify-center items-center gap-6">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                About
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                Privacy
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
