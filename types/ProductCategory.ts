export type ProductCategory = {
	id: number;
	name: string;
	subcategories: {id:number; name: string}[]
};
