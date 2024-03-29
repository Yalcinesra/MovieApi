"use strict"
/* -------------------------------------------------------
    EXPRESS - Movie API
------------------------------------------------------- */

const Category = require('../models/category.model')

module.exports = {

    list: async (req, res) => {

        // const data = await Department.find(search).sort(sort).skip(skip).limit(limit)
        const data = await res.getModelList(Category)

        res.status(200).send({
            error: false,
            detail: await res.getModelListDetails(Category),
            data // data: data
        })

    },

    create: async (req, res) => {

        const data = await Category.create(req.body)

        res.status(201).send({
            error: false,
            data
        })

    },

    read: async (req, res) => {

        const data = await Category.findOne({ _id: req.params.id })

        res.status(200).send({
            error: false,
            data
        })

    },

    update: async (req, res) => {

        const data = await Category.updateOne({ _id: req.params.id }, req.body, { runValidators: true })

        res.status(202).send({
            error: false,
            data,
            new: await Category.findOne({ _id: req.params.id })
        })
    },

    delete: async (req, res) => {

        const data = await Category.deleteOne({ _id: req.params.id })

        res.status(data.deletedCount ? 204 : 404).send({//200 
            error: !data.deletedCount,
            data
        })

        // const isDeleted = data.deletedCount >= 1 ? true : false

        // res.status(isDeleted ? 204 : 404).send({
        //     error: !isDeleted,
        //     data
        // })
    },

    
}