export interface AuthUser {
  name: string;
  password: string;
}
export class AuthUserDto {
  name: string;
  password: string;
  constructor(name: string, password: string) {
    if (typeof name !== "string") {
      throw new Error("Name must be a string");
    }
    if (typeof password !== "string") {
      throw new Error("Password must be a string");
    }
    this.name = name;
    this.password = password;
  }
}
