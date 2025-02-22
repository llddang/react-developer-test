import Button from "@/components/commons/Button";
import ButtonLink from "@/components/commons/ButtonLink";
import ResultMatchCard from "@/components/features/test/ResultMatchCard";
import ResultMyTypeCard from "@/components/features/test/ResultMyTypeCard";
import { calculateDeveloperType } from "@/libs/utils/question.utils";
import { useLocation } from "react-router-dom";

export default function ResultPage() {
  const location = useLocation();
  const { answers } = location.state;

  const developType = calculateDeveloperType(
    answers.EI,
    answers.TF,
    answers.JP
  );

  async function handleShareLinkClick() {
    try {
      await navigator.clipboard.writeText("hello world");
      alert("링크가 복사되었습니다.");
    } catch {
      alert("failed");
    }
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h3 className="text-2xl font-semibold">{developType.name} 개발자</h3>
      <ResultMyTypeCard
        name={developType.name}
        img={developType.img}
        description={developType.description}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-end justify-items-center">
        <ResultMatchCard
          matchTitle="나의 짝꿍"
          name={developType.goodMatch.name}
          img={developType.goodMatch.img}
        />
        <ResultMatchCard
          matchTitle="나와 상극"
          name={developType.badMatch.name}
          img={developType.badMatch.img}
        />
        <div className="col-span-2 md:col-span-1 flex flex-wrap md:flex-col w-fit gap-4">
          <ButtonLink to="/test">테스트 다시 하기</ButtonLink>
          <Button variant="outline" onClick={handleShareLinkClick}>
            테스트 공유 하기
          </Button>
        </div>
      </div>
    </div>
  );
}
