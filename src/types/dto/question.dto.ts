export interface QuestionDto {
  id: number;
  question: string;
  A: { answer: string; type: string };
  B: { answer: string; type: string };
}
