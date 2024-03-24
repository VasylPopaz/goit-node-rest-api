import { ctrlWrapper } from "../helpers/ctrlWrapper.js";
import { HttpError } from "../helpers/HttpError.js";
import {
  addContact,
  getContactById,
  getContacts,
  removeContact,
  updateContactById,
} from "../services/contactsServices.js";

const getAllContacts = async (req, res) => {
  const result = await getContacts();

  res.json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const result = await getContactById(id);

  if (!result) {
    throw HttpError(404);
  }

  res.json(result);
};

const createContact = async (req, res) => {
  const result = await addContact(req.body);

  res.status(201).json(result);
};

const updateContact = async (req, res) => {
  const { id } = req.params;
  const result = await updateContactById(id, req.body);

  if (!result) {
    throw HttpError(404);
  }

  res.json(result);
};

const updateStatusContact = async (req, res) => {
  const { id } = req.params;
  const result = await updateContactById(id, req.body);

  if (!result) {
    throw HttpError(404);
  }

  res.json(result);
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const result = await removeContact(id);

  if (!result) {
    throw HttpError(404);
  }

  res.json(result);
};

export default {
  getAllContacts: ctrlWrapper(getAllContacts),
  getById: ctrlWrapper(getById),
  createContact: ctrlWrapper(createContact),
  updateContact: ctrlWrapper(updateContact),
  updateStatusContact: ctrlWrapper(updateStatusContact),
  deleteContact: ctrlWrapper(deleteContact),
};
