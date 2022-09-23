/* -------------------------------- ROUTERS -------------------------------- */
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');

/* ------------------------------- MIDDLEWARE ------------------------------- */
const { restoreUser } = require('../../utils/auth.js');


/* --------------------------------- ROUTES --------------------------------- */
router.use(restoreUser);
router.use('/session', sessionRouter);
router.use('/users', usersRouter);

/* ------------------------------ TEST ROUTES ------------------------------ */
router.post('/test', function (req, res) {
    res.json({ requestBody: req.body });
});

// GET /api/set-token-cookie
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
router.get('/set-token-cookie', async (_req, res) => {
    const user = await User.findOne({
        where: {
            username: 'demouser1'
        }
    });
    setTokenCookie(res, user);
    return res.json({ user });
});

// GET /api/restore-user
router.get(
    '/restore-user',
    (req, res) => {
        return res.json(req.user);
    }
);

// GET /api/require-auth
const { requireAuth } = require('../../utils/auth.js');
router.get(
    '/require-auth',
    requireAuth,
    (req, res) => {
        return res.json(req.user);
    }
);

module.exports = router;
