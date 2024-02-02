let dlt=document.getElementsByClassName("delete");

for(let i=0;i<dlt.length;i++){
    let row=dlt[i].parentElement.parentElement;

    dlt[i].addEventListener("click",()=>{
        let ans=confirm("Are you sure , you want to delete this row");
        if(ans===true){
            row.style.display="none";
        }
    });
}
