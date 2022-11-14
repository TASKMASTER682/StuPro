import fetch from 'isomorphic-fetch';
import { API } from '../config';

export const list =async () => {
  

    return  fetch(`${API}/jobs`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const listPvt =async () => {
  

    return  fetch(`${API}/privateJobs`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
export const listBlog =async () => {
  

    return  fetch(`${API}/blogs`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
