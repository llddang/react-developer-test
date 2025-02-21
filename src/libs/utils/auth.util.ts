const idRegex = /^[a-zA-Z0-9]{4,20}$/;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,16}$/;
const nicknameRegex = /^[a-zA-Z가-힣0-9]{1,10}$/;

export function isInvalidAuth() {
  const token = localStorage.getItem("authToken");
  if (!token) return true;

  const tokenJson = parseJwt(token);
  if (!tokenJson) return true;

  return tokenJson.exp <= Math.floor(Date.now() / 1000);
}

export function parseJwt(token: string) {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch {
    return null;
  }
}

export function isValidUserField(name: string, value: string) {
  switch (name) {
    case "id":
      return idRegex.test(value);
    case "password":
      return passwordRegex.test(value);
    case "nickname":
      return nicknameRegex.test(value);
    default:
      return true;
  }
}

export function getUserErrorMessage(name: string) {
  switch (name) {
    case "id":
      return "아이디는 영문 또는 숫자로 4자에서 20자 이내로 입력해주세요.";
    case "password":
      return "비밀번호는 영문, 숫자를 포함하여 6자에서 16자 이내로 입력해주세요.";
    case "nickname":
      return "닉네임은 영문 또는 한글, 숫자로 1자에서 10자 이내로 입력해주세요.";
    default:
      return "";
  }
}
