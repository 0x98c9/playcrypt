'use client';

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, Github, Eye, Lock, Server, Database, Cookie, 
  Globe, Code, CheckCircle, AlertTriangle, ExternalLink,
  FileText, Clock, Users, Zap
} from "lucide-react";

export default function Privacy() {
  const privacyPrinciples = [
    {
      icon: Eye,
      title: "Zero Data Collection",
      description: "We don't collect, store, or analyze any personal data. No tracking, no analytics, no cookies.",
      status: "guaranteed"
    },
    {
      icon: Server,
      title: "Client-Side Processing",
      description: "All cryptographic operations happen in your browser. Nothing is sent to our servers.",
      status: "guaranteed"
    },
    {
      icon: Code,
      title: "Open Source Transparency",
      description: "Our entire codebase is open source. Audit our privacy claims yourself.",
      status: "verifiable"
    },
    {
      icon: Globe,
      title: "No External Dependencies",
      description: "We don't load external scripts or connect to third-party services during tool usage.",
      status: "guaranteed"
    }
  ];

  const dataHandling = [
    {
      category: "Personal Information",
      collected: "None",
      purpose: "N/A",
      retention: "N/A",
      sharing: "Never"
    },
    {
      category: "Usage Analytics",
      collected: "None",
      purpose: "N/A", 
      retention: "N/A",
      sharing: "Never"
    },
    {
      category: "Cookies",
      collected: "None",
      purpose: "N/A",
      retention: "N/A", 
      sharing: "Never"
    },
    {
      category: "Your Content",
      collected: "None",
      purpose: "Local processing only",
      retention: "Never stored",
      sharing: "Never"
    }
  ];

  const technicalDetails = [
    {
      aspect: "Local Storage",
      description: "We may use browser localStorage to save your preferences (theme, settings). This data never leaves your device."
    },
    {
      aspect: "Network Requests",
      description: "The only network requests made are to load the initial website. Tools work completely offline."
    },
    {
      aspect: "Cryptographic Keys",
      description: "All encryption keys are generated in your browser and never transmitted or stored anywhere."
    },
    {
      aspect: "Source Code",
      description: "Every line of code is available on GitHub for security auditing and transparency."
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
              <Link href="/about" className="relative text-gray-300 hover:text-white transition-all duration-300 group">
                <span>About</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </Link>
              <Link href="/privacy" className="relative text-white transition-all duration-300 group">
                <span>Privacy</span>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-violet-400 to-cyan-400"></div>
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
            <div className="inline-flex items-center gap-3 bg-emerald-500/10 backdrop-blur-xl rounded-full px-6 py-3 border border-emerald-500/20 mb-8">
              <Shield className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">Privacy-First by Design</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-none">
              <span className="text-white/90">Your </span>
              <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
                Privacy
              </span>
              <br />
              <span className="text-white/90">Matters</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              We don't collect, track, or store any of your data. 
              <span className="text-emerald-400 font-semibold"> Everything happens locally</span> in your browser.
            </p>

            <div className="inline-flex items-center gap-2 text-sm text-gray-400">
              <Clock className="w-4 h-4" />
              Last updated: July 14, 2025
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-green-500/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </section>

      {/* TL;DR Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-emerald-500/10 to-green-500/5 border-emerald-500/20 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <CheckCircle className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">TL;DR</h2>
                  <p className="text-gray-300 text-lg">The short version of our privacy policy</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                    <div className="text-4xl mb-3">🚫</div>
                    <h3 className="text-xl font-bold text-white mb-2">No Data Collection</h3>
                    <p className="text-gray-400">We don't collect anything. Not even anonymous analytics.</p>
                  </div>
                  
                  <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                    <div className="text-4xl mb-3">🏠</div>
                    <h3 className="text-xl font-bold text-white mb-2">Local Processing</h3>
                    <p className="text-gray-400">Everything happens in your browser. Nothing is sent to servers.</p>
                  </div>
                  
                  <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                    <div className="text-4xl mb-3">📖</div>
                    <h3 className="text-xl font-bold text-white mb-2">Open Source</h3>
                    <p className="text-gray-400">Our code is public. Verify our claims yourself.</p>
                  </div>
                  
                  <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                    <div className="text-4xl mb-3">🍪</div>
                    <h3 className="text-xl font-bold text-white mb-2">No Cookies</h3>
                    <p className="text-gray-400">We don't use cookies, tracking pixels, or fingerprinting.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Privacy Principles
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              These aren't just promises — they're built into our architecture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {privacyPrinciples.map((principle, index) => (
              <Card key={index} className="group bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <principle.icon size={24} className="text-emerald-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-white">{principle.title}</h3>
                        <div className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded-full">
                          {principle.status}
                        </div>
                      </div>
                      <p className="text-gray-400 leading-relaxed">{principle.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Handling Table */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Data Handling Overview</h2>
              <p className="text-gray-400">A comprehensive breakdown of how we handle different types of data</p>
            </div>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-6 text-white font-semibold">Data Type</th>
                      <th className="text-left p-6 text-white font-semibold">What We Collect</th>
                      <th className="text-left p-6 text-white font-semibold">Purpose</th>
                      <th className="text-left p-6 text-white font-semibold">Retention</th>
                      <th className="text-left p-6 text-white font-semibold">Sharing</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataHandling.map((row, index) => (
                      <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors duration-200">
                        <td className="p-6 text-white font-medium">{row.category}</td>
                        <td className="p-6 text-gray-300">{row.collected}</td>
                        <td className="p-6 text-gray-300">{row.purpose}</td>
                        <td className="p-6 text-gray-300">{row.retention}</td>
                        <td className="p-6">
                          <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-medium">
                            {row.sharing}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Technical Implementation</h2>
              <p className="text-gray-400">How we ensure your privacy at the technical level</p>
            </div>

            <div className="space-y-6">
              {technicalDetails.map((detail, index) => (
                <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{detail.aspect}</h3>
                        <p className="text-gray-400 leading-relaxed">{detail.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Verification */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Don't Just Take Our Word</h2>
            <p className="text-gray-400 mb-12">
              We believe in transparency. Here's how you can verify our privacy claims yourself.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white/5 border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
                <Code className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Audit the Code</h3>
                <p className="text-gray-400 mb-6">
                  Our entire codebase is open source. Review every line of code to verify our privacy claims.
                </p>
                <Link href="https://github.com/0x98c9/playcrypt" target="_blank">
                  <Button variant="outline" className="w-full">
                    <Github className="w-4 h-4 mr-2" />
                    View Source Code
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </Card>

              <Card className="bg-white/5 border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
                <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Check Network Activity</h3>
                <p className="text-gray-400 mb-6">
                  Use your browser's developer tools to monitor network requests. You'll see zero data transmission.
                </p>
                <Button variant="outline" className="w-full" disabled>
                  <Eye className="w-4 h-4 mr-2" />
                  Open DevTools & Monitor
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-gradient-to-br from-violet-500/10 to-purple-500/5 border-violet-500/20 backdrop-blur-sm">
              <CardContent className="p-12">
                <FileText className="w-16 h-16 text-violet-400 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Questions About Privacy?</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  If you have any questions about our privacy practices or want to report a privacy concern, 
                  we're here to help.
                </p>
                <Link href="https://github.com/0x98c9/playcrypt/issues" target="_blank">
                  <Button size="lg" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700">
                    <Github className="w-5 h-5 mr-2" />
                    Contact Us on GitHub
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
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
