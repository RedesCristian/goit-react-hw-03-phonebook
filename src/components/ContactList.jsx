import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    const savedContact = localStorage.getItem('contacts');
    this.state = {
      contacts: savedContact ? JSON.parse(savedContact) : props.contacts,
    };
  }

  componentWillUnmount() {
    localStorage.removeItem('contacts');
  }

  handleDelete(id) {
    this.props.deleteContact(id);
  }

  render() {
    const { contacts } = this.props;

    return (
      <div className={styles.listContainer}>
        <h2 className={styles.contactName}>Contacts</h2>
        <ul>
          {contacts.map(contact => (
            <li className={styles.contactItem} key={contact.id}>
              {contact.name} : {contact.number}
              <button
                className={styles.deleteButton}
                type="button"
                onClick={() => this.handleDelete(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
