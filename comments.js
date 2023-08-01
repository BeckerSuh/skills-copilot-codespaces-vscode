// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { randomBytes } = require('crypto');
const axios = require('axios');
// Middleware
app.use(bodyParser.json());
app.use(cors());
// Database
const commentsByPostId = {}