const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
require("dotenv").config();
require('./Models/db')

//Socket

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        methods:["GET","POST"],
        credentials:true
    }
});
 

const AuthRouter = require('./Routes/AuthRouter')
const ProductRouter = require('./Routes/ProductRouter')
const Forgotpass = require('./Routes/Forgotpass');
const ResetPassword = require('./Routes/ResetPassword')
const Products = require('./Routes/Gproducts')
const Payment = require('./Routes/Paymemt');
const InviteChef = require('./Routes/InviteChef')
const Grating = require('./Routes/Grating')
const Chef_com_API = require('./Routes/Chef_com_API')
const Bookchef = require('./Routes/BookChef')
const BlogCate = require('./Routes/BlogCate')
const AllCate = require('./Routes/AllCate')
// const Admin_API = require('./Routes/Admin_API')
var PORT = process.env.PORT||8080;


//
app.get('/ping',(req,res)=>{
    res.send("pong")
})

app.use(bodyParser.json())


app.use(cors({
    origin:'http://localhost:5173',
    methods:"GET,POST,PUT,DELETE",
    credentials:true
}))
app.use('/auth',AuthRouter);
app.use('/products',ProductRouter);
app.use('/forgotpassword',Forgotpass)
app.use('/reset-password',ResetPassword)
app.use('/invitechef',InviteChef)
app.use(Products)
app.use(Payment)
app.use('/grocery',Grating)
app.use('/invitechef',Chef_com_API)
app.use('/bookchef',Bookchef)
// app.use('/auth',GauthRouter);

// app.listen(PORT,()=>{
//     console.log("server chalu ho gaya",PORT)
// })
// io.on("connection", (socket) => {
//     // console.log('a user connected',socket.id);
//     socket.on("new-comment", (msg) => {
//         // console.log("comment received",msg);
//         io.emit("comment", msg);
//     });
//   }
// );

//JASS Code


let selectedIngredients = [];

// Default Route - Prevents "Cannot GET /" error
app.get("/", (req, res) => {
    res.send("Server is running successfully!");
});

app.use('/uploads', express.static('uploads'));

// Pantry Route - Fetches Available Ingredients
app.get("/pantry", (req, res) => {
    try {
        const pantryItems = [
            "Butter", "Egg", "Garlic", "Milk", "Onion",
            "Sugar", "Flour", "Olive Oil", "Garlic Powder",
            "White Rice", "Cinnamon", "Ketchup", "Soy Sauce", "Mayonnaise"
        ];
        res.status(200).json({ pantry: pantryItems });
    } catch (error) {
        res.status(500).json({ message: "Error fetching pantry data" });
    }
});

// Route to Select Ingredients & Track Count
app.post("/select-ingredient", (req, res) => {
    const { ingredient } = req.body;
    
    if (!ingredient) {
        return res.status(400).json({ message: "No ingredient provided" });
    }

    if (!selectedIngredients.includes(ingredient)) {
        selectedIngredients.push(ingredient);
    }

    res.status(200).json({ selectedIngredients, count: selectedIngredients.length });
});

// Get Selected Ingredients
app.get("/selected-ingredients", (req, res) => {
    res.status(200).json({ selectedIngredients, count: selectedIngredients.length });
});

// Chatbot Route - Generates Recipe (Placeholder)
app.post("/chatbot", (req, res) => {
    const { ingredients } = req.body;

    if (!ingredients || ingredients.length === 0) {
        return res.status(400).json({ message: "No ingredients provided" });
    }

    res.status(200).json({
        message: "Recipe generated successfully",
        recipe: {
            prepTime: "10 mins",
            cookTime: "20 mins",
            servings: 2,
            ingredients,
            cookingMethod: "Fry in a pan for 10 minutes.",
            tips: "Use fresh ingredients for better taste."
        }
    });
});
  
///jass code end

//Blog Category

app.use(BlogCate)
app.use(AllCate)
// app.use('/admin',Admin_API)
io.on("connection", (socket) => {
    console.log("A user connected");
  
    socket.on("new-comment", (comment) => {
      console.log("New comment received:", comment);
      io.emit("comment", comment); // Broadcast to all clients
    });
  
    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
});
  

server.listen(PORT,()=>{
    console.log("server chalu ho gaya",PORT)
})