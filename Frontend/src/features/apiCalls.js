import axios from 'axios';

export const getUserStoryById = async(id) =>{
    try{
        console.log(id);
        const response = await axios.get(`http://localhost:4000/userStory/${id}`);
        return response.data;
    }catch(e){
        console.log(e);
        return {error:e};
    }
};

export const addUserStory = async (userStory) =>{
    try{
        const response = await axios.post('http://localhost:4000/newUserStory/', userStory);
        return response.data;
    }catch(e){
        console.log(e);
        return {error:e};
    }
}
