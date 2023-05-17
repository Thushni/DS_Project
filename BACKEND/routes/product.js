const router = require("express").Router();
let Product = require("../models/product");

router.route("/addPRODUCT").post((req, res) => {

    const productName = req.body.productName;
    const productType = req.body.productType;
    const amount = Number(req.body.amount);
    const pc = Number(req.body.pc);
    const uc = Number(req.body.uc);
    const description = req.body.description;
    const fdate = req.body.fdate;
    const ldate = req.body.ldate;
    const image = req.body.image;

    const newProduct = new Product({
        productName,
        productType,
        amount,
        pc,
        uc,
        description,
        fdate,
        ldate,
        image
    })

    newProduct.save().then(() => {
        res.json("Product Added")
    }).catch((err) => {
        console.log(err);
    })

})

router.route("/").get((req, res) => {
    Product.find().then((products) => {
        res.json(products)
    }).catch((err) => {
        console.log(err)
    })
})
router.route("/updatePRODUCT/:id").put(async (req, res) => {
    let userID = req.params.id;
    const { productName, productType, amount, pc, uc, description, fdate, ldate, image } = req.body;

    const updateProduct = {

        productName,
        productType,
        amount,
        pc,
        uc,
        description,
        fdate,
        ldate,
        image
    }
    const update = await Product.findByIdAndUpdate(userID, updateProduct)
        .then(() => {
            res.status(200).send({ status: "Product updated" })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with updating data", error: err.message });

        })

})

router.route("/delete/:id").delete(async (req, res) => {
    let userID = req.params.id;

    await Product.findByIdAndDelete(userID)
        .then(() => {
            res.status(200).send({ status: "Product deleted" });
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with delete user", error: err.message });
        })
})

router.route("/get/:id").get(async (req, res) => {
    let userID = req.params.id;

    const user = await Product.findById(userID)
        .then(([product]) => {
            res.status(200).send({ status: "Product fetched", product });
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with fetche product", error: err.message });
        })
})

module.exports = router;
