import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {addStanza} from '../actions/add-stanza';
import {required, nonEmpty, isTrimmed} from '../validators';

export class AddForm extends React.Component {
    onSubmit(values) {
        console.log(values);
        return this.props.dispatch(addStanza(values.penName, values.uniqueStanza));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                    ` ${this.props.error}`
            );
        }
        return (
            <form
                className="addStanza-form"
                onSubmit={this.props.handleSubmit(values => this.onSubmit(values))
            }>
                <label className="label" htmlFor="penName">Your name:</label>
                <Field
                    component={Input}
                    type="penName"
                    name="penName"
                    id="penName"
                    validate={[required, nonEmpty, isTrimmed]}
                    value={error}
                />
                <label className="label" htmlFor="uniqueStanza">Your stanza:</label>
                <Field
                    component={Input}
                    type="text"
                    name="uniqueStanza"
                    id="uniqueStanza"
                    validate={[required, nonEmpty]}
                    value={error}
                />
                <button disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'AddForm',
    onSubmitFail: (errors, dispatch) => dispatch(focus('addStanza', 'uniqueStanza'))
})(AddForm);