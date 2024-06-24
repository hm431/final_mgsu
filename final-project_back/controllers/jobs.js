const Machines = require('../models/weekly_daily_schedule');

module.exports.getMachins = (req, res, next) => {
  Machines.find({})
    .then((machine) => res.send({ data: machine }))
    .catch((err) => next(err));
};
module.exports.getChart  = (req, res, next) => {
  Machines.find({})
    .then((machine) => res.send({ data: machine }))
    .catch((err) => next(err));
};

module.exports.getCalendar  = (req, res, next) => {
  Machines.find({})
    .then((machine) => res.send({ data: machine }))
    .catch((err) => next(err));
};

module.exports.getStatement  = (req, res, next) => {
  Machines.find({})
    .then((machine) => res.send({ data: machine }))
    .catch((err) => next(err));
};
