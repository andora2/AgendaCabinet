import React, {PropTypes} from 'react';

import {
	Framework7App, Statusbar, Panel, View, Navbar, Pages, Page, ContentBlock, ContentBlockTitle, 
	List, ListItem, Views, NavLeft, Link, NavCenter, NavRight, GridRow, GridCol, Button, Popup,
	LoginScreen, LoginScreenTitle, ListButton, ListLabel, FormLabel, FormInput
} from 'framework7-react';

import {TerminListe} from './TerminListe';
import {routes} from '../routes';

const LeftPanel = (props, context) => (
	<Panel left reveal layout="dark">
		<View id="left-panel-view" navbarThrough dynamicNavbar="true">
			{context.framework7AppContext.theme.ios ? <Navbar title="Left Panel"></Navbar> : null}
			<Pages>
				<Page>
					{context.framework7AppContext.theme.material ? <Navbar title="Left Panel"></Navbar> : null}
					<ContentBlock inner>
						<p>Left panel content goes here</p>
					</ContentBlock>
					<ContentBlockTitle>Load page in panel</ContentBlockTitle>
					<List>
						<ListItem link="/about/" title="About"></ListItem>
						<ListItem link="/form/" title="Form"></ListItem>
					</List>
					<ContentBlockTitle>Load page in main view</ContentBlockTitle>
					<List>
						<ListItem link="/about/" title="About" linkView="#main-view" linkClosePanel></ListItem>
						<ListItem link="/form/" title="Form" linkView="#main-view" linkClosePanel></ListItem>
					</List>
				</Page>
			</Pages>
		</View>
	</Panel>
);

LeftPanel.contextTypes = {
	framework7AppContext: PropTypes.object
};

const RightPanel = (props, context) => (
	<Panel right cover layout="dark">
		<View id="right-panel-view" navbarThrough dynamicNavbar={true}>
			{context.framework7AppContext.theme.ios ? <Navbar title="Right Panel" sliding /> : null}
			<Pages>
				<Page>
					{context.framework7AppContext.theme.material ? <Navbar title="Right Panel" sliding /> : null}
					<ContentBlock>
						<p>Right panel content goes here</p>
					</ContentBlock>
					<ContentBlockTitle>Load page in panel</ContentBlockTitle>
					<List>
						<ListItem link="/about/" title="About"></ListItem>
						<ListItem link="/form/" title="Form"></ListItem>
					</List>
					<ContentBlockTitle>Load page in main view</ContentBlockTitle>
					<List>
						<ListItem link="/about/" title="About" linkView="#main-view" linkClosePanel></ListItem>
						<ListItem link="/form/" title="Form" linkView="#main-view" linkClosePanel></ListItem>
					</List>
				</Page>
			</Pages>
		</View>
	</Panel>
);

RightPanel.contextTypes = {
	framework7AppContext: PropTypes.object
};

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
   
const MainViews = (props, context) => {
	return (
		<Views>
			<View id="main-view" navbarThrough dynamicNavbar={true} main url="/">
				{/* Navbar */}
				{context.framework7AppContext.theme.ios ? (
					<Navbar>
						<NavLeft>
							<Link icon="icon-bars" openPanel="left" />
						</NavLeft>
						<NavCenter sliding>Framework7</NavCenter>
						<NavRight>
							<Link icon="icon-bars" openPanel="right"></Link>
						</NavRight>
					</Navbar>
				) : null}
				{/* Pages */}
				<Pages>
					<Page>
						{context.framework7AppContext.theme.material ? (
							<Navbar>
								<NavLeft>
									<Link icon="icon-bars" openPanel="left" />
								</NavLeft>
								<NavCenter sliding>Framework7</NavCenter>
								<NavRight>
									<Link icon="icon-bars" openPanel="right"></Link>
								</NavRight>
							</Navbar>
						) : null}
                        
                        <TerminListe termine={STRUCTURED_TERMINE}></TerminListe>
                    
						<ContentBlockTitle>Welcome to my App</ContentBlockTitle>
						<ContentBlock inner>
							<p>Duis sed erat ac eros ultrices pharetra id ut tellus. Praesent rhoncus enim ornare ipsum aliquet ultricies. Pellentesque sodales erat quis elementum sagittis.</p>
						</ContentBlock>
						<ContentBlockTitle>Navigation</ContentBlockTitle>
						<List>
							<ListItem link="/about/" title="About"></ListItem>
							<ListItem link="/form/" title="Form"></ListItem>							
						</List>
						<ContentBlockTitle>Side Panels</ContentBlockTitle>
						<ContentBlock>
							<GridRow>
								<GridCol width={50}>
									<Button openPanel="left">Left Panel</Button>
								</GridCol>
								<GridCol width={50}>
									<Button openPanel="right">Right Panel</Button>
								</GridCol>
							</GridRow>
						</ContentBlock>
						<ContentBlockTitle>Modals</ContentBlockTitle>
						<ContentBlock>
							<GridRow>
								<GridCol width={50}>
									<Button openPopup="#popup">Popup</Button>
								</GridCol>
								<GridCol width={50}>
									<Button openLoginScreen="#login-screen">Login Screen</Button>
								</GridCol>
							</GridRow>
						</ContentBlock>
					</Page>
				</Pages>
			</View>
		</Views>
	);
};

MainViews.contextTypes = {
	framework7AppContext: PropTypes.object
};

const AppPopup = () => (
	<Popup id="popup">
		<View navbarFixed>
			<Pages>
				<Page>
					<Navbar title="Popup">
						<NavRight>
							<Link closePopup>Close</Link>
						</NavRight>
					</Navbar>
					<ContentBlock>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</ContentBlock>
				</Page>
			</Pages>
		</View>
	</Popup> 
);

const AppLoginScreen = () => (
	<LoginScreen id="login-screen">
		<View>
			<Pages>
				<Page loginScreen>
					<LoginScreenTitle>Login</LoginScreenTitle>
					<List form>
						<ListItem>
							<FormLabel>Username</FormLabel>
							<FormInput name="username" placeholder="Username" type="text" />
						</ListItem>
						<ListItem>
							<FormLabel>Password</FormLabel>
							<FormInput name="password" type="password" placeholder="Password" />
						</ListItem>
					</List>
					<List>
						<ListButton title="Sign In" closeLoginScreen />
						<ListLabel>
							<p>Click Sign In to close Login Screen</p>
						</ListLabel>
					</List>
				</Page>
			</Pages>
		</View>
	</LoginScreen>
);

export const App = () => (	
	//Change themeType to "material" to use the Material theme
	<Framework7App themeType="ios" routes={routes}>		
		<Statusbar />		
		<LeftPanel />
		<RightPanel />
		<MainViews />
		<AppPopup />
		<AppLoginScreen />
	</Framework7App>  
);
