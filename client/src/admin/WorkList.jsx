import { motion } from "framer-motion";
import React from "react";
import { toast } from "react-toastify";

const WorkList = ({ products, onEdit, onDelete }) => {
    const works = products.Allworks;
    // console.log(works)
  return (
    <div className='w-full lg:grid grid-cols-4 px-0 gap-y-12'>
      { works?.map((item)=>(
          <div className="p-6 py-8 m-6 border black-gradient rounded-3xl shadow-[#915eff] shadow-xl z-10">
      <motion.div
      initial={{ opacity: 0, x: 50}}
      whileInView={{ opacity: 1, x: 0,
        scale: 1.1,
       transition:{duration: 2} }}
       key={item._id}
       className='flex flex-col md:py-8 justify-center items-center'
      >

          <img
            src={`https://onyeze-one-api.onrender.com/${item.image}`}
            alt={item.title}
            className='w-full md:w-4/4 rounded-xl '
          />
          <h3 className='font-semibold orange-text-gradient'>{item.title}</h3>
          <p className='text-xs md:px-4 green-text-gradient text-center'>{item.description}</p>
      </motion.div>
      <div className='flex justify-around items-center py-5 mt-8'>

          <button className="bg-blue-400 py-2 px-5 rounded-xl" onClick={() =>{ onEdit(item); toast.success('Navigate to Add Work To Edit!')}}>Edit</button>
          <button className="bg-red-400 py-2 px-5 rounded-xl" onClick={() => onDelete(item._id)}>Delete</button>
      </div>
        </div>
        ))}
    </div>
  );
};

export default WorkList;
