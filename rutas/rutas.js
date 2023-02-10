const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
	res.render('PortafolioRobertoCarlosYoxonCuj',{alert:false})
    
})

router.get('/cemas', (req,res)=>{
	res.render('cmas',{alert:false})
    
})

router.get('/csharp', (req,res)=>{
	res.render('csharp',{alert:false})
    
})
router.get('/java', (req,res)=>{
	res.render('java',{alert:false})
    
})
router.get('/JavaScript', (req,res)=>{
	res.render('JavaScript',{alert:false})
    
})
module.exports = router