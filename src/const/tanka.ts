export const tankaMaxLength = 40;
export const maxReactionCount = 10;
export const tankaReactions = ['plusone'];

export interface Tanka {
  id: number;
  tanka: string;
  name: string;
  ip: string;
  comment: string | null;
  supplement: string | null;
  plusone_count: number;
}
