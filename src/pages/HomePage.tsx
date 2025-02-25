import ButtonLink from "@/components/commons/ButtonLink";

export default function HomePage() {
  return (
    <div className="text-center space-y-8">
      <h1 className="text-4xl font-bold">개발자 유형 테스트</h1>
      <p className="text-caption">자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해주세요.</p>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {testDescribe.map((info) => (
          <li key={info.id} className="bg-white shadow-lg rounded-lg p-6 text-left space-y-4">
            <h3 className="text-lg font-semibold text-primary">{info.title}</h3>
            <p className="text-caption text-sm">{info.description}</p>
          </li>
        ))}
      </ul>
      <ButtonLink to="/test" className="!rounded-3xl">
        내 성격 알아보러 가기
      </ButtonLink>
    </div>
  );
}

const testDescribe = [
  {
    id: 1,
    title: "개발자 유형 검사",
    description: "자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지 알아보세요.",
  },
  {
    id: 2,
    title: "개발자 유형 이해",
    description: "다른 사람들이 어떻게 행동하는지 이해하는 데 도움을 줄 수 있습니다.",
  },
  {
    id: 3,
    title: "팀 평가",
    description: "팀 내에서 자신과 동료들의 개발자을 이해하고 협력할 수 있는 방법을 배워보세요.",
  },
];
