"use client";

interface EmojiDisplayProps {
  emoji: string;
}

export default function EmojiDisplay({ emoji }: EmojiDisplayProps) {
  return <span className="text-6xl">{emoji}</span>;
}
