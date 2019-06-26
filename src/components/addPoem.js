import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {addPoem} from '../actions/addPoem';
import {required, nonEmpty} from '../validators';
import {Redirect} from 'react-router-dom';

export class AddPoem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }

    }


    setEditing(redirect) {
        this.setState({
            redirect
        });
    }
    
    onSubmit(titleArg) {
        this.setEditing(true);
        return this.props.dispatch(addPoem(titleArg));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                    ` ${this.props.error}`
            );
        }

        if (this.state.redirect) {
            return <Redirect to="/dashboard" />;
        }
        
        return (
            <form
                className="addPoem-form"
                onSubmit={this.props.handleSubmit(values => this.onSubmit(values.uniqueTitle))}
            >
                <label className="label" htmlFor="uniqueTitle">Add a new poem title:</label>
                <Field
                    component={Input}
                    type="text"
                    name="uniqueTitle"
                    id="uniqueTitle"
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
    form: 'AddPoemForm',
    onSubmitFail: (errors, dispatch) => dispatch(focus('addPoem-form', 'uniqueTitle'))
})(AddPoem);