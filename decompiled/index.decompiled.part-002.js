                    r4 = a0;
                    r1 = a1;
                    var _closure2_slot0 = r1;
                    if(r4) { _fun332_ip = 19; continue _fun332 }
case 15:
                    r1 = null;
                    return r1;
case 19:
                    r2 = _closure1_slot3;
                    r3 = r2.default;
                    r7 = undefined;
                    r2 = 5;
                    r8 = r3.bind(r7)(r4, r2);
                    r2 = 0;
                    r2 = r8[r2];
                    r3 = 1;
                    r6 = r8[r3];
                    var _closure2_slot1 = r6;
                    r4 = 2;
                    r5 = r8[r4];
                    r3 = 3;
                    r3 = r8[r3];
                    var _closure2_slot2 = r3;
                    r3 = 4;
                    r3 = r8[r3];
                    var _closure2_slot3 = r3;
                    r3 = _closure1_slot1;
                    r1 = _closure1_slot2;
                    r1 = r1[r4];
                    r4 = r3.bind(r7)(r1);
                    r3 = r2.startsWith;
                    r1 = 'RCT';
                    r1 = r3.bind(r2)(r1);
                    r3 = !r1;
                    if(!r3) { _fun332_ip = 144; continue _fun332 }
case 126:
                    r8 = r2.startsWith;
                    r1 = 'RK';
                    r1 = r8.bind(r2)(r1);
                    r3 = !r1;
case 144:
                    r1 = "Module name prefixes should've been stripped by the native side but wasn't for ";
                    r1 = r1 + r2;
                    r1 = r4.bind(r7)(r3, r1);
                    if(r6) { _fun332_ip = 172; continue _fun332 }
case 161:
                    if(r5) { _fun332_ip = 172; continue _fun332 }
case 164:
                    r1 = {};
                    r1['name'] = r2;
                    return r1;
case 172:
                    r1 = {};
                    var _closure2_slot4 = r1;
                    if(!r5) { _fun332_ip = 196; continue _fun332 }
case 181:
                    r4 = r5.forEach;
                    r3 = function(a0, a1) { // Environment: r0
                        _fun333: for(var _fun333_ip = 0; ; ) switch(_fun333_ip) {
case 0:
                            r5 = a1;
                            r3 = _closure2_slot2;
                            if(!r3) { _fun333_ip = 32; continue _fun333 }
case 13:
                            r4 = _closure1_slot9;
                            r2 = _closure2_slot2;
                            r0 = undefined;
                            r3 = r4.bind(r0)(r2, r5);
case 32:
                            if(r3) { _fun333_ip = 37; continue _fun333 }
case 35:
                            r3 = false;
case 37:
                            r6 = _closure2_slot3;
                            if(!r6) { _fun333_ip = 63; continue _fun333 }
case 44:
                            r4 = _closure1_slot9;
                            r2 = _closure2_slot3;
                            r0 = undefined;
                            r6 = r4.bind(r0)(r2, r5);
case 63:
                            if(r6) { _fun333_ip = 68; continue _fun333 }
case 66:
                            r6 = false;
case 68:
                            r7 = _closure1_slot1;
                            r4 = _closure1_slot2;
                            r0 = 2;
                            r4 = r4[r0];
                            r0 = undefined;
                            r8 = r7.bind(r0)(r4);
                            r7 = !r3;
                            if(r7) { _fun333_ip = 102; continue _fun333 }
case 99:
                            r7 = !r6;
case 102:
                            r4 = 'Cannot have a method that is both async and a sync hook';
                            r4 = r8.bind(r0)(r7, r4);
                            r4 = 'promise';
                            if(r3) { _fun333_ip = 133; continue _fun333 }
case 119:
                            r3 = 'async';
                            if(!r6) { _fun333_ip = 130; continue _fun333 }
case 126:
                            r3 = 'sync';
case 130:
                            r4 = r3;
case 133:
                            r3 = _closure2_slot4;
                            r2 = _closure1_slot8;
                            r1 = _closure2_slot0;
                            r2 = r2.bind(r0)(r1, r5, r4);
                            r1 = a0;
                            r3[r1] = r2;
                            return r0;
                        }
                    };
                    r3 = r4.bind(r5)(r3);
case 196:
                    r3 = global;
                    r5 = r3.Object;
                    r4 = r5.assign;
                    r4 = r4.bind(r5)(r1, r6);
                    r5 = r1.getConstants;
                    r4 = null;
                    if(!(r5 != r4)) { _fun332_ip = 277; continue _fun332 }
case 226:
                    r5 = r3.console;
                    r4 = r5.warn;
                    r3 = r3.HermesInternal;
                    r8 = r3.concat;
                    r13 = "Unable to define method 'getConstants()' on NativeModule '";
                    r11 = "'. NativeModule '";
                    r9 = "' already has a constant or method called 'getConstants'. Please remove it.";
                    r12 = r2;
                    r10 = r2;
                    r3 = r13[r8](r12, r11, r10, r9, r8);
                    r3 = r4.bind(r5)(r3);
                    _fun332_ip = 288; continue _fun332;
case 277:
                    r0 = function() { // Environment: r0
                        _fun334: for(var _fun334_ip = 0; ; ) switch(_fun334_ip) {
case 0:
                            r0 = _closure2_slot1;
                            if(r0) { _fun334_ip = 31; continue _fun334 }
case 10:
                            r1 = global;
                            r3 = r1.Object;
                            r2 = r3.freeze;
                            r1 = {};
                            r0 = r2.bind(r3)(r1);
case 31:
                            return r0;
                        }
                    };
                    r1['getConstants'] = r0;
case 288:
                    r0 = {};
                    r0['name'] = r2;
                    r0['module'] = r1;
                    return r0;
                }
            };
            var _closure1_slot6 = r1;
            r0 = function(a0, a1) { // Original name: loadModule, environment: r4
                _fun335: for(var _fun335_ip = 0; ; ) switch(_fun335_ip) {
case 0:
                    r2 = _closure1_slot1;
                    r3 = _closure1_slot2;
                    r1 = 2;
                    r1 = r3[r1];
                    r3 = undefined;
                    r5 = r2.bind(r3)(r1);
                    r4 = _closure1_slot0;
                    r2 = r4.nativeRequireModuleConfig;
                    r1 = "Can't lazily create module without nativeRequireModuleConfig";
                    r1 = r5.bind(r3)(r2, r1);
                    r2 = r4.nativeRequireModuleConfig;
                    r1 = a0;
                    r2 = r2.bind(r4)(r1);
                    r1 = _closure1_slot6;
                    r0 = a1;
                    r1 = r1.bind(r3)(r2, r0);
                    r0 = r1;
                    if(!r0) { _fun335_ip = 84; continue _fun335 }
case 78:
                    r0 = r1.module;
case 84:
                    return r0;
                }
            };
            var _closure1_slot7 = r0;
            r0 = function(a0, a1, a2) { // Original name: genMethod, environment: r4
                _fun336: for(var _fun336_ip = 0; ; ) switch(_fun336_ip) {
case 0:
                    r1 = a2;
                    r0 = a0;
                    var _closure2_slot0 = r0;
                    r0 = a1;
                    var _closure2_slot1 = r0;
                    var _closure2_slot2 = r1;
                    r0 = 'promise';
                    if(!(r1 !== r0)) { _fun336_ip = 38; continue _fun336 }
case 31:
                    r0 = function() { // Original name: nonPromiseMethodWrapper, environment: r2
                        _fun341: for(var _fun341_ip = 0; ; ) switch(_fun341_ip) {
case 0:
                            r3 = undefined;
                            r5 = undefined;
                            r1 = arguments.length;
                            r0 = global;
                            r0 = r0.Array;
                            r2 = r0.prototype;
                            r2 = Object.create(r2, {constructor: {value: r0}});
                            r16 = r2;
                            r15 = r1;
                            r0 = new r16[r0](r15, r14);
                            r4 = r0 instanceof Object ? r0 : r2;
                            r2 = 0;
                            r6 = r2 < r1;
                            r0 = 0;
                            if(!r6) { _fun341_ip = 64; continue _fun341 }
case 49:
                            r6 = arguments[r0];
                            r4[r0] = r6;
                            r0 = r0 + 1;
                            if(r0 < r1) { _fun341_ip = 49; continue _fun341 }
case 64:
                            r0 = r4.length;
                            r0 = r0 > r2;
                            r7 = null;
                            if(!r0) { _fun341_ip = 94; continue _fun341 }
case 78:
                            r1 = r4.length;
                            r0 = 1;
                            r0 = r1 - r0;
                            r7 = r4[r0];
case 94:
                            r1 = r4.length;
                            r0 = 1;
                            r0 = r1 > r0;
                            r1 = null;
                            if(!r0) { _fun341_ip = 127; continue _fun341 }
case 111:
                            r5 = r4.length;
                            r0 = 2;
                            r0 = r5 - r0;
                            r1 = r4[r0];
case 127:
                            r0 = typeof r7;
                            r5 = 'function';
                            r8 = r0 === r5;
                            r0 = typeof r1;
                            r0 = r0 === r5;
                            if(!r0) { _fun341_ip = 181; continue _fun341 }
case 148:
                            r9 = _closure1_slot1;
                            r10 = _closure1_slot2;
                            r5 = 2;
                            r5 = r10[r5];
                            r9 = r9.bind(r3)(r5);
                            r5 = 'Cannot have a non-function arg after a function arg.';
                            r5 = r9.bind(r3)(r8, r5);
case 181:
                            r5 = null;
                            if(!r8) { _fun341_ip = 189; continue _fun341 }
case 186:
                            r5 = r7;
case 189:
                            r6 = null;
                            if(!r0) { _fun341_ip = 197; continue _fun341 }
case 194:
                            r6 = r1;
case 197:
                            r1 = r4.slice;
                            r7 = r4.length;
                            r0 = r8 + r0;
                            r0 = r7 - r0;
                            r4 = r1.bind(r4)(r2, r0);
                            r2 = _closure2_slot2;
                            r1 = 'sync';
                            if(!(r2 !== r1)) { _fun341_ip = 296; continue _fun341 }
case 236:
                            r2 = _closure1_slot1;
                            r7 = _closure1_slot2;
                            r1 = 3;
                            r1 = r7[r1];
                            r1 = r2.bind(r3)(r1);
                            r8 = r1.default;
                            r7 = r8.enqueueNativeCall;
                            r15 = _closure2_slot0;
                            r14 = _closure2_slot1;
                            r16 = r8;
                            r13 = r4;
                            r12 = r6;
                            r11 = r5;
                            r1 = r16[r7](r15, r14, r13, r12, r11, r10);
                            return r3;
case 296:
                            r2 = _closure1_slot1;
                            r7 = _closure1_slot2;
                            r1 = 3;
                            r1 = r7[r1];
                            r1 = r2.bind(r3)(r1);
                            r3 = r1.default;
                            r2 = r3.callNativeSyncHook;
                            r15 = _closure2_slot0;
                            r14 = _closure2_slot1;
                            r16 = r3;
                            r13 = r4;
                            r12 = r6;
                            r11 = r5;
                            r0 = r16[r2](r15, r14, r13, r12, r11, r10);
                            return r0;
                        }
                    };
                    _fun336_ip = 43; continue _fun336;
case 38:
                    r0 = function() { // Original name: promiseMethodWrapper, environment: r2
                        _fun337: for(var _fun337_ip = 0; ; ) switch(_fun337_ip) {
case 0:
                            r5 = undefined;
                            r4 = arguments.length;
                            r1 = global;
                            r2 = r1.Array;
                            r3 = r2.prototype;
                            r3 = Object.create(r3, {constructor: {value: r2}});
                            r8 = r3;
                            r7 = r4;
                            r2 = new r8[r2](r7, r6);
                            r3 = r2 instanceof Object ? r2 : r3;
                            var _closure3_slot0 = r3;
                            r2 = 0;
                            r6 = r2 < r4;
                            if(!r6) { _fun337_ip = 66; continue _fun337 }
case 51:
                            r6 = arguments[r2];
                            r3[r2] = r6;
                            r2 = r2 + 1;
                            if(r2 < r4) { _fun337_ip = 51; continue _fun337 }
case 66:
                            r2 = r1.Error;
                            r3 = r2.prototype;
                            r3 = Object.create(r3, {constructor: {value: r2}});
                            r8 = r3;
                            r2 = new r8[r2](r7);
                            r2 = r2 instanceof Object ? r2 : r3;
                            var _closure3_slot1 = r2;
                            r2 = r1.Promise;
                            r1 = r2.prototype;
                            r1 = Object.create(r1, {constructor: {value: r2}});
                            r7 = function(a0, a1) { // Environment: r0
                                r0 = a0;
                                var _closure4_slot0 = r0;
                                r0 = a1;
                                var _closure4_slot1 = r0;
                                r3 = _closure1_slot1;
                                r2 = _closure1_slot2;
                                r0 = 3;
                                r2 = r2[r0];
                                r0 = undefined;
                                r2 = r3.bind(r0)(r2);
                                r7 = r2.default;
                                r6 = r7.enqueueNativeCall;
                                r12 = _closure2_slot0;
                                r11 = _closure2_slot1;
                                r10 = _closure3_slot0;
                                r9 = function(a0) { // Environment: r1
                                    r2 = _closure4_slot0;
                                    r1 = undefined;
                                    r0 = a0;
                                    r0 = r2.bind(r1)(r0);
                                    return r0;
                                };
                                r8 = function(a0) { // Environment: r1
                                    r2 = _closure4_slot1;
                                    r4 = _closure1_slot10;
                                    r3 = _closure3_slot1;
                                    r1 = undefined;
                                    r0 = a0;
                                    r0 = r4.bind(r1)(r0, r3);
                                    r0 = r2.bind(r1)(r0);
                                    return r0;
                                };
                                r13 = r7;
                                r1 = r13[r6](r12, r11, r10, r9, r8, r7);
                                return r0;
                            };
                            r8 = r1;
                            r0 = new r8[r2](r7, r6);
                            r0 = r0 instanceof Object ? r0 : r1;
                            return r0;
                        }
                    };
case 43:
                    r0['type'] = r1;
                    return r0;
                }
            };
            var _closure1_slot8 = r0;
            r0 = function(a0, a1) { // Original name: arrayContains, environment: r4
                r2 = a0;
                r1 = r2.indexOf;
                r0 = a1;
                r1 = r1.bind(r2)(r0);
                r0 = -1;
                r0 = r1 !== r0;
                return r0;
            };
            var _closure1_slot9 = r0;
            r0 = function(a0, a1) { // Original name: updateErrorWithErrorData, environment: r4
                _fun343: for(var _fun343_ip = 0; ; ) switch(_fun343_ip) {
case 0:
                    r3 = a0;
                    r0 = global;
                    r2 = r0.Object;
                    r1 = r2.assign;
                    if(r3) { _fun343_ip = 21; continue _fun343 }
case 19:
                    r3 = {};
case 21:
                    r0 = a1;
                    r0 = r1.bind(r2)(r0, r3);
                    return r0;
                }
            };
            var _closure1_slot10 = r0;
            r0 = 0;
            r5 = r8[r0];
            r0 = undefined;
            r6 = r7.bind(r0)(r5);
            r5 = global;
            r11 = r5.Object;
            r10 = r11.defineProperty;
            r9 = {};
            r5 = true;
            r9['value'] = r5;
            r5 = '__esModule';
            r5 = r10.bind(r11)(r2, r5, r9);
            r2['default'] = r0;
            r5 = 1;
            r5 = r8[r5];
            r5 = r7.bind(r0)(r5);
            r5 = r6.bind(r0)(r5);
            var _closure1_slot3 = r5;
            r3['__fbGenNativeModule'] = r1;
            r1 = {};
            var _closure1_slot4 = r1;
            r5 = r3.nativeModuleProxy;
            if(r5) { _fun331_ip = 243; continue _fun331 }
case 164:
            r5 = r3.__fbBatchedBridgeConfig;
            r6 = 2;
            r6 = r8[r6];
            r9 = r7.bind(r0)(r6);
            r6 = '__fbBatchedBridgeConfig is not set, cannot invoke native modules';
            r6 = r9.bind(r0)(r5, r6);
            r6 = 4;
            r6 = r8[r6];
            r6 = r7.bind(r0)(r6);
            r6 = r6.default;
            var _closure1_slot5 = r6;
            r7 = r5.remoteModuleConfig;
            if(r7) { _fun331_ip = 226; continue _fun331 }
case 222:
            r7 = new Array(0);
case 226:
            r6 = r7.forEach;
            r5 = function(a0, a1) { // Environment: r4
                _fun344: for(var _fun344_ip = 0; ; ) switch(_fun344_ip) {
case 0:
                    r4 = a1;
                    var _closure2_slot0 = r4;
                    r3 = _closure1_slot6;
                    r0 = undefined;
                    r1 = a0;
                    r1 = r3.bind(r0)(r1, r4);
                    var _closure2_slot1 = r1;
                    if(r1) { _fun344_ip = 36; continue _fun344 }
case 34:
                    return r0;
case 36:
                    r3 = r1.module;
                    if(r3) { _fun344_ip = 78; continue _fun344 }
case 45:
                    r6 = _closure1_slot5;
                    r5 = _closure1_slot4;
                    r4 = r1.name;
                    r3 = {};
                    r7 = function() { // Original name: get, environment: r7
                        r3 = _closure1_slot7;
                        r1 = _closure2_slot1;
                        r2 = r1.name;
                        r1 = _closure2_slot0;
                        r0 = undefined;
                        r0 = r3.bind(r0)(r2, r1);
                        return r0;
                    };
                    r3['get'] = r7;
                    r3 = r6.bind(r0)(r5, r4, r3);
                    _fun344_ip = 97; continue _fun344;
case 78:
                    r3 = _closure1_slot4;
                    r2 = r1.name;
                    r1 = r1.module;
                    r3[r2] = r1;
case 97:
                    return r0;
                }
            };
            r5 = r6.bind(r7)(r5);
            _fun331_ip = 256; continue _fun331;
case 243:
            r3 = r3.nativeModuleProxy;
            _closure1_slot4 = r3;
            r1 = r3;
case 256:
            r2['default'] = r1;
            return r0;
        }
    };
    r5 = 37;
    r4 = [1, 38, 20, 4, 42];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r0 = a4;
        r2 = a1;
        var _closure1_slot0 = r2;
        r2 = a6;
        var _closure1_slot1 = r2;
        r1 = function(a0, a1) { // Original name: _slicedToArray, environment: r1
            _fun347: for(var _fun347_ip = 0; ; ) switch(_fun347_ip) {
case 0:
                r5 = a0;
                r4 = a1;
                r3 = _closure1_slot0;
                r2 = _closure1_slot1;
                r0 = 0;
                r0 = r2[r0];
                r2 = undefined;
                r0 = r3.bind(r2)(r0);
                r0 = r0.bind(r2)(r5);
                if(r0) { _fun347_ip = 64; continue _fun347 }
case 38:
                r6 = _closure1_slot0;
                r7 = _closure1_slot1;
                r3 = 1;
                r3 = r7[r3];
                r3 = r6.bind(r2)(r3);
                r0 = r3.bind(r2)(r5, r4);
case 64:
                if(r0) { _fun347_ip = 93; continue _fun347 }
case 67:
                r6 = _closure1_slot0;
                r7 = _closure1_slot1;
                r3 = 2;
                r3 = r7[r3];
                r3 = r6.bind(r2)(r3);
                r0 = r3.bind(r2)(r5, r4);
case 93:
                if(r0) { _fun347_ip = 120; continue _fun347 }
case 96:
                r3 = _closure1_slot0;
                r4 = _closure1_slot1;
                r1 = 3;
                r1 = r4[r1];
                r1 = r3.bind(r2)(r1);
                r0 = r1.bind(r2)();
case 120:
                return r0;
            }
        };
        r0['exports'] = r1;
        r2 = r0.exports;
        r1 = true;
        r2['__esModule'] = r1;
        r1 = r0.exports;
        r0 = r0.exports;
        r1['default'] = r0;
        r0 = undefined;
        return r0;
    };
    r5 = 38;
    r4 = [39, 40, 10, 41];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r0 = a4;
        r1 = function(a0) { // Original name: _arrayWithHoles, environment: r1
            _fun349: for(var _fun349_ip = 0; ; ) switch(_fun349_ip) {
case 0:
                r0 = a0;
                r1 = global;
                r2 = r1.Array;
                r1 = r2.isArray;
                r1 = r1.bind(r2)(r0);
                if(r1) { _fun349_ip = 28; continue _fun349 }
case 24:
                r1 = undefined;
                return r1;
case 28:
                return r0;
            }
        };
        r0['exports'] = r1;
        r2 = r0.exports;
        r1 = true;
        r2['__esModule'] = r1;
        r1 = r0.exports;
        r0 = r0.exports;
        r1['default'] = r0;
        r0 = undefined;
        return r0;
    };
    r5 = 39;
    r4 = new Array(0);
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r0 = a4;
        r1 = function(a0, a1) { // Original name: _iterableToArrayLimit, environment: r1
            _fun351: for(var _fun351_ip = 0; ; ) switch(_fun351_ip) {
case 0:
                r8 = a0;
                r7 = r8;
                r11 = a1;
                r3 = undefined;
                r4 = undefined;
                r12 = undefined;
                r0 = undefined;
                r13 = undefined;
                r1 = undefined;
                r5 = undefined;
                r2 = undefined;
                r6 = null;
                r9 = r6 == r8;
                r8 = null;
                if(r9) { _fun351_ip = 90; continue _fun351 }
case 36:
                r10 = global;
                r9 = r10.Symbol;
                r14 = 'undefined';
                r9 = typeof r9;
                r9 = r14 !== r9;
                if(!r9) { _fun351_ip = 75; continue _fun351 }
case 57:
                r14 = r7;
                r10 = r10.Symbol;
                r10 = r10.iterator;
                r9 = r14[r10];
case 75:
                if(r9) { _fun351_ip = 87; continue _fun351 }
case 78:
                r10 = r7;
                r9 = r10["@@iterator"];
case 87:
                r8 = r9;
case 90:
                r4 = r8;
                if(!(r6 == r8)) { _fun351_ip = 99; continue _fun351 }
case 97:
                return r3;
case 99:
                r1 = new Array(0);
                r5 = true;
                r2 = false;
case 107: // try_start_0 // try_start_1
                r14 = r4;
                r10 = r14.call;
                r7 = r10.bind(r14)(r7);
                r4 = r7;
                r13 = r7.next;
                r10 = r11;
                r7 = 0;
                if(!(r7 !== r10)) { _fun351_ip = 273; continue _fun351 }
case 140:
                r14 = r13;
                r10 = r14.call;
                r7 = r4;
                r7 = r10.bind(r14)(r7);
                r12 = r7;
                r7 = r7.done;
                r5 = r7;
                if(r7) { _fun351_ip = 295; continue _fun351 }
case 173:
                r7 = r1;
                r14 = r7.push;
                r10 = r12;
                r10 = r10.value;
                r10 = r14.bind(r7)(r10);
                r10 = r7.length;
                r7 = r11;
                if(!(r10 !== r7)) { _fun351_ip = 295; continue _fun351 }
case 206:
                r5 = true;
                r14 = r13;
                r10 = r14.call;
                r7 = r4;
                r7 = r10.bind(r14)(r7);
                r12 = r7;
                r7 = r7.done;
                r5 = r7;
                if(r7) { _fun351_ip = 295; continue _fun351 }
case 238:
                r7 = r1;
                r14 = r7.push;
                r10 = r12;
                r10 = r10.value;
                r10 = r14.bind(r7)(r10);
                r10 = r7.length;
                r7 = r11;
                if(r10 !== r7) { _fun351_ip = 206; continue _fun351 }
case 271:
                _fun351_ip = 295; continue _fun351;
case 273:
                r7 = global;
                r10 = r7.Object;
                r11 = r4;
                r10 = r10.bind(r3)(r11);
                if(!(r10 === r11)) { _fun351_ip = 297; continue _fun351 }
case 293:
                r5 = false;
case 295: // try_end0
                _fun351_ip = 387; continue _fun351;
case 297: // try_start_2 // try_end1
                r9 = r5;
                if(r9) { _fun351_ip = 355; continue _fun351 }
case 303:
                r9 = r4;
                r9 = r9.return;
                if(!(r6 != r9)) { _fun351_ip = 355; continue _fun351 }
case 315:
                r10 = r4;
                r9 = r10.return;
                r9 = r9.bind(r10)();
                r7 = r7.Object;
                r7 = r7.bind(r3)(r9);
                if(!(r7 !== r9)) { _fun351_ip = 355; continue _fun351 }
case 342: // try_end2
                r7 = r2;
                if(r7) { _fun351_ip = 350; continue _fun351 }
case 348:
                return r3;
case 350:
                r7 = r0;
                throw r7;
case 355:
                r7 = r2;
                if(r7) { _fun351_ip = 363; continue _fun351 }
case 361:
                return r3;
case 363:
                r7 = r0;
                throw r7;
case 368: // catch_target2
                CatchBlockStart(arg_register=7);
                r9 = r2;
                if(r9) { _fun351_ip = 378; continue _fun351 }
case 376:
                throw r7;
case 378:
                r7 = r0;
                throw r7;
case 383: // try_start_3 // catch_target0
                CatchBlockStart(arg_register=0);
                r2 = true;
case 387: // try_start_4 // try_end3
                r7 = r5;
                if(r7) { _fun351_ip = 447; continue _fun351 }
case 393:
                r7 = r4;
                r7 = r7.return;
                if(!(r6 != r7)) { _fun351_ip = 447; continue _fun351 }
case 405:
                r8 = r4;
                r7 = r8.return;
                r8 = r7.bind(r8)();
                r7 = global;
                r7 = r7.Object;
                r7 = r7.bind(r3)(r8);
                if(!(r7 !== r8)) { _fun351_ip = 447; continue _fun351 }
case 434: // try_end4
                r7 = r2;
                if(r7) { _fun351_ip = 442; continue _fun351 }
case 440:
                return r3;
case 442:
                r7 = r0;
                throw r7;
case 447:
                r7 = r2;
                if(r7) { _fun351_ip = 455; continue _fun351 }
case 453:
                return r1;
case 455:
                r1 = r0;
                throw r1;
case 460: // catch_target4
                CatchBlockStart(arg_register=1);
                r7 = r2;
                if(r7) { _fun351_ip = 470; continue _fun351 }
case 468:
                throw r1;
case 470:
                r1 = r0;
                throw r1;
case 475: // catch_target1 // catch_target3
                CatchBlockStart(arg_register=1);
case 477: // try_start_5
                if(r5) { _fun351_ip = 534; continue _fun351 }
case 480:
                r5 = r4;
                r5 = r5.return;
                if(!(r6 != r5)) { _fun351_ip = 534; continue _fun351 }
case 492:
                r5 = r4;
                r4 = r5.return;
                r5 = r4.bind(r5)();
                r4 = global;
                r4 = r4.Object;
                r4 = r4.bind(r3)(r5);
                if(!(r4 !== r5)) { _fun351_ip = 534; continue _fun351 }
case 521: // try_end5
                r4 = r2;
                if(r4) { _fun351_ip = 529; continue _fun351 }
case 527:
                return r3;
case 529:
                r3 = r0;
                throw r3;
case 534:
                r3 = r2;
                if(r3) { _fun351_ip = 542; continue _fun351 }
case 540:
                throw r1;
case 542:
                r1 = r0;
                throw r1;
case 547: // catch_target5
                CatchBlockStart(arg_register=1);
                if(r2) { _fun351_ip = 554; continue _fun351 }
case 552:
                throw r1;
case 554:
                throw r0;
            }
        };
        r0['exports'] = r1;
        r2 = r0.exports;
        r1 = true;
        r2['__esModule'] = r1;
        r1 = r0.exports;
        r0 = r0.exports;
        r1['default'] = r0;
        r0 = undefined;
        return r0;
    };
    r5 = 40;
    r4 = new Array(0);
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r0 = a4;
        r1 = function() { // Original name: _nonIterableRest, environment: r1
            r0 = global;
            r2 = r0.TypeError;
            r0 = r2.prototype;
            r1 = Object.create(r0, {constructor: {value: r2}});
            r3 = 'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            r4 = r1;
            r0 = new r4[r2](r3, r2);
            r0 = r0 instanceof Object ? r0 : r1;
            throw r0;
        };
        r0['exports'] = r1;
        r2 = r0.exports;
        r1 = true;
        r2['__esModule'] = r1;
        r1 = r0.exports;
        r0 = r0.exports;
        r1['default'] = r0;
        r0 = undefined;
        return r0;
    };
    r5 = 41;
    r4 = new Array(0);
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
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
        r1 = function(a0, a1, a2) { // Original name: defineLazyObjectProperty, environment: r1
            r4 = a0;
            r3 = a1;
            r1 = a2;
            var _closure2_slot0 = r4;
            var _closure2_slot1 = r3;
            r6 = function(a0) { // Original name: setValue, environment: r7
                r7 = a0;
                var _closure2_slot5 = r7;
                r6 = true;
                _closure2_slot6 = r6;
                r0 = global;
                r4 = r0.Object;
                r3 = r4.defineProperty;
                r2 = _closure2_slot0;
                r1 = _closure2_slot1;
                r0 = {};
                r0['value'] = r7;
                r0['configurable'] = r6;
                r6 = _closure2_slot3;
                r0['enumerable'] = r6;
                r5 = _closure2_slot4;
                r0['writable'] = r5;
                r0 = r3.bind(r4)(r2, r1, r0);
                r0 = undefined;
                return r0;
            };
            var _closure2_slot7 = r6;
            r0 = r1.get;
            var _closure2_slot2 = r0;
            r2 = r1.enumerable;
            r0 = false;
            r5 = r2 !== r0;
            var _closure2_slot3 = r5;
            r1 = r1.writable;
            r1 = r1 !== r0;
            var _closure2_slot4 = r1;
            var _closure2_slot6 = r0;
            r0 = global;
            r2 = r0.Object;
            r1 = r2.defineProperty;
            r0 = {};
            r7 = function() { // Original name: getValue, environment: r7
                _fun356: for(var _fun356_ip = 0; ; ) switch(_fun356_ip) {
case 0:
                    r1 = _closure2_slot6;
                    if(r1) { _fun356_ip = 35; continue _fun356 }
case 10:
                    r1 = true;
                    _closure2_slot6 = r1;
                    r3 = _closure2_slot7;
                    r1 = _closure2_slot2;
                    r2 = undefined;
                    r1 = r1.bind(r2)();
                    r1 = r3.bind(r2)(r1);
case 35:
                    r0 = _closure2_slot5;
                    return r0;
                }
            };
            r0['get'] = r7;
            r0['set'] = r6;
            r6 = true;
            r0['configurable'] = r6;
            r0['enumerable'] = r5;
            r0 = r1.bind(r2)(r4, r3, r0);
            r0 = undefined;
            return r0;
        };
        r2['default'] = r1;
        return r0;
    };
    r5 = 42;
    r4 = new Array(0);
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
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
        r1 = function(a0, a1) { // Original name: legacySendAccessibilityEvent, environment: r1
            _fun359: for(var _fun359_ip = 0; ; ) switch(_fun359_ip) {
case 0:
                r3 = a0;
                r1 = a1;
                r0 = 'focus';
                if(!(r1 === r0)) { _fun359_ip = 84; continue _fun359 }
case 14:
                r2 = _closure1_slot1;
                r5 = r2.default;
                r2 = _closure1_slot0;
                r2 = r2.default;
                r2 = r2.sendAccessibilityEvent;
                r4 = undefined;
                r2 = r5.bind(r4)(r2);
                r0 = _closure1_slot0;
                r5 = r0.default;
                r0 = r5.getConstants;
                r0 = r0.bind(r5)();
                r0 = r0.AccessibilityEventTypes;
                r0 = r0.typeViewFocused;
                r0 = r2.bind(r4)(r3, r0);
case 84:
                r0 = 'click';
                if(!(r1 === r0)) { _fun359_ip = 162; continue _fun359 }
case 92:
                r1 = _closure1_slot1;
                r4 = r1.default;
                r1 = _closure1_slot0;
                r1 = r1.default;
                r1 = r1.sendAccessibilityEvent;
                r2 = undefined;
                r1 = r4.bind(r2)(r1);
                r0 = _closure1_slot0;
                r4 = r0.default;
                r0 = r4.getConstants;
                r0 = r0.bind(r4)();
                r0 = r0.AccessibilityEventTypes;
                r0 = r0.typeViewClicked;
                r0 = r1.bind(r2)(r3, r0);
case 162:
                r0 = undefined;
                return r0;
            }
        };
        r2['default'] = r1;
        return r0;
    };
    r5 = 43;
    r4 = [1, 44, 45];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun360: for(var _fun360_ip = 0; ; ) switch(_fun360_ip) {
case 0:
            r5 = a1;
            r2 = a5;
            r7 = a6;
            var _closure1_slot0 = r5;
            var _closure1_slot1 = r7;
            r0 = function(a0) { // Original name: isFabricReactTag, environment: r1
                r1 = a0;
                r0 = 2;
                r1 = r1 % r0;
                r0 = 0;
                r0 = r1 === r0;
                return r0;
            };
            var _closure1_slot4 = r0;
            r0 = 0;
            r3 = r7[r0];
            r0 = undefined;
            r8 = r5.bind(r0)(r3);
            r3 = global;
            r11 = r3.Object;
            r10 = r11.defineProperty;
            r9 = {};
            r6 = true;
            r9['value'] = r6;
            r4 = '__esModule';
            r4 = r10.bind(r11)(r2, r4, r9);
            r2['default'] = r0;
            r4 = 1;
            r4 = r7[r4];
            r4 = r5.bind(r0)(r4);
            r4 = r8.bind(r0)(r4);
            var _closure1_slot2 = r4;
            r4 = a0;
            r4 = r4.RN$Bridgeless;
            if(!(r4 !== r6)) { _fun360_ip = 132; continue _fun360 }
case 113:
            r4 = 3;
            r4 = r7[r4];
            r4 = r5.bind(r0)(r4);
            r6 = r4.default;
            _fun360_ip = 149; continue _fun360;
case 132:
            r4 = 2;
            r4 = r7[r4];
            r4 = r5.bind(r0)(r4);
            r6 = r4.default;
case 149:
            var _closure1_slot3 = r6;
            r5 = r3.Object;
            r4 = r5.assign;
            r3 = {};
            r7 = function(a0, a1) { // Original name: measure, environment: r1
                _fun362: for(var _fun362_ip = 0; ; ) switch(_fun362_ip) {
case 0:
                    r8 = a0;
                    r4 = a1;
                    r2 = _closure1_slot4;
                    r0 = undefined;
                    r2 = r2.bind(r0)(r8);
                    if(r2) { _fun362_ip = 41; continue _fun362 }
case 23:
                    r3 = _closure1_slot3;
                    r2 = r3.measure;
                    r2 = r2.bind(r3)(r8, r4);
                    _fun362_ip = 155; continue _fun362;
case 41:
                    r2 = _closure1_slot2;
                    r2 = r2.default;
                    r3 = _closure1_slot0;
                    r5 = _closure1_slot1;
                    r1 = 4;
                    r1 = r5[r1];
                    r1 = r3.bind(r0)(r1);
                    r1 = r1.getFabricUIManager;
                    r1 = r1.bind(r0)();
                    r3 = r2.bind(r0)(r1);
                    r1 = r3.findShadowNodeByTag_DEPRECATED;
                    r2 = r1.bind(r3)(r8);
                    if(r2) { _fun362_ip = 143; continue _fun362 }
case 99:
                    r1 = global;
                    r6 = r1.console;
                    r5 = r6.warn;
                    r1 = r1.HermesInternal;
                    r7 = r1.concat;
                    r1 = 'measure cannot find view with tag #';
                    r1 = r7.bind(r1)(r8);
                    r1 = r5.bind(r6)(r1);
                    r1 = r4.bind(r0)();
                    _fun362_ip = 155; continue _fun362;
case 143:
                    r1 = r3.measure;
                    r1 = r1.bind(r3)(r2, r4);
case 155:
                    return r0;
                }
            };
            r3['measure'] = r7;
            r7 = function(a0, a1) { // Original name: measureInWindow, environment: r1
                _fun363: for(var _fun363_ip = 0; ; ) switch(_fun363_ip) {
case 0:
                    r8 = a0;
                    r4 = a1;
                    r2 = _closure1_slot4;
                    r0 = undefined;
                    r2 = r2.bind(r0)(r8);
                    if(r2) { _fun363_ip = 41; continue _fun363 }
case 23:
                    r3 = _closure1_slot3;
                    r2 = r3.measureInWindow;
                    r2 = r2.bind(r3)(r8, r4);
                    _fun363_ip = 155; continue _fun363;
case 41:
                    r2 = _closure1_slot2;
                    r2 = r2.default;
                    r3 = _closure1_slot0;
                    r5 = _closure1_slot1;
                    r1 = 4;
                    r1 = r5[r1];
                    r1 = r3.bind(r0)(r1);
                    r1 = r1.getFabricUIManager;
                    r1 = r1.bind(r0)();
                    r3 = r2.bind(r0)(r1);
                    r1 = r3.findShadowNodeByTag_DEPRECATED;
                    r2 = r1.bind(r3)(r8);
                    if(r2) { _fun363_ip = 143; continue _fun363 }
case 99:
                    r1 = global;
                    r6 = r1.console;
                    r5 = r6.warn;
                    r1 = r1.HermesInternal;
                    r7 = r1.concat;
                    r1 = 'measure cannot find view with tag #';
                    r1 = r7.bind(r1)(r8);
                    r1 = r5.bind(r6)(r1);
                    r1 = r4.bind(r0)();
                    _fun363_ip = 155; continue _fun363;
case 143:
                    r1 = r3.measureInWindow;
                    r1 = r1.bind(r3)(r2, r4);
case 155:
                    return r0;
                }
            };
            r3['measureInWindow'] = r7;
            r7 = function(a0, a1, a2, a3) { // Original name: measureLayout, environment: r1
                _fun364: for(var _fun364_ip = 0; ; ) switch(_fun364_ip) {
case 0:
                    r3 = a0;
                    r2 = a1;
                    r6 = a2;
                    r5 = a3;
                    r4 = _closure1_slot4;
                    r0 = undefined;
                    r4 = r4.bind(r0)(r3);
                    if(r4) { _fun364_ip = 60; continue _fun364 }
case 29:
                    r7 = _closure1_slot3;
                    r4 = r7.measureLayout;
                    r13 = r7;
                    r12 = r3;
                    r11 = r2;
                    r10 = r6;
                    r9 = r5;
                    r4 = r13[r4](r12, r11, r10, r9, r8);
                    _fun364_ip = 159; continue _fun364;
case 60:
                    r4 = _closure1_slot2;
                    r4 = r4.default;
                    r7 = _closure1_slot0;
                    r8 = _closure1_slot1;
                    r1 = 4;
                    r1 = r8[r1];
                    r1 = r7.bind(r0)(r1);
                    r1 = r1.getFabricUIManager;
                    r1 = r1.bind(r0)();
                    r4 = r4.bind(r0)(r1);
                    r1 = r4.findShadowNodeByTag_DEPRECATED;
                    r3 = r1.bind(r4)(r3);
                    r1 = r4.findShadowNodeByTag_DEPRECATED;
                    r2 = r1.bind(r4)(r2);
                    if(!r3) { _fun364_ip = 132; continue _fun364 }
case 129:
                    if(r2) { _fun364_ip = 134; continue _fun364 }
case 132:
                    return r0;
case 134:
                    r1 = r4.measureLayout;
                    r13 = r4;
                    r12 = r3;
                    r11 = r2;
                    r10 = r6;
                    r9 = r5;
                    r1 = r13[r1](r12, r11, r10, r9, r8);
case 159:
                    return r0;
                }
            };
            r3['measureLayout'] = r7;
            r7 = function(a0, a1, a2) { // Original name: measureLayoutRelativeToParent, environment: r1
                _fun365: for(var _fun365_ip = 0; ; ) switch(_fun365_ip) {
case 0:
                    r3 = a0;
                    r7 = a2;
                    var _closure2_slot0 = r7;
                    r4 = _closure1_slot4;
                    r0 = undefined;
                    r4 = r4.bind(r0)(r3);
                    if(r4) { _fun365_ip = 51; continue _fun365 }
case 29:
                    r6 = _closure1_slot3;
                    r5 = r6.measureLayoutRelativeToParent;
                    r4 = a1;
                    r4 = r5.bind(r6)(r3, r4, r7);
                    _fun365_ip = 148; continue _fun365;
case 51:
                    r4 = global;
                    r6 = r4.console;
                    r5 = r6.warn;
                    r4 = 'RCTUIManager.measureLayoutRelativeToParent method is deprecated and it will not be implemented in newer versions of RN (Fabric) - T47686450';
                    r4 = r5.bind(r6)(r4);
                    r4 = _closure1_slot2;
                    r4 = r4.default;
                    r5 = _closure1_slot0;
                    r6 = _closure1_slot1;
                    r2 = 4;
                    r2 = r6[r2];
                    r2 = r5.bind(r0)(r2);
                    r2 = r2.getFabricUIManager;
                    r2 = r2.bind(r0)();
                    r4 = r4.bind(r0)(r2);
                    r2 = r4.findShadowNodeByTag_DEPRECATED;
                    r3 = r2.bind(r4)(r3);
                    if(!r3) { _fun365_ip = 148; continue _fun365 }
case 131:
                    r2 = r4.measure;
                    r1 = function(a0, a1, a2, a3, a4, a5) { // Environment: r1
                        r5 = _closure2_slot0;
                        r0 = undefined;
                        r9 = a0;
                        r8 = a1;
                        r7 = a2;
                        r6 = a3;
                        r10 = undefined;
                        r1 = r10[r5](r9, r8, r7, r6, r5);
                        return r0;
                    };
                    r1 = r2.bind(r4)(r3, r1);
case 148:
                    return r0;
                }
            };
            r3['measureLayoutRelativeToParent'] = r7;
            r1 = function(a0, a1, a2) { // Original name: dispatchViewManagerCommand, environment: r1
                _fun367: for(var _fun367_ip = 0; ; ) switch(_fun367_ip) {
case 0:
                    r2 = a0;
                    r6 = a1;
                    r5 = a2;
                    r1 = typeof r2;
                    r0 = 'number';
                    if(!(r1 === r0)) { _fun367_ip = 153; continue _fun367 }
case 23:
                    r3 = _closure1_slot4;
                    r0 = undefined;
                    r3 = r3.bind(r0)(r2);
                    if(r3) { _fun367_ip = 59; continue _fun367 }
case 40:
                    r4 = _closure1_slot3;
                    r3 = r4.dispatchViewManagerCommand;
                    r3 = r3.bind(r4)(r2, r6, r5);
                    _fun367_ip = 151; continue _fun367;
case 59:
                    r3 = _closure1_slot2;
                    r3 = r3.default;
                    r4 = _closure1_slot0;
                    r7 = _closure1_slot1;
                    r1 = 4;
                    r1 = r7[r1];
                    r1 = r4.bind(r0)(r1);
                    r1 = r1.getFabricUIManager;
                    r1 = r1.bind(r0)();
                    r4 = r3.bind(r0)(r1);
                    r1 = r4.findShadowNodeByTag_DEPRECATED;
                    r3 = r1.bind(r4)(r2);
                    if(!r3) { _fun367_ip = 151; continue _fun367 }
case 117:
                    r1 = global;
                    r1 = r1.HermesInternal;
                    r2 = r1.concat;
                    r1 = '';
                    r2 = r2.bind(r1)(r6);
                    r1 = r4.dispatchCommand;
                    r1 = r1.bind(r4)(r3, r2, r5);
case 151:
                    return r0;
case 153:
                    r0 = global;
                    r2 = r0.Error;
                    r0 = r2.prototype;
                    r1 = Object.create(r0, {constructor: {value: r2}});
                    r10 = 'dispatchViewManagerCommand: found null reactTag';
                    r11 = r1;
                    r0 = new r11[r2](r10, r9);
                    r0 = r0 instanceof Object ? r0 : r1;
                    throw r0;
                }
            };
            r3['dispatchViewManagerCommand'] = r1;
            r1 = {};
            r1 = r4.bind(r5)(r1, r6, r3);
            r2['default'] = r1;
            return r0;
        }
    };
    r5 = 44;
    r4 = [1, 45, 46, 49, 47];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r0 = a4;
        r2 = function(a0, a1) { // Original name: nullthrows, environment: r1
            _fun369: for(var _fun369_ip = 0; ; ) switch(_fun369_ip) {
case 0:
                r0 = a0;
                r3 = a1;
                r1 = null;
                if(!(r0 == r1)) { _fun369_ip = 68; continue _fun369 }
case 12:
                r1 = global;
                r1 = r1.Error;
                r2 = undefined;
                if(!(r3 === r2)) { _fun369_ip = 34; continue _fun369 }
case 26:
                r2 = 'Got unexpected ';
                r3 = r2 + r0;
case 34:
                r2 = r1.prototype;
                r2 = Object.create(r2, {constructor: {value: r1}});
                r5 = r2;
                r4 = r3;
                r1 = new r5[r1](r4, r3);
                r1 = r1 instanceof Object ? r1 : r2;
                r2 = 1;
                r1['framesToPop'] = r2;
                throw r1;
case 68:
                return r0;
            }
        };
        r0['exports'] = r2;
        r1 = r0.exports;
        r1['default'] = r2;
        r1 = global;
        r4 = r1.Object;
        r3 = r4.defineProperty;
        r2 = r0.exports;
        r1 = {};
        r0 = true;
        r1['value'] = r0;
        r0 = '__esModule';
        r0 = r3.bind(r4)(r2, r0, r1);
        r0 = undefined;
        return r0;
    };
    r5 = 45;
    r4 = new Array(0);
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun370: for(var _fun370_ip = 0; ; ) switch(_fun370_ip) {
case 0:
            r7 = a0;
            r8 = a1;
            r2 = a5;
            r9 = a6;
            var _closure1_slot0 = r8;
            var _closure1_slot1 = r9;
            r0 = function(a0, a1) { // Original name: raiseSoftError, environment: r3
                _fun371: for(var _fun371_ip = 0; ; ) switch(_fun371_ip) {
case 0:
                    r6 = a1;
                    r4 = global;
                    r2 = r4.console;
                    r1 = r2.error;
                    r0 = r4.HermesInternal;
                    r7 = r0.concat;
                    r5 = "[ReactNative Architecture][JS] '";
                    r3 = a0;
                    r0 = "' is not available in the new React Native architecture.";
                    r3 = r7.bind(r5)(r3, r0);
                    r0 = '';
                    if(!r6) { _fun371_ip = 71; continue _fun371 }
case 51:
                    r4 = r4.HermesInternal;
                    r5 = r4.concat;
                    r4 = ' ';
                    r0 = r5.bind(r4)(r6);
case 71:
                    r0 = r3 + r0;
                    r0 = r1.bind(r2)(r0);
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot10 = r0;
            r0 = 0;
            r1 = r9[r0];
            r0 = undefined;
            r6 = r8.bind(r0)(r1);
            r5 = global;
            r11 = r5.Object;
            r10 = r11.defineProperty;
            r4 = {};
            r1 = true;
            r4['value'] = r1;
            r1 = '__esModule';
            r1 = r10.bind(r11)(r2, r1, r4);
            r2['default'] = r0;
            r1 = 1;
            r1 = r9[r1];
            r1 = r8.bind(r0)(r1);
            r1 = r6.bind(r0)(r1);
            var _closure1_slot2 = r1;
            r1 = 2;
            r1 = r9[r1];
            r1 = r8.bind(r0)(r1);
            r1 = r6.bind(r0)(r1);
            r4 = 3;
            r4 = r9[r4];
            r4 = r8.bind(r0)(r4);
            r4 = r6.bind(r0)(r4);
            var _closure1_slot3 = r4;
            r6 = r7.RN$LegacyInterop_UIManager_getConstants;
            var _closure1_slot4 = r6;
            r4 = function() { // Environment: r3
                r1 = false;
                var _closure2_slot0 = r1;
                r1 = {};
                var _closure2_slot1 = r1;
                r0 = function() { // Environment: r0
                    _fun373: for(var _fun373_ip = 0; ; ) switch(_fun373_ip) {
case 0:
                        r1 = _closure2_slot0;
                        if(r1) { _fun373_ip = 47; continue _fun373 }
case 10:
                        r2 = _closure1_slot3;
                        r3 = r2.default;
                        r1 = _closure1_slot4;
                        r2 = undefined;
                        r1 = r3.bind(r2)(r1);
                        r1 = r1.bind(r2)();
                        _closure2_slot1 = r1;
                        r1 = true;
                        _closure2_slot0 = r1;
case 47:
                        r0 = _closure2_slot1;
                        return r0;
                    }
                };
                return r0;
            };
            r4 = r4.bind(r0)();
            var _closure1_slot5 = r4;
            r8 = r7.RN$LegacyInterop_UIManager_getConstantsForViewManager;
            var _closure1_slot6 = r8;
            r7 = r7.RN$LegacyInterop_UIManager_getDefaultEventTypes;
            var _closure1_slot7 = r7;
            r7 = function() { // Environment: r3
                r1 = false;
                var _closure2_slot0 = r1;
                r1 = null;
                var _closure2_slot1 = r1;
                r0 = function() { // Environment: r0
                    _fun375: for(var _fun375_ip = 0; ; ) switch(_fun375_ip) {
case 0:
                        r1 = _closure2_slot0;
                        if(r1) { _fun375_ip = 47; continue _fun375 }
case 10:
                        r2 = _closure1_slot3;
                        r3 = r2.default;
                        r1 = _closure1_slot7;
                        r2 = undefined;
                        r1 = r3.bind(r2)(r1);
                        r1 = r1.bind(r2)();
                        _closure2_slot1 = r1;
                        r1 = true;
                        _closure2_slot0 = r1;
case 47:
                        r0 = _closure2_slot1;
                        return r0;
                    }
                };
                return r0;
            };
            r7 = r7.bind(r0)();
            var _closure1_slot8 = r7;
            r13 = {};
            r7 = function(a0, a1) { // Original name: measure, environment: r3
                r2 = _closure1_slot10;
                r0 = undefined;
                r1 = 'measure';
                r1 = r2.bind(r0)(r1);
                return r0;
            };
            r13['measure'] = r7;
            r7 = function(a0, a1) { // Original name: measureInWindow, environment: r3
                r2 = _closure1_slot10;
                r0 = undefined;
                r1 = 'measureInWindow';
                r1 = r2.bind(r0)(r1);
                return r0;
            };
            r13['measureInWindow'] = r7;
            r7 = function(a0, a1, a2, a3) { // Original name: measureLayout, environment: r3
                r2 = _closure1_slot10;
                r0 = undefined;
                r1 = 'measureLayout';
                r1 = r2.bind(r0)(r1);
                return r0;
            };
            r13['measureLayout'] = r7;
            r7 = function(a0, a1, a2) { // Original name: measureLayoutRelativeToParent, environment: r3
                r2 = _closure1_slot10;
                r0 = undefined;
                r1 = 'measureLayoutRelativeToParent';
                r1 = r2.bind(r0)(r1);
                return r0;
            };
            r13['measureLayoutRelativeToParent'] = r7;
            r7 = function(a0, a1, a2) { // Original name: dispatchViewManagerCommand, environment: r3
                r2 = _closure1_slot10;
                r0 = undefined;
                r1 = 'dispatchViewManagerCommand';
                r1 = r2.bind(r0)(r1);
                return r0;
            };
            r13['dispatchViewManagerCommand'] = r7;
            r12 = {};
            r7 = function(a0, a1, a2, a3) { // Original name: createView, environment: r3
                r2 = _closure1_slot10;
                r0 = undefined;
                r1 = 'createView';
                r1 = r2.bind(r0)(r1);
                return r0;
            };
            r12['createView'] = r7;
            r7 = function(a0, a1, a2) { // Original name: updateView, environment: r3
                r2 = _closure1_slot10;
                r0 = undefined;
                r1 = 'updateView';
                r1 = r2.bind(r0)(r1);
                return r0;
            };
            r12['updateView'] = r7;
            r7 = function(a0, a1) { // Original name: setChildren, environment: r3
                r2 = _closure1_slot10;
                r0 = undefined;
                r1 = 'setChildren';
                r1 = r2.bind(r0)(r1);
                return r0;
            };
            r12['setChildren'] = r7;
            r7 = function(a0, a1, a2, a3, a4, a5) { // Original name: manageChildren, environment: r3
                r2 = _closure1_slot10;
                r0 = undefined;
                r1 = 'manageChildren';
                r1 = r2.bind(r0)(r1);
                return r0;
            };
            r12['manageChildren'] = r7;
            r7 = function(a0, a1) { // Original name: setJSResponder, environment: r3
                r2 = _closure1_slot10;
                r0 = undefined;
                r1 = 'setJSResponder';
                r1 = r2.bind(r0)(r1);
                return r0;
            };
            r12['setJSResponder'] = r7;
            r7 = function() { // Original name: clearJSResponder, environment: r3
                r2 = _closure1_slot10;
                r0 = undefined;
                r1 = 'clearJSResponder';
                r1 = r2.bind(r0)(r1);
                return r0;
            };
            r12['clearJSResponder'] = r7;
            r9 = r1.default;
            r8 = r9.select;
            r7 = {};
            r10 = {};
            r7['android'] = r10;
            r17 = r8.bind(r9)(r7);
            r8 = r1.default;
            r7 = r8.select;
            r1 = {};
            r9 = {};
            r10 = function(a0) { // Original name: getConstantsForViewManager, environment: r3
                _fun387: for(var _fun387_ip = 0; ; ) switch(_fun387_ip) {
case 0:
                    r1 = _closure1_slot6;
                    if(r1) { _fun387_ip = 29; continue _fun387 }
case 10:
                    r3 = _closure1_slot10;
                    r2 = undefined;
                    r1 = 'getConstantsForViewManager';
                    r1 = r3.bind(r2)(r1);
                    r1 = {};
                    return r1;
case 29:
                    r2 = _closure1_slot6;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
                }
            };
            r9['getConstantsForViewManager'] = r10;
            r10 = function() { // Original name: getDefaultEventTypes, environment: r3
                _fun388: for(var _fun388_ip = 0; ; ) switch(_fun388_ip) {
case 0:
                    r1 = _closure1_slot7;
                    if(r1) { _fun388_ip = 31; continue _fun388 }
case 10:
                    r3 = _closure1_slot10;
                    r2 = undefined;
                    r1 = 'getDefaultEventTypes';
                    r1 = r3.bind(r2)(r1);
                    r1 = new Array(0);
                    return r1;
case 31:
                    r1 = _closure1_slot8;
                    r0 = undefined;
                    r0 = r1.bind(r0)();
                    return r0;
                }
            };
            r9['getDefaultEventTypes'] = r10;
            r10 = function(a0) { // Original name: setLayoutAnimationEnabledExperimental, environment: r3
                r0 = undefined;
                return r0;
            };
            r9['setLayoutAnimationEnabledExperimental'] = r10;
            r10 = function(a0, a1) { // Original name: sendAccessibilityEvent, environment: r3
                _fun390: for(var _fun390_ip = 0; ; ) switch(_fun390_ip) {
case 0:
                    r8 = a0;
                    r5 = a1;
                    r0 = {'TYPE_VIEW_FOCUSED': 8, 'TYPE_WINDOW_STATE_CHANGED': 32, 'TYPE_VIEW_CLICKED': 1, 'TYPE_VIEW_HOVER_ENTER': 128};
                    r1 = r0.TYPE_VIEW_FOCUSED;
                    r4 = 'focus';
                    if(!(r5 !== r1)) { _fun390_ip = 114; continue _fun390 }
case 30:
                    r1 = r0.TYPE_WINDOW_STATE_CHANGED;
                    r4 = 'windowStateChange';
                    if(!(r5 !== r1)) { _fun390_ip = 114; continue _fun390 }
case 44:
                    r1 = r0.TYPE_VIEW_CLICKED;
                    r4 = 'click';
                    if(!(r5 !== r1)) { _fun390_ip = 114; continue _fun390 }
case 58:
                    r0 = r0.TYPE_VIEW_HOVER_ENTER;
                    r4 = 'viewHoverEnter';
                    if(!(r5 !== r0)) { _fun390_ip = 114; continue _fun390 }
case 72:
                    r0 = global;
                    r2 = r0.console;
                    r1 = r2.error;
                    r0 = r0.HermesInternal;
                    r3 = r0.concat;
                    r0 = 'sendAccessibilityEvent() dropping event: Called with unsupported eventType: ';
                    r0 = r3.bind(r0)(r5);
                    r0 = r1.bind(r2)(r0);
                    r0 = undefined;
                    return r0;
case 114:
                    r1 = _closure1_slot3;
                    r2 = r1.default;
                    r3 = _closure1_slot0;
                    r1 = _closure1_slot1;
                    r0 = 4;
                    r1 = r1[r0];
                    r0 = undefined;
                    r1 = r3.bind(r0)(r1);
                    r1 = r1.getFabricUIManager;
                    r1 = r1.bind(r0)();
                    r3 = r2.bind(r0)(r1);
                    r1 = r3.findShadowNodeByTag_DEPRECATED;
                    r2 = r1.bind(r3)(r8);
                    if(r2) { _fun390_ip = 217; continue _fun390 }
case 177:
                    r1 = global;
                    r6 = r1.console;
                    r5 = r6.error;
                    r1 = r1.HermesInternal;
                    r7 = r1.concat;
                    r1 = 'sendAccessibilityEvent() dropping event: Cannot find view with tag #';
                    r1 = r7.bind(r1)(r8);
                    r1 = r5.bind(r6)(r1);
                    return r0;
case 217:
                    r1 = r3.sendAccessibilityEvent;
                    r1 = r1.bind(r3)(r2, r4);
                    return r0;
                }
            };
            r9['sendAccessibilityEvent'] = r10;
            r1['android'] = r9;
            r9 = {};
            r10 = function(a0) { // Original name: lazilyLoadView, environment: r3
                r2 = _closure1_slot10;
                r1 = undefined;
                r0 = 'lazilyLoadView';
                r0 = r2.bind(r1)(r0);
                r0 = {};
                return r0;
            };
            r9['lazilyLoadView'] = r10;
            r10 = function(a0) { // Original name: focus, environment: r3
                _fun392: for(var _fun392_ip = 0; ; ) switch(_fun392_ip) {
case 0:
                    r7 = a0;
                    r1 = _closure1_slot3;
                    r2 = r1.default;
                    r3 = _closure1_slot0;
                    r1 = _closure1_slot1;
                    r0 = 4;
                    r1 = r1[r0];
                    r0 = undefined;
                    r1 = r3.bind(r0)(r1);
                    r1 = r1.getFabricUIManager;
                    r1 = r1.bind(r0)();
                    r5 = r2.bind(r0)(r1);
                    r1 = r5.findShadowNodeByTag_DEPRECATED;
                    r4 = r1.bind(r5)(r7);
                    if(r4) { _fun392_ip = 106; continue _fun392 }
case 66:
                    r1 = global;
                    r3 = r1.console;
                    r2 = r3.error;
                    r1 = r1.HermesInternal;
                    r6 = r1.concat;
                    r1 = 'focus() noop: Cannot find view with tag #';
                    r1 = r6.bind(r1)(r7);
                    r1 = r2.bind(r3)(r1);
                    return r0;
case 106:
                    r3 = r5.dispatchCommand;
                    r2 = 'focus';
                    r1 = new Array(0);
                    r1 = r3.bind(r5)(r4, r2, r1);
                    return r0;
                }
            };
            r9['focus'] = r10;
            r10 = function(a0) { // Original name: blur, environment: r3
                _fun393: for(var _fun393_ip = 0; ; ) switch(_fun393_ip) {
case 0:
                    r7 = a0;
                    r1 = _closure1_slot3;
                    r2 = r1.default;
                    r3 = _closure1_slot0;
                    r1 = _closure1_slot1;
                    r0 = 4;
                    r1 = r1[r0];
                    r0 = undefined;
                    r1 = r3.bind(r0)(r1);
                    r1 = r1.getFabricUIManager;
                    r1 = r1.bind(r0)();
                    r5 = r2.bind(r0)(r1);
                    r1 = r5.findShadowNodeByTag_DEPRECATED;
                    r4 = r1.bind(r5)(r7);
                    if(r4) { _fun393_ip = 106; continue _fun393 }
case 66:
                    r1 = global;
                    r3 = r1.console;
                    r2 = r3.error;
                    r1 = r1.HermesInternal;
                    r6 = r1.concat;
                    r1 = 'blur() noop: Cannot find view with tag #';
                    r1 = r6.bind(r1)(r7);
                    r1 = r2.bind(r3)(r1);
                    return r0;
case 106:
                    r3 = r5.dispatchCommand;
                    r2 = 'blur';
                    r1 = new Array(0);
                    r1 = r3.bind(r5)(r4, r2, r1);
                    return r0;
                }
            };
            r9['blur'] = r10;
            r1['ios'] = r9;
            r16 = r7.bind(r8)(r1);
            r9 = r5.Object;
            r8 = r9.assign;
            r7 = {};
            r1 = function(a0) { // Original name: getViewManagerConfig, environment: r3
                _fun394: for(var _fun394_ip = 0; ; ) switch(_fun394_ip) {
case 0:
                    r1 = a0;
                    r0 = _closure1_slot4;
                    if(r0) { _fun394_ip = 89; continue _fun394 }
case 13:
                    r5 = _closure1_slot10;
                    r0 = global;
                    r3 = r0.HermesInternal;
                    r6 = r3.concat;
                    r4 = "getViewManagerConfig('";
                    r3 = "')";
                    r4 = r6.bind(r4)(r1, r3);
                    r0 = r0.HermesInternal;
                    r7 = r0.concat;
                    r12 = "If '";
                    r10 = "' has a ViewManager and you want to retrieve its native ViewConfig, please turn on the native ViewConfig interop layer. If you want to see if this component is registered with React Native, please call hasViewManagerConfig('";
                    r8 = "') instead.";
                    r11 = r1;
                    r9 = r1;
                    r3 = r12[r7](r11, r10, r9, r8, r7);
                    r0 = undefined;
                    r0 = r5.bind(r0)(r4, r3);
                    r0 = null;
                    return r0;
case 89:
                    r3 = _closure1_slot5;
                    r0 = undefined;
                    r0 = r3.bind(r0)();
                    r3 = r0[r1];
                    if(r3) { _fun394_ip = 138; continue _fun394 }
case 106:
                    r3 = _closure1_slot9;
                    r3 = r3.getConstantsForViewManager;
                    if(!r3) { _fun394_ip = 138; continue _fun394 }
case 119:
                    r3 = _closure1_slot9;
                    r2 = r3.getConstantsForViewManager;
                    r2 = r2.bind(r3)(r1);
                    r0[r1] = r2;
case 138:
                    r0 = r0[r1];
                    return r0;
                }
            };
            r7['getViewManagerConfig'] = r1;
            r1 = function(a0) { // Original name: hasViewManagerConfig, environment: r3
                r1 = _closure1_slot0;
                r2 = _closure1_slot1;
                r0 = 5;
                r0 = r2[r0];
                r2 = undefined;
                r0 = r1.bind(r2)(r0);
                r1 = r0.unstable_hasComponent;
                r0 = a0;
                r0 = r1.bind(r2)(r0);
                return r0;
            };
            r7['hasViewManagerConfig'] = r1;
            r1 = function() { // Original name: getConstants, environment: r3
                _fun396: for(var _fun396_ip = 0; ; ) switch(_fun396_ip) {
case 0:
                    r1 = _closure1_slot4;
                    if(r1) { _fun396_ip = 29; continue _fun396 }
case 10:
                    r3 = _closure1_slot10;
                    r2 = undefined;
                    r1 = 'getConstants';
                    r1 = r3.bind(r2)(r1);
                    r1 = null;
                    return r1;
case 29:
                    r1 = _closure1_slot5;
                    r0 = undefined;
                    r0 = r1.bind(r0)();
                    return r0;
                }
            };
            r7['getConstants'] = r1;
            r1 = function(a0, a1, a2) { // Original name: findSubviewIn, environment: r3
                _fun397: for(var _fun397_ip = 0; ; ) switch(_fun397_ip) {
case 0:
                    r9 = a0;
                    r7 = a1;
                    r0 = a2;
                    var _closure2_slot0 = r0;
                    r2 = _closure1_slot3;
                    r3 = r2.default;
                    r4 = _closure1_slot0;
                    r2 = _closure1_slot1;
                    r0 = 4;
                    r2 = r2[r0];
                    r0 = undefined;
                    r2 = r4.bind(r0)(r2);
                    r2 = r2.getFabricUIManager;
                    r2 = r2.bind(r0)();
                    r6 = r3.bind(r0)(r2);
                    var _closure2_slot1 = r6;
                    r2 = r6.findShadowNodeByTag_DEPRECATED;
                    r5 = r2.bind(r6)(r9);
                    if(r5) { _fun397_ip = 122; continue _fun397 }
case 82:
                    r2 = global;
                    r4 = r2.console;
                    r3 = r4.error;
                    r2 = r2.HermesInternal;
                    r8 = r2.concat;
                    r2 = 'findSubviewIn() noop: Cannot find view with reactTag ';
                    r2 = r8.bind(r2)(r9);
                    r2 = r3.bind(r4)(r2);
                    return r0;
case 122:
                    r4 = r6.findNodeAtPoint;
                    r2 = 0;
                    r12 = r7[r2];
                    r2 = 1;
                    r11 = r7[r2];
                    r10 = function(a0) { // Environment: r1
                        _fun398: for(var _fun398_ip = 0; ; ) switch(_fun398_ip) {
case 0:
                            r1 = a0;
                            r2 = null;
                            if(!(r1 != r2)) { _fun398_ip = 99; continue _fun398 }
case 11:
                            r2 = r1.stateNode;
                            r3 = r2.node;
                            if(r3) { _fun398_ip = 51; continue _fun398 }
case 25:
                            r2 = global;
                            r5 = r2.console;
                            r4 = r5.error;
                            r2 = 'findSubviewIn(): Cannot find node at point';
                            r2 = r4.bind(r5)(r2);
                            r2 = undefined;
                            return r2;
case 51:
                            r1 = r1.stateNode;
                            r1 = r1.canonical;
                            r1 = r1.nativeTag;
                            var _closure3_slot0 = r1;
                            r2 = _closure2_slot1;
                            r1 = r2.measure;
                            r0 = function(a0, a1, a2, a3, a4, a5) { // Environment: r0
                                r6 = _closure2_slot0;
                                r11 = _closure3_slot0;
                                r0 = undefined;
                                r10 = a4;
                                r9 = a5;
                                r8 = a2;
                                r7 = a3;
                                r12 = undefined;
                                r1 = r12[r6](r11, r10, r9, r8, r7, r6);
                                return r0;
                            };
                            r0 = r1.bind(r2)(r3, r0);
                            r0 = undefined;
                            return r0;
case 99:
                            r0 = global;
                            r2 = r0.console;
                            r1 = r2.error;
                            r0 = 'findSubviewIn(): Cannot find node at point';
                            r0 = r1.bind(r2)(r0);
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r14 = r6;
                    r13 = r5;
                    r1 = r14[r4](r13, r12, r11, r10, r9);
                    return r0;
                }
            };
            r7['findSubviewIn'] = r1;
            r1 = function(a0, a1, a2) { // Original name: viewIsDescendantOf, environment: r3
                _fun400: for(var _fun400_ip = 0; ; ) switch(_fun400_ip) {
case 0:
                    r7 = a0;
                    r8 = a1;
                    r1 = _closure1_slot3;
                    r2 = r1.default;
                    r3 = _closure1_slot0;
                    r1 = _closure1_slot1;
                    r0 = 4;
                    r1 = r1[r0];
                    r0 = undefined;
                    r1 = r3.bind(r0)(r1);
                    r1 = r1.getFabricUIManager;
                    r1 = r1.bind(r0)();
                    r4 = r2.bind(r0)(r1);
                    r1 = r4.findShadowNodeByTag_DEPRECATED;
                    r3 = r1.bind(r4)(r7);
                    if(r3) { _fun400_ip = 109; continue _fun400 }
case 69:
                    r1 = global;
                    r5 = r1.console;
                    r2 = r5.error;
                    r1 = r1.HermesInternal;
                    r6 = r1.concat;
                    r1 = 'viewIsDescendantOf() noop: Cannot find view with reactTag ';
                    r1 = r6.bind(r1)(r7);
                    r1 = r2.bind(r5)(r1);
                    return r0;
case 109:
                    r1 = r4.findShadowNodeByTag_DEPRECATED;
                    r2 = r1.bind(r4)(r8);
                    if(r2) { _fun400_ip = 163; continue _fun400 }
case 123:
                    r1 = global;
                    r6 = r1.console;
                    r5 = r6.error;
                    r1 = r1.HermesInternal;
                    r7 = r1.concat;
                    r1 = 'viewIsDescendantOf() noop: Cannot find view with ancestorReactTag ';
                    r1 = r7.bind(r1)(r8);
                    r1 = r5.bind(r6)(r1);
                    return r0;
case 163:
                    r1 = r4.compareDocumentPosition;
                    r2 = r1.bind(r4)(r2, r3);
                    r1 = 16;
                    r3 = r2 & r1;
                    r2 = new Array(1);
                    r1 = 0;
                    r1 = r3 !== r1;
                    r2[0] = r1;
                    r1 = a2;
                    r1 = r1.bind(r0)(r2);
                    return r0;
                }
            };
            r7['viewIsDescendantOf'] = r1;
            r1 = function(a0, a1, a2) { // Original name: configureNextLayoutAnimation, environment: r3
                r1 = _closure1_slot3;
                r2 = r1.default;
                r3 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 4;
                r1 = r1[r0];
                r0 = undefined;
                r1 = r3.bind(r0)(r1);
                r1 = r1.getFabricUIManager;
                r1 = r1.bind(r0)();
                r5 = r2.bind(r0)(r1);
                r4 = r5.configureNextLayoutAnimation;
                r3 = a0;
                r2 = a1;
                r1 = a2;
                r1 = r4.bind(r5)(r3, r2, r1);
                return r0;
            };
            r7['configureNextLayoutAnimation'] = r1;
            r19 = {};
            r20 = r9;
            r18 = r13;
            r15 = r12;
            r14 = r7;
            r1 = r20[r8](r19, r18, r17, r16, r15, r14, r13);
            var _closure1_slot9 = r1;
            if(!r6) { _fun370_ip = 618; continue _fun370 }
case 535:
            r6 = r5.Object;
            r5 = r6.keys;
            r4 = r4.bind(r0)();
            r6 = r5.bind(r6)(r4);
            r5 = r6.forEach;
            r4 = function(a0) { // Environment: r3
                r3 = a0;
                r2 = _closure1_slot9;
                r1 = _closure1_slot5;
                r0 = undefined;
                r1 = r1.bind(r0)();
                r1 = r1[r3];
                r2[r3] = r1;
                return r0;
            };
            r4 = r5.bind(r6)(r4);
            r4 = r1.getConstants;
            r4 = r4.bind(r1)();
            r4 = r4.ViewManagerNames;
            if(!r4) { _fun370_ip = 618; continue _fun370 }
case 588:
            r4 = r1.getConstants;
            r4 = r4.bind(r1)();
            r5 = r4.ViewManagerNames;
            r4 = r5.forEach;
            r3 = function(a0) { // Environment: r3
                r4 = a0;
                var _closure2_slot0 = r4;
                r2 = _closure1_slot2;
                r3 = r2.default;
                r2 = _closure1_slot9;
                r1 = {};
                r0 = function() { // Original name: get, environment: r0
                    r1 = _closure1_slot3;
                    r1 = r1.default;
                    r0 = _closure1_slot9;
                    r0 = r0.getConstantsForViewManager;
                    r2 = undefined;
                    r1 = r1.bind(r2)(r0);
                    r0 = _closure2_slot0;
                    r0 = r1.bind(r2)(r0);
                    return r0;
                };
                r1['get'] = r0;
                r0 = undefined;
                r1 = r3.bind(r0)(r2, r4, r1);
                return r0;
            };
            r3 = r4.bind(r5)(r3);
case 618:
            r2['default'] = r1;
            return r0;
        }
    };
    r5 = 46;
    r4 = [1, 42, 33, 45, 47, 48];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r4 = a1;
        r6 = a5;
        r5 = a6;
        r0 = a0;
        var _closure1_slot0 = r0;
        r0 = function(a0, a1) { // Original name: createProxyWithCachedProperties, environment: r2
            _fun407: for(var _fun407_ip = 0; ; ) switch(_fun407_ip) {
case 0:
                r5 = a0;
                var _closure2_slot0 = r5;
                r3 = undefined;
                r4 = undefined;
                r0 = global;
                r2 = r0.Object;
                r0 = r2.create;
                r0 = r0.bind(r2)(r5);
                var _closure2_slot1 = r0;
                r4 = function(a0) { // Original name: _loop, environment: r1
                    r4 = a0;
                    var _closure3_slot0 = r4;
                    r1 = _closure1_slot1;
                    r3 = r1.default;
                    r2 = _closure2_slot1;
                    r1 = {};
                    r0 = function() { // Original name: get, environment: r0
                        r1 = _closure2_slot0;
                        r0 = _closure3_slot0;
                        r0 = r1[r0];
                        return r0;
                    };
                    r1['get'] = r0;
                    r0 = undefined;
                    r1 = r3.bind(r0)(r2, r4, r1);
                    return r0;
                };
                r1 = a1;
                r2 = r1[Symbol.iterator];
                r1 = r2().next;
case 46:
                r6 = r1().value;
                r5 = r2;
                if(!(r5 !== r3)) { _fun407_ip = 74; continue _fun407 }
case 57: // try_start_0
                r5 = r4;
                r5 = r5.bind(r3)(r6);
case 65: // try_end0
                _fun407_ip = 46; continue _fun407;
case 67: // catch_target0
                CatchBlockStart(arg_register=1);
                r2.return();
                throw r1;
case 74:
                return r0;
            }
        };
        var _closure1_slot4 = r0;
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
        r1 = function() { // Original name: getFabricUIManager, environment: r2
            _fun406: for(var _fun406_ip = 0; ; ) switch(_fun406_ip) {
case 0:
                r1 = _closure1_slot2;
                r2 = null;
                if(!(r1 == r2)) { _fun406_ip = 57; continue _fun406 }
case 13:
                r1 = _closure1_slot0;
                r1 = r1.nativeFabricUIManager;
                if(!(r1 != r2)) { _fun406_ip = 57; continue _fun406 }
case 27:
                r4 = _closure1_slot4;
                r1 = _closure1_slot0;
                r3 = r1.nativeFabricUIManager;
                r2 = _closure1_slot3;
                r1 = undefined;
                r1 = r4.bind(r1)(r3, r2);
                var _closure1_slot2 = r1;
case 57:
                r0 = _closure1_slot2;
                return r0;
            }
        };
        r6['getFabricUIManager'] = r1;
        r1 = 1;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r3.bind(r0)(r1);
        var _closure1_slot1 = r1;
        r1 = ['createNode', 'cloneNode', 'cloneNodeWithNewChildren', 'cloneNodeWithNewProps', 'cloneNodeWithNewChildrenAndProps', 'createChildSet', 'appendChild', 'appendChildToSet', 'completeRoot', 'measure', 'measureInWindow', 'measureLayout', 'configureNextLayoutAnimation', 'sendAccessibilityEvent', 'findShadowNodeByTag_DEPRECATED', 'setNativeProps', 'dispatchCommand', 'compareDocumentPosition', 'getBoundingClientRect'];
        var _closure1_slot3 = r1;
        return r0;
    };
    r5 = 47;
    r4 = [1, 42];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r3 = a5;
        r0 = a0;
        var _closure1_slot0 = r0;
        r0 = global;
        r6 = r0.Object;
        r5 = r6.defineProperty;
        r4 = {};
        r2 = true;
        r4['value'] = r2;
        r2 = '__esModule';
        r2 = r5.bind(r6)(r3, r2, r4);
        r2 = function(a0) { // Original name: unstable_hasComponent, environment: r1
            _fun411: for(var _fun411_ip = 0; ; ) switch(_fun411_ip) {
case 0:
                r4 = a0;
                r1 = _closure1_slot1;
                r0 = r1.get;
                r0 = r0.bind(r1)(r4);
                r1 = null;
                if(!(r0 == r1)) { _fun411_ip = 101; continue _fun411 }
case 26:
                r1 = _closure1_slot0;
                r1 = r1.__nativeComponentRegistry__hasComponent;
                if(r1) { _fun411_ip = 68; continue _fun411 }
case 39:
                r1 = global;
                r1 = r1.HermesInternal;
                r5 = r1.concat;
                r3 = "unstable_hasComponent('";
                r1 = "'): Global function is not registered";
                r1 = r5.bind(r3)(r4, r1);
                throw r1;
case 68:
                r3 = _closure1_slot0;
                r1 = r3.__nativeComponentRegistry__hasComponent;
                r1 = r1.bind(r3)(r4);
                r3 = _closure1_slot1;
                r2 = r3.set;
                r2 = r2.bind(r3)(r4, r1);
                r0 = r1;
case 101:
                return r0;
            }
        };
        r3['unstable_hasComponent'] = r2;
        r0 = r0.Map;
        r2 = r0.prototype;
        r2 = Object.create(r2, {constructor: {value: r0}});
        r10 = r2;
        r0 = new r10[r0](r9);
        r0 = r0 instanceof Object ? r0 : r2;
        var _closure1_slot1 = r0;
        r0 = undefined;
        return r0;
    };
    r5 = 48;
    r4 = new Array(0);
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun412: for(var _fun412_ip = 0; ; ) switch(_fun412_ip) {
case 0:
            r6 = a0;
            r9 = a1;
            r2 = a5;
            r10 = a6;
            var _closure1_slot0 = r6;
            var _closure1_slot1 = r9;
            var _closure1_slot2 = r10;
            r4 = function() { // Original name: _getConstants, environment: r3
                _fun413: for(var _fun413_ip = 0; ; ) switch(_fun413_ip) {
case 0:
                    r1 = _closure1_slot8;
                    if(r1) { _fun413_ip = 38; continue _fun413 }
case 10:
                    r1 = _closure1_slot3;
                    r2 = r1.default;
                    r1 = r2.getConstants;
                    r1 = r1.bind(r2)();
                    _closure1_slot7 = r1;
                    r1 = true;
                    _closure1_slot8 = r1;
case 38:
                    r0 = _closure1_slot7;
                    return r0;
                }
            };
            var _closure1_slot10 = r4;
            r0 = function(a0) { // Original name: _getViewManagerConfig, environment: r3
                _fun414: for(var _fun414_ip = 0; ; ) switch(_fun414_ip) {
case 0:
                    r3 = a0;
                    r1 = r3;
                    r0 = _closure1_slot5;
                    r0 = r0[r3];
                    r5 = undefined;
                    if(!(r0 === r5)) { _fun414_ip = 124; continue _fun414 }
case 23:
                    r0 = _closure1_slot3;
                    r0 = r0.default;
                    r0 = r0.getConstantsForViewManager;
                    if(!r0) { _fun414_ip = 124; continue _fun414 }
case 41: // try_start_0
                    r4 = _closure1_slot5;
                    r3 = r1;
                    r0 = _closure1_slot3;
                    r6 = r0.default;
                    r0 = r6.getConstantsForViewManager;
                    r0 = r0.bind(r6)(r3);
                    r4[r3] = r0;
case 72: // try_end0
                    _fun414_ip = 124; continue _fun414;
case 74: // catch_target0
                    CatchBlockStart(arg_register=7);
                    r0 = global;
                    r6 = r0.console;
                    r3 = r6.error;
                    r4 = r1;
                    r0 = "NativeUIManager.getConstantsForViewManager('";
                    r8 = r0 + r4;
                    r0 = "') threw an exception.";
                    r0 = r8 + r0;
                    r0 = r3.bind(r6)(r0, r7);
                    r3 = _closure1_slot5;
                    r0 = null;
                    r3[r4] = r0;
case 124:
                    r3 = _closure1_slot5;
                    r0 = r1;
                    r0 = r3[r0];
                    if(r0) { _fun414_ip = 301; continue _fun414 }
case 141:
                    r3 = _closure1_slot0;
                    r3 = r3.nativeCallSyncHook;
                    if(r3) { _fun414_ip = 156; continue _fun414 }
case 154:
                    return r0;
case 156:
                    r3 = _closure1_slot3;
                    r3 = r3.default;
                    r3 = r3.lazilyLoadView;
                    if(!r3) { _fun414_ip = 291; continue _fun414 }
case 174:
                    r6 = _closure1_slot6;
                    r4 = r6.has;
                    r3 = r1;
                    r3 = r4.bind(r6)(r3);
                    if(r3) { _fun414_ip = 291; continue _fun414 }
case 194:
                    r3 = _closure1_slot4;
                    r4 = r3.default;
                    r3 = _closure1_slot3;
                    r3 = r3.default;
                    r3 = r3.lazilyLoadView;
                    r3 = r4.bind(r5)(r3);
                    r7 = r1;
                    r3 = r3.bind(r5)(r7);
                    r6 = _closure1_slot6;
                    r4 = r6.add;
                    r4 = r4.bind(r6)(r7);
                    r6 = null;
                    if(!(r3 != r6)) { _fun414_ip = 291; continue _fun414 }
case 251:
                    r4 = r3.viewConfig;
                    if(!(r4 != r6)) { _fun414_ip = 291; continue _fun414 }
case 261:
                    r4 = _closure1_slot10;
                    r6 = r4.bind(r5)();
                    r4 = r1;
                    r3 = r3.viewConfig;
                    r6[r4] = r3;
                    r3 = _closure1_slot12;
                    r3 = r3.bind(r5)(r4);
case 291:
                    r2 = _closure1_slot5;
                    r1 = r2[r1];
                    return r1;
case 301:
                    return r0;
                }
            };
            var _closure1_slot11 = r0;
            r0 = function(a0) { // Original name: lazifyViewManagerConfig, environment: r3
                _fun415: for(var _fun415_ip = 0; ; ) switch(_fun415_ip) {
case 0:
                    r4 = a0;
                    r3 = _closure1_slot10;
                    r0 = undefined;
                    r3 = r3.bind(r0)();
                    r5 = r3[r4];
                    var _closure2_slot0 = r5;
                    r3 = _closure1_slot5;
                    r3[r4] = r5;
                    r3 = r5.Manager;
                    if(!r3) { _fun415_ip = 126; continue _fun415 }
case 43:
                    r3 = _closure1_slot1;
                    r4 = _closure1_slot2;
                    r2 = 3;
                    r6 = r4[r2];
                    r9 = r3.bind(r0)(r6);
                    r8 = r9.default;
                    r7 = {};
                    r6 = function() { // Original name: get, environment: r1
                        _fun416: for(var _fun416_ip = 0; ; ) switch(_fun416_ip) {
case 0:
                            r3 = _closure1_slot1;
                            r2 = _closure1_slot2;
                            r0 = 4;
                            r2 = r2[r0];
                            r0 = undefined;
                            r0 = r3.bind(r0)(r2);
                            r2 = r0.default;
                            r0 = _closure2_slot0;
                            r0 = r0.Manager;
                            r4 = r2[r0];
                            var _closure3_slot0 = r4;
                            r0 = {};
                            var _closure3_slot1 = r0;
                            if(!r4) { _fun416_ip = 95; continue _fun416 }
case 62:
                            r2 = global;
                            r3 = r2.Object;
                            r2 = r3.keys;
                            r3 = r2.bind(r3)(r4);
                            r2 = r3.forEach;
                            r1 = function(a0) { // Environment: r1
                                _fun417: for(var _fun417_ip = 0; ; ) switch(_fun417_ip) {
case 0:
                                    r2 = a0;
                                    r1 = _closure3_slot0;
                                    r1 = r1[r2];
                                    r4 = typeof r1;
                                    r3 = 'function';
                                    if(!(r4 !== r3)) { _fun417_ip = 33; continue _fun417 }
case 25:
                                    r0 = _closure3_slot1;
                                    r0[r2] = r1;
case 33:
                                    r0 = undefined;
                                    return r0;
                                }
                            };
                            r1 = r2.bind(r3)(r1);
case 95:
                            return r0;
                        }
                    };
                    r7['get'] = r6;
                    r6 = 'Constants';
                    r6 = r8.bind(r9)(r5, r6, r7);
                    r2 = r4[r2];
                    r4 = r3.bind(r0)(r2);
                    r3 = r4.default;
                    r2 = {};
                    r1 = function() { // Original name: get, environment: r1
                        _fun418: for(var _fun418_ip = 0; ; ) switch(_fun418_ip) {
case 0:
                            r3 = _closure1_slot1;
                            r2 = _closure1_slot2;
                            r0 = 4;
                            r2 = r2[r0];
                            r0 = undefined;
                            r0 = r3.bind(r0)(r2);
                            r2 = r0.default;
                            r0 = _closure2_slot0;
                            r0 = r0.Manager;
                            r4 = r2[r0];
                            var _closure3_slot0 = r4;
                            r0 = {};
                            var _closure3_slot1 = r0;
                            r2 = 0;
                            var _closure3_slot2 = r2;
                            if(!r4) { _fun418_ip = 101; continue _fun418 }
case 68:
                            r2 = global;
                            r3 = r2.Object;
                            r2 = r3.keys;
                            r3 = r2.bind(r3)(r4);
                            r2 = r3.forEach;
                            r1 = function(a0) { // Environment: r1
                                _fun419: for(var _fun419_ip = 0; ; ) switch(_fun419_ip) {
case 0:
                                    r2 = a0;
                                    r0 = _closure3_slot0;
                                    r0 = r0[r2];
                                    r1 = typeof r0;
                                    r0 = 'function';
                                    if(!(r1 === r0)) { _fun419_ip = 47; continue _fun419 }
case 25:
                                    r1 = _closure3_slot1;
                                    r0 = _closure3_slot2;
                                    r0 = parseFloat(r0);
                                    r3 = r0 + 1;
                                    _closure3_slot2 = r3;
                                    r1[r2] = r0;
case 47:
                                    r0 = undefined;
                                    return r0;
                                }
                            };
                            r1 = r2.bind(r3)(r1);
case 101:
                            return r0;
                        }
                    };
                    r2['get'] = r1;
                    r1 = 'Commands';
                    r1 = r3.bind(r4)(r5, r1, r2);
case 126:
                    return r0;
                }
            };
            var _closure1_slot12 = r0;
            r0 = 0;
            r1 = r10[r0];
            r0 = undefined;
            r8 = r9.bind(r0)(r1);
            r5 = global;
            r12 = r5.Object;
            r11 = r12.defineProperty;
            r7 = {};
            r1 = true;
            r7['value'] = r1;
            r1 = '__esModule';
            r1 = r11.bind(r12)(r2, r1, r7);
            r2['default'] = r0;
            r1 = 1;
            r1 = r10[r1];
            r1 = r9.bind(r0)(r1);
            r7 = r8.bind(r0)(r1);
            var _closure1_slot3 = r7;
            r1 = 2;
            r1 = r10[r1];
            r1 = r9.bind(r0)(r1);
            r1 = r8.bind(r0)(r1);
            var _closure1_slot4 = r1;
            r1 = {};
            var _closure1_slot5 = r1;
            r1 = r5.Set;
            r8 = r1.prototype;
            r8 = Object.create(r8, {constructor: {value: r1}});
            r16 = r8;
            r1 = new r16[r1](r15);
            r1 = r1 instanceof Object ? r1 : r8;
            var _closure1_slot6 = r1;
            r1 = {};
            var _closure1_slot7 = r1;
            r1 = false;
            var _closure1_slot8 = r1;
            r11 = r5.Object;
            r10 = r11.assign;
            r9 = r7.default;
            r8 = {};
            r1 = function(a0, a1, a2, a3) { // Original name: createView, environment: r3
                r0 = _closure1_slot3;
                r5 = r0.default;
                r4 = r5.createView;
                r9 = a0;
                r8 = a1;
                r7 = a2;
                r6 = a3;
                r10 = r5;
                r0 = r10[r4](r9, r8, r7, r6, r5);
                r0 = undefined;
                return r0;
            };
            r8['createView'] = r1;
            r1 = function() { // Original name: getConstants, environment: r3
                r1 = _closure1_slot10;
                r0 = undefined;
                r0 = r1.bind(r0)();
                return r0;
            };
            r8['getConstants'] = r1;
            r1 = function(a0) { // Original name: getViewManagerConfig, environment: r3
                r2 = _closure1_slot11;
                r1 = undefined;
                r0 = a0;
                r0 = r2.bind(r1)(r0);
                return r0;
            };
            r8['getViewManagerConfig'] = r1;
            r1 = function(a0) { // Original name: hasViewManagerConfig, environment: r3
                r2 = _closure1_slot11;
                r1 = undefined;
                r0 = a0;
                r1 = r2.bind(r1)(r0);
                r0 = null;
                r0 = r1 != r0;
                return r0;
            };
            r8['hasViewManagerConfig'] = r1;
            r1 = {};
            r1 = r10.bind(r11)(r1, r9, r8);
            var _closure1_slot9 = r1;
            r9 = r7.default;
            r8 = r1.getViewManagerConfig;
            r9['getViewManagerConfig'] = r8;
            r8 = r4.bind(r0)();
            r8 = r8.ViewManagerNames;
            if(!r8) { _fun412_ip = 329; continue _fun412 }
case 294:
            r8 = r7.default;
            r7 = r8.getConstants;
            r7 = r7.bind(r8)();
            r9 = r7.ViewManagerNames;
            r8 = r9.forEach;
            r7 = function(a0) { // Environment: r3
                r5 = a0;
                var _closure2_slot0 = r5;
                r3 = _closure1_slot1;
                r2 = _closure1_slot2;
                r0 = 3;
                r2 = r2[r0];
                r0 = undefined;
                r4 = r3.bind(r0)(r2);
                r3 = r4.default;
                r1 = _closure1_slot3;
                r2 = r1.default;
                r1 = {};
                r6 = function() { // Original name: get, environment: r6
                    r1 = _closure1_slot4;
                    r1 = r1.default;
                    r0 = _closure1_slot3;
                    r0 = r0.default;
                    r0 = r0.getConstantsForViewManager;
                    r2 = undefined;
                    r1 = r1.bind(r2)(r0);
                    r0 = _closure2_slot0;
                    r0 = r1.bind(r2)(r0);
                    return r0;
                };
                r1['get'] = r6;
                r1 = r3.bind(r4)(r2, r5, r1);
                return r0;
            };
            r7 = r8.bind(r9)(r7);
case 329:
            r6 = r6.nativeCallSyncHook;
            if(r6) { _fun412_ip = 373; continue _fun412 }
case 338:
            r6 = r5.Object;
            r5 = r6.keys;
            r4 = r4.bind(r0)();
            r5 = r5.bind(r6)(r4);
            r4 = r5.forEach;
            r3 = function(a0) { // Environment: r3
                _fun426: for(var _fun426_ip = 0; ; ) switch(_fun426_ip) {
case 0:
                    r5 = a0;
                    var _closure2_slot0 = r5;
                    r3 = _closure1_slot1;
                    r2 = _closure1_slot2;
                    r0 = 5;
                    r2 = r2[r0];
                    r0 = undefined;
                    r2 = r3.bind(r0)(r2);
                    r3 = r2.default;
                    r2 = r3.includes;
                    r2 = r2.bind(r3)(r5);
                    if(r2) { _fun426_ip = 136; continue _fun426 }
case 53:
                    r2 = _closure1_slot5;
                    r2 = r2[r5];
                    if(r2) { _fun426_ip = 84; continue _fun426 }
case 64:
                    r3 = _closure1_slot5;
                    r2 = _closure1_slot10;
                    r2 = r2.bind(r0)();
                    r2 = r2[r5];
                    r3[r5] = r2;
case 84:
                    r3 = _closure1_slot1;
                    r4 = _closure1_slot2;
                    r2 = 3;
                    r2 = r4[r2];
                    r4 = r3.bind(r0)(r2);
                    r3 = r4.default;
                    r1 = _closure1_slot3;
                    r2 = r1.default;
                    r1 = {};
                    r6 = function() { // Original name: get, environment: r6
                        r0 = global;
                        r3 = r0.console;
                        r1 = r3.warn;
                        r2 = _closure2_slot0;
                        r4 = r0.HermesInternal;
                        r6 = r4.concat;
                        r5 = "Accessing view manager configs directly off UIManager via UIManager['";
                        r4 = "'] ";
                        r4 = r6.bind(r5)(r2, r4);
                        r0 = r0.HermesInternal;
                        r6 = r0.concat;
                        r5 = "is no longer supported. Use UIManager.getViewManagerConfig('";
                        r0 = "') instead.";
                        r0 = r6.bind(r5)(r2, r0);
                        r0 = r4 + r0;
                        r0 = r1.bind(r3)(r0);
                        r1 = _closure1_slot9;
                        r0 = r1.getViewManagerConfig;
                        r0 = r0.bind(r1)(r2);
                        return r0;
                    };
                    r1['get'] = r6;
                    r1 = r3.bind(r4)(r2, r5, r1);
case 136:
                    return r0;
                }
            };
            r3 = r4.bind(r5)(r3);
case 373:
            r2['default'] = r1;
            return r0;
        }
    };
    r5 = 49;
    r4 = [1, 50, 45, 42, 37, 52];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun428: for(var _fun428_ip = 0; ; ) switch(_fun428_ip) {
case 0:
            r2 = a5;
            var _closure1_slot0 = r2;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r3
                _fun429: for(var _fun429_ip = 0; ; ) switch(_fun429_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun429_ip = 104; continue _fun429 }
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
                        _fun430: for(var _fun430_ip = 0; ; ) switch(_fun430_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun430_ip = 15; continue _fun430 }
case 9:
                            r0 = _closure2_slot0;
                            _fun430_ip = 19; continue _fun430;
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
            if(!r6) { _fun428_ip = 98; continue _fun428 }
case 84:
            r5 = r6.__esModule;
            r1 = r6;
            if(r5) { _fun428_ip = 365; continue _fun428 }
case 98:
            r16 = null;
            if(!(r16 !== r6)) { _fun428_ip = 356; continue _fun428 }
case 107:
            r7 = typeof r6;
            r5 = 'object';
            if(!(r5 !== r7)) { _fun428_ip = 129; continue _fun428 }
case 118:
            r5 = 'function';
            if(!(r5 === r7)) { _fun428_ip = 356; continue _fun428 }
case 129:
            r5 = _closure1_slot3;
            r7 = r5.bind(r0)(r0);
            if(!r7) { _fun428_ip = 157; continue _fun428 }
case 141:
            r5 = r7.has;
            r5 = r5.bind(r7)(r6);
            if(r5) { _fun428_ip = 344; continue _fun428 }
case 157:
            r5 = Object.create(r16);
            r8 = r4.Object;
            r15 = r8.defineProperty;
            if(!r15) { _fun428_ip = 185; continue _fun428 }
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
                if(r9 === r20) { _fun428_ip = 202; continue _fun428 }
case 218:
                r17 = {};
                r18 = r17.hasOwnProperty;
                r17 = r18.call;
                r17 = r17.bind(r18)(r6, r20);
                if(!r17) { _fun428_ip = 202; continue _fun428 }
case 239:
                r17 = null;
                if(!r15) { _fun428_ip = 261; continue _fun428 }
case 244:
                r19 = r4.Object;
                r18 = r19.getOwnPropertyDescriptor;
                r17 = r18.bind(r19)(r6, r20);
case 261:
                if(!r17) { _fun428_ip = 280; continue _fun428 }
case 264:
                r18 = r17.get;
                if(r18) { _fun428_ip = 293; continue _fun428 }
case 272:
                r18 = r17.set;
                if(r18) { _fun428_ip = 293; continue _fun428 }
case 280:
                r18 = r6[r20];
                r5[r20] = r18;
                r8 = r17;
                _fun428_ip = 202; continue _fun428;
case 293:
                r19 = r4.Object;
                r18 = r19.defineProperty;
                r18 = r18.bind(r19)(r5, r20, r17);
                r8 = r17;
                _fun428_ip = 202; continue _fun428;
            }
case 316:
            r5['default'] = r6;
            r1 = r5;
            if(!r7) { _fun428_ip = 365; continue _fun428 }
case 328:
            r8 = r7.set;
            r8 = r8.bind(r7)(r6, r5);
            r1 = r5;
            _fun428_ip = 365; continue _fun428;
case 344:
            r5 = r7.get;
            r1 = r5.bind(r7)(r6);
            _fun428_ip = 365; continue _fun428;
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
                _fun431: for(var _fun431_ip = 0; ; ) switch(_fun431_ip) {
case 0:
                    r4 = a0;
                    var _closure2_slot0 = r4;
                    r0 = 'default';
                    if(!(r4 !== r0)) { _fun431_ip = 152; continue _fun431 }
case 20:
                    r0 = '__esModule';
                    if(!(r4 !== r0)) { _fun431_ip = 152; continue _fun431 }
case 31:
                    r1 = global;
                    r0 = r1.Object;
                    r0 = r0.prototype;
                    r6 = r0.hasOwnProperty;
                    r3 = r6.call;
                    r2 = _closure1_slot1;
                    r2 = r3.bind(r6)(r2, r4);
                    if(r2) { _fun431_ip = 148; continue _fun431 }
case 70:
                    r2 = _closure1_slot0;
                    r2 = r4 in r2;
                    if(!r2) { _fun431_ip = 101; continue _fun431 }
case 81:
                    r2 = _closure1_slot0;
                    r3 = r2[r4];
                    r2 = _closure1_slot2;
                    r2 = r2[r4];
                    if(!(r3 !== r2)) { _fun431_ip = 144; continue _fun431 }
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
    r5 = 50;
    r4 = [51];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun433: for(var _fun433_ip = 0; ; ) switch(_fun433_ip) {
case 0:
            r2 = a5;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun434: for(var _fun434_ip = 0; ; ) switch(_fun434_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun434_ip = 104; continue _fun434 }
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
                        _fun435: for(var _fun435_ip = 0; ; ) switch(_fun435_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun435_ip = 15; continue _fun435 }
case 9:
                            r0 = _closure2_slot0;
                            _fun435_ip = 19; continue _fun435;
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
            if(!r3) { _fun433_ip = 88; continue _fun433 }
case 74:
            r5 = r3.__esModule;
            r4 = r3;
            if(r5) { _fun433_ip = 355; continue _fun433 }
case 88:
            r14 = null;
            if(!(r14 !== r3)) { _fun433_ip = 346; continue _fun433 }
case 97:
            r6 = typeof r3;
            r5 = 'object';
            if(!(r5 !== r6)) { _fun433_ip = 119; continue _fun433 }
case 108:
            r5 = 'function';
            if(!(r5 === r6)) { _fun433_ip = 346; continue _fun433 }
case 119:
            r1 = _closure1_slot0;
            r5 = r1.bind(r0)(r0);
            if(!r5) { _fun433_ip = 147; continue _fun433 }
case 131:
            r1 = r5.has;
            r1 = r1.bind(r5)(r3);
            if(r1) { _fun433_ip = 334; continue _fun433 }
case 147:
            r1 = Object.create(r14);
            r6 = r15.Object;
            r13 = r6.defineProperty;
            if(!r13) { _fun433_ip = 175; continue _fun433 }
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
                if(r7 === r19) { _fun433_ip = 192; continue _fun433 }
case 208:
                r16 = {};
                r17 = r16.hasOwnProperty;
                r16 = r17.call;
                r16 = r16.bind(r17)(r3, r19);
                if(!r16) { _fun433_ip = 192; continue _fun433 }
case 229:
                r16 = null;
                if(!r13) { _fun433_ip = 251; continue _fun433 }
case 234:
                r18 = r15.Object;
                r17 = r18.getOwnPropertyDescriptor;
                r16 = r17.bind(r18)(r3, r19);
case 251:
                if(!r16) { _fun433_ip = 270; continue _fun433 }
case 254:
                r17 = r16.get;
                if(r17) { _fun433_ip = 283; continue _fun433 }
case 262:
                r17 = r16.set;
                if(r17) { _fun433_ip = 283; continue _fun433 }
case 270:
                r17 = r3[r19];
                r1[r19] = r17;
                r6 = r16;
                _fun433_ip = 192; continue _fun433;
case 283:
                r18 = r15.Object;
                r17 = r18.defineProperty;
                r17 = r17.bind(r18)(r1, r19, r16);
                r6 = r16;
                _fun433_ip = 192; continue _fun433;
            }
case 306:
            r1['default'] = r3;
            r4 = r1;
            if(!r5) { _fun433_ip = 355; continue _fun433 }
case 318:
            r6 = r5.set;
            r6 = r6.bind(r5)(r3, r1);
            r4 = r1;
            _fun433_ip = 355; continue _fun433;
case 334:
            r1 = r5.get;
            r4 = r1.bind(r5)(r3);
            _fun433_ip = 355; continue _fun433;
case 346:
            r1 = {};
            r1['default'] = r3;
            r4 = r1;
case 355:
            r3 = r4.getEnforcing;
            r1 = 'UIManager';
            r1 = r3.bind(r4)(r1);
            r2['default'] = r1;
            return r0;
        }
    };
    r5 = 51;
    r4 = [36];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
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
        r1 = ['clearJSResponder', 'configureNextLayoutAnimation', 'createView', 'dispatchViewManagerCommand', 'findSubviewIn', 'getConstantsForViewManager', 'getDefaultEventTypes', 'manageChildren', 'measure', 'measureInWindow', 'measureLayout', 'measureLayoutRelativeToParent', 'removeRootView', 'sendAccessibilityEvent', 'setChildren', 'setJSResponder', 'setLayoutAnimationEnabledExperimental', 'updateView', 'viewIsDescendantOf', 'LazyViewManagersEnabled', 'ViewManagerNames', 'StyleConstants', 'AccessibilityEventTypes', 'UIView', 'getViewManagerConfig', 'hasViewManagerConfig', 'blur', 'focus', 'genericBubblingEventTypes', 'genericDirectEventTypes', 'lazilyLoadView'];
        r2['default'] = r1;
        return r0;
    };
    r5 = 52;
    r4 = new Array(0);
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun437: for(var _fun437_ip = 0; ; ) switch(_fun437_ip) {
case 0:
            r2 = a5;
            var _closure1_slot0 = r2;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r3
                _fun438: for(var _fun438_ip = 0; ; ) switch(_fun438_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun438_ip = 104; continue _fun438 }
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
                        _fun439: for(var _fun439_ip = 0; ; ) switch(_fun439_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun439_ip = 15; continue _fun439 }
case 9:
                            r0 = _closure2_slot0;
                            _fun439_ip = 19; continue _fun439;
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
            if(!r6) { _fun437_ip = 98; continue _fun437 }
case 84:
            r5 = r6.__esModule;
            r1 = r6;
            if(r5) { _fun437_ip = 365; continue _fun437 }
case 98:
            r16 = null;
            if(!(r16 !== r6)) { _fun437_ip = 356; continue _fun437 }
case 107:
            r7 = typeof r6;
            r5 = 'object';
            if(!(r5 !== r7)) { _fun437_ip = 129; continue _fun437 }
case 118:
            r5 = 'function';
            if(!(r5 === r7)) { _fun437_ip = 356; continue _fun437 }
case 129:
            r5 = _closure1_slot3;
            r7 = r5.bind(r0)(r0);
            if(!r7) { _fun437_ip = 157; continue _fun437 }
case 141:
            r5 = r7.has;
            r5 = r5.bind(r7)(r6);
            if(r5) { _fun437_ip = 344; continue _fun437 }
case 157:
            r5 = Object.create(r16);
            r8 = r4.Object;
            r15 = r8.defineProperty;
            if(!r15) { _fun437_ip = 185; continue _fun437 }
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
                if(r9 === r20) { _fun437_ip = 202; continue _fun437 }
case 218:
                r17 = {};
                r18 = r17.hasOwnProperty;
                r17 = r18.call;
                r17 = r17.bind(r18)(r6, r20);
                if(!r17) { _fun437_ip = 202; continue _fun437 }
case 239:
                r17 = null;
                if(!r15) { _fun437_ip = 261; continue _fun437 }
case 244:
                r19 = r4.Object;
                r18 = r19.getOwnPropertyDescriptor;
                r17 = r18.bind(r19)(r6, r20);
case 261:
                if(!r17) { _fun437_ip = 280; continue _fun437 }
case 264:
                r18 = r17.get;
                if(r18) { _fun437_ip = 293; continue _fun437 }
case 272:
                r18 = r17.set;
                if(r18) { _fun437_ip = 293; continue _fun437 }
case 280:
                r18 = r6[r20];
                r5[r20] = r18;
                r8 = r17;
                _fun437_ip = 202; continue _fun437;
case 293:
                r19 = r4.Object;
                r18 = r19.defineProperty;
                r18 = r18.bind(r19)(r5, r20, r17);
                r8 = r17;
                _fun437_ip = 202; continue _fun437;
            }
case 316:
            r5['default'] = r6;
            r1 = r5;
            if(!r7) { _fun437_ip = 365; continue _fun437 }
case 328:
            r8 = r7.set;
            r8 = r8.bind(r7)(r6, r5);
            r1 = r5;
            _fun437_ip = 365; continue _fun437;
case 344:
            r5 = r7.get;
            r1 = r5.bind(r7)(r6);
            _fun437_ip = 365; continue _fun437;
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
                _fun440: for(var _fun440_ip = 0; ; ) switch(_fun440_ip) {
case 0:
                    r4 = a0;
                    var _closure2_slot0 = r4;
                    r0 = 'default';
                    if(!(r4 !== r0)) { _fun440_ip = 152; continue _fun440 }
case 20:
                    r0 = '__esModule';
                    if(!(r4 !== r0)) { _fun440_ip = 152; continue _fun440 }
case 31:
                    r1 = global;
                    r0 = r1.Object;
                    r0 = r0.prototype;
                    r6 = r0.hasOwnProperty;
                    r3 = r6.call;
                    r2 = _closure1_slot1;
                    r2 = r3.bind(r6)(r2, r4);
                    if(r2) { _fun440_ip = 148; continue _fun440 }
case 70:
                    r2 = _closure1_slot0;
                    r2 = r4 in r2;
                    if(!r2) { _fun440_ip = 101; continue _fun440 }
case 81:
                    r2 = _closure1_slot0;
                    r3 = r2[r4];
                    r2 = _closure1_slot2;
                    r2 = r2[r4];
                    if(!(r3 !== r2)) { _fun440_ip = 144; continue _fun440 }
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
    r5 = 53;
    r4 = [54];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun442: for(var _fun442_ip = 0; ; ) switch(_fun442_ip) {
case 0:
            r2 = a5;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun443: for(var _fun443_ip = 0; ; ) switch(_fun443_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun443_ip = 104; continue _fun443 }
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
                        _fun444: for(var _fun444_ip = 0; ; ) switch(_fun444_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun444_ip = 15; continue _fun444 }
case 9:
                            r0 = _closure2_slot0;
                            _fun444_ip = 19; continue _fun444;
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
            if(!r3) { _fun442_ip = 88; continue _fun442 }
case 74:
            r5 = r3.__esModule;
            r4 = r3;
            if(r5) { _fun442_ip = 355; continue _fun442 }
case 88:
            r14 = null;
            if(!(r14 !== r3)) { _fun442_ip = 346; continue _fun442 }
case 97:
            r6 = typeof r3;
            r5 = 'object';
            if(!(r5 !== r6)) { _fun442_ip = 119; continue _fun442 }
case 108:
            r5 = 'function';
            if(!(r5 === r6)) { _fun442_ip = 346; continue _fun442 }
case 119:
            r1 = _closure1_slot0;
            r5 = r1.bind(r0)(r0);
            if(!r5) { _fun442_ip = 147; continue _fun442 }
case 131:
            r1 = r5.has;
            r1 = r1.bind(r5)(r3);
            if(r1) { _fun442_ip = 334; continue _fun442 }
case 147:
            r1 = Object.create(r14);
            r6 = r15.Object;
            r13 = r6.defineProperty;
            if(!r13) { _fun442_ip = 175; continue _fun442 }
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
                if(r7 === r19) { _fun442_ip = 192; continue _fun442 }
case 208:
                r16 = {};
                r17 = r16.hasOwnProperty;
                r16 = r17.call;
                r16 = r16.bind(r17)(r3, r19);
                if(!r16) { _fun442_ip = 192; continue _fun442 }
case 229:
                r16 = null;
                if(!r13) { _fun442_ip = 251; continue _fun442 }
case 234:
                r18 = r15.Object;
                r17 = r18.getOwnPropertyDescriptor;
                r16 = r17.bind(r18)(r3, r19);
case 251:
                if(!r16) { _fun442_ip = 270; continue _fun442 }
case 254:
                r17 = r16.get;
                if(r17) { _fun442_ip = 283; continue _fun442 }
case 262:
                r17 = r16.set;
                if(r17) { _fun442_ip = 283; continue _fun442 }
case 270:
                r17 = r3[r19];
                r1[r19] = r17;
                r6 = r16;
                _fun442_ip = 192; continue _fun442;
case 283:
                r18 = r15.Object;
                r17 = r18.defineProperty;
                r17 = r17.bind(r18)(r1, r19, r16);
                r6 = r16;
                _fun442_ip = 192; continue _fun442;
            }
case 306:
            r1['default'] = r3;
            r4 = r1;
            if(!r5) { _fun442_ip = 355; continue _fun442 }
case 318:
            r6 = r5.set;
            r6 = r6.bind(r5)(r3, r1);
            r4 = r1;
            _fun442_ip = 355; continue _fun442;
case 334:
            r1 = r5.get;
            r4 = r1.bind(r5)(r3);
            _fun442_ip = 355; continue _fun442;
case 346:
            r1 = {};
            r1['default'] = r3;
            r4 = r1;
case 355:
            r3 = r4.get;
            r1 = 'AccessibilityInfo';
            r1 = r3.bind(r4)(r1);
            r2['default'] = r1;
            return r0;
        }
    };
    r5 = 54;
    r4 = [36];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun445: for(var _fun445_ip = 0; ; ) switch(_fun445_ip) {
case 0:
            r2 = a5;
            var _closure1_slot0 = r2;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r3
                _fun446: for(var _fun446_ip = 0; ; ) switch(_fun446_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun446_ip = 104; continue _fun446 }
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
                        _fun447: for(var _fun447_ip = 0; ; ) switch(_fun447_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun447_ip = 15; continue _fun447 }
case 9:
                            r0 = _closure2_slot0;
                            _fun447_ip = 19; continue _fun447;
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
            if(!r6) { _fun445_ip = 98; continue _fun445 }
case 84:
            r5 = r6.__esModule;
            r1 = r6;
            if(r5) { _fun445_ip = 365; continue _fun445 }
case 98:
            r16 = null;
            if(!(r16 !== r6)) { _fun445_ip = 356; continue _fun445 }
case 107:
            r7 = typeof r6;
            r5 = 'object';
            if(!(r5 !== r7)) { _fun445_ip = 129; continue _fun445 }
case 118:
            r5 = 'function';
            if(!(r5 === r7)) { _fun445_ip = 356; continue _fun445 }
case 129:
            r5 = _closure1_slot3;
            r7 = r5.bind(r0)(r0);
            if(!r7) { _fun445_ip = 157; continue _fun445 }
case 141:
            r5 = r7.has;
            r5 = r5.bind(r7)(r6);
            if(r5) { _fun445_ip = 344; continue _fun445 }
case 157:
            r5 = Object.create(r16);
            r8 = r4.Object;
            r15 = r8.defineProperty;
            if(!r15) { _fun445_ip = 185; continue _fun445 }
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
                if(r9 === r20) { _fun445_ip = 202; continue _fun445 }
case 218:
                r17 = {};
                r18 = r17.hasOwnProperty;
                r17 = r18.call;
                r17 = r17.bind(r18)(r6, r20);
                if(!r17) { _fun445_ip = 202; continue _fun445 }
case 239:
                r17 = null;
                if(!r15) { _fun445_ip = 261; continue _fun445 }
case 244:
                r19 = r4.Object;
                r18 = r19.getOwnPropertyDescriptor;
                r17 = r18.bind(r19)(r6, r20);
case 261:
                if(!r17) { _fun445_ip = 280; continue _fun445 }
case 264:
                r18 = r17.get;
                if(r18) { _fun445_ip = 293; continue _fun445 }
case 272:
                r18 = r17.set;
                if(r18) { _fun445_ip = 293; continue _fun445 }
case 280:
                r18 = r6[r20];
                r5[r20] = r18;
                r8 = r17;
                _fun445_ip = 202; continue _fun445;
case 293:
                r19 = r4.Object;
                r18 = r19.defineProperty;
                r18 = r18.bind(r19)(r5, r20, r17);
                r8 = r17;
                _fun445_ip = 202; continue _fun445;
            }
case 316:
            r5['default'] = r6;
            r1 = r5;
            if(!r7) { _fun445_ip = 365; continue _fun445 }
case 328:
            r8 = r7.set;
            r8 = r8.bind(r7)(r6, r5);
            r1 = r5;
            _fun445_ip = 365; continue _fun445;
case 344:
            r5 = r7.get;
            r1 = r5.bind(r7)(r6);
            _fun445_ip = 365; continue _fun445;
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
                _fun448: for(var _fun448_ip = 0; ; ) switch(_fun448_ip) {
case 0:
                    r4 = a0;
                    var _closure2_slot0 = r4;
                    r0 = 'default';
                    if(!(r4 !== r0)) { _fun448_ip = 152; continue _fun448 }
case 20:
                    r0 = '__esModule';
                    if(!(r4 !== r0)) { _fun448_ip = 152; continue _fun448 }
case 31:
                    r1 = global;
                    r0 = r1.Object;
                    r0 = r0.prototype;
                    r6 = r0.hasOwnProperty;
                    r3 = r6.call;
                    r2 = _closure1_slot1;
                    r2 = r3.bind(r6)(r2, r4);
                    if(r2) { _fun448_ip = 148; continue _fun448 }
case 70:
                    r2 = _closure1_slot0;
                    r2 = r4 in r2;
                    if(!r2) { _fun448_ip = 101; continue _fun448 }
case 81:
                    r2 = _closure1_slot0;
                    r3 = r2[r4];
                    r2 = _closure1_slot2;
                    r2 = r2[r4];
                    if(!(r3 !== r2)) { _fun448_ip = 144; continue _fun448 }
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
    r5 = 55;
    r4 = [56];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun450: for(var _fun450_ip = 0; ; ) switch(_fun450_ip) {
case 0:
            r2 = a5;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun451: for(var _fun451_ip = 0; ; ) switch(_fun451_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun451_ip = 104; continue _fun451 }
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
                        _fun452: for(var _fun452_ip = 0; ; ) switch(_fun452_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun452_ip = 15; continue _fun452 }
case 9:
                            r0 = _closure2_slot0;
                            _fun452_ip = 19; continue _fun452;
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
            if(!r3) { _fun450_ip = 88; continue _fun450 }
case 74:
            r5 = r3.__esModule;
            r4 = r3;
            if(r5) { _fun450_ip = 355; continue _fun450 }
case 88:
            r14 = null;
            if(!(r14 !== r3)) { _fun450_ip = 346; continue _fun450 }
case 97:
            r6 = typeof r3;
            r5 = 'object';
            if(!(r5 !== r6)) { _fun450_ip = 119; continue _fun450 }
case 108:
            r5 = 'function';
            if(!(r5 === r6)) { _fun450_ip = 346; continue _fun450 }
case 119:
            r1 = _closure1_slot0;
            r5 = r1.bind(r0)(r0);
            if(!r5) { _fun450_ip = 147; continue _fun450 }
case 131:
            r1 = r5.has;
            r1 = r1.bind(r5)(r3);
            if(r1) { _fun450_ip = 334; continue _fun450 }
case 147:
            r1 = Object.create(r14);
            r6 = r15.Object;
            r13 = r6.defineProperty;
            if(!r13) { _fun450_ip = 175; continue _fun450 }
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
                if(r7 === r19) { _fun450_ip = 192; continue _fun450 }
case 208:
                r16 = {};
                r17 = r16.hasOwnProperty;
                r16 = r17.call;
                r16 = r16.bind(r17)(r3, r19);
                if(!r16) { _fun450_ip = 192; continue _fun450 }
case 229:
                r16 = null;
                if(!r13) { _fun450_ip = 251; continue _fun450 }
case 234:
                r18 = r15.Object;
                r17 = r18.getOwnPropertyDescriptor;
                r16 = r17.bind(r18)(r3, r19);
case 251:
                if(!r16) { _fun450_ip = 270; continue _fun450 }
case 254:
                r17 = r16.get;
                if(r17) { _fun450_ip = 283; continue _fun450 }
case 262:
                r17 = r16.set;
                if(r17) { _fun450_ip = 283; continue _fun450 }
case 270:
                r17 = r3[r19];
                r1[r19] = r17;
                r6 = r16;
                _fun450_ip = 192; continue _fun450;
case 283:
                r18 = r15.Object;
                r17 = r18.defineProperty;
                r17 = r17.bind(r18)(r1, r19, r16);
                r6 = r16;
                _fun450_ip = 192; continue _fun450;
            }
case 306:
            r1['default'] = r3;
            r4 = r1;
            if(!r5) { _fun450_ip = 355; continue _fun450 }
case 318:
            r6 = r5.set;
            r6 = r6.bind(r5)(r3, r1);
            r4 = r1;
            _fun450_ip = 355; continue _fun450;
case 334:
            r1 = r5.get;
            r4 = r1.bind(r5)(r3);
            _fun450_ip = 355; continue _fun450;
case 346:
            r1 = {};
            r1['default'] = r3;
            r4 = r1;
case 355:
            r3 = r4.get;
            r1 = 'AccessibilityManager';
            r1 = r3.bind(r4)(r1);
            r2['default'] = r1;
            return r0;
        }
    };
    r5 = 56;
    r4 = [36];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r5 = a1;
        r8 = a5;
        r2 = a6;
        var _closure1_slot0 = r5;
        var _closure1_slot1 = r8;
        var _closure1_slot2 = r2;
        r0 = global;
        r7 = r0.Object;
        r6 = r7.defineProperty;
        r4 = {};
        r3 = true;
        r4['value'] = r3;
        r3 = '__esModule';
        r3 = r6.bind(r7)(r8, r3, r4);
        r4 = r0.Object;
        r3 = r4.keys;
        r0 = 0;
        r2 = r2[r0];
        r0 = undefined;
        r2 = r5.bind(r0)(r2);
        r3 = r3.bind(r4)(r2);
        r2 = r3.forEach;
        r1 = function(a0) { // Environment: r1
            _fun454: for(var _fun454_ip = 0; ; ) switch(_fun454_ip) {
case 0:
                r5 = a0;
                var _closure2_slot0 = r5;
                r0 = 'default';
                if(!(r5 !== r0)) { _fun454_ip = 123; continue _fun454 }
case 17:
                r0 = '__esModule';
                if(!(r5 !== r0)) { _fun454_ip = 123; continue _fun454 }
case 25:
                r0 = _closure1_slot1;
                r0 = r5 in r0;
                if(!r0) { _fun454_ip = 76; continue _fun454 }
case 39:
                r0 = _closure1_slot1;
                r3 = r0[r5];
                r4 = _closure1_slot0;
                r2 = _closure1_slot2;
                r0 = 0;
                r2 = r2[r0];
                r0 = undefined;
                r2 = r4.bind(r0)(r2);
                r2 = r2[r5];
                if(!(r3 !== r2)) { _fun454_ip = 121; continue _fun454 }
case 76:
                r2 = global;
                r4 = r2.Object;
                r3 = r4.defineProperty;
                r2 = _closure1_slot1;
                r1 = {};
                r7 = true;
                r1['enumerable'] = r7;
                r6 = function() { // Original name: get, environment: r6
                    r2 = _closure1_slot0;
                    r1 = _closure1_slot2;
                    r0 = 0;
                    r1 = r1[r0];
                    r0 = undefined;
                    r1 = r2.bind(r0)(r1);
                    r0 = _closure2_slot0;
                    r0 = r1[r0];
                    return r0;
                };
                r1['get'] = r6;
                r1 = r3.bind(r4)(r2, r5, r1);
                r1 = undefined;
                return r1;
case 121:
                return r0;
case 123:
                r0 = undefined;
                return r0;
            }
        };
        r1 = r2.bind(r3)(r1);
        return r0;
    };
    r5 = 57;
    r4 = [58];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r1 = a5;
        r2 = a0;
        var _closure1_slot0 = r2;
        r2 = a1;
        var _closure1_slot1 = r2;
        r2 = a6;
        var _closure1_slot2 = r2;
        r2 = global;
        r5 = r2.Object;
        r4 = r5.defineProperty;
        r3 = {};
        r2 = true;
        r3['value'] = r2;
        r2 = '__esModule';
        r2 = r4.bind(r5)(r1, r2, r3);
        r2 = function(a0, a1, a2) { // Original name: dispatchCommand, environment: r0
            _fun460: for(var _fun460_ip = 0; ; ) switch(_fun460_ip) {
case 0:
                r4 = a0;
                r3 = a1;
                r2 = a2;
                r1 = _closure1_slot0;
                r5 = r1.RN$Bridgeless;
                r1 = true;
                if(!(r5 !== r1)) { _fun460_ip = 69; continue _fun460 }
case 28:
                r6 = _closure1_slot1;
                r5 = _closure1_slot2;
                r1 = 2;
                r5 = r5[r1];
                r1 = undefined;
                r1 = r6.bind(r1)(r5);
                r5 = r1.default;
                r1 = r5.dispatchCommand;
                r1 = r1.bind(r5)(r4, r3, r2);
                return r1;
case 69:
                r5 = _closure1_slot1;
                r1 = _closure1_slot2;
                r0 = 0;
                r1 = r1[r0];
                r0 = undefined;
                r0 = r5.bind(r0)(r1);
                r1 = r0.default;
                r0 = r1.dispatchCommand;
                r0 = r0.bind(r1)(r4, r3, r2);
                return r0;
            }
        };
        r1['dispatchCommand'] = r2;
        r2 = function(a0) { // Original name: findHostInstance_DEPRECATED, environment: r0
            r2 = _closure1_slot1;
            r1 = _closure1_slot2;
            r0 = 2;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r2 = r0.default;
            r1 = r2.findHostInstance_DEPRECATED;
            r0 = a0;
            r0 = r1.bind(r2)(r0);
            return r0;
        };
        r1['findHostInstance_DEPRECATED'] = r2;
        r2 = function(a0) { // Original name: findNodeHandle, environment: r0
            r2 = _closure1_slot1;
            r1 = _closure1_slot2;
            r0 = 2;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r2 = r0.default;
            r1 = r2.findNodeHandle;
            r0 = a0;
            r0 = r1.bind(r2)(r0);
            return r0;
        };
        r1['findNodeHandle'] = r2;
        r2 = function(a0) { // Original name: getNodeFromInternalInstanceHandle, environment: r0
            r2 = _closure1_slot1;
            r1 = _closure1_slot2;
            r0 = 0;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r2 = r0.default;
            r1 = r2.getNodeFromInternalInstanceHandle;
            r0 = a0;
            r0 = r1.bind(r2)(r0);
            return r0;
        };
        r1['getNodeFromInternalInstanceHandle'] = r2;
        r2 = function(a0) { // Original name: getPublicInstanceFromInternalInstanceHandle, environment: r0
            r2 = _closure1_slot1;
            r1 = _closure1_slot2;
            r0 = 0;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r2 = r0.default;
            r1 = r2.getPublicInstanceFromInternalInstanceHandle;
            r0 = a0;
            r0 = r1.bind(r2)(r0);
            return r0;
        };
        r1['getPublicInstanceFromInternalInstanceHandle'] = r2;
        r2 = function(a0) { // Original name: getPublicInstanceFromRootTag, environment: r0
            r2 = _closure1_slot1;
            r1 = _closure1_slot2;
            r0 = 0;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r2 = r0.default;
            r1 = r2.getPublicInstanceFromRootTag;
            r0 = a0;
            r0 = r1.bind(r2)(r0);
            return r0;
        };
        r1['getPublicInstanceFromRootTag'] = r2;
        r2 = function(a0, a1) { // Original name: isChildPublicInstance, environment: r0
            r2 = _closure1_slot1;
            r1 = _closure1_slot2;
            r0 = 2;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r3 = r0.default;
            r2 = r3.isChildPublicInstance;
            r1 = a0;
            r0 = a1;
            r0 = r2.bind(r3)(r1, r0);
            return r0;
        };
        r1['isChildPublicInstance'] = r2;
        r2 = function() { // Original name: isProfilingRenderer, environment: r0
            r0 = global;
            r2 = r0.Boolean;
            r1 = undefined;
            r0 = false;
            r0 = r2.bind(r1)(r0);
            return r0;
        };
        r1['isProfilingRenderer'] = r2;
        r2 = function(a0) { // Original name: renderElement, environment: r0
            _fun457: for(var _fun457_ip = 0; ; ) switch(_fun457_ip) {
case 0:
                r1 = a0;
                r6 = r1.element;
                r5 = r1.rootTag;
                r0 = r1.useFabric;
                r4 = r1.useConcurrentRoot;
                r8 = _closure1_slot1;
                r9 = _closure1_slot2;
                if(r0) { _fun457_ip = 151; continue _fun457 }
case 41:
                r0 = 2;
                r0 = r9[r0];
                r3 = undefined;
                r0 = r8.bind(r3)(r0);
                r2 = r0.default;
                r1 = r2.render;
                r0 = {};
                r7 = 1;
                r10 = r9[r7];
                r10 = r8.bind(r3)(r10);
                r10 = r10.onCaughtError;
                r0['onCaughtError'] = r10;
                r10 = r9[r7];
                r10 = r8.bind(r3)(r10);
                r10 = r10.onUncaughtError;
                r0['onUncaughtError'] = r10;
                r7 = r9[r7];
                r7 = r8.bind(r3)(r7);
                r7 = r7.onRecoverableError;
                r0['onRecoverableError'] = r7;
                r16 = r2;
                r15 = r6;
                r14 = r5;
                r13 = undefined;
                r12 = r0;
                r0 = r16[r1](r15, r14, r13, r12, r11);
                _fun457_ip = 261; continue _fun457;
case 151:
                r0 = 0;
                r0 = r9[r0];
                r7 = undefined;
                r0 = r8.bind(r7)(r0);
                r3 = r0.default;
                r2 = r3.render;
                r1 = {};
                r0 = 1;
                r10 = r9[r0];
                r10 = r8.bind(r7)(r10);
                r10 = r10.onCaughtError;
                r1['onCaughtError'] = r10;
                r10 = r9[r0];
                r10 = r8.bind(r7)(r10);
                r10 = r10.onUncaughtError;
                r1['onUncaughtError'] = r10;
                r0 = r9[r0];
                r0 = r8.bind(r7)(r0);
                r0 = r0.onRecoverableError;
                r1['onRecoverableError'] = r0;
                r13 = null;
                r16 = r3;
                r15 = r6;
                r14 = r5;
                r12 = r4;
                r11 = r1;
                r0 = r16[r2](r15, r14, r13, r12, r11, r10);
case 261:
                r0 = undefined;
                return r0;
            }
        };
        r1['renderElement'] = r2;
        r2 = function(a0, a1) { // Original name: sendAccessibilityEvent, environment: r0
            r2 = _closure1_slot1;
            r1 = _closure1_slot2;
            r0 = 2;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r3 = r0.default;
            r2 = r3.sendAccessibilityEvent;
            r1 = a0;
            r0 = a1;
            r0 = r2.bind(r3)(r1, r0);
            return r0;
        };
        r1['sendAccessibilityEvent'] = r2;
        r2 = function(a0) { // Original name: unmountComponentAtNodeAndRemoveContainer, environment: r0
            r2 = _closure1_slot1;
            r1 = _closure1_slot2;
            r0 = 2;
            r1 = r1[r0];
            r0 = undefined;
            r1 = r2.bind(r0)(r1);
            r3 = r1.default;
            r2 = r3.unmountComponentAtNodeAndRemoveContainer;
            r1 = a0;
            r1 = r2.bind(r3)(r1);
            return r0;
        };
        r1['unmountComponentAtNodeAndRemoveContainer'] = r2;
        r0 = function(a0, a1) { // Original name: unstable_batchedUpdates, environment: r0
            r2 = _closure1_slot1;
            r1 = _closure1_slot2;
            r0 = 2;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r3 = r0.default;
            r2 = r3.unstable_batchedUpdates;
            r1 = a0;
            r0 = a1;
            r0 = r2.bind(r3)(r1, r0);
            return r0;
        };
        r1['unstable_batchedUpdates'] = r0;
        r0 = undefined;
        return r0;
    };
    r5 = 58;
    r4 = [59, 272, 273];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun469: for(var _fun469_ip = 0; ; ) switch(_fun469_ip) {
case 0:
            r3 = a0;
            r4 = a1;
            r2 = a5;
            r5 = a6;
            r0 = global;
            r8 = r0.Object;
            r7 = r8.defineProperty;
            r1 = {};
            r6 = true;
            r1['value'] = r6;
            r0 = '__esModule';
            r0 = r7.bind(r8)(r2, r0, r1);
            r0 = undefined;
            r2['default'] = r0;
            r1 = 0;
            r1 = r5[r1];
            r1 = r4.bind(r0)(r1);
            r7 = r1.stopSurface;
            r3['RN$stopSurface'] = r7;
            r3 = r3.RN$Bridgeless;
            if(!(r3 !== r6)) { _fun469_ip = 119; continue _fun469 }
case 85:
            r3 = 1;
            r3 = r5[r3];
            r3 = r4.bind(r0)(r3);
            r5 = r3.BatchedBridge;
            r4 = r5.registerCallableModule;
            r3 = 'ReactFabric';
            r3 = r4.bind(r5)(r3, r1);
case 119:
            r2['default'] = r1;
            return r0;
        }
    };
    r5 = 59;
    r4 = [60, 261];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun470: for(var _fun470_ip = 0; ; ) switch(_fun470_ip) {
case 0:
            r14 = a1;
            r3 = a5;
            r15 = a6;
            var _closure1_slot0 = r14;
            var _closure1_slot1 = r15;
            r2 = undefined;
            r6 = undefined;
            r5 = undefined;
            r0 = function(a0) { // Original name: getIteratorFn, environment: r1
                _fun471: for(var _fun471_ip = 0; ; ) switch(_fun471_ip) {
case 0:
                    r1 = a0;
                    r0 = null;
                    if(!(r0 !== r1)) { _fun471_ip = 65; continue _fun471 }
case 9:
                    r3 = 'object';
                    r2 = typeof r1;
                    if(!(r3 === r2)) { _fun471_ip = 65; continue _fun471 }
case 20:
                    r2 = _closure1_slot20;
                    if(!r2) { _fun471_ip = 38; continue _fun471 }
case 30:
                    r3 = _closure1_slot20;
                    r2 = r1[r3];
case 38:
                    if(r2) { _fun471_ip = 47; continue _fun471 }
case 41:
                    r2 = r1["@@iterator"];
case 47:
                    r4 = 'function';
                    r3 = typeof r2;
                    r1 = null;
                    if(!(r4 === r3)) { _fun471_ip = 63; continue _fun471 }
case 60:
                    r1 = r2;
case 63:
                    return r1;
case 65:
                    return r0;
                }
            };
            var _closure1_slot184 = r0;
            r0 = function(a0) { // Original name: describeBuiltInComponentFrame, environment: r1
                _fun472: for(var _fun472_ip = 0; ; ) switch(_fun472_ip) {
case 0:
                    r3 = undefined;
                    r4 = undefined;
                    r1 = _closure1_slot22;
                    if(!(r3 === r1)) { _fun472_ip = 189; continue _fun472 }
case 18: // try_start_0
                    r1 = global;
                    r1 = r1.Error;
                    r1 = r1.bind(r3)();
                    throw r1;
case 32: // try_end0 // catch_target0
                    CatchBlockStart(arg_register=1);
                    r2 = r1;
                    r3 = r1.stack;
                    r1 = r3.trim;
                    r5 = r1.bind(r3)();
                    r3 = r5.match;
                    r1 = /\n( *(at )?)/;
                    r5 = r3.bind(r5)(r1);
                    r4 = r5;
                    r3 = r5;
                    if(!r5) { _fun472_ip = 95; continue _fun472 }
case 85:
                    r5 = r4;
                    r4 = 1;
                    r3 = r5[r4];
case 95:
                    r1 = r3;
                    if(r3) { _fun472_ip = 105; continue _fun472 }
case 101:
                    r1 = '';
case 105:
                    var _closure1_slot22 = r1;
                    r1 = r2;
                    r4 = r1.stack;
                    r3 = r4.indexOf;
                    r1 = '\n    at';
                    r1 = r3.bind(r4)(r1);
                    r3 = -1;
                    r4 = r3 < r1;
                    r1 = ' (<anonymous>)';
                    if(r4) { _fun472_ip = 185; continue _fun472 }
case 148:
                    r5 = r2.stack;
                    r4 = r5.indexOf;
                    r2 = '@';
                    r2 = r4.bind(r5)(r2);
                    r3 = r3 < r2;
                    r2 = '';
                    if(!r3) { _fun472_ip = 182; continue _fun472 }
case 178:
                    r2 = '@unknown:0:0';
case 182:
                    r1 = r2;
case 185:
                    var _closure1_slot23 = r1;
case 189:
                    r2 = _closure1_slot22;
                    r1 = '\n';
                    r2 = r1 + r2;
                    r1 = a0;
                    r1 = r2 + r1;
                    r0 = _closure1_slot23;
                    r0 = r1 + r0;
                    return r0;
                }
            };
            var _closure1_slot185 = r0;
            r0 = function(a0, a1) { // Original name: describeNativeComponentFrame, environment: r1
                _fun473: for(var _fun473_ip = 0; ; ) switch(_fun473_ip) {
case 0:
                    r2 = a0;
                    r3 = r2;
                    var _closure2_slot0 = r2;
                    r4 = a1;
                    var _closure2_slot1 = r4;
                    r11 = undefined;
                    r1 = undefined;
                    r5 = undefined;
                    r12 = undefined;
                    r6 = undefined;
                    r15 = undefined;
                    r7 = undefined;
                    r13 = undefined;
                    r0 = undefined;
                    if(!r2) { _fun473_ip = 930; continue _fun473 }
case 43:
                    r2 = _closure1_slot24;
                    if(r2) { _fun473_ip = 930; continue _fun473 }
case 56:
                    r2 = true;
                    _closure1_slot24 = r2;
                    r2 = global;
                    r8 = r2.Error;
                    r1 = r8.prepareStackTrace;
                    r8 = r2.Error;
                    r8['prepareStackTrace'] = r11;
case 88: // try_start_0
                    r8 = {};
                    r9 = function() { // Original name: DetermineComponentFrameRoot, environment: r9
                        _fun474: for(var _fun474_ip = 0; ; ) switch(_fun474_ip) {
case 0:
                            r7 = undefined;
                            r2 = undefined;
                            r1 = undefined;
case 8: // try_start_3
                            r4 = _closure2_slot1;
                            if(r4) { _fun474_ip = 101; continue _fun474 }
case 18: // try_start_0
                            r4 = global;
                            r4 = r4.Error;
                            r4 = r4.bind(r7)();
                            throw r4;
case 32: // try_end0 // catch_target0
                            CatchBlockStart(arg_register=1);
                            r6 = _closure2_slot0;
                            r6 = r6.bind(r7)();
                            r2 = r6;
                            r4 = r6;
                            if(!r6) { _fun474_ip = 71; continue _fun474 }
case 51:
                            r6 = r2;
                            r6 = r6.catch;
                            r7 = 'function';
                            r6 = typeof r6;
                            r4 = r7 === r6;
case 71:
                            if(!r4) { _fun474_ip = 276; continue _fun474 }
case 77:
                            r7 = r2;
                            r6 = r7.catch;
                            r4 = function() { // Environment: r5
                                r0 = undefined;
                                return r0;
                            };
                            r4 = r6.bind(r7)(r4);
                            _fun474_ip = 276; continue _fun474;
case 101:
                            r6 = function() { // Original name: Fake, environment: r5
                                r0 = global;
                                r1 = r0.Error;
                                r0 = undefined;
                                r0 = r1.bind(r0)();
                                throw r0;
                            };
                            r2 = r6;
                            r4 = global;
                            r9 = r4.Object;
                            r8 = r9.defineProperty;
                            r7 = r6.prototype;
                            r6 = {};
                            r5 = function() { // Original name: set, environment: r5
                                r0 = global;
                                r1 = r0.Error;
                                r0 = undefined;
                                r0 = r1.bind(r0)();
                                throw r0;
                            };
                            r6['set'] = r5;
                            r5 = 'props';
                            r5 = r8.bind(r9)(r7, r5, r6);
                            r5 = r4.Reflect;
                            r6 = 'object';
                            r5 = typeof r5;
                            if(!(r6 === r5)) { _fun474_ip = 179; continue _fun474 }
case 165:
                            r5 = r4.Reflect;
                            r5 = r5.construct;
                            if(r5) { _fun474_ip = 219; continue _fun474 }
case 179: // try_start_1
                            r6 = r2;
                            r5 = r6.call;
                            r5 = r5.bind(r6)();
case 191: // try_end1
                            _fun474_ip = 195; continue _fun474;
case 193: // catch_target1
                            CatchBlockStart(arg_register=1);
case 195:
                            r7 = _closure2_slot0;
                            r6 = r7.call;
                            r5 = r2;
                            r5 = r5.prototype;
                            r5 = r6.bind(r7)(r5);
                            _fun474_ip = 276; continue _fun474;
case 219: // try_start_2
                            r8 = r4.Reflect;
                            r7 = r8.construct;
                            r6 = r2;
                            r5 = new Array(0);
                            r5 = r7.bind(r8)(r6, r5);
case 243: // try_end2
                            _fun474_ip = 247; continue _fun474;
case 245: // catch_target2
                            CatchBlockStart(arg_register=1);
case 247:
                            r6 = r4.Reflect;
                            r5 = r6.construct;
                            r4 = _closure2_slot0;
                            r3 = r2;
                            r2 = new Array(0);
                            r2 = r5.bind(r6)(r4, r2, r3);
case 276: // try_end3
                            _fun474_ip = 311; continue _fun474;
case 278: // catch_target3
                            CatchBlockStart(arg_register=2);
                            r0 = r2;
                            if(!r2) { _fun474_ip = 311; continue _fun474 }
case 286:
                            r2 = r1;
                            if(!r2) { _fun474_ip = 311; continue _fun474 }
case 292:
                            r2 = r0;
                            r2 = r2.stack;
                            r3 = 'string';
                            r2 = typeof r2;
                            if(!(r3 !== r2)) { _fun474_ip = 321; continue _fun474 }
case 311:
                            r2 = [null, null];
                            return r2;
case 321:
                            r2 = r0.stack;
                            r0 = new Array(2);
                            r0[0] = r2;
                            r1 = r1.stack;
                            r0[1] = r1;
                            return r0;
                        }
                    };
                    r8['DetermineComponentFrameRoot'] = r9;
                    r5 = r8;
                    r9 = r8.DetermineComponentFrameRoot;
                    r14 = 'DetermineComponentFrameRoot';
                    r9['displayName'] = r14;
                    r10 = r2.Object;
                    r9 = r10.getOwnPropertyDescriptor;
                    r8 = r8.DetermineComponentFrameRoot;
                    r17 = 'name';
                    r9 = r9.bind(r10)(r8, r17);
                    r12 = r9;
                    r8 = r9;
                    if(!r9) { _fun473_ip = 163; continue _fun473 }
case 155:
                    r9 = r12;
                    r8 = r9.configurable;
case 163:
                    if(!r8) { _fun473_ip = 199; continue _fun473 }
case 166:
                    r16 = r2.Object;
                    r10 = r16.defineProperty;
                    r8 = r5;
                    r9 = r8.DetermineComponentFrameRoot;
                    r8 = {};
                    r8['value'] = r14;
                    r8 = r10.bind(r16)(r9, r17, r8);
case 199:
                    r9 = r5;
                    r8 = r9.DetermineComponentFrameRoot;
                    r16 = r8.bind(r9)();
                    r10 = 0;
                    r8 = r16[r10];
                    r6 = r8;
                    r9 = 1;
                    r15 = r16[r9];
                    if(!r8) { _fun473_ip = 721; continue _fun473 }
case 234:
                    r8 = r15;
                    if(!r8) { _fun473_ip = 721; continue _fun473 }
case 243:
                    r16 = r6;
                    r8 = r16.split;
                    r6 = '\n';
                    r8 = r8.bind(r16)(r6);
                    r7 = r8;
                    r16 = r15;
                    r15 = r16.split;
                    r13 = r15.bind(r16)(r6);
                    r5 = 0;
                    r12 = 0;
                    r8 = r8.length;
                    if(!(r10 < r8)) { _fun473_ip = 358; continue _fun473 }
case 289:
                    r15 = r7;
                    r8 = r5;
                    r15 = r15[r8];
                    r8 = r15.includes;
                    r8 = r8.bind(r15)(r14);
                    if(r8) { _fun473_ip = 358; continue _fun473 }
case 313:
                    r8 = r5;
                    r15 = r8 + 1;
                    r5 = r15;
                    r8 = r7;
                    r8 = r8.length;
                    if(!(r15 < r8)) { _fun473_ip = 358; continue _fun473 }
case 334:
                    r15 = r7;
                    r8 = r5;
                    r15 = r15[r8];
                    r8 = r15.includes;
                    r8 = r8.bind(r15)(r14);
                    if(!r8) { _fun473_ip = 313; continue _fun473 }
case 358:
                    r15 = r12;
                    r8 = r13;
                    r8 = r8.length;
                    if(!(r15 < r8)) { _fun473_ip = 442; continue _fun473 }
case 373:
                    r15 = r13;
                    r8 = r12;
                    r15 = r15[r8];
                    r8 = r15.includes;
                    r8 = r8.bind(r15)(r14);
                    if(r8) { _fun473_ip = 442; continue _fun473 }
case 397:
                    r8 = r12;
                    r15 = r8 + 1;
                    r12 = r15;
                    r8 = r13;
                    r8 = r8.length;
                    if(!(r15 < r8)) { _fun473_ip = 442; continue _fun473 }
case 418:
                    r15 = r13;
                    r8 = r12;
                    r15 = r15[r8];
                    r8 = r15.includes;
                    r8 = r8.bind(r15)(r14);
                    if(!r8) { _fun473_ip = 397; continue _fun473 }
case 442:
                    r14 = r5;
                    r8 = r7;
                    r8 = r8.length;
                    if(!(r14 !== r8)) { _fun473_ip = 472; continue _fun473 }
case 457:
                    r14 = r12;
                    r8 = r13;
                    r8 = r8.length;
                    if(!(r14 === r8)) { _fun473_ip = 578; continue _fun473 }
case 472:
                    r8 = r7;
                    r8 = r8.length;
                    r8 = r8 - r9;
                    r5 = r8;
                    r14 = r13;
                    r14 = r14.length;
                    r12 = r14 - r9;
                    if(!(r9 <= r8)) { _fun473_ip = 578; continue _fun473 }
case 503:
                    r8 = r12;
                    if(!(r10 <= r8)) { _fun473_ip = 578; continue _fun473 }
case 510:
                    r14 = r7;
                    r8 = r5;
                    r14 = r14[r8];
                    r15 = r13;
                    r8 = r12;
                    r8 = r15[r8];
                    if(!(r14 !== r8)) { _fun473_ip = 578; continue _fun473 }
case 534:
                    r8 = r12;
                    r12 = r8 - 1;
                    r8 = r5;
                    if(!(r9 <= r8)) { _fun473_ip = 578; continue _fun473 }
case 547:
                    r8 = r12;
                    if(!(r10 <= r8)) { _fun473_ip = 578; continue _fun473 }
case 554:
                    r14 = r7;
                    r8 = r5;
                    r14 = r14[r8];
                    r15 = r13;
                    r8 = r12;
                    r8 = r15[r8];
                    if(r14 !== r8) { _fun473_ip = 534; continue _fun473 }
case 578:
                    r8 = r5;
                    if(!(r9 <= r8)) { _fun473_ip = 721; continue _fun473 }
case 588:
                    r8 = r12;
                    if(!(r10 <= r8)) { _fun473_ip = 721; continue _fun473 }
case 598:
                    r14 = r7;
                    r8 = r5;
                    r14 = r14[r8];
                    r15 = r13;
                    r8 = r12;
                    r8 = r15[r8];
                    if(!(r14 === r8)) { _fun473_ip = 650; continue _fun473 }
case 622:
                    r8 = r5;
                    r8 = r8 - 1;
                    r5 = r8;
                    r14 = r12;
                    r12 = r14 - 1;
                    if(!(r9 <= r8)) { _fun473_ip = 721; continue _fun473 }
case 641:
                    r8 = r12;
                    if(r10 <= r8) { _fun473_ip = 598; continue _fun473 }
case 648:
                    _fun473_ip = 721; continue _fun473;
case 650:
                    r8 = r5;
                    if(!(r9 === r8)) { _fun473_ip = 664; continue _fun473 }
case 657:
                    r8 = r12;
                    if(!(r9 !== r8)) { _fun473_ip = 721; continue _fun473 }
case 664:
                    r8 = r5;
                    r5 = r8 - 1;
                    r8 = r12;
                    r8 = r8 - 1;
                    r12 = r8;
                    if(!(!(r10 > r8))) { _fun473_ip = 800; continue _fun473 }
case 683:
                    r14 = r7;
                    r8 = r5;
                    r14 = r14[r8];
                    r15 = r13;
                    r8 = r12;
                    r8 = r15[r8];
                    if(!(r14 === r8)) { _fun473_ip = 800; continue _fun473 }
case 707:
                    r8 = r5;
                    if(!(r9 <= r8)) { _fun473_ip = 721; continue _fun473 }
case 714:
                    r8 = r12;
                    if(r10 <= r8) { _fun473_ip = 664; continue _fun473 }
case 721: // try_end0
                    r8 = false;
                    _closure1_slot24 = r8;
                    r9 = r2.Error;
                    r8 = r1;
                    r9['prepareStackTrace'] = r8;
                    r10 = r3;
                    r8 = '';
                    r9 = r8;
                    if(!r10) { _fun473_ip = 780; continue _fun473 }
case 755:
                    r12 = r3;
                    r12 = r12.displayName;
                    r10 = r12;
                    if(r12) { _fun473_ip = 777; continue _fun473 }
case 769:
                    r12 = r3;
                    r10 = r12.name;
case 777:
                    r9 = r10;
case 780:
                    r1 = r9;
                    if(!r9) { _fun473_ip = 798; continue _fun473 }
case 786:
                    r10 = _closure1_slot185;
                    r9 = r1;
                    r8 = r10.bind(r11)(r9);
case 798:
                    return r8;
case 800: // try_start_1
                    r9 = r7[r5];
                    r8 = r9.replace;
                    r7 = ' at new ';
                    r5 = ' at ';
                    r5 = r8.bind(r9)(r7, r5);
                    r0 = r6 + r5;
                    r6 = r3;
                    r6 = r6.displayName;
                    r5 = r6;
                    if(!r6) { _fun473_ip = 859; continue _fun473 }
case 841:
                    r8 = r0;
                    r7 = r8.includes;
                    r6 = '<anonymous>';
                    r5 = r7.bind(r8)(r6);
case 859:
                    if(!r5) { _fun473_ip = 885; continue _fun473 }
case 862:
                    r7 = r0;
                    r6 = r7.replace;
                    r5 = r3.displayName;
                    r3 = '<anonymous>';
                    r0 = r6.bind(r7)(r3, r5);
case 885: // try_end1
                    r3 = false;
                    _closure1_slot24 = r3;
                    r5 = r2.Error;
                    r3 = r1;
                    r5['prepareStackTrace'] = r3;
                    return r0;
case 908: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=0);
                    r3 = false;
                    _closure1_slot24 = r3;
                    r2 = r2.Error;
                    r2['prepareStackTrace'] = r1;
                    throw r0;
case 930:
                    r0 = '';
                    return r0;
                }
            };
            var _closure1_slot186 = r0;
            r0 = function(a0) { // Original name: describeFiber, environment: r1
                _fun478: for(var _fun478_ip = 0; ; ) switch(_fun478_ip) {
case 0:
                    r0 = a0;
                    r1 = r0.tag;
                    SwitchImm(value_reg=1, jump_table_address=191, default_jump_address=185, unsigned_min_value=0, unsigned_max_value=27) // Switch table: [80, 26, 185, 185, 185, 164, 185, 185, 185, 185, 185, 50, 185, 124, 185, 80, 144, 185, 185, 104, 185, 185, 185, 185, 185, 185, 164, 164];
case 26:
                    r4 = _closure1_slot186;
                    r3 = r0.type;
                    r2 = undefined;
                    r1 = true;
                    r1 = r4.bind(r2)(r3, r1);
                    return r1;
case 50:
                    r4 = _closure1_slot186;
                    r1 = r0.type;
                    r3 = r1.render;
                    r2 = undefined;
                    r1 = false;
                    r1 = r4.bind(r2)(r3, r1);
                    return r1;
case 80:
                    r4 = _closure1_slot186;
                    r3 = r0.type;
                    r2 = undefined;
                    r1 = false;
                    r1 = r4.bind(r2)(r3, r1);
                    return r1;
case 104:
                    r3 = _closure1_slot185;
                    r2 = undefined;
                    r1 = 'SuspenseList';
                    r1 = r3.bind(r2)(r1);
                    return r1;
case 124:
                    r3 = _closure1_slot185;
                    r2 = undefined;
                    r1 = 'Suspense';
                    r1 = r3.bind(r2)(r1);
                    return r1;
case 144:
                    r3 = _closure1_slot185;
                    r2 = undefined;
                    r1 = 'Lazy';
                    r1 = r3.bind(r2)(r1);
                    return r1;
case 164:
                    r2 = _closure1_slot185;
                    r1 = r0.type;
                    r0 = undefined;
                    r0 = r2.bind(r0)(r1);
                    return r0;
case 185:
                    r0 = '';
                    return r0;
                }
            };
            var _closure1_slot187 = r0;
            r0 = function(a0) { // Original name: getStackByFiberInDevAndProd, environment: r1
                _fun479: for(var _fun479_ip = 0; ; ) switch(_fun479_ip) {
case 0:
                    r4 = a0;
                    r3 = undefined;
                    r0 = undefined;
case 7: // try_start_0
                    r0 = '';
case 14:
                    r6 = r0;
                    r5 = _closure1_slot187;
                    r1 = r4;
                    r5 = r5.bind(r3)(r1);
                    r0 = r6 + r5;
                    r1 = r1.return;
                    r4 = r1;
                    if(r1) { _fun479_ip = 14; continue _fun479 }
case 44: // try_end0
                    return r0;
case 46: // catch_target0
                    CatchBlockStart(arg_register=0);
                    r2 = r0.message;
                    r1 = '\nError generating stack: ';
                    r2 = r1 + r2;
                    r1 = r0.stack;
                    r0 = '\n';
                    r0 = r2 + r0;
                    r0 = r0 + r1;
                    return r0;
                }
            };
            var _closure1_slot188 = r0;
            r0 = function(a0) { // Original name: getComponentNameFromType, environment: r1
                _fun480: for(var _fun480_ip = 0; ; ) switch(_fun480_ip) {
case 0:
                    r2 = a0;
                    r3 = r2;
                    r5 = undefined;
                    r1 = undefined;
                    r0 = null;
                    if(!(r0 != r2)) { _fun480_ip = 514; continue _fun480 }
case 19:
                    r2 = r3;
                    r4 = 'function';
                    r2 = typeof r2;
                    if(!(r4 !== r2)) { _fun480_ip = 467; continue _fun480 }
case 36:
                    r2 = r3;
                    r4 = 'string';
                    r2 = typeof r2;
                    if(!(r4 !== r2)) { _fun480_ip = 462; continue _fun480 }
case 53:
                    r6 = r3;
                    r4 = _closure1_slot7;
                    if(!(r4 !== r6)) { _fun480_ip = 456; continue _fun480 }
case 70:
                    r4 = _closure1_slot6;
                    if(!(r4 !== r6)) { _fun480_ip = 450; continue _fun480 }
case 81:
                    r4 = _closure1_slot9;
                    if(!(r4 !== r6)) { _fun480_ip = 444; continue _fun480 }
case 92:
                    r4 = _closure1_slot8;
                    if(!(r4 !== r6)) { _fun480_ip = 438; continue _fun480 }
case 103:
                    r4 = _closure1_slot14;
                    if(!(r4 !== r6)) { _fun480_ip = 432; continue _fun480 }
case 114:
                    r4 = _closure1_slot15;
                    if(!(r4 !== r6)) { _fun480_ip = 426; continue _fun480 }
case 125:
                    r4 = r3;
                    r6 = 'object';
                    r4 = typeof r4;
                    if(!(r6 === r4)) { _fun480_ip = 232; continue _fun480 }
case 139:
                    r4 = r3;
                    r6 = r4["$$typeof"];
                    r4 = _closure1_slot12;
                    if(!(r4 !== r6)) { _fun480_ip = 401; continue _fun480 }
case 158:
                    r4 = _closure1_slot11;
                    if(!(r4 !== r6)) { _fun480_ip = 370; continue _fun480 }
case 169:
                    r4 = _closure1_slot13;
                    if(!(r4 !== r6)) { _fun480_ip = 285; continue _fun480 }
case 177:
                    r4 = _closure1_slot16;
                    if(!(r4 !== r6)) { _fun480_ip = 234; continue _fun480 }
case 185:
                    r4 = _closure1_slot17;
                    if(!(r4 === r6)) { _fun480_ip = 232; continue _fun480 }
case 193:
                    r4 = r3;
                    r1 = r4._payload;
                    r3 = r4._init;
case 208: // try_start_0
                    r6 = _closure1_slot189;
                    r7 = r3;
                    r4 = r1;
                    r4 = r7.bind(r5)(r4);
                    r4 = r6.bind(r5)(r4);
case 228: // try_end0
                    return r4;
case 230: // catch_target0
                    CatchBlockStart(arg_register=4);
case 232:
                    return r0;
case 234:
                    r4 = r3;
                    r4 = r4.displayName;
                    if(r4) { _fun480_ip = 247; continue _fun480 }
case 245:
                    r4 = null;
case 247:
                    r1 = r4;
                    if(!(r0 === r4)) { _fun480_ip = 280; continue _fun480 }
case 254:
                    r4 = _closure1_slot189;
                    r2 = r3;
                    r2 = r2.type;
                    r2 = r4.bind(r5)(r2);
                    if(r2) { _fun480_ip = 278; continue _fun480 }
case 274:
                    r2 = 'Memo';
case 278:
                    _fun480_ip = 283; continue _fun480;
case 280:
                    r2 = r1;
case 283:
                    return r2;
case 285:
                    r2 = r3;
                    r1 = r2.render;
                    r2 = r2.displayName;
                    r3 = r2;
                    if(r2) { _fun480_ip = 365; continue _fun480 }
case 305:
                    r2 = r1;
                    r4 = r2.displayName;
                    if(r4) { _fun480_ip = 321; continue _fun480 }
case 316:
                    r4 = r1.name;
case 321:
                    if(r4) { _fun480_ip = 328; continue _fun480 }
case 324:
                    r4 = '';
case 328:
                    r3 = r4;
                    r1 = 'ForwardRef';
                    r2 = '';
                    if(!(r2 !== r4)) { _fun480_ip = 362; continue _fun480 }
case 343:
                    r4 = r3;
                    r2 = 'ForwardRef(';
                    r4 = r2 + r4;
                    r2 = ')';
                    r1 = r4 + r2;
case 362:
                    r3 = r1;
case 365:
                    r1 = r3;
                    return r1;
case 370:
                    r1 = r3;
                    r1 = r1._context;
                    r2 = r1.displayName;
                    if(r2) { _fun480_ip = 391; continue _fun480 }
case 387:
                    r2 = 'Context';
case 391:
                    r1 = '.Consumer';
                    r1 = r2 + r1;
                    return r1;
case 401:
                    r1 = r3;
                    r2 = r1.displayName;
                    if(r2) { _fun480_ip = 416; continue _fun480 }
case 412:
                    r2 = 'Context';
case 416:
                    r1 = '.Provider';
                    r1 = r2 + r1;
                    return r1;
case 426:
                    r1 = 'SuspenseList';
                    return r1;
case 432:
                    r1 = 'Suspense';
                    return r1;
case 438:
                    r1 = 'StrictMode';
                    return r1;
case 444:
                    r1 = 'Profiler';
                    return r1;
case 450:
                    r1 = 'Portal';
                    return r1;
case 456:
                    r1 = 'Fragment';
                    return r1;
case 462:
                    r1 = r3;
                    return r1;
case 467:
                    r1 = r3;
                    r4 = r1["$$typeof"];
                    r2 = _closure1_slot25;
                    r1 = null;
                    if(!(r4 !== r2)) { _fun480_ip = 512; continue _fun480 }
case 488:
                    r2 = r3;
                    r2 = r2.displayName;
                    if(r2) { _fun480_ip = 504; continue _fun480 }
case 499:
                    r2 = r3.name;
case 504:
                    if(r2) { _fun480_ip = 509; continue _fun480 }
case 507:
                    r2 = null;
case 509:
                    r1 = r2;
case 512:
                    return r1;
case 514:
                    return r0;
                }
            };
            var _closure1_slot189 = r0;
            r0 = function(a0, a1, a2) { // Original name: executeDispatch, environment: r1
                _fun481: for(var _fun481_ip = 0; ; ) switch(_fun481_ip) {
case 0:
                    r6 = a0;
                    r1 = r6;
                    r4 = a1;
                    r7 = _closure1_slot30;
                    r0 = undefined;
                    r5 = a2;
                    r5 = r7.bind(r0)(r5);
                    r6['currentTarget'] = r5;
case 32: // try_start_0
                    r5 = r4;
                    r4 = r1;
                    r4 = r5.bind(r0)(r4);
case 43: // try_end0
                    _fun481_ip = 64; continue _fun481;
case 45: // catch_target0
                    CatchBlockStart(arg_register=2);
                    r4 = _closure1_slot26;
                    if(r4) { _fun481_ip = 64; continue _fun481 }
case 54:
                    r4 = true;
                    _closure1_slot26 = r4;
                    _closure1_slot27 = r2;
case 64:
                    r2 = r1;
                    r1 = null;
                    r2['currentTarget'] = r1;
                    return r0;
                }
            };
            var _closure1_slot190 = r0;
            r0 = function(a0) { // Original name: executeDirectDispatch, environment: r1
                _fun482: for(var _fun482_ip = 0; ; ) switch(_fun482_ip) {
case 0:
                    r3 = a0;
                    r4 = r3._dispatchListeners;
                    r6 = r3._dispatchInstances;
                    r0 = _closure1_slot2;
                    r2 = undefined;
                    r0 = r0.bind(r2)(r4);
                    if(r0) { _fun482_ip = 82; continue _fun482 }
case 30:
                    r1 = null;
                    r0 = null;
                    if(!r4) { _fun482_ip = 46; continue _fun482 }
case 37:
                    r5 = _closure1_slot30;
                    r0 = r5.bind(r2)(r6);
case 46:
                    r3['currentTarget'] = r0;
                    r0 = null;
                    if(!r4) { _fun482_ip = 62; continue _fun482 }
case 57:
                    r0 = r4.bind(r2)(r3);
case 62:
                    r3['currentTarget'] = r1;
                    r3['_dispatchListeners'] = r1;
                    r3['_dispatchInstances'] = r1;
                    return r0;
case 82:
                    r0 = global;
                    r1 = r0.Error;
                    r0 = 'Invalid `event`.';
                    r0 = r1.bind(r2)(r0);
                    throw r0;
                }
            };
            var _closure1_slot191 = r0;
            r0 = function() { // Original name: functionThatReturnsTrue, environment: r1
                r0 = true;
                return r0;
            };
            var _closure1_slot192 = r0;
            r47 = function() { // Original name: functionThatReturnsFalse, environment: r1
                r0 = false;
                return r0;
            };
            var _closure1_slot193 = r47;
            r16 = function(a0, a1, a2, a3) { // Original name: SyntheticEvent, environment: r1
                _fun485: for(var _fun485_ip = 0; ; ) switch(_fun485_ip) {
case 0:
                    r12 = a1;
                    r1 = a2;
                    r11 = a3;
                    r0 = this;
                    r2 = a0;
                    r0['dispatchConfig'] = r2;
                    r0['_targetInst'] = r12;
                    r0['nativeEvent'] = r1;
                    r3 = null;
                    r0['_dispatchListeners'] = r3;
                    r0['_dispatchInstances'] = r3;
                    r2 = r0.constructor;
                    r10 = r2.Interface;
                    r8 = r10;
                    r4 = undefined;
                    r2 = 'target';
                    for(r5 in r8)
case 75:
                    {
case 84:
                        r15 = r5;
                        r13 = r10.hasOwnProperty;
                        r13 = r13.bind(r10)(r15);
                        if(!r13) { _fun485_ip = 75; continue _fun485 }
case 100:
                        r13 = r10[r15];
                        if(r13) { _fun485_ip = 135; continue _fun485 }
case 107:
                        if(!(r2 !== r15)) { _fun485_ip = 124; continue _fun485 }
case 111:
                        r14 = r1[r15];
                        r0[r15] = r14;
                        r12 = r13;
                        _fun485_ip = 75; continue _fun485;
case 124:
                        r0['target'] = r11;
                        r12 = r13;
                        _fun485_ip = 75; continue _fun485;
case 135:
                        r14 = r13.bind(r4)(r1);
                        r0[r15] = r14;
                        r12 = r13;
                        _fun485_ip = 75; continue _fun485;
                    }
case 149:
                    r2 = r1.defaultPrevented;
                    if(!(r3 == r2)) { _fun485_ip = 173; continue _fun485 }
case 159:
                    r3 = r1.returnValue;
                    r2 = false;
                    r2 = r2 === r3;
                    _fun485_ip = 179; continue _fun485;
case 173:
                    r2 = r1.defaultPrevented;
case 179:
                    if(r2) { _fun485_ip = 191; continue _fun485 }
case 185:
                    r2 = _closure1_slot193;
                    _fun485_ip = 195; continue _fun485;
case 191:
                    r2 = _closure1_slot192;
case 195:
                    r0['isDefaultPrevented'] = r2;
                    r1 = _closure1_slot193;
                    r0['isPropagationStopped'] = r1;
                    return r0;
                }
            };
            var _closure1_slot194 = r16;
            r0 = function(a0, a1, a2, a3) { // Original name: createOrGetPooledEvent, environment: r1
                _fun486: for(var _fun486_ip = 0; ; ) switch(_fun486_ip) {
case 0:
                    r6 = a0;
                    r5 = a1;
                    r4 = a2;
                    r3 = a3;
                    r2 = this;
                    r0 = r2.eventPool;
                    r0 = r0.length;
                    if(r0) { _fun486_ip = 63; continue _fun486 }
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
                    r1 = r2.eventPool;
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
            var _closure1_slot195 = r0;
            r0 = function(a0) { // Original name: releasePooledEvent, environment: r1
                _fun487: for(var _fun487_ip = 0; ; ) switch(_fun487_ip) {
case 0:
                    r2 = a0;
                    r0 = this;
                    r1 = r2 instanceof r0;
                    if(r1) { _fun487_ip = 34; continue _fun487 }
case 13:
                    r1 = global;
                    r4 = r1.Error;
                    r3 = undefined;
                    r1 = 'Trying to release an event instance into a pool of a different type.';
                    r1 = r4.bind(r3)(r1);
                    throw r1;
case 34:
                    r1 = r2.destructor;
                    r1 = r1.bind(r2)();
                    r1 = r0.eventPool;
                    r3 = r1.length;
                    r1 = 10;
                    if(!(r1 > r3)) { _fun487_ip = 78; continue _fun487 }
case 62:
                    r1 = r0.eventPool;
                    r0 = r1.push;
                    r0 = r0.bind(r1)(r2);
case 78:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot196 = r0;
            r10 = function(a0) { // Original name: addEventPoolingTo, environment: r1
                r1 = a0;
                r2 = _closure1_slot195;
                r1['getPooled'] = r2;
                r2 = new Array(0);
                r1['eventPool'] = r2;
                r0 = _closure1_slot196;
                r1['release'] = r0;
                r0 = undefined;
                return r0;
            };
            var _closure1_slot197 = r10;
            r0 = function(a0) { // Original name: isStartish, environment: r1
                r1 = 'topTouchStart';
                r0 = a0;
                r0 = r1 === r0;
                return r0;
            };
            var _closure1_slot198 = r0;
            r0 = function(a0) { // Original name: isMoveish, environment: r1
                r1 = 'topTouchMove';
                r0 = a0;
                r0 = r1 === r0;
                return r0;
            };
            var _closure1_slot199 = r0;
            r0 = function(a0) { // Original name: timestampForTouch, environment: r1
                _fun491: for(var _fun491_ip = 0; ; ) switch(_fun491_ip) {
case 0:
                    r1 = a0;
                    r0 = r1.timeStamp;
                    if(r0) { _fun491_ip = 18; continue _fun491 }
case 12:
                    r0 = r1.timestamp;
case 18:
                    return r0;
                }
            };
            var _closure1_slot200 = r0;
            r0 = function(a0) { // Original name: getTouchIdentifier, environment: r1
                _fun492: for(var _fun492_ip = 0; ; ) switch(_fun492_ip) {
case 0:
                    r0 = a0;
                    r0 = r0.identifier;
                    r1 = null;
                    if(!(r1 != r0)) { _fun492_ip = 17; continue _fun492 }
case 15:
                    return r0;
case 17:
                    r0 = global;
                    r2 = r0.Error;
                    r1 = undefined;
                    r0 = 'Touch object is missing identifier.';
                    r0 = r2.bind(r1)(r0);
                    throw r0;
                }
            };
            var _closure1_slot201 = r0;
            r0 = function(a0) { // Original name: recordTouchStart, environment: r1
                _fun493: for(var _fun493_ip = 0; ; ) switch(_fun493_ip) {
case 0:
                    r3 = a0;
                    r2 = _closure1_slot201;
                    r0 = undefined;
                    r7 = r2.bind(r0)(r3);
                    r2 = _closure1_slot32;
                    r4 = r2[r7];
                    r2 = true;
                    if(r4) { _fun493_ip = 141; continue _fun493 }
case 30:
                    r6 = {};
                    r6['touchActive'] = r2;
                    r5 = r3.pageX;
                    r6['startPageX'] = r5;
                    r5 = r3.pageY;
                    r6['startPageY'] = r5;
                    r5 = _closure1_slot200;
                    r8 = r5.bind(r0)(r3);
                    r6['startTimeStamp'] = r8;
                    r8 = r3.pageX;
                    r6['currentPageX'] = r8;
                    r8 = r3.pageY;
                    r6['currentPageY'] = r8;
                    r8 = r5.bind(r0)(r3);
                    r6['currentTimeStamp'] = r8;
                    r8 = r3.pageX;
                    r6['previousPageX'] = r8;
                    r8 = r3.pageY;
                    r6['previousPageY'] = r8;
                    r5 = r5.bind(r0)(r3);
                    r6['previousTimeStamp'] = r5;
                    r5 = _closure1_slot32;
                    r5[r7] = r6;
                    _fun493_ip = 250; continue _fun493;
case 141:
                    r4['touchActive'] = r2;
                    r2 = r3.pageX;
                    r4['startPageX'] = r2;
                    r2 = r3.pageY;
                    r4['startPageY'] = r2;
                    r2 = _closure1_slot200;
                    r5 = r2.bind(r0)(r3);
                    r4['startTimeStamp'] = r5;
                    r5 = r3.pageX;
                    r4['currentPageX'] = r5;
                    r5 = r3.pageY;
                    r4['currentPageY'] = r5;
                    r5 = r2.bind(r0)(r3);
                    r4['currentTimeStamp'] = r5;
                    r5 = r3.pageX;
                    r4['previousPageX'] = r5;
                    r5 = r3.pageY;
                    r4['previousPageY'] = r5;
                    r2 = r2.bind(r0)(r3);
                    r4['previousTimeStamp'] = r2;
case 250:
                    r2 = _closure1_slot33;
                    r1 = _closure1_slot200;
                    r1 = r1.bind(r0)(r3);
                    r2['mostRecentTimeStamp'] = r1;
                    return r0;
                }
            };
            var _closure1_slot202 = r0;
            r0 = function(a0) { // Original name: recordTouchMove, environment: r1
                _fun494: for(var _fun494_ip = 0; ; ) switch(_fun494_ip) {
case 0:
                    r3 = a0;
                    r4 = _closure1_slot32;
                    r1 = _closure1_slot201;
                    r0 = undefined;
                    r1 = r1.bind(r0)(r3);
                    r5 = r4[r1];
                    if(!r5) { _fun494_ip = 124; continue _fun494 }
case 28:
                    r1 = true;
                    r5['touchActive'] = r1;
                    r1 = r5.currentPageX;
                    r5['previousPageX'] = r1;
                    r1 = r5.currentPageY;
                    r5['previousPageY'] = r1;
                    r1 = r5.currentTimeStamp;
                    r5['previousTimeStamp'] = r1;
                    r1 = r3.pageX;
                    r5['currentPageX'] = r1;
                    r1 = r3.pageY;
                    r5['currentPageY'] = r1;
                    r1 = _closure1_slot200;
                    r4 = r1.bind(r0)(r3);
                    r5['currentTimeStamp'] = r4;
                    r2 = _closure1_slot33;
                    r1 = r1.bind(r0)(r3);
                    r2['mostRecentTimeStamp'] = r1;
case 124:
                    return r0;
                }
            };
            var _closure1_slot203 = r0;
            r0 = function(a0) { // Original name: recordTouchEnd, environment: r1
                _fun495: for(var _fun495_ip = 0; ; ) switch(_fun495_ip) {
case 0:
                    r3 = a0;
                    r4 = _closure1_slot32;
                    r1 = _closure1_slot201;
                    r0 = undefined;
                    r1 = r1.bind(r0)(r3);
                    r5 = r4[r1];
                    if(!r5) { _fun495_ip = 124; continue _fun495 }
case 28:
                    r1 = false;
                    r5['touchActive'] = r1;
                    r1 = r5.currentPageX;
                    r5['previousPageX'] = r1;
                    r1 = r5.currentPageY;
                    r5['previousPageY'] = r1;
                    r1 = r5.currentTimeStamp;
                    r5['previousTimeStamp'] = r1;
                    r1 = r3.pageX;
                    r5['currentPageX'] = r1;
                    r1 = r3.pageY;
                    r5['currentPageY'] = r1;
                    r1 = _closure1_slot200;
                    r4 = r1.bind(r0)(r3);
                    r5['currentTimeStamp'] = r4;
                    r2 = _closure1_slot33;
                    r1 = r1.bind(r0)(r3);
                    r2['mostRecentTimeStamp'] = r1;
case 124:
                    return r0;
                }
            };
            var _closure1_slot204 = r0;
            r0 = function(a0, a1) { // Original name: accumulate, environment: r1
                _fun496: for(var _fun496_ip = 0; ; ) switch(_fun496_ip) {
case 0:
                    r4 = a0;
                    r3 = a1;
                    r1 = null;
                    if(!(r1 != r3)) { _fun496_ip = 97; continue _fun496 }
case 12:
                    r0 = r3;
                    if(!(r1 != r4)) { _fun496_ip = 95; continue _fun496 }
case 19:
                    r5 = _closure1_slot2;
                    r2 = undefined;
                    r5 = r5.bind(r2)(r4);
                    if(r5) { _fun496_ip = 82; continue _fun496 }
case 36:
                    r1 = _closure1_slot2;
                    r1 = r1.bind(r2)(r3);
                    if(r1) { _fun496_ip = 62; continue _fun496 }
case 48:
                    r1 = new Array(2);
                    r1[0] = r4;
                    r1[1] = r3;
                    _fun496_ip = 80; continue _fun496;
case 62:
                    r5 = new Array(1);
                    r5[0] = r4;
                    r2 = r5.concat;
                    r1 = r2.bind(r5)(r3);
case 80:
                    _fun496_ip = 92; continue _fun496;
case 82:
                    r2 = r4.concat;
                    r1 = r2.bind(r4)(r3);
case 92:
                    r0 = r1;
case 95:
                    return r0;
case 97:
                    r0 = global;
                    r2 = r0.Error;
                    r1 = undefined;
                    r0 = 'Accumulated items must not be null or undefined.';
                    r0 = r2.bind(r1)(r0);
                    throw r0;
                }
            };
            var _closure1_slot205 = r0;
            r0 = function(a0, a1) { // Original name: accumulateInto, environment: r1
                _fun497: for(var _fun497_ip = 0; ; ) switch(_fun497_ip) {
case 0:
                    r1 = a0;
                    r0 = a1;
                    r2 = null;
                    if(!(r2 != r0)) { _fun497_ip = 109; continue _fun497 }
case 12:
                    if(!(r2 != r1)) { _fun497_ip = 107; continue _fun497 }
case 16:
                    r3 = _closure1_slot2;
                    r4 = undefined;
                    r3 = r3.bind(r4)(r1);
                    r2 = _closure1_slot2;
                    r2 = r2.bind(r4)(r0);
                    if(r3) { _fun497_ip = 79; continue _fun497 }
case 42:
                    if(r2) { _fun497_ip = 59; continue _fun497 }
case 45:
                    r3 = new Array(2);
                    r3[0] = r1;
                    r3[1] = r0;
                    _fun497_ip = 77; continue _fun497;
case 59:
                    r5 = new Array(1);
                    r5[0] = r1;
                    r4 = r5.concat;
                    r3 = r4.bind(r5)(r0);
case 77:
                    return r3;
case 79:
                    r3 = r1.push;
                    if(r2) { _fun497_ip = 94; continue _fun497 }
case 87:
                    r2 = r3.bind(r1)(r0);
                    return r1;
case 94:
                    r2 = r3.apply;
                    r2 = r2.bind(r3)(r1, r0);
                    return r1;
case 107:
                    return r0;
case 109:
                    r0 = global;
                    r2 = r0.Error;
                    r1 = undefined;
                    r0 = 'Accumulated items must not be null or undefined.';
                    r0 = r2.bind(r1)(r0);
                    throw r0;
                }
            };
            var _closure1_slot206 = r0;
            r0 = function(a0, a1, a2) { // Original name: forEachAccumulated, environment: r1
                _fun498: for(var _fun498_ip = 0; ; ) switch(_fun498_ip) {
case 0:
                    r3 = a0;
                    r2 = a1;
                    r0 = global;
                    r1 = r0.Array;
                    r0 = r1.isArray;
                    r0 = r0.bind(r1)(r3);
                    if(r0) { _fun498_ip = 45; continue _fun498 }
case 27:
                    if(!r3) { _fun498_ip = 58; continue _fun498 }
case 30:
                    r1 = r2.call;
                    r0 = undefined;
                    r0 = r1.bind(r2)(r0, r3);
                    _fun498_ip = 58; continue _fun498;
case 45:
                    r1 = r3.forEach;
                    r0 = undefined;
                    r0 = r1.bind(r3)(r2, r0);
case 58:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot207 = r0;
            r0 = function(a0, a1) { // Original name: changeResponder, environment: r1
                _fun499: for(var _fun499_ip = 0; ; ) switch(_fun499_ip) {
case 0:
                    r4 = a0;
                    r3 = _closure1_slot36;
                    _closure1_slot36 = r4;
                    r1 = _closure1_slot39;
                    r2 = r1.GlobalResponderHandler;
                    r1 = null;
                    if(!(r1 !== r2)) { _fun499_ip = 56; continue _fun499 }
case 30:
                    r0 = _closure1_slot39;
                    r2 = r0.GlobalResponderHandler;
                    r1 = r2.onChange;
                    r0 = a1;
                    r0 = r1.bind(r2)(r3, r4, r0);
case 56:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot208 = r0;
            r0 = function(a0) { // Original name: getParent$1, environment: r1
                _fun500: for(var _fun500_ip = 0; ; ) switch(_fun500_ip) {
case 0:
                    r3 = a0;
                    r2 = 5;
case 6:
                    r1 = r3.return;
                    if(!r1) { _fun500_ip = 26; continue _fun500 }
case 14:
                    r0 = r1.tag;
                    r3 = r1;
                    if(r2 !== r0) { _fun500_ip = 6; continue _fun500 }
case 26:
                    r0 = null;
                    if(!r1) { _fun500_ip = 34; continue _fun500 }
case 31:
                    r0 = r1;
case 34:
                    return r0;
                }
            };
            var _closure1_slot209 = r0;
            r0 = function(a0, a1, a2) { // Original name: traverseTwoPhase$1, environment: r1
                _fun501: for(var _fun501_ip = 0; ; ) switch(_fun501_ip) {
case 0:
                    r2 = a0;
                    r6 = a1;
                    r5 = a2;
                    r4 = new Array(0);
                    r0 = undefined;
                    if(!r2) { _fun501_ip = 43; continue _fun501 }
case 21:
                    r3 = r4.push;
                    r3 = r3.bind(r4)(r2);
                    r3 = _closure1_slot209;
                    r2 = r3.bind(r0)(r2);
                    if(r2) { _fun501_ip = 21; continue _fun501 }
case 43:
                    r1 = r4.length;
                    r1 = parseFloat(r1);
                    r7 = r1 - 1;
                    r2 = 'captured';
                    r3 = 0;
                    if(!(r3 < r1)) { _fun501_ip = 85; continue _fun501 }
case 64:
                    r1 = r4[r7];
                    r1 = r6.bind(r0)(r1, r2, r5);
                    r1 = parseFloat(r7);
                    r7 = r1 - 1;
                    if(r3 < r1) { _fun501_ip = 64; continue _fun501 }
case 85:
                    r1 = r4.length;
                    r1 = r3 < r1;
                    r2 = 'bubbled';
                    r3 = 0;
                    if(!r1) { _fun501_ip = 126; continue _fun501 }
case 103:
                    r1 = r4[r3];
                    r1 = r6.bind(r0)(r1, r2, r5);
                    r3 = r3 + 1;
                    r1 = r4.length;
                    if(r3 < r1) { _fun501_ip = 103; continue _fun501 }
case 126:
                    return r0;
                }
            };
            var _closure1_slot210 = r0;
            r0 = function(a0, a1) { // Original name: getListener$1, environment: r1
                _fun502: for(var _fun502_ip = 0; ; ) switch(_fun502_ip) {
case 0:
                    r5 = a1;
                    r0 = a0;
                    r2 = r0.stateNode;
                    r0 = null;
                    if(!(r0 !== r2)) { _fun502_ip = 100; continue _fun502 }
case 17:
                    r1 = _closure1_slot28;
                    r3 = undefined;
                    r1 = r1.bind(r3)(r2);
                    if(!(r0 !== r1)) { _fun502_ip = 98; continue _fun502 }
case 35:
                    r1 = r1[r5];
                    if(!r1) { _fun502_ip = 53; continue _fun502 }
case 42:
                    r4 = typeof r1;
                    r2 = 'function';
                    if(!(r2 === r4)) { _fun502_ip = 55; continue _fun502 }
case 53:
                    return r1;
case 55:
                    r1 = global;
                    r2 = r1.Error;
                    r1 = 'Expected `';
                    r5 = r1 + r5;
                    r1 = '` listener to be a function, instead got a value of `';
                    r1 = r5 + r1;
                    r4 = r1 + r4;
                    r1 = '` type.';
                    r1 = r4 + r1;
                    r1 = r2.bind(r3)(r1);
                    throw r1;
case 98:
                    return r0;
case 100:
                    return r0;
                }
            };
            var _closure1_slot211 = r0;
            r0 = function(a0, a1, a2) { // Original name: accumulateDirectionalDispatches$1, environment: r1
                _fun503: for(var _fun503_ip = 0; ; ) switch(_fun503_ip) {
case 0:
                    r4 = a0;
                    r2 = a2;
                    r5 = _closure1_slot211;
                    r0 = r2.dispatchConfig;
                    r3 = r0.phasedRegistrationNames;
                    r0 = a1;
                    r3 = r3[r0];
                    r0 = undefined;
                    r5 = r5.bind(r0)(r4, r3);
                    if(!r5) { _fun503_ip = 79; continue _fun503 }
case 41:
                    r3 = _closure1_slot206;
                    r1 = r2._dispatchListeners;
                    r1 = r3.bind(r0)(r1, r5);
                    r2['_dispatchListeners'] = r1;
                    r1 = r2._dispatchInstances;
                    r1 = r3.bind(r0)(r1, r4);
                    r2['_dispatchInstances'] = r1;
case 79:
                    return r0;
                }
            };
            var _closure1_slot212 = r0;
            r0 = function(a0) { // Original name: accumulateDirectDispatchesSingle$1, environment: r1
                _fun504: for(var _fun504_ip = 0; ; ) switch(_fun504_ip) {
case 0:
                    r1 = a0;
                    if(!r1) { _fun504_ip = 110; continue _fun504 }
case 6:
                    r0 = r1.dispatchConfig;
                    r0 = r0.registrationName;
                    if(!r0) { _fun504_ip = 110; continue _fun504 }
case 19:
                    r4 = r1._targetInst;
                    if(!r4) { _fun504_ip = 110; continue _fun504 }
case 28:
                    if(!r1) { _fun504_ip = 110; continue _fun504 }
case 31:
                    r0 = r1.dispatchConfig;
                    r0 = r0.registrationName;
                    if(!r0) { _fun504_ip = 110; continue _fun504 }
case 44:
                    r5 = _closure1_slot211;
                    r2 = r1.dispatchConfig;
                    r2 = r2.registrationName;
                    r3 = undefined;
                    r5 = r5.bind(r3)(r4, r2);
                    if(!r5) { _fun504_ip = 110; continue _fun504 }
case 72:
                    r2 = _closure1_slot206;
                    r0 = r1._dispatchListeners;
                    r0 = r2.bind(r3)(r0, r5);
                    r1['_dispatchListeners'] = r0;
                    r0 = r1._dispatchInstances;
                    r0 = r2.bind(r3)(r0, r4);
                    r1['_dispatchInstances'] = r0;
case 110:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot213 = r0;
            r0 = function(a0) { // Original name: accumulateTwoPhaseDispatchesSingleSkipTarget, environment: r1
                _fun505: for(var _fun505_ip = 0; ; ) switch(_fun505_ip) {
case 0:
                    r4 = a0;
                    if(!r4) { _fun505_ip = 64; continue _fun505 }
case 6:
                    r0 = r4.dispatchConfig;
                    r0 = r0.phasedRegistrationNames;
                    if(!r0) { _fun505_ip = 64; continue _fun505 }
case 19:
                    r2 = r4._targetInst;
                    r3 = null;
                    if(!r2) { _fun505_ip = 44; continue _fun505 }
case 30:
                    r1 = _closure1_slot209;
                    r0 = undefined;
                    r3 = r1.bind(r0)(r2);
case 44:
                    r2 = _closure1_slot210;
                    r1 = _closure1_slot212;
                    r0 = undefined;
                    r0 = r2.bind(r0)(r3, r1, r4);
case 64:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot214 = r0;
            r0 = function(a0) { // Original name: accumulateTwoPhaseDispatchesSingle$1, environment: r1
                _fun506: for(var _fun506_ip = 0; ; ) switch(_fun506_ip) {
case 0:
                    r4 = a0;
                    r0 = r4;
                    if(!r0) { _fun506_ip = 19; continue _fun506 }
case 9:
                    r1 = r4.dispatchConfig;
                    r0 = r1.phasedRegistrationNames;
case 19:
                    if(!r0) { _fun506_ip = 48; continue _fun506 }
case 22:
                    r3 = _closure1_slot210;
                    r2 = r4._targetInst;
                    r1 = _closure1_slot212;
                    r0 = undefined;
                    r0 = r3.bind(r0)(r2, r1, r4);
case 48:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot215 = r0;
            r45 = function() { // Original name: recomputePluginOrdering, environment: r1
                _fun507: for(var _fun507_ip = 0; ; ) switch(_fun507_ip) {
case 0:
                    r0 = _closure1_slot40;
                    if(!r0) { _fun507_ip = 490; continue _fun507 }
case 13:
                    r20 = _closure1_slot41;
                    r2 = undefined;
                    r14 = -1;
                    r25 = undefined;
                    r24 = undefined;
                    r23 = undefined;
                    r4 = undefined;
                    for(r17 in r20)
case 44:
                    {
                        r6 = r25;
                        r5 = r24;
                        r1 = r23;
                        r0 = r4;
case 68:
                        r3 = r17;
                        r7 = _closure1_slot41;
                        r13 = r7[r3];
                        r8 = _closure1_slot40;
                        r7 = r8.indexOf;
                        r8 = r7.bind(r8)(r3);
                        if(!(!(r14 >= r8))) { _fun507_ip = 459; continue _fun507 }
case 100:
                        r7 = _closure1_slot42;
                        r7 = r7[r8];
                        r25 = r6;
                        r24 = r5;
                        r23 = r1;
                        r4 = r0;
                        if(r7) { _fun507_ip = 44; continue _fun507 }
case 123:
                        r7 = r13.extractEvents;
                        if(r7) { _fun507_ip = 163; continue _fun507 }
case 132:
                        r7 = global;
                        r9 = r7.Error;
                        r7 = '` does not.';
                        r10 = r3 + r7;
                        r7 = 'EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `';
                        r7 = r7 + r10;
                        r7 = r9.bind(r2)(r7);
                        throw r7;
case 163:
                        r7 = _closure1_slot42;
                        r7[r8] = r13;
                        r12 = r13.eventTypes;
                        r10 = r12;
                        r25 = r6;
                        r24 = r5;
                        r23 = r1;
                        r4 = r0;
                        r6 = r25;
                        r5 = r24;
                        r1 = r23;
                        r0 = r4;
                        ForInLoopInit(obj_props_register=11, obj_register=10, iter_index_register=9, iter_size_register=8);
                        if(r11 === undefined) { _fun507_ip = 44; continue _fun507 }
case 215:
                        r25 = r6;
                        r24 = r5;
                        r23 = r1;
                        r4 = r0;
                        ForInLoopNextIter(next_value_register=7, obj_props_register=11, obj_register=10, iter_index_register=9, iter_size_register=8);
                        if(r7 === undefined) { _fun507_ip = 44; continue _fun507 }
case 239:
                        r4 = r7;
                        r25 = r12[r4];
                        r24 = _closure1_slot43;
                        r23 = r24.hasOwnProperty;
                        r23 = r23.bind(r24)(r4);
                        if(r23) { _fun507_ip = 428; continue _fun507 }
case 266:
                        r23 = _closure1_slot43;
                        r23[r4] = r25;
                        r24 = r25.phasedRegistrationNames;
                        if(r24) { _fun507_ip = 311; continue _fun507 }
case 282:
                        r26 = r25.registrationName;
                        r23 = false;
                        if(!r26) { _fun507_ip = 367; continue _fun507 }
case 292:
                        r27 = _closure1_slot216;
                        r26 = r25.registrationName;
                        r26 = r27.bind(r2)(r26, r13);
                        r23 = true;
                        _fun507_ip = 367; continue _fun507;
case 311:
                        r29 = r24;
                        r23 = true;
                        for(r26 in r29)
case 324:
                        {
                            r23 = true;
case 335:
                            r31 = r26;
                            r32 = r24.hasOwnProperty;
                            r32 = r32.bind(r24)(r31);
                            if(!r32) { _fun507_ip = 324; continue _fun507 }
case 351:
                            r32 = _closure1_slot216;
                            r31 = r24[r31];
                            r31 = r32.bind(r2)(r31, r13);
                            _fun507_ip = 324; continue _fun507;
                        }
case 367:
                        r5 = r23;
                        r6 = r4;
                        r1 = r25;
                        r0 = r24;
                        if(r5) { _fun507_ip = 215; continue _fun507 }
case 385:
                        r0 = global;
                        r1 = r0.Error;
                        r0 = 'EventPluginRegistry: Failed to publish event `';
                        r5 = r0 + r4;
                        r0 = '` for plugin `';
                        r0 = r5 + r0;
                        r5 = r0 + r3;
                        r0 = '`.';
                        r0 = r5 + r0;
                        r0 = r1.bind(r2)(r0);
                        throw r0;
case 428:
                        r0 = global;
                        r1 = r0.Error;
                        r0 = '`.';
                        r4 = r4 + r0;
                        r0 = 'EventPluginRegistry: More than one plugin attempted to publish the same event name, `';
                        r0 = r0 + r4;
                        r0 = r1.bind(r2)(r0);
                        throw r0;
case 459:
                        r0 = global;
                        r1 = r0.Error;
                        r0 = '`.';
                        r3 = r3 + r0;
                        r0 = 'EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `';
                        r0 = r0 + r3;
                        r0 = r1.bind(r2)(r0);
                        throw r0;
                    }
case 490:
                    r0 = undefined;
                    return r0;
                }
            };
            r0 = function(a0, a1) { // Original name: publishRegistrationName, environment: r1
                _fun508: for(var _fun508_ip = 0; ; ) switch(_fun508_ip) {
case 0:
                    r1 = a0;
                    r2 = _closure1_slot44;
                    r2 = r2[r1];
                    if(r2) { _fun508_ip = 32; continue _fun508 }
case 17:
                    r2 = _closure1_slot44;
                    r0 = a1;
                    r2[r1] = r0;
                    r0 = undefined;
                    return r0;
case 32:
                    r0 = global;
                    r2 = r0.Error;
                    r0 = '`.';
                    r3 = r1 + r0;
                    r1 = undefined;
                    r0 = 'EventPluginRegistry: More than one plugin attempted to publish the same registration name, `';
                    r0 = r0 + r3;
                    r0 = r2.bind(r1)(r0);
                    throw r0;
                }
            };
            var _closure1_slot216 = r0;
            r0 = function(a0, a1) { // Original name: getListener, environment: r1
                _fun509: for(var _fun509_ip = 0; ; ) switch(_fun509_ip) {
case 0:
                    r5 = a1;
                    r0 = a0;
                    r2 = r0.stateNode;
                    r0 = null;
                    if(!(r0 !== r2)) { _fun509_ip = 100; continue _fun509 }
case 17:
                    r1 = _closure1_slot28;
                    r3 = undefined;
                    r1 = r1.bind(r3)(r2);
                    if(!(r0 !== r1)) { _fun509_ip = 98; continue _fun509 }
case 35:
                    r1 = r1[r5];
                    if(!r1) { _fun509_ip = 53; continue _fun509 }
case 42:
                    r4 = typeof r1;
                    r2 = 'function';
                    if(!(r2 === r4)) { _fun509_ip = 55; continue _fun509 }
case 53:
                    return r1;
case 55:
                    r1 = global;
                    r2 = r1.Error;
                    r1 = 'Expected `';
                    r5 = r1 + r5;
                    r1 = '` listener to be a function, instead got a value of `';
                    r1 = r5 + r1;
                    r4 = r1 + r4;
                    r1 = '` type.';
                    r1 = r4 + r1;
                    r1 = r2.bind(r3)(r1);
                    throw r1;
case 98:
                    return r0;
case 100:
                    return r0;
                }
            };
            var _closure1_slot217 = r0;
            r0 = function(a0, a1, a2) { // Original name: accumulateDirectionalDispatches, environment: r1
                _fun510: for(var _fun510_ip = 0; ; ) switch(_fun510_ip) {
case 0:
                    r4 = a0;
                    r2 = a2;
                    r5 = _closure1_slot217;
                    r0 = r2.dispatchConfig;
                    r3 = r0.phasedRegistrationNames;
                    r0 = a1;
                    r3 = r3[r0];
                    r0 = undefined;
                    r5 = r5.bind(r0)(r4, r3);
                    if(!r5) { _fun510_ip = 79; continue _fun510 }
case 41:
                    r3 = _closure1_slot206;
                    r1 = r2._dispatchListeners;
                    r1 = r3.bind(r0)(r1, r5);
                    r2['_dispatchListeners'] = r1;
                    r1 = r2._dispatchInstances;
                    r1 = r3.bind(r0)(r1, r4);
                    r2['_dispatchInstances'] = r1;
case 79:
                    return r0;
                }
            };
            var _closure1_slot218 = r0;
            r0 = function(a0, a1, a2, a3) { // Original name: traverseTwoPhase, environment: r1
                _fun511: for(var _fun511_ip = 0; ; ) switch(_fun511_ip) {
case 0:
                    r5 = a0;
                    r4 = a1;
                    r3 = a2;
                    r2 = new Array(0);
                    r0 = 5;
                    if(!r5) { _fun511_ip = 66; continue _fun511 }
case 19:
                    r6 = r2.push;
                    r6 = r6.bind(r2)(r5);
                    r8 = r5;
case 32:
                    r7 = r8.return;
                    if(!r7) { _fun511_ip = 52; continue _fun511 }
case 40:
                    r6 = r7.tag;
                    r8 = r7;
                    if(r0 !== r6) { _fun511_ip = 32; continue _fun511 }
case 52:
                    r6 = null;
                    if(!r7) { _fun511_ip = 60; continue _fun511 }
case 57:
                    r6 = r7;
case 60:
                    r5 = r6;
                    if(r5) { _fun511_ip = 19; continue _fun511 }
case 66:
                    r0 = r2.length;
                    r5 = parseFloat(r0);
                    r7 = r5 - 1;
                    r0 = undefined;
                    r6 = 'captured';
                    r1 = 0;
                    if(!(r1 < r5)) { _fun511_ip = 110; continue _fun511 }
case 89:
                    r5 = r2[r7];
                    r5 = r4.bind(r0)(r5, r6, r3);
                    r5 = parseFloat(r7);
                    r7 = r5 - 1;
                    if(r1 < r5) { _fun511_ip = 89; continue _fun511 }
case 110:
                    r5 = a3;
                    if(r5) { _fun511_ip = 159; continue _fun511 }
case 116:
                    r5 = r2.length;
                    r5 = r1 < r5;
                    r7 = 'bubbled';
                    r6 = 0;
                    if(!r5) { _fun511_ip = 174; continue _fun511 }
case 134:
                    r5 = r2[r6];
                    r5 = r4.bind(r0)(r5, r7, r3);
                    r6 = r6 + 1;
                    r5 = r2.length;
                    if(r6 < r5) { _fun511_ip = 134; continue _fun511 }
case 157:
                    _fun511_ip = 174; continue _fun511;
case 159:
                    r2 = r2[r1];
                    r1 = 'bubbled';
                    r1 = r4.bind(r0)(r2, r1, r3);
case 174:
                    return r0;
                }
            };
            var _closure1_slot219 = r0;
            r0 = function(a0) { // Original name: accumulateTwoPhaseDispatchesSingle, environment: r1
                _fun512: for(var _fun512_ip = 0; ; ) switch(_fun512_ip) {
case 0:
                    r5 = a0;
                    r0 = r5;
                    if(!r0) { _fun512_ip = 19; continue _fun512 }
case 9:
                    r1 = r5.dispatchConfig;
                    r0 = r1.phasedRegistrationNames;
case 19:
                    if(!r0) { _fun512_ip = 50; continue _fun512 }
case 22:
                    r4 = _closure1_slot219;
                    r9 = r5._targetInst;
                    r8 = _closure1_slot218;
                    r10 = undefined;
                    r6 = false;
                    r7 = r5;
                    r0 = r10[r4](r9, r8, r7, r6, r5);
case 50:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot220 = r0;
            r0 = function(a0) { // Original name: accumulateDirectDispatchesSingle, environment: r1
                _fun513: for(var _fun513_ip = 0; ; ) switch(_fun513_ip) {
case 0:
                    r1 = a0;
                    if(!r1) { _fun513_ip = 110; continue _fun513 }
case 6:
                    r0 = r1.dispatchConfig;
                    r0 = r0.registrationName;
                    if(!r0) { _fun513_ip = 110; continue _fun513 }
case 19:
                    r4 = r1._targetInst;
                    if(!r4) { _fun513_ip = 110; continue _fun513 }
case 28:
                    if(!r1) { _fun513_ip = 110; continue _fun513 }
case 31:
                    r0 = r1.dispatchConfig;
                    r0 = r0.registrationName;
                    if(!r0) { _fun513_ip = 110; continue _fun513 }
case 44:
                    r5 = _closure1_slot217;
                    r2 = r1.dispatchConfig;
                    r2 = r2.registrationName;
                    r3 = undefined;
                    r5 = r5.bind(r3)(r4, r2);
                    if(!r5) { _fun513_ip = 110; continue _fun513 }
case 72:
                    r2 = _closure1_slot206;
                    r0 = r1._dispatchListeners;
                    r0 = r2.bind(r3)(r0, r5);
                    r1['_dispatchListeners'] = r0;
                    r0 = r1._dispatchInstances;
                    r0 = r2.bind(r3)(r0, r4);
                    r1['_dispatchInstances'] = r0;
case 110:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot221 = r0;
            r0 = function(a0, a1) { // Original name: defaultDiffer, environment: r1
                _fun514: for(var _fun514_ip = 0; ; ) switch(_fun514_ip) {
case 0:
                    r5 = a1;
                    r3 = 'object';
                    r1 = typeof r5;
                    r0 = true;
                    if(!(r3 === r1)) { _fun514_ip = 69; continue _fun514 }
case 16:
                    r1 = null;
                    r0 = true;
                    if(!(r1 !== r5)) { _fun514_ip = 69; continue _fun514 }
case 24:
                    r4 = _closure1_slot0;
                    r3 = _closure1_slot1;
                    r2 = 2;
                    r3 = r3[r2];
                    r2 = undefined;
                    r4 = r4.bind(r2)(r3);
                    r3 = r4.deepDiffer;
                    r2 = _closure1_slot50;
                    r1 = a0;
                    r0 = r3.bind(r4)(r1, r5, r2);
case 69:
                    return r0;
                }
            };
            var _closure1_slot222 = r0;
            r0 = function(a0, a1, a2) { // Original name: restoreDeletedValuesInNestedArray, environment: r1
                _fun515: for(var _fun515_ip = 0; ; ) switch(_fun515_ip) {
case 0:
                    r7 = a0;
                    r6 = a1;
                    r5 = a2;
                    r1 = _closure1_slot2;
                    r0 = undefined;
                    r1 = r1.bind(r0)(r6);
                    if(r1) { _fun515_ip = 254; continue _fun515 }
case 29:
                    if(!r6) { _fun515_ip = 313; continue _fun515 }
case 35:
                    r2 = _closure1_slot49;
                    r1 = 0;
                    if(!(r1 < r2)) { _fun515_ip = 313; continue _fun515 }
case 48:
                    r16 = _closure1_slot48;
                    r12 = false;
                    r11 = 'function';
                    r10 = 'object';
                    r8 = 'undefined';
                    r2 = undefined;
                    r1 = undefined;
                    for(r13 in r16)
case 81:
                    {
case 93:
                        r21 = r13;
                        r18 = _closure1_slot48;
                        r18 = r18[r21];
                        if(!r18) { _fun515_ip = 81; continue _fun515 }
case 107:
                        r20 = r6[r21];
                        r2 = r20;
                        if(r0 === r20) { _fun515_ip = 81; continue _fun515 }
case 118:
                        r18 = r5[r21];
                        r2 = r20;
                        r1 = r18;
                        if(!r18) { _fun515_ip = 81; continue _fun515 }
case 131:
                        r19 = typeof r20;
                        if(!(r11 === r19)) { _fun515_ip = 140; continue _fun515 }
case 138:
                        r20 = true;
case 140:
                        r19 = typeof r20;
                        if(!(r8 === r19)) { _fun515_ip = 149; continue _fun515 }
case 147:
                        r20 = null;
case 149:
                        r19 = typeof r18;
                        if(!(r10 === r19)) { _fun515_ip = 217; continue _fun515 }
case 156:
                        r19 = r18.diff;
                        r19 = typeof r19;
                        if(!(r11 !== r19)) { _fun515_ip = 183; continue _fun515 }
case 168:
                        r19 = r18.process;
                        r22 = typeof r19;
                        r19 = r20;
                        if(!(r11 === r22)) { _fun515_ip = 224; continue _fun515 }
case 183:
                        r22 = r18.process;
                        r23 = typeof r22;
                        r22 = r20;
                        if(!(r11 === r23)) { _fun515_ip = 208; continue _fun515 }
case 198:
                        r23 = r18.process;
                        r22 = r23.bind(r18)(r20);
case 208:
                        r7[r21] = r22;
                        r19 = r22;
                        _fun515_ip = 224; continue _fun515;
case 217:
                        r7[r21] = r20;
                        r19 = r20;
case 224:
                        r20 = _closure1_slot48;
                        r20[r21] = r12;
                        r20 = _closure1_slot49;
                        r20 = r20 - 1;
                        _closure1_slot49 = r20;
                        r2 = r19;
                        r1 = r18;
                        _fun515_ip = 81; continue _fun515;
case 254:
                        r1 = r6.length;
                        r1 = parseFloat(r1);
                        r3 = r1 - 1;
                        if(!r1) { _fun515_ip = 313; continue _fun515 }
case 268:
                        r1 = _closure1_slot49;
                        r2 = 0;
                        if(!(r2 < r1)) { _fun515_ip = 313; continue _fun515 }
case 278:
                        r8 = _closure1_slot223;
                        r1 = r6[r3];
                        r1 = r8.bind(r0)(r7, r1, r5);
                        r1 = parseFloat(r3);
                        r8 = r1 - 1;
                        if(!r1) { _fun515_ip = 313; continue _fun515 }
case 302:
                        r1 = _closure1_slot49;
                        r3 = r8;
                        if(r2 < r1) { _fun515_ip = 278; continue _fun515 }
                    }
case 313:
                    return r0;
                }
            };
            var _closure1_slot223 = r0;
            r0 = function(a0, a1, a2, a3) { // Original name: diffNestedProperty, environment: r1
                _fun516: for(var _fun516_ip = 0; ; ) switch(_fun516_ip) {
case 0:
                    r0 = a0;
                    r9 = a1;
                    r7 = a2;
                    r6 = a3;
                    if(r0) { _fun516_ip = 21; continue _fun516 }
case 15:
                    if(!(r9 === r7)) { _fun516_ip = 21; continue _fun516 }
case 19:
                    return r0;
case 21:
                    if(!r9) { _fun516_ip = 27; continue _fun516 }
case 24:
                    if(r7) { _fun516_ip = 72; continue _fun516 }
case 27:
                    if(r7) { _fun516_ip = 54; continue _fun516 }
case 30:
                    r1 = r0;
                    if(!r9) { _fun516_ip = 52; continue _fun516 }
case 36:
                    r3 = _closure1_slot226;
                    r2 = undefined;
                    r1 = r3.bind(r2)(r0, r9, r6);
case 52:
                    _fun516_ip = 70; continue _fun516;
case 54:
                    r3 = _closure1_slot225;
                    r2 = undefined;
                    r1 = r3.bind(r2)(r0, r7, r6);
case 70:
                    return r1;
case 72:
                    r1 = _closure1_slot2;
                    r4 = undefined;
                    r1 = r1.bind(r4)(r9);
                    if(r1) { _fun516_ip = 125; continue _fun516 }
case 89:
                    r1 = _closure1_slot2;
                    r1 = r1.bind(r4)(r7);
                    if(r1) { _fun516_ip = 125; continue _fun516 }
case 101:
                    r1 = _closure1_slot227;
                    r17 = undefined;
                    r16 = r0;
                    r15 = r9;
                    r14 = r7;
                    r13 = r6;
                    r1 = r17[r1](r16, r15, r14, r13, r12);
                    return r1;
case 125:
                    r1 = _closure1_slot2;
                    r1 = r1.bind(r4)(r9);
                    if(!r1) { _fun516_ip = 149; continue _fun516 }
case 137:
                    r1 = _closure1_slot2;
                    r1 = r1.bind(r4)(r7);
                    if(r1) { _fun516_ip = 235; continue _fun516 }
case 149:
                    r1 = _closure1_slot2;
                    r1 = r1.bind(r4)(r9);
                    r3 = _closure1_slot227;
                    r8 = _closure1_slot0;
                    r10 = _closure1_slot1;
                    r2 = 2;
                    r2 = r10[r2];
                    r8 = r8.bind(r4)(r2);
                    r2 = r8.flattenStyle;
                    if(r1) { _fun516_ip = 213; continue _fun516 }
case 191:
                    r14 = r2.bind(r8)(r7);
                    r17 = undefined;
                    r16 = r0;
                    r15 = r9;
                    r13 = r6;
                    r1 = r17[r3](r16, r15, r14, r13, r12);
                    _fun516_ip = 233; continue _fun516;
case 213:
                    r15 = r2.bind(r8)(r9);
                    r17 = undefined;
                    r16 = r0;
                    r14 = r7;
                    r13 = r6;
                    r1 = r17[r3](r16, r15, r14, r13, r12);
case 233:
                    return r1;
case 235:
                    r2 = r9.length;
                    r1 = r7.length;
                    if(!(!(r2 < r1))) { _fun516_ip = 256; continue _fun516 }
case 249:
                    r8 = r7.length;
                    _fun516_ip = 261; continue _fun516;
case 256:
                    r8 = r9.length;
case 261:
                    r3 = 0;
                    r10 = r3 < r8;
                    r2 = r0;
                    r1 = 0;
                    r0 = r2;
                    if(!r10) { _fun516_ip = 315; continue _fun516 }
case 278:
                    r12 = _closure1_slot224;
                    r15 = r9[r1];
                    r14 = r7[r1];
                    r17 = undefined;
                    r16 = r2;
                    r13 = r6;
                    r2 = r17[r12](r16, r15, r14, r13, r12);
                    r1 = r1 + 1;
                    r0 = r2;
                    r3 = r1;
                    if(r3 < r8) { _fun516_ip = 278; continue _fun516 }
case 315:
                    r1 = r9.length;
                    r8 = r0;
                    r2 = r3;
                    r0 = r8;
                    r3 = r2;
                    if(!(r3 < r1)) { _fun516_ip = 369; continue _fun516 }
case 336:
                    r10 = _closure1_slot226;
                    r1 = r9[r2];
                    r8 = r10.bind(r4)(r8, r1, r6);
                    r2 = r2 + 1;
                    r1 = r9.length;
                    r0 = r8;
                    r3 = r2;
                    if(r3 < r1) { _fun516_ip = 336; continue _fun516 }
case 369:
                    r1 = r7.length;
                    r2 = r0;
                    r0 = r2;
                    if(!(r3 < r1)) { _fun516_ip = 414; continue _fun516 }
case 384:
                    r8 = _closure1_slot225;
                    r1 = r7[r3];
                    r2 = r8.bind(r4)(r2, r1, r6);
                    r3 = r3 + 1;
                    r1 = r7.length;
                    r0 = r2;
                    if(r3 < r1) { _fun516_ip = 384; continue _fun516 }
case 414:
                    return r0;
                }
            };
            var _closure1_slot224 = r0;
            r0 = function(a0, a1, a2) { // Original name: addNestedProperty, environment: r1
                _fun517: for(var _fun517_ip = 0; ; ) switch(_fun517_ip) {
case 0:
                    r0 = a0;
                    r7 = a1;
                    r6 = a2;
                    if(r7) { _fun517_ip = 14; continue _fun517 }
case 12:
                    return r0;
case 14:
                    r1 = _closure1_slot2;
                    r4 = undefined;
                    r1 = r1.bind(r4)(r7);
                    if(r1) { _fun517_ip = 56; continue _fun517 }
case 31:
                    r2 = _closure1_slot227;
                    r12 = _closure1_slot47;
                    r14 = undefined;
                    r13 = r0;
                    r11 = r7;
                    r10 = r6;
                    r1 = r14[r2](r13, r12, r11, r10, r9);
                    return r1;
case 56:
                    r1 = r7.length;
                    r3 = 0;
                    r1 = r3 < r1;
                    r2 = r0;
                    r0 = r2;
                    if(!r1) { _fun517_ip = 106; continue _fun517 }
case 76:
                    r8 = _closure1_slot225;
                    r1 = r7[r3];
                    r2 = r8.bind(r4)(r2, r1, r6);
                    r3 = r3 + 1;
                    r1 = r7.length;
                    r0 = r2;
                    if(r3 < r1) { _fun517_ip = 76; continue _fun517 }
case 106:
                    return r0;
                }
            };
            var _closure1_slot225 = r0;
            r0 = function(a0, a1, a2) { // Original name: clearNestedProperty, environment: r1
                _fun518: for(var _fun518_ip = 0; ; ) switch(_fun518_ip) {
case 0:
                    r0 = a0;
                    r7 = a1;
                    r6 = a2;
                    if(r7) { _fun518_ip = 14; continue _fun518 }
case 12:
                    return r0;
case 14:
                    r1 = _closure1_slot2;
                    r4 = undefined;
                    r1 = r1.bind(r4)(r7);
                    if(r1) { _fun518_ip = 56; continue _fun518 }
case 31:
                    r2 = _closure1_slot227;
                    r11 = _closure1_slot47;
                    r14 = undefined;
                    r13 = r0;
                    r12 = r7;
                    r10 = r6;
                    r1 = r14[r2](r13, r12, r11, r10, r9);
                    return r1;
case 56:
                    r1 = r7.length;
                    r3 = 0;
                    r1 = r3 < r1;
                    r2 = r0;
                    r0 = r2;
                    if(!r1) { _fun518_ip = 106; continue _fun518 }
case 76:
                    r8 = _closure1_slot226;
                    r1 = r7[r3];
                    r2 = r8.bind(r4)(r2, r1, r6);
                    r3 = r3 + 1;
                    r1 = r7.length;
                    r0 = r2;
                    if(r3 < r1) { _fun518_ip = 76; continue _fun518 }
case 106:
                    return r0;
                }
            };
            var _closure1_slot226 = r0;
            r0 = function(a0, a1, a2, a3) { // Original name: diffProperties, environment: r1
                _fun519: for(var _fun519_ip = 0; ; ) switch(_fun519_ip) {
case 0:
                    r4 = a0;
                    r17 = a1;
                    r16 = a2;
                    r15 = a3;
                    r22 = r16;
                    r14 = undefined;
                    r13 = 'function';
                    r12 = 'object';
                    r10 = null;
                    r18 = 0;
                    r6 = false;
                    r5 = 'undefined';
                    r9 = true;
                    r3 = undefined;
                    r2 = undefined;
                    r1 = undefined;
                    r0 = r4;
                    r8 = undefined;
                    r7 = undefined;
                    for(r19 in r22)
case 64:
                    {
                        r27 = r4;
                        r8 = r3;
                        r24 = r2;
                        r0 = r27;
                        r7 = r24;
case 91:
                        r28 = r19;
                        r26 = r15[r28];
                        r4 = r27;
                        r3 = r26;
                        r2 = r24;
                        if(!r26) { _fun519_ip = 64; continue _fun519 }
case 110:
                        r25 = r17[r28];
                        r24 = r16[r28];
                        r30 = typeof r24;
                        r29 = r25;
                        if(!(r13 === r30)) { _fun519_ip = 142; continue _fun519 }
case 128:
                        r30 = typeof r25;
                        if(!(r13 === r30)) { _fun519_ip = 137; continue _fun519 }
case 135:
                        r25 = true;
case 137:
                        r29 = r25;
                        r24 = true;
case 142:
                        r30 = typeof r24;
                        r25 = r29;
                        if(!(r5 === r30)) { _fun519_ip = 166; continue _fun519 }
case 152:
                        r30 = typeof r29;
                        if(!(r5 === r30)) { _fun519_ip = 161; continue _fun519 }
case 159:
                        r29 = null;
case 161:
                        r25 = r29;
                        r24 = null;
case 166:
                        r29 = _closure1_slot48;
                        if(!r29) { _fun519_ip = 181; continue _fun519 }
case 173:
                        r29 = _closure1_slot48;
                        r29[r28] = r6;
case 181:
                        if(!r27) { _fun519_ip = 195; continue _fun519 }
case 184:
                        r29 = r27[r28];
                        if(!(r14 === r29)) { _fun519_ip = 522; continue _fun519 }
case 195:
                        r4 = r27;
                        r3 = r26;
                        r2 = r25;
                        r1 = r24;
                        if(r25 === r24) { _fun519_ip = 64; continue _fun519 }
case 214:
                        r29 = typeof r26;
                        if(!(r12 === r29)) { _fun519_ip = 459; continue _fun519 }
case 224:
                        r29 = r26.diff;
                        r29 = typeof r29;
                        if(!(r13 !== r29)) { _fun519_ip = 342; continue _fun519 }
case 236:
                        r29 = r26.process;
                        r29 = typeof r29;
                        if(!(r13 !== r29)) { _fun519_ip = 342; continue _fun519 }
case 248:
                        _closure1_slot48 = r10;
                        _closure1_slot49 = r18;
                        r29 = _closure1_slot224;
                        r37 = undefined;
                        r36 = r27;
                        r35 = r25;
                        r34 = r24;
                        r33 = r26;
                        r29 = r37[r29](r36, r35, r34, r33, r32);
                        r30 = _closure1_slot49;
                        r30 = r18 < r30;
                        if(!r30) { _fun519_ip = 292; continue _fun519 }
case 289:
                        r30 = r29;
case 292:
                        r4 = r29;
                        r3 = r26;
                        r2 = r25;
                        r1 = r24;
                        if(!r30) { _fun519_ip = 64; continue _fun519 }
case 310:
                        r30 = _closure1_slot223;
                        r30 = r30.bind(r14)(r29, r24, r26);
                        _closure1_slot48 = r10;
                        r4 = r29;
                        r3 = r26;
                        r2 = r25;
                        r1 = r24;
                        _fun519_ip = 64; continue _fun519;
case 342:
                        if(!(r14 !== r25)) { _fun519_ip = 399; continue _fun519 }
case 346:
                        r29 = r26.diff;
                        r29 = typeof r29;
                        if(!(r13 !== r29)) { _fun519_ip = 370; continue _fun519 }
case 358:
                        r29 = _closure1_slot222;
                        r29 = r29.bind(r14)(r25, r24);
                        _fun519_ip = 381; continue _fun519;
case 370:
                        r30 = r26.diff;
                        r29 = r30.bind(r26)(r25, r24);
case 381:
                        r4 = r27;
                        r3 = r26;
                        r2 = r25;
                        r1 = r24;
                        if(!r29) { _fun519_ip = 64; continue _fun519 }
case 399:
                        r29 = r26.process;
                        r30 = typeof r29;
                        r29 = r24;
                        if(!(r13 === r30)) { _fun519_ip = 424; continue _fun519 }
case 414:
                        r30 = r26.process;
                        r29 = r30.bind(r26)(r24);
case 424:
                        r31 = r27;
                        r30 = r31;
                        if(r27) { _fun519_ip = 438; continue _fun519 }
case 433:
                        r31 = {};
                        r30 = r31;
case 438:
                        r31[r28] = r29;
                        r4 = r30;
                        r3 = r29;
                        r2 = r25;
                        r1 = r24;
                        _fun519_ip = 64; continue _fun519;
case 459:
                        r29 = _closure1_slot222;
                        r29 = r29.bind(r14)(r25, r24);
                        r4 = r27;
                        r3 = r26;
                        r2 = r25;
                        r1 = r24;
                        if(!r29) { _fun519_ip = 64; continue _fun519 }
case 487:
                        r30 = r27;
                        r29 = r30;
                        if(r27) { _fun519_ip = 501; continue _fun519 }
case 496:
                        r30 = {};
                        r29 = r30;
case 501:
                        r30[r28] = r24;
                        r4 = r29;
                        r3 = r26;
                        r2 = r25;
                        r1 = r24;
                        _fun519_ip = 64; continue _fun519;
case 522:
                        r29 = typeof r26;
                        if(!(r12 === r29)) { _fun519_ip = 614; continue _fun519 }
case 529:
                        r29 = r26.diff;
                        r29 = typeof r29;
                        if(!(r13 !== r29)) { _fun519_ip = 568; continue _fun519 }
case 541:
                        r29 = r26.process;
                        r29 = typeof r29;
                        r4 = r27;
                        r3 = r26;
                        r2 = r25;
                        r1 = r24;
                        if(r13 !== r29) { _fun519_ip = 64; continue _fun519 }
case 568:
                        r29 = r26.process;
                        r30 = typeof r29;
                        r29 = r24;
                        if(!(r13 === r30)) { _fun519_ip = 593; continue _fun519 }
case 583:
                        r30 = r26.process;
                        r29 = r30.bind(r26)(r24);
case 593:
                        r27[r28] = r29;
                        r3 = r29;
                        r4 = r27;
                        r2 = r25;
                        r1 = r24;
                        _fun519_ip = 64; continue _fun519;
case 614:
                        r27[r28] = r24;
                        r4 = r27;
                        r3 = r26;
                        r2 = r25;
                        r1 = r24;
                        _fun519_ip = 64; continue _fun519;
                    }
case 635:
                    r5 = r17;
                    r1 = r0;
                    r0 = r1;
                    for(r2 in r5)
case 655:
                    {
                        r27 = r1;
                        r18 = r7;
                        r0 = r27;
case 676:
                        r26 = r2;
                        r19 = r16[r26];
                        r1 = r27;
                        r7 = r18;
                        if(r14 !== r19) { _fun519_ip = 655; continue _fun519 }
case 693:
                        r19 = r15[r26];
                        r21 = !r19;
                        if(r21) { _fun519_ip = 720; continue _fun519 }
case 703:
                        r20 = r27;
                        if(!r27) { _fun519_ip = 717; continue _fun519 }
case 709:
                        r22 = r27[r26];
                        r20 = r14 !== r22;
case 717:
                        r21 = r20;
case 720:
                        r20 = r27;
                        if(r21) { _fun519_ip = 860; continue _fun519 }
case 729:
                        r21 = r17[r26];
                        r22 = r27;
                        if(!(r14 !== r21)) { _fun519_ip = 854; continue _fun519 }
case 740:
                        r23 = typeof r19;
                        if(!(r12 === r23)) { _fun519_ip = 784; continue _fun519 }
case 747:
                        r23 = r19.diff;
                        r23 = typeof r23;
                        if(!(r13 !== r23)) { _fun519_ip = 784; continue _fun519 }
case 759:
                        r23 = r19.process;
                        r23 = typeof r23;
                        if(!(r13 !== r23)) { _fun519_ip = 784; continue _fun519 }
case 771:
                        r23 = _closure1_slot226;
                        r23 = r23.bind(r14)(r27, r21, r19);
                        _fun519_ip = 851; continue _fun519;
case 784:
                        r25 = r27;
                        r24 = r25;
                        if(r27) { _fun519_ip = 798; continue _fun519 }
case 793:
                        r25 = {};
                        r24 = r25;
case 798:
                        r25[r26] = r10;
                        r25 = _closure1_slot48;
                        if(r25) { _fun519_ip = 815; continue _fun519 }
case 809:
                        r25 = {};
                        _closure1_slot48 = r25;
case 815:
                        r25 = _closure1_slot48;
                        r25 = r25[r26];
                        r23 = r24;
                        if(r25) { _fun519_ip = 851; continue _fun519 }
case 829:
                        r25 = _closure1_slot48;
                        r25[r26] = r9;
                        r25 = _closure1_slot49;
                        r25 = r25 + 1;
                        _closure1_slot49 = r25;
                        r23 = r24;
case 851:
                        r22 = r23;
case 854:
                        r20 = r22;
                        r18 = r21;
case 860:
                        r1 = r20;
                        r7 = r18;
                        r8 = r19;
                        _fun519_ip = 655; continue _fun519;
                    }
case 874:
                    return r0;
                }
            };
            var _closure1_slot227 = r0;
            r0 = function(a0, a1, a2) { // Original name: fastAddProperties, environment: r1
                _fun520: for(var _fun520_ip = 0; ; ) switch(_fun520_ip) {
case 0:
                    r0 = a0;
                    r7 = a1;
                    r6 = a2;
                    r1 = _closure1_slot2;
                    r4 = undefined;
                    r1 = r1.bind(r4)(r7);
                    if(r1) { _fun520_ip = 234; continue _fun520 }
case 29:
                    r15 = r7;
                    r11 = null;
                    r10 = 'function';
                    r9 = 'object';
                    r3 = r0;
                    r2 = undefined;
                    r1 = r3;
                    for(r12 in r15)
case 61:
                    {
                        r20 = r3;
                        r1 = r20;
case 79:
                        r19 = r12;
                        r22 = r7[r19];
                        r21 = r6[r19];
                        r3 = r20;
                        if(r11 == r21) { _fun520_ip = 61; continue _fun520 }
case 97:
                        if(!(r4 !== r22)) { _fun520_ip = 163; continue _fun520 }
case 101:
                        r18 = typeof r22;
                        r17 = true;
                        if(!(r10 !== r18)) { _fun520_ip = 186; continue _fun520 }
case 110:
                        r18 = typeof r21;
                        r17 = r22;
                        if(!(r9 === r18)) { _fun520_ip = 186; continue _fun520 }
case 120:
                        r18 = r21.process;
                        r18 = typeof r18;
                        if(!(r10 !== r18)) { _fun520_ip = 151; continue _fun520 }
case 132:
                        r18 = r21.diff;
                        r18 = typeof r18;
                        r17 = undefined;
                        if(!(r10 === r18)) { _fun520_ip = 186; continue _fun520 }
case 146:
                        r17 = r22;
                        _fun520_ip = 186; continue _fun520;
case 151:
                        r18 = r21.process;
                        r17 = r18.bind(r21)(r22);
                        _fun520_ip = 186; continue _fun520;
case 163:
                        r3 = r20;
                        r2 = undefined;
                        if(!r20) { _fun520_ip = 61; continue _fun520 }
case 171:
                        r18 = r20[r19];
                        r3 = r20;
                        r2 = undefined;
                        r17 = null;
                        if(r4 === r18) { _fun520_ip = 61; continue _fun520 }
case 186:
                        if(!(r4 === r17)) { _fun520_ip = 209; continue _fun520 }
case 190:
                        r18 = _closure1_slot228;
                        r3 = r18.bind(r4)(r20, r22, r21);
                        r2 = r17;
                        _fun520_ip = 61; continue _fun520;
case 209:
                        r18 = r20;
                        if(r20) { _fun520_ip = 217; continue _fun520 }
case 215:
                        r18 = {};
case 217:
                        r18[r19] = r17;
                        r3 = r18;
                        r2 = r17;
                        _fun520_ip = 61; continue _fun520;
                    }
case 232:
                    return r1;
case 234:
                    r1 = r7.length;
                    r3 = 0;
                    r1 = r3 < r1;
                    r2 = r0;
                    r0 = r2;
                    if(!r1) { _fun520_ip = 284; continue _fun520 }
case 254:
                    r8 = _closure1_slot228;
                    r1 = r7[r3];
                    r2 = r8.bind(r4)(r2, r1, r6);
                    r3 = r3 + 1;
                    r1 = r7.length;
                    r0 = r2;
                    if(r3 < r1) { _fun520_ip = 254; continue _fun520 }
case 284:
                    return r0;
                }
            };
            var _closure1_slot228 = r0;
            r0 = function(a0, a1) { // Original name: batchedUpdatesImpl, environment: r1
                r2 = a0;
                r1 = undefined;
                r0 = a1;
                r0 = r2.bind(r1)(r0);
                return r0;
            };
            var _closure1_slot229 = r0;
            r0 = function(a0, a1) { // Original name: batchedUpdates$1, environment: r1
                _fun522: for(var _fun522_ip = 0; ; ) switch(_fun522_ip) {
case 0:
                    r1 = a0;
                    r2 = undefined;
                    r0 = undefined;
                    r3 = _closure1_slot51;
                    if(r3) { _fun522_ip = 57; continue _fun522 }
case 17:
                    r3 = true;
                    _closure1_slot51 = r3;
case 23: // try_start_0
                    r6 = _closure1_slot229;
                    r4 = r1;
                    r3 = r0;
                    r3 = r6.bind(r2)(r4, r3);
case 39: // try_end0
                    r4 = false;
                    _closure1_slot51 = r4;
                    return r3;
case 47: // catch_target0
                    CatchBlockStart(arg_register=3);
                    r4 = false;
                    _closure1_slot51 = r4;
                    throw r3;
case 57:
                    r0 = r1.bind(r2)(r0);
                    return r0;
                }
            };
            var _closure1_slot230 = r0;
            r0 = function(a0) { // Original name: executeDispatchesAndReleaseTopLevel, environment: r1
                _fun523: for(var _fun523_ip = 0; ; ) switch(_fun523_ip) {
case 0:
                    r2 = a0;
                    if(!r2) { _fun523_ip = 168; continue _fun523 }
case 9:
                    r6 = r2._dispatchListeners;
                    r5 = r2._dispatchInstances;
                    r0 = _closure1_slot2;
                    r3 = undefined;
                    r0 = r0.bind(r3)(r6);
                    if(r0) { _fun523_ip = 52; continue _fun523 }
case 36:
                    if(!r6) { _fun523_ip = 125; continue _fun523 }
case 39:
                    r0 = _closure1_slot190;
                    r0 = r0.bind(r3)(r2, r6, r5);
                    _fun523_ip = 125; continue _fun523;
case 52:
                    r0 = r6.length;
                    r1 = 0;
                    if(!(r1 < r0)) { _fun523_ip = 125; continue _fun523 }
case 63:
                    r0 = r2.isPropagationStopped;
                    r0 = r0.bind(r2)();
                    r1 = 0;
                    if(r0) { _fun523_ip = 125; continue _fun523 }
case 78:
                    r8 = _closure1_slot190;
                    r7 = r6[r1];
                    r0 = r5[r1];
                    r0 = r8.bind(r3)(r2, r7, r0);
                    r7 = r1 + 1;
                    r0 = r6.length;
                    if(!(r7 < r0)) { _fun523_ip = 125; continue _fun523 }
case 109:
                    r0 = r2.isPropagationStopped;
                    r0 = r0.bind(r2)();
                    r1 = r7;
                    if(!r0) { _fun523_ip = 78; continue _fun523 }
case 125:
                    r0 = null;
                    r2['_dispatchListeners'] = r0;
                    r2['_dispatchInstances'] = r0;
                    r0 = r2.isPersistent;
                    r0 = r0.bind(r2)();
                    if(r0) { _fun523_ip = 168; continue _fun523 }
case 152:
                    r1 = r2.constructor;
                    r0 = r1.release;
                    r0 = r0.bind(r1)(r2);
case 168:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot231 = r0;
            r0 = function(a0) { // Original name: onCommitRoot, environment: r1
                _fun526: for(var _fun526_ip = 0; ; ) switch(_fun526_ip) {
case 0:
                    r0 = a0;
                    r2 = _closure1_slot54;
                    if(!r2) { _fun526_ip = 88; continue _fun526 }
case 13:
                    r2 = _closure1_slot54;
                    r2 = r2.onCommitFiberRoot;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun526_ip = 88; continue _fun526 }
case 34: // try_start_0
                    r5 = _closure1_slot54;
                    r4 = r5.onCommitFiberRoot;
                    r10 = _closure1_slot53;
                    r2 = r0;
                    r0 = r2.current;
                    r0 = r0.flags;
                    r6 = 128;
                    r0 = r0 & r6;
                    r8 = undefined;
                    r7 = r6 === r0;
                    r11 = r5;
                    r9 = r2;
                    r0 = r11[r4](r10, r9, r8, r7, r6);
case 84: // try_end0
                    _fun526_ip = 88; continue _fun526;
case 86: // catch_target0
                    CatchBlockStart(arg_register=0);
case 88:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot232 = r0;
            r0 = function(a0) { // Original name: setIsStrictModeForDevtools, environment: r1
                _fun527: for(var _fun527_ip = 0; ; ) switch(_fun527_ip) {
case 0:
                    r1 = a0;
                    r4 = _closure1_slot0;
                    r0 = _closure1_slot1;
                    r6 = 3;
                    r3 = r0[r6];
                    r0 = undefined;
                    r3 = r4.bind(r0)(r3);
                    r3 = r3.log;
                    r4 = 'function';
                    r3 = typeof r3;
                    if(!(r4 === r3)) { _fun527_ip = 75; continue _fun527 }
case 44:
                    r5 = _closure1_slot0;
                    r3 = _closure1_slot1;
                    r3 = r3[r6];
                    r6 = r5.bind(r0)(r3);
                    r5 = r6.unstable_setDisableYieldValue;
                    r3 = r1;
                    r3 = r5.bind(r6)(r3);
case 75:
                    r3 = _closure1_slot54;
                    if(!r3) { _fun527_ip = 123; continue _fun527 }
case 82:
                    r3 = _closure1_slot54;
                    r3 = r3.setStrictMode;
                    r3 = typeof r3;
                    if(!(r4 === r3)) { _fun527_ip = 123; continue _fun527 }
case 99: // try_start_0
                    r4 = _closure1_slot54;
                    r3 = r4.setStrictMode;
                    r2 = _closure1_slot53;
                    r1 = r3.bind(r4)(r2, r1);
case 119: // try_end0
                    _fun527_ip = 123; continue _fun527;
case 121: // catch_target0
                    CatchBlockStart(arg_register=1);
case 123:
                    return r0;
                }
            };
            var _closure1_slot233 = r0;
            r44 = function(a0) { // Original name: clz32Fallback, environment: r1
                _fun528: for(var _fun528_ip = 0; ; ) switch(_fun528_ip) {
case 0:
                    r0 = a0;
                    r1 = 0;
                    r4 = r0 >>> r1;
                    r0 = 32;
                    if(!(r1 !== r4)) { _fun528_ip = 51; continue _fun528 }
case 16:
                    r3 = _closure1_slot56;
                    r2 = undefined;
                    r2 = r3.bind(r2)(r4);
                    r1 = _closure1_slot57;
                    r1 = r2 / r1;
                    r2 = r1 | 0;
                    r1 = 31;
                    r1 = r1 - r2;
                    r0 = r1 | 0;
case 51:
                    return r0;
                }
            };
            r0 = function(a0) { // Original name: getHighestPriorityLanes, environment: r1
                _fun529: for(var _fun529_ip = 0; ; ) switch(_fun529_ip) {
case 0:
                    r9 = a0;
                    r0 = 42;
                    r0 = r9 & r0;
                    r13 = 0;
                    if(!(r13 === r0)) { _fun529_ip = 425; continue _fun529 }
case 19:
                    r1 = -r9;
                    r15 = r9 & r1;
                    r1 = 1;
                    if(!(r1 !== r15)) { _fun529_ip = 423; continue _fun529 }
case 36:
                    r2 = 2;
                    if(!(r2 !== r15)) { _fun529_ip = 421; continue _fun529 }
case 46:
                    r3 = 4;
                    if(!(r3 !== r15)) { _fun529_ip = 419; continue _fun529 }
case 56:
                    r4 = 8;
                    if(!(r4 !== r15)) { _fun529_ip = 417; continue _fun529 }
case 66:
                    r5 = 16;
                    if(!(r5 !== r15)) { _fun529_ip = 415; continue _fun529 }
case 76:
                    r6 = 32;
                    if(!(r6 !== r15)) { _fun529_ip = 413; continue _fun529 }
case 86:
                    r7 = 64;
                    if(!(r7 !== r15)) { _fun529_ip = 411; continue _fun529 }
case 96:
                    r8 = 128;
                    if(!(r8 !== r15)) { _fun529_ip = 399; continue _fun529 }
case 106:
                    r8 = 256;
                    if(!(r8 !== r15)) { _fun529_ip = 399; continue _fun529 }
case 119:
                    r8 = 512;
                    if(!(r8 !== r15)) { _fun529_ip = 399; continue _fun529 }
case 132:
                    r8 = 1024;
                    if(!(r8 !== r15)) { _fun529_ip = 399; continue _fun529 }
case 145:
                    r8 = 2048;
                    if(!(r8 !== r15)) { _fun529_ip = 399; continue _fun529 }
case 158:
                    r8 = 4096;
                    if(!(r8 !== r15)) { _fun529_ip = 399; continue _fun529 }
case 171:
                    r8 = 8192;
                    if(!(r8 !== r15)) { _fun529_ip = 399; continue _fun529 }
case 184:
                    r8 = 16384;
                    if(!(r8 !== r15)) { _fun529_ip = 399; continue _fun529 }
case 197:
                    r8 = 32768;
                    if(!(r8 !== r15)) { _fun529_ip = 399; continue _fun529 }
case 210:
                    r8 = 65536;
                    if(!(r8 !== r15)) { _fun529_ip = 399; continue _fun529 }
case 223:
                    r8 = 131072;
                    if(!(r8 !== r15)) { _fun529_ip = 399; continue _fun529 }
case 236:
                    r8 = 262144;
                    if(!(r8 !== r15)) { _fun529_ip = 399; continue _fun529 }
case 249:
                    r8 = 524288;
                    if(!(r8 !== r15)) { _fun529_ip = 399; continue _fun529 }
case 262:
                    r8 = 1048576;
                    if(!(r8 !== r15)) { _fun529_ip = 399; continue _fun529 }
case 275:
                    r8 = 2097152;
                    if(!(r8 !== r15)) { _fun529_ip = 399; continue _fun529 }
case 285:
                    r8 = 4194304;
                    if(!(r8 !== r15)) { _fun529_ip = 387; continue _fun529 }
case 295:
                    r8 = 8388608;
                    if(!(r8 !== r15)) { _fun529_ip = 387; continue _fun529 }
case 305:
                    r8 = 16777216;
                    if(!(r8 !== r15)) { _fun529_ip = 387; continue _fun529 }
case 315:
                    r8 = 33554432;
                    if(!(r8 !== r15)) { _fun529_ip = 387; continue _fun529 }
case 325:
                    r8 = 67108864;
                    if(!(r8 !== r15)) { _fun529_ip = 385; continue _fun529 }
case 335:
                    r10 = 134217728;
                    if(!(r10 !== r15)) { _fun529_ip = 383; continue _fun529 }
case 345:
                    r11 = 268435456;
                    if(!(r11 !== r15)) { _fun529_ip = 381; continue _fun529 }
case 355:
                    r12 = 536870912;
                    if(!(r12 !== r15)) { _fun529_ip = 379; continue _fun529 }
case 365:
                    r14 = 1073741824;
                    if(!(r14 !== r15)) { _fun529_ip = 377; continue _fun529 }
case 375:
                    return r9;
case 377:
                    return r13;
case 379:
                    return r12;
case 381:
                    return r11;
case 383:
                    return r10;
case 385:
                    return r8;
case 387:
                    r8 = 62914560;
                    r8 = r9 & r8;
                    return r8;
case 399:
                    r8 = 4194176;
                    r8 = r9 & r8;
                    return r8;
case 411:
                    return r7;
case 413:
                    return r6;
case 415:
                    return r5;
case 417:
                    return r4;
case 419:
                    return r3;
case 421:
                    return r2;
case 423:
                    return r1;
case 425:
                    return r0;
                }
            };
            var _closure1_slot234 = r0;
            r0 = function(a0, a1) { // Original name: getNextLanes, environment: r1
                _fun530: for(var _fun530_ip = 0; ; ) switch(_fun530_ip) {
case 0:
                    r2 = a0;
                    r3 = a1;
                    r9 = r2.pendingLanes;
                    r0 = 0;
                    if(!(r0 !== r9)) { _fun530_ip = 318; continue _fun530 }
case 20:
                    r4 = r2.suspendedLanes;
                    r7 = r2.pingedLanes;
                    r1 = r2.warmLanes;
                    r2 = r2.finishedLanes;
                    r8 = r0 !== r2;
                    r2 = 134217727;
                    r2 = r9 & r2;
                    if(!(r0 === r2)) { _fun530_ip = 148; continue _fun530 }
case 61:
                    r5 = ~r4;
                    r10 = r9 & r5;
                    if(!(r0 === r10)) { _fun530_ip = 132; continue _fun530 }
case 72:
                    if(!(r0 === r7)) { _fun530_ip = 116; continue _fun530 }
case 76:
                    r5 = 0;
                    if(r8) { _fun530_ip = 234; continue _fun530 }
case 84:
                    r6 = ~r1;
                    r12 = r9 & r6;
                    r6 = 0;
                    if(!(r0 !== r12)) { _fun530_ip = 111; continue _fun530 }
case 97:
                    r11 = _closure1_slot234;
                    r9 = undefined;
                    r6 = r11.bind(r9)(r12);
case 111:
                    r5 = r6;
                    _fun530_ip = 234; continue _fun530;
case 116:
                    r9 = _closure1_slot234;
                    r6 = undefined;
                    r5 = r9.bind(r6)(r7);
                    _fun530_ip = 234; continue _fun530;
case 132:
                    r9 = _closure1_slot234;
                    r6 = undefined;
                    r5 = r9.bind(r6)(r10);
                    _fun530_ip = 234; continue _fun530;
case 148:
                    r6 = ~r4;
                    r6 = r2 & r6;
                    if(!(r0 === r6)) { _fun530_ip = 220; continue _fun530 }
case 159:
                    r7 = r7 & r2;
                    if(!(r0 === r7)) { _fun530_ip = 204; continue _fun530 }
case 167:
                    r5 = 0;
                    if(r8) { _fun530_ip = 234; continue _fun530 }
case 172:
                    r1 = ~r1;
                    r9 = r2 & r1;
                    r1 = 0;
                    if(!(r0 !== r9)) { _fun530_ip = 199; continue _fun530 }
case 185:
                    r8 = _closure1_slot234;
                    r2 = undefined;
                    r1 = r8.bind(r2)(r9);
case 199:
                    r5 = r1;
                    _fun530_ip = 234; continue _fun530;
case 204:
                    r2 = _closure1_slot234;
                    r1 = undefined;
                    r5 = r2.bind(r1)(r7);
                    _fun530_ip = 234; continue _fun530;
case 220:
                    r2 = _closure1_slot234;
                    r1 = undefined;
                    r5 = r2.bind(r1)(r6);
case 234:
                    r1 = 0;
                    if(!(r1 !== r5)) { _fun530_ip = 316; continue _fun530 }
case 240:
                    r2 = r5;
                    if(!(r0 !== r3)) { _fun530_ip = 313; continue _fun530 }
case 247:
                    r2 = r5;
                    if(!(r3 !== r5)) { _fun530_ip = 313; continue _fun530 }
case 254:
                    r4 = r3 & r4;
                    r2 = r5;
                    if(!(r0 === r4)) { _fun530_ip = 313; continue _fun530 }
case 265:
                    r4 = -r5;
                    r7 = r5 & r4;
                    r4 = -r3;
                    r6 = r3 & r4;
                    if(!(!(r7 >= r6))) { _fun530_ip = 310; continue _fun530 }
case 283:
                    r4 = 32;
                    r2 = r5;
                    if(!(r4 === r7)) { _fun530_ip = 313; continue _fun530 }
case 293:
                    r4 = 4194176;
                    r4 = r6 & r4;
                    r2 = r5;
                    if(!(r0 !== r4)) { _fun530_ip = 313; continue _fun530 }
case 310:
                    r2 = r3;
case 313:
                    r1 = r2;
case 316:
                    return r1;
case 318:
                    return r0;
                }
            };
            var _closure1_slot235 = r0;
            r0 = function(a0, a1) { // Original name: checkIfRootIsPrerendering, environment: r1
                r0 = a0;
                r1 = r0.pendingLanes;
                r2 = r0.suspendedLanes;
                r0 = r0.pingedLanes;
                r0 = ~r0;
                r0 = r2 & r0;
                r0 = ~r0;
                r1 = r1 & r0;
                r0 = a1;
                r1 = r1 & r0;
                r0 = 0;
                r0 = r0 === r1;
                return r0;
            };
            var _closure1_slot236 = r0;
            r0 = function(a0, a1) { // Original name: computeExpirationTime, environment: r1
                _fun532: for(var _fun532_ip = 0; ; ) switch(_fun532_ip) {
case 0:
                    r2 = a0;
                    r1 = a1;
                    r0 = 1;
                    if(!(r0 !== r2)) { _fun532_ip = 391; continue _fun532 }
case 16:
                    r0 = 2;
                    if(!(r0 !== r2)) { _fun532_ip = 391; continue _fun532 }
case 26:
                    r0 = 4;
                    if(!(r0 !== r2)) { _fun532_ip = 391; continue _fun532 }
case 36:
                    r0 = 8;
                    if(!(r0 !== r2)) { _fun532_ip = 391; continue _fun532 }
case 46:
                    r0 = 16;
                    if(!(r0 !== r2)) { _fun532_ip = 379; continue _fun532 }
case 56:
                    r0 = 32;
                    if(!(r0 !== r2)) { _fun532_ip = 379; continue _fun532 }
case 66:
                    r0 = 64;
                    if(!(r0 !== r2)) { _fun532_ip = 379; continue _fun532 }
case 76:
                    r0 = 128;
                    if(!(r0 !== r2)) { _fun532_ip = 379; continue _fun532 }
case 86:
                    r0 = 256;
                    if(!(r0 !== r2)) { _fun532_ip = 379; continue _fun532 }
case 99:
                    r0 = 512;
                    if(!(r0 !== r2)) { _fun532_ip = 379; continue _fun532 }
case 112:
                    r0 = 1024;
                    if(!(r0 !== r2)) { _fun532_ip = 379; continue _fun532 }
case 125:
                    r0 = 2048;
                    if(!(r0 !== r2)) { _fun532_ip = 379; continue _fun532 }
case 138:
                    r0 = 4096;
                    if(!(r0 !== r2)) { _fun532_ip = 379; continue _fun532 }
case 151:
                    r0 = 8192;
                    if(!(r0 !== r2)) { _fun532_ip = 379; continue _fun532 }
case 164:
                    r0 = 16384;
                    if(!(r0 !== r2)) { _fun532_ip = 379; continue _fun532 }
case 177:
                    r0 = 32768;
                    if(!(r0 !== r2)) { _fun532_ip = 379; continue _fun532 }
case 190:
                    r0 = 65536;
                    if(!(r0 !== r2)) { _fun532_ip = 379; continue _fun532 }
case 203:
                    r0 = 131072;
                    if(!(r0 !== r2)) { _fun532_ip = 379; continue _fun532 }
case 216:
                    r0 = 262144;
                    if(!(r0 !== r2)) { _fun532_ip = 379; continue _fun532 }
case 229:
                    r0 = 524288;
                    if(!(r0 !== r2)) { _fun532_ip = 379; continue _fun532 }
case 242:
                    r0 = 1048576;
                    if(!(r0 !== r2)) { _fun532_ip = 379; continue _fun532 }
case 255:
                    r0 = 2097152;
                    if(!(r0 !== r2)) { _fun532_ip = 379; continue _fun532 }
case 265:
                    r0 = 4194304;
                    if(!(r0 !== r2)) { _fun532_ip = 371; continue _fun532 }
case 275:
                    r0 = 8388608;
                    if(!(r0 !== r2)) { _fun532_ip = 371; continue _fun532 }
case 285:
                    r0 = 16777216;
                    if(!(r0 !== r2)) { _fun532_ip = 371; continue _fun532 }
case 295:
                    r0 = 33554432;
                    if(!(r0 !== r2)) { _fun532_ip = 371; continue _fun532 }
case 305:
                    r0 = 67108864;
                    if(!(r0 !== r2)) { _fun532_ip = 363; continue _fun532 }
case 315:
                    r0 = 134217728;
                    if(!(r0 !== r2)) { _fun532_ip = 363; continue _fun532 }
case 325:
                    r0 = 268435456;
                    if(!(r0 !== r2)) { _fun532_ip = 363; continue _fun532 }
case 335:
                    r0 = 536870912;
                    if(!(r0 !== r2)) { _fun532_ip = 363; continue _fun532 }
case 345:
                    r0 = 1073741824;
                    if(!(r0 !== r2)) { _fun532_ip = 363; continue _fun532 }
case 355:
                    r0 = -1;
                    return r0;
case 363:
                    r0 = -1;
                    return r0;
case 371:
                    r0 = -1;
                    return r0;
case 379:
                    r0 = 5000;
                    r0 = r1 + r0;
                    return r0;
case 391:
                    r0 = 250;
                    r0 = r1 + r0;
                    return r0;
                }
            };
            var _closure1_slot237 = r0;
            r0 = function() { // Original name: claimNextTransitionLane, environment: r1
                _fun533: for(var _fun533_ip = 0; ; ) switch(_fun533_ip) {
case 0:
                    r0 = _closure1_slot58;
                    r1 = 1;
                    r4 = r0 << r1;
                    _closure1_slot58 = r4;
                    r3 = 0;
                    r1 = 4194176;
                    r1 = r4 & r1;
                    if(!(r3 === r1)) { _fun533_ip = 41; continue _fun533 }
case 34:
                    r1 = 128;
                    _closure1_slot58 = r1;
case 41:
                    return r0;
                }
            };
            var _closure1_slot238 = r0;
            r0 = function() { // Original name: claimNextRetryLane, environment: r1
                _fun534: for(var _fun534_ip = 0; ; ) switch(_fun534_ip) {
case 0:
                    r0 = _closure1_slot59;
                    r1 = 1;
                    r4 = r0 << r1;
                    _closure1_slot59 = r4;
                    r3 = 0;
                    r1 = 62914560;
                    r1 = r4 & r1;
                    if(!(r3 === r1)) { _fun534_ip = 44; continue _fun534 }
case 34:
                    r1 = 4194304;
                    _closure1_slot59 = r1;
case 44:
                    return r0;
                }
            };
            var _closure1_slot239 = r0;
            r0 = function(a0) { // Original name: createLaneMap, environment: r1
                _fun535: for(var _fun535_ip = 0; ; ) switch(_fun535_ip) {
case 0:
                    r3 = a0;
                    r0 = new Array(0);
                    r1 = 31;
                    r2 = 0;
case 12:
                    r4 = r0.push;
                    r4 = r4.bind(r0)(r3);
                    r2 = r2 + 1;
                    if(r1 > r2) { _fun535_ip = 12; continue _fun535 }
case 29:
                    return r0;
                }
            };
            var _closure1_slot240 = r0;
            r0 = function(a0, a1) { // Original name: markRootUpdated$1, environment: r1
                _fun536: for(var _fun536_ip = 0; ; ) switch(_fun536_ip) {
case 0:
                    r1 = a0;
                    r2 = a1;
                    r0 = r1.pendingLanes;
                    r0 = r0 | r2;
                    r1['pendingLanes'] = r0;
                    r0 = 268435456;
                    if(!(r0 !== r2)) { _fun536_ip = 51; continue _fun536 }
case 31:
                    r0 = 0;
                    r1['suspendedLanes'] = r0;
                    r1['pingedLanes'] = r0;
                    r1['warmLanes'] = r0;
case 51:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot241 = r0;
            r0 = function(a0, a1, a2, a3, a4, a5) { // Original name: markRootFinished, environment: r1
                _fun537: for(var _fun537_ip = 0; ; ) switch(_fun537_ip) {
case 0:
                    r2 = a0;
                    r0 = a2;
                    r3 = a3;
                    r4 = a5;
                    r5 = r2.pendingLanes;
                    r2['pendingLanes'] = r0;
                    r6 = 0;
                    r2['suspendedLanes'] = r6;
                    r2['pingedLanes'] = r6;
                    r2['warmLanes'] = r6;
                    r1 = r2.expiredLanes;
                    r1 = r1 & r0;
                    r2['expiredLanes'] = r1;
                    r1 = r2.entangledLanes;
                    r1 = r1 & r0;
                    r2['entangledLanes'] = r1;
                    r1 = r2.errorRecoveryDisabledLanes;
                    r1 = r1 & r0;
                    r2['errorRecoveryDisabledLanes'] = r1;
                    r2['shellSuspendCounter'] = r6;
                    r16 = r2.entanglements;
                    r15 = r2.expirationTimes;
                    r14 = r2.hiddenUpdates;
                    r0 = ~r0;
                    r13 = r5 & r0;
                    r0 = undefined;
                    r12 = 1;
                    r11 = null;
                    r10 = -536870913;
                    r9 = 31;
                    r8 = -1;
                    r7 = undefined;
                    if(!(r6 < r13)) { _fun537_ip = 271; continue _fun537 }
case 153:
                    r17 = _closure1_slot55;
                    r17 = r17.bind(r0)(r13);
                    r17 = r9 - r17;
                    r16[r17] = r6;
                    r15[r17] = r8;
                    r22 = r14[r17];
                    r19 = r13;
                    r23 = r7;
                    r18 = r23;
                    if(!(r11 !== r22)) { _fun537_ip = 253; continue _fun537 }
case 191:
                    r14[r17] = r11;
                    r20 = r22.length;
                    r20 = r6 < r20;
                    r21 = 0;
                    r18 = r23;
                    if(!r20) { _fun537_ip = 253; continue _fun537 }
case 212:
                    r24 = r22[r21];
                    r20 = r21;
                    if(!(r11 !== r24)) { _fun537_ip = 238; continue _fun537 }
case 223:
                    r23 = r24.lane;
                    r23 = r23 & r10;
                    r24['lane'] = r23;
case 238:
                    r21 = r20 + 1;
                    r20 = r22.length;
                    r18 = r24;
                    if(r21 < r20) { _fun537_ip = 212; continue _fun537 }
case 253:
                    r17 = r12 << r17;
                    r17 = ~r17;
                    r13 = r19 & r17;
                    r7 = r18;
                    if(r6 < r13) { _fun537_ip = 153; continue _fun537 }
case 271:
                    if(!(r6 !== r3)) { _fun537_ip = 286; continue _fun537 }
case 275:
                    r1 = _closure1_slot243;
                    r1 = r1.bind(r0)(r2, r3, r6);
case 286:
                    r1 = r6 !== r4;
                    if(!r1) { _fun537_ip = 300; continue _fun537 }
case 293:
                    r3 = a4;
                    r1 = r6 === r3;
case 300:
                    if(!r1) { _fun537_ip = 335; continue _fun537 }
case 303:
                    r3 = r2.suspendedLanes;
                    r1 = a1;
                    r1 = ~r1;
                    r1 = r5 & r1;
                    r1 = ~r1;
                    r1 = r4 & r1;
                    r1 = r3 | r1;
                    r2['suspendedLanes'] = r1;
case 335:
                    return r0;
                }
            };
            var _closure1_slot242 = r0;
            r0 = function(a0, a1, a2) { // Original name: markSpawnedDeferredLane, environment: r1
                r1 = a0;
                r4 = a1;
                r0 = r1.pendingLanes;
                r0 = r0 | r4;
                r1['pendingLanes'] = r0;
                r2 = r1.suspendedLanes;
                r0 = ~r4;
                r0 = r2 & r0;
                r1['suspendedLanes'] = r0;
                r2 = _closure1_slot55;
                r0 = undefined;
                r3 = r2.bind(r0)(r4);
                r2 = 31;
                r3 = r2 - r3;
                r2 = r1.entangledLanes;
                r2 = r2 | r4;
                r1['entangledLanes'] = r2;
                r2 = r1.entanglements;
                r1 = r1.entanglements;
                r4 = r1[r3];
                r1 = 1073741824;
                r4 = r4 | r1;
                r5 = a2;
                r1 = 4194218;
                r1 = r5 & r1;
                r1 = r4 | r1;
                r2[r3] = r1;
                return r0;
            };
            var _closure1_slot243 = r0;
            r0 = function(a0, a1) { // Original name: markRootEntangled, environment: r1
                _fun539: for(var _fun539_ip = 0; ; ) switch(_fun539_ip) {
case 0:
                    r0 = a0;
                    r6 = a1;
                    r1 = r0.entangledLanes;
                    r5 = r1 | r6;
                    r0['entangledLanes'] = r5;
                    r4 = r0.entanglements;
                    r0 = undefined;
                    r2 = 31;
                    r1 = 1;
                    if(!r5) { _fun539_ip = 103; continue _fun539 }
case 42:
                    r7 = _closure1_slot55;
                    r7 = r7.bind(r0)(r5);
                    r10 = r2 - r7;
                    r7 = r1 << r10;
                    r9 = r7 & r6;
                    r8 = r4[r10];
                    r8 = r8 & r6;
                    r9 = r9 | r8;
                    r8 = r5;
                    if(!r9) { _fun539_ip = 93; continue _fun539 }
case 81:
                    r9 = r4[r10];
                    r9 = r9 | r6;
                    r4[r10] = r9;
case 93:
                    r7 = ~r7;
                    r5 = r8 & r7;
                    if(r5) { _fun539_ip = 42; continue _fun539 }
case 103:
                    return r0;
                }
            };
            var _closure1_slot244 = r0;
            r0 = function(a0) { // Original name: lanesToEventPriority, environment: r1
                _fun540: for(var _fun540_ip = 0; ; ) switch(_fun540_ip) {
case 0:
                    r1 = a0;
                    r0 = -r1;
                    r3 = r1 & r0;
                    r0 = 2;
                    if(!(r0 < r3)) { _fun540_ip = 55; continue _fun540 }
case 17:
                    r1 = 8;
                    if(!(r1 < r3)) { _fun540_ip = 52; continue _fun540 }
case 24:
                    r2 = 134217727;
                    r4 = r3 & r2;
                    r2 = 268435456;
                    r3 = 0;
                    if(!(r3 !== r4)) { _fun540_ip = 49; continue _fun540 }
case 46:
                    r2 = 32;
case 49:
                    r1 = r2;
case 52:
                    r0 = r1;
case 55:
                    return r0;
                }
            };
            var _closure1_slot245 = r0;
            r0 = function(a0) { // Original name: getNearestMountedFiber, environment: r1
                _fun541: for(var _fun541_ip = 0; ; ) switch(_fun541_ip) {
case 0:
                    r4 = a0;
                    r0 = r4.alternate;
                    r6 = 4098;
                    r5 = 0;
                    r3 = r4;
                    r2 = r3;
                    if(r0) { _fun541_ip = 65; continue _fun541 }
case 25:
                    r0 = r3.flags;
                    r7 = r0 & r6;
                    r0 = r3;
                    r1 = r2;
                    if(!(r5 !== r7)) { _fun541_ip = 49; continue _fun541 }
case 44:
                    r1 = r0.return;
case 49:
                    r3 = r0.return;
                    r2 = r1;
                    r1 = r2;
                    if(r3) { _fun541_ip = 25; continue _fun541 }
case 63:
                    _fun541_ip = 104; continue _fun541;
case 65:
                    r2 = r4.return;
                    r3 = r4;
                    r0 = r3;
                    r1 = r0;
                    if(!r2) { _fun541_ip = 104; continue _fun541 }
case 82:
                    r5 = r3.return;
                    r2 = r5.return;
                    r3 = r5;
                    r0 = r3;
                    r1 = r4;
                    if(r2) { _fun541_ip = 82; continue _fun541 }
case 104:
                    r3 = r0.tag;
                    r2 = 3;
                    r0 = null;
                    if(!(r2 === r3)) { _fun541_ip = 121; continue _fun541 }
case 118:
                    r0 = r1;
case 121:
                    return r0;
                }
            };
            var _closure1_slot246 = r0;
            r0 = function(a0) { // Original name: assertIsMounted, environment: r1
                _fun542: for(var _fun542_ip = 0; ; ) switch(_fun542_ip) {
case 0:
                    r1 = a0;
                    r0 = _closure1_slot246;
                    r2 = undefined;
                    r0 = r0.bind(r2)(r1);
                    if(!(r0 === r1)) { _fun542_ip = 23; continue _fun542 }
case 21:
                    return r2;
case 23:
                    r0 = global;
                    r1 = r0.Error;
                    r0 = 'Unable to find node on an unmounted component.';
                    r0 = r1.bind(r2)(r0);
                    throw r0;
                }
            };
            var _closure1_slot247 = r0;
            r0 = function(a0) { // Original name: findCurrentFiberUsingSlowPath, environment: r1
                _fun543: for(var _fun543_ip = 0; ; ) switch(_fun543_ip) {
case 0:
                    r1 = a0;
                    r0 = r1.alternate;
                    r2 = undefined;
                    r10 = null;
                    r7 = r1;
                    r6 = r0;
                    r5 = undefined;
                    r3 = undefined;
                    if(r0) { _fun543_ip = 71; continue _fun543 }
case 25:
                    r4 = _closure1_slot246;
                    r11 = r4.bind(r2)(r1);
                    if(!(r10 !== r11)) { _fun543_ip = 52; continue _fun543 }
case 41:
                    r4 = null;
                    if(!(r11 === r1)) { _fun543_ip = 50; continue _fun543 }
case 47:
                    r4 = r1;
case 50:
                    return r4;
case 52:
                    r4 = global;
                    r11 = r4.Error;
                    r4 = 'Unable to find node on an unmounted component.';
                    r4 = r11.bind(r2)(r4);
                    throw r4;
case 71:
                    r11 = r7.return;
                    r4 = r7;
                    r15 = r6;
                    r13 = r5;
                    r12 = r3;
                    if(!(r10 !== r11)) { _fun543_ip = 484; continue _fun543 }
case 95:
                    r27 = r11.alternate;
                    if(!(r10 !== r27)) { _fun543_ip = 463; continue _fun543 }
case 107:
                    r16 = r11.child;
                    r14 = r27.child;
                    if(!(r16 !== r14)) { _fun543_ip = 389; continue _fun543 }
case 124:
                    r20 = r4.return;
                    r14 = r15.return;
                    r19 = r11;
                    r16 = r27;
                    r18 = r13;
                    r17 = r12;
                    if(!(r20 === r14)) { _fun543_ip = 346; continue _fun543 }
case 153:
                    r20 = r11.child;
                    r26 = r4;
                    r25 = r15;
                    r24 = false;
                    r14 = r20;
                    if(!r14) { _fun543_ip = 224; continue _fun543 }
case 172:
                    r21 = r20;
                    r26 = r11;
                    r25 = r27;
                    r24 = true;
                    r14 = r21;
                    if(!(r21 !== r4)) { _fun543_ip = 224; continue _fun543 }
case 190:
                    r26 = r27;
                    r25 = r11;
                    r24 = true;
                    r14 = r21;
                    if(!(r14 !== r15)) { _fun543_ip = 224; continue _fun543 }
case 205:
                    r20 = r21.sibling;
                    r26 = r4;
                    r25 = r15;
                    r24 = false;
                    r14 = r20;
                    if(r14) { _fun543_ip = 172; continue _fun543 }
case 224:
                    r17 = r14;
                    r19 = r26;
                    r16 = r25;
                    r18 = r24;
                    if(r18) { _fun543_ip = 346; continue _fun543 }
case 239:
                    r23 = r27.child;
                    r22 = r26;
                    r21 = r25;
                    r14 = r24;
                    r20 = r23;
                    if(!r20) { _fun543_ip = 312; continue _fun543 }
case 259:
                    r28 = r23;
                    r22 = r27;
                    r21 = r11;
                    r14 = true;
                    r20 = r28;
                    if(!(r28 !== r26)) { _fun543_ip = 312; continue _fun543 }
case 277:
                    r22 = r11;
                    r21 = r27;
                    r14 = true;
                    r20 = r28;
                    if(!(r20 !== r25)) { _fun543_ip = 312; continue _fun543 }
case 292:
                    r23 = r28.sibling;
                    r22 = r26;
                    r21 = r25;
                    r14 = r24;
                    r20 = r23;
                    if(r20) { _fun543_ip = 259; continue _fun543 }
case 312:
                    r19 = r22;
                    r16 = r21;
                    r18 = r14;
                    r17 = r20;
                    if(r18) { _fun543_ip = 346; continue _fun543 }
case 327:
                    r14 = global;
