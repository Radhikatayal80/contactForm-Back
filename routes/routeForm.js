const express = require("express");
const { submitForm, getForms, updateForm, deleteForm } = require("../controllers/formController");

const router = express.Router();

// POST route to submit form
router.post("/submit-form", submitForm);

// GET route to fetch all forms
router.get("/", getForms);

// PUT route to update form by ID
router.put("/update-form/:id", updateForm);

// DELETE route to delete form by ID
router.delete("/delete-form/:id", deleteForm);

module.exports = router;
