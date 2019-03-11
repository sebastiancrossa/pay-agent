import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { compose } from 'redux';
// import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

class AddClient extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        balance: ''
    }

    onChange = e => { this.setState({ [e.target.name]: e.target.value }) }

    onSubmit = e => {
        e.preventDefault();

        const newClient = this.state;

        // DESTRUCT
        const { firestore } = this.props;

        // Checking the balance
        if (newClient.balance === '') {
            newClient.balance = 0;
        }

        firestore.add({ collection: 'clients' }, newClient)
            .then(() => this.props.history.push('/'));

    };

    render() {
        const { firstName, lastName, email, phone, balance } = this.state;

        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/" className="btn btn-link">
                            <i className="fas fa-arrow-circle-left mb-3"></i> Back to dashboard
                        </Link>
                    </div>
                </div>

                <div className="card mb-5">
                    <div className="card-header">Add Client</div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="firstName"
                                    onChange={this.onChange}
                                    value={firstName}

                                    minLength="2"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="lastName"
                                    onChange={this.onChange}
                                    value={lastName}

                                    minLength="2"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    onChange={this.onChange}
                                    value={email}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    name="phone"
                                    onChange={this.onChange}
                                    value={phone}

                                    minLength="10"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="balance">Balance</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="balance"
                                    onChange={this.onChange}
                                    value={balance}
                                />
                            </div>

                            <input type="submit" value="Submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

AddClient.propTypes = {
    firestore: PropTypes.object.isRequired
}

export default firestoreConnect()(AddClient);