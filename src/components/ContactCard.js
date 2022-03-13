import React from 'react'

const ContactCard = (props) => {
    const {id, name, email} = props.contact;
  return (
    <div className="container mt-5">
    <div className="col-md-8 col-sm-12 offset-md-2 border-bottom">
      <div className="row mb-md-4">
        <div className="col-2">
          <img
            className="w-100 rounded-circle img-fluid"
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt=""
          />
        </div>
        <div className="col-10">
          <h4>{name} </h4>
          <p>{email} </p>
          <i 
          className="fa-solid fa-trash d-flex justify-content-end my-2" 
          style={{color:"#FF5C5C", cursor: "pointer"}}
  
          ></i>
        </div>

      </div>
    </div>
  </div>


)
}

export default ContactCard;