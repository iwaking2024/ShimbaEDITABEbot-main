import{createHash}from'crypto';const Reg=/\|?(.*)([.|] *?)([0-9]*)$/i,handler=async function(_0x242ae0,{conn:_0x2cd606,text:_0x2b0602,usedPrefix:_0x55e53b,command:_0x2c116f}){const _0x359884=global['db']['data']['users'][_0x242ae0['sender']],_0x875768=_0x2cd606['getName'](_0x242ae0['sender']),_0x51ae91=await _0x2cd606['profilePictureUrl'](_0x242ae0['chat'],'image')['catch'](_0x5dcd15=>global['imagen1']);if(_0x359884['registered']===!![])throw'🌴\x20Hola\x20amigo,\x20tú\x20ya\x20estás\x20registrado\x20en\x20nuestra\x20base\x20de\x20datos\x20';if(!Reg['test'](_0x2b0602))throw'please\x20register\x20properly\x20an\x20example\x20/Reg\x20Yovani\x20.21*';let [_0x5e05ed,_0x20b9d2,_0x1afe68,_0x123046]=_0x2b0602['match'](Reg);if(!_0x20b9d2)throw'❌\x20Usted\x20no \x20puede\x20dejar\x20su\x20nombre\x20vacío,\x20por\x20favor\x20completar\x20el\x20 registro\x20';if(!_0x123046)throw'❌\x20Porfavor\x20no\x20puede\x20dejar\x20su\x20edad\x20vacío,\x20haga\x20el\x20registro\x20completo';if(_0x20b9d2['length']>=0x1e)throw'☘\x20¿Puedes\x20hacer\x20tu\x20nombre\x20más\x20corto\x20por\x20favor';_0x123046=parseInt(_0x123046);if(_0x123046>0x64)throw'☘️\x20Porfavor\x20use\x20una\x20edad\x20menor\x20no\x20tan\x20alta';if(_0x123046<0x5)throw'[❌]\x20Lo\x20siento,\x20no\x20se\x20permite\x20la\x20Edad\x20de\x205\x20años.\x20Lo\x20siento,\x20no\x20se\x20permite\x20';_0x359884['name']=_0x20b9d2['trim'](),_0x359884['age']=_0x123046,_0x359884['regTime']=+new Date(),_0x359884['registered']=!![];const _0x18b2f4=createHash('md5')['update'](_0x242ae0['sender'])['digest']('hex'),_0x1e4618='📃Registro\x20completado\x20registro\x20información\x20\x0a\x0a🪪Nombre:\x20'+_0x20b9d2+'\x0a\x0a☃️Edad:\x20'+_0x123046+'\x0a\x0a🌟Usted\x20ya\x20esta\x20registrado\x20en\x20nuestra\x20comunidad,\x20Muchas\x20Gracias\x20por\x20registrarte\x20ahora\x20disfruta\x20del\x20now\x20bot\x20🤖\x0a\x0acódigo\x20de\x20registro\x0a'+_0x18b2f4;await _0x2cd606['sendFile'](_0x242ae0['chat'],_0x51ae91,'hades.jpg',_0x1e4618),global['db']['data']['users'][_0x242ae0['sender']]['money']+=0x2710,global['db']['data']['users'][_0x242ae0['sender']]['exp']+=0x2710;};handler['help']=['verificar'],handler['tags']=['xp'],handler['command']=/^(Reg|reg)$/i;export default handler;
