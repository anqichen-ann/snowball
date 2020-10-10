let express = require('express')
let axios = require('axios')

let app = express()
let options = {
    headers:{
        "Accept-Encoding": "gzip, deflate, br",
        "Cookie": "xq_a_token=3242a6863ac15761c18a8469b89065b03bd5e164; xqat=3242a6863ac15761c18a8469b89065b03bd5e164; xq_r_token=729679220e12a2fbd19b15c94e6b7624c5ea8702; xq_id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1aWQiOi0xLCJpc3MiOiJ1YyIsImV4cCI6MTYwNDgwMzAzMSwiY3RtIjoxNjAyMzI1MjA2NjE0LCJjaWQiOiJkOWQwbjRBWnVwIn0.cob6GjHNF1a2GErN65PXbMw6e2hWz9t7XlIA8IQK0ATfPFLYv1c4S_1U-yE314_rJlrXLqOhs7JCSr1bmrjGnMt7QTBnUVxvcrSCtTZTGCM8-VIaTW5kUiJ-h8OrvIB_PdRTVQKkhigXTfCxLCVvoYBbbvBzMP-cD0iXRa-0uH8GAstLuFrO37LU4qabMXx8aEVBPKZuIs66DshuPdINOZsZePuctgRNsvHno2mhKj0HqP47SORTord8DMIqojNnS0LkstTvVWc9vUwShYsxyz5gnqLBIrGPmuulJ5QRr0i9HSTCmGLVKIxzD3RyPCdK_IrU6xF-CC_BWuln7hmCnQ; u=381602325244048; device_id=24700f9f1986800ab4fcc880530dd0ed; Hm_lvt_1db88642e346389874251b5a1eded6e3=1602325246; Hm_lpvt_1db88642e346389874251b5a1eded6e3=1602325246"
    }
}

app.get('/', (req,res) => {
    res.send('appserver')
})

app.get('/api/index/stock', async (req,res) => {
    let requestURL = 'https://stock.xueqiu.com/v5/stock/realtime/quotec.json?symbol=SH000001,SZ399001,SZ399006,SH000688&_=1602332657145'
    let result = await axios.get(requestURL,options);
    res.json(result.data)
})

app.get('/api/index/hotStock', async (req,res) => {
    let type = req.query.type?req.query.type : 12
    let requestURL = `https://stock.xueqiu.com/v5/stock/hot_stock/list.json?size=8&_type=${type}&type=${type}`
    let result = await axios.get(requestURL,options);
    res.json(result.data)
})

app.get('/api/index/712', async (req,res) => {
    let size = req.query.size?req.query.size : 12
    let requestURL = `https://xueqiu.com/statuses/hot/listV2.json?since_id=-1&max_id=-1&size=${size}`
    let result = await axios.get(requestURL,options);
    res.json(result.data)
})

app.listen(8080, () => {
    console.log('sever start' , 'http://localhost:8080')
})