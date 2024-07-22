import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/firebaseConfig";
import { addContact } from "../redux/contactActions";
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const AddContact = ({ onClose }) => {
  const initialContactState = {
    id: "",
    avatar: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  };

  const [contact, setContact] = useState(initialContactState);
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const generateRandomId = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newContact = { ...contact, id: generateRandomId() };

    if (file) {
      const fileRef = ref(storage, `avatars/${file.name}`);
      await uploadBytes(fileRef, file);
      const avatarUrl = await getDownloadURL(fileRef);
      newContact.avatar = avatarUrl;
    }

    dispatch(addContact(newContact));
    setContact(initialContactState);
    setFile(null);
    onClose();
    navigate("/");
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <section className="contact-us" id="contact-section">
      <Form id="contact" onSubmit={handleSubmit} className="bg-dark">
        <div
          className="close-btn d-flex justify-content-end"
          onClick={handleClose}
        >
          <span className="text-white">X</span>
        </div>
        <div className="section-heading">
          <h4 className="text-white">Add Contact</h4>
        </div>

        <center >
          <img src="src/assets/images/user.png" alt="" width={200} height={200} />
        </center>

       

        <input type="file" onChange={handleFileChange} className="bp" />
       
            <div className="inputField">
              <input
                name="name"
                placeholder="Enter your Name"
                value={contact.name}
                onChange={handleChange}
              />
            </div>
        

            <div className="inputField">
              <input
                name="email"
                placeholder="Enter Your Email"
                value={contact.email}
                onChange={handleChange}
              // className="p-4"
              />
            </div>
        

        

            <div className="inputField">
              <input
                name="phone"
                placeholder="Phone No"
                value={contact.phone}
                onChange={handleChange}
              />
            </div>
          

            <div className="inputField">
              <input
                name="address"
                placeholder="Address"
                value={contact.address}
                onChange={handleChange}
              />
            </div>
       


        <div className="inputField">
          <input
            name="notes"
            placeholder="Job titles and Company"
            value={contact.notes}
            onChange={handleChange}
            className="bd"
          ></input>
        </div>
       

        <div className="inputField btn">
          <button type="submit" className="btn22 bg-light text-dark">
            Add
          </button>
        </div>
      </Form>
    </section>
  );
};

export default AddContact;
