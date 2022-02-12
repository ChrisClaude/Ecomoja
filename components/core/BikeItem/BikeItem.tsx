import * as React from 'react';
import { Bike } from '@/types/AppTypes';

type BikeProps = { item: Bike };

const BikeItem = ({ item }: BikeProps) => <>{item.name}</>;

export default BikeItem;
