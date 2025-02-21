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
