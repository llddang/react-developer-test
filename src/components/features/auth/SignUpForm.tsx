import Button from "@/components/commons/Button";
import AuthInput from "@/components/features/auth/AuthInput";
import useSignUpForm from "@/libs/hooks/useSignUpForm";

export default function SignUpForm() {
  const { errorMessage, onBlurHandler, onSubmitHandler } = useSignUpForm();

  return (
    <form onSubmit={onSubmitHandler} className="space-y-4 bg-gray-50 p-4 rounded-lg shadow-md">
      <AuthInput
        type="text"
        name="id"
        onBlur={onBlurHandler}
        placeholder="아이디"
        autoComplete="username"
        errorMessage={errorMessage.id}
      />
      <AuthInput
        type="password"
        name="password"
        onBlur={onBlurHandler}
        placeholder="비밀번호"
        autoComplete="new-password"
        errorMessage={errorMessage.password}
      />
      <AuthInput
        type="text"
        name="nickname"
        onBlur={onBlurHandler}
        placeholder="닉네임"
        errorMessage={errorMessage.nickname}
      />
      <Button type="submit" className="w-full">
        회원가입
      </Button>
    </form>
  );
}
