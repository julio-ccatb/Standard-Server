const crypto = require('crypto')
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {

        cb(null, './resources/images');

    },
    filename: (req, file, cb) => {

        try {

            let arr = file.originalname.split(".");
            let ext = arr[arr.length - 1]

            cb(null, `${crypto.randomBytes(18).toString('hex')}.${ext}`);

        } catch (err) {

            throw err

        }

    }
})

const limits = {
    fileSize: 1024 * 1024 * 5
}

const fileFilter = (req, file, cb) => {

    if (file.mimetype !== 'image/jpeg') {

        cb(null, false)

    } else {

        cb(null, true);

    }
}

const upload = multer({
    storage,
    limits,
    fileFilter
});

module.exports.upload = upload;