import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignInMutate } from "@/libs/api/useAuth.api";
import { jsonServer } from "@/libs/api/jsonServer.axios";
import { SignInRequestDto } from "@/types/dto/auth.dto";
import { toast } from "react-toastify";

export default function useSignInForm() {
  const { mutate: signIn } = useSignInMutate();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState<SignInRequestDto>({
    id: "",
    password: "",
  });

  function isInvalidFormData(formData: SignInRequestDto) {
    return Object.entries(formData).some(([name, value]) => {
      if (value !== "") {
        setErrorMessage((prev) => ({ ...prev, [name]: "" }));
        return false;
      }

      const errorMsg = name === "id" ? "아이디를 입력해주세요." : "비밀번호를 입력해주세요";
      setErrorMessage((prev) => ({ ...prev, [name]: errorMsg }));
      return true;
    });
  }

  async function onSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formData: SignInRequestDto = {
      id: form.get("id") as string,
      password: form.get("password") as string,
    };
    if (isInvalidFormData(formData)) return;

    const { data } = await jsonServer.get(`/users?id=${formData.id}`);
    if (data.length === 0) return toast.error("존재하지 않는 회원입니다.");

    signIn(formData, {
      onSuccess: () => {
        toast.success("로그인 성공");
        navigate("/");
      },
      onError: (e) => {
        toast.error(e.message);
      },
    });
  }

  return {
    errorMessage,
    onSubmitHandler,
  };
}
