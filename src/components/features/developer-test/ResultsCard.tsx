import React from "react";
import AvatarIcon from "@/components/commons/AvatarIcon";
import Button from "@/components/commons/Button";
import { developerTypes } from "@/data/developer-type.data";
import { isValidDeveloperTypeId } from "@/libs/utils/developer-test.utils";
import { Link } from "react-router-dom";
import { useDeleteTestResultMutation } from "@/libs/api/useTestResult.api";

interface ResultsCardProps {
  id: number;
  userId: string;
  nickname: string;
  avatar: string | null;
  type: string;
  isMine: boolean;
}

export default React.memo(ResultsCard);
function ResultsCard({ id, nickname, avatar, type, isMine }: ResultsCardProps) {
  const { mutate: deleteTestResult } = useDeleteTestResultMutation();
  if (!isValidDeveloperTypeId(type)) return null;

  const { name, img, description } = developerTypes[type];

  function handleDeleteButtonClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    deleteTestResult(id, {
      onSuccess: () => {
        alert("테스트 결과가 삭제되었습니다.");
      },
    });
  }

  return (
    <Link
      to={`/results/${type}`}
      className="block bg-primary/10 p-4 rounded-lg border border-primary"
    >
      <div className="flex justify-between w-full overflow-hidden">
        <h3 className="shrink flex min-w-0 text-xl font-semibold gap-2 items-center mb-4">
          <AvatarIcon
            src={avatar ?? "/default_profile.png"}
            alt="유저 이미지"
            size="sm"
            className="!w-6 !h-6"
          />
          <span className="text-nowrap text-ellipsis overflow-hidden">{nickname}</span>
        </h3>
        {isMine && (
          <Button className="shrink-0" onClick={handleDeleteButtonClick} size="sm">
            삭제
          </Button>
        )}
      </div>
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-6">
        <div className="max-w-[120px] text-center">
          <img src={img} alt={`${name} 이미지`} className="rounded-full" />
          <h5 className="font-medium">{name}</h5>
        </div>
        <div className="flex-1 sm:my-3">
          {description.slice(0, 3).map((info) => (
            <li key={info} className="my-1 ml-5 list-disc text-sm">
              {info}
            </li>
          ))}
        </div>
      </div>
    </Link>
  );
}
