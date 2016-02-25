 var toDoList = [];

 // Getting the information the user is putting in

 function getListFromDom(){
   var post = $('input[name="toDoList"]').val();
   return {
     post: post
   }
 }

 function addList(newList){
   toDoList.push(newList);
 }

 function getLists(){
   return toDoList;
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

 function deleteList(idx){
   toDoList.splice(idx, 1);
 }

 $(document).ready(function(){
   addAllLists(toDoList);

// this is to print out user info on page after clicking submit button

$('.submitButton').on('click', function(event){
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
})

 });
