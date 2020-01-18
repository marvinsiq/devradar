const { Router } = require('express');
const DevController = require('./controllers/dev-controller');
const SearchController = require('./controllers/search-controller');

const routes = Router();


// Métodos HTTD: GET POST, PUT, DELETE
// Tipos de Parâmetros
// - Query Paramns -> request.query
// - Route Paramns -> request.paramns
// - Body -> request.body

routes.get('/', function(req, res) {
    res.send("Utilize /devs ou /search");
});

routes
    .route('/devs')
    .get(DevController.index)
    .post(DevController.store)
    .put(DevController.update)
    .delete(DevController.delete);

routes
    .route('/search')
    .get(SearchController.index);

module.exports = routes;