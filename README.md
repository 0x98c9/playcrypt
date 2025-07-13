# 🎲 Playcrypt.fun

A collection of fun, interactive cryptographic and text manipulation tools built with Next.js, TypeScript, and Tailwind CSS.

## 🛠️ Tools Available

1. 🥸 **Emoji Encoder/Decoder** - Convert text to emojis and back
2. 🔤 **Caesar Cipher Tool** - Classic letter shifting cryptography  
3. 🎭 **Morse Code Converter** - Text to Morse with audio playback
4. 🧩 **Invisible Ink Tool** - Hide messages using zero-width characters
5. 🔐 **Emoji Password Generator** - Generate secure emoji-based passwords
6. 🧬 **Binary ↔ Text Translator** - Convert between text and binary
7. 🧙‍♂️ **Secret Message Styler** - Transform text into Unicode fonts
8. ✍️ **Reverse/Upside Down Text** - Flip and reverse text transformations
9. 📧 **Password-Protected Encryption** - AES encryption with password protection

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/0x98c9/playcrypt.git
cd playcrypt
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── tools/             # Individual tool pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Homepage
├── components/
│   ├── tools/            # Tool-specific components
│   └── ui/               # Shared UI components
├── lib/                  # Utility functions and algorithms
└── types/               # TypeScript type definitions
```

## 🎨 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Lucide React icons
- **Cryptography**: crypto-js for encryption algorithms
- **Deployment**: Vercel (recommended)

## 🔒 Security & Privacy

- All cryptographic operations happen client-side
- No sensitive data is sent to servers
- User inputs are validated and sanitized
- Open source and auditable

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!
