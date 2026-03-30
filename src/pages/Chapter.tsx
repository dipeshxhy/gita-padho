import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getChapter, type ChapterResponse } from "../utils/api";

function Chapter() {
  const { chapterNumber } = useParams();

  const [chapterData, setChapterData] = useState<ChapterResponse | null>(() => {
    const stored = localStorage.getItem(`chapter_${chapterNumber}`);
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (!chapterNumber) return;

    const key = `chapter_${chapterNumber}`;

    // If already cached → skip API
    if (chapterData) return;

    getChapter(Number(chapterNumber)).then((data) => {
      setChapterData(data);
      localStorage.setItem(key, JSON.stringify(data));
    });
  }, [chapterNumber, chapterData]);

  if (!chapterData) {
    return (
      <div>
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  function Button() {
    const buttons = Array.from(
      { length: chapterData!.verses_count },
      (_, i) => i + 1,
    );
    return buttons.map((verseNumber) => (
      <NavLink
        to={`/slok/${chapterNumber}/${verseNumber}`}
        key={verseNumber}
        className="btn btn-primary m-2"
      >
        श्लोक {verseNumber}
      </NavLink>
    ));
  }

  return (
    <div className="min-h-screen">
      <div className="rounded-sm container mx-auto shadow-md bg-linear-to-br from-[#1a0f0a] via-[#3b1f0b] to-[#f59e0b]">
        <h1 className="text-2xl text-center p-10">{chapterData.name}</h1>
        <div className="max-w-md container mx-auto">
          <img
            src={`/chapter-${chapterData.chapter_number}.jpg`}
            alt={chapterData.name}
          />
        </div>
        <div className="flex items-center justify-center">
          <p className="text-center p-4">{chapterData.meaning.hi}</p>
          <p className="text-center p-4">{chapterData.meaning.en}</p>
        </div>
        <div className="max-w-2xl container mx-auto">
          <h2 className="text-2xl text-center">सारांश (Sārānśa)</h2>
          <p className="text-center text-md p-4 leading-relaxed">
            {chapterData.summary.hi}
          </p>
          <p className="text-center text-md p-4">{chapterData.summary.en}</p>
        </div>
        {/* buttons for verses */}
        <div className="flex flex-wrap justify-center p-4">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Chapter;
