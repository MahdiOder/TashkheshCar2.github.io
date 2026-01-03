function openNewAdsBox() {
    let box = document.getElementById("add-ads-holder")
    box.style.display = "block";
}
function closeNewAdsbox() {
    let box = document.getElementById("add-ads-holder")
    box.style.display = "none";
}
function showButoon(){
    let box =document.getElementById("perview")
    box.style.display= "inline-block";
    prompt("عکس خودرو شما ثبت شد  روی دکمه نتیجه کارشناسی کلیک کنید");
}
function HidenButoon(){
    let box =document.getElementById("perview")
    box.style.display= "none";
    location.reload();
   
}
function Hidenpargraf(){
    const box =document.getElementById("file-info")
    box.style.display="none";
}
function dropzonebox(){
  let box =document.getElementById("")
  box.style.display="inline-block";
}

/////////////
 const upload = document.getElementById('upload-file');
    const preview = document.getElementById('previews');
    upload.addEventListener('change', () => {
      const file = upload.files[0];
      if (file) {
        preview.src = URL.createObjectURL(file);
      }
    });

    function analyze() {
      if (!upload.files.length) {
        alert("لطفاً یک تصویر انتخاب کنید");
        return;
      }
    }

