import { useState } from "react";
import {
  getSignUpErrorMessage,
  isValidSignUpFormData,
} from "@/libs/utils/auth.util";
import { SignUpDto } from "@/types/dto/auth.dto";

export default function useSignUpForm() {
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

    if (isValidSignUpFormData(name, value))
      return setErrorMessage((prev) => ({ ...prev, [name]: "" }));

    const errorMsg = getSignUpErrorMessage(name);
    return setErrorMessage((prev) => ({ ...prev, [name]: errorMsg }));
  }

  function isInvalidFormData() {
    return Object.entries(formData).some(([name, value]) => {
      if (isValidSignUpFormData(name, value)) return false;

      const errorMsg = getSignUpErrorMessage(name);
      setErrorMessage((prev) => ({ ...prev, [name]: errorMsg }));
      return true;
    });
  }

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isInvalidFormData()) return;

    // TODO: API 연결
  }

  return {
    formData,
    errorMessage,
    onChangeHandler,
    onBlurHandler,
    onSubmitHandler,
  };
}
