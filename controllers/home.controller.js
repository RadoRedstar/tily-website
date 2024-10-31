const PostModel = require('../models/inscrit.model');

module.exports.setClient = async (req, res) => {
    
};

module.exports.inscription = async (req, res) => {
    try {
        const inscrit = await PostModel.create({
            anarana: req.body.anarana,
            fanampiny: req.body.fanampiny,
            fokonolona: req.body.fokonolona,
            fivondronana: req.body.fivondronana,
            ambaratonga: req.body.ambaratonga,
            contact: req.body.contact,
        });
        return res.redirect("/?message=inscription_reussie");

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
