const course=require("../models/course")
class SiteController{
    async home(req, res, next) {
      /*  try {
            const data = await course.find({});
            res.json(data)
        }  catch (err) {
            res.status(400).json({error: err});
    }*/
    course.find({}).then((course) => {
        course=course.map(value => value.toObject())
        res.render('home', { course })
    }).catch((error) => {
        next(error)
    })
}
    search(req, res) {
        res.render('search')
    }
}
module.exports=new SiteController()