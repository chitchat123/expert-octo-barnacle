type Lesson = {
  name: string;
  teacher: string;
  total: number;
  occurrences: LessonOccurrence[];
};

type LessonOccurrence = {
  date: Date;
  mark: number;
  teacher: string;
};
