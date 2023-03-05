const paths = [...document.querySelectorAll("path")];
const list = document.getElementById("list");

paths.map((path) => {
  let li = document.createElement("li");
  let name = path.getAttribute("name");
  let id = path.getAttribute("id");
  li.textContent = name;
  li.setAttribute("id", `${id}`);
  list.append(li);

  li.addEventListener("click", () => {
    if (li.getAttribute("id") === id) {
      path.setAttribute("fill", "red");
    }
  });

  path.addEventListener("click", (e) => {
    const showVar=document.querySelector(".show")
        if(showVar){
          showVar.remove()
          path.removeAttribute("fill"," ")
        }
        let demo = document.createElement("span");
        demo.textContent = name;
        document.body.append(demo);
        demo.classList.add("show");
        demo.style.top = e.clientY + "px";
        demo.style.left = e.clientX + "px";
        path.setAttribute("fill","red")
        
  });
});
