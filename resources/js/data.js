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
          "palettecolors": "#00a76d,#95C94F,#5BBA47,#4181c3,#82d1f5"
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

    /* ===== 3 - STACKED COLUMN Incident - Flux entrant ===== */
    var revenueChart = new FusionCharts(
    {
      "type": "stackedcolumn2d",
      /*"renderAt": "chartContainer",*/
      "width": "520",
      "height": "320",
      "dataFormat": "json",
      "dataSource":
      {
        "chart":
        {
          "caption": "Incident - Flux entrant",
          "subCaption": "Mai 2016 à 8h00",
          "xAxisName": "Jour",
          "yAxisName": "Nb incidents entrant",
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
          "palettecolors": "#4181c3,#82d1f5",
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
                "label": "08"
              },
              {
                "label": "09"
              },
              {
                "label": "10"
              },
              {
                "label": "11"
              },
              {
                "label": "12"
              },
              {
                "label": "17"
              },
              {
                "label": "18"
              },
              {
                "label": "19"
              },
              {
                "label": "20"
              },
              {
                "label": "23"
              }
            ]
          }
        ],
        "dataset":
        [
          {
            "seriesname": "Créés",
            "renderas": "Area",
            "data":
            [
              {
                "value": "50"
              },
              {
                "value": "32"
              },
              {
                "value": "45"
              },
              {
                "value": "10"
              },
              {
                "value": "52"
              },
              {
                "value": "12"
              },
              {
                "value": "44"
              },
              {
                "value": "36"
              },
              {
                "value": "26"
              },
              {
                "value": "23"
              }
            ]
          },
          {
            "seriesname": "Assignés par un groupe",
            "renderas": "Area",
            "data":
            [
              {
                "value": "20"
              },
              {
                "value": "12"
              },
              {
                "value": "40"
              },
              {
                "value": "22"
              },
              {
                "value": "32"
              },
              {
                "value": "11"
              },
              {
                "value": "56"
              },
              {
                "value": "34"
              },
              {
                "value": "12"
              },
              {
                "value": "13"
              }
            ]
          }
        ]
      }
    });
    revenueChart.render();


    /* ===== 4 - STACKED COLUMN Incident - Flux sortant ===== */
    var revenueChart = new FusionCharts(
    {
      "type": "stackedcolumn2d",
      /*"renderAt": "chartContainer2",*/
      "width": "520",
      "height": "320",
      "dataFormat": "json",
      "dataSource":
      {
        "chart":
        {
          "caption": "Incident - Flux sortant",
          "subCaption": "Mai 2016 à 8h00",
          "xAxisName": "Jour",
          "yAxisName": "Nb incidents sortant",
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
          "palettecolors": "#00a76d,#95C94F",
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
                "label": "08"
              },
              {
                "label": "09"
              },
              {
                "label": "10"
              },
              {
                "label": "11"
              },
              {
                "label": "12"
              },
              {
                "label": "17"
              },
              {
                "label": "18"
              },
              {
                "label": "19"
              },
              {
                "label": "20"
              },
              {
                "label": "23"
              }
            ]
          }
        ],
        "dataset":
        [
          {
            "seriesname": "Résolus",
            "renderas": "Area",
            "data":
            [
              {
                "value": "40"
              },
              {
                "value": "25"
              },
              {
                "value": "35"
              },
              {
                "value": "10"
              },
              {
                "value": "42"
              },
              {
                "value": "8"
              },
              {
                "value": "35"
              },
              {
                "value": "27"
              },
              {
                "value": "01"
              },
              {
                "value": "23"
              }
            ]
          },
          {
            "seriesname": "Assignés vers un groupe",
            "renderas": "Area",
            "data":
            [
              {
                "value": "5"
              },
              {
                "value": "10"
              },
              {
                "value": "30"
              },
              {
                "value": "20"
              },
              {
                "value": "15"
              },
              {
                "value": "10"
              },
              {
                "value": "54"
              },
              {
                "value": "24"
              },
              {
                "value": "8"
              },
              {
                "value": "10"
              }
            ]
          }
        ]
      }
    });
    revenueChart.render();

    /* ===== 5 - STACKED COLUMN Request - Backlog ===== */
    var revenueChart = new FusionCharts(
    {
      "type": "stackedcolumn2d",
      "renderAt": "chartContainer3",
      "width": "600",
      "height": "420",
      "dataFormat": "json",
      "dataSource":
      {
        "chart":
        {
          "caption": "Demandes - Backlog",
          "subCaption": "Mai 2016 à 8h00",
          "xAxisName": "Jour",
          "yAxisName": "Nb demandes",
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
          "palettecolors": "#95C94F,#97D2B4,#DCDCDC",
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
                "label": "08"
              },
              {
                "label": "09"
              },
              {
                "label": "10"
              },
              {
                "label": "11"
              },
              {
                "label": "12"
              },
              {
                "label": "17"
              },
              {
                "label": "18"
              },
              {
                "label": "19"
              },
              {
                "label": "20"
              },
              {
                "label": "23"
              }
            ]
          }
        ],
        "dataset":
        [
          {
            "seriesname": "GDSA",
            "renderas": "Area",
            "data":
            [
              {
                "value": "50"
              },
              {
                "value": "32"
              },
              {
                "value": "45"
              },
              {
                "value": "10"
              },
              {
                "value": "52"
              },
              {
                "value": "12"
              },
              {
                "value": "44"
              },
              {
                "value": "36"
              },
              {
                "value": "26"
              },
              {
                "value": "23"
              }
            ]
          },
          {
            "seriesname": "MIC",
            "renderas": "Area",
            "data":
            [
              {
                "value": "20"
              },
              {
                "value": "12"
              },
              {
                "value": "40"
              },
              {
                "value": "22"
              },
              {
                "value": "32"
              },
              {
                "value": "11"
              },
              {
                "value": "62"
              },
              {
                "value": "34"
              },
              {
                "value": "12"
              },
              {
                "value": "13"
              }
            ]
          },
          {
            "seriesname": "WGD",
            "renderas": "Area",
            "data":
            [
              {
                "value": "60"
              },
              {
                "value": "22"
              },
              {
                "value": "54"
              },
              {
                "value": "23"
              },
              {
                "value": "3"
              },
              {
                "value": "12"
              },
              {
                "value": "32"
              },
              {
                "value": "11"
              },
              {
                "value": "15"
              },
              {
                "value": "20"
              }
            ]
          }
        ]
      }
    });
    revenueChart.render();

  }); /* Fin fonction FusionCharts.ready */
}); /* Fin fonction document.ready */



