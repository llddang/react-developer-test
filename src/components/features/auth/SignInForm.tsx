import Button from "@/components/commons/Button";
import Input from "@/components/commons/Input";

export default function SignInForm() {
  return (
    <form className="space-y-4 bg-gray-50 p-4 rounded-lg shadow-md">
      <Input type="text" placeholder="아이디" />
      <Input type="password" placeholder="비밀번호" />
      <Button type="submit" className="w-full">
        로그인
      </Button>
    </form>
  );
}
