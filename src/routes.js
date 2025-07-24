const contactController = require("./controller/contactController");

module.exports = [
  {
    endpoint: "/contacts",
    method: "GET",
    handler: contactController.listContact,
  },
  {
    endpoint: "/contacts/:id",
    method: "GET",
    handler: contactController.contactById,
  },
  {
    endpoint: "/contacts",
    method: "POST",
    handler: contactController.createContact,
  },
  {
    endpoint: "/contacts/:id",
    method: "PUT",
    handler: contactController.editContact,
  },
    {
    endpoint: "/contacts/:id",
    method: "DELETE",
    handler: contactController.deleteContact,
  },
];
