import Button from "@/components/commons/Button";
import ImageInput from "@/components/commons/ImageInput";
import AuthInput from "@/components/features/auth/AuthInput";
import useProfileForm from "@/libs/hooks/useProfileForm";

export default function ProfileForm() {
  const { formData, errorMessage, onChangeHandler, onSubmitHandler } =
    useProfileForm();

  return (
    <form
      onSubmit={onSubmitHandler}
      className="m-3 space-y-4 [&_input]:mb-4 [&_label]:text-sm"
    >
      <label htmlFor="avatar">프로필</label>
      <ImageInput
        id="avatar"
        name="avatar"
        value={formData.avatar}
        onChange={onChangeHandler}
      />
      <label htmlFor="nickname">닉네임</label>
      <AuthInput
        id="nickname"
        name="nickname"
        value={formData.nickname}
        onChange={onChangeHandler}
        errorMessage={errorMessage.nickname}
        placeholder="nickname"
      />
      <Button className="w-full">프로필 업데이트</Button>
    </form>
  );
}
