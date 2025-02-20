import SignInCaption from "@/components/features/auth/SignInCaption";
import SignInForm from "@/components/features/auth/SignInForm";

export default function SignIn() {
  return (
    <div className="bg-white max-w-md min-w-[300px] mx-auto p-8 shadow-lg rounded-lg space-y-4">
      <h1 className="text-2xl font-bold">로그인</h1>
      <SignInForm />
      <SignInCaption />
    </div>
  );
}
