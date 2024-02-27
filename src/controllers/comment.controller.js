"use strict"
/* -------------------------------------------------------
    EXPRESS - Movie API
------------------------------------------------------- */

const Comment = require('../models/comment.model')

module.exports = {

    list: async (req, res) => {

        
        const data = await res.getModelList(Comment)

        res.status(200).send({
            error: false,
            detail: await res.getModelListDetails(Comment),
            data // data: data
        })

    },

    create: async (req, res) => {
        const data = await Comment.create(req.body)

        res.status(201).send({
            error: false,
            data
        })

    },

    read: async (req, res) => {

        const data = await Comment.findOne({ _id: req.params.id })

        res.status(200).send({
            error: false,
            data
        })

    },

    update: async (req, res) => {

        const data = await Comment.updateOne({ _id: req.params.id }, req.body, { runValidators: true })

        res.status(202).send({
            error: false,
            data,
            new: await Comment.findOne({ _id: req.params.id })
        })
    },

    delete: async (req, res) => {

        const data = await Comment.deleteOne({ _id: req.params.id })

        res.status(data.deletedCount ? 204 : 404).send({//200 
            error: !data.deletedCount,
            data
        })

        
    }

}