import { Contact } from "../models/Contact.js";

export async function getContacts() {
  const contacts = await Contact.find({});

  return contacts;
}

export async function getContactById(id) {
  try {
    const contact = await Contact.findById(id);

    return contact;
  } catch (error) {
    return null;
  }
}

export async function addContact(data) {
  const newContact = await Contact.create(data);

  return newContact;
}

export const updateContactById = async (id, data) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(id, data, {
      new: true,
    });

    return updatedContact;
  } catch (error) {
    return null;
  }
};

export async function removeContact(id) {
  try {
    const deletedContact = await Contact.findByIdAndDelete(id);

    return deletedContact;
  } catch (error) {
    return null;
  }
}
