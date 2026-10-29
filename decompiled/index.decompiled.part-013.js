            r8 = r14.setTimeout;
case 281:
            var _closure1_slot12 = r8;
            r8 = r14.clearTimeout;
            r16 = typeof r8;
            r8 = null;
            if(!(r15 === r16)) { _fun2757_ip = 305; continue _fun2757 }
case 299:
            r8 = r14.clearTimeout;
case 305:
            var _closure1_slot13 = r8;
            r8 = r14.setImmediate;
            r16 = 'undefined';
            r18 = typeof r8;
            r8 = null;
            if(!(r16 !== r18)) { _fun2757_ip = 334; continue _fun2757 }
case 328:
            r8 = r14.setImmediate;
case 334:
            var _closure1_slot14 = r8;
            var _closure1_slot15 = r17;
            r17 = -1;
            var _closure1_slot16 = r17;
            var _closure1_slot17 = r17;
            r8 = typeof r8;
            if(!(r15 !== r8)) { _fun2757_ip = 446; continue _fun2757 }
case 363:
            r8 = r14.MessageChannel;
            r8 = typeof r8;
            if(!(r16 === r8)) { _fun2757_ip = 387; continue _fun2757 }
case 376:
            r8 = function() { // Original name: schedulePerformWorkUntilDeadline, environment: r11
                r3 = _closure1_slot12;
                r2 = _closure1_slot27;
                r0 = undefined;
                r1 = 0;
                r1 = r3.bind(r0)(r2, r1);
                return r0;
            };
            var _closure1_slot18 = r8;
            _fun2757_ip = 455; continue _fun2757;
case 387:
            r8 = r14.MessageChannel;
            r15 = r8.prototype;
            r15 = Object.create(r15, {constructor: {value: r8}});
            r19 = r15;
            r8 = new r19[r8](r18);
            r8 = r8 instanceof Object ? r8 : r15;
            r15 = r8.port2;
            var _closure1_slot19 = r15;
            r8 = r8.port1;
            r8['onmessage'] = r13;
            r8 = function() { // Original name: schedulePerformWorkUntilDeadline, environment: r11
                r2 = _closure1_slot19;
                r1 = r2.postMessage;
                r0 = null;
                r0 = r1.bind(r2)(r0);
                r0 = undefined;
                return r0;
            };
            _closure1_slot18 = r8;
            _fun2757_ip = 455; continue _fun2757;
case 446:
            r8 = function() { // Original name: schedulePerformWorkUntilDeadline, environment: r11
                r2 = _closure1_slot14;
                r1 = _closure1_slot27;
                r0 = undefined;
                r1 = r2.bind(r0)(r1);
                return r0;
            };
            _closure1_slot18 = r8;
case 455:
            r11 = r14.nativeRuntimeScheduler;
            r8 = 2;
            r11 = typeof r11;
            if(!(r16 !== r11)) { _fun2757_ip = 483; continue _fun2757 }
case 471:
            r11 = r14.nativeRuntimeScheduler;
            r8 = r11.unstable_UserBlockingPriority;
case 483:
            r11 = r14.nativeRuntimeScheduler;
            r11 = typeof r11;
            if(!(r16 !== r11)) { _fun2757_ip = 508; continue _fun2757 }
case 496:
            r11 = r14.nativeRuntimeScheduler;
            r10 = r11.unstable_NormalPriority;
case 508:
            r13 = r14.nativeRuntimeScheduler;
            r11 = 4;
            r13 = typeof r13;
            if(!(r16 !== r13)) { _fun2757_ip = 536; continue _fun2757 }
case 524:
            r13 = r14.nativeRuntimeScheduler;
            r11 = r13.unstable_LowPriority;
case 536:
            r13 = r14.nativeRuntimeScheduler;
            r13 = typeof r13;
            if(!(r16 !== r13)) { _fun2757_ip = 561; continue _fun2757 }
case 549:
            r13 = r14.nativeRuntimeScheduler;
            r12 = r13.unstable_ImmediatePriority;
case 561:
            r13 = r14.nativeRuntimeScheduler;
            r13 = typeof r13;
            if(!(r16 !== r13)) { _fun2757_ip = 586; continue _fun2757 }
case 574:
            r13 = r14.nativeRuntimeScheduler;
            r3 = r13.unstable_scheduleCallback;
case 586:
            r13 = r14.nativeRuntimeScheduler;
            r13 = typeof r13;
            if(!(r16 !== r13)) { _fun2757_ip = 611; continue _fun2757 }
case 599:
            r13 = r14.nativeRuntimeScheduler;
            r7 = r13.unstable_cancelCallback;
case 611:
            r13 = r14.nativeRuntimeScheduler;
            r13 = typeof r13;
            if(!(r16 !== r13)) { _fun2757_ip = 636; continue _fun2757 }
case 624:
            r13 = r14.nativeRuntimeScheduler;
            r6 = r13.unstable_getCurrentPriorityLevel;
case 636:
            r13 = r14.nativeRuntimeScheduler;
            r13 = typeof r13;
            if(!(r16 !== r13)) { _fun2757_ip = 661; continue _fun2757 }
case 649:
            r13 = r14.nativeRuntimeScheduler;
            r2 = r13.unstable_shouldYield;
case 661:
            r13 = r14.nativeRuntimeScheduler;
            r13 = typeof r13;
            if(!(r16 !== r13)) { _fun2757_ip = 686; continue _fun2757 }
case 674:
            r13 = r14.nativeRuntimeScheduler;
            r4 = r13.unstable_requestPaint;
case 686:
            r13 = r14.nativeRuntimeScheduler;
            r13 = typeof r13;
            if(!(r16 !== r13)) { _fun2757_ip = 710; continue _fun2757 }
case 699:
            r13 = r14.nativeRuntimeScheduler;
            r5 = r13.unstable_now;
case 710:
            r15 = r14.nativeRuntimeScheduler;
            r13 = 5;
            r15 = typeof r15;
            if(!(r16 !== r15)) { _fun2757_ip = 738; continue _fun2757 }
case 726:
            r14 = r14.nativeRuntimeScheduler;
            r13 = r14.unstable_IdlePriority;
case 738:
            r1['unstable_IdlePriority'] = r13;
            r1['unstable_ImmediatePriority'] = r12;
            r1['unstable_LowPriority'] = r11;
            r1['unstable_NormalPriority'] = r10;
            r1['unstable_Profiling'] = r9;
            r1['unstable_UserBlockingPriority'] = r8;
            r1['unstable_cancelCallback'] = r7;
            r1['unstable_continueExecution'] = r0;
            r1['unstable_forceFrameRate'] = r0;
            r1['unstable_getCurrentPriorityLevel'] = r6;
            r1['unstable_getFirstCallbackNode'] = r0;
            r1['unstable_next'] = r0;
            r1['unstable_now'] = r5;
            r1['unstable_pauseExecution'] = r0;
            r1['unstable_requestPaint'] = r4;
            r1['unstable_runWithPriority'] = r0;
            r1['unstable_scheduleCallback'] = r3;
            r1['unstable_shouldYield'] = r2;
            r1['unstable_wrapCallback'] = r0;
            r0 = undefined;
            return r0;
        }
    };
    r6 = 271;
    r5 = new Array(0);
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun2778: for(var _fun2778_ip = 0; ; ) switch(_fun2778_ip) {
case 0:
            r1 = a5;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r2
                _fun2779: for(var _fun2779_ip = 0; ; ) switch(_fun2779_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun2779_ip = 104; continue _fun2779 }
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
                        _fun2780: for(var _fun2780_ip = 0; ; ) switch(_fun2780_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun2780_ip = 15; continue _fun2780 }
case 9:
                            r0 = _closure2_slot0;
                            _fun2780_ip = 19; continue _fun2780;
case 15:
                            r0 = _closure2_slot1;
case 19:
                            return r0;
                        }
                    };
                    _closure1_slot1 = r2;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0);
                    return r0;
case 104:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot1 = r0;
            r0 = function(a0, a1) { // Original name: getExtendedError, environment: r2
                _fun2781: for(var _fun2781_ip = 0; ; ) switch(_fun2781_ip) {
case 0:
                    r2 = a0;
                    r1 = a1;
                    r0 = undefined;
                    r3 = global;
                    r3 = r3.Error;
                    r3 = r2 instanceof r3;
                    if(r3) { _fun2781_ip = 111; continue _fun2781 }
case 23:
                    r4 = typeof r2;
                    r3 = 'string';
                    if(!(r4 !== r3)) { _fun2781_ip = 73; continue _fun2781 }
case 34:
                    r3 = _closure1_slot0;
                    r5 = r3.SyntheticError;
                    r3 = r5.prototype;
                    r4 = Object.create(r3, {constructor: {value: r5}});
                    r6 = 'Unspecified error';
                    r7 = r4;
                    r3 = new r7[r5](r6, r5);
                    r0 = r3 instanceof Object ? r3 : r4;
                    _fun2781_ip = 109; continue _fun2781;
case 73:
                    r3 = _closure1_slot0;
                    r3 = r3.SyntheticError;
                    r4 = r3.prototype;
                    r4 = Object.create(r4, {constructor: {value: r3}});
                    r7 = r4;
                    r6 = r2;
                    r3 = new r7[r3](r6, r5);
                    r0 = r3 instanceof Object ? r3 : r4;
case 109:
                    _fun2781_ip = 114; continue _fun2781;
case 111:
                    r0 = r2;
case 114: // try_start_0
                    r2 = r0;
                    r1 = r1.componentStack;
                    r2['componentStack'] = r1;
                    r1 = true;
                    r2['isComponentError'] = r1;
case 136: // try_end0
                    _fun2781_ip = 140; continue _fun2781;
case 138: // catch_target0
                    CatchBlockStart(arg_register=1);
case 140:
                    return r0;
                }
            };
            var _closure1_slot2 = r0;
            r15 = global;
            r5 = r15.Object;
            r4 = r5.defineProperty;
            r3 = {};
            r0 = true;
            r3['value'] = r0;
            r0 = '__esModule';
            r0 = r4.bind(r5)(r1, r0, r3);
            r0 = function(a0, a1) { // Original name: onCaughtError, environment: r2
                r4 = _closure1_slot2;
                r0 = undefined;
                r3 = a0;
                r2 = a1;
                r4 = r4.bind(r0)(r3, r2);
                r1 = _closure1_slot0;
                r3 = r1.default;
                r2 = r3.handleException;
                r1 = false;
                r1 = r2.bind(r3)(r4, r1);
                return r0;
            };
            r1['onCaughtError'] = r0;
            r0 = function(a0, a1) { // Original name: onRecoverableError, environment: r2
                r3 = _closure1_slot2;
                r0 = undefined;
                r2 = a0;
                r1 = a1;
                r3 = r3.bind(r0)(r2, r1);
                r1 = global;
                r2 = r1.console;
                r1 = r2.warn;
                r1 = r1.bind(r2)(r3);
                return r0;
            };
            r1['onRecoverableError'] = r0;
            r0 = function(a0, a1) { // Original name: onUncaughtError, environment: r2
                r4 = _closure1_slot2;
                r0 = undefined;
                r3 = a0;
                r2 = a1;
                r4 = r4.bind(r0)(r3, r2);
                r1 = _closure1_slot0;
                r3 = r1.default;
                r2 = r3.handleException;
                r1 = true;
                r1 = r2.bind(r3)(r4, r1);
                return r0;
            };
            r1['onUncaughtError'] = r0;
            r1 = a6;
            r0 = 0;
            r3 = r1[r0];
            r1 = a1;
            r0 = undefined;
            r4 = r1.bind(r0)(r3);
            if(!r4) { _fun2778_ip = 124; continue _fun2778 }
case 110:
            r3 = r4.__esModule;
            r1 = r4;
            if(r3) { _fun2778_ip = 391; continue _fun2778 }
case 124:
            r14 = null;
            if(!(r14 !== r4)) { _fun2778_ip = 382; continue _fun2778 }
case 133:
            r5 = typeof r4;
            r3 = 'object';
            if(!(r3 !== r5)) { _fun2778_ip = 155; continue _fun2778 }
case 144:
            r3 = 'function';
            if(!(r3 === r5)) { _fun2778_ip = 382; continue _fun2778 }
case 155:
            r3 = _closure1_slot1;
            r5 = r3.bind(r0)(r0);
            if(!r5) { _fun2778_ip = 183; continue _fun2778 }
case 167:
            r3 = r5.has;
            r3 = r3.bind(r5)(r4);
            if(r3) { _fun2778_ip = 370; continue _fun2778 }
case 183:
            r3 = Object.create(r14);
            r6 = r15.Object;
            r13 = r6.defineProperty;
            if(!r13) { _fun2778_ip = 211; continue _fun2778 }
case 200:
            r6 = r15.Object;
            r13 = r6.getOwnPropertyDescriptor;
case 211:
            r11 = r4;
            r7 = 'default';
            r6 = undefined;
            for(r8 in r11)
case 228:
            {
case 237:
                r19 = r8;
                if(r7 === r19) { _fun2778_ip = 228; continue _fun2778 }
case 244:
                r16 = {};
                r17 = r16.hasOwnProperty;
                r16 = r17.call;
                r16 = r16.bind(r17)(r4, r19);
                if(!r16) { _fun2778_ip = 228; continue _fun2778 }
case 265:
                r16 = null;
                if(!r13) { _fun2778_ip = 287; continue _fun2778 }
case 270:
                r18 = r15.Object;
                r17 = r18.getOwnPropertyDescriptor;
                r16 = r17.bind(r18)(r4, r19);
case 287:
                if(!r16) { _fun2778_ip = 306; continue _fun2778 }
case 290:
                r17 = r16.get;
                if(r17) { _fun2778_ip = 319; continue _fun2778 }
case 298:
                r17 = r16.set;
                if(r17) { _fun2778_ip = 319; continue _fun2778 }
case 306:
                r17 = r4[r19];
                r3[r19] = r17;
                r6 = r16;
                _fun2778_ip = 228; continue _fun2778;
case 319:
                r18 = r15.Object;
                r17 = r18.defineProperty;
                r17 = r17.bind(r18)(r3, r19, r16);
                r6 = r16;
                _fun2778_ip = 228; continue _fun2778;
            }
case 342:
            r3['default'] = r4;
            r1 = r3;
            if(!r5) { _fun2778_ip = 391; continue _fun2778 }
case 354:
            r6 = r5.set;
            r6 = r6.bind(r5)(r4, r3);
            r1 = r3;
            _fun2778_ip = 391; continue _fun2778;
case 370:
            r3 = r5.get;
            r1 = r3.bind(r5)(r4);
            _fun2778_ip = 391; continue _fun2778;
case 382:
            r3 = {};
            r3['default'] = r4;
            r1 = r3;
case 391:
            var _closure1_slot0 = r1;
            return r0;
        }
    };
    r6 = 272;
    r5 = [159];
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
        r2['default'] = r1;
        return r0;
    };
    r6 = 273;
    r5 = [274];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun2786: for(var _fun2786_ip = 0; ; ) switch(_fun2786_ip) {
case 0:
            r17 = a1;
            r4 = a5;
            r18 = a6;
            var _closure1_slot0 = r17;
            var _closure1_slot1 = r18;
            r2 = undefined;
            r9 = undefined;
            r8 = undefined;
            r0 = function(a0) { // Original name: getIteratorFn, environment: r5
                _fun2787: for(var _fun2787_ip = 0; ; ) switch(_fun2787_ip) {
case 0:
                    r1 = a0;
                    r0 = null;
                    if(!(r0 !== r1)) { _fun2787_ip = 65; continue _fun2787 }
case 9:
                    r3 = 'object';
                    r2 = typeof r1;
                    if(!(r3 === r2)) { _fun2787_ip = 65; continue _fun2787 }
case 20:
                    r2 = _closure1_slot20;
                    if(!r2) { _fun2787_ip = 38; continue _fun2787 }
case 30:
                    r3 = _closure1_slot20;
                    r2 = r1[r3];
case 38:
                    if(r2) { _fun2787_ip = 47; continue _fun2787 }
case 41:
                    r2 = r1["@@iterator"];
case 47:
                    r4 = 'function';
                    r3 = typeof r2;
                    r1 = null;
                    if(!(r4 === r3)) { _fun2787_ip = 63; continue _fun2787 }
case 60:
                    r1 = r2;
case 63:
                    return r1;
case 65:
                    return r0;
                }
            };
            var _closure1_slot177 = r0;
            r0 = function(a0) { // Original name: describeBuiltInComponentFrame, environment: r5
                _fun2788: for(var _fun2788_ip = 0; ; ) switch(_fun2788_ip) {
case 0:
                    r3 = undefined;
                    r4 = undefined;
                    r1 = _closure1_slot22;
                    if(!(r3 === r1)) { _fun2788_ip = 189; continue _fun2788 }
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
                    if(!r5) { _fun2788_ip = 95; continue _fun2788 }
case 85:
                    r5 = r4;
                    r4 = 1;
                    r3 = r5[r4];
case 95:
                    r1 = r3;
                    if(r3) { _fun2788_ip = 105; continue _fun2788 }
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
                    if(r4) { _fun2788_ip = 185; continue _fun2788 }
case 148:
                    r5 = r2.stack;
                    r4 = r5.indexOf;
                    r2 = '@';
                    r2 = r4.bind(r5)(r2);
                    r3 = r3 < r2;
                    r2 = '';
                    if(!r3) { _fun2788_ip = 182; continue _fun2788 }
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
            var _closure1_slot178 = r0;
            r0 = function(a0, a1) { // Original name: describeNativeComponentFrame, environment: r5
                _fun2789: for(var _fun2789_ip = 0; ; ) switch(_fun2789_ip) {
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
                    if(!r2) { _fun2789_ip = 930; continue _fun2789 }
case 43:
                    r2 = _closure1_slot24;
                    if(r2) { _fun2789_ip = 930; continue _fun2789 }
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
                        _fun2790: for(var _fun2790_ip = 0; ; ) switch(_fun2790_ip) {
case 0:
                            r7 = undefined;
                            r2 = undefined;
                            r1 = undefined;
case 8: // try_start_3
                            r4 = _closure2_slot1;
                            if(r4) { _fun2790_ip = 101; continue _fun2790 }
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
                            if(!r6) { _fun2790_ip = 71; continue _fun2790 }
case 51:
                            r6 = r2;
                            r6 = r6.catch;
                            r7 = 'function';
                            r6 = typeof r6;
                            r4 = r7 === r6;
case 71:
                            if(!r4) { _fun2790_ip = 276; continue _fun2790 }
case 77:
                            r7 = r2;
                            r6 = r7.catch;
                            r4 = function() { // Environment: r5
                                r0 = undefined;
                                return r0;
                            };
                            r4 = r6.bind(r7)(r4);
                            _fun2790_ip = 276; continue _fun2790;
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
                            if(!(r6 === r5)) { _fun2790_ip = 179; continue _fun2790 }
case 165:
                            r5 = r4.Reflect;
                            r5 = r5.construct;
                            if(r5) { _fun2790_ip = 219; continue _fun2790 }
case 179: // try_start_1
                            r6 = r2;
                            r5 = r6.call;
                            r5 = r5.bind(r6)();
case 191: // try_end1
                            _fun2790_ip = 195; continue _fun2790;
case 193: // catch_target1
                            CatchBlockStart(arg_register=1);
case 195:
                            r7 = _closure2_slot0;
                            r6 = r7.call;
                            r5 = r2;
                            r5 = r5.prototype;
                            r5 = r6.bind(r7)(r5);
                            _fun2790_ip = 276; continue _fun2790;
case 219: // try_start_2
                            r8 = r4.Reflect;
                            r7 = r8.construct;
                            r6 = r2;
                            r5 = new Array(0);
                            r5 = r7.bind(r8)(r6, r5);
case 243: // try_end2
                            _fun2790_ip = 247; continue _fun2790;
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
                            _fun2790_ip = 311; continue _fun2790;
case 278: // catch_target3
                            CatchBlockStart(arg_register=2);
                            r0 = r2;
                            if(!r2) { _fun2790_ip = 311; continue _fun2790 }
case 286:
                            r2 = r1;
                            if(!r2) { _fun2790_ip = 311; continue _fun2790 }
case 292:
                            r2 = r0;
                            r2 = r2.stack;
                            r3 = 'string';
                            r2 = typeof r2;
                            if(!(r3 !== r2)) { _fun2790_ip = 321; continue _fun2790 }
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
                    if(!r9) { _fun2789_ip = 163; continue _fun2789 }
case 155:
                    r9 = r12;
                    r8 = r9.configurable;
case 163:
                    if(!r8) { _fun2789_ip = 199; continue _fun2789 }
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
                    if(!r8) { _fun2789_ip = 721; continue _fun2789 }
case 234:
                    r8 = r15;
                    if(!r8) { _fun2789_ip = 721; continue _fun2789 }
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
                    if(!(r10 < r8)) { _fun2789_ip = 358; continue _fun2789 }
case 289:
                    r15 = r7;
                    r8 = r5;
                    r15 = r15[r8];
                    r8 = r15.includes;
                    r8 = r8.bind(r15)(r14);
                    if(r8) { _fun2789_ip = 358; continue _fun2789 }
case 313:
                    r8 = r5;
                    r15 = r8 + 1;
                    r5 = r15;
                    r8 = r7;
                    r8 = r8.length;
                    if(!(r15 < r8)) { _fun2789_ip = 358; continue _fun2789 }
case 334:
                    r15 = r7;
                    r8 = r5;
                    r15 = r15[r8];
                    r8 = r15.includes;
                    r8 = r8.bind(r15)(r14);
                    if(!r8) { _fun2789_ip = 313; continue _fun2789 }
case 358:
                    r15 = r12;
                    r8 = r13;
                    r8 = r8.length;
                    if(!(r15 < r8)) { _fun2789_ip = 442; continue _fun2789 }
case 373:
                    r15 = r13;
                    r8 = r12;
                    r15 = r15[r8];
                    r8 = r15.includes;
                    r8 = r8.bind(r15)(r14);
                    if(r8) { _fun2789_ip = 442; continue _fun2789 }
case 397:
                    r8 = r12;
                    r15 = r8 + 1;
                    r12 = r15;
                    r8 = r13;
                    r8 = r8.length;
                    if(!(r15 < r8)) { _fun2789_ip = 442; continue _fun2789 }
case 418:
                    r15 = r13;
                    r8 = r12;
                    r15 = r15[r8];
                    r8 = r15.includes;
                    r8 = r8.bind(r15)(r14);
                    if(!r8) { _fun2789_ip = 397; continue _fun2789 }
case 442:
                    r14 = r5;
                    r8 = r7;
                    r8 = r8.length;
                    if(!(r14 !== r8)) { _fun2789_ip = 472; continue _fun2789 }
case 457:
                    r14 = r12;
                    r8 = r13;
                    r8 = r8.length;
                    if(!(r14 === r8)) { _fun2789_ip = 578; continue _fun2789 }
case 472:
                    r8 = r7;
                    r8 = r8.length;
                    r8 = r8 - r9;
                    r5 = r8;
                    r14 = r13;
                    r14 = r14.length;
                    r12 = r14 - r9;
                    if(!(r9 <= r8)) { _fun2789_ip = 578; continue _fun2789 }
case 503:
                    r8 = r12;
                    if(!(r10 <= r8)) { _fun2789_ip = 578; continue _fun2789 }
case 510:
                    r14 = r7;
                    r8 = r5;
                    r14 = r14[r8];
                    r15 = r13;
                    r8 = r12;
                    r8 = r15[r8];
                    if(!(r14 !== r8)) { _fun2789_ip = 578; continue _fun2789 }
case 534:
                    r8 = r12;
                    r12 = r8 - 1;
                    r8 = r5;
                    if(!(r9 <= r8)) { _fun2789_ip = 578; continue _fun2789 }
case 547:
                    r8 = r12;
                    if(!(r10 <= r8)) { _fun2789_ip = 578; continue _fun2789 }
case 554:
                    r14 = r7;
                    r8 = r5;
                    r14 = r14[r8];
                    r15 = r13;
                    r8 = r12;
                    r8 = r15[r8];
                    if(r14 !== r8) { _fun2789_ip = 534; continue _fun2789 }
case 578:
                    r8 = r5;
                    if(!(r9 <= r8)) { _fun2789_ip = 721; continue _fun2789 }
case 588:
                    r8 = r12;
                    if(!(r10 <= r8)) { _fun2789_ip = 721; continue _fun2789 }
case 598:
                    r14 = r7;
                    r8 = r5;
                    r14 = r14[r8];
                    r15 = r13;
                    r8 = r12;
                    r8 = r15[r8];
                    if(!(r14 === r8)) { _fun2789_ip = 650; continue _fun2789 }
case 622:
                    r8 = r5;
                    r8 = r8 - 1;
                    r5 = r8;
                    r14 = r12;
                    r12 = r14 - 1;
                    if(!(r9 <= r8)) { _fun2789_ip = 721; continue _fun2789 }
case 641:
                    r8 = r12;
                    if(r10 <= r8) { _fun2789_ip = 598; continue _fun2789 }
case 648:
                    _fun2789_ip = 721; continue _fun2789;
case 650:
                    r8 = r5;
                    if(!(r9 === r8)) { _fun2789_ip = 664; continue _fun2789 }
case 657:
                    r8 = r12;
                    if(!(r9 !== r8)) { _fun2789_ip = 721; continue _fun2789 }
case 664:
                    r8 = r5;
                    r5 = r8 - 1;
                    r8 = r12;
                    r8 = r8 - 1;
                    r12 = r8;
                    if(!(!(r10 > r8))) { _fun2789_ip = 800; continue _fun2789 }
case 683:
                    r14 = r7;
                    r8 = r5;
                    r14 = r14[r8];
                    r15 = r13;
                    r8 = r12;
                    r8 = r15[r8];
                    if(!(r14 === r8)) { _fun2789_ip = 800; continue _fun2789 }
case 707:
                    r8 = r5;
                    if(!(r9 <= r8)) { _fun2789_ip = 721; continue _fun2789 }
case 714:
                    r8 = r12;
                    if(r10 <= r8) { _fun2789_ip = 664; continue _fun2789 }
case 721: // try_end0
                    r8 = false;
                    _closure1_slot24 = r8;
                    r9 = r2.Error;
                    r8 = r1;
                    r9['prepareStackTrace'] = r8;
                    r10 = r3;
                    r8 = '';
                    r9 = r8;
                    if(!r10) { _fun2789_ip = 780; continue _fun2789 }
case 755:
                    r12 = r3;
                    r12 = r12.displayName;
                    r10 = r12;
                    if(r12) { _fun2789_ip = 777; continue _fun2789 }
case 769:
                    r12 = r3;
                    r10 = r12.name;
case 777:
                    r9 = r10;
case 780:
                    r1 = r9;
                    if(!r9) { _fun2789_ip = 798; continue _fun2789 }
case 786:
                    r10 = _closure1_slot178;
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
                    if(!r6) { _fun2789_ip = 859; continue _fun2789 }
case 841:
                    r8 = r0;
                    r7 = r8.includes;
                    r6 = '<anonymous>';
                    r5 = r7.bind(r8)(r6);
case 859:
                    if(!r5) { _fun2789_ip = 885; continue _fun2789 }
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
            var _closure1_slot179 = r0;
            r0 = function(a0) { // Original name: describeFiber, environment: r5
                _fun2794: for(var _fun2794_ip = 0; ; ) switch(_fun2794_ip) {
case 0:
                    r0 = a0;
                    r1 = r0.tag;
                    SwitchImm(value_reg=1, jump_table_address=191, default_jump_address=185, unsigned_min_value=0, unsigned_max_value=27) // Switch table: [80, 26, 185, 185, 185, 164, 185, 185, 185, 185, 185, 50, 185, 124, 185, 80, 144, 185, 185, 104, 185, 185, 185, 185, 185, 185, 164, 164];
case 26:
                    r4 = _closure1_slot179;
                    r3 = r0.type;
                    r2 = undefined;
                    r1 = true;
                    r1 = r4.bind(r2)(r3, r1);
                    return r1;
case 50:
                    r4 = _closure1_slot179;
                    r1 = r0.type;
                    r3 = r1.render;
                    r2 = undefined;
                    r1 = false;
                    r1 = r4.bind(r2)(r3, r1);
                    return r1;
case 80:
                    r4 = _closure1_slot179;
                    r3 = r0.type;
                    r2 = undefined;
                    r1 = false;
                    r1 = r4.bind(r2)(r3, r1);
                    return r1;
case 104:
                    r3 = _closure1_slot178;
                    r2 = undefined;
                    r1 = 'SuspenseList';
                    r1 = r3.bind(r2)(r1);
                    return r1;
case 124:
                    r3 = _closure1_slot178;
                    r2 = undefined;
                    r1 = 'Suspense';
                    r1 = r3.bind(r2)(r1);
                    return r1;
case 144:
                    r3 = _closure1_slot178;
                    r2 = undefined;
                    r1 = 'Lazy';
                    r1 = r3.bind(r2)(r1);
                    return r1;
case 164:
                    r2 = _closure1_slot178;
                    r1 = r0.type;
                    r0 = undefined;
                    r0 = r2.bind(r0)(r1);
                    return r0;
case 185:
                    r0 = '';
                    return r0;
                }
            };
            var _closure1_slot180 = r0;
            r0 = function(a0) { // Original name: getStackByFiberInDevAndProd, environment: r5
                _fun2795: for(var _fun2795_ip = 0; ; ) switch(_fun2795_ip) {
case 0:
                    r4 = a0;
                    r3 = undefined;
                    r0 = undefined;
case 7: // try_start_0
                    r0 = '';
case 14:
                    r6 = r0;
                    r5 = _closure1_slot180;
                    r1 = r4;
                    r5 = r5.bind(r3)(r1);
                    r0 = r6 + r5;
                    r1 = r1.return;
                    r4 = r1;
                    if(r1) { _fun2795_ip = 14; continue _fun2795 }
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
            var _closure1_slot181 = r0;
            r0 = function(a0) { // Original name: getComponentNameFromType, environment: r5
                _fun2796: for(var _fun2796_ip = 0; ; ) switch(_fun2796_ip) {
case 0:
                    r2 = a0;
                    r3 = r2;
                    r5 = undefined;
                    r1 = undefined;
                    r0 = null;
                    if(!(r0 != r2)) { _fun2796_ip = 514; continue _fun2796 }
case 19:
                    r2 = r3;
                    r4 = 'function';
                    r2 = typeof r2;
                    if(!(r4 !== r2)) { _fun2796_ip = 467; continue _fun2796 }
case 36:
                    r2 = r3;
                    r4 = 'string';
                    r2 = typeof r2;
                    if(!(r4 !== r2)) { _fun2796_ip = 462; continue _fun2796 }
case 53:
                    r6 = r3;
                    r4 = _closure1_slot7;
                    if(!(r4 !== r6)) { _fun2796_ip = 456; continue _fun2796 }
case 70:
                    r4 = _closure1_slot6;
                    if(!(r4 !== r6)) { _fun2796_ip = 450; continue _fun2796 }
case 81:
                    r4 = _closure1_slot9;
                    if(!(r4 !== r6)) { _fun2796_ip = 444; continue _fun2796 }
case 92:
                    r4 = _closure1_slot8;
                    if(!(r4 !== r6)) { _fun2796_ip = 438; continue _fun2796 }
case 103:
                    r4 = _closure1_slot14;
                    if(!(r4 !== r6)) { _fun2796_ip = 432; continue _fun2796 }
case 114:
                    r4 = _closure1_slot15;
                    if(!(r4 !== r6)) { _fun2796_ip = 426; continue _fun2796 }
case 125:
                    r4 = r3;
                    r6 = 'object';
                    r4 = typeof r4;
                    if(!(r6 === r4)) { _fun2796_ip = 232; continue _fun2796 }
case 139:
                    r4 = r3;
                    r6 = r4["$$typeof"];
                    r4 = _closure1_slot12;
                    if(!(r4 !== r6)) { _fun2796_ip = 401; continue _fun2796 }
case 158:
                    r4 = _closure1_slot11;
                    if(!(r4 !== r6)) { _fun2796_ip = 370; continue _fun2796 }
case 169:
                    r4 = _closure1_slot13;
                    if(!(r4 !== r6)) { _fun2796_ip = 285; continue _fun2796 }
case 177:
                    r4 = _closure1_slot16;
                    if(!(r4 !== r6)) { _fun2796_ip = 234; continue _fun2796 }
case 185:
                    r4 = _closure1_slot17;
                    if(!(r4 === r6)) { _fun2796_ip = 232; continue _fun2796 }
case 193:
                    r4 = r3;
                    r1 = r4._payload;
                    r3 = r4._init;
case 208: // try_start_0
                    r6 = _closure1_slot182;
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
                    if(r4) { _fun2796_ip = 247; continue _fun2796 }
case 245:
                    r4 = null;
case 247:
                    r1 = r4;
                    if(!(r0 === r4)) { _fun2796_ip = 280; continue _fun2796 }
case 254:
                    r4 = _closure1_slot182;
                    r2 = r3;
                    r2 = r2.type;
                    r2 = r4.bind(r5)(r2);
                    if(r2) { _fun2796_ip = 278; continue _fun2796 }
case 274:
                    r2 = 'Memo';
case 278:
                    _fun2796_ip = 283; continue _fun2796;
case 280:
                    r2 = r1;
case 283:
                    return r2;
case 285:
                    r2 = r3;
                    r1 = r2.render;
                    r2 = r2.displayName;
                    r3 = r2;
                    if(r2) { _fun2796_ip = 365; continue _fun2796 }
case 305:
                    r2 = r1;
                    r4 = r2.displayName;
                    if(r4) { _fun2796_ip = 321; continue _fun2796 }
case 316:
                    r4 = r1.name;
case 321:
                    if(r4) { _fun2796_ip = 328; continue _fun2796 }
case 324:
                    r4 = '';
case 328:
                    r3 = r4;
                    r1 = 'ForwardRef';
                    r2 = '';
                    if(!(r2 !== r4)) { _fun2796_ip = 362; continue _fun2796 }
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
                    if(r2) { _fun2796_ip = 391; continue _fun2796 }
case 387:
                    r2 = 'Context';
case 391:
                    r1 = '.Consumer';
                    r1 = r2 + r1;
                    return r1;
case 401:
                    r1 = r3;
                    r2 = r1.displayName;
                    if(r2) { _fun2796_ip = 416; continue _fun2796 }
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
                    if(!(r4 !== r2)) { _fun2796_ip = 512; continue _fun2796 }
case 488:
                    r2 = r3;
                    r2 = r2.displayName;
                    if(r2) { _fun2796_ip = 504; continue _fun2796 }
case 499:
                    r2 = r3.name;
case 504:
                    if(r2) { _fun2796_ip = 509; continue _fun2796 }
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
            var _closure1_slot182 = r0;
            r0 = function(a0, a1, a2) { // Original name: executeDispatch, environment: r5
                _fun2797: for(var _fun2797_ip = 0; ; ) switch(_fun2797_ip) {
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
                    _fun2797_ip = 64; continue _fun2797;
case 45: // catch_target0
                    CatchBlockStart(arg_register=2);
                    r4 = _closure1_slot26;
                    if(r4) { _fun2797_ip = 64; continue _fun2797 }
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
            var _closure1_slot183 = r0;
            r0 = function(a0) { // Original name: executeDirectDispatch, environment: r5
                _fun2798: for(var _fun2798_ip = 0; ; ) switch(_fun2798_ip) {
case 0:
                    r3 = a0;
                    r4 = r3._dispatchListeners;
                    r6 = r3._dispatchInstances;
                    r0 = _closure1_slot2;
                    r2 = undefined;
                    r0 = r0.bind(r2)(r4);
                    if(r0) { _fun2798_ip = 82; continue _fun2798 }
case 30:
                    r1 = null;
                    r0 = null;
                    if(!r4) { _fun2798_ip = 46; continue _fun2798 }
case 37:
                    r5 = _closure1_slot30;
                    r0 = r5.bind(r2)(r6);
case 46:
                    r3['currentTarget'] = r0;
                    r0 = null;
                    if(!r4) { _fun2798_ip = 62; continue _fun2798 }
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
            var _closure1_slot184 = r0;
            r0 = function() { // Original name: functionThatReturnsTrue, environment: r5
                r0 = true;
                return r0;
            };
            var _closure1_slot185 = r0;
            r50 = function() { // Original name: functionThatReturnsFalse, environment: r5
                r0 = false;
                return r0;
            };
            var _closure1_slot186 = r50;
            r45 = function(a0, a1, a2, a3) { // Original name: SyntheticEvent, environment: r5
                _fun2801: for(var _fun2801_ip = 0; ; ) switch(_fun2801_ip) {
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
                        if(!r13) { _fun2801_ip = 75; continue _fun2801 }
case 100:
                        r13 = r10[r15];
                        if(r13) { _fun2801_ip = 135; continue _fun2801 }
case 107:
                        if(!(r2 !== r15)) { _fun2801_ip = 124; continue _fun2801 }
case 111:
                        r14 = r1[r15];
                        r0[r15] = r14;
                        r12 = r13;
                        _fun2801_ip = 75; continue _fun2801;
case 124:
                        r0['target'] = r11;
                        r12 = r13;
                        _fun2801_ip = 75; continue _fun2801;
case 135:
                        r14 = r13.bind(r4)(r1);
                        r0[r15] = r14;
                        r12 = r13;
                        _fun2801_ip = 75; continue _fun2801;
                    }
case 149:
                    r2 = r1.defaultPrevented;
                    if(!(r3 == r2)) { _fun2801_ip = 173; continue _fun2801 }
case 159:
                    r3 = r1.returnValue;
                    r2 = false;
                    r2 = r2 === r3;
                    _fun2801_ip = 179; continue _fun2801;
case 173:
                    r2 = r1.defaultPrevented;
case 179:
                    if(r2) { _fun2801_ip = 191; continue _fun2801 }
case 185:
                    r2 = _closure1_slot186;
                    _fun2801_ip = 195; continue _fun2801;
case 191:
                    r2 = _closure1_slot185;
case 195:
                    r0['isDefaultPrevented'] = r2;
                    r1 = _closure1_slot186;
                    r0['isPropagationStopped'] = r1;
                    return r0;
                }
            };
            var _closure1_slot187 = r45;
            r0 = function(a0, a1, a2, a3) { // Original name: createOrGetPooledEvent, environment: r5
                _fun2802: for(var _fun2802_ip = 0; ; ) switch(_fun2802_ip) {
case 0:
                    r6 = a0;
                    r5 = a1;
                    r4 = a2;
                    r3 = a3;
                    r2 = this;
                    r0 = r2.eventPool;
                    r0 = r0.length;
                    if(r0) { _fun2802_ip = 63; continue _fun2802 }
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
            var _closure1_slot188 = r0;
            r0 = function(a0) { // Original name: releasePooledEvent, environment: r5
                _fun2803: for(var _fun2803_ip = 0; ; ) switch(_fun2803_ip) {
case 0:
                    r2 = a0;
                    r0 = this;
                    r1 = r2 instanceof r0;
                    if(r1) { _fun2803_ip = 34; continue _fun2803 }
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
                    if(!(r1 > r3)) { _fun2803_ip = 78; continue _fun2803 }
case 62:
                    r1 = r0.eventPool;
                    r0 = r1.push;
                    r0 = r0.bind(r1)(r2);
case 78:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot189 = r0;
            r13 = function(a0) { // Original name: addEventPoolingTo, environment: r5
                r1 = a0;
                r2 = _closure1_slot188;
                r1['getPooled'] = r2;
                r2 = new Array(0);
                r1['eventPool'] = r2;
                r0 = _closure1_slot189;
                r1['release'] = r0;
                r0 = undefined;
                return r0;
            };
            var _closure1_slot190 = r13;
            r0 = function(a0) { // Original name: isStartish, environment: r5
                r1 = 'topTouchStart';
                r0 = a0;
                r0 = r1 === r0;
                return r0;
            };
            var _closure1_slot191 = r0;
            r0 = function(a0) { // Original name: isMoveish, environment: r5
                r1 = 'topTouchMove';
                r0 = a0;
                r0 = r1 === r0;
                return r0;
            };
            var _closure1_slot192 = r0;
            r0 = function(a0) { // Original name: timestampForTouch, environment: r5
                _fun2807: for(var _fun2807_ip = 0; ; ) switch(_fun2807_ip) {
case 0:
                    r1 = a0;
                    r0 = r1.timeStamp;
                    if(r0) { _fun2807_ip = 18; continue _fun2807 }
case 12:
                    r0 = r1.timestamp;
case 18:
                    return r0;
                }
            };
            var _closure1_slot193 = r0;
            r0 = function(a0) { // Original name: getTouchIdentifier, environment: r5
                _fun2808: for(var _fun2808_ip = 0; ; ) switch(_fun2808_ip) {
case 0:
                    r0 = a0;
                    r0 = r0.identifier;
                    r1 = null;
                    if(!(r1 != r0)) { _fun2808_ip = 17; continue _fun2808 }
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
            var _closure1_slot194 = r0;
            r0 = function(a0) { // Original name: recordTouchStart, environment: r5
                _fun2809: for(var _fun2809_ip = 0; ; ) switch(_fun2809_ip) {
case 0:
                    r3 = a0;
                    r2 = _closure1_slot194;
                    r0 = undefined;
                    r7 = r2.bind(r0)(r3);
                    r2 = _closure1_slot32;
                    r4 = r2[r7];
                    r2 = true;
                    if(r4) { _fun2809_ip = 141; continue _fun2809 }
case 30:
                    r6 = {};
                    r6['touchActive'] = r2;
                    r5 = r3.pageX;
                    r6['startPageX'] = r5;
                    r5 = r3.pageY;
                    r6['startPageY'] = r5;
                    r5 = _closure1_slot193;
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
                    _fun2809_ip = 250; continue _fun2809;
case 141:
                    r4['touchActive'] = r2;
                    r2 = r3.pageX;
                    r4['startPageX'] = r2;
                    r2 = r3.pageY;
                    r4['startPageY'] = r2;
                    r2 = _closure1_slot193;
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
                    r1 = _closure1_slot193;
                    r1 = r1.bind(r0)(r3);
                    r2['mostRecentTimeStamp'] = r1;
                    return r0;
                }
            };
            var _closure1_slot195 = r0;
            r0 = function(a0) { // Original name: recordTouchMove, environment: r5
                _fun2810: for(var _fun2810_ip = 0; ; ) switch(_fun2810_ip) {
case 0:
                    r3 = a0;
                    r4 = _closure1_slot32;
                    r1 = _closure1_slot194;
                    r0 = undefined;
                    r1 = r1.bind(r0)(r3);
                    r5 = r4[r1];
                    if(!r5) { _fun2810_ip = 124; continue _fun2810 }
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
                    r1 = _closure1_slot193;
                    r4 = r1.bind(r0)(r3);
                    r5['currentTimeStamp'] = r4;
                    r2 = _closure1_slot33;
                    r1 = r1.bind(r0)(r3);
                    r2['mostRecentTimeStamp'] = r1;
case 124:
                    return r0;
                }
            };
            var _closure1_slot196 = r0;
            r0 = function(a0) { // Original name: recordTouchEnd, environment: r5
                _fun2811: for(var _fun2811_ip = 0; ; ) switch(_fun2811_ip) {
case 0:
                    r3 = a0;
                    r4 = _closure1_slot32;
                    r1 = _closure1_slot194;
                    r0 = undefined;
                    r1 = r1.bind(r0)(r3);
                    r5 = r4[r1];
                    if(!r5) { _fun2811_ip = 124; continue _fun2811 }
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
                    r1 = _closure1_slot193;
                    r4 = r1.bind(r0)(r3);
                    r5['currentTimeStamp'] = r4;
                    r2 = _closure1_slot33;
                    r1 = r1.bind(r0)(r3);
                    r2['mostRecentTimeStamp'] = r1;
case 124:
                    return r0;
                }
            };
            var _closure1_slot197 = r0;
            r0 = function(a0, a1) { // Original name: accumulate, environment: r5
                _fun2812: for(var _fun2812_ip = 0; ; ) switch(_fun2812_ip) {
case 0:
                    r4 = a0;
                    r3 = a1;
                    r1 = null;
                    if(!(r1 != r3)) { _fun2812_ip = 97; continue _fun2812 }
case 12:
                    r0 = r3;
                    if(!(r1 != r4)) { _fun2812_ip = 95; continue _fun2812 }
case 19:
                    r5 = _closure1_slot2;
                    r2 = undefined;
                    r5 = r5.bind(r2)(r4);
                    if(r5) { _fun2812_ip = 82; continue _fun2812 }
case 36:
                    r1 = _closure1_slot2;
                    r1 = r1.bind(r2)(r3);
                    if(r1) { _fun2812_ip = 62; continue _fun2812 }
case 48:
                    r1 = new Array(2);
                    r1[0] = r4;
                    r1[1] = r3;
                    _fun2812_ip = 80; continue _fun2812;
case 62:
                    r5 = new Array(1);
                    r5[0] = r4;
                    r2 = r5.concat;
                    r1 = r2.bind(r5)(r3);
case 80:
                    _fun2812_ip = 92; continue _fun2812;
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
            var _closure1_slot198 = r0;
            r0 = function(a0, a1) { // Original name: accumulateInto, environment: r5
                _fun2813: for(var _fun2813_ip = 0; ; ) switch(_fun2813_ip) {
case 0:
                    r1 = a0;
                    r0 = a1;
                    r2 = null;
                    if(!(r2 != r0)) { _fun2813_ip = 109; continue _fun2813 }
case 12:
                    if(!(r2 != r1)) { _fun2813_ip = 107; continue _fun2813 }
case 16:
                    r3 = _closure1_slot2;
                    r4 = undefined;
                    r3 = r3.bind(r4)(r1);
                    r2 = _closure1_slot2;
                    r2 = r2.bind(r4)(r0);
                    if(r3) { _fun2813_ip = 79; continue _fun2813 }
case 42:
                    if(r2) { _fun2813_ip = 59; continue _fun2813 }
case 45:
                    r3 = new Array(2);
                    r3[0] = r1;
                    r3[1] = r0;
                    _fun2813_ip = 77; continue _fun2813;
case 59:
                    r5 = new Array(1);
                    r5[0] = r1;
                    r4 = r5.concat;
                    r3 = r4.bind(r5)(r0);
case 77:
                    return r3;
case 79:
                    r3 = r1.push;
                    if(r2) { _fun2813_ip = 94; continue _fun2813 }
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
            var _closure1_slot199 = r0;
            r0 = function(a0, a1, a2) { // Original name: forEachAccumulated, environment: r5
                _fun2814: for(var _fun2814_ip = 0; ; ) switch(_fun2814_ip) {
case 0:
                    r3 = a0;
                    r2 = a1;
                    r0 = global;
                    r1 = r0.Array;
                    r0 = r1.isArray;
                    r0 = r0.bind(r1)(r3);
                    if(r0) { _fun2814_ip = 45; continue _fun2814 }
case 27:
                    if(!r3) { _fun2814_ip = 58; continue _fun2814 }
case 30:
                    r1 = r2.call;
                    r0 = undefined;
                    r0 = r1.bind(r2)(r0, r3);
                    _fun2814_ip = 58; continue _fun2814;
case 45:
                    r1 = r3.forEach;
                    r0 = undefined;
                    r0 = r1.bind(r3)(r2, r0);
case 58:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot200 = r0;
            r0 = function(a0, a1) { // Original name: changeResponder, environment: r5
                _fun2815: for(var _fun2815_ip = 0; ; ) switch(_fun2815_ip) {
case 0:
                    r4 = a0;
                    r3 = _closure1_slot36;
                    _closure1_slot36 = r4;
                    r1 = _closure1_slot39;
                    r2 = r1.GlobalResponderHandler;
                    r1 = null;
                    if(!(r1 !== r2)) { _fun2815_ip = 56; continue _fun2815 }
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
            var _closure1_slot201 = r0;
            r0 = function(a0) { // Original name: getParent$1, environment: r5
                _fun2816: for(var _fun2816_ip = 0; ; ) switch(_fun2816_ip) {
case 0:
                    r3 = a0;
                    r2 = 5;
case 6:
                    r1 = r3.return;
                    if(!r1) { _fun2816_ip = 26; continue _fun2816 }
case 14:
                    r0 = r1.tag;
                    r3 = r1;
                    if(r2 !== r0) { _fun2816_ip = 6; continue _fun2816 }
case 26:
                    r0 = null;
                    if(!r1) { _fun2816_ip = 34; continue _fun2816 }
case 31:
                    r0 = r1;
case 34:
                    return r0;
                }
            };
            var _closure1_slot202 = r0;
            r0 = function(a0, a1, a2) { // Original name: traverseTwoPhase$1, environment: r5
                _fun2817: for(var _fun2817_ip = 0; ; ) switch(_fun2817_ip) {
case 0:
                    r2 = a0;
                    r6 = a1;
                    r5 = a2;
                    r4 = new Array(0);
                    r0 = undefined;
                    if(!r2) { _fun2817_ip = 43; continue _fun2817 }
case 21:
                    r3 = r4.push;
                    r3 = r3.bind(r4)(r2);
                    r3 = _closure1_slot202;
                    r2 = r3.bind(r0)(r2);
                    if(r2) { _fun2817_ip = 21; continue _fun2817 }
case 43:
                    r1 = r4.length;
                    r1 = parseFloat(r1);
                    r7 = r1 - 1;
                    r2 = 'captured';
                    r3 = 0;
                    if(!(r3 < r1)) { _fun2817_ip = 85; continue _fun2817 }
case 64:
                    r1 = r4[r7];
                    r1 = r6.bind(r0)(r1, r2, r5);
                    r1 = parseFloat(r7);
                    r7 = r1 - 1;
                    if(r3 < r1) { _fun2817_ip = 64; continue _fun2817 }
case 85:
                    r1 = r4.length;
                    r1 = r3 < r1;
                    r2 = 'bubbled';
                    r3 = 0;
                    if(!r1) { _fun2817_ip = 126; continue _fun2817 }
case 103:
                    r1 = r4[r3];
                    r1 = r6.bind(r0)(r1, r2, r5);
                    r3 = r3 + 1;
                    r1 = r4.length;
                    if(r3 < r1) { _fun2817_ip = 103; continue _fun2817 }
case 126:
                    return r0;
                }
            };
            var _closure1_slot203 = r0;
            r0 = function(a0, a1) { // Original name: getListener$1, environment: r5
                _fun2818: for(var _fun2818_ip = 0; ; ) switch(_fun2818_ip) {
case 0:
                    r5 = a1;
                    r0 = a0;
                    r2 = r0.stateNode;
                    r0 = null;
                    if(!(r0 !== r2)) { _fun2818_ip = 100; continue _fun2818 }
case 17:
                    r1 = _closure1_slot28;
                    r3 = undefined;
                    r1 = r1.bind(r3)(r2);
                    if(!(r0 !== r1)) { _fun2818_ip = 98; continue _fun2818 }
case 35:
                    r1 = r1[r5];
                    if(!r1) { _fun2818_ip = 53; continue _fun2818 }
case 42:
                    r4 = typeof r1;
                    r2 = 'function';
                    if(!(r2 === r4)) { _fun2818_ip = 55; continue _fun2818 }
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
            var _closure1_slot204 = r0;
            r0 = function(a0, a1, a2) { // Original name: accumulateDirectionalDispatches$1, environment: r5
                _fun2819: for(var _fun2819_ip = 0; ; ) switch(_fun2819_ip) {
case 0:
                    r4 = a0;
                    r2 = a2;
                    r5 = _closure1_slot204;
                    r0 = r2.dispatchConfig;
                    r3 = r0.phasedRegistrationNames;
                    r0 = a1;
                    r3 = r3[r0];
                    r0 = undefined;
                    r5 = r5.bind(r0)(r4, r3);
                    if(!r5) { _fun2819_ip = 79; continue _fun2819 }
case 41:
                    r3 = _closure1_slot199;
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
            var _closure1_slot205 = r0;
            r0 = function(a0) { // Original name: accumulateDirectDispatchesSingle$1, environment: r5
                _fun2820: for(var _fun2820_ip = 0; ; ) switch(_fun2820_ip) {
case 0:
                    r1 = a0;
                    if(!r1) { _fun2820_ip = 110; continue _fun2820 }
case 6:
                    r0 = r1.dispatchConfig;
                    r0 = r0.registrationName;
                    if(!r0) { _fun2820_ip = 110; continue _fun2820 }
case 19:
                    r4 = r1._targetInst;
                    if(!r4) { _fun2820_ip = 110; continue _fun2820 }
case 28:
                    if(!r1) { _fun2820_ip = 110; continue _fun2820 }
case 31:
                    r0 = r1.dispatchConfig;
                    r0 = r0.registrationName;
                    if(!r0) { _fun2820_ip = 110; continue _fun2820 }
case 44:
                    r5 = _closure1_slot204;
                    r2 = r1.dispatchConfig;
                    r2 = r2.registrationName;
                    r3 = undefined;
                    r5 = r5.bind(r3)(r4, r2);
                    if(!r5) { _fun2820_ip = 110; continue _fun2820 }
case 72:
                    r2 = _closure1_slot199;
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
            var _closure1_slot206 = r0;
            r0 = function(a0) { // Original name: accumulateTwoPhaseDispatchesSingleSkipTarget, environment: r5
                _fun2821: for(var _fun2821_ip = 0; ; ) switch(_fun2821_ip) {
case 0:
                    r4 = a0;
                    if(!r4) { _fun2821_ip = 64; continue _fun2821 }
case 6:
                    r0 = r4.dispatchConfig;
                    r0 = r0.phasedRegistrationNames;
                    if(!r0) { _fun2821_ip = 64; continue _fun2821 }
case 19:
                    r2 = r4._targetInst;
                    r3 = null;
                    if(!r2) { _fun2821_ip = 44; continue _fun2821 }
case 30:
                    r1 = _closure1_slot202;
                    r0 = undefined;
                    r3 = r1.bind(r0)(r2);
case 44:
                    r2 = _closure1_slot203;
                    r1 = _closure1_slot205;
                    r0 = undefined;
                    r0 = r2.bind(r0)(r3, r1, r4);
case 64:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot207 = r0;
            r0 = function(a0) { // Original name: accumulateTwoPhaseDispatchesSingle$1, environment: r5
                _fun2822: for(var _fun2822_ip = 0; ; ) switch(_fun2822_ip) {
case 0:
                    r4 = a0;
                    r0 = r4;
                    if(!r0) { _fun2822_ip = 19; continue _fun2822 }
case 9:
                    r1 = r4.dispatchConfig;
                    r0 = r1.phasedRegistrationNames;
case 19:
                    if(!r0) { _fun2822_ip = 48; continue _fun2822 }
case 22:
                    r3 = _closure1_slot203;
                    r2 = r4._targetInst;
                    r1 = _closure1_slot205;
                    r0 = undefined;
                    r0 = r3.bind(r0)(r2, r1, r4);
case 48:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot208 = r0;
            r48 = function() { // Original name: recomputePluginOrdering, environment: r5
                _fun2823: for(var _fun2823_ip = 0; ; ) switch(_fun2823_ip) {
case 0:
                    r0 = _closure1_slot40;
                    if(!r0) { _fun2823_ip = 490; continue _fun2823 }
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
                        if(!(!(r14 >= r8))) { _fun2823_ip = 459; continue _fun2823 }
case 100:
                        r7 = _closure1_slot42;
                        r7 = r7[r8];
                        r25 = r6;
                        r24 = r5;
                        r23 = r1;
                        r4 = r0;
                        if(r7) { _fun2823_ip = 44; continue _fun2823 }
case 123:
                        r7 = r13.extractEvents;
                        if(r7) { _fun2823_ip = 163; continue _fun2823 }
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
                        if(r11 === undefined) { _fun2823_ip = 44; continue _fun2823 }
case 215:
                        r25 = r6;
                        r24 = r5;
                        r23 = r1;
                        r4 = r0;
                        ForInLoopNextIter(next_value_register=7, obj_props_register=11, obj_register=10, iter_index_register=9, iter_size_register=8);
                        if(r7 === undefined) { _fun2823_ip = 44; continue _fun2823 }
case 239:
                        r4 = r7;
                        r25 = r12[r4];
                        r24 = _closure1_slot43;
                        r23 = r24.hasOwnProperty;
                        r23 = r23.bind(r24)(r4);
                        if(r23) { _fun2823_ip = 428; continue _fun2823 }
case 266:
                        r23 = _closure1_slot43;
                        r23[r4] = r25;
                        r24 = r25.phasedRegistrationNames;
                        if(r24) { _fun2823_ip = 311; continue _fun2823 }
case 282:
                        r26 = r25.registrationName;
                        r23 = false;
                        if(!r26) { _fun2823_ip = 367; continue _fun2823 }
case 292:
                        r27 = _closure1_slot209;
                        r26 = r25.registrationName;
                        r26 = r27.bind(r2)(r26, r13);
                        r23 = true;
                        _fun2823_ip = 367; continue _fun2823;
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
                            if(!r32) { _fun2823_ip = 324; continue _fun2823 }
case 351:
                            r32 = _closure1_slot209;
                            r31 = r24[r31];
                            r31 = r32.bind(r2)(r31, r13);
                            _fun2823_ip = 324; continue _fun2823;
                        }
case 367:
                        r5 = r23;
                        r6 = r4;
                        r1 = r25;
                        r0 = r24;
                        if(r5) { _fun2823_ip = 215; continue _fun2823 }
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
            r0 = function(a0, a1) { // Original name: publishRegistrationName, environment: r5
                _fun2824: for(var _fun2824_ip = 0; ; ) switch(_fun2824_ip) {
case 0:
                    r1 = a0;
                    r2 = _closure1_slot44;
                    r2 = r2[r1];
                    if(r2) { _fun2824_ip = 32; continue _fun2824 }
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
            var _closure1_slot209 = r0;
            r0 = function(a0, a1) { // Original name: getListener, environment: r5
                _fun2825: for(var _fun2825_ip = 0; ; ) switch(_fun2825_ip) {
case 0:
                    r5 = a1;
                    r0 = a0;
                    r2 = r0.stateNode;
                    r0 = null;
                    if(!(r0 !== r2)) { _fun2825_ip = 100; continue _fun2825 }
case 17:
                    r1 = _closure1_slot28;
                    r3 = undefined;
                    r1 = r1.bind(r3)(r2);
                    if(!(r0 !== r1)) { _fun2825_ip = 98; continue _fun2825 }
case 35:
                    r1 = r1[r5];
                    if(!r1) { _fun2825_ip = 53; continue _fun2825 }
case 42:
                    r4 = typeof r1;
                    r2 = 'function';
                    if(!(r2 === r4)) { _fun2825_ip = 55; continue _fun2825 }
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
            var _closure1_slot210 = r0;
            r0 = function(a0, a1, a2) { // Original name: accumulateDirectionalDispatches, environment: r5
                _fun2826: for(var _fun2826_ip = 0; ; ) switch(_fun2826_ip) {
case 0:
                    r4 = a0;
                    r2 = a2;
                    r5 = _closure1_slot210;
                    r0 = r2.dispatchConfig;
                    r3 = r0.phasedRegistrationNames;
                    r0 = a1;
                    r3 = r3[r0];
                    r0 = undefined;
                    r5 = r5.bind(r0)(r4, r3);
                    if(!r5) { _fun2826_ip = 79; continue _fun2826 }
case 41:
                    r3 = _closure1_slot199;
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
            var _closure1_slot211 = r0;
            r0 = function(a0, a1, a2, a3) { // Original name: traverseTwoPhase, environment: r5
                _fun2827: for(var _fun2827_ip = 0; ; ) switch(_fun2827_ip) {
case 0:
                    r5 = a0;
                    r4 = a1;
                    r3 = a2;
                    r2 = new Array(0);
                    r0 = 5;
                    if(!r5) { _fun2827_ip = 66; continue _fun2827 }
case 19:
                    r6 = r2.push;
                    r6 = r6.bind(r2)(r5);
                    r8 = r5;
case 32:
                    r7 = r8.return;
                    if(!r7) { _fun2827_ip = 52; continue _fun2827 }
case 40:
                    r6 = r7.tag;
                    r8 = r7;
                    if(r0 !== r6) { _fun2827_ip = 32; continue _fun2827 }
case 52:
                    r6 = null;
                    if(!r7) { _fun2827_ip = 60; continue _fun2827 }
case 57:
                    r6 = r7;
case 60:
                    r5 = r6;
                    if(r5) { _fun2827_ip = 19; continue _fun2827 }
case 66:
                    r0 = r2.length;
                    r5 = parseFloat(r0);
                    r7 = r5 - 1;
                    r0 = undefined;
                    r6 = 'captured';
                    r1 = 0;
                    if(!(r1 < r5)) { _fun2827_ip = 110; continue _fun2827 }
case 89:
                    r5 = r2[r7];
                    r5 = r4.bind(r0)(r5, r6, r3);
                    r5 = parseFloat(r7);
                    r7 = r5 - 1;
                    if(r1 < r5) { _fun2827_ip = 89; continue _fun2827 }
case 110:
                    r5 = a3;
                    if(r5) { _fun2827_ip = 159; continue _fun2827 }
case 116:
                    r5 = r2.length;
                    r5 = r1 < r5;
                    r7 = 'bubbled';
                    r6 = 0;
                    if(!r5) { _fun2827_ip = 174; continue _fun2827 }
case 134:
                    r5 = r2[r6];
                    r5 = r4.bind(r0)(r5, r7, r3);
                    r6 = r6 + 1;
                    r5 = r2.length;
                    if(r6 < r5) { _fun2827_ip = 134; continue _fun2827 }
case 157:
                    _fun2827_ip = 174; continue _fun2827;
case 159:
                    r2 = r2[r1];
                    r1 = 'bubbled';
                    r1 = r4.bind(r0)(r2, r1, r3);
case 174:
                    return r0;
                }
            };
            var _closure1_slot212 = r0;
            r0 = function(a0) { // Original name: accumulateTwoPhaseDispatchesSingle, environment: r5
                _fun2828: for(var _fun2828_ip = 0; ; ) switch(_fun2828_ip) {
case 0:
                    r5 = a0;
                    r0 = r5;
                    if(!r0) { _fun2828_ip = 19; continue _fun2828 }
case 9:
                    r1 = r5.dispatchConfig;
                    r0 = r1.phasedRegistrationNames;
case 19:
                    if(!r0) { _fun2828_ip = 50; continue _fun2828 }
case 22:
                    r4 = _closure1_slot212;
                    r9 = r5._targetInst;
                    r8 = _closure1_slot211;
                    r10 = undefined;
                    r6 = false;
                    r7 = r5;
                    r0 = r10[r4](r9, r8, r7, r6, r5);
case 50:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot213 = r0;
            r0 = function(a0) { // Original name: accumulateDirectDispatchesSingle, environment: r5
                _fun2829: for(var _fun2829_ip = 0; ; ) switch(_fun2829_ip) {
case 0:
                    r1 = a0;
                    if(!r1) { _fun2829_ip = 110; continue _fun2829 }
case 6:
                    r0 = r1.dispatchConfig;
                    r0 = r0.registrationName;
                    if(!r0) { _fun2829_ip = 110; continue _fun2829 }
case 19:
                    r4 = r1._targetInst;
                    if(!r4) { _fun2829_ip = 110; continue _fun2829 }
case 28:
                    if(!r1) { _fun2829_ip = 110; continue _fun2829 }
case 31:
                    r0 = r1.dispatchConfig;
                    r0 = r0.registrationName;
                    if(!r0) { _fun2829_ip = 110; continue _fun2829 }
case 44:
                    r5 = _closure1_slot210;
                    r2 = r1.dispatchConfig;
                    r2 = r2.registrationName;
                    r3 = undefined;
                    r5 = r5.bind(r3)(r4, r2);
                    if(!r5) { _fun2829_ip = 110; continue _fun2829 }
case 72:
                    r2 = _closure1_slot199;
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
            var _closure1_slot214 = r0;
            r14 = function(a0) { // Original name: getInstanceFromTag, environment: r5
                _fun2830: for(var _fun2830_ip = 0; ; ) switch(_fun2830_ip) {
case 0:
                    r2 = _closure1_slot47;
                    r1 = r2.get;
                    r0 = a0;
                    r0 = r1.bind(r2)(r0);
                    if(r0) { _fun2830_ip = 25; continue _fun2830 }
case 23:
                    r0 = null;
case 25:
                    return r0;
                }
            };
            var _closure1_slot215 = r14;
            r0 = function(a0, a1) { // Original name: batchedUpdatesImpl, environment: r5
                r2 = a0;
                r1 = undefined;
                r0 = a1;
                r0 = r2.bind(r1)(r0);
                return r0;
            };
            var _closure1_slot216 = r0;
            r1 = function(a0, a1) { // Original name: batchedUpdates$1, environment: r5
                _fun2832: for(var _fun2832_ip = 0; ; ) switch(_fun2832_ip) {
case 0:
                    r1 = a0;
                    r0 = a1;
                    r2 = _closure1_slot49;
                    if(r2) { _fun2832_ip = 58; continue _fun2832 }
case 16:
                    r2 = true;
                    _closure1_slot49 = r2;
case 22: // try_start_0
                    r6 = _closure1_slot216;
                    r5 = r1;
                    r3 = r0;
                    r2 = undefined;
                    r2 = r6.bind(r2)(r5, r3);
case 40: // try_end0
                    r3 = false;
                    _closure1_slot49 = r3;
                    return r2;
case 48: // catch_target0
                    CatchBlockStart(arg_register=2);
                    r3 = false;
                    _closure1_slot49 = r3;
                    throw r2;
case 58:
                    r2 = r1;
                    r1 = r0;
                    r0 = undefined;
                    r0 = r2.bind(r0)(r1);
                    return r0;
                }
            };
            var _closure1_slot217 = r1;
            r0 = function(a0) { // Original name: executeDispatchesAndReleaseTopLevel, environment: r5
                _fun2833: for(var _fun2833_ip = 0; ; ) switch(_fun2833_ip) {
case 0:
                    r2 = a0;
                    if(!r2) { _fun2833_ip = 168; continue _fun2833 }
case 9:
                    r6 = r2._dispatchListeners;
                    r5 = r2._dispatchInstances;
                    r0 = _closure1_slot2;
                    r3 = undefined;
                    r0 = r0.bind(r3)(r6);
                    if(r0) { _fun2833_ip = 52; continue _fun2833 }
case 36:
                    if(!r6) { _fun2833_ip = 125; continue _fun2833 }
case 39:
                    r0 = _closure1_slot183;
                    r0 = r0.bind(r3)(r2, r6, r5);
                    _fun2833_ip = 125; continue _fun2833;
case 52:
                    r0 = r6.length;
                    r1 = 0;
                    if(!(r1 < r0)) { _fun2833_ip = 125; continue _fun2833 }
case 63:
                    r0 = r2.isPropagationStopped;
                    r0 = r0.bind(r2)();
                    r1 = 0;
                    if(r0) { _fun2833_ip = 125; continue _fun2833 }
case 78:
                    r8 = _closure1_slot183;
                    r7 = r6[r1];
                    r0 = r5[r1];
                    r0 = r8.bind(r3)(r2, r7, r0);
                    r7 = r1 + 1;
                    r0 = r6.length;
                    if(!(r7 < r0)) { _fun2833_ip = 125; continue _fun2833 }
case 109:
                    r0 = r2.isPropagationStopped;
                    r0 = r0.bind(r2)();
                    r1 = r7;
                    if(!r0) { _fun2833_ip = 78; continue _fun2833 }
case 125:
                    r0 = null;
                    r2['_dispatchListeners'] = r0;
                    r2['_dispatchInstances'] = r0;
                    r0 = r2.isPersistent;
                    r0 = r0.bind(r2)();
                    if(r0) { _fun2833_ip = 168; continue _fun2833 }
case 152:
                    r1 = r2.constructor;
                    r0 = r1.release;
                    r0 = r0.bind(r1)(r2);
case 168:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot218 = r0;
            r0 = function(a0, a1, a2) { // Original name: _receiveRootNodeIDEvent, environment: r5
                _fun2834: for(var _fun2834_ip = 0; ; ) switch(_fun2834_ip) {
case 0:
                    r0 = a2;
                    r2 = a1;
                    var _closure2_slot0 = r2;
                    if(r0) { _fun2834_ip = 22; continue _fun2834 }
case 15:
                    r0 = _closure1_slot51;
case 22:
                    var _closure2_slot1 = r0;
                    r4 = _closure1_slot215;
                    r0 = undefined;
                    r3 = a0;
                    r3 = r4.bind(r0)(r3);
                    var _closure2_slot2 = r3;
                    r4 = null;
                    var _closure2_slot3 = r4;
                    if(!(r4 != r3)) { _fun2834_ip = 66; continue _fun2834 }
case 57:
                    r3 = r3.stateNode;
                    _closure2_slot3 = r3;
case 66:
                    r2 = _closure1_slot217;
                    r1 = function() { // Environment: r1
                        _fun2835: for(var _fun2835_ip = 0; ; ) switch(_fun2835_ip) {
case 0:
                            r8 = _closure2_slot3;
                            r7 = _closure1_slot42;
                            r0 = r7.length;
                            r6 = 0;
                            r0 = r6 < r0;
                            r1 = null;
                            r2 = undefined;
                            r4 = null;
                            r5 = null;
                            if(!r0) { _fun2835_ip = 120; continue _fun2835 }
case 36:
                            r17 = r7[r6];
                            r13 = r4;
                            r0 = r6;
                            r10 = r17;
                            r12 = r10;
                            if(!r12) { _fun2835_ip = 86; continue _fun2835 }
case 55:
                            r16 = r17.extractEvents;
                            r21 = _closure2_slot0;
                            r20 = _closure2_slot2;
                            r19 = _closure2_slot1;
                            r22 = r17;
                            r18 = r8;
                            r10 = r22[r16](r21, r20, r19, r18, r17);
                            r12 = r10;
case 86:
                            r11 = r13;
                            if(!r10) { _fun2835_ip = 102; continue _fun2835 }
case 92:
                            r10 = _closure1_slot199;
                            r11 = r10.bind(r2)(r13, r12);
case 102:
                            r6 = r0 + 1;
                            r0 = r7.length;
                            r4 = r11;
                            r5 = r4;
                            if(r6 < r0) { _fun2835_ip = 36; continue _fun2835 }
case 120:
                            if(!(r1 !== r5)) { _fun2835_ip = 142; continue _fun2835 }
case 124:
                            r4 = _closure1_slot199;
                            r0 = _closure1_slot50;
                            r0 = r4.bind(r2)(r0, r5);
                            _closure1_slot50 = r0;
case 142:
                            r5 = _closure1_slot50;
                            _closure1_slot50 = r1;
                            if(!r5) { _fun2835_ip = 181; continue _fun2835 }
case 153:
                            r4 = _closure1_slot200;
                            r0 = _closure1_slot218;
                            r0 = r4.bind(r2)(r5, r0);
                            r0 = _closure1_slot50;
                            if(r0) { _fun2835_ip = 199; continue _fun2835 }
case 174:
                            r0 = _closure1_slot26;
                            if(r0) { _fun2835_ip = 183; continue _fun2835 }
case 181:
                            return r2;
case 183:
                            r0 = _closure1_slot27;
                            r4 = false;
                            _closure1_slot26 = r4;
                            _closure1_slot27 = r1;
                            throw r0;
case 199:
                            r0 = global;
                            r1 = r0.Error;
                            r0 = 'processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.';
                            r0 = r1.bind(r2)(r0);
                            throw r0;
                        }
                    };
                    r1 = r2.bind(r0)(r1);
                    return r0;
                }
            };
            var _closure1_slot219 = r0;
            r0 = function(a0) { // Original name: getNearestMountedFiber, environment: r5
                _fun2836: for(var _fun2836_ip = 0; ; ) switch(_fun2836_ip) {
case 0:
                    r4 = a0;
                    r0 = r4.alternate;
                    r6 = 4098;
                    r5 = 0;
                    r3 = r4;
                    r2 = r3;
                    if(r0) { _fun2836_ip = 65; continue _fun2836 }
case 25:
                    r0 = r3.flags;
                    r7 = r0 & r6;
                    r0 = r3;
                    r1 = r2;
                    if(!(r5 !== r7)) { _fun2836_ip = 49; continue _fun2836 }
case 44:
                    r1 = r0.return;
case 49:
                    r3 = r0.return;
                    r2 = r1;
                    r1 = r2;
                    if(r3) { _fun2836_ip = 25; continue _fun2836 }
case 63:
                    _fun2836_ip = 104; continue _fun2836;
case 65:
                    r2 = r4.return;
                    r3 = r4;
                    r0 = r3;
                    r1 = r0;
                    if(!r2) { _fun2836_ip = 104; continue _fun2836 }
case 82:
                    r5 = r3.return;
                    r2 = r5.return;
                    r3 = r5;
                    r0 = r3;
                    r1 = r4;
                    if(r2) { _fun2836_ip = 82; continue _fun2836 }
case 104:
                    r3 = r0.tag;
                    r2 = 3;
                    r0 = null;
                    if(!(r2 === r3)) { _fun2836_ip = 121; continue _fun2836 }
case 118:
                    r0 = r1;
case 121:
                    return r0;
                }
            };
            var _closure1_slot220 = r0;
            r0 = function(a0) { // Original name: assertIsMounted, environment: r5
                _fun2837: for(var _fun2837_ip = 0; ; ) switch(_fun2837_ip) {
case 0:
                    r1 = a0;
                    r0 = _closure1_slot220;
                    r2 = undefined;
                    r0 = r0.bind(r2)(r1);
                    if(!(r0 === r1)) { _fun2837_ip = 23; continue _fun2837 }
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
            var _closure1_slot221 = r0;
            r0 = function(a0) { // Original name: findCurrentFiberUsingSlowPath, environment: r5
                _fun2838: for(var _fun2838_ip = 0; ; ) switch(_fun2838_ip) {
case 0:
                    r1 = a0;
                    r0 = r1.alternate;
                    r2 = undefined;
                    r10 = null;
                    r7 = r1;
                    r6 = r0;
                    r5 = undefined;
                    r3 = undefined;
                    if(r0) { _fun2838_ip = 71; continue _fun2838 }
case 25:
                    r4 = _closure1_slot220;
                    r11 = r4.bind(r2)(r1);
                    if(!(r10 !== r11)) { _fun2838_ip = 52; continue _fun2838 }
case 41:
                    r4 = null;
                    if(!(r11 === r1)) { _fun2838_ip = 50; continue _fun2838 }
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
                    if(!(r10 !== r11)) { _fun2838_ip = 484; continue _fun2838 }
case 95:
                    r27 = r11.alternate;
                    if(!(r10 !== r27)) { _fun2838_ip = 463; continue _fun2838 }
case 107:
                    r16 = r11.child;
                    r14 = r27.child;
                    if(!(r16 !== r14)) { _fun2838_ip = 389; continue _fun2838 }
case 124:
                    r20 = r4.return;
                    r14 = r15.return;
                    r19 = r11;
                    r16 = r27;
                    r18 = r13;
                    r17 = r12;
                    if(!(r20 === r14)) { _fun2838_ip = 346; continue _fun2838 }
case 153:
                    r20 = r11.child;
                    r26 = r4;
                    r25 = r15;
                    r24 = false;
                    r14 = r20;
                    if(!r14) { _fun2838_ip = 224; continue _fun2838 }
case 172:
                    r21 = r20;
                    r26 = r11;
                    r25 = r27;
                    r24 = true;
                    r14 = r21;
                    if(!(r21 !== r4)) { _fun2838_ip = 224; continue _fun2838 }
case 190:
                    r26 = r27;
                    r25 = r11;
                    r24 = true;
                    r14 = r21;
                    if(!(r14 !== r15)) { _fun2838_ip = 224; continue _fun2838 }
case 205:
                    r20 = r21.sibling;
                    r26 = r4;
                    r25 = r15;
                    r24 = false;
                    r14 = r20;
                    if(r14) { _fun2838_ip = 172; continue _fun2838 }
case 224:
                    r17 = r14;
                    r19 = r26;
                    r16 = r25;
                    r18 = r24;
                    if(r18) { _fun2838_ip = 346; continue _fun2838 }
case 239:
                    r23 = r27.child;
                    r22 = r26;
                    r21 = r25;
                    r14 = r24;
                    r20 = r23;
                    if(!r20) { _fun2838_ip = 312; continue _fun2838 }
case 259:
                    r28 = r23;
                    r22 = r27;
                    r21 = r11;
                    r14 = true;
                    r20 = r28;
                    if(!(r28 !== r26)) { _fun2838_ip = 312; continue _fun2838 }
case 277:
                    r22 = r11;
                    r21 = r27;
                    r14 = true;
                    r20 = r28;
                    if(!(r20 !== r25)) { _fun2838_ip = 312; continue _fun2838 }
case 292:
                    r23 = r28.sibling;
                    r22 = r26;
                    r21 = r25;
                    r14 = r24;
                    r20 = r23;
                    if(r20) { _fun2838_ip = 259; continue _fun2838 }
case 312:
                    r19 = r22;
                    r16 = r21;
                    r18 = r14;
                    r17 = r20;
                    if(r18) { _fun2838_ip = 346; continue _fun2838 }
case 327:
                    r14 = global;
                    r20 = r14.Error;
                    r14 = 'Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.';
                    r14 = r20.bind(r2)(r14);
                    throw r14;
case 346:
                    r14 = r19.alternate;
                    r7 = r19;
                    r6 = r16;
                    r5 = r18;
                    r3 = r17;
                    if(r14 === r6) { _fun2838_ip = 71; continue _fun2838 }
case 370:
                    r14 = global;
                    r16 = r14.Error;
                    r14 = "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.";
                    r14 = r16.bind(r2)(r14);
                    throw r14;
case 389:
                    r14 = r11.child;
                    if(!r14) { _fun2838_ip = 416; continue _fun2838 }
case 397:
                    r16 = r14;
                    if(!(r16 !== r4)) { _fun2838_ip = 449; continue _fun2838 }
case 404:
                    if(!(r16 !== r15)) { _fun2838_ip = 435; continue _fun2838 }
case 408:
                    r14 = r16.sibling;
                    if(r14) { _fun2838_ip = 397; continue _fun2838 }
case 416:
                    r14 = global;
                    r15 = r14.Error;
                    r14 = 'Unable to find node on an unmounted component.';
                    r14 = r15.bind(r2)(r14);
                    throw r14;
case 435:
                    r14 = _closure1_slot221;
                    r14 = r14.bind(r2)(r11);
                    return r0;
case 449:
                    r14 = _closure1_slot221;
                    r14 = r14.bind(r2)(r11);
                    return r1;
case 463:
                    r7 = r11.return;
                    r5 = r13;
                    r3 = r12;
                    r6 = r7;
                    if(r10 !== r6) { _fun2838_ip = 71; continue _fun2838 }
case 484:
                    r5 = r4.tag;
                    r3 = 3;
                    if(!(r3 === r5)) { _fun2838_ip = 515; continue _fun2838 }
case 496:
                    r3 = r4.stateNode;
                    r3 = r3.current;
                    if(!(r3 === r4)) { _fun2838_ip = 513; continue _fun2838 }
case 510:
                    r0 = r1;
case 513:
                    return r0;
case 515:
                    r0 = global;
                    r1 = r0.Error;
                    r0 = 'Unable to find node on an unmounted component.';
                    r0 = r1.bind(r2)(r0);
                    throw r0;
                }
            };
            var _closure1_slot222 = r0;
            r0 = function(a0) { // Original name: findCurrentHostFiberImpl, environment: r5
                _fun2839: for(var _fun2839_ip = 0; ; ) switch(_fun2839_ip) {
case 0:
                    r0 = a0;
                    r2 = r0.tag;
                    r1 = 5;
                    if(!(r1 !== r2)) { _fun2839_ip = 81; continue _fun2839 }
case 15:
                    r1 = 26;
                    if(!(r1 !== r2)) { _fun2839_ip = 81; continue _fun2839 }
case 22:
                    r1 = 27;
                    if(!(r1 !== r2)) { _fun2839_ip = 81; continue _fun2839 }
case 29:
                    r1 = 6;
                    if(!(r1 !== r2)) { _fun2839_ip = 81; continue _fun2839 }
case 36:
                    r5 = r0.child;
                    r2 = null;
                    r3 = undefined;
                    if(!(r2 !== r5)) { _fun2839_ip = 77; continue _fun2839 }
case 52:
                    r1 = _closure1_slot223;
                    r1 = r1.bind(r3)(r5);
                    r6 = r5;
                    if(!(r2 === r1)) { _fun2839_ip = 79; continue _fun2839 }
case 68:
                    r5 = r6.sibling;
                    if(r2 !== r5) { _fun2839_ip = 52; continue _fun2839 }
case 77:
                    return r2;
case 79:
                    return r1;
case 81:
                    return r0;
                }
            };
            var _closure1_slot223 = r0;
            r0 = function(a0, a1) { // Original name: defaultDiffer, environment: r5
                _fun2840: for(var _fun2840_ip = 0; ; ) switch(_fun2840_ip) {
case 0:
                    r5 = a1;
                    r3 = 'object';
                    r1 = typeof r5;
                    r0 = true;
                    if(!(r3 === r1)) { _fun2840_ip = 69; continue _fun2840 }
case 16:
                    r1 = null;
                    r0 = true;
                    if(!(r1 !== r5)) { _fun2840_ip = 69; continue _fun2840 }
case 24:
                    r4 = _closure1_slot0;
                    r3 = _closure1_slot1;
                    r2 = 2;
                    r3 = r3[r2];
                    r2 = undefined;
                    r4 = r4.bind(r2)(r3);
                    r3 = r4.deepDiffer;
                    r2 = _closure1_slot55;
                    r1 = a0;
                    r0 = r3.bind(r4)(r1, r5, r2);
case 69:
                    return r0;
                }
            };
            var _closure1_slot224 = r0;
            r0 = function(a0, a1, a2) { // Original name: restoreDeletedValuesInNestedArray, environment: r5
                _fun2841: for(var _fun2841_ip = 0; ; ) switch(_fun2841_ip) {
case 0:
                    r7 = a0;
                    r6 = a1;
                    r5 = a2;
                    r1 = _closure1_slot2;
                    r0 = undefined;
                    r1 = r1.bind(r0)(r6);
                    if(r1) { _fun2841_ip = 254; continue _fun2841 }
case 29:
                    if(!r6) { _fun2841_ip = 313; continue _fun2841 }
case 35:
                    r2 = _closure1_slot54;
                    r1 = 0;
                    if(!(r1 < r2)) { _fun2841_ip = 313; continue _fun2841 }
case 48:
                    r16 = _closure1_slot53;
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
                        r18 = _closure1_slot53;
                        r18 = r18[r21];
                        if(!r18) { _fun2841_ip = 81; continue _fun2841 }
case 107:
                        r20 = r6[r21];
                        r2 = r20;
                        if(r0 === r20) { _fun2841_ip = 81; continue _fun2841 }
case 118:
                        r18 = r5[r21];
                        r2 = r20;
                        r1 = r18;
                        if(!r18) { _fun2841_ip = 81; continue _fun2841 }
case 131:
                        r19 = typeof r20;
                        if(!(r11 === r19)) { _fun2841_ip = 140; continue _fun2841 }
case 138:
                        r20 = true;
case 140:
                        r19 = typeof r20;
                        if(!(r8 === r19)) { _fun2841_ip = 149; continue _fun2841 }
case 147:
                        r20 = null;
case 149:
                        r19 = typeof r18;
                        if(!(r10 === r19)) { _fun2841_ip = 217; continue _fun2841 }
case 156:
                        r19 = r18.diff;
                        r19 = typeof r19;
                        if(!(r11 !== r19)) { _fun2841_ip = 183; continue _fun2841 }
case 168:
                        r19 = r18.process;
                        r22 = typeof r19;
                        r19 = r20;
                        if(!(r11 === r22)) { _fun2841_ip = 224; continue _fun2841 }
case 183:
                        r22 = r18.process;
                        r23 = typeof r22;
                        r22 = r20;
                        if(!(r11 === r23)) { _fun2841_ip = 208; continue _fun2841 }
case 198:
                        r23 = r18.process;
                        r22 = r23.bind(r18)(r20);
case 208:
                        r7[r21] = r22;
                        r19 = r22;
                        _fun2841_ip = 224; continue _fun2841;
case 217:
                        r7[r21] = r20;
                        r19 = r20;
case 224:
                        r20 = _closure1_slot53;
                        r20[r21] = r12;
                        r20 = _closure1_slot54;
                        r20 = r20 - 1;
                        _closure1_slot54 = r20;
                        r2 = r19;
                        r1 = r18;
                        _fun2841_ip = 81; continue _fun2841;
case 254:
                        r1 = r6.length;
                        r1 = parseFloat(r1);
                        r3 = r1 - 1;
                        if(!r1) { _fun2841_ip = 313; continue _fun2841 }
case 268:
                        r1 = _closure1_slot54;
                        r2 = 0;
                        if(!(r2 < r1)) { _fun2841_ip = 313; continue _fun2841 }
case 278:
                        r8 = _closure1_slot225;
                        r1 = r6[r3];
                        r1 = r8.bind(r0)(r7, r1, r5);
                        r1 = parseFloat(r3);
                        r8 = r1 - 1;
                        if(!r1) { _fun2841_ip = 313; continue _fun2841 }
case 302:
                        r1 = _closure1_slot54;
                        r3 = r8;
                        if(r2 < r1) { _fun2841_ip = 278; continue _fun2841 }
                    }
case 313:
                    return r0;
                }
            };
            var _closure1_slot225 = r0;
            r0 = function(a0, a1, a2, a3) { // Original name: diffNestedProperty, environment: r5
                _fun2842: for(var _fun2842_ip = 0; ; ) switch(_fun2842_ip) {
case 0:
                    r0 = a0;
                    r9 = a1;
                    r7 = a2;
                    r6 = a3;
                    if(r0) { _fun2842_ip = 21; continue _fun2842 }
case 15:
                    if(!(r9 === r7)) { _fun2842_ip = 21; continue _fun2842 }
case 19:
                    return r0;
case 21:
                    if(!r9) { _fun2842_ip = 27; continue _fun2842 }
case 24:
                    if(r7) { _fun2842_ip = 72; continue _fun2842 }
case 27:
                    if(r7) { _fun2842_ip = 54; continue _fun2842 }
case 30:
                    r1 = r0;
                    if(!r9) { _fun2842_ip = 52; continue _fun2842 }
case 36:
                    r3 = _closure1_slot228;
                    r2 = undefined;
                    r1 = r3.bind(r2)(r0, r9, r6);
case 52:
                    _fun2842_ip = 70; continue _fun2842;
case 54:
                    r3 = _closure1_slot227;
                    r2 = undefined;
                    r1 = r3.bind(r2)(r0, r7, r6);
case 70:
                    return r1;
case 72:
                    r1 = _closure1_slot2;
                    r4 = undefined;
                    r1 = r1.bind(r4)(r9);
                    if(r1) { _fun2842_ip = 125; continue _fun2842 }
case 89:
                    r1 = _closure1_slot2;
                    r1 = r1.bind(r4)(r7);
                    if(r1) { _fun2842_ip = 125; continue _fun2842 }
case 101:
                    r1 = _closure1_slot229;
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
                    if(!r1) { _fun2842_ip = 149; continue _fun2842 }
case 137:
                    r1 = _closure1_slot2;
                    r1 = r1.bind(r4)(r7);
                    if(r1) { _fun2842_ip = 235; continue _fun2842 }
case 149:
                    r1 = _closure1_slot2;
                    r1 = r1.bind(r4)(r9);
                    r3 = _closure1_slot229;
                    r8 = _closure1_slot0;
                    r10 = _closure1_slot1;
                    r2 = 2;
                    r2 = r10[r2];
                    r8 = r8.bind(r4)(r2);
                    r2 = r8.flattenStyle;
                    if(r1) { _fun2842_ip = 213; continue _fun2842 }
case 191:
                    r14 = r2.bind(r8)(r7);
                    r17 = undefined;
                    r16 = r0;
                    r15 = r9;
                    r13 = r6;
                    r1 = r17[r3](r16, r15, r14, r13, r12);
                    _fun2842_ip = 233; continue _fun2842;
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
                    if(!(!(r2 < r1))) { _fun2842_ip = 256; continue _fun2842 }
case 249:
                    r8 = r7.length;
                    _fun2842_ip = 261; continue _fun2842;
case 256:
                    r8 = r9.length;
case 261:
                    r3 = 0;
                    r10 = r3 < r8;
                    r2 = r0;
                    r1 = 0;
                    r0 = r2;
                    if(!r10) { _fun2842_ip = 315; continue _fun2842 }
case 278:
                    r12 = _closure1_slot226;
                    r15 = r9[r1];
                    r14 = r7[r1];
                    r17 = undefined;
                    r16 = r2;
                    r13 = r6;
                    r2 = r17[r12](r16, r15, r14, r13, r12);
                    r1 = r1 + 1;
                    r0 = r2;
                    r3 = r1;
                    if(r3 < r8) { _fun2842_ip = 278; continue _fun2842 }
case 315:
                    r1 = r9.length;
                    r8 = r0;
                    r2 = r3;
                    r0 = r8;
                    r3 = r2;
                    if(!(r3 < r1)) { _fun2842_ip = 369; continue _fun2842 }
case 336:
                    r10 = _closure1_slot228;
                    r1 = r9[r2];
                    r8 = r10.bind(r4)(r8, r1, r6);
                    r2 = r2 + 1;
                    r1 = r9.length;
                    r0 = r8;
                    r3 = r2;
                    if(r3 < r1) { _fun2842_ip = 336; continue _fun2842 }
case 369:
                    r1 = r7.length;
                    r2 = r0;
                    r0 = r2;
                    if(!(r3 < r1)) { _fun2842_ip = 414; continue _fun2842 }
case 384:
                    r8 = _closure1_slot227;
                    r1 = r7[r3];
                    r2 = r8.bind(r4)(r2, r1, r6);
                    r3 = r3 + 1;
                    r1 = r7.length;
                    r0 = r2;
                    if(r3 < r1) { _fun2842_ip = 384; continue _fun2842 }
case 414:
                    return r0;
                }
            };
            var _closure1_slot226 = r0;
            r0 = function(a0, a1, a2) { // Original name: addNestedProperty, environment: r5
                _fun2843: for(var _fun2843_ip = 0; ; ) switch(_fun2843_ip) {
case 0:
                    r0 = a0;
                    r7 = a1;
                    r6 = a2;
                    if(r7) { _fun2843_ip = 14; continue _fun2843 }
case 12:
                    return r0;
case 14:
                    r1 = _closure1_slot2;
                    r4 = undefined;
                    r1 = r1.bind(r4)(r7);
                    if(r1) { _fun2843_ip = 56; continue _fun2843 }
case 31:
                    r2 = _closure1_slot229;
                    r12 = _closure1_slot52;
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
                    if(!r1) { _fun2843_ip = 106; continue _fun2843 }
case 76:
                    r8 = _closure1_slot227;
                    r1 = r7[r3];
                    r2 = r8.bind(r4)(r2, r1, r6);
                    r3 = r3 + 1;
                    r1 = r7.length;
                    r0 = r2;
                    if(r3 < r1) { _fun2843_ip = 76; continue _fun2843 }
case 106:
                    return r0;
                }
            };
            var _closure1_slot227 = r0;
            r0 = function(a0, a1, a2) { // Original name: clearNestedProperty, environment: r5
                _fun2844: for(var _fun2844_ip = 0; ; ) switch(_fun2844_ip) {
case 0:
                    r0 = a0;
                    r7 = a1;
                    r6 = a2;
                    if(r7) { _fun2844_ip = 14; continue _fun2844 }
case 12:
                    return r0;
case 14:
                    r1 = _closure1_slot2;
                    r4 = undefined;
                    r1 = r1.bind(r4)(r7);
                    if(r1) { _fun2844_ip = 56; continue _fun2844 }
case 31:
                    r2 = _closure1_slot229;
                    r11 = _closure1_slot52;
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
                    if(!r1) { _fun2844_ip = 106; continue _fun2844 }
case 76:
                    r8 = _closure1_slot228;
                    r1 = r7[r3];
                    r2 = r8.bind(r4)(r2, r1, r6);
                    r3 = r3 + 1;
                    r1 = r7.length;
                    r0 = r2;
                    if(r3 < r1) { _fun2844_ip = 76; continue _fun2844 }
case 106:
                    return r0;
                }
            };
            var _closure1_slot228 = r0;
            r0 = function(a0, a1, a2, a3) { // Original name: diffProperties, environment: r5
                _fun2845: for(var _fun2845_ip = 0; ; ) switch(_fun2845_ip) {
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
                        if(!r26) { _fun2845_ip = 64; continue _fun2845 }
case 110:
                        r25 = r17[r28];
                        r24 = r16[r28];
                        r30 = typeof r24;
                        r29 = r25;
                        if(!(r13 === r30)) { _fun2845_ip = 142; continue _fun2845 }
case 128:
                        r30 = typeof r25;
                        if(!(r13 === r30)) { _fun2845_ip = 137; continue _fun2845 }
case 135:
                        r25 = true;
case 137:
                        r29 = r25;
                        r24 = true;
case 142:
                        r30 = typeof r24;
                        r25 = r29;
                        if(!(r5 === r30)) { _fun2845_ip = 166; continue _fun2845 }
case 152:
                        r30 = typeof r29;
                        if(!(r5 === r30)) { _fun2845_ip = 161; continue _fun2845 }
case 159:
                        r29 = null;
case 161:
                        r25 = r29;
                        r24 = null;
case 166:
                        r29 = _closure1_slot53;
                        if(!r29) { _fun2845_ip = 181; continue _fun2845 }
case 173:
                        r29 = _closure1_slot53;
                        r29[r28] = r6;
case 181:
                        if(!r27) { _fun2845_ip = 195; continue _fun2845 }
case 184:
                        r29 = r27[r28];
                        if(!(r14 === r29)) { _fun2845_ip = 522; continue _fun2845 }
case 195:
                        r4 = r27;
                        r3 = r26;
                        r2 = r25;
                        r1 = r24;
                        if(r25 === r24) { _fun2845_ip = 64; continue _fun2845 }
case 214:
                        r29 = typeof r26;
                        if(!(r12 === r29)) { _fun2845_ip = 459; continue _fun2845 }
case 224:
                        r29 = r26.diff;
                        r29 = typeof r29;
                        if(!(r13 !== r29)) { _fun2845_ip = 342; continue _fun2845 }
case 236:
                        r29 = r26.process;
                        r29 = typeof r29;
                        if(!(r13 !== r29)) { _fun2845_ip = 342; continue _fun2845 }
case 248:
                        _closure1_slot53 = r10;
                        _closure1_slot54 = r18;
                        r29 = _closure1_slot226;
                        r37 = undefined;
                        r36 = r27;
                        r35 = r25;
                        r34 = r24;
                        r33 = r26;
                        r29 = r37[r29](r36, r35, r34, r33, r32);
                        r30 = _closure1_slot54;
                        r30 = r18 < r30;
                        if(!r30) { _fun2845_ip = 292; continue _fun2845 }
case 289:
                        r30 = r29;
case 292:
                        r4 = r29;
                        r3 = r26;
                        r2 = r25;
                        r1 = r24;
                        if(!r30) { _fun2845_ip = 64; continue _fun2845 }
case 310:
                        r30 = _closure1_slot225;
                        r30 = r30.bind(r14)(r29, r24, r26);
                        _closure1_slot53 = r10;
                        r4 = r29;
                        r3 = r26;
                        r2 = r25;
                        r1 = r24;
                        _fun2845_ip = 64; continue _fun2845;
case 342:
                        if(!(r14 !== r25)) { _fun2845_ip = 399; continue _fun2845 }
case 346:
                        r29 = r26.diff;
                        r29 = typeof r29;
                        if(!(r13 !== r29)) { _fun2845_ip = 370; continue _fun2845 }
case 358:
                        r29 = _closure1_slot224;
                        r29 = r29.bind(r14)(r25, r24);
                        _fun2845_ip = 381; continue _fun2845;
case 370:
                        r30 = r26.diff;
                        r29 = r30.bind(r26)(r25, r24);
case 381:
                        r4 = r27;
                        r3 = r26;
                        r2 = r25;
                        r1 = r24;
                        if(!r29) { _fun2845_ip = 64; continue _fun2845 }
case 399:
                        r29 = r26.process;
                        r30 = typeof r29;
                        r29 = r24;
                        if(!(r13 === r30)) { _fun2845_ip = 424; continue _fun2845 }
case 414:
                        r30 = r26.process;
                        r29 = r30.bind(r26)(r24);
case 424:
                        r31 = r27;
                        r30 = r31;
                        if(r27) { _fun2845_ip = 438; continue _fun2845 }
case 433:
                        r31 = {};
                        r30 = r31;
case 438:
                        r31[r28] = r29;
                        r4 = r30;
                        r3 = r29;
                        r2 = r25;
                        r1 = r24;
                        _fun2845_ip = 64; continue _fun2845;
case 459:
                        r29 = _closure1_slot224;
                        r29 = r29.bind(r14)(r25, r24);
                        r4 = r27;
                        r3 = r26;
                        r2 = r25;
                        r1 = r24;
                        if(!r29) { _fun2845_ip = 64; continue _fun2845 }
case 487:
                        r30 = r27;
                        r29 = r30;
                        if(r27) { _fun2845_ip = 501; continue _fun2845 }
case 496:
                        r30 = {};
                        r29 = r30;
case 501:
                        r30[r28] = r24;
                        r4 = r29;
                        r3 = r26;
                        r2 = r25;
                        r1 = r24;
                        _fun2845_ip = 64; continue _fun2845;
case 522:
                        r29 = typeof r26;
                        if(!(r12 === r29)) { _fun2845_ip = 614; continue _fun2845 }
case 529:
                        r29 = r26.diff;
                        r29 = typeof r29;
                        if(!(r13 !== r29)) { _fun2845_ip = 568; continue _fun2845 }
case 541:
                        r29 = r26.process;
                        r29 = typeof r29;
                        r4 = r27;
                        r3 = r26;
                        r2 = r25;
                        r1 = r24;
                        if(r13 !== r29) { _fun2845_ip = 64; continue _fun2845 }
case 568:
                        r29 = r26.process;
                        r30 = typeof r29;
                        r29 = r24;
                        if(!(r13 === r30)) { _fun2845_ip = 593; continue _fun2845 }
case 583:
                        r30 = r26.process;
                        r29 = r30.bind(r26)(r24);
case 593:
                        r27[r28] = r29;
                        r3 = r29;
                        r4 = r27;
                        r2 = r25;
                        r1 = r24;
                        _fun2845_ip = 64; continue _fun2845;
case 614:
                        r27[r28] = r24;
                        r4 = r27;
                        r3 = r26;
                        r2 = r25;
                        r1 = r24;
                        _fun2845_ip = 64; continue _fun2845;
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
                        if(r14 !== r19) { _fun2845_ip = 655; continue _fun2845 }
case 693:
                        r19 = r15[r26];
                        r21 = !r19;
                        if(r21) { _fun2845_ip = 720; continue _fun2845 }
case 703:
                        r20 = r27;
                        if(!r27) { _fun2845_ip = 717; continue _fun2845 }
case 709:
                        r22 = r27[r26];
                        r20 = r14 !== r22;
case 717:
                        r21 = r20;
case 720:
                        r20 = r27;
                        if(r21) { _fun2845_ip = 860; continue _fun2845 }
case 729:
                        r21 = r17[r26];
                        r22 = r27;
                        if(!(r14 !== r21)) { _fun2845_ip = 854; continue _fun2845 }
case 740:
                        r23 = typeof r19;
                        if(!(r12 === r23)) { _fun2845_ip = 784; continue _fun2845 }
case 747:
                        r23 = r19.diff;
                        r23 = typeof r23;
                        if(!(r13 !== r23)) { _fun2845_ip = 784; continue _fun2845 }
case 759:
                        r23 = r19.process;
                        r23 = typeof r23;
                        if(!(r13 !== r23)) { _fun2845_ip = 784; continue _fun2845 }
case 771:
                        r23 = _closure1_slot228;
                        r23 = r23.bind(r14)(r27, r21, r19);
                        _fun2845_ip = 851; continue _fun2845;
case 784:
                        r25 = r27;
                        r24 = r25;
                        if(r27) { _fun2845_ip = 798; continue _fun2845 }
case 793:
                        r25 = {};
                        r24 = r25;
case 798:
                        r25[r26] = r10;
                        r25 = _closure1_slot53;
                        if(r25) { _fun2845_ip = 815; continue _fun2845 }
case 809:
                        r25 = {};
                        _closure1_slot53 = r25;
case 815:
                        r25 = _closure1_slot53;
                        r25 = r25[r26];
                        r23 = r24;
                        if(r25) { _fun2845_ip = 851; continue _fun2845 }
case 829:
                        r25 = _closure1_slot53;
                        r25[r26] = r9;
                        r25 = _closure1_slot54;
                        r25 = r25 + 1;
                        _closure1_slot54 = r25;
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
                        _fun2845_ip = 655; continue _fun2845;
                    }
case 874:
                    return r0;
                }
            };
            var _closure1_slot229 = r0;
            r0 = function(a0, a1) { // Original name: mountSafeCallback_NOT_REALLY_SAFE, environment: r5
                r1 = a0;
                var _closure2_slot0 = r1;
                r1 = a1;
                var _closure2_slot1 = r1;
                r0 = function() { // Environment: r0
                    _fun2847: for(var _fun2847_ip = 0; ; ) switch(_fun2847_ip) {
case 0:
                        r2 = undefined;
                        r0 = undefined;
                        r3 = _closure2_slot1;
                        if(!r3) { _fun2847_ip = 48; continue _fun2847 }
case 14:
                        r3 = _closure2_slot0;
                        r3 = r3.__isMounted;
                        r4 = 'boolean';
                        r3 = typeof r3;
                        if(!(r4 === r3)) { _fun2847_ip = 50; continue _fun2847 }
case 35:
                        r3 = _closure2_slot0;
                        r3 = r3.__isMounted;
                        if(r3) { _fun2847_ip = 50; continue _fun2847 }
case 48:
                        return r2;
case 50:
                        r3 = _closure2_slot1;
                        r2 = r3.apply;
                        r1 = _closure2_slot0;
                        r0 = arguments;
                        r0 = r2.bind(r3)(r1, r0);
                        return r0;
                    }
                };
                return r0;
            };
            var _closure1_slot230 = r0;
            r0 = function(a0) { // Original name: onCommitRoot, environment: r5
                _fun2848: for(var _fun2848_ip = 0; ; ) switch(_fun2848_ip) {
case 0:
                    r0 = a0;
                    r2 = _closure1_slot58;
                    if(!r2) { _fun2848_ip = 88; continue _fun2848 }
case 13:
                    r2 = _closure1_slot58;
                    r2 = r2.onCommitFiberRoot;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun2848_ip = 88; continue _fun2848 }
case 34: // try_start_0
                    r5 = _closure1_slot58;
                    r4 = r5.onCommitFiberRoot;
                    r10 = _closure1_slot57;
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
                    _fun2848_ip = 88; continue _fun2848;
case 86: // catch_target0
                    CatchBlockStart(arg_register=0);
case 88:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot231 = r0;
            r0 = function(a0) { // Original name: setIsStrictModeForDevtools, environment: r5
                _fun2849: for(var _fun2849_ip = 0; ; ) switch(_fun2849_ip) {
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
                    if(!(r4 === r3)) { _fun2849_ip = 75; continue _fun2849 }
case 44:
                    r5 = _closure1_slot0;
                    r3 = _closure1_slot1;
                    r3 = r3[r6];
                    r6 = r5.bind(r0)(r3);
                    r5 = r6.unstable_setDisableYieldValue;
                    r3 = r1;
                    r3 = r5.bind(r6)(r3);
case 75:
                    r3 = _closure1_slot58;
                    if(!r3) { _fun2849_ip = 123; continue _fun2849 }
case 82:
                    r3 = _closure1_slot58;
                    r3 = r3.setStrictMode;
                    r3 = typeof r3;
                    if(!(r4 === r3)) { _fun2849_ip = 123; continue _fun2849 }
case 99: // try_start_0
                    r4 = _closure1_slot58;
                    r3 = r4.setStrictMode;
                    r2 = _closure1_slot57;
                    r1 = r3.bind(r4)(r2, r1);
case 119: // try_end0
                    _fun2849_ip = 123; continue _fun2849;
case 121: // catch_target0
                    CatchBlockStart(arg_register=1);
case 123:
                    return r0;
                }
            };
            var _closure1_slot232 = r0;
            r12 = function(a0) { // Original name: clz32Fallback, environment: r5
                _fun2850: for(var _fun2850_ip = 0; ; ) switch(_fun2850_ip) {
case 0:
                    r0 = a0;
                    r1 = 0;
                    r4 = r0 >>> r1;
                    r0 = 32;
                    if(!(r1 !== r4)) { _fun2850_ip = 51; continue _fun2850 }
case 16:
                    r3 = _closure1_slot60;
                    r2 = undefined;
                    r2 = r3.bind(r2)(r4);
                    r1 = _closure1_slot61;
                    r1 = r2 / r1;
                    r2 = r1 | 0;
                    r1 = 31;
                    r1 = r1 - r2;
                    r0 = r1 | 0;
case 51:
                    return r0;
                }
            };
            r0 = function(a0) { // Original name: getHighestPriorityLanes, environment: r5
                _fun2851: for(var _fun2851_ip = 0; ; ) switch(_fun2851_ip) {
case 0:
                    r9 = a0;
                    r0 = 42;
                    r0 = r9 & r0;
                    r13 = 0;
                    if(!(r13 === r0)) { _fun2851_ip = 425; continue _fun2851 }
case 19:
                    r1 = -r9;
                    r15 = r9 & r1;
                    r1 = 1;
                    if(!(r1 !== r15)) { _fun2851_ip = 423; continue _fun2851 }
case 36:
                    r2 = 2;
                    if(!(r2 !== r15)) { _fun2851_ip = 421; continue _fun2851 }
case 46:
                    r3 = 4;
                    if(!(r3 !== r15)) { _fun2851_ip = 419; continue _fun2851 }
case 56:
                    r4 = 8;
                    if(!(r4 !== r15)) { _fun2851_ip = 417; continue _fun2851 }
case 66:
                    r5 = 16;
                    if(!(r5 !== r15)) { _fun2851_ip = 415; continue _fun2851 }
case 76:
                    r6 = 32;
                    if(!(r6 !== r15)) { _fun2851_ip = 413; continue _fun2851 }
case 86:
                    r7 = 64;
                    if(!(r7 !== r15)) { _fun2851_ip = 411; continue _fun2851 }
case 96:
                    r8 = 128;
                    if(!(r8 !== r15)) { _fun2851_ip = 399; continue _fun2851 }
case 106:
                    r8 = 256;
                    if(!(r8 !== r15)) { _fun2851_ip = 399; continue _fun2851 }
case 119:
                    r8 = 512;
                    if(!(r8 !== r15)) { _fun2851_ip = 399; continue _fun2851 }
case 132:
                    r8 = 1024;
                    if(!(r8 !== r15)) { _fun2851_ip = 399; continue _fun2851 }
case 145:
                    r8 = 2048;
                    if(!(r8 !== r15)) { _fun2851_ip = 399; continue _fun2851 }
case 158:
                    r8 = 4096;
                    if(!(r8 !== r15)) { _fun2851_ip = 399; continue _fun2851 }
case 171:
                    r8 = 8192;
                    if(!(r8 !== r15)) { _fun2851_ip = 399; continue _fun2851 }
case 184:
                    r8 = 16384;
                    if(!(r8 !== r15)) { _fun2851_ip = 399; continue _fun2851 }
case 197:
                    r8 = 32768;
                    if(!(r8 !== r15)) { _fun2851_ip = 399; continue _fun2851 }
case 210:
                    r8 = 65536;
                    if(!(r8 !== r15)) { _fun2851_ip = 399; continue _fun2851 }
case 223:
                    r8 = 131072;
                    if(!(r8 !== r15)) { _fun2851_ip = 399; continue _fun2851 }
case 236:
                    r8 = 262144;
                    if(!(r8 !== r15)) { _fun2851_ip = 399; continue _fun2851 }
case 249:
                    r8 = 524288;
                    if(!(r8 !== r15)) { _fun2851_ip = 399; continue _fun2851 }
case 262:
                    r8 = 1048576;
                    if(!(r8 !== r15)) { _fun2851_ip = 399; continue _fun2851 }
case 275:
                    r8 = 2097152;
                    if(!(r8 !== r15)) { _fun2851_ip = 399; continue _fun2851 }
case 285:
                    r8 = 4194304;
                    if(!(r8 !== r15)) { _fun2851_ip = 387; continue _fun2851 }
case 295:
                    r8 = 8388608;
                    if(!(r8 !== r15)) { _fun2851_ip = 387; continue _fun2851 }
case 305:
                    r8 = 16777216;
                    if(!(r8 !== r15)) { _fun2851_ip = 387; continue _fun2851 }
case 315:
                    r8 = 33554432;
                    if(!(r8 !== r15)) { _fun2851_ip = 387; continue _fun2851 }
case 325:
                    r8 = 67108864;
                    if(!(r8 !== r15)) { _fun2851_ip = 385; continue _fun2851 }
case 335:
                    r10 = 134217728;
                    if(!(r10 !== r15)) { _fun2851_ip = 383; continue _fun2851 }
case 345:
                    r11 = 268435456;
                    if(!(r11 !== r15)) { _fun2851_ip = 381; continue _fun2851 }
case 355:
                    r12 = 536870912;
                    if(!(r12 !== r15)) { _fun2851_ip = 379; continue _fun2851 }
case 365:
                    r14 = 1073741824;
                    if(!(r14 !== r15)) { _fun2851_ip = 377; continue _fun2851 }
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
            var _closure1_slot233 = r0;
            r0 = function(a0, a1) { // Original name: getNextLanes, environment: r5
                _fun2852: for(var _fun2852_ip = 0; ; ) switch(_fun2852_ip) {
case 0:
                    r2 = a0;
                    r3 = a1;
                    r9 = r2.pendingLanes;
                    r0 = 0;
                    if(!(r0 !== r9)) { _fun2852_ip = 318; continue _fun2852 }
case 20:
                    r4 = r2.suspendedLanes;
                    r7 = r2.pingedLanes;
                    r1 = r2.warmLanes;
                    r2 = r2.finishedLanes;
                    r8 = r0 !== r2;
                    r2 = 134217727;
                    r2 = r9 & r2;
                    if(!(r0 === r2)) { _fun2852_ip = 148; continue _fun2852 }
case 61:
                    r5 = ~r4;
                    r10 = r9 & r5;
                    if(!(r0 === r10)) { _fun2852_ip = 132; continue _fun2852 }
case 72:
                    if(!(r0 === r7)) { _fun2852_ip = 116; continue _fun2852 }
case 76:
                    r5 = 0;
                    if(r8) { _fun2852_ip = 234; continue _fun2852 }
case 84:
                    r6 = ~r1;
                    r12 = r9 & r6;
                    r6 = 0;
                    if(!(r0 !== r12)) { _fun2852_ip = 111; continue _fun2852 }
case 97:
                    r11 = _closure1_slot233;
                    r9 = undefined;
                    r6 = r11.bind(r9)(r12);
case 111:
                    r5 = r6;
                    _fun2852_ip = 234; continue _fun2852;
case 116:
                    r9 = _closure1_slot233;
                    r6 = undefined;
                    r5 = r9.bind(r6)(r7);
                    _fun2852_ip = 234; continue _fun2852;
case 132:
                    r9 = _closure1_slot233;
                    r6 = undefined;
                    r5 = r9.bind(r6)(r10);
                    _fun2852_ip = 234; continue _fun2852;
case 148:
                    r6 = ~r4;
                    r6 = r2 & r6;
                    if(!(r0 === r6)) { _fun2852_ip = 220; continue _fun2852 }
case 159:
                    r7 = r7 & r2;
                    if(!(r0 === r7)) { _fun2852_ip = 204; continue _fun2852 }
case 167:
                    r5 = 0;
                    if(r8) { _fun2852_ip = 234; continue _fun2852 }
case 172:
                    r1 = ~r1;
                    r9 = r2 & r1;
                    r1 = 0;
                    if(!(r0 !== r9)) { _fun2852_ip = 199; continue _fun2852 }
case 185:
                    r8 = _closure1_slot233;
                    r2 = undefined;
                    r1 = r8.bind(r2)(r9);
case 199:
                    r5 = r1;
                    _fun2852_ip = 234; continue _fun2852;
case 204:
                    r2 = _closure1_slot233;
                    r1 = undefined;
                    r5 = r2.bind(r1)(r7);
                    _fun2852_ip = 234; continue _fun2852;
case 220:
                    r2 = _closure1_slot233;
                    r1 = undefined;
                    r5 = r2.bind(r1)(r6);
case 234:
                    r1 = 0;
                    if(!(r1 !== r5)) { _fun2852_ip = 316; continue _fun2852 }
case 240:
                    r2 = r5;
                    if(!(r0 !== r3)) { _fun2852_ip = 313; continue _fun2852 }
case 247:
                    r2 = r5;
                    if(!(r3 !== r5)) { _fun2852_ip = 313; continue _fun2852 }
case 254:
                    r4 = r3 & r4;
                    r2 = r5;
                    if(!(r0 === r4)) { _fun2852_ip = 313; continue _fun2852 }
case 265:
                    r4 = -r5;
                    r7 = r5 & r4;
                    r4 = -r3;
                    r6 = r3 & r4;
                    if(!(!(r7 >= r6))) { _fun2852_ip = 310; continue _fun2852 }
case 283:
                    r4 = 32;
                    r2 = r5;
                    if(!(r4 === r7)) { _fun2852_ip = 313; continue _fun2852 }
case 293:
                    r4 = 4194176;
                    r4 = r6 & r4;
                    r2 = r5;
                    if(!(r0 !== r4)) { _fun2852_ip = 313; continue _fun2852 }
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
            var _closure1_slot234 = r0;
            r0 = function(a0, a1) { // Original name: checkIfRootIsPrerendering, environment: r5
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
            var _closure1_slot235 = r0;
            r0 = function(a0, a1) { // Original name: computeExpirationTime, environment: r5
                _fun2854: for(var _fun2854_ip = 0; ; ) switch(_fun2854_ip) {
case 0:
                    r2 = a0;
                    r1 = a1;
                    r0 = 1;
                    if(!(r0 !== r2)) { _fun2854_ip = 391; continue _fun2854 }
case 16:
                    r0 = 2;
                    if(!(r0 !== r2)) { _fun2854_ip = 391; continue _fun2854 }
case 26:
                    r0 = 4;
                    if(!(r0 !== r2)) { _fun2854_ip = 391; continue _fun2854 }
case 36:
                    r0 = 8;
                    if(!(r0 !== r2)) { _fun2854_ip = 391; continue _fun2854 }
case 46:
                    r0 = 16;
                    if(!(r0 !== r2)) { _fun2854_ip = 379; continue _fun2854 }
case 56:
                    r0 = 32;
                    if(!(r0 !== r2)) { _fun2854_ip = 379; continue _fun2854 }
case 66:
                    r0 = 64;
                    if(!(r0 !== r2)) { _fun2854_ip = 379; continue _fun2854 }
case 76:
                    r0 = 128;
                    if(!(r0 !== r2)) { _fun2854_ip = 379; continue _fun2854 }
case 86:
                    r0 = 256;
                    if(!(r0 !== r2)) { _fun2854_ip = 379; continue _fun2854 }
case 99:
                    r0 = 512;
                    if(!(r0 !== r2)) { _fun2854_ip = 379; continue _fun2854 }
case 112:
                    r0 = 1024;
                    if(!(r0 !== r2)) { _fun2854_ip = 379; continue _fun2854 }
case 125:
                    r0 = 2048;
                    if(!(r0 !== r2)) { _fun2854_ip = 379; continue _fun2854 }
case 138:
                    r0 = 4096;
                    if(!(r0 !== r2)) { _fun2854_ip = 379; continue _fun2854 }
case 151:
                    r0 = 8192;
                    if(!(r0 !== r2)) { _fun2854_ip = 379; continue _fun2854 }
case 164:
                    r0 = 16384;
                    if(!(r0 !== r2)) { _fun2854_ip = 379; continue _fun2854 }
case 177:
                    r0 = 32768;
                    if(!(r0 !== r2)) { _fun2854_ip = 379; continue _fun2854 }
case 190:
                    r0 = 65536;
                    if(!(r0 !== r2)) { _fun2854_ip = 379; continue _fun2854 }
case 203:
                    r0 = 131072;
                    if(!(r0 !== r2)) { _fun2854_ip = 379; continue _fun2854 }
case 216:
                    r0 = 262144;
                    if(!(r0 !== r2)) { _fun2854_ip = 379; continue _fun2854 }
case 229:
                    r0 = 524288;
                    if(!(r0 !== r2)) { _fun2854_ip = 379; continue _fun2854 }
case 242:
                    r0 = 1048576;
                    if(!(r0 !== r2)) { _fun2854_ip = 379; continue _fun2854 }
case 255:
                    r0 = 2097152;
                    if(!(r0 !== r2)) { _fun2854_ip = 379; continue _fun2854 }
case 265:
                    r0 = 4194304;
                    if(!(r0 !== r2)) { _fun2854_ip = 371; continue _fun2854 }
case 275:
                    r0 = 8388608;
                    if(!(r0 !== r2)) { _fun2854_ip = 371; continue _fun2854 }
case 285:
                    r0 = 16777216;
                    if(!(r0 !== r2)) { _fun2854_ip = 371; continue _fun2854 }
case 295:
                    r0 = 33554432;
                    if(!(r0 !== r2)) { _fun2854_ip = 371; continue _fun2854 }
case 305:
                    r0 = 67108864;
                    if(!(r0 !== r2)) { _fun2854_ip = 363; continue _fun2854 }
case 315:
                    r0 = 134217728;
                    if(!(r0 !== r2)) { _fun2854_ip = 363; continue _fun2854 }
case 325:
                    r0 = 268435456;
                    if(!(r0 !== r2)) { _fun2854_ip = 363; continue _fun2854 }
case 335:
                    r0 = 536870912;
                    if(!(r0 !== r2)) { _fun2854_ip = 363; continue _fun2854 }
case 345:
                    r0 = 1073741824;
                    if(!(r0 !== r2)) { _fun2854_ip = 363; continue _fun2854 }
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
            var _closure1_slot236 = r0;
            r0 = function() { // Original name: claimNextTransitionLane, environment: r5
                _fun2855: for(var _fun2855_ip = 0; ; ) switch(_fun2855_ip) {
case 0:
                    r0 = _closure1_slot62;
                    r1 = 1;
                    r4 = r0 << r1;
                    _closure1_slot62 = r4;
                    r3 = 0;
                    r1 = 4194176;
                    r1 = r4 & r1;
                    if(!(r3 === r1)) { _fun2855_ip = 41; continue _fun2855 }
case 34:
                    r1 = 128;
                    _closure1_slot62 = r1;
case 41:
                    return r0;
                }
            };
            var _closure1_slot237 = r0;
            r0 = function() { // Original name: claimNextRetryLane, environment: r5
                _fun2856: for(var _fun2856_ip = 0; ; ) switch(_fun2856_ip) {
case 0:
                    r0 = _closure1_slot63;
                    r1 = 1;
                    r4 = r0 << r1;
                    _closure1_slot63 = r4;
                    r3 = 0;
                    r1 = 62914560;
                    r1 = r4 & r1;
                    if(!(r3 === r1)) { _fun2856_ip = 44; continue _fun2856 }
case 34:
                    r1 = 4194304;
                    _closure1_slot63 = r1;
case 44:
                    return r0;
                }
            };
            var _closure1_slot238 = r0;
            r0 = function(a0) { // Original name: createLaneMap, environment: r5
                _fun2857: for(var _fun2857_ip = 0; ; ) switch(_fun2857_ip) {
case 0:
                    r3 = a0;
                    r0 = new Array(0);
                    r1 = 31;
                    r2 = 0;
case 12:
                    r4 = r0.push;
                    r4 = r4.bind(r0)(r3);
                    r2 = r2 + 1;
                    if(r1 > r2) { _fun2857_ip = 12; continue _fun2857 }
case 29:
                    return r0;
                }
            };
            var _closure1_slot239 = r0;
            r0 = function(a0, a1) { // Original name: markRootUpdated$1, environment: r5
                _fun2858: for(var _fun2858_ip = 0; ; ) switch(_fun2858_ip) {
case 0:
                    r1 = a0;
                    r2 = a1;
                    r0 = r1.pendingLanes;
                    r0 = r0 | r2;
                    r1['pendingLanes'] = r0;
                    r0 = 268435456;
                    if(!(r0 !== r2)) { _fun2858_ip = 51; continue _fun2858 }
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
            var _closure1_slot240 = r0;
            r0 = function(a0, a1, a2, a3, a4, a5) { // Original name: markRootFinished, environment: r5
                _fun2859: for(var _fun2859_ip = 0; ; ) switch(_fun2859_ip) {
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
                    if(!(r6 < r13)) { _fun2859_ip = 271; continue _fun2859 }
case 153:
                    r17 = _closure1_slot59;
                    r17 = r17.bind(r0)(r13);
                    r17 = r9 - r17;
                    r16[r17] = r6;
                    r15[r17] = r8;
                    r22 = r14[r17];
                    r19 = r13;
                    r23 = r7;
                    r18 = r23;
                    if(!(r11 !== r22)) { _fun2859_ip = 253; continue _fun2859 }
case 191:
                    r14[r17] = r11;
                    r20 = r22.length;
                    r20 = r6 < r20;
                    r21 = 0;
                    r18 = r23;
                    if(!r20) { _fun2859_ip = 253; continue _fun2859 }
case 212:
                    r24 = r22[r21];
                    r20 = r21;
                    if(!(r11 !== r24)) { _fun2859_ip = 238; continue _fun2859 }
case 223:
                    r23 = r24.lane;
                    r23 = r23 & r10;
                    r24['lane'] = r23;
case 238:
                    r21 = r20 + 1;
                    r20 = r22.length;
                    r18 = r24;
                    if(r21 < r20) { _fun2859_ip = 212; continue _fun2859 }
case 253:
                    r17 = r12 << r17;
                    r17 = ~r17;
                    r13 = r19 & r17;
                    r7 = r18;
                    if(r6 < r13) { _fun2859_ip = 153; continue _fun2859 }
case 271:
                    if(!(r6 !== r3)) { _fun2859_ip = 286; continue _fun2859 }
case 275:
                    r1 = _closure1_slot242;
                    r1 = r1.bind(r0)(r2, r3, r6);
case 286:
                    r1 = r6 !== r4;
                    if(!r1) { _fun2859_ip = 300; continue _fun2859 }
case 293:
                    r3 = a4;
                    r1 = r6 === r3;
case 300:
                    if(!r1) { _fun2859_ip = 335; continue _fun2859 }
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
            var _closure1_slot241 = r0;
            r0 = function(a0, a1, a2) { // Original name: markSpawnedDeferredLane, environment: r5
                r1 = a0;
                r4 = a1;
                r0 = r1.pendingLanes;
                r0 = r0 | r4;
                r1['pendingLanes'] = r0;
                r2 = r1.suspendedLanes;
                r0 = ~r4;
                r0 = r2 & r0;
                r1['suspendedLanes'] = r0;
                r2 = _closure1_slot59;
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
            var _closure1_slot242 = r0;
            r0 = function(a0, a1) { // Original name: markRootEntangled, environment: r5
                _fun2861: for(var _fun2861_ip = 0; ; ) switch(_fun2861_ip) {
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
                    if(!r5) { _fun2861_ip = 103; continue _fun2861 }
case 42:
                    r7 = _closure1_slot59;
                    r7 = r7.bind(r0)(r5);
                    r10 = r2 - r7;
                    r7 = r1 << r10;
                    r9 = r7 & r6;
                    r8 = r4[r10];
                    r8 = r8 & r6;
                    r9 = r9 | r8;
                    r8 = r5;
                    if(!r9) { _fun2861_ip = 93; continue _fun2861 }
case 81:
                    r9 = r4[r10];
                    r9 = r9 | r6;
                    r4[r10] = r9;
case 93:
                    r7 = ~r7;
                    r5 = r8 & r7;
                    if(r5) { _fun2861_ip = 42; continue _fun2861 }
case 103:
                    return r0;
                }
            };
            var _closure1_slot243 = r0;
            r0 = function(a0) { // Original name: lanesToEventPriority, environment: r5
                _fun2862: for(var _fun2862_ip = 0; ; ) switch(_fun2862_ip) {
case 0:
                    r1 = a0;
                    r0 = -r1;
                    r3 = r1 & r0;
                    r0 = 2;
                    if(!(r0 < r3)) { _fun2862_ip = 55; continue _fun2862 }
case 17:
                    r1 = 8;
                    if(!(r1 < r3)) { _fun2862_ip = 52; continue _fun2862 }
case 24:
                    r2 = 134217727;
                    r4 = r3 & r2;
                    r2 = 268435456;
                    r3 = 0;
                    if(!(r3 !== r4)) { _fun2862_ip = 49; continue _fun2862 }
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
            var _closure1_slot244 = r0;
            r7 = function() { // Original name: getInspectorDataForInstance, environment: r5
                r0 = global;
                r2 = r0.Error;
                r1 = undefined;
                r0 = 'getInspectorDataForInstance() is not available in production';
                r0 = r2.bind(r1)(r0);
                throw r0;
            };
            r0 = function() { // Original name: shim$1, environment: r5
                r0 = global;
                r2 = r0.Error;
                r1 = undefined;
                r0 = 'The current renderer does not support hydration. This error is likely caused by a bug in React. Please file an issue.';
                r0 = r2.bind(r1)(r0);
                throw r0;
            };
            var _closure1_slot245 = r0;
            r0 = function() { // Original name: shim, environment: r5
                r0 = global;
                r2 = r0.Error;
                r1 = undefined;
                r0 = 'The current renderer does not support Resources. This error is likely caused by a bug in React. Please file an issue.';
                r0 = r2.bind(r1)(r0);
                throw r0;
            };
            var _closure1_slot246 = r0;
            r0 = function() { // Original name: allocateTag, environment: r5
                _fun2866: for(var _fun2866_ip = 0; ; ) switch(_fun2866_ip) {
case 0:
                    r3 = _closure1_slot65;
                    r0 = 10;
                    r4 = r3 % r0;
                    r1 = 1;
                    r0 = r3;
                    if(!(r1 === r4)) { _fun2866_ip = 31; continue _fun2866 }
case 24:
                    r1 = 2;
                    r0 = r3 + r1;
case 31:
                    r1 = 2;
                    r1 = r0 + r1;
                    _closure1_slot65 = r1;
                    return r0;
                }
            };
            var _closure1_slot247 = r0;
            r0 = function(a0) { // Original name: recursivelyUncacheFiberNode, environment: r5
                _fun2867: for(var _fun2867_ip = 0; ; ) switch(_fun2867_ip) {
case 0:
                    r2 = a0;
                    r1 = 'number';
                    r0 = typeof r2;
                    if(!(r1 !== r0)) { _fun2867_ip = 72; continue _fun2867 }
case 14:
                    r4 = r2._nativeTag;
                    r3 = _closure1_slot47;
                    r1 = r3.delete;
                    r1 = r1.bind(r3)(r4);
                    r3 = _closure1_slot48;
                    r1 = r3.delete;
                    r1 = r1.bind(r3)(r4);
                    r3 = r2._children;
                    r1 = r3.forEach;
                    r0 = _closure1_slot248;
                    r0 = r1.bind(r3)(r0);
                    _fun2867_ip = 103; continue _fun2867;
case 72:
                    r3 = _closure1_slot47;
                    r1 = r3.delete;
                    r1 = r1.bind(r3)(r2);
                    r1 = _closure1_slot48;
                    r0 = r1.delete;
                    r0 = r0.bind(r1)(r2);
case 103:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot248 = r0;
            r0 = function(a0) { // Original name: finalizeInitialChildren, environment: r5
                _fun2868: for(var _fun2868_ip = 0; ; ) switch(_fun2868_ip) {
case 0:
                    r0 = a0;
                    r1 = r0._children;
                    r2 = r1.length;
                    r1 = 0;
                    if(!(r1 !== r2)) { _fun2868_ip = 95; continue _fun2868 }
case 20:
                    r3 = r0._children;
                    r2 = r3.map;
                    r1 = function(a0) { // Environment: r1
                        _fun2869: for(var _fun2869_ip = 0; ; ) switch(_fun2869_ip) {
case 0:
                            r1 = a0;
                            r3 = 'number';
                            r2 = typeof r1;
                            r0 = r1;
                            if(!(r3 !== r2)) { _fun2869_ip = 22; continue _fun2869 }
case 17:
                            r0 = r1._nativeTag;
case 22:
                            return r0;
                        }
                    };
                    r3 = r2.bind(r3)(r1);
                    r4 = _closure1_slot0;
                    r2 = _closure1_slot1;
                    r1 = 2;
                    r2 = r2[r1];
                    r1 = undefined;
                    r1 = r4.bind(r1)(r2);
                    r2 = r1.UIManager;
                    r1 = r2.setChildren;
                    r0 = r0._nativeTag;
                    r0 = r1.bind(r2)(r0, r3);
                    r0 = false;
                    return r0;
case 95:
                    r0 = false;
                    return r0;
                }
            };
            var _closure1_slot249 = r0;
            r0 = function(a0) { // Original name: getPublicInstance, environment: r5
                _fun2870: for(var _fun2870_ip = 0; ; ) switch(_fun2870_ip) {
case 0:
                    r1 = a0;
                    r2 = r1.canonical;
                    r3 = null;
                    r0 = r1;
                    if(!(r3 != r2)) { _fun2870_ip = 46; continue _fun2870 }
case 17:
                    r2 = r1.canonical;
                    r2 = r2.publicInstance;
                    r0 = r1;
                    if(!(r3 != r2)) { _fun2870_ip = 46; continue _fun2870 }
case 35:
                    r1 = r1.canonical;
                    r0 = r1.publicInstance;
case 46:
                    return r0;
                }
            };
            var _closure1_slot250 = r0;
            r21 = function(a0) { // Original name: createCursor, environment: r5
                r0 = {};
                r1 = a0;
                r0['current'] = r1;
                return r0;
            };
            r0 = function(a0) { // Original name: pop, environment: r5
                _fun2872: for(var _fun2872_ip = 0; ; ) switch(_fun2872_ip) {
case 0:
                    r2 = _closure1_slot71;
                    r0 = 0;
                    if(!(!(r0 > r2))) { _fun2872_ip = 59; continue _fun2872 }
case 13:
                    r2 = _closure1_slot70;
                    r0 = _closure1_slot71;
                    r2 = r2[r0];
                    r0 = a0;
                    r0['current'] = r2;
                    r3 = _closure1_slot70;
                    r2 = _closure1_slot71;
                    r0 = null;
                    r3[r2] = r0;
                    r0 = _closure1_slot71;
                    r0 = r0 - 1;
                    _closure1_slot71 = r0;
case 59:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot251 = r0;
            r0 = function(a0, a1) { // Original name: push, environment: r5
                r1 = a0;
                r2 = _closure1_slot71;
                r3 = r2 + 1;
                _closure1_slot71 = r3;
                r2 = _closure1_slot70;
                r0 = r1.current;
                r2[r3] = r0;
                r0 = a1;
                r1['current'] = r0;
                r0 = undefined;
                return r0;
            };
            var _closure1_slot252 = r0;
            r46 = function(a0, a1) { // Original name: is, environment: r5
                _fun2874: for(var _fun2874_ip = 0; ; ) switch(_fun2874_ip) {
case 0:
                    r1 = a0;
                    r2 = a1;
                    r0 = r1 === r2;
                    if(!r0) { _fun2874_ip = 40; continue _fun2874 }
case 13:
                    r3 = 0;
                    r3 = r3 !== r1;
                    if(r3) { _fun2874_ip = 37; continue _fun2874 }
case 22:
                    r4 = 1;
                    r5 = r4 / r1;
                    r4 = r4 / r2;
                    r3 = r5 === r4;
case 37:
                    r0 = r3;
case 40:
                    if(r0) { _fun2874_ip = 57; continue _fun2874 }
case 43:
                    r1 = r1 !== r1;
                    if(!r1) { _fun2874_ip = 54; continue _fun2874 }
case 50:
                    r1 = r2 !== r2;
case 54:
                    r0 = r1;
case 57:
                    return r0;
                }
            };
            r0 = function(a0, a1) { // Original name: createCapturedValueAtFiber, environment: r5
                _fun2875: for(var _fun2875_ip = 0; ; ) switch(_fun2875_ip) {
case 0:
                    r4 = a0;
                    r6 = a1;
                    r1 = 'object';
                    r0 = typeof r4;
                    if(!(r1 === r0)) { _fun2875_ip = 23; continue _fun2875 }
case 17:
                    r0 = null;
                    if(!(r0 === r4)) { _fun2875_ip = 54; continue _fun2875 }
case 23:
                    r0 = {};
                    r0['value'] = r4;
                    r0['source'] = r6;
                    r2 = _closure1_slot181;
                    r1 = undefined;
                    r1 = r2.bind(r1)(r6);
                    r0['stack'] = r1;
                    return r0;
case 54:
                    r1 = _closure1_slot74;
                    r0 = r1.get;
                    r0 = r0.bind(r1)(r4);
                    r5 = undefined;
                    if(!(r5 === r0)) { _fun2875_ip = 118; continue _fun2875 }
case 77:
                    r1 = {};
                    r1['value'] = r4;
                    r1['source'] = r6;
                    r3 = _closure1_slot181;
                    r3 = r3.bind(r5)(r6);
                    r1['stack'] = r3;
                    r3 = _closure1_slot74;
                    r2 = r3.set;
                    r2 = r2.bind(r3)(r4, r1);
                    return r1;
case 118:
                    return r0;
                }
            };
            var _closure1_slot253 = r0;
            r0 = function(a0, a1) { // Original name: pushHostContainer, environment: r5
                r3 = _closure1_slot252;
                r4 = _closure1_slot77;
                r0 = undefined;
                r2 = a1;
                r2 = r3.bind(r0)(r4, r2);
                r4 = _closure1_slot76;
                r2 = a0;
                r2 = r3.bind(r0)(r4, r2);
                r4 = _closure1_slot75;
                r2 = null;
                r2 = r3.bind(r0)(r4, r2);
                r4 = _closure1_slot251;
                r2 = _closure1_slot75;
                r2 = r4.bind(r0)(r2);
                r2 = _closure1_slot75;
                r1 = {};
                r4 = false;
                r1['isInAParentText'] = r4;
                r1 = r3.bind(r0)(r2, r1);
                return r0;
            };
            var _closure1_slot254 = r0;
            r0 = function() { // Original name: popHostContainer, environment: r5
                r2 = _closure1_slot251;
                r3 = _closure1_slot75;
                r0 = undefined;
                r3 = r2.bind(r0)(r3);
                r3 = _closure1_slot76;
                r3 = r2.bind(r0)(r3);
                r1 = _closure1_slot77;
                r1 = r2.bind(r0)(r1);
                return r0;
            };
            var _closure1_slot255 = r0;
            r0 = function(a0) { // Original name: pushHostContext, environment: r5
                _fun2878: for(var _fun2878_ip = 0; ; ) switch(_fun2878_ip) {
case 0:
                    r5 = a0;
                    r1 = r5.memoizedState;
                    r0 = null;
                    if(!(r0 !== r1)) { _fun2878_ip = 33; continue _fun2878 }
case 14:
                    r2 = _closure1_slot252;
                    r1 = _closure1_slot78;
                    r0 = undefined;
                    r0 = r2.bind(r0)(r1, r5);
case 33:
                    r1 = _closure1_slot75;
                    r1 = r1.current;
                    r3 = r5.type;
                    r2 = 'AndroidTextInput';
                    r4 = r2 === r3;
                    if(r4) { _fun2878_ip = 69; continue _fun2878 }
case 61:
                    r2 = 'RCTMultilineTextInputView';
                    r4 = r2 === r3;
case 69:
                    if(r4) { _fun2878_ip = 80; continue _fun2878 }
case 72:
                    r2 = 'RCTSinglelineTextInputView';
                    r4 = r2 === r3;
case 80:
                    if(r4) { _fun2878_ip = 91; continue _fun2878 }
case 83:
                    r2 = 'RCTText';
                    r4 = r2 === r3;
case 91:
                    if(r4) { _fun2878_ip = 102; continue _fun2878 }
case 94:
                    r2 = 'RCTVirtualText';
                    r4 = r2 === r3;
case 102:
                    r2 = r1.isInAParentText;
                    r3 = r1;
                    if(!(r2 !== r4)) { _fun2878_ip = 125; continue _fun2878 }
case 115:
                    r2 = {};
                    r2['isInAParentText'] = r4;
                    r3 = r2;
case 125:
                    if(!(r1 !== r3)) { _fun2878_ip = 155; continue _fun2878 }
case 129:
                    r2 = _closure1_slot252;
                    r4 = _closure1_slot76;
                    r1 = undefined;
                    r4 = r2.bind(r1)(r4, r5);
                    r0 = _closure1_slot75;
                    r0 = r2.bind(r1)(r0, r3);
case 155:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot256 = r0;
            r0 = function(a0) { // Original name: popHostContext, environment: r5
                _fun2879: for(var _fun2879_ip = 0; ; ) switch(_fun2879_ip) {
case 0:
                    r2 = a0;
                    r1 = _closure1_slot76;
                    r1 = r1.current;
                    if(!(r1 === r2)) { _fun2879_ip = 43; continue _fun2879 }
case 19:
                    r4 = _closure1_slot251;
                    r1 = _closure1_slot75;
                    r3 = undefined;
                    r1 = r4.bind(r3)(r1);
                    r1 = _closure1_slot76;
                    r1 = r4.bind(r3)(r1);
case 43:
                    r1 = _closure1_slot78;
                    r1 = r1.current;
                    if(!(r1 === r2)) { _fun2879_ip = 83; continue _fun2879 }
case 56:
                    r3 = _closure1_slot251;
                    r2 = _closure1_slot78;
                    r1 = undefined;
                    r1 = r3.bind(r1)(r2);
                    r1 = _closure1_slot69;
                    r0 = null;
                    r1['_currentValue'] = r0;
case 83:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot257 = r0;
            r0 = function() { // Original name: finishQueueingConcurrentUpdates, environment: r5
                _fun2880: for(var _fun2880_ip = 0; ; ) switch(_fun2880_ip) {
case 0:
                    r5 = _closure1_slot81;
                    r4 = 0;
                    _closure1_slot81 = r4;
                    _closure1_slot82 = r4;
                    r7 = r4 < r5;
                    r0 = undefined;
                    r3 = null;
                    r2 = 0;
                    r1 = undefined;
                    if(!r7) { _fun2880_ip = 212; continue _fun2880 }
case 35:
                    r7 = _closure1_slot80;
                    r12 = r7[r2];
                    r9 = _closure1_slot80;
                    r8 = parseFloat(r2);
                    r7 = r8 + 1;
                    r9[r8] = r3;
                    r8 = _closure1_slot80;
                    r13 = r8[r7];
                    r9 = _closure1_slot80;
                    r8 = parseFloat(r7);
                    r7 = r8 + 1;
                    r9[r8] = r3;
                    r8 = _closure1_slot80;
                    r11 = r8[r7];
                    r9 = _closure1_slot80;
                    r8 = parseFloat(r7);
                    r7 = r8 + 1;
                    r9[r8] = r3;
                    r8 = _closure1_slot80;
                    r10 = r8[r7];
                    r9 = _closure1_slot80;
                    r8 = parseFloat(r7);
                    r7 = r8 + 1;
                    r9[r8] = r3;
                    r9 = r1;
                    r8 = r9;
                    if(!(r3 !== r13)) { _fun2880_ip = 183; continue _fun2880 }
case 133:
                    r8 = r9;
                    if(!(r3 !== r11)) { _fun2880_ip = 183; continue _fun2880 }
case 140:
                    r9 = r13.pending;
                    if(!(r3 !== r9)) { _fun2880_ip = 168; continue _fun2880 }
case 149:
                    r14 = r9.next;
                    r11['next'] = r14;
                    r9['next'] = r11;
                    _fun2880_ip = 174; continue _fun2880;
case 168:
                    r11['next'] = r11;
case 174:
                    r13['pending'] = r11;
                    r8 = r9;
case 183:
                    if(!(r4 !== r10)) { _fun2880_ip = 199; continue _fun2880 }
case 187:
                    r9 = _closure1_slot262;
                    r9 = r9.bind(r0)(r12, r11, r10);
case 199:
                    r1 = r8;
                    r2 = r7;
                    if(r2 < r5) { _fun2880_ip = 35; continue _fun2880 }
case 212:
                    return r0;
                }
            };
            var _closure1_slot258 = r0;
            r0 = function(a0, a1, a2, a3) { // Original name: enqueueUpdate$1, environment: r5
                _fun2881: for(var _fun2881_ip = 0; ; ) switch(_fun2881_ip) {
case 0:
                    r0 = a0;
                    r2 = a3;
                    r4 = _closure1_slot80;
                    r1 = _closure1_slot81;
                    r1 = parseFloat(r1);
                    r5 = r1 + 1;
                    _closure1_slot81 = r5;
                    r4[r1] = r0;
                    r5 = _closure1_slot80;
                    r1 = _closure1_slot81;
                    r4 = parseFloat(r1);
                    r1 = r4 + 1;
                    _closure1_slot81 = r1;
                    r1 = a1;
                    r5[r4] = r1;
                    r5 = _closure1_slot80;
                    r1 = _closure1_slot81;
                    r4 = parseFloat(r1);
                    r1 = r4 + 1;
                    _closure1_slot81 = r1;
                    r1 = a2;
                    r5[r4] = r1;
                    r4 = _closure1_slot80;
                    r1 = _closure1_slot81;
                    r1 = parseFloat(r1);
                    r5 = r1 + 1;
                    _closure1_slot81 = r5;
                    r4[r1] = r2;
                    r1 = _closure1_slot82;
                    r1 = r1 | r2;
                    _closure1_slot82 = r1;
                    r1 = r0.lanes;
                    r1 = r1 | r2;
                    r0['lanes'] = r1;
                    r1 = r0.alternate;
                    r0 = null;
                    if(!(r0 !== r1)) { _fun2881_ip = 156; continue _fun2881 }
case 141:
                    r0 = r1.lanes;
                    r0 = r0 | r2;
                    r1['lanes'] = r0;
case 156:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot259 = r0;
            r0 = function(a0, a1, a2, a3) { // Original name: enqueueConcurrentHookUpdate, environment: r5
                r2 = a0;
                r6 = _closure1_slot259;
                r1 = undefined;
                r9 = a1;
                r8 = a2;
                r7 = a3;
                r11 = undefined;
                r10 = r2;
                r3 = r11[r6](r10, r9, r8, r7, r6);
                r0 = _closure1_slot263;
                r0 = r0.bind(r1)(r2);
                return r0;
            };
            var _closure1_slot260 = r0;
            r0 = function(a0, a1) { // Original name: enqueueConcurrentRenderForLane, environment: r5
                r2 = a0;
                r5 = _closure1_slot259;
                r1 = undefined;
                r6 = a1;
                r10 = undefined;
                r9 = r2;
                r8 = null;
                r7 = null;
                r3 = r10[r5](r9, r8, r7, r6, r5);
                r0 = _closure1_slot263;
                r0 = r0.bind(r1)(r2);
                return r0;
            };
            var _closure1_slot261 = r0;
            r0 = function(a0, a1, a2) { // Original name: markUpdateLaneFromFiberToRoot, environment: r5
                _fun2884: for(var _fun2884_ip = 0; ; ) switch(_fun2884_ip) {
case 0:
                    r3 = a0;
                    r1 = a1;
                    r2 = a2;
                    r0 = r3.lanes;
                    r0 = r0 | r2;
                    r3['lanes'] = r0;
                    r5 = r3.alternate;
                    r0 = null;
                    if(!(r0 !== r5)) { _fun2884_ip = 50; continue _fun2884 }
case 35:
                    r4 = r5.lanes;
                    r4 = r4 | r2;
                    r5['lanes'] = r4;
case 50:
                    r9 = r3.return;
                    r5 = false;
                    r7 = 1;
                    r6 = 22;
                    r4 = false;
                    if(!(r0 !== r9)) { _fun2884_ip = 173; continue _fun2884 }
case 69:
                    r10 = r9.childLanes;
                    r10 = r10 | r2;
                    r9['childLanes'] = r10;
                    r13 = r9.alternate;
                    r10 = r5;
                    r12 = r9;
                    if(!(r0 !== r13)) { _fun2884_ip = 114; continue _fun2884 }
case 99:
                    r11 = r13.childLanes;
                    r11 = r11 | r2;
                    r13['childLanes'] = r11;
case 114:
                    r13 = r12.tag;
                    r11 = r10;
                    if(!(r6 === r13)) { _fun2884_ip = 155; continue _fun2884 }
case 126:
                    r14 = r12.stateNode;
                    r13 = r0 === r14;
                    if(r13) { _fun2884_ip = 147; continue _fun2884 }
case 138:
                    r14 = r14._visibility;
                    r13 = r14 & r7;
case 147:
                    if(r13) { _fun2884_ip = 152; continue _fun2884 }
case 150:
                    r10 = true;
case 152:
                    r11 = r10;
case 155:
                    r9 = r12.return;
                    r5 = r11;
                    r3 = r12;
                    r4 = r5;
                    if(r0 !== r9) { _fun2884_ip = 69; continue _fun2884 }
case 173:
                    if(!r4) { _fun2884_ip = 180; continue _fun2884 }
case 176:
                    r4 = r0 !== r1;
case 180:
                    if(!r4) { _fun2884_ip = 195; continue _fun2884 }
case 183:
                    r6 = r3.tag;
                    r5 = 3;
                    r4 = r5 === r6;
case 195:
                    if(!r4) { _fun2884_ip = 278; continue _fun2884 }
case 198:
                    r3 = r3.stateNode;
                    r5 = _closure1_slot59;
                    r4 = undefined;
                    r5 = r5.bind(r4)(r2);
                    r4 = 31;
                    r4 = r4 - r5;
                    r3 = r3.hiddenUpdates;
                    r5 = r3[r4];
                    if(!(r0 !== r5)) { _fun2884_ip = 250; continue _fun2884 }
case 238:
                    r0 = r5.push;
                    r0 = r0.bind(r5)(r1);
                    _fun2884_ip = 262; continue _fun2884;
case 250:
                    r0 = new Array(1);
                    r0[0] = r1;
                    r3[r4] = r0;
case 262:
                    r0 = 536870912;
                    r0 = r2 | r0;
                    r1['lane'] = r0;
case 278:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot262 = r0;
            r0 = function(a0) { // Original name: getRootForUpdatedFiber, environment: r5
                _fun2885: for(var _fun2885_ip = 0; ; ) switch(_fun2885_ip) {
case 0:
                    r2 = a0;
                    r3 = _closure1_slot174;
                    r0 = 50;
                    if(!(!(r0 < r3))) { _fun2885_ip = 64; continue _fun2885 }
case 17:
                    r3 = r2.return;
                    r0 = null;
                    if(!(r0 !== r3)) { _fun2885_ip = 43; continue _fun2885 }
case 28:
                    r4 = r3.return;
                    r2 = r3;
                    r3 = r4;
                    if(r0 !== r3) { _fun2885_ip = 28; continue _fun2885 }
case 43:
                    r4 = r2.tag;
                    r3 = 3;
                    r0 = null;
                    if(!(r3 === r4)) { _fun2885_ip = 62; continue _fun2885 }
case 57:
                    r0 = r2.stateNode;
case 62:
                    return r0;
case 64:
                    r0 = 0;
                    _closure1_slot174 = r0;
                    r0 = null;
                    _closure1_slot175 = r0;
                    r0 = global;
                    r2 = r0.Error;
                    r1 = undefined;
                    r0 = 'Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.';
                    r0 = r2.bind(r1)(r0);
                    throw r0;
                }
            };
            var _closure1_slot263 = r0;
            r0 = function(a0) { // Original name: ensureRootIsScheduled, environment: r5
                _fun2886: for(var _fun2886_ip = 0; ; ) switch(_fun2886_ip) {
case 0:
                    r1 = a0;
                    r2 = _closure1_slot84;
                    r2 = r1 !== r2;
                    if(!r2) { _fun2886_ip = 28; continue _fun2886 }
case 17:
                    r4 = r1.next;
                    r3 = null;
                    r2 = r3 === r4;
case 28:
                    if(!r2) { _fun2886_ip = 65; continue _fun2886 }
case 31:
                    r3 = _closure1_slot84;
                    r2 = null;
                    if(!(r2 !== r3)) { _fun2886_ip = 57; continue _fun2886 }
case 41:
                    r2 = _closure1_slot84;
                    r2['next'] = r1;
                    _closure1_slot84 = r1;
                    _fun2886_ip = 65; continue _fun2886;
case 57:
                    _closure1_slot84 = r1;
                    _closure1_slot83 = r1;
case 65:
                    r1 = true;
                    _closure1_slot86 = r1;
                    r2 = _closure1_slot85;
                    if(r2) { _fun2886_ip = 136; continue _fun2886 }
case 78:
                    _closure1_slot85 = r1;
                    r5 = _closure1_slot0;
                    r6 = _closure1_slot1;
                    r1 = 3;
                    r2 = r6[r1];
                    r4 = undefined;
                    r3 = r5.bind(r4)(r2);
                    r2 = r3.unstable_scheduleCallback;
                    r1 = r6[r1];
                    r1 = r5.bind(r4)(r1);
                    r1 = r1.unstable_ImmediatePriority;
                    r0 = _closure1_slot266;
                    r0 = r2.bind(r3)(r1, r0);
case 136:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot264 = r0;
            r0 = function(a0, a1) { // Original name: flushSyncWorkAcrossRoots_impl, environment: r5
                _fun2887: for(var _fun2887_ip = 0; ; ) switch(_fun2887_ip) {
case 0:
                    r15 = a1;
                    r0 = _closure1_slot87;
                    if(r0) { _fun2887_ip = 385; continue _fun2887 }
case 16:
                    r0 = _closure1_slot86;
                    if(!r0) { _fun2887_ip = 385; continue _fun2887 }
case 26:
                    r14 = true;
                    _closure1_slot87 = r14;
                    r13 = undefined;
                    r0 = false;
                    r12 = null;
                    r11 = 0;
                    r10 = 1;
                    r9 = 2;
                    r2 = 42;
                    r8 = r2 | r11;
                    r7 = 31;
                    r6 = 201326677;
                    r5 = 3;
                    r4 = undefined;
                    r3 = undefined;
case 69:
                    r21 = _closure1_slot83;
                    r19 = r4;
                    r18 = r3;
                    r20 = false;
                    r2 = false;
                    r17 = r19;
                    r16 = r18;
                    if(!(r12 !== r21)) { _fun2887_ip = 369; continue _fun2887 }
case 96:
                    r28 = r20;
                    r22 = r21;
                    r27 = r19;
                    r23 = r18;
                    if(!r15) { _fun2887_ip = 129; continue _fun2887 }
case 111:
                    r26 = r22.tag;
                    r25 = r28;
                    r24 = r27;
                    if(!(r11 === r26)) { _fun2887_ip = 339; continue _fun2887 }
case 129:
                    if(!(r11 === r11)) { _fun2887_ip = 217; continue _fun2887 }
case 133:
                    r30 = _closure1_slot149;
                    r29 = _closure1_slot234;
                    r31 = _closure1_slot147;
                    r26 = 0;
                    if(!(r22 === r31)) { _fun2887_ip = 154; continue _fun2887 }
case 151:
                    r26 = r30;
case 154:
                    r26 = r29.bind(r13)(r22, r26);
                    r29 = r26 & r5;
                    r29 = r11 === r29;
                    if(r29) { _fun2887_ip = 181; continue _fun2887 }
case 171:
                    r30 = _closure1_slot235;
                    r29 = r30.bind(r13)(r22, r26);
case 181:
                    r25 = r28;
                    r24 = r27;
                    r23 = r26;
                    if(r29) { _fun2887_ip = 339; continue _fun2887 }
case 196:
                    r29 = _closure1_slot269;
                    r29 = r29.bind(r13)(r22, r26);
                    r25 = true;
                    r24 = r27;
                    r23 = r26;
                    _fun2887_ip = 339; continue _fun2887;
case 217:
                    r27 = r22.pendingLanes;
                    r26 = 0;
                    if(!(r26 !== r27)) { _fun2887_ip = 307; continue _fun2887 }
case 228:
                    r31 = r22.suspendedLanes;
                    r30 = r22.pingedLanes;
                    r29 = _closure1_slot59;
                    r29 = r29.bind(r13)(r8);
                    r29 = r7 - r29;
                    r30 = ~r30;
                    r30 = r31 & r30;
                    r30 = ~r30;
                    r30 = r27 & r30;
                    r29 = r29 + r10;
                    r29 = r10 << r29;
                    r29 = r29 - r10;
                    r31 = r29 & r30;
                    r30 = r31 & r6;
                    if(r30) { _fun2887_ip = 300; continue _fun2887 }
case 289:
                    r29 = 0;
                    if(!r31) { _fun2887_ip = 298; continue _fun2887 }
case 294:
                    r29 = r31 | r9;
case 298:
                    _fun2887_ip = 304; continue _fun2887;
case 300:
                    r29 = r30 | r10;
case 304:
                    r26 = r29;
case 307:
                    r25 = r28;
                    r24 = r27;
                    r23 = r26;
                    if(!(r11 !== r23)) { _fun2887_ip = 339; continue _fun2887 }
case 320:
                    r28 = _closure1_slot269;
                    r28 = r28.bind(r13)(r22, r26);
                    r25 = true;
                    r24 = r27;
                    r23 = r26;
case 339:
                    r21 = r22.next;
                    r20 = r25;
                    r19 = r24;
                    r18 = r23;
                    r2 = r20;
                    r17 = r19;
                    r16 = r18;
                    if(r12 !== r21) { _fun2887_ip = 96; continue _fun2887 }
case 369:
                    r4 = r17;
                    r3 = r16;
                    if(r2) { _fun2887_ip = 69; continue _fun2887 }
case 381:
                    _closure1_slot87 = r0;
case 385:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot265 = r0;
            r0 = function() { // Original name: processRootScheduleInMicrotask, environment: r5
                _fun2888: for(var _fun2888_ip = 0; ; ) switch(_fun2888_ip) {
case 0:
                    r3 = false;
                    _closure1_slot85 = r3;
                    _closure1_slot86 = r3;
                    r0 = _closure1_slot88;
                    r2 = 0;
                    if(!(r2 !== r0)) { _fun2888_ip = 27; continue _fun2888 }
case 23:
                    _closure1_slot88 = r2;
case 27:
                    r5 = _closure1_slot0;
                    r0 = _closure1_slot1;
                    r9 = 3;
                    r4 = r0[r9];
                    r0 = undefined;
                    r5 = r5.bind(r0)(r4);
                    r4 = r5.unstable_now;
                    r8 = r4.bind(r5)();
                    r7 = _closure1_slot83;
                    r6 = null;
                    r5 = true;
                    r4 = null;
                    if(!(r4 !== r7)) { _fun2888_ip = 164; continue _fun2888 }
case 72:
                    r10 = r7.next;
                    r11 = _closure1_slot267;
                    r11 = r11.bind(r0)(r7, r8);
                    r12 = r4;
                    r13 = r7;
                    if(!(r2 !== r11)) { _fun2888_ip = 118; continue _fun2888 }
case 98:
                    r14 = r11 & r9;
                    r11 = r13;
                    if(!(r2 !== r14)) { _fun2888_ip = 154; continue _fun2888 }
case 109:
                    _closure1_slot86 = r5;
                    r11 = r13;
                    _fun2888_ip = 154; continue _fun2888;
case 118:
                    r13['next'] = r6;
                    if(!(r6 !== r12)) { _fun2888_ip = 136; continue _fun2888 }
case 128:
                    r12['next'] = r10;
                    _fun2888_ip = 140; continue _fun2888;
case 136:
                    _closure1_slot83 = r10;
case 140:
                    r11 = r12;
                    if(!(r6 === r10)) { _fun2888_ip = 154; continue _fun2888 }
case 147:
                    _closure1_slot84 = r12;
                    r11 = r12;
case 154:
                    r4 = r11;
                    r7 = r10;
                    if(r6 !== r7) { _fun2888_ip = 72; continue _fun2888 }
case 164:
                    r1 = _closure1_slot265;
                    r1 = r1.bind(r0)(r2, r3);
                    return r0;
                }
            };
            var _closure1_slot266 = r0;
            r0 = function(a0, a1) { // Original name: scheduleTaskForRootDuringMicrotask, environment: r5
                _fun2889: for(var _fun2889_ip = 0; ; ) switch(_fun2889_ip) {
case 0:
                    r1 = a0;
                    r11 = a1;
                    r10 = r1.suspendedLanes;
                    r9 = r1.pingedLanes;
                    r8 = r1.expirationTimes;
                    r2 = r1.pendingLanes;
                    r0 = -62914561;
                    r7 = r2 & r0;
                    r0 = 0;
                    r6 = undefined;
                    r5 = 31;
                    r4 = 1;
                    r2 = -1;
                    if(!(r0 < r7)) { _fun2889_ip = 152; continue _fun2889 }
case 61:
                    r12 = _closure1_slot59;
                    r12 = r12.bind(r6)(r7);
                    r15 = r5 - r12;
                    r12 = r4 << r15;
                    r14 = r8[r15];
                    r13 = r7;
                    if(!(r2 !== r14)) { _fun2889_ip = 111; continue _fun2889 }
case 89:
                    if(!(r14 <= r11)) { _fun2889_ip = 141; continue _fun2889 }
case 93:
                    r14 = r1.expiredLanes;
                    r14 = r14 | r12;
                    r1['expiredLanes'] = r14;
                    _fun2889_ip = 141; continue _fun2889;
case 111:
                    r14 = r12 & r10;
                    if(!(r0 !== r14)) { _fun2889_ip = 127; continue _fun2889 }
case 119:
                    r14 = r12 & r9;
                    if(!(r0 !== r14)) { _fun2889_ip = 141; continue _fun2889 }
case 127:
                    r14 = _closure1_slot236;
                    r14 = r14.bind(r6)(r12, r11);
                    r8[r15] = r14;
case 141:
                    r12 = ~r12;
                    r7 = r13 & r12;
                    if(r0 < r7) { _fun2889_ip = 61; continue _fun2889 }
case 152:
                    r2 = _closure1_slot147;
                    r7 = _closure1_slot149;
                    r5 = _closure1_slot234;
                    r2 = r1 === r2;
                    r4 = 0;
                    if(!r2) { _fun2889_ip = 176; continue _fun2889 }
case 173:
                    r4 = r7;
case 176:
                    r7 = r5.bind(r6)(r1, r4);
                    r5 = r1.callbackNode;
                    if(!(r0 !== r7)) { _fun2889_ip = 551; continue _fun2889 }
case 195:
                    if(!r2) { _fun2889_ip = 212; continue _fun2889 }
case 198:
                    r4 = _closure1_slot150;
                    r2 = 2;
                    if(!(r2 !== r4)) { _fun2889_ip = 551; continue _fun2889 }
case 212:
                    r2 = r1.cancelPendingCommit;
                    r8 = null;
                    if(!(r8 === r2)) { _fun2889_ip = 551; continue _fun2889 }
case 227:
                    r10 = 3;
                    r2 = r7 & r10;
                    if(!(r0 !== r2)) { _fun2889_ip = 300; continue _fun2889 }
case 238:
                    r2 = _closure1_slot235;
                    r2 = r2.bind(r6)(r1, r7);
                    if(r2) { _fun2889_ip = 300; continue _fun2889 }
case 251:
                    if(!(r8 !== r5)) { _fun2889_ip = 283; continue _fun2889 }
case 255:
                    r4 = _closure1_slot0;
                    r2 = _closure1_slot1;
                    r2 = r2[r10];
                    r4 = r4.bind(r6)(r2);
                    r2 = r4.unstable_cancelCallback;
                    r2 = r2.bind(r4)(r5);
case 283:
                    r2 = 2;
                    r1['callbackPriority'] = r2;
                    r1['callbackNode'] = r8;
                    return r2;
case 300:
                    r2 = -r7;
                    r2 = r7 & r2;
                    r4 = r1.callbackPriority;
                    if(!(r2 !== r4)) { _fun2889_ip = 549; continue _fun2889 }
case 320:
                    if(!(r8 !== r5)) { _fun2889_ip = 352; continue _fun2889 }
case 324:
                    r9 = _closure1_slot0;
                    r4 = _closure1_slot1;
                    r4 = r4[r10];
                    r9 = r9.bind(r6)(r4);
                    r4 = r9.unstable_cancelCallback;
                    r4 = r4.bind(r9)(r5);
case 352:
                    r4 = _closure1_slot244;
                    r7 = r4.bind(r6)(r7);
                    r4 = 2;
                    if(!(r4 !== r7)) { _fun2889_ip = 467; continue _fun2889 }
case 368:
                    r4 = 8;
                    if(!(r4 !== r7)) { _fun2889_ip = 467; continue _fun2889 }
case 375:
                    r4 = 32;
                    if(!(r4 !== r7)) { _fun2889_ip = 442; continue _fun2889 }
case 382:
                    r4 = 268435456;
                    if(!(r4 !== r7)) { _fun2889_ip = 417; continue _fun2889 }
case 392:
                    r7 = _closure1_slot0;
                    r4 = _closure1_slot1;
                    r4 = r4[r10];
                    r4 = r7.bind(r6)(r4);
                    r9 = r4.unstable_NormalPriority;
                    _fun2889_ip = 490; continue _fun2889;
case 417:
                    r7 = _closure1_slot0;
                    r4 = _closure1_slot1;
                    r4 = r4[r10];
                    r4 = r7.bind(r6)(r4);
                    r9 = r4.unstable_IdlePriority;
                    _fun2889_ip = 490; continue _fun2889;
case 442:
                    r7 = _closure1_slot0;
                    r4 = _closure1_slot1;
                    r4 = r4[r10];
                    r4 = r7.bind(r6)(r4);
                    r9 = r4.unstable_NormalPriority;
                    _fun2889_ip = 490; continue _fun2889;
case 467:
                    r7 = _closure1_slot0;
                    r4 = _closure1_slot1;
                    r4 = r4[r10];
                    r4 = r7.bind(r6)(r4);
                    r9 = r4.unstable_UserBlockingPriority;
case 490:
                    r7 = _closure1_slot268;
                    r4 = r7.bind;
                    r8 = r4.bind(r7)(r8, r1);
                    r7 = _closure1_slot0;
                    r4 = _closure1_slot1;
                    r4 = r4[r10];
                    r7 = r7.bind(r6)(r4);
                    r4 = r7.unstable_scheduleCallback;
                    r4 = r4.bind(r7)(r9, r8);
                    r1['callbackPriority'] = r2;
                    r1['callbackNode'] = r4;
                    return r2;
case 549:
                    return r2;
case 551:
                    r2 = null;
                    if(!(r2 !== r5)) { _fun2889_ip = 588; continue _fun2889 }
case 557:
                    r4 = _closure1_slot0;
                    r7 = _closure1_slot1;
                    r3 = 3;
                    r3 = r7[r3];
                    r4 = r4.bind(r6)(r3);
                    r3 = r4.unstable_cancelCallback;
                    r3 = r3.bind(r4)(r5);
case 588:
                    r1['callbackNode'] = r2;
                    r1['callbackPriority'] = r0;
                    return r0;
                }
            };
            var _closure1_slot267 = r0;
            r0 = function(a0, a1) { // Original name: performWorkOnRootViaSchedulerTask, environment: r5
                _fun2890: for(var _fun2890_ip = 0; ; ) switch(_fun2890_ip) {
case 0:
                    r4 = a0;
                    r5 = r4.callbackNode;
                    r0 = _closure1_slot468;
                    r3 = undefined;
                    r0 = r0.bind(r3)();
                    if(!r0) { _fun2890_ip = 39; continue _fun2890 }
case 26:
                    r0 = r4.callbackNode;
                    if(!(r0 === r5)) { _fun2890_ip = 178; continue _fun2890 }
case 39:
                    r7 = _closure1_slot149;
                    r6 = _closure1_slot234;
                    r8 = _closure1_slot147;
                    r0 = 0;
                    r2 = 0;
                    if(!(r4 === r8)) { _fun2890_ip = 62; continue _fun2890 }
case 59:
                    r2 = r7;
case 62:
                    r6 = r6.bind(r3)(r4, r2);
                    if(!(r0 !== r6)) { _fun2890_ip = 174; continue _fun2890 }
case 72:
                    r2 = _closure1_slot446;
                    r0 = a1;
                    r0 = r2.bind(r3)(r4, r6, r0);
                    r2 = _closure1_slot267;
                    r6 = _closure1_slot0;
                    r7 = _closure1_slot1;
                    r0 = 3;
                    r0 = r7[r0];
                    r6 = r6.bind(r3)(r0);
                    r0 = r6.unstable_now;
                    r0 = r0.bind(r6)();
                    r0 = r2.bind(r3)(r4, r0);
                    r0 = r4.callbackNode;
                    r3 = null;
                    r2 = r3 != r0;
                    r0 = null;
                    if(!r2) { _fun2890_ip = 172; continue _fun2890 }
case 144:
                    r2 = r4.callbackNode;
                    r0 = null;
                    if(!(r2 === r5)) { _fun2890_ip = 172; continue _fun2890 }
case 156:
                    r2 = _closure1_slot268;
                    r1 = r2.bind;
                    r0 = r1.bind(r2)(r3, r4);
case 172:
                    return r0;
case 174:
                    r0 = null;
                    return r0;
case 178:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot268 = r0;
            r0 = function(a0, a1) { // Original name: performSyncWorkOnRoot, environment: r5
                _fun2891: for(var _fun2891_ip = 0; ; ) switch(_fun2891_ip) {
case 0:
                    r2 = _closure1_slot468;
                    r0 = undefined;
                    r2 = r2.bind(r0)();
                    if(r2) { _fun2891_ip = 39; continue _fun2891 }
case 17:
                    r4 = _closure1_slot446;
                    r3 = a0;
                    r2 = a1;
                    r1 = true;
                    r1 = r4.bind(r0)(r3, r2, r1);
                    return r0;
case 39:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot269 = r0;
            r0 = function() { // Original name: requestTransitionLane, environment: r5
                _fun2892: for(var _fun2892_ip = 0; ; ) switch(_fun2892_ip) {
case 0:
                    r2 = _closure1_slot88;
                    r1 = 0;
                    if(!(r1 === r2)) { _fun2892_ip = 27; continue _fun2892 }
case 13:
                    r2 = _closure1_slot237;
                    r1 = undefined;
                    r1 = r2.bind(r1)();
                    _closure1_slot88 = r1;
case 27:
                    r0 = _closure1_slot88;
                    return r0;
                }
            };
            var _closure1_slot270 = r0;
            r0 = function(a0, a1) { // Original name: entangleAsyncAction, environment: r5
                _fun2893: for(var _fun2893_ip = 0; ; ) switch(_fun2893_ip) {
case 0:
                    r0 = a1;
                    r4 = _closure1_slot89;
                    r2 = null;
                    if(!(r2 === r4)) { _fun2893_ip = 78; continue _fun2893 }
case 18:
                    r2 = new Array(0);
                    _closure1_slot89 = r2;
                    var _closure2_slot0 = r2;
                    r2 = 0;
                    _closure1_slot90 = r2;
                    r2 = _closure1_slot270;
                    r4 = undefined;
                    r2 = r2.bind(r4)();
                    _closure1_slot91 = r2;
                    r2 = {};
                    r5 = 'pending';
                    r2['status'] = r5;
                    r2['value'] = r4;
                    r3 = function(a0) { // Original name: then, environment: r3
                        r2 = _closure2_slot0;
                        r1 = r2.push;
                        r0 = a0;
                        r0 = r1.bind(r2)(r0);
                        r0 = undefined;
                        return r0;
                    };
                    r2['then'] = r3;
                    _closure1_slot92 = r2;
case 78:
                    r2 = _closure1_slot90;
                    r2 = r2 + 1;
                    _closure1_slot90 = r2;
                    r2 = r0.then;
                    r1 = _closure1_slot272;
                    r1 = r2.bind(r0)(r1, r1);
                    return r0;
                }
            };
            var _closure1_slot271 = r0;
            r0 = function() { // Original name: pingEngtangledActionScope, environment: r5
                _fun2895: for(var _fun2895_ip = 0; ; ) switch(_fun2895_ip) {
case 0:
                    r0 = _closure1_slot90;
                    r0 = r0 - 1;
                    _closure1_slot90 = r0;
                    r3 = 0;
                    if(!(r3 === r0)) { _fun2895_ip = 104; continue _fun2895 }
case 20:
                    r2 = _closure1_slot89;
                    r0 = null;
                    if(!(r0 !== r2)) { _fun2895_ip = 104; continue _fun2895 }
case 30:
                    r2 = _closure1_slot92;
                    if(!(r0 !== r2)) { _fun2895_ip = 52; continue _fun2895 }
case 38:
                    r4 = _closure1_slot92;
                    r2 = 'fulfilled';
                    r4['status'] = r2;
case 52:
                    r2 = _closure1_slot89;
                    _closure1_slot89 = r0;
                    _closure1_slot91 = r3;
                    _closure1_slot92 = r0;
                    r0 = r2.length;
                    r0 = r3 < r0;
                    r1 = undefined;
                    r3 = 0;
                    if(!r0) { _fun2895_ip = 104; continue _fun2895 }
case 84:
                    r0 = r2[r3];
                    r0 = r0.bind(r1)();
                    r3 = r3 + 1;
                    r0 = r2.length;
                    if(r3 < r0) { _fun2895_ip = 84; continue _fun2895 }
case 104:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot272 = r0;
            r0 = function(a0, a1) { // Original name: chainThenableValue, environment: r5
                r4 = a0;
                r0 = a1;
                var _closure2_slot0 = r0;
                r0 = new Array(0);
                var _closure2_slot1 = r0;
                r0 = {'status': 'pending', 'value': null, 'reason': null};
                r2 = function(a0) { // Original name: then, environment: r1
                    r2 = _closure2_slot1;
                    r1 = r2.push;
                    r0 = a0;
                    r0 = r1.bind(r2)(r0);
                    r0 = undefined;
                    return r0;
                };
                r0['then'] = r2;
                var _closure2_slot2 = r0;
                r3 = r4.then;
                r2 = function() { // Environment: r1
                    _fun2898: for(var _fun2898_ip = 0; ; ) switch(_fun2898_ip) {
case 0:
                        r1 = _closure2_slot2;
                        r0 = 'fulfilled';
                        r1['status'] = r0;
                        r0 = _closure2_slot0;
                        r1['value'] = r0;
                        r0 = _closure2_slot1;
                        r0 = r0.length;
                        r2 = 0;
                        r1 = r2 < r0;
                        r0 = undefined;
                        if(!r1) { _fun2898_ip = 76; continue _fun2898 }
case 47:
                        r1 = _closure2_slot1;
                        r5 = r1[r2];
                        r4 = _closure2_slot0;
                        r4 = r5.bind(r0)(r4);
                        r2 = r2 + 1;
                        r1 = r1.length;
                        if(r2 < r1) { _fun2898_ip = 47; continue _fun2898 }
case 76:
                        return r0;
                    }
                };
                r1 = function(a0) { // Environment: r1
                    _fun2899: for(var _fun2899_ip = 0; ; ) switch(_fun2899_ip) {
case 0:
                        r1 = _closure2_slot2;
                        r0 = 'rejected';
                        r1['status'] = r0;
                        r0 = a0;
                        r1['reason'] = r0;
                        r0 = _closure2_slot1;
                        r0 = r0.length;
                        r2 = 0;
                        r1 = r2 < r0;
                        r0 = undefined;
                        if(!r1) { _fun2899_ip = 71; continue _fun2899 }
case 46:
                        r1 = _closure2_slot1;
                        r4 = r1[r2];
                        r4 = r4.bind(r0)(r0);
                        r2 = r2 + 1;
                        r1 = r1.length;
                        if(r2 < r1) { _fun2899_ip = 46; continue _fun2899 }
case 71:
                        return r0;
                    }
                };
                r1 = r3.bind(r4)(r2, r1);
                return r0;
            };
            var _closure1_slot273 = r0;
            r0 = function(a0) { // Original name: initializeUpdateQueue, environment: r5
                r1 = a0;
                r0 = {'baseState': null, 'firstBaseUpdate': null, 'lastBaseUpdate': null, 'shared': null, 'callbacks': null};
                r2 = r1.memoizedState;
                r0['baseState'] = r2;
                r2 = {'pending': null, 'lanes': 0, 'hiddenCallbacks': null};
                r0['shared'] = r2;
                r1['updateQueue'] = r0;
                r0 = undefined;
                return r0;
            };
            var _closure1_slot274 = r0;
            r0 = function(a0, a1) { // Original name: cloneUpdateQueue, environment: r5
                _fun2901: for(var _fun2901_ip = 0; ; ) switch(_fun2901_ip) {
case 0:
                    r1 = a1;
                    r0 = a0;
                    r2 = r0.updateQueue;
                    r0 = r1.updateQueue;
                    if(!(r0 === r2)) { _fun2901_ip = 75; continue _fun2901 }
case 20:
                    r0 = {};
                    r3 = r2.baseState;
                    r0['baseState'] = r3;
                    r3 = r2.firstBaseUpdate;
                    r0['firstBaseUpdate'] = r3;
                    r3 = r2.lastBaseUpdate;
                    r0['lastBaseUpdate'] = r3;
                    r2 = r2.shared;
                    r0['shared'] = r2;
                    r2 = null;
                    r0['callbacks'] = r2;
                    r1['updateQueue'] = r0;
case 75:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot275 = r0;
            r0 = function(a0) { // Original name: createUpdate, environment: r5
                r0 = {'lane': null, 'tag': 0, 'payload': null, 'callback': null, 'next': null};
                r1 = a0;
                r0['lane'] = r1;
                return r0;
            };
            var _closure1_slot276 = r0;
            r0 = function(a0, a1, a2) { // Original name: enqueueUpdate, environment: r5
                _fun2903: for(var _fun2903_ip = 0; ; ) switch(_fun2903_ip) {
case 0:
                    r5 = a0;
                    r3 = a1;
                    r4 = a2;
                    r1 = r5.updateQueue;
                    r0 = null;
                    if(!(r0 !== r1)) { _fun2903_ip = 151; continue _fun2903 }
case 23:
                    r1 = r1.shared;
                    r7 = _closure1_slot146;
                    r6 = 2;
                    r7 = r7 & r6;
                    r6 = 0;
                    if(!(r6 === r7)) { _fun2903_ip = 85; continue _fun2903 }
case 48:
                    r6 = _closure1_slot259;
                    r7 = undefined;
                    r12 = undefined;
                    r11 = r5;
                    r10 = r1;
                    r9 = r3;
                    r8 = r4;
                    r6 = r12[r6](r11, r10, r9, r8, r7);
                    r6 = _closure1_slot263;
                    r6 = r6.bind(r7)(r5);
                    return r6;
case 85:
                    r6 = r1.pending;
                    if(!(r0 !== r6)) { _fun2903_ip = 113; continue _fun2903 }
case 94:
                    r7 = r6.next;
                    r3['next'] = r7;
                    r6['next'] = r3;
                    _fun2903_ip = 119; continue _fun2903;
case 113:
                    r3['next'] = r3;
case 119:
                    r1['pending'] = r3;
                    r1 = _closure1_slot263;
                    r3 = undefined;
                    r1 = r1.bind(r3)(r5);
                    r2 = _closure1_slot262;
                    r2 = r2.bind(r3)(r5, r0, r4);
                    return r1;
case 151:
                    return r0;
                }
            };
            var _closure1_slot277 = r0;
            r0 = function(a0, a1, a2) { // Original name: entangleTransitions, environment: r5
                _fun2904: for(var _fun2904_ip = 0; ; ) switch(_fun2904_ip) {
case 0:
                    r3 = a0;
                    r2 = a2;
                    r0 = a1;
                    r0 = r0.updateQueue;
                    r1 = null;
                    if(!(r1 !== r0)) { _fun2904_ip = 80; continue _fun2904 }
case 20:
                    r0 = r0.shared;
                    r1 = 4194176;
                    r4 = r2 & r1;
                    r1 = 0;
                    if(!(r1 !== r4)) { _fun2904_ip = 80; continue _fun2904 }
case 41:
                    r4 = r0.lanes;
                    r1 = r3.pendingLanes;
                    r1 = r4 & r1;
                    r2 = r2 | r1;
                    r0['lanes'] = r2;
                    r1 = _closure1_slot243;
                    r0 = undefined;
                    r0 = r1.bind(r0)(r3, r2);
case 80:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot278 = r0;
            r0 = function(a0, a1) { // Original name: enqueueCapturedUpdate, environment: r5
                _fun2905: for(var _fun2905_ip = 0; ; ) switch(_fun2905_ip) {
case 0:
                    r1 = a0;
                    r3 = a1;
                    r0 = r1.updateQueue;
                    r2 = r1.alternate;
                    r6 = null;
                    if(!(r6 !== r2)) { _fun2905_ip = 31; continue _fun2905 }
case 22:
                    r2 = r2.updateQueue;
                    if(!(r0 !== r2)) { _fun2905_ip = 65; continue _fun2905 }
case 31:
                    r4 = r0.lastBaseUpdate;
                    if(!(r6 !== r4)) { _fun2905_ip = 49; continue _fun2905 }
case 41:
                    r4['next'] = r3;
                    _fun2905_ip = 55; continue _fun2905;
case 49:
                    r0['firstBaseUpdate'] = r3;
case 55:
                    r0['lastBaseUpdate'] = r3;
                    r4 = undefined;
                    return r4;
case 65:
                    r9 = r0.firstBaseUpdate;
                    r8 = null;
                    r4 = r3;
                    r7 = null;
                    if(!(r7 !== r9)) { _fun2905_ip = 175; continue _fun2905 }
case 82:
                    r5 = {};
                    r0 = r9.lane;
                    r5['lane'] = r0;
                    r0 = r9.tag;
                    r5['tag'] = r0;
                    r0 = r9.payload;
                    r5['payload'] = r0;
                    r5['callback'] = r6;
                    r5['next'] = r6;
                    r10 = r9;
                    r11 = r8;
                    r12 = r7;
                    r0 = r5;
                    if(!(r6 !== r12)) { _fun2905_ip = 144; continue _fun2905 }
case 135:
                    r12['next'] = r5;
                    r0 = r11;
case 144:
                    r9 = r10.next;
                    r8 = r0;
                    r7 = r5;
                    if(r6 !== r9) { _fun2905_ip = 82; continue _fun2905 }
case 159:
                    r4 = r3;
                    if(!(r6 !== r5)) { _fun2905_ip = 175; continue _fun2905 }
case 166:
                    r5['next'] = r3;
                    r4 = r0;
case 175:
                    r0 = {};
                    r5 = r2.baseState;
                    r0['baseState'] = r5;
                    r0['firstBaseUpdate'] = r4;
                    r0['lastBaseUpdate'] = r3;
                    r3 = r2.shared;
                    r0['shared'] = r3;
                    r2 = r2.callbacks;
                    r0['callbacks'] = r2;
                    r1['updateQueue'] = r0;
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot279 = r0;
            r0 = function() { // Original name: suspendIfUpdateReadFromEntangledAsyncAction, environment: r5
                _fun2906: for(var _fun2906_ip = 0; ; ) switch(_fun2906_ip) {
case 0:
                    r1 = _closure1_slot94;
                    if(!r1) { _fun2906_ip = 20; continue _fun2906 }
case 10:
                    r0 = _closure1_slot92;
                    r1 = null;
                    if(!(r1 === r0)) { _fun2906_ip = 24; continue _fun2906 }
case 20:
                    r1 = undefined;
                    return r1;
case 24:
                    throw r0;
                }
            };
            var _closure1_slot280 = r0;
            r0 = function(a0, a1, a2, a3) { // Original name: processUpdateQueue, environment: r5
                _fun2907: for(var _fun2907_ip = 0; ; ) switch(_fun2907_ip) {
case 0:
                    r1 = a0;
                    r33 = a1;
                    r32 = a2;
                    r31 = a3;
                    r0 = false;
                    _closure1_slot94 = r0;
                    r3 = r1.updateQueue;
                    _closure1_slot93 = r0;
                    r2 = r3.firstBaseUpdate;
                    r9 = r3.lastBaseUpdate;
                    r0 = r3.shared;
                    r5 = r0.pending;
                    r7 = null;
                    r6 = r2;
                    if(!(r7 !== r5)) { _fun2907_ip = 156; continue _fun2907 }
case 61:
                    r0 = r3.shared;
                    r0['pending'] = r7;
                    r8 = r5.next;
                    r5['next'] = r7;
                    r0 = r8;
                    if(!(r7 !== r9)) { _fun2907_ip = 99; continue _fun2907 }
case 90:
                    r9['next'] = r8;
                    r0 = r2;
case 99:
                    r2 = r1.alternate;
                    r6 = r0;
                    if(!(r7 !== r2)) { _fun2907_ip = 156; continue _fun2907 }
case 111:
                    r2 = r2.updateQueue;
                    r9 = r2.lastBaseUpdate;
                    r6 = r0;
                    if(!(r9 !== r5)) { _fun2907_ip = 156; continue _fun2907 }
case 129:
                    if(!(r7 !== r9)) { _fun2907_ip = 141; continue _fun2907 }
case 133:
                    r9['next'] = r8;
                    _fun2907_ip = 147; continue _fun2907;
case 141:
                    r2['firstBaseUpdate'] = r8;
case 147:
                    r2['lastBaseUpdate'] = r5;
                    r6 = r0;
case 156:
                    if(!(r7 !== r6)) { _fun2907_ip = 922; continue _fun2907 }
case 163:
                    r30 = r3.baseState;
                    r5 = 0;
                    r29 = undefined;
                    r28 = 8192;
                    r27 = 64;
                    r26 = 'function';
                    r25 = -65537;
                    r24 = 128;
                    r23 = true;
                    r22 = 2;
                    r21 = 3;
                    r20 = 1;
                    r19 = -536870913;
                    r18 = 0;
                    r17 = r6;
                    r16 = null;
                    r15 = null;
                    r14 = null;
                    r13 = undefined;
                    r12 = undefined;
                    r11 = undefined;
case 228:
                    r0 = r17.lane;
                    r45 = r0 & r19;
                    r0 = r17.lane;
                    r44 = r45 !== r0;
                    r43 = r18;
                    r37 = r17;
                    r42 = r16;
                    r41 = r15;
                    r39 = r14;
                    r47 = r30;
                    r36 = r13;
                    r35 = r12;
                    r34 = r11;
                    if(r44) { _fun2907_ip = 286; continue _fun2907 }
case 276:
                    r0 = r31 & r45;
                    r0 = r0 === r45;
                    _fun2907_ip = 298; continue _fun2907;
case 286:
                    r2 = _closure1_slot149;
                    r2 = r2 & r45;
                    r0 = r2 === r45;
case 298:
                    if(r0) { _fun2907_ip = 372; continue _fun2907 }
case 301:
                    r8 = {};
                    r8['lane'] = r45;
                    r0 = r37.tag;
                    r8['tag'] = r0;
                    r0 = r37.payload;
                    r8['payload'] = r0;
                    r0 = r37.callback;
                    r8['callback'] = r0;
                    r8['next'] = r7;
                    r10 = r47;
                    r9 = r8;
                    if(!(r7 !== r39)) { _fun2907_ip = 360; continue _fun2907 }
case 348:
                    r39['next'] = r8;
                    r10 = r42;
                    r9 = r41;
case 360:
                    r2 = r43 | r45;
                    r0 = r47;
                    _fun2907_ip = 751; continue _fun2907;
case 372:
                    r38 = r5 !== r45;
                    if(!r38) { _fun2907_ip = 387; continue _fun2907 }
case 379:
                    r40 = _closure1_slot91;
                    r38 = r45 === r40;
case 387:
                    if(!r38) { _fun2907_ip = 394; continue _fun2907 }
case 390:
                    _closure1_slot94 = r23;
case 394:
                    r40 = r39;
                    if(!(r7 !== r40)) { _fun2907_ip = 442; continue _fun2907 }
case 401:
                    r38 = {'lane': 0, 'tag': null, 'payload': null, 'callback': null, 'next': null};
                    r45 = r37.tag;
                    r38['tag'] = r45;
                    r45 = r37.payload;
                    r38['payload'] = r45;
                    r39['next'] = r38;
                    r40 = r38;
case 442:
                    r45 = r37.tag;
                    if(!(r20 !== r45)) { _fun2907_ip = 568; continue _fun2907 }
case 451:
                    if(!(r21 !== r45)) { _fun2907_ip = 484; continue _fun2907 }
case 455:
                    if(!(r5 !== r45)) { _fun2907_ip = 503; continue _fun2907 }
case 459:
                    r39 = r47;
                    r38 = r1;
                    if(!(r22 === r45)) { _fun2907_ip = 601; continue _fun2907 }
case 472:
                    _closure1_slot93 = r23;
                    r39 = r47;
                    r38 = r1;
                    _fun2907_ip = 601; continue _fun2907;
case 484:
                    r45 = r1.flags;
                    r45 = r45 & r25;
                    r45 = r45 | r24;
                    r1['flags'] = r45;
case 503:
                    r45 = r37.payload;
                    r46 = typeof r45;
                    r49 = r45;
                    if(!(r26 === r46)) { _fun2907_ip = 530; continue _fun2907 }
case 518:
                    r46 = r45.call;
                    r49 = r46.bind(r45)(r32, r47, r33);
case 530:
                    r39 = r47;
                    r38 = r45;
                    if(!(r7 !== r49)) { _fun2907_ip = 601; continue _fun2907 }
case 540:
                    r39 = r47;
                    r38 = r45;
                    if(!(r29 !== r49)) { _fun2907_ip = 601; continue _fun2907 }
case 550:
                    r48 = _closure1_slot21;
                    r46 = {};
                    r39 = r48.bind(r29)(r46, r47, r49);
                    r38 = r45;
                    _fun2907_ip = 601; continue _fun2907;
case 568:
                    r45 = r37.payload;
                    r46 = typeof r45;
                    r39 = r45;
                    r38 = r39;
                    if(!(r26 === r46)) { _fun2907_ip = 601; continue _fun2907 }
case 586:
                    r46 = r45.call;
                    r39 = r46.bind(r45)(r32, r47, r33);
                    r38 = r45;
case 601:
                    r45 = r37.callback;
                    r2 = r43;
                    r10 = r42;
                    r9 = r41;
                    r8 = r40;
                    r0 = r39;
                    r36 = r38;
                    r35 = r37;
                    r34 = r32;
                    if(!(r7 !== r45)) { _fun2907_ip = 751; continue _fun2907 }
case 634:
                    r46 = r1.flags;
                    r46 = r46 | r27;
                    r1['flags'] = r46;
                    if(!r44) { _fun2907_ip = 667; continue _fun2907 }
case 652:
                    r44 = r1.flags;
                    r44 = r44 | r28;
                    r1['flags'] = r44;
case 667:
                    r46 = r3.callbacks;
                    if(!(r7 !== r46)) { _fun2907_ip = 713; continue _fun2907 }
case 677:
                    r44 = r46.push;
                    r44 = r44.bind(r46)(r45);
                    r2 = r43;
                    r10 = r42;
                    r9 = r41;
                    r8 = r40;
                    r0 = r39;
                    r36 = r38;
                    r35 = r37;
                    r34 = r32;
                    _fun2907_ip = 751; continue _fun2907;
case 713:
                    r44 = new Array(1);
                    r44[0] = r45;
                    r3['callbacks'] = r44;
                    r2 = r43;
                    r10 = r42;
                    r9 = r41;
                    r8 = r40;
                    r0 = r39;
                    r36 = r38;
                    r35 = r37;
                    r34 = r32;
case 751:
                    r17 = r37.next;
                    r18 = r2;
                    r16 = r10;
                    r15 = r9;
                    r14 = r8;
                    r30 = r0;
                    r13 = r36;
                    r12 = r35;
                    r11 = r34;
                    if(r7 !== r17) { _fun2907_ip = 228; continue _fun2907 }
case 787:
                    r37 = r3.shared;
                    r38 = r37.pending;
                    if(!(r7 !== r38)) { _fun2907_ip = 858; continue _fun2907 }
case 801:
                    r17 = r38.next;
                    r38['next'] = r7;
                    r3['lastBaseUpdate'] = r38;
                    r38 = r3.shared;
                    r38['pending'] = r7;
                    r18 = r2;
                    r16 = r10;
                    r15 = r9;
                    r14 = r8;
                    r30 = r0;
                    r13 = r36;
                    r12 = r35;
                    r11 = r34;
                    _fun2907_ip = 228; continue _fun2907;
case 858:
                    if(!(r7 === r8)) { _fun2907_ip = 865; continue _fun2907 }
case 862:
                    r10 = r0;
case 865:
                    r3['baseState'] = r10;
                    r3['firstBaseUpdate'] = r9;
                    r3['lastBaseUpdate'] = r8;
                    if(!(r7 === r6)) { _fun2907_ip = 898; continue _fun2907 }
case 887:
                    r3 = r3.shared;
                    r3['lanes'] = r5;
case 898:
                    r3 = _closure1_slot157;
                    r3 = r3 | r2;
                    _closure1_slot157 = r3;
                    r1['lanes'] = r2;
                    r1['memoizedState'] = r0;
case 922:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot281 = r0;
            r0 = function(a0, a1) { // Original name: callCallback, environment: r5
                _fun2908: for(var _fun2908_ip = 0; ; ) switch(_fun2908_ip) {
case 0:
                    r1 = a0;
                    r2 = 'function';
                    r0 = typeof r1;
                    if(!(r2 === r0)) { _fun2908_ip = 31; continue _fun2908 }
case 14:
                    r2 = r1.call;
                    r0 = a1;
                    r0 = r2.bind(r1)(r0);
                    r0 = undefined;
                    return r0;
case 31:
                    r0 = global;
                    r2 = r0.Error;
                    r0 = 'Invalid argument passed as callback. Expected a function. Instead received: ';
                    r1 = r0 + r1;
                    r0 = undefined;
                    r0 = r2.bind(r0)(r1);
                    throw r0;
                }
            };
            var _closure1_slot282 = r0;
            r0 = function(a0, a1) { // Original name: commitCallbacks, environment: r5
                _fun2909: for(var _fun2909_ip = 0; ; ) switch(_fun2909_ip) {
case 0:
                    r1 = a0;
                    r5 = a1;
                    r4 = r1.callbacks;
                    r0 = null;
                    if(!(r0 !== r4)) { _fun2909_ip = 70; continue _fun2909 }
case 18:
                    r1['callbacks'] = r0;
                    r0 = r4.length;
                    r3 = 0;
                    r0 = r3 < r0;
                    r1 = undefined;
                    if(!r0) { _fun2909_ip = 70; continue _fun2909 }
case 43:
                    r6 = _closure1_slot282;
                    r0 = r4[r3];
                    r0 = r6.bind(r1)(r0, r5);
                    r3 = r3 + 1;
                    r0 = r4.length;
                    if(r3 < r0) { _fun2909_ip = 43; continue _fun2909 }
case 70:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot283 = r0;
            r0 = function(a0, a1) { // Original name: shallowEqual, environment: r5
                _fun2910: for(var _fun2910_ip = 0; ; ) switch(_fun2910_ip) {
case 0:
                    r6 = a0;
                    r5 = a1;
                    r0 = _closure1_slot73;
                    r3 = undefined;
                    r0 = r0.bind(r3)(r6, r5);
                    if(r0) { _fun2910_ip = 203; continue _fun2910 }
case 27:
                    r2 = 'object';
                    r0 = typeof r6;
                    if(!(r2 === r0)) { _fun2910_ip = 199; continue _fun2910 }
case 41:
                    r0 = null;
                    if(!(r0 !== r6)) { _fun2910_ip = 199; continue _fun2910 }
case 50:
                    r1 = typeof r5;
                    if(!(r2 === r1)) { _fun2910_ip = 199; continue _fun2910 }
case 60:
                    if(!(r0 !== r5)) { _fun2910_ip = 199; continue _fun2910 }
case 67:
                    r0 = global;
                    r2 = r0.Object;
                    r1 = r2.keys;
                    r2 = r1.bind(r2)(r6);
                    r1 = r0.Object;
                    r0 = r1.keys;
                    r0 = r0.bind(r1)(r5);
                    r1 = r2.length;
                    r0 = r0.length;
                    if(!(r1 === r0)) { _fun2910_ip = 195; continue _fun2910 }
case 115:
                    r0 = r2.length;
                    r1 = 0;
                    r0 = r1 < r0;
                    if(!r0) { _fun2910_ip = 191; continue _fun2910 }
case 129:
                    r7 = r2[r1];
                    r8 = _closure1_slot95;
                    r0 = r8.call;
                    r8 = r0.bind(r8)(r5, r7);
                    r0 = r1;
                    if(!r8) { _fun2910_ip = 175; continue _fun2910 }
case 154:
                    r9 = _closure1_slot73;
                    r8 = r6[r7];
                    r7 = r5[r7];
                    r7 = r9.bind(r3)(r8, r7);
                    if(r7) { _fun2910_ip = 179; continue _fun2910 }
case 175:
                    r7 = false;
                    return r7;
case 179:
                    r1 = r0 + 1;
                    r0 = r2.length;
                    if(r1 < r0) { _fun2910_ip = 129; continue _fun2910 }
case 191:
                    r0 = true;
                    return r0;
case 195:
                    r0 = false;
                    return r0;
case 199:
                    r0 = false;
                    return r0;
case 203:
                    r0 = true;
                    return r0;
                }
            };
            var _closure1_slot284 = r0;
            r0 = function(a0) { // Original name: isThenableResolved, environment: r5
                _fun2911: for(var _fun2911_ip = 0; ; ) switch(_fun2911_ip) {
case 0:
                    r0 = a0;
                    r2 = r0.status;
                    r0 = 'fulfilled';
                    r0 = r0 === r2;
                    if(r0) { _fun2911_ip = 27; continue _fun2911 }
case 19:
                    r1 = 'rejected';
                    r0 = r1 === r2;
case 27:
                    return r0;
                }
            };
            var _closure1_slot285 = r0;
            r0 = function() { // Original name: noop, environment: r5
                r0 = undefined;
                return r0;
            };
            var _closure1_slot286 = r0;
            r0 = function(a0, a1, a2) { // Original name: trackUsedThenable, environment: r5
                _fun2913: for(var _fun2913_ip = 0; ; ) switch(_fun2913_ip) {
case 0:
                    r5 = a0;
                    r2 = a1;
                    var _closure2_slot0 = r2;
                    r0 = a2;
                    r4 = r5[r0];
                    r3 = undefined;
                    if(!(r3 !== r4)) { _fun2913_ip = 60; continue _fun2913 }
case 25:
                    r0 = r2;
                    if(!(r4 !== r0)) { _fun2913_ip = 73; continue _fun2913 }
case 32:
                    r7 = r2.then;
                    r6 = _closure1_slot286;
                    r6 = r7.bind(r2)(r6, r6);
                    _closure2_slot0 = r4;
                    r0 = r4;
                    _fun2913_ip = 73; continue _fun2913;
case 60:
                    r4 = r5.push;
                    r4 = r4.bind(r5)(r2);
                    r0 = r2;
case 73:
                    r5 = r0.status;
                    r4 = 'fulfilled';
                    if(!(r4 !== r5)) { _fun2913_ip = 286; continue _fun2913 }
case 89:
                    r2 = 'rejected';
                    if(!(r2 !== r5)) { _fun2913_ip = 266; continue _fun2913 }
case 100:
                    r5 = r0.status;
                    r6 = 'string';
                    r5 = typeof r5;
                    if(!(r6 !== r5)) { _fun2913_ip = 194; continue _fun2913 }
case 116:
                    r5 = _closure1_slot147;
                    r6 = null;
                    if(!(r6 !== r5)) { _fun2913_ip = 142; continue _fun2913 }
case 129:
                    r6 = r5.shellSuspendCounter;
                    r5 = 100;
                    if(!(!(r5 < r6))) { _fun2913_ip = 175; continue _fun2913 }
case 142:
                    r5 = 'pending';
                    r0['status'] = r5;
                    r6 = r0.then;
                    r5 = function(a0) { // Environment: r1
                        _fun2914: for(var _fun2914_ip = 0; ; ) switch(_fun2914_ip) {
case 0:
                            r1 = _closure2_slot0;
                            r2 = r1.status;
                            r1 = 'pending';
                            if(!(r1 === r2)) { _fun2914_ip = 43; continue _fun2914 }
case 20:
                            r1 = _closure2_slot0;
                            r0 = 'fulfilled';
                            r1['status'] = r0;
                            r0 = a0;
                            r1['value'] = r0;
case 43:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r1 = function(a0) { // Environment: r1
                        _fun2915: for(var _fun2915_ip = 0; ; ) switch(_fun2915_ip) {
case 0:
                            r1 = _closure2_slot0;
                            r2 = r1.status;
                            r1 = 'pending';
                            if(!(r1 === r2)) { _fun2915_ip = 43; continue _fun2915 }
case 20:
                            r1 = _closure2_slot0;
                            r0 = 'rejected';
                            r1['status'] = r0;
                            r0 = a0;
                            r1['reason'] = r0;
case 43:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r1 = r6.bind(r0)(r5, r1);
                    _fun2913_ip = 213; continue _fun2913;
case 175:
                    r1 = global;
                    r5 = r1.Error;
                    r1 = "async/await is not yet supported in Client Components, only Server Components. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.";
                    r1 = r5.bind(r3)(r1);
                    throw r1;
case 194:
                    r5 = r0.then;
                    r1 = _closure1_slot286;
                    r1 = r5.bind(r0)(r1, r1);
case 213:
                    r1 = r0.status;
                    if(!(r4 !== r1)) { _fun2913_ip = 259; continue _fun2913 }
case 222:
                    if(!(r2 !== r1)) { _fun2913_ip = 239; continue _fun2913 }
case 226:
                    _closure1_slot99 = r0;
                    r1 = _closure1_slot96;
                    throw r1;
case 239:
                    r1 = r0.reason;
                    r2 = _closure1_slot289;
                    r2 = r2.bind(r3)(r1);
                    throw r1;
case 259:
                    r1 = r0.value;
                    return r1;
case 266:
                    r1 = r0.reason;
                    r2 = _closure1_slot289;
                    r2 = r2.bind(r3)(r1);
                    throw r1;
case 286:
                    r0 = r0.value;
                    return r0;
                }
            };
            var _closure1_slot287 = r0;
            r0 = function() { // Original name: getSuspendedThenable, environment: r5
                _fun2916: for(var _fun2916_ip = 0; ; ) switch(_fun2916_ip) {
case 0:
                    r0 = _closure1_slot99;
                    r1 = null;
                    if(!(r1 !== r0)) { _fun2916_ip = 23; continue _fun2916 }
case 13:
                    r0 = _closure1_slot99;
                    _closure1_slot99 = r1;
                    return r0;
case 23:
                    r0 = global;
                    r2 = r0.Error;
                    r1 = undefined;
                    r0 = 'Expected a suspended thenable. This is a bug in React. Please file an issue.';
                    r0 = r2.bind(r1)(r0);
                    throw r0;
                }
            };
            var _closure1_slot288 = r0;
            r0 = function(a0) { // Original name: checkIfUseWrappedInAsyncCatch, environment: r5
                _fun2917: for(var _fun2917_ip = 0; ; ) switch(_fun2917_ip) {
case 0:
                    r1 = _closure1_slot96;
                    r0 = a0;
                    if(!(r0 !== r1)) { _fun2917_ip = 18; continue _fun2917 }
case 14:
                    r0 = undefined;
                    return r0;
case 18:
                    r0 = global;
                    r2 = r0.Error;
                    r1 = undefined;
                    r0 = "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.";
                    r0 = r2.bind(r1)(r0);
                    throw r0;
                }
            };
            var _closure1_slot289 = r0;
            r0 = function(a0) { // Original name: unwrapThenable, environment: r5
                _fun2918: for(var _fun2918_ip = 0; ; ) switch(_fun2918_ip) {
case 0:
                    r4 = _closure1_slot101;
                    r1 = 1;
                    r1 = r4 + r1;
                    _closure1_slot101 = r1;
                    r2 = _closure1_slot100;
                    r1 = null;
                    if(!(r1 === r2)) { _fun2918_ip = 36; continue _fun2918 }
case 28:
                    r1 = new Array(0);
                    _closure1_slot100 = r1;
case 36:
                    r3 = _closure1_slot287;
                    r2 = _closure1_slot100;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r3.bind(r1)(r2, r0, r4);
                    return r0;
                }
            };
            var _closure1_slot290 = r0;
            r0 = function(a0, a1) { // Original name: coerceRef, environment: r5
                _fun2919: for(var _fun2919_ip = 0; ; ) switch(_fun2919_ip) {
case 0:
                    r0 = a1;
                    r0 = r0.props;
                    r1 = r0.ref;
                    r0 = undefined;
                    r2 = null;
                    if(!(r0 !== r1)) { _fun2919_ip = 24; continue _fun2919 }
case 21:
                    r2 = r1;
case 24:
                    r1 = a0;
                    r1['ref'] = r2;
                    return r0;
                }
            };
            var _closure1_slot291 = r0;
            r0 = function(a0, a1) { // Original name: throwOnInvalidObjectType, environment: r5
                _fun2920: for(var _fun2920_ip = 0; ; ) switch(_fun2920_ip) {
case 0:
                    r4 = a1;
                    r1 = r4["$$typeof"];
                    r0 = _closure1_slot4;
                    if(!(r1 !== r0)) { _fun2920_ip = 132; continue _fun2920 }
case 19:
                    r0 = global;
                    r1 = r0.Object;
                    r1 = r1.prototype;
                    r2 = r1.toString;
                    r1 = r2.call;
                    r1 = r1.bind(r2)(r4);
                    r2 = r0.Error;
                    r3 = '[object Object]';
                    if(!(r3 === r1)) { _fun2920_ip = 107; continue _fun2920 }
case 61:
                    r3 = r0.Object;
                    r0 = r3.keys;
                    r4 = r0.bind(r3)(r4);
                    r3 = r4.join;
                    r0 = ', ';
                    r3 = r3.bind(r4)(r0);
                    r0 = 'object with keys {';
                    r3 = r0 + r3;
                    r0 = '}';
                    r1 = r3 + r0;
case 107:
                    r0 = 'Objects are not valid as a React child (found: ';
                    r3 = r0 + r1;
                    r1 = undefined;
                    r0 = '). If you meant to render a collection of children, use an array instead.';
                    r0 = r3 + r0;
                    r0 = r2.bind(r1)(r0);
                    throw r0;
case 132:
                    r0 = global;
                    r2 = r0.Error;
                    r1 = undefined;
                    r0 = 'A React Element from an older version of React was rendered. This is not supported. It can happen if:\n- Multiple copies of the "react" package is used.\n- A library pre-bundled an old copy of "react" or "react/jsx-runtime".\n- A compiler tries to "inline" JSX instead of using the runtime.';
                    r0 = r2.bind(r1)(r0);
                    throw r0;
                }
            };
            var _closure1_slot292 = r0;
            r0 = function(a0) { // Original name: resolveLazy, environment: r5
                r0 = a0;
                r2 = r0._init;
                r1 = r0._payload;
                r0 = undefined;
                r0 = r2.bind(r0)(r1);
                return r0;
            };
            var _closure1_slot293 = r0;
            r42 = function(a0) { // Original name: createChildReconciler, environment: r5
                r1 = a0;
                var _closure2_slot0 = r1;
                r1 = function(a0, a1) { // Original name: deleteChild, environment: r0
                    _fun2923: for(var _fun2923_ip = 0; ; ) switch(_fun2923_ip) {
case 0:
                        r1 = a0;
                        r2 = a1;
                        r0 = _closure2_slot0;
                        if(!r0) { _fun2923_ip = 71; continue _fun2923 }
case 16:
                        r3 = r1.deletions;
                        r0 = null;
                        if(!(r0 !== r3)) { _fun2923_ip = 39; continue _fun2923 }
case 27:
                        r0 = r3.push;
                        r0 = r0.bind(r3)(r2);
                        _fun2923_ip = 71; continue _fun2923;
case 39:
                        r0 = new Array(1);
                        r0[0] = r2;
                        r1['deletions'] = r0;
                        r2 = r1.flags;
                        r0 = 16;
                        r0 = r2 | r0;
                        r1['flags'] = r0;
case 71:
                        r0 = undefined;
                        return r0;
                    }
                };
                var _closure2_slot1 = r1;
                r1 = function(a0, a1) { // Original name: deleteRemainingChildren, environment: r0
                    _fun2924: for(var _fun2924_ip = 0; ; ) switch(_fun2924_ip) {
case 0:
                        r4 = a0;
                        r3 = a1;
                        r1 = _closure2_slot0;
                        r0 = null;
                        if(r1) { _fun2924_ip = 20; continue _fun2924 }
case 18:
                        return r0;
case 20:
                        r1 = undefined;
                        if(!(r0 !== r3)) { _fun2924_ip = 45; continue _fun2924 }
case 26:
                        r5 = _closure2_slot1;
                        r5 = r5.bind(r1)(r4, r3);
                        r3 = r3.sibling;
                        if(r0 !== r3) { _fun2924_ip = 26; continue _fun2924 }
case 45:
                        return r0;
                    }
                };
                var _closure2_slot2 = r1;
                r1 = function(a0) { // Original name: mapRemainingChildren, environment: r0
                    _fun2925: for(var _fun2925_ip = 0; ; ) switch(_fun2925_ip) {
case 0:
                        r2 = a0;
                        r0 = global;
                        r0 = r0.Map;
                        r1 = r0.prototype;
                        r1 = Object.create(r1, {constructor: {value: r0}});
                        r8 = r1;
                        r0 = new r8[r0](r7);
                        r0 = r0 instanceof Object ? r0 : r1;
                        r1 = null;
                        if(!(r1 !== r2)) { _fun2925_ip = 92; continue _fun2925 }
case 37:
                        r4 = r2.key;
                        r3 = r2;
                        if(!(r1 === r4)) { _fun2925_ip = 67; continue _fun2925 }
case 49:
                        r5 = r0.set;
                        r4 = r3.index;
                        r4 = r5.bind(r0)(r4, r3);
                        _fun2925_ip = 83; continue _fun2925;
case 67:
                        r5 = r0.set;
                        r4 = r3.key;
                        r4 = r5.bind(r0)(r4, r3);
case 83:
                        r2 = r3.sibling;
                        if(r1 !== r2) { _fun2925_ip = 37; continue _fun2925 }
case 92:
                        return r0;
                    }
                };
                var _closure2_slot3 = r1;
                r1 = function(a0, a1) { // Original name: useFiber, environment: r0
                    r3 = _closure1_slot479;
                    r2 = undefined;
                    r1 = a0;
                    r0 = a1;
                    r0 = r3.bind(r2)(r1, r0);
                    r1 = 0;
                    r0['index'] = r1;
                    r1 = null;
                    r0['sibling'] = r1;
                    return r0;
                };
                var _closure2_slot4 = r1;
                r1 = function(a0, a1, a2) { // Original name: placeChild, environment: r0
                    _fun2927: for(var _fun2927_ip = 0; ; ) switch(_fun2927_ip) {
case 0:
                        r3 = a0;
                        r1 = a1;
                        r0 = a2;
                        r3['index'] = r0;
                        r0 = _closure2_slot0;
                        if(r0) { _fun2927_ip = 48; continue _fun2927 }
case 25:
                        r2 = r3.flags;
                        r0 = 1048576;
                        r0 = r2 | r0;
                        r3['flags'] = r0;
                        return r1;
case 48:
                        r0 = r3.alternate;
                        r2 = null;
                        if(!(r2 === r0)) { _fun2927_ip = 82; continue _fun2927 }
case 59:
                        r4 = r3.flags;
                        r2 = 33554434;
                        r2 = r4 | r2;
                        r3['flags'] = r2;
                        return r1;
case 82:
                        r0 = r0.index;
                        if(!(r0 < r1)) { _fun2927_ip = 115; continue _fun2927 }
case 91:
                        r4 = r3.flags;
                        r2 = 33554434;
                        r2 = r4 | r2;
                        r3['flags'] = r2;
                        r0 = r1;
case 115:
                        return r0;
                    }
                };
                var _closure2_slot5 = r1;
                r1 = function(a0) { // Original name: placeSingleChild, environment: r0
                    _fun2928: for(var _fun2928_ip = 0; ; ) switch(_fun2928_ip) {
case 0:
                        r0 = a0;
                        r1 = _closure2_slot0;
                        if(!r1) { _fun2928_ip = 24; continue _fun2928 }
case 13:
                        r3 = r0.alternate;
                        r2 = null;
                        r1 = r2 === r3;
case 24:
                        if(!r1) { _fun2928_ip = 48; continue _fun2928 }
case 27:
                        r2 = r0.flags;
                        r1 = 33554434;
                        r1 = r2 | r1;
                        r0['flags'] = r1;
case 48:
                        return r0;
                    }
                };
                var _closure2_slot6 = r1;
                r1 = function(a0, a1, a2, a3) { // Original name: updateTextNode, environment: r0
                    _fun2929: for(var _fun2929_ip = 0; ; ) switch(_fun2929_ip) {
case 0:
                        r1 = a0;
                        r3 = a1;
                        r5 = a2;
                        r0 = null;
                        if(!(r0 !== r3)) { _fun2929_ip = 50; continue _fun2929 }
case 15:
                        r2 = r3.tag;
                        r0 = 6;
                        if(!(r0 === r2)) { _fun2929_ip = 50; continue _fun2929 }
case 27:
                        r2 = _closure2_slot4;
                        r0 = undefined;
                        r0 = r2.bind(r0)(r3, r5);
                        r0['return'] = r1;
                        return r0;
case 50:
                        r4 = _closure1_slot484;
                        r3 = r1.mode;
                        r2 = undefined;
                        r0 = a3;
                        r0 = r4.bind(r2)(r5, r3, r0);
                        r0['return'] = r1;
                        return r0;
                    }
                };
                var _closure2_slot7 = r1;
                r1 = function(a0, a1, a2, a3) { // Original name: updateElement, environment: r0
                    _fun2930: for(var _fun2930_ip = 0; ; ) switch(_fun2930_ip) {
case 0:
                        r6 = a0;
                        r5 = a1;
                        r0 = a2;
                        r4 = a3;
                        r7 = r0.type;
                        r1 = _closure1_slot7;
                        if(!(r7 !== r1)) { _fun2930_ip = 191; continue _fun2930 }
case 31:
                        r1 = null;
                        if(!(r1 !== r5)) { _fun2930_ip = 95; continue _fun2930 }
case 37:
                        r3 = r5.elementType;
                        if(!(r3 !== r7)) { _fun2930_ip = 152; continue _fun2930 }
case 46:
                        r8 = 'object';
                        r3 = typeof r7;
                        if(!(r8 === r3)) { _fun2930_ip = 95; continue _fun2930 }
case 57:
                        if(!(r1 !== r7)) { _fun2930_ip = 95; continue _fun2930 }
case 61:
                        r3 = r7["$$typeof"];
                        r1 = _closure1_slot17;
                        if(!(r3 === r1)) { _fun2930_ip = 95; continue _fun2930 }
case 74:
                        r3 = _closure1_slot293;
                        r1 = undefined;
                        r3 = r3.bind(r1)(r7);
                        r1 = r5.type;
                        if(!(r3 !== r1)) { _fun2930_ip = 152; continue _fun2930 }
case 95:
                        r10 = _closure1_slot481;
                        r16 = r0.type;
                        r15 = r0.key;
                        r14 = r0.props;
                        r12 = r6.mode;
                        r7 = undefined;
                        r17 = undefined;
                        r13 = undefined;
                        r11 = r4;
                        r1 = r17[r10](r16, r15, r14, r13, r12, r11, r10);
                        r3 = _closure1_slot291;
                        r3 = r3.bind(r7)(r1, r0);
                        r1['return'] = r6;
                        return r1;
case 152:
                        r7 = _closure2_slot4;
                        r1 = r0.props;
                        r3 = undefined;
                        r1 = r7.bind(r3)(r5, r1);
                        r2 = _closure1_slot291;
                        r2 = r2.bind(r3)(r1, r0);
                        r1['return'] = r6;
                        return r1;
case 191:
                        r3 = _closure2_slot10;
                        r1 = r0.props;
                        r14 = r1.children;
                        r12 = r0.key;
                        r17 = undefined;
                        r16 = r6;
                        r15 = r5;
                        r13 = r4;
                        r0 = r17[r3](r16, r15, r14, r13, r12, r11);
                        return r0;
                    }
                };
                var _closure2_slot8 = r1;
                r1 = function(a0, a1, a2, a3) { // Original name: updatePortal, environment: r0
                    _fun2931: for(var _fun2931_ip = 0; ; ) switch(_fun2931_ip) {
case 0:
                        r1 = a0;
                        r4 = a1;
                        r5 = a2;
                        r0 = null;
                        if(!(r0 !== r4)) { _fun2931_ip = 102; continue _fun2931 }
case 15:
                        r2 = r4.tag;
                        r0 = 4;
                        if(!(r0 === r2)) { _fun2931_ip = 102; continue _fun2931 }
case 27:
                        r0 = r4.stateNode;
                        r2 = r0.containerInfo;
                        r0 = r5.containerInfo;
                        if(!(r2 === r0)) { _fun2931_ip = 102; continue _fun2931 }
case 46:
                        r0 = r4.stateNode;
                        r2 = r0.implementation;
                        r0 = r5.implementation;
                        if(!(r2 === r0)) { _fun2931_ip = 102; continue _fun2931 }
case 67:
                        r3 = _closure2_slot4;
                        r2 = r5.children;
                        if(r2) { _fun2931_ip = 86; continue _fun2931 }
case 82:
                        r2 = new Array(0);
case 86:
                        r0 = undefined;
                        r0 = r3.bind(r0)(r4, r2);
                        r0['return'] = r1;
                        return r0;
case 102:
                        r4 = _closure1_slot485;
                        r3 = r1.mode;
                        r2 = undefined;
                        r0 = a3;
                        r0 = r4.bind(r2)(r5, r3, r0);
                        r0['return'] = r1;
                        return r0;
                    }
                };
                var _closure2_slot9 = r1;
                r1 = function(a0, a1, a2, a3, a4) { // Original name: updateFragment, environment: r0
                    _fun2932: for(var _fun2932_ip = 0; ; ) switch(_fun2932_ip) {
case 0:
                        r1 = a0;
                        r3 = a1;
                        r6 = a2;
                        r0 = null;
                        if(!(r0 !== r3)) { _fun2932_ip = 50; continue _fun2932 }
case 15:
                        r2 = r3.tag;
                        r0 = 7;
                        if(!(r0 === r2)) { _fun2932_ip = 50; continue _fun2932 }
case 27:
                        r2 = _closure2_slot4;
                        r0 = undefined;
                        r0 = r2.bind(r0)(r3, r6);
                        r0['return'] = r1;
                        return r0;
case 50:
                        r5 = _closure1_slot482;
                        r9 = r1.mode;
                        r11 = undefined;
                        r8 = a3;
                        r7 = a4;
                        r10 = r6;
                        r0 = r11[r5](r10, r9, r8, r7, r6);
                        r0['return'] = r1;
                        return r0;
                    }
                };
                var _closure2_slot10 = r1;
                r1 = function(a0, a1, a2) { // Original name: createChild, environment: r0
                    _fun2933: for(var _fun2933_ip = 0; ; ) switch(_fun2933_ip) {
case 0:
                        r1 = a0;
                        r0 = a1;
                        r5 = a2;
                        r3 = typeof r0;
                        r2 = 'string';
                        if(!(r2 === r3)) { _fun2933_ip = 31; continue _fun2933 }
case 20:
                        r2 = '';
                        if(!(r2 === r0)) { _fun2933_ip = 382; continue _fun2933 }
case 31:
                        r2 = 'number';
                        if(!(r2 !== r3)) { _fun2933_ip = 382; continue _fun2933 }
case 42:
                        r2 = 'bigint';
                        if(!(r2 !== r3)) { _fun2933_ip = 382; continue _fun2933 }
case 53:
                        r2 = 'object';
                        if(!(r2 === r3)) { _fun2933_ip = 174; continue _fun2933 }
case 61:
                        r7 = null;
                        if(!(r7 !== r0)) { _fun2933_ip = 174; continue _fun2933 }
case 67:
                        r4 = r0["$$typeof"];
                        r2 = _closure1_slot5;
                        if(!(r2 !== r4)) { _fun2933_ip = 325; continue _fun2933 }
case 86:
                        r2 = _closure1_slot6;
                        if(!(r2 !== r4)) { _fun2933_ip = 298; continue _fun2933 }
case 97:
                        r2 = _closure1_slot17;
                        if(!(r2 !== r4)) { _fun2933_ip = 263; continue _fun2933 }
case 108:
                        r2 = _closure1_slot2;
                        r6 = undefined;
                        r2 = r2.bind(r6)(r0);
                        if(r2) { _fun2933_ip = 231; continue _fun2933 }
case 122:
                        r2 = _closure1_slot177;
                        r2 = r2.bind(r6)(r0);
                        if(r2) { _fun2933_ip = 231; continue _fun2933 }
case 134:
                        r2 = r0.then;
                        r4 = 'function';
                        r2 = typeof r2;
                        if(!(r4 !== r2)) { _fun2933_ip = 205; continue _fun2933 }
case 150:
                        r4 = r0["$$typeof"];
                        r2 = _closure1_slot12;
                        if(!(r4 !== r2)) { _fun2933_ip = 178; continue _fun2933 }
case 163:
                        r2 = _closure1_slot292;
                        r2 = r2.bind(r6)(r6, r0);
case 174:
                        r2 = null;
                        return r2;
case 178:
                        r4 = _closure2_slot11;
                        r2 = _closure1_slot394;
                        r2 = r2.bind(r6)(r1, r0);
                        r2 = r4.bind(r6)(r1, r2, r5);
                        return r2;
case 205:
                        r4 = _closure2_slot11;
                        r2 = _closure1_slot290;
                        r2 = r2.bind(r6)(r0);
                        r2 = r4.bind(r6)(r1, r2, r5);
                        return r2;
case 231:
                        r4 = _closure1_slot482;
                        r14 = r1.mode;
                        r16 = undefined;
                        r15 = r0;
                        r13 = r5;
                        r12 = null;
                        r2 = r16[r4](r15, r14, r13, r12, r11);
                        r2['return'] = r1;
                        return r2;
case 263:
                        r4 = r0._init;
                        r2 = r0._payload;
                        r6 = undefined;
                        r4 = r4.bind(r6)(r2);
                        r2 = _closure2_slot11;
                        r2 = r2.bind(r6)(r1, r4, r5);
                        return r2;
case 298:
                        r6 = _closure1_slot485;
                        r4 = r1.mode;
                        r2 = undefined;
                        r2 = r6.bind(r2)(r0, r4, r5);
                        r2['return'] = r1;
                        return r2;
case 325:
                        r9 = _closure1_slot481;
                        r15 = r0.type;
                        r14 = r0.key;
                        r13 = r0.props;
                        r11 = r1.mode;
                        r4 = undefined;
                        r16 = undefined;
                        r12 = undefined;
                        r10 = r5;
                        r2 = r16[r9](r15, r14, r13, r12, r11, r10, r9);
                        r3 = _closure1_slot291;
                        r3 = r3.bind(r4)(r2, r0);
                        r2['return'] = r1;
                        return r2;
case 382:
                        r4 = _closure1_slot484;
                        r3 = '' + r0;
                        r2 = r1.mode;
                        r0 = undefined;
                        r0 = r4.bind(r0)(r3, r2, r5);
                        r0['return'] = r1;
                        return r0;
                    }
                };
                var _closure2_slot11 = r1;
                r1 = function(a0, a1, a2, a3) { // Original name: updateSlot, environment: r0
                    _fun2934: for(var _fun2934_ip = 0; ; ) switch(_fun2934_ip) {
case 0:
                        r6 = a0;
                        r5 = a1;
                        r1 = a2;
                        r4 = a3;
                        r0 = null;
                        r2 = null;
                        if(!(r0 !== r5)) { _fun2934_ip = 25; continue _fun2934 }
case 20:
                        r2 = r5.key;
case 25:
                        r7 = typeof r1;
                        r3 = 'string';
                        if(!(r3 === r7)) { _fun2934_ip = 47; continue _fun2934 }
case 36:
                        r3 = '';
                        if(!(r3 === r1)) { _fun2934_ip = 416; continue _fun2934 }
case 47:
                        r3 = 'number';
                        if(!(r3 !== r7)) { _fun2934_ip = 416; continue _fun2934 }
case 58:
                        r3 = 'bigint';
                        if(!(r3 !== r7)) { _fun2934_ip = 416; continue _fun2934 }
case 69:
                        r3 = 'object';
                        if(!(r3 === r7)) { _fun2934_ip = 191; continue _fun2934 }
case 77:
                        if(!(r0 !== r1)) { _fun2934_ip = 191; continue _fun2934 }
case 81:
                        r8 = r1["$$typeof"];
                        r7 = _closure1_slot5;
                        if(!(r7 !== r8)) { _fun2934_ip = 378; continue _fun2934 }
case 100:
                        r7 = _closure1_slot6;
                        if(!(r7 !== r8)) { _fun2934_ip = 340; continue _fun2934 }
case 111:
                        r7 = _closure1_slot17;
                        if(!(r7 !== r8)) { _fun2934_ip = 297; continue _fun2934 }
case 122:
                        r7 = _closure1_slot2;
                        r8 = undefined;
                        r7 = r7.bind(r8)(r1);
                        if(r7) { _fun2934_ip = 262; continue _fun2934 }
case 139:
                        r7 = _closure1_slot177;
                        r7 = r7.bind(r8)(r1);
                        if(r7) { _fun2934_ip = 262; continue _fun2934 }
case 151:
                        r7 = r1.then;
                        r9 = 'function';
                        r7 = typeof r7;
                        if(!(r9 !== r7)) { _fun2934_ip = 228; continue _fun2934 }
case 167:
                        r9 = r1["$$typeof"];
                        r7 = _closure1_slot12;
                        if(!(r9 !== r7)) { _fun2934_ip = 193; continue _fun2934 }
case 180:
                        r7 = _closure1_slot292;
                        r7 = r7.bind(r8)(r8, r1);
case 191:
                        return r0;
case 193:
                        r9 = _closure2_slot12;
                        r7 = _closure1_slot394;
                        r12 = r7.bind(r8)(r6, r1);
                        r15 = undefined;
                        r14 = r6;
                        r13 = r5;
                        r11 = r4;
                        r7 = r15[r9](r14, r13, r12, r11, r10);
                        return r7;
case 228:
                        r7 = _closure2_slot12;
                        r3 = _closure1_slot290;
                        r12 = r3.bind(r8)(r1);
                        r15 = undefined;
                        r14 = r6;
                        r13 = r5;
                        r11 = r4;
                        r3 = r15[r7](r14, r13, r12, r11, r10);
                        return r3;
case 262:
                        r3 = null;
                        if(!(r0 === r2)) { _fun2934_ip = 295; continue _fun2934 }
case 268:
                        r7 = _closure2_slot10;
                        r15 = undefined;
                        r14 = r6;
                        r13 = r5;
                        r12 = r1;
                        r11 = r4;
                        r10 = null;
                        r3 = r15[r7](r14, r13, r12, r11, r10, r9);
case 295:
                        return r3;
case 297:
                        r7 = r1._init;
                        r3 = r1._payload;
                        r8 = undefined;
                        r12 = r7.bind(r8)(r3);
                        r3 = _closure2_slot12;
                        r15 = undefined;
                        r14 = r6;
                        r13 = r5;
                        r11 = r4;
                        r3 = r15[r3](r14, r13, r12, r11, r10);
                        return r3;
case 340:
                        r7 = r1.key;
                        r3 = null;
                        if(!(r7 === r2)) { _fun2934_ip = 376; continue _fun2934 }
case 351:
                        r8 = _closure2_slot9;
                        r15 = undefined;
                        r14 = r6;
                        r13 = r5;
                        r12 = r1;
                        r11 = r4;
                        r3 = r15[r8](r14, r13, r12, r11, r10);
case 376:
                        return r3;
case 378:
                        r7 = r1.key;
                        r3 = null;
                        if(!(r7 === r2)) { _fun2934_ip = 414; continue _fun2934 }
case 389:
                        r8 = _closure2_slot8;
                        r15 = undefined;
                        r14 = r6;
                        r13 = r5;
                        r12 = r1;
                        r11 = r4;
                        r3 = r15[r8](r14, r13, r12, r11, r10);
case 414:
                        return r3;
case 416:
                        r0 = null;
                        if(!(r0 === r2)) { _fun2934_ip = 447; continue _fun2934 }
case 422:
                        r3 = _closure2_slot7;
                        r12 = '' + r1;
                        r15 = undefined;
                        r14 = r6;
                        r13 = r5;
                        r11 = r4;
                        r0 = r15[r3](r14, r13, r12, r11, r10);
case 447:
                        return r0;
                    }
                };
                var _closure2_slot12 = r1;
                r1 = function(a0, a1, a2, a3, a4) { // Original name: updateFromMap, environment: r0
                    _fun2935: for(var _fun2935_ip = 0; ; ) switch(_fun2935_ip) {
case 0:
                        r3 = a0;
                        r5 = a1;
                        r2 = a2;
                        r0 = a3;
                        r4 = a4;
                        r6 = typeof r0;
                        r1 = 'string';
                        if(!(r1 === r6)) { _fun2935_ip = 37; continue _fun2935 }
case 26:
                        r1 = '';
                        if(!(r1 === r0)) { _fun2935_ip = 470; continue _fun2935 }
case 37:
                        r1 = 'number';
                        if(!(r1 !== r6)) { _fun2935_ip = 470; continue _fun2935 }
case 48:
                        r1 = 'bigint';
                        if(!(r1 !== r6)) { _fun2935_ip = 470; continue _fun2935 }
case 59:
                        r1 = 'object';
                        if(!(r1 === r6)) { _fun2935_ip = 183; continue _fun2935 }
case 67:
                        r1 = null;
                        if(!(r1 !== r0)) { _fun2935_ip = 183; continue _fun2935 }
case 73:
                        r8 = r0["$$typeof"];
                        r7 = _closure1_slot5;
                        if(!(r7 !== r8)) { _fun2935_ip = 411; continue _fun2935 }
case 92:
                        r7 = _closure1_slot6;
                        if(!(r7 !== r8)) { _fun2935_ip = 352; continue _fun2935 }
case 103:
                        r7 = _closure1_slot17;
                        if(!(r7 !== r8)) { _fun2935_ip = 306; continue _fun2935 }
case 114:
                        r7 = _closure1_slot2;
                        r8 = undefined;
                        r7 = r7.bind(r8)(r0);
                        if(r7) { _fun2935_ip = 262; continue _fun2935 }
case 131:
                        r7 = _closure1_slot177;
                        r7 = r7.bind(r8)(r0);
                        if(r7) { _fun2935_ip = 262; continue _fun2935 }
case 143:
                        r7 = r0.then;
                        r9 = 'function';
                        r7 = typeof r7;
                        if(!(r9 !== r7)) { _fun2935_ip = 225; continue _fun2935 }
case 159:
                        r9 = r0["$$typeof"];
                        r7 = _closure1_slot12;
                        if(!(r9 !== r7)) { _fun2935_ip = 187; continue _fun2935 }
case 172:
                        r7 = _closure1_slot292;
                        r7 = r7.bind(r8)(r8, r0);
case 183:
                        r7 = null;
                        return r7;
case 187:
                        r9 = _closure2_slot13;
                        r7 = _closure1_slot394;
                        r11 = r7.bind(r8)(r5, r0);
                        r15 = undefined;
                        r14 = r3;
                        r13 = r5;
                        r12 = r2;
                        r10 = r4;
                        r7 = r15[r9](r14, r13, r12, r11, r10, r9);
                        return r7;
case 225:
                        r7 = _closure2_slot13;
                        r6 = _closure1_slot290;
                        r11 = r6.bind(r8)(r0);
                        r15 = undefined;
                        r14 = r3;
                        r13 = r5;
                        r12 = r2;
                        r10 = r4;
                        r6 = r15[r7](r14, r13, r12, r11, r10, r9);
                        return r6;
case 262:
                        r6 = r3.get;
                        r7 = r6.bind(r3)(r2);
                        if(r7) { _fun2935_ip = 277; continue _fun2935 }
case 275:
                        r7 = null;
case 277:
                        r6 = _closure2_slot10;
                        r15 = undefined;
                        r14 = r5;
                        r13 = r7;
                        r12 = r0;
                        r11 = r4;
                        r10 = null;
                        r6 = r15[r6](r14, r13, r12, r11, r10, r9);
                        return r6;
case 306:
                        r7 = r0._init;
                        r6 = r0._payload;
                        r8 = undefined;
                        r11 = r7.bind(r8)(r6);
                        r6 = _closure2_slot13;
                        r15 = undefined;
                        r14 = r3;
                        r13 = r5;
                        r12 = r2;
                        r10 = r4;
                        r6 = r15[r6](r14, r13, r12, r11, r10, r9);
                        return r6;
case 352:
                        r7 = r3.get;
                        r8 = r0.key;
                        r6 = r2;
                        if(!(r1 !== r8)) { _fun2935_ip = 374; continue _fun2935 }
case 369:
                        r6 = r0.key;
case 374:
                        r8 = r7.bind(r3)(r6);
                        if(r8) { _fun2935_ip = 384; continue _fun2935 }
case 382:
                        r8 = null;
case 384:
                        r7 = _closure2_slot9;
                        r15 = undefined;
                        r14 = r5;
                        r13 = r8;
                        r12 = r0;
                        r11 = r4;
                        r6 = r15[r7](r14, r13, r12, r11, r10);
                        return r6;
case 411:
                        r7 = r3.get;
                        r8 = r0.key;
                        r6 = r2;
                        if(!(r1 !== r8)) { _fun2935_ip = 433; continue _fun2935 }
case 428:
                        r6 = r0.key;
case 433:
                        r7 = r7.bind(r3)(r6);
                        if(r7) { _fun2935_ip = 443; continue _fun2935 }
case 441:
                        r7 = null;
case 443:
                        r6 = _closure2_slot8;
                        r15 = undefined;
                        r14 = r5;
                        r13 = r7;
                        r12 = r0;
                        r11 = r4;
                        r1 = r15[r6](r14, r13, r12, r11, r10);
                        return r1;
case 470:
                        r1 = r3.get;
                        r3 = r1.bind(r3)(r2);
                        if(r3) { _fun2935_ip = 485; continue _fun2935 }
case 483:
                        r3 = null;
case 485:
                        r2 = _closure2_slot7;
                        r12 = '' + r0;
                        r15 = undefined;
                        r14 = r5;
                        r13 = r3;
                        r11 = r4;
                        r0 = r15[r2](r14, r13, r12, r11, r10);
                        return r0;
                    }
                };
                var _closure2_slot13 = r1;
                r1 = function(a0, a1, a2, a3) { // Original name: reconcileChildrenArray, environment: r0
                    _fun2936: for(var _fun2936_ip = 0; ; ) switch(_fun2936_ip) {
case 0:
                        r4 = a0;
                        r6 = a1;
                        r13 = a2;
                        r12 = a3;
                        var _closure3_slot0 = r4;
                        r5 = 0;
                        r11 = null;
                        r10 = 0;
                        r0 = null;
                        r9 = null;
                        r3 = r6;
                        r8 = 0;
                        if(!(r11 !== r6)) { _fun2936_ip = 314; continue _fun2936 }
case 40:
                        r1 = r13.length;
                        r1 = r5 < r1;
                        r22 = undefined;
                        r21 = 0;
                        r20 = null;
                        r19 = null;
                        r18 = r6;
                        r17 = 0;
                        r10 = 0;
                        r0 = null;
                        r9 = null;
                        r3 = r18;
                        r8 = 0;
                        if(!r1) { _fun2936_ip = 314; continue _fun2936 }
case 82:
                        r1 = r18.index;
                        r16 = r1 > r17;
                        r14 = r21;
                        r7 = r20;
                        r6 = r19;
                        r24 = r18;
                        r1 = r17;
                        r15 = null;
                        r5 = r24;
                        if(r16) { _fun2936_ip = 122; continue _fun2936 }
case 114:
                        r5 = r24.sibling;
                        r15 = r24;
case 122:
                        r24 = _closure2_slot12;
                        r31 = r13[r1];
                        r34 = undefined;
                        r33 = r4;
                        r32 = r15;
                        r30 = r12;
                        r25 = r34[r24](r33, r32, r31, r30, r29);
                        if(!(r11 !== r25)) { _fun2936_ip = 280; continue _fun2936 }
case 152:
                        r16 = _closure2_slot0;
                        if(!r16) { _fun2936_ip = 162; continue _fun2936 }
case 159:
                        r16 = r15;
case 162:
                        if(!r16) { _fun2936_ip = 174; continue _fun2936 }
case 165:
                        r24 = r25.alternate;
                        r16 = r11 === r24;
case 174:
                        if(!r16) { _fun2936_ip = 187; continue _fun2936 }
case 177:
                        r16 = _closure2_slot1;
                        r16 = r16.bind(r22)(r4, r15);
case 187:
                        r16 = _closure2_slot5;
                        r27 = r16.bind(r22)(r25, r14, r1);
                        r26 = r25;
                        if(!(r11 !== r6)) { _fun2936_ip = 214; continue _fun2936 }
case 205:
                        r6['sibling'] = r25;
                        r26 = r7;
case 214:
                        r24 = r1 + 1;
                        r10 = r27;
                        r0 = r26;
                        r9 = r25;
                        r3 = r5;
                        r8 = r24;
                        if(!(r11 !== r5)) { _fun2936_ip = 314; continue _fun2936 }
case 236:
                        r16 = r13.length;
                        r21 = r27;
                        r20 = r26;
                        r19 = r25;
                        r18 = r5;
                        r17 = r24;
                        r10 = r21;
                        r0 = r20;
                        r9 = r19;
                        r3 = r18;
                        r8 = r17;
                        if(r8 < r16) { _fun2936_ip = 82; continue _fun2936 }
case 278:
                        _fun2936_ip = 314; continue _fun2936;
case 280:
                        r10 = r14;
                        r0 = r7;
                        r9 = r6;
                        r8 = r1;
                        r3 = r15;
                        if(!(r11 === r3)) { _fun2936_ip = 314; continue _fun2936 }
case 299:
                        r10 = r14;
                        r0 = r7;
                        r9 = r6;
                        r3 = r5;
                        r8 = r1;
case 314:
                        r1 = r13.length;
                        if(!(r8 !== r1)) { _fun2936_ip = 680; continue _fun2936 }
case 326:
                        if(!(r11 !== r3)) { _fun2936_ip = 558; continue _fun2936 }
case 333:
                        r1 = _closure2_slot3;
                        r18 = undefined;
                        r6 = r1.bind(r18)(r3);
                        r7 = r13.length;
                        r17 = r10;
                        r16 = r0;
                        r15 = r9;
                        r14 = r8;
                        r1 = r16;
                        if(!(r8 < r7)) { _fun2936_ip = 534; continue _fun2936 }
case 374:
                        r19 = _closure2_slot13;
                        r30 = r13[r14];
                        r34 = undefined;
                        r33 = r6;
                        r32 = r4;
                        r31 = r14;
                        r29 = r12;
                        r19 = r34[r19](r33, r32, r31, r30, r29, r28);
                        r24 = r17;
                        r25 = r16;
                        r26 = r15;
                        r7 = r14;
                        r22 = r24;
                        r20 = r25;
                        r21 = r26;
                        if(!(r11 !== r19)) { _fun2936_ip = 507; continue _fun2936 }
case 425:
                        r23 = _closure2_slot0;
                        if(!r23) { _fun2936_ip = 441; continue _fun2936 }
case 432:
                        r27 = r19.alternate;
                        r23 = r11 !== r27;
case 441:
                        if(!r23) { _fun2936_ip = 471; continue _fun2936 }
case 444:
                        r27 = r6.delete;
                        r28 = r19.key;
                        r23 = r7;
                        if(!(r11 !== r28)) { _fun2936_ip = 466; continue _fun2936 }
case 461:
                        r23 = r19.key;
case 466:
                        r23 = r27.bind(r6)(r23);
case 471:
                        r23 = _closure2_slot5;
                        r24 = r23.bind(r18)(r19, r24, r7);
                        r23 = r19;
                        if(!(r11 !== r26)) { _fun2936_ip = 498; continue _fun2936 }
case 489:
                        r26['sibling'] = r19;
                        r23 = r25;
case 498:
                        r20 = r23;
                        r22 = r24;
                        r21 = r19;
case 507:
                        r14 = r7 + 1;
                        r7 = r13.length;
                        r17 = r22;
                        r16 = r20;
                        r15 = r21;
                        r1 = r16;
                        if(r14 < r7) { _fun2936_ip = 374; continue _fun2936 }
case 534:
                        r5 = _closure2_slot0;
                        if(!r5) { _fun2936_ip = 556; continue _fun2936 }
case 541:
                        r5 = r6.forEach;
                        r2 = function(a0) { // Environment: r2
                            r3 = _closure2_slot1;
                            r2 = _closure3_slot0;
                            r0 = undefined;
                            r1 = a0;
                            r1 = r3.bind(r0)(r2, r1);
                            return r0;
                        };
                        r2 = r5.bind(r6)(r2);
case 556:
                        return r1;
case 558:
                        r2 = r13.length;
                        r6 = undefined;
                        r5 = r0;
                        r1 = r5;
                        if(!(r8 < r2)) { _fun2936_ip = 678; continue _fun2936 }
case 578:
                        r14 = _closure2_slot11;
                        r2 = r13[r8];
                        r14 = r14.bind(r6)(r4, r2, r12);
                        r19 = r10;
                        r20 = r5;
                        r21 = r9;
                        r2 = r8;
                        r17 = r19;
                        r15 = r20;
                        r16 = r21;
                        if(!(r11 !== r14)) { _fun2936_ip = 654; continue _fun2936 }
case 618:
                        r18 = _closure2_slot5;
                        r19 = r18.bind(r6)(r14, r19, r2);
                        r18 = r14;
                        if(!(r11 !== r21)) { _fun2936_ip = 645; continue _fun2936 }
case 636:
                        r21['sibling'] = r14;
                        r18 = r20;
case 645:
                        r15 = r18;
                        r17 = r19;
                        r16 = r14;
case 654:
                        r8 = r2 + 1;
                        r2 = r13.length;
                        r10 = r17;
                        r5 = r15;
                        r9 = r16;
                        r1 = r5;
                        if(r8 < r2) { _fun2936_ip = 578; continue _fun2936 }
case 678:
                        return r1;
case 680:
                        r2 = _closure2_slot2;
                        r1 = undefined;
                        r1 = r2.bind(r1)(r4, r3);
                        return r0;
                    }
                };
                var _closure2_slot14 = r1;
                r1 = function(a0, a1, a2, a3) { // Original name: reconcileChildrenIterator, environment: r0
                    _fun2938: for(var _fun2938_ip = 0; ; ) switch(_fun2938_ip) {
case 0:
                        r4 = a0;
                        r7 = a1;
                        r14 = a2;
                        r13 = a3;
                        var _closure3_slot0 = r4;
                        r12 = null;
                        if(!(r12 != r14)) { _fun2938_ip = 767; continue _fun2938 }
case 27:
                        r0 = r14.next;
                        r5 = r0.bind(r14)();
                        r11 = 0;
                        r0 = null;
                        r10 = null;
                        r3 = r7;
                        r9 = 0;
                        r8 = r5;
                        if(!(r12 !== r7)) { _fun2938_ip = 360; continue _fun2938 }
case 57:
                        r1 = r5.done;
                        r25 = undefined;
                        r24 = 0;
                        r23 = null;
                        r22 = null;
                        r21 = r7;
                        r20 = 0;
                        r19 = r5;
                        r11 = 0;
                        r0 = null;
                        r10 = null;
                        r3 = r21;
                        r9 = 0;
                        r8 = r19;
                        if(r1) { _fun2938_ip = 360; continue _fun2938 }
case 101:
                        r1 = r21.index;
                        r18 = r1 > r20;
                        r16 = r24;
                        r15 = r23;
                        r7 = r22;
                        r27 = r21;
                        r5 = r20;
                        r1 = r19;
                        r17 = null;
                        r6 = r27;
                        if(r18) { _fun2938_ip = 144; continue _fun2938 }
case 136:
                        r6 = r27.sibling;
                        r17 = r27;
case 144:
                        r27 = _closure2_slot12;
                        r34 = r1.value;
                        r37 = undefined;
                        r36 = r4;
                        r35 = r17;
                        r33 = r13;
                        r29 = r37[r27](r36, r35, r34, r33, r32);
                        if(!(r12 !== r29)) { _fun2938_ip = 320; continue _fun2938 }
case 175:
                        r18 = _closure2_slot0;
                        if(!r18) { _fun2938_ip = 185; continue _fun2938 }
case 182:
                        r18 = r17;
case 185:
                        if(!r18) { _fun2938_ip = 197; continue _fun2938 }
case 188:
                        r27 = r29.alternate;
                        r18 = r12 === r27;
case 197:
                        if(!r18) { _fun2938_ip = 210; continue _fun2938 }
case 200:
                        r18 = _closure2_slot1;
                        r18 = r18.bind(r25)(r4, r17);
case 210:
                        r18 = _closure2_slot5;
                        r31 = r18.bind(r25)(r29, r16, r5);
                        r30 = r29;
                        if(!(r12 !== r7)) { _fun2938_ip = 237; continue _fun2938 }
case 228:
                        r7['sibling'] = r29;
                        r30 = r15;
case 237:
                        r28 = r5 + 1;
                        r18 = r14.next;
                        r27 = r18.bind(r14)();
                        r11 = r31;
                        r0 = r30;
                        r10 = r29;
                        r3 = r6;
                        r9 = r28;
                        r8 = r27;
                        if(!(r12 !== r6)) { _fun2938_ip = 360; continue _fun2938 }
case 271:
                        r18 = r27.done;
                        r24 = r31;
                        r23 = r30;
                        r22 = r29;
                        r21 = r6;
                        r20 = r28;
                        r19 = r27;
                        r11 = r24;
                        r0 = r23;
                        r10 = r22;
                        r3 = r21;
                        r9 = r20;
                        r8 = r19;
                        if(r18) { _fun2938_ip = 360; continue _fun2938 }
case 315:
                        _fun2938_ip = 101; continue _fun2938;
case 320:
                        r11 = r16;
                        r0 = r15;
                        r10 = r7;
                        r9 = r5;
                        r8 = r1;
                        r3 = r17;
                        if(!(r12 === r3)) { _fun2938_ip = 360; continue _fun2938 }
case 342:
                        r11 = r16;
                        r0 = r15;
                        r10 = r7;
                        r3 = r6;
                        r9 = r5;
                        r8 = r1;
case 360:
                        r1 = r8.done;
                        if(r1) { _fun2938_ip = 750; continue _fun2938 }
case 371:
                        if(!(r12 !== r3)) { _fun2938_ip = 617; continue _fun2938 }
case 378:
                        r1 = _closure2_slot3;
                        r20 = undefined;
                        r6 = r1.bind(r20)(r3);
                        r7 = r8.done;
                        r19 = r11;
                        r18 = r0;
                        r17 = r10;
                        r16 = r9;
                        r15 = r8;
                        r1 = r18;
                        if(r7) { _fun2938_ip = 593; continue _fun2938 }
case 421:
                        r21 = _closure2_slot13;
                        r33 = r15.value;
                        r37 = undefined;
                        r36 = r6;
                        r35 = r4;
                        r34 = r16;
                        r32 = r13;
                        r22 = r37[r21](r36, r35, r34, r33, r32, r31);
                        r26 = r19;
                        r27 = r18;
                        r28 = r17;
                        r7 = r16;
                        r25 = r26;
                        r21 = r27;
                        r24 = r28;
                        if(!(r12 !== r22)) { _fun2938_ip = 555; continue _fun2938 }
case 473:
                        r23 = _closure2_slot0;
                        if(!r23) { _fun2938_ip = 489; continue _fun2938 }
case 480:
                        r29 = r22.alternate;
                        r23 = r12 !== r29;
case 489:
                        if(!r23) { _fun2938_ip = 519; continue _fun2938 }
case 492:
                        r29 = r6.delete;
                        r30 = r22.key;
                        r23 = r7;
                        if(!(r12 !== r30)) { _fun2938_ip = 514; continue _fun2938 }
case 509:
                        r23 = r22.key;
case 514:
                        r23 = r29.bind(r6)(r23);
case 519:
                        r23 = _closure2_slot5;
                        r26 = r23.bind(r20)(r22, r26, r7);
                        r23 = r22;
                        if(!(r12 !== r28)) { _fun2938_ip = 546; continue _fun2938 }
case 537:
                        r28['sibling'] = r22;
                        r23 = r27;
case 546:
                        r21 = r23;
                        r25 = r26;
                        r24 = r22;
case 555:
                        r16 = r7 + 1;
                        r7 = r14.next;
                        r22 = r7.bind(r14)();
                        r7 = r22.done;
                        r19 = r25;
                        r18 = r21;
                        r17 = r24;
                        r15 = r22;
                        r1 = r18;
                        if(!r7) { _fun2938_ip = 421; continue _fun2938 }
case 593:
                        r5 = _closure2_slot0;
                        if(!r5) { _fun2938_ip = 615; continue _fun2938 }
case 600:
                        r5 = r6.forEach;
                        r2 = function(a0) { // Environment: r2
                            r3 = _closure2_slot1;
                            r2 = _closure3_slot0;
                            r0 = undefined;
                            r1 = a0;
                            r1 = r3.bind(r0)(r2, r1);
                            return r0;
