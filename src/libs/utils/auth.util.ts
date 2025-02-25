const idRegex = /^[a-zA-Z0-9]{4,20}$/;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,16}$/;
const nicknameRegex = /^[a-zA-Z가-힣0-9]{1,10}$/;

/**
 * JWT 토큰을 파싱하는 함수
 * @param {string} token - 파싱할 JWT 토큰
 * @returns {Object | null} 파싱된 JWT 페이로드 객체, 실패 시 null 반환
 */
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

/**
 * 사용자 입력의 유효성을 검사하는 함수
 * @param {string} name - 검사할 필드명 ('id', 'password', 'nickname')
 * @param {string} value - 검사할 필드 값
 * @returns {boolean} 유효성 검사 결과 (유효하면 true, 유효하지 않으면 false)
 */
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

/**
 * 사용자 입력 유효성 검사 실패 시 표시할 오류 메시지를 반환하는 함수
 * @param {string} name - 오류 메시지를 조회할 필드명 ('id', 'password', 'nickname')
 * @returns {string} 해당 필드의 오류 메시지, 일치하는 필드가 없으면 빈 문자열 반환
 */
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
