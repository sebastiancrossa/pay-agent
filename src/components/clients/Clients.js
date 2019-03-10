import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import UUID from 'uuid'
import { firestore } from 'firebase';

class Clients extends Component {
    render() {
        const { clients } = this.props;

        // Check if there are any clients on the database
        if (clients) {
            return (
                <div>
                    <div className="row ">
                        <div className="col-md-6">
                            {' '}
                            <h2><i className="fas fa-users mr-3"></i> Clients {' '}</h2>
                        </div>

                        <div className="col-md-6">

                        </div>
                    </div>

                    <table className="table table-striped mt-3">
                        <thead className="thead-inverse">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Balance</th>
                                <th />
                            </tr>
                        </thead>

                        <tbody>
                            {clients.map(client => (
                                <tr key={client.id}>
                                    <td>{client.firstName} {client.lastName}</td>
                                    <td>{client.email}</td>
                                    <td>${parseFloat(client.balance).toFixed(2)}</td>
                                    <td>
                                        <Link to={`/client/${client.id}`} className="btn btn-secondary btn-sm">
                                            <i className="fas fa-arrow-circle-right"></i> Details
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            )
        } else {
            return <h1>Loading</h1>
        }
    }
}

Clients.propTypes = {
    firestore: PropTypes.object.isRequired,
    clients: PropTypes.array
}

export default compose(
    firestoreConnect([{ collection: 'clients' }]),
    connect((state, props) => ({
        clients: state.firestore.ordered.clients
    }))
)(Clients);