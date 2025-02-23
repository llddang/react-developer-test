import { cva, VariantProps } from "class-variance-authority";

const avatarIconVariants = cva(
  "border-2 border-primary rounded-full aspect-square overflow-hidden",
  {
    variants: {
      size: {
        default: "w-9 h-9",
        sm: "w-8 h-8",
        lg: "w-10 h-10",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

type AvatarIconProps = VariantProps<typeof avatarIconVariants> &
  React.ImgHTMLAttributes<HTMLImageElement>;
export default function AvatarIcon({ size, className, ...props }: AvatarIconProps) {
  return (
    <div className={avatarIconVariants({ className, size })}>
      <img {...props} className="w-full h-full object-cover object-center" />
    </div>
  );
}
