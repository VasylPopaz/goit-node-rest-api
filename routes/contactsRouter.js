import express from "express";

import contactsControllers from "../controllers/contactsControllers.js";
import { validateBody } from "../middlewares/validateBody.js";
import { isValidId } from "../middlewares/isValidId.js";
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

contactsRouter.get("/:id", isValidId, getById);

contactsRouter.post("/", validateBody(createContactSchema), createContact);

contactsRouter.put(
  "/:id",
  isValidId,
  validateBody(updateContactSchema),
  updateContact
);

contactsRouter.patch(
  "/:id",
  isValidId,
  validateBody(updateStatusContactSchema),
  updateStatusContact
);

contactsRouter.delete("/:id", isValidId, deleteContact);
