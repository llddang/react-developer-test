import { useState, useEffect, useRef } from "react";
import { useProfileMutate, useProfileQuery } from "@/libs/api/useAuth.api";
import { getUserErrorMessage, isValidUserField } from "@/libs/utils/auth.util";

interface ProfileDto {
  avatar: string;
  nickname: string;
}

export default function useProfileForm() {
  const { data: profile } = useProfileQuery();
  const { mutate: updateProfile } = useProfileMutate();
  const previousFormData = useRef<ProfileDto>({ nickname: "", avatar: "" });

  const [formData, setFormData] = useState<ProfileDto>({
    nickname: "",
    avatar: "",
  });
  const [errorMessage, setErrorMessage] = useState<ProfileDto>({
    nickname: "",
    avatar: "",
  });

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    switch (name) {
      case "nickname": {
        setFormData((prev) => ({
          nickname: value,
          avatar: prev.avatar,
        }));
        return;
      }
      case "avatar": {
        const file = e.target.files?.[0];
        if (!file) return;
        if (file.size >= (1024 * 1024) / 2)
          return alert("500KB 이하의 파일만 넣을 수 있습니다. ");
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData((prev) => ({
            nickname: prev.nickname,
            avatar: reader.result as string,
          }));
        };
        reader.readAsDataURL(file);
        break;
      }
    }
  }

  function isInvalidFormData() {
    if (
      previousFormData.current.nickname === formData.nickname &&
      previousFormData.current.avatar === formData.avatar
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

    if (isInvalidFormData()) return;

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
    if (!profile) return;
    const newProfile = {
      avatar: profile.avatar || "",
      nickname: profile.nickname,
    };
    setFormData(newProfile);
    previousFormData.current = newProfile;
  }, [profile]);

  return { formData, errorMessage, onChangeHandler, onSubmitHandler };
}
