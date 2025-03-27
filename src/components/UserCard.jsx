import React, { useState } from "react";
import { Button, OverlayTrigger, Tooltip, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UserCard = ({ user, onDelete }) => {
  const navigate = useNavigate();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleEditClick = () => {
    navigate(`/edit/${user.id}`);
  };

  const handleViewDetails = () => {
    navigate(`/user/${user.id}`);
  };

  const handleDeleteConfirm = () => {
    onDelete(user.id);
    setShowDeleteConfirm(false);
  };

  return (
    <>
      <tr>
        <td className="align-middle">
          <img 
            src={user.avatar} 
            alt={`${user.first_name} ${user.last_name}`} 
            className="rounded-circle" 
            width="50" 
            height="50" 
            style={{ objectFit: 'cover' }}
          />
        </td>
        <td className="align-middle">
          {user.first_name} {user.last_name}
        </td>
        <td className="align-middle">{user.email}</td>
        <td className="align-middle">
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>View Details</Tooltip>}
          >
            <Button 
              variant="outline-info" 
              size="sm" 
              className="me-1" 
              onClick={handleViewDetails}
            >
              <i className="bi bi-eye"></i>
            </Button>
          </OverlayTrigger>

          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>Edit User</Tooltip>}
          >
            <Button 
              variant="outline-warning" 
              size="sm" 
              className="me-1" 
              onClick={handleEditClick}
            >
              <i className="bi bi-pencil"></i>
            </Button>
          </OverlayTrigger>

          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>Delete User</Tooltip>}
          >
            <Button 
              variant="outline-danger" 
              size="sm" 
              onClick={() => setShowDeleteConfirm(true)}
            >
              <i className="bi bi-trash"></i>
            </Button>
          </OverlayTrigger>
        </td>
      </tr>

      <Modal show={showDeleteConfirm} onHide={() => setShowDeleteConfirm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete user {user.first_name} {user.last_name}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteConfirm(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteConfirm}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserCard;