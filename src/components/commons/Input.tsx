import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
export default function Input({ type, className, ...props }: InputProps) {
  return (
    <input
      type={type}
      {...props}
      className={`${className} h-9 bg-white w-full rounded-md border border-zinc-200 px-3 py-2 text-base placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50`}
    />
  );
}
