<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  
    <title>FlashBoard BP²I</title>

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
    <!-- ===================== HEADER + NAV ===================== -->
    <!-- ======================================================== -->
    <?php include("header-nav.php"); ?>

    <!-- ========================= MAIN ========================= -->
    <!-- ======================================================== -->
    <div id="main" class="container">
      <h1>Accueil</h1>
      <p>Bienvenue sur le nouveau FlashBoard. Vous retrouverez ci-dessous la météo globale du jour, vous permettant de visualiser en un coup d'oeil les tendances du jour. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      <div id="bloc-transparent"><span>Prochainement...</span></div>
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
