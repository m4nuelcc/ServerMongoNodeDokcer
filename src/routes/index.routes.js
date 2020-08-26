const { Router } = require ('express');
const router = Router()

router.get ('/' , (req,res) => {
    res.send('hello word')
});

module.exports = router;