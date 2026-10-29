                    if(!(r1 != r3)) { _fun3349_ip = 90; continue _fun3349 }
case 85:
                    r1 = r1.bind(r0)(r2);
case 90:
                    return r0;
                }
            };
            r0['value'] = r5;
            r2[6] = r0;
            r0 = {};
            r5 = '_deactivate';
            r0['key'] = r5;
            r5 = function(a0) { // Original name: _deactivate, environment: r1
                _fun3350: for(var _fun3350_ip = 0; ; ) switch(_fun3350_ip) {
case 0:
                    r7 = a0;
                    r1 = this;
                    var _closure3_slot0 = r7;
                    r0 = r1._config;
                    r6 = r0.onPressOut;
                    var _closure3_slot1 = r6;
                    r0 = null;
                    if(!(r6 != r0)) { _fun3350_ip = 191; continue _fun3350 }
case 35:
                    r10 = _closure1_slot18;
                    r3 = r1._config;
                    r9 = r3.minPressDuration;
                    r5 = undefined;
                    r8 = 0;
                    r3 = 130;
                    r12 = r10.bind(r5)(r9, r8, r3);
                    r3 = global;
                    r10 = r3.Date;
                    r9 = r10.now;
                    r10 = r9.bind(r10)();
                    r11 = r1._touchActivateTime;
                    r13 = r11 != r0;
                    r9 = 0;
                    if(!r13) { _fun3350_ip = 102; continue _fun3350 }
case 99:
                    r9 = r11;
case 102:
                    r9 = r10 - r9;
                    r11 = r3.Math;
                    r10 = r11.max;
                    r9 = r12 - r9;
                    r12 = _closure1_slot18;
                    r4 = r1._config;
                    r4 = r4.delayPressOut;
                    r4 = r12.bind(r5)(r4);
                    r4 = r10.bind(r11)(r9, r4);
                    if(!(!(r4 > r8))) { _fun3350_ip = 158; continue _fun3350 }
case 151:
                    r6 = r6.bind(r5)(r7);
                    _fun3350_ip = 191; continue _fun3350;
case 158:
                    r6 = r7.persist;
                    r6 = r6.bind(r7)();
                    r3 = r3.setTimeout;
                    r2 = function() { // Environment: r2
                        r2 = _closure3_slot1;
                        r1 = _closure3_slot0;
                        r0 = undefined;
                        r1 = r2.bind(r0)(r1);
                        return r0;
                    };
                    r2 = r3.bind(r5)(r2, r4);
                    r1['_pressOutDelayTimeout'] = r2;
case 191:
                    r1['_touchActivateTime'] = r0;
                    r0 = undefined;
                    return r0;
                }
            };
            r0['value'] = r5;
            r2[7] = r0;
            r0 = {};
            r5 = '_measureResponderRegion';
            r0['key'] = r5;
            r5 = function() { // Original name: _measureResponderRegion, environment: r1
                _fun3352: for(var _fun3352_ip = 0; ; ) switch(_fun3352_ip) {
case 0:
                    r0 = this;
                    r2 = r0._responderID;
                    r1 = null;
                    if(!(r2 != r1)) { _fun3352_ip = 96; continue _fun3352 }
case 14:
                    r1 = r0._responderID;
                    r2 = typeof r1;
                    r1 = 'number';
                    if(!(r2 !== r1)) { _fun3352_ip = 56; continue _fun3352 }
case 31:
                    r3 = r0._responderID;
                    r2 = r3.measure;
                    r1 = r0._measureCallback;
                    r1 = r2.bind(r3)(r1);
                    _fun3352_ip = 92; continue _fun3352;
case 56:
                    r1 = _closure1_slot6;
                    r3 = r1.default;
                    r2 = r3.measure;
                    r1 = r0._responderID;
                    r0 = r0._measureCallback;
                    r0 = r2.bind(r3)(r1, r0);
case 92:
                    r0 = undefined;
                    return r0;
case 96:
                    r0 = undefined;
                    return r0;
                }
            };
            r0['value'] = r5;
            r2[8] = r0;
            r0 = {};
            r5 = '_isTouchWithinResponderRegion';
            r0['key'] = r5;
            r5 = function(a0, a1) { // Original name: _isTouchWithinResponderRegion, environment: r1
                _fun3353: for(var _fun3353_ip = 0; ; ) switch(_fun3353_ip) {
case 0:
                    r1 = a0;
                    r3 = a1;
                    r4 = this;
                    r7 = _closure1_slot0;
                    r8 = _closure1_slot1;
                    r5 = 10;
                    r2 = r8[r5];
                    r0 = undefined;
                    r2 = r7.bind(r0)(r2);
                    r9 = r2.normalizeRect;
                    r2 = r4._config;
                    r2 = r2.hitSlop;
                    r2 = r9.bind(r0)(r2);
                    r5 = r8[r5];
                    r5 = r7.bind(r0)(r5);
                    r5 = r5.normalizeRect;
                    r4 = r4._config;
                    r4 = r4.pressRectOffset;
                    r8 = r5.bind(r0)(r4);
                    r11 = r3.bottom;
                    r14 = r3.left;
                    r15 = r3.right;
                    r13 = r3.top;
                    r7 = null;
                    r3 = r11;
                    r5 = r14;
                    r9 = r15;
                    r4 = r13;
                    if(!(r2 != r7)) { _fun3353_ip = 226; continue _fun3353 }
case 124:
                    r10 = r2.bottom;
                    r12 = r11;
                    if(!(r10 != r7)) { _fun3353_ip = 145; continue _fun3353 }
case 136:
                    r10 = r2.bottom;
                    r12 = r11 + r10;
case 145:
                    r10 = r2.left;
                    r11 = r14;
                    if(!(r10 != r7)) { _fun3353_ip = 166; continue _fun3353 }
case 157:
                    r10 = r2.left;
                    r11 = r14 - r10;
case 166:
                    r14 = r2.right;
                    r10 = r15;
                    if(!(r14 != r7)) { _fun3353_ip = 187; continue _fun3353 }
case 178:
                    r14 = r2.right;
                    r10 = r15 + r14;
case 187:
                    r14 = r2.top;
                    r3 = r12;
                    r5 = r11;
                    r9 = r10;
                    r4 = r13;
                    if(!(r14 != r7)) { _fun3353_ip = 226; continue _fun3353 }
case 208:
                    r2 = r2.top;
                    r4 = r13 - r2;
                    r3 = r12;
                    r5 = r11;
                    r9 = r10;
case 226:
                    r10 = r8 == r7;
                    r2 = undefined;
                    if(r10) { _fun3353_ip = 240; continue _fun3353 }
case 235:
                    r2 = r8.bottom;
case 240:
                    if(!(r2 == r7)) { _fun3353_ip = 253; continue _fun3353 }
case 244:
                    r10 = _closure1_slot15;
                    r2 = r10.bottom;
case 253:
                    r2 = r3 + r2;
                    r10 = r8 == r7;
                    r3 = undefined;
                    if(r10) { _fun3353_ip = 271; continue _fun3353 }
case 266:
                    r3 = r8.left;
case 271:
                    if(!(r3 == r7)) { _fun3353_ip = 284; continue _fun3353 }
case 275:
                    r10 = _closure1_slot15;
                    r3 = r10.left;
case 284:
                    r3 = r5 - r3;
                    r10 = r8 == r7;
                    r5 = undefined;
                    if(r10) { _fun3353_ip = 302; continue _fun3353 }
case 297:
                    r5 = r8.right;
case 302:
                    if(!(r5 == r7)) { _fun3353_ip = 315; continue _fun3353 }
case 306:
                    r10 = _closure1_slot15;
                    r5 = r10.right;
case 315:
                    r5 = r9 + r5;
                    r9 = r8 == r7;
                    r0 = undefined;
                    if(r9) { _fun3353_ip = 333; continue _fun3353 }
case 328:
                    r0 = r8.top;
case 333:
                    if(!(r0 == r7)) { _fun3353_ip = 346; continue _fun3353 }
case 337:
                    r6 = _closure1_slot15;
                    r0 = r6.top;
case 346:
                    r4 = r4 - r0;
                    r0 = r1.pageX;
                    r0 = r0 > r3;
                    if(!r0) { _fun3353_ip = 371; continue _fun3353 }
case 362:
                    r3 = r1.pageX;
                    r0 = r3 < r5;
case 371:
                    if(!r0) { _fun3353_ip = 383; continue _fun3353 }
case 374:
                    r3 = r1.pageY;
                    r0 = r3 > r4;
case 383:
                    if(!r0) { _fun3353_ip = 395; continue _fun3353 }
case 386:
                    r1 = r1.pageY;
                    r0 = r1 < r2;
case 395:
                    return r0;
                }
            };
            r0['value'] = r5;
            r2[9] = r0;
            r0 = {};
            r5 = '_handleLongPress';
            r0['key'] = r5;
            r5 = function(a0) { // Original name: _handleLongPress, environment: r1
                _fun3354: for(var _fun3354_ip = 0; ; ) switch(_fun3354_ip) {
case 0:
                    r3 = this;
                    r1 = r3._touchState;
                    r0 = 'RESPONDER_ACTIVE_PRESS_IN';
                    if(!(r1 !== r0)) { _fun3354_ip = 30; continue _fun3354 }
case 16:
                    r1 = r3._touchState;
                    r0 = 'RESPONDER_ACTIVE_LONG_PRESS_IN';
                    if(!(r1 === r0)) { _fun3354_ip = 49; continue _fun3354 }
case 30:
                    r2 = r3._receiveSignal;
                    r1 = 'LONG_PRESS_DETECTED';
                    r0 = a0;
                    r0 = r2.bind(r3)(r1, r0);
case 49:
                    r0 = undefined;
                    return r0;
                }
            };
            r0['value'] = r5;
            r2[10] = r0;
            r0 = {};
            r5 = '_cancelHoverInDelayTimeout';
            r0['key'] = r5;
            r5 = function() { // Original name: _cancelHoverInDelayTimeout, environment: r1
                _fun3355: for(var _fun3355_ip = 0; ; ) switch(_fun3355_ip) {
case 0:
                    r1 = this;
                    r2 = r1._hoverInDelayTimeout;
                    r0 = null;
                    if(!(r2 != r0)) { _fun3355_ip = 41; continue _fun3355 }
case 14:
                    r2 = global;
                    r4 = r2.clearTimeout;
                    r3 = r1._hoverInDelayTimeout;
                    r2 = undefined;
                    r2 = r4.bind(r2)(r3);
                    r1['_hoverInDelayTimeout'] = r0;
case 41:
                    r0 = undefined;
                    return r0;
                }
            };
            r0['value'] = r5;
            r2[11] = r0;
            r0 = {};
            r5 = '_cancelHoverOutDelayTimeout';
            r0['key'] = r5;
            r5 = function() { // Original name: _cancelHoverOutDelayTimeout, environment: r1
                _fun3356: for(var _fun3356_ip = 0; ; ) switch(_fun3356_ip) {
case 0:
                    r1 = this;
                    r2 = r1._hoverOutDelayTimeout;
                    r0 = null;
                    if(!(r2 != r0)) { _fun3356_ip = 41; continue _fun3356 }
case 14:
                    r2 = global;
                    r4 = r2.clearTimeout;
                    r3 = r1._hoverOutDelayTimeout;
                    r2 = undefined;
                    r2 = r4.bind(r2)(r3);
                    r1['_hoverOutDelayTimeout'] = r0;
case 41:
                    r0 = undefined;
                    return r0;
                }
            };
            r0['value'] = r5;
            r2[12] = r0;
            r0 = {};
            r5 = '_cancelLongPressDelayTimeout';
            r0['key'] = r5;
            r5 = function() { // Original name: _cancelLongPressDelayTimeout, environment: r1
                _fun3357: for(var _fun3357_ip = 0; ; ) switch(_fun3357_ip) {
case 0:
                    r1 = this;
                    r2 = r1._longPressDelayTimeout;
                    r0 = null;
                    if(!(r2 != r0)) { _fun3357_ip = 41; continue _fun3357 }
case 14:
                    r2 = global;
                    r4 = r2.clearTimeout;
                    r3 = r1._longPressDelayTimeout;
                    r2 = undefined;
                    r2 = r4.bind(r2)(r3);
                    r1['_longPressDelayTimeout'] = r0;
case 41:
                    r0 = undefined;
                    return r0;
                }
            };
            r0['value'] = r5;
            r2[13] = r0;
            r0 = {};
            r5 = '_cancelPressDelayTimeout';
            r0['key'] = r5;
            r5 = function() { // Original name: _cancelPressDelayTimeout, environment: r1
                _fun3358: for(var _fun3358_ip = 0; ; ) switch(_fun3358_ip) {
case 0:
                    r1 = this;
                    r2 = r1._pressDelayTimeout;
                    r0 = null;
                    if(!(r2 != r0)) { _fun3358_ip = 41; continue _fun3358 }
case 14:
                    r2 = global;
                    r4 = r2.clearTimeout;
                    r3 = r1._pressDelayTimeout;
                    r2 = undefined;
                    r2 = r4.bind(r2)(r3);
                    r1['_pressDelayTimeout'] = r0;
case 41:
                    r0 = undefined;
                    return r0;
                }
            };
            r0['value'] = r5;
            r2[14] = r0;
            r0 = {};
            r5 = '_cancelPressOutDelayTimeout';
            r0['key'] = r5;
            r5 = function() { // Original name: _cancelPressOutDelayTimeout, environment: r1
                _fun3359: for(var _fun3359_ip = 0; ; ) switch(_fun3359_ip) {
case 0:
                    r1 = this;
                    r2 = r1._pressOutDelayTimeout;
                    r0 = null;
                    if(!(r2 != r0)) { _fun3359_ip = 41; continue _fun3359 }
case 14:
                    r2 = global;
                    r4 = r2.clearTimeout;
                    r3 = r1._pressOutDelayTimeout;
                    r2 = undefined;
                    r2 = r4.bind(r2)(r3);
                    r1['_pressOutDelayTimeout'] = r0;
case 41:
                    r0 = undefined;
                    return r0;
                }
            };
            r0['value'] = r5;
            r2[15] = r0;
            r0 = {};
            r5 = 'setLongPressDeactivationDistance';
            r0['key'] = r5;
            r1 = function(a0) { // Original name: setLongPressDeactivationDistance, environment: r1
                r0 = a0;
                _closure1_slot16 = r0;
                r0 = undefined;
                return r0;
            };
            r0['value'] = r1;
            r1 = new Array(1);
            r1[0] = r0;
            r0 = undefined;
            r0 = r3.bind(r0)(r4, r2, r1);
            return r0;
        };
        r1 = r1.bind(r0)();
        r3['default'] = r1;
        r1 = function(a0) { // Original name: getTouchFromPressEvent, environment: r2
            _fun3361: for(var _fun3361_ip = 0; ; ) switch(_fun3361_ip) {
case 0:
                r4 = a0;
                r0 = r4.nativeEvent;
                r3 = r0.changedTouches;
                r1 = r0.touches;
                r2 = null;
                if(!(r1 != r2)) { _fun3361_ip = 37; continue _fun3361 }
case 26:
                r5 = r1.length;
                r0 = 0;
                if(!(!(r5 > r0))) { _fun3361_ip = 65; continue _fun3361 }
case 37:
                if(!(r3 != r2)) { _fun3361_ip = 52; continue _fun3361 }
case 41:
                r5 = r3.length;
                r2 = 0;
                if(!(!(r5 > r2))) { _fun3361_ip = 59; continue _fun3361 }
case 52:
                r4 = r4.nativeEvent;
                return r4;
case 59:
                r2 = r3[r2];
                return r2;
case 65:
                r0 = r1[r0];
                return r0;
            }
        };
        var _closure1_slot17 = r1;
        return r0;
    };
    r6 = 288;
    r5 = [1, 12, 13, 289, 292, 44, 33, 293, 20, 294, 295];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r5 = a1;
        r2 = a5;
        r6 = a6;
        r0 = 0;
        r1 = r6[r0];
        r0 = undefined;
        r4 = r5.bind(r0)(r1);
        r1 = global;
        r9 = r1.Object;
        r8 = r9.defineProperty;
        r7 = {};
        r1 = true;
        r7['value'] = r1;
        r1 = '__esModule';
        r1 = r8.bind(r9)(r2, r1, r7);
        r2['default'] = r0;
        r1 = 1;
        r1 = r6[r1];
        r1 = r5.bind(r0)(r1);
        r1 = r4.bind(r0)(r1);
        var _closure1_slot0 = r1;
        r1 = {};
        r3 = function() { // Original name: playTouchSound, environment: r3
            _fun3363: for(var _fun3363_ip = 0; ; ) switch(_fun3363_ip) {
case 0:
                r1 = _closure1_slot0;
                r1 = r1.default;
                if(!r1) { _fun3363_ip = 34; continue _fun3363 }
case 15:
                r0 = _closure1_slot0;
                r1 = r0.default;
                r0 = r1.playTouchSound;
                r0 = r0.bind(r1)();
case 34:
                r0 = undefined;
                return r0;
            }
        };
        r1['playTouchSound'] = r3;
        r2['default'] = r1;
        return r0;
    };
    r6 = 289;
    r5 = [1, 290];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun3364: for(var _fun3364_ip = 0; ; ) switch(_fun3364_ip) {
case 0:
            r2 = a5;
            var _closure1_slot0 = r2;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r3
                _fun3365: for(var _fun3365_ip = 0; ; ) switch(_fun3365_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun3365_ip = 104; continue _fun3365 }
case 20:
                    r2 = r1.WeakMap;
                    r3 = r2.prototype;
                    r3 = Object.create(r3, {constructor: {value: r2}});
                    r5 = r3;
                    r2 = new r5[r2](r4);
                    r2 = r2 instanceof Object ? r2 : r3;
                    var _closure2_slot0 = r2;
                    r1 = r1.WeakMap;
                    r2 = r1.prototype;
                    r2 = Object.create(r2, {constructor: {value: r1}});
                    r5 = r2;
                    r1 = new r5[r1](r4);
                    r1 = r1 instanceof Object ? r1 : r2;
                    var _closure2_slot1 = r1;
                    r2 = function(a0) { // Original name: _getRequireWildcardCache, environment: r0
                        _fun3366: for(var _fun3366_ip = 0; ; ) switch(_fun3366_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun3366_ip = 15; continue _fun3366 }
case 9:
                            r0 = _closure2_slot0;
                            _fun3366_ip = 19; continue _fun3366;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot3 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot3 = r0;
            r4 = global;
            r6 = r4.Object;
            r5 = r6.defineProperty;
            r1 = {};
            r0 = true;
            r1['value'] = r0;
            r0 = '__esModule';
            r0 = r5.bind(r6)(r2, r0, r1);
            r0 = {};
            var _closure1_slot1 = r0;
            r0 = undefined;
            r2['default'] = r0;
            r5 = a6;
            r1 = 0;
            r5 = r5[r1];
            r1 = a1;
            r6 = r1.bind(r0)(r5);
            if(!r6) { _fun3364_ip = 98; continue _fun3364 }
case 84:
            r5 = r6.__esModule;
            r1 = r6;
            if(r5) { _fun3364_ip = 365; continue _fun3364 }
case 98:
            r16 = null;
            if(!(r16 !== r6)) { _fun3364_ip = 356; continue _fun3364 }
case 107:
            r7 = typeof r6;
            r5 = 'object';
            if(!(r5 !== r7)) { _fun3364_ip = 129; continue _fun3364 }
case 118:
            r5 = 'function';
            if(!(r5 === r7)) { _fun3364_ip = 356; continue _fun3364 }
case 129:
            r5 = _closure1_slot3;
            r7 = r5.bind(r0)(r0);
            if(!r7) { _fun3364_ip = 157; continue _fun3364 }
case 141:
            r5 = r7.has;
            r5 = r5.bind(r7)(r6);
            if(r5) { _fun3364_ip = 344; continue _fun3364 }
case 157:
            r5 = Object.create(r16);
            r8 = r4.Object;
            r15 = r8.defineProperty;
            if(!r15) { _fun3364_ip = 185; continue _fun3364 }
case 174:
            r8 = r4.Object;
            r15 = r8.getOwnPropertyDescriptor;
case 185:
            r13 = r6;
            r9 = 'default';
            r8 = undefined;
            for(r10 in r13)
case 202:
            {
case 211:
                r20 = r10;
                if(r9 === r20) { _fun3364_ip = 202; continue _fun3364 }
case 218:
                r17 = {};
                r18 = r17.hasOwnProperty;
                r17 = r18.call;
                r17 = r17.bind(r18)(r6, r20);
                if(!r17) { _fun3364_ip = 202; continue _fun3364 }
case 239:
                r17 = null;
                if(!r15) { _fun3364_ip = 261; continue _fun3364 }
case 244:
                r19 = r4.Object;
                r18 = r19.getOwnPropertyDescriptor;
                r17 = r18.bind(r19)(r6, r20);
case 261:
                if(!r17) { _fun3364_ip = 280; continue _fun3364 }
case 264:
                r18 = r17.get;
                if(r18) { _fun3364_ip = 293; continue _fun3364 }
case 272:
                r18 = r17.set;
                if(r18) { _fun3364_ip = 293; continue _fun3364 }
case 280:
                r18 = r6[r20];
                r5[r20] = r18;
                r8 = r17;
                _fun3364_ip = 202; continue _fun3364;
case 293:
                r19 = r4.Object;
                r18 = r19.defineProperty;
                r18 = r18.bind(r19)(r5, r20, r17);
                r8 = r17;
                _fun3364_ip = 202; continue _fun3364;
            }
case 316:
            r5['default'] = r6;
            r1 = r5;
            if(!r7) { _fun3364_ip = 365; continue _fun3364 }
case 328:
            r8 = r7.set;
            r8 = r8.bind(r7)(r6, r5);
            r1 = r5;
            _fun3364_ip = 365; continue _fun3364;
case 344:
            r5 = r7.get;
            r1 = r5.bind(r7)(r6);
            _fun3364_ip = 365; continue _fun3364;
case 356:
            r5 = {};
            r5['default'] = r6;
            r1 = r5;
case 365:
            var _closure1_slot2 = r1;
            r5 = r4.Object;
            r4 = r5.keys;
            r5 = r4.bind(r5)(r1);
            r4 = r5.forEach;
            r3 = function(a0) { // Environment: r3
                _fun3367: for(var _fun3367_ip = 0; ; ) switch(_fun3367_ip) {
case 0:
                    r4 = a0;
                    var _closure2_slot0 = r4;
                    r0 = 'default';
                    if(!(r4 !== r0)) { _fun3367_ip = 152; continue _fun3367 }
case 20:
                    r0 = '__esModule';
                    if(!(r4 !== r0)) { _fun3367_ip = 152; continue _fun3367 }
case 31:
                    r1 = global;
                    r0 = r1.Object;
                    r0 = r0.prototype;
                    r6 = r0.hasOwnProperty;
                    r3 = r6.call;
                    r2 = _closure1_slot1;
                    r2 = r3.bind(r6)(r2, r4);
                    if(r2) { _fun3367_ip = 148; continue _fun3367 }
case 70:
                    r2 = _closure1_slot0;
                    r2 = r4 in r2;
                    if(!r2) { _fun3367_ip = 101; continue _fun3367 }
case 81:
                    r2 = _closure1_slot0;
                    r3 = r2[r4];
                    r2 = _closure1_slot2;
                    r2 = r2[r4];
                    if(!(r3 !== r2)) { _fun3367_ip = 144; continue _fun3367 }
case 101:
                    r3 = r1.Object;
                    r2 = r3.defineProperty;
                    r1 = _closure1_slot0;
                    r0 = {};
                    r6 = true;
                    r0['enumerable'] = r6;
                    r5 = function() { // Original name: get, environment: r5
                        r1 = _closure1_slot2;
                        r0 = _closure2_slot0;
                        r0 = r1[r0];
                        return r0;
                    };
                    r0['get'] = r5;
                    r0 = r2.bind(r3)(r1, r4, r0);
                    r0 = undefined;
                    return r0;
case 144:
                    r0 = undefined;
                    return r0;
case 148:
                    r0 = undefined;
                    return r0;
case 152:
                    r0 = undefined;
                    return r0;
                }
            };
            r3 = r4.bind(r5)(r3);
            r1 = r1.default;
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 290;
    r5 = [291];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun3369: for(var _fun3369_ip = 0; ; ) switch(_fun3369_ip) {
case 0:
            r2 = a5;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun3370: for(var _fun3370_ip = 0; ; ) switch(_fun3370_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun3370_ip = 104; continue _fun3370 }
case 20:
                    r2 = r1.WeakMap;
                    r3 = r2.prototype;
                    r3 = Object.create(r3, {constructor: {value: r2}});
                    r5 = r3;
                    r2 = new r5[r2](r4);
                    r2 = r2 instanceof Object ? r2 : r3;
                    var _closure2_slot0 = r2;
                    r1 = r1.WeakMap;
                    r2 = r1.prototype;
                    r2 = Object.create(r2, {constructor: {value: r1}});
                    r5 = r2;
                    r1 = new r5[r1](r4);
                    r1 = r1 instanceof Object ? r1 : r2;
                    var _closure2_slot1 = r1;
                    r2 = function(a0) { // Original name: _getRequireWildcardCache, environment: r0
                        _fun3371: for(var _fun3371_ip = 0; ; ) switch(_fun3371_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun3371_ip = 15; continue _fun3371 }
case 9:
                            r0 = _closure2_slot0;
                            _fun3371_ip = 19; continue _fun3371;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot0 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot0 = r0;
            r15 = global;
            r5 = r15.Object;
            r4 = r5.defineProperty;
            r3 = {};
            r0 = true;
            r3['value'] = r0;
            r0 = '__esModule';
            r0 = r4.bind(r5)(r2, r0, r3);
            r0 = undefined;
            r2['default'] = r0;
            r4 = a6;
            r3 = 0;
            r4 = r4[r3];
            r3 = a1;
            r3 = r3.bind(r0)(r4);
            if(!r3) { _fun3369_ip = 88; continue _fun3369 }
case 74:
            r5 = r3.__esModule;
            r4 = r3;
            if(r5) { _fun3369_ip = 355; continue _fun3369 }
case 88:
            r14 = null;
            if(!(r14 !== r3)) { _fun3369_ip = 346; continue _fun3369 }
case 97:
            r6 = typeof r3;
            r5 = 'object';
            if(!(r5 !== r6)) { _fun3369_ip = 119; continue _fun3369 }
case 108:
            r5 = 'function';
            if(!(r5 === r6)) { _fun3369_ip = 346; continue _fun3369 }
case 119:
            r1 = _closure1_slot0;
            r5 = r1.bind(r0)(r0);
            if(!r5) { _fun3369_ip = 147; continue _fun3369 }
case 131:
            r1 = r5.has;
            r1 = r1.bind(r5)(r3);
            if(r1) { _fun3369_ip = 334; continue _fun3369 }
case 147:
            r1 = Object.create(r14);
            r6 = r15.Object;
            r13 = r6.defineProperty;
            if(!r13) { _fun3369_ip = 175; continue _fun3369 }
case 164:
            r6 = r15.Object;
            r13 = r6.getOwnPropertyDescriptor;
case 175:
            r11 = r3;
            r7 = 'default';
            r6 = undefined;
            for(r8 in r11)
case 192:
            {
case 201:
                r19 = r8;
                if(r7 === r19) { _fun3369_ip = 192; continue _fun3369 }
case 208:
                r16 = {};
                r17 = r16.hasOwnProperty;
                r16 = r17.call;
                r16 = r16.bind(r17)(r3, r19);
                if(!r16) { _fun3369_ip = 192; continue _fun3369 }
case 229:
                r16 = null;
                if(!r13) { _fun3369_ip = 251; continue _fun3369 }
case 234:
                r18 = r15.Object;
                r17 = r18.getOwnPropertyDescriptor;
                r16 = r17.bind(r18)(r3, r19);
case 251:
                if(!r16) { _fun3369_ip = 270; continue _fun3369 }
case 254:
                r17 = r16.get;
                if(r17) { _fun3369_ip = 283; continue _fun3369 }
case 262:
                r17 = r16.set;
                if(r17) { _fun3369_ip = 283; continue _fun3369 }
case 270:
                r17 = r3[r19];
                r1[r19] = r17;
                r6 = r16;
                _fun3369_ip = 192; continue _fun3369;
case 283:
                r18 = r15.Object;
                r17 = r18.defineProperty;
                r17 = r17.bind(r18)(r1, r19, r16);
                r6 = r16;
                _fun3369_ip = 192; continue _fun3369;
            }
case 306:
            r1['default'] = r3;
            r4 = r1;
            if(!r5) { _fun3369_ip = 355; continue _fun3369 }
case 318:
            r6 = r5.set;
            r6 = r6.bind(r5)(r3, r1);
            r4 = r1;
            _fun3369_ip = 355; continue _fun3369;
case 334:
            r1 = r5.get;
            r4 = r1.bind(r5)(r3);
            _fun3369_ip = 355; continue _fun3369;
case 346:
            r1 = {};
            r1['default'] = r3;
            r4 = r1;
case 355:
            r3 = r4.get;
            r1 = 'SoundManager';
            r1 = r3.bind(r4)(r1);
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 291;
    r5 = [36];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r2 = a5;
        r0 = global;
        r5 = r0.Object;
        r4 = r5.defineProperty;
        r1 = {};
        r0 = true;
        r1['value'] = r0;
        r0 = '__esModule';
        r0 = r4.bind(r5)(r2, r0, r1);
        r0 = undefined;
        r2['default'] = r0;
        r1 = {};
        r4 = function() { // Original name: shouldEmitW3CPointerEvents, environment: r3
            r0 = false;
            return r0;
        };
        r1['shouldEmitW3CPointerEvents'] = r4;
        r3 = function() { // Original name: shouldPressibilityUseW3CPointerEventsForHover, environment: r3
            r0 = false;
            return r0;
        };
        r1['shouldPressibilityUseW3CPointerEventsForHover'] = r3;
        r2['default'] = r1;
        return r0;
    };
    r6 = 292;
    r5 = new Array(0);
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r5 = a1;
        r2 = a5;
        r6 = a6;
        r0 = 0;
        r3 = r6[r0];
        r0 = undefined;
        r4 = r5.bind(r0)(r3);
        r3 = global;
        r9 = r3.Object;
        r8 = r9.defineProperty;
        r7 = {};
        r3 = true;
        r7['value'] = r3;
        r3 = '__esModule';
        r3 = r8.bind(r9)(r2, r3, r7);
        r2['default'] = r0;
        r3 = 1;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot0 = r3;
        r3 = 2;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot1 = r3;
        r1 = function() { // Environment: r1
            r3 = function() { // Original name: PressabilityPerformanceEventEmitter, environment: r4
                r2 = this;
                r0 = _closure1_slot0;
                r3 = r0.default;
                r1 = _closure2_slot0;
                r0 = undefined;
                r1 = r3.bind(r0)(r2, r1);
                r1 = new Array(0);
                r2['_listeners'] = r1;
                return r0;
            };
            var _closure2_slot0 = r3;
            r0 = _closure1_slot1;
            r2 = r0.default;
            r0 = {};
            r1 = 'addListener';
            r0['key'] = r1;
            r1 = function(a0) { // Original name: addListener, environment: r4
                r0 = this;
                r2 = r0._listeners;
                r1 = r2.push;
                r0 = a0;
                r0 = r1.bind(r2)(r0);
                r0 = undefined;
                return r0;
            };
            r0['value'] = r1;
            r1 = new Array(3);
            r1[0] = r0;
            r0 = {};
            r5 = 'removeListener';
            r0['key'] = r5;
            r5 = function(a0) { // Original name: removeListener, environment: r4
                _fun3379: for(var _fun3379_ip = 0; ; ) switch(_fun3379_ip) {
case 0:
                    r0 = this;
                    r3 = r0._listeners;
                    r2 = r3.indexOf;
                    r1 = a0;
                    r3 = r2.bind(r3)(r1);
                    r1 = -1;
                    if(!(r3 > r1)) { _fun3379_ip = 50; continue _fun3379 }
case 30:
                    r2 = r0._listeners;
                    r1 = r2.splice;
                    r0 = 1;
                    r0 = r1.bind(r2)(r3, r0);
case 50:
                    r0 = undefined;
                    return r0;
                }
            };
            r0['value'] = r5;
            r1[1] = r0;
            r0 = {};
            r5 = 'emitEvent';
            r0['key'] = r5;
            r4 = function(a0) { // Original name: emitEvent, environment: r4
                _fun3380: for(var _fun3380_ip = 0; ; ) switch(_fun3380_ip) {
case 0:
                    r2 = this;
                    r0 = r2._listeners;
                    r3 = r0.length;
                    r0 = 0;
                    if(!(r3 !== r0)) { _fun3380_ip = 55; continue _fun3380 }
case 20:
                    r3 = a0;
                    r0 = undefined;
                    r3 = r3.bind(r0)();
                    var _closure3_slot0 = r3;
                    r3 = r2._listeners;
                    r2 = r3.forEach;
                    r1 = function(a0) { // Environment: r1
                        r2 = _closure3_slot0;
                        r1 = a0;
                        r0 = undefined;
                        r0 = r1.bind(r0)(r2);
                        return r0;
                    };
                    r1 = r2.bind(r3)(r1);
                    return r0;
case 55:
                    r0 = undefined;
                    return r0;
                }
            };
            r0['value'] = r4;
            r1[2] = r0;
            r0 = undefined;
            r0 = r2.bind(r0)(r3, r1);
            return r0;
        };
        r1 = r1.bind(r0)();
        r3 = r1.prototype;
        r3 = Object.create(r3, {constructor: {value: r1}});
        r13 = r3;
        r1 = new r13[r1](r12);
        r1 = r1 instanceof Object ? r1 : r3;
        r2['default'] = r1;
        return r0;
    };
    r6 = 293;
    r5 = [1, 12, 13];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun3382: for(var _fun3382_ip = 0; ; ) switch(_fun3382_ip) {
case 0:
            r7 = a1;
            r9 = a5;
            r8 = a6;
            r3 = 0;
            r2 = r8[r3];
            r0 = undefined;
            r6 = r7.bind(r0)(r2);
            r2 = global;
            r12 = r2.Object;
            r11 = r12.defineProperty;
            r10 = {};
            r5 = true;
            r10['value'] = r5;
            r4 = '__esModule';
            r4 = r11.bind(r12)(r9, r4, r10);
            r4 = function() { // Original name: isHoverEnabled, environment: r1
                r0 = _closure1_slot0;
                return r0;
            };
            r9['isHoverEnabled'] = r4;
            r4 = 1;
            r4 = r8[r4];
            r4 = r7.bind(r0)(r4);
            r4 = r6.bind(r0)(r4);
            r6 = false;
            var _closure1_slot0 = r6;
            r4 = r4.default;
            r6 = r4.OS;
            r4 = 'web';
            if(!(r6 === r4)) { _fun3382_ip = 267; continue _fun3382 }
case 111:
            r6 = r2.Boolean;
            r4 = r2.window;
            r7 = typeof r4;
            r4 = 'undefined';
            r4 = r7 !== r4;
            if(!r4) { _fun3382_ip = 148; continue _fun3382 }
case 136:
            r7 = r2.window;
            r4 = r7.document;
case 148:
            if(!r4) { _fun3382_ip = 169; continue _fun3382 }
case 151:
            r7 = r2.window;
            r7 = r7.document;
            r4 = r7.createElement;
case 169:
            r4 = r6.bind(r0)(r4);
            if(!r4) { _fun3382_ip = 267; continue _fun3382 }
case 177:
            r4 = 1000;
            var _closure1_slot1 = r4;
            var _closure1_slot2 = r3;
            r7 = function() { // Original name: disableHover, environment: r1
                _fun3385: for(var _fun3385_ip = 0; ; ) switch(_fun3385_ip) {
case 0:
                    r0 = global;
                    r1 = r0.Date;
                    r0 = r1.now;
                    r0 = r0.bind(r1)();
                    _closure1_slot2 = r0;
                    r0 = _closure1_slot0;
                    if(!r0) { _fun3385_ip = 37; continue _fun3385 }
case 31:
                    r0 = false;
                    _closure1_slot0 = r0;
case 37:
                    r0 = undefined;
                    return r0;
                }
            };
            r6 = r2.document;
            r4 = r6.addEventListener;
            r3 = 'touchstart';
            r3 = r4.bind(r6)(r3, r7, r5);
            r6 = r2.document;
            r4 = r6.addEventListener;
            r3 = 'touchmove';
            r3 = r4.bind(r6)(r3, r7, r5);
            r4 = r2.document;
            r3 = r4.addEventListener;
            r2 = 'mousemove';
            r1 = function() { // Original name: enableHover, environment: r1
                _fun3384: for(var _fun3384_ip = 0; ; ) switch(_fun3384_ip) {
case 0:
                    r0 = _closure1_slot0;
                    if(r0) { _fun3384_ip = 53; continue _fun3384 }
case 10:
                    r0 = global;
                    r2 = r0.Date;
                    r0 = r2.now;
                    r2 = r0.bind(r2)();
                    r0 = _closure1_slot2;
                    r2 = r2 - r0;
                    r0 = _closure1_slot1;
                    if(!(!(r2 < r0))) { _fun3384_ip = 53; continue _fun3384 }
case 43:
                    r0 = true;
                    _closure1_slot0 = r0;
                    r0 = undefined;
                    return r0;
case 53:
                    r0 = undefined;
                    return r0;
                }
            };
            r1 = r3.bind(r4)(r2, r1, r5);
case 267:
            return r0;
        }
    };
    r6 = 294;
    r5 = [1, 33];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r1 = a5;
        r2 = function(a0) { // Original name: createSquare, environment: r0
            r1 = a0;
            r0 = {};
            r0['bottom'] = r1;
            r0['left'] = r1;
            r0['right'] = r1;
            r0['top'] = r1;
            return r0;
        };
        var _closure1_slot0 = r2;
        r3 = global;
        r6 = r3.Object;
        r5 = r6.defineProperty;
        r4 = {};
        r3 = true;
        r4['value'] = r3;
        r3 = '__esModule';
        r3 = r5.bind(r6)(r1, r3, r4);
        r1['createSquare'] = r2;
        r0 = function(a0) { // Original name: normalizeRect, environment: r0
            _fun3388: for(var _fun3388_ip = 0; ; ) switch(_fun3388_ip) {
case 0:
                r3 = a0;
                r2 = typeof r3;
                r1 = 'number';
                r0 = r3;
                if(!(r2 === r1)) { _fun3388_ip = 31; continue _fun3388 }
case 17:
                r2 = _closure1_slot0;
                r1 = undefined;
                r0 = r2.bind(r1)(r3);
case 31:
                return r0;
            }
        };
        r1['normalizeRect'] = r0;
        r0 = undefined;
        return r0;
    };
    r6 = 295;
    r5 = new Array(0);
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun3389: for(var _fun3389_ip = 0; ; ) switch(_fun3389_ip) {
case 0:
            r5 = a1;
            r2 = a5;
            r7 = a6;
            var _closure1_slot0 = r5;
            var _closure1_slot1 = r7;
            r0 = 0;
            r1 = r7[r0];
            r0 = undefined;
            r4 = r5.bind(r0)(r1);
            r1 = global;
            r9 = r1.Object;
            r8 = r9.defineProperty;
            r6 = {};
            r1 = true;
            r6['value'] = r1;
            r1 = '__esModule';
            r1 = r8.bind(r9)(r2, r1, r6);
            r2['NativeText'] = r0;
            r2['NativeVirtualText'] = r0;
            r1 = 1;
            r1 = r7[r1];
            r1 = r5.bind(r0)(r1);
            r6 = r4.bind(r0)(r1);
            r1 = 2;
            r1 = r7[r1];
            r1 = r5.bind(r0)(r1);
            r4 = r4.bind(r0)(r1);
            r1 = {};
            r5 = {'isHighlighted': true, 'isPressable': true, 'numberOfLines': true, 'ellipsizeMode': true, 'allowFontScaling': true, 'dynamicTypeRamp': true, 'maxFontSizeMultiplier': true, 'disabled': true, 'selectable': true, 'selectionColor': true, 'adjustsFontSizeToFit': true, 'minimumFontScale': true, 'textBreakStrategy': true, 'onTextLayout': true, 'onInlineViewLayout': true, 'dataDetectorType': true, 'android_hyphenationFrequency': true, 'lineBreakStrategyIOS': true};
            r1['validAttributes'] = r5;
            r5 = {};
            r7 = {};
            r8 = 'onTextLayout';
            r7['registrationName'] = r8;
            r5['topTextLayout'] = r7;
            r7 = {};
            r8 = 'onInlineViewLayout';
            r7['registrationName'] = r8;
            r5['topInlineViewLayout'] = r7;
            r1['directEventTypes'] = r5;
            r8 = 'RCTText';
            r1['uiViewClassName'] = r8;
            var _closure1_slot2 = r1;
            r1 = {};
            r5 = {'isHighlighted': true, 'isPressable': true, 'maxFontSizeMultiplier': true};
            r1['validAttributes'] = r5;
            r5 = 'RCTVirtualText';
            r1['uiViewClassName'] = r5;
            var _closure1_slot3 = r1;
            r7 = r4.default;
            r1 = function() { // Environment: r3
                r3 = _closure1_slot0;
                r2 = _closure1_slot1;
                r1 = 3;
                r1 = r2[r1];
                r2 = undefined;
                r1 = r3.bind(r2)(r1);
                r1 = r1.createViewConfig;
                r0 = _closure1_slot2;
                r0 = r1.bind(r2)(r0);
                return r0;
            };
            r1 = r7.bind(r0)(r8, r1);
            r2['NativeText'] = r1;
            r7 = a0;
            r7 = r7.RN$Bridgeless;
            if(r7) { _fun3389_ip = 255; continue _fun3389 }
case 236:
            r7 = r6.default;
            r6 = r7.hasViewManagerConfig;
            r6 = r6.bind(r7)(r5);
            if(!r6) { _fun3389_ip = 271; continue _fun3389 }
case 255:
            r4 = r4.default;
            r3 = function() { // Environment: r3
                r3 = _closure1_slot0;
                r2 = _closure1_slot1;
                r1 = 3;
                r1 = r2[r1];
                r2 = undefined;
                r1 = r3.bind(r2)(r1);
                r1 = r1.createViewConfig;
                r0 = _closure1_slot3;
                r0 = r1.bind(r2)(r0);
                return r0;
            };
            r1 = r4.bind(r0)(r5, r3);
case 271:
            r2['NativeVirtualText'] = r1;
            return r0;
        }
    };
    r6 = 296;
    r5 = [1, 44, 281, 121];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun3392: for(var _fun3392_ip = 0; ; ) switch(_fun3392_ip) {
case 0:
            r6 = a1;
            r2 = a5;
            r7 = a6;
            var _closure1_slot0 = r6;
            var _closure1_slot1 = r7;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r4
                _fun3393: for(var _fun3393_ip = 0; ; ) switch(_fun3393_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun3393_ip = 104; continue _fun3393 }
case 20:
                    r2 = r1.WeakMap;
                    r3 = r2.prototype;
                    r3 = Object.create(r3, {constructor: {value: r2}});
                    r5 = r3;
                    r2 = new r5[r2](r4);
                    r2 = r2 instanceof Object ? r2 : r3;
                    var _closure2_slot0 = r2;
                    r1 = r1.WeakMap;
                    r2 = r1.prototype;
                    r2 = Object.create(r2, {constructor: {value: r1}});
                    r5 = r2;
                    r1 = new r5[r1](r4);
                    r1 = r1 instanceof Object ? r1 : r2;
                    var _closure2_slot1 = r1;
                    r2 = function(a0) { // Original name: _getRequireWildcardCache, environment: r0
                        _fun3394: for(var _fun3394_ip = 0; ; ) switch(_fun3394_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun3394_ip = 15; continue _fun3394 }
case 9:
                            r0 = _closure2_slot0;
                            _fun3394_ip = 19; continue _fun3394;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot16 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot16 = r0;
            r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r4
                _fun3395: for(var _fun3395_ip = 0; ; ) switch(_fun3395_ip) {
case 0:
                    r3 = a0;
                    r5 = a2;
                    r0 = _closure1_slot6;
                    r1 = r0.default;
                    r2 = undefined;
                    r0 = a1;
                    r8 = r1.bind(r2)(r0);
                    r0 = _closure1_slot5;
                    r1 = r0.default;
                    r0 = _closure1_slot18;
                    r0 = r0.bind(r2)();
                    if(r0) { _fun3395_ip = 61; continue _fun3395 }
case 48:
                    r0 = r8.apply;
                    r0 = r0.bind(r8)(r3, r5);
                    _fun3395_ip = 107; continue _fun3395;
case 61:
                    r6 = global;
                    r7 = r6.Reflect;
                    r6 = r7.construct;
                    if(r5) { _fun3395_ip = 81; continue _fun3395 }
case 77:
                    r5 = new Array(0);
case 81:
                    r4 = _closure1_slot6;
                    r4 = r4.default;
                    r4 = r4.bind(r2)(r3);
                    r4 = r4.constructor;
                    r0 = r6.bind(r7)(r8, r5, r4);
case 107:
                    r0 = r1.bind(r2)(r3, r0);
                    return r0;
                }
            };
            var _closure1_slot17 = r0;
            r0 = function() { // Original name: _isNativeReflectConstruct, environment: r4
                _fun3396: for(var _fun3396_ip = 0; ; ) switch(_fun3396_ip) {
case 0:
case 2: // try_start_0
                    r1 = global;
                    r2 = r1.Boolean;
                    r2 = r2.prototype;
                    r3 = r2.valueOf;
                    r2 = r3.call;
                    r7 = r1.Reflect;
                    r6 = r7.construct;
                    r5 = r1.Boolean;
                    r4 = new Array(0);
                    r1 = function() { // Environment: r0
                        r0 = undefined;
                        return r0;
                    };
                    r1 = r6.bind(r7)(r5, r4, r1);
                    r1 = r2.bind(r3)(r1);
                    r1 = !r1;
                    var _closure2_slot0 = r1;
case 70: // try_end0
                    _fun3396_ip = 74; continue _fun3396;
case 72: // catch_target0
                    CatchBlockStart(arg_register=1);
case 74:
                    r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                        r0 = _closure2_slot0;
                        r0 = !r0;
                        r0 = !r0;
                        return r0;
                    };
                    _closure1_slot18 = r1;
                    r0 = undefined;
                    r0 = r1.bind(r0)();
                    return r0;
                }
            };
            var _closure1_slot18 = r0;
            r0 = 0;
            r1 = r7[r0];
            r0 = undefined;
            r5 = r6.bind(r0)(r1);
            r19 = global;
            r9 = r19.Object;
            r8 = r9.defineProperty;
            r3 = {};
            r1 = true;
            r3['value'] = r1;
            r1 = '__esModule';
            r1 = r8.bind(r9)(r2, r1, r3);
            r2['default'] = r0;
            r1 = 1;
            r1 = r7[r1];
            r1 = r6.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot2 = r1;
            r1 = 2;
            r1 = r7[r1];
            r1 = r6.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot3 = r1;
            r1 = 3;
            r1 = r7[r1];
            r1 = r6.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot4 = r1;
            r1 = 4;
            r1 = r7[r1];
            r1 = r6.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot5 = r1;
            r1 = 5;
            r1 = r7[r1];
            r1 = r6.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot6 = r1;
            r1 = 6;
            r1 = r7[r1];
            r1 = r6.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot7 = r1;
            r1 = 7;
            r1 = r7[r1];
            r1 = r6.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            r1 = 8;
            r1 = r7[r1];
            r1 = r6.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot8 = r1;
            r1 = 9;
            r1 = r7[r1];
            r1 = r6.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot9 = r1;
            r1 = 10;
            r1 = r7[r1];
            r1 = r6.bind(r0)(r1);
            r3 = r5.bind(r0)(r1);
            var _closure1_slot10 = r3;
            r1 = 11;
            r1 = r7[r1];
            r1 = r6.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot11 = r1;
            r1 = 12;
            r1 = r7[r1];
            r8 = r6.bind(r0)(r1);
            if(!r8) { _fun3392_ip = 353; continue _fun3392 }
case 339:
            r5 = r8.__esModule;
            r1 = r8;
            if(r5) { _fun3392_ip = 620; continue _fun3392 }
case 353:
            r18 = null;
            if(!(r18 !== r8)) { _fun3392_ip = 611; continue _fun3392 }
case 362:
            r9 = typeof r8;
            r5 = 'object';
            if(!(r5 !== r9)) { _fun3392_ip = 384; continue _fun3392 }
case 373:
            r5 = 'function';
            if(!(r5 === r9)) { _fun3392_ip = 611; continue _fun3392 }
case 384:
            r5 = _closure1_slot16;
            r9 = r5.bind(r0)(r0);
            if(!r9) { _fun3392_ip = 412; continue _fun3392 }
case 396:
            r5 = r9.has;
            r5 = r5.bind(r9)(r8);
            if(r5) { _fun3392_ip = 599; continue _fun3392 }
case 412:
            r5 = Object.create(r18);
            r10 = r19.Object;
            r17 = r10.defineProperty;
            if(!r17) { _fun3392_ip = 440; continue _fun3392 }
case 429:
            r10 = r19.Object;
            r17 = r10.getOwnPropertyDescriptor;
case 440:
            r15 = r8;
            r11 = 'default';
            r10 = undefined;
            for(r12 in r15)
case 457:
            {
case 466:
                r23 = r12;
                if(r11 === r23) { _fun3392_ip = 457; continue _fun3392 }
case 473:
                r20 = {};
                r21 = r20.hasOwnProperty;
                r20 = r21.call;
                r20 = r20.bind(r21)(r8, r23);
                if(!r20) { _fun3392_ip = 457; continue _fun3392 }
case 494:
                r20 = null;
                if(!r17) { _fun3392_ip = 516; continue _fun3392 }
case 499:
                r22 = r19.Object;
                r21 = r22.getOwnPropertyDescriptor;
                r20 = r21.bind(r22)(r8, r23);
case 516:
                if(!r20) { _fun3392_ip = 535; continue _fun3392 }
case 519:
                r21 = r20.get;
                if(r21) { _fun3392_ip = 548; continue _fun3392 }
case 527:
                r21 = r20.set;
                if(r21) { _fun3392_ip = 548; continue _fun3392 }
case 535:
                r21 = r8[r23];
                r5[r23] = r21;
                r10 = r20;
                _fun3392_ip = 457; continue _fun3392;
case 548:
                r22 = r19.Object;
                r21 = r22.defineProperty;
                r21 = r21.bind(r22)(r5, r23, r20);
                r10 = r20;
                _fun3392_ip = 457; continue _fun3392;
            }
case 571:
            r5['default'] = r8;
            r1 = r5;
            if(!r9) { _fun3392_ip = 620; continue _fun3392 }
case 583:
            r10 = r9.set;
            r10 = r10.bind(r9)(r8, r5);
            r1 = r5;
            _fun3392_ip = 620; continue _fun3392;
case 599:
            r5 = r9.get;
            r1 = r5.bind(r9)(r8);
            _fun3392_ip = 620; continue _fun3392;
case 611:
            r5 = {};
            r5['default'] = r8;
            r1 = r5;
case 620:
            var _closure1_slot12 = r1;
            r5 = 13;
            r5 = r7[r5];
            r5 = r6.bind(r0)(r5);
            r5 = ['onBlur', 'onFocus'];
            var _closure1_slot13 = r5;
            r5 = r1.Component;
            r1 = function(a0) { // Environment: r4
                r3 = function() { // Original name: TouchableNativeFeedback, environment: r5
                    _fun3400: for(var _fun3400_ip = 0; ; ) switch(_fun3400_ip) {
case 0:
                        r5 = this;
                        r4 = undefined;
                        r6 = undefined;
                        r0 = _closure1_slot3;
                        r3 = r0.default;
                        r1 = _closure2_slot0;
                        r1 = r3.bind(r4)(r5, r1);
                        r3 = arguments.length;
                        r1 = global;
                        r1 = r1.Array;
                        r7 = r1.prototype;
                        r7 = Object.create(r7, {constructor: {value: r1}});
                        r12 = r7;
                        r11 = r3;
                        r1 = new r12[r1](r11, r10);
                        r7 = r1 instanceof Object ? r1 : r7;
                        r1 = 0;
                        r8 = r1 < r3;
                        if(!r8) { _fun3400_ip = 89; continue _fun3400 }
case 74:
                        r8 = arguments[r1];
                        r7[r1] = r8;
                        r1 = r1 + 1;
                        if(r1 < r3) { _fun3400_ip = 74; continue _fun3400 }
case 89:
                        r3 = _closure1_slot17;
                        r1 = _closure2_slot0;
                        r6 = new Array(0);
                        r0 = r6.concat;
                        r0 = r0.bind(r6)(r7);
                        r0 = r3.bind(r4)(r5, r1, r0);
                        r1 = {};
                        r2 = _closure1_slot8;
                        r4 = r2.default;
                        r2 = r0._createPressabilityConfig;
                        r11 = r2.bind(r0)();
                        r3 = r4.prototype;
                        r3 = Object.create(r3, {constructor: {value: r4}});
                        r12 = r3;
                        r2 = new r12[r4](r11, r10);
                        r2 = r2 instanceof Object ? r2 : r3;
                        r1['pressability'] = r2;
                        r0['state'] = r1;
                        return r0;
                    }
                };
                var _closure2_slot0 = r3;
                r1 = _closure1_slot7;
                r4 = r1.default;
                r2 = undefined;
                r1 = a0;
                r1 = r4.bind(r2)(r3, r1);
                r0 = _closure1_slot4;
                r1 = r0.default;
                r4 = {};
                r0 = '_createPressabilityConfig';
                r4['key'] = r0;
                r0 = function() { // Original name: _createPressabilityConfig, environment: r5
                    _fun3401: for(var _fun3401_ip = 0; ; ) switch(_fun3401_ip) {
case 0:
                        r2 = this;
                        var _closure3_slot0 = r2;
                        r0 = r2.props;
                        r3 = r0.aria-disabled;
                        r5 = null;
                        if(!(r3 == r5)) { _fun3401_ip = 52; continue _fun3401 }
case 25:
                        r0 = r2.props;
                        r4 = r0.accessibilityState;
                        r6 = r4 == r5;
                        r0 = undefined;
                        if(r6) { _fun3401_ip = 49; continue _fun3401 }
case 44:
                        r0 = r4.disabled;
case 49:
                        r3 = r0;
case 52:
                        r0 = {};
                        r4 = r2.props;
                        r4 = r4.rejectResponderTermination;
                        r4 = !r4;
                        r0['cancelable'] = r4;
                        r4 = r2.props;
                        r4 = r4.disabled;
                        if(!(r4 != r5)) { _fun3401_ip = 97; continue _fun3401 }
case 87:
                        r4 = r2.props;
                        r3 = r4.disabled;
case 97:
                        r0['disabled'] = r3;
                        r3 = r2.props;
                        r3 = r3.hitSlop;
                        r0['hitSlop'] = r3;
                        r3 = r2.props;
                        r3 = r3.delayLongPress;
                        r0['delayLongPress'] = r3;
                        r3 = r2.props;
                        r3 = r3.delayPressIn;
                        r0['delayPressIn'] = r3;
                        r3 = r2.props;
                        r3 = r3.delayPressOut;
                        r0['delayPressOut'] = r3;
                        r3 = 0;
                        r0['minPressDuration'] = r3;
                        r3 = r2.props;
                        r3 = r3.pressRetentionOffset;
                        r0['pressRectOffset'] = r3;
                        r3 = r2.props;
                        r3 = r3.touchSoundDisabled;
                        r0['android_disableSound'] = r3;
                        r3 = r2.props;
                        r3 = r3.onLongPress;
                        r0['onLongPress'] = r3;
                        r2 = r2.props;
                        r2 = r2.onPress;
                        r0['onPress'] = r2;
                        r2 = function(a0) { // Original name: onPressIn, environment: r1
                            _fun3402: for(var _fun3402_ip = 0; ; ) switch(_fun3402_ip) {
case 0:
                                r2 = a0;
                                r0 = _closure1_slot10;
                                r0 = r0.default;
                                r1 = r0.OS;
                                r0 = 'android';
                                if(!(r1 === r0)) { _fun3402_ip = 59; continue _fun3402 }
case 28:
                                r3 = _closure3_slot0;
                                r0 = r3._dispatchHotspotUpdate;
                                r0 = r0.bind(r3)(r2);
                                r1 = r3._dispatchPressedStateChange;
                                r0 = true;
                                r0 = r1.bind(r3)(r0);
case 59:
                                r1 = _closure3_slot0;
                                r1 = r1.props;
                                r3 = r1.onPressIn;
                                r1 = null;
                                if(!(r3 != r1)) { _fun3402_ip = 103; continue _fun3402 }
case 83:
                                r0 = _closure3_slot0;
                                r1 = r0.props;
                                r0 = r1.onPressIn;
                                r0 = r0.bind(r1)(r2);
case 103:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r0['onPressIn'] = r2;
                        r2 = function(a0) { // Original name: onPressMove, environment: r1
                            _fun3403: for(var _fun3403_ip = 0; ; ) switch(_fun3403_ip) {
case 0:
                                r0 = _closure1_slot10;
                                r0 = r0.default;
                                r1 = r0.OS;
                                r0 = 'android';
                                if(!(r1 === r0)) { _fun3403_ip = 46; continue _fun3403 }
case 25:
                                r2 = _closure3_slot0;
                                r1 = r2._dispatchHotspotUpdate;
                                r0 = a0;
                                r0 = r1.bind(r2)(r0);
case 46:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r0['onPressMove'] = r2;
                        r1 = function(a0) { // Original name: onPressOut, environment: r1
                            _fun3404: for(var _fun3404_ip = 0; ; ) switch(_fun3404_ip) {
case 0:
                                r0 = _closure1_slot10;
                                r0 = r0.default;
                                r1 = r0.OS;
                                r0 = 'android';
                                if(!(r1 === r0)) { _fun3404_ip = 45; continue _fun3404 }
case 25:
                                r2 = _closure3_slot0;
                                r1 = r2._dispatchPressedStateChange;
                                r0 = false;
                                r0 = r1.bind(r2)(r0);
case 45:
                                r1 = _closure3_slot0;
                                r1 = r1.props;
                                r2 = r1.onPressOut;
                                r1 = null;
                                if(!(r2 != r1)) { _fun3404_ip = 92; continue _fun3404 }
case 69:
                                r0 = _closure3_slot0;
                                r2 = r0.props;
                                r1 = r2.onPressOut;
                                r0 = a0;
                                r0 = r1.bind(r2)(r0);
case 92:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r0['onPressOut'] = r1;
                        return r0;
                    }
                };
                r4['value'] = r0;
                r0 = new Array(7);
                r0[0] = r4;
                r4 = {};
                r6 = '_dispatchPressedStateChange';
                r4['key'] = r6;
                r6 = function(a0) { // Original name: _dispatchPressedStateChange, environment: r5
                    _fun3405: for(var _fun3405_ip = 0; ; ) switch(_fun3405_ip) {
case 0:
                        r1 = _closure1_slot10;
                        r1 = r1.default;
                        r2 = r1.OS;
                        r1 = 'android';
                        if(!(r2 === r1)) { _fun3405_ip = 130; continue _fun3405 }
case 25:
                        r3 = _closure1_slot0;
                        r2 = _closure1_slot1;
                        r1 = 14;
                        r1 = r2[r1];
                        r2 = undefined;
                        r1 = r3.bind(r2)(r1);
                        r3 = r1.findHostInstance_DEPRECATED;
                        r1 = this;
                        r3 = r3.bind(r2)(r1);
                        r1 = null;
                        if(!(r3 != r1)) { _fun3405_ip = 108; continue _fun3405 }
case 66:
                        r1 = _closure1_slot0;
                        r4 = _closure1_slot1;
                        r0 = 15;
                        r0 = r4[r0];
                        r0 = r1.bind(r2)(r0);
                        r2 = r0.Commands;
                        r1 = r2.setPressed;
                        r0 = a0;
                        r0 = r1.bind(r2)(r3, r0);
                        _fun3405_ip = 130; continue _fun3405;
case 108:
                        r0 = global;
                        r2 = r0.console;
                        r1 = r2.warn;
                        r0 = 'Touchable: Unable to find HostComponent instance. Has your Touchable component been unmounted?';
                        r0 = r1.bind(r2)(r0);
case 130:
                        r0 = undefined;
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[1] = r4;
                r4 = {};
                r6 = '_dispatchHotspotUpdate';
                r4['key'] = r6;
                r6 = function(a0) { // Original name: _dispatchHotspotUpdate, environment: r5
                    _fun3406: for(var _fun3406_ip = 0; ; ) switch(_fun3406_ip) {
case 0:
                        r1 = _closure1_slot10;
                        r1 = r1.default;
                        r2 = r1.OS;
                        r1 = 'android';
                        if(!(r2 === r1)) { _fun3406_ip = 175; continue _fun3406 }
case 28:
                        r1 = a0;
                        r1 = r1.nativeEvent;
                        r7 = r1.locationX;
                        r5 = r1.locationY;
                        r3 = _closure1_slot0;
                        r2 = _closure1_slot1;
                        r1 = 14;
                        r1 = r2[r1];
                        r2 = undefined;
                        r1 = r3.bind(r2)(r1);
                        r3 = r1.findHostInstance_DEPRECATED;
                        r1 = this;
                        r4 = r3.bind(r2)(r1);
                        r6 = null;
                        if(!(r4 != r6)) { _fun3406_ip = 153; continue _fun3406 }
case 89:
                        r1 = _closure1_slot0;
                        r3 = _closure1_slot1;
                        r0 = 15;
                        r0 = r3[r0];
                        r0 = r1.bind(r2)(r0);
                        r3 = r0.Commands;
                        r2 = r3.hotspotUpdate;
                        r8 = r7 != r6;
                        r0 = 0;
                        if(!r8) { _fun3406_ip = 132; continue _fun3406 }
case 129:
                        r0 = r7;
case 132:
                        r6 = r5 != r6;
                        r1 = 0;
                        if(!r6) { _fun3406_ip = 144; continue _fun3406 }
case 141:
                        r1 = r5;
case 144:
                        r0 = r2.bind(r3)(r4, r0, r1);
                        _fun3406_ip = 175; continue _fun3406;
case 153:
                        r0 = global;
                        r2 = r0.console;
                        r1 = r2.warn;
                        r0 = 'Touchable: Unable to find HostComponent instance. Has your Touchable component been unmounted?';
                        r0 = r1.bind(r2)(r0);
case 175:
                        r0 = undefined;
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[2] = r4;
                r4 = {};
                r6 = 'render';
                r4['key'] = r6;
                r6 = function() { // Original name: render, environment: r5
                    _fun3407: for(var _fun3407_ip = 0; ; ) switch(_fun3407_ip) {
case 0:
                        r0 = this;
                        r1 = _closure1_slot12;
                        r3 = r1.Children;
                        r2 = r3.only;
                        r1 = r0.props;
                        r1 = r1.children;
                        r7 = r2.bind(r3)(r1);
                        r1 = r7.props;
                        r1 = r1.children;
                        r5 = new Array(1);
                        r5[0] = r1;
                        r1 = r0.state;
                        r2 = r1.pressability;
                        r1 = r2.getEventHandlers;
                        r3 = r1.bind(r2)();
                        r1 = r3.onBlur;
                        r1 = r3.onFocus;
                        r1 = _closure1_slot2;
                        r2 = r1.default;
                        r1 = _closure1_slot13;
                        r14 = undefined;
                        r10 = r2.bind(r14)(r3, r1);
                        r8 = {};
                        r1 = r0.props;
                        r1 = r1.aria-busy;
                        r12 = null;
                        if(!(r1 == r12)) { _fun3407_ip = 155; continue _fun3407 }
case 127:
                        r2 = r0.props;
                        r3 = r2.accessibilityState;
                        r4 = r3 == r12;
                        r2 = undefined;
                        if(r4) { _fun3407_ip = 152; continue _fun3407 }
case 146:
                        r2 = r3.busy;
case 152:
                        r1 = r2;
case 155:
                        r8['busy'] = r1;
                        r1 = r0.props;
                        r1 = r1.aria-checked;
                        if(!(r1 == r12)) { _fun3407_ip = 203; continue _fun3407 }
case 175:
                        r2 = r0.props;
                        r3 = r2.accessibilityState;
                        r4 = r3 == r12;
                        r2 = undefined;
                        if(r4) { _fun3407_ip = 200; continue _fun3407 }
case 194:
                        r2 = r3.checked;
case 200:
                        r1 = r2;
case 203:
                        r8['checked'] = r1;
                        r1 = r0.props;
                        r1 = r1.aria-disabled;
                        if(!(r1 == r12)) { _fun3407_ip = 250; continue _fun3407 }
case 223:
                        r2 = r0.props;
                        r3 = r2.accessibilityState;
                        r4 = r3 == r12;
                        r2 = undefined;
                        if(r4) { _fun3407_ip = 247; continue _fun3407 }
case 242:
                        r2 = r3.disabled;
case 247:
                        r1 = r2;
case 250:
                        r8['disabled'] = r1;
                        r1 = r0.props;
                        r1 = r1.aria-expanded;
                        if(!(r1 == r12)) { _fun3407_ip = 297; continue _fun3407 }
case 269:
                        r2 = r0.props;
                        r3 = r2.accessibilityState;
                        r4 = r3 == r12;
                        r2 = undefined;
                        if(r4) { _fun3407_ip = 294; continue _fun3407 }
case 288:
                        r2 = r3.expanded;
case 294:
                        r1 = r2;
case 297:
                        r8['expanded'] = r1;
                        r1 = r0.props;
                        r1 = r1.aria-selected;
                        if(!(r1 == r12)) { _fun3407_ip = 345; continue _fun3407 }
case 317:
                        r2 = r0.props;
                        r3 = r2.accessibilityState;
                        r4 = r3 == r12;
                        r2 = undefined;
                        if(r4) { _fun3407_ip = 342; continue _fun3407 }
case 336:
                        r2 = r3.selected;
case 342:
                        r1 = r2;
case 345:
                        r8['selected'] = r1;
                        r1 = r0.props;
                        r1 = r1.disabled;
                        r16 = r8;
                        if(!(r1 != r12)) { _fun3407_ip = 405; continue _fun3407 }
case 367:
                        r1 = global;
                        r4 = r1.Object;
                        r3 = r4.assign;
                        r2 = {};
                        r1 = r0.props;
                        r1 = r1.disabled;
                        r2['disabled'] = r1;
                        r1 = {};
                        r16 = r3.bind(r4)(r1, r8, r2);
case 405:
                        r15 = {};
                        r1 = r0.props;
                        r1 = r1.aria-valuemax;
                        if(!(r1 == r12)) { _fun3407_ip = 450; continue _fun3407 }
case 422:
                        r2 = r0.props;
                        r3 = r2.accessibilityValue;
                        r4 = r3 == r12;
                        r2 = undefined;
                        if(r4) { _fun3407_ip = 447; continue _fun3407 }
case 442:
                        r2 = r3.max;
case 447:
                        r1 = r2;
case 450:
                        r15['max'] = r1;
                        r1 = r0.props;
                        r1 = r1.aria-valuemin;
                        if(!(r1 == r12)) { _fun3407_ip = 497; continue _fun3407 }
case 469:
                        r2 = r0.props;
                        r3 = r2.accessibilityValue;
                        r4 = r3 == r12;
                        r2 = undefined;
                        if(r4) { _fun3407_ip = 494; continue _fun3407 }
case 489:
                        r2 = r3.min;
case 494:
                        r1 = r2;
case 497:
                        r15['min'] = r1;
                        r1 = r0.props;
                        r1 = r1.aria-valuenow;
                        if(!(r1 == r12)) { _fun3407_ip = 544; continue _fun3407 }
case 516:
                        r2 = r0.props;
                        r3 = r2.accessibilityValue;
                        r4 = r3 == r12;
                        r2 = undefined;
                        if(r4) { _fun3407_ip = 541; continue _fun3407 }
case 536:
                        r2 = r3.now;
case 541:
                        r1 = r2;
case 544:
                        r15['now'] = r1;
                        r1 = r0.props;
                        r1 = r1.aria-valuetext;
                        if(!(r1 == r12)) { _fun3407_ip = 591; continue _fun3407 }
case 563:
                        r2 = r0.props;
                        r3 = r2.accessibilityValue;
                        r4 = r3 == r12;
                        r2 = undefined;
                        if(r4) { _fun3407_ip = 588; continue _fun3407 }
case 583:
                        r2 = r3.text;
case 588:
                        r1 = r2;
case 591:
                        r15['text'] = r1;
                        r1 = r0.props;
                        r2 = r1.aria-live;
                        r11 = 'none';
                        r1 = 'off';
                        if(!(r2 !== r1)) { _fun3407_ip = 647; continue _fun3407 }
case 618:
                        r1 = r0.props;
                        r1 = r1.aria-live;
                        if(!(r1 == r12)) { _fun3407_ip = 644; continue _fun3407 }
case 633:
                        r2 = r0.props;
                        r1 = r2.accessibilityLiveRegion;
case 644:
                        r11 = r1;
case 647:
                        r1 = r0.props;
                        r18 = r1.aria-label;
                        if(!(r18 == r12)) { _fun3407_ip = 673; continue _fun3407 }
case 662:
                        r1 = r0.props;
                        r18 = r1.accessibilityLabel;
case 673:
                        r3 = _closure1_slot12;
                        r2 = r3.cloneElement;
                        r1 = r2.apply;
                        r4 = new Array(2);
                        r4[0] = r7;
                        r7 = global;
                        r9 = r7.Object;
                        r8 = r9.assign;
                        r13 = _closure1_slot15;
                        r6 = r0.props;
                        r6 = r6.background;
                        if(!(r6 !== r14)) { _fun3407_ip = 741; continue _fun3407 }
case 728:
                        r6 = r0.props;
                        r7 = r6.background;
                        _fun3407_ip = 758; continue _fun3407;
case 741:
                        r17 = _closure2_slot0;
                        r6 = r17.SelectableBackground;
                        r7 = r6.bind(r17)();
case 758:
                        r6 = r0.props;
                        r6 = r6.useForeground;
                        r17 = true;
                        r6 = r6 === r17;
                        r7 = r13.bind(r14)(r7, r6);
                        r6 = {};
                        r13 = r0.props;
                        r19 = r13.accessible;
                        r13 = false;
                        r19 = r19 !== r13;
                        r6['accessible'] = r19;
                        r19 = r0.props;
                        r19 = r19.accessibilityHint;
                        r6['accessibilityHint'] = r19;
                        r19 = r0.props;
                        r19 = r19.accessibilityLanguage;
                        r6['accessibilityLanguage'] = r19;
                        r6['accessibilityLabel'] = r18;
                        r18 = r0.props;
                        r18 = r18.accessibilityRole;
                        r6['accessibilityRole'] = r18;
                        r6['accessibilityState'] = r16;
                        r16 = r0.props;
                        r16 = r16.accessibilityActions;
                        r6['accessibilityActions'] = r16;
                        r16 = r0.props;
                        r16 = r16.onAccessibilityAction;
                        r6['onAccessibilityAction'] = r16;
                        r6['accessibilityValue'] = r15;
                        r15 = r0.props;
                        r16 = r15.aria-hidden;
                        r15 = 'no-hide-descendants';
                        if(!(r16 !== r17)) { _fun3407_ip = 929; continue _fun3407 }
case 918:
                        r16 = r0.props;
                        r15 = r16.importantForAccessibility;
case 929:
                        r6['importantForAccessibility'] = r15;
                        r15 = r0.props;
                        r15 = r15.aria-modal;
                        if(!(r15 == r12)) { _fun3407_ip = 960; continue _fun3407 }
case 949:
                        r16 = r0.props;
                        r15 = r16.accessibilityViewIsModal;
case 960:
                        r6['accessibilityViewIsModal'] = r15;
                        r6['accessibilityLiveRegion'] = r11;
                        r11 = r0.props;
                        r11 = r11.aria-hidden;
                        if(!(r11 == r12)) { _fun3407_ip = 996; continue _fun3407 }
case 985:
                        r15 = r0.props;
                        r11 = r15.accessibilityElementsHidden;
case 996:
                        r6['accessibilityElementsHidden'] = r11;
                        r11 = r0.props;
                        r11 = r11.hasTVPreferredFocus;
                        r6['hasTVPreferredFocus'] = r11;
                        r11 = r0.props;
                        r11 = r11.hitSlop;
                        r6['hitSlop'] = r11;
                        r11 = r0.props;
                        r11 = r11.focusable;
                        r11 = r11 !== r13;
                        if(!r11) { _fun3407_ip = 1065; continue _fun3407 }
case 1051:
                        r13 = r0.props;
                        r13 = r13.onPress;
                        r11 = r13 !== r14;
case 1065:
                        if(!r11) { _fun3407_ip = 1081; continue _fun3407 }
case 1068:
                        r13 = r0.props;
                        r13 = r13.disabled;
                        r11 = !r13;
case 1081:
                        r6['focusable'] = r11;
                        r11 = r0.props;
                        r11 = r11.id;
                        if(!(r11 == r12)) { _fun3407_ip = 1110; continue _fun3407 }
case 1100:
                        r12 = r0.props;
                        r11 = r12.nativeID;
case 1110:
                        r6['nativeID'] = r11;
                        r11 = r0.props;
                        r11 = r11.nextFocusDown;
                        r6['nextFocusDown'] = r11;
                        r11 = r0.props;
                        r11 = r11.nextFocusForward;
                        r6['nextFocusForward'] = r11;
                        r11 = r0.props;
                        r11 = r11.nextFocusLeft;
                        r6['nextFocusLeft'] = r11;
                        r11 = r0.props;
                        r11 = r11.nextFocusRight;
                        r6['nextFocusRight'] = r11;
                        r11 = r0.props;
                        r11 = r11.nextFocusUp;
                        r6['nextFocusUp'] = r11;
                        r11 = r0.props;
                        r11 = r11.onLayout;
                        r6['onLayout'] = r11;
                        r0 = r0.props;
                        r0 = r0.testID;
                        r6['testID'] = r0;
                        r23 = {};
                        r24 = r9;
                        r22 = r10;
                        r21 = r7;
                        r20 = r6;
                        r0 = r24[r8](r23, r22, r21, r20, r19);
                        r4[1] = r0;
                        r0 = r4.concat;
                        r0 = r0.bind(r4)(r5);
                        r0 = r1.bind(r2)(r3, r0);
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[3] = r4;
                r4 = {};
                r6 = 'componentDidUpdate';
                r4['key'] = r6;
                r6 = function(a0, a1) { // Original name: componentDidUpdate, environment: r5
                    r3 = this;
                    r0 = r3.state;
                    r2 = r0.pressability;
                    r1 = r2.configure;
                    r0 = r3._createPressabilityConfig;
                    r0 = r0.bind(r3)();
                    r0 = r1.bind(r2)(r0);
                    r0 = undefined;
                    return r0;
                };
                r4['value'] = r6;
                r0[4] = r4;
                r4 = {};
                r6 = 'componentDidMount';
                r4['key'] = r6;
                r6 = function() { // Original name: componentDidMount, environment: r5
                    r3 = this;
                    r0 = r3.state;
                    r2 = r0.pressability;
                    r1 = r2.configure;
                    r0 = r3._createPressabilityConfig;
                    r0 = r0.bind(r3)();
                    r0 = r1.bind(r2)(r0);
                    r0 = undefined;
                    return r0;
                };
                r4['value'] = r6;
                r0[5] = r4;
                r4 = {};
                r6 = 'componentWillUnmount';
                r4['key'] = r6;
                r5 = function() { // Original name: componentWillUnmount, environment: r5
                    r0 = this;
                    r0 = r0.state;
                    r1 = r0.pressability;
                    r0 = r1.reset;
                    r0 = r0.bind(r1)();
                    r0 = undefined;
                    return r0;
                };
                r4['value'] = r5;
                r0[6] = r4;
                r0 = r1.bind(r2)(r3, r0);
                return r0;
            };
            r1 = r1.bind(r0)(r5);
            var _closure1_slot14 = r1;
            r5 = function(a0) { // Environment: r4
                r0 = {'type': 'ThemeAttrAndroid', 'attribute': 'selectableItemBackground'};
                r1 = a0;
                r0['rippleRadius'] = r1;
                return r0;
            };
            r1['SelectableBackground'] = r5;
            r5 = function(a0) { // Environment: r4
                r0 = {'type': 'ThemeAttrAndroid', 'attribute': 'selectableItemBackgroundBorderless'};
                r1 = a0;
                r0['rippleRadius'] = r1;
                return r0;
            };
            r1['SelectableBackgroundBorderless'] = r5;
            r5 = function(a0, a1, a2) { // Environment: r4
                _fun3413: for(var _fun3413_ip = 0; ; ) switch(_fun3413_ip) {
case 0:
                    r1 = _closure1_slot9;
                    r2 = r1.default;
                    r4 = undefined;
                    r1 = a0;
                    r1 = r2.bind(r4)(r1);
                    r0 = _closure1_slot11;
                    r3 = r0.default;
                    r0 = null;
                    r2 = r1 == r0;
                    if(r2) { _fun3413_ip = 51; continue _fun3413 }
case 40:
                    r5 = typeof r1;
                    r0 = 'number';
                    r2 = r5 === r0;
case 51:
                    r0 = 'Unexpected color given for Ripple color';
                    r0 = r3.bind(r4)(r2, r0);
                    r0 = {};
                    r2 = 'RippleAndroid';
                    r0['type'] = r2;
                    r0['color'] = r1;
                    r1 = a1;
                    r0['borderless'] = r1;
                    r1 = a2;
                    r0['rippleRadius'] = r1;
                    return r0;
                }
            };
            r1['Ripple'] = r5;
            r5 = function() { // Environment: r4
                r0 = _closure1_slot10;
                r0 = r0.default;
                r1 = r0.OS;
                r0 = 'android';
                r0 = r1 === r0;
                return r0;
            };
            r1['canUseNativeForeground'] = r5;
            r3 = r3.default;
            r5 = r3.OS;
            r3 = 'android';
            if(!(r5 !== r3)) { _fun3392_ip = 736; continue _fun3392 }
case 729:
            r3 = function(a0, a1) { // Environment: r4
                r0 = null;
                return r0;
            };
            _fun3392_ip = 741; continue _fun3392;
case 736:
            r3 = function(a0, a1) { // Environment: r4
                _fun3415: for(var _fun3415_ip = 0; ; ) switch(_fun3415_ip) {
case 0:
                    r2 = a0;
                    r0 = a1;
                    if(!r0) { _fun3415_ip = 29; continue _fun3415 }
case 9:
                    r1 = _closure1_slot14;
                    r0 = r1.canUseNativeForeground;
                    r0 = r0.bind(r1)();
                    if(r0) { _fun3415_ip = 38; continue _fun3415 }
case 29:
                    r0 = {};
                    r0['nativeBackgroundAndroid'] = r2;
                    _fun3415_ip = 48; continue _fun3415;
case 38:
                    r1 = {};
                    r1['nativeForegroundAndroid'] = r2;
                    r0 = r1;
case 48:
                    return r0;
                }
            };
case 741:
            var _closure1_slot15 = r3;
            r3 = 'TouchableNativeFeedback';
            r1['displayName'] = r3;
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 297;
    r5 = [1, 203, 12, 13, 23, 25, 28, 248, 288, 89, 33, 20, 119, 251, 57, 250];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun3417: for(var _fun3417_ip = 0; ; ) switch(_fun3417_ip) {
case 0:
            r5 = a1;
            r2 = a5;
            r6 = a6;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun3418: for(var _fun3418_ip = 0; ; ) switch(_fun3418_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun3418_ip = 104; continue _fun3418 }
case 20:
                    r2 = r1.WeakMap;
                    r3 = r2.prototype;
                    r3 = Object.create(r3, {constructor: {value: r2}});
                    r5 = r3;
                    r2 = new r5[r2](r4);
                    r2 = r2 instanceof Object ? r2 : r3;
                    var _closure2_slot0 = r2;
                    r1 = r1.WeakMap;
                    r2 = r1.prototype;
                    r2 = Object.create(r2, {constructor: {value: r1}});
                    r5 = r2;
                    r1 = new r5[r1](r4);
                    r1 = r1 instanceof Object ? r1 : r2;
                    var _closure2_slot1 = r1;
                    r2 = function(a0) { // Original name: _getRequireWildcardCache, environment: r0
                        _fun3419: for(var _fun3419_ip = 0; ; ) switch(_fun3419_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun3419_ip = 15; continue _fun3419 }
case 9:
                            r0 = _closure2_slot0;
                            _fun3419_ip = 19; continue _fun3419;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot14 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot14 = r0;
            r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r1
                _fun3420: for(var _fun3420_ip = 0; ; ) switch(_fun3420_ip) {
case 0:
                    r3 = a0;
                    r5 = a2;
                    r0 = _closure1_slot4;
                    r1 = r0.default;
                    r2 = undefined;
                    r0 = a1;
                    r8 = r1.bind(r2)(r0);
                    r0 = _closure1_slot3;
                    r1 = r0.default;
                    r0 = _closure1_slot16;
                    r0 = r0.bind(r2)();
                    if(r0) { _fun3420_ip = 61; continue _fun3420 }
case 48:
                    r0 = r8.apply;
                    r0 = r0.bind(r8)(r3, r5);
                    _fun3420_ip = 107; continue _fun3420;
case 61:
                    r6 = global;
                    r7 = r6.Reflect;
                    r6 = r7.construct;
                    if(r5) { _fun3420_ip = 81; continue _fun3420 }
case 77:
                    r5 = new Array(0);
case 81:
                    r4 = _closure1_slot4;
                    r4 = r4.default;
                    r4 = r4.bind(r2)(r3);
                    r4 = r4.constructor;
                    r0 = r6.bind(r7)(r8, r5, r4);
case 107:
                    r0 = r1.bind(r2)(r3, r0);
                    return r0;
                }
            };
            var _closure1_slot15 = r0;
            r0 = function() { // Original name: _isNativeReflectConstruct, environment: r1
                _fun3421: for(var _fun3421_ip = 0; ; ) switch(_fun3421_ip) {
case 0:
case 2: // try_start_0
                    r1 = global;
                    r2 = r1.Boolean;
                    r2 = r2.prototype;
                    r3 = r2.valueOf;
                    r2 = r3.call;
                    r7 = r1.Reflect;
                    r6 = r7.construct;
                    r5 = r1.Boolean;
                    r4 = new Array(0);
                    r1 = function() { // Environment: r0
                        r0 = undefined;
                        return r0;
                    };
                    r1 = r6.bind(r7)(r5, r4, r1);
                    r1 = r2.bind(r3)(r1);
                    r1 = !r1;
                    var _closure2_slot0 = r1;
case 70: // try_end0
                    _fun3421_ip = 74; continue _fun3421;
case 72: // catch_target0
                    CatchBlockStart(arg_register=1);
case 74:
                    r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                        r0 = _closure2_slot0;
                        r0 = !r0;
                        r0 = !r0;
                        return r0;
                    };
                    _closure1_slot16 = r1;
                    r0 = undefined;
                    r0 = r1.bind(r0)();
                    return r0;
                }
            };
            var _closure1_slot16 = r0;
            r0 = 0;
            r3 = r6[r0];
            r0 = undefined;
            r4 = r5.bind(r0)(r3);
            r18 = global;
            r9 = r18.Object;
            r8 = r9.defineProperty;
            r7 = {};
            r3 = true;
            r7['value'] = r3;
            r3 = '__esModule';
            r3 = r8.bind(r9)(r2, r3, r7);
            r2['default'] = r0;
            r3 = 1;
            r3 = r6[r3];
            r3 = r5.bind(r0)(r3);
            r3 = r4.bind(r0)(r3);
            var _closure1_slot0 = r3;
            r3 = 2;
            r3 = r6[r3];
            r3 = r5.bind(r0)(r3);
            r3 = r4.bind(r0)(r3);
            var _closure1_slot1 = r3;
            r3 = 3;
            r3 = r6[r3];
            r3 = r5.bind(r0)(r3);
            r3 = r4.bind(r0)(r3);
            var _closure1_slot2 = r3;
            r3 = 4;
            r3 = r6[r3];
            r3 = r5.bind(r0)(r3);
            r3 = r4.bind(r0)(r3);
            var _closure1_slot3 = r3;
            r3 = 5;
            r3 = r6[r3];
            r3 = r5.bind(r0)(r3);
            r3 = r4.bind(r0)(r3);
            var _closure1_slot4 = r3;
            r3 = 6;
            r3 = r6[r3];
            r3 = r5.bind(r0)(r3);
            r3 = r4.bind(r0)(r3);
            var _closure1_slot5 = r3;
            r3 = 7;
            r3 = r6[r3];
            r3 = r5.bind(r0)(r3);
            r3 = r4.bind(r0)(r3);
            var _closure1_slot6 = r3;
            r3 = 8;
            r3 = r6[r3];
            r3 = r5.bind(r0)(r3);
            r3 = r4.bind(r0)(r3);
            var _closure1_slot7 = r3;
            r3 = 9;
            r3 = r6[r3];
            r3 = r5.bind(r0)(r3);
            r3 = r4.bind(r0)(r3);
            var _closure1_slot8 = r3;
            r3 = 10;
            r3 = r6[r3];
            r3 = r5.bind(r0)(r3);
            r3 = r4.bind(r0)(r3);
            var _closure1_slot9 = r3;
            r3 = 11;
            r3 = r6[r3];
            r3 = r5.bind(r0)(r3);
            r3 = r4.bind(r0)(r3);
            var _closure1_slot10 = r3;
            r3 = 12;
            r3 = r6[r3];
            r7 = r5.bind(r0)(r3);
            if(!r7) { _fun3417_ip = 349; continue _fun3417 }
case 335:
            r3 = r7.__esModule;
            r4 = r7;
            if(r3) { _fun3417_ip = 616; continue _fun3417 }
case 349:
            r17 = null;
            if(!(r17 !== r7)) { _fun3417_ip = 607; continue _fun3417 }
case 358:
            r8 = typeof r7;
            r3 = 'object';
            if(!(r3 !== r8)) { _fun3417_ip = 380; continue _fun3417 }
case 369:
            r3 = 'function';
            if(!(r3 === r8)) { _fun3417_ip = 607; continue _fun3417 }
case 380:
            r3 = _closure1_slot14;
            r8 = r3.bind(r0)(r0);
            if(!r8) { _fun3417_ip = 408; continue _fun3417 }
case 392:
            r3 = r8.has;
            r3 = r3.bind(r8)(r7);
            if(r3) { _fun3417_ip = 595; continue _fun3417 }
case 408:
            r3 = Object.create(r17);
            r9 = r18.Object;
            r16 = r9.defineProperty;
            if(!r16) { _fun3417_ip = 436; continue _fun3417 }
case 425:
            r9 = r18.Object;
            r16 = r9.getOwnPropertyDescriptor;
case 436:
            r14 = r7;
            r10 = 'default';
            r9 = undefined;
            for(r11 in r14)
case 453:
            {
case 462:
                r22 = r11;
                if(r10 === r22) { _fun3417_ip = 453; continue _fun3417 }
case 469:
                r19 = {};
                r20 = r19.hasOwnProperty;
                r19 = r20.call;
                r19 = r19.bind(r20)(r7, r22);
                if(!r19) { _fun3417_ip = 453; continue _fun3417 }
case 490:
                r19 = null;
                if(!r16) { _fun3417_ip = 512; continue _fun3417 }
case 495:
                r21 = r18.Object;
                r20 = r21.getOwnPropertyDescriptor;
                r19 = r20.bind(r21)(r7, r22);
case 512:
                if(!r19) { _fun3417_ip = 531; continue _fun3417 }
case 515:
                r20 = r19.get;
                if(r20) { _fun3417_ip = 544; continue _fun3417 }
case 523:
                r20 = r19.set;
                if(r20) { _fun3417_ip = 544; continue _fun3417 }
case 531:
                r20 = r7[r22];
                r3[r22] = r20;
                r9 = r19;
                _fun3417_ip = 453; continue _fun3417;
case 544:
                r21 = r18.Object;
                r20 = r21.defineProperty;
                r20 = r20.bind(r21)(r3, r22, r19);
                r9 = r19;
                _fun3417_ip = 453; continue _fun3417;
            }
case 567:
            r3['default'] = r7;
            r4 = r3;
            if(!r8) { _fun3417_ip = 616; continue _fun3417 }
case 579:
            r9 = r8.set;
            r9 = r9.bind(r8)(r7, r3);
            r4 = r3;
            _fun3417_ip = 616; continue _fun3417;
case 595:
            r3 = r8.get;
            r4 = r3.bind(r8)(r7);
            _fun3417_ip = 616; continue _fun3417;
case 607:
            r3 = {};
            r3['default'] = r7;
            r4 = r3;
case 616:
            r3 = 13;
            r3 = r6[r3];
            r3 = r5.bind(r0)(r3);
            var _closure1_slot11 = r3;
            r3 = ['onBlur', 'onFocus'];
            var _closure1_slot12 = r3;
            r5 = r4.Component;
            r3 = function(a0) { // Environment: r1
                r3 = function() { // Original name: TouchableOpacity, environment: r5
                    _fun3425: for(var _fun3425_ip = 0; ; ) switch(_fun3425_ip) {
case 0:
                        r5 = this;
                        r4 = undefined;
                        r6 = undefined;
                        r0 = _closure1_slot1;
                        r3 = r0.default;
                        r1 = _closure2_slot0;
                        r1 = r3.bind(r4)(r5, r1);
                        r3 = arguments.length;
                        r1 = global;
                        r1 = r1.Array;
                        r7 = r1.prototype;
                        r7 = Object.create(r7, {constructor: {value: r1}});
                        r12 = r7;
                        r11 = r3;
                        r1 = new r12[r1](r11, r10);
                        r7 = r1 instanceof Object ? r1 : r7;
                        r1 = 0;
                        r8 = r1 < r3;
                        if(!r8) { _fun3425_ip = 89; continue _fun3425 }
case 74:
                        r8 = arguments[r1];
                        r7[r1] = r8;
                        r1 = r1 + 1;
                        if(r1 < r3) { _fun3425_ip = 74; continue _fun3425 }
case 89:
                        r3 = _closure1_slot15;
                        r1 = _closure2_slot0;
                        r6 = new Array(0);
                        r0 = r6.concat;
                        r0 = r0.bind(r6)(r7);
                        r0 = r3.bind(r4)(r5, r1, r0);
                        r1 = {};
                        r3 = _closure1_slot6;
                        r3 = r3.default;
                        r5 = r3.Value;
                        r3 = r0._getChildStyleOpacityWithDefault;
                        r11 = r3.bind(r0)();
                        r4 = r5.prototype;
                        r4 = Object.create(r4, {constructor: {value: r5}});
                        r12 = r4;
                        r3 = new r12[r5](r11, r10);
                        r3 = r3 instanceof Object ? r3 : r4;
                        r1['anim'] = r3;
                        r2 = _closure1_slot8;
                        r4 = r2.default;
                        r2 = r0._createPressabilityConfig;
                        r11 = r2.bind(r0)();
                        r3 = r4.prototype;
                        r3 = Object.create(r3, {constructor: {value: r4}});
                        r12 = r3;
                        r2 = new r12[r4](r11, r10);
                        r2 = r2 instanceof Object ? r2 : r3;
                        r1['pressability'] = r2;
                        r0['state'] = r1;
                        return r0;
                    }
                };
                var _closure2_slot0 = r3;
                r1 = _closure1_slot5;
                r4 = r1.default;
                r2 = undefined;
                r1 = a0;
                r1 = r4.bind(r2)(r3, r1);
                r0 = _closure1_slot2;
                r1 = r0.default;
                r4 = {};
                r0 = '_createPressabilityConfig';
                r4['key'] = r0;
                r0 = function() { // Original name: _createPressabilityConfig, environment: r5
                    _fun3426: for(var _fun3426_ip = 0; ; ) switch(_fun3426_ip) {
case 0:
                        r2 = this;
                        var _closure3_slot0 = r2;
                        r0 = {};
                        r3 = r2.props;
                        r3 = r3.rejectResponderTermination;
                        r3 = !r3;
                        r0['cancelable'] = r3;
                        r3 = r2.props;
                        r3 = r3.disabled;
                        r4 = null;
                        if(!(r3 == r4)) { _fun3426_ip = 56; continue _fun3426 }
case 45:
                        r5 = r2.props;
                        r3 = r5.aria-disabled;
case 56:
                        if(!(r3 == r4)) { _fun3426_ip = 87; continue _fun3426 }
case 60:
                        r5 = r2.props;
                        r5 = r5.accessibilityState;
                        r6 = r5 == r4;
                        r4 = undefined;
                        if(r6) { _fun3426_ip = 84; continue _fun3426 }
case 79:
                        r4 = r5.disabled;
case 84:
                        r3 = r4;
case 87:
                        r0['disabled'] = r3;
                        r3 = r2.props;
                        r3 = r3.hitSlop;
                        r0['hitSlop'] = r3;
                        r3 = r2.props;
                        r3 = r3.delayLongPress;
                        r0['delayLongPress'] = r3;
                        r3 = r2.props;
                        r3 = r3.delayPressIn;
                        r0['delayPressIn'] = r3;
                        r3 = r2.props;
                        r3 = r3.delayPressOut;
                        r0['delayPressOut'] = r3;
                        r3 = 0;
                        r0['minPressDuration'] = r3;
                        r3 = r2.props;
                        r3 = r3.pressRetentionOffset;
                        r0['pressRectOffset'] = r3;
                        r3 = function(a0) { // Original name: onBlur, environment: r1
                            _fun3427: for(var _fun3427_ip = 0; ; ) switch(_fun3427_ip) {
case 0:
                                r0 = _closure1_slot10;
                                r0 = r0.default;
                                r0 = r0.isTV;
                                if(!r0) { _fun3427_ip = 42; continue _fun3427 }
case 21:
                                r2 = _closure3_slot0;
                                r1 = r2._opacityInactive;
                                r0 = 250;
                                r0 = r1.bind(r2)(r0);
case 42:
                                r1 = _closure3_slot0;
                                r1 = r1.props;
                                r2 = r1.onBlur;
                                r1 = null;
                                if(!(r2 != r1)) { _fun3427_ip = 89; continue _fun3427 }
case 66:
                                r0 = _closure3_slot0;
                                r2 = r0.props;
                                r1 = r2.onBlur;
                                r0 = a0;
                                r0 = r1.bind(r2)(r0);
case 89:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r0['onBlur'] = r3;
                        r3 = function(a0) { // Original name: onFocus, environment: r1
                            _fun3428: for(var _fun3428_ip = 0; ; ) switch(_fun3428_ip) {
case 0:
                                r0 = _closure1_slot10;
                                r0 = r0.default;
                                r0 = r0.isTV;
                                if(!r0) { _fun3428_ip = 42; continue _fun3428 }
case 21:
                                r2 = _closure3_slot0;
                                r1 = r2._opacityActive;
                                r0 = 150;
                                r0 = r1.bind(r2)(r0);
case 42:
                                r1 = _closure3_slot0;
                                r1 = r1.props;
                                r2 = r1.onFocus;
                                r1 = null;
                                if(!(r2 != r1)) { _fun3428_ip = 89; continue _fun3428 }
case 66:
                                r0 = _closure3_slot0;
                                r2 = r0.props;
                                r1 = r2.onFocus;
                                r0 = a0;
                                r0 = r1.bind(r2)(r0);
case 89:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r0['onFocus'] = r3;
                        r3 = r2.props;
                        r3 = r3.onLongPress;
                        r0['onLongPress'] = r3;
                        r2 = r2.props;
                        r2 = r2.onPress;
                        r0['onPress'] = r2;
                        r2 = function(a0) { // Original name: onPressIn, environment: r1
                            _fun3429: for(var _fun3429_ip = 0; ; ) switch(_fun3429_ip) {
case 0:
                                r2 = a0;
                                r4 = _closure3_slot0;
                                r3 = r4._opacityActive;
                                r1 = r2.dispatchConfig;
                                r6 = r1.registrationName;
                                r1 = 150;
                                r5 = 'onResponderGrant';
                                if(!(r6 === r5)) { _fun3429_ip = 39; continue _fun3429 }
case 37:
                                r1 = 0;
case 39:
                                r1 = r3.bind(r4)(r1);
                                r1 = _closure3_slot0;
                                r1 = r1.props;
                                r3 = r1.onPressIn;
                                r1 = null;
                                if(!(r3 != r1)) { _fun3429_ip = 85; continue _fun3429 }
case 65:
                                r0 = _closure3_slot0;
                                r1 = r0.props;
                                r0 = r1.onPressIn;
                                r0 = r0.bind(r1)(r2);
case 85:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r0['onPressIn'] = r2;
                        r1 = function(a0) { // Original name: onPressOut, environment: r1
                            _fun3430: for(var _fun3430_ip = 0; ; ) switch(_fun3430_ip) {
case 0:
                                r1 = _closure3_slot0;
                                r3 = r1._opacityInactive;
                                r2 = 250;
                                r2 = r3.bind(r1)(r2);
                                r1 = r1.props;
                                r2 = r1.onPressOut;
                                r1 = null;
                                if(!(r2 != r1)) { _fun3430_ip = 61; continue _fun3430 }
case 38:
                                r0 = _closure3_slot0;
                                r2 = r0.props;
                                r1 = r2.onPressOut;
                                r0 = a0;
                                r0 = r1.bind(r2)(r0);
case 61:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r0['onPressOut'] = r1;
                        return r0;
                    }
                };
                r4['value'] = r0;
                r0 = new Array(9);
                r0[0] = r4;
                r4 = {};
                r6 = '_setOpacityTo';
                r4['key'] = r6;
                r6 = function(a0, a1) { // Original name: _setOpacityTo, environment: r5
                    r0 = _closure1_slot6;
                    r3 = r0.default;
                    r2 = r3.timing;
                    r0 = this;
                    r0 = r0.state;
                    r1 = r0.anim;
                    r0 = {};
                    r5 = a0;
                    r0['toValue'] = r5;
                    r5 = a1;
                    r0['duration'] = r5;
                    r4 = _closure1_slot7;
                    r6 = r4.default;
                    r5 = r6.inOut;
                    r4 = r4.default;
                    r4 = r4.quad;
                    r4 = r5.bind(r6)(r4);
                    r0['easing'] = r4;
                    r4 = true;
                    r0['useNativeDriver'] = r4;
                    r1 = r2.bind(r3)(r1, r0);
                    r0 = r1.start;
                    r0 = r0.bind(r1)();
                    r0 = undefined;
                    return r0;
                };
                r4['value'] = r6;
                r0[1] = r4;
                r4 = {};
                r6 = '_opacityActive';
                r4['key'] = r6;
                r6 = function(a0) { // Original name: _opacityActive, environment: r5
                    _fun3432: for(var _fun3432_ip = 0; ; ) switch(_fun3432_ip) {
case 0:
                        r3 = this;
                        r2 = r3._setOpacityTo;
                        r0 = r3.props;
                        r0 = r0.activeOpacity;
                        r1 = null;
                        r4 = r0 != r1;
                        r1 = 0.2;
                        if(!r4) { _fun3432_ip = 41; continue _fun3432 }
case 38:
                        r1 = r0;
case 41:
                        r0 = a0;
                        r0 = r2.bind(r3)(r1, r0);
                        r0 = undefined;
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[2] = r4;
                r4 = {};
                r6 = '_opacityInactive';
                r4['key'] = r6;
                r6 = function(a0) { // Original name: _opacityInactive, environment: r5
                    r3 = this;
                    r2 = r3._setOpacityTo;
                    r0 = r3._getChildStyleOpacityWithDefault;
                    r1 = r0.bind(r3)();
                    r0 = a0;
                    r0 = r2.bind(r3)(r1, r0);
                    r0 = undefined;
                    return r0;
                };
                r4['value'] = r6;
                r0[3] = r4;
                r4 = {};
                r6 = '_getChildStyleOpacityWithDefault';
                r4['key'] = r6;
                r6 = function() { // Original name: _getChildStyleOpacityWithDefault, environment: r5
                    _fun3434: for(var _fun3434_ip = 0; ; ) switch(_fun3434_ip) {
case 0:
                        r0 = _closure1_slot9;
                        r2 = r0.default;
                        r0 = this;
                        r0 = r0.props;
                        r0 = r0.style;
                        r1 = undefined;
                        r0 = r2.bind(r1)(r0);
                        r2 = null;
                        r2 = r0 == r2;
                        if(r2) { _fun3434_ip = 45; continue _fun3434 }
case 40:
                        r1 = r0.opacity;
case 45:
                        r0 = 1;
                        r3 = typeof r1;
                        r2 = 'number';
                        if(!(r3 === r2)) { _fun3434_ip = 62; continue _fun3434 }
case 59:
                        r0 = r1;
case 62:
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[4] = r4;
                r4 = {};
                r6 = 'render';
                r4['key'] = r6;
                r6 = function() { // Original name: render, environment: r5
                    _fun3435: for(var _fun3435_ip = 0; ; ) switch(_fun3435_ip) {
case 0:
                        r8 = this;
                        r0 = r8.state;
                        r1 = r0.pressability;
                        r0 = r1.getEventHandlers;
                        r4 = r0.bind(r1)();
                        r0 = r4.onBlur;
                        r0 = r4.onFocus;
                        r0 = _closure1_slot0;
                        r2 = r0.default;
                        r0 = _closure1_slot12;
                        r3 = undefined;
                        r7 = r2.bind(r3)(r4, r0);
                        r6 = {};
                        r0 = r8.props;
                        r0 = r0.aria-busy;
                        r9 = null;
                        if(!(r0 == r9)) { _fun3435_ip = 106; continue _fun3435 }
case 78:
                        r2 = r8.props;
                        r4 = r2.accessibilityState;
                        r5 = r4 == r9;
                        r2 = undefined;
                        if(r5) { _fun3435_ip = 103; continue _fun3435 }
case 97:
                        r2 = r4.busy;
case 103:
                        r0 = r2;
case 106:
                        r6['busy'] = r0;
                        r0 = r8.props;
                        r0 = r0.aria-checked;
                        if(!(r0 == r9)) { _fun3435_ip = 154; continue _fun3435 }
case 126:
                        r2 = r8.props;
                        r4 = r2.accessibilityState;
                        r5 = r4 == r9;
                        r2 = undefined;
                        if(r5) { _fun3435_ip = 151; continue _fun3435 }
case 145:
                        r2 = r4.checked;
case 151:
                        r0 = r2;
case 154:
                        r6['checked'] = r0;
                        r0 = r8.props;
                        r0 = r0.aria-disabled;
                        if(!(r0 == r9)) { _fun3435_ip = 201; continue _fun3435 }
case 174:
                        r2 = r8.props;
                        r4 = r2.accessibilityState;
                        r5 = r4 == r9;
                        r2 = undefined;
                        if(r5) { _fun3435_ip = 198; continue _fun3435 }
case 193:
                        r2 = r4.disabled;
case 198:
                        r0 = r2;
case 201:
                        r6['disabled'] = r0;
                        r0 = r8.props;
                        r0 = r0.aria-expanded;
                        if(!(r0 == r9)) { _fun3435_ip = 248; continue _fun3435 }
case 220:
                        r2 = r8.props;
                        r4 = r2.accessibilityState;
                        r5 = r4 == r9;
                        r2 = undefined;
                        if(r5) { _fun3435_ip = 245; continue _fun3435 }
case 239:
                        r2 = r4.expanded;
case 245:
                        r0 = r2;
case 248:
                        r6['expanded'] = r0;
                        r0 = r8.props;
                        r0 = r0.aria-selected;
                        if(!(r0 == r9)) { _fun3435_ip = 296; continue _fun3435 }
case 268:
                        r2 = r8.props;
                        r4 = r2.accessibilityState;
                        r5 = r4 == r9;
                        r2 = undefined;
                        if(r5) { _fun3435_ip = 293; continue _fun3435 }
case 287:
                        r2 = r4.selected;
case 293:
                        r0 = r2;
case 296:
                        r6['selected'] = r0;
                        r0 = r8.props;
                        r0 = r0.disabled;
                        r12 = r6;
                        if(!(r0 != r9)) { _fun3435_ip = 356; continue _fun3435 }
case 318:
                        r0 = global;
                        r5 = r0.Object;
                        r4 = r5.assign;
                        r2 = {};
                        r0 = r8.props;
                        r0 = r0.disabled;
                        r2['disabled'] = r0;
                        r0 = {};
                        r12 = r4.bind(r5)(r0, r6, r2);
case 356:
                        r11 = {};
                        r0 = r8.props;
                        r0 = r0.aria-valuemax;
                        if(!(r0 == r9)) { _fun3435_ip = 401; continue _fun3435 }
case 373:
                        r2 = r8.props;
                        r4 = r2.accessibilityValue;
                        r5 = r4 == r9;
                        r2 = undefined;
                        if(r5) { _fun3435_ip = 398; continue _fun3435 }
case 393:
                        r2 = r4.max;
case 398:
                        r0 = r2;
case 401:
                        r11['max'] = r0;
                        r0 = r8.props;
                        r0 = r0.aria-valuemin;
                        if(!(r0 == r9)) { _fun3435_ip = 448; continue _fun3435 }
case 420:
                        r2 = r8.props;
                        r4 = r2.accessibilityValue;
                        r5 = r4 == r9;
                        r2 = undefined;
                        if(r5) { _fun3435_ip = 445; continue _fun3435 }
case 440:
                        r2 = r4.min;
case 445:
                        r0 = r2;
case 448:
                        r11['min'] = r0;
                        r0 = r8.props;
                        r0 = r0.aria-valuenow;
                        if(!(r0 == r9)) { _fun3435_ip = 495; continue _fun3435 }
case 467:
                        r2 = r8.props;
                        r4 = r2.accessibilityValue;
                        r5 = r4 == r9;
                        r2 = undefined;
                        if(r5) { _fun3435_ip = 492; continue _fun3435 }
case 487:
                        r2 = r4.now;
case 492:
                        r0 = r2;
case 495:
                        r11['now'] = r0;
                        r0 = r8.props;
                        r0 = r0.aria-valuetext;
                        if(!(r0 == r9)) { _fun3435_ip = 542; continue _fun3435 }
case 514:
                        r2 = r8.props;
                        r4 = r2.accessibilityValue;
                        r5 = r4 == r9;
                        r2 = undefined;
                        if(r5) { _fun3435_ip = 539; continue _fun3435 }
case 534:
                        r2 = r4.text;
case 539:
                        r0 = r2;
case 542:
                        r11['text'] = r0;
                        r0 = r8.props;
                        r4 = r0.aria-live;
                        r0 = 'none';
                        r2 = 'off';
                        if(!(r4 !== r2)) { _fun3435_ip = 598; continue _fun3435 }
case 569:
                        r2 = r8.props;
                        r2 = r2.aria-live;
                        if(!(r2 == r9)) { _fun3435_ip = 595; continue _fun3435 }
case 584:
                        r4 = r8.props;
                        r2 = r4.accessibilityLiveRegion;
case 595:
                        r0 = r2;
case 598:
                        r2 = r8.props;
                        r13 = r2.aria-label;
                        if(!(r13 == r9)) { _fun3435_ip = 624; continue _fun3435 }
case 613:
                        r2 = r8.props;
                        r13 = r2.accessibilityLabel;
case 624:
                        r2 = _closure1_slot11;
                        r2 = r2.jsxs;
                        r1 = _closure1_slot6;
                        r1 = r1.default;
                        r1 = r1.View;
                        r4 = global;
                        r6 = r4.Object;
                        r5 = r6.assign;
                        r4 = {};
                        r10 = r8.props;
                        r14 = r10.accessible;
                        r10 = false;
                        r14 = r14 !== r10;
                        r4['accessible'] = r14;
                        r4['accessibilityLabel'] = r13;
                        r13 = r8.props;
                        r13 = r13.accessibilityHint;
                        r4['accessibilityHint'] = r13;
                        r13 = r8.props;
                        r13 = r13.accessibilityLanguage;
                        r4['accessibilityLanguage'] = r13;
                        r13 = r8.props;
                        r13 = r13.accessibilityRole;
                        r4['accessibilityRole'] = r13;
                        r4['accessibilityState'] = r12;
                        r12 = r8.props;
                        r12 = r12.accessibilityActions;
                        r4['accessibilityActions'] = r12;
                        r12 = r8.props;
                        r12 = r12.onAccessibilityAction;
                        r4['onAccessibilityAction'] = r12;
                        r4['accessibilityValue'] = r11;
                        r11 = r8.props;
                        r13 = r11.aria-hidden;
                        r11 = 'no-hide-descendants';
                        r12 = true;
                        if(!(r13 !== r12)) { _fun3435_ip = 810; continue _fun3435 }
case 799:
                        r12 = r8.props;
                        r11 = r12.importantForAccessibility;
case 810:
                        r4['importantForAccessibility'] = r11;
                        r11 = r8.props;
                        r11 = r11.aria-modal;
                        if(!(r11 == r9)) { _fun3435_ip = 841; continue _fun3435 }
case 830:
                        r12 = r8.props;
                        r11 = r12.accessibilityViewIsModal;
case 841:
                        r4['accessibilityViewIsModal'] = r11;
                        r4['accessibilityLiveRegion'] = r0;
                        r0 = r8.props;
                        r0 = r0.aria-hidden;
                        if(!(r0 == r9)) { _fun3435_ip = 877; continue _fun3435 }
case 866:
                        r11 = r8.props;
                        r0 = r11.accessibilityElementsHidden;
case 877:
                        r4['accessibilityElementsHidden'] = r0;
                        r0 = r8.props;
                        r11 = r0.style;
                        r0 = new Array(2);
                        r0[0] = r11;
                        r11 = {};
                        r12 = r8.state;
                        r12 = r12.anim;
                        r11['opacity'] = r12;
                        r0[1] = r11;
                        r4['style'] = r0;
                        r0 = r8.props;
                        r0 = r0.id;
                        if(!(r0 == r9)) { _fun3435_ip = 949; continue _fun3435 }
case 939:
                        r11 = r8.props;
                        r0 = r11.nativeID;
case 949:
                        r4['nativeID'] = r0;
                        r0 = r8.props;
                        r0 = r0.testID;
                        r4['testID'] = r0;
                        r0 = r8.props;
                        r0 = r0.onLayout;
                        r4['onLayout'] = r0;
                        r0 = r8.props;
                        r0 = r0.nextFocusDown;
                        r4['nextFocusDown'] = r0;
                        r0 = r8.props;
                        r0 = r0.nextFocusForward;
                        r4['nextFocusForward'] = r0;
                        r0 = r8.props;
                        r0 = r0.nextFocusLeft;
                        r4['nextFocusLeft'] = r0;
                        r0 = r8.props;
                        r0 = r0.nextFocusRight;
                        r4['nextFocusRight'] = r0;
                        r0 = r8.props;
                        r0 = r0.nextFocusUp;
                        r4['nextFocusUp'] = r0;
                        r0 = r8.props;
                        r0 = r0.hasTVPreferredFocus;
                        r4['hasTVPreferredFocus'] = r0;
                        r0 = r8.props;
                        r0 = r0.hitSlop;
                        r4['hitSlop'] = r0;
                        r0 = r8.props;
                        r0 = r0.focusable;
                        r0 = r0 !== r10;
                        if(!r0) { _fun3435_ip = 1127; continue _fun3435 }
case 1113:
                        r10 = r8.props;
                        r10 = r10.onPress;
                        r0 = r10 !== r3;
case 1127:
                        if(!r0) { _fun3435_ip = 1143; continue _fun3435 }
case 1130:
                        r10 = r8.props;
                        r10 = r10.disabled;
                        r0 = !r10;
case 1143:
                        r4['focusable'] = r0;
                        r0 = r8.props;
                        r0 = r0.hostRef;
                        r4['ref'] = r0;
                        r0 = {};
                        r8 = r8.props;
                        r10 = r8.children;
                        r8 = new Array(2);
                        r8[0] = r10;
                        r8[1] = r9;
                        r0['children'] = r8;
                        r0 = r5.bind(r6)(r4, r7, r0);
                        r0 = r2.bind(r3)(r1, r0);
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[5] = r4;
                r4 = {};
                r6 = 'componentDidUpdate';
                r4['key'] = r6;
                r6 = function(a0, a1) { // Original name: componentDidUpdate, environment: r5
                    _fun3436: for(var _fun3436_ip = 0; ; ) switch(_fun3436_ip) {
case 0:
                        r0 = a0;
                        r2 = this;
                        r1 = r2.state;
                        r4 = r1.pressability;
                        r3 = r4.configure;
                        r1 = r2._createPressabilityConfig;
                        r1 = r1.bind(r2)();
                        r1 = r3.bind(r4)(r1);
                        r1 = r2.props;
                        r3 = r1.disabled;
                        r1 = r0.disabled;
                        if(!(r3 === r1)) { _fun3436_ip = 138; continue _fun3436 }
case 56:
                        r1 = _closure1_slot9;
                        r4 = r1.default;
                        r1 = r0.style;
                        r0 = undefined;
                        r5 = r4.bind(r0)(r1);
                        r4 = null;
                        r6 = r5 == r4;
                        r1 = undefined;
                        if(r6) { _fun3436_ip = 96; continue _fun3436 }
case 91:
                        r1 = r5.opacity;
case 96:
                        r3 = _closure1_slot9;
                        r5 = r3.default;
                        r3 = r2.props;
                        r3 = r3.style;
                        r3 = r5.bind(r0)(r3);
                        r4 = r3 == r4;
                        r0 = undefined;
                        if(r4) { _fun3436_ip = 134; continue _fun3436 }
case 129:
                        r0 = r3.opacity;
case 134:
                        if(!(r1 !== r0)) { _fun3436_ip = 152; continue _fun3436 }
case 138:
                        r1 = r2._opacityInactive;
                        r0 = 250;
                        r0 = r1.bind(r2)(r0);
case 152:
                        r0 = undefined;
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[6] = r4;
                r4 = {};
                r6 = 'componentDidMount';
                r4['key'] = r6;
                r6 = function() { // Original name: componentDidMount, environment: r5
                    r3 = this;
                    r0 = r3.state;
                    r2 = r0.pressability;
                    r1 = r2.configure;
                    r0 = r3._createPressabilityConfig;
                    r0 = r0.bind(r3)();
                    r0 = r1.bind(r2)(r0);
                    r0 = undefined;
                    return r0;
                };
                r4['value'] = r6;
                r0[7] = r4;
                r4 = {};
                r6 = 'componentWillUnmount';
                r4['key'] = r6;
                r5 = function() { // Original name: componentWillUnmount, environment: r5
                    r0 = this;
                    r1 = r0.state;
                    r2 = r1.pressability;
                    r1 = r2.reset;
                    r1 = r1.bind(r2)();
                    r0 = r0.state;
                    r1 = r0.anim;
                    r0 = r1.resetAnimation;
                    r0 = r0.bind(r1)();
                    r0 = undefined;
                    return r0;
                };
                r4['value'] = r5;
                r0[8] = r4;
                r0 = r1.bind(r2)(r3, r0);
                return r0;
            };
            r3 = r3.bind(r0)(r5);
            var _closure1_slot13 = r3;
            r3 = r4.forwardRef;
            r1 = function(a0, a1) { // Environment: r1
                r1 = _closure1_slot11;
                r3 = r1.jsx;
                r2 = _closure1_slot13;
                r0 = global;
                r6 = r0.Object;
                r5 = r6.assign;
                r4 = {};
                r0 = a1;
                r4['hostRef'] = r0;
                r1 = {};
                r0 = a0;
                r1 = r5.bind(r6)(r1, r0, r4);
                r0 = undefined;
                r0 = r3.bind(r0)(r2, r1);
                return r0;
            };
            r1 = r3.bind(r4)(r1);
            r3 = 'TouchableOpacity';
            r1['displayName'] = r3;
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 298;
    r5 = [1, 203, 12, 13, 23, 25, 28, 299, 322, 288, 128, 33, 119, 251];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r2 = a5;
        r0 = global;
        r4 = r0.Object;
        r3 = r4.defineProperty;
        r1 = {};
        r0 = true;
        r1['value'] = r0;
        r0 = '__esModule';
        r0 = r3.bind(r4)(r2, r0, r1);
        r0 = undefined;
        r2['default'] = r0;
        r3 = a6;
        r1 = 0;
        r3 = r3[r1];
        r1 = a1;
        r1 = r1.bind(r0)(r3);
        r1 = r1.default;
        r2['default'] = r1;
        return r0;
    };
    r6 = 299;
    r5 = [300];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun3441: for(var _fun3441_ip = 0; ; ) switch(_fun3441_ip) {
case 0:
            r8 = a1;
            r2 = a5;
            r9 = a6;
            var _closure1_slot0 = r8;
            var _closure1_slot1 = r9;
            r0 = 0;
            r1 = r9[r0];
            r0 = undefined;
            r7 = r8.bind(r0)(r1);
            r1 = global;
            r10 = r1.Object;
            r5 = r10.defineProperty;
            r4 = {};
            r3 = true;
            r4['value'] = r3;
            r3 = '__esModule';
            r3 = r5.bind(r10)(r2, r3, r4);
            r2['default'] = r0;
            r3 = 1;
            r3 = r9[r3];
            r3 = r8.bind(r0)(r3);
            r5 = r7.bind(r0)(r3);
            r3 = 2;
            r3 = r9[r3];
            r3 = r8.bind(r0)(r3);
            r4 = r7.bind(r0)(r3);
            r3 = 3;
            r3 = r9[r3];
            r3 = r8.bind(r0)(r3);
            r3 = r7.bind(r0)(r3);
            r5 = r5.default;
            r5 = r5.isDisableAnimations;
            if(r5) { _fun3441_ip = 142; continue _fun3441 }
case 135:
            r5 = r4.default;
            _fun3441_ip = 147; continue _fun3441;
case 142:
            r5 = r3.default;
case 147:
            r4 = r1.Object;
            r3 = r4.assign;
            r1 = {};
            r8 = function() { // Original name: get FlatList, environment: r6
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 4;
                r1 = r1[r0];
                r0 = undefined;
                r0 = r2.bind(r0)(r1);
                r0 = r0.default;
                return r0;
            };
            r7 = 'FlatList';
            Object.defineProperty(r1, r7, {get: r8, set: r0, enumerable: true});
            r8 = function() { // Original name: get Image, environment: r6
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 5;
                r1 = r1[r0];
                r0 = undefined;
                r0 = r2.bind(r0)(r1);
                r0 = r0.default;
                return r0;
            };
            r7 = 'Image';
            Object.defineProperty(r1, r7, {get: r8, set: r0, enumerable: true});
            r8 = function() { // Original name: get ScrollView, environment: r6
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 6;
                r1 = r1[r0];
                r0 = undefined;
                r0 = r2.bind(r0)(r1);
                r0 = r0.default;
                return r0;
            };
            r7 = 'ScrollView';
            Object.defineProperty(r1, r7, {get: r8, set: r0, enumerable: true});
            r8 = function() { // Original name: get SectionList, environment: r6
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 7;
                r1 = r1[r0];
                r0 = undefined;
                r0 = r2.bind(r0)(r1);
                r0 = r0.default;
                return r0;
            };
            r7 = 'SectionList';
            Object.defineProperty(r1, r7, {get: r8, set: r0, enumerable: true});
            r8 = function() { // Original name: get Text, environment: r6
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 8;
                r1 = r1[r0];
                r0 = undefined;
                r0 = r2.bind(r0)(r1);
                r0 = r0.default;
                return r0;
            };
            r7 = 'Text';
            Object.defineProperty(r1, r7, {get: r8, set: r0, enumerable: true});
            r7 = function() { // Original name: get View, environment: r6
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 9;
                r1 = r1[r0];
                r0 = undefined;
                r0 = r2.bind(r0)(r1);
                r0 = r0.default;
                return r0;
            };
            r6 = 'View';
            Object.defineProperty(r1, r6, {get: r7, set: r0, enumerable: true});
            r1 = r3.bind(r4)(r1, r5);
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 300;
    r5 = [1, 33, 301, 342, 343, 361, 372, 399, 401, 402];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r4 = a1;
        r2 = a5;
        r5 = a6;
        var _closure1_slot0 = r4;
        var _closure1_slot1 = r5;
        r0 = 0;
        r1 = r5[r0];
        r0 = undefined;
        r7 = r4.bind(r0)(r1);
        r1 = global;
        r9 = r1.Object;
        r8 = r9.defineProperty;
        r3 = {};
        r1 = true;
        r3['value'] = r1;
        r1 = '__esModule';
        r1 = r8.bind(r9)(r2, r1, r3);
        r2['default'] = r0;
        r1 = 1;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r7.bind(r0)(r1);
        var _closure1_slot2 = r1;
        r1 = 2;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r7.bind(r0)(r1);
        var _closure1_slot3 = r1;
        r1 = 3;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r7.bind(r0)(r1);
        var _closure1_slot4 = r1;
        r1 = 4;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r3 = r7.bind(r0)(r1);
        r1 = 5;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r7.bind(r0)(r1);
        var _closure1_slot5 = r1;
        r1 = 6;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r15 = r7.bind(r0)(r1);
        var _closure1_slot6 = r15;
        r1 = 7;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r7.bind(r0)(r1);
        var _closure1_slot7 = r1;
        r1 = 8;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r7.bind(r0)(r1);
        var _closure1_slot8 = r1;
        r1 = 9;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r14 = r7.bind(r0)(r1);
        r1 = 10;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r7.bind(r0)(r1);
        var _closure1_slot9 = r1;
        r1 = 11;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r7.bind(r0)(r1);
        var _closure1_slot10 = r1;
        r1 = 12;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r13 = r7.bind(r0)(r1);
        var _closure1_slot11 = r13;
        r1 = 13;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r7.bind(r0)(r1);
        var _closure1_slot12 = r1;
        r1 = 14;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r7.bind(r0)(r1);
        var _closure1_slot13 = r1;
        r1 = 15;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r17 = r7.bind(r0)(r1);
        var _closure1_slot14 = r17;
        r1 = 16;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r16 = r7.bind(r0)(r1);
        var _closure1_slot15 = r16;
        r1 = function(a0, a1) { // Original name: _combineCallbacks, environment: r6
            _fun3458: for(var _fun3458_ip = 0; ; ) switch(_fun3458_ip) {
case 0:
                r1 = a0;
                r2 = a1;
                var _closure2_slot0 = r1;
                var _closure2_slot1 = r2;
                if(!r1) { _fun3458_ip = 28; continue _fun3458 }
case 19:
                r3 = r2.onComplete;
                if(r3) { _fun3458_ip = 39; continue _fun3458 }
case 28:
                if(r1) { _fun3458_ip = 37; continue _fun3458 }
case 31:
                r1 = r2.onComplete;
case 37:
                return r1;
case 39:
                r0 = function() { // Environment: r0
                    _fun3459: for(var _fun3459_ip = 0; ; ) switch(_fun3459_ip) {
case 0:
                        r0 = undefined;
                        r1 = undefined;
                        r3 = _closure2_slot1;
                        r3 = r3.onComplete;
                        if(!r3) { _fun3459_ip = 46; continue _fun3459 }
case 20:
                        r6 = _closure2_slot1;
                        r5 = r6.onComplete;
                        r4 = r5.apply;
                        r1 = arguments;
                        r3 = r1;
                        r3 = r4.bind(r5)(r6, r3);
case 46:
                        r3 = _closure2_slot0;
                        if(!r3) { _fun3459_ip = 70; continue _fun3459 }
case 53:
                        r3 = _closure2_slot0;
                        r2 = r3.apply;
                        r1 = arguments;
                        r1 = r2.bind(r3)(r0, r1);
case 70:
                        return r0;
                    }
                };
                return r0;
            }
        };
        var _closure1_slot16 = r1;
        r1 = function(a0, a1, a2) { // Original name: maybeVectorAnim, environment: r6
            _fun3460: for(var _fun3460_ip = 0; ; ) switch(_fun3460_ip) {
case 0:
                r0 = a0;
                r11 = a1;
                r5 = a2;
                r2 = _closure1_slot15;
                r2 = r2.default;
                r2 = r0 instanceof r2;
                if(r2) { _fun3460_ip = 305; continue _fun3460 }
case 31:
                r2 = _closure1_slot6;
                r2 = r2.default;
                r2 = r0 instanceof r2;
                if(r2) { _fun3460_ip = 51; continue _fun3460 }
case 47:
                r2 = null;
                return r2;
case 51:
                r2 = global;
                r6 = r2.Object;
                r4 = r6.assign;
                r3 = {};
                r8 = r4.bind(r6)(r3, r11);
                r6 = r2.Object;
                r4 = r6.assign;
                r3 = {};
                r7 = r4.bind(r6)(r3, r11);
                r6 = r2.Object;
                r4 = r6.assign;
                r3 = {};
                r4 = r4.bind(r6)(r3, r11);
                r6 = r2.Object;
                r3 = r6.assign;
                r2 = {};
                r3 = r3.bind(r6)(r2, r11);
                r12 = r11;
                r6 = undefined;
                for(r2 in r12)
case 142:
                {
case 151:
                    r15 = r2;
                    r14 = r11[r15];
                    r18 = r14.r;
                    r17 = r14.g;
                    r16 = r14.b;
                    r14 = r14.a;
                    if(r18 === r6) { _fun3460_ip = 142; continue _fun3460 }
case 186:
                    if(r17 === r6) { _fun3460_ip = 142; continue _fun3460 }
case 190:
                    if(r16 === r6) { _fun3460_ip = 142; continue _fun3460 }
case 194:
                    if(r14 === r6) { _fun3460_ip = 142; continue _fun3460 }
case 198:
                    r8[r15] = r18;
                    r7[r15] = r17;
                    r4[r15] = r16;
                    r3[r15] = r14;
                    _fun3460_ip = 142; continue _fun3460;
                }
case 216:
                r2 = r0.r;
                r9 = r5.bind(r6)(r2, r8);
                r2 = r0.g;
                r8 = r5.bind(r6)(r2, r7);
                r2 = r0.b;
                r7 = r5.bind(r6)(r2, r4);
                r2 = r0.a;
                r2 = r5.bind(r6)(r2, r3);
                r4 = _closure1_slot22;
                r3 = new Array(4);
                r3[0] = r9;
                r3[1] = r8;
                r3[2] = r7;
                r3[3] = r2;
                r2 = {};
                r7 = false;
                r2['stopTogether'] = r7;
                r2 = r4.bind(r6)(r3, r2);
                return r2;
case 305:
                r2 = global;
                r6 = r2.Object;
                r4 = r6.assign;
                r3 = {};
                r6 = r4.bind(r6)(r3, r11);
                r4 = r2.Object;
                r3 = r4.assign;
                r2 = {};
                r2 = r3.bind(r4)(r2, r11);
                r9 = r11;
                r3 = undefined;
                for(r4 in r9)
case 358:
                {
case 367:
                    r13 = r4;
                    r12 = r11[r13];
                    r14 = r12.x;
                    r12 = r12.y;
                    if(r14 === r3) { _fun3460_ip = 358; continue _fun3460 }
case 388:
                    if(r12 === r3) { _fun3460_ip = 358; continue _fun3460 }
case 392:
                    r6[r13] = r14;
                    r2[r13] = r12;
                    _fun3460_ip = 358; continue _fun3460;
                }
case 402:
                r4 = r0.x;
                r4 = r5.bind(r3)(r4, r6);
                r0 = r0.y;
                r0 = r5.bind(r3)(r0, r2);
                r2 = _closure1_slot22;
                r1 = new Array(2);
                r1[0] = r4;
                r1[1] = r0;
                r0 = {};
                r4 = false;
                r0['stopTogether'] = r4;
                r0 = r2.bind(r3)(r1, r0);
                return r0;
            }
        };
        var _closure1_slot17 = r1;
        r10 = function(a0, a1) { // Original name: spring, environment: r6
            _fun3461: for(var _fun3461_ip = 0; ; ) switch(_fun3461_ip) {
case 0:
                r5 = a0;
                r4 = a1;
                var _closure2_slot0 = r5;
                var _closure2_slot1 = r4;
                r0 = function(a0, a1, a2) { // Original name: start, environment: r2
                    _fun3462: for(var _fun3462_ip = 0; ; ) switch(_fun3462_ip) {
case 0:
                        r3 = a0;
                        r8 = a1;
                        r4 = _closure1_slot16;
                        r0 = undefined;
                        r2 = a2;
                        r7 = r4.bind(r0)(r2, r8);
                        r2 = r3.stopTracking;
                        r2 = r2.bind(r3)();
                        r4 = r8.toValue;
                        r2 = _closure1_slot11;
                        r2 = r2.default;
                        r2 = r4 instanceof r2;
                        if(r2) { _fun3462_ip = 101; continue _fun3462 }
case 55:
                        r4 = r3.animate;
                        r2 = _closure1_slot3;
                        r2 = r2.default;
                        r5 = r2.prototype;
                        r5 = Object.create(r5, {constructor: {value: r2}});
                        r14 = r5;
                        r13 = r8;
                        r2 = new r14[r2](r13, r12);
                        r2 = r2 instanceof Object ? r2 : r5;
                        r2 = r4.bind(r3)(r2, r7);
                        _fun3462_ip = 164; continue _fun3462;
case 101:
                        r2 = r3.track;
                        r4 = _closure1_slot13;
                        r6 = r4.default;
                        r12 = r8.toValue;
                        r1 = _closure1_slot3;
                        r11 = r1.default;
                        r4 = r6.prototype;
                        r4 = Object.create(r4, {constructor: {value: r6}});
                        r14 = r4;
                        r13 = r3;
                        r10 = r8;
                        r9 = r7;
                        r1 = new r14[r6](r13, r12, r11, r10, r9, r8);
                        r1 = r1 instanceof Object ? r1 : r4;
                        r1 = r2.bind(r3)(r1);
case 164:
                        return r0;
                    }
                };
                var _closure2_slot2 = r0;
                r3 = _closure1_slot17;
                r1 = _closure1_slot18;
                r0 = undefined;
                r0 = r3.bind(r0)(r5, r4, r1);
                if(r0) { _fun3461_ip = 102; continue _fun3461 }
case 48:
                r1 = {};
                r3 = function(a0) { // Original name: start, environment: r2
                    r4 = _closure2_slot2;
                    r3 = _closure2_slot0;
                    r2 = _closure2_slot1;
                    r0 = undefined;
                    r1 = a0;
                    r1 = r4.bind(r0)(r3, r2, r1);
                    return r0;
                };
                r1['start'] = r3;
                r3 = function() { // Original name: stop, environment: r2
                    r1 = _closure2_slot0;
                    r0 = r1.stopAnimation;
                    r0 = r0.bind(r1)();
                    r0 = undefined;
                    return r0;
                };
                r1['stop'] = r3;
                r3 = function() { // Original name: reset, environment: r2
                    r1 = _closure2_slot0;
                    r0 = r1.resetAnimation;
                    r0 = r0.bind(r1)();
                    r0 = undefined;
                    return r0;
                };
                r1['reset'] = r3;
                r3 = function(a0) { // Original name: _startNativeLoop, environment: r2
                    r0 = global;
                    r5 = r0.Object;
                    r4 = r5.assign;
                    r3 = _closure2_slot1;
                    r2 = {};
                    r1 = a0;
                    r2['iterations'] = r1;
                    r1 = {};
                    r3 = r4.bind(r5)(r1, r3, r2);
                    r2 = _closure2_slot2;
                    r1 = _closure2_slot0;
                    r0 = undefined;
                    r1 = r2.bind(r0)(r1, r3);
                    return r0;
                };
                r1['_startNativeLoop'] = r3;
                r2 = function() { // Original name: _isUsingNativeDriver, environment: r2
                    _fun3467: for(var _fun3467_ip = 0; ; ) switch(_fun3467_ip) {
case 0:
                        r0 = _closure2_slot1;
                        r0 = r0.useNativeDriver;
                        if(r0) { _fun3467_ip = 17; continue _fun3467 }
case 15:
                        r0 = false;
case 17:
                        return r0;
                    }
                };
                r1['_isUsingNativeDriver'] = r2;
                r0 = r1;
case 102:
                return r0;
            }
        };
        var _closure1_slot18 = r10;
        r11 = function(a0, a1) { // Original name: timing, environment: r6
            _fun3468: for(var _fun3468_ip = 0; ; ) switch(_fun3468_ip) {
case 0:
                r5 = a0;
                r4 = a1;
                var _closure2_slot0 = r5;
                var _closure2_slot1 = r4;
                r0 = function(a0, a1, a2) { // Original name: start, environment: r2
                    _fun3469: for(var _fun3469_ip = 0; ; ) switch(_fun3469_ip) {
case 0:
                        r3 = a0;
                        r8 = a1;
                        r4 = _closure1_slot16;
                        r0 = undefined;
                        r2 = a2;
                        r7 = r4.bind(r0)(r2, r8);
                        r2 = r3.stopTracking;
                        r2 = r2.bind(r3)();
                        r4 = r8.toValue;
                        r2 = _closure1_slot11;
                        r2 = r2.default;
                        r2 = r4 instanceof r2;
                        if(r2) { _fun3469_ip = 101; continue _fun3469 }
case 55:
                        r4 = r3.animate;
                        r2 = _closure1_slot4;
                        r2 = r2.default;
                        r5 = r2.prototype;
                        r5 = Object.create(r5, {constructor: {value: r2}});
                        r14 = r5;
                        r13 = r8;
                        r2 = new r14[r2](r13, r12);
                        r2 = r2 instanceof Object ? r2 : r5;
                        r2 = r4.bind(r3)(r2, r7);
                        _fun3469_ip = 164; continue _fun3469;
case 101:
                        r2 = r3.track;
                        r4 = _closure1_slot13;
                        r6 = r4.default;
                        r12 = r8.toValue;
                        r1 = _closure1_slot4;
                        r11 = r1.default;
                        r4 = r6.prototype;
                        r4 = Object.create(r4, {constructor: {value: r6}});
                        r14 = r4;
                        r13 = r3;
                        r10 = r8;
                        r9 = r7;
                        r1 = new r14[r6](r13, r12, r11, r10, r9, r8);
                        r1 = r1 instanceof Object ? r1 : r4;
                        r1 = r2.bind(r3)(r1);
case 164:
                        return r0;
                    }
                };
                var _closure2_slot2 = r0;
                r3 = _closure1_slot17;
                r1 = _closure1_slot19;
                r0 = undefined;
                r0 = r3.bind(r0)(r5, r4, r1);
                if(r0) { _fun3468_ip = 102; continue _fun3468 }
case 48:
                r1 = {};
                r3 = function(a0, a1) { // Original name: start, environment: r2
                    r4 = _closure2_slot2;
                    r3 = _closure2_slot0;
                    r1 = global;
                    r6 = r1.Object;
                    r5 = r6.assign;
                    r2 = _closure2_slot1;
                    r1 = {};
                    r0 = a1;
                    r1['isLooping'] = r0;
                    r0 = {};
                    r2 = r5.bind(r6)(r0, r2, r1);
                    r0 = undefined;
                    r1 = a0;
                    r1 = r4.bind(r0)(r3, r2, r1);
                    return r0;
                };
                r1['start'] = r3;
                r3 = function() { // Original name: stop, environment: r2
                    r1 = _closure2_slot0;
                    r0 = r1.stopAnimation;
                    r0 = r0.bind(r1)();
                    r0 = undefined;
                    return r0;
                };
                r1['stop'] = r3;
                r3 = function() { // Original name: reset, environment: r2
                    r1 = _closure2_slot0;
                    r0 = r1.resetAnimation;
                    r0 = r0.bind(r1)();
                    r0 = undefined;
                    return r0;
                };
                r1['reset'] = r3;
                r3 = function(a0) { // Original name: _startNativeLoop, environment: r2
                    r0 = global;
                    r5 = r0.Object;
                    r4 = r5.assign;
                    r3 = _closure2_slot1;
                    r2 = {};
                    r1 = a0;
                    r2['iterations'] = r1;
                    r1 = {};
                    r3 = r4.bind(r5)(r1, r3, r2);
                    r2 = _closure2_slot2;
                    r1 = _closure2_slot0;
                    r0 = undefined;
                    r1 = r2.bind(r0)(r1, r3);
                    return r0;
                };
                r1['_startNativeLoop'] = r3;
                r2 = function() { // Original name: _isUsingNativeDriver, environment: r2
                    _fun3474: for(var _fun3474_ip = 0; ; ) switch(_fun3474_ip) {
case 0:
                        r0 = _closure2_slot1;
                        r0 = r0.useNativeDriver;
                        if(r0) { _fun3474_ip = 17; continue _fun3474 }
case 15:
                        r0 = false;
case 17:
                        return r0;
                    }
                };
                r1['_isUsingNativeDriver'] = r2;
                r0 = r1;
case 102:
                return r0;
            }
        };
        var _closure1_slot19 = r11;
        r12 = function(a0, a1) { // Original name: decay, environment: r6
            _fun3475: for(var _fun3475_ip = 0; ; ) switch(_fun3475_ip) {
case 0:
                r5 = a0;
                r4 = a1;
                var _closure2_slot0 = r5;
                var _closure2_slot1 = r4;
                r0 = function(a0, a1, a2) { // Original name: start, environment: r2
                    r4 = a0;
                    r6 = a1;
                    r3 = _closure1_slot16;
                    r0 = undefined;
                    r2 = a2;
                    r3 = r3.bind(r0)(r2, r6);
                    r2 = r4.stopTracking;
                    r2 = r2.bind(r4)();
                    r2 = r4.animate;
                    r1 = _closure1_slot2;
                    r1 = r1.default;
                    r5 = r1.prototype;
                    r5 = Object.create(r5, {constructor: {value: r1}});
                    r9 = r5;
                    r8 = r6;
                    r1 = new r9[r1](r8, r7);
                    r1 = r1 instanceof Object ? r1 : r5;
                    r1 = r2.bind(r4)(r1, r3);
                    return r0;
                };
                var _closure2_slot2 = r0;
                r3 = _closure1_slot17;
                r1 = _closure1_slot20;
                r0 = undefined;
                r0 = r3.bind(r0)(r5, r4, r1);
                if(r0) { _fun3475_ip = 102; continue _fun3475 }
case 48:
                r1 = {};
                r3 = function(a0) { // Original name: start, environment: r2
                    r4 = _closure2_slot2;
                    r3 = _closure2_slot0;
                    r2 = _closure2_slot1;
                    r0 = undefined;
                    r1 = a0;
                    r1 = r4.bind(r0)(r3, r2, r1);
                    return r0;
                };
                r1['start'] = r3;
                r3 = function() { // Original name: stop, environment: r2
                    r1 = _closure2_slot0;
                    r0 = r1.stopAnimation;
                    r0 = r0.bind(r1)();
                    r0 = undefined;
                    return r0;
                };
                r1['stop'] = r3;
                r3 = function() { // Original name: reset, environment: r2
                    r1 = _closure2_slot0;
                    r0 = r1.resetAnimation;
                    r0 = r0.bind(r1)();
                    r0 = undefined;
                    return r0;
                };
                r1['reset'] = r3;
                r3 = function(a0) { // Original name: _startNativeLoop, environment: r2
                    r0 = global;
                    r5 = r0.Object;
                    r4 = r5.assign;
                    r3 = _closure2_slot1;
                    r2 = {};
                    r1 = a0;
                    r2['iterations'] = r1;
                    r1 = {};
                    r3 = r4.bind(r5)(r1, r3, r2);
                    r2 = _closure2_slot2;
                    r1 = _closure2_slot0;
                    r0 = undefined;
                    r1 = r2.bind(r0)(r1, r3);
                    return r0;
                };
                r1['_startNativeLoop'] = r3;
                r2 = function() { // Original name: _isUsingNativeDriver, environment: r2
                    _fun3481: for(var _fun3481_ip = 0; ; ) switch(_fun3481_ip) {
case 0:
                        r0 = _closure2_slot1;
                        r0 = r0.useNativeDriver;
                        if(r0) { _fun3481_ip = 17; continue _fun3481 }
case 15:
                        r0 = false;
case 17:
                        return r0;
                    }
                };
                r1['_isUsingNativeDriver'] = r2;
                r0 = r1;
case 102:
                return r0;
            }
        };
        var _closure1_slot20 = r12;
        r8 = function(a0) { // Original name: sequence, environment: r6
            r0 = a0;
            var _closure2_slot0 = r0;
            r0 = 0;
            var _closure2_slot1 = r0;
            r0 = {};
            r2 = function(a0, a1) { // Original name: start, environment: r1
                _fun3483: for(var _fun3483_ip = 0; ; ) switch(_fun3483_ip) {
case 0:
                    r2 = a0;
                    r4 = a1;
                    var _closure3_slot0 = r2;
                    var _closure3_slot1 = r4;
                    r3 = function(a0) { // Original name: onComplete, environment: r0
                        _fun3484: for(var _fun3484_ip = 0; ; ) switch(_fun3484_ip) {
case 0:
                            r2 = a0;
                            r0 = r2.finished;
                            if(r0) { _fun3484_ip = 37; continue _fun3484 }
case 12:
                            r1 = _closure3_slot0;
                            if(!r1) { _fun3484_ip = 33; continue _fun3484 }
case 22:
                            r1 = _closure3_slot0;
                            r0 = undefined;
                            r0 = r1.bind(r0)(r2);
case 33:
                            r0 = undefined;
                            return r0;
case 37:
                            r0 = _closure2_slot1;
                            r3 = r0 + 1;
                            _closure2_slot1 = r3;
                            r0 = _closure2_slot0;
                            r0 = r0.length;
                            if(!(r3 !== r0)) { _fun3484_ip = 102; continue _fun3484 }
case 64:
                            r3 = _closure2_slot0;
                            r0 = _closure2_slot1;
                            r5 = r3[r0];
                            r4 = r5.start;
                            r3 = _closure3_slot2;
                            r0 = _closure3_slot1;
                            r0 = r4.bind(r5)(r3, r0);
                            r0 = undefined;
                            return r0;
case 102:
                            r0 = 0;
                            _closure2_slot1 = r0;
                            r1 = _closure3_slot0;
                            if(!r1) { _fun3484_ip = 129; continue _fun3484 }
case 118:
                            r1 = _closure3_slot0;
                            r0 = undefined;
                            r0 = r1.bind(r0)(r2);
case 129:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    var _closure3_slot2 = r3;
                    r1 = _closure2_slot0;
                    r5 = r1.length;
                    r1 = 0;
                    if(!(r5 !== r1)) { _fun3483_ip = 68; continue _fun3483 }
case 43:
                    r1 = _closure2_slot0;
                    r0 = _closure2_slot1;
                    r1 = r1[r0];
                    r0 = r1.start;
                    r0 = r0.bind(r1)(r3, r4);
                    _fun3483_ip = 87; continue _fun3483;
case 68:
                    if(!r2) { _fun3483_ip = 87; continue _fun3483 }
case 71:
                    r1 = {};
                    r0 = true;
                    r1['finished'] = r0;
                    r0 = undefined;
                    r0 = r2.bind(r0)(r1);
case 87:
                    r0 = undefined;
                    return r0;
                }
            };
            r0['start'] = r2;
            r2 = function() { // Original name: stop, environment: r1
                _fun3485: for(var _fun3485_ip = 0; ; ) switch(_fun3485_ip) {
case 0:
                    r2 = _closure2_slot1;
                    r1 = _closure2_slot0;
                    r1 = r1.length;
                    if(!(r2 < r1)) { _fun3485_ip = 42; continue _fun3485 }
case 20:
                    r1 = _closure2_slot0;
                    r0 = _closure2_slot1;
                    r1 = r1[r0];
                    r0 = r1.stop;
                    r0 = r0.bind(r1)();
case 42:
                    r0 = undefined;
                    return r0;
                }
            };
            r0['stop'] = r2;
            r2 = function() { // Original name: reset, environment: r1
                r3 = _closure2_slot0;
                r2 = r3.forEach;
                r0 = function(a0, a1) { // Environment: r0
                    _fun3487: for(var _fun3487_ip = 0; ; ) switch(_fun3487_ip) {
case 0:
                        r1 = a0;
                        r2 = _closure2_slot1;
                        r0 = a1;
                        if(!(r0 <= r2)) { _fun3487_ip = 27; continue _fun3487 }
case 17:
                        r0 = r1.reset;
                        r0 = r0.bind(r1)();
case 27:
                        r0 = undefined;
                        return r0;
                    }
                };
                r0 = r2.bind(r3)(r0);
                r0 = 0;
                _closure2_slot1 = r0;
                r0 = undefined;
                return r0;
            };
            r0['reset'] = r2;
            r2 = function() { // Original name: _startNativeLoop, environment: r1
                r0 = global;
                r2 = r0.Error;
                r0 = r2.prototype;
                r1 = Object.create(r0, {constructor: {value: r2}});
                r3 = 'Loops run using the native driver cannot contain Animated.sequence animations';
                r4 = r1;
                r0 = new r4[r2](r3, r2);
                r0 = r0 instanceof Object ? r0 : r1;
                throw r0;
            };
            r0['_startNativeLoop'] = r2;
            r1 = function() { // Original name: _isUsingNativeDriver, environment: r1
                r0 = false;
                return r0;
            };
            r0['_isUsingNativeDriver'] = r1;
            return r0;
        };
        var _closure1_slot21 = r8;
        r7 = function(a0, a1) { // Original name: parallel, environment: r6
            _fun3490: for(var _fun3490_ip = 0; ; ) switch(_fun3490_ip) {
case 0:
                r2 = a1;
                r0 = a0;
                var _closure2_slot0 = r0;
                r0 = 0;
                var _closure2_slot1 = r0;
                r0 = {};
                var _closure2_slot2 = r0;
                r0 = r2;
                if(!r0) { _fun3490_ip = 42; continue _fun3490 }
case 30:
                r3 = r2.stopTogether;
                r2 = false;
                r0 = r3 === r2;
case 42:
                r0 = !r0;
                var _closure2_slot3 = r0;
                r0 = {};
                r2 = function(a0, a1) { // Original name: start, environment: r1
                    _fun3491: for(var _fun3491_ip = 0; ; ) switch(_fun3491_ip) {
case 0:
                        r2 = a0;
                        var _closure3_slot0 = r2;
                        r1 = a1;
                        var _closure3_slot1 = r1;
                        r4 = _closure2_slot1;
                        r3 = _closure2_slot0;
                        r3 = r3.length;
                        if(!(r4 !== r3)) { _fun3491_ip = 59; continue _fun3491 }
case 36:
                        r3 = _closure2_slot0;
                        r1 = r3.forEach;
                        r0 = function(a0, a1) { // Environment: r0
                            _fun3492: for(var _fun3492_ip = 0; ; ) switch(_fun3492_ip) {
case 0:
                                r3 = a0;
                                r1 = a1;
                                var _closure4_slot0 = r1;
                                r2 = function(a0) { // Original name: cb, environment: r0
                                    _fun3493: for(var _fun3493_ip = 0; ; ) switch(_fun3493_ip) {
case 0:
                                        r2 = a0;
                                        r4 = _closure2_slot2;
                                        r3 = _closure4_slot0;
                                        r0 = true;
                                        r4[r3] = r0;
                                        r0 = _closure2_slot1;
                                        r3 = r0 + 1;
                                        _closure2_slot1 = r3;
                                        r0 = _closure2_slot0;
                                        r0 = r0.length;
                                        if(!(r3 !== r0)) { _fun3493_ip = 81; continue _fun3493 }
case 47:
                                        r0 = r2.finished;
                                        if(r0) { _fun3493_ip = 77; continue _fun3493 }
case 56:
                                        r0 = _closure2_slot3;
                                        if(!r0) { _fun3493_ip = 77; continue _fun3493 }
case 63:
                                        r3 = _closure2_slot4;
                                        r0 = r3.stop;
                                        r0 = r0.bind(r3)();
case 77:
                                        r0 = undefined;
                                        return r0;
case 81:
                                        r0 = 0;
                                        _closure2_slot1 = r0;
                                        r1 = _closure3_slot0;
                                        if(!r1) { _fun3493_ip = 108; continue _fun3493 }
case 97:
                                        r1 = _closure3_slot0;
                                        r0 = undefined;
                                        r0 = r1.bind(r0)(r2);
case 108:
                                        r0 = undefined;
                                        return r0;
                                    }
                                };
                                if(r3) { _fun3492_ip = 38; continue _fun3492 }
case 20:
                                r1 = {};
                                r0 = true;
                                r1['finished'] = r0;
                                r0 = undefined;
                                r0 = r2.bind(r0)(r1);
                                _fun3492_ip = 56; continue _fun3492;
case 38:
                                r1 = r3.start;
                                r0 = _closure3_slot1;
                                r0 = r1.bind(r3)(r2, r0);
case 56:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r0 = r1.bind(r3)(r0);
                        r0 = undefined;
                        return r0;
case 59:
                        if(!r2) { _fun3491_ip = 78; continue _fun3491 }
case 62:
                        r1 = {};
                        r0 = true;
                        r1['finished'] = r0;
                        r0 = undefined;
                        r0 = r2.bind(r0)(r1);
case 78:
                        r0 = undefined;
                        return r0;
                    }
                };
                r0['start'] = r2;
                r2 = function() { // Original name: stop, environment: r1
                    r2 = _closure2_slot0;
                    r1 = r2.forEach;
                    r0 = function(a0, a1) { // Environment: r0
                        _fun3495: for(var _fun3495_ip = 0; ; ) switch(_fun3495_ip) {
case 0:
                            r3 = a0;
                            r2 = a1;
                            r1 = _closure2_slot2;
                            r1 = r1[r2];
                            r1 = !r1;
                            if(!r1) { _fun3495_ip = 33; continue _fun3495 }
case 23:
                            r1 = r3.stop;
                            r1 = r1.bind(r3)();
case 33:
                            r1 = _closure2_slot2;
                            r0 = true;
                            r1[r2] = r0;
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r0 = r1.bind(r2)(r0);
                    r0 = undefined;
                    return r0;
                };
                r0['stop'] = r2;
                r2 = function() { // Original name: reset, environment: r1
                    r2 = _closure2_slot0;
                    r1 = r2.forEach;
                    r0 = function(a0, a1) { // Environment: r0
                        r1 = a0;
                        r0 = r1.reset;
                        r0 = r0.bind(r1)();
                        r3 = _closure2_slot2;
                        r2 = false;
                        r0 = a1;
                        r3[r0] = r2;
                        r0 = 0;
                        _closure2_slot1 = r0;
                        r0 = undefined;
                        return r0;
                    };
                    r0 = r1.bind(r2)(r0);
                    r0 = undefined;
                    return r0;
                };
                r0['reset'] = r2;
                r2 = function() { // Original name: _startNativeLoop, environment: r1
                    r0 = global;
                    r2 = r0.Error;
                    r0 = r2.prototype;
                    r1 = Object.create(r0, {constructor: {value: r2}});
                    r3 = 'Loops run using the native driver cannot contain Animated.parallel animations';
                    r4 = r1;
                    r0 = new r4[r2](r3, r2);
                    r0 = r0 instanceof Object ? r0 : r1;
                    throw r0;
                };
                r0['_startNativeLoop'] = r2;
                r2 = function() { // Original name: _isUsingNativeDriver, environment: r1
                    r0 = false;
                    return r0;
                };
                r0['_isUsingNativeDriver'] = r2;
                var _closure2_slot4 = r0;
                return r0;
            }
        };
        var _closure1_slot22 = r7;
        r9 = function(a0) { // Original name: delay, environment: r6
            r3 = _closure1_slot19;
            r0 = _closure1_slot14;
            r2 = r0.default;
            r0 = r2.prototype;
            r1 = Object.create(r0, {constructor: {value: r2}});
            r5 = 0;
            r6 = r1;
            r0 = new r6[r2](r5, r4);
            r2 = r0 instanceof Object ? r0 : r1;
            r1 = {'toValue': 0, 'delay': null, 'duration': 0, 'useNativeDriver': false};
            r0 = a0;
            r1['delay'] = r0;
            r0 = undefined;
            r0 = r3.bind(r0)(r2, r1);
            return r0;
        };
        var _closure1_slot23 = r9;
        r1 = {};
        r17 = r17.default;
        r1['Value'] = r17;
        r16 = r16.default;
        r1['ValueXY'] = r16;
        r15 = r15.default;
        r1['Color'] = r15;
        r14 = r14.default;
        r1['Interpolation'] = r14;
        r13 = r13.default;
        r1['Node'] = r13;
        r1['decay'] = r12;
        r1['timing'] = r11;
        r1['spring'] = r10;
        r10 = function(a0, a1) { // Original name: add, environment: r6
            r0 = _closure1_slot5;
            r3 = r0.default;
            r0 = r3.prototype;
            r1 = Object.create(r0, {constructor: {value: r3}});
            r5 = a0;
            r4 = a1;
            r6 = r1;
            r0 = new r6[r3](r5, r4, r3);
            r0 = r0 instanceof Object ? r0 : r1;
            return r0;
        };
        r1['add'] = r10;
        r10 = function(a0, a1) { // Original name: subtract, environment: r6
            r0 = _closure1_slot12;
            r3 = r0.default;
            r0 = r3.prototype;
            r1 = Object.create(r0, {constructor: {value: r3}});
            r5 = a0;
            r4 = a1;
            r6 = r1;
            r0 = new r6[r3](r5, r4, r3);
            r0 = r0 instanceof Object ? r0 : r1;
            return r0;
        };
        r1['subtract'] = r10;
        r10 = function(a0, a1) { // Original name: divide, environment: r6
            r0 = _closure1_slot8;
            r3 = r0.default;
            r0 = r3.prototype;
            r1 = Object.create(r0, {constructor: {value: r3}});
            r5 = a0;
            r4 = a1;
            r6 = r1;
            r0 = new r6[r3](r5, r4, r3);
            r0 = r0 instanceof Object ? r0 : r1;
            return r0;
        };
        r1['divide'] = r10;
        r10 = function(a0, a1) { // Original name: multiply, environment: r6
            r0 = _closure1_slot10;
            r3 = r0.default;
            r0 = r3.prototype;
            r1 = Object.create(r0, {constructor: {value: r3}});
            r5 = a0;
            r4 = a1;
            r6 = r1;
            r0 = new r6[r3](r5, r4, r3);
            r0 = r0 instanceof Object ? r0 : r1;
            return r0;
        };
        r1['multiply'] = r10;
        r10 = function(a0, a1) { // Original name: modulo, environment: r6
            r0 = _closure1_slot9;
            r3 = r0.default;
            r0 = r3.prototype;
            r1 = Object.create(r0, {constructor: {value: r3}});
            r5 = a0;
            r4 = a1;
            r6 = r1;
            r0 = new r6[r3](r5, r4, r3);
            r0 = r0 instanceof Object ? r0 : r1;
            return r0;
        };
        r1['modulo'] = r10;
        r10 = function(a0, a1, a2) { // Original name: diffClamp, environment: r6
            r0 = _closure1_slot7;
            r4 = r0.default;
            r0 = r4.prototype;
            r1 = Object.create(r0, {constructor: {value: r4}});
            r7 = a0;
            r6 = a1;
            r5 = a2;
            r8 = r1;
            r0 = new r8[r4](r7, r6, r5, r4);
            r0 = r0 instanceof Object ? r0 : r1;
            return r0;
        };
        r1['diffClamp'] = r10;
        r1['delay'] = r9;
        r1['sequence'] = r8;
        r1['parallel'] = r7;
        r7 = function(a0, a1) { // Original name: stagger, environment: r6
            r3 = a1;
            r1 = a0;
            var _closure2_slot0 = r1;
            r2 = _closure1_slot22;
            r1 = r3.map;
            r0 = function(a0, a1) { // Environment: r0
                r2 = _closure1_slot21;
                r3 = _closure1_slot23;
                r1 = _closure2_slot0;
                r0 = a1;
                r0 = r1 * r0;
                r1 = undefined;
                r3 = r3.bind(r1)(r0);
                r0 = new Array(2);
                r0[0] = r3;
                r3 = a0;
                r0[1] = r3;
                r0 = r2.bind(r1)(r0);
                return r0;
            };
            r1 = r1.bind(r3)(r0);
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            return r0;
        };
        r1['stagger'] = r7;
        r7 = function(a0) { // Original name: loop, environment: r6
            _fun3503: for(var _fun3503_ip = 0; ; ) switch(_fun3503_ip) {
case 0:
                r3 = undefined;
                r4 = undefined;
                r0 = a0;
                var _closure2_slot0 = r0;
                r0 = arguments.length;
                r2 = 1;
                if(!(r0 > r2)) { _fun3503_ip = 31; continue _fun3503 }
case 23:
                r0 = arguments[r2];
                if(!(r0 === r3)) { _fun3503_ip = 35; continue _fun3503 }
case 31:
                r0 = {};
                _fun3503_ip = 39; continue _fun3503;
case 35:
                r0 = arguments[r2];
case 39:
                r4 = r0.iterations;
                r2 = -1;
                if(!(r4 !== r3)) { _fun3503_ip = 58; continue _fun3503 }
case 55:
                r2 = r4;
case 58:
                var _closure2_slot1 = r2;
                r2 = r0.resetBeforeIteration;
                r0 = true;
                if(!(r2 !== r3)) { _fun3503_ip = 77; continue _fun3503 }
case 74:
                r0 = r2;
case 77:
                var _closure2_slot2 = r0;
                r0 = false;
                var _closure2_slot3 = r0;
                r0 = 0;
                var _closure2_slot4 = r0;
                r0 = {};
                r2 = function(a0) { // Original name: start, environment: r1
                    _fun3504: for(var _fun3504_ip = 0; ; ) switch(_fun3504_ip) {
case 0:
                        r2 = a0;
                        var _closure3_slot0 = r2;
                        r3 = function() { // Original name: restart, environment: r0
                            _fun3505: for(var _fun3505_ip = 0; ; ) switch(_fun3505_ip) {
case 0:
                                r0 = undefined;
                                r3 = undefined;
                                r2 = arguments.length;
                                r1 = 0;
                                if(!(r2 > r1)) { _fun3505_ip = 21; continue _fun3505 }
case 13:
                                r2 = arguments[r1];
                                if(!(r2 === r0)) { _fun3505_ip = 32; continue _fun3505 }
case 21:
                                r2 = {};
                                r4 = true;
                                r2['finished'] = r4;
                                _fun3505_ip = 36; continue _fun3505;
case 32:
                                r2 = arguments[r1];
case 36:
                                r3 = _closure2_slot3;
                                if(r3) { _fun3505_ip = 140; continue _fun3505 }
case 46:
                                r4 = _closure2_slot4;
                                r3 = _closure2_slot1;
                                if(!(r4 !== r3)) { _fun3505_ip = 140; continue _fun3505 }
case 58:
                                r4 = r2.finished;
                                r3 = false;
                                if(!(r4 !== r3)) { _fun3505_ip = 140; continue _fun3505 }
case 70:
                                r3 = _closure2_slot4;
                                r3 = r3 + 1;
                                _closure2_slot4 = r3;
                                r3 = _closure2_slot2;
                                if(!r3) { _fun3505_ip = 102; continue _fun3505 }
case 88:
                                r4 = _closure2_slot0;
                                r3 = r4.reset;
                                r3 = r3.bind(r4)();
case 102:
                                r5 = _closure2_slot0;
                                r4 = r5.start;
                                r3 = _closure3_slot1;
                                r6 = _closure2_slot1;
                                r1 = -1;
                                r1 = r6 === r1;
                                r1 = r4.bind(r5)(r3, r1);
                                _fun3505_ip = 159; continue _fun3505;
case 140:
                                r3 = _closure3_slot0;
                                if(!r3) { _fun3505_ip = 159; continue _fun3505 }
case 150:
                                r1 = _closure3_slot0;
                                r1 = r1.bind(r0)(r2);
case 159:
                                return r0;
                            }
                        };
                        var _closure3_slot1 = r3;
                        r1 = _closure2_slot0;
                        if(!r1) { _fun3504_ip = 84; continue _fun3504 }
case 28:
                        r4 = _closure2_slot1;
                        r1 = 0;
                        if(!(r4 !== r1)) { _fun3504_ip = 84; continue _fun3504 }
case 38:
                        r4 = _closure2_slot0;
                        r1 = r4._isUsingNativeDriver;
                        r1 = r1.bind(r4)();
                        if(r1) { _fun3504_ip = 63; continue _fun3504 }
case 55:
                        r1 = undefined;
                        r1 = r3.bind(r1)();
                        _fun3504_ip = 103; continue _fun3504;
case 63:
                        r3 = _closure2_slot0;
                        r1 = r3._startNativeLoop;
                        r0 = _closure2_slot1;
                        r0 = r1.bind(r3)(r0);
                        _fun3504_ip = 103; continue _fun3504;
case 84:
                        if(!r2) { _fun3504_ip = 103; continue _fun3504 }
case 87:
                        r1 = {};
                        r0 = true;
                        r1['finished'] = r0;
                        r0 = undefined;
                        r0 = r2.bind(r0)(r1);
case 103:
                        r0 = undefined;
                        return r0;
                    }
                };
                r0['start'] = r2;
                r2 = function() { // Original name: stop, environment: r1
                    r1 = true;
                    _closure2_slot3 = r1;
                    r1 = _closure2_slot0;
                    r0 = r1.stop;
                    r0 = r0.bind(r1)();
                    r0 = undefined;
                    return r0;
                };
                r0['stop'] = r2;
                r2 = function() { // Original name: reset, environment: r1
                    r1 = 0;
                    _closure2_slot4 = r1;
                    r1 = false;
                    _closure2_slot3 = r1;
                    r1 = _closure2_slot0;
                    r0 = r1.reset;
                    r0 = r0.bind(r1)();
                    r0 = undefined;
                    return r0;
                };
                r0['reset'] = r2;
                r2 = function() { // Original name: _startNativeLoop, environment: r1
                    r0 = global;
                    r2 = r0.Error;
                    r0 = r2.prototype;
                    r1 = Object.create(r0, {constructor: {value: r2}});
                    r3 = 'Loops run using the native driver cannot contain Animated.loop animations';
                    r4 = r1;
                    r0 = new r4[r2](r3, r2);
                    r0 = r0 instanceof Object ? r0 : r1;
                    throw r0;
                };
                r0['_startNativeLoop'] = r2;
                r1 = function() { // Original name: _isUsingNativeDriver, environment: r1
                    r1 = _closure2_slot0;
                    r0 = r1._isUsingNativeDriver;
                    r0 = r0.bind(r1)();
                    return r0;
                };
                r0['_isUsingNativeDriver'] = r1;
                return r0;
            }
        };
        r1['loop'] = r7;
        r7 = function(a0, a1) { // Original name: event, environment: r6
            _fun3510: for(var _fun3510_ip = 0; ; ) switch(_fun3510_ip) {
case 0:
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 17;
                r1 = r1[r0];
                r0 = undefined;
                r0 = r2.bind(r0)(r1);
                r3 = r0.AnimatedEvent;
                r0 = r3.prototype;
                r1 = Object.create(r0, {constructor: {value: r3}});
                r5 = a0;
                r4 = a1;
                r6 = r1;
                r0 = new r6[r3](r5, r4, r3);
                r0 = r0 instanceof Object ? r0 : r1;
                r1 = r0.__isNative;
                if(r1) { _fun3510_ip = 77; continue _fun3510 }
case 65:
                r1 = r0.__getHandler;
                r1 = r1.bind(r0)();
                return r1;
case 77:
                return r0;
            }
        };
        r1['event'] = r7;
        r3 = r3.default;
        r1['createAnimatedComponent'] = r3;
        r3 = 17;
        r7 = r5[r3];
        r7 = r4.bind(r0)(r7);
        r7 = r7.attachNativeEvent;
        r1['attachNativeEvent'] = r7;
        r7 = function(a0, a1) { // Original name: forkEvent, environment: r6
            _fun3449: for(var _fun3449_ip = 0; ; ) switch(_fun3449_ip) {
case 0:
                r0 = a0;
                r2 = a1;
                var _closure2_slot0 = r0;
                var _closure2_slot1 = r2;
                if(r0) { _fun3449_ip = 21; continue _fun3449 }
case 19:
                return r2;
case 21:
                r5 = _closure1_slot0;
                r4 = _closure1_slot1;
                r3 = 17;
                r4 = r4[r3];
                r3 = undefined;
                r3 = r5.bind(r3)(r4);
                r3 = r3.AnimatedEvent;
                r3 = r0 instanceof r3;
                if(r3) { _fun3449_ip = 66; continue _fun3449 }
case 59:
                r1 = function() { // Environment: r1
                    _fun3450: for(var _fun3450_ip = 0; ; ) switch(_fun3450_ip) {
case 0:
                        r0 = undefined;
                        r1 = undefined;
                        r3 = _closure2_slot0;
                        r4 = typeof r3;
                        r3 = 'function';
                        if(!(r4 === r3)) { _fun3450_ip = 42; continue _fun3450 }
case 22:
                        r5 = _closure2_slot0;
                        r4 = r5.apply;
                        r1 = arguments;
                        r3 = r1;
                        r3 = r4.bind(r5)(r0, r3);
case 42:
                        r3 = _closure2_slot1;
                        r2 = r3.apply;
                        r1 = arguments;
                        r1 = r2.bind(r3)(r0, r1);
                        return r0;
                    }
                };
                return r1;
case 66:
                r1 = r0.__addListener;
                r1 = r1.bind(r0)(r2);
                return r0;
            }
        };
        r1['forkEvent'] = r7;
        r6 = function(a0, a1) { // Original name: unforkEvent, environment: r6
            _fun3451: for(var _fun3451_ip = 0; ; ) switch(_fun3451_ip) {
case 0:
                r2 = a0;
                if(!r2) { _fun3451_ip = 58; continue _fun3451 }
case 6:
                r3 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 17;
                r1 = r1[r0];
                r0 = undefined;
                r0 = r3.bind(r0)(r1);
                r0 = r0.AnimatedEvent;
                r0 = r2 instanceof r0;
                if(!r0) { _fun3451_ip = 58; continue _fun3451 }
case 44:
                r1 = r2.__removeListener;
                r0 = a1;
                r0 = r1.bind(r2)(r0);
case 58:
                r0 = undefined;
                return r0;
            }
        };
        r1['unforkEvent'] = r6;
        r3 = r5[r3];
        r3 = r4.bind(r0)(r3);
        r3 = r3.AnimatedEvent;
        r1['Event'] = r3;
        r2['default'] = r1;
        return r0;
    };
    r6 = 301;
    r5 = [1, 302, 325, 328, 329, 335, 326, 336, 337, 321, 338, 339, 311, 340, 341, 317, 324, 316];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r5 = a1;
        r2 = a5;
        r6 = a6;
        r0 = a0;
        var _closure1_slot0 = r0;
        r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r1
            _fun3512: for(var _fun3512_ip = 0; ; ) switch(_fun3512_ip) {
case 0:
                r3 = a0;
                r5 = a2;
                r0 = _closure1_slot4;
                r1 = r0.default;
                r2 = undefined;
                r0 = a1;
                r8 = r1.bind(r2)(r0);
                r0 = _closure1_slot3;
                r1 = r0.default;
                r0 = _closure1_slot8;
                r0 = r0.bind(r2)();
                if(r0) { _fun3512_ip = 61; continue _fun3512 }
case 48:
                r0 = r8.apply;
                r0 = r0.bind(r8)(r3, r5);
                _fun3512_ip = 107; continue _fun3512;
case 61:
                r6 = global;
                r7 = r6.Reflect;
                r6 = r7.construct;
                if(r5) { _fun3512_ip = 81; continue _fun3512 }
case 77:
                r5 = new Array(0);
case 81:
                r4 = _closure1_slot4;
                r4 = r4.default;
                r4 = r4.bind(r2)(r3);
                r4 = r4.constructor;
                r0 = r6.bind(r7)(r8, r5, r4);
case 107:
                r0 = r1.bind(r2)(r3, r0);
                return r0;
            }
        };
        var _closure1_slot7 = r0;
        r0 = function() { // Original name: _isNativeReflectConstruct, environment: r1
            _fun3513: for(var _fun3513_ip = 0; ; ) switch(_fun3513_ip) {
case 0:
case 2: // try_start_0
                r1 = global;
                r2 = r1.Boolean;
                r2 = r2.prototype;
                r3 = r2.valueOf;
                r2 = r3.call;
                r7 = r1.Reflect;
                r6 = r7.construct;
                r5 = r1.Boolean;
                r4 = new Array(0);
                r1 = function() { // Environment: r0
                    r0 = undefined;
                    return r0;
                };
                r1 = r6.bind(r7)(r5, r4, r1);
                r1 = r2.bind(r3)(r1);
                r1 = !r1;
                var _closure2_slot0 = r1;
case 70: // try_end0
                _fun3513_ip = 74; continue _fun3513;
case 72: // catch_target0
                CatchBlockStart(arg_register=1);
case 74:
                r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                    r0 = _closure2_slot0;
                    r0 = !r0;
                    r0 = !r0;
                    return r0;
                };
                _closure1_slot8 = r1;
                r0 = undefined;
                r0 = r1.bind(r0)();
                return r0;
            }
        };
        var _closure1_slot8 = r0;
        r0 = function(a0, a1, a2, a3) { // Original name: _superPropGet, environment: r1
            _fun3516: for(var _fun3516_ip = 0; ; ) switch(_fun3516_ip) {
case 0:
                r4 = a0;
                r6 = a2;
                var _closure2_slot0 = r6;
                r2 = _closure1_slot5;
                r5 = r2.default;
                r0 = _closure1_slot4;
                r3 = r0.default;
                r0 = 1;
                r2 = 3;
                r7 = r0 & r2;
                r0 = r4;
                if(!r7) { _fun3516_ip = 54; continue _fun3516 }
case 49:
                r0 = r4.prototype;
case 54:
                r4 = undefined;
                r3 = r3.bind(r4)(r0);
                r0 = a1;
                r4 = r5.bind(r4)(r3, r0, r6);
                var _closure2_slot1 = r4;
                r0 = 2;
                r2 = r0 & r2;
                r0 = r4;
                if(!r2) { _fun3516_ip = 107; continue _fun3516 }
case 88:
                r3 = 'function';
                r2 = typeof r4;
                r0 = r4;
                if(!(r3 === r2)) { _fun3516_ip = 107; continue _fun3516 }
case 102:
                r0 = function(a0) { // Environment: r1
                    r3 = _closure2_slot1;
                    r2 = r3.apply;
                    r1 = _closure2_slot0;
                    r0 = a0;
                    r0 = r2.bind(r3)(r1, r0);
                    return r0;
                };
case 107:
                return r0;
            }
        };
        var _closure1_slot9 = r0;
        r0 = 0;
        r3 = r6[r0];
        r0 = undefined;
        r4 = r5.bind(r0)(r3);
        r3 = global;
        r9 = r3.Object;
        r8 = r9.defineProperty;
        r7 = {};
        r3 = true;
        r7['value'] = r3;
        r3 = '__esModule';
        r3 = r8.bind(r9)(r2, r3, r7);
        r2['default'] = r0;
        r3 = 1;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot1 = r3;
        r3 = 2;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot2 = r3;
        r3 = 3;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot3 = r3;
        r3 = 4;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot4 = r3;
        r3 = 5;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot5 = r3;
        r3 = 6;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot6 = r3;
        r3 = 7;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        r3 = r3.default;
        r1 = function(a0) { // Environment: r1
            r3 = function(a0) { // Original name: DecayAnimation, environment: r5
                _fun3519: for(var _fun3519_ip = 0; ; ) switch(_fun3519_ip) {
case 0:
                    r1 = a0;
                    r5 = this;
                    r2 = _closure1_slot1;
                    r2 = r2.default;
                    r4 = _closure2_slot0;
                    r3 = undefined;
                    r2 = r2.bind(r3)(r5, r4);
                    r2 = _closure1_slot7;
                    r0 = new Array(1);
                    r0[0] = r1;
                    r0 = r2.bind(r3)(r5, r4, r0);
                    r3 = r1.deceleration;
                    r2 = null;
                    r4 = r3 != r2;
                    r2 = 0.998;
                    if(!r4) { _fun3519_ip = 79; continue _fun3519 }
case 76:
                    r2 = r3;
case 79:
                    r0['_deceleration'] = r2;
                    r2 = r1.velocity;
                    r0['_velocity'] = r2;
                    r1 = r1.platformConfig;
                    r0['_platformConfig'] = r1;
                    return r0;
                }
            };
            var _closure2_slot0 = r3;
            r1 = _closure1_slot6;
            r4 = r1.default;
            r2 = undefined;
            r1 = a0;
            r1 = r4.bind(r2)(r3, r1);
            r0 = _closure1_slot2;
            r1 = r0.default;
            r4 = {};
            r0 = '__getNativeAnimationConfig';
            r4['key'] = r0;
            r0 = function() { // Original name: __getNativeAnimationConfig, environment: r5
                r2 = this;
                r0 = {};
                r1 = 'decay';
                r0['type'] = r1;
                r1 = r2._deceleration;
                r0['deceleration'] = r1;
                r1 = r2._velocity;
                r0['velocity'] = r1;
                r1 = r2.__iterations;
                r0['iterations'] = r1;
                r1 = r2._platformConfig;
                r0['platformConfig'] = r1;
                r1 = r2.__getDebugID;
                r1 = r1.bind(r2)();
                r0['debugID'] = r1;
                return r0;
            };
            r4['value'] = r0;
            r0 = new Array(4);
            r0[0] = r4;
            r4 = {};
            r6 = 'start';
            r4['key'] = r6;
            r6 = function(a0, a1, a2, a3, a4) { // Original name: start, environment: r5
                _fun3521: for(var _fun3521_ip = 0; ; ) switch(_fun3521_ip) {
case 0:
                    r4 = a0;
                    r3 = a1;
                    r5 = a4;
                    r2 = this;
                    var _closure3_slot0 = r2;
                    r9 = _closure1_slot9;
                    r13 = _closure2_slot0;
                    r0 = undefined;
                    r12 = 'start';
                    r10 = 3;
                    r14 = undefined;
                    r11 = r2;
                    r7 = r14[r9](r13, r12, r11, r10, r9);
                    r6 = new Array(5);
                    r6[0] = r4;
                    r6[1] = r3;
                    r8 = a2;
                    r6[2] = r8;
                    r8 = a3;
                    r6[3] = r8;
                    r6[4] = r5;
                    r6 = r7.bind(r0)(r6);
                    r2['_lastValue'] = r4;
                    r2['_fromValue'] = r4;
                    r2['_onUpdate'] = r3;
                    r3 = global;
                    r6 = r3.Date;
                    r4 = r6.now;
                    r4 = r4.bind(r6)();
                    r2['_startTime'] = r4;
                    r4 = r2.__startAnimationIfNative;
                    r4 = r4.bind(r2)(r5);
                    if(r4) { _fun3521_ip = 161; continue _fun3521 }
case 139:
                    r3 = r3.requestAnimationFrame;
                    r1 = function() { // Environment: r1
                        r1 = _closure3_slot0;
                        r0 = r1.onUpdate;
                        r0 = r0.bind(r1)();
                        return r0;
                    };
                    r1 = r3.bind(r0)(r1);
                    r2['_animationFrame'] = r1;
case 161:
                    return r0;
                }
            };
            r4['value'] = r6;
            r0[1] = r4;
            r4 = {};
            r6 = 'onUpdate';
            r4['key'] = r6;
            r6 = function() { // Original name: onUpdate, environment: r5
                _fun3523: for(var _fun3523_ip = 0; ; ) switch(_fun3523_ip) {
case 0:
                    r2 = this;
                    r0 = global;
                    r3 = r0.Date;
                    r1 = r3.now;
                    r9 = r1.bind(r3)();
                    r3 = r2._fromValue;
                    r4 = r2._velocity;
                    r1 = r2._deceleration;
                    r5 = 1;
                    r1 = r5 - r1;
                    r4 = r4 / r1;
                    r7 = r0.Math;
                    r6 = r7.exp;
                    r1 = r2._deceleration;
                    r1 = r5 - r1;
                    r8 = r2._startTime;
                    r8 = r9 - r8;
                    r1 = -r1;
                    r1 = r1 * r8;
                    r1 = r6.bind(r7)(r1);
                    r1 = r5 - r1;
                    r1 = r4 * r1;
                    r1 = r3 + r1;
                    r3 = r2._onUpdate;
                    r3 = r3.bind(r2)(r1);
                    r5 = r0.Math;
                    r4 = r5.abs;
                    r3 = r2._lastValue;
                    r3 = r3 - r1;
                    r4 = r4.bind(r5)(r3);
                    r3 = 0.1;
                    if(!(!(r4 < r3))) { _fun3523_ip = 210; continue _fun3523 }
case 156:
                    r2['_lastValue'] = r1;
                    r1 = r2.__active;
                    if(!r1) { _fun3523_ip = 206; continue _fun3523 }
case 171:
                    r3 = r0.requestAnimationFrame;
                    r1 = r2.onUpdate;
                    r0 = r1.bind;
                    r1 = r0.bind(r1)(r2);
                    r0 = undefined;
                    r0 = r3.bind(r0)(r1);
                    r2['_animationFrame'] = r0;
case 206:
                    r0 = undefined;
                    return r0;
case 210:
                    r1 = r2.__notifyAnimationEnd;
                    r0 = {};
                    r3 = true;
                    r0['finished'] = r3;
                    r0 = r1.bind(r2)(r0);
                    r0 = undefined;
                    return r0;
                }
            };
            r4['value'] = r6;
            r0[2] = r4;
            r4 = {};
            r6 = 'stop';
            r4['key'] = r6;
            r5 = function() { // Original name: stop, environment: r5
                _fun3524: for(var _fun3524_ip = 0; ; ) switch(_fun3524_ip) {
case 0:
                    r3 = this;
                    r6 = _closure1_slot9;
                    r10 = _closure2_slot0;
                    r0 = undefined;
                    r9 = 'stop';
                    r7 = 3;
                    r11 = undefined;
                    r8 = r3;
                    r4 = r11[r6](r10, r9, r8, r7, r6);
                    r2 = new Array(0);
                    r2 = r4.bind(r0)(r2);
                    r4 = r3._animationFrame;
                    r2 = null;
                    if(!(r4 != r2)) { _fun3524_ip = 76; continue _fun3524 }
case 55:
                    r4 = _closure1_slot0;
                    r2 = r4.cancelAnimationFrame;
                    r1 = r3._animationFrame;
                    r1 = r2.bind(r4)(r1);
case 76:
                    r2 = r3.__notifyAnimationEnd;
                    r1 = {};
                    r4 = false;
                    r1['finished'] = r4;
                    r1 = r2.bind(r3)(r1);
                    return r0;
                }
            };
            r4['value'] = r5;
            r0[3] = r4;
            r0 = r1.bind(r2)(r3, r0);
            return r0;
        };
        r1 = r1.bind(r0)(r3);
        r2['default'] = r1;
        return r0;
    };
    r6 = 302;
    r5 = [1, 12, 13, 23, 25, 26, 28, 303];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun3525: for(var _fun3525_ip = 0; ; ) switch(_fun3525_ip) {
case 0:
            r7 = a1;
            r2 = a5;
            r8 = a6;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun3526: for(var _fun3526_ip = 0; ; ) switch(_fun3526_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun3526_ip = 104; continue _fun3526 }
case 20:
                    r2 = r1.WeakMap;
                    r3 = r2.prototype;
                    r3 = Object.create(r3, {constructor: {value: r2}});
                    r5 = r3;
                    r2 = new r5[r2](r4);
                    r2 = r2 instanceof Object ? r2 : r3;
                    var _closure2_slot0 = r2;
                    r1 = r1.WeakMap;
                    r2 = r1.prototype;
                    r2 = Object.create(r2, {constructor: {value: r1}});
                    r5 = r2;
                    r1 = new r5[r1](r4);
                    r1 = r1 instanceof Object ? r1 : r2;
                    var _closure2_slot1 = r1;
                    r2 = function(a0) { // Original name: _getRequireWildcardCache, environment: r0
                        _fun3527: for(var _fun3527_ip = 0; ; ) switch(_fun3527_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun3527_ip = 15; continue _fun3527 }
case 9:
                            r0 = _closure2_slot0;
                            _fun3527_ip = 19; continue _fun3527;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot10 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot10 = r0;
            r0 = 0;
            r3 = r8[r0];
            r0 = undefined;
            r6 = r7.bind(r0)(r3);
            r20 = global;
            r9 = r20.Object;
            r5 = r9.defineProperty;
            r4 = {};
            r3 = true;
            r4['value'] = r3;
            r3 = '__esModule';
            r3 = r5.bind(r9)(r2, r3, r4);
            r2['default'] = r0;
            r4 = 1;
            r3 = r8[r4];
            r3 = r7.bind(r0)(r3);
            r3 = r6.bind(r0)(r3);
            var _closure1_slot0 = r3;
            r3 = 2;
            r3 = r8[r3];
            r3 = r7.bind(r0)(r3);
            r3 = r6.bind(r0)(r3);
            var _closure1_slot1 = r3;
            r3 = 3;
            r3 = r8[r3];
            r3 = r7.bind(r0)(r3);
            r3 = r6.bind(r0)(r3);
            var _closure1_slot2 = r3;
            r3 = 4;
            r3 = r8[r3];
            r3 = r7.bind(r0)(r3);
            r3 = r6.bind(r0)(r3);
            var _closure1_slot3 = r3;
            r3 = 5;
            r3 = r8[r3];
            r3 = r7.bind(r0)(r3);
            r3 = r6.bind(r0)(r3);
            r5 = 6;
            r5 = r8[r5];
            r5 = r7.bind(r0)(r5);
            r5 = r6.bind(r0)(r5);
            var _closure1_slot4 = r5;
            r5 = 7;
            r5 = r8[r5];
            r9 = r7.bind(r0)(r5);
            if(!r9) { _fun3525_ip = 219; continue _fun3525 }
case 208:
            r5 = r9.__esModule;
            if(r5) { _fun3525_ip = 477; continue _fun3525 }
case 219:
            r19 = null;
            if(!(r19 !== r9)) { _fun3525_ip = 471; continue _fun3525 }
case 228:
            r10 = typeof r9;
            r5 = 'object';
            if(!(r5 !== r10)) { _fun3525_ip = 250; continue _fun3525 }
case 239:
            r5 = 'function';
            if(!(r5 === r10)) { _fun3525_ip = 471; continue _fun3525 }
case 250:
            r5 = _closure1_slot10;
            r10 = r5.bind(r0)(r0);
            if(!r10) { _fun3525_ip = 278; continue _fun3525 }
case 262:
            r5 = r10.has;
            r5 = r5.bind(r10)(r9);
            if(r5) { _fun3525_ip = 459; continue _fun3525 }
case 278:
            r11 = Object.create(r19);
            r5 = r20.Object;
            r18 = r5.defineProperty;
            if(!r18) { _fun3525_ip = 306; continue _fun3525 }
case 295:
            r5 = r20.Object;
            r18 = r5.getOwnPropertyDescriptor;
case 306:
            r16 = r9;
            r12 = 'default';
            r5 = undefined;
            for(r13 in r16)
case 323:
            {
case 332:
                r24 = r13;
                if(r12 === r24) { _fun3525_ip = 323; continue _fun3525 }
case 339:
                r21 = {};
                r22 = r21.hasOwnProperty;
                r21 = r22.call;
                r21 = r21.bind(r22)(r9, r24);
                if(!r21) { _fun3525_ip = 323; continue _fun3525 }
case 360:
                r21 = null;
                if(!r18) { _fun3525_ip = 382; continue _fun3525 }
case 365:
                r23 = r20.Object;
                r22 = r23.getOwnPropertyDescriptor;
                r21 = r22.bind(r23)(r9, r24);
case 382:
                if(!r21) { _fun3525_ip = 401; continue _fun3525 }
case 385:
                r22 = r21.get;
                if(r22) { _fun3525_ip = 414; continue _fun3525 }
case 393:
                r22 = r21.set;
                if(r22) { _fun3525_ip = 414; continue _fun3525 }
case 401:
                r22 = r9[r24];
                r11[r24] = r22;
                r5 = r21;
                _fun3525_ip = 323; continue _fun3525;
case 414:
                r23 = r20.Object;
                r22 = r23.defineProperty;
                r22 = r22.bind(r23)(r11, r24, r21);
                r5 = r21;
                _fun3525_ip = 323; continue _fun3525;
            }
case 437:
            r11['default'] = r9;
            if(!r10) { _fun3525_ip = 477; continue _fun3525 }
case 446:
            r5 = r10.set;
            r5 = r5.bind(r10)(r9, r11);
            _fun3525_ip = 477; continue _fun3525;
case 459:
            r5 = r10.get;
            r5 = r5.bind(r10)(r9);
            _fun3525_ip = 477; continue _fun3525;
case 471:
            r5 = {};
            r5['default'] = r9;
case 477:
            r5 = 8;
            r5 = r8[r5];
            r5 = r7.bind(r0)(r5);
            r5 = r6.bind(r0)(r5);
            var _closure1_slot5 = r5;
            var _closure1_slot6 = r4;
            r5 = r3.default;
            r4 = 'nativeID';
            r4 = r5.bind(r0)(r4);
            var _closure1_slot7 = r4;
            r5 = r3.default;
            r4 = 'onEnd';
            r4 = r5.bind(r0)(r4);
            var _closure1_slot8 = r4;
            r4 = r3.default;
            r3 = 'useNativeDriver';
            r3 = r4.bind(r0)(r3);
            var _closure1_slot9 = r3;
            r1 = function() { // Environment: r1
                r3 = function(a0) { // Original name: Animation, environment: r4
                    _fun3529: for(var _fun3529_ip = 0; ; ) switch(_fun3529_ip) {
case 0:
                        r3 = a0;
                        r2 = this;
                        r0 = _closure1_slot1;
                        r4 = r0.default;
                        r1 = _closure2_slot0;
                        r0 = undefined;
                        r1 = r4.bind(r0)(r2, r1);
                        r1 = global;
                        r9 = r1.Object;
                        r7 = r9.defineProperty;
                        r5 = _closure1_slot7;
                        r4 = {};
                        r8 = true;
                        r4['writable'] = r8;
                        r4['value'] = r0;
                        r4 = r7.bind(r9)(r2, r5, r4);
                        r9 = r1.Object;
                        r7 = r9.defineProperty;
                        r5 = _closure1_slot8;
                        r4 = {};
                        r4['writable'] = r8;
                        r4['value'] = r0;
                        r4 = r7.bind(r9)(r2, r5, r4);
                        r7 = r1.Object;
                        r4 = r7.defineProperty;
                        r5 = _closure1_slot9;
                        r1 = {};
                        r1['writable'] = r8;
                        r1['value'] = r0;
                        r1 = r4.bind(r7)(r2, r5, r1);
                        r1 = _closure1_slot3;
                        r1 = r1.default;
                        r4 = r1.bind(r0)(r2, r5);
                        r1 = _closure1_slot4;
                        r7 = r1.default;
                        r1 = r7.shouldUseNativeDriver;
                        r1 = r1.bind(r7)(r3);
                        r4[r5] = r1;
                        r1 = false;
                        r2['__active'] = r1;
                        r4 = r3.isInteraction;
                        r1 = null;
                        if(!(r4 == r1)) { _fun3529_ip = 217; continue _fun3529 }
case 191:
                        r5 = _closure1_slot3;
                        r5 = r5.default;
                        r6 = _closure1_slot9;
                        r5 = r5.bind(r0)(r2, r6);
                        r5 = r5[r6];
                        r4 = !r5;
case 217:
                        r2['__isInteraction'] = r4;
                        r4 = r3.isLooping;
                        r2['__isLooping'] = r4;
                        r3 = r3.iterations;
                        r4 = r3 != r1;
                        r1 = 1;
                        if(!r4) { _fun3529_ip = 254; continue _fun3529 }
case 251:
                        r1 = r3;
case 254:
                        r2['__iterations'] = r1;
                        return r0;
                    }
                };
                var _closure2_slot0 = r3;
                r0 = _closure1_slot2;
                r2 = r0.default;
                r0 = {};
                r1 = 'start';
                r0['key'] = r1;
                r1 = function(a0, a1, a2, a3, a4) { // Original name: start, environment: r4
                    _fun3530: for(var _fun3530_ip = 0; ; ) switch(_fun3530_ip) {
case 0:
                        r2 = this;
                        r0 = _closure1_slot3;
                        r1 = r0.default;
                        r4 = _closure1_slot9;
                        r0 = undefined;
                        r1 = r1.bind(r0)(r2, r4);
                        r1 = r1[r4];
                        if(r1) { _fun3530_ip = 81; continue _fun3530 }
case 33:
                        r1 = a4;
                        r4 = r1.__isNative;
                        r1 = true;
                        if(!(r4 === r1)) { _fun3530_ip = 81; continue _fun3530 }
case 47:
                        r1 = global;
                        r5 = r1.Error;
                        r1 = r5.prototype;
                        r4 = Object.create(r1, {constructor: {value: r5}});
                        r7 = 'Attempting to run JS driven animation on animated node that has been moved to "native" earlier by starting an animation with `useNativeDriver: true`';
                        r8 = r4;
                        r1 = new r8[r5](r7, r6);
                        r1 = r1 instanceof Object ? r1 : r4;
                        throw r1;
case 81:
                        r1 = _closure1_slot3;
                        r1 = r1.default;
                        r4 = _closure1_slot8;
                        r3 = r1.bind(r0)(r2, r4);
                        r1 = a2;
                        r3[r4] = r1;
                        r1 = true;
                        r2['__active'] = r1;
                        return r0;
                    }
                };
                r0['value'] = r1;
                r1 = new Array(7);
                r1[0] = r0;
                r0 = {};
                r5 = 'stop';
                r0['key'] = r5;
                r5 = function() { // Original name: stop, environment: r4
                    _fun3531: for(var _fun3531_ip = 0; ; ) switch(_fun3531_ip) {
case 0:
                        r4 = this;
                        r0 = undefined;
                        r3 = undefined;
                        r1 = undefined;
                        r5 = _closure1_slot3;
                        r5 = r5.default;
                        r6 = _closure1_slot7;
                        r5 = r5.bind(r0)(r4, r6);
                        r6 = r5[r6];
                        r5 = null;
                        if(!(r6 != r5)) { _fun3531_ip = 176; continue _fun3531 }
case 43:
                        r5 = _closure1_slot3;
                        r5 = r5.default;
                        r6 = _closure1_slot7;
                        r5 = r5.bind(r0)(r4, r6);
                        r8 = r5[r6];
                        r3 = r8;
                        r5 = global;
                        r5 = r5.HermesInternal;
                        r7 = r5.concat;
                        r6 = '';
                        r5 = ':stopAnimation';
                        r1 = r7.bind(r6)(r8, r5);
case 96: // try_start_0
                        r5 = _closure1_slot4;
                        r6 = r5.default;
                        r8 = r6.API;
                        r7 = r8.setWaitingForIdentifier;
                        r6 = r1;
                        r6 = r7.bind(r8)(r6);
                        r5 = r5.default;
                        r6 = r5.API;
                        r5 = r6.stopAnimation;
                        r3 = r5.bind(r6)(r3);
case 147: // try_end0
                        r3 = _closure1_slot4;
                        r3 = r3.default;
                        r6 = r3.API;
                        r5 = r6.unsetWaitingForIdentifier;
                        r3 = r1;
                        r3 = r5.bind(r6)(r3);
case 176:
                        r3 = false;
                        r4['__active'] = r3;
                        return r0;
case 186: // catch_target0
                        CatchBlockStart(arg_register=0);
                        r2 = _closure1_slot4;
                        r2 = r2.default;
                        r3 = r2.API;
                        r2 = r3.unsetWaitingForIdentifier;
                        r1 = r2.bind(r3)(r1);
                        throw r0;
                    }
                };
                r0['value'] = r5;
                r1[1] = r0;
                r0 = {};
                r5 = '__getNativeAnimationConfig';
                r0['key'] = r5;
                r5 = function() { // Original name: __getNativeAnimationConfig, environment: r4
                    r0 = global;
                    r2 = r0.Error;
                    r0 = r2.prototype;
                    r1 = Object.create(r0, {constructor: {value: r2}});
                    r3 = 'This animation type cannot be offloaded to native';
                    r4 = r1;
                    r0 = new r4[r2](r3, r2);
                    r0 = r0 instanceof Object ? r0 : r1;
                    throw r0;
                };
                r0['value'] = r5;
                r1[2] = r0;
                r0 = {};
                r5 = '__findAnimatedPropsNodes';
                r0['key'] = r5;
                r5 = function(a0) { // Original name: __findAnimatedPropsNodes, environment: r4
                    _fun3533: for(var _fun3533_ip = 0; ; ) switch(_fun3533_ip) {
case 0:
                        r2 = a0;
                        r6 = this;
                        r0 = new Array(0);
                        r1 = _closure1_slot5;
                        r1 = r1.default;
                        r1 = r2 instanceof r1;
                        if(r1) { _fun3533_ip = 115; continue _fun3533 }
case 28:
                        r1 = r2.__getChildren;
                        r1 = r1.bind(r2)();
                        r4 = r1;
                        r3 = r4[Symbol.iterator];
                        r4 = r3().next;
                        r1 = undefined;
case 46:
                        r12 = r4().value;
                        r7 = r3;
                        if(!(r7 !== r1)) { _fun3533_ip = 110; continue _fun3533 }
case 57: // try_start_0
                        r10 = r0;
                        r9 = r10.push;
                        r8 = r9.apply;
                        r7 = _closure1_slot0;
                        r11 = r7.default;
                        r7 = r6.__findAnimatedPropsNodes;
                        r7 = r7.bind(r6)(r12);
                        r7 = r11.bind(r1)(r7);
                        r7 = r8.bind(r9)(r10, r7);
case 101: // try_end0
                        _fun3533_ip = 46; continue _fun3533;
case 103: // catch_target0
                        CatchBlockStart(arg_register=1);
                        r3.return();
                        throw r1;
case 110:
                        r1 = r0;
                        return r1;
case 115:
                        r1 = r0.push;
                        r1 = r1.bind(r0)(r2);
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[3] = r0;
                r0 = {};
                r5 = '__startAnimationIfNative';
                r0['key'] = r5;
                r5 = function(a0) { // Original name: __startAnimationIfNative, environment: r4
                    _fun3534: for(var _fun3534_ip = 0; ; ) switch(_fun3534_ip) {
case 0:
                        r2 = a0;
                        r10 = this;
                        r3 = r2;
                        var _closure3_slot0 = r2;
                        r9 = undefined;
                        r1 = undefined;
                        var _closure3_slot1 = r10;
                        r4 = _closure1_slot3;
                        r4 = r4.default;
                        r5 = _closure1_slot9;
                        r4 = r4.bind(r9)(r10, r5);
                        r4 = r4[r5];
                        if(r4) { _fun3534_ip = 55; continue _fun3534 }
case 51:
                        r4 = false;
                        return r4;
case 55:
                        r7 = _closure1_slot6;
                        r4 = global;
                        r4 = r4.HermesInternal;
                        r6 = r4.concat;
                        r5 = '';
                        r4 = ':startAnimation';
                        r6 = r6.bind(r5)(r7, r4);
                        r1 = r6;
                        r5 = _closure1_slot6;
                        r4 = 1;
                        r4 = r5 + r4;
                        _closure1_slot6 = r4;
                        r4 = _closure1_slot4;
                        r4 = r4.default;
                        r5 = r4.API;
                        r4 = r5.setWaitingForIdentifier;
                        r4 = r4.bind(r5)(r6);
case 130: // try_start_0 // try_start_1
                        r4 = r10.__getNativeAnimationConfig;
                        r7 = r4.bind(r10)();
                        r8 = r3;
                        r4 = r8.__makeNative;
                        r3 = r7.platformConfig;
                        r3 = r4.bind(r8)(r3);
                        r3 = _closure1_slot3;
                        r5 = r3.default;
                        r4 = _closure1_slot7;
                        r11 = r5.bind(r9)(r10, r4);
                        r5 = _closure1_slot4;
                        r12 = r5.default;
                        r6 = r12.generateNewAnimationId;
                        r6 = r6.bind(r12)();
                        r11[r4] = r6;
                        r5 = r5.default;
                        r6 = r5.API;
                        r5 = r6.startAnimatingNode;
                        r3 = r3.default;
                        r3 = r3.bind(r9)(r10, r4);
                        r16 = r3[r4];
                        r3 = r8.__getNativeTag;
                        r15 = r3.bind(r8)();
                        r13 = function(a0) { // Environment: r0
                            _fun3535: for(var _fun3535_ip = 0; ; ) switch(_fun3535_ip) {
case 0:
                                r1 = a0;
                                r3 = _closure3_slot1;
                                r2 = r3.__notifyAnimationEnd;
                                r2 = r2.bind(r3)(r1);
                                r3 = r1.value;
                                r1 = null;
                                if(!(r3 != r1)) { _fun3535_ip = 99; continue _fun3535 }
case 32:
                                r2 = _closure3_slot0;
                                r1 = r2.__onAnimatedValueUpdateReceived;
                                r1 = r1.bind(r2)(r3);
                                r1 = _closure3_slot1;
                                r2 = r1.__isLooping;
                                r1 = true;
                                if(!(r2 !== r1)) { _fun3535_ip = 103; continue _fun3535 }
case 63:
                                r2 = _closure3_slot1;
                                r1 = r2.__findAnimatedPropsNodes;
                                r0 = _closure3_slot0;
                                r2 = r1.bind(r2)(r0);
                                r1 = r2.forEach;
                                r0 = function(a0) { // Environment: r0
                                    r1 = a0;
                                    r0 = r1.update;
                                    r0 = r0.bind(r1)();
                                    return r0;
                                };
                                r0 = r1.bind(r2)(r0);
case 99:
                                r0 = undefined;
                                return r0;
case 103:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r17 = r6;
                        r14 = r7;
                        r0 = r17[r5](r16, r15, r14, r13, r12);
case 257: // try_end0 // try_end1
                        r0 = _closure1_slot4;
                        r0 = r0.default;
                        r4 = r0.API;
                        r3 = r4.unsetWaitingForIdentifier;
                        r0 = r1;
                        r0 = r3.bind(r4)(r0);
                        r0 = true;
                        return r0;
case 290: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=0);
                        throw r0;
case 294: // try_end2 // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=0);
                        r2 = _closure1_slot4;
                        r2 = r2.default;
                        r3 = r2.API;
                        r2 = r3.unsetWaitingForIdentifier;
                        r1 = r2.bind(r3)(r1);
                        throw r0;
                    }
                };
                r0['value'] = r5;
                r1[4] = r0;
                r0 = {};
                r5 = '__notifyAnimationEnd';
                r0['key'] = r5;
                r5 = function(a0) { // Original name: __notifyAnimationEnd, environment: r4
                    _fun3537: for(var _fun3537_ip = 0; ; ) switch(_fun3537_ip) {
case 0:
                        r5 = this;
                        r0 = _closure1_slot3;
                        r1 = r0.default;
                        r2 = _closure1_slot8;
                        r0 = undefined;
                        r1 = r1.bind(r0)(r5, r2);
                        r2 = r1[r2];
                        r4 = null;
                        if(!(r2 != r4)) { _fun3537_ip = 67; continue _fun3537 }
case 36:
                        r1 = _closure1_slot3;
                        r1 = r1.default;
                        r3 = _closure1_slot8;
                        r1 = r1.bind(r0)(r5, r3);
                        r1[r3] = r4;
                        r1 = a0;
                        r1 = r2.bind(r0)(r1);
case 67:
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[5] = r0;
                r0 = {};
                r5 = '__getDebugID';
                r0['key'] = r5;
                r4 = function() { // Original name: __getDebugID, environment: r4
                    r0 = undefined;
                    return r0;
                };
                r0['value'] = r4;
                r1[6] = r0;
                r0 = undefined;
                r0 = r2.bind(r0)(r3, r1);
                return r0;
            };
            r1 = r1.bind(r0)();
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 303;
    r5 = [1, 6, 12, 13, 31, 32, 304, 73, 310];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun3539: for(var _fun3539_ip = 0; ; ) switch(_fun3539_ip) {
case 0:
            r11 = a1;
            r2 = a5;
            r12 = a6;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r3
                _fun3540: for(var _fun3540_ip = 0; ; ) switch(_fun3540_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun3540_ip = 104; continue _fun3540 }
case 20:
                    r2 = r1.WeakMap;
                    r3 = r2.prototype;
                    r3 = Object.create(r3, {constructor: {value: r2}});
                    r5 = r3;
                    r2 = new r5[r2](r4);
                    r2 = r2 instanceof Object ? r2 : r3;
                    var _closure2_slot0 = r2;
                    r1 = r1.WeakMap;
                    r2 = r1.prototype;
                    r2 = Object.create(r2, {constructor: {value: r1}});
                    r5 = r2;
                    r1 = new r5[r1](r4);
                    r1 = r1 instanceof Object ? r1 : r2;
                    var _closure2_slot1 = r1;
                    r2 = function(a0) { // Original name: _getRequireWildcardCache, environment: r0
                        _fun3541: for(var _fun3541_ip = 0; ; ) switch(_fun3541_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun3541_ip = 15; continue _fun3541 }
case 9:
                            r0 = _closure2_slot0;
                            _fun3541_ip = 19; continue _fun3541;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot23 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot23 = r0;
            r0 = function() { // Original name: ensureGlobalEventEmitterListeners, environment: r3
                _fun3548: for(var _fun3548_ip = 0; ; ) switch(_fun3548_ip) {
case 0:
                    r2 = _closure1_slot18;
                    if(!r2) { _fun3548_ip = 19; continue _fun3548 }
case 12:
                    r2 = _closure1_slot19;
                    if(r2) { _fun3548_ip = 89; continue _fun3548 }
case 19:
                    r2 = _closure1_slot1;
                    r5 = r2.default;
                    r4 = r5.addListener;
                    r3 = 'onNativeAnimatedModuleGetValue';
                    r2 = function(a0) { // Environment: r0
                        _fun3549: for(var _fun3549_ip = 0; ; ) switch(_fun3549_ip) {
case 0:
                            r3 = a0;
                            r2 = r3.tag;
                            r0 = _closure1_slot16;
                            r4 = r0[r2];
                            r0 = undefined;
                            if(r4) { _fun3549_ip = 26; continue _fun3549 }
case 24:
                            return r0;
case 26:
                            r3 = r3.value;
                            r3 = r4.bind(r0)(r3);
                            r1 = _closure1_slot16;
                            r1 = delete r1[r2];
                            return r0;
                        }
                    };
                    r2 = r4.bind(r5)(r3, r2);
                    _closure1_slot18 = r2;
                    r2 = _closure1_slot1;
                    r4 = r2.default;
                    r3 = r4.addListener;
                    r2 = 'onNativeAnimatedModuleAnimationFinished';
                    r0 = function(a0) { // Environment: r0
                        _fun3550: for(var _fun3550_ip = 0; ; ) switch(_fun3550_ip) {
case 0:
                            r3 = a0;
                            r0 = undefined;
                            r4 = undefined;
                            r5 = undefined;
                            r6 = undefined;
                            r1 = global;
                            r2 = r1.Array;
                            r1 = r2.isArray;
                            r2 = r1.bind(r2)(r3);
                            r1 = r3;
                            if(r2) { _fun3550_ip = 46; continue _fun3550 }
case 35:
                            r2 = new Array(1);
                            r2[0] = r3;
                            r1 = r2;
case 46:
                            r3 = r1;
                            r2 = r3[Symbol.iterator];
                            r3 = r2().next;
case 55:
                            r7 = r3().value;
                            r8 = r2;
                            if(!(r8 !== r0)) { _fun3550_ip = 123; continue _fun3550 }
case 66: // try_start_0
                            r4 = r7;
                            r8 = r7.animationId;
                            r5 = r8;
                            r7 = _closure1_slot17;
                            r7 = r7[r8];
                            r6 = r7;
                            if(!r7) { _fun3550_ip = 114; continue _fun3550 }
case 92:
                            r8 = r6;
                            r7 = r4;
                            r7 = r8.bind(r0)(r7);
                            r8 = _closure1_slot17;
                            r7 = r5;
                            r7 = delete r8[r7];
case 114: // try_end0
                            _fun3550_ip = 55; continue _fun3550;
case 116: // catch_target0
                            CatchBlockStart(arg_register=1);
                            r2.return();
                            throw r1;
case 123:
                            return r0;
                        }
                    };
                    r0 = r3.bind(r4)(r2, r0);
                    _closure1_slot19 = r0;
                    r0 = undefined;
                    return r0;
case 89:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot24 = r0;
            r0 = 0;
            r1 = r12[r0];
            r0 = undefined;
            r10 = r11.bind(r0)(r1);
            r1 = global;
            r7 = r1.Object;
            r6 = r7.defineProperty;
            r5 = {};
            r4 = true;
            r5['value'] = r4;
            r4 = '__esModule';
            r4 = r6.bind(r7)(r2, r4, r5);
            r2['default'] = r0;
            r6 = 1;
            r4 = r12[r6];
            r4 = r11.bind(r0)(r4);
            r9 = r10.bind(r0)(r4);
            r4 = 2;
            r4 = r12[r4];
            r4 = r11.bind(r0)(r4);
            r8 = r10.bind(r0)(r4);
            r4 = 3;
            r4 = r12[r4];
            r4 = r11.bind(r0)(r4);
            r4 = r10.bind(r0)(r4);
            var _closure1_slot0 = r4;
            r4 = 4;
            r4 = r12[r4];
            r4 = r11.bind(r0)(r4);
            r4 = r10.bind(r0)(r4);
            var _closure1_slot1 = r4;
            r4 = 5;
            r4 = r12[r4];
            r4 = r11.bind(r0)(r4);
            r5 = r10.bind(r0)(r4);
            var _closure1_slot2 = r5;
            r4 = 6;
            r4 = r12[r4];
            r13 = r11.bind(r0)(r4);
            if(!r13) { _fun3539_ip = 206; continue _fun3539 }
case 192:
            r4 = r13.__esModule;
            r7 = r13;
            if(r4) { _fun3539_ip = 473; continue _fun3539 }
case 206:
            r23 = null;
            if(!(r23 !== r13)) { _fun3539_ip = 464; continue _fun3539 }
case 215:
            r14 = typeof r13;
            r4 = 'object';
            if(!(r4 !== r14)) { _fun3539_ip = 237; continue _fun3539 }
case 226:
            r4 = 'function';
            if(!(r4 === r14)) { _fun3539_ip = 464; continue _fun3539 }
case 237:
            r4 = _closure1_slot23;
            r14 = r4.bind(r0)(r0);
            if(!r14) { _fun3539_ip = 265; continue _fun3539 }
case 249:
            r4 = r14.has;
            r4 = r4.bind(r14)(r13);
            if(r4) { _fun3539_ip = 452; continue _fun3539 }
case 265:
            r4 = Object.create(r23);
            r15 = r1.Object;
            r22 = r15.defineProperty;
            if(!r22) { _fun3539_ip = 293; continue _fun3539 }
case 282:
            r15 = r1.Object;
            r22 = r15.getOwnPropertyDescriptor;
case 293:
            r20 = r13;
            r16 = 'default';
            r15 = undefined;
            for(r17 in r20)
case 310:
            {
case 319:
                r27 = r17;
                if(r16 === r27) { _fun3539_ip = 310; continue _fun3539 }
case 326:
                r24 = {};
                r25 = r24.hasOwnProperty;
                r24 = r25.call;
                r24 = r24.bind(r25)(r13, r27);
                if(!r24) { _fun3539_ip = 310; continue _fun3539 }
case 347:
                r24 = null;
                if(!r22) { _fun3539_ip = 369; continue _fun3539 }
case 352:
                r26 = r1.Object;
                r25 = r26.getOwnPropertyDescriptor;
                r24 = r25.bind(r26)(r13, r27);
case 369:
                if(!r24) { _fun3539_ip = 388; continue _fun3539 }
case 372:
                r25 = r24.get;
                if(r25) { _fun3539_ip = 401; continue _fun3539 }
case 380:
                r25 = r24.set;
                if(r25) { _fun3539_ip = 401; continue _fun3539 }
case 388:
                r25 = r13[r27];
                r4[r27] = r25;
                r15 = r24;
                _fun3539_ip = 310; continue _fun3539;
case 401:
                r26 = r1.Object;
                r25 = r26.defineProperty;
                r25 = r25.bind(r26)(r4, r27, r24);
                r15 = r24;
                _fun3539_ip = 310; continue _fun3539;
            }
case 424:
            r4['default'] = r13;
            r7 = r4;
            if(!r14) { _fun3539_ip = 473; continue _fun3539 }
case 436:
            r15 = r14.set;
            r15 = r15.bind(r14)(r13, r4);
            r7 = r4;
            _fun3539_ip = 473; continue _fun3539;
case 452:
            r4 = r14.get;
            r7 = r4.bind(r14)(r13);
            _fun3539_ip = 473; continue _fun3539;
case 464:
            r4 = {};
            r4['default'] = r13;
            r7 = r4;
case 473:
            var _closure1_slot3 = r7;
            r4 = 7;
            r4 = r12[r4];
            r4 = r11.bind(r0)(r4);
            r4 = r10.bind(r0)(r4);
            var _closure1_slot4 = r4;
            r4 = 8;
            r4 = r12[r4];
            r4 = r11.bind(r0)(r4);
            r4 = r10.bind(r0)(r4);
            var _closure1_slot5 = r4;
            r10 = r9.default;
            r4 = null;
            if(!(r10 == r4)) { _fun3539_ip = 537; continue _fun3539 }
case 530:
            r8 = r8.default;
            _fun3539_ip = 542; continue _fun3539;
case 537:
            r8 = r9.default;
case 542:
            var _closure1_slot6 = r8;
            var _closure1_slot7 = r6;
            var _closure1_slot8 = r6;
            r1 = r1.Set;
            r6 = r1.prototype;
            r6 = Object.create(r6, {constructor: {value: r1}});
            r31 = r6;
            r1 = new r31[r1](r30);
            r1 = r1 instanceof Object ? r1 : r6;
            var _closure1_slot10 = r1;
            r1 = false;
            var _closure1_slot11 = r1;
            r6 = new Array(0);
            var _closure1_slot12 = r6;
            r6 = new Array(0);
            var _closure1_slot13 = r6;
            r5 = r5.default;
            r6 = r5.OS;
            r5 = 'android';
            r5 = r6 === r5;
            if(!r5) { _fun3539_ip = 646; continue _fun3539 }
case 627:
            r9 = r8 == r4;
            r6 = undefined;
            if(r9) { _fun3539_ip = 642; continue _fun3539 }
case 636:
            r6 = r8.queueAndExecuteBatchedOperations;
case 642:
            r5 = r6 != r4;
case 646:
            if(!r5) { _fun3539_ip = 659; continue _fun3539 }
case 649:
            r6 = r7.animatedShouldUseSingleOp;
            r5 = r6.bind(r7)();
case 659:
            var _closure1_slot14 = r5;
            var _closure1_slot15 = r4;
            r6 = {};
            var _closure1_slot16 = r6;
            r6 = {};
            var _closure1_slot17 = r6;
            var _closure1_slot18 = r4;
            var _closure1_slot19 = r4;
            r4 = function() { // Original name: createNativeOperations, environment: r3
                _fun3542: for(var _fun3542_ip = 0; ; ) switch(_fun3542_ip) {
case 0:
                    r1 = ['createAnimatedNode', 'updateAnimatedNodeConfig', 'getValue', 'startListeningToAnimatedNodeValue', 'stopListeningToAnimatedNodeValue', 'connectAnimatedNodes', 'disconnectAnimatedNodes', 'startAnimatingNode', 'stopAnimation', 'setAnimatedNodeValue', 'setAnimatedNodeOffset', 'flattenAnimatedNodeOffset', 'extractAnimatedNodeOffset', 'connectAnimatedNodeToView', 'disconnectAnimatedNodeFromView', 'restoreDefaultValues', 'dropAnimatedNode', 'addAnimatedEventToView', 'removeAnimatedEventFromView', 'addListener', 'removeListener'];
                    var _closure2_slot0 = r1;
                    r0 = {};
                    var _closure2_slot1 = r0;
                    r2 = _closure1_slot14;
                    if(r2) { _fun3542_ip = 75; continue _fun3542 }
case 30:
                    r6 = function() { // Original name: _loop2, environment: r5
                        r3 = _closure2_slot0;
                        r2 = _closure2_slot3;
                        r2 = r3[r2];
                        var _closure3_slot0 = r2;
                        r1 = _closure2_slot1;
                        r0 = function() { // Environment: r0
                            _fun3546: for(var _fun3546_ip = 0; ; ) switch(_fun3546_ip) {
case 0:
                                r0 = undefined;
                                r4 = undefined;
                                r3 = arguments.length;
                                r2 = global;
                                r2 = r2.Array;
                                r5 = r2.prototype;
                                r5 = Object.create(r5, {constructor: {value: r2}});
                                r10 = r5;
                                r9 = r3;
                                r2 = new r10[r2](r9, r8);
                                r5 = r2 instanceof Object ? r2 : r5;
                                var _closure4_slot0 = r5;
                                r6 = 0;
                                r7 = r6 < r3;
                                r2 = 0;
                                if(!r7) { _fun3546_ip = 70; continue _fun3546 }
case 55:
                                r7 = arguments[r2];
                                r5[r2] = r7;
                                r2 = r2 + 1;
                                if(r2 < r3) { _fun3546_ip = 55; continue _fun3546 }
case 70:
                                r3 = _closure1_slot5;
                                r4 = r3.default;
                                r3 = _closure1_slot6;
                                r4 = r4.bind(r0)(r3);
                                r3 = _closure3_slot0;
                                r4 = r4[r3];
                                var _closure4_slot1 = r4;
                                r3 = _closure1_slot11;
                                if(r3) { _fun3546_ip = 139; continue _fun3546 }
case 113:
                                r3 = _closure1_slot12;
                                r3 = r3.length;
                                if(!(r3 === r6)) { _fun3546_ip = 139; continue _fun3546 }
case 126:
                                r3 = r4.apply;
                                r3 = r3.bind(r4)(r0, r5);
                                _fun3546_ip = 158; continue _fun3546;
case 139:
                                r3 = _closure1_slot12;
                                r2 = r3.push;
                                r1 = function() { // Environment: r1
                                    r3 = _closure4_slot1;
                                    r2 = r3.apply;
                                    r1 = _closure4_slot0;
                                    r0 = undefined;
                                    r0 = r2.bind(r3)(r0, r1);
                                    return r0;
                                };
                                r1 = r2.bind(r3)(r1);
case 158:
                                return r0;
                            }
                        };
                        r1[r2] = r0;
                        r0 = undefined;
                        return r0;
                    };
                    r4 = 0;
                    var _closure2_slot3 = r4;
                    r3 = r1.length;
                    r7 = r4 < r3;
                    r2 = undefined;
                    if(!r7) { _fun3542_ip = 118; continue _fun3542 }
case 55:
                    r7 = r6.bind(r2)();
                    r7 = r4 + 1;
                    _closure2_slot3 = r7;
                    r4 = r7;
                    if(r4 < r3) { _fun3542_ip = 55; continue _fun3542 }
case 73:
                    _fun3542_ip = 118; continue _fun3542;
case 75:
                    r4 = function() { // Original name: _loop, environment: r5
                        r3 = _closure2_slot0;
                        r2 = _closure2_slot2;
                        r2 = r3[r2];
                        r4 = _closure2_slot2;
                        r3 = 1;
                        r3 = r4 + r3;
                        var _closure3_slot0 = r3;
                        r1 = _closure2_slot1;
                        r0 = function() { // Environment: r0
                            _fun3544: for(var _fun3544_ip = 0; ; ) switch(_fun3544_ip) {
case 0:
                                r0 = undefined;
                                r3 = undefined;
                                r2 = arguments.length;
                                r1 = global;
                                r1 = r1.Array;
                                r4 = r1.prototype;
                                r4 = Object.create(r4, {constructor: {value: r1}});
                                r9 = r4;
                                r8 = r2;
                                r1 = new r9[r1](r8, r7);
                                r6 = r1 instanceof Object ? r1 : r4;
                                r1 = 0;
                                r4 = r1 < r2;
                                if(!r4) { _fun3544_ip = 62; continue _fun3544 }
case 47:
                                r4 = arguments[r1];
                                r6[r1] = r4;
                                r1 = r1 + 1;
                                if(r1 < r2) { _fun3544_ip = 47; continue _fun3544 }
case 62:
                                r2 = _closure1_slot13;
                                r4 = r2.push;
                                r3 = r4.apply;
                                r2 = _closure1_slot13;
                                r1 = _closure3_slot0;
                                r5 = new Array(1);
                                r5[0] = r1;
                                r1 = r5.concat;
                                r1 = r1.bind(r5)(r6);
                                r1 = r3.bind(r4)(r2, r1);
                                return r0;
                            }
                        };
                        r1[r2] = r0;
                        r0 = undefined;
                        return r0;
                    };
                    r3 = 0;
                    var _closure2_slot2 = r3;
                    r2 = r1.length;
                    r6 = r3 < r2;
                    r1 = undefined;
                    if(!r6) { _fun3542_ip = 118; continue _fun3542 }
case 100:
                    r6 = r4.bind(r1)();
                    r6 = r3 + 1;
                    _closure2_slot2 = r6;
                    r3 = r6;
                    if(r3 < r2) { _fun3542_ip = 100; continue _fun3542 }
case 118:
                    return r0;
                }
            };
            r4 = r4.bind(r0)();
            var _closure1_slot20 = r4;
            r4 = {};
            if(r5) { _fun3539_ip = 712; continue _fun3539 }
case 705:
            r6 = function(a0, a1) { // Environment: r3
                r3 = _closure1_slot20;
                r2 = r3.getValue;
                r1 = a0;
                r0 = a1;
                r0 = r2.bind(r3)(r1, r0);
                r0 = undefined;
                return r0;
            };
            _fun3539_ip = 717; continue _fun3539;
case 712:
            r6 = function(a0, a1) { // Environment: r3
                _fun3556: for(var _fun3556_ip = 0; ; ) switch(_fun3556_ip) {
case 0:
                    r2 = a0;
                    r1 = a1;
                    if(!r1) { _fun3556_ip = 20; continue _fun3556 }
case 9:
                    r0 = _closure1_slot16;
                    r0[r2] = r1;
case 20:
                    r1 = _closure1_slot20;
                    r0 = r1.getValue;
                    r0 = r0.bind(r1)(r2);
                    r0 = undefined;
                    return r0;
                }
            };
case 717:
            r4['getValue'] = r6;
            r6 = function(a0) { // Original name: setWaitingForIdentifier, environment: r3
                _fun3558: for(var _fun3558_ip = 0; ; ) switch(_fun3558_ip) {
case 0:
                    r3 = _closure1_slot10;
                    r2 = r3.add;
                    r1 = a0;
                    r1 = r2.bind(r3)(r1);
                    r1 = true;
                    _closure1_slot11 = r1;
                    r2 = _closure1_slot3;
                    r1 = r2.animatedShouldDebounceQueueFlush;
                    r1 = r1.bind(r2)();
                    if(!r1) { _fun3558_ip = 105; continue _fun3558 }
case 43:
                    r1 = _closure1_slot15;
                    if(!r1) { _fun3558_ip = 105; continue _fun3558 }
case 50:
                    r2 = _closure1_slot3;
                    r1 = r2.enableAnimatedClearImmediateFix;
                    r2 = r1.bind(r2)();
                    r1 = global;
                    if(r2) { _fun3558_ip = 88; continue _fun3558 }
case 69:
                    r4 = r1.clearTimeout;
                    r3 = _closure1_slot15;
                    r2 = undefined;
                    r2 = r4.bind(r2)(r3);
                    _fun3558_ip = 105; continue _fun3558;
case 88:
                    r2 = r1.clearImmediate;
                    r1 = _closure1_slot15;
                    r0 = undefined;
                    r0 = r2.bind(r0)(r1);
case 105:
                    r0 = undefined;
                    return r0;
                }
            };
            r4['setWaitingForIdentifier'] = r6;
            r6 = function(a0) { // Original name: unsetWaitingForIdentifier, environment: r3
                _fun3559: for(var _fun3559_ip = 0; ; ) switch(_fun3559_ip) {
case 0:
                    r3 = _closure1_slot10;
                    r2 = r3.delete;
                    r1 = a0;
                    r1 = r2.bind(r3)(r1);
                    r1 = _closure1_slot10;
                    r2 = r1.size;
                    r1 = 0;
                    if(!(r2 === r1)) { _fun3559_ip = 55; continue _fun3559 }
case 35:
                    r1 = false;
                    _closure1_slot11 = r1;
                    r1 = _closure1_slot21;
                    r0 = r1.disableQueue;
                    r0 = r0.bind(r1)();
case 55:
                    r0 = undefined;
                    return r0;
                }
            };
            r4['unsetWaitingForIdentifier'] = r6;
            r6 = function() { // Original name: disableQueue, environment: r3
                _fun3560: for(var _fun3560_ip = 0; ; ) switch(_fun3560_ip) {
case 0:
                    r0 = _closure1_slot4;
                    r4 = r0.default;
                    r3 = _closure1_slot6;
                    r0 = undefined;
                    r1 = 'Native animated module is not available';
                    r1 = r4.bind(r0)(r3, r1);
                    r3 = _closure1_slot3;
                    r1 = r3.animatedShouldDebounceQueueFlush;
                    r1 = r1.bind(r3)();
                    if(r1) { _fun3560_ip = 61; continue _fun3560 }
case 45:
                    r3 = _closure1_slot21;
                    r1 = r3.flushQueue;
                    r1 = r1.bind(r3)();
                    _fun3560_ip = 103; continue _fun3560;
case 61:
                    r4 = _closure1_slot15;
                    r1 = global;
                    r3 = r1.clearImmediate;
                    r3 = r3.bind(r0)(r4);
                    r3 = r1.setImmediate;
                    r1 = _closure1_slot21;
                    r1 = r1.flushQueue;
                    r1 = r3.bind(r0)(r1);
                    _closure1_slot15 = r1;
case 103:
                    return r0;
                }
            };
            r4['disableQueue'] = r6;
            if(r5) { _fun3539_ip = 762; continue _fun3539 }
case 755:
            r6 = function() { // Environment: r3
                _fun3562: for(var _fun3562_ip = 0; ; ) switch(_fun3562_ip) {
case 0:
                    r0 = _closure1_slot4;
                    r4 = r0.default;
                    r3 = _closure1_slot6;
                    r0 = undefined;
                    r2 = 'Native animated module is not available';
                    r2 = r4.bind(r0)(r3, r2);
                    r4 = null;
                    _closure1_slot15 = r4;
                    r2 = _closure1_slot12;
                    r2 = r2.length;
                    r5 = 0;
                    if(!(r2 !== r5)) { _fun3562_ip = 225; continue _fun3562 }
case 52:
                    r2 = _closure1_slot2;
                    r2 = r2.default;
                    r2 = r2.OS;
                    r3 = 'android';
                    if(!(r2 === r3)) { _fun3562_ip = 116; continue _fun3562 }
case 74:
                    r2 = _closure1_slot6;
                    r2 = r2 == r4;
                    if(r2) { _fun3562_ip = 99; continue _fun3562 }
case 85:
                    r6 = _closure1_slot6;
                    r6 = r6.startOperationBatch;
                    r2 = r6 == r4;
case 99:
                    if(r2) { _fun3562_ip = 116; continue _fun3562 }
case 102:
                    r6 = _closure1_slot6;
                    r2 = r6.startOperationBatch;
                    r2 = r2.bind(r6)();
case 116:
                    r2 = _closure1_slot12;
                    r6 = r2.length;
                    r7 = r5 < r6;
                    r2 = 0;
                    if(!r7) { _fun3562_ip = 153; continue _fun3562 }
case 134:
                    r8 = _closure1_slot12;
                    r7 = r8[r2];
                    r7 = r7.bind(r8)();
                    r2 = r2 + 1;
                    if(r2 < r6) { _fun3562_ip = 134; continue _fun3562 }
case 153:
                    r2 = _closure1_slot12;
                    r2['length'] = r5;
                    r2 = _closure1_slot2;
                    r2 = r2.default;
                    r2 = r2.OS;
                    if(!(r2 === r3)) { _fun3562_ip = 223; continue _fun3562 }
case 181:
                    r2 = _closure1_slot6;
                    r2 = r2 == r4;
                    if(r2) { _fun3562_ip = 206; continue _fun3562 }
case 192:
                    r3 = _closure1_slot6;
                    r3 = r3.finishOperationBatch;
                    r2 = r3 == r4;
case 206:
                    if(r2) { _fun3562_ip = 223; continue _fun3562 }
case 209:
                    r2 = _closure1_slot6;
                    r1 = r2.finishOperationBatch;
                    r1 = r1.bind(r2)();
case 223:
                    return r0;
case 225:
                    return r0;
                }
            };
            _fun3539_ip = 767; continue _fun3539;
case 762:
            r6 = function() { // Environment: r3
                _fun3561: for(var _fun3561_ip = 0; ; ) switch(_fun3561_ip) {
case 0:
                    r0 = _closure1_slot4;
                    r4 = r0.default;
                    r3 = _closure1_slot6;
                    r0 = undefined;
                    r2 = 'Native animated module is not available';
                    r2 = r4.bind(r0)(r3, r2);
                    r5 = null;
                    _closure1_slot15 = r5;
                    r2 = _closure1_slot13;
                    r3 = r2.length;
                    r2 = 0;
                    if(!(r3 !== r2)) { _fun3561_ip = 116; continue _fun3561 }
case 49:
                    r3 = _closure1_slot24;
                    r3 = r3.bind(r0)();
                    r3 = _closure1_slot6;
                    r3 = r3 == r5;
                    if(r3) { _fun3561_ip = 82; continue _fun3561 }
case 68:
                    r4 = _closure1_slot6;
                    r4 = r4.queueAndExecuteBatchedOperations;
                    r3 = r4 == r5;
case 82:
                    if(r3) { _fun3561_ip = 104; continue _fun3561 }
case 85:
                    r5 = _closure1_slot6;
                    r4 = r5.queueAndExecuteBatchedOperations;
                    r3 = _closure1_slot13;
                    r3 = r4.bind(r5)(r3);
case 104:
                    r1 = _closure1_slot13;
                    r1['length'] = r2;
                    return r0;
case 116:
                    return r0;
                }
            };
case 767:
            r4['flushQueue'] = r6;
            r6 = function(a0, a1) { // Original name: createAnimatedNode, environment: r3
                r3 = _closure1_slot20;
                r2 = r3.createAnimatedNode;
                r1 = a0;
                r0 = a1;
                r0 = r2.bind(r3)(r1, r0);
                r0 = undefined;
                return r0;
            };
            r4['createAnimatedNode'] = r6;
            r6 = function(a0, a1) { // Original name: updateAnimatedNodeConfig, environment: r3
                _fun3564: for(var _fun3564_ip = 0; ; ) switch(_fun3564_ip) {
case 0:
                    r1 = _closure1_slot20;
                    r2 = r1.updateAnimatedNodeConfig;
                    r1 = null;
                    if(!(r2 != r1)) { _fun3564_ip = 41; continue _fun3564 }
case 19:
                    r3 = _closure1_slot20;
                    r2 = r3.updateAnimatedNodeConfig;
                    r1 = a0;
                    r0 = a1;
                    r0 = r2.bind(r3)(r1, r0);
case 41:
                    r0 = undefined;
                    return r0;
                }
            };
            r4['updateAnimatedNodeConfig'] = r6;
            r6 = function(a0) { // Original name: startListeningToAnimatedNodeValue, environment: r3
                r2 = _closure1_slot20;
                r1 = r2.startListeningToAnimatedNodeValue;
                r0 = a0;
                r0 = r1.bind(r2)(r0);
                r0 = undefined;
                return r0;
            };
            r4['startListeningToAnimatedNodeValue'] = r6;
            r6 = function(a0) { // Original name: stopListeningToAnimatedNodeValue, environment: r3
                r2 = _closure1_slot20;
                r1 = r2.stopListeningToAnimatedNodeValue;
                r0 = a0;
                r0 = r1.bind(r2)(r0);
                r0 = undefined;
                return r0;
            };
            r4['stopListeningToAnimatedNodeValue'] = r6;
            r6 = function(a0, a1) { // Original name: connectAnimatedNodes, environment: r3
                r3 = _closure1_slot20;
                r2 = r3.connectAnimatedNodes;
                r1 = a0;
                r0 = a1;
                r0 = r2.bind(r3)(r1, r0);
                r0 = undefined;
                return r0;
            };
            r4['connectAnimatedNodes'] = r6;
            r6 = function(a0, a1) { // Original name: disconnectAnimatedNodes, environment: r3
                r3 = _closure1_slot20;
                r2 = r3.disconnectAnimatedNodes;
                r1 = a0;
                r0 = a1;
                r0 = r2.bind(r3)(r1, r0);
                r0 = undefined;
                return r0;
            };
            r4['disconnectAnimatedNodes'] = r6;
            if(r5) { _fun3539_ip = 842; continue _fun3539 }
case 835:
            r5 = function(a0, a1, a2, a3) { // Environment: r3
                r5 = _closure1_slot20;
                r4 = r5.startAnimatingNode;
                r9 = a0;
                r8 = a1;
                r7 = a2;
                r6 = a3;
                r10 = r5;
                r0 = r10[r4](r9, r8, r7, r6, r5);
                r0 = undefined;
                return r0;
            };
            _fun3539_ip = 847; continue _fun3539;
case 842:
            r5 = function(a0, a1, a2, a3) { // Environment: r3
                _fun3569: for(var _fun3569_ip = 0; ; ) switch(_fun3569_ip) {
case 0:
                    r4 = a0;
                    r1 = a3;
                    if(!r1) { _fun3569_ip = 20; continue _fun3569 }
case 9:
                    r0 = _closure1_slot17;
                    r0[r4] = r1;
case 20:
                    r3 = _closure1_slot20;
                    r2 = r3.startAnimatingNode;
                    r1 = a1;
                    r0 = a2;
                    r0 = r2.bind(r3)(r4, r1, r0);
                    r0 = undefined;
                    return r0;
                }
            };
case 847:
            r4['startAnimatingNode'] = r5;
            r5 = function(a0) { // Original name: stopAnimation, environment: r3
                r2 = _closure1_slot20;
                r1 = r2.stopAnimation;
                r0 = a0;
                r0 = r1.bind(r2)(r0);
                r0 = undefined;
                return r0;
            };
            r4['stopAnimation'] = r5;
            r5 = function(a0, a1) { // Original name: setAnimatedNodeValue, environment: r3
                r3 = _closure1_slot20;
                r2 = r3.setAnimatedNodeValue;
                r1 = a0;
                r0 = a1;
                r0 = r2.bind(r3)(r1, r0);
                r0 = undefined;
                return r0;
            };
            r4['setAnimatedNodeValue'] = r5;
            r5 = function(a0, a1) { // Original name: setAnimatedNodeOffset, environment: r3
                r3 = _closure1_slot20;
                r2 = r3.setAnimatedNodeOffset;
                r1 = a0;
                r0 = a1;
                r0 = r2.bind(r3)(r1, r0);
                r0 = undefined;
                return r0;
            };
            r4['setAnimatedNodeOffset'] = r5;
            r5 = function(a0) { // Original name: flattenAnimatedNodeOffset, environment: r3
                r2 = _closure1_slot20;
                r1 = r2.flattenAnimatedNodeOffset;
                r0 = a0;
                r0 = r1.bind(r2)(r0);
                r0 = undefined;
                return r0;
            };
            r4['flattenAnimatedNodeOffset'] = r5;
            r5 = function(a0) { // Original name: extractAnimatedNodeOffset, environment: r3
                r2 = _closure1_slot20;
                r1 = r2.extractAnimatedNodeOffset;
                r0 = a0;
                r0 = r1.bind(r2)(r0);
                r0 = undefined;
                return r0;
            };
            r4['extractAnimatedNodeOffset'] = r5;
            r5 = function(a0, a1) { // Original name: connectAnimatedNodeToView, environment: r3
                r3 = _closure1_slot20;
                r2 = r3.connectAnimatedNodeToView;
                r1 = a0;
                r0 = a1;
                r0 = r2.bind(r3)(r1, r0);
                r0 = undefined;
                return r0;
            };
            r4['connectAnimatedNodeToView'] = r5;
            r5 = function(a0, a1) { // Original name: disconnectAnimatedNodeFromView, environment: r3
                r3 = _closure1_slot20;
                r2 = r3.disconnectAnimatedNodeFromView;
                r1 = a0;
                r0 = a1;
                r0 = r2.bind(r3)(r1, r0);
                r0 = undefined;
                return r0;
            };
            r4['disconnectAnimatedNodeFromView'] = r5;
            r5 = function(a0) { // Original name: restoreDefaultValues, environment: r3
                _fun3578: for(var _fun3578_ip = 0; ; ) switch(_fun3578_ip) {
case 0:
                    r1 = _closure1_slot20;
                    r2 = r1.restoreDefaultValues;
                    r1 = null;
                    if(!(r2 != r1)) { _fun3578_ip = 37; continue _fun3578 }
case 19:
                    r2 = _closure1_slot20;
                    r1 = r2.restoreDefaultValues;
                    r0 = a0;
                    r0 = r1.bind(r2)(r0);
case 37:
                    r0 = undefined;
                    return r0;
                }
            };
            r4['restoreDefaultValues'] = r5;
            r5 = function(a0) { // Original name: dropAnimatedNode, environment: r3
                r2 = _closure1_slot20;
                r1 = r2.dropAnimatedNode;
                r0 = a0;
                r0 = r1.bind(r2)(r0);
                r0 = undefined;
                return r0;
            };
            r4['dropAnimatedNode'] = r5;
            r5 = function(a0, a1, a2) { // Original name: addAnimatedEventToView, environment: r3
                r4 = _closure1_slot20;
                r3 = r4.addAnimatedEventToView;
                r2 = a0;
                r1 = a1;
                r0 = a2;
                r0 = r3.bind(r4)(r2, r1, r0);
                r0 = undefined;
                return r0;
            };
            r4['addAnimatedEventToView'] = r5;
            r5 = function(a0, a1, a2) { // Original name: removeAnimatedEventFromView, environment: r3
                r4 = _closure1_slot20;
                r3 = r4.removeAnimatedEventFromView;
                r2 = a0;
                r1 = a1;
                r0 = a2;
                r0 = r3.bind(r4)(r2, r1, r0);
                r0 = undefined;
                return r0;
            };
            r4['removeAnimatedEventFromView'] = r5;
            var _closure1_slot21 = r4;
            var _closure1_slot22 = r1;
            r1 = {};
            r1['API'] = r4;
            r4 = function() { // Original name: generateNewNodeTag, environment: r3
                r0 = _closure1_slot7;
                r0 = parseFloat(r0);
                r1 = r0 + 1;
                _closure1_slot7 = r1;
                return r0;
            };
            r1['generateNewNodeTag'] = r4;
            r4 = function() { // Original name: generateNewAnimationId, environment: r3
                r0 = _closure1_slot8;
                r0 = parseFloat(r0);
                r1 = r0 + 1;
                _closure1_slot8 = r1;
                return r0;
            };
            r1['generateNewAnimationId'] = r4;
            r4 = function() { // Original name: assertNativeAnimatedModule, environment: r3
                r1 = _closure1_slot4;
                r3 = r1.default;
                r2 = _closure1_slot6;
                r0 = undefined;
                r1 = 'Native animated module is not available';
                r1 = r3.bind(r0)(r2, r1);
                return r0;
            };
            r1['assertNativeAnimatedModule'] = r4;
            r4 = function(a0) { // Original name: shouldUseNativeDriver, environment: r3
                _fun3554: for(var _fun3554_ip = 0; ; ) switch(_fun3554_ip) {
case 0:
                    r0 = a0;
                    r2 = r0.useNativeDriver;
                    r1 = null;
                    if(!(r2 == r1)) { _fun3554_ip = 36; continue _fun3554 }
case 14:
                    r1 = global;
                    r3 = r1.console;
                    r2 = r3.warn;
                    r1 = 'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`';
                    r1 = r2.bind(r3)(r1);
case 36:
                    r1 = r0.useNativeDriver;
                    r2 = true;
                    if(!(r1 === r2)) { _fun3554_ip = 94; continue _fun3554 }
case 47:
                    r3 = _closure1_slot6;
                    if(r3) { _fun3554_ip = 94; continue _fun3554 }
case 57:
                    r3 = _closure1_slot22;
                    if(r3) { _fun3554_ip = 90; continue _fun3554 }
case 64:
                    r3 = global;
                    r5 = r3.console;
                    r4 = r5.warn;
                    r3 = 'Animated: `useNativeDriver` is not supported because the native animated module is missing. Falling back to JS-based animation. To resolve this, add `RCTAnimation` module to this app, or remove `useNativeDriver`. Make sure to run `bundle exec pod install` first. Read more about autolinking: https://github.com/react-native-community/cli/blob/master/docs/autolinking.md';
                    r3 = r4.bind(r5)(r3);
                    _closure1_slot22 = r2;
case 90:
                    r1 = false;
                    return r1;
case 94:
                    r0 = r0.useNativeDriver;
                    if(r0) { _fun3554_ip = 104; continue _fun3554 }
case 102:
                    r0 = false;
case 104:
                    return r0;
                }
            };
            r1['shouldUseNativeDriver'] = r4;
            r4 = function(a0) { // Original name: transformDataType, environment: r3
                _fun3555: for(var _fun3555_ip = 0; ; ) switch(_fun3555_ip) {
case 0:
                    r0 = a0;
                    r2 = typeof r0;
                    r1 = 'string';
                    if(!(r2 === r1)) { _fun3555_ip = 119; continue _fun3555 }
case 14:
                    r2 = r0.endsWith;
                    r1 = 'deg';
                    r1 = r2.bind(r0)(r1);
                    if(r1) { _fun3555_ip = 74; continue _fun3555 }
case 32:
                    r2 = r0.endsWith;
                    r1 = 'rad';
                    r1 = r2.bind(r0)(r1);
                    if(r1) { _fun3555_ip = 52; continue _fun3555 }
case 50:
                    return r0;
case 52:
                    r1 = global;
                    r2 = r1.parseFloat;
                    r1 = undefined;
                    r1 = r2.bind(r1)(r0);
                    if(r1) { _fun3555_ip = 72; continue _fun3555 }
case 70:
                    r1 = 0;
case 72:
                    return r1;
case 74:
                    r1 = global;
                    r3 = r1.parseFloat;
                    r2 = undefined;
                    r2 = r3.bind(r2)(r0);
                    if(r2) { _fun3555_ip = 94; continue _fun3555 }
case 92:
                    r2 = 0;
case 94:
                    r1 = r1.Math;
                    r1 = r1.PI;
                    r2 = r2 * r1;
                    r1 = 180;
                    r1 = r2 / r1;
                    return r1;
case 119:
                    return r0;
                }
            };
            r1['transformDataType'] = r4;
            r4 = function() { // Original name: get nativeEventEmitter, environment: r3
                _fun3582: for(var _fun3582_ip = 0; ; ) switch(_fun3582_ip) {
case 0:
                    r1 = _closure1_slot9;
                    if(r1) { _fun3582_ip = 74; continue _fun3582 }
case 10:
                    r1 = _closure1_slot0;
                    r3 = r1.default;
                    r1 = _closure1_slot2;
                    r1 = r1.default;
                    r4 = r1.OS;
                    r2 = 'ios';
                    r1 = null;
                    if(!(r4 === r2)) { _fun3582_ip = 47; continue _fun3582 }
case 43:
                    r1 = _closure1_slot6;
case 47:
                    r2 = r3.prototype;
                    r2 = Object.create(r2, {constructor: {value: r3}});
                    r6 = r2;
                    r5 = r1;
                    r1 = new r6[r3](r5, r4);
                    r1 = r1 instanceof Object ? r1 : r2;
                    var _closure1_slot9 = r1;
case 74:
                    r0 = _closure1_slot9;
                    return r0;
                }
            };
            r3 = 'nativeEventEmitter';
            Object.defineProperty(r1, r3, {get: r4, set: r0, enumerable: true});
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 304;
    r5 = [1, 305, 308, 191, 22, 33, 73, 20, 45];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun3583: for(var _fun3583_ip = 0; ; ) switch(_fun3583_ip) {
case 0:
            r2 = a5;
            var _closure1_slot0 = r2;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r3
                _fun3584: for(var _fun3584_ip = 0; ; ) switch(_fun3584_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun3584_ip = 104; continue _fun3584 }
case 20:
                    r2 = r1.WeakMap;
                    r3 = r2.prototype;
                    r3 = Object.create(r3, {constructor: {value: r2}});
                    r5 = r3;
                    r2 = new r5[r2](r4);
                    r2 = r2 instanceof Object ? r2 : r3;
                    var _closure2_slot0 = r2;
                    r1 = r1.WeakMap;
                    r2 = r1.prototype;
                    r2 = Object.create(r2, {constructor: {value: r1}});
                    r5 = r2;
                    r1 = new r5[r1](r4);
                    r1 = r1 instanceof Object ? r1 : r2;
                    var _closure2_slot1 = r1;
                    r2 = function(a0) { // Original name: _getRequireWildcardCache, environment: r0
                        _fun3585: for(var _fun3585_ip = 0; ; ) switch(_fun3585_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun3585_ip = 15; continue _fun3585 }
case 9:
                            r0 = _closure2_slot0;
                            _fun3585_ip = 19; continue _fun3585;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot3 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot3 = r0;
            r4 = global;
            r6 = r4.Object;
            r5 = r6.defineProperty;
            r1 = {};
            r0 = true;
            r1['value'] = r0;
            r0 = '__esModule';
            r0 = r5.bind(r6)(r2, r0, r1);
            r0 = {};
            var _closure1_slot1 = r0;
            r0 = undefined;
            r2['default'] = r0;
            r5 = a6;
            r1 = 0;
            r5 = r5[r1];
            r1 = a1;
            r6 = r1.bind(r0)(r5);
            if(!r6) { _fun3583_ip = 98; continue _fun3583 }
case 84:
            r5 = r6.__esModule;
            r1 = r6;
            if(r5) { _fun3583_ip = 365; continue _fun3583 }
case 98:
            r16 = null;
            if(!(r16 !== r6)) { _fun3583_ip = 356; continue _fun3583 }
case 107:
            r7 = typeof r6;
            r5 = 'object';
            if(!(r5 !== r7)) { _fun3583_ip = 129; continue _fun3583 }
case 118:
            r5 = 'function';
            if(!(r5 === r7)) { _fun3583_ip = 356; continue _fun3583 }
case 129:
            r5 = _closure1_slot3;
            r7 = r5.bind(r0)(r0);
            if(!r7) { _fun3583_ip = 157; continue _fun3583 }
case 141:
            r5 = r7.has;
            r5 = r5.bind(r7)(r6);
            if(r5) { _fun3583_ip = 344; continue _fun3583 }
case 157:
            r5 = Object.create(r16);
            r8 = r4.Object;
            r15 = r8.defineProperty;
            if(!r15) { _fun3583_ip = 185; continue _fun3583 }
case 174:
            r8 = r4.Object;
            r15 = r8.getOwnPropertyDescriptor;
case 185:
            r13 = r6;
            r9 = 'default';
            r8 = undefined;
            for(r10 in r13)
case 202:
            {
case 211:
                r20 = r10;
                if(r9 === r20) { _fun3583_ip = 202; continue _fun3583 }
case 218:
                r17 = {};
                r18 = r17.hasOwnProperty;
                r17 = r18.call;
                r17 = r17.bind(r18)(r6, r20);
                if(!r17) { _fun3583_ip = 202; continue _fun3583 }
case 239:
                r17 = null;
                if(!r15) { _fun3583_ip = 261; continue _fun3583 }
case 244:
                r19 = r4.Object;
                r18 = r19.getOwnPropertyDescriptor;
                r17 = r18.bind(r19)(r6, r20);
case 261:
                if(!r17) { _fun3583_ip = 280; continue _fun3583 }
case 264:
                r18 = r17.get;
                if(r18) { _fun3583_ip = 293; continue _fun3583 }
case 272:
                r18 = r17.set;
                if(r18) { _fun3583_ip = 293; continue _fun3583 }
case 280:
                r18 = r6[r20];
                r5[r20] = r18;
                r8 = r17;
                _fun3583_ip = 202; continue _fun3583;
case 293:
                r19 = r4.Object;
                r18 = r19.defineProperty;
                r18 = r18.bind(r19)(r5, r20, r17);
                r8 = r17;
                _fun3583_ip = 202; continue _fun3583;
            }
case 316:
            r5['default'] = r6;
            r1 = r5;
            if(!r7) { _fun3583_ip = 365; continue _fun3583 }
case 328:
            r8 = r7.set;
            r8 = r8.bind(r7)(r6, r5);
            r1 = r5;
            _fun3583_ip = 365; continue _fun3583;
case 344:
            r5 = r7.get;
            r1 = r5.bind(r7)(r6);
            _fun3583_ip = 365; continue _fun3583;
case 356:
            r5 = {};
            r5['default'] = r6;
            r1 = r5;
case 365:
            var _closure1_slot2 = r1;
            r5 = r4.Object;
            r4 = r5.keys;
            r5 = r4.bind(r5)(r1);
            r4 = r5.forEach;
            r3 = function(a0) { // Environment: r3
                _fun3586: for(var _fun3586_ip = 0; ; ) switch(_fun3586_ip) {
case 0:
                    r4 = a0;
                    var _closure2_slot0 = r4;
                    r0 = 'default';
                    if(!(r4 !== r0)) { _fun3586_ip = 152; continue _fun3586 }
case 20:
                    r0 = '__esModule';
                    if(!(r4 !== r0)) { _fun3586_ip = 152; continue _fun3586 }
case 31:
                    r1 = global;
                    r0 = r1.Object;
                    r0 = r0.prototype;
                    r6 = r0.hasOwnProperty;
                    r3 = r6.call;
                    r2 = _closure1_slot1;
                    r2 = r3.bind(r6)(r2, r4);
                    if(r2) { _fun3586_ip = 148; continue _fun3586 }
case 70:
                    r2 = _closure1_slot0;
                    r2 = r4 in r2;
                    if(!r2) { _fun3586_ip = 101; continue _fun3586 }
case 81:
                    r2 = _closure1_slot0;
                    r3 = r2[r4];
                    r2 = _closure1_slot2;
                    r2 = r2[r4];
                    if(!(r3 !== r2)) { _fun3586_ip = 144; continue _fun3586 }
case 101:
                    r3 = r1.Object;
                    r2 = r3.defineProperty;
                    r1 = _closure1_slot0;
                    r0 = {};
                    r6 = true;
                    r0['enumerable'] = r6;
                    r5 = function() { // Original name: get, environment: r5
                        r1 = _closure1_slot2;
                        r0 = _closure2_slot0;
                        r0 = r1[r0];
                        return r0;
                    };
                    r0['get'] = r5;
                    r0 = r2.bind(r3)(r1, r4, r0);
                    r0 = undefined;
                    return r0;
case 144:
                    r0 = undefined;
                    return r0;
case 148:
                    r0 = undefined;
                    return r0;
case 152:
                    r0 = undefined;
                    return r0;
                }
            };
            r3 = r4.bind(r5)(r3);
            r1 = r1.default;
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 305;
    r5 = [306];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun3588: for(var _fun3588_ip = 0; ; ) switch(_fun3588_ip) {
case 0:
            r5 = a1;
            r2 = a5;
            r6 = a6;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r3
                _fun3589: for(var _fun3589_ip = 0; ; ) switch(_fun3589_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun3589_ip = 104; continue _fun3589 }
case 20:
                    r2 = r1.WeakMap;
                    r3 = r2.prototype;
                    r3 = Object.create(r3, {constructor: {value: r2}});
                    r5 = r3;
                    r2 = new r5[r2](r4);
                    r2 = r2 instanceof Object ? r2 : r3;
                    var _closure2_slot0 = r2;
                    r1 = r1.WeakMap;
                    r2 = r1.prototype;
                    r2 = Object.create(r2, {constructor: {value: r1}});
                    r5 = r2;
                    r1 = new r5[r1](r4);
                    r1 = r1 instanceof Object ? r1 : r2;
                    var _closure2_slot1 = r1;
                    r2 = function(a0) { // Original name: _getRequireWildcardCache, environment: r0
                        _fun3590: for(var _fun3590_ip = 0; ; ) switch(_fun3590_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun3590_ip = 15; continue _fun3590 }
case 9:
                            r0 = _closure2_slot0;
                            _fun3590_ip = 19; continue _fun3590;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot0 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot0 = r0;
            r0 = 0;
            r1 = r6[r0];
            r0 = undefined;
            r4 = r5.bind(r0)(r1);
            r16 = global;
            r9 = r16.Object;
            r8 = r9.defineProperty;
            r7 = {};
            r1 = true;
            r7['value'] = r1;
            r1 = '__esModule';
            r1 = r8.bind(r9)(r2, r1, r7);
            r2['default'] = r0;
            r1 = 1;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r4.bind(r0)(r1);
            r4 = 2;
            r4 = r6[r4];
            r4 = r5.bind(r0)(r4);
            if(!r4) { _fun3588_ip = 117; continue _fun3588 }
case 103:
            r6 = r4.__esModule;
            r5 = r4;
            if(r6) { _fun3588_ip = 384; continue _fun3588 }
case 117:
            r15 = null;
            if(!(r15 !== r4)) { _fun3588_ip = 375; continue _fun3588 }
case 126:
            r7 = typeof r4;
            r6 = 'object';
            if(!(r6 !== r7)) { _fun3588_ip = 148; continue _fun3588 }
case 137:
            r6 = 'function';
            if(!(r6 === r7)) { _fun3588_ip = 375; continue _fun3588 }
case 148:
            r3 = _closure1_slot0;
            r6 = r3.bind(r0)(r0);
            if(!r6) { _fun3588_ip = 176; continue _fun3588 }
case 160:
            r3 = r6.has;
            r3 = r3.bind(r6)(r4);
            if(r3) { _fun3588_ip = 363; continue _fun3588 }
case 176:
            r3 = Object.create(r15);
            r7 = r16.Object;
            r14 = r7.defineProperty;
            if(!r14) { _fun3588_ip = 204; continue _fun3588 }
case 193:
            r7 = r16.Object;
            r14 = r7.getOwnPropertyDescriptor;
case 204:
            r12 = r4;
            r8 = 'default';
            r7 = undefined;
            for(r9 in r12)
case 221:
            {
case 230:
                r20 = r9;
                if(r8 === r20) { _fun3588_ip = 221; continue _fun3588 }
case 237:
                r17 = {};
                r18 = r17.hasOwnProperty;
                r17 = r18.call;
                r17 = r17.bind(r18)(r4, r20);
                if(!r17) { _fun3588_ip = 221; continue _fun3588 }
case 258:
                r17 = null;
                if(!r14) { _fun3588_ip = 280; continue _fun3588 }
case 263:
                r19 = r16.Object;
                r18 = r19.getOwnPropertyDescriptor;
                r17 = r18.bind(r19)(r4, r20);
case 280:
                if(!r17) { _fun3588_ip = 299; continue _fun3588 }
case 283:
                r18 = r17.get;
                if(r18) { _fun3588_ip = 312; continue _fun3588 }
case 291:
                r18 = r17.set;
                if(r18) { _fun3588_ip = 312; continue _fun3588 }
case 299:
                r18 = r4[r20];
                r3[r20] = r18;
                r7 = r17;
                _fun3588_ip = 221; continue _fun3588;
case 312:
                r19 = r16.Object;
                r18 = r19.defineProperty;
                r18 = r18.bind(r19)(r3, r20, r17);
                r7 = r17;
                _fun3588_ip = 221; continue _fun3588;
            }
case 335:
            r3['default'] = r4;
            r5 = r3;
            if(!r6) { _fun3588_ip = 384; continue _fun3588 }
case 347:
            r7 = r6.set;
            r7 = r7.bind(r6)(r4, r3);
            r5 = r3;
            _fun3588_ip = 384; continue _fun3588;
case 363:
            r3 = r6.get;
            r5 = r3.bind(r6)(r4);
            _fun3588_ip = 384; continue _fun3588;
case 375:
            r3 = {};
            r3['default'] = r4;
            r5 = r3;
case 384:
            r1 = r1.default;
            r3 = r1.bind(r0)();
            r1 = null;
            if(r3) { _fun3588_ip = 412; continue _fun3588 }
case 398:
            r4 = r5.get;
            r3 = 'NativeAnimatedModule';
            r1 = r4.bind(r5)(r3);
case 412:
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 306;
    r5 = [1, 307, 36];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r5 = a1;
        r2 = a5;
        r6 = a6;
        r0 = a0;
        var _closure1_slot0 = r0;
        r0 = 0;
        r3 = r6[r0];
        r0 = undefined;
        r4 = r5.bind(r0)(r3);
        r3 = global;
        r9 = r3.Object;
        r8 = r9.defineProperty;
        r7 = {};
        r3 = true;
        r7['value'] = r3;
        r3 = '__esModule';
        r3 = r8.bind(r9)(r2, r3, r7);
        r2['default'] = r0;
        r3 = 1;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot1 = r3;
        r1 = function() { // Original name: shouldUseTurboAnimatedModule, environment: r1
            _fun3592: for(var _fun3592_ip = 0; ; ) switch(_fun3592_ip) {
case 0:
                r0 = _closure1_slot1;
                r0 = r0.default;
                r2 = r0.OS;
                r0 = 'ios';
                r0 = r2 === r0;
                if(!r0) { _fun3592_ip = 44; continue _fun3592 }
case 28:
                r1 = _closure1_slot0;
                r2 = r1.RN$Bridgeless;
                r1 = true;
                r0 = r2 === r1;
case 44:
                return r0;
            }
        };
        r2['default'] = r1;
        return r0;
    };
    r6 = 307;
    r5 = [1, 33];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun3593: for(var _fun3593_ip = 0; ; ) switch(_fun3593_ip) {
case 0:
            r2 = a5;
            var _closure1_slot0 = r2;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r3
                _fun3594: for(var _fun3594_ip = 0; ; ) switch(_fun3594_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun3594_ip = 104; continue _fun3594 }
case 20:
                    r2 = r1.WeakMap;
                    r3 = r2.prototype;
                    r3 = Object.create(r3, {constructor: {value: r2}});
                    r5 = r3;
                    r2 = new r5[r2](r4);
                    r2 = r2 instanceof Object ? r2 : r3;
                    var _closure2_slot0 = r2;
                    r1 = r1.WeakMap;
                    r2 = r1.prototype;
                    r2 = Object.create(r2, {constructor: {value: r1}});
                    r5 = r2;
                    r1 = new r5[r1](r4);
                    r1 = r1 instanceof Object ? r1 : r2;
                    var _closure2_slot1 = r1;
                    r2 = function(a0) { // Original name: _getRequireWildcardCache, environment: r0
                        _fun3595: for(var _fun3595_ip = 0; ; ) switch(_fun3595_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun3595_ip = 15; continue _fun3595 }
case 9:
                            r0 = _closure2_slot0;
                            _fun3595_ip = 19; continue _fun3595;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot3 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot3 = r0;
            r4 = global;
            r6 = r4.Object;
            r5 = r6.defineProperty;
            r1 = {};
            r0 = true;
            r1['value'] = r0;
            r0 = '__esModule';
            r0 = r5.bind(r6)(r2, r0, r1);
            r0 = {};
            var _closure1_slot1 = r0;
            r0 = undefined;
            r2['default'] = r0;
            r5 = a6;
            r1 = 0;
            r5 = r5[r1];
            r1 = a1;
            r6 = r1.bind(r0)(r5);
            if(!r6) { _fun3593_ip = 98; continue _fun3593 }
case 84:
            r5 = r6.__esModule;
            r1 = r6;
            if(r5) { _fun3593_ip = 365; continue _fun3593 }
case 98:
            r16 = null;
            if(!(r16 !== r6)) { _fun3593_ip = 356; continue _fun3593 }
case 107:
            r7 = typeof r6;
            r5 = 'object';
            if(!(r5 !== r7)) { _fun3593_ip = 129; continue _fun3593 }
case 118:
            r5 = 'function';
            if(!(r5 === r7)) { _fun3593_ip = 356; continue _fun3593 }
case 129:
            r5 = _closure1_slot3;
            r7 = r5.bind(r0)(r0);
            if(!r7) { _fun3593_ip = 157; continue _fun3593 }
case 141:
            r5 = r7.has;
            r5 = r5.bind(r7)(r6);
            if(r5) { _fun3593_ip = 344; continue _fun3593 }
case 157:
            r5 = Object.create(r16);
            r8 = r4.Object;
            r15 = r8.defineProperty;
            if(!r15) { _fun3593_ip = 185; continue _fun3593 }
case 174:
            r8 = r4.Object;
            r15 = r8.getOwnPropertyDescriptor;
case 185:
            r13 = r6;
            r9 = 'default';
            r8 = undefined;
            for(r10 in r13)
case 202:
            {
case 211:
                r20 = r10;
                if(r9 === r20) { _fun3593_ip = 202; continue _fun3593 }
case 218:
                r17 = {};
                r18 = r17.hasOwnProperty;
                r17 = r18.call;
                r17 = r17.bind(r18)(r6, r20);
                if(!r17) { _fun3593_ip = 202; continue _fun3593 }
case 239:
                r17 = null;
                if(!r15) { _fun3593_ip = 261; continue _fun3593 }
case 244:
                r19 = r4.Object;
                r18 = r19.getOwnPropertyDescriptor;
                r17 = r18.bind(r19)(r6, r20);
case 261:
                if(!r17) { _fun3593_ip = 280; continue _fun3593 }
case 264:
                r18 = r17.get;
                if(r18) { _fun3593_ip = 293; continue _fun3593 }
case 272:
                r18 = r17.set;
                if(r18) { _fun3593_ip = 293; continue _fun3593 }
case 280:
                r18 = r6[r20];
                r5[r20] = r18;
                r8 = r17;
                _fun3593_ip = 202; continue _fun3593;
case 293:
                r19 = r4.Object;
                r18 = r19.defineProperty;
                r18 = r18.bind(r19)(r5, r20, r17);
                r8 = r17;
                _fun3593_ip = 202; continue _fun3593;
            }
case 316:
            r5['default'] = r6;
            r1 = r5;
            if(!r7) { _fun3593_ip = 365; continue _fun3593 }
case 328:
            r8 = r7.set;
            r8 = r8.bind(r7)(r6, r5);
            r1 = r5;
            _fun3593_ip = 365; continue _fun3593;
case 344:
            r5 = r7.get;
            r1 = r5.bind(r7)(r6);
            _fun3593_ip = 365; continue _fun3593;
case 356:
            r5 = {};
            r5['default'] = r6;
            r1 = r5;
case 365:
            var _closure1_slot2 = r1;
            r5 = r4.Object;
            r4 = r5.keys;
            r5 = r4.bind(r5)(r1);
            r4 = r5.forEach;
            r3 = function(a0) { // Environment: r3
                _fun3596: for(var _fun3596_ip = 0; ; ) switch(_fun3596_ip) {
case 0:
                    r4 = a0;
                    var _closure2_slot0 = r4;
                    r0 = 'default';
                    if(!(r4 !== r0)) { _fun3596_ip = 152; continue _fun3596 }
case 20:
                    r0 = '__esModule';
                    if(!(r4 !== r0)) { _fun3596_ip = 152; continue _fun3596 }
case 31:
                    r1 = global;
                    r0 = r1.Object;
                    r0 = r0.prototype;
                    r6 = r0.hasOwnProperty;
                    r3 = r6.call;
                    r2 = _closure1_slot1;
                    r2 = r3.bind(r6)(r2, r4);
                    if(r2) { _fun3596_ip = 148; continue _fun3596 }
case 70:
                    r2 = _closure1_slot0;
                    r2 = r4 in r2;
                    if(!r2) { _fun3596_ip = 101; continue _fun3596 }
case 81:
                    r2 = _closure1_slot0;
                    r3 = r2[r4];
                    r2 = _closure1_slot2;
                    r2 = r2[r4];
                    if(!(r3 !== r2)) { _fun3596_ip = 144; continue _fun3596 }
case 101:
                    r3 = r1.Object;
                    r2 = r3.defineProperty;
                    r1 = _closure1_slot0;
                    r0 = {};
                    r6 = true;
                    r0['enumerable'] = r6;
                    r5 = function() { // Original name: get, environment: r5
                        r1 = _closure1_slot2;
                        r0 = _closure2_slot0;
                        r0 = r1[r0];
                        return r0;
                    };
                    r0['get'] = r5;
                    r0 = r2.bind(r3)(r1, r4, r0);
                    r0 = undefined;
                    return r0;
case 144:
                    r0 = undefined;
                    return r0;
case 148:
                    r0 = undefined;
                    return r0;
case 152:
                    r0 = undefined;
                    return r0;
                }
            };
            r3 = r4.bind(r5)(r3);
            r1 = r1.default;
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 308;
    r5 = [309];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun3598: for(var _fun3598_ip = 0; ; ) switch(_fun3598_ip) {
case 0:
            r5 = a1;
            r2 = a5;
            r6 = a6;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r3
                _fun3599: for(var _fun3599_ip = 0; ; ) switch(_fun3599_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun3599_ip = 104; continue _fun3599 }
case 20:
                    r2 = r1.WeakMap;
                    r3 = r2.prototype;
                    r3 = Object.create(r3, {constructor: {value: r2}});
                    r5 = r3;
                    r2 = new r5[r2](r4);
                    r2 = r2 instanceof Object ? r2 : r3;
                    var _closure2_slot0 = r2;
                    r1 = r1.WeakMap;
                    r2 = r1.prototype;
                    r2 = Object.create(r2, {constructor: {value: r1}});
                    r5 = r2;
                    r1 = new r5[r1](r4);
                    r1 = r1 instanceof Object ? r1 : r2;
                    var _closure2_slot1 = r1;
                    r2 = function(a0) { // Original name: _getRequireWildcardCache, environment: r0
                        _fun3600: for(var _fun3600_ip = 0; ; ) switch(_fun3600_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun3600_ip = 15; continue _fun3600 }
case 9:
                            r0 = _closure2_slot0;
                            _fun3600_ip = 19; continue _fun3600;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot0 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot0 = r0;
            r0 = 0;
            r1 = r6[r0];
            r0 = undefined;
            r4 = r5.bind(r0)(r1);
            r16 = global;
            r9 = r16.Object;
            r8 = r9.defineProperty;
            r7 = {};
            r1 = true;
            r7['value'] = r1;
            r1 = '__esModule';
            r1 = r8.bind(r9)(r2, r1, r7);
            r2['default'] = r0;
            r1 = 1;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r4.bind(r0)(r1);
            r4 = 2;
            r4 = r6[r4];
            r4 = r5.bind(r0)(r4);
            if(!r4) { _fun3598_ip = 117; continue _fun3598 }
case 103:
            r6 = r4.__esModule;
            r5 = r4;
            if(r6) { _fun3598_ip = 384; continue _fun3598 }
case 117:
            r15 = null;
            if(!(r15 !== r4)) { _fun3598_ip = 375; continue _fun3598 }
case 126:
            r7 = typeof r4;
            r6 = 'object';
            if(!(r6 !== r7)) { _fun3598_ip = 148; continue _fun3598 }
case 137:
            r6 = 'function';
            if(!(r6 === r7)) { _fun3598_ip = 375; continue _fun3598 }
case 148:
            r3 = _closure1_slot0;
            r6 = r3.bind(r0)(r0);
            if(!r6) { _fun3598_ip = 176; continue _fun3598 }
case 160:
            r3 = r6.has;
            r3 = r3.bind(r6)(r4);
            if(r3) { _fun3598_ip = 363; continue _fun3598 }
case 176:
            r3 = Object.create(r15);
            r7 = r16.Object;
            r14 = r7.defineProperty;
            if(!r14) { _fun3598_ip = 204; continue _fun3598 }
case 193:
            r7 = r16.Object;
            r14 = r7.getOwnPropertyDescriptor;
case 204:
            r12 = r4;
            r8 = 'default';
            r7 = undefined;
            for(r9 in r12)
case 221:
            {
case 230:
                r20 = r9;
                if(r8 === r20) { _fun3598_ip = 221; continue _fun3598 }
case 237:
                r17 = {};
                r18 = r17.hasOwnProperty;
                r17 = r18.call;
                r17 = r17.bind(r18)(r4, r20);
                if(!r17) { _fun3598_ip = 221; continue _fun3598 }
case 258:
                r17 = null;
                if(!r14) { _fun3598_ip = 280; continue _fun3598 }
case 263:
                r19 = r16.Object;
