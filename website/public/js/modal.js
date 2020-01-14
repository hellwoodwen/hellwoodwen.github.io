/*
if variable galleryName === 0 the thumbnails only represents one picture
next and prev will jump and load the next element in the main gallery.
This kind of gallery needs variable "galleryUrl" to set the directory of the pictures

if is not, it means the thumbnail contains more than one element and the info
of the whole gallery in this section is in the variable galleryContent. Next and Prev
will jump to the next element in the inner elements of the thumbnail.
*/

/*
this project is using QQ video as platform for video storage.
The script provided by QQ is as follow

<iframe frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=[video code]" allowFullScreen="true"></iframe>
*/

const galleryButtonsList = document.querySelectorAll("div.project")
let loadedElementIndex = 0
let targetURL = null
const galleryUrlRoot =
  typeof gallContent == "undefined" ? galleryUrl : gallContent.generalURL
let selectedGalleryName = 0

galleryButtonsList.forEach(function(button, index) {
  button.addEventListener("click", function() {
    selectedGalleryName = button.dataset.galleryname
    let elementType = 0
    if (selectedGalleryName == "0") {
      loadedElementIndex = index
      loadElementURL = `${galleryUrlRoot}${button.dataset.picname}`
      elementType = "picture"
    } else {
      loadedElementIndex = 0
      const selectedGalleryContent = gallContent[selectedGalleryName]
      elementType = selectedGalleryContent.elements[0][0]
      loadElementURL =
        elementType === "video"
          ? selectedGalleryContent.elements[0][2]
          : `${galleryUrlRoot}${selectedGalleryContent.url}big/${selectedGalleryContent.elements[0][1]}`
    }
    launchModal(loadElementURL, loadedElementIndex, elementType)
  })
})

const launchModal = function(loadElementURL, loadedElementIndex, elementType) {
  modalWindow.className = ""
  modalWindow.classList.add("visible")
  modalWindow.classList.add("animated")
  if (selectedGalleryName != "0") {
    if (gallContent[selectedGalleryName].elements.length > 1) {
      generateSubGallNav(gallContent[selectedGalleryName])
      modalWindow.classList.add("multiElements")
    } else {
      document.querySelector("#modalNav li.prevBot").classList.add("hidden")
      document.querySelector("#modalNav li.nextBot").classList.add("hidden")
    }
  } else {
    modalWindow.classList.add("singleElement")
  }
  loadElement(
    loadElementURL,
    document.getElementById("picContainer"),
    elementType
  )
  if (gallContent[selectedGalleryName].explanation) {
    console.log("armar ventana de explicacion")
    const explWindow = document.createElement("div")
    explWindow.id = "modalExplWindow"
    explWindow.innerHTML = gallContent[selectedGalleryName].explanation
    modalWindow.classList.add("withExpl")
    modalWindow.appendChild(explWindow)
  }
}

const generateSubGallNav = function(galleryObject) {
  const subgalContainter = document.createElement("div")
  subgalContainter.id = "subgallery-nav"
  const subgalUlNav = document.createElement("ul")
  subgalUlNav.id = "subGalList"
  subgalContainter.appendChild(subgalUlNav)

  galleryObject.elements.forEach(function(element, index) {
    const liElement = document.createElement("li")
    if (index === 0) liElement.classList.add("actual")
    subgalUlNav.appendChild(liElement)

    const picURL = `${galleryUrlRoot}${galleryObject.url}th/th-${element[1]}`
    loadElement(picURL, liElement, "picture")
    liElement.addEventListener("click", function() {
      const loadElementURL =
        element[0] === "video"
          ? element[2]
          : `${galleryUrlRoot}${galleryObject.url}big/${element[1]}`
      loadElement(
        loadElementURL,
        document.getElementById("picContainer"),
        element[0]
      )
      document
        .querySelectorAll("#subgallery-nav li")
        .forEach(e => e.classList.remove("actual"))
      this.classList.add("actual")
      loadedElementIndex = index
    })
  })
  modalWindow.appendChild(subgalContainter)
}

const loadElement = function(loadElementURL, container, type) {
  container.innerHTML = ""
  picContainer.classList.add("loading")

  if (type === "picture") {
    const picture = new Image()
    picture.src = loadElementURL
    picture.onload = function() {
      container.appendChild(picture)
      container.classList.remove("loading")
    }
  } else if (type === "video") {
    const vidCont = document.createElement("iframe")
    vidCont.setAttribute("frameborder", "0")
    vidCont.setAttribute("allowFullScreen", "true")
    vidCont.setAttribute(
      "src",
      `https://v.qq.com/txp/iframe/player.html?vid=${loadElementURL}`
    )
    container.appendChild(vidCont)
    container.classList.remove("loading")
  }
}

/* -- modal window buttons actions -- */
document
  .querySelector("#modalNav li.closeBot")
  .addEventListener("click", function() {
    modalWindow.classList.toggle("visible")
    modalWindow.classList.toggle("animated")
    const subGallNav = document.querySelector("#subgallery-nav")
    if (subGallNav != null) modalWindow.removeChild(subGallNav)
    const explanWindow = document.querySelector("#modalExplWindow")
    if (explanWindow != null) modalWindow.removeChild(explanWindow)
    document.getElementById("picContainer").innerHTML = ""
    document.querySelector("#modalNav li.prevBot").classList.remove("hidden")
    document.querySelector("#modalNav li.nextBot").classList.remove("hidden")
  })

document
  .querySelector("#modalNav li.prevBot")
  .addEventListener("click", function() {
    let targetURL
    let elementType
    if (selectedGalleryName == 0) {
      loadedElementIndex =
        loadedElementIndex === 0
          ? galleryButtonsList.length - 1
          : loadedElementIndex - 1
      targetURL = `${galleryUrlRoot}${galleryButtonsList[loadedElementIndex].dataset.picname}`
      elementType = "picture"
    } else {
      const actualGallery = gallContent[selectedGalleryName]
      const botsSubGallery = document.querySelectorAll("#subgallery-nav li")
      loadedElementIndex =
        loadedElementIndex === 0
          ? actualGallery.elements.length - 1
          : loadedElementIndex - 1
      botsSubGallery.forEach(e => e.classList.remove("actual"))
      botsSubGallery[loadedElementIndex].classList.add("actual")
      elementType = actualGallery.elements[loadedElementIndex][0]
      targetURL =
        elementType === "video"
          ? actualGallery.elements[loadedElementIndex][2]
          : `${galleryUrlRoot}${actualGallery.url}big/${actualGallery.elements[loadedElementIndex][1]}`
    }
    loadElement(targetURL, document.getElementById("picContainer"), elementType)
  })

document
  .querySelector("#modalNav li.nextBot")
  .addEventListener("click", function() {
    let targetURL
    let elementType
    if (selectedGalleryName == 0) {
      loadedElementIndex =
        loadedElementIndex === galleryButtonsList.length - 1
          ? 0
          : loadedElementIndex + 1
      targetURL = `${galleryUrlRoot}${galleryButtonsList[loadedElementIndex].dataset.picname}`
      elementType = "picture"
    } else {
      const actualGallery = gallContent[selectedGalleryName]
      loadedElementIndex =
        loadedElementIndex === actualGallery.elements.length - 1
          ? 0
          : loadedElementIndex + 1
      const botsSubGallery = document.querySelectorAll("#subgallery-nav li")
      botsSubGallery.forEach(e => e.classList.remove("actual"))
      botsSubGallery[loadedElementIndex].classList.add("actual")
      elementType = actualGallery.elements[loadedElementIndex][0]
      targetURL =
        elementType === "video"
          ? actualGallery.elements[loadedElementIndex][2]
          : `${galleryUrlRoot}${actualGallery.url}big/${actualGallery.elements[loadedElementIndex][1]}`
    }
    loadElement(targetURL, document.getElementById("picContainer"), elementType)
  })
