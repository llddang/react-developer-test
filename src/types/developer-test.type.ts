/* developer type */
export const DEVELOPER_TYPE = {
  ITJ: "ITJ",
  ITP: "ITP",
  IFJ: "IFJ",
  IFP: "IFP",
  ETJ: "ETJ",
  ETP: "ETP",
  EFJ: "EFJ",
  EFP: "EFP",
} as const;
export type DeveloperTypeId = (typeof DEVELOPER_TYPE)[keyof typeof DEVELOPER_TYPE];

export interface DeveloperTypeInfo {
  name: string;
  description: string[];
  goodMatch: { name: string; img: string };
  badMatch: { name: string; img: string };
  img: string;
}
export type DeveloperTypeCollection = {
  [K in DeveloperTypeId]: DeveloperTypeInfo;
};

/* personality type */
export const PERSONALITY_TYPE = {
  E: "E",
  I: "I",
  T: "T",
  F: "F",
  J: "J",
  P: "P",
} as const;
export type PersonalityTypeId = (typeof PERSONALITY_TYPE)[keyof typeof PERSONALITY_TYPE];

export type PersonalityTypeScores = {
  [K in PersonalityTypeId]: number;
};
