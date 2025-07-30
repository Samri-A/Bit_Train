const express = require('express');
const database = require('../firebase');
const router = express.Router()

router.post( '/add' , async (req, res) => {
    const { id , name , email , password } = req.body;
    try{
        await database.ref('users/' + id).set({name , email , password});
        res.status(200).send('User added successfully');
    } catch (e){
        res.status(400).send('Error' + e.message)
    }
    
}

)

module.exports = router;