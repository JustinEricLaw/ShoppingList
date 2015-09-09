function addNewItem() {
  var newItem = $('#input').val();
  var newList = '<li><div class="click"><span class="box"></span><span>' + newItem + '</span></div><a href="#" class="delete">&times;</a></li>'; 

  // Don't allow blank or super long newItem
  if (newItem.length === 0 || newItem.length > 33) {
    return false;
  }
  // Append new list item to ul
  $('ul').append(newList);
  // Clear input after submit
  $('#input').val('');
};


$(document).ready(function () {  

  // Enter key submits newItem
  $('.item-input').keyup(function(e) {
    if (e.keyCode === 13) { // enter key
      addNewItem();
    }
  });

  // Submit newItem (clicking on button)
  $('.plus-container').on('click', function(){
    addNewItem();  
  });


  // Cross off list items
  $('ul').on('click', '.click', function() {
    $(this).toggleClass('crossed-off');
    $(this).children('.box').toggle();
  });

  // Clicking X button deletes item
  $('ul').on('click', '.delete', function() {
    $(this).parent().remove();
  });

});