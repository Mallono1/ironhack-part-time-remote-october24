// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health; // 100
        this.strength = strength; //40
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health = this.health - damage; // this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(damage){
        this.health = this.health - damage; // this.health -= damage
        // if health > 0 --> alive 
        // else --> dead
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        }
        else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health = this.health - damage; // this.health -= damage
        // if health > 0 --> alive 
        // else --> dead
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        }
        else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking){
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
    }
    vikingAttack(){
        // how do we pick a random saxon or viking from their respective arrays?
        // 1. Generate a random index in the two arrays 
        const randomSaxonIndex = Math.floor(Math.random()*this.saxonArmy.length)
        const randomVikingIndex = Math.floor(Math.random()*this.vikingArmy.length)
        const randomSaxon = this.saxonArmy[randomSaxonIndex];
        const randomViking = this.vikingArmy[randomVikingIndex];
        // 2. Use receiveDamage(), pass viking.strength as the input/argument for the damage
       randomSaxon.receiveDamage(randomViking.strength)
        // this.saxonArmy[randomSaxonIndex].receiveDamage(this.vikingArmy[randomVikingIndex].strength)
       // if health < 0 --> remove the saxon from the army
       if(randomSaxon.health <= 0){
        this.saxonArmy.splice(randomSaxonIndex, 1)
        return 'A Saxon has died in combat';
       }
       else {
        return `A Saxon has received ${randomViking.strength} points of damage`;
       }
    }
}
