// PICAS el numero esta presente pero no esta en la posicion
// FIJAS el numero esta en el lugar correcto

var uniqueRandoms = [];
var range_number = 10;
var rand_number=[];
var counter_picas = 0;
var counter_fijas = 0;
var counter = [];
var numero





// mensaje emegenter
function sweet(){
  swal({
    title: "¡Felicitaciones!",
    text: "¡Ganaste!",
    icon: "success",
    button: "Jugar Nuevamente",
  }).then((value) => {
    location.reload();
  });
}
// numero aleatorio-----------------------------------------------
function makeUniqueRandom() {
  // refill the array if needed
  if (uniqueRandoms == "") {
    for (var i = 0; i < range_number; i++) {
      uniqueRandoms.push(i);
    }
  }
  var index = Math.floor(Math.random() * uniqueRandoms.length);
  var val = uniqueRandoms[index];
  // now remove that value from the array
  uniqueRandoms.splice(index, 1);
  return val;
}
for (var i = 0; i < 4; i++) {
  rand_number+= makeUniqueRandom();
}
console.log(rand_number);

// numeros repetidos

function repeated(number) {
var  number = number.split("").sort(function(a, b){return a - b});
for (var i = 1; i < number.length; i++) {
  if (number[i] === number[i-1]) {
    return true
  }
}
}
// comparador ------------------------------------------------

function comparator(number,rand_number) {
  for (var i = 0; i < number.length; i++) {
    if (number.includes(rand_number[i])) {
      counter_picas += 1 ;
    }
    if (number[i] === rand_number[i]) {
      counter_fijas += 1 ;
    }
  }
  if (counter_fijas >0) {
    counter_picas = counter_picas - counter_fijas;
  }
}

// jquery

$("#new-number").keyup(function(e) {
  var number_user = $(this).val();
  $(this).removeClass('error');
  $("span").removeClass('error_text');
  if(e.which == 13) {
    if (number_user.length < 4 || number_user.length > 4){
      $(this).addClass('error');
      $(".cuatro_numeros").addClass('error_text');
    }else if (repeated(number_user)) {
      $(this).addClass('error');
      $(".cuatro_numeros").addClass('error_text');
      $(".diferentes").addClass('error_text');
    }else {
      comparator(number_user,rand_number)
      $('.number_add').append('<tr><td>'+ number_user +'</td> <td>'+ counter_picas +'</td> <td>'+ counter_fijas +'</td></tr>');
      if (number_user === rand_number) {
        sweet()
      };
      $(this).val("");
      counter_fijas = 0;
      counter_picas = 0;
    };
  };
});
