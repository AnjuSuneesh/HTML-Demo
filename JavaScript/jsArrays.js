const sales = [ 

    { item: 'PS4 Pro', stock: 3, original: 399.99 }, 
    
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 }, 
    
    { item: 'Nintendo Switch', stock: 4, original: 299.99 }, 
    
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 }, 
    
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
    
    ]; 
    getsales(sales);
    function getsales()
    {
        const SalesArray=[];
        for(i=0;i<sales.length;i++)
        {   
            let salePrice=0 ,Total=0;
            if(sales[i].discount==null)
            {
                  salePrice=sales[i].original;
            }
            else{

                salePrice=sales[i].original-(sales[i].original*sales[i].discount);
            }
            Total=salePrice*sales[i].stock;
            let item=sales[i].item;
            let stock=sales[i].stock;
            let original=sales[i].original;
            let discount=sales[i].discount;
             
        SalesArray.push({item,stock,original,discount,salePrice,Total});

        }

        console.log(SalesArray)

    }
    
    
