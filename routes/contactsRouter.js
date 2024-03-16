import express from "express";

import contactsControllers from "../controllers/contactsControllers.js";
import { validateBody } from "../helpers/validateBody.js";
import {
  createContactSchema,
  updateContactSchema,
} from "../schemas/contactsSchemas.js";

const {
  getAllContacts,
  getOneContact,
  createContact,
  updateContact,
  deleteContact,
} = contactsControllers;

export const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", getOneContact);

contactsRouter.post("/", validateBody(createContactSchema), createContact);

contactsRouter.put("/:id", validateBody(updateContactSchema), updateContact);

contactsRouter.delete("/:id", deleteContact);
