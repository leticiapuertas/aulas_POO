
    function getText(){
        let h1: HTMLHeadingElement | null =  document.querySelector ("h1");
        if(h1?.innerText){
            h1.setAttribute("style", "color:pink")
        }
        else{
            console.log("não achei!");
        }
    }
    let darkMode: boolean = false;

    function getTexto(){
        let div: HTMLElement | null =  document.querySelector ("section");
        if(!darkMode){
           darkMode = true;
           if(div != null){
            div.style.backgroundColor = "red";
            div.style.color = "black";
        }
        }else{
            darkMode = false;
            if(div != null){
                div.style.backgroundColor = "blue";
                div.style.color = "black";
                
            }
        }
    
        }