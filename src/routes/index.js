const { Router } =require('express');
const router = Router();

router.get('/', (req, res)=>{
    res.json({'Title':'HEllo World'});
});

router.get('/test', (req, res)=>{
    const data = {
        "name" : "Isma",
        "website": "prueba.com"
    };
    res.json(data);
});

module.exports = router;