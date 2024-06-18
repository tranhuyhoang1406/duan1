class NewsController{
    //GET /news
    index(req, res){
        res.render("news")
    }
    show(req, res){
        res.send("Hello from new page")
    }
}

module.exports=new NewsController