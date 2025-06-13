import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-8 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <span className="text-xl sm:text-2xl md:text-3xl">🔐</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold emoji-gradient bg-clip-text text-transparent">
                Playcrypt
              </span>
              <Badge variant="secondary" className="text-xs sm:text-sm py-1 px-2">
                Beta
              </Badge>
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-4 sm:mb-6 leading-relaxed max-w-2xl">
              Transform your text into secret emoji codes! A fun and secure way to encrypt your messages using emojis.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
              © 2024 Playcrypt. All rights reserved.
            </p>
          </div>
          
          {/* Features */}
          <div>
            <h3 className="font-semibold mb-4 sm:mb-6 text-sm sm:text-base md:text-lg lg:text-xl">Features</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base text-muted-foreground">
              <li className="hover:text-foreground transition-colors cursor-pointer">Text to Emoji</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Emoji to Text</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">One-Click Copy</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Mobile Friendly</li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 sm:mb-6 text-sm sm:text-base md:text-lg lg:text-xl">Support</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base text-muted-foreground">
              <li className="hover:text-foreground transition-colors cursor-pointer">
                <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
              </li>
              <li className="hover:text-foreground transition-colors cursor-pointer">
                <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
              </li>
              <li className="hover:text-foreground transition-colors cursor-pointer">
                <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-6 sm:my-8 md:my-10" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground text-center sm:text-left">
            Made with ❤️ for secure and fun communication
          </p>
          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm md:text-base text-muted-foreground flex-wrap justify-center sm:justify-end">
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
