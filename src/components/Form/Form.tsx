import React, { Component, createRef, FormEvent } from 'react';
import './Form.scss';
import { User } from '../../models/user';
import { countries } from '../../consts/countries';
import { Country } from '../../models/country';

interface FormProps {
  setFormData: (value: User) => void;
}

interface FormState {
  formData: User;
}

class Form extends Component<FormProps, FormState> {
  private readonly firstName: React.RefObject<HTMLInputElement>;
  private readonly lastName: React.RefObject<HTMLInputElement>;
  private readonly birthDay: React.RefObject<HTMLInputElement>;
  private readonly country: React.RefObject<HTMLSelectElement>;
  private readonly sex: React.RefObject<HTMLInputElement>;
  private readonly photo: React.RefObject<HTMLInputElement>;
  private readonly agreement: React.RefObject<HTMLInputElement>;

  constructor(props: FormProps) {
    super(props);

    this.state = {
      formData: {
        id: 0,
        firstName: '',
        lastName: '',
        birthDay: '',
        country: '',
        sex: '',
        photo: '',
        agreement: '',
      },
    };
    this.firstName = createRef();
    this.lastName = createRef();
    this.birthDay = createRef();
    this.country = createRef();
    this.sex = createRef();
    this.photo = createRef();
    this.agreement = createRef();
  }

  handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await this.setState({
      formData: {
        id: Math.random(),
        firstName: this.firstName.current?.value,
        lastName: this.lastName.current?.value,
        birthDay: this.birthDay.current?.value,
        country: this.country.current?.value,
        sex: this.sex.current?.value,
        photo: this.photo.current?.value,
        agreement: this.agreement.current?.value,
      },
    });

    await this.props.setFormData(this.state.formData);
    console.log('handleSubmit', this.state.formData);
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit} data-testid="form">
        <input type="text" ref={this.firstName} placeholder="First name" />
        <input type="text" ref={this.lastName} placeholder="Last name" />
        <input type="date" ref={this.birthDay} placeholder="Birthday" />
        <select ref={this.country} placeholder="Country">
          {countries.map((item: Country) => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
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
    );
  }
}

export default Form;
