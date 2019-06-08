$(document).ready(function(){

    // ------- GoTopScroll --------
    const arrowTop = document.getElementById('arrow-top');
    arrowTop.addEventListener('click', () => window.scrollTo({
        top:0,
        behavior: 'smooth',
      }));

    // ------- Set CSS position selected soccer pitch -------
    $('.position-image img').click(function () {
        let positionImgs = $("#position");
        let alt = $(this).attr("alt");
        let currentImg = $(this);
        let othersImgs = $("img");
        
        // --- When a border is added to a img, remove border to the rest ---
        switch(alt){
            case "1":
            positionImgs.val("Portero");
            currentImg.css({"border": "3px solid yellow", "border-radius": "50%"});
            othersImgs.not( $(this) ).css("border", "none");
                break;
            case "2":
            positionImgs.val("LatIzq");
            currentImg.css({"border": "3px solid yellow", "border-radius": "50%"});
            othersImgs.not( $(this) ).css("border", "none");
                break;
            case "3":
            positionImgs.val("Central");
            currentImg.css({"border": "3px solid yellow", "border-radius": "50%"});
            othersImgs.not( $(this) ).css("border", "none");
                break;
            case "4":
            positionImgs.val("Central");
            currentImg.css({"border": "3px solid yellow", "border-radius": "50%"});
            othersImgs.not( $(this) ).css("border", "none");
                break;
            case "5":
            positionImgs.val("LatDer");
            currentImg.css({"border": "3px solid yellow", "border-radius": "50%"});
            othersImgs.not( $(this) ).css("border", "none");
                break;
            case "6":
            positionImgs.val("Medio");
            currentImg.css({"border": "3px solid yellow", "border-radius": "50%"});
            othersImgs.not( $(this) ).css("border", "none");
                break;
            case "7":
            positionImgs.val("MedioDef");
            currentImg.css({"border": "3px solid yellow", "border-radius": "50%"});
            othersImgs.not( $(this) ).css("border", "none");
                break;
            case "8":
            positionImgs.val("Medio");
            currentImg.css({"border": "3px solid yellow", "border-radius": "50%"});
            othersImgs.not( $(this) ).css("border", "none");
                break;
            case "9":
            positionImgs.val("ExtremoIzq");
            currentImg.css({"border": "3px solid yellow", "border-radius": "50%"});
            othersImgs.not( $(this) ).css("border", "none");
                break;
            case "10":
            positionImgs.val("ExtremoDer");
            currentImg.css({"border": "3px solid yellow", "border-radius": "50%"});
            othersImgs.not( $(this) ).css("border", "none");
                break;
            case "11":
            positionImgs.val("Delantero");
            currentImg.css({"border": "3px solid yellow", "border-radius": "50%"});
            othersImgs.not( $(this) ).css("border", "none");
                break;
            default:
            console.log("petaso");
        }
    });







});






// function readURL(input) {
//     if (input.files && input.files[0]) {
//       var reader = new FileReader();
//       reader.onload = function (e) {
//         $('#blah')
//           .attr('src', e.target.result)
//           .width(90)
//           .height(90);
//       };
//       reader.readAsDataURL(input.files[0]);
      
//       let valImage = $('#image');
//       valImage.val( "../images/" + input.files[0].name);
//     }
// }



