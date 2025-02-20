import Button from "@/components/commons/Button";
import AuthInput from "@/components/features/auth/AuthInput";
import useSignInForm from "@/libs/hooks/useSignInForm";

export default function SignInForm() {
  const {
    formData,
    errorMessage,
    onChangeHandler,
    onBlurHandler,
    onSubmitHandler,
  } = useSignInForm();

  return (
    <form
      onSubmit={onSubmitHandler}
      className="space-y-4 bg-gray-50 p-4 rounded-lg shadow-md"
    >
      <AuthInput
        type="text"
        name="id"
        value={formData.id}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        placeholder="아이디"
        autoComplete="username"
        errorMessage={errorMessage.id}
      />
      <AuthInput
        type="password"
        name="password"
        value={formData.password}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        placeholder="비밀번호"
        autoComplete="new-password"
        errorMessage={errorMessage.password}
      />
      <Button type="submit" className="w-full">
        로그인
      </Button>
    </form>
  );
}
