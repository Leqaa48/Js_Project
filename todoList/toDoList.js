////////To LOAD (to do list )///////////////
function onload(){
    if(localStorage.length>0){
        for (let index = 1; index < localStorage.clickcount+1 ; index++) {
                if(localStorage.getItem(index)){
                let container=document.getElementById("container");
                container.style.visibility="visible";
                let div=document.createElement('div');
                let p=document.createElement('p');
                let btn=document.createElement('button');
                div.id="taskDiv"+index;
                div.className="taskDiv";
                btn.id="taskBtn"+index;
                container.appendChild(div);
                div.appendChild(p);
                div.appendChild(btn);
                p.innerText=localStorage.getItem(index);
                btn.innerText="Delete";
                btn.addEventListener('click', fun =() =>{
                    div.remove();
                    localStorage.removeItem(index);
                })
                }
                else continue;
        }
    }
}
///////Add Button//////
document.getElementById("addBtn").addEventListener('click', fun=()=>{
    let value = document.getElementById("taskDesciption").value;
    if(value =="") window.alert("Please write your task first");
    else{
        var counter;
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
            counter=localStorage.clickcount;
        } else {
            localStorage.clickcount = 1;
            counter=localStorage.clickcount;
        }
        localStorage.setItem(counter,value);
        let container=document.getElementById("container");
        container.style.visibility="visible";
        document.getElementById("taskDesciption").value="";
        let div=document.createElement('div');
        let p=document.createElement('p');
        let btn=document.createElement('button');
        div.id="taskDiv"+counter;
        div.className="taskDiv";
        btn.id="taskBtn"+counter;
        container.appendChild(div);
        div.appendChild(p);
        div.appendChild(btn);
        p.innerText=value;
        btn.innerText="Delete";
        btn.addEventListener('click', fun =() =>{
            div.remove();
            
            
        })
    }
})

///////clear Button//////
document.getElementById("clearBtn").addEventListener('click', fun=()=>{
    for (let index = 0; index < localStorage.length ; index++) {
        let key=localStorage.key(index);
        let div=document.getElementById("taskDiv"+key);
        if(div){
            div.remove();
        }
    } 
    localStorage.clear();
    localStorage.clickcount=0;
    let container=document.getElementById("container");
        container.style.visibility="hidden";
})

