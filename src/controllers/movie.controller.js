"use strict"
/* -------------------------------------------------------
    EXPRESS - Movie API
------------------------------------------------------- */

const Movie = require('../models/movie.model')

module.exports = {

    list: async (req, res) => {

        
        const data = await res.getModelList(Movie)

        res.status(200).send({
            error: false,
            detail: await res.getModelListDetails(Movie),
            data // data: data
        })

    },

    create: async (req, res) => {

        const data = await Movie.create(req.body)

        res.status(201).send({
            error: false,
            data
        })

    },

    read: async (req, res) => {

        const data = await Movie.findOne({ _id: req.params.id })

        res.status(200).send({
            error: false,
            data
        })

    },

    update: async (req, res) => {

        const data = await Movie.updateOne({ _id: req.params.id }, req.body, { runValidators: true })

        res.status(202).send({
            error: false,
            data,
            new: await Movie.findOne({ _id: req.params.id })
        })
    },

    delete: async (req, res) => {

        const data = await Movie.deleteOne({ _id: req.params.id })

        res.status(data.deletedCount ? 204 : 404).send({//200 
            error: !data.deletedCount,
            data
        })

        
    }

}