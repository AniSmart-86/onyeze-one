const express = require("express");
const multer = require("multer");
const Workmodel = require("../model/worksModel.js");
// const cloudinary = require("cloudinary").v2;
const router = express.Router();
const jwt = require('jsonwebtoken')

// Multer setup for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/images");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // 5 MB file size limit
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("Only image files are allowed!"));
    }
    cb(null, true);
  },
});

router.post("/add", upload.single("image"), async (req, res) => {
  try {
    const { title, description } = req.body;
    const image = req.file;

    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }



  //   if(imageFile){
  //     const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image"})
  //     const imageUrl = imageUpload.secure_url
  
  //     await Workmodel.findByIdAndUpdate({image:imageUrl});
  // }

    if (!title || !description) {
      res.status(500).json({ error: "Please Fill All The Required Fields" });
    }

    const works = new Workmodel({ title, description, image: image.path });
    await works.save();
    res.status(201).json({ message: "New Work added successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error adding work" });
  }
});





// Edit a works
router.put("/edit/:id", upload.single("image"), async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const updatedData = { title, description };
    if (req.file) updatedData.image = req.file.path; // Update image if uploaded

    const works = await Workmodel.findByIdAndUpdate(id, updatedData, { new: true });

    if (!works){ return res.status(404).json({ error: "Work Not Found" });}
    res.status(200).json({ message: "Work updated successfully", works });

  } catch (error) {
    res.status(500).json({ error: "Error updating Work" });
  }
});


// Delete a works
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const works = await Workmodel.findByIdAndDelete(id);

    if (!works) return res.status(404).json({ error: "Work not found" });

    res.status(200).json({ message: "Work deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting Work" });
  }
});


// Get all workss
router.get("/get", async (req, res) => {
  try {
    const Allworks = await Workmodel.find();
    res.status(200).json({ message: "works fetched", Allworks});
  } catch (error) {
    res.status(500).json({ error: "Error fetching Work" });
  }
});






// API FOR ADMIN LOGIN
router.post("/login", async (req, res)=>{


  try {
  
      const {email, password} = req.body
  
      if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
  
          const token = jwt.sign({data: email+password },  process.env.JWT_SECRET, {expiresIn: '1h'});
          res.json({success: true, token})
  
      }else{
          res.json({success: false, message: "Invalid credentials"})
      }
      

  } catch (error) {
      console.log(error)
      res.json({success:false, message: error.message})
  }
  
  
  });


module.exports = router;
