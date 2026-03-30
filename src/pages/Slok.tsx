import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getVerse } from "../utils/api";

interface SlokDataInterface {
  _id: string;
  chapter: number;
  verse: number;
  slok: string;
  transliteration: string;
  chinmay: {
    author: string;
    hc: string;
  };
  rams: {
    author: string;
    hc: string;
    ht: string;
  };
  prabhu: {
    author: string;
    ec: string;
    et: string;
  };
}
function Slok() {
  const [slokData, setSlokData] = useState<SlokDataInterface | null>(null);
  const { chapterNumber, slokNumber } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!chapterNumber || !slokNumber) return;

    const key = `verse_${chapterNumber}_${slokNumber}`;

    const stored = localStorage.getItem(key);

    if (stored) {
      setSlokData(JSON.parse(stored));
      return;
    }

    getVerse(Number(chapterNumber), Number(slokNumber)).then((data) => {
      setSlokData(data);
      localStorage.setItem(key, JSON.stringify(data));
    });
  }, [chapterNumber, slokNumber]);

  if (!slokData) {
    return (
      <div>
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  function goBack() {
    navigate(-1);
  }

  return (
    <div className="min-h-screen">
      <div className="rounded-sm container mx-auto shadow-md bg-linear-to-br from-[#1a0f0a] via-[#3b1f0b] to-[#f59e0b]">
        <button
          onClick={goBack}
          className="size-8 cursor-pointer bg-amber-500 rounded-full"
        >
          &larr;
        </button>
        <h1 className="text-2xl text-center p-10">
          अध्याय {chapterNumber} श्लोक {slokNumber}
        </h1>
        <div className="max-w-md container mx-auto mb-4">
          <img src={`/chapter-${chapterNumber}.jpg`} alt={slokData?.slok} />
        </div>
        <div className="">
          <p className="text-center text-xl p-4">{slokData?.slok}</p>
          <p className="text-center text-md p-4">{slokData?.transliteration}</p>
        </div>
        <div className="divider"></div>
        <div className="max-w-2xl container mx-auto mb-6">
          <h2 className="text-2xl text-center">
            {slokData?.chinmay?.author} जी टीका
          </h2>
          <p className="text-center text-md p-4 leading-relaxed tracking-wide">
            {slokData?.chinmay.hc}
          </p>
        </div>
        <div className="max-w-2xl container mx-auto mb-6">
          <h2 className="text-2xl text-center">
            {slokData?.rams.author} जी टीका
          </h2>
          <p className="text-center text-md p-4 leading-loose tracking-wide ">
            {slokData?.rams.hc}
          </p>
          <p className="text-center text-md p-4">{slokData?.rams?.ht}</p>
        </div>
        {slokData?.prabhu && (
          <div className="max-w-2xl container mx-auto">
            <h2 className="text-2xl text-center">
              {slokData?.prabhu?.author} जी टीका
            </h2>
            <p className="text-center text-md p-4 leading-loose tracking-wide ">
              {slokData?.prabhu?.ec}
            </p>
            <p className="text-center text-md p-4">{slokData?.prabhu?.et}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Slok;
