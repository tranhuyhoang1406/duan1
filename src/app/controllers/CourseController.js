const course=require("../models/course")
class CourseController{
    index(req, res){
        course.findOne({slug: req.params.slug}).then(course => {
            res.json(course)
        })
    }
    show(req, res){
        res.render('create')
    }
    store(req, res){
        const data=new course(req.body)
        data.save().then(()=>{
            res.redirect('/')
        })
    }
}
module.exports=new CourseController()