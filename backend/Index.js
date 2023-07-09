
// SETUP MONGOOSE
const PORT = process.env.PORT || 5002;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => {
        console.log(`PORT is ${PORT}`)
    });
    console.log("Connected Successfully");
}).catch((err) => {
    console.log(`${err} Cannot connect`)
})