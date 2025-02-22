import Button from "@/components/commons/Button";
import ButtonLink from "@/components/commons/ButtonLink";
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
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4 md:mb-8">
        <img
          src={developType.img}
          alt={`${developType.name} 이미지`}
          className="w-4/5 max-w-[300px]"
        />
        <ul className="text-sm md:text-base">
          {developType.description.map((info) => (
            <li key={info} className="my-2 ml-6 list-disc">
              {info}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap justify-around items-end mx-4">
        <div className="p-4 w-fit flex flex-col items-center border border-primary rounded-lg">
          <p className="font-semibold">나의 짝꿍</p>
          <img
            src={developType.goodMatch.img}
            alt={developType.goodMatch.name}
            className="w-full max-w-[120px]"
          />
          <p className="text-xs sm:text-base mt-2">
            {developType.goodMatch.name}
          </p>
        </div>
        <div className="p-4 w-fit flex flex-col items-center  border border-primary rounded-lg">
          <p className="font-semibold">나와 상극</p>
          <img
            src={developType.badMatch.img}
            alt={developType.badMatch.name}
            className="w-full max-w-[120px]"
          />
          <p className="text-xs sm:text-base  mt-2">
            {developType.badMatch.name}
          </p>
        </div>
        <div className="flex sm:flex-col gap-4 mt-4">
          <ButtonLink to="/test">테스트 다시 하기</ButtonLink>
          <Button variant="outline" onClick={handleShareLinkClick}>
            테스트 공유 하기
          </Button>
        </div>
      </div>
    </div>
  );
}
