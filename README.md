# Contacts Manager

The Contacts Manager is a JavaScript class that allows users to manage a list of contacts. It provides functionalities to add, remove, list, and search contacts.

## Reasons for I use the Adapter and Observer

- *Observer:* I chose the Observer pattern because it allows `ContactsManager` to automatically notify interested objects, such as `SearchObserver`, about changes in their contact list, ensuring flexible and decoupled communication between them. This is useful for dynamically updating search results when contacts are added or removed;
- *Adpater:* It was chosen to adapt the interface of Contact objects to the specific needs of `ContactsManager`. This allows `ContactsManager` to work with different types of contacts uniformly, without modifying its internal logic, thus ensuring flexibility and code reusability.

## Class: ContactsManager

### Constructor
Creates a new instance of the ContactsManager class.

```javascript
const manager = new ContactsManager();
```

### Method: addContact(contact)
Adds a new contact to the manager.

- `contact`: A Contact object representing the contact to be added.

```javascript
manager.addContact(contact);
```

### Method: removeContact(contactName)
Removes a contact from the manager based on its name.

- `contactName`: The name of the contact to be removed

```javascript
manager.removeContact(contactName);
```

### Method: listContacts()
Returns an array containing all contacts currently stored in the manager.

```javascript
const contacts = manager.listContacts();
```

### Method: searchContacts(query)
Searches for contacts based on a query string and notifies observers with the search results.

- `query`: The query string to search for.

```javascript
manager.searchContacts(query);
```

### Method: update(contacts, query)
Updates the observer with the latest contacts and performs a search based on the provided query.

- `contacts`: An array of Contact objects.
- `query`: The query string to search for.

```javascript
searchObserver.update(contacts, query);
```

### Method: addObserver(observer)
Adds an observer to the subject.

- `observer`: The observer object to be added.

```javascript
subject.addObserver(observer);
```

### Method: removeObserver(observer)
Removes an observer from the subject.

- `observer`: The observer object to be removed.

```javascript
subject.removeObserver(observer);
```

### Method: notifyObservers(contacts, query)
Notifies all observers with the latest contacts and query.

- `contacts`: An array of Contact objects.
- `query`: The query string.

```javascript
subject.notifyObservers(contacts, query);
```


