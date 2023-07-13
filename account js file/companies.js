let business = [
    ['Unique engineering', '03215302092', 'mandra'],
    ['Uniq engineeri', '03215302092', 'mandra'],
    ['Unffue endddeering', '03212092', 'makkdra'],
    ['Unique engineering', '03215302092', 'maadra'],
    ['Uzzque cccceering', '4415302092', 'mmndra'],
    ['Uzzque cccceering', '4415302092', 'mmndra'],
    ['Uzzque cccceering', '4415302092', 'mmndra'],
];
document.getElementById('companiesonepara').innerText = `Your companies are`+'    '+`${business.length}`
let addbusiness = () => {
    business.push([comname.value, comphone.value, comlocation.value]);
    console.log(business)
    document.getElementById('rightsection').innerHTML = showCompanies();
};
let showCompanies = () => {
    let comtable = `<table class="table table-dark table-hover mb-0.1">`
    comtable += '<tr>' +
        '<th>' + 'ID' + '</th>' +
        '<th>' + 'Compane Name' + '</th>' +
        '<th>' + 'Phone' + '</th>' +
        '<th>' + 'Compane Address' + '</th>' +
        '<th colspan="2">' + 'Buttons' + '</th>' +
        '</tr>';
    for (let i = 0; i < business.length; i++) {
        comtable += '<tr>' +
            '<td class="align-middle">' + [i + 1] + '</td>' +
            '<td class="align-middle">' + business[i][0] + '</td>' +
            '<td class="align-middle">' + business[i][1] + '</td>' +
            '<td class="align-middle">' + business[i][2] + '</td>' +
            '<td class="align-middle">' + '<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="edit(' + i + ')">edit</button>' + '</td>' +
            '<td class="align-middle">' + '<button class="btn btn-danger"  onclick="coursedelete(' + i + ')">Delete</button>' + '</td>' +
            '</tr>';
    };
    comtable += '</table>'
    comtable += `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
                <div class="col">
                    <div class="col mt-3">
                        <input type="text" value="" class="form-control" placeholder="Compane name"
                            aria-label="First name" id="comname">
                    </div>
                    <div class="col mt-3">
                        <input type="tel" class="form-control" placeholder="phone no" aria-label="Last name"
                            id="comphone">
                    </div>

                    <div class="col mt-3">
                        <input type="text" class="form-control" placeholder="Compane location"
                            aria-label="First name" id="comlocation">
                    </div>
              <!-- <div class="col mt-3">
                        <input type="text" class="form-control" placeholder="father namr name"
                            aria-label="Last name" id="inp4">
                    </div>  -->
                    <!-- <div class="col mt-3">
                        <input type="date" class="form-control" placeholder="date of barth"
                            aria-label="Last name" id="inp5">
                    </div> -->
                    <div class="col-12 mt-3" id="adcourse">
                        <button type="submit" class="btn btn-primary"  data-bs-dismiss="modal"
                            onclick="addbusiness()" >submit</button>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary"  data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div> `
    comtable += `  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
Add new companie
</button>`;
    return (comtable)
};
edit = (edit) => {

    adcourse.innerHTML = `<div class="col-12 mt-3">
        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal"
            onclick="restore(${edit})" >Restore</button>
    </div>`

    comname.value = business[edit][0]
    comphone.value = business[edit][1]
    comlocation.value = business[edit][2]
}
restore = (edit) => {
    let cnam = comname.value;
    let cphone = comphone.value;
    let comloc = comlocation.value;
    business[edit][0] = cnam;
    business[edit][1] = cphone;
    business[edit][2] = comloc;
    document.getElementById('rightsection').innerHTML = showCompanies();
}
coursedelete = (delet) => {
    business.splice(delet, 1)
    document.getElementById('rightsection').innerHTML = showCompanies();
}

