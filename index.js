document.addEventListener("DOMContentLoaded", ()=>{
    cv_url = "https://github.com/marvmarco/marvmarco.github.io/raw/master/cv.pdf"
    google_viewer = "https://docs.google.com/viewerng/viewer?url="
    // URL FOR GOOGLE VIEWER WITH CV
    url_gv_cv = google_viewer + cv_url //  + "&embedded=true"

    body = document.body
      
    viewCVelem = document.createElement("a")
    viewCVelem.href = url_gv_cv
    viewCVelem.innerHTML = "View CV"

    body.appendChild(viewCVelem)

    downloadCVelem = document.createElement("a")
    downloadCVelem.href = cv_url
    downloadCVelem.innerHTML = "Download CV"
    
    body.appendChild(downloadCVelem)

})
