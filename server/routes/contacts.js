const express = require('express');
const router = express.Router();
const Contact = require('../models/contact.js');

// Create a new contact
router.post('/', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(400).json({ message: "Error creating contact", error: err });
  }
});

// Get contacts with pagination
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; // Default page 1
    const limit = parseInt(req.query.limit) || 5; // Default 5 items per page
    const skip = (page - 1) * limit;

    const contacts = await Contact.find().skip(skip).limit(limit);
    const totalContacts = await Contact.countDocuments();

    res.status(200).json({
      contacts,
      totalContacts,
      totalPages: Math.ceil(totalContacts / limit),
      currentPage: page,
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching contacts", error: err });
  }
});

// Update a contact
router.put('/:id', async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // Ensure validators run during update
    );
    if (!updatedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.status(200).json(updatedContact);
  } catch (err) {
    res.status(400).json({ message: "Error updating contact", error: err });
  }
});

// Delete a contact
router.delete('/:id', async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting contact", error: err });
  }
});

module.exports = router;
