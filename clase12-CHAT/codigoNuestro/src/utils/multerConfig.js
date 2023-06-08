const multer = require('multer')

//destino de nuestros archivos
const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        console.log(__dirname)
        cb(null, `${__dirname}/public/uploads`)
    },
    filename: function (req, file, cb) {
        console.log('file:', file)
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})
const uploader = multer({
    storage,
    onError: function (err, next) {
        console.log(err)
        next()
    }
})

module.exports = { uploader }