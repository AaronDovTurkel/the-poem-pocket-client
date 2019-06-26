import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {editStanza} from '../actions/edit-stanza';
import {required, nonEmpty} from '../validators';

export class EditForm extends React.Component {
    onSubmit(newStanza, idArg) {
        return this.props.dispatch(editStanza(newStanza, idArg));
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
                className="editStanza-form"
                onSubmit={this.props.handleSubmit(values => {this.onSubmit(values.uniqueStanza, this.props.id); this.props.handler()})}
            >
                <label className="label" htmlFor="uniqueStanza">Edit your stanza:</label>
                <Field
                    component={Input}
                    type="text"
                    name="uniqueStanza"
                    id="uniqueStanza"
                    validate={[required, nonEmpty]}
                    value={error}
                />
                <button type="submit" disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'EditForm',
    onSubmitFail: (errors, dispatch) => dispatch(focus('editStanza', 'uniqueStanza'))
})(EditForm);