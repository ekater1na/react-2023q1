import React, { Component, createRef, FormEvent } from 'react';
import './FormPage.scss';

class FormPage extends Component {
  private readonly firstName: React.RefObject<HTMLInputElement>;
  private readonly lastName: React.RefObject<HTMLInputElement>;
  private readonly birthDay: React.RefObject<HTMLInputElement>;
  private readonly country: React.RefObject<HTMLSelectElement>;
  private readonly sex: React.RefObject<HTMLInputElement>;
  private readonly photo: React.RefObject<HTMLInputElement>;
  private readonly agreement: React.RefObject<HTMLInputElement>;

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
    const User = {
      firstName: this.firstName.current?.value,
      lastName: this.lastName.current?.value,
      birthDay: this.birthDay.current?.value,
      country: this.country.current?.value,
      sex: this.sex.current?.value,
      photo: this.photo.current?.value,
      agreement: this.agreement.current?.value,
    };
    console.log('handleSubmit', User);
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
            <option value="AL">Albania</option>{' '}
          </select>
          <>
            <label htmlFor="sex">Male</label>
            <input type="radio" id="sex" ref={this.sex} placeholder="Sex" />
          </>
          <input type="file" ref={this.photo} placeholder="Photo" />
          <>
            <input type="checkbox" id="agreement" ref={this.agreement} placeholder="agreement" />

            <label htmlFor="agreement">
              I consent to my personal data (User can choose severalitems from the list)
            </label>
          </>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default FormPage;
