"use client";

interface CtaButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  accent?: "color1" | "color2";
}

export default function CtaButton({
  onClick,
  children,
  accent = "color2",
}: CtaButtonProps) {
  return (
    <div className="relative inline-block">
      <span
        aria-hidden="true"
        className="absolute inset-0 -translate-x-1 translate-y-1
           rounded-full bg-black"
      ></span>
      <button
        className={`bg-accent-${accent} text-white p-2 rounded-full cursor-pointer appearance-none relative selector-none border-black border-2 px-5 py-3 font-semibold hover:-translate-y-1  transition-transform duration-10 active:-translate-x-1 active:translate-y-1 `}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

{
  /* <button
    class="relative inline-block cursor-pointer select-none
           rounded-full border-[3px] border-black bg-white text-black
           px-5 py-3 font-semibold leading-none
           transition-transform duration-150 ease-out
           shadow-[8px_8px_0_#000]
           hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_#000]
           active:translate-x-2 active:translate-y-2 active:shadow-[0_0_0_#000]
           focus-visible:outline focus-visible:outline-[3px]
           focus-visible:outline-black focus-visible:outline-offset-2">
    S’abonner gratuitement
  </button> */
}
