const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');

let lop={};
let pl={};

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "pfe"
});

app.use(bodyParser.json())
app.use(express.json());
app.use(cors());

app.post('/login', (req, res) => {
  const { Direction_prov, password } = req.body;
lop=req.body.password
  con.query("SELECT id, role FROM utilisateur WHERE Password = ?", [password], (err, result) => {
      if (err) {
          console.error(err);
          return res.status(500).json({ error: "Internal Server Error" });
      }
      if (result.length > 0) {
          const userId = result[0].id;
          console.log(userId)
          const userType = result[0].role;
          return res.json({ userType: userType, userId: userId }); 
      } else {
          return res.status(401).json({ error: "Invalid credentials" });
      }
    });
});



app.post('/api/variable', (req, res) => {
  if (req.body.Nom !== '') {
    pl = req.body.Nom;}

    
    const query = 'SELECT username from utilisateur where id = ?';


    con.query(query, [pl], (error, results, fields) => {
      if (error) {
        console.error('Erreur lors de la sélection du nom:');
        res.status(500).json({ error: 'Erreur lors de la sélection du nom' });
        return;
      }
      
   
      if (results.length > 0) {
        const nomProjet = results[0].username;
        console.log(nomProjet);
        res.json({ success: true, nomProjet: nomProjet });
      } else {
        res.json({ nomProjet: 'Aucun nom trouvé pour cette valeur de pl' });
      }
    });

});

const axios = require('axios');

app.use(bodyParser.json());

app.post('/api/messagee', (req, res) => {

  console.log(pl);
  con.query('SELECT id_projet_constr, nom_projet, cd_cycle, netab, cd_com,date_creation as date ,longitude, latitude, nbre_salle, stade_sport, entrepots, salles_ateliers, restaurant, internat, taux_salle, encombrement, motif,etat FROM projet_construction where utilisateur_id=?'
  , [pl], (error, results, fields) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
      return;
    }
    if (results.length === 0) {
      res.json({ success: false, error: 'No results found' });
      return;
    }
    console.log(results);
    res.json({ success: true, results });
  });
});
app.post('/projetconst', (req, res) => {

  console.log(pl);
  con.query('SELECT id_projet_constr, nom_projet, cd_cycle, netab, cd_com,date_creation as date ,longitude, latitude, nbre_salle, stade_sport, entrepots, salles_ateliers, restaurant, internat, taux_salle, encombrement, motif,etat FROM projet_construction'
  , (error, results, fields) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
      return;
    }
    if (results.length === 0) {
      res.json({ success: false, error: 'No results found' });
      return;
    }
    console.log(results);
    res.json({ success: true, results });
  });
});
app.post('/insererplan', (req, res) => {
  const { Date_initiale, Date_finale, Designation } = req.body.Data;

  if (!Date_initiale || !Date_finale || !Designation) {
    return res.status(400).send('Tous les champs sont requis');
  }

  const sql = 'INSERT INTO plan (Date_initiale, Date_finale, Designation) VALUES (?, ?, ?)';
  const values = [Date_initiale, Date_finale, Designation];

  con.query(sql, values, (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'insertion du plan:', err);
      return res.status(500).send('Erreur lors de l\'insertion du plan');
    }
    res.status(200).send('Plan inséré avec succès');
  });
});
app.post('/api/messageext', (req, res) => {

  console.log(pl);
  con.query('SELECT id_projet_extension,date_creation as date, cd_etab, nombre_salle, taux_salle, encombrement, motif,etat FROM projet_extension where utilisateur_id=?'
  , [pl], (error, results, fields) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
      return;
    }
    if (results.length === 0) {
      res.json({ success: false, error: 'No results found' });
      return;
    }
    console.log(results);
    res.json({ success: true, results });
  });
});
app.post('/modifierextension', (req, res) => {
  const id = req.body.id;


 
    con.query('UPDATE projet_extension SET etat = ? WHERE id_projet_extension = ?', ['comptabilisé',id], (error, results, fields) => {
      if (error) {
        console.error('Error executing SQL query:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
        return;
      }
      if (results.affectedRows === 0) {
        res.json({ success: false, error: 'No results found' });
        return;
      }
      console.log(results);
      res.json({ success: true, results });
    });})
app.post('/projetext', (req, res) => {

  console.log(pl);
  con.query('SELECT id_projet_extension,date_creation as date, cd_etab, nombre_salle, taux_salle, encombrement, motif,etat FROM projet_extension'
  , (error, results, fields) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
      return;
    }
    if (results.length === 0) {
      res.json({ success: false, error: 'No results found' });
      return;
    }
    console.log(results);
    res.json({ success: true, results });
  });
});
app.post('/in', (req, res) => {

  con.query('INSERT INTO PROJET_construction(id_projet_constr, nom_projet, cd_cycle, netab, cd_com, longitude, latitude, nbre_salle, stade_sport, entrepots, salles_ateliers, restaurant, internat, taux_salle, encombrement, motif, utilisateur_id) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [
      req.body.id_projet_const,
      req.body.nom_projet,
      req.body.cd_cycle,
      req.body.netab,
      req.body.cd_com,
      req.body.longitude,
      req.body.latitude,
      req.body.nbre_salle,
      req.body.stade_sport,
      req.body.entrepots,
      req.body.salles_ateliers,
      req.body.restaurant,
      req.body.internat,
      req.body.taux_salle,
      req.body.encombrement,
      req.body.motif,
      pl,
    
    ],
    (error, results, fields) => {
      if (error) {
        console.error('Erreur lors de l\'insertion:', error);
        res.json({ success: false });
        return;
      }
      console.log('Insertion réussie:', results);
      res.json({ success: true });
    });
});

app.post('/inconst', (req, res) => {
console.log(pl)
  con.query('INSERT INTO PROJET_extension(id_projet_extension, cd_etab, nombre_salle, taux_salle, encombrement, motif,utilisateur_id) VALUES(?,?,?,?,?,?,?)',
    [
      req.body.id_projet_extension,
      req.body.cd_etab,
      req.body.nombre_salle,
      req.body.taux_salle,
      req.body.encombrement,
      req.body.motif,
      pl,
     
    ],
    (error, results, fields) => {
      if (error) {
        console.error('Erreur lors de l\'insertion:', error);
        res.json({ success: false });
        return;
      }
      console.log('Insertion réussie:', results);
      res.json({ success: true });
    });
});


app.post('/api/lesm', (req, res) => {
  var requete = '';
  if (req.body.action === 'modifier') {
    const { id,nom,cd,netab,com,longitude,latitude,nbre_salle,stade_sport,entrepots,salles_ateliers,restaurant,internat,taux_salle,encombrement,motif,utilisateur_id,etape_id,etat_etape_id } = req.body.Data;
    const idd=req.body.id;
    const nomm=req.body.nom;
   
    console.log(id,idd,nomm);
    requete = 'UPDATE projet_construction SET nom_projet = ?,cd_cycle = ?,netab = ?,cd_com = ?,longitude = ?,latitude = ?,nbre_salle = ?,stade_sport = ?,entrepots = ?,salles_ateliers = ?,restaurant = ?,internat = ?,taux_salle = ?,encombrement = ?,motif = ? WHERE id_projet_constr=?';
    con.query(requete, [nomm,cd,netab,com,longitude,latitude,nbre_salle,stade_sport,entrepots,salles_ateliers,restaurant,internat,taux_salle,encombrement,motif,idd], (error, results, fields) => {
      if (error) {
        console.error('Erreur lors de la modification du projet :', error);
        res.status(500).json({ message: 'Erreur lors de la modification du projet.' });
      } else {
        console.log('Projet modifié avec succès.');
        res.status(200).json({ message: 'Projet modifié avec succès.' });
      }
    });
  } else {
    requete = 'DELETE FROM projet_construction WHERE id_projet_const=?';
    const id = req.body.id;
    con.query(requete, [id], (error, results, fields) => {
  
      if (error) {
        console.error('Erreur lors de la suppression du projet :', error);
        res.status(500).json({ message: 'Erreur lors de la suppression du projet.' });
      } else {
        console.log('Projet supprimé avec succès.');
        res.status(200).json({ message: 'Projet supprimé avec succès.' });
      }
    });
  }
});
app.post('/api/lesmm', (req, res) => {
  let requete = '';
  if (req.body.action === 'modifier') {
    const { id_projet_extension, cd, nombre, taux, encombrement, motif } = req.body.Data;
    requete = `
      UPDATE projet_extension 
      SET cd_etab = ?, nombre_salle = ?, taux_salle = ?, encombrement = ?, motif = ?
      WHERE id_projet_extension = ?`;
    con.query(requete, [cd, nombre, taux, encombrement, motif, id_projet_extension], (error, results, fields) => {
      if (error) {
        console.error('Erreur lors de la modification du projet :', error);
        res.status(500).json({ message: 'Erreur lors de la modification du projet.' });
      } else {
        console.log('Projet modifié avec succès.', results);
        res.status(200).json({ message: 'Projet modifié avec succès.' });
      }
    });
  } else {
    requete = 'DELETE FROM projet_extension WHERE id_projet_extension = ?';
    const id = req.body.id;
    con.query(requete, [id], (error, results, fields) => {
      if (error) {
        console.error('Erreur lors de la suppression du projet :', error);
        res.status(500).json({ message: 'Erreur lors de la suppression du projet.' });
      } else {
        if (results.affectedRows > 0) {
          console.log('Projet supprimé avec succès.', results);
          res.status(200).json({ message: 'Projet supprimé avec succès.' });
        } else {
          console.warn('Aucun projet trouvé avec cet ID.', results);
          res.status(404).json({ message: 'Aucun projet trouvé avec cet ID.',id });
        }
      }
    });
  }
});

   

 app.post('/api/Etudes', (req, res) => {

  con.query('SELECT id_projet_const, nom_projet, cd_cycle, netab, cd_com, longitude, latitude, nbre_salle, stade_sport, entrepots, salles_ateliers, restaurant, internat, taux_salle, encombrement, motif,etape_projet_construction.libelle as etape,etat_etape_projet_construction.libelle as etat FROM projet_construction join etape_projet_construction on id_etape_projet_constr=etape_id join etat_etape_projet_construction on id_etat_etape_projet_const=etat_etape_id where utilisateur_id=? and projet_construction.etape_id=?', [pl,2], (error, results, fields) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
      return;
    }
    if (results.length === 0) {
      res.json({ success: false, error: 'No results found' });
      return;
    }
    console.log(results);
    res.json({ success: true, results });
  });
});
app.post('/etapeconstruction', (req, res) => {

  con.query('select username,etape_projet_construction.id_etape_projet_constr as idetape,etat_etape_projet_construction.id_etat as idetat,etape_construction.designation_fr as etape,etat.designation_fr as etat,Annee_budgetaire as annee,montant_estime as montant,partenariats as partenaire,budget_partenaire as budget,etape_projet_construction.remarques as remarque from etape_projet_construction join etape_construction on etape_projet_construction.id_etape_construction=etape_construction.id_etape_construction join etat_etape_projet_construction on etape_projet_construction.id_etape_projet_constr=etat_etape_projet_construction.id_etape_projet_constr join etat on etat.id_etat=etat_etape_projet_construction.id_etat join utilisateur on etape_projet_construction.utilisateur_id=utilisateur.id', (error, results, fields) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
      return;
    }
    if (results.length === 0) {
      res.json({ success: false, error: 'No results found' });
      return;
    }
    console.log(results);
    res.json({ success: true, results });
  });
});
app.post('/filtrerparplan', (req, res) => {
const plan=req.body.idPlan
console.log(plan)
  con.query('select username,etape_projet_extension.id_etape_projet_extension as idetape,etat_etape_projet_extension.id_etat as idetat,etape_extension.designation_fr as etape,etat.designation_fr as etat,Annee_budgetaire as annee,etape_projet_extension.remarques as remarque from etape_projet_extension join etape_extension on etape_projet_extension.id_etape_extension=etape_extension.id_etape_extension join etat_etape_projet_extension on etape_projet_extension.id_etape_projet_extension=etat_etape_projet_extension.id_etape_projet_extension join etat on etat.id_etat=etat_etape_projet_extension.id_etat join utilisateur on etape_projet_extension.utilisateur_id=utilisateur.id where id_plan=?',[plan], (error, results, fields) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
      return;
    }
    if (results.length === 0) {
      res.json({ success: false, error: 'No results found' });
      return;
    }
    console.log(results);
    res.json({ success: true, results });
  });
});
app.post('/filtrerparplanconst', (req, res) => {
  const plan=req.body.idPlan
  console.log(plan)
    con.query('select username,etape_projet_construction.id_etape_projet_constr as idetape,etat_etape_projet_construction.id_etat as idetat,etape_construction.designation_fr as etape,etat.designation_fr as etat,Annee_budgetaire as annee,montant_estime as montant,partenariats as partenaire,budget_partenaire as budget,etape_projet_construction.remarques as remarque from etape_projet_construction join etape_construction on etape_projet_construction.id_etape_construction=etape_construction.id_etape_construction join etat_etape_projet_construction on etape_projet_construction.id_etape_projet_constr=etat_etape_projet_construction.id_etape_projet_constr join etat on etat.id_etat=etat_etape_projet_construction.id_etat join utilisateur on etape_projet_construction.utilisateur_id=utilisateur.id where id_plan=?',[plan], (error, results, fields) => {
      if (error) {
        console.error('Error executing SQL query:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
        return;
      }
      if (results.length === 0) {
        res.json({ success: false, error: 'No results found' });
        return;
      }
      console.log(results);
      res.json({ success: true, results });
    });
  });
 app.post('/api/Construction', (req, res) => {
 
  con.query('SELECT id_projet_const, nom_projet, cd_cycle, netab, cd_com, longitude, latitude, nbre_salle, stade_sport, entrepots, salles_ateliers, restaurant, internat, taux_salle, encombrement, motif,etape_projet_construction.libelle as etape,etat_etape_projet_construction.libelle as etat FROM projet_construction join etape_projet_construction on id_etape_projet_constr=etape_id join etat_etape_projet_construction on id_etat_etape_projet_const=etat_etape_id where utilisateur_id=? and projet_construction.etape_id=? ', [pl,3], (error, results, fields) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
      return;
    }
    if (results.length === 0) {
      res.json({ success: false, error: 'No results found' });
      return;
    }
    console.log(results);
    res.json({ success: true, results });
  });
});





  app.post('/api/afficher', (req, res) => {
 
    con.query('SELECT id_projet_const, nom_projet, cd_cycle, netab, cd_com, longitude, latitude, nbre_salle, stade_sport, entrepots, salles_ateliers, restaurant, internat, taux_salle, encombrement, motif,etape_projet_construction.libelle as etape,etat_etape_projet_construction.libelle as etat,etape_id,etat_etape_id FROM projet_construction join etape_projet_construction on id_etape_projet_constr=etape_id join etat_etape_projet_construction on id_etat_etape_projet_const=etat_etape_id ', (error, results, fields) => {
      if (error) {
        console.error('Error executing SQL query:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
        return;
      }
      if (results.length === 0) {
        res.json({ success: false, error: 'No results found' });
        return;
      }
      console.log(results);
      res.json({ success: true, results });
    });
  });
  app.post('/api/filtrer', (req, res) => {
    const { direction, datedebut, datefin } = req.body;
    
    let query = `SELECT id_projet_constr, nom_projet, cd_cycle, netab, cd_com,date_creation as date ,longitude, latitude, nbre_salle, stade_sport, entrepots, salles_ateliers, restaurant, internat, taux_salle, encombrement, motif,etat FROM projet_construction
                 JOIN utilisateur ON utilisateur_id = id
                 WHERE 1=1`;
                 
    let params = [];

    if (direction) {
        query += ' AND username LIKE ?';
        params.push(`${direction}%`);
    }

    if (datedebut) {
        query += ' AND projet_construction.date_creation >= ?';
        params.push(datedebut);
    }

    if (datefin) {
        query += ' AND projet_construction.date_creation <= ?';
        params.push(datefin);
    }

    con.query(query, params, (error, results, fields) => {
      if (error) {
        console.error('Error executing SQL query:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
        return;
      }
      if (results.length === 0) {
        res.json({ success: false, error: 'No results found' });
        return;
      }
      console.log(results);
      res.json({ success: true, results });
    });
});
app.post('/api/filtrerextension', (req, res) => {
  const { direction, datedebut, datefin } = req.body;
  
  let query = `SELECT id_projet_extension,date_creation as date, cd_etab, nombre_salle, taux_salle, encombrement, motif,etat FROM projet_extension
  JOIN utilisateur ON utilisateur_id = id
  WHERE 1=1`;

let params = [];

if (direction) {
    query += ' AND username LIKE ?';
    params.push(`${direction}%`);
}


  if (datedebut) {
      query += ' AND projet_construction.date_creation >= ?';
      params.push(datedebut);
  }

  if (datefin) {
      query += ' AND projet_construction.date_creation <= ?';
      params.push(datefin);
  }

  con.query(query, params, (error, results, fields) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
      return;
    }
    if (results.length === 0) {
      res.json({ success: false, error: 'No results found' });
      return;
    }
    console.log(results);
    res.json({ success: true, results });
  });
});
app.post('/charger', (req, res) => {

  console.log(pl);
  con.query('SELECT id_projet_constr, nom_projet, date_creation from projet_construction where utilisateur_id=? and etat=?'
  , [pl,'comptabilisé'], (error, results, fields) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
      return;
    }
    if (results.length === 0) {
      res.json({ success: false, error: 'No results found' });
      return;
    }
    console.log(results);
    res.json({ success: true, results });
  });
});
app.post('/chargerpro', (req, res) => {

  console.log(pl);
  con.query('SELECT id_projet_extension, date_creation from projet_extension where utilisateur_id=? and etat=?'
  , [pl,'comptabilisé'], (error, results, fields) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
      return;
    }
    if (results.length === 0) {
      res.json({ success: false, error: 'No results found' });
      return;
    }
    console.log(results);
    res.json({ success: true, results });
  });
});
app.post('/plan', (req, res) => {
  con.query('SELECT id_plan, YEAR(date_initiale) AS datedebut,YEAR(date_finale) As datefinale,active FROM plan order by id_plan desc limit 1', (error, results, fields) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
      return;
    }
    if (results.length === 0) {
      res.json({ success: false, error: 'No results found' });
      return;
    }
    console.log(results);
    res.json({ success: true, results });
  });
});
app.post('/api/plans', (req, res) => {
  con.query('SELECT id_plan, YEAR(date_initiale) AS datedebut,YEAR(date_finale) As datefinale FROM plan order by id_plan asc', (error, results, fields) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
      return;
    }
    if (results.length === 0) {
      res.json({ success: false, error: 'No results found' });
      return;
    }
    console.log(results);
    res.json({ success: true, results });
  });
});
app.post('/inserer', (req, res) => {
  const { Annee_budgetaire, montant_estime, partenariats, budget_partenaire, Date_creation, Remarques } = req.body.Data;
  const { etape, project_id, id_plan } = req.body;

  con.query(
      'INSERT INTO etape_projet_construction (id_etape_construction, Annee_budgetaire, montant_estime, partenariats, budget_partenaire, Date_creation, Remarques, id_projet_constr, id_plan, utilisateur_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
          etape,
          Annee_budgetaire,
          montant_estime,
          partenariats,
          budget_partenaire,
          Date_creation,
          Remarques,
          project_id,
          id_plan,
          pl 
      ],
      (error, results, fields) => {
          if (error) {
              console.error('Erreur lors de l\'insertion :', error);
              res.json({ success: false });
              return;
          }
          console.log('Insertion réussie :', results);

   
          const lastInsertId = results.insertId;

     
          con.query(
              'INSERT INTO etat_etape_projet_construction (id_etape_projet_constr, id_etat, Remarques) VALUES (?, ?, ?)',
              [lastInsertId,1, Remarques],
              (error, results, fields) => {
                  if (error) {
                      console.error('Erreur lors de l\'insertion dans etat_etape_projet_construction :', error);
                      res.json({ success: false });
                      return;
                  }
                  console.log('Insertion dans etat_etape_projet_construction réussie :', results);
                  res.json({ success: true });
              }
          );
      }
  );
});
app.post('/insererext', (req, res) => {
  const { Annee_budgetaire, Remarques } = req.body.Data;
  const { etape, project_id, id_plan } = req.body;

  con.query(
      'INSERT INTO etape_projet_extension (id_etape_extension, Annee_budgetaire, Remarques, id_projet_extension, id_plan, utilisateur_id) VALUES (?, ?, ?, ?, ?, ?)',
      [
          etape,
          Annee_budgetaire,
          Remarques,
          project_id,
          id_plan,
          pl 
      ],
      (error, results, fields) => {
          if (error) {
              console.error('Erreur lors de l\'insertion :', error);
              res.json({ success: false });
              return;
          }
          console.log('Insertion réussie :', results);

   
          const lastInsertId = results.insertId;

     
          con.query(
              'INSERT INTO etat_etape_projet_extension (id_etape_projet_extension, id_etat, Remarques) VALUES (?, ?, ?)',
              [lastInsertId,1, Remarques],
              (error, results, fields) => {
                  if (error) {
                      console.error('Erreur lors de l\'insertion dans etat_etape_projet_construction :', error);
                      res.json({ success: false });
                      return;
                  }
                  console.log('Insertion dans etat_etape_projet_construction réussie :', results);
                  res.json({ success: true });
              }
          );
      }
  );
});
app.post('/api/modifier', (req, res) => {
  const id = req.body.id;


 
    con.query('UPDATE projet_construction SET etat = ? where id_projet_constr = ?', ['comptabilisé',id], (error, results, fields) => {
      if (error) {
        console.error('Error executing SQL query:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
        return;
      }
      if (results.affectedRows === 0) {
        res.json({ success: false, error: 'No results found' });
        return;
      }
      console.log(results);
      res.json({ success: true, results });

    })})
   app.post('/api/modifieretapeconst', (req, res) => {
  const id = req.body.id;
  const etat = req.body.idetat;

  console.log(id, etat);

  con.query('UPDATE etat_etape_projet_construction SET id_etat = ? WHERE id_etape_projet_constr = ?', [etat + 1, id], (error, results, fields) => {
    if (error) {
      console.error('Error executing SQL query:', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
      return;
    }
    if (results.affectedRows === 0) {
      res.json({ success: false, error: 'No results found' });
      return;
    }

    console.log(results);

  
    const etatPrecedent = etat; 
    const etatActuel = etat + 1; 
    const date = new Date(); 

    con.query('INSERT INTO historique_construction (etat_precedent, etat_actuel, date, id_etape) VALUES (?, ?, ?, ?)', [etatPrecedent, etatActuel, date, id], (error, results, fields) => {
      if (error) {
        console.error('Error executing SQL query:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
        return;
      }

      res.json({ success: true, results });
    });
  });
});

        app.post('/etapeextension', (req, res) => {

          con.query('select username,etape_projet_extension.id_etape_projet_extension as idetape,etat_etape_projet_extension.id_etat as idetat,etape_extension.designation_fr as etape,etat.designation_fr as etat,Annee_budgetaire as annee,etape_projet_extension.remarques as remarque from etape_projet_extension join etape_extension on etape_projet_extension.id_etape_extension=etape_extension.id_etape_extension join etat_etape_projet_extension on etape_projet_extension.id_etape_projet_extension=etat_etape_projet_extension.id_etape_projet_extension join etat on etat.id_etat=etat_etape_projet_extension.id_etat join utilisateur on etape_projet_extension.utilisateur_id=utilisateur.id', (error, results, fields) => {
            if (error) {
              console.error('Error executing SQL query:', error);
              res.status(500).json({ success: false, error: 'Internal server error' });
              return;
            }
            if (results.length === 0) {
              res.json({ success: false, error: 'No results found' });
              return;
            }
            console.log(results);
            res.json({ success: true, results });
          });
        });
        app.post('/api/modifieretapeextension', (req, res) => {
          const id = req.body.id;
          const etat = req.body.idetat;
        
          console.log(id, etat);
        
        
          con.query('UPDATE etat_etape_projet_extension SET id_etat = ? WHERE id_etape_projet_extension = ?', [etat + 1, id], (error, results, fields) => {
            if (error) {
              console.error('Error executing SQL query:', error);
              res.status(500).json({ success: false, error: 'Internal server error' });
              return;
            }
            if (results.affectedRows === 0) {
              res.json({ success: false, error: 'No results found' });
              return;
            }
        
            console.log(results);
        
            const etatPrecedent = etat;  
            const etatActuel = etat + 1; 
            const date = new Date();     
        
            con.query('INSERT INTO historique_extension (etat_precedent, etat_actuel, date, id_etape) VALUES (?, ?, ?, ?)', [etatPrecedent, etatActuel, date, id], (error, results, fields) => {
              if (error) {
                console.error('Error executing SQL query:', error);
                res.status(500).json({ success: false, error: 'Internal server error' });
                return;
              }
        
              res.json({ success: true, results });
            });
          });
        });

      
      app.post('/api/HistoriqueCst', (req, res) => {
        con.query('select etape_projet_construction.id_etape_projet_constr as idetape,etat_etape_projet_construction.id_etat as idetat,etape_construction.designation_fr as etape,etat.designation_fr as etat,Annee_budgetaire as annee,montant_estime as montant,partenariats as partenaire,budget_partenaire as budget,etape_projet_construction.remarques as remarque from etape_projet_construction join etape_construction on etape_projet_construction.id_etape_construction=etape_construction.id_etape_construction join etat_etape_projet_construction on etape_projet_construction.id_etape_projet_constr=etat_etape_projet_construction.id_etape_projet_constr join etat on etat.id_etat=etat_etape_projet_construction.id_etat where utilisateur_id=?', [pl], (error, results) => {
          if (error) {
            console.error('Error executing SQL query:', error);
            res.status(500).json({ success: false, error: 'Internal server error' });
            return; 
          }
         
          res.json({ success: true, results });
        });  
      });
    
      app.post('/api/HistoriqueExt', (req, res) => {
        con.query('select username,etape_projet_extension.id_etape_projet_extension as idetape,etat_etape_projet_extension.id_etat as idetat,etape_extension.designation_fr as etape,etat.designation_fr as etat,Annee_budgetaire as annee,etape_projet_extension.remarques as remarque from etape_projet_extension join etape_extension on etape_projet_extension.id_etape_extension=etape_extension.id_etape_extension join etat_etape_projet_extension on etape_projet_extension.id_etape_projet_extension=etat_etape_projet_extension.id_etape_projet_extension join etat on etat.id_etat=etat_etape_projet_extension.id_etat join utilisateur on etape_projet_extension.utilisateur_id=utilisateur.id where utilisateur_id=? ', [pl], (error, results) => {
          if (error) {
            console.error('Error executing SQL query:', error);
            res.status(500).json({ success: false, error: 'Internal server error' });
            return; 
          }
         
          res.json({ success: true, results });
        });  
      });
      app.post('/api/HistoriqueEtatExt', (req, res) => {
        const { idetat } = req.body; 
        con.query(
          'SELECT historique_Extension.id_etape, historique_Extension.date, etat_precedent_etat.designation_fr AS etat_precedent, etat_actuel_etat.designation_fr AS etat FROM historique_Extension JOIN etat AS etat_precedent_etat ON historique_Extension.etat_precedent = etat_precedent_etat.id_etat JOIN etat AS etat_actuel_etat ON historique_Extension.etat_actuel = etat_actuel_etat.id_etat WHERE historique_Extension.id_etape = ?',
          [idetat],
          (error, results) => {
            if (error) {
              console.error('Error executing SQL query:', error);
              res.status(500).json({ success: false, error: 'Internal server error' });
              return;
            }
            res.json({ success: true, results });
          }
        );
      });

      app.post('/api/HistoriqueEtatCst', (req, res) => {
        const { idetat } = req.body; 
        con.query(
          'SELECT  id_etape,date, etat_precedent_etat.designation_fr AS etat_precedent, etat_actuel_etat.designation_fr AS etat FROM historique_construction JOIN  etat AS etat_precedent_etat ON historique_construction.etat_precedent = etat_precedent_etat.id_etat JOIN etat AS etat_actuel_etat ON historique_construction.etat_actuel = etat_actuel_etat.id_etat WHERE historique_construction.id_etape = ?',
          [idetat],
          (error, results) => {
            if (error) {
              console.error('Error executing SQL query:', error);
              res.status(500).json({ success: false, error: 'Internal server error' });
              return;
            }
            res.json({ success: true, results });
          }
        );
      });

      app.post('/api/HistoriqueAdminCst', (req, res) => {
        con.query('select etape_projet_construction.id_etape_projet_constr as idetape,etat_etape_projet_construction.id_etat as idetat,etape_construction.designation_fr as etape,etat.designation_fr as etat,Annee_budgetaire as annee,montant_estime as montant,partenariats as partenaire,budget_partenaire as budget,etape_projet_construction.remarques as remarque from etape_projet_construction join etape_construction on etape_projet_construction.id_etape_construction=etape_construction.id_etape_construction join etat_etape_projet_construction on etape_projet_construction.id_etape_projet_constr=etat_etape_projet_construction.id_etape_projet_constr join etat on etat.id_etat=etat_etape_projet_construction.id_etat',  (error, results) => {
          if (error) {
            console.error('Error executing SQL query:', error);
            res.status(500).json({ success: false, error: 'Internal server error' });
            return; 
          }
         
          res.json({ success: true, results });
        });  
      });
    
      app.post('/api/HistoriqueAdminExt', (req, res) => {
        con.query('select username,etape_projet_extension.id_etape_projet_extension as idetape,etat_etape_projet_extension.id_etat as idetat,etape_extension.designation_fr as etape,etat.designation_fr as etat,Annee_budgetaire as annee,etape_projet_extension.remarques as remarque from etape_projet_extension join etape_extension on etape_projet_extension.id_etape_extension=etape_extension.id_etape_extension join etat_etape_projet_extension on etape_projet_extension.id_etape_projet_extension=etat_etape_projet_extension.id_etape_projet_extension join etat on etat.id_etat=etat_etape_projet_extension.id_etat join utilisateur on etape_projet_extension.utilisateur_id=utilisateur.id  ', (error, results) => {
          if (error) {
            console.error('Error executing SQL query:', error);
            res.status(500).json({ success: false, error: 'Internal server error' });
            return; 
          }
         
          res.json({ success: true, results });
        });  
      });
      

      app.post('/api/HistoriqueAdminEtatExt', (req, res) => {
        const { idetat } = req.body; 
        con.query(
          'SELECT historique_Extension.id_etape, historique_Extension.date, etat_precedent_etat.designation_fr AS etat_precedent, etat_actuel_etat.designation_fr AS etat FROM historique_Extension JOIN etat AS etat_precedent_etat ON historique_Extension.etat_precedent = etat_precedent_etat.id_etat JOIN etat AS etat_actuel_etat ON historique_Extension.etat_actuel = etat_actuel_etat.id_etat WHERE historique_Extension.id_etape = ?',
          [idetat],
          (error, results) => {
            if (error) {
              console.error('Error executing SQL query:', error);
              res.status(500).json({ success: false, error: 'Internal server error' });
              return;
            }
            res.json({ success: true, results });
          }
        );
      });

      app.post('/api/HistoriqueAdminEtatCst', (req, res) => {
        const { idetat } = req.body; 
        con.query(
          'SELECT  id_etape,date, etat_precedent_etat.designation_fr AS etat_precedent, etat_actuel_etat.designation_fr AS etat FROM historique_construction JOIN  etat AS etat_precedent_etat ON historique_construction.etat_precedent = etat_precedent_etat.id_etat JOIN etat AS etat_actuel_etat ON historique_construction.etat_actuel = etat_actuel_etat.id_etat WHERE historique_construction.id_etape = ?',
          [idetat],
          (error, results) => {
            if (error) {
              console.error('Error executing SQL query:', error);
              res.status(500).json({ success: false, error: 'Internal server error' });
              return;
            }
            res.json({ success: true, results });
          }
        );
      });
      app.post('/api/existe', (req, res) => {

        con.query('select etape_projet_extension.id_etape_projet_extension as idetape,etat_etape_projet_extension.id_etat as idetat,etape_extension.designation_fr as etape,etat.designation_fr as etat,Annee_budgetaire as annee,etape_projet_extension.remarques as remarque from etape_projet_extension join etape_extension on etape_projet_extension.id_etape_extension=etape_extension.id_etape_extension join etat_etape_projet_extension on etape_projet_extension.id_etape_projet_extension=etat_etape_projet_extension.id_etape_projet_extension join etat on etat.id_etat=etat_etape_projet_extension.id_etat where id_plan<(Select max(id_plan) from plan) and etat.designation_fr=? and utilisateur_id=? ',['proposé',pl], (error, results, fields) => {
          if (error) {
            console.error('Error executing SQL query:', error);
            res.status(500).json({ success: false, error: 'Internal server error' });
            return;
          }
          if (results.length === 0) {
            res.json({ success: false, error: 'No results found' });
            return;
          }
          console.log(results);
          res.json({ success: true, results });
        });
      });
      app.post('/api/update', (req, res) => {
        const query = `
          UPDATE etape_projet_extension
          SET id_plan = id_plan + 1, annee_budgetaire = annee_budgetaire + 1
          WHERE id_plan < (SELECT MAX(id_plan) FROM plan)
          AND EXISTS (
            SELECT 1 
            FROM etat 
            JOIN etat_etape_projet_extension ON etat.id_etat = etat_etape_projet_extension.id_etat
            WHERE etat.designation_fr = ? 
            AND etat_etape_projet_extension.id_etape_projet_extension = etape_projet_extension.id_etape_projet_extension and utilisateur_id=?
          )
        `;
      
        con.query(query, ['proposé',pl], (error, results) => {
          if (error) {
            console.error('Error executing SQL query:', error);
            res.status(500).json({ success: false, error: 'Internal server error' });
            return;
          }
      
          // For UPDATE queries, results.affectedRows indicates the number of rows affected
          if (results.affectedRows === 0) {
            res.json({ success: false, error: 'No rows updated' });
            return;
          }
      
          console.log(results);
          res.json({ success: true, affectedRows: results.affectedRows });
        });
      });

       app.post('/api/existeconst', (req, res) => {

        con.query('select etape_projet_construction.id_etape_projet_constr as idetape,etat_etape_projet_construction.id_etat as idetat,etape_construction.designation_fr as etape,etat.designation_fr as etat,Annee_budgetaire as annee,montant_estime as montant,partenariats as partenaire,budget_partenaire as budget,etape_projet_construction.remarques as remarque from etape_projet_construction join etape_construction on etape_projet_construction.id_etape_construction=etape_construction.id_etape_construction join etat_etape_projet_construction on etape_projet_construction.id_etape_projet_constr=etat_etape_projet_construction.id_etape_projet_constr join etat on etat.id_etat=etat_etape_projet_construction.id_etat where id_plan<(Select max(id_plan) from plan) and etat.designation_fr=? and utilisateur_id=? ',['proposé',pl], (error, results, fields) => {
          if (error) {
            console.error('Error executing SQL query:', error);
            res.status(500).json({ success: false, error: 'Internal server error' });
            return;
          }
          if (results.length === 0) {
            res.json({ success: false, error: 'No results found' });
            return;
          }
          console.log(results);
          res.json({ success: true, results });
        });
      });  
      app.post('/api/updateconst', (req, res) => {
        const query = `
          UPDATE etape_projet_construction
          SET id_plan = id_plan + 1, annee_budgetaire = annee_budgetaire + 1
          WHERE id_plan < (SELECT MAX(id_plan) FROM plan)
          AND EXISTS (
            SELECT 1 
            FROM etat 
            JOIN etat_etape_projet_construction ON etat.id_etat = etat_etape_projet_construction.id_etat
            WHERE etat.designation_fr = ? 
            AND etat_etape_projet_construction.id_etape_projet_constr = etape_projet_construction.id_etape_projet_constr and utilisateur_id=?
          )
        `;
      
        con.query(query, ['proposé',pl], (error, results) => {
          if (error) {
            console.error('Error executing SQL query:', error);
            res.status(500).json({ success: false, error: 'Internal server error' });
            return;
          }
      
          // For UPDATE queries, results.affectedRows indicates the number of rows affected
          if (results.affectedRows === 0) {
            res.json({ success: false, error: 'No rows updated' });
            return;
          }
      
          console.log(results);
          res.json({ success: true, affectedRows: results.affectedRows });
        });})

app.listen(port, () => {
  console.log(`Le serveur fonctionne sur le port ${port}`);
});

