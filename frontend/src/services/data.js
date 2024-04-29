import data from "../../data.json";

export const fetchData = () => {
    return data;
};  

export const fetchDataById = (id) =>{  
    return data.find((d) => d.id === parseInt(id)); ;
};