const url = new URLSearchParams(window.location.search);
let search = url.get('option');
console.log(search)
if (search == 'Compane') {
    rightsection.innerHTML = showCompanies();
} else if(search== 'Accounts') {
    
}else if(search== 'Items'){
    rightsection.innerHTML = showproducts();
}else if(search== 'Vendors'){
    rightsection.innerHTML = showvandorss();
}else if(search== 'Buy'){
    rightsection.innerHTML = showpurchessess();
}else if(search== 'Employes'){
    rightsection.innerHTML = showemployess();
}else if(search== 'Home'){
    
    showemployess();
}else if(search== 'Coustomer'){
    
    //showemployess();
}else if(search== 'Accounts'){
    
    //showemployess();
}