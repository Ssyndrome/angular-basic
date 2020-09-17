export interface Student {
  id: number;
  name: string;
  email: string;
  hobbies: Array<string>;
  city: string;
  skills: Array<SkillInfo>;
}

export interface SkillInfo {
  name: string;
  level: number;
}
