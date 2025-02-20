import Button from "@/components/commons/Button";
import SignUpInput from "@/components/features/auth/SignUpInput";
import useSignUpForm from "@/libs/hooks/useSignUpForm";

export default function SignUpForm() {
  const {
    formData,
    errorMessage,
    changeHandler,
    focusOutHandler,
    submitHandler,
  } = useSignUpForm();

  return (
    <form
      onSubmit={submitHandler}
      className="space-y-4 bg-gray-50 p-4 rounded-lg shadow-md"
    >
      <SignUpInput
        type="text"
        name="id"
        value={formData.id}
        onChange={changeHandler}
        onBlur={focusOutHandler}
        placeholder="아이디"
        autoComplete="username"
        errorMessage={errorMessage.id}
      />
      <SignUpInput
        type="password"
        name="password"
        value={formData.password}
        onChange={changeHandler}
        onBlur={focusOutHandler}
        placeholder="비밀번호"
        autoComplete="new-password"
        errorMessage={errorMessage.password}
      />
      <SignUpInput
        type="text"
        name="nickname"
        value={formData.nickname}
        onChange={changeHandler}
        onBlur={focusOutHandler}
        placeholder="닉네임"
        errorMessage={errorMessage.nickname}
      />
      <Button type="submit" className="w-full">
        회원가입
      </Button>
    </form>
  );
}
