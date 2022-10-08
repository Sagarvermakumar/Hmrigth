const express = require('express');
const router = express.Router();
const User = require('../model/userMessage');

router.get('/', (req, res) => {
    res.render("index");
});
router.post('/contect', async (req, res ,next) => {
    try {
        const userMessage = new User(req.body);
        await userMessage.save();
        console.log(userMessage);
        res.status(201).render('index');
       
        // process.exit(1);
    } catch (error) {
        res.status(500).send(error)
    }
});

module.exports = router;