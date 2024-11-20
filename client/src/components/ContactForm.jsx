import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';
import '../style.css';


const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    company: '',
    jobTitle: '',
  });

  const handleSubmit = async () => {
    await axios.post('http://localhost:5000/contacts', form);
    setForm({ firstName: '', lastName: '', email: '', phoneNumber: '', company: '', jobTitle: '' });
    alert('Contact added successfully!');
  };

  return (
    <form>
      <TextField label="First Name" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} fullWidth margin="normal" />
      <TextField label="Last Name" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} fullWidth margin="normal" />
      <TextField label="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} fullWidth margin="normal" />
      <TextField label="Phone Number" value={form.phoneNumber} onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })} fullWidth margin="normal" />
      <TextField label="Company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} fullWidth margin="normal" />
      <TextField label="Job Title" value={form.jobTitle} onChange={(e) => setForm({ ...form, jobTitle: e.target.value })} fullWidth margin="normal" />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Add Contact
      </Button>
    </form>
  );
};

export default ContactForm;
