const leafURL = "https://cdn1.iconfinder.com/data/icons/nature-life-in-color/128/marijuana-c-1024.png";

window.addEventListener("mousemove", e => {
  const leaf = document.createElement("img");
  leaf.src = leafURL;
  leaf.className = "leaf";

  leaf.style.left = e.pageX + "px";
  leaf.style.top = e.pageY + "px";
  leaf.style.rotate = (Math.random() * 360) + "deg";

  document.body.appendChild(leaf);

  setTimeout(() => leaf.remove(), 1000);
});