function newItem(){

//javascript
//1. Adding a new item to the list of items:
   let inputValue = $("#input").val();
   // console.log(inputValue);
   let list = $('#list');
   let li = $('<li></li>');
   li.append(inputValue);

   if (inputValue === '') {
     alert("You must write something!");
   } else {
     list.append(li);
   }

 //2. Crossing out an item from the list of items:
   function crossOut() {
 		li.toggleClass("strike");
 	}

 	li.dblclick(crossOut);

 //3(i). Adding the delete button "X":
   let crossOutButton = $("<crossOutButton></crossOutButton>");
 	crossOutButton.append(document.createTextNode("X"));
 	li.append(crossOutButton);

 	crossOutButton.click(deleteListItem);
 //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
   function deleteListItem(){
 		li.addClass("delete")
 	}
 // 4. Reordering the items:
   $('#list').sortable();

}
