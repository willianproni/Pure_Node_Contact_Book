# API Contact Book

### Features
- Create (POST): Add new contacts to the agenda.
- Read (GET): Retrieve all contacts or a specific contact by ID.
- Update (PUT): Modify existing contact details.
- Delete (DELETE): Remove contacts from the agenda.

## Getting Started
Clone the repo, enter in the Pure_Node_Contact_Book

```
git clone https://github.com/willianproni/Pure_Node_Contact_Book.git
cd NodePureContacts
node src/index
```

The server will start on http://localhost:3000.

### API Endpoints

- GET /contacts: List all contacts.

- GET /contacts/:id: Get a specific contact by ID.

- POST /contacts: Create a new contact.
  - Body (JSON): { "name": "John Doe", "email": "john@example.com", "phone": "11912345678" }

- PUT /contacts/:id: Update an existing contact.
  - Body (JSON): { "name": "John Doe", "email": "john@example.com", "phone": "11912345678" }

- DELETE /contacts/:id: Delete a contact by ID.

### Technologies Used
Node.js (Pure/Native http module)

