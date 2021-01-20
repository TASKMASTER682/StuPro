import fetch from 'isomorphic-fetch';
import { API } from '../config';
import queryString from 'query-string';
import { isAuth ,handleResponse } from './auth';


export const createPvtJob = async (privateJob, token) => {
    
    return await fetch(`${API}/privateJob`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: privateJob
    })
        .then(response => {
            handleResponse(response);
            return response.json();
        })
        .catch(err => console.log(err));
};

export const listPvtJobsWithCategoriesAndTags =async (skip,limit) => {
    const data = {
        limit,
        skip
    };
    return await fetch(`${API}/privateJobs-categories-tags`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const singlePvtJob = async (slug) => {
    return await fetch(`${API}/privateJob/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const listRelatedPvt = async (privateJob) => {
    return  fetch(`${API}/privateJobs/related`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(privateJob)
    })
        .then(response => {
            return response.json();  
        })
        .catch(err => console.log(err));
};

export const listPvt =async () => {
  

    return await fetch(`${API}/privateJobs`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
export const listPvtHome =async () => {
  

    return await fetch(`${API}/privateJobsHome`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const removePvtJob= async (slug, token) => {
    

    return await fetch( `${API}/privateJob/${slug}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            handleResponse(response);
            return response.json();
        })
        .catch(err => console.log(err));
};


export const updatePvtJob = async (privateJob, token, slug) => {
    


    return await fetch(`${API}/privateJob/${slug}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: privateJob
    })
        .then(response => {
            handleResponse(response);
            return response.json();
        })
        .catch(err => console.log(err));
};

export const listSearchPvt =async (params) => {
    console.log('search params', params);
    let query = queryString.stringify(params);
    console.log('query params', query);
    return await fetch(`${API}/privateJobs/search?${query}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

