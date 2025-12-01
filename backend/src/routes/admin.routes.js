const express = require("express");
const router = express.Router();
const authController = require("../controllers/admin/authController");
const CityController = require("../controllers/admin/citycontroller");
const StateController = require("../controllers/admin/statecontroller");
const ZoneController = require("../controllers/admin/zonecontroller");
const ModuleCtrl = require('../controllers/admin/moduleController');
const ActionCtrl = require('../controllers/admin/actionController');
const RoleCtrl = require('../controllers/admin/roleController');
const UserCtrl = require('../controllers/admin/userController');


// authentication
router.post("/login", authController.login);
router.post("/send-otp", authController.sendOtp);
router.post("/verify-otp", authController.verifyOtp);

//
router.get('/modules', ModuleCtrl.listModules);
router.post('/modules', ModuleCtrl.createModule);
router.delete('/modules/:id', ModuleCtrl.deleteModule);


// actions
router.get('/actions', ActionCtrl.listActions);
router.post('/actions', ActionCtrl.createAction);


router.get('/roles/:roleId/permissions', RoleCtrl.getRolePermissions);
router.post('/roles/:roleId/permissions', RoleCtrl.assignPermissions);



// cities
router.get("/cities", CityController.getAllCities);
router.get("/cities/state/:state_id", CityController.getCitiesByState);
router.get("/cities/:id", CityController.getCityById);
router.get("/cities/:city_id/pincodes", CityController.getPincodesByCity);
router.post("/cities", CityController.createCity);
router.put("/cities/:id", CityController.updateCity);
router.patch("/cities/:id/status", CityController.updateCityStatus);
// router.delete("/cities/:id", CityController.deleteCity);

// states
router.get("/states", StateController.getStates);
router.get("/allstates", StateController.allStates);
router.get("/states/:id", StateController.getStateById);
router.post("/states", StateController.createState);
router.put("/states/:id", StateController.updateState);
router.delete("/states/:id", StateController.deleteState);


// zones
router.get("/zones", ZoneController.getAllZones);
router.get("/zones/:id", ZoneController.getZoneById);
router.post("/zones", ZoneController.createZone);
router.put("/zones/:id", ZoneController.updateZone);
router.post("/zones/:id/status", ZoneController.updateZoneStatus);
// router.delete("/zones/:id", ZoneController.deleteZone);

// other routes...
module.exports = router;
