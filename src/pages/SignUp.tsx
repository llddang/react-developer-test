import SignUpCaption from "@/components/features/auth/SignUpCaption";
import SignUpForm from "@/components/features/auth/SignUpForm";

export default function SignUp() {
  return (
    <div className="bg-white max-w-md min-w-[300px] mx-auto p-8 shadow-lg rounded-lg space-y-4">
      <h1 className="text-2xl font-bold">회원가입</h1>
      <SignUpForm />
      <SignUpCaption />
    </div>
  );
}
