 var toDoList = [];

 // Getting the information the user is putting in

 function getListFromDom(){
   var name = $('input[name="toDoList"]').val();
   return {
     name: name,
   }
 }

 function addList(newList){
   toDoList.push(newList);
 }

 function getLists(){
   return toDoList;
 }

 function addListToDom(newList, templateStr, $target){
   var tmpl = _.template(templatesStr);
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

$('.submitButton').on('click', function(event){
  event.preventDefault();
  var newListSubmit = getListFromDom();
    addList(newList);
});

 });

//
// function deletePost(idx){
//   toDoList.splice(idx, 1);
// }
//
// function editPost(idx){
//   //fill in
// }
//
//
// $(document).ready(function(){
//   addAllPosts(toDoList);
//
//   $('form').on('submit', function(event){
//     event.preventDefault();
//     var newPost = getPostFromDom();
//     console.log(newPost);
//     addPost(newPost);
//     addAllPosts(getPosts());
//     $('input').val('');
//   });
//
//   $('section').on('click', '.delete-post', function(event){
//     var idx = $(this).closest('article').data('idx');
//     deletePost(idx);
//     addAllPosts(getPosts());
//   });
// });
