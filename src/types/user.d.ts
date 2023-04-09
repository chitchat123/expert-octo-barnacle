type User = {
  credo: string;
  email: string;
  fullName: string;
  id: number;
  modules: string[];
  photo: string;
  position: string[];
  profile: Profile;
  profiles: Profile[];
  scientificInterest: string;
  sid: string;
  studyGroup: Group;
  subdivision: string[];
  tgAuthLinked: boolean;
  userIdentifier: string;
  username: string;
};

type Group = {
  id: number;
  name: string;
};

type Profile = any;
