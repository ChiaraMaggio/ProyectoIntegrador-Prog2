var express = require('express');
var router = express.Router();
let multer = require("multer");
let path = require("path");
const usersController = require('../controllers/usersController');

/* Configuración multer */
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/images/avatars")); /* indica dónde se guarda el archivo */
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
})

var upload = multer({storage: storage});


router.get("/register", usersController.register);
router.post("/register", upload.single("avatar"), usersController.registerStore); /* parámentro entre la ruta y el controlador que hace referencia al archivo que se envía por el método post */

router.get("/login", usersController.login);
router.post("/login", usersController.loginStore);

router.post("/logout", usersController.logout);

router.get('/profile/:id', usersController.profile);

router.get('/profileedit/:id', usersController.profileEdit);
router.post("/profileedit/:id", usersController.profileEditStore);


/* Rutas followers
router.get('/profile/follower/:id', usersController.profileFollower);
router.post('/profile/follower/:id', usersController.profileFollowerStore); */
 


module.exports = router;
