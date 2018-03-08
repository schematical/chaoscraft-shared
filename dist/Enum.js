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
        this.navigateTo = 'navigateTo';
        this.chat = 'chat';
        this.walkForward = 'walkForward';
        this.walkBack = 'walkBack';
        this.stopWalking = 'stopWalking';
        this.lookAt = 'lookAt';
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
        this.health = 'health';
        this.canDigBlock = 'canDigBlock';
        this.hasInInventory = 'hasInInventory';
        this.canSeeEntity = 'canSeeEntity';
        this.canSeeBlock = 'canSeeBlock';
        this.chat = 'chat';
        this.onCorrelateAttack = 'onCorrelateAttack';
        this.rain = 'rain';
        this.entityMoved = 'entityMoved';
        this.entitySwingArm = 'entitySwingArm';
        this.entitySpawn = 'entitySpawn';
        this.entityHurt = 'entityHurt';
        this.playerCollect = 'playerCollect';
        this.entityUpdate = 'entityUpdate';
        this.blockUpdate = 'blockUpdate';
        this.diggingCompleted = 'diggingCompleted';
        this.diggingAborted = 'diggingAborted';
        this.move = 'move';
        this.forcedMove = 'forcedMove';
        this.chestLidMove = 'chestLidMove';
        this.blockBreakProgressEnd = 'blockBreakProgressEnd';
        this.blockBreakProgressObserved = 'blockBreakProgressObserved';
    }
}
//# sourceMappingURL=Enum.js.map