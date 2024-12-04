export type TeamCode = 'shohoku' | 'ryonan' | 'kainan';

export interface Team {
  id: TeamCode;
  name: string;
  color?: string;
}

export interface Player {
  id: string;
  name: string;
  teamId: TeamCode;
  grade: number;
  height?: number;
}
