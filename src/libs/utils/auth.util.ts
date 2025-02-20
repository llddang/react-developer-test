const idRegex = /^[a-zA-Z0-9]{4,20}$/;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,16}$/;
const nicknameRegex = /^[a-zA-Z가-힣0-9]{1,10}$/;

export function isValidSignUpFormData(name: string, value: string) {
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

export function getSignUpErrorMessage(name: string) {
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

export function isValidSignInFormData(name: string, value: string) {
  switch (name) {
    case "id":
      return value !== "";
    case "password":
      return value !== "";
    default:
      return true;
  }
}

export function getSignInErrorMessage(name: string) {
  switch (name) {
    case "id":
      return "아이디를 입력해주세요.";
    case "password":
      return "비밀번호를 입력해주세요.";
    default:
      return "";
  }
}
