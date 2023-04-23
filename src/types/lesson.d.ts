type Lesson = {
  id: string;
  subject: string;
  teacher: string;
  total: number;
  occurrences: LessonOccurrence[];
};

type LessonOccurrence = {
  date: Date;
  mark: number;
  teacher: string;
};
