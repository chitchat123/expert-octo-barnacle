type Lesson = {
  name: string;
  teacher: string;
  occurrences: LessonOccurrence[];
};

type LessonOccurrence = {
  date: Date;
  mark: number;
  teacher: string;
};
