import StyledLink from "@/components/commons/StyledLink";

export default function SignInCaption() {
  return (
    <p className="text-caption text-center [&_a]:ml-2">
      계정이 없으신가요?
      <StyledLink to="/sign-up">회원가입</StyledLink>
    </p>
  );
}
