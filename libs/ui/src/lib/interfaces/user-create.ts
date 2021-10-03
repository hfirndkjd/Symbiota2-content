export interface UserCreateInterface {
  firstName: string;
  lastName: string;
  email: string;
  description?: string;
  pass: string;
  passConfirm: string;
}
