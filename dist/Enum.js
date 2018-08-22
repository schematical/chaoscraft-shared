"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Enum {
    static get OutputTypes() {
        return new EnumOutputTypes();
    }
    static get InputTypes() {
        return new EnumInputTypes();
    }
}
exports.Enum = Enum;
class EnumOutputTypes {
    constructor() {
        this.chat = 'chat';
        this.walkForward = 'walkForward';
        this.walkBack = 'walkBack';
        this.stopWalking = 'stopWalking';
        this.dig = 'dig';
        this.placeBlock = 'placeBlock';
        this.equip = 'equip';
        this.attack = 'attack';
        this.activateItem = 'activateItem';
        this.deactivateItem = 'deactivateItem';
        this.walkLeft = 'walkLeft';
        this.walkRight = 'walkRight';
        this.jump = 'jump';
        this.sneak = 'sneak';
        this.sprint = 'sprint';
        this.clearControlStates = 'clearControlStates';
        this.lookLeft = 'lookLeft';
        this.lookRight = 'lookRight';
        this.lookUp = 'lookUp';
        this.lookDown = 'lookDown';
        this.toss = 'toss';
        this.tossStack = 'tossStack';
        this.activateBlock = 'activateBlock';
        this.activateEntity = 'activateEntity';
        this.useOn = 'useOn';
        this.craft = 'craft';
        this.openChest = 'openChest';
        this.openFurnace = 'openFurnace';
        this.openDispenser = 'openDispenser';
        this.openEnchantmentTable = 'openEnchantmentTable';
        this.openVillager = 'openVillager';
        this.trade = 'trade';
        this.openEntity = 'openEntity';
    }
}
class EnumInputTypes {
    constructor() {
        this.debug = 'debug';
        this.hasInInventory = 'hasInInventory';
        this.hasRecipeInInventory = 'hasRecipeInInventory';
        this.entityAt = 'entityAt';
        this.blockAt = 'blockAt';
        this.chat = 'chat';
        this.entityMoved = 'entityMoved';
        this.entityUpdate = 'entityUpdate';
        this.entitySwingArm = 'entitySwingArm';
        this.entitySpawn = 'entitySpawn';
        this.entityHurt = 'entityHurt';
        this.hasEquipped = 'hasEquipped';
        this.isHolding = 'isHolding';
        this.health = 'health';
        this.collision = 'collision';
        this.onCorrelateAttack = 'onCorrelateAttack';
        this.rain = 'rain';
        this.playerCollect = 'playerCollect';
        /*
        blockUpdate:string = 'blockUpdate';
        diggingCompleted:string = 'diggingCompleted';
        diggingAborted:string = 'diggingAborted';
    
        move:string = 'move';
        forcedMove:string = 'forcedMove';
        chestLidMove:string = 'chestLidMove';
        blockBreakProgressEnd:string = 'blockBreakProgressEnd';
        blockBreakProgressObserved:string = 'blockBreakProgressObserved';*/
    }
}
//# sourceMappingURL=Enum.js.map