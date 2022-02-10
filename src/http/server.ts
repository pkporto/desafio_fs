import {app} from "./app";

const PORT = 8181;

app.listen(PORT, ()=>{
    console.log(`App rodando na porta ${PORT}`);
})