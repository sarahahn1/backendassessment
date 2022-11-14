
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", "A dubious friend may be an enemy in camouflage.", "A faithful friend is a strong defense.", "A fresh start will put you on your way.", "A friend is a present you give yourself."]

        randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
        res.status(202).send(randomFortune);

    },
    getMovies: (req, res) => {
        const movies = [ 'Black Adam', 'All Quiet on the Western Front', 'Enola Holmes 2', 'Weird: The Al Yankovic Story', 'The Banshees of Inisherin', 'Barbarian', 'My Policeman ', 'Terrifier 2']

        randomIndex = Math.floor(Math.random() * movies.length)
        let randomMovies = movies[randomIndex]
        res.status(203).send(randomMovies)
    },
    getTvShows: (req, res) => {
        const tvShows = ['Guillermo del Toros Cabinet of Curiosities', 'The White Lotus' , 'House of the Dragon', 'The Peripheral',
        'Andor',' The Walking Dead', 'game of Thrones', 'The Lord of the Rings: The Rings of Power']
        randomIndex = Math.floor(Math.random() * tvShows.length)
        let randomTvShows = tvShows[randomIndex]
        res.status(204).send(randomTvShows)
    },

    getRestraunts: (req,res) => {
        const restraunts = ['McDonalds', 'Starbucks', 'Chick-fil-A', 'Taco Bell', 'Wendys', 'Dunkin', 'Burger King', 'Subway', 'Dominos', 'Chipotle Mexican Grill', 'Sonic Drive-In']
        randomIndex = Math.floor(Math.random() * restraunts.length)
        let randomRestraunts = restraunts[randomIndex]
        res.status(205).send(randomRestraunts)
    },
   
    
    // deleteFortune: (req, res) => {
    //     const deleteId = req.params.id
    //     let index = fortune.findIndex(element => element.id === +deleteId)
    //     fortune.splice(index, 1)
    //     res.status(200).send(fortune)
    // },
    
    
    // createFortune: (req, res) => {
    //     const {fortune} = req.body
    //     const globalId = 10

    //     let greatestId = -1
    //     for (let i = 0; i < fortune.length; i++) {
    //         if (text[i].id > greatestId) {
    //             greatestId = text[i].id
    //         }
    //     }
    //     let nextId = greatestId + 1

    //     let newFortune = {
    //         id: globalId,
    //         text
    //     }
    //     fortune.push(newFortune)
    //     res.status(200).send(fortune)
    

    // }



    
    }

   
    








