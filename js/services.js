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
		agregar :function(id,tipo,cantidad,token){
	          var settings ={ 
              "url": "http://gamecotools.com.mx/api/gastos",
              "method": "POST",
              "data": {
                "id": $Global.id,
                "tipo": $scope.tipo,
                "cantidad": cantidad,
                "_token": $Global.token
              }
            }
           return $http.post(settings);
		}
	}
}])

.factory('Login', ['$http', function($http){
	return {	
		Entrar : function(email,contra){
	      
           return $http.post("http://gamecotools.com.mx/api/auth_login",{'email': email,'password': contra});
          
		}

	}
}])
.factory('$Global', function() {
  return {
      token : '',
      id : ''
  }
})