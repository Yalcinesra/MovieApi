"use strict"
/* -------------------------------------------------------
    EXPRESS - Movie API
------------------------------------------------------- */
// SYCHRONIZATION:

module.exports = async function() {

    return null;

    /* REMOVE DATABASE */
    const { mongoose } = require('../configs/dbConnection')
    await mongoose.connection.dropDatabase()
    console.log('- Database and all data DELETED!')
    /* REMOVE DATABASE */
    
    /* Department & Personnel */
    const category = require('../models/category.model')
    const movie = require('../models/movie.model')
    const user = require('../models/user.model')
    const comment = require('../models/comment.model')
    
    const categories = [
        "Aile ",
        "Cocuk",
        "Yetiskin",
    ]
    category.forEach(value => {
        //category.create:
        category.create({ name: value }).then((category) => {

             // movie.create:
            movie.create({
                  
                name: "test",
                point: "5",
                image:"ghgfh",
                description: "firstName",
                startedAt: "2023-10-15 13:14:15"
            })
            // user.create:
           
                user.create({
                  
                    username: "test",
                    password: "1234",
                    firstName: "firstName",
                    lastName: "lastName",
                    email: "test@site.com",
                    isAdmin: false,
                    startedAt: "2023-10-15 13:14:15"
                })
            
            console.log('- Personnels Added.')
        })
    })
    /* Department & Personnel */
}