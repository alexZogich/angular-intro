angular.module("listApp",[]).
	controller("listCtrl", function () {
		var vm = this;

		vm.showGoods = true;
		vm.showCustomers = true;
		vm.searchByName = '';
		vm.searchByAll = '';

		vm.newCustomer = {};
		vm.newGood = {};

		vm.addNew = function (thing) {
			if (thing == "customer") {
				vm.newCustomer.age = Math.floor(Math.random() * (100) + 1);
				vm.customers.push(vm.newCustomer);
				vm.newCustomer = {};
			}
			if (thing == "good") {
				vm.newGood.price = Math.floor(Math.random() * (1000) + 1);
				vm.goods.push(vm.newGood);
				vm.newGood = {};
			}
		}

		vm.showList = function (list) {
			console.log(list);
			if (list == "goods"){
				vm.showGoods = vm.showGoods ? false : true;
			}
			if (list == "customers"){
				vm.showCustomers = vm.showCustomers ? false : true;
			}
		}
		var someGood = {name: "Gun",price: 100};
		vm.goods = [
			someGood,
			someGood
		];
		vm.customers = [
			{name: "Sasha",city: "Starkon",age: "22",img: "hello.jpg"}
		];

	});