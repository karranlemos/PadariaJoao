const express = require('express');
const router = express.Router();

router.use(express.static('client/build'));

router.get('*', (req, res) => {
    res.send('hey');
    // return res.sendFile('client/build/index.html');
});

module.exports = router;