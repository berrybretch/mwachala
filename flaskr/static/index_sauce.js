
document.body.onload = () =>{
    const body = document.body
    body.classList.remove("bodyopaque")
    const projects = body.querySelector(".projects")
    const services = body.querySelector(".services")
    const dmz = body.querySelector(".dmz")
    
    const project_text = projects.querySelector("#project_text")

    const serviceFlex = parseInt(getComputedStyle(body).getPropertyValue("--service-flex"))
    const projectFlex = parseInt(getComputedStyle(body).getPropertyValue("--project-flex"))

    services.style.flexGrow = serviceFlex
    projects.style.flexGrow = projectFlex

    const bodyMouseMove = (e) => {
        let midpoint = body.clientWidth/2;
        if (e.clientX>midpoint){
            let w = Math.sqrt(Math.pow(e.clientX-midpoint, 2))/25
            services.style.flexGrow = serviceFlex + w
            projects.style.flexGrow = projectFlex - w 
        }
        else if (e.clientX < midpoint){
            let w = Math.sqrt(Math.pow(e.clientX-midpoint, 2))/25
            services.style.flexGrow = serviceFlex - w
            projects.style.flexGrow = projectFlex + w
        }//end variation of flexgrow for both divs

        if (e.clientX < (midpoint*2*0.75)){
            if (service_text.classList.contains("left_reverse")){
                service_text.classList.remove("left_reverse")
                void service_text.offsetWidth
                service_text.classList.add("left_forward")
            }else{
                service_text.classList.add("left_forward")

            }
        }else if (e.clientX > (midpoint*2*0.75) ){
            if (service_text.classList.contains("left_forward")){
                service_text.classList.remove("left_forward")
                void service_text.offsetWidth;
                service_text.classList.add("left_reverse")
            }else{
                service_text.classList.add("left_reverse")
            }
        }//end if else for service_text animation

        if (e.clientX < (midpoint*2*0.25)){
            if (project_text.classList.contains("right_reverse")){
                project_text.classList.remove("right_reverse")
                void project_text.offsetWidth
                project_text.classList.add("right_forward")
            }else{
                project_text.classList.add("right_forward")

            }
        }else if (e.clientX > (midpoint*2*0.25) ){
            if (project_text.classList.contains("right_forward")){
                project_text.classList.remove("right_forward")
                void project_text.offsetWidth;
                project_text.classList.add("right_reverse")
            }else{
                project_text.classList.add("right_reverse")
            }
        }//end if else for project_text
        
    }//end bodymousemove

    const linkOnClick = (e) =>{
        e.stopPropagation()
        e.target.classList.add("disappear")
        setTimeout(() => {
            e.target.parent().trigger(e) 
        }, 0.5*1000);
    }//end link on click

    const bodyMouseLeave = () => {
        services.style.flexGrow = serviceFlex
        projects.style.flexGrow = projectFlex 
    }//end bodymouseleave
    const dmzMouseEnter = () =>{
        body.removeEventListener("mousemove", bodyMouseMove)
        services.style.flexGrow = serviceFlex
        projects.style.flexGrow = projectFlex 
    }//dmz for testing purposes
    
    body.addEventListener("mousemove" , bodyMouseMove)
    body.addEventListener("mouseleave", bodyMouseLeave)
    dmz.addEventListener("mouseenter", dmzMouseEnter)
    dmz.onmouseleave = () => body.addEventListener("mousemove", bodyMouseMove)
    project_text.addEventListener("click", linkOnClick)
    service_text.addEventListener("click", linkOnClick)
}


