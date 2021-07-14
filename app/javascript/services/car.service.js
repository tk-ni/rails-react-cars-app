import axios from 'axios'
import { URL } from './../packs/environments'

export const getCars = async () => {
    let res = await axios.get(URL.API.CARS.GET.getCars());
    if(res.status !== 200){
        return false;
    }

    if(!res.data.data){
        return false;
    }
    
    let cars = [];
    for( const [key,value] of Object.entries(res.data.data)){
        let obj = {...value};
        cars.push(obj);
    }

    return cars;
}