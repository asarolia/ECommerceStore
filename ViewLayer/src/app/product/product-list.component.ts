import { OnInit, Component } from '@angular/core';
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';

import {IProducts} from './IProducts';
import {IItems} from './IItems';

@Component({

  selector:'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']

})
export class ProductListComponent implements OnInit{

  contentFilter:string = "";
  faPlus = faPlus;
  faMinus = faMinus;
  collapsed:boolean = true;

  itemsDataList:IItems[] = [
    {
        "category": "Household and Beauty",
        "subcategories": [
            {
                "name": "Baby Care",
                "items": [
                    {
                        "name": "Bib",
                        "description": "Baby Bib helps with keeps baby cloth clean during meal time",
                        "price": 10.00,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/babycare-royaltyfree/babybib.png",
                        "rating": "4",
                        "stock": "30",
                        "category": "Household and Beauty",
                        "subcategory": "Baby care"
                    },
                    {
                        "name": "Blanket",
                        "description": "Baby blanket helps keep the baby warm",
                        "price": 20.00,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/babycare-royaltyfree/babyblanket.png",
                        "rating": "5",
                        "stock": "15",
                        "category": "Household and Beauty",
                        "subcategory": "Baby care"
                    },
                    {
                        "name": "Baby Bottle",
                        "description": "Baby bottle with 10 oz capacity",
                        "price": 8.00,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/babycare-royaltyfree/babyBottle.png",
                        "rating": "5",
                        "stock": "55",
                        "category": "Household and Beauty",
                        "subcategory": "Baby care"
                    },
                    {
                        "name": "Baby Girl Dress",
                        "description": "Baby Girl Dress with beautiful colors",
                        "price": 13.00,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/babycare-royaltyfree/babydress.png",
                        "rating": "5",
                        "stock": "55",
                        "category": "Household and Beauty",
                        "subcategory": "Baby care"
                    },
                    {
                        "name": "Baby Monitor",
                        "description": "Baby monitor while baby is sleeping away from mom or dad",
                        "price": 30.00,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/babycare-royaltyfree/babymonitor.png",
                        "rating": "5",
                        "stock": "40",
                        "category": "Household and Beauty",
                        "subcategory": "Baby care"
                    },
                    {
                        "name": "Baby Socks",
                        "description": "keeps baby warm, fits 0 to 12 months old",
                        "price": 2.00,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/babycare-royaltyfree/babysocks.png",
                        "rating": "3",
                        "stock": "18",
                        "category": "Household and Beauty",
                        "subcategory": "Baby care"
                    },
                    {
                        "name": "Baby Stroller",
                        "description": "Baby Stroller with  multiple seat levels",
                        "price": 69.99,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/babycare-royaltyfree/babystroller.png",
                        "rating": "4",
                        "stock": "100",
                        "category": "Household and Beauty",
                        "subcategory": "Baby care"
                    },
                    {
                        "name": "Baby Suit",
                        "description": "Baby Suite fits 3-6 months old baby boy",
                        "price": 9.99,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/babycare-royaltyfree/babysuit.png",
                        "rating": "4",
                        "stock": "70",
                        "category": "Household and Beauty",
                        "subcategory": "Baby care"
                    },
                    {
                        "name": "Baby Walker",
                        "description": "Helps babies as they start learning how to walk",
                        "price": 45.50,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/babycare-royaltyfree/babywalker.png",
                        "rating": "5",
                        "stock": "10",
                        "category": "Household and Beauty",
                        "subcategory": "Baby care"
                    }
                ]
            },
            {
                "name": "Drug Store",
                "items": [
                    {
                        "name": "Bandage",
                        "description": "Flexible Fabric, 100-Count Boxes",
                        "price": 5.00,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/drugs-royaltyfree/bandage.png",
                        "rating": "4",
                        "stock": "58",
                        "category": "Household and Beauty",
                        "subcategory": "Drug Store"
                    },
                    {
                        "name": "Severe Cold and Flu",
                        "description": "Severe Cold and Flu Medicine (4 fl. oz. Bottle)",
                        "price": 6.50,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/drugs-royaltyfree/coldandflusyrup.png",
                        "rating": "5",
                        "stock": "17",
                        "category": "Household and Beauty",
                        "subcategory": "Drug Store"
                    },
                    {
                        "name": "Extra Strength Pain Relief Caplets",
                        "description": "Excedrin Extra Strength Pain Relief Caplets 200 count For Headache Relief",
                        "price": 8.00,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/drugs-royaltyfree/painrelief.png",
                        "rating": "5",
                        "stock": "90",
                        "category": "Household and Beauty",
                        "subcategory": "Drug Store"
                    },
                    {
                        "name": "100 Piece First Aid Kit",
                        "description": "100 Piece First Aid Kit, Exceeds OSHA ANSI Standards for 10 People - Office, Home, Car, School, Emergency, Survival, Hunting, and Sports",
                        "price": 14.99,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/drugs-royaltyfree/firstaidkit.png",
                        "rating": "5",
                        "stock": "10",
                        "category": "Household and Beauty",
                        "subcategory": "Drug Store"
                    },
                   {
                        "name": "Cold Relief Caplets",
                        "description": "Tylenol Cold Multi-Symptom Relief Caplets, 24 Count",
                        "price": 6.50,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/drugs-royaltyfree/coldpills.png",
                        "rating": "2",
                        "stock": "17",
                        "category": "Household and Beauty",
                        "subcategory": "Drug Store"
                    }]
            },
            {
                "name": "Health and Personal Care",
                "items": []
            },
            {
                "name": "Household Supplies",
                "items": [{
                        "name": "Air Freshener",
                        "description": "Air Freshener, Powder Fresh, 8 oz",
                        "price": 1.25,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/house-royaltyfree/airfreshner.png",
                        "rating": "5",
                        "stock": "12",
                        "category": "Household and Beauty",
                        "subcategory": "Household Supplies"
                    },
                    {
                        "name": "All Purpose Cleaner",
                        "description": "40-oz. Summer Citrus Cleaner",
                        "price": 2.99,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/house-royaltyfree/cleaningLiquid.png",
                        "rating": "4",
                        "stock": "45",
                        "category": "Household and Beauty",
                        "subcategory": "Household Supplies"
                    },
                    {
                        "name": "Disinfecting Wipes",
                        "description": "Disinfecting Wipes Value Pack, Fresh Scent and Citrus Blend, 225 Count",
                        "price": 8.99,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/house-royaltyfree/disinfectantspray.png",
                        "rating": "5",
                        "stock": "5",
                        "category": "Household and Beauty",
                        "subcategory": "Household Supplies"
                    },
                    {
                        "name": "Reusable Latex Gloves",
                        "description": "Reusable Latex Gloves, Medium, 2 Pairs/2 Colors",
                        "price": 4.25,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/house-royaltyfree/workgloves.png",
                        "rating": "2",
                        "stock": "0",
                        "category": "Household and Beauty",
                        "subcategory": "Household Supplies"
                    },
                    {
                        "name": "Glass Cleaner",
                        "description": "Perfect Glass Cleaner, 32-Ounce",
                        "price": 7.25,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/house-royaltyfree/glasscleaner.png",
                        "rating": "4",
                        "stock": "10",
                        "category": "Household and Beauty",
                        "subcategory": "Household Supplies"
                    },
                    {
                        "name": "Toilete Paper",
                        "description": "6 2-Pack, Regular Roll Toilete Paper",
                        "price": 7.25,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/house-royaltyfree/toiletpaper.png",
                        "rating": "2",
                        "stock": "0",
                        "category": "Household and Beauty",
                        "subcategory": "Household Supplies"
                    },
                  {
                        "name": "Beauty Soap Bar",
                        "description": "Beauty Bar, White 4 oz, 14 bar",
                        "price": 17.25,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/house-royaltyfree/soap.png",
                        "rating": "2",
                        "stock": "40",
                        "category": "Household and Beauty",
                        "subcategory": "Household Supplies"
                    },
                  {
                    "name": "Laundry Detergent",
                    "description": "TLaundry Detergent 72-load Tub",
                    "price": 17.55,
                    "imagelink": "https://webmppcapstone.blob.core.windows.net/house-royaltyfree/detergent.png",
                    "rating": "4",
                    "stock": "40",
                    "category": "Household and Beauty",
                    "subcategory": "Household Supplies"
                  }
                ]
            }
        ]
    },
    {
        "category": "Pantry Items",
        "subcategories": [
            {
                "name": "Beverages",
                "items": [
                  {
                    "name": "Apple Juice",
                    "description": "Pack of 12, apple juice",
                    "price": 5.99,
                    "imagelink": "https://webmppcapstone.blob.core.windows.net/beverages-royaltyfree/applejuice.png",
                    "rating": "4",
                    "stock": "250",
                    "category": "Pantry Items",
                    "subcategory": "Beverages"
                  },

                    {
                        "name": "Banana-Orange Juice",
                        "description": "16.0 ounce bottle.",
                        "price": 1.99,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/beverages-royaltyfree/bananaorangejuice.png",
                        "rating": "4",
                        "stock": "300",
                        "category": "Pantry Items",
                        "subcategory": "Beverages"
                    },

                    {
                        "name": "Cranberry Juice",
                        "description": "32 ounce bottle.",
                        "price": 4.99,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/beverages-royaltyfree/cranberryjuice.png",
                        "rating": "4",
                        "stock": "250",
                        "category": "Pantry Items",
                        "subcategory": "Beverages"
                    },

                    {
                        "name": "Strawberry Lemonade",
                        "description": "Strawberry Lemonade, 59 oz.",
                        "price": 2.50,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/beverages-royaltyfree/strawberrylemonade.png",
                        "rating": "4",
                        "stock": "150",
                        "category": "Pantry Items",
                        "subcategory": "Beverages"
                    },

                    {
                        "name": "Super Food Green Smoothie",
                        "description": "15 oz bottle.",
                        "price": 2.99,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/beverages-royaltyfree/greensmoothiejuice.png",
                        "rating": "4",
                        "stock": "150",
                        "category": "Pantry Items",
                        "subcategory": "Beverages"
                    }
                ]
            },
            {
                "name": "Canned Food",
                "items": [
                    {
                        "name": "Pickels",
                        "description": "Assorted pickles",
                        "price": 1.99,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/canfood-royaltyfree/pickels.png",
                        "rating": "4",
                        "stock": "250",
                        "category": "Pantry Items",
                        "subcategory": "Canned Goods"
                    },
                    {
                        "name": "Tomatoe Sauce",
                        "description": "14.5 oz can",
                        "price": 1.59,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/canfood-royaltyfree/tomatoesauce.png",
                        "rating": "4",
                        "stock": "500",
                        "category": "Pantry Items",
                        "subcategory": "Canned Goods"
                    }
                ]
            },
            {
                "name": "Cooking and Baking Needs",
                "items": [
                  {
                    "name": "All Purpose Flour",
                    "description": "5 lb bag",
                    "price": 3.99,
                    "imagelink": "https://webmppcapstone.blob.core.windows.net/cookingneed-royaltyfree/allpurposeflour.png",
                    "rating": "4",
                    "stock": "350",
                    "category": "Pantry Items",
                    "subcategory": "Cooking and Baking Needs"
                  },
                  {
                        "name": "Rice Flour",
                        "description": "5 lb bag",
                        "price": 6.99,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/cookingneed-royaltyfree/riceflour.png",
                        "rating": "4",
                        "stock": "350",
                        "category": "Pantry Items",
                        "subcategory": "Cooking and Baking Needs"
                    },
                    {
                        "name": "Sugar",
                        "description": "White cane sugar, 32 oz.",
                        "price": 2.79,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/cookingneed-royaltyfree/sugar.png",
                        "rating": "4",
                        "stock": "300",
                        "category": "Pantry Items",
                        "subcategory": "Cooking and Baking Needs"
                    },
                    {
                        "name": "Coconut Oil",
                        "description": "Organic, 54 oz bottle.",
                        "price": 8.99,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/cookingneed-royaltyfree/oil.png",
                        "rating": "4",
                        "stock": "100",
                        "category": "Pantry Items",
                        "subcategory": "Cooking and Baking Needs"
                    },
                    {
                        "name": "Olive Oil",
                        "description": "Extra virgin olive oil, 17 oz bottle.",
                        "price": 4.99,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/cookingneed-royaltyfree/oliveoil.png",
                        "rating": "4",
                        "stock": "200",
                        "category": "Pantry Items",
                        "subcategory": "Cooking and Baking Needs"
                    },
                    {
                        "name": "Salt",
                        "description": "Iodized salt, 26 oz.",
                        "price": 0.99,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/cookingneed-royaltyfree/salt.png",
                        "rating": "5",
                        "stock": "400",
                        "category": "Pantry Items",
                        "subcategory": "Cooking and Baking Needs"
                    },

                    {
                        "name": "Vinegar",
                        "description": "White vinegar, plastic, 64 oz.",
                        "price": 2.79,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/cookingneed-royaltyfree/vinegar.png",
                        "rating": "4",
                        "stock": "300",
                        "category": "Pantry Items",
                        "subcategory": "Cooking and Baking Needs"
                    }
                ]
            },
            {
                "name": "Pasta and Noodles",
                "items": [
                    {
                        "name": "Penne",
                        "description": "16 oz box.",
                        "price": 1.49,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/pasta-royaltyfree/penne.png",
                        "rating": "4",
                        "stock": "300",
                        "category": "Pantry Items",
                        "subcategory": "Pasta and Noodles"
                    },
                  {
                    "name": "Spaghetti",
                    "description": "Thin spaghetti, 16 oz.",
                    "price": 1.49,
                    "imagelink": "https://webmppcapstone.blob.core.windows.net/pasta-royaltyfree/spaghetti.jpg",
                    "rating": "4",
                    "stock": "300",
                    "category": "Pantry Items",
                    "subcategory": "Pasta and Noodles"
                  },
                   {
                        "name": "Lasagne",
                        "description": "Lasagne, 16 oz.",
                        "price": 4.49,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/pasta-royaltyfree/lasagne.jpg",
                        "rating": "4",
                        "stock": "300",
                        "category": "Pantry Items",
                        "subcategory": "Pasta and Noodles"
                    },
                    {
                        "name": "Whole Grain Penne",
                        "description": "16 oz.",
                        "price": 1.49,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/pasta-royaltyfree/wholegrainpenne.png",
                        "rating": "4",
                        "stock": "300",
                        "category": "Pantry Items",
                        "subcategory": "Pasta and Noodles"
                    }
                ]
            },
            {
                "name": "Snacks",
                "items": [
                  {
                        "name": "Chocolate Cookies",
                        "description": "Golden Chocolate Cookies, 1.76 oz, 12 count.",
                        "price": 5.79,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/snacks-royaltyfree/chocolatecookies.png",
                        "rating": "5",
                        "stock": "200",
                        "category": "Pantry Items",
                        "subcategory": "Snacks"
                    },
                    {
                        "name": "Chocolate Protein Bars",
                        "description": "6 count value pack.",
                        "price": 5.79,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/snacks-royaltyfree/chocolatebar.png",
                        "rating": "5",
                        "stock": "500",
                        "category": "Pantry Items",
                        "subcategory": "Snacks"
                    },
                    {
                        "name": "Mixed Nuts",
                        "description": "Salted Mixed Nuts, 18 oz.",
                        "price": 8.79,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/snacks-royaltyfree/mixednuts.png",
                        "rating": "5",
                        "stock": "200",
                        "category": "Pantry Items",
                        "subcategory": "Snacks"
                    },

                    {
                        "name": "Jelly Beans",
                        "description": "Assorted Flavors Jelly Beans, 32 oz.",
                        "price": 4.79,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/snacks-royaltyfree/JellyBeans.png",
                        "rating": "5",
                        "stock": "500",
                        "category": "Pantry Items",
                        "subcategory": "Snacks"
                    },

                    {
                        "name": "Ginger Cookies",
                        "description": "Ginger Cookies pack, 24 count.",
                        "price": 4.79,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/snacks-royaltyfree/gingercookie.png",
                        "rating": "5",
                        "stock": "500",
                        "category": "Pantry Items",
                        "subcategory": "Snacks"
                    },

                  {
                    "name": "Nutty Cookies",
                    "description": "1 lb container.",
                    "price": 9.79,
                    "imagelink": "https://webmppcapstone.blob.core.windows.net/snacks-royaltyfree/nuttycookies.png",
                    "rating": "3",
                    "stock": "200",
                    "category": "Pantry Items",
                    "subcategory": "Snacks"
                  },
                 {
                        "name": "Popcorn",
                        "description": "Homestyle, 3 count",
                        "price": 1.99,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/snacks-royaltyfree/popcorn.png",
                        "rating": "5",
                        "stock": "500",
                        "category": "Pantry Items",
                        "subcategory": "Snacks"
                    },

                    {
                        "name": "Oat and Raisins Cookies",
                        "description": "16 oz bag.",
                        "price": 7.79,
                        "imagelink": "https://webmppcapstone.blob.core.windows.net/snacks-royaltyfree/oatmealraisincookies.png",
                        "rating": "5",
                        "stock": "500",
                        "category": "Pantry Items",
                        "subcategory": "Snacks"
                    }
                ]
            }
        ]
    }
  ];

  productList:IProducts[] = [
    {
      "productId": 1,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "../assets/leaf-rake.jpg"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "../assets/garden-cart.jpg"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2016",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "../assets/hammer.jpg"
    },
    {
      "productId": 8,
      "productName": "Saw",
      "productCode": "TBX-0022",
      "releaseDate": "May 15, 2016",
      "description": "15-inch steel blade hand saw",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "../assets/saw.jpg"
    },
    {
      "productId": 10,
      "productName": "Video Game Controller",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2015",
      "description": "Standard two-button video game controller",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "../assets/controller.jpg"
    }
  ];


  constructor(){

  }

  ngOnInit(): void {
   // throw new Error("Method not implemented.");
  }

  togglePanel(event){
    //console.log(event);
    let classValue = event.target.firstChild.parentNode.nextElementSibling.className;

    if(classValue === "hide")
    {
      event.target.firstChild.parentNode.nextElementSibling.className = "show";
      this.collapsed = false;

    }else{
      event.target.firstChild.parentNode.nextElementSibling.className = "hide";
      this.collapsed = true;

    }


  }
}
