
export const fetchTenTimes = () => {

  let homeData = [];

  //for (let i = 1; i <= 10; i++) {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then( res => res.json() )
      .then( data => {
        homeData.push(data);
      })
      .catch( err => console.log(err))

  return (homeData)
}
