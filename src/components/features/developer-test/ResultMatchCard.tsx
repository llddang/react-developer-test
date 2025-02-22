interface ResultMatchCardProps {
  name: string;
  img: string;
  matchTitle: string;
}
export default function ResultMatchCard({
  name,
  img,
  matchTitle,
}: ResultMatchCardProps) {
  return (
    <div className="p-4 w-fit flex flex-col items-center border border-primary rounded-lg">
      <p className="font-semibold">{matchTitle}</p>
      <img src={img} alt={name} className="w-full max-w-[120px]" />
      <p className="text-xs sm:text-base mt-2">{name}</p>
    </div>
  );
}
