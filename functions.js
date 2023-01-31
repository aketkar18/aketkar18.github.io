function load_style() {
    page_style = localStorage.getItem("sheet_name");
    if (page_style === null) {
        page_style = "blue.css";
    }
    document.getElementById('css_style').setAttribute("href", page_style);
}

function setSlider() {
    document.getElementById("check").checked = page_style === "pastel.css";
}

function change() {
    if (page_style === "blue.css") {
        localStorage.setItem("sheet_name", "pastel.css");
    }
    else {
        localStorage.setItem("sheet_name", "blue.css");
    }
    load_style();
}

load_style();

function menu() {
    var x = document.getElementById("myNavi");
    if (x.className === "navi") {
      x.className += " responsive";
    } else {
      x.className = "navi";
    }
  }