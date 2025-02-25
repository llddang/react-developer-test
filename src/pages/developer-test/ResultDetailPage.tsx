import { useParams } from "react-router-dom";
import ButtonLink from "@/components/commons/ButtonLink";
import ResultDetailMatchCard from "@/components/features/developer-test/ResultDetailMatchCard";
import ResultDetailMyTypeCard from "@/components/features/developer-test/ResultDetailMyTypeCard";
import { developerTypes } from "@/data/developer-type.data";
import { useTestResultQuery } from "@/libs/api/useTestResult.api";
import { useUserStore } from "@/stores/user.store";
import KakaoShareButton from "@/components/commons/KakaoShareButton";

export default function ResultDetailPage() {
  const { id: testResultId } = useParams();
  const { data: result } = useTestResultQuery({ id: Number(testResultId) });
  const user = useUserStore().user;

  const developerType = developerTypes[result.type];

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
          {result.userId === user.id && <KakaoShareButton type={result.type} />}
        </div>
      </div>
    </div>
  );
}
