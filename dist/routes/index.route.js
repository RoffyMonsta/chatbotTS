"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_controller_1 = __importDefault(require("../controllers/index.controller"));
var router = express_1.Router();
router.route('/')
    .get(index_controller_1.default);
exports.default = router;
