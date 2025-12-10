export interface Question {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  era: string;
}

export enum GameState {
  Welcome,
  Playing,
  Finished,
}
