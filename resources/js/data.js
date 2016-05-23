// Gestion de la validation du champs "First name"
$(document).ready(function()
{
  FusionCharts.ready(function(){
        var revenueChart = new FusionCharts({
        "type": "column2d",
        "renderAt": "chartContainer",
        "width": "500",
        "height": "300",
        "dataFormat": "json",
        "dataSource":  {
          "chart": {
            "caption": "Incidents - Évolution Backlog",
            "subCaption": "Mai 2016 à 8h00",
            "xAxisName": "Jour",
            "yAxisName": "Backlog",
            "canvasBgColor" : "#F3F3F3",
            "canvasBgAlpha" : "100",
            "bgColor": "#F3F3F3",
            "bgAlpha" : "100",
            "theme": "fint",
            "exportEnabled": "1"
         },
         "data": [
            {
              "label": "02",
              "value": "524",
              "color" : "#95C94F"
           },
           {
              "label": "03",
              "value": "581",
              "color" : "#95C94F"
           },
           {
              "label": "04",
              "value": "524",
              "color" : "#95C94F"
           },
           {
              "label": "05",
              "value": "0",
              "color" : "#95C94F"
           },
           {
              "label": "06",
              "value": "502",
              "color" : "#95C94F"
           },
           {
              "label": "09",
              "value": "459",
              "color" : "#95C94F"
           },
           {
              "label": "10",
              "value": "538",
              "color" : "#95C94F"
           },
           {
              "label": "11",
              "value": "593",
              "color" : "#95C94F"
           },
           {
              "label": "12",
              "value": "544",
              "color" : "#95C94F"
           },
           {
              "label": "17",
              "value": "583",
              "color" : "#95C94F"
           },
           {
              "label": "18",
              "value": "910",
              "color" : "#95C94F"
           },
           {
              "label": "19",
              "value": "580",
              "color" : "#95C94F"
           },
          {
              "label": "20",
              "value": "623",
              "color" : "#95C94F"
           }
          ]
      }
  });
  revenueChart.render();


        var revenueChart = new FusionCharts({
        "type": "column2d",
        "renderAt": "chartContainer2",
        "width": "500",
        "height": "300",
        "dataFormat": "json",
        "dataSource":  {
          "chart": {
            "caption": "Incidents - Backlog actuel",
            "subCaption": "23/05/2016 à 10h00",
            "xAxisName": "Nombre de jours",
            "yAxisName": "Backlog",
            "canvasBgColor" : "#F3F3F3",
            "canvasBgAlpha" : "100",
            "bgColor": "#F3F3F3",
            "bgAlpha" : "100",
            "theme": "fint",
            "exportEnabled": "1"
         },
         "data": [
           {
              "label": "< 2j",
              "value": "360",
              "color" : "#f2963f"
           },
           {
              "label": "2-5j",
              "value": "103",
              "color" : "#f2963f"
           },
           {
              "label": "5-10j",
              "value": "29",
              "color" : "#f2963f"
           },
           {
              "label": "10-15j",
              "value": "2",
              "color" : "#f2963f"
           },
           {
              "label": "15-30j",
              "value": "0",
              "color" : "#f2963f"
           },
           {
              "label": "> 30j",
              "value": "2",
              "color" : "#f2963f"
           },
           {
              "label": "Total",
              "value": "496",
              "color" : "#f2963f"
           }
          ]
      }
  });
  revenueChart.render();


    /*var revenueChart = new FusionCharts({
        "type": "column2d",
        "renderAt": "chartContainer",
        "width": "500",
        "height": "300",
        "dataFormat": "json",
        "dataSource":  {
          "chart": {
            "caption": "Incidents - Backlog global",
            "subCaption": "Année 2015",
            "xAxisName": "Mois",
            "yAxisName": "Nb incidents",
            "canvasBgColor" : "#F3F3F3",
            "canvasBgAlpha" : "100",
            "bgColor": "#F3F3F3",
            "bgAlpha" : "100",
            "theme": "fint",
            "exportEnabled": "1"
         },
         "data": [
           {
              "label": "Jan",
              "value": "5020",
              "color" : "#f2963f"
           },
           {
              "label": "Fév",
              "value": "5200",
              "color" : "#f2963f"
           },
           {
              "label": "Mar",
              "value": "6201",
              "color" : "#f2963f"
           },
           {
              "label": "Avr",
              "value": "5900",
              "color" : "#f2963f"
           },
           {
              "label": "Mai",
              "value": "7200",
              "color" : "#f2963f"
           },
           {
              "label": "Juin",
              "value": "6230",
              "color" : "#f2963f"
           },
           {
              "label": "Juil",
              "value": "4523",
              "color" : "#f2963f"
           },
           {
              "label": "Août",
              "value": "3810",
              "color" : "#f2963f"
           },
           {
              "label": "Sep",
              "value": "7501",
              "color" : "#f2963f"
           },
           {
              "label": "Oct",
              "value": "8630",
              "color" : "#f2963f"
           },
           {
              "label": "Nov",
              "value": "5200",
              "color" : "#f2963f"
           },
           {
              "label": "Déc",
              "value": "4100",
              "color" : "#f2963f"
           }
          ]
      }
  });
  revenueChart.render();

  var revenueChart = new FusionCharts({
        "type": "column2d",
        "renderAt": "chartContainer2",
        "width": "500",
        "height": "300",
        "dataFormat": "json",
        "dataSource":  {
          "chart": {
            "caption": "Incidents - Assignés global",
            "subCaption": "Année 2015",
            "xAxisName": "Mois",
            "yAxisName": "Nb incidents",
            "canvasBgColor" : "#F3F3F3",
            "canvasBgAlpha" : "100",
            "bgColor": "#F3F3F3",
            "bgAlpha" : "100",
            "theme": "fint",
            "exportEnabled": "1"
         },
         "data": [
            {
              "label": "Jan",
              "value": "5270",
              "color" : "#95C94F"
           },
           {
              "label": "Fév",
              "value": "4990",
              "color" : "#95C94F"
           },
           {
              "label": "Mar",
              "value": "6144",
              "color" : "#95C94F"
           },
           {
              "label": "Apr",
              "value": "5948",
              "color" : "#95C94F"
           },
           {
              "label": "Mai",
              "value": "5110",
              "color" : "#95C94F"
           },
           {
              "label": "Juin",
              "value": "6769",
              "color" : "#95C94F"
           },
           {
              "label": "Juil",
              "value": "6203",
              "color" : "#95C94F"
           },
           {
              "label": "Août",
              "value": "5279",
              "color" : "#95C94F"
           },
           {
              "label": "Sep",
              "value": "7770",
              "color" : "#95C94F"
           },
           {
              "label": "Oct",
              "value": "7438",
              "color" : "#95C94F"
           },
           {
              "label": "Nov",
              "value": "6670",
              "color" : "#95C94F"
           },
           {
              "label": "Déc",
              "value": "6691",
              "color" : "#95C94F"
           }
          ]
      }
  });
  revenueChart.render();

    var revenueChart = new FusionCharts({
        "type": "column2d",
        "renderAt": "chartContainer3",
        "width": "500",
        "height": "300",
        "dataFormat": "json",
        "dataSource":  {
          "chart": {
            "caption": "Incidents - Résolus global",
            "subCaption": "Année 2015",
            "xAxisName": "Mois",
            "yAxisName": "Nb incidents",
            "canvasBgColor" : "#F3F3F3",
            "canvasBgAlpha" : "100",
            "bgColor": "#F3F3F3",
            "bgAlpha" : "100",
            "theme": "fint",
            "exportEnabled": "1"
         },
         "data": [
            {
              "label": "Jan",
              "value": "4590",
              "color" : "#00A76D"
           },
           {
              "label": "Fév",
              "value": "4270",
              "color" : "#00A76D"
           },
           {
              "label": "Mar",
              "value": "4943",
              "color" : "#00A76D"
           },
           {
              "label": "Avr",
              "value": "4639",
              "color" : "#00A76D"
           },
           {
              "label": "Mai",
              "value": "4113",
              "color" : "#00A76D"
           },
           {
              "label": "Juin",
              "value": "5762",
              "color" : "#00A76D"
           },
           {
              "label": "Juil",
              "value": "5215",
              "color" : "#00A76D"
           },
           {
              "label": "Août",
              "value": "4453",
              "color" : "#00A76D"
           },
           {
              "label": "Sep",
              "value": "5794",
              "color" : "#00A76D"
           },
           {
              "label": "Oct",
              "value": "6520",
              "color" : "#00A76D"
           },
           {
              "label": "Nov",
              "value": "5758",
              "color" : "#00A76D"
           },
           {
              "label": "Déc",
              "value": "5906",
              "color" : "#00A76D"
           }
          ]
      }
  });
  revenueChart.render();

    var revenueChart = new FusionCharts({
        "type": "column2d",
        "renderAt": "chartContainer4",
        "width": "500",
        "height": "300",
        "dataFormat": "json",
        "dataSource":  {
          "chart": {
            "caption": "Incidents - Clos global",
            "subCaption": "Année 2015",
            "xAxisName": "Mois",
            "yAxisName": "Nb incidents",
            "canvasBgColor" : "#F3F3F3",
            "canvasBgAlpha" : "100",
            "bgColor": "#F3F3F3",
            "bgAlpha" : "100",
            "theme": "fint",
            "exportEnabled": "1"
         },
         "data": [
            {
              "label": "Jan",
              "value": "2483",
              "color" : "#4181c3"
           },
           {
              "label": "Fév",
              "value": "2360",
              "color" : "#4181c3"
           },
           {
              "label": "Mar",
              "value": "2676",
              "color" : "#4181c3"
           },
           {
              "label": "Avr",
              "value": "2521",
              "color" : "#4181c3"
           },
           {
              "label": "Mai",
              "value": "2262",
              "color" : "#4181c3"
           },
           {
              "label": "Juin",
              "value": "2800",
              "color" : "#4181c3"
           },
           {
              "label": "Juil",
              "value": "2697",
              "color" : "#4181c3"
           },
           {
              "label": "Août",
              "value": "2181",
              "color" : "#4181c3"
           },
           {
              "label": "Sep",
              "value": "3017",
              "color" : "#4181c3"
           },
           {
              "label": "Oct",
              "value": "3233",
              "color" : "#4181c3"
           },
           {
              "label": "Nov",
              "value": "2527",
              "color" : "#4181c3"
           },
           {
              "label": "Déc",
              "value": "2297",
              "color" : "#4181c3"
           }
          ]
      }
  });
  revenueChart.render();*/
  })
});



