import Button from "@/components/commons/Button";
import { KAKAO_KEY } from "@/constants/env.constant";
import { useEffect } from "react";
const { Kakao } = window;

export default function KakaoShareButton() {
  const resultUrl = window.location.href;

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(KAKAO_KEY);
    console.log(Kakao.isInitialized());
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "나의 개발자 유형",
        description: "상황에 주어지는 문항에 답하며, 나의 개발 성향을 테스트해보세요!",
        imageUrl:
          "https://cdn.ibos.kr/design/upload_file/BD6140/7f64e1a2e8cdd2dbf922c822742e8bf4_16443761490248.jpg",
        link: {
          mobileWebUrl: resultUrl,
        },
      },
      buttons: [
        {
          title: "나도 테스트 하러가기",
          link: {
            mobileWebUrl: resultUrl,
          },
        },
      ],
    });
  };

  return (
    <Button
      size="sm"
      variant="outline"
      onClick={() => {
        shareKakao();
      }}
    >
      카카오톡 공유하기
    </Button>
  );
}
