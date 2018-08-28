
class Enum{
    static get OutputTypes():EnumOutputTypes{
        return new EnumOutputTypes();
    }
    static get InputTypes():EnumInputTypes{
        return new EnumInputTypes();
    }
}
class EnumOutputTypes{
    chat:string = 'chat';
    walkForward:string = 'walkForward';
    walkBack:string = 'walkBack';
    stopWalking:string = 'stopWalking';
    dig:string = 'dig';
    placeBlock:string = 'placeBlock';
    equip:string = 'equip';
    attack:string = 'attack';
    activateItem:string = 'activateItem';
    deactivateItem:string = 'deactivateItem';
    walkLeft:string = 'walkLeft';
    walkRight:string = 'walkRight';
    jump:string = 'jump';
    sneak:string = 'sneak';
    sprint:string = 'sprint';
    clearControlStates:string = 'clearControlStates';
    lookLeft:string = 'lookLeft';
    lookRight:string = 'lookRight';
    lookUp:string = 'lookUp';
    lookDown:string = 'lookDown';
    toss:string = 'toss';
    tossStack:string = 'tossStack';
    activateBlock:string = 'activateBlock';
    activateEntity:string = 'activateEntity';
    useOn:string = 'useOn';
    craft:string = 'craft';
    openChest:string = 'openChest';
    openFurnace:string = 'openFurnace';
    openDispenser:string = 'openDispenser';
    openEnchantmentTable:string = 'openEnchantmentTable';
    openVillager:string = 'openVillager';
    trade:string = 'trade';
    //openEntity:string = 'openEntity';




}
class EnumInputTypes{
    debug:string = 'debug';
    hasInInventory:string = 'hasInInventory';
    hasRecipeInInventory:string = 'hasRecipeInInventory';
    entityAt:string = 'entityAt';
    blockAt:string = 'blockAt';
    chat:string = 'chat';
    entityMoved:string = 'entityMoved';
    entityUpdate:string = 'entityUpdate';
    entitySwingArm:string ='entitySwingArm';
    entitySpawn:string = 'entitySpawn';
    entityHurt:string = 'entityHurt';
    hasEquipped:string = 'hasEquipped';
    isHolding:string = 'isHolding';

    health:string = 'health';

    collision:string = 'collision';
    onCorrelateAttack:string = 'onCorrelateAttack';
    rain:string = 'rain';
    playerCollect:string = 'playerCollect';


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
export { Enum }