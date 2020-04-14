const barang = require('../models').barang;

module.exports = {
    list(req, res) {
        return barang
            .findAll({
                include: [],
                order: [
                    ['createdAt', 'DESC'],
                ],
            })
            .then((barang) => res.status(200).send(barang))
            .catch((error) => { res.send(error); });
    },
    add(req, res) {
        return barang
            .create({
                title : req.body.title,
                rate :  req.body.rate,
                description :  req.body.description,
                price :  req.body.price,
                brang :  req.body.brang,
                detail_product :  req.body.detail_product
            })
            .then((barang) => res.status(200).send(barang))
            .catch((error) => res.send(error));
    },

}