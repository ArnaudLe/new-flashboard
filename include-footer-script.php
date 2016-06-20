    <footer class="container">
      <div id="separator"></div>
      <img src="resources/img/bloc_marque_bnpparibas_fr.png" alt="logo-bottom"/>
    </footer>

    
    <!-- ===== JavaScript ===== -->
    <!-- Fallback : fichiers stockés en local si le CDN ne fonctionne pas -->

    <!-- RESUME DES LIBRAIRIES
    jQuery : CDN + Fallback local
    Bootstrap CSS : CDN + Fallback local
    Bootstrap JS : CDN + Fallback local
    FontAwesome : CDN uniquement
    Bootstrap-select : CDN uniquement
    FusionCharts : Local uniquement
    -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.3/jquery.min.js"></script> <!-- jQuery CDN -->
    <script>if (!window.jQuery) {document.write('<script src="lib/jquery/jquery-1.12.3.min.js"><\/script>');}</script> <!-- jQuery local fallback -->

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script> <!-- Bootstrap JS CDN -->
    <script>if(typeof($.fn.modal) === 'undefined') {document.write('<script src="lib/bootstrap/js/bootstrap.min.js"><\/script>')}</script> <!-- Bootstrap JS local fallback -->

    <script>
      $(document).ready(function() {
      var bodyColor = $('body').css('color');
      if(bodyColor != 'rgb(51, 51, 51)') {
      $("head").prepend('<link rel="stylesheet" href="lib/bootstrap/css/bootstrap.min.css">');
      $("head").prepend('<link rel="stylesheet" href="resources/css/design.css">');}}); // on ré-applique notre CSS perso
    </script> <!-- Bootstrap CSS local fallback -->

    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.10.0/js/bootstrap-select.min.js"></script>
    <script type="text/javascript" src="resources/js/script.js"></script>
    <script type="text/javascript" src="resources/js/data.js"></script>

    <!-- JavaScript FusionCharts -->
    <script type="text/javascript" src="lib/fusioncharts/js/fusioncharts.js"></script>
    <script type="text/javascript" src="lib/fusioncharts/js/themes/fusioncharts.theme.fint.js"></script>