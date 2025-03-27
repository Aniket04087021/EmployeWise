import React, { useEffect, useState } from "react";
import { Table, Button, Container, Pagination, Alert, Spinner, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { fetchUsers, deleteUser } from "../api";
import UserCard from "../components/UserCard";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setIsLoading(true);
        const response = await fetchUsers(page);
        setUsers(response.data.data);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        setMessage("Failed to load users. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    loadUsers();
  }, [page]);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter(user => user.id !== id));
      setMessage("User deleted successfully!");
    } catch (error) {
      setMessage("Failed to delete user. Please try again.");
    }
  };

  const handleAddUser = () => {
    navigate("/add-user");
  };

  const renderPaginationItems = () => {
    const items = [];
    const maxVisiblePages = 5;
    const halfVisiblePages = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(1, page - halfVisiblePages);
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
      items.push(
        <Pagination.First key="first" onClick={() => setPage(1)} />,
        <Pagination.Prev key="prev" onClick={() => setPage(page - 1)} />
      );
    }

    for (let number = startPage; number <= endPage; number++) {
      items.push(
        <Pagination.Item 
          key={number} 
          active={number === page} 
          onClick={() => setPage(number)}
        >
          {number}
        </Pagination.Item>
      );
    }

    if (endPage < totalPages) {
      items.push(
        <Pagination.Next key="next" onClick={() => setPage(page + 1)} />,
        <Pagination.Last key="last" onClick={() => setPage(totalPages)} />
      );
    }

    return items;
  };

  return (
    <Container fluid className="pt-5">
      <Card className="shadow-sm">
        <Card.Header className="d-flex justify-content-between align-items-center bg-white">
          <h2 className="mb-0">User Management</h2>
          <Button variant="success" onClick={handleAddUser}>
            Add New User
          </Button>
        </Card.Header>
        <Card.Body>
          {message && (
            <Alert 
              variant={message.includes("successfully") ? "success" : "danger"} 
              onClose={() => setMessage("")} 
              dismissible
            >
              {message}
            </Alert>
          )}

          {isLoading ? (
            <div className="text-center my-4">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : users.length === 0 ? (
            <Alert variant="info" className="text-center">
              No users found.
            </Alert>
          ) : (
            <>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <UserCard 
                      key={user.id} 
                      user={user} 
                      onDelete={handleDelete} 
                    />
                  ))}
                </tbody>
              </Table>

              <div className="d-flex justify-content-center">
                <Pagination>
                  {renderPaginationItems()}
                </Pagination>
              </div>
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UsersList;