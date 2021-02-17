//Array of 20 Grocery Items
const grocery = [
    {
        itemname:'Colgate Paste',
        itemcategory:'Tooth Paste',
        itemprices:10,
        itemavailable:true,
        brand:'Colgate',
       
    },
    {
        itemname:'Zig Zag',
        itemcategory:'Tooth Brush',
        itemprices:10,
        itemavailable:true,
        brand:'Colagate',
         
    },
    {
        itemname:'Silk',
        itemcategory:'Chocolate',
        itemprices:100,
        itemavailable:false,
        brand:'DairyMilk',
           
    },
    {
        itemname:'Parle-G',
        itemcategory:'Biscuits',
        itemprices:5,
        itemavailable:true,
        brand:'Parle',
      
    },
    {
        itemname:'Thumbs Up',
        itemcategory:'Colddrinks',
        itemprices:40,
        itemavailable:true,
        brand:'Pepsi',
    
    },
    {
        itemname:'Fanta',
        itemcategory:'Colddrinks',
        itemprices:40,
        itemavailable:true,
        brand:'Pepsi',
    
    },
    {
        itemname:'Dove Shampoo',
        itemcategory:'Shampoo',
        itemprices:200,
        itemavailable:false,
        brand:'Unilever',
    
      },
    
      {
        itemname:'Maggie',
        itemcategory:'Noodles',
        itemprices:1100,
        itemavailable:true,
        brand:'Britania',
    
    },
    
    {
        itemname:'Kacha Mango',
        itemcategory:'Candy',
        itemprices:1,
        itemavailable:true,
        brand:'Candyman',
    
    },
    
    {
        itemname:'Surf Excel',
        itemcategory:'Washing Powder',
        itemprices:500,
        itemavailable:true,
        brand:'Unilever',
    
    },
    
    {
        itemname:'IndiaGate Rice',
        itemcategory:'Rice',
        itemprices:50,
        itemavailable:true,
        brand:'IndiaGate',
    
    },
    
    {
        itemname:'Aashirwad Aata',
        itemcategory:'Jawar',
        itemprices:45,
        itemavailable:false,
        brand:'Aashirwad',
    
    },
    
    {
        itemname:'Gateway Sugar',
        itemcategory:'Sugar',
        itemprices:40,
        itemavailable:true,
        brand:'Gateway',
    
    },
    
    {
        itemname:'Redlabel Tea',
        itemcategory:'Tea',
        itemprices:320,
        itemavailable:true,
        brand:'Redlabel',
    
    },
    
    {
        itemname:'Nescafe Coffee',
        itemcategory:'Coffee',
        itemprices:500,
        itemavailable:false,
        brand:'Gateway',
    
    },
    
    {
        itemname:'Monster EnergyDrink',
        itemcategory:'EnergyDrink',
        itemprices:99,
        itemavailable:true,
        brand:'Monster',
    
    },
    
    {
        itemname:'Saffola Oil',
        itemcategory:'Oil',
        itemprices:240,
        itemavailable:false,
        brand:'Saffola',
    
    },
    
    {
        itemname:'Patanjali Ghee',
        itemcategory:'Ghee',
        itemprices:250,
        itemavailable:true,
        brand:'Patanjali',
    
    },
    
    {
        itemname:'Delicious Butter',
        itemcategory:'Butter',
        itemprices:100,
        itemavailable:true,
        brand:'Delicious',
    
    },
    
    {
        itemname:'Lijjat Papad',
        itemcategory:'Papad',
        itemprices:80,
        itemavailable:false,
        brand:'lijjat',
    
    },
    
    {
       itemname:'LG TV',
       itemcategory:'TV',
       itemprices:23000,
       itemavailable:true,
       brand:'LG',
    },
    {
        itemname:'Voltas AC',
        itemcategory:'AC',
        itemprices:30000,
        itemavailable:true,
        brand:'Voltas',
     
    },
    
    {
       itemname:' Refridgerator',
       itemcategory:'Refridgerator',
       itemprices:35000,
       itemavailable:false,
       brand:'Samsung',
   
    },
   
    {
       itemname:'Bosch Washing Machine',
       itemcategory:'Washing Machine',
       itemprices:37000,
       itemavailable:true,
       brand:'Bosch',
    }
]
//Find Brandname using find function

let finder = (brand) => {
    return grocery.find(function(value){
          return value.brand === brand;
    });
}
console.log(finder('Oreo'));



//Find Product >150

let filtered = () => {
   return grocery.filter(function(value){
       return value.itemprices > 150;
   })
}
console.log(filtered());



//Find Product > 200 and available

let avail = () => {
    return grocery.filter(function(val) {
        return val.itemprices > 200 && val.itemavailable === true;
    });
};
console.log(avail());



//Find Product <=500 and Not Available

let notavail = () => {
    return grocery.filter(function(val) {
        return val.itemprices <= 500 && val.itemavailable === false;
    });
};
console.log(notavail());



//Get all the Product in the Stock

const instock = () => {
    return grocery.filter(function(val) {
        return val.itemavailable = true;
    });
};
console.log(instock());



//Get all the Product in a list

const list = [];
return grocery.forEach(function(obj) {
    list.push(obj.itemcategory);
    console.log(list);
})



