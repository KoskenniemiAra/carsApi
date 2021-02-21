const express = require('express');
const router = express.Router();
const car = require('../models/carowner_model');

router.get('/:id?',
 function(request, response) {
  if (request.params.id) {
    car.getById(request.params.id, function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    });
  } else {
    car.getAllcarowners(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    });
  }
});


router.post('/', 
function(request, response) {
  car.add(request.body, function(err, count) {
    if (err) {
      response.json(err);
    } else {
      response.json(request.body);
    }
  });
});


router.delete('/:id', 
function(request, response) {
  car.delete(request.params.id, function(err, count) {
    if (err) {
      response.json(err);
    } else {
      response.json(count);
    }
  });
});


router.put('/:id', 
function(request, response) {
  car.update(request.params.id, request.body, function(err, dbResult) {
    if (err) {
      response.json(err);
    } else {
      response.json(dbResult);
    }
  });
});

router.get('/car/:id?',
 function(request, response) {
  if (request.params.id) {
    car.getByIdcarandowner(request.params.id, function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    });
  } else {
    car.getAllcarownersandcars(function(err, dbResult) {
      if (err) {
        response.json(err);
      } else {
        response.json(dbResult);
      }
    });
  }
});


module.exports = router;