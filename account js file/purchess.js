let purchesses = [
    ['ab','key bord','1000','200'],
    ['bc','mouse','800','160'],
    ['bd','prosacer','40','4000'],
    ['de','ssd','6000','20'],
    ['ef','moniter','20','30'],
    ['fe','cpu','10000','10'],
    ];
    let addpurchesses=()=>{
        purchesses.push([vandername.value,prodnsme.value,qty.value,prodprice.value]);
        console.log(business)
        document.getElementById('rightsection').innerHTML =showpurchessess();   
        }
        let total = 0
    let showpurchessess=()=>{
    let  protable = `<table class="table table-bordered mb-0.1">`
        protable   += '<tr>' +
            '<th>' + 'ID'                 + '</th>' +
            '<th>' + 'Vandor Name'        + '</th>' +
            '<th>' + 'Product name'       + '</th>' +
            '<th>' + 'Qty'                + '</th>' +
            '<th>' + 'Unit price'         + '</th>' +
            '<th>' + 'Total price'        + '</th>' +
            '<th colspan="2">' + 'Buttons'+ '</th>' +
            '</tr>';
            let i=0
            total=0
        for (i = 0; i < purchesses.length; i++) {
        protable += '<tr>' +
                '<td class="align-middle">' + [i+1]            + '</td>' + 
                '<td class="align-middle">' + purchesses[i][0] + '</td>' + 
                '<td class="align-middle">' + purchesses[i][1] + '</td>' +
                '<td class="align-middle">' + purchesses[i][2] + '</td>' +
                '<td class="align-middle">' + purchesses[i][3] + '</td>' +
                '<td class="align-middle">' + purchesses[i][2]*purchesses[i][3] + '</td>' +
                '<td class="align-middle">' + '<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="purchedit(' + i + ')">Edit</button>' + '</td>' +
                '<td class="align-middle">' + '<button class="btn btn-danger"  onclick="purchessesdelete(' + i + ')">Delete</button>' + '</td>' +     
                '</tr>';
                total = Number(total) + Number(purchesses[i][2]*purchesses[i][3])
        }; 
        protable += '<tr>' +
        '<td class="align-middle">' +[i+1]+  '</td>' +
        '<td class="align-middle">' + ` <input type="text" value="" class="form-control" placeholder="Vander name" aria-label="First name" id="vandername">` + '</td>' + 
        '<td class="align-middle">' + `<input type="tel" class="form-control" placeholder="Product name" aria-label="Last name" id="prodnsme">` + '</td>' +
        '<td class="align-middle">' + `  <input type="text" class="form-control" placeholder="Qty" aria-label="First name" id="qty">` + '</td>' +
        '<td class="align-middle">' + `  <input type="text" class="form-control" placeholder="Unit price" aria-label="First name" id="prodprice">` + '</td>' +
        '<td class="align-middle" colspan="2">' +'TOTAL: '+Number(total)+'/='+'</td>' +
        '<td class="align-middle" id="submutbutton">' +`<button type="submit" class="btn btn-success" onclick="addpurchesses()" >Add purchess</button>` + '</td>' +
        '</tr>';
      protable += '</table>'
        return (protable)
    };
    purchedit=(edit)=>{
        submutbutton.innerHTML = `<button type="submit" class="btn btn-primary" onclick="purchessrestore(${edit})" >Restore Purchess</button> `
        vandername.value = purchesses[edit][0]
        prodnsme.value = purchesses[edit][1]
        qty.value = purchesses[edit][2]
        prodprice.value = purchesses[edit][3]
    };
    purchessrestore=(edit)=>{
        let vandnam = vandername.value;
        let product = prodnsme.value ;
        let qtyrestore = qty.value;
        let prodpric = prodprice.value
         purchesses[edit][0]=vandnam;
         purchesses[edit][1]=product ;
         purchesses[edit][2]=qtyrestore;
         purchesses[edit][3]=prodpric;
         document.getElementById('rightsection').innerHTML = showpurchessess(); 
    };
    purchessesdelete=(delet)=>{
        purchesses.splice(delet,1)
        document.getElementById('rightsection').innerHTML = showpurchessess(); 
    };
   let dateandtime=()=>{
    let date = new Date()
    let time = date.toLocaleTimeString();
    let comdate = date.toLocaleDateString();
    timep.innerHTML = time+'<br>'+comdate;
   }
   setInterval(dateandtime , 1000);