const InscritModel = require('../models/inscrit.model');
const InfoModel = require('../models/info.model');

module.exports.show = async (req, res) => {
    const infos = await InfoModel.find();
    const inscrits = await InscritModel.find();
    res.render("admin", {infos, inscrits});
};

module.exports.update = async (req, res) => {
    try {
        const infos = await InfoModel.findOneAndUpdate(
            {}, // Filtre pour trouver le premier document
            { $set: {
                fitaovana: req.body.fitaovana.split('\n'),
                fotoana: req.body.fotoana.split('\n') ,
                toerana: req.body.toerana.split('\n') ,
                sarandasy: req.body.sarandasy.split('\n')
                }
            },
            { new: true }
        );
        res.redirect("/home")
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports.reset = async (req, res) => {
    
    try {
        // supprimer tous les enregistrements dans InscritModel
        await InscritModel.deleteMany({});
        res.redirect("/WVpr@C2eKL5k");
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

