                if(!r4) { _fun3882_ip = 46; continue _fun3882 }
case 31:
                r4 = arguments[r2];
                r1 = r6;
                if(!(r4 !== r5)) { _fun3882_ip = 46; continue _fun3882 }
case 42:
                r1 = arguments[r2];
case 46:
                var _closure2_slot0 = r1;
                r0 = function(a0) { // Environment: r0
                    r3 = a0;
                    r1 = r3 * r3;
                    r4 = _closure2_slot0;
                    r2 = 1;
                    r2 = r4 + r2;
                    r2 = r2 * r3;
                    r0 = _closure2_slot0;
                    r0 = r2 - r0;
                    r0 = r1 * r0;
                    return r0;
                };
                return r0;
            }
        };
        r1['back'] = r4;
        r4 = function(a0) { // Original name: bounce, environment: r3
            _fun3884: for(var _fun3884_ip = 0; ; ) switch(_fun3884_ip) {
case 0:
                r1 = a0;
                r0 = 0.36363636363636365;
                if(!(!(r1 < r0))) { _fun3884_ip = 192; continue _fun3884 }
case 20:
                r0 = 0.7272727272727273;
                if(!(!(r1 < r0))) { _fun3884_ip = 144; continue _fun3884 }
case 34:
                r0 = 0.9090909090909091;
                if(!(!(r1 < r0))) { _fun3884_ip = 96; continue _fun3884 }
case 48:
                r0 = 0.9545454545454546;
                r2 = r1 - r0;
                r0 = 7.5625;
                r0 = r0 * r2;
                r2 = r0 * r2;
                r0 = 0.984375;
                r0 = r2 + r0;
                return r0;
case 96:
                r0 = 0.8181818181818182;
                r2 = r1 - r0;
                r0 = 7.5625;
                r0 = r0 * r2;
                r2 = r0 * r2;
                r0 = 0.9375;
                r0 = r2 + r0;
                return r0;
case 144:
                r0 = 0.5454545454545454;
                r2 = r1 - r0;
                r0 = 7.5625;
                r0 = r0 * r2;
                r2 = r0 * r2;
                r0 = 0.75;
                r0 = r2 + r0;
                return r0;
case 192:
                r0 = 7.5625;
                r0 = r0 * r1;
                r0 = r0 * r1;
                return r0;
            }
        };
        r1['bounce'] = r4;
        r4 = function(a0, a1, a2, a3) { // Original name: bezier, environment: r3
            r1 = _closure1_slot0;
            r2 = _closure1_slot1;
            r0 = 0;
            r0 = r2[r0];
            r5 = undefined;
            r0 = r1.bind(r5)(r0);
            r4 = r0.default;
            r9 = a0;
            r8 = a1;
            r7 = a2;
            r6 = a3;
            r10 = undefined;
            r0 = r10[r4](r9, r8, r7, r6, r5);
            return r0;
        };
        r1['bezier'] = r4;
        r4 = function(a0) { // Original name: _in, environment: r3
            r0 = a0;
            return r0;
        };
        r1['in'] = r4;
        r4 = function(a0) { // Original name: out, environment: r3
            r1 = a0;
            var _closure2_slot0 = r1;
            r0 = function(a0) { // Environment: r0
                r3 = _closure2_slot0;
                r1 = 1;
                r0 = a0;
                r2 = r1 - r0;
                r0 = undefined;
                r0 = r3.bind(r0)(r2);
                r0 = r1 - r0;
                return r0;
            };
            return r0;
        };
        r1['out'] = r4;
        r4 = function(a0) { // Original name: inOut, environment: r3
            r1 = a0;
            var _closure2_slot0 = r1;
            r0 = function(a0) { // Environment: r0
                _fun3890: for(var _fun3890_ip = 0; ; ) switch(_fun3890_ip) {
case 0:
                    r0 = a0;
                    r1 = 0.5;
                    if(!(!(r0 < r1))) { _fun3890_ip = 55; continue _fun3890 }
case 17:
                    r5 = _closure2_slot0;
                    r2 = 1;
                    r1 = r2 - r0;
                    r4 = undefined;
                    r3 = 2;
                    r1 = r1 * r3;
                    r1 = r5.bind(r4)(r1);
                    r1 = r1 / r3;
                    r1 = r2 - r1;
                    return r1;
case 55:
                    r3 = _closure2_slot0;
                    r1 = 2;
                    r2 = r0 * r1;
                    r0 = undefined;
                    r0 = r3.bind(r0)(r2);
                    r0 = r0 / r1;
                    return r0;
                }
            };
            return r0;
        };
        r1['inOut'] = r4;
        var _closure1_slot3 = r1;
        r2['default'] = r1;
        return r0;
    };
    r6 = 322;
    r5 = [323];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r3 = a5;
        r0 = function(a0, a1) { // Original name: A, environment: r1
            r1 = 3;
            r0 = a1;
            r2 = r1 * r0;
            r0 = a0;
            r1 = r1 * r0;
            r0 = 1;
            r0 = r0 - r2;
            r0 = r0 + r1;
            return r0;
        };
        var _closure1_slot7 = r0;
        r0 = function(a0, a1) { // Original name: B, environment: r1
            r1 = 3;
            r0 = a1;
            r1 = r1 * r0;
            r2 = 6;
            r0 = a0;
            r0 = r2 * r0;
            r0 = r1 - r0;
            return r0;
        };
        var _closure1_slot8 = r0;
        r0 = function(a0) { // Original name: C, environment: r1
            r1 = 3;
            r0 = a0;
            r0 = r1 * r0;
            return r0;
        };
        var _closure1_slot9 = r0;
        r0 = function(a0, a1, a2) { // Original name: calcBezier, environment: r1
            r1 = a0;
            r4 = a1;
            r6 = a2;
            r2 = _closure1_slot7;
            r3 = undefined;
            r2 = r2.bind(r3)(r4, r6);
            r5 = r2 * r1;
            r2 = _closure1_slot8;
            r2 = r2.bind(r3)(r4, r6);
            r2 = r5 + r2;
            r2 = r2 * r1;
            r0 = _closure1_slot9;
            r0 = r0.bind(r3)(r4);
            r0 = r2 + r0;
            r0 = r0 * r1;
            return r0;
        };
        var _closure1_slot10 = r0;
        r0 = function(a0, a1, a2) { // Original name: getSlope, environment: r1
            r5 = a0;
            r4 = a1;
            r6 = a2;
            r0 = _closure1_slot7;
            r3 = undefined;
            r2 = r0.bind(r3)(r4, r6);
            r0 = 3;
            r0 = r0 * r2;
            r0 = r0 * r5;
            r2 = r0 * r5;
            r0 = _closure1_slot8;
            r6 = r0.bind(r3)(r4, r6);
            r0 = 2;
            r0 = r0 * r6;
            r0 = r0 * r5;
            r1 = _closure1_slot9;
            r1 = r1.bind(r3)(r4);
            r0 = r2 + r0;
            r0 = r0 + r1;
            return r0;
        };
        var _closure1_slot11 = r0;
        r0 = function(a0, a1, a2, a3, a4) { // Original name: binarySubdivide, environment: r1
            _fun3897: for(var _fun3897_ip = 0; ; ) switch(_fun3897_ip) {
case 0:
                r12 = a0;
                r11 = a1;
                r10 = a2;
                r9 = a3;
                r8 = a4;
                r7 = 0;
                r5 = global;
                r4 = 2;
                r3 = undefined;
                r2 = 0;
case 29:
                r0 = r10 - r11;
                r0 = r0 / r4;
                r0 = r11 + r0;
                r1 = _closure1_slot10;
                r1 = r1.bind(r3)(r0, r9, r8);
                r17 = r1 - r12;
                r1 = r2;
                r15 = r11;
                r13 = r10;
                r14 = r0;
                if(!(!(r17 > r7))) { _fun3897_ip = 78; continue _fun3897 }
case 72:
                r15 = r0;
                r14 = r13;
case 78:
                r16 = r5.Math;
                r13 = r16.abs;
                r16 = r13.bind(r16)(r17);
                r13 = _closure1_slot2;
                if(!(r16 > r13)) { _fun3897_ip = 120; continue _fun3897 }
case 103:
                r2 = r1 + 1;
                r1 = _closure1_slot3;
                r11 = r15;
                r10 = r14;
                if(r2 < r1) { _fun3897_ip = 29; continue _fun3897 }
case 120:
                return r0;
            }
        };
        var _closure1_slot12 = r0;
        r0 = function(a0, a1, a2, a3) { // Original name: newtonRaphsonIterate, environment: r1
            _fun3898: for(var _fun3898_ip = 0; ; ) switch(_fun3898_ip) {
case 0:
                r10 = a0;
                r4 = a1;
                r9 = a2;
                r8 = a3;
                r0 = _closure1_slot0;
                r6 = 0;
                r0 = r6 < r0;
                r5 = undefined;
                r3 = 0;
                r1 = r4;
                if(!r0) { _fun3898_ip = 93; continue _fun3898 }
case 35:
                r0 = _closure1_slot11;
                r12 = r0.bind(r5)(r4, r9, r8);
                r0 = r4;
                r2 = r3;
                if(!(r12 !== r6)) { _fun3898_ip = 95; continue _fun3898 }
case 56:
                r11 = _closure1_slot10;
                r11 = r11.bind(r5)(r0, r9, r8);
                r11 = r11 - r10;
                r11 = r11 / r12;
                r4 = r0 - r11;
                r3 = r2 + 1;
                r2 = _closure1_slot0;
                r1 = r4;
                if(r3 < r2) { _fun3898_ip = 35; continue _fun3898 }
case 93:
                return r1;
case 95:
                return r0;
            }
        };
        var _closure1_slot13 = r0;
        r0 = global;
        r6 = r0.Object;
        r5 = r6.defineProperty;
        r4 = {};
        r2 = true;
        r4['value'] = r2;
        r2 = '__esModule';
        r2 = r5.bind(r6)(r3, r2, r4);
        r2 = function(a0, a1, a2, a3) { // Original name: bezier, environment: r1
            _fun3899: for(var _fun3899_ip = 0; ; ) switch(_fun3899_ip) {
case 0:
                r7 = a0;
                r2 = a1;
                r6 = a2;
                r1 = a3;
                var _closure2_slot0 = r7;
                var _closure2_slot1 = r2;
                var _closure2_slot2 = r6;
                var _closure2_slot3 = r1;
                r3 = function(a0) { // Original name: getTForX, environment: r0
                    _fun3900: for(var _fun3900_ip = 0; ; ) switch(_fun3900_ip) {
case 0:
                        r5 = a0;
                        r1 = _closure2_slot4;
                        r2 = 1;
                        r1 = r1[r2];
                        r4 = r1 <= r5;
                        r6 = 0;
                        r10 = 10;
                        r8 = 0;
                        r7 = r2;
                        r9 = 0;
                        r3 = r7;
                        if(!r4) { _fun3900_ip = 87; continue _fun3900 }
case 42:
                        r4 = _closure1_slot5;
                        r12 = r8 + r4;
                        r11 = r7 + 1;
                        r9 = r12;
                        r3 = r11;
                        if(!(r11 !== r10)) { _fun3900_ip = 87; continue _fun3900 }
case 63:
                        r4 = _closure2_slot4;
                        r4 = r4[r11];
                        r8 = r12;
                        r7 = r11;
                        r9 = r8;
                        r3 = r7;
                        if(r4 <= r5) { _fun3900_ip = 42; continue _fun3900 }
case 87:
                        r7 = r3 - 1;
                        r3 = _closure2_slot4;
                        r3 = r3[r7];
                        r3 = r5 - r3;
                        r4 = _closure2_slot4;
                        r2 = r7 + r2;
                        r4 = r4[r2];
                        r2 = _closure2_slot4;
                        r2 = r2[r7];
                        r2 = r4 - r2;
                        r3 = r3 / r2;
                        r2 = _closure1_slot5;
                        r2 = r3 * r2;
                        r4 = r9 + r2;
                        r8 = _closure1_slot11;
                        r7 = _closure2_slot0;
                        r2 = _closure2_slot2;
                        r3 = undefined;
                        r2 = r8.bind(r3)(r4, r7, r2);
                        r7 = _closure1_slot1;
                        if(!(!(r2 >= r7))) { _fun3900_ip = 211; continue _fun3900 }
case 171:
                        if(!(r2 !== r6)) { _fun3900_ip = 209; continue _fun3900 }
case 175:
                        r8 = _closure1_slot12;
                        r2 = _closure1_slot5;
                        r15 = r9 + r2;
                        r14 = _closure2_slot0;
                        r13 = _closure2_slot2;
                        r18 = undefined;
                        r17 = r5;
                        r16 = r9;
                        r2 = r18[r8](r17, r16, r15, r14, r13, r12);
                        return r2;
case 209:
                        return r4;
case 211:
                        r2 = _closure1_slot13;
                        r15 = _closure2_slot0;
                        r14 = _closure2_slot2;
                        r18 = undefined;
                        r17 = r5;
                        r16 = r4;
                        r0 = r18[r2](r17, r16, r15, r14, r13);
                        return r0;
                    }
                };
                var _closure2_slot5 = r3;
                r5 = 0;
                if(!(r7 >= r5)) { _fun3899_ip = 60; continue _fun3899 }
case 45:
                r3 = 1;
                if(!(r7 <= r3)) { _fun3899_ip = 60; continue _fun3899 }
case 52:
                if(!(r6 >= r5)) { _fun3899_ip = 60; continue _fun3899 }
case 56:
                if(!(!(r6 <= r3))) { _fun3899_ip = 94; continue _fun3899 }
case 60:
                r3 = global;
                r8 = r3.Error;
                r3 = r8.prototype;
                r4 = Object.create(r3, {constructor: {value: r8}});
                r13 = 'bezier x values must be in [0, 1] range';
                r14 = r4;
                r3 = new r14[r8](r13, r12);
                r3 = r3 instanceof Object ? r3 : r4;
                throw r3;
case 94:
                r3 = _closure1_slot6;
                r8 = global;
                if(r3) { _fun3899_ip = 138; continue _fun3899 }
case 106:
                r10 = r8.Array;
                r13 = _closure1_slot4;
                r9 = r10.prototype;
                r9 = Object.create(r9, {constructor: {value: r10}});
                r14 = r9;
                r3 = new r14[r10](r13, r12);
                r3 = r3 instanceof Object ? r3 : r9;
                _fun3899_ip = 168; continue _fun3899;
case 138:
                r10 = r8.Float32Array;
                r13 = _closure1_slot4;
                r9 = r10.prototype;
                r9 = Object.create(r9, {constructor: {value: r10}});
                r14 = r9;
                r8 = new r14[r10](r13, r12);
                r3 = r8 instanceof Object ? r8 : r9;
case 168:
                var _closure2_slot4 = r3;
                if(!(r7 === r2)) { _fun3899_ip = 180; continue _fun3899 }
case 176:
                if(!(r6 !== r1)) { _fun3899_ip = 229; continue _fun3899 }
case 180:
                r1 = _closure1_slot4;
                r1 = r5 < r1;
                r2 = undefined;
                r5 = 0;
                if(!r1) { _fun3899_ip = 229; continue _fun3899 }
case 195:
                r8 = _closure1_slot10;
                r1 = _closure1_slot5;
                r1 = r5 * r1;
                r1 = r8.bind(r2)(r1, r7, r6);
                r3[r5] = r1;
                r5 = r5 + 1;
                r1 = _closure1_slot4;
                if(r5 < r1) { _fun3899_ip = 195; continue _fun3899 }
case 229:
                r0 = function(a0) { // Original name: BezierEasing, environment: r0
                    _fun3901: for(var _fun3901_ip = 0; ; ) switch(_fun3901_ip) {
case 0:
                        r0 = a0;
                        r2 = _closure2_slot0;
                        r1 = _closure2_slot1;
                        if(!(r2 === r1)) { _fun3901_ip = 30; continue _fun3901 }
case 18:
                        r2 = _closure2_slot2;
                        r1 = _closure2_slot3;
                        if(!(r2 !== r1)) { _fun3901_ip = 82; continue _fun3901 }
case 30:
                        r1 = 0;
                        if(!(r0 !== r1)) { _fun3901_ip = 80; continue _fun3901 }
case 36:
                        r2 = 1;
                        if(!(r0 !== r2)) { _fun3901_ip = 78; continue _fun3901 }
case 43:
                        r7 = _closure1_slot10;
                        r4 = _closure2_slot5;
                        r6 = undefined;
                        r5 = r4.bind(r6)(r0);
                        r4 = _closure2_slot1;
                        r3 = _closure2_slot3;
                        r3 = r7.bind(r6)(r5, r4, r3);
                        return r3;
case 78:
                        return r2;
case 80:
                        return r1;
case 82:
                        return r0;
                    }
                };
                return r0;
            }
        };
        r3['default'] = r2;
        r2 = 4;
        var _closure1_slot0 = r2;
        r2 = 0.001;
        var _closure1_slot1 = r2;
        r2 = 1e-07;
        var _closure1_slot2 = r2;
        r2 = 10;
        var _closure1_slot3 = r2;
        r2 = 11;
        var _closure1_slot4 = r2;
        r2 = 0.1;
        var _closure1_slot5 = r2;
        r0 = r0.Float32Array;
        r2 = typeof r0;
        r0 = 'function';
        r0 = r2 === r0;
        var _closure1_slot6 = r0;
        r0 = undefined;
        return r0;
    };
    r6 = 323;
    r5 = new Array(0);
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r7 = a1;
        r2 = a5;
        r8 = a6;
        r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r1
            _fun3903: for(var _fun3903_ip = 0; ; ) switch(_fun3903_ip) {
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
                r0 = _closure1_slot10;
                r0 = r0.bind(r2)();
                if(r0) { _fun3903_ip = 61; continue _fun3903 }
case 48:
                r0 = r8.apply;
                r0 = r0.bind(r8)(r3, r5);
                _fun3903_ip = 107; continue _fun3903;
case 61:
                r6 = global;
                r7 = r6.Reflect;
                r6 = r7.construct;
                if(r5) { _fun3903_ip = 81; continue _fun3903 }
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
        var _closure1_slot9 = r0;
        r0 = function() { // Original name: _isNativeReflectConstruct, environment: r1
            _fun3904: for(var _fun3904_ip = 0; ; ) switch(_fun3904_ip) {
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
                _fun3904_ip = 74; continue _fun3904;
case 72: // catch_target0
                CatchBlockStart(arg_register=1);
case 74:
                r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                    r0 = _closure2_slot0;
                    r0 = !r0;
                    r0 = !r0;
                    return r0;
                };
                _closure1_slot10 = r1;
                r0 = undefined;
                r0 = r1.bind(r0)();
                return r0;
            }
        };
        var _closure1_slot10 = r0;
        r0 = function(a0, a1, a2, a3) { // Original name: _superPropGet, environment: r1
            _fun3907: for(var _fun3907_ip = 0; ; ) switch(_fun3907_ip) {
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
                if(!r7) { _fun3907_ip = 54; continue _fun3907 }
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
                if(!r2) { _fun3907_ip = 107; continue _fun3907 }
case 88:
                r3 = 'function';
                r2 = typeof r4;
                r0 = r4;
                if(!(r3 === r2)) { _fun3907_ip = 107; continue _fun3907 }
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
        var _closure1_slot11 = r0;
        r0 = 0;
        r3 = r8[r0];
        r0 = undefined;
        r6 = r7.bind(r0)(r3);
        r3 = global;
        r9 = r3.Object;
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
        var _closure1_slot4 = r3;
        r3 = 6;
        r3 = r8[r3];
        r3 = r7.bind(r0)(r3);
        r3 = r6.bind(r0)(r3);
        var _closure1_slot5 = r3;
        r3 = 7;
        r3 = r8[r3];
        r3 = r7.bind(r0)(r3);
        r3 = r6.bind(r0)(r3);
        var _closure1_slot6 = r3;
        r3 = 8;
        r3 = r8[r3];
        r3 = r7.bind(r0)(r3);
        r3 = r6.bind(r0)(r3);
        r5 = 9;
        r5 = r8[r5];
        r5 = r7.bind(r0)(r5);
        r5 = r6.bind(r0)(r5);
        var _closure1_slot7 = r5;
        var _closure1_slot8 = r4;
        r3 = r3.default;
        r1 = function(a0) { // Environment: r1
            r3 = function(a0, a1) { // Original name: AnimatedValueXY, environment: r5
                _fun3910: for(var _fun3910_ip = 0; ; ) switch(_fun3910_ip) {
case 0:
                    r2 = a0;
                    r1 = a1;
                    r6 = this;
                    r0 = _closure1_slot0;
                    r0 = r0.default;
                    r5 = _closure2_slot0;
                    r7 = undefined;
                    r0 = r0.bind(r7)(r6, r5);
                    r4 = _closure1_slot9;
                    r0 = new Array(1);
                    r0[0] = r1;
                    r0 = r4.bind(r7)(r6, r5, r0);
                    if(r2) { _fun3910_ip = 68; continue _fun3910 }
case 58:
                    r2 = {'x': 0, 'y': 0};
case 68:
                    r4 = r2.x;
                    r4 = typeof r4;
                    r5 = 'number';
                    if(!(r4 === r5)) { _fun3910_ip = 96; continue _fun3910 }
case 84:
                    r4 = r2.y;
                    r4 = typeof r4;
                    if(!(r4 !== r5)) { _fun3910_ip = 178; continue _fun3910 }
case 96:
                    r4 = _closure1_slot7;
                    r6 = r4.default;
                    r5 = r2.x;
                    r4 = _closure1_slot6;
                    r4 = r4.default;
                    r5 = r5 instanceof r4;
                    if(!r5) { _fun3910_ip = 144; continue _fun3910 }
case 126:
                    r8 = r2.y;
                    r4 = _closure1_slot6;
                    r4 = r4.default;
                    r5 = r8 instanceof r4;
case 144:
                    r4 = 'AnimatedValueXY must be initialized with an object of numbers or AnimatedValues.';
                    r4 = r6.bind(r7)(r5, r4);
                    r4 = r2.x;
                    r0['x'] = r4;
                    r4 = r2.y;
                    r0['y'] = r4;
                    _fun3910_ip = 254; continue _fun3910;
case 178:
                    r3 = _closure1_slot6;
                    r6 = r3.default;
                    r11 = r2.x;
                    r5 = r6.prototype;
                    r5 = Object.create(r5, {constructor: {value: r6}});
                    r12 = r5;
                    r4 = new r12[r6](r11, r10);
                    r4 = r4 instanceof Object ? r4 : r5;
                    r0['x'] = r4;
                    r4 = r3.default;
                    r11 = r2.y;
                    r3 = r4.prototype;
                    r3 = Object.create(r3, {constructor: {value: r4}});
                    r12 = r3;
                    r2 = new r12[r4](r11, r10);
                    r2 = r2 instanceof Object ? r2 : r3;
                    r0['y'] = r2;
case 254:
                    r2 = {};
                    r0['_listeners'] = r2;
                    if(!r1) { _fun3910_ip = 282; continue _fun3910 }
case 265:
                    r1 = r1.useNativeDriver;
                    if(!r1) { _fun3910_ip = 282; continue _fun3910 }
case 273:
                    r1 = r0.__makeNative;
                    r1 = r1.bind(r0)();
case 282:
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
            r0 = 'setValue';
            r4['key'] = r0;
            r0 = function(a0) { // Original name: setValue, environment: r5
                r0 = a0;
                r1 = this;
                r4 = r1.x;
                r3 = r4.setValue;
                r2 = r0.x;
                r2 = r3.bind(r4)(r2);
                r2 = r1.y;
                r1 = r2.setValue;
                r0 = r0.y;
                r0 = r1.bind(r2)(r0);
                r0 = undefined;
                return r0;
            };
            r4['value'] = r0;
            r0 = new Array(15);
            r0[0] = r4;
            r4 = {};
            r6 = 'setOffset';
            r4['key'] = r6;
            r6 = function(a0) { // Original name: setOffset, environment: r5
                r0 = a0;
                r1 = this;
                r4 = r1.x;
                r3 = r4.setOffset;
                r2 = r0.x;
                r2 = r3.bind(r4)(r2);
                r2 = r1.y;
                r1 = r2.setOffset;
                r0 = r0.y;
                r0 = r1.bind(r2)(r0);
                r0 = undefined;
                return r0;
            };
            r4['value'] = r6;
            r0[1] = r4;
            r4 = {};
            r6 = 'flattenOffset';
            r4['key'] = r6;
            r6 = function() { // Original name: flattenOffset, environment: r5
                r0 = this;
                r2 = r0.x;
                r1 = r2.flattenOffset;
                r1 = r1.bind(r2)();
                r1 = r0.y;
                r0 = r1.flattenOffset;
                r0 = r0.bind(r1)();
                r0 = undefined;
                return r0;
            };
            r4['value'] = r6;
            r0[2] = r4;
            r4 = {};
            r6 = 'extractOffset';
            r4['key'] = r6;
            r6 = function() { // Original name: extractOffset, environment: r5
                r0 = this;
                r2 = r0.x;
                r1 = r2.extractOffset;
                r1 = r1.bind(r2)();
                r1 = r0.y;
                r0 = r1.extractOffset;
                r0 = r0.bind(r1)();
                r0 = undefined;
                return r0;
            };
            r4['value'] = r6;
            r0[3] = r4;
            r4 = {};
            r6 = '__getValue';
            r4['key'] = r6;
            r6 = function() { // Original name: __getValue, environment: r5
                r1 = this;
                r0 = {};
                r3 = r1.x;
                r2 = r3.__getValue;
                r2 = r2.bind(r3)();
                r0['x'] = r2;
                r2 = r1.y;
                r1 = r2.__getValue;
                r1 = r1.bind(r2)();
                r0['y'] = r1;
                return r0;
            };
            r4['value'] = r6;
            r0[4] = r4;
            r4 = {};
            r6 = 'resetAnimation';
            r4['key'] = r6;
            r6 = function(a0) { // Original name: resetAnimation, environment: r5
                _fun3916: for(var _fun3916_ip = 0; ; ) switch(_fun3916_ip) {
case 0:
                    r2 = a0;
                    r1 = this;
                    r3 = r1.x;
                    r0 = r3.resetAnimation;
                    r0 = r0.bind(r3)();
                    r3 = r1.y;
                    r0 = r3.resetAnimation;
                    r0 = r0.bind(r3)();
                    if(!r2) { _fun3916_ip = 55; continue _fun3916 }
case 39:
                    r0 = r1.__getValue;
                    r1 = r0.bind(r1)();
                    r0 = undefined;
                    r0 = r2.bind(r0)(r1);
case 55:
                    r0 = undefined;
                    return r0;
                }
            };
            r4['value'] = r6;
            r0[5] = r4;
            r4 = {};
            r6 = 'stopAnimation';
            r4['key'] = r6;
            r6 = function(a0) { // Original name: stopAnimation, environment: r5
                _fun3917: for(var _fun3917_ip = 0; ; ) switch(_fun3917_ip) {
case 0:
                    r2 = a0;
                    r1 = this;
                    r3 = r1.x;
                    r0 = r3.stopAnimation;
                    r0 = r0.bind(r3)();
                    r3 = r1.y;
                    r0 = r3.stopAnimation;
                    r0 = r0.bind(r3)();
                    if(!r2) { _fun3917_ip = 55; continue _fun3917 }
case 39:
                    r0 = r1.__getValue;
                    r1 = r0.bind(r1)();
                    r0 = undefined;
                    r0 = r2.bind(r0)(r1);
case 55:
                    r0 = undefined;
                    return r0;
                }
            };
            r4['value'] = r6;
            r0[6] = r4;
            r4 = {};
            r6 = 'addListener';
            r4['key'] = r6;
            r6 = function(a0) { // Original name: addListener, environment: r5
                r3 = this;
                r0 = a0;
                var _closure3_slot0 = r0;
                var _closure3_slot1 = r3;
                r0 = global;
                r4 = r0.String;
                r0 = _closure1_slot8;
                r2 = parseFloat(r0);
                r0 = r2 + 1;
                _closure1_slot8 = r0;
                r0 = undefined;
                r0 = r4.bind(r0)(r2);
                r5 = function(a0) { // Original name: jointCallback, environment: r1
                    r0 = a0;
                    r0 = r0.value;
                    r2 = _closure3_slot0;
                    r1 = _closure3_slot1;
                    r0 = r1.__getValue;
                    r1 = r0.bind(r1)();
                    r0 = undefined;
                    r1 = r2.bind(r0)(r1);
                    return r0;
                };
                r2 = r3._listeners;
                r1 = {};
                r6 = r3.x;
                r4 = r6.addListener;
                r4 = r4.bind(r6)(r5);
                r1['x'] = r4;
                r4 = r3.y;
                r3 = r4.addListener;
                r3 = r3.bind(r4)(r5);
                r1['y'] = r3;
                r2[r0] = r1;
                return r0;
            };
            r4['value'] = r6;
            r0[7] = r4;
            r4 = {};
            r6 = 'removeListener';
            r4['key'] = r6;
            r6 = function(a0) { // Original name: removeListener, environment: r5
                r1 = a0;
                r0 = this;
                r4 = r0.x;
                r3 = r4.removeListener;
                r2 = r0._listeners;
                r2 = r2[r1];
                r2 = r2.x;
                r2 = r3.bind(r4)(r2);
                r4 = r0.y;
                r3 = r4.removeListener;
                r2 = r0._listeners;
                r2 = r2[r1];
                r2 = r2.y;
                r2 = r3.bind(r4)(r2);
                r0 = r0._listeners;
                r0 = delete r0[r1];
                r0 = undefined;
                return r0;
            };
            r4['value'] = r6;
            r0[8] = r4;
            r4 = {};
            r6 = 'removeAllListeners';
            r4['key'] = r6;
            r6 = function() { // Original name: removeAllListeners, environment: r5
                r1 = this;
                r2 = r1.x;
                r0 = r2.removeAllListeners;
                r0 = r0.bind(r2)();
                r2 = r1.y;
                r0 = r2.removeAllListeners;
                r0 = r0.bind(r2)();
                r0 = {};
                r1['_listeners'] = r0;
                r0 = undefined;
                return r0;
            };
            r4['value'] = r6;
            r0[9] = r4;
            r4 = {};
            r6 = 'getLayout';
            r4['key'] = r6;
            r6 = function() { // Original name: getLayout, environment: r5
                r1 = this;
                r0 = {};
                r2 = r1.x;
                r0['left'] = r2;
                r1 = r1.y;
                r0['top'] = r1;
                return r0;
            };
            r4['value'] = r6;
            r0[10] = r4;
            r4 = {};
            r6 = 'getTranslateTransform';
            r4['key'] = r6;
            r6 = function() { // Original name: getTranslateTransform, environment: r5
                r2 = this;
                r1 = {};
                r0 = r2.x;
                r1['translateX'] = r0;
                r0 = new Array(2);
                r0[0] = r1;
                r1 = {};
                r2 = r2.y;
                r1['translateY'] = r2;
                r0[1] = r1;
                return r0;
            };
            r4['value'] = r6;
            r0[11] = r4;
            r4 = {};
            r6 = '__attach';
            r4['key'] = r6;
            r6 = function() { // Original name: __attach, environment: r5
                r5 = this;
                r1 = r5.x;
                r0 = r1.__addChild;
                r0 = r0.bind(r1)(r5);
                r1 = r5.y;
                r0 = r1.__addChild;
                r0 = r0.bind(r1)(r5);
                r4 = _closure1_slot11;
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
            r0[12] = r4;
            r4 = {};
            r6 = '__detach';
            r4['key'] = r6;
            r6 = function() { // Original name: __detach, environment: r5
                r5 = this;
                r1 = r5.x;
                r0 = r1.__removeChild;
                r0 = r0.bind(r1)(r5);
                r1 = r5.y;
                r0 = r1.__removeChild;
                r0 = r0.bind(r1)(r5);
                r4 = _closure1_slot11;
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
            r0[13] = r4;
            r4 = {};
            r6 = '__makeNative';
            r4['key'] = r6;
            r5 = function(a0) { // Original name: __makeNative, environment: r5
                r3 = a0;
                r6 = this;
                r1 = r6.x;
                r0 = r1.__makeNative;
                r0 = r0.bind(r1)(r3);
                r1 = r6.y;
                r0 = r1.__makeNative;
                r0 = r0.bind(r1)(r3);
                r5 = _closure1_slot11;
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
            r4['value'] = r5;
            r0[14] = r4;
            r0 = r1.bind(r2)(r3, r0);
            return r0;
        };
        r1 = r1.bind(r0)(r3);
        r2['default'] = r1;
        return r0;
    };
    r6 = 324;
    r5 = [1, 12, 13, 23, 25, 26, 28, 317, 313, 20];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun3927: for(var _fun3927_ip = 0; ; ) switch(_fun3927_ip) {
case 0:
            r6 = a1;
            r2 = a5;
            r7 = a6;
            r0 = a0;
            var _closure1_slot0 = r0;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun3928: for(var _fun3928_ip = 0; ; ) switch(_fun3928_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun3928_ip = 104; continue _fun3928 }
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
                        _fun3929: for(var _fun3929_ip = 0; ; ) switch(_fun3929_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun3929_ip = 15; continue _fun3929 }
case 9:
                            r0 = _closure2_slot0;
                            _fun3929_ip = 19; continue _fun3929;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot9 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot9 = r0;
            r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r1
                _fun3930: for(var _fun3930_ip = 0; ; ) switch(_fun3930_ip) {
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
                    r0 = _closure1_slot11;
                    r0 = r0.bind(r2)();
                    if(r0) { _fun3930_ip = 61; continue _fun3930 }
case 48:
                    r0 = r8.apply;
                    r0 = r0.bind(r8)(r3, r5);
                    _fun3930_ip = 107; continue _fun3930;
case 61:
                    r6 = global;
                    r7 = r6.Reflect;
                    r6 = r7.construct;
                    if(r5) { _fun3930_ip = 81; continue _fun3930 }
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
            var _closure1_slot10 = r0;
            r0 = function() { // Original name: _isNativeReflectConstruct, environment: r1
                _fun3931: for(var _fun3931_ip = 0; ; ) switch(_fun3931_ip) {
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
                    _fun3931_ip = 74; continue _fun3931;
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
            r0 = function(a0, a1, a2, a3) { // Original name: _superPropGet, environment: r1
                _fun3934: for(var _fun3934_ip = 0; ; ) switch(_fun3934_ip) {
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
                    if(!r7) { _fun3934_ip = 54; continue _fun3934 }
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
                    if(!r2) { _fun3934_ip = 107; continue _fun3934 }
case 88:
                    r3 = 'function';
                    r2 = typeof r4;
                    r0 = r4;
                    if(!(r3 === r2)) { _fun3934_ip = 107; continue _fun3934 }
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
            var _closure1_slot12 = r0;
            r0 = 0;
            r3 = r7[r0];
            r0 = undefined;
            r5 = r6.bind(r0)(r3);
            r19 = global;
            r9 = r19.Object;
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
            var _closure1_slot5 = r3;
            r3 = 7;
            r3 = r7[r3];
            r3 = r6.bind(r0)(r3);
            r3 = r5.bind(r0)(r3);
            var _closure1_slot6 = r3;
            r3 = 8;
            r3 = r7[r3];
            r3 = r6.bind(r0)(r3);
            r3 = r5.bind(r0)(r3);
            r3 = 9;
            r3 = r7[r3];
            r8 = r6.bind(r0)(r3);
            if(!r8) { _fun3927_ip = 294; continue _fun3927 }
case 280:
            r4 = r8.__esModule;
            r3 = r8;
            if(r4) { _fun3927_ip = 561; continue _fun3927 }
case 294:
            r18 = null;
            if(!(r18 !== r8)) { _fun3927_ip = 552; continue _fun3927 }
case 303:
            r9 = typeof r8;
            r4 = 'object';
            if(!(r4 !== r9)) { _fun3927_ip = 325; continue _fun3927 }
case 314:
            r4 = 'function';
            if(!(r4 === r9)) { _fun3927_ip = 552; continue _fun3927 }
case 325:
            r4 = _closure1_slot9;
            r9 = r4.bind(r0)(r0);
            if(!r9) { _fun3927_ip = 353; continue _fun3927 }
case 337:
            r4 = r9.has;
            r4 = r4.bind(r9)(r8);
            if(r4) { _fun3927_ip = 540; continue _fun3927 }
case 353:
            r4 = Object.create(r18);
            r10 = r19.Object;
            r17 = r10.defineProperty;
            if(!r17) { _fun3927_ip = 381; continue _fun3927 }
case 370:
            r10 = r19.Object;
            r17 = r10.getOwnPropertyDescriptor;
case 381:
            r15 = r8;
            r11 = 'default';
            r10 = undefined;
            for(r12 in r15)
case 398:
            {
case 407:
                r23 = r12;
                if(r11 === r23) { _fun3927_ip = 398; continue _fun3927 }
case 414:
                r20 = {};
                r21 = r20.hasOwnProperty;
                r20 = r21.call;
                r20 = r20.bind(r21)(r8, r23);
                if(!r20) { _fun3927_ip = 398; continue _fun3927 }
case 435:
                r20 = null;
                if(!r17) { _fun3927_ip = 457; continue _fun3927 }
case 440:
                r22 = r19.Object;
                r21 = r22.getOwnPropertyDescriptor;
                r20 = r21.bind(r22)(r8, r23);
case 457:
                if(!r20) { _fun3927_ip = 476; continue _fun3927 }
case 460:
                r21 = r20.get;
                if(r21) { _fun3927_ip = 489; continue _fun3927 }
case 468:
                r21 = r20.set;
                if(r21) { _fun3927_ip = 489; continue _fun3927 }
case 476:
                r21 = r8[r23];
                r4[r23] = r21;
                r10 = r20;
                _fun3927_ip = 398; continue _fun3927;
case 489:
                r22 = r19.Object;
                r21 = r22.defineProperty;
                r21 = r21.bind(r22)(r4, r23, r20);
                r10 = r20;
                _fun3927_ip = 398; continue _fun3927;
            }
case 512:
            r4['default'] = r8;
            r3 = r4;
            if(!r9) { _fun3927_ip = 561; continue _fun3927 }
case 524:
            r10 = r9.set;
            r10 = r10.bind(r9)(r8, r4);
            r3 = r4;
            _fun3927_ip = 561; continue _fun3927;
case 540:
            r4 = r9.get;
            r3 = r4.bind(r9)(r8);
            _fun3927_ip = 561; continue _fun3927;
case 552:
            r4 = {};
            r4['default'] = r8;
            r3 = r4;
case 561:
            var _closure1_slot7 = r3;
            r3 = 10;
            r3 = r7[r3];
            r3 = r6.bind(r0)(r3);
            r3 = r5.bind(r0)(r3);
            r4 = 11;
            r4 = r7[r4];
            r4 = r6.bind(r0)(r4);
            r4 = r5.bind(r0)(r4);
            var _closure1_slot8 = r4;
            r3 = r3.default;
            r1 = function(a0) { // Environment: r1
                r3 = function(a0) { // Original name: SpringAnimation, environment: r5
                    _fun3937: for(var _fun3937_ip = 0; ; ) switch(_fun3937_ip) {
case 0:
                        r5 = a0;
                        r6 = this;
                        r0 = _closure1_slot1;
                        r0 = r0.default;
                        r3 = _closure2_slot0;
                        r4 = undefined;
                        r0 = r0.bind(r4)(r6, r3);
                        r2 = _closure1_slot10;
                        r0 = new Array(1);
                        r0[0] = r5;
                        r0 = r2.bind(r4)(r6, r3, r0);
                        r6 = r5.overshootClamping;
                        r3 = null;
                        r7 = r6 != r3;
                        r2 = false;
                        if(!r7) { _fun3937_ip = 71; continue _fun3937 }
case 68:
                        r2 = r6;
case 71:
                        r0['_overshootClamping'] = r2;
                        r7 = r5.restDisplacementThreshold;
                        r8 = r7 != r3;
                        r2 = 0.001;
                        r6 = r2;
                        if(!r8) { _fun3937_ip = 106; continue _fun3937 }
case 103:
                        r6 = r7;
case 106:
                        r0['_restDisplacementThreshold'] = r6;
                        r6 = r5.restSpeedThreshold;
                        r7 = r6 != r3;
                        if(!r7) { _fun3937_ip = 128; continue _fun3937 }
case 125:
                        r2 = r6;
case 128:
                        r0['_restSpeedThreshold'] = r2;
                        r7 = r5.velocity;
                        r8 = r7 != r3;
                        r2 = 0;
                        r6 = 0;
                        if(!r8) { _fun3937_ip = 154; continue _fun3937 }
case 151:
                        r6 = r7;
case 154:
                        r0['_initialVelocity'] = r6;
                        r7 = r5.velocity;
                        r8 = r7 != r3;
                        r6 = 0;
                        if(!r8) { _fun3937_ip = 178; continue _fun3937 }
case 175:
                        r6 = r7;
case 178:
                        r0['_lastVelocity'] = r6;
                        r6 = r5.toValue;
                        r0['_toValue'] = r6;
                        r7 = r5.delay;
                        r8 = r7 != r3;
                        r6 = 0;
                        if(!r8) { _fun3937_ip = 213; continue _fun3937 }
case 210:
                        r6 = r7;
case 213:
                        r0['_delay'] = r6;
                        r6 = r5.platformConfig;
                        r0['_platformConfig'] = r6;
                        r6 = r5.stiffness;
                        if(!(r6 === r4)) { _fun3937_ip = 555; continue _fun3937 }
case 244:
                        r6 = r5.damping;
                        if(!(r6 === r4)) { _fun3937_ip = 555; continue _fun3937 }
case 257:
                        r6 = r5.mass;
                        if(!(r6 === r4)) { _fun3937_ip = 555; continue _fun3937 }
case 270:
                        r6 = r5.bounciness;
                        if(!(r6 === r4)) { _fun3937_ip = 382; continue _fun3937 }
case 280:
                        r6 = r5.speed;
                        if(!(r6 === r4)) { _fun3937_ip = 382; continue _fun3937 }
case 290:
                        r9 = _closure1_slot7;
                        r8 = r9.fromOrigamiTensionAndFriction;
                        r6 = r5.tension;
                        r10 = r6 != r3;
                        r7 = 40;
                        if(!r10) { _fun3937_ip = 319; continue _fun3937 }
case 316:
                        r7 = r6;
case 319:
                        r10 = r5.friction;
                        r11 = r10 != r3;
                        r6 = 7;
                        if(!r11) { _fun3937_ip = 338; continue _fun3937 }
case 335:
                        r6 = r10;
case 338:
                        r6 = r8.bind(r9)(r7, r6);
                        r7 = r6.stiffness;
                        r0['_stiffness'] = r7;
                        r6 = r6.damping;
                        r0['_damping'] = r6;
                        r6 = 1;
                        r0['_mass'] = r6;
                        _fun3937_ip = 698; continue _fun3937;
case 382:
                        r6 = _closure1_slot8;
                        r8 = r6.default;
                        r6 = r5.tension;
                        r7 = r6 === r4;
                        if(!r7) { _fun3937_ip = 414; continue _fun3937 }
case 404:
                        r6 = r5.friction;
                        r7 = r6 === r4;
case 414:
                        if(!r7) { _fun3937_ip = 427; continue _fun3937 }
case 417:
                        r6 = r5.stiffness;
                        r7 = r6 === r4;
case 427:
                        if(!r7) { _fun3937_ip = 440; continue _fun3937 }
case 430:
                        r6 = r5.damping;
                        r7 = r6 === r4;
case 440:
                        if(!r7) { _fun3937_ip = 453; continue _fun3937 }
case 443:
                        r6 = r5.mass;
                        r7 = r6 === r4;
case 453:
                        r6 = 'You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one';
                        r6 = r8.bind(r4)(r7, r6);
                        r9 = _closure1_slot7;
                        r8 = r9.fromBouncinessAndSpeed;
                        r6 = r5.bounciness;
                        r10 = r6 != r3;
                        r7 = 8;
                        if(!r10) { _fun3937_ip = 492; continue _fun3937 }
case 489:
                        r7 = r6;
case 492:
                        r10 = r5.speed;
                        r11 = r10 != r3;
                        r6 = 12;
                        if(!r11) { _fun3937_ip = 511; continue _fun3937 }
case 508:
                        r6 = r10;
case 511:
                        r6 = r8.bind(r9)(r7, r6);
                        r7 = r6.stiffness;
                        r0['_stiffness'] = r7;
                        r6 = r6.damping;
                        r0['_damping'] = r6;
                        r6 = 1;
                        r0['_mass'] = r6;
                        _fun3937_ip = 698; continue _fun3937;
case 555:
                        r6 = _closure1_slot8;
                        r8 = r6.default;
                        r6 = r5.bounciness;
                        r7 = r6 === r4;
                        if(!r7) { _fun3937_ip = 587; continue _fun3937 }
case 577:
                        r6 = r5.speed;
                        r7 = r6 === r4;
case 587:
                        if(!r7) { _fun3937_ip = 600; continue _fun3937 }
case 590:
                        r6 = r5.tension;
                        r7 = r6 === r4;
case 600:
                        if(!r7) { _fun3937_ip = 613; continue _fun3937 }
case 603:
                        r6 = r5.friction;
                        r7 = r6 === r4;
case 613:
                        r6 = 'You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one';
                        r6 = r8.bind(r4)(r7, r6);
                        r7 = r5.stiffness;
                        r8 = r7 != r3;
                        r6 = 100;
                        if(!r8) { _fun3937_ip = 642; continue _fun3937 }
case 639:
                        r6 = r7;
case 642:
                        r0['_stiffness'] = r6;
                        r7 = r5.damping;
                        r8 = r7 != r3;
                        r6 = 10;
                        if(!r8) { _fun3937_ip = 667; continue _fun3937 }
case 664:
                        r6 = r7;
case 667:
                        r0['_damping'] = r6;
                        r5 = r5.mass;
                        r6 = r5 != r3;
                        r3 = 1;
                        if(!r6) { _fun3937_ip = 692; continue _fun3937 }
case 689:
                        r3 = r5;
case 692:
                        r0['_mass'] = r3;
case 698:
                        r1 = _closure1_slot8;
                        r6 = r1.default;
                        r3 = r0._stiffness;
                        r5 = r3 > r2;
                        r3 = 'Stiffness value must be greater than 0';
                        r3 = r6.bind(r4)(r5, r3);
                        r6 = r1.default;
                        r3 = r0._damping;
                        r5 = r3 > r2;
                        r3 = 'Damping value must be greater than 0';
                        r3 = r6.bind(r4)(r5, r3);
                        r3 = r1.default;
                        r1 = r0._mass;
                        r2 = r1 > r2;
                        r1 = 'Mass value must be greater than 0';
                        r1 = r3.bind(r4)(r2, r1);
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
                    _fun3938: for(var _fun3938_ip = 0; ; ) switch(_fun3938_ip) {
case 0:
                        r2 = this;
                        r0 = {};
                        r1 = 'spring';
                        r0['type'] = r1;
                        r1 = r2._overshootClamping;
                        r0['overshootClamping'] = r1;
                        r1 = r2._restDisplacementThreshold;
                        r0['restDisplacementThreshold'] = r1;
                        r1 = r2._restSpeedThreshold;
                        r0['restSpeedThreshold'] = r1;
                        r1 = r2._stiffness;
                        r0['stiffness'] = r1;
                        r1 = r2._damping;
                        r0['damping'] = r1;
                        r1 = r2._mass;
                        r0['mass'] = r1;
                        r1 = r2._initialVelocity;
                        r3 = null;
                        if(!(r1 == r3)) { _fun3938_ip = 96; continue _fun3938 }
case 90:
                        r1 = r2._lastVelocity;
case 96:
                        r0['initialVelocity'] = r1;
                        r1 = r2._toValue;
                        r0['toValue'] = r1;
                        r1 = r2.__iterations;
                        r0['iterations'] = r1;
                        r1 = r2._platformConfig;
                        r0['platformConfig'] = r1;
                        r1 = r2.__getDebugID;
                        r1 = r1.bind(r2)();
                        r0['debugID'] = r1;
                        return r0;
                    }
                };
                r4['value'] = r0;
                r0 = new Array(5);
                r0[0] = r4;
                r4 = {};
                r6 = 'start';
                r4['key'] = r6;
                r6 = function(a0, a1, a2, a3, a4) { // Original name: start, environment: r5
                    _fun3939: for(var _fun3939_ip = 0; ; ) switch(_fun3939_ip) {
case 0:
                        r6 = a0;
                        r1 = a1;
                        r5 = a3;
                        r9 = a4;
                        r2 = this;
                        var _closure3_slot0 = r9;
                        var _closure3_slot1 = r2;
                        r10 = _closure1_slot12;
                        r4 = _closure2_slot0;
                        r0 = undefined;
                        r13 = 'start';
                        r11 = 3;
                        r15 = undefined;
                        r14 = r4;
                        r12 = r2;
                        r8 = r15[r10](r14, r13, r12, r11, r10);
                        r7 = new Array(5);
                        r7[0] = r6;
                        r7[1] = r1;
                        r10 = a2;
                        r7[2] = r10;
                        r7[3] = r5;
                        r7[4] = r9;
                        r7 = r8.bind(r0)(r7);
                        r2['_startPosition'] = r6;
                        r6 = r2._startPosition;
                        r2['_lastPosition'] = r6;
                        r2['_onUpdate'] = r1;
                        r1 = global;
                        r7 = r1.Date;
                        r6 = r7.now;
                        r6 = r6.bind(r7)();
                        r2['_lastTime'] = r6;
                        r6 = 0;
                        r2['_frameTime'] = r6;
                        r4 = r5 instanceof r4;
                        if(!r4) { _fun3939_ip = 211; continue _fun3939 }
case 153:
                        r4 = r5.getInternalState;
                        r4 = r4.bind(r5)();
                        r5 = r4.lastPosition;
                        r2['_lastPosition'] = r5;
                        r5 = r4.lastVelocity;
                        r2['_lastVelocity'] = r5;
                        r5 = r2._lastVelocity;
                        r2['_initialVelocity'] = r5;
                        r4 = r4.lastTime;
                        r2['_lastTime'] = r4;
case 211:
                        r4 = function() { // Original name: start, environment: r3
                            _fun3940: for(var _fun3940_ip = 0; ; ) switch(_fun3940_ip) {
case 0:
                                r3 = _closure3_slot1;
                                r2 = r3.__startAnimationIfNative;
                                r1 = _closure3_slot0;
                                r1 = r2.bind(r3)(r1);
                                if(r1) { _fun3940_ip = 39; continue _fun3940 }
case 25:
                                r1 = _closure3_slot1;
                                r0 = r1.onUpdate;
                                r0 = r0.bind(r1)();
case 39:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r3 = r2._delay;
                        if(r3) { _fun3939_ip = 231; continue _fun3939 }
case 225:
                        r3 = r4.bind(r0)();
                        _fun3939_ip = 255; continue _fun3939;
case 231:
                        r3 = r1.setTimeout;
                        r1 = r2._delay;
                        r1 = r3.bind(r0)(r4, r1);
                        r2['_timeout'] = r1;
case 255:
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[1] = r4;
                r4 = {};
                r6 = 'getInternalState';
                r4['key'] = r6;
                r6 = function() { // Original name: getInternalState, environment: r5
                    r1 = this;
                    r0 = {};
                    r2 = r1._lastPosition;
                    r0['lastPosition'] = r2;
                    r2 = r1._lastVelocity;
                    r0['lastVelocity'] = r2;
                    r1 = r1._lastTime;
                    r0['lastTime'] = r1;
                    return r0;
                };
                r4['value'] = r6;
                r0[2] = r4;
                r4 = {};
                r6 = 'onUpdate';
                r4['key'] = r6;
                r6 = function() { // Original name: onUpdate, environment: r5
                    _fun3942: for(var _fun3942_ip = 0; ; ) switch(_fun3942_ip) {
case 0:
                        r2 = this;
                        r1 = global;
                        r3 = r1.Date;
                        r0 = r3.now;
                        r0 = r0.bind(r3)();
                        r3 = r2._lastTime;
                        r4 = 64;
                        r3 = r3 + r4;
                        if(!(r0 > r3)) { _fun3942_ip = 46; continue _fun3942 }
case 36:
                        r3 = r2._lastTime;
                        r0 = r3 + r4;
case 46:
                        r3 = r2._lastTime;
                        r4 = r0 - r3;
                        r3 = 1000;
                        r4 = r4 / r3;
                        r3 = r2._frameTime;
                        r3 = r3 + r4;
                        r2['_frameTime'] = r3;
                        r5 = r2._damping;
                        r6 = r2._mass;
                        r3 = r2._stiffness;
                        r4 = r2._initialVelocity;
                        r13 = -r4;
                        r8 = r1.Math;
                        r7 = r8.sqrt;
                        r4 = r3 * r6;
                        r7 = r7.bind(r8)(r4);
                        r4 = 2;
                        r4 = r4 * r7;
                        r15 = r5 / r4;
                        r5 = r1.Math;
                        r4 = r5.sqrt;
                        r3 = r3 / r6;
                        r10 = r4.bind(r5)(r3);
                        r5 = r1.Math;
                        r4 = r5.sqrt;
                        r6 = 1;
                        r3 = r15 * r15;
                        r3 = r6 - r3;
                        r3 = r4.bind(r5)(r3);
                        r14 = r10 * r3;
                        r4 = r2._toValue;
                        r3 = r2._startPosition;
                        r11 = r4 - r3;
                        r7 = r2._frameTime;
                        if(!(!(r15 < r6))) { _fun3942_ip = 311; continue _fun3942 }
case 220:
                        r5 = r1.Math;
                        r4 = r5.exp;
                        r3 = -r10;
                        r3 = r3 * r7;
                        r5 = r4.bind(r5)(r3);
                        r4 = r2._toValue;
                        r3 = r10 * r11;
                        r3 = r13 + r3;
                        r3 = r3 * r7;
                        r3 = r11 + r3;
                        r3 = r5 * r3;
                        r3 = r4 - r3;
                        r4 = r7 * r10;
                        r4 = r4 - r6;
                        r6 = r13 * r4;
                        r8 = r7 * r11;
                        r4 = r10 * r10;
                        r4 = r8 * r4;
                        r4 = r6 + r4;
                        r4 = r5 * r4;
                        _fun3942_ip = 583; continue _fun3942;
case 311:
                        r8 = r1.Math;
                        r6 = r8.exp;
                        r5 = -r15;
                        r5 = r5 * r10;
                        r5 = r5 * r7;
                        r9 = r6.bind(r8)(r5);
                        r6 = r2._toValue;
                        r5 = r15 * r10;
                        r5 = r5 * r11;
                        r5 = r13 + r5;
                        r8 = r5 / r14;
                        r16 = r1.Math;
                        r12 = r16.sin;
                        r5 = r14 * r7;
                        r5 = r12.bind(r16)(r5);
                        r8 = r8 * r5;
                        r16 = r1.Math;
                        r12 = r16.cos;
                        r5 = r14 * r7;
                        r5 = r12.bind(r16)(r5);
                        r5 = r11 * r5;
                        r5 = r8 + r5;
                        r5 = r9 * r5;
                        r3 = r6 - r5;
                        r5 = r15 * r10;
                        r8 = r5 * r9;
                        r16 = r1.Math;
                        r12 = r16.sin;
                        r5 = r14 * r7;
                        r12 = r12.bind(r16)(r5);
                        r5 = r15 * r10;
                        r5 = r5 * r11;
                        r5 = r13 + r5;
                        r5 = r12 * r5;
                        r12 = r5 / r14;
                        r17 = r1.Math;
                        r16 = r17.cos;
                        r5 = r14 * r7;
                        r5 = r16.bind(r17)(r5);
                        r5 = r11 * r5;
                        r5 = r12 + r5;
                        r17 = r1.Math;
                        r16 = r17.cos;
                        r12 = r14 * r7;
                        r12 = r16.bind(r17)(r12);
                        r10 = r15 * r10;
                        r10 = r10 * r11;
                        r10 = r13 + r10;
                        r10 = r12 * r10;
                        r11 = r14 * r11;
                        r13 = r1.Math;
                        r12 = r13.sin;
                        r7 = r14 * r7;
                        r7 = r12.bind(r13)(r7);
                        r7 = r11 * r7;
                        r7 = r10 - r7;
                        r7 = r9 * r7;
                        r5 = r8 * r5;
                        r4 = r5 - r7;
case 583:
                        r2['_lastTime'] = r0;
                        r2['_lastPosition'] = r3;
                        r2['_lastVelocity'] = r4;
                        r0 = r2._onUpdate;
                        r0 = r0.bind(r2)(r3);
                        r0 = r2.__active;
                        r10 = r3;
                        if(r0) { _fun3942_ip = 628; continue _fun3942 }
case 624:
                        r0 = undefined;
                        return r0;
case 628:
                        r0 = r2._overshootClamping;
                        r6 = false;
                        if(!r0) { _fun3942_ip = 691; continue _fun3942 }
case 639:
                        r3 = r2._stiffness;
                        r0 = 0;
                        r6 = false;
                        if(!(r3 !== r0)) { _fun3942_ip = 691; continue _fun3942 }
case 653:
                        r3 = r2._startPosition;
                        r0 = r2._toValue;
                        if(!(!(r3 < r0))) { _fun3942_ip = 681; continue _fun3942 }
case 669:
                        r0 = r2._toValue;
                        r6 = r10 < r0;
                        _fun3942_ip = 691; continue _fun3942;
case 681:
                        r0 = r2._toValue;
                        r6 = r10 > r0;
case 691:
                        r3 = r1.Math;
                        r0 = r3.abs;
                        r3 = r0.bind(r3)(r4);
                        r0 = r2._restSpeedThreshold;
                        r5 = r3 <= r0;
                        r7 = r2._stiffness;
                        r3 = true;
                        r0 = 0;
                        r4 = true;
                        if(!(r7 !== r0)) { _fun3942_ip = 771; continue _fun3942 }
case 734:
                        r9 = r1.Math;
                        r8 = r9.abs;
                        r7 = r2._toValue;
                        r7 = r7 - r10;
                        r8 = r8.bind(r9)(r7);
                        r7 = r2._restDisplacementThreshold;
                        r4 = r8 <= r7;
case 771:
                        if(r6) { _fun3942_ip = 817; continue _fun3942 }
case 774:
                        if(!r5) { _fun3942_ip = 780; continue _fun3942 }
case 777:
                        if(r4) { _fun3942_ip = 817; continue _fun3942 }
case 780:
                        r5 = r1.requestAnimationFrame;
                        r4 = r2.onUpdate;
                        r1 = r4.bind;
                        r4 = r1.bind(r4)(r2);
                        r1 = undefined;
                        r4 = r5.bind(r1)(r4);
                        r2['_animationFrame'] = r4;
                        return r1;
case 817:
                        r1 = r2._stiffness;
                        if(!(r1 !== r0)) { _fun3942_ip = 862; continue _fun3942 }
case 827:
                        r1 = r2._toValue;
                        r2['_lastPosition'] = r1;
                        r2['_lastVelocity'] = r0;
                        r1 = r2._onUpdate;
                        r0 = r2._toValue;
                        r0 = r1.bind(r2)(r0);
case 862:
                        r1 = r2.__notifyAnimationEnd;
                        r0 = {};
                        r0['finished'] = r3;
                        r0 = r1.bind(r2)(r0);
                        r0 = undefined;
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[3] = r4;
                r4 = {};
                r6 = 'stop';
                r4['key'] = r6;
                r5 = function() { // Original name: stop, environment: r5
                    _fun3943: for(var _fun3943_ip = 0; ; ) switch(_fun3943_ip) {
case 0:
                        r3 = this;
                        r6 = _closure1_slot12;
                        r10 = _closure2_slot0;
                        r0 = undefined;
                        r9 = 'stop';
                        r7 = 3;
                        r11 = undefined;
                        r8 = r3;
                        r4 = r11[r6](r10, r9, r8, r7, r6);
                        r2 = new Array(0);
                        r2 = r4.bind(r0)(r2);
                        r2 = global;
                        r4 = r2.clearTimeout;
                        r2 = r3._timeout;
                        r2 = r4.bind(r0)(r2);
                        r4 = r3._animationFrame;
                        r2 = null;
                        if(!(r4 != r2)) { _fun3943_ip = 95; continue _fun3943 }
case 74:
                        r4 = _closure1_slot0;
                        r2 = r4.cancelAnimationFrame;
                        r1 = r3._animationFrame;
                        r1 = r2.bind(r4)(r1);
case 95:
                        r2 = r3.__notifyAnimationEnd;
                        r1 = {};
                        r4 = false;
                        r1['finished'] = r4;
                        r1 = r2.bind(r3)(r1);
                        return r0;
                    }
                };
                r4['value'] = r5;
                r0[4] = r4;
                r0 = r1.bind(r2)(r3, r0);
                return r0;
            };
            r1 = r1.bind(r0)(r3);
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 325;
    r5 = [1, 134, 12, 13, 23, 25, 26, 28, 326, 327, 303, 20];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun3944: for(var _fun3944_ip = 0; ; ) switch(_fun3944_ip) {
case 0:
            r6 = a1;
            r2 = a5;
            r7 = a6;
            var _closure1_slot0 = r6;
            var _closure1_slot1 = r7;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun3945: for(var _fun3945_ip = 0; ; ) switch(_fun3945_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun3945_ip = 104; continue _fun3945 }
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
                        _fun3946: for(var _fun3946_ip = 0; ; ) switch(_fun3946_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun3946_ip = 15; continue _fun3946 }
case 9:
                            r0 = _closure2_slot0;
                            _fun3946_ip = 19; continue _fun3946;
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
            r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r1
                _fun3947: for(var _fun3947_ip = 0; ; ) switch(_fun3947_ip) {
case 0:
                    r3 = a0;
                    r5 = a2;
                    r0 = _closure1_slot5;
                    r1 = r0.default;
                    r2 = undefined;
                    r0 = a1;
                    r8 = r1.bind(r2)(r0);
                    r0 = _closure1_slot4;
                    r1 = r0.default;
                    r0 = _closure1_slot14;
                    r0 = r0.bind(r2)();
                    if(r0) { _fun3947_ip = 61; continue _fun3947 }
case 48:
                    r0 = r8.apply;
                    r0 = r0.bind(r8)(r3, r5);
                    _fun3947_ip = 107; continue _fun3947;
case 61:
                    r6 = global;
                    r7 = r6.Reflect;
                    r6 = r7.construct;
                    if(r5) { _fun3947_ip = 81; continue _fun3947 }
case 77:
                    r5 = new Array(0);
case 81:
                    r4 = _closure1_slot5;
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
            r0 = function() { // Original name: _isNativeReflectConstruct, environment: r1
                _fun3948: for(var _fun3948_ip = 0; ; ) switch(_fun3948_ip) {
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
                    _fun3948_ip = 74; continue _fun3948;
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
            r0 = function(a0, a1, a2, a3) { // Original name: _superPropGet, environment: r1
                _fun3951: for(var _fun3951_ip = 0; ; ) switch(_fun3951_ip) {
case 0:
                    r4 = a0;
                    r6 = a2;
                    var _closure2_slot0 = r6;
                    r2 = _closure1_slot6;
                    r5 = r2.default;
                    r0 = _closure1_slot5;
                    r3 = r0.default;
                    r0 = 1;
                    r2 = 3;
                    r7 = r0 & r2;
                    r0 = r4;
                    if(!r7) { _fun3951_ip = 54; continue _fun3951 }
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
                    if(!r2) { _fun3951_ip = 107; continue _fun3951 }
case 88:
                    r3 = 'function';
                    r2 = typeof r4;
                    r0 = r4;
                    if(!(r3 === r2)) { _fun3951_ip = 107; continue _fun3951 }
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
            var _closure1_slot15 = r0;
            r0 = function(a0) { // Original name: processColor, environment: r1
                _fun3953: for(var _fun3953_ip = 0; ; ) switch(_fun3953_ip) {
case 0:
                    r0 = a0;
                    r4 = undefined;
                    if(!(r0 !== r4)) { _fun3953_ip = 222; continue _fun3953 }
case 12:
                    r1 = null;
                    if(!(r0 !== r1)) { _fun3953_ip = 222; continue _fun3953 }
case 21:
                    r3 = _closure1_slot17;
                    r3 = r3.bind(r4)(r0);
                    if(r3) { _fun3953_ip = 220; continue _fun3953 }
case 39:
                    r3 = _closure1_slot8;
                    r3 = r3.default;
                    r3 = r3.bind(r4)(r0);
                    if(!(r3 !== r4)) { _fun3953_ip = 218; continue _fun3953 }
case 60:
                    if(!(r3 !== r1)) { _fun3953_ip = 218; continue _fun3953 }
case 67:
                    r6 = typeof r3;
                    r5 = 'object';
                    if(!(r6 !== r5)) { _fun3953_ip = 179; continue _fun3953 }
case 78:
                    r5 = 'number';
                    if(!(r6 === r5)) { _fun3953_ip = 214; continue _fun3953 }
case 89:
                    r5 = 4278190080.0;
                    r11 = r3 & r5;
                    r5 = 16711680;
                    r10 = r3 & r5;
                    r5 = 65280;
                    r9 = r3 & r5;
                    r7 = 255;
                    r6 = r3 & r7;
                    r5 = {};
                    r8 = 24;
                    r8 = r11 >>> r8;
                    r5['r'] = r8;
                    r8 = 16;
                    r8 = r10 >>> r8;
                    r5['g'] = r8;
                    r8 = 8;
                    r8 = r9 >>> r8;
                    r5['b'] = r8;
                    r6 = r6 / r7;
                    r5['a'] = r6;
                    return r5;
case 179:
                    r5 = _closure1_slot0;
                    r6 = _closure1_slot1;
                    r2 = 11;
                    r2 = r6[r2];
                    r2 = r5.bind(r4)(r2);
                    r2 = r2.processColorObject;
                    r2 = r2.bind(r4)(r3);
                    if(!(r2 == r1)) { _fun3953_ip = 216; continue _fun3953 }
case 214:
                    return r1;
case 216:
                    return r2;
case 218:
                    return r1;
case 220:
                    return r0;
case 222:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot16 = r0;
            r0 = function(a0) { // Original name: isRgbaValue, environment: r1
                _fun3954: for(var _fun3954_ip = 0; ; ) switch(_fun3954_ip) {
case 0:
                    r1 = a0;
                    r0 = r1;
                    if(!r0) { _fun3954_ip = 26; continue _fun3954 }
case 9:
                    r2 = r1.r;
                    r3 = typeof r2;
                    r2 = 'number';
                    r0 = r3 === r2;
case 26:
                    if(!r0) { _fun3954_ip = 46; continue _fun3954 }
case 29:
                    r2 = r1.g;
                    r3 = typeof r2;
                    r2 = 'number';
                    r0 = r3 === r2;
case 46:
                    if(!r0) { _fun3954_ip = 66; continue _fun3954 }
case 49:
                    r2 = r1.b;
                    r3 = typeof r2;
                    r2 = 'number';
                    r0 = r3 === r2;
case 66:
                    if(!r0) { _fun3954_ip = 86; continue _fun3954 }
case 69:
                    r1 = r1.a;
                    r2 = typeof r1;
                    r1 = 'number';
                    r0 = r2 === r1;
case 86:
                    return r0;
                }
            };
            var _closure1_slot17 = r0;
            r0 = function(a0) { // Original name: isRgbaAnimatedValue, environment: r1
                _fun3955: for(var _fun3955_ip = 0; ; ) switch(_fun3955_ip) {
case 0:
                    r1 = a0;
                    r0 = r1;
                    if(!r0) { _fun3955_ip = 31; continue _fun3955 }
case 9:
                    r3 = r1.r;
                    r2 = _closure1_slot9;
                    r2 = r2.default;
                    r0 = r3 instanceof r2;
case 31:
                    if(!r0) { _fun3955_ip = 56; continue _fun3955 }
case 34:
                    r3 = r1.g;
                    r2 = _closure1_slot9;
                    r2 = r2.default;
                    r0 = r3 instanceof r2;
case 56:
                    if(!r0) { _fun3955_ip = 81; continue _fun3955 }
case 59:
                    r3 = r1.b;
                    r2 = _closure1_slot9;
                    r2 = r2.default;
                    r0 = r3 instanceof r2;
case 81:
                    if(!r0) { _fun3955_ip = 106; continue _fun3955 }
case 84:
                    r2 = r1.a;
                    r1 = _closure1_slot9;
                    r1 = r1.default;
                    r0 = r2 instanceof r1;
case 106:
                    return r0;
                }
            };
            var _closure1_slot18 = r0;
            r0 = 0;
            r3 = r7[r0];
            r0 = undefined;
            r5 = r6.bind(r0)(r3);
            r20 = global;
            r9 = r20.Object;
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
            var _closure1_slot2 = r3;
            r3 = 2;
            r3 = r7[r3];
            r3 = r6.bind(r0)(r3);
            r3 = r5.bind(r0)(r3);
            var _closure1_slot3 = r3;
            r3 = 3;
            r3 = r7[r3];
            r3 = r6.bind(r0)(r3);
            r3 = r5.bind(r0)(r3);
            var _closure1_slot4 = r3;
            r3 = 4;
            r3 = r7[r3];
            r3 = r6.bind(r0)(r3);
            r3 = r5.bind(r0)(r3);
            var _closure1_slot5 = r3;
            r3 = 5;
            r3 = r7[r3];
            r3 = r6.bind(r0)(r3);
            r3 = r5.bind(r0)(r3);
            var _closure1_slot6 = r3;
            r3 = 6;
            r3 = r7[r3];
            r3 = r6.bind(r0)(r3);
            r3 = r5.bind(r0)(r3);
            var _closure1_slot7 = r3;
            r3 = 7;
            r3 = r7[r3];
            r3 = r6.bind(r0)(r3);
            r4 = r5.bind(r0)(r3);
            r3 = 8;
            r3 = r7[r3];
            r3 = r6.bind(r0)(r3);
            r3 = r5.bind(r0)(r3);
            var _closure1_slot8 = r3;
            r3 = 9;
            r3 = r7[r3];
            r9 = r6.bind(r0)(r3);
            if(!r9) { _fun3944_ip = 326; continue _fun3944 }
case 312:
            r8 = r9.__esModule;
            r3 = r9;
            if(r8) { _fun3944_ip = 593; continue _fun3944 }
case 326:
            r19 = null;
            if(!(r19 !== r9)) { _fun3944_ip = 584; continue _fun3944 }
case 335:
            r10 = typeof r9;
            r8 = 'object';
            if(!(r8 !== r10)) { _fun3944_ip = 357; continue _fun3944 }
case 346:
            r8 = 'function';
            if(!(r8 === r10)) { _fun3944_ip = 584; continue _fun3944 }
case 357:
            r8 = _closure1_slot12;
            r10 = r8.bind(r0)(r0);
            if(!r10) { _fun3944_ip = 385; continue _fun3944 }
case 369:
            r8 = r10.has;
            r8 = r8.bind(r10)(r9);
            if(r8) { _fun3944_ip = 572; continue _fun3944 }
case 385:
            r8 = Object.create(r19);
            r11 = r20.Object;
            r18 = r11.defineProperty;
            if(!r18) { _fun3944_ip = 413; continue _fun3944 }
case 402:
            r11 = r20.Object;
            r18 = r11.getOwnPropertyDescriptor;
case 413:
            r16 = r9;
            r12 = 'default';
            r11 = undefined;
            for(r13 in r16)
case 430:
            {
case 439:
                r24 = r13;
                if(r12 === r24) { _fun3944_ip = 430; continue _fun3944 }
case 446:
                r21 = {};
                r22 = r21.hasOwnProperty;
                r21 = r22.call;
                r21 = r21.bind(r22)(r9, r24);
                if(!r21) { _fun3944_ip = 430; continue _fun3944 }
case 467:
                r21 = null;
                if(!r18) { _fun3944_ip = 489; continue _fun3944 }
case 472:
                r23 = r20.Object;
                r22 = r23.getOwnPropertyDescriptor;
                r21 = r22.bind(r23)(r9, r24);
case 489:
                if(!r21) { _fun3944_ip = 508; continue _fun3944 }
case 492:
                r22 = r21.get;
                if(r22) { _fun3944_ip = 521; continue _fun3944 }
case 500:
                r22 = r21.set;
                if(r22) { _fun3944_ip = 521; continue _fun3944 }
case 508:
                r22 = r9[r24];
                r8[r24] = r22;
                r11 = r21;
                _fun3944_ip = 430; continue _fun3944;
case 521:
                r23 = r20.Object;
                r22 = r23.defineProperty;
                r22 = r22.bind(r23)(r8, r24, r21);
                r11 = r21;
                _fun3944_ip = 430; continue _fun3944;
            }
case 544:
            r8['default'] = r9;
            r3 = r8;
            if(!r10) { _fun3944_ip = 593; continue _fun3944 }
case 556:
            r11 = r10.set;
            r11 = r11.bind(r10)(r9, r8);
            r3 = r8;
            _fun3944_ip = 593; continue _fun3944;
case 572:
            r8 = r10.get;
            r3 = r8.bind(r10)(r9);
            _fun3944_ip = 593; continue _fun3944;
case 584:
            r8 = {};
            r8['default'] = r9;
            r3 = r8;
case 593:
            var _closure1_slot9 = r3;
            r3 = 10;
            r3 = r7[r3];
            r3 = r6.bind(r0)(r3);
            r3 = r5.bind(r0)(r3);
            r4 = r4.default;
            r4 = r4.API;
            var _closure1_slot10 = r4;
            r4 = {'r': 0, 'g': 0, 'b': 0, 'a': 1};
            var _closure1_slot11 = r4;
            r3 = r3.default;
            r1 = function(a0) { // Environment: r1
                r3 = function(a0, a1) { // Original name: AnimatedColor, environment: r5
                    _fun3957: for(var _fun3957_ip = 0; ; ) switch(_fun3957_ip) {
case 0:
                        r3 = a0;
                        r1 = a1;
                        r6 = this;
                        r0 = _closure1_slot2;
                        r0 = r0.default;
                        r4 = _closure2_slot0;
                        r8 = undefined;
                        r0 = r0.bind(r8)(r6, r4);
                        r2 = _closure1_slot13;
                        r0 = new Array(1);
                        r0[0] = r1;
                        r0 = r2.bind(r8)(r6, r4, r0);
                        r2 = 0;
                        r0['_suspendCallbacks'] = r2;
                        r2 = null;
                        if(!(r3 == r2)) { _fun3957_ip = 73; continue _fun3957 }
case 69:
                        r3 = _closure1_slot11;
case 73:
                        r4 = _closure1_slot18;
                        r4 = r4.bind(r8)(r3);
                        if(r4) { _fun3957_ip = 302; continue _fun3957 }
case 88:
                        r4 = _closure1_slot16;
                        r4 = r4.bind(r8)(r3);
                        if(!(r4 == r2)) { _fun3957_ip = 105; continue _fun3957 }
case 101:
                        r4 = _closure1_slot11;
case 105:
                        r6 = _closure1_slot11;
                        r7 = _closure1_slot17;
                        r8 = r7.bind(r8)(r4);
                        r7 = r4;
                        r4 = r7;
                        if(r8) { _fun3957_ip = 136; continue _fun3957 }
case 127:
                        r0['nativeColor'] = r7;
                        r4 = r6;
case 136:
                        r6 = _closure1_slot9;
                        r8 = r6.default;
                        r11 = r4.r;
                        r7 = r8.prototype;
                        r7 = Object.create(r7, {constructor: {value: r8}});
                        r12 = r7;
                        r6 = new r12[r8](r11, r10);
                        r6 = r6 instanceof Object ? r6 : r7;
                        r0['r'] = r6;
                        r6 = _closure1_slot9;
                        r8 = r6.default;
                        r11 = r4.g;
                        r7 = r8.prototype;
                        r7 = Object.create(r7, {constructor: {value: r8}});
                        r12 = r7;
                        r6 = new r12[r8](r11, r10);
                        r6 = r6 instanceof Object ? r6 : r7;
                        r0['g'] = r6;
                        r6 = _closure1_slot9;
                        r8 = r6.default;
                        r11 = r4.b;
                        r7 = r8.prototype;
                        r7 = Object.create(r7, {constructor: {value: r8}});
                        r12 = r7;
                        r6 = new r12[r8](r11, r10);
                        r6 = r6 instanceof Object ? r6 : r7;
                        r0['b'] = r6;
                        r5 = _closure1_slot9;
                        r6 = r5.default;
                        r11 = r4.a;
                        r5 = r6.prototype;
                        r5 = Object.create(r5, {constructor: {value: r6}});
                        r12 = r5;
                        r4 = new r12[r6](r11, r10);
                        r4 = r4 instanceof Object ? r4 : r5;
                        r0['a'] = r4;
                        _fun3957_ip = 350; continue _fun3957;
case 302:
                        r4 = r3.r;
                        r0['r'] = r4;
                        r4 = r3.g;
                        r0['g'] = r4;
                        r4 = r3.b;
                        r0['b'] = r4;
                        r3 = r3.a;
                        r0['a'] = r3;
case 350:
                        if(!(r1 != r2)) { _fun3957_ip = 371; continue _fun3957 }
case 354:
                        r1 = r1.useNativeDriver;
                        if(!r1) { _fun3957_ip = 371; continue _fun3957 }
case 362:
                        r1 = r0.__makeNative;
                        r1 = r1.bind(r0)();
case 371:
                        return r0;
                    }
                };
                var _closure2_slot0 = r3;
                r1 = _closure1_slot7;
                r4 = r1.default;
                r2 = undefined;
                r1 = a0;
                r1 = r4.bind(r2)(r3, r1);
                r0 = _closure1_slot3;
                r1 = r0.default;
                r4 = {};
                r0 = 'setValue';
                r4['key'] = r0;
                r0 = function(a0) { // Original name: setValue, environment: r5
                    _fun3958: for(var _fun3958_ip = 0; ; ) switch(_fun3958_ip) {
case 0:
                        r3 = this;
                        var _closure3_slot0 = r3;
                        r0 = false;
                        var _closure3_slot1 = r0;
                        r0 = r3.__isNative;
                        if(!r0) { _fun3958_ip = 59; continue _fun3958 }
case 23:
                        r0 = r3.__getNativeTag;
                        r5 = r0.bind(r3)();
                        r4 = _closure1_slot10;
                        r1 = r4.setWaitingForIdentifier;
                        r0 = r5.toString;
                        r0 = r0.bind(r5)();
                        r0 = r1.bind(r4)(r0);
case 59:
                        r5 = _closure1_slot16;
                        r0 = undefined;
                        r4 = a0;
                        r4 = r5.bind(r0)(r4);
                        r5 = null;
                        if(!(r4 == r5)) { _fun3958_ip = 86; continue _fun3958 }
case 82:
                        r4 = _closure1_slot11;
case 86:
                        var _closure3_slot2 = r4;
                        r5 = r3._withSuspendedCallbacks;
                        r4 = function() { // Environment: r2
                            _fun3959: for(var _fun3959_ip = 0; ; ) switch(_fun3959_ip) {
case 0:
                                r3 = _closure1_slot17;
                                r1 = _closure3_slot2;
                                r0 = undefined;
                                r4 = r3.bind(r0)(r1);
                                r3 = _closure3_slot2;
                                r1 = _closure3_slot0;
                                if(r4) { _fun3959_ip = 63; continue _fun3959 }
case 32:
                                r4 = r1.nativeColor;
                                if(!(r4 !== r3)) { _fun3959_ip = 183; continue _fun3959 }
case 45:
                                r4 = _closure3_slot0;
                                r4['nativeColor'] = r3;
                                r4 = true;
                                _closure3_slot1 = r4;
                                _fun3959_ip = 183; continue _fun3959;
case 63:
                                r6 = r1.r;
                                r5 = r6.setValue;
                                r4 = r3.r;
                                r4 = r5.bind(r6)(r4);
                                r6 = r1.g;
                                r5 = r6.setValue;
                                r4 = r3.g;
                                r4 = r5.bind(r6)(r4);
                                r6 = r1.b;
                                r5 = r6.setValue;
                                r4 = r3.b;
                                r4 = r5.bind(r6)(r4);
                                r5 = r1.a;
                                r4 = r5.setValue;
                                r3 = r3.a;
                                r3 = r4.bind(r5)(r3);
                                r1 = r1.nativeColor;
                                r3 = null;
                                if(!(r1 != r3)) { _fun3959_ip = 183; continue _fun3959 }
case 167:
                                r1 = _closure3_slot0;
                                r1['nativeColor'] = r3;
                                r1 = true;
                                _closure3_slot1 = r1;
case 183:
                                return r0;
                            }
                        };
                        r4 = r5.bind(r3)(r4);
                        r4 = r3.__isNative;
                        if(r4) { _fun3958_ip = 131; continue _fun3958 }
case 114:
                        r4 = _closure1_slot9;
                        r4 = r4.flushValue;
                        r4 = r4.bind(r0)(r3);
                        _fun3958_ip = 197; continue _fun3958;
case 131:
                        r4 = r3.__getNativeTag;
                        r5 = r4.bind(r3)();
                        r2 = _closure3_slot1;
                        if(!r2) { _fun3958_ip = 173; continue _fun3958 }
case 147:
                        r6 = _closure1_slot10;
                        r4 = r6.updateAnimatedNodeConfig;
                        r2 = r3.__getNativeConfig;
                        r2 = r2.bind(r3)();
                        r2 = r4.bind(r6)(r5, r2);
case 173:
                        r4 = _closure1_slot10;
                        r2 = r4.unsetWaitingForIdentifier;
                        r1 = r5.toString;
                        r1 = r1.bind(r5)();
                        r1 = r2.bind(r4)(r1);
case 197:
                        r2 = r3.__callListeners;
                        r1 = r3.__getValue;
                        r1 = r1.bind(r3)();
                        r1 = r2.bind(r3)(r1);
                        return r0;
                    }
                };
                r4['value'] = r0;
                r0 = new Array(13);
                r0[0] = r4;
                r4 = {};
                r6 = 'setOffset';
                r4['key'] = r6;
                r6 = function(a0) { // Original name: setOffset, environment: r5
                    r0 = a0;
                    r1 = this;
                    r4 = r1.r;
                    r3 = r4.setOffset;
                    r2 = r0.r;
                    r2 = r3.bind(r4)(r2);
                    r4 = r1.g;
                    r3 = r4.setOffset;
                    r2 = r0.g;
                    r2 = r3.bind(r4)(r2);
                    r4 = r1.b;
                    r3 = r4.setOffset;
                    r2 = r0.b;
                    r2 = r3.bind(r4)(r2);
                    r2 = r1.a;
                    r1 = r2.setOffset;
                    r0 = r0.a;
                    r0 = r1.bind(r2)(r0);
                    r0 = undefined;
                    return r0;
                };
                r4['value'] = r6;
                r0[1] = r4;
                r4 = {};
                r6 = 'flattenOffset';
                r4['key'] = r6;
                r6 = function() { // Original name: flattenOffset, environment: r5
                    r0 = this;
                    r2 = r0.r;
                    r1 = r2.flattenOffset;
                    r1 = r1.bind(r2)();
                    r2 = r0.g;
                    r1 = r2.flattenOffset;
                    r1 = r1.bind(r2)();
                    r2 = r0.b;
                    r1 = r2.flattenOffset;
                    r1 = r1.bind(r2)();
                    r1 = r0.a;
                    r0 = r1.flattenOffset;
                    r0 = r0.bind(r1)();
                    r0 = undefined;
                    return r0;
                };
                r4['value'] = r6;
                r0[2] = r4;
                r4 = {};
                r6 = 'extractOffset';
                r4['key'] = r6;
                r6 = function() { // Original name: extractOffset, environment: r5
                    r0 = this;
                    r2 = r0.r;
                    r1 = r2.extractOffset;
                    r1 = r1.bind(r2)();
                    r2 = r0.g;
                    r1 = r2.extractOffset;
                    r1 = r1.bind(r2)();
                    r2 = r0.b;
                    r1 = r2.extractOffset;
                    r1 = r1.bind(r2)();
                    r1 = r0.a;
                    r0 = r1.extractOffset;
                    r0 = r0.bind(r1)();
                    r0 = undefined;
                    return r0;
                };
                r4['value'] = r6;
                r0[3] = r4;
                r4 = {};
                r6 = 'stopAnimation';
                r4['key'] = r6;
                r6 = function(a0) { // Original name: stopAnimation, environment: r5
                    _fun3963: for(var _fun3963_ip = 0; ; ) switch(_fun3963_ip) {
case 0:
                        r2 = a0;
                        r1 = this;
                        r3 = r1.r;
                        r0 = r3.stopAnimation;
                        r0 = r0.bind(r3)();
                        r3 = r1.g;
                        r0 = r3.stopAnimation;
                        r0 = r0.bind(r3)();
                        r3 = r1.b;
                        r0 = r3.stopAnimation;
                        r0 = r0.bind(r3)();
                        r3 = r1.a;
                        r0 = r3.stopAnimation;
                        r0 = r0.bind(r3)();
                        if(!r2) { _fun3963_ip = 89; continue _fun3963 }
case 73:
                        r0 = r1.__getValue;
                        r1 = r0.bind(r1)();
                        r0 = undefined;
                        r0 = r2.bind(r0)(r1);
case 89:
                        r0 = undefined;
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[4] = r4;
                r4 = {};
                r6 = 'resetAnimation';
                r4['key'] = r6;
                r6 = function(a0) { // Original name: resetAnimation, environment: r5
                    _fun3964: for(var _fun3964_ip = 0; ; ) switch(_fun3964_ip) {
case 0:
                        r2 = a0;
                        r1 = this;
                        r3 = r1.r;
                        r0 = r3.resetAnimation;
                        r0 = r0.bind(r3)();
                        r3 = r1.g;
                        r0 = r3.resetAnimation;
                        r0 = r0.bind(r3)();
                        r3 = r1.b;
                        r0 = r3.resetAnimation;
                        r0 = r0.bind(r3)();
                        r3 = r1.a;
                        r0 = r3.resetAnimation;
                        r0 = r0.bind(r3)();
                        if(!r2) { _fun3964_ip = 89; continue _fun3964 }
case 73:
                        r0 = r1.__getValue;
                        r1 = r0.bind(r1)();
                        r0 = undefined;
                        r0 = r2.bind(r0)(r1);
case 89:
                        r0 = undefined;
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[5] = r4;
                r4 = {};
                r6 = '__getValue';
                r4['key'] = r6;
                r6 = function() { // Original name: __getValue, environment: r5
                    _fun3965: for(var _fun3965_ip = 0; ; ) switch(_fun3965_ip) {
case 0:
                        r0 = this;
                        r2 = r0.nativeColor;
                        r1 = null;
                        if(!(r2 == r1)) { _fun3965_ip = 115; continue _fun3965 }
case 15:
                        r2 = r0.r;
                        r1 = r2.__getValue;
                        r16 = r1.bind(r2)();
                        r2 = r0.g;
                        r1 = r2.__getValue;
                        r14 = r1.bind(r2)();
                        r2 = r0.b;
                        r1 = r2.__getValue;
                        r12 = r1.bind(r2)();
                        r2 = r0.a;
                        r1 = r2.__getValue;
                        r10 = r1.bind(r2)();
                        r1 = global;
                        r1 = r1.HermesInternal;
                        r4 = r1.concat;
                        r17 = 'rgba(';
                        r2 = ', ';
                        r9 = ')';
                        r15 = r2;
                        r13 = r2;
                        r11 = r2;
                        r1 = r17[r4](r16, r15, r14, r13, r12, r11, r10, r9, r8);
                        return r1;
case 115:
                        r0 = r0.nativeColor;
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[6] = r4;
                r4 = {};
                r6 = '__attach';
                r4['key'] = r6;
                r6 = function() { // Original name: __attach, environment: r5
                    r5 = this;
                    r1 = r5.r;
                    r0 = r1.__addChild;
                    r0 = r0.bind(r1)(r5);
                    r1 = r5.g;
                    r0 = r1.__addChild;
                    r0 = r0.bind(r1)(r5);
                    r1 = r5.b;
                    r0 = r1.__addChild;
                    r0 = r0.bind(r1)(r5);
                    r1 = r5.a;
                    r0 = r1.__addChild;
                    r0 = r0.bind(r1)(r5);
                    r4 = _closure1_slot15;
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
                r0[7] = r4;
                r4 = {};
                r6 = '__detach';
                r4['key'] = r6;
                r6 = function() { // Original name: __detach, environment: r5
                    r5 = this;
                    r1 = r5.r;
                    r0 = r1.__removeChild;
                    r0 = r0.bind(r1)(r5);
                    r1 = r5.g;
                    r0 = r1.__removeChild;
                    r0 = r0.bind(r1)(r5);
                    r1 = r5.b;
                    r0 = r1.__removeChild;
                    r0 = r0.bind(r1)(r5);
                    r1 = r5.a;
                    r0 = r1.__removeChild;
                    r0 = r0.bind(r1)(r5);
                    r4 = _closure1_slot15;
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
                r0[8] = r4;
                r4 = {};
                r6 = '_withSuspendedCallbacks';
                r4['key'] = r6;
                r6 = function(a0) { // Original name: _withSuspendedCallbacks, environment: r5
                    r2 = this;
                    r0 = r2._suspendCallbacks;
                    r0 = r0 + 1;
                    r2['_suspendCallbacks'] = r0;
                    r1 = a0;
                    r0 = undefined;
                    r1 = r1.bind(r0)();
                    r1 = r2._suspendCallbacks;
                    r1 = r1 - 1;
                    r2['_suspendCallbacks'] = r1;
                    return r0;
                };
                r4['value'] = r6;
                r0[9] = r4;
                r4 = {};
                r6 = '__callListeners';
                r4['key'] = r6;
                r6 = function(a0) { // Original name: __callListeners, environment: r5
                    _fun3969: for(var _fun3969_ip = 0; ; ) switch(_fun3969_ip) {
case 0:
                        r5 = this;
                        r1 = r5._suspendCallbacks;
                        r0 = 0;
                        if(!(r1 === r0)) { _fun3969_ip = 63; continue _fun3969 }
case 15:
                        r4 = _closure1_slot15;
                        r9 = _closure2_slot0;
                        r2 = undefined;
                        r8 = '__callListeners';
                        r6 = 3;
                        r10 = undefined;
                        r7 = r5;
                        r1 = r10[r4](r9, r8, r7, r6, r5);
                        r0 = new Array(1);
                        r3 = a0;
                        r0[0] = r3;
                        r0 = r1.bind(r2)(r0);
case 63:
                        r0 = undefined;
                        return r0;
                    }
                };
                r4['value'] = r6;
                r0[10] = r4;
                r4 = {};
                r6 = '__makeNative';
                r4['key'] = r6;
                r6 = function(a0) { // Original name: __makeNative, environment: r5
                    r3 = a0;
                    r6 = this;
                    r1 = r6.r;
                    r0 = r1.__makeNative;
                    r0 = r0.bind(r1)(r3);
                    r1 = r6.g;
                    r0 = r1.__makeNative;
                    r0 = r0.bind(r1)(r3);
                    r1 = r6.b;
                    r0 = r1.__makeNative;
                    r0 = r0.bind(r1)(r3);
                    r1 = r6.a;
                    r0 = r1.__makeNative;
                    r0 = r0.bind(r1)(r3);
                    r5 = _closure1_slot15;
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
                r4['value'] = r6;
                r0[11] = r4;
                r4 = {};
                r6 = '__getNativeConfig';
                r4['key'] = r6;
                r5 = function() { // Original name: __getNativeConfig, environment: r5
                    r2 = this;
                    r0 = {};
                    r1 = 'color';
                    r0['type'] = r1;
                    r3 = r2.r;
                    r1 = r3.__getNativeTag;
                    r1 = r1.bind(r3)();
                    r0['r'] = r1;
                    r3 = r2.g;
                    r1 = r3.__getNativeTag;
                    r1 = r1.bind(r3)();
                    r0['g'] = r1;
                    r3 = r2.b;
                    r1 = r3.__getNativeTag;
                    r1 = r1.bind(r3)();
                    r0['b'] = r1;
                    r3 = r2.a;
                    r1 = r3.__getNativeTag;
                    r1 = r1.bind(r3)();
                    r0['a'] = r1;
                    r1 = r2.nativeColor;
                    r0['nativeColor'] = r1;
                    r1 = r2.__getDebugID;
                    r1 = r1.bind(r2)();
                    r0['debugID'] = r1;
                    return r0;
                };
                r4['value'] = r5;
                r0[12] = r4;
                r0 = r1.bind(r2)(r3, r0);
                return r0;
            };
            r1 = r1.bind(r0)(r3);
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 326;
    r5 = [1, 12, 13, 23, 25, 26, 28, 304, 90, 317, 313, 92];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r1 = a5;
        r2 = function(a0) { // Original name: stiffnessFromOrigamiValue, environment: r0
            r1 = a0;
            r0 = 30;
            r1 = r1 - r0;
            r0 = 3.62;
            r1 = r1 * r0;
            r0 = 194;
            r0 = r1 + r0;
            return r0;
        };
        var _closure1_slot0 = r2;
        r2 = function(a0) { // Original name: dampingFromOrigamiValue, environment: r0
            r1 = a0;
            r0 = 8;
            r1 = r1 - r0;
            r0 = 3;
            r1 = r1 * r0;
            r0 = 25;
            r0 = r1 + r0;
            return r0;
        };
        var _closure1_slot1 = r2;
        r2 = global;
        r5 = r2.Object;
        r4 = r5.defineProperty;
        r3 = {};
        r2 = true;
        r3['value'] = r2;
        r2 = '__esModule';
        r2 = r4.bind(r5)(r1, r2, r3);
        r2 = function(a0, a1) { // Original name: fromBouncinessAndSpeed, environment: r0
            _fun3976: for(var _fun3976_ip = 0; ; ) switch(_fun3976_ip) {
case 0:
                r7 = function(a0, a1, a2) { // Original name: normalize, environment: r2
                    r0 = a0;
                    r2 = 0;
                    r1 = r0 - r2;
                    r0 = 20;
                    r0 = r0 - r2;
                    r0 = r1 / r0;
                    return r0;
                };
                r6 = function(a0, a1, a2) { // Original name: projectNormal, environment: r2
                    r1 = a1;
                    r0 = a2;
                    r2 = r0 - r1;
                    r0 = a0;
                    r0 = r0 * r2;
                    r0 = r1 + r0;
                    return r0;
                };
                r0 = a0;
                r8 = 1.7;
                r0 = r0 / r8;
                r3 = undefined;
                r5 = 0;
                r4 = 20;
                r1 = r7.bind(r3)(r0, r5, r4);
                r0 = 0.8;
                r0 = r6.bind(r3)(r1, r5, r0);
                r1 = a1;
                r1 = r1 / r8;
                r5 = r7.bind(r3)(r1, r5, r4);
                r4 = 0.5;
                r1 = 200;
                r5 = r6.bind(r3)(r5, r4, r1);
                r1 = 18;
                if(!(!(r5 <= r1))) { _fun3976_ip = 136; continue _fun3976 }
case 101:
                if(!(r5 > r1)) { _fun3976_ip = 112; continue _fun3976 }
case 105:
                r1 = 44;
                if(!(!(r5 <= r1))) { _fun3976_ip = 124; continue _fun3976 }
case 112:
                r1 = function(a0) { // Original name: b3Friction3, environment: r2
                    r3 = a0;
                    r0 = global;
                    r4 = r0.Math;
                    r2 = r4.pow;
                    r1 = 3;
                    r2 = r2.bind(r4)(r3, r1);
                    r1 = 4.5e-07;
                    r2 = r1 * r2;
                    r4 = r0.Math;
                    r1 = r4.pow;
                    r0 = 2;
                    r1 = r1.bind(r4)(r3, r0);
                    r0 = 0.000332;
                    r0 = r0 * r1;
                    r1 = 0.1078;
                    r1 = r1 * r3;
                    r0 = r2 - r0;
                    r1 = r0 + r1;
                    r0 = 5.84;
                    r0 = r1 + r0;
                    return r0;
                };
                r4 = r1.bind(r3)(r5);
                _fun3976_ip = 146; continue _fun3976;
case 124:
                r1 = function(a0) { // Original name: b3Friction2, environment: r2
                    r4 = a0;
                    r0 = global;
                    r3 = r0.Math;
                    r2 = r3.pow;
                    r1 = 3;
                    r2 = r2.bind(r3)(r4, r1);
                    r1 = 4.4e-05;
                    r3 = r1 * r2;
                    r2 = r0.Math;
                    r0 = r2.pow;
                    r1 = 2;
                    r2 = r0.bind(r2)(r4, r1);
                    r0 = 0.006;
                    r0 = r0 * r2;
                    r2 = 0.36;
                    r2 = r2 * r4;
                    r0 = r3 - r0;
                    r0 = r0 + r2;
                    r0 = r0 + r1;
                    return r0;
                };
                r4 = r1.bind(r3)(r5);
                _fun3976_ip = 146; continue _fun3976;
case 136:
                r1 = function(a0) { // Original name: b3Friction1, environment: r2
                    r3 = a0;
                    r0 = global;
                    r4 = r0.Math;
                    r2 = r4.pow;
                    r1 = 3;
                    r2 = r2.bind(r4)(r3, r1);
                    r1 = 0.0007;
                    r2 = r1 * r2;
                    r4 = r0.Math;
                    r1 = r4.pow;
                    r0 = 2;
                    r1 = r1.bind(r4)(r3, r0);
                    r0 = 0.031;
                    r0 = r0 * r1;
                    r1 = 0.64;
                    r1 = r1 * r3;
                    r0 = r2 - r0;
                    r1 = r0 + r1;
                    r0 = 1.28;
                    r0 = r1 + r0;
                    return r0;
                };
                r4 = r1.bind(r3)(r5);
case 146:
                r1 = 2;
                r1 = r1 * r0;
                r0 = r0 * r0;
                r2 = function(a0, a1, a2) { // Original name: linearInterpolation, environment: r2
                    r2 = a0;
                    r0 = a2;
                    r1 = r2 * r0;
                    r0 = 1;
                    r2 = r0 - r2;
                    r0 = a1;
                    r0 = r2 * r0;
                    r0 = r1 + r0;
                    return r0;
                };
                r1 = r1 - r0;
                r0 = 0.01;
                r2 = r2.bind(r3)(r1, r4, r0);
                r0 = {};
                r4 = _closure1_slot0;
                r4 = r4.bind(r3)(r5);
                r0['stiffness'] = r4;
                r1 = _closure1_slot1;
                r1 = r1.bind(r3)(r2);
                r0['damping'] = r1;
                return r0;
            }
        };
        r1['fromBouncinessAndSpeed'] = r2;
        r0 = function(a0, a1) { // Original name: fromOrigamiTensionAndFriction, environment: r0
            r0 = {};
            r4 = _closure1_slot0;
            r3 = undefined;
            r2 = a0;
            r2 = r4.bind(r3)(r2);
            r0['stiffness'] = r2;
            r2 = _closure1_slot1;
            r1 = a1;
            r1 = r2.bind(r3)(r1);
            r0['damping'] = r1;
            return r0;
        };
        r1['fromOrigamiTensionAndFriction'] = r0;
        r0 = undefined;
        return r0;
    };
    r6 = 327;
    r5 = new Array(0);
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r5 = a1;
        r2 = a5;
        r6 = a6;
        r0 = a0;
        var _closure1_slot0 = r0;
        var _closure1_slot1 = r5;
        var _closure1_slot2 = r6;
        r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r1
            _fun3984: for(var _fun3984_ip = 0; ; ) switch(_fun3984_ip) {
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
                r0 = _closure1_slot11;
                r0 = r0.bind(r2)();
                if(r0) { _fun3984_ip = 61; continue _fun3984 }
case 48:
                r0 = r8.apply;
                r0 = r0.bind(r8)(r3, r5);
                _fun3984_ip = 107; continue _fun3984;
case 61:
                r6 = global;
                r7 = r6.Reflect;
                r6 = r7.construct;
                if(r5) { _fun3984_ip = 81; continue _fun3984 }
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
        var _closure1_slot10 = r0;
        r0 = function() { // Original name: _isNativeReflectConstruct, environment: r1
            _fun3985: for(var _fun3985_ip = 0; ; ) switch(_fun3985_ip) {
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
                _fun3985_ip = 74; continue _fun3985;
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
        r0 = function(a0, a1, a2, a3) { // Original name: _superPropGet, environment: r1
            _fun3988: for(var _fun3988_ip = 0; ; ) switch(_fun3988_ip) {
case 0:
                r4 = a0;
                r6 = a2;
                var _closure2_slot0 = r6;
                r2 = _closure1_slot7;
                r5 = r2.default;
                r0 = _closure1_slot6;
                r3 = r0.default;
                r0 = 1;
                r2 = 3;
                r7 = r0 & r2;
                r0 = r4;
                if(!r7) { _fun3988_ip = 54; continue _fun3988 }
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
                if(!r2) { _fun3988_ip = 107; continue _fun3988 }
case 88:
                r3 = 'function';
                r2 = typeof r4;
                r0 = r4;
                if(!(r3 === r2)) { _fun3988_ip = 107; continue _fun3988 }
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
        var _closure1_slot12 = r0;
        r0 = function() { // Original name: easeInOut, environment: r1
            _fun3990: for(var _fun3990_ip = 0; ; ) switch(_fun3990_ip) {
case 0:
                r1 = _closure1_slot9;
                if(r1) { _fun3990_ip = 58; continue _fun3990 }
case 10:
                r3 = _closure1_slot1;
                r2 = _closure1_slot2;
                r1 = 10;
                r2 = r2[r1];
                r1 = undefined;
                r1 = r3.bind(r1)(r2);
                r3 = r1.default;
                r2 = r3.inOut;
                r1 = r3.ease;
                r1 = r2.bind(r3)(r1);
                var _closure1_slot9 = r1;
case 58:
                r0 = _closure1_slot9;
                return r0;
            }
        };
        var _closure1_slot13 = r0;
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
        r3 = 2;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot3 = r3;
        r3 = 3;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot4 = r3;
        r3 = 4;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot5 = r3;
        r3 = 5;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot6 = r3;
        r3 = 6;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot7 = r3;
        r3 = 7;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot8 = r3;
        r3 = 8;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        r3 = 9;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        r3 = r3.default;
        r1 = function(a0) { // Environment: r1
            r3 = function(a0) { // Original name: TimingAnimation, environment: r5
                _fun3992: for(var _fun3992_ip = 0; ; ) switch(_fun3992_ip) {
case 0:
                    r1 = a0;
                    r6 = this;
                    r0 = _closure1_slot3;
                    r0 = r0.default;
                    r3 = _closure2_slot0;
                    r5 = undefined;
                    r0 = r0.bind(r5)(r6, r3);
                    r2 = _closure1_slot10;
                    r0 = new Array(1);
                    r0[0] = r1;
                    r0 = r2.bind(r5)(r6, r3, r0);
                    r2 = r1.toValue;
                    r0['_toValue'] = r2;
                    r3 = r1.easing;
                    r2 = null;
                    if(!(r3 == r2)) { _fun3992_ip = 81; continue _fun3992 }
case 73:
                    r4 = _closure1_slot13;
                    r3 = r4.bind(r5)();
case 81:
                    r0['_easing'] = r3;
                    r4 = r1.duration;
                    r5 = r4 != r2;
                    r3 = 500;
                    if(!r5) { _fun3992_ip = 108; continue _fun3992 }
case 105:
                    r3 = r4;
case 108:
                    r0['_duration'] = r3;
                    r3 = r1.delay;
                    r4 = r3 != r2;
                    r2 = 0;
                    if(!r4) { _fun3992_ip = 132; continue _fun3992 }
case 129:
                    r2 = r3;
case 132:
                    r0['_delay'] = r2;
                    r1 = r1.platformConfig;
                    r0['_platformConfig'] = r1;
                    return r0;
                }
            };
            var _closure2_slot0 = r3;
            r1 = _closure1_slot8;
            r4 = r1.default;
            r2 = undefined;
            r1 = a0;
            r1 = r4.bind(r2)(r3, r1);
            r0 = _closure1_slot4;
            r1 = r0.default;
            r4 = {};
            r0 = '__getNativeAnimationConfig';
            r4['key'] = r0;
            r0 = function() { // Original name: __getNativeAnimationConfig, environment: r5
                _fun3993: for(var _fun3993_ip = 0; ; ) switch(_fun3993_ip) {
case 0:
                    r2 = this;
                    r1 = new Array(0);
                    r0 = global;
                    r4 = r0.Math;
                    r3 = r4.round;
                    r5 = r2._duration;
                    r0 = 16.666666666666668;
                    r0 = r5 / r0;
                    r3 = r3.bind(r4)(r0);
                    r0 = 0;
                    r4 = r0 < r3;
                    if(!r4) { _fun3993_ip = 85; continue _fun3993 }
case 53:
                    r5 = r1.push;
                    r6 = r2._easing;
                    r4 = r0 / r3;
                    r4 = r6.bind(r2)(r4);
                    r4 = r5.bind(r1)(r4);
                    r0 = r0 + 1;
                    if(r0 < r3) { _fun3993_ip = 53; continue _fun3993 }
case 85:
                    r3 = r1.push;
                    r4 = r2._easing;
                    r0 = 1;
                    r0 = r4.bind(r2)(r0);
                    r0 = r3.bind(r1)(r0);
                    r0 = {};
                    r3 = 'frames';
                    r0['type'] = r3;
                    r0['frames'] = r1;
                    r1 = r2._toValue;
                    r0['toValue'] = r1;
                    r1 = r2.__iterations;
                    r0['iterations'] = r1;
                    r1 = r2._platformConfig;
                    r0['platformConfig'] = r1;
                    r1 = r2.__getDebugID;
                    r1 = r1.bind(r2)();
                    r0['debugID'] = r1;
                    return r0;
                }
            };
            r4['value'] = r0;
            r0 = new Array(4);
            r0[0] = r4;
            r4 = {};
            r6 = 'start';
            r4['key'] = r6;
            r6 = function(a0, a1, a2, a3, a4) { // Original name: start, environment: r5
                _fun3994: for(var _fun3994_ip = 0; ; ) switch(_fun3994_ip) {
case 0:
                    r4 = a0;
                    r3 = a1;
                    r7 = a4;
                    r2 = this;
                    var _closure3_slot0 = r7;
                    var _closure3_slot1 = r2;
                    r9 = _closure1_slot12;
                    r13 = _closure2_slot0;
                    r0 = undefined;
                    r12 = 'start';
                    r10 = 3;
                    r14 = undefined;
                    r11 = r2;
                    r6 = r14[r9](r13, r12, r11, r10, r9);
                    r5 = new Array(5);
                    r5[0] = r4;
                    r5[1] = r3;
                    r8 = a2;
                    r5[2] = r8;
                    r8 = a3;
                    r5[3] = r8;
                    r5[4] = r7;
                    r5 = r6.bind(r0)(r5);
                    r2['_fromValue'] = r4;
                    r2['_onUpdate'] = r3;
                    r4 = function() { // Original name: start, environment: r1
                        _fun3995: for(var _fun3995_ip = 0; ; ) switch(_fun3995_ip) {
case 0:
                            r4 = _closure3_slot1;
                            r1 = global;
                            r3 = r1.Date;
                            r2 = r3.now;
                            r2 = r2.bind(r3)();
                            r4['_startTime'] = r2;
                            r3 = r4.__startAnimationIfNative;
                            r2 = _closure3_slot0;
                            r2 = r3.bind(r4)(r2);
                            if(r2) { _fun3995_ip = 137; continue _fun3995 }
case 48:
                            r2 = _closure3_slot1;
                            r3 = r2._duration;
                            r2 = 0;
                            if(!(r3 !== r2)) { _fun3995_ip = 96; continue _fun3995 }
case 64:
                            r2 = _closure3_slot1;
                            r4 = r1.requestAnimationFrame;
                            r3 = undefined;
                            r1 = function() { // Environment: r1
                                r1 = _closure3_slot1;
                                r0 = r1.onUpdate;
                                r0 = r0.bind(r1)();
                                return r0;
                            };
                            r1 = r4.bind(r3)(r1);
                            r2['_animationFrame'] = r1;
                            _fun3995_ip = 137; continue _fun3995;
case 96:
                            r2 = _closure3_slot1;
                            r1 = r2._onUpdate;
                            r0 = r2._toValue;
                            r0 = r1.bind(r2)(r0);
                            r1 = r2.__notifyAnimationEnd;
                            r0 = {};
                            r3 = true;
                            r0['finished'] = r3;
                            r0 = r1.bind(r2)(r0);
case 137:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r1 = r2._delay;
                    if(r1) { _fun3994_ip = 120; continue _fun3994 }
case 114:
                    r1 = r4.bind(r0)();
                    _fun3994_ip = 146; continue _fun3994;
case 120:
                    r1 = global;
                    r3 = r1.setTimeout;
                    r1 = r2._delay;
                    r1 = r3.bind(r0)(r4, r1);
                    r2['_timeout'] = r1;
case 146:
                    return r0;
                }
            };
            r4['value'] = r6;
            r0[1] = r4;
            r4 = {};
            r6 = 'onUpdate';
            r4['key'] = r6;
            r6 = function() { // Original name: onUpdate, environment: r5
                _fun3997: for(var _fun3997_ip = 0; ; ) switch(_fun3997_ip) {
case 0:
                    r2 = this;
                    r0 = global;
                    r3 = r0.Date;
                    r1 = r3.now;
                    r6 = r1.bind(r3)();
                    r3 = r2._startTime;
                    r1 = r2._duration;
                    r1 = r3 + r1;
                    if(!(!(r6 >= r1))) { _fun3997_ip = 159; continue _fun3997 }
case 39:
                    r3 = r2._onUpdate;
                    r4 = r2._fromValue;
                    r5 = r2._easing;
                    r1 = r2._startTime;
                    r6 = r6 - r1;
                    r1 = r2._duration;
                    r1 = r6 / r1;
                    r5 = r5.bind(r2)(r1);
                    r6 = r2._toValue;
                    r1 = r2._fromValue;
                    r1 = r6 - r1;
                    r1 = r5 * r1;
                    r1 = r4 + r1;
                    r1 = r3.bind(r2)(r1);
                    r1 = r2.__active;
                    if(!r1) { _fun3997_ip = 155; continue _fun3997 }
case 120:
                    r3 = r0.requestAnimationFrame;
                    r1 = r2.onUpdate;
                    r0 = r1.bind;
                    r1 = r0.bind(r1)(r2);
                    r0 = undefined;
                    r0 = r3.bind(r0)(r1);
                    r2['_animationFrame'] = r0;
case 155:
                    r0 = undefined;
                    return r0;
case 159:
                    r1 = r2._duration;
                    r0 = 0;
                    if(!(r1 !== r0)) { _fun3997_ip = 228; continue _fun3997 }
case 171:
                    r1 = r2._onUpdate;
                    r3 = r2._fromValue;
                    r4 = r2._easing;
                    r0 = 1;
                    r4 = r4.bind(r2)(r0);
                    r5 = r2._toValue;
                    r0 = r2._fromValue;
                    r0 = r5 - r0;
                    r0 = r4 * r0;
                    r0 = r3 + r0;
                    r0 = r1.bind(r2)(r0);
                    _fun3997_ip = 245; continue _fun3997;
case 228:
                    r1 = r2._onUpdate;
                    r0 = r2._toValue;
                    r0 = r1.bind(r2)(r0);
case 245:
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
                _fun3998: for(var _fun3998_ip = 0; ; ) switch(_fun3998_ip) {
case 0:
                    r3 = this;
                    r6 = _closure1_slot12;
                    r10 = _closure2_slot0;
                    r0 = undefined;
                    r9 = 'stop';
                    r7 = 3;
                    r11 = undefined;
                    r8 = r3;
                    r4 = r11[r6](r10, r9, r8, r7, r6);
                    r2 = new Array(0);
                    r2 = r4.bind(r0)(r2);
                    r2 = global;
                    r4 = r2.clearTimeout;
                    r2 = r3._timeout;
                    r2 = r4.bind(r0)(r2);
                    r4 = r3._animationFrame;
                    r2 = null;
                    if(!(r4 != r2)) { _fun3998_ip = 95; continue _fun3998 }
case 74:
                    r4 = _closure1_slot0;
                    r2 = r4.cancelAnimationFrame;
                    r1 = r3._animationFrame;
                    r1 = r2.bind(r4)(r1);
case 95:
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
    r6 = 328;
    r5 = [1, 134, 12, 13, 23, 25, 26, 28, 326, 303, 322];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun3999: for(var _fun3999_ip = 0; ; ) switch(_fun3999_ip) {
case 0:
            r3 = a1;
            r6 = a5;
            r4 = a6;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r2
                _fun4000: for(var _fun4000_ip = 0; ; ) switch(_fun4000_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun4000_ip = 104; continue _fun4000 }
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
                        _fun4001: for(var _fun4001_ip = 0; ; ) switch(_fun4001_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun4001_ip = 15; continue _fun4001 }
case 9:
                            r0 = _closure2_slot0;
                            _fun4001_ip = 19; continue _fun4001;
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
            r1 = function(a0, a1) { // Original name: unstable_createAnimatedComponentWithAllowlist, environment: r2
                _fun4003: for(var _fun4003_ip = 0; ; ) switch(_fun4003_ip) {
case 0:
                    r1 = a0;
                    var _closure2_slot0 = r1;
                    r3 = _closure1_slot1;
                    r5 = r3.default;
                    r4 = undefined;
                    r3 = a1;
                    r3 = r5.bind(r4)(r3);
                    var _closure2_slot1 = r3;
                    r3 = _closure1_slot5;
                    r2 = r3.forwardRef;
                    r0 = function(a0, a1) { // Environment: r0
                        _fun4004: for(var _fun4004_ip = 0; ; ) switch(_fun4004_ip) {
case 0:
                            r2 = _closure2_slot1;
                            r3 = undefined;
                            r0 = a0;
                            r6 = r2.bind(r3)(r0);
                            r0 = _closure1_slot0;
                            r5 = r0.default;
                            r0 = 2;
                            r5 = r5.bind(r3)(r6, r0);
                            r0 = 0;
                            r8 = r5[r0];
                            r0 = 1;
                            r6 = r5[r0];
                            r0 = _closure1_slot3;
                            r5 = r0.default;
                            r0 = a1;
                            r0 = r5.bind(r3)(r6, r0);
                            r7 = r8.passthroughAnimatedPropExplicitValues;
                            r9 = r8.style;
                            var _closure3_slot0 = r9;
                            r5 = null;
                            r5 = r7 == r5;
                            r10 = undefined;
                            if(r5) { _fun4004_ip = 102; continue _fun4004 }
case 97:
                            r10 = r7.style;
case 102:
                            var _closure3_slot1 = r10;
                            r5 = _closure1_slot4;
                            r6 = r5.useMemo;
                            r5 = new Array(2);
                            r5[0] = r10;
                            r5[1] = r9;
                            r4 = function() { // Environment: r4
                                r0 = _closure1_slot2;
                                r3 = r0.default;
                                r2 = _closure3_slot0;
                                r1 = _closure3_slot1;
                                r0 = undefined;
                                r0 = r3.bind(r0)(r2, r1);
                                return r0;
                            };
                            r9 = r6.bind(r3)(r4, r5);
                            r2 = _closure1_slot6;
                            r2 = r2.jsx;
                            r1 = _closure2_slot0;
                            r4 = global;
                            r6 = r4.Object;
                            r5 = r6.assign;
                            r4 = {};
                            r4['style'] = r9;
                            r4['ref'] = r0;
                            r14 = {};
                            r15 = r6;
                            r13 = r8;
                            r12 = r7;
                            r11 = r4;
                            r0 = r15[r5](r14, r13, r12, r11, r10);
                            r0 = r2.bind(r3)(r1, r0);
                            return r0;
                        }
                    };
                    r0 = r2.bind(r3)(r0);
                    r4 = r1.displayName;
                    if(r4) { _fun4003_ip = 67; continue _fun4003 }
case 63:
                    r4 = 'Anonymous';
case 67:
                    r1 = global;
                    r1 = r1.HermesInternal;
                    r3 = r1.concat;
                    r2 = 'Animated(';
                    r1 = ')';
                    r1 = r3.bind(r2)(r4, r1);
                    r0['displayName'] = r1;
                    return r0;
                }
            };
            var _closure1_slot8 = r1;
            r0 = 0;
            r5 = r4[r0];
            r0 = undefined;
            r5 = r3.bind(r0)(r5);
            r17 = global;
            r10 = r17.Object;
            r9 = r10.defineProperty;
            r8 = {};
            r7 = true;
            r8['value'] = r7;
            r7 = '__esModule';
            r7 = r9.bind(r10)(r6, r7, r8);
            r7 = function(a0) { // Original name: createAnimatedComponent, environment: r2
                r3 = _closure1_slot8;
                r2 = undefined;
                r1 = a0;
                r0 = null;
                r0 = r3.bind(r2)(r1, r0);
                return r0;
            };
            r6['default'] = r7;
            r6['unstable_createAnimatedComponentWithAllowlist'] = r1;
            r1 = 1;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot0 = r1;
            r1 = 2;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot1 = r1;
            r1 = 3;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot2 = r1;
            r1 = 4;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            r1 = 5;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot3 = r1;
            r1 = 6;
            r1 = r4[r1];
            r6 = r3.bind(r0)(r1);
            if(!r6) { _fun3999_ip = 221; continue _fun3999 }
case 207:
            r5 = r6.__esModule;
            r1 = r6;
            if(r5) { _fun3999_ip = 488; continue _fun3999 }
case 221:
            r16 = null;
            if(!(r16 !== r6)) { _fun3999_ip = 479; continue _fun3999 }
case 230:
            r7 = typeof r6;
            r5 = 'object';
            if(!(r5 !== r7)) { _fun3999_ip = 252; continue _fun3999 }
case 241:
            r5 = 'function';
            if(!(r5 === r7)) { _fun3999_ip = 479; continue _fun3999 }
case 252:
            r5 = _closure1_slot7;
            r7 = r5.bind(r0)(r0);
            if(!r7) { _fun3999_ip = 280; continue _fun3999 }
case 264:
            r5 = r7.has;
            r5 = r5.bind(r7)(r6);
            if(r5) { _fun3999_ip = 467; continue _fun3999 }
case 280:
            r5 = Object.create(r16);
            r8 = r17.Object;
            r15 = r8.defineProperty;
            if(!r15) { _fun3999_ip = 308; continue _fun3999 }
case 297:
            r8 = r17.Object;
            r15 = r8.getOwnPropertyDescriptor;
case 308:
            r13 = r6;
            r9 = 'default';
            r8 = undefined;
            for(r10 in r13)
case 325:
            {
case 334:
                r21 = r10;
                if(r9 === r21) { _fun3999_ip = 325; continue _fun3999 }
case 341:
                r18 = {};
                r19 = r18.hasOwnProperty;
                r18 = r19.call;
                r18 = r18.bind(r19)(r6, r21);
                if(!r18) { _fun3999_ip = 325; continue _fun3999 }
case 362:
                r18 = null;
                if(!r15) { _fun3999_ip = 384; continue _fun3999 }
case 367:
                r20 = r17.Object;
                r19 = r20.getOwnPropertyDescriptor;
                r18 = r19.bind(r20)(r6, r21);
case 384:
                if(!r18) { _fun3999_ip = 403; continue _fun3999 }
case 387:
                r19 = r18.get;
                if(r19) { _fun3999_ip = 416; continue _fun3999 }
case 395:
                r19 = r18.set;
                if(r19) { _fun3999_ip = 416; continue _fun3999 }
case 403:
                r19 = r6[r21];
                r5[r21] = r19;
                r8 = r18;
                _fun3999_ip = 325; continue _fun3999;
case 416:
                r20 = r17.Object;
                r19 = r20.defineProperty;
                r19 = r19.bind(r20)(r5, r21, r18);
                r8 = r18;
                _fun3999_ip = 325; continue _fun3999;
            }
case 439:
            r5['default'] = r6;
            r1 = r5;
            if(!r7) { _fun3999_ip = 488; continue _fun3999 }
case 451:
            r8 = r7.set;
            r8 = r8.bind(r7)(r6, r5);
            r1 = r5;
            _fun3999_ip = 488; continue _fun3999;
case 467:
            r5 = r7.get;
            r1 = r5.bind(r7)(r6);
            _fun3999_ip = 488; continue _fun3999;
case 479:
            r5 = {};
            r5['default'] = r6;
            r1 = r5;
case 488:
            var _closure1_slot4 = r1;
            var _closure1_slot5 = r1;
            r1 = 7;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            var _closure1_slot6 = r1;
            return r0;
        }
    };
    r6 = 329;
    r5 = [1, 38, 330, 254, 248, 334, 119, 251];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun4006: for(var _fun4006_ip = 0; ; ) switch(_fun4006_ip) {
case 0:
            r3 = a1;
            r6 = a5;
            r4 = a6;
            var _closure1_slot0 = r3;
            var _closure1_slot1 = r4;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r2
                _fun4007: for(var _fun4007_ip = 0; ; ) switch(_fun4007_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun4007_ip = 104; continue _fun4007 }
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
                        _fun4008: for(var _fun4008_ip = 0; ; ) switch(_fun4008_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun4008_ip = 15; continue _fun4008 }
case 9:
                            r0 = _closure2_slot0;
                            _fun4008_ip = 19; continue _fun4008;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot9 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot9 = r0;
            r0 = function(a0, a1) { // Original name: reduceAnimatedProps, environment: r2
                r2 = a0;
                r0 = global;
                r4 = r0.Object;
                r3 = r4.assign;
                r1 = r2.__getValueWithStaticProps;
                r0 = a1;
                r2 = r1.bind(r2)(r0);
                r1 = {};
                r0 = false;
                r1['collapsable'] = r0;
                r0 = {};
                r0 = r3.bind(r4)(r0, r2, r1);
                return r0;
            };
            var _closure1_slot10 = r0;
            r0 = function(a0, a1) { // Original name: addListenersToPropsValue, environment: r2
                _fun4022: for(var _fun4022_ip = 0; ; ) switch(_fun4022_ip) {
case 0:
                    r4 = a0;
                    r0 = a1;
                    r1 = _closure1_slot4;
                    r1 = r1.default;
                    r1 = r4 instanceof r1;
                    if(r1) { _fun4022_ip = 117; continue _fun4022 }
case 25:
                    r1 = global;
                    r3 = r1.Array;
                    r2 = r3.isArray;
                    r2 = r2.bind(r3)(r4);
                    if(r2) { _fun4022_ip = 76; continue _fun4022 }
case 46:
                    r1 = r1.Object;
                    r1 = r4 instanceof r1;
                    if(!r1) { _fun4022_ip = 159; continue _fun4022 }
case 59:
                    r3 = _closure1_slot12;
                    r2 = r0;
                    r1 = undefined;
                    r1 = r3.bind(r1)(r4, r2);
                    _fun4022_ip = 159; continue _fun4022;
case 76:
                    r3 = r4;
                    r2 = r3[Symbol.iterator];
                    r3 = r2().next;
                    r1 = undefined;
case 84:
                    r8 = r3().value;
                    r6 = r2;
                    if(!(r6 !== r1)) { _fun4022_ip = 159; continue _fun4022 }
case 95: // try_start_0
                    r7 = _closure1_slot11;
                    r6 = r0;
                    r6 = r7.bind(r1)(r8, r6);
case 108: // try_end0
                    _fun4022_ip = 84; continue _fun4022;
case 110: // catch_target0
                    CatchBlockStart(arg_register=1);
                    r2.return();
                    throw r1;
case 117:
                    r2 = r4.addListener;
                    r1 = function() { // Environment: r1
                        r0 = undefined;
                        return r0;
                    };
                    r3 = r2.bind(r4)(r1);
                    r2 = r0;
                    r1 = r2.push;
                    r0 = {};
                    r0['propValue'] = r4;
                    r0['listenerId'] = r3;
                    r0 = r1.bind(r2)(r0);
case 159:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot11 = r0;
            r0 = function(a0, a1) { // Original name: addAnimatedValuesListenersToProps, environment: r2
                _fun4024: for(var _fun4024_ip = 0; ; ) switch(_fun4024_ip) {
case 0:
                    r8 = a0;
                    r7 = a1;
                    r5 = r8;
                    r0 = undefined;
                    for(r2 in r5)
case 22:
                    {
case 31:
                        r9 = r2;
                        r10 = r8[r9];
                        r9 = _closure1_slot11;
                        r9 = r9.bind(r0)(r10, r7);
                        _fun4024_ip = 22; continue _fun4024;
                    }
case 50:
                    return r0;
                }
            };
            var _closure1_slot12 = r0;
            r0 = function(a0) { // Original name: useAnimatedPropsLifecycleWithPrevNodeRef, environment: r2
                r4 = a0;
                var _closure2_slot0 = r4;
                r0 = _closure1_slot8;
                r5 = r0.useRef;
                r0 = undefined;
                r3 = null;
                r3 = r5.bind(r0)(r3);
                var _closure2_slot1 = r3;
                r3 = _closure1_slot8;
                r5 = r3.useRef;
                r3 = false;
                r3 = r5.bind(r0)(r3);
                var _closure2_slot2 = r3;
                r3 = _closure1_slot8;
                r6 = r3.useInsertionEffect;
                r5 = function() { // Environment: r1
                    r1 = _closure2_slot2;
                    r0 = false;
                    r1['current'] = r0;
                    r0 = function() { // Environment: r0
                        r1 = _closure2_slot2;
                        r0 = true;
                        r1['current'] = r0;
                        r0 = undefined;
                        return r0;
                    };
                    return r0;
                };
                r3 = new Array(0);
                r3 = r6.bind(r0)(r5, r3);
                r2 = _closure1_slot8;
                r3 = r2.useInsertionEffect;
                r2 = new Array(1);
                r2[0] = r4;
                r1 = function() { // Environment: r1
                    _fun4028: for(var _fun4028_ip = 0; ; ) switch(_fun4028_ip) {
case 0:
                        r2 = _closure2_slot0;
                        r1 = r2.__attach;
                        r1 = r1.bind(r2)();
                        r1 = _closure2_slot1;
                        r2 = r1.current;
                        r1 = null;
                        if(!(r2 != r1)) { _fun4028_ip = 67; continue _fun4028 }
case 32:
                        r0 = _closure2_slot1;
                        r3 = r0.current;
                        r2 = r3.__restoreDefaultValues;
                        r2 = r2.bind(r3)();
                        r2 = r3.__detach;
                        r2 = r2.bind(r3)();
                        r0['current'] = r1;
case 67:
                        r0 = function() { // Environment: r0
                            _fun4029: for(var _fun4029_ip = 0; ; ) switch(_fun4029_ip) {
case 0:
                                r1 = _closure2_slot2;
                                r1 = r1.current;
                                if(r1) { _fun4029_ip = 31; continue _fun4029 }
case 15:
                                r2 = _closure2_slot1;
                                r1 = _closure2_slot0;
                                r2['current'] = r1;
                                _fun4029_ip = 45; continue _fun4029;
case 31:
                                r1 = _closure2_slot0;
                                r0 = r1.__detach;
                                r0 = r0.bind(r1)();
case 45:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        return r0;
                    }
                };
                r1 = r3.bind(r0)(r1, r2);
                return r0;
            };
            var _closure1_slot13 = r0;
            r0 = function(a0) { // Original name: useAnimatedPropsLifecycleWithCleanupInMicrotask, environment: r2
                r4 = a0;
                var _closure2_slot0 = r4;
                r0 = _closure1_slot8;
                r5 = r0.useRef;
                r0 = undefined;
                r3 = false;
                r3 = r5.bind(r0)(r3);
                var _closure2_slot1 = r3;
                r2 = _closure1_slot8;
                r3 = r2.useInsertionEffect;
                r2 = new Array(1);
                r2[0] = r4;
                r1 = function() { // Environment: r1
                    r2 = _closure2_slot1;
                    r1 = true;
                    r2['current'] = r1;
                    r1 = _closure2_slot0;
                    r0 = r1.__attach;
                    r0 = r0.bind(r1)();
                    r0 = function() { // Environment: r0
                        r1 = _closure2_slot1;
                        r0 = false;
                        r1['current'] = r0;
                        r0 = global;
                        r2 = r0.queueMicrotask;
                        r0 = undefined;
                        r1 = function() { // Environment: r1
                            _fun4033: for(var _fun4033_ip = 0; ; ) switch(_fun4033_ip) {
case 0:
                                r1 = _closure2_slot1;
                                r1 = r1.current;
                                if(!r1) { _fun4033_ip = 29; continue _fun4033 }
case 15:
                                r2 = _closure2_slot0;
                                r1 = r2.__restoreDefaultValues;
                                r1 = r1.bind(r2)();
case 29:
                                r1 = _closure2_slot0;
                                r0 = r1.__detach;
                                r0 = r0.bind(r1)();
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r1 = r2.bind(r0)(r1);
                        return r0;
                    };
                    return r0;
                };
                r1 = r3.bind(r0)(r1, r2);
                return r0;
            };
            var _closure1_slot14 = r0;
            r0 = function(a0) { // Original name: getEventTarget, environment: r2
                _fun4034: for(var _fun4034_ip = 0; ; ) switch(_fun4034_ip) {
case 0:
                    r2 = a0;
                    r3 = typeof r2;
                    r1 = 'object';
                    r0 = r2;
                    if(!(r3 === r1)) { _fun4034_ip = 58; continue _fun4034 }
case 17:
                    r1 = null;
                    r3 = r2 == r1;
                    r1 = undefined;
                    if(r3) { _fun4034_ip = 34; continue _fun4034 }
case 28:
                    r1 = r2.getScrollableNode;
case 34:
                    r3 = typeof r1;
                    r1 = 'function';
                    r0 = r2;
                    if(!(r3 === r1)) { _fun4034_ip = 58; continue _fun4034 }
case 48:
                    r1 = r2.getScrollableNode;
                    r0 = r1.bind(r2)();
case 58:
                    return r0;
                }
            };
            var _closure1_slot15 = r0;
            r0 = function(a0) { // Original name: isFabricInstance, environment: r2
                _fun4035: for(var _fun4035_ip = 0; ; ) switch(_fun4035_ip) {
case 0:
                    r5 = a0;
                    r2 = _closure1_slot0;
                    r0 = _closure1_slot1;
                    r4 = 11;
                    r0 = r0[r4];
                    r3 = undefined;
                    r0 = r2.bind(r3)(r0);
                    r0 = r0.isPublicInstance;
                    r0 = r0.bind(r3)(r5);
                    if(r0) { _fun4035_ip = 106; continue _fun4035 }
case 42:
                    r6 = _closure1_slot0;
                    r2 = _closure1_slot1;
                    r2 = r2[r4];
                    r2 = r6.bind(r3)(r2);
                    r6 = r2.isPublicInstance;
                    r8 = null;
                    r7 = r5 == r8;
                    r2 = undefined;
                    if(r7) { _fun4035_ip = 101; continue _fun4035 }
case 76:
                    r7 = r5.getNativeScrollRef;
                    r7 = r7 == r8;
                    r2 = undefined;
                    if(r7) { _fun4035_ip = 101; continue _fun4035 }
case 91:
                    r7 = r5.getNativeScrollRef;
                    r2 = r7.bind(r5)();
case 101:
                    r0 = r6.bind(r3)(r2);
case 106:
                    if(r0) { _fun4035_ip = 207; continue _fun4035 }
case 109:
                    r2 = _closure1_slot0;
                    r1 = _closure1_slot1;
                    r1 = r1[r4];
                    r1 = r2.bind(r3)(r1);
                    r2 = r1.isPublicInstance;
                    r6 = null;
                    r4 = r5 == r6;
                    r1 = undefined;
                    if(r4) { _fun4035_ip = 202; continue _fun4035 }
case 143:
                    r4 = r5.getScrollResponder;
                    r4 = r4 == r6;
                    r1 = undefined;
                    if(r4) { _fun4035_ip = 202; continue _fun4035 }
case 158:
                    r4 = r5.getScrollResponder;
                    r5 = r4.bind(r5)();
                    r4 = r5 == r6;
                    r1 = undefined;
                    if(r4) { _fun4035_ip = 202; continue _fun4035 }
case 177:
                    r4 = r5.getNativeScrollRef;
                    r4 = r4 == r6;
                    r1 = undefined;
                    if(r4) { _fun4035_ip = 202; continue _fun4035 }
case 192:
                    r4 = r5.getNativeScrollRef;
                    r1 = r4.bind(r5)();
case 202:
                    r0 = r2.bind(r3)(r1);
case 207:
                    return r0;
                }
            };
            var _closure1_slot16 = r0;
            r0 = 0;
            r1 = r4[r0];
            r0 = undefined;
            r5 = r3.bind(r0)(r1);
            r18 = global;
            r9 = r18.Object;
            r8 = r9.defineProperty;
            r7 = {};
            r1 = true;
            r7['value'] = r1;
            r1 = '__esModule';
            r1 = r8.bind(r9)(r6, r1, r7);
            r1 = function(a0) { // Original name: createAnimatedPropsHook, environment: r2
                r3 = a0;
                var _closure2_slot0 = r3;
                r4 = _closure1_slot0;
                r2 = _closure1_slot1;
                r1 = 9;
                r1 = r2[r1];
                r2 = undefined;
                r1 = r4.bind(r2)(r1);
                r1 = r1.createAnimatedPropsMemoHook;
                r1 = r1.bind(r2)(r3);
                var _closure2_slot1 = r1;
                r0 = function(a0) { // Original name: useAnimatedProps, environment: r0
                    _fun4010: for(var _fun4010_ip = 0; ; ) switch(_fun4010_ip) {
case 0:
                        r4 = a0;
                        var _closure3_slot0 = r4;
                        r2 = _closure1_slot8;
                        r6 = r2.useReducer;
                        r3 = undefined;
                        r5 = function(a0) { // Environment: r1
                            r1 = a0;
                            r0 = 1;
                            r0 = r1 + r0;
                            return r0;
                        };
                        r2 = 0;
                        r6 = r6.bind(r3)(r5, r2);
                        r2 = _closure1_slot2;
                        r5 = r2.default;
                        r2 = 2;
                        r5 = r5.bind(r3)(r6, r2);
                        r2 = 1;
                        r2 = r5[r2];
                        var _closure3_slot1 = r2;
                        r2 = _closure1_slot8;
                        r2 = r2.useRef;
                        r5 = null;
                        r2 = r2.bind(r3)(r5);
                        var _closure3_slot2 = r2;
                        r2 = _closure1_slot8;
                        r2 = r2.useRef;
                        r2 = r2.bind(r3)(r5);
                        var _closure3_slot3 = r2;
                        r5 = _closure2_slot1;
                        r2 = function() { // Environment: r1
                            r0 = _closure1_slot3;
                            r4 = r0.default;
                            r7 = _closure3_slot0;
                            r5 = _closure2_slot0;
                            r0 = r4.prototype;
                            r1 = Object.create(r0, {constructor: {value: r4}});
                            r6 = function() { // Environment: r0
                                _fun4013: for(var _fun4013_ip = 0; ; ) switch(_fun4013_ip) {
case 0:
                                    r0 = _closure3_slot2;
                                    r2 = r0.current;
                                    r0 = null;
                                    r2 = r2 == r0;
                                    r0 = undefined;
                                    if(r2) { _fun4013_ip = 36; continue _fun4013 }
case 23:
                                    r2 = _closure3_slot2;
                                    r1 = r2.current;
                                    r0 = r1.bind(r2)();
case 36:
                                    return r0;
                                }
                            };
                            r8 = r1;
                            r0 = new r8[r4](r7, r6, r5, r4);
                            r0 = r0 instanceof Object ? r0 : r1;
                            return r0;
                        };
                        r2 = r5.bind(r3)(r2, r4);
                        var _closure3_slot4 = r2;
                        r6 = _closure1_slot6;
                        r5 = r6.shouldUseSetNativePropsInFabric;
                        r7 = r5.bind(r6)();
                        var _closure3_slot5 = r7;
                        r5 = _closure1_slot8;
                        r6 = r5.useEffect;
                        r5 = function() { // Environment: r1
                            _fun4014: for(var _fun4014_ip = 0; ; ) switch(_fun4014_ip) {
case 0:
                                r2 = _closure1_slot7;
                                r2 = r2.default;
                                r3 = r2.API;
                                r2 = r3.flushQueue;
                                r2 = r2.bind(r3)();
                                r2 = null;
                                var _closure4_slot0 = r2;
                                r2 = _closure3_slot4;
                                r2 = r2.__isNative;
                                if(!r2) { _fun4014_ip = 90; continue _fun4014 }
case 51:
                                r1 = _closure1_slot7;
                                r1 = r1.default;
                                r4 = r1.nativeEventEmitter;
                                r3 = r4.addListener;
                                r2 = 'onUserDrivenAnimationEnded';
                                r1 = function(a0) { // Environment: r0
                                    r1 = _closure3_slot4;
                                    r0 = r1.update;
                                    r0 = r0.bind(r1)();
                                    r0 = undefined;
                                    return r0;
                                };
                                r1 = r3.bind(r4)(r2, r1);
                                _closure4_slot0 = r1;
case 90:
                                r0 = function() { // Environment: r0
                                    _fun4016: for(var _fun4016_ip = 0; ; ) switch(_fun4016_ip) {
case 0:
                                        r1 = _closure4_slot0;
                                        r0 = null;
                                        if(!(r1 != r0)) { _fun4016_ip = 22; continue _fun4016 }
case 13:
                                        r0 = r1.remove;
                                        r0 = r0.bind(r1)();
case 22:
                                        r0 = undefined;
                                        return r0;
                                    }
                                };
                                return r0;
                            }
                        };
                        r5 = r6.bind(r3)(r5);
                        r6 = _closure1_slot6;
                        r5 = r6.scheduleAnimatedCleanupInMicrotask;
                        r5 = r5.bind(r6)();
                        if(r5) { _fun4010_ip = 186; continue _fun4010 }
case 180:
                        r5 = _closure1_slot13;
                        _fun4010_ip = 190; continue _fun4010;
case 186:
                        r5 = _closure1_slot14;
case 190:
                        r5 = r5.bind(r3)(r2);
                        r5 = _closure1_slot8;
                        r6 = r5.useCallback;
                        r5 = new Array(3);
                        r5[0] = r2;
                        r5[1] = r7;
                        r5[2] = r4;
                        r1 = function(a0) { // Environment: r1
                            _fun4017: for(var _fun4017_ip = 0; ; ) switch(_fun4017_ip) {
case 0:
                                r2 = a0;
                                var _closure4_slot0 = r2;
                                r3 = _closure3_slot4;
                                r1 = r3.setNativeView;
                                r1 = r1.bind(r3)(r2);
                                r3 = _closure3_slot2;
                                r1 = function() { // Environment: r0
                                    _fun4018: for(var _fun4018_ip = 0; ; ) switch(_fun4018_ip) {
case 0:
                                        r2 = _closure1_slot16;
                                        r1 = _closure4_slot0;
                                        r0 = undefined;
                                        r2 = r2.bind(r0)(r1);
                                        r4 = _closure3_slot4;
                                        r4 = r4.__isNative;
                                        if(r4) { _fun4018_ip = 257; continue _fun4018 }
case 39:
                                        r4 = _closure4_slot0;
                                        r5 = typeof r4;
                                        r4 = 'object';
                                        if(!(r5 === r4)) { _fun4018_ip = 247; continue _fun4018 }
case 57:
                                        r5 = _closure4_slot0;
                                        r4 = null;
                                        r6 = r5 == r4;
                                        r5 = undefined;
                                        if(r6) { _fun4018_ip = 82; continue _fun4018 }
case 72:
                                        r6 = _closure4_slot0;
                                        r5 = r6.setNativeProps;
case 82:
                                        r6 = typeof r5;
                                        r5 = 'function';
                                        if(!(r6 === r5)) { _fun4018_ip = 247; continue _fun4018 }
case 96:
                                        if(r2) { _fun4018_ip = 130; continue _fun4018 }
case 99:
                                        r7 = _closure4_slot0;
                                        r6 = r7.setNativeProps;
                                        r8 = _closure3_slot4;
                                        r5 = r8.__getAnimatedValue;
                                        r5 = r5.bind(r8)();
                                        r5 = r6.bind(r7)(r5);
                                        return r5;
case 130:
                                        r5 = _closure3_slot5;
                                        if(r5) { _fun4018_ip = 147; continue _fun4018 }
case 137:
                                        r5 = _closure3_slot1;
                                        r5 = r5.bind(r0)();
                                        return r5;
case 147:
                                        r6 = _closure4_slot0;
                                        r5 = r6.setNativeProps;
                                        r7 = _closure3_slot4;
                                        r3 = r7.__getAnimatedValue;
                                        r3 = r3.bind(r7)();
                                        r3 = r5.bind(r6)(r3);
                                        r3 = _closure3_slot3;
                                        r3 = r3.current;
                                        if(!(r3 != r4)) { _fun4018_ip = 211; continue _fun4018 }
case 189:
                                        r3 = global;
                                        r4 = r3.clearTimeout;
                                        r3 = _closure3_slot3;
                                        r3 = r3.current;
                                        r3 = r4.bind(r0)(r3);
case 211:
                                        r4 = _closure3_slot3;
                                        r3 = global;
                                        r6 = r3.setTimeout;
                                        r5 = function() { // Environment: r3
                                            r2 = _closure3_slot3;
                                            r1 = null;
                                            r2['current'] = r1;
                                            r1 = _closure3_slot1;
                                            r0 = undefined;
                                            r1 = r1.bind(r0)();
                                            return r0;
                                        };
                                        r3 = 48;
                                        r3 = r6.bind(r0)(r5, r3);
                                        r4['current'] = r3;
                                        return r0;
case 247:
                                        r3 = _closure3_slot1;
                                        r3 = r3.bind(r0)();
                                        return r3;
case 257:
                                        if(!r2) { _fun4018_ip = 268; continue _fun4018 }
case 260:
                                        r1 = _closure3_slot1;
                                        r1 = r1.bind(r0)();
case 268:
                                        return r0;
                                    }
                                };
                                r3['current'] = r1;
                                r1 = _closure1_slot15;
                                r10 = undefined;
                                r9 = r1.bind(r10)(r2);
                                var _closure4_slot1 = r9;
                                r8 = new Array(0);
                                var _closure4_slot2 = r8;
                                r7 = new Array(0);
                                var _closure4_slot3 = r7;
                                r5 = _closure3_slot0;
                                r1 = 10;
                                for(r2 in r5)
case 91:
                                {
case 100:
                                    r16 = r2;
                                    r13 = _closure3_slot0;
                                    r14 = r13[r16];
                                    r15 = _closure1_slot0;
                                    r13 = _closure1_slot1;
                                    r13 = r13[r1];
                                    r13 = r15.bind(r10)(r13);
                                    r13 = r13.AnimatedEvent;
                                    r13 = r14 instanceof r13;
                                    if(!r13) { _fun4017_ip = 91; continue _fun4017 }
case 141:
                                    r13 = r14.__isNative;
                                    if(!r13) { _fun4017_ip = 91; continue _fun4017 }
case 149:
                                    r13 = r14.__attach;
                                    r13 = r13.bind(r14)(r9, r16);
                                    r15 = r8.push;
                                    r13 = new Array(2);
                                    r13[0] = r16;
                                    r13[1] = r14;
                                    r13 = r15.bind(r8)(r13);
                                    r13 = _closure1_slot11;
                                    r13 = r13.bind(r10)(r14, r7);
                                    _fun4017_ip = 91; continue _fun4017;
                                }
case 195:
                                r0 = function() { // Environment: r0
                                    _fun4020: for(var _fun4020_ip = 0; ; ) switch(_fun4020_ip) {
case 0:
                                        r1 = _closure3_slot2;
                                        r0 = null;
                                        r1['current'] = r0;
                                        r0 = _closure4_slot2;
                                        r7 = r0;
                                        r3 = r7[Symbol.iterator];
                                        r7 = r3().next;
                                        r0 = undefined;
                                        r5 = 2;
                                        r4 = 0;
                                        r2 = 1;
case 41:
                                        r9 = r7().value;
                                        r8 = r3;
                                        if(!(r8 !== r0)) { _fun4020_ip = 100; continue _fun4020 }
case 52: // try_start_0
                                        r8 = _closure1_slot2;
                                        r8 = r8.default;
                                        r8 = r8.bind(r0)(r9, r5);
                                        r11 = r8[r4];
                                        r10 = r8[r2];
                                        r9 = r10.__detach;
                                        r8 = _closure4_slot1;
                                        r8 = r9.bind(r10)(r8, r11);
case 91: // try_end0
                                        _fun4020_ip = 41; continue _fun4020;
case 93: // catch_target0
                                        CatchBlockStart(arg_register=2);
                                        r3.return();
                                        throw r2;
case 100:
                                        r3 = _closure4_slot3;
                                        r1 = r3;
                                        r2 = r1[Symbol.iterator];
                                        r1 = r2().next;
case 110:
                                        r3 = r1().value;
                                        r4 = r2;
                                        if(!(r4 !== r0)) { _fun4020_ip = 153; continue _fun4020 }
case 121: // try_start_1
                                        r5 = r3.propValue;
                                        r4 = r3.listenerId;
                                        r3 = r5.removeListener;
                                        r3 = r3.bind(r5)(r4);
case 144: // try_end1
                                        _fun4020_ip = 110; continue _fun4020;
case 146: // catch_target1
                                        CatchBlockStart(arg_register=1);
                                        r2.return();
                                        throw r1;
case 153:
                                        return r0;
                                    }
                                };
                                return r0;
                            }
                        };
                        r5 = r6.bind(r3)(r1, r5);
                        r1 = _closure1_slot5;
                        r1 = r1.default;
                        r1 = r1.bind(r3)(r5);
                        r0 = _closure1_slot10;
                        r2 = r0.bind(r3)(r2, r4);
                        r0 = new Array(2);
                        r0[0] = r2;
                        r0[1] = r1;
                        return r0;
                    }
                };
                return r0;
            };
            r6['default'] = r1;
            r1 = 1;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot2 = r1;
            r1 = 2;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            r1 = 3;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot3 = r1;
            r1 = 4;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot4 = r1;
            r1 = 5;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot5 = r1;
            r1 = 6;
            r1 = r4[r1];
            r7 = r3.bind(r0)(r1);
            if(!r7) { _fun4006_ip = 277; continue _fun4006 }
case 263:
            r6 = r7.__esModule;
            r1 = r7;
            if(r6) { _fun4006_ip = 544; continue _fun4006 }
case 277:
            r17 = null;
            if(!(r17 !== r7)) { _fun4006_ip = 535; continue _fun4006 }
case 286:
            r8 = typeof r7;
            r6 = 'object';
            if(!(r6 !== r8)) { _fun4006_ip = 308; continue _fun4006 }
case 297:
            r6 = 'function';
            if(!(r6 === r8)) { _fun4006_ip = 535; continue _fun4006 }
case 308:
            r6 = _closure1_slot9;
            r8 = r6.bind(r0)(r0);
            if(!r8) { _fun4006_ip = 336; continue _fun4006 }
case 320:
            r6 = r8.has;
            r6 = r6.bind(r8)(r7);
            if(r6) { _fun4006_ip = 523; continue _fun4006 }
case 336:
            r6 = Object.create(r17);
            r9 = r18.Object;
            r16 = r9.defineProperty;
            if(!r16) { _fun4006_ip = 364; continue _fun4006 }
case 353:
            r9 = r18.Object;
            r16 = r9.getOwnPropertyDescriptor;
case 364:
            r14 = r7;
            r10 = 'default';
            r9 = undefined;
            for(r11 in r14)
case 381:
            {
case 390:
                r22 = r11;
                if(r10 === r22) { _fun4006_ip = 381; continue _fun4006 }
case 397:
                r19 = {};
                r20 = r19.hasOwnProperty;
                r19 = r20.call;
                r19 = r19.bind(r20)(r7, r22);
                if(!r19) { _fun4006_ip = 381; continue _fun4006 }
case 418:
                r19 = null;
                if(!r16) { _fun4006_ip = 440; continue _fun4006 }
case 423:
                r21 = r18.Object;
                r20 = r21.getOwnPropertyDescriptor;
                r19 = r20.bind(r21)(r7, r22);
case 440:
                if(!r19) { _fun4006_ip = 459; continue _fun4006 }
case 443:
                r20 = r19.get;
                if(r20) { _fun4006_ip = 472; continue _fun4006 }
case 451:
                r20 = r19.set;
                if(r20) { _fun4006_ip = 472; continue _fun4006 }
case 459:
                r20 = r7[r22];
                r6[r22] = r20;
                r9 = r19;
                _fun4006_ip = 381; continue _fun4006;
case 472:
                r21 = r18.Object;
                r20 = r21.defineProperty;
                r20 = r20.bind(r21)(r6, r22, r19);
                r9 = r19;
                _fun4006_ip = 381; continue _fun4006;
            }
case 495:
            r6['default'] = r7;
            r1 = r6;
            if(!r8) { _fun4006_ip = 544; continue _fun4006 }
case 507:
            r9 = r8.set;
            r9 = r9.bind(r8)(r7, r6);
            r1 = r6;
            _fun4006_ip = 544; continue _fun4006;
case 523:
            r6 = r8.get;
            r1 = r6.bind(r8)(r7);
            _fun4006_ip = 544; continue _fun4006;
case 535:
            r6 = {};
            r6['default'] = r7;
            r1 = r6;
case 544:
            var _closure1_slot6 = r1;
            r1 = 7;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            var _closure1_slot7 = r1;
            r1 = 8;
            r1 = r4[r1];
            r1 = r3.bind(r0)(r1);
            var _closure1_slot8 = r1;
            return r0;
        }
    };
    r6 = 330;
    r5 = [1, 38, 311, 310, 317, 331, 73, 304, 119, 332, 316, 333];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r1 = a5;
        r0 = global;
        r5 = r0.Object;
        r4 = r5.defineProperty;
        r3 = {};
        r0 = true;
        r3['value'] = r0;
        r0 = '__esModule';
        r0 = r4.bind(r5)(r1, r0, r3);
        r0 = function(a0) { // Original name: useRefEffect, environment: r2
            r4 = a0;
            var _closure2_slot0 = r4;
            r2 = _closure1_slot0;
            r2 = r2.useRef;
            r3 = undefined;
            r2 = r2.bind(r3)(r3);
            var _closure2_slot1 = r2;
            r1 = _closure1_slot0;
            r2 = r1.useCallback;
            r1 = new Array(1);
            r1[0] = r4;
            r0 = function(a0) { // Environment: r0
                _fun4038: for(var _fun4038_ip = 0; ; ) switch(_fun4038_ip) {
case 0:
                    r3 = a0;
                    r1 = _closure2_slot1;
                    r1 = r1.current;
                    if(!r1) { _fun4038_ip = 39; continue _fun4038 }
case 18:
                    r2 = _closure2_slot1;
                    r1 = r2.current;
                    r1 = r1.bind(r2)();
                    r1 = undefined;
                    r2['current'] = r1;
case 39:
                    r1 = null;
                    if(!(r3 != r1)) { _fun4038_ip = 66; continue _fun4038 }
case 45:
                    r1 = _closure2_slot1;
                    r2 = _closure2_slot0;
                    r0 = undefined;
                    r0 = r2.bind(r0)(r3);
                    r1['current'] = r0;
case 66:
                    r0 = undefined;
                    return r0;
                }
            };
            r0 = r2.bind(r3)(r0, r1);
            return r0;
        };
        r1['default'] = r0;
        r1 = a6;
        r0 = 0;
        r3 = r1[r0];
        r1 = a1;
        r0 = undefined;
        r1 = r1.bind(r0)(r3);
        var _closure1_slot0 = r1;
        return r0;
    };
    r6 = 331;
    r5 = [119];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun4039: for(var _fun4039_ip = 0; ; ) switch(_fun4039_ip) {
case 0:
            r4 = a1;
            r7 = a5;
            r5 = a6;
            var _closure1_slot0 = r4;
            var _closure1_slot1 = r5;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r2
                _fun4040: for(var _fun4040_ip = 0; ; ) switch(_fun4040_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun4040_ip = 104; continue _fun4040 }
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
                        _fun4041: for(var _fun4041_ip = 0; ; ) switch(_fun4041_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun4041_ip = 15; continue _fun4041 }
case 9:
                            r0 = _closure2_slot0;
                            _fun4041_ip = 19; continue _fun4041;
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
            r3 = function(a0, a1) { // Original name: createCompositeKeyForProps, environment: r2
                _fun4050: for(var _fun4050_ip = 0; ; ) switch(_fun4050_ip) {
case 0:
                    r15 = a0;
                    r14 = a1;
                    r13 = global;
                    r1 = r13.Object;
                    r0 = r1.keys;
                    r12 = r0.bind(r1)(r15);
                    r11 = r12.length;
                    r10 = 0;
                    r16 = r10 < r11;
                    r9 = null;
                    r8 = undefined;
                    r6 = 8;
                    r5 = 7;
                    r4 = 'style';
                    r3 = null;
                    r2 = undefined;
                    r1 = undefined;
                    r0 = null;
                    if(!r16) { _fun4050_ip = 396; continue _fun4050 }
case 66:
                    r23 = r12[r10];
                    r25 = r15[r23];
                    r24 = r3;
                    r16 = r10;
                    r19 = r2;
                    r22 = r1;
                    if(!(r14 != r9)) { _fun4050_ip = 112; continue _fun4050 }
case 90:
                    r17 = _closure1_slot9;
                    r20 = r17.bind(r8)(r14, r23);
                    r17 = r24;
                    r18 = r22;
                    if(!r20) { _fun4050_ip = 374; continue _fun4050 }
case 112:
                    if(!(r23 !== r4)) { _fun4050_ip = 286; continue _fun4050 }
case 119:
                    r20 = _closure1_slot3;
                    r20 = r20.default;
                    r26 = r25 instanceof r20;
                    r21 = r25;
                    r20 = r22;
                    if(r26) { _fun4050_ip = 339; continue _fun4050 }
case 144:
                    r27 = _closure1_slot0;
                    r26 = _closure1_slot1;
                    r26 = r26[r5];
                    r26 = r27.bind(r8)(r26);
                    r26 = r26.AnimatedEvent;
                    r26 = r25 instanceof r26;
                    r21 = r25;
                    r20 = r22;
                    if(r26) { _fun4050_ip = 339; continue _fun4050 }
case 183:
                    r27 = r13.Array;
                    r26 = r27.isArray;
                    r26 = r26.bind(r27)(r25);
                    if(r26) { _fun4050_ip = 262; continue _fun4050 }
case 202:
                    r27 = _closure1_slot0;
                    r26 = _closure1_slot1;
                    r26 = r26[r6];
                    r26 = r27.bind(r8)(r26);
                    r26 = r26.isPlainObject;
                    r26 = r26.bind(r8)(r25);
                    r21 = undefined;
                    r20 = r22;
                    if(!r26) { _fun4050_ip = 339; continue _fun4050 }
case 238:
                    r26 = r25;
                    if(!(r14 != r9)) { _fun4050_ip = 254; continue _fun4050 }
case 245:
                    r27 = _closure1_slot13;
                    r26 = r27.bind(r8)(r25);
case 254:
                    r21 = r26;
                    r20 = r22;
                    _fun4050_ip = 339; continue _fun4050;
case 262:
                    r26 = r25;
                    if(!(r14 != r9)) { _fun4050_ip = 278; continue _fun4050 }
case 269:
                    r27 = _closure1_slot12;
                    r26 = r27.bind(r8)(r25);
case 278:
                    r21 = r26;
                    r20 = r22;
                    _fun4050_ip = 339; continue _fun4050;
case 286:
                    r22 = _closure1_slot4;
                    r22 = r22.default;
                    r22 = r22.bind(r8)(r25);
                    r25 = r22 != r9;
                    r21 = undefined;
                    r20 = r22;
                    if(!r25) { _fun4050_ip = 339; continue _fun4050 }
case 312:
                    r26 = _closure1_slot13;
                    r27 = r14 == r9;
                    r25 = undefined;
                    if(r27) { _fun4050_ip = 330; continue _fun4050 }
case 325:
                    r25 = r14.style;
case 330:
                    r21 = r26.bind(r8)(r22, r25);
                    r20 = r22;
case 339:
                    r17 = r24;
                    r19 = r21;
                    r18 = r20;
                    if(!(r21 != r9)) { _fun4050_ip = 374; continue _fun4050 }
case 352:
                    r22 = r24;
                    if(!(r24 == r9)) { _fun4050_ip = 361; continue _fun4050 }
case 359:
                    r22 = {};
case 361:
                    r22[r23] = r21;
                    r17 = r22;
                    r19 = r21;
                    r18 = r20;
case 374:
                    r10 = r16 + 1;
                    r3 = r17;
                    r2 = r19;
                    r1 = r18;
                    r0 = r3;
                    if(r10 < r11) { _fun4050_ip = 66; continue _fun4050 }
case 396:
                    return r0;
                }
            };
            var _closure1_slot11 = r3;
            r0 = function(a0) { // Original name: createCompositeKeyForArray, environment: r2
                _fun4051: for(var _fun4051_ip = 0; ; ) switch(_fun4051_ip) {
case 0:
                    r9 = a0;
                    r8 = r9.length;
                    r7 = 0;
                    r10 = r7 < r8;
                    r6 = null;
                    r5 = global;
                    r4 = undefined;
                    r2 = 8;
                    r1 = null;
                    r0 = null;
                    if(!r10) { _fun4051_ip = 216; continue _fun4051 }
case 36:
                    r12 = r9[r7];
                    r10 = _closure1_slot3;
                    r10 = r10.default;
                    r11 = r12 instanceof r10;
                    r14 = r1;
                    r10 = r7;
                    r13 = r12;
                    if(r11) { _fun4051_ip = 137; continue _fun4051 }
case 65:
                    r15 = r5.Array;
                    r11 = r15.isArray;
                    r11 = r11.bind(r15)(r12);
                    if(r11) { _fun4051_ip = 128; continue _fun4051 }
case 84:
                    r15 = _closure1_slot0;
                    r11 = _closure1_slot1;
                    r11 = r11[r2];
                    r11 = r15.bind(r4)(r11);
                    r11 = r11.isPlainObject;
                    r11 = r11.bind(r4)(r12);
                    r13 = undefined;
                    if(!r11) { _fun4051_ip = 137; continue _fun4051 }
case 117:
                    r11 = _closure1_slot13;
                    r13 = r11.bind(r4)(r12);
                    _fun4051_ip = 137; continue _fun4051;
case 128:
                    r11 = _closure1_slot12;
                    r13 = r11.bind(r4)(r12);
case 137:
                    r11 = r14;
                    if(!(r13 != r6)) { _fun4051_ip = 200; continue _fun4051 }
case 144:
                    r12 = r14;
                    if(!(r14 == r6)) { _fun4051_ip = 193; continue _fun4051 }
case 151:
                    r16 = r5.Array;
                    r17 = r9.length;
                    r15 = r16.prototype;
                    r15 = Object.create(r15, {constructor: {value: r16}});
                    r18 = r15;
                    r14 = new r18[r16](r17, r16);
                    r15 = r14 instanceof Object ? r14 : r15;
                    r14 = r15.fill;
                    r12 = r14.bind(r15)(r6);
case 193:
                    r12[r10] = r13;
                    r11 = r12;
case 200:
                    r7 = r10 + 1;
                    r1 = r11;
                    r0 = r1;
                    if(r7 < r8) { _fun4051_ip = 36; continue _fun4051 }
case 216:
                    return r0;
                }
            };
            var _closure1_slot12 = r0;
            r0 = function(a0, a1) { // Original name: createCompositeKeyForObject, environment: r2
                _fun4052: for(var _fun4052_ip = 0; ; ) switch(_fun4052_ip) {
case 0:
                    r13 = a0;
                    r12 = a1;
                    r11 = global;
                    r1 = r11.Object;
                    r0 = r1.keys;
                    r10 = r0.bind(r1)(r13);
                    r9 = r10.length;
                    r8 = 0;
                    r14 = r8 < r9;
                    r7 = null;
                    r6 = undefined;
                    r4 = 8;
                    r3 = null;
                    r2 = undefined;
                    r1 = undefined;
                    r0 = null;
                    if(!r14) { _fun4052_ip = 250; continue _fun4052 }
case 59:
                    r21 = r10[r8];
                    r22 = r3;
                    r14 = r8;
                    r17 = r2;
                    r16 = r1;
                    if(!(r12 != r7)) { _fun4052_ip = 98; continue _fun4052 }
case 79:
                    r15 = _closure1_slot9;
                    r18 = r15.bind(r6)(r12, r21);
                    r15 = r22;
                    if(!r18) { _fun4052_ip = 228; continue _fun4052 }
case 98:
                    r19 = r13[r21];
                    r18 = _closure1_slot3;
                    r18 = r18.default;
                    r20 = r19 instanceof r18;
                    r18 = r19;
                    if(r20) { _fun4052_ip = 193; continue _fun4052 }
case 121:
                    r23 = r11.Array;
                    r20 = r23.isArray;
                    r20 = r20.bind(r23)(r19);
                    if(r20) { _fun4052_ip = 184; continue _fun4052 }
case 140:
                    r23 = _closure1_slot0;
                    r20 = _closure1_slot1;
                    r20 = r20[r4];
                    r20 = r23.bind(r6)(r20);
                    r20 = r20.isPlainObject;
                    r20 = r20.bind(r6)(r19);
                    r18 = undefined;
                    if(!r20) { _fun4052_ip = 193; continue _fun4052 }
case 173:
                    r20 = _closure1_slot13;
                    r18 = r20.bind(r6)(r19);
                    _fun4052_ip = 193; continue _fun4052;
case 184:
                    r20 = _closure1_slot12;
                    r18 = r20.bind(r6)(r19);
case 193:
                    r15 = r22;
                    r17 = r19;
                    r16 = r18;
                    if(!(r18 != r7)) { _fun4052_ip = 228; continue _fun4052 }
case 206:
                    r20 = r22;
                    if(!(r22 == r7)) { _fun4052_ip = 215; continue _fun4052 }
case 213:
                    r20 = {};
case 215:
                    r20[r21] = r18;
                    r15 = r20;
                    r17 = r19;
                    r16 = r18;
case 228:
                    r8 = r14 + 1;
                    r3 = r15;
                    r2 = r17;
                    r1 = r16;
                    r0 = r3;
                    if(r8 < r9) { _fun4052_ip = 59; continue _fun4052 }
case 250:
                    return r0;
                }
            };
            var _closure1_slot13 = r0;
            r8 = function(a0, a1, a2) { // Original name: areCompositeKeysEqual, environment: r2
                _fun4053: for(var _fun4053_ip = 0; ; ) switch(_fun4053_ip) {
case 0:
                    r10 = a0;
                    r9 = a1;
                    r8 = a2;
                    if(!(r10 !== r9)) { _fun4053_ip = 265; continue _fun4053 }
case 16:
                    r7 = null;
                    if(!(r10 !== r7)) { _fun4053_ip = 261; continue _fun4053 }
case 25:
                    if(!(r9 !== r7)) { _fun4053_ip = 261; continue _fun4053 }
case 32:
                    r0 = global;
                    r2 = r0.Object;
                    r1 = r2.keys;
                    r6 = r1.bind(r2)(r10);
                    r5 = r6.length;
                    r1 = r0.Object;
                    r0 = r1.keys;
                    r0 = r0.bind(r1)(r9);
                    r0 = r0.length;
                    if(!(r5 === r0)) { _fun4053_ip = 257; continue _fun4053 }
case 83:
                    r4 = 0;
                    r11 = r4 < r5;
                    r2 = undefined;
                    r1 = 7;
                    r0 = 'style';
                    if(!r11) { _fun4053_ip = 253; continue _fun4053 }
case 107:
                    r12 = r6[r4];
                    r11 = _closure1_slot9;
                    r13 = r11.bind(r2)(r9, r12);
                    r11 = r4;
                    if(r13) { _fun4053_ip = 131; continue _fun4053 }
case 127:
                    r13 = false;
                    return r13;
case 131:
                    r14 = r10[r12];
                    r13 = r9[r12];
                    if(!(r12 !== r0)) { _fun4053_ip = 226; continue _fun4053 }
case 143:
                    r12 = _closure1_slot3;
                    r12 = r12.default;
                    r12 = r14 instanceof r12;
                    if(r12) { _fun4053_ip = 218; continue _fun4053 }
case 159:
                    r15 = _closure1_slot0;
                    r12 = _closure1_slot1;
                    r12 = r12[r1];
                    r12 = r15.bind(r2)(r12);
                    r12 = r12.AnimatedEvent;
                    r12 = r14 instanceof r12;
                    if(r12) { _fun4053_ip = 218; continue _fun4053 }
case 189:
                    if(!(r8 != r7)) { _fun4053_ip = 210; continue _fun4053 }
case 193:
                    r12 = _closure1_slot15;
                    r12 = r12.bind(r2)(r14, r13);
                    if(r12) { _fun4053_ip = 243; continue _fun4053 }
case 206:
                    r12 = false;
                    return r12;
case 210:
                    if(!(r14 !== r13)) { _fun4053_ip = 243; continue _fun4053 }
case 214:
                    r12 = false;
                    return r12;
case 218:
                    if(!(r14 !== r13)) { _fun4053_ip = 243; continue _fun4053 }
case 222:
                    r12 = false;
                    return r12;
case 226:
                    r12 = _closure1_slot15;
                    r12 = r12.bind(r2)(r14, r13);
                    if(r12) { _fun4053_ip = 243; continue _fun4053 }
case 239:
                    r12 = false;
                    return r12;
case 243:
                    r4 = r11 + 1;
                    if(r4 < r5) { _fun4053_ip = 107; continue _fun4053 }
case 253:
                    r0 = true;
                    return r0;
case 257:
                    r0 = false;
                    return r0;
case 261:
                    r0 = false;
                    return r0;
case 265:
                    r0 = true;
                    return r0;
                }
            };
            var _closure1_slot14 = r8;
            r0 = function(a0, a1) { // Original name: areCompositeKeyComponentsEqual, environment: r2
                _fun4054: for(var _fun4054_ip = 0; ; ) switch(_fun4054_ip) {
case 0:
                    r6 = a0;
                    r5 = a1;
                    r0 = r6 === r5;
                    if(r0) { _fun4054_ip = 359; continue _fun4054 }
case 16:
                    r1 = _closure1_slot3;
                    r1 = r1.default;
                    r1 = r6 instanceof r1;
                    if(r1) { _fun4054_ip = 357; continue _fun4054 }
case 38:
                    r1 = global;
                    r3 = r1.Array;
                    r2 = r3.isArray;
                    r2 = r2.bind(r3)(r6);
                    if(r2) { _fun4054_ip = 266; continue _fun4054 }
case 62:
                    r3 = _closure1_slot0;
                    r2 = _closure1_slot1;
                    r7 = 8;
                    r2 = r2[r7];
                    r8 = undefined;
                    r2 = r3.bind(r8)(r2);
                    r2 = r2.isPlainObject;
                    r2 = r2.bind(r8)(r6);
                    if(r2) { _fun4054_ip = 102; continue _fun4054 }
case 98:
                    r2 = false;
                    return r2;
case 102:
                    r3 = _closure1_slot0;
                    r2 = _closure1_slot1;
                    r2 = r2[r7];
                    r2 = r3.bind(r8)(r2);
                    r2 = r2.isPlainObject;
                    r2 = r2.bind(r8)(r5);
                    if(r2) { _fun4054_ip = 137; continue _fun4054 }
case 133:
                    r2 = false;
                    return r2;
case 137:
                    r3 = r1.Object;
                    r2 = r3.keys;
                    r7 = r2.bind(r3)(r6);
                    r3 = r7.length;
                    r9 = r1.Object;
                    r2 = r9.keys;
                    r2 = r2.bind(r9)(r5);
                    r2 = r2.length;
                    if(!(r3 === r2)) { _fun4054_ip = 262; continue _fun4054 }
case 183:
                    r2 = 0;
                    r9 = r2 < r3;
                    if(!r9) { _fun4054_ip = 258; continue _fun4054 }
case 192:
                    r10 = r7[r2];
                    r11 = _closure1_slot9;
                    r9 = _closure1_slot6;
                    r9 = r9.default;
                    r9 = r9.bind(r8)(r5);
                    r11 = r11.bind(r8)(r9, r10);
                    r9 = r2;
                    if(!r11) { _fun4054_ip = 247; continue _fun4054 }
case 226:
                    r12 = _closure1_slot15;
                    r11 = r6[r10];
                    r10 = r5[r10];
                    r10 = r12.bind(r8)(r11, r10);
                    if(r10) { _fun4054_ip = 251; continue _fun4054 }
case 247:
                    r10 = false;
                    return r10;
case 251:
                    r2 = r9 + 1;
                    if(r2 < r3) { _fun4054_ip = 192; continue _fun4054 }
case 258:
                    r2 = true;
                    return r2;
case 262:
                    r2 = false;
                    return r2;
case 266:
                    r2 = r1.Array;
                    r1 = r2.isArray;
                    r1 = r1.bind(r2)(r5);
                    if(r1) { _fun4054_ip = 289; continue _fun4054 }
case 285:
                    r1 = false;
                    return r1;
case 289:
                    r3 = r6.length;
                    r1 = r5.length;
                    if(!(r3 === r1)) { _fun4054_ip = 353; continue _fun4054 }
case 303:
                    r2 = 0;
                    r7 = r2 < r3;
                    r1 = undefined;
                    if(!r7) { _fun4054_ip = 349; continue _fun4054 }
case 314:
                    r9 = _closure1_slot15;
                    r8 = r6[r2];
                    r7 = r5[r2];
                    r8 = r9.bind(r1)(r8, r7);
                    r7 = r2;
                    if(r8) { _fun4054_ip = 342; continue _fun4054 }
case 338:
                    r8 = false;
                    return r8;
case 342:
                    r2 = r7 + 1;
                    if(r2 < r3) { _fun4054_ip = 314; continue _fun4054 }
case 349:
                    r1 = true;
                    return r1;
case 353:
                    r1 = false;
                    return r1;
case 357:
                    return r0;
case 359:
                    r0 = true;
                    return r0;
                }
            };
            var _closure1_slot15 = r0;
            r0 = 0;
            r1 = r5[r0];
            r0 = undefined;
            r6 = r4.bind(r0)(r1);
            r1 = global;
            r12 = r1.Object;
            r11 = r12.defineProperty;
            r10 = {};
            r9 = true;
            r10['value'] = r9;
            r9 = '__esModule';
            r9 = r11.bind(r12)(r7, r9, r10);
            r7['areCompositeKeysEqual'] = r8;
            r8 = function(a0) { // Original name: createAnimatedPropsMemoHook, environment: r2
                r1 = a0;
                var _closure2_slot0 = r1;
                r1 = function(a0, a1) { // Original name: useAnimatedPropsMemo_ref, environment: r0
                    _fun4043: for(var _fun4043_ip = 0; ; ) switch(_fun4043_ip) {
case 0:
                        r0 = a1;
                        var _closure3_slot0 = r0;
                        r3 = _closure1_slot7;
                        r5 = r3.useMemo;
                        r3 = new Array(1);
                        r3[0] = r0;
                        r4 = undefined;
                        r0 = function() { // Environment: r1
                            r3 = _closure1_slot11;
                            r2 = _closure3_slot0;
                            r1 = _closure2_slot0;
                            r0 = undefined;
                            r0 = r3.bind(r0)(r2, r1);
                            return r0;
                        };
                        r5 = r5.bind(r4)(r0, r3);
                        r0 = _closure1_slot7;
                        r0 = r0.useRef;
                        r0 = r0.bind(r4)();
                        var _closure3_slot1 = r0;
                        r0 = r0.current;
                        r3 = null;
                        if(!(r0 != r3)) { _fun4043_ip = 97; continue _fun4043 }
case 70:
                        r7 = _closure1_slot14;
                        r6 = r0.compositeKey;
                        r3 = _closure2_slot0;
                        r3 = r7.bind(r4)(r6, r5, r3);
                        if(r3) { _fun4043_ip = 119; continue _fun4043 }
case 97:
                        r3 = {};
                        r3['compositeKey'] = r5;
                        r5 = a0;
                        r5 = r5.bind(r4)();
                        r3['node'] = r5;
                        r0 = r3;
case 119:
                        var _closure3_slot2 = r0;
                        r2 = _closure1_slot7;
                        r3 = r2.useInsertionEffect;
                        r2 = new Array(1);
                        r2[0] = r0;
                        r1 = function() { // Environment: r1
                            r1 = _closure3_slot1;
                            r0 = _closure3_slot2;
                            r1['current'] = r0;
                            r0 = undefined;
                            return r0;
                        };
                        r1 = r3.bind(r4)(r1, r2);
                        r0 = r0.node;
                        return r0;
                    }
                };
                var _closure2_slot1 = r1;
                r1 = function(a0, a1) { // Original name: useAnimatedPropsMemo_state, environment: r0
                    _fun4046: for(var _fun4046_ip = 0; ; ) switch(_fun4046_ip) {
case 0:
                        r4 = a0;
                        r2 = a1;
                        var _closure3_slot0 = r4;
                        var _closure3_slot1 = r2;
                        r3 = _closure1_slot7;
                        r6 = r3.useMemo;
                        r5 = new Array(1);
                        r5[0] = r2;
                        r3 = undefined;
                        r2 = function() { // Environment: r0
                            r3 = _closure1_slot11;
                            r2 = _closure3_slot1;
                            r1 = _closure2_slot0;
                            r0 = undefined;
                            r0 = r3.bind(r0)(r2, r1);
                            return r0;
                        };
                        r5 = r6.bind(r3)(r2, r5);
                        var _closure3_slot2 = r5;
                        r2 = _closure1_slot7;
                        r2 = r2.useState;
                        r0 = function() { // Environment: r0
                            r0 = {};
                            r1 = _closure2_slot0;
                            r0['allowlist'] = r1;
                            r2 = _closure3_slot2;
                            r0['compositeKey'] = r2;
                            r2 = _closure3_slot0;
                            r1 = undefined;
                            r1 = r2.bind(r1)();
                            r0['value'] = r1;
                            return r0;
                        };
                        r6 = r2.bind(r3)(r0);
                        r0 = _closure1_slot2;
                        r2 = r0.default;
                        r0 = 2;
                        r6 = r2.bind(r3)(r6, r0);
                        r0 = 0;
                        r0 = r6[r0];
                        r2 = 1;
                        r2 = r6[r2];
                        r8 = r0.allowlist;
                        r7 = _closure2_slot0;
                        if(!(r8 === r7)) { _fun4046_ip = 139; continue _fun4046 }
case 120:
                        r7 = _closure1_slot14;
                        r1 = r0.compositeKey;
                        r1 = r7.bind(r3)(r1, r5);
                        if(r1) { _fun4046_ip = 168; continue _fun4046 }
case 139:
                        r1 = {};
                        r6 = _closure2_slot0;
                        r1['allowlist'] = r6;
                        r1['compositeKey'] = r5;
                        r4 = r4.bind(r3)();
                        r1['value'] = r4;
                        r1 = r2.bind(r3)(r1);
case 168:
                        r0 = r0.value;
                        return r0;
                    }
                };
                var _closure2_slot2 = r1;
                r0 = function(a0, a1) { // Original name: useAnimatedPropsMemo, environment: r0
                    _fun4049: for(var _fun4049_ip = 0; ; ) switch(_fun4049_ip) {
case 0:
                        r1 = _closure1_slot5;
                        r0 = r1.avoidStateUpdateInAnimatedPropsMemo;
                        r1 = r0.bind(r1)();
                        if(r1) { _fun4049_ip = 29; continue _fun4049 }
case 23:
                        r3 = _closure2_slot2;
                        _fun4049_ip = 33; continue _fun4049;
case 29:
                        r3 = _closure2_slot1;
case 33:
                        r2 = undefined;
                        r1 = a0;
                        r0 = a1;
                        r0 = r3.bind(r2)(r1, r0);
                        return r0;
                    }
                };
                return r0;
            };
            r7['createAnimatedPropsMemoHook'] = r8;
            r7['createCompositeKeyForProps'] = r3;
            r3 = 1;
            r3 = r5[r3];
            r3 = r4.bind(r0)(r3);
            r3 = r6.bind(r0)(r3);
            var _closure1_slot2 = r3;
            r3 = 2;
            r3 = r5[r3];
            r3 = r4.bind(r0)(r3);
            r3 = r6.bind(r0)(r3);
            var _closure1_slot3 = r3;
            r3 = 3;
            r3 = r5[r3];
            r3 = r4.bind(r0)(r3);
            r3 = r6.bind(r0)(r3);
            var _closure1_slot4 = r3;
            r3 = 4;
            r3 = r5[r3];
            r8 = r4.bind(r0)(r3);
            if(!r8) { _fun4039_ip = 233; continue _fun4039 }
case 219:
            r7 = r8.__esModule;
            r3 = r8;
            if(r7) { _fun4039_ip = 500; continue _fun4039 }
case 233:
            r18 = null;
            if(!(r18 !== r8)) { _fun4039_ip = 491; continue _fun4039 }
case 242:
            r9 = typeof r8;
            r7 = 'object';
            if(!(r7 !== r9)) { _fun4039_ip = 264; continue _fun4039 }
case 253:
            r7 = 'function';
            if(!(r7 === r9)) { _fun4039_ip = 491; continue _fun4039 }
case 264:
            r7 = _closure1_slot10;
            r9 = r7.bind(r0)(r0);
            if(!r9) { _fun4039_ip = 292; continue _fun4039 }
case 276:
            r7 = r9.has;
            r7 = r7.bind(r9)(r8);
            if(r7) { _fun4039_ip = 479; continue _fun4039 }
case 292:
            r7 = Object.create(r18);
            r10 = r1.Object;
            r17 = r10.defineProperty;
            if(!r17) { _fun4039_ip = 320; continue _fun4039 }
case 309:
            r10 = r1.Object;
            r17 = r10.getOwnPropertyDescriptor;
case 320:
            r15 = r8;
            r11 = 'default';
            r10 = undefined;
            for(r12 in r15)
case 337:
            {
case 346:
                r22 = r12;
                if(r11 === r22) { _fun4039_ip = 337; continue _fun4039 }
case 353:
                r19 = {};
                r20 = r19.hasOwnProperty;
                r19 = r20.call;
                r19 = r19.bind(r20)(r8, r22);
                if(!r19) { _fun4039_ip = 337; continue _fun4039 }
case 374:
                r19 = null;
                if(!r17) { _fun4039_ip = 396; continue _fun4039 }
case 379:
                r21 = r1.Object;
                r20 = r21.getOwnPropertyDescriptor;
                r19 = r20.bind(r21)(r8, r22);
case 396:
                if(!r19) { _fun4039_ip = 415; continue _fun4039 }
case 399:
                r20 = r19.get;
                if(r20) { _fun4039_ip = 428; continue _fun4039 }
case 407:
                r20 = r19.set;
                if(r20) { _fun4039_ip = 428; continue _fun4039 }
case 415:
                r20 = r8[r22];
                r7[r22] = r20;
                r10 = r19;
                _fun4039_ip = 337; continue _fun4039;
case 428:
                r21 = r1.Object;
                r20 = r21.defineProperty;
                r20 = r20.bind(r21)(r7, r22, r19);
                r10 = r19;
                _fun4039_ip = 337; continue _fun4039;
            }
case 451:
            r7['default'] = r8;
            r3 = r7;
            if(!r9) { _fun4039_ip = 500; continue _fun4039 }
case 463:
            r10 = r9.set;
            r10 = r10.bind(r9)(r8, r7);
            r3 = r7;
            _fun4039_ip = 500; continue _fun4039;
case 479:
            r7 = r9.get;
            r3 = r7.bind(r9)(r8);
            _fun4039_ip = 500; continue _fun4039;
case 491:
            r7 = {};
            r7['default'] = r8;
            r3 = r7;
case 500:
            var _closure1_slot5 = r3;
            r3 = 5;
            r3 = r5[r3];
            r3 = r4.bind(r0)(r3);
            r3 = r6.bind(r0)(r3);
            var _closure1_slot6 = r3;
            r3 = 6;
            r3 = r5[r3];
            r3 = r4.bind(r0)(r3);
            var _closure1_slot7 = r3;
            r3 = r1.Object;
            r3 = r3.prototype;
            r3 = r3.hasOwnProperty;
            var _closure1_slot8 = r3;
            r1 = r1.Object;
            r1 = r1.hasOwn;
            r3 = null;
            if(!(r1 == r3)) { _fun4039_ip = 584; continue _fun4039 }
case 579:
            r1 = function(a0, a1) { // Environment: r2
                r3 = _closure1_slot8;
                r2 = r3.call;
                r1 = a0;
                r0 = a1;
                r0 = r2.bind(r3)(r1, r0);
                return r0;
            };
case 584:
            var _closure1_slot9 = r1;
            return r0;
        }
    };
    r6 = 332;
    r5 = [1, 38, 311, 128, 73, 45, 119, 316, 312];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r1 = a5;
        r2 = function(a0) { // Original name: isLegacyFabricInstance, environment: r0
            _fun4058: for(var _fun4058_ip = 0; ; ) switch(_fun4058_ip) {
case 0:
                r1 = a0;
                r2 = null;
                r0 = r1 != r2;
                if(!r0) { _fun4058_ip = 22; continue _fun4058 }
case 12:
                r3 = r1._internalInstanceHandle;
                r0 = r3 != r2;
case 22:
                if(!r0) { _fun4058_ip = 40; continue _fun4058 }
case 25:
                r3 = r1._internalInstanceHandle;
                r3 = r3.stateNode;
                r0 = r3 != r2;
case 40:
                if(!r0) { _fun4058_ip = 63; continue _fun4058 }
case 43:
                r1 = r1._internalInstanceHandle;
                r1 = r1.stateNode;
                r1 = r1.canonical;
                r0 = r1 != r2;
case 63:
                return r0;
            }
        };
        var _closure1_slot0 = r2;
        r2 = global;
        r5 = r2.Object;
        r4 = r5.defineProperty;
        r3 = {};
        r2 = true;
        r3['value'] = r2;
        r2 = '__esModule';
        r2 = r4.bind(r5)(r1, r2, r3);
        r0 = function(a0) { // Original name: isPublicInstance, environment: r0
            _fun4057: for(var _fun4057_ip = 0; ; ) switch(_fun4057_ip) {
case 0:
                r4 = a0;
                r2 = null;
                r0 = r4 != r2;
                if(!r0) { _fun4057_ip = 42; continue _fun4057 }
case 12:
                r1 = r4.__nativeTag;
                r1 = r1 != r2;
                if(r1) { _fun4057_ip = 39; continue _fun4057 }
case 25:
                r3 = _closure1_slot0;
                r2 = undefined;
                r1 = r3.bind(r2)(r4);
case 39:
                r0 = r1;
case 42:
                return r0;
            }
        };
        r1['isPublicInstance'] = r0;
        r0 = undefined;
        return r0;
    };
    r6 = 333;
    r5 = new Array(0);
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun4059: for(var _fun4059_ip = 0; ; ) switch(_fun4059_ip) {
case 0:
            r3 = a1;
            r6 = a5;
            r4 = a6;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r2
                _fun4060: for(var _fun4060_ip = 0; ; ) switch(_fun4060_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun4060_ip = 104; continue _fun4060 }
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
                        _fun4061: for(var _fun4061_ip = 0; ; ) switch(_fun4061_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun4061_ip = 15; continue _fun4061 }
case 9:
                            r0 = _closure2_slot0;
                            _fun4061_ip = 19; continue _fun4061;
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
            r0 = 0;
            r1 = r4[r0];
            r0 = undefined;
            r5 = r3.bind(r0)(r1);
            r15 = global;
            r9 = r15.Object;
            r8 = r9.defineProperty;
            r7 = {};
            r1 = true;
            r7['value'] = r1;
            r1 = '__esModule';
            r1 = r8.bind(r9)(r6, r1, r7);
            r1 = function() { // Original name: useMergeRefs, environment: r2
                _fun4062: for(var _fun4062_ip = 0; ; ) switch(_fun4062_ip) {
case 0:
                    r2 = undefined;
                    r4 = undefined;
                    r3 = arguments.length;
                    r0 = global;
                    r0 = r0.Array;
                    r5 = r0.prototype;
                    r5 = Object.create(r5, {constructor: {value: r0}});
                    r9 = r5;
                    r8 = r3;
                    r0 = new r9[r0](r8, r7);
                    r6 = r0 instanceof Object ? r0 : r5;
                    var _closure2_slot0 = r6;
                    r0 = 0;
                    r5 = r0 < r3;
                    if(!r5) { _fun4062_ip = 68; continue _fun4062 }
case 53:
                    r5 = arguments[r0];
                    r6[r0] = r5;
                    r0 = r0 + 1;
                    if(r0 < r3) { _fun4062_ip = 53; continue _fun4062 }
case 68:
                    r3 = _closure1_slot1;
                    r4 = r3.useCallback;
                    r5 = new Array(0);
                    r3 = r5.concat;
                    r3 = r3.bind(r5)(r6);
                    r1 = function(a0) { // Environment: r1
                        r1 = a0;
                        var _closure3_slot0 = r1;
                        r3 = _closure2_slot0;
                        r2 = r3.map;
                        r1 = function(a0) { // Environment: r0
                            _fun4064: for(var _fun4064_ip = 0; ; ) switch(_fun4064_ip) {
case 0:
                                r4 = a0;
                                var _closure4_slot0 = r4;
                                r0 = null;
                                if(!(r4 != r0)) { _fun4064_ip = 74; continue _fun4064 }
case 15:
                                r0 = typeof r4;
                                r3 = 'function';
                                if(!(r0 !== r3)) { _fun4064_ip = 46; continue _fun4064 }
case 26:
                                r0 = _closure3_slot0;
                                r4['current'] = r0;
                                r0 = function() { // Environment: r1
                                    r1 = _closure4_slot0;
                                    r0 = null;
                                    r1['current'] = r0;
                                    r0 = undefined;
                                    return r0;
                                };
                                return r0;
case 46:
                                r2 = _closure3_slot0;
                                r0 = undefined;
                                r0 = r4.bind(r0)(r2);
                                r2 = typeof r0;
                                if(!(r2 !== r3)) { _fun4064_ip = 72; continue _fun4064 }
case 67:
                                r0 = function() { // Environment: r1
                                    r2 = _closure4_slot0;
                                    r0 = undefined;
                                    r1 = null;
                                    r1 = r2.bind(r0)(r1);
                                    return r0;
                                };
case 72:
                                return r0;
case 74:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r1 = r2.bind(r3)(r1);
                        var _closure3_slot1 = r1;
                        r0 = function() { // Environment: r0
                            _fun4067: for(var _fun4067_ip = 0; ; ) switch(_fun4067_ip) {
case 0:
                                r0 = undefined;
                                r4 = undefined;
                                r1 = _closure3_slot1;
                                r3 = r1;
                                r2 = r3[Symbol.iterator];
                                r3 = r2().next;
                                r1 = null;
case 19:
                                r5 = r3().value;
                                r6 = r2;
                                if(!(r6 !== r0)) { _fun4067_ip = 53; continue _fun4067 }
case 30: // try_start_0
                                r4 = r5;
                                if(!(r5 != r1)) { _fun4067_ip = 44; continue _fun4067 }
case 37:
                                r5 = r4;
                                r5 = r5.bind(r0)();
case 44: // try_end0
                                _fun4067_ip = 19; continue _fun4067;
case 46: // catch_target0
                                CatchBlockStart(arg_register=1);
                                r2.return();
                                throw r1;
case 53:
                                return r0;
                            }
                        };
                        return r0;
                    };
                    r1 = r4.bind(r2)(r1, r3);
                    r0 = _closure1_slot0;
                    r0 = r0.default;
                    r0 = r0.bind(r2)(r1);
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
            r4 = r3.bind(r0)(r1);
            if(!r4) { _fun4059_ip = 126; continue _fun4059 }
case 112:
            r3 = r4.__esModule;
            r1 = r4;
            if(r3) { _fun4059_ip = 393; continue _fun4059 }
case 126:
            r14 = null;
            if(!(r14 !== r4)) { _fun4059_ip = 384; continue _fun4059 }
case 135:
            r5 = typeof r4;
            r3 = 'object';
            if(!(r3 !== r5)) { _fun4059_ip = 157; continue _fun4059 }
case 146:
            r3 = 'function';
            if(!(r3 === r5)) { _fun4059_ip = 384; continue _fun4059 }
case 157:
            r3 = _closure1_slot2;
            r5 = r3.bind(r0)(r0);
            if(!r5) { _fun4059_ip = 185; continue _fun4059 }
case 169:
            r3 = r5.has;
            r3 = r3.bind(r5)(r4);
            if(r3) { _fun4059_ip = 372; continue _fun4059 }
case 185:
            r3 = Object.create(r14);
            r6 = r15.Object;
            r13 = r6.defineProperty;
            if(!r13) { _fun4059_ip = 213; continue _fun4059 }
case 202:
            r6 = r15.Object;
            r13 = r6.getOwnPropertyDescriptor;
case 213:
            r11 = r4;
            r7 = 'default';
            r6 = undefined;
            for(r8 in r11)
case 230:
            {
case 239:
                r19 = r8;
                if(r7 === r19) { _fun4059_ip = 230; continue _fun4059 }
case 246:
                r16 = {};
                r17 = r16.hasOwnProperty;
                r16 = r17.call;
                r16 = r16.bind(r17)(r4, r19);
                if(!r16) { _fun4059_ip = 230; continue _fun4059 }
case 267:
                r16 = null;
                if(!r13) { _fun4059_ip = 289; continue _fun4059 }
case 272:
                r18 = r15.Object;
                r17 = r18.getOwnPropertyDescriptor;
                r16 = r17.bind(r18)(r4, r19);
case 289:
                if(!r16) { _fun4059_ip = 308; continue _fun4059 }
case 292:
                r17 = r16.get;
                if(r17) { _fun4059_ip = 321; continue _fun4059 }
case 300:
                r17 = r16.set;
                if(r17) { _fun4059_ip = 321; continue _fun4059 }
case 308:
                r17 = r4[r19];
                r3[r19] = r17;
                r6 = r16;
                _fun4059_ip = 230; continue _fun4059;
case 321:
                r18 = r15.Object;
                r17 = r18.defineProperty;
                r17 = r17.bind(r18)(r3, r19, r16);
                r6 = r16;
                _fun4059_ip = 230; continue _fun4059;
            }
case 344:
            r3['default'] = r4;
            r1 = r3;
            if(!r5) { _fun4059_ip = 393; continue _fun4059 }
case 356:
            r6 = r5.set;
            r6 = r6.bind(r5)(r4, r3);
            r1 = r3;
            _fun4059_ip = 393; continue _fun4059;
case 372:
            r3 = r5.get;
            r1 = r3.bind(r5)(r4);
            _fun4059_ip = 393; continue _fun4059;
case 384:
            r3 = {};
            r3['default'] = r4;
            r1 = r3;
case 393:
            var _closure1_slot1 = r1;
            return r0;
        }
    };
    r6 = 334;
    r5 = [1, 331, 119];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r5 = a1;
        r2 = a5;
        r6 = a6;
        r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r1
            _fun4069: for(var _fun4069_ip = 0; ; ) switch(_fun4069_ip) {
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
                if(r0) { _fun4069_ip = 61; continue _fun4069 }
case 48:
                r0 = r8.apply;
                r0 = r0.bind(r8)(r3, r5);
                _fun4069_ip = 107; continue _fun4069;
case 61:
                r6 = global;
                r7 = r6.Reflect;
                r6 = r7.construct;
                if(r5) { _fun4069_ip = 81; continue _fun4069 }
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
            _fun4070: for(var _fun4070_ip = 0; ; ) switch(_fun4070_ip) {
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
                _fun4070_ip = 74; continue _fun4070;
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
            _fun4073: for(var _fun4073_ip = 0; ; ) switch(_fun4073_ip) {
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
                if(!r7) { _fun4073_ip = 54; continue _fun4073 }
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
                if(!r2) { _fun4073_ip = 107; continue _fun4073 }
case 88:
                r3 = 'function';
                r2 = typeof r4;
                r0 = r4;
                if(!(r3 === r2)) { _fun4073_ip = 107; continue _fun4073 }
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
            r3 = function(a0, a1, a2) { // Original name: AnimatedAddition, environment: r5
                _fun4076: for(var _fun4076_ip = 0; ; ) switch(_fun4076_ip) {
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
                    if(!(r3 === r5)) { _fun4076_ip = 104; continue _fun4076 }
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
                    if(!(r3 === r5)) { _fun4076_ip = 152; continue _fun4076 }
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
                r0 = r1 + r0;
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
                r1 = 'addition';
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
    r6 = 335;
    r5 = [1, 12, 13, 23, 25, 26, 28, 321, 317, 313];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r5 = a1;
        r2 = a5;
        r6 = a6;
        r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r1
            _fun4084: for(var _fun4084_ip = 0; ; ) switch(_fun4084_ip) {
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
                if(r0) { _fun4084_ip = 61; continue _fun4084 }
case 48:
                r0 = r8.apply;
                r0 = r0.bind(r8)(r3, r5);
                _fun4084_ip = 107; continue _fun4084;
case 61:
                r6 = global;
                r7 = r6.Reflect;
                r6 = r7.construct;
                if(r5) { _fun4084_ip = 81; continue _fun4084 }
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
            _fun4085: for(var _fun4085_ip = 0; ; ) switch(_fun4085_ip) {
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
                _fun4085_ip = 74; continue _fun4085;
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
            _fun4088: for(var _fun4088_ip = 0; ; ) switch(_fun4088_ip) {
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
                if(!r7) { _fun4088_ip = 54; continue _fun4088 }
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
                if(!r2) { _fun4088_ip = 107; continue _fun4088 }
case 88:
                r3 = 'function';
                r2 = typeof r4;
                r0 = r4;
                if(!(r3 === r2)) { _fun4088_ip = 107; continue _fun4088 }
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
            r3 = function(a0, a1, a2, a3) { // Original name: AnimatedDiffClamp, environment: r5
                r4 = this;
                r1 = _closure1_slot0;
                r1 = r1.default;
                r3 = _closure2_slot0;
                r2 = undefined;
                r1 = r1.bind(r2)(r4, r3);
                r1 = _closure1_slot7;
                r0 = new Array(1);
                r5 = a3;
                r0[0] = r5;
                r0 = r1.bind(r2)(r4, r3, r0);
                r1 = a0;
                r0['_a'] = r1;
                r1 = a1;
                r0['_min'] = r1;
                r1 = a2;
                r0['_max'] = r1;
                r2 = r0._a;
                r1 = r2.__getValue;
                r1 = r1.bind(r2)();
                r0['_lastValue'] = r1;
                r0['_value'] = r1;
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
                r6 = this;
                r1 = r6._a;
                r0 = r1.__makeNative;
                r0 = r0.bind(r1)(r3);
                r5 = _closure1_slot9;
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
            r0[1] = r4;
            r4 = {};
            r6 = '__getValue';
            r4['key'] = r6;
            r6 = function() { // Original name: __getValue, environment: r5
                r0 = this;
                r2 = r0._a;
                r1 = r2.__getValue;
                r1 = r1.bind(r2)();
                r2 = r0._lastValue;
                r2 = r1 - r2;
                r0['_lastValue'] = r1;
                r1 = global;
                r4 = r1.Math;
                r3 = r4.min;
                r6 = r1.Math;
                r5 = r6.max;
                r1 = r0._value;
                r2 = r1 + r2;
                r1 = r0._min;
                r2 = r5.bind(r6)(r2, r1);
                r1 = r0._max;
                r1 = r3.bind(r4)(r2, r1);
                r0['_value'] = r1;
                r0 = r0._value;
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
            r0[4] = r4;
            r4 = {};
            r6 = '__getNativeConfig';
            r4['key'] = r6;
            r5 = function() { // Original name: __getNativeConfig, environment: r5
                r2 = this;
                r0 = {};
                r1 = 'diffclamp';
                r0['type'] = r1;
                r3 = r2._a;
                r1 = r3.__getNativeTag;
                r1 = r1.bind(r3)();
                r0['input'] = r1;
                r1 = r2._min;
                r0['min'] = r1;
                r1 = r2._max;
                r0['max'] = r1;
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
    r6 = 336;
    r5 = [1, 12, 13, 23, 25, 26, 28, 321, 313];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r5 = a1;
        r2 = a5;
        r6 = a6;
        r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r1
            _fun4099: for(var _fun4099_ip = 0; ; ) switch(_fun4099_ip) {
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
                r0 = _closure1_slot10;
                r0 = r0.bind(r2)();
                if(r0) { _fun4099_ip = 61; continue _fun4099 }
case 48:
                r0 = r8.apply;
                r0 = r0.bind(r8)(r3, r5);
                _fun4099_ip = 107; continue _fun4099;
case 61:
                r6 = global;
                r7 = r6.Reflect;
                r6 = r7.construct;
                if(r5) { _fun4099_ip = 81; continue _fun4099 }
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
        var _closure1_slot9 = r0;
        r0 = function() { // Original name: _isNativeReflectConstruct, environment: r1
            _fun4100: for(var _fun4100_ip = 0; ; ) switch(_fun4100_ip) {
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
                _fun4100_ip = 74; continue _fun4100;
case 72: // catch_target0
                CatchBlockStart(arg_register=1);
case 74:
                r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                    r0 = _closure2_slot0;
                    r0 = !r0;
                    r0 = !r0;
                    return r0;
                };
                _closure1_slot10 = r1;
                r0 = undefined;
                r0 = r1.bind(r0)();
                return r0;
            }
        };
        var _closure1_slot10 = r0;
        r0 = function(a0, a1, a2, a3) { // Original name: _superPropGet, environment: r1
            _fun4103: for(var _fun4103_ip = 0; ; ) switch(_fun4103_ip) {
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
                if(!r7) { _fun4103_ip = 54; continue _fun4103 }
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
                if(!r2) { _fun4103_ip = 107; continue _fun4103 }
case 88:
                r3 = 'function';
                r2 = typeof r4;
                r0 = r4;
                if(!(r3 === r2)) { _fun4103_ip = 107; continue _fun4103 }
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
        var _closure1_slot11 = r0;
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
        var _closure1_slot8 = r3;
        r3 = 10;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        r3 = r3.default;
        r1 = function(a0) { // Environment: r1
            r3 = function(a0, a1, a2) { // Original name: AnimatedDivision, environment: r5
                _fun4106: for(var _fun4106_ip = 0; ; ) switch(_fun4106_ip) {
case 0:
                    r7 = a0;
                    r4 = a1;
                    r6 = this;
                    r0 = _closure1_slot0;
                    r0 = r0.default;
                    r5 = _closure2_slot0;
                    r3 = undefined;
                    r0 = r0.bind(r3)(r6, r5);
                    r1 = _closure1_slot9;
                    r0 = new Array(1);
                    r8 = a2;
                    r0[0] = r8;
                    r0 = r1.bind(r3)(r6, r5, r0);
                    r1 = false;
                    r0['_warnedAboutDivideByZero'] = r1;
                    r3 = 0;
                    if(!(r4 !== r3)) { _fun4106_ip = 101; continue _fun4106 }
case 72:
                    r1 = _closure1_slot7;
                    r1 = r1.default;
                    r1 = r4 instanceof r1;
                    if(!r1) { _fun4106_ip = 123; continue _fun4106 }
case 88:
                    r1 = r4.__getValue;
                    r1 = r1.bind(r4)();
                    if(!(r1 === r3)) { _fun4106_ip = 123; continue _fun4106 }
case 101:
                    r1 = global;
                    r5 = r1.console;
                    r3 = r5.error;
                    r1 = 'Detected potential division by zero in AnimatedDivision';
                    r1 = r3.bind(r5)(r1);
case 123:
                    r3 = typeof r7;
                    r5 = 'number';
                    r1 = r7;
                    if(!(r3 === r5)) { _fun4106_ip = 169; continue _fun4106 }
case 137:
                    r3 = _closure1_slot8;
                    r3 = r3.default;
                    r6 = r3.prototype;
                    r6 = Object.create(r6, {constructor: {value: r3}});
                    r12 = r6;
                    r11 = r7;
                    r3 = new r12[r3](r11, r10);
                    r1 = r3 instanceof Object ? r3 : r6;
case 169:
                    r0['_a'] = r1;
                    r3 = typeof r4;
                    r1 = r4;
                    if(!(r3 === r5)) { _fun4106_ip = 217; continue _fun4106 }
case 185:
                    r2 = _closure1_slot8;
                    r2 = r2.default;
                    r3 = r2.prototype;
                    r3 = Object.create(r3, {constructor: {value: r2}});
                    r12 = r3;
                    r11 = r4;
                    r2 = new r12[r2](r11, r10);
                    r1 = r2 instanceof Object ? r2 : r3;
case 217:
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
                r5 = _closure1_slot11;
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
                _fun4108: for(var _fun4108_ip = 0; ; ) switch(_fun4108_ip) {
case 0:
                    r2 = this;
                    r1 = r2._a;
                    r0 = r1.__getValue;
                    r3 = r0.bind(r1)();
                    r1 = r2._b;
                    r0 = r1.__getValue;
                    r1 = r0.bind(r1)();
                    r0 = 0;
                    if(!(r1 !== r0)) { _fun4108_ip = 52; continue _fun4108 }
case 38:
                    r4 = false;
                    r2['_warnedAboutDivideByZero'] = r4;
                    r1 = r3 / r1;
                    return r1;
case 52:
                    r1 = r2._warnedAboutDivideByZero;
                    if(r1) { _fun4108_ip = 91; continue _fun4108 }
case 61:
                    r1 = global;
                    r4 = r1.console;
                    r3 = r4.error;
                    r1 = 'Detected division by zero in AnimatedDivision';
                    r1 = r3.bind(r4)(r1);
                    r1 = true;
                    r2['_warnedAboutDivideByZero'] = r1;
case 91:
                    return r0;
                }
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
                r4 = _closure1_slot11;
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
                r4 = _closure1_slot11;
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
                r1 = 'division';
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
    r6 = 337;
    r5 = [1, 12, 13, 23, 25, 26, 28, 321, 311, 317, 313];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r5 = a1;
        r2 = a5;
        r6 = a6;
        r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r1
            _fun4114: for(var _fun4114_ip = 0; ; ) switch(_fun4114_ip) {
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
                if(r0) { _fun4114_ip = 61; continue _fun4114 }
case 48:
                r0 = r8.apply;
                r0 = r0.bind(r8)(r3, r5);
                _fun4114_ip = 107; continue _fun4114;
case 61:
                r6 = global;
                r7 = r6.Reflect;
                r6 = r7.construct;
                if(r5) { _fun4114_ip = 81; continue _fun4114 }
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
            _fun4115: for(var _fun4115_ip = 0; ; ) switch(_fun4115_ip) {
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
                _fun4115_ip = 74; continue _fun4115;
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
            _fun4118: for(var _fun4118_ip = 0; ; ) switch(_fun4118_ip) {
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
                if(!r7) { _fun4118_ip = 54; continue _fun4118 }
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
                if(!r2) { _fun4118_ip = 107; continue _fun4118 }
case 88:
                r3 = 'function';
                r2 = typeof r4;
                r0 = r4;
                if(!(r3 === r2)) { _fun4118_ip = 107; continue _fun4118 }
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
            r3 = function(a0, a1, a2) { // Original name: AnimatedModulo, environment: r5
                r4 = this;
                r1 = _closure1_slot0;
                r1 = r1.default;
                r3 = _closure2_slot0;
                r2 = undefined;
                r1 = r1.bind(r2)(r4, r3);
                r1 = _closure1_slot7;
                r0 = new Array(1);
                r5 = a2;
                r0[0] = r5;
                r0 = r1.bind(r2)(r4, r3, r0);
                r1 = a0;
                r0['_a'] = r1;
                r1 = a1;
                r0['_modulus'] = r1;
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
                r6 = this;
                r1 = r6._a;
                r0 = r1.__makeNative;
                r0 = r0.bind(r1)(r3);
                r5 = _closure1_slot9;
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
                r2 = r1.bind(r2)();
                r1 = r0._modulus;
                r2 = r2 % r1;
                r1 = r0._modulus;
                r1 = r2 + r1;
                r0 = r0._modulus;
                r0 = r1 % r0;
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
            r0[4] = r4;
            r4 = {};
            r6 = '__getNativeConfig';
            r4['key'] = r6;
            r5 = function() { // Original name: __getNativeConfig, environment: r5
                r2 = this;
                r0 = {};
                r1 = 'modulus';
                r0['type'] = r1;
                r3 = r2._a;
                r1 = r3.__getNativeTag;
                r1 = r1.bind(r3)();
                r0['input'] = r1;
                r1 = r2._modulus;
                r0['modulus'] = r1;
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
    r6 = 338;
    r5 = [1, 12, 13, 23, 25, 26, 28, 321, 313];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r5 = a1;
        r2 = a5;
        r6 = a6;
        r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r1
            _fun4129: for(var _fun4129_ip = 0; ; ) switch(_fun4129_ip) {
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
                if(r0) { _fun4129_ip = 61; continue _fun4129 }
case 48:
                r0 = r8.apply;
                r0 = r0.bind(r8)(r3, r5);
                _fun4129_ip = 107; continue _fun4129;
case 61:
                r6 = global;
                r7 = r6.Reflect;
                r6 = r7.construct;
                if(r5) { _fun4129_ip = 81; continue _fun4129 }
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
            _fun4130: for(var _fun4130_ip = 0; ; ) switch(_fun4130_ip) {
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
                _fun4130_ip = 74; continue _fun4130;
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
            _fun4133: for(var _fun4133_ip = 0; ; ) switch(_fun4133_ip) {
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
                if(!r7) { _fun4133_ip = 54; continue _fun4133 }
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
                if(!r2) { _fun4133_ip = 107; continue _fun4133 }
case 88:
                r3 = 'function';
                r2 = typeof r4;
                r0 = r4;
                if(!(r3 === r2)) { _fun4133_ip = 107; continue _fun4133 }
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
            r3 = function(a0, a1, a2) { // Original name: AnimatedMultiplication, environment: r5
                _fun4136: for(var _fun4136_ip = 0; ; ) switch(_fun4136_ip) {
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
                    if(!(r3 === r5)) { _fun4136_ip = 104; continue _fun4136 }
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
                    if(!(r3 === r5)) { _fun4136_ip = 152; continue _fun4136 }
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
                r0 = r1 * r0;
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
                r1 = 'multiplication';
                r0['type'] = r1;
                r3 = r2._a;
                r1 = r3.__getNativeTag;
