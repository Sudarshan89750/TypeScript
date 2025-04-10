export interface AuthUser {
  name: string;
  password: string;
}
export class AuthUserDto {
  name: string;
  password: string;
  constructor(User: AuthUser) {
    if (typeof User.name !== "string") {
      throw new Error("Name must be a string");
    }
    if (typeof User.password !== "string") {
      throw new Error("Password must be a string");
    }
    this.name = User.name;
    this.password = User.password;
  }
}
