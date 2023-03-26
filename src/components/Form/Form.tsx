import React, { Component, createRef, FormEvent } from 'react';
import './Form.scss';
import { User } from '../../models/user';
import { countries } from '../../consts/countries';
import { Country } from '../../models/country';

interface FormErrors {
  [key: string]: string | number | boolean | FileList | undefined;
}

interface FormProps {
  setFormData: (value: User) => void;
}

interface FormState {
  formData: User;
  errors: FormErrors;
}

class Form extends Component<FormProps, FormState> {
  private readonly form: React.RefObject<HTMLFormElement>;
  private readonly firstName: React.RefObject<HTMLInputElement>;
  private readonly lastName: React.RefObject<HTMLInputElement>;
  private readonly birthDay: React.RefObject<HTMLInputElement>;
  private readonly country: React.RefObject<HTMLSelectElement>;
  private readonly sex: React.RefObject<HTMLInputElement>;
  private readonly photo: React.RefObject<HTMLInputElement>;
  private readonly agreement: React.RefObject<HTMLInputElement>;

  errorMessage = 'Please add data';

  constructor(props: FormProps) {
    super(props);

    this.state = {
      formData: {
        id: '',
        firstName: '',
        lastName: '',
        birthDay: '',
        country: '',
        sex: '',
        photo: {} as FileList,
        agreement: false,
      },
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.hasError = this.hasError.bind(this);

    this.form = createRef();
    this.firstName = createRef();
    this.lastName = createRef();
    this.birthDay = createRef();
    this.country = createRef();
    this.sex = createRef();
    this.photo = createRef();
    this.agreement = createRef();
  }

  async setFormState() {
    this.setState({
      formData: {
        id: Math.random().toString(),
        firstName: this.firstName.current?.value,
        lastName: this.lastName.current?.value,
        birthDay: this.birthDay.current?.value,
        country: this.country.current?.value,
        sex: this.sex.current?.value,
        photo:
          (this.photo.current?.files as FileList)[0] !== undefined
            ? URL.createObjectURL((this.photo.current?.files as FileList)[0])
            : '',
        agreement: this.agreement.current?.checked,
      },
      errors: {},
    });
  }

  async validateField(fieldName: string) {
    if (!this.state.formData[fieldName]) {
      await this.setState({
        errors: { ...this.state.errors, [fieldName]: this.state.formData[fieldName] },
      });
    }
  }

  async validate() {
    await this.setFormState();
    await this.validateField('firstName');
    await this.validateField('lastName');
    await this.validateField('birthDay');
    await this.validateField('country');
    await this.validateField('sex');
    await this.validateField('photo');
    await this.validateField('agreement');
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.name;
    this.setState({
      errors: { ...this.state.errors, [name]: undefined },
    });
  }

  hasError() {
    return !(
      this.state.errors.firstName === '' ||
      this.state.errors.lastName === '' ||
      this.state.errors.birthDay === '' ||
      this.state.errors.country === '' ||
      this.state.errors.sex === '' ||
      this.state.errors.photo === '' ||
      this.state.errors.agreement === '' ||
      Object.keys(this.state.errors).length === 0
    );
  }

  handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await this.validate();
    if (Object.keys(this.state.errors).length === 0) {
      await this.setFormState();
      await this.props.setFormData(this.state.formData);
      console.log('this.state.formData', this.state.formData);
      this.form.current?.reset();
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit} ref={this.form} data-testid="form">
        <input
          type="text"
          ref={this.firstName}
          placeholder="First name"
          onChange={this.handleChange}
        />
        {this.state.errors.firstName !== undefined && (
          <p className="error-message">{this.errorMessage}</p>
        )}

        <input
          type="text"
          ref={this.lastName}
          placeholder="Last name"
          onChange={this.handleChange}
        />
        {this.state.errors.lastName !== undefined && (
          <p className="error-message">{this.errorMessage}</p>
        )}

        <input
          type="date"
          ref={this.birthDay}
          placeholder="Birthday"
          onChange={this.handleChange}
        />
        {this.state.errors.birthDay !== undefined && (
          <p className="error-message">{this.errorMessage}</p>
        )}

        <select ref={this.country} placeholder="Country">
          {countries.map((item: Country) => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>

        <div className="field-row">
          <div className="field-row">
            <input
              type="radio"
              id="sex"
              ref={this.sex}
              placeholder="Sex"
              name="sex"
              onChange={this.handleChange}
              value="male"
              checked
            />
            <label htmlFor="sex">Male</label>
          </div>

          <div className="field-row">
            <input
              type="radio"
              id="sex"
              ref={this.sex}
              placeholder="Sex"
              name="sex"
              onChange={this.handleChange}
              value="female"
            />
            <label htmlFor="sex">Female</label>
          </div>
        </div>

        <input type="file" ref={this.photo} placeholder="Photo" onChange={this.handleChange} />
        {this.state.errors.photo !== undefined && (
          <p className="error-message">{this.errorMessage}</p>
        )}

        <div className="field-row">
          <input
            type="checkbox"
            id="agreement"
            ref={this.agreement}
            placeholder="agreement"
            onChange={this.handleChange}
          />
          <label htmlFor="agreement">I consent to my personal data</label>
        </div>
        {this.state.errors.agreement !== undefined && (
          <p className="error-message">{this.errorMessage}</p>
        )}

        <input
          type="submit"
          value="Submit"
          // disabled={this.hasError()}
        />
      </form>
    );
  }
}

export default Form;
