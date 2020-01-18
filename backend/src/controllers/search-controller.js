const Dev = require('../models/dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

// index, show, store, update, destroy 

module.exports = {

    async index(req, res) {

        const { latitude, longitude, techs } = req.query;

        const techsArray = parseStringAsArray(techs);

        console.log(latitude, longitude, techsArray);

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000
                }
            }
        });

        return res.json({ devs });
    },
};