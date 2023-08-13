window.onload = () => {
  const button = document.getElementById("btn");
  console.log(button);
  const applyAnimOnthis = document.getElementById("applyAnimOnthis");
  console.log(applyAnimOnthis);

  const thankyou = document.querySelector('#thankdiv');

  button.addEventListener("click", startAnim);

  function startAnim(e) {
    e.preventDefault();
    console.log("hitted");
    const isContain = applyAnimOnthis.classList.contains("rotateButton");
    console.log(isContain);
    if (!isContain) {
      applyAnimOnthis.classList.add("rotateButton");
      button.removeEventListener("click",startAnim);

      setTimeout(() => {
        // applyAnimOnthis.classList.remove("rotateButton");
        button.addEventListener("click", startAnim);
        applyAnimOnthis.style.display = 'none';
        thankyou.classList.add('thankyou')
        thankyou.style.width = '100%'
        thankyou.style.height = '100%'
        thankyou.style.visibility = 'visible'
      }, 2400);

      
    }
  }



};



