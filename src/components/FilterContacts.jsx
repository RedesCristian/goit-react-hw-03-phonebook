import React from 'react';
import styles from './FilterContacts.module.css';

const FilterContacts = ({ value, onChange }) => {
  return (
    <form className={styles.formContainer}>
      <label className={styles.label} htmlFor="search">
        Find contacts by name
      </label>
      <input
        className={styles.input}
        type="text"
        id="search"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </form>
  );
};

export default FilterContacts;
