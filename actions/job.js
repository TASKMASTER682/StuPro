import fetch from 'isomorphic-fetch';
import { API } from '../config';
import queryString from 'query-string';
import { isAuth ,handleResponse } from './auth';


export const createJob = async (job, token) => {
    
    return await fetch(`${API}/job`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: job
    })
        .then(response => {
            handleResponse(response);
            return response.json();
        })
        .catch(err => console.log(err));
};

export const listJobsWithCategoriesAndTags =async (skip,limit) => {
    const data = {
        limit,
        skip
    };
    return await fetch(`${API}/jobs-categories-tags`, {
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

export const singleJob = async (slug) => {
    return await fetch(`${API}/job/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const listRelated = async (job) => {
    return  fetch(`${API}/jobs/related`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(job)
    })
        .then(response => {
            return response.json();  
        })
        .catch(err => console.log(err));
};

export const list =async () => {
  

    return await fetch(`${API}/jobs`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const listHome =async () => {
  

    return await fetch(`${API}/jobsHome`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const removeJob= async (slug, token) => {
    

    return await fetch( `${API}/job/${slug}`, {
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


export const updateJob = async (job, token, slug) => {
    


    return await fetch(`${API}/job/${slug}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: job
    })
        .then(response => {
            handleResponse(response);
            return response.json();
        })
        .catch(err => console.log(err));
};

export const listSearch =async (params) => {
    console.log('search params', params);
    let query = queryString.stringify(params);
    console.log('query params', query);
    return await fetch(`${API}/jobs/search?${query}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


