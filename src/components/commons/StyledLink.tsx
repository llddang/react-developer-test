import { Link, LinkProps } from "react-router-dom";

export default function StyledLink({ to, className, ...props }: LinkProps) {
  return (
    <Link
      to={to}
      className={`${className} text-primary underline-offset-4 hover:underline`}
      {...props}
    />
  );
}
