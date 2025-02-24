import ResultsCard from "@/components/features/developer-test/ResultsCard";
import { useTestResultByPageQuery } from "@/libs/api/useTestResult.api";
import { useUserStore } from "@/stores/user.store";

export default function ResultsPage() {
  const user = useUserStore().user;
  const { data: developerTestResults } = useTestResultByPageQuery({});

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">모든 테스트 결과</h1>
      <ul className="[&>*]:mb-4">
        {developerTestResults && developerTestResults.length !== 0 ? (
          developerTestResults.map((info) => (
            <ResultsCard key={info.id} {...info} isMine={user.userId === info.userId} />
          ))
        ) : (
          <p>테스트 결과가 없습니다!</p>
        )}
      </ul>
    </div>
  );
}
