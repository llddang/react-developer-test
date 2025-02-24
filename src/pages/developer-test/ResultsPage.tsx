import Loading from "@/components/commons/Loading";
import ResultsCard from "@/components/features/developer-test/ResultsCard";
import { useInfiniteTestResults } from "@/libs/api/useTestResult.api";
import { useUserStore } from "@/stores/user.store";
import { Fragment, useCallback, useRef } from "react";

export default function ResultsPage() {
  const user = useUserStore().user;
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteTestResults({
    limit: 20,
  });

  const observerRef = useRef<IntersectionObserver>(null);
  const lastItemRef = useCallback(
    (node: HTMLElement | null) => {
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) fetchNextPage();
      });
      if (node) observerRef.current.observe(node);
    },
    [hasNextPage, isFetchingNextPage, fetchNextPage]
  );

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">모든 테스트 결과</h1>
      <ul className="[&>*]:mb-4">
        {data.pages.map((page, pageIdx) => (
          <Fragment key={pageIdx}>
            {page.results.map((info, idx) => {
              if (pageIdx !== data.pages.length - 1 || idx !== page.results.length - 1)
                return <ResultsCard key={info.id} {...info} isMine={user.id === info.userId} />;
              return (
                <ResultsCard
                  key={info.id}
                  {...info}
                  isMine={user.id === info.userId}
                  ref={lastItemRef}
                />
              );
            })}
          </Fragment>
        ))}
      </ul>
      {hasNextPage && <Loading />}
    </div>
  );
}
