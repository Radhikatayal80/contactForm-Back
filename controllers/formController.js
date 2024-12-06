const Form = require("../models/form");

exports.submitForm = async (req, res) => {
  try {
    console.log("Form data received:", req.body);
    const newForm = new Form(req.body);
    await newForm.save();
    res.status(200).json({ message: "Form data saved successfully!" });
  } catch (error) {
    console.error("Error saving form data:", error.message);
    res.status(500).json({ message: "Error saving form data" });
  }
};

exports.getForms = async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (error) {
    console.error("Error fetching form data:", error.message);
    res.status(500).json({ message: "Error fetching form data" });
  }
};

exports.updateForm = async (req, res) => {
  try {
    const updatedForm = await Form.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedForm) {
      return res.status(404).json({ message: "Form not found" });
    }
    res.status(200).json({ message: "Form data updated successfully", updatedForm });
  } catch (error) {
    console.error("Error updating form data:", error.message);
    res.status(500).json({ message: "Error updating form data" });
  }
};

exports.deleteForm = async (req, res) => {
  try {
    const deletedForm = await Form.findByIdAndDelete(req.params.id);
    if (!deletedForm) {
      return res.status(404).json({ message: "Form not found" });
    }
    res.status(200).json({ message: "Form data deleted successfully", deletedForm });
  } catch (error) {
    console.error("Error deleting form data:", error.message);
    res.status(500).json({ message: "Error deleting form data" });
  }
};
