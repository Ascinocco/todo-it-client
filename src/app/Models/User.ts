export class User
{
  private email: string;
  private password: string;
  private token: string;
  constructor(email?: string, password?: string, token?: string)
  {
    if (email) {
      this.email = email;
    } else {
      this.email = ""
    }

    if (password) {
      this.password = password;
    } else {
      this.password = "";
    }

    if (token) {
      this.token = token;
    } else {
      this.token = "";
    }
  }

  /** Setters and Getters **/
  public getEmail(): string
  {
    return this.email;
  }

  public setEmail(email: string): void
  {
    this.email = email;
  }

  /**
   * We should only be able to grab the password within this class
   * @return {string} [description]
   */
  private getPassword(): string
  {
    return this.password;
  }

  public setPassword(password: string): void
  {
    this.password = password;
  }

  public getToken(): string
  {
    return this.token;
  }

  private setToken(token: string): void
  {
    this.token = token;
  }

  /** authenticate methods **/
  public login(): void
  {
    console.log(this.email);
    console.log(this.password);
    
  }

  public logout(): void
  {

  }

  public resetPassword(newPassword: string, confirmPassword: string): boolean
  {
    return false;
  }
}
