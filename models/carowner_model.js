const db = require('../database');

const carowner = {
  getAllcarowners: function(callback) {
    return db.query('select * from carowner', callback);
  },
  getAllcarownersandcars: function(callback) {
    return db.query('select owner.idowner, firstname, lastname, group_concat(brand," ", model) as "cars of the person"from owner inner join carowner on owner.idowner=carowner.idownerinner join car on carowner.idcar=car.idcargroup by owner.idowner;', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from carowner where idcarowner=?', [id], callback);
  },
  getByIdcarandowner: function(id, callback) {
    return db.query('select * from carowner where idcarowner=?', [id], callback);
  },
  add: function(carowner, callback) {
    return db.query(
      'insert into carowner (idcar,idowner) values(?,?)',
      [carowner.idcar, carowner.idowner],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from carowner where idcarowner=?', [id], callback);
  },
  update: function(id, carowner, callback) {
    return db.query(
      'update carowner set idcar=?, idowner=? where idcarowner=?',
      [carowner.idcar, carowner.idowner, id],
      callback
    );
  }
};
module.exports = carowner;