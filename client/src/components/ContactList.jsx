import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import axios from 'axios';
import '../style.css';


const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [editContact, setEditContact] = useState(null); // For editing contact
  const [openDialog, setOpenDialog] = useState(false); // Dialog state for editing

  useEffect(() => {
    fetchContacts();
  }, [page]);

  const fetchContacts = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/contacts?page=${page}&limit=5`);
      // console.log(response)
      setContacts(response?.data?.contacts || []);
      setTotalPages(response.data.totalPages || 1);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/contacts/${id}`);
      fetchContacts(); // Refresh contact list after deletion
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  // Open Edit Dialog
  const handleEdit = (contact) => {
    setEditContact(contact);
    setOpenDialog(true);
  };

  // Save Edited Contact
  const saveContact = async () => {
    try {
      await axios.put(`http://localhost:5000/contacts/${editContact._id}`, editContact);
      setOpenDialog(false);
      fetchContacts(); // Refresh contact list after editing
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  if (loading) {
    return <p>Loading contacts...</p>;
  }

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>PhoneNumber</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow key={contact._id}>
              <TableCell>{contact.firstName} {contact.lastName}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.phoneNumber}</TableCell>
              <TableCell>
                <Button onClick={() => handleEdit(contact)}>Edit</Button>
                <Button onClick={() => handleDelete(contact._id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination Controls */}
      <div>
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</Button>
        <span>{page} / {totalPages}</span>
        <Button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next</Button>
      </div>

      {/* Edit Contact Dialog */}
      {openDialog && (
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>Edit Contact</DialogTitle>
          <DialogContent>
            <TextField
              label="First Name"
              value={editContact.firstName}
              onChange={(e) => setEditContact({ ...editContact, firstName: e.target.value })}
              fullWidth
              margin="dense"
            />
            <TextField
              label="Last Name"
              value={editContact.lastName}
              onChange={(e) => setEditContact({ ...editContact, lastName: e.target.value })}
              fullWidth
              margin="dense"
            />
            <TextField
              label="Email"
              value={editContact.email}
              onChange={(e) => setEditContact({ ...editContact, email: e.target.value })}
              fullWidth
              margin="dense"
            />
            <TextField
              label="Phone Number"
              value={editContact.phoneNumber}
              onChange={(e) => setEditContact({ ...editContact, phoneNumber: e.target.value })}
              fullWidth
              margin="dense"
            />
            <TextField
              label="Company"
              value={editContact.company}
              onChange={(e) => setEditContact({ ...editContact, company: e.target.value })}
              fullWidth
              margin="dense"
            />
            <TextField
              label="Job Title"
              value={editContact.jobTitle}
              onChange={(e) => setEditContact({ ...editContact, jobTitle: e.target.value })}
              fullWidth
              margin="dense"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
            <Button onClick={saveContact}>Save</Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default ContactList;
