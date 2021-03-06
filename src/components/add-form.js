import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {addStanza} from '../actions/add-stanza';
import {required, nonEmpty} from '../validators';

export class AddForm extends React.Component {
    onSubmit(userArg, values) {
        return this.props.dispatch(addStanza(userArg, values.uniqueStanza));
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
                onSubmit={this.props.handleSubmit(values => this.onSubmit(this.props.user, values))
            }>
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