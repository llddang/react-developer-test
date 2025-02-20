import { useState } from "react";
import {
  getSignInErrorMessage,
  isValidSignInFormData,
} from "@/libs/utils/auth.util";
import { SignInDto } from "@/types/dto/auth.dto";

export default function useSignInForm() {
  const [formData, setFormData] = useState<SignInDto>({
    id: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState<SignInDto>({
    id: "",
    password: "",
  });

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function onBlurHandler(e: React.FocusEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    if (isValidSignInFormData(name, value))
      return setErrorMessage((prev) => ({ ...prev, [name]: "" }));

    const errorMsg = getSignInErrorMessage(name);
    return setErrorMessage((prev) => ({ ...prev, [name]: errorMsg }));
  }

  function isInvalidFormData() {
    return Object.entries(formData).some(([name, value]) => {
      if (isValidSignInFormData(name, value)) return false;

      const errorMsg = getSignInErrorMessage(name);
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
