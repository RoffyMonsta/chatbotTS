"use strict";
exports.__esModule = true;
var express_1 = require("express");
var index_controller_1 = require("../controllers/index.controller");
var router = express_1.Router();
router.route('/')
    .get(index_controller_1["default"]);
exports["default"] = router;
