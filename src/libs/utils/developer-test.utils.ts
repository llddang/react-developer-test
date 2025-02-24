import {
  DEVELOPER_TYPE,
  DeveloperTypeId,
  PERSONALITY_TYPE,
  PersonalityTypeId,
  PersonalityTypeScores,
} from "@/types/developer-test.type";

/**
 * 진행 상태에 따른 너비 클래스를 반환하는 함수
 * @param progress 현재 진행된 질문 번호 (1-15)
 * @returns Tailwind CSS after:w-[x%] 클래스 문자열
 */
export function getAfterWidth(progress: number) {
  const progressMap = [
    "after:w-[0%]",
    "after:w-[6.67%]",
    "after:w-[13.33%]",
    "after:w-[20%]",
    "after:w-[26.67%]",
    "after:w-[33.33%]",
    "after:w-[40%]",
    "after:w-[46.67%]",
    "after:w-[53.33%]",
    "after:w-[60%]",
    "after:w-[66.67%]",
    "after:w-[73.33%]",
    "after:w-[80%]",
    "after:w-[86.67%]",
    "after:w-[93.33%]",
    "after:w-[100%]",
  ];

  if (progress < 1) return "after:w-[0%]";
  if (progress > 15) return "after:w-[100%]";

  return progressMap[progress] || "after:w-[0%]";
}

/**
 * 사용자의 성향 점수를 기반으로 개발자 유형을 결정하는 함수
 *
 * @param EI - 외향(E)/내향(I) 성향 점수. 양수면 외향(E), 음수면 내향(I)
 * @param TF - 사고(T)/감정(F) 성향 점수. 양수면 사고(T), 음수면 감정(F)
 * @param JP - 판단(J)/인식(P) 성향 점수. 양수면 판단(J), 음수면 인식(P)
 * @returns DeveloperTypeId - 해당하는 개발자 유형 ID
 *
 * @example
 * const devTypeId = calculateDeveloperType(-5, 10, 3); ITJ 반환
 */
export function calculateDeveloperType(answers: PersonalityTypeScores): DeveloperTypeId {
  const type =
    (answers.E > answers.I ? "E" : "I") +
    (answers.T > answers.F ? "T" : "F") +
    (answers.J > answers.P ? "J" : "P");

  return type as DeveloperTypeId;
}

/**
 * 입력된 값이 AnswerType의 유효한 키인지 확인하는 타입 가드 함수
 * @param value 확인할 값
 * @returns 값이 AnswerType의 키인지 여부
 */
export function isValidAnswerTypeId(value: unknown): value is PersonalityTypeId {
  return (
    typeof value === "string" &&
    Object.values(PERSONALITY_TYPE).includes(value as PersonalityTypeId)
  );
}

export function isValidDeveloperTypeId(value: unknown): value is DeveloperTypeId {
  return (
    typeof value === "string" && Object.values(DEVELOPER_TYPE).includes(value as DeveloperTypeId)
  );
}
