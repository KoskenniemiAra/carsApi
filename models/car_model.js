const db = require('../database');

const car = {
  getAllCars: function(callback) {
    return db.query('select * from car', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from car where idcar=?', [id], callback);
  },
  add: function(car, callback) {
    return db.query(
      'insert into car (brand,model,yearmodel) values(?,?,?)',
      [car.brand, car.model, car.yearmodel],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from car where idcar=?', [id], callback);
  },
  update: function(id, car, callback) {
    return db.query(
      'update car set brand=?,model=?, yearmodel=? where idcar=?',
      [car.brand, car.model, car.yearmodel, id],
      callback
    );
  },
  searchByBrand:function(value,callback) {
    const brandLike="%"+value+"%";
    return db.query('select * from car where brand LIKE ? order by idcar desc',[brandLike], callback);
  },
  searchByModel:function(value,callback) {
    const modelLike="%"+value+"%";
    return db.query('select * from car where model LIKE ? order by idcar desc',[modelLike], callback);
  }
};
module.exports = car;