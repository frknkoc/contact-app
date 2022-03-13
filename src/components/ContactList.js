import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {

  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard contact={contact}/>;
  });
  return (
    <div className="container">
      <div className="col-md-8 col-sm-12 offset-md-2 ">
        <h2 className="my-5">CONTACT LİST</h2>
        <hr />
      </div>
      {renderContactList}

      </div>

  );
};

export default ContactList;
