import { urls } from './api';

export const getAll = () => {
    return fetch(urls.posts)
        .then(res => res.json())
        .catch(err => console.log('Handled error: ' + err));
};