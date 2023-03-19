// date time

async function display_ct7() {
    let url = "https://ipinfo.io/json?token=d29c1d682e4273";
    let response = await fetch(url);
    let data = await response.json();
    // mark.innerHTML = ;
  
    var x = new Date();
    var ampm = x.getHours() >= 12 ? " PM" : " AM";
    hours = x.getHours() % 12;
    hours = hours ? hours : 12;
    hours = hours.toString().length == 1 ? 0 + hours.toString() : hours;
  
    var minutes = x.getMinutes().toString();
    minutes = minutes.length == 1 ? 0 + minutes : minutes;
  
    var seconds = x.getSeconds().toString();
    seconds = seconds.length == 1 ? 0 + seconds : seconds;
  
    var month = (x.getMonth() + 1).toString();
    month = month.length == 1 ? 0 + month : month;
  
    var dt = x.getDate().toString();
    dt = dt.length == 1 ? 0 + dt : dt;
  
    var x1 = dt + "/" + month + "/" + x.getFullYear();
    x1 =
      x1 +
      " - " +
      hours +
      ":" +
      minutes +
      " " +
      ampm +
      "&nbsp;- " +
      data.city +
      ", " +
      data.region +
      ", " +
      data.country;
    document.getElementById("ct7").innerHTML = x1;
    display_c7();
  }
  function display_c7() {
    var refresh = 1000;
    mytime = setTimeout("display_ct7()", refresh);
  }
  display_c7();


$(document).ready(function(){

  $('#cart').hide();

  $(".fa fa-shopping-cart").mouseenter(function(){
    $('#cart').show();
  })
  $("#cart").mouseleave(function(){
    $("#cart").hide();
  })

  var cart_item_count = 0;
  $('.order_btn').click(function(){
    cart_item_count++;
    var img_src = $(this).parents(".product").sibling("img").attr("src");
    var title = $(this).parents(".d-flex").sibling(".d-flex").find(".p-name").text();
    var price = $(this).parents(".d-flex").sibling(".d-flex").find("span:nth-child(2)").text();


    var cart_item = `

      <div class="main d-flex p-3 border border-left-0 border-right-0 border-top-0">
      <div class="col-md-3 border border-left-0 border-top-0 border-bottom-0">
      <img src=$(img_src) class="w-100" alt=""/>
      </div>

      <div id="title" class="col-md-3 d-flex flex-wrap align-content-center">
      <h6 style="font-size:13px;">$(title)</h6>
      </div>

      <div class="col-md-3 d-flex flex-wrap align-content-center">
      <span class="mx-2"> 1 </span>
      </div>

      <div class="col-md-2 d-flex flex-wrap align-content-center" id="t_price">
      <h6 class="mt-2 d-flex"><span></span>$(Price)</h6
      </div>

      
      </div>
    `




  })

})

// This Is counter

const countE1 = document.getElementById("count");
countvisits();


function countvisits() {
  fetch('https://api.countapi.xyz/update/papyrus/counter/?amount=1')
  .then((res) => res.json())
  .then((res) => {
    countE1.innerHTML = res.value;
  });
}




// This is ContectUs js

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});



var cart = document.getElementById("cart");
cart.innerHTML = Number(cart.innerHTML);
cart.innerHTML = 0;
function add() {
  cart.innerHTML++;
}