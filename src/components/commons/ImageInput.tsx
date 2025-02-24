import { useEffect, useRef, useState } from "react";

interface ImageInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "defaultValue"> {
  defaultValue?: string | null;
}
export default function ImageInput({
  defaultValue,
  className,
  onChange,
  ...props
}: ImageInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState(defaultValue);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size >= (1024 * 1024) / 2) return alert("500KB 이하의 파일만 넣을 수 있습니다. ");

    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
    onChange?.(e);
  };

  useEffect(() => {
    return () => {
      if (preview && preview !== defaultValue) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview, defaultValue]);

  return (
    <>
      <img
        src={preview || "/default_profile.png"}
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
        onChange={handleImageChange}
      />
    </>
  );
}
