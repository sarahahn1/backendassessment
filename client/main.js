const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)


const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortunes/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)






const  movieBtn = document.getElementById("movieButton")

const getMovies = () => {
    axios.get("https://localhost:4000/api/movies/")
    .then( res => {
        const data = res.data;
        alert(data)
    });
}


movieBtn.addEventListener('click', getMovies)


const tvShowBtn = document.getElementById("tvShow")
const getTvShows = () => {
axios.get("https://localhost:4000/api/tvShows/")
.then(res => {
    const data = res.data;
    alert(data)
});

};


tvShowBtn.addEventListener('click', getTvShows)




const restrauntBtn = document.getElementById("restrauntButton")
const getRestraunts = () => {
    axios.get("https://localhost:4000/api/restraunts")
    .then(res => {
        const data = res.data;
        alert(data)
    });
};

restrauntBtn.addEventListener('click', getRestraunts)