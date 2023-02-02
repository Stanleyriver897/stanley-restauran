import app from './app.js'
const morgan = require('morgan');
const bodyParser = require('body-parser');
import { sequelize } from './db/database.js'
import cors from 'cors'
//settings
app.set('port', process.env.PORT || 3000);

//middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

const main = async () => {
    try {
        // await sequelize.authenticate()
        await sequelize.sync()
        app.listen(app.get('port'), () => {
            console.log('server on port ',app.get('port'))
        })

    } catch (error) {
        console.log('unable connection to the database', error)
    }
}
main() 
