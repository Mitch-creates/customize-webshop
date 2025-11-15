"use client";

interface CtaButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  accent?: "color1" | "color2";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  form?: string;
}

export default function CtaButton({
  onClick,
  children,
  accent = "color2",
  type = "button",
  disabled = false,
  form,
}: CtaButtonProps) {
  return (
    <div className="relative inline-block">
      <span
        aria-hidden="true"
        className="relative inline-block
           rounded-full bg-black"
      >
        <button
          type={type}
          form={form}
          className={`bg-accent-color2 text-black p-2 rounded-full cursor-pointer appearance-none relative selector-none border-black border-2 px-5 py-3 font-semibold translate-x-1 -translate-y-1 hover:-translate-y-2 transition-transform duration-10 active:translate-x-0 active:translate-y-0 `}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      </span>
    </div>
  );
}
