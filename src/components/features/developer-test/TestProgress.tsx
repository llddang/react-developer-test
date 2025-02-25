import { getAfterWidth } from "@/libs/utils/developer-test.utils";

export default function TestProgress({ progress }: { progress: number }) {
  return (
    <>
      <div
        className={`relative mx-4 h-4 rounded-2xl bg-primary/20 border border-primary/50 after:content-[''] after:absolute after:left-0 after:top-0 after:h-full after:bg-primary/50 after:rounded-2xl 
            ${getAfterWidth(progress)}`}
      >
        <p
          className="absolute top-1/2 -translate-1/2 z-1"
          style={{ left: `${(progress / 15) * 100}%` }}
        >
          💻
        </p>
      </div>
      <p className="text-center mt-4">
        <b className="text-lg">{progress}</b> / 15
      </p>
    </>
  );
}
