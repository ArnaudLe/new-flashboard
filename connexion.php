<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  
    <title>Connexion au FlashBoard BP²I</title>
    <?php include("include-css.php"); ?>
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

    <!-- ==================== FOOTER + SCRIPT =================== -->
    <!-- ======================================================== -->
    <?php include("include-footer-script.php"); ?>

  </body>
</html>