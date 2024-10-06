/*Creando el Taast de aviso para cambiar de página*/

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

/*Acceso a algunos elementos por su id*/

const pythonHover = document.getElementById("python")
const jsHover = document.getElementById("javascript")
const htmlHover = document.getElementById("html")
const bootstrapHover = document.getElementById("bootstrap")

/*Eventos de la sección Habilidades*/

  pythonHover.addEventListener('mouseover', () => {
  pythonHover.style.transform = "scale(1.01)";
  pythonHover.style.opacity = "0.7";
  pythonHover.style.color = "white";
  pythonHover.innerText = "PYTHON";
})
pythonHover.addEventListener('mouseout', () => {
  pythonHover.style.transform = "";
  pythonHover.style.opacity = "";
  pythonHover.style.color = "";
  pythonHover.innerText = "";
})

jsHover.addEventListener('mouseover', () => {
  jsHover.style.transform = "scale(1.01)";
  jsHover.style.opacity = "0.7";
  jsHover.innerText = "JAVASCRIPT";
  jsHover.style.color = "white"
})
jsHover.addEventListener('mouseout', () => {
  jsHover.style.transform = "";
  jsHover.style.opacity = "";
  jsHover.innerText = "";
  jsHover.style.color = "white"
})

htmlHover.addEventListener('mouseover', () => {
  htmlHover.style.transform = "scale(1.01)";
  htmlHover.style.opacity = "0.7";
  htmlHover.innerText = "HTML/CSS";
  htmlHover.style.color = "white"
})
htmlHover.addEventListener('mouseout', () => {
  htmlHover.style.transform = "";
  htmlHover.style.opacity = "";
  htmlHover.innerText = "";
  htmlHover.style.color = "white"
})

bootstrapHover.addEventListener('mouseover', () => {
  bootstrapHover.style.transform = "scale(1.01)";
  bootstrapHover.style.opacity = "0.7";
  bootstrapHover.innerText = "BOOTSTRAP";
  bootstrapHover.style.color = "white"
})
bootstrapHover.addEventListener('mouseout', () => {
  bootstrapHover.style.transform = "";
  bootstrapHover.style.opacity = "";
  bootstrapHover.innerText = "";
  bootstrapHover.style.color = ""
})