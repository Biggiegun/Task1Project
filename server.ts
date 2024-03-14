const app = require('./app');
import port from './configurationPort';

app.listen(port, async () => {
    console.log(`Server is running on port ${port}, my friend!!`);
});