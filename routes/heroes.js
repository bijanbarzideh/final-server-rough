var Hero = require('../models/hero');
module.exports = {
    get: (req, res) => {
        // Read
        Hero.find({})
                //  .populate('headquarters') // Property name of a Hero doc we want to populate
                 .exec(function(err, heroes){
                     res.json(heroes);
                   })
    },
    upsert: (req, res) => {
        // Create / Update
        if (req.params.id) {
            // Update existing document
        } else {
            // No id in the url, create a new document
            var newHero = new Hero(req.body);
            newHero.save(function(err, hero) {
                if (err) {
                    return res.json(err);
                }
                res.json(hero);
            });
        }
    },
    remove: (req, res) => {
        // Delete
    }
}
