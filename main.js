 var toDoList = [];

 function addList(newList){
   toDoList.push(newList);
 }

 function getLists(){
   return toDoList;
 }

 function deleteList(idx){
   toDoList.splice(idx, 1);
 }

 function editList(idx, newList){
   toDoList.splice(idx, 1, newList);
 }

 // Getting the information the user is putting in

 function getListFromDom(){
   var post = $('input[name="toDoList"]').val();
   return {
     post: post,
     complete: false
   }
 }

 function addListToDom(newList, templateStr, $target){
   var tmpl = _.template(templateStr);
   $target.append(tmpl(newList));
 }

 function addAllLists(arr){
   $('.toDoContainer').html('');
   _.each(getLists(), function(element, idx){
     element.idx = idx;
     addListToDom(element,templates.toDoList,$('.toDoContainer'));
   });
 }

 $(document).ready(function(){
   addAllLists(toDoList);

// this is to print out user info on page after clicking submit button

$('form').on('submit', function(event){
  event.preventDefault();
  var newList = getListFromDom();
    addList(newList);
    addAllLists(getLists());
    $('input[name="toDoList"]').val('');
});

// to use the delete button and delete a list item

$('.toDoContainer').on('click', '.delete-post', function(event){
  var idx = $(this).closest('div').data('idx');
  deleteList(idx);
  addAllLists(getLists());
});

// to double-click on the list item to edit it does not work right now

// $('.toDoContainer').on('dblclick', .data('idx'), function(event){
//   var editedList = $(this).parent().data('idx')
//   editList(editedList,{idx: editedList, content: $('input[name="toDoList"]').val()})
//   addAllLists(getLists());
// });

 });
