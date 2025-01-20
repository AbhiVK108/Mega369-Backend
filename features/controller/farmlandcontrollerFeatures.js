const farmlandModel = require('../../features/model/farmlandFeatureModel');


exports.add = async (req, res) => {
    try {
        const add = new farmlandModel(req.body);
        await add.save();
        res.status(201).json(add);

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "falied to add" });

    }
};

exports.get = async (req, res) => {
    try {
        const get = await farmlandModel.find()
        res.status(200).json(get);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'no farmland found' })

    }
};
exports.updated = async (req, res) => {
    try {
        const update = await farmlandModel.findByIdAndUpdate(req.params.id);
        res.json(update);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'no farmland update' })

    }
};

exports.deleted = async (req, res) => {
    try {
        const deleted = await farmlandModel.findByIdAndDelete(req.params.id);
        res.json(deleted);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'no farmland deleted' });

    }
}
