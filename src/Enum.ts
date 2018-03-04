
class Enum{
    static get OutputTypes():EnumOutputTypes{
        return new EnumOutputTypes();
    }
    static get InputTypes():EnumInputTypes{
        return new EnumInputTypes();
    }
}
class EnumOutputTypes{
    navigateTo:string = 'navigateTo';
    chat:string = 'chat';
    walkForward:string = 'walkForward';
    walkBack:string = 'walkBack';
    stopWalking:string = 'stopWalking';
    lookAt:string = 'lookAt';
    dig:string = 'dig';
    placeBlock:string = 'placeBlock';
    equip:string = 'equip';
    attack:string = 'attack';
    activateItem:string = 'activateItem';
}
class EnumInputTypes{
    canDigBlock:string = 'canDigBlock';
    hasInInventory:string = 'hasInInventory';
    canSeeEntity:string = 'canSeeEntity';
    canSeeBlock:string = 'canSeeBlock';
    chat:string = 'chat';
    onCorrelateAttack:string = 'onCorrelateAttack';
}
export { Enum }