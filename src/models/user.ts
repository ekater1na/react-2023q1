export interface User {
  id: string;
  firstName: string;
  lastName: string;
  birthDay: string;
  country: string;
  sex: string;
  photo: FileList;
  agreement: boolean;
  [key: string]: string | boolean | FileList;
}
