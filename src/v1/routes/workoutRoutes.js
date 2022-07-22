const express = require("express");
const router = express.Router();
const workoutController = require('../../controllers/workoutController');
//  ${req.baseUrl}

router
  .get("/", workoutController.getAllWorkouts)  // Llamo controlador
  .get("/:workoutId", workoutController.getOneWorkout)
  .post("/", workoutController.createNewWorkout)
  .patch("/:workoutId", workoutController.updateOneWorkout)
  .delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;
