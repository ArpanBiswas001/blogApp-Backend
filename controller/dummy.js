
exports.dummy=async(req,res)=>{
    try {
        res.send('this is a dummy controller')
    } catch (error) {
        console.log('error')
        console.error()
    }
}