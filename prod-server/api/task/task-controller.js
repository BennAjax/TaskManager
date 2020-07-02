"use strict";

var _interopRequireWildcard = require("C:/Applications/HybridApps/taskmanager/node_modules/@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("C:/Applications/HybridApps/taskmanager/node_modules/@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.find");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;
exports.create = create;
exports.update = update;
exports.remove = remove;
exports.show = show;

var _moment = _interopRequireDefault(require("moment"));

var _userModel = _interopRequireDefault(require("../../model/user-model"));

var _taskModel = _interopRequireDefault(require("../../model/task-model"));

var auth = _interopRequireWildcard(require("../../services/auth-service"));

function index(req, res) {
  _taskModel.default.find({}, function (error, tasks) {
    if (error) {
      return res.status(500).json();
    }

    return res.status(200).json({
      tasks: tasks
    });
  }).populate('author', 'username', 'user');
}

function create(req, res) {
  var id = auth.getUserId(req);

  _userModel.default.findOne({
    _id: id
  }, function (error, user) {
    if (error && !user) {
      return res.status(500).json();
    }

    var task = new _taskModel.default(req.body.task);
    task.author = user._id;
    task.dueDate = (0, _moment.default)(task.dueDate);
    task.save(function (error) {
      if (error) {
        return res.status(500).json();
      }

      return res.status(201).json();
    });
  });
}

function update(req, res) {
  var id = auth.getUserId(req);

  _userModel.default.findOne({
    _id: id
  }, function (error, user) {
    if (error) {
      return res.status(500).json();
    }

    if (!user) {
      return res.status(404).json();
    }

    var task = new _taskModel.default(req.body.task);
    task.author = user._id;
    task.dueDate = (0, _moment.default)(task.dueDate);

    _taskModel.default.findByIdAndUpdate({
      _id: task._id
    }, task, function (error) {
      if (error) {
        return res.status(500).json();
      }

      return res.status(204).json();
    });
  });
}

function remove(req, res) {
  var id = auth.getUserId(req);
  ;

  _taskModel.default.findOne({
    _id: req.params.id
  }, function (error, task) {
    if (error) {
      return res.status(500).json();
    }

    if (!task) {
      return res.status(404).json();
    }

    if (task.author._id.toString() !== id) {
      return res.status(403).json({
        message: 'You are not allowed to delete another Users task'
      });
    }

    _taskModel.default.deleteOne({
      _id: req.params.id
    }, function (error) {
      if (error) {
        return res.status(500).json();
      }

      return res.status(204).json();
    });
  });
}

function show(req, res) {
  _taskModel.default.findOne({
    _id: req.params.id
  }, function (error, task) {
    if (error) {
      return res.status(500).json();
    }

    if (!task) {
      return res.status(404).json();
    }

    return res.status(200).json({
      tasks: task
    });
  });
}