export class User
{
  private _id: string;
  private email: string;
  private password: string;
  
  constructor(_id?: string, email?: string, password?: string)
  {
    if (_id) {
      this._id = _id;
    } else {
      this._id = "";
    }

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
