var _0x541d=[':hidden','show','null','onclick','style','display','block','alt','none','No\x20image\x20to\x20set\x20modal\x20behaviour.','Elite','schedule_table','ready','This\x20is\x20the\x20new\x20setPlan!','then','!!!seting\x20values','images/timelines/00.01.Membership.png','images/timelines/00.02.Exclusive.png','images/timelines/00.03.Elite.png','images/timelines/00.04.Gancho_Premium.png','images/timelines/00.05.Taylormade.png','images/timelines/00.06.Platinum.png','text','val','replace','toFixed','floor','$1,','createElement','TABLE','setAttribute','createTHead','insertRow','insertCell','innerHTML','Abono','Saldo','tbody','append','getElementById','getElementsByTagName','parentNode','length','schedule','nPer','monthly_payment','balance','test','substr','.numMask','inputmask','numeric','Value','price','per','n_per','down_payment','residual_payment','image_url','getPeriodPayment','rate','grace_per','getRemainingPaymentBeforePer','getAccumulatedPaymentAtPer','getTotalPayment','getRemainingPaymentAfterPer','getDownPayment','getResidualPayment','getFinalPayment','getFinancedAmount','getTotalInterests','getSchedulePeriod','setSchedule','push','updatePlan','setRate','setNPer','setResidualPayment','updateAll','capital','undefined','pow','log','!!!\x20Plan\x20name\x20before\x20promise:\x20','toUpperCase','MEMBERSHIP','EXCLUSIVE','ELITE','It\x20broke','nPer\x09pmt\x09Capital\x09Interests\x09Balance','\x09\x09\x09\x09','each','#plan_name_tag','#rate_tag','#down_payment_value_tag','#down_payment_tag','#residual_payment_value_tag','#residual_payment_tag','#grace_tag','#timeline_div','name','#monthly_payment_tag','#last_payment_tag','#total_payment_tag','#total_interest_tag','#table_div','attr','src','myModal','img01','caption','getElementsByClassName','focusout','keyup','change','bind','type','\x20is\x20fired','#expandDetail','#not_compulsory_results_tag','toggle','#compulsory_results_tag'];(function(_0x593625,_0x4113f9){var _0x7e30a1=function(_0x3e1c47){while(--_0x3e1c47){_0x593625['push'](_0x593625['shift']());}};_0x7e30a1(++_0x4113f9);}(_0x541d,0x8a));var _0x922a=function(_0x37b6b1,_0x43ab8a){_0x37b6b1=_0x37b6b1-0x0;var _0x56bb16=_0x541d[_0x37b6b1];return _0x56bb16;};var membership_rate=0.00598;var membership_per=0x1;var membership_n_per=0xd;var membership_down_payment=0.2;var membership_residual_payment=0.8;var membership_grace_per=0x0;var membership_image_url=_0x922a('0x0');var exclusive_rate=0x0;var exclusive_per=0xc;var exclusive_n_per=0x1;var exclusive_down_payment=0.5;var exclusive_residual_payment=0.5;var exclusive_grace_per=0x0;var exclusive_image_url=_0x922a('0x1');var elite_rate=0.00598;var elite_per=0x1;var elite_n_per=0x18;var elite_down_payment=0.3;var elite_residual_payment=0.5;var elite_grace_per=0x0;var elite_image_url=_0x922a('0x2');var gancho_rate=0.00598;var gancho_per=0x1;var gancho_n_per=0x24;var gancho_down_payment=0.4;var gancho_residual_payment=0.5;var gancho_grace_per=0x0;var gancho_image_url=_0x922a('0x3');var taylormade_rate=0.00598;var taylormade_per=0x1;var taylormade_n_per=0x3c;var taylormade_down_payment=0.3;var taylormade_residual_payment=0x0;var taylormade_grace_per=0x0;var taylormade_image_url=_0x922a('0x4');var platinum_rate=0.01;var platinum_per=0x1;var platinum_n_per=0x18;var platinum_down_payment=0.2;var platinum_residual_payment=0.4;var platinum_grace_per=0x0;var platinum_image_url=_0x922a('0x5');var default_rate=0.01;function getTagValue(_0x129280){}function getTagValueForText(_0x5c32e7){return isNaN(parseFloat(_0x5c32e7[_0x922a('0x6')]()['replace'](/[^0-9\.]/g,'')))?0x0:parseFloat(_0x5c32e7[_0x922a('0x6')]()['replace'](/[^0-9\.]/g,''));}function getTagValueForNumber(_0x319f24){var _0x527c9a=_0x319f24[_0x922a('0x7')]();var _0x4ac1eb=_0x527c9a[_0x922a('0x8')](/[^0-9\.]/g,'');var _0x3910cf=parseFloat(_0x4ac1eb);return isNaN(parseFloat(_0x319f24['val']()['replace'](/[^0-9\.]/g,'')))?0x0:parseFloat(_0x319f24[_0x922a('0x7')]()[_0x922a('0x8')](/[^0-9\.]/g,''));}function setTagValueForText(_0x4e44fa,_0xe45cee){isNaN(_0xe45cee)?_0x4e44fa['text'](''):_0x4e44fa[_0x922a('0x6')](_0xe45cee);}function setTagValueForNumber(_0x37ddef,_0xc708f5,_0x8ae79){isNaN(_0xc708f5)?_0x37ddef['val'](0x0):_0x37ddef['val'](_0xc708f5[_0x922a('0x9')](_0x8ae79));}function setTagValueForNumberRate059(_0x103085,_0x513f76,_0x57f887){isNaN(_0x513f76)?_0x103085[_0x922a('0x7')](0x0):_0x103085[_0x922a('0x7')]((Math[_0x922a('0xa')](_0x513f76*0x64)/0x64)[_0x922a('0x9')](_0x57f887));}function setTagValueForPercent(_0x477899,_0x1d3b98){isNaN(_0x1d3b98)?0x0:_0x477899[_0x922a('0x7')](_0x1d3b98[_0x922a('0x9')](decimals));}function formatCurrencyOutput(_0x2f0c70,_0x78d5c0){return'$'+formatCurrencyOutputNoSym(_0x2f0c70,_0x78d5c0);}function formatCurrencyOutputNoSym(_0x5e1378,_0x258e0a){return parseFloat(_0x5e1378)['toFixed'](_0x258e0a)[_0x922a('0x8')](/(\d)(?=(\d\d\d)+(?!\d))/g,_0x922a('0xb'));}function createPlainTable(_0x599270,_0xf444c7,_0x5c44ba){_0xf444c7=document[_0x922a('0xc')](_0x922a('0xd'));_0xf444c7[_0x922a('0xe')]('id',_0x5c44ba);var _0x503ef0=_0xf444c7[_0x922a('0xf')]();var _0x2d8f70=_0x503ef0[_0x922a('0x10')](0x0);var _0x3d6c6f=_0x2d8f70[_0x922a('0x11')](0x0);_0x3d6c6f[_0x922a('0x12')]='Num';var _0x3f718c=_0x2d8f70[_0x922a('0x11')](0x1);_0x3f718c[_0x922a('0x12')]=_0x922a('0x13');var _0x37fb88=_0x2d8f70[_0x922a('0x11')](0x2);_0x37fb88[_0x922a('0x12')]=_0x922a('0x14');var _0x13684d=document[_0x922a('0xc')](_0x922a('0x15'));_0xf444c7['appendChild'](_0x13684d);_0x599270[_0x922a('0x16')](_0xf444c7);}function updateTable(_0x5e9518,_0x2cf7c1){var _0x57f135=document[_0x922a('0x17')](_0x5e9518)[_0x922a('0x18')](_0x922a('0x15'))[0x0];var _0x20c492=document['createElement'](_0x922a('0x15'));_0x57f135[_0x922a('0x19')]['replaceChild'](_0x20c492,_0x57f135);var _0x5537e2;var _0x2a7432;var _0x585f8e;var _0x3ad82b;var _0x1150c9;for(i=0x0;i<_0x2cf7c1[_0x922a('0x1a')];i++){_0x5537e2=_0x20c492[_0x922a('0x10')](i);_0x2a7432=_0x5537e2[_0x922a('0x11')](0x0);_0x2a7432['innerHTML']=plan[_0x922a('0x1b')][i][_0x922a('0x1c')];_0x3ad82b=_0x5537e2[_0x922a('0x11')](0x1);_0x3ad82b['innerHTML']=formatCurrencyOutput(plan[_0x922a('0x1b')][i][_0x922a('0x1d')],default_decimals);_0x1150c9=_0x5537e2['insertCell'](0x2);_0x1150c9[_0x922a('0x12')]=formatCurrencyOutput(plan[_0x922a('0x1b')][i][_0x922a('0x1e')],default_decimals);}}function isMobileDevice(){var _0x40328b=![];if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i[_0x922a('0x1f')](navigator['userAgent'])||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i[_0x922a('0x1f')](navigator['userAgent'][_0x922a('0x20')](0x0,0x4))){_0x40328b=!![];}return _0x40328b;}(function(_0x584d7d){'use strict';_0x584d7d(_0x922a('0x21'))[_0x922a('0x22')](_0x922a('0x23'),{'radixPoint':'.','groupSeparator':',','digits':0x0,'autoGroup':!![],'prefix':'$','rightAlign':![],'oncleared':function(){try{self[_0x922a('0x24')]('');}catch(_0x45577d){}}});}(jQuery));function validPayment(_0x1c23d8,_0x23deff,_0x489e31){if(_0x23deff==0x0)return![];return!![];}function Plan(_0x355a1a,_0xfa71e1,_0x57c31b,_0x4dee44,_0x1012eb,_0x581cbb,_0x32f2c8,_0x47a2d1,_0x201363){this['name']=_0x355a1a;this[_0x922a('0x25')]=_0xfa71e1;this['rate']=_0x57c31b;this[_0x922a('0x26')]=_0x4dee44;this[_0x922a('0x27')]=_0x1012eb;this[_0x922a('0x28')]=_0x581cbb;this[_0x922a('0x29')]=_0x32f2c8;this['grace_per']=_0x47a2d1;this['schedule']=[];this[_0x922a('0x2a')]=_0x201363;this[_0x922a('0x2b')]=function(){return pmt_calc(this[_0x922a('0x2c')],this[_0x922a('0x26')]*this['n_per'],this['price'],this[_0x922a('0x28')],this[_0x922a('0x29')],this[_0x922a('0x2d')],0x0);};this[_0x922a('0x2e')]=function(_0x1012eb){var _0x1a774a;var _0x16b7ad;_0x1012eb<=0x0?_0x1a774a=this['down_payment']:_0x1a774a=0x0;_0x1012eb>this['n_per']?_0x16b7ad=0x0:_0x16b7ad=this['residual_payment'];var _0x27c523=this[_0x922a('0x2b')](this['price']);return this['getPeriodPayment'](this[_0x922a('0x25')])*(this[_0x922a('0x26')]*(this['n_per']-(_0x1012eb-0x1)))+this['price']*_0x1a774a+this['price']*_0x16b7ad;};this['getRemainingPaymentAfterPer']=function(_0x1012eb){var _0x497a17=this[_0x922a('0x2e')](_0x1012eb+0x1);return this[_0x922a('0x2e')](_0x1012eb+0x1);};this[_0x922a('0x2f')]=function(_0x1012eb){var _0x52f361=this[_0x922a('0x30')]();var _0x3c60b6=this[_0x922a('0x31')](_0x1012eb);return this[_0x922a('0x30')]()-this['getRemainingPaymentAfterPer'](_0x1012eb);};this['getAccumulatedPaymentAtPerNoRes']=function(_0x1012eb){var _0x2c1afb=0x0;if(_0x1012eb==this[_0x922a('0x27')])_0x2c1afb=this[_0x922a('0x29')]*this[_0x922a('0x25')];return this[_0x922a('0x2f')](_0x1012eb)-_0x2c1afb;};this[_0x922a('0x32')]=function(){return this[_0x922a('0x25')]*this[_0x922a('0x28')];};this[_0x922a('0x33')]=function(){return this['price']*this[_0x922a('0x29')];};this[_0x922a('0x34')]=function(){return this[_0x922a('0x33')]()+this[_0x922a('0x2b')]();};this[_0x922a('0x35')]=function(){return this[_0x922a('0x25')]-this['price']*this[_0x922a('0x28')];};this[_0x922a('0x30')]=function(){var _0x5ce2d8=this[_0x922a('0x2b')]();return this[_0x922a('0x25')]*this[_0x922a('0x28')]+this[_0x922a('0x2b')]()*(this['per']*this[_0x922a('0x27')])+this[_0x922a('0x25')]*this[_0x922a('0x29')];};this[_0x922a('0x36')]=function(){return this[_0x922a('0x30')]()-this[_0x922a('0x25')];};this[_0x922a('0x37')]=function(_0x4d2877){var _0x331ba5;var _0x195b5f;var _0x389a58;var _0x1ce4ba;if(_0x4d2877==0x0){_0x331ba5=this[_0x922a('0x32')]();_0x389a58=0x0;}else{if(_0x4d2877==this[_0x922a('0x27')])_0x331ba5=this['getFinalPayment']();else _0x331ba5=this[_0x922a('0x2b')]();_0x389a58=this[_0x922a('0x2e')](_0x4d2877)*this[_0x922a('0x2c')];}_0x195b5f=_0x331ba5-_0x389a58;_0x1ce4ba=this['getTotalPayment']()-this[_0x922a('0x2f')](_0x4d2877);var _0x4dee44=new schedulePeriod(_0x4d2877,_0x331ba5,_0x195b5f,_0x389a58,_0x1ce4ba);var _0x29041d=this[_0x922a('0x30')]();var _0x431451=this[_0x922a('0x2f')](_0x4d2877);return _0x4dee44;};this[_0x922a('0x38')]=function(){this[_0x922a('0x1b')]=[];for(i=0x0;i<=this['n_per'];i++){this['schedule'][_0x922a('0x39')](this['getSchedulePeriod'](i));}};this['updatePlan']=function(){if(this[_0x922a('0x25')]>0x0)this['setSchedule']();};this[_0x922a('0x3a')]();this['setPrice']=function(_0xfa71e1){this[_0x922a('0x25')]=_0xfa71e1;this[_0x922a('0x3a')]();};this[_0x922a('0x3b')]=function(){this['rate']=_0x57c31b;this['updatePlan']();};this[_0x922a('0x3c')]=function(){this['n_per']=_0x1012eb;this[_0x922a('0x3a')]();};this['setDownPayment']=function(_0x288f81){this[_0x922a('0x28')]=_0x288f81;this[_0x922a('0x3a')]();};this[_0x922a('0x3d')]=function(_0x1fb418){this[_0x922a('0x29')]=_0x1fb418;this[_0x922a('0x3a')]();};this['setGracePer']=function(){this[_0x922a('0x2d')]=_0x47a2d1;this[_0x922a('0x3a')]();};this[_0x922a('0x3e')]=function(_0xfa71e1,_0x57c31b,_0x1012eb,_0x581cbb,_0x32f2c8,_0x47a2d1){this[_0x922a('0x25')]=_0xfa71e1;this[_0x922a('0x2c')]=_0x57c31b;this[_0x922a('0x27')]=_0x1012eb;this[_0x922a('0x28')]=_0x581cbb;this[_0x922a('0x29')]=_0x32f2c8;this['grace_per']=_0x47a2d1;this[_0x922a('0x3a')]();};}function schedulePeriod(_0xb4e757,_0x554d26,_0x30c6ea,_0x17788d,_0x2ad89b){this[_0x922a('0x1c')]=_0xb4e757;this[_0x922a('0x1d')]=_0x554d26;this[_0x922a('0x3f')]=_0x30c6ea;this['interests']=_0x17788d;this[_0x922a('0x1e')]=_0x2ad89b;}function pmt_calc(_0x18d432,_0x5abda3,_0x212f52,_0x23954c,_0xd72dd2,_0x5e16c5,_0x497450){var _0x3f84bd=_0x212f52*(0x1-_0x23954c);var _0x344f71=-future_value(_0x18d432,_0x5e16c5,_0x3f84bd);var _0x1dd196=_0x212f52*_0xd72dd2;var _0x3105e7=_0x5abda3-_0x5e16c5;_0x1dd196=typeof _0x1dd196!==_0x922a('0x40')?_0x1dd196:0x0;_0x497450=typeof _0x497450!==_0x922a('0x40')?_0x497450:0x0;if(_0x18d432!=0x0){var _0x10e26b=Math[_0x922a('0x41')](0x1+_0x18d432,_0x3105e7);return-(_0x18d432*(_0x1dd196+_0x10e26b*_0x344f71))/((-0x1+_0x10e26b)*(0x1+_0x18d432*_0x497450));}else if(_0x3105e7!=0x0){return-(_0x1dd196+_0x344f71)/_0x3105e7;}return 0x0;}function future_value(_0x27c49c,_0x1ad0fb,_0x125fb3){var _0x18aef6=_0x125fb3*Math[_0x922a('0x41')](0x1+_0x27c49c,_0x1ad0fb);return _0x18aef6;}function getTotalInterests(_0x4bb357,_0x27e47,_0x27cb3d){return _0x27e47*_0x27cb3d-_0x4bb357;}function getPlan(_0x1f556f){console[_0x922a('0x42')](_0x922a('0x43')+_0x1f556f);return new Promise(function(_0x5201ba,_0x440e50){if(!![]){console[_0x922a('0x42')]('!!!\x20Plan\x20name\x20after\x20promise:\x20'+_0x1f556f);var _0x7b59c6=_0x1f556f[_0x922a('0x44')]();var _0x3f675e;var _0x528dba;var _0x39b051;var _0x26f2a0;var _0xcc59fa;var _0x1e8d6d;var _0x282ea8;switch(_0x7b59c6){case _0x922a('0x45'):_0x3f675e=membership_rate;_0x528dba=membership_per;_0x39b051=membership_n_per;_0x26f2a0=membership_down_payment;_0xcc59fa=membership_residual_payment;_0x1e8d6d=membership_grace_per;_0x282ea8=membership_image_url;break;case _0x922a('0x46'):_0x3f675e=exclusive_rate;_0x528dba=exclusive_per;_0x39b051=exclusive_n_per;_0x26f2a0=exclusive_down_payment;_0xcc59fa=exclusive_residual_payment;_0x1e8d6d=exclusive_grace_per;_0x282ea8=exclusive_image_url;break;case _0x922a('0x47'):_0x3f675e=elite_rate;_0x528dba=elite_per;_0x39b051=elite_n_per;_0x26f2a0=elite_down_payment;_0xcc59fa=elite_residual_payment;_0x1e8d6d=elite_grace_per;_0x282ea8=elite_image_url;break;case'GANCHO':_0x3f675e=gancho_rate;_0x528dba=gancho_per;_0x39b051=gancho_n_per;_0x26f2a0=gancho_down_payment;_0xcc59fa=gancho_residual_payment;_0x1e8d6d=gancho_grace_per;_0x282ea8=gancho_image_url;break;case'TAYLORMADE':_0x3f675e=taylormade_rate;_0x528dba=taylormade_per;_0x39b051=taylormade_n_per;_0x26f2a0=taylormade_down_payment;_0xcc59fa=taylormade_residual_payment;_0x1e8d6d=taylormade_grace_per;_0x282ea8=taylormade_image_url;break;default:_0x3f675e=elite_rate;_0x528dba=elite_per;_0x39b051=elite_n_per;_0x26f2a0=elite_down_payment;_0xcc59fa=elite_residual_payment;_0x1e8d6d=elite_grace_per;_0x282ea8=elite_image_url;}_0x5201ba(new Plan(_0x1f556f,price,_0x3f675e,_0x528dba,_0x39b051,_0x26f2a0,_0xcc59fa,_0x1e8d6d,_0x282ea8));}else{_0x440e50(Error(_0x922a('0x48')));}});}function scheduleToString(_0x2bbf48){console[_0x922a('0x42')]('Price:\x20'+_0x2bbf48['price']);console[_0x922a('0x42')](_0x922a('0x49'));console[_0x922a('0x42')](_0x922a('0x4a')+_0x2bbf48['getTotalPayment']());$[_0x922a('0x4b')](_0x2bbf48[_0x922a('0x1b')],function(_0x466078,_0x4c66f6){var _0x16ec27='';$[_0x922a('0x4b')](_0x4c66f6,function(_0x27d6bc,_0x431181){_0x16ec27+=_0x431181+'\x09';});console[_0x922a('0x42')](_0x466078+':\x20'+_0x16ec27);});}function initializeInputTags(){plan_name_tag=$(_0x922a('0x4c'));price_tag=$('#price_tag');months_tag=$('#months_tag');rate_tag=$(_0x922a('0x4d'));down_payment_value_tag=$(_0x922a('0x4e'));down_payment_tag=$(_0x922a('0x4f'));residual_payment_value_tag=$(_0x922a('0x50'));residual_payment_tag=$(_0x922a('0x51'));grace_tag=$(_0x922a('0x52'));}function getInputTagsValues(){plan_name=plan_name_tag[_0x922a('0x7')]();price=getTagValueForNumber(price_tag);down_payment=getTagValueForNumber(down_payment_tag)/0x64;down_payment_value=getTagValueForNumber(down_payment_value_tag);residual_payment=getTagValueForNumber(residual_payment_tag)/0x64;residual_payment_value=getTagValueForNumber(residual_payment_value_tag);months=getTagValueForNumber(months_tag);rate=getTagValueForNumber(rate_tag)/0x64;grace=getTagValueForNumber(grace_tag);}function updateInputs(){setTagValueForNumber(down_payment_tag,down_payment*0x64,default_decimals);setTagValueForNumber(down_payment_value_tag,down_payment_value,0x0);setTagValueForNumber(residual_payment_tag,residual_payment*0x64,default_decimals);setTagValueForNumber(residual_payment_value_tag,residual_payment_value,0x0);setTagValueForNumber(months_tag,months,0x0);setTagValueForNumber(rate_tag,rate*0x64,default_decimals);setTagValueForNumber(grace_tag,grace,0x0);}function initializeOthers(){timeline_div=$(_0x922a('0x53'));}function setValuesFromPlan(_0x5a5539){setInputValuesFromPlan(_0x5a5539);setOutputValuesFromPlan(_0x5a5539);}function setInputValuesFromPlan(_0x14929b){plan_name=_0x14929b[_0x922a('0x54')];price=_0x14929b['price'];months=_0x14929b['per']*_0x14929b[_0x922a('0x27')];rate=_0x14929b[_0x922a('0x2c')];down_payment=_0x14929b[_0x922a('0x28')];down_payment_value=_0x14929b[_0x922a('0x25')]*_0x14929b[_0x922a('0x28')];residual_payment=_0x14929b['residual_payment'];residual_payment_value=_0x14929b['price']*_0x14929b['residual_payment'];grace=_0x14929b[_0x922a('0x2d')];plan_image=plan[_0x922a('0x2a')];}function setOutputValuesFromPlan(_0x272fbf){monthly_payment=_0x272fbf['getPeriodPayment']();last_payment=_0x272fbf[_0x922a('0x34')]();total_payment=_0x272fbf[_0x922a('0x30')]();total_interest=_0x272fbf[_0x922a('0x36')]();}function initializeOutputTags(){monthly_payment_tag=$(_0x922a('0x55'));last_payment_tag=$(_0x922a('0x56'));total_payment_tag=$(_0x922a('0x57'));total_interest_tag=$(_0x922a('0x58'));table_div=$(_0x922a('0x59'));createPlainTable(table_div,schedule_table,table_name);}function updateOutputs(){setTagValueForNumber(monthly_payment_tag,monthly_payment,0x0);setTagValueForNumber(last_payment_tag,last_payment,0x0);setTagValueForNumber(total_payment_tag,total_payment,0x0);setTagValueForNumber(total_interest_tag,total_interest,0x0);updateTable(table_name,plan[_0x922a('0x1b')]);}function updateInputsAndOutputs(){updateInputs();updateOutputs();}function updateOthers(){$(_0x922a('0x53'))[_0x922a('0x5a')](_0x922a('0x5b'),plan_image);}function initializeOtherSimuTags(){myModal=document[_0x922a('0x17')](_0x922a('0x5c'));img=document[_0x922a('0x17')]('timeline_div');modalImg=document[_0x922a('0x17')](_0x922a('0x5d'));captionText=document[_0x922a('0x17')](_0x922a('0x5e'));my_modal_span=document[_0x922a('0x5f')]('close')[0x0];}var event_type_to_respond;var event_type_to_respond_dec=_0x922a('0x60');function initializeListeners(){if(!isMobileDevice())event_type_to_respond=_0x922a('0x61');else event_type_to_respond=_0x922a('0x62');price_tag[_0x922a('0x63')](event_type_to_respond,function(){updateOnPriceChange();showUIResults();});$('.independent-field')[_0x922a('0x63')](event_type_to_respond,function(){updateIndependentFieldOnChange();showUIResults();});$('.independent-field_dec')['bind'](event_type_to_respond_dec,function(){updateIndependentFieldOnChange();showUIResults();});down_payment_tag[_0x922a('0x63')](event_type_to_respond,function(){var _0x299baf=event[_0x922a('0x64')];console[_0x922a('0x42')](_0x299baf+'\x20is\x20fired');updateDownPaymentOnChange();showUIResults();});residual_payment_tag[_0x922a('0x63')](event_type_to_respond,function(){updateOnResidualPaymentChange();showUIResults();});down_payment_value_tag[_0x922a('0x63')](event_type_to_respond,function(){var _0x210871=event[_0x922a('0x64')];console['log'](_0x210871+_0x922a('0x65'));updateOnDownPaymentValueChange();showUIResults();});residual_payment_value_tag[_0x922a('0x63')](event_type_to_respond,function(){updateOnResidualPaymentValueChange();showUIResults();});$(_0x922a('0x66'))['on']('click\x20tap',function(){if(validateUIInputs()){$(_0x922a('0x67'))[_0x922a('0x68')](0x3e8);}});plan_name_tag[_0x922a('0x63')]('change',function(){setPlan(plan_name_tag[_0x922a('0x7')]());});initializeModalListeners();}function updateInputsOnChange(){getInputTagsValues();updatePlanFromVars();}function updatePlanFromVars(){plan[_0x922a('0x3e')](price,rate,months/plan['per'],down_payment,residual_payment,grace);setValuesFromPlan(plan);updateInputsAndOutputs();}function updateOnPriceChange(){price=getTagValueForNumber(price_tag);down_payment_value=price*down_payment;residual_payment_value=price*residual_payment;setTagValueForNumber(down_payment_value_tag,down_payment_value,0x0);setTagValueForNumber(residual_payment_value_tag,residual_payment_value,0x0);updatePlanFromVars();}function updateIndependentFieldOnChange(){getInputTagsValues();updatePlanFromVars();}function updateDownPaymentOnChange(){down_payment=getTagValueForNumber(down_payment_tag)/0x64;down_payment_value=price*down_payment;setTagValueForNumber(down_payment_value_tag,down_payment_value,0x0);updatePlanFromVars();}function updateOnResidualPaymentChange(){residual_payment=getTagValueForNumber(residual_payment_tag)/0x64;residual_payment_value=price*residual_payment;setTagValueForNumber(residual_payment_value_tag,residual_payment_value,0x0);updatePlanFromVars();}function updateOnDownPaymentValueChange(){down_payment_value=getTagValueForNumber(down_payment_value_tag);if(validPayment(down_payment_value,price,residual_payment_value)){down_payment=down_payment_value/price;setTagValueForNumber(down_payment_tag,down_payment*0x64,0x0);updatePlanFromVars();}}function updateOnResidualPaymentValueChange(){residual_payment_value=getTagValueForNumber(residual_payment_value_tag);if(validPayment(residual_payment_value,price,down_payment_value)){residual_payment=residual_payment_value/price;setTagValueForNumber(residual_payment_tag,residual_payment*0x64,0x0);updatePlanFromVars();}}function showUIResults(){if(validateUIInputs()){$(_0x922a('0x69'))['show'](0x3e8);if($(_0x922a('0x69'))['is'](_0x922a('0x6a'))){$(_0x922a('0x69'))[_0x922a('0x6b')](0x3e8);}}else{$(_0x922a('0x69'))['hide'](0x3e8);$(_0x922a('0x67'))['hide'](0x3e8);}}function validateUIInputs(){if(plan&&plan!==_0x922a('0x6c')&&plan!=='undefined'&&plan['price']>0x0&&plan['n_per']>0x0&&plan[_0x922a('0x2c')]>0x0)return!![];return![];}function initializeModalListeners(){try{img[_0x922a('0x6d')]=function(){myModal[_0x922a('0x6e')][_0x922a('0x6f')]=_0x922a('0x70');modalImg['src']=this[_0x922a('0x5b')];captionText[_0x922a('0x12')]=this[_0x922a('0x71')];$('#expandDetail')['hide']();};my_modal_span[_0x922a('0x6d')]=function(){myModal[_0x922a('0x6e')][_0x922a('0x6f')]=_0x922a('0x72');$(_0x922a('0x66'))[_0x922a('0x6b')]();};}catch(_0x365cc4){console[_0x922a('0x42')](_0x922a('0x73'));}}var plan;var plan_name;var price=0x0;var months;var rate;var down_payment;var down_payment_value;var residual_payment;var residual_payment_value;var grace;var plan_image;var plan_name_tag;var price_tag;var months_tag;var rate_tag;var down_payment_value_tag;var down_payment_tag;var residual_payment_value_tag;var residual_payment_tag;var grace_tag;var monthly_payment;var last_payment;var total_payment;var total_interest;var monthly_payment_tag;var last_payment_tag;var total_payment_tag;var total_interest_tag;var table_div;var schedule_table;var default_plan_name=_0x922a('0x74');var table_name=_0x922a('0x75');var default_decimals=0x2;var timeline_div;var modal;var img;var modalImg;var captionText;var myModal;var my_modal_span;$(document)[_0x922a('0x76')](function(){init();});function init(){initializeInputTags();initializeOutputTags();initializeOtherSimuTags();setDefaultPlan();initializeOthers();initializeListeners();}function setPlan(_0x12d10f){console[_0x922a('0x42')](_0x922a('0x77'));getPlan(_0x12d10f)[_0x922a('0x78')](function(_0x2155f4){console[_0x922a('0x42')]('!!!plan\x20set');plan=_0x2155f4;})[_0x922a('0x78')](function(){console[_0x922a('0x42')](_0x922a('0x79'));setValuesFromPlan(plan);updateInputsAndOutputs();updateOthers();console[_0x922a('0x42')]('!!!Values\x20set');});}function setPrice(_0x390208){price=_0x390208;}function setDefaultPlan(){setPlan(default_plan_name);}