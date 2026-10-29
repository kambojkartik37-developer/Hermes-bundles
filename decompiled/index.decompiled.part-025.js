                    r6 = r5[r7];
                    if(!r6) { _fun5127_ip = 314; continue _fun5127 }
case 289:
                    r5 = !r8;
                    r5 = !r5;
                    if(r8) { _fun5127_ip = 311; continue _fun5127 }
case 298:
                    r8 = r1.touchableLongPressCancelsPress;
                    r8 = r8.bind(r1)();
                    r5 = !r8;
case 311:
                    r6 = r5;
case 314:
                    r5 = _closure1_slot9;
                    r5 = r5[r7];
                    r5 = !r5;
                    if(r5) { _fun5127_ip = 331; continue _fun5127 }
case 328:
                    r5 = r6;
case 331:
                    if(!r5) { _fun5127_ip = 437; continue _fun5127 }
case 334:
                    r5 = r1.touchableHandlePress;
                    if(!r5) { _fun5127_ip = 437; continue _fun5127 }
case 343:
                    if(r4) { _fun5127_ip = 371; continue _fun5127 }
case 346:
                    if(r3) { _fun5127_ip = 371; continue _fun5127 }
case 349:
                    r3 = r1._startHighlight;
                    r3 = r3.bind(r1)(r2);
                    r3 = r1._endHighlight;
                    r3 = r3.bind(r1)(r2);
case 371:
                    r3 = _closure1_slot1;
                    r3 = r3.default;
                    r4 = r3.OS;
                    r3 = 'android';
                    if(!(r4 === r3)) { _fun5127_ip = 426; continue _fun5127 }
case 393:
                    r3 = r1.props;
                    r3 = r3.touchSoundDisabled;
                    if(r3) { _fun5127_ip = 426; continue _fun5127 }
case 407:
                    r0 = _closure1_slot2;
                    r3 = r0.default;
                    r0 = r3.playTouchSound;
                    r0 = r0.bind(r3)();
case 426:
                    r0 = r1.touchableHandlePress;
                    r0 = r0.bind(r1)(r2);
case 437:
                    r0 = r1.touchableDelayTimeout;
                    if(!r0) { _fun5127_ip = 467; continue _fun5127 }
case 446:
                    r0 = global;
                    r3 = r0.clearTimeout;
                    r2 = r1.touchableDelayTimeout;
                    r0 = undefined;
                    r0 = r3.bind(r0)(r2);
case 467:
                    r0 = null;
                    r1['touchableDelayTimeout'] = r0;
                    r0 = undefined;
                    return r0;
                }
            };
            r4['_performSideEffectsForTransition'] = r5;
            r5 = function(a0) { // Original name: _startHighlight, environment: r3
                _fun5128: for(var _fun5128_ip = 0; ; ) switch(_fun5128_ip) {
case 0:
                    r2 = a0;
                    r1 = this;
                    r0 = r1._savePressInLocation;
                    r0 = r0.bind(r1)(r2);
                    r0 = r1.touchableHandleActivePressIn;
                    if(!r0) { _fun5128_ip = 36; continue _fun5128 }
case 25:
                    r0 = r1.touchableHandleActivePressIn;
                    r0 = r0.bind(r1)(r2);
case 36:
                    r0 = undefined;
                    return r0;
                }
            };
            r4['_startHighlight'] = r5;
            r5 = function(a0) { // Original name: _endHighlight, environment: r3
                _fun5129: for(var _fun5129_ip = 0; ; ) switch(_fun5129_ip) {
case 0:
                    r3 = a0;
                    r1 = this;
                    var _closure2_slot0 = r3;
                    var _closure2_slot1 = r1;
                    r2 = r1.touchableHandleActivePressOut;
                    if(!r2) { _fun5129_ip = 96; continue _fun5129 }
case 24:
                    r2 = r1.touchableGetPressOutDelayMS;
                    if(!r2) { _fun5129_ip = 46; continue _fun5129 }
case 33:
                    r2 = r1.touchableGetPressOutDelayMS;
                    r2 = r2.bind(r1)();
                    if(r2) { _fun5129_ip = 59; continue _fun5129 }
case 46:
                    r2 = r1.touchableHandleActivePressOut;
                    r2 = r2.bind(r1)(r3);
                    _fun5129_ip = 96; continue _fun5129;
case 59:
                    r2 = global;
                    r4 = r2.setTimeout;
                    r2 = r1.touchableGetPressOutDelayMS;
                    r3 = r2.bind(r1)();
                    r2 = undefined;
                    r0 = function() { // Environment: r0
                        r2 = _closure2_slot1;
                        r1 = r2.touchableHandleActivePressOut;
                        r0 = _closure2_slot0;
                        r0 = r1.bind(r2)(r0);
                        r0 = undefined;
                        return r0;
                    };
                    r0 = r4.bind(r2)(r0, r3);
                    r1['pressOutDelayTimeout'] = r0;
case 96:
                    r0 = undefined;
                    return r0;
                }
            };
            r4['_endHighlight'] = r5;
            r5 = {};
            r4['withoutDefaultFocusAndBlur'] = r5;
            r5 = r4.touchableHandleFocus;
            r5 = r4.touchableHandleBlur;
            r5 = r1.default;
            r1 = ['touchableHandleFocus', 'touchableHandleBlur'];
            r1 = r5.bind(r0)(r4, r1);
            r4['withoutDefaultFocusAndBlur'] = r1;
            r1 = {};
            r1['Mixin'] = r4;
            r3 = function(a0) { // Original name: renderDebugView, environment: r3
                r0 = a0;
                r1 = r0.color;
                r0 = r0.hitSlop;
                r0 = null;
                return r0;
            };
            r1['renderDebugView'] = r3;
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 442;
    r5 = [1, 203, 44, 33, 289, 443, 445, 119, 251];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r6 = a1;
        r2 = a5;
        r7 = a6;
        r1 = function(a0, a1) { // Original name: BoundingDimensions, environment: r4
            r1 = this;
            r0 = a0;
            r1['width'] = r0;
            r0 = a1;
            r1['height'] = r0;
            r0 = undefined;
            return r0;
        };
        var _closure1_slot0 = r1;
        r0 = 0;
        r3 = r7[r0];
        r0 = undefined;
        r5 = r6.bind(r0)(r3);
        r3 = global;
        r10 = r3.Object;
        r9 = r10.defineProperty;
        r8 = {};
        r3 = true;
        r8['value'] = r3;
        r3 = '__esModule';
        r3 = r9.bind(r10)(r2, r3, r8);
        r2['default'] = r0;
        r3 = 1;
        r3 = r7[r3];
        r3 = r6.bind(r0)(r3);
        r3 = r5.bind(r0)(r3);
        r5 = r3.default;
        r5 = r5.twoArgumentPooler;
        r7 = r1.prototype;
        r6 = function() { // Environment: r4
            r1 = this;
            r0 = null;
            r1['width'] = r0;
            r1['height'] = r0;
            r0 = undefined;
            return r0;
        };
        r7['destructor'] = r6;
        r4 = function(a0) { // Environment: r4
            r0 = a0;
            r3 = _closure1_slot0;
            r2 = r3.getPooled;
            r1 = r0.offsetWidth;
            r0 = r0.offsetHeight;
            r0 = r2.bind(r3)(r1, r0);
            return r0;
        };
        r1['getPooledFromElement'] = r4;
        r4 = r3.default;
        r3 = r4.addPoolingTo;
        r3 = r3.bind(r4)(r1, r5);
        r2['default'] = r1;
        return r0;
    };
    r6 = 443;
    r5 = [1, 444];
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
        r4 = function(a0) { // Original name: oneArgumentPooler, environment: r3
            _fun5137: for(var _fun5137_ip = 0; ; ) switch(_fun5137_ip) {
case 0:
                r3 = a0;
                r2 = this;
                r0 = r2.instancePool;
                r0 = r0.length;
                if(r0) { _fun5137_ip = 45; continue _fun5137 }
case 20:
                r0 = r2.prototype;
                r1 = Object.create(r0, {constructor: {value: r2}});
                r6 = r1;
                r5 = r3;
                r0 = new r6[r2](r5, r4);
                r0 = r0 instanceof Object ? r0 : r1;
                return r0;
case 45:
                r1 = r2.instancePool;
                r0 = r1.pop;
                r0 = r0.bind(r1)();
                r1 = r2.call;
                r1 = r1.bind(r2)(r0, r3);
                return r0;
            }
        };
        r1 = function(a0) { // Original name: standardReleaser, environment: r3
            _fun5141: for(var _fun5141_ip = 0; ; ) switch(_fun5141_ip) {
case 0:
                r3 = a0;
                r1 = this;
                r0 = _closure1_slot0;
                r5 = r0.default;
                r4 = r3 instanceof r1;
                r0 = undefined;
                r2 = 'Trying to release an instance into a pool of a different type.';
                r2 = r5.bind(r0)(r4, r2);
                r2 = r3.destructor;
                r2 = r2.bind(r3)();
                r2 = r1.instancePool;
                r4 = r2.length;
                r2 = r1.poolSize;
                if(!(r4 < r2)) { _fun5141_ip = 81; continue _fun5141 }
case 65:
                r2 = r1.instancePool;
                r1 = r2.push;
                r1 = r1.bind(r2)(r3);
case 81:
                return r0;
            }
        };
        var _closure1_slot1 = r1;
        var _closure1_slot2 = r4;
        r1 = {};
        r5 = function(a0, a1) { // Original name: addPoolingTo, environment: r3
            _fun5142: for(var _fun5142_ip = 0; ; ) switch(_fun5142_ip) {
case 0:
                r0 = a0;
                r1 = a1;
                r2 = new Array(0);
                r0['instancePool'] = r2;
                if(r1) { _fun5142_ip = 26; continue _fun5142 }
case 19:
                r1 = _closure1_slot2;
case 26:
                r0['getPooled'] = r1;
                r1 = r0.poolSize;
                if(r1) { _fun5142_ip = 50; continue _fun5142 }
case 41:
                r1 = 10;
                r0['poolSize'] = r1;
case 50:
                r1 = _closure1_slot1;
                r0['release'] = r1;
                return r0;
            }
        };
        r1['addPoolingTo'] = r5;
        r1['oneArgumentPooler'] = r4;
        r4 = function(a0, a1) { // Original name: twoArgumentPooler, environment: r3
            _fun5138: for(var _fun5138_ip = 0; ; ) switch(_fun5138_ip) {
case 0:
                r4 = a0;
                r3 = a1;
                r2 = this;
                r0 = r2.instancePool;
                r0 = r0.length;
                if(r0) { _fun5138_ip = 51; continue _fun5138 }
case 23:
                r0 = r2.prototype;
                r1 = Object.create(r0, {constructor: {value: r2}});
                r8 = r1;
                r7 = r4;
                r6 = r3;
                r0 = new r8[r2](r7, r6, r5);
                r0 = r0 instanceof Object ? r0 : r1;
                return r0;
case 51:
                r1 = r2.instancePool;
                r0 = r1.pop;
                r0 = r0.bind(r1)();
                r1 = r2.call;
                r1 = r1.bind(r2)(r0, r4, r3);
                return r0;
            }
        };
        r1['twoArgumentPooler'] = r4;
        r4 = function(a0, a1, a2) { // Original name: threeArgumentPooler, environment: r3
            _fun5139: for(var _fun5139_ip = 0; ; ) switch(_fun5139_ip) {
case 0:
                r5 = a0;
                r4 = a1;
                r3 = a2;
                r2 = this;
                r0 = r2.instancePool;
                r0 = r0.length;
                if(r0) { _fun5139_ip = 57; continue _fun5139 }
case 26:
                r0 = r2.prototype;
                r1 = Object.create(r0, {constructor: {value: r2}});
                r10 = r1;
                r9 = r5;
                r8 = r4;
                r7 = r3;
                r0 = new r10[r2](r9, r8, r7, r6);
                r0 = r0 instanceof Object ? r0 : r1;
                return r0;
case 57:
                r1 = r2.instancePool;
                r0 = r1.pop;
                r0 = r0.bind(r1)();
                r1 = r2.call;
                r10 = r2;
                r9 = r0;
                r8 = r5;
                r7 = r4;
                r6 = r3;
                r1 = r10[r1](r9, r8, r7, r6, r5);
                return r0;
            }
        };
        r1['threeArgumentPooler'] = r4;
        r3 = function(a0, a1, a2, a3) { // Original name: fourArgumentPooler, environment: r3
            _fun5140: for(var _fun5140_ip = 0; ; ) switch(_fun5140_ip) {
case 0:
                r6 = a0;
                r5 = a1;
                r4 = a2;
                r3 = a3;
                r2 = this;
                r0 = r2.instancePool;
                r0 = r0.length;
                if(r0) { _fun5140_ip = 63; continue _fun5140 }
case 29:
                r0 = r2.prototype;
                r1 = Object.create(r0, {constructor: {value: r2}});
                r12 = r1;
                r11 = r6;
                r10 = r5;
                r9 = r4;
                r8 = r3;
                r0 = new r12[r2](r11, r10, r9, r8, r7);
                r0 = r0 instanceof Object ? r0 : r1;
                return r0;
case 63:
                r1 = r2.instancePool;
                r0 = r1.pop;
                r0 = r0.bind(r1)();
                r1 = r2.call;
                r12 = r2;
                r11 = r0;
                r10 = r6;
                r9 = r5;
                r8 = r4;
                r7 = r3;
                r1 = r12[r1](r11, r10, r9, r8, r7, r6);
                return r0;
            }
        };
        r1['fourArgumentPooler'] = r3;
        r2['default'] = r1;
        return r0;
    };
    r6 = 444;
    r5 = [1, 20];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r6 = a1;
        r2 = a5;
        r7 = a6;
        r1 = function(a0, a1) { // Original name: Position, environment: r4
            r1 = this;
            r0 = a0;
            r1['left'] = r0;
            r0 = a1;
            r1['top'] = r0;
            r0 = undefined;
            return r0;
        };
        r0 = 0;
        r3 = r7[r0];
        r0 = undefined;
        r5 = r6.bind(r0)(r3);
        r3 = global;
        r10 = r3.Object;
        r9 = r10.defineProperty;
        r8 = {};
        r3 = true;
        r8['value'] = r3;
        r3 = '__esModule';
        r3 = r9.bind(r10)(r2, r3, r8);
        r2['default'] = r0;
        r3 = 1;
        r3 = r7[r3];
        r3 = r6.bind(r0)(r3);
        r3 = r5.bind(r0)(r3);
        r5 = r3.default;
        r5 = r5.twoArgumentPooler;
        r6 = r1.prototype;
        r4 = function() { // Environment: r4
            r1 = this;
            r0 = null;
            r1['left'] = r0;
            r1['top'] = r0;
            r0 = undefined;
            return r0;
        };
        r6['destructor'] = r4;
        r4 = r3.default;
        r3 = r4.addPoolingTo;
        r3 = r3.bind(r4)(r1, r5);
        r2['default'] = r1;
        return r0;
    };
    r6 = 445;
    r5 = [1, 444];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5146: for(var _fun5146_ip = 0; ; ) switch(_fun5146_ip) {
case 0:
            r5 = a1;
            r2 = a5;
            r6 = a6;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun5147: for(var _fun5147_ip = 0; ; ) switch(_fun5147_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun5147_ip = 104; continue _fun5147 }
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
                        _fun5148: for(var _fun5148_ip = 0; ; ) switch(_fun5148_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5148_ip = 15; continue _fun5148 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5148_ip = 19; continue _fun5148;
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
                _fun5149: for(var _fun5149_ip = 0; ; ) switch(_fun5149_ip) {
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
                    if(r0) { _fun5149_ip = 61; continue _fun5149 }
case 48:
                    r0 = r8.apply;
                    r0 = r0.bind(r8)(r3, r5);
                    _fun5149_ip = 107; continue _fun5149;
case 61:
                    r6 = global;
                    r7 = r6.Reflect;
                    r6 = r7.construct;
                    if(r5) { _fun5149_ip = 81; continue _fun5149 }
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
                _fun5150: for(var _fun5150_ip = 0; ; ) switch(_fun5150_ip) {
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
                    _fun5150_ip = 74; continue _fun5150;
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
            r7 = r5.bind(r0)(r3);
            if(!r7) { _fun5146_ip = 328; continue _fun5146 }
case 314:
            r3 = r7.__esModule;
            r4 = r7;
            if(r3) { _fun5146_ip = 595; continue _fun5146 }
case 328:
            r17 = null;
            if(!(r17 !== r7)) { _fun5146_ip = 586; continue _fun5146 }
case 337:
            r8 = typeof r7;
            r3 = 'object';
            if(!(r3 !== r8)) { _fun5146_ip = 359; continue _fun5146 }
case 348:
            r3 = 'function';
            if(!(r3 === r8)) { _fun5146_ip = 586; continue _fun5146 }
case 359:
            r3 = _closure1_slot14;
            r8 = r3.bind(r0)(r0);
            if(!r8) { _fun5146_ip = 387; continue _fun5146 }
case 371:
            r3 = r8.has;
            r3 = r3.bind(r8)(r7);
            if(r3) { _fun5146_ip = 574; continue _fun5146 }
case 387:
            r3 = Object.create(r17);
            r9 = r18.Object;
            r16 = r9.defineProperty;
            if(!r16) { _fun5146_ip = 415; continue _fun5146 }
case 404:
            r9 = r18.Object;
            r16 = r9.getOwnPropertyDescriptor;
case 415:
            r14 = r7;
            r10 = 'default';
            r9 = undefined;
            for(r11 in r14)
case 432:
            {
case 441:
                r22 = r11;
                if(r10 === r22) { _fun5146_ip = 432; continue _fun5146 }
case 448:
                r19 = {};
                r20 = r19.hasOwnProperty;
                r19 = r20.call;
                r19 = r19.bind(r20)(r7, r22);
                if(!r19) { _fun5146_ip = 432; continue _fun5146 }
case 469:
                r19 = null;
                if(!r16) { _fun5146_ip = 491; continue _fun5146 }
case 474:
                r21 = r18.Object;
                r20 = r21.getOwnPropertyDescriptor;
                r19 = r20.bind(r21)(r7, r22);
case 491:
                if(!r19) { _fun5146_ip = 510; continue _fun5146 }
case 494:
                r20 = r19.get;
                if(r20) { _fun5146_ip = 523; continue _fun5146 }
case 502:
                r20 = r19.set;
                if(r20) { _fun5146_ip = 523; continue _fun5146 }
case 510:
                r20 = r7[r22];
                r3[r22] = r20;
                r9 = r19;
                _fun5146_ip = 432; continue _fun5146;
case 523:
                r21 = r18.Object;
                r20 = r21.defineProperty;
                r20 = r20.bind(r21)(r3, r22, r19);
                r9 = r19;
                _fun5146_ip = 432; continue _fun5146;
            }
case 546:
            r3['default'] = r7;
            r4 = r3;
            if(!r8) { _fun5146_ip = 595; continue _fun5146 }
case 558:
            r9 = r8.set;
            r9 = r9.bind(r8)(r7, r3);
            r4 = r3;
            _fun5146_ip = 595; continue _fun5146;
case 574:
            r3 = r8.get;
            r4 = r3.bind(r8)(r7);
            _fun5146_ip = 595; continue _fun5146;
case 586:
            r3 = {};
            r3['default'] = r7;
            r4 = r3;
case 595:
            var _closure1_slot10 = r4;
            r3 = 12;
            r3 = r6[r3];
            r3 = r5.bind(r0)(r3);
            var _closure1_slot11 = r3;
            r3 = ['onBlur', 'onFocus'];
            var _closure1_slot12 = r3;
            r5 = r4.Component;
            r3 = function(a0) { // Environment: r1
                r3 = function() { // Original name: TouchableHighlightImpl, environment: r5
                    _fun5154: for(var _fun5154_ip = 0; ; ) switch(_fun5154_ip) {
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
                        if(!r8) { _fun5154_ip = 89; continue _fun5154 }
case 74:
                        r8 = arguments[r1];
                        r7[r1] = r8;
                        r1 = r1 + 1;
                        if(r1 < r3) { _fun5154_ip = 74; continue _fun5154 }
case 89:
                        r3 = _closure1_slot15;
                        r1 = _closure2_slot0;
                        r6 = new Array(0);
                        r0 = r6.concat;
                        r0 = r0.bind(r6)(r7);
                        r0 = r3.bind(r4)(r5, r1, r0);
                        r1 = false;
                        r0['_isMounted'] = r1;
                        r1 = {};
                        r2 = _closure1_slot7;
                        r4 = r2.default;
                        r2 = r0._createPressabilityConfig;
                        r11 = r2.bind(r0)();
                        r3 = r4.prototype;
                        r3 = Object.create(r3, {constructor: {value: r4}});
                        r12 = r3;
                        r2 = new r12[r4](r11, r10);
                        r2 = r2 instanceof Object ? r2 : r3;
                        r1['pressability'] = r2;
                        r2 = r0.props;
                        r4 = r2.testOnly_pressed;
                        r3 = true;
                        r2 = null;
                        if(!(r4 === r3)) { _fun5154_ip = 201; continue _fun5154 }
case 191:
                        r3 = r0._createExtraStyles;
                        r2 = r3.bind(r0)();
case 201:
                        r1['extraStyles'] = r2;
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
                    _fun5155: for(var _fun5155_ip = 0; ; ) switch(_fun5155_ip) {
case 0:
                        r2 = this;
                        var _closure3_slot0 = r2;
                        r0 = {};
                        r3 = r2.props;
                        r3 = r3.rejectResponderTermination;
                        r3 = !r3;
                        r0['cancelable'] = r3;
                        r3 = r2.props;
                        r4 = r3.disabled;
                        r3 = null;
                        if(!(r4 == r3)) { _fun5155_ip = 71; continue _fun5155 }
case 45:
                        r4 = r2.props;
                        r4 = r4.accessibilityState;
                        r5 = r4 == r3;
                        r3 = undefined;
                        if(r5) { _fun5155_ip = 69; continue _fun5155 }
case 64:
                        r3 = r4.disabled;
case 69:
                        _fun5155_ip = 81; continue _fun5155;
case 71:
                        r4 = r2.props;
                        r3 = r4.disabled;
case 81:
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
                        r3 = function(a0) { // Original name: onBlur, environment: r1
                            _fun5156: for(var _fun5156_ip = 0; ; ) switch(_fun5156_ip) {
case 0:
                                r0 = _closure1_slot9;
                                r0 = r0.default;
                                r0 = r0.isTV;
                                if(!r0) { _fun5156_ip = 38; continue _fun5156 }
case 21:
                                r1 = _closure3_slot0;
                                r0 = r1._hideUnderlay;
                                r0 = r0.bind(r1)();
case 38:
                                r1 = _closure3_slot0;
                                r1 = r1.props;
                                r2 = r1.onBlur;
                                r1 = null;
                                if(!(r2 != r1)) { _fun5156_ip = 85; continue _fun5156 }
case 62:
                                r0 = _closure3_slot0;
                                r2 = r0.props;
                                r1 = r2.onBlur;
                                r0 = a0;
                                r0 = r1.bind(r2)(r0);
case 85:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r0['onBlur'] = r3;
                        r3 = function(a0) { // Original name: onFocus, environment: r1
                            _fun5157: for(var _fun5157_ip = 0; ; ) switch(_fun5157_ip) {
case 0:
                                r0 = _closure1_slot9;
                                r0 = r0.default;
                                r0 = r0.isTV;
                                if(!r0) { _fun5157_ip = 38; continue _fun5157 }
case 21:
                                r1 = _closure3_slot0;
                                r0 = r1._showUnderlay;
                                r0 = r0.bind(r1)();
case 38:
                                r1 = _closure3_slot0;
                                r1 = r1.props;
                                r2 = r1.onFocus;
                                r1 = null;
                                if(!(r2 != r1)) { _fun5157_ip = 85; continue _fun5157 }
case 62:
                                r0 = _closure3_slot0;
                                r2 = r0.props;
                                r1 = r2.onFocus;
                                r0 = a0;
                                r0 = r1.bind(r2)(r0);
case 85:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r0['onFocus'] = r3;
                        r2 = r2.props;
                        r2 = r2.onLongPress;
                        r0['onLongPress'] = r2;
                        r2 = function(a0) { // Original name: onPress, environment: r1
                            _fun5158: for(var _fun5158_ip = 0; ; ) switch(_fun5158_ip) {
case 0:
                                r1 = _closure3_slot0;
                                r1 = r1._hideTimeout;
                                r2 = null;
                                if(!(r1 != r2)) { _fun5158_ip = 44; continue _fun5158 }
case 19:
                                r1 = global;
                                r4 = r1.clearTimeout;
                                r1 = _closure3_slot0;
                                r3 = r1._hideTimeout;
                                r1 = undefined;
                                r1 = r4.bind(r1)(r3);
case 44:
                                r1 = _closure1_slot9;
                                r1 = r1.default;
                                r1 = r1.isTV;
                                if(r1) { _fun5158_ip = 131; continue _fun5158 }
case 65:
                                r3 = _closure3_slot0;
                                r1 = r3._showUnderlay;
                                r1 = r1.bind(r3)();
                                r1 = global;
                                r6 = r1.setTimeout;
                                r1 = r3.props;
                                r1 = r1.delayPressOut;
                                r4 = r1 != r2;
                                r5 = 0;
                                if(!r4) { _fun5158_ip = 110; continue _fun5158 }
case 107:
                                r5 = r1;
case 110:
                                r4 = undefined;
                                r1 = function() { // Environment: r1
                                    r1 = _closure3_slot0;
                                    r0 = r1._hideUnderlay;
                                    r0 = r0.bind(r1)();
                                    r0 = undefined;
                                    return r0;
                                };
                                r1 = r6.bind(r4)(r1, r5);
                                r3['_hideTimeout'] = r1;
case 131:
                                r1 = _closure3_slot0;
                                r1 = r1.props;
                                r1 = r1.onPress;
                                if(!(r1 != r2)) { _fun5158_ip = 171; continue _fun5158 }
case 149:
                                r0 = _closure3_slot0;
                                r2 = r0.props;
                                r1 = r2.onPress;
                                r0 = a0;
                                r0 = r1.bind(r2)(r0);
case 171:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r0['onPress'] = r2;
                        r2 = function(a0) { // Original name: onPressIn, environment: r1
                            _fun5160: for(var _fun5160_ip = 0; ; ) switch(_fun5160_ip) {
case 0:
                                r1 = _closure3_slot0;
                                r1 = r1._hideTimeout;
                                r2 = null;
                                if(!(r1 != r2)) { _fun5160_ip = 50; continue _fun5160 }
case 19:
                                r1 = global;
                                r5 = r1.clearTimeout;
                                r1 = _closure3_slot0;
                                r4 = r1._hideTimeout;
                                r3 = undefined;
                                r3 = r5.bind(r3)(r4);
                                r1['_hideTimeout'] = r2;
case 50:
                                r1 = _closure3_slot0;
                                r3 = r1._showUnderlay;
                                r3 = r3.bind(r1)();
                                r1 = r1.props;
                                r1 = r1.onPressIn;
                                if(!(r1 != r2)) { _fun5160_ip = 102; continue _fun5160 }
case 79:
                                r0 = _closure3_slot0;
                                r2 = r0.props;
                                r1 = r2.onPressIn;
                                r0 = a0;
                                r0 = r1.bind(r2)(r0);
case 102:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r0['onPressIn'] = r2;
                        r1 = function(a0) { // Original name: onPressOut, environment: r1
                            _fun5161: for(var _fun5161_ip = 0; ; ) switch(_fun5161_ip) {
case 0:
                                r1 = _closure3_slot0;
                                r1 = r1._hideTimeout;
                                r2 = null;
                                if(!(r1 == r2)) { _fun5161_ip = 33; continue _fun5161 }
case 19:
                                r3 = _closure3_slot0;
                                r1 = r3._hideUnderlay;
                                r1 = r1.bind(r3)();
case 33:
                                r1 = _closure3_slot0;
                                r1 = r1.props;
                                r1 = r1.onPressOut;
                                if(!(r1 != r2)) { _fun5161_ip = 75; continue _fun5161 }
case 52:
                                r0 = _closure3_slot0;
                                r2 = r0.props;
                                r1 = r2.onPressOut;
                                r0 = a0;
                                r0 = r1.bind(r2)(r0);
case 75:
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
                r6 = '_createExtraStyles';
                r4['key'] = r6;
                r6 = function() { // Original name: _createExtraStyles, environment: r5
                    _fun5162: for(var _fun5162_ip = 0; ; ) switch(_fun5162_ip) {
case 0:
                        r3 = this;
                        r0 = {};
                        r1 = {};
                        r2 = r3.props;
                        r4 = r2.activeOpacity;
                        r2 = null;
                        r5 = r4 != r2;
                        r2 = 0.85;
                        if(!r5) { _fun5162_ip = 39; continue _fun5162 }
case 36:
                        r2 = r4;
case 39:
                        r1['opacity'] = r2;
                        r0['child'] = r1;
                        r1 = {};
                        r2 = r3.props;
                        r5 = r2.underlayColor;
                        r2 = 'black';
                        r4 = undefined;
                        if(!(r5 !== r4)) { _fun5162_ip = 81; continue _fun5162 }
case 70:
                        r3 = r3.props;
                        r2 = r3.underlayColor;
case 81:
                        r1['backgroundColor'] = r2;
                        r0['underlay'] = r1;
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[1] = r4;
                r4 = {};
                r6 = '_showUnderlay';
                r4['key'] = r6;
                r6 = function() { // Original name: _showUnderlay, environment: r5
                    _fun5163: for(var _fun5163_ip = 0; ; ) switch(_fun5163_ip) {
case 0:
                        r0 = this;
                        r1 = r0._isMounted;
                        if(!r1) { _fun5163_ip = 24; continue _fun5163 }
case 11:
                        r1 = r0._hasPressHandler;
                        r1 = r1.bind(r0)();
                        if(r1) { _fun5163_ip = 28; continue _fun5163 }
case 24:
                        r1 = undefined;
                        return r1;
case 28:
                        r2 = r0.setState;
                        r1 = {};
                        r3 = r0._createExtraStyles;
                        r3 = r3.bind(r0)();
                        r1['extraStyles'] = r3;
                        r1 = r2.bind(r0)(r1);
                        r1 = r0.props;
                        r2 = r1.onShowUnderlay;
                        r1 = null;
                        if(!(r2 != r1)) { _fun5163_ip = 88; continue _fun5163 }
case 73:
                        r1 = r0.props;
                        r0 = r1.onShowUnderlay;
                        r0 = r0.bind(r1)();
case 88:
                        r0 = undefined;
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[2] = r4;
                r4 = {};
                r6 = '_hideUnderlay';
                r4['key'] = r6;
                r6 = function() { // Original name: _hideUnderlay, environment: r5
                    _fun5164: for(var _fun5164_ip = 0; ; ) switch(_fun5164_ip) {
case 0:
                        r0 = this;
                        r1 = r0._hideTimeout;
                        r2 = null;
                        if(!(r1 != r2)) { _fun5164_ip = 41; continue _fun5164 }
case 14:
                        r1 = global;
                        r4 = r1.clearTimeout;
                        r3 = r0._hideTimeout;
                        r1 = undefined;
                        r1 = r4.bind(r1)(r3);
                        r0['_hideTimeout'] = r2;
case 41:
                        r1 = r0.props;
                        r3 = r1.testOnly_pressed;
                        r1 = true;
                        if(!(r3 !== r1)) { _fun5164_ip = 123; continue _fun5164 }
case 58:
                        r1 = r0._hasPressHandler;
                        r1 = r1.bind(r0)();
                        if(!r1) { _fun5164_ip = 119; continue _fun5164 }
case 71:
                        r3 = r0.setState;
                        r1 = {};
                        r1['extraStyles'] = r2;
                        r1 = r3.bind(r0)(r1);
                        r1 = r0.props;
                        r1 = r1.onHideUnderlay;
                        if(!(r1 != r2)) { _fun5164_ip = 119; continue _fun5164 }
case 104:
                        r1 = r0.props;
                        r0 = r1.onHideUnderlay;
                        r0 = r0.bind(r1)();
case 119:
                        r0 = undefined;
                        return r0;
case 123:
                        r0 = undefined;
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[3] = r4;
                r4 = {};
                r6 = '_hasPressHandler';
                r4['key'] = r6;
                r6 = function() { // Original name: _hasPressHandler, environment: r5
                    _fun5165: for(var _fun5165_ip = 0; ; ) switch(_fun5165_ip) {
case 0:
                        r1 = this;
                        r0 = r1.props;
                        r0 = r0.onPress;
                        r2 = null;
                        r0 = r0 != r2;
                        if(r0) { _fun5165_ip = 36; continue _fun5165 }
case 21:
                        r3 = r1.props;
                        r3 = r3.onPressIn;
                        r0 = r3 != r2;
case 36:
                        if(r0) { _fun5165_ip = 54; continue _fun5165 }
case 39:
                        r3 = r1.props;
                        r3 = r3.onPressOut;
                        r0 = r3 != r2;
case 54:
                        if(r0) { _fun5165_ip = 72; continue _fun5165 }
case 57:
                        r1 = r1.props;
                        r1 = r1.onLongPress;
                        r0 = r1 != r2;
case 72:
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[4] = r4;
                r4 = {};
                r6 = 'render';
                r4['key'] = r6;
                r6 = function() { // Original name: render, environment: r5
                    _fun5166: for(var _fun5166_ip = 0; ; ) switch(_fun5166_ip) {
case 0:
                        r13 = this;
                        r0 = _closure1_slot10;
                        r2 = r0.Children;
                        r1 = r2.only;
                        r0 = r13.props;
                        r0 = r0.children;
                        r12 = r1.bind(r2)(r0);
                        r0 = r13.state;
                        r1 = r0.pressability;
                        r0 = r1.getEventHandlers;
                        r2 = r0.bind(r1)();
                        r0 = r2.onBlur;
                        r0 = r2.onFocus;
                        r0 = _closure1_slot0;
                        r1 = r0.default;
                        r0 = _closure1_slot12;
                        r3 = undefined;
                        r7 = r1.bind(r3)(r2, r0);
                        r0 = r13.props;
                        r0 = r0.disabled;
                        r9 = null;
                        if(!(r0 == r9)) { _fun5166_ip = 118; continue _fun5166 }
case 106:
                        r0 = r13.props;
                        r11 = r0.accessibilityState;
                        _fun5166_ip = 166; continue _fun5166;
case 118:
                        r0 = global;
                        r5 = r0.Object;
                        r4 = r5.assign;
                        r0 = r13.props;
                        r2 = r0.accessibilityState;
                        r1 = {};
                        r0 = r13.props;
                        r0 = r0.disabled;
                        r1['disabled'] = r0;
                        r0 = {};
                        r11 = r4.bind(r5)(r0, r2, r1);
case 166:
                        r10 = {};
                        r0 = r13.props;
                        r0 = r0.aria-valuemax;
                        if(!(r0 == r9)) { _fun5166_ip = 211; continue _fun5166 }
case 183:
                        r1 = r13.props;
                        r2 = r1.accessibilityValue;
                        r4 = r2 == r9;
                        r1 = undefined;
                        if(r4) { _fun5166_ip = 208; continue _fun5166 }
case 203:
                        r1 = r2.max;
case 208:
                        r0 = r1;
case 211:
                        r10['max'] = r0;
                        r0 = r13.props;
                        r0 = r0.aria-valuemin;
                        if(!(r0 == r9)) { _fun5166_ip = 258; continue _fun5166 }
case 230:
                        r1 = r13.props;
                        r2 = r1.accessibilityValue;
                        r4 = r2 == r9;
                        r1 = undefined;
                        if(r4) { _fun5166_ip = 255; continue _fun5166 }
case 250:
                        r1 = r2.min;
case 255:
                        r0 = r1;
case 258:
                        r10['min'] = r0;
                        r0 = r13.props;
                        r0 = r0.aria-valuenow;
                        if(!(r0 == r9)) { _fun5166_ip = 305; continue _fun5166 }
case 277:
                        r1 = r13.props;
                        r2 = r1.accessibilityValue;
                        r4 = r2 == r9;
                        r1 = undefined;
                        if(r4) { _fun5166_ip = 302; continue _fun5166 }
case 297:
                        r1 = r2.now;
case 302:
                        r0 = r1;
case 305:
                        r10['now'] = r0;
                        r0 = r13.props;
                        r0 = r0.aria-valuetext;
                        if(!(r0 == r9)) { _fun5166_ip = 352; continue _fun5166 }
case 324:
                        r1 = r13.props;
                        r2 = r1.accessibilityValue;
                        r4 = r2 == r9;
                        r1 = undefined;
                        if(r4) { _fun5166_ip = 349; continue _fun5166 }
case 344:
                        r1 = r2.text;
case 349:
                        r0 = r1;
case 352:
                        r10['text'] = r0;
                        r0 = r13.props;
                        r2 = r0.aria-live;
                        r0 = 'none';
                        r1 = 'off';
                        if(!(r2 !== r1)) { _fun5166_ip = 408; continue _fun5166 }
case 379:
                        r1 = r13.props;
                        r1 = r1.aria-live;
                        if(!(r1 == r9)) { _fun5166_ip = 405; continue _fun5166 }
case 394:
                        r2 = r13.props;
                        r1 = r2.accessibilityLiveRegion;
case 405:
                        r0 = r1;
case 408:
                        r1 = r13.props;
                        r15 = r1.aria-label;
                        if(!(r15 == r9)) { _fun5166_ip = 434; continue _fun5166 }
case 423:
                        r1 = r13.props;
                        r15 = r1.accessibilityLabel;
case 434:
                        r1 = _closure1_slot11;
                        r2 = r1.jsxs;
                        r1 = _closure1_slot6;
                        r1 = r1.default;
                        r4 = global;
                        r6 = r4.Object;
                        r5 = r6.assign;
                        r4 = {};
                        r8 = r13.props;
                        r16 = r8.accessible;
                        r8 = false;
                        r16 = r16 !== r8;
                        r4['accessible'] = r16;
                        r4['accessibilityLabel'] = r15;
                        r15 = r13.props;
                        r15 = r15.accessibilityHint;
                        r4['accessibilityHint'] = r15;
                        r15 = r13.props;
                        r15 = r15.accessibilityLanguage;
                        r4['accessibilityLanguage'] = r15;
                        r15 = r13.props;
                        r15 = r15.accessibilityRole;
                        r4['accessibilityRole'] = r15;
                        r4['accessibilityState'] = r11;
                        r4['accessibilityValue'] = r10;
                        r10 = r13.props;
                        r10 = r10.accessibilityActions;
                        r4['accessibilityActions'] = r10;
                        r10 = r13.props;
                        r10 = r10.onAccessibilityAction;
                        r4['onAccessibilityAction'] = r10;
                        r10 = r13.props;
                        r15 = r10.aria-hidden;
                        r10 = 'no-hide-descendants';
                        r11 = true;
                        if(!(r15 !== r11)) { _fun5166_ip = 615; continue _fun5166 }
case 604:
                        r11 = r13.props;
                        r10 = r11.importantForAccessibility;
case 615:
                        r4['importantForAccessibility'] = r10;
                        r10 = r13.props;
                        r10 = r10.aria-modal;
                        if(!(r10 == r9)) { _fun5166_ip = 646; continue _fun5166 }
case 635:
                        r11 = r13.props;
                        r10 = r11.accessibilityViewIsModal;
case 646:
                        r4['accessibilityViewIsModal'] = r10;
                        r4['accessibilityLiveRegion'] = r0;
                        r0 = r13.props;
                        r0 = r0.aria-hidden;
                        if(!(r0 == r9)) { _fun5166_ip = 682; continue _fun5166 }
case 671:
                        r10 = r13.props;
                        r0 = r10.accessibilityElementsHidden;
case 682:
                        r4['accessibilityElementsHidden'] = r0;
                        r0 = _closure1_slot8;
                        r15 = r0.default;
                        r11 = r15.compose;
                        r0 = r13.props;
                        r10 = r0.style;
                        r0 = r13.state;
                        r16 = r0.extraStyles;
                        r17 = r16 == r9;
                        r0 = undefined;
                        if(r17) { _fun5166_ip = 738; continue _fun5166 }
case 732:
                        r0 = r16.underlay;
case 738:
                        r0 = r11.bind(r15)(r10, r0);
                        r4['style'] = r0;
                        r0 = r13.props;
                        r0 = r0.onLayout;
                        r4['onLayout'] = r0;
                        r0 = r13.props;
                        r0 = r0.hitSlop;
                        r4['hitSlop'] = r0;
                        r0 = r13.props;
                        r0 = r0.hasTVPreferredFocus;
                        r4['hasTVPreferredFocus'] = r0;
                        r0 = r13.props;
                        r0 = r0.nextFocusDown;
                        r4['nextFocusDown'] = r0;
                        r0 = r13.props;
                        r0 = r0.nextFocusForward;
                        r4['nextFocusForward'] = r0;
                        r0 = r13.props;
                        r0 = r0.nextFocusLeft;
                        r4['nextFocusLeft'] = r0;
                        r0 = r13.props;
                        r0 = r0.nextFocusRight;
                        r4['nextFocusRight'] = r0;
                        r0 = r13.props;
                        r0 = r0.nextFocusUp;
                        r4['nextFocusUp'] = r0;
                        r0 = r13.props;
                        r0 = r0.focusable;
                        r0 = r0 !== r8;
                        if(!r0) { _fun5166_ip = 906; continue _fun5166 }
case 892:
                        r8 = r13.props;
                        r8 = r8.onPress;
                        r0 = r8 !== r3;
case 906:
                        if(!r0) { _fun5166_ip = 922; continue _fun5166 }
case 909:
                        r8 = r13.props;
                        r8 = r8.disabled;
                        r0 = !r8;
case 922:
                        r4['focusable'] = r0;
                        r0 = r13.props;
                        r0 = r0.id;
                        if(!(r0 == r9)) { _fun5166_ip = 951; continue _fun5166 }
case 941:
                        r8 = r13.props;
                        r0 = r8.nativeID;
case 951:
                        r4['nativeID'] = r0;
                        r0 = r13.props;
                        r0 = r0.testID;
                        r4['testID'] = r0;
                        r0 = r13.props;
                        r0 = r0.hostRef;
                        r4['ref'] = r0;
                        r0 = {};
                        r11 = _closure1_slot10;
                        r10 = r11.cloneElement;
                        r8 = {};
                        r14 = _closure1_slot8;
                        r16 = r14.default;
                        r15 = r16.compose;
                        r14 = r12.props;
                        r14 = r14.style;
                        r13 = r13.state;
                        r17 = r13.extraStyles;
                        r18 = r17 == r9;
                        r13 = undefined;
                        if(r18) { _fun5166_ip = 1050; continue _fun5166 }
case 1045:
                        r13 = r17.child;
case 1050:
                        r13 = r15.bind(r16)(r14, r13);
                        r8['style'] = r13;
                        r10 = r10.bind(r11)(r12, r8);
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
                r6 = 'componentDidMount';
                r4['key'] = r6;
                r6 = function() { // Original name: componentDidMount, environment: r5
                    r3 = this;
                    r0 = true;
                    r3['_isMounted'] = r0;
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
                r0[6] = r4;
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
                r0[7] = r4;
                r4 = {};
                r6 = 'componentWillUnmount';
                r4['key'] = r6;
                r5 = function() { // Original name: componentWillUnmount, environment: r5
                    _fun5169: for(var _fun5169_ip = 0; ; ) switch(_fun5169_ip) {
case 0:
                        r0 = this;
                        r1 = false;
                        r0['_isMounted'] = r1;
                        r2 = r0._hideTimeout;
                        r1 = null;
                        if(!(r2 != r1)) { _fun5169_ip = 43; continue _fun5169 }
case 22:
                        r1 = global;
                        r3 = r1.clearTimeout;
                        r2 = r0._hideTimeout;
                        r1 = undefined;
                        r1 = r3.bind(r1)(r2);
case 43:
                        r0 = r0.state;
                        r1 = r0.pressability;
                        r0 = r1.reset;
                        r0 = r0.bind(r1)();
                        r0 = undefined;
                        return r0;
                    }
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
            r3 = 'TouchableHighlight';
            r1['displayName'] = r3;
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 446;
    r5 = [1, 203, 12, 13, 23, 25, 28, 248, 288, 253, 33, 119, 251];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5171: for(var _fun5171_ip = 0; ; ) switch(_fun5171_ip) {
case 0:
            r3 = a1;
            r6 = a5;
            r4 = a6;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r2
                _fun5172: for(var _fun5172_ip = 0; ; ) switch(_fun5172_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun5172_ip = 104; continue _fun5172 }
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
                        _fun5173: for(var _fun5173_ip = 0; ; ) switch(_fun5173_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5173_ip = 15; continue _fun5173 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5173_ip = 19; continue _fun5173;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot6 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot6 = r0;
            r0 = 0;
            r1 = r4[r0];
            r0 = undefined;
            r5 = r3.bind(r0)(r1);
            r17 = global;
            r9 = r17.Object;
            r8 = r9.defineProperty;
            r7 = {};
            r1 = true;
            r7['value'] = r1;
            r1 = '__esModule';
            r1 = r8.bind(r9)(r6, r1, r7);
            r1 = function(a0) { // Original name: TouchableWithoutFeedback, environment: r2
                _fun5174: for(var _fun5174_ip = 0; ; ) switch(_fun5174_ip) {
case 0:
                    r1 = a0;
                    r7 = r1;
                    r4 = undefined;
                    r0 = undefined;
                    r8 = undefined;
                    r21 = r1.disabled;
                    var _closure2_slot0 = r21;
                    r23 = r1.rejectResponderTermination;
                    var _closure2_slot1 = r23;
                    r12 = r1.aria-disabled;
                    var _closure2_slot2 = r12;
                    r22 = r1.accessibilityState;
                    var _closure2_slot3 = r22;
                    r20 = r1.hitSlop;
                    var _closure2_slot4 = r20;
                    r19 = r1.delayLongPress;
                    var _closure2_slot5 = r19;
                    r18 = r1.delayPressIn;
                    var _closure2_slot6 = r18;
                    r17 = r1.delayPressOut;
                    var _closure2_slot7 = r17;
                    r16 = r1.pressRetentionOffset;
                    var _closure2_slot8 = r16;
                    r15 = r1.touchSoundDisabled;
                    var _closure2_slot9 = r15;
                    r14 = r1.onBlur;
                    var _closure2_slot10 = r14;
                    r13 = r1.onFocus;
                    var _closure2_slot11 = r13;
                    r11 = r1.onLongPress;
                    var _closure2_slot12 = r11;
                    r10 = r1.onPress;
                    var _closure2_slot13 = r10;
                    r9 = r1.onPressIn;
                    var _closure2_slot14 = r9;
                    r6 = r1.onPressOut;
                    var _closure2_slot15 = r6;
                    r3 = _closure1_slot2;
                    r5 = r3.useMemo;
                    r3 = new Array(16);
                    r3[0] = r23;
                    r3[1] = r21;
                    r3[2] = r12;
                    r12 = null;
                    r23 = r22 == r12;
                    r21 = undefined;
                    if(r23) { _fun5174_ip = 215; continue _fun5174 }
case 210:
                    r21 = r22.disabled;
case 215:
                    r3[3] = r21;
                    r3[4] = r20;
                    r3[5] = r19;
                    r3[6] = r18;
                    r3[7] = r17;
                    r3[8] = r16;
                    r3[9] = r15;
                    r3[10] = r14;
                    r3[11] = r13;
                    r3[12] = r11;
                    r3[13] = r10;
                    r3[14] = r9;
                    r3[15] = r6;
                    r2 = function() { // Environment: r2
                        _fun5175: for(var _fun5175_ip = 0; ; ) switch(_fun5175_ip) {
case 0:
                            r0 = {};
                            r2 = _closure2_slot1;
                            r2 = !r2;
                            r0['cancelable'] = r2;
                            r2 = _closure2_slot0;
                            r3 = null;
                            if(!(r2 === r3)) { _fun5175_ip = 65; continue _fun5175 }
case 27:
                            r2 = _closure2_slot2;
                            if(!(r2 == r3)) { _fun5175_ip = 59; continue _fun5175 }
case 35:
                            r2 = _closure2_slot3;
                            r3 = r2 == r3;
                            r2 = undefined;
                            if(r3) { _fun5175_ip = 57; continue _fun5175 }
case 48:
                            r3 = _closure2_slot3;
                            r2 = r3.disabled;
case 57:
                            _fun5175_ip = 63; continue _fun5175;
case 59:
                            r2 = _closure2_slot2;
case 63:
                            _fun5175_ip = 69; continue _fun5175;
case 65:
                            r2 = _closure2_slot0;
case 69:
                            r0['disabled'] = r2;
                            r2 = _closure2_slot4;
                            r0['hitSlop'] = r2;
                            r2 = _closure2_slot5;
                            r0['delayLongPress'] = r2;
                            r2 = _closure2_slot6;
                            r0['delayPressIn'] = r2;
                            r2 = _closure2_slot7;
                            r0['delayPressOut'] = r2;
                            r2 = 0;
                            r0['minPressDuration'] = r2;
                            r2 = _closure2_slot8;
                            r0['pressRectOffset'] = r2;
                            r2 = _closure2_slot9;
                            r0['android_disableSound'] = r2;
                            r2 = _closure2_slot10;
                            r0['onBlur'] = r2;
                            r2 = _closure2_slot11;
                            r0['onFocus'] = r2;
                            r2 = _closure2_slot12;
                            r0['onLongPress'] = r2;
                            r2 = _closure2_slot13;
                            r0['onPress'] = r2;
                            r2 = _closure2_slot14;
                            r0['onPressIn'] = r2;
                            r1 = _closure2_slot15;
                            r0['onPressOut'] = r1;
                            return r0;
                        }
                    };
                    r3 = r5.bind(r4)(r2, r3);
                    r2 = _closure1_slot1;
                    r2 = r2.default;
                    r9 = r2.bind(r4)(r3);
                    r2 = _closure1_slot3;
                    r6 = r2.Children;
                    r5 = r6.only;
                    r2 = r7;
                    r3 = r2.children;
                    r6 = r5.bind(r6)(r3);
                    r3 = r6.props;
                    r3 = r3.children;
                    r5 = new Array(1);
                    r5[0] = r3;
                    r13 = r2.aria-live;
                    r19 = {};
                    r2 = r2.aria-busy;
                    if(!(r2 == r12)) { _fun5174_ip = 383; continue _fun5174 }
case 357:
                    r3 = r7;
                    r10 = r3.accessibilityState;
                    r11 = r10 == r12;
                    r3 = undefined;
                    if(r11) { _fun5174_ip = 380; continue _fun5174 }
case 374:
                    r3 = r10.busy;
case 380:
                    r2 = r3;
case 383:
                    r19['busy'] = r2;
                    r2 = r7;
                    r2 = r2.aria-checked;
                    if(!(r2 == r12)) { _fun5174_ip = 427; continue _fun5174 }
case 401:
                    r3 = r7;
                    r10 = r3.accessibilityState;
                    r11 = r10 == r12;
                    r3 = undefined;
                    if(r11) { _fun5174_ip = 424; continue _fun5174 }
case 418:
                    r3 = r10.checked;
case 424:
                    r2 = r3;
case 427:
                    r19['checked'] = r2;
                    r2 = r7;
                    r2 = r2.aria-disabled;
                    if(!(r2 == r12)) { _fun5174_ip = 470; continue _fun5174 }
case 445:
                    r3 = r7;
                    r10 = r3.accessibilityState;
                    r11 = r10 == r12;
                    r3 = undefined;
                    if(r11) { _fun5174_ip = 467; continue _fun5174 }
case 462:
                    r3 = r10.disabled;
case 467:
                    r2 = r3;
case 470:
                    r19['disabled'] = r2;
                    r2 = r7;
                    r2 = r2.aria-expanded;
                    if(!(r2 == r12)) { _fun5174_ip = 513; continue _fun5174 }
case 487:
                    r3 = r7;
                    r10 = r3.accessibilityState;
                    r11 = r10 == r12;
                    r3 = undefined;
                    if(r11) { _fun5174_ip = 510; continue _fun5174 }
case 504:
                    r3 = r10.expanded;
case 510:
                    r2 = r3;
case 513:
                    r19['expanded'] = r2;
                    r2 = r7;
                    r2 = r2.aria-selected;
                    if(!(r2 == r12)) { _fun5174_ip = 557; continue _fun5174 }
case 531:
                    r3 = r7;
                    r10 = r3.accessibilityState;
                    r11 = r10 == r12;
                    r3 = undefined;
                    if(r11) { _fun5174_ip = 554; continue _fun5174 }
case 548:
                    r3 = r10.selected;
case 554:
                    r2 = r3;
case 557:
                    r19['selected'] = r2;
                    r2 = r9.onBlur;
                    r2 = r9.onFocus;
                    r2 = _closure1_slot0;
                    r3 = r2.default;
                    r2 = _closure1_slot4;
                    r11 = r3.bind(r4)(r9, r2);
                    r15 = global;
                    r10 = r15.Object;
                    r9 = r10.assign;
                    r3 = {};
                    r2 = r7;
                    r16 = r2.accessible;
                    r14 = false;
                    r16 = r16 !== r14;
                    r3['accessible'] = r16;
                    r16 = r2.disabled;
                    r2 = r19;
                    if(!(r16 != r12)) { _fun5174_ip = 674; continue _fun5174 }
case 640:
                    r18 = r15.Object;
                    r17 = r18.assign;
                    r16 = {};
                    r15 = r7;
                    r15 = r15.disabled;
                    r16['disabled'] = r15;
                    r15 = {};
                    r2 = r17.bind(r18)(r15, r19, r16);
case 674:
                    r3['accessibilityState'] = r2;
                    r2 = r7;
                    r2 = r2.focusable;
                    r2 = r2 !== r14;
                    if(!r2) { _fun5174_ip = 706; continue _fun5174 }
case 694:
                    r14 = r7;
                    r14 = r14.onPress;
                    r2 = r14 !== r4;
case 706:
                    if(!r2) { _fun5174_ip = 720; continue _fun5174 }
case 709:
                    r14 = r7;
                    r14 = r14.disabled;
                    r2 = !r14;
case 720:
                    r3['focusable'] = r2;
                    r2 = r7;
                    r2 = r2.aria-hidden;
                    if(!(r2 == r12)) { _fun5174_ip = 747; continue _fun5174 }
case 738:
                    r14 = r7;
                    r2 = r14.accessibilityElementsHidden;
case 747:
                    r3['accessibilityElementsHidden'] = r2;
                    r2 = r7;
                    r15 = r2.aria-hidden;
                    r2 = 'no-hide-descendants';
                    r14 = true;
                    if(!(r15 !== r14)) { _fun5174_ip = 780; continue _fun5174 }
case 771:
                    r14 = r7;
                    r2 = r14.importantForAccessibility;
case 780:
                    r3['importantForAccessibility'] = r2;
                    r2 = 'none';
                    r14 = 'off';
                    if(!(r13 !== r14)) { _fun5174_ip = 813; continue _fun5174 }
case 797:
                    if(!(r13 == r12)) { _fun5174_ip = 810; continue _fun5174 }
case 801:
                    r14 = r7;
                    r13 = r14.accessibilityLiveRegion;
case 810:
                    r2 = r13;
case 813:
                    r3['accessibilityLiveRegion'] = r2;
                    r2 = r7;
                    r2 = r2.id;
                    if(!(r2 == r12)) { _fun5174_ip = 838; continue _fun5174 }
case 830:
                    r12 = r7;
                    r2 = r12.nativeID;
case 838:
                    r3['nativeID'] = r2;
                    r2 = {};
                    r0 = r9.bind(r10)(r2, r11, r3);
                    r9 = _closure1_slot5;
                    r2 = r9;
                    r3 = r2[Symbol.iterator];
                    r2 = r3().next;
case 861:
                    r10 = r2().value;
                    r9 = r3;
                    if(!(r9 !== r4)) { _fun5174_ip = 912; continue _fun5174 }
case 872: // try_start_0
                    r8 = r10;
                    r9 = r7;
                    r9 = r9[r10];
                    if(!(r9 !== r4)) { _fun5174_ip = 903; continue _fun5174 }
case 886:
                    r11 = r0;
                    r10 = r8;
                    r9 = r7;
                    r9 = r9[r10];
                    r11[r10] = r9;
case 903: // try_end0
                    _fun5174_ip = 861; continue _fun5174;
case 905: // catch_target0
                    CatchBlockStart(arg_register=2);
                    r3.return();
                    throw r2;
case 912:
                    r2 = _closure1_slot3;
                    r3 = r2.cloneElement;
                    r2 = r3.apply;
                    r1 = _closure1_slot3;
                    r4 = new Array(2);
                    r4[0] = r6;
                    r4[1] = r0;
                    r0 = r4.concat;
                    r0 = r0.bind(r4)(r5);
                    r0 = r2.bind(r3)(r1, r0);
                    return r0;
                }
            };
            r6['default'] = r1;
            r1 = 1;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot0 = r1;
            r1 = 2;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            r1 = 3;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot1 = r1;
            r1 = 4;
            r1 = r4[r1];
            r6 = r3.bind(r0)(r1);
            if(!r6) { _fun5171_ip = 164; continue _fun5171 }
case 150:
            r5 = r6.__esModule;
            r1 = r6;
            if(r5) { _fun5171_ip = 431; continue _fun5171 }
case 164:
            r16 = null;
            if(!(r16 !== r6)) { _fun5171_ip = 422; continue _fun5171 }
case 173:
            r7 = typeof r6;
            r5 = 'object';
            if(!(r5 !== r7)) { _fun5171_ip = 195; continue _fun5171 }
case 184:
            r5 = 'function';
            if(!(r5 === r7)) { _fun5171_ip = 422; continue _fun5171 }
case 195:
            r5 = _closure1_slot6;
            r7 = r5.bind(r0)(r0);
            if(!r7) { _fun5171_ip = 223; continue _fun5171 }
case 207:
            r5 = r7.has;
            r5 = r5.bind(r7)(r6);
            if(r5) { _fun5171_ip = 410; continue _fun5171 }
case 223:
            r5 = Object.create(r16);
            r8 = r17.Object;
            r15 = r8.defineProperty;
            if(!r15) { _fun5171_ip = 251; continue _fun5171 }
case 240:
            r8 = r17.Object;
            r15 = r8.getOwnPropertyDescriptor;
case 251:
            r13 = r6;
            r9 = 'default';
            r8 = undefined;
            for(r10 in r13)
case 268:
            {
case 277:
                r21 = r10;
                if(r9 === r21) { _fun5171_ip = 268; continue _fun5171 }
case 284:
                r18 = {};
                r19 = r18.hasOwnProperty;
                r18 = r19.call;
                r18 = r18.bind(r19)(r6, r21);
                if(!r18) { _fun5171_ip = 268; continue _fun5171 }
case 305:
                r18 = null;
                if(!r15) { _fun5171_ip = 327; continue _fun5171 }
case 310:
                r20 = r17.Object;
                r19 = r20.getOwnPropertyDescriptor;
                r18 = r19.bind(r20)(r6, r21);
case 327:
                if(!r18) { _fun5171_ip = 346; continue _fun5171 }
case 330:
                r19 = r18.get;
                if(r19) { _fun5171_ip = 359; continue _fun5171 }
case 338:
                r19 = r18.set;
                if(r19) { _fun5171_ip = 359; continue _fun5171 }
case 346:
                r19 = r6[r21];
                r5[r21] = r19;
                r8 = r18;
                _fun5171_ip = 268; continue _fun5171;
case 359:
                r20 = r17.Object;
                r19 = r20.defineProperty;
                r19 = r19.bind(r20)(r5, r21, r18);
                r8 = r18;
                _fun5171_ip = 268; continue _fun5171;
            }
case 382:
            r5['default'] = r6;
            r1 = r5;
            if(!r7) { _fun5171_ip = 431; continue _fun5171 }
case 394:
            r8 = r7.set;
            r8 = r8.bind(r7)(r6, r5);
            r1 = r5;
            _fun5171_ip = 431; continue _fun5171;
case 410:
            r5 = r7.get;
            r1 = r5.bind(r7)(r6);
            _fun5171_ip = 431; continue _fun5171;
case 422:
            r5 = {};
            r5['default'] = r6;
            r1 = r5;
case 431:
            var _closure1_slot2 = r1;
            var _closure1_slot3 = r1;
            r1 = 5;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = ['onBlur', 'onFocus'];
            var _closure1_slot4 = r1;
            r1 = ['accessibilityActions', 'accessibilityElementsHidden', 'accessibilityHint', 'accessibilityLanguage', 'accessibilityIgnoresInvertColors', 'accessibilityLabel', 'accessibilityLiveRegion', 'accessibilityRole', 'accessibilityValue', 'aria-valuemax', 'aria-valuemin', 'aria-valuenow', 'aria-valuetext', 'accessibilityViewIsModal', 'aria-modal', 'hitSlop', 'importantForAccessibility', 'nativeID', 'onAccessibilityAction', 'onBlur', 'onFocus', 'onLayout', 'testID'];
            var _closure1_slot5 = r1;
            return r0;
        }
    };
    r6 = 447;
    r5 = [1, 203, 248, 287, 119, 251];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r4 = a1;
        r2 = a5;
        r5 = a6;
        r0 = 0;
        r1 = r5[r0];
        r0 = undefined;
        r3 = r4.bind(r0)(r1);
        r1 = global;
        r8 = r1.Object;
        r7 = r8.defineProperty;
        r6 = {};
        r1 = true;
        r6['value'] = r1;
        r1 = '__esModule';
        r1 = r7.bind(r8)(r2, r1, r6);
        r2['default'] = r0;
        r1 = 1;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r3.bind(r0)(r1);
        r1 = r1.default;
        r1 = r1.VirtualizedList;
        r2['default'] = r1;
        return r0;
    };
    r6 = 448;
    r5 = [1, 345];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r4 = a1;
        r2 = a5;
        r5 = a6;
        r0 = 0;
        r1 = r5[r0];
        r0 = undefined;
        r3 = r4.bind(r0)(r1);
        r1 = global;
        r8 = r1.Object;
        r7 = r8.defineProperty;
        r6 = {};
        r1 = true;
        r6['value'] = r1;
        r1 = '__esModule';
        r1 = r7.bind(r8)(r2, r1, r6);
        r2['default'] = r0;
        r1 = 1;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r3.bind(r0)(r1);
        r1 = r1.default;
        r1 = r1.VirtualizedSectionList;
        r2['default'] = r1;
        return r0;
    };
    r6 = 449;
    r5 = [1, 345];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r5 = a1;
        r2 = a5;
        r6 = a6;
        var _closure1_slot0 = r5;
        var _closure1_slot1 = r6;
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
        var _closure1_slot2 = r1;
        r1 = 2;
        r1 = r6[r1];
        r1 = r5.bind(r0)(r1);
        r1 = r4.bind(r0)(r1);
        var _closure1_slot3 = r1;
        r1 = ['tintColor', 'cancelButtonTintColor', 'disabledButtonTintColor', 'destructiveButtonIndex'];
        var _closure1_slot4 = r1;
        r1 = {};
        r4 = function(a0, a1) { // Original name: showActionSheetWithOptions, environment: r3
            _fun5179: for(var _fun5179_ip = 0; ; ) switch(_fun5179_ip) {
case 0:
                r5 = a0;
                r4 = a1;
                r3 = _closure1_slot0;
                r0 = _closure1_slot1;
                r12 = 3;
                r1 = r0[r12];
                r0 = undefined;
                r6 = r3.bind(r0)(r1);
                r3 = typeof r5;
                r1 = 'object';
                r3 = r3 === r1;
                if(!r3) { _fun5179_ip = 51; continue _fun5179 }
case 45:
                r1 = null;
                r3 = r5 !== r1;
case 51:
                r1 = 'Options must be a valid object';
                r1 = r6.bind(r0)(r3, r1);
                r3 = _closure1_slot0;
                r1 = _closure1_slot1;
                r6 = r1[r12];
                r8 = r3.bind(r0)(r6);
                r7 = typeof r4;
                r6 = 'function';
                r7 = r7 === r6;
                r6 = 'Must provide a valid callback';
                r6 = r8.bind(r0)(r7, r6);
                r1 = r1[r12];
                r6 = r3.bind(r0)(r1);
                r1 = _closure1_slot3;
                r3 = r1.default;
                r1 = "ActionSheetManager doesn't exist";
                r1 = r6.bind(r0)(r3, r1);
                r11 = r5.tintColor;
                r14 = r5.cancelButtonTintColor;
                r13 = r5.disabledButtonTintColor;
                r6 = r5.destructiveButtonIndex;
                r1 = _closure1_slot2;
                r3 = r1.default;
                r1 = _closure1_slot4;
                r8 = r3.bind(r0)(r5, r1);
                r5 = global;
                r3 = r5.Array;
                r1 = r3.isArray;
                r3 = r1.bind(r3)(r6);
                r1 = r6;
                if(r3) { _fun5179_ip = 218; continue _fun5179 }
case 194:
                r1 = null;
                r7 = typeof r6;
                r3 = 'number';
                if(!(r7 === r3)) { _fun5179_ip = 218; continue _fun5179 }
case 207:
                r3 = new Array(1);
                r3[0] = r6;
                r1 = r3;
case 218:
                r6 = _closure1_slot0;
                r3 = _closure1_slot1;
                r7 = 4;
                r9 = r3[r7];
                r10 = r6.bind(r0)(r9);
                r9 = r10.default;
                r11 = r9.bind(r10)(r11);
                r9 = r3[r7];
                r10 = r6.bind(r0)(r9);
                r9 = r10.default;
                r10 = r9.bind(r10)(r14);
                r7 = r3[r7];
                r9 = r6.bind(r0)(r7);
                r7 = r9.default;
                r9 = r7.bind(r9)(r13);
                r3 = r3[r12];
                r13 = r6.bind(r0)(r3);
                r3 = null;
                r7 = r11 == r3;
                if(r7) { _fun5179_ip = 315; continue _fun5179 }
case 304:
                r14 = typeof r11;
                r6 = 'number';
                r7 = r14 === r6;
case 315:
                r6 = 'Unexpected color given for ActionSheetIOS.showActionSheetWithOptions tintColor';
                r6 = r13.bind(r0)(r7, r6);
                r7 = _closure1_slot0;
                r6 = _closure1_slot1;
                r6 = r6[r12];
                r13 = r7.bind(r0)(r6);
                r7 = r10 == r3;
                if(r7) { _fun5179_ip = 360; continue _fun5179 }
case 349:
                r14 = typeof r10;
                r6 = 'number';
                r7 = r14 === r6;
case 360:
                r6 = 'Unexpected color given for ActionSheetIOS.showActionSheetWithOptions cancelButtonTintColor';
                r6 = r13.bind(r0)(r7, r6);
                r7 = _closure1_slot0;
                r6 = _closure1_slot1;
                r6 = r6[r12];
                r7 = r7.bind(r0)(r6);
                r6 = r9 == r3;
                if(r6) { _fun5179_ip = 405; continue _fun5179 }
case 394:
                r12 = typeof r9;
                r3 = 'number';
                r6 = r12 === r3;
case 405:
                r3 = 'Unexpected color given for ActionSheetIOS.showActionSheetWithOptions disabledButtonTintColor';
                r3 = r7.bind(r0)(r6, r3);
                r2 = _closure1_slot3;
                r3 = r2.default;
                r2 = r3.showActionSheetWithOptions;
                r7 = r5.Object;
                r6 = r7.assign;
                r5 = {};
                r5['tintColor'] = r11;
                r5['cancelButtonTintColor'] = r10;
                r5['disabledButtonTintColor'] = r9;
                r5['destructiveButtonIndices'] = r1;
                r1 = {};
                r1 = r6.bind(r7)(r1, r8, r5);
                r1 = r2.bind(r3)(r1, r4);
                return r0;
            }
        };
        r1['showActionSheetWithOptions'] = r4;
        r4 = function(a0, a1, a2) { // Original name: showShareActionSheetWithOptions, environment: r3
            _fun5180: for(var _fun5180_ip = 0; ; ) switch(_fun5180_ip) {
case 0:
                r9 = a0;
                r5 = a1;
                r4 = a2;
                r6 = _closure1_slot0;
                r0 = _closure1_slot1;
                r2 = 3;
                r3 = r0[r2];
                r0 = undefined;
                r7 = r6.bind(r0)(r3);
                r6 = typeof r9;
                r3 = 'object';
                r6 = r6 === r3;
                if(!r6) { _fun5180_ip = 54; continue _fun5180 }
case 48:
                r3 = null;
                r6 = r9 !== r3;
case 54:
                r3 = 'Options must be a valid object';
                r3 = r7.bind(r0)(r6, r3);
                r10 = _closure1_slot0;
                r11 = _closure1_slot1;
                r3 = r11[r2];
                r8 = r10.bind(r0)(r3);
                r3 = typeof r5;
                r6 = 'function';
                r7 = r3 === r6;
                r3 = 'Must provide a valid failureCallback';
                r3 = r8.bind(r0)(r7, r3);
                r3 = r11[r2];
                r7 = r10.bind(r0)(r3);
                r3 = typeof r4;
                r6 = r3 === r6;
                r3 = 'Must provide a valid successCallback';
                r3 = r7.bind(r0)(r6, r3);
                r2 = r11[r2];
                r6 = r10.bind(r0)(r2);
                r1 = _closure1_slot3;
                r3 = r1.default;
                r2 = "ActionSheetManager doesn't exist";
                r2 = r6.bind(r0)(r3, r2);
                r3 = r1.default;
                r2 = r3.showShareActionSheetWithOptions;
                r1 = global;
                r8 = r1.Object;
                r7 = r8.assign;
                r6 = {};
                r1 = 4;
                r1 = r11[r1];
                r11 = r10.bind(r0)(r1);
                r10 = r11.default;
                r1 = r9.tintColor;
                r1 = r10.bind(r11)(r1);
                r6['tintColor'] = r1;
                r1 = {};
                r1 = r7.bind(r8)(r1, r9, r6);
                r1 = r2.bind(r3)(r1, r5, r4);
                return r0;
            }
        };
        r1['showShareActionSheetWithOptions'] = r4;
        r3 = function() { // Original name: dismissActionSheet, environment: r3
            _fun5181: for(var _fun5181_ip = 0; ; ) switch(_fun5181_ip) {
case 0:
                r3 = _closure1_slot0;
                r2 = _closure1_slot1;
                r0 = 3;
                r2 = r2[r0];
                r0 = undefined;
                r5 = r3.bind(r0)(r2);
                r2 = _closure1_slot3;
                r4 = r2.default;
                r3 = "ActionSheetManager doesn't exist";
                r3 = r5.bind(r0)(r4, r3);
                r2 = r2.default;
                r2 = r2.dismissActionSheet;
                r3 = typeof r2;
                r2 = 'function';
                if(!(r3 === r2)) { _fun5181_ip = 85; continue _fun5181 }
case 66:
                r1 = _closure1_slot3;
                r2 = r1.default;
                r1 = r2.dismissActionSheet;
                r1 = r1.bind(r2)();
case 85:
                return r0;
            }
        };
        r1['dismissActionSheet'] = r3;
        r2['default'] = r1;
        return r0;
    };
    r6 = 450;
    r5 = [1, 203, 451, 20, 89];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5182: for(var _fun5182_ip = 0; ; ) switch(_fun5182_ip) {
case 0:
            r2 = a5;
            var _closure1_slot0 = r2;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r3
                _fun5183: for(var _fun5183_ip = 0; ; ) switch(_fun5183_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun5183_ip = 104; continue _fun5183 }
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
                        _fun5184: for(var _fun5184_ip = 0; ; ) switch(_fun5184_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5184_ip = 15; continue _fun5184 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5184_ip = 19; continue _fun5184;
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
            if(!r6) { _fun5182_ip = 98; continue _fun5182 }
case 84:
            r5 = r6.__esModule;
            r1 = r6;
            if(r5) { _fun5182_ip = 365; continue _fun5182 }
case 98:
            r16 = null;
            if(!(r16 !== r6)) { _fun5182_ip = 356; continue _fun5182 }
case 107:
            r7 = typeof r6;
            r5 = 'object';
            if(!(r5 !== r7)) { _fun5182_ip = 129; continue _fun5182 }
case 118:
            r5 = 'function';
            if(!(r5 === r7)) { _fun5182_ip = 356; continue _fun5182 }
case 129:
            r5 = _closure1_slot3;
            r7 = r5.bind(r0)(r0);
            if(!r7) { _fun5182_ip = 157; continue _fun5182 }
case 141:
            r5 = r7.has;
            r5 = r5.bind(r7)(r6);
            if(r5) { _fun5182_ip = 344; continue _fun5182 }
case 157:
            r5 = Object.create(r16);
            r8 = r4.Object;
            r15 = r8.defineProperty;
            if(!r15) { _fun5182_ip = 185; continue _fun5182 }
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
                if(r9 === r20) { _fun5182_ip = 202; continue _fun5182 }
case 218:
                r17 = {};
                r18 = r17.hasOwnProperty;
                r17 = r18.call;
                r17 = r17.bind(r18)(r6, r20);
                if(!r17) { _fun5182_ip = 202; continue _fun5182 }
case 239:
                r17 = null;
                if(!r15) { _fun5182_ip = 261; continue _fun5182 }
case 244:
                r19 = r4.Object;
                r18 = r19.getOwnPropertyDescriptor;
                r17 = r18.bind(r19)(r6, r20);
case 261:
                if(!r17) { _fun5182_ip = 280; continue _fun5182 }
case 264:
                r18 = r17.get;
                if(r18) { _fun5182_ip = 293; continue _fun5182 }
case 272:
                r18 = r17.set;
                if(r18) { _fun5182_ip = 293; continue _fun5182 }
case 280:
                r18 = r6[r20];
                r5[r20] = r18;
                r8 = r17;
                _fun5182_ip = 202; continue _fun5182;
case 293:
                r19 = r4.Object;
                r18 = r19.defineProperty;
                r18 = r18.bind(r19)(r5, r20, r17);
                r8 = r17;
                _fun5182_ip = 202; continue _fun5182;
            }
case 316:
            r5['default'] = r6;
            r1 = r5;
            if(!r7) { _fun5182_ip = 365; continue _fun5182 }
case 328:
            r8 = r7.set;
            r8 = r8.bind(r7)(r6, r5);
            r1 = r5;
            _fun5182_ip = 365; continue _fun5182;
case 344:
            r5 = r7.get;
            r1 = r5.bind(r7)(r6);
            _fun5182_ip = 365; continue _fun5182;
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
                _fun5185: for(var _fun5185_ip = 0; ; ) switch(_fun5185_ip) {
case 0:
                    r4 = a0;
                    var _closure2_slot0 = r4;
                    r0 = 'default';
                    if(!(r4 !== r0)) { _fun5185_ip = 152; continue _fun5185 }
case 20:
                    r0 = '__esModule';
                    if(!(r4 !== r0)) { _fun5185_ip = 152; continue _fun5185 }
case 31:
                    r1 = global;
                    r0 = r1.Object;
                    r0 = r0.prototype;
                    r6 = r0.hasOwnProperty;
                    r3 = r6.call;
                    r2 = _closure1_slot1;
                    r2 = r3.bind(r6)(r2, r4);
                    if(r2) { _fun5185_ip = 148; continue _fun5185 }
case 70:
                    r2 = _closure1_slot0;
                    r2 = r4 in r2;
                    if(!r2) { _fun5185_ip = 101; continue _fun5185 }
case 81:
                    r2 = _closure1_slot0;
                    r3 = r2[r4];
                    r2 = _closure1_slot2;
                    r2 = r2[r4];
                    if(!(r3 !== r2)) { _fun5185_ip = 144; continue _fun5185 }
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
    r6 = 451;
    r5 = [452];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5187: for(var _fun5187_ip = 0; ; ) switch(_fun5187_ip) {
case 0:
            r2 = a5;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun5188: for(var _fun5188_ip = 0; ; ) switch(_fun5188_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun5188_ip = 104; continue _fun5188 }
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
                        _fun5189: for(var _fun5189_ip = 0; ; ) switch(_fun5189_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5189_ip = 15; continue _fun5189 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5189_ip = 19; continue _fun5189;
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
            if(!r3) { _fun5187_ip = 88; continue _fun5187 }
case 74:
            r5 = r3.__esModule;
            r4 = r3;
            if(r5) { _fun5187_ip = 355; continue _fun5187 }
case 88:
            r14 = null;
            if(!(r14 !== r3)) { _fun5187_ip = 346; continue _fun5187 }
case 97:
            r6 = typeof r3;
            r5 = 'object';
            if(!(r5 !== r6)) { _fun5187_ip = 119; continue _fun5187 }
case 108:
            r5 = 'function';
            if(!(r5 === r6)) { _fun5187_ip = 346; continue _fun5187 }
case 119:
            r1 = _closure1_slot0;
            r5 = r1.bind(r0)(r0);
            if(!r5) { _fun5187_ip = 147; continue _fun5187 }
case 131:
            r1 = r5.has;
            r1 = r1.bind(r5)(r3);
            if(r1) { _fun5187_ip = 334; continue _fun5187 }
case 147:
            r1 = Object.create(r14);
            r6 = r15.Object;
            r13 = r6.defineProperty;
            if(!r13) { _fun5187_ip = 175; continue _fun5187 }
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
                if(r7 === r19) { _fun5187_ip = 192; continue _fun5187 }
case 208:
                r16 = {};
                r17 = r16.hasOwnProperty;
                r16 = r17.call;
                r16 = r16.bind(r17)(r3, r19);
                if(!r16) { _fun5187_ip = 192; continue _fun5187 }
case 229:
                r16 = null;
                if(!r13) { _fun5187_ip = 251; continue _fun5187 }
case 234:
                r18 = r15.Object;
                r17 = r18.getOwnPropertyDescriptor;
                r16 = r17.bind(r18)(r3, r19);
case 251:
                if(!r16) { _fun5187_ip = 270; continue _fun5187 }
case 254:
                r17 = r16.get;
                if(r17) { _fun5187_ip = 283; continue _fun5187 }
case 262:
                r17 = r16.set;
                if(r17) { _fun5187_ip = 283; continue _fun5187 }
case 270:
                r17 = r3[r19];
                r1[r19] = r17;
                r6 = r16;
                _fun5187_ip = 192; continue _fun5187;
case 283:
                r18 = r15.Object;
                r17 = r18.defineProperty;
                r17 = r17.bind(r18)(r1, r19, r16);
                r6 = r16;
                _fun5187_ip = 192; continue _fun5187;
            }
case 306:
            r1['default'] = r3;
            r4 = r1;
            if(!r5) { _fun5187_ip = 355; continue _fun5187 }
case 318:
            r6 = r5.set;
            r6 = r6.bind(r5)(r3, r1);
            r4 = r1;
            _fun5187_ip = 355; continue _fun5187;
case 334:
            r1 = r5.get;
            r4 = r1.bind(r5)(r3);
            _fun5187_ip = 355; continue _fun5187;
case 346:
            r1 = {};
            r1['default'] = r3;
            r4 = r1;
case 355:
            r3 = r4.get;
            r1 = 'ActionSheetManager';
            r1 = r3.bind(r4)(r1);
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 452;
    r5 = [36];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r4 = a1;
        r6 = a5;
        r5 = a6;
        var _closure1_slot0 = r4;
        var _closure1_slot1 = r5;
        r0 = function() { // Original name: getState, environment: r2
            _fun5191: for(var _fun5191_ip = 0; ; ) switch(_fun5191_ip) {
case 0:
                r1 = _closure1_slot5;
                r4 = null;
                if(!(r1 == r4)) { _fun5191_ip = 186; continue _fun5191 }
case 18:
                r1 = _closure1_slot3;
                r1 = r1.default;
                r2 = r1.prototype;
                r2 = Object.create(r2, {constructor: {value: r1}});
                r9 = r2;
                r1 = new r9[r1](r8);
                r2 = r1 instanceof Object ? r1 : r2;
                var _closure2_slot0 = r2;
                r6 = _closure1_slot0;
                r5 = _closure1_slot1;
                r1 = 4;
                r5 = r5[r1];
                r1 = undefined;
                r1 = r6.bind(r1)(r5);
                r6 = r1.default;
                if(!(r6 != r4)) { _fun5191_ip = 161; continue _fun5191 }
case 82:
                r1 = {};
                r1['NativeAppearance'] = r6;
                r1['appearance'] = r4;
                r1['eventEmitter'] = r2;
                var _closure2_slot1 = r1;
                r4 = _closure1_slot2;
                r4 = r4.default;
                r5 = r4.prototype;
                r5 = Object.create(r5, {constructor: {value: r4}});
                r9 = r5;
                r8 = r6;
                r4 = new r9[r4](r8, r7);
                r6 = r4 instanceof Object ? r4 : r5;
                r5 = r6.addListener;
                r4 = 'appearanceChanged';
                r3 = function(a0) { // Environment: r3
                    r3 = _closure2_slot1;
                    r2 = {};
                    r5 = _closure1_slot7;
                    r0 = a0;
                    r4 = r0.colorScheme;
                    r0 = undefined;
                    r5 = r5.bind(r0)(r4);
                    r2['colorScheme'] = r4;
                    r3['appearance'] = r2;
                    r4 = _closure2_slot0;
                    r3 = r4.emit;
                    r1 = _closure2_slot1;
                    r2 = r1.appearance;
                    r1 = 'change';
                    r1 = r3.bind(r4)(r1, r2);
                    return r0;
                };
                r3 = r5.bind(r6)(r4, r3);
                var _closure1_slot5 = r1;
                _fun5191_ip = 180; continue _fun5191;
case 161:
                r1 = {'NativeAppearance': null, 'appearance': null};
                r1['eventEmitter'] = r2;
                _closure1_slot5 = r1;
case 180:
                r1 = _closure1_slot5;
                return r1;
case 186:
                r0 = _closure1_slot5;
                return r0;
            }
        };
        var _closure1_slot6 = r0;
        r0 = function(a0) { // Original name: toColorScheme, environment: r2
            _fun5196: for(var _fun5196_ip = 0; ; ) switch(_fun5196_ip) {
case 0:
                r0 = a0;
                r1 = _closure1_slot4;
                r4 = r1.default;
                r1 = 'dark';
                r3 = r0 === r1;
                if(r3) { _fun5196_ip = 34; continue _fun5196 }
case 26:
                r1 = 'light';
                r3 = r0 === r1;
case 34:
                if(r3) { _fun5196_ip = 43; continue _fun5196 }
case 37:
                r1 = null;
                r3 = r0 == r1;
case 43:
                r2 = undefined;
                r1 = "Unrecognized color scheme. Did you mean 'dark', 'light' or null?";
                r1 = r4.bind(r2)(r3, r1);
                return r0;
            }
        };
        var _closure1_slot7 = r0;
        r0 = 0;
        r1 = r5[r0];
        r0 = undefined;
        r3 = r4.bind(r0)(r1);
        r1 = global;
        r9 = r1.Object;
        r8 = r9.defineProperty;
        r7 = {};
        r1 = true;
        r7['value'] = r1;
        r1 = '__esModule';
        r1 = r8.bind(r9)(r6, r1, r7);
        r1 = function(a0) { // Original name: addChangeListener, environment: r2
            r1 = _closure1_slot6;
            r0 = undefined;
            r0 = r1.bind(r0)();
            r3 = r0.eventEmitter;
            r2 = r3.addListener;
            r1 = 'change';
            r0 = a0;
            r0 = r2.bind(r3)(r1, r0);
            return r0;
        };
        r6['addChangeListener'] = r1;
        r1 = function() { // Original name: getColorScheme, environment: r2
            _fun5193: for(var _fun5193_ip = 0; ; ) switch(_fun5193_ip) {
case 0:
                r0 = _closure1_slot6;
                r5 = undefined;
                r1 = r0.bind(r5)();
                r6 = r1.NativeAppearance;
                r4 = null;
                r2 = r6 != r4;
                r0 = null;
                if(!r2) { _fun5193_ip = 84; continue _fun5193 }
case 30:
                r2 = r1.appearance;
                if(!(r2 == r4)) { _fun5193_ip = 72; continue _fun5193 }
case 40:
                r2 = {};
                r4 = _closure1_slot7;
                r3 = r6.getColorScheme;
                r3 = r3.bind(r6)();
                r4 = r4.bind(r5)(r3);
                r2['colorScheme'] = r3;
                r1['appearance'] = r2;
case 72:
                r1 = r1.appearance;
                r0 = r1.colorScheme;
case 84:
                return r0;
            }
        };
        r6['getColorScheme'] = r1;
        r1 = function(a0) { // Original name: setColorScheme, environment: r2
            _fun5194: for(var _fun5194_ip = 0; ; ) switch(_fun5194_ip) {
case 0:
                r6 = a0;
                r1 = _closure1_slot6;
                r0 = undefined;
                r2 = r1.bind(r0)();
                r5 = r2.NativeAppearance;
                r1 = null;
                if(!(r5 != r1)) { _fun5194_ip = 85; continue _fun5194 }
case 28:
                r4 = r5.setColorScheme;
                r7 = r6 != r1;
                r1 = 'unspecified';
                if(!r7) { _fun5194_ip = 48; continue _fun5194 }
case 45:
                r1 = r6;
case 48:
                r1 = r4.bind(r5)(r1);
                r1 = {};
                r4 = _closure1_slot7;
                r3 = r5.getColorScheme;
                r3 = r3.bind(r5)();
                r4 = r4.bind(r0)(r3);
                r1['colorScheme'] = r3;
                r2['appearance'] = r1;
case 85:
                return r0;
            }
        };
        r6['setColorScheme'] = r1;
        r1 = 1;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r3.bind(r0)(r1);
        var _closure1_slot2 = r1;
        r1 = 2;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r3.bind(r0)(r1);
        var _closure1_slot3 = r1;
        r1 = 3;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r3.bind(r0)(r1);
        var _closure1_slot4 = r1;
        return r0;
    };
    r6 = 453;
    r5 = [1, 191, 30, 20, 454];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r4 = a1;
        r2 = a5;
        r5 = a6;
        r0 = 0;
        r1 = r5[r0];
        r0 = undefined;
        r3 = r4.bind(r0)(r1);
        r1 = global;
        r8 = r1.Object;
        r7 = r8.defineProperty;
        r6 = {};
        r1 = true;
        r6['value'] = r1;
        r1 = '__esModule';
        r1 = r7.bind(r8)(r2, r1, r6);
        r2['default'] = r0;
        r1 = 1;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r3.bind(r0)(r1);
        r1 = r1.default;
        r2['default'] = r1;
        return r0;
    };
    r6 = 454;
    r5 = [1, 455];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5198: for(var _fun5198_ip = 0; ; ) switch(_fun5198_ip) {
case 0:
            r2 = a5;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun5199: for(var _fun5199_ip = 0; ; ) switch(_fun5199_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun5199_ip = 104; continue _fun5199 }
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
                        _fun5200: for(var _fun5200_ip = 0; ; ) switch(_fun5200_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5200_ip = 15; continue _fun5200 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5200_ip = 19; continue _fun5200;
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
            if(!r3) { _fun5198_ip = 88; continue _fun5198 }
case 74:
            r5 = r3.__esModule;
            r4 = r3;
            if(r5) { _fun5198_ip = 355; continue _fun5198 }
case 88:
            r14 = null;
            if(!(r14 !== r3)) { _fun5198_ip = 346; continue _fun5198 }
case 97:
            r6 = typeof r3;
            r5 = 'object';
            if(!(r5 !== r6)) { _fun5198_ip = 119; continue _fun5198 }
case 108:
            r5 = 'function';
            if(!(r5 === r6)) { _fun5198_ip = 346; continue _fun5198 }
case 119:
            r1 = _closure1_slot0;
            r5 = r1.bind(r0)(r0);
            if(!r5) { _fun5198_ip = 147; continue _fun5198 }
case 131:
            r1 = r5.has;
            r1 = r1.bind(r5)(r3);
            if(r1) { _fun5198_ip = 334; continue _fun5198 }
case 147:
            r1 = Object.create(r14);
            r6 = r15.Object;
            r13 = r6.defineProperty;
            if(!r13) { _fun5198_ip = 175; continue _fun5198 }
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
                if(r7 === r19) { _fun5198_ip = 192; continue _fun5198 }
case 208:
                r16 = {};
                r17 = r16.hasOwnProperty;
                r16 = r17.call;
                r16 = r16.bind(r17)(r3, r19);
                if(!r16) { _fun5198_ip = 192; continue _fun5198 }
case 229:
                r16 = null;
                if(!r13) { _fun5198_ip = 251; continue _fun5198 }
case 234:
                r18 = r15.Object;
                r17 = r18.getOwnPropertyDescriptor;
                r16 = r17.bind(r18)(r3, r19);
case 251:
                if(!r16) { _fun5198_ip = 270; continue _fun5198 }
case 254:
                r17 = r16.get;
                if(r17) { _fun5198_ip = 283; continue _fun5198 }
case 262:
                r17 = r16.set;
                if(r17) { _fun5198_ip = 283; continue _fun5198 }
case 270:
                r17 = r3[r19];
                r1[r19] = r17;
                r6 = r16;
                _fun5198_ip = 192; continue _fun5198;
case 283:
                r18 = r15.Object;
                r17 = r18.defineProperty;
                r17 = r17.bind(r18)(r1, r19, r16);
                r6 = r16;
                _fun5198_ip = 192; continue _fun5198;
            }
case 306:
            r1['default'] = r3;
            r4 = r1;
            if(!r5) { _fun5198_ip = 355; continue _fun5198 }
case 318:
            r6 = r5.set;
            r6 = r6.bind(r5)(r3, r1);
            r4 = r1;
            _fun5198_ip = 355; continue _fun5198;
case 334:
            r1 = r5.get;
            r4 = r1.bind(r5)(r3);
            _fun5198_ip = 355; continue _fun5198;
case 346:
            r1 = {};
            r1['default'] = r3;
            r4 = r1;
case 355:
            r3 = r4.get;
            r1 = 'Appearance';
            r1 = r3.bind(r4)(r1);
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 455;
    r5 = [36];
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
        r1 = function() { // Environment: r1
            r3 = function() { // Original name: AppStateImpl, environment: r1
                _fun5203: for(var _fun5203_ip = 0; ; ) switch(_fun5203_ip) {
case 0:
                    r2 = this;
                    var _closure3_slot0 = r2;
                    r0 = _closure1_slot0;
                    r5 = r0.default;
                    r4 = _closure2_slot0;
                    r0 = undefined;
                    r4 = r5.bind(r0)(r2, r4);
                    r6 = null;
                    r2['currentState'] = r6;
                    r4 = _closure1_slot5;
                    r4 = r4.default;
                    if(!(r4 != r6)) { _fun5203_ip = 231; continue _fun5203 }
case 59:
                    r4 = true;
                    r2['isAvailable'] = r4;
                    r4 = _closure1_slot2;
                    r4 = r4.default;
                    r5 = _closure1_slot4;
                    r5 = r5.default;
                    r7 = r5.OS;
                    r5 = 'ios';
                    r6 = null;
                    if(!(r7 === r5)) { _fun5203_ip = 109; continue _fun5203 }
case 100:
                    r5 = _closure1_slot5;
                    r6 = r5.default;
case 109:
                    r5 = r4.prototype;
                    r5 = Object.create(r5, {constructor: {value: r4}});
                    r11 = r5;
                    r10 = r6;
                    r4 = new r11[r4](r10, r9);
                    r8 = r4 instanceof Object ? r4 : r5;
                    var _closure3_slot1 = r8;
                    r2['_emitter'] = r8;
                    r4 = _closure1_slot5;
                    r6 = r4.default;
                    r5 = r6.getConstants;
                    r5 = r5.bind(r6)();
                    r5 = r5.initialAppState;
                    r2['currentState'] = r5;
                    r5 = false;
                    var _closure3_slot2 = r5;
                    r7 = r8.addListener;
                    r6 = 'appStateDidChange';
                    r5 = function(a0) { // Environment: r1
                        r1 = true;
                        _closure3_slot2 = r1;
                        r1 = _closure3_slot0;
                        r0 = a0;
                        r0 = r0.app_state;
                        r1['currentState'] = r0;
                        r0 = undefined;
                        return r0;
                    };
                    r5 = r7.bind(r8)(r6, r5);
                    r5 = r4.default;
                    r4 = r5.getCurrentAppState;
                    r3 = _closure1_slot3;
                    r3 = r3.default;
                    r1 = function(a0) { // Environment: r1
                        _fun5205: for(var _fun5205_ip = 0; ; ) switch(_fun5205_ip) {
case 0:
                            r3 = a0;
                            r1 = _closure3_slot2;
                            if(r1) { _fun5205_ip = 69; continue _fun5205 }
case 13:
                            r1 = _closure3_slot0;
                            r2 = r1.currentState;
                            r1 = r3.app_state;
                            if(!(r2 !== r1)) { _fun5205_ip = 69; continue _fun5205 }
case 33:
                            r2 = _closure3_slot0;
                            r1 = r3.app_state;
                            r2['currentState'] = r1;
                            r2 = _closure3_slot1;
                            r1 = r2.emit;
                            r0 = 'appStateDidChange';
                            r0 = r1.bind(r2)(r0, r3);
case 69:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r1 = r4.bind(r5)(r1, r3);
                    _fun5203_ip = 239; continue _fun5203;
case 231:
                    r1 = false;
                    r2['isAvailable'] = r1;
case 239:
                    return r0;
                }
            };
            var _closure2_slot0 = r3;
            r0 = _closure1_slot1;
            r2 = r0.default;
            r0 = {};
            r4 = 'addEventListener';
            r0['key'] = r4;
            r1 = function(a0, a1) { // Original name: addEventListener, environment: r1
                _fun5206: for(var _fun5206_ip = 0; ; ) switch(_fun5206_ip) {
case 0:
                    r5 = a0;
                    r1 = a1;
                    var _closure3_slot0 = r5;
                    r2 = this;
                    r3 = r2._emitter;
                    r2 = null;
                    if(!(r3 != r2)) { _fun5206_ip = 164; continue _fun5206 }
case 29:
                    r2 = 'change';
                    if(!(r2 !== r5)) { _fun5206_ip = 138; continue _fun5206 }
case 37:
                    r4 = 'memoryWarning';
                    if(!(r4 !== r5)) { _fun5206_ip = 125; continue _fun5206 }
case 45:
                    r2 = 'blur';
                    if(!(r2 !== r5)) { _fun5206_ip = 99; continue _fun5206 }
case 53:
                    r2 = 'focus';
                    if(!(r2 !== r5)) { _fun5206_ip = 99; continue _fun5206 }
case 61:
                    r2 = global;
                    r6 = r2.Error;
                    r2 = 'Trying to subscribe to unknown event: ';
                    r8 = r2 + r5;
                    r5 = r6.prototype;
                    r5 = Object.create(r5, {constructor: {value: r6}});
                    r9 = r5;
                    r2 = new r9[r6](r8, r7);
                    r2 = r2 instanceof Object ? r2 : r5;
                    throw r2;
case 99:
                    var _closure3_slot2 = r1;
                    r6 = r3.addListener;
                    r5 = 'appStateFocusChange';
                    r2 = function(a0) { // Environment: r0
                        _fun5208: for(var _fun5208_ip = 0; ; ) switch(_fun5208_ip) {
case 0:
                            r1 = a0;
                            r3 = _closure3_slot0;
                            r2 = 'blur';
                            if(!(r3 === r2)) { _fun5208_ip = 31; continue _fun5208 }
case 18:
                            if(r1) { _fun5208_ip = 31; continue _fun5208 }
case 21:
                            r3 = _closure3_slot2;
                            r2 = undefined;
                            r2 = r3.bind(r2)();
case 31:
                            r3 = _closure3_slot0;
                            r2 = 'focus';
                            if(!(r3 === r2)) { _fun5208_ip = 56; continue _fun5208 }
case 43:
                            if(!r1) { _fun5208_ip = 56; continue _fun5208 }
case 46:
                            r1 = _closure3_slot2;
                            r0 = undefined;
                            r0 = r1.bind(r0)();
case 56:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r2 = r6.bind(r3)(r5, r2);
                    return r2;
case 125:
                    r2 = r3.addListener;
                    r2 = r2.bind(r3)(r4, r1);
                    return r2;
case 138:
                    var _closure3_slot1 = r1;
                    r2 = r3.addListener;
                    r1 = 'appStateDidChange';
                    r0 = function(a0) { // Environment: r0
                        r2 = _closure3_slot1;
                        r0 = a0;
                        r1 = r0.app_state;
                        r0 = undefined;
                        r1 = r2.bind(r0)(r1);
                        return r0;
                    };
                    r0 = r2.bind(r3)(r1, r0);
                    return r0;
case 164:
                    r0 = global;
                    r2 = r0.Error;
                    r0 = r2.prototype;
                    r1 = Object.create(r0, {constructor: {value: r2}});
                    r8 = 'Cannot use AppState when `isAvailable` is false.';
                    r9 = r1;
                    r0 = new r9[r2](r8, r7);
                    r0 = r0 instanceof Object ? r0 : r1;
                    throw r0;
                }
            };
            r0['value'] = r1;
            r1 = new Array(1);
            r1[0] = r0;
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
    r6 = 456;
    r5 = [1, 12, 13, 191, 457, 33, 458];
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
        r1 = function() { // Original name: logError, environment: r1
            _fun5210: for(var _fun5210_ip = 0; ; ) switch(_fun5210_ip) {
case 0:
                r0 = undefined;
                r6 = undefined;
                r5 = arguments.length;
                r2 = global;
                r1 = r2.Array;
                r3 = r1.prototype;
                r3 = Object.create(r3, {constructor: {value: r1}});
                r10 = r3;
                r9 = r5;
                r1 = new r10[r1](r9, r8);
                r3 = r1 instanceof Object ? r1 : r3;
                r1 = 0;
                r7 = r1 < r5;
                r4 = 0;
                if(!r7) { _fun5210_ip = 64; continue _fun5210 }
case 49:
                r7 = arguments[r4];
                r3[r4] = r7;
                r4 = r4 + 1;
                if(r4 < r5) { _fun5210_ip = 49; continue _fun5210 }
case 64:
                r5 = r3.length;
                r4 = 1;
                if(!(r5 === r4)) { _fun5210_ip = 93; continue _fun5210 }
case 76:
                r5 = r3[r1];
                r4 = r2.Error;
                r4 = r5 instanceof r4;
                if(r4) { _fun5210_ip = 123; continue _fun5210 }
case 93:
                r4 = r2.console;
                r6 = r4.error;
                r5 = r6.apply;
                r4 = r2.console;
                r4 = r5.bind(r6)(r4, r3);
                _fun5210_ip = 173; continue _fun5210;
case 123:
                r1 = r3[r1];
                r3 = r2.console;
                r2 = r3.error;
                r5 = r1.message;
                r4 = 'Error: "';
                r5 = r4 + r5;
                r4 = r1.stack;
                r1 = '".  Stack:\n';
                r1 = r5 + r1;
                r1 = r1 + r4;
                r1 = r2.bind(r3)(r1);
case 173:
                return r0;
            }
        };
        r2['default'] = r1;
        return r0;
    };
    r6 = 457;
    r5 = new Array(0);
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5211: for(var _fun5211_ip = 0; ; ) switch(_fun5211_ip) {
case 0:
            r2 = a5;
            var _closure1_slot0 = r2;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r3
                _fun5212: for(var _fun5212_ip = 0; ; ) switch(_fun5212_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun5212_ip = 104; continue _fun5212 }
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
                        _fun5213: for(var _fun5213_ip = 0; ; ) switch(_fun5213_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5213_ip = 15; continue _fun5213 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5213_ip = 19; continue _fun5213;
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
            if(!r6) { _fun5211_ip = 98; continue _fun5211 }
case 84:
            r5 = r6.__esModule;
            r1 = r6;
            if(r5) { _fun5211_ip = 365; continue _fun5211 }
case 98:
            r16 = null;
            if(!(r16 !== r6)) { _fun5211_ip = 356; continue _fun5211 }
case 107:
            r7 = typeof r6;
            r5 = 'object';
            if(!(r5 !== r7)) { _fun5211_ip = 129; continue _fun5211 }
case 118:
            r5 = 'function';
            if(!(r5 === r7)) { _fun5211_ip = 356; continue _fun5211 }
case 129:
            r5 = _closure1_slot3;
            r7 = r5.bind(r0)(r0);
            if(!r7) { _fun5211_ip = 157; continue _fun5211 }
case 141:
            r5 = r7.has;
            r5 = r5.bind(r7)(r6);
            if(r5) { _fun5211_ip = 344; continue _fun5211 }
case 157:
            r5 = Object.create(r16);
            r8 = r4.Object;
            r15 = r8.defineProperty;
            if(!r15) { _fun5211_ip = 185; continue _fun5211 }
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
                if(r9 === r20) { _fun5211_ip = 202; continue _fun5211 }
case 218:
                r17 = {};
                r18 = r17.hasOwnProperty;
                r17 = r18.call;
                r17 = r17.bind(r18)(r6, r20);
                if(!r17) { _fun5211_ip = 202; continue _fun5211 }
case 239:
                r17 = null;
                if(!r15) { _fun5211_ip = 261; continue _fun5211 }
case 244:
                r19 = r4.Object;
                r18 = r19.getOwnPropertyDescriptor;
                r17 = r18.bind(r19)(r6, r20);
case 261:
                if(!r17) { _fun5211_ip = 280; continue _fun5211 }
case 264:
                r18 = r17.get;
                if(r18) { _fun5211_ip = 293; continue _fun5211 }
case 272:
                r18 = r17.set;
                if(r18) { _fun5211_ip = 293; continue _fun5211 }
case 280:
                r18 = r6[r20];
                r5[r20] = r18;
                r8 = r17;
                _fun5211_ip = 202; continue _fun5211;
case 293:
                r19 = r4.Object;
                r18 = r19.defineProperty;
                r18 = r18.bind(r19)(r5, r20, r17);
                r8 = r17;
                _fun5211_ip = 202; continue _fun5211;
            }
case 316:
            r5['default'] = r6;
            r1 = r5;
            if(!r7) { _fun5211_ip = 365; continue _fun5211 }
case 328:
            r8 = r7.set;
            r8 = r8.bind(r7)(r6, r5);
            r1 = r5;
            _fun5211_ip = 365; continue _fun5211;
case 344:
            r5 = r7.get;
            r1 = r5.bind(r7)(r6);
            _fun5211_ip = 365; continue _fun5211;
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
                _fun5214: for(var _fun5214_ip = 0; ; ) switch(_fun5214_ip) {
case 0:
                    r4 = a0;
                    var _closure2_slot0 = r4;
                    r0 = 'default';
                    if(!(r4 !== r0)) { _fun5214_ip = 152; continue _fun5214 }
case 20:
                    r0 = '__esModule';
                    if(!(r4 !== r0)) { _fun5214_ip = 152; continue _fun5214 }
case 31:
                    r1 = global;
                    r0 = r1.Object;
                    r0 = r0.prototype;
                    r6 = r0.hasOwnProperty;
                    r3 = r6.call;
                    r2 = _closure1_slot1;
                    r2 = r3.bind(r6)(r2, r4);
                    if(r2) { _fun5214_ip = 148; continue _fun5214 }
case 70:
                    r2 = _closure1_slot0;
                    r2 = r4 in r2;
                    if(!r2) { _fun5214_ip = 101; continue _fun5214 }
case 81:
                    r2 = _closure1_slot0;
                    r3 = r2[r4];
                    r2 = _closure1_slot2;
                    r2 = r2[r4];
                    if(!(r3 !== r2)) { _fun5214_ip = 144; continue _fun5214 }
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
    r6 = 458;
    r5 = [459];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5216: for(var _fun5216_ip = 0; ; ) switch(_fun5216_ip) {
case 0:
            r2 = a5;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun5217: for(var _fun5217_ip = 0; ; ) switch(_fun5217_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun5217_ip = 104; continue _fun5217 }
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
                        _fun5218: for(var _fun5218_ip = 0; ; ) switch(_fun5218_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5218_ip = 15; continue _fun5218 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5218_ip = 19; continue _fun5218;
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
            if(!r3) { _fun5216_ip = 88; continue _fun5216 }
case 74:
            r5 = r3.__esModule;
            r4 = r3;
            if(r5) { _fun5216_ip = 355; continue _fun5216 }
case 88:
            r14 = null;
            if(!(r14 !== r3)) { _fun5216_ip = 346; continue _fun5216 }
case 97:
            r6 = typeof r3;
            r5 = 'object';
            if(!(r5 !== r6)) { _fun5216_ip = 119; continue _fun5216 }
case 108:
            r5 = 'function';
            if(!(r5 === r6)) { _fun5216_ip = 346; continue _fun5216 }
case 119:
            r1 = _closure1_slot0;
            r5 = r1.bind(r0)(r0);
            if(!r5) { _fun5216_ip = 147; continue _fun5216 }
case 131:
            r1 = r5.has;
            r1 = r1.bind(r5)(r3);
            if(r1) { _fun5216_ip = 334; continue _fun5216 }
case 147:
            r1 = Object.create(r14);
            r6 = r15.Object;
            r13 = r6.defineProperty;
            if(!r13) { _fun5216_ip = 175; continue _fun5216 }
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
                if(r7 === r19) { _fun5216_ip = 192; continue _fun5216 }
case 208:
                r16 = {};
                r17 = r16.hasOwnProperty;
                r16 = r17.call;
                r16 = r16.bind(r17)(r3, r19);
                if(!r16) { _fun5216_ip = 192; continue _fun5216 }
case 229:
                r16 = null;
                if(!r13) { _fun5216_ip = 251; continue _fun5216 }
case 234:
                r18 = r15.Object;
                r17 = r18.getOwnPropertyDescriptor;
                r16 = r17.bind(r18)(r3, r19);
case 251:
                if(!r16) { _fun5216_ip = 270; continue _fun5216 }
case 254:
                r17 = r16.get;
                if(r17) { _fun5216_ip = 283; continue _fun5216 }
case 262:
                r17 = r16.set;
                if(r17) { _fun5216_ip = 283; continue _fun5216 }
case 270:
                r17 = r3[r19];
                r1[r19] = r17;
                r6 = r16;
                _fun5216_ip = 192; continue _fun5216;
case 283:
                r18 = r15.Object;
                r17 = r18.defineProperty;
                r17 = r17.bind(r18)(r1, r19, r16);
                r6 = r16;
                _fun5216_ip = 192; continue _fun5216;
            }
case 306:
            r1['default'] = r3;
            r4 = r1;
            if(!r5) { _fun5216_ip = 355; continue _fun5216 }
case 318:
            r6 = r5.set;
            r6 = r6.bind(r5)(r3, r1);
            r4 = r1;
            _fun5216_ip = 355; continue _fun5216;
case 334:
            r1 = r5.get;
            r4 = r1.bind(r5)(r3);
            _fun5216_ip = 355; continue _fun5216;
case 346:
            r1 = {};
            r1['default'] = r3;
            r4 = r1;
case 355:
            r3 = r4.getEnforcing;
            r1 = 'AppState';
            r1 = r3.bind(r4)(r1);
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 459;
    r5 = [36];
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
        r4 = function() { // Original name: getString, environment: r3
            r0 = _closure1_slot0;
            r1 = r0.default;
            r0 = r1.getString;
            r0 = r0.bind(r1)();
            return r0;
        };
        r1['getString'] = r4;
        r3 = function(a0) { // Original name: setString, environment: r3
            r0 = _closure1_slot0;
            r2 = r0.default;
            r1 = r2.setString;
            r0 = a0;
            r0 = r1.bind(r2)(r0);
            r0 = undefined;
            return r0;
        };
        r1['setString'] = r3;
        r2['default'] = r1;
        return r0;
    };
    r6 = 460;
    r5 = [1, 461];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5222: for(var _fun5222_ip = 0; ; ) switch(_fun5222_ip) {
case 0:
            r2 = a5;
            var _closure1_slot0 = r2;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r3
                _fun5223: for(var _fun5223_ip = 0; ; ) switch(_fun5223_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun5223_ip = 104; continue _fun5223 }
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
                        _fun5224: for(var _fun5224_ip = 0; ; ) switch(_fun5224_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5224_ip = 15; continue _fun5224 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5224_ip = 19; continue _fun5224;
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
            if(!r6) { _fun5222_ip = 98; continue _fun5222 }
case 84:
            r5 = r6.__esModule;
            r1 = r6;
            if(r5) { _fun5222_ip = 365; continue _fun5222 }
case 98:
            r16 = null;
            if(!(r16 !== r6)) { _fun5222_ip = 356; continue _fun5222 }
case 107:
            r7 = typeof r6;
            r5 = 'object';
            if(!(r5 !== r7)) { _fun5222_ip = 129; continue _fun5222 }
case 118:
            r5 = 'function';
            if(!(r5 === r7)) { _fun5222_ip = 356; continue _fun5222 }
case 129:
            r5 = _closure1_slot3;
            r7 = r5.bind(r0)(r0);
            if(!r7) { _fun5222_ip = 157; continue _fun5222 }
case 141:
            r5 = r7.has;
            r5 = r5.bind(r7)(r6);
            if(r5) { _fun5222_ip = 344; continue _fun5222 }
case 157:
            r5 = Object.create(r16);
            r8 = r4.Object;
            r15 = r8.defineProperty;
            if(!r15) { _fun5222_ip = 185; continue _fun5222 }
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
                if(r9 === r20) { _fun5222_ip = 202; continue _fun5222 }
case 218:
                r17 = {};
                r18 = r17.hasOwnProperty;
                r17 = r18.call;
                r17 = r17.bind(r18)(r6, r20);
                if(!r17) { _fun5222_ip = 202; continue _fun5222 }
case 239:
                r17 = null;
                if(!r15) { _fun5222_ip = 261; continue _fun5222 }
case 244:
                r19 = r4.Object;
                r18 = r19.getOwnPropertyDescriptor;
                r17 = r18.bind(r19)(r6, r20);
case 261:
                if(!r17) { _fun5222_ip = 280; continue _fun5222 }
case 264:
                r18 = r17.get;
                if(r18) { _fun5222_ip = 293; continue _fun5222 }
case 272:
                r18 = r17.set;
                if(r18) { _fun5222_ip = 293; continue _fun5222 }
case 280:
                r18 = r6[r20];
                r5[r20] = r18;
                r8 = r17;
                _fun5222_ip = 202; continue _fun5222;
case 293:
                r19 = r4.Object;
                r18 = r19.defineProperty;
                r18 = r18.bind(r19)(r5, r20, r17);
                r8 = r17;
                _fun5222_ip = 202; continue _fun5222;
            }
case 316:
            r5['default'] = r6;
            r1 = r5;
            if(!r7) { _fun5222_ip = 365; continue _fun5222 }
case 328:
            r8 = r7.set;
            r8 = r8.bind(r7)(r6, r5);
            r1 = r5;
            _fun5222_ip = 365; continue _fun5222;
case 344:
            r5 = r7.get;
            r1 = r5.bind(r7)(r6);
            _fun5222_ip = 365; continue _fun5222;
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
                _fun5225: for(var _fun5225_ip = 0; ; ) switch(_fun5225_ip) {
case 0:
                    r4 = a0;
                    var _closure2_slot0 = r4;
                    r0 = 'default';
                    if(!(r4 !== r0)) { _fun5225_ip = 152; continue _fun5225 }
case 20:
                    r0 = '__esModule';
                    if(!(r4 !== r0)) { _fun5225_ip = 152; continue _fun5225 }
case 31:
                    r1 = global;
                    r0 = r1.Object;
                    r0 = r0.prototype;
                    r6 = r0.hasOwnProperty;
                    r3 = r6.call;
                    r2 = _closure1_slot1;
                    r2 = r3.bind(r6)(r2, r4);
                    if(r2) { _fun5225_ip = 148; continue _fun5225 }
case 70:
                    r2 = _closure1_slot0;
                    r2 = r4 in r2;
                    if(!r2) { _fun5225_ip = 101; continue _fun5225 }
case 81:
                    r2 = _closure1_slot0;
                    r3 = r2[r4];
                    r2 = _closure1_slot2;
                    r2 = r2[r4];
                    if(!(r3 !== r2)) { _fun5225_ip = 144; continue _fun5225 }
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
    r6 = 461;
    r5 = [462];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5227: for(var _fun5227_ip = 0; ; ) switch(_fun5227_ip) {
case 0:
            r2 = a5;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun5228: for(var _fun5228_ip = 0; ; ) switch(_fun5228_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun5228_ip = 104; continue _fun5228 }
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
                        _fun5229: for(var _fun5229_ip = 0; ; ) switch(_fun5229_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5229_ip = 15; continue _fun5229 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5229_ip = 19; continue _fun5229;
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
            if(!r3) { _fun5227_ip = 88; continue _fun5227 }
case 74:
            r5 = r3.__esModule;
            r4 = r3;
            if(r5) { _fun5227_ip = 355; continue _fun5227 }
case 88:
            r14 = null;
            if(!(r14 !== r3)) { _fun5227_ip = 346; continue _fun5227 }
case 97:
            r6 = typeof r3;
            r5 = 'object';
            if(!(r5 !== r6)) { _fun5227_ip = 119; continue _fun5227 }
case 108:
            r5 = 'function';
            if(!(r5 === r6)) { _fun5227_ip = 346; continue _fun5227 }
case 119:
            r1 = _closure1_slot0;
            r5 = r1.bind(r0)(r0);
            if(!r5) { _fun5227_ip = 147; continue _fun5227 }
case 131:
            r1 = r5.has;
            r1 = r1.bind(r5)(r3);
            if(r1) { _fun5227_ip = 334; continue _fun5227 }
case 147:
            r1 = Object.create(r14);
            r6 = r15.Object;
            r13 = r6.defineProperty;
            if(!r13) { _fun5227_ip = 175; continue _fun5227 }
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
                if(r7 === r19) { _fun5227_ip = 192; continue _fun5227 }
case 208:
                r16 = {};
                r17 = r16.hasOwnProperty;
                r16 = r17.call;
                r16 = r16.bind(r17)(r3, r19);
                if(!r16) { _fun5227_ip = 192; continue _fun5227 }
case 229:
                r16 = null;
                if(!r13) { _fun5227_ip = 251; continue _fun5227 }
case 234:
                r18 = r15.Object;
                r17 = r18.getOwnPropertyDescriptor;
                r16 = r17.bind(r18)(r3, r19);
case 251:
                if(!r16) { _fun5227_ip = 270; continue _fun5227 }
case 254:
                r17 = r16.get;
                if(r17) { _fun5227_ip = 283; continue _fun5227 }
case 262:
                r17 = r16.set;
                if(r17) { _fun5227_ip = 283; continue _fun5227 }
case 270:
                r17 = r3[r19];
                r1[r19] = r17;
                r6 = r16;
                _fun5227_ip = 192; continue _fun5227;
case 283:
                r18 = r15.Object;
                r17 = r18.defineProperty;
                r17 = r17.bind(r18)(r1, r19, r16);
                r6 = r16;
                _fun5227_ip = 192; continue _fun5227;
            }
case 306:
            r1['default'] = r3;
            r4 = r1;
            if(!r5) { _fun5227_ip = 355; continue _fun5227 }
case 318:
            r6 = r5.set;
            r6 = r6.bind(r5)(r3, r1);
            r4 = r1;
            _fun5227_ip = 355; continue _fun5227;
case 334:
            r1 = r5.get;
            r4 = r1.bind(r5)(r3);
            _fun5227_ip = 355; continue _fun5227;
case 346:
            r1 = {};
            r1['default'] = r3;
            r4 = r1;
case 355:
            r3 = r4.getEnforcing;
            r1 = 'Clipboard';
            r1 = r3.bind(r4)(r1);
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 462;
    r5 = [36];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r4 = a1;
        r2 = a5;
        r5 = a6;
        r0 = 0;
        r1 = r5[r0];
        r0 = undefined;
        r3 = r4.bind(r0)(r1);
        r1 = global;
        r8 = r1.Object;
        r7 = r8.defineProperty;
        r6 = {};
        r1 = true;
        r6['value'] = r1;
        r1 = '__esModule';
        r1 = r7.bind(r8)(r2, r1, r6);
        r2['default'] = r0;
        r1 = 1;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r3.bind(r0)(r1);
        r1 = r1.default;
        r2['default'] = r1;
        return r0;
    };
    r6 = 463;
    r5 = [1, 114];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r4 = a1;
        r2 = a5;
        r5 = a6;
        r0 = 0;
        r1 = r5[r0];
        r0 = undefined;
        r3 = r4.bind(r0)(r1);
        r1 = global;
        r8 = r1.Object;
        r7 = r8.defineProperty;
        r6 = {};
        r1 = true;
        r6['value'] = r1;
        r1 = '__esModule';
        r1 = r7.bind(r8)(r2, r1, r6);
        r2['default'] = r0;
        r1 = 1;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r3.bind(r0)(r1);
        r1 = {};
        r3 = function() { // Original name: show, environment: r3
            r0 = undefined;
            return r0;
        };
        r1['show'] = r3;
        r2['default'] = r1;
        return r0;
    };
    r6 = 464;
    r5 = [1, 465];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5233: for(var _fun5233_ip = 0; ; ) switch(_fun5233_ip) {
case 0:
            r2 = a5;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun5234: for(var _fun5234_ip = 0; ; ) switch(_fun5234_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun5234_ip = 104; continue _fun5234 }
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
                        _fun5235: for(var _fun5235_ip = 0; ; ) switch(_fun5235_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5235_ip = 15; continue _fun5235 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5235_ip = 19; continue _fun5235;
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
            if(!r3) { _fun5233_ip = 88; continue _fun5233 }
case 74:
            r5 = r3.__esModule;
            r4 = r3;
            if(r5) { _fun5233_ip = 355; continue _fun5233 }
case 88:
            r14 = null;
            if(!(r14 !== r3)) { _fun5233_ip = 346; continue _fun5233 }
case 97:
            r6 = typeof r3;
            r5 = 'object';
            if(!(r5 !== r6)) { _fun5233_ip = 119; continue _fun5233 }
case 108:
            r5 = 'function';
            if(!(r5 === r6)) { _fun5233_ip = 346; continue _fun5233 }
case 119:
            r1 = _closure1_slot0;
            r5 = r1.bind(r0)(r0);
            if(!r5) { _fun5233_ip = 147; continue _fun5233 }
case 131:
            r1 = r5.has;
            r1 = r1.bind(r5)(r3);
            if(r1) { _fun5233_ip = 334; continue _fun5233 }
case 147:
            r1 = Object.create(r14);
            r6 = r15.Object;
            r13 = r6.defineProperty;
            if(!r13) { _fun5233_ip = 175; continue _fun5233 }
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
                if(r7 === r19) { _fun5233_ip = 192; continue _fun5233 }
case 208:
                r16 = {};
                r17 = r16.hasOwnProperty;
                r16 = r17.call;
                r16 = r16.bind(r17)(r3, r19);
                if(!r16) { _fun5233_ip = 192; continue _fun5233 }
case 229:
                r16 = null;
                if(!r13) { _fun5233_ip = 251; continue _fun5233 }
case 234:
                r18 = r15.Object;
                r17 = r18.getOwnPropertyDescriptor;
                r16 = r17.bind(r18)(r3, r19);
case 251:
                if(!r16) { _fun5233_ip = 270; continue _fun5233 }
case 254:
                r17 = r16.get;
                if(r17) { _fun5233_ip = 283; continue _fun5233 }
case 262:
                r17 = r16.set;
                if(r17) { _fun5233_ip = 283; continue _fun5233 }
case 270:
                r17 = r3[r19];
                r1[r19] = r17;
                r6 = r16;
                _fun5233_ip = 192; continue _fun5233;
case 283:
                r18 = r15.Object;
                r17 = r18.defineProperty;
                r17 = r17.bind(r18)(r1, r19, r16);
                r6 = r16;
                _fun5233_ip = 192; continue _fun5233;
            }
case 306:
            r1['default'] = r3;
            r4 = r1;
            if(!r5) { _fun5233_ip = 355; continue _fun5233 }
case 318:
            r6 = r5.set;
            r6 = r6.bind(r5)(r3, r1);
            r4 = r1;
            _fun5233_ip = 355; continue _fun5233;
case 334:
            r1 = r5.get;
            r4 = r1.bind(r5)(r3);
            _fun5233_ip = 355; continue _fun5233;
case 346:
            r1 = {};
            r1['default'] = r3;
            r4 = r1;
case 355:
            r3 = r4.getEnforcing;
            r1 = 'DevMenu';
            r1 = r3.bind(r4)(r1);
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 465;
    r5 = [36];
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
        r1 = 2;
        r1 = r6[r1];
        r1 = r5.bind(r0)(r1);
        r1 = r4.bind(r0)(r1);
        r1 = 3;
        r1 = r6[r1];
        r1 = r5.bind(r0)(r1);
        r1 = r4.bind(r0)(r1);
        r1 = {};
        r4 = function(a0, a1) { // Original name: addMenuItem, environment: r3
            r0 = undefined;
            return r0;
        };
        r1['addMenuItem'] = r4;
        r4 = function(a0) { // Original name: reload, environment: r3
            r0 = undefined;
            return r0;
        };
        r1['reload'] = r4;
        r3 = function() { // Original name: onFastRefresh, environment: r3
            r0 = undefined;
            return r0;
        };
        r1['onFastRefresh'] = r3;
        r2['default'] = r1;
        return r0;
    };
    r6 = 466;
    r5 = [1, 191, 467, 33];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5240: for(var _fun5240_ip = 0; ; ) switch(_fun5240_ip) {
case 0:
            r2 = a5;
            var _closure1_slot0 = r2;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r3
                _fun5241: for(var _fun5241_ip = 0; ; ) switch(_fun5241_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun5241_ip = 104; continue _fun5241 }
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
                        _fun5242: for(var _fun5242_ip = 0; ; ) switch(_fun5242_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5242_ip = 15; continue _fun5242 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5242_ip = 19; continue _fun5242;
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
            if(!r6) { _fun5240_ip = 98; continue _fun5240 }
case 84:
            r5 = r6.__esModule;
            r1 = r6;
            if(r5) { _fun5240_ip = 365; continue _fun5240 }
case 98:
            r16 = null;
            if(!(r16 !== r6)) { _fun5240_ip = 356; continue _fun5240 }
case 107:
            r7 = typeof r6;
            r5 = 'object';
            if(!(r5 !== r7)) { _fun5240_ip = 129; continue _fun5240 }
case 118:
            r5 = 'function';
            if(!(r5 === r7)) { _fun5240_ip = 356; continue _fun5240 }
case 129:
            r5 = _closure1_slot3;
            r7 = r5.bind(r0)(r0);
            if(!r7) { _fun5240_ip = 157; continue _fun5240 }
case 141:
            r5 = r7.has;
            r5 = r5.bind(r7)(r6);
            if(r5) { _fun5240_ip = 344; continue _fun5240 }
case 157:
            r5 = Object.create(r16);
            r8 = r4.Object;
            r15 = r8.defineProperty;
            if(!r15) { _fun5240_ip = 185; continue _fun5240 }
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
                if(r9 === r20) { _fun5240_ip = 202; continue _fun5240 }
case 218:
                r17 = {};
                r18 = r17.hasOwnProperty;
                r17 = r18.call;
                r17 = r17.bind(r18)(r6, r20);
                if(!r17) { _fun5240_ip = 202; continue _fun5240 }
case 239:
                r17 = null;
                if(!r15) { _fun5240_ip = 261; continue _fun5240 }
case 244:
                r19 = r4.Object;
                r18 = r19.getOwnPropertyDescriptor;
                r17 = r18.bind(r19)(r6, r20);
case 261:
                if(!r17) { _fun5240_ip = 280; continue _fun5240 }
case 264:
                r18 = r17.get;
                if(r18) { _fun5240_ip = 293; continue _fun5240 }
case 272:
                r18 = r17.set;
                if(r18) { _fun5240_ip = 293; continue _fun5240 }
case 280:
                r18 = r6[r20];
                r5[r20] = r18;
                r8 = r17;
                _fun5240_ip = 202; continue _fun5240;
case 293:
                r19 = r4.Object;
                r18 = r19.defineProperty;
                r18 = r18.bind(r19)(r5, r20, r17);
                r8 = r17;
                _fun5240_ip = 202; continue _fun5240;
            }
case 316:
            r5['default'] = r6;
            r1 = r5;
            if(!r7) { _fun5240_ip = 365; continue _fun5240 }
case 328:
            r8 = r7.set;
            r8 = r8.bind(r7)(r6, r5);
            r1 = r5;
            _fun5240_ip = 365; continue _fun5240;
case 344:
            r5 = r7.get;
            r1 = r5.bind(r7)(r6);
            _fun5240_ip = 365; continue _fun5240;
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
                _fun5243: for(var _fun5243_ip = 0; ; ) switch(_fun5243_ip) {
case 0:
                    r4 = a0;
                    var _closure2_slot0 = r4;
                    r0 = 'default';
                    if(!(r4 !== r0)) { _fun5243_ip = 152; continue _fun5243 }
case 20:
                    r0 = '__esModule';
                    if(!(r4 !== r0)) { _fun5243_ip = 152; continue _fun5243 }
case 31:
                    r1 = global;
                    r0 = r1.Object;
                    r0 = r0.prototype;
                    r6 = r0.hasOwnProperty;
                    r3 = r6.call;
                    r2 = _closure1_slot1;
                    r2 = r3.bind(r6)(r2, r4);
                    if(r2) { _fun5243_ip = 148; continue _fun5243 }
case 70:
                    r2 = _closure1_slot0;
                    r2 = r4 in r2;
                    if(!r2) { _fun5243_ip = 101; continue _fun5243 }
case 81:
                    r2 = _closure1_slot0;
                    r3 = r2[r4];
                    r2 = _closure1_slot2;
                    r2 = r2[r4];
                    if(!(r3 !== r2)) { _fun5243_ip = 144; continue _fun5243 }
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
    r6 = 467;
    r5 = [468];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5245: for(var _fun5245_ip = 0; ; ) switch(_fun5245_ip) {
case 0:
            r2 = a5;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun5246: for(var _fun5246_ip = 0; ; ) switch(_fun5246_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun5246_ip = 104; continue _fun5246 }
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
                        _fun5247: for(var _fun5247_ip = 0; ; ) switch(_fun5247_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5247_ip = 15; continue _fun5247 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5247_ip = 19; continue _fun5247;
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
            if(!r3) { _fun5245_ip = 88; continue _fun5245 }
case 74:
            r5 = r3.__esModule;
            r4 = r3;
            if(r5) { _fun5245_ip = 355; continue _fun5245 }
case 88:
            r14 = null;
            if(!(r14 !== r3)) { _fun5245_ip = 346; continue _fun5245 }
case 97:
            r6 = typeof r3;
            r5 = 'object';
            if(!(r5 !== r6)) { _fun5245_ip = 119; continue _fun5245 }
case 108:
            r5 = 'function';
            if(!(r5 === r6)) { _fun5245_ip = 346; continue _fun5245 }
case 119:
            r1 = _closure1_slot0;
            r5 = r1.bind(r0)(r0);
            if(!r5) { _fun5245_ip = 147; continue _fun5245 }
case 131:
            r1 = r5.has;
            r1 = r1.bind(r5)(r3);
            if(r1) { _fun5245_ip = 334; continue _fun5245 }
case 147:
            r1 = Object.create(r14);
            r6 = r15.Object;
            r13 = r6.defineProperty;
            if(!r13) { _fun5245_ip = 175; continue _fun5245 }
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
                if(r7 === r19) { _fun5245_ip = 192; continue _fun5245 }
case 208:
                r16 = {};
                r17 = r16.hasOwnProperty;
                r16 = r17.call;
                r16 = r16.bind(r17)(r3, r19);
                if(!r16) { _fun5245_ip = 192; continue _fun5245 }
case 229:
                r16 = null;
                if(!r13) { _fun5245_ip = 251; continue _fun5245 }
case 234:
                r18 = r15.Object;
                r17 = r18.getOwnPropertyDescriptor;
                r16 = r17.bind(r18)(r3, r19);
case 251:
                if(!r16) { _fun5245_ip = 270; continue _fun5245 }
case 254:
                r17 = r16.get;
                if(r17) { _fun5245_ip = 283; continue _fun5245 }
case 262:
                r17 = r16.set;
                if(r17) { _fun5245_ip = 283; continue _fun5245 }
case 270:
                r17 = r3[r19];
                r1[r19] = r17;
                r6 = r16;
                _fun5245_ip = 192; continue _fun5245;
case 283:
                r18 = r15.Object;
                r17 = r18.defineProperty;
                r17 = r17.bind(r18)(r1, r19, r16);
                r6 = r16;
                _fun5245_ip = 192; continue _fun5245;
            }
case 306:
            r1['default'] = r3;
            r4 = r1;
            if(!r5) { _fun5245_ip = 355; continue _fun5245 }
case 318:
            r6 = r5.set;
            r6 = r6.bind(r5)(r3, r1);
            r4 = r1;
            _fun5245_ip = 355; continue _fun5245;
case 334:
            r1 = r5.get;
            r4 = r1.bind(r5)(r3);
            _fun5245_ip = 355; continue _fun5245;
case 346:
            r1 = {};
            r1['default'] = r3;
            r4 = r1;
case 355:
            r3 = r4.getEnforcing;
            r1 = 'DevSettings';
            r1 = r3.bind(r4)(r1);
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 468;
    r5 = [36];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r6 = a1;
        r2 = a5;
        r7 = a6;
        r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r1
            _fun5249: for(var _fun5249_ip = 0; ; ) switch(_fun5249_ip) {
case 0:
                r3 = a0;
                r5 = a2;
                r0 = _closure1_slot3;
                r1 = r0.default;
                r2 = undefined;
                r0 = a1;
                r8 = r1.bind(r2)(r0);
                r0 = _closure1_slot2;
                r1 = r0.default;
                r0 = _closure1_slot11;
                r0 = r0.bind(r2)();
                if(r0) { _fun5249_ip = 61; continue _fun5249 }
case 48:
                r0 = r8.apply;
                r0 = r0.bind(r8)(r3, r5);
                _fun5249_ip = 107; continue _fun5249;
case 61:
                r6 = global;
                r7 = r6.Reflect;
                r6 = r7.construct;
                if(r5) { _fun5249_ip = 81; continue _fun5249 }
case 77:
                r5 = new Array(0);
case 81:
                r4 = _closure1_slot3;
                r4 = r4.default;
                r4 = r4.bind(r2)(r3);
                r4 = r4.constructor;
                r0 = r6.bind(r7)(r8, r5, r4);
case 107:
                r0 = r1.bind(r2)(r3, r0);
                return r0;
            }
        };
        var _closure1_slot10 = r0;
        r0 = function() { // Original name: _isNativeReflectConstruct, environment: r1
            _fun5250: for(var _fun5250_ip = 0; ; ) switch(_fun5250_ip) {
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
                _fun5250_ip = 74; continue _fun5250;
case 72: // catch_target0
                CatchBlockStart(arg_register=1);
case 74:
                r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                    r0 = _closure2_slot0;
                    r0 = !r0;
                    r0 = !r0;
                    return r0;
                };
                _closure1_slot11 = r1;
                r0 = undefined;
                r0 = r1.bind(r0)();
                return r0;
            }
        };
        var _closure1_slot11 = r0;
        r0 = 0;
        r3 = r7[r0];
        r0 = undefined;
        r5 = r6.bind(r0)(r3);
        r3 = global;
        r9 = r3.Object;
        r8 = r9.defineProperty;
        r4 = {};
        r3 = true;
        r4['value'] = r3;
        r3 = '__esModule';
        r3 = r8.bind(r9)(r2, r3, r4);
        r2['default'] = r0;
        r3 = 1;
        r3 = r7[r3];
        r3 = r6.bind(r0)(r3);
        r3 = r5.bind(r0)(r3);
        var _closure1_slot0 = r3;
        r3 = 2;
        r3 = r7[r3];
        r3 = r6.bind(r0)(r3);
        r3 = r5.bind(r0)(r3);
        var _closure1_slot1 = r3;
        r3 = 3;
        r3 = r7[r3];
        r3 = r6.bind(r0)(r3);
        r3 = r5.bind(r0)(r3);
        var _closure1_slot2 = r3;
        r3 = 4;
        r3 = r7[r3];
        r3 = r6.bind(r0)(r3);
        r3 = r5.bind(r0)(r3);
        var _closure1_slot3 = r3;
        r3 = 5;
        r3 = r7[r3];
        r3 = r6.bind(r0)(r3);
        r3 = r5.bind(r0)(r3);
        var _closure1_slot4 = r3;
        r3 = 6;
        r3 = r7[r3];
        r3 = r6.bind(r0)(r3);
        r3 = r5.bind(r0)(r3);
        r4 = 7;
        r4 = r7[r4];
        r4 = r6.bind(r0)(r4);
        r4 = r5.bind(r0)(r4);
        var _closure1_slot5 = r4;
        r4 = 8;
        r4 = r7[r4];
        r4 = r6.bind(r0)(r4);
        r4 = r5.bind(r0)(r4);
        var _closure1_slot6 = r4;
        r4 = 9;
        r4 = r7[r4];
        r4 = r6.bind(r0)(r4);
        r4 = r5.bind(r0)(r4);
        var _closure1_slot7 = r4;
        r4 = 10;
        r4 = r7[r4];
        r4 = r6.bind(r0)(r4);
        r4 = r5.bind(r0)(r4);
        var _closure1_slot8 = r4;
        r4 = 11;
        r4 = r7[r4];
        r4 = r6.bind(r0)(r4);
        r4 = r5.bind(r0)(r4);
        var _closure1_slot9 = r4;
        r3 = r3.default;
        r1 = function(a0) { // Environment: r1
            r3 = function() { // Original name: LinkingImpl, environment: r5
                _fun5254: for(var _fun5254_ip = 0; ; ) switch(_fun5254_ip) {
case 0:
                    r4 = this;
                    r1 = _closure1_slot0;
                    r1 = r1.default;
                    r3 = _closure2_slot0;
                    r2 = undefined;
                    r1 = r1.bind(r2)(r4, r3);
                    r1 = _closure1_slot10;
                    r5 = _closure1_slot5;
                    r5 = r5.default;
                    r7 = r5.OS;
                    r6 = 'ios';
                    r5 = undefined;
                    if(!(r7 === r6)) { _fun5254_ip = 80; continue _fun5254 }
case 57:
                    r6 = _closure1_slot9;
                    r6 = r6.default;
                    r0 = _closure1_slot7;
                    r0 = r0.default;
                    r5 = r6.bind(r2)(r0);
case 80:
                    r0 = new Array(1);
                    r0[0] = r5;
                    r0 = r1.bind(r2)(r4, r3, r0);
                    return r0;
                }
            };
            var _closure2_slot0 = r3;
            r1 = _closure1_slot4;
            r4 = r1.default;
            r2 = undefined;
            r1 = a0;
            r1 = r4.bind(r2)(r3, r1);
            r0 = _closure1_slot1;
            r1 = r0.default;
            r4 = {};
            r0 = 'addEventListener';
            r4['key'] = r0;
            r0 = function(a0, a1) { // Original name: addEventListener, environment: r5
                r3 = this;
                r2 = r3.addListener;
                r1 = a0;
                r0 = a1;
                r0 = r2.bind(r3)(r1, r0);
                return r0;
            };
            r4['value'] = r0;
            r0 = new Array(7);
            r0[0] = r4;
            r4 = {};
            r6 = 'openURL';
            r4['key'] = r6;
            r6 = function(a0) { // Original name: openURL, environment: r5
                _fun5256: for(var _fun5256_ip = 0; ; ) switch(_fun5256_ip) {
case 0:
                    r2 = a0;
                    r1 = this;
                    r0 = r1._validateURL;
                    r0 = r0.bind(r1)(r2);
                    r1 = _closure1_slot5;
                    r1 = r1.default;
                    r3 = r1.OS;
                    r1 = 'android';
                    if(!(r3 !== r1)) { _fun5256_ip = 79; continue _fun5256 }
case 41:
                    r1 = _closure1_slot9;
                    r4 = r1.default;
                    r1 = _closure1_slot7;
                    r3 = r1.default;
                    r1 = undefined;
                    r3 = r4.bind(r1)(r3);
                    r1 = r3.openURL;
                    r1 = r1.bind(r3)(r2);
                    return r1;
case 79:
                    r1 = _closure1_slot9;
                    r3 = r1.default;
                    r0 = _closure1_slot6;
                    r1 = r0.default;
                    r0 = undefined;
                    r1 = r3.bind(r0)(r1);
                    r0 = r1.openURL;
                    r0 = r0.bind(r1)(r2);
                    return r0;
                }
            };
            r4['value'] = r6;
            r0[1] = r4;
            r4 = {};
            r6 = 'canOpenURL';
            r4['key'] = r6;
            r6 = function(a0) { // Original name: canOpenURL, environment: r5
                _fun5257: for(var _fun5257_ip = 0; ; ) switch(_fun5257_ip) {
case 0:
                    r2 = a0;
                    r1 = this;
                    r0 = r1._validateURL;
                    r0 = r0.bind(r1)(r2);
                    r1 = _closure1_slot5;
                    r1 = r1.default;
                    r3 = r1.OS;
                    r1 = 'android';
                    if(!(r3 !== r1)) { _fun5257_ip = 79; continue _fun5257 }
case 41:
                    r1 = _closure1_slot9;
                    r4 = r1.default;
                    r1 = _closure1_slot7;
                    r3 = r1.default;
                    r1 = undefined;
                    r3 = r4.bind(r1)(r3);
                    r1 = r3.canOpenURL;
                    r1 = r1.bind(r3)(r2);
                    return r1;
case 79:
                    r1 = _closure1_slot9;
                    r3 = r1.default;
                    r0 = _closure1_slot6;
                    r1 = r0.default;
                    r0 = undefined;
                    r1 = r3.bind(r0)(r1);
                    r0 = r1.canOpenURL;
                    r0 = r0.bind(r1)(r2);
                    return r0;
                }
            };
            r4['value'] = r6;
            r0[2] = r4;
            r4 = {};
            r6 = 'openSettings';
            r4['key'] = r6;
            r6 = function() { // Original name: openSettings, environment: r5
                _fun5258: for(var _fun5258_ip = 0; ; ) switch(_fun5258_ip) {
case 0:
                    r1 = _closure1_slot5;
                    r1 = r1.default;
                    r2 = r1.OS;
                    r1 = 'android';
                    if(!(r2 !== r1)) { _fun5258_ip = 62; continue _fun5258 }
case 25:
                    r1 = _closure1_slot9;
                    r3 = r1.default;
                    r1 = _closure1_slot7;
                    r2 = r1.default;
                    r1 = undefined;
                    r2 = r3.bind(r1)(r2);
                    r1 = r2.openSettings;
                    r1 = r1.bind(r2)();
                    return r1;
case 62:
                    r1 = _closure1_slot9;
                    r2 = r1.default;
                    r0 = _closure1_slot6;
                    r1 = r0.default;
                    r0 = undefined;
                    r1 = r2.bind(r0)(r1);
                    r0 = r1.openSettings;
                    r0 = r0.bind(r1)();
                    return r0;
                }
            };
            r4['value'] = r6;
            r0[3] = r4;
            r4 = {};
            r6 = 'getInitialURL';
            r4['key'] = r6;
            r6 = function() { // Original name: getInitialURL, environment: r5
                _fun5259: for(var _fun5259_ip = 0; ; ) switch(_fun5259_ip) {
case 0:
                    r0 = _closure1_slot5;
                    r0 = r0.default;
                    r2 = r0.OS;
                    r0 = 'android';
                    if(!(r2 !== r0)) { _fun5259_ip = 62; continue _fun5259 }
case 25:
                    r0 = _closure1_slot9;
                    r3 = r0.default;
                    r0 = _closure1_slot7;
                    r2 = r0.default;
                    r0 = undefined;
                    r2 = r3.bind(r0)(r2);
                    r0 = r2.getInitialURL;
                    r0 = r0.bind(r2)();
                    _fun5259_ip = 97; continue _fun5259;
case 62:
                    r2 = _closure1_slot9;
                    r3 = r2.default;
                    r1 = _closure1_slot6;
                    r2 = r1.default;
                    r1 = undefined;
                    r2 = r3.bind(r1)(r2);
                    r1 = r2.getInitialURL;
                    r0 = r1.bind(r2)();
case 97:
                    return r0;
                }
            };
            r4['value'] = r6;
            r0[4] = r4;
            r4 = {};
            r6 = 'sendIntent';
            r4['key'] = r6;
            r6 = function(a0, a1) { // Original name: sendIntent, environment: r5
                _fun5260: for(var _fun5260_ip = 0; ; ) switch(_fun5260_ip) {
case 0:
                    r1 = _closure1_slot5;
                    r1 = r1.default;
                    r2 = r1.OS;
                    r1 = 'android';
                    if(!(r2 !== r1)) { _fun5260_ip = 62; continue _fun5260 }
case 25:
                    r1 = global;
                    r3 = r1.Promise;
                    r1 = r3.prototype;
                    r2 = Object.create(r1, {constructor: {value: r3}});
                    r5 = function(a0, a1) { // Environment: r1
                        r0 = global;
                        r2 = r0.Error;
                        r0 = r2.prototype;
                        r1 = Object.create(r0, {constructor: {value: r2}});
                        r3 = 'Unsupported';
                        r4 = r1;
                        r0 = new r4[r2](r3, r2);
                        r2 = r0 instanceof Object ? r0 : r1;
                        r1 = a1;
                        r0 = undefined;
                        r0 = r1.bind(r0)(r2);
                        return r0;
                    };
                    r6 = r2;
                    r1 = new r6[r3](r5, r4);
                    r1 = r1 instanceof Object ? r1 : r2;
                    return r1;
case 62:
                    r1 = _closure1_slot9;
                    r2 = r1.default;
                    r0 = _closure1_slot6;
                    r1 = r0.default;
                    r0 = undefined;
                    r3 = r2.bind(r0)(r1);
                    r2 = r3.sendIntent;
                    r1 = a0;
                    r0 = a1;
                    r0 = r2.bind(r3)(r1, r0);
                    return r0;
                }
            };
            r4['value'] = r6;
            r0[5] = r4;
            r4 = {};
            r6 = '_validateURL';
            r4['key'] = r6;
            r5 = function(a0) { // Original name: _validateURL, environment: r5
                r3 = a0;
                r1 = _closure1_slot8;
                r5 = r1.default;
                r0 = 'Invalid URL: should be a string. Was: ';
                r4 = r0 + r3;
                r0 = undefined;
                r6 = typeof r3;
                r2 = 'string';
                r2 = r6 === r2;
                r2 = r5.bind(r0)(r2, r4);
                r2 = r1.default;
                r1 = 'Invalid URL: cannot be empty';
                r1 = r2.bind(r0)(r3, r1);
                return r0;
            };
            r4['value'] = r5;
            r0[6] = r4;
            r0 = r1.bind(r2)(r3, r0);
            return r0;
        };
        r1 = r1.bind(r0)(r3);
        r3 = r1.prototype;
        r3 = Object.create(r3, {constructor: {value: r1}});
        r13 = r3;
        r1 = new r13[r1](r12);
        r1 = r1 instanceof Object ? r1 : r3;
        r2['default'] = r1;
        return r0;
    };
    r6 = 469;
    r5 = [1, 12, 13, 23, 25, 28, 191, 33, 470, 472, 20, 45];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5263: for(var _fun5263_ip = 0; ; ) switch(_fun5263_ip) {
case 0:
            r2 = a5;
            var _closure1_slot0 = r2;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r3
                _fun5264: for(var _fun5264_ip = 0; ; ) switch(_fun5264_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun5264_ip = 104; continue _fun5264 }
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
                        _fun5265: for(var _fun5265_ip = 0; ; ) switch(_fun5265_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5265_ip = 15; continue _fun5265 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5265_ip = 19; continue _fun5265;
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
            if(!r6) { _fun5263_ip = 98; continue _fun5263 }
case 84:
            r5 = r6.__esModule;
            r1 = r6;
            if(r5) { _fun5263_ip = 365; continue _fun5263 }
case 98:
            r16 = null;
            if(!(r16 !== r6)) { _fun5263_ip = 356; continue _fun5263 }
case 107:
            r7 = typeof r6;
            r5 = 'object';
            if(!(r5 !== r7)) { _fun5263_ip = 129; continue _fun5263 }
case 118:
            r5 = 'function';
            if(!(r5 === r7)) { _fun5263_ip = 356; continue _fun5263 }
case 129:
            r5 = _closure1_slot3;
            r7 = r5.bind(r0)(r0);
            if(!r7) { _fun5263_ip = 157; continue _fun5263 }
case 141:
            r5 = r7.has;
            r5 = r5.bind(r7)(r6);
            if(r5) { _fun5263_ip = 344; continue _fun5263 }
case 157:
            r5 = Object.create(r16);
            r8 = r4.Object;
            r15 = r8.defineProperty;
            if(!r15) { _fun5263_ip = 185; continue _fun5263 }
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
                if(r9 === r20) { _fun5263_ip = 202; continue _fun5263 }
case 218:
                r17 = {};
                r18 = r17.hasOwnProperty;
                r17 = r18.call;
                r17 = r17.bind(r18)(r6, r20);
                if(!r17) { _fun5263_ip = 202; continue _fun5263 }
case 239:
                r17 = null;
                if(!r15) { _fun5263_ip = 261; continue _fun5263 }
case 244:
                r19 = r4.Object;
                r18 = r19.getOwnPropertyDescriptor;
                r17 = r18.bind(r19)(r6, r20);
case 261:
                if(!r17) { _fun5263_ip = 280; continue _fun5263 }
case 264:
                r18 = r17.get;
                if(r18) { _fun5263_ip = 293; continue _fun5263 }
case 272:
                r18 = r17.set;
                if(r18) { _fun5263_ip = 293; continue _fun5263 }
case 280:
                r18 = r6[r20];
                r5[r20] = r18;
                r8 = r17;
                _fun5263_ip = 202; continue _fun5263;
case 293:
                r19 = r4.Object;
                r18 = r19.defineProperty;
                r18 = r18.bind(r19)(r5, r20, r17);
                r8 = r17;
                _fun5263_ip = 202; continue _fun5263;
            }
case 316:
            r5['default'] = r6;
            r1 = r5;
            if(!r7) { _fun5263_ip = 365; continue _fun5263 }
case 328:
            r8 = r7.set;
            r8 = r8.bind(r7)(r6, r5);
            r1 = r5;
            _fun5263_ip = 365; continue _fun5263;
case 344:
            r5 = r7.get;
            r1 = r5.bind(r7)(r6);
            _fun5263_ip = 365; continue _fun5263;
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
                _fun5266: for(var _fun5266_ip = 0; ; ) switch(_fun5266_ip) {
case 0:
                    r4 = a0;
                    var _closure2_slot0 = r4;
                    r0 = 'default';
                    if(!(r4 !== r0)) { _fun5266_ip = 152; continue _fun5266 }
case 20:
                    r0 = '__esModule';
                    if(!(r4 !== r0)) { _fun5266_ip = 152; continue _fun5266 }
case 31:
                    r1 = global;
                    r0 = r1.Object;
                    r0 = r0.prototype;
                    r6 = r0.hasOwnProperty;
                    r3 = r6.call;
                    r2 = _closure1_slot1;
                    r2 = r3.bind(r6)(r2, r4);
                    if(r2) { _fun5266_ip = 148; continue _fun5266 }
case 70:
                    r2 = _closure1_slot0;
                    r2 = r4 in r2;
                    if(!r2) { _fun5266_ip = 101; continue _fun5266 }
case 81:
                    r2 = _closure1_slot0;
                    r3 = r2[r4];
                    r2 = _closure1_slot2;
                    r2 = r2[r4];
                    if(!(r3 !== r2)) { _fun5266_ip = 144; continue _fun5266 }
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
    r6 = 470;
    r5 = [471];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5268: for(var _fun5268_ip = 0; ; ) switch(_fun5268_ip) {
case 0:
            r2 = a5;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun5269: for(var _fun5269_ip = 0; ; ) switch(_fun5269_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun5269_ip = 104; continue _fun5269 }
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
                        _fun5270: for(var _fun5270_ip = 0; ; ) switch(_fun5270_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5270_ip = 15; continue _fun5270 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5270_ip = 19; continue _fun5270;
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
            if(!r3) { _fun5268_ip = 88; continue _fun5268 }
case 74:
            r5 = r3.__esModule;
            r4 = r3;
            if(r5) { _fun5268_ip = 355; continue _fun5268 }
case 88:
            r14 = null;
            if(!(r14 !== r3)) { _fun5268_ip = 346; continue _fun5268 }
case 97:
            r6 = typeof r3;
            r5 = 'object';
            if(!(r5 !== r6)) { _fun5268_ip = 119; continue _fun5268 }
case 108:
            r5 = 'function';
            if(!(r5 === r6)) { _fun5268_ip = 346; continue _fun5268 }
case 119:
            r1 = _closure1_slot0;
            r5 = r1.bind(r0)(r0);
            if(!r5) { _fun5268_ip = 147; continue _fun5268 }
case 131:
            r1 = r5.has;
            r1 = r1.bind(r5)(r3);
            if(r1) { _fun5268_ip = 334; continue _fun5268 }
case 147:
            r1 = Object.create(r14);
            r6 = r15.Object;
            r13 = r6.defineProperty;
            if(!r13) { _fun5268_ip = 175; continue _fun5268 }
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
                if(r7 === r19) { _fun5268_ip = 192; continue _fun5268 }
case 208:
                r16 = {};
                r17 = r16.hasOwnProperty;
                r16 = r17.call;
                r16 = r16.bind(r17)(r3, r19);
                if(!r16) { _fun5268_ip = 192; continue _fun5268 }
case 229:
                r16 = null;
                if(!r13) { _fun5268_ip = 251; continue _fun5268 }
case 234:
                r18 = r15.Object;
                r17 = r18.getOwnPropertyDescriptor;
                r16 = r17.bind(r18)(r3, r19);
case 251:
                if(!r16) { _fun5268_ip = 270; continue _fun5268 }
case 254:
                r17 = r16.get;
                if(r17) { _fun5268_ip = 283; continue _fun5268 }
case 262:
                r17 = r16.set;
                if(r17) { _fun5268_ip = 283; continue _fun5268 }
case 270:
                r17 = r3[r19];
                r1[r19] = r17;
                r6 = r16;
                _fun5268_ip = 192; continue _fun5268;
case 283:
                r18 = r15.Object;
                r17 = r18.defineProperty;
                r17 = r17.bind(r18)(r1, r19, r16);
                r6 = r16;
                _fun5268_ip = 192; continue _fun5268;
            }
case 306:
            r1['default'] = r3;
            r4 = r1;
            if(!r5) { _fun5268_ip = 355; continue _fun5268 }
case 318:
            r6 = r5.set;
            r6 = r6.bind(r5)(r3, r1);
            r4 = r1;
            _fun5268_ip = 355; continue _fun5268;
case 334:
            r1 = r5.get;
            r4 = r1.bind(r5)(r3);
            _fun5268_ip = 355; continue _fun5268;
case 346:
            r1 = {};
            r1['default'] = r3;
            r4 = r1;
case 355:
            r3 = r4.get;
            r1 = 'IntentAndroid';
            r1 = r3.bind(r4)(r1);
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 471;
    r5 = [36];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5271: for(var _fun5271_ip = 0; ; ) switch(_fun5271_ip) {
case 0:
            r2 = a5;
            var _closure1_slot0 = r2;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r3
                _fun5272: for(var _fun5272_ip = 0; ; ) switch(_fun5272_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun5272_ip = 104; continue _fun5272 }
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
                        _fun5273: for(var _fun5273_ip = 0; ; ) switch(_fun5273_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5273_ip = 15; continue _fun5273 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5273_ip = 19; continue _fun5273;
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
            if(!r6) { _fun5271_ip = 98; continue _fun5271 }
case 84:
            r5 = r6.__esModule;
            r1 = r6;
            if(r5) { _fun5271_ip = 365; continue _fun5271 }
case 98:
            r16 = null;
            if(!(r16 !== r6)) { _fun5271_ip = 356; continue _fun5271 }
case 107:
            r7 = typeof r6;
            r5 = 'object';
            if(!(r5 !== r7)) { _fun5271_ip = 129; continue _fun5271 }
case 118:
            r5 = 'function';
            if(!(r5 === r7)) { _fun5271_ip = 356; continue _fun5271 }
case 129:
            r5 = _closure1_slot3;
            r7 = r5.bind(r0)(r0);
            if(!r7) { _fun5271_ip = 157; continue _fun5271 }
case 141:
            r5 = r7.has;
            r5 = r5.bind(r7)(r6);
            if(r5) { _fun5271_ip = 344; continue _fun5271 }
case 157:
            r5 = Object.create(r16);
            r8 = r4.Object;
            r15 = r8.defineProperty;
            if(!r15) { _fun5271_ip = 185; continue _fun5271 }
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
                if(r9 === r20) { _fun5271_ip = 202; continue _fun5271 }
case 218:
                r17 = {};
                r18 = r17.hasOwnProperty;
                r17 = r18.call;
                r17 = r17.bind(r18)(r6, r20);
                if(!r17) { _fun5271_ip = 202; continue _fun5271 }
case 239:
                r17 = null;
                if(!r15) { _fun5271_ip = 261; continue _fun5271 }
case 244:
                r19 = r4.Object;
                r18 = r19.getOwnPropertyDescriptor;
                r17 = r18.bind(r19)(r6, r20);
case 261:
                if(!r17) { _fun5271_ip = 280; continue _fun5271 }
case 264:
                r18 = r17.get;
                if(r18) { _fun5271_ip = 293; continue _fun5271 }
case 272:
                r18 = r17.set;
                if(r18) { _fun5271_ip = 293; continue _fun5271 }
case 280:
                r18 = r6[r20];
                r5[r20] = r18;
                r8 = r17;
                _fun5271_ip = 202; continue _fun5271;
case 293:
                r19 = r4.Object;
                r18 = r19.defineProperty;
                r18 = r18.bind(r19)(r5, r20, r17);
                r8 = r17;
                _fun5271_ip = 202; continue _fun5271;
            }
case 316:
            r5['default'] = r6;
            r1 = r5;
            if(!r7) { _fun5271_ip = 365; continue _fun5271 }
case 328:
            r8 = r7.set;
            r8 = r8.bind(r7)(r6, r5);
            r1 = r5;
            _fun5271_ip = 365; continue _fun5271;
case 344:
            r5 = r7.get;
            r1 = r5.bind(r7)(r6);
            _fun5271_ip = 365; continue _fun5271;
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
                _fun5274: for(var _fun5274_ip = 0; ; ) switch(_fun5274_ip) {
case 0:
                    r4 = a0;
                    var _closure2_slot0 = r4;
                    r0 = 'default';
                    if(!(r4 !== r0)) { _fun5274_ip = 152; continue _fun5274 }
case 20:
                    r0 = '__esModule';
                    if(!(r4 !== r0)) { _fun5274_ip = 152; continue _fun5274 }
case 31:
                    r1 = global;
                    r0 = r1.Object;
                    r0 = r0.prototype;
                    r6 = r0.hasOwnProperty;
                    r3 = r6.call;
                    r2 = _closure1_slot1;
                    r2 = r3.bind(r6)(r2, r4);
                    if(r2) { _fun5274_ip = 148; continue _fun5274 }
case 70:
                    r2 = _closure1_slot0;
                    r2 = r4 in r2;
                    if(!r2) { _fun5274_ip = 101; continue _fun5274 }
case 81:
                    r2 = _closure1_slot0;
                    r3 = r2[r4];
                    r2 = _closure1_slot2;
                    r2 = r2[r4];
                    if(!(r3 !== r2)) { _fun5274_ip = 144; continue _fun5274 }
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
    r6 = 472;
    r5 = [473];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5276: for(var _fun5276_ip = 0; ; ) switch(_fun5276_ip) {
case 0:
            r2 = a5;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun5277: for(var _fun5277_ip = 0; ; ) switch(_fun5277_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun5277_ip = 104; continue _fun5277 }
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
                        _fun5278: for(var _fun5278_ip = 0; ; ) switch(_fun5278_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5278_ip = 15; continue _fun5278 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5278_ip = 19; continue _fun5278;
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
            if(!r3) { _fun5276_ip = 88; continue _fun5276 }
case 74:
            r5 = r3.__esModule;
            r4 = r3;
            if(r5) { _fun5276_ip = 355; continue _fun5276 }
case 88:
            r14 = null;
            if(!(r14 !== r3)) { _fun5276_ip = 346; continue _fun5276 }
case 97:
            r6 = typeof r3;
            r5 = 'object';
            if(!(r5 !== r6)) { _fun5276_ip = 119; continue _fun5276 }
case 108:
            r5 = 'function';
            if(!(r5 === r6)) { _fun5276_ip = 346; continue _fun5276 }
case 119:
            r1 = _closure1_slot0;
            r5 = r1.bind(r0)(r0);
            if(!r5) { _fun5276_ip = 147; continue _fun5276 }
case 131:
            r1 = r5.has;
            r1 = r1.bind(r5)(r3);
            if(r1) { _fun5276_ip = 334; continue _fun5276 }
case 147:
            r1 = Object.create(r14);
            r6 = r15.Object;
            r13 = r6.defineProperty;
            if(!r13) { _fun5276_ip = 175; continue _fun5276 }
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
                if(r7 === r19) { _fun5276_ip = 192; continue _fun5276 }
case 208:
                r16 = {};
                r17 = r16.hasOwnProperty;
                r16 = r17.call;
                r16 = r16.bind(r17)(r3, r19);
                if(!r16) { _fun5276_ip = 192; continue _fun5276 }
case 229:
                r16 = null;
                if(!r13) { _fun5276_ip = 251; continue _fun5276 }
case 234:
                r18 = r15.Object;
                r17 = r18.getOwnPropertyDescriptor;
                r16 = r17.bind(r18)(r3, r19);
case 251:
                if(!r16) { _fun5276_ip = 270; continue _fun5276 }
case 254:
                r17 = r16.get;
                if(r17) { _fun5276_ip = 283; continue _fun5276 }
case 262:
                r17 = r16.set;
                if(r17) { _fun5276_ip = 283; continue _fun5276 }
case 270:
                r17 = r3[r19];
                r1[r19] = r17;
                r6 = r16;
                _fun5276_ip = 192; continue _fun5276;
case 283:
                r18 = r15.Object;
                r17 = r18.defineProperty;
                r17 = r17.bind(r18)(r1, r19, r16);
                r6 = r16;
                _fun5276_ip = 192; continue _fun5276;
            }
case 306:
            r1['default'] = r3;
            r4 = r1;
            if(!r5) { _fun5276_ip = 355; continue _fun5276 }
case 318:
            r6 = r5.set;
            r6 = r6.bind(r5)(r3, r1);
            r4 = r1;
            _fun5276_ip = 355; continue _fun5276;
case 334:
            r1 = r5.get;
            r4 = r1.bind(r5)(r3);
            _fun5276_ip = 355; continue _fun5276;
case 346:
            r1 = {};
            r1['default'] = r3;
            r4 = r1;
case 355:
            r3 = r4.get;
            r1 = 'LinkingManager';
            r1 = r3.bind(r4)(r1);
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 473;
    r5 = [36];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5279: for(var _fun5279_ip = 0; ; ) switch(_fun5279_ip) {
case 0:
            r4 = a1;
            r2 = a5;
            r5 = a6;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r3
                _fun5280: for(var _fun5280_ip = 0; ; ) switch(_fun5280_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun5280_ip = 104; continue _fun5280 }
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
                        _fun5281: for(var _fun5281_ip = 0; ; ) switch(_fun5281_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5281_ip = 15; continue _fun5281 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5281_ip = 19; continue _fun5281;
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
            r1 = r5[r0];
            r0 = undefined;
            r6 = r4.bind(r0)(r1);
            r15 = global;
            r9 = r15.Object;
            r8 = r9.defineProperty;
            r7 = {};
            r1 = true;
            r7['value'] = r1;
            r1 = '__esModule';
            r1 = r8.bind(r9)(r2, r1, r7);
            r2['default'] = r0;
            r1 = 1;
            r1 = r5[r1];
            r1 = r4.bind(r0)(r1);
            r1 = r6.bind(r0)(r1);
            r1 = 2;
            r1 = r5[r1];
            r1 = r4.bind(r0)(r1);
            r1 = r6.bind(r0)(r1);
            r1 = 3;
            r1 = r5[r1];
            r4 = r4.bind(r0)(r1);
            if(!r4) { _fun5279_ip = 131; continue _fun5279 }
case 120:
            r1 = r4.__esModule;
            if(r1) { _fun5279_ip = 389; continue _fun5279 }
case 131:
            r14 = null;
            if(!(r14 !== r4)) { _fun5279_ip = 383; continue _fun5279 }
case 140:
            r5 = typeof r4;
            r1 = 'object';
            if(!(r1 !== r5)) { _fun5279_ip = 162; continue _fun5279 }
case 151:
            r1 = 'function';
            if(!(r1 === r5)) { _fun5279_ip = 383; continue _fun5279 }
case 162:
            r1 = _closure1_slot0;
            r5 = r1.bind(r0)(r0);
            if(!r5) { _fun5279_ip = 190; continue _fun5279 }
case 174:
            r1 = r5.has;
            r1 = r1.bind(r5)(r4);
            if(r1) { _fun5279_ip = 371; continue _fun5279 }
case 190:
            r6 = Object.create(r14);
            r1 = r15.Object;
            r13 = r1.defineProperty;
            if(!r13) { _fun5279_ip = 218; continue _fun5279 }
case 207:
            r1 = r15.Object;
            r13 = r1.getOwnPropertyDescriptor;
case 218:
            r11 = r4;
            r7 = 'default';
            r1 = undefined;
            for(r8 in r11)
case 235:
            {
case 244:
                r19 = r8;
                if(r7 === r19) { _fun5279_ip = 235; continue _fun5279 }
case 251:
                r16 = {};
                r17 = r16.hasOwnProperty;
                r16 = r17.call;
                r16 = r16.bind(r17)(r4, r19);
                if(!r16) { _fun5279_ip = 235; continue _fun5279 }
case 272:
                r16 = null;
                if(!r13) { _fun5279_ip = 294; continue _fun5279 }
case 277:
                r18 = r15.Object;
                r17 = r18.getOwnPropertyDescriptor;
                r16 = r17.bind(r18)(r4, r19);
case 294:
                if(!r16) { _fun5279_ip = 313; continue _fun5279 }
case 297:
                r17 = r16.get;
                if(r17) { _fun5279_ip = 326; continue _fun5279 }
case 305:
                r17 = r16.set;
                if(r17) { _fun5279_ip = 326; continue _fun5279 }
case 313:
                r17 = r4[r19];
                r6[r19] = r17;
                r1 = r16;
                _fun5279_ip = 235; continue _fun5279;
case 326:
                r18 = r15.Object;
                r17 = r18.defineProperty;
                r17 = r17.bind(r18)(r6, r19, r16);
                r1 = r16;
                _fun5279_ip = 235; continue _fun5279;
            }
case 349:
            r6['default'] = r4;
            if(!r5) { _fun5279_ip = 389; continue _fun5279 }
case 358:
            r1 = r5.set;
            r1 = r1.bind(r5)(r4, r6);
            _fun5279_ip = 389; continue _fun5279;
case 371:
            r1 = r5.get;
            r1 = r1.bind(r5)(r4);
            _fun5279_ip = 389; continue _fun5279;
case 383:
            r1 = {};
            r1['default'] = r4;
case 389:
            r1 = {};
            r4 = function() { // Original name: install, environment: r3
                r0 = undefined;
                return r0;
            };
            r1['install'] = r4;
            r4 = function() { // Original name: uninstall, environment: r3
                r0 = undefined;
                return r0;
            };
            r1['uninstall'] = r4;
            r4 = function() { // Original name: isInstalled, environment: r3
                r0 = false;
                return r0;
            };
            r1['isInstalled'] = r4;
            r4 = function(a0) { // Original name: ignoreLogs, environment: r3
                r0 = undefined;
                return r0;
            };
            r1['ignoreLogs'] = r4;
            r4 = function(a0) { // Original name: ignoreAllLogs, environment: r3
                r0 = undefined;
                return r0;
            };
            r1['ignoreAllLogs'] = r4;
            r4 = function() { // Original name: clearAllLogs, environment: r3
                r0 = undefined;
                return r0;
            };
            r1['clearAllLogs'] = r4;
            r4 = function(a0) { // Original name: addLog, environment: r3
                r0 = undefined;
                return r0;
            };
            r1['addLog'] = r4;
            r3 = function(a0) { // Original name: addException, environment: r3
                r0 = undefined;
                return r0;
            };
            r1['addException'] = r3;
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 474;
    r5 = [1, 33, 227, 119];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r4 = a1;
        r2 = a5;
        r5 = a6;
        var _closure1_slot0 = r4;
        var _closure1_slot1 = r5;
        r0 = function(a0, a1, a2, a3) { // Original name: clearInteractionHandle, environment: r3
            _fun5291: for(var _fun5291_ip = 0; ; ) switch(_fun5291_ip) {
case 0:
                r1 = a0;
                r3 = a1;
                r0 = r1.handle;
                if(!r0) { _fun5291_ip = 70; continue _fun5291 }
case 15:
                r4 = _closure1_slot0;
                r2 = _closure1_slot1;
                r0 = 1;
                r2 = r2[r0];
                r0 = undefined;
                r0 = r4.bind(r0)(r2);
                r4 = r0.default;
                r2 = r4.clearInteractionHandle;
                r0 = r1.handle;
                r0 = r2.bind(r4)(r0);
                r0 = null;
                r1['handle'] = r0;
case 70:
                if(!r3) { _fun5291_ip = 87; continue _fun5291 }
case 73:
                r2 = undefined;
                r1 = a2;
                r0 = a3;
                r0 = r3.bind(r2)(r1, r0);
case 87:
                r0 = undefined;
                return r0;
            }
        };
        var _closure1_slot9 = r0;
        r0 = global;
        r7 = r0.Object;
        r6 = r7.defineProperty;
        r1 = {};
        r0 = true;
        r1['value'] = r0;
        r0 = '__esModule';
        r0 = r6.bind(r7)(r2, r0, r1);
        r0 = undefined;
        r2['default'] = r0;
        r1 = 0;
        r6 = r5[r1];
        r6 = r4.bind(r0)(r6);
        r6 = r6.default;
        r6 = r6.currentCentroidXOfTouchesChangedAfter;
        var _closure1_slot2 = r6;
        r6 = r5[r1];
        r6 = r4.bind(r0)(r6);
        r6 = r6.default;
        r6 = r6.currentCentroidYOfTouchesChangedAfter;
        var _closure1_slot3 = r6;
        r6 = r5[r1];
        r6 = r4.bind(r0)(r6);
        r6 = r6.default;
        r6 = r6.previousCentroidXOfTouchesChangedAfter;
        var _closure1_slot4 = r6;
        r6 = r5[r1];
        r6 = r4.bind(r0)(r6);
        r6 = r6.default;
        r6 = r6.previousCentroidYOfTouchesChangedAfter;
        var _closure1_slot5 = r6;
        r6 = r5[r1];
        r6 = r4.bind(r0)(r6);
        r6 = r6.default;
        r6 = r6.currentCentroidX;
        var _closure1_slot6 = r6;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r1.default;
        r1 = r1.currentCentroidY;
        var _closure1_slot7 = r1;
        r1 = {};
        r4 = function(a0) { // Original name: _initializeGestureState, environment: r3
            r1 = a0;
            r0 = 0;
            r1['moveX'] = r0;
            r1['moveY'] = r0;
            r1['x0'] = r0;
            r1['y0'] = r0;
            r1['dx'] = r0;
            r1['dy'] = r0;
            r1['vx'] = r0;
            r1['vy'] = r0;
            r1['numberActiveTouches'] = r0;
            r1['_accountsForMovesUpTo'] = r0;
            r0 = undefined;
            return r0;
        };
        r1['_initializeGestureState'] = r4;
        r4 = function(a0, a1) { // Original name: _updateGestureStateOnMove, environment: r3
            r2 = a0;
            r1 = a1;
            r0 = r1.numberActiveTouches;
            r2['numberActiveTouches'] = r0;
            r4 = _closure1_slot2;
            r3 = r2._accountsForMovesUpTo;
            r0 = undefined;
            r3 = r4.bind(r0)(r1, r3);
            r2['moveX'] = r3;
            r5 = _closure1_slot3;
            r3 = r2._accountsForMovesUpTo;
            r3 = r5.bind(r0)(r1, r3);
            r2['moveY'] = r3;
            r3 = r2._accountsForMovesUpTo;
            r7 = _closure1_slot4;
            r7 = r7.bind(r0)(r1, r3);
            r4 = r4.bind(r0)(r1, r3);
            r6 = _closure1_slot5;
            r6 = r6.bind(r0)(r1, r3);
            r3 = r5.bind(r0)(r1, r3);
            r5 = r2.dx;
            r4 = r4 - r7;
            r4 = r5 + r4;
            r5 = r2.dy;
            r3 = r3 - r6;
            r3 = r5 + r3;
            r6 = r1.mostRecentTimeStamp;
            r5 = r2._accountsForMovesUpTo;
            r6 = r6 - r5;
            r5 = r2.dx;
            r5 = r4 - r5;
            r5 = r5 / r6;
            r2['vx'] = r5;
            r5 = r2.dy;
            r5 = r3 - r5;
            r5 = r5 / r6;
            r2['vy'] = r5;
            r2['dx'] = r4;
            r2['dy'] = r3;
            r1 = r1.mostRecentTimeStamp;
            r2['_accountsForMovesUpTo'] = r1;
            return r0;
        };
        r1['_updateGestureStateOnMove'] = r4;
        r4 = function(a0) { // Original name: create, environment: r3
            r0 = a0;
            var _closure2_slot0 = r0;
            r0 = {};
            r2 = null;
            r0['handle'] = r2;
            var _closure2_slot1 = r0;
            r0 = {'stateID': null, 'moveX': 0, 'moveY': 0, 'x0': 0, 'y0': 0, 'dx': 0, 'dy': 0, 'vx': 0, 'vy': 0, 'numberActiveTouches': 0, '_accountsForMovesUpTo': 0};
            r2 = global;
            r3 = r2.Math;
            r2 = r3.random;
            r2 = r2.bind(r3)();
            r0['stateID'] = r2;
            var _closure2_slot2 = r0;
            r2 = {};
            r0 = function(a0) { // Original name: onStartShouldSetResponder, environment: r1
                _fun5295: for(var _fun5295_ip = 0; ; ) switch(_fun5295_ip) {
case 0:
                    r0 = _closure2_slot0;
                    r2 = r0.onStartShouldSetPanResponder;
                    r0 = null;
                    r2 = r2 == r0;
                    r0 = false;
                    if(r2) { _fun5295_ip = 47; continue _fun5295 }
case 24:
                    r4 = _closure2_slot0;
                    r3 = r4.onStartShouldSetPanResponder;
                    r2 = _closure2_slot2;
                    r1 = a0;
                    r0 = r3.bind(r4)(r1, r2);
case 47:
                    return r0;
                }
            };
            r2['onStartShouldSetResponder'] = r0;
            r0 = function(a0) { // Original name: onMoveShouldSetResponder, environment: r1
                _fun5296: for(var _fun5296_ip = 0; ; ) switch(_fun5296_ip) {
case 0:
                    r0 = _closure2_slot0;
                    r2 = r0.onMoveShouldSetPanResponder;
                    r0 = null;
                    r2 = r2 == r0;
                    r0 = false;
                    if(r2) { _fun5296_ip = 47; continue _fun5296 }
case 24:
                    r4 = _closure2_slot0;
                    r3 = r4.onMoveShouldSetPanResponder;
                    r2 = _closure2_slot2;
                    r1 = a0;
                    r0 = r3.bind(r4)(r1, r2);
case 47:
                    return r0;
                }
            };
            r2['onMoveShouldSetResponder'] = r0;
            r0 = function(a0) { // Original name: onStartShouldSetResponderCapture, environment: r1
                _fun5297: for(var _fun5297_ip = 0; ; ) switch(_fun5297_ip) {
case 0:
                    r4 = a0;
                    r0 = r4.nativeEvent;
                    r0 = r0.touches;
                    r1 = r0.length;
                    r0 = 1;
                    if(!(r1 === r0)) { _fun5297_ip = 51; continue _fun5297 }
case 26:
                    r2 = _closure1_slot8;
                    r1 = r2._initializeGestureState;
                    r0 = _closure2_slot2;
                    r0 = r1.bind(r2)(r0);
case 51:
                    r2 = _closure2_slot2;
                    r0 = r4.touchHistory;
                    r0 = r0.numberActiveTouches;
                    r2['numberActiveTouches'] = r0;
                    r0 = _closure2_slot0;
                    r2 = r0.onStartShouldSetPanResponderCapture;
                    r0 = null;
                    r2 = r2 != r0;
                    r0 = false;
                    if(!r2) { _fun5297_ip = 116; continue _fun5297 }
case 96:
                    r3 = _closure2_slot0;
                    r2 = r3.onStartShouldSetPanResponderCapture;
                    r1 = _closure2_slot2;
                    r0 = r2.bind(r3)(r4, r1);
case 116:
                    return r0;
                }
            };
            r2['onStartShouldSetResponderCapture'] = r0;
            r0 = function(a0) { // Original name: onMoveShouldSetResponderCapture, environment: r1
                _fun5298: for(var _fun5298_ip = 0; ; ) switch(_fun5298_ip) {
case 0:
                    r4 = a0;
                    r5 = r4.touchHistory;
                    r0 = _closure2_slot2;
                    r2 = r0._accountsForMovesUpTo;
                    r0 = r5.mostRecentTimeStamp;
                    if(!(r2 !== r0)) { _fun5298_ip = 91; continue _fun5298 }
case 31:
                    r3 = _closure1_slot8;
                    r2 = r3._updateGestureStateOnMove;
                    r0 = _closure2_slot2;
                    r0 = r2.bind(r3)(r0, r5);
                    r0 = _closure2_slot0;
                    r2 = r0.onMoveShouldSetPanResponderCapture;
                    r0 = false;
                    if(!r2) { _fun5298_ip = 89; continue _fun5298 }
case 69:
                    r3 = _closure2_slot0;
                    r2 = r3.onMoveShouldSetPanResponderCapture;
                    r1 = _closure2_slot2;
                    r0 = r2.bind(r3)(r4, r1);
case 89:
                    return r0;
case 91:
                    r0 = false;
                    return r0;
                }
            };
            r2['onMoveShouldSetResponderCapture'] = r0;
            r0 = function(a0) { // Original name: onResponderGrant, environment: r1
                _fun5299: for(var _fun5299_ip = 0; ; ) switch(_fun5299_ip) {
case 0:
                    r4 = a0;
                    r0 = _closure2_slot1;
                    r0 = r0.handle;
                    if(r0) { _fun5299_ip = 69; continue _fun5299 }
case 19:
                    r2 = _closure2_slot1;
                    r5 = _closure1_slot0;
                    r3 = _closure1_slot1;
                    r0 = 1;
                    r3 = r3[r0];
                    r0 = undefined;
                    r0 = r5.bind(r0)(r3);
                    r3 = r0.default;
                    r0 = r3.createInteractionHandle;
                    r0 = r0.bind(r3)();
                    r2['handle'] = r0;
case 69:
                    r2 = _closure2_slot2;
                    r6 = _closure1_slot6;
                    r3 = r4.touchHistory;
                    r5 = undefined;
                    r3 = r6.bind(r5)(r3);
                    r2['x0'] = r3;
                    r3 = _closure1_slot7;
                    r0 = r4.touchHistory;
                    r0 = r3.bind(r5)(r0);
                    r2['y0'] = r0;
                    r0 = 0;
                    r2['dx'] = r0;
                    r2['dy'] = r0;
                    r0 = _closure2_slot0;
                    r0 = r0.onPanResponderGrant;
                    if(!r0) { _fun5299_ip = 165; continue _fun5299 }
case 145:
                    r3 = _closure2_slot0;
                    r2 = r3.onPanResponderGrant;
                    r0 = _closure2_slot2;
                    r0 = r2.bind(r3)(r4, r0);
case 165:
                    r0 = _closure2_slot0;
                    r2 = r0.onShouldBlockNativeResponder;
                    r0 = null;
                    r2 = r2 == r0;
                    r0 = true;
                    if(r2) { _fun5299_ip = 206; continue _fun5299 }
case 186:
                    r3 = _closure2_slot0;
                    r2 = r3.onShouldBlockNativeResponder;
                    r1 = _closure2_slot2;
                    r0 = r2.bind(r3)(r4, r1);
case 206:
                    return r0;
                }
            };
            r2['onResponderGrant'] = r0;
            r0 = function(a0) { // Original name: onResponderReject, environment: r1
                r5 = _closure1_slot9;
                r9 = _closure2_slot1;
                r1 = _closure2_slot0;
                r8 = r1.onPanResponderReject;
                r6 = _closure2_slot2;
                r0 = undefined;
                r7 = a0;
                r10 = undefined;
                r1 = r10[r5](r9, r8, r7, r6, r5);
                return r0;
            };
            r2['onResponderReject'] = r0;
            r0 = function(a0) { // Original name: onResponderRelease, environment: r1
                r6 = _closure1_slot9;
                r10 = _closure2_slot1;
                r2 = _closure2_slot0;
                r9 = r2.onPanResponderRelease;
                r3 = _closure2_slot2;
                r0 = undefined;
                r8 = a0;
                r11 = undefined;
                r7 = r3;
                r2 = r11[r6](r10, r9, r8, r7, r6);
                r2 = _closure1_slot8;
                r1 = r2._initializeGestureState;
                r1 = r1.bind(r2)(r3);
                return r0;
            };
            r2['onResponderRelease'] = r0;
            r0 = function(a0) { // Original name: onResponderStart, environment: r1
                _fun5302: for(var _fun5302_ip = 0; ; ) switch(_fun5302_ip) {
case 0:
                    r3 = a0;
                    r1 = r3.touchHistory;
                    r2 = _closure2_slot2;
                    r1 = r1.numberActiveTouches;
                    r2['numberActiveTouches'] = r1;
                    r1 = _closure2_slot0;
                    r1 = r1.onPanResponderStart;
                    if(!r1) { _fun5302_ip = 60; continue _fun5302 }
case 40:
                    r2 = _closure2_slot0;
                    r1 = r2.onPanResponderStart;
                    r0 = _closure2_slot2;
                    r0 = r1.bind(r2)(r3, r0);
case 60:
                    r0 = undefined;
                    return r0;
                }
            };
            r2['onResponderStart'] = r0;
            r0 = function(a0) { // Original name: onResponderMove, environment: r1
                _fun5303: for(var _fun5303_ip = 0; ; ) switch(_fun5303_ip) {
case 0:
                    r3 = a0;
                    r5 = r3.touchHistory;
                    r1 = _closure2_slot2;
                    r2 = r1._accountsForMovesUpTo;
                    r1 = r5.mostRecentTimeStamp;
                    if(!(r2 !== r1)) { _fun5303_ip = 91; continue _fun5303 }
case 31:
                    r4 = _closure1_slot8;
                    r2 = r4._updateGestureStateOnMove;
                    r1 = _closure2_slot2;
                    r1 = r2.bind(r4)(r1, r5);
                    r1 = _closure2_slot0;
                    r1 = r1.onPanResponderMove;
                    if(!r1) { _fun5303_ip = 87; continue _fun5303 }
case 67:
                    r2 = _closure2_slot0;
                    r1 = r2.onPanResponderMove;
                    r0 = _closure2_slot2;
                    r0 = r1.bind(r2)(r3, r0);
case 87:
                    r0 = undefined;
                    return r0;
case 91:
                    r0 = undefined;
                    return r0;
                }
            };
            r2['onResponderMove'] = r0;
            r0 = function(a0) { // Original name: onResponderEnd, environment: r1
                r5 = a0;
                r1 = r5.touchHistory;
                r4 = _closure2_slot2;
                r1 = r1.numberActiveTouches;
                r4['numberActiveTouches'] = r1;
                r3 = _closure1_slot9;
                r9 = _closure2_slot1;
                r0 = _closure2_slot0;
                r8 = r0.onPanResponderEnd;
                r0 = undefined;
                r10 = undefined;
                r7 = r5;
                r6 = r4;
                r1 = r10[r3](r9, r8, r7, r6, r5);
                return r0;
            };
            r2['onResponderEnd'] = r0;
            r0 = function(a0) { // Original name: onResponderTerminate, environment: r1
                r6 = _closure1_slot9;
                r10 = _closure2_slot1;
                r2 = _closure2_slot0;
                r9 = r2.onPanResponderTerminate;
                r3 = _closure2_slot2;
                r0 = undefined;
                r8 = a0;
                r11 = undefined;
                r7 = r3;
                r2 = r11[r6](r10, r9, r8, r7, r6);
                r2 = _closure1_slot8;
                r1 = r2._initializeGestureState;
                r1 = r1.bind(r2)(r3);
                return r0;
            };
            r2['onResponderTerminate'] = r0;
            r0 = function(a0) { // Original name: onResponderTerminationRequest, environment: r1
                _fun5306: for(var _fun5306_ip = 0; ; ) switch(_fun5306_ip) {
case 0:
                    r0 = _closure2_slot0;
                    r2 = r0.onPanResponderTerminationRequest;
                    r0 = null;
                    r2 = r2 == r0;
                    r0 = true;
                    if(r2) { _fun5306_ip = 47; continue _fun5306 }
case 24:
                    r4 = _closure2_slot0;
                    r3 = r4.onPanResponderTerminationRequest;
                    r2 = _closure2_slot2;
                    r1 = a0;
                    r0 = r3.bind(r4)(r1, r2);
case 47:
                    return r0;
                }
            };
            r2['onResponderTerminationRequest'] = r0;
            r0 = {};
            r0['panHandlers'] = r2;
            r1 = function() { // Original name: getInteractionHandle, environment: r1
                r0 = _closure2_slot1;
                r0 = r0.handle;
                return r0;
            };
            r0['getInteractionHandle'] = r1;
            return r0;
        };
        r1['create'] = r4;
        var _closure1_slot8 = r1;
        r2['default'] = r1;
        return r0;
    };
    r6 = 475;
    r5 = [476, 318];
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
        r4 = function(a0, a1, a2, a3) { // Original name: centroidDimension, environment: r3
            _fun5309: for(var _fun5309_ip = 0; ; ) switch(_fun5309_ip) {
case 0:
                r1 = a0;
                r8 = a1;
                r6 = a2;
                r7 = a3;
                r14 = r1.touchBank;
                r2 = r1.numberActiveTouches;
                r13 = null;
                r0 = 1;
                r5 = null;
                if(!(r2 === r0)) { _fun5309_ip = 51; continue _fun5309 }
case 35:
                r2 = r1.touchBank;
                r1 = r1.indexOfSingleActiveTouch;
                r5 = r2[r1];
case 51:
                if(!(r5 === r13)) { _fun5309_ip = 256; continue _fun5309 }
case 58:
                r2 = r14.length;
                r1 = 0;
                r3 = r1 < r2;
                r12 = undefined;
                r11 = 0;
                r10 = 0;
                r9 = 0;
                r4 = undefined;
                r2 = 0;
                if(!r3) { _fun5309_ip = 346; continue _fun5309 }
case 87:
                r21 = r14[r9];
                r20 = r11;
                r19 = r10;
                r3 = r9;
                r22 = r4;
                r17 = r20;
                r16 = r19;
                r18 = r22;
                if(!(r21 !== r13)) { _fun5309_ip = 224; continue _fun5309 }
case 116:
                r17 = r20;
                r16 = r19;
                r18 = r22;
                if(!(r21 !== r12)) { _fun5309_ip = 224; continue _fun5309 }
case 129:
                r15 = r21.touchActive;
                r17 = r20;
                r16 = r19;
                r18 = r22;
                if(!r15) { _fun5309_ip = 224; continue _fun5309 }
case 147:
                r15 = r21.currentTimeStamp;
                r17 = r20;
                r16 = r19;
                r18 = r22;
                if(!(r15 >= r8)) { _fun5309_ip = 224; continue _fun5309 }
case 166:
                if(!r7) { _fun5309_ip = 172; continue _fun5309 }
case 169:
                if(r6) { _fun5309_ip = 208; continue _fun5309 }
case 172:
                if(!r7) { _fun5309_ip = 186; continue _fun5309 }
case 175:
                if(r6) { _fun5309_ip = 186; continue _fun5309 }
case 178:
                r15 = r21.currentPageY;
                _fun5309_ip = 214; continue _fun5309;
case 186:
                if(r7) { _fun5309_ip = 200; continue _fun5309 }
case 189:
                if(!r6) { _fun5309_ip = 200; continue _fun5309 }
case 192:
                r15 = r21.previousPageX;
                _fun5309_ip = 214; continue _fun5309;
case 200:
                r15 = r21.previousPageY;
                _fun5309_ip = 214; continue _fun5309;
case 208:
                r15 = r21.currentPageX;
case 214:
                r17 = r20 + r15;
                r16 = r19 + 1;
                r18 = r15;
case 224:
                r9 = r3 + 1;
                r3 = r14.length;
                r11 = r17;
                r10 = r16;
                r4 = r18;
                r2 = r11;
                r1 = r10;
                if(r9 < r3) { _fun5309_ip = 87; continue _fun5309 }
case 254:
                _fun5309_ip = 346; continue _fun5309;
case 256:
                r3 = r5.touchActive;
                r4 = 0;
                r2 = 0;
                r1 = 0;
                if(!r3) { _fun5309_ip = 346; continue _fun5309 }
case 271:
                r3 = r5.currentTimeStamp;
                r3 = r3 > r8;
                r2 = 0;
                r1 = 0;
                if(!r3) { _fun5309_ip = 346; continue _fun5309 }
case 288:
                if(!r7) { _fun5309_ip = 294; continue _fun5309 }
case 291:
                if(r6) { _fun5309_ip = 333; continue _fun5309 }
case 294:
                if(!r7) { _fun5309_ip = 308; continue _fun5309 }
case 297:
                if(r6) { _fun5309_ip = 308; continue _fun5309 }
case 300:
                r3 = r5.currentPageY;
                _fun5309_ip = 331; continue _fun5309;
case 308:
                if(r7) { _fun5309_ip = 322; continue _fun5309 }
case 311:
                if(!r6) { _fun5309_ip = 322; continue _fun5309 }
case 314:
                r6 = r5.previousPageX;
                _fun5309_ip = 328; continue _fun5309;
case 322:
                r6 = r5.previousPageY;
case 328:
                r3 = r6;
case 331:
                _fun5309_ip = 339; continue _fun5309;
case 333:
                r3 = r5.currentPageX;
case 339:
                r2 = r4 + r3;
                r1 = r0;
case 346:
                r0 = 0;
                if(!(!(r1 > r0))) { _fun5309_ip = 367; continue _fun5309 }
case 352:
                r0 = _closure1_slot0;
                r0 = r0.noCentroid;
                _fun5309_ip = 371; continue _fun5309;
case 367:
                r0 = r2 / r1;
case 371:
                return r0;
            }
        };
        r1['centroidDimension'] = r4;
        r4 = function(a0, a1) { // Original name: currentCentroidXOfTouchesChangedAfter, environment: r3
            r4 = _closure1_slot0;
            r3 = r4.centroidDimension;
            r8 = a0;
            r7 = a1;
            r9 = r4;
            r6 = true;
            r5 = true;
            r0 = r9[r3](r8, r7, r6, r5, r4);
            return r0;
        };
        r1['currentCentroidXOfTouchesChangedAfter'] = r4;
        r4 = function(a0, a1) { // Original name: currentCentroidYOfTouchesChangedAfter, environment: r3
            r5 = _closure1_slot0;
            r4 = r5.centroidDimension;
            r9 = a0;
            r8 = a1;
            r7 = false;
            r6 = true;
            r10 = r5;
            r0 = r10[r4](r9, r8, r7, r6, r5);
            return r0;
        };
        r1['currentCentroidYOfTouchesChangedAfter'] = r4;
        r4 = function(a0, a1) { // Original name: previousCentroidXOfTouchesChangedAfter, environment: r3
            r5 = _closure1_slot0;
            r4 = r5.centroidDimension;
            r9 = a0;
            r8 = a1;
            r7 = true;
            r6 = false;
            r10 = r5;
            r0 = r10[r4](r9, r8, r7, r6, r5);
            return r0;
        };
        r1['previousCentroidXOfTouchesChangedAfter'] = r4;
        r4 = function(a0, a1) { // Original name: previousCentroidYOfTouchesChangedAfter, environment: r3
            r4 = _closure1_slot0;
            r3 = r4.centroidDimension;
            r8 = a0;
            r7 = a1;
            r9 = r4;
            r6 = false;
            r5 = false;
            r0 = r9[r3](r8, r7, r6, r5, r4);
            return r0;
        };
        r1['previousCentroidYOfTouchesChangedAfter'] = r4;
        r4 = function(a0) { // Original name: currentCentroidX, environment: r3
            r4 = _closure1_slot0;
            r3 = r4.centroidDimension;
            r8 = a0;
            r7 = 0;
            r9 = r4;
            r6 = true;
            r5 = true;
            r0 = r9[r3](r8, r7, r6, r5, r4);
            return r0;
        };
        r1['currentCentroidX'] = r4;
        r4 = function(a0) { // Original name: currentCentroidY, environment: r3
            r5 = _closure1_slot0;
            r4 = r5.centroidDimension;
            r9 = a0;
            r8 = 0;
            r7 = false;
            r6 = true;
            r10 = r5;
            r0 = r10[r4](r9, r8, r7, r6, r5);
            return r0;
        };
        r1['currentCentroidY'] = r4;
        r4 = -1;
        r1['noCentroid'] = r4;
        var _closure1_slot0 = r1;
        r2['default'] = r1;
        return r0;
    };
    r6 = 476;
    r5 = new Array(0);
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r6 = a1;
        r2 = a5;
        r7 = a6;
        r0 = 0;
        r3 = r7[r0];
        r0 = undefined;
        r5 = r6.bind(r0)(r3);
        r3 = global;
        r10 = r3.Object;
        r9 = r10.defineProperty;
        r8 = {};
        r4 = true;
        r8['value'] = r4;
        r4 = '__esModule';
        r4 = r9.bind(r10)(r2, r4, r8);
        r2['default'] = r0;
        r4 = 1;
        r4 = r7[r4];
        r4 = r6.bind(r0)(r4);
        r4 = r5.bind(r0)(r4);
        var _closure1_slot0 = r4;
        r4 = 2;
        r4 = r7[r4];
        r4 = r6.bind(r0)(r4);
        r4 = r5.bind(r0)(r4);
        var _closure1_slot1 = r4;
        r4 = 3;
        r4 = r7[r4];
        r4 = r6.bind(r0)(r4);
        r4 = r5.bind(r0)(r4);
        var _closure1_slot2 = r4;
        r4 = 4;
        r4 = r7[r4];
        r4 = r6.bind(r0)(r4);
        r4 = r5.bind(r0)(r4);
        var _closure1_slot3 = r4;
        r4 = 5;
        r4 = r7[r4];
        r4 = r6.bind(r0)(r4);
        r4 = r5.bind(r0)(r4);
        var _closure1_slot4 = r4;
        r4 = 6;
        r4 = r7[r4];
        r4 = r6.bind(r0)(r4);
        r4 = r5.bind(r0)(r4);
        var _closure1_slot5 = r4;
        r6 = r3.Object;
        r5 = r6.freeze;
        r4 = {'GRANTED': 'granted', 'DENIED': 'denied', 'NEVER_ASK_AGAIN': 'never_ask_again'};
        r4 = r5.bind(r6)(r4);
        var _closure1_slot6 = r4;
        r5 = r3.Object;
        r4 = r5.freeze;
        r3 = {'READ_CALENDAR': 'android.permission.READ_CALENDAR', 'WRITE_CALENDAR': 'android.permission.WRITE_CALENDAR', 'CAMERA': 'android.permission.CAMERA', 'READ_CONTACTS': 'android.permission.READ_CONTACTS', 'WRITE_CONTACTS': 'android.permission.WRITE_CONTACTS', 'GET_ACCOUNTS': 'android.permission.GET_ACCOUNTS', 'ACCESS_FINE_LOCATION': 'android.permission.ACCESS_FINE_LOCATION', 'ACCESS_COARSE_LOCATION': 'android.permission.ACCESS_COARSE_LOCATION', 'ACCESS_BACKGROUND_LOCATION': 'android.permission.ACCESS_BACKGROUND_LOCATION', 'RECORD_AUDIO': 'android.permission.RECORD_AUDIO', 'READ_PHONE_STATE': 'android.permission.READ_PHONE_STATE', 'CALL_PHONE': 'android.permission.CALL_PHONE', 'READ_CALL_LOG': 'android.permission.READ_CALL_LOG', 'WRITE_CALL_LOG': 'android.permission.WRITE_CALL_LOG', 'ADD_VOICEMAIL': 'com.android.voicemail.permission.ADD_VOICEMAIL', 'READ_VOICEMAIL': 'com.android.voicemail.permission.READ_VOICEMAIL', 'WRITE_VOICEMAIL': 'com.android.voicemail.permission.WRITE_VOICEMAIL', 'USE_SIP': 'android.permission.USE_SIP', 'PROCESS_OUTGOING_CALLS': 'android.permission.PROCESS_OUTGOING_CALLS', 'BODY_SENSORS': 'android.permission.BODY_SENSORS', 'BODY_SENSORS_BACKGROUND': 'android.permission.BODY_SENSORS_BACKGROUND', 'SEND_SMS': 'android.permission.SEND_SMS', 'RECEIVE_SMS': 'android.permission.RECEIVE_SMS', 'READ_SMS': 'android.permission.READ_SMS', 'RECEIVE_WAP_PUSH': 'android.permission.RECEIVE_WAP_PUSH', 'RECEIVE_MMS': 'android.permission.RECEIVE_MMS', 'READ_EXTERNAL_STORAGE': 'android.permission.READ_EXTERNAL_STORAGE', 'READ_MEDIA_IMAGES': 'android.permission.READ_MEDIA_IMAGES', 'READ_MEDIA_VIDEO': 'android.permission.READ_MEDIA_VIDEO', 'READ_MEDIA_AUDIO': 'android.permission.READ_MEDIA_AUDIO', 'READ_MEDIA_VISUAL_USER_SELECTED': 'android.permission.READ_MEDIA_VISUAL_USER_SELECTED', 'WRITE_EXTERNAL_STORAGE': 'android.permission.WRITE_EXTERNAL_STORAGE', 'BLUETOOTH_CONNECT': 'android.permission.BLUETOOTH_CONNECT', 'BLUETOOTH_SCAN': 'android.permission.BLUETOOTH_SCAN', 'BLUETOOTH_ADVERTISE': 'android.permission.BLUETOOTH_ADVERTISE', 'ACCESS_MEDIA_LOCATION': 'android.permission.ACCESS_MEDIA_LOCATION', 'ACCEPT_HANDOVER': 'android.permission.ACCEPT_HANDOVER', 'ACTIVITY_RECOGNITION': 'android.permission.ACTIVITY_RECOGNITION', 'ANSWER_PHONE_CALLS': 'android.permission.ANSWER_PHONE_CALLS', 'READ_PHONE_NUMBERS': 'android.permission.READ_PHONE_NUMBERS', 'UWB_RANGING': 'android.permission.UWB_RANGING', 'POST_NOTIFICATIONS': 'android.permission.POST_NOTIFICATIONS', 'NEARBY_WIFI_DEVICES': 'android.permission.NEARBY_WIFI_DEVICES'};
        r3 = r4.bind(r5)(r3);
        var _closure1_slot7 = r3;
        r1 = function() { // Environment: r1
            r3 = function() { // Original name: PermissionsAndroid, environment: r5
                r2 = this;
                r0 = _closure1_slot1;
                r4 = r0.default;
                r3 = _closure2_slot0;
                r0 = undefined;
                r3 = r4.bind(r0)(r2, r3);
                r3 = _closure1_slot7;
                r2['PERMISSIONS'] = r3;
                r1 = _closure1_slot6;
                r2['RESULTS'] = r1;
                return r0;
            };
            var _closure2_slot0 = r3;
            r0 = _closure1_slot2;
            r2 = r0.default;
            r0 = {};
            r1 = 'checkPermission';
            r0['key'] = r1;
            r1 = function(a0) { // Original name: checkPermission, environment: r5
                r0 = global;
                r2 = r0.console;
                r1 = r2.warn;
                r0 = '"PermissionsAndroid.checkPermission" is deprecated. Use "PermissionsAndroid.check" instead';
                r0 = r1.bind(r2)(r0);
                r1 = _closure1_slot5;
                r4 = r1.default;
                r0 = _closure1_slot4;
                r3 = r0.default;
                r2 = undefined;
                r1 = 'PermissionsAndroid is not installed correctly.';
                r1 = r4.bind(r2)(r3, r1);
                r2 = r0.default;
                r1 = r2.checkPermission;
                r0 = a0;
                r0 = r1.bind(r2)(r0);
                return r0;
            };
            r0['value'] = r1;
            r1 = new Array(5);
            r1[0] = r0;
            r0 = {};
            r4 = 'check';
            r0['key'] = r4;
            r4 = function(a0) { // Original name: check, environment: r5
                r1 = _closure1_slot5;
                r4 = r1.default;
                r0 = _closure1_slot4;
                r3 = r0.default;
                r2 = undefined;
                r1 = 'PermissionsAndroid is not installed correctly.';
                r1 = r4.bind(r2)(r3, r1);
                r2 = r0.default;
                r1 = r2.checkPermission;
                r0 = a0;
                r0 = r1.bind(r2)(r0);
                return r0;
            };
            r0['value'] = r4;
            r1[1] = r0;
            r4 = {};
            r0 = 'requestPermission';
            r4['key'] = r0;
            r6 = function() { // Environment: r5
                r1 = _closure1_slot0;
                r3 = r1.default;
                r2 = undefined;
                r1 = function* (a0, a1) { // Environment: r0
                    r0 = function* (a0, a1) { // Original name: ?anon_0_, environment: r0
                        _fun5324: for(var _fun5324_ip = 0; ; ) switch(_fun5324_ip) {
case 0:
                            StartGenerator();
                            r2 = this;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(r1) { _fun5324_ip = 81; continue _fun5324 }
case 9:
                            r1 = global;
                            r4 = r1.console;
                            r3 = r4.warn;
                            r1 = '"PermissionsAndroid.requestPermission" is deprecated. Use "PermissionsAndroid.request" instead';
                            r1 = r3.bind(r4)(r1);
                            r4 = r2.request;
                            r3 = a0;
                            r1 = a1;
                            r1 = r4.bind(r2)(r3, r1);
                            SaveGenerator(address=53);
case 51:
                            return r1;
case 53:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(r3) { _fun5324_ip = 78; continue _fun5324 }
case 59:
                            r2 = r2.RESULTS;
                            r2 = r2.GRANTED;
                            r2 = r1 === r2;
                            return r2;
case 78:
                            return r1;
case 81:
                            return r0;
                        }
                    };
                    return r0;
                };
                r1 = r3.bind(r2)(r1);
                var _closure3_slot0 = r1;
                r0 = function(a0, a1) { // Original name: requestPermission, environment: r0
                    r0 = undefined;
                    r3 = _closure3_slot0;
                    r2 = r3.apply;
                    r0 = arguments;
                    r1 = r0;
                    r0 = this;
                    r0 = r2.bind(r3)(r0, r1);
                    return r0;
                };
                return r0;
            };
            r0 = undefined;
            r6 = r6.bind(r0)();
            r4['value'] = r6;
            r1[2] = r4;
            r4 = {};
            r6 = 'request';
            r4['key'] = r6;
            r6 = function() { // Environment: r5
                r1 = _closure1_slot0;
                r3 = r1.default;
                r2 = undefined;
                r1 = function* (a0, a1) { // Environment: r0
                    r0 = function* (a0, a1) { // Original name: ?anon_0_, environment: r0
                        _fun5328: for(var _fun5328_ip = 0; ; ) switch(_fun5328_ip) {
case 0:
                            StartGenerator();
                            r5 = a0;
                            r1 = a1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                            if(r3) { _fun5328_ip = 169; continue _fun5328 }
case 18:
                            var _closure5_slot0 = r5;
                            var _closure5_slot1 = r1;
                            r4 = _closure1_slot5;
                            r8 = r4.default;
                            r4 = _closure1_slot4;
                            r7 = r4.default;
                            r6 = undefined;
                            r4 = 'PermissionsAndroid is not installed correctly.';
                            r4 = r8.bind(r6)(r7, r4);
                            if(!r1) { _fun5328_ip = 107; continue _fun5328 }
case 62:
                            r1 = _closure1_slot4;
                            r4 = r1.default;
                            r1 = r4.shouldShowRequestPermissionRationale;
                            r1 = r1.bind(r4)(r5);
                            SaveGenerator(address=86);
case 84:
                            return r1;
case 86:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(r4) { _fun5328_ip = 166; continue _fun5328 }
case 92:
                            if(!r1) { _fun5328_ip = 107; continue _fun5328 }
case 95:
                            r4 = _closure1_slot3;
                            r4 = r4.default;
                            if(r4) { _fun5328_ip = 130; continue _fun5328 }
case 107:
                            r3 = _closure1_slot4;
                            r4 = r3.default;
                            r3 = r4.requestPermission;
                            r3 = r3.bind(r4)(r5);
                            return r3;
case 130:
                            r3 = global;
                            r4 = r3.Promise;
                            r3 = r4.prototype;
                            r3 = Object.create(r3, {constructor: {value: r4}});
                            r10 = function(a0, a1) { // Environment: r2
                                r1 = a0;
                                var _closure6_slot0 = r1;
                                r1 = a1;
                                var _closure6_slot1 = r1;
                                r1 = global;
                                r4 = r1.Object;
                                r3 = r4.assign;
                                r2 = _closure5_slot1;
                                r1 = {};
                                r4 = r3.bind(r4)(r1, r2);
                                r1 = _closure1_slot3;
                                r3 = r1.default;
                                r2 = r3.showAlert;
                                r1 = function() { // Environment: r0
                                    r2 = _closure6_slot1;
                                    r0 = global;
                                    r3 = r0.Error;
                                    r0 = r3.prototype;
                                    r1 = Object.create(r0, {constructor: {value: r3}});
                                    r4 = 'Error showing rationale';
                                    r5 = r1;
                                    r0 = new r5[r3](r4, r3);
                                    r1 = r0 instanceof Object ? r0 : r1;
                                    r0 = undefined;
                                    r0 = r2.bind(r0)(r1);
                                    return r0;
                                };
                                r0 = function() { // Environment: r0
                                    r2 = _closure6_slot0;
                                    r0 = _closure1_slot4;
                                    r3 = r0.default;
                                    r1 = r3.requestPermission;
                                    r0 = _closure5_slot0;
                                    r1 = r1.bind(r3)(r0);
                                    r0 = undefined;
                                    r0 = r2.bind(r0)(r1);
                                    return r0;
                                };
                                r0 = r2.bind(r3)(r4, r1, r0);
                                r0 = undefined;
                                return r0;
                            };
                            r11 = r3;
                            r2 = new r11[r4](r10, r9);
                            r2 = r2 instanceof Object ? r2 : r3;
                            return r2;
case 166:
                            return r1;
case 169:
                            return r0;
                        }
                    };
                    return r0;
                };
                r1 = r3.bind(r2)(r1);
                var _closure3_slot0 = r1;
                r0 = function(a0, a1) { // Original name: request, environment: r0
                    r0 = undefined;
                    r3 = _closure3_slot0;
                    r2 = r3.apply;
                    r0 = arguments;
                    r1 = r0;
                    r0 = this;
                    r0 = r2.bind(r3)(r0, r1);
                    return r0;
                };
                return r0;
            };
            r6 = r6.bind(r0)();
            r4['value'] = r6;
            r1[3] = r4;
            r4 = {};
            r6 = 'requestMultiple';
            r4['key'] = r6;
            r5 = function(a0) { // Original name: requestMultiple, environment: r5
                r1 = _closure1_slot5;
                r4 = r1.default;
                r0 = _closure1_slot4;
                r3 = r0.default;
                r2 = undefined;
                r1 = 'PermissionsAndroid is not installed correctly.';
                r1 = r4.bind(r2)(r3, r1);
                r2 = r0.default;
                r1 = r2.requestMultiplePermissions;
                r0 = a0;
                r0 = r1.bind(r2)(r0);
                return r0;
            };
            r4['value'] = r5;
            r1[4] = r4;
            r0 = r2.bind(r0)(r3, r1);
            return r0;
        };
        r1 = r1.bind(r0)();
        r3 = r1.prototype;
        r3 = Object.create(r3, {constructor: {value: r1}});
        r14 = r3;
        r1 = new r14[r1](r13);
        r1 = r1 instanceof Object ? r1 : r3;
        r2['default'] = r1;
        return r0;
    };
    r6 = 477;
    r5 = [1, 363, 12, 13, 223, 478, 20];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5333: for(var _fun5333_ip = 0; ; ) switch(_fun5333_ip) {
case 0:
            r2 = a5;
            var _closure1_slot0 = r2;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r3
                _fun5334: for(var _fun5334_ip = 0; ; ) switch(_fun5334_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun5334_ip = 104; continue _fun5334 }
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
                        _fun5335: for(var _fun5335_ip = 0; ; ) switch(_fun5335_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5335_ip = 15; continue _fun5335 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5335_ip = 19; continue _fun5335;
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
            if(!r6) { _fun5333_ip = 98; continue _fun5333 }
case 84:
            r5 = r6.__esModule;
            r1 = r6;
            if(r5) { _fun5333_ip = 365; continue _fun5333 }
case 98:
            r16 = null;
            if(!(r16 !== r6)) { _fun5333_ip = 356; continue _fun5333 }
case 107:
            r7 = typeof r6;
            r5 = 'object';
            if(!(r5 !== r7)) { _fun5333_ip = 129; continue _fun5333 }
case 118:
            r5 = 'function';
            if(!(r5 === r7)) { _fun5333_ip = 356; continue _fun5333 }
case 129:
            r5 = _closure1_slot3;
            r7 = r5.bind(r0)(r0);
            if(!r7) { _fun5333_ip = 157; continue _fun5333 }
case 141:
            r5 = r7.has;
            r5 = r5.bind(r7)(r6);
            if(r5) { _fun5333_ip = 344; continue _fun5333 }
case 157:
            r5 = Object.create(r16);
            r8 = r4.Object;
            r15 = r8.defineProperty;
            if(!r15) { _fun5333_ip = 185; continue _fun5333 }
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
                if(r9 === r20) { _fun5333_ip = 202; continue _fun5333 }
case 218:
                r17 = {};
                r18 = r17.hasOwnProperty;
                r17 = r18.call;
                r17 = r17.bind(r18)(r6, r20);
                if(!r17) { _fun5333_ip = 202; continue _fun5333 }
case 239:
                r17 = null;
                if(!r15) { _fun5333_ip = 261; continue _fun5333 }
case 244:
                r19 = r4.Object;
                r18 = r19.getOwnPropertyDescriptor;
                r17 = r18.bind(r19)(r6, r20);
case 261:
                if(!r17) { _fun5333_ip = 280; continue _fun5333 }
case 264:
                r18 = r17.get;
                if(r18) { _fun5333_ip = 293; continue _fun5333 }
case 272:
                r18 = r17.set;
                if(r18) { _fun5333_ip = 293; continue _fun5333 }
case 280:
                r18 = r6[r20];
                r5[r20] = r18;
                r8 = r17;
                _fun5333_ip = 202; continue _fun5333;
case 293:
                r19 = r4.Object;
                r18 = r19.defineProperty;
                r18 = r18.bind(r19)(r5, r20, r17);
                r8 = r17;
                _fun5333_ip = 202; continue _fun5333;
            }
case 316:
            r5['default'] = r6;
            r1 = r5;
            if(!r7) { _fun5333_ip = 365; continue _fun5333 }
case 328:
            r8 = r7.set;
            r8 = r8.bind(r7)(r6, r5);
            r1 = r5;
            _fun5333_ip = 365; continue _fun5333;
case 344:
            r5 = r7.get;
            r1 = r5.bind(r7)(r6);
            _fun5333_ip = 365; continue _fun5333;
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
                _fun5336: for(var _fun5336_ip = 0; ; ) switch(_fun5336_ip) {
case 0:
                    r4 = a0;
                    var _closure2_slot0 = r4;
                    r0 = 'default';
                    if(!(r4 !== r0)) { _fun5336_ip = 152; continue _fun5336 }
case 20:
                    r0 = '__esModule';
                    if(!(r4 !== r0)) { _fun5336_ip = 152; continue _fun5336 }
case 31:
                    r1 = global;
                    r0 = r1.Object;
                    r0 = r0.prototype;
                    r6 = r0.hasOwnProperty;
                    r3 = r6.call;
                    r2 = _closure1_slot1;
                    r2 = r3.bind(r6)(r2, r4);
                    if(r2) { _fun5336_ip = 148; continue _fun5336 }
case 70:
                    r2 = _closure1_slot0;
                    r2 = r4 in r2;
                    if(!r2) { _fun5336_ip = 101; continue _fun5336 }
case 81:
                    r2 = _closure1_slot0;
                    r3 = r2[r4];
                    r2 = _closure1_slot2;
                    r2 = r2[r4];
                    if(!(r3 !== r2)) { _fun5336_ip = 144; continue _fun5336 }
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
    r6 = 478;
    r5 = [479];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5338: for(var _fun5338_ip = 0; ; ) switch(_fun5338_ip) {
case 0:
            r2 = a5;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun5339: for(var _fun5339_ip = 0; ; ) switch(_fun5339_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun5339_ip = 104; continue _fun5339 }
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
                        _fun5340: for(var _fun5340_ip = 0; ; ) switch(_fun5340_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun5340_ip = 15; continue _fun5340 }
case 9:
                            r0 = _closure2_slot0;
                            _fun5340_ip = 19; continue _fun5340;
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
            if(!r3) { _fun5338_ip = 88; continue _fun5338 }
case 74:
            r5 = r3.__esModule;
            r4 = r3;
            if(r5) { _fun5338_ip = 355; continue _fun5338 }
case 88:
            r14 = null;
            if(!(r14 !== r3)) { _fun5338_ip = 346; continue _fun5338 }
case 97:
            r6 = typeof r3;
            r5 = 'object';
            if(!(r5 !== r6)) { _fun5338_ip = 119; continue _fun5338 }
case 108:
            r5 = 'function';
            if(!(r5 === r6)) { _fun5338_ip = 346; continue _fun5338 }
case 119:
            r1 = _closure1_slot0;
            r5 = r1.bind(r0)(r0);
            if(!r5) { _fun5338_ip = 147; continue _fun5338 }
case 131:
            r1 = r5.has;
            r1 = r1.bind(r5)(r3);
            if(r1) { _fun5338_ip = 334; continue _fun5338 }
case 147:
            r1 = Object.create(r14);
            r6 = r15.Object;
            r13 = r6.defineProperty;
            if(!r13) { _fun5338_ip = 175; continue _fun5338 }
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
                if(r7 === r19) { _fun5338_ip = 192; continue _fun5338 }
case 208:
                r16 = {};
                r17 = r16.hasOwnProperty;
                r16 = r17.call;
                r16 = r16.bind(r17)(r3, r19);
                if(!r16) { _fun5338_ip = 192; continue _fun5338 }
case 229:
                r16 = null;
                if(!r13) { _fun5338_ip = 251; continue _fun5338 }
case 234:
                r18 = r15.Object;
                r17 = r18.getOwnPropertyDescriptor;
                r16 = r17.bind(r18)(r3, r19);
case 251:
                if(!r16) { _fun5338_ip = 270; continue _fun5338 }
case 254:
                r17 = r16.get;
                if(r17) { _fun5338_ip = 283; continue _fun5338 }
case 262:
                r17 = r16.set;
                if(r17) { _fun5338_ip = 283; continue _fun5338 }
case 270:
                r17 = r3[r19];
                r1[r19] = r17;
                r6 = r16;
                _fun5338_ip = 192; continue _fun5338;
case 283:
                r18 = r15.Object;
                r17 = r18.defineProperty;
                r17 = r17.bind(r18)(r1, r19, r16);
                r6 = r16;
                _fun5338_ip = 192; continue _fun5338;
            }
case 306:
            r1['default'] = r3;
            r4 = r1;
            if(!r5) { _fun5338_ip = 355; continue _fun5338 }
case 318:
            r6 = r5.set;
            r6 = r6.bind(r5)(r3, r1);
            r4 = r1;
            _fun5338_ip = 355; continue _fun5338;
case 334:
            r1 = r5.get;
            r4 = r1.bind(r5)(r3);
            _fun5338_ip = 355; continue _fun5338;
case 346:
            r1 = {};
            r1['default'] = r3;
            r4 = r1;
case 355:
            r3 = r4.get;
            r1 = 'PermissionsAndroid';
            r1 = r3.bind(r4)(r1);
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 479;
    r5 = [36];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun5341: for(var _fun5341_ip = 0; ; ) switch(_fun5341_ip) {
case 0:
            r9 = a1;
            r2 = a5;
            r10 = a6;
            r0 = 0;
            r3 = r10[r0];
            r0 = undefined;
            r8 = r9.bind(r0)(r3);
            r3 = global;
            r7 = r3.Object;
            r6 = r7.defineProperty;
            r5 = {};
            r4 = true;
            r5['value'] = r4;
            r4 = '__esModule';
            r4 = r6.bind(r7)(r2, r4, r5);
            r2['default'] = r0;
            r4 = 1;
            r4 = r10[r4];
            r4 = r9.bind(r0)(r4);
            r4 = r8.bind(r0)(r4);
            var _closure1_slot0 = r4;
            r4 = 2;
            r4 = r10[r4];
            r4 = r9.bind(r0)(r4);
            r4 = r8.bind(r0)(r4);
            var _closure1_slot1 = r4;
            r4 = 3;
            r4 = r10[r4];
            r4 = r9.bind(r0)(r4);
            r6 = r8.bind(r0)(r4);
            r4 = 4;
            r4 = r10[r4];
            r4 = r9.bind(r0)(r4);
            r4 = r8.bind(r0)(r4);
            r5 = 5;
            r5 = r10[r5];
            r5 = r9.bind(r0)(r5);
            r5 = r8.bind(r0)(r5);
            var _closure1_slot2 = r5;
            r7 = 6;
            r7 = r10[r7];
            r7 = r9.bind(r0)(r7);
            r7 = r8.bind(r0)(r7);
            var _closure1_slot3 = r7;
            r6 = r6.default;
            r4 = r4.default;
            r8 = r4.OS;
            r7 = 'ios';
            r4 = null;
            if(!(r8 === r7)) { _fun5341_ip = 210; continue _fun5341 }
case 205:
            r4 = r5.default;
case 210:
            r5 = r6.prototype;
            r5 = Object.create(r5, {constructor: {value: r6}});
            r14 = r5;
            r13 = r4;
            r4 = new r14[r6](r13, r12);
            r4 = r4 instanceof Object ? r4 : r5;
            var _closure1_slot4 = r4;
            r3 = r3.Map;
            r4 = r3.prototype;
            r4 = Object.create(r4, {constructor: {value: r3}});
            r14 = r4;
            r3 = new r14[r3](r13);
            r3 = r3 instanceof Object ? r3 : r4;
            var _closure1_slot5 = r3;
            r3 = 'remoteNotificationReceived';
            var _closure1_slot6 = r3;
            r3 = 'remoteNotificationsRegistered';
            var _closure1_slot7 = r3;
            r3 = 'remoteNotificationRegistrationError';
            var _closure1_slot8 = r3;
            r3 = 'localNotificationReceived';
            var _closure1_slot9 = r3;
            r1 = function() { // Environment: r1
                r4 = function(a0) { // Original name: PushNotificationIOS, environment: r5
                    _fun5343: for(var _fun5343_ip = 0; ; ) switch(_fun5343_ip) {
case 0:
                        r4 = a0;
                        r3 = this;
                        var _closure3_slot0 = r4;
                        var _closure3_slot1 = r3;
                        r0 = _closure1_slot0;
                        r5 = r0.default;
                        r2 = _closure2_slot0;
                        r0 = undefined;
                        r2 = r5.bind(r0)(r3, r2);
                        r2 = {};
                        r3['_data'] = r2;
                        r2 = false;
                        r3['_remoteNotificationCompleteCallbackCalled'] = r2;
                        r2 = r4.remote;
                        r3['_isRemote'] = r2;
                        r2 = r3._isRemote;
                        if(!r2) { _fun5343_ip = 91; continue _fun5343 }
case 79:
                        r2 = r4.notificationId;
                        r3['_notificationId'] = r2;
case 91:
                        r2 = r4.remote;
                        if(r2) { _fun5343_ip = 162; continue _fun5343 }
case 100:
                        r2 = r4.applicationIconBadgeNumber;
                        r3['_badgeCount'] = r2;
                        r2 = r4.soundName;
                        r3['_sound'] = r2;
                        r2 = r4.alertBody;
                        r3['_alert'] = r2;
                        r2 = r4.userInfo;
                        r3['_data'] = r2;
                        r2 = r4.category;
                        r3['_category'] = r2;
                        _fun5343_ip = 195; continue _fun5343;
case 162:
                        r2 = global;
                        r3 = r2.Object;
                        r2 = r3.keys;
                        r3 = r2.bind(r3)(r4);
                        r2 = r3.forEach;
                        r1 = function(a0) { // Environment: r1
                            _fun5344: for(var _fun5344_ip = 0; ; ) switch(_fun5344_ip) {
case 0:
                                r3 = a0;
                                r0 = _closure3_slot0;
                                r0 = r0[r3];
                                r2 = 'aps';
                                if(!(r3 !== r2)) { _fun5344_ip = 38; continue _fun5344 }
case 22:
                                r2 = _closure3_slot1;
                                r2 = r2._data;
                                r2[r3] = r0;
                                _fun5344_ip = 114; continue _fun5344;
case 38:
                                r1 = _closure3_slot1;
                                r2 = r0.alert;
                                r1['_alert'] = r2;
                                r2 = r0.sound;
                                r1['_sound'] = r2;
                                r2 = r0.badge;
                                r1['_badgeCount'] = r2;
                                r2 = r0.category;
                                r1['_category'] = r2;
                                r2 = r0.content-available;
                                r1['_contentAvailable'] = r2;
                                r0 = r0.thread-id;
                                r1['_threadID'] = r0;
case 114:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r1 = r2.bind(r3)(r1);
case 195:
                        return r0;
                    }
                };
                var _closure2_slot0 = r4;
                r0 = _closure1_slot1;
                r3 = r0.default;
                r0 = {};
                r1 = 'finish';
                r0['key'] = r1;
                r1 = function(a0) { // Original name: finish, environment: r5
                    _fun5345: for(var _fun5345_ip = 0; ; ) switch(_fun5345_ip) {
case 0:
                        r1 = this;
                        r0 = r1._isRemote;
                        if(!r0) { _fun5345_ip = 98; continue _fun5345 }
case 11:
                        r0 = r1._notificationId;
                        if(!r0) { _fun5345_ip = 98; continue _fun5345 }
case 20:
                        r0 = r1._remoteNotificationCompleteCallbackCalled;
                        if(r0) { _fun5345_ip = 98; continue _fun5345 }
case 29:
                        r0 = true;
                        r1['_remoteNotificationCompleteCallbackCalled'] = r0;
                        r2 = _closure1_slot3;
                        r5 = r2.default;
                        r2 = _closure1_slot2;
                        r4 = r2.default;
                        r0 = undefined;
                        r3 = 'PushNotificationManager is not available.';
                        r3 = r5.bind(r0)(r4, r3);
                        r4 = r2.default;
                        r3 = r4.onFinishRemoteNotification;
                        r2 = r1._notificationId;
                        r1 = a0;
                        r1 = r3.bind(r4)(r2, r1);
                        return r0;
case 98:
                        r0 = undefined;
                        return r0;
                    }
                };
                r0['value'] = r1;
                r2 = new Array(9);
                r2[0] = r0;
                r0 = {};
                r1 = 'getMessage';
                r0['key'] = r1;
                r1 = function() { // Original name: getMessage, environment: r5
                    r0 = this;
                    r0 = r0._alert;
                    return r0;
                };
                r0['value'] = r1;
                r2[1] = r0;
                r0 = {};
                r1 = 'getSound';
                r0['key'] = r1;
                r1 = function() { // Original name: getSound, environment: r5
                    r0 = this;
                    r0 = r0._sound;
                    return r0;
                };
                r0['value'] = r1;
                r2[2] = r0;
                r0 = {};
                r1 = 'getCategory';
                r0['key'] = r1;
                r1 = function() { // Original name: getCategory, environment: r5
                    r0 = this;
                    r0 = r0._category;
                    return r0;
                };
                r0['value'] = r1;
                r2[3] = r0;
                r0 = {};
                r1 = 'getAlert';
                r0['key'] = r1;
                r1 = function() { // Original name: getAlert, environment: r5
                    r0 = this;
                    r0 = r0._alert;
                    return r0;
                };
                r0['value'] = r1;
                r2[4] = r0;
                r0 = {};
                r1 = 'getContentAvailable';
                r0['key'] = r1;
                r1 = function() { // Original name: getContentAvailable, environment: r5
                    r0 = this;
                    r0 = r0._contentAvailable;
                    return r0;
                };
                r0['value'] = r1;
                r2[5] = r0;
                r0 = {};
                r1 = 'getBadgeCount';
                r0['key'] = r1;
                r1 = function() { // Original name: getBadgeCount, environment: r5
                    r0 = this;
                    r0 = r0._badgeCount;
                    return r0;
                };
                r0['value'] = r1;
                r2[6] = r0;
                r0 = {};
                r1 = 'getData';
                r0['key'] = r1;
                r1 = function() { // Original name: getData, environment: r5
                    r0 = this;
                    r0 = r0._data;
                    return r0;
                };
                r0['value'] = r1;
                r2[7] = r0;
                r0 = {};
                r1 = 'getThreadID';
                r0['key'] = r1;
                r1 = function() { // Original name: getThreadID, environment: r5
                    r0 = this;
                    r0 = r0._threadID;
                    return r0;
                };
                r0['value'] = r1;
                r2[8] = r0;
                r0 = {};
                r1 = 'presentLocalNotification';
                r0['key'] = r1;
                r1 = function(a0) { // Original name: presentLocalNotification, environment: r5
                    r1 = _closure1_slot3;
                    r4 = r1.default;
                    r1 = _closure1_slot2;
                    r3 = r1.default;
                    r0 = undefined;
                    r2 = 'PushNotificationManager is not available.';
                    r2 = r4.bind(r0)(r3, r2);
                    r3 = r1.default;
                    r2 = r3.presentLocalNotification;
                    r1 = a0;
                    r1 = r2.bind(r3)(r1);
                    return r0;
                };
                r0['value'] = r1;
                r1 = new Array(17);
                r1[0] = r0;
                r0 = {};
                r6 = 'scheduleLocalNotification';
                r0['key'] = r6;
                r6 = function(a0) { // Original name: scheduleLocalNotification, environment: r5
                    r1 = _closure1_slot3;
                    r4 = r1.default;
                    r1 = _closure1_slot2;
                    r3 = r1.default;
                    r0 = undefined;
                    r2 = 'PushNotificationManager is not available.';
                    r2 = r4.bind(r0)(r3, r2);
                    r3 = r1.default;
                    r2 = r3.scheduleLocalNotification;
                    r1 = a0;
                    r1 = r2.bind(r3)(r1);
                    return r0;
                };
                r0['value'] = r6;
                r1[1] = r0;
                r0 = {};
                r6 = 'cancelAllLocalNotifications';
                r0['key'] = r6;
                r6 = function() { // Original name: cancelAllLocalNotifications, environment: r5
                    r1 = _closure1_slot3;
                    r4 = r1.default;
                    r1 = _closure1_slot2;
                    r3 = r1.default;
                    r0 = undefined;
                    r2 = 'PushNotificationManager is not available.';
