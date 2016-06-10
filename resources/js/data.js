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

    /* ===== 6 - Multi-bar/Stacked + Trendline + Line Chart - Incidents - Évolution Backlog ===== */
    var revenueChart = new FusionCharts(
    {
      "type": "mscombi2d",
      /* "type": "stackedcolumn2dline",*/ //Alternative en stacked-bar
      /* "renderAt": "chartContainer2",*/
      "width": "520",
      "height": "320",
      "dataFormat": "json",
      "dataSource":
      {
        "chart":
        {
          "caption": "Incidents - Évolution Backlog",
          "subCaption": "Sur 12 jours - enregistré à 0h00",
          "xAxisName": "Jour",
          "yAxisName": "Backlog",
          "canvasBgColor" : "#FFFFFF",
          "canvasBgAlpha" : "100",
          "bgColor": "#FFFFFF",
          "bgAlpha" : "100",
          "theme": "fint",
          "rotateValues": "1",
          "valueFontSize": "11",
          "valueFontColor": "#000000",
          "palettecolors": "#95C94F,#f8bd19,#00a76d,#DCDCDC",
          "showValues": "1",
          /*"placevaluesInside": "1",
          "rotateValues": "0",*/ // Alternative
          "exportEnabled": "1"

        },
        "categories":
        [
          {
            "category": 
            [
              {
                  "label": "06"
              },
              {
                  "label": "07"
              },
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
                  "label": "13"
              },
              {
                  "label": "14"
              },
              {
                  "label": "15"
              },
              {
                  "label": "16"
              },
              {
                  "label": "17"
              },
              {
                  "label": "20"
              },
              {
                  "label": "21"
              }
            ]
          }
        ],
        "dataset": 
        [
          {
            "seriesname": "N1",
            "data": 
            [
              {
                  "value": "420"
              },
              {
                  "value": "380"
              },
              {
                  "value": "355"
              },
              {
                  "value": "417"
              },
              {
                  "value": "390"
              },
              {
                  "value": "360"
              },
              {
                  "value": "375"
              },
              {
                  "value": "450"
              },
              {
                  "value": "452"
              },
              {
                  "value": "410"
              },
              {
                  "value": "400"
              },
              {
                  "value": "390"
              }
            ]
          },
          {
            "seriesname": "N2",
            "data": 
            [
              {
                  "value": "250"
              },
              {
                  "value": "220"
              },
              {
                  "value": "236"
              },
              {
                  "value": "240"
              },
              {
                  "value": "220"
              },
              {
                  "value": "236"
              },
              {
                  "value": "252"
              },
              {
                  "value": "400"
              },
              {
                  "value": "256"
              },
              {
                  "value": "278"
              },
              {
                  "value": "312"
              },
              {
                  "value": "301"
              }
            ]
          },
          {
            "seriesname": "Proximité",
            "data": 
            [
              {
                  "value": "100"
              },
              {
                  "value": "110"
              },
              {
                  "value": "120"
              },
              {
                  "value": "122"
              },
              {
                  "value": "120"
              },
              {
                  "value": "117"
              },
              {
                  "value": "115"
              },
              {
                  "value": "112"
              },
              {
                  "value": "110"
              },
              {
                  "value": "100"
              },
              {
                  "value": "102"
              },
              {
                  "value": "98"
              }
            ]
          },
          {
            "seriesname": "MM",
            "data": 
            [
              {
                  "value": "80"
              },
              {
                  "value": "77"
              },
              {
                  "value": "75"
              },
              {
                  "value": "70"
              },
              {
                  "value": "85"
              },
              {
                  "value": "82"
              },
              {
                  "value": "86"
              },
              {
                  "value": "90"
              },
              {
                  "value": "91"
              },
              {
                  "value": "95"
              },
              {
                  "value": "85"
              },
              {
                  "value": "82"
              }
            ]
          },
          {
            "seriesname": "Backlog total",
            "renderas": "Line",
            "data": 
            [
              {
                  "value": "900"
              },
              {
                  "value": "800"
              },
              {
                  "value": "790"
              },
              {
                  "value": "880"
              },
              {
                  "value": "820"
              },
              {
                  "value": "810"
              },
              {
                  "value": "860"
              },
              {
                  "value": "1070"
              },
              {
                  "value": "915"
              },
              {
                  "value": "913"
              },
              {
                  "value": "918"
              },
              {
                  "value": "885"
              }
            ]
          }
        ],
        "trendlines":
        [
          {
            "line":
            [
              {
                "startvalue": "850",
                "endvalue": "",
                "istrendzone": "",
                "valueonright": "1",
                "color": "fda813",
                "displayvalue": "Seuil : 850",
                "showontop": "1",
                "thickness": "3"
              }
            ]
          }
        ]
      }
    });
    revenueChart.render();

    /* ===== 7 - Multi-bar/Stacked + Trendline + Line Chart - Incidents - Évolution Flux entrant ===== */
    var revenueChart = new FusionCharts(
    {
      "type": "mscombi2d",
      /*"renderAt": "chartContainer2",*/
      "width": "800",
      "height": "400",
      "dataFormat": "json",
      "dataSource":
      {
        "chart":
        {
          "caption": "Incidents - Évolution Flux entrant",
          "subCaption": "Sur 12 jours",
          "xAxisName": "Jour",
          "yAxisName": "Nb incidents",
          "canvasBgColor" : "#FFFFFF",
          "canvasBgAlpha" : "100",
          "bgColor": "#FFFFFF",
          "bgAlpha" : "100",
          "theme": "fint",
          "rotateValues": "1",
          "valueFontSize": "11",
          "valueFontColor": "#000000",
          "palettecolors": "#95C94F,#00a76d,#f8bd19,#323232",
          "showValues": "1",
          "placevaluesInside": "1",
          "rotateValues": "0",
          "exportEnabled": "1"

        },
        "categories":
        [
          {
            "category": 
            [
              {
                  "label": "06"
              },
              {
                  "label": "07"
              },
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
                  "label": "13"
              },
              {
                  "label": "14"
              },
              {
                  "label": "15"
              },
              {
                  "label": "16"
              },
              {
                  "label": "17"
              },
              {
                  "label": "20"
              },
              {
                  "label": "21"
              }
            ]
          }
        ],
        "dataset": 
        [
          {
            "seriesname": "Créés",
            "data": 
            [
              {
                  "value": "420"
              },
              {
                  "value": "380"
              },
              {
                  "value": "355"
              },
              {
                  "value": "417"
              },
              {
                  "value": "390"
              },
              {
                  "value": "360"
              },
              {
                  "value": "375"
              },
              {
                  "value": "450"
              },
              {
                  "value": "452"
              },
              {
                  "value": "410"
              },
              {
                  "value": "400"
              },
              {
                  "value": "390"
              }
            ]
          },
          {
            "seriesname": "Assignés",
            "data": 
            [
              {
                  "value": "80"
              },
              {
                  "value": "77"
              },
              {
                  "value": "75"
              },
              {
                  "value": "70"
              },
              {
                  "value": "85"
              },
              {
                  "value": "82"
              },
              {
                  "value": "86"
              },
              {
                  "value": "90"
              },
              {
                  "value": "91"
              },
              {
                  "value": "95"
              },
              {
                  "value": "85"
              },
              {
                  "value": "82"
              }
            ]
          },
          {
            "seriesname": "Flux entrant total",
            "renderas": "Line",
            "rotateValues": "0",
            "data": 
            [
              {
                  "value": "500"
              },
              {
                  "value": "457"
              },
              {
                  "value": "430"
              },
              {
                  "value": "487"
              },
              {
                  "value": "460"
              },
              {
                  "value": "442"
              },
              {
                  "value": "461"
              },
              {
                  "value": "540"
              },
              {
                  "value": "543"
              },
              {
                  "value": "505"
              },
              {
                  "value": "485"
              },
              {
                  "value": "472"
              }
            ]
          },
          {
            "seriesname": "Flux entrant prévisionnel",
            "renderas": "Line",
            "rotateValues": "0",
            "showValues": "0",
            "dashed": "1",
            "data": 
            [
              {
                  "value": "480"
              },
              {
                  "value": "460"
              },
              {
                  "value": "450"
              },
              {
                  "value": "500"
              },
              {
                  "value": "480"
              },
              {
                  "value": "470"
              },
              {
                  "value": "470"
              },
              {
                  "value": "520"
              },
              {
                  "value": "510"
              },
              {
                  "value": "500"
              },
              {
                  "value": "510"
              },
              {
                  "value": "500"
              }
            ]
          }
        ]
      }
    });
    revenueChart.render();

    /* ===== 7bis - Area Charts - Incidents - Évolution Flux entrant ===== */
    var revenueChart = new FusionCharts(
    {
      "type": "mscombi2d",
      "renderAt": "chartContainer3",
      "width": "800",
      "height": "400",
      "dataFormat": "json",
      "dataSource":
      {
        "chart":
        {
          "caption": "Incidents - Évolution Flux entrant",
          "subCaption": "Sur 12 mois - 2015",
          "xAxisName": "Jour",
          "yAxisName": "Nb incidents",
          "canvasBgColor" : "#FFFFFF",
          "canvasBgAlpha" : "100",
          "bgColor": "#FFFFFF",
          "bgAlpha" : "100",
          "theme": "fint",
          "rotateValues": "1",
          "valueFontSize": "11",
          "valueFontColor": "#000000",
          "palettecolors": "#95C94F,#00a76d,#f8bd19,#323232",
          "placevaluesInside": "1",
          "rotateValues": "0",
          "exportEnabled": "1"

        },
        "categories":
        [
          {
            "category": 
            [
              {
                  "label": "Jan"
              },
              {
                  "label": "Fév"
              },
              {
                  "label": "Mar"
              },
              {
                  "label": "Avr"
              },
              {
                  "label": "Mai"
              },
              {
                  "label": "Jui"
              },
              {
                  "label": "Juil"
              },
              {
                  "label": "Aoû"
              },
              {
                  "label": "Sep"
              },
              {
                  "label": "Oct"
              },
              {
                  "label": "Nov"
              },
              {
                  "label": "Déc"
              }
            ]
          }
        ],
        "dataset": 
        [
          {
            "seriesname": "Créés",
            "renderas": "area",
            "data": 
            [
              {
                  "value": "4200"
              },
              {
                  "value": "3800"
              },
              {
                  "value": "3550"
              },
              {
                  "value": "4170"
              },
              {
                  "value": "3900"
              },
              {
                  "value": "3600"
              },
              {
                  "value": "3750"
              },
              {
                  "value": "4500"
              },
              {
                  "value": "4520"
              },
              {
                  "value": "4100"
              },
              {
                  "value": "4000"
              },
              {
                  "value": "3900"
              }
            ]
          },
          {
            "seriesname": "Assignés",
            "renderas": "area",
            "data": 
            [
              {
                  "value": "800"
              },
              {
                  "value": "770"
              },
              {
                  "value": "750"
              },
              {
                  "value": "700"
              },
              {
                  "value": "850"
              },
              {
                  "value": "820"
              },
              {
                  "value": "860"
              },
              {
                  "value": "900"
              },
              {
                  "value": "910"
              },
              {
                  "value": "950"
              },
              {
                  "value": "850"
              },
              {
                  "value": "820"
              }
            ]
          },
          {
            "seriesname": "Flux entrant total",
            "renderas": "Line",
            "showValues": "1",
            "data": 
            [
              {
                  "value": "5000"
              },
              {
                  "value": "4570"
              },
              {
                  "value": "4300"
              },
              {
                  "value": "4870"
              },
              {
                  "value": "4600"
              },
              {
                  "value": "4420"
              },
              {
                  "value": "4610"
              },
              {
                  "value": "5400"
              },
              {
                  "value": "5430"
              },
              {
                  "value": "5050"
              },
              {
                  "value": "4850"
              },
              {
                  "value": "4720"
              }
            ]
          },
          {
            "seriesname": "Flux entrant prévisionnel",
            "renderas": "Line",
            "rotateValues": "0",
            "showValues": "0",
            "dashed": "1",
            "data": 
            [
              {
                  "value": "4800"
              },
              {
                  "value": "4600"
              },
              {
                  "value": "4500"
              },
              {
                  "value": "5000"
              },
              {
                  "value": "4800"
              },
              {
                  "value": "4700"
              },
              {
                  "value": "4700"
              },
              {
                  "value": "5200"
              },
              {
                  "value": "5100"
              },
              {
                  "value": "5000"
              },
              {
                  "value": "5100"
              },
              {
                  "value": "5000"
              }
            ]
          }
        ]
      }
    });
    revenueChart.render();

  }); /* Fin fonction FusionCharts.ready */
}); /* Fin fonction document.ready */



