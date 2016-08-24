angular.module('HeroesOfAjax')
    .controller('heroesController', heroCtrl)

heroCtrl.$inject = ['apiFactory']

function heroCtrl (apiFactory){
    var hCtrl = this;
    hCtrl.newHero = {
        parts    : [''],

    };


    hCtrl.retrieveHeroes = function(){
        apiFactory
            .getHeroes()
            .then(function(response){
                hCtrl.heroList = response.data;
            });
    }
    hCtrl.retrieveHeroes();
    console.log(apiFactory)
    console.log(hCtrl.heroList)

    hCtrl.makeAHero = function () {
        apiFactory
            .createHero(hCtrl.newHero)
            .then(function(response){
                console.log(response);
                hCtrl.retrieveHeroes();
            });
    }

    hCtrl.partExtra = function (which) {
        hCtrl.newHero[which].push('');
    }


}
