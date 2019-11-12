fetch("C:/Users/Mads/Desktop/Web development/GreenZebra/navbar.html").then(res => res.text())
.then((data) => document.getElementById("navbar").innerHTML = data);