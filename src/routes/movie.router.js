"use strict"
/* -------------------------------------------------------
    EXPRESS - Movie API
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */

const movie = require('../controllers/movie.controller')
const permission = require('../middlewares/permissions')

// URL: /movies

router.route('/')
    .get(movie.list)
    .post(movie.create)

router.route('/:id')
    .get(movie.read)
   // .put(permission.isAdmin,movie.update)
    .put(movie.update)
    .patch(permission.isAdmin,movie.update)
    .delete(permission.isAdmin,movie.delete)



/* ------------------------------------------------------- */
module.exports = router