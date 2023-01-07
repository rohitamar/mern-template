//helpful CRUD template
//HTTP codes: https://restfulapi.net/http-status-codes/

const express = require('express');
const { isEmpty } = require('lodash');
const Model = require('../models/Model');
const router = express.Router();

router.post('/add', async (req, res) => {
    if(isEmpty(req.body)) {
        return res.status(403);
    }

    const { modelID } = req.body;

    const newModel = new Model({
        modelID
    });

    //save can be then-chained (if needed)
    //see: https://mongoosejs.com/docs/documents.html
    try {
        await newModel.save();
        res.json({
            //
        });
    } catch (error) {
        res.status(500);
    }
});

router.get('/find', async (req, res) => {
    //https://mongoosejs.com/docs/queries.html
    const query = await Model.find({
        modelId: req.query.id
    });
});

router.post('/update', async (req, res) => {

    //upsert (update, if not insert): flag in findOneAndUpdate "upsert: true"
    //to check upsert: "rawResult: true", res.lastErrorObject.updatedExisting == true
    //see: https://mongoosejs.com/docs/tutorials/findoneandupdate.html
    //updateOne, updateMany

    await Model.findOneAndUpdate({
        //props used to find document
    }, {
        //properties for update
    });
});

router.delete('/delete', async (req, res) => {
    //deleteOne, deleteMany, findOneAndDelete (delete + return deleted doc)
    const query = await Model.findOneAndDelete({
        //props
    });
});