_fun0: for(var _fun0_ip = 0; ; ) switch(_fun0_ip) {
case 0:
    __BUNDLE_START_TIME__ = undefined;
    __DEV__ = undefined;
    process = undefined;
    __METRO_GLOBAL_PREFIX__ = undefined;
    r4 = this;
    r0 = global;
    r1 = r0.globalThis;
    r1 = r1.nativePerformanceNow;
    if(r1) { _fun0_ip = 58; continue _fun0 }
case 41:
    r2 = r0.Date;
    r1 = r2.now;
    r1 = r1.bind(r2)();
    _fun0_ip = 70; continue _fun0;
case 58:
    r5 = r0.nativePerformanceNow;
    r2 = undefined;
    r1 = r5.bind(r2)();
case 70:
    r0['__BUNDLE_START_TIME__'] = r1;
    r1 = false;
    r0['__DEV__'] = r1;
    r1 = r0.globalThis;
    r1 = r1.process;
    if(r1) { _fun0_ip = 100; continue _fun0 }
case 98:
    r1 = {};
case 100:
    r0['process'] = r1;
    r1 = '';
    r0['__METRO_GLOBAL_PREFIX__'] = r1;
    r2 = r0.process;
    r1 = r0.process;
    r1 = r1.env;
    if(r1) { _fun0_ip = 137; continue _fun0 }
case 135:
    r1 = {};
case 137:
    r2['env'] = r1;
    r1 = r0.process;
    r2 = r1.env;
    r1 = r0.process;
    r1 = r1.env;
    r1 = r1.NODE_ENV;
    if(r1) { _fun0_ip = 178; continue _fun0 }
case 174:
    r1 = 'production';
case 178:
    r2['NODE_ENV'] = r1;
    r1 = r0.globalThis;
    r1 = typeof r1;
    r5 = 'undefined';
    if(!(r1 === r5)) { _fun0_ip = 245; continue _fun0 }
case 201:
    r1 = r0.global;
    r1 = typeof r1;
    if(!(r1 === r5)) { _fun0_ip = 237; continue _fun0 }
case 214:
    r1 = r0.window;
    r1 = typeof r1;
    r6 = r4;
    if(!(r1 !== r5)) { _fun0_ip = 235; continue _fun0 }
case 229:
    r6 = r0.window;
case 235:
    _fun0_ip = 243; continue _fun0;
case 237:
    r6 = r0.global;
case 243:
    _fun0_ip = 251; continue _fun0;
case 245:
    r6 = r0.globalThis;
case 251:
    r1 = function(a0) { // Environment: r3
        r8 = a0;
        var _closure1_slot0 = r8;
        r7 = function() { // Original name: clear, environment: r2
            r0 = global;
            r0 = r0.Map;
            r1 = r0.prototype;
            r1 = Object.create(r1, {constructor: {value: r0}});
            r2 = r1;
            r0 = new r2[r0](r1);
            r0 = r0 instanceof Object ? r0 : r1;
            _closure1_slot1 = r0;
            return r0;
        };
        r4 = function(a0) { // Original name: metroRequire, environment: r2
            _fun4: for(var _fun4_ip = 0; ; ) switch(_fun4_ip) {
case 0:
                r3 = a0;
                r2 = _closure1_slot1;
                r1 = r2.get;
                r1 = r1.bind(r2)(r3);
                if(!r1) { _fun4_ip = 32; continue _fun4 }
case 23:
                r2 = r1.isInitialized;
                if(r2) { _fun4_ip = 46; continue _fun4 }
case 32:
                r2 = _closure1_slot12;
                r0 = undefined;
                r0 = r2.bind(r0)(r3, r1);
                _fun4_ip = 57; continue _fun4;
case 46:
                r1 = r1.publicModule;
                r0 = r1.exports;
case 57:
                return r0;
            }
        };
        var _closure1_slot9 = r4;
        r6 = function(a0) { // Original name: metroImportDefault, environment: r2
            _fun5: for(var _fun5_ip = 0; ; ) switch(_fun5_ip) {
case 0:
                r4 = a0;
                r1 = _closure1_slot1;
                r0 = r1.get;
                r0 = r0.bind(r1)(r4);
                if(!r0) { _fun5_ip = 37; continue _fun5 }
case 23:
                r3 = r0.importedDefault;
                r1 = _closure1_slot2;
                if(!(r3 === r1)) { _fun5_ip = 92; continue _fun5 }
case 37:
                r3 = _closure1_slot9;
                r1 = undefined;
                r3 = r3.bind(r1)(r4);
                r1 = r3;
                if(!r3) { _fun5_ip = 70; continue _fun5 }
case 54:
                r5 = r3.__esModule;
                r1 = r3;
                if(!r5) { _fun5_ip = 70; continue _fun5 }
case 65:
                r1 = r3.default;
case 70:
                r3 = _closure1_slot1;
                r2 = r3.get;
                r2 = r2.bind(r3)(r4);
                r2['importedDefault'] = r1;
                return r1;
case 92:
                r0 = r0.importedDefault;
                return r0;
            }
        };
        var _closure1_slot10 = r6;
        r5 = function(a0) { // Original name: metroImportAll, environment: r2
            _fun6: for(var _fun6_ip = 0; ; ) switch(_fun6_ip) {
case 0:
                r4 = a0;
                r1 = _closure1_slot1;
                r0 = r1.get;
                r0 = r0.bind(r1)(r4);
                if(!r0) { _fun6_ip = 37; continue _fun6 }
case 23:
                r3 = r0.importedAll;
                r1 = _closure1_slot2;
                if(!(r3 === r1)) { _fun6_ip = 149; continue _fun6 }
case 37:
                r3 = _closure1_slot9;
                r1 = undefined;
                r5 = r3.bind(r1)(r4);
                if(!r5) { _fun6_ip = 62; continue _fun6 }
case 51:
                r3 = r5.__esModule;
                r1 = r5;
                if(r3) { _fun6_ip = 127; continue _fun6 }
case 62:
                r3 = {};
                if(!r5) { _fun6_ip = 118; continue _fun6 }
case 67:
                r9 = r5;
                for(r6 in r9)
case 78:
                {
case 87:
                    r12 = r6;
                    r13 = _closure1_slot3;
                    r11 = r13.call;
                    r11 = r11.bind(r13)(r5, r12);
                    if(!r11) { _fun6_ip = 78; continue _fun6 }
case 108:
                    r11 = r5[r12];
                    r3[r12] = r11;
                    _fun6_ip = 78; continue _fun6;
                }
case 118:
                r3['default'] = r5;
                r1 = r3;
case 127:
                r3 = _closure1_slot1;
                r2 = r3.get;
                r2 = r2.bind(r3)(r4);
                r2['importedAll'] = r1;
                return r1;
case 149:
                r0 = r0.importedAll;
                return r0;
            }
        };
        var _closure1_slot11 = r5;
        r0 = function(a0, a1) { // Original name: guardedLoadModule, environment: r2
            _fun7: for(var _fun7_ip = 0; ; ) switch(_fun7_ip) {
case 0:
                r1 = a0;
                r0 = a1;
                r3 = undefined;
                r4 = undefined;
                r5 = _closure1_slot4;
                if(r5) { _fun7_ip = 88; continue _fun7 }
case 20:
                r5 = _closure1_slot0;
                r5 = r5.ErrorUtils;
                if(!r5) { _fun7_ip = 88; continue _fun7 }
case 33:
                r5 = true;
                _closure1_slot4 = r5;
case 39: // try_start_0
                r7 = _closure1_slot14;
                r6 = r1;
                r5 = r0;
                r4 = r7.bind(r3)(r6, r5);
case 55: // try_end0
                _fun7_ip = 80; continue _fun7;
case 57: // catch_target0
                CatchBlockStart(arg_register=7);
                r5 = _closure1_slot0;
                r6 = r5.ErrorUtils;
                r5 = r6.reportFatalError;
                r5 = r5.bind(r6)(r7);
case 80:
                r5 = false;
                _closure1_slot4 = r5;
                return r4;
case 88:
                r2 = _closure1_slot14;
                r0 = r2.bind(r3)(r1, r0);
                return r0;
            }
        };
        var _closure1_slot12 = r0;
        r3 = function(a0) { // Original name: unpackModuleId, environment: r2
            r1 = a0;
            r2 = _closure1_slot5;
            r2 = r1 >>> r2;
            r0 = _closure1_slot6;
            r1 = r1 & r0;
            r0 = {};
            r0['segmentId'] = r2;
            r0['localId'] = r1;
            return r0;
        };
        var _closure1_slot13 = r3;
        r0 = function(a0, a1) { // Original name: loadModuleImplementation, environment: r2
            _fun12: for(var _fun12_ip = 0; ; ) switch(_fun12_ip) {
case 0:
                r0 = a1;
                r9 = a0;
                r2 = r0;
                r3 = undefined;
                r8 = undefined;
                r6 = undefined;
                if(r0) { _fun12_ip = 115; continue _fun12 }
case 18:
                r1 = _closure1_slot7;
                r1 = r1.length;
                r5 = 0;
                if(!(r1 > r5)) { _fun12_ip = 115; continue _fun12 }
case 36:
                r7 = _closure1_slot8;
                r4 = r7.get;
                r1 = r9;
                r1 = r4.bind(r7)(r1);
                r4 = null;
                r7 = r1 != r4;
                r5 = 0;
                if(!r7) { _fun12_ip = 67; continue _fun12 }
case 64:
                r5 = r1;
case 67:
                r1 = _closure1_slot7;
                r1 = r1[r5];
                if(!(r1 != r4)) { _fun12_ip = 115; continue _fun12 }
case 79:
                r4 = r9;
                r1 = r1.bind(r3)(r4);
                r5 = _closure1_slot1;
                r1 = r5.get;
                r2 = r1.bind(r5)(r4);
                r1 = _closure1_slot8;
                r0 = r1.delete;
                r0 = r0.bind(r1)(r4);
case 115:
                r0 = _closure1_slot0;
                r5 = r0.nativeRequire;
                r0 = r2;
                if(r0) { _fun12_ip = 181; continue _fun12 }
case 134:
                if(!r5) { _fun12_ip = 181; continue _fun12 }
case 137:
                r0 = _closure1_slot13;
                r4 = r9;
                r0 = r0.bind(r3)(r4);
                r1 = r0.segmentId;
                r0 = r0.localId;
                r0 = r5.bind(r3)(r0, r1);
                r1 = _closure1_slot1;
                r0 = r1.get;
                r2 = r0.bind(r1)(r4);
case 181:
                r0 = r2;
                if(r0) { _fun12_ip = 201; continue _fun12 }
case 187:
                r1 = _closure1_slot15;
                r0 = r9;
                r0 = r1.bind(r3)(r0);
                throw r0;
case 201:
                r0 = r2;
                r1 = r0.hasError;
                r0 = r2;
                if(r1) { _fun12_ip = 349; continue _fun12 }
case 219:
                r4 = true;
                r0['isInitialized'] = r4;
                r8 = r0.factory;
                r6 = r0.dependencyMap;
case 239: // try_start_0 // try_start_1
                r5 = r2;
                r1 = r5.publicModule;
                r1['id'] = r9;
                r12 = r8;
                r19 = _closure1_slot0;
                r18 = _closure1_slot9;
                r17 = _closure1_slot10;
                r16 = _closure1_slot11;
                r14 = r1.exports;
                r13 = r6;
                r20 = undefined;
                r15 = r1;
                r6 = r20[r12](r19, r18, r17, r16, r15, r14, r13, r12);
                r5['factory'] = r3;
                r5['dependencyMap'] = r3;
                r1 = r1.exports;
case 307: // try_end0 // try_end1
                return r1;
case 309: // try_start_2 // catch_target0
                CatchBlockStart(arg_register=1);
                r2['hasError'] = r4;
                r2['error'] = r1;
                r4 = false;
                r2['isInitialized'] = r4;
                r2 = r2.publicModule;
                r2['exports'] = r3;
                throw r1;
case 345: // try_end2 // catch_target1 // catch_target2
                CatchBlockStart(arg_register=1);
                throw r1;
case 349:
                r0 = r0.error;
                throw r0;
            }
        };
        var _closure1_slot14 = r0;
        r0 = function(a0) { // Original name: unknownModuleError, environment: r2
            r1 = 'Requiring unknown module "';
            r0 = a0;
            r3 = r1 + r0;
            r0 = global;
            r2 = r0.Error;
            r1 = undefined;
            r0 = '".';
            r0 = r3 + r0;
            r0 = r2.bind(r1)(r0);
            return r0;
        };
        var _closure1_slot15 = r0;
        r8['__r'] = r4;
        r1 = global;
        r11 = r1.__METRO_GLOBAL_PREFIX__;
        r0 = r1.HermesInternal;
        r10 = r0.concat;
        r9 = '';
        r0 = '__d';
        r9 = r10.bind(r9)(r11, r0);
        r0 = function(a0, a1, a2) { // Original name: define, environment: r2
            _fun3: for(var _fun3_ip = 0; ; ) switch(_fun3_ip) {
case 0:
                r3 = a1;
                r2 = _closure1_slot1;
                r1 = r2.has;
                r1 = r1.bind(r2)(r3);
                if(r1) { _fun3_ip = 103; continue _fun3 }
case 23:
                r2 = {};
                r1 = a2;
                r2['dependencyMap'] = r1;
                r1 = a0;
                r2['factory'] = r1;
                r1 = false;
                r2['hasError'] = r1;
                r4 = _closure1_slot2;
                r2['importedAll'] = r4;
                r4 = _closure1_slot2;
                r2['importedDefault'] = r4;
                r2['isInitialized'] = r1;
                r1 = {};
                r4 = {};
                r1['exports'] = r4;
                r2['publicModule'] = r1;
                r1 = _closure1_slot1;
                r0 = r1.set;
                r0 = r0.bind(r1)(r3, r2);
                r0 = undefined;
                return r0;
case 103:
                r0 = undefined;
                return r0;
            }
        };
        r8[r9] = r0;
        r8['__c'] = r7;
        r0 = function(a0, a1, a2) { // Original name: registerSegment, environment: r2
            _fun10: for(var _fun10_ip = 0; ; ) switch(_fun10_ip) {
case 0:
                r4 = a0;
                r2 = a2;
                var _closure2_slot0 = r4;
                r3 = _closure1_slot7;
                r1 = a1;
                r3[r4] = r1;
                if(!r2) { _fun10_ip = 44; continue _fun10 }
case 29:
                r1 = r2.forEach;
                r0 = function(a0) { // Environment: r0
                    _fun11: for(var _fun11_ip = 0; ; ) switch(_fun11_ip) {
case 0:
                        r3 = a0;
                        r2 = _closure1_slot1;
                        r1 = r2.has;
                        r1 = r1.bind(r2)(r3);
                        if(r1) { _fun11_ip = 62; continue _fun11 }
case 23:
                        r2 = _closure1_slot8;
                        r1 = r2.has;
                        r1 = r1.bind(r2)(r3);
                        if(r1) { _fun11_ip = 62; continue _fun11 }
case 40:
                        r2 = _closure1_slot8;
                        r1 = r2.set;
                        r0 = _closure2_slot0;
                        r0 = r1.bind(r2)(r3, r0);
case 62:
                        r0 = undefined;
                        return r0;
                    }
                };
                r0 = r1.bind(r2)(r0);
case 44:
                r0 = undefined;
                return r0;
            }
        };
        r8['__registerSegment'] = r0;
        r0 = undefined;
        r7 = r7.bind(r0)();
        var _closure1_slot1 = r7;
        r7 = {};
        var _closure1_slot2 = r7;
        r7 = {};
        r7 = r7.hasOwnProperty;
        var _closure1_slot3 = r7;
        r4['importDefault'] = r6;
        r4['importAll'] = r5;
        r5 = function() { // Original name: fallbackRequireContext, environment: r2
            r0 = global;
            r2 = r0.Error;
            r0 = r2.prototype;
            r1 = Object.create(r0, {constructor: {value: r2}});
            r3 = 'The experimental Metro feature `require.context` is not enabled in your project.';
            r4 = r1;
            r0 = new r4[r2](r3, r2);
            r0 = r0 instanceof Object ? r0 : r1;
            throw r0;
        };
        r4['context'] = r5;
        r5 = function() { // Original name: fallbackRequireResolveWeak, environment: r2
            r0 = global;
            r2 = r0.Error;
            r0 = r2.prototype;
            r1 = Object.create(r0, {constructor: {value: r2}});
            r3 = 'require.resolveWeak cannot be called dynamically.';
            r4 = r1;
            r0 = new r4[r2](r3, r2);
            r0 = r0 instanceof Object ? r0 : r1;
            throw r0;
        };
        r4['resolveWeak'] = r5;
        r5 = false;
        var _closure1_slot4 = r5;
        r5 = 16;
        var _closure1_slot5 = r5;
        r5 = 65535;
        var _closure1_slot6 = r5;
        r4['unpackModuleId'] = r3;
        r3 = function(a0) { // Original name: packModuleId, environment: r2
            r0 = a0;
            r2 = r0.segmentId;
            r1 = _closure1_slot5;
            r1 = r2 << r1;
            r0 = r0.localId;
            r0 = r1 + r0;
            return r0;
        };
        r4['packModuleId'] = r3;
        r3 = new Array(0);
        var _closure1_slot7 = r3;
        r1 = r1.Map;
        r3 = r1.prototype;
        r3 = Object.create(r3, {constructor: {value: r1}});
        r14 = r3;
        r1 = new r14[r1](r13);
        r1 = r1 instanceof Object ? r1 : r3;
        var _closure1_slot8 = r1;
        return r0;
    };
    r2 = undefined;
    r1 = r1.bind(r2)(r6);
    r1 = r0.globalThis;
    r1 = typeof r1;
    if(!(r1 === r5)) { _fun0_ip = 320; continue _fun0 }
case 276:
    r1 = r0.global;
    r1 = typeof r1;
    if(!(r1 === r5)) { _fun0_ip = 312; continue _fun0 }
case 289:
    r1 = r0.window;
    r1 = typeof r1;
    r6 = r4;
    if(!(r1 !== r5)) { _fun0_ip = 310; continue _fun0 }
case 304:
    r6 = r0.window;
case 310:
    _fun0_ip = 318; continue _fun0;
case 312:
    r6 = r0.global;
case 318:
    _fun0_ip = 326; continue _fun0;
case 320:
    r6 = r0.globalThis;
case 326:
    r1 = function(a0) { // Environment: r3
        _fun16: for(var _fun16_ip = 0; ; ) switch(_fun16_ip) {
case 0:
            r3 = a0;
            var _closure1_slot0 = r3;
            r9 = function(a0) { // Original name: getNativeLogFunction, environment: r2
                r1 = a0;
                var _closure2_slot0 = r1;
                r0 = function() { // Environment: r0
                    _fun18: for(var _fun18_ip = 0; ; ) switch(_fun18_ip) {
case 0:
                        r0 = undefined;
                        r1 = undefined;
                        r3 = arguments.length;
                        r2 = 1;
                        if(!(r3 === r2)) { _fun18_ip = 31; continue _fun18 }
case 14:
                        r2 = 0;
                        r3 = arguments[r2];
                        r4 = typeof r3;
                        r3 = 'string';
                        if(!(r4 !== r3)) { _fun18_ip = 88; continue _fun18 }
case 31:
                        r3 = global;
                        r3 = r3.Array;
                        r3 = r3.prototype;
                        r6 = r3.map;
                        r5 = r6.call;
                        r1 = arguments;
                        r4 = r1;
                        r3 = function(a0) { // Environment: r3
                            r3 = _closure1_slot1;
                            r2 = {};
                            r0 = 10;
                            r2['depth'] = r0;
                            r1 = undefined;
                            r0 = a0;
                            r0 = r3.bind(r1)(r0, r2);
                            return r0;
                        };
                        r5 = r5.bind(r6)(r4, r3);
                        r4 = r5.join;
                        r3 = ', ';
                        r6 = r4.bind(r5)(r3);
                        _fun18_ip = 92; continue _fun18;
case 88:
                        r6 = arguments[r2];
case 92:
                        r7 = 0;
                        r5 = arguments[r7];
                        r3 = _closure2_slot0;
                        r2 = typeof r5;
                        r1 = 'string';
                        r4 = r3;
                        if(!(r2 === r1)) { _fun18_ip = 172; continue _fun18 }
case 119:
                        r2 = r5.slice;
                        r1 = 9;
                        r2 = r2.bind(r5)(r7, r1);
                        r1 = 'Warning: ';
                        r4 = r3;
                        if(!(r2 === r1)) { _fun18_ip = 172; continue _fun18 }
case 144:
                        r2 = _closure1_slot3;
                        r2 = r2.error;
                        r4 = r3;
                        if(!(r3 >= r2)) { _fun18_ip = 172; continue _fun18 }
case 163:
                        r1 = _closure1_slot3;
                        r4 = r1.warn;
case 172:
                        r2 = _closure1_slot7;
                        r2 = r2.length;
                        r3 = r6;
                        if(!r2) { _fun18_ip = 204; continue _fun18 }
case 190:
                        r5 = _closure1_slot13;
                        r2 = '';
                        r3 = r5.bind(r0)(r2, r6);
case 204:
                        r2 = _closure1_slot0;
                        r1 = r2.nativeLoggingHook;
                        r1 = r1.bind(r2)(r3, r4);
                        return r0;
                    }
                };
                return r0;
            };
            r0 = function(a0, a1) { // Original name: repeat, environment: r2
                r1 = a0;
                var _closure2_slot0 = r1;
                r1 = global;
                r4 = r1.Array;
                r3 = r4.apply;
                r5 = r1.Array;
                r2 = undefined;
                r1 = a1;
                r2 = r5.bind(r2)(r1);
                r1 = null;
                r2 = r3.bind(r4)(r1, r2);
                r1 = r2.map;
                r0 = function() { // Environment: r0
                    r0 = _closure2_slot0;
                    return r0;
                };
                r0 = r1.bind(r2)(r0);
                return r0;
            };
            var _closure1_slot11 = r0;
            r0 = function(a0, a1) { // Original name: formatCellValue, environment: r2
                _fun22: for(var _fun22_ip = 0; ; ) switch(_fun22_ip) {
case 0:
                    r1 = a0;
                    r0 = a1;
                    r2 = _closure1_slot2;
                    if(!(r0 !== r2)) { _fun22_ip = 123; continue _fun22 }
case 17:
                    r2 = r1.hasOwnProperty;
                    r2 = r2.bind(r1)(r0);
                    if(r2) { _fun22_ip = 36; continue _fun22 }
case 30:
                    r2 = '';
                    return r2;
case 36:
                    r2 = r1[r0];
                    r4 = typeof r2;
                    r3 = 'function';
                    if(!(r3 !== r4)) { _fun22_ip = 117; continue _fun22 }
case 51:
                    r3 = 'string';
                    if(!(r3 !== r4)) { _fun22_ip = 103; continue _fun22 }
case 59:
                    r3 = 'object';
                    if(!(r3 !== r4)) { _fun22_ip = 84; continue _fun22 }
case 67:
                    r3 = global;
                    r4 = r3.String;
                    r3 = undefined;
                    r3 = r4.bind(r3)(r2);
                    return r3;
case 84:
                    r3 = null;
                    r4 = r2 == r3;
                    r3 = '{…}';
                    if(!r4) { _fun22_ip = 101; continue _fun22 }
case 97:
                    r3 = 'null';
case 101:
                    return r3;
case 103:
                    r3 = "'";
                    r2 = r3 + r2;
                    r2 = r2 + r3;
                    return r2;
case 117:
                    r2 = 'ƒ';
                    return r2;
case 123:
                    r0 = r1[r0];
                    return r0;
                }
            };
            var _closure1_slot12 = r0;
            r0 = function(a0, a1) { // Original name: groupFormat, environment: r2
                _fun31: for(var _fun31_ip = 0; ; ) switch(_fun31_ip) {
case 0:
                    r1 = a1;
                    r3 = _closure1_slot7;
                    r2 = r3.join;
                    r0 = '';
                    r3 = r2.bind(r3)(r0);
                    r2 = a0;
                    r2 = r3 + r2;
                    if(r1) { _fun31_ip = 37; continue _fun31 }
case 34:
                    r1 = r0;
case 37:
                    r0 = ' ';
                    r0 = r2 + r0;
                    r0 = r0 + r1;
                    return r0;
                }
            };
            var _closure1_slot13 = r0;
            r1 = function() { // Environment: r2
                r1 = function(a0, a1) { // Original name: stylizeNoColor, environment: r0
                    r0 = a0;
                    return r0;
                };
                var _closure2_slot0 = r1;
                r1 = function(a0) { // Original name: arrayToHash, environment: r0
                    r3 = a0;
                    r0 = {};
                    var _closure3_slot0 = r0;
                    r2 = r3.forEach;
                    r1 = function(a0, a1) { // Environment: r1
                        r2 = _closure3_slot0;
                        r1 = true;
                        r0 = a0;
                        r2[r0] = r1;
                        r0 = undefined;
                        return r0;
                    };
                    r1 = r2.bind(r3)(r1);
                    return r0;
                };
                var _closure2_slot1 = r1;
                r1 = function(a0, a1, a2) { // Original name: formatValue, environment: r0
                    _fun41: for(var _fun41_ip = 0; ; ) switch(_fun41_ip) {
case 0:
                        r0 = a0;
                        r4 = a1;
                        r13 = a2;
                        var _closure3_slot0 = r0;
                        var _closure3_slot1 = r4;
                        var _closure3_slot2 = r13;
                        r1 = r0.formatValueCalls;
                        r1 = r1 + 1;
                        r0['formatValueCalls'] = r1;
                        r2 = r0.formatValueCalls;
                        r1 = 200;
                        if(!(!(r2 > r1))) { _fun41_ip = 838; continue _fun41 }
case 54:
                        r1 = _closure2_slot3;
                        r3 = undefined;
                        r1 = r1.bind(r3)(r0, r4);
                        if(r1) { _fun41_ip = 836; continue _fun41 }
case 75:
                        r5 = global;
                        r7 = r5.Object;
                        r6 = r7.keys;
                        r12 = r6.bind(r7)(r4);
                        r6 = _closure2_slot1;
                        r11 = r6.bind(r3)(r12);
                        var _closure3_slot3 = r11;
                        r6 = _closure2_slot17;
                        r6 = r6.bind(r3)(r4);
                        if(!r6) { _fun41_ip = 162; continue _fun41 }
case 118:
                        r7 = r12.indexOf;
                        r6 = 'message';
                        r6 = r7.bind(r12)(r6);
                        r7 = 0;
                        if(!(!(r6 >= r7))) { _fun41_ip = 825; continue _fun41 }
case 141:
                        r8 = r12.indexOf;
                        r6 = 'description';
                        r6 = r8.bind(r12)(r6);
                        if(!(!(r6 >= r7))) { _fun41_ip = 825; continue _fun41 }
case 162:
                        r7 = r12.length;
                        r6 = 0;
                        if(!(r7 === r6)) { _fun41_ip = 233; continue _fun41 }
case 173:
                        r7 = _closure2_slot18;
                        r7 = r7.bind(r3)(r4);
                        if(r7) { _fun41_ip = 766; continue _fun41 }
case 188:
                        r7 = _closure2_slot14;
                        r7 = r7.bind(r3)(r4);
                        if(r7) { _fun41_ip = 722; continue _fun41 }
case 203:
                        r7 = _closure2_slot16;
                        r7 = r7.bind(r3)(r4);
                        if(r7) { _fun41_ip = 678; continue _fun41 }
case 218:
                        r7 = _closure2_slot17;
                        r7 = r7.bind(r3)(r4);
                        if(r7) { _fun41_ip = 667; continue _fun41 }
case 233:
                        r10 = false;
                        var _closure3_slot4 = r10;
                        r8 = ['{', '}'];
                        r7 = _closure2_slot8;
                        r7 = r7.bind(r3)(r4);
                        if(!r7) { _fun41_ip = 275; continue _fun41 }
case 259:
                        r14 = true;
                        _closure3_slot4 = r14;
                        r8 = ['[', ']'];
                        r10 = true;
case 275:
                        r7 = _closure2_slot18;
                        r14 = r7.bind(r3)(r4);
                        r15 = '';
                        r7 = r15;
                        if(!r14) { _fun41_ip = 331; continue _fun41 }
case 294:
                        r14 = r4.name;
                        if(!r14) { _fun41_ip = 315; continue _fun41 }
case 302:
                        r16 = r4.name;
                        r14 = ': ';
                        r15 = r14 + r16;
case 315:
                        r14 = ' [Function';
                        r15 = r14 + r15;
                        r14 = ']';
                        r7 = r15 + r14;
case 331:
                        r14 = _closure2_slot14;
                        r14 = r14.bind(r3)(r4);
                        if(!r14) { _fun41_ip = 377; continue _fun41 }
case 343:
                        r14 = r5.RegExp;
                        r14 = r14.prototype;
                        r15 = r14.toString;
                        r14 = r15.call;
                        r15 = r14.bind(r15)(r4);
                        r14 = ' ';
                        r7 = r14 + r15;
case 377:
                        r14 = _closure2_slot16;
                        r14 = r14.bind(r3)(r4);
                        if(!r14) { _fun41_ip = 424; continue _fun41 }
case 389:
                        r14 = r5.Date;
                        r14 = r14.prototype;
                        r15 = r14.toUTCString;
                        r14 = r15.call;
                        r15 = r14.bind(r15)(r4);
                        r14 = ' ';
                        r7 = r14 + r15;
case 424:
                        r14 = _closure2_slot17;
                        r14 = r14.bind(r3)(r4);
                        if(!r14) { _fun41_ip = 453; continue _fun41 }
case 436:
                        r14 = _closure2_slot4;
                        r15 = r14.bind(r3)(r4);
                        r14 = ' ';
                        r7 = r14 + r15;
case 453:
                        r14 = r12.length;
                        if(!(r14 === r6)) { _fun41_ip = 480; continue _fun41 }
case 462:
                        if(!r10) { _fun41_ip = 646; continue _fun41 }
case 468:
                        r14 = r4.length;
                        if(!(r14 != r6)) { _fun41_ip = 646; continue _fun41 }
case 480:
                        if(!(!(r13 < r6))) { _fun41_ip = 574; continue _fun41 }
case 484:
                        r15 = r0.seen;
                        r14 = r15.push;
                        r14 = r14.bind(r15)(r4);
                        if(r10) { _fun41_ip = 520; continue _fun41 }
case 503:
                        r10 = r12.map;
                        r9 = function(a0) { // Environment: r9
                            r7 = _closure2_slot6;
                            r13 = _closure3_slot0;
                            r12 = _closure3_slot1;
                            r11 = _closure3_slot2;
                            r10 = _closure3_slot3;
                            r8 = _closure3_slot4;
                            r14 = undefined;
                            r9 = a0;
                            r0 = r14[r7](r13, r12, r11, r10, r9, r8, r7);
                            return r0;
                        };
                        r10 = r10.bind(r12)(r9);
                        _fun41_ip = 545; continue _fun41;
case 520:
                        r9 = _closure2_slot5;
                        r22 = undefined;
                        r21 = r0;
                        r20 = r4;
                        r19 = r13;
                        r18 = r11;
                        r17 = r12;
                        r10 = r22[r9](r21, r20, r19, r18, r17, r16);
case 545:
                        r11 = r0.seen;
                        r9 = r11.pop;
                        r9 = r9.bind(r11)();
                        r9 = _closure2_slot7;
                        r9 = r9.bind(r3)(r10, r7, r8);
                        return r9;
case 574:
                        r9 = _closure2_slot14;
                        r9 = r9.bind(r3)(r4);
                        r11 = r0.stylize;
                        if(r9) { _fun41_ip = 608; continue _fun41 }
case 592:
                        r10 = '[Object]';
                        r9 = 'special';
                        r9 = r11.bind(r0)(r10, r9);
                        return r9;
case 608:
                        r9 = r5.RegExp;
                        r9 = r9.prototype;
                        r10 = r9.toString;
                        r9 = r10.call;
                        r10 = r9.bind(r10)(r4);
                        r9 = 'regexp';
                        r9 = r11.bind(r0)(r10, r9);
                        return r9;
case 646:
                        r6 = r8[r6];
                        r7 = r6 + r7;
                        r6 = 1;
                        r6 = r8[r6];
                        r6 = r7 + r6;
                        return r6;
case 667:
                        r6 = _closure2_slot4;
                        r6 = r6.bind(r3)(r4);
                        return r6;
case 678:
                        r8 = r0.stylize;
                        r6 = r5.Date;
                        r6 = r6.prototype;
                        r7 = r6.toString;
                        r6 = r7.call;
                        r7 = r6.bind(r7)(r4);
                        r6 = 'date';
                        r6 = r8.bind(r0)(r7, r6);
                        return r6;
case 722:
                        r7 = r0.stylize;
                        r5 = r5.RegExp;
                        r5 = r5.prototype;
                        r6 = r5.toString;
                        r5 = r6.call;
                        r6 = r5.bind(r6)(r4);
                        r5 = 'regexp';
                        r5 = r7.bind(r0)(r6, r5);
                        return r5;
case 766:
                        r5 = r4.name;
                        r6 = '';
                        if(!r5) { _fun41_ip = 791; continue _fun41 }
case 778:
                        r7 = r4.name;
                        r5 = ': ';
                        r6 = r5 + r7;
case 791:
                        r7 = r0.stylize;
                        r5 = '[Function';
                        r6 = r5 + r6;
                        r5 = ']';
                        r6 = r6 + r5;
                        r5 = 'special';
                        r5 = r7.bind(r0)(r6, r5);
                        return r5;
case 825:
                        r2 = _closure2_slot4;
                        r2 = r2.bind(r3)(r4);
                        return r2;
case 836:
                        return r1;
case 838:
                        r3 = r0.formatValueCalls;
                        r0 = global;
                        r0 = r0.HermesInternal;
                        r2 = r0.concat;
                        r1 = '[TOO BIG formatValueCalls ';
                        r0 = ' exceeded limit of 200]';
                        r0 = r2.bind(r1)(r3, r0);
                        return r0;
                    }
                };
                var _closure2_slot2 = r1;
                r1 = function(a0, a1) { // Original name: formatPrimitive, environment: r0
                    _fun43: for(var _fun43_ip = 0; ; ) switch(_fun43_ip) {
case 0:
                        r2 = a0;
                        r3 = a1;
                        r4 = _closure2_slot13;
                        r0 = undefined;
                        r4 = r4.bind(r0)(r3);
                        if(r4) { _fun43_ip = 272; continue _fun43 }
case 26:
                        r4 = _closure2_slot12;
                        r4 = r4.bind(r0)(r3);
                        if(r4) { _fun43_ip = 136; continue _fun43 }
case 38:
                        r4 = _closure2_slot11;
                        r4 = r4.bind(r0)(r3);
                        if(r4) { _fun43_ip = 115; continue _fun43 }
case 50:
                        r4 = _closure2_slot9;
                        r4 = r4.bind(r0)(r3);
                        if(r4) { _fun43_ip = 94; continue _fun43 }
case 62:
                        r1 = _closure2_slot10;
                        r1 = r1.bind(r0)(r3);
                        if(r1) { _fun43_ip = 76; continue _fun43 }
case 74:
                        return r0;
case 76:
                        r1 = r2.stylize;
                        r0 = 'null';
                        r0 = r1.bind(r2)(r0, r0);
                        return r0;
case 94:
                        r4 = r2.stylize;
                        r1 = '' + r3;
                        r0 = 'boolean';
                        r0 = r4.bind(r2)(r1, r0);
                        return r0;
case 115:
                        r4 = r2.stylize;
                        r1 = '' + r3;
                        r0 = 'number';
                        r0 = r4.bind(r2)(r1, r0);
                        return r0;
case 136:
                        r0 = global;
                        r1 = r0.JSON;
                        r0 = r1.stringify;
                        r4 = r0.bind(r1)(r3);
                        r3 = r4.replace;
                        r1 = /^"|"$/g;
                        r0 = '';
                        r4 = r3.bind(r4)(r1, r0);
                        r3 = r4.replace;
                        r1 = /'/g;
                        r0 = "\\'";
                        r4 = r3.bind(r4)(r1, r0);
                        r3 = r4.replace;
                        r1 = /\\"/g;
                        r0 = '"';
                        r0 = r3.bind(r4)(r1, r0);
                        r1 = "'";
                        r0 = r1 + r0;
                        r3 = r2.stylize;
                        r1 = r0 + r1;
                        r0 = 'string';
                        r0 = r3.bind(r2)(r1, r0);
                        return r0;
case 272:
                        r1 = r2.stylize;
                        r0 = 'undefined';
                        r0 = r1.bind(r2)(r0, r0);
                        return r0;
                    }
                };
                var _closure2_slot3 = r1;
                r1 = function(a0) { // Original name: formatError, environment: r0
                    r0 = global;
                    r0 = r0.Error;
                    r0 = r0.prototype;
                    r2 = r0.toString;
                    r1 = r2.call;
                    r0 = a0;
                    r1 = r1.bind(r2)(r0);
                    r0 = '[';
                    r1 = r0 + r1;
                    r0 = ']';
                    r0 = r1 + r0;
                    return r0;
                };
                var _closure2_slot4 = r1;
                r1 = function(a0, a1, a2, a3, a4) { // Original name: formatArray, environment: r0
                    _fun45: for(var _fun45_ip = 0; ; ) switch(_fun45_ip) {
case 0:
                        r13 = a0;
                        r12 = a1;
                        r11 = a2;
                        r10 = a3;
                        r3 = a4;
                        var _closure3_slot0 = r13;
                        var _closure3_slot1 = r12;
                        var _closure3_slot2 = r11;
                        var _closure3_slot3 = r10;
                        r0 = new Array(0);
                        var _closure3_slot4 = r0;
                        r9 = r12.length;
                        r8 = 0;
                        r14 = r8 < r9;
                        r6 = global;
                        r5 = undefined;
                        r2 = '';
                        if(!r14) { _fun45_ip = 152; continue _fun45 }
case 66:
                        r15 = _closure2_slot20;
                        r14 = r6.String;
                        r14 = r14.bind(r5)(r8);
                        r15 = r15.bind(r5)(r12, r14);
                        r16 = r0.push;
                        r14 = r8;
                        if(r15) { _fun45_ip = 105; continue _fun45 }
case 98:
                        r15 = r16.bind(r0)(r2);
                        _fun45_ip = 145; continue _fun45;
case 105:
                        r17 = _closure2_slot6;
                        r15 = r6.String;
                        r19 = r15.bind(r5)(r14);
                        r24 = undefined;
                        r23 = r13;
                        r22 = r12;
                        r21 = r11;
                        r20 = r10;
                        r18 = true;
                        r15 = r24[r17](r23, r22, r21, r20, r19, r18, r17);
                        r15 = r16.bind(r0)(r15);
case 145:
                        r8 = r14 + 1;
                        if(r8 < r9) { _fun45_ip = 66; continue _fun45 }
case 152:
                        r2 = r3.forEach;
                        r1 = function(a0) { // Environment: r1
                            _fun46: for(var _fun46_ip = 0; ; ) switch(_fun46_ip) {
case 0:
                                r9 = a0;
                                r1 = r9.match;
                                r0 = /^\d+$/;
                                r0 = r1.bind(r9)(r0);
                                if(r0) { _fun46_ip = 82; continue _fun46 }
case 31:
                                r2 = _closure3_slot4;
                                r1 = r2.push;
                                r8 = _closure2_slot6;
                                r15 = _closure3_slot0;
                                r14 = _closure3_slot1;
                                r13 = _closure3_slot2;
                                r12 = _closure3_slot3;
                                r16 = undefined;
                                r10 = true;
                                r11 = r9;
                                r0 = r16[r8](r15, r14, r13, r12, r11, r10, r9);
                                r0 = r1.bind(r2)(r0);
case 82:
                                r0 = undefined;
                                return r0;
                            }
                        };
                        r1 = r2.bind(r3)(r1);
                        return r0;
                    }
                };
                var _closure2_slot5 = r1;
                r1 = function(a0, a1, a2, a3, a4, a5) { // Original name: formatProperty, environment: r0
                    _fun47: for(var _fun47_ip = 0; ; ) switch(_fun47_ip) {
case 0:
                        r5 = a0;
                        r2 = a1;
                        r11 = a2;
                        r1 = a4;
                        r4 = a5;
                        r3 = global;
                        r6 = r3.Object;
                        r0 = r6.getOwnPropertyDescriptor;
                        r10 = r0.bind(r6)(r2, r1);
                        if(r10) { _fun47_ip = 52; continue _fun47 }
case 39:
                        r0 = {};
                        r2 = r2[r1];
                        r0['value'] = r2;
                        r10 = r0;
case 52:
                        r0 = r10.get;
                        r2 = r10.set;
                        if(r0) { _fun47_ip = 92; continue _fun47 }
case 65:
                        r0 = undefined;
                        if(!r2) { _fun47_ip = 131; continue _fun47 }
case 70:
                        r9 = r5.stylize;
                        r7 = '[Setter]';
                        r6 = 'special';
                        r0 = r9.bind(r5)(r7, r6);
                        _fun47_ip = 131; continue _fun47;
case 92:
                        r7 = r5.stylize;
                        if(r2) { _fun47_ip = 117; continue _fun47 }
case 101:
                        r6 = '[Getter]';
                        r2 = 'special';
                        r0 = r7.bind(r5)(r6, r2);
                        _fun47_ip = 131; continue _fun47;
case 117:
                        r6 = '[Getter/Setter]';
                        r2 = 'special';
                        r0 = r7.bind(r5)(r6, r2);
case 131:
                        r9 = _closure2_slot20;
                        r7 = undefined;
                        r2 = a3;
                        r9 = r9.bind(r7)(r2, r1);
                        r2 = undefined;
                        if(r9) { _fun47_ip = 170; continue _fun47 }
case 154:
                        r9 = '[';
                        r12 = r9 + r1;
                        r9 = ']';
                        r2 = r12 + r9;
case 170:
                        if(r0) { _fun47_ip = 378; continue _fun47 }
case 176:
                        r13 = r5.seen;
                        r12 = r13.indexOf;
                        r9 = r10.value;
                        r12 = r12.bind(r13)(r9);
                        r9 = 0;
                        if(!(!(r12 < r9))) { _fun47_ip = 228; continue _fun47 }
case 203:
                        r13 = r5.stylize;
                        r12 = '[Circular]';
                        r9 = 'special';
                        r0 = r13.bind(r5)(r12, r9);
                        _fun47_ip = 378; continue _fun47;
case 228:
                        r9 = _closure2_slot10;
                        r9 = r9.bind(r7)(r11);
                        r12 = _closure2_slot2;
                        r10 = r10.value;
                        if(r9) { _fun47_ip = 265; continue _fun47 }
case 249:
                        r9 = 1;
                        r9 = r11 - r9;
                        r11 = r12.bind(r7)(r5, r10, r9);
                        _fun47_ip = 274; continue _fun47;
case 265:
                        r9 = null;
                        r11 = r12.bind(r7)(r5, r10, r9);
case 274:
                        r9 = r11.indexOf;
                        r10 = '\n';
                        r12 = r9.bind(r11)(r10);
                        r9 = -1;
                        r0 = r11;
                        if(!(r12 > r9)) { _fun47_ip = 378; continue _fun47 }
case 301:
                        r9 = r11.split;
                        r11 = r9.bind(r11)(r10);
                        r9 = r11.map;
                        if(r4) { _fun47_ip = 345; continue _fun47 }
case 319:
                        r12 = function(a0) { // Environment: r8
                            r1 = '   ';
                            r0 = a0;
                            r0 = r1 + r0;
                            return r0;
                        };
                        r13 = r9.bind(r11)(r12);
                        r12 = r13.join;
                        r12 = r12.bind(r13)(r10);
                        r0 = r10 + r12;
                        _fun47_ip = 378; continue _fun47;
case 345:
                        r8 = function(a0) { // Environment: r8
                            r1 = '  ';
                            r0 = a0;
                            r0 = r1 + r0;
                            return r0;
                        };
                        r9 = r9.bind(r11)(r8);
                        r8 = r9.join;
                        r10 = r8.bind(r9)(r10);
                        r9 = r10.slice;
                        r8 = 2;
                        r0 = r9.bind(r10)(r8);
case 378:
                        r6 = _closure2_slot13;
                        r6 = r6.bind(r7)(r2);
                        if(!r6) { _fun47_ip = 619; continue _fun47 }
case 393:
                        if(!r4) { _fun47_ip = 427; continue _fun47 }
case 396:
                        r6 = r1.match;
                        r4 = /^\d+$/;
                        r4 = r6.bind(r1)(r4);
                        if(r4) { _fun47_ip = 633; continue _fun47 }
case 427:
                        r4 = r3.JSON;
                        r3 = r4.stringify;
                        r1 = '' + r1;
                        r6 = r3.bind(r4)(r1);
                        r3 = r6.match;
                        r1 = /^"([a-zA-Z_][a-zA-Z_0-9]*)"$/;
                        r1 = r3.bind(r6)(r1);
                        if(r1) { _fun47_ip = 580; continue _fun47 }
case 475:
                        r4 = r6.replace;
                        r3 = /'/g;
                        r1 = "\\'";
                        r7 = r4.bind(r6)(r3, r1);
                        r4 = r7.replace;
                        r3 = /\\"/g;
                        r1 = '"';
                        r7 = r4.bind(r7)(r3, r1);
                        r4 = r7.replace;
                        r3 = /(^"|"$)/g;
                        r1 = "'";
                        r4 = r4.bind(r7)(r3, r1);
                        r3 = r5.stylize;
                        r1 = 'string';
                        r2 = r3.bind(r5)(r4, r1);
                        _fun47_ip = 619; continue _fun47;
case 580:
                        r4 = r6.slice;
                        r1 = r6.length;
                        r3 = 1;
                        r1 = r1 - r3;
                        r4 = r4.bind(r6)(r3, r1);
                        r3 = r5.stylize;
                        r1 = 'name';
                        r2 = r3.bind(r5)(r4, r1);
case 619:
                        r1 = ': ';
                        r1 = r2 + r1;
                        r1 = r1 + r0;
                        return r1;
case 633:
                        return r0;
                    }
                };
                var _closure2_slot6 = r1;
                r1 = function(a0, a1, a2) { // Original name: reduceToSingleString, environment: r0
                    _fun50: for(var _fun50_ip = 0; ; ) switch(_fun50_ip) {
case 0:
                        r4 = a0;
                        r5 = a1;
                        r3 = a2;
                        r0 = 0;
                        var _closure3_slot0 = r0;
                        r2 = r4.reduce;
                        r1 = function(a0, a1) { // Environment: r1
                            _fun51: for(var _fun51_ip = 0; ; ) switch(_fun51_ip) {
case 0:
                                r3 = a1;
                                r0 = _closure3_slot0;
                                r0 = r0 + 1;
                                _closure3_slot0 = r0;
                                r2 = r3.indexOf;
                                r0 = '\n';
                                r2 = r2.bind(r3)(r0);
                                r0 = 0;
                                if(!(r2 >= r0)) { _fun51_ip = 48; continue _fun51 }
case 37:
                                r0 = _closure3_slot0;
                                r0 = r0 + 1;
                                _closure3_slot0 = r0;
case 48:
                                r2 = r3.replace;
                                r1 = /\u001b\[\d\d?m/g;
                                r0 = '';
                                r0 = r2.bind(r3)(r1, r0);
                                r1 = r0.length;
                                r0 = a0;
                                r1 = r0 + r1;
                                r0 = 1;
                                r0 = r1 + r0;
                                return r0;
                            }
                        };
                        r2 = r2.bind(r4)(r1, r0);
                        r1 = 60;
                        if(!(!(r2 > r1))) { _fun50_ip = 92; continue _fun50 }
case 41:
                        r1 = r3[r0];
                        r1 = r1 + r5;
                        r6 = r4.join;
                        r2 = ', ';
                        r2 = r6.bind(r4)(r2);
                        r6 = ' ';
                        r1 = r1 + r6;
                        r1 = r1 + r2;
                        r2 = 1;
                        r2 = r3[r2];
                        r1 = r1 + r6;
                        r1 = r1 + r2;
                        return r1;
case 92:
                        r1 = r3[r0];
                        r0 = '';
                        if(!(r5 !== r0)) { _fun50_ip = 112; continue _fun50 }
case 104:
                        r2 = '\n ';
                        r0 = r5 + r2;
case 112:
                        r0 = r1 + r0;
                        r2 = r4.join;
                        r1 = ',\n  ';
                        r1 = r2.bind(r4)(r1);
                        r2 = ' ';
                        r0 = r0 + r2;
                        r0 = r0 + r1;
                        r1 = 1;
                        r1 = r3[r1];
                        r0 = r0 + r2;
                        r0 = r0 + r1;
                        return r0;
                    }
                };
                var _closure2_slot7 = r1;
                r1 = function(a0) { // Original name: isArray, environment: r0
                    r0 = global;
                    r2 = r0.Array;
                    r1 = r2.isArray;
                    r0 = a0;
                    r0 = r1.bind(r2)(r0);
                    return r0;
                };
                var _closure2_slot8 = r1;
                r1 = function(a0) { // Original name: isBoolean, environment: r0
                    r0 = a0;
                    r1 = typeof r0;
                    r0 = 'boolean';
                    r0 = r1 === r0;
                    return r0;
                };
                var _closure2_slot9 = r1;
                r1 = function(a0) { // Original name: isNull, environment: r0
                    r1 = a0;
                    r0 = null;
                    r0 = r1 === r0;
                    return r0;
                };
                var _closure2_slot10 = r1;
                r1 = function(a0) { // Original name: isNumber, environment: r0
                    r0 = a0;
                    r1 = typeof r0;
                    r0 = 'number';
                    r0 = r1 === r0;
                    return r0;
                };
                var _closure2_slot11 = r1;
                r1 = function(a0) { // Original name: isString, environment: r0
                    r0 = a0;
                    r1 = typeof r0;
                    r0 = 'string';
                    r0 = r1 === r0;
                    return r0;
                };
                var _closure2_slot12 = r1;
                r1 = function(a0) { // Original name: isUndefined, environment: r0
                    r1 = a0;
                    r0 = undefined;
                    r0 = r1 === r0;
                    return r0;
                };
                var _closure2_slot13 = r1;
                r1 = function(a0) { // Original name: isRegExp, environment: r0
                    _fun58: for(var _fun58_ip = 0; ; ) switch(_fun58_ip) {
case 0:
                        r3 = a0;
                        r0 = _closure2_slot15;
                        r2 = undefined;
                        r0 = r0.bind(r2)(r3);
                        if(!r0) { _fun58_ip = 37; continue _fun58 }
case 20:
                        r1 = _closure2_slot19;
                        r2 = r1.bind(r2)(r3);
                        r1 = '[object RegExp]';
                        r0 = r2 === r1;
case 37:
                        return r0;
                    }
                };
                var _closure2_slot14 = r1;
                r1 = function(a0) { // Original name: isObject, environment: r0
                    _fun59: for(var _fun59_ip = 0; ; ) switch(_fun59_ip) {
case 0:
                        r2 = a0;
                        r1 = typeof r2;
                        r0 = 'object';
                        r0 = r1 === r0;
                        if(!r0) { _fun59_ip = 23; continue _fun59 }
case 17:
                        r1 = null;
                        r0 = r2 !== r1;
case 23:
                        return r0;
                    }
                };
                var _closure2_slot15 = r1;
                r1 = function(a0) { // Original name: isDate, environment: r0
                    _fun60: for(var _fun60_ip = 0; ; ) switch(_fun60_ip) {
case 0:
                        r3 = a0;
                        r0 = _closure2_slot15;
                        r2 = undefined;
                        r0 = r0.bind(r2)(r3);
                        if(!r0) { _fun60_ip = 37; continue _fun60 }
case 20:
                        r1 = _closure2_slot19;
                        r2 = r1.bind(r2)(r3);
                        r1 = '[object Date]';
                        r0 = r2 === r1;
case 37:
                        return r0;
                    }
                };
                var _closure2_slot16 = r1;
                r1 = function(a0) { // Original name: isError, environment: r0
                    _fun61: for(var _fun61_ip = 0; ; ) switch(_fun61_ip) {
case 0:
                        r3 = a0;
                        r0 = _closure2_slot15;
                        r2 = undefined;
                        r0 = r0.bind(r2)(r3);
                        if(!r0) { _fun61_ip = 55; continue _fun61 }
case 20:
                        r1 = _closure2_slot19;
                        r2 = r1.bind(r2)(r3);
                        r1 = '[object Error]';
                        r1 = r2 === r1;
                        if(r1) { _fun61_ip = 52; continue _fun61 }
case 40:
                        r2 = global;
                        r2 = r2.Error;
                        r1 = r3 instanceof r2;
case 52:
                        r0 = r1;
case 55:
                        return r0;
                    }
                };
                var _closure2_slot17 = r1;
                r1 = function(a0) { // Original name: isFunction, environment: r0
                    r0 = a0;
                    r1 = typeof r0;
                    r0 = 'function';
                    r0 = r1 === r0;
                    return r0;
                };
                var _closure2_slot18 = r1;
                r1 = function(a0) { // Original name: objectToString, environment: r0
                    r0 = global;
                    r0 = r0.Object;
                    r0 = r0.prototype;
                    r2 = r0.toString;
                    r1 = r2.call;
                    r0 = a0;
                    r0 = r1.bind(r2)(r0);
                    return r0;
                };
                var _closure2_slot19 = r1;
                r1 = function(a0, a1) { // Original name: hasOwnProperty, environment: r0
                    r0 = global;
                    r0 = r0.Object;
                    r0 = r0.prototype;
                    r3 = r0.hasOwnProperty;
                    r2 = r3.call;
                    r1 = a0;
                    r0 = a1;
                    r0 = r2.bind(r3)(r1, r0);
                    return r0;
                };
                var _closure2_slot20 = r1;
                r0 = function(a0, a1) { // Original name: inspect, environment: r0
                    r4 = {};
                    r0 = new Array(0);
                    r4['seen'] = r0;
                    r0 = 0;
                    r4['formatValueCalls'] = r0;
                    r1 = _closure2_slot0;
                    r4['stylize'] = r1;
                    r3 = _closure2_slot2;
                    r0 = a1;
                    r2 = r0.depth;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r3.bind(r1)(r4, r0, r2);
                    return r0;
                };
                return r0;
            };
            r0 = undefined;
            r1 = r1.bind(r0)();
            var _closure1_slot1 = r1;
            r1 = '(index)';
            var _closure1_slot2 = r1;
            r4 = {'trace': 0, 'info': 1, 'warn': 2, 'error': 3};
            var _closure1_slot3 = r4;
            r1 = '│';
            var _closure1_slot4 = r1;
            r1 = '┐';
            var _closure1_slot5 = r1;
            r1 = '┘';
            var _closure1_slot6 = r1;
            r1 = new Array(0);
            var _closure1_slot7 = r1;
            r1 = r3.nativeLoggingHook;
            r8 = r3.console;
            if(r1) { _fun16_ip = 289; continue _fun16 }
case 127:
            if(r8) { _fun16_ip = 571; continue _fun16 }
case 133:
            r5 = function() { // Original name: stub, environment: r2
                r0 = undefined;
                return r0;
            };
            r6 = r3.print;
            if(r6) { _fun16_ip = 150; continue _fun16 }
case 147:
            r6 = r5;
case 150:
            var _closure1_slot10 = r6;
            r1 = {};
            r1['debug'] = r6;
            r1['error'] = r6;
            r1['info'] = r6;
            r1['log'] = r6;
            r1['trace'] = r6;
            r1['warn'] = r6;
            r6 = function(a0, a1) { // Original name: assert, environment: r2
                _fun69: for(var _fun69_ip = 0; ; ) switch(_fun69_ip) {
case 0:
                    r0 = a0;
                    if(r0) { _fun69_ip = 31; continue _fun69 }
case 6:
                    r2 = _closure1_slot10;
                    r1 = 'Assertion failed: ';
                    r0 = a1;
                    r1 = r1 + r0;
                    r0 = undefined;
                    r0 = r2.bind(r0)(r1);
case 31:
                    r0 = undefined;
                    return r0;
                }
            };
            r1['assert'] = r6;
            r1['clear'] = r5;
            r1['dir'] = r5;
            r1['dirxml'] = r5;
            r1['group'] = r5;
            r1['groupCollapsed'] = r5;
            r1['groupEnd'] = r5;
            r1['profile'] = r5;
            r1['profileEnd'] = r5;
            r1['table'] = r5;
            r3['console'] = r1;
            r1 = global;
            r10 = r1.Object;
            r7 = r10.defineProperty;
            r6 = r1.console;
            r5 = '_isPolyfilled';
            r1 = {'value': true, 'enumerable': false};
            r1 = r7.bind(r10)(r6, r5, r1);
            _fun16_ip = 571; continue _fun16;
case 289:
            r1 = global;
            r7 = r1.Object;
            r6 = r7.assign;
            r5 = null;
            if(!(r8 == r5)) { _fun16_ip = 310; continue _fun16 }
case 308:
            r8 = {};
case 310:
            r5 = {};
            r10 = r4.error;
            r10 = r9.bind(r0)(r10);
            r5['error'] = r10;
            r10 = r4.info;
            r10 = r9.bind(r0)(r10);
            r5['info'] = r10;
            r10 = r4.info;
            r10 = r9.bind(r0)(r10);
            r5['log'] = r10;
            r10 = r4.warn;
            r10 = r9.bind(r0)(r10);
            r5['warn'] = r10;
            r10 = r4.trace;
            r10 = r9.bind(r0)(r10);
            r5['trace'] = r10;
            r4 = r4.trace;
            r4 = r9.bind(r0)(r4);
            r5['debug'] = r4;
            r4 = function(a0, a1) { // Original name: consoleTablePolyfill, environment: r2
                _fun23: for(var _fun23_ip = 0; ; ) switch(_fun23_ip) {
case 0:
                    r6 = a0;
                    r7 = a1;
                    r5 = function(a0, a1) { // Original name: joinRow, environment: r0
                        r2 = a0;
                        r1 = r2.map;
                        r0 = function(a0, a1) { // Environment: r0
                            r1 = a0;
                            r4 = _closure1_slot11;
                            r2 = _closure2_slot2;
                            r0 = a1;
                            r2 = r2[r0];
                            r0 = r1.length;
                            r3 = r2 - r0;
                            r2 = undefined;
                            r0 = ' ';
                            r3 = r4.bind(r2)(r0, r3);
                            r2 = r3.join;
                            r0 = '';
                            r0 = r2.bind(r3)(r0);
                            r0 = r1 + r0;
                            return r0;
                        };
                        r2 = r1.bind(r2)(r0);
                        r3 = ' ';
                        r1 = r2.join;
                        r0 = '|';
                        r0 = r3 + r0;
                        r0 = r0 + r3;
                        r1 = r1.bind(r2)(r0);
                        r0 = '| ';
                        r1 = r0 + r1;
                        r0 = ' |';
                        r0 = r1 + r0;
                        return r0;
                    };
                    r1 = global;
                    r3 = r1.Array;
                    r2 = r3.isArray;
                    r2 = r2.bind(r3)(r6);
                    if(r2) { _fun23_ip = 130; continue _fun23 }
case 34:
                    r12 = new Array(0);
                    var _closure2_slot0 = r12;
                    r10 = r6;
                    r4 = r12;
                    for(r3 in r10)
case 59:
                    {
                        r4 = r12;
case 71:
                        r13 = r3;
                        r14 = r6.hasOwnProperty;
                        r14 = r14.bind(r6)(r13);
                        if(!r14) { _fun23_ip = 59; continue _fun23 }
case 87:
                        r14 = {};
                        r15 = _closure1_slot2;
                        r14[r15] = r13;
                        r16 = r1.Object;
                        r15 = r16.assign;
                        r13 = r6[r13];
                        r13 = r15.bind(r16)(r14, r13);
                        r13 = r12.push;
                        r13 = r13.bind(r12)(r14);
                        _fun23_ip = 59; continue _fun23;
case 130:
                        r3 = r6.map;
                        r2 = function(a0, a1) { // Environment: r0
                            r0 = {};
                            r3 = _closure1_slot2;
                            r1 = global;
                            r5 = r1.String;
                            r4 = undefined;
                            r2 = a1;
                            r2 = r5.bind(r4)(r2);
                            r0[r3] = r2;
                            r3 = r1.Object;
                            r2 = r3.assign;
                            r1 = a0;
                            r1 = r2.bind(r3)(r0, r1);
                            return r0;
                        };
                        r2 = r3.bind(r6)(r2);
                        _closure2_slot0 = r2;
                        r4 = r2;
                    }
case 152:
                    r2 = r4.length;
                    r3 = 0;
                    if(!(r2 !== r3)) { _fun23_ip = 435; continue _fun23 }
case 166:
                    r6 = r1.Array;
                    r2 = r6.isArray;
                    r2 = r2.bind(r6)(r7);
                    if(r2) { _fun23_ip = 246; continue _fun23 }
case 185:
                    r6 = r1.Array;
                    r2 = r6.from;
                    r9 = r4.reduce;
                    r1 = r1.Set;
                    r8 = r1.prototype;
                    r8 = Object.create(r8, {constructor: {value: r1}});
                    r19 = r8;
                    r1 = new r19[r1](r18);
                    r8 = r1 instanceof Object ? r1 : r8;
                    r1 = function(a0, a1) { // Environment: r0
                        r0 = a0;
                        var _closure3_slot0 = r0;
                        r2 = global;
                        r4 = r2.Object;
                        r3 = r4.keys;
                        r2 = a1;
                        r3 = r3.bind(r4)(r2);
                        r2 = r3.forEach;
                        r1 = function(a0) { // Environment: r1
                            r2 = _closure3_slot0;
                            r1 = r2.add;
                            r0 = a0;
                            r0 = r1.bind(r2)(r0);
                            return r0;
                        };
                        r1 = r2.bind(r3)(r1);
                        return r0;
                    };
                    r1 = r9.bind(r4)(r1, r8);
                    r6 = r2.bind(r6)(r1);
                    _fun23_ip = 271; continue _fun23;
case 246:
                    r1 = _closure1_slot2;
                    r2 = new Array(1);
                    r2[0] = r1;
                    r1 = r2.concat;
                    r6 = r1.bind(r2)(r7);
case 271:
                    r2 = new Array(0);
                    var _closure2_slot1 = r2;
                    r7 = new Array(0);
                    var _closure2_slot2 = r7;
                    r8 = r6.forEach;
                    r1 = function(a0, a1) { // Environment: r0
                        _fun29: for(var _fun29_ip = 0; ; ) switch(_fun29_ip) {
case 0:
                            r7 = a0;
                            r6 = a1;
                            r1 = _closure2_slot2;
                            r0 = r7.length;
                            r1[r6] = r0;
                            r0 = _closure2_slot0;
                            r0 = r0.length;
                            r4 = 0;
                            r1 = r4 < r0;
                            r3 = global;
                            r0 = undefined;
                            if(!r1) { _fun29_ip = 153; continue _fun29 }
case 47:
                            r8 = _closure1_slot12;
                            r1 = _closure2_slot0;
                            r1 = r1[r4];
                            r8 = r8.bind(r0)(r1, r7);
                            r10 = _closure2_slot1;
                            r9 = r10[r4];
                            r1 = r4;
                            if(r9) { _fun29_ip = 83; continue _fun29 }
case 79:
                            r9 = new Array(0);
case 83:
                            r10[r1] = r9;
                            r9 = _closure2_slot1;
                            r9 = r9[r1];
                            r9[r6] = r8;
                            r9 = _closure2_slot2;
                            r12 = r3.Math;
                            r11 = r12.max;
                            r10 = _closure2_slot2;
                            r10 = r10[r6];
                            r8 = r8.length;
                            r8 = r11.bind(r12)(r10, r8);
                            r9[r6] = r8;
                            r4 = r1 + 1;
                            r1 = _closure2_slot0;
                            r1 = r1.length;
                            if(r4 < r1) { _fun29_ip = 47; continue _fun29 }
case 153:
                            return r0;
                        }
                    };
                    r1 = r8.bind(r6)(r1);
                    r1 = r7.map;
                    r0 = function(a0) { // Environment: r0
                        r3 = _closure1_slot11;
                        r2 = undefined;
                        r1 = '-';
                        r0 = a0;
                        r2 = r3.bind(r2)(r1, r0);
                        r1 = r2.join;
                        r0 = '';
                        r0 = r1.bind(r2)(r0);
                        return r0;
                    };
                    r1 = r1.bind(r7)(r0);
                    r0 = undefined;
                    r1 = r5.bind(r0)(r1);
                    r7 = r5.bind(r0)(r6);
                    r6 = new Array(2);
                    r6[0] = r7;
                    r6[1] = r1;
                    r1 = r4.length;
                    r1 = r3 < r1;
                    r3 = 0;
                    if(!r1) { _fun23_ip = 386; continue _fun23 }
case 355:
                    r7 = r6.push;
                    r1 = r2[r3];
                    r1 = r5.bind(r0)(r1);
                    r1 = r7.bind(r6)(r1);
                    r3 = r3 + 1;
                    r1 = r4.length;
                    if(r3 < r1) { _fun23_ip = 355; continue _fun23 }
case 386:
                    r4 = _closure1_slot0;
                    r3 = r4.nativeLoggingHook;
                    r2 = r6.join;
                    r5 = '\n';
                    r2 = r2.bind(r6)(r5);
                    r2 = r5 + r2;
                    r1 = _closure1_slot3;
                    r1 = r1.info;
                    r1 = r3.bind(r4)(r2, r1);
                    return r0;
case 435:
                    r3 = _closure1_slot0;
                    r2 = r3.nativeLoggingHook;
                    r0 = _closure1_slot3;
                    r1 = r0.info;
                    r0 = '';
                    r0 = r2.bind(r3)(r0, r1);
                    r0 = undefined;
                    return r0;
                }
            };
            r5['table'] = r4;
            r4 = function(a0) { // Original name: consoleGroupPolyfill, environment: r2
                r5 = _closure1_slot0;
                r4 = r5.nativeLoggingHook;
                r6 = _closure1_slot13;
                r3 = _closure1_slot5;
                r0 = undefined;
                r2 = a0;
                r3 = r6.bind(r0)(r3, r2);
                r2 = _closure1_slot3;
                r2 = r2.info;
                r2 = r4.bind(r5)(r3, r2);
                r3 = _closure1_slot7;
                r2 = r3.push;
                r1 = _closure1_slot4;
                r1 = r2.bind(r3)(r1);
                return r0;
            };
            r5['group'] = r4;
            r4 = function() { // Original name: consoleGroupEndPolyfill, environment: r2
                r2 = _closure1_slot7;
                r0 = r2.pop;
                r0 = r0.bind(r2)();
                r4 = _closure1_slot0;
                r3 = r4.nativeLoggingHook;
                r5 = _closure1_slot13;
                r2 = _closure1_slot6;
                r0 = undefined;
                r2 = r5.bind(r0)(r2);
                r1 = _closure1_slot3;
                r1 = r1.info;
                r1 = r3.bind(r4)(r2, r1);
                return r0;
            };
            r5['groupEnd'] = r4;
            r4 = function(a0) { // Original name: consoleGroupCollapsedPolyfill, environment: r2
                r5 = _closure1_slot0;
                r4 = r5.nativeLoggingHook;
                r6 = _closure1_slot13;
                r3 = _closure1_slot6;
                r0 = undefined;
                r2 = a0;
                r3 = r6.bind(r0)(r3, r2);
                r2 = _closure1_slot3;
                r2 = r2.info;
                r2 = r4.bind(r5)(r3, r2);
                r3 = _closure1_slot7;
                r2 = r3.push;
                r1 = _closure1_slot4;
                r1 = r2.bind(r3)(r1);
                return r0;
            };
            r5['groupCollapsed'] = r4;
            r4 = function(a0, a1) { // Original name: consoleAssertPolyfill, environment: r2
                _fun35: for(var _fun35_ip = 0; ; ) switch(_fun35_ip) {
case 0:
                    r0 = a0;
                    if(r0) { _fun35_ip = 45; continue _fun35 }
case 6:
                    r3 = _closure1_slot0;
                    r2 = r3.nativeLoggingHook;
                    r4 = 'Assertion failed: ';
                    r1 = a1;
                    r1 = r4 + r1;
                    r0 = _closure1_slot3;
                    r0 = r0.error;
                    r0 = r2.bind(r3)(r1, r0);
case 45:
                    r0 = undefined;
                    return r0;
                }
            };
            r5['assert'] = r4;
            r4 = {};
            r4 = r6.bind(r7)(r4, r8, r5);
            r3['console'] = r4;
            r3 = r3.RN$useAlwaysAvailableJSErrorHandling;
            r4 = true;
            if(!(r3 === r4)) { _fun16_ip = 533; continue _fun16 }
case 480:
            r3 = function(a0) { // Original name: stringifySafe, environment: r2
                r3 = _closure1_slot1;
                r2 = {};
                r0 = 10;
                r2['depth'] = r0;
                r1 = undefined;
                r0 = a0;
                r3 = r3.bind(r1)(r0, r2);
                r2 = r3.replace;
                r1 = /\n\s*/g;
                r0 = ' ';
                r0 = r2.bind(r3)(r1, r0);
                return r0;
            };
            var _closure1_slot8 = r3;
            r3 = r1.console;
            r3 = r3.error;
            var _closure1_slot9 = r3;
            r3 = r1.console;
            r3['reportErrorsAsExceptions'] = r4;
            r3 = r1.console;
            r2 = function() { // Environment: r2
                _fun66: for(var _fun66_ip = 0; ; ) switch(_fun66_ip) {
case 0:
                    r0 = undefined;
                    r5 = undefined;
                    r3 = arguments.length;
                    r2 = global;
                    r1 = r2.Array;
                    r4 = r1.prototype;
                    r4 = Object.create(r4, {constructor: {value: r1}});
                    r11 = r4;
                    r10 = r3;
                    r1 = new r11[r1](r10, r9);
                    r6 = r1 instanceof Object ? r1 : r4;
                    r4 = 0;
                    r7 = r4 < r3;
                    r1 = 0;
                    if(!r7) { _fun66_ip = 64; continue _fun66 }
case 49:
                    r7 = arguments[r1];
                    r6[r1] = r7;
                    r1 = r1 + 1;
                    if(r1 < r3) { _fun66_ip = 49; continue _fun66 }
case 64:
                    r7 = _closure1_slot9;
                    r5 = r7.apply;
                    r3 = this;
                    r3 = r5.bind(r7)(r3, r6);
                    r3 = r2.console;
                    r3 = r3.reportErrorsAsExceptions;
                    if(r3) { _fun66_ip = 101; continue _fun66 }
case 99:
                    return r0;
case 101:
                    r3 = _closure1_slot0;
                    r5 = r3.RN$inExceptionHandler;
                    r3 = null;
                    if(!(r5 != r3)) { _fun66_ip = 137; continue _fun66 }
case 117:
                    r7 = _closure1_slot0;
                    r5 = r7.RN$inExceptionHandler;
                    r5 = r5.bind(r7)();
                    if(r5) { _fun66_ip = 280; continue _fun66 }
case 137:
                    r7 = r6[r4];
                    if(!(r7 != r3)) { _fun66_ip = 156; continue _fun66 }
case 145:
                    r3 = r7.stack;
                    r4 = r7;
                    if(r3) { _fun66_ip = 259; continue _fun66 }
case 156:
                    r5 = typeof r7;
                    r3 = 'string';
                    if(!(r5 === r3)) { _fun66_ip = 185; continue _fun66 }
case 167:
                    r5 = r7.startsWith;
                    r3 = 'Warning: ';
                    r3 = r5.bind(r7)(r3);
                    if(r3) { _fun66_ip = 257; continue _fun66 }
case 185:
                    r5 = r6.map;
                    r3 = function(a0) { // Environment: r3
                        _fun67: for(var _fun67_ip = 0; ; ) switch(_fun67_ip) {
case 0:
                            r3 = a0;
                            r2 = typeof r3;
                            r1 = 'string';
                            r0 = r3;
                            if(!(r2 !== r1)) { _fun67_ip = 31; continue _fun67 }
case 17:
                            r2 = _closure1_slot8;
                            r1 = undefined;
                            r0 = r2.bind(r1)(r3);
case 31:
                            return r0;
                        }
                    };
                    r6 = r5.bind(r6)(r3);
                    r5 = r6.join;
                    r3 = ' ';
                    r10 = r5.bind(r6)(r3);
                    r2 = r2.Error;
                    r3 = r2.prototype;
                    r3 = Object.create(r3, {constructor: {value: r2}});
                    r11 = r3;
                    r2 = new r11[r2](r10, r9);
                    r2 = r2 instanceof Object ? r2 : r3;
                    r3 = 'console.error';
                    r2['name'] = r3;
                    r4 = r2;
                    _fun66_ip = 259; continue _fun66;
case 257:
                    return r0;
case 259:
                    r3 = _closure1_slot0;
                    r2 = r3.RN$handleException;
                    r1 = false;
                    r1 = r2.bind(r3)(r4, r1, r1);
                    return r0;
case 280:
                    return r0;
                }
            };
            r3['error'] = r2;
case 533:
            r5 = r1.Object;
            r4 = r5.defineProperty;
            r3 = r1.console;
            r2 = '_isPolyfilled';
            r1 = {'value': true, 'enumerable': false};
            r1 = r4.bind(r5)(r3, r2, r1);
case 571:
            return r0;
        }
    };
    r1 = r1.bind(r2)(r6);
    r1 = r0.globalThis;
    r1 = typeof r1;
    if(!(r1 === r5)) { _fun0_ip = 390; continue _fun0 }
case 349:
    r1 = r0.global;
    r1 = typeof r1;
    if(!(r1 === r5)) { _fun0_ip = 382; continue _fun0 }
case 362:
    r1 = r0.window;
    r1 = typeof r1;
    if(!(r1 !== r5)) { _fun0_ip = 380; continue _fun0 }
case 374:
    r4 = r0.window;
case 380:
    _fun0_ip = 388; continue _fun0;
case 382:
    r4 = r0.global;
case 388:
    _fun0_ip = 396; continue _fun0;
case 390:
    r4 = r0.globalThis;
case 396:
    r1 = function(a0) { // Environment: r3
        _fun70: for(var _fun70_ip = 0; ; ) switch(_fun70_ip) {
case 0:
            r1 = a0;
            r0 = 0;
            var _closure1_slot0 = r0;
            r3 = r1.RN$useAlwaysAvailableJSErrorHandling;
            r0 = true;
            if(!(r3 !== r0)) { _fun70_ip = 30; continue _fun70 }
case 23:
            r0 = function(a0, a1) { // Environment: r2
                r0 = a0;
                throw r0;
            };
            _fun70_ip = 36; continue _fun70;
case 30:
            r0 = r1.RN$handleException;
case 36:
            var _closure1_slot1 = r0;
            r0 = {};
            r3 = function(a0) { // Original name: setGlobalHandler, environment: r2
                r0 = a0;
                _closure1_slot1 = r0;
                r0 = undefined;
                return r0;
            };
            r0['setGlobalHandler'] = r3;
            r3 = function() { // Original name: getGlobalHandler, environment: r2
                r0 = _closure1_slot1;
                return r0;
            };
            r0['getGlobalHandler'] = r3;
            r3 = function(a0) { // Original name: reportError, environment: r2
                _fun74: for(var _fun74_ip = 0; ; ) switch(_fun74_ip) {
case 0:
                    r1 = _closure1_slot1;
                    if(!r1) { _fun74_ip = 27; continue _fun74 }
case 10:
                    r3 = _closure1_slot1;
                    r2 = undefined;
                    r1 = a0;
                    r0 = false;
                    r0 = r3.bind(r2)(r1, r0);
case 27:
                    r0 = undefined;
                    return r0;
                }
            };
            r0['reportError'] = r3;
            r3 = function(a0) { // Original name: reportFatalError, environment: r2
                _fun75: for(var _fun75_ip = 0; ; ) switch(_fun75_ip) {
case 0:
                    r1 = _closure1_slot1;
                    if(!r1) { _fun75_ip = 27; continue _fun75 }
case 10:
                    r3 = _closure1_slot1;
                    r2 = undefined;
                    r1 = a0;
                    r0 = true;
                    r0 = r3.bind(r2)(r1, r0);
case 27:
                    r0 = undefined;
                    return r0;
                }
            };
            r0['reportFatalError'] = r3;
            r3 = function(a0, a1, a2, a3, a4) { // Original name: applyWithGuard, environment: r2
                _fun76: for(var _fun76_ip = 0; ; ) switch(_fun76_ip) {
case 0:
                    r3 = a0;
                    r1 = a1;
                    r0 = a2;
case 9: // try_start_0 // try_start_1
                    r4 = _closure1_slot0;
                    r4 = r4 + 1;
                    _closure1_slot0 = r4;
                    r4 = r3;
                    r3 = r4.apply;
                    r0 = r3.bind(r4)(r1, r0);
case 37: // try_end0 // try_end1
                    r1 = _closure1_slot0;
                    r1 = r1 - 1;
                    _closure1_slot0 = r1;
                    return r0;
case 50: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=3);
                    r2 = _closure1_slot2;
                    r0 = r2.reportError;
                    r0 = r0.bind(r2)(r3);
case 70: // try_end2
                    r0 = _closure1_slot0;
                    r0 = r0 - 1;
                    _closure1_slot0 = r0;
                    r0 = null;
                    return r0;
case 85: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=0);
                    r1 = _closure1_slot0;
                    r1 = r1 - 1;
                    _closure1_slot0 = r1;
                    throw r0;
                }
            };
            r0['applyWithGuard'] = r3;
            r3 = function(a0, a1, a2) { // Original name: applyWithGuardIfNeeded, environment: r2
                _fun77: for(var _fun77_ip = 0; ; ) switch(_fun77_ip) {
case 0:
                    r3 = a0;
                    r2 = a1;
                    r1 = a2;
                    r5 = _closure1_slot2;
                    r4 = r5.inGuard;
                    r4 = r4.bind(r5)();
                    if(r4) { _fun77_ip = 50; continue _fun77 }
case 29:
                    r4 = _closure1_slot2;
                    r0 = r4.applyWithGuard;
                    r0 = r0.bind(r4)(r3, r2, r1);
                    r0 = null;
                    return r0;
case 50:
                    r0 = r3.apply;
                    r0 = r0.bind(r3)(r2, r1);
                    return r0;
                }
            };
            r0['applyWithGuardIfNeeded'] = r3;
            r3 = function() { // Original name: inGuard, environment: r2
                r0 = _closure1_slot0;
                r0 = !r0;
                r0 = !r0;
                return r0;
            };
            r0['inGuard'] = r3;
            r3 = function(a0, a1, a2) { // Original name: guard, environment: r2
                _fun79: for(var _fun79_ip = 0; ; ) switch(_fun79_ip) {
case 0:
                    r3 = a0;
                    r2 = a1;
                    var _closure2_slot0 = r3;
                    r1 = a2;
                    var _closure2_slot1 = r1;
                    r4 = typeof r3;
                    r1 = 'function';
                    if(!(r4 === r1)) { _fun79_ip = 66; continue _fun79 }
case 30:
                    r1 = null;
                    if(!(r2 == r1)) { _fun79_ip = 41; continue _fun79 }
case 36:
                    r2 = r3.name;
case 41:
                    r4 = r2 != r1;
                    r1 = '<generated guard>';
                    if(!r4) { _fun79_ip = 55; continue _fun79 }
case 52:
                    r1 = r2;
case 55:
                    var _closure2_slot2 = r1;
                    r0 = function() { // Original name: guarded, environment: r0
                        _fun80: for(var _fun80_ip = 0; ; ) switch(_fun80_ip) {
case 0:
                            r6 = this;
                            r2 = undefined;
                            r1 = arguments.length;
                            r0 = global;
                            r0 = r0.Array;
                            r3 = r0.prototype;
                            r3 = Object.create(r3, {constructor: {value: r0}});
                            r13 = r3;
                            r12 = r1;
                            r0 = new r13[r0](r12, r11);
                            r5 = r0 instanceof Object ? r0 : r3;
                            r0 = 0;
                            r3 = r0 < r1;
                            if(!r3) { _fun80_ip = 62; continue _fun80 }
case 47:
                            r3 = arguments[r0];
                            r5[r0] = r3;
                            r0 = r0 + 1;
                            if(r0 < r1) { _fun80_ip = 47; continue _fun80 }
case 62:
                            r4 = _closure1_slot2;
                            r3 = r4.applyWithGuard;
                            r2 = _closure2_slot0;
                            r7 = _closure2_slot1;
                            r1 = null;
                            if(!(r7 != r1)) { _fun80_ip = 96; continue _fun80 }
case 92:
                            r6 = _closure2_slot1;
case 96:
                            r8 = _closure2_slot2;
                            r13 = r4;
                            r12 = r2;
                            r11 = r6;
                            r10 = r5;
                            r9 = null;
                            r0 = r13[r3](r12, r11, r10, r9, r8, r7);
                            return r0;
                        }
                    };
                    return r0;
case 66:
                    r0 = global;
                    r2 = r0.console;
                    r1 = r2.warn;
                    r0 = 'A function must be passed to ErrorUtils.guard, got ';
                    r0 = r1.bind(r2)(r0, r3);
                    r0 = null;
                    return r0;
                }
            };
            r0['guard'] = r3;
            var _closure1_slot2 = r0;
            r1['ErrorUtils'] = r0;
            r0 = undefined;
            return r0;
        }
    };
    r1 = r1.bind(r2)(r4);
    r6 = r0.__d;
    r5 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r5 = a1;
        r6 = a6;
        r0 = 0;
        r2 = r6[r0];
        r0 = undefined;
        r4 = r5.bind(r0)(r2);
        r2 = 1;
        r2 = r6[r2];
        r2 = r5.bind(r0)(r2);
        r3 = 2;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot0 = r3;
        r4 = r2.AppRegistry;
        r3 = r4.registerComponent;
        r2 = 3;
        r2 = r6[r2];
        r2 = r5.bind(r0)(r2);
        r2 = r2.name;
        r1 = function() { // Environment: r1
            r0 = _closure1_slot0;
            r0 = r0.default;
            return r0;
        };
        r1 = r3.bind(r4)(r2, r1);
        return r0;
    };
    r1 = 0;
    r4 = [1, 2, 497, 656];
    r4 = r6.bind(r2)(r5, r1, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r0 = a4;
        r1 = function(a0) { // Original name: _interopRequireDefault, environment: r1
            _fun84: for(var _fun84_ip = 0; ; ) switch(_fun84_ip) {
case 0:
                r2 = a0;
                if(!r2) { _fun84_ip = 17; continue _fun84 }
case 6:
                r1 = r2.__esModule;
                r0 = r2;
                if(r1) { _fun84_ip = 26; continue _fun84 }
case 17:
                r1 = {};
                r1['default'] = r2;
                r0 = r1;
case 26:
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
    r5 = 1;
    r4 = new Array(0);
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r0 = a1;
        var _closure1_slot0 = r0;
        r0 = a6;
        var _closure1_slot1 = r0;
        r2 = {};
        r4 = function() { // Original name: get registerCallableModule, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 0;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r0 = undefined;
        r3 = 'registerCallableModule';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get AccessibilityInfo, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 1;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'AccessibilityInfo';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get ActivityIndicator, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 2;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'ActivityIndicator';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get Button, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 3;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'Button';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get DrawerLayoutAndroid, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 4;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'DrawerLayoutAndroid';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get FlatList, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 5;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'FlatList';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get Image, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 6;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'Image';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get ImageBackground, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 7;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'ImageBackground';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get InputAccessoryView, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 8;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'InputAccessoryView';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get experimental_LayoutConformance, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 9;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'experimental_LayoutConformance';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get KeyboardAvoidingView, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 10;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'KeyboardAvoidingView';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get Modal, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 11;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'Modal';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get Pressable, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 12;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'Pressable';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get ProgressBarAndroid, environment: r1
            r2 = _closure1_slot0;
            r3 = _closure1_slot1;
            r0 = 13;
            r0 = r3[r0];
            r1 = undefined;
            r6 = r2.bind(r1)(r0);
            r5 = r6.default;
            r4 = 'progress-bar-android-moved';
            r0 = "ProgressBarAndroid has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-community/progress-bar-android' instead of 'react-native'. See https://github.com/react-native-progress-view/progress-bar-android";
            r0 = r5.bind(r6)(r4, r0);
            r0 = 14;
            r0 = r3[r0];
            r0 = r2.bind(r1)(r0);
            r0 = r0.default;
            return r0;
        };
        r3 = 'ProgressBarAndroid';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get RefreshControl, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 15;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'RefreshControl';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get SafeAreaView, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 16;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'SafeAreaView';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get ScrollView, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 17;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'ScrollView';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get SectionList, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 18;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'SectionList';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get StatusBar, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 19;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'StatusBar';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get Switch, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 20;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'Switch';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get Text, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 21;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'Text';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get TextInput, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 22;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'TextInput';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get Touchable, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 23;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'Touchable';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get TouchableHighlight, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 24;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'TouchableHighlight';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get TouchableNativeFeedback, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 25;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'TouchableNativeFeedback';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get TouchableOpacity, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 26;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'TouchableOpacity';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get TouchableWithoutFeedback, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 27;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'TouchableWithoutFeedback';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get View, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 28;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'View';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get VirtualizedList, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 29;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'VirtualizedList';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get VirtualizedSectionList, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 30;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'VirtualizedSectionList';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get ActionSheetIOS, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 31;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'ActionSheetIOS';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get Alert, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 32;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'Alert';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get Animated, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 33;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'Animated';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get Appearance, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 34;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            return r0;
        };
        r3 = 'Appearance';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get AppRegistry, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 35;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'AppRegistry';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get AppState, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 36;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'AppState';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get BackHandler, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 37;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'BackHandler';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get Clipboard, environment: r1
            r2 = _closure1_slot0;
            r3 = _closure1_slot1;
            r0 = 13;
            r0 = r3[r0];
            r1 = undefined;
            r6 = r2.bind(r1)(r0);
            r5 = r6.default;
            r4 = 'clipboard-moved';
            r0 = "Clipboard has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-clipboard/clipboard' instead of 'react-native'. See https://github.com/react-native-clipboard/clipboard";
            r0 = r5.bind(r6)(r4, r0);
            r0 = 38;
            r0 = r3[r0];
            r0 = r2.bind(r1)(r0);
            r0 = r0.default;
            return r0;
        };
        r3 = 'Clipboard';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get DeviceInfo, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 39;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'DeviceInfo';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get DevMenu, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 40;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'DevMenu';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get DevSettings, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 41;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'DevSettings';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get Dimensions, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 42;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'Dimensions';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get Easing, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 43;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'Easing';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get findNodeHandle, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 44;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.findNodeHandle;
            return r0;
        };
        r3 = 'findNodeHandle';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get I18nManager, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 45;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'I18nManager';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get InteractionManager, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 46;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'InteractionManager';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get Keyboard, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 47;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'Keyboard';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get LayoutAnimation, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 48;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'LayoutAnimation';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get Linking, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 49;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'Linking';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get LogBox, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 50;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'LogBox';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get NativeDialogManagerAndroid, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 51;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'NativeDialogManagerAndroid';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get NativeEventEmitter, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 52;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'NativeEventEmitter';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get Networking, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 53;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'Networking';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get PanResponder, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 54;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'PanResponder';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get PermissionsAndroid, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 55;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'PermissionsAndroid';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get PixelRatio, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 56;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'PixelRatio';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get PushNotificationIOS, environment: r1
            r2 = _closure1_slot0;
            r3 = _closure1_slot1;
            r0 = 13;
            r0 = r3[r0];
            r1 = undefined;
            r6 = r2.bind(r1)(r0);
            r5 = r6.default;
            r4 = 'pushNotificationIOS-moved';
            r0 = "PushNotificationIOS has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-community/push-notification-ios' instead of 'react-native'. See https://github.com/react-native-push-notification/ios";
            r0 = r5.bind(r6)(r4, r0);
            r0 = 57;
            r0 = r3[r0];
            r0 = r2.bind(r1)(r0);
            r0 = r0.default;
            return r0;
        };
        r3 = 'PushNotificationIOS';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get Settings, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 58;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'Settings';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get Share, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 59;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'Share';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get StyleSheet, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 60;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'StyleSheet';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get Systrace, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 61;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            return r0;
        };
        r3 = 'Systrace';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get ToastAndroid, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 62;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'ToastAndroid';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get TurboModuleRegistry, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 63;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            return r0;
        };
        r3 = 'TurboModuleRegistry';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get UIManager, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 64;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'UIManager';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get unstable_batchedUpdates, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 44;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.unstable_batchedUpdates;
            return r0;
        };
        r3 = 'unstable_batchedUpdates';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get useAnimatedValue, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 65;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'useAnimatedValue';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get useColorScheme, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 66;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'useColorScheme';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get useWindowDimensions, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 67;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'useWindowDimensions';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get UTFSequence, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 68;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'UTFSequence';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get Vibration, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 69;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'Vibration';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get DeviceEventEmitter, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 70;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'DeviceEventEmitter';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get DynamicColorIOS, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 71;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.DynamicColorIOS;
            return r0;
        };
        r3 = 'DynamicColorIOS';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get NativeAppEventEmitter, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 72;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'NativeAppEventEmitter';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get NativeModules, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 73;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'NativeModules';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get Platform, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 74;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'Platform';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get PlatformColor, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 75;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.PlatformColor;
            return r0;
        };
        r3 = 'PlatformColor';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get processColor, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 76;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'processColor';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r4 = function() { // Original name: get requireNativeComponent, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 77;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.default;
            return r0;
        };
        r3 = 'requireNativeComponent';
        Object.defineProperty(r2, r3, {get: r4, set: r0, enumerable: true});
        r3 = function() { // Original name: get RootTagContext, environment: r1
            r2 = _closure1_slot0;
            r1 = _closure1_slot1;
            r0 = 78;
            r1 = r1[r0];
            r0 = undefined;
            r0 = r2.bind(r0)(r1);
            r0 = r0.RootTagContext;
            return r0;
        };
        r1 = 'RootTagContext';
        Object.defineProperty(r2, r1, {get: r3, set: r0, enumerable: true});
        r1 = a4;
        r1['exports'] = r2;
        return r0;
    };
    r5 = 2;
    r4 = [3, 21, 275, 284, 403, 344, 362, 411, 412, 419, 421, 422, 431, 141, 276, 373, 413, 378, 400, 404, 433, 285, 438, 442, 446, 297, 298, 447, 248, 448, 449, 450, 221, 299, 453, 233, 456, 258, 460, 463, 464, 466, 113, 322, 57, 428, 318, 384, 385, 469, 474, 223, 191, 190, 475, 477, 112, 480, 483, 484, 253, 17, 487, 36, 44, 490, 491, 416, 492, 493, 22, 496, 228, 37, 33, 92, 89, 280, 255];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r2 = a5;
        r0 = a0;
        var _closure1_slot0 = r0;
        r0 = a1;
        var _closure1_slot1 = r0;
        r0 = a6;
        var _closure1_slot2 = r0;
        r0 = global;
        r5 = r0.Object;
        r4 = r5.defineProperty;
        r3 = {};
        r0 = true;
        r3['value'] = r0;
        r0 = '__esModule';
        r0 = r4.bind(r5)(r2, r0, r3);
        r0 = undefined;
        r2['default'] = r0;
        r1 = function() { // Environment: r1
            _fun166: for(var _fun166_ip = 0; ; ) switch(_fun166_ip) {
case 0:
                r2 = _closure1_slot0;
                r3 = r2.RN$Bridgeless;
                r2 = true;
                if(!(r3 !== r2)) { _fun166_ip = 58; continue _fun166 }
case 21:
                r3 = _closure1_slot1;
                r2 = _closure1_slot2;
                r1 = 0;
                r2 = r2[r1];
                r1 = undefined;
                r1 = r3.bind(r1)(r2);
                r1 = r1.default;
                var _closure2_slot0 = r1;
                r1 = function(a0, a1) { // Environment: r0
                    _fun169: for(var _fun169_ip = 0; ; ) switch(_fun169_ip) {
case 0:
                        r3 = a0;
                        r2 = a1;
                        r1 = typeof r2;
                        r0 = 'function';
                        if(!(r1 !== r0)) { _fun169_ip = 40; continue _fun169 }
case 17:
                        r1 = _closure2_slot0;
                        r0 = r1.registerCallableModule;
                        r0 = r0.bind(r1)(r3, r2);
                        r0 = undefined;
                        return r0;
case 40:
                        r1 = _closure2_slot0;
                        r0 = r1.registerLazyCallableModule;
                        r0 = r0.bind(r1)(r3, r2);
                        r0 = undefined;
                        return r0;
                    }
                };
                return r1;
case 58:
                r0 = function(a0, a1) { // Environment: r0
                    _fun167: for(var _fun167_ip = 0; ; ) switch(_fun167_ip) {
case 0:
                        r3 = a0;
                        r2 = a1;
                        var _closure3_slot0 = r2;
                        r4 = typeof r2;
                        r1 = 'function';
                        if(!(r4 !== r1)) { _fun167_ip = 51; continue _fun167 }
case 23:
                        r4 = _closure1_slot0;
                        r1 = r4.RN$registerCallableModule;
                        r0 = function() { // Environment: r0
                            r0 = _closure3_slot0;
                            return r0;
                        };
                        r0 = r1.bind(r4)(r3, r0);
                        r0 = undefined;
                        return r0;
case 51:
                        r1 = _closure1_slot0;
                        r0 = r1.RN$registerCallableModule;
                        r0 = r0.bind(r1)(r3, r2);
                        r0 = undefined;
                        return r0;
                    }
                };
                return r0;
            }
        };
        r1 = r1.bind(r0)();
        r2['default'] = r1;
        return r0;
    };
    r5 = 3;
    r4 = [4];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r2 = a5;
        r4 = global;
        r6 = r4.Object;
        r5 = r6.defineProperty;
        r1 = {};
        r3 = true;
        r1['value'] = r3;
        r0 = '__esModule';
        r0 = r5.bind(r6)(r2, r0, r1);
        r0 = undefined;
        r2['default'] = r0;
        r5 = a6;
        r1 = 0;
        r5 = r5[r1];
        r1 = a1;
        r1 = r1.bind(r0)(r5);
        r1 = r1.default;
        r5 = r1.prototype;
        r5 = Object.create(r5, {constructor: {value: r1}});
        r11 = r5;
        r1 = new r11[r1](r10);
        r1 = r1 instanceof Object ? r1 : r5;
        r7 = r4.Object;
        r6 = r7.defineProperty;
        r5 = {};
        r5['configurable'] = r3;
        r5['value'] = r1;
        r4 = a0;
        r3 = '__fbBatchedBridge';
        r3 = r6.bind(r7)(r4, r3, r5);
        r2['default'] = r1;
        return r0;
    };
    r5 = 4;
    r4 = [5];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r5 = a1;
        r2 = a5;
        r6 = a6;
        r0 = a0;
        var _closure1_slot0 = r0;
        var _closure1_slot1 = r5;
        var _closure1_slot2 = r6;
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
        var _closure1_slot3 = r3;
        r3 = 2;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot4 = r3;
        r3 = 3;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot5 = r3;
        r1 = function() { // Environment: r1
            r4 = function() { // Original name: MessageQueue, environment: r1
                r2 = this;
                r0 = _closure1_slot4;
                r3 = r0.default;
                r1 = _closure2_slot0;
                r0 = undefined;
                r1 = r3.bind(r0)(r2, r1);
                r1 = {};
                r2['_lazyCallableModules'] = r1;
                r1 = new Array(4);
                r3 = new Array(0);
                r1[0] = r3;
                r3 = new Array(0);
                r1[1] = r3;
                r3 = new Array(0);
                r1[2] = r3;
                r3 = 0;
                r1[3] = r3;
                r2['_queue'] = r1;
                r1 = global;
                r4 = r1.Map;
                r5 = r4.prototype;
                r5 = Object.create(r5, {constructor: {value: r4}});
                r8 = r5;
                r4 = new r8[r4](r7);
                r4 = r4 instanceof Object ? r4 : r5;
                r2['_successCallbacks'] = r4;
                r4 = r1.Map;
                r5 = r4.prototype;
                r5 = Object.create(r5, {constructor: {value: r4}});
                r8 = r5;
                r4 = new r8[r4](r7);
                r4 = r4 instanceof Object ? r4 : r5;
                r2['_failureCallbacks'] = r4;
                r2['_callID'] = r3;
                r2['_lastFlush'] = r3;
                r3 = r1.Date;
                r1 = r3.now;
                r1 = r1.bind(r3)();
                r2['_eventLoopStartTime'] = r1;
                r1 = null;
                r2['_reactNativeMicrotasksCallback'] = r1;
                r3 = r2.callFunctionReturnFlushedQueue;
                r1 = r3.bind;
                r1 = r1.bind(r3)(r2);
                r2['callFunctionReturnFlushedQueue'] = r1;
                r3 = r2.flushedQueue;
                r1 = r3.bind;
                r1 = r1.bind(r3)(r2);
                r2['flushedQueue'] = r1;
                r3 = r2.invokeCallbackAndReturnFlushedQueue;
                r1 = r3.bind;
                r1 = r1.bind(r3)(r2);
                r2['invokeCallbackAndReturnFlushedQueue'] = r1;
                return r0;
            };
            var _closure2_slot0 = r4;
            r0 = _closure1_slot5;
            r3 = r0.default;
            r0 = {};
            r2 = 'callFunctionReturnFlushedQueue';
            r0['key'] = r2;
            r2 = function(a0, a1, a2) { // Original name: callFunctionReturnFlushedQueue, environment: r1
                r1 = this;
                r2 = a0;
                var _closure3_slot0 = r2;
                r2 = a1;
                var _closure3_slot1 = r2;
                r2 = a2;
                var _closure3_slot2 = r2;
                var _closure3_slot3 = r1;
                r2 = r1.__guard;
                r0 = function() { // Environment: r0
                    r4 = _closure3_slot3;
                    r3 = r4.__callFunction;
                    r2 = _closure3_slot0;
                    r1 = _closure3_slot1;
                    r0 = _closure3_slot2;
                    r0 = r3.bind(r4)(r2, r1, r0);
                    r0 = undefined;
                    return r0;
                };
                r0 = r2.bind(r1)(r0);
                r0 = r1.flushedQueue;
                r0 = r0.bind(r1)();
                return r0;
            };
            r0['value'] = r2;
            r2 = new Array(17);
            r2[0] = r0;
            r0 = {};
            r5 = 'invokeCallbackAndReturnFlushedQueue';
            r0['key'] = r5;
            r5 = function(a0, a1) { // Original name: invokeCallbackAndReturnFlushedQueue, environment: r1
                r1 = this;
                r2 = a0;
                var _closure3_slot0 = r2;
                r2 = a1;
                var _closure3_slot1 = r2;
                var _closure3_slot2 = r1;
                r2 = r1.__guard;
                r0 = function() { // Environment: r0
                    r3 = _closure3_slot2;
                    r2 = r3.__invokeCallback;
                    r1 = _closure3_slot0;
                    r0 = _closure3_slot1;
                    r0 = r2.bind(r3)(r1, r0);
                    r0 = undefined;
                    return r0;
                };
                r0 = r2.bind(r1)(r0);
                r0 = r1.flushedQueue;
                r0 = r0.bind(r1)();
                return r0;
            };
            r0['value'] = r5;
            r2[1] = r0;
            r0 = {};
            r5 = 'flushedQueue';
            r0['key'] = r5;
            r5 = function() { // Original name: flushedQueue, environment: r1
                _fun178: for(var _fun178_ip = 0; ; ) switch(_fun178_ip) {
case 0:
                    r2 = this;
                    var _closure3_slot0 = r2;
                    r1 = r2.__guard;
                    r0 = function() { // Environment: r0
                        r1 = _closure3_slot0;
                        r0 = r1.__callReactNativeMicrotasks;
                        r0 = r0.bind(r1)();
                        r0 = undefined;
                        return r0;
                    };
                    r0 = r1.bind(r2)(r0);
                    r1 = r2._queue;
                    r0 = new Array(4);
                    r3 = new Array(0);
                    r0[0] = r3;
                    r3 = new Array(0);
                    r0[1] = r3;
                    r3 = new Array(0);
                    r0[2] = r3;
                    r3 = r2._callID;
                    r0[3] = r3;
                    r2['_queue'] = r0;
                    r0 = 0;
                    r0 = r1[r0];
                    r2 = r0.length;
                    r0 = null;
                    if(!r2) { _fun178_ip = 94; continue _fun178 }
case 91:
                    r0 = r1;
case 94:
                    return r0;
                }
            };
            r0['value'] = r5;
            r2[2] = r0;
            r0 = {};
            r5 = 'getEventLoopRunningTime';
            r0['key'] = r5;
            r5 = function() { // Original name: getEventLoopRunningTime, environment: r1
                r0 = global;
                r1 = r0.Date;
                r0 = r1.now;
                r1 = r0.bind(r1)();
                r0 = this;
                r0 = r0._eventLoopStartTime;
                r0 = r1 - r0;
                return r0;
            };
            r0['value'] = r5;
            r2[3] = r0;
            r0 = {};
            r5 = 'registerCallableModule';
            r0['key'] = r5;
            r5 = function(a0, a1) { // Original name: registerCallableModule, environment: r1
                r1 = a1;
                var _closure3_slot0 = r1;
                r1 = this;
                r2 = r1._lazyCallableModules;
                r1 = function() { // Environment: r0
                    r0 = _closure3_slot0;
                    return r0;
                };
                r0 = a0;
                r2[r0] = r1;
                r0 = undefined;
                return r0;
            };
            r0['value'] = r5;
            r2[4] = r0;
            r0 = {};
            r5 = 'registerLazyCallableModule';
            r0['key'] = r5;
            r5 = function(a0, a1) { // Original name: registerLazyCallableModule, environment: r1
                r1 = a1;
                var _closure3_slot1 = r1;
                r1 = this;
                r2 = r1._lazyCallableModules;
                r1 = function() { // Environment: r0
                    _fun184: for(var _fun184_ip = 0; ; ) switch(_fun184_ip) {
case 0:
                        r1 = _closure3_slot1;
                        if(!r1) { _fun184_ip = 30; continue _fun184 }
case 10:
                        r2 = _closure3_slot1;
                        r1 = undefined;
                        r1 = r2.bind(r1)();
                        var _closure3_slot0 = r1;
                        r1 = null;
                        _closure3_slot1 = r1;
case 30:
                        r0 = _closure3_slot0;
                        return r0;
                    }
                };
                r0 = a0;
                r2[r0] = r1;
                r0 = undefined;
                return r0;
            };
            r0['value'] = r5;
            r2[5] = r0;
            r0 = {};
            r5 = 'getCallableModule';
            r0['key'] = r5;
            r5 = function(a0) { // Original name: getCallableModule, environment: r1
                _fun185: for(var _fun185_ip = 0; ; ) switch(_fun185_ip) {
case 0:
                    r0 = this;
                    r1 = r0._lazyCallableModules;
                    r0 = a0;
                    r2 = r1[r0];
                    r0 = null;
                    if(!r2) { _fun185_ip = 27; continue _fun185 }
case 21:
                    r1 = undefined;
                    r0 = r2.bind(r1)();
case 27:
                    return r0;
                }
            };
            r0['value'] = r5;
            r2[6] = r0;
            r0 = {};
            r5 = 'callNativeSyncHook';
            r0['key'] = r5;
            r5 = function(a0, a1, a2, a3, a4) { // Original name: callNativeSyncHook, environment: r1
                r4 = a0;
                r3 = a1;
                r2 = a2;
                r6 = this;
                r5 = r6.processCallbacks;
                r8 = a3;
                r7 = a4;
                r12 = r6;
                r11 = r4;
                r10 = r3;
                r9 = r2;
                r0 = r12[r5](r11, r10, r9, r8, r7, r6);
                r1 = _closure1_slot0;
                r0 = r1.nativeCallSyncHook;
                r0 = r0.bind(r1)(r4, r3, r2);
                return r0;
            };
            r0['value'] = r5;
            r2[7] = r0;
            r0 = {};
            r5 = 'processCallbacks';
            r0['key'] = r5;
            r5 = function(a0, a1, a2, a3, a4) { // Original name: processCallbacks, environment: r1
                _fun187: for(var _fun187_ip = 0; ; ) switch(_fun187_ip) {
case 0:
                    r3 = a2;
                    r4 = a3;
                    r5 = a4;
                    r1 = this;
                    if(r4) { _fun187_ip = 18; continue _fun187 }
case 15:
                    if(!r5) { _fun187_ip = 120; continue _fun187 }
case 18:
                    if(!r4) { _fun187_ip = 44; continue _fun187 }
case 21:
                    r2 = r3.push;
                    r6 = r1._callID;
                    r0 = 1;
                    r0 = r6 << r0;
                    r0 = r2.bind(r3)(r0);
case 44:
                    if(!r5) { _fun187_ip = 74; continue _fun187 }
case 47:
                    r2 = r3.push;
                    r0 = r1._callID;
                    r6 = 1;
                    r0 = r0 << r6;
                    r0 = r0 | r6;
                    r0 = r2.bind(r3)(r0);
case 74:
                    r3 = r1._successCallbacks;
                    r2 = r3.set;
                    r0 = r1._callID;
                    r0 = r2.bind(r3)(r0, r5);
                    r3 = r1._failureCallbacks;
                    r2 = r3.set;
                    r0 = r1._callID;
                    r0 = r2.bind(r3)(r0, r4);
case 120:
                    r0 = r1._callID;
                    r0 = r0 + 1;
                    r1['_callID'] = r0;
                    r0 = undefined;
                    return r0;
                }
            };
            r0['value'] = r5;
            r2[8] = r0;
            r0 = {};
            r5 = 'enqueueNativeCall';
            r0['key'] = r5;
            r5 = function(a0, a1, a2, a3, a4) { // Original name: enqueueNativeCall, environment: r1
                _fun188: for(var _fun188_ip = 0; ; ) switch(_fun188_ip) {
case 0:
                    r6 = a0;
                    r5 = a1;
                    r4 = a2;
                    r3 = this;
                    r2 = r3.processCallbacks;
                    r12 = a3;
                    r11 = a4;
                    r16 = r3;
                    r15 = r6;
                    r14 = r5;
                    r13 = r4;
                    r0 = r16[r2](r15, r14, r13, r12, r11, r10);
                    r0 = r3._queue;
                    r2 = 0;
                    r1 = r0[r2];
                    r0 = r1.push;
                    r0 = r0.bind(r1)(r6);
                    r0 = r3._queue;
                    r7 = 1;
                    r1 = r0[r7];
                    r0 = r1.push;
                    r0 = r0.bind(r1)(r5);
                    r1 = r3._queue;
                    r0 = 2;
                    r1 = r1[r0];
                    r0 = r1.push;
                    r0 = r0.bind(r1)(r4);
                    r0 = global;
                    r1 = r0.Date;
                    r0 = r1.now;
                    r1 = r0.bind(r1)();
                    r8 = _closure1_slot0;
                    r8 = r8.nativeFlushQueueImmediate;
                    if(!r8) { _fun188_ip = 229; continue _fun188 }
case 141:
                    r8 = r3._lastFlush;
                    r9 = r1 - r8;
                    r8 = 5;
                    if(!(r9 >= r8)) { _fun188_ip = 229; continue _fun188 }
case 158:
                    r9 = r3._queue;
                    r8 = new Array(4);
                    r10 = new Array(0);
                    r8[0] = r10;
                    r10 = new Array(0);
                    r8[1] = r10;
                    r10 = new Array(0);
                    r8[2] = r10;
                    r10 = r3._callID;
                    r8[3] = r10;
                    r3['_queue'] = r8;
                    r3['_lastFlush'] = r1;
                    r8 = _closure1_slot0;
                    r1 = r8.nativeFlushQueueImmediate;
                    r1 = r1.bind(r8)(r9);
case 229:
                    r8 = _closure1_slot1;
                    r1 = _closure1_slot2;
                    r0 = 4;
                    r1 = r1[r0];
                    r0 = undefined;
                    r9 = r8.bind(r0)(r1);
                    r8 = r9.counterEvent;
                    r1 = r3._queue;
                    r1 = r1[r2];
                    r2 = r1.length;
                    r1 = 'pending_js_to_native_queue';
                    r1 = r8.bind(r9)(r1, r2);
                    r1 = r3.__spy;
                    if(!r1) { _fun188_ip = 325; continue _fun188 }
case 291:
                    r2 = r3.__spy;
                    r1 = {};
                    r1['type'] = r7;
                    r6 = '' + r6;
                    r1['module'] = r6;
                    r1['method'] = r5;
                    r1['args'] = r4;
                    r1 = r2.bind(r3)(r1);
case 325:
                    return r0;
                }
            };
            r0['value'] = r5;
            r2[9] = r0;
            r0 = {};
            r5 = 'createDebugLookup';
            r0['key'] = r5;
            r5 = function(a0, a1, a2) { // Original name: createDebugLookup, environment: r1
                r0 = undefined;
                return r0;
            };
            r0['value'] = r5;
            r2[10] = r0;
            r0 = {};
            r5 = 'setReactNativeMicrotasksCallback';
            r0['key'] = r5;
            r5 = function(a0) { // Original name: setReactNativeMicrotasksCallback, environment: r1
                r1 = a0;
                r0 = this;
                r0['_reactNativeMicrotasksCallback'] = r1;
                r0 = undefined;
                return r0;
            };
            r0['value'] = r5;
            r2[11] = r0;
            r0 = {};
            r5 = '__guard';
            r0['key'] = r5;
            r5 = function(a0) { // Original name: __guard, environment: r1
                _fun191: for(var _fun191_ip = 0; ; ) switch(_fun191_ip) {
case 0:
                    r2 = this;
                    r0 = a0;
                    r1 = r2.__shouldPauseOnThrow;
                    r1 = r1.bind(r2)();
                    if(r1) { _fun191_ip = 75; continue _fun191 }
case 19: // try_start_0
                    r2 = r0;
                    r1 = undefined;
                    r1 = r2.bind(r1)();
case 28: // try_end0
                    _fun191_ip = 84; continue _fun191;
case 30: // catch_target0
                    CatchBlockStart(arg_register=3);
                    r4 = _closure1_slot1;
                    r2 = _closure1_slot2;
                    r1 = 5;
                    r2 = r2[r1];
                    r1 = undefined;
                    r1 = r4.bind(r1)(r2);
                    r2 = r1.default;
                    r1 = r2.reportFatalError;
                    r1 = r1.bind(r2)(r3);
                    _fun191_ip = 84; continue _fun191;
case 75:
                    r1 = r0;
                    r0 = undefined;
                    r0 = r1.bind(r0)();
case 84:
                    r0 = undefined;
                    return r0;
                }
            };
            r0['value'] = r5;
            r2[12] = r0;
            r0 = {};
            r5 = '__shouldPauseOnThrow';
            r0['key'] = r5;
            r5 = function() { // Original name: __shouldPauseOnThrow, environment: r1
                _fun192: for(var _fun192_ip = 0; ; ) switch(_fun192_ip) {
case 0:
                    r1 = global;
                    r0 = r1.DebuggerInternal;
                    r2 = typeof r0;
                    r0 = 'undefined';
                    r0 = r2 !== r0;
                    if(!r0) { _fun192_ip = 40; continue _fun192 }
case 22:
                    r1 = r1.DebuggerInternal;
                    r2 = r1.shouldPauseOnThrow;
                    r1 = true;
                    r0 = r2 === r1;
case 40:
                    return r0;
                }
            };
            r0['value'] = r5;
            r2[13] = r0;
            r0 = {};
            r5 = '__callReactNativeMicrotasks';
            r0['key'] = r5;
            r5 = function() { // Original name: __callReactNativeMicrotasks, environment: r1
                _fun193: for(var _fun193_ip = 0; ; ) switch(_fun193_ip) {
case 0:
                    r2 = this;
                    r5 = _closure1_slot1;
                    r0 = _closure1_slot2;
                    r4 = 4;
                    r0 = r0[r4];
                    r3 = undefined;
                    r6 = r5.bind(r3)(r0);
                    r5 = r6.beginEvent;
                    r0 = 'JSTimers.callReactNativeMicrotasks()';
                    r0 = r5.bind(r6)(r0);
case 43: // try_start_0
                    r5 = r2._reactNativeMicrotasksCallback;
                    r0 = null;
                    if(!(r5 != r0)) { _fun193_ip = 65; continue _fun193 }
case 55:
                    r0 = r2._reactNativeMicrotasksCallback;
                    r0 = r0.bind(r2)();
case 65: // try_end0
                    r2 = _closure1_slot1;
                    r0 = _closure1_slot2;
                    r0 = r0[r4];
                    r2 = r2.bind(r3)(r0);
                    r0 = r2.endEvent;
                    r0 = r0.bind(r2)();
                    return r3;
case 94: // catch_target0
                    CatchBlockStart(arg_register=0);
                    r2 = _closure1_slot1;
                    r1 = _closure1_slot2;
                    r1 = r1[r4];
                    r2 = r2.bind(r3)(r1);
                    r1 = r2.endEvent;
                    r1 = r1.bind(r2)();
                    throw r0;
                }
            };
            r0['value'] = r5;
            r2[14] = r0;
            r0 = {};
            r5 = '__callFunction';
            r0['key'] = r5;
            r5 = function(a0, a1, a2) { // Original name: __callFunction, environment: r1
                _fun194: for(var _fun194_ip = 0; ; ) switch(_fun194_ip) {
case 0:
                    r10 = this;
                    r7 = a0;
                    r2 = a1;
                    r0 = a2;
                    r3 = undefined;
                    r5 = undefined;
                    r9 = undefined;
                    r8 = undefined;
                    r6 = global;
                    r4 = r6.Date;
                    r1 = r4.now;
                    r1 = r1.bind(r4)();
                    r10['_lastFlush'] = r1;
                    r1 = r10._lastFlush;
                    r10['_eventLoopStartTime'] = r1;
                    r11 = r10.__spy;
                    r14 = _closure1_slot1;
                    r15 = _closure1_slot2;
                    r4 = 4;
                    r12 = r15[r4];
                    r13 = r14.bind(r3)(r12);
                    r12 = r13.beginEvent;
                    r20 = r7;
                    r19 = r2;
                    if(r11) { _fun194_ip = 139; continue _fun194 }
case 99:
                    r11 = r6.HermesInternal;
                    r18 = r11.concat;
                    r31 = '';
                    r29 = '.';
                    r27 = '(...)';
                    r30 = r20;
                    r28 = r19;
                    r11 = r31[r18](r30, r29, r28, r27, r26);
                    r11 = r12.bind(r13)(r11);
                    _fun194_ip = 206; continue _fun194;
case 139:
                    r11 = 6;
                    r11 = r15[r11];
                    r15 = r14.bind(r3)(r11);
                    r14 = r15.default;
                    r11 = r0;
                    r26 = r14.bind(r15)(r11);
                    r11 = r6.HermesInternal;
                    r17 = r11.concat;
                    r31 = '';
                    r29 = '.';
                    r27 = '(';
                    r25 = ')';
                    r30 = r20;
                    r28 = r19;
                    r11 = r31[r17](r30, r29, r28, r27, r26, r25, r24);
                    r11 = r12.bind(r13)(r11);
case 206: // try_start_0
                    r11 = r10.__spy;
                    if(!r11) { _fun194_ip = 257; continue _fun194 }
case 215:
                    r12 = r10.__spy;
                    r11 = {};
                    r13 = 0;
                    r11['type'] = r13;
                    r13 = r7;
                    r11['module'] = r13;
                    r13 = r2;
                    r11['method'] = r13;
                    r13 = r0;
                    r11['args'] = r13;
                    r11 = r12.bind(r10)(r11);
case 257:
                    r12 = r10.getCallableModule;
                    r11 = r7;
                    r11 = r12.bind(r10)(r11);
                    r5 = r11;
                    if(r11) { _fun194_ip = 427; continue _fun194 }
case 280:
                    r12 = r6.Object;
                    r11 = r12.keys;
                    r10 = r10._lazyCallableModules;
                    r12 = r11.bind(r12)(r10);
                    r9 = r12.length;
                    r11 = r12.join;
                    r10 = ', ';
                    r8 = r11.bind(r12)(r10);
                    r10 = _closure1_slot0;
                    r11 = r10.RN$Bridgeless;
                    r20 = 'false';
                    r10 = true;
                    if(!(r11 === r10)) { _fun194_ip = 345; continue _fun194 }
case 341:
                    r20 = 'true';
case 345:
                    r11 = _closure1_slot1;
                    r12 = _closure1_slot2;
                    r10 = 7;
                    r10 = r12[r10];
                    r10 = r11.bind(r3)(r10);
                    r30 = r7;
                    r28 = r2;
                    r24 = r9;
                    r22 = r8;
                    r8 = r6.HermesInternal;
                    r15 = r8.concat;
                    r31 = 'Failed to call into JavaScript module method ';
                    r29 = '.';
                    r27 = '(). Module has not been registered as callable. Bridgeless Mode: ';
                    r25 = '. Registered callable JavaScript modules (n = ';
                    r23 = '): ';
                    r21 = '.\n          A frequent cause of the error is that the application entry file path is incorrect. This can also happen when the JS bundle is corrupt or there is an early initialization error when loading React Native.';
                    r26 = r20;
                    r9 = r31[r15](r30, r29, r28, r27, r26, r25, r24, r23, r22, r21, r20);
                    r8 = false;
                    r8 = r10.bind(r3)(r8, r9);
case 427:
                    r9 = r5;
                    r8 = r2;
                    r8 = r9[r8];
                    if(r8) { _fun194_ip = 501; continue _fun194 }
case 440:
                    r9 = _closure1_slot1;
                    r10 = _closure1_slot2;
                    r8 = 7;
                    r8 = r10[r8];
                    r8 = r9.bind(r3)(r8);
                    r30 = r7;
                    r28 = r2;
                    r6 = r6.HermesInternal;
                    r10 = r6.concat;
                    r31 = 'Failed to call into JavaScript module method ';
                    r29 = '.';
                    r27 = '(). Module exists, but the method is undefined.';
                    r7 = r31[r10](r30, r29, r28, r27, r26);
                    r6 = false;
                    r6 = r8.bind(r3)(r6, r7);
case 501:
                    r6 = r5;
                    r5 = r6[r2];
                    r2 = r5.apply;
                    r0 = r2.bind(r5)(r6, r0);
case 519: // try_end0
                    r2 = _closure1_slot1;
                    r0 = _closure1_slot2;
                    r0 = r0[r4];
                    r2 = r2.bind(r3)(r0);
                    r0 = r2.endEvent;
                    r0 = r0.bind(r2)();
                    return r3;
case 548: // catch_target0
                    CatchBlockStart(arg_register=0);
                    r2 = _closure1_slot1;
                    r1 = _closure1_slot2;
                    r1 = r1[r4];
                    r2 = r2.bind(r3)(r1);
                    r1 = r2.endEvent;
                    r1 = r1.bind(r2)();
                    throw r0;
                }
            };
            r0['value'] = r5;
            r2[15] = r0;
            r0 = {};
            r5 = '__invokeCallback';
            r0['key'] = r5;
            r5 = function(a0, a1) { // Original name: __invokeCallback, environment: r1
                _fun195: for(var _fun195_ip = 0; ; ) switch(_fun195_ip) {
case 0:
                    r6 = a0;
                    r3 = this;
                    r1 = a1;
                    r0 = undefined;
                    r5 = undefined;
                    r2 = undefined;
                    r4 = global;
                    r7 = r4.Date;
                    r4 = r7.now;
                    r4 = r4.bind(r7)();
                    r3['_lastFlush'] = r4;
                    r4 = r3._lastFlush;
                    r3['_eventLoopStartTime'] = r4;
                    r4 = 1;
                    r5 = r6 >>> r4;
                    r4 = r6 & r4;
                    if(r4) { _fun195_ip = 85; continue _fun195 }
case 64:
                    r7 = r3._failureCallbacks;
                    r6 = r7.get;
                    r4 = r5;
                    r4 = r6.bind(r7)(r4);
                    _fun195_ip = 104; continue _fun195;
case 85:
                    r8 = r3._successCallbacks;
                    r7 = r8.get;
                    r6 = r5;
                    r4 = r7.bind(r8)(r6);
case 104:
                    r2 = r4;
case 107: // try_start_0
                    r4 = r2;
                    if(r4) { _fun195_ip = 115; continue _fun195 }
case 113: // try_end0
                    return r0;
case 115: // try_start_1
                    r6 = r3._successCallbacks;
                    r4 = r6.delete;
                    r4 = r4.bind(r6)(r5);
                    r4 = r3._failureCallbacks;
                    r3 = r4.delete;
                    r3 = r3.bind(r4)(r5);
                    r3 = r2;
                    r2 = r3.apply;
                    r4 = _closure1_slot3;
                    r4 = r4.default;
                    r1 = r4.bind(r0)(r1);
                    r1 = r2.bind(r3)(r0, r1);
case 178: // try_end1
                    return r0;
case 180: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=0);
                    throw r0;
                }
            };
            r0['value'] = r5;
            r2[16] = r0;
            r0 = {};
            r5 = 'spy';
            r0['key'] = r5;
            r1 = function(a0) { // Original name: spy, environment: r1
                _fun196: for(var _fun196_ip = 0; ; ) switch(_fun196_ip) {
case 0:
                    r1 = a0;
                    r0 = true;
                    if(!(r1 !== r0)) { _fun196_ip = 57; continue _fun196 }
case 9:
                    r0 = false;
                    if(!(r1 !== r0)) { _fun196_ip = 35; continue _fun196 }
case 15:
                    r0 = _closure2_slot0;
                    r0 = r0.prototype;
                    r0['__spy'] = r1;
                    _fun196_ip = 82; continue _fun196;
case 35:
                    r0 = _closure2_slot0;
                    r1 = r0.prototype;
                    r0 = null;
                    r1['__spy'] = r0;
                    _fun196_ip = 82; continue _fun196;
case 57:
                    r0 = _closure2_slot0;
                    r1 = r0.prototype;
                    r0 = function(a0) { // Environment: r0
                        _fun197: for(var _fun197_ip = 0; ; ) switch(_fun197_ip) {
case 0:
                            r4 = a0;
                            r0 = global;
                            r2 = r0.console;
                            r1 = r2.log;
                            r5 = r4.type;
                            r6 = 'JS->N';
                            r3 = 0;
                            if(!(r5 === r3)) { _fun197_ip = 35; continue _fun197 }
case 31:
                            r6 = 'N->JS';
case 35:
                            r3 = r0.HermesInternal;
                            r5 = r3.concat;
                            r8 = '';
                            r3 = ' : ';
                            r5 = r5.bind(r8)(r6, r3);
                            r6 = r4.module;
                            r3 = null;
                            r3 = r6 != r3;
                            r7 = r8;
                            if(!r3) { _fun197_ip = 92; continue _fun197 }
case 78:
                            r6 = r4.module;
                            r3 = '.';
                            r7 = r6 + r3;
case 92:
                            r6 = r4.method;
                            r3 = r0.HermesInternal;
                            r3 = r3.concat;
                            r3 = r3.bind(r8)(r7, r6);
                            r3 = r5 + r3;
                            r6 = r0.JSON;
                            r5 = r6.stringify;
                            r4 = r4.args;
                            r6 = r5.bind(r6)(r4);
                            r0 = r0.HermesInternal;
                            r5 = r0.concat;
                            r4 = '(';
                            r0 = ')';
                            r0 = r5.bind(r4)(r6, r0);
                            r0 = r3 + r0;
                            r0 = r1.bind(r2)(r0);
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r1['__spy'] = r0;
case 82:
                    r0 = undefined;
                    return r0;
                }
            };
            r0['value'] = r1;
            r1 = new Array(1);
            r1[0] = r0;
            r0 = undefined;
            r0 = r3.bind(r0)(r4, r2, r1);
            return r0;
        };
        r1 = r1.bind(r0)();
        r2['default'] = r1;
        return r0;
    };
    r5 = 5;
    r4 = [1, 6, 12, 13, 17, 18, 19, 20];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r0 = a4;
        r2 = a1;
        var _closure1_slot0 = r2;
        r2 = a6;
        var _closure1_slot1 = r2;
        r1 = function(a0) { // Original name: _toConsumableArray, environment: r1
            _fun199: for(var _fun199_ip = 0; ; ) switch(_fun199_ip) {
case 0:
                r4 = a0;
                r3 = _closure1_slot0;
                r2 = _closure1_slot1;
                r0 = 0;
                r0 = r2[r0];
                r2 = undefined;
                r0 = r3.bind(r2)(r0);
                r0 = r0.bind(r2)(r4);
                if(r0) { _fun199_ip = 60; continue _fun199 }
case 35:
                r5 = _closure1_slot0;
                r6 = _closure1_slot1;
                r3 = 1;
                r3 = r6[r3];
                r3 = r5.bind(r2)(r3);
                r0 = r3.bind(r2)(r4);
case 60:
                if(r0) { _fun199_ip = 88; continue _fun199 }
case 63:
                r5 = _closure1_slot0;
                r6 = _closure1_slot1;
                r3 = 2;
                r3 = r6[r3];
                r3 = r5.bind(r2)(r3);
                r0 = r3.bind(r2)(r4);
case 88:
                if(r0) { _fun199_ip = 115; continue _fun199 }
case 91:
                r3 = _closure1_slot0;
                r4 = _closure1_slot1;
                r1 = 3;
                r1 = r4[r1];
                r1 = r3.bind(r2)(r1);
                r0 = r1.bind(r2)();
case 115:
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
    r5 = 6;
    r4 = [7, 9, 10, 11];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r0 = a4;
        r2 = a1;
        var _closure1_slot0 = r2;
        r2 = a6;
        var _closure1_slot1 = r2;
        r1 = function(a0) { // Original name: _arrayWithoutHoles, environment: r1
            _fun201: for(var _fun201_ip = 0; ; ) switch(_fun201_ip) {
case 0:
                r2 = a0;
                r0 = global;
                r1 = r0.Array;
                r0 = r1.isArray;
                r0 = r0.bind(r1)(r2);
                if(r0) { _fun201_ip = 28; continue _fun201 }
case 24:
                r0 = undefined;
                return r0;
case 28:
                r3 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 0;
                r0 = r1[r0];
                r1 = undefined;
                r0 = r3.bind(r1)(r0);
                r0 = r0.bind(r1)(r2);
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
    r5 = 7;
    r4 = [8];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r0 = a4;
        r1 = function(a0, a1) { // Original name: _arrayLikeToArray, environment: r1
            _fun203: for(var _fun203_ip = 0; ; ) switch(_fun203_ip) {
case 0:
                r3 = a0;
                r1 = a1;
                r0 = null;
                r0 = r0 == r1;
                if(r0) { _fun203_ip = 24; continue _fun203 }
case 15:
                r2 = r3.length;
                r0 = r1 > r2;
case 24:
                if(!r0) { _fun203_ip = 32; continue _fun203 }
case 27:
                r1 = r3.length;
case 32:
                r0 = global;
                r2 = r0.Array;
                r0 = undefined;
                r0 = r2.bind(r0)(r1);
                r2 = 0;
                r4 = r2 < r1;
                if(!r4) { _fun203_ip = 71; continue _fun203 }
case 56:
                r4 = r3[r2];
                r0[r2] = r4;
                r2 = r2 + 1;
                if(r2 < r1) { _fun203_ip = 56; continue _fun203 }
case 71:
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
    r5 = 8;
    r4 = new Array(0);
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r0 = a4;
        r1 = function(a0) { // Original name: _iterableToArray, environment: r1
            _fun205: for(var _fun205_ip = 0; ; ) switch(_fun205_ip) {
case 0:
                r2 = a0;
                r0 = global;
                r1 = r0.Symbol;
                r3 = 'undefined';
                r1 = typeof r1;
                if(!(r3 !== r1)) { _fun205_ip = 42; continue _fun205 }
case 21:
                r1 = r0.Symbol;
                r1 = r1.iterator;
                r3 = r2[r1];
                r1 = null;
                if(!(r1 == r3)) { _fun205_ip = 58; continue _fun205 }
case 42:
                r3 = r2["@@iterator"];
                r1 = null;
                if(!(r1 == r3)) { _fun205_ip = 58; continue _fun205 }
case 54:
                r1 = undefined;
                return r1;
case 58:
                r1 = r0.Array;
                r0 = r1.from;
                r0 = r0.bind(r1)(r2);
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
    r5 = 9;
    r4 = new Array(0);
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r0 = a4;
        r2 = a1;
        var _closure1_slot0 = r2;
        r2 = a6;
        var _closure1_slot1 = r2;
        r1 = function(a0, a1) { // Original name: _unsupportedIterableToArray, environment: r1
            _fun207: for(var _fun207_ip = 0; ; ) switch(_fun207_ip) {
case 0:
                r3 = a0;
                r2 = a1;
                if(r3) { _fun207_ip = 13; continue _fun207 }
case 9:
                r0 = undefined;
                return r0;
case 13:
                r1 = 'string';
                r0 = typeof r3;
                if(!(r1 !== r0)) { _fun207_ip = 202; continue _fun207 }
case 27:
                r0 = {};
                r1 = r0.toString;
                r0 = r1.call;
                r5 = r0.bind(r1)(r3);
                r4 = r5.slice;
                r1 = 8;
                r0 = -1;
                r1 = r4.bind(r5)(r1, r0);
                r0 = 'Object';
                r0 = r0 === r1;
                if(!r0) { _fun207_ip = 80; continue _fun207 }
case 75:
                r0 = r3.constructor;
case 80:
                r4 = r1;
                if(!r0) { _fun207_ip = 96; continue _fun207 }
case 86:
                r0 = r3.constructor;
                r4 = r0.name;
case 96:
                r0 = 'Map';
                if(!(r0 !== r4)) { _fun207_ip = 182; continue _fun207 }
case 104:
                r0 = 'Set';
                if(!(r0 !== r4)) { _fun207_ip = 182; continue _fun207 }
case 112:
                r0 = 'Arguments';
                if(!(r0 !== r4)) { _fun207_ip = 150; continue _fun207 }
case 120:
                r1 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                r0 = r1.test;
                r1 = r0.bind(r1)(r4);
                r0 = undefined;
                if(!r1) { _fun207_ip = 180; continue _fun207 }
case 150:
                r5 = _closure1_slot0;
                r4 = _closure1_slot1;
                r1 = 0;
                r1 = r4[r1];
                r4 = undefined;
                r1 = r5.bind(r4)(r1);
                r0 = r1.bind(r4)(r3, r2);
case 180:
                _fun207_ip = 200; continue _fun207;
case 182:
                r1 = global;
                r4 = r1.Array;
                r1 = r4.from;
                r0 = r1.bind(r4)(r3);
case 200:
                return r0;
case 202:
                r4 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 0;
                r0 = r1[r0];
                r1 = undefined;
                r0 = r4.bind(r1)(r0);
                r0 = r0.bind(r1)(r3, r2);
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
    r5 = 10;
    r4 = [8];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r0 = a4;
        r1 = function() { // Original name: _nonIterableSpread, environment: r1
            r0 = global;
            r2 = r0.TypeError;
            r0 = r2.prototype;
            r1 = Object.create(r0, {constructor: {value: r2}});
            r3 = 'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
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
    r5 = 11;
    r4 = new Array(0);
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r0 = a4;
        r1 = function(a0, a1) { // Original name: _classCallCheck, environment: r1
            _fun211: for(var _fun211_ip = 0; ; ) switch(_fun211_ip) {
case 0:
                r1 = a0;
                r0 = a1;
                r0 = r1 instanceof r0;
                if(r0) { _fun211_ip = 47; continue _fun211 }
case 13:
                r0 = global;
                r2 = r0.TypeError;
                r0 = r2.prototype;
                r1 = Object.create(r0, {constructor: {value: r2}});
                r3 = 'Cannot call a class as a function';
                r4 = r1;
                r0 = new r4[r2](r3, r2);
                r0 = r0 instanceof Object ? r0 : r1;
                throw r0;
case 47:
                r0 = undefined;
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
    r5 = 12;
    r4 = new Array(0);
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r0 = a4;
        r2 = a1;
        var _closure1_slot0 = r2;
        r2 = a6;
        var _closure1_slot1 = r2;
        r2 = function(a0, a1) { // Original name: _defineProperties, environment: r1
            _fun213: for(var _fun213_ip = 0; ; ) switch(_fun213_ip) {
case 0:
                r10 = a0;
                r9 = a1;
                r0 = r9.length;
                r8 = 0;
                r1 = r8 < r0;
                r7 = global;
                r0 = undefined;
                r5 = true;
                r4 = 'value';
                r2 = 0;
                if(!r1) { _fun213_ip = 134; continue _fun213 }
case 35:
                r14 = r9[r2];
                r11 = r14.enumerable;
                r1 = r2;
                if(r11) { _fun213_ip = 52; continue _fun213 }
case 50:
                r11 = false;
case 52:
                r14['enumerable'] = r11;
                r14['configurable'] = r5;
                r11 = r4 in r14;
                if(!r11) { _fun213_ip = 77; continue _fun213 }
case 71:
                r14['writable'] = r5;
case 77:
                r13 = r7.Object;
                r12 = r13.defineProperty;
                r15 = _closure1_slot0;
                r11 = _closure1_slot1;
                r11 = r11[r8];
                r15 = r15.bind(r0)(r11);
                r11 = r14.key;
                r11 = r15.bind(r0)(r11);
                r11 = r12.bind(r13)(r10, r11, r14);
                r2 = r1 + 1;
                r1 = r9.length;
                if(r2 < r1) { _fun213_ip = 35; continue _fun213 }
case 134:
                return r0;
            }
        };
        var _closure1_slot2 = r2;
        r1 = function(a0, a1, a2) { // Original name: _createClass, environment: r1
            _fun214: for(var _fun214_ip = 0; ; ) switch(_fun214_ip) {
case 0:
                r0 = a0;
                r5 = a1;
                r3 = a2;
                if(!r5) { _fun214_ip = 32; continue _fun214 }
case 12:
                r4 = _closure1_slot2;
                r2 = r0.prototype;
                r1 = undefined;
                r1 = r4.bind(r1)(r2, r5);
case 32:
                if(!r3) { _fun214_ip = 50; continue _fun214 }
case 35:
                r2 = _closure1_slot2;
                r1 = undefined;
                r1 = r2.bind(r1)(r0, r3);
case 50:
                r1 = global;
                r4 = r1.Object;
                r3 = r4.defineProperty;
                r2 = {};
                r1 = false;
                r2['writable'] = r1;
                r1 = 'prototype';
                r1 = r3.bind(r4)(r0, r1, r2);
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
    r5 = 13;
    r4 = [14];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r0 = a4;
        r2 = a1;
        var _closure1_slot0 = r2;
        r2 = a6;
        var _closure1_slot1 = r2;
        r1 = function(a0) { // Original name: toPropertyKey, environment: r1
            _fun216: for(var _fun216_ip = 0; ; ) switch(_fun216_ip) {
case 0:
                r3 = _closure1_slot0;
                r4 = _closure1_slot1;
                r0 = 0;
                r0 = r4[r0];
                r2 = undefined;
                r5 = r3.bind(r2)(r0);
                r1 = a0;
                r0 = 'string';
                r1 = r5.bind(r2)(r1, r0);
                r0 = 1;
                r0 = r4[r0];
                r2 = r3.bind(r2)(r0);
                r0 = r2.default;
                r3 = r0.bind(r2)(r1);
                r2 = 'symbol';
                r0 = r1;
                if(!(r2 != r3)) { _fun216_ip = 73; continue _fun216 }
case 70:
                r0 = '' + r1;
case 73:
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
    r5 = 14;
    r4 = [15, 16];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r0 = a4;
        r2 = a1;
        var _closure1_slot0 = r2;
        r2 = a6;
        var _closure1_slot1 = r2;
        r1 = function(a0, a1) { // Original name: toPrimitive, environment: r1
            _fun218: for(var _fun218_ip = 0; ; ) switch(_fun218_ip) {
case 0:
                r0 = a0;
                r8 = a1;
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r7 = 0;
                r1 = r1[r7];
                r6 = undefined;
                r2 = r2.bind(r6)(r1);
                r1 = r2.default;
                r1 = r1.bind(r2)(r0);
                r4 = 'object';
                if(!(r4 == r1)) { _fun218_ip = 191; continue _fun218 }
case 51:
                if(!r0) { _fun218_ip = 191; continue _fun218 }
case 57:
                r2 = global;
                r1 = r2.Symbol;
                r1 = r1.toPrimitive;
                r5 = r0[r1];
                if(!(r6 === r5)) { _fun218_ip = 108; continue _fun218 }
case 79:
                r1 = 'string';
                if(!(r1 !== r8)) { _fun218_ip = 95; continue _fun218 }
case 87:
                r1 = r2.Number;
                _fun218_ip = 101; continue _fun218;
case 95:
                r1 = r2.String;
case 101:
                r1 = r1.bind(r6)(r0);
                return r1;
case 108:
                r1 = r5.call;
                if(r8) { _fun218_ip = 120; continue _fun218 }
case 116:
                r8 = 'default';
case 120:
                r1 = r1.bind(r5)(r0, r8);
                r5 = _closure1_slot0;
                r3 = _closure1_slot1;
                r3 = r3[r7];
                r5 = r5.bind(r6)(r3);
                r3 = r5.default;
                r3 = r3.bind(r5)(r1);
                if(!(r4 == r3)) { _fun218_ip = 189; continue _fun218 }
case 157:
                r4 = r2.TypeError;
                r2 = r4.prototype;
                r3 = Object.create(r2, {constructor: {value: r4}});
                r11 = '@@toPrimitive must return a primitive value.';
                r12 = r3;
                r2 = new r12[r4](r11, r10);
                r2 = r2 instanceof Object ? r2 : r3;
                throw r2;
case 189:
                return r1;
case 191:
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
    r5 = 15;
    r4 = [16];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r0 = a4;
        var _closure1_slot0 = r0;
        r1 = function(a0) { // Original name: _typeof, environment: r2
            _fun220: for(var _fun220_ip = 0; ; ) switch(_fun220_ip) {
case 0:
                r2 = _closure1_slot0;
                r1 = global;
                r4 = r1.Symbol;
                r5 = 'function';
                r4 = typeof r4;
                if(!(r5 === r4)) { _fun220_ip = 49; continue _fun220 }
case 27:
                r1 = r1.Symbol;
                r1 = r1.iterator;
                r4 = 'symbol';
                r1 = typeof r1;
                if(!(r4 !== r1)) { _fun220_ip = 56; continue _fun220 }
case 49:
                r1 = function(a0) { // Environment: r3
                    _fun222: for(var _fun222_ip = 0; ; ) switch(_fun222_ip) {
case 0:
                        r1 = a0;
                        if(!r1) { _fun222_ip = 58; continue _fun222 }
case 6:
                        r0 = global;
                        r2 = r0.Symbol;
                        r3 = 'function';
                        r2 = typeof r2;
                        if(!(r3 === r2)) { _fun222_ip = 58; continue _fun222 }
case 24:
                        r3 = r1.constructor;
                        r2 = r0.Symbol;
                        if(!(r3 === r2)) { _fun222_ip = 58; continue _fun222 }
case 39:
                        r0 = r0.Symbol;
                        r2 = r0.prototype;
                        r0 = 'symbol';
                        if(!(r1 === r2)) { _fun222_ip = 61; continue _fun222 }
case 58:
                        r0 = typeof r1;
case 61:
                        return r0;
                    }
                };
                _fun220_ip = 61; continue _fun220;
case 56:
                r1 = function(a0) { // Environment: r3
                    r0 = a0;
                    r0 = typeof r0;
                    return r0;
                };
case 61:
                _closure1_slot1 = r1;
                r2['exports'] = r1;
                r1 = _closure1_slot0;
                r3 = r1.exports;
                r2 = true;
                r3['__esModule'] = r2;
                r2 = r1.exports;
                r1 = r1.exports;
                r2['default'] = r1;
                r2 = _closure1_slot1;
                r1 = undefined;
                r0 = a0;
                r0 = r2.bind(r1)(r0);
                return r0;
            }
        };
        var _closure1_slot1 = r1;
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
    r5 = 16;
    r4 = new Array(0);
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r2 = a5;
        r0 = a0;
        var _closure1_slot0 = r0;
        r0 = function() { // Original name: isEnabled, environment: r1
            _fun224: for(var _fun224_ip = 0; ; ) switch(_fun224_ip) {
case 0:
                r0 = _closure1_slot0;
                r0 = r0.nativeTraceIsTracing;
                if(r0) { _fun224_ip = 43; continue _fun224 }
case 16:
                r0 = global;
                r3 = r0.Boolean;
                r0 = _closure1_slot0;
                r2 = r0.__RCTProfileIsProfiling;
                r0 = undefined;
                r0 = r3.bind(r0)(r2);
                _fun224_ip = 62; continue _fun224;
case 43:
                r3 = _closure1_slot0;
                r2 = r3.nativeTraceIsTracing;
                r1 = _closure1_slot1;
                r0 = r2.bind(r3)(r1);
case 62:
                return r0;
            }
        };
        var _closure1_slot3 = r0;
        r3 = global;
        r6 = r3.Object;
        r5 = r6.defineProperty;
        r4 = {};
        r3 = true;
        r4['value'] = r3;
        r3 = '__esModule';
        r3 = r5.bind(r6)(r2, r3, r4);
        r3 = function(a0, a1) { // Original name: beginAsyncEvent, environment: r1
            _fun228: for(var _fun228_ip = 0; ; ) switch(_fun228_ip) {
case 0:
                r3 = a0;
                r0 = _closure1_slot2;
                r4 = _closure1_slot3;
                r2 = undefined;
                r4 = r4.bind(r2)();
                if(!r4) { _fun228_ip = 82; continue _fun228 }
case 23:
                r4 = _closure1_slot2;
                r4 = r4 + 1;
                _closure1_slot2 = r4;
                r6 = typeof r3;
                r4 = 'function';
                r5 = r3;
                if(!(r6 === r4)) { _fun228_ip = 52; continue _fun228 }
case 48:
                r5 = r3.bind(r2)();
case 52:
                r4 = _closure1_slot0;
                r3 = r4.nativeTraceBeginAsyncSection;
                r10 = _closure1_slot1;
                r7 = a1;
                r11 = r4;
                r9 = r5;
                r8 = r0;
                r1 = r11[r3](r10, r9, r8, r7, r6);
case 82:
                return r0;
            }
        };
        r2['beginAsyncEvent'] = r3;
        r3 = function(a0, a1) { // Original name: beginEvent, environment: r1
            _fun226: for(var _fun226_ip = 0; ; ) switch(_fun226_ip) {
case 0:
                r2 = a0;
                r3 = _closure1_slot3;
                r0 = undefined;
                r3 = r3.bind(r0)();
                if(!r3) { _fun226_ip = 61; continue _fun226 }
case 19:
                r4 = typeof r2;
                r3 = 'function';
                r5 = r2;
                if(!(r4 === r3)) { _fun226_ip = 37; continue _fun226 }
case 33:
                r5 = r2.bind(r0)();
case 37:
                r4 = _closure1_slot0;
                r3 = r4.nativeTraceBeginSection;
                r2 = _closure1_slot1;
                r1 = a1;
                r1 = r3.bind(r4)(r2, r5, r1);
case 61:
                return r0;
            }
        };
        r2['beginEvent'] = r3;
        r3 = function(a0, a1) { // Original name: counterEvent, environment: r1
            _fun230: for(var _fun230_ip = 0; ; ) switch(_fun230_ip) {
case 0:
                r2 = a0;
                r3 = _closure1_slot3;
                r0 = undefined;
                r3 = r3.bind(r0)();
                if(!r3) { _fun230_ip = 74; continue _fun230 }
case 19:
                r4 = typeof r2;
                r3 = 'function';
                r5 = r2;
                if(!(r4 === r3)) { _fun230_ip = 37; continue _fun230 }
case 33:
                r5 = r2.bind(r0)();
case 37:
                r2 = _closure1_slot0;
                r2 = r2.nativeTraceCounter;
                if(!r2) { _fun230_ip = 74; continue _fun230 }
case 50:
                r4 = _closure1_slot0;
                r3 = r4.nativeTraceCounter;
                r2 = _closure1_slot1;
                r1 = a1;
                r1 = r3.bind(r4)(r2, r5, r1);
case 74:
                return r0;
            }
        };
        r2['counterEvent'] = r3;
        r3 = function(a0, a1, a2) { // Original name: endAsyncEvent, environment: r1
            _fun229: for(var _fun229_ip = 0; ; ) switch(_fun229_ip) {
case 0:
                r2 = a0;
                r3 = _closure1_slot3;
                r0 = undefined;
                r3 = r3.bind(r0)();
                if(!r3) { _fun229_ip = 67; continue _fun229 }
case 19:
                r4 = typeof r2;
                r3 = 'function';
                r6 = r2;
                if(!(r4 === r3)) { _fun229_ip = 37; continue _fun229 }
case 33:
                r6 = r2.bind(r0)();
case 37:
                r5 = _closure1_slot0;
                r4 = r5.nativeTraceEndAsyncSection;
                r10 = _closure1_slot1;
                r8 = a1;
                r7 = a2;
                r11 = r5;
                r9 = r6;
                r1 = r11[r4](r10, r9, r8, r7, r6);
case 67:
                return r0;
            }
        };
        r2['endAsyncEvent'] = r3;
        r3 = function(a0) { // Original name: endEvent, environment: r1
            _fun227: for(var _fun227_ip = 0; ; ) switch(_fun227_ip) {
case 0:
                r2 = _closure1_slot3;
                r0 = undefined;
                r2 = r2.bind(r0)();
                if(!r2) { _fun227_ip = 39; continue _fun227 }
case 16:
                r4 = _closure1_slot0;
                r3 = r4.nativeTraceEndSection;
                r2 = _closure1_slot1;
                r1 = a0;
                r1 = r3.bind(r4)(r2, r1);
case 39:
                return r0;
            }
        };
        r2['endEvent'] = r3;
        r2['isEnabled'] = r0;
        r0 = function(a0) { // Original name: setEnabled, environment: r1
            r0 = undefined;
            return r0;
        };
        r2['setEnabled'] = r0;
        r0 = 131072;
        var _closure1_slot1 = r0;
        r0 = 0;
        var _closure1_slot2 = r0;
        r0 = undefined;
        return r0;
    };
    r5 = 17;
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
        r1 = a0;
        r1 = r1.ErrorUtils;
        r2['default'] = r1;
        return r0;
    };
    r5 = 18;
    r4 = new Array(0);
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r6 = a1;
        r2 = a5;
        r7 = a6;
        r3 = function(a0) { // Original name: createStringifySafeWithLimits, environment: r4
            _fun233: for(var _fun233_ip = 0; ; ) switch(_fun233_ip) {
case 0:
                r1 = a0;
                r2 = function(a0, a1) { // Original name: replacer, environment: r0
                    _fun234: for(var _fun234_ip = 0; ; ) switch(_fun234_ip) {
case 0:
                        r5 = this;
                        r2 = a1;
                        r7 = undefined;
                        r1 = undefined;
                        r3 = _closure2_slot4;
                        r3 = r3.length;
                        if(!r3) { _fun234_ip = 76; continue _fun234 }
case 24:
                        r3 = _closure2_slot4;
                        r4 = 0;
                        r3 = r3[r4];
                        if(!(r5 !== r3)) { _fun234_ip = 76; continue _fun234 }
case 38:
                        r6 = _closure2_slot4;
                        r3 = r6.shift;
                        r3 = r3.bind(r6)();
                        r3 = _closure2_slot4;
                        r3 = r3.length;
                        if(!r3) { _fun234_ip = 76; continue _fun234 }
case 64:
                        r3 = _closure2_slot4;
                        r3 = r3[r4];
                        if(r5 !== r3) { _fun234_ip = 38; continue _fun234 }
case 76:
                        r3 = r2;
                        r4 = typeof r3;
                        r3 = 'string';
                        if(!(r4 !== r3)) { _fun234_ip = 520; continue _fun234 }
case 93:
                        r3 = r2;
                        r3 = typeof r3;
                        r5 = 'object';
                        if(!(r3 === r5)) { _fun234_ip = 515; continue _fun234 }
case 110:
                        r4 = r2;
                        r3 = null;
                        if(!(r4 !== r3)) { _fun234_ip = 515; continue _fun234 }
case 122:
                        r8 = r2;
                        r1 = r8;
                        r3 = global;
                        r6 = r3.Array;
                        r4 = r6.isArray;
                        r4 = r4.bind(r6)(r8);
                        if(r4) { _fun234_ip = 354; continue _fun234 }
case 152:
                        r4 = _closure1_slot0;
                        r8 = r4.default;
                        r6 = r2;
                        r4 = typeof r6;
                        r5 = r4 === r5;
                        r4 = 'This was already found earlier';
                        r4 = r8.bind(r7)(r5, r4);
                        r5 = r3.Object;
                        r4 = r5.keys;
                        r4 = r4.bind(r5)(r6);
                        r5 = _closure2_slot4;
                        r6 = r5.length;
                        r5 = _closure2_slot0;
                        if(!(!(r6 >= r5))) { _fun234_ip = 319; continue _fun234 }
case 217:
                        r6 = r4.length;
                        r5 = _closure2_slot3;
                        if(!(r6 > r5)) { _fun234_ip = 498; continue _fun234 }
case 233:
                        r1 = {};
                        r8 = r4.slice;
                        r6 = _closure2_slot3;
                        r5 = 0;
                        r8 = r8.bind(r4)(r5, r6);
                        r5 = r8;
                        r6 = r5[Symbol.iterator];
                        r5 = r6().next;
case 258:
                        r10 = r5().value;
                        r8 = r6;
                        if(!(r8 !== r7)) { _fun234_ip = 292; continue _fun234 }
case 269: // try_start_0
                        r9 = r1;
                        r8 = r2;
                        r8 = r8[r10];
                        r9[r10] = r8;
case 283: // try_end0
                        _fun234_ip = 258; continue _fun234;
case 285: // catch_target0
                        CatchBlockStart(arg_register=5);
                        r6.return();
                        throw r5;
case 292:
                        r6 = r1;
                        r7 = r4.length;
                        r5 = _closure2_slot3;
                        r5 = r7 - r5;
                        r6['...(truncated keys)...'] = r5;
                        _fun234_ip = 498; continue _fun234;
case 319:
                        r7 = r4.length;
                        r4 = r3.HermesInternal;
                        r6 = r4.concat;
                        r5 = '{ ... object with ';
                        r4 = ' keys ... }';
                        r1 = r6.bind(r5)(r7, r4);
                        _fun234_ip = 498; continue _fun234;
case 354:
                        r4 = _closure2_slot4;
                        r5 = r4.length;
                        r4 = _closure2_slot0;
                        if(!(!(r5 >= r4))) { _fun234_ip = 465; continue _fun234 }
case 371:
                        r4 = r2;
                        r5 = r4.length;
                        r4 = _closure2_slot2;
                        if(!(r5 > r4)) { _fun234_ip = 498; continue _fun234 }
case 387:
                        r4 = r2;
                        r7 = r4.slice;
                        r6 = _closure2_slot2;
                        r5 = 0;
                        r6 = r7.bind(r4)(r5, r6);
                        r5 = r6.concat;
                        r7 = r4.length;
                        r4 = _closure2_slot2;
                        r9 = r7 - r4;
                        r4 = r3.HermesInternal;
                        r8 = r4.concat;
                        r7 = '... extra ';
                        r4 = ' values truncated ...';
                        r7 = r8.bind(r7)(r9, r4);
                        r4 = new Array(1);
                        r4[0] = r7;
                        r1 = r5.bind(r6)(r4);
                        _fun234_ip = 498; continue _fun234;
case 465:
                        r4 = r2;
                        r6 = r4.length;
                        r3 = r3.HermesInternal;
                        r5 = r3.concat;
                        r4 = '[ ... array with ';
                        r3 = ' values ... ]';
                        r1 = r5.bind(r4)(r6, r3);
case 498:
                        r4 = _closure2_slot4;
                        r3 = r4.unshift;
                        r3 = r3.bind(r4)(r1);
                        return r1;
case 515:
                        r1 = r2;
                        return r1;
case 520:
                        r1 = r2;
                        r4 = r1.length;
                        r5 = _closure2_slot1;
                        r1 = '...(truncated)...';
                        r3 = r1.length;
                        r3 = r5 + r3;
                        if(!(!(r4 > r3))) { _fun234_ip = 554; continue _fun234 }
case 549:
                        r3 = r2;
                        return r3;
case 554:
                        r4 = r2;
                        r3 = r4.substring;
                        r2 = _closure2_slot1;
                        r0 = 0;
                        r0 = r3.bind(r4)(r0, r2);
                        r0 = r0 + r1;
                        return r0;
                    }
                };
                var _closure2_slot5 = r2;
                r3 = r1.maxDepth;
                r2 = undefined;
                if(!(r3 === r2)) { _fun233_ip = 40; continue _fun233 }
case 26:
                r4 = global;
                r4 = r4.Number;
                r3 = r4.POSITIVE_INFINITY;
case 40:
                var _closure2_slot0 = r3;
                r3 = r1.maxStringLimit;
                if(!(r3 === r2)) { _fun233_ip = 68; continue _fun233 }
case 54:
                r4 = global;
                r4 = r4.Number;
                r3 = r4.POSITIVE_INFINITY;
case 68:
                var _closure2_slot1 = r3;
                r3 = r1.maxArrayLimit;
                if(!(r3 === r2)) { _fun233_ip = 96; continue _fun233 }
case 82:
                r4 = global;
                r4 = r4.Number;
                r3 = r4.POSITIVE_INFINITY;
case 96:
                var _closure2_slot2 = r3;
                r1 = r1.maxObjectKeysLimit;
                if(!(r1 === r2)) { _fun233_ip = 124; continue _fun233 }
case 110:
                r2 = global;
                r2 = r2.Number;
                r1 = r2.POSITIVE_INFINITY;
case 124:
                var _closure2_slot3 = r1;
                r1 = new Array(0);
                var _closure2_slot4 = r1;
                r0 = function(a0) { // Original name: stringifySafe, environment: r0
                    _fun235: for(var _fun235_ip = 0; ; ) switch(_fun235_ip) {
case 0:
                        r2 = a0;
                        r0 = r2;
                        r4 = undefined;
                        r1 = undefined;
                        if(!(r2 !== r4)) { _fun235_ip = 237; continue _fun235 }
case 17:
                        r3 = r0;
                        r2 = null;
                        if(!(r3 !== r2)) { _fun235_ip = 231; continue _fun235 }
case 29:
                        r2 = r0;
                        r3 = typeof r2;
                        r2 = 'function';
                        if(!(r3 !== r2)) { _fun235_ip = 209; continue _fun235 }
case 46:
                        r6 = r0;
                        r3 = global;
                        r5 = r3.Error;
                        r5 = r6 instanceof r5;
                        if(r5) { _fun235_ip = 182; continue _fun235 }
case 64: // try_start_0
                        r7 = r3.JSON;
                        r6 = r7.stringify;
                        r5 = r0;
                        r3 = _closure2_slot5;
                        r3 = r6.bind(r7)(r5, r3);
                        r1 = r3;
                        if(!(r3 !== r4)) { _fun235_ip = 101; continue _fun235 }
case 99: // try_end0
                        return r1;
case 101: // try_start_1
                        r1 = r0;
case 104: // try_end1
                        r3 = '["';
                        r1 = typeof r1;
                        r3 = r3 + r1;
                        r1 = '" failed to stringify]';
                        r1 = r3 + r1;
                        return r1;
case 125: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register=1);
                        r1 = r0;
                        r1 = r1.toString;
                        r1 = typeof r1;
                        if(!(r1 === r2)) { _fun235_ip = 158; continue _fun235 }
case 142: // try_start_2
                        r2 = r0;
                        r1 = r2.toString;
                        r1 = r1.bind(r2)();
case 154: // try_end2
                        return r1;
case 156: // catch_target2
                        CatchBlockStart(arg_register=1);
case 158:
                        r1 = r0;
                        r2 = '["';
                        r1 = typeof r1;
                        r2 = r2 + r1;
                        r1 = '" failed to stringify]';
                        r1 = r2 + r1;
                        return r1;
case 182:
                        r1 = r0;
                        r3 = r1.name;
                        r2 = ': ';
                        r2 = r3 + r2;
                        r1 = r1.message;
                        r1 = r2 + r1;
                        return r1;
case 209: // try_start_3
                        r1 = r0;
                        r0 = r1.toString;
                        r0 = r0.bind(r1)();
case 221: // try_end3
                        return r0;
case 223: // catch_target3
                        CatchBlockStart(arg_register=0);
                        r0 = '[function unknown]';
                        return r0;
case 231:
                        r0 = 'null';
                        return r0;
case 237:
                        r0 = 'undefined';
                        return r0;
                    }
                };
                return r0;
            }
        };
        r0 = 0;
        r1 = r7[r0];
        r0 = undefined;
        r5 = r6.bind(r0)(r1);
        r1 = global;
        r10 = r1.Object;
        r9 = r10.defineProperty;
        r8 = {};
        r1 = true;
        r8['value'] = r1;
        r1 = '__esModule';
        r1 = r9.bind(r10)(r2, r1, r8);
        r2['createStringifySafeWithLimits'] = r3;
        r2['default'] = r0;
        r1 = 1;
        r1 = r7[r1];
        r1 = r6.bind(r0)(r1);
        r1 = r5.bind(r0)(r1);
        var _closure1_slot0 = r1;
        r1 = {'maxDepth': 10, 'maxStringLimit': 100, 'maxArrayLimit': 50, 'maxObjectKeysLimit': 50};
        r1 = r3.bind(r0)(r1);
        r2['default'] = r1;
        return r0;
    };
    r5 = 19;
    r4 = [1, 20];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r1 = function(a0, a1, a2, a3, a4, a5, a6, a7) { // Original name: invariant, environment: r0
            _fun237: for(var _fun237_ip = 0; ; ) switch(_fun237_ip) {
case 0:
                r5 = a1;
                r0 = undefined;
                r2 = a0;
                if(r2) { _fun237_ip = 192; continue _fun237 }
case 16:
                if(!(r5 !== r0)) { _fun237_ip = 149; continue _fun237 }
case 23:
                r2 = new Array(6);
                r3 = a2;
                r2[0] = r3;
                r3 = a3;
                r2[1] = r3;
                r3 = a4;
                r2[2] = r3;
                r3 = a5;
                r2[3] = r3;
                r3 = a6;
                r2[4] = r3;
                r3 = a7;
                r2[5] = r3;
                var _closure2_slot0 = r2;
                r2 = 0;
                var _closure2_slot1 = r2;
                r2 = global;
                r3 = r2.Error;
                r4 = r5.replace;
                r2 = /%s/g;
                r1 = function() { // Environment: r1
                    r1 = _closure2_slot0;
                    r0 = _closure2_slot1;
                    r0 = parseFloat(r0);
                    r2 = r0 + 1;
                    _closure2_slot1 = r2;
                    r0 = r1[r0];
                    return r0;
                };
                r7 = r4.bind(r5)(r2, r1);
                r2 = r3.prototype;
                r2 = Object.create(r2, {constructor: {value: r3}});
                r8 = r2;
                r1 = new r8[r3](r7, r6);
                r1 = r1 instanceof Object ? r1 : r2;
                r2 = 'Invariant Violation';
                r1['name'] = r2;
                _fun237_ip = 181; continue _fun237;
case 149:
                r2 = global;
                r4 = r2.Error;
                r2 = r4.prototype;
                r3 = Object.create(r2, {constructor: {value: r4}});
                r7 = 'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.';
                r8 = r3;
                r2 = new r8[r4](r7, r6);
                r1 = r2 instanceof Object ? r2 : r3;
case 181:
                r2 = 1;
                r1['framesToPop'] = r2;
                throw r1;
case 192:
                return r0;
            }
        };
        r0 = a4;
        r0['exports'] = r1;
        r0 = undefined;
        return r0;
    };
    r5 = 20;
    r4 = new Array(0);
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun239: for(var _fun239_ip = 0; ; ) switch(_fun239_ip) {
case 0:
            r7 = a1;
            r2 = a5;
            r8 = a6;
            var _closure1_slot0 = r7;
            var _closure1_slot1 = r8;
            r0 = 0;
            r1 = r8[r0];
            r0 = undefined;
            r6 = r7.bind(r0)(r1);
            r4 = global;
            r10 = r4.Object;
            r9 = r10.defineProperty;
            r5 = {};
            r1 = true;
            r5['value'] = r1;
            r1 = '__esModule';
            r1 = r9.bind(r10)(r2, r1, r5);
            r2['default'] = r0;
            r1 = 1;
            r1 = r8[r1];
            r1 = r7.bind(r0)(r1);
            r1 = r6.bind(r0)(r1);
            var _closure1_slot2 = r1;
            r1 = 2;
            r1 = r8[r1];
            r1 = r7.bind(r0)(r1);
            r1 = r6.bind(r0)(r1);
            var _closure1_slot3 = r1;
            r5 = 3;
            r5 = r8[r5];
            r5 = r7.bind(r0)(r5);
            r5 = r6.bind(r0)(r5);
            var _closure1_slot4 = r5;
            r5 = 4;
            r5 = r8[r5];
            r5 = r7.bind(r0)(r5);
            r5 = r6.bind(r0)(r5);
            var _closure1_slot5 = r5;
            r5 = 5;
            r5 = r8[r5];
            r5 = r7.bind(r0)(r5);
            r5 = r6.bind(r0)(r5);
            var _closure1_slot6 = r5;
            r1 = r1.default;
            r5 = r1.OS;
            r1 = 'android';
            if(!(r5 !== r1)) { _fun239_ip = 339; continue _fun239 }
case 196:
            r6 = r4.Map;
            r1 = new Array(9);
            r5 = ['announcementFinished', 'announcementFinished'];
            r1[0] = r5;
            r5 = ['boldTextChanged', 'boldTextChanged'];
            r1[1] = r5;
            r5 = ['change', 'screenReaderChanged'];
            r1[2] = r5;
            r5 = ['grayscaleChanged', 'grayscaleChanged'];
            r1[3] = r5;
            r5 = ['invertColorsChanged', 'invertColorsChanged'];
            r1[4] = r5;
            r5 = ['reduceMotionChanged', 'reduceMotionChanged'];
            r1[5] = r5;
            r5 = ['reduceTransparencyChanged', 'reduceTransparencyChanged'];
            r1[6] = r5;
            r5 = ['screenReaderChanged', 'screenReaderChanged'];
            r1[7] = r5;
            r5 = ['darkerSystemColorsChanged', 'darkerSystemColorsChanged'];
            r1[8] = r5;
            r5 = r6.prototype;
            r5 = Object.create(r5, {constructor: {value: r6}});
            r14 = r5;
            r13 = r1;
            r1 = new r14[r6](r13, r12);
            r1 = r1 instanceof Object ? r1 : r5;
            _fun239_ip = 456; continue _fun239;
case 339:
            r6 = r4.Map;
            r4 = new Array(7);
            r5 = ['change', 'touchExplorationDidChange'];
            r4[0] = r5;
            r5 = ['reduceMotionChanged', 'reduceMotionDidChange'];
            r4[1] = r5;
            r5 = ['highTextContrastChanged', 'highTextContrastDidChange'];
            r4[2] = r5;
            r5 = ['screenReaderChanged', 'touchExplorationDidChange'];
            r4[3] = r5;
            r5 = ['accessibilityServiceChanged', 'accessibilityServiceDidChange'];
            r4[4] = r5;
            r5 = ['invertColorsChanged', 'invertColorDidChange'];
            r4[5] = r5;
            r5 = ['grayscaleChanged', 'grayscaleModeDidChange'];
            r4[6] = r5;
            r5 = r6.prototype;
            r5 = Object.create(r5, {constructor: {value: r6}});
            r14 = r5;
            r13 = r4;
            r4 = new r14[r6](r13, r12);
            r1 = r4 instanceof Object ? r4 : r5;
case 456:
            var _closure1_slot7 = r1;
            r1 = {};
            r4 = function() { // Original name: isBoldTextEnabled, environment: r3
                _fun240: for(var _fun240_ip = 0; ; ) switch(_fun240_ip) {
case 0:
                    r0 = _closure1_slot3;
                    r0 = r0.default;
                    r1 = r0.OS;
                    r0 = 'android';
                    if(!(r1 !== r0)) { _fun240_ip = 62; continue _fun240 }
case 25:
                    r0 = global;
                    r2 = r0.Promise;
                    r0 = r2.prototype;
                    r1 = Object.create(r0, {constructor: {value: r2}});
                    r3 = function(a0, a1) { // Environment: r0
                        _fun241: for(var _fun241_ip = 0; ; ) switch(_fun241_ip) {
case 0:
                            r3 = a1;
                            r1 = _closure1_slot6;
                            r1 = r1.default;
                            r2 = null;
                            if(!(r1 == r2)) { _fun241_ip = 30; continue _fun241 }
case 21:
                            r1 = undefined;
                            r1 = r3.bind(r1)(r2);
                            _fun241_ip = 54; continue _fun241;
case 30:
                            r0 = _closure1_slot6;
                            r2 = r0.default;
                            r1 = r2.getCurrentBoldTextState;
                            r0 = a0;
                            r0 = r1.bind(r2)(r0, r3);
case 54:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r4 = r1;
                    r0 = new r4[r2](r3, r2);
                    r0 = r0 instanceof Object ? r0 : r1;
                    return r0;
case 62:
                    r0 = global;
                    r2 = r0.Promise;
                    r1 = r2.resolve;
                    r0 = false;
                    r0 = r1.bind(r2)(r0);
                    return r0;
                }
            };
            r1['isBoldTextEnabled'] = r4;
            r4 = function() { // Original name: isGrayscaleEnabled, environment: r3
                _fun242: for(var _fun242_ip = 0; ; ) switch(_fun242_ip) {
case 0:
                    r1 = _closure1_slot3;
                    r1 = r1.default;
                    r2 = r1.OS;
                    r1 = 'android';
                    if(!(r2 !== r1)) { _fun242_ip = 62; continue _fun242 }
case 27:
                    r1 = global;
                    r3 = r1.Promise;
                    r1 = r3.prototype;
                    r2 = Object.create(r1, {constructor: {value: r3}});
                    r4 = function(a0, a1) { // Environment: r0
                        _fun244: for(var _fun244_ip = 0; ; ) switch(_fun244_ip) {
case 0:
                            r3 = a1;
                            r1 = _closure1_slot6;
                            r1 = r1.default;
                            r2 = null;
                            if(!(r1 == r2)) { _fun244_ip = 30; continue _fun244 }
case 21:
                            r1 = undefined;
                            r1 = r3.bind(r1)(r2);
                            _fun244_ip = 54; continue _fun244;
case 30:
                            r0 = _closure1_slot6;
                            r2 = r0.default;
                            r1 = r2.getCurrentGrayscaleState;
                            r0 = a0;
                            r0 = r1.bind(r2)(r0, r3);
case 54:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r5 = r2;
                    r1 = new r5[r3](r4, r3);
                    r1 = r1 instanceof Object ? r1 : r2;
                    return r1;
case 62:
                    r1 = global;
                    r2 = r1.Promise;
                    r1 = r2.prototype;
                    r1 = Object.create(r1, {constructor: {value: r2}});
                    r4 = function(a0, a1) { // Environment: r0
                        _fun243: for(var _fun243_ip = 0; ; ) switch(_fun243_ip) {
case 0:
                            r0 = _closure1_slot5;
                            r0 = r0.default;
                            r3 = null;
                            r4 = r0 == r3;
                            r0 = undefined;
                            r2 = undefined;
                            if(r4) { _fun243_ip = 40; continue _fun243 }
case 25:
                            r4 = _closure1_slot5;
                            r4 = r4.default;
                            r2 = r4.isGrayscaleEnabled;
case 40:
                            if(!(r2 == r3)) { _fun243_ip = 54; continue _fun243 }
case 44:
                            r2 = a1;
                            r2 = r2.bind(r0)(r3);
                            _fun243_ip = 77; continue _fun243;
case 54:
                            r1 = _closure1_slot5;
                            r3 = r1.default;
                            r2 = r3.isGrayscaleEnabled;
                            r1 = a0;
                            r1 = r2.bind(r3)(r1);
case 77:
                            return r0;
                        }
                    };
                    r5 = r1;
                    r0 = new r5[r2](r4, r3);
                    r0 = r0 instanceof Object ? r0 : r1;
                    return r0;
                }
            };
            r1['isGrayscaleEnabled'] = r4;
            r4 = function() { // Original name: isInvertColorsEnabled, environment: r3
                _fun245: for(var _fun245_ip = 0; ; ) switch(_fun245_ip) {
case 0:
                    r1 = _closure1_slot3;
                    r1 = r1.default;
                    r2 = r1.OS;
                    r1 = 'android';
                    if(!(r2 !== r1)) { _fun245_ip = 62; continue _fun245 }
case 27:
                    r1 = global;
                    r3 = r1.Promise;
                    r1 = r3.prototype;
                    r2 = Object.create(r1, {constructor: {value: r3}});
                    r4 = function(a0, a1) { // Environment: r0
                        _fun247: for(var _fun247_ip = 0; ; ) switch(_fun247_ip) {
case 0:
                            r3 = a1;
                            r1 = _closure1_slot6;
                            r1 = r1.default;
                            r2 = null;
                            if(!(r1 == r2)) { _fun247_ip = 30; continue _fun247 }
case 21:
                            r1 = undefined;
                            r1 = r3.bind(r1)(r2);
                            _fun247_ip = 54; continue _fun247;
case 30:
                            r0 = _closure1_slot6;
                            r2 = r0.default;
                            r1 = r2.getCurrentInvertColorsState;
                            r0 = a0;
                            r0 = r1.bind(r2)(r0, r3);
case 54:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r5 = r2;
                    r1 = new r5[r3](r4, r3);
                    r1 = r1 instanceof Object ? r1 : r2;
                    return r1;
case 62:
                    r1 = global;
                    r2 = r1.Promise;
                    r1 = r2.prototype;
                    r1 = Object.create(r1, {constructor: {value: r2}});
                    r4 = function(a0, a1) { // Environment: r0
                        _fun246: for(var _fun246_ip = 0; ; ) switch(_fun246_ip) {
case 0:
                            r0 = _closure1_slot5;
                            r0 = r0.default;
                            r3 = null;
                            r4 = r0 == r3;
                            r0 = undefined;
                            r2 = undefined;
                            if(r4) { _fun246_ip = 40; continue _fun246 }
case 25:
                            r4 = _closure1_slot5;
                            r4 = r4.default;
                            r2 = r4.isInvertColorsEnabled;
case 40:
                            if(!(r2 == r3)) { _fun246_ip = 54; continue _fun246 }
case 44:
                            r2 = a1;
                            r2 = r2.bind(r0)(r3);
                            _fun246_ip = 77; continue _fun246;
case 54:
                            r1 = _closure1_slot5;
                            r3 = r1.default;
                            r2 = r3.isInvertColorsEnabled;
                            r1 = a0;
                            r1 = r2.bind(r3)(r1);
case 77:
                            return r0;
                        }
                    };
                    r5 = r1;
                    r0 = new r5[r2](r4, r3);
                    r0 = r0 instanceof Object ? r0 : r1;
                    return r0;
                }
            };
            r1['isInvertColorsEnabled'] = r4;
            r4 = function() { // Original name: isReduceMotionEnabled, environment: r3
                r0 = global;
                r2 = r0.Promise;
                r0 = r2.prototype;
                r1 = Object.create(r0, {constructor: {value: r2}});
                r3 = function(a0, a1) { // Environment: r0
                    _fun249: for(var _fun249_ip = 0; ; ) switch(_fun249_ip) {
case 0:
                        r2 = a0;
                        r4 = a1;
                        r1 = _closure1_slot3;
                        r1 = r1.default;
                        r3 = r1.OS;
                        r1 = 'android';
                        if(!(r3 !== r1)) { _fun249_ip = 78; continue _fun249 }
case 31:
                        r1 = _closure1_slot6;
                        r1 = r1.default;
                        r3 = null;
                        if(!(r1 == r3)) { _fun249_ip = 55; continue _fun249 }
case 46:
                        r1 = undefined;
                        r1 = r4.bind(r1)(r3);
                        _fun249_ip = 122; continue _fun249;
case 55:
                        r1 = _closure1_slot6;
                        r3 = r1.default;
                        r1 = r3.getCurrentReduceMotionState;
                        r1 = r1.bind(r3)(r2, r4);
                        _fun249_ip = 122; continue _fun249;
case 78:
                        r1 = _closure1_slot5;
                        r1 = r1.default;
                        r3 = null;
                        if(!(r1 == r3)) { _fun249_ip = 102; continue _fun249 }
case 93:
                        r1 = undefined;
                        r1 = r4.bind(r1)(r3);
                        _fun249_ip = 122; continue _fun249;
case 102:
                        r0 = _closure1_slot5;
                        r1 = r0.default;
                        r0 = r1.isReduceMotionEnabled;
                        r0 = r0.bind(r1)(r2);
case 122:
                        r0 = undefined;
                        return r0;
                    }
                };
                r4 = r1;
                r0 = new r4[r2](r3, r2);
                r0 = r0 instanceof Object ? r0 : r1;
                return r0;
            };
            r1['isReduceMotionEnabled'] = r4;
            r4 = function() { // Original name: isHighTextContrastEnabled, environment: r3
                r0 = global;
                r2 = r0.Promise;
                r0 = r2.prototype;
                r1 = Object.create(r0, {constructor: {value: r2}});
                r3 = function(a0, a1) { // Environment: r0
                    _fun251: for(var _fun251_ip = 0; ; ) switch(_fun251_ip) {
case 0:
                        r0 = _closure1_slot3;
                        r0 = r0.default;
                        r2 = r0.OS;
                        r0 = 'android';
                        if(!(r2 !== r0)) { _fun251_ip = 47; continue _fun251 }
case 25:
                        r0 = global;
                        r3 = r0.Promise;
                        r2 = r3.resolve;
                        r0 = false;
                        r0 = r2.bind(r3)(r0);
                        return r0;
case 47:
                        r0 = _closure1_slot5;
                        r0 = r0.default;
                        r3 = null;
                        r4 = r0 == r3;
                        r0 = undefined;
                        r2 = undefined;
                        if(r4) { _fun251_ip = 84; continue _fun251 }
case 69:
                        r4 = _closure1_slot5;
                        r4 = r4.default;
                        r2 = r4.isHighTextContrastEnabled;
case 84:
                        if(!(r2 == r3)) { _fun251_ip = 98; continue _fun251 }
case 88:
                        r2 = a1;
                        r2 = r2.bind(r0)(r3);
                        _fun251_ip = 121; continue _fun251;
case 98:
                        r1 = _closure1_slot5;
                        r3 = r1.default;
                        r2 = r3.isHighTextContrastEnabled;
                        r1 = a0;
                        r1 = r2.bind(r3)(r1);
case 121:
                        return r0;
                    }
                };
                r4 = r1;
                r0 = new r4[r2](r3, r2);
                r0 = r0 instanceof Object ? r0 : r1;
                return r0;
            };
            r1['isHighTextContrastEnabled'] = r4;
            r4 = function() { // Original name: isDarkerSystemColorsEnabled, environment: r3
                r0 = global;
                r2 = r0.Promise;
                r0 = r2.prototype;
                r1 = Object.create(r0, {constructor: {value: r2}});
                r3 = function(a0, a1) { // Environment: r0
                    _fun253: for(var _fun253_ip = 0; ; ) switch(_fun253_ip) {
case 0:
                        r4 = a1;
                        r0 = _closure1_slot3;
                        r0 = r0.default;
                        r2 = r0.OS;
                        r0 = 'android';
                        if(!(r2 !== r0)) { _fun253_ip = 102; continue _fun253 }
case 28:
                        r0 = _closure1_slot6;
                        r0 = r0.default;
                        r2 = null;
                        r5 = r0 == r2;
                        r0 = undefined;
                        r3 = undefined;
                        if(r5) { _fun253_ip = 65; continue _fun253 }
case 50:
                        r5 = _closure1_slot6;
                        r5 = r5.default;
                        r3 = r5.getCurrentDarkerSystemColorsState;
case 65:
                        if(!(r3 == r2)) { _fun253_ip = 76; continue _fun253 }
case 69:
                        r2 = r4.bind(r0)(r2);
                        _fun253_ip = 100; continue _fun253;
case 76:
                        r1 = _closure1_slot6;
                        r3 = r1.default;
                        r2 = r3.getCurrentDarkerSystemColorsState;
                        r1 = a0;
                        r1 = r2.bind(r3)(r1, r4);
case 100:
                        return r0;
case 102:
                        r0 = global;
                        r2 = r0.Promise;
                        r1 = r2.resolve;
                        r0 = false;
                        r0 = r1.bind(r2)(r0);
                        return r0;
                    }
                };
                r4 = r1;
                r0 = new r4[r2](r3, r2);
                r0 = r0 instanceof Object ? r0 : r1;
                return r0;
            };
            r1['isDarkerSystemColorsEnabled'] = r4;
            r4 = function() { // Original name: prefersCrossFadeTransitions, environment: r3
                r0 = global;
                r2 = r0.Promise;
                r0 = r2.prototype;
                r1 = Object.create(r0, {constructor: {value: r2}});
                r3 = function(a0, a1) { // Environment: r0
                    _fun255: for(var _fun255_ip = 0; ; ) switch(_fun255_ip) {
case 0:
                        r4 = a1;
                        r0 = _closure1_slot3;
                        r0 = r0.default;
                        r2 = r0.OS;
                        r0 = 'android';
                        if(!(r2 !== r0)) { _fun255_ip = 102; continue _fun255 }
case 28:
                        r0 = _closure1_slot6;
                        r0 = r0.default;
                        r2 = null;
                        r5 = r0 == r2;
                        r0 = undefined;
                        r3 = undefined;
                        if(r5) { _fun255_ip = 65; continue _fun255 }
case 50:
                        r5 = _closure1_slot6;
                        r5 = r5.default;
                        r3 = r5.getCurrentPrefersCrossFadeTransitionsState;
case 65:
                        if(!(r3 == r2)) { _fun255_ip = 76; continue _fun255 }
case 69:
                        r2 = r4.bind(r0)(r2);
                        _fun255_ip = 100; continue _fun255;
case 76:
                        r1 = _closure1_slot6;
                        r3 = r1.default;
                        r2 = r3.getCurrentPrefersCrossFadeTransitionsState;
                        r1 = a0;
                        r1 = r2.bind(r3)(r1, r4);
case 100:
                        return r0;
case 102:
                        r0 = global;
                        r2 = r0.Promise;
                        r1 = r2.resolve;
                        r0 = false;
                        r0 = r1.bind(r2)(r0);
                        return r0;
                    }
                };
                r4 = r1;
                r0 = new r4[r2](r3, r2);
                r0 = r0 instanceof Object ? r0 : r1;
                return r0;
            };
            r1['prefersCrossFadeTransitions'] = r4;
            r4 = function() { // Original name: isReduceTransparencyEnabled, environment: r3
                _fun256: for(var _fun256_ip = 0; ; ) switch(_fun256_ip) {
case 0:
                    r0 = _closure1_slot3;
                    r0 = r0.default;
                    r1 = r0.OS;
                    r0 = 'android';
                    if(!(r1 !== r0)) { _fun256_ip = 62; continue _fun256 }
case 25:
                    r0 = global;
                    r2 = r0.Promise;
                    r0 = r2.prototype;
                    r1 = Object.create(r0, {constructor: {value: r2}});
                    r3 = function(a0, a1) { // Environment: r0
                        _fun257: for(var _fun257_ip = 0; ; ) switch(_fun257_ip) {
case 0:
                            r3 = a1;
                            r1 = _closure1_slot6;
                            r1 = r1.default;
                            r2 = null;
                            if(!(r1 == r2)) { _fun257_ip = 30; continue _fun257 }
case 21:
                            r1 = undefined;
                            r1 = r3.bind(r1)(r2);
                            _fun257_ip = 54; continue _fun257;
case 30:
                            r0 = _closure1_slot6;
                            r2 = r0.default;
                            r1 = r2.getCurrentReduceTransparencyState;
                            r0 = a0;
                            r0 = r1.bind(r2)(r0, r3);
case 54:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r4 = r1;
                    r0 = new r4[r2](r3, r2);
                    r0 = r0 instanceof Object ? r0 : r1;
                    return r0;
case 62:
                    r0 = global;
                    r2 = r0.Promise;
                    r1 = r2.resolve;
                    r0 = false;
                    r0 = r1.bind(r2)(r0);
                    return r0;
                }
            };
            r1['isReduceTransparencyEnabled'] = r4;
            r4 = function() { // Original name: isScreenReaderEnabled, environment: r3
                r0 = global;
                r2 = r0.Promise;
                r0 = r2.prototype;
                r1 = Object.create(r0, {constructor: {value: r2}});
                r3 = function(a0, a1) { // Environment: r0
                    _fun259: for(var _fun259_ip = 0; ; ) switch(_fun259_ip) {
case 0:
                        r2 = a0;
                        r4 = a1;
                        r1 = _closure1_slot3;
                        r1 = r1.default;
                        r3 = r1.OS;
                        r1 = 'android';
                        if(!(r3 !== r1)) { _fun259_ip = 78; continue _fun259 }
case 31:
                        r1 = _closure1_slot6;
                        r1 = r1.default;
                        r3 = null;
                        if(!(r1 == r3)) { _fun259_ip = 55; continue _fun259 }
case 46:
                        r1 = undefined;
                        r1 = r4.bind(r1)(r3);
                        _fun259_ip = 122; continue _fun259;
case 55:
                        r1 = _closure1_slot6;
                        r3 = r1.default;
                        r1 = r3.getCurrentVoiceOverState;
                        r1 = r1.bind(r3)(r2, r4);
                        _fun259_ip = 122; continue _fun259;
case 78:
                        r1 = _closure1_slot5;
                        r1 = r1.default;
                        r3 = null;
                        if(!(r1 == r3)) { _fun259_ip = 102; continue _fun259 }
case 93:
                        r1 = undefined;
                        r1 = r4.bind(r1)(r3);
                        _fun259_ip = 122; continue _fun259;
case 102:
                        r0 = _closure1_slot5;
                        r1 = r0.default;
                        r0 = r1.isTouchExplorationEnabled;
                        r0 = r0.bind(r1)(r2);
case 122:
                        r0 = undefined;
                        return r0;
                    }
                };
                r4 = r1;
                r0 = new r4[r2](r3, r2);
                r0 = r0 instanceof Object ? r0 : r1;
                return r0;
            };
            r1['isScreenReaderEnabled'] = r4;
            r4 = function() { // Original name: isAccessibilityServiceEnabled, environment: r3
                r0 = global;
                r2 = r0.Promise;
                r0 = r2.prototype;
                r1 = Object.create(r0, {constructor: {value: r2}});
                r3 = function(a0, a1) { // Environment: r0
                    _fun261: for(var _fun261_ip = 0; ; ) switch(_fun261_ip) {
case 0:
                        r3 = a1;
                        r1 = _closure1_slot3;
                        r1 = r1.default;
                        r2 = r1.OS;
                        r1 = 'android';
                        if(!(r2 !== r1)) { _fun261_ip = 39; continue _fun261 }
case 28:
                        r2 = undefined;
                        r1 = null;
                        r1 = r3.bind(r2)(r1);
                        _fun261_ip = 105; continue _fun261;
case 39:
                        r1 = _closure1_slot5;
                        r1 = r1.default;
                        r2 = null;
                        if(!(r1 != r2)) { _fun261_ip = 73; continue _fun261 }
case 54:
                        r1 = _closure1_slot5;
                        r1 = r1.default;
                        r1 = r1.isAccessibilityServiceEnabled;
                        if(!(r1 == r2)) { _fun261_ip = 82; continue _fun261 }
case 73:
                        r1 = undefined;
                        r1 = r3.bind(r1)(r2);
                        _fun261_ip = 105; continue _fun261;
case 82:
                        r0 = _closure1_slot5;
                        r2 = r0.default;
                        r1 = r2.isAccessibilityServiceEnabled;
                        r0 = a0;
                        r0 = r1.bind(r2)(r0);
case 105:
                        r0 = undefined;
                        return r0;
                    }
                };
                r4 = r1;
                r0 = new r4[r2](r3, r2);
                r0 = r0 instanceof Object ? r0 : r1;
                return r0;
            };
            r1['isAccessibilityServiceEnabled'] = r4;
            r4 = function(a0, a1) { // Original name: addEventListener, environment: r3
                _fun262: for(var _fun262_ip = 0; ; ) switch(_fun262_ip) {
case 0:
                    r3 = _closure1_slot7;
                    r2 = r3.get;
                    r1 = a0;
                    r3 = r2.bind(r3)(r1);
                    r1 = null;
                    if(!(r3 != r1)) { _fun262_ip = 51; continue _fun262 }
case 26:
                    r0 = _closure1_slot2;
                    r2 = r0.default;
                    r1 = r2.addListener;
                    r0 = a1;
                    r0 = r1.bind(r2)(r3, r0);
                    _fun262_ip = 67; continue _fun262;
case 51:
                    r1 = {};
                    r2 = function() { // Original name: remove, environment: r2
                        r0 = undefined;
                        return r0;
                    };
                    r1['remove'] = r2;
                    r0 = r1;
case 67:
                    return r0;
                }
            };
            r1['addEventListener'] = r4;
            r4 = function(a0) { // Original name: setAccessibilityFocus, environment: r3
                r0 = _closure1_slot4;
                r3 = r0.default;
                r0 = undefined;
                r2 = a0;
                r1 = 'focus';
                r1 = r3.bind(r0)(r2, r1);
                return r0;
            };
            r1['setAccessibilityFocus'] = r4;
            r4 = function(a0, a1) { // Original name: sendAccessibilityEvent, environment: r3
                _fun265: for(var _fun265_ip = 0; ; ) switch(_fun265_ip) {
case 0:
                    r3 = a1;
                    r1 = _closure1_slot3;
                    r1 = r1.default;
                    r2 = r1.OS;
                    r1 = 'ios';
                    if(!(r2 === r1)) { _fun265_ip = 36; continue _fun265 }
case 28:
                    r1 = 'click';
                    if(!(r3 !== r1)) { _fun265_ip = 75; continue _fun265 }
case 36:
                    r2 = _closure1_slot0;
                    r1 = _closure1_slot1;
                    r0 = 6;
                    r1 = r1[r0];
                    r0 = undefined;
                    r1 = r2.bind(r0)(r1);
                    r2 = r1.sendAccessibilityEvent;
                    r1 = a0;
                    r1 = r2.bind(r0)(r1, r3);
                    return r0;
case 75:
                    r0 = undefined;
                    return r0;
                }
            };
            r1['sendAccessibilityEvent'] = r4;
            r4 = function(a0) { // Original name: announceForAccessibility, environment: r3
                _fun266: for(var _fun266_ip = 0; ; ) switch(_fun266_ip) {
case 0:
                    r2 = a0;
                    r1 = _closure1_slot3;
                    r1 = r1.default;
                    r3 = r1.OS;
                    r1 = 'android';
                    if(!(r3 !== r1)) { _fun266_ip = 65; continue _fun266 }
case 28:
                    r1 = _closure1_slot6;
                    r3 = r1.default;
                    r1 = null;
                    if(!(r3 != r1)) { _fun266_ip = 100; continue _fun266 }
case 43:
                    r1 = _closure1_slot6;
                    r3 = r1.default;
                    r1 = r3.announceForAccessibility;
                    r1 = r1.bind(r3)(r2);
                    _fun266_ip = 100; continue _fun266;
case 65:
                    r1 = _closure1_slot5;
                    r3 = r1.default;
                    r1 = null;
                    if(!(r3 != r1)) { _fun266_ip = 100; continue _fun266 }
case 80:
                    r0 = _closure1_slot5;
                    r1 = r0.default;
                    r0 = r1.announceForAccessibility;
                    r0 = r0.bind(r1)(r2);
case 100:
                    r0 = undefined;
                    return r0;
                }
            };
            r1['announceForAccessibility'] = r4;
            r4 = function(a0, a1) { // Original name: announceForAccessibilityWithOptions, environment: r3
                _fun267: for(var _fun267_ip = 0; ; ) switch(_fun267_ip) {
case 0:
                    r2 = a0;
                    r1 = _closure1_slot3;
                    r1 = r1.default;
                    r3 = r1.OS;
                    r1 = 'android';
                    if(!(r3 !== r1)) { _fun267_ip = 135; continue _fun267 }
case 28:
                    r1 = _closure1_slot6;
                    r1 = r1.default;
                    r3 = null;
                    if(!(r1 != r3)) { _fun267_ip = 61; continue _fun267 }
case 43:
                    r1 = _closure1_slot6;
                    r1 = r1.default;
                    r1 = r1.announceForAccessibilityWithOptions;
                    if(r1) { _fun267_ip = 96; continue _fun267 }
case 61:
                    r1 = _closure1_slot6;
                    r1 = r1.default;
                    if(!(r1 != r3)) { _fun267_ip = 170; continue _fun267 }
case 74:
                    r1 = _closure1_slot6;
                    r4 = r1.default;
                    r1 = r4.announceForAccessibility;
                    r1 = r1.bind(r4)(r2);
                    _fun267_ip = 170; continue _fun267;
case 96:
                    r1 = _closure1_slot6;
                    r1 = r1.default;
                    if(!(r1 != r3)) { _fun267_ip = 170; continue _fun267 }
case 109:
                    r1 = _closure1_slot6;
                    r4 = r1.default;
                    r3 = r4.announceForAccessibilityWithOptions;
                    r1 = a1;
                    r1 = r3.bind(r4)(r2, r1);
                    _fun267_ip = 170; continue _fun267;
case 135:
                    r1 = _closure1_slot5;
                    r3 = r1.default;
                    r1 = null;
                    if(!(r3 != r1)) { _fun267_ip = 170; continue _fun267 }
case 150:
                    r0 = _closure1_slot5;
                    r1 = r0.default;
                    r0 = r1.announceForAccessibility;
                    r0 = r0.bind(r1)(r2);
case 170:
                    r0 = undefined;
                    return r0;
                }
            };
            r1['announceForAccessibilityWithOptions'] = r4;
            r3 = function(a0) { // Original name: getRecommendedTimeoutMillis, environment: r3
                _fun268: for(var _fun268_ip = 0; ; ) switch(_fun268_ip) {
case 0:
                    r3 = a0;
                    var _closure2_slot0 = r3;
                    r1 = _closure1_slot3;
                    r1 = r1.default;
                    r2 = r1.OS;
                    r1 = 'android';
                    if(!(r2 !== r1)) { _fun268_ip = 54; continue _fun268 }
case 34:
                    r1 = global;
                    r2 = r1.Promise;
                    r1 = r2.resolve;
                    r1 = r1.bind(r2)(r3);
                    return r1;
case 54:
                    r1 = global;
                    r2 = r1.Promise;
                    r1 = r2.prototype;
                    r1 = Object.create(r1, {constructor: {value: r2}});
                    r4 = function(a0, a1) { // Environment: r0
                        _fun269: for(var _fun269_ip = 0; ; ) switch(_fun269_ip) {
case 0:
                            r3 = a0;
                            r1 = _closure1_slot5;
                            r2 = r1.default;
                            r1 = null;
                            if(!(r2 != r1)) { _fun269_ip = 39; continue _fun269 }
case 21:
                            r1 = _closure1_slot5;
                            r1 = r1.default;
                            r1 = r1.getRecommendedTimeoutMillis;
                            if(r1) { _fun269_ip = 55; continue _fun269 }
case 39:
                            r2 = _closure2_slot0;
                            r1 = undefined;
                            r1 = r3.bind(r1)(r2);
                            _fun269_ip = 83; continue _fun269;
case 55:
                            r0 = _closure1_slot5;
                            r2 = r0.default;
                            r1 = r2.getRecommendedTimeoutMillis;
                            r0 = _closure2_slot0;
                            r0 = r1.bind(r2)(r0, r3);
case 83:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r5 = r1;
                    r0 = new r5[r2](r4, r3);
                    r0 = r0 instanceof Object ? r0 : r1;
                    return r0;
                }
            };
            r1['getRecommendedTimeoutMillis'] = r3;
            r2['default'] = r1;
            return r0;
        }
    };
    r5 = 21;
    r4 = [1, 22, 33, 43, 53, 55, 57];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r7 = a1;
        r2 = a5;
        r8 = a6;
        var _closure1_slot0 = r7;
        var _closure1_slot1 = r8;
        r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r1
            _fun271: for(var _fun271_ip = 0; ; ) switch(_fun271_ip) {
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
                r0 = _closure1_slot9;
                r0 = r0.bind(r2)();
                if(r0) { _fun271_ip = 61; continue _fun271 }
case 48:
                r0 = r8.apply;
                r0 = r0.bind(r8)(r3, r5);
                _fun271_ip = 107; continue _fun271;
case 61:
                r6 = global;
                r7 = r6.Reflect;
                r6 = r7.construct;
                if(r5) { _fun271_ip = 81; continue _fun271 }
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
        var _closure1_slot8 = r0;
        r0 = function() { // Original name: _isNativeReflectConstruct, environment: r1
            _fun272: for(var _fun272_ip = 0; ; ) switch(_fun272_ip) {
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
                _fun272_ip = 74; continue _fun272;
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
            _fun275: for(var _fun275_ip = 0; ; ) switch(_fun275_ip) {
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
                if(!r7) { _fun275_ip = 54; continue _fun275 }
case 49:
                r0 = r4.prototype;
case 54:
                r4 = undefined;
                r3 = r3.bind(r4)(r0);
                r0 = 'emit';
                r4 = r5.bind(r4)(r3, r0, r6);
                var _closure2_slot1 = r4;
                r0 = 2;
                r2 = r0 & r2;
                r0 = r4;
                if(!r2) { _fun275_ip = 108; continue _fun275 }
case 89:
                r3 = 'function';
                r2 = typeof r4;
                r0 = r4;
                if(!(r3 === r2)) { _fun275_ip = 108; continue _fun275 }
case 103:
                r0 = function(a0) { // Environment: r1
                    r3 = _closure2_slot1;
                    r2 = r3.apply;
                    r1 = _closure2_slot0;
                    r0 = a0;
                    r0 = r2.bind(r3)(r1, r0);
                    return r0;
                };
case 108:
                return r0;
            }
        };
        var _closure1_slot10 = r0;
        r0 = 0;
        r3 = r8[r0];
        r0 = undefined;
        r6 = r7.bind(r0)(r3);
        r4 = global;
        r11 = r4.Object;
        r10 = r11.defineProperty;
        r9 = {};
        r3 = true;
        r9['value'] = r3;
        r5 = '__esModule';
        r5 = r10.bind(r11)(r2, r5, r9);
        r2['default'] = r0;
        r5 = 1;
        r5 = r8[r5];
        r5 = r7.bind(r0)(r5);
        r5 = r6.bind(r0)(r5);
        var _closure1_slot2 = r5;
        r5 = 2;
        r5 = r8[r5];
        r5 = r7.bind(r0)(r5);
        r5 = r6.bind(r0)(r5);
        var _closure1_slot3 = r5;
        r5 = 3;
        r5 = r8[r5];
        r5 = r7.bind(r0)(r5);
        r5 = r6.bind(r0)(r5);
        var _closure1_slot4 = r5;
        r5 = 4;
        r5 = r8[r5];
        r5 = r7.bind(r0)(r5);
        r5 = r6.bind(r0)(r5);
        var _closure1_slot5 = r5;
        r5 = 5;
        r5 = r8[r5];
        r5 = r7.bind(r0)(r5);
        r5 = r6.bind(r0)(r5);
        var _closure1_slot6 = r5;
        r5 = 6;
        r5 = r8[r5];
        r5 = r7.bind(r0)(r5);
        r5 = r6.bind(r0)(r5);
        var _closure1_slot7 = r5;
        r5 = 7;
        r5 = r8[r5];
        r5 = r7.bind(r0)(r5);
        r5 = r6.bind(r0)(r5);
        r5 = r5.default;
        r1 = function(a0) { // Environment: r1
            r3 = function() { // Original name: RCTDeviceEventEmitterImpl, environment: r0
                r4 = this;
                r3 = undefined;
                r0 = undefined;
                r2 = _closure1_slot2;
                r5 = r2.default;
                r2 = _closure2_slot0;
                r5 = r5.bind(r3)(r4, r2);
                r1 = _closure1_slot8;
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
            r1 = _closure1_slot3;
            r1 = r1.default;
            r4 = {};
            r5 = 'emit';
            r4['key'] = r5;
            r0 = function(a0) { // Original name: emit, environment: r0
                _fun279: for(var _fun279_ip = 0; ; ) switch(_fun279_ip) {
case 0:
                    r2 = a0;
                    r0 = undefined;
                    r8 = undefined;
                    var _closure3_slot0 = r2;
                    r6 = _closure1_slot0;
                    r5 = _closure1_slot1;
                    r3 = 8;
                    r5 = r5[r3];
                    r5 = r6.bind(r0)(r5);
                    r5 = r5.beginEvent;
                    r4 = function() { // Environment: r4
                        r2 = _closure3_slot0;
                        r0 = global;
                        r0 = r0.HermesInternal;
                        r1 = r0.concat;
                        r0 = 'RCTDeviceEventEmitter.emit#';
                        r0 = r1.bind(r0)(r2);
                        return r0;
                    };
                    r4 = r5.bind(r0)(r4);
                    r7 = arguments.length;
                    r4 = global;
                    r9 = r4.Array;
                    r5 = 1;
                    r6 = r7 > r5;
                    r4 = 0;
                    if(!r6) { _fun279_ip = 79; continue _fun279 }
case 75:
                    r4 = r7 - r5;
case 79:
                    r6 = r9.prototype;
                    r6 = Object.create(r6, {constructor: {value: r9}});
                    r15 = r6;
                    r14 = r4;
                    r4 = new r15[r9](r14, r13);
                    r6 = r4 instanceof Object ? r4 : r6;
                    r9 = r5 < r7;
                    r4 = r5;
                    if(!r9) { _fun279_ip = 131; continue _fun279 }
case 112:
                    r10 = r4 - r5;
                    r9 = arguments[r4];
                    r6[r10] = r9;
                    r4 = r4 + 1;
                    if(r4 < r7) { _fun279_ip = 112; continue _fun279 }
case 131:
                    r9 = _closure1_slot10;
                    r14 = _closure2_slot0;
                    r13 = 'emit';
                    r12 = this;
                    r11 = 3;
                    r15 = undefined;
                    r4 = r15[r9](r14, r13, r12, r11, r10);
                    r5 = new Array(1);
                    r5[0] = r2;
                    r2 = r5.concat;
                    r2 = r2.bind(r5)(r6);
                    r2 = r4.bind(r0)(r2);
                    r2 = _closure1_slot0;
                    r1 = _closure1_slot1;
                    r1 = r1[r3];
                    r1 = r2.bind(r0)(r1);
                    r1 = r1.endEvent;
                    r1 = r1.bind(r0)();
                    return r0;
                }
            };
            r4['value'] = r0;
            r0 = new Array(1);
            r0[0] = r4;
            r0 = r1.bind(r2)(r3, r0);
            return r0;
        };
        r1 = r1.bind(r0)(r5);
        r5 = r1.prototype;
        r5 = Object.create(r5, {constructor: {value: r1}});
        r15 = r5;
        r1 = new r15[r1](r14);
        r1 = r1 instanceof Object ? r1 : r5;
        r7 = r4.Object;
        r6 = r7.defineProperty;
        r5 = {};
        r5['configurable'] = r3;
        r5['value'] = r1;
        r4 = a0;
        r3 = '__rctDeviceEventEmitter';
        r3 = r6.bind(r7)(r4, r3, r5);
        r2['default'] = r1;
        return r0;
    };
    r5 = 22;
    r4 = [1, 12, 13, 23, 25, 26, 28, 30, 17];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r0 = a4;
        r2 = a1;
        var _closure1_slot0 = r2;
        r2 = a6;
        var _closure1_slot1 = r2;
        r1 = function(a0, a1) { // Original name: _possibleConstructorReturn, environment: r1
            _fun282: for(var _fun282_ip = 0; ; ) switch(_fun282_ip) {
case 0:
                r0 = a1;
                if(!r0) { _fun282_ip = 59; continue _fun282 }
case 6:
                r3 = _closure1_slot0;
                r2 = _closure1_slot1;
                r1 = 0;
                r2 = r2[r1];
                r1 = undefined;
                r2 = r3.bind(r1)(r2);
                r1 = r2.default;
                r2 = r1.bind(r2)(r0);
                r1 = 'object';
                if(!(r1 != r2)) { _fun282_ip = 132; continue _fun282 }
case 48:
                r2 = 'function';
                r1 = typeof r0;
                if(!(r2 !== r1)) { _fun282_ip = 132; continue _fun282 }
case 59:
                r3 = undefined;
                if(!(r3 === r0)) { _fun282_ip = 98; continue _fun282 }
case 65:
                r2 = _closure1_slot0;
                r4 = _closure1_slot1;
                r1 = 1;
                r1 = r4[r1];
                r2 = r2.bind(r3)(r1);
                r1 = a0;
                r1 = r2.bind(r3)(r1);
                return r1;
case 98:
                r1 = global;
                r3 = r1.TypeError;
                r1 = r3.prototype;
                r2 = Object.create(r1, {constructor: {value: r3}});
                r5 = 'Derived constructors may only return object or undefined';
                r6 = r2;
                r1 = new r6[r3](r5, r4);
                r1 = r1 instanceof Object ? r1 : r2;
                throw r1;
case 132:
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
    r5 = 23;
    r4 = [16, 24];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r0 = a4;
        r1 = function(a0) { // Original name: _assertThisInitialized, environment: r1
            _fun284: for(var _fun284_ip = 0; ; ) switch(_fun284_ip) {
case 0:
                r0 = a0;
                r1 = undefined;
                if(!(r1 !== r0)) { _fun284_ip = 11; continue _fun284 }
case 9:
                return r0;
case 11:
                r0 = global;
                r2 = r0.ReferenceError;
                r0 = r2.prototype;
                r1 = Object.create(r0, {constructor: {value: r2}});
                r3 = "this hasn't been initialised - super() hasn't been called";
                r4 = r1;
                r0 = new r4[r2](r3, r2);
                r0 = r0 instanceof Object ? r0 : r1;
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
    r5 = 24;
    r4 = new Array(0);
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r0 = a4;
        var _closure1_slot0 = r0;
        r1 = function(a0) { // Original name: _getPrototypeOf, environment: r2
            _fun286: for(var _fun286_ip = 0; ; ) switch(_fun286_ip) {
case 0:
                r2 = _closure1_slot0;
                r3 = global;
                r1 = r3.Object;
                r1 = r1.setPrototypeOf;
                if(r1) { _fun286_ip = 33; continue _fun286 }
case 24:
                r1 = function(a0) { // Environment: r1
                    _fun287: for(var _fun287_ip = 0; ; ) switch(_fun287_ip) {
case 0:
                        r3 = a0;
                        r0 = r3.__proto__;
                        if(r0) { _fun287_ip = 31; continue _fun287 }
case 12:
                        r1 = global;
                        r2 = r1.Object;
                        r1 = r2.getPrototypeOf;
                        r0 = r1.bind(r2)(r3);
case 31:
                        return r0;
                    }
                };
                _fun286_ip = 54; continue _fun286;
case 33:
                r3 = r3.Object;
                r4 = r3.getPrototypeOf;
                r3 = r4.bind;
                r1 = r3.bind(r4)();
case 54:
                _closure1_slot1 = r1;
                r2['exports'] = r1;
                r1 = _closure1_slot0;
                r3 = r1.exports;
                r2 = true;
                r3['__esModule'] = r2;
                r2 = r1.exports;
                r1 = r1.exports;
                r2['default'] = r1;
                r2 = _closure1_slot1;
                r1 = undefined;
                r0 = a0;
                r0 = r2.bind(r1)(r0);
                return r0;
            }
        };
        var _closure1_slot1 = r1;
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
    r5 = 25;
    r4 = new Array(0);
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r0 = a4;
        r1 = a1;
        var _closure1_slot0 = r1;
        var _closure1_slot1 = r0;
        r1 = a6;
        var _closure1_slot2 = r1;
        r1 = function() { // Original name: _get, environment: r2
            _fun289: for(var _fun289_ip = 0; ; ) switch(_fun289_ip) {
case 0:
                r0 = undefined;
                r3 = _closure1_slot1;
                r4 = global;
                r2 = r4.Reflect;
                r5 = 'undefined';
                r2 = typeof r2;
                if(!(r5 !== r2)) { _fun289_ip = 41; continue _fun289 }
case 27:
                r2 = r4.Reflect;
                r2 = r2.get;
                if(r2) { _fun289_ip = 50; continue _fun289 }
case 41:
                r2 = function(a0, a1, a2) { // Environment: r2
                    _fun290: for(var _fun290_ip = 0; ; ) switch(_fun290_ip) {
case 0:
                        r4 = a0;
                        r6 = a1;
                        r3 = a2;
                        r0 = undefined;
                        r5 = undefined;
                        r2 = _closure1_slot0;
                        r7 = _closure1_slot2;
                        r1 = 0;
                        r1 = r7[r1];
                        r1 = r2.bind(r0)(r1);
                        r2 = r1.bind(r0)(r4, r6);
                        if(r2) { _fun290_ip = 46; continue _fun290 }
case 44:
                        return r0;
case 46:
                        r0 = global;
                        r1 = r0.Object;
                        r0 = r1.getOwnPropertyDescriptor;
                        r1 = r0.bind(r1)(r2, r6);
                        r0 = r1.get;
                        if(r0) { _fun290_ip = 80; continue _fun290 }
case 73:
                        r0 = r1.value;
                        _fun290_ip = 108; continue _fun290;
case 80:
                        r2 = r1.get;
                        r1 = r2.call;
                        r6 = arguments.length;
                        r5 = 3;
                        if(!(r6 < r5)) { _fun290_ip = 103; continue _fun290 }
case 100:
                        r3 = r4;
case 103:
                        r0 = r1.bind(r2)(r3);
case 108:
                        return r0;
                    }
                };
                _fun289_ip = 70; continue _fun289;
case 50:
                r4 = r4.Reflect;
                r5 = r4.get;
                r4 = r5.bind;
                r2 = r4.bind(r5)();
case 70:
                _closure1_slot3 = r2;
                r3['exports'] = r2;
                r2 = _closure1_slot1;
                r4 = r2.exports;
                r3 = true;
                r4['__esModule'] = r3;
                r3 = r2.exports;
                r2 = r2.exports;
                r3['default'] = r2;
                r3 = _closure1_slot3;
                r2 = r3.apply;
                r0 = arguments;
                r1 = r0;
                r0 = null;
                r0 = r2.bind(r3)(r0, r1);
                return r0;
            }
        };
        var _closure1_slot3 = r1;
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
    r5 = 26;
    r4 = [27];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r0 = a4;
        r2 = a1;
        var _closure1_slot0 = r2;
        r2 = a6;
        var _closure1_slot1 = r2;
        r1 = function(a0, a1) { // Original name: _superPropBase, environment: r1
            _fun292: for(var _fun292_ip = 0; ; ) switch(_fun292_ip) {
case 0:
                r2 = a0;
                r6 = a1;
                r0 = {};
                r1 = r0.hasOwnProperty;
                r0 = r1.call;
                r1 = r0.bind(r1)(r2, r6);
                r0 = r2;
                if(r1) { _fun292_ip = 124; continue _fun292 }
case 30:
                r7 = _closure1_slot0;
                r1 = _closure1_slot1;
                r4 = 0;
                r1 = r1[r4];
                r3 = undefined;
                r1 = r7.bind(r3)(r1);
                r1 = r1.bind(r3)(r2);
                r2 = null;
                r0 = r1;
                if(!(r2 !== r0)) { _fun292_ip = 124; continue _fun292 }
case 68:
                r7 = {};
                r8 = r7.hasOwnProperty;
                r7 = r8.call;
                r7 = r7.bind(r8)(r1, r6);
                r8 = r1;
                r0 = r8;
                if(r7) { _fun292_ip = 124; continue _fun292 }
case 95:
                r9 = _closure1_slot0;
                r7 = _closure1_slot1;
                r7 = r7[r4];
                r7 = r9.bind(r3)(r7);
                r1 = r7.bind(r3)(r8);
                r0 = r1;
                if(r2 !== r0) { _fun292_ip = 68; continue _fun292 }
case 124:
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
    r5 = 27;
    r4 = [25];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r0 = a4;
        r2 = a1;
        var _closure1_slot0 = r2;
        r2 = a6;
        var _closure1_slot1 = r2;
        r1 = function(a0, a1) { // Original name: _inherits, environment: r1
            _fun294: for(var _fun294_ip = 0; ; ) switch(_fun294_ip) {
case 0:
                r3 = a0;
                r2 = a1;
                r1 = 'function';
                r0 = typeof r2;
                if(!(r1 !== r0)) { _fun294_ip = 26; continue _fun294 }
case 17:
                r0 = null;
                if(!(r0 === r2)) { _fun294_ip = 151; continue _fun294 }
case 26:
                r0 = global;
                r6 = r0.Object;
                r5 = r6.create;
                r4 = r2;
                if(!r4) { _fun294_ip = 50; continue _fun294 }
case 45:
                r4 = r2.prototype;
case 50:
                r1 = {};
                r7 = {'value': null, 'writable': true, 'configurable': true};
                r7['value'] = r3;
                r1['constructor'] = r7;
                r1 = r5.bind(r6)(r4, r1);
                r3['prototype'] = r1;
                r5 = r0.Object;
                r4 = r5.defineProperty;
                r1 = {};
                r0 = false;
                r1['writable'] = r0;
                r0 = 'prototype';
                r0 = r4.bind(r5)(r3, r0, r1);
                if(!r2) { _fun294_ip = 147; continue _fun294 }
case 117:
                r4 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 0;
                r0 = r1[r0];
                r1 = undefined;
                r0 = r4.bind(r1)(r0);
                r0 = r0.bind(r1)(r3, r2);
case 147:
                r0 = undefined;
                return r0;
case 151:
                r0 = global;
                r2 = r0.TypeError;
                r0 = r2.prototype;
                r1 = Object.create(r0, {constructor: {value: r2}});
                r11 = 'Super expression must either be null or a function';
                r12 = r1;
                r0 = new r12[r2](r11, r10);
                r0 = r0 instanceof Object ? r0 : r1;
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
    r5 = 28;
    r4 = [29];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r0 = a4;
        var _closure1_slot0 = r0;
        r1 = function(a0, a1) { // Original name: _setPrototypeOf, environment: r2
            _fun296: for(var _fun296_ip = 0; ; ) switch(_fun296_ip) {
case 0:
                r2 = _closure1_slot0;
                r3 = global;
                r1 = r3.Object;
                r1 = r1.setPrototypeOf;
                if(r1) { _fun296_ip = 33; continue _fun296 }
case 24:
                r1 = function(a0, a1) { // Environment: r1
                    r0 = a0;
                    r1 = a1;
                    r0['__proto__'] = r1;
                    return r0;
                };
                _fun296_ip = 54; continue _fun296;
case 33:
                r3 = r3.Object;
                r4 = r3.setPrototypeOf;
                r3 = r4.bind;
                r1 = r3.bind(r4)();
case 54:
                _closure1_slot1 = r1;
                r2['exports'] = r1;
                r1 = _closure1_slot0;
                r3 = r1.exports;
                r2 = true;
                r3['__esModule'] = r2;
                r2 = r1.exports;
                r1 = r1.exports;
                r2['default'] = r1;
                r3 = _closure1_slot1;
                r2 = undefined;
                r1 = a0;
                r0 = a1;
                r0 = r3.bind(r2)(r1, r0);
                return r0;
            }
        };
        var _closure1_slot1 = r1;
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
    r5 = 29;
    r4 = new Array(0);
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r5 = a1;
        r2 = a5;
        r6 = a6;
        r0 = function(a0, a1) { // Original name: allocate, environment: r1
            _fun299: for(var _fun299_ip = 0; ; ) switch(_fun299_ip) {
case 0:
                r3 = a0;
                r2 = a1;
                r0 = r3[r2];
                r1 = null;
                if(!(r0 == r1)) { _fun299_ip = 51; continue _fun299 }
case 16:
                r1 = global;
                r1 = r1.Set;
                r4 = r1.prototype;
                r4 = Object.create(r4, {constructor: {value: r1}});
                r5 = r4;
                r1 = new r5[r1](r4);
                r1 = r1 instanceof Object ? r1 : r4;
                r3[r2] = r1;
                r0 = r1;
case 51:
                return r0;
            }
        };
        var _closure1_slot4 = r0;
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
        r4 = r3.default;
        r3 = 'registry';
        r3 = r4.bind(r0)(r3);
        var _closure1_slot3 = r3;
        r1 = function() { // Environment: r1
            r3 = function() { // Original name: EventEmitter, environment: r4
                r5 = this;
                r0 = _closure1_slot0;
                r3 = r0.default;
                r2 = _closure2_slot0;
                r0 = undefined;
                r2 = r3.bind(r0)(r5, r2);
                r2 = global;
                r4 = r2.Object;
                r3 = r4.defineProperty;
                r2 = _closure1_slot3;
                r1 = {};
                r6 = true;
                r1['writable'] = r6;
                r6 = {};
                r1['value'] = r6;
                r1 = r3.bind(r4)(r5, r2, r1);
                return r0;
            };
            var _closure2_slot0 = r3;
            r0 = _closure1_slot1;
            r2 = r0.default;
            r0 = {};
            r1 = 'addListener';
            r0['key'] = r1;
            r1 = function(a0, a1, a2) { // Original name: addListener, environment: r4
                _fun302: for(var _fun302_ip = 0; ; ) switch(_fun302_ip) {
case 0:
                    r3 = a1;
                    r2 = typeof r3;
                    r0 = 'function';
                    if(!(r2 === r0)) { _fun302_ip = 102; continue _fun302 }
case 16:
                    r5 = _closure1_slot4;
                    r2 = _closure1_slot2;
                    r6 = r2.default;
                    r2 = _closure1_slot3;
                    r4 = undefined;
                    r0 = this;
                    r0 = r6.bind(r4)(r0, r2);
                    r2 = r0[r2];
                    r0 = a0;
                    r2 = r5.bind(r4)(r2, r0);
                    var _closure3_slot0 = r2;
                    r0 = {};
                    r4 = a2;
                    r0['context'] = r4;
                    r0['listener'] = r3;
                    r3 = function() { // Original name: remove, environment: r1
                        r2 = _closure3_slot0;
                        r1 = r2.delete;
                        r0 = _closure3_slot1;
                        r0 = r1.bind(r2)(r0);
                        r0 = undefined;
                        return r0;
                    };
                    r0['remove'] = r3;
                    var _closure3_slot1 = r0;
                    r1 = r2.add;
                    r1 = r1.bind(r2)(r0);
                    return r0;
case 102:
                    r0 = global;
                    r2 = r0.TypeError;
                    r0 = r2.prototype;
                    r1 = Object.create(r0, {constructor: {value: r2}});
                    r8 = 'EventEmitter.addListener(...): 2nd argument must be a function.';
                    r9 = r1;
                    r0 = new r9[r2](r8, r7);
                    r0 = r0 instanceof Object ? r0 : r1;
                    throw r0;
                }
            };
            r0['value'] = r1;
            r1 = new Array(4);
            r1[0] = r0;
            r0 = {};
            r5 = 'emit';
            r0['key'] = r5;
            r5 = function(a0) { // Original name: emit, environment: r4
                _fun304: for(var _fun304_ip = 0; ; ) switch(_fun304_ip) {
case 0:
                    r0 = undefined;
                    r7 = undefined;
                    r3 = undefined;
                    r2 = _closure1_slot2;
                    r4 = r2.default;
                    r2 = _closure1_slot3;
                    r1 = this;
                    r1 = r4.bind(r0)(r1, r2);
                    r2 = r1[r2];
                    r1 = a0;
                    r4 = r2[r1];
                    r1 = null;
                    if(!(r4 != r1)) { _fun304_ip = 199; continue _fun304 }
case 50:
                    r6 = arguments.length;
                    r1 = global;
                    r9 = r1.Array;
                    r5 = 1;
                    r8 = r6 > r5;
                    r2 = 0;
                    if(!r8) { _fun304_ip = 77; continue _fun304 }
case 73:
                    r2 = r6 - r5;
case 77:
                    r8 = r9.prototype;
                    r8 = Object.create(r8, {constructor: {value: r9}});
                    r13 = r8;
                    r12 = r2;
                    r2 = new r13[r9](r12, r11);
                    r3 = r2 instanceof Object ? r2 : r8;
                    r8 = r5 < r6;
                    r2 = r5;
                    if(!r8) { _fun304_ip = 132; continue _fun304 }
case 110:
                    r10 = r3;
                    r9 = r2 - r5;
                    r8 = arguments[r2];
                    r10[r9] = r8;
                    r2 = r2 + 1;
                    if(r2 < r6) { _fun304_ip = 110; continue _fun304 }
case 132:
                    r2 = r1.Array;
                    r1 = r2.from;
                    r4 = r1.bind(r2)(r4);
                    r1 = r4;
                    r2 = r1[Symbol.iterator];
                    r1 = r2().next;
case 154:
                    r4 = r1().value;
                    r5 = r2;
                    if(!(r5 !== r0)) { _fun304_ip = 199; continue _fun304 }
case 165: // try_start_0
                    r7 = r4.listener;
                    r6 = r7.apply;
                    r5 = r4.context;
                    r4 = r3;
                    r4 = r6.bind(r7)(r5, r4);
case 190: // try_end0
                    _fun304_ip = 154; continue _fun304;
case 192: // catch_target0
                    CatchBlockStart(arg_register=1);
                    r2.return();
                    throw r1;
case 199:
                    return r0;
                }
            };
            r0['value'] = r5;
            r1[1] = r0;
            r0 = {};
            r5 = 'removeAllListeners';
            r0['key'] = r5;
            r5 = function(a0) { // Original name: removeAllListeners, environment: r4
                _fun305: for(var _fun305_ip = 0; ; ) switch(_fun305_ip) {
case 0:
                    r1 = a0;
                    r3 = this;
                    r0 = null;
                    if(!(r1 != r0)) { _fun305_ip = 45; continue _fun305 }
case 11:
                    r2 = _closure1_slot2;
                    r4 = r2.default;
                    r2 = _closure1_slot3;
                    r0 = undefined;
                    r0 = r4.bind(r0)(r3, r2);
                    r0 = r0[r2];
                    r0 = delete r0[r1];
                    _fun305_ip = 75; continue _fun305;
case 45:
                    r1 = _closure1_slot2;
                    r1 = r1.default;
                    r2 = _closure1_slot3;
                    r0 = undefined;
                    r1 = r1.bind(r0)(r3, r2);
                    r0 = {};
                    r1[r2] = r0;
case 75:
                    r0 = undefined;
                    return r0;
                }
            };
            r0['value'] = r5;
            r1[2] = r0;
            r0 = {};
            r5 = 'listenerCount';
            r0['key'] = r5;
            r4 = function(a0) { // Original name: listenerCount, environment: r4
                _fun306: for(var _fun306_ip = 0; ; ) switch(_fun306_ip) {
case 0:
                    r1 = _closure1_slot2;
                    r3 = r1.default;
                    r1 = _closure1_slot3;
                    r2 = undefined;
                    r0 = this;
                    r0 = r3.bind(r2)(r0, r1);
                    r1 = r0[r1];
                    r0 = a0;
                    r1 = r1[r0];
                    r0 = null;
                    r2 = r1 == r0;
                    r0 = 0;
                    if(r2) { _fun306_ip = 53; continue _fun306 }
case 48:
                    r0 = r1.size;
case 53:
                    return r0;
                }
            };
            r0['value'] = r4;
            r1[3] = r0;
            r0 = undefined;
            r0 = r2.bind(r0)(r3, r1);
            return r0;
        };
        r1 = r1.bind(r0)();
        r2['default'] = r1;
        return r0;
    };
    r5 = 30;
    r4 = [1, 12, 13, 31, 32];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r0 = a4;
        r1 = function(a0, a1) { // Original name: _classPrivateFieldBase, environment: r1
            _fun308: for(var _fun308_ip = 0; ; ) switch(_fun308_ip) {
case 0:
                r0 = a0;
                r1 = {};
                r3 = r1.hasOwnProperty;
                r2 = r3.call;
                r1 = a1;
                r1 = r2.bind(r3)(r0, r1);
                if(r1) { _fun308_ip = 61; continue _fun308 }
case 27:
                r1 = global;
                r3 = r1.TypeError;
                r1 = r3.prototype;
                r2 = Object.create(r1, {constructor: {value: r3}});
                r5 = 'attempted to use private field on non-instance';
                r6 = r2;
                r1 = new r6[r3](r5, r4);
                r1 = r1 instanceof Object ? r1 : r2;
                throw r1;
case 61:
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
    r5 = 31;
    r4 = new Array(0);
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r0 = a4;
        r2 = 0;
        var _closure1_slot0 = r2;
        r1 = function(a0) { // Original name: _classPrivateFieldKey, environment: r1
            r0 = _closure1_slot0;
            r1 = parseFloat(r0);
            r0 = r1 + 1;
            _closure1_slot0 = r0;
            r0 = '__private_';
            r1 = r0 + r1;
            r0 = '_';
            r1 = r1 + r0;
            r0 = a0;
            r0 = r1 + r0;
            return r0;
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
    r5 = 32;
    r4 = new Array(0);
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
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
        r1 = {'__constants': null, 'OS': 'android'};
        r5 = function() { // Original name: get Version, environment: r3
            r0 = this;
            r0 = r0.constants;
            r0 = r0.Version;
            return r0;
        };
        r4 = 'Version';
        Object.defineProperty(r1, r4, {get: r5, set: r0, enumerable: true});
        r5 = function() { // Original name: get constants, environment: r3
            _fun313: for(var _fun313_ip = 0; ; ) switch(_fun313_ip) {
case 0:
                r0 = this;
                r2 = r0.__constants;
                r1 = null;
                if(!(r2 == r1)) { _fun313_ip = 41; continue _fun313 }
case 14:
                r1 = _closure1_slot0;
                r2 = r1.default;
                r1 = r2.getConstants;
                r1 = r1.bind(r2)();
                r0['__constants'] = r1;
case 41:
                r0 = r0.__constants;
                return r0;
            }
        };
        r4 = 'constants';
        Object.defineProperty(r1, r4, {get: r5, set: r0, enumerable: true});
        r5 = function() { // Original name: get isTesting, environment: r3
            r0 = false;
            return r0;
        };
        r4 = 'isTesting';
        Object.defineProperty(r1, r4, {get: r5, set: r0, enumerable: true});
        r5 = function() { // Original name: get isDisableAnimations, environment: r3
            _fun315: for(var _fun315_ip = 0; ; ) switch(_fun315_ip) {
case 0:
                r1 = this;
                r0 = r1.constants;
                r0 = r0.isDisableAnimations;
                r2 = null;
                if(!(r0 == r2)) { _fun315_ip = 26; continue _fun315 }
case 20:
                r0 = r1.isTesting;
case 26:
                return r0;
            }
        };
        r4 = 'isDisableAnimations';
        Object.defineProperty(r1, r4, {get: r5, set: r0, enumerable: true});
        r5 = function() { // Original name: get isTV, environment: r3
            r0 = this;
            r0 = r0.constants;
            r1 = r0.uiMode;
            r0 = 'tv';
            r0 = r1 === r0;
            return r0;
        };
        r4 = 'isTV';
        Object.defineProperty(r1, r4, {get: r5, set: r0, enumerable: true});
        r5 = function() { // Original name: get isVision, environment: r3
            r0 = false;
            return r0;
        };
        r4 = 'isVision';
        Object.defineProperty(r1, r4, {get: r5, set: r0, enumerable: true});
        r3 = function(a0) { // Original name: select, environment: r3
            _fun318: for(var _fun318_ip = 0; ; ) switch(_fun318_ip) {
case 0:
                r1 = a0;
                r0 = 'android';
                r0 = r0 in r1;
                if(r0) { _fun318_ip = 40; continue _fun318 }
case 14:
                r0 = 'native';
                r0 = r0 in r1;
                if(r0) { _fun318_ip = 32; continue _fun318 }
case 25:
                r0 = r1.default;
                _fun318_ip = 38; continue _fun318;
case 32:
                r0 = r1.native;
case 38:
                _fun318_ip = 46; continue _fun318;
case 40:
                r0 = r1.android;
case 46:
                return r0;
            }
        };
        r1['select'] = r3;
        r2['default'] = r1;
        return r0;
    };
    r5 = 33;
    r4 = [1, 34];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun319: for(var _fun319_ip = 0; ; ) switch(_fun319_ip) {
case 0:
            r2 = a5;
            var _closure1_slot0 = r2;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r3
                _fun320: for(var _fun320_ip = 0; ; ) switch(_fun320_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun320_ip = 104; continue _fun320 }
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
                        _fun321: for(var _fun321_ip = 0; ; ) switch(_fun321_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun321_ip = 15; continue _fun321 }
case 9:
                            r0 = _closure2_slot0;
                            _fun321_ip = 19; continue _fun321;
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
            if(!r6) { _fun319_ip = 98; continue _fun319 }
case 84:
            r5 = r6.__esModule;
            r1 = r6;
            if(r5) { _fun319_ip = 365; continue _fun319 }
case 98:
            r16 = null;
            if(!(r16 !== r6)) { _fun319_ip = 356; continue _fun319 }
case 107:
            r7 = typeof r6;
            r5 = 'object';
            if(!(r5 !== r7)) { _fun319_ip = 129; continue _fun319 }
case 118:
            r5 = 'function';
            if(!(r5 === r7)) { _fun319_ip = 356; continue _fun319 }
case 129:
            r5 = _closure1_slot3;
            r7 = r5.bind(r0)(r0);
            if(!r7) { _fun319_ip = 157; continue _fun319 }
case 141:
            r5 = r7.has;
            r5 = r5.bind(r7)(r6);
            if(r5) { _fun319_ip = 344; continue _fun319 }
case 157:
            r5 = Object.create(r16);
            r8 = r4.Object;
            r15 = r8.defineProperty;
            if(!r15) { _fun319_ip = 185; continue _fun319 }
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
                if(r9 === r20) { _fun319_ip = 202; continue _fun319 }
case 218:
                r17 = {};
                r18 = r17.hasOwnProperty;
                r17 = r18.call;
                r17 = r17.bind(r18)(r6, r20);
                if(!r17) { _fun319_ip = 202; continue _fun319 }
case 239:
                r17 = null;
                if(!r15) { _fun319_ip = 261; continue _fun319 }
case 244:
                r19 = r4.Object;
                r18 = r19.getOwnPropertyDescriptor;
                r17 = r18.bind(r19)(r6, r20);
case 261:
                if(!r17) { _fun319_ip = 280; continue _fun319 }
case 264:
                r18 = r17.get;
                if(r18) { _fun319_ip = 293; continue _fun319 }
case 272:
                r18 = r17.set;
                if(r18) { _fun319_ip = 293; continue _fun319 }
case 280:
                r18 = r6[r20];
                r5[r20] = r18;
                r8 = r17;
                _fun319_ip = 202; continue _fun319;
case 293:
                r19 = r4.Object;
                r18 = r19.defineProperty;
                r18 = r18.bind(r19)(r5, r20, r17);
                r8 = r17;
                _fun319_ip = 202; continue _fun319;
            }
case 316:
            r5['default'] = r6;
            r1 = r5;
            if(!r7) { _fun319_ip = 365; continue _fun319 }
case 328:
            r8 = r7.set;
            r8 = r8.bind(r7)(r6, r5);
            r1 = r5;
            _fun319_ip = 365; continue _fun319;
case 344:
            r5 = r7.get;
            r1 = r5.bind(r7)(r6);
            _fun319_ip = 365; continue _fun319;
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
                _fun322: for(var _fun322_ip = 0; ; ) switch(_fun322_ip) {
case 0:
                    r4 = a0;
                    var _closure2_slot0 = r4;
                    r0 = 'default';
                    if(!(r4 !== r0)) { _fun322_ip = 152; continue _fun322 }
case 20:
                    r0 = '__esModule';
                    if(!(r4 !== r0)) { _fun322_ip = 152; continue _fun322 }
case 31:
                    r1 = global;
                    r0 = r1.Object;
                    r0 = r0.prototype;
                    r6 = r0.hasOwnProperty;
                    r3 = r6.call;
                    r2 = _closure1_slot1;
                    r2 = r3.bind(r6)(r2, r4);
                    if(r2) { _fun322_ip = 148; continue _fun322 }
case 70:
                    r2 = _closure1_slot0;
                    r2 = r4 in r2;
                    if(!r2) { _fun322_ip = 101; continue _fun322 }
case 81:
                    r2 = _closure1_slot0;
                    r3 = r2[r4];
                    r2 = _closure1_slot2;
                    r2 = r2[r4];
                    if(!(r3 !== r2)) { _fun322_ip = 144; continue _fun322 }
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
    r5 = 34;
    r4 = [35];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun324: for(var _fun324_ip = 0; ; ) switch(_fun324_ip) {
case 0:
            r2 = a5;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun325: for(var _fun325_ip = 0; ; ) switch(_fun325_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun325_ip = 104; continue _fun325 }
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
                        _fun326: for(var _fun326_ip = 0; ; ) switch(_fun326_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun326_ip = 15; continue _fun326 }
case 9:
                            r0 = _closure2_slot0;
                            _fun326_ip = 19; continue _fun326;
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
            if(!r3) { _fun324_ip = 88; continue _fun324 }
case 74:
            r5 = r3.__esModule;
            r4 = r3;
            if(r5) { _fun324_ip = 355; continue _fun324 }
case 88:
            r14 = null;
            if(!(r14 !== r3)) { _fun324_ip = 346; continue _fun324 }
case 97:
            r6 = typeof r3;
            r5 = 'object';
            if(!(r5 !== r6)) { _fun324_ip = 119; continue _fun324 }
case 108:
            r5 = 'function';
            if(!(r5 === r6)) { _fun324_ip = 346; continue _fun324 }
case 119:
            r1 = _closure1_slot0;
            r5 = r1.bind(r0)(r0);
            if(!r5) { _fun324_ip = 147; continue _fun324 }
case 131:
            r1 = r5.has;
            r1 = r1.bind(r5)(r3);
            if(r1) { _fun324_ip = 334; continue _fun324 }
case 147:
            r1 = Object.create(r14);
            r6 = r15.Object;
            r13 = r6.defineProperty;
            if(!r13) { _fun324_ip = 175; continue _fun324 }
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
                if(r7 === r19) { _fun324_ip = 192; continue _fun324 }
case 208:
                r16 = {};
                r17 = r16.hasOwnProperty;
                r16 = r17.call;
                r16 = r16.bind(r17)(r3, r19);
                if(!r16) { _fun324_ip = 192; continue _fun324 }
case 229:
                r16 = null;
                if(!r13) { _fun324_ip = 251; continue _fun324 }
case 234:
                r18 = r15.Object;
                r17 = r18.getOwnPropertyDescriptor;
                r16 = r17.bind(r18)(r3, r19);
case 251:
                if(!r16) { _fun324_ip = 270; continue _fun324 }
case 254:
                r17 = r16.get;
                if(r17) { _fun324_ip = 283; continue _fun324 }
case 262:
                r17 = r16.set;
                if(r17) { _fun324_ip = 283; continue _fun324 }
case 270:
                r17 = r3[r19];
                r1[r19] = r17;
                r6 = r16;
                _fun324_ip = 192; continue _fun324;
case 283:
                r18 = r15.Object;
                r17 = r18.defineProperty;
                r17 = r17.bind(r18)(r1, r19, r16);
                r6 = r16;
                _fun324_ip = 192; continue _fun324;
            }
case 306:
            r1['default'] = r3;
            r4 = r1;
            if(!r5) { _fun324_ip = 355; continue _fun324 }
case 318:
            r6 = r5.set;
            r6 = r6.bind(r5)(r3, r1);
            r4 = r1;
            _fun324_ip = 355; continue _fun324;
case 334:
            r1 = r5.get;
            r4 = r1.bind(r5)(r3);
            _fun324_ip = 355; continue _fun324;
case 346:
            r1 = {};
            r1['default'] = r3;
            r4 = r1;
case 355:
            r3 = r4.getEnforcing;
            r1 = 'PlatformConstants';
            r1 = r3.bind(r4)(r1);
            r2['default'] = r1;
            return r0;
        }
    };
    r5 = 35;
    r4 = [36];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r1 = a0;
        r5 = a1;
        r7 = a5;
        r6 = a6;
        var _closure1_slot0 = r1;
        var _closure1_slot1 = r5;
        var _closure1_slot2 = r6;
        r0 = function(a0) { // Original name: requireModule, environment: r2
            _fun328: for(var _fun328_ip = 0; ; ) switch(_fun328_ip) {
case 0:
                r3 = a0;
                r0 = _closure1_slot4;
                r2 = null;
                if(!(r0 != r2)) { _fun328_ip = 31; continue _fun328 }
case 16:
                r4 = _closure1_slot4;
                r0 = undefined;
                r0 = r4.bind(r0)(r3);
                if(!(r0 == r2)) { _fun328_ip = 114; continue _fun328 }
case 31:
                r4 = _closure1_slot0;
                r4 = r4.RN$Bridgeless;
                r5 = true;
                if(!(r4 === r5)) { _fun328_ip = 75; continue _fun328 }
case 47:
                r4 = _closure1_slot0;
                r4 = r4.RN$TurboInterop;
                if(!(r4 !== r5)) { _fun328_ip = 75; continue _fun328 }
case 61:
                r4 = _closure1_slot0;
                r4 = r4.RN$UnifiedNativeModuleProxy;
                if(!(r4 === r5)) { _fun328_ip = 110; continue _fun328 }
case 75:
                r5 = _closure1_slot1;
                r4 = _closure1_slot2;
                r1 = 2;
                r4 = r4[r1];
                r1 = undefined;
                r1 = r5.bind(r1)(r4);
                r1 = r1.default;
                r1 = r1[r3];
                if(!(r1 == r2)) { _fun328_ip = 112; continue _fun328 }
case 110:
                return r2;
case 112:
                return r1;
case 114:
                return r0;
            }
        };
        var _closure1_slot5 = r0;
        r0 = 0;
        r3 = r6[r0];
        r0 = undefined;
        r4 = r5.bind(r0)(r3);
        r3 = global;
        r10 = r3.Object;
        r9 = r10.defineProperty;
        r8 = {};
        r3 = true;
        r8['value'] = r3;
        r3 = '__esModule';
        r3 = r9.bind(r10)(r7, r3, r8);
        r3 = function(a0) { // Original name: get, environment: r2
            r2 = _closure1_slot5;
            r1 = undefined;
            r0 = a0;
            r0 = r2.bind(r1)(r0);
            return r0;
        };
        r7['get'] = r3;
        r3 = function(a0) { // Original name: getEnforcing, environment: r2
            r7 = a0;
            r0 = _closure1_slot5;
            r4 = undefined;
            r0 = r0.bind(r4)(r7);
            r1 = _closure1_slot3;
            r3 = r1.default;
            r1 = null;
            r2 = r0 != r1;
            r1 = global;
            r1 = r1.HermesInternal;
            r6 = r1.concat;
            r5 = "TurboModuleRegistry.getEnforcing(...): '";
            r1 = "' could not be found. ";
            r5 = r6.bind(r5)(r7, r1);
            r1 = 'Verify that a module by this name is registered in the native binary.';
            r1 = r5 + r1;
            r1 = r3.bind(r4)(r2, r1);
            return r0;
        };
        r7['getEnforcing'] = r3;
        r3 = 1;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot3 = r3;
        r1 = r1.__turboModuleProxy;
        var _closure1_slot4 = r1;
        return r0;
    };
    r5 = 36;
    r4 = [1, 20, 37];
    r4 = r7.bind(r2)(r6, r5, r4);
    r7 = r0.__d;
    r6 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun331: for(var _fun331_ip = 0; ; ) switch(_fun331_ip) {
case 0:
            r3 = a0;
            r7 = a1;
            r2 = a5;
            r8 = a6;
            var _closure1_slot0 = r3;
            var _closure1_slot1 = r7;
            var _closure1_slot2 = r8;
            r1 = function(a0, a1) { // Original name: genModule, environment: r4
                _fun332: for(var _fun332_ip = 0; ; ) switch(_fun332_ip) {
case 0:
