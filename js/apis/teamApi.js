import defaultApi from './defaultApi.js';

export default {
	findAllTeam: async function () {
		return await defaultApi.get({path: '/api/teams'});
	},

	findTeam: async function (teamId) {
		return await defaultApi.get({path: `/api/teams/${teamId}`});
	},

	saveTeam: async function (teamName) {
		return await defaultApi.post({
			path: '/api/teams',
			data: {
				name: teamName,
			},
		});
	},

	deleteTeam: async function (teamId) {
		return await defaultApi.delete({
			path: `/api/teams/${teamId}`,
		});
	},

	saveUser: function ({teamId, userName}) {
		return defaultApi.post({path: `/api/teams/${teamId}/members`, data: {name: userName}});
	},
};