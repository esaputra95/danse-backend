const fetch = require("node-fetch");
const queryString = require('query-string');

const findData = async (req, res)=>{    
    try{
        const query = req.query;
        const response = await fetch(`http://dev3.dansmultipro.co.id/api/recruitment/positions.json?${
            queryString.stringify(query)
        }`);
        const data = await response.json();
        let newData = [];
        for (let index = 0; index < data.length; index++) {
            if(data[index]){
                newData = [...newData, data[index]];
            }
        }
        res.status(200).json({
            code:1,
            message: "Successfully get data User",
            data: newData
        })
    }catch(err){
        console.log({err});
        res.status(500).json({
            code: -1,
            message: "Error",
            data: err
        })
    }
}

const findDetail = async (req, res) => {
    try{
        const {id} = req.params;
        const response = await fetch(`http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`);
        const data = await response.json();
        res.status(200).json({
            code:1,
            message: "Successfully get data User",
            data: data
        })
    }catch(err){
        console.log({err});
        res.status(500).json({
            code: -1,
            message: "Error",
            data: err
        })
    }
}


module.exports = { findData, findDetail };