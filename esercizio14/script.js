const generateCells = () => {
  for (let i = 0; i < 90; i++) {
    const tombolone = document.querySelector("div .tombolone");
    const cellDiv = document.createElement("div");
    cellDiv.classList.add("box");
    const h2 = document.createElement("h2");
    h2.innerText = i + 1;
    cellDiv.appendChild(h2);
    tombolone.appendChild(cellDiv);
  }
};

