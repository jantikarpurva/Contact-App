import React from "react";
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";
class ContactApp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedUser : ''
        }
    }

    updatedSelectedUser = (user) => {
        this.setState({
            selectedUser : user
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col text-center">
                            <h3 className="text-primary font-weight-bold">Contact App</h3>
                            <hr/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci, cum dicta enim, facilis fugiat harum, illo labore magnam minus molestias nisi odit quidem quisquam quod quos ratione temporibus voluptates.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <ContactList updatedSelectedUser={this.updatedSelectedUser}/>
                        </div>
                        <div className="col-md-4">
                            <ContactCard selectedUser={this.state.selectedUser}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default ContactApp;