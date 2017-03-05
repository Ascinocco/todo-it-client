export class User
{
  private email: string;
  private password: string;

  public firstName: string;
  public lastName: string;
  
  constructor(email?: string, password?: string, firstName?: string, lastName?: string)
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

    if (firstName) {
      this.firstName = firstName;
    } else {
      this.lastName = "";
    }

    if (lastName) {
      this.lastName = lastName;
    } else {
      this.lastName = "";
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

}
