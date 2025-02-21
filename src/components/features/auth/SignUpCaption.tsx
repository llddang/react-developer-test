import StyledLink from "@/components/commons/StyledLink";

export default function SignUpCaption() {
  return (
    <p className="text-caption text-center [&_a]:ml-2">
      이미 계정이 있으신가요?
      <StyledLink to="/sign-in">로그인</StyledLink>
    </p>
  );
}
