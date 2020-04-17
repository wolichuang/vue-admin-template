import { getUserListPage, getUsersListAll, removeUser, getUserList, editUser, addUser, batchRemoveUser } from '../../api/api';
import * as types from '../mutation-types';

// TODO: Should not deal with view state in Vuex;
// import { Message } from 'element-ui';

// This is just as an Vuex example;
const state = {
	userObj: {
		users: [],
		total: 0,
	},
	listLoading: false,
	editLoading: false,
	addLoading: false,
};

const getters = {
	users: state => state.userObj.users,
	total: state => state.userObj.total,
	listLoading: state => state.listLoading,
	editLoading: state => state.editLoading,
	addLoading: state => state.addLoading,
};


const actions = {
	getUsers({ commit, state }, para) {
		state.listLoading = true;
		getUserListPage(para).then((value) => {
			commit(types.GET_USERS, { value });
			state.listLoading = false;
		});
	},
	removeUser({ dispatch, commit, state }, para) {
		state.listLoading = true;
		return removeUser({ id: para.id }).then((value) => {
			// commit(types.REMOVE_USER, {value});
			// dispatch('removeUserSuccess');
			console.log('success');
			dispatch('getUsersAll');
		}, (res) => {
			console.log('failure');
			return Promise.reject(res);
		});
	},
	getUser({ commit, state }, para) {
		state.listLoading = true;
		getUserList(para).then((value) => {
			commit(types.GET_USERS, { value });
			state.listLoading = false;
		});
	},
	getUsersAll({ commit, state }) {
		state.listLoading = true;
		getUsersListAll().then((value) => {
			commit(types.GET_USERS_ALL, { value });
			state.listLoading = false;
		});
	},
	editUser({ dispatch, commit, state }, para) {
		state.editLoading = true;
		editUser(para).then((value) => {
			dispatch('editUserSuccess');
			dispatch('getUsersAll');
			state.editLoading = false;
		});
	},
	addUser({ dispatch, commit, state }, para) {
		state.addLoading = true;
		addUser(para).then((value) => {
			dispatch('addUserSuccess');
			dispatch('getUsersAll');
			state.addLoading = false;
		});
	},
	batchRemoveUser({ dispatch, commit, state }, para) {
		state.listLoading = true;
		batchRemoveUser(para).then((value) => {
			dispatch('removeUserSuccess');
			dispatch('getUsersAll');
			state.listLoading = false;
		});
	},
};

const mutations = {
	[types.GET_USERS](state, { value }) {
		state.userObj = value.data;
	},
	[types.GET_USERS_ALL](state, { value }) {
		state.userObj = value.data;
	},
	[types.REMOVE_USER](state, { value }) {
		// state.userObj = value.data;
	},

};

export default {
	state,
	getters,
	actions,
	mutations,
};
