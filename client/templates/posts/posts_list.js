Template.postsList.helpers({
  posts: function() {
  	/*
	Find & Fetch
	In Meteor, find() returns a cursor, which is a reactive data source. When we want to log its contents, we can then use fetch() on that cursor to transform it into an array .
	
	Within an app, Meteor is smart enough to know how to iterate over cursors without having to explicitly convert them into arrays first. This is why you won't see fetch() that often in actual Meteor code (and why we didn't use it in the above example).
  	*/
  	return Posts.find();
  }
});