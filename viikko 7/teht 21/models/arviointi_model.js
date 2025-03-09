const db = require('../database');

const arviointi = {
  
  getAll: function(callback) {
    return db.query('SELECT * FROM arviointi', callback);
  },

  getById: function(idOpiskelija, idOpintojakso, callback) {
    return db.query('SELECT * FROM arviointi WHERE idOpiskelija = ? AND idOpintojakso = ?', [idOpiskelija, idOpintojakso], callback); 
  },

  add: function(arviointi, callback) {
    return db.query(
      'INSERT INTO arviointi (idOpiskelija, idOpintojakso, Arvosana, Päivämäärä) VALUES (?, ?, ?, ?)', 
      [arviointi.idOpiskelija, arviointi.idOpintojakso, arviointi.Arvosana, arviointi.Päivämäärä], 
      callback
    );
  },

  delete: function(idOpiskelija, idOpintojakso, callback) {
    return db.query('DELETE FROM arviointi WHERE idOpiskelija = ? AND idOpintojakso = ?', [idOpiskelija, idOpintojakso], callback);
  },

  update: function(idOpiskelija, idOpintojakso, arviointi, callback) {
    return db.query(
      'UPDATE arviointi SET Arvosana = ?, Päivämäärä = ? WHERE idOpiskelija = ? AND idOpintojakso = ?', 
      [arviointi.Arvosana, arviointi.Päivämäärä, idOpiskelija, idOpintojakso], 
      callback
    );
  }
};

module.exports = arviointi;