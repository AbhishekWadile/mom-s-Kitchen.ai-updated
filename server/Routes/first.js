const express = require('express');
const router = express.Router();  // ✅ Use Router()

// Example pantry data (Modify as needed)
const pantryData = {
      "Pantry Essentials": [
          "butter", "egg", "garlic", "milk", "onion", "sugar", "flour", "olive oil", 
          "white rice", "garlic powder", "cinnamon", "ketchup", "soy sauce", "mayonnaise", "vegetable oil"
      ],
      "Vegetables": [
          "Arugula", "Asparagus", "Baby Corn", "Beetroot", "Bell Pepper", "Bitter Gourd", "Brussels Sprouts",
          "Cabbage", "Carrot", "Cauliflower", "Celery", "Cherry Tomato", "Chili Pepper", "Corn",
          "Cucumber", "Eggplant", "Fennel", "Garlic", "Green Tomato", "Jalapeno", "Kale", "Leek",
          "Lettuce", "Mixed Greens", "Okra", "Onion", "Potato", "Radish", "Romaine Lettuce", "Spinach",
          "Sweet Potato", "Tomato", "Turnip", "Zucchini"
      ],
      "Fruits": [
          "Apple", "Banana", "Blueberry", "Cherry", "Grape", "Lemon", "Mango", "Orange", 
          "Papaya", "Peach", "Pear", "Pineapple", "Plum", "Pomegranate", "Strawberry", "Watermelon"
      ],
      "Meat": [
          "Beef", "Chicken", "Duck", "Fish", "Lamb", "Pork", "Turkey", "Salmon", "Shrimp", "Tuna"
      ],
      "Dairy-Free & Meat Substitutes": [
      "coconut milk", "almond milk", "soy milk", "cashew milk", "peanut milk", "oat milk",
      "rice milk", "flax milk", "non-dairy yogurt", "coconut yogurt", "soy yogurt",
      "almond yogurt", "cashew yogurt", "non-dairy cream", "coconut cream", "soy cream",
      "vegan butter", "coconut butter", "cashew butter", "peanut butter", "almond butter",
      "vegan ghee", "vegan cheese", "vegan paneer", "nut parmesan", "vegan mayonnaise",
      "vegan sour cream", "vegan whipped cream", "vegan chocolate", "coconut jaggery cream",
      "non-dairy creamer", "vegan condensed milk", "vegan ice cream", "dairy-free kulfi",
      "extra firm tofu", "silken tofu", "smoked tofu", "marinated tofu", "soy chunks",
      "soy granules", "textured vegetable protein", "seitan", "tempeh", "soy curls",
      "soy keema", "soy sausage", "vegan kebabs", "vegan meatballs", "vegan burger patty",
      "vegan chicken", "vegan fish", "vegan mutton", "vegetarian oyster sauce",
      "vegan worcestershire sauce", "jackfruit meat", "banana flower meat",
      "black salt (kala namak)", "coconut paste", "coconut fat", "coconut bacon",
      "cashew cheese", "peanut cheese", "vegan ranch", "vegan tandoori mayo",
      "vegan tikka masala sauce", "almond creamer", "soy milk powder", "coconut milk powder",
      "cashew cream cheese", "peanut curd", "vegan gajar halwa", "vegan rasmalai",
      "vegan kulfi", "vegan peda", "coconut barfi", "vegan mithai"
  ],
  "Dairy and Eggs": [
      "paneer", "Bread","Brown Bread","chenna", "khoa", "malai", "curd", "hung curd", "buttermilk", 
      "lassi", "shrikhand", "mishti doi", "mattha", "chaas", "makhan", "ghee", 
      "amul cheese", "processed cheese", "cheddar", "mozzarella", "feta", "cottage cheese", 
      "soft cheese", "cream cheese", "malai paneer", "kesar shrikhand", "flavored lassi", 
      "rasgulla chenna", "mawa", "kalakand base", "kulfi base", "milk powder", 
      "condensed milk", "evaporated milk", "whole milk", "toned milk", "double toned milk", 
      "skimmed milk", "full cream milk", "buffalo milk", "cow milk", "goat milk", 
      "camel milk", "yak milk", "desi ghee", "white butter", "table butter", 
      "processed butter", "salted butter", "unsalted butter", "flavored butter", 
      "cheese spread", "cheese slices", "cheese cubes", "cheese blocks", "processed cheese spread", 
      "cheese dip", "cheese sauce", "cheese blend", "cheese powder", "mozzarella sticks", 
      "string cheese", "burrata", "grana-padano", "labneh", "smoked cheese", "ricotta", 
      "kashkaval", "eggs", "duck eggs", "quail eggs", "country eggs", "kadaknath eggs", 
      "omega-3 eggs", "organic eggs", "brown eggs"
  ],
  "Berries": [
      "strawberry", "gooseberry", "amla", "mulberry", "karonda", "jamun", 
      "phalsa", "ber", "rasbhari", "lasoda", "wild blueberry", "wild raspberry", 
      "black currant", "dried amla", "dried ber", "kokum", "karvanda", "black jamun", 
      "jungle jalebi", "tendu", "haritaki", "bilberry", "makoy berry"
  ],
  "Seafood and Seaweed": [
      "prawns", "shrimp", "crab", "mud crab", "blue crab", "rock crab", "lobster", 
      "lobster tail", "scampi", "crawfish", "squid", "baby squid", "calamari", "octopus", 
      "cuttlefish", "mussels", "clams", "oysters", "green mussels", "black mussels", 
      "scallops", "bay scallops", "tiger prawns", "vannamei prawns", "pomfret", 
      "seer fish", "surmai", "hilsa", "katla", "rohu", "bhetki", "bombil", "eel", 
      "kani crab", "dried shrimp", "dried fish", "dried squid", "nori", "kombu", 
      "wakame", "kelp", "sea moss", "sea lettuce"
  ],
  "Herbs and Spices": [
      "cinnamon", "clove", "turmeric", "ginger root", "ginger powder", "garlic powder", 
      "asafoetida", "black mustard seed", "yellow mustard seed", "curry leaves", "coriander seeds", 
      "coriander powder", "cumin", "roasted cumin powder", "fennel seed", "fenugreek", 
      "kasuri methi", "carom seeds", "nutmeg", "mace", "saffron", "saffron strands", 
      "star anise", "black pepper", "white pepper", "peppercorn", "bay leaf", "mint", 
      "dried mint", "tamarind powder", "mango powder", "anardana", "black salt", 
      "rock salt", "pink salt", "kalonji", "dried chilies", "red chili powder", 
      "kashmiri chili powder", "green cardamom", "black cardamom", "chili flakes", 
      "hot paprika", "cayenne", "mustard powder", "hing", "dill seed", "ajwain", 
      "garam masala", "panch phoron", "biryani masala", "chat masala", "chole masala", 
      "sambhar powder", "madras curry powder", "tandoori masala", "thymol seeds", 
      "gooseberry powder", "turmeric root", "black cumin", "dried neem leaves", 
      "neem powder", "lemon balm", "pandan leaves", "tulsi", "edible flowers"
  ],
  "Baking Ingredients": [
      "flour", "whole-wheat flour", "maida", "atta", "ragi flour", "bajra flour", 
      "jowar flour", "besan", "rice flour", "chickpea flour", "cornflour", 
      "tapioca starch", "arrowroot flour", "semolina flour", "sago", 
      "almond flour", "coconut flour", "peanut flour", "soy flour", 
      "quinoa flour", "amaranth flour", "buckwheat flour", "cassava flour", 
      "potato starch", "sweet potato powder", "fruit salt", "baking powder", 
      "baking soda", "yeast", "cream of tartar", "xanthan gum", "guar gum", 
      "psyllium husk", "jaggery powder", "coconut sugar", "brown sugar", 
      "cane sugar", "castor sugar", "rock sugar", "vanilla extract", 
      "cardamom powder", "cinnamon powder", "nutmeg powder", "clove powder", 
      "crystallized ginger", "shredded coconut", "sweetened coconut flake", 
      "coconut chips", "ghee", "butter", "condensed milk", "milk powder", 
      "khoya", "paneer", "mava", "instant flour", "self-raising flour", 
      "pancake mix", "cake mix", "red velvet cake mix", "chocolate cake mix", 
      "fondant", "ready-made icing", "marzipan", "baking chocolate", 
      "dark chocolate chips", "white chocolate chips", "butterscotch chips", 
      "coffee bean", "carob powder", "tapioca pearls", "sorghum flour", 
      "millet flour"
  ],
  "Grains and Cereals": [
      "white rice", "long-grain white rice", "basmati rice", "sona masoori rice",
      "idli rice", "matta rice", "jeera rice", "saffron rice", "black rice",
      "brown rice", "red rice", "red rice poha", "poha", "puffed rice",
      "quinoa", "red quinoa", "quinoa flakes", "amaranth", "amaranth flakes",
      "barnyard millet", "pearl millet", "little millet", "foxtail millet",
      "kodo millet", "finger millet", "sorghum", "buckwheat", "rye bran",
      "barley", "wheat germ", "wheat bran", "cracked wheat", "bulgur",
      "semolina", "fine semolina", "couscous", "oat bran", "rolled oats",
      "quick-cooking oats", "instant oats", "oat groats", "sprouted brown rice",
      "broken wheat", "whole-wheat pilaf", "wheat berries", "spelt flakes",
      "teff", "farro", "freekeh", "polenta", "cornmeal", "blue cornmeal",
      "jowar flour", "bajra flour", "ragi flour", "makki ka atta",
      "shirataki rice", "haminy", "samp"
  ],
  "Legumes": [
      "chickpea", "chana", "green chickpea", "chickpea sprouts", "chana dal", "kala chana",
      "black-eyed peas", "green peas", "dried peas", "white pea", "field peas", "pigeon peas",
      "toor dal", "moong dal", "mung beans", "mung bean sprout", "hara chana",
      "urad dal", "black gram", "black lentils", "red lentils", "yellow lentils",
      "yellow split peas", "masoor dal", "horse gram", "moth beans",
      "soybeans", "black soybeans", "soy flakes", "soy sprouts",
      "lima beans", "baby lima beans", "fava beans", "broad beans",
      "kidney beans", "rajma", "red beans", "pinto beans", "white beans",
      "cannellini beans", "navy beans", "borlotti beans", "pink beans",
      "mayocoba beans", "gigantes", "flageolets", "brown beans",
      "cluster beans", "winged beans", "hyacinth beans",
      "scarlet runner beans", "sugar beans", "honey beans",
      "peas", "snow peas", "snap peas", "string beans",
      "snake beans", "wax beans", "golden wax beans",
      "bean sprouts", "lentil sprouts", "pea shoots",
      "natto", "fermented black beans", "aquafaba"
  ],
  
  "Pasta": [
      "short-cut pasta", "spaghetti", "macaroni", "egg noodle",
      "spiral pasta", "lasagna", "linguine", "fettuccine",
      "orzo", "pasta shell", "bow-tie pasta", "tortellini",
      "noodle", "rice noodles", "rigatoni", "gnocchi",
      "angel hair pasta", "vermicelli", "tagliatelle",
      "ravioli", "ziti", "gluten-free pasta", "rice vermicelli",
      "pappardelle", "glass noodles", "mac n cheese",
      "manicotti", "penne", "bucatini", "cannelloni",
      "thai rice noodles", "rotelle", "shirataki noodles",
      "brown rice pasta", "pierogi", "soup pasta", "cavatelli",
      "sweet potato noodles", "acini di pepe", "instant noodle",
      "radiatore", "hokkien noodles", "gluten-free noodles",
      "yakisoba noodles", "kelp noodles", "pasta salad mix",
      "semiya", "yolk-free noodles", "black bean pasta",
      "matzo farfel", "spinach fettuccine", "banh pho",
      "potato dumplings", "frozen dumplings", "fregola",
      "cauliflower gnocchi", "misua", "butternut squash noodles",
      "palmini", "busiate", "lobster ravioli",
      "mafalda", "casarecce", "trofie",
      "quinoa pasta", "squash ravioli", "yuba noodles",
      "high-protein pasta", "sevai", "falooda sev", "pheni",
      "ramen noodles", "udon noodles", "chow mein noodles",
      "mung bean noodles", "idiyappam", "hakka noodles",
      "soba noodles", "korean glass noodles", "naengmyeon noodles"
  ],
  "Oils and Fats": [
      "olive oil", "extra virgin olive oil", "vegetable oil",
      "canola oil", "coconut oil", "virgin coconut oil",
      "sesame oil", "toasted sesame oil", "sunflower oil",
      "avocado oil", "peanut oil", "grapeseed oil",
      "mustard oil", "corn oil", "safflower oil",
      "rice bran oil", "flaxseed oil", "walnut oil",
      "pumpkin seed oil", "hazelnut oil", "almond oil",
      "macadamia oil", "pistachio oil", "pecan oil",
      "argan oil", "hemp seed oil", "black sesame oil",
      "red palm oil", "castor oil", "wheat germ oil",
      "ginger oil", "oregano oil", "truffle oil",
      "white truffle oil", "basil oil", "lemon oil",
      "garlic oil", "chili oil", "sichuan peppercorn oil",
      "shallot oil", "achiote oil", "schmaltz",
      "lard", "pork fat", "duck fat", "goose fat",
      "beef fat", "tallow", "lamb fat",
      "cacao butter", "white cacao butter", "shea butter",
      "butter-flavored cooking spray", "coconut oil spray",
      "cooking spray", "salad oil", "popcorn oil"
  ],
  "Canned Food": [
      "canned tomato", "canned whole tomato", "tomatoes with green chiles",
      "canned pumpkin", "pumpkin pie filling", "canned pie filling",
      "canned pineapple", "canned mango", "canned lychee",
      "mandarin oranges", "fruit cocktail", "cranberry relish",
      "canned sour cherry", "canned asparagus", "canned potato",
      "canned baby corn", "canned corn", "mexican-style corn",
      
      "canned black beans", "canned chickpea", "canned kidney beans",
      "canned cannellini beans", "canned lima beans", "canned lentils",
      "canned fava beans", "canned black-eyed peas",
      "refried beans", "chili beans", "ranch-style beans",
      "pork and beans", "chili with beans", "creamed pinto beans",
      
      "canned tuna", "canned salmon", "canned clam",
      "canned anchovy", "pickled herring", "spam",
      "canned pork", "canned chicken breast", "corned beef",
      
      "pickle", "dill pickle relish", "sweet pickle relish",
      "bread & butter pickles", "pickled jalapenos",
      "pickled red onion", "pickled ginger", "pickled onions",
      "pickled beets", "pickled pear", "pickled apple",
      "pickled pepper", "pickling juice",
      
      "capers", "green olives", "black olives",
      "kalamata olives", "taggiasce olives",
      "pimiento-stuffed green olives", "grape leaves",
      
      "maraschino cherry", "sun-dried tomatoes in oil",
      "roasted red peppers", "fire-roasted green chiles",
      "canned whole green chiles", "pepperdew peppers",
      "banana pepper rings", "bamboo shoot", "hearts of palm",
      "canned artichoke", "canned water chestnut",
      "florena peppers"
  ],
  "Sauces Spreads and Dips": [
      "tomato paste", "tomato sauce", "pasta sauce",
      "marinara sauce", "vodka sauce", "alfredo sauce",
      "béchamel sauce", "white pizza sauce",
      
      "pesto", "sun-dried tomato pesto", "arugula pesto",
      "kale pesto", "tahini", "hummus", "garlic hummus",
      "red pepper hummus",
      
      "salsa", "salsa verde", "pineapple salsa",
      "mango salsa", "fire-roasted tomato", "enchilada sauce",
      "green enchilada sauce", "taco sauce", "green taco sauce",
      "pico de gallo",
      
      "hoisin sauce", "stir-fry sauce", "black bean sauce",
      "szechwan sauce", "szechwan chutney",
      "kung pao sauce", "pad thai pasta sauce",
      
      "beef gravy", "chicken gravy", "turkey gravy",
      "pork gravy", "country gravy", "sausage gravy",
      "onion gravy", "mushroom gravy", "brown mushroom sauce",
      "chicken demi-glace", "demi-glace",
      
      "tzatziki", "chimichurri sauce", "curry sauce",
      "japanese curry", "tikka masala sauce",
      "mole paste", "sofrito",
      
      "peanut butter", "chunky peanut butter",
      "chocolate hazelnut spread", "cheese spread",
      "pimento cheese spread",
      
      "balsamic glaze", "steak sauce",
      "cocktail sauce", "mustard sauce", "horseradish sauce",
      "char siu sauce", "teriyaki sauce",
      
      "olive paste", "green olive tapenade",
      "liver spread", "deviled ham spread",
      
      "french onion dip", "spinach dip",
      "artichoke dip", "cheese dip",
      "salsa con queso dip",
      
      "bacon jam", "garlic spread",
      "herb butter", "white truffle butter",
      
      "orange sauce", "mango sauce",
      "plum sauce", "sesame sauce",
      
      "yum yum sauce", "ssamjang",
      "taramasalata"
  ],
  "Desserts and Sweet Snacks": [
      "cocoa", "dark cocoa", "raw cacao powder",
      "dutch-process cocoa", "cacao nibs",
      
      "chocolate", "dark chocolate", "white chocolate",
      "baking chocolate", "chocolate candy",
      "chocolate pudding", "chocolate-covered nougat",
      "chocolate-covered espresso bean",
      "chocolate hazelnut spread", "chocolate cookies",
      "chocolate chip cookies", "chocolate wafer",
      "white baking chocolate", "couverture chocolate",
      "dark couverture chocolate", "white couverture",
      
      "marshmallow", "marshmallow creme",
      "gelatin", "jello", "instant pudding",
      "instant lemon pudding",
      
      "graham cracker", "graham cracker crumbs",
      "oreo", "biscuits", "wafer",
      "cookies", "sugar cookies",
      "lady fingers", "almond cookies",
      "ginger snaps", "butter cookies",
      "chocolate-covered nougat",
      
      "candy", "candy cane",
      "caramel candies", "caramel sauce",
      "butterscotch", "fudge", "fudge sauce",
      "peppermint candy", "cinnamon candy",
      "candied cherry", "candied ginger",
      "candied peel",
      
      "peanut butter cups",
      "peanut-butter sandwich cookies",
      
      "strawberry jam", "raspberry jam",
      "apricot jam", "fig jam",
      "cherry jam", "currant jelly",
      "grape jelly", "plum jam",
      "blueberry jam", "orange marmalade",
      
      "apple cutter", "applesauce",
      "cranberry sauce",
      
      "sponge cake", "angel food cake",
      "cinnamon roll", "doughnut",
      "mexican chocolate", "biscotti",
      
      "waffles", "ice-cream cone",
      
      "cookie butter", "chocolate spread",
      "strawberry sauce",
      
      "sorbet", "banana pudding",
      "pumpkin cheesecake",
      
      "instant peanut butter"
  ]
  };

// Correct API Route
router.get("/data", (req, res) => {
    try {
        res.status(200).json(pantryData);  // ✅ Send JSON response
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;  // ✅ Export router
