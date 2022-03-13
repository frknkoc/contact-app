import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

function App() {

  const LOCALSTORAGEKEY = "contacts";
const [contacts, setContacts] = useState([]);

const addContactHandler = (contact) => {
  // console.log(contact);
  setContacts([...contacts, contact]);
}


useEffect(() => {
  const retriveContacts = JSON.parse(localStorage.getItem(LOCALSTORAGEKEY));
  if(retriveContacts)
    setContacts(retriveContacts);
  
}, []); 

useEffect(() => {
  localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(contacts));
}, [contacts]); 


/*
  const contacts = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@gmail.com"
    },
    {
      id: 2,
      name: "Furkan Koç",
      email: "furkankoc@gmail.com"
    },
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@gmail.com"
    },
    {
      id: 2,
      name: "Furkan Koç",
      email: "furkankoc@gmail.com"
    }

  ];
 */

  return (
    <div >
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} />
      
    </div>
  );
}

export default App;
