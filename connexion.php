<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  
    <title>Connexion au FlashBoard BP²I</title>

    <!-- ===== Importation CSS Bootstrap ===== -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <!-- Fallback local si CDN défaillant <link rel="stylesheet" href="lib/bootstrap/css/bootstrap.min.css"> -->

    <!-- ===== Importation CSS Font Awesome ===== -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">

    <!-- ===== Importation CSS Bootstrap-Select ===== -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.10.0/css/bootstrap-select.min.css">

    <!-- ===== Style CSS Perso ===== -->
    <link rel="stylesheet" href="resources/css/design.css">
  </head>

  <body>
    <!-- ======================== HEADER ======================== -->
    <!-- ======================================================== -->
    <header class="container">
      <div class="row">
        <a href="index.html"><img class="hidden-xs col-sm-3 col-md-3 col-lg-4" src="resources/img/logo_bp2i0.gif" alt="logo-top-connexion"/></a>
        <h1 class="col-sm-7 col-md-5 col-lg-6">FlashBoard 2.0</h1>
      </div>
    </header>

    <!-- ========================= MAIN ========================= -->
    <!-- ======================================================== -->
    <div id="main" class="container">
      <h1>Connexion</h1>
      <p>Bienvenue sur le nouveau FlashBoard. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

      <div class="alert alert-danger hidden">
        <strong>Attention !</strong> Votre UID ne respecte pas la forme définie.
      </div>

      <form>
        <h2>Connexion au FlashBoard</h2>
        <input id="uid" class="form-control" placeholder="UID" required autofocus>
        <input type="password" id="mdp" class="form-control" placeholder="Mot de passe (annuaire)" required>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me"> Maintenir la connexion
          </label>
        </div>
        <button id="connexion" class="btn btn-lg btn-primary btn-block" type="submit">Se connecter</button>
      </form>

    </div>

    <!-- ======================== FOOTER ======================== -->
    <!-- ======================================================== -->
    <?php include("footer.php"); ?>

    <!-- ===== JavaScript ===== -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.3/jquery.min.js"></script>
    <!-- Fallback jQuery <script src="lib/jquery/jquery-1.12.3.min.js"></script> -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
    <!-- Fallback Bootstrap JS <script src="lib/bootstrap/js/bootstrap.min.js"></script> -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.10.0/js/bootstrap-select.min.js"></script>
    <script type="text/javascript" src="resources/js/script.js"></script>

    <!-- JavaScript FusionCharts -->
    <script type="text/javascript" src="lib/fusioncharts/js/fusioncharts.js"></script>
    <script type="text/javascript" src="lib/fusioncharts/js/themes/fusioncharts.theme.fint.js"></script>

  </body>
</html>