let actualIndexLoaded = 0
let selectedGallery = null
const projectList = document.querySelectorAll("div.project")
const modalWindow = document.querySelector("#modalWindow")

/* modal types:
- singlePicture:
  shows only one picture per time, use the index position of the
  element "div.project" to locate actual, next and previous pictures

- multiElements:
  shows a sub-gallery in the modal window, adding the posibility to
  navegate with thumbs. Uses a Json object to navegate elements.
*/

const launchModal = function(loadTarget, index) {
  modalWindow.classList.add("visible")
  modalWindow.classList.add("animated")
  if (galleryType != "singlePicture") {
    const subgalContainter = document.createElement("div")
    subgalContainter.id = "subgallery-nav"
    const subgalUlNav = document.createElement("ul")
    subgalUlNav.id = "subGalList"
    subgalContainter.appendChild(subgalUlNav)

    gallContent[selectedGallery].pictures.forEach(function(pic, index) {
      const liElement = document.createElement("li")
      if (index === 0) liElement.classList.add("actual")
      subgalUlNav.appendChild(liElement)
    })
    modalWindow.appendChild(subgalContainter)

    gallContent[selectedGallery].pictures.forEach(function(pic, index) {
      const newPic = new Image()
      newPic.src = `${gallContent.generalURL}${gallContent[selectedGallery].url}th/th-${pic}`
      newPic.onload = function() {
        document
          .querySelectorAll("#subgallery-nav li")
          [index].appendChild(newPic)
      }
    })
  }
  loadPic(loadTarget, index)
}

const loadPic = async function(loadTarget, picIndex) {
  console.log(loadTarget,picIndex)
  document.getElementById("picContainer").innerHTML = ""
  objImage = new Image()
  objImage.src = loadTarget
  objImage.onload = function() {
    document.getElementById("picContainer").appendChild(objImage)
    actualIndexLoaded = picIndex
  }
}

projectList.forEach(function(singularProject, index) {
  singularProject.addEventListener("click", function() {
    let targetURL = ""
    let indexActual = 0
    if (singularProject.dataset.gallerytype === "singlePic") {
      targetURL = `${galleryUrl}${singularProject.dataset.picname}.jpg`
      indexActual = index
    } else {
      selectedGallery = singularProject.dataset.galleryname
      const actualObject = gallContent[selectedGallery]
      targetURL = `${galleryUrl}${actualObject.url}big/${actualObject.pictures[0]}`
      indexActual = 0
    }
    launchModal(targetURL, indexActual)
  })
})

/* -- modal window buttons actions -- */
document
  .querySelector("#modalNav li.closeBot")
  .addEventListener("click", function() {
    modalWindow.classList.toggle("visible")
    modalWindow.classList.toggle("animated")
    const subGallNav = document.querySelector("#subgallery-nav")
    if (subGallNav != null) modalWindow.removeChild(subGallNav)
  })

document
  .querySelector("#modalNav li.nextBot")
  .addEventListener("click", function() {
    let loadPicIndex = ""
    let targetURL = ""
    if (galleryType === "singlePicture") {
      loadPicIndex =
        loadPicIndex === projectList.length + 1 ? 1 : actualIndexLoaded + 1
      targetURL = `${galleryUrl}${projectList[loadPicIndex].dataset.picname}.jpg`
    } else {
      loadPicIndex =
        actualIndexLoaded === gallContent[selectedGallery].pictures.length - 1
          ? 1
          : actualIndexLoaded + 1
      targetURL = `${gallContent.generalURL}${gallContent[selectedGallery].url}big/${gallContent[selectedGallery].pictures[actualIndexLoaded]}`
    }
    loadPic(targetURL, loadPicIndex)
  })

document
  .querySelector("#modalNav li.prevBot")
  .addEventListener("click", function() {
    const loadPicIndex =
      actualIndexLoaded === 0 ? projectList.length - 1 : actualIndexLoaded - 1
    const targetURL = `${galleryUrl}${projectList[loadPicIndex].dataset.picname}.jpg`
    loadPic(targetURL, loadPicIndex)
  })

/* -- modal window actions end -- */
