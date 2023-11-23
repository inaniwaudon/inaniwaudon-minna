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

export const testTanka: Tanka = {
  id: 1,
  tanka: 'テストだよテストじゃないよテストだよ',
  name: 'テスト詩人',
  ip: '192.168.0.1',
  comment: 'UI のテスト',
  supplement: '',
  plusone_count: 2,
};
