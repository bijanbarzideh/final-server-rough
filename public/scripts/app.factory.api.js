angular.module('HeroesOfAjax')
    .factory('apiFactory', apiFact)

apiFact.$inject = ['$http']

// Our factory will be the MAIN place we make calls to the backend
function apiFact ($http){

    function getHeroes () {
        return $http.get('/api/heroes')
    }
    function createHero (heroData) {
        return $http.post('/api/heroes', heroData)
    }



    // This return value is exactly what we gain access to in the controller
    return {
        getHeroes : getHeroes,
        createHero: createHero,


    }
}
