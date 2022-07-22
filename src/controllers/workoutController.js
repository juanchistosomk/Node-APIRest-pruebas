const workoutService = require('../services/workoutService');


const getAllWorkouts = (req,res) => {
    const allWorkouts = workoutService.getAllWorkouts();  // Llamo el servicio
    res.status(200).send({ status: 'OK', data: allWorkouts});
};

const getOneWorkout = (req, res) => {
    const oneWorkout = workoutService.getOneWorkout(req.params.workoutId);
    res.status(200).send({ status: 'OK', data: oneWorkout });
};

const createNewWorkout = (req, res) => {
    const { body } = req;
if(     // Primero validar negativo
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
) {  return;  }

const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips
}

    const createdWorkout = workoutService.createNewWorkout(newWorkout);
    res.status(201).send({ status : 'Ok', data : createdWorkout });
};

const updateOneWorkout = (req, res) => {
    const updatedWorkout = workoutService.updateOneWorkout(req.params.workoutId);
    res.send(`Update workout ${req.params.workoutId}`);
};

const deleteOneWorkout = (req, res) => {
    workoutService.deleteOneWorkout(req.params.workoutId);
    res.send(`Delete workout ${req.params.workoutId}`);
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}