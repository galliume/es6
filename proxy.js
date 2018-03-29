"use strict";

let target = { 
	name : "target",
	uid : "uid"
}

let proxy = new Proxy(target, {
	set(trapTarget, key, value, receiver) {
		if (!trapTarget.hasOwnProperty(key)) {
			if (isNaN(value)) {
				throw new TypeError("Property must be a number");
			}
		}
		return Reflect.set(trapTarget, key, value, receiver);
	},
	
	get(trapTarget, key, receiver) {
		if (!(key in receiver)) {
			throw new TypeError(`property ${key} does not exists`);
		}
		
		return Reflect.get(trapTarget, key, receiver);
	},
	
	has(trapTarget, key) {
		if(key === 'uid') {
			return false;
		} else {
			return Reflect.has(trapTarget, key);
		}
	},
	
	deleteProperty(trapTarget, key) {
		if (key === 'uid') {
			return false;
		} else {
			return Reflect.deleteProperty(trapTarget, key);
		}
	},
	
	getPrototypeOf(trapTarget) {
		return Reflect.getPrototypeOf(trapTarget);
	},
	
	setPrototypeOf(trapTarget, proto) {
		return Reflect.setPrototypeOf(trapTarget, proto);
	},
	
	isExtensible(trapTarget) {
		return Reflect.isExtensible(trapTarget);
	},
	
	preventExtension(trapTarget) {
		return Reflect.preventExtensions(trapTarget);
	}
});

proxy.count = 1;
console.log(proxy.count);
console.log(target.count);

console.log(proxy.name);
console.log(target.name);

//proxy.anotherName = 'proxy';

//console.log(proxy.toto);
console.log("uid" in proxy);
console.log("name" in proxy);

//let r1 = delete proxy.uid; //throw error in strict mode
//console.log(r1);

let { proxy2, revoke} = Proxy.revocable(target, {});

revoke();

class MyArray {
	constructor() {
		return new Proxy(this, {}); //return a proxyMyArray with user defined behavior for low level js operationoui 
	}
}