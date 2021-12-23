const Sample = require('../models/sample');


require('../models/sample');

async function indexController(req, res) {
    var sampleObj = new Sample();
    res.status(200).json({ id: sampleObj._id });
}

module.exports = {
    indexController,
}
