export interface DeveloperType {
  name: string;
  description: string[];
  goodMatch: { name: string; img: string };
  badMatch: { name: string; img: string };
  img: string;
}

export type DeveloperTypeId =
  | "ITJ"
  | "ITP"
  | "IFJ"
  | "IFP"
  | "ETJ"
  | "ETP"
  | "EFJ"
  | "EFP";
