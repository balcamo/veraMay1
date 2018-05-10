/*
 *
 * This will be to keep track of the user dtails and pass
 * their info throughout the application
 */

export class User {

  private name: string;
  private email: string;
  private favorites: any;


  setName(name: string) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  setemail(email: string) {
    this.email = email;
  }
  getEmail() {
    return this.email;
  }
  setFavorites(favorites: any) {
    this.favorites = favorites;
  }
  getFavorites() {
    return this.favorites;
  }
}
