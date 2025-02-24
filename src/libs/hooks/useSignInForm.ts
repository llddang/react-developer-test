import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignInMutate } from "@/libs/api/useAuth.api";
import { jsonServer } from "@/libs/api/jsonServer.axios";
import { SignInDto } from "@/types/dto/auth.dto";

export default function useSignInForm() {
  const { mutate: signIn } = useSignInMutate();
  const navigate = useNavigate();
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

  function isInvalidFormData() {
    return Object.entries(formData).some(([name, value]) => {
      if (value !== "") return false;

      const errorMsg = name === "id" ? "아이디를 입력해주세요." : "비밀번호를 입력해주세요";
      setErrorMessage((prev) => ({ ...prev, [name]: errorMsg }));
      return true;
    });
  }

  async function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isInvalidFormData()) return;

    const { data } = await jsonServer.get(`/user?id=${formData.id}`);
    if (data.length === 0) return alert("존재하지 않는 회원입니다.");

    signIn(formData, {
      onSuccess: () => {
        alert("로그인 성공");
        navigate("/");
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
    onSubmitHandler,
  };
}
