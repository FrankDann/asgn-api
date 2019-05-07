var express = require('express');
var router = express.Router();

var asgnController = require('../controllers/asgn-controller');

// POST
router.post('/assignment', asgnController.AddAsgn);
// GET singular
router.get('/assignment/:assignment', asgnController.ShowAsgn);
// GET all
router.get('/assignment', asgnController.ListAsgn);
// PUT
router.put('/assignment', asgnController.UpdateAsgn);
// DELETE
router.delete('/assignment', asgnController.DeleteAsgn);

module.exports = router;