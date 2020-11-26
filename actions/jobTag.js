import fetch from 'isomorphic-fetch';
import { API } from '../config';
import { handleResponse } from './auth';

export const create = async (jobTag, token) => {
    return await fetch(`${API}/jobTag`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(jobTag)
    })
        .then(response => {
            handleResponse(response);
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getJobTags = async () => {
    return fetch(`${API}/jobTags`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const singleJobTag = async (slug) => {
    return await fetch(`${API}/jobTag/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const removeJobTag = async (slug, token) => {
    return await fetch(`${API}/jobTag/${slug}`, {
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