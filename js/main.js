function dropDown(){
    document.getElementById('myDropDown').classList.toggle('show');
}

window.onclick = function(event){
    if(!event.target.matches('.dropBtn')){

        var dropdowns = document.getElementsByClassName('dropDownContent');
        var i;
        for(i = 0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}