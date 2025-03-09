
const express = require('express');
const router = express.Router();
const arviointi = require('../models/arviointi_model');

router.get('/', function (request, response) {
    arviointi.getAll(function (err, dbResult) {
        if (err) {
            response.json(err);
        } else {
            response.json(dbResult);
        }
    });
});

router.get('/:idOpiskelija/:idOpintojakso', function (request, response) {
    const { idOpiskelija, idOpintojakso } = request.params;
    arviointi.getByIds(idOpiskelija, idOpintojakso, function (err, dbResult) {
        if (err) {
            response.json(err);
        } else {
            response.json(dbResult);
        }
    });
});

router.post('/', function (request, response) {
    arviointi.add(request.body, function (err, dbResult) {
        if (err) {
            response.json(err);
        } else {
            response.json(dbResult);
        }
    });
});

router.delete('/:idOpiskelija/:idOpintojakso', function (request, response) {
    const { idOpiskelija, idOpintojakso } = request.params;
    arviointi.delete(idOpiskelija, idOpintojakso, function (err, dbResult) {
        if (err) {
            response.json(err);
        } else {
            response.json(dbResult);
        }
    });
});

router.put('/:idOpiskelija/:idOpintojakso', function (request, response) {
    const { idOpiskelija, idOpintojakso } = request.params;
    arviointi.update(idOpiskelija, idOpintojakso, request.body, function (err, dbResult) {
        if (err) {
            response.json(err);
        } else {
            response.json(dbResult);
        }
    });
});

module.exports = router;
