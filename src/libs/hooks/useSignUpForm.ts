import { useState } from "react";
import {
  getSignUpErrorMessage,
  isValidSignUpFormData,
} from "@/libs/utils/signUp.util";
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

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function focusOutHandler(e: React.FocusEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    if (isValidSignUpFormData(name, value))
      return setErrorMessage((prev) => ({ ...prev, [name]: "" }));

    const errorMsg = getSignUpErrorMessage(name);
    return setErrorMessage((prev) => ({ ...prev, [name]: errorMsg }));
  }

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (Object.values(errorMessage).some((message) => message !== "")) return;

    // TODO: API 연결
  }

  return {
    formData,
    errorMessage,
    changeHandler,
    focusOutHandler,
    submitHandler,
  };
}
