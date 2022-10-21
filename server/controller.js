
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
   
    
    deleteFortune: (req, res) => {
        const deleteId = req.params.id
        let index = fortune.findIndex(element => element.id === +deleteId)
        fortune.splice(index, 1)
        res.status(200).send(fortune)
    },
    
    
    createFortune: (req, res) => {
        const {fortune} = req.body
        const globalId = 10

        let greatestId = -1
        for (let i = 0; i < fortune.length; i++) {
            if (text[i].id > greatestId) {
                greatestId = text[i].id
            }
        }
        let nextId = greatestId + 1

        let newFortune = {
            id: globalId,
            text
        }
        fortune.push(newFortune)
        res.status(200).send(fortune)
    

    }



    
    }

   
    








