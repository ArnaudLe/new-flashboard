<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  
    <title>Incident - Backlog</title>
    <?php include("include-css.php"); ?>
  </head>

  <body>
    <!-- ===================== HEADER + NAV ===================== -->
    <!-- ======================================================== -->
    <?php include("include-header-nav.php"); ?>

    <!-- ===================== CONNEXION BDD ==================== -->
    <!-- ======================================================== -->
    <?php
    try
    {
      // On se connecte à MySQL
      $bdd = new PDO('mysql:host=localhost;dbname=flashboard_data_test;charset=utf8', 'root', '');
    }
    catch(Exception $e)
    {
      // En cas d'erreur, on affiche un message et on arrête tout
      die('Erreur : '.$e->getMessage());
    }?>

    <!-- =============== RECUPERATION DONNEES BDD =============== -->
    <!-- ======================================================== -->

    <?php
    $requete = $bdd->prepare('SELECT * FROM incident_20160620');
    $requete -> execute();

    $donnees = $requete -> fetchAll();
    ?>

    <!-- ========================= MAIN ========================= -->
    <!-- ======================================================== -->
    <div id="main" class="container">
      <h1>Incidents - Backlog</h1>
      <i class="fa fa-info-circle fa-lg" aria-hidden="true" data-toggle="popover" data-trigger="hover" title="Hypothèses utilisées" data-content="Critères jours ouvrés : 7h/20h du lundi au vendredi hors jours fériés"></i>
      <h3>Dernière mise à jour 18/05/2016 15:17:30</h3>

      <!-- Selection choix multiple : librarie bootstrap-select -->
      <!-- https://silviomoreto.github.io/bootstrap-select/ -->
      <div id="filtres">
        <select class="selectpicker show-tick">
          <option value="ajd">Aujourd'hui</option>
          <option value="calendrier">Calendrier</option>
        </select>

        <select class="selectpicker show-tick">
          <option value="tous">Tous les sites géograph.</option>
          <option value="mac19">MAC19</option>
          <option value="compans">Compans</option>
          <option>...</option>
        </select>

        <select class="selectpicker show-tick">
          <option value="tous">Tous les groupes de support</option>
          <option value="n1">N1</option>
          <option value="n2">N2</option>
          <option value="proximite">Proximité</option>
          <option>...</option>
        </select>

        <select class="selectpicker show-tick">
          <option value="ouvre">Jours ouvrés</option>
          <option value="calendaire">Jours calendaires</option>
        </select>
      </div>
    
      <div class="row charts">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4" id="chartContainer"></div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4" id="chartContainer2"></div>
      </div>

      <h3>Tableau de synthèse</h3>
      <table class="table table-hover table-bordered table-striped">
          <thead>
              <tr>
                  <th>Regroupement</th>
                  <th>Groupe assigné</th>
                  <th>Moins de 2 jours</th>
                  <th>Entre 2 et 5 jours</th>
                  <th>Entre 5 et 10 jours</th>
                  <th>Entre 10 et 15 jours</th>
                  <th>Entre 15 et 30 jours</th>
                  <th>Plus de 30 jours</th>
                  <th>Total</th>
                  <th>Âge moyen en jour</th>
              </tr>
          </thead>
          <tbody>
              <?php
              foreach($donnees as $donnee)
              {
              ?>
              <tr>
                  <td><?php echo $donnee['regroupement']; ?></td>
                  <td><?php echo $donnee['groupe-assigne']; ?></td>
                  <td><?php echo $donnee['zero-deux']; ?></td>
                  <td><?php echo $donnee['deux-cinq']; ?></td>
                  <td><?php echo $donnee['cinq-dix']; ?></td>
                  <td><?php echo $donnee['dix-quinze']; ?></td>
                  <td><?php echo $donnee['quinze-trente']; ?></td>
                  <td><?php echo $donnee['trente-inf']; ?></td>
                  <td><?php echo $donnee['total-backlog']; ?></td>
                  <td><?php echo $donnee['age-moyen-backlog']; ?></td>
              </tr>
              <?php
              }
              ?>
          </tbody>
      </table>
      <button id="exporter" class="btn btn-lg btn-primary btn-block" type="submit">Exporter vers tableau Excel</button>

      <h3>Tableau des tags</h3>
      <table class="table table-hover table-bordered table-striped">
          <thead>
              <tr>
                  <th>Regroupement</th>
                  <th>Groupe assigné</th>
                  <th>NRP</th>
                  <th>RDV</th>
                  <th>TRF</th>
                  <th>...</th>
                  <th>Backlog total</th>
                  <th>Tags total</th>
                  <th>% de tags</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>Niveau 1</td>
                  <td>SD Global</td>
                  <td>3</td>
                  <td>5</td>
                  <td>2</td>
                  <td>...</td>
                  <td>198</td>
                  <td>10</td>
                  <td>5%</td>
              </tr>
              <tr>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
              </tr>
              <tr>
                  <td>Total</td>
                  <td>-</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>...</td>
                  <td>1000</td>
                  <td>200</td>
                  <td>20%</td>
              </tr>
          </tbody>
      </table>
      <button id="exporter" class="btn btn-lg btn-primary btn-block" type="submit">Exporter vers tableau Excel</button>
    </div>

    <!-- ==================== FOOTER + SCRIPT =================== -->
    <!-- ======================================================== -->
    <?php include("include-footer-script.php"); ?>

  </body>
</html>