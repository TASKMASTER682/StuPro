import { API } from '../config';
import { handleResponse } from './auth';

export const createMaterial=async (material,token)=>{
    return await fetch(`${API}/materials/create`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: material
    })
        .then(response => {
            handleResponse(response);
            return response.json();
        })
        .catch(err => console.log(err));

}

export const list =async () => {
  
    return await fetch(`${API}/materials`, {
        method: 'GET',
  
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const singleMaterial = async (slug) => {
    return await fetch(`${API}/materials/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};


export const updateMaterial = async (material, token, slug) => {
    


    return await fetch(`${API}/materials/update/${slug}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: material
    })
        .then(response => {
            handleResponse(response);
            return response.json();
        })
        .catch(err => console.log(err));
};
export const removeMat= async (slug, token) => {
    
    return await fetch( `${API}/materials/delete/${slug}`, {
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

export const listRelatedMat = async (material) => {
    return  fetch(`${API}/materials/related`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(material)
    })
        .then(response => {
            return response.json();  
        })
        .catch(err => console.log(err));
};

export const listMaterialWithCategories =async () => {

    return await fetch(`${API}/materials`, {
        method: 'GET',

    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};