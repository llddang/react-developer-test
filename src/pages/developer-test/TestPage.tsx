import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/commons/Button";
import TestProgress from "@/components/features/developer-test/TestProgress";
import { initialQuestion, questions } from "@/data/questions.data";
import { calculateDeveloperType, isValidAnswerTypeId } from "@/libs/utils/developer-test.utils";
import { PersonalityTypeScores } from "@/types/developer-test.type";
import { prefetchTestResult, useCreateTestResultMutation } from "@/libs/api/useTestResult.api";
import { useUserStore } from "@/stores/user.store";

export default function TestPage() {
  const [questionId, setQuestionId] = useState(1);
  const [answers, setAnswers] = useState(answerInitialValue);
  const navigate = useNavigate();

  const question = questions.find((q) => q.id === questionId) ?? initialQuestion;

  const { mutate: createResultTest } = useCreateTestResultMutation();
  const user = useUserStore().user;

  function handleAnswerClick(e: React.MouseEvent<HTMLButtonElement>) {
    const { type } = e.currentTarget.dataset;
    if (!type || !isValidAnswerTypeId(type)) return;

    if (questionId >= 15) return goResultPage();

    setQuestionId((prev) => prev + 1);
    setAnswers((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  }

  function goResultPage() {
    const developerTypeId = calculateDeveloperType(answers);
    createResultTest(
      { type: developerTypeId, userId: user.id },
      {
        onSuccess: (res) => {
          prefetchTestResult(res.id);
          navigate(`/results/${res.id}`);
        },
      }
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg px-8 py-4">
      <h3 className="text-lg font-semibold mb-8">{question.question}</h3>
      <Button
        variant="outline"
        data-type={question.A.type}
        onClick={handleAnswerClick}
        className="w-full mb-4 text-text text-sm sm:text-base !text-wrap !h-fit"
      >
        {question.A.answer}
      </Button>
      <Button
        variant="outline"
        data-type={question.B.type}
        onClick={handleAnswerClick}
        className="w-full mb-8 text-text text-sm sm:text-base !text-wrap !h-fit"
      >
        {question.B.answer}
      </Button>
      <TestProgress progress={questionId} />
    </div>
  );
}

const answerInitialValue: PersonalityTypeScores = {
  E: 0,
  I: 0,
  T: 0,
  F: 0,
  J: 0,
  P: 0,
};
