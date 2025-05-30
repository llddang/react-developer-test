import Button from "@/components/commons/Button";
import StyledLink from "@/components/commons/StyledLink";
import { prefetchProfile } from "@/libs/api/useAuth.api";
import { useTokenStore } from "@/stores/token.store";
import { useUserStore } from "@/stores/user.store";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const isAuth = useTokenStore().isValidToken();

  return (
    <header className="h-15 p-4 shadow-md">
      <nav className="max-w-5xl min-w-[320px] flex justify-between items-center lg:mx-auto">
        <StyledLink to="/">홈</StyledLink>
        {isAuth ? <AuthorizedSession /> : <UnauthorizedSession />}
      </nav>
    </header>
  );
}

function AuthorizedSession() {
  const navigate = useNavigate();

  const clearToken = useTokenStore().clearToken;
  const clearUserInfo = useUserStore().clearUserInfo;

  function handleSignOutClick() {
    clearToken();
    clearUserInfo();
    navigate("/");
  }

  return (
    <div className="relative flex items-center pr-20 gap-4">
      <StyledLink to="/profile" onMouseEnter={prefetchProfile}>
        프로필
      </StyledLink>
      <StyledLink to="/test">테스트</StyledLink>
      <StyledLink to="/results">결과 보기</StyledLink>
      <Button
        onClick={handleSignOutClick}
        size="sm"
        className="absolute right-0 top-1/2 -translate-y-1/2"
      >
        로그아웃
      </Button>
    </div>
  );
}

function UnauthorizedSession() {
  return (
    <div className="space-x-2">
      <StyledLink to="/sign-in">로그인</StyledLink>
      <span>/</span>
      <StyledLink to="/sign-up">회원가입</StyledLink>
    </div>
  );
}
