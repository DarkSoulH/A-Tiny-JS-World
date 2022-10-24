import { print } from './js/lib.js';

class livingOrganism {
      constructor(options) {
         this.species = options.species
         this.name = options.name
         this.gender = options.gender
         this.greetings = options.greetings
         this.friends = options.friends
      }

      printProperties() {
         return [
            this.species,
            this.name, 
            this.gender,
            this.greetings,
         ].join("; ");
      }
   }

class Human extends livingOrganism {
   constructor(options) {
      super(options)
      this.species = 'Human'
      this.legs = 2
      this.hands = 2
   }

   printProperties() {
		return [
			super.printProperties(),
			`I have <strong>${this.legs} legs</strong>`,
			`and <strong>${this.hands} hands</strong>;`,
			(this.friends != undefined) ? this.friends : "no friends",
		].join(" ");
   }
}

class Man extends Human {
   constructor(options) {
      super(options)
      this.gender = 'Man'
   }
}

class Woman extends Human {
   constructor(options) {
      super(options)
      this.gender = 'Woman'
   } 
}

class CatWoman extends Woman {
   constructor(options) {
      super(options)
      this.species = 'CatWoman'
      this.gender = 'Woman'
   }
}

class Animal extends livingOrganism {
   constructor(options) {
      super(options)
      this.paws = 4
   }

   printProperties() {
		return [
			super.printProperties(),
			`Animal has <strong>${this.paws}<strong> paws`,
		].join(" ");
	}
}

class Dog extends Animal {
   constructor(options) {
      super(options)
      this.greetings = 'Ruff!'
   }
}

class Cat extends Animal {
   constructor(options) {
      super(options)
      this.greetings = 'Meow-Meow!'
   }
}

const man = new Man({
   name: 'Vladislav',
   greetings: 'Hi everyone!',
   friends: 'Tobic'
})

const woman = new Woman({
   name: 'Viktoria',
   greetings: 'Hi there!',
   friends: 'Kitty, Sendi'
})

const catwoman = new CatWoman({
   name: 'Kitty',
   greetings: "I'm a CatWoman!",
   friends: 'Viktoria'
})

const dog = new Dog({
   species: 'Dog',
   name: 'Tobic',
   gender: 'Male'
})

const cat = new Cat({
   species: 'Cat',
   name: 'Sendi',
   gender: 'Female'
})

const inhabitants = [man, woman, catwoman, dog, cat];

inhabitants.forEach(inhabitant => {
   print(inhabitant.printProperties())
});

console.log(man)
