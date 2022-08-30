const express = require('express');
const dotenv = require('dotenv');
const v1WorkoutRouter = require('./v1/routes/workoutRoutes.js');
dotenv.config();
const app = express();

             // Si no hay var de entorno aplica puerto 3000
const PORT = process.env.PORT || 4000;

app.use(express.json()); // Middleware global
app.use('/api/v1/workouts', v1WorkoutRouter );


app.listen(PORT , () => {
    console.info("Servidor en ejecución puerto: ", PORT);
});

