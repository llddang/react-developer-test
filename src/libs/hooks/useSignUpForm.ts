import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignUpMutate } from "@/libs/api/useAuth.api";
import { isValidUserField, getUserErrorMessage } from "@/libs/utils/auth.util";
import { SignUpRequestDto } from "@/types/dto/auth.dto";
import { useCreateUserMutation } from "@/libs/api/useUser.api";
import { toast } from "react-toastify";

export default function useSignUpForm() {
  const { mutate: signUp } = useSignUpMutate();
  const { mutate: createJsonUser } = useCreateUserMutation();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState<SignUpRequestDto>({
    id: "",
    password: "",
    nickname: "",
  });

  function onBlurHandler(e: React.FocusEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    if (isValidUserField(name, value)) return setErrorMessage((prev) => ({ ...prev, [name]: "" }));

    const errorMsg = getUserErrorMessage(name);
    return setErrorMessage((prev) => ({ ...prev, [name]: errorMsg }));
  }

  function isInvalidFormData(formData: SignUpRequestDto) {
    return Object.entries(formData).some(([name, value]) => {
      if (isValidUserField(name, value)) return false;

      const errorMsg = getUserErrorMessage(name);
      setErrorMessage((prev) => ({ ...prev, [name]: errorMsg }));
      return true;
    });
  }

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formData: SignUpRequestDto = {
      id: form.get("id") as string,
      password: form.get("password") as string,
      nickname: form.get("nickname") as string,
    };
    if (isInvalidFormData(formData)) return;

    signUp(formData, {
      onSuccess: () => {
        toast.success("회원가입 성공");
        createJsonUser({ id: formData.id, nickname: formData.nickname, avatar: null });
        navigate("/sign-in");
      },
      onError: (e) => {
        toast.error(e.message);
      },
    });
  }

  return {
    errorMessage,
    onBlurHandler,
    onSubmitHandler,
  };
}
