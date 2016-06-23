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
      $bdd = new PDO('mysql:host=localhost;dbname=flashboard_data_test;charset=utf8', 'root', '', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
      // dernier argument permet d'afficher + de détails pour les erreurs
    }
    catch(Exception $e)
    {
      // En cas d'erreur, on affiche un message et on arrête tout
      die('Erreur : '.$e->getMessage());
    }
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
          <option value="%">Tous les sites géograph.</option>
          <option value="mac19">MAC19</option>
          <option value="compans">Compans</option>
          <option>...</option>
        </select>

        <select class="selectpicker show-tick">
          <option value="%">Tous les groupes de support</option>
          <option value="Niveau 1">N1</option>
          <option value="Niveau 2">N2</option>
          <option value="Proximité">Proximité</option>
          <option value="Maintenance Matériel">Maintenance Matériel</option>
          <option value="Admin Outils">Admin Outils</option>
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

      <div id="synthese">
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
                // Tableau initial
                $requete = $bdd->query('SELECT * FROM incident_20160620');
                while($donnee = $requete->fetch())
                {
                  echo "<tr>";
                  echo "<td>" . $donnee['regroupement'] . "</td>";
                  echo "<td>" . $donnee['groupe-assigne'] . "</td>";
                  echo "<td>" . $donnee['zero-deux'] . "</td>";
                  echo "<td>" . $donnee['deux-cinq'] . "</td>";
                  echo "<td>" . $donnee['cinq-dix'] . "</td>";
                  echo "<td>" . $donnee['dix-quinze'] . "</td>";
                  echo "<td>" . $donnee['quinze-trente'] . "</td>";
                  echo "<td>" . $donnee['trente-inf'] . "</td>";
                  echo "<td>" . $donnee['total-backlog'] . "</td>";
                  echo "<td>" . $donnee['age-moyen-backlog'] . "</td>";
                  echo "</tr>";
                }
                ?>
            </tbody>

            <?php
            // AJAX : Tableau modifié en fonction des filtres
            if(!empty($_POST['filtre']))
            {
              $filtre = $_POST['filtre'];

              $requete = $bdd->prepare('SELECT * FROM incident_20160620 WHERE regroupement LIKE ?');
              $requete -> execute(array($filtre));

              echo "<tbody id='filtered'>";
              while($donnee = $requete->fetch())
              {
                echo "<tr>";
                echo "<td>" . $donnee['regroupement'] . "</td>";
                echo "<td>" . $donnee['groupe-assigne'] . "</td>";
                echo "<td>" . $donnee['zero-deux'] . "</td>";
                echo "<td>" . $donnee['deux-cinq'] . "</td>";
                echo "<td>" . $donnee['cinq-dix'] . "</td>";
                echo "<td>" . $donnee['dix-quinze'] . "</td>";
                echo "<td>" . $donnee['quinze-trente'] . "</td>";
                echo "<td>" . $donnee['trente-inf'] . "</td>";
                echo "<td>" . $donnee['total-backlog'] . "</td>";
                echo "<td>" . $donnee['age-moyen-backlog'] . "</td>";
                echo "</tr>";
              }
              echo "</tbody>";
            }
            ?>
            
        </table>
        <button id="exporter" class="btn btn-lg btn-primary btn-block" type="submit">Exporter vers tableau Excel</button>
      </div>

      <div id="tags">
        <h3>Tableau des tags</h3>
        <table class="table table-hover table-bordered table-striped">
            <thead>
                <tr>
                    <th>Regroupement</th>
                    <th>Groupe assigné</th>
                    <th>NRP</th>
                    <th>RDV</th>
                    <th>TRF</th>
                    <th>Backlog total</th>
                    <th>Tags total</th>
                    <th>% de tags</th>
                </tr>
            </thead>
            <tbody>
                <?php
                $requete = $bdd->query('SELECT * FROM incident_20160620');
                while($donnee = $requete->fetch())
                {
                  echo "<tr>";
                  echo "<td>" . $donnee['regroupement'] . "</td>";
                  echo "<td>" . $donnee['groupe-assigne'] . "</td>";
                  echo "<td>" . $donnee['nrp'] . "</td>";
                  echo "<td>" . $donnee['rdv'] . "</td>";
                  echo "<td>" . $donnee['trf'] . "</td>";
                  echo "<td>" . $donnee['total-backlog'] . "</td>";
                  echo "<td>" . $donnee['total-tag'] . "</td>";
                  echo "<td>" . $donnee['pourcentage-tag'] . "</td>";
                  echo "</tr>";
                }
                ?>
            </tbody>
        </table>
        <button id="exporter" class="btn btn-lg btn-primary btn-block" type="submit">Exporter vers tableau Excel</button>
      </div>
    </div> <!-- fin container -->

    <!-- ==================== FOOTER + SCRIPT =================== -->
    <!-- ======================================================== -->
    <?php include("include-footer-script.php"); ?>

  </body>
</html>