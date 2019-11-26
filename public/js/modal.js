document
  .querySelector("#modalNav li.closeBot")
  .addEventListener("click", function() {
    document.querySelector("#modalWindow").classList.toggle("visible")
  })

let actualIndexLoaded = 0
const projectList = document.querySelectorAll("div.project")

const loadPic = function(picIndex) {
  document.getElementById("picContainer").innerHTML = ""
  objImage = new Image()
  objImage.src = `/public/pics/big/${projectList[picIndex].dataset.picname}.jpg`
  objImage.onload = function() {
    document.getElementById("picContainer").appendChild(objImage)
    actualIndexLoaded = picIndex
  }
}

projectList.forEach(function(singularProject, index) {
  singularProject.addEventListener("click", function() {
    document.querySelector("#modalWindow").classList.add("visible")
    // and remove 'faded-out' in order to fade-in our element
    requestAnimationFrame(() => {
      document.querySelector("#modalWindow").classList.remove("faded-out")
    })
    //document.querySelector("#modalWindow").classList.toggle("visible")
    loadPic(index)
  })
})

document
  .querySelector("#modalNav li.prevBot")
  .addEventListener("click", function() {
    const loadPicIndex =
      actualIndexLoaded === 0 ? projectList.length - 1 : actualIndexLoaded - 1
    loadPic(loadPicIndex)
  })

document
  .querySelector("#modalNav li.nextBot")
  .addEventListener("click", function() {
    const loadPicIndex =
      actualIndexLoaded === projectList.length - 1 ? 1 : actualIndexLoaded + 1
    loadPic(loadPicIndex)
  })
