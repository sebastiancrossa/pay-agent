import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import UUID from 'uuid'

class Clients extends Component {
    render() {
        const clients = [
            {
                id: UUID(),
                firstName: 'Sebastian',
                lastName: 'Crossa',
                email: 'crossasebastian@gmail.com',
                phone: '667 755 9877',
                balance: '100'
            },
            {
                id: UUID(),
                firstName: 'Elon',
                lastName: 'Musk',
                email: 'emusk@tesla.com',
                phone: '444 164 9267',
                balance: '30'
            }
        ];

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

export default Clients;