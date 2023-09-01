const Feed = require("../models/feed");

const feed_index = (req, res) =>{
    Feed.find().sort({createdAt: -1})
        .then(result => {
            res.render("index", {title: "All feeds", feeds: result})
        })
        .catch(err => console.log(err));
};

const feed_create_get = (req, res) =>{
    res.render("index", { title: "Create a New  feed"});
};

const feed_create_post = (req, res) =>{
    const feed = new Feed(req.body);

    feed.save()
        .then(result =>{
            res.redirect("/feed")
        })
        .catch(err => console.log(err));
};

const feed_details = (req, res) =>{
    const id = req.params.id;
    Feed.findById(id)
        .then(result =>{
            res.render("details", {feed: result, title: "feed Details"});
        })
        .catch(err => {
            res.status(404).render("404", {title:"Post not found"});
        });
};

const feed_edit_get = (req, res) =>{
    const id = req.params.id;
    Feed.findById(id)
        .then(result =>{
            res.render("edit", {feed: result, title: "Edit Post"});
        })
        .catch(err => {
            res.status(404).render("404", {title:"Post not found"});
        });
};

const feed_edit_post = (req, res) =>{
    const id = req.params.id;
    const {name, message} = req.body;
    Feed.findByIdAndUpdate(id, {name, message}, {new: true})
        .then(result =>{
            res.redirect("/feed")
        })
        .catch(err => console.log(err));
};

const feed_delete = (req, res) =>{
    const id = req.params.id;

    Feed.findByIdAndDelete(id)
        .then(result =>{
            res.json({redirect: "/feed"})
        })
        .catch(err => console.log(err));
};


    module.exports = {
    feed_index,
    feed_create_get,
    feed_create_post,
    feed_details,
    feed_delete,
    feed_edit_get,
    feed_edit_post
}