angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.factory('MostrarType', ['$http', function($http){
	return {
		mostrar : function(){
		return $http.post('http://gamecotools.com.mx/api/tipos');
		}
	}
}])

.factory('GuardarGasto', ['$http', function($http){
	return {
		agregar : function(){
		return $http.post('http://gameco.dev/api/gasto');
		}
	}
}])

.factory('Login', ['$http', function($http){
	return {	
		Entrar : function(){
		var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": "http://gameco.dev/api/auth_login",
		  "method": "POST",
		  "headers": {
		    "authorization": "Basic ZWxpZ2lvX2FycmVvbGFAaG90bWFpbC5jb206bm9tYXMxMg==",
		    "content-type": "application/x-www-form-urlencoded",
		    "cache-control": "no-cache",
		    "postman-token": "60cb87b0-12a8-ff4a-2cfb-48bed5f41bc5"
		  },
		  "data": {
		    "email": "eligio_arreola@hotmail.com",
		    "password": "nomas12"
		  }
		}

		$http.post(settings).done(function (response) {
		  console.log(response);
		});
	

	}

	}
}])
.factory('$Global', function() {
  return {
      token : '',
      id : ''
  }
})