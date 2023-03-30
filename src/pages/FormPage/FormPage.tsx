import React, { Component } from 'react';
import './FormPage.scss';
import { User } from '../../models/user';
import FormCard from '../../components/FormCard/FormCard';
import Form from '../../components/Form/Form';

type FormPageProps = Record<string, never>;

type FormPageState = {
  formData: User[];
};

class FormPage extends Component<FormPageProps, FormPageState> {
  constructor(props: FormPageProps) {
    super(props);

    this.state = {
      formData: [],
    };
    this.setFormData = this.setFormData.bind(this);
  }

  setFormData(data: User) {
    this.setState({
      formData: [...this.state.formData, data],
    });
  }

  render() {
    return (
      <div className="form-page-wrapper" data-testid="form-page">
        <Form setFormData={this.setFormData} />
        <div className="form-card-content">
          {this.state.formData &&
            this.state.formData.map((user: User) => <FormCard key={user.id} user={user} />)}
        </div>
      </div>
    );
  }
}

export default FormPage;
