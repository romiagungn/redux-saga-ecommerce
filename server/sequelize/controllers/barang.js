const product = require('../models').barang;

module.exports = {
    list(req, res) {
        return product
            .findAll({
                include: [],
                order: [
                    ['createdAt', 'DESC'],
                ],
            })
            .then((product) => res.status(200).send(product))
            .catch((error) => { res.send(error); });
    },

    getById(req, res) {
        return product
            .findByPk(req.params.id, {
                include: [],
                order: [
                    ['createdAt', 'DESC'],
                ],
            })
            .then((product) => {
                if (!product) {
                    return res.status(404).send({
                        message: 'product Not Found',
                    });
                }
                return res.status(200).send(product);
            })
            .catch((error) => res.send(error));
    },

    add(req, res) {
        console.log(req.body,'ini isi data')
        return product
            .create({
                title: req.body.title,
                rate: req.body.rate,
                description: req.body.description,
                price: req.body.price,
                brand: req.body.brand,
                detail_product: req.body.detail_product
            })
            .then((product) => res.status(200).send(product))
            .catch((error) => res.send(error));
    },

    update(req, res) {
        return product
            .findByPk(req.params.id)
            .then(product => {
                if (!product) {
                    return res.status(404).send({
                        message: 'product Not Found',
                    });
                }
                return product
                    .update({
                        title: req.body.title || product.title,
                        rate: req.body.rate || product.rate,
                        description: req.body.description || product.description,
                        price: req.body.price || product.price,
                        brand: req.body.brang || product.brand,
                        detail_product: req.body.detail_product || product.detail_product,
                    })
                    .then((product) => res.status(200).send(product))
                    .catch((error) => res.send(error));
            })
            .catch((error) => res.send(error));
    },

    delete(req, res) {
        return product
            .findByPk(req.params.id)
            .then(product => {
                if (!product) {
                    return res.status(400).send({
                        message: 'product Not Found',
                    });
                }
                return product
                    .destroy()
                    .then((product) => res.status(200).send(product))
                    .catch((error) => res.send(error));
            })
            .catch((error) => res.send(error));
    },
};