import { NavLink } from "react-router-dom";
import type { ChapterResponse } from "../utils/api";

const AllChapters = ({ chapters }: { chapters: ChapterResponse[] }) => {
  function Button({
    verses_count,
    chapterNumber,
  }: {
    verses_count: number;
    chapterNumber: number;
  }) {
    const buttons = Array.from({ length: verses_count }, (_, i) => i + 1);
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
  const chapterCards = chapters.map(
    ({
      chapter_number,
      name,
      verses_count,
    }: {
      chapter_number: number;
      name: string;
      verses_count: number;
    }) => {
      return (
        <div
          className="mb-4 p-4 rounded-md bg-linear-to-br from-[#1a0f0a] via-[#3b1f0b] to-[#f59e0b]"
          key={chapter_number}
        >
          <h1>
            {chapter_number}. {name}
          </h1>
          {
            <Button
              verses_count={verses_count}
              chapterNumber={chapter_number}
            />
          }
        </div>
      );
    },
  );
  return (
    <div className="container bg-linear- max-w-6xl mx-auto p-6 shadow-md bg-linear-to-br from-[#1a0f0a] via-[#3b1f0b] to-[#f59e0b]">
      {chapterCards}
    </div>
  );
};

export default AllChapters;
