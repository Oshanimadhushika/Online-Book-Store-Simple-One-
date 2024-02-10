const Book = require('../model/Book')
const { response } = require('express')
const req = require('express/lib/request');
const res = require('express/lib/response');

const saveBook = (req,res) => {

    const bookObj = new Book({
       book_id:req.body.book_id,
        title:req.body.title,
        author: req.body.author,
        description: req.body.description,
        price:req.body.price,
        amount:req.body.amount

    })

    // console.log(itemObj);

    Book.findOne({book_id: req.body.book_id})
        .then(response =>{
            if(response === null){
                //no exist item
                bookObj.save().then(()=>{
                    res.status(201).json({message:"Saved"})
                }).catch((err)=>{
                    res.status(500).json({message:"Saved Failed"})
                })
            }else{
                res.status(409).json({message:"Book already entered"})
            }
        
        }).catch((err)=>{
            res.status(500).json({message:"Internal server error"})
        })
}

const getBook = (req, res) => {
   Book.find({})
   .then(books => res.json(books))
   .catch(err => res.json(err))
}

const getSelectBook = (req,res) =>{
    const id = req.params.id;
    Book.findById({_id:id})
    .then(books => res.json(books))
    .catch(err => res.json(err))
}

const updateBook = (req,res) =>{
    const id = req.params.id;
    Book.findByIdAndUpdate({_id: id}, {
      book_id:req.body.book_id,
      title:req.body.title,
      author: req.body.author,
      description: req.body.description,
      price:req.body.price,
      amount:req.body.amount})

    .then(books => res.json(books))
    .catch(err => res.json(err))
}


const deleteBook = (req,res) => { 
    const id = req.params.id;
    Book.findByIdAndDelete({_id:id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
}


module.exports = {saveBook,getBook,getSelectBook,updateBook,deleteBook}