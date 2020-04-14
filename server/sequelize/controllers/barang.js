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
                title: req.body.title,
                rate: req.body.rate,
                description: req.body.description,
                price: req.body.price,
                brand: req.body.brand,
                detail_product: req.body.detail_product
            })
            .then((barang) => res.status(200).send(barang))
            .catch((error) => res.send(error));
    },
    update(req, res) {
        return barang
            .findByPk(req.params.id)
            .then(barang => {
                if (!barang) {
                    return res.status(404).send({
                        message: 'barang Not Found',
                    });
                }
                return barang
                    .update({
                        title: req.body.title || barang.title,
                        rate: req.body.rate || barang.rate,
                        description: req.body.description || barang.description,
                        price: req.body.price || barang.price,
                        brand: req.body.brang || barang.brand,
                        detail_product: req.body.detail_product || barang.detail_product,
                    })
                    .then((barang) => res.status(200).send(barang))
                    .catch((error) => res.send(error));
            })
            .catch((error) => res.send(error));
    },
    delete(req, res) {
        return barang
            .findByPk(req.params.id)
            .then(barang => {
                if (!barang) {
                    return res.status(400).send({
                        message: 'barang Not Found',
                    });
                }
                return barang
                    .destroy()
                    .then((barang) => res.status(200).send(barang))
                    .catch((error) => res.send(error));
            })
            .catch((error) => res.send(error));
    },
};