type Session = {
  mark: number;
  subject: string;
  // TODO: make link to subject or store name and teacher directly in session
  name: string;
  teacher: string;
  typeOfControl: typeOfControl;
  typeInfo: typeInfo;
  date: Date;
  status: string;
};

type typeOfControl = 'exam' | 'credit';
type typeInfo = 'main' | 'secondary';
