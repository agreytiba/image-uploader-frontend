const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    file:
    {
        data: Buffer,
        contentType: String
    }

},{
    timestamps:true
})
 export default mongoose.models.User ||mongoose.model('User', userSchema)