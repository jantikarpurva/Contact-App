import React from "react";
class ContactCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            {
                                Object.keys(this.props.selectedUser).length > 0 ? <React.Fragment>
                                    <div className="card">
                                        <div className="card-header bg-primary">
                                            <div className="p-5">
                                            </div>
                                        </div>
                                        <div className="card-body text-center">
                                            <img src={this.props.selectedUser.picture.large} alt="" className="img-thumbnail rounded-circle img-contact"/>
                                            <div className="text-center mt-1">
                                                <p className="lead"> {this.props.selectedUser.name.title} {this.props.selectedUser.name.first} {this.props.selectedUser.name.last}</p>
                                                <hr/>
                                                <p className="lead">{this.props.selectedUser.dob.age}</p>
                                                <hr/>
                                                <p className="lead"> {this.props.selectedUser.email}</p>
                                                <hr/>
                                                <p className="lead"> {this.props.selectedUser.phone}</p>
                                                <hr/>
                                                <p className="lead"> {this.props.selectedUser.location.city}, {this.props.selectedUser.location.state}</p>
                                                <hr/>
                                                <p className="lead"> {this.props.selectedUser.location.country}</p>

                                            </div>

                                        </div>
                                    </div>
                                </React.Fragment> :
                                    <React.Fragment>
                                        <div className="card p-2 text-center text-primary">
                                            <div className="card-body">
                                                <h3 className="display-4">
                                                    Select a row please ;)
                                                </h3>
                                            </div>
                                        </div>
                                    </React.Fragment>
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}
export default ContactCard;