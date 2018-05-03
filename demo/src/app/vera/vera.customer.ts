export class Customer {
  // class variables
  private name: string;
  private status: string;
  private serviceType: string;


  setName(name: string) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  setStatus(status: string) {
    this.status = status;
  }
  getStatus() {
    return this.status;
  }
  setServiceType(serviceType: string) {
    this.serviceType = serviceType;
  }
  getServiceType() {
    return this.serviceType;
  }
}
