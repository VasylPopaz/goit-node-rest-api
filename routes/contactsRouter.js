import express from "express";

import contactsControllers from "../controllers/contactsControllers.js";
import { validateBody } from "../helpers/validateBody.js";
import {
  createContactSchema,
  updateContactSchema,
  updateStatusContactSchema,
} from "../schemas/contactsSchemas.js";

const {
  getAllContacts,
  getById,
  createContact,
  updateContact,
  updateStatusContact,
  deleteContact,
} = contactsControllers;

export const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", getById);

contactsRouter.post("/", validateBody(createContactSchema), createContact);

contactsRouter.put("/:id", validateBody(updateContactSchema), updateContact);

contactsRouter.patch(
  "/:id",
  validateBody(updateStatusContactSchema),
  updateStatusContact
);

contactsRouter.delete("/:id", deleteContact);
