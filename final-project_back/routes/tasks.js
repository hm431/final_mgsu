const router = require('express').Router();
const { getMachins, getChart, getCalendar, getStatement } = require('../controllers/jobs');

router.get('/machins', getMachins);
router.get('/chart', getChart);
router.get('/calendar_schedule', getCalendar);
router.get('/statement_of_the_distribution', getStatement);

module.exports = router;