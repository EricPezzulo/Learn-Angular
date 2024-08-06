export interface UserData {
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: number | string;
  active: boolean;
  photo: string;
  confirmedKills: number;
  confirmedKillsError: boolean;
  confirmedKillsErrorMsg: string;
}
