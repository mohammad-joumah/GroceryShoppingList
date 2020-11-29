const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

// landing page
router.get('/', (req, res) => {
    Product.find((err, data) => {
        if (err) throw err.message;
        res.render('index', { data });
    }).sort({checked:false})
    
})

// creating new Artical rout
router.post('/createArtical',(req,res)=>{
    let newProduct= new Product(req.body);
    newProduct.save(err=>{
        if (err) throw err.message
        res.redirect('/')
    })
})

// getting product ditals
router.get('/getDetail',(req,res)=>{
    let id=req.query.productid;
    Product.findById(id, (err, data) => {
        if (err) throw err.message;
        res.json(data);
    });
})

// update product 
router.post('/updateArtical',(req,res)=>{
    
    Product.findByIdAndUpdate(req.body.id,req.body,err=>{
        if(err) throw err;
        res.redirect('/');
    })
})
// delete product rout
router.get('/deleteProduct/:id',(req,res)=>{
    
    Product.findByIdAndDelete(req.params.id, (err) => {
        if (err) throw err;
        // req.flash('changeInfo', 'One products has been deleted!')
        res.redirect('/');
        
    })
});

// checked artical
router.post('/checked/:id',(req,res)=>{
    Product.findById(req.params.id,(err,data)=>{
        if(err) throw err;
        if(data.checked){
            Product.findByIdAndUpdate(req.params.id,{checked:false},err=>{
                res.redirect('/')
            })
        }
        else{
            Product.findByIdAndUpdate(req.params.id,{checked:true   },err=>{
                res.redirect('/')
            })
        }
        
    })
})





module.exports = router