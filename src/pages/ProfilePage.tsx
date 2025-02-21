import ProfileForm from "@/components/features/auth/ProfileForm";

export default function ProfilePage() {
  return (
    <div className="bg-white max-w-md min-w-[300px] mx-auto p-8 shadow-lg rounded-lg space-y-4">
      <h1 className="text-2xl font-bold">프로필 수정</h1>
      <ProfileForm />
    </div>
  );
}
