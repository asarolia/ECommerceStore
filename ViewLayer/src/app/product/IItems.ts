type Item = {

  name:string;
  description:string;
  price:number;
  imagelink:string;
  rating:string;
  stock:string;
  category:string;
  subcategory:string;
}

type Subcategory = {
  name:string;
  items: Item[];
}

export interface IItems{
  category:string;
  subcategories:Subcategory[];
}
