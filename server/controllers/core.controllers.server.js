'use strict';

var path = require('path');


exports.renderIndex = function(req, res) {
  //serve up static index.html
  res.sendFile(path.resolve('./client/index.html'));
};




//use an ORM inside these functions? If not we need models.
exports.renderPosts = function(req, res) {
  //tell model to query the db for posts
    // need to res.json(results)
  r.table('posts').run().then(function(result) {
    // console.log(result);
  });
};

exports.storePost = function(req, res) {
  //tell model to send a post to the db
    //need to res.sendStatus(201)
  r.table('posts').insert(); //<----place the req data into the input to insert
};

exports.updatePost = function(req, res) {
  //tell model to update a post 
  r.table('posts').get().update().run(conn); //<----input value for get
};

exports.deletePosts = function(req, res) {
  //tell model to delete a post
  r.table("posts").get().delete().run(conn); //<----needs major attention
};