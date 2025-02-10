window.addEventListener("load", (event) => {
   
    setTimeout(() => {
        let html =
        `<div class="error">
            <img src="error.svg" alt="">
            <span><h2> Something Missing... your system is not supported.</h2></span>
            <span><a href="new.html"><button id="retry">Retry</button></a></span>
        </div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
    
  
        
    }, 2000);

});
  




  



