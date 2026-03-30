import { useEffect, useState } from "react";
import { getAllChapters, type ChapterResponse } from "./utils/api";
import ChapterCard from "./components/ChapterCard";
import { Route, Routes } from "react-router-dom";
import Chapters from "./pages/Chapters";
import Chapter from "./pages/Chapter";
import Slok from "./pages/Slok";
import Footer from "./components/Footer";
import AllChapters from "./pages/AllChapters";
import Navbar from "./components/Navbar";

function App() {
  const [chapters, setChapters] = useState<ChapterResponse[]>([]);

  useEffect(() => {
    getAllChapters().then((data) => {
      setChapters(data);
    });
  }, []);

  // show card of chapter
  const chapterCards = chapters.map(
    ({ chapter_number, name, meaning, summary, verses_count }) => {
      return (
        <ChapterCard
          key={chapter_number}
          chapterNumber={chapter_number}
          meaning={meaning}
          name={name}
          summary={summary}
          versesCount={verses_count}
        />
      );
    },
  );
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Chapters>{chapterCards}</Chapters>} />
        <Route
          path="/chapter/:chapterNumber"
          element={
            <div className="p-10">
              <Chapter />
            </div>
          }
        />
        <Route path="/slok/:chapterNumber/:slokNumber" element={<Slok />} />
        <Route path="/chapters" element={<AllChapters chapters={chapters} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
