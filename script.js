const showModal = () => {
    window.addEventListener("click", () => {
        const modal = document.querySelector(".modal");
        ;
  
        modal.classList.add("closeModal");

        document.body.classList.remove("openBody")
        document.body.classList.add("closedBody");

    });
};

window.addEventListener("load", showModal);

const buttons = document.querySelectorAll(".openBtn");
buttons.forEach(element => {
    console.log("krisztián")
    element.addEventListener("click", (e) => {
       e.stopPropagation();
       const myModal = document.querySelector(".modal");
        myModal.classList.remove("invisible");
        myModal.classList.add("openModal");
        myModal.classList.remove("closeModal");

        document.body.classList.add("openBody")
        document.body.classList.remove("closedBody");

    
    })
    let modal = document.querySelector(".modal");
    element.addEventListener("click", () =>{
        modal.style.display = "block";
      });
      window.addEventListener("click", (event) => {
          console.log("1");
        if (event.target === modal) {setTimeout(() => {  console.log("2");
        modal.style.display = "none";
          
        }, 3000);
          
        }
      })
});

