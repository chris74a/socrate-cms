var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	var page = req.params.page===undefined?"index":req.params.page;
	console.log("page: "+page);
	// Render the view
	view.render(page);
};
