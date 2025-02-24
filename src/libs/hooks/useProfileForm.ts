import { useState, useMemo, useEffect } from "react";
import { useProfileMutate, useProfileQuery } from "@/libs/api/useAuth.api";
import { getUserErrorMessage, isValidUserField } from "@/libs/utils/auth.util";
import { useUpdateUserMutation } from "@/libs/api/useUser.api";
import { ProfileRequestDto } from "@/types/dto/auth.dto";

interface ProfileDto {
  avatar: string | null;
  nickname: string;
}

export default function useProfileForm() {
  const { data: profile } = useProfileQuery();
  const { mutate: updateProfile } = useProfileMutate();
  const { mutate: updateJsonUser } = useUpdateUserMutation();

  const initialFormData = useMemo(() => {
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
    const form = new FormData(e.currentTarget);
    const formData = {
      nickname: form.get("nickname") as string,
      avatar: form.get("avatar") as File,
    };

    if (isInvalidFormData(formData)) return;

    updateProfile(formData, {
      onSuccess: () => {
        alert("프로필이 갱신되었습니다!");
      },
      onError: (err) => {
        alert(err.message);
      },
    });
  }

  useEffect(() => {
    return () => {
      if (profile) updateJsonUser(profile);
    };
  }, [profile, updateJsonUser]);

  return { initialFormData, errorMessage, onSubmitHandler };
}
