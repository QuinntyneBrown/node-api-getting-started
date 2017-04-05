/*
 * GET home page.
 */
import express = require('express');
const router = express.Router();

router.get('/', (request: express.Request, response: express.Response) => {
    response.json({
        version: "1.0.0-alpha.0"
    });
});

export default router;