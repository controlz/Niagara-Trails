
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.render('map', { title: 'Map Page', page_name: 'map' });
};