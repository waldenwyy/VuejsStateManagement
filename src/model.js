export default class ContactFormModel {
  constructor(_fname = '', _lname = '', _email = '', _phone = '', _department = '', _role = '') {
    this.fname = _fname;
    this.lname = _lname;
    this.email = _email;
    this.phone = _phone;
    this.department = _department;
    this.role = _role;
  }
}