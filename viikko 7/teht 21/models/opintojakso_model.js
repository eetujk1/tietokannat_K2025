
const db = require('../database');

const opintojakso = {
  
  getAll: function(callback) {
    return db.query('SELECT * FROM opintojakso', callback);
  },

  getById: function(id, callback) {
    return db.query('SELECT * FROM opintojakso WHERE idOpintojakso = ?', [id], callback); 
  },

  
  add: function(opintojakso, callback) {
    return db.query(
      'INSERT INTO opintojakso (Koodi, Nimi, Laajuus) VALUES (?, ?, ?)', 
      [opintojakso.Koodi, opintojakso.Nimi, opintojakso.Laajuus], 
      callback
    );
  },

  delete: function(id, callback) {
    return db.query('DELETE FROM opintojakso WHERE idOpintojakso = ?', [id], callback);
  },

  
  update: function(id, opintojakso, callback) {
    return db.query(
      'UPDATE opintojakso SET Koodi = ?, Nimi = ?, Laajuus = ? WHERE idOpintojakso = ?', 
      [opintojakso.Koodi, opintojakso.Nimi, opintojakso.Laajuus, id], 
      callback
    );
  }
};

module.exports = opintojakso;
