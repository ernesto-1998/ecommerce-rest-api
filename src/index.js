import './config/loadVariables.js';
import app from './app.js';

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT} ${Date()}`);
});