import React, { useState, useEffect } from "react";
import {toast} from 'react-toastify'
import { styles } from "../styles";
import blankImg from '../assets/image copy.png'




const WorkForm = ({ onSubmit, editingProduct, setEditingProduct }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (editingProduct) {
      setTitle(editingProduct.title);
      setDescription(editingProduct.description);
    } else {
      resetForm();
    }
  }, [editingProduct]);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setImage(null);
  };


  

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) formData.append("image", image);
    
toast.success('New Work Added');
    if (editingProduct) {
      onSubmit(editingProduct._id, formData);
    } else {
      onSubmit(formData);
    }

    resetForm();
    setEditingProduct(null);
  };

  return (
    <form className="flex flex-col items-center bg-white-100 w-full md:w-1/3 h-[auto] py-10 rounded-3xl shadow-card mx-5" onSubmit={handleSubmit}>
      <h1 className={`${styles.heroSubText} py-5 green-text-gradient text-center`}>OnyEze what's your recent <br /> <span className="text-red-700">Work today?</span></h1>
      
      <input
      className="w-4/5 my-3 px-5 py-3 rounded-md text-gray-800 bg-gray-300 outline-none outline-green-500 border-none"
        type="text"
        placeholder="Add Work Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
      className="w-4/5 my-3 px-5 py-3 bg-gray-300 outline-none text-gray-800 outline-green-500 border-none rounded-md"
    
        rows='4'
        placeholder="Add Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <label className="flex flex-col justify-center items-center mb-10 mt-8" htmlFor="image">

      <div className=" cursor-pointer h-4/5 w-4/5  bg-gray-300">
      <img className='w-full rounded' src={image ? URL.createObjectURL(image) : blankImg} alt="" />
      <input
      className="bg-gray-400 w-4/5 my-3 p-3"
      id="image"
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        hidden
        />
        </div>
      </label>
      <button className="bg-green-800 py-3 px-10 rounded-3xl my-5" type="submit">{editingProduct ? "Update" : "Add"} Work</button>
    </form>
  )
}

export default WorkForm;
