'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient' | 'neon';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center whitespace-nowrap rounded-2xl font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group',
          {
            // Primary - Sleek gradient with glow
            'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105 active:scale-95 border-0': variant === 'primary',
            
            // Secondary - Glass morphism effect
            'bg-white/5 backdrop-blur-xl border border-white/10 text-white hover:bg-white/10 hover:border-white/20 shadow-lg': variant === 'secondary',
            
            // Outline - Neon border effect
            'border-2 border-violet-500/50 text-violet-300 hover:border-violet-400 hover:text-violet-200 hover:bg-violet-500/10 hover:shadow-lg hover:shadow-violet-500/20': variant === 'outline',
            
            // Ghost - Subtle hover
            'text-gray-300 hover:text-white hover:bg-white/5 rounded-xl': variant === 'ghost',
            
            // Gradient - Animated rainbow
            'bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 bg-[length:200%_100%] animate-gradient': variant === 'gradient',
            
            // Neon - Cyberpunk style
            'bg-black border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300': variant === 'neon',
          },
          {
            'h-8 px-3 text-sm': size === 'sm',
            'h-11 px-6 text-base': size === 'md',
            'h-14 px-8 text-lg': size === 'lg',
            'h-16 px-10 text-xl': size === 'xl',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
