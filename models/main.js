const express = require('express');
const mongoose = require('mongoose')

const Login = new mongoose.Schema({
    username: {
        required:[true, 'Username has to be provided'],
        maxLength: 25,
        type: String,

    },
    password: {
        required: [true, 'Password has to be provided'],
        type: any
    }
})