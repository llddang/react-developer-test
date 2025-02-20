import { Link } from "react-router-dom";

export default function SignInCaption() {
  return (
    <p className="text-caption text-center">
      계정이 없으신가요?
      <Link
        to="/sign-up"
        className="text-primary underline-offset-4 hover:underline ml-2"
      >
        회원가입
      </Link>
    </p>
  );
}
