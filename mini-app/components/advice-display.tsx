"use client";

interface AdviceDisplayProps {
  advice: string;
}

export default function AdviceDisplay({ advice }: AdviceDisplayProps) {
  return <p className="text-lg">{advice}</p>;
}
