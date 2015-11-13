var asmrApp = angular.module('asmrApp',[]);

asmrApp.controller('asmrController', ['$scope', function($scope) {

	console.log(asmrList);
	
	$scope.gender = 'x';

	//init
	$scope.testURL0 = newURL();
	$scope.testURL1 = newURL();
	$scope.testURL2 = newURL();
	$scope.testURL3 = newURL();
	$scope.testURL4 = newURL();
	$scope.testURL5 = newURL();
	$scope.testURL6 = newURL();
	$scope.testURL7 = newURL();



	function newURL() {
	    return asmrList[Math.floor(Math.random()*asmrList.length)].url;
	}
	function newURLFemale() {
	    return asmrListFemale[Math.floor(Math.random()*asmrListFemale.length)].url;
	}
	function newURLMale() {
	    return asmrListMale[Math.floor(Math.random()*asmrListMale.length)].url;
	}

	$scope.changeGender = function(g){
		$scope.gender = g;
		$scope.updateURLs();
	};

	$scope.updateURLs = function(){
		if($scope.gender === 'x'){
			$scope.testURL0 = newURL();
			$scope.testURL1 = newURL();
			$scope.testURL2 = newURL();
			$scope.testURL3 = newURL();
			$scope.testURL4 = newURL();
			$scope.testURL5 = newURL();
			$scope.testURL6 = newURL();
			$scope.testURL7 = newURL();
		}
		if($scope.gender === 'f'){
			$scope.testURL0 = newURLFemale();
			$scope.testURL1 = newURLFemale();
			$scope.testURL2 = newURLFemale();
			$scope.testURL3 = newURLFemale();
			$scope.testURL4 = newURLFemale();
			$scope.testURL5 = newURLFemale();
			$scope.testURL6 = newURLFemale();
			$scope.testURL7 = newURLFemale();
		}
		if($scope.gender === 'm'){
			$scope.testURL0 = newURLMale();
			$scope.testURL1 = newURLMale();
			$scope.testURL2 = newURLMale();
			$scope.testURL3 = newURLMale();
			$scope.testURL4 = newURLMale();
			$scope.testURL5 = newURLMale();
			$scope.testURL6 = newURLMale();
			$scope.testURL7 = newURLMale();
		}
	};

	$scope.urlList = [
		$scope.testURL0,
		$scope.testURL1,
		$scope.testURL2,
		$scope.testURL3,
		$scope.testURL4,
		$scope.testURL5,
		$scope.testURL6,
		$scope.testURL7
	];

}]);

asmrApp.filter('trustAsResourceUrl', ['$sce', function($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
    }]);