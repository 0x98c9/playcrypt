# Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This is **Playcrypt.fun** - a Next.js application featuring fun cryptographic and text manipulation tools built with:
- TypeScript for type safety
- Tailwind CSS for styling with modern gradient backgrounds
- App Router for routing and layouts
- ESLint for code linting
- React Server Components

## Project Overview
Playcrypt.fun is a collection of 9 interactive cryptographic and text manipulation tools designed to be fun, educational, and shareable. Each tool should have a clean, modern UI with gradient backgrounds and interactive animations.

## Tool List
1. 🥸 **Emoji Encoder/Decoder** - Convert text to emojis and back
2. 🔤 **Caesar Cipher Tool** - Classic letter shifting cryptography
3. 🎭 **Morse Code Converter** - Text to Morse with audio playback
4. 🧩 **Invisible Ink Tool** - Hide messages using zero-width characters
5. 🔐 **Emoji Password Generator** - Generate secure emoji-based passwords
6. 🧬 **Binary ↔ Text Translator** - Convert between text and binary
7. 🧙‍♂️ **Secret Message Styler** - Transform text into Unicode fonts
8. ✍️ **Reverse/Upside Down Text** - Flip and reverse text transformations
9. 📧 **Password-Protected Encryption** - AES encryption with password protection

## Project Structure
- `/src/app` - App Router pages and layouts
- `/src/components` - Reusable React components
  - `/src/components/tools` - Individual tool components
  - `/src/components/ui` - Shared UI components (buttons, cards, etc.)
- `/src/lib` - Utility functions and cryptographic algorithms
- `/src/types` - TypeScript type definitions
- `/public` - Static assets
- `/styles` - Global styles

## Development Guidelines
- Use TypeScript for all new files with proper type definitions
- Follow Next.js App Router conventions
- Use Tailwind CSS classes for styling with consistent color schemes
- Implement proper error boundaries and loading states
- Use client components for interactive tools that require user input
- Each tool should be a separate component with its own route
- Include copy-to-clipboard functionality for all outputs
- Add share functionality where applicable
- Implement dark mode support
- Follow React best practices and hooks patterns
- Add proper accessibility features (ARIA labels, keyboard navigation)

## UI/UX Guidelines
- Use gradient backgrounds and modern card layouts
- Include emoji icons for visual appeal
- Implement smooth animations and transitions
- Provide instant preview/real-time conversion where possible
- Add clear input/output sections
- Include helpful tooltips and explanations
- Make all tools mobile-responsive
- Use consistent color schemes across tools
- Include proper error handling and user feedback

## Technical Implementation
- Create reusable utility functions in `/src/lib` for algorithms
- Use React hooks for state management
- Implement proper form validation
- Add localStorage for saving preferences and history
- Include Web APIs for clipboard access and audio playback
- Ensure all cryptographic operations are client-side for privacy
- Add proper TypeScript interfaces for all data structures
- Implement proper error boundaries for each tool

## Security Considerations
- All encryption/decryption should happen client-side
- Never send sensitive data to servers
- Use proper cryptographic libraries for AES encryption
- Validate all user inputs
- Sanitize outputs to prevent XSS attacks
