'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')



mongoose.connect(config.db, (err, res)=> {
  if (err) {
    console.log(`Error en conectar a la base de datos: ${err}`)
  }
    console.log('Conexion a la base de datos estblecida...')
    app.listen(config.port, () => {
      console.log(`API REST en http://localhost:${config.port}`);
    })
})
