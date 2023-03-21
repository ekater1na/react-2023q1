import React, { Component, createRef, FormEvent } from 'react';
import './FormPage.scss';
import { User } from '../../models/user';
import FormCard from '../../components/FormCard/FormCard';

class FormPage extends Component {
  private readonly firstName: React.RefObject<HTMLInputElement>;
  private readonly lastName: React.RefObject<HTMLInputElement>;
  private readonly birthDay: React.RefObject<HTMLInputElement>;
  private readonly country: React.RefObject<HTMLSelectElement>;
  private readonly sex: React.RefObject<HTMLInputElement>;
  private readonly photo: React.RefObject<HTMLInputElement>;
  private readonly agreement: React.RefObject<HTMLInputElement>;
  private users: User[] = [];

  constructor(props: string) {
    super(props);
    this.firstName = createRef();
    this.lastName = createRef();
    this.birthDay = createRef();
    this.country = createRef();
    this.sex = createRef();
    this.photo = createRef();
    this.agreement = createRef();
  }

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const user = {
      id: Math.random(),
      firstName: this.firstName.current?.value,
      lastName: this.lastName.current?.value,
      birthDay: this.birthDay.current?.value,
      country: this.country.current?.value,
      sex: this.sex.current?.value,
      photo: this.photo.current?.value,
      agreement: this.agreement.current?.value,
    };

    this.users.push(user);
    console.log('handleSubmit', this.users);
  };

  render() {
    return (
      <div className="form-wrapper" data-testid="form-page">
        <form className="form" onSubmit={this.handleSubmit}>
          <input type="text" ref={this.firstName} placeholder="First name" />
          <input type="text" ref={this.lastName} placeholder="Last name" />
          <input type="date" ref={this.birthDay} placeholder="Birthday" />
          <select ref={this.country} placeholder="Country">
            <option>select country</option>
            <option value="AF">Afghanistan</option>
            <option value="AX">Aland Islands</option>
            <option value="AL">Albania</option>
          </select>
          <>
            <label htmlFor="sex">Male</label>
            <input type="radio" id="sex" ref={this.sex} placeholder="Sex" />
          </>
          <input type="file" ref={this.photo} placeholder="Photo" />
          <>
            <input type="checkbox" id="agreement" ref={this.agreement} placeholder="agreement" />
            <label htmlFor="agreement">
              I consent to my personal data (User can choose several items from the list)
            </label>
          </>
          <input type="submit" value="Submit" />
        </form>
        {this.users && this.users.map((user: User) => <FormCard key={user.id} user={user} />)}
      </div>
    );
  }
}

export default FormPage;
