export interface UserData {
  firstName: string | null;
  lastName: string | null;
  address: string | null;
  age: number | string | null;
  height: string | null;
  weight: string | number | null;
  phoneNumber: number | string | null;
  photoUrl: string | null;
  confirmedKills?: number | null;
  confirmedKillsError?: boolean | null;
  confirmedKillsErrorMsg?: string | null;
  alias: string | null;
  associates: Associates | Associates[] | null;
  userId: number;
}
export interface Associates {
  firstName: string | null;
  lastName: string | null;
  alias: string | null;
}
