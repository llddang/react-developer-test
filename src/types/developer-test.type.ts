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

export interface DeveloperMatchDto {
  name: string;
  img: string;
}
export interface DeveloperTypeInfoDto {
  name: string;
  description: string[];
  goodMatch: DeveloperMatchDto;
  badMatch: DeveloperMatchDto;
  img: string;
}
export type DeveloperTypeCollectionDto = {
  [K in DeveloperTypeId]: DeveloperTypeInfoDto;
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

export type PersonalityTypeScoresDto = {
  [K in PersonalityTypeId]: number;
};
