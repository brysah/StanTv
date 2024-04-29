import data from "../../data.json";

export const fetchData = () => {
    return data;
};  

export const fetchDataById = (id) =>{  
    return data.find((d) => d.id === parseInt(id)); ;
};

export const fetchDataByType = (type) =>{  
    return data.filter((d) => d.type === type); 
};
