import React, {Component} from 'react';
import {Page, Navbar, ContentBlockTitle, List, ListItem, FormLabel, FormInput, Button, GridCol, GridRow, ContentBlock, ButtonsSegmented} from 'framework7-react';

import {TerminListe} from '../termin_components/TerminListe';

const onChangeHandler = (event) => {
    console.log('change');
};

const pStyle = {margin: '1em 0'};

var STRUCTURED_TERMINE = [
  {"year":2017,
   "months":[
       {"month":"MAI",
        "days":[
           {"day":2,
            "termine":[
               {"id":23325,
                 "time":"17:30",
                 "pacient":{"id":12,"gender":"F","person_name":{"prefix":"Doamna", "name":"Aurelia", "family_name":"Moraru"}},
                 "treatment":"extractie premolar 1 si 2"
               },
               {"id":23326,
                "time":"18:30",
                "pacient":{"id":7,"gender":"M","person_name":{"prefix":"", "name":"Stefan", "family_name":"Postilion"}},
                "treatment":"Caries massea"
               },
               {"id":23327,
                "time":"20:10",
                "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                "treatment":"Punte fata"
               },
               {"id":23327,
                    "time":"20:10",
                    "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                    "treatment":"Punte fata"
               },
               {"id":23327,
                "time":"20:10",
                "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                "treatment":"Punte fata"
               },
               {"id":23327,
                "time":"20:10",
                "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                "treatment":"Punte fata"
               }]
           },
           {"day":3,
            "termine":[
               {"id":23345,
                "time":"08:30",
                "pacient":{"id":12,"gender":"F","person_name":{"prefix":"Doamna", "name":"Aurelia", "family_name":"Moraru"}},
                "treatment":"extractie premolar 1 si 2"
               },
               {"id":23346,
                "time":"07:30",
                "pacient":{"id":7,"gender":"M","person_name":{"prefix":"", "name":"Stefan", "family_name":"Postilion"}},
                "treatment":"Caries massea"
               },
               {"id":23347,
                "time":"12:10",
                "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                "treatment":"Punte fata"
               }]
           },
           {"day":4,
            "termine":[
               {"id":23345,
                "time":"08:30",
                "pacient":{"id":12,"gender":"F","person_name":{"prefix":"Doamna", "name":"Aurelia", "family_name":"Moraru"}},
                "treatment":"extractie premolar 1 si 2"
               },
               {"id":23346,
                "time":"07:30",
                "pacient":{"id":7,"gender":"M","person_name":{"prefix":"", "name":"Stefan", "family_name":"Postilion"}},
                "treatment":"Caries massea"
               },
               {"id":23347,
                "time":"12:10",
                "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                "treatment":"Punte fata"
               }]
           },
           {"day":5,
            "termine":[
               {"id":23345,
                "time":"08:30",
                "pacient":{"id":12,"gender":"F","person_name":{"prefix":"Doamna", "name":"Aurelia", "family_name":"Moraru"}},
                "treatment":"extractie premolar 1 si 2"
               },
               {"id":23346,
                "time":"07:30",
                "pacient":{"id":7,"gender":"M","person_name":{"prefix":"", "name":"Stefan", "family_name":"Postilion"}},
                "treatment":"Caries massea"
               },
               {"id":23347,
                "time":"12:10",
                "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                "treatment":"Punte fata"
               }]
           },
           {"day":7,
            "termine":[
               {"id":23345,
                "time":"08:30",
                "pacient":{"id":12,"gender":"F","person_name":{"prefix":"Doamna", "name":"Aurelia", "family_name":"Moraru"}},
                "treatment":"extractie premolar 1 si 2"
               },
               {"id":23346,
                "time":"07:30",
                "pacient":{"id":7,"gender":"M","person_name":{"prefix":"", "name":"Stefan", "family_name":"Postilion"}},
                "treatment":"Caries massea"
               },
               {"id":23347,
                "time":"12:10",
                "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                "treatment":"Punte fata"
               }]
           },
           {"day":8,
            "termine":[
               {"id":23345,
                "time":"08:30",
                "pacient":{"id":12,"gender":"F","person_name":{"prefix":"Doamna", "name":"Aurelia", "family_name":"Moraru"}},
                "treatment":"extractie premolar 1 si 2"
               },
               {"id":23346,
                "time":"07:30",
                "pacient":{"id":7,"gender":"M","person_name":{"prefix":"", "name":"Stefan", "family_name":"Postilion"}},
                "treatment":"Caries massea"
               },
               {"id":23347,
                "time":"12:10",
                "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                "treatment":"Punte fata"
               }]
           },
           {"day":9,
            "termine":[
               {"id":23345,
                "time":"08:30",
                "pacient":{"id":12,"gender":"F","person_name":{"prefix":"Doamna", "name":"Aurelia", "family_name":"Moraru"}},
                "treatment":"extractie premolar 1 si 2"
               },
               {"id":23346,
                "time":"07:30",
                "pacient":{"id":7,"gender":"M","person_name":{"prefix":"", "name":"Stefan", "family_name":"Postilion"}},
                "treatment":"Caries massea"
               },
               {"id":23347,
                "time":"12:10",
                "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                "treatment":"Punte fata"
               }]
           },
           {"day":10,
            "termine":[
               {"id":23345,
                "time":"08:30",
                "pacient":{"id":12,"gender":"F","person_name":{"prefix":"Doamna", "name":"Aurelia", "family_name":"Moraru"}},
                "treatment":"extractie premolar 1 si 2"
               },
               {"id":23346,
                "time":"07:30",
                "pacient":{"id":7,"gender":"M","person_name":{"prefix":"", "name":"Stefan", "family_name":"Postilion"}},
                "treatment":"Caries massea"
               },
               {"id":23347,
                "time":"12:10",
                "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                "treatment":"Punte fata"
               }]
           },
           {"day":11,
            "termine":[
               {"id":23345,
                "time":"08:30",
                "pacient":{"id":12,"gender":"F","person_name":{"prefix":"Doamna", "name":"Aurelia", "family_name":"Moraru"}},
                "treatment":"extractie premolar 1 si 2"
               },
               {"id":23346,
                "time":"07:30",
                "pacient":{"id":7,"gender":"M","person_name":{"prefix":"", "name":"Stefan", "family_name":"Postilion"}},
                "treatment":"Caries massea"
               },
               {"id":23347,
                "time":"12:10",
                "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                "treatment":"Punte fata"
               }]
           },
           {"day":14,
            "termine":[
               {"id":23345,
                "time":"08:30",
                "pacient":{"id":12,"gender":"F","person_name":{"prefix":"Doamna", "name":"Aurelia", "family_name":"Moraru"}},
                "treatment":"extractie premolar 1 si 2"
               },
               {"id":23346,
                "time":"07:30",
                "pacient":{"id":7,"gender":"M","person_name":{"prefix":"", "name":"Stefan", "family_name":"Postilion"}},
                "treatment":"Caries massea"
               },
               {"id":23347,
                "time":"12:10",
                "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                "treatment":"Punte fata"
               }]
           },
           {"day":15,
            "termine":[
               {"id":23345,
                "time":"08:30",
                "pacient":{"id":12,"gender":"F","person_name":{"prefix":"Doamna", "name":"Aurelia", "family_name":"Moraru"}},
                "treatment":"extractie premolar 1 si 2"
               },
               {"id":23346,
                "time":"07:30",
                "pacient":{"id":7,"gender":"M","person_name":{"prefix":"", "name":"Stefan", "family_name":"Postilion"}},
                "treatment":"Caries massea"
               },
               {"id":23347,
                "time":"12:10",
                "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                "treatment":"Punte fata"
               }]
           },
           {"day":16,
            "termine":[
               {"id":23345,
                "time":"08:30",
                "pacient":{"id":12,"gender":"F","person_name":{"prefix":"Doamna", "name":"Aurelia", "family_name":"Moraru"}},
                "treatment":"extractie premolar 1 si 2"
               },
               {"id":23346,
                "time":"07:30",
                "pacient":{"id":7,"gender":"M","person_name":{"prefix":"", "name":"Stefan", "family_name":"Postilion"}},
                "treatment":"Caries massea"
               },
               {"id":23347,
                "time":"12:10",
                "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                "treatment":"Punte fata"
               }]
           },
           {"day":17,
            "termine":[
               {"id":23345,
                "time":"08:30",
                "pacient":{"id":12,"gender":"F","person_name":{"prefix":"Doamna", "name":"Aurelia", "family_name":"Moraru"}},
                "treatment":"extractie premolar 1 si 2"
               },
               {"id":23346,
                "time":"07:30",
                "pacient":{"id":7,"gender":"M","person_name":{"prefix":"", "name":"Stefan", "family_name":"Postilion"}},
                "treatment":"Caries massea"
               },
               {"id":23347,
                "time":"12:10",
                "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                "treatment":"Punte fata"
               }]
           },
           {"day":18,
            "termine":[
               {"id":23345,
                "time":"08:30",
                "pacient":{"id":12,"gender":"F","person_name":{"prefix":"Doamna", "name":"Aurelia", "family_name":"Moraru"}},
                "treatment":"extractie premolar 1 si 2"
               },
               {"id":23346,
                "time":"07:30",
                "pacient":{"id":7,"gender":"M","person_name":{"prefix":"", "name":"Stefan", "family_name":"Postilion"}},
                "treatment":"Caries massea"
               },
               {"id":23347,
                "time":"12:10",
                "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                "treatment":"Punte fata"
               }]
           }]
       },
       {"month":"APRILIE",
        "days":[
           {"day":12,
            "termine":[
               {"id":23325,
                     "time":"17:30",
                     "pacient":{"id":12,"gender":"F","person_name":{"prefix":"Doamna", "name":"Aurelia", "family_name":"Moraru"}},
                     "treatment":"extractie premolar 1 si 2"
                   },
                   {"id":23326,
                    "time":"18:30",
                    "pacient":{"id":7,"gender":"M","person_name":{"prefix":"", "name":"Stefan", "family_name":"Postilion"}},
                    "treatment":"Caries massea"
                   },
                   {"id":23327,
                    "time":"20:10",
                    "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                    "treatment":"Punte fata"
                   }]
           },
           {"day":13,
            "termine":[
               {"id":23345,
                    "time":"08:30",
                    "pacient":{"id":12,"gender":"F","person_name":{"prefix":"Doamna", "name":"Aurelia", "family_name":"Moraru"}},
                    "treatment":"extractie premolar 1 si 2"
                   },
                   {"id":23346,
                    "time":"07:30",
                    "pacient":{"id":7,"gender":"M","person_name":{"prefix":"", "name":"Stefan", "family_name":"Postilion"}},
                    "treatment":"Caries massea"
                   },
                   {"id":23347,
                    "time":"12:10",
                    "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                    "treatment":"Punte fata"
                   }]
           }]
       }]
    },
    {"year":2018,
       "months":[
           {"month":"FEBRUARIE",
            "days":[
               {"day":10,
                "termine":[
                   {"id":23325,
                     "time":"17:30",
                     "pacient":{"id":12,"gender":"F","person_name":{"prefix":"Doamna", "name":"Aurelia", "family_name":"Moraru"}},
                     "treatment":"extractie premolar 1 si 2"
                   },
                   {"id":23326,
                    "time":"18:30",
                    "pacient":{"id":7,"gender":"M","person_name":{"prefix":"", "name":"Stefan", "family_name":"Postilion"}},
                    "treatment":"Caries massea"
                   },
                   {"id":23327,
                    "time":"20:10",
                    "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                    "treatment":"Punte fata"
                   }]
               },
               {"day":12,
                "termine":[
                   {"id":23345,
                    "time":"08:30",
                    "pacient":{"id":12,"gender":"F","person_name":{"prefix":"Doamna", "name":"Aurelia", "family_name":"Moraru"}},
                    "treatment":"extractie premolar 1 si 2"
                   },
                   {"id":23346,
                    "time":"07:30",
                    "pacient":{"id":7,"gender":"M","person_name":{"prefix":"", "name":"Stefan", "family_name":"Postilion"}},
                    "treatment":"Caries massea"
                   },
                   {"id":23347,
                    "time":"12:10",
                    "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                    "treatment":"Punte fata"
                   }]
               }]
           },
           {"month":"MARTIE",
            "days":[
               {"day":1,
                "termine":[
                   {"id":23325,
                         "time":"17:30",
                         "pacient":{"id":12,"gender":"F","person_name":{"prefix":"Doamna", "name":"Aurelia", "family_name":"Moraru"}},
                         "treatment":"extractie premolar 1 si 2"
                       },
                       {"id":23326,
                        "time":"18:30",
                        "pacient":{"id":7,"gender":"M","person_name":{"prefix":"", "name":"Stefan", "family_name":"Postilion"}},
                        "treatment":"Caries massea"
                       },
                       {"id":23327,
                        "time":"20:10",
                        "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                        "treatment":"Punte fata"
                       }]
               },
               {"day":2,
                "termine":[
                   {"id":23345,
                        "time":"08:30",
                        "pacient":{"id":12,"gender":"F","person_name":{"prefix":"Doamna", "name":"Aurelia", "family_name":"Moraru"}},
                        "treatment":"extractie premolar 1 si 2"
                       },
                       {"id":23346,
                        "time":"07:30",
                        "pacient":{"id":7,"gender":"M","person_name":{"prefix":"", "name":"Stefan", "family_name":"Postilion"}},
                        "treatment":"Caries massea"
                       },
                       {"id":23347,
                        "time":"12:10",
                        "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                        "treatment":"Punte fata"
                       }]
               }]
           }]
        }
  ];

var TERMINE_PER_DATE = [
           {"date":"2017-06-25",
            "termine":[
               {"id":23325,
                 "time":"17:30",
                 "pacient":{"id":12,"gender":"F","person_name":{"prefix":"Doamna", "name":"Aurelia", "family_name":"Moraru"}},
                 "treatment":"extractie premolar 1 si 2"
               },
               {"id":23326,
                "time":"18:30",
                "pacient":{"id":7,"gender":"M","person_name":{"prefix":"", "name":"Stefan", "family_name":"Postilion"}},
                "treatment":"Caries massea"
               },
               {"id":23327,
                "time":"20:10",
                "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                "treatment":"Punte fata"
               },
               {"id":23327,
                    "time":"20:10",
                    "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                    "treatment":"Punte fata"
               },
               {"id":23327,
                "time":"20:10",
                "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                "treatment":"Punte fata"
               },
               {"id":23327,
                "time":"20:10",
                "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                "treatment":"Punte fata"
               }]
           },
           {"day":"2017-06-26",
            "termine":[
               {"id":23345,
                "time":"08:30",
                "pacient":{"id":12,"gender":"F","person_name":{"prefix":"Doamna", "name":"Aurelia", "family_name":"Moraru"}},
                "treatment":"extractie premolar 1 si 2"
               },
               {"id":23346,
                "time":"07:30",
                "pacient":{"id":7,"gender":"M","person_name":{"prefix":"", "name":"Stefan", "family_name":"Postilion"}},
                "treatment":"Caries massea"
               },
               {"id":23347,
                "time":"12:10",
                "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                "treatment":"Punte fata"
               }]
           },
           {"day":"2017-06-27",
            "termine":[
               {"id":23345,
                "time":"08:30",
                "pacient":{"id":12,"gender":"F","person_name":{"prefix":"Doamna", "name":"Aurelia", "family_name":"Moraru"}},
                "treatment":"extractie premolar 1 si 2"
               },
               {"id":23346,
                "time":"07:30",
                "pacient":{"id":7,"gender":"M","person_name":{"prefix":"", "name":"Stefan", "family_name":"Postilion"}},
                "treatment":"Caries massea"
               },
               {"id":23347,
                "time":"12:10",
                "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                "treatment":"Punte fata"
               }]
           },
           {"day":"2017-06-28",
            "termine":[
               {"id":23345,
                "time":"08:30",
                "pacient":{"id":12,"gender":"F","person_name":{"prefix":"Doamna", "name":"Aurelia", "family_name":"Moraru"}},
                "treatment":"extractie premolar 1 si 2"
               },
               {"id":23346,
                "time":"07:30",
                "pacient":{"id":7,"gender":"M","person_name":{"prefix":"", "name":"Stefan", "family_name":"Postilion"}},
                "treatment":"Caries massea"
               },
               {"id":23347,
                "time":"12:10",
                "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                "treatment":"Punte fata"
               }]
           },
           {"day":"2017-06-29",
            "termine":[
               {"id":23345,
                "time":"08:30",
                "pacient":{"id":12,"gender":"F","person_name":{"prefix":"Doamna", "name":"Aurelia", "family_name":"Moraru"}},
                "treatment":"extractie premolar 1 si 2"
               },
               {"id":23346,
                "time":"07:30",
                "pacient":{"id":7,"gender":"M","person_name":{"prefix":"", "name":"Stefan", "family_name":"Postilion"}},
                "treatment":"Caries massea"
               },
               {"id":23347,
                "time":"12:10",
                "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                "treatment":"Punte fata"
               }]
           },
           {"day":"2017-06-30",
            "termine":[
               {"id":23345,
                "time":"08:30",
                "pacient":{"id":12,"gender":"F","person_name":{"prefix":"Doamna", "name":"Aurelia", "family_name":"Moraru"}},
                "treatment":"extractie premolar 1 si 2"
               },
               {"id":23346,
                "time":"07:30",
                "pacient":{"id":7,"gender":"M","person_name":{"prefix":"", "name":"Stefan", "family_name":"Postilion"}},
                "treatment":"Caries massea"
               },
               {"id":23347,
                "time":"12:10",
                "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                "treatment":"Punte fata"
               }]
           },
           {"day":"2017-07-01",
            "termine":[
               {"id":23345,
                "time":"08:30",
                "pacient":{"id":12,"gender":"F","person_name":{"prefix":"Doamna", "name":"Aurelia", "family_name":"Moraru"}},
                "treatment":"extractie premolar 1 si 2"
               },
               {"id":23346,
                "time":"07:30",
                "pacient":{"id":7,"gender":"M","person_name":{"prefix":"", "name":"Stefan", "family_name":"Postilion"}},
                "treatment":"Caries massea"
               },
               {"id":23347,
                "time":"12:10",
                "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                "treatment":"Punte fata"
               }]
           },
           {"day":"2017-07-02",
            "termine":[
               {"id":23345,
                "time":"08:30",
                "pacient":{"id":12,"gender":"F","person_name":{"prefix":"Doamna", "name":"Aurelia", "family_name":"Moraru"}},
                "treatment":"extractie premolar 1 si 2"
               },
               {"id":23346,
                "time":"07:30",
                "pacient":{"id":7,"gender":"M","person_name":{"prefix":"", "name":"Stefan", "family_name":"Postilion"}},
                "treatment":"Caries massea"
               },
               {"id":23347,
                "time":"12:10",
                "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                "treatment":"Punte fata"
               }]
           },
           {"day":"2017-07-03",
            "termine":[
               {"id":23345,
                "time":"08:30",
                "pacient":{"id":12,"gender":"F","person_name":{"prefix":"Doamna", "name":"Aurelia", "family_name":"Moraru"}},
                "treatment":"extractie premolar 1 si 2"
               },
               {"id":23346,
                "time":"07:30",
                "pacient":{"id":7,"gender":"M","person_name":{"prefix":"", "name":"Stefan", "family_name":"Postilion"}},
                "treatment":"Caries massea"
               },
               {"id":23347,
                "time":"12:10",
                "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                "treatment":"Punte fata"
               }]
           },
           {"day":"2017-07-04",
            "termine":[
               {"id":23345,
                "time":"08:30",
                "pacient":{"id":12,"gender":"F","person_name":{"prefix":"Doamna", "name":"Aurelia", "family_name":"Moraru"}},
                "treatment":"extractie premolar 1 si 2"
               },
               {"id":23346,
                "time":"07:30",
                "pacient":{"id":7,"gender":"M","person_name":{"prefix":"", "name":"Stefan", "family_name":"Postilion"}},
                "treatment":"Caries massea"
               },
               {"id":23347,
                "time":"12:10",
                "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                "treatment":"Punte fata"
               }]
           },
           {"day":"2017-07-05",
            "termine":[
               {"id":23345,
                "time":"08:30",
                "pacient":{"id":12,"gender":"F","person_name":{"prefix":"Doamna", "name":"Aurelia", "family_name":"Moraru"}},
                "treatment":"extractie premolar 1 si 2"
               },
               {"id":23346,
                "time":"07:30",
                "pacient":{"id":7,"gender":"M","person_name":{"prefix":"", "name":"Stefan", "family_name":"Postilion"}},
                "treatment":"Caries massea"
               },
               {"id":23347,
                "time":"12:10",
                "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                "treatment":"Punte fata"
               }]
           },
           {"day":"2017-07-06",
            "termine":[
               {"id":23345,
                "time":"08:30",
                "pacient":{"id":12,"gender":"F","person_name":{"prefix":"Doamna", "name":"Aurelia", "family_name":"Moraru"}},
                "treatment":"extractie premolar 1 si 2"
               },
               {"id":23346,
                "time":"07:30",
                "pacient":{"id":7,"gender":"M","person_name":{"prefix":"", "name":"Stefan", "family_name":"Postilion"}},
                "treatment":"Caries massea"
               },
               {"id":23347,
                "time":"12:10",
                "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                "treatment":"Punte fata"
               }]
           },
           {"day":"2017-07-07",
            "termine":[
               {"id":23345,
                "time":"08:30",
                "pacient":{"id":12,"gender":"F","person_name":{"prefix":"Doamna", "name":"Aurelia", "family_name":"Moraru"}},
                "treatment":"extractie premolar 1 si 2"
               },
               {"id":23346,
                "time":"07:30",
                "pacient":{"id":7,"gender":"M","person_name":{"prefix":"", "name":"Stefan", "family_name":"Postilion"}},
                "treatment":"Caries massea"
               },
               {"id":23347,
                "time":"12:10",
                "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                "treatment":"Punte fata"
               }]
           },
           {"day":"2017-07-08",
            "termine":[
               {"id":23345,
                "time":"08:30",
                "pacient":{"id":12,"gender":"F","person_name":{"prefix":"Doamna", "name":"Aurelia", "family_name":"Moraru"}},
                "treatment":"extractie premolar 1 si 2"
               },
               {"id":23346,
                "time":"07:30",
                "pacient":{"id":7,"gender":"M","person_name":{"prefix":"", "name":"Stefan", "family_name":"Postilion"}},
                "treatment":"Caries massea"
               },
               {"id":23347,
                "time":"12:10",
                "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
                "treatment":"Punte fata"
               }]
           }];

var TERMINE =  [
        {"id":1,
         "date":"2017-11-10",
         "month":"NOV",
         "day":"10",         
         "time":"17:30",
         "pacient":{"id":12,"gender":"F","person_name":{"prefix":"Doamna", "name":"Aurelia", "family_name":"Moraru"}},
         "treatment":"extractie premolar 1 si 2"
        },
        {"id":2,
         "date":"2017-11-10",
         "month":"NOV",
         "day":"10",         
         "time":"18:30",
         "pacient":{"id":7,"gender":"M","person_name":{"prefix":"", "name":"Stefan", "family_name":"Postilion"}},
         "treatment":"Caries massea"
        },
        {"id":3,
         "date":"2017-11-10",
         "month":"NOV",
         "day":"10",         
         "time":"20:10",
         "pacient":{"id":9,"gender":"F","person_name":{"prefix":"", "name":"Andrea", "family_name":"Salasar"}},
         "treatment":"Punte fata"
        },
        {"id":4,
         "date":"2017-11-13",
         "month":"NOV",
         "day":"13",         
         "time":"20:10",
         "pacient":{"id":78,"gender":"F","person_name":{"prefix":"", "name":"Croita", "family_name":"Moarta"}},
         "treatment":"Puroi Masea, ku mul mai mult Text deexplicatie cea fost si ar mai putea sa fie"
        }
   ];

export class Termine extends Component { 
    constructor(props, context) {
        super(props, context);

        this.state = {
            birthDate: '2014-04-30',
            radioSelected: 1,
            termine: []
        };        
    }

    onRadioChange(value) {
        this.setState({
           ...this.state,
           radioSelected: value 
        });
    }    

    render() {
        return (
            <Page>
                <Navbar backLink="Back" title="Termine" sliding />
                <TerminListe termine={TERMINE_PER_DATE}></TerminListe>
            </Page>
        ); 
    };
};
