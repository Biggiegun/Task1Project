import app from "./src/presentation/MessageRoute";
import * as data from "./config.json";

app.listen(data.portNumber, async () => {
    console.log(`Server is running on port ${data.portNumber}, my friend!!`);
});