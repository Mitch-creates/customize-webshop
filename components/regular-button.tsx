"use client";

interface RegularButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

export default function RegularButton({
  onClick,
  children,
}: RegularButtonProps) {
  return (
    <button
      className={`bg-black text-white p-2 rounded-full cursor-pointer appearance-none selector-none relative inline-block selector-none border-[3px] px-5 py-3 font-semibold hover:bg-white hover:text-black transition-colors duration-300`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
