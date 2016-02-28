var templates = {};

templates.toDoList = [
  // '<% if(completed) {%>',
  // '<div class="completed"',
  // '<%} else {%>',
  // '<div class="active"',
  // '<%} %>',
  '<div data-idx="<%= idx %>"><i class="fa fa-check-circle-o fa-2x" id="check"></i>',
  '<%= post %>',
  '<button type="button" name="Delete" class="delete-post">Delete</button>',
  // '<button type="button" name="Edit" class="editList"></button>',
  '</div>'
].join("")
