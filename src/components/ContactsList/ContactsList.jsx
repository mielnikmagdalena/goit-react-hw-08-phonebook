import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/contacts/selectors.js';
import { selectFilteredContacts } from 'redux/filter/selectors.js';
import Loader from 'components/Loader/Loader.js';
import ContactsListElement from '../ContactslistElement/ContactsListElement';
import ScrollButton from 'components/ScrollButton/ScrollButton.jsx';
import styles from './ContactsList.module.css';

const ContactsList = () => {
  const items = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={styles.contactsListBox}>
      <h4 className={styles.title}>
        You have {items.length} contact{items.length === 1 ? null : 's'}
      </h4>
      <ul className={styles.contactsList}>
        {!!isLoading && <Loader />}
        {!!items &&
          items.map(contact => (
            <li key={contact.id}>
              <ContactsListElement contact={contact} />
            </li>
          ))}
        <ScrollButton />
      </ul>
    </div>
  );
};

export default ContactsList;
