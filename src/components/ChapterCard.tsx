import { Link } from "react-router-dom";

type ChapterCardProps = {
  chapterNumber: number;
  name: string;
  meaning: {
    en: string;
    hi: string;
  };
  summary: {
    en: string;
    hi: string;
  };

  versesCount: number;
};

function ChapterCard({
  chapterNumber,
  name,
  meaning,
  summary,

  versesCount,
}: ChapterCardProps) {
  return (
    <div
      className="card w-full  md:max-w-2xl shadow-sm bg-linear-to-tl from-amber-400 via-orange-500 to-red-600 
       text-white  rounded-xl p-4"
    >
      <div className="card-body">
        <span className="badge badge-md badge-outline bg-orange-400">
          {chapterNumber}
        </span>
        <div className="flex justify-between mb-4">
          <h2 className="text-3xl font-bold">{name}</h2>
          <span className="text-sm">{meaning.hi}</span>
        </div>
        <p className="md:leading-relaxed leading-8 tracking-wide text-lg md:text-xl  ">
          {summary.hi}
        </p>
        <div className="mt-6">
          <Link
            to={`/chapter/${chapterNumber}`}
            className="btn p-6 text-lg  btn-primary btn-block"
          >
            श्लोकसंख्या: {versesCount}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ChapterCard;
