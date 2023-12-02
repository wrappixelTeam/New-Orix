const menu = document.querySelector(".menu");
const left_sidebar = document.querySelector(".sidebar");
const right_sidebar = document.querySelector(".right-sidebar");
const dashboard = document.querySelector(".dashboard");
const recent = document.querySelector(".recent");
const body = document.querySelector("body");
const notification_dropdown = document.querySelector(".notification-dropdown");
const notification= document.querySelector(".notification");

const handle_leftSidebar = () => {

        if(window.innerWidth<=1170){
            if(right_sidebar.classList.contains("active")){

                left_sidebar.classList.toggle("active");
                dashboard.classList.toggle("left-in");
            
                right_sidebar.classList.toggle("active");
                dashboard.classList.toggle("right-in");
            }
            else{
                left_sidebar.classList.toggle("active");
                dashboard.classList.toggle("left-in");
                if(left_sidebar.classList.contains("active")){
                    body.classList.add("backdrops");
                }
                else{
                    body.classList.remove("backdrops");
                }
            }
        }
        else{
            left_sidebar.classList.toggle("active");
            dashboard.classList.toggle("left-in");
            body.classList.remove("backdrops");
        }
}

const handle_rightSidebar = () => {

        if(window.innerWidth<=1170){
            if(left_sidebar.classList.contains("active")){

                left_sidebar.classList.toggle("active");
                dashboard.classList.toggle("left-in");
            
                right_sidebar.classList.toggle("active");
                dashboard.classList.toggle("right-in");
            }
            else{
                right_sidebar.classList.toggle("active");
                dashboard.classList.toggle("right-in");
                if(right_sidebar.classList.contains("active")){
                    body.classList.add("backdrops");
                }
                else{
                    body.classList.remove("backdrops");
                }
            }
        }
        else{
            right_sidebar.classList.toggle("active");
            dashboard.classList.toggle("right-in");
            body.classList.remove("backdrops");
        }
}

menu.addEventListener("click" , handle_leftSidebar);
recent.addEventListener("click" , handle_rightSidebar);


window.addEventListener('resize', function(event){
    if(this.window.innerWidth<=1170){
      left_sidebar.classList.remove("active");
      right_sidebar.classList.remove("active");
      dashboard.classList.remove("left-in");
      dashboard.classList.remove("right-in");
      body.classList.remove("backdrops");
    }
    else{
      left_sidebar.classList.add("active");
      right_sidebar.classList.add("active");
      dashboard.classList.add("left-in");
      dashboard.classList.add("right-in");
      body.classList.remove("backdrops");

    }
 });

//  dropdown

window.addEventListener('resize', function(event){
    if(this.window.innerWidth<=572){
        notification_dropdown.classList.remove("dropstart");
        notification_dropdown.classList.add("dropdown");
    }
    else{
        notification_dropdown.classList.remove("dropdown");
        notification_dropdown.classList.add("dropstart");
    }
 });


    if(window.innerWidth<=572){
        notification_dropdown.classList.remove("dropstart");
        notification_dropdown.classList.add("dropdown");
       }
       else{
        notification_dropdown.classList.remove("dropdown");
        notification_dropdown.classList.add("dropstart");
        
       }

    //    simplebar
    var myElement = document.getElementById('simple-bar');
new SimpleBar(myElement, { autoHide: true });

    var right_simplebar = document.getElementById('right-simple-bar');
new SimpleBar(right_simplebar, { autoHide: true });

// backdrop

const handle_backdrop = (e) => {
    const element = e.target;
    if(element.classList.contains("backdrops")){
        if(left_sidebar.classList.contains("active")){
            left_sidebar.classList.toggle("active");
            body.classList.remove("backdrops");
        }
        else{
            right_sidebar.classList.toggle("active");
            body.classList.remove("backdrops");
        }
    }
}
document.addEventListener("click",handle_backdrop);

