<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  
    <title>Request - Backlog</title>
    <?php include("include-css.php"); ?>
  </head>

  <body>
    <!-- ===================== HEADER + NAV ===================== -->
    <!-- ======================================================== -->
    <?php include("include-header-nav.php"); ?>

    <!-- ========================= MAIN ========================= -->
    <!-- ======================================================== -->
    <div id="main" class="container">
      <h1>Demandes - Backlog</h1>
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
          <option value="um">UM</option>
          <option value="rm">RM</option>
          <option value="proximite">Proximité</option>
          <option>...</option>
        </select>

        <select class="selectpicker show-tick">
          <option value="tous">Tous les outils</option>
          <option value="n1">WGD</option>
          <option value="n2">GDSA</option>
          <option value="proximite">IAM</option>
          <option>...</option>
        </select>

        <select class="selectpicker show-tick">
          <option value="ouvre">Jours ouvrés</option>
          <option value="calendaire">Jours calendaires</option>
        </select>
      </div>
    
      <div class="row charts">
        <div class="col-xs-12 col-sm-12 col-md-6" id="chartContainer3"></div>
        <div class="col-xs-12 col-sm-12 col-md-6" id="chartContainer4"></div>
      </div>

      <h3>Tableau de synthèse</h3>
      <table class="table table-hover table-bordered table-striped">
          <thead>
              <tr>
                  <th>Outil</th>
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
                  <td>GDSA</td>
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
                  <td>MIC</td>
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
                  <td>WGD</td>
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
                  <td>ITSM/ARS</td>
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
                  <td>SRM</td>
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
                  <td>IAM</td>
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
                  <td>SAILPOINT</td>
                  <td>13</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>13</td>
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
              </tr>
              <tr>
                  <td>Total</td>
                  <td>380</td>
                  <td>103</td>
                  <td>29</td>
                  <td>2</td>
                  <td>0</td>
                  <td>2</td>
                  <td>516</td>
                  <td>2,14</td>
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
