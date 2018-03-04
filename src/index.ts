class Enum{
    static get OutputTypes():EnumOutputTypes{
        return EnumOutputTypes;
    }
    static get InputTypes():EnumInputTypes{
        return EnumInputTypes;
    }
}
class EnumOutputTypes{
    static navigateTo:string = 'navigateTo';
    static chat:string = 'chat';
    static walkForward:string = 'walkForward';
    static walkBack:string = 'walkBack';
    static stopWalking:string = 'stopWalking';
    static lookAt:string = 'lookAt';
    static dig:string = 'dig';
    static placeBlock:string = 'placeBlock';
    static equip:string = 'equip';
    static attack:string = 'attack';
    static activateItem:string = 'activateItem';
}
class EnumInputTypes{
    static canDigBlock:string = 'canDigBlock';
    static hasInInventory:string = 'hasInInventory';
    static canSeeEntity:string = 'canSeeEntity';
    static canSeeBlock:string = 'canSeeBlock';
    static chat:string = 'chat';
    static onCorrelateAttack:string = 'onCorrelateAttack';

}
export {Enum}