document.addEventListener("DOMContentLoaded", ()=>{
    body = document.body
    
    // header
    header = document.createElement("h1")
    header.appendChild(document.createTextNode("Marco C"))
    body.appendChild(header)

    // paragraph
    desc = document.createElement("p")
    desc.innerHTML = "Student of computer engineering at the university of Rome"
    body.appendChild(desc)

    // CV CONSTANTS
    cv_url = "https://github.com/marvmarco/marvmarco.github.io/raw/master/cv.pdf"
    google_viewer = "https://docs.google.com/viewerng/viewer?url="
    // URL FOR GOOGLE VIEWER WITH CV
    url_gv_cv = google_viewer + cv_url //  + "&embedded=true"

    
    cvBar = document.createElement("div")
    cvBar.className = "cvBar"
    
    viewCVelem = document.createElement("a")
    viewCVelem.href = url_gv_cv
    viewCVelem.innerHTML = "View CV"

    cvBar.appendChild(viewCVelem)

    // little space between CV links
    cvBar.appendChild(document.createElement("p").appendChild(document.createTextNode(" ")))

    downloadCVelem = document.createElement("a")
    downloadCVelem.href = cv_url
    downloadCVelem.innerHTML = "Download CV"
    
    cvBar.appendChild(downloadCVelem)

    body.appendChild(cvBar)

})
