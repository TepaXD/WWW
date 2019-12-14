import axios from 'axios';

const instance = axios.create({
	//baseURL: 'http://localhost:9000/',
	baseURL: 'http://avoback-avocado.rahtiapp.fi',
});

export default instance;
