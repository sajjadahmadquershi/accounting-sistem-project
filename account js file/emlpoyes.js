let employes = [
    ['sajjad','100000','1000','2000','1000','2000'],
    ['wajafhat','15000','800','2000','1000','2000'],
    ['umer','20000','40','4000','1000','2000'],
    ['abdullah','20000','6000','2000','1000','2000'],
    ['azeem','30000','200','3000','1000','2000'],
    ['afzal','60000','10000','1000','1000','2000'],
    ];
    let employesdetails = document.getElementById('employesdetails');
    employesdetails.innerHTML = 'Total Employe is '+ employes.length;

    let addemployes=()=>{
        employes.push([employename.value,salary.value,medical.value,houserent.value,transopation.value]);
        console.log(business)
        document.getElementById('rightsection').innerHTML =showemployess();   
        }
        let secelerytotal = 0
    let showemployess=()=>{
    let  protable = `<table class="table table-bordered mb-0.1">`
    //extra
        protable   += '<tr class="text-center align-middle">' +
            '<th rowspan="2"class="bg-success">' + 'ID'                 + '</th>' +
            '<th rowspan="2"class="bg-success">' + 'Employe Name'       + '</th>' +
            '<th rowspan="2" class="bg-success">' + 'Basick Sallery'     + '</th>' +
            '<th colspan="3" class="bg-primary">' + 'Allownce'           + '</th>' +
            '<th colspan="2" class="bg-danger">' + 'Dabits'           + '</th>' +
            '<th rowspan="2" class="bg-info">' + 'Net payable'        + '</th>' +
            '<th colspan="2" rowspan="2" class="bg-danger">' + 'Buttons'+ '</th>' +
            '</tr>'
            protable   += '<tr class="text-center align-middle">' +
            '<th colspan="1" class="bg-warning">' + 'Medical'            + '</th>' +
            '<th rowspan="1" class="bg-warning">' + 'Transopation'       + '</th>' +
            '<th rowspan="1" class="bg-warning">' + 'House rent'       + '</th>' +
            '<th rowspan="1" class="bg-primary">' + 'PF -2%'             + '</th>' +
            '<th rowspan="1" class="bg-primary">' + 'Incomtex -17%'      + '</th>' +
            '</tr>'
            let i=0
            totalpf=0
            let groscelery = 0
            let totalincomtex = 0
            let netcelery = 0
            secelerytotal = 0
        for (i = 0; i < employes.length; i++) {
            groscelery =           (Number(employes[i][1])+Number(employes[i][2]) +Number(employes[i][3]) + Number(employes[i][4]))
            totalincomtex =       (Number(employes[i][1])+Number(employes[i][2]) +Number(employes[i][3]) + Number(employes[i][4])) * (17)/(100)
            totalpf =   Math.trunc((Number(employes[i][1])+Number(employes[i][2]) +Number(employes[i][3]) + Number(employes[i][4])) * (2)/(100))
            netcelery = groscelery-totalincomtex-totalpf;
        protable += '<tr>' +
                '<td class="align-middle">' + [i+1]          + '</td>' +
                '<td class="align-middle">' + employes[i][0] + '</td>' +  
                '<td class="align-middle">' + employes[i][1] + '</td>' +
                '<td class="align-middle">' + employes[i][2] + '</td>' +
                '<td class="align-middle">' + employes[i][3] + '</td>' +
                '<td class="align-middle">' + employes[i][4] + '</td>' +
                '<td class="align-middle table-danger"">' + totalpf+ '</td>' +
                '<td class="align-middle table-danger"">' +totalincomtex+ '</td>' +
                '<td class="align-middle">' +Math.trunc(netcelery)+ '</td>' +
                '<td class="align-middle">' + '<button class="btn btn-primary" onclick="employedit(' + i + ')">Edit</button>' + '</td>' +
                '<td class="align-middle">' + '<button class="btn btn-danger"  onclick="employesdelete(' + i + ')">Delete</button>' + '</td>' +     
                '</tr>';
                secelerytotal = secelerytotal+netcelery
        }; 
          //employessalerypayable.innerHTML = 'Total saleery payable '+Math.trunc(secelerytotal);
        protable += '<tr>' +
        '<td class="align-middle">' +[i+1]+  '</td>' +
        '<td class="align-middle">' + ` <input type="text" value="" class="form-control" placeholder="Vander name" aria-label="First name" id="employename">` + '</td>' + 
        '<td class="align-middle">' + `<input type="tel" class="form-control" placeholder="salary name" aria-label="Last name" id="salary">` + '</td>' +
        '<td class="align-middle">' + `<input type="tel" class="form-control" placeholder="salary name" aria-label="Last name" id="medical">` + '</td>' +
        '<td class="align-middle">' + `  <input type="text" class="form-control" placeholder="medical" aria-label="First name" id="houserent">` + '</td>' +
        '<td class="align-middle">' + `  <input type="text" class="form-control" placeholder="Unit price" aria-label="First name" id="transopation">` + '</td>' +
        '<td class="align-middle">' +  '</td>' +
        '<td class="align-middle">' +  '</td>' +
        '<td class="align-middle fw-bold" colspan="2">' +'Total: '+Math.trunc(secelerytotal)+'/='+'</td>' +
        '<td class="align-middle" id="submutbutton">' +`<button type="submit" class="btn btn-success" onclick="addemployes()" >Add purchess</button>` + '</td>' +
        '</tr>';
      protable += '</table>'
        return (protable)
    };
    employedit=(edit)=>{
        submutbutton.innerHTML = `<button type="submit" class="btn btn-primary" onclick="employrestore(${edit})" >Restore Purchess</button> `
        employename.value = employes[edit][0]
        salary.value = employes[edit][1]
        medical.value = employes[edit][2]
        houserent.value = employes[edit][3]
        transopation.value = employes[edit][4]
    };
   employrestore=(edit)=>{
        let nameemploy = employename.value;
        let salaryofemploy = salary.value ;
        let medicalof = medical.value;
        let houserentof = houserent.value
        let transopationof = transopation.value
         employes[edit][0]=nameemploy;
         employes[edit][1]=salaryofemploy ;
         employes[edit][2]=medicalof;
         employes[edit][3]=houserentof;
         employes[edit][4]=transopationof;
         document.getElementById('rightsection').innerHTML = showemployess(); 
    };
    employesdelete=(delet)=>{
        employes.splice(delet,1)
        document.getElementById('rightsection').innerHTML = showemployess(); 
    };
