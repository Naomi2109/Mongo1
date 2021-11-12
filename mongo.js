let mongoose = require("mongoose");
let User = require ("./USERMDB");
// let Profile = require ("./USERMDB")
// let Credentials = require("./USERMDB")


mongoose.connect('mongodb://localhost:27017/NuevaBBDD',
                    {useNewUrlParser: false, useUnifiedTopology:false});

let userDocument = new User({
    login: "Carlitos21",
    Password: "Jejeje"
});


userDocument.save(checkRespuesta)
function checkRespuesta(err, res)
{
    if (err)
        console.log("Error:" + err)
    else
    {
        console.log("Documento guardado correctamente")
        console.log(res)
        mongoose.disconnect();
    }
}





// --------PROFILE
// let ProfileDocument = new Profile({
//     name: "Carlos",
//     Surname: "Vargas Mas",
//     dateOfBirth: 21/09/1998,
//     Comments: "Programando",
//     rol: "Administrador"
// });


// ProfileDocument.save(checkRespuesta)
// function checkRespuesta(err, res)
// {
//     if (err)
//         console.log("Error:" + err)
//     else
//     {
//         console.log("Documento guardado correctamente")
//         mongoose.disconnect();
//     }
// };



// ------CREDENTIALS

// let CredentialsDocument  = new Credentials({
//     address: "Calle Don Juan, 43",
//     phone: 665665443,
//     email: "Carlos2104@hotmail.es"
// });


// CredentialsDocument.save(checkRespuesta)
// function checkRespuesta(err, res)
// {
//     if (err)
//         console.log("Error:" + err)
//     else
//     {
//         console.log("Documento guardado correctamente")
//         mongoose.disconnect();
//     }
// };

