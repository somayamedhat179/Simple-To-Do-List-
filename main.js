

document.querySelector("#form-valid").addEventListener("submit",function (event){
    var works= document.querySelector("#works").value ;
    var result= document.querySelector("#result") ; // ul
    event.preventDefault() ;
    
    if(works==""){
        alert("Enter Value!") ;
        event.preventDefault() ;

    } else{
        var li = document.createElement("li") ;
        li.innerHTML = works ;
        li.className = "my-3 p-3 porder-1 bg-light list-unstyled" ;
        var dltBtn = document.createElement("button") ;
        dltBtn.innerHTML = "Delete" ;
        dltBtn.className = "btn btn-danger btn-sm float-right" ;
        dltBtn.addEventListener("click",function(){
            li.remove() ;
        });
        li.appendChild(dltBtn) ;
        result.prepend(li) ;
        document.querySelector("#works").value = "" ;
    }

})
