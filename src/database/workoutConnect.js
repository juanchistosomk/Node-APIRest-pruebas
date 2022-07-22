// Aqui conexión a BD
const DB = require('./db.json');
const { saveToDataBase } = require('./utils');

const getAllWorkouts_ = () => {
    return DB.workouts;
}

const getOneWorkout_ = (workoutId) => {
    const vvv = DB.workouts.find(id => id.id === workoutId)
    //console.log(workoutId, vvv);
    return vvv;
}

const createNewWorkout_ = (newWorkout) => {

    const isAlreadyAdded = DB.workouts.findIndex( // Valida si ya existe
        dato => dato.name === newWorkout.name 
    );
        

    if(isAlreadyAdded > -1){
        return;
    }
    //console.log("holaa:",newWorkout);
    DB.workouts.push(newWorkout);  // Agrega nuevo
    saveToDataBase(DB);
    return newWorkout;
};


module.exports = { getAllWorkouts_, getOneWorkout_, createNewWorkout_ };
