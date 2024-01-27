var APP_DATA = {
  "scenes": [
    {
      "id": "0-vorderseite",
      "name": "Vorderseite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.11429255695156826,
        "pitch": -0.11866894347179624,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": -0.4439436411710922,
          "pitch": 0.005532762726300433,
          "rotation": 0,
          "target": "2-garten-terrasse"
        },
        {
          "yaw": 0.4281471416152698,
          "pitch": -0.035997561444940374,
          "rotation": 5.497787143782138,
          "target": "1-hochbeet-garten"
        },
        {
          "yaw": -0.02163217469955825,
          "pitch": -0.003673879419501702,
          "rotation": 0,
          "target": "3-flur-erdgeschoss-eingang"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hochbeet-garten",
      "name": "Hochbeet-Garten",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.19484365416292,
        "pitch": -0.08137129520492792,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": 1.345019429472698,
          "pitch": 0.09812125521045445,
          "rotation": 0,
          "target": "2-garten-terrasse"
        },
        {
          "yaw": -0.9368822806401713,
          "pitch": 0.014958294951536999,
          "rotation": 1.5707963267948966,
          "target": "0-vorderseite"
        },
        {
          "yaw": 0.45800686623361564,
          "pitch": 0.027876796457302788,
          "rotation": 0,
          "target": "13-wohnzimmer"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-garten-terrasse",
      "name": "Garten-Terrasse",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4508360134806697,
          "pitch": 0.051919648069777224,
          "rotation": 0,
          "target": "0-vorderseite"
        },
        {
          "yaw": -0.8879398590702721,
          "pitch": 0.06837794769389127,
          "rotation": 0,
          "target": "1-hochbeet-garten"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-flur-erdgeschoss-eingang",
      "name": "Flur Erdgeschoss Eingang",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4981363645143713,
          "pitch": 0.7233530831574004,
          "rotation": 10.210176124166829,
          "target": "4-flur-keller"
        },
        {
          "yaw": 0.11101250375323879,
          "pitch": 0.09313249176404526,
          "rotation": 0,
          "target": "11-flur-erdgeschoss"
        },
        {
          "yaw": -2.886777105415197,
          "pitch": 0.15892246315641856,
          "rotation": 0,
          "target": "0-vorderseite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-flur-keller",
      "name": "Flur Keller",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5846707716001909,
          "pitch": 0.16304574983311326,
          "rotation": 0,
          "target": "5-waschraum"
        },
        {
          "yaw": -3.0182845825432274,
          "pitch": 0.30830888716358906,
          "rotation": 0,
          "target": "6-hobbyraum"
        },
        {
          "yaw": 1.7311406691983056,
          "pitch": 0.17366244687769417,
          "rotation": 0,
          "target": "7-werkstatt"
        },
        {
          "yaw": -0.3580443045342978,
          "pitch": -0.42484963441621915,
          "rotation": 0.7853981633974483,
          "target": "3-flur-erdgeschoss-eingang"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.450688218476344,
          "pitch": -0.2656155782595384,
          "title": "Mond",
          "text": "Die Lampe ist eigtl. ein Mond. Leider auf dem Bild nicht zu erkennen.<br>"
        }
      ]
    },
    {
      "id": "5-waschraum",
      "name": "Waschraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8250551989877462,
          "pitch": 0.26958969273217726,
          "rotation": 0,
          "target": "4-flur-keller"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.07829568163781886,
          "pitch": 0.0032694574315730307,
          "title": "Geheimtür",
          "text": "<div>Keiner weiß, wohin die Tür führt, denn sie ist verriegelt und der Schlüssel nicht auffindbar ;)<br></div>"
        }
      ]
    },
    {
      "id": "6-hobbyraum",
      "name": "Hobbyraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.01549526963487402,
          "pitch": 0.09601704429625357,
          "rotation": 0,
          "target": "8-flur-keller-2024"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.343068535937741,
          "pitch": -0.013341020359806777,
          "title": "Zeitreise",
          "text": "So sah der Keller mal aus. Wie eine Baustelle... Gehen wir nochmal in den Flur und anschließend zurück in den Hobbyraum.<br>"
        }
      ]
    },
    {
      "id": "7-werkstatt",
      "name": "Werkstatt",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.826124799453785,
          "pitch": 0.33643927067099,
          "rotation": 0,
          "target": "4-flur-keller"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7140733612769896,
          "pitch": 0.017066529688076315,
          "title": "Zeitreise",
          "text": "Hier sieht es aber noch leer aus... Schauen wir mal im Hobbyraum vorbei.<br>"
        }
      ]
    },
    {
      "id": "8-flur-keller-2024",
      "name": "Flur Keller 2024",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8518509507835557,
          "pitch": 0.152183554818059,
          "rotation": 0,
          "target": "5-waschraum"
        },
        {
          "yaw": 1.7751168752619915,
          "pitch": 0.08317148235119731,
          "rotation": 0,
          "target": "9-werkstatt-2024"
        },
        {
          "yaw": -0.48521439470873773,
          "pitch": -0.49279278169370144,
          "rotation": 0.7853981633974483,
          "target": "3-flur-erdgeschoss-eingang"
        },
        {
          "yaw": 3.047269676099134,
          "pitch": 0.1813905918399854,
          "rotation": 0,
          "target": "10-hobbyraum-2024"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.005166261927309,
          "pitch": 0.0015740798540804235,
          "title": "Zeitreise Werkstatt",
          "text": "Auch die Werkstatt hat sich verändert. Schauen wir nochmal rein!<br>"
        },
        {
          "yaw": 3.0410526173012133,
          "pitch": -0.2078778240430026,
          "title": "Sonderbar<br>",
          "text": "Die Türe war doch gerade noch offen...<br>"
        }
      ]
    },
    {
      "id": "9-werkstatt-2024",
      "name": "Werkstatt 2024",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9314680788411742,
          "pitch": 0.1680348163820078,
          "rotation": 0.7853981633974483,
          "target": "8-flur-keller-2024"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.1609339984157998,
          "pitch": -0.1239396405249309,
          "title": "Voll<br>",
          "text": "Der Raum ist bereits gut gefüllt.<br>Hier muss jedoch noch die Photovoltaik Geräte untergebracht werden... Das wird eng!<br>"
        },
        {
          "yaw": 2.986583523047921,
          "pitch": 0.04412029304091192,
          "title": "Dunkel",
          "text": "Durch den großen Schrank, kommt kaum noch Licht in den vorderen Bereich. Daher wurde eine not Beleuchtung vorübergehend hier angebracht. Die neue Lampe für die Decke liegt schon bereit.<br>"
        }
      ]
    },
    {
      "id": "10-hobbyraum-2024",
      "name": "Hobbyraum 2024",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": -3.1298475215109534,
        "pitch": -0.07784853673689796,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": -0.0872363629309163,
          "pitch": 0.038815961052430126,
          "rotation": 0,
          "target": "8-flur-keller-2024"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.5472373611856662,
          "pitch": -0.37794962815448585,
          "title": "Heimkino",
          "text": "Hier ist die ausziehbare Leinwand fürs Heimkino<br>"
        },
        {
          "yaw": 1.5119797652171147,
          "pitch": -0.2861199065877429,
          "title": "12.000 Teile<br>",
          "text": "Das unfassbare Mammutprojekt.<br>12.000 Teile Puzzle von New York!<br>"
        },
        {
          "yaw": -1.5128039881091784,
          "pitch": -0.313389139990754,
          "title": "Über New York<br>",
          "text": "Hier geht es weiter durch New York<br>"
        }
      ]
    },
    {
      "id": "11-flur-erdgeschoss",
      "name": "Flur Erdgeschoss",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4653688063474455,
          "pitch": 0.193798868044329,
          "rotation": 5.497787143782138,
          "target": "3-flur-erdgeschoss-eingang"
        },
        {
          "yaw": 1.2307156419331005,
          "pitch": 0.3215227893278687,
          "rotation": 0.7853981633974483,
          "target": "12-hauswirtschaftsraum"
        },
        {
          "yaw": 2.500854720145849,
          "pitch": 0.27213531062853846,
          "rotation": 0.7853981633974483,
          "target": "13-wohnzimmer"
        },
        {
          "yaw": -1.7621683339109993,
          "pitch": 0.25952270515291076,
          "rotation": 0,
          "target": "14-arbeitszimmer"
        },
        {
          "yaw": -0.2939810728899346,
          "pitch": -0.571949392020958,
          "rotation": 0.7853981633974483,
          "target": "15-flur-obergeschoss-fenster"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-hauswirtschaftsraum",
      "name": "Hauswirtschaftsraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6366129446853392,
          "pitch": 0.20692708383759673,
          "rotation": 0,
          "target": "11-flur-erdgeschoss"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.08858379930170202,
          "pitch": 0.4583532345846457,
          "title": "Entkalkungsanlage",
          "text": "Wegen des sehr hohen Kalkanteils im Leitungswasser mussten wir uns eine Entkalkungsanlage anschaffen.<br>"
        },
        {
          "yaw": 0.7574541084626887,
          "pitch": -0.34874400922742055,
          "title": "Heizung / Wärmepumpe<br>",
          "text": "Die Wärmepumpe ist leider im Winter nicht so effizient, heizt aber trotzdem zuverlässig.<br>"
        },
        {
          "yaw": -2.8636048232452644,
          "pitch": -0.09900932671738971,
          "title": "Lüftung",
          "text": "Alle Räume haben entweder eine Zu- oder Abluft (Außnahme die Flure)<br>"
        }
      ]
    },
    {
      "id": "13-wohnzimmer",
      "name": "Wohnzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.4860070686322615,
        "pitch": 0.09979537374961822,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": 0.2645604145983036,
          "pitch": 0.14052662441017283,
          "rotation": 0,
          "target": "11-flur-erdgeschoss"
        },
        {
          "yaw": 2.355975458673253,
          "pitch": 0.09885669152862953,
          "rotation": 0.7853981633974483,
          "target": "1-hochbeet-garten"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-arbeitszimmer",
      "name": "Arbeitszimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5989982277173684,
          "pitch": 0.22573286390825764,
          "rotation": 0,
          "target": "11-flur-erdgeschoss"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-flur-obergeschoss-fenster",
      "name": "Flur Obergeschoss Fenster",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 0.25948577513053195,
        "pitch": 0.06283412421275614,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": 1.6083687916416771,
          "pitch": 0.621726187713648,
          "rotation": 3.9269908169872414,
          "target": "11-flur-erdgeschoss"
        },
        {
          "yaw": 0.050789781677059054,
          "pitch": 0.2344635243707156,
          "rotation": 0,
          "target": "16-flur-obergeschoss"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-flur-obergeschoss",
      "name": "Flur Obergeschoss",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 0.38397243543875703,
        "pitch": 0.014790524755857959,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": 0.16286752113480318,
          "pitch": 0.2073318184385755,
          "rotation": 0,
          "target": "15-flur-obergeschoss-fenster"
        },
        {
          "yaw": -2.074161098394775,
          "pitch": 0.19250339129478533,
          "rotation": 5.497787143782138,
          "target": "20-schlafzimmer"
        },
        {
          "yaw": 1.1083696806698278,
          "pitch": 0.23137196219694545,
          "rotation": 0.7853981633974483,
          "target": "17-gstezimmer"
        },
        {
          "yaw": -1.542914256057264,
          "pitch": -1.130407861050486,
          "rotation": 0,
          "target": "22-dachboden"
        },
        {
          "yaw": 2.6869754701527535,
          "pitch": 0.2560396272443217,
          "rotation": 0.7853981633974483,
          "target": "18-bad-licht"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6661549375443538,
          "pitch": -0.24125563910465253,
          "title": "Bildwand<br>",
          "text": "Hier fehlen noch viele Portraits.<br>Schickt uns Bilder von euch!<br>"
        },
        {
          "yaw": -1.6424995694464055,
          "pitch": -0.6228961748083108,
          "title": "Oben<br>",
          "text": "Schaut mal nach Oben!<br>"
        }
      ]
    },
    {
      "id": "17-gstezimmer",
      "name": "Gästezimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5020351416275162,
          "pitch": 0.1711683367061454,
          "rotation": 0,
          "target": "16-flur-obergeschoss"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-bad-licht",
      "name": "Bad (Licht)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.6025465558792966,
        "pitch": 0.07761862402749387,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": 1.5260817149425518,
          "pitch": 0.02996305224362672,
          "rotation": 3.141592653589793,
          "target": "19-bad-wow"
        },
        {
          "yaw": 1.3126893375588047,
          "pitch": 0.06187436175523686,
          "rotation": 0,
          "target": "16-flur-obergeschoss"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.645203327789324,
          "pitch": -0.04523600257094529,
          "title": "Lichtschalter",
          "text": "Noch mehr WOW zum Universum!<br>"
        }
      ]
    },
    {
      "id": "19-bad-wow",
      "name": "Bad (WOW)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.5924185439845724,
        "pitch": 0.027212357472652826,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": 1.475640041705046,
          "pitch": 0.027778338276659653,
          "rotation": 3.141592653589793,
          "target": "18-bad-licht"
        },
        {
          "yaw": 1.317094514744145,
          "pitch": 0.028832704579940582,
          "rotation": 0,
          "target": "16-flur-obergeschoss"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-schlafzimmer",
      "name": "Schlafzimmer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "yaw": 0.768590369163487,
        "pitch": 0.1856424278568376,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": 1.6758212379068613,
          "pitch": 0.06902329665410889,
          "rotation": 0,
          "target": "16-flur-obergeschoss"
        },
        {
          "yaw": 1.281796092505207,
          "pitch": 0.027293689922974096,
          "rotation": 0.7853981633974483,
          "target": "21-ankleide"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-ankleide",
      "name": "Ankleide",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 2.684649544991805,
        "pitch": -0.011560052007730803,
        "fov": 1.395287170018175
      },
      "linkHotspots": [
        {
          "yaw": -0.05359718298075222,
          "pitch": 0.11389596595457796,
          "rotation": 0,
          "target": "20-schlafzimmer"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.08171323176004819,
          "pitch": -0.11255134292263946,
          "title": "Schiebetür",
          "text": "Da hat jemand hinter euch die Glassschiebetür zu gemacht! ;)<br>"
        }
      ]
    },
    {
      "id": "22-dachboden",
      "name": "Dachboden",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 896,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.08530210779080782,
          "pitch": 1.167210286483746,
          "rotation": 0,
          "target": "16-flur-obergeschoss"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.562234126854058,
          "pitch": 0.2945641021696819,
          "title": "Dachziegel",
          "text": "Das Lager unserer Ersatzdachziegel<br>"
        },
        {
          "yaw": 1.1837651131955997,
          "pitch": 0.5033884389283365,
          "title": "Vinylplatten",
          "text": "Lager der Vinylplatten<br>"
        },
        {
          "yaw": -1.8346301250037857,
          "pitch": 0.3658473141404759,
          "title": "Badfließen und Satkabel<br>",
          "text": "Hier liegen die Reste der Badfließen und das Kabel von der Satschüssel sowie LTE-Antenne.<br>"
        },
        {
          "yaw": -0.8563626788487788,
          "pitch": 0.27369477364292116,
          "title": "Lankabel mit Buchse<br>",
          "text": "Als wir noch Internet über die LTE-Antenne bekamen, wurde über diese LAN-Buchse das Haus versorgt.<br>"
        },
        {
          "yaw": -0.4489472642750698,
          "pitch": 0.1331197663737278,
          "title": "Stromkabel für PV-Anlage<br>",
          "text": "Hier kommt das Kabel raus für die PV-Anlage. Das andere Ende ist im Keller am Stromkasten.<br>"
        },
        {
          "yaw": 0.26438164410472,
          "pitch": 0.49656089488173905,
          "title": "Stromanschluss",
          "text": "Das Stromkabel mit angeschlossener Steckdose.<br>"
        }
      ]
    }
  ],
  "name": "Home Sweet Home",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
