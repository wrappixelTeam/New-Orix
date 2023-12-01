const menu = document.querySelector(".menu");
const left_sidebar = document.querySelector(".sidebar");
const right_sidebar = document.querySelector(".right-sidebar");
const dashboard = document.querySelector(".dashboard");
const recent = document.querySelector(".recent");

const handle_leftSidebar = () => {
if(right_sidebar.classList.contains("active")){

    left_sidebar.classList.toggle("active");
    dashboard.classList.toggle("left-in");

    right_sidebar.classList.toggle("active");
    dashboard.classList.toggle("right-in");
}
else{
    left_sidebar.classList.toggle("active");
    dashboard.classList.toggle("left-in");
}
}

const handle_rightSidebar = () => {
if(left_sidebar.classList.contains("active")){

    left_sidebar.classList.toggle("active");
    dashboard.classList.toggle("left-in");

    right_sidebar.classList.toggle("active");
    dashboard.classList.toggle("right-in");
}
else{
    right_sidebar.classList.toggle("active");
    dashboard.classList.toggle("right-in");
}
}

menu.addEventListener("click" , handle_leftSidebar);
recent.addEventListener("click" , handle_rightSidebar);


window.addEventListener('resize', function(event){
    if(this.window.innerWidth<=991){
      left_sidebar.classList.remove("active");
      right_sidebar.classList.remove("active");
      dashboard.classList.remove("left-in");
    }
    else{
      left_sidebar.classList.add("active");
      right_sidebar.classList.remove("active");
      dashboard.classList.add("left-in");
      dashboard.classList.remove("right-in");

    }
 });