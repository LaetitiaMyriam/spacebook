var posts = [];
var id = 0;

$('.add-post').on('click', function (e) {
  e.preventDefault();
  
  var string = $('#post-name').val();
  id += 1;

  createNewPost(string, id);
  addAllposts();
});


var createNewPost = function (string, id) {
  console.log("createNewPost");
  var post = {
    str: string,
    id: id
  };

  posts.push(post);
};

var addAllposts = function () {
  $('.posts').find('p').remove();

  for (var i = 0; i < posts.length; i++) {
    $('.posts').append('<p class="post" data-id="i"> <a href="#" class="remove">remove</a>' + ' ' + posts[i].str + ' ' + posts[i].id + '</p>');
  }
    
};

$('.posts').on('click', '.remove' , function () {
    
      $(this).parent().remove();
});



















