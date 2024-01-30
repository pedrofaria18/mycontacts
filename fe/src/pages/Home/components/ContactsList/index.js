import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import arrow from '../../../../assets/images/arrow.svg';
import edit from '../../../../assets/images/edit.svg';
import trash from '../../../../assets/images/trash.svg';

import { Card, Header } from './styles';

export default function ContactsList({
  filteredContacts,
  orderBy,
  onToggleOrderBy,
  onDeleteContact,
}) {
  return (
    <>
      {filteredContacts.length > 0 && (
      <Header orderBy={orderBy}>
        <button type="button" onClick={onToggleOrderBy}>
          <span>Nome</span>
          <img src={arrow} alt="Ícone de flexa" />
        </button>
      </Header>
      )}

      {filteredContacts.map((contact) => (
        <Card key={contact.key}>
          <div className="info">
            <div className="contact-name">
              <strong>{contact.name}</strong>
              {contact.category.name && (
              <small>{contact.category.name}</small>
              )}
            </div>

            <span>{contact.email}</span>
            <span>{contact.phone}</span>
          </div>

          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={edit} alt="Ícone de edição" />
            </Link>

            <button
              type="button"
              onClick={() => onDeleteContact(contact)}
            >
              <img src={trash} alt="Ícone de exclusão" />
            </button>
          </div>
        </Card>
      ))}
    </>
  );
}

ContactsList.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.shape({
      name: PropTypes.string,
    }),
    email: PropTypes.string,
    phone: PropTypes.string,
  })).isRequired,
  orderBy: PropTypes.string.isRequired,
  onToggleOrderBy: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
