'use client';

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, Sparkles, Zap, ArrowRight, Github, Heart, Code, Users, 
  Globe, Lock, Eye, Lightbulb, Target, Star, Coffee, Rocket,
  CheckCircle, ExternalLink
} from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Shield,
      title: "Privacy First",
      description: "All operations happen locally in your browser. We never see, store, or transmit your data.",
      gradient: "from-emerald-400 to-green-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Instant results with real-time processing. No server round trips, no waiting.",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Code,
      title: "Open Source",
      description: "Fully transparent code available on GitHub. Audit, contribute, or fork as needed.",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Universal Access",
      description: "Works on any device with a modern browser. No downloads, no installations.",
      gradient: "from-purple-400 to-pink-500"
    }
  ];

  const stats = [
    { label: "Cryptographic Tools", value: "9+" },
    { label: "Lines of Code", value: "10k+" },
    { label: "Zero Data Collection", value: "100%" },
    { label: "Open Source", value: "MIT" }
  ];

  const team = [
    {
      name: "The Community",
      role: "Contributors & Users",
      description: "Built by developers, for developers. Join our growing community.",
      avatar: "👥"
    }
  ];

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
              <Link href="/#tools" className="relative text-gray-300 hover:text-white transition-all duration-300 group">
                <span>Tools</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link href="/about" className="relative text-white transition-all duration-300 group">
                <span>About</span>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-violet-400 to-cyan-400"></div>
              </Link>
              <Link href="/privacy" className="relative text-gray-300 hover:text-white transition-all duration-300 group">
                <span>Privacy</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link href="https://github.com/0x98c9/playcrypt" target="_blank">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-gray-600 text-gray-300 hover:text-white hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl rounded-full px-6 py-3 border border-white/10 mb-8">
              <Heart className="w-5 h-5 text-red-400" />
              <span className="text-sm font-medium">Made with love for the crypto community</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-none">
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                About
              </span>
              <span className="text-white/90"> Playcrypt</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              A passion project born from the belief that cryptography should be 
              <span className="text-violet-400 font-semibold"> accessible, beautiful, and secure</span> for everyone.
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-cyan-500/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-sm">
              <CardContent className="p-12">
                <Lightbulb className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Mission</h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  To democratize cryptography by making powerful encryption and encoding tools accessible to everyone, 
                  regardless of their technical background. We believe privacy and security are fundamental rights, 
                  not privileges.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">Education First</h3>
                      <p className="text-gray-400 text-sm">Make cryptography approachable and fun to learn</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">Privacy by Design</h3>
                      <p className="text-gray-400 text-sm">Everything happens locally, nothing leaves your device</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">Open Source</h3>
                      <p className="text-gray-400 text-sm">Transparent, auditable, and community-driven</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">Beautiful UX</h3>
                      <p className="text-gray-400 text-sm">Making complex tools intuitive and enjoyable</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built with modern web standards and a focus on user experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="group bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${feature.gradient} bg-opacity-10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon size={32} className="text-white/90" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-black mb-2 bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Built with Modern Tech</h2>
            <p className="text-gray-400 mb-12">Leveraging the latest web technologies for optimal performance and security</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl mb-2">⚛️</div>
                <div className="text-white font-semibold">React 18</div>
                <div className="text-gray-400 text-sm">Server Components</div>
              </Card>
              <Card className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl mb-2">🔷</div>
                <div className="text-white font-semibold">TypeScript</div>
                <div className="text-gray-400 text-sm">Type Safety</div>
              </Card>
              <Card className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl mb-2">🎨</div>
                <div className="text-white font-semibold">Tailwind CSS</div>
                <div className="text-gray-400 text-sm">Modern Styling</div>
              </Card>
              <Card className="bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-2xl mb-2">⚡</div>
                <div className="text-white font-semibold">Next.js 14</div>
                <div className="text-gray-400 text-sm">App Router</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Join the Community</h2>
            <p className="text-gray-400 mb-12">
              Playcrypt is open source and community-driven. We welcome contributions, feedback, and ideas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://github.com/0x98c9/playcrypt" target="_blank">
                <Button size="lg" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700">
                  <Github className="w-5 h-5 mr-2" />
                  Contribute on GitHub
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/#tools">
                <Button variant="outline" size="lg">
                  <Rocket className="w-5 h-5 mr-2" />
                  Try the Tools
                </Button>
              </Link>
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
              <Link href="https://github.com/0x98c9/playcrypt" target="_blank">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  About
                </Button>
              </Link>
              <Link href="/privacy">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  Privacy
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
