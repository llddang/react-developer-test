import { buttonVariants } from "@/styles/button.cva";
import { VariantProps } from "class-variance-authority";
import { Link, LinkProps } from "react-router-dom";

type ButtonLinkProps = VariantProps<typeof buttonVariants> & LinkProps;
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
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  );
}
