import { Link } from "react-router-dom";

export default function SignUpCaption() {
  return (
    <p className="text-caption text-center">
      이미 계정이 있으신가요?
      <Link
        to="/sign-in"
        className="text-primary underline-offset-4 hover:underline ml-2"
      >
        로그인
      </Link>
    </p>
  );
}
