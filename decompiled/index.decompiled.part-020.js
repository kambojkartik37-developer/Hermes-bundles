                r3 = r1.bind(r3)();
                r1 = new Array(2);
                r1[0] = r3;
                r4 = r2._b;
                r3 = r4.__getNativeTag;
                r3 = r3.bind(r4)();
                r1[1] = r3;
                r0['input'] = r1;
                r1 = r2.__getDebugID;
                r1 = r1.bind(r2)();
                r0['debugID'] = r1;
                return r0;
            };
            r4['value'] = r5;
            r0[5] = r4;
            r0 = r1.bind(r2)(r3, r0);
            return r0;
        };
        r1 = r1.bind(r0)(r3);
        r2['default'] = r1;
        return r0;
    };
    r6 = 339;
    r5 = [1, 12, 13, 23, 25, 26, 28, 321, 317, 313];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r5 = a1;
        r2 = a5;
        r6 = a6;
        r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r1
            _fun4144: for(var _fun4144_ip = 0; ; ) switch(_fun4144_ip) {
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
                r0 = _closure1_slot9;
                r0 = r0.bind(r2)();
                if(r0) { _fun4144_ip = 61; continue _fun4144 }
case 48:
                r0 = r8.apply;
                r0 = r0.bind(r8)(r3, r5);
                _fun4144_ip = 107; continue _fun4144;
case 61:
                r6 = global;
                r7 = r6.Reflect;
                r6 = r7.construct;
                if(r5) { _fun4144_ip = 81; continue _fun4144 }
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
        var _closure1_slot8 = r0;
        r0 = function() { // Original name: _isNativeReflectConstruct, environment: r1
            _fun4145: for(var _fun4145_ip = 0; ; ) switch(_fun4145_ip) {
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
                _fun4145_ip = 74; continue _fun4145;
case 72: // catch_target0
                CatchBlockStart(arg_register=1);
case 74:
                r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                    r0 = _closure2_slot0;
                    r0 = !r0;
                    r0 = !r0;
                    return r0;
                };
                _closure1_slot9 = r1;
                r0 = undefined;
                r0 = r1.bind(r0)();
                return r0;
            }
        };
        var _closure1_slot9 = r0;
        r0 = function(a0, a1, a2, a3) { // Original name: _superPropGet, environment: r1
            _fun4148: for(var _fun4148_ip = 0; ; ) switch(_fun4148_ip) {
case 0:
                r4 = a0;
                r6 = a2;
                var _closure2_slot0 = r6;
                r2 = _closure1_slot4;
                r5 = r2.default;
                r0 = _closure1_slot3;
                r3 = r0.default;
                r0 = 1;
                r2 = 3;
                r7 = r0 & r2;
                r0 = r4;
                if(!r7) { _fun4148_ip = 54; continue _fun4148 }
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
                if(!r2) { _fun4148_ip = 107; continue _fun4148 }
case 88:
                r3 = 'function';
                r2 = typeof r4;
                r0 = r4;
                if(!(r3 === r2)) { _fun4148_ip = 107; continue _fun4148 }
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
        var _closure1_slot10 = r0;
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
        r3 = r3.default;
        r1 = function(a0) { // Environment: r1
            r3 = function(a0, a1, a2) { // Original name: AnimatedSubtraction, environment: r5
                _fun4151: for(var _fun4151_ip = 0; ; ) switch(_fun4151_ip) {
case 0:
                    r7 = a0;
                    r4 = a1;
                    r6 = this;
                    r0 = _closure1_slot0;
                    r0 = r0.default;
                    r5 = _closure2_slot0;
                    r3 = undefined;
                    r0 = r0.bind(r3)(r6, r5);
                    r1 = _closure1_slot8;
                    r0 = new Array(1);
                    r8 = a2;
                    r0[0] = r8;
                    r0 = r1.bind(r3)(r6, r5, r0);
                    r3 = typeof r7;
                    r5 = 'number';
                    r1 = r7;
                    if(!(r3 === r5)) { _fun4151_ip = 104; continue _fun4151 }
case 72:
                    r3 = _closure1_slot7;
                    r3 = r3.default;
                    r6 = r3.prototype;
                    r6 = Object.create(r6, {constructor: {value: r3}});
                    r12 = r6;
                    r11 = r7;
                    r3 = new r12[r3](r11, r10);
                    r1 = r3 instanceof Object ? r3 : r6;
case 104:
                    r0['_a'] = r1;
                    r3 = typeof r4;
                    r1 = r4;
                    if(!(r3 === r5)) { _fun4151_ip = 152; continue _fun4151 }
case 120:
                    r2 = _closure1_slot7;
                    r2 = r2.default;
                    r3 = r2.prototype;
                    r3 = Object.create(r3, {constructor: {value: r2}});
                    r12 = r3;
                    r11 = r4;
                    r2 = new r12[r2](r11, r10);
                    r1 = r2 instanceof Object ? r2 : r3;
case 152:
                    r0['_b'] = r1;
                    return r0;
                }
            };
            var _closure2_slot0 = r3;
            r1 = _closure1_slot5;
            r4 = r1.default;
            r2 = undefined;
            r1 = a0;
            r1 = r4.bind(r2)(r3, r1);
            r0 = _closure1_slot1;
            r1 = r0.default;
            r4 = {};
            r0 = '__makeNative';
            r4['key'] = r0;
            r0 = function(a0) { // Original name: __makeNative, environment: r5
                r3 = a0;
                r6 = this;
                r1 = r6._a;
                r0 = r1.__makeNative;
                r0 = r0.bind(r1)(r3);
                r1 = r6._b;
                r0 = r1.__makeNative;
                r0 = r0.bind(r1)(r3);
                r5 = _closure1_slot10;
                r10 = _closure2_slot0;
                r0 = undefined;
                r9 = '__makeNative';
                r7 = 3;
                r11 = undefined;
                r8 = r6;
                r2 = r11[r5](r10, r9, r8, r7, r6);
                r1 = new Array(1);
                r1[0] = r3;
                r1 = r2.bind(r0)(r1);
                return r0;
            };
            r4['value'] = r0;
            r0 = new Array(6);
            r0[0] = r4;
            r4 = {};
            r6 = '__getValue';
            r4['key'] = r6;
            r6 = function() { // Original name: __getValue, environment: r5
                r0 = this;
                r2 = r0._a;
                r1 = r2.__getValue;
                r1 = r1.bind(r2)();
                r2 = r0._b;
                r0 = r2.__getValue;
                r0 = r0.bind(r2)();
                r0 = r1 - r0;
                return r0;
            };
            r4['value'] = r6;
            r0[1] = r4;
            r4 = {};
            r6 = 'interpolate';
            r4['key'] = r6;
            r6 = function(a0) { // Original name: interpolate, environment: r5
                r0 = _closure1_slot6;
                r3 = r0.default;
                r0 = r3.prototype;
                r1 = Object.create(r0, {constructor: {value: r3}});
                r5 = this;
                r4 = a0;
                r6 = r1;
                r0 = new r6[r3](r5, r4, r3);
                r0 = r0 instanceof Object ? r0 : r1;
                return r0;
            };
            r4['value'] = r6;
            r0[2] = r4;
            r4 = {};
            r6 = '__attach';
            r4['key'] = r6;
            r6 = function() { // Original name: __attach, environment: r5
                r5 = this;
                r1 = r5._a;
                r0 = r1.__addChild;
                r0 = r0.bind(r1)(r5);
                r1 = r5._b;
                r0 = r1.__addChild;
                r0 = r0.bind(r1)(r5);
                r4 = _closure1_slot10;
                r9 = _closure2_slot0;
                r0 = undefined;
                r8 = '__attach';
                r6 = 3;
                r10 = undefined;
                r7 = r5;
                r2 = r10[r4](r9, r8, r7, r6, r5);
                r1 = new Array(0);
                r1 = r2.bind(r0)(r1);
                return r0;
            };
            r4['value'] = r6;
            r0[3] = r4;
            r4 = {};
            r6 = '__detach';
            r4['key'] = r6;
            r6 = function() { // Original name: __detach, environment: r5
                r5 = this;
                r1 = r5._a;
                r0 = r1.__removeChild;
                r0 = r0.bind(r1)(r5);
                r1 = r5._b;
                r0 = r1.__removeChild;
                r0 = r0.bind(r1)(r5);
                r4 = _closure1_slot10;
                r9 = _closure2_slot0;
                r0 = undefined;
                r8 = '__detach';
                r6 = 3;
                r10 = undefined;
                r7 = r5;
                r2 = r10[r4](r9, r8, r7, r6, r5);
                r1 = new Array(0);
                r1 = r2.bind(r0)(r1);
                return r0;
            };
            r4['value'] = r6;
            r0[4] = r4;
            r4 = {};
            r6 = '__getNativeConfig';
            r4['key'] = r6;
            r5 = function() { // Original name: __getNativeConfig, environment: r5
                r2 = this;
                r0 = {};
                r1 = 'subtraction';
                r0['type'] = r1;
                r3 = r2._a;
                r1 = r3.__getNativeTag;
                r3 = r1.bind(r3)();
                r1 = new Array(2);
                r1[0] = r3;
                r4 = r2._b;
                r3 = r4.__getNativeTag;
                r3 = r3.bind(r4)();
                r1[1] = r3;
                r0['input'] = r1;
                r1 = r2.__getDebugID;
                r1 = r1.bind(r2)();
                r0['debugID'] = r1;
                return r0;
            };
            r4['value'] = r5;
            r0[5] = r4;
            r0 = r1.bind(r2)(r3, r0);
            return r0;
        };
        r1 = r1.bind(r0)(r3);
        r2['default'] = r1;
        return r0;
    };
    r6 = 340;
    r5 = [1, 12, 13, 23, 25, 26, 28, 321, 317, 313];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r5 = a1;
        r2 = a5;
        r6 = a6;
        r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r1
            _fun4159: for(var _fun4159_ip = 0; ; ) switch(_fun4159_ip) {
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
                if(r0) { _fun4159_ip = 61; continue _fun4159 }
case 48:
                r0 = r8.apply;
                r0 = r0.bind(r8)(r3, r5);
                _fun4159_ip = 107; continue _fun4159;
case 61:
                r6 = global;
                r7 = r6.Reflect;
                r6 = r7.construct;
                if(r5) { _fun4159_ip = 81; continue _fun4159 }
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
        r0 = function() { // Original name: _isNativeReflectConstruct, environment: r1
            _fun4160: for(var _fun4160_ip = 0; ; ) switch(_fun4160_ip) {
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
                _fun4160_ip = 74; continue _fun4160;
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
            _fun4163: for(var _fun4163_ip = 0; ; ) switch(_fun4163_ip) {
case 0:
                r4 = a0;
                r6 = a2;
                var _closure2_slot0 = r6;
                r2 = _closure1_slot4;
                r5 = r2.default;
                r0 = _closure1_slot3;
                r3 = r0.default;
                r0 = 1;
                r2 = 3;
                r7 = r0 & r2;
                r0 = r4;
                if(!r7) { _fun4163_ip = 54; continue _fun4163 }
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
                if(!r2) { _fun4163_ip = 107; continue _fun4163 }
case 88:
                r3 = 'function';
                r2 = typeof r4;
                r0 = r4;
                if(!(r3 === r2)) { _fun4163_ip = 107; continue _fun4163 }
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
        r3 = r3.default;
        r1 = function(a0) { // Environment: r1
            r3 = function(a0, a1, a2, a3, a4, a5) { // Original name: AnimatedTracking, environment: r5
                r3 = a3;
                r6 = this;
                r0 = _closure1_slot0;
                r0 = r0.default;
                r5 = _closure2_slot0;
                r4 = undefined;
                r0 = r0.bind(r4)(r6, r5);
                r2 = _closure1_slot7;
                r0 = new Array(1);
                r7 = a5;
                r0[0] = r7;
                r0 = r2.bind(r4)(r6, r5, r0);
                r2 = a0;
                r0['_value'] = r2;
                r2 = a1;
                r0['_parent'] = r2;
                r2 = a2;
                r0['_animationClass'] = r2;
                r0['_animationConfig'] = r3;
                r1 = _closure1_slot6;
                r2 = r1.default;
                r1 = r2.shouldUseNativeDriver;
                r1 = r1.bind(r2)(r3);
                r0['_useNativeDriver'] = r1;
                r1 = a4;
                r0['_callback'] = r1;
                r1 = r0.__attach;
                r1 = r1.bind(r0)();
                return r0;
            };
            var _closure2_slot0 = r3;
            r1 = _closure1_slot5;
            r4 = r1.default;
            r2 = undefined;
            r1 = a0;
            r1 = r4.bind(r2)(r3, r1);
            r0 = _closure1_slot1;
            r1 = r0.default;
            r4 = {};
            r0 = '__makeNative';
            r4['key'] = r0;
            r0 = function(a0) { // Original name: __makeNative, environment: r5
                r3 = a0;
                r1 = this;
                r0 = true;
                r1['__isNative'] = r0;
                r2 = r1._parent;
                r0 = r2.__makeNative;
                r0 = r0.bind(r2)(r3);
                r6 = _closure1_slot9;
                r10 = _closure2_slot0;
                r0 = undefined;
                r9 = '__makeNative';
                r7 = 3;
                r11 = undefined;
                r8 = r1;
                r4 = r11[r6](r10, r9, r8, r7, r6);
                r2 = new Array(1);
                r2[0] = r3;
                r2 = r4.bind(r0)(r2);
                r2 = r1._value;
                r1 = r2.__makeNative;
                r1 = r1.bind(r2)(r3);
                return r0;
            };
            r4['value'] = r0;
            r0 = new Array(6);
            r0[0] = r4;
            r4 = {};
            r6 = '__getValue';
            r4['key'] = r6;
            r6 = function() { // Original name: __getValue, environment: r5
                r0 = this;
                r1 = r0._parent;
                r0 = r1.__getValue;
                r0 = r0.bind(r1)();
                return r0;
            };
            r4['value'] = r6;
            r0[1] = r4;
            r4 = {};
            r6 = '__attach';
            r4['key'] = r6;
            r6 = function() { // Original name: __attach, environment: r5
                _fun4169: for(var _fun4169_ip = 0; ; ) switch(_fun4169_ip) {
case 0:
                    r5 = this;
                    r1 = r5._parent;
                    r0 = r1.__addChild;
                    r0 = r0.bind(r1)(r5);
                    r0 = r5._useNativeDriver;
                    if(!r0) { _fun4169_ip = 51; continue _fun4169 }
case 29:
                    r0 = r5._animationConfig;
                    r1 = r0.platformConfig;
                    r0 = r5.__makeNative;
                    r0 = r0.bind(r5)(r1);
case 51:
                    r4 = _closure1_slot9;
                    r9 = _closure2_slot0;
                    r0 = undefined;
                    r8 = '__attach';
                    r6 = 3;
                    r10 = undefined;
                    r7 = r5;
                    r2 = r10[r4](r9, r8, r7, r6, r5);
                    r1 = new Array(0);
                    r1 = r2.bind(r0)(r1);
                    return r0;
                }
            };
            r4['value'] = r6;
            r0[2] = r4;
            r4 = {};
            r6 = '__detach';
            r4['key'] = r6;
            r6 = function() { // Original name: __detach, environment: r5
                r5 = this;
                r1 = r5._parent;
                r0 = r1.__removeChild;
                r0 = r0.bind(r1)(r5);
                r4 = _closure1_slot9;
                r9 = _closure2_slot0;
                r0 = undefined;
                r8 = '__detach';
                r6 = 3;
                r10 = undefined;
                r7 = r5;
                r2 = r10[r4](r9, r8, r7, r6, r5);
                r1 = new Array(0);
                r1 = r2.bind(r0)(r1);
                return r0;
            };
            r4['value'] = r6;
            r0[3] = r4;
            r4 = {};
            r6 = 'update';
            r4['key'] = r6;
            r6 = function() { // Original name: update, environment: r5
                r0 = this;
                r3 = r0._value;
                r2 = r3.animate;
                r5 = r0._animationClass;
                r1 = global;
                r8 = r1.Object;
                r7 = r8.assign;
                r6 = r0._animationConfig;
                r4 = {};
                r1 = r0._animationConfig;
                r9 = r1.toValue;
                r1 = r9.__getValue;
                r1 = r1.bind(r9)();
                r4['toValue'] = r1;
                r1 = {};
                r12 = r7.bind(r8)(r1, r6, r4);
                r4 = r5.prototype;
                r4 = Object.create(r4, {constructor: {value: r5}});
                r13 = r4;
                r1 = new r13[r5](r12, r11);
                r1 = r1 instanceof Object ? r1 : r4;
                r0 = r0._callback;
                r0 = r2.bind(r3)(r1, r0);
                r0 = undefined;
                return r0;
            };
            r4['value'] = r6;
            r0[4] = r4;
            r4 = {};
            r6 = '__getNativeConfig';
            r4['key'] = r6;
            r5 = function() { // Original name: __getNativeConfig, environment: r5
                r2 = this;
                r3 = r2._animationClass;
                r0 = global;
                r6 = r0.Object;
                r5 = r6.assign;
                r4 = r2._animationConfig;
                r1 = {};
                r0 = undefined;
                r1['toValue'] = r0;
                r0 = {};
                r9 = r5.bind(r6)(r0, r4, r1);
                r1 = r3.prototype;
                r1 = Object.create(r1, {constructor: {value: r3}});
                r10 = r1;
                r0 = new r10[r3](r9, r8);
                r1 = r0 instanceof Object ? r0 : r1;
                r0 = r1.__getNativeAnimationConfig;
                r1 = r0.bind(r1)();
                r0 = {};
                r3 = 'tracking';
                r0['type'] = r3;
                r3 = _closure1_slot6;
                r4 = r3.default;
                r3 = r4.generateNewAnimationId;
                r3 = r3.bind(r4)();
                r0['animationId'] = r3;
                r0['animationConfig'] = r1;
                r3 = r2._parent;
                r1 = r3.__getNativeTag;
                r1 = r1.bind(r3)();
                r0['toValue'] = r1;
                r3 = r2._value;
                r1 = r3.__getNativeTag;
                r1 = r1.bind(r3)();
                r0['value'] = r1;
                r1 = r2.__getDebugID;
                r1 = r1.bind(r2)();
                r0['debugID'] = r1;
                return r0;
            };
            r4['value'] = r5;
            r0[5] = r4;
            r0 = r1.bind(r2)(r3, r0);
            return r0;
        };
        r1 = r1.bind(r0)(r3);
        r2['default'] = r1;
        return r0;
    };
    r6 = 341;
    r5 = [1, 12, 13, 23, 25, 26, 28, 304, 311];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r4 = a1;
        r2 = a5;
        r5 = a6;
        r0 = function(a0) { // Original name: mockAnimationStart, environment: r7
            r1 = a0;
            var _closure2_slot0 = r1;
            r0 = function(a0) { // Environment: r0
                _fun4175: for(var _fun4175_ip = 0; ; ) switch(_fun4175_ip) {
case 0:
                    r2 = a0;
                    var _closure3_slot0 = r2;
                    r1 = null;
                    if(!(r2 != r1)) { _fun4175_ip = 20; continue _fun4175 }
case 15:
                    r2 = function() { // Environment: r0
                        _fun4176: for(var _fun4176_ip = 0; ; ) switch(_fun4176_ip) {
case 0:
                            r0 = undefined;
                            r1 = undefined;
                            r2 = _closure1_slot0;
                            if(r2) { _fun4176_ip = 58; continue _fun4176 }
case 14:
                            r2 = true;
                            _closure1_slot0 = r2;
case 20: // try_start_0
                            r4 = _closure3_slot0;
                            r2 = r4.apply;
                            r1 = arguments;
                            r1 = r2.bind(r4)(r0, r1);
case 40: // try_end0
                            r1 = false;
                            _closure1_slot0 = r1;
                            return r0;
case 48: // catch_target0
                            CatchBlockStart(arg_register=1);
                            r2 = false;
                            _closure1_slot0 = r2;
                            throw r1;
case 58:
                            r1 = global;
                            r3 = r1.console;
                            r2 = r3.warn;
                            r1 = 'Ignoring recursive animation callback when running mock animations';
                            r1 = r2.bind(r3)(r1);
                            return r0;
                        }
                    };
case 20:
                    r1 = _closure2_slot0;
                    r0 = undefined;
                    r1 = r1.bind(r0)(r2);
                    return r0;
                }
            };
            return r0;
        };
        var _closure1_slot3 = r0;
        r0 = 0;
        r1 = r5[r0];
        r0 = undefined;
        r11 = r4.bind(r0)(r1);
        r1 = global;
        r8 = r1.Object;
        r6 = r8.defineProperty;
        r3 = {};
        r1 = true;
        r3['value'] = r1;
        r1 = '__esModule';
        r1 = r6.bind(r8)(r2, r1, r3);
        r2['default'] = r0;
        r1 = 1;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r6 = r11.bind(r0)(r1);
        r1 = 2;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r3 = r11.bind(r0)(r1);
        r1 = 3;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r10 = r11.bind(r0)(r1);
        r1 = 4;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r9 = r11.bind(r0)(r1);
        r1 = 5;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r8 = r11.bind(r0)(r1);
        r1 = 6;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r12 = r11.bind(r0)(r1);
        r1 = 7;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r11 = r11.bind(r0)(r1);
        r1 = false;
        var _closure1_slot0 = r1;
        r1 = {};
        r13 = function() { // Original name: start, environment: r7
            r0 = undefined;
            return r0;
        };
        r1['start'] = r13;
        r13 = function() { // Original name: stop, environment: r7
            r0 = undefined;
            return r0;
        };
        r1['stop'] = r13;
        r13 = function() { // Original name: reset, environment: r7
            r0 = undefined;
            return r0;
        };
        r1['reset'] = r13;
        r13 = function() { // Original name: _startNativeLoop, environment: r7
            r0 = undefined;
            return r0;
        };
        r1['_startNativeLoop'] = r13;
        r13 = function() { // Original name: _isUsingNativeDriver, environment: r7
            r0 = false;
            return r0;
        };
        r1['_isUsingNativeDriver'] = r13;
        var _closure1_slot1 = r1;
        r1 = function(a0) { // Original name: mockCompositeAnimation, environment: r7
            r1 = a0;
            var _closure2_slot0 = r1;
            r1 = global;
            r4 = r1.Object;
            r3 = r4.assign;
            r2 = _closure1_slot1;
            r1 = {};
            r6 = _closure1_slot3;
            r5 = undefined;
            r0 = function(a0) { // Environment: r0
                _fun4183: for(var _fun4183_ip = 0; ; ) switch(_fun4183_ip) {
case 0:
                    r2 = a0;
                    r3 = _closure2_slot0;
                    r1 = r3.forEach;
                    r0 = function(a0) { // Environment: r0
                        r1 = a0;
                        r0 = r1.start;
                        r0 = r0.bind(r1)();
                        return r0;
                    };
                    r0 = r1.bind(r3)(r0);
                    r0 = null;
                    if(!(r2 != r0)) { _fun4183_ip = 49; continue _fun4183 }
case 33:
                    r1 = {};
                    r0 = true;
                    r1['finished'] = r0;
                    r0 = undefined;
                    r0 = r2.bind(r0)(r1);
case 49:
                    r0 = undefined;
                    return r0;
                }
            };
            r0 = r6.bind(r5)(r0);
            r1['start'] = r0;
            r0 = {};
            r0 = r3.bind(r4)(r0, r2, r1);
            return r0;
        };
        var _closure1_slot2 = r1;
        r1 = {};
        r12 = r12.default;
        r1['Value'] = r12;
        r11 = r11.default;
        r1['ValueXY'] = r11;
        r10 = r10.default;
        r1['Color'] = r10;
        r9 = r9.default;
        r1['Interpolation'] = r9;
        r8 = r8.default;
        r1['Node'] = r8;
        r8 = function(a0, a1) { // Original name: decay, environment: r7
            r0 = _closure1_slot1;
            return r0;
        };
        r1['decay'] = r8;
        r8 = function(a0, a1) { // Original name: timing, environment: r7
            r1 = a1;
            var _closure2_slot0 = r1;
            r1 = a0;
            var _closure2_slot1 = r1;
            r1 = global;
            r4 = r1.Object;
            r3 = r4.assign;
            r2 = _closure1_slot1;
            r1 = {};
            r6 = _closure1_slot3;
            r5 = undefined;
            r0 = function(a0) { // Environment: r0
                _fun4188: for(var _fun4188_ip = 0; ; ) switch(_fun4188_ip) {
case 0:
                    r2 = a0;
                    r3 = _closure2_slot1;
                    r1 = r3.setValue;
                    r0 = _closure2_slot0;
                    r0 = r0.toValue;
                    r0 = r1.bind(r3)(r0);
                    r0 = null;
                    if(!(r2 != r0)) { _fun4188_ip = 52; continue _fun4188 }
case 36:
                    r1 = {};
                    r0 = true;
                    r1['finished'] = r0;
                    r0 = undefined;
                    r0 = r2.bind(r0)(r1);
case 52:
                    r0 = undefined;
                    return r0;
                }
            };
            r0 = r6.bind(r5)(r0);
            r1['start'] = r0;
            r0 = {};
            r0 = r3.bind(r4)(r0, r2, r1);
            return r0;
        };
        r1['timing'] = r8;
        r8 = function(a0, a1) { // Original name: spring, environment: r7
            r1 = a1;
            var _closure2_slot0 = r1;
            r1 = a0;
            var _closure2_slot1 = r1;
            r1 = global;
            r4 = r1.Object;
            r3 = r4.assign;
            r2 = _closure1_slot1;
            r1 = {};
            r6 = _closure1_slot3;
            r5 = undefined;
            r0 = function(a0) { // Environment: r0
                _fun4186: for(var _fun4186_ip = 0; ; ) switch(_fun4186_ip) {
case 0:
                    r2 = a0;
                    r3 = _closure2_slot1;
                    r1 = r3.setValue;
                    r0 = _closure2_slot0;
                    r0 = r0.toValue;
                    r0 = r1.bind(r3)(r0);
                    r0 = null;
                    if(!(r2 != r0)) { _fun4186_ip = 52; continue _fun4186 }
case 36:
                    r1 = {};
                    r0 = true;
                    r1['finished'] = r0;
                    r0 = undefined;
                    r0 = r2.bind(r0)(r1);
case 52:
                    r0 = undefined;
                    return r0;
                }
            };
            r0 = r6.bind(r5)(r0);
            r1['start'] = r0;
            r0 = {};
            r0 = r3.bind(r4)(r0, r2, r1);
            return r0;
        };
        r1['spring'] = r8;
        r8 = r6.default;
        r8 = r8.add;
        r1['add'] = r8;
        r8 = r6.default;
        r8 = r8.subtract;
        r1['subtract'] = r8;
        r8 = r6.default;
        r8 = r8.divide;
        r1['divide'] = r8;
        r8 = r6.default;
        r8 = r8.multiply;
        r1['multiply'] = r8;
        r8 = r6.default;
        r8 = r8.modulo;
        r1['modulo'] = r8;
        r8 = r6.default;
        r8 = r8.diffClamp;
        r1['diffClamp'] = r8;
        r8 = function(a0) { // Original name: delay, environment: r7
            r0 = _closure1_slot1;
            return r0;
        };
        r1['delay'] = r8;
        r8 = function(a0) { // Original name: sequence, environment: r7
            r2 = _closure1_slot2;
            r1 = undefined;
            r0 = a0;
            r0 = r2.bind(r1)(r0);
            return r0;
        };
        r1['sequence'] = r8;
        r8 = function(a0, a1) { // Original name: parallel, environment: r7
            r2 = _closure1_slot2;
            r1 = undefined;
            r0 = a0;
            r0 = r2.bind(r1)(r0);
            return r0;
        };
        r1['parallel'] = r8;
        r8 = function(a0, a1) { // Original name: stagger, environment: r7
            r2 = _closure1_slot2;
            r1 = undefined;
            r0 = a1;
            r0 = r2.bind(r1)(r0);
            return r0;
        };
        r1['stagger'] = r8;
        r7 = function(a0) { // Original name: loop, environment: r7
            _fun4194: for(var _fun4194_ip = 0; ; ) switch(_fun4194_ip) {
case 0:
                r3 = undefined;
                r2 = undefined;
                r0 = arguments.length;
                r1 = 1;
                if(!(r0 > r1)) { _fun4194_ip = 22; continue _fun4194 }
case 14:
                r0 = arguments[r1];
                if(!(r0 === r3)) { _fun4194_ip = 26; continue _fun4194 }
case 22:
                r0 = {};
                _fun4194_ip = 30; continue _fun4194;
case 26:
                r0 = arguments[r1];
case 30:
                r0 = r0.iterations;
                r0 = _closure1_slot1;
                return r0;
            }
        };
        r1['loop'] = r7;
        r7 = r6.default;
        r7 = r7.event;
        r1['event'] = r7;
        r3 = r3.default;
        r1['createAnimatedComponent'] = r3;
        r3 = 8;
        r7 = r5[r3];
        r7 = r4.bind(r0)(r7);
        r7 = r7.attachNativeEvent;
        r1['attachNativeEvent'] = r7;
        r7 = r6.default;
        r7 = r7.forkEvent;
        r1['forkEvent'] = r7;
        r6 = r6.default;
        r6 = r6.unforkEvent;
        r1['unforkEvent'] = r6;
        r3 = r5[r3];
        r3 = r4.bind(r0)(r3);
        r3 = r3.AnimatedEvent;
        r1['Event'] = r3;
        r2['default'] = r1;
        return r0;
    };
    r6 = 342;
    r5 = [1, 301, 329, 326, 321, 311, 317, 324, 316];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun4195: for(var _fun4195_ip = 0; ; ) switch(_fun4195_ip) {
case 0:
            r6 = a1;
            r2 = a5;
            r7 = a6;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r4
                _fun4196: for(var _fun4196_ip = 0; ; ) switch(_fun4196_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun4196_ip = 104; continue _fun4196 }
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
                        _fun4197: for(var _fun4197_ip = 0; ; ) switch(_fun4197_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun4197_ip = 15; continue _fun4197 }
case 9:
                            r0 = _closure2_slot0;
                            _fun4197_ip = 19; continue _fun4197;
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
            r1 = r7[r0];
            r0 = undefined;
            r5 = r6.bind(r0)(r1);
            r16 = global;
            r9 = r16.Object;
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
            r3 = 2;
            r3 = r7[r3];
            r3 = r6.bind(r0)(r3);
            r3 = r5.bind(r0)(r3);
            r5 = 3;
            r5 = r7[r5];
            r5 = r6.bind(r0)(r5);
            if(!r5) { _fun4195_ip = 131; continue _fun4195 }
case 120:
            r6 = r5.__esModule;
            if(r6) { _fun4195_ip = 389; continue _fun4195 }
case 131:
            r15 = null;
            if(!(r15 !== r5)) { _fun4195_ip = 383; continue _fun4195 }
case 140:
            r7 = typeof r5;
            r6 = 'object';
            if(!(r6 !== r7)) { _fun4195_ip = 162; continue _fun4195 }
case 151:
            r6 = 'function';
            if(!(r6 === r7)) { _fun4195_ip = 383; continue _fun4195 }
case 162:
            r4 = _closure1_slot0;
            r6 = r4.bind(r0)(r0);
            if(!r6) { _fun4195_ip = 190; continue _fun4195 }
case 174:
            r4 = r6.has;
            r4 = r4.bind(r6)(r5);
            if(r4) { _fun4195_ip = 371; continue _fun4195 }
case 190:
            r7 = Object.create(r15);
            r4 = r16.Object;
            r14 = r4.defineProperty;
            if(!r14) { _fun4195_ip = 218; continue _fun4195 }
case 207:
            r4 = r16.Object;
            r14 = r4.getOwnPropertyDescriptor;
case 218:
            r12 = r5;
            r8 = 'default';
            r4 = undefined;
            for(r9 in r12)
case 235:
            {
case 244:
                r20 = r9;
                if(r8 === r20) { _fun4195_ip = 235; continue _fun4195 }
case 251:
                r17 = {};
                r18 = r17.hasOwnProperty;
                r17 = r18.call;
                r17 = r17.bind(r18)(r5, r20);
                if(!r17) { _fun4195_ip = 235; continue _fun4195 }
case 272:
                r17 = null;
                if(!r14) { _fun4195_ip = 294; continue _fun4195 }
case 277:
                r19 = r16.Object;
                r18 = r19.getOwnPropertyDescriptor;
                r17 = r18.bind(r19)(r5, r20);
case 294:
                if(!r17) { _fun4195_ip = 313; continue _fun4195 }
case 297:
                r18 = r17.get;
                if(r18) { _fun4195_ip = 326; continue _fun4195 }
case 305:
                r18 = r17.set;
                if(r18) { _fun4195_ip = 326; continue _fun4195 }
case 313:
                r18 = r5[r20];
                r7[r20] = r18;
                r4 = r17;
                _fun4195_ip = 235; continue _fun4195;
case 326:
                r19 = r16.Object;
                r18 = r19.defineProperty;
                r18 = r18.bind(r19)(r7, r20, r17);
                r4 = r17;
                _fun4195_ip = 235; continue _fun4195;
            }
case 349:
            r7['default'] = r5;
            if(!r6) { _fun4195_ip = 389; continue _fun4195 }
case 358:
            r4 = r6.set;
            r4 = r4.bind(r6)(r5, r7);
            _fun4195_ip = 389; continue _fun4195;
case 371:
            r4 = r6.get;
            r4 = r4.bind(r6)(r5);
            _fun4195_ip = 389; continue _fun4195;
case 383:
            r4 = {};
            r4['default'] = r5;
case 389:
            r3 = r3.default;
            r1 = r1.default;
            r1 = r3.bind(r0)(r1);
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 343;
    r5 = [1, 344, 329, 119];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun4198: for(var _fun4198_ip = 0; ; ) switch(_fun4198_ip) {
case 0:
            r5 = a1;
            r2 = a5;
            r6 = a6;
            var _closure1_slot0 = r5;
            var _closure1_slot1 = r6;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r4
                _fun4199: for(var _fun4199_ip = 0; ; ) switch(_fun4199_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun4199_ip = 104; continue _fun4199 }
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
                        _fun4200: for(var _fun4200_ip = 0; ; ) switch(_fun4200_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun4200_ip = 15; continue _fun4200 }
case 9:
                            r0 = _closure2_slot0;
                            _fun4200_ip = 19; continue _fun4200;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot17 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot17 = r0;
            r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r4
                _fun4201: for(var _fun4201_ip = 0; ; ) switch(_fun4201_ip) {
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
                    r0 = _closure1_slot19;
                    r0 = r0.bind(r2)();
                    if(r0) { _fun4201_ip = 61; continue _fun4201 }
case 48:
                    r0 = r8.apply;
                    r0 = r0.bind(r8)(r3, r5);
                    _fun4201_ip = 107; continue _fun4201;
case 61:
                    r6 = global;
                    r7 = r6.Reflect;
                    r6 = r7.construct;
                    if(r5) { _fun4201_ip = 81; continue _fun4201 }
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
            var _closure1_slot18 = r0;
            r0 = function() { // Original name: _isNativeReflectConstruct, environment: r4
                _fun4202: for(var _fun4202_ip = 0; ; ) switch(_fun4202_ip) {
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
                    _fun4202_ip = 74; continue _fun4202;
case 72: // catch_target0
                    CatchBlockStart(arg_register=1);
case 74:
                    r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                        r0 = _closure2_slot0;
                        r0 = !r0;
                        r0 = !r0;
                        return r0;
                    };
                    _closure1_slot19 = r1;
                    r0 = undefined;
                    r0 = r1.bind(r0)();
                    return r0;
                }
            };
            var _closure1_slot19 = r0;
            r0 = function(a0) { // Original name: removeClippedSubviewsOrDefault, environment: r4
                _fun4205: for(var _fun4205_ip = 0; ; ) switch(_fun4205_ip) {
case 0:
                    r1 = a0;
                    r2 = _closure1_slot8;
                    r0 = r2.shouldUseRemoveClippedSubviewsAsDefaultOnIOS;
                    r3 = r0.bind(r2)();
                    r0 = null;
                    r2 = r1 != r0;
                    if(r3) { _fun4205_ip = 39; continue _fun4205 }
case 29:
                    r3 = true;
                    if(!r2) { _fun4205_ip = 37; continue _fun4205 }
case 34:
                    r3 = r1;
case 37:
                    return r3;
case 39:
                    r0 = true;
                    if(!r2) { _fun4205_ip = 47; continue _fun4205 }
case 44:
                    r0 = r1;
case 47:
                    return r0;
                }
            };
            var _closure1_slot20 = r0;
            r0 = function(a0) { // Original name: numColumnsOrDefault, environment: r4
                _fun4206: for(var _fun4206_ip = 0; ; ) switch(_fun4206_ip) {
case 0:
                    r1 = a0;
                    r0 = null;
                    r2 = r1 != r0;
                    r0 = 1;
                    if(!r2) { _fun4206_ip = 18; continue _fun4206 }
case 15:
                    r0 = r1;
case 18:
                    return r0;
                }
            };
            var _closure1_slot21 = r0;
            r0 = function(a0) { // Original name: isArrayLike, environment: r4
                r0 = global;
                r2 = r0.Object;
                r1 = undefined;
                r0 = a0;
                r0 = r2.bind(r1)(r0);
                r0 = r0.length;
                r1 = typeof r0;
                r0 = 'number';
                r0 = r1 === r0;
                return r0;
            };
            var _closure1_slot22 = r0;
            r0 = 0;
            r1 = r6[r0];
            r0 = undefined;
            r7 = r5.bind(r0)(r1);
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
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r7.bind(r0)(r1);
            var _closure1_slot2 = r1;
            r1 = 2;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r7.bind(r0)(r1);
            var _closure1_slot3 = r1;
            r1 = 3;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r7.bind(r0)(r1);
            var _closure1_slot4 = r1;
            r1 = 4;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r7.bind(r0)(r1);
            var _closure1_slot5 = r1;
            r1 = 5;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r7.bind(r0)(r1);
            var _closure1_slot6 = r1;
            r1 = 6;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r7.bind(r0)(r1);
            var _closure1_slot7 = r1;
            r1 = 7;
            r1 = r6[r1];
            r8 = r5.bind(r0)(r1);
            if(!r8) { _fun4198_ip = 279; continue _fun4198 }
case 265:
            r3 = r8.__esModule;
            r1 = r8;
            if(r3) { _fun4198_ip = 546; continue _fun4198 }
case 279:
            r18 = null;
            if(!(r18 !== r8)) { _fun4198_ip = 537; continue _fun4198 }
case 288:
            r9 = typeof r8;
            r3 = 'object';
            if(!(r3 !== r9)) { _fun4198_ip = 310; continue _fun4198 }
case 299:
            r3 = 'function';
            if(!(r3 === r9)) { _fun4198_ip = 537; continue _fun4198 }
case 310:
            r3 = _closure1_slot17;
            r9 = r3.bind(r0)(r0);
            if(!r9) { _fun4198_ip = 338; continue _fun4198 }
case 322:
            r3 = r9.has;
            r3 = r3.bind(r9)(r8);
            if(r3) { _fun4198_ip = 525; continue _fun4198 }
case 338:
            r3 = Object.create(r18);
            r10 = r19.Object;
            r17 = r10.defineProperty;
            if(!r17) { _fun4198_ip = 366; continue _fun4198 }
case 355:
            r10 = r19.Object;
            r17 = r10.getOwnPropertyDescriptor;
case 366:
            r15 = r8;
            r11 = 'default';
            r10 = undefined;
            for(r12 in r15)
case 383:
            {
case 392:
                r23 = r12;
                if(r11 === r23) { _fun4198_ip = 383; continue _fun4198 }
case 399:
                r20 = {};
                r21 = r20.hasOwnProperty;
                r20 = r21.call;
                r20 = r20.bind(r21)(r8, r23);
                if(!r20) { _fun4198_ip = 383; continue _fun4198 }
case 420:
                r20 = null;
                if(!r17) { _fun4198_ip = 442; continue _fun4198 }
case 425:
                r22 = r19.Object;
                r21 = r22.getOwnPropertyDescriptor;
                r20 = r21.bind(r22)(r8, r23);
case 442:
                if(!r20) { _fun4198_ip = 461; continue _fun4198 }
case 445:
                r21 = r20.get;
                if(r21) { _fun4198_ip = 474; continue _fun4198 }
case 453:
                r21 = r20.set;
                if(r21) { _fun4198_ip = 474; continue _fun4198 }
case 461:
                r21 = r8[r23];
                r3[r23] = r21;
                r10 = r20;
                _fun4198_ip = 383; continue _fun4198;
case 474:
                r22 = r19.Object;
                r21 = r22.defineProperty;
                r21 = r21.bind(r22)(r3, r23, r20);
                r10 = r20;
                _fun4198_ip = 383; continue _fun4198;
            }
case 497:
            r3['default'] = r8;
            r1 = r3;
            if(!r9) { _fun4198_ip = 546; continue _fun4198 }
case 509:
            r10 = r9.set;
            r10 = r10.bind(r9)(r8, r3);
            r1 = r3;
            _fun4198_ip = 546; continue _fun4198;
case 525:
            r3 = r9.get;
            r1 = r3.bind(r9)(r8);
            _fun4198_ip = 546; continue _fun4198;
case 537:
            r3 = {};
            r3['default'] = r8;
            r1 = r3;
case 546:
            var _closure1_slot8 = r1;
            r1 = 8;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r7.bind(r0)(r1);
            var _closure1_slot9 = r1;
            r1 = 9;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r3 = r7.bind(r0)(r1);
            r1 = 10;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r7.bind(r0)(r1);
            var _closure1_slot10 = r1;
            r1 = 11;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r7.bind(r0)(r1);
            var _closure1_slot11 = r1;
            r7 = 12;
            r7 = r6[r7];
            r7 = r5.bind(r0)(r7);
            var _closure1_slot12 = r7;
            r7 = ['numColumns', 'columnWrapperStyle', 'removeClippedSubviews', 'strictMode'];
            var _closure1_slot13 = r7;
            r7 = r3.default;
            r7 = r7.VirtualizedList;
            var _closure1_slot14 = r7;
            r3 = r3.default;
            r3 = r3.keyExtractor;
            var _closure1_slot15 = r3;
            r1 = r1.default;
            r3 = r1.PureComponent;
            r1 = function(a0) { // Environment: r4
                r3 = function(a0) { // Original name: FlatList, environment: r5
                    _fun4209: for(var _fun4209_ip = 0; ; ) switch(_fun4209_ip) {
case 0:
                        r6 = this;
                        r0 = _closure1_slot3;
                        r0 = r0.default;
                        r5 = _closure2_slot0;
                        r4 = undefined;
                        r0 = r0.bind(r4)(r6, r5);
                        r3 = _closure1_slot18;
                        r0 = new Array(1);
                        r7 = a0;
                        r0[0] = r7;
                        r0 = r3.bind(r4)(r6, r5, r0);
                        var _closure3_slot0 = r0;
                        r3 = new Array(0);
                        r0['_virtualizedListPairs'] = r3;
                        r3 = function(a0) { // Environment: r1
                            r1 = _closure3_slot0;
                            r0 = a0;
                            r1['_listRef'] = r0;
                            r0 = undefined;
                            return r0;
                        };
                        r0['_captureRef'] = r3;
                        r3 = function(a0, a1) { // Environment: r1
                            _fun4211: for(var _fun4211_ip = 0; ; ) switch(_fun4211_ip) {
case 0:
                                r4 = a0;
                                r3 = a1;
                                r2 = _closure1_slot21;
                                r0 = _closure3_slot0;
                                r0 = r0.props;
                                r1 = r0.numColumns;
                                r0 = undefined;
                                r2 = r2.bind(r0)(r1);
                                r0 = 1;
                                if(!(!(r2 > r0))) { _fun4211_ip = 51; continue _fun4211 }
case 45:
                                r0 = r4[r3];
                                return r0;
case 51:
                                r0 = new Array(0);
                                r1 = 0;
                                r5 = r1 < r2;
                                if(!r5) { _fun4211_ip = 105; continue _fun4211 }
case 64:
                                r5 = r3 * r2;
                                r6 = r5 + r1;
                                r7 = r4.length;
                                r5 = r1;
                                if(!(r6 < r7)) { _fun4211_ip = 98; continue _fun4211 }
case 84:
                                r7 = r4[r6];
                                r6 = r0.push;
                                r6 = r6.bind(r0)(r7);
case 98:
                                r1 = r5 + 1;
                                if(r1 < r2) { _fun4211_ip = 64; continue _fun4211 }
case 105:
                                return r0;
                            }
                        };
                        r0['_getItem'] = r3;
                        r3 = function(a0) { // Environment: r1
                            _fun4212: for(var _fun4212_ip = 0; ; ) switch(_fun4212_ip) {
case 0:
                                r1 = a0;
                                r0 = null;
                                if(!(r1 != r0)) { _fun4212_ip = 26; continue _fun4212 }
case 9:
                                r2 = _closure1_slot22;
                                r3 = undefined;
                                r2 = r2.bind(r3)(r1);
                                if(r2) { _fun4212_ip = 30; continue _fun4212 }
case 26:
                                r2 = 0;
                                return r2;
case 30:
                                r2 = _closure1_slot21;
                                r0 = _closure3_slot0;
                                r0 = r0.props;
                                r0 = r0.numColumns;
                                r4 = r2.bind(r3)(r0);
                                r0 = 1;
                                if(!(!(r4 > r0))) { _fun4212_ip = 71; continue _fun4212 }
case 64:
                                r0 = r1.length;
                                _fun4212_ip = 99; continue _fun4212;
case 71:
                                r2 = global;
                                r3 = r2.Math;
                                r2 = r3.ceil;
                                r1 = r1.length;
                                r1 = r1 / r4;
                                r0 = r2.bind(r3)(r1);
case 99:
                                return r0;
                            }
                        };
                        r0['_getItemCount'] = r3;
                        r3 = function(a0, a1) { // Environment: r1
                            _fun4213: for(var _fun4213_ip = 0; ; ) switch(_fun4213_ip) {
case 0:
                                r2 = a0;
                                r4 = a1;
                                var _closure4_slot0 = r4;
                                r7 = _closure1_slot21;
                                r3 = _closure3_slot0;
                                r5 = r3.props;
                                r5 = r5.numColumns;
                                r6 = undefined;
                                r5 = r7.bind(r6)(r5);
                                var _closure4_slot1 = r5;
                                r3 = r3.props;
                                r3 = r3.keyExtractor;
                                r7 = null;
                                if(!(r3 == r7)) { _fun4213_ip = 69; continue _fun4213 }
case 65:
                                r3 = _closure1_slot15;
case 69:
                                var _closure4_slot2 = r3;
                                r7 = 1;
                                if(!(!(r5 > r7))) { _fun4213_ip = 88; continue _fun4213 }
case 80:
                                r3 = r3.bind(r6)(r2, r4);
                                return r3;
case 88:
                                r3 = _closure1_slot0;
                                r4 = _closure1_slot1;
                                r1 = 13;
                                r1 = r4[r1];
                                r4 = r3.bind(r6)(r1);
                                r1 = global;
                                r3 = r1.Array;
                                r1 = r3.isArray;
                                r3 = r1.bind(r3)(r2);
                                r1 = 'FlatList: Encountered internal consistency error, expected each item to consist of an array with 1-%s columns; instead, received a single item.';
                                r1 = r4.bind(r6)(r3, r1, r5);
                                r1 = r2.map;
                                r0 = function(a0, a1) { // Environment: r0
                                    r3 = _closure4_slot2;
                                    r1 = _closure4_slot0;
                                    r0 = _closure4_slot1;
                                    r1 = r1 * r0;
                                    r0 = a1;
                                    r2 = r1 + r0;
                                    r1 = undefined;
                                    r0 = a0;
                                    r0 = r3.bind(r1)(r0, r2);
                                    return r0;
                                };
                                r2 = r1.bind(r2)(r0);
                                r1 = r2.join;
                                r0 = ':';
                                r0 = r1.bind(r2)(r0);
                                return r0;
                            }
                        };
                        r0['_keyExtractor'] = r3;
                        r3 = function(a0, a1, a2, a3, a4) { // Environment: r1
                            _fun4215: for(var _fun4215_ip = 0; ; ) switch(_fun4215_ip) {
case 0:
                                r0 = a0;
                                var _closure4_slot0 = r0;
                                r2 = a1;
                                var _closure4_slot1 = r2;
                                r2 = a2;
                                var _closure4_slot2 = r2;
                                r4 = _closure1_slot21;
                                r3 = undefined;
                                r2 = a3;
                                r2 = r4.bind(r3)(r2);
                                var _closure4_slot3 = r2;
                                r2 = function(a0) { // Original name: render, environment: r1
                                    _fun4216: for(var _fun4216_ip = 0; ; ) switch(_fun4216_ip) {
case 0:
                                        r5 = a0;
                                        r1 = _closure4_slot0;
                                        if(r1) { _fun4216_ip = 37; continue _fun4216 }
case 13:
                                        r1 = _closure4_slot1;
                                        if(r1) { _fun4216_ip = 24; continue _fun4216 }
case 20:
                                        r1 = null;
                                        return r1;
case 24:
                                        r2 = _closure4_slot1;
                                        r1 = undefined;
                                        r1 = r2.bind(r1)(r5);
                                        return r1;
case 37:
                                        r1 = _closure1_slot12;
                                        r3 = r1.jsx;
                                        r2 = _closure4_slot0;
                                        r0 = global;
                                        r4 = r0.Object;
                                        r1 = r4.assign;
                                        r0 = {};
                                        r1 = r1.bind(r4)(r0, r5);
                                        r0 = undefined;
                                        r0 = r3.bind(r0)(r2, r1);
                                        return r0;
                                    }
                                };
                                var _closure4_slot4 = r2;
                                r2 = function(a0) { // Original name: renderProp, environment: r1
                                    _fun4217: for(var _fun4217_ip = 0; ; ) switch(_fun4217_ip) {
case 0:
                                        r0 = a0;
                                        var _closure5_slot0 = r0;
                                        r2 = _closure4_slot3;
                                        r1 = 1;
                                        if(!(!(r2 > r1))) { _fun4217_ip = 36; continue _fun4217 }
case 23:
                                        r2 = _closure4_slot4;
                                        r1 = undefined;
                                        r1 = r2.bind(r1)(r0);
                                        return r1;
case 36:
                                        r6 = r0.item;
                                        r0 = r0.index;
                                        var _closure5_slot1 = r0;
                                        r9 = _closure1_slot0;
                                        r10 = _closure1_slot1;
                                        r0 = 13;
                                        r0 = r10[r0];
                                        r3 = undefined;
                                        r2 = r9.bind(r3)(r0);
                                        r0 = global;
                                        r1 = r0.Array;
                                        r0 = r1.isArray;
                                        r1 = r0.bind(r1)(r6);
                                        r0 = 'Expected array of items with numColumns > 1';
                                        r0 = r2.bind(r3)(r1, r0);
                                        r0 = _closure1_slot12;
                                        r2 = r0.jsx;
                                        r0 = _closure1_slot9;
                                        r1 = r0.default;
                                        r0 = {};
                                        r8 = 14;
                                        r8 = r10[r8];
                                        r8 = r9.bind(r3)(r8);
                                        r9 = r8.default;
                                        r8 = r9.compose;
                                        r7 = _closure1_slot16;
                                        r7 = r7.row;
                                        r5 = _closure4_slot2;
                                        r5 = r8.bind(r9)(r7, r5);
                                        r0['style'] = r5;
                                        r5 = r6.map;
                                        r4 = function(a0, a1) { // Environment: r4
                                            _fun4218: for(var _fun4218_ip = 0; ; ) switch(_fun4218_ip) {
case 0:
                                                r5 = a1;
                                                r1 = _closure4_slot4;
                                                r0 = {};
                                                r2 = a0;
                                                r0['item'] = r2;
                                                r4 = _closure5_slot1;
                                                r3 = _closure4_slot3;
                                                r3 = r4 * r3;
                                                r3 = r3 + r5;
                                                r0['index'] = r3;
                                                r2 = _closure5_slot0;
                                                r2 = r2.separators;
                                                r0['separators'] = r2;
                                                r4 = undefined;
                                                r6 = r1.bind(r4)(r0);
                                                r0 = null;
                                                r1 = r6 != r0;
                                                if(!r1) { _fun4218_ip = 114; continue _fun4218 }
case 74:
                                                r2 = _closure1_slot12;
                                                r3 = r2.jsx;
                                                r1 = _closure1_slot11;
                                                r1 = r1.default;
                                                r2 = r1.Fragment;
                                                r1 = {};
                                                r1['children'] = r6;
                                                r0 = r3.bind(r4)(r2, r1, r5);
case 114:
                                                return r0;
                                            }
                                        };
                                        r4 = r5.bind(r6)(r4);
                                        r0['children'] = r4;
                                        r0 = r2.bind(r3)(r1, r0);
                                        return r0;
                                    }
                                };
                                r1 = {};
                                if(r0) { _fun4215_ip = 73; continue _fun4215 }
case 63:
                                r1['renderItem'] = r2;
                                r0 = r1;
                                _fun4215_ip = 81; continue _fun4215;
case 73:
                                r1['ListItemComponent'] = r2;
                                r0 = r1;
case 81:
                                return r0;
                            }
                        };
                        r0['_renderer'] = r3;
                        r2 = _closure1_slot10;
                        r3 = r2.default;
                        r2 = r0._renderer;
                        r2 = r3.bind(r4)(r2);
                        r0['_memoizedRenderer'] = r2;
                        r3 = r0._checkProps;
                        r2 = r0.props;
                        r2 = r3.bind(r0)(r2);
                        r2 = r0.props;
                        r3 = r2.viewabilityConfigCallbackPairs;
                        r2 = r0.props;
                        if(r3) { _fun4209_ip = 249; continue _fun4209 }
case 183:
                        r3 = r2.onViewableItemsChanged;
                        if(!r3) { _fun4209_ip = 276; continue _fun4209 }
case 192:
                        r5 = r0._virtualizedListPairs;
                        r4 = r5.push;
                        r3 = {};
                        r6 = r0.props;
                        r6 = r6.viewabilityConfig;
                        r3['viewabilityConfig'] = r6;
                        r7 = r0._createOnViewableItemsChanged;
                        r6 = function() { // Environment: r1
                            r5 = undefined;
                            r0 = undefined;
                            r2 = _closure1_slot0;
                            r3 = _closure1_slot1;
                            r1 = 13;
                            r1 = r3[r1];
                            r4 = r2.bind(r5)(r1);
                            r1 = _closure3_slot0;
                            r2 = r1.props;
                            r3 = r2.onViewableItemsChanged;
                            r2 = 'Changing the nullability of onViewableItemsChanged is not supported. Once a function or null is supplied that cannot be changed.';
                            r2 = r4.bind(r5)(r3, r2);
                            r3 = r1.props;
                            r2 = r3.onViewableItemsChanged;
                            r1 = r2.apply;
                            r0 = arguments;
                            r0 = r1.bind(r2)(r3, r0);
                            return r0;
                        };
                        r6 = r7.bind(r0)(r6);
                        r3['onViewableItemsChanged'] = r6;
                        r3 = r4.bind(r5)(r3);
                        _fun4209_ip = 276; continue _fun4209;
case 249:
                        r3 = r2.viewabilityConfigCallbackPairs;
                        r2 = r3.map;
                        r1 = function(a0) { // Environment: r1
                            r1 = a0;
                            r0 = {};
                            r2 = r1.viewabilityConfig;
                            r0['viewabilityConfig'] = r2;
                            r3 = _closure3_slot0;
                            r2 = r3._createOnViewableItemsChanged;
                            r1 = r1.onViewableItemsChanged;
                            r1 = r2.bind(r3)(r1);
                            r0['onViewableItemsChanged'] = r1;
                            return r0;
                        };
                        r1 = r2.bind(r3)(r1);
                        r0['_virtualizedListPairs'] = r1;
case 276:
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
                r0 = 'scrollToEnd';
                r4['key'] = r0;
                r0 = function(a0) { // Original name: scrollToEnd, environment: r5
                    _fun4221: for(var _fun4221_ip = 0; ; ) switch(_fun4221_ip) {
case 0:
                        r0 = this;
                        r1 = r0._listRef;
                        if(!r1) { _fun4221_ip = 29; continue _fun4221 }
case 10:
                        r2 = r0._listRef;
                        r1 = r2.scrollToEnd;
                        r0 = a0;
                        r0 = r1.bind(r2)(r0);
case 29:
                        r0 = undefined;
                        return r0;
                    }
                };
                r4['value'] = r0;
                r0 = new Array(15);
                r0[0] = r4;
                r4 = {};
                r6 = 'scrollToIndex';
                r4['key'] = r6;
                r6 = function(a0) { // Original name: scrollToIndex, environment: r5
                    _fun4222: for(var _fun4222_ip = 0; ; ) switch(_fun4222_ip) {
case 0:
                        r0 = this;
                        r1 = r0._listRef;
                        if(!r1) { _fun4222_ip = 29; continue _fun4222 }
case 10:
                        r2 = r0._listRef;
                        r1 = r2.scrollToIndex;
                        r0 = a0;
                        r0 = r1.bind(r2)(r0);
case 29:
                        r0 = undefined;
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[1] = r4;
                r4 = {};
                r6 = 'scrollToItem';
                r4['key'] = r6;
                r6 = function(a0) { // Original name: scrollToItem, environment: r5
                    _fun4223: for(var _fun4223_ip = 0; ; ) switch(_fun4223_ip) {
case 0:
                        r0 = this;
                        r1 = r0._listRef;
                        if(!r1) { _fun4223_ip = 29; continue _fun4223 }
case 10:
                        r2 = r0._listRef;
                        r1 = r2.scrollToItem;
                        r0 = a0;
                        r0 = r1.bind(r2)(r0);
case 29:
                        r0 = undefined;
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[2] = r4;
                r4 = {};
                r6 = 'scrollToOffset';
                r4['key'] = r6;
                r6 = function(a0) { // Original name: scrollToOffset, environment: r5
                    _fun4224: for(var _fun4224_ip = 0; ; ) switch(_fun4224_ip) {
case 0:
                        r0 = this;
                        r1 = r0._listRef;
                        if(!r1) { _fun4224_ip = 29; continue _fun4224 }
case 10:
                        r2 = r0._listRef;
                        r1 = r2.scrollToOffset;
                        r0 = a0;
                        r0 = r1.bind(r2)(r0);
case 29:
                        r0 = undefined;
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[3] = r4;
                r4 = {};
                r6 = 'recordInteraction';
                r4['key'] = r6;
                r6 = function() { // Original name: recordInteraction, environment: r5
                    _fun4225: for(var _fun4225_ip = 0; ; ) switch(_fun4225_ip) {
case 0:
                        r0 = this;
                        r1 = r0._listRef;
                        if(!r1) { _fun4225_ip = 25; continue _fun4225 }
case 10:
                        r1 = r0._listRef;
                        r0 = r1.recordInteraction;
                        r0 = r0.bind(r1)();
case 25:
                        r0 = undefined;
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[4] = r4;
                r4 = {};
                r6 = 'flashScrollIndicators';
                r4['key'] = r6;
                r6 = function() { // Original name: flashScrollIndicators, environment: r5
                    _fun4226: for(var _fun4226_ip = 0; ; ) switch(_fun4226_ip) {
case 0:
                        r0 = this;
                        r1 = r0._listRef;
                        if(!r1) { _fun4226_ip = 25; continue _fun4226 }
case 10:
                        r1 = r0._listRef;
                        r0 = r1.flashScrollIndicators;
                        r0 = r0.bind(r1)();
case 25:
                        r0 = undefined;
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[5] = r4;
                r4 = {};
                r6 = 'getScrollResponder';
                r4['key'] = r6;
                r6 = function() { // Original name: getScrollResponder, environment: r5
                    _fun4227: for(var _fun4227_ip = 0; ; ) switch(_fun4227_ip) {
case 0:
                        r0 = this;
                        r1 = r0._listRef;
                        if(r1) { _fun4227_ip = 14; continue _fun4227 }
case 10:
                        r1 = undefined;
                        return r1;
case 14:
                        r1 = r0._listRef;
                        r0 = r1.getScrollResponder;
                        r0 = r0.bind(r1)();
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[6] = r4;
                r4 = {};
                r6 = 'getNativeScrollRef';
                r4['key'] = r6;
                r6 = function() { // Original name: getNativeScrollRef, environment: r5
                    _fun4228: for(var _fun4228_ip = 0; ; ) switch(_fun4228_ip) {
case 0:
                        r0 = this;
                        r1 = r0._listRef;
                        if(r1) { _fun4228_ip = 14; continue _fun4228 }
case 10:
                        r1 = undefined;
                        return r1;
case 14:
                        r1 = r0._listRef;
                        r0 = r1.getScrollRef;
                        r0 = r0.bind(r1)();
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[7] = r4;
                r4 = {};
                r6 = 'getScrollableNode';
                r4['key'] = r6;
                r6 = function() { // Original name: getScrollableNode, environment: r5
                    _fun4229: for(var _fun4229_ip = 0; ; ) switch(_fun4229_ip) {
case 0:
                        r0 = this;
                        r1 = r0._listRef;
                        if(r1) { _fun4229_ip = 14; continue _fun4229 }
case 10:
                        r1 = undefined;
                        return r1;
case 14:
                        r1 = r0._listRef;
                        r0 = r1.getScrollableNode;
                        r0 = r0.bind(r1)();
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[8] = r4;
                r4 = {};
                r6 = 'setNativeProps';
                r4['key'] = r6;
                r6 = function(a0) { // Original name: setNativeProps, environment: r5
                    _fun4230: for(var _fun4230_ip = 0; ; ) switch(_fun4230_ip) {
case 0:
                        r0 = this;
                        r1 = r0._listRef;
                        if(!r1) { _fun4230_ip = 29; continue _fun4230 }
case 10:
                        r2 = r0._listRef;
                        r1 = r2.setNativeProps;
                        r0 = a0;
                        r0 = r1.bind(r2)(r0);
case 29:
                        r0 = undefined;
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[9] = r4;
                r4 = {};
                r6 = 'componentDidUpdate';
                r4['key'] = r6;
                r6 = function(a0) { // Original name: componentDidUpdate, environment: r5
                    r1 = a0;
                    r3 = this;
                    r4 = _closure1_slot0;
                    r5 = _closure1_slot1;
                    r2 = 13;
                    r6 = r5[r2];
                    r0 = undefined;
                    r8 = r4.bind(r0)(r6);
                    r7 = r1.numColumns;
                    r6 = r3.props;
                    r6 = r6.numColumns;
                    r7 = r7 === r6;
                    r6 = 'Changing numColumns on the fly is not supported. Change the key prop on FlatList when changing the number of columns to force a fresh render of the component.';
                    r6 = r8.bind(r0)(r7, r6);
                    r6 = r5[r2];
                    r8 = r4.bind(r0)(r6);
                    r6 = r1.onViewableItemsChanged;
                    r9 = null;
                    r7 = r6 == r9;
                    r6 = r3.props;
                    r6 = r6.onViewableItemsChanged;
                    r6 = r6 == r9;
                    r7 = r7 === r6;
                    r6 = 'Changing onViewableItemsChanged nullability on the fly is not supported';
                    r6 = r8.bind(r0)(r7, r6);
                    r6 = r5[r2];
                    r8 = r4.bind(r0)(r6);
                    r6 = 15;
                    r6 = r5[r6];
                    r10 = r4.bind(r0)(r6);
                    r9 = r10.default;
                    r7 = r1.viewabilityConfig;
                    r6 = r3.props;
                    r6 = r6.viewabilityConfig;
                    r6 = r9.bind(r10)(r7, r6);
                    r7 = !r6;
                    r6 = 'Changing viewabilityConfig on the fly is not supported';
                    r6 = r8.bind(r0)(r7, r6);
                    r2 = r5[r2];
                    r4 = r4.bind(r0)(r2);
                    r2 = r1.viewabilityConfigCallbackPairs;
                    r1 = r3.props;
                    r1 = r1.viewabilityConfigCallbackPairs;
                    r2 = r2 === r1;
                    r1 = 'Changing viewabilityConfigCallbackPairs on the fly is not supported';
                    r1 = r4.bind(r0)(r2, r1);
                    r2 = r3._checkProps;
                    r1 = r3.props;
                    r1 = r2.bind(r3)(r1);
                    return r0;
                };
                r4['value'] = r6;
                r0[10] = r4;
                r4 = {};
                r6 = '_checkProps';
                r4['key'] = r6;
                r6 = function(a0) { // Original name: _checkProps, environment: r5
                    _fun4232: for(var _fun4232_ip = 0; ; ) switch(_fun4232_ip) {
case 0:
                        r0 = a0;
                        r9 = r0.getItem;
                        r7 = r0.getItemCount;
                        r4 = r0.horizontal;
                        r6 = r0.columnWrapperStyle;
                        r1 = r0.onViewableItemsChanged;
                        r2 = r0.viewabilityConfigCallbackPairs;
                        r8 = _closure1_slot21;
                        r0 = this;
                        r0 = r0.props;
                        r5 = r0.numColumns;
                        r0 = undefined;
                        r8 = r8.bind(r0)(r5);
                        r11 = _closure1_slot0;
                        r10 = _closure1_slot1;
                        r5 = 13;
                        r10 = r10[r5];
                        r10 = r11.bind(r0)(r10);
                        r9 = !r9;
                        if(!r9) { _fun4232_ip = 93; continue _fun4232 }
case 90:
                        r9 = !r7;
case 93:
                        r7 = 'FlatList does not support custom data formats.';
                        r7 = r10.bind(r0)(r9, r7);
                        r7 = 1;
                        if(!(!(r8 > r7))) { _fun4232_ip = 142; continue _fun4232 }
case 110:
                        r8 = _closure1_slot0;
                        r7 = _closure1_slot1;
                        r7 = r7[r5];
                        r8 = r8.bind(r0)(r7);
                        r7 = !r6;
                        r6 = 'columnWrapperStyle not supported for single column lists';
                        r6 = r8.bind(r0)(r7, r6);
                        _fun4232_ip = 172; continue _fun4232;
case 142:
                        r7 = _closure1_slot0;
                        r6 = _closure1_slot1;
                        r6 = r6[r5];
                        r7 = r7.bind(r0)(r6);
                        r6 = !r4;
                        r4 = 'numColumns does not support horizontal.';
                        r4 = r7.bind(r0)(r6, r4);
case 172:
                        r4 = _closure1_slot0;
                        r3 = _closure1_slot1;
                        r3 = r3[r5];
                        r3 = r4.bind(r0)(r3);
                        if(!r1) { _fun4232_ip = 195; continue _fun4232 }
case 192:
                        r1 = r2;
case 195:
                        r2 = !r1;
                        r1 = 'FlatList does not support setting both onViewableItemsChanged and viewabilityConfigCallbackPairs.';
                        r1 = r3.bind(r0)(r2, r1);
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[11] = r4;
                r4 = {};
                r6 = '_pushMultiColumnViewable';
                r4['key'] = r6;
                r6 = function(a0, a1) { // Original name: _pushMultiColumnViewable, environment: r5
                    _fun4233: for(var _fun4233_ip = 0; ; ) switch(_fun4233_ip) {
case 0:
                        r2 = a1;
                        r3 = this;
                        r0 = a0;
                        var _closure3_slot0 = r0;
                        var _closure3_slot1 = r2;
                        r6 = _closure1_slot21;
                        r0 = r3.props;
                        r5 = r0.numColumns;
                        r0 = undefined;
                        r5 = r6.bind(r0)(r5);
                        var _closure3_slot2 = r5;
                        r3 = r3.props;
                        r3 = r3.keyExtractor;
                        r5 = null;
                        if(!(r3 == r5)) { _fun4233_ip = 68; continue _fun4233 }
case 64:
                        r3 = _closure1_slot15;
case 68:
                        var _closure3_slot3 = r3;
                        r3 = r2.item;
                        r2 = r3.forEach;
                        r1 = function(a0, a1) { // Environment: r1
                            r9 = a0;
                            r2 = _closure1_slot0;
                            r1 = _closure1_slot1;
                            r0 = 13;
                            r1 = r1[r0];
                            r0 = undefined;
                            r3 = r2.bind(r0)(r1);
                            r7 = _closure3_slot1;
                            r2 = r7.index;
                            r1 = null;
                            r2 = r2 != r1;
                            r1 = 'Missing index!';
                            r1 = r3.bind(r0)(r2, r1);
                            r2 = r7.index;
                            r1 = _closure3_slot2;
                            r2 = r2 * r1;
                            r1 = a1;
                            r1 = r2 + r1;
                            r3 = _closure3_slot0;
                            r2 = r3.push;
                            r4 = global;
                            r6 = r4.Object;
                            r5 = r6.assign;
                            r4 = {};
                            r4['item'] = r9;
                            r8 = _closure3_slot3;
                            r8 = r8.bind(r0)(r9, r1);
                            r4['key'] = r8;
                            r4['index'] = r1;
                            r1 = {};
                            r1 = r5.bind(r6)(r1, r7, r4);
                            r1 = r2.bind(r3)(r1);
                            return r0;
                        };
                        r1 = r2.bind(r3)(r1);
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[12] = r4;
                r4 = {};
                r6 = '_createOnViewableItemsChanged';
                r4['key'] = r6;
                r6 = function(a0) { // Original name: _createOnViewableItemsChanged, environment: r5
                    r1 = a0;
                    var _closure3_slot0 = r1;
                    r1 = this;
                    var _closure3_slot1 = r1;
                    r0 = function(a0) { // Environment: r0
                        _fun4236: for(var _fun4236_ip = 0; ; ) switch(_fun4236_ip) {
case 0:
                            r5 = a0;
                            r4 = _closure1_slot21;
                            r0 = _closure3_slot1;
                            r0 = r0.props;
                            r3 = r0.numColumns;
                            r0 = undefined;
                            r4 = r4.bind(r0)(r3);
                            r3 = _closure3_slot0;
                            if(!r3) { _fun4236_ip = 141; continue _fun4236 }
case 44:
                            r3 = 1;
                            if(!(!(r4 > r3))) { _fun4236_ip = 62; continue _fun4236 }
case 51:
                            r3 = _closure3_slot0;
                            r3 = r3.bind(r0)(r5);
                            _fun4236_ip = 141; continue _fun4236;
case 62:
                            r3 = new Array(0);
                            var _closure4_slot0 = r3;
                            r4 = new Array(0);
                            var _closure4_slot1 = r4;
                            r8 = r5.viewableItems;
                            r7 = r8.forEach;
                            r6 = function(a0) { // Environment: r2
                                r3 = _closure3_slot1;
                                r2 = r3._pushMultiColumnViewable;
                                r1 = _closure4_slot1;
                                r0 = a0;
                                r0 = r2.bind(r3)(r1, r0);
                                return r0;
                            };
                            r6 = r7.bind(r8)(r6);
                            r6 = r5.changed;
                            r5 = r6.forEach;
                            r2 = function(a0) { // Environment: r2
                                r3 = _closure3_slot1;
                                r2 = r3._pushMultiColumnViewable;
                                r1 = _closure4_slot0;
                                r0 = a0;
                                r0 = r2.bind(r3)(r1, r0);
                                return r0;
                            };
                            r2 = r5.bind(r6)(r2);
                            r2 = _closure3_slot0;
                            r1 = {};
                            r1['viewableItems'] = r4;
                            r1['changed'] = r3;
                            r1 = r2.bind(r0)(r1);
case 141:
                            return r0;
                        }
                    };
                    return r0;
                };
                r4['value'] = r6;
                r0[13] = r4;
                r4 = {};
                r6 = 'render';
                r4['key'] = r6;
                r5 = function() { // Original name: render, environment: r5
                    _fun4239: for(var _fun4239_ip = 0; ; ) switch(_fun4239_ip) {
case 0:
                        r0 = this;
                        r6 = r0.props;
                        r12 = r6.numColumns;
                        r11 = r6.columnWrapperStyle;
                        r9 = r6.removeClippedSubviews;
                        r2 = r6.strictMode;
                        r3 = undefined;
                        r1 = false;
                        if(!(r2 !== r3)) { _fun4239_ip = 42; continue _fun4239 }
case 39:
                        r1 = r2;
case 42:
                        r2 = _closure1_slot2;
                        r5 = r2.default;
                        r2 = _closure1_slot13;
                        r8 = r5.bind(r3)(r6, r2);
                        if(r1) { _fun4239_ip = 75; continue _fun4239 }
case 67:
                        r10 = r0._renderer;
                        _fun4239_ip = 81; continue _fun4239;
case 75:
                        r10 = r0._memoizedRenderer;
case 81:
                        r1 = _closure1_slot12;
                        r2 = r1.jsx;
                        r1 = _closure1_slot14;
                        r5 = global;
                        r7 = r5.Object;
                        r6 = r7.assign;
                        r5 = {};
                        r13 = r0._getItem;
                        r5['getItem'] = r13;
                        r13 = r0._getItemCount;
                        r5['getItemCount'] = r13;
                        r13 = r0._keyExtractor;
                        r5['keyExtractor'] = r13;
                        r13 = r0._captureRef;
                        r5['ref'] = r13;
                        r13 = r0._virtualizedListPairs;
                        r5['viewabilityConfigCallbackPairs'] = r13;
                        r4 = _closure1_slot20;
                        r4 = r4.bind(r3)(r9);
                        r5['removeClippedSubviews'] = r4;
                        r4 = r0.props;
                        r18 = r4.ListItemComponent;
                        r4 = r0.props;
                        r17 = r4.renderItem;
                        r0 = r0.props;
                        r14 = r0.extraData;
                        r19 = undefined;
                        r16 = r11;
                        r15 = r12;
                        r15 = r19[r10](r18, r17, r16, r15, r14, r13);
                        r18 = {};
                        r19 = r7;
                        r17 = r8;
                        r16 = r5;
                        r0 = r19[r6](r18, r17, r16, r15, r14);
                        r0 = r2.bind(r3)(r1, r0);
                        return r0;
                    }
                };
                r4['value'] = r5;
                r0[14] = r4;
                r0 = r1.bind(r2)(r3, r0);
                return r0;
            };
            r1 = r1.bind(r0)(r3);
            r3 = 14;
            r3 = r6[r3];
            r3 = r5.bind(r0)(r3);
            r6 = r3.default;
            r5 = r6.create;
            r3 = {};
            r7 = {};
            r8 = 'row';
            r7['flexDirection'] = r8;
            r3['row'] = r7;
            r3 = r5.bind(r6)(r3);
            var _closure1_slot16 = r3;
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 344;
    r5 = [1, 203, 12, 13, 23, 25, 28, 73, 248, 345, 360, 119, 251, 20, 253, 129];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r5 = a1;
        r2 = a5;
        r6 = a6;
        var _closure1_slot0 = r5;
        var _closure1_slot1 = r6;
        r0 = global;
        r7 = r0.Object;
        r4 = r7.defineProperty;
        r1 = {};
        r0 = true;
        r1['value'] = r0;
        r0 = '__esModule';
        r0 = r4.bind(r7)(r2, r0, r1);
        r0 = undefined;
        r2['default'] = r0;
        r1 = {};
        r4 = 0;
        r4 = r6[r4];
        r4 = r5.bind(r0)(r4);
        r4 = r4.keyExtractor;
        r1['keyExtractor'] = r4;
        r5 = function() { // Original name: get VirtualizedList, environment: r3
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 1;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r4 = 'VirtualizedList';
        Object.defineProperty(r1, r4, {get: r5, set: r0, enumerable: true});
        r5 = function() { // Original name: get VirtualizedSectionList, environment: r3
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 2;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r4 = 'VirtualizedSectionList';
        Object.defineProperty(r1, r4, {get: r5, set: r0, enumerable: true});
        r5 = function() { // Original name: get VirtualizedListContextResetter, environment: r3
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 3;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.VirtualizedListContextResetter;
            return r0;
        };
        r4 = 'VirtualizedListContextResetter';
        Object.defineProperty(r1, r4, {get: r5, set: r0, enumerable: true});
        r5 = function() { // Original name: get ViewabilityHelper, environment: r3
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 4;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r4 = 'ViewabilityHelper';
        Object.defineProperty(r1, r4, {get: r5, set: r0, enumerable: true});
        r4 = function() { // Original name: get FillRateHelper, environment: r3
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 5;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'FillRateHelper';
        Object.defineProperty(r1, r3, {get: r4, set: r0, enumerable: true});
        r2['default'] = r1;
        return r0;
    };
    r6 = 345;
    r5 = [346, 347, 359, 356, 354, 351];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun4246: for(var _fun4246_ip = 0; ; ) switch(_fun4246_ip) {
case 0:
            r3 = a1;
            r6 = a5;
            r4 = a6;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r2
                _fun4247: for(var _fun4247_ip = 0; ; ) switch(_fun4247_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun4247_ip = 104; continue _fun4247 }
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
                        _fun4248: for(var _fun4248_ip = 0; ; ) switch(_fun4248_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun4248_ip = 15; continue _fun4248 }
case 9:
                            r0 = _closure2_slot0;
                            _fun4248_ip = 19; continue _fun4248;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot2 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot2 = r0;
            r7 = function(a0, a1, a2) { // Original name: elementsThatOverlapOffsets, environment: r2
                _fun4249: for(var _fun4249_ip = 0; ; ) switch(_fun4249_ip) {
case 0:
                    r14 = a0;
                    r13 = a1;
                    r12 = a2;
                    r2 = undefined;
                    r1 = undefined;
                    r3 = arguments.length;
                    r0 = 3;
                    r3 = r3 > r0;
                    r11 = 1;
                    r10 = r11;
                    if(!r3) { _fun4249_ip = 47; continue _fun4249 }
case 32:
                    r3 = arguments[r0];
                    r10 = r11;
                    if(!(r3 !== r2)) { _fun4249_ip = 47; continue _fun4249 }
case 43:
                    r10 = arguments[r0];
case 47:
                    r1 = r13.getItemCount;
                    r0 = r13.data;
                    r9 = r1.bind(r13)(r0);
                    r0 = new Array(0);
                    r1 = r14.length;
                    r8 = 0;
                    r1 = r8 < r1;
                    r7 = global;
                    r6 = 2;
                    r5 = 0;
                    r4 = undefined;
                    r3 = undefined;
                    r2 = undefined;
                    if(!r1) { _fun4249_ip = 293; continue _fun4249 }
case 96:
                    r20 = r14[r5];
                    r19 = r9 - r11;
                    r1 = r5;
                    r18 = r4;
                    r17 = r3;
                    r16 = r2;
                    r15 = 0;
                    if(!(r15 <= r19)) { _fun4249_ip = 269; continue _fun4249 }
case 125:
                    r23 = r7.Math;
                    r22 = r23.floor;
                    r21 = r19 - r15;
                    r21 = r21 / r6;
                    r21 = r22.bind(r23)(r21);
                    r25 = r15 + r21;
                    r21 = r12.getCellMetricsApprox;
                    r21 = r21.bind(r12)(r25, r13);
                    r22 = r21.offset;
                    r24 = r22 * r10;
                    r22 = r21.offset;
                    r21 = r21.length;
                    r21 = r22 + r21;
                    r23 = r21 * r10;
                    r27 = r15;
                    r21 = r19;
                    if(!(r25 === r8)) { _fun4249_ip = 207; continue _fun4249 }
case 203:
                    if(!(!(r20 < r24))) { _fun4249_ip = 240; continue _fun4249 }
case 207:
                    if(!(r25 !== r8)) { _fun4249_ip = 215; continue _fun4249 }
case 211:
                    if(!(!(r20 <= r24))) { _fun4249_ip = 240; continue _fun4249 }
case 215:
                    if(!(!(r20 > r23))) { _fun4249_ip = 234; continue _fun4249 }
case 219:
                    r0[r1] = r25;
                    r18 = r25;
                    r17 = r24;
                    r16 = r23;
                    _fun4249_ip = 269; continue _fun4249;
case 234:
                    r22 = r25 + r11;
                    _fun4249_ip = 247; continue _fun4249;
case 240:
                    r21 = r25 - r11;
                    r22 = r27;
case 247:
                    r15 = r22;
                    r19 = r21;
                    r18 = r25;
                    r17 = r24;
                    r16 = r23;
                    if(r15 <= r19) { _fun4249_ip = 125; continue _fun4249 }
case 269:
                    r5 = r1 + 1;
                    r1 = r14.length;
                    r4 = r18;
                    r3 = r17;
                    r2 = r16;
                    if(r5 < r1) { _fun4249_ip = 96; continue _fun4249 }
case 293:
                    return r0;
                }
            };
            var _closure1_slot3 = r7;
            r1 = function(a0, a1) { // Original name: newRangeCount, environment: r2
                r0 = a0;
                r5 = a1;
                r2 = r5.last;
                r1 = r5.first;
                r1 = r2 - r1;
                r7 = 1;
                r1 = r1 + r7;
                r6 = global;
                r4 = r6.Math;
                r3 = r4.max;
                r10 = r6.Math;
                r9 = r10.min;
                r8 = r5.last;
                r2 = r0.last;
                r2 = r9.bind(r10)(r8, r2);
                r2 = r7 + r2;
                r7 = r6.Math;
                r6 = r7.max;
                r5 = r5.first;
                r0 = r0.first;
                r0 = r6.bind(r7)(r5, r0);
                r2 = r2 - r0;
                r0 = 0;
                r0 = r3.bind(r4)(r0, r2);
                r0 = r1 - r0;
                return r0;
            };
            var _closure1_slot4 = r1;
            r0 = 0;
            r5 = r4[r0];
            r0 = undefined;
            r5 = r3.bind(r0)(r5);
            r15 = global;
            r11 = r15.Object;
            r10 = r11.defineProperty;
            r9 = {};
            r8 = true;
            r9['value'] = r8;
            r8 = '__esModule';
            r8 = r10.bind(r11)(r6, r8, r9);
            r8 = function(a0, a1, a2, a3, a4, a5) { // Original name: computeWindowedRenderLimits, environment: r2
                _fun4251: for(var _fun4251_ip = 0; ; ) switch(_fun4251_ip) {
case 0:
                    r10 = a0;
                    r7 = a1;
                    r17 = a3;
                    r9 = a4;
                    r0 = a5;
                    r2 = r10.getItemCount;
                    r1 = r10.data;
                    r2 = r2.bind(r10)(r1);
                    r6 = 0;
                    if(!(r2 !== r6)) { _fun4251_ip = 838; continue _fun4251 }
case 39:
                    r13 = r0.offset;
                    r11 = r0.velocity;
                    r5 = r0.visibleLength;
                    r0 = r0.zoomScale;
                    r1 = 1;
                    r4 = undefined;
                    r8 = r1;
                    if(!(r0 !== r4)) { _fun4251_ip = 76; continue _fun4251 }
case 73:
                    r8 = r0;
case 76:
                    r3 = global;
                    r12 = r3.Math;
                    r0 = r12.max;
                    r13 = r0.bind(r12)(r6, r13);
                    r12 = r13 + r5;
                    r0 = a2;
                    r0 = r0 - r1;
                    r5 = r0 * r5;
                    r0 = r11 > r1;
                    r16 = 'after';
                    r15 = r16;
                    if(r0) { _fun4251_ip = 148; continue _fun4251 }
case 124:
                    r0 = -1;
                    r11 = r11 < r0;
                    r0 = 'none';
                    if(!r11) { _fun4251_ip = 145; continue _fun4251 }
case 141:
                    r0 = 'before';
case 145:
                    r15 = r0;
case 148:
                    r14 = r3.Math;
                    r11 = r14.max;
                    r0 = 0.5;
                    r0 = r0 * r5;
                    r5 = r13 - r0;
                    r18 = r11.bind(r14)(r6, r5);
                    r11 = r3.Math;
                    r5 = r11.max;
                    r0 = r12 + r0;
                    r11 = r5.bind(r11)(r6, r0);
                    r5 = r9.getCellMetricsApprox;
                    r0 = r2 - r1;
                    r0 = r5.bind(r9)(r0, r10);
                    r0 = r0.offset;
                    r0 = r0 * r8;
                    if(!(!(r0 < r18))) { _fun4251_ip = 797; continue _fun4251 }
case 236:
                    r5 = _closure1_slot3;
                    r0 = new Array(4);
                    r0[0] = r18;
                    r0[1] = r13;
                    r0[2] = r12;
                    r0[3] = r11;
                    r31 = undefined;
                    r30 = r0;
                    r29 = r10;
                    r28 = r9;
                    r27 = r8;
                    r8 = r31[r5](r30, r29, r28, r27, r26);
                    r0 = _closure1_slot0;
                    r5 = r0.default;
                    r0 = 4;
                    r8 = r5.bind(r4)(r8, r0);
                    r5 = r8[r6];
                    r10 = r8[r1];
                    r0 = 2;
                    r9 = r8[r0];
                    r0 = 3;
                    r12 = r8[r0];
                    r0 = null;
                    r8 = r5 == r0;
                    r13 = 0;
                    if(r8) { _fun4251_ip = 335; continue _fun4251 }
case 332:
                    r13 = r5;
case 335:
                    if(!(r10 == r0)) { _fun4251_ip = 356; continue _fun4251 }
case 339:
                    r8 = r3.Math;
                    r5 = r8.max;
                    r10 = r5.bind(r8)(r6, r13);
case 356:
                    if(!(r12 == r0)) { _fun4251_ip = 364; continue _fun4251 }
case 360:
                    r12 = r2 - r1;
case 364:
                    if(!(r9 == r0)) { _fun4251_ip = 393; continue _fun4251 }
case 368:
                    r8 = r3.Math;
                    r5 = r8.min;
                    r0 = r10 + r7;
                    r0 = r0 - r1;
                    r9 = r5.bind(r8)(r12, r0);
case 393:
                    r11 = {};
                    r11['first'] = r10;
                    r11['last'] = r9;
                    r0 = _closure1_slot4;
                    r0 = r0.bind(r4)(r17, r11);
                    r8 = 'before';
case 417:
                    r5 = r10;
                    r4 = r9;
                    r25 = r0;
                    if(!(r5 <= r13)) { _fun4251_ip = 437; continue _fun4251 }
case 430:
                    if(!(!(r4 >= r12))) { _fun4251_ip = 664; continue _fun4251 }
case 437:
                    r19 = r25 >= r7;
                    r20 = _closure1_slot1;
                    r18 = r20.fixVirtualizeListCollapseWindowSize;
                    r18 = r18.bind(r20)();
                    r20 = r17.first;
                    r22 = r5 <= r20;
                    if(r18) { _fun4251_ip = 505; continue _fun4251 }
case 467:
                    r18 = r22;
                    if(r22) { _fun4251_ip = 482; continue _fun4251 }
case 473:
                    r20 = r17.last;
                    r18 = r5 > r20;
case 482:
                    r20 = r17.last;
                    r21 = r4 >= r20;
                    if(r21) { _fun4251_ip = 503; continue _fun4251 }
case 494:
                    r20 = r17.first;
                    r21 = r4 < r20;
case 503:
                    _fun4251_ip = 517; continue _fun4251;
case 505:
                    r20 = r17.last;
                    r21 = r4 >= r20;
                    r18 = r22;
case 517:
                    r22 = r5 > r13;
                    if(!r22) { _fun4251_ip = 536; continue _fun4251 }
case 524:
                    r20 = !r19;
                    if(!r19) { _fun4251_ip = 533; continue _fun4251 }
case 530:
                    r20 = !r18;
case 533:
                    r22 = r20;
case 536:
                    r23 = r4 < r12;
                    if(!r23) { _fun4251_ip = 555; continue _fun4251 }
case 543:
                    r20 = !r19;
                    if(!r19) { _fun4251_ip = 552; continue _fun4251 }
case 549:
                    r20 = !r21;
case 552:
                    r23 = r20;
case 555:
                    if(!r19) { _fun4251_ip = 564; continue _fun4251 }
case 558:
                    if(r22) { _fun4251_ip = 564; continue _fun4251 }
case 561:
                    if(!r23) { _fun4251_ip = 664; continue _fun4251 }
case 564:
                    r20 = r5;
                    r19 = r25;
                    if(!r22) { _fun4251_ip = 604; continue _fun4251 }
case 573:
                    if(!(r15 === r16)) { _fun4251_ip = 589; continue _fun4251 }
case 577:
                    if(!r23) { _fun4251_ip = 589; continue _fun4251 }
case 580:
                    r20 = r5;
                    r19 = r25;
                    if(r21) { _fun4251_ip = 604; continue _fun4251 }
case 589:
                    r24 = r25;
                    if(!r18) { _fun4251_ip = 598; continue _fun4251 }
case 595:
                    r24 = r25 + 1;
case 598:
                    r20 = r5 - 1;
                    r19 = r24;
case 604:
                    r10 = r20;
                    r9 = r4;
                    r0 = r19;
                    if(!r23) { _fun4251_ip = 417; continue _fun4251 }
case 619:
                    if(!(r15 === r8)) { _fun4251_ip = 641; continue _fun4251 }
case 623:
                    if(!r22) { _fun4251_ip = 641; continue _fun4251 }
case 626:
                    r10 = r20;
                    r9 = r4;
                    r0 = r19;
                    if(r18) { _fun4251_ip = 417; continue _fun4251 }
case 641:
                    r18 = r19;
                    if(!r21) { _fun4251_ip = 650; continue _fun4251 }
case 647:
                    r18 = r19 + 1;
case 650:
                    r9 = r4 + 1;
                    r0 = r18;
                    r10 = r20;
                    _fun4251_ip = 417; continue _fun4251;
case 664:
                    if(!(r4 >= r5)) { _fun4251_ip = 702; continue _fun4251 }
case 668:
                    if(!(r5 >= r6)) { _fun4251_ip = 702; continue _fun4251 }
case 672:
                    if(!(r4 < r2)) { _fun4251_ip = 702; continue _fun4251 }
case 676:
                    if(!(r5 >= r13)) { _fun4251_ip = 702; continue _fun4251 }
case 680:
                    if(!(r4 <= r12)) { _fun4251_ip = 702; continue _fun4251 }
case 684:
                    r0 = r11.first;
                    if(!(r5 <= r0)) { _fun4251_ip = 702; continue _fun4251 }
case 693:
                    r0 = r11.last;
                    if(!(!(r4 >= r0))) { _fun4251_ip = 785; continue _fun4251 }
case 702:
                    r9 = r3.Error;
                    r10 = r3.JSON;
                    r8 = r10.stringify;
                    r0 = {};
                    r0['first'] = r5;
                    r0['last'] = r4;
                    r0['itemCount'] = r2;
                    r0['overscanFirst'] = r13;
                    r0['overscanLast'] = r12;
                    r0['visible'] = r11;
                    r8 = r8.bind(r10)(r0);
                    r0 = 'Bad window calculation ';
                    r30 = r0 + r8;
                    r8 = r9.prototype;
                    r8 = Object.create(r8, {constructor: {value: r9}});
                    r31 = r8;
                    r0 = new r31[r9](r30, r29);
                    r0 = r0 instanceof Object ? r0 : r8;
                    throw r0;
case 785:
                    r0 = {};
                    r0['first'] = r5;
                    r0['last'] = r4;
                    return r0;
case 797:
                    r0 = {};
                    r5 = r3.Math;
                    r4 = r5.max;
                    r3 = r2 - r1;
                    r3 = r3 - r7;
                    r3 = r4.bind(r5)(r6, r3);
                    r0['first'] = r3;
                    r1 = r2 - r1;
                    r0['last'] = r1;
                    return r0;
case 838:
                    r0 = {'first': 0, 'last': 4294967295};
                    return r0;
                }
            };
            r6['computeWindowedRenderLimits'] = r8;
            r6['elementsThatOverlapOffsets'] = r7;
            r7 = function(a0, a1) { // Original name: keyExtractor, environment: r2
                _fun4252: for(var _fun4252_ip = 0; ; ) switch(_fun4252_ip) {
case 0:
                    r0 = a0;
                    r2 = typeof r0;
                    r1 = 'object';
                    r1 = r2 === r1;
                    if(!r1) { _fun4252_ip = 37; continue _fun4252 }
case 17:
                    r3 = null;
                    r4 = r0 == r3;
                    r2 = undefined;
                    if(r4) { _fun4252_ip = 33; continue _fun4252 }
case 28:
                    r2 = r0.key;
case 33:
                    if(!(r2 == r3)) { _fun4252_ip = 87; continue _fun4252 }
case 37:
                    if(!r1) { _fun4252_ip = 60; continue _fun4252 }
case 40:
                    r2 = null;
                    r3 = r0 == r2;
                    r1 = undefined;
                    if(r3) { _fun4252_ip = 56; continue _fun4252 }
case 51:
                    r1 = r0.id;
case 56:
                    if(!(r1 == r2)) { _fun4252_ip = 80; continue _fun4252 }
case 60:
                    r1 = global;
                    r3 = r1.String;
                    r2 = undefined;
                    r1 = a1;
                    r1 = r3.bind(r2)(r1);
                    return r1;
case 80:
                    r1 = r0.id;
                    return r1;
case 87:
                    r0 = r0.key;
                    return r0;
                }
            };
            r6['keyExtractor'] = r7;
            r6['newRangeCount'] = r1;
            r1 = 1;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot0 = r1;
            r1 = 2;
            r1 = r4[r1];
            r4 = r3.bind(r0)(r1);
            if(!r4) { _fun4246_ip = 167; continue _fun4246 }
case 153:
            r3 = r4.__esModule;
            r1 = r4;
            if(r3) { _fun4246_ip = 434; continue _fun4246 }
case 167:
            r14 = null;
            if(!(r14 !== r4)) { _fun4246_ip = 425; continue _fun4246 }
case 176:
            r5 = typeof r4;
            r3 = 'object';
            if(!(r3 !== r5)) { _fun4246_ip = 198; continue _fun4246 }
case 187:
            r3 = 'function';
            if(!(r3 === r5)) { _fun4246_ip = 425; continue _fun4246 }
case 198:
            r3 = _closure1_slot2;
            r5 = r3.bind(r0)(r0);
            if(!r5) { _fun4246_ip = 226; continue _fun4246 }
case 210:
            r3 = r5.has;
            r3 = r3.bind(r5)(r4);
            if(r3) { _fun4246_ip = 413; continue _fun4246 }
case 226:
            r3 = Object.create(r14);
            r6 = r15.Object;
            r13 = r6.defineProperty;
            if(!r13) { _fun4246_ip = 254; continue _fun4246 }
case 243:
            r6 = r15.Object;
            r13 = r6.getOwnPropertyDescriptor;
case 254:
            r11 = r4;
            r7 = 'default';
            r6 = undefined;
            for(r8 in r11)
case 271:
            {
case 280:
                r19 = r8;
                if(r7 === r19) { _fun4246_ip = 271; continue _fun4246 }
case 287:
                r16 = {};
                r17 = r16.hasOwnProperty;
                r16 = r17.call;
                r16 = r16.bind(r17)(r4, r19);
                if(!r16) { _fun4246_ip = 271; continue _fun4246 }
case 308:
                r16 = null;
                if(!r13) { _fun4246_ip = 330; continue _fun4246 }
case 313:
                r18 = r15.Object;
                r17 = r18.getOwnPropertyDescriptor;
                r16 = r17.bind(r18)(r4, r19);
case 330:
                if(!r16) { _fun4246_ip = 349; continue _fun4246 }
case 333:
                r17 = r16.get;
                if(r17) { _fun4246_ip = 362; continue _fun4246 }
case 341:
                r17 = r16.set;
                if(r17) { _fun4246_ip = 362; continue _fun4246 }
case 349:
                r17 = r4[r19];
                r3[r19] = r17;
                r6 = r16;
                _fun4246_ip = 271; continue _fun4246;
case 362:
                r18 = r15.Object;
                r17 = r18.defineProperty;
                r17 = r17.bind(r18)(r3, r19, r16);
                r6 = r16;
                _fun4246_ip = 271; continue _fun4246;
            }
case 385:
            r3['default'] = r4;
            r1 = r3;
            if(!r5) { _fun4246_ip = 434; continue _fun4246 }
case 397:
            r6 = r5.set;
            r6 = r6.bind(r5)(r4, r3);
            r1 = r3;
            _fun4246_ip = 434; continue _fun4246;
case 413:
            r3 = r5.get;
            r1 = r3.bind(r5)(r4);
            _fun4246_ip = 434; continue _fun4246;
case 425:
            r3 = {};
            r3['default'] = r4;
            r1 = r3;
case 434:
            var _closure1_slot1 = r1;
            return r0;
        }
    };
    r6 = 346;
    r5 = [1, 38, 73];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun4253: for(var _fun4253_ip = 0; ; ) switch(_fun4253_ip) {
case 0:
            r5 = a1;
            r2 = a5;
            r6 = a6;
            var _closure1_slot0 = r5;
            var _closure1_slot1 = r6;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r4
                _fun4254: for(var _fun4254_ip = 0; ; ) switch(_fun4254_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun4254_ip = 104; continue _fun4254 }
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
                        _fun4255: for(var _fun4255_ip = 0; ; ) switch(_fun4255_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun4255_ip = 15; continue _fun4255 }
case 9:
                            r0 = _closure2_slot0;
                            _fun4255_ip = 19; continue _fun4255;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot26 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot26 = r0;
            r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r4
                _fun4256: for(var _fun4256_ip = 0; ; ) switch(_fun4256_ip) {
case 0:
                    r3 = a0;
                    r5 = a2;
                    r0 = _closure1_slot8;
                    r1 = r0.default;
                    r2 = undefined;
                    r0 = a1;
                    r8 = r1.bind(r2)(r0);
                    r0 = _closure1_slot7;
                    r1 = r0.default;
                    r0 = _closure1_slot28;
                    r0 = r0.bind(r2)();
                    if(r0) { _fun4256_ip = 61; continue _fun4256 }
case 48:
                    r0 = r8.apply;
                    r0 = r0.bind(r8)(r3, r5);
                    _fun4256_ip = 107; continue _fun4256;
case 61:
                    r6 = global;
                    r7 = r6.Reflect;
                    r6 = r7.construct;
                    if(r5) { _fun4256_ip = 81; continue _fun4256 }
case 77:
                    r5 = new Array(0);
case 81:
                    r4 = _closure1_slot8;
                    r4 = r4.default;
                    r4 = r4.bind(r2)(r3);
                    r4 = r4.constructor;
                    r0 = r6.bind(r7)(r8, r5, r4);
case 107:
                    r0 = r1.bind(r2)(r3, r0);
                    return r0;
                }
            };
            var _closure1_slot27 = r0;
            r0 = function() { // Original name: _isNativeReflectConstruct, environment: r4
                _fun4257: for(var _fun4257_ip = 0; ; ) switch(_fun4257_ip) {
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
                    _fun4257_ip = 74; continue _fun4257;
case 72: // catch_target0
                    CatchBlockStart(arg_register=1);
case 74:
                    r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                        r0 = _closure2_slot0;
                        r0 = !r0;
                        r0 = !r0;
                        return r0;
                    };
                    _closure1_slot28 = r1;
                    r0 = undefined;
                    r0 = r1.bind(r0)();
                    return r0;
                }
            };
            var _closure1_slot28 = r0;
            r0 = function(a0, a1) { // Original name: getScrollingThreshold, environment: r4
                r1 = a0;
                r0 = a1;
                r1 = r1 * r0;
                r0 = 2;
                r0 = r1 / r0;
                return r0;
            };
            var _closure1_slot29 = r0;
            r0 = 0;
            r1 = r6[r0];
            r0 = undefined;
            r7 = r5.bind(r0)(r1);
            r20 = global;
            r9 = r20.Object;
            r8 = r9.defineProperty;
            r3 = {};
            r1 = true;
            r3['value'] = r1;
            r1 = '__esModule';
            r1 = r8.bind(r9)(r2, r1, r3);
            r2['default'] = r0;
            r8 = 1;
            r1 = r6[r8];
            r1 = r5.bind(r0)(r1);
            r1 = r7.bind(r0)(r1);
            var _closure1_slot2 = r1;
            r1 = 2;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r7.bind(r0)(r1);
            var _closure1_slot3 = r1;
            r1 = 3;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r7.bind(r0)(r1);
            var _closure1_slot4 = r1;
            r1 = 4;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r7.bind(r0)(r1);
            var _closure1_slot5 = r1;
            r1 = 5;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r7.bind(r0)(r1);
            var _closure1_slot6 = r1;
            r1 = 6;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r7.bind(r0)(r1);
            var _closure1_slot7 = r1;
            r1 = 7;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r7.bind(r0)(r1);
            var _closure1_slot8 = r1;
            r1 = 8;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r7.bind(r0)(r1);
            var _closure1_slot9 = r1;
            r1 = 9;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r7.bind(r0)(r1);
            var _closure1_slot10 = r1;
            r1 = 10;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r7.bind(r0)(r1);
            var _closure1_slot11 = r1;
            r1 = 11;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r7.bind(r0)(r1);
            var _closure1_slot12 = r1;
            r1 = 12;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r7.bind(r0)(r1);
            var _closure1_slot13 = r1;
            r1 = 13;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r7.bind(r0)(r1);
            var _closure1_slot14 = r1;
            r1 = 14;
            r1 = r6[r1];
            r1 = r5.bind(r0)(r1);
            r1 = r7.bind(r0)(r1);
            r3 = 15;
            r3 = r6[r3];
            r3 = r5.bind(r0)(r3);
            r3 = r7.bind(r0)(r3);
            var _closure1_slot15 = r3;
            r3 = 16;
            r3 = r6[r3];
            r3 = r5.bind(r0)(r3);
            r3 = r7.bind(r0)(r3);
            var _closure1_slot16 = r3;
            r3 = 17;
            r3 = r6[r3];
            r3 = r5.bind(r0)(r3);
            r3 = r7.bind(r0)(r3);
            var _closure1_slot17 = r3;
            r3 = 18;
            r3 = r6[r3];
            r3 = r5.bind(r0)(r3);
            r3 = r7.bind(r0)(r3);
            var _closure1_slot18 = r3;
            r3 = 19;
            r3 = r6[r3];
            r9 = r5.bind(r0)(r3);
            if(!r9) { _fun4253_ip = 509; continue _fun4253 }
case 495:
            r7 = r9.__esModule;
            r3 = r9;
            if(r7) { _fun4253_ip = 776; continue _fun4253 }
case 509:
            r19 = null;
            if(!(r19 !== r9)) { _fun4253_ip = 767; continue _fun4253 }
case 518:
            r10 = typeof r9;
            r7 = 'object';
            if(!(r7 !== r10)) { _fun4253_ip = 540; continue _fun4253 }
case 529:
            r7 = 'function';
            if(!(r7 === r10)) { _fun4253_ip = 767; continue _fun4253 }
case 540:
            r7 = _closure1_slot26;
            r10 = r7.bind(r0)(r0);
            if(!r10) { _fun4253_ip = 568; continue _fun4253 }
case 552:
            r7 = r10.has;
            r7 = r7.bind(r10)(r9);
            if(r7) { _fun4253_ip = 755; continue _fun4253 }
case 568:
            r7 = Object.create(r19);
            r11 = r20.Object;
            r18 = r11.defineProperty;
            if(!r18) { _fun4253_ip = 596; continue _fun4253 }
case 585:
            r11 = r20.Object;
            r18 = r11.getOwnPropertyDescriptor;
case 596:
            r16 = r9;
            r12 = 'default';
            r11 = undefined;
            for(r13 in r16)
case 613:
            {
case 622:
                r24 = r13;
                if(r12 === r24) { _fun4253_ip = 613; continue _fun4253 }
case 629:
                r21 = {};
                r22 = r21.hasOwnProperty;
                r21 = r22.call;
                r21 = r21.bind(r22)(r9, r24);
                if(!r21) { _fun4253_ip = 613; continue _fun4253 }
case 650:
                r21 = null;
                if(!r18) { _fun4253_ip = 672; continue _fun4253 }
case 655:
                r23 = r20.Object;
                r22 = r23.getOwnPropertyDescriptor;
                r21 = r22.bind(r23)(r9, r24);
case 672:
                if(!r21) { _fun4253_ip = 691; continue _fun4253 }
case 675:
                r22 = r21.get;
                if(r22) { _fun4253_ip = 704; continue _fun4253 }
case 683:
                r22 = r21.set;
                if(r22) { _fun4253_ip = 704; continue _fun4253 }
case 691:
                r22 = r9[r24];
                r7[r24] = r22;
                r11 = r21;
                _fun4253_ip = 613; continue _fun4253;
case 704:
                r23 = r20.Object;
                r22 = r23.defineProperty;
                r22 = r22.bind(r23)(r7, r24, r21);
                r11 = r21;
                _fun4253_ip = 613; continue _fun4253;
            }
case 727:
            r7['default'] = r9;
            r3 = r7;
            if(!r10) { _fun4253_ip = 776; continue _fun4253 }
case 739:
            r11 = r10.set;
            r11 = r11.bind(r10)(r9, r7);
            r3 = r7;
            _fun4253_ip = 776; continue _fun4253;
case 755:
            r7 = r10.get;
            r3 = r7.bind(r10)(r9);
            _fun4253_ip = 776; continue _fun4253;
case 767:
            r7 = {};
            r7['default'] = r9;
            r3 = r7;
case 776:
            var _closure1_slot19 = r3;
            r3 = 20;
            r3 = r6[r3];
            r7 = r5.bind(r0)(r3);
            var _closure1_slot20 = r7;
            r3 = 21;
            r3 = r6[r3];
            r3 = r5.bind(r0)(r3);
            var _closure1_slot21 = r3;
            r3 = ['onContentSizeChange'];
            var _closure1_slot22 = r3;
            r3 = false;
            var _closure1_slot23 = r3;
            r3 = '';
            var _closure1_slot24 = r3;
            r3 = r1.default;
            r1 = function(a0) { // Environment: r4
                r4 = function(a0) { // Original name: VirtualizedList, environment: r6
                    _fun4262: for(var _fun4262_ip = 0; ; ) switch(_fun4262_ip) {
case 0:
                        r10 = a0;
                        r5 = this;
                        r0 = _closure1_slot5;
                        r0 = r0.default;
                        r4 = _closure2_slot0;
                        r1 = undefined;
                        r0 = r0.bind(r1)(r5, r4);
                        r3 = _closure1_slot27;
                        r0 = new Array(1);
                        r0[0] = r10;
                        r0 = r3.bind(r1)(r5, r4, r0);
                        var _closure3_slot0 = r0;
                        r3 = function() { // Environment: r2
                            r0 = _closure3_slot0;
                            r0 = r0._scrollMetrics;
                            return r0;
                        };
                        r0['_getScrollMetrics'] = r3;
                        r3 = function() { // Environment: r2
                            _fun4264: for(var _fun4264_ip = 0; ; ) switch(_fun4264_ip) {
case 0:
                                r2 = _closure3_slot0;
                                r1 = r2._isNestedWithSameOrientation;
                                r1 = r1.bind(r2)();
                                r0 = _closure3_slot0;
                                if(r1) { _fun4264_ip = 26; continue _fun4264 }
case 24:
                                return r0;
case 26:
                                r1 = r0.context;
                                r0 = r1.getOutermostParentListRef;
                                r0 = r0.bind(r1)();
                                return r0;
                            }
                        };
                        r0['_getOutermostParentListRef'] = r3;
                        r3 = function(a0) { // Environment: r2
                            _fun4265: for(var _fun4265_ip = 0; ; ) switch(_fun4265_ip) {
case 0:
                                r0 = a0;
                                r1 = _closure3_slot0;
                                r5 = r1._nestedChildLists;
                                r4 = r5.add;
                                r3 = r0.ref;
                                r2 = r0.cellKey;
                                r2 = r4.bind(r5)(r3, r2);
                                r1 = r1._hasInteracted;
                                if(!r1) { _fun4265_ip = 61; continue _fun4265 }
case 46:
                                r1 = r0.ref;
                                r0 = r1.recordInteraction;
                                r0 = r0.bind(r1)();
case 61:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r0['_registerAsNestedChild'] = r3;
                        r3 = function(a0) { // Environment: r2
                            r0 = _closure3_slot0;
                            r2 = r0._nestedChildLists;
                            r1 = r2.remove;
                            r0 = a0;
                            r0 = r0.ref;
                            r0 = r1.bind(r2)(r0);
                            r0 = undefined;
                            return r0;
                        };
                        r0['_unregisterAsNestedChild'] = r3;
                        r3 = function(a0, a1) { // Environment: r2
                            r2 = a0;
                            r1 = a1;
                            var _closure4_slot0 = r1;
                            r1 = r2.forEach;
                            r0 = function(a0) { // Environment: r0
                                _fun4268: for(var _fun4268_ip = 0; ; ) switch(_fun4268_ip) {
case 0:
                                    r1 = a0;
                                    r0 = null;
                                    r2 = r1 != r0;
                                    if(!r2) { _fun4268_ip = 29; continue _fun4268 }
case 12:
                                    r0 = _closure3_slot0;
                                    r0 = r0._cellRefs;
                                    r2 = r0[r1];
case 29:
                                    if(!r2) { _fun4268_ip = 50; continue _fun4268 }
case 32:
                                    r1 = r2.updateSeparatorProps;
                                    r0 = _closure4_slot0;
                                    r0 = r1.bind(r2)(r0);
case 50:
                                    r0 = undefined;
                                    return r0;
                                }
                            };
                            r0 = r1.bind(r2)(r0);
                            r0 = undefined;
                            return r0;
                        };
                        r0['_onUpdateSeparators'] = r3;
                        r3 = function(a0) { // Environment: r2
                            _fun4269: for(var _fun4269_ip = 0; ; ) switch(_fun4269_ip) {
case 0:
                                r0 = 'width';
                                r1 = a0;
                                if(!r1) { _fun4269_ip = 14; continue _fun4269 }
case 10:
                                r0 = 'height';
case 14:
                                return r0;
                            }
                        };
                        r0['_getSpacerKey'] = r3;
                        r3 = {};
                        r0['_cellRefs'] = r3;
                        r3 = _closure1_slot14;
                        r3 = r3.default;
                        r4 = r3.prototype;
                        r4 = Object.create(r4, {constructor: {value: r3}});
                        r19 = r4;
                        r3 = new r19[r3](r18);
                        r3 = r3 instanceof Object ? r3 : r4;
                        r0['_listMetrics'] = r3;
                        r5 = 0;
                        r0['_footerLength'] = r5;
                        r3 = false;
                        r0['_hasTriggeredInitialScrollToIndex'] = r3;
                        r0['_hasInteracted'] = r3;
                        r0['_hasMore'] = r3;
                        r4 = {};
                        r0['_hasWarned'] = r4;
                        r0['_headerLength'] = r5;
                        r0['_hiPriInProgress'] = r3;
                        r4 = global;
                        r4 = r4.Map;
                        r7 = r4.prototype;
                        r7 = Object.create(r7, {constructor: {value: r4}});
                        r19 = r7;
                        r4 = new r19[r4](r18);
                        r4 = r4 instanceof Object ? r4 : r7;
                        r0['_indicesToKeys'] = r4;
                        r4 = null;
                        r0['_lastFocusedCellKey'] = r4;
                        r7 = _closure1_slot12;
                        r7 = r7.default;
                        r8 = r7.prototype;
                        r8 = Object.create(r8, {constructor: {value: r7}});
                        r19 = r8;
                        r7 = new r19[r7](r18);
                        r7 = r7 instanceof Object ? r7 : r8;
                        r0['_nestedChildLists'] = r7;
                        r0['_offsetFromParentVirtualizedList'] = r5;
                        r0['_pendingViewabilityUpdate'] = r3;
                        r0['_prevParentOffset'] = r5;
                        r3 = 1;
                        r7 = {'dOffset': 0, 'dt': 10, 'offset': 0, 'timestamp': 0, 'velocity': 0, 'visibleLength': 0, 'zoomScale': 1};
                        r0['_scrollMetrics'] = r7;
                        r0['_scrollRef'] = r4;
                        r0['_sentStartForContentLength'] = r5;
                        r0['_sentEndForContentLength'] = r5;
                        r0['_updateCellsToRenderTimeoutID'] = r4;
                        r7 = new Array(0);
                        r0['_viewabilityTuples'] = r7;
                        r7 = function(a0) { // Environment: r2
                            r1 = _closure3_slot0;
                            r0 = a0;
                            r1['_scrollRef'] = r0;
                            r0 = undefined;
                            return r0;
                        };
                        r0['_captureScrollRef'] = r7;
                        r7 = function(a0) { // Environment: r2
                            _fun4271: for(var _fun4271_ip = 0; ; ) switch(_fun4271_ip) {
case 0:
                                r4 = a0;
                                r12 = r4.onRefresh;
                                r1 = _closure3_slot0;
                                r0 = r1._isNestedWithSameOrientation;
                                r1 = r0.bind(r1)();
                                if(r1) { _fun4271_ip = 305; continue _fun4271 }
case 35:
                                if(r12) { _fun4271_ip = 88; continue _fun4271 }
case 38:
                                r1 = _closure1_slot21;
                                r5 = r1.jsx;
                                r1 = _closure1_slot20;
                                r3 = r1.ScrollView;
                                r1 = global;
                                r6 = r1.Object;
                                r2 = r6.assign;
                                r1 = {};
                                r2 = r2.bind(r6)(r1, r4);
                                r1 = undefined;
                                r1 = r5.bind(r1)(r3, r2);
                                return r1;
case 88:
                                r1 = _closure1_slot17;
                                r6 = r1.default;
                                r2 = r4.refreshing;
                                r1 = global;
                                r7 = r1.JSON;
                                r5 = r7.stringify;
                                r8 = r4.refreshing;
                                r9 = null;
                                r10 = r8 != r9;
                                r3 = 'undefined';
                                if(!r10) { _fun4271_ip = 139; continue _fun4271 }
case 136:
                                r3 = r8;
case 139:
                                r5 = r5.bind(r7)(r3);
                                r3 = '`refreshing` prop must be set as a boolean in order to use `onRefresh`, but got `';
                                r7 = r3 + r5;
                                r5 = undefined;
                                r3 = typeof r2;
                                r2 = 'boolean';
                                r3 = r3 === r2;
                                r2 = '`';
                                r2 = r7 + r2;
                                r2 = r6.bind(r5)(r3, r2);
                                r2 = _closure1_slot21;
                                r3 = r2.jsx;
                                r2 = _closure1_slot20;
                                r2 = r2.ScrollView;
                                r8 = r1.Object;
                                r7 = r8.assign;
                                r6 = {};
                                r1 = r4.refreshControl;
                                if(!(r1 != r9)) { _fun4271_ip = 229; continue _fun4271 }
case 221:
                                r1 = r4.refreshControl;
                                _fun4271_ip = 283; continue _fun4271;
case 229:
                                r9 = _closure1_slot21;
                                r11 = r9.jsx;
                                r9 = _closure1_slot20;
                                r10 = r9.RefreshControl;
                                r9 = {};
                                r13 = r4.refreshing;
                                r9['refreshing'] = r13;
                                r9['onRefresh'] = r12;
                                r12 = r4.progressViewOffset;
                                r9['progressViewOffset'] = r12;
                                r1 = r11.bind(r5)(r10, r9);
case 283:
                                r6['refreshControl'] = r1;
                                r1 = {};
                                r1 = r7.bind(r8)(r1, r4, r6);
                                r1 = r3.bind(r5)(r2, r1);
                                return r1;
case 305:
                                r1 = r4.onContentSizeChange;
                                r1 = _closure1_slot4;
                                r2 = r1.default;
                                r1 = _closure1_slot22;
                                r3 = undefined;
                                r6 = r2.bind(r3)(r4, r1);
                                r1 = _closure1_slot21;
                                r2 = r1.jsx;
                                r0 = _closure1_slot20;
                                r1 = r0.View;
                                r0 = global;
                                r5 = r0.Object;
                                r4 = r5.assign;
                                r0 = {};
                                r0 = r4.bind(r5)(r0, r6);
                                r0 = r2.bind(r3)(r1, r0);
                                return r0;
                            }
                        };
                        r0['_defaultRenderScrollComponent'] = r7;
                        r7 = function(a0, a1, a2) { // Environment: r2
                            _fun4272: for(var _fun4272_ip = 0; ; ) switch(_fun4272_ip) {
case 0:
                                r1 = a1;
                                r6 = _closure3_slot0;
                                r4 = r6._listMetrics;
                                r3 = r4.notifyCellLayout;
                                r2 = {};
                                r5 = a2;
                                r2['cellIndex'] = r5;
                                r2['cellKey'] = r1;
                                r5 = a0;
                                r5 = r5.nativeEvent;
                                r5 = r5.layout;
                                r2['layout'] = r5;
                                r5 = r6._orientation;
                                r5 = r5.bind(r6)();
                                r2['orientation'] = r5;
                                r2 = r3.bind(r4)(r2);
                                if(!r2) { _fun4272_ip = 91; continue _fun4272 }
case 77:
                                r3 = _closure3_slot0;
                                r2 = r3._scheduleCellsToRenderUpdate;
                                r2 = r2.bind(r3)();
case 91:
                                r3 = _closure3_slot0;
                                r0 = r3._triggerRemeasureForChildListsInCell;
                                r0 = r0.bind(r3)(r1);
                                r0 = r3._computeBlankness;
                                r0 = r0.bind(r3)();
                                r2 = r3._updateViewableItems;
                                r1 = r3.props;
                                r0 = r3.state;
                                r0 = r0.cellsAroundViewport;
                                r0 = r2.bind(r3)(r1, r0);
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r0['_onCellLayout'] = r7;
                        r7 = function(a0) { // Environment: r2
                            r1 = _closure3_slot0;
                            r0 = a0;
                            r1['_lastFocusedCellKey'] = r0;
                            r0 = r1._updateCellsToRender;
                            r0 = r0.bind(r1)();
                            r0 = undefined;
                            return r0;
                        };
                        r0['_onCellFocusCapture'] = r7;
                        r7 = function(a0) { // Environment: r2
                            r2 = a0;
                            r0 = _closure3_slot0;
                            r1 = r0._cellRefs;
                            r1 = delete r1[r2];
                            r1 = r0._listMetrics;
                            r0 = r1.notifyCellUnmounted;
                            r0 = r0.bind(r1)(r2);
                            r0 = undefined;
                            return r0;
                        };
                        r0['_onCellUnmount'] = r7;
                        r7 = function(a0) { // Environment: r2
                            _fun4275: for(var _fun4275_ip = 0; ; ) switch(_fun4275_ip) {
case 0:
                                r3 = a0;
                                r2 = _closure3_slot0;
                                r1 = r2._isNestedWithSameOrientation;
                                r1 = r1.bind(r2)();
                                r2 = _closure3_slot0;
                                if(r1) { _fun4275_ip = 62; continue _fun4275 }
case 27:
                                r4 = r2._scrollMetrics;
                                r5 = r2._selectLength;
                                r1 = r3.nativeEvent;
                                r1 = r1.layout;
                                r1 = r5.bind(r2)(r1);
                                r4['visibleLength'] = r1;
                                _fun4275_ip = 72; continue _fun4275;
case 62:
                                r1 = r2.measureLayoutRelativeToContainingList;
                                r1 = r1.bind(r2)();
case 72:
                                r1 = _closure3_slot0;
                                r1 = r1.props;
                                r1 = r1.onLayout;
                                if(!r1) { _fun4275_ip = 108; continue _fun4275 }
case 89:
                                r1 = _closure3_slot0;
                                r2 = r1.props;
                                r1 = r2.onLayout;
                                r1 = r1.bind(r2)(r3);
case 108:
                                r1 = _closure3_slot0;
                                r0 = r1._scheduleCellsToRenderUpdate;
                                r0 = r0.bind(r1)();
                                r0 = r1._maybeCallOnEdgeReached;
                                r0 = r0.bind(r1)();
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r0['_onLayout'] = r7;
                        r7 = function(a0) { // Environment: r2
                            _fun4276: for(var _fun4276_ip = 0; ; ) switch(_fun4276_ip) {
case 0:
                                r1 = _closure3_slot0;
                                r1 = r1.props;
                                r1 = r1.onLayout;
                                if(!r1) { _fun4276_ip = 42; continue _fun4276 }
case 20:
                                r0 = _closure3_slot0;
                                r2 = r0.props;
                                r1 = r2.onLayout;
                                r0 = a0;
                                r0 = r1.bind(r2)(r0);
case 42:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r0['_onLayoutEmpty'] = r7;
                        r7 = function(a0) { // Environment: r2
                            r1 = _closure3_slot0;
                            r2 = r1._triggerRemeasureForChildListsInCell;
                            r0 = r1._getFooterCellKey;
                            r0 = r0.bind(r1)();
                            r0 = r2.bind(r1)(r0);
                            r2 = r1._selectLength;
                            r0 = a0;
                            r0 = r0.nativeEvent;
                            r0 = r0.layout;
                            r0 = r2.bind(r1)(r0);
                            r1['_footerLength'] = r0;
                            r0 = undefined;
                            return r0;
                        };
                        r0['_onLayoutFooter'] = r7;
                        r7 = function(a0) { // Environment: r2
                            r1 = _closure3_slot0;
                            r2 = r1._selectLength;
                            r0 = a0;
                            r0 = r0.nativeEvent;
                            r0 = r0.layout;
                            r0 = r2.bind(r1)(r0);
                            r1['_headerLength'] = r0;
                            r0 = undefined;
                            return r0;
                        };
                        r0['_onLayoutHeader'] = r7;
                        r7 = function(a0, a1) { // Environment: r2
                            _fun4279: for(var _fun4279_ip = 0; ; ) switch(_fun4279_ip) {
case 0:
                                r4 = a0;
                                r3 = a1;
                                r1 = _closure3_slot0;
                                r6 = r1._listMetrics;
                                r5 = r6.notifyListContentLayout;
                                r2 = {};
                                r7 = {};
                                r7['width'] = r4;
                                r7['height'] = r3;
                                r2['layout'] = r7;
                                r7 = r1._orientation;
                                r7 = r7.bind(r1)();
                                r2['orientation'] = r7;
                                r2 = r5.bind(r6)(r2);
                                r2 = r1._maybeScrollToInitialScrollIndex;
                                r2 = r2.bind(r1)(r4, r3);
                                r1 = r1.props;
                                r1 = r1.onContentSizeChange;
                                if(!r1) { _fun4279_ip = 108; continue _fun4279 }
case 87:
                                r1 = _closure3_slot0;
                                r2 = r1.props;
                                r1 = r2.onContentSizeChange;
                                r1 = r1.bind(r2)(r4, r3);
case 108:
                                r1 = _closure3_slot0;
                                r0 = r1._scheduleCellsToRenderUpdate;
                                r0 = r0.bind(r1)();
                                r0 = r1._maybeCallOnEdgeReached;
                                r0 = r0.bind(r1)();
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r0['_onContentSizeChange'] = r7;
                        r7 = function(a0) { // Environment: r2
                            r1 = a0;
                            r3 = r1.offset;
                            r0 = _closure3_slot0;
                            r2 = r0._offsetFromParentVirtualizedList;
                            r2 = r3 - r2;
                            r4 = r1.visibleLength;
                            r1 = r0._scrollMetrics;
                            r1 = r1.offset;
                            r1 = r2 - r1;
                            r3 = r0._listMetrics;
                            r0 = r3.getContentLength;
                            r3 = r0.bind(r3)();
                            r0 = {};
                            r0['visibleLength'] = r4;
                            r0['contentLength'] = r3;
                            r0['offset'] = r2;
                            r0['dOffset'] = r1;
                            return r0;
                        };
                        r0['_convertParentScrollMetrics'] = r7;
                        r7 = function(a0) { // Environment: r2
                            _fun4281: for(var _fun4281_ip = 0; ; ) switch(_fun4281_ip) {
case 0:
                                r4 = a0;
                                var _closure4_slot0 = r4;
                                r1 = _closure3_slot0;
                                r6 = r1._nestedChildLists;
                                r5 = r6.forEach;
                                r2 = function(a0) { // Environment: r3
                                    r2 = a0;
                                    r1 = r2._onScroll;
                                    r0 = _closure4_slot0;
                                    r0 = r1.bind(r2)(r0);
                                    r0 = undefined;
                                    return r0;
                                };
                                r2 = r5.bind(r6)(r2);
                                r1 = r1.props;
                                r1 = r1.onScroll;
                                if(!r1) { _fun4281_ip = 71; continue _fun4281 }
case 51:
                                r1 = _closure3_slot0;
                                r2 = r1.props;
                                r1 = r2.onScroll;
                                r1 = r1.bind(r2)(r4);
case 71:
                                r8 = r4.timeStamp;
                                r5 = _closure3_slot0;
                                r2 = r5._selectLength;
                                r1 = r4.nativeEvent;
                                r1 = r1.layoutMeasurement;
                                r12 = r2.bind(r5)(r1);
                                r2 = r5._selectLength;
                                r1 = r4.nativeEvent;
                                r1 = r1.contentSize;
                                r2 = r2.bind(r5)(r1);
                                r1 = r5._offsetFromScrollEvent;
                                r11 = r1.bind(r5)(r4);
                                r1 = r5._scrollMetrics;
                                r1 = r1.offset;
                                r10 = r11 - r1;
                                r1 = r5._isNestedWithSameOrientation;
                                r1 = r1.bind(r5)();
                                r7 = r12;
                                r5 = r2;
                                r9 = r11;
                                if(!r1) { _fun4281_ip = 247; continue _fun4281 }
case 172:
                                r1 = _closure3_slot0;
                                r2 = r1._listMetrics;
                                r1 = r2.getContentLength;
                                r2 = r1.bind(r2)();
                                r1 = 0;
                                if(!(r2 !== r1)) { _fun4281_ip = 663; continue _fun4281 }
case 200:
                                r6 = _closure3_slot0;
                                r2 = r6._convertParentScrollMetrics;
                                r1 = {};
                                r1['visibleLength'] = r12;
                                r1['offset'] = r11;
                                r1 = r2.bind(r6)(r1);
                                r7 = r1.visibleLength;
                                r5 = r1.contentLength;
                                r9 = r1.offset;
                                r10 = r1.dOffset;
case 247:
                                r1 = _closure3_slot0;
                                r1 = r1._scrollMetrics;
                                r1 = r1.timestamp;
                                r6 = 1;
                                r11 = r6;
                                if(!r1) { _fun4281_ip = 309; continue _fun4281 }
case 271:
                                r1 = global;
                                r12 = r1.Math;
                                r2 = r12.max;
                                r1 = _closure3_slot0;
                                r1 = r1._scrollMetrics;
                                r1 = r1.timestamp;
                                r1 = r8 - r1;
                                r11 = r2.bind(r12)(r6, r1);
case 309:
                                r2 = r10 / r11;
                                r12 = 500;
                                if(!(r11 > r12)) { _fun4281_ip = 442; continue _fun4281 }
case 323:
                                r1 = _closure3_slot0;
                                r1 = r1._scrollMetrics;
                                r1 = r1.dt;
                                if(!(r1 > r12)) { _fun4281_ip = 442; continue _fun4281 }
case 342:
                                r1 = 5;
                                r1 = r1 * r7;
                                if(!(r5 > r1)) { _fun4281_ip = 442; continue _fun4281 }
case 353:
                                r1 = _closure3_slot0;
                                r1 = r1._hasWarned;
                                r1 = r1.perf;
                                if(r1) { _fun4281_ip = 442; continue _fun4281 }
case 372:
                                r1 = _closure1_slot11;
                                r14 = r1.default;
                                r13 = {};
                                r13['dt'] = r11;
                                r1 = _closure3_slot0;
                                r12 = r1._scrollMetrics;
                                r12 = r12.dt;
                                r13['prevDt'] = r12;
                                r13['contentLength'] = r5;
                                r12 = undefined;
                                r5 = 'VirtualizedList: You have a large list that is slow to update - make sure your renderItem function renders components that follow React performance best practices like PureComponent, shouldComponentUpdate, etc.';
                                r5 = r14.bind(r12)(r5, r13);
                                r5 = r1._hasWarned;
                                r1 = true;
                                r5['perf'] = r1;
case 442:
                                r1 = r4.nativeEvent;
                                r5 = r1.zoomScale;
                                r1 = 0;
                                r5 = r5 < r1;
                                if(r5) { _fun4281_ip = 473; continue _fun4281 }
case 462:
                                r4 = r4.nativeEvent;
                                r6 = r4.zoomScale;
case 473:
                                r4 = _closure3_slot0;
                                r5 = {};
                                r5['dt'] = r11;
                                r5['dOffset'] = r10;
                                r5['offset'] = r9;
                                r5['timestamp'] = r8;
                                r5['velocity'] = r2;
                                r5['visibleLength'] = r7;
                                r5['zoomScale'] = r6;
                                r4['_scrollMetrics'] = r5;
                                r4 = r4.state;
                                r4 = r4.pendingScrollUpdateCount;
                                if(!(r4 > r1)) { _fun4281_ip = 553; continue _fun4281 }
case 533:
                                r5 = _closure3_slot0;
                                r4 = r5.setState;
                                r3 = function(a0) { // Environment: r3
                                    r0 = {};
                                    r1 = a0;
                                    r2 = r1.pendingScrollUpdateCount;
                                    r1 = 1;
                                    r1 = r2 - r1;
                                    r0['pendingScrollUpdateCount'] = r1;
                                    return r0;
                                };
                                r3 = r4.bind(r5)(r3);
case 553:
                                r3 = _closure3_slot0;
                                r6 = r3._updateViewableItems;
                                r5 = r3.props;
                                r4 = r3.state;
                                r4 = r4.cellsAroundViewport;
                                r4 = r6.bind(r3)(r5, r4);
                                r3 = r3.props;
                                if(r3) { _fun4281_ip = 597; continue _fun4281 }
case 593:
                                r3 = undefined;
                                return r3;
case 597:
                                r4 = _closure3_slot0;
                                r3 = r4._maybeCallOnEdgeReached;
                                r3 = r3.bind(r4)();
                                if(!(r2 !== r1)) { _fun4281_ip = 635; continue _fun4281 }
case 615:
                                r1 = _closure3_slot0;
                                r2 = r1._fillRateHelper;
                                r1 = r2.activate;
                                r1 = r1.bind(r2)();
case 635:
                                r1 = _closure3_slot0;
                                r0 = r1._computeBlankness;
                                r0 = r0.bind(r1)();
                                r0 = r1._scheduleCellsToRenderUpdate;
                                r0 = r0.bind(r1)();
                                r0 = undefined;
                                return r0;
case 663:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r0['_onScroll'] = r7;
                        r7 = function(a0) { // Environment: r2
                            _fun4284: for(var _fun4284_ip = 0; ; ) switch(_fun4284_ip) {
case 0:
                                r2 = a0;
                                var _closure4_slot0 = r2;
                                r1 = _closure3_slot0;
                                r6 = r1._nestedChildLists;
                                r5 = r6.forEach;
                                r4 = function(a0) { // Environment: r3
                                    r2 = a0;
                                    r1 = r2._onScrollBeginDrag;
                                    r0 = _closure4_slot0;
                                    r0 = r1.bind(r2)(r0);
                                    r0 = undefined;
                                    return r0;
                                };
                                r4 = r5.bind(r6)(r4);
                                r5 = r1._viewabilityTuples;
                                r4 = r5.forEach;
                                r3 = function(a0) { // Environment: r3
                                    r0 = a0;
                                    r1 = r0.viewabilityHelper;
                                    r0 = r1.recordInteraction;
                                    r0 = r0.bind(r1)();
                                    r0 = undefined;
                                    return r0;
                                };
                                r3 = r4.bind(r5)(r3);
                                r3 = true;
                                r1['_hasInteracted'] = r3;
                                r1 = r1.props;
                                r1 = r1.onScrollBeginDrag;
                                if(!r1) { _fun4284_ip = 100; continue _fun4284 }
case 80:
                                r0 = _closure3_slot0;
                                r1 = r0.props;
                                r0 = r1.onScrollBeginDrag;
                                r0 = r0.bind(r1)(r2);
case 100:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r0['_onScrollBeginDrag'] = r7;
                        r7 = function(a0) { // Environment: r2
                            _fun4287: for(var _fun4287_ip = 0; ; ) switch(_fun4287_ip) {
case 0:
                                r2 = a0;
                                var _closure4_slot0 = r2;
                                r3 = _closure3_slot0;
                                r4 = r3._nestedChildLists;
                                r3 = r4.forEach;
                                r1 = function(a0) { // Environment: r1
                                    r2 = a0;
                                    r1 = r2._onScrollEndDrag;
                                    r0 = _closure4_slot0;
                                    r0 = r1.bind(r2)(r0);
                                    r0 = undefined;
                                    return r0;
                                };
                                r1 = r3.bind(r4)(r1);
                                r1 = r2.nativeEvent;
                                r5 = r1.velocity;
                                if(!r5) { _fun4287_ip = 77; continue _fun4287 }
case 51:
                                r4 = _closure3_slot0;
                                r3 = r4._scrollMetrics;
                                r1 = r4._selectOffset;
                                r1 = r1.bind(r4)(r5);
                                r3['velocity'] = r1;
case 77:
                                r1 = _closure3_slot0;
                                r3 = r1._computeBlankness;
                                r3 = r3.bind(r1)();
                                r1 = r1.props;
                                r1 = r1.onScrollEndDrag;
                                if(!r1) { _fun4287_ip = 125; continue _fun4287 }
case 105:
                                r0 = _closure3_slot0;
                                r1 = r0.props;
                                r0 = r1.onScrollEndDrag;
                                r0 = r0.bind(r1)(r2);
case 125:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r0['_onScrollEndDrag'] = r7;
                        r7 = function(a0) { // Environment: r2
                            _fun4289: for(var _fun4289_ip = 0; ; ) switch(_fun4289_ip) {
case 0:
                                r2 = a0;
                                var _closure4_slot0 = r2;
                                r1 = _closure3_slot0;
                                r5 = r1._nestedChildLists;
                                r4 = r5.forEach;
                                r3 = function(a0) { // Environment: r3
                                    r2 = a0;
                                    r1 = r2._onMomentumScrollBegin;
                                    r0 = _closure4_slot0;
                                    r0 = r1.bind(r2)(r0);
                                    r0 = undefined;
                                    return r0;
                                };
                                r3 = r4.bind(r5)(r3);
                                r1 = r1.props;
                                r1 = r1.onMomentumScrollBegin;
                                if(!r1) { _fun4289_ip = 71; continue _fun4289 }
case 51:
                                r0 = _closure3_slot0;
                                r1 = r0.props;
                                r0 = r1.onMomentumScrollBegin;
                                r0 = r0.bind(r1)(r2);
case 71:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r0['_onMomentumScrollBegin'] = r7;
                        r7 = function(a0) { // Environment: r2
                            _fun4291: for(var _fun4291_ip = 0; ; ) switch(_fun4291_ip) {
case 0:
                                r2 = a0;
                                var _closure4_slot0 = r2;
                                r1 = _closure3_slot0;
                                r5 = r1._nestedChildLists;
                                r4 = r5.forEach;
                                r3 = function(a0) { // Environment: r3
                                    r2 = a0;
                                    r1 = r2._onMomentumScrollEnd;
                                    r0 = _closure4_slot0;
                                    r0 = r1.bind(r2)(r0);
                                    r0 = undefined;
                                    return r0;
                                };
                                r3 = r4.bind(r5)(r3);
                                r4 = r1._scrollMetrics;
                                r3 = 0;
                                r4['velocity'] = r3;
                                r3 = r1._computeBlankness;
                                r3 = r3.bind(r1)();
                                r1 = r1.props;
                                r1 = r1.onMomentumScrollEnd;
                                if(!r1) { _fun4291_ip = 94; continue _fun4291 }
case 74:
                                r0 = _closure3_slot0;
                                r1 = r0.props;
                                r0 = r1.onMomentumScrollEnd;
                                r0 = r0.bind(r1)(r2);
case 94:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r0['_onMomentumScrollEnd'] = r7;
                        r7 = function() { // Environment: r2
                            r2 = _closure3_slot0;
                            r3 = r2._updateViewableItems;
                            r1 = r2.props;
                            r0 = r2.state;
                            r0 = r0.cellsAroundViewport;
                            r0 = r3.bind(r2)(r1, r0);
                            r1 = r2.setState;
                            r0 = function(a0, a1) { // Environment: r0
                                _fun4294: for(var _fun4294_ip = 0; ; ) switch(_fun4294_ip) {
case 0:
                                    r0 = a0;
                                    r5 = a1;
                                    r6 = _closure3_slot0;
                                    r3 = r6._adjustCellsAroundViewport;
                                    r2 = r0.cellsAroundViewport;
                                    r1 = r0.pendingScrollUpdateCount;
                                    r2 = r3.bind(r6)(r5, r2, r1);
                                    r4 = _closure2_slot0;
                                    r3 = r4._createRenderMask;
                                    r1 = r6._getNonViewportRenderRegions;
                                    r1 = r1.bind(r6)(r5);
                                    r1 = r3.bind(r4)(r5, r2, r1);
                                    r4 = r2.first;
                                    r3 = r0.cellsAroundViewport;
                                    r3 = r3.first;
                                    if(!(r4 === r3)) { _fun4294_ip = 129; continue _fun4294 }
case 89:
                                    r4 = r2.last;
                                    r3 = r0.cellsAroundViewport;
                                    r3 = r3.last;
                                    if(!(r4 === r3)) { _fun4294_ip = 129; continue _fun4294 }
case 109:
                                    r3 = r1.equals;
                                    r0 = r0.renderMask;
                                    r0 = r3.bind(r1)(r0);
                                    if(r0) { _fun4294_ip = 143; continue _fun4294 }
case 129:
                                    r0 = {};
                                    r0['cellsAroundViewport'] = r2;
                                    r0['renderMask'] = r1;
                                    return r0;
case 143:
                                    r0 = null;
                                    return r0;
                                }
                            };
                            r0 = r1.bind(r2)(r0);
                            r0 = undefined;
                            return r0;
                        };
                        r0['_updateCellsToRender'] = r7;
                        r7 = function(a0, a1, a2) { // Environment: r2
                            r5 = a0;
                            r4 = a2;
                            r2 = r4.data;
                            r1 = r4.getItem;
                            r0 = undefined;
                            r3 = r1.bind(r0)(r2, r5);
                            r0 = {};
                            r0['index'] = r5;
                            r0['item'] = r3;
                            r2 = _closure2_slot0;
                            r1 = r2._keyExtractor;
                            r1 = r1.bind(r2)(r3, r5, r4);
                            r0['key'] = r1;
                            r1 = a1;
                            r0['isViewable'] = r1;
                            return r0;
                        };
                        r0['_createViewToken'] = r7;
                        r7 = function(a0) { // Environment: r2
                            _fun4296: for(var _fun4296_ip = 0; ; ) switch(_fun4296_ip) {
case 0:
                                r8 = a0;
                                r0 = _closure3_slot0;
                                r0 = r0._lastFocusedCellKey;
                                if(!r0) { _fun4296_ip = 42; continue _fun4296 }
case 19:
                                r0 = _closure3_slot0;
                                r1 = r0._cellRefs;
                                r0 = r0._lastFocusedCellKey;
                                r0 = r1[r0];
                                if(r0) { _fun4296_ip = 48; continue _fun4296 }
case 42:
                                r0 = new Array(0);
                                return r0;
case 48:
                                r0 = _closure3_slot0;
                                r1 = r0._cellRefs;
                                r0 = r0._lastFocusedCellKey;
                                r0 = r1[r0];
                                r0 = r0.props;
                                r9 = r0.index;
                                r1 = r8.getItemCount;
                                r0 = r8.data;
                                r6 = r1.bind(r8)(r0);
                                if(!(!(r9 >= r6))) { _fun4296_ip = 387; continue _fun4296 }
case 100:
                                r1 = _closure2_slot0;
                                r0 = r1._getItemKey;
                                r1 = r0.bind(r1)(r8, r9);
                                r0 = _closure3_slot0;
                                r0 = r0._lastFocusedCellKey;
                                if(!(r1 === r0)) { _fun4296_ip = 387; continue _fun4296 }
case 136:
                                r0 = 1;
                                r10 = r9 - r0;
                                r5 = 0;
                                r2 = r9;
                                if(!(r10 >= r5)) { _fun4296_ip = 254; continue _fun4296 }
case 152:
                                r1 = _closure3_slot0;
                                r1 = r1._scrollMetrics;
                                r1 = r1.visibleLength;
                                r1 = r5 < r1;
                                r4 = r9;
                                r3 = 0;
                                r2 = r4;
                                if(!r1) { _fun4296_ip = 254; continue _fun4296 }
case 181:
                                r12 = r4 - 1;
                                r1 = _closure3_slot0;
                                r11 = r1._listMetrics;
                                r1 = r11.getCellMetricsApprox;
                                r1 = r1.bind(r11)(r10, r8);
                                r1 = r1.length;
                                r11 = r3 + r1;
                                r13 = r10 - 1;
                                r2 = r12;
                                if(!(r13 >= r5)) { _fun4296_ip = 254; continue _fun4296 }
case 224:
                                r1 = _closure3_slot0;
                                r1 = r1._scrollMetrics;
                                r1 = r1.visibleLength;
                                r4 = r12;
                                r10 = r13;
                                r2 = r4;
                                r3 = r11;
                                if(r3 < r1) { _fun4296_ip = 181; continue _fun4296 }
case 254:
                                r4 = r9 + r0;
                                r0 = r9;
                                if(!(r4 < r6)) { _fun4296_ip = 367; continue _fun4296 }
case 265:
                                r1 = _closure3_slot0;
                                r1 = r1._scrollMetrics;
                                r1 = r1.visibleLength;
                                r1 = r5 < r1;
                                r3 = r9;
                                r5 = 0;
                                r0 = r3;
                                if(!r1) { _fun4296_ip = 367; continue _fun4296 }
case 294:
                                r10 = r3 + 1;
                                r1 = _closure3_slot0;
                                r9 = r1._listMetrics;
                                r1 = r9.getCellMetricsApprox;
                                r1 = r1.bind(r9)(r4, r8);
                                r1 = r1.length;
                                r9 = r5 + r1;
                                r11 = r4 + 1;
                                r0 = r10;
                                if(!(r11 < r6)) { _fun4296_ip = 367; continue _fun4296 }
case 337:
                                r1 = _closure3_slot0;
                                r1 = r1._scrollMetrics;
                                r1 = r1.visibleLength;
                                r3 = r10;
                                r4 = r11;
                                r0 = r3;
                                r5 = r9;
                                if(r5 < r1) { _fun4296_ip = 294; continue _fun4296 }
case 367:
                                r1 = {};
                                r1['first'] = r2;
                                r1['last'] = r0;
                                r0 = new Array(1);
                                r0[0] = r1;
                                return r0;
case 387:
                                r0 = new Array(0);
                                return r0;
                            }
                        };
                        r0['_getNonViewportRenderRegions'] = r7;
                        r7 = r0._checkProps;
                        r7 = r7.bind(r0)(r10);
                        r7 = _closure1_slot13;
                        r9 = r7.default;
                        r18 = r0._listMetrics;
                        r8 = r9.prototype;
                        r8 = Object.create(r8, {constructor: {value: r9}});
                        r19 = r8;
                        r7 = new r19[r9](r18, r17);
                        r7 = r7 instanceof Object ? r7 : r8;
                        r0['_fillRateHelper'] = r7;
                        r7 = r0.props;
                        r8 = r7.viewabilityConfigCallbackPairs;
                        r7 = r0.props;
                        if(r8) { _fun4262_ip = 718; continue _fun4262 }
case 641:
                        r12 = r7.onViewableItemsChanged;
                        r15 = r7.viewabilityConfig;
                        if(!r12) { _fun4262_ip = 745; continue _fun4262 }
case 656:
                        r11 = r0._viewabilityTuples;
                        r9 = r11.push;
                        r8 = {};
                        r13 = _closure1_slot15;
                        r13 = r13.default;
                        r14 = r13.prototype;
                        r14 = Object.create(r14, {constructor: {value: r13}});
                        r19 = r14;
                        r18 = r15;
                        r13 = new r19[r13](r18, r17);
                        r13 = r13 instanceof Object ? r13 : r14;
                        r8['viewabilityHelper'] = r13;
                        r8['onViewableItemsChanged'] = r12;
                        r8 = r9.bind(r11)(r8);
                        _fun4262_ip = 745; continue _fun4262;
case 718:
                        r8 = r7.viewabilityConfigCallbackPairs;
                        r7 = r8.map;
                        r2 = function(a0) { // Environment: r2
                            r1 = a0;
                            r0 = {};
                            r2 = _closure1_slot15;
                            r4 = r2.default;
                            r5 = r1.viewabilityConfig;
                            r3 = r4.prototype;
                            r3 = Object.create(r3, {constructor: {value: r4}});
                            r6 = r3;
                            r2 = new r6[r4](r5, r4);
                            r2 = r2 instanceof Object ? r2 : r3;
                            r0['viewabilityHelper'] = r2;
                            r1 = r1.onViewableItemsChanged;
                            r0['onViewableItemsChanged'] = r1;
                            return r0;
                        };
                        r2 = r7.bind(r8)(r2);
                        r0['_viewabilityTuples'] = r2;
case 745:
                        r7 = _closure2_slot0;
                        r2 = r7._initialRenderRegion;
                        r8 = r2.bind(r7)(r10);
                        r2 = r0.props;
                        r2 = r2.maintainVisibleContentPosition;
                        r7 = r2 == r4;
                        r1 = undefined;
                        if(r7) { _fun4262_ip = 786; continue _fun4262 }
case 780:
                        r1 = r2.minIndexForVisible;
case 786:
                        r2 = r1 != r4;
                        r9 = 0;
                        if(!r2) { _fun4262_ip = 798; continue _fun4262 }
case 795:
                        r9 = r1;
case 798:
                        r1 = {};
                        r1['cellsAroundViewport'] = r8;
                        r7 = _closure2_slot0;
                        r2 = r7._createRenderMask;
                        r2 = r2.bind(r7)(r10, r8);
                        r1['renderMask'] = r2;
                        r8 = r0.props;
                        r7 = r8.getItemCount;
                        r2 = r0.props;
                        r2 = r2.data;
                        r2 = r7.bind(r8)(r2);
                        r7 = r2 > r9;
                        r2 = null;
                        if(!r7) { _fun4262_ip = 881; continue _fun4262 }
case 860:
                        r8 = _closure2_slot0;
                        r7 = r8._getItemKey;
                        r6 = r0.props;
                        r2 = r7.bind(r8)(r6, r9);
case 881:
                        r1['firstVisibleItemKey'] = r2;
                        r2 = r0.props;
                        r2 = r2.initialScrollIndex;
                        r4 = r2 != r4;
                        r2 = 0;
                        if(!r4) { _fun4262_ip = 929; continue _fun4262 }
case 906:
                        r4 = r0.props;
                        r4 = r4.initialScrollIndex;
                        r4 = r4 > r5;
                        r2 = 0;
                        if(!r4) { _fun4262_ip = 929; continue _fun4262 }
case 926:
                        r2 = r3;
case 929:
                        r1['pendingScrollUpdateCount'] = r2;
                        r0['state'] = r1;
                        return r0;
                    }
                };
                var _closure2_slot0 = r4;
                r1 = _closure1_slot9;
                r2 = r1.default;
                r3 = undefined;
                r1 = a0;
                r1 = r2.bind(r3)(r4, r1);
                r0 = _closure1_slot6;
                r2 = r0.default;
                r0 = {};
                r1 = 'scrollToEnd';
                r0['key'] = r1;
                r1 = function(a0) { // Original name: scrollToEnd, environment: r6
                    _fun4298: for(var _fun4298_ip = 0; ; ) switch(_fun4298_ip) {
case 0:
                        r0 = a0;
                        r2 = this;
                        r4 = true;
                        if(!r0) { _fun4298_ip = 16; continue _fun4298 }
case 10:
                        r4 = r0.animated;
case 16:
                        r3 = r2.props;
                        r1 = r3.getItemCount;
                        r0 = r2.props;
                        r0 = r0.data;
                        r1 = r1.bind(r3)(r0);
                        r0 = 1;
                        r6 = r1 - r0;
                        r5 = 0;
                        if(!(!(r6 < r5))) { _fun4298_ip = 159; continue _fun4298 }
case 54:
                        r3 = r2._listMetrics;
                        r1 = r3.getCellMetricsApprox;
                        r0 = r2.props;
                        r0 = r1.bind(r3)(r6, r0);
                        r1 = global;
                        r3 = r1.Math;
                        r1 = r3.max;
                        r6 = r0.offset;
                        r0 = r0.length;
                        r6 = r6 + r0;
                        r0 = r2._footerLength;
                        r6 = r6 + r0;
                        r0 = r2._scrollMetrics;
                        r0 = r0.visibleLength;
                        r0 = r6 - r0;
                        r3 = r1.bind(r3)(r5, r0);
                        r1 = r2.scrollToOffset;
                        r0 = {};
                        r0['animated'] = r4;
                        r0['offset'] = r3;
                        r0 = r1.bind(r2)(r0);
                        r0 = undefined;
                        return r0;
case 159:
                        r0 = undefined;
                        return r0;
                    }
                };
                r0['value'] = r1;
                r1 = new Array(42);
                r1[0] = r0;
                r0 = {};
                r5 = 'scrollToIndex';
                r0['key'] = r5;
                r5 = function(a0) { // Original name: scrollToIndex, environment: r6
                    _fun4299: for(var _fun4299_ip = 0; ; ) switch(_fun4299_ip) {
case 0:
                        r0 = a0;
                        r3 = this;
                        r1 = r3.props;
                        r15 = r1.data;
                        r10 = r1.getItemCount;
                        r8 = r1.getItemLayout;
                        r7 = r1.onScrollToIndexFailed;
                        r4 = r0.animated;
                        r12 = r0.index;
                        r2 = r0.viewOffset;
                        r9 = r0.viewPosition;
                        r11 = _closure1_slot17;
                        r17 = r11.default;
                        r5 = 0;
                        r14 = r12 >= r5;
                        r6 = global;
                        r0 = r6.HermesInternal;
                        r13 = r0.concat;
                        r16 = 'scrollToIndex out of range: requested index ';
                        r0 = ' but minimum is 0';
                        r13 = r13.bind(r16)(r12, r0);
                        r0 = undefined;
                        r13 = r17.bind(r0)(r14, r13);
                        r18 = r11.default;
                        r13 = r10.bind(r0)(r15);
                        r14 = 1;
                        r17 = r13 >= r14;
                        r21 = r10.bind(r0)(r15);
                        r13 = r6.HermesInternal;
                        r20 = r13.concat;
                        r19 = 'scrollToIndex out of range: item length ';
                        r13 = ' but minimum is 1';
                        r13 = r20.bind(r19)(r21, r13);
                        r13 = r18.bind(r0)(r17, r13);
                        r13 = r11.default;
                        r11 = r10.bind(r0)(r15);
                        r11 = r12 < r11;
                        r10 = r10.bind(r0)(r15);
                        r15 = r10 - r14;
                        r10 = r6.HermesInternal;
                        r14 = r10.concat;
                        r10 = ' is out of 0 to ';
                        r10 = r14.bind(r16)(r12, r10, r15);
                        r10 = r13.bind(r0)(r11, r10);
                        if(r8) { _fun4299_ip = 312; continue _fun4299 }
case 215:
                        r10 = r3._listMetrics;
                        r8 = r10.getHighestMeasuredCellIndex;
                        r8 = r8.bind(r10)();
                        if(!(r12 > r8)) { _fun4299_ip = 312; continue _fun4299 }
case 234:
                        r1 = _closure1_slot17;
                        r10 = r1.default;
                        r1 = !r7;
                        r8 = !r1;
                        r1 = 'scrollToIndex should be used in conjunction with getItemLayout or onScrollToIndexFailed, otherwise there is no way to know the location of offscreen indices or handle failures.';
                        r1 = r10.bind(r0)(r8, r1);
                        r1 = {};
                        r10 = r3._listMetrics;
                        r8 = r10.getAverageCellLength;
                        r8 = r8.bind(r10)();
                        r1['averageItemLength'] = r8;
                        r10 = r3._listMetrics;
                        r8 = r10.getHighestMeasuredCellIndex;
                        r8 = r8.bind(r10)();
                        r1['highestMeasuredFrameIndex'] = r8;
                        r1['index'] = r12;
                        r1 = r7.bind(r0)(r1);
                        return r0;
case 312:
                        r10 = r3._listMetrics;
                        r8 = r10.getCellMetricsApprox;
                        r7 = r6.Math;
                        r1 = r7.floor;
                        r7 = r1.bind(r7)(r12);
                        r1 = r3.props;
                        r1 = r8.bind(r10)(r7, r1);
                        r7 = r6.Math;
                        r6 = r7.max;
                        r11 = r3._listMetrics;
                        r10 = r11.getCellOffsetApprox;
                        r8 = r3.props;
                        r8 = r10.bind(r11)(r12, r8);
                        if(r9) { _fun4299_ip = 389; continue _fun4299 }
case 387:
                        r9 = 0;
case 389:
                        r10 = r3._scrollMetrics;
                        r10 = r10.visibleLength;
                        r1 = r1.length;
                        r1 = r10 - r1;
                        r1 = r9 * r1;
                        r1 = r8 - r1;
                        r1 = r6.bind(r7)(r5, r1);
                        if(r2) { _fun4299_ip = 427; continue _fun4299 }
case 425:
                        r2 = 0;
case 427:
                        r5 = r1 - r2;
                        r2 = r3.scrollToOffset;
                        r1 = {};
                        r1['offset'] = r5;
                        r1['animated'] = r4;
                        r1 = r2.bind(r3)(r1);
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[1] = r0;
                r0 = {};
                r5 = 'scrollToItem';
                r0['key'] = r5;
                r5 = function(a0) { // Original name: scrollToItem, environment: r6
                    _fun4300: for(var _fun4300_ip = 0; ; ) switch(_fun4300_ip) {
case 0:
                        r7 = a0;
                        r3 = this;
                        r8 = r7.item;
                        r0 = r3.props;
                        r6 = r0.data;
                        r5 = r0.getItem;
                        r1 = r0.getItemCount;
                        r0 = undefined;
                        r4 = r1.bind(r0)(r6);
                        r2 = 0;
                        r1 = r2 < r4;
                        if(!r1) { _fun4300_ip = 109; continue _fun4300 }
case 48:
                        r9 = r5.bind(r0)(r6, r2);
                        r1 = r2;
                        if(!(r9 !== r8)) { _fun4300_ip = 70; continue _fun4300 }
case 61:
                        r2 = r1 + 1;
                        if(r2 < r4) { _fun4300_ip = 48; continue _fun4300 }
case 68:
                        _fun4300_ip = 109; continue _fun4300;
case 70:
                        r2 = r3.scrollToIndex;
                        r4 = global;
                        r6 = r4.Object;
                        r5 = r6.assign;
                        r4 = {};
                        r4['index'] = r1;
                        r1 = {};
                        r1 = r5.bind(r6)(r1, r7, r4);
                        r1 = r2.bind(r3)(r1);
case 109:
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[2] = r0;
                r0 = {};
                r5 = 'scrollToOffset';
                r0['key'] = r5;
                r5 = function(a0) { // Original name: scrollToOffset, environment: r6
                    _fun4301: for(var _fun4301_ip = 0; ; ) switch(_fun4301_ip) {
case 0:
                        r1 = a0;
                        r7 = this;
                        r0 = r1.animated;
                        r6 = r1.offset;
                        r2 = r7._scrollRef;
                        r3 = null;
                        if(!(r2 != r3)) { _fun4301_ip = 193; continue _fun4301 }
case 31:
                        r1 = r2.scrollTo;
                        if(!(r1 != r3)) { _fun4301_ip = 167; continue _fun4301 }
case 44:
                        r1 = r7._orientation;
                        r1 = r1.bind(r7)();
                        r3 = r1.horizontal;
                        r1 = r1.rtl;
                        if(!r3) { _fun4301_ip = 115; continue _fun4301 }
case 68:
                        if(!r1) { _fun4301_ip = 115; continue _fun4301 }
case 71:
                        r3 = r7._listMetrics;
                        r1 = r3.hasContentLength;
                        r1 = r1.bind(r3)();
                        if(r1) { _fun4301_ip = 115; continue _fun4301 }
case 89:
                        r1 = global;
                        r4 = r1.console;
                        r3 = r4.warn;
                        r1 = 'scrollToOffset may not be called in RTL before content is laid out';
                        r1 = r3.bind(r4)(r1);
                        r1 = undefined;
                        return r1;
case 115:
                        r1 = r2.scrollTo;
                        r3 = global;
                        r5 = r3.Object;
                        r4 = r5.assign;
                        r3 = {};
                        r3['animated'] = r0;
                        r0 = r7._scrollToParamsFromOffset;
                        r0 = r0.bind(r7)(r6);
                        r0 = r4.bind(r5)(r3, r0);
                        r0 = r1.bind(r2)(r0);
                        r0 = undefined;
                        return r0;
case 167:
                        r0 = global;
                        r2 = r0.console;
                        r1 = r2.warn;
                        r0 = 'No scrollTo method provided. This may be because you have two nested VirtualizedLists with the same orientation, or because you are using a custom component that does not implement scrollTo.';
                        r0 = r1.bind(r2)(r0);
                        r0 = undefined;
                        return r0;
case 193:
                        r0 = undefined;
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[3] = r0;
                r0 = {};
                r5 = '_scrollToParamsFromOffset';
                r0['key'] = r5;
                r5 = function(a0) { // Original name: _scrollToParamsFromOffset, environment: r6
                    _fun4302: for(var _fun4302_ip = 0; ; ) switch(_fun4302_ip) {
case 0:
                        r4 = a0;
                        r1 = this;
                        r0 = r1._orientation;
                        r2 = r0.bind(r1)();
                        r0 = r2.horizontal;
                        r2 = r2.rtl;
                        if(!r0) { _fun4302_ip = 32; continue _fun4302 }
case 29:
                        if(r2) { _fun4302_ip = 55; continue _fun4302 }
case 32:
                        r3 = {};
                        if(r0) { _fun4302_ip = 46; continue _fun4302 }
case 37:
                        r3['y'] = r4;
                        r2 = r3;
                        _fun4302_ip = 53; continue _fun4302;
case 46:
                        r3['x'] = r4;
                        r2 = r3;
case 53:
                        return r2;
case 55:
                        r3 = r1._listMetrics;
                        r2 = r3.cartesianOffset;
                        r1 = r1._scrollMetrics;
                        r1 = r1.visibleLength;
                        r1 = r4 + r1;
                        r2 = r2.bind(r3)(r1);
                        r1 = {};
                        if(r0) { _fun4302_ip = 99; continue _fun4302 }
case 90:
                        r1['y'] = r2;
                        r0 = r1;
                        _fun4302_ip = 106; continue _fun4302;
case 99:
                        r1['x'] = r2;
                        r0 = r1;
case 106:
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[4] = r0;
                r0 = {};
                r5 = 'recordInteraction';
                r0['key'] = r5;
                r5 = function() { // Original name: recordInteraction, environment: r6
                    r3 = this;
                    r4 = r3._nestedChildLists;
                    r2 = r4.forEach;
                    r1 = function(a0) { // Environment: r0
                        r1 = a0;
                        r0 = r1.recordInteraction;
                        r0 = r0.bind(r1)();
                        r0 = undefined;
                        return r0;
                    };
                    r1 = r2.bind(r4)(r1);
                    r2 = r3._viewabilityTuples;
                    r1 = r2.forEach;
                    r0 = function(a0) { // Environment: r0
                        r0 = a0;
                        r1 = r0.viewabilityHelper;
                        r0 = r1.recordInteraction;
                        r0 = r0.bind(r1)();
                        r0 = undefined;
                        return r0;
                    };
                    r0 = r1.bind(r2)(r0);
                    r2 = r3._updateViewableItems;
                    r1 = r3.props;
                    r0 = r3.state;
                    r0 = r0.cellsAroundViewport;
                    r0 = r2.bind(r3)(r1, r0);
                    r0 = undefined;
                    return r0;
                };
                r0['value'] = r5;
                r1[5] = r0;
                r0 = {};
                r5 = 'flashScrollIndicators';
                r0['key'] = r5;
                r5 = function() { // Original name: flashScrollIndicators, environment: r6
                    _fun4306: for(var _fun4306_ip = 0; ; ) switch(_fun4306_ip) {
case 0:
                        r0 = this;
                        r2 = r0._scrollRef;
                        r1 = null;
                        if(!(r2 != r1)) { _fun4306_ip = 34; continue _fun4306 }
case 14:
                        r1 = r0._scrollRef;
                        r0 = r1.flashScrollIndicators;
                        r0 = r0.bind(r1)();
                        r0 = undefined;
                        return r0;
case 34:
                        r0 = undefined;
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[6] = r0;
                r0 = {};
                r5 = 'getScrollResponder';
                r0['key'] = r5;
                r5 = function() { // Original name: getScrollResponder, environment: r6
                    _fun4307: for(var _fun4307_ip = 0; ; ) switch(_fun4307_ip) {
case 0:
                        r0 = this;
                        r1 = r0._scrollRef;
                        if(!r1) { _fun4307_ip = 26; continue _fun4307 }
case 11:
                        r1 = r0._scrollRef;
                        r1 = r1.getScrollResponder;
                        if(r1) { _fun4307_ip = 30; continue _fun4307 }
case 26:
                        r1 = undefined;
                        return r1;
case 30:
                        r1 = r0._scrollRef;
                        r0 = r1.getScrollResponder;
                        r0 = r0.bind(r1)();
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[7] = r0;
                r0 = {};
                r5 = 'getScrollableNode';
                r0['key'] = r5;
                r5 = function() { // Original name: getScrollableNode, environment: r6
                    _fun4308: for(var _fun4308_ip = 0; ; ) switch(_fun4308_ip) {
case 0:
                        r0 = this;
                        r1 = r0._scrollRef;
                        if(!r1) { _fun4308_ip = 26; continue _fun4308 }
case 11:
                        r1 = r0._scrollRef;
                        r1 = r1.getScrollableNode;
                        if(r1) { _fun4308_ip = 54; continue _fun4308 }
case 26:
                        r1 = _closure1_slot20;
                        r3 = r1.findNodeHandle;
                        r2 = r0._scrollRef;
                        r1 = undefined;
                        r1 = r3.bind(r1)(r2);
                        return r1;
case 54:
                        r1 = r0._scrollRef;
                        r0 = r1.getScrollableNode;
                        r0 = r0.bind(r1)();
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[8] = r0;
                r0 = {};
                r5 = 'getScrollRef';
                r0['key'] = r5;
                r5 = function() { // Original name: getScrollRef, environment: r6
                    _fun4309: for(var _fun4309_ip = 0; ; ) switch(_fun4309_ip) {
case 0:
                        r0 = this;
                        r1 = r0._scrollRef;
                        if(!r1) { _fun4309_ip = 26; continue _fun4309 }
case 11:
                        r1 = r0._scrollRef;
                        r1 = r1.getScrollRef;
                        if(r1) { _fun4309_ip = 34; continue _fun4309 }
case 26:
                        r1 = r0._scrollRef;
                        return r1;
case 34:
                        r1 = r0._scrollRef;
                        r0 = r1.getScrollRef;
                        r0 = r0.bind(r1)();
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[9] = r0;
                r0 = {};
                r5 = 'setNativeProps';
                r0['key'] = r5;
                r5 = function(a0) { // Original name: setNativeProps, environment: r6
                    _fun4310: for(var _fun4310_ip = 0; ; ) switch(_fun4310_ip) {
case 0:
                        r0 = this;
                        r1 = r0._scrollRef;
                        if(!r1) { _fun4310_ip = 31; continue _fun4310 }
case 11:
                        r2 = r0._scrollRef;
                        r1 = r2.setNativeProps;
                        r0 = a0;
                        r0 = r1.bind(r2)(r0);
case 31:
                        r0 = undefined;
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[10] = r0;
                r0 = {};
                r5 = '_getCellKey';
                r0['key'] = r5;
                r5 = function() { // Original name: _getCellKey, environment: r6
                    _fun4311: for(var _fun4311_ip = 0; ; ) switch(_fun4311_ip) {
case 0:
                        r0 = this;
                        r1 = r0.context;
                        r0 = null;
                        r2 = r1 == r0;
                        r0 = undefined;
                        if(r2) { _fun4311_ip = 23; continue _fun4311 }
case 18:
                        r0 = r1.cellKey;
case 23:
                        if(r0) { _fun4311_ip = 30; continue _fun4311 }
case 26:
                        r0 = 'rootList';
case 30:
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[11] = r0;
                r0 = {};
                r5 = 'hasMore';
                r0['key'] = r5;
                r5 = function() { // Original name: hasMore, environment: r6
                    r0 = this;
                    r0 = r0._hasMore;
                    return r0;
                };
                r0['value'] = r5;
                r1[12] = r0;
                r0 = {};
                r5 = '_checkProps';
                r0['key'] = r5;
                r5 = function(a0) { // Original name: _checkProps, environment: r6
                    _fun4313: for(var _fun4313_ip = 0; ; ) switch(_fun4313_ip) {
case 0:
                        r2 = a0;
                        r1 = this;
                        r0 = r2.onScroll;
                        r6 = r2.windowSize;
                        r4 = r2.getItemCount;
                        r3 = r2.data;
                        r9 = r2.initialScrollIndex;
                        r5 = _closure1_slot17;
                        r8 = r5.default;
                        r7 = !r0;
                        if(r7) { _fun4313_ip = 59; continue _fun4313 }
case 51:
                        r0 = r0.__isNative;
                        r7 = !r0;
case 59:
                        r0 = undefined;
                        r5 = 'Components based on VirtualizedList must be wrapped with Animated.createAnimatedComponent to support native onScroll events with useNativeDriver';
                        r5 = r8.bind(r0)(r7, r5);
                        r5 = _closure1_slot17;
                        r8 = r5.default;
                        r7 = _closure1_slot0;
                        r10 = _closure1_slot1;
                        r2 = 22;
                        r2 = r10[r2];
                        r2 = r7.bind(r0)(r2);
                        r2 = r2.windowSizeOrDefault;
                        r6 = r2.bind(r0)(r6);
                        r2 = 0;
                        r7 = r6 > r2;
                        r6 = 'VirtualizedList: The windowSize prop must be present and set to a value greater than 0.';
                        r6 = r8.bind(r0)(r7, r6);
                        r6 = r5.default;
                        r5 = 'VirtualizedList: The "getItemCount" prop must be provided';
                        r5 = r6.bind(r0)(r4, r5);
                        r8 = r4.bind(r0)(r3);
                        r3 = null;
                        if(!(r9 != r3)) { _fun4313_ip = 254; continue _fun4313 }
case 153:
                        r3 = r1._hasTriggeredInitialScrollToIndex;
                        if(r3) { _fun4313_ip = 254; continue _fun4313 }
case 162:
                        if(!(!(r9 < r2))) { _fun4313_ip = 174; continue _fun4313 }
case 166:
                        if(!(r8 > r2)) { _fun4313_ip = 254; continue _fun4313 }
case 170:
                        if(!(r9 >= r8)) { _fun4313_ip = 254; continue _fun4313 }
case 174:
                        r2 = r1._hasWarned;
                        r2 = r2.initialScrollIndex;
                        if(r2) { _fun4313_ip = 254; continue _fun4313 }
case 189:
                        r2 = global;
                        r4 = r2.console;
                        r3 = r4.warn;
                        r2 = r2.HermesInternal;
                        r7 = r2.concat;
                        r15 = 'initialScrollIndex "';
                        r13 = '" is not valid (list has ';
                        r11 = ' items)';
                        r14 = r9;
                        r12 = r8;
                        r2 = r15[r7](r14, r13, r12, r11, r10);
                        r2 = r3.bind(r4)(r2);
                        r2 = r1._hasWarned;
                        r1 = true;
                        r2['initialScrollIndex'] = r1;
case 254:
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[13] = r0;
                r0 = {};
                r5 = '_adjustCellsAroundViewport';
                r0['key'] = r5;
                r5 = function(a0, a1, a2) { // Original name: _adjustCellsAroundViewport, environment: r6
                    _fun4314: for(var _fun4314_ip = 0; ; ) switch(_fun4314_ip) {
case 0:
                        r4 = a0;
                        r3 = a1;
                        r9 = this;
                        r5 = r4.data;
                        r1 = r4.getItemCount;
                        r7 = _closure1_slot0;
                        r0 = _closure1_slot1;
                        r11 = 22;
                        r2 = r0[r11];
                        r0 = undefined;
                        r2 = r7.bind(r0)(r2);
                        r7 = r2.onEndReachedThresholdOrDefault;
                        r2 = r4.onEndReachedThreshold;
                        r10 = r7.bind(r0)(r2);
                        r2 = r9._scrollMetrics;
                        r12 = r2.offset;
                        r8 = r2.visibleLength;
                        r7 = r9._listMetrics;
                        r2 = r7.getContentLength;
                        r2 = r2.bind(r7)();
                        r7 = r2 - r8;
                        r12 = r7 - r12;
                        r7 = 0;
                        if(!(!(r8 <= r7))) { _fun4314_ip = 469; continue _fun4314 }
case 107:
                        if(!(!(r2 <= r7))) { _fun4314_ip = 469; continue _fun4314 }
case 114:
                        r2 = r4.disableVirtualization;
                        if(r2) { _fun4314_ip = 312; continue _fun4314 }
case 126:
                        r2 = a2;
                        if(!(!(r2 > r7))) { _fun4314_ip = 274; continue _fun4314 }
case 136:
                        r13 = _closure1_slot0;
                        r2 = _closure1_slot1;
                        r14 = 23;
                        r14 = r2[r14];
                        r14 = r13.bind(r0)(r14);
                        r16 = r14.computeWindowedRenderLimits;
                        r14 = r2[r11];
                        r14 = r13.bind(r0)(r14);
                        r15 = r14.maxToRenderPerBatchOrDefault;
                        r14 = r4.maxToRenderPerBatch;
                        r21 = r15.bind(r0)(r14);
                        r2 = r2[r11];
                        r2 = r13.bind(r0)(r2);
                        r13 = r2.windowSizeOrDefault;
                        r2 = r4.windowSize;
                        r20 = r13.bind(r0)(r2);
                        r18 = r9._listMetrics;
                        r17 = r9._scrollMetrics;
                        r23 = undefined;
                        r22 = r4;
                        r19 = r3;
                        r2 = r23[r16](r22, r21, r20, r19, r18, r17, r16);
                        r13 = _closure1_slot17;
                        r15 = r13.default;
                        r14 = r2.last;
                        r13 = r1.bind(r0)(r5);
                        r14 = r14 < r13;
                        r13 = 'computeWindowedRenderLimits() should return range in-bounds';
                        r13 = r15.bind(r0)(r14, r13);
                        _fun4314_ip = 409; continue _fun4314;
case 274:
                        r15 = r3.last;
                        r14 = r1.bind(r0)(r5);
                        r13 = r3;
                        if(!(r15 >= r14)) { _fun4314_ip = 310; continue _fun4314 }
case 291:
                        r15 = _closure2_slot0;
                        r14 = r15._constrainToItemCount;
                        r13 = r14.bind(r15)(r3, r4);
case 310:
                        return r13;
case 312:
                        r8 = r10 * r8;
                        r10 = 0;
                        if(!(r12 < r8)) { _fun4314_ip = 356; continue _fun4314 }
case 322:
                        r8 = _closure1_slot0;
                        r6 = _closure1_slot1;
                        r6 = r6[r11];
                        r6 = r8.bind(r0)(r6);
                        r8 = r6.maxToRenderPerBatchOrDefault;
                        r6 = r4.maxToRenderPerBatch;
                        r10 = r8.bind(r0)(r6);
case 356:
                        r6 = {};
                        r6['first'] = r7;
                        r8 = global;
                        r12 = r8.Math;
                        r11 = r12.min;
                        r8 = r3.last;
                        r10 = r8 + r10;
                        r13 = r1.bind(r0)(r5);
                        r8 = 1;
                        r8 = r13 - r8;
                        r8 = r11.bind(r12)(r10, r8);
                        r6['last'] = r8;
                        r2 = r6;
case 409:
                        r8 = r9._nestedChildLists;
                        r6 = r8.size;
                        r6 = r6.bind(r8)();
                        if(!(r6 > r7)) { _fun4314_ip = 467; continue _fun4314 }
case 428:
                        r8 = r9._findFirstChildWithMore;
                        r7 = r2.first;
                        r6 = r2.last;
                        r6 = r8.bind(r9)(r7, r6);
                        r7 = null;
                        if(!(r6 == r7)) { _fun4314_ip = 461; continue _fun4314 }
case 456:
                        r6 = r2.last;
case 461:
                        r2['last'] = r6;
case 467:
                        return r2;
case 469:
                        r2 = r3.last;
                        r1 = r1.bind(r0)(r5);
                        r0 = r3;
                        if(!(r2 >= r1)) { _fun4314_ip = 505; continue _fun4314 }
case 486:
                        r2 = _closure2_slot0;
                        r1 = r2._constrainToItemCount;
                        r0 = r1.bind(r2)(r3, r4);
case 505:
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[14] = r0;
                r0 = {};
                r5 = '_findFirstChildWithMore';
                r0['key'] = r5;
                r5 = function(a0, a1) { // Original name: _findFirstChildWithMore, environment: r6
                    _fun4315: for(var _fun4315_ip = 0; ; ) switch(_fun4315_ip) {
case 0:
                        r4 = a0;
                        r3 = a1;
                        r2 = this;
                        r1 = null;
                        if(!(r4 <= r3)) { _fun4315_ip = 72; continue _fun4315 }
case 16:
                        r6 = r2._indicesToKeys;
                        r0 = r6.get;
                        r9 = r0.bind(r6)(r4);
                        r0 = r4;
                        if(!(r9 != r1)) { _fun4315_ip = 65; continue _fun4315 }
case 39:
                        r8 = r2._nestedChildLists;
                        r7 = r8.anyInCell;
                        r6 = function(a0) { // Environment: r5
                            r1 = a0;
                            r0 = r1.hasMore;
                            r0 = r0.bind(r1)();
                            return r0;
                        };
                        r6 = r7.bind(r8)(r9, r6);
                        if(r6) { _fun4315_ip = 74; continue _fun4315 }
case 65:
                        r4 = r0 + 1;
                        if(r4 <= r3) { _fun4315_ip = 16; continue _fun4315 }
case 72:
                        return r1;
case 74:
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[15] = r0;
                r0 = {};
                r5 = 'componentDidMount';
                r0['key'] = r5;
                r5 = function() { // Original name: componentDidMount, environment: r6
                    _fun4317: for(var _fun4317_ip = 0; ; ) switch(_fun4317_ip) {
case 0:
                        r3 = this;
                        r0 = r3._isNestedWithSameOrientation;
                        r0 = r0.bind(r3)();
                        if(!r0) { _fun4317_ip = 51; continue _fun4317 }
case 15:
                        r2 = r3.context;
                        r1 = r2.registerAsNestedChild;
                        r0 = {};
                        r0['ref'] = r3;
                        r3 = r3.context;
                        r3 = r3.cellKey;
                        r0['cellKey'] = r3;
                        r0 = r1.bind(r2)(r0);
case 51:
                        r0 = undefined;
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[16] = r0;
                r0 = {};
                r5 = 'componentWillUnmount';
                r0['key'] = r5;
                r5 = function() { // Original name: componentWillUnmount, environment: r6
                    _fun4318: for(var _fun4318_ip = 0; ; ) switch(_fun4318_ip) {
case 0:
                        r1 = this;
                        r0 = r1._isNestedWithSameOrientation;
                        r0 = r0.bind(r1)();
                        if(!r0) { _fun4318_ip = 37; continue _fun4318 }
case 15:
                        r3 = r1.context;
                        r2 = r3.unregisterAsNestedChild;
                        r0 = {};
                        r0['ref'] = r1;
                        r0 = r2.bind(r3)(r0);
case 37:
                        r0 = global;
                        r3 = r0.clearTimeout;
                        r2 = r1._updateCellsToRenderTimeoutID;
                        r0 = undefined;
                        r2 = r3.bind(r0)(r2);
                        r4 = r1._viewabilityTuples;
                        r3 = r4.forEach;
                        r2 = function(a0) { // Environment: r2
                            r0 = a0;
                            r1 = r0.viewabilityHelper;
                            r0 = r1.dispose;
                            r0 = r0.bind(r1)();
                            r0 = undefined;
                            return r0;
                        };
                        r2 = r3.bind(r4)(r2);
                        r2 = r1._fillRateHelper;
                        r1 = r2.deactivateAndFlush;
                        r1 = r1.bind(r2)();
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[17] = r0;
                r0 = {};
                r5 = '_pushCells';
                r0['key'] = r5;
                r5 = function(a0, a1, a2, a3, a4, a5) { // Original name: _pushCells, environment: r6
                    _fun4320: for(var _fun4320_ip = 0; ; ) switch(_fun4320_ip) {
case 0:
                        r3 = a3;
                        r0 = this;
                        r1 = a0;
                        var _closure3_slot0 = r1;
                        r1 = a1;
                        var _closure3_slot1 = r1;
                        r1 = a2;
                        var _closure3_slot2 = r1;
                        r1 = a5;
                        var _closure3_slot3 = r1;
                        var _closure3_slot4 = r0;
                        r0 = r0.props;
                        r1 = r0.CellRendererComponent;
                        var _closure3_slot5 = r1;
                        r1 = r0.ItemSeparatorComponent;
                        var _closure3_slot6 = r1;
                        r5 = r0.ListHeaderComponent;
                        r1 = r0.ListItemComponent;
                        var _closure3_slot7 = r1;
                        r2 = r0.data;
                        var _closure3_slot8 = r2;
                        r1 = r0.debug;
                        var _closure3_slot9 = r1;
                        r1 = r0.getItem;
                        var _closure3_slot10 = r1;
                        r1 = r0.getItemCount;
                        r6 = r0.getItemLayout;
                        var _closure3_slot11 = r6;
                        r6 = r0.horizontal;
                        var _closure3_slot12 = r6;
                        r0 = r0.renderItem;
                        var _closure3_slot13 = r0;
                        r0 = 0;
                        if(!r5) { _fun4320_ip = 151; continue _fun4320 }
case 148:
                        r0 = 1;
case 151:
                        var _closure3_slot14 = r0;
                        r0 = undefined;
                        r2 = r1.bind(r0)(r2);
                        r1 = 1;
                        r6 = r2 - r1;
                        var _closure3_slot15 = r6;
                        r1 = global;
                        r5 = r1.Math;
                        r2 = r5.min;
                        r1 = a4;
                        r2 = r2.bind(r5)(r6, r1);
                        r1 = function() { // Original name: _loop, environment: r4
                            _fun4321: for(var _fun4321_ip = 0; ; ) switch(_fun4321_ip) {
case 0:
                                r4 = _closure3_slot10;
                                r3 = _closure3_slot8;
                                r1 = _closure3_slot17;
                                r0 = undefined;
                                r12 = r4.bind(r0)(r3, r1);
                                r6 = _closure2_slot0;
                                r5 = r6._keyExtractor;
                                r4 = _closure3_slot17;
                                r3 = _closure3_slot4;
                                r1 = r3.props;
                                r1 = r5.bind(r6)(r12, r4, r1);
                                var _closure4_slot0 = r1;
                                r5 = r3._indicesToKeys;
                                r4 = r5.set;
                                r3 = _closure3_slot17;
                                r3 = r4.bind(r5)(r3, r1);
                                r5 = _closure3_slot2;
                                r4 = r5.has;
                                r6 = _closure3_slot17;
                                r3 = _closure3_slot14;
                                r3 = r6 + r3;
                                r3 = r4.bind(r5)(r3);
                                if(!r3) { _fun4321_ip = 135; continue _fun4321 }
case 112:
                                r5 = _closure3_slot1;
                                r4 = r5.push;
                                r3 = _closure3_slot0;
                                r3 = r3.length;
                                r3 = r4.bind(r5)(r3);
case 135:
                                r4 = _closure3_slot11;
                                r3 = null;
                                r10 = r4 == r3;
                                if(r10) { _fun4321_ip = 152; continue _fun4321 }
case 148:
                                r10 = _closure3_slot9;
case 152:
                                if(r10) { _fun4321_ip = 175; continue _fun4321 }
case 155:
                                r3 = _closure3_slot4;
                                r4 = r3._fillRateHelper;
                                r3 = r4.enabled;
                                r10 = r3.bind(r4)();
case 175:
                                r5 = _closure3_slot0;
                                r4 = r5.push;
                                r6 = _closure1_slot21;
                                r7 = r6.jsx;
                                r3 = _closure1_slot16;
                                r6 = r3.default;
                                r3 = global;
                                r9 = r3.Object;
                                r8 = r9.assign;
                                r3 = {};
                                r13 = _closure3_slot5;
                                r3['CellRendererComponent'] = r13;
                                r14 = _closure3_slot17;
                                r13 = _closure3_slot15;
                                r14 = r14 < r13;
                                r13 = undefined;
                                if(!r14) { _fun4321_ip = 250; continue _fun4321 }
case 246:
                                r13 = _closure3_slot6;
case 250:
                                r3['ItemSeparatorComponent'] = r13;
                                r13 = _closure3_slot7;
                                r3['ListItemComponent'] = r13;
                                r3['cellKey'] = r1;
                                r13 = _closure3_slot12;
                                r3['horizontal'] = r13;
                                r13 = _closure3_slot17;
                                r3['index'] = r13;
                                r13 = _closure3_slot3;
                                r3['inversionStyle'] = r13;
                                r3['item'] = r12;
                                r12 = _closure3_slot16;
                                r3['prevCellKey'] = r12;
                                r12 = _closure3_slot4;
                                r13 = r12._onUpdateSeparators;
                                r3['onUpdateSeparators'] = r13;
                                r13 = r12._onCellFocusCapture;
                                r3['onCellFocusCapture'] = r13;
                                r12 = r12._onCellUnmount;
                                r3['onUnmount'] = r12;
                                r11 = function(a0) { // Original name: ref, environment: r11
                                    r0 = _closure3_slot4;
                                    r2 = r0._cellRefs;
                                    r1 = _closure4_slot0;
                                    r0 = a0;
                                    r2[r1] = r0;
                                    r0 = undefined;
                                    return r0;
                                };
                                r3['ref'] = r11;
                                r11 = _closure3_slot13;
                                r3['renderItem'] = r11;
                                if(!r10) { _fun4321_ip = 385; continue _fun4321 }
case 365:
                                r11 = {};
                                r12 = _closure3_slot4;
                                r12 = r12._onCellLayout;
                                r11['onCellLayout'] = r12;
                                r10 = r11;
case 385:
                                r3 = r8.bind(r9)(r3, r10);
                                r3 = r7.bind(r0)(r6, r3, r1);
                                r3 = r4.bind(r5)(r3);
                                var _closure3_slot16 = r1;
                                return r0;
                            }
                        };
                        var _closure3_slot17 = r3;
                        if(!(r3 <= r2)) { _fun4320_ip = 226; continue _fun4320 }
case 208:
                        r5 = r1.bind(r0)();
                        r5 = r3 + 1;
                        _closure3_slot17 = r5;
                        r3 = r5;
                        if(r3 <= r2) { _fun4320_ip = 208; continue _fun4320 }
case 226:
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[18] = r0;
                r0 = {};
                r5 = '_isNestedWithSameOrientation';
                r0['key'] = r5;
                r5 = function() { // Original name: _isNestedWithSameOrientation, environment: r6
                    _fun4323: for(var _fun4323_ip = 0; ; ) switch(_fun4323_ip) {
case 0:
                        r2 = this;
                        r1 = r2.context;
                        r0 = r1;
                        if(!r0) { _fun4323_ip = 74; continue _fun4323 }
case 13:
                        r1 = r1.horizontal;
                        r1 = !r1;
                        r5 = _closure1_slot0;
                        r4 = _closure1_slot1;
                        r3 = 22;
                        r3 = r4[r3];
                        r4 = undefined;
                        r3 = r5.bind(r4)(r3);
                        r3 = r3.horizontalOrDefault;
                        r2 = r2.props;
                        r2 = r2.horizontal;
                        r2 = r3.bind(r4)(r2);
                        r1 = !r1;
                        r0 = r1 === r2;
case 74:
                        r0 = !r0;
                        r0 = !r0;
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[19] = r0;
                r0 = {};
                r5 = 'render';
                r0['key'] = r5;
                r5 = function() { // Original name: render, environment: r6
                    _fun4324: for(var _fun4324_ip = 0; ; ) switch(_fun4324_ip) {
case 0:
                        r6 = this;
                        r3 = undefined;
                        r11 = undefined;
                        r5 = undefined;
                        r14 = undefined;
                        r0 = undefined;
                        r16 = undefined;
                        r17 = undefined;
                        r18 = undefined;
                        var _closure3_slot0 = r6;
                        r2 = r6._checkProps;
                        r1 = r6.props;
                        r1 = r2.bind(r6)(r1);
                        r1 = r6.props;
                        r12 = r1.ListEmptyComponent;
                        r8 = r1.ListFooterComponent;
                        r15 = r1.ListHeaderComponent;
                        r1 = r6.props;
                        r7 = r1.data;
                        r4 = r1.horizontal;
                        r1 = r6.props;
                        r2 = r1.inverted;
                        r9 = null;
                        r1 = null;
                        if(!r2) { _fun4324_ip = 164; continue _fun4324 }
case 96:
                        r13 = _closure1_slot0;
                        r19 = _closure1_slot1;
                        r2 = 22;
                        r2 = r19[r2];
                        r2 = r13.bind(r3)(r2);
                        r13 = r2.horizontalOrDefault;
                        r2 = r6.props;
                        r2 = r2.horizontal;
                        r2 = r13.bind(r3)(r2);
                        r10 = _closure1_slot25;
                        if(r2) { _fun4324_ip = 155; continue _fun4324 }
case 147:
                        r2 = r10.verticallyInverted;
                        _fun4324_ip = 161; continue _fun4324;
case 155:
                        r2 = r10.horizontallyInverted;
case 161:
                        r1 = r2;
case 164:
                        r11 = r1;
                        r5 = new Array(0);
                        r10 = global;
                        r13 = r10.Set;
                        r1 = r6.props;
                        r34 = r1.stickyHeaderIndices;
                        r2 = r13.prototype;
                        r2 = Object.create(r2, {constructor: {value: r13}});
                        r35 = r2;
                        r1 = new r35[r13](r34, r33);
                        r14 = r1 instanceof Object ? r1 : r2;
                        r0 = new Array(0);
                        if(!r15) { _fun4324_ip = 458; continue _fun4324 }
case 220:
                        r2 = r14;
                        r1 = r2.has;
                        r13 = 0;
                        r1 = r1.bind(r2)(r13);
                        if(!r1) { _fun4324_ip = 251; continue _fun4324 }
case 238:
                        r2 = r0;
                        r1 = r2.push;
                        r1 = r1.bind(r2)(r13);
case 251:
                        r13 = _closure1_slot19;
                        r2 = r13.isValidElement;
                        r2 = r2.bind(r13)(r15);
                        r23 = r15;
                        if(r2) { _fun4324_ip = 292; continue _fun4324 }
case 275:
                        r2 = _closure1_slot21;
                        r13 = r2.jsx;
                        r2 = {};
                        r23 = r13.bind(r3)(r15, r2);
case 292:
                        r13 = r5;
                        r2 = r13.push;
                        r21 = _closure1_slot21;
                        r20 = r21.jsx;
                        r19 = _closure1_slot0;
                        r22 = _closure1_slot1;
                        r15 = 24;
                        r15 = r22[r15];
                        r15 = r19.bind(r3)(r15);
                        r19 = r15.VirtualizedListCellContextProvider;
                        r15 = {};
                        r22 = r6._getCellKey;
                        r24 = r22.bind(r6)();
                        r22 = '-header';
                        r22 = r24 + r22;
                        r15['cellKey'] = r22;
                        r22 = r21.jsx;
                        r24 = _closure1_slot20;
                        r21 = r24.View;
                        r1 = {};
                        r26 = false;
                        r1['collapsable'] = r26;
                        r26 = r6._onLayoutHeader;
                        r1['onLayout'] = r26;
                        r28 = r24.StyleSheet;
                        r27 = r28.compose;
                        r26 = r11;
                        r24 = r6.props;
                        r24 = r24.ListHeaderComponentStyle;
                        r24 = r27.bind(r28)(r26, r24);
                        r1['style'] = r24;
                        r1['children'] = r23;
                        r1 = r22.bind(r3)(r21, r1);
                        r15['children'] = r1;
                        r1 = '$header';
                        r1 = r20.bind(r3)(r19, r15, r1);
                        r1 = r2.bind(r13)(r1);
case 458:
                        r2 = r6.props;
                        r1 = r2.getItemCount;
                        r2 = r1.bind(r2)(r7);
                        r15 = 0;
                        if(!(r2 === r15)) { _fun4324_ip = 686; continue _fun4324 }
case 482:
                        if(!r12) { _fun4324_ip = 686; continue _fun4324 }
case 488:
                        r7 = _closure1_slot19;
                        r1 = r7.isValidElement;
                        r1 = r1.bind(r7)(r12);
                        r23 = r12;
                        if(r1) { _fun4324_ip = 529; continue _fun4324 }
case 512:
                        r1 = _closure1_slot21;
                        r7 = r1.jsx;
                        r1 = {};
                        r23 = r7.bind(r3)(r12, r1);
case 529:
                        var _closure3_slot1 = r23;
                        r12 = r5;
                        r7 = r12.push;
                        r1 = _closure1_slot21;
                        r20 = r1.jsx;
                        r13 = _closure1_slot0;
                        r19 = _closure1_slot1;
                        r1 = 24;
                        r1 = r19[r1];
                        r1 = r13.bind(r3)(r1);
                        r19 = r1.VirtualizedListCellContextProvider;
                        r13 = {};
                        r1 = r6._getCellKey;
                        r21 = r1.bind(r6)();
                        r1 = '-empty';
                        r1 = r21 + r1;
                        r13['cellKey'] = r1;
                        r22 = _closure1_slot19;
                        r21 = r22.cloneElement;
                        r1 = {};
                        r25 = function(a0) { // Original name: onLayout, environment: r25
                            _fun4325: for(var _fun4325_ip = 0; ; ) switch(_fun4325_ip) {
case 0:
                                r2 = a0;
                                r3 = _closure3_slot0;
                                r1 = r3._onLayoutEmpty;
                                r1 = r1.bind(r3)(r2);
                                r1 = _closure3_slot1;
                                r1 = r1.props;
                                r1 = r1.onLayout;
                                if(!r1) { _fun4325_ip = 57; continue _fun4325 }
case 38:
                                r0 = _closure3_slot1;
                                r1 = r0.props;
                                r0 = r1.onLayout;
                                r0 = r0.bind(r1)(r2);
case 57:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r1['onLayout'] = r25;
                        r24 = _closure1_slot20;
                        r27 = r24.StyleSheet;
                        r26 = r27.compose;
                        r25 = r11;
                        r24 = r23.props;
                        r24 = r24.style;
                        r24 = r26.bind(r27)(r25, r24);
                        r1['style'] = r24;
                        r1 = r21.bind(r22)(r23, r1);
                        r13['children'] = r1;
                        r1 = '$empty';
                        r1 = r20.bind(r3)(r19, r13, r1);
                        r1 = r7.bind(r12)(r1);
case 686:
                        if(!(r2 > r15)) { _fun4324_ip = 1212; continue _fun4324 }
case 693:
                        r7 = false;
                        _closure1_slot23 = r7;
                        r7 = '';
                        _closure1_slot24 = r7;
                        r7 = r6._getSpacerKey;
                        r4 = !r4;
                        r16 = r7.bind(r6)(r4);
                        r4 = r6.state;
                        r7 = r4.renderMask;
                        r4 = r7.enumerateRegions;
                        r4 = r4.bind(r7)();
                        r7 = r4.length;
                        r13 = 1;
                        r7 = r7 - r13;
                        r12 = r4[r7];
                        r19 = r12 != r9;
                        r7 = null;
                        if(!r19) { _fun4324_ip = 784; continue _fun4324 }
case 770:
                        r19 = r12.isSpacer;
                        r7 = null;
                        if(!r19) { _fun4324_ip = 784; continue _fun4324 }
case 781:
                        r7 = r12;
case 784:
                        r17 = r7;
                        r12 = r4;
                        r7 = r12[Symbol.iterator];
                        r12 = r7().next;
                        r4 = '$spacer-';
case 797:
                        r19 = r12().value;
                        r20 = r7;
                        if(!(r20 !== r3)) { _fun4324_ip = 1152; continue _fun4324 }
case 811: // try_start_0
                        r18 = r19;
                        r19 = r19.isSpacer;
                        if(r19) { _fun4324_ip = 866; continue _fun4324 }
case 823:
                        r25 = r6._pushCells;
                        r34 = r5;
                        r33 = r0;
                        r32 = r14;
                        r19 = r18;
                        r31 = r19.first;
                        r30 = r19.last;
                        r29 = r11;
                        r35 = r6;
                        r19 = r35[r25](r34, r33, r32, r31, r30, r29, r28);
                        _fun4324_ip = 1135; continue _fun4324;
case 866:
                        r19 = r6.props;
                        r19 = r19.disableVirtualization;
                        if(r19) { _fun4324_ip = 1140; continue _fun4324 }
case 883:
                        r20 = r18;
                        r19 = r17;
                        r20 = r20 === r19;
                        r19 = r20;
                        if(!r20) { _fun4324_ip = 913; continue _fun4324 }
case 899:
                        r20 = r6.props;
                        r20 = r20.getItemLayout;
                        r19 = !r20;
case 913:
                        if(r19) { _fun4324_ip = 926; continue _fun4324 }
case 916:
                        r19 = r18;
                        r24 = r19.last;
                        _fun4324_ip = 974; continue _fun4324;
case 926:
                        r19 = _closure1_slot10;
                        r22 = r19.default;
                        r19 = r18;
                        r20 = r19.first;
                        r21 = r20 - r13;
                        r20 = r19.last;
                        r23 = r6._listMetrics;
                        r19 = r23.getHighestMeasuredCellIndex;
                        r19 = r19.bind(r23)();
                        r24 = r22.bind(r3)(r21, r20, r19);
case 974:
                        r23 = r6._listMetrics;
                        r22 = r23.getCellMetricsApprox;
                        r19 = r18;
                        r21 = r19.first;
                        r20 = r6.props;
                        r20 = r22.bind(r23)(r21, r20);
                        r23 = r6._listMetrics;
                        r22 = r23.getCellMetricsApprox;
                        r21 = r6.props;
                        r21 = r22.bind(r23)(r24, r21);
                        r22 = r21.offset;
                        r21 = r21.length;
                        r21 = r22 + r21;
                        r20 = r20.offset;
                        r28 = r21 - r20;
                        r21 = r5;
                        r20 = r21.push;
                        r22 = _closure1_slot21;
                        r24 = r22.jsx;
                        r22 = _closure1_slot20;
                        r23 = r22.View;
                        r22 = {};
                        r25 = _closure1_slot3;
                        r27 = r25.default;
                        r26 = r16;
                        r25 = {};
                        r25 = r27.bind(r3)(r25, r26, r28);
                        r22['style'] = r25;
                        r25 = r19.first;
                        r19 = r10.HermesInternal;
                        r19 = r19.concat;
                        r19 = r19.bind(r4)(r25);
                        r19 = r24.bind(r3)(r23, r22, r19);
                        r19 = r20.bind(r21)(r19);
case 1135: // try_end0
                        _fun4324_ip = 797; continue _fun4324;
case 1140:
                        _fun4324_ip = 797; continue _fun4324;
case 1145: // catch_target0
                        CatchBlockStart(arg_register=4);
                        r7.return();
                        throw r4;
case 1152:
                        r4 = r6._hasWarned;
                        r4 = r4.keys;
                        if(r4) { _fun4324_ip = 1212; continue _fun4324 }
case 1166:
                        r4 = _closure1_slot23;
                        if(!r4) { _fun4324_ip = 1212; continue _fun4324 }
case 1173:
                        r12 = r10.console;
                        r7 = r12.warn;
                        r4 = _closure1_slot24;
                        r1 = 'VirtualizedList: missing keys for items, make sure to specify a key or id property on each item or provide a custom keyExtractor.';
                        r1 = r7.bind(r12)(r1, r4);
                        r4 = r6._hasWarned;
                        r1 = true;
                        r4['keys'] = r1;
case 1212:
                        if(!r8) { _fun4324_ip = 1410; continue _fun4324 }
case 1218:
                        r7 = _closure1_slot19;
                        r4 = r7.isValidElement;
                        r4 = r4.bind(r7)(r8);
                        r17 = r8;
                        if(r4) { _fun4324_ip = 1259; continue _fun4324 }
case 1242:
                        r4 = _closure1_slot21;
                        r7 = r4.jsx;
                        r4 = {};
                        r17 = r7.bind(r3)(r8, r4);
case 1259:
                        r7 = r5;
                        r4 = r7.push;
                        r14 = _closure1_slot21;
                        r13 = r14.jsx;
                        r12 = _closure1_slot0;
                        r16 = _closure1_slot1;
                        r8 = 24;
                        r8 = r16[r8];
                        r8 = r12.bind(r3)(r8);
                        r12 = r8.VirtualizedListCellContextProvider;
                        r8 = {};
                        r16 = r6._getFooterCellKey;
                        r16 = r16.bind(r6)();
                        r8['cellKey'] = r16;
                        r16 = r14.jsx;
                        r18 = _closure1_slot20;
                        r14 = r18.View;
                        r1 = {};
                        r19 = r6._onLayoutFooter;
                        r1['onLayout'] = r19;
                        r21 = r18.StyleSheet;
                        r20 = r21.compose;
                        r19 = r11;
                        r18 = r6.props;
                        r18 = r18.ListFooterComponentStyle;
                        r18 = r20.bind(r21)(r19, r18);
                        r1['style'] = r18;
                        r1['children'] = r17;
                        r1 = r16.bind(r3)(r14, r1);
                        r8['children'] = r1;
                        r1 = '$footer';
                        r1 = r13.bind(r3)(r12, r8, r1);
                        r1 = r4.bind(r7)(r1);
case 1410:
                        r8 = r10.Object;
                        r7 = r8.assign;
                        r4 = r6.props;
                        r1 = {};
                        r12 = r6._onContentSizeChange;
                        r1['onContentSizeChange'] = r12;
                        r12 = r6._onLayout;
                        r1['onLayout'] = r12;
                        r12 = r6._onScroll;
                        r1['onScroll'] = r12;
                        r12 = r6._onScrollBeginDrag;
                        r1['onScrollBeginDrag'] = r12;
                        r12 = r6._onScrollEndDrag;
                        r1['onScrollEndDrag'] = r12;
                        r12 = r6._onMomentumScrollBegin;
                        r1['onMomentumScrollBegin'] = r12;
                        r12 = r6._onMomentumScrollEnd;
                        r1['onMomentumScrollEnd'] = r12;
                        r12 = r6.props;
                        r13 = r12.scrollEventThrottle;
                        r14 = r13 != r9;
                        r12 = 0.0001;
                        if(!r14) { _fun4324_ip = 1535; continue _fun4324 }
case 1532:
                        r12 = r13;
case 1535:
                        r1['scrollEventThrottle'] = r12;
                        r12 = r6.props;
                        r12 = r12.invertStickyHeaders;
                        if(!(r12 === r3)) { _fun4324_ip = 1568; continue _fun4324 }
case 1555:
                        r12 = r6.props;
                        r12 = r12.inverted;
                        _fun4324_ip = 1579; continue _fun4324;
case 1568:
                        r13 = r6.props;
                        r12 = r13.invertStickyHeaders;
case 1579:
                        r1['invertStickyHeaders'] = r12;
                        r1['stickyHeaderIndices'] = r0;
                        r0 = r11;
                        if(r0) { _fun4324_ip = 1607; continue _fun4324 }
case 1595:
                        r0 = r6.props;
                        r0 = r0.style;
                        _fun4324_ip = 1635; continue _fun4324;
case 1607:
                        r12 = r11;
                        r11 = new Array(2);
                        r11[0] = r12;
                        r12 = r6.props;
                        r12 = r12.style;
                        r11[1] = r12;
                        r0 = r11;
case 1635:
                        r1['style'] = r0;
                        r0 = r6.props;
                        r0 = r0.inverted;
                        r1['isInvertedVirtualizedList'] = r0;
                        r0 = r6.props;
                        r0 = r0.maintainVisibleContentPosition;
                        r11 = r0 != r9;
                        r0 = undefined;
                        if(!r11) { _fun4324_ip = 1753; continue _fun4324 }
case 1675:
                        r14 = r10.Object;
                        r13 = r14.assign;
                        r10 = r6.props;
                        r12 = r10.maintainVisibleContentPosition;
                        r11 = {};
                        r10 = r6.props;
                        r10 = r10.maintainVisibleContentPosition;
                        r10 = r10.minIndexForVisible;
                        r16 = r6.props;
                        r16 = r16.ListHeaderComponent;
                        r15 = 0;
                        if(!r16) { _fun4324_ip = 1735; continue _fun4324 }
case 1732:
                        r15 = 1;
case 1735:
                        r10 = r10 + r15;
                        r11['minIndexForVisible'] = r10;
                        r10 = {};
                        r0 = r13.bind(r14)(r10, r12, r11);
case 1753:
                        r1['maintainVisibleContentPosition'] = r0;
                        r0 = {};
                        r8 = r7.bind(r8)(r0, r4, r1);
                        r0 = r6.state;
                        r0 = r0.cellsAroundViewport;
                        r1 = r0.last;
                        r0 = 1;
                        r0 = r2 - r0;
                        r0 = r1 < r0;
                        r6['_hasMore'] = r0;
                        r0 = _closure1_slot21;
                        r2 = r0.jsx;
                        r10 = _closure1_slot0;
                        r11 = _closure1_slot1;
                        r0 = 24;
                        r0 = r11[r0];
                        r0 = r10.bind(r3)(r0);
                        r1 = r0.VirtualizedListContextProvider;
                        r0 = {};
                        r7 = {};
                        r7['cellKey'] = r9;
                        r9 = r6._getScrollMetrics;
                        r7['getScrollMetrics'] = r9;
                        r9 = 22;
                        r9 = r11[r9];
                        r9 = r10.bind(r3)(r9);
                        r10 = r9.horizontalOrDefault;
                        r9 = r6.props;
                        r9 = r9.horizontal;
                        r9 = r10.bind(r3)(r9);
                        r7['horizontal'] = r9;
                        r9 = r6._getOutermostParentListRef;
                        r7['getOutermostParentListRef'] = r9;
                        r9 = r6._registerAsNestedChild;
                        r7['registerAsNestedChild'] = r9;
                        r9 = r6._unregisterAsNestedChild;
                        r7['unregisterAsNestedChild'] = r9;
                        r0['value'] = r7;
                        r10 = _closure1_slot19;
                        r9 = r10.cloneElement;
                        r7 = r6.props;
                        r7 = r7.renderScrollComponent;
                        if(r7) { _fun4324_ip = 1961; continue _fun4324 }
case 1955:
                        r7 = r6._defaultRenderScrollComponent;
case 1961:
                        r8 = r7.bind(r3)(r8);
                        r7 = {};
                        r11 = r6._captureScrollRef;
                        r7['ref'] = r11;
                        r5 = r9.bind(r10)(r8, r7, r5);
                        r0['children'] = r5;
                        r5 = r2.bind(r3)(r1, r0);
                        r0 = r6.props;
                        r0 = r0.debug;
                        if(r0) { _fun4324_ip = 2011; continue _fun4324 }
case 2009:
                        return r5;
case 2011:
                        r0 = _closure1_slot21;
                        r2 = r0.jsxs;
                        r0 = _closure1_slot20;
                        r1 = r0.View;
                        r0 = {};
                        r4 = _closure1_slot25;
                        r4 = r4.debug;
                        r0['style'] = r4;
                        r4 = new Array(2);
                        r4[0] = r5;
                        r5 = r6._renderDebugOverlay;
                        r5 = r5.bind(r6)();
                        r4[1] = r5;
                        r0['children'] = r4;
                        r0 = r2.bind(r3)(r1, r0);
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[20] = r0;
                r0 = {};
                r5 = 'componentDidUpdate';
                r0['key'] = r5;
                r5 = function(a0) { // Original name: componentDidUpdate, environment: r6
                    _fun4326: for(var _fun4326_ip = 0; ; ) switch(_fun4326_ip) {
case 0:
                        r0 = a0;
                        r1 = this;
                        r2 = r1.props;
                        r5 = r2.data;
                        r3 = r2.extraData;
                        r2 = r2.getItemLayout;
                        r4 = r0.data;
                        if(!(r5 === r4)) { _fun4326_ip = 46; continue _fun4326 }
case 36:
                        r0 = r0.extraData;
                        if(!(r3 !== r0)) { _fun4326_ip = 69; continue _fun4326 }
case 46:
                        r4 = r1._viewabilityTuples;
                        r3 = r4.forEach;
                        r0 = function(a0) { // Environment: r0
                            r0 = a0;
                            r1 = r0.viewabilityHelper;
                            r0 = r1.resetViewableIndices;
                            r0 = r0.bind(r1)();
                            r0 = undefined;
                            return r0;
                        };
                        r0 = r3.bind(r4)(r0);
case 69:
                        r0 = r1._hiPriInProgress;
                        r3 = r1._scheduleCellsToRenderUpdate;
                        r3 = r3.bind(r1)();
                        if(!r0) { _fun4326_ip = 96; continue _fun4326 }
case 88:
                        r0 = false;
                        r1['_hiPriInProgress'] = r0;
case 96:
                        r0 = null;
                        if(!(r2 != r0)) { _fun4326_ip = 112; continue _fun4326 }
case 102:
                        r0 = r1._maybeCallOnEdgeReached;
                        r0 = r0.bind(r1)();
case 112:
                        r0 = undefined;
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[21] = r0;
                r0 = {};
                r5 = '_computeBlankness';
                r0['key'] = r5;
                r5 = function() { // Original name: _computeBlankness, environment: r6
                    r0 = this;
                    r4 = r0._fillRateHelper;
                    r3 = r4.computeBlankness;
                    r2 = r0.props;
                    r1 = r0.state;
                    r1 = r1.cellsAroundViewport;
                    r0 = r0._scrollMetrics;
                    r0 = r3.bind(r4)(r2, r1, r0);
                    r0 = undefined;
                    return r0;
                };
                r0['value'] = r5;
                r1[22] = r0;
                r0 = {};
                r5 = '_triggerRemeasureForChildListsInCell';
                r0['key'] = r5;
                r5 = function(a0) { // Original name: _triggerRemeasureForChildListsInCell, environment: r6
                    r0 = this;
                    r3 = r0._nestedChildLists;
                    r2 = r3.forEachInCell;
                    r1 = a0;
                    r0 = function(a0) { // Environment: r0
                        r1 = a0;
                        r0 = r1.measureLayoutRelativeToContainingList;
                        r0 = r0.bind(r1)();
                        r0 = undefined;
                        return r0;
                    };
                    r0 = r2.bind(r3)(r1, r0);
                    r0 = undefined;
                    return r0;
                };
                r0['value'] = r5;
                r1[23] = r0;
                r0 = {};
                r5 = 'measureLayoutRelativeToContainingList';
                r0['key'] = r5;
                r5 = function() { // Original name: measureLayoutRelativeToContainingList, environment: r6
                    _fun4331: for(var _fun4331_ip = 0; ; ) switch(_fun4331_ip) {
case 0:
                        r1 = this;
                        var _closure3_slot0 = r1;
case 8: // try_start_0
                        r2 = r1._scrollRef;
                        if(r2) { _fun4331_ip = 21; continue _fun4331 }
case 17: // try_end0
                        r2 = undefined;
                        return r2;
case 21: // try_start_1
                        r4 = r1._scrollRef;
                        r3 = r4.measureLayout;
                        r2 = r1.context;
                        r1 = r2.getOutermostParentListRef;
                        r2 = r1.bind(r2)();
                        r1 = r2.getScrollRef;
                        r2 = r1.bind(r2)();
                        r1 = function(a0, a1, a2, a3) { // Environment: r0
                            _fun4332: for(var _fun4332_ip = 0; ; ) switch(_fun4332_ip) {
case 0:
                                r2 = _closure3_slot0;
                                r3 = r2._selectOffset;
                                r1 = {};
                                r4 = a0;
                                r1['x'] = r4;
                                r4 = a1;
                                r1['y'] = r4;
                                r1 = r3.bind(r2)(r1);
                                r2['_offsetFromParentVirtualizedList'] = r1;
                                r4 = r2._listMetrics;
                                r3 = r4.notifyListContentLayout;
                                r1 = {};
                                r5 = {};
                                r6 = a2;
                                r5['width'] = r6;
                                r6 = a3;
                                r5['height'] = r6;
                                r1['layout'] = r5;
                                r5 = r2._orientation;
                                r5 = r5.bind(r2)();
                                r1['orientation'] = r5;
                                r1 = r3.bind(r4)(r1);
                                r3 = r2._convertParentScrollMetrics;
                                r4 = r2.context;
                                r1 = r4.getScrollMetrics;
                                r1 = r1.bind(r4)();
                                r1 = r3.bind(r2)(r1);
                                r2 = r2._scrollMetrics;
                                r3 = r2.visibleLength;
                                r2 = r1.visibleLength;
                                r2 = r3 !== r2;
                                if(r2) { _fun4332_ip = 165; continue _fun4332 }
case 142:
                                r3 = _closure3_slot0;
                                r3 = r3._scrollMetrics;
                                r4 = r3.offset;
                                r3 = r1.offset;
                                r2 = r4 !== r3;
case 165:
                                if(!r2) { _fun4332_ip = 227; continue _fun4332 }
case 168:
                                r0 = _closure3_slot0;
                                r3 = r0._scrollMetrics;
                                r2 = r1.visibleLength;
                                r3['visibleLength'] = r2;
                                r2 = r0._scrollMetrics;
                                r1 = r1.offset;
                                r2['offset'] = r1;
                                r2 = r0._nestedChildLists;
                                r1 = r2.forEach;
                                r0 = function(a0) { // Environment: r0
                                    r1 = a0;
                                    r0 = r1.measureLayoutRelativeToContainingList;
                                    r0 = r0.bind(r1)();
                                    r0 = undefined;
                                    return r0;
                                };
                                r0 = r1.bind(r2)(r0);
case 227:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r0 = function(a0) { // Environment: r0
                            r0 = global;
                            r2 = r0.console;
                            r1 = r2.warn;
                            r0 = "VirtualizedList: Encountered an error while measuring a list's offset from its containing VirtualizedList.";
                            r0 = r1.bind(r2)(r0);
                            r0 = undefined;
                            return r0;
                        };
                        r0 = r3.bind(r4)(r2, r1, r0);
case 75: // try_end1
                        _fun4331_ip = 107; continue _fun4331;
case 77: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register=0);
                        r1 = global;
                        r3 = r1.console;
                        r2 = r3.warn;
                        r1 = r0.stack;
                        r0 = 'measureLayoutRelativeToContainingList threw an error';
                        r0 = r2.bind(r3)(r0, r1);
case 107:
                        r0 = undefined;
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[24] = r0;
                r0 = {};
                r5 = '_getFooterCellKey';
                r0['key'] = r5;
                r5 = function() { // Original name: _getFooterCellKey, environment: r6
                    r1 = this;
                    r0 = r1._getCellKey;
                    r1 = r0.bind(r1)();
                    r0 = '-footer';
                    r0 = r1 + r0;
                    return r0;
                };
                r0['value'] = r5;
                r1[25] = r0;
                r0 = {};
                r5 = '_renderDebugOverlay';
                r0['key'] = r5;
                r5 = function() { // Original name: _renderDebugOverlay, environment: r6
                    _fun4336: for(var _fun4336_ip = 0; ; ) switch(_fun4336_ip) {
case 0:
                        r1 = this;
                        r2 = r1._scrollMetrics;
                        r3 = r2.visibleLength;
                        r4 = r1._listMetrics;
                        r2 = r4.getContentLength;
                        r2 = r2.bind(r4)();
                        if(r2) { _fun4336_ip = 35; continue _fun4336 }
case 32:
                        r2 = 1;
case 35:
                        r11 = r3 / r2;
                        var _closure3_slot0 = r11;
                        r7 = new Array(0);
                        r4 = r1.props;
                        r3 = r4.getItemCount;
                        r2 = r1.props;
                        r2 = r2.data;
                        r3 = r3.bind(r4)(r2);
                        r2 = 0;
                        r4 = r2 < r3;
                        if(!r4) { _fun4336_ip = 132; continue _fun4336 }
case 81:
                        r6 = r1._listMetrics;
                        r5 = r6.getCellMetricsApprox;
                        r4 = r1.props;
                        r6 = r5.bind(r6)(r2, r4);
                        r5 = r6.isMounted;
                        r4 = r2;
                        if(!r5) { _fun4336_ip = 125; continue _fun4336 }
case 115:
                        r5 = r7.push;
                        r5 = r5.bind(r7)(r6);
case 125:
                        r2 = r4 + 1;
                        if(r2 < r3) { _fun4336_ip = 81; continue _fun4336 }
case 132:
                        r5 = r1._listMetrics;
                        r4 = r5.getCellMetricsApprox;
                        r2 = r1.state;
                        r2 = r2.cellsAroundViewport;
                        r3 = r2.first;
                        r2 = r1.props;
                        r2 = r4.bind(r5)(r3, r2);
                        r16 = r2.offset;
                        r5 = r1._listMetrics;
                        r4 = r5.getCellMetricsApprox;
                        r2 = r1.state;
                        r2 = r2.cellsAroundViewport;
                        r3 = r2.last;
                        r2 = r1.props;
                        r2 = r4.bind(r5)(r3, r2);
                        r3 = r2.offset;
                        r2 = r2.length;
                        r2 = r3 + r2;
                        r15 = r2 - r16;
                        r2 = r1._scrollMetrics;
                        r12 = r2.offset;
                        r1 = r1._scrollMetrics;
                        r10 = r1.visibleLength;
                        r6 = _closure1_slot21;
                        r3 = r6.jsxs;
                        r5 = _closure1_slot20;
                        r2 = r5.View;
                        r1 = {};
                        r4 = _closure1_slot25;
                        r8 = r4.debugOverlayBase;
                        r4 = new Array(2);
                        r4[0] = r8;
                        r8 = _closure1_slot25;
                        r8 = r8.debugOverlay;
                        r4[1] = r8;
                        r1['style'] = r4;
                        r4 = r7.map;
                        r0 = function(a0, a1) { // Environment: r0
                            r6 = a0;
                            r0 = _closure1_slot21;
                            r4 = r0.jsx;
                            r0 = _closure1_slot20;
                            r3 = r0.View;
                            r2 = {};
                            r0 = _closure1_slot25;
                            r5 = r0.debugOverlayBase;
                            r0 = new Array(3);
                            r0[0] = r5;
                            r1 = _closure1_slot25;
                            r1 = r1.debugOverlayFrame;
                            r0[1] = r1;
                            r1 = {};
                            r8 = r6.offset;
                            r7 = _closure3_slot0;
                            r7 = r8 * r7;
                            r1['top'] = r7;
                            r6 = r6.length;
                            r5 = _closure3_slot0;
                            r5 = r6 * r5;
                            r1['height'] = r5;
                            r0[2] = r1;
                            r2['style'] = r0;
                            r1 = 'f';
                            r0 = a1;
                            r1 = r1 + r0;
                            r0 = undefined;
                            r0 = r4.bind(r0)(r3, r2, r1);
                            return r0;
                        };
                        r0 = r4.bind(r7)(r0);
                        r4 = new Array(3);
                        r4[0] = r0;
                        r13 = r6.jsx;
                        r8 = r5.View;
                        r7 = {};
                        r0 = _closure1_slot25;
                        r14 = r0.debugOverlayBase;
                        r0 = new Array(3);
                        r0[0] = r14;
                        r14 = _closure1_slot25;
                        r14 = r14.debugOverlayFrameLast;
                        r0[1] = r14;
                        r14 = {};
                        r16 = r16 * r11;
                        r14['top'] = r16;
                        r15 = r15 * r11;
                        r14['height'] = r15;
                        r0[2] = r14;
                        r7['style'] = r0;
                        r0 = undefined;
                        r7 = r13.bind(r0)(r8, r7);
                        r4[1] = r7;
                        r7 = r6.jsx;
                        r6 = r5.View;
                        r5 = {};
                        r8 = _closure1_slot25;
                        r13 = r8.debugOverlayBase;
                        r8 = new Array(3);
                        r8[0] = r13;
                        r9 = _closure1_slot25;
                        r9 = r9.debugOverlayFrameVis;
                        r8[1] = r9;
                        r9 = {};
                        r12 = r12 * r11;
                        r9['top'] = r12;
                        r10 = r10 * r11;
                        r9['height'] = r10;
                        r8[2] = r9;
                        r5['style'] = r8;
                        r5 = r7.bind(r0)(r6, r5);
                        r4[2] = r5;
                        r1['children'] = r4;
                        r0 = r3.bind(r0)(r2, r1);
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[26] = r0;
                r0 = {};
                r5 = '_selectLength';
                r0['key'] = r5;
                r5 = function(a0) { // Original name: _selectLength, environment: r6
                    _fun4338: for(var _fun4338_ip = 0; ; ) switch(_fun4338_ip) {
case 0:
                        r1 = a0;
                        r2 = _closure1_slot0;
                        r3 = _closure1_slot1;
                        r0 = 22;
                        r0 = r3[r0];
                        r3 = undefined;
                        r0 = r2.bind(r3)(r0);
                        r2 = r0.horizontalOrDefault;
                        r0 = this;
                        r0 = r0.props;
                        r0 = r0.horizontal;
                        r0 = r2.bind(r3)(r0);
                        if(r0) { _fun4338_ip = 61; continue _fun4338 }
case 54:
                        r0 = r1.height;
                        _fun4338_ip = 66; continue _fun4338;
case 61:
                        r0 = r1.width;
case 66:
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[27] = r0;
                r0 = {};
                r5 = '_selectOffset';
                r0['key'] = r5;
                r5 = function(a0) { // Original name: _selectOffset, environment: r6
                    _fun4339: for(var _fun4339_ip = 0; ; ) switch(_fun4339_ip) {
case 0:
                        r0 = a0;
                        r3 = this;
                        r1 = r0.x;
                        r0 = r0.y;
                        r2 = r3._orientation;
                        r2 = r2.bind(r3)();
                        r2 = r2.horizontal;
                        if(!r2) { _fun4339_ip = 36; continue _fun4339 }
case 33:
                        r0 = r1;
case 36:
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[28] = r0;
                r0 = {};
                r5 = '_orientation';
                r0['key'] = r5;
                r5 = function() { // Original name: _orientation, environment: r6
                    r0 = {};
                    r3 = _closure1_slot0;
                    r4 = _closure1_slot1;
                    r2 = 22;
                    r2 = r4[r2];
                    r4 = undefined;
                    r2 = r3.bind(r4)(r2);
                    r3 = r2.horizontalOrDefault;
                    r2 = this;
                    r2 = r2.props;
                    r2 = r2.horizontal;
                    r2 = r3.bind(r4)(r2);
                    r0['horizontal'] = r2;
                    r1 = _closure1_slot20;
                    r1 = r1.I18nManager;
                    r1 = r1.isRTL;
                    r0['rtl'] = r1;
                    return r0;
                };
                r0['value'] = r5;
                r1[29] = r0;
                r0 = {};
                r5 = '_maybeCallOnEdgeReached';
                r0['key'] = r5;
                r5 = function() { // Original name: _maybeCallOnEdgeReached, environment: r6
                    _fun4341: for(var _fun4341_ip = 0; ; ) switch(_fun4341_ip) {
case 0:
                        r1 = this;
                        r0 = r1.props;
                        r12 = r0.data;
                        r7 = r0.getItemCount;
                        r6 = r0.onStartReached;
                        r13 = r0.onStartReachedThreshold;
                        r9 = r0.onEndReached;
                        r11 = r0.onEndReachedThreshold;
                        r2 = r1._listMetrics;
                        r0 = r2.hasContentLength;
                        r0 = r0.bind(r2)();
                        if(!r0) { _fun4341_ip = 408; continue _fun4341 }
case 62:
                        r0 = r1._scrollMetrics;
                        r2 = r0.visibleLength;
                        r0 = 0;
                        if(!(r2 !== r0)) { _fun4341_ip = 408; continue _fun4341 }
case 81:
                        r2 = r1.state;
                        r2 = r2.pendingScrollUpdateCount;
                        if(!(!(r2 > r0))) { _fun4341_ip = 404; continue _fun4341 }
case 99:
                        r2 = r1._scrollMetrics;
                        r8 = r2.visibleLength;
                        r4 = r2.offset;
                        r3 = r1._listMetrics;
                        r2 = r3.getContentLength;
                        r2 = r2.bind(r3)();
                        r2 = r2 - r8;
                        r10 = r2 - r4;
                        r2 = 0.001;
                        if(!(r4 < r2)) { _fun4341_ip = 153; continue _fun4341 }
case 151:
                        r4 = 0;
case 153:
                        if(!(r10 < r2)) { _fun4341_ip = 159; continue _fun4341 }
case 157:
                        r10 = 0;
case 159:
                        r5 = null;
                        r14 = r13 != r5;
                        r2 = 2;
                        r3 = r2;
                        if(!r14) { _fun4341_ip = 178; continue _fun4341 }
case 174:
                        r3 = r13 * r8;
case 178:
                        r13 = r11 != r5;
                        if(!r13) { _fun4341_ip = 189; continue _fun4341 }
case 185:
                        r2 = r11 * r8;
case 189:
                        r3 = r4 <= r3;
                        r2 = r10 <= r2;
                        if(!r9) { _fun4341_ip = 295; continue _fun4341 }
case 200:
                        r8 = r1.state;
                        r8 = r8.cellsAroundViewport;
                        r11 = r8.last;
                        r8 = undefined;
                        r12 = r7.bind(r8)(r12);
                        r7 = 1;
                        r7 = r12 - r7;
                        if(!(r11 === r7)) { _fun4341_ip = 295; continue _fun4341 }
case 234:
                        if(!r2) { _fun4341_ip = 295; continue _fun4341 }
case 237:
                        r11 = r1._listMetrics;
                        r7 = r11.getContentLength;
                        r11 = r7.bind(r11)();
                        r7 = r1._sentEndForContentLength;
                        if(!(r11 !== r7)) { _fun4341_ip = 295; continue _fun4341 }
case 262:
                        r11 = r1._listMetrics;
                        r7 = r11.getContentLength;
                        r7 = r7.bind(r11)();
                        r1['_sentEndForContentLength'] = r7;
                        r7 = {};
                        r7['distanceFromEnd'] = r10;
                        r7 = r9.bind(r8)(r7);
case 295:
                        if(!(r6 != r5)) { _fun4341_ip = 382; continue _fun4341 }
case 299:
                        r5 = r1.state;
                        r5 = r5.cellsAroundViewport;
                        r5 = r5.first;
                        if(!(r5 === r0)) { _fun4341_ip = 382; continue _fun4341 }
case 319:
                        if(!r3) { _fun4341_ip = 382; continue _fun4341 }
case 322:
                        r7 = r1._listMetrics;
                        r5 = r7.getContentLength;
                        r7 = r5.bind(r7)();
                        r5 = r1._sentStartForContentLength;
                        if(!(r7 !== r5)) { _fun4341_ip = 382; continue _fun4341 }
case 347:
                        r7 = r1._listMetrics;
                        r5 = r7.getContentLength;
                        r5 = r5.bind(r7)();
                        r1['_sentStartForContentLength'] = r5;
                        r5 = {};
                        r5['distanceFromStart'] = r4;
                        r4 = undefined;
                        r4 = r6.bind(r4)(r5);
case 382:
                        if(r3) { _fun4341_ip = 391; continue _fun4341 }
case 385:
                        r1['_sentStartForContentLength'] = r0;
case 391:
                        if(r2) { _fun4341_ip = 400; continue _fun4341 }
case 394:
                        r1['_sentEndForContentLength'] = r0;
case 400:
                        r0 = undefined;
                        return r0;
case 404:
                        r0 = undefined;
                        return r0;
case 408:
                        r0 = undefined;
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[30] = r0;
                r0 = {};
                r5 = '_maybeScrollToInitialScrollIndex';
                r0['key'] = r5;
                r5 = function(a0, a1) { // Original name: _maybeScrollToInitialScrollIndex, environment: r6
                    _fun4342: for(var _fun4342_ip = 0; ; ) switch(_fun4342_ip) {
case 0:
                        r1 = this;
                        r0 = a0;
                        r3 = 0;
                        if(!(r0 > r3)) { _fun4342_ip = 213; continue _fun4342 }
case 14:
                        r0 = a1;
                        if(!(r0 > r3)) { _fun4342_ip = 213; continue _fun4342 }
case 24:
                        r0 = r1.props;
                        r0 = r0.initialScrollIndex;
                        r2 = null;
                        if(!(r0 != r2)) { _fun4342_ip = 213; continue _fun4342 }
case 44:
                        r0 = r1.props;
                        r0 = r0.initialScrollIndex;
                        if(!(r0 > r3)) { _fun4342_ip = 213; continue _fun4342 }
case 62:
                        r0 = r1._hasTriggeredInitialScrollToIndex;
                        if(r0) { _fun4342_ip = 213; continue _fun4342 }
case 74:
                        r0 = r1.props;
                        r0 = r0.contentOffset;
                        if(!(r0 == r2)) { _fun4342_ip = 205; continue _fun4342 }
case 89:
                        r0 = r1.props;
                        r2 = r0.initialScrollIndex;
                        r4 = r1.props;
                        r3 = r4.getItemCount;
                        r0 = r1.props;
                        r0 = r0.data;
                        r0 = r3.bind(r4)(r0);
                        if(!(!(r2 < r0))) { _fun4342_ip = 151; continue _fun4342 }
case 129:
                        r2 = r1.scrollToEnd;
                        r0 = {};
                        r3 = false;
                        r0['animated'] = r3;
                        r0 = r2.bind(r1)(r0);
                        _fun4342_ip = 205; continue _fun4342;
case 151:
                        r2 = r1.scrollToIndex;
                        r0 = {};
                        r3 = false;
                        r0['animated'] = r3;
                        r3 = _closure1_slot18;
                        r5 = r3.default;
                        r3 = r1.props;
                        r4 = r3.initialScrollIndex;
                        r3 = undefined;
                        r3 = r5.bind(r3)(r4);
                        r0['index'] = r3;
                        r0 = r2.bind(r1)(r0);
case 205:
                        r0 = true;
                        r1['_hasTriggeredInitialScrollToIndex'] = r0;
case 213:
                        r0 = undefined;
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[31] = r0;
                r0 = {};
                r5 = 'unstable_onScroll';
                r0['key'] = r5;
                r5 = function(a0) { // Original name: unstable_onScroll, environment: r6
                    r2 = this;
                    r1 = r2._onScroll;
                    r0 = a0;
                    r0 = r1.bind(r2)(r0);
                    r0 = undefined;
                    return r0;
                };
                r0['value'] = r5;
                r1[32] = r0;
                r0 = {};
                r5 = '_offsetFromScrollEvent';
                r0['key'] = r5;
                r5 = function(a0) { // Original name: _offsetFromScrollEvent, environment: r6
                    _fun4344: for(var _fun4344_ip = 0; ; ) switch(_fun4344_ip) {
case 0:
                        r4 = this;
                        r0 = a0;
                        r0 = r0.nativeEvent;
                        r2 = r0.contentOffset;
                        r1 = r0.contentSize;
                        r3 = r0.layoutMeasurement;
                        r0 = r4._orientation;
                        r0 = r0.bind(r4)();
                        r5 = r0.horizontal;
                        r0 = r0.rtl;
                        if(!r5) { _fun4344_ip = 55; continue _fun4344 }
case 52:
                        if(r0) { _fun4344_ip = 68; continue _fun4344 }
case 55:
                        r0 = r4._selectOffset;
                        r0 = r0.bind(r4)(r2);
                        return r0;
case 68:
                        r0 = r4._selectLength;
                        r1 = r0.bind(r4)(r1);
                        r0 = r4._selectOffset;
                        r2 = r0.bind(r4)(r2);
                        r0 = r4._selectLength;
                        r0 = r0.bind(r4)(r3);
                        r0 = r2 + r0;
                        r0 = r1 - r0;
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[33] = r0;
                r0 = {};
                r5 = '_scheduleCellsToRenderUpdate';
                r0['key'] = r5;
                r5 = function() { // Original name: _scheduleCellsToRenderUpdate, environment: r6
                    _fun4345: for(var _fun4345_ip = 0; ; ) switch(_fun4345_ip) {
case 0:
                        r1 = this;
                        var _closure3_slot0 = r1;
                        r3 = r1._listMetrics;
                        r2 = r3.getAverageCellLength;
                        r3 = r2.bind(r3)();
                        r2 = 0;
                        if(!(!(r3 > r2))) { _fun4345_ip = 46; continue _fun4345 }
case 29:
                        r2 = r1.props;
                        r3 = r2.getItemLayout;
                        r2 = null;
                        if(!(r3 != r2)) { _fun4345_ip = 129; continue _fun4345 }
case 46:
                        r2 = r1._shouldRenderWithPriority;
                        r2 = r2.bind(r1)();
                        if(!r2) { _fun4345_ip = 129; continue _fun4345 }
case 59:
                        r2 = r1._hiPriInProgress;
                        if(r2) { _fun4345_ip = 129; continue _fun4345 }
case 68:
                        r2 = true;
                        r1['_hiPriInProgress'] = r2;
                        r3 = r1._updateCellsToRenderTimeoutID;
                        r2 = null;
                        if(!(r3 != r2)) { _fun4345_ip = 115; continue _fun4345 }
case 88:
                        r3 = global;
                        r5 = r3.clearTimeout;
                        r4 = r1._updateCellsToRenderTimeoutID;
                        r3 = undefined;
                        r3 = r5.bind(r3)(r4);
                        r1['_updateCellsToRenderTimeoutID'] = r2;
case 115:
                        r2 = r1._updateCellsToRender;
                        r2 = r2.bind(r1)();
                        r2 = undefined;
                        return r2;
case 129:
                        r2 = r1._updateCellsToRenderTimeoutID;
                        r3 = null;
                        if(!(r2 == r3)) { _fun4345_ip = 192; continue _fun4345 }
case 141:
                        r2 = global;
                        r4 = r2.setTimeout;
                        r2 = r1.props;
                        r2 = r2.updateCellsBatchingPeriod;
                        r5 = r2 != r3;
                        r3 = 50;
                        if(!r5) { _fun4345_ip = 173; continue _fun4345 }
case 170:
                        r3 = r2;
case 173:
                        r2 = undefined;
                        r0 = function() { // Environment: r0
                            r1 = _closure3_slot0;
                            r0 = null;
                            r1['_updateCellsToRenderTimeoutID'] = r0;
                            r0 = r1._updateCellsToRender;
                            r0 = r0.bind(r1)();
                            r0 = undefined;
                            return r0;
                        };
                        r0 = r4.bind(r2)(r0, r3);
                        r1['_updateCellsToRenderTimeoutID'] = r0;
case 192:
                        r0 = undefined;
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[34] = r0;
                r0 = {};
                r5 = '_shouldRenderWithPriority';
                r0['key'] = r5;
                r5 = function() { // Original name: _shouldRenderWithPriority, environment: r6
                    _fun4347: for(var _fun4347_ip = 0; ; ) switch(_fun4347_ip) {
case 0:
                        r4 = this;
                        r0 = r4.state;
                        r0 = r0.cellsAroundViewport;
                        r14 = r0.first;
                        r11 = r0.last;
                        r0 = r4._scrollMetrics;
                        r2 = r0.offset;
                        r7 = r0.visibleLength;
                        r8 = r0.velocity;
                        r3 = r4.props;
                        r1 = r3.getItemCount;
                        r0 = r4.props;
                        r0 = r0.data;
                        r12 = r1.bind(r3)(r0);
                        r1 = _closure1_slot0;
                        r5 = _closure1_slot1;
                        r0 = 22;
                        r9 = r5[r0];
                        r6 = undefined;
                        r9 = r1.bind(r6)(r9);
                        r10 = r9.onStartReachedThresholdOrDefault;
                        r9 = r4.props;
                        r9 = r9.onStartReachedThreshold;
                        r15 = r10.bind(r6)(r9);
                        r0 = r5[r0];
                        r0 = r1.bind(r6)(r0);
                        r1 = r0.onEndReachedThresholdOrDefault;
                        r0 = r4.props;
                        r0 = r0.onEndReachedThreshold;
                        r5 = r1.bind(r6)(r0);
                        r1 = 0;
                        r0 = r14 > r1;
                        r10 = false;
                        if(!r0) { _fun4347_ip = 229; continue _fun4347 }
case 158:
                        r13 = r4._listMetrics;
                        r9 = r13.getCellMetricsApprox;
                        r0 = r4.props;
                        r0 = r9.bind(r13)(r14, r0);
                        r0 = r0.offset;
                        r14 = r2 - r0;
                        r0 = r14 < r1;
                        if(r0) { _fun4347_ip = 226; continue _fun4347 }
case 196:
                        r9 = -2;
                        r9 = r8 < r9;
                        if(!r9) { _fun4347_ip = 223; continue _fun4347 }
case 209:
                        r13 = _closure1_slot29;
                        r13 = r13.bind(r6)(r15, r7);
                        r9 = r14 < r13;
case 223:
                        r0 = r9;
case 226:
                        r10 = r0;
case 229:
                        r0 = r10;
                        if(r10) { _fun4347_ip = 328; continue _fun4347 }
case 235:
                        r0 = r10;
                        if(!(r11 >= r1)) { _fun4347_ip = 328; continue _fun4347 }
case 242:
                        r9 = 1;
                        r9 = r12 - r9;
                        r0 = r10;
                        if(!(r11 < r9)) { _fun4347_ip = 328; continue _fun4347 }
case 256:
                        r10 = r4._listMetrics;
                        r9 = r10.getCellMetricsApprox;
                        r4 = r4.props;
                        r4 = r9.bind(r10)(r11, r4);
                        r4 = r4.offset;
                        r2 = r2 + r7;
                        r4 = r4 - r2;
                        r1 = r4 < r1;
                        if(r1) { _fun4347_ip = 325; continue _fun4347 }
case 298:
                        r2 = 2;
                        r2 = r8 > r2;
                        if(!r2) { _fun4347_ip = 322; continue _fun4347 }
case 308:
                        r3 = _closure1_slot29;
                        r3 = r3.bind(r6)(r5, r7);
                        r2 = r4 < r3;
case 322:
                        r1 = r2;
case 325:
                        r0 = r1;
case 328:
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[35] = r0;
                r0 = {};
                r5 = 'unstable_onScrollBeginDrag';
                r0['key'] = r5;
                r5 = function(a0) { // Original name: unstable_onScrollBeginDrag, environment: r6
                    r2 = this;
                    r1 = r2._onScrollBeginDrag;
                    r0 = a0;
                    r0 = r1.bind(r2)(r0);
                    r0 = undefined;
                    return r0;
                };
                r0['value'] = r5;
                r1[36] = r0;
                r0 = {};
                r5 = 'unstable_onScrollEndDrag';
                r0['key'] = r5;
                r5 = function(a0) { // Original name: unstable_onScrollEndDrag, environment: r6
                    r2 = this;
                    r1 = r2._onScrollEndDrag;
                    r0 = a0;
                    r0 = r1.bind(r2)(r0);
                    r0 = undefined;
                    return r0;
                };
                r0['value'] = r5;
                r1[37] = r0;
                r0 = {};
                r5 = 'unstable_onMomentumScrollBegin';
                r0['key'] = r5;
                r5 = function(a0) { // Original name: unstable_onMomentumScrollBegin, environment: r6
                    r2 = this;
                    r1 = r2._onMomentumScrollBegin;
                    r0 = a0;
                    r0 = r1.bind(r2)(r0);
                    r0 = undefined;
                    return r0;
                };
                r0['value'] = r5;
                r1[38] = r0;
                r0 = {};
                r5 = 'unstable_onMomentumScrollEnd';
                r0['key'] = r5;
                r5 = function(a0) { // Original name: unstable_onMomentumScrollEnd, environment: r6
                    r2 = this;
                    r1 = r2._onMomentumScrollEnd;
                    r0 = a0;
                    r0 = r1.bind(r2)(r0);
                    r0 = undefined;
                    return r0;
                };
                r0['value'] = r5;
                r1[39] = r0;
                r0 = {};
                r5 = '__getListMetrics';
                r0['key'] = r5;
                r5 = function() { // Original name: __getListMetrics, environment: r6
                    r0 = this;
                    r0 = r0._listMetrics;
                    return r0;
                };
                r0['value'] = r5;
                r1[40] = r0;
                r0 = {};
                r5 = '_updateViewableItems';
                r0['key'] = r5;
                r5 = function(a0, a1) { // Original name: _updateViewableItems, environment: r6
                    _fun4353: for(var _fun4353_ip = 0; ; ) switch(_fun4353_ip) {
case 0:
                        r1 = this;
                        r2 = a0;
                        var _closure3_slot0 = r2;
                        r2 = a1;
                        var _closure3_slot1 = r2;
                        var _closure3_slot2 = r1;
                        r2 = r1.state;
                        r3 = r2.pendingScrollUpdateCount;
                        r2 = 0;
                        if(!(!(r3 > r2))) { _fun4353_ip = 64; continue _fun4353 }
case 39:
                        r2 = r1._viewabilityTuples;
                        r1 = r2.forEach;
                        r0 = function(a0) { // Environment: r0
                            r1 = a0;
                            r8 = r1.viewabilityHelper;
                            r7 = r8.onUpdate;
                            r15 = _closure3_slot0;
                            r2 = _closure3_slot2;
                            r3 = r2._scrollMetrics;
                            r14 = r3.offset;
                            r3 = r2._scrollMetrics;
                            r13 = r3.visibleLength;
                            r12 = r2._listMetrics;
                            r11 = r2._createViewToken;
                            r10 = r1.onViewableItemsChanged;
