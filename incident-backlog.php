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
              <tr>
                  <td>Niveau 1</td>
                  <td>SD Global</td>
                  <td>194</td>
                  <td>60</td>
                  <td>13</td>
                  <td>1</td>
                  <td>0</td>
                  <td>0</td>
                  <td>268</td>
                  <td>1,51</td>
              </tr>
              <tr>
                  <td>Niveau 1</td>
                  <td>SUP BP2I 13Util PF</td>
                  <td>13</td>
                  <td>1</td>
                  <td>2</td>
                  <td>0</td>
                  <td>0</td>
                  <td>1</td>
                  <td>17</td>
                  <td>4,08</td>
              </tr>
              <tr>
                  <td>Niveau 2</td>
                  <td>SUP BP2I Distant N2</td>
                  <td>73</td>
                  <td>29</td>
                  <td>10</td>
                  <td>0</td>
                  <td>0</td>
                  <td>1</td>
                  <td>113</td>
                  <td>2,25</td>
              </tr>
              <tr>
                  <td>Proximité</td>
                  <td>SUP BP2I Campus Compans N2</td>
                  <td>3</td>
                  <td>0</td>
                  <td>1</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>4</td>
                  <td>2,71</td>
              </tr>
              <tr>
                  <td>Maintenance Matériel</td>
                  <td>Maintenance Matériel</td>
                  <td>74</td>
                  <td>13</td>
                  <td>3</td>
                  <td>1</td>
                  <td>0</td>
                  <td>0</td>
                  <td>91</td>
                  <td>1,13</td>
              </tr>
              <tr>
                  <td>Admin Outils</td>
                  <td>SUP BP2I Admin Outils N2</td>
                  <td>10</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>10</td>
                  <td>1,13</td>
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
                  <td>...</td>
              </tr>
              <tr>
                  <td>Total</td>
                  <td>Total</td>
                  <td>367</td>
                  <td>103</td>
                  <td>29</td>
                  <td>2</td>
                  <td>0</td>
                  <td>2</td>
                  <td>503</td>
                  <td>2,14</td>
              </tr>
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