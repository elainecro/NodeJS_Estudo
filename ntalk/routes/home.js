module.exports = function(app){
	var home = app.controllers.home;
	//subobjeto controllers existe por causa do express-load. Neste caso estamos nos referindo ao arquivo controllers/home.js
	app.get('/', home.index);
};