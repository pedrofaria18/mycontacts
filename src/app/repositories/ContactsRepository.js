const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Pedro',
    email: 'pedro@mail.com',
    phone: '123123123',
    category_id: uuid(),
  },
  {
    id: uuid(),
    name: 'João',
    email: 'joão@mail.com',
    phone: '456456456',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }
}

module.exports = new ContactsRepository();
