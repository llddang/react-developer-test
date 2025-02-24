import Button from "@/components/commons/Button";
import ImageInput from "@/components/commons/ImageInput";
import AuthInput from "@/components/features/auth/AuthInput";
import useProfileForm from "@/libs/hooks/useProfileForm";

export default function ProfileForm() {
  const { initialFormData, errorMessage, onSubmitHandler } = useProfileForm();

  return (
    <form onSubmit={onSubmitHandler} className="m-3 space-y-4 [&_input]:mb-4 [&_label]:text-sm">
      <label htmlFor="avatar">프로필</label>
      {initialFormData?.avatar && (
        <ImageInput id="avatar" name="avatar" defaultValue={initialFormData.avatar} />
      )}
      <label htmlFor="nickname">닉네임</label>
      <AuthInput
        id="nickname"
        name="nickname"
        defaultValue={initialFormData?.nickname}
        errorMessage={errorMessage.nickname}
        placeholder="nickname"
      />
      <Button className="w-full">프로필 업데이트</Button>
    </form>
  );
}
