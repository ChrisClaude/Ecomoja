import { Bike } from '@/types/AppTypes';
import { bikes } from '../MockData';

export const getBike = (id: number) => {
	const result = bikes.filter((b) => b.id === id);
	return result.length > 0 ? result[0] : null;
};

export const addBike = (bike: Bike) => {
	// TODO: Add bike to user cart on server
	// TODO: Persist cart on cookies or local storage if user not logged in
	console.warn(`Added bike`);
	console.log(bike);
};

export const getBikes = () => bikes;
