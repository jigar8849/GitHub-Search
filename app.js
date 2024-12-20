// let input=document.querySelector("#txt");
// let search=document.querySelector("#search");
// let avatar=document.querySelector("#avatar");
// let FollowersCount=document.querySelector("#FollowersCount");
// let FollowingCount=document.querySelector("#FollowingCount");
// let RepositoryCount=document.querySelector("#RepositoryCount");
// let Name=document.querySelector("#Name");
// let showProfile=document.querySelector(".showProfile");
// let url = "https://api.github.com/users/";


// search.addEventListener("click",async()=>{
//     search.style.background="red";
//     let data=await axios.get(`${url}${input.value}`);
//     showProfile.style.display="block";

//     let name=data.data.name;
//     let image=data.data.avatar_url;
//     let followers=data.data.followers;
//     let following=data.data.following;
//     let public_repos=data.data.public_repos;

//     avatar.src=image;

//     FollowersCount.innerText=followers;
//     FollowingCount.innerText=following;
//     RepositoryCount.innerText=public_repos;
//     Name.innerText=name;
//     input=document.querySelector("#txt").value="";
//     search.style.background="";
// },2000);



let input=document.querySelector("#txt");
let search=document.querySelector("#search");
let avatar=document.querySelector("#avatar");
let showProfile=document.querySelector(".showProfile");
let Name=document.querySelector("#Name");
let FollowersCount=document.querySelector("#FollowersCount");
let FollowingCount=document.querySelector("#FollowingCount");
let RepositoryCount=document.querySelector("#RepositoryCount");
let url= "https://api.github.com/users/";

search.addEventListener("click",async()=>{
    search.style.background="red";
    let data=await axios.get(`${url}${input.value}`);
    showProfile.style.display="block";

    let name=data.data.name;
    let image=data.data.avatar_url;
    let followers=data.data.followers;
    let following=data.data.following;
    let public_repos=data.data.public_repos;

    avatar.src=image;

    FollowersCount.innerText=followers;
    FollowingCount.innerText=following;
    RepositoryCount.innerText=public_repos;
    Name.innerText=name;
    input=document.querySelector("#txt").value="";
    search.style.background="";

},2000);
