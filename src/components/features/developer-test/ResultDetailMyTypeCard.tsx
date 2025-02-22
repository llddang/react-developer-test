interface ResultDetailMyTypeCardProps {
  name: string;
  img: string;
  description: string[];
}

export default function ResultDetailMyTypeCard({
  name,
  img,
  description,
}: ResultDetailMyTypeCardProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4 md:mb-8">
      <img src={img} alt={`${name} 이미지`} className="w-4/5 max-w-[300px]" />
      <ul className="text-sm md:text-base">
        {description.map((info) => (
          <li key={info} className="my-2 ml-6 list-disc">
            {info}
          </li>
        ))}
      </ul>
    </div>
  );
}
