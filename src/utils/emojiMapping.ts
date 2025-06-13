// Emoji mapping for Playcrypt
export const DEFAULT_EMOJI_MAP: Record<string, string> = {
  // Lowercase letters
  'a': '🍎', 'b': '🐝', 'c': '🌜', 'd': '🐶', 'e': '🥚',
  'f': '🔥', 'g': '🍇', 'h': '🏠', 'i': '🍦', 'j': '🃏',
  'k': '🔑', 'l': '🦁', 'm': '🌙', 'n': '🥜', 'o': '🍊',
  'p': '🍕', 'q': '👸', 'r': '🌈', 's': '⭐', 't': '🌳',
  'u': '☂️', 'v': '🎻', 'w': '🌊', 'x': '❌', 'y': '💛',
  'z': '⚡',
  
  // Numbers
  '0': '0️⃣', '1': '1️⃣', '2': '2️⃣', '3': '3️⃣', '4': '4️⃣',
  '5': '5️⃣', '6': '6️⃣', '7': '7️⃣', '8': '8️⃣', '9': '9️⃣',
  
  // Common punctuation and symbols
  ' ': '⬜', '!': '❗', '.': '⚫', ',': '🔻', '?': '❓',
  ':': '🔹', ';': '🔸', '"': '💬', "'": '✨', '-': '➖',
  '+': '➕', '=': '🟰', '(': '◀️', ')': '▶️', '[': '🔲',
  ']': '🔳', '{': '🟫', '}': '🟪', '@': '🎯', '#': '🔢',
  '$': '💰', '%': '💯', '&': '🤝', '*': '🥇', '/': '🔀',
  '\\': '↩️', '|': '📏', '_': '📏', '~': '🌀', '`': '💭'
};

export let EMOJI_MAP: Record<string, string> = { ...DEFAULT_EMOJI_MAP };
export let REVERSE_EMOJI_MAP: Record<string, string> = Object.fromEntries(
  Object.entries(EMOJI_MAP).map(([char, emoji]) => [emoji, char])
);

export const encryptText = (text: string): string => {
  return text
    .toLowerCase()
    .split('')
    .map(char => EMOJI_MAP[char] || char)
    .join('');
};

export const decryptEmojis = (emojiText: string): string => {
  // @ts-ignore
  const GraphemeSplitter = require('grapheme-splitter');
  const splitter = new GraphemeSplitter();
  const emojiArray = splitter.splitGraphemes(emojiText);
  let result = '';
  let i = 0;
  while (i < emojiArray.length) {
    let matched = false;
    for (let len = 3; len >= 1; len--) {
      if (i + len <= emojiArray.length) {
        const candidate = emojiArray.slice(i, i + len).join('');
        if (REVERSE_EMOJI_MAP[candidate]) {
          result += REVERSE_EMOJI_MAP[candidate];
          i += len;
          matched = true;
          break;
        }
      }
    }
    if (!matched) {
      result += emojiArray[i];
      i += 1;
    }
  }
  return result;
};

export const isValidEmojiForDecryption = (text: string): boolean => {
  // @ts-ignore
  const GraphemeSplitter = require('grapheme-splitter');
  const splitter = new GraphemeSplitter();
  const emojiArray = splitter.splitGraphemes(text);
  let i = 0;
  while (i < emojiArray.length) {
    let matched = false;
    for (let len = 3; len >= 1; len--) {
      if (i + len <= emojiArray.length) {
        const candidate = emojiArray.slice(i, i + len).join('');
        if (REVERSE_EMOJI_MAP[candidate]) {
          i += len;
          matched = true;
          break;
        }
      }
    }
    if (!matched) {
      return false;
    }
  }
  return true;
};
