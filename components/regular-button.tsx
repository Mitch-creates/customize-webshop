"use client";

interface RegularButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  accent?: "color1" | "color2";
}

export default function RegularButton({
  onClick,
  children,
  accent = "color2",
}: RegularButtonProps) {
  return (
    <button
      className={`bg-accent-${accent} text-white p-2 rounded-full cursor-pointer appearance-none relative inline-block selector-none border-[3px] px-5 py-3 font-semibold`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
