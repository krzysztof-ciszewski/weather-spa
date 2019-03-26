import BackendApiClient from '../api/BackendApiClient';

export default (apiUrl, requestBodyFactory) => {
    return new BackendApiClient(apiUrl, requestBodyFactory);
}
