"use strict"
/* -------------------------------------------------------
    EXPRESS - Movie API
------------------------------------------------------- */

const User = require('../models/user.model')
const passwordEncrypt = require('../helpers/passwordEncrypt')

module.exports = {

    list: async (req, res) => {

        const data = await res.getModelList(User)

        res.status(200).send({
            error: false,
            detail: await res.getModelListDetails(User),
            data
        })

    },

    create: async (req, res) => {

        

        const data = await User.create(req.body)

        res.status(201).send({
            error: false,
            data
        })

    },

    read: async (req, res) => {

        const data = await User.findOne({ _id: req.params.id })

        res.status(200).send({
            error: false,
            data
        })

    },

    update: async (req, res) => {

        const data = await User.updateOne({ _id: req.params.userId }, req.body, { runValidators: true })

        res.status(202).send({
            error: false,
            body: req.body,
            // data: data,
            data,
            newData: await User.findOne({ _id: req.params.userId })
        })
    },

    delete: async (req, res) => {

        const data = await User.deleteOne({ _id: req.params.id })

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })
    },

 
}