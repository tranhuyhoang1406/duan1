const newsRouter=require('./news.js')
const siteRouter=require('./site.js')
const courseRouter=require('./course.js')

function route(app){
    
      app.use('/news', newsRouter)
      app.use('/', siteRouter)
      app.use('/courses', courseRouter)

}

module.exports=route