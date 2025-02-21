import { cva, VariantProps } from "class-variance-authority";
import { Link, LinkProps } from "react-router-dom";

const buttonLinkVariants = cva(
  "whitespace-nowrap rounded-md disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white hover:bg-primary/80 active:bg-primary/90",
        outline:
          "border border-primary text-primary hover:text-white bg-white hover:bg-primary/30 active:bg-primary/10",
        secondary:
          "bg-secondary text-white hover:bg-secondary/80 active:bg-secondary/90",
        ghost: "hover:bg-primary/10 text-primary",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonLinkProps = VariantProps<typeof buttonLinkVariants> & LinkProps;
export default function ButtonLink({
  variant,
  size,
  className,
  to,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      to={to}
      className={buttonLinkVariants({ variant, size, className })}
      {...props}
    />
  );
}
