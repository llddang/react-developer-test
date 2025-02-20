const idRegex = /^[a-zA-Z]{2,10}$/;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,16}$/;
const nicknameRegex = /^[a-zA-Z가-힣]{1,10}$/;

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
      return "ID는 영문으로 2자에서 10자 이내로 입력해주세요.";
    case "password":
      return "비밀번호는 영문, 숫자를 포함하여 6자에서 16자 이내로 입력해주세요.";
    case "nickname":
      return "닉네임은 영문 또는 한글로 1자에서 10자 이내로 입력해주세요.";
    default:
      return "";
  }
}
