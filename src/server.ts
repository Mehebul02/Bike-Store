import app from "./app";

const PORT = 500

async function main() {
    try {
        app.listen(PORT, () => {
            console.log(`app is running is on ${PORT}`)
        })
    }
    catch (error) {
        console.log(error);
    }
}

 main()