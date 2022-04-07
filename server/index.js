const express = require('express');
const app = express();
const port = 3000;
const cartRoutes = require('./routes/cartRoutes.js');
const overviewRouter = require('./routes/overviewRoutes.js');
const productRoute = require('./routes/productRoutes.js');
const questionsRoutes = require('./routes/questionRoutes.js');
const relatedRoutes = require('./routes/relatedRoutes.js');
const reviewsRoutes = require('./routes/reviewsRoutes.js');
app.use(express.json())
app.use(express.static('dist'))

app.use('/products', productRoute)
app.use('/outfit', relatedRoutes)
app.use('/cart', cartRoutes)
app.use('/qa/questions', questionsRoutes)
app.use('/', reviewsRoutes)

// middleware for new get routes - lazy load refactor
app.use('/overview', overviewRouter)

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
})
