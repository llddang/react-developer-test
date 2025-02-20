import { useRef } from "react";

interface ImageInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value"> {
  value?: string;
}
export default function ImageInput({
  value,
  className,
  ...props
}: ImageInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <img
        src={value || "/default_profile.png"}
        alt=""
        onClick={() => inputRef.current?.click()}
        className={`${className} mx-auto w-[60%] aspect-square rounded-lg border-2 border-transparent hover:border-dashed hover:border-zinc-200 box-border`}
      />
      <input
        type="file"
        accept=".jpg, .jpeg, .png, .webp"
        ref={inputRef}
        className="hidden"
        {...props}
      />
    </>
  );
}
