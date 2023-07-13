let vandors = [
    ['PTCL','rawalpindi','67346573450'],
    ['Wapda','mandra','76726285'],
    ['police','islamabad','y57y045623'],
    ['lahore eng','lahore','7872835'],
    ['karachi','karachi','48584564895'],
    ['steel group','pindi','857625840'],
    ];
    document.getElementById('vanderdetails').innerHTML =  `your vandor are ${vandors.length}` 
    let addvandors=()=>{
        vandors.push([vandorssname.value,  vandlocation.value, vandorscontect.value]);
        console.log(business)
        document.getElementById('rightsection').innerHTML =showvandorss();   
        }
    let showvandorss=()=>{
    let  protable = `<table class="table table-dark table-hover mb-0.1">`
        protable   += '<tr>' +
            '<th>' + 'ID'                 + '</th>' +
            '<th>' + 'vandors Name'       + '</th>' +
            '<th>' + 'vandors location'              + '</th>' +
            '<th>' + 'vandors contect'    + '</th>' +
            '<th colspan="2">' + 'Buttons'+ '</th>' +
            '</tr>';
        for (let i = 0; i < vandors.length; i++) {
        protable += '<tr>' +
                '<td class="align-middle">' + [i+1]          + '</td>' + 
                '<td class="align-middle">' + vandors[i][0] + '</td>' + //i + '<br>' + k.length + '<br>' + '</td>' +
                '<td class="align-middle">' + vandors[i][1] + '</td>' +
                '<td class="align-middle">' + vandors[i][2] + '</td>' +
                '<td class="align-middle">' + '<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick=" vandorsedit(' + i + ')">edit</button>' + '</td>' +
                '<td class="align-middle">' + '<button class="btn btn-danger"  onclick="vandorsdelete(' + i + ')">Delete</button>' + '</td>' +     
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
                                aria-label="First name" id="vandorssname">
                        </div>

                        <div class="col mt-3">
                            <input type="tel" class="form-control" placeholder="phone no" aria-label="Last name"
                                id="vandlocation">
                        </div>
    
                        <div class="col mt-3">
                            <input type="text" class="form-control" placeholder="Compane location"
                                aria-label="First name" id=" vandorscontect">
                        </div>

                        <div class="col-12 mt-3" id="submutbutton">
                            <button type="submit" class="btn btn-primary"  data-bs-dismiss="modal"
                                onclick="addvandors()" >Add vandors</button>
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
    Add new vandors
    </button>`;
        return (protable)
    };
     vandorsedit=(edit)=>{
        
        submutbutton.innerHTML =   `<div class="col-12 mt-3">
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal"
                onclick=" vandorsrestore(${edit})" >Restore vandors</button>
        </div>`
        
        vandorssname.value = vandors[edit][0]
          vandlocation.value = vandors[edit][1]
         vandorscontect.value = vandors[edit][2]
    }
     vandorsrestore=(edit)=>{
        let cnam = vandorssname.value;
        let cphone =   vandlocation.value ;
        let comloc =  vandorscontect.value;
         vandors[edit][0]=cnam;
         vandors[edit][1]=cphone ;
         vandors[edit][2]=comloc;
         document.getElementById('rightsection').innerHTML = showvandorss(); 
    }
    vandorsdelete=(delet)=>{
        vandors.splice(delet,1)
        document.getElementById('rightsection').innerHTML = showvandorss(); 
    }