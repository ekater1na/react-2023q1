export interface User {
  id: string;
  firstName: string | undefined;
  lastName: string | undefined;
  birthDay: string | undefined;
  country: string | undefined;
  sex: string | undefined;
  photo: string | undefined;
  agreement: boolean | undefined;
  [key: string]: string | boolean | undefined;
}