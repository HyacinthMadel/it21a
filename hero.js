class Hero{
    #health;

    constructor (name,health,attack){
        this.name = name;
        this.#health = health;
        this.attack = attack;
    }

    getHealth(){
        return this.#health;
    }

    getStats(){
        console.log("\n");
        console.log("Name: "+ this.name);
        console.log("Health: "+ this.#health);
        console.log("Attack: "+ this.attack);
    }
}

class Warrior extends Hero{
    useAbility(){
        console.log(`${this.name} uses power Strike`);
    }
}

class Mage extends Hero{
    constructor(name,health,attack,mana){
        super(name,health,attack);
        this.mana = mana;
    }
    useAbility(){
        console.log(`${this.name} casts Fireball!`);
    }
}

function performAbility(hero){
    hero.useAbility();
}

performAbility(Thorin);
performAbility(Gandalf);

const warrior = new Warrior("Thorin",100,10);
//warrior.useAbility();
Thorin.getStats();

const mage = new Mage("Gandalf",80,8,50);
//mage.useAbility();
Gandalf.getStats();

function performAbility(hero){
    console.log("\n");
    hero.useAbility();
}

performAbility(Thorin);
performAbility(Gandalf);