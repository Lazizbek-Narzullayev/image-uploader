const dropArea = document.querySelector('#drop-area')
const inputFile = document.querySelector('#input-file')
const imageView = document.querySelector('.img-view')
const selectImage = document.querySelector('.select-image')

inputFile.addEventListener("change", uploader);
function uploader(){
    let imglink=URL.createObjectURL(inputFile.files[0]);
    imageView.style.backgroundImage = `url(${imglink})`;
    imageView.textContent="";
    imageView.style.border=0;
} 

dropArea.addEventListener("dragover",function(e){
    e.preventDefault();
})
dropArea.addEventListener("drop", function(e){
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploader();
})
selectImage.addEventListener("click", function(){
    inputFile.click();
})