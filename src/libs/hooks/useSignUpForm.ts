import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignUpMutate } from "@/libs/api/useAuth.api";
import { isValidUserField, getUserErrorMessage } from "@/libs/utils/auth.util";
import { SignUpDto } from "@/types/dto/auth.dto";

export default function useSignUpForm() {
  const { mutate: signUp } = useSignUpMutate();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SignUpDto>({
    id: "",
    password: "",
    nickname: "",
  });
  const [errorMessage, setErrorMessage] = useState<SignUpDto>({
    id: "",
    password: "",
    nickname: "",
  });

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function onBlurHandler(e: React.FocusEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    if (isValidUserField(name, value))
      return setErrorMessage((prev) => ({ ...prev, [name]: "" }));

    const errorMsg = getUserErrorMessage(name);
    return setErrorMessage((prev) => ({ ...prev, [name]: errorMsg }));
  }

  function isInvalidFormData() {
    return Object.entries(formData).some(([name, value]) => {
      if (isValidUserField(name, value)) return false;

      const errorMsg = getUserErrorMessage(name);
      setErrorMessage((prev) => ({ ...prev, [name]: errorMsg }));
      return true;
    });
  }

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isInvalidFormData()) return;

    signUp(formData, {
      onSuccess: () => {
        alert("회원가입 성공");
        navigate("/sign-in");
      },
      onError: (e) => {
        alert(e.message);
      },
    });
  }

  return {
    formData,
    errorMessage,
    onChangeHandler,
    onBlurHandler,
    onSubmitHandler,
  };
}
