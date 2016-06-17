    <!-- ======================== HEADER ======================== -->
    <!-- ======================================================== -->
    <header class="container">
      <div class="row">
        <a class="hidden-xs col-sm-4 col-md-3" href="index.php"><img src="resources/img/logo_bp2i0.gif" alt="logo-top"/></a>
        <h1 class="col-xs-6 col-sm-5 col-md-6">FlashBoard 2.0</h1>
        <div class="col-xs-6 col-sm-3 col-md-3" id="settings">
          <a href="connexion.php"><i class="fa fa-sign-out"></i>Déconnexion</a>
          <a href="prochainement.php"><i class="fa fa-cog"></i>Paramètres</a>
        </div>
      </div>
    </header>

    <!-- ======================== NAVBAR MD+LG ======================== -->
    <!-- ============================================================== -->
    <nav id="full-nav" class="visible-md visible-lg">
      <div class="container">
          <ul class="nav navbar-nav"> <!-- Classes Bootstrap -->
            <!-- Accueil -->
            <li><a href="index.php"><i class="fa fa-home" aria-hidden="true"></i></a></li>
            <!-- VIP -->
            <li class="dropdown">
              <a href="#vip">VIP <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="prochainement.php">État-major</a></li>
                <li><a href="prochainement.php">Gold</a></li>
              </ul>
            </li>
            <!-- Incidents -->
            <li class="dropdown">
              <a href="#incident">Incident <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="prochainement.php">Flux entrant</a></li>
                <li><a href="prochainement.php">Flux sortant</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="incident-backlog.php">Backlog</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="prochainement.php">Incidents Généraux</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="prochainement.php">Tickets Non Touchés</a></li>
                <li><a href="prochainement.php">Tickets relancés</a></li>
                <li><a href="prochainement.php">Tickets ré-ouverts</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="prochainement.php">Top 10 Utilisateurs</a></li>
                <li><a href="prochainement.php">Top 10 Catégories</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="prochainement.php">Enquête de satisfaction</a></li>
              </ul>
            </li>
            <!-- Demandes -->
            <li class="dropdown">
              <a href="#request">Request <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="prochainement.php">Flux entrant</a></li>
                <li><a href="prochainement.php">Flux sortant</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="request-backlog.php">Backlog</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="prochainement.php">HVD</a></li>
                <li><a href="prochainement.php">Nouveaux arrivants</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="prochainement.php">Tickets Non Touchés</a></li>
                <li><a href="prochainement.php">Non-conformité</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="prochainement.php">Enquête de satisfaction</a></li>
              </ul>
            </li>
            <li><a href="#change">Change</a></li>
            <li><a href="#problem">Problem</a></li>
            <li><a href="#knowledge">Knowledge</a></li>
            <!-- Météo -->
            <li class="dropdown">
              <a href="#meteo">Météo <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="prochainement.php">Incident</a></li>
                <li><a href="prochainement.php">Request</a></li>
                <li><a href="prochainement.php">Change</a></li>
                <li><a href="prochainement.php">Problem</a></li>
              </ul>
            </li>
            <!-- Métiers -->
            <li class="dropdown">
              <a href="#metiers">Métiers <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="prochainement.php">PF</a></li>
                <li><a href="prochainement.php">Cardif</a></li>
                <li><a href="prochainement.php">BDDF</a></li>
                <li><a href="prochainement.php">Fonctions Centrales</a></li>
              </ul>
            </li>
            <!-- Supports -->
            <li class="dropdown">
              <a href="#support">Support <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="prochainement.php">N1</a></li>
                <li><a href="prochainement.php">N2</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="prochainement.php">RM</a></li>
                <li><a href="prochainement.php">UM</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="prochainement.php">Proximité</a></li>
                <li><a href="prochainement.php">Maintenance Matériel</a></li>
                <li><a href="prochainement.php">Admin Outils</a></li>
                <li><a href="prochainement.php">Admin Ress</a></li>
                <li><a href="prochainement.php">...</a></li>
              </ul>
            </li>
            <li><a href="#toolboard">Toolboard</a></li>
          </ul>
      </div>
    </nav>

    <!-- ======================== NAVBAR XS+SM ======================== -->
    <!-- ============================================================== -->
    <nav id="simple-nav" class="visible-xs visible-sm">
      <div class="container">
          <ul>
            <li><a href="index.php"><i class="fa fa-home" aria-hidden="true"></i></a></li><!--
            --><li><a href="#vip">VIP</a></li><!--
            --><li><a href="#incident">Incident</a></li><!--
            --><li><a href="#request">Request</a></li><!--
            --><li><a href="#change">Change</a></li><!--
            --><li><a href="#problem">Problem</a></li><!--
            --><li><a href="#knowledge">Knowledge</a></li><!--
            --><li><a href="#meteo">Météo</a></li><!--
            --><li><a href="#metiers">Métiers</a></li><!--
            --><li><a href="#support">Support</a></li><!--
            --><li><a href="#toolboard">Toolboard</a></li>
          </ul>
      </div>
    </nav>