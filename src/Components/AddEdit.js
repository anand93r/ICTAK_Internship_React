import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase-config";
import { Button } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";

const AddEdit = () => {
  const location = useLocation();
  const { value, isEdit } = location.state;

  const navigate = useNavigate();

  const [course, setCourse] = useState(
    value
      ? {
          id: value.id,
          title: value.title,
          cDuration: value.cDuration,
          cFee: value.cFee,
          regEnd: value.regEnd,
          regStart: value.regStart,
          overview: value.overview,
        }
      : {
          id: "",
          title: "",
          cDuration: "",
          cFee: "",
          regEnd: "",
          regStart: "",
          overview: "",
        }
  );

  const handleChange = (e) => {     // to change value whenever typing
    let value = e.target.value;
    let name = e.target.name;

    setCourse({ ...course, [name]: value });
  };

  const coursesCollectionRef = collection(db, "courses"); // to specify the file
  const [newCourse, setNewCourse] = useState([]);

  const createCourse = async () => {
    //create api
    await addDoc(coursesCollectionRef, ...newCourse);
  };

  const addCourse = (event) => {
    event.preventDefault();
    console.log(event);
    const data = new FormData(event.target);
    console.log("data", data);
    const course = Object.fromEntries(data.entries());
    setNewCourse([course]);
  };

  const updateCourse = async (id, course) => {
    // update api
    const courseDoc = doc(db, "courses", id);
    await updateDoc(courseDoc, course);
  };
  
  const editCourse = (event,course) =>{
    event.preventDefault()                                // to prevent the null error because of refresh
    updateCourse(course.id, course);
    navigate("/admin/dashboard");
  }

  useEffect(() => {
    if (newCourse != []) {
      createCourse();
      console.log("new", newCourse);
    }
  }, [newCourse]);

  return (
    <div>
      <Link to="/admin/dashboard">
        <Button>Back</Button>
      </Link>
      <h1>{isEdit ? "Edit Courses" : "Add Courses"}</h1>

      <form
        onSubmit={(event) => {
          isEdit
            ? editCourse(event, course)  
            : addCourse(event);
        }}
      >
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          value={course.title}
          name="title"
          type="text"
          placeholder="title"
          style={{ width: "500px" }}
        />
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          value={course.regStart}
          name="regStart"
          type="text"
          placeholder="Registration Start"
        />
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          value={course.regEnd}
          name="regEnd"
          type="text"
          placeholder="Registration End"
        />
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          value={course.cDuration}
          name="cDuration"
          type="text"
          placeholder="Course Duration"
        />
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          value={course.cFee}
          name="cFee"
          type="text"
          placeholder="Course fee"
        />
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          value={course.overview}
          name="overview"
          type="text"
          placeholder="Overview"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddEdit;
