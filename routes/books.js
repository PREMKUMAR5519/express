const express = require("express")
const router = express.Router()
const book = require("../models/book")

//post method
router.post("/", async (req, res)=>{
    const bok = new book({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description
    })


 try {
    const saveBook = await bok.save()
    res.send(saveBook)
 } catch (error) {
    res.status(400).send(error)
    
 }
})

//get method
router.get("/", async(req, res)=>{
    try {
        const books = await book.find()
        res.send(books)
    } catch (error) {
        res.status(400).send(error)
    }
} )
//put method
router.put("/:id", async(req, res)=>{
    try {
        const bookie = await book.findByIdAndUpdate(req.params.id, req.body,{
            new: true
        })
        res.send(bookie)
    } catch (error) {
        res.status(400).send(error)
        
    }
})

//delete method
router.delete("/:id", async(req,res)=>{
    try {
        const bokay =await book.findByIdAndDelete(req.params.id)
        res.send(bokay)
        
    } catch (error) {
        res.status(400).send(error)
        
    }
})

module.exports = router