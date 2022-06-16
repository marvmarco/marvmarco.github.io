document.getEventListener("DOMContentLoaded", ()=>{
    cv_path = "https://github.com/marvmarco/marvmarco.github.io/raw/master/cv.pdf";
    google_viewer = "https://docs.google.com/viewer?url="
    url = google_viewer + cv_path
    var cv_iframe = getElementById("cviframe")
    cv_iframe.href = url
    var cv_link = getElementById("cvlink")
    cv_link.href = cv_path
})
