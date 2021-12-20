const app = require ('./backend/app');
const port = 3003 ;
app.listen(port,()=>
{
    console.log(`APP listening on PORT ${port}`);
});