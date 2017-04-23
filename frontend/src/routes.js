import {About} from './components/pages/About';
import {Form} from './components/pages/Form';
import {navigateTo, goBack} from 'framework7-redux'
import {store} from './store';

export const routes = [{
    path: '/about/',
    component: About
}, {
    path: '/form/',
    component: Form
}];

//Go to page 1
store.dispatch(navigateTo('/form/'));

//Go to page 1
store.dispatch(navigateTo('/about/'));

//Go back to the home page
store.dispatch(goBack());