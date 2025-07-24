let contacts = require("../mock/contacts");

module.exports = {
  listContact(req, res) {
    if (contacts.length === 0) {
      res.send(204, null);
      return;
    }

    res.send(200, contacts);
  },
  contactById(req, res) {
    const { id } = req.params;

    const contact = contacts.find((contact) => contact.id === id);

    if (!contact) {
      res.send(400, { error: "Contact not found" });
      return;
    }

    res.send(200, contact);
  },
  createContact(req, res) {
    const { body } = req;

    const lastId = Number(contacts[contacts.length - 1].id);

    const newContact = {
      id: (lastId + 1).toString(),
      name: body.name,
      email: body.email,
      phone: body.phone,
    };

    contacts.push(newContact);

    res.send(201, { data: newContact });
  },
  editContact(req, res) {
    const { body } = req;
    const { id } = req.params;
    const contact = contacts.find((contact) => contact.id === id);

    if (!contact) {
      res.send(400, { error: "Contact not found" });

      return;
    }

    contacts = contacts.map((contact) => {
      return contact.id === id ? { ...contact, ...body } : contact;
    });

    res.send(200, { data: body });
  },
  deleteContact(req, res) {
    const { id } = req.params;

    contacts = contacts.filter((contact) => contact.id !== id);

    res.send(200, { delete: id });
  },
};
