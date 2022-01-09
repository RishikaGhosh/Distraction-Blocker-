// alert("Load Extension");
// if(window.location.hostname==="www.youtube.com"){
//     alert("You are in Youtube");
// }

// switch(window.location.hostname){
//     case "www.youtube.com":
//         alert("This is Youtube");
//         break;
//     case "www.facebook.com":
//         alert("This is Facebook");
//         break;
//     case "www.instagram.com":
//         alert("This is instagram");
//         break;
// }


const generateHTML=(pageName)=>{
    return `<div class="text">Error: Page blocked, get back to work.</div>`;
};

const generateSTYLING=()=>{
    return `<style>
    .text{
        color:red;
    }
    </style>`;
};
//accessing the html of the page
switch(window.location.hostname){
    case "www.youtube.com":
        document.head.innerHTML=generateSTYLING();
        document.body.innerHTML=generateHTML("youtube");
        break;
    case "www.facebook.com":
        document.head.innerHTML=generateSTYLING();
        document.body.innerHTML=generateHTML("facebook");
        break;
    case "www.instagram.com":
        document.head.innerHTML=generateSTYLING();
        document.body.innerHTML=generateHTML("instagram");
        break;
    case "www.netflix.com":
        document.head.innerHTML=generateSTYLING();
        document.body.innerHTML=generateHTML("netflix");
        break;
}