const express = require("express");
const { submitForm, getForms, updateForm, deleteForm } = require("../controllers/formController");

const router = express.Router();

router.post("/submit-form", submitForm);
router.get("/", getForms);
router.put("/update-form/:id", updateForm);
router.delete("/delete-form/:id", deleteForm);

module.exports = router;
