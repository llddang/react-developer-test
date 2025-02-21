import { useEffect, useState } from "react";
import Button from "@/components/commons/Button";
import { initialQuestion, questions } from "@/data/questions.data";
import { getAfterWidth } from "@/libs/utils/question.utils";
import { QuestionDto } from "@/types/dto/question.dto";
import { useNavigate } from "react-router-dom";

export default function TestPage() {
  const [questionId, setQuestionId] = useState(1);
  const [question, setQuestion] = useState<QuestionDto>(initialQuestion);
  const [answers, setAnswers] = useState({ EI: 0, TF: 0, JP: 0 });

  const navigate = useNavigate();

  function handleAnswerClick(type: string) {
    if (questionId >= 15) return navigate("/result", { state: { answers } });

    setQuestionId((prev) => prev + 1);
    switch (type) {
      case "E":
        return setAnswers((prev) => ({ ...prev, EI: prev.EI + 1 }));
      case "I":
        return setAnswers((prev) => ({ ...prev, EI: prev.EI - 1 }));
      case "T":
        return setAnswers((prev) => ({ ...prev, TF: prev.TF + 1 }));
      case "F":
        return setAnswers((prev) => ({ ...prev, TF: prev.TF - 1 }));
      case "J":
        return setAnswers((prev) => ({ ...prev, JP: prev.JP + 1 }));
      case "P":
        return setAnswers((prev) => ({ ...prev, JP: prev.JP - 1 }));
      default:
        return;
    }
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
        onClick={() => handleAnswerClick(question.A.type)}
        className="w-full mb-4 text-text"
      >
        {question.A.answer}
      </Button>
      <Button
        variant="outline"
        onClick={() => handleAnswerClick(question.B.type)}
        className="w-full mb-8 text-text"
      >
        {question.B.answer}
      </Button>
      <div
        className={`relative mx-4 h-4 rounded-2xl bg-primary/20 border border-primary/50 after:content-[''] after:absolute after:left-0 after:top-0 after:h-full after:bg-primary/50 after:rounded-2xl 
          ${getAfterWidth(questionId)}`}
      >
        <p
          className="absolute top-1/2 -translate-1/2 z-1"
          style={{ left: `${(questionId / 15) * 100}%` }}
        >
          💻
        </p>
      </div>
      <p className="text-center">
        <b className="text-lg">{questionId}</b> / 15
      </p>
    </div>
  );
}
