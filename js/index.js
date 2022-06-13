

function SetValueToId(id,v){
    document.getElementById(id).innerHTML = v;
 }
 
 function addToCart(id){
     var qty = $('#qty'+id).val();
     localStorage.setItem(id,JSON.stringify({'Qty':qty}));
 
     var abc = 0;
     for (var i = 0;localStorage.length > i;i++){
         // console.log(JSON.parse(Object.entries(localStorage)[i][1]).Qty);
       abc += parseInt(JSON.parse(Object.entries(localStorage)[i][1]).Qty);
      }
     document.getElementById('shopping').innerHTML = abc;  
    
 
    }
     
    