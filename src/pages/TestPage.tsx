import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/commons/Button";
import TestProgress from "@/components/features/test/TestProgress";
import { initialQuestion, questions } from "@/data/questions.data";
import { QuestionDto } from "@/types/dto/question.dto";

export default function TestPage() {
  const [questionId, setQuestionId] = useState(1);
  const [question, setQuestion] = useState<QuestionDto>(initialQuestion);
  const [answers, setAnswers] = useState({ EI: 0, TF: 0, JP: 0 });

  const navigate = useNavigate();

  function handleAnswerClick(e: React.MouseEvent<HTMLButtonElement>) {
    const { type } = e.currentTarget.dataset;
    if (!type) return;

    if (questionId >= 15) return navigate("/result", { state: { answers } });

    setQuestionId((prev) => prev + 1);

    if (type === "E") setAnswers((prev) => ({ ...prev, EI: prev.EI + 1 }));
    else if (type === "I") setAnswers((prev) => ({ ...prev, EI: prev.EI - 1 }));
    else if (type === "T") setAnswers((prev) => ({ ...prev, TF: prev.TF + 1 }));
    else if (type === "F") setAnswers((prev) => ({ ...prev, TF: prev.TF - 1 }));
    else if (type === "J") setAnswers((prev) => ({ ...prev, JP: prev.JP + 1 }));
    else if (type === "P") setAnswers((prev) => ({ ...prev, JP: prev.JP - 1 }));
  }

  useEffect(() => {
    const question = questions.find((q) => q.id === questionId);
    if (!question) return;

    setQuestion(question);
  }, [questionId]);

  return (
    <div className="w-full max-w-2xl mx-auto bg-white shadow-md rounded-lg px-8 py-4">
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
