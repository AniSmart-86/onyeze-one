import React, { useEffect, useState } from 'react'
import WorkForm from '../admin/WorkForm'
import WorkList from '../admin/WorkList'
import { addProduct, deleteProduct, editProduct, getProducts } from '../admin/AdimAPI';
import './Admin.css'
import { FaArrowRightLong, FaX } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Admin = () => {
 
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);
    const [sideBar, setSideBar] = useState(false);
    const [showContent, setShowContent] = useState(false);

    const navigate = useNavigate();
  
  
    const Token = localStorage.getItem('token');
    useEffect(()=>{
  if(!Token){
    navigate('/login') 
  }
  },[Token]);


    const toggleContent =()=>{
        setShowContent(!showContent);
        setSideBar(false);
    }
    useEffect(() => {
      fetchProducts();
    }, []);
  
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  
    
    const handleAddProduct = async (formData) => {
      try {
        await addProduct(formData);
        fetchProducts();
      } catch (error) {
        console.error("Error adding product:", error);
      }
    };
  
    const handleEditProduct = async (id, formData) => {
      try {
        await editProduct(id, formData);
        fetchProducts();
        setEditingProduct(null);
      } catch (error) {
        console.error("Error editing work:", error);
      }
    };
    const handleDeleteProduct = async (id) => {
        try {
           await deleteProduct(id);
            fetchProducts();
            toast.success('Work Deleted Successfully!');
        } catch (error) {
          console.error("Error deleting work:", error);
        }
      };
      
  return (
    <div className='black-gradient py-24 admin pl-[10%]'>
        <div className={`fixed top-10 left-0 h-[100vh] green-pink-gradient z-50 ${ sideBar? 'w-44' : 'w-10' }`}>
    
        <div className='flex flex-col justify-center items-center mt-10 text-white'>
            {
                sideBar? <FaX onClick={()=> setSideBar(false)} size='24' className=' mb-24 flex justify-self-end items-end cursor-pointer' /> : <FaArrowRightLong onClick={()=> setSideBar(true)} size='24'  className='mb-24 flex justify-self-end items-end cursor-pointer' />
            }
           
            <p onClick={toggleContent} className={`font-medium py-4 hover:bg-gray-100 hover:text-tertiary px-8 cursor-pointer ${sideBar? '' : 'hidden' }`}>Add Work</p>

            <p onClick={toggleContent} className={`font-medium py-4 hover:bg-gray-100 hover:text-tertiary px-5 cursor-pointer ${sideBar? '' : 'hidden'}`}>Display Works</p>
        </div>
        </div>


        {
            showContent && (
                <WorkForm
                onSubmit={editingProduct ? handleEditProduct : handleAddProduct}
                editingProduct={editingProduct}
                setEditingProduct={setEditingProduct}
               />
    
            ) || (
                <WorkList
                products={products}
                onEdit={(item) => setEditingProduct(item)}

                onDelete={handleDeleteProduct}
               />
            )
        }
       
       
    </div>
  )
}

export default Admin