import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Form, Button, Alert } from "react-bootstrap";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ first_name: "", last_name: "", email: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`https://reqres.in/api/users/${id}`);
      setUser(response.data.data);
    } catch (err) {
      console.error("Error fetching user", err);
    }
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://reqres.in/api/users/${id}`, user);
      setMessage("User updated successfully!");
      setTimeout(() => navigate("/users"), 1000);
    } catch (err) {
      console.error("Error updating user", err);
    }
  };

  return (
    <Container className="mt-4">
      <h2>Edit User</h2>
      {message && <Alert variant="success">{message}</Alert>}
      <Form onSubmit={updateUser}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" value={user.first_name} onChange={(e) => setUser({ ...user, first_name: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" value={user.last_name} onChange={(e) => setUser({ ...user, last_name: e.target.value })} />
        </Form.Group>
        <Button type="submit" variant="primary">Update</Button>
      </Form>
    </Container>
  );
};

export default EditUser;
