"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface MoodInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function MoodInput({ value, onChange }: MoodInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="mood">Your Mood</Label>
      <Input
        id="mood"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="e.g., I feel happy"
      />
    </div>
  );
}
