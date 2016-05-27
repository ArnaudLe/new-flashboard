$(document).ready(function()
{
  FusionCharts.ready(function()
  {
    /* ===== 1 - PIE CHART Incidents - Backlog actuel par groupes ===== */
    var revenueChart = new FusionCharts(
    {
      "type": "pie2D",
      "renderAt": "chartContainer",
      "width": "520",
      "height": "320",
      "dataFormat": "json",
      "dataSource":
      {
        "chart":
        {
          "caption": "Incidents - Backlog actuel",
          "subCaption": "31/05/2016 à 13h30",
          "canvasBgColor" : "#F3F3F3",
          "canvasBgAlpha" : "100",
          "bgColor": "#F3F3F3",
          "bgAlpha" : "100",
          "theme": "fint",
          "rotateValues": "0",
          "valueFontSize": "12",
          "valueFontColor": "#000000",
          "exportEnabled": "1",

          "showvalues": "1",
          "showlegend": "1",
          "legendborder": "0",
          "use3dlighting": "0",
          "showshadow": "0",
          "legendbgcolor": "#CCCCCC",
          "legendbgalpha": "20",
          "legendborderalpha": "0",
          "legendshadow": "0",
          "legendnumcolumns": "3",
          "palettecolors": "#95C94F,#e32118,#4181c3,#82d1f5,#f2963f"
        },
        "data":
        [
          {
            "label": "N1",
            "value": "285",
          },
          {
            "label": "N2",
            "value": "113",
          },
          {
            "label": "Proximité",
            "value": "75",
          },
          {
            "label": "MM",
            "value": "91",
          },
          {
            "label": "Admin Outils",
            "value": "10",
          }
        ]
      }
    });
    revenueChart.render();

    /* ===== 2 - COLUMN Incidents - Évolution Backlog ===== */
    var revenueChart = new FusionCharts(
    {
      "type": "column2d",
      "renderAt": "chartContainer2",
      "width": "520",
      "height": "320",
      "dataFormat": "json",
      "dataSource":
      {
        "chart":
        {
          "caption": "Incidents - Évolution Backlog",
          "subCaption": "Mai 2016 à 8h00",
          "xAxisName": "Jour",
          "yAxisName": "Backlog",
          "canvasBgColor" : "#F3F3F3",
          "canvasBgAlpha" : "100",
          "bgColor": "#F3F3F3",
          "bgAlpha" : "100",
          "theme": "fint",
          "rotateValues": "0",
          "valueFontSize": "12",
          "valueFontColor": "#000000",
          "palettecolors": "#95C94F",
          "exportEnabled": "1"
        },
        "data":
        [
          {
            "label": "02",
            "value": "524",
          },
          {
            "label": "03",
            "value": "581",
          },
          {
            "label": "04",
            "value": "524",
          },
          {
            "label": "05",
            "value": "0",
          },
          {
            "label": "06",
            "value": "502",
          },
          {
            "label": "09",
            "value": "459",
          },
          {
            "label": "10",
            "value": "538",
          },
          {
            "label": "11",
            "value": "593",
          },
          {
            "label": "12",
            "value": "544",
          },
          {
            "label": "17",
            "value": "583",
          },
          {
            "label": "18",
            "value": "910",
          },
          {
            "label": "19",
            "value": "580",
          },
          {
            "label": "20",
            "value": "623",
          }
        ],
        "trendlines":
        [
          {
            "line":
            [
              {
                "startvalue": "550",
                "endvalue": "",
                "istrendzone": "",
                "valueonright": "1",
                "color": "fda813",
                "displayvalue": "Seuil : 550",
                "showontop": "1",
                "thickness": "3"
              }
            ]
          }
        ]
      }
    });
    revenueChart.render();

    /* ===== 3 - PIE CHART Incidents - Flux entrant ===== */
    var revenueChart = new FusionCharts(
    {
      "type": "pie2D",
      "renderAt": "chartContainer3",
      "width": "520",
      "height": "320",
      "dataFormat": "json",
      "dataSource":
      {
        "chart":
        {
          "caption": "Incidents - Flux entrant",
          "subCaption": "31/05/2016 à 13h30",
          "canvasBgColor" : "#F3F3F3",
          "canvasBgAlpha" : "100",
          "bgColor": "#F3F3F3",
          "bgAlpha" : "100",
          "theme": "fint",
          "rotateValues": "0",
          "valueFontSize": "12",
          "valueFontColor": "#000000",
          "exportEnabled": "1",

          "showvalues": "1",
          "showlegend": "1",
          "legendborder": "0",
          "use3dlighting": "0",
          "showshadow": "0",
          "legendbgcolor": "#CCCCCC",
          "legendbgalpha": "20",
          "legendborderalpha": "0",
          "legendshadow": "0",
          "legendnumcolumns": "3",
          "palettecolors": "#95C94F,#e32118"
        },
        "data":
        [
          {
            "label": "Assignés",
            "value": "320",
          },
          {
            "label": "Créés",
            "value": "600",
          }
        ]
      }
    });
    revenueChart.render();

    /* ===== 4 - PIE CHART Incidents - Flux sortant ===== */
    var revenueChart = new FusionCharts(
    {
      "type": "pie2D",
      "renderAt": "chartContainer4",
      "width": "520",
      "height": "320",
      "dataFormat": "json",
      "dataSource":
      {
        "chart":
        {
          "caption": "Incidents - Flux sortant",
          "subCaption": "31/05/2016 à 13h30",
          "canvasBgColor" : "#F3F3F3",
          "canvasBgAlpha" : "100",
          "bgColor": "#F3F3F3",
          "bgAlpha" : "100",
          "theme": "fint",
          "rotateValues": "0",
          "valueFontSize": "12",
          "valueFontColor": "#000000",
          "exportEnabled": "1",

          "showvalues": "1",
          "showlegend": "1",
          "legendborder": "0",
          "use3dlighting": "0",
          "showshadow": "0",
          "legendbgcolor": "#CCCCCC",
          "legendbgalpha": "20",
          "legendborderalpha": "0",
          "legendshadow": "0",
          "legendnumcolumns": "3",
          "palettecolors": "#95C94F,#e32118"
        },
        "data":
        [
          {
            "label": "Assignés",
            "value": "125",
          },
          {
            "label": "Résolus",
            "value": "620",
          }
        ]
      }
    });
    revenueChart.render();

    /* ===== ? - STACKED COLUMN Incidents - Flux ===== */
    /*var revenueChart = new FusionCharts(
    {
      "type": "stackedcolumn2d",
      "renderAt": "chartContainer2",
      "width": "520",
      "height": "320",
      "dataFormat": "json",
      "dataSource":
      {
        "chart":
        {
          "caption": "Incidents - Flux",
          "subCaption": "23/05/2016 à 15h30",
          "xAxisName": "Flux",
          "yAxisName": "Nb incidents",
          "canvasBgColor" : "#F3F3F3",
          "canvasBgAlpha" : "100",
          "bgColor": "#F3F3F3",
          "bgAlpha" : "100",
          "theme": "fint",
          "rotateValues": "0",
          "valueFontSize": "12",
          "valueFontColor": "#000000",
          "exportEnabled": "1",

          "showplotborder": "0",
          "palettecolors": "#95C94F,#008ee4",
          "canvaspadding": "0",
          "divlinecolor": "CCCCCC",
          "showcanvasborder": "0",
          "legendbgcolor": "#CCCCCC",
          "legendbgalpha": "20",
          "legendborderalpha": "0",
          "legendshadow": "0",
          "interactivelegend": "1",
          "showsum": "1",
          "canvasborderalpha": "0",
          "showborder": "0"
        },
        "categories":
        [
          {
            "category":
            [
              {
                "label": "Flux entrant"
              },
              {
                "label": "Flux sortant"
              }
            ]
          }
        ],
        "dataset":
        [
          {
            "seriesname": "(Ré)Assignés",
            "renderas": "Area",
            "data":
            [
              {
                "value": "50"
              },
              {
                "value": "320"
              }
            ]
          },
          {
            "seriesname": "Créés/Résolus",
            "renderas": "Area",
            "data":
            [
              {
                "value": "500"
              },
              {
                "value": "400"
              }
            ]
          }
        ]
      }
    });
    revenueChart.render();*/

  }); /* Fin fonction FusionCharts.ready */
}); /* Fin fonction document.ready */



