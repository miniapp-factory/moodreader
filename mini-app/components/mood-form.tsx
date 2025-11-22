"use client";

import { useState } from "react";
import MoodInput from "./mood-input";
import AdviceDisplay from "./advice-display";
import EmojiDisplay from "./emoji-display";
import { Button } from "@/components/ui/button";

export default function MoodForm() {
  const [mood, setMood] = useState("");
  const [advice, setAdvice] = useState("");
  const [emoji, setEmoji] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lower = mood.toLowerCase();
    if (lower.includes("happy")) {
      setAdvice("Keep smiling and enjoy the day!");
      setEmoji("😊");
    } else if (lower.includes("sad")) {
      setAdvice("It's okay to feel sad. Take a deep breath.");
      setEmoji("😢");
    } else if (lower.includes("angry")) {
      setAdvice("Try to calm down and take a walk.");
      setEmoji("😠");
    } else {
      setAdvice("Stay positive and keep going!");
      setEmoji("🙂");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
      <MoodInput value={mood} onChange={setMood} />
      <Button type="submit" variant="outline" className="w-full">
        Get Advice
      </Button>
      {advice && <AdviceDisplay advice={advice} />}
      {emoji && <EmojiDisplay emoji={emoji} />}
    </form>
  );
}
