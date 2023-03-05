import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form';
import Filter from './Filter';
import ContactsList from './ContactsList';
import { AppBox } from './App.styled';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loadStorage, saveStorage } from 'services/storage';

export default function App() {
  const LOCLAL_STORAGE_KEY = 'contacts';
  const [contacts, setContacts] = useState(
    () => loadStorage(LOCLAL_STORAGE_KEY) ?? []
  );
  const [filter, setFilter] = useState('');
  
  useEffect(() => {
    saveStorage(LOCLAL_STORAGE_KEY, contacts);
  }, [contacts]);

  function notifiesAlert(nameContact) {
    return toast.error(`${nameContact} is already in contacts.`);
  }

  function checkСontact(nameContact) {
    return contacts.some(contact => contact.name === nameContact);
  }

  function addContact(name, number) {
    setContacts(prevState => [...prevState, { id: nanoid(4), name, number }]);
  }

  function onDeleteContact(contactId) {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  }

  function handleSubmit(name, number) {
    checkСontact(name) ? notifiesAlert(name) : addContact(name, number);
  }

  return (
    <AppBox>
      <ToastContainer autoClose={2000} position="top-center"/>
      <h1>Phonebook</h1>
      <Form onSubmit={handleSubmit} />

      <h2>Contacts</h2>
      {contacts !== undefined && contacts.length > 0 ? (
        <>
          <Filter setFilter={setFilter} filter={filter} />
          <ContactsList
            contacts={contacts}
            filter={filter}
            onDeleteContact={onDeleteContact}
          />
        </>
      ) : (
        <p>Contacts list is empty</p>
      )}
    </AppBox>
  );
}
