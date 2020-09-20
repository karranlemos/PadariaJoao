const express = require('express');

module.exports = app => {
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.use((err, req, res, next) => {
        res.status(500).send("Internal Server Error");
    });
};