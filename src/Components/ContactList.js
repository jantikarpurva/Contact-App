import React from "react";
import Axios from "axios";
class ContactList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            users : '',
            error : ''
        }
    }

    componentDidMount() {
        Axios.get('https://gist.githubusercontent.com/jantikarpurva/9920546c0c6fd7f563246c5471466400/raw/f9206e7a0fcc1fcca95143fd2197bad0e920a1a2/Customers.json').then(
            (response) => {
                this.setState({
                    ...this.state,
                    users : response.data
                })
            }
        ).catch(
            (error) => {
                this.setState({
                    ...this.state,
                    error : error
                })
            }
        );
    }

    selectUser = (user) => {
        this.props.updatedSelectedUser(user)
    }

    render() {
        return (
            <React.Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <table className="table table-bordered table-info">
                                <thead className="bg-primary text-white text-center">
                                <th>User Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Location</th>
                                <th>Country</th>
                                </thead>
                                <tbody className="text-center">
                                {
                                    this.state.users.length > 0 ? 
                                        <React.Fragment>
                                            {
                                                this.state.users.map(user => {
                                                    return(
                                                        <tr key={user.login.uuid} onClick={this.selectUser.bind(this,user)}>
                                                            <td>{user.login.uuid.substr(0,4)}</td>
                                                            <td>{user.name.title} {user.name.first} {user.name.last}</td>
                                                            <td>{user.dob.age}</td>
                                                            <td>{user.location.city}</td>
                                                            <td>{user.location.country}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </React.Fragment> : null
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default ContactList;