let product = [
    ['key bord','1000','200'],
    ['mouse','800','160'],
    ['prosacer','40','4000'],
    ['ssd','6000','20'],
    ['moniter','20','30'],
    ['cpu','10000','10'],
    ];
    let prodval = 0
    document.getElementById('productpara').innerHTML = `your product are ${product.length}`
    let addproduct=()=>{
        product.push([productsname.value,price.value,stock.value]);
        console.log(business)
        document.getElementById('rightsection').innerHTML = showproducts();   
        }
    let showproducts=()=>{
    let  protable = `<table class="table table-dark table-hover mb-0.1">`
        protable   += '<tr>' +
            '<th>' + 'ID'                 + '</th>' +
            '<th>' + 'product Name'       + '</th>' +
            '<th>' + 'Product price'              + '</th>' +
            '<th>' + 'Product stock'    + '</th>' +
            '<th colspan="2">' + 'Buttons'+ '</th>' +
            '</tr>';
             prodval = 0
        for (let i = 0; i < product.length; i++) {
            // prodval = Number(prodval) + Number(product[i][1]);
        protable += '<tr>' +
                '<td class="align-middle">' + [i+1]         + '</td>' + 
                '<td class="align-middle">' + product[i][0] + '</td>' + 
                '<td class="align-middle">' + product[i][1] + '</td>' +
                '<td class="align-middle">' + product[i][2] + '</td>' +
                '<td class="align-middle">' + '<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="peoductedit(' + i + ')">edit</button>' + '</td>' +
                '<td class="align-middle">' + '<button class="btn btn-danger"  onclick="productdelete(' + i + ')">Delete</button>' + '</td>' +     
                '</tr>';
        }; 
      protable += '</table>'
      protable +=`
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                    <di class="col">
                        <div class="col mt-3">
                            <input type="text" value="" class="form-control" placeholder="Compane name"
                                aria-label="First name" id="productsname">
                        </div>

                        <div class="col mt-3">
                            <input type="tel" class="form-control" placeholder="phone no" aria-label="Last name"
                                id="price">
                        </div>
    
                        <div class="col mt-3">
                            <input type="text" class="form-control" placeholder="Compane location"
                                aria-label="First name" id="stock">
                        </div>

                        <div class="col-12 mt-3" id="submutbutton">
                            <button type="submit" class="btn btn-primary"  data-bs-dismiss="modal"
                                onclick="addproduct()" >Add product</button>
                        </div>
                    </div>
                
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary"  data-bs-dismiss="modal">Close</button>
                </div>
                </div>
          </div>
        </div>
    </div> `
    protable += `  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Add new product
    </button>`;
        return (protable)
    };
    
        let element =0
        for (let i = 0; i < product.length; i++) {
             element = Number(element)+ Number(product[i][1])*Number(product[i][2]);
             document.getElementById('producttotalvalue').innerHTML = 'your product value is'+' '+ (element);
        }
        
    
    
  
    
    peoductedit=(edit)=>{
        
        submutbutton.innerHTML =   `<div class="col-12 mt-3">
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal"
                onclick="peoductrestore(${edit})" >Restore product</button>
        </div>`
        
        productsname.value = product[edit][0]
        price.value = product[edit][1]
        stock.value = product[edit][2]
    }
    peoductrestore=(edit)=>{
        let cnam = productsname.value;
        let cphone = price.value ;
        let comloc = stock.value;
         product[edit][0]=cnam;
         product[edit][1]=cphone ;
         product[edit][2]=comloc;
         document.getElementById('rightsection').innerHTML = showproducts(); 
    }
    productdelete=(delet)=>{
        product.splice(delet,1)
        document.getElementById('rightsection').innerHTML = showproducts(); 
    }