import {About} from './components/pages/About';
import {Form} from './components/pages/Form';
import {Termine} from './components/pages/Termine';
import {Configurare} from './components/pages/Configurare';
import {TerminForm} from './components/pages/TerminForm';

export const routes = [{
    path: '/about/',
    component: About
}, {
    path: '/form/',
    component: Form
}, {
    path: '/termine/',
    component: Termine
}, {
    path: '/configurare/',
    component: Configurare
}, {
    path: '/termin_form/',
    component: TerminForm
}, {
    path: '/edit_termin/:list_idx/:value',
    component: TerminForm    
}, {
    path: '/termine/:list_idx/:value',
    component: Termine
}];