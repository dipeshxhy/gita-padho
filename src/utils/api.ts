import axios from "axios";

export interface ChapterResponse {
  chapter_number: number;
  meaning: {
    en: string;
    hi: string;
  };
  name: string;
  summary: {
    en: string;
    hi: string;
  };
  translation: string;
  transliteration: string;
  verses_count: number;
}

export async function getAllChapters() {
  const response = await axios.get(
    "https://vedicscriptures.github.io/chapters",
  );
  return response.data as ChapterResponse[];
}

// get chapter by chapter number
export async function getChapter(chapterNumber: number) {
  const response = await axios.get(
    `https://vedicscriptures.github.io/chapter/${chapterNumber}`,
  );
  return response.data;
}

// get verse by chapter number and verse number
export async function getVerse(chapterNumber: number, verseNumber: number) {
  const response = await axios.get(
    `https://vedicscriptures.github.io/slok/${chapterNumber}/${verseNumber}`,
  );
  return response.data;
}
