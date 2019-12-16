import axios from 'axios';

//Change the backend address that you want to use
const instance = axios.create({
	//baseURL: 'http://localhost:9000/',
	baseURL: 'http://backend-avocado.rahtiapp.fi',
});

export default instance;
