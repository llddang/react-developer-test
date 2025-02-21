import Button from "@/components/commons/Button";
import StyledLink from "@/components/commons/StyledLink";

export default function Header() {
  const isAuth = true;
  return (
    <header className="h-15 p-4 shadow-md">
      <nav className="flex justify-between items-center mx-4 lg:max-w-5xl lg:mx-auto">
        <StyledLink to="/">홈</StyledLink>
        {isAuth ? <AuthorizedSession /> : <UnauthorizedSession />}
      </nav>
    </header>
  );
}

function AuthorizedSession() {
  return (
    <div className="relative flex items-center pr-26 gap-4">
      <StyledLink to="/profile">프로필</StyledLink>
      <StyledLink to="/test">테스트</StyledLink>
      <StyledLink to="/results">결과 보기</StyledLink>
      <Button className="absolute right-0 top-1/2 -translate-y-1/2">
        로그아웃
      </Button>
    </div>
  );
}

function UnauthorizedSession() {
  return (
    <div>
      <StyledLink to="/sign-in">로그인</StyledLink> /
      <StyledLink to="/sign-up">회원가입</StyledLink>
    </div>
  );
}
