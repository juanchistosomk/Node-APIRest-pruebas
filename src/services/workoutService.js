const { v4 : uuid} = require("uuid");  // Genera ID único, renombro a uuid
const Workout = require("../database/workoutConnect");

const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts_(); // Llamo el Modelo
  return allWorkouts;
};

const getOneWorkout = (req) => {
  const oneWorkout = Workout.getOneWorkout_(req);
  return oneWorkout;
};

const createNewWorkout = (newWorkout) => {
  
    const workoutToInsert = {   // Agrego id y fechas al objeto
    id: uuid(),
    ...newWorkout,
    createdAt: new Date().toLocaleString("en-US", { timezone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timezone: "UTC" }),
  };
  console.log(workoutToInsert);
  const createdWorkout = Workout.createNewWorkout_(workoutToInsert)
  return createdWorkout;

};

const updateOneWorkout = (workoutId) => {
  return;
};

const deleteOneWorkout = (workoutId) => {
  return;
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
