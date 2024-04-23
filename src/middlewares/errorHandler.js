const errorHandler=(err,req,res,next)=>{
    console.log("hata yakalandı")
    const statusCode = res.errorStatusCode || 500
    res.status(statusCode).send({
        error:true,
        messge:err.message,
        s:statusCode,
        cause: err.cause
    })
}

module.exports=errorHandler