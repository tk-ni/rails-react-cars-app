import axios from 'axios'
import { URL } from './../packs/environments'

export const getDrivers = async () => {
    let res = await axios.get(URL.API.DRIVERS.GET.getDrivers());
    if (res.status !== 200) {
        return false;
    }

    if (!res.data?.data) {
        return false;
    }

    let drivers = [];
    for (const [key, value] of Object.entries(res.data.data)) {
        let obj = { ...value };
        drivers.push(obj);
    }

    return drivers;
}

export const getDriverById = async (driver_id) => {
    let res = await axios.get(URL.API.DRIVERS.GET.getDriverById(driver_id));
    if (res.status !== 200) {
        return false;
    }

    if (!res.data?.data) {
        return false;
    }

    let driver = { ...res.data.data };

    return driver;
}

export const getDriverCars = async (driver_id) => {
    let res = await axios.get(URL.API.DRIVERS.GET.getDriverCars(driver_id));

    if (res.status !== 200) {
        return false;
    }

    if (!res.data) {
        return false;
    }


    let cars = [];
    for (const [key, value] of Object.entries(res.data)) {
        let obj = { ...value };
        cars.push(obj);
    }

    return cars;

}

export const addDriver = async ({ name, email }) => {
    const csrf = document.querySelector('[name=csrf-token]').content;
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrf;
    let res = await axios.post(URL.API.DRIVERS.POST.addDriver(), { driver: { name: name, email: email } });
    if (res.status !== 200) {
        return false;
    }
    return true;
}

export const getDriverAndCarsByName = async (driver_name) =>{
    let res = await axios.get(URL.API.DRIVERS.GET.getDriverAndCarsByName(driver_name));
    if(res.status !== 200){
        return false;
    }

    if(!res.data){
        return false;
    }

    let driverAndCars = {...res.data};
    return driverAndCars;
}