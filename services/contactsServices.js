import { Contact } from "../models/Contact.js";

export async function getContacts() {
  const contacts = await Contact.find({});

  return contacts;
}

export async function getContactById(id) {
  const contact = await Contact.findById(id);

  return contact;
}

export async function addContact(data) {
  const newContact = await Contact.create(data);

  return newContact;
}

export const updateContactById = async (id, data) => {
  const updatedContact = await Contact.findByIdAndUpdate(id, data, {
    new: true,
  });

  return updatedContact;
};

export async function removeContact(id) {
  const deletedContact = await Contact.findByIdAndDelete(id);

  return deletedContact;
}
