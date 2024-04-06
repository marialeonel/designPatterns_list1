// Observer
class Subject {
  constructor() {
    this.observers = [];
  }

  // Add an observer to the subject
  addObserver(observer) {
    this.observers.push(observer);
  }

  // Remove an observer from the subject
  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  // Notify all observers about a change in the subject's state
  notifyObservers(contacts, query) {
    this.observers.forEach(observer => observer.update(contacts, query));
  }
}

class SearchObserver {
  // Update method to be called by the subject when there is a change
  update(contacts, query) {
    const searchResults = contacts.filter(contact => {
      return (
        contact.getName().toLowerCase().includes(query.toLowerCase()) ||
        contact.getPhone().includes(query) ||
        contact.getEmail().toLowerCase().includes(query.toLowerCase())
      );
    });

    console.log(`Search result for query "${query}":`);
    if (searchResults.length === 0) {
      console.log("No results found.");
    } else {
      searchResults.forEach(contact => {
        console.log(`Name: ${contact.getName()}, Phone: ${contact.getPhone()}, Email: ${contact.getEmail()}`);
      });
    }
  }
}


// Adapter
class Contact {
  constructor(name, phone, email) {
    this.name = name;
    this.phone = phone;
    this.email = email;
  }
}

class ContactAdapter {
  constructor(contact) {
    this.contact = contact;
  }

  // Get the name of the contact
  getName() {
    return this.contact.name;
  }

  // Get the phone number of the contact
  getPhone() {
    return this.contact.phone;
  }

  // Get the email of the contact
  getEmail() {
    return this.contact.email;
  }
}

class ContactsManager extends Subject {
  constructor() {
    super();
    this.contacts = [];
  }

  // Add a new contact to the manager
  addContact(contact) {
    this.contacts.push(new ContactAdapter(contact));
    this.notifyObservers(this.contacts, 'add');
  }

  // Remove a contact from the manager
  removeContact(contactName) {
    this.contacts = this.contacts.filter(contact => contact.getName() !== contactName);
    this.notifyObservers(this.contacts, 'remove');
  }

  // List all contacts in the manager
  listContacts() {
    return this.contacts.map(contact => ({
      name: contact.getName(),
      phone: contact.getPhone(),
      email: contact.getEmail()
    }));
  }

  // Search for contacts based on a query
  searchContacts(query) {
    this.notifyObservers(this.contacts, query);
  }
}

// Interface
const manager = new ContactsManager();
const searchObserver = new SearchObserver();

manager.addObserver(searchObserver);

manager.addContact(new Contact('Enrique Marques', '123456789', 'enrique@gmail.com'));
manager.addContact(new Contact('Maria Fernanda Leonel Bertelli', '123456789', 'mariaflb@gmail.com'));

console.log("Contacts List:");
console.table(manager.listContacts());

manager.removeContact('John Doe');

console.log("Updated Contacts List:");
console.table(manager.listContacts());

manager.searchContacts('Maria');
