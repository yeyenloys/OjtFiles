import React, { useState, useEffect } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Cards } from "./Cards";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [add, setAdd] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [students, setStudents] = useState([
    {
      name: "Mariene",
      course: "Computer Engineering",
    },
    {
      name: "Kyle",
      course: "Computer Engineering",
    },
  ]);

  useEffect(() => {
    const user = localStorage.getItem("userInfo");
    if (user) {
      setUserInfo(JSON.parse(user));
    }
  }, []);

  const handleLogout = () => {
    navigate("/login");
  };

  const handleChangeName = (e) => {
    setAdd({ ...add, name: e.target.value });
  };

  const handleChangeCourse = (e) => {
    setAdd({ ...add, course: e.target.value });
  };

  const handleAdd = () => {
    if (add.name !== "" && add.course !== "") {
      setStudents([...students, add]);
      setAdd({ name: "", course: "" });
    }
  };
  const handleDelete = (id) => {
    setStudents(students.filter((_, key) => key !== id));
  };

  return (
    <>
      <div style={{ backgroundColor: "transparent" }}>
        <h1>Dashboard</h1>
      </div>
      <div>
        <Cards data={students} handleDelete={handleDelete} />
        Name:
        <input
          value={add.name}
          type="text"
          label="Name"
          onChange={handleChangeName}
        />
        &nbsp; Course:
        <input
          value={add.course}
          type="text"
          label="Name"
          onChange={handleChangeCourse}
        />
        <button
          style={{
            backgroundColor: "transparent",
          }}
          onClick={handleAdd}>
          Add
        </button>
        <Button
          style={{
            position: "absolute",
            top: 10,
            textTransform: "none",
            right: 10,
            backgroundColor: "transparent",
          }}
          variant="contained"
          onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </>
  );
};
