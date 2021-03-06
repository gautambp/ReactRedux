import React from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {createPost} from '../actions/index';

class PostsNew extends React.Component {
    renderField(field) {
        const {touched, error} = field.meta;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type="text"
                    {...field.input}
                    />
                <div className="text-help">{touched ? error : ''}</div>
            </div>
        );
    }
    onFormSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push("/");
        });
    }
    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
                <Field name="title" label="Post Title" component={this.renderField}/>
                <Field name="categories" label="Categories" component={this.renderField}/>
                <Field name="content" label="Post Content" component={this.renderField}/>
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};
    if (!values.title)
        errors.title = 'Enter a title';
    if (!values.categories)
        errors.categories = 'Enter a category';
    if (!values.content)
        errors.content = 'Enter a content';
    return errors;
}
export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, {createPost})(PostsNew)
);