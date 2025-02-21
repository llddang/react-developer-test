import { buttonVariants } from "@/styles/button.cva";
import { VariantProps } from "class-variance-authority";

type ButtonProps = VariantProps<typeof buttonVariants> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
export default function Button({
  variant,
  size,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  );
}
