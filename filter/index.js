let products  = [


    {
        id : 1,
        name :"Maggie Noodle",
        price:10,
        catogery:"food",
        Quantity:150,
        pic:"https://e7.pngegg.com/pngimages/687/965/png-clipart-vegetarian-cuisine-instant-noodle-laksa-dum-aloo-maggi-salt-food-chili-pepper.png",

    },
    {
        id : 2,
        name :"Cocacola",
        price:40,
        catogery:"drink",
        Quantity:200,
        pic:"https://w7.pngwing.com/pngs/685/904/png-transparent-fizzy-drinks-coca-cola-diet-coke-rc-cola-coca-cola-food-cola-soft-drink.png",

    },
    {
        id : 3,
        name :"Amul Cheese",
        price:100,
        catogery:"Dairy",
        Quantity:100,
        pic:"https://w7.pngwing.com/pngs/374/199/png-transparent-processed-cheese-milk-amul-cheese-spread-milk-food-cheese-curd-thumbnail.png",

    },
    {
        id : 4,
        name :"Sting Energy drink",
        price:50,
        catogery:"Energy drink",
        Quantity:50,
        pic:"https://toppng.com/uploads/preview/sting-energy-drink-cambodia-115632243261skitygv1l.png",

    },
    {
        id : 5,
        name :"Go Cheese ",
        price:120,
        catogery:"Dairy",
        Quantity:30,
        pic:"https://e7.pngegg.com/pngimages/187/297/png-clipart-dairy-products-milk-amul-go-cheese-dairy-cheese-food-cheese.png",

    },
    
]


function displayData(arr){

    document.getElementById("data").innerHTML="";

    arr.forEach((product,index)=>{

        //append == when we have to access from direct ---> for numbers
        //appendChild == when we have to access indirectly --> for string

        let row = document.createElement("tr");

        let numbertd = document.createElement("td");
        numbertd.append(index+1);

        let nametd = document.createElement("td");
        nametd.append(product.name);

        let pricetd = document.createElement("td");
        pricetd.append(product.price);

        let catogerytd = document.createElement("td");
        catogerytd.append(product.catogery);
        
        let Quantitytd = document.createElement("td");
        Quantitytd.append(product.Quantity);
        
        let pictd = document.createElement("td");
        let propic = document.createElement("img");
        propic.setAttribute("src",product.pic);//for adding the attribute in element 
        pictd.appendChild(propic);

        row.appendChild(numbertd);
        row.appendChild(nametd);
        row.appendChild(pricetd);
        row.appendChild(catogerytd);
        row.appendChild(Quantitytd);
        row.appendChild(pictd);


        document.getElementById("data").appendChild(row);
    })
}

displayData(products);

let filterStatus = false;
function OpenFilterSection(){
    if(filterStatus===false){
        document.getElementById("filter_box").style.marginLeft = "0px";
        filterStatus=true;
    }
    else{
        document.getElementById("filter_box").style.marginLeft = "-40%";
        filterStatus=false;
    }
}


let filters = {
    catogery:null,
    quantity:null,
    minprice:null,
    maxprice:null,
    
}

function setfilter(property,value){
    if(value!==""){

        filters[property]=value;
        // if(property === "minprice"){
        //     document.getElementById("maxprice").min = Number(value)+1;
        // }
    }
    else{
        filters[property]=null;
    }
    
}

function filter(){
    let filterdata =products;

    if(filters.catogery!==null){

        filterdata = filterdata.filter((product,index)=>{
            return product.catogery.toUpperCase()===filters.catogery.toUpperCase();
        })
    }
    if(filters.quantity!==null){

        filterdata = filterdata.filter((product,index)=>{
            return Number(filters.quantity)>=product.price;
        })
    }
    if(filters.maxprice!==null){

        filterdata = filterdata.filter((product,index)=>{
            return Number(filters.maxprice)>=product.price;
        })
    }
    
    // console.log(filterdata);
    displayData(filterdata);
}

function closeTheFilter(){
    document.getElementById("filter_box").style.marginLeft="-40%";
    filterStatus = false;
}


