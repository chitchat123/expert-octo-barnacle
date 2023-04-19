type Lesson = {
  id: string;
  subject: string;
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
