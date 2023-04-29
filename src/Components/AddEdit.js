import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase-config";
import { Button } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import uploadImage from "./Images/upload.png";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const AddEdit = () => {
  const location = useLocation();
  const { value, isEdit } = location.state;

  const navigate = useNavigate();

  const [imageFile, setImageFile] = useState("");

  const [downloadUrl, setDownloadUrl] = useState("");

  const [course, setCourse] = useState(
    value
      ? {
          id: value.id,
          title: value.title,
          image: value.image,
          cDuration: value.cDuration,
          cFee: value.cFee,
          regEnd: value.regEnd,
          regStart: value.regStart,
          overview: value.overview,
        }
      : {
          id: "",
          title: "",
          image: "",
          cDuration: "",
          cFee: "",
          regEnd: "",
          regStart: "",
          overview: "",
        }
  );

  const handleChange = (e) => {
    // to change value whenever typing
    let value = e.target.value;
    let name = e.target.name;

    setCourse({ ...course, [name]: value });
  };

  const uploadImage = () => {
    const name = new Date().getTime() + imageFile.name;

    const storageRef = ref(storage, name);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("downloadURL", downloadURL);
          // setNewCourse((prev)=>({...prev, image:downloadURL}))
          setDownloadUrl(downloadURL);    // send downloadurl to usestate
        });
      }
    );
  };

  useEffect(() => {
    imageFile && uploadImage();   //condition to prevent uploading empty data
  }, [imageFile]);

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
    const course = Object.fromEntries(data.entries());   //convert to object
    console.log("course", course);
    course.image = downloadUrl;      //adding downloadurl to course
    setNewCourse([course]);
  };

  const updateCourse = async (id, course) => {
    // update api
    const courseDoc = doc(db, "courses", id);
    await updateDoc(courseDoc, course);
  };

  const editCourse = (event, course) => {
    event.preventDefault();    // to prevent the null error because of refresh
    course.image = downloadUrl;       //adding downloadurl to course
    updateCourse(course.id, course);
    navigate("/admin/dashboard");
  };

  useEffect(() => {
    if (newCourse != []) {                 // after running addcourse() because empty array goes in
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
      <input
        onChange={(e) => {
          setImageFile(e.target.files[0]);
        }}
        name="image"
        type="file"
        style={{ width: "500px" }}
      />
      <form
        onSubmit={(event) => {
          isEdit ? editCourse(event, course) : addCourse(event);
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
        <label for="open">Currently Available:</label>

        <select name="open" id="open">
          <option value="true">Yes</option>
          <option value="false">No</option>
          
        </select>

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
