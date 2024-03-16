import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const contactsPath = path.resolve("db", "contacts.json");

export async function updateContacts(contacts) {
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

export async function getContacts() {
  const contacts = await fs.readFile(contactsPath);

  return JSON.parse(contacts);
}

export async function getContactById(id) {
  const contacts = await getContacts();
  const contactById = contacts.find((item) => item.id === id);

  return contactById || null;
}

export async function addContact(data) {
  const contacts = await getContacts();

  const newContact = {
    id: nanoid(),
    ...data,
  };
  contacts.push(newContact);

  await updateContacts(contacts);

  return newContact;
}

export const updateContactById = async (id, body) => {
  const contacts = await getContacts();
  const index = contacts.findIndex((item) => item.id === id);

  if (index === -1) {
    return null;
  }

  Object.keys(body).map((key) => {
    contacts[index][key] = body[key];
  });

  contacts[index] = { id, ...contacts[index] };
  await updateContacts(contacts);

  return contacts[index];
};

export async function removeContact(id) {
  const contacts = await getContacts();
  const index = contacts.findIndex((item) => item.id === id);

  if (index === -1) return null;

  const [result] = contacts.splice(index, 1);

  await updateContacts(contacts);

  return result;
}
