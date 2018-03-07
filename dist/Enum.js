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
    }
}
class EnumInputTypes {
    constructor() {
        this.canDigBlock = 'canDigBlock';
        this.hasInInventory = 'hasInInventory';
        this.canSeeEntity = 'canSeeEntity';
        this.canSeeBlock = 'canSeeBlock';
        this.chat = 'chat';
        this.onCorrelateAttack = 'onCorrelateAttack';
    }
}
//# sourceMappingURL=Enum.js.map