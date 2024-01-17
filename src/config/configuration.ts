/* istanbul ignore file */

const DEFAULT_UNIVERSITIES_BASE_URL = 'http://universities.hipolabs.com';

export default () => ({
	universities: {
		baseUrl: process.env.UNIVERSITIES_BASE_URL || DEFAULT_UNIVERSITIES_BASE_URL,
	},
});
