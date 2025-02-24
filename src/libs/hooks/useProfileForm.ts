import { useState, useMemo } from "react";
import { useProfileMutate, useProfileQuery } from "@/libs/api/useAuth.api";
import { getUserErrorMessage, isValidUserField } from "@/libs/utils/auth.util";
import { ProfileRequestDto } from "@/types/dto/auth.dto";

interface ProfileDto {
  avatar: string | null;
  nickname: string;
}

export default function useProfileForm() {
  const { data: profile } = useProfileQuery();
  const { mutate: updateProfile } = useProfileMutate();

  const initialFormData = useMemo(() => {
    if (!profile) return { nickname: "", avatar: "" };
    return { nickname: profile.nickname, avatar: profile.avatar };
  }, [profile]);

  const [errorMessage, setErrorMessage] = useState<ProfileDto>({
    nickname: "",
    avatar: "",
  });

  function isInvalidFormData(formData: ProfileRequestDto) {
    if (
      initialFormData.nickname === formData.nickname &&
      (!formData.avatar || (formData.avatar.name === "" && formData.avatar.size === 0))
    )
      return true;

    return Object.entries(formData).some(([name, value]) => {
      if (isValidUserField(name, value)) {
        setErrorMessage((prev) => ({ ...prev, [name]: "" }));
        return false;
      }

      const errorMsg = getUserErrorMessage(name);
      setErrorMessage((prev) => ({ ...prev, [name]: errorMsg }));
      return true;
    });
  }

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const nickname = formData.get("nickname") as string;
    const avatar = formData.get("avatar") as File;

    if (isInvalidFormData({ nickname, avatar })) return;

    updateProfile(
      { avatar, nickname },
      {
        onSuccess: () => {
          alert("프로필이 갱신되었습니다!");
        },
        onError: (err) => {
          alert(err.message);
        },
      }
    );
  }

  return { initialFormData, errorMessage, onSubmitHandler };
}
