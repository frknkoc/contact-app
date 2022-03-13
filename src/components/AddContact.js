import React from "react";

class AddContact extends React.Component {
  
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if(this.state.name === "" || this.state.email === ""){
      alert("Please fill all fields");
      return
    }

    this.props.addContactHandler(this.state);

    this.setState({ name: "", email: "" });

    // console.log(this.state)
  }
  
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-12 offset-md-2">
              <div className="form">
                <h2 className="mb-4">CONTACT FORM</h2>
                <form onSubmit={this.add}>
                  <div className="form-group mb-4">
                    <label>Name :</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Enter name"
                      value={this.state.name}
                      onChange={(e) => this.setState({name: e.target.value})}
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label>Email :</label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      placeholder="Enter email"
                      value={this.state.email}
                      onChange={(e) => this.setState({email: e.target.value})}
                    />
                  </div>
                  <button className="btn btn-primary">ADD CONTACT</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddContact;
