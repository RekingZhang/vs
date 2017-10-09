import 'es6-promise/auto';
import Vue from 'vue';
import Router from 'vue-router';
import Index from '../views';
import Alert from '../views/alert';
import Confirm from '../views/confirm';
import Loading from '../views/loading';
import Toast from '../views/toast';
import Tab from '../views/tab';

Vue.use(Router);

export default new Router({
	routes: [{
		path: '/',
		name: 'index',
		component: Index
	}, {
		path: '/alert',
		name: 'alert',
		component: Alert
	}, {
		path: '/confirm',
		name: 'confirm',
		component: Confirm
	}, {
		path: '/loading',
		name: 'loading',
		component: Loading
	}, {
		path: '/toast',
		name: 'toast',
		component: Toast
	}, {
		path: '/tab',
		name: 'tab',
		component: Tab
	}]
});
