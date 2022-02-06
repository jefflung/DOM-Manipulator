const button = document.querySelector("button");
const content = document.getElementById("content");

const clickCallback = function(event){
    array = ["Johnny is a freelacne web designer with satisfied clients worldwide.","Becky is a project manager and web designer with a demonstrated history of working in the marketing and advertising industry.","Andy is a web designer who has over 20 years experience in B2B marketing and design.","Nic is a professional graphic designer with creative flair, attention to detail and the ability to work on several jobs under pressure.","Sarah is an experienced junior web designer with a demonstrated history of working in the computer software industry."];
    for(let i=0; i<array.length;i++){
        const p = document.createElement('p');
        p.appendChild(document.createTextNode(array[i]));
        content.appendChild(p);
        //console.log(array[i]);
    }
}
button.addEventListener("click",clickCallback);