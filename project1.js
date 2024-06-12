
  


const clearBtn = document.getElementById('clearBtn');
clearBtn.addEventListener('click',clear);

function clear(){
  var clist =document.getElementsByClassName("check_box");
  console.log(clist.length);
  for (var i = 0; i < clist.length; ++i) {
    clist[i].checked = false; 
    console.log(clist);
  }
}

const chooseBtn = document.getElementById('chooseBtn');
chooseBtn.addEventListener('click',showSelectResult);



function showError() {
  console.log(err);
}
function finish() {
  console.log('Ajax 通信が終わりました');
}