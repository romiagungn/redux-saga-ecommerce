var express = require('express');
var router = express.Router();
var models = require('../sequelize/models/index');
const path = require("path");
// const serverSite = "http://localhost:3001";
// const barangController = require('../sequelize/controllers').barang;

/* GET home page. */
router.get('/', (req, res) => {
    models.product.findAll({})
        .then((product) => {
            res.status(200).send(product)
        })
        .catch((error) => {
            res.send(error);
        });
});

/* GET by id. */
router.get("/:id", (req, res, next) => {
    models.product.findByPk(req.params.id)
        .then((product) => {
            res.json(product);
        })
});

// /* POST home page. */
// router.post('/', function (req, res) {
//     console.log(req.files);
//     res.send('UPLOADED!!!');
// });

router.post("/", (req, res, next) => {
    let { title, rate, description, price, brand, detail_product, colors, capacities } = req.body
    console.log('body api', req.body);
    console.log('files api', req.files);
    let { file } = req.files
    let filename = file.name.toLowerCase().replace("", Date.now()).split(' ').join('-');
    console.log(filename, 'aaaaaaaaa');
    file.mv(path.join(__dirname, '..', 'public', 'images', filename), err => {
        if (err) console.log(err);
        models.product.create({
            title,
            rate,
            description,
            price,
            brand,
            detail_product,
            ...(capacities && { capacities: JSON.parse(capacities) }),
            ...(colors && { colors: JSON.parse(colors) }),
            file: 'http://localhost:3000/images/' + filename
        })
            .then(product =>
                res.json({
                    error: false,
                    itemAdd: product,
                    // itemAdded: { ...product, filename: serverSite + product.filename }
                })
            )
            .catch(err => res.json({
                error: true, message: err
            }));
    })
});

// update single product
router.put('/:id', (req, res) => {
    let { vote, testimonials, rate } = req.body;
    let changedItem = {};
    vote ? changedItem.vote = vote : '';
    rate ? changedItem.rate = rate : '';
    testimonials ? changedItem.testimonials = JSON.parse(testimonials) : '';
    models.product.update({
        rate: rate,
        vote: vote,
        testimonials: testimonials
    }, {
        where: {
            id: req.params.id
        }, changedItem
    }).then(item => {
        vote ? item.vote = vote : '';
        rate ? item.rate = rate : '';
        testimonials ? item.testimonials = changedItem.testimonials : '';
        res.json({
            status: 'SUCCESS',
            productData: item,
            statuss : console.log('SUCCESS')
        })
    }).catch(err => {
        res.json({
            status: 'FAILED',
            message: 'Connection Error',
            error: err
        })
    });
})

// delete a single todo
router.delete('/:id', (req, res, next) => {
    models.product.destroy({
        where: {
            id: req.params.id
        }
    }).then((product) => {
        res.json(product);
    })
        .catch(err => res.json({ error: true, message: err }));
});



module.exports = router;
