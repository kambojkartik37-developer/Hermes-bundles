                            r11 = _closure2_slot2;
                            r0 = r11.label;
                            r0 = r0 + 1;
                            r11['label'] = r0;
                            r0 = {};
                            r11 = r6;
                            r11 = r11[r3];
                            r0['value'] = r11;
                            r11 = false;
                            r0['done'] = r11;
case 854: // try_end5 // try_end12
                            _closure2_slot5 = r1;
                            _closure2_slot3 = r1;
                            return r0;
case 864: // try_start_6 // try_start_13
                            r0 = r6;
                            _closure2_slot5 = r0;
case 871:
                            r13 = _closure2_slot1;
                            r12 = r13.call;
                            r11 = _closure2_slot0;
                            r0 = _closure2_slot2;
                            r6 = r12.bind(r13)(r11, r0);
case 894: // try_end6
                            _fun6086_ip = 917; continue _fun6086;
case 896: // catch_target0 // catch_target1 // catch_target2 // catch_target3 // catch_target4 // catch_target5 // catch_target6
                            CatchBlockStart(arg_register=11);
                            r0 = [6];
                            r0[1] = r11;
                            r6 = r0;
                            _closure2_slot4 = r1;
case 917: // try_end13
                            _closure2_slot5 = r1;
                            _closure2_slot3 = r1;
case 925:
                            r0 = _closure2_slot6;
                            if(!r0) { _fun6086_ip = 950; continue _fun6086 }
case 932:
                            _closure2_slot6 = r1;
                            r0 = r6;
                            r0 = r0[r1];
                            if(!r0) { _fun6086_ip = 950; continue _fun6086 }
case 946:
                            _closure2_slot2 = r1;
case 950:
                            r0 = _closure2_slot2;
                            if(r0) { _fun6086_ip = 76; continue _fun6086 }
case 960:
                            r0 = r6;
                            r0 = r0[r1];
                            r4 = r0 & r4;
                            r0 = r6;
                            if(r4) { _fun6086_ip = 1004; continue _fun6086 }
case 977:
                            r4 = {};
                            r7 = r0[r1];
                            r5 = undefined;
                            if(!r7) { _fun6086_ip = 992; continue _fun6086 }
case 988:
                            r5 = r6[r3];
case 992:
                            r4['value'] = r5;
                            r5 = true;
                            r4['done'] = r5;
                            return r4;
case 1004:
                            r0 = r0[r3];
                            throw r0;
case 1010: // catch_target7 // catch_target8 // catch_target9 // catch_target10 // catch_target11 // catch_target12 // catch_target13
                            CatchBlockStart(arg_register=0);
                            _closure2_slot5 = r1;
                            _closure2_slot3 = r1;
                            throw r0;
case 1022:
                            r0 = global;
                            r2 = r0.TypeError;
                            r0 = r2.prototype;
                            r1 = Object.create(r0, {constructor: {value: r2}});
                            r16 = 'Generator is already executing.';
                            r17 = r1;
                            r0 = new r17[r2](r16, r15);
                            r0 = r0 instanceof Object ? r0 : r1;
                            throw r0;
                        }
                    };
                    var _closure2_slot7 = r1;
                    r1 = {};
                    r2 = 0;
                    r1['label'] = r2;
                    r3 = function() { // Original name: sent, environment: r0
                        _fun6087: for(var _fun6087_ip = 0; ; ) switch(_fun6087_ip) {
case 0:
                            r2 = _closure2_slot5;
                            r1 = 0;
                            r1 = r2[r1];
                            r2 = 1;
                            r1 = r1 & r2;
                            r0 = _closure2_slot5;
                            r0 = r0[r2];
                            if(r1) { _fun6087_ip = 33; continue _fun6087 }
case 31:
                            return r0;
case 33:
                            throw r0;
                        }
                    };
                    r1['sent'] = r3;
                    r3 = new Array(0);
                    r1['trys'] = r3;
                    r3 = new Array(0);
                    r1['ops'] = r3;
                    var _closure2_slot2 = r1;
                    r1 = {};
                    r3 = undefined;
                    r2 = r4.bind(r3)(r2);
                    r1['next'] = r2;
                    r2 = 1;
                    r2 = r4.bind(r3)(r2);
                    r1['throw'] = r2;
                    r2 = 2;
                    r2 = r4.bind(r3)(r2);
                    r1['return'] = r2;
                    var _closure2_slot6 = r1;
                    r1 = global;
                    r2 = r1.Symbol;
                    r3 = typeof r2;
                    r2 = 'function';
                    if(!(r3 === r2)) { _fun6083_ip = 155; continue _fun6083 }
case 131:
                    r3 = _closure2_slot6;
                    r1 = r1.Symbol;
                    r2 = r1.iterator;
                    r1 = function() { // Environment: r0
                        r0 = this;
                        return r0;
                    };
                    r3[r2] = r1;
case 155:
                    r0 = _closure2_slot6;
                    return r0;
                }
            };
case 52:
            var _closure1_slot1 = r0;
            r0 = global;
            r5 = r0.Object;
            r4 = r5.defineProperty;
            r3 = {};
            r0 = true;
            r3['value'] = r0;
            r0 = '__esModule';
            r0 = r4.bind(r5)(r2, r0, r3);
            r0 = undefined;
            r2['setBrightnessLevel'] = r0;
            r2['getBrightnessLevel'] = r0;
            r2['getSystemBrightnessLevel'] = r0;
            r4 = a6;
            r3 = 0;
            r4 = r4[r3];
            r3 = a1;
            r3 = r3.bind(r0)(r4);
            var _closure1_slot2 = r3;
            r3 = r3.NativeModules;
            r3 = r3.RNDeviceBrightness;
            var _closure1_slot3 = r3;
            r3 = function(a0) { // Original name: setBrightnessLevel, environment: r1
                r1 = a0;
                var _closure2_slot0 = r1;
                r2 = _closure1_slot0;
                r3 = function() { // Environment: r0
                    r3 = _closure1_slot1;
                    r2 = undefined;
                    r1 = this;
                    r0 = function(a0) { // Environment: r0
                        _fun6091: for(var _fun6091_ip = 0; ; ) switch(_fun6091_ip) {
case 0:
                            r1 = a0;
                            r3 = r1.label;
                            r2 = 0;
                            if(!(r2 !== r3)) { _fun6091_ip = 46; continue _fun6091 }
case 15:
                            r0 = 1;
                            if(!(r0 !== r3)) { _fun6091_ip = 26; continue _fun6091 }
case 22:
                            r0 = undefined;
                            return r0;
case 26:
                            r0 = r1.sent;
                            r0 = r0.bind(r1)();
                            r0 = [2];
                            return r0;
case 46:
                            r1 = _closure2_slot0;
                            if(!(!(r1 < r2))) { _fun6091_ip = 68; continue _fun6091 }
case 57:
                            r2 = _closure2_slot0;
                            r1 = 1;
                            if(!(r2 > r1)) { _fun6091_ip = 128; continue _fun6091 }
case 68:
                            r1 = _closure1_slot2;
                            r1 = r1.Platform;
                            r2 = r1.OS;
                            r1 = 'android';
                            if(!(r2 === r1)) { _fun6091_ip = 107; continue _fun6091 }
case 93:
                            r2 = _closure2_slot0;
                            r1 = -1;
                            if(!(r2 !== r1)) { _fun6091_ip = 128; continue _fun6091 }
case 107:
                            r1 = global;
                            r3 = r1.Error;
                            r2 = undefined;
                            r1 = '⚠️ BrightnessLevel value must betweens 0 to 1 ⚠️';
                            r1 = r3.bind(r2)(r1);
                            throw r1;
case 128:
                            r2 = _closure1_slot3;
                            r1 = r2.setBrightnessLevel;
                            r0 = _closure2_slot0;
                            r1 = r1.bind(r2)(r0);
                            r0 = [4];
                            r0[1] = r1;
                            return r0;
                        }
                    };
                    r0 = r3.bind(r2)(r1, r0);
                    return r0;
                };
                r7 = undefined;
                r6 = undefined;
                r5 = undefined;
                r4 = undefined;
                r0 = r7[r2](r6, r5, r4, r3, r2);
                return r0;
            };
            r2['setBrightnessLevel'] = r3;
            r3 = function() { // Original name: getBrightnessLevel, environment: r1
                r2 = _closure1_slot0;
                r3 = function() { // Environment: r0
                    r3 = _closure1_slot1;
                    r2 = undefined;
                    r1 = this;
                    r0 = function(a0) { // Environment: r0
                        r1 = _closure1_slot3;
                        r0 = r1.getBrightnessLevel;
                        r1 = r0.bind(r1)();
                        r0 = [2];
                        r0[1] = r1;
                        return r0;
                    };
                    r0 = r3.bind(r2)(r1, r0);
                    return r0;
                };
                r7 = undefined;
                r6 = undefined;
                r5 = undefined;
                r4 = undefined;
                r0 = r7[r2](r6, r5, r4, r3, r2);
                return r0;
            };
            r2['getBrightnessLevel'] = r3;
            r1 = function() { // Original name: getSystemBrightnessLevel, environment: r1
                _fun6095: for(var _fun6095_ip = 0; ; ) switch(_fun6095_ip) {
case 0:
                    r1 = _closure1_slot2;
                    r1 = r1.Platform;
                    r2 = r1.OS;
                    r1 = 'android';
                    if(!(r2 === r1)) { _fun6095_ip = 41; continue _fun6095 }
case 25:
                    r1 = _closure1_slot3;
                    r0 = r1.getSystemBrightnessLevel;
                    r0 = r0.bind(r1)();
                    return r0;
case 41:
                    r0 = global;
                    r2 = r0.Error;
                    r1 = undefined;
                    r0 = '⚠️ Android only supported ⚠️';
                    r0 = r2.bind(r1)(r0);
                    throw r0;
                }
            };
            r2['getSystemBrightnessLevel'] = r1;
            r1 = {};
            r3 = r2.setBrightnessLevel;
            r1['setBrightnessLevel'] = r3;
            r3 = r2.getBrightnessLevel;
            r1['getBrightnessLevel'] = r3;
            r3 = r2.getSystemBrightnessLevel;
            r1['getSystemBrightnessLevel'] = r3;
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 559;
    r5 = [2];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun6096: for(var _fun6096_ip = 0; ; ) switch(_fun6096_ip) {
case 0:
            r4 = a1;
            r6 = a5;
            r5 = a6;
            var _closure1_slot0 = r4;
            var _closure1_slot1 = r5;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r2
                _fun6097: for(var _fun6097_ip = 0; ; ) switch(_fun6097_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun6097_ip = 104; continue _fun6097 }
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
                        _fun6098: for(var _fun6098_ip = 0; ; ) switch(_fun6098_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun6098_ip = 15; continue _fun6098 }
case 9:
                            r0 = _closure2_slot0;
                            _fun6098_ip = 19; continue _fun6098;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot7 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot7 = r0;
            r0 = 0;
            r1 = r5[r0];
            r0 = undefined;
            r3 = r4.bind(r0)(r1);
            r17 = global;
            r9 = r17.Object;
            r8 = r9.defineProperty;
            r7 = {};
            r1 = true;
            r7['value'] = r1;
            r1 = '__esModule';
            r1 = r8.bind(r9)(r6, r1, r7);
            r1 = function(a0) { // Original name: SplashScreen, environment: r2
                r1 = a0;
                r5 = r1.webViewLoaded;
                var _closure2_slot0 = r5;
                r1 = r1.onFinish;
                var _closure2_slot1 = r1;
                r1 = _closure1_slot3;
                r2 = r1.useRef;
                r1 = _closure1_slot4;
                r1 = r1.Animated;
                r1 = r1.Value;
                r3 = r1.prototype;
                r3 = Object.create(r3, {constructor: {value: r1}});
                r6 = 1;
                r18 = r3;
                r17 = r6;
                r1 = new r18[r1](r17, r16);
                r1 = r1 instanceof Object ? r1 : r3;
                r3 = undefined;
                r1 = r2.bind(r3)(r1);
                r13 = r1.current;
                var _closure2_slot2 = r13;
                r1 = _closure1_slot3;
                r2 = r1.useRef;
                r1 = _closure1_slot4;
                r1 = r1.Animated;
                r1 = r1.Value;
                r4 = r1.prototype;
                r4 = Object.create(r4, {constructor: {value: r1}});
                r18 = r4;
                r17 = r6;
                r1 = new r18[r1](r17, r16);
                r1 = r1 instanceof Object ? r1 : r4;
                r1 = r2.bind(r3)(r1);
                r15 = r1.current;
                var _closure2_slot3 = r15;
                r1 = _closure1_slot3;
                r2 = r1.useRef;
                r1 = _closure1_slot4;
                r1 = r1.Animated;
                r1 = r1.Value;
                r4 = r1.prototype;
                r4 = Object.create(r4, {constructor: {value: r1}});
                r18 = r4;
                r17 = r6;
                r1 = new r18[r1](r17, r16);
                r1 = r1 instanceof Object ? r1 : r4;
                r1 = r2.bind(r3)(r1);
                r12 = r1.current;
                var _closure2_slot4 = r12;
                r1 = _closure1_slot3;
                r2 = r1.useRef;
                r1 = null;
                r1 = r2.bind(r3)(r1);
                var _closure2_slot5 = r1;
                r1 = _closure1_slot3;
                r1 = r1.useState;
                r2 = false;
                r7 = r1.bind(r3)(r2);
                r1 = _closure1_slot2;
                r4 = r1.default;
                r1 = 2;
                r1 = r4.bind(r3)(r7, r1);
                r4 = 0;
                r4 = r1[r4];
                var _closure2_slot6 = r4;
                r1 = r1[r6];
                var _closure2_slot7 = r1;
                r1 = _closure1_slot3;
                r1 = r1.useRef;
                r1 = r1.bind(r3)(r2);
                var _closure2_slot8 = r1;
                r1 = _closure1_slot3;
                r6 = r1.useEffect;
                r2 = function() { // Environment: r0
                    r1 = _closure2_slot5;
                    r3 = _closure1_slot4;
                    r4 = r3.Animated;
                    r3 = r4.loop;
                    r5 = _closure1_slot4;
                    r6 = r5.Animated;
                    r5 = r6.sequence;
                    r8 = _closure1_slot4;
                    r9 = r8.Animated;
                    r8 = r9.spring;
                    r10 = _closure2_slot2;
                    r2 = {'toValue': 1.2, 'useNativeDriver': true, 'friction': 2, 'tension': 100};
                    r8 = r8.bind(r9)(r10, r2);
                    r2 = new Array(2);
                    r2[0] = r8;
                    r7 = _closure1_slot4;
                    r9 = r7.Animated;
                    r8 = r9.spring;
                    r7 = {'toValue': 1, 'useNativeDriver': true, 'friction': 2, 'tension': 100};
                    r7 = r8.bind(r9)(r10, r7);
                    r2[1] = r7;
                    r2 = r5.bind(r6)(r2);
                    r2 = r3.bind(r4)(r2);
                    r1['current'] = r2;
                    r2 = r1.current;
                    r1 = r2.start;
                    r1 = r1.bind(r2)();
                    r1 = global;
                    r4 = r1.setTimeout;
                    r3 = undefined;
                    r2 = function() { // Environment: r0
                        r2 = _closure2_slot7;
                        r0 = undefined;
                        r1 = true;
                        r1 = r2.bind(r0)(r1);
                        return r0;
                    };
                    r1 = 3000;
                    r1 = r4.bind(r3)(r2, r1);
                    var _closure3_slot0 = r1;
                    r0 = function() { // Environment: r0
                        r0 = global;
                        r2 = r0.clearTimeout;
                        r1 = _closure3_slot0;
                        r0 = undefined;
                        r0 = r2.bind(r0)(r1);
                        return r0;
                    };
                    return r0;
                };
                r1 = new Array(0);
                r1 = r6.bind(r3)(r2, r1);
                r1 = _closure1_slot3;
                r2 = r1.useEffect;
                r1 = new Array(2);
                r1[0] = r5;
                r1[1] = r4;
                r0 = function() { // Environment: r0
                    _fun6103: for(var _fun6103_ip = 0; ; ) switch(_fun6103_ip) {
case 0:
                        r0 = _closure2_slot0;
                        if(!r0) { _fun6103_ip = 197; continue _fun6103 }
case 13:
                        r0 = _closure2_slot6;
                        if(!r0) { _fun6103_ip = 197; continue _fun6103 }
case 23:
                        r0 = _closure2_slot8;
                        r0 = r0.current;
                        if(r0) { _fun6103_ip = 197; continue _fun6103 }
case 38:
                        r1 = _closure2_slot8;
                        r0 = true;
                        r1['current'] = r0;
                        r0 = _closure2_slot5;
                        r1 = r0.current;
                        r0 = null;
                        if(!(r1 != r0)) { _fun6103_ip = 75; continue _fun6103 }
case 65:
                        r0 = r1.stop;
                        r0 = r0.bind(r1)();
case 75:
                        r0 = _closure1_slot4;
                        r2 = r0.Animated;
                        r1 = r2.parallel;
                        r0 = _closure1_slot4;
                        r7 = r0.Animated;
                        r6 = r7.timing;
                        r5 = _closure2_slot3;
                        r0 = {'toValue': 50, 'duration': 500, 'useNativeDriver': true};
                        r5 = r6.bind(r7)(r5, r0);
                        r0 = new Array(2);
                        r0[0] = r5;
                        r4 = _closure1_slot4;
                        r6 = r4.Animated;
                        r5 = r6.timing;
                        r4 = _closure2_slot4;
                        r3 = {'toValue': 0, 'duration': 600, 'delay': 50, 'useNativeDriver': true};
                        r3 = r5.bind(r6)(r4, r3);
                        r0[1] = r3;
                        r2 = r1.bind(r2)(r0);
                        r1 = r2.start;
                        r0 = function() { // Environment: r0
                            r1 = _closure2_slot1;
                            r0 = undefined;
                            r1 = r1.bind(r0)();
                            return r0;
                        };
                        r0 = r1.bind(r2)(r0);
case 197:
                        r0 = undefined;
                        return r0;
                    }
                };
                r0 = r2.bind(r3)(r0, r1);
                r0 = _closure1_slot5;
                r2 = r0.jsxs;
                r0 = _closure1_slot4;
                r1 = r0.View;
                r0 = {};
                r4 = _closure1_slot6;
                r4 = r4.container;
                r0['style'] = r4;
                r4 = _closure1_slot5;
                r6 = r4.jsx;
                r4 = _closure1_slot4;
                r4 = r4.Animated;
                r5 = r4.Image;
                r4 = {};
                r9 = _closure1_slot0;
                r11 = _closure1_slot1;
                r7 = 5;
                r7 = r11[r7];
                r7 = r9.bind(r3)(r7);
                r4['source'] = r7;
                r7 = 'contain';
                r4['resizeMode'] = r7;
                r7 = _closure1_slot6;
                r10 = r7.logo;
                r7 = new Array(2);
                r7[0] = r10;
                r10 = {};
                r14 = {};
                r14['scale'] = r13;
                r13 = new Array(2);
                r13[0] = r14;
                r14 = {};
                r14['scale'] = r15;
                r13[1] = r14;
                r10['transform'] = r13;
                r10['opacity'] = r12;
                r7[1] = r10;
                r4['style'] = r7;
                r5 = r6.bind(r3)(r5, r4);
                r4 = new Array(2);
                r4[0] = r5;
                r5 = _closure1_slot5;
                r7 = r5.jsx;
                r5 = _closure1_slot4;
                r6 = r5.View;
                r5 = {};
                r10 = _closure1_slot6;
                r10 = r10.loader;
                r5['style'] = r10;
                r8 = _closure1_slot5;
                r10 = r8.jsx;
                r8 = 6;
                r8 = r11[r8];
                r8 = r9.bind(r3)(r8);
                r9 = r8.Circle;
                r8 = {'size': 55, 'color': '#e50914'};
                r8 = r10.bind(r3)(r9, r8);
                r5['children'] = r8;
                r5 = r7.bind(r3)(r6, r5);
                r4[1] = r5;
                r0['children'] = r4;
                r0 = r2.bind(r3)(r1, r0);
                return r0;
            };
            r6['default'] = r1;
            r1 = 1;
            r1 = r5[r1];
            r1 = r4.bind(r0)(r1);
            r1 = r3.bind(r0)(r1);
            var _closure1_slot2 = r1;
            r1 = 2;
            r1 = r5[r1];
            r6 = r4.bind(r0)(r1);
            if(!r6) { _fun6096_ip = 134; continue _fun6096 }
case 120:
            r3 = r6.__esModule;
            r1 = r6;
            if(r3) { _fun6096_ip = 401; continue _fun6096 }
case 134:
            r16 = null;
            if(!(r16 !== r6)) { _fun6096_ip = 392; continue _fun6096 }
case 143:
            r7 = typeof r6;
            r3 = 'object';
            if(!(r3 !== r7)) { _fun6096_ip = 165; continue _fun6096 }
case 154:
            r3 = 'function';
            if(!(r3 === r7)) { _fun6096_ip = 392; continue _fun6096 }
case 165:
            r3 = _closure1_slot7;
            r7 = r3.bind(r0)(r0);
            if(!r7) { _fun6096_ip = 193; continue _fun6096 }
case 177:
            r3 = r7.has;
            r3 = r3.bind(r7)(r6);
            if(r3) { _fun6096_ip = 380; continue _fun6096 }
case 193:
            r3 = Object.create(r16);
            r8 = r17.Object;
            r15 = r8.defineProperty;
            if(!r15) { _fun6096_ip = 221; continue _fun6096 }
case 210:
            r8 = r17.Object;
            r15 = r8.getOwnPropertyDescriptor;
case 221:
            r13 = r6;
            r9 = 'default';
            r8 = undefined;
            for(r10 in r13)
case 238:
            {
case 247:
                r21 = r10;
                if(r9 === r21) { _fun6096_ip = 238; continue _fun6096 }
case 254:
                r18 = {};
                r19 = r18.hasOwnProperty;
                r18 = r19.call;
                r18 = r18.bind(r19)(r6, r21);
                if(!r18) { _fun6096_ip = 238; continue _fun6096 }
case 275:
                r18 = null;
                if(!r15) { _fun6096_ip = 297; continue _fun6096 }
case 280:
                r20 = r17.Object;
                r19 = r20.getOwnPropertyDescriptor;
                r18 = r19.bind(r20)(r6, r21);
case 297:
                if(!r18) { _fun6096_ip = 316; continue _fun6096 }
case 300:
                r19 = r18.get;
                if(r19) { _fun6096_ip = 329; continue _fun6096 }
case 308:
                r19 = r18.set;
                if(r19) { _fun6096_ip = 329; continue _fun6096 }
case 316:
                r19 = r6[r21];
                r3[r21] = r19;
                r8 = r18;
                _fun6096_ip = 238; continue _fun6096;
case 329:
                r20 = r17.Object;
                r19 = r20.defineProperty;
                r19 = r19.bind(r20)(r3, r21, r18);
                r8 = r18;
                _fun6096_ip = 238; continue _fun6096;
            }
case 352:
            r3['default'] = r6;
            r1 = r3;
            if(!r7) { _fun6096_ip = 401; continue _fun6096 }
case 364:
            r8 = r7.set;
            r8 = r8.bind(r7)(r6, r3);
            r1 = r3;
            _fun6096_ip = 401; continue _fun6096;
case 380:
            r3 = r7.get;
            r1 = r3.bind(r7)(r6);
            _fun6096_ip = 401; continue _fun6096;
case 392:
            r3 = {};
            r3['default'] = r6;
            r1 = r3;
case 401:
            var _closure1_slot3 = r1;
            r1 = 3;
            r1 = r5[r1];
            r1 = r4.bind(r0)(r1);
            var _closure1_slot4 = r1;
            r3 = 4;
            r3 = r5[r3];
            r3 = r4.bind(r0)(r3);
            var _closure1_slot5 = r3;
            r4 = r1.StyleSheet;
            r3 = r4.create;
            r1 = {};
            r5 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': 0, 'zIndex': 999, 'backgroundColor': '#000', 'justifyContent': 'center', 'alignItems': 'center'};
            r1['container'] = r5;
            r5 = {'width': 80, 'height': 80};
            r1['logo'] = r5;
            r5 = {'position': 'absolute', 'bottom': 60, 'width': 200, 'height': 60, 'justifyContent': 'center', 'alignItems': 'center'};
            r1['loader'] = r5;
            r1 = r3.bind(r4)(r1);
            var _closure1_slot6 = r1;
            return r0;
        }
    };
    r6 = 560;
    r5 = [1, 38, 119, 2, 251, 561, 563];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r1 = a6;
        r0 = 0;
        r2 = r1[r0];
        r1 = a1;
        r0 = undefined;
        r3 = r1.bind(r0)(r2);
        r2 = r3.registerAsset;
        r1 = {'__packager_asset': true, 'httpServerLocation': '/assets/assets', 'width': 192, 'height': 192, 'scales': null, 'hash': 'c80e672bd6c1af77ba13b950cd092b0e', 'name': 'splash', 'type': 'png'};
        r4 = [1];
        r1['scales'] = r4;
        r2 = r2.bind(r3)(r1);
        r1 = a4;
        r1['exports'] = r2;
        return r0;
    };
    r6 = 561;
    r5 = [562];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r1 = a6;
        r0 = 0;
        r2 = r1[r0];
        r1 = a1;
        r0 = undefined;
        r2 = r1.bind(r0)(r2);
        r1 = a4;
        r1['exports'] = r2;
        return r0;
    };
    r6 = 562;
    r5 = [109];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r4 = a1;
        r9 = a5;
        r5 = a6;
        r0 = 0;
        r1 = r5[r0];
        r0 = undefined;
        r3 = r4.bind(r0)(r1);
        r6 = global;
        r11 = r6.Object;
        r10 = r11.defineProperty;
        r8 = {};
        r1 = true;
        r8['value'] = r1;
        r7 = '__esModule';
        r7 = r10.bind(r11)(r9, r7, r8);
        r11 = r6.Object;
        r10 = r11.defineProperty;
        r8 = {};
        r8['enumerable'] = r1;
        r7 = function() { // Original name: get, environment: r2
            r0 = _closure1_slot1;
            r0 = r0.default;
            return r0;
        };
        r8['get'] = r7;
        r7 = 'Bounce';
        r7 = r10.bind(r11)(r9, r7, r8);
        r11 = r6.Object;
        r10 = r11.defineProperty;
        r8 = {};
        r8['enumerable'] = r1;
        r7 = function() { // Original name: get, environment: r2
            r0 = _closure1_slot4;
            r0 = r0.default;
            return r0;
        };
        r8['get'] = r7;
        r7 = 'Chase';
        r7 = r10.bind(r11)(r9, r7, r8);
        r11 = r6.Object;
        r10 = r11.defineProperty;
        r8 = {};
        r8['enumerable'] = r1;
        r7 = function() { // Original name: get, environment: r2
            r0 = _closure1_slot7;
            r0 = r0.default;
            return r0;
        };
        r8['get'] = r7;
        r7 = 'Circle';
        r7 = r10.bind(r11)(r9, r7, r8);
        r11 = r6.Object;
        r10 = r11.defineProperty;
        r8 = {};
        r8['enumerable'] = r1;
        r7 = function() { // Original name: get, environment: r2
            r0 = _closure1_slot8;
            r0 = r0.default;
            return r0;
        };
        r8['get'] = r7;
        r7 = 'CircleFade';
        r7 = r10.bind(r11)(r9, r7, r8);
        r11 = r6.Object;
        r10 = r11.defineProperty;
        r8 = {};
        r8['enumerable'] = r1;
        r7 = function() { // Original name: get, environment: r2
            r0 = _closure1_slot6;
            r0 = r0.default;
            return r0;
        };
        r8['get'] = r7;
        r7 = 'Flow';
        r7 = r10.bind(r11)(r9, r7, r8);
        r11 = r6.Object;
        r10 = r11.defineProperty;
        r8 = {};
        r8['enumerable'] = r1;
        r7 = function() { // Original name: get, environment: r2
            r0 = _closure1_slot10;
            r0 = r0.default;
            return r0;
        };
        r8['get'] = r7;
        r7 = 'Fold';
        r7 = r10.bind(r11)(r9, r7, r8);
        r11 = r6.Object;
        r10 = r11.defineProperty;
        r8 = {};
        r8['enumerable'] = r1;
        r7 = function() { // Original name: get, environment: r2
            r0 = _closure1_slot9;
            r0 = r0.default;
            return r0;
        };
        r8['get'] = r7;
        r7 = 'Grid';
        r7 = r10.bind(r11)(r9, r7, r8);
        r11 = r6.Object;
        r10 = r11.defineProperty;
        r8 = {};
        r8['enumerable'] = r1;
        r7 = function() { // Original name: get, environment: r2
            r0 = _closure1_slot0;
            r0 = r0.default;
            return r0;
        };
        r8['get'] = r7;
        r7 = 'Plane';
        r7 = r10.bind(r11)(r9, r7, r8);
        r11 = r6.Object;
        r10 = r11.defineProperty;
        r8 = {};
        r8['enumerable'] = r1;
        r7 = function() { // Original name: get, environment: r2
            r0 = _closure1_slot2;
            r0 = r0.default;
            return r0;
        };
        r8['get'] = r7;
        r7 = 'Pulse';
        r7 = r10.bind(r11)(r9, r7, r8);
        r11 = r6.Object;
        r10 = r11.defineProperty;
        r8 = {};
        r8['enumerable'] = r1;
        r7 = function() { // Original name: get, environment: r2
            r0 = _closure1_slot3;
            r0 = r0.default;
            return r0;
        };
        r8['get'] = r7;
        r7 = 'Swing';
        r7 = r10.bind(r11)(r9, r7, r8);
        r11 = r6.Object;
        r10 = r11.defineProperty;
        r8 = {};
        r8['enumerable'] = r1;
        r7 = function() { // Original name: get, environment: r2
            r0 = _closure1_slot11;
            r0 = r0.default;
            return r0;
        };
        r8['get'] = r7;
        r7 = 'Wander';
        r7 = r10.bind(r11)(r9, r7, r8);
        r8 = r6.Object;
        r7 = r8.defineProperty;
        r6 = {};
        r6['enumerable'] = r1;
        r1 = function() { // Original name: get, environment: r2
            r0 = _closure1_slot5;
            r0 = r0.default;
            return r0;
        };
        r6['get'] = r1;
        r1 = 'Wave';
        r1 = r7.bind(r8)(r9, r1, r6);
        r1 = 1;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r3.bind(r0)(r1);
        var _closure1_slot0 = r1;
        r1 = 2;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r3.bind(r0)(r1);
        var _closure1_slot1 = r1;
        r1 = 3;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r3.bind(r0)(r1);
        var _closure1_slot2 = r1;
        r1 = 4;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r3.bind(r0)(r1);
        var _closure1_slot3 = r1;
        r1 = 5;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r3.bind(r0)(r1);
        var _closure1_slot4 = r1;
        r1 = 6;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r3.bind(r0)(r1);
        var _closure1_slot5 = r1;
        r1 = 7;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r3.bind(r0)(r1);
        var _closure1_slot6 = r1;
        r1 = 8;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r3.bind(r0)(r1);
        var _closure1_slot7 = r1;
        r1 = 9;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r3.bind(r0)(r1);
        var _closure1_slot8 = r1;
        r1 = 10;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r3.bind(r0)(r1);
        var _closure1_slot9 = r1;
        r1 = 11;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r3.bind(r0)(r1);
        var _closure1_slot10 = r1;
        r1 = 12;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r3.bind(r0)(r1);
        var _closure1_slot11 = r1;
        return r0;
    };
    r6 = 563;
    r5 = [1, 564, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun6120: for(var _fun6120_ip = 0; ; ) switch(_fun6120_ip) {
case 0:
            r3 = a1;
            r1 = a5;
            r4 = a6;
            var _closure1_slot0 = r3;
            var _closure1_slot1 = r4;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r2
                _fun6121: for(var _fun6121_ip = 0; ; ) switch(_fun6121_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun6121_ip = 104; continue _fun6121 }
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
                        _fun6122: for(var _fun6122_ip = 0; ; ) switch(_fun6122_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun6122_ip = 15; continue _fun6122 }
case 9:
                            r0 = _closure2_slot0;
                            _fun6122_ip = 19; continue _fun6122;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot12 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot12 = r0;
            r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r2
                _fun6123: for(var _fun6123_ip = 0; ; ) switch(_fun6123_ip) {
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
                    r0 = _closure1_slot14;
                    r0 = r0.bind(r2)();
                    if(r0) { _fun6123_ip = 61; continue _fun6123 }
case 48:
                    r0 = r8.apply;
                    r0 = r0.bind(r8)(r3, r5);
                    _fun6123_ip = 107; continue _fun6123;
case 61:
                    r6 = global;
                    r7 = r6.Reflect;
                    r6 = r7.construct;
                    if(r5) { _fun6123_ip = 81; continue _fun6123 }
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
            var _closure1_slot13 = r0;
            r0 = function() { // Original name: _isNativeReflectConstruct, environment: r2
                _fun6124: for(var _fun6124_ip = 0; ; ) switch(_fun6124_ip) {
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
                    _fun6124_ip = 74; continue _fun6124;
case 72: // catch_target0
                    CatchBlockStart(arg_register=1);
case 74:
                    r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                        r0 = _closure2_slot0;
                        r0 = !r0;
                        r0 = !r0;
                        return r0;
                    };
                    _closure1_slot14 = r1;
                    r0 = undefined;
                    r0 = r1.bind(r0)();
                    return r0;
                }
            };
            var _closure1_slot14 = r0;
            r0 = 0;
            r5 = r4[r0];
            r0 = undefined;
            r7 = r3.bind(r0)(r5);
            r19 = global;
            r9 = r19.Object;
            r8 = r9.defineProperty;
            r6 = {};
            r5 = true;
            r6['value'] = r5;
            r5 = '__esModule';
            r5 = r8.bind(r9)(r1, r5, r6);
            r1['default'] = r0;
            r5 = 1;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot2 = r5;
            r5 = 2;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot3 = r5;
            r5 = 3;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot4 = r5;
            r5 = 4;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot5 = r5;
            r5 = 5;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot6 = r5;
            r5 = 6;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot7 = r5;
            r5 = 7;
            r5 = r4[r5];
            r8 = r3.bind(r0)(r5);
            if(!r8) { _fun6120_ip = 252; continue _fun6120 }
case 238:
            r6 = r8.__esModule;
            r5 = r8;
            if(r6) { _fun6120_ip = 519; continue _fun6120 }
case 252:
            r18 = null;
            if(!(r18 !== r8)) { _fun6120_ip = 510; continue _fun6120 }
case 261:
            r9 = typeof r8;
            r6 = 'object';
            if(!(r6 !== r9)) { _fun6120_ip = 283; continue _fun6120 }
case 272:
            r6 = 'function';
            if(!(r6 === r9)) { _fun6120_ip = 510; continue _fun6120 }
case 283:
            r6 = _closure1_slot12;
            r9 = r6.bind(r0)(r0);
            if(!r9) { _fun6120_ip = 311; continue _fun6120 }
case 295:
            r6 = r9.has;
            r6 = r6.bind(r9)(r8);
            if(r6) { _fun6120_ip = 498; continue _fun6120 }
case 311:
            r6 = Object.create(r18);
            r10 = r19.Object;
            r17 = r10.defineProperty;
            if(!r17) { _fun6120_ip = 339; continue _fun6120 }
case 328:
            r10 = r19.Object;
            r17 = r10.getOwnPropertyDescriptor;
case 339:
            r15 = r8;
            r11 = 'default';
            r10 = undefined;
            for(r12 in r15)
case 356:
            {
case 365:
                r23 = r12;
                if(r11 === r23) { _fun6120_ip = 356; continue _fun6120 }
case 372:
                r20 = {};
                r21 = r20.hasOwnProperty;
                r20 = r21.call;
                r20 = r20.bind(r21)(r8, r23);
                if(!r20) { _fun6120_ip = 356; continue _fun6120 }
case 393:
                r20 = null;
                if(!r17) { _fun6120_ip = 415; continue _fun6120 }
case 398:
                r22 = r19.Object;
                r21 = r22.getOwnPropertyDescriptor;
                r20 = r21.bind(r22)(r8, r23);
case 415:
                if(!r20) { _fun6120_ip = 434; continue _fun6120 }
case 418:
                r21 = r20.get;
                if(r21) { _fun6120_ip = 447; continue _fun6120 }
case 426:
                r21 = r20.set;
                if(r21) { _fun6120_ip = 447; continue _fun6120 }
case 434:
                r21 = r8[r23];
                r6[r23] = r21;
                r10 = r20;
                _fun6120_ip = 356; continue _fun6120;
case 447:
                r22 = r19.Object;
                r21 = r22.defineProperty;
                r21 = r21.bind(r22)(r6, r23, r20);
                r10 = r20;
                _fun6120_ip = 356; continue _fun6120;
            }
case 470:
            r6['default'] = r8;
            r5 = r6;
            if(!r9) { _fun6120_ip = 519; continue _fun6120 }
case 482:
            r10 = r9.set;
            r10 = r10.bind(r9)(r8, r6);
            r5 = r6;
            _fun6120_ip = 519; continue _fun6120;
case 498:
            r6 = r9.get;
            r5 = r6.bind(r9)(r8);
            _fun6120_ip = 519; continue _fun6120;
case 510:
            r6 = {};
            r6['default'] = r8;
            r5 = r6;
case 519:
            r6 = 8;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            var _closure1_slot8 = r6;
            r6 = 9;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            r6 = r7.bind(r0)(r6);
            var _closure1_slot9 = r6;
            r6 = 10;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            var _closure1_slot10 = r6;
            r6 = ['size', 'color', 'style', 'animating', 'hidesWhenStopped'];
            var _closure1_slot11 = r6;
            r5 = r5.Component;
            r2 = function(a0) { // Environment: r2
                r3 = function() { // Original name: Plane, environment: r0
                    r4 = this;
                    r3 = undefined;
                    r0 = undefined;
                    r2 = _closure1_slot3;
                    r5 = r2.default;
                    r2 = _closure2_slot0;
                    r5 = r5.bind(r3)(r4, r2);
                    r1 = _closure1_slot13;
                    r0 = arguments;
                    r0 = r1.bind(r3)(r4, r2, r0);
                    return r0;
                };
                var _closure2_slot0 = r3;
                r2 = _closure1_slot7;
                r5 = r2.default;
                r2 = undefined;
                r4 = a0;
                r4 = r5.bind(r2)(r3, r4);
                r1 = _closure1_slot4;
                r1 = r1.default;
                r4 = {};
                r5 = 'render';
                r4['key'] = r5;
                r0 = function() { // Original name: render, environment: r0
                    r0 = this;
                    r6 = r0.props;
                    r0 = r6.size;
                    var _closure3_slot0 = r0;
                    r0 = r6.color;
                    var _closure3_slot1 = r0;
                    r0 = r6.style;
                    var _closure3_slot2 = r0;
                    r5 = r6.animating;
                    var _closure3_slot3 = r5;
                    r0 = r6.hidesWhenStopped;
                    var _closure3_slot4 = r0;
                    r1 = _closure1_slot2;
                    r2 = r1.default;
                    r1 = _closure1_slot11;
                    r3 = undefined;
                    r1 = r2.bind(r3)(r6, r1);
                    var _closure3_slot5 = r1;
                    r1 = _closure1_slot10;
                    r2 = r1.jsx;
                    r0 = _closure1_slot9;
                    r1 = r0.default;
                    r0 = {};
                    r6 = function() { // Original name: initAnimation, environment: r4
                        r0 = {};
                        r1 = function(a0) { // Original name: plane, environment: r1
                            r4 = a0;
                            r0 = {};
                            r1 = new Array(1);
                            r1[0] = r4;
                            r0['values'] = r1;
                            r2 = _closure1_slot0;
                            r3 = _closure1_slot1;
                            r1 = 11;
                            r1 = r3[r1];
                            r3 = undefined;
                            r1 = r2.bind(r3)(r1);
                            r2 = r1.loop;
                            r1 = {};
                            r5 = 1200;
                            r1['duration'] = r5;
                            r1['value'] = r4;
                            r4 = [0, 50, 100];
                            r1['keyframes'] = r4;
                            r1 = r2.bind(r3)(r1);
                            r0['animation'] = r1;
                            return r0;
                        };
                        r0['plane'] = r1;
                        return r0;
                    };
                    r0['initAnimation'] = r6;
                    r0['animating'] = r5;
                    r4 = function(a0) { // Original name: children, environment: r4
                        _fun6132: for(var _fun6132_ip = 0; ; ) switch(_fun6132_ip) {
case 0:
                            r9 = a0;
                            r1 = _closure1_slot10;
                            r3 = r1.jsx;
                            r0 = _closure1_slot8;
                            r0 = r0.Animated;
                            r2 = r0.View;
                            r0 = global;
                            r5 = r0.Object;
                            r4 = r5.assign;
                            r1 = {};
                            r7 = {};
                            r6 = _closure3_slot0;
                            r7['width'] = r6;
                            r7['height'] = r6;
                            r6 = _closure3_slot1;
                            r7['backgroundColor'] = r6;
                            r8 = _closure3_slot3;
                            r10 = 1;
                            r6 = r10;
                            if(r8) { _fun6132_ip = 94; continue _fun6132 }
case 82:
                            r8 = _closure3_slot4;
                            r6 = r10;
                            if(!r8) { _fun6132_ip = 94; continue _fun6132 }
case 92:
                            r6 = 0;
case 94:
                            r7['opacity'] = r6;
                            r8 = {};
                            r10 = _closure3_slot0;
                            r6 = 3;
                            r6 = r10 * r6;
                            r8['perspective'] = r6;
                            r6 = new Array(3);
                            r6[0] = r8;
                            r8 = {};
                            r11 = r9.plane;
                            r10 = 0;
                            r13 = r11[r10];
                            r12 = r13.interpolate;
                            r11 = {};
                            r14 = [0, 50, 100];
                            r11['inputRange'] = r14;
                            r14 = ['0.1deg', '-179.9deg', '-179.9deg'];
                            r11['outputRange'] = r14;
                            r11 = r12.bind(r13)(r11);
                            r8['rotateX'] = r11;
                            r6[1] = r8;
                            r8 = {};
                            r9 = r9.plane;
                            r11 = r9[r10];
                            r10 = r11.interpolate;
                            r9 = {};
                            r12 = [0, 50, 100];
                            r9['inputRange'] = r12;
                            r12 = ['0.1deg', '0.1deg', '-179.9deg'];
                            r9['outputRange'] = r12;
                            r9 = r10.bind(r11)(r9);
                            r8['rotateY'] = r9;
                            r6[2] = r8;
                            r7['transform'] = r6;
                            r6 = new Array(2);
                            r6[0] = r7;
                            r7 = _closure3_slot2;
                            r6[1] = r7;
                            r1['style'] = r6;
                            r0 = _closure3_slot5;
                            r1 = r4.bind(r5)(r1, r0);
                            r0 = undefined;
                            r0 = r3.bind(r0)(r2, r1);
                            return r0;
                        }
                    };
                    r0['children'] = r4;
                    r0 = r2.bind(r3)(r1, r0);
                    return r0;
                };
                r4['value'] = r0;
                r0 = new Array(1);
                r0[0] = r4;
                r0 = r1.bind(r2)(r3, r0);
                return r0;
            };
            r2 = r2.bind(r0)(r5);
            r1['default'] = r2;
            r1 = 12;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r1.defaultProps;
            r2['defaultProps'] = r1;
            return r0;
        }
    };
    r6 = 564;
    r5 = [1, 203, 12, 13, 23, 25, 28, 119, 2, 565, 251, 566, 567];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun6133: for(var _fun6133_ip = 0; ; ) switch(_fun6133_ip) {
case 0:
            r6 = a1;
            r1 = a5;
            r7 = a6;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r2
                _fun6134: for(var _fun6134_ip = 0; ; ) switch(_fun6134_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun6134_ip = 104; continue _fun6134 }
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
                        _fun6135: for(var _fun6135_ip = 0; ; ) switch(_fun6135_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun6135_ip = 15; continue _fun6135 }
case 9:
                            r0 = _closure2_slot0;
                            _fun6135_ip = 19; continue _fun6135;
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
            r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r2
                _fun6136: for(var _fun6136_ip = 0; ; ) switch(_fun6136_ip) {
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
                    r0 = _closure1_slot8;
                    r0 = r0.bind(r2)();
                    if(r0) { _fun6136_ip = 61; continue _fun6136 }
case 48:
                    r0 = r8.apply;
                    r0 = r0.bind(r8)(r3, r5);
                    _fun6136_ip = 107; continue _fun6136;
case 61:
                    r6 = global;
                    r7 = r6.Reflect;
                    r6 = r7.construct;
                    if(r5) { _fun6136_ip = 81; continue _fun6136 }
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
            var _closure1_slot7 = r0;
            r0 = function() { // Original name: _isNativeReflectConstruct, environment: r2
                _fun6137: for(var _fun6137_ip = 0; ; ) switch(_fun6137_ip) {
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
                    _fun6137_ip = 74; continue _fun6137;
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
            r0 = 0;
            r3 = r7[r0];
            r0 = undefined;
            r5 = r6.bind(r0)(r3);
            r19 = global;
            r10 = r19.Object;
            r9 = r10.defineProperty;
            r8 = {};
            r3 = true;
            r8['value'] = r3;
            r4 = '__esModule';
            r4 = r9.bind(r10)(r1, r4, r8);
            r1['default'] = r0;
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
            r8 = r6.bind(r0)(r4);
            if(!r8) { _fun6133_ip = 223; continue _fun6133 }
case 209:
            r5 = r8.__esModule;
            r4 = r8;
            if(r5) { _fun6133_ip = 490; continue _fun6133 }
case 223:
            r18 = null;
            if(!(r18 !== r8)) { _fun6133_ip = 481; continue _fun6133 }
case 232:
            r9 = typeof r8;
            r5 = 'object';
            if(!(r5 !== r9)) { _fun6133_ip = 254; continue _fun6133 }
case 243:
            r5 = 'function';
            if(!(r5 === r9)) { _fun6133_ip = 481; continue _fun6133 }
case 254:
            r5 = _closure1_slot6;
            r9 = r5.bind(r0)(r0);
            if(!r9) { _fun6133_ip = 282; continue _fun6133 }
case 266:
            r5 = r9.has;
            r5 = r5.bind(r9)(r8);
            if(r5) { _fun6133_ip = 469; continue _fun6133 }
case 282:
            r5 = Object.create(r18);
            r10 = r19.Object;
            r17 = r10.defineProperty;
            if(!r17) { _fun6133_ip = 310; continue _fun6133 }
case 299:
            r10 = r19.Object;
            r17 = r10.getOwnPropertyDescriptor;
case 310:
            r15 = r8;
            r11 = 'default';
            r10 = undefined;
            for(r12 in r15)
case 327:
            {
case 336:
                r23 = r12;
                if(r11 === r23) { _fun6133_ip = 327; continue _fun6133 }
case 343:
                r20 = {};
                r21 = r20.hasOwnProperty;
                r20 = r21.call;
                r20 = r20.bind(r21)(r8, r23);
                if(!r20) { _fun6133_ip = 327; continue _fun6133 }
case 364:
                r20 = null;
                if(!r17) { _fun6133_ip = 386; continue _fun6133 }
case 369:
                r22 = r19.Object;
                r21 = r22.getOwnPropertyDescriptor;
                r20 = r21.bind(r22)(r8, r23);
case 386:
                if(!r20) { _fun6133_ip = 405; continue _fun6133 }
case 389:
                r21 = r20.get;
                if(r21) { _fun6133_ip = 418; continue _fun6133 }
case 397:
                r21 = r20.set;
                if(r21) { _fun6133_ip = 418; continue _fun6133 }
case 405:
                r21 = r8[r23];
                r5[r23] = r21;
                r10 = r20;
                _fun6133_ip = 327; continue _fun6133;
case 418:
                r22 = r19.Object;
                r21 = r22.defineProperty;
                r21 = r21.bind(r22)(r5, r23, r20);
                r10 = r20;
                _fun6133_ip = 327; continue _fun6133;
            }
case 441:
            r5['default'] = r8;
            r4 = r5;
            if(!r9) { _fun6133_ip = 490; continue _fun6133 }
case 453:
            r10 = r9.set;
            r10 = r10.bind(r9)(r8, r5);
            r4 = r5;
            _fun6133_ip = 490; continue _fun6133;
case 469:
            r5 = r9.get;
            r4 = r5.bind(r9)(r8);
            _fun6133_ip = 490; continue _fun6133;
case 481:
            r5 = {};
            r5['default'] = r8;
            r4 = r5;
case 490:
            r5 = 7;
            r5 = r7[r5];
            r5 = r6.bind(r0)(r5);
            var _closure1_slot5 = r5;
            r4 = r4.Component;
            r2 = function(a0) { // Environment: r2
                r3 = function(a0) { // Original name: AnimationContainer, environment: r5
                    _fun6141: for(var _fun6141_ip = 0; ; ) switch(_fun6141_ip) {
case 0:
                        r1 = a0;
                        r6 = this;
                        r0 = _closure1_slot0;
                        r0 = r0.default;
                        r5 = _closure2_slot0;
                        r10 = undefined;
                        r0 = r0.bind(r10)(r6, r5);
                        r4 = _closure1_slot7;
                        r0 = new Array(1);
                        r0[0] = r1;
                        r0 = r4.bind(r10)(r6, r5, r0);
                        var _closure3_slot0 = r0;
                        r4 = {};
                        r0['animatedValuesByKey'] = r4;
                        r4 = {};
                        r0['interpolationsByKey'] = r4;
                        r4 = function() { // Environment: r2
                            r0 = _closure3_slot0;
                            r1 = r0.animation;
                            r0 = r1.start;
                            r0 = r0.bind(r1)();
                            r0 = undefined;
                            return r0;
                        };
                        r0['startAnimation'] = r4;
                        r2 = function() { // Environment: r2
                            _fun6143: for(var _fun6143_ip = 0; ; ) switch(_fun6143_ip) {
case 0:
                                r0 = _closure3_slot0;
                                r2 = r0.animation;
                                r1 = r2.reset;
                                r1 = r1.bind(r2)();
                                r4 = r0.animatedValuesByKey;
                                r0 = 0;
                                for(r1 in r4)
case 39:
                                {
case 48:
                                    r8 = r1;
                                    r7 = _closure3_slot0;
                                    r7 = r7.animatedValuesByKey;
                                    r8 = r7[r8];
                                    r7 = r8.setValue;
                                    r7 = r7.bind(r8)(r0);
                                    _fun6143_ip = 39; continue _fun6143;
                                }
case 78:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r0['stopAnimation'] = r2;
                        r1 = r1.initAnimation;
                        r9 = r1.bind(r10)();
                        r2 = new Array(0);
                        r7 = r9;
                        r1 = 0;
                        for(r4 in r7)
case 122:
                        {
case 131:
                            r13 = r4;
                            r12 = r9[r13];
                            r11 = _closure1_slot5;
                            r11 = r11.Animated;
                            r11 = r11.Value;
                            r14 = r11.prototype;
                            r14 = Object.create(r14, {constructor: {value: r11}});
                            r18 = r14;
                            r17 = 0;
                            r11 = new r18[r11](r17, r16);
                            r11 = r11 instanceof Object ? r11 : r14;
                            r14 = r0.animatedValuesByKey;
                            r14[r13] = r11;
                            r11 = r12.bind(r10)(r11);
                            r14 = r11.animation;
                            r12 = r11.values;
                            r11 = r2.push;
                            r11 = r11.bind(r2)(r14);
                            r11 = r0.interpolationsByKey;
                            r11[r13] = r12;
                            _fun6141_ip = 122; continue _fun6141;
                        }
case 224:
                        r5 = r2.length;
                        r4 = 1;
                        if(!(r5 !== r4)) { _fun6141_ip = 264; continue _fun6141 }
case 236:
                        r3 = _closure1_slot5;
                        r4 = r3.Animated;
                        r3 = r4.parallel;
                        r3 = r3.bind(r4)(r2);
                        r0['animation'] = r3;
                        _fun6141_ip = 274; continue _fun6141;
case 264:
                        r1 = r2[r1];
                        r0['animation'] = r1;
case 274:
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
                r0 = 'componentDidMount';
                r4['key'] = r0;
                r0 = function() { // Original name: componentDidMount, environment: r5
                    _fun6144: for(var _fun6144_ip = 0; ; ) switch(_fun6144_ip) {
case 0:
                        r1 = this;
                        r0 = r1.props;
                        r0 = r0.animating;
                        if(!r0) { _fun6144_ip = 25; continue _fun6144 }
case 15:
                        r0 = r1.startAnimation;
                        r0 = r0.bind(r1)();
case 25:
                        r0 = undefined;
                        return r0;
                    }
                };
                r4['value'] = r0;
                r0 = new Array(4);
                r0[0] = r4;
                r4 = {};
                r6 = 'componentDidUpdate';
                r4['key'] = r6;
                r6 = function(a0) { // Original name: componentDidUpdate, environment: r5
                    _fun6145: for(var _fun6145_ip = 0; ; ) switch(_fun6145_ip) {
case 0:
                        r1 = this;
                        r0 = r1.props;
                        r0 = r0.animating;
                        r2 = a0;
                        r2 = r2.animating;
                        if(!(r0 !== r2)) { _fun6145_ip = 49; continue _fun6145 }
case 24:
                        if(r0) { _fun6145_ip = 39; continue _fun6145 }
case 27:
                        r0 = r1.stopAnimation;
                        r0 = r0.bind(r1)();
                        _fun6145_ip = 49; continue _fun6145;
case 39:
                        r0 = r1.startAnimation;
                        r0 = r0.bind(r1)();
case 49:
                        r0 = undefined;
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[1] = r4;
                r4 = {};
                r6 = 'componentWillUnmount';
                r4['key'] = r6;
                r6 = function() { // Original name: componentWillUnmount, environment: r5
                    r0 = this;
                    r1 = r0.animation;
                    r0 = r1.stop;
                    r0 = r0.bind(r1)();
                    r0 = undefined;
                    return r0;
                };
                r4['value'] = r6;
                r0[2] = r4;
                r4 = {};
                r6 = 'render';
                r4['key'] = r6;
                r5 = function() { // Original name: render, environment: r5
                    _fun6147: for(var _fun6147_ip = 0; ; ) switch(_fun6147_ip) {
case 0:
                        r1 = this;
                        r0 = r1.props;
                        r3 = r0.children;
                        r0 = null;
                        if(!r3) { _fun6147_ip = 30; continue _fun6147 }
case 17:
                        r2 = r1.interpolationsByKey;
                        r1 = undefined;
                        r0 = r3.bind(r1)(r2);
case 30:
                        return r0;
                    }
                };
                r4['value'] = r5;
                r0[3] = r4;
                r0 = r1.bind(r2)(r3, r0);
                return r0;
            };
            r2 = r2.bind(r0)(r4);
            r1['default'] = r2;
            r1 = {};
            r1['animating'] = r3;
            r2['defaultProps'] = r1;
            return r0;
        }
    };
    r6 = 565;
    r5 = [1, 12, 13, 23, 25, 28, 119, 2];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r1 = a5;
        r0 = function(a0, a1) { // Original name: createKeyframeEasingFunction, environment: r2
            r1 = a0;
            var _closure2_slot0 = r1;
            r1 = a1;
            var _closure2_slot1 = r1;
            r0 = function(a0) { // Environment: r0
                _fun6150: for(var _fun6150_ip = 0; ; ) switch(_fun6150_ip) {
case 0:
                    r0 = a0;
                    r1 = _closure2_slot0;
                    r1 = r1.length;
                    r7 = 1;
                    r1 = r7 < r1;
                    r4 = 100;
                    r5 = r7;
                    if(!r1) { _fun6150_ip = 66; continue _fun6150 }
case 31:
                    r1 = _closure2_slot0;
                    r1 = r1[r5];
                    r1 = r1 / r4;
                    r2 = r5;
                    if(!(!(r0 < r1))) { _fun6150_ip = 68; continue _fun6150 }
case 50:
                    r5 = r2 + 1;
                    r1 = _closure2_slot0;
                    r1 = r1.length;
                    if(r5 < r1) { _fun6150_ip = 31; continue _fun6150 }
case 66:
                    return r0;
case 68:
                    r6 = _closure2_slot0;
                    r1 = r2 - r7;
                    r1 = r6[r1];
                    r1 = r1 / r4;
                    r5 = r6[r2];
                    r2 = r2 - r7;
                    r2 = r6[r2];
                    r2 = r5 - r2;
                    r2 = r2 / r4;
                    r4 = _closure2_slot1;
                    r0 = r0 - r1;
                    r3 = undefined;
                    r0 = r0 / r2;
                    r0 = r4.bind(r3)(r0);
                    r0 = r0 * r2;
                    r0 = r1 + r0;
                    return r0;
                }
            };
            return r0;
        };
        var _closure1_slot1 = r0;
        r0 = function(a0) { // Original name: loop, environment: r2
            _fun6151: for(var _fun6151_ip = 0; ; ) switch(_fun6151_ip) {
case 0:
                r0 = a0;
                r6 = r0.duration;
                r4 = r0.value;
                r9 = r0.keyframes;
                r8 = undefined;
                if(!(r9 === r8)) { _fun6151_ip = 33; continue _fun6151 }
case 25:
                r9 = [0, 100];
case 33:
                r7 = r0.easing;
                if(!(r7 === r8)) { _fun6151_ip = 91; continue _fun6151 }
case 42:
                r1 = _closure1_slot0;
                r11 = r1.Easing;
                r10 = r11.bezier;
                r15 = 0.42;
                r14 = 0;
                r13 = 0.58;
                r12 = 1;
                r16 = r11;
                r7 = r16[r10](r15, r14, r13, r12, r11);
case 91:
                r0 = r0.toValue;
                r5 = 100;
                if(!(r0 !== r8)) { _fun6151_ip = 106; continue _fun6151 }
case 103:
                r5 = r0;
case 106:
                r1 = _closure1_slot0;
                r3 = r1.Animated;
                r2 = r3.timing;
                r1 = {};
                r1['duration'] = r6;
                r6 = _closure1_slot1;
                r6 = r6.bind(r8)(r9, r7);
                r1['easing'] = r6;
                r1['toValue'] = r5;
                r5 = _closure1_slot0;
                r5 = r5.Platform;
                r6 = r5.OS;
                r5 = 'web';
                r5 = r6 !== r5;
                r1['useNativeDriver'] = r5;
                r2 = r2.bind(r3)(r4, r1);
                r0 = _closure1_slot0;
                r1 = r0.Animated;
                r0 = r1.loop;
                r0 = r0.bind(r1)(r2);
                return r0;
            }
        };
        var _closure1_slot2 = r0;
        r3 = global;
        r6 = r3.Object;
        r5 = r6.defineProperty;
        r4 = {};
        r3 = true;
        r4['value'] = r3;
        r3 = '__esModule';
        r3 = r5.bind(r6)(r1, r3, r4);
        r1['loop'] = r0;
        r0 = function(a0, a1, a2) { // Original name: stagger, environment: r2
            _fun6152: for(var _fun6152_ip = 0; ; ) switch(_fun6152_ip) {
case 0:
                r4 = a0;
                r5 = a1;
                r11 = a2;
                r10 = r11.duration;
                var _closure2_slot0 = r10;
                r8 = r11.value;
                r6 = r11.keyframes;
                r13 = undefined;
                if(!(r6 === r13)) { _fun6152_ip = 45; continue _fun6152 }
case 37:
                r6 = [0, 100];
case 45:
                var _closure2_slot1 = r6;
                r3 = r11.easing;
                if(!(r3 === r13)) { _fun6152_ip = 107; continue _fun6152 }
case 58:
                r0 = _closure1_slot0;
                r14 = r0.Easing;
                r12 = r14.bezier;
                r21 = 0.42;
                r20 = 0;
                r19 = 0.58;
                r18 = 1;
                r22 = r14;
                r3 = r22[r12](r21, r20, r19, r18, r17);
case 107:
                var _closure2_slot2 = r3;
                r0 = r11.toValue;
                r12 = 100;
                r9 = r12;
                if(!(r0 !== r13)) { _fun6152_ip = 129; continue _fun6152 }
case 126:
                r9 = r0;
case 129:
                var _closure2_slot3 = r9;
                r1 = _closure1_slot1;
                r3 = r1.bind(r13)(r6, r3);
                r1 = _closure1_slot0;
                r1 = r1.Platform;
                r6 = r1.OS;
                r1 = 'web';
                if(!(r6 !== r1)) { _fun6152_ip = 463; continue _fun6152 }
case 171:
                r1 = _closure1_slot0;
                r7 = r1.Animated;
                r6 = r7.timing;
                r1 = {};
                r1['duration'] = r10;
                r1['easing'] = r3;
                r1['toValue'] = r9;
                r9 = true;
                r1['useNativeDriver'] = r9;
                r7 = r6.bind(r7)(r8, r1);
                r1 = _closure1_slot0;
                r6 = r1.Animated;
                r1 = r6.loop;
                r6 = r1.bind(r6)(r7);
                r10 = new Array(0);
                r9 = global;
                r8 = r9.Math;
                r7 = r8.round;
                r14 = r11.duration;
                r1 = 16.666666666666668;
                r1 = r14 / r1;
                r8 = r7.bind(r8)(r1);
                r7 = 0;
                r14 = r7 < r8;
                r1 = 0;
                if(!r14) { _fun6152_ip = 314; continue _fun6152 }
case 284:
                r15 = r10.push;
                r14 = r1 / r8;
                r14 = r3.bind(r13)(r14);
                r14 = r14 * r12;
                r14 = r15.bind(r10)(r14);
                r1 = r1 + 1;
                if(r1 < r8) { _fun6152_ip = 284; continue _fun6152 }
case 314:
                r3 = new Array(0);
                r1 = 1;
                r1 = r5 - r1;
                if(!(r1 >= r7)) { _fun6152_ip = 449; continue _fun6152 }
case 329:
                r14 = r9.Math;
                r13 = r14.round;
                r15 = r1 * r4;
                r12 = r11.duration;
                r12 = r15 / r12;
                r12 = r12 * r8;
                r15 = r13.bind(r14)(r12);
                r12 = r10.slice;
                r14 = r12.bind(r10)(r15);
                r13 = r14.concat;
                r12 = r10.slice;
                r12 = r12.bind(r10)(r7, r15);
                r16 = r13.bind(r14)(r12);
                r12 = r1;
                if(!(r12 !== r7)) { _fun6152_ip = 427; continue _fun6152 }
case 400:
                r15 = r11.value;
                r14 = r15.interpolate;
                r13 = {};
                r13['inputRange'] = r10;
                r13['outputRange'] = r16;
                r14 = r14.bind(r15)(r13);
                _fun6152_ip = 432; continue _fun6152;
case 427:
                r14 = r11.value;
case 432:
                r13 = r3.push;
                r13 = r13.bind(r3)(r14);
                r1 = r12 - 1;
                if(r1 >= r7) { _fun6152_ip = 329; continue _fun6152 }
case 449:
                r1 = {};
                r1['animation'] = r6;
                r1['values'] = r3;
                return r1;
case 463:
                r1 = global;
                r1 = r1.Array;
                r3 = r1.prototype;
                r3 = Object.create(r3, {constructor: {value: r1}});
                r22 = r3;
                r21 = r5;
                r1 = new r22[r1](r21, r20);
                r5 = r1 instanceof Object ? r1 : r3;
                r3 = r5.fill;
                r1 = null;
                r5 = r3.bind(r5)(r1);
                r3 = r5.map;
                r1 = function(a0) { // Environment: r2
                    r0 = _closure1_slot0;
                    r0 = r0.Animated;
                    r2 = r0.Value;
                    r0 = r2.prototype;
                    r1 = Object.create(r0, {constructor: {value: r2}});
                    r3 = 0;
                    r4 = r1;
                    r0 = new r4[r2](r3, r2);
                    r0 = r0 instanceof Object ? r0 : r1;
                    return r0;
                };
                r1 = r3.bind(r5)(r1);
                r3 = r1.map;
                r2 = function(a0) { // Environment: r2
                    r2 = _closure1_slot2;
                    r1 = {};
                    r0 = a0;
                    r1['value'] = r0;
                    r3 = _closure2_slot0;
                    r1['duration'] = r3;
                    r3 = _closure2_slot2;
                    r1['easing'] = r3;
                    r3 = _closure2_slot3;
                    r1['toValue'] = r3;
                    r0 = _closure2_slot1;
                    r1['keyframes'] = r0;
                    r0 = undefined;
                    r0 = r2.bind(r0)(r1);
                    return r0;
                };
                r3 = r3.bind(r1)(r2);
                r0 = _closure1_slot0;
                r2 = r0.Animated;
                r0 = r2.stagger;
                r2 = r0.bind(r2)(r4, r3);
                r0 = {};
                r0['animation'] = r2;
                r0['values'] = r1;
                return r0;
            }
        };
        r1['stagger'] = r0;
        r1 = a6;
        r0 = 0;
        r3 = r1[r0];
        r1 = a1;
        r0 = undefined;
        r1 = r1.bind(r0)(r3);
        var _closure1_slot0 = r1;
        return r0;
    };
    r6 = 566;
    r5 = [2];
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
        r2['defaultProps'] = r0;
        r1 = {'size': 48, 'color': '#000', 'animating': true, 'hidesWhenStopped': true};
        r2['defaultProps'] = r1;
        return r0;
    };
    r6 = 567;
    r5 = new Array(0);
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun6156: for(var _fun6156_ip = 0; ; ) switch(_fun6156_ip) {
case 0:
            r3 = a1;
            r1 = a5;
            r4 = a6;
            var _closure1_slot0 = r3;
            var _closure1_slot1 = r4;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r2
                _fun6157: for(var _fun6157_ip = 0; ; ) switch(_fun6157_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun6157_ip = 104; continue _fun6157 }
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
                        _fun6158: for(var _fun6158_ip = 0; ; ) switch(_fun6158_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun6158_ip = 15; continue _fun6158 }
case 9:
                            r0 = _closure2_slot0;
                            _fun6158_ip = 19; continue _fun6158;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot12 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot12 = r0;
            r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r2
                _fun6159: for(var _fun6159_ip = 0; ; ) switch(_fun6159_ip) {
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
                    r0 = _closure1_slot14;
                    r0 = r0.bind(r2)();
                    if(r0) { _fun6159_ip = 61; continue _fun6159 }
case 48:
                    r0 = r8.apply;
                    r0 = r0.bind(r8)(r3, r5);
                    _fun6159_ip = 107; continue _fun6159;
case 61:
                    r6 = global;
                    r7 = r6.Reflect;
                    r6 = r7.construct;
                    if(r5) { _fun6159_ip = 81; continue _fun6159 }
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
            var _closure1_slot13 = r0;
            r0 = function() { // Original name: _isNativeReflectConstruct, environment: r2
                _fun6160: for(var _fun6160_ip = 0; ; ) switch(_fun6160_ip) {
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
                    _fun6160_ip = 74; continue _fun6160;
case 72: // catch_target0
                    CatchBlockStart(arg_register=1);
case 74:
                    r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                        r0 = _closure2_slot0;
                        r0 = !r0;
                        r0 = !r0;
                        return r0;
                    };
                    _closure1_slot14 = r1;
                    r0 = undefined;
                    r0 = r1.bind(r0)();
                    return r0;
                }
            };
            var _closure1_slot14 = r0;
            r0 = 0;
            r5 = r4[r0];
            r0 = undefined;
            r7 = r3.bind(r0)(r5);
            r19 = global;
            r9 = r19.Object;
            r8 = r9.defineProperty;
            r6 = {};
            r5 = true;
            r6['value'] = r5;
            r5 = '__esModule';
            r5 = r8.bind(r9)(r1, r5, r6);
            r1['default'] = r0;
            r5 = 1;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot2 = r5;
            r5 = 2;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot3 = r5;
            r5 = 3;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot4 = r5;
            r5 = 4;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot5 = r5;
            r5 = 5;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot6 = r5;
            r5 = 6;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot7 = r5;
            r5 = 7;
            r5 = r4[r5];
            r8 = r3.bind(r0)(r5);
            if(!r8) { _fun6156_ip = 252; continue _fun6156 }
case 238:
            r6 = r8.__esModule;
            r5 = r8;
            if(r6) { _fun6156_ip = 519; continue _fun6156 }
case 252:
            r18 = null;
            if(!(r18 !== r8)) { _fun6156_ip = 510; continue _fun6156 }
case 261:
            r9 = typeof r8;
            r6 = 'object';
            if(!(r6 !== r9)) { _fun6156_ip = 283; continue _fun6156 }
case 272:
            r6 = 'function';
            if(!(r6 === r9)) { _fun6156_ip = 510; continue _fun6156 }
case 283:
            r6 = _closure1_slot12;
            r9 = r6.bind(r0)(r0);
            if(!r9) { _fun6156_ip = 311; continue _fun6156 }
case 295:
            r6 = r9.has;
            r6 = r6.bind(r9)(r8);
            if(r6) { _fun6156_ip = 498; continue _fun6156 }
case 311:
            r6 = Object.create(r18);
            r10 = r19.Object;
            r17 = r10.defineProperty;
            if(!r17) { _fun6156_ip = 339; continue _fun6156 }
case 328:
            r10 = r19.Object;
            r17 = r10.getOwnPropertyDescriptor;
case 339:
            r15 = r8;
            r11 = 'default';
            r10 = undefined;
            for(r12 in r15)
case 356:
            {
case 365:
                r23 = r12;
                if(r11 === r23) { _fun6156_ip = 356; continue _fun6156 }
case 372:
                r20 = {};
                r21 = r20.hasOwnProperty;
                r20 = r21.call;
                r20 = r20.bind(r21)(r8, r23);
                if(!r20) { _fun6156_ip = 356; continue _fun6156 }
case 393:
                r20 = null;
                if(!r17) { _fun6156_ip = 415; continue _fun6156 }
case 398:
                r22 = r19.Object;
                r21 = r22.getOwnPropertyDescriptor;
                r20 = r21.bind(r22)(r8, r23);
case 415:
                if(!r20) { _fun6156_ip = 434; continue _fun6156 }
case 418:
                r21 = r20.get;
                if(r21) { _fun6156_ip = 447; continue _fun6156 }
case 426:
                r21 = r20.set;
                if(r21) { _fun6156_ip = 447; continue _fun6156 }
case 434:
                r21 = r8[r23];
                r6[r23] = r21;
                r10 = r20;
                _fun6156_ip = 356; continue _fun6156;
case 447:
                r22 = r19.Object;
                r21 = r22.defineProperty;
                r21 = r21.bind(r22)(r6, r23, r20);
                r10 = r20;
                _fun6156_ip = 356; continue _fun6156;
            }
case 470:
            r6['default'] = r8;
            r5 = r6;
            if(!r9) { _fun6156_ip = 519; continue _fun6156 }
case 482:
            r10 = r9.set;
            r10 = r10.bind(r9)(r8, r6);
            r5 = r6;
            _fun6156_ip = 519; continue _fun6156;
case 498:
            r6 = r9.get;
            r5 = r6.bind(r9)(r8);
            _fun6156_ip = 519; continue _fun6156;
case 510:
            r6 = {};
            r6['default'] = r8;
            r5 = r6;
case 519:
            r6 = 8;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            var _closure1_slot8 = r6;
            r6 = 9;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            r6 = r7.bind(r0)(r6);
            var _closure1_slot9 = r6;
            r6 = 10;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            var _closure1_slot10 = r6;
            r6 = ['size', 'color', 'style', 'animating', 'hidesWhenStopped'];
            var _closure1_slot11 = r6;
            r5 = r5.Component;
            r2 = function(a0) { // Environment: r2
                r3 = function() { // Original name: Bounce, environment: r0
                    r4 = this;
                    r3 = undefined;
                    r0 = undefined;
                    r2 = _closure1_slot3;
                    r5 = r2.default;
                    r2 = _closure2_slot0;
                    r5 = r5.bind(r3)(r4, r2);
                    r1 = _closure1_slot13;
                    r0 = arguments;
                    r0 = r1.bind(r3)(r4, r2, r0);
                    return r0;
                };
                var _closure2_slot0 = r3;
                r2 = _closure1_slot7;
                r5 = r2.default;
                r2 = undefined;
                r4 = a0;
                r4 = r5.bind(r2)(r3, r4);
                r1 = _closure1_slot4;
                r1 = r1.default;
                r4 = {};
                r5 = 'render';
                r4['key'] = r5;
                r0 = function() { // Original name: render, environment: r0
                    r0 = this;
                    r8 = r0.props;
                    r6 = r8.size;
                    var _closure3_slot0 = r6;
                    r2 = r8.color;
                    r0 = r8.style;
                    var _closure3_slot1 = r0;
                    r5 = r8.animating;
                    var _closure3_slot2 = r5;
                    r0 = r8.hidesWhenStopped;
                    var _closure3_slot3 = r0;
                    r1 = _closure1_slot2;
                    r7 = r1.default;
                    r1 = _closure1_slot11;
                    r3 = undefined;
                    r1 = r7.bind(r3)(r8, r1);
                    var _closure3_slot4 = r1;
                    r1 = {};
                    r7 = 'absolute';
                    r1['position'] = r7;
                    r1['width'] = r6;
                    r1['height'] = r6;
                    r1['backgroundColor'] = r2;
                    r2 = 2;
                    r2 = r6 / r2;
                    r1['borderRadius'] = r2;
                    r2 = 0.6;
                    r1['opacity'] = r2;
                    var _closure3_slot5 = r1;
                    r1 = _closure1_slot10;
                    r2 = r1.jsx;
                    r0 = _closure1_slot9;
                    r1 = r0.default;
                    r0 = {};
                    r6 = function() { // Original name: initAnimation, environment: r4
                        r0 = {};
                        r1 = function(a0) { // Original name: bounce, environment: r1
                            r1 = _closure1_slot0;
                            r2 = _closure1_slot1;
                            r0 = 11;
                            r0 = r2[r0];
                            r4 = undefined;
                            r0 = r1.bind(r4)(r0);
                            r3 = r0.stagger;
                            r2 = {};
                            r0 = 2000;
                            r2['duration'] = r0;
                            r0 = a0;
                            r2['value'] = r0;
                            r0 = [0, 45, 55, 100];
                            r2['keyframes'] = r0;
                            r1 = 1000;
                            r0 = 2;
                            r0 = r3.bind(r4)(r1, r0, r2);
                            return r0;
                        };
                        r0['bounce'] = r1;
                        return r0;
                    };
                    r0['initAnimation'] = r6;
                    r0['animating'] = r5;
                    r4 = function(a0) { // Original name: children, environment: r4
                        _fun6168: for(var _fun6168_ip = 0; ; ) switch(_fun6168_ip) {
case 0:
                            r1 = _closure1_slot10;
                            r3 = r1.jsx;
                            r0 = _closure1_slot8;
                            r2 = r0.View;
                            r0 = global;
                            r6 = r0.Object;
                            r5 = r6.assign;
                            r4 = {};
                            r7 = {};
                            r1 = _closure3_slot0;
                            r7['width'] = r1;
                            r7['height'] = r1;
                            r8 = _closure3_slot2;
                            r9 = 1;
                            r1 = r9;
                            if(r8) { _fun6168_ip = 78; continue _fun6168 }
case 66:
                            r8 = _closure3_slot3;
                            r1 = r9;
                            if(!r8) { _fun6168_ip = 78; continue _fun6168 }
case 76:
                            r1 = 0;
case 78:
                            r7['opacity'] = r1;
                            r1 = new Array(2);
                            r1[0] = r7;
                            r7 = _closure3_slot1;
                            r1[1] = r7;
                            r4['style'] = r1;
                            r1 = _closure3_slot4;
                            r0 = {};
                            r7 = a0;
                            r9 = r7.bounce;
                            r8 = r9.map;
                            r7 = function(a0, a1) { // Environment: r7
                                r8 = a0;
                                r1 = _closure1_slot10;
                                r4 = r1.jsx;
                                r0 = _closure1_slot8;
                                r0 = r0.Animated;
                                r3 = r0.View;
                                r2 = {};
                                r1 = _closure3_slot5;
                                r0 = new Array(2);
                                r0[0] = r1;
                                r1 = {};
                                r6 = {};
                                r7 = r8.interpolate;
                                r5 = {};
                                r9 = [0, 45, 55, 100];
                                r5['inputRange'] = r9;
                                r9 = [0.01, 1, 1, 0.01];
                                r5['outputRange'] = r9;
                                r5 = r7.bind(r8)(r5);
                                r6['scale'] = r5;
                                r5 = new Array(1);
                                r5[0] = r6;
                                r1['transform'] = r5;
                                r0[1] = r1;
                                r2['style'] = r0;
                                r1 = undefined;
                                r0 = a1;
                                r0 = r4.bind(r1)(r3, r2, r0);
                                return r0;
                            };
                            r7 = r8.bind(r9)(r7);
                            r0['children'] = r7;
                            r1 = r5.bind(r6)(r4, r1, r0);
                            r0 = undefined;
                            r0 = r3.bind(r0)(r2, r1);
                            return r0;
                        }
                    };
                    r0['children'] = r4;
                    r0 = r2.bind(r3)(r1, r0);
                    return r0;
                };
                r4['value'] = r0;
                r0 = new Array(1);
                r0[0] = r4;
                r0 = r1.bind(r2)(r3, r0);
                return r0;
            };
            r2 = r2.bind(r0)(r5);
            r1['default'] = r2;
            r1 = 12;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r1.defaultProps;
            r2['defaultProps'] = r1;
            return r0;
        }
    };
    r6 = 568;
    r5 = [1, 203, 12, 13, 23, 25, 28, 119, 2, 565, 251, 566, 567];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun6170: for(var _fun6170_ip = 0; ; ) switch(_fun6170_ip) {
case 0:
            r3 = a1;
            r1 = a5;
            r4 = a6;
            var _closure1_slot0 = r3;
            var _closure1_slot1 = r4;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r2
                _fun6171: for(var _fun6171_ip = 0; ; ) switch(_fun6171_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun6171_ip = 104; continue _fun6171 }
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
                        _fun6172: for(var _fun6172_ip = 0; ; ) switch(_fun6172_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun6172_ip = 15; continue _fun6172 }
case 9:
                            r0 = _closure2_slot0;
                            _fun6172_ip = 19; continue _fun6172;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot12 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot12 = r0;
            r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r2
                _fun6173: for(var _fun6173_ip = 0; ; ) switch(_fun6173_ip) {
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
                    r0 = _closure1_slot14;
                    r0 = r0.bind(r2)();
                    if(r0) { _fun6173_ip = 61; continue _fun6173 }
case 48:
                    r0 = r8.apply;
                    r0 = r0.bind(r8)(r3, r5);
                    _fun6173_ip = 107; continue _fun6173;
case 61:
                    r6 = global;
                    r7 = r6.Reflect;
                    r6 = r7.construct;
                    if(r5) { _fun6173_ip = 81; continue _fun6173 }
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
            var _closure1_slot13 = r0;
            r0 = function() { // Original name: _isNativeReflectConstruct, environment: r2
                _fun6174: for(var _fun6174_ip = 0; ; ) switch(_fun6174_ip) {
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
                    _fun6174_ip = 74; continue _fun6174;
case 72: // catch_target0
                    CatchBlockStart(arg_register=1);
case 74:
                    r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                        r0 = _closure2_slot0;
                        r0 = !r0;
                        r0 = !r0;
                        return r0;
                    };
                    _closure1_slot14 = r1;
                    r0 = undefined;
                    r0 = r1.bind(r0)();
                    return r0;
                }
            };
            var _closure1_slot14 = r0;
            r0 = 0;
            r5 = r4[r0];
            r0 = undefined;
            r7 = r3.bind(r0)(r5);
            r19 = global;
            r9 = r19.Object;
            r8 = r9.defineProperty;
            r6 = {};
            r5 = true;
            r6['value'] = r5;
            r5 = '__esModule';
            r5 = r8.bind(r9)(r1, r5, r6);
            r1['default'] = r0;
            r5 = 1;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot2 = r5;
            r5 = 2;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot3 = r5;
            r5 = 3;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot4 = r5;
            r5 = 4;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot5 = r5;
            r5 = 5;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot6 = r5;
            r5 = 6;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot7 = r5;
            r5 = 7;
            r5 = r4[r5];
            r8 = r3.bind(r0)(r5);
            if(!r8) { _fun6170_ip = 252; continue _fun6170 }
case 238:
            r6 = r8.__esModule;
            r5 = r8;
            if(r6) { _fun6170_ip = 519; continue _fun6170 }
case 252:
            r18 = null;
            if(!(r18 !== r8)) { _fun6170_ip = 510; continue _fun6170 }
case 261:
            r9 = typeof r8;
            r6 = 'object';
            if(!(r6 !== r9)) { _fun6170_ip = 283; continue _fun6170 }
case 272:
            r6 = 'function';
            if(!(r6 === r9)) { _fun6170_ip = 510; continue _fun6170 }
case 283:
            r6 = _closure1_slot12;
            r9 = r6.bind(r0)(r0);
            if(!r9) { _fun6170_ip = 311; continue _fun6170 }
case 295:
            r6 = r9.has;
            r6 = r6.bind(r9)(r8);
            if(r6) { _fun6170_ip = 498; continue _fun6170 }
case 311:
            r6 = Object.create(r18);
            r10 = r19.Object;
            r17 = r10.defineProperty;
            if(!r17) { _fun6170_ip = 339; continue _fun6170 }
case 328:
            r10 = r19.Object;
            r17 = r10.getOwnPropertyDescriptor;
case 339:
            r15 = r8;
            r11 = 'default';
            r10 = undefined;
            for(r12 in r15)
case 356:
            {
case 365:
                r23 = r12;
                if(r11 === r23) { _fun6170_ip = 356; continue _fun6170 }
case 372:
                r20 = {};
                r21 = r20.hasOwnProperty;
                r20 = r21.call;
                r20 = r20.bind(r21)(r8, r23);
                if(!r20) { _fun6170_ip = 356; continue _fun6170 }
case 393:
                r20 = null;
                if(!r17) { _fun6170_ip = 415; continue _fun6170 }
case 398:
                r22 = r19.Object;
                r21 = r22.getOwnPropertyDescriptor;
                r20 = r21.bind(r22)(r8, r23);
case 415:
                if(!r20) { _fun6170_ip = 434; continue _fun6170 }
case 418:
                r21 = r20.get;
                if(r21) { _fun6170_ip = 447; continue _fun6170 }
case 426:
                r21 = r20.set;
                if(r21) { _fun6170_ip = 447; continue _fun6170 }
case 434:
                r21 = r8[r23];
                r6[r23] = r21;
                r10 = r20;
                _fun6170_ip = 356; continue _fun6170;
case 447:
                r22 = r19.Object;
                r21 = r22.defineProperty;
                r21 = r21.bind(r22)(r6, r23, r20);
                r10 = r20;
                _fun6170_ip = 356; continue _fun6170;
            }
case 470:
            r6['default'] = r8;
            r5 = r6;
            if(!r9) { _fun6170_ip = 519; continue _fun6170 }
case 482:
            r10 = r9.set;
            r10 = r10.bind(r9)(r8, r6);
            r5 = r6;
            _fun6170_ip = 519; continue _fun6170;
case 498:
            r6 = r9.get;
            r5 = r6.bind(r9)(r8);
            _fun6170_ip = 519; continue _fun6170;
case 510:
            r6 = {};
            r6['default'] = r8;
            r5 = r6;
case 519:
            r6 = 8;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            var _closure1_slot8 = r6;
            r6 = 9;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            r6 = r7.bind(r0)(r6);
            var _closure1_slot9 = r6;
            r6 = 10;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            var _closure1_slot10 = r6;
            r6 = ['size', 'color', 'style', 'animating', 'hidesWhenStopped'];
            var _closure1_slot11 = r6;
            r5 = r5.Component;
            r2 = function(a0) { // Environment: r2
                r3 = function() { // Original name: Pulse, environment: r0
                    r4 = this;
                    r3 = undefined;
                    r0 = undefined;
                    r2 = _closure1_slot3;
                    r5 = r2.default;
                    r2 = _closure2_slot0;
                    r5 = r5.bind(r3)(r4, r2);
                    r1 = _closure1_slot13;
                    r0 = arguments;
                    r0 = r1.bind(r3)(r4, r2, r0);
                    return r0;
                };
                var _closure2_slot0 = r3;
                r2 = _closure1_slot7;
                r5 = r2.default;
                r2 = undefined;
                r4 = a0;
                r4 = r5.bind(r2)(r3, r4);
                r1 = _closure1_slot4;
                r1 = r1.default;
                r4 = {};
                r5 = 'render';
                r4['key'] = r5;
                r0 = function() { // Original name: render, environment: r0
                    r0 = this;
                    r6 = r0.props;
                    r0 = r6.size;
                    var _closure3_slot0 = r0;
                    r0 = r6.color;
                    var _closure3_slot1 = r0;
                    r0 = r6.style;
                    var _closure3_slot2 = r0;
                    r5 = r6.animating;
                    var _closure3_slot3 = r5;
                    r0 = r6.hidesWhenStopped;
                    var _closure3_slot4 = r0;
                    r1 = _closure1_slot2;
                    r2 = r1.default;
                    r1 = _closure1_slot11;
                    r3 = undefined;
                    r1 = r2.bind(r3)(r6, r1);
                    var _closure3_slot5 = r1;
                    r1 = _closure1_slot10;
                    r2 = r1.jsx;
                    r0 = _closure1_slot9;
                    r1 = r0.default;
                    r0 = {};
                    r6 = function() { // Original name: initAnimation, environment: r4
                        r0 = {};
                        r1 = function(a0) { // Original name: pulse, environment: r1
                            r5 = a0;
                            r0 = {};
                            r1 = new Array(1);
                            r1[0] = r5;
                            r0['values'] = r1;
                            r2 = _closure1_slot0;
                            r3 = _closure1_slot1;
                            r1 = 11;
                            r1 = r3[r1];
                            r3 = undefined;
                            r1 = r2.bind(r3)(r1);
                            r2 = r1.loop;
                            r1 = {};
                            r6 = 1200;
                            r1['duration'] = r6;
                            r1['value'] = r5;
                            r4 = _closure1_slot8;
                            r9 = r4.Easing;
                            r8 = r9.bezier;
                            r13 = 0.455;
                            r12 = 0.03;
                            r11 = 0.515;
                            r10 = 0.955;
                            r14 = r9;
                            r4 = r14[r8](r13, r12, r11, r10, r9);
                            r1['easing'] = r4;
                            r1 = r2.bind(r3)(r1);
                            r0['animation'] = r1;
                            return r0;
                        };
                        r0['pulse'] = r1;
                        return r0;
                    };
                    r0['initAnimation'] = r6;
                    r0['animating'] = r5;
                    r4 = function(a0) { // Original name: children, environment: r4
                        _fun6182: for(var _fun6182_ip = 0; ; ) switch(_fun6182_ip) {
case 0:
                            r6 = a0;
                            r1 = _closure1_slot10;
                            r3 = r1.jsx;
                            r0 = _closure1_slot8;
                            r0 = r0.Animated;
                            r2 = r0.View;
                            r0 = global;
                            r5 = r0.Object;
                            r4 = r5.assign;
                            r1 = {};
                            r7 = {};
                            r9 = _closure3_slot0;
                            r7['width'] = r9;
                            r7['height'] = r9;
                            r8 = _closure3_slot1;
                            r7['backgroundColor'] = r8;
                            r8 = 2;
                            r8 = r9 / r8;
                            r7['borderRadius'] = r8;
                            r8 = _closure3_slot3;
                            if(r8) { _fun6182_ip = 96; continue _fun6182 }
case 87:
                            r9 = _closure3_slot4;
                            r8 = 0;
                            if(r9) { _fun6182_ip = 144; continue _fun6182 }
case 96:
                            r10 = r6.pulse;
                            r9 = 0;
                            r11 = r10[r9];
                            r10 = r11.interpolate;
                            r9 = {};
                            r12 = [0, 100];
                            r9['inputRange'] = r12;
                            r12 = [1, 0];
                            r9['outputRange'] = r12;
                            r8 = r10.bind(r11)(r9);
case 144:
                            r7['opacity'] = r8;
                            r8 = {};
                            r9 = r6.pulse;
                            r6 = 0;
                            r10 = r9[r6];
                            r9 = r10.interpolate;
                            r6 = {};
                            r11 = [0, 100];
                            r6['inputRange'] = r11;
                            r11 = [0.01, 1];
                            r6['outputRange'] = r11;
                            r6 = r9.bind(r10)(r6);
                            r8['scale'] = r6;
                            r6 = new Array(1);
                            r6[0] = r8;
                            r7['transform'] = r6;
                            r6 = new Array(2);
                            r6[0] = r7;
                            r7 = _closure3_slot2;
                            r6[1] = r7;
                            r1['style'] = r6;
                            r0 = _closure3_slot5;
                            r1 = r4.bind(r5)(r1, r0);
                            r0 = undefined;
                            r0 = r3.bind(r0)(r2, r1);
                            return r0;
                        }
                    };
                    r0['children'] = r4;
                    r0 = r2.bind(r3)(r1, r0);
                    return r0;
                };
                r4['value'] = r0;
                r0 = new Array(1);
                r0[0] = r4;
                r0 = r1.bind(r2)(r3, r0);
                return r0;
            };
            r2 = r2.bind(r0)(r5);
            r1['default'] = r2;
            r1 = 12;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r1.defaultProps;
            r2['defaultProps'] = r1;
            return r0;
        }
    };
    r6 = 569;
    r5 = [1, 203, 12, 13, 23, 25, 28, 119, 2, 565, 251, 566, 567];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun6183: for(var _fun6183_ip = 0; ; ) switch(_fun6183_ip) {
case 0:
            r3 = a1;
            r1 = a5;
            r4 = a6;
            var _closure1_slot0 = r3;
            var _closure1_slot1 = r4;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r2
                _fun6184: for(var _fun6184_ip = 0; ; ) switch(_fun6184_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun6184_ip = 104; continue _fun6184 }
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
                        _fun6185: for(var _fun6185_ip = 0; ; ) switch(_fun6185_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun6185_ip = 15; continue _fun6185 }
case 9:
                            r0 = _closure2_slot0;
                            _fun6185_ip = 19; continue _fun6185;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot12 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot12 = r0;
            r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r2
                _fun6186: for(var _fun6186_ip = 0; ; ) switch(_fun6186_ip) {
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
                    r0 = _closure1_slot14;
                    r0 = r0.bind(r2)();
                    if(r0) { _fun6186_ip = 61; continue _fun6186 }
case 48:
                    r0 = r8.apply;
                    r0 = r0.bind(r8)(r3, r5);
                    _fun6186_ip = 107; continue _fun6186;
case 61:
                    r6 = global;
                    r7 = r6.Reflect;
                    r6 = r7.construct;
                    if(r5) { _fun6186_ip = 81; continue _fun6186 }
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
            var _closure1_slot13 = r0;
            r0 = function() { // Original name: _isNativeReflectConstruct, environment: r2
                _fun6187: for(var _fun6187_ip = 0; ; ) switch(_fun6187_ip) {
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
                    _fun6187_ip = 74; continue _fun6187;
case 72: // catch_target0
                    CatchBlockStart(arg_register=1);
case 74:
                    r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                        r0 = _closure2_slot0;
                        r0 = !r0;
                        r0 = !r0;
                        return r0;
                    };
                    _closure1_slot14 = r1;
                    r0 = undefined;
                    r0 = r1.bind(r0)();
                    return r0;
                }
            };
            var _closure1_slot14 = r0;
            r0 = 0;
            r5 = r4[r0];
            r0 = undefined;
            r7 = r3.bind(r0)(r5);
            r19 = global;
            r9 = r19.Object;
            r8 = r9.defineProperty;
            r6 = {};
            r5 = true;
            r6['value'] = r5;
            r5 = '__esModule';
            r5 = r8.bind(r9)(r1, r5, r6);
            r1['default'] = r0;
            r5 = 1;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot2 = r5;
            r5 = 2;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot3 = r5;
            r5 = 3;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot4 = r5;
            r5 = 4;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot5 = r5;
            r5 = 5;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot6 = r5;
            r5 = 6;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot7 = r5;
            r5 = 7;
            r5 = r4[r5];
            r8 = r3.bind(r0)(r5);
            if(!r8) { _fun6183_ip = 252; continue _fun6183 }
case 238:
            r6 = r8.__esModule;
            r5 = r8;
            if(r6) { _fun6183_ip = 519; continue _fun6183 }
case 252:
            r18 = null;
            if(!(r18 !== r8)) { _fun6183_ip = 510; continue _fun6183 }
case 261:
            r9 = typeof r8;
            r6 = 'object';
            if(!(r6 !== r9)) { _fun6183_ip = 283; continue _fun6183 }
case 272:
            r6 = 'function';
            if(!(r6 === r9)) { _fun6183_ip = 510; continue _fun6183 }
case 283:
            r6 = _closure1_slot12;
            r9 = r6.bind(r0)(r0);
            if(!r9) { _fun6183_ip = 311; continue _fun6183 }
case 295:
            r6 = r9.has;
            r6 = r6.bind(r9)(r8);
            if(r6) { _fun6183_ip = 498; continue _fun6183 }
case 311:
            r6 = Object.create(r18);
            r10 = r19.Object;
            r17 = r10.defineProperty;
            if(!r17) { _fun6183_ip = 339; continue _fun6183 }
case 328:
            r10 = r19.Object;
            r17 = r10.getOwnPropertyDescriptor;
case 339:
            r15 = r8;
            r11 = 'default';
            r10 = undefined;
            for(r12 in r15)
case 356:
            {
case 365:
                r23 = r12;
                if(r11 === r23) { _fun6183_ip = 356; continue _fun6183 }
case 372:
                r20 = {};
                r21 = r20.hasOwnProperty;
                r20 = r21.call;
                r20 = r20.bind(r21)(r8, r23);
                if(!r20) { _fun6183_ip = 356; continue _fun6183 }
case 393:
                r20 = null;
                if(!r17) { _fun6183_ip = 415; continue _fun6183 }
case 398:
                r22 = r19.Object;
                r21 = r22.getOwnPropertyDescriptor;
                r20 = r21.bind(r22)(r8, r23);
case 415:
                if(!r20) { _fun6183_ip = 434; continue _fun6183 }
case 418:
                r21 = r20.get;
                if(r21) { _fun6183_ip = 447; continue _fun6183 }
case 426:
                r21 = r20.set;
                if(r21) { _fun6183_ip = 447; continue _fun6183 }
case 434:
                r21 = r8[r23];
                r6[r23] = r21;
                r10 = r20;
                _fun6183_ip = 356; continue _fun6183;
case 447:
                r22 = r19.Object;
                r21 = r22.defineProperty;
                r21 = r21.bind(r22)(r6, r23, r20);
                r10 = r20;
                _fun6183_ip = 356; continue _fun6183;
            }
case 470:
            r6['default'] = r8;
            r5 = r6;
            if(!r9) { _fun6183_ip = 519; continue _fun6183 }
case 482:
            r10 = r9.set;
            r10 = r10.bind(r9)(r8, r6);
            r5 = r6;
            _fun6183_ip = 519; continue _fun6183;
case 498:
            r6 = r9.get;
            r5 = r6.bind(r9)(r8);
            _fun6183_ip = 519; continue _fun6183;
case 510:
            r6 = {};
            r6['default'] = r8;
            r5 = r6;
case 519:
            r6 = 8;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            var _closure1_slot8 = r6;
            r6 = 9;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            r6 = r7.bind(r0)(r6);
            var _closure1_slot9 = r6;
            r6 = 10;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            var _closure1_slot10 = r6;
            r6 = ['size', 'color', 'style', 'animating', 'hidesWhenStopped'];
            var _closure1_slot11 = r6;
            r5 = r5.Component;
            r2 = function(a0) { // Environment: r2
                r3 = function() { // Original name: Swing, environment: r0
                    r4 = this;
                    r3 = undefined;
                    r0 = undefined;
                    r2 = _closure1_slot3;
                    r5 = r2.default;
                    r2 = _closure2_slot0;
                    r5 = r5.bind(r3)(r4, r2);
                    r1 = _closure1_slot13;
                    r0 = arguments;
                    r0 = r1.bind(r3)(r4, r2, r0);
                    return r0;
                };
                var _closure2_slot0 = r3;
                r2 = _closure1_slot7;
                r5 = r2.default;
                r2 = undefined;
                r4 = a0;
                r4 = r5.bind(r2)(r3, r4);
                r1 = _closure1_slot4;
                r1 = r1.default;
                r4 = {};
                r5 = 'render';
                r4['key'] = r5;
                r0 = function() { // Original name: render, environment: r0
                    r0 = this;
                    r8 = r0.props;
                    r6 = r8.size;
                    var _closure3_slot0 = r6;
                    r7 = r8.color;
                    r0 = r8.style;
                    var _closure3_slot1 = r0;
                    r5 = r8.animating;
                    var _closure3_slot2 = r5;
                    r0 = r8.hidesWhenStopped;
                    var _closure3_slot3 = r0;
                    r1 = _closure1_slot2;
                    r2 = r1.default;
                    r1 = _closure1_slot11;
                    r3 = undefined;
                    r1 = r2.bind(r3)(r8, r1);
                    var _closure3_slot4 = r1;
                    r1 = {};
                    r2 = 0.45;
                    r8 = r6 * r2;
                    r1['width'] = r8;
                    r8 = r6 * r2;
                    r1['height'] = r8;
                    r1['backgroundColor'] = r7;
                    r6 = r6 * r2;
                    r2 = 2;
                    r2 = r6 / r2;
                    r1['borderRadius'] = r2;
                    var _closure3_slot5 = r1;
                    r1 = _closure1_slot10;
                    r2 = r1.jsx;
                    r0 = _closure1_slot9;
                    r1 = r0.default;
                    r0 = {};
                    r6 = function() { // Original name: initAnimation, environment: r4
                        r0 = {};
                        r2 = function(a0) { // Original name: swing, environment: r1
                            r5 = a0;
                            r0 = {};
                            r1 = new Array(1);
                            r1[0] = r5;
                            r0['values'] = r1;
                            r2 = _closure1_slot0;
                            r3 = _closure1_slot1;
                            r1 = 11;
                            r1 = r3[r1];
                            r3 = undefined;
                            r1 = r2.bind(r3)(r1);
                            r2 = r1.loop;
                            r1 = {};
                            r6 = 1800;
                            r1['duration'] = r6;
                            r1['value'] = r5;
                            r4 = _closure1_slot8;
                            r4 = r4.Easing;
                            r4 = r4.linear;
                            r1['easing'] = r4;
                            r4 = [0, 100];
                            r1['keyframes'] = r4;
                            r1 = r2.bind(r3)(r1);
                            r0['animation'] = r1;
                            return r0;
                        };
                        r0['swing'] = r2;
                        r1 = function(a0) { // Original name: swingDot, environment: r1
                            r4 = a0;
                            r0 = {};
                            r1 = new Array(1);
                            r1[0] = r4;
                            r0['values'] = r1;
                            r2 = _closure1_slot0;
                            r3 = _closure1_slot1;
                            r1 = 11;
                            r1 = r3[r1];
                            r3 = undefined;
                            r1 = r2.bind(r3)(r1);
                            r2 = r1.loop;
                            r1 = {};
                            r5 = 2000;
                            r1['duration'] = r5;
                            r1['value'] = r4;
                            r4 = [0, 50, 100];
                            r1['keyframes'] = r4;
                            r1 = r2.bind(r3)(r1);
                            r0['animation'] = r1;
                            return r0;
                        };
                        r0['swingDot'] = r1;
                        return r0;
                    };
                    r0['initAnimation'] = r6;
                    r0['animating'] = r5;
                    r4 = function(a0) { // Original name: children, environment: r4
                        _fun6196: for(var _fun6196_ip = 0; ; ) switch(_fun6196_ip) {
case 0:
                            r14 = a0;
                            r0 = _closure1_slot10;
                            r3 = r0.jsxs;
                            r0 = _closure1_slot8;
                            r0 = r0.Animated;
                            r2 = r0.View;
                            r0 = global;
                            r7 = r0.Object;
                            r6 = r7.assign;
                            r5 = {};
                            r4 = {};
                            r0 = _closure3_slot0;
                            r4['width'] = r0;
                            r4['height'] = r0;
                            r0 = 'center';
                            r4['alignItems'] = r0;
                            r0 = 'space-between';
                            r4['justifyContent'] = r0;
                            r9 = _closure3_slot2;
                            r10 = 1;
                            r0 = r10;
                            if(r9) { _fun6196_ip = 103; continue _fun6196 }
case 91:
                            r9 = _closure3_slot3;
                            r0 = r10;
                            if(!r9) { _fun6196_ip = 103; continue _fun6196 }
case 101:
                            r0 = 0;
case 103:
                            r4['opacity'] = r0;
                            r9 = {};
                            r0 = r14.swing;
                            r16 = 0;
                            r11 = r0[r16];
                            r10 = r11.interpolate;
                            r0 = {};
                            r12 = [0, 100];
                            r0['inputRange'] = r12;
                            r12 = ['0deg', '360deg'];
                            r0['outputRange'] = r12;
                            r0 = r10.bind(r11)(r0);
                            r9['rotate'] = r0;
                            r0 = new Array(1);
                            r0[0] = r9;
                            r4['transform'] = r0;
                            r0 = new Array(2);
                            r0[0] = r4;
                            r4 = _closure3_slot1;
                            r0[1] = r4;
                            r5['style'] = r0;
                            r4 = _closure3_slot4;
                            r0 = {};
                            r10 = _closure1_slot10;
                            r12 = r10.jsx;
                            r9 = _closure1_slot8;
                            r8 = r9.Animated;
                            r11 = r8.View;
                            r8 = {};
                            r13 = _closure3_slot5;
                            r1 = new Array(2);
                            r1[0] = r13;
                            r15 = {};
                            r18 = {};
                            r17 = r14.swingDot;
                            r20 = r17[r16];
                            r19 = r20.interpolate;
                            r17 = {};
                            r21 = [0, 50, 100];
                            r17['inputRange'] = r21;
                            r21 = [0.2, 1, 0.2];
                            r17['outputRange'] = r21;
                            r17 = r19.bind(r20)(r17);
                            r18['scale'] = r17;
                            r17 = new Array(1);
                            r17[0] = r18;
                            r15['transform'] = r17;
                            r1[1] = r15;
                            r8['style'] = r1;
                            r1 = undefined;
                            r11 = r12.bind(r1)(r11, r8);
                            r8 = new Array(2);
                            r8[0] = r11;
                            r11 = r10.jsx;
                            r9 = r9.Animated;
                            r10 = r9.View;
                            r9 = {};
                            r12 = new Array(2);
                            r12[0] = r13;
                            r13 = {};
                            r15 = {};
                            r14 = r14.swingDot;
                            r17 = r14[r16];
                            r16 = r17.interpolate;
                            r14 = {};
                            r18 = [0, 50, 100];
                            r14['inputRange'] = r18;
                            r18 = [1, 0.2, 1];
                            r14['outputRange'] = r18;
                            r14 = r16.bind(r17)(r14);
                            r15['scale'] = r14;
                            r14 = new Array(1);
                            r14[0] = r15;
                            r13['transform'] = r14;
                            r12[1] = r13;
                            r9['style'] = r12;
                            r9 = r11.bind(r1)(r10, r9);
                            r8[1] = r9;
                            r0['children'] = r8;
                            r0 = r6.bind(r7)(r5, r4, r0);
                            r0 = r3.bind(r1)(r2, r0);
                            return r0;
                        }
                    };
                    r0['children'] = r4;
                    r0 = r2.bind(r3)(r1, r0);
                    return r0;
                };
                r4['value'] = r0;
                r0 = new Array(1);
                r0[0] = r4;
                r0 = r1.bind(r2)(r3, r0);
                return r0;
            };
            r2 = r2.bind(r0)(r5);
            r1['default'] = r2;
            r1 = 12;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r1.defaultProps;
            r2['defaultProps'] = r1;
            return r0;
        }
    };
    r6 = 570;
    r5 = [1, 203, 12, 13, 23, 25, 28, 119, 2, 565, 251, 566, 567];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun6197: for(var _fun6197_ip = 0; ; ) switch(_fun6197_ip) {
case 0:
            r3 = a1;
            r1 = a5;
            r4 = a6;
            var _closure1_slot0 = r3;
            var _closure1_slot1 = r4;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r2
                _fun6198: for(var _fun6198_ip = 0; ; ) switch(_fun6198_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun6198_ip = 104; continue _fun6198 }
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
                        _fun6199: for(var _fun6199_ip = 0; ; ) switch(_fun6199_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun6199_ip = 15; continue _fun6199 }
case 9:
                            r0 = _closure2_slot0;
                            _fun6199_ip = 19; continue _fun6199;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot12 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot12 = r0;
            r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r2
                _fun6200: for(var _fun6200_ip = 0; ; ) switch(_fun6200_ip) {
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
                    r0 = _closure1_slot14;
                    r0 = r0.bind(r2)();
                    if(r0) { _fun6200_ip = 61; continue _fun6200 }
case 48:
                    r0 = r8.apply;
                    r0 = r0.bind(r8)(r3, r5);
                    _fun6200_ip = 107; continue _fun6200;
case 61:
                    r6 = global;
                    r7 = r6.Reflect;
                    r6 = r7.construct;
                    if(r5) { _fun6200_ip = 81; continue _fun6200 }
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
            var _closure1_slot13 = r0;
            r0 = function() { // Original name: _isNativeReflectConstruct, environment: r2
                _fun6201: for(var _fun6201_ip = 0; ; ) switch(_fun6201_ip) {
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
                    _fun6201_ip = 74; continue _fun6201;
case 72: // catch_target0
                    CatchBlockStart(arg_register=1);
case 74:
                    r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                        r0 = _closure2_slot0;
                        r0 = !r0;
                        r0 = !r0;
                        return r0;
                    };
                    _closure1_slot14 = r1;
                    r0 = undefined;
                    r0 = r1.bind(r0)();
                    return r0;
                }
            };
            var _closure1_slot14 = r0;
            r0 = 0;
            r5 = r4[r0];
            r0 = undefined;
            r7 = r3.bind(r0)(r5);
            r19 = global;
            r9 = r19.Object;
            r8 = r9.defineProperty;
            r6 = {};
            r5 = true;
            r6['value'] = r5;
            r5 = '__esModule';
            r5 = r8.bind(r9)(r1, r5, r6);
            r1['default'] = r0;
            r5 = 1;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot2 = r5;
            r5 = 2;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot3 = r5;
            r5 = 3;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot4 = r5;
            r5 = 4;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot5 = r5;
            r5 = 5;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot6 = r5;
            r5 = 6;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot7 = r5;
            r5 = 7;
            r5 = r4[r5];
            r8 = r3.bind(r0)(r5);
            if(!r8) { _fun6197_ip = 252; continue _fun6197 }
case 238:
            r6 = r8.__esModule;
            r5 = r8;
            if(r6) { _fun6197_ip = 519; continue _fun6197 }
case 252:
            r18 = null;
            if(!(r18 !== r8)) { _fun6197_ip = 510; continue _fun6197 }
case 261:
            r9 = typeof r8;
            r6 = 'object';
            if(!(r6 !== r9)) { _fun6197_ip = 283; continue _fun6197 }
case 272:
            r6 = 'function';
            if(!(r6 === r9)) { _fun6197_ip = 510; continue _fun6197 }
case 283:
            r6 = _closure1_slot12;
            r9 = r6.bind(r0)(r0);
            if(!r9) { _fun6197_ip = 311; continue _fun6197 }
case 295:
            r6 = r9.has;
            r6 = r6.bind(r9)(r8);
            if(r6) { _fun6197_ip = 498; continue _fun6197 }
case 311:
            r6 = Object.create(r18);
            r10 = r19.Object;
            r17 = r10.defineProperty;
            if(!r17) { _fun6197_ip = 339; continue _fun6197 }
case 328:
            r10 = r19.Object;
            r17 = r10.getOwnPropertyDescriptor;
case 339:
            r15 = r8;
            r11 = 'default';
            r10 = undefined;
            for(r12 in r15)
case 356:
            {
case 365:
                r23 = r12;
                if(r11 === r23) { _fun6197_ip = 356; continue _fun6197 }
case 372:
                r20 = {};
                r21 = r20.hasOwnProperty;
                r20 = r21.call;
                r20 = r20.bind(r21)(r8, r23);
                if(!r20) { _fun6197_ip = 356; continue _fun6197 }
case 393:
                r20 = null;
                if(!r17) { _fun6197_ip = 415; continue _fun6197 }
case 398:
                r22 = r19.Object;
                r21 = r22.getOwnPropertyDescriptor;
                r20 = r21.bind(r22)(r8, r23);
case 415:
                if(!r20) { _fun6197_ip = 434; continue _fun6197 }
case 418:
                r21 = r20.get;
                if(r21) { _fun6197_ip = 447; continue _fun6197 }
case 426:
                r21 = r20.set;
                if(r21) { _fun6197_ip = 447; continue _fun6197 }
case 434:
                r21 = r8[r23];
                r6[r23] = r21;
                r10 = r20;
                _fun6197_ip = 356; continue _fun6197;
case 447:
                r22 = r19.Object;
                r21 = r22.defineProperty;
                r21 = r21.bind(r22)(r6, r23, r20);
                r10 = r20;
                _fun6197_ip = 356; continue _fun6197;
            }
case 470:
            r6['default'] = r8;
            r5 = r6;
            if(!r9) { _fun6197_ip = 519; continue _fun6197 }
case 482:
            r10 = r9.set;
            r10 = r10.bind(r9)(r8, r6);
            r5 = r6;
            _fun6197_ip = 519; continue _fun6197;
case 498:
            r6 = r9.get;
            r5 = r6.bind(r9)(r8);
            _fun6197_ip = 519; continue _fun6197;
case 510:
            r6 = {};
            r6['default'] = r8;
            r5 = r6;
case 519:
            r6 = 8;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            var _closure1_slot8 = r6;
            r6 = 9;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            r6 = r7.bind(r0)(r6);
            var _closure1_slot9 = r6;
            r6 = 10;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            var _closure1_slot10 = r6;
            r6 = ['size', 'color', 'style', 'animating', 'hidesWhenStopped'];
            var _closure1_slot11 = r6;
            r5 = r5.Component;
            r2 = function(a0) { // Environment: r2
                r3 = function() { // Original name: Chase, environment: r0
                    r4 = this;
                    r3 = undefined;
                    r0 = undefined;
                    r2 = _closure1_slot3;
                    r5 = r2.default;
                    r2 = _closure2_slot0;
                    r5 = r5.bind(r3)(r4, r2);
                    r1 = _closure1_slot13;
                    r0 = arguments;
                    r0 = r1.bind(r3)(r4, r2, r0);
                    return r0;
                };
                var _closure2_slot0 = r3;
                r2 = _closure1_slot7;
                r5 = r2.default;
                r2 = undefined;
                r4 = a0;
                r4 = r5.bind(r2)(r3, r4);
                r1 = _closure1_slot4;
                r1 = r1.default;
                r4 = {};
                r5 = 'render';
                r4['key'] = r5;
                r0 = function() { // Original name: render, environment: r0
                    r0 = this;
                    r8 = r0.props;
                    r6 = r8.size;
                    var _closure3_slot0 = r6;
                    r2 = r8.color;
                    r0 = r8.style;
                    var _closure3_slot1 = r0;
                    r5 = r8.animating;
                    var _closure3_slot2 = r5;
                    r0 = r8.hidesWhenStopped;
                    var _closure3_slot3 = r0;
                    r1 = _closure1_slot2;
                    r7 = r1.default;
                    r1 = _closure1_slot11;
                    r3 = undefined;
                    r1 = r7.bind(r3)(r8, r1);
                    var _closure3_slot4 = r1;
                    r1 = {};
                    r7 = 'absolute';
                    r1['position'] = r7;
                    r7 = 4;
                    r8 = r6 / r7;
                    r1['width'] = r8;
                    r7 = r6 / r7;
                    r1['height'] = r7;
                    r1['backgroundColor'] = r2;
                    r2 = 8;
                    r2 = r6 / r2;
                    r1['borderRadius'] = r2;
                    var _closure3_slot5 = r1;
                    r1 = _closure1_slot10;
                    r2 = r1.jsx;
                    r0 = _closure1_slot9;
                    r1 = r0.default;
                    r0 = {};
                    r6 = function() { // Original name: initAnimation, environment: r4
                        r0 = {};
                        r2 = function(a0) { // Original name: chase, environment: r1
                            r4 = a0;
                            r0 = {};
                            r1 = new Array(1);
                            r1[0] = r4;
                            r0['values'] = r1;
                            r2 = _closure1_slot0;
                            r3 = _closure1_slot1;
                            r1 = 11;
                            r1 = r3[r1];
                            r3 = undefined;
                            r1 = r2.bind(r3)(r1);
                            r2 = r1.loop;
                            r1 = {};
                            r6 = 2500;
                            r1['duration'] = r6;
                            r5 = _closure1_slot8;
                            r5 = r5.Easing;
                            r5 = r5.linear;
                            r1['easing'] = r5;
                            r1['value'] = r4;
                            r1 = r2.bind(r3)(r1);
                            r0['animation'] = r1;
                            return r0;
                        };
                        r0['chase'] = r2;
                        r2 = function(a0) { // Original name: chaseDot, environment: r1
                            r1 = _closure1_slot0;
                            r2 = _closure1_slot1;
                            r0 = 11;
                            r0 = r2[r0];
                            r4 = undefined;
                            r0 = r1.bind(r4)(r0);
                            r3 = r0.stagger;
                            r2 = {};
                            r0 = 2000;
                            r2['duration'] = r0;
                            r0 = a0;
                            r2['value'] = r0;
                            r0 = [0, 80, 100];
                            r2['keyframes'] = r0;
                            r1 = 100;
                            r0 = 6;
                            r0 = r3.bind(r4)(r1, r0, r2);
                            return r0;
                        };
                        r0['chaseDot'] = r2;
                        r1 = function(a0) { // Original name: chaseDotBefore, environment: r1
                            r1 = _closure1_slot0;
                            r2 = _closure1_slot1;
                            r0 = 11;
                            r0 = r2[r0];
                            r4 = undefined;
                            r0 = r1.bind(r4)(r0);
                            r3 = r0.stagger;
                            r2 = {};
                            r0 = 2000;
                            r2['duration'] = r0;
                            r0 = a0;
                            r2['value'] = r0;
                            r0 = [0, 50, 100];
                            r2['keyframes'] = r0;
                            r1 = 100;
                            r0 = 6;
                            r0 = r3.bind(r4)(r1, r0, r2);
                            return r0;
                        };
                        r0['chaseDotBefore'] = r1;
                        return r0;
                    };
                    r0['initAnimation'] = r6;
                    r0['animating'] = r5;
                    r4 = function(a0) { // Original name: children, environment: r4
                        _fun6211: for(var _fun6211_ip = 0; ; ) switch(_fun6211_ip) {
case 0:
                            r8 = a0;
                            var _closure4_slot0 = r8;
                            r1 = _closure1_slot10;
                            r3 = r1.jsx;
                            r0 = _closure1_slot8;
                            r0 = r0.Animated;
                            r2 = r0.View;
                            r0 = global;
                            r6 = r0.Object;
                            r5 = r6.assign;
                            r4 = {};
                            r9 = {};
                            r1 = _closure3_slot0;
                            r9['width'] = r1;
                            r9['height'] = r1;
                            r1 = 'center';
                            r9['alignItems'] = r1;
                            r9['justifyContent'] = r1;
                            r10 = _closure3_slot2;
                            r11 = 1;
                            r1 = r11;
                            if(r10) { _fun6211_ip = 105; continue _fun6211 }
case 93:
                            r10 = _closure3_slot3;
                            r1 = r11;
                            if(!r10) { _fun6211_ip = 105; continue _fun6211 }
case 103:
                            r1 = 0;
case 105:
                            r9['opacity'] = r1;
                            r10 = {};
                            r11 = r8.chase;
                            r1 = 0;
                            r12 = r11[r1];
                            r11 = r12.interpolate;
                            r1 = {};
                            r13 = [0, 100];
                            r1['inputRange'] = r13;
                            r13 = ['0deg', '360deg'];
                            r1['outputRange'] = r13;
                            r1 = r11.bind(r12)(r1);
                            r10['rotate'] = r1;
                            r1 = new Array(1);
                            r1[0] = r10;
                            r9['transform'] = r1;
                            r1 = new Array(2);
                            r1[0] = r9;
                            r9 = _closure3_slot1;
                            r1[1] = r9;
                            r4['style'] = r1;
                            r1 = _closure3_slot4;
                            r0 = {};
                            r9 = r8.chaseDot;
                            r8 = r9.map;
                            r7 = function(a0, a1) { // Environment: r7
                                r10 = a0;
                                r4 = a1;
                                r1 = _closure1_slot10;
                                r3 = r1.jsx;
                                r0 = _closure1_slot8;
                                r0 = r0.Animated;
                                r2 = r0.View;
                                r1 = {};
                                r5 = _closure3_slot5;
                                r0 = new Array(2);
                                r0[0] = r5;
                                r5 = {};
                                r7 = {};
                                r9 = r10.interpolate;
                                r6 = {};
                                r11 = [0, 80, 100];
                                r6['inputRange'] = r11;
                                r11 = ['0deg', '360deg', '360deg'];
                                r6['outputRange'] = r11;
                                r6 = r9.bind(r10)(r6);
                                r7['rotate'] = r6;
                                r6 = new Array(3);
                                r6[0] = r7;
                                r7 = {};
                                r10 = _closure3_slot0;
                                r9 = -r10;
                                r8 = 2;
                                r9 = r9 / r8;
                                r8 = 8;
                                r8 = r10 / r8;
                                r8 = r9 + r8;
                                r7['translateY'] = r8;
                                r6[1] = r7;
                                r7 = {};
                                r8 = _closure4_slot0;
                                r8 = r8.chaseDotBefore;
                                r10 = r8[r4];
                                r9 = r10.interpolate;
                                r8 = {};
                                r11 = [0, 50, 100];
                                r8['inputRange'] = r11;
                                r11 = [1, 0.4, 1];
                                r8['outputRange'] = r11;
                                r8 = r9.bind(r10)(r8);
                                r7['scale'] = r8;
                                r6[2] = r7;
                                r5['transform'] = r6;
                                r0[1] = r5;
                                r1['style'] = r0;
                                r0 = undefined;
                                r0 = r3.bind(r0)(r2, r1, r4);
                                return r0;
                            };
                            r7 = r8.bind(r9)(r7);
                            r0['children'] = r7;
                            r1 = r5.bind(r6)(r4, r1, r0);
                            r0 = undefined;
                            r0 = r3.bind(r0)(r2, r1);
                            return r0;
                        }
                    };
                    r0['children'] = r4;
                    r0 = r2.bind(r3)(r1, r0);
                    return r0;
                };
                r4['value'] = r0;
                r0 = new Array(1);
                r0[0] = r4;
                r0 = r1.bind(r2)(r3, r0);
                return r0;
            };
            r2 = r2.bind(r0)(r5);
            r1['default'] = r2;
            r1 = 12;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r1.defaultProps;
            r2['defaultProps'] = r1;
            return r0;
        }
    };
    r6 = 571;
    r5 = [1, 203, 12, 13, 23, 25, 28, 119, 2, 565, 251, 566, 567];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun6213: for(var _fun6213_ip = 0; ; ) switch(_fun6213_ip) {
case 0:
            r3 = a1;
            r1 = a5;
            r4 = a6;
            var _closure1_slot0 = r3;
            var _closure1_slot1 = r4;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r2
                _fun6214: for(var _fun6214_ip = 0; ; ) switch(_fun6214_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun6214_ip = 104; continue _fun6214 }
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
                        _fun6215: for(var _fun6215_ip = 0; ; ) switch(_fun6215_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun6215_ip = 15; continue _fun6215 }
case 9:
                            r0 = _closure2_slot0;
                            _fun6215_ip = 19; continue _fun6215;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot12 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot12 = r0;
            r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r2
                _fun6216: for(var _fun6216_ip = 0; ; ) switch(_fun6216_ip) {
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
                    r0 = _closure1_slot14;
                    r0 = r0.bind(r2)();
                    if(r0) { _fun6216_ip = 61; continue _fun6216 }
case 48:
                    r0 = r8.apply;
                    r0 = r0.bind(r8)(r3, r5);
                    _fun6216_ip = 107; continue _fun6216;
case 61:
                    r6 = global;
                    r7 = r6.Reflect;
                    r6 = r7.construct;
                    if(r5) { _fun6216_ip = 81; continue _fun6216 }
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
            var _closure1_slot13 = r0;
            r0 = function() { // Original name: _isNativeReflectConstruct, environment: r2
                _fun6217: for(var _fun6217_ip = 0; ; ) switch(_fun6217_ip) {
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
                    _fun6217_ip = 74; continue _fun6217;
case 72: // catch_target0
                    CatchBlockStart(arg_register=1);
case 74:
                    r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                        r0 = _closure2_slot0;
                        r0 = !r0;
                        r0 = !r0;
                        return r0;
                    };
                    _closure1_slot14 = r1;
                    r0 = undefined;
                    r0 = r1.bind(r0)();
                    return r0;
                }
            };
            var _closure1_slot14 = r0;
            r0 = 0;
            r5 = r4[r0];
            r0 = undefined;
            r7 = r3.bind(r0)(r5);
            r19 = global;
            r9 = r19.Object;
            r8 = r9.defineProperty;
            r6 = {};
            r5 = true;
            r6['value'] = r5;
            r5 = '__esModule';
            r5 = r8.bind(r9)(r1, r5, r6);
            r1['default'] = r0;
            r5 = 1;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot2 = r5;
            r5 = 2;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot3 = r5;
            r5 = 3;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot4 = r5;
            r5 = 4;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot5 = r5;
            r5 = 5;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot6 = r5;
            r5 = 6;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot7 = r5;
            r5 = 7;
            r5 = r4[r5];
            r8 = r3.bind(r0)(r5);
            if(!r8) { _fun6213_ip = 252; continue _fun6213 }
case 238:
            r6 = r8.__esModule;
            r5 = r8;
            if(r6) { _fun6213_ip = 519; continue _fun6213 }
case 252:
            r18 = null;
            if(!(r18 !== r8)) { _fun6213_ip = 510; continue _fun6213 }
case 261:
            r9 = typeof r8;
            r6 = 'object';
            if(!(r6 !== r9)) { _fun6213_ip = 283; continue _fun6213 }
case 272:
            r6 = 'function';
            if(!(r6 === r9)) { _fun6213_ip = 510; continue _fun6213 }
case 283:
            r6 = _closure1_slot12;
            r9 = r6.bind(r0)(r0);
            if(!r9) { _fun6213_ip = 311; continue _fun6213 }
case 295:
            r6 = r9.has;
            r6 = r6.bind(r9)(r8);
            if(r6) { _fun6213_ip = 498; continue _fun6213 }
case 311:
            r6 = Object.create(r18);
            r10 = r19.Object;
            r17 = r10.defineProperty;
            if(!r17) { _fun6213_ip = 339; continue _fun6213 }
case 328:
            r10 = r19.Object;
            r17 = r10.getOwnPropertyDescriptor;
case 339:
            r15 = r8;
            r11 = 'default';
            r10 = undefined;
            for(r12 in r15)
case 356:
            {
case 365:
                r23 = r12;
                if(r11 === r23) { _fun6213_ip = 356; continue _fun6213 }
case 372:
                r20 = {};
                r21 = r20.hasOwnProperty;
                r20 = r21.call;
                r20 = r20.bind(r21)(r8, r23);
                if(!r20) { _fun6213_ip = 356; continue _fun6213 }
case 393:
                r20 = null;
                if(!r17) { _fun6213_ip = 415; continue _fun6213 }
case 398:
                r22 = r19.Object;
                r21 = r22.getOwnPropertyDescriptor;
                r20 = r21.bind(r22)(r8, r23);
case 415:
                if(!r20) { _fun6213_ip = 434; continue _fun6213 }
case 418:
                r21 = r20.get;
                if(r21) { _fun6213_ip = 447; continue _fun6213 }
case 426:
                r21 = r20.set;
                if(r21) { _fun6213_ip = 447; continue _fun6213 }
case 434:
                r21 = r8[r23];
                r6[r23] = r21;
                r10 = r20;
                _fun6213_ip = 356; continue _fun6213;
case 447:
                r22 = r19.Object;
                r21 = r22.defineProperty;
                r21 = r21.bind(r22)(r6, r23, r20);
                r10 = r20;
                _fun6213_ip = 356; continue _fun6213;
            }
case 470:
            r6['default'] = r8;
            r5 = r6;
            if(!r9) { _fun6213_ip = 519; continue _fun6213 }
case 482:
            r10 = r9.set;
            r10 = r10.bind(r9)(r8, r6);
            r5 = r6;
            _fun6213_ip = 519; continue _fun6213;
case 498:
            r6 = r9.get;
            r5 = r6.bind(r9)(r8);
            _fun6213_ip = 519; continue _fun6213;
case 510:
            r6 = {};
            r6['default'] = r8;
            r5 = r6;
case 519:
            r6 = 8;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            var _closure1_slot8 = r6;
            r6 = 9;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            r6 = r7.bind(r0)(r6);
            var _closure1_slot9 = r6;
            r6 = 10;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            var _closure1_slot10 = r6;
            r6 = ['size', 'color', 'style', 'animating', 'hidesWhenStopped'];
            var _closure1_slot11 = r6;
            r5 = r5.Component;
            r2 = function(a0) { // Environment: r2
                r3 = function() { // Original name: Wave, environment: r0
                    r4 = this;
                    r3 = undefined;
                    r0 = undefined;
                    r2 = _closure1_slot3;
                    r5 = r2.default;
                    r2 = _closure2_slot0;
                    r5 = r5.bind(r3)(r4, r2);
                    r1 = _closure1_slot13;
                    r0 = arguments;
                    r0 = r1.bind(r3)(r4, r2, r0);
                    return r0;
                };
                var _closure2_slot0 = r3;
                r2 = _closure1_slot7;
                r5 = r2.default;
                r2 = undefined;
                r4 = a0;
                r4 = r5.bind(r2)(r3, r4);
                r1 = _closure1_slot4;
                r1 = r1.default;
                r4 = {};
                r5 = 'render';
                r4['key'] = r5;
                r0 = function() { // Original name: render, environment: r0
                    r0 = this;
                    r6 = r0.props;
                    r0 = r6.size;
                    var _closure3_slot0 = r0;
                    r0 = r6.color;
                    var _closure3_slot1 = r0;
                    r0 = r6.style;
                    var _closure3_slot2 = r0;
                    r5 = r6.animating;
                    var _closure3_slot3 = r5;
                    r0 = r6.hidesWhenStopped;
                    var _closure3_slot4 = r0;
                    r1 = _closure1_slot2;
                    r2 = r1.default;
                    r1 = _closure1_slot11;
                    r3 = undefined;
                    r1 = r2.bind(r3)(r6, r1);
                    var _closure3_slot5 = r1;
                    r1 = _closure1_slot10;
                    r2 = r1.jsx;
                    r0 = _closure1_slot9;
                    r1 = r0.default;
                    r0 = {};
                    r6 = function() { // Original name: initAnimation, environment: r4
                        r0 = {};
                        r1 = function(a0) { // Original name: wave, environment: r1
                            r1 = _closure1_slot0;
                            r2 = _closure1_slot1;
                            r0 = 11;
                            r0 = r2[r0];
                            r4 = undefined;
                            r0 = r1.bind(r4)(r0);
                            r3 = r0.stagger;
                            r2 = {};
                            r0 = 1200;
                            r2['duration'] = r0;
                            r0 = a0;
                            r2['value'] = r0;
                            r0 = [0, 20, 40, 100];
                            r2['keyframes'] = r0;
                            r1 = 100;
                            r0 = 5;
                            r0 = r3.bind(r4)(r1, r0, r2);
                            return r0;
                        };
                        r0['wave'] = r1;
                        return r0;
                    };
                    r0['initAnimation'] = r6;
                    r0['animating'] = r5;
                    r4 = function(a0) { // Original name: children, environment: r4
                        _fun6225: for(var _fun6225_ip = 0; ; ) switch(_fun6225_ip) {
case 0:
                            r1 = _closure1_slot10;
                            r3 = r1.jsx;
                            r0 = _closure1_slot8;
                            r2 = r0.View;
                            r0 = global;
                            r6 = r0.Object;
                            r5 = r6.assign;
                            r4 = {};
                            r7 = {};
                            r1 = _closure3_slot0;
                            r7['width'] = r1;
                            r7['height'] = r1;
                            r1 = 'space-between';
                            r7['justifyContent'] = r1;
                            r1 = 'row';
                            r7['flexDirection'] = r1;
                            r8 = _closure3_slot3;
                            r9 = 1;
                            r1 = r9;
                            if(r8) { _fun6225_ip = 95; continue _fun6225 }
case 83:
                            r8 = _closure3_slot4;
                            r1 = r9;
                            if(!r8) { _fun6225_ip = 95; continue _fun6225 }
case 93:
                            r1 = 0;
case 95:
                            r7['opacity'] = r1;
                            r1 = new Array(2);
                            r1[0] = r7;
                            r7 = _closure3_slot2;
                            r1[1] = r7;
                            r4['style'] = r1;
                            r1 = _closure3_slot5;
                            r0 = {};
                            r7 = a0;
                            r9 = r7.wave;
                            r8 = r9.map;
                            r7 = function(a0, a1) { // Environment: r7
                                r7 = a0;
                                r1 = _closure1_slot10;
                                r4 = r1.jsx;
                                r0 = _closure1_slot8;
                                r0 = r0.Animated;
                                r3 = r0.View;
                                r2 = {};
                                r0 = {};
                                r1 = _closure3_slot0;
                                r6 = 0.15;
                                r6 = r1 * r6;
                                r0['width'] = r6;
                                r5 = _closure3_slot1;
                                r0['backgroundColor'] = r5;
                                r0['height'] = r1;
                                r5 = {};
                                r6 = r7.interpolate;
                                r1 = {};
                                r8 = [0, 20, 40, 100];
                                r1['inputRange'] = r8;
                                r8 = [0.4, 1, 0.4, 0.4];
                                r1['outputRange'] = r8;
                                r1 = r6.bind(r7)(r1);
                                r5['scaleY'] = r1;
                                r1 = new Array(1);
                                r1[0] = r5;
                                r0['transform'] = r1;
                                r2['style'] = r0;
                                r1 = undefined;
                                r0 = a1;
                                r0 = r4.bind(r1)(r3, r2, r0);
                                return r0;
                            };
                            r7 = r8.bind(r9)(r7);
                            r0['children'] = r7;
                            r1 = r5.bind(r6)(r4, r1, r0);
                            r0 = undefined;
                            r0 = r3.bind(r0)(r2, r1);
                            return r0;
                        }
                    };
                    r0['children'] = r4;
                    r0 = r2.bind(r3)(r1, r0);
                    return r0;
                };
                r4['value'] = r0;
                r0 = new Array(1);
                r0[0] = r4;
                r0 = r1.bind(r2)(r3, r0);
                return r0;
            };
            r2 = r2.bind(r0)(r5);
            r1['default'] = r2;
            r1 = 12;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r1.defaultProps;
            r2['defaultProps'] = r1;
            return r0;
        }
    };
    r6 = 572;
    r5 = [1, 203, 12, 13, 23, 25, 28, 119, 2, 565, 251, 566, 567];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun6227: for(var _fun6227_ip = 0; ; ) switch(_fun6227_ip) {
case 0:
            r3 = a1;
            r1 = a5;
            r4 = a6;
            var _closure1_slot0 = r3;
            var _closure1_slot1 = r4;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r2
                _fun6228: for(var _fun6228_ip = 0; ; ) switch(_fun6228_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun6228_ip = 104; continue _fun6228 }
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
                        _fun6229: for(var _fun6229_ip = 0; ; ) switch(_fun6229_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun6229_ip = 15; continue _fun6229 }
case 9:
                            r0 = _closure2_slot0;
                            _fun6229_ip = 19; continue _fun6229;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot12 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot12 = r0;
            r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r2
                _fun6230: for(var _fun6230_ip = 0; ; ) switch(_fun6230_ip) {
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
                    r0 = _closure1_slot14;
                    r0 = r0.bind(r2)();
                    if(r0) { _fun6230_ip = 61; continue _fun6230 }
case 48:
                    r0 = r8.apply;
                    r0 = r0.bind(r8)(r3, r5);
                    _fun6230_ip = 107; continue _fun6230;
case 61:
                    r6 = global;
                    r7 = r6.Reflect;
                    r6 = r7.construct;
                    if(r5) { _fun6230_ip = 81; continue _fun6230 }
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
            var _closure1_slot13 = r0;
            r0 = function() { // Original name: _isNativeReflectConstruct, environment: r2
                _fun6231: for(var _fun6231_ip = 0; ; ) switch(_fun6231_ip) {
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
                    _fun6231_ip = 74; continue _fun6231;
case 72: // catch_target0
                    CatchBlockStart(arg_register=1);
case 74:
                    r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                        r0 = _closure2_slot0;
                        r0 = !r0;
                        r0 = !r0;
                        return r0;
                    };
                    _closure1_slot14 = r1;
                    r0 = undefined;
                    r0 = r1.bind(r0)();
                    return r0;
                }
            };
            var _closure1_slot14 = r0;
            r0 = 0;
            r5 = r4[r0];
            r0 = undefined;
            r7 = r3.bind(r0)(r5);
            r19 = global;
            r9 = r19.Object;
            r8 = r9.defineProperty;
            r6 = {};
            r5 = true;
            r6['value'] = r5;
            r5 = '__esModule';
            r5 = r8.bind(r9)(r1, r5, r6);
            r1['default'] = r0;
            r5 = 1;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot2 = r5;
            r5 = 2;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot3 = r5;
            r5 = 3;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot4 = r5;
            r5 = 4;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot5 = r5;
            r5 = 5;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot6 = r5;
            r5 = 6;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot7 = r5;
            r5 = 7;
            r5 = r4[r5];
            r8 = r3.bind(r0)(r5);
            if(!r8) { _fun6227_ip = 252; continue _fun6227 }
case 238:
            r6 = r8.__esModule;
            r5 = r8;
            if(r6) { _fun6227_ip = 519; continue _fun6227 }
case 252:
            r18 = null;
            if(!(r18 !== r8)) { _fun6227_ip = 510; continue _fun6227 }
case 261:
            r9 = typeof r8;
            r6 = 'object';
            if(!(r6 !== r9)) { _fun6227_ip = 283; continue _fun6227 }
case 272:
            r6 = 'function';
            if(!(r6 === r9)) { _fun6227_ip = 510; continue _fun6227 }
case 283:
            r6 = _closure1_slot12;
            r9 = r6.bind(r0)(r0);
            if(!r9) { _fun6227_ip = 311; continue _fun6227 }
case 295:
            r6 = r9.has;
            r6 = r6.bind(r9)(r8);
            if(r6) { _fun6227_ip = 498; continue _fun6227 }
case 311:
            r6 = Object.create(r18);
            r10 = r19.Object;
            r17 = r10.defineProperty;
            if(!r17) { _fun6227_ip = 339; continue _fun6227 }
case 328:
            r10 = r19.Object;
            r17 = r10.getOwnPropertyDescriptor;
case 339:
            r15 = r8;
            r11 = 'default';
            r10 = undefined;
            for(r12 in r15)
case 356:
            {
case 365:
                r23 = r12;
                if(r11 === r23) { _fun6227_ip = 356; continue _fun6227 }
case 372:
                r20 = {};
                r21 = r20.hasOwnProperty;
                r20 = r21.call;
                r20 = r20.bind(r21)(r8, r23);
                if(!r20) { _fun6227_ip = 356; continue _fun6227 }
case 393:
                r20 = null;
                if(!r17) { _fun6227_ip = 415; continue _fun6227 }
case 398:
                r22 = r19.Object;
                r21 = r22.getOwnPropertyDescriptor;
                r20 = r21.bind(r22)(r8, r23);
case 415:
                if(!r20) { _fun6227_ip = 434; continue _fun6227 }
case 418:
                r21 = r20.get;
                if(r21) { _fun6227_ip = 447; continue _fun6227 }
case 426:
                r21 = r20.set;
                if(r21) { _fun6227_ip = 447; continue _fun6227 }
case 434:
                r21 = r8[r23];
                r6[r23] = r21;
                r10 = r20;
                _fun6227_ip = 356; continue _fun6227;
case 447:
                r22 = r19.Object;
                r21 = r22.defineProperty;
                r21 = r21.bind(r22)(r6, r23, r20);
                r10 = r20;
                _fun6227_ip = 356; continue _fun6227;
            }
case 470:
            r6['default'] = r8;
            r5 = r6;
            if(!r9) { _fun6227_ip = 519; continue _fun6227 }
case 482:
            r10 = r9.set;
            r10 = r10.bind(r9)(r8, r6);
            r5 = r6;
            _fun6227_ip = 519; continue _fun6227;
case 498:
            r6 = r9.get;
            r5 = r6.bind(r9)(r8);
            _fun6227_ip = 519; continue _fun6227;
case 510:
            r6 = {};
            r6['default'] = r8;
            r5 = r6;
case 519:
            r6 = 8;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            var _closure1_slot8 = r6;
            r6 = 9;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            r6 = r7.bind(r0)(r6);
            var _closure1_slot9 = r6;
            r6 = 10;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            var _closure1_slot10 = r6;
            r6 = ['size', 'color', 'style', 'animating', 'hidesWhenStopped'];
            var _closure1_slot11 = r6;
            r5 = r5.Component;
            r2 = function(a0) { // Environment: r2
                r3 = function() { // Original name: Flow, environment: r0
                    r4 = this;
                    r3 = undefined;
                    r0 = undefined;
                    r2 = _closure1_slot3;
                    r5 = r2.default;
                    r2 = _closure2_slot0;
                    r5 = r5.bind(r3)(r4, r2);
                    r1 = _closure1_slot13;
                    r0 = arguments;
                    r0 = r1.bind(r3)(r4, r2, r0);
                    return r0;
                };
                var _closure2_slot0 = r3;
                r2 = _closure1_slot7;
                r5 = r2.default;
                r2 = undefined;
                r4 = a0;
                r4 = r5.bind(r2)(r3, r4);
                r1 = _closure1_slot4;
                r1 = r1.default;
                r4 = {};
                r5 = 'render';
                r4['key'] = r5;
                r0 = function() { // Original name: render, environment: r0
                    r0 = this;
                    r6 = r0.props;
                    r0 = r6.size;
                    var _closure3_slot0 = r0;
                    r0 = r6.color;
                    var _closure3_slot1 = r0;
                    r0 = r6.style;
                    var _closure3_slot2 = r0;
                    r5 = r6.animating;
                    var _closure3_slot3 = r5;
                    r0 = r6.hidesWhenStopped;
                    var _closure3_slot4 = r0;
                    r1 = _closure1_slot2;
                    r2 = r1.default;
                    r1 = _closure1_slot11;
                    r3 = undefined;
                    r1 = r2.bind(r3)(r6, r1);
                    var _closure3_slot5 = r1;
                    r1 = _closure1_slot10;
                    r2 = r1.jsx;
                    r0 = _closure1_slot9;
                    r1 = r0.default;
                    r0 = {};
                    r6 = function() { // Original name: initAnimation, environment: r4
                        r0 = {};
                        r1 = function(a0) { // Original name: flow, environment: r1
                            r2 = _closure1_slot0;
                            r3 = _closure1_slot1;
                            r1 = 11;
                            r1 = r3[r1];
                            r4 = undefined;
                            r1 = r2.bind(r4)(r1);
                            r3 = r1.stagger;
                            r2 = {};
                            r1 = 1400;
                            r2['duration'] = r1;
                            r1 = a0;
                            r2['value'] = r1;
                            r0 = _closure1_slot8;
                            r8 = r0.Easing;
                            r7 = r8.bezier;
                            r12 = 0.455;
                            r11 = 0.03;
                            r10 = 0.515;
                            r9 = 0.955;
                            r13 = r8;
                            r0 = r13[r7](r12, r11, r10, r9, r8);
                            r2['easing'] = r0;
                            r0 = [0, 40, 80, 100];
                            r2['keyframes'] = r0;
                            r1 = 150;
                            r0 = 3;
                            r0 = r3.bind(r4)(r1, r0, r2);
                            return r0;
                        };
                        r0['flow'] = r1;
                        return r0;
                    };
                    r0['initAnimation'] = r6;
                    r0['animating'] = r5;
                    r4 = function(a0) { // Original name: children, environment: r4
                        _fun6239: for(var _fun6239_ip = 0; ; ) switch(_fun6239_ip) {
case 0:
                            r1 = _closure1_slot10;
                            r3 = r1.jsx;
                            r0 = _closure1_slot8;
                            r2 = r0.View;
                            r0 = global;
                            r6 = r0.Object;
                            r5 = r6.assign;
                            r4 = {};
                            r7 = {};
                            r8 = _closure3_slot0;
                            r7['width'] = r8;
                            r1 = 0.25;
                            r1 = r8 * r1;
                            r7['height'] = r1;
                            r1 = 'space-between';
                            r7['justifyContent'] = r1;
                            r1 = 'row';
                            r7['flexDirection'] = r1;
                            r8 = _closure3_slot3;
                            r9 = 1;
                            r1 = r9;
                            if(r8) { _fun6239_ip = 109; continue _fun6239 }
case 97:
                            r8 = _closure3_slot4;
                            r1 = r9;
                            if(!r8) { _fun6239_ip = 109; continue _fun6239 }
case 107:
                            r1 = 0;
case 109:
                            r7['opacity'] = r1;
                            r1 = new Array(2);
                            r1[0] = r7;
                            r7 = _closure3_slot2;
                            r1[1] = r7;
                            r4['style'] = r1;
                            r1 = _closure3_slot5;
                            r0 = {};
                            r7 = a0;
                            r9 = r7.flow;
                            r8 = r9.map;
                            r7 = function(a0, a1) { // Environment: r7
                                r7 = a0;
                                r1 = _closure1_slot10;
                                r4 = r1.jsx;
                                r0 = _closure1_slot8;
                                r0 = r0.Animated;
                                r3 = r0.View;
                                r2 = {};
                                r0 = {};
                                r6 = _closure3_slot0;
                                r5 = 0.25;
                                r8 = r6 * r5;
                                r0['width'] = r8;
                                r8 = r6 * r5;
                                r0['height'] = r8;
                                r6 = r6 * r5;
                                r5 = 2;
                                r5 = r6 / r5;
                                r0['borderRadius'] = r5;
                                r1 = _closure3_slot1;
                                r0['backgroundColor'] = r1;
                                r5 = {};
                                r6 = r7.interpolate;
                                r1 = {};
                                r8 = [0, 40, 80, 100];
                                r1['inputRange'] = r8;
                                r8 = [0.3, 1, 0.3, 0.3];
                                r1['outputRange'] = r8;
                                r1 = r6.bind(r7)(r1);
                                r5['scale'] = r1;
                                r1 = new Array(1);
                                r1[0] = r5;
                                r0['transform'] = r1;
                                r2['style'] = r0;
                                r1 = undefined;
                                r0 = a1;
                                r0 = r4.bind(r1)(r3, r2, r0);
                                return r0;
                            };
                            r7 = r8.bind(r9)(r7);
                            r0['children'] = r7;
                            r1 = r5.bind(r6)(r4, r1, r0);
                            r0 = undefined;
                            r0 = r3.bind(r0)(r2, r1);
                            return r0;
                        }
                    };
                    r0['children'] = r4;
                    r0 = r2.bind(r3)(r1, r0);
                    return r0;
                };
                r4['value'] = r0;
                r0 = new Array(1);
                r0[0] = r4;
                r0 = r1.bind(r2)(r3, r0);
                return r0;
            };
            r2 = r2.bind(r0)(r5);
            r1['default'] = r2;
            r1 = 12;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r1.defaultProps;
            r2['defaultProps'] = r1;
            return r0;
        }
    };
    r6 = 573;
    r5 = [1, 203, 12, 13, 23, 25, 28, 119, 2, 565, 251, 566, 567];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun6241: for(var _fun6241_ip = 0; ; ) switch(_fun6241_ip) {
case 0:
            r3 = a1;
            r1 = a5;
            r4 = a6;
            var _closure1_slot0 = r3;
            var _closure1_slot1 = r4;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r2
                _fun6242: for(var _fun6242_ip = 0; ; ) switch(_fun6242_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun6242_ip = 104; continue _fun6242 }
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
                        _fun6243: for(var _fun6243_ip = 0; ; ) switch(_fun6243_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun6243_ip = 15; continue _fun6243 }
case 9:
                            r0 = _closure2_slot0;
                            _fun6243_ip = 19; continue _fun6243;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot12 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot12 = r0;
            r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r2
                _fun6244: for(var _fun6244_ip = 0; ; ) switch(_fun6244_ip) {
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
                    r0 = _closure1_slot14;
                    r0 = r0.bind(r2)();
                    if(r0) { _fun6244_ip = 61; continue _fun6244 }
case 48:
                    r0 = r8.apply;
                    r0 = r0.bind(r8)(r3, r5);
                    _fun6244_ip = 107; continue _fun6244;
case 61:
                    r6 = global;
                    r7 = r6.Reflect;
                    r6 = r7.construct;
                    if(r5) { _fun6244_ip = 81; continue _fun6244 }
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
            var _closure1_slot13 = r0;
            r0 = function() { // Original name: _isNativeReflectConstruct, environment: r2
                _fun6245: for(var _fun6245_ip = 0; ; ) switch(_fun6245_ip) {
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
                    _fun6245_ip = 74; continue _fun6245;
case 72: // catch_target0
                    CatchBlockStart(arg_register=1);
case 74:
                    r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                        r0 = _closure2_slot0;
                        r0 = !r0;
                        r0 = !r0;
                        return r0;
                    };
                    _closure1_slot14 = r1;
                    r0 = undefined;
                    r0 = r1.bind(r0)();
                    return r0;
                }
            };
            var _closure1_slot14 = r0;
            r0 = 0;
            r5 = r4[r0];
            r0 = undefined;
            r7 = r3.bind(r0)(r5);
            r19 = global;
            r9 = r19.Object;
            r8 = r9.defineProperty;
            r6 = {};
            r5 = true;
            r6['value'] = r5;
            r5 = '__esModule';
            r5 = r8.bind(r9)(r1, r5, r6);
            r1['default'] = r0;
            r5 = 1;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot2 = r5;
            r5 = 2;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot3 = r5;
            r5 = 3;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot4 = r5;
            r5 = 4;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot5 = r5;
            r5 = 5;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot6 = r5;
            r5 = 6;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot7 = r5;
            r5 = 7;
            r5 = r4[r5];
            r8 = r3.bind(r0)(r5);
            if(!r8) { _fun6241_ip = 252; continue _fun6241 }
case 238:
            r6 = r8.__esModule;
            r5 = r8;
            if(r6) { _fun6241_ip = 519; continue _fun6241 }
case 252:
            r18 = null;
            if(!(r18 !== r8)) { _fun6241_ip = 510; continue _fun6241 }
case 261:
            r9 = typeof r8;
            r6 = 'object';
            if(!(r6 !== r9)) { _fun6241_ip = 283; continue _fun6241 }
case 272:
            r6 = 'function';
            if(!(r6 === r9)) { _fun6241_ip = 510; continue _fun6241 }
case 283:
            r6 = _closure1_slot12;
            r9 = r6.bind(r0)(r0);
            if(!r9) { _fun6241_ip = 311; continue _fun6241 }
case 295:
            r6 = r9.has;
            r6 = r6.bind(r9)(r8);
            if(r6) { _fun6241_ip = 498; continue _fun6241 }
case 311:
            r6 = Object.create(r18);
            r10 = r19.Object;
            r17 = r10.defineProperty;
            if(!r17) { _fun6241_ip = 339; continue _fun6241 }
case 328:
            r10 = r19.Object;
            r17 = r10.getOwnPropertyDescriptor;
case 339:
            r15 = r8;
            r11 = 'default';
            r10 = undefined;
            for(r12 in r15)
case 356:
            {
case 365:
                r23 = r12;
                if(r11 === r23) { _fun6241_ip = 356; continue _fun6241 }
case 372:
                r20 = {};
                r21 = r20.hasOwnProperty;
                r20 = r21.call;
                r20 = r20.bind(r21)(r8, r23);
                if(!r20) { _fun6241_ip = 356; continue _fun6241 }
case 393:
                r20 = null;
                if(!r17) { _fun6241_ip = 415; continue _fun6241 }
case 398:
                r22 = r19.Object;
                r21 = r22.getOwnPropertyDescriptor;
                r20 = r21.bind(r22)(r8, r23);
case 415:
                if(!r20) { _fun6241_ip = 434; continue _fun6241 }
case 418:
                r21 = r20.get;
                if(r21) { _fun6241_ip = 447; continue _fun6241 }
case 426:
                r21 = r20.set;
                if(r21) { _fun6241_ip = 447; continue _fun6241 }
case 434:
                r21 = r8[r23];
                r6[r23] = r21;
                r10 = r20;
                _fun6241_ip = 356; continue _fun6241;
case 447:
                r22 = r19.Object;
                r21 = r22.defineProperty;
                r21 = r21.bind(r22)(r6, r23, r20);
                r10 = r20;
                _fun6241_ip = 356; continue _fun6241;
            }
case 470:
            r6['default'] = r8;
            r5 = r6;
            if(!r9) { _fun6241_ip = 519; continue _fun6241 }
case 482:
            r10 = r9.set;
            r10 = r10.bind(r9)(r8, r6);
            r5 = r6;
            _fun6241_ip = 519; continue _fun6241;
case 498:
            r6 = r9.get;
            r5 = r6.bind(r9)(r8);
            _fun6241_ip = 519; continue _fun6241;
case 510:
            r6 = {};
            r6['default'] = r8;
            r5 = r6;
case 519:
            r6 = 8;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            var _closure1_slot8 = r6;
            r6 = 9;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            r6 = r7.bind(r0)(r6);
            var _closure1_slot9 = r6;
            r6 = 10;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            var _closure1_slot10 = r6;
            r6 = ['size', 'color', 'style', 'animating', 'hidesWhenStopped'];
            var _closure1_slot11 = r6;
            r5 = r5.Component;
            r2 = function(a0) { // Environment: r2
                r3 = function() { // Original name: Circle, environment: r0
                    r4 = this;
                    r3 = undefined;
                    r0 = undefined;
                    r2 = _closure1_slot3;
                    r5 = r2.default;
                    r2 = _closure2_slot0;
                    r5 = r5.bind(r3)(r4, r2);
                    r1 = _closure1_slot13;
                    r0 = arguments;
                    r0 = r1.bind(r3)(r4, r2, r0);
                    return r0;
                };
                var _closure2_slot0 = r3;
                r2 = _closure1_slot7;
                r5 = r2.default;
                r2 = undefined;
                r4 = a0;
                r4 = r5.bind(r2)(r3, r4);
                r1 = _closure1_slot4;
                r1 = r1.default;
                r4 = {};
                r5 = 'render';
                r4['key'] = r5;
                r0 = function() { // Original name: render, environment: r0
                    r0 = this;
                    r8 = r0.props;
                    r6 = r8.size;
                    var _closure3_slot0 = r6;
                    r7 = r8.color;
                    r0 = r8.style;
                    var _closure3_slot1 = r0;
                    r5 = r8.animating;
                    var _closure3_slot2 = r5;
                    r0 = r8.hidesWhenStopped;
                    var _closure3_slot3 = r0;
                    r1 = _closure1_slot2;
                    r2 = r1.default;
                    r1 = _closure1_slot11;
                    r3 = undefined;
                    r1 = r2.bind(r3)(r8, r1);
                    var _closure3_slot4 = r1;
                    r1 = {};
                    r2 = 'absolute';
                    r1['position'] = r2;
                    r2 = 0.15;
                    r8 = r6 * r2;
                    r1['width'] = r8;
                    r8 = r6 * r2;
                    r1['height'] = r8;
                    r1['backgroundColor'] = r7;
                    r6 = r6 * r2;
                    r2 = 2;
                    r2 = r6 / r2;
                    r1['borderRadius'] = r2;
                    var _closure3_slot5 = r1;
                    r1 = _closure1_slot10;
                    r2 = r1.jsx;
                    r0 = _closure1_slot9;
                    r1 = r0.default;
                    r0 = {};
                    r6 = function() { // Original name: initAnimation, environment: r4
                        r0 = {};
                        r1 = function(a0) { // Original name: circle, environment: r1
                            r1 = _closure1_slot0;
                            r2 = _closure1_slot1;
                            r0 = 11;
                            r0 = r2[r0];
                            r4 = undefined;
                            r0 = r1.bind(r4)(r0);
                            r3 = r0.stagger;
                            r2 = {};
                            r0 = 1200;
                            r2['duration'] = r0;
                            r0 = a0;
                            r2['value'] = r0;
                            r0 = [0, 40, 80, 100];
                            r2['keyframes'] = r0;
                            r1 = 100;
                            r0 = 12;
                            r0 = r3.bind(r4)(r1, r0, r2);
                            return r0;
                        };
                        r0['circle'] = r1;
                        return r0;
                    };
                    r0['initAnimation'] = r6;
                    r0['animating'] = r5;
                    r4 = function(a0) { // Original name: children, environment: r4
                        _fun6253: for(var _fun6253_ip = 0; ; ) switch(_fun6253_ip) {
case 0:
                            r1 = _closure1_slot10;
                            r3 = r1.jsx;
                            r0 = _closure1_slot8;
                            r2 = r0.View;
                            r0 = global;
                            r6 = r0.Object;
                            r5 = r6.assign;
                            r4 = {};
                            r7 = {};
                            r1 = _closure3_slot0;
                            r7['width'] = r1;
                            r7['height'] = r1;
                            r1 = 'center';
                            r7['alignItems'] = r1;
                            r7['justifyContent'] = r1;
                            r8 = _closure3_slot2;
                            r9 = 1;
                            r1 = r9;
                            if(r8) { _fun6253_ip = 91; continue _fun6253 }
case 79:
                            r8 = _closure3_slot3;
                            r1 = r9;
                            if(!r8) { _fun6253_ip = 91; continue _fun6253 }
case 89:
                            r1 = 0;
case 91:
                            r7['opacity'] = r1;
                            r1 = new Array(2);
                            r1[0] = r7;
                            r7 = _closure3_slot1;
                            r1[1] = r7;
                            r4['style'] = r1;
                            r1 = _closure3_slot4;
                            r0 = {};
                            r7 = a0;
                            r9 = r7.circle;
                            r8 = r9.map;
                            r7 = function(a0, a1) { // Environment: r7
                                r10 = a0;
                                r4 = a1;
                                r1 = _closure1_slot10;
                                r3 = r1.jsx;
                                r0 = _closure1_slot8;
                                r0 = r0.Animated;
                                r2 = r0.View;
                                r1 = {};
                                r5 = _closure3_slot5;
                                r0 = new Array(2);
                                r0[0] = r5;
                                r5 = {};
                                r7 = {};
                                r6 = 30;
                                r12 = r4 * r6;
                                r6 = global;
                                r6 = r6.HermesInternal;
                                r11 = r6.concat;
                                r9 = '';
                                r6 = 'deg';
                                r6 = r11.bind(r9)(r12, r6);
                                r7['rotate'] = r6;
                                r6 = new Array(3);
                                r6[0] = r7;
                                r7 = {};
                                r12 = _closure3_slot0;
                                r8 = -r12;
                                r11 = 2;
                                r9 = r8 / r11;
                                r8 = 0.15;
                                r8 = r12 * r8;
                                r8 = r8 / r11;
                                r8 = r9 + r8;
                                r7['translateY'] = r8;
                                r6[1] = r7;
                                r7 = {};
                                r9 = r10.interpolate;
                                r8 = {};
                                r11 = [0, 40, 80, 100];
                                r8['inputRange'] = r11;
                                r11 = [0.01, 1, 0.01, 0.01];
                                r8['outputRange'] = r11;
                                r8 = r9.bind(r10)(r8);
                                r7['scale'] = r8;
                                r6[2] = r7;
                                r5['transform'] = r6;
                                r0[1] = r5;
                                r1['style'] = r0;
                                r0 = undefined;
                                r0 = r3.bind(r0)(r2, r1, r4);
                                return r0;
                            };
                            r7 = r8.bind(r9)(r7);
                            r0['children'] = r7;
                            r1 = r5.bind(r6)(r4, r1, r0);
                            r0 = undefined;
                            r0 = r3.bind(r0)(r2, r1);
                            return r0;
                        }
                    };
                    r0['children'] = r4;
                    r0 = r2.bind(r3)(r1, r0);
                    return r0;
                };
                r4['value'] = r0;
                r0 = new Array(1);
                r0[0] = r4;
                r0 = r1.bind(r2)(r3, r0);
                return r0;
            };
            r2 = r2.bind(r0)(r5);
            r1['default'] = r2;
            r1 = 12;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r1.defaultProps;
            r2['defaultProps'] = r1;
            return r0;
        }
    };
    r6 = 574;
    r5 = [1, 203, 12, 13, 23, 25, 28, 119, 2, 565, 251, 566, 567];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun6255: for(var _fun6255_ip = 0; ; ) switch(_fun6255_ip) {
case 0:
            r3 = a1;
            r1 = a5;
            r4 = a6;
            var _closure1_slot0 = r3;
            var _closure1_slot1 = r4;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r2
                _fun6256: for(var _fun6256_ip = 0; ; ) switch(_fun6256_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun6256_ip = 104; continue _fun6256 }
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
                        _fun6257: for(var _fun6257_ip = 0; ; ) switch(_fun6257_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun6257_ip = 15; continue _fun6257 }
case 9:
                            r0 = _closure2_slot0;
                            _fun6257_ip = 19; continue _fun6257;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot12 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot12 = r0;
            r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r2
                _fun6258: for(var _fun6258_ip = 0; ; ) switch(_fun6258_ip) {
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
                    r0 = _closure1_slot14;
                    r0 = r0.bind(r2)();
                    if(r0) { _fun6258_ip = 61; continue _fun6258 }
case 48:
                    r0 = r8.apply;
                    r0 = r0.bind(r8)(r3, r5);
                    _fun6258_ip = 107; continue _fun6258;
case 61:
                    r6 = global;
                    r7 = r6.Reflect;
                    r6 = r7.construct;
                    if(r5) { _fun6258_ip = 81; continue _fun6258 }
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
            var _closure1_slot13 = r0;
            r0 = function() { // Original name: _isNativeReflectConstruct, environment: r2
                _fun6259: for(var _fun6259_ip = 0; ; ) switch(_fun6259_ip) {
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
                    _fun6259_ip = 74; continue _fun6259;
case 72: // catch_target0
                    CatchBlockStart(arg_register=1);
case 74:
                    r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                        r0 = _closure2_slot0;
                        r0 = !r0;
                        r0 = !r0;
                        return r0;
                    };
                    _closure1_slot14 = r1;
                    r0 = undefined;
                    r0 = r1.bind(r0)();
                    return r0;
                }
            };
            var _closure1_slot14 = r0;
            r0 = 0;
            r5 = r4[r0];
            r0 = undefined;
            r7 = r3.bind(r0)(r5);
            r19 = global;
            r9 = r19.Object;
            r8 = r9.defineProperty;
            r6 = {};
            r5 = true;
            r6['value'] = r5;
            r5 = '__esModule';
            r5 = r8.bind(r9)(r1, r5, r6);
            r1['default'] = r0;
            r5 = 1;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot2 = r5;
            r5 = 2;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot3 = r5;
            r5 = 3;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot4 = r5;
            r5 = 4;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot5 = r5;
            r5 = 5;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot6 = r5;
            r5 = 6;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot7 = r5;
            r5 = 7;
            r5 = r4[r5];
            r8 = r3.bind(r0)(r5);
            if(!r8) { _fun6255_ip = 252; continue _fun6255 }
case 238:
            r6 = r8.__esModule;
            r5 = r8;
            if(r6) { _fun6255_ip = 519; continue _fun6255 }
case 252:
            r18 = null;
            if(!(r18 !== r8)) { _fun6255_ip = 510; continue _fun6255 }
case 261:
            r9 = typeof r8;
            r6 = 'object';
            if(!(r6 !== r9)) { _fun6255_ip = 283; continue _fun6255 }
case 272:
            r6 = 'function';
            if(!(r6 === r9)) { _fun6255_ip = 510; continue _fun6255 }
case 283:
            r6 = _closure1_slot12;
            r9 = r6.bind(r0)(r0);
            if(!r9) { _fun6255_ip = 311; continue _fun6255 }
case 295:
            r6 = r9.has;
            r6 = r6.bind(r9)(r8);
            if(r6) { _fun6255_ip = 498; continue _fun6255 }
case 311:
            r6 = Object.create(r18);
            r10 = r19.Object;
            r17 = r10.defineProperty;
            if(!r17) { _fun6255_ip = 339; continue _fun6255 }
case 328:
            r10 = r19.Object;
            r17 = r10.getOwnPropertyDescriptor;
case 339:
            r15 = r8;
            r11 = 'default';
            r10 = undefined;
            for(r12 in r15)
case 356:
            {
case 365:
                r23 = r12;
                if(r11 === r23) { _fun6255_ip = 356; continue _fun6255 }
case 372:
                r20 = {};
                r21 = r20.hasOwnProperty;
                r20 = r21.call;
                r20 = r20.bind(r21)(r8, r23);
                if(!r20) { _fun6255_ip = 356; continue _fun6255 }
case 393:
                r20 = null;
                if(!r17) { _fun6255_ip = 415; continue _fun6255 }
case 398:
                r22 = r19.Object;
                r21 = r22.getOwnPropertyDescriptor;
                r20 = r21.bind(r22)(r8, r23);
case 415:
                if(!r20) { _fun6255_ip = 434; continue _fun6255 }
case 418:
                r21 = r20.get;
                if(r21) { _fun6255_ip = 447; continue _fun6255 }
case 426:
                r21 = r20.set;
                if(r21) { _fun6255_ip = 447; continue _fun6255 }
case 434:
                r21 = r8[r23];
                r6[r23] = r21;
                r10 = r20;
                _fun6255_ip = 356; continue _fun6255;
case 447:
                r22 = r19.Object;
                r21 = r22.defineProperty;
                r21 = r21.bind(r22)(r6, r23, r20);
                r10 = r20;
                _fun6255_ip = 356; continue _fun6255;
            }
case 470:
            r6['default'] = r8;
            r5 = r6;
            if(!r9) { _fun6255_ip = 519; continue _fun6255 }
case 482:
            r10 = r9.set;
            r10 = r10.bind(r9)(r8, r6);
            r5 = r6;
            _fun6255_ip = 519; continue _fun6255;
case 498:
            r6 = r9.get;
            r5 = r6.bind(r9)(r8);
            _fun6255_ip = 519; continue _fun6255;
case 510:
            r6 = {};
            r6['default'] = r8;
            r5 = r6;
case 519:
            r6 = 8;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            var _closure1_slot8 = r6;
            r6 = 9;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            r6 = r7.bind(r0)(r6);
            var _closure1_slot9 = r6;
            r6 = 10;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            var _closure1_slot10 = r6;
            r6 = ['size', 'color', 'style', 'animating', 'hidesWhenStopped'];
            var _closure1_slot11 = r6;
            r5 = r5.Component;
            r2 = function(a0) { // Environment: r2
                r3 = function() { // Original name: CircleFade, environment: r0
                    r4 = this;
                    r3 = undefined;
                    r0 = undefined;
                    r2 = _closure1_slot3;
                    r5 = r2.default;
                    r2 = _closure2_slot0;
                    r5 = r5.bind(r3)(r4, r2);
                    r1 = _closure1_slot13;
                    r0 = arguments;
                    r0 = r1.bind(r3)(r4, r2, r0);
                    return r0;
                };
                var _closure2_slot0 = r3;
                r2 = _closure1_slot7;
                r5 = r2.default;
                r2 = undefined;
                r4 = a0;
                r4 = r5.bind(r2)(r3, r4);
                r1 = _closure1_slot4;
                r1 = r1.default;
                r4 = {};
                r5 = 'render';
                r4['key'] = r5;
                r0 = function() { // Original name: render, environment: r0
                    r0 = this;
                    r8 = r0.props;
                    r6 = r8.size;
                    var _closure3_slot0 = r6;
                    r7 = r8.color;
                    r0 = r8.style;
                    var _closure3_slot1 = r0;
                    r5 = r8.animating;
                    var _closure3_slot2 = r5;
                    r0 = r8.hidesWhenStopped;
                    var _closure3_slot3 = r0;
                    r1 = _closure1_slot2;
                    r2 = r1.default;
                    r1 = _closure1_slot11;
                    r3 = undefined;
                    r1 = r2.bind(r3)(r8, r1);
                    var _closure3_slot4 = r1;
                    r1 = {};
                    r2 = 'absolute';
                    r1['position'] = r2;
                    r2 = 0.15;
                    r8 = r6 * r2;
                    r1['width'] = r8;
                    r8 = r6 * r2;
                    r1['height'] = r8;
                    r1['backgroundColor'] = r7;
                    r6 = r6 * r2;
                    r2 = 2;
                    r2 = r6 / r2;
                    r1['borderRadius'] = r2;
                    var _closure3_slot5 = r1;
                    r1 = _closure1_slot10;
                    r2 = r1.jsx;
                    r0 = _closure1_slot9;
                    r1 = r0.default;
                    r0 = {};
                    r6 = function() { // Original name: initAnimation, environment: r4
                        r0 = {};
                        r1 = function(a0) { // Original name: circleFade, environment: r1
                            r1 = _closure1_slot0;
                            r2 = _closure1_slot1;
                            r0 = 11;
                            r0 = r2[r0];
                            r4 = undefined;
                            r0 = r1.bind(r4)(r0);
                            r3 = r0.stagger;
                            r2 = {};
                            r0 = 1200;
                            r2['duration'] = r0;
                            r0 = a0;
                            r2['value'] = r0;
                            r0 = [0, 39, 40, 100];
                            r2['keyframes'] = r0;
                            r1 = 100;
                            r0 = 12;
                            r0 = r3.bind(r4)(r1, r0, r2);
                            return r0;
                        };
                        r0['circleFade'] = r1;
                        return r0;
                    };
                    r0['initAnimation'] = r6;
                    r0['animating'] = r5;
                    r4 = function(a0) { // Original name: children, environment: r4
                        _fun6267: for(var _fun6267_ip = 0; ; ) switch(_fun6267_ip) {
case 0:
                            r1 = _closure1_slot10;
                            r3 = r1.jsx;
                            r0 = _closure1_slot8;
                            r2 = r0.View;
                            r0 = global;
                            r6 = r0.Object;
                            r5 = r6.assign;
                            r4 = {};
                            r7 = {};
                            r1 = _closure3_slot0;
                            r7['width'] = r1;
                            r7['height'] = r1;
                            r1 = 'center';
                            r7['alignItems'] = r1;
                            r7['justifyContent'] = r1;
                            r8 = _closure3_slot2;
                            r9 = 1;
                            r1 = r9;
                            if(r8) { _fun6267_ip = 91; continue _fun6267 }
case 79:
                            r8 = _closure3_slot3;
                            r1 = r9;
                            if(!r8) { _fun6267_ip = 91; continue _fun6267 }
case 89:
                            r1 = 0;
case 91:
                            r7['opacity'] = r1;
                            r1 = new Array(2);
                            r1[0] = r7;
                            r7 = _closure3_slot1;
                            r1[1] = r7;
                            r4['style'] = r1;
                            r1 = _closure3_slot4;
                            r0 = {};
                            r7 = a0;
                            r9 = r7.circleFade;
                            r8 = r9.map;
                            r7 = function(a0, a1) { // Environment: r7
                                r10 = a0;
                                r4 = a1;
                                r1 = _closure1_slot10;
                                r3 = r1.jsx;
                                r0 = _closure1_slot8;
                                r0 = r0.Animated;
                                r2 = r0.View;
                                r1 = {};
                                r5 = _closure3_slot5;
                                r0 = new Array(2);
                                r0[0] = r5;
                                r5 = {};
                                r7 = r10.interpolate;
                                r6 = {};
                                r9 = [0, 39, 40, 100];
                                r6['inputRange'] = r9;
                                r9 = [0, 0, 1, 0];
                                r6['outputRange'] = r9;
                                r6 = r7.bind(r10)(r6);
                                r5['opacity'] = r6;
                                r7 = {};
                                r6 = 30;
                                r12 = r4 * r6;
                                r6 = global;
                                r6 = r6.HermesInternal;
                                r11 = r6.concat;
                                r9 = '';
                                r6 = 'deg';
                                r6 = r11.bind(r9)(r12, r6);
                                r7['rotate'] = r6;
                                r6 = new Array(3);
                                r6[0] = r7;
                                r7 = {};
                                r12 = _closure3_slot0;
                                r8 = -r12;
                                r11 = 2;
                                r9 = r8 / r11;
                                r8 = 0.15;
                                r8 = r12 * r8;
                                r8 = r8 / r11;
                                r8 = r9 + r8;
                                r7['translateY'] = r8;
                                r6[1] = r7;
                                r7 = {};
                                r9 = r10.interpolate;
                                r8 = {};
                                r11 = [0, 39, 40, 100];
                                r8['inputRange'] = r11;
                                r11 = [0.6, 0.6, 1, 0.6];
                                r8['outputRange'] = r11;
                                r8 = r9.bind(r10)(r8);
                                r7['scale'] = r8;
                                r6[2] = r7;
                                r5['transform'] = r6;
                                r0[1] = r5;
                                r1['style'] = r0;
                                r0 = undefined;
                                r0 = r3.bind(r0)(r2, r1, r4);
                                return r0;
                            };
                            r7 = r8.bind(r9)(r7);
                            r0['children'] = r7;
                            r1 = r5.bind(r6)(r4, r1, r0);
                            r0 = undefined;
                            r0 = r3.bind(r0)(r2, r1);
                            return r0;
                        }
                    };
                    r0['children'] = r4;
                    r0 = r2.bind(r3)(r1, r0);
                    return r0;
                };
                r4['value'] = r0;
                r0 = new Array(1);
                r0[0] = r4;
                r0 = r1.bind(r2)(r3, r0);
                return r0;
            };
            r2 = r2.bind(r0)(r5);
            r1['default'] = r2;
            r1 = 12;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r1.defaultProps;
            r2['defaultProps'] = r1;
            return r0;
        }
    };
    r6 = 575;
    r5 = [1, 203, 12, 13, 23, 25, 28, 119, 2, 565, 251, 566, 567];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun6269: for(var _fun6269_ip = 0; ; ) switch(_fun6269_ip) {
case 0:
            r3 = a1;
            r1 = a5;
            r4 = a6;
            var _closure1_slot0 = r3;
            var _closure1_slot1 = r4;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r2
                _fun6270: for(var _fun6270_ip = 0; ; ) switch(_fun6270_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun6270_ip = 104; continue _fun6270 }
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
                        _fun6271: for(var _fun6271_ip = 0; ; ) switch(_fun6271_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun6271_ip = 15; continue _fun6271 }
case 9:
                            r0 = _closure2_slot0;
                            _fun6271_ip = 19; continue _fun6271;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot13 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot13 = r0;
            r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r2
                _fun6272: for(var _fun6272_ip = 0; ; ) switch(_fun6272_ip) {
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
                    r0 = _closure1_slot15;
                    r0 = r0.bind(r2)();
                    if(r0) { _fun6272_ip = 61; continue _fun6272 }
case 48:
                    r0 = r8.apply;
                    r0 = r0.bind(r8)(r3, r5);
                    _fun6272_ip = 107; continue _fun6272;
case 61:
                    r6 = global;
                    r7 = r6.Reflect;
                    r6 = r7.construct;
                    if(r5) { _fun6272_ip = 81; continue _fun6272 }
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
            var _closure1_slot14 = r0;
            r0 = function() { // Original name: _isNativeReflectConstruct, environment: r2
                _fun6273: for(var _fun6273_ip = 0; ; ) switch(_fun6273_ip) {
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
                    _fun6273_ip = 74; continue _fun6273;
case 72: // catch_target0
                    CatchBlockStart(arg_register=1);
case 74:
                    r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                        r0 = _closure2_slot0;
                        r0 = !r0;
                        r0 = !r0;
                        return r0;
                    };
                    _closure1_slot15 = r1;
                    r0 = undefined;
                    r0 = r1.bind(r0)();
                    return r0;
                }
            };
            var _closure1_slot15 = r0;
            r0 = 0;
            r5 = r4[r0];
            r0 = undefined;
            r7 = r3.bind(r0)(r5);
            r19 = global;
            r9 = r19.Object;
            r8 = r9.defineProperty;
            r6 = {};
            r5 = true;
            r6['value'] = r5;
            r5 = '__esModule';
            r5 = r8.bind(r9)(r1, r5, r6);
            r1['default'] = r0;
            r5 = 1;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot2 = r5;
            r5 = 2;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot3 = r5;
            r5 = 3;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot4 = r5;
            r5 = 4;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot5 = r5;
            r5 = 5;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot6 = r5;
            r5 = 6;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot7 = r5;
            r5 = 7;
            r5 = r4[r5];
            r8 = r3.bind(r0)(r5);
            if(!r8) { _fun6269_ip = 252; continue _fun6269 }
case 238:
            r6 = r8.__esModule;
            r5 = r8;
            if(r6) { _fun6269_ip = 519; continue _fun6269 }
case 252:
            r18 = null;
            if(!(r18 !== r8)) { _fun6269_ip = 510; continue _fun6269 }
case 261:
            r9 = typeof r8;
            r6 = 'object';
            if(!(r6 !== r9)) { _fun6269_ip = 283; continue _fun6269 }
case 272:
            r6 = 'function';
            if(!(r6 === r9)) { _fun6269_ip = 510; continue _fun6269 }
case 283:
            r6 = _closure1_slot13;
            r9 = r6.bind(r0)(r0);
            if(!r9) { _fun6269_ip = 311; continue _fun6269 }
case 295:
            r6 = r9.has;
            r6 = r6.bind(r9)(r8);
            if(r6) { _fun6269_ip = 498; continue _fun6269 }
case 311:
            r6 = Object.create(r18);
            r10 = r19.Object;
            r17 = r10.defineProperty;
            if(!r17) { _fun6269_ip = 339; continue _fun6269 }
case 328:
            r10 = r19.Object;
            r17 = r10.getOwnPropertyDescriptor;
case 339:
            r15 = r8;
            r11 = 'default';
            r10 = undefined;
            for(r12 in r15)
case 356:
            {
case 365:
                r23 = r12;
                if(r11 === r23) { _fun6269_ip = 356; continue _fun6269 }
case 372:
                r20 = {};
                r21 = r20.hasOwnProperty;
                r20 = r21.call;
                r20 = r20.bind(r21)(r8, r23);
                if(!r20) { _fun6269_ip = 356; continue _fun6269 }
case 393:
                r20 = null;
                if(!r17) { _fun6269_ip = 415; continue _fun6269 }
case 398:
                r22 = r19.Object;
                r21 = r22.getOwnPropertyDescriptor;
                r20 = r21.bind(r22)(r8, r23);
case 415:
                if(!r20) { _fun6269_ip = 434; continue _fun6269 }
case 418:
                r21 = r20.get;
                if(r21) { _fun6269_ip = 447; continue _fun6269 }
case 426:
                r21 = r20.set;
                if(r21) { _fun6269_ip = 447; continue _fun6269 }
case 434:
                r21 = r8[r23];
                r6[r23] = r21;
                r10 = r20;
                _fun6269_ip = 356; continue _fun6269;
case 447:
                r22 = r19.Object;
                r21 = r22.defineProperty;
                r21 = r21.bind(r22)(r6, r23, r20);
                r10 = r20;
                _fun6269_ip = 356; continue _fun6269;
            }
case 470:
            r6['default'] = r8;
            r5 = r6;
            if(!r9) { _fun6269_ip = 519; continue _fun6269 }
case 482:
            r10 = r9.set;
            r10 = r10.bind(r9)(r8, r6);
            r5 = r6;
            _fun6269_ip = 519; continue _fun6269;
case 498:
            r6 = r9.get;
            r5 = r6.bind(r9)(r8);
            _fun6269_ip = 519; continue _fun6269;
case 510:
            r6 = {};
            r6['default'] = r8;
            r5 = r6;
case 519:
            r6 = 8;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            var _closure1_slot8 = r6;
            r6 = 9;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            r6 = r7.bind(r0)(r6);
            var _closure1_slot9 = r6;
            r6 = 10;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            var _closure1_slot10 = r6;
            r6 = ['size', 'color', 'style', 'animating', 'hidesWhenStopped'];
            var _closure1_slot11 = r6;
            r6 = [2, 3, 4, 1, 2, 3, 0, 1, 2];
            var _closure1_slot12 = r6;
            r5 = r5.Component;
            r2 = function(a0) { // Environment: r2
                r3 = function() { // Original name: Grid, environment: r0
                    r4 = this;
                    r3 = undefined;
                    r0 = undefined;
                    r2 = _closure1_slot3;
                    r5 = r2.default;
                    r2 = _closure2_slot0;
                    r5 = r5.bind(r3)(r4, r2);
                    r1 = _closure1_slot14;
                    r0 = arguments;
                    r0 = r1.bind(r3)(r4, r2, r0);
                    return r0;
                };
                var _closure2_slot0 = r3;
                r2 = _closure1_slot7;
                r5 = r2.default;
                r2 = undefined;
                r4 = a0;
                r4 = r5.bind(r2)(r3, r4);
                r1 = _closure1_slot4;
                r1 = r1.default;
                r4 = {};
                r5 = 'render';
                r4['key'] = r5;
                r0 = function() { // Original name: render, environment: r0
                    r0 = this;
                    r6 = r0.props;
                    r0 = r6.size;
                    var _closure3_slot0 = r0;
                    r0 = r6.color;
                    var _closure3_slot1 = r0;
                    r0 = r6.style;
                    var _closure3_slot2 = r0;
                    r5 = r6.animating;
                    var _closure3_slot3 = r5;
                    r0 = r6.hidesWhenStopped;
                    var _closure3_slot4 = r0;
                    r1 = _closure1_slot2;
                    r2 = r1.default;
                    r1 = _closure1_slot11;
                    r3 = undefined;
                    r1 = r2.bind(r3)(r6, r1);
                    var _closure3_slot5 = r1;
                    r1 = _closure1_slot10;
                    r2 = r1.jsx;
                    r0 = _closure1_slot9;
                    r1 = r0.default;
                    r0 = {};
                    r6 = function() { // Original name: initAnimation, environment: r4
                        r0 = {};
                        r1 = function(a0) { // Original name: grid, environment: r1
                            r1 = _closure1_slot0;
                            r2 = _closure1_slot1;
                            r0 = 11;
                            r0 = r2[r0];
                            r4 = undefined;
                            r0 = r1.bind(r4)(r0);
                            r3 = r0.stagger;
                            r2 = {};
                            r0 = 1300;
                            r2['duration'] = r0;
                            r0 = a0;
                            r2['value'] = r0;
                            r0 = [0, 35, 70, 100];
                            r2['keyframes'] = r0;
                            r1 = 100;
                            r0 = 5;
                            r0 = r3.bind(r4)(r1, r0, r2);
                            return r0;
                        };
                        r0['grid'] = r1;
                        return r0;
                    };
                    r0['initAnimation'] = r6;
                    r0['animating'] = r5;
                    r4 = function(a0) { // Original name: children, environment: r4
                        _fun6281: for(var _fun6281_ip = 0; ; ) switch(_fun6281_ip) {
case 0:
                            r0 = a0;
                            var _closure4_slot0 = r0;
                            r0 = _closure1_slot10;
                            r3 = r0.jsx;
                            r0 = _closure1_slot8;
                            r2 = r0.View;
                            r0 = global;
                            r6 = r0.Object;
                            r5 = r6.assign;
                            r4 = {};
                            r9 = {};
                            r1 = _closure3_slot0;
                            r9['width'] = r1;
                            r9['height'] = r1;
                            r1 = 'wrap';
                            r9['flexWrap'] = r1;
                            r1 = 'row';
                            r9['flexDirection'] = r1;
                            r10 = _closure3_slot3;
                            r11 = 1;
                            r1 = r11;
                            if(r10) { _fun6281_ip = 105; continue _fun6281 }
case 93:
                            r10 = _closure3_slot4;
                            r1 = r11;
                            if(!r10) { _fun6281_ip = 105; continue _fun6281 }
case 103:
                            r1 = 0;
case 105:
                            r9['opacity'] = r1;
                            r1 = new Array(2);
                            r1[0] = r9;
                            r9 = _closure3_slot2;
                            r1[1] = r9;
                            r4['style'] = r1;
                            r1 = _closure3_slot5;
                            r0 = {};
                            r10 = _closure1_slot12;
                            r9 = r10.map;
                            r8 = function(a0) { // Environment: r7
                                r0 = _closure4_slot0;
                                r1 = r0.grid;
                                r0 = a0;
                                r0 = r1[r0];
                                return r0;
                            };
                            r9 = r9.bind(r10)(r8);
                            r8 = r9.map;
                            r7 = function(a0, a1) { // Environment: r7
                                r7 = a0;
                                r1 = _closure1_slot10;
                                r4 = r1.jsx;
                                r0 = _closure1_slot8;
                                r0 = r0.Animated;
                                r3 = r0.View;
                                r2 = {};
                                r0 = {};
                                r6 = _closure3_slot0;
                                r5 = 3;
                                r8 = r6 / r5;
                                r0['width'] = r8;
                                r5 = r6 / r5;
                                r0['height'] = r5;
                                r1 = _closure3_slot1;
                                r0['backgroundColor'] = r1;
                                r5 = {};
                                r6 = r7.interpolate;
                                r1 = {};
                                r8 = [0, 35, 70, 100];
                                r1['inputRange'] = r8;
                                r8 = [1, 0.01, 1, 1];
                                r1['outputRange'] = r8;
                                r1 = r6.bind(r7)(r1);
                                r5['scale'] = r1;
                                r1 = new Array(1);
                                r1[0] = r5;
                                r0['transform'] = r1;
                                r2['style'] = r0;
                                r1 = undefined;
                                r0 = a1;
                                r0 = r4.bind(r1)(r3, r2, r0);
                                return r0;
                            };
                            r7 = r8.bind(r9)(r7);
                            r0['children'] = r7;
                            r1 = r5.bind(r6)(r4, r1, r0);
                            r0 = undefined;
                            r0 = r3.bind(r0)(r2, r1);
                            return r0;
                        }
                    };
                    r0['children'] = r4;
                    r0 = r2.bind(r3)(r1, r0);
                    return r0;
                };
                r4['value'] = r0;
                r0 = new Array(1);
                r0[0] = r4;
                r0 = r1.bind(r2)(r3, r0);
                return r0;
            };
            r2 = r2.bind(r0)(r5);
            r1['default'] = r2;
            r1 = 12;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r1.defaultProps;
            r2['defaultProps'] = r1;
            return r0;
        }
    };
    r6 = 576;
    r5 = [1, 203, 12, 13, 23, 25, 28, 119, 2, 565, 251, 566, 567];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun6284: for(var _fun6284_ip = 0; ; ) switch(_fun6284_ip) {
case 0:
            r3 = a1;
            r1 = a5;
            r4 = a6;
            var _closure1_slot0 = r3;
            var _closure1_slot1 = r4;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r2
                _fun6285: for(var _fun6285_ip = 0; ; ) switch(_fun6285_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun6285_ip = 104; continue _fun6285 }
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
                        _fun6286: for(var _fun6286_ip = 0; ; ) switch(_fun6286_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun6286_ip = 15; continue _fun6286 }
case 9:
                            r0 = _closure2_slot0;
                            _fun6286_ip = 19; continue _fun6286;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot12 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot12 = r0;
            r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r2
                _fun6287: for(var _fun6287_ip = 0; ; ) switch(_fun6287_ip) {
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
                    r0 = _closure1_slot14;
                    r0 = r0.bind(r2)();
                    if(r0) { _fun6287_ip = 61; continue _fun6287 }
case 48:
                    r0 = r8.apply;
                    r0 = r0.bind(r8)(r3, r5);
                    _fun6287_ip = 107; continue _fun6287;
case 61:
                    r6 = global;
                    r7 = r6.Reflect;
                    r6 = r7.construct;
                    if(r5) { _fun6287_ip = 81; continue _fun6287 }
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
            var _closure1_slot13 = r0;
            r0 = function() { // Original name: _isNativeReflectConstruct, environment: r2
                _fun6288: for(var _fun6288_ip = 0; ; ) switch(_fun6288_ip) {
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
                    _fun6288_ip = 74; continue _fun6288;
case 72: // catch_target0
                    CatchBlockStart(arg_register=1);
case 74:
                    r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                        r0 = _closure2_slot0;
                        r0 = !r0;
                        r0 = !r0;
                        return r0;
                    };
                    _closure1_slot14 = r1;
                    r0 = undefined;
                    r0 = r1.bind(r0)();
                    return r0;
                }
            };
            var _closure1_slot14 = r0;
            r0 = 0;
            r5 = r4[r0];
            r0 = undefined;
            r7 = r3.bind(r0)(r5);
            r19 = global;
            r9 = r19.Object;
            r8 = r9.defineProperty;
            r6 = {};
            r5 = true;
            r6['value'] = r5;
            r5 = '__esModule';
            r5 = r8.bind(r9)(r1, r5, r6);
            r1['default'] = r0;
            r5 = 1;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot2 = r5;
            r5 = 2;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot3 = r5;
            r5 = 3;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot4 = r5;
            r5 = 4;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot5 = r5;
            r5 = 5;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot6 = r5;
            r5 = 6;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot7 = r5;
            r5 = 7;
            r5 = r4[r5];
            r8 = r3.bind(r0)(r5);
            if(!r8) { _fun6284_ip = 252; continue _fun6284 }
case 238:
            r6 = r8.__esModule;
            r5 = r8;
            if(r6) { _fun6284_ip = 519; continue _fun6284 }
case 252:
            r18 = null;
            if(!(r18 !== r8)) { _fun6284_ip = 510; continue _fun6284 }
case 261:
            r9 = typeof r8;
            r6 = 'object';
            if(!(r6 !== r9)) { _fun6284_ip = 283; continue _fun6284 }
case 272:
            r6 = 'function';
            if(!(r6 === r9)) { _fun6284_ip = 510; continue _fun6284 }
case 283:
            r6 = _closure1_slot12;
            r9 = r6.bind(r0)(r0);
            if(!r9) { _fun6284_ip = 311; continue _fun6284 }
case 295:
            r6 = r9.has;
            r6 = r6.bind(r9)(r8);
            if(r6) { _fun6284_ip = 498; continue _fun6284 }
case 311:
            r6 = Object.create(r18);
            r10 = r19.Object;
            r17 = r10.defineProperty;
            if(!r17) { _fun6284_ip = 339; continue _fun6284 }
case 328:
            r10 = r19.Object;
            r17 = r10.getOwnPropertyDescriptor;
case 339:
            r15 = r8;
            r11 = 'default';
            r10 = undefined;
            for(r12 in r15)
case 356:
            {
case 365:
                r23 = r12;
                if(r11 === r23) { _fun6284_ip = 356; continue _fun6284 }
case 372:
                r20 = {};
                r21 = r20.hasOwnProperty;
                r20 = r21.call;
                r20 = r20.bind(r21)(r8, r23);
                if(!r20) { _fun6284_ip = 356; continue _fun6284 }
case 393:
                r20 = null;
                if(!r17) { _fun6284_ip = 415; continue _fun6284 }
case 398:
                r22 = r19.Object;
                r21 = r22.getOwnPropertyDescriptor;
                r20 = r21.bind(r22)(r8, r23);
case 415:
                if(!r20) { _fun6284_ip = 434; continue _fun6284 }
case 418:
                r21 = r20.get;
                if(r21) { _fun6284_ip = 447; continue _fun6284 }
case 426:
                r21 = r20.set;
                if(r21) { _fun6284_ip = 447; continue _fun6284 }
case 434:
                r21 = r8[r23];
                r6[r23] = r21;
                r10 = r20;
                _fun6284_ip = 356; continue _fun6284;
case 447:
                r22 = r19.Object;
                r21 = r22.defineProperty;
                r21 = r21.bind(r22)(r6, r23, r20);
                r10 = r20;
                _fun6284_ip = 356; continue _fun6284;
            }
case 470:
            r6['default'] = r8;
            r5 = r6;
            if(!r9) { _fun6284_ip = 519; continue _fun6284 }
case 482:
            r10 = r9.set;
            r10 = r10.bind(r9)(r8, r6);
            r5 = r6;
            _fun6284_ip = 519; continue _fun6284;
case 498:
            r6 = r9.get;
            r5 = r6.bind(r9)(r8);
            _fun6284_ip = 519; continue _fun6284;
case 510:
            r6 = {};
            r6['default'] = r8;
            r5 = r6;
case 519:
            r6 = 8;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            var _closure1_slot8 = r6;
            r6 = 9;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            r6 = r7.bind(r0)(r6);
            var _closure1_slot9 = r6;
            r6 = 10;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            var _closure1_slot10 = r6;
            r6 = ['size', 'color', 'style', 'animating', 'hidesWhenStopped'];
            var _closure1_slot11 = r6;
            r5 = r5.Component;
            r2 = function(a0) { // Environment: r2
                r3 = function() { // Original name: Fold, environment: r0
                    r4 = this;
                    r3 = undefined;
                    r0 = undefined;
                    r2 = _closure1_slot3;
                    r5 = r2.default;
                    r2 = _closure2_slot0;
                    r5 = r5.bind(r3)(r4, r2);
                    r1 = _closure1_slot13;
                    r0 = arguments;
                    r0 = r1.bind(r3)(r4, r2, r0);
                    return r0;
                };
                var _closure2_slot0 = r3;
                r2 = _closure1_slot7;
                r5 = r2.default;
                r2 = undefined;
                r4 = a0;
                r4 = r5.bind(r2)(r3, r4);
                r1 = _closure1_slot4;
                r1 = r1.default;
                r4 = {};
                r5 = 'render';
                r4['key'] = r5;
                r0 = function() { // Original name: render, environment: r0
                    r0 = this;
                    r6 = r0.props;
                    r0 = r6.size;
                    var _closure3_slot0 = r0;
                    r0 = r6.color;
                    var _closure3_slot1 = r0;
                    r0 = r6.style;
                    var _closure3_slot2 = r0;
                    r5 = r6.animating;
                    var _closure3_slot3 = r5;
                    r0 = r6.hidesWhenStopped;
                    var _closure3_slot4 = r0;
                    r1 = _closure1_slot2;
                    r2 = r1.default;
                    r1 = _closure1_slot11;
                    r3 = undefined;
                    r1 = r2.bind(r3)(r6, r1);
                    var _closure3_slot5 = r1;
                    r1 = _closure1_slot10;
                    r2 = r1.jsx;
                    r0 = _closure1_slot9;
                    r1 = r0.default;
                    r0 = {};
                    r6 = function() { // Original name: initAnimation, environment: r4
                        r0 = {};
                        r1 = function(a0) { // Original name: fold, environment: r1
                            r2 = _closure1_slot0;
                            r3 = _closure1_slot1;
                            r1 = 11;
                            r1 = r3[r1];
                            r4 = undefined;
                            r1 = r2.bind(r4)(r1);
                            r3 = r1.stagger;
                            r2 = {};
                            r1 = 2400;
                            r2['duration'] = r1;
                            r1 = a0;
                            r2['value'] = r1;
                            r1 = [0, 10, 25, 75, 90, 100];
                            r2['keyframes'] = r1;
                            r0 = _closure1_slot8;
                            r0 = r0.Easing;
                            r0 = r0.linear;
                            r2['easing'] = r0;
                            r1 = 300;
                            r0 = 4;
                            r0 = r3.bind(r4)(r1, r0, r2);
                            return r0;
                        };
                        r0['fold'] = r1;
                        return r0;
                    };
                    r0['initAnimation'] = r6;
                    r0['animating'] = r5;
                    r4 = function(a0) { // Original name: children, environment: r4
                        _fun6296: for(var _fun6296_ip = 0; ; ) switch(_fun6296_ip) {
case 0:
                            r1 = _closure1_slot10;
                            r3 = r1.jsx;
                            r0 = _closure1_slot8;
                            r2 = r0.View;
                            r0 = global;
                            r6 = r0.Object;
                            r5 = r6.assign;
                            r4 = {};
                            r7 = {};
                            r1 = _closure3_slot0;
                            r7['width'] = r1;
                            r7['height'] = r1;
                            r1 = 'center';
                            r7['alignItems'] = r1;
                            r7['justifyContent'] = r1;
                            r8 = _closure3_slot3;
                            r9 = 1;
                            r1 = r9;
                            if(r8) { _fun6296_ip = 91; continue _fun6296 }
case 79:
                            r8 = _closure3_slot4;
                            r1 = r9;
                            if(!r8) { _fun6296_ip = 91; continue _fun6296 }
case 89:
                            r1 = 0;
case 91:
                            r7['opacity'] = r1;
                            r8 = {};
                            r1 = '45deg';
                            r8['rotate'] = r1;
                            r1 = new Array(1);
                            r1[0] = r8;
                            r7['transform'] = r1;
                            r1 = new Array(2);
                            r1[0] = r7;
                            r7 = _closure3_slot2;
                            r1[1] = r7;
                            r4['style'] = r1;
                            r1 = _closure3_slot5;
                            r0 = {};
                            r7 = a0;
                            r9 = r7.fold;
                            r8 = r9.map;
                            r7 = function(a0, a1) { // Environment: r7
                                r10 = a0;
                                r4 = a1;
                                r1 = _closure1_slot10;
                                r3 = r1.jsx;
                                r0 = _closure1_slot8;
                                r0 = r0.Animated;
                                r2 = r0.View;
                                r1 = {};
                                r0 = true;
                                r1['renderToHardwareTextureAndroid'] = r0;
                                r0 = {};
                                r7 = _closure3_slot0;
                                r6 = 2;
                                r8 = r7 / r6;
                                r0['width'] = r8;
                                r6 = r7 / r6;
                                r0['height'] = r6;
                                r5 = _closure3_slot1;
                                r0['backgroundColor'] = r5;
                                r5 = 'absolute';
                                r0['position'] = r5;
                                r6 = r10.interpolate;
                                r5 = {};
                                r8 = [0, 10, 25, 75, 90, 100];
                                r5['inputRange'] = r8;
                                r8 = [0, 0, 1, 1, 0, 0];
                                r5['outputRange'] = r8;
                                r5 = r6.bind(r10)(r5);
                                r0['opacity'] = r5;
                                r6 = {};
                                r5 = 90;
                                r11 = r4 * r5;
                                r5 = global;
                                r5 = r5.HermesInternal;
                                r9 = r5.concat;
                                r8 = '';
                                r5 = 'deg';
                                r5 = r9.bind(r8)(r11, r5);
                                r6['rotate'] = r5;
                                r5 = new Array(6);
                                r5[0] = r6;
                                r6 = {};
                                r8 = 3.6;
                                r8 = r7 * r8;
                                r6['perspective'] = r8;
                                r5[1] = r6;
                                r6 = {};
                                r9 = r10.interpolate;
                                r8 = {};
                                r11 = [0, 10, 25, 75, 90, 100];
                                r8['inputRange'] = r11;
                                r11 = ['-180deg', '-180deg', '0deg', '0deg', '0deg', '0deg'];
                                r8['outputRange'] = r11;
                                r8 = r9.bind(r10)(r8);
                                r6['rotateX'] = r8;
                                r5[2] = r6;
                                r6 = {};
                                r9 = r10.interpolate;
                                r8 = {};
                                r11 = [0, 10, 25, 75, 90, 100];
                                r8['inputRange'] = r11;
                                r11 = ['0deg', '0deg', '0deg', '0deg', '180deg', '180deg'];
                                r8['outputRange'] = r11;
                                r8 = r9.bind(r10)(r8);
                                r6['rotateY'] = r8;
                                r5[3] = r6;
                                r6 = {};
                                r9 = -r7;
                                r8 = 4;
                                r9 = r9 / r8;
                                r6['translateX'] = r9;
                                r5[4] = r6;
                                r6 = {};
                                r7 = -r7;
                                r7 = r7 / r8;
                                r6['translateY'] = r7;
                                r5[5] = r6;
                                r0['transform'] = r5;
                                r1['style'] = r0;
                                r0 = undefined;
                                r0 = r3.bind(r0)(r2, r1, r4);
                                return r0;
                            };
                            r7 = r8.bind(r9)(r7);
                            r0['children'] = r7;
                            r1 = r5.bind(r6)(r4, r1, r0);
                            r0 = undefined;
                            r0 = r3.bind(r0)(r2, r1);
                            return r0;
                        }
                    };
                    r0['children'] = r4;
                    r0 = r2.bind(r3)(r1, r0);
                    return r0;
                };
                r4['value'] = r0;
                r0 = new Array(1);
                r0[0] = r4;
                r0 = r1.bind(r2)(r3, r0);
                return r0;
            };
            r2 = r2.bind(r0)(r5);
            r1['default'] = r2;
            r1 = 12;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r1.defaultProps;
            r2['defaultProps'] = r1;
            return r0;
        }
    };
    r6 = 577;
    r5 = [1, 203, 12, 13, 23, 25, 28, 119, 2, 565, 251, 566, 567];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun6298: for(var _fun6298_ip = 0; ; ) switch(_fun6298_ip) {
case 0:
            r3 = a1;
            r1 = a5;
            r4 = a6;
            var _closure1_slot0 = r3;
            var _closure1_slot1 = r4;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r2
                _fun6299: for(var _fun6299_ip = 0; ; ) switch(_fun6299_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun6299_ip = 104; continue _fun6299 }
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
                        _fun6300: for(var _fun6300_ip = 0; ; ) switch(_fun6300_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun6300_ip = 15; continue _fun6300 }
case 9:
                            r0 = _closure2_slot0;
                            _fun6300_ip = 19; continue _fun6300;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot12 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot12 = r0;
            r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r2
                _fun6301: for(var _fun6301_ip = 0; ; ) switch(_fun6301_ip) {
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
                    r0 = _closure1_slot14;
                    r0 = r0.bind(r2)();
                    if(r0) { _fun6301_ip = 61; continue _fun6301 }
case 48:
                    r0 = r8.apply;
                    r0 = r0.bind(r8)(r3, r5);
                    _fun6301_ip = 107; continue _fun6301;
case 61:
                    r6 = global;
                    r7 = r6.Reflect;
                    r6 = r7.construct;
                    if(r5) { _fun6301_ip = 81; continue _fun6301 }
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
            var _closure1_slot13 = r0;
            r0 = function() { // Original name: _isNativeReflectConstruct, environment: r2
                _fun6302: for(var _fun6302_ip = 0; ; ) switch(_fun6302_ip) {
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
                    _fun6302_ip = 74; continue _fun6302;
case 72: // catch_target0
                    CatchBlockStart(arg_register=1);
case 74:
                    r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                        r0 = _closure2_slot0;
                        r0 = !r0;
                        r0 = !r0;
                        return r0;
                    };
                    _closure1_slot14 = r1;
                    r0 = undefined;
                    r0 = r1.bind(r0)();
                    return r0;
                }
            };
            var _closure1_slot14 = r0;
            r0 = 0;
            r5 = r4[r0];
            r0 = undefined;
            r7 = r3.bind(r0)(r5);
            r19 = global;
            r9 = r19.Object;
            r8 = r9.defineProperty;
            r6 = {};
            r5 = true;
            r6['value'] = r5;
            r5 = '__esModule';
            r5 = r8.bind(r9)(r1, r5, r6);
            r1['default'] = r0;
            r5 = 1;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot2 = r5;
            r5 = 2;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot3 = r5;
            r5 = 3;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot4 = r5;
            r5 = 4;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot5 = r5;
            r5 = 5;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot6 = r5;
            r5 = 6;
            r5 = r4[r5];
            r5 = r3.bind(r0)(r5);
            r5 = r7.bind(r0)(r5);
            var _closure1_slot7 = r5;
            r5 = 7;
            r5 = r4[r5];
            r8 = r3.bind(r0)(r5);
            if(!r8) { _fun6298_ip = 252; continue _fun6298 }
case 238:
            r6 = r8.__esModule;
            r5 = r8;
            if(r6) { _fun6298_ip = 519; continue _fun6298 }
case 252:
            r18 = null;
            if(!(r18 !== r8)) { _fun6298_ip = 510; continue _fun6298 }
case 261:
            r9 = typeof r8;
            r6 = 'object';
            if(!(r6 !== r9)) { _fun6298_ip = 283; continue _fun6298 }
case 272:
            r6 = 'function';
            if(!(r6 === r9)) { _fun6298_ip = 510; continue _fun6298 }
case 283:
            r6 = _closure1_slot12;
            r9 = r6.bind(r0)(r0);
            if(!r9) { _fun6298_ip = 311; continue _fun6298 }
case 295:
            r6 = r9.has;
            r6 = r6.bind(r9)(r8);
            if(r6) { _fun6298_ip = 498; continue _fun6298 }
case 311:
            r6 = Object.create(r18);
            r10 = r19.Object;
            r17 = r10.defineProperty;
            if(!r17) { _fun6298_ip = 339; continue _fun6298 }
case 328:
            r10 = r19.Object;
            r17 = r10.getOwnPropertyDescriptor;
case 339:
            r15 = r8;
            r11 = 'default';
            r10 = undefined;
            for(r12 in r15)
case 356:
            {
case 365:
                r23 = r12;
                if(r11 === r23) { _fun6298_ip = 356; continue _fun6298 }
case 372:
                r20 = {};
                r21 = r20.hasOwnProperty;
                r20 = r21.call;
                r20 = r20.bind(r21)(r8, r23);
                if(!r20) { _fun6298_ip = 356; continue _fun6298 }
case 393:
                r20 = null;
                if(!r17) { _fun6298_ip = 415; continue _fun6298 }
case 398:
                r22 = r19.Object;
                r21 = r22.getOwnPropertyDescriptor;
                r20 = r21.bind(r22)(r8, r23);
case 415:
                if(!r20) { _fun6298_ip = 434; continue _fun6298 }
case 418:
                r21 = r20.get;
                if(r21) { _fun6298_ip = 447; continue _fun6298 }
case 426:
                r21 = r20.set;
                if(r21) { _fun6298_ip = 447; continue _fun6298 }
case 434:
                r21 = r8[r23];
                r6[r23] = r21;
                r10 = r20;
                _fun6298_ip = 356; continue _fun6298;
case 447:
                r22 = r19.Object;
                r21 = r22.defineProperty;
                r21 = r21.bind(r22)(r6, r23, r20);
                r10 = r20;
                _fun6298_ip = 356; continue _fun6298;
            }
case 470:
            r6['default'] = r8;
            r5 = r6;
            if(!r9) { _fun6298_ip = 519; continue _fun6298 }
case 482:
            r10 = r9.set;
            r10 = r10.bind(r9)(r8, r6);
            r5 = r6;
            _fun6298_ip = 519; continue _fun6298;
case 498:
            r6 = r9.get;
            r5 = r6.bind(r9)(r8);
            _fun6298_ip = 519; continue _fun6298;
case 510:
            r6 = {};
            r6['default'] = r8;
            r5 = r6;
case 519:
            r6 = 8;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            var _closure1_slot8 = r6;
            r6 = 9;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            r6 = r7.bind(r0)(r6);
            var _closure1_slot9 = r6;
            r6 = 10;
            r6 = r4[r6];
            r6 = r3.bind(r0)(r6);
            var _closure1_slot10 = r6;
            r6 = ['size', 'color', 'style', 'animating', 'hidesWhenStopped'];
            var _closure1_slot11 = r6;
            r5 = r5.Component;
            r2 = function(a0) { // Environment: r2
                r3 = function() { // Original name: Wander, environment: r0
                    r4 = this;
                    r3 = undefined;
                    r0 = undefined;
                    r2 = _closure1_slot3;
                    r5 = r2.default;
                    r2 = _closure2_slot0;
                    r5 = r5.bind(r3)(r4, r2);
                    r1 = _closure1_slot13;
                    r0 = arguments;
                    r0 = r1.bind(r3)(r4, r2, r0);
                    return r0;
                };
                var _closure2_slot0 = r3;
                r2 = _closure1_slot7;
                r5 = r2.default;
                r2 = undefined;
                r4 = a0;
                r4 = r5.bind(r2)(r3, r4);
                r1 = _closure1_slot4;
                r1 = r1.default;
                r4 = {};
                r5 = 'render';
                r4['key'] = r5;
                r0 = function() { // Original name: render, environment: r0
                    r0 = this;
                    r7 = r0.props;
                    r2 = r7.size;
                    var _closure3_slot0 = r2;
                    r0 = r7.color;
                    var _closure3_slot1 = r0;
                    r0 = r7.style;
                    var _closure3_slot2 = r0;
                    r5 = r7.animating;
                    var _closure3_slot3 = r5;
                    r0 = r7.hidesWhenStopped;
                    var _closure3_slot4 = r0;
                    r1 = _closure1_slot2;
                    r6 = r1.default;
                    r1 = _closure1_slot11;
                    r3 = undefined;
                    r1 = r6.bind(r3)(r7, r1);
                    var _closure3_slot5 = r1;
                    r1 = 0.75;
                    r1 = r2 * r1;
                    var _closure3_slot6 = r1;
                    r1 = _closure1_slot10;
                    r2 = r1.jsx;
                    r0 = _closure1_slot9;
                    r1 = r0.default;
                    r0 = {};
                    r6 = function() { // Original name: initAnimation, environment: r4
                        r0 = {};
                        r1 = function(a0) { // Original name: wander, environment: r1
                            r4 = a0;
                            r0 = {};
                            r1 = new Array(1);
                            r1[0] = r4;
                            r0['values'] = r1;
                            r2 = _closure1_slot0;
                            r3 = _closure1_slot1;
                            r1 = 11;
                            r1 = r3[r1];
                            r3 = undefined;
                            r1 = r2.bind(r3)(r1);
                            r2 = r1.loop;
                            r1 = {};
                            r5 = 2000;
                            r1['duration'] = r5;
                            r1['value'] = r4;
                            r4 = [0, 25, 50, 75, 100];
                            r1['keyframes'] = r4;
                            r1 = r2.bind(r3)(r1);
                            r0['animation'] = r1;
                            return r0;
                        };
                        r0['wander'] = r1;
                        return r0;
                    };
                    r0['initAnimation'] = r6;
                    r0['animating'] = r5;
                    r4 = function(a0) { // Original name: children, environment: r4
                        _fun6310: for(var _fun6310_ip = 0; ; ) switch(_fun6310_ip) {
case 0:
                            r0 = a0;
                            var _closure4_slot0 = r0;
                            r1 = _closure1_slot10;
                            r3 = r1.jsx;
                            r0 = _closure1_slot8;
                            r2 = r0.View;
                            r1 = global;
                            r7 = r1.Object;
                            r6 = r7.assign;
                            r5 = {};
                            r9 = {};
                            r4 = _closure3_slot0;
                            r9['width'] = r4;
                            r9['height'] = r4;
                            r10 = _closure3_slot3;
                            r11 = 1;
                            r4 = r11;
                            if(r10) { _fun6310_ip = 87; continue _fun6310 }
case 75:
                            r10 = _closure3_slot4;
                            r4 = r11;
                            if(!r10) { _fun6310_ip = 87; continue _fun6310 }
case 85:
                            r4 = 0;
case 87:
                            r9['opacity'] = r4;
                            r4 = new Array(2);
                            r4[0] = r9;
                            r9 = _closure3_slot2;
                            r4[1] = r9;
                            r5['style'] = r4;
                            r4 = _closure3_slot5;
                            r0 = {};
                            r10 = r1.Array;
                            r1 = undefined;
                            r9 = 3;
                            r11 = r10.bind(r1)(r9);
                            r10 = r11.fill;
                            r9 = null;
                            r10 = r10.bind(r11)(r9);
                            r9 = r10.map;
                            r8 = function(a0, a1) { // Environment: r8
                                _fun6311: for(var _fun6311_ip = 0; ; ) switch(_fun6311_ip) {
case 0:
                                    r4 = a1;
                                    r5 = _closure1_slot10;
                                    r3 = r5.jsx;
                                    r0 = _closure1_slot8;
                                    r2 = r0.View;
                                    r1 = {};
                                    r6 = {};
                                    r10 = _closure3_slot0;
                                    r6['width'] = r10;
                                    r6['height'] = r10;
                                    r8 = 'absolute';
                                    r6['position'] = r8;
                                    r9 = {};
                                    r7 = 90;
                                    r13 = r4 * r7;
                                    r7 = global;
                                    r7 = r7.HermesInternal;
                                    r12 = r7.concat;
                                    r11 = '';
                                    r7 = 'deg';
                                    r7 = r12.bind(r11)(r13, r7);
                                    r9['rotate'] = r7;
                                    r7 = new Array(1);
                                    r7[0] = r9;
                                    r6['transform'] = r7;
                                    r1['style'] = r6;
                                    r7 = r5.jsx;
                                    r0 = r0.Animated;
                                    r6 = r0.View;
                                    r5 = {};
                                    r0 = {};
                                    r9 = 5;
                                    r11 = r10 / r9;
                                    r0['width'] = r11;
                                    r9 = r10 / r9;
                                    r0['height'] = r9;
                                    r9 = _closure3_slot1;
                                    r0['backgroundColor'] = r9;
                                    r0['position'] = r8;
                                    r9 = {};
                                    r12 = _closure4_slot0;
                                    r8 = r12.wander;
                                    r11 = 0;
                                    r14 = r8[r11];
                                    r13 = r14.interpolate;
                                    r8 = {};
                                    r16 = [0, 25, 50, 75, 100];
                                    r8['inputRange'] = r16;
                                    r17 = _closure3_slot6;
                                    r15 = [0];
                                    r15[1] = r17;
                                    r15[2] = r17;
                                    r15[3] = r11;
                                    r15[4] = r11;
                                    r8['outputRange'] = r15;
                                    r8 = r13.bind(r14)(r8);
                                    r9['translateX'] = r8;
                                    r8 = new Array(4);
                                    r8[0] = r9;
                                    r9 = {};
                                    r13 = r12.wander;
                                    r15 = r13[r11];
                                    r14 = r15.interpolate;
                                    r13 = {};
                                    r16 = [0, 25, 50, 75, 100];
                                    r13['inputRange'] = r16;
                                    r16 = [0, 0];
                                    r16[2] = r17;
                                    r16[3] = r17;
                                    r16[4] = r11;
                                    r13['outputRange'] = r16;
                                    r13 = r14.bind(r15)(r13);
                                    r9['translateY'] = r13;
                                    r8[1] = r9;
                                    r9 = {};
                                    r12 = r12.wander;
                                    r14 = r12[r11];
                                    r13 = r14.interpolate;
                                    r12 = {};
                                    r15 = [0, 25, 50, 75, 100];
                                    r12['inputRange'] = r15;
                                    r15 = 2;
                                    r15 = r4 % r15;
                                    if(!(r15 !== r11)) { _fun6311_ip = 366; continue _fun6311 }
case 356:
                                    r15 = [0.6, 1, 0.6, 1, 0.6];
                                    _fun6311_ip = 374; continue _fun6311;
case 366:
                                    r15 = [1, 0.6, 1, 0.6, 1];
case 374:
                                    r12['outputRange'] = r15;
                                    r12 = r13.bind(r14)(r12);
                                    r9['scale'] = r12;
                                    r8[2] = r9;
                                    r9 = {};
                                    r10 = _closure4_slot0;
                                    r10 = r10.wander;
                                    r12 = r10[r11];
                                    r11 = r12.interpolate;
                                    r10 = {};
                                    r13 = [0, 25, 50, 75, 100];
                                    r10['inputRange'] = r13;
                                    r13 = ['0deg', '-90deg', '-180deg', '-270deg', '-360deg'];
                                    r10['outputRange'] = r13;
                                    r10 = r11.bind(r12)(r10);
                                    r9['rotate'] = r10;
                                    r8[3] = r9;
                                    r0['transform'] = r8;
                                    r5['style'] = r0;
                                    r0 = undefined;
                                    r5 = r7.bind(r0)(r6, r5);
                                    r1['children'] = r5;
                                    r0 = r3.bind(r0)(r2, r1, r4);
                                    return r0;
                                }
                            };
                            r8 = r9.bind(r10)(r8);
                            r0['children'] = r8;
                            r0 = r6.bind(r7)(r5, r4, r0);
                            r0 = r3.bind(r1)(r2, r0);
                            return r0;
                        }
                    };
                    r0['children'] = r4;
                    r0 = r2.bind(r3)(r1, r0);
                    return r0;
                };
                r4['value'] = r0;
                r0 = new Array(1);
                r0[0] = r4;
                r0 = r1.bind(r2)(r3, r0);
                return r0;
            };
            r2 = r2.bind(r0)(r5);
            r1['default'] = r2;
            r1 = 12;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r1.defaultProps;
            r2['defaultProps'] = r1;
            return r0;
        }
    };
    r6 = 578;
    r5 = [1, 203, 12, 13, 23, 25, 28, 119, 2, 565, 251, 566, 567];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r166 = a1;
        r2 = a5;
        r168 = a6;
        var _closure1_slot0 = r166;
        var _closure1_slot1 = r168;
        r17 = function() { // Original name: syncUniqueId, environment: r162
            r0 = undefined;
            r3 = _closure1_slot32;
            r2 = r3.apply;
            r0 = arguments;
            r1 = r0;
            r0 = this;
            r0 = r2.bind(r3)(r0, r1);
            return r0;
        };
        r0 = function() { // Original name: _syncUniqueId, environment: r162
            r4 = undefined;
            r0 = undefined;
            r2 = _closure1_slot2;
            r3 = r2.default;
            r2 = function* () { // Environment: r2
                r0 = function* () { // Original name: ?anon_0_, environment: r0
                    _fun6316: for(var _fun6316_ip = 0; ; ) switch(_fun6316_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(r1) { _fun6316_ip = 104; continue _fun6316 }
case 7:
                        r1 = _closure1_slot5;
                        r1 = r1.Platform;
                        r3 = r1.OS;
                        r1 = 'ios';
                        if(!(r3 !== r1)) { _fun6316_ip = 61; continue _fun6316 }
case 32:
                        r3 = _closure1_slot9;
                        r1 = undefined;
                        r1 = r3.bind(r1)();
                        SaveGenerator(address=46);
case 44:
                        return r1;
case 46:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(r3) { _fun6316_ip = 58; continue _fun6316 }
case 52:
                        var _closure1_slot10 = r1;
                        _fun6316_ip = 94; continue _fun6316;
case 58:
                        return r1;
case 61:
                        r1 = _closure1_slot8;
                        r3 = r1.default;
                        r1 = r3.syncUniqueId;
                        r1 = r1.bind(r3)();
                        SaveGenerator(address=84);
case 82:
                        return r1;
case 84:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(r3) { _fun6316_ip = 101; continue _fun6316 }
case 90:
                        _closure1_slot10 = r1;
case 94:
                        r2 = _closure1_slot10;
                        return r2;
case 101:
                        return r1;
case 104:
                        return r0;
                    }
                };
                return r0;
            };
            r3 = r3.bind(r4)(r2);
            _closure1_slot32 = r3;
            r2 = r3.apply;
            r0 = arguments;
            r1 = r0;
            r0 = this;
            r0 = r2.bind(r3)(r0, r1);
            return r0;
        };
        var _closure1_slot32 = r0;
        r102 = function() { // Original name: getMacAddress, environment: r162
            r0 = undefined;
            r3 = _closure1_slot33;
            r2 = r3.apply;
            r0 = arguments;
            r1 = r0;
            r0 = this;
            r0 = r2.bind(r3)(r0, r1);
            return r0;
        };
        r0 = function() { // Original name: _getMacAddress, environment: r162
            r4 = undefined;
            r0 = undefined;
            r2 = _closure1_slot2;
            r3 = r2.default;
            r2 = function* () { // Environment: r2
                r0 = function* () { // Original name: ?anon_0_, environment: r0
                    _fun6320: for(var _fun6320_ip = 0; ; ) switch(_fun6320_ip) {
case 0:
