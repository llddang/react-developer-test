import Input from "@/components/commons/Input";
import Button from "@/components/commons/Button";
import ImageInput from "@/components/commons/ImageInput";

export default function ProfilePage() {
  return (
    <div className="bg-white max-w-md min-w-[300px] mx-auto p-8 shadow-lg rounded-lg space-y-4">
      <h1 className="text-2xl font-bold">프로필 수정</h1>
      <form className="m-3 space-y-4 [&_input]:mb-4 [&_label]:text-sm">
        <label htmlFor="profile">프로필</label>
        <ImageInput />
        <label htmlFor="nickname">닉네임</label>
        <Input id="nickname" placeholder="nickname" />
        <Button className="w-full">프로필 업데이트</Button>
      </form>
    </div>
  );
}
