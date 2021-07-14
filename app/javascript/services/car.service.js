import axios from 'axios'
import { URL } from './../packs/environments'

export const getCars = async () => {
    let res = await axios.get(URL.API.CARS.GET.getCars());
    if (res.status !== 200) {
        return false;
    }

    if (!res.data?.data) {
        return false;
    }

    let cars = [];
    for (const [key, value] of Object.entries(res.data.data)) {
        let obj = { ...value };
        cars.push(obj);
    }

    return cars;
}

export const getCarById = async (car_id) => {
    let res = await axios.get(URL.API.CARS.GET.getCarById(car_id));
    if (res.status !== 200) {
        return false;
    }

    if (!res.data?.data) {
        return false;
    }

    let car = { ...res.data.data };

    return car;
}

export const getCarDrivers = async (car_id) => {
    let res = await axios.get(URL.API.CARS.GET.getCarDrivers(car_id));

    if (res.status !== 200) {
        return false;
    }

    if (!res.data) {
        return false;
    }


    let drivers = [];
    for (const [key, value] of Object.entries(res.data)) {
        let obj = { ...value };
        drivers.push(obj);
    }

    return drivers;

}