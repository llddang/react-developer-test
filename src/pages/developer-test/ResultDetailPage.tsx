import { useParams } from "react-router-dom";
import Button from "@/components/commons/Button";
import ButtonLink from "@/components/commons/ButtonLink";
import ResultDetailMatchCard from "@/components/features/developer-test/ResultDetailMatchCard";
import ResultDetailMyTypeCard from "@/components/features/developer-test/ResultDetailMyTypeCard";
import { isValidDeveloperTypeId } from "@/libs/utils/developer-test.utils";
import { developerTypes } from "@/data/developer-type.data";

export default function ResultDetailPage() {
  const { type } = useParams();
  if (!isValidDeveloperTypeId(type)) return <>찾을 수 없습니다.</>;

  const developerType = developerTypes[type];

  async function handleShareLinkClick() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("링크가 복사되었습니다.");
    } catch {
      alert("failed");
    }
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h3 className="text-2xl font-semibold">{developerType.name} 개발자</h3>
      <ResultDetailMyTypeCard
        name={developerType.name}
        img={developerType.img}
        description={developerType.description}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-end justify-items-center">
        <ResultDetailMatchCard
          matchTitle="나의 짝꿍"
          name={developerType.goodMatch.name}
          img={developerType.goodMatch.img}
        />
        <ResultDetailMatchCard
          matchTitle="나와 상극"
          name={developerType.badMatch.name}
          img={developerType.badMatch.img}
        />
        <div className="col-span-2 md:col-span-1  w-full flex flex-wrap md:flex-col justify-center md:items-end gap-4">
          <ButtonLink to="/test" size="sm">
            테스트 다시 하기
          </ButtonLink>
          <Button variant="outline" onClick={handleShareLinkClick} size="sm">
            테스트 공유 하기
          </Button>
        </div>
      </div>
    </div>
  );
}
