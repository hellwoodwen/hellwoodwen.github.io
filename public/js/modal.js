let actualIndexLoaded = 0
const projectList = document.querySelectorAll("div.project")
const modalWindow = document.querySelector("#modalWindow")

document
  .querySelector("#modalNav li.closeBot")
  .addEventListener("click", function() {
    modalWindow.classList.toggle("visible")
    modalWindow.classList.toggle("animated")
  })


const loadPic = function(picIndex) {
  modalWindow.classList.add('loading')
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
    modalWindow.classList.add("visible")
    modalWindow.classList.add('animated')
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
