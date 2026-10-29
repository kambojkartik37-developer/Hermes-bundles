                    r11 = _closure1_slot15;
                    r10['elementType'] = r11;
                    r10['lanes'] = r1;
                    return r10;
case 409:
                    r12 = _closure1_slot477;
                    r20 = undefined;
                    r19 = 13;
                    r18 = r9;
                    r17 = r8;
                    r16 = r4;
                    r10 = r20[r12](r19, r18, r17, r16, r15);
                    r11 = _closure1_slot14;
                    r10['elementType'] = r11;
                    r10['lanes'] = r1;
                    return r10;
case 450:
                    r13 = _closure1_slot477;
                    r10 = 2;
                    r16 = r4 | r10;
                    r20 = undefined;
                    r19 = 12;
                    r18 = r9;
                    r17 = r8;
                    r10 = r20[r13](r19, r18, r17, r16, r15);
                    r11 = _closure1_slot9;
                    r10['elementType'] = r11;
                    r10['lanes'] = r1;
                    return r10;
case 495:
                    r10 = 8;
                    r12 = r4 | r10;
                    r13 = 0;
                    r11 = 1;
                    r11 = r12 & r11;
                    r6 = r9;
                    r2 = r3;
                    r5 = r12;
                    r7 = r10;
                    if(!(r13 !== r11)) { _fun3164_ip = 613; continue _fun3164 }
case 527:
                    r11 = 16;
                    r5 = r12 | r11;
                    r6 = r9;
                    r2 = r3;
                    r7 = r10;
                    _fun3164_ip = 613; continue _fun3164;
case 545:
                    r11 = _closure1_slot482;
                    r19 = r9.children;
                    r20 = undefined;
                    r18 = r4;
                    r17 = r1;
                    r16 = r8;
                    r0 = r20[r11](r19, r18, r17, r16, r15);
                    return r0;
case 572:
                    r10 = _closure1_slot478;
                    r0 = undefined;
                    r0 = r10.bind(r0)(r3);
                    r7 = 0;
                    r6 = r9;
                    r2 = r3;
                    r5 = r4;
                    if(!r0) { _fun3164_ip = 613; continue _fun3164 }
case 601:
                    r7 = 1;
                    r6 = r9;
                    r2 = r3;
                    r5 = r4;
case 613:
                    r4 = _closure1_slot477;
                    r20 = undefined;
                    r19 = r7;
                    r18 = r6;
                    r17 = r8;
                    r16 = r5;
                    r0 = r20[r4](r19, r18, r17, r16, r15);
                    r0['elementType'] = r3;
                    r0['type'] = r2;
                    r0['lanes'] = r1;
                    return r0;
                }
            };
            var _closure1_slot481 = r0;
            r0 = function(a0, a1, a2, a3) { // Original name: createFiberFromFragment, environment: r5
                r5 = _closure1_slot477;
                r10 = undefined;
                r9 = 7;
                r8 = a0;
                r7 = a3;
                r6 = a1;
                r0 = r10[r5](r9, r8, r7, r6, r5);
                r1 = a2;
                r0['lanes'] = r1;
                return r0;
            };
            var _closure1_slot482 = r0;
            r0 = function(a0, a1, a2, a3) { // Original name: createFiberFromOffscreen, environment: r5
                r7 = _closure1_slot477;
                r12 = undefined;
                r11 = 22;
                r10 = a0;
                r9 = a3;
                r8 = a1;
                r0 = r12[r7](r11, r10, r9, r8, r7);
                r1 = _closure1_slot18;
                r0['elementType'] = r1;
                r1 = a2;
                r0['lanes'] = r1;
                r1 = {'_visibility': 1, '_pendingVisibility': 1, '_pendingMarkers': null, '_retryCache': null, '_transitions': null, '_current': null};
                r3 = function() { // Original name: detach, environment: r2
                    _fun3167: for(var _fun3167_ip = 0; ; ) switch(_fun3167_ip) {
case 0:
                        r0 = _closure2_slot0;
                        r4 = r0._current;
                        r6 = null;
                        if(!(r6 !== r4)) { _fun3167_ip = 98; continue _fun3167 }
case 19:
                        r0 = _closure2_slot0;
                        r0 = r0._pendingVisibility;
                        r3 = 2;
                        r1 = r0 & r3;
                        r0 = 0;
                        if(!(r0 === r1)) { _fun3167_ip = 94; continue _fun3167 }
case 42:
                        r1 = _closure1_slot261;
                        r2 = undefined;
                        r1 = r1.bind(r2)(r4, r3);
                        if(!(r6 !== r1)) { _fun3167_ip = 94; continue _fun3167 }
case 62:
                        r6 = _closure2_slot0;
                        r5 = r6._pendingVisibility;
                        r5 = r5 | r3;
                        r6['_pendingVisibility'] = r5;
                        r0 = _closure1_slot445;
                        r0 = r0.bind(r2)(r1, r4, r3);
case 94:
                        r0 = undefined;
                        return r0;
case 98:
                        r0 = global;
                        r2 = r0.Error;
                        r1 = undefined;
                        r0 = 'Calling Offscreen.detach before instance handle has been set.';
                        r0 = r2.bind(r1)(r0);
                        throw r0;
                    }
                };
                r1['detach'] = r3;
                r3 = function() { // Original name: attach, environment: r2
                    _fun3168: for(var _fun3168_ip = 0; ; ) switch(_fun3168_ip) {
case 0:
                        r0 = _closure2_slot0;
                        r4 = r0._current;
                        r6 = null;
                        if(!(r6 !== r4)) { _fun3168_ip = 104; continue _fun3168 }
case 19:
                        r0 = _closure2_slot0;
                        r0 = r0._pendingVisibility;
                        r3 = 2;
                        r1 = r0 & r3;
                        r0 = 0;
                        if(!(r0 !== r1)) { _fun3168_ip = 100; continue _fun3168 }
case 42:
                        r1 = _closure1_slot261;
                        r2 = undefined;
                        r1 = r1.bind(r2)(r4, r3);
                        if(!(r6 !== r1)) { _fun3168_ip = 100; continue _fun3168 }
case 62:
                        r6 = _closure2_slot0;
                        r7 = r6._pendingVisibility;
                        r5 = -3;
                        r5 = r7 & r5;
                        r6['_pendingVisibility'] = r5;
                        r0 = _closure1_slot445;
                        r0 = r0.bind(r2)(r1, r4, r3);
case 100:
                        r0 = undefined;
                        return r0;
case 104:
                        r0 = global;
                        r2 = r0.Error;
                        r1 = undefined;
                        r0 = 'Calling Offscreen.detach before instance handle has been set.';
                        r0 = r2.bind(r1)(r0);
                        throw r0;
                    }
                };
                r1['attach'] = r3;
                var _closure2_slot0 = r1;
                r0['stateNode'] = r1;
                return r0;
            };
            var _closure1_slot483 = r0;
            r0 = function(a0, a1, a2) { // Original name: createFiberFromText, environment: r5
                r5 = _closure1_slot477;
                r10 = undefined;
                r9 = 6;
                r8 = a0;
                r7 = null;
                r6 = a1;
                r0 = r10[r5](r9, r8, r7, r6, r5);
                r1 = a2;
                r0['lanes'] = r1;
                return r0;
            };
            var _closure1_slot484 = r0;
            r0 = function(a0, a1, a2) { // Original name: createFiberFromPortal, environment: r5
                _fun3170: for(var _fun3170_ip = 0; ; ) switch(_fun3170_ip) {
case 0:
                    r2 = a0;
                    r7 = _closure1_slot477;
                    r0 = r2.children;
                    r3 = null;
                    if(!(r3 === r0)) { _fun3170_ip = 28; continue _fun3170 }
case 22:
                    r6 = new Array(0);
                    _fun3170_ip = 33; continue _fun3170;
case 28:
                    r6 = r2.children;
case 33:
                    r9 = r2.key;
                    r12 = undefined;
                    r11 = 4;
                    r8 = a1;
                    r10 = r6;
                    r0 = r12[r7](r11, r10, r9, r8, r7);
                    r1 = a2;
                    r0['lanes'] = r1;
                    r1 = {};
                    r4 = r2.containerInfo;
                    r1['containerInfo'] = r4;
                    r1['pendingChildren'] = r3;
                    r2 = r2.implementation;
                    r1['implementation'] = r2;
                    r0['stateNode'] = r1;
                    return r0;
                }
            };
            var _closure1_slot485 = r0;
            r0 = function(a0, a1, a2, a3, a4, a5, a6, a7) { // Original name: FiberRootNode, environment: r5
                r2 = this;
                r0 = a1;
                r2['tag'] = r0;
                r0 = a0;
                r2['containerInfo'] = r0;
                r3 = null;
                r2['pendingChildren'] = r3;
                r2['current'] = r3;
                r2['pingCache'] = r3;
                r2['finishedWork'] = r3;
                r5 = -1;
                r2['timeoutHandle'] = r5;
                r2['cancelPendingCommit'] = r3;
                r2['context'] = r3;
                r2['pendingContext'] = r3;
                r2['next'] = r3;
                r2['callbackNode'] = r3;
                r1 = 0;
                r2['callbackPriority'] = r1;
                r4 = _closure1_slot239;
                r0 = undefined;
                r5 = r4.bind(r0)(r5);
                r2['expirationTimes'] = r5;
                r2['pendingLanes'] = r1;
                r2['suspendedLanes'] = r1;
                r2['pingedLanes'] = r1;
                r2['warmLanes'] = r1;
                r2['expiredLanes'] = r1;
                r2['finishedLanes'] = r1;
                r2['errorRecoveryDisabledLanes'] = r1;
                r2['shellSuspendCounter'] = r1;
                r2['entangledLanes'] = r1;
                r5 = r4.bind(r0)(r1);
                r2['entanglements'] = r5;
                r4 = r4.bind(r0)(r3);
                r2['hiddenUpdates'] = r4;
                r4 = a3;
                r2['identifierPrefix'] = r4;
                r4 = a4;
                r2['onUncaughtError'] = r4;
                r4 = a5;
                r2['onCaughtError'] = r4;
                r4 = a6;
                r2['onRecoverableError'] = r4;
                r2['pooledCache'] = r3;
                r2['pooledCacheLanes'] = r1;
                r1 = a7;
                r2['formState'] = r1;
                r1 = global;
                r1 = r1.Map;
                r3 = r1.prototype;
                r3 = Object.create(r3, {constructor: {value: r1}});
                r7 = r3;
                r1 = new r7[r1](r6);
                r1 = r1 instanceof Object ? r1 : r3;
                r2['incompleteTransitions'] = r1;
                return r0;
            };
            var _closure1_slot486 = r0;
            r0 = function(a0, a1, a2) { // Original name: createPortal$1, environment: r5
                _fun3172: for(var _fun3172_ip = 0; ; ) switch(_fun3172_ip) {
case 0:
                    r5 = undefined;
                    r3 = undefined;
                    r1 = arguments.length;
                    r0 = 3;
                    r4 = r0 < r1;
                    r1 = null;
                    r2 = null;
                    if(!r4) { _fun3172_ip = 35; continue _fun3172 }
case 21:
                    r4 = arguments[r0];
                    r2 = null;
                    if(!(r5 !== r4)) { _fun3172_ip = 35; continue _fun3172 }
case 31:
                    r2 = arguments[r0];
case 35:
                    r0 = {};
                    r3 = _closure1_slot6;
                    r0['$$typeof'] = r3;
                    r3 = r1 == r2;
                    r1 = null;
                    if(r3) { _fun3172_ip = 60; continue _fun3172 }
case 57:
                    r1 = '' + r2;
case 60:
                    r0['key'] = r1;
                    r1 = a0;
                    r0['children'] = r1;
                    r1 = a1;
                    r0['containerInfo'] = r1;
                    r1 = a2;
                    r0['implementation'] = r1;
                    return r0;
                }
            };
            var _closure1_slot487 = r0;
            r0 = function(a0) { // Original name: findHostInstance, environment: r5
                _fun3173: for(var _fun3173_ip = 0; ; ) switch(_fun3173_ip) {
case 0:
                    r4 = a0;
                    r1 = r4._reactInternals;
                    r2 = undefined;
                    if(!(r2 !== r1)) { _fun3173_ip = 66; continue _fun3173 }
case 15:
                    r0 = _closure1_slot222;
                    r6 = r0.bind(r2)(r1);
                    r0 = null;
                    r1 = null;
                    if(!(r0 !== r6)) { _fun3173_ip = 44; continue _fun3173 }
case 35:
                    r5 = _closure1_slot223;
                    r1 = r5.bind(r2)(r6);
case 44:
                    r0 = null;
                    if(!(r0 !== r1)) { _fun3173_ip = 64; continue _fun3173 }
case 50:
                    r3 = _closure1_slot250;
                    r1 = r1.stateNode;
                    r0 = r3.bind(r2)(r1);
case 64:
                    return r0;
case 66:
                    r0 = r4.render;
                    r1 = 'function';
                    r0 = typeof r0;
                    if(!(r1 !== r0)) { _fun3173_ip = 136; continue _fun3173 }
case 83:
                    r0 = global;
                    r3 = r0.Object;
                    r1 = r3.keys;
                    r4 = r1.bind(r3)(r4);
                    r3 = r4.join;
                    r1 = ',';
                    r3 = r3.bind(r4)(r1);
                    r1 = r0.Error;
                    r0 = 'Argument appears to not be a ReactComponent. Keys: ';
                    r0 = r0 + r3;
                    r0 = r1.bind(r2)(r0);
                    throw r0;
case 136:
                    r0 = global;
                    r1 = r0.Error;
                    r0 = 'Unable to find node on an unmounted component.';
                    r0 = r1.bind(r2)(r0);
                    throw r0;
                }
            };
            var _closure1_slot488 = r0;
            r0 = function(a0, a1, a2, a3) { // Original name: updateContainer, environment: r5
                _fun3174: for(var _fun3174_ip = 0; ; ) switch(_fun3174_ip) {
case 0:
                    r6 = a1;
                    r7 = a3;
                    r4 = r6.current;
                    r0 = _closure1_slot443;
                    r3 = undefined;
                    r0 = r0.bind(r3)(r4);
                    r2 = r6.context;
                    r5 = null;
                    if(!(r5 !== r2)) { _fun3174_ip = 49; continue _fun3174 }
case 37:
                    r2 = _closure1_slot72;
                    r6['pendingContext'] = r2;
                    _fun3174_ip = 59; continue _fun3174;
case 49:
                    r2 = _closure1_slot72;
                    r6['context'] = r2;
case 59:
                    r2 = _closure1_slot276;
                    r6 = r2.bind(r3)(r0);
                    r2 = {};
                    r8 = a0;
                    r2['element'] = r8;
                    r6['payload'] = r2;
                    r2 = null;
                    if(!(r3 !== r7)) { _fun3174_ip = 94; continue _fun3174 }
case 91:
                    r2 = r7;
case 94:
                    if(!(r5 !== r2)) { _fun3174_ip = 104; continue _fun3174 }
case 98:
                    r6['callback'] = r2;
case 104:
                    r2 = _closure1_slot277;
                    r2 = r2.bind(r3)(r4, r6, r0);
                    if(!(r5 !== r2)) { _fun3174_ip = 144; continue _fun3174 }
case 120:
                    r5 = _closure1_slot445;
                    r5 = r5.bind(r3)(r2, r4, r0);
                    r1 = _closure1_slot278;
                    r1 = r1.bind(r3)(r2, r4, r0);
case 144:
                    return r0;
                }
            };
            var _closure1_slot489 = r0;
            r0 = function(a0, a1) { // Original name: nativeOnUncaughtError, environment: r5
                _fun3175: for(var _fun3175_ip = 0; ; ) switch(_fun3175_ip) {
case 0:
                    r2 = a0;
                    r7 = a1;
                    r4 = _closure1_slot0;
                    r3 = _closure1_slot1;
                    r0 = 2;
                    r3 = r3[r0];
                    r0 = undefined;
                    r3 = r4.bind(r0)(r3);
                    r5 = r3.ReactFiberErrorDialog;
                    r4 = r5.showErrorDialog;
                    r3 = {};
                    r8 = null;
                    r3['errorBoundary'] = r8;
                    r3['error'] = r2;
                    r6 = r7.componentStack;
                    r8 = r8 != r6;
                    r6 = '';
                    if(!r8) { _fun3175_ip = 77; continue _fun3175 }
case 72:
                    r6 = r7.componentStack;
case 77:
                    r3['componentStack'] = r6;
                    r4 = r4.bind(r5)(r3);
                    r3 = false;
                    if(!(r3 !== r4)) { _fun3175_ip = 101; continue _fun3175 }
case 92:
                    r1 = _closure1_slot125;
                    r1 = r1.bind(r0)(r2);
case 101:
                    return r0;
                }
            };
            var _closure1_slot490 = r0;
            r0 = function(a0, a1) { // Original name: nativeOnCaughtError, environment: r5
                _fun3176: for(var _fun3176_ip = 0; ; ) switch(_fun3176_ip) {
case 0:
                    r3 = a0;
                    r6 = a1;
                    r2 = _closure1_slot0;
                    r1 = _closure1_slot1;
                    r0 = 2;
                    r1 = r1[r0];
                    r0 = undefined;
                    r1 = r2.bind(r0)(r1);
                    r4 = r1.ReactFiberErrorDialog;
                    r2 = r4.showErrorDialog;
                    r1 = {};
                    r5 = r6.errorBoundary;
                    r1['errorBoundary'] = r5;
                    r1['error'] = r3;
                    r7 = r6.componentStack;
                    r5 = null;
                    r7 = r5 != r7;
                    r5 = '';
                    if(!r7) { _fun3176_ip = 83; continue _fun3176 }
case 78:
                    r5 = r6.componentStack;
case 83:
                    r1['componentStack'] = r5;
                    r2 = r2.bind(r4)(r1);
                    r1 = false;
                    if(!(r1 !== r2)) { _fun3176_ip = 116; continue _fun3176 }
case 98:
                    r1 = global;
                    r2 = r1.console;
                    r1 = r2.error;
                    r1 = r1.bind(r2)(r3);
case 116:
                    return r0;
                }
            };
            var _closure1_slot491 = r0;
            r6 = function(a0) { // Original name: unmountComponentAtNode, environment: r5
                _fun3177: for(var _fun3177_ip = 0; ; ) switch(_fun3177_ip) {
case 0:
                    r4 = a0;
                    var _closure2_slot0 = r4;
                    r3 = _closure1_slot176;
                    r2 = r3.get;
                    r4 = r2.bind(r3)(r4);
                    if(!r4) { _fun3177_ip = 52; continue _fun3177 }
case 29:
                    r3 = _closure1_slot489;
                    r8 = null;
                    r5 = function() { // Environment: r0
                        r2 = _closure1_slot176;
                        r1 = r2.delete;
                        r0 = _closure2_slot0;
                        r0 = r1.bind(r2)(r0);
                        r0 = undefined;
                        return r0;
                    };
                    r9 = undefined;
                    r7 = r4;
                    r6 = undefined;
                    r0 = r9[r3](r8, r7, r6, r5, r4);
case 52:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot492 = r6;
            r19 = 0;
            r0 = r18[r19];
            r0 = r17.bind(r2)(r0);
            r0 = 1;
            r0 = r18[r0];
            r3 = r17.bind(r2)(r0);
            r0 = global;
            r10 = r0.Array;
            r10 = r10.isArray;
            var _closure1_slot2 = r10;
            r15 = r3.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
            var _closure1_slot3 = r15;
            r20 = r0.Symbol;
            r16 = r20.for;
            r10 = 'react.element';
            r10 = r16.bind(r20)(r10);
            var _closure1_slot4 = r10;
            r20 = r0.Symbol;
            r16 = r20.for;
            r10 = 'react.transitional.element';
            r10 = r16.bind(r20)(r10);
            var _closure1_slot5 = r10;
            r20 = r0.Symbol;
            r16 = r20.for;
            r10 = 'react.portal';
            r10 = r16.bind(r20)(r10);
            var _closure1_slot6 = r10;
            r20 = r0.Symbol;
            r16 = r20.for;
            r10 = 'react.fragment';
            r10 = r16.bind(r20)(r10);
            var _closure1_slot7 = r10;
            r20 = r0.Symbol;
            r16 = r20.for;
            r10 = 'react.strict_mode';
            r10 = r16.bind(r20)(r10);
            var _closure1_slot8 = r10;
            r20 = r0.Symbol;
            r16 = r20.for;
            r10 = 'react.profiler';
            r10 = r16.bind(r20)(r10);
            var _closure1_slot9 = r10;
            r20 = r0.Symbol;
            r16 = r20.for;
            r10 = 'react.provider';
            r10 = r16.bind(r20)(r10);
            var _closure1_slot10 = r10;
            r20 = r0.Symbol;
            r16 = r20.for;
            r10 = 'react.consumer';
            r10 = r16.bind(r20)(r10);
            var _closure1_slot11 = r10;
            r20 = r0.Symbol;
            r16 = r20.for;
            r10 = 'react.context';
            r23 = r16.bind(r20)(r10);
            var _closure1_slot12 = r23;
            r20 = r0.Symbol;
            r16 = r20.for;
            r10 = 'react.forward_ref';
            r10 = r16.bind(r20)(r10);
            var _closure1_slot13 = r10;
            r20 = r0.Symbol;
            r16 = r20.for;
            r10 = 'react.suspense';
            r10 = r16.bind(r20)(r10);
            var _closure1_slot14 = r10;
            r20 = r0.Symbol;
            r16 = r20.for;
            r10 = 'react.suspense_list';
            r10 = r16.bind(r20)(r10);
            var _closure1_slot15 = r10;
            r20 = r0.Symbol;
            r16 = r20.for;
            r10 = 'react.memo';
            r10 = r16.bind(r20)(r10);
            var _closure1_slot16 = r10;
            r20 = r0.Symbol;
            r16 = r20.for;
            r10 = 'react.lazy';
            r10 = r16.bind(r20)(r10);
            var _closure1_slot17 = r10;
            r20 = r0.Symbol;
            r16 = r20.for;
            r10 = 'react.scope';
            r10 = r16.bind(r20)(r10);
            r20 = r0.Symbol;
            r16 = r20.for;
            r10 = 'react.debug_trace_mode';
            r10 = r16.bind(r20)(r10);
            r20 = r0.Symbol;
            r16 = r20.for;
            r10 = 'react.offscreen';
            r10 = r16.bind(r20)(r10);
            var _closure1_slot18 = r10;
            r20 = r0.Symbol;
            r16 = r20.for;
            r10 = 'react.legacy_hidden';
            r10 = r16.bind(r20)(r10);
            r20 = r0.Symbol;
            r16 = r20.for;
            r10 = 'react.tracing_marker';
            r10 = r16.bind(r20)(r10);
            r20 = r0.Symbol;
            r16 = r20.for;
            r10 = 'react.memo_cache_sentinel';
            r10 = r16.bind(r20)(r10);
            var _closure1_slot19 = r10;
            r10 = r0.Symbol;
            r10 = r10.iterator;
            var _closure1_slot20 = r10;
            r10 = r0.Object;
            r49 = r10.assign;
            var _closure1_slot21 = r49;
            r20 = false;
            var _closure1_slot24 = r20;
            r47 = r0.Symbol;
            r16 = r47.for;
            r10 = 'react.client.reference';
            r10 = r16.bind(r47)(r10);
            var _closure1_slot25 = r10;
            var _closure1_slot26 = r20;
            r10 = null;
            var _closure1_slot27 = r10;
            var _closure1_slot28 = r10;
            var _closure1_slot29 = r10;
            var _closure1_slot30 = r10;
            r47 = r45.prototype;
            r16 = {};
            r51 = function() { // Original name: preventDefault, environment: r5
                _fun3179: for(var _fun3179_ip = 0; ; ) switch(_fun3179_ip) {
case 0:
                    r1 = this;
                    r0 = true;
                    r1['defaultPrevented'] = r0;
                    r2 = r1.nativeEvent;
                    if(!r2) { _fun3179_ip = 78; continue _fun3179 }
case 19:
                    r0 = r2.preventDefault;
                    if(r0) { _fun3179_ip = 55; continue _fun3179 }
case 28:
                    r0 = r2.returnValue;
                    r3 = 'unknown';
                    r0 = typeof r0;
                    if(!(r3 !== r0)) { _fun3179_ip = 65; continue _fun3179 }
case 45:
                    r0 = false;
                    r2['returnValue'] = r0;
                    _fun3179_ip = 65; continue _fun3179;
case 55:
                    r0 = r2.preventDefault;
                    r0 = r0.bind(r2)();
case 65:
                    r0 = _closure1_slot185;
                    r1['isDefaultPrevented'] = r0;
case 78:
                    r0 = undefined;
                    return r0;
                }
            };
            r16['preventDefault'] = r51;
            r51 = function() { // Original name: stopPropagation, environment: r5
                _fun3180: for(var _fun3180_ip = 0; ; ) switch(_fun3180_ip) {
case 0:
                    r1 = this;
                    r2 = r1.nativeEvent;
                    if(!r2) { _fun3180_ip = 70; continue _fun3180 }
case 11:
                    r0 = r2.stopPropagation;
                    if(r0) { _fun3180_ip = 47; continue _fun3180 }
case 20:
                    r0 = r2.cancelBubble;
                    r3 = 'unknown';
                    r0 = typeof r0;
                    if(!(r3 !== r0)) { _fun3180_ip = 57; continue _fun3180 }
case 37:
                    r0 = true;
                    r2['cancelBubble'] = r0;
                    _fun3180_ip = 57; continue _fun3180;
case 47:
                    r0 = r2.stopPropagation;
                    r0 = r0.bind(r2)();
case 57:
                    r0 = _closure1_slot185;
                    r1['isPropagationStopped'] = r0;
case 70:
                    r0 = undefined;
                    return r0;
                }
            };
            r16['stopPropagation'] = r51;
            r51 = function() { // Original name: persist, environment: r5
                r1 = _closure1_slot185;
                r0 = this;
                r0['isPersistent'] = r1;
                r0 = undefined;
                return r0;
            };
            r16['persist'] = r51;
            r16['isPersistent'] = r50;
            r50 = function() { // Original name: destructor, environment: r5
                _fun3182: for(var _fun3182_ip = 0; ; ) switch(_fun3182_ip) {
case 0:
                    r1 = this;
                    r0 = r1.constructor;
                    r0 = r0.Interface;
                    r5 = r0;
                    r0 = null;
                    for(r2 in r5)
case 27:
                    {
case 36:
                        r7 = r2;
                        r1[r7] = r0;
                        _fun3182_ip = 27; continue _fun3182;
                    }
case 45:
                    r1['dispatchConfig'] = r0;
                    r1['_targetInst'] = r0;
                    r1['nativeEvent'] = r0;
                    r2 = _closure1_slot186;
                    r1['isDefaultPrevented'] = r2;
                    r1['isPropagationStopped'] = r2;
                    r1['_dispatchListeners'] = r0;
                    r1['_dispatchInstances'] = r0;
                    r0 = undefined;
                    return r0;
                }
            };
            r16['destructor'] = r50;
            r16 = r49.bind(r2)(r47, r16);
            r16 = {'type': null, 'target': null, 'currentTarget': null, 'eventPhase': null, 'bubbles': null, 'cancelable': null, 'timeStamp': null, 'defaultPrevented': null, 'isTrusted': null};
            r47 = function() { // Original name: currentTarget, environment: r5
                r0 = null;
                return r0;
            };
            r16['currentTarget'] = r47;
            r47 = function(a0) { // Original name: timeStamp, environment: r5
                _fun3184: for(var _fun3184_ip = 0; ; ) switch(_fun3184_ip) {
case 0:
                    r0 = a0;
                    r0 = r0.timeStamp;
                    if(r0) { _fun3184_ip = 29; continue _fun3184 }
case 12:
                    r1 = global;
                    r2 = r1.Date;
                    r1 = r2.now;
                    r0 = r1.bind(r2)();
case 29:
                    return r0;
                }
            };
            r16['timeStamp'] = r47;
            r45['Interface'] = r16;
            r16 = function(a0) { // Environment: r5
                r3 = this;
                r1 = function() { // Original name: E, environment: r2
                    r0 = undefined;
                    return r0;
                };
                r0 = function() { // Original name: Class, environment: r2
                    r0 = undefined;
                    r3 = _closure2_slot0;
                    r2 = r3.apply;
                    r0 = arguments;
                    r1 = r0;
                    r0 = this;
                    r0 = r2.bind(r3)(r0, r1);
                    return r0;
                };
                var _closure2_slot0 = r3;
                r2 = r3.prototype;
                r1['prototype'] = r2;
                r2 = r1.prototype;
                r2 = Object.create(r2, {constructor: {value: r1}});
                r11 = r2;
                r1 = new r11[r1](r10);
                r4 = r1 instanceof Object ? r1 : r2;
                r6 = _closure1_slot21;
                r5 = r0.prototype;
                r2 = undefined;
                r5 = r6.bind(r2)(r4, r5);
                r0['prototype'] = r4;
                r4 = r0.prototype;
                r4['constructor'] = r0;
                r7 = _closure1_slot21;
                r6 = r3.Interface;
                r5 = {};
                r4 = a0;
                r4 = r7.bind(r2)(r5, r6, r4);
                r0['Interface'] = r4;
                r3 = r3.extend;
                r0['extend'] = r3;
                r1 = _closure1_slot190;
                r1 = r1.bind(r2)(r0);
                return r0;
            };
            r45['extend'] = r16;
            r13 = r13.bind(r2)(r45);
            r16 = r45.extend;
            r13 = {};
            r47 = function() { // Original name: touchHistory, environment: r5
                r0 = null;
                return r0;
            };
            r13['touchHistory'] = r47;
            r13 = r16.bind(r45)(r13);
            var _closure1_slot31 = r13;
            r50 = ['topTouchStart'];
            r49 = ['topTouchMove'];
            r47 = ['topTouchCancel', 'topTouchEnd'];
            r13 = new Array(0);
            var _closure1_slot32 = r13;
            r45 = {'touchBank': null, 'numberActiveTouches': 0, 'indexOfSingleActiveTouch': 4294967295, 'mostRecentTimeStamp': 0};
            r45['touchBank'] = r13;
            r16 = -1;
            var _closure1_slot33 = r45;
            r13 = {};
            r51 = function(a0) { // Original name: instrument, environment: r5
                r0 = a0;
                var _closure1_slot34 = r0;
                r0 = undefined;
                return r0;
            };
            r13['instrument'] = r51;
            r51 = function(a0, a1) { // Original name: recordTouchTrack, environment: r5
                _fun3190: for(var _fun3190_ip = 0; ; ) switch(_fun3190_ip) {
case 0:
                    r4 = a0;
                    r2 = a1;
                    r0 = _closure1_slot34;
                    r6 = null;
                    if(!(r6 != r0)) { _fun3190_ip = 31; continue _fun3190 }
case 19:
                    r3 = _closure1_slot34;
                    r0 = undefined;
                    r0 = r3.bind(r0)(r4, r2);
case 31:
                    r3 = _closure1_slot192;
                    r0 = undefined;
                    r3 = r3.bind(r0)(r4);
                    if(r3) { _fun3190_ip = 306; continue _fun3190 }
case 48:
                    r3 = _closure1_slot191;
                    r3 = r3.bind(r0)(r4);
                    if(r3) { _fun3190_ip = 218; continue _fun3190 }
case 63:
                    r3 = 'topTouchEnd';
                    if(!(r3 !== r4)) { _fun3190_ip = 82; continue _fun3190 }
case 71:
                    r3 = 'topTouchCancel';
                    if(!(r3 === r4)) { _fun3190_ip = 326; continue _fun3190 }
case 82:
                    r5 = r2.changedTouches;
                    r4 = r5.forEach;
                    r3 = _closure1_slot197;
                    r3 = r4.bind(r5)(r3);
                    r4 = _closure1_slot33;
                    r3 = r2.touches;
                    r3 = r3.length;
                    r4['numberActiveTouches'] = r3;
                    r3 = _closure1_slot33;
                    r4 = r3.numberActiveTouches;
                    r3 = 1;
                    if(!(r3 === r4)) { _fun3190_ip = 326; continue _fun3190 }
case 143:
                    r3 = _closure1_slot32;
                    r3 = r3.length;
                    r5 = 0;
                    r3 = r5 < r3;
                    if(!r3) { _fun3190_ip = 326; continue _fun3190 }
case 164:
                    r3 = _closure1_slot32;
                    r3 = r3[r5];
                    r4 = r5;
                    if(!(r6 != r3)) { _fun3190_ip = 188; continue _fun3190 }
case 179:
                    r3 = r3.touchActive;
                    if(r3) { _fun3190_ip = 206; continue _fun3190 }
case 188:
                    r5 = r4 + 1;
                    r3 = _closure1_slot32;
                    r3 = r3.length;
                    if(r5 < r3) { _fun3190_ip = 164; continue _fun3190 }
case 204:
                    _fun3190_ip = 326; continue _fun3190;
case 206:
                    r3 = _closure1_slot33;
                    r3['indexOfSingleActiveTouch'] = r4;
                    _fun3190_ip = 326; continue _fun3190;
case 218:
                    r5 = r2.changedTouches;
                    r4 = r5.forEach;
                    r3 = _closure1_slot195;
                    r3 = r4.bind(r5)(r3);
                    r4 = _closure1_slot33;
                    r3 = r2.touches;
                    r3 = r3.length;
                    r4['numberActiveTouches'] = r3;
                    r3 = _closure1_slot33;
                    r4 = r3.numberActiveTouches;
                    r3 = 1;
                    if(!(r3 === r4)) { _fun3190_ip = 326; continue _fun3190 }
case 276:
                    r4 = _closure1_slot33;
                    r5 = r2.touches;
                    r3 = 0;
                    r3 = r5[r3];
                    r3 = r3.identifier;
                    r4['indexOfSingleActiveTouch'] = r3;
                    _fun3190_ip = 326; continue _fun3190;
case 306:
                    r3 = r2.changedTouches;
                    r2 = r3.forEach;
                    r1 = _closure1_slot196;
                    r1 = r2.bind(r3)(r1);
case 326:
                    return r0;
                }
            };
            r13['recordTouchTrack'] = r51;
            r13['touchHistory'] = r45;
            var _closure1_slot35 = r13;
            var _closure1_slot36 = r10;
            var _closure1_slot37 = r19;
            r13 = {};
            r45 = {};
            r51 = {'bubbled': 'onStartShouldSetResponder', 'captured': 'onStartShouldSetResponderCapture'};
            r45['phasedRegistrationNames'] = r51;
            r45['dependencies'] = r50;
            r13['startShouldSetResponder'] = r45;
            r45 = {};
            r51 = {'bubbled': 'onScrollShouldSetResponder', 'captured': 'onScrollShouldSetResponderCapture'};
            r45['phasedRegistrationNames'] = r51;
            r51 = ['topScroll'];
            r45['dependencies'] = r51;
            r13['scrollShouldSetResponder'] = r45;
            r45 = {};
            r51 = {'bubbled': 'onSelectionChangeShouldSetResponder', 'captured': 'onSelectionChangeShouldSetResponderCapture'};
            r45['phasedRegistrationNames'] = r51;
            r51 = ['topSelectionChange'];
            r45['dependencies'] = r51;
            r13['selectionChangeShouldSetResponder'] = r45;
            r45 = {};
            r51 = {'bubbled': 'onMoveShouldSetResponder', 'captured': 'onMoveShouldSetResponderCapture'};
            r45['phasedRegistrationNames'] = r51;
            r45['dependencies'] = r49;
            r13['moveShouldSetResponder'] = r45;
            r45 = {};
            r51 = 'onResponderStart';
            r45['registrationName'] = r51;
            r45['dependencies'] = r50;
            r13['responderStart'] = r45;
            r45 = {};
            r50 = 'onResponderMove';
            r45['registrationName'] = r50;
            r45['dependencies'] = r49;
            r13['responderMove'] = r45;
            r45 = {};
            r49 = 'onResponderEnd';
            r45['registrationName'] = r49;
            r45['dependencies'] = r47;
            r13['responderEnd'] = r45;
            r45 = {};
            r49 = 'onResponderRelease';
            r45['registrationName'] = r49;
            r45['dependencies'] = r47;
            r13['responderRelease'] = r45;
            r45 = {};
            r47 = 'onResponderTerminationRequest';
            r45['registrationName'] = r47;
            r47 = new Array(0);
            r45['dependencies'] = r47;
            r13['responderTerminationRequest'] = r45;
            r45 = {};
            r47 = 'onResponderGrant';
            r45['registrationName'] = r47;
            r47 = new Array(0);
            r45['dependencies'] = r47;
            r13['responderGrant'] = r45;
            r45 = {};
            r47 = 'onResponderReject';
            r45['registrationName'] = r47;
            r47 = new Array(0);
            r45['dependencies'] = r47;
            r13['responderReject'] = r45;
            r45 = {};
            r47 = 'onResponderTerminate';
            r45['registrationName'] = r47;
            r47 = new Array(0);
            r45['dependencies'] = r47;
            r13['responderTerminate'] = r45;
            var _closure1_slot38 = r13;
            r47 = {};
            r45 = function() { // Original name: _getResponder, environment: r5
                r0 = _closure1_slot36;
                return r0;
            };
            r47['_getResponder'] = r45;
            r47['eventTypes'] = r13;
            r13 = function(a0, a1, a2, a3) { // Original name: extractEvents, environment: r5
                _fun3192: for(var _fun3192_ip = 0; ; ) switch(_fun3192_ip) {
case 0:
                    r8 = a0;
                    r13 = a1;
                    r10 = a2;
                    r9 = a3;
                    r0 = _closure1_slot191;
                    r4 = undefined;
                    r0 = r0.bind(r4)(r8);
                    if(r0) { _fun3192_ip = 72; continue _fun3192 }
case 29:
                    r0 = 'topTouchEnd';
                    if(!(r0 !== r8)) { _fun3192_ip = 45; continue _fun3192 }
case 37:
                    r0 = 'topTouchCancel';
                    if(!(r0 === r8)) { _fun3192_ip = 87; continue _fun3192 }
case 45:
                    r1 = _closure1_slot37;
                    r0 = 0;
                    if(!(!(r0 <= r1))) { _fun3192_ip = 59; continue _fun3192 }
case 55:
                    r0 = null;
                    return r0;
case 59:
                    r0 = _closure1_slot37;
                    r0 = r0 - 1;
                    _closure1_slot37 = r0;
                    _fun3192_ip = 87; continue _fun3192;
case 72:
                    r1 = _closure1_slot37;
                    r0 = 1;
                    r0 = r1 + r0;
                    _closure1_slot37 = r0;
case 87:
                    r1 = _closure1_slot35;
                    r0 = r1.recordTouchTrack;
                    r0 = r0.bind(r1)(r8, r10);
                    r3 = null;
                    r14 = undefined;
                    r5 = null;
                    if(!r13) { _fun3192_ip = 1203; continue _fun3192 }
case 115:
                    r0 = 'topScroll';
                    if(!(r0 === r8)) { _fun3192_ip = 132; continue _fun3192 }
case 123:
                    r0 = r10.responderIgnoreScroll;
                    if(!r0) { _fun3192_ip = 181; continue _fun3192 }
case 132:
                    r1 = _closure1_slot37;
                    r0 = 0;
                    if(!(r0 < r1)) { _fun3192_ip = 150; continue _fun3192 }
case 142:
                    r0 = 'topSelectionChange';
                    if(!(r0 !== r8)) { _fun3192_ip = 181; continue _fun3192 }
case 150:
                    r0 = _closure1_slot191;
                    r0 = r0.bind(r4)(r8);
                    if(r0) { _fun3192_ip = 181; continue _fun3192 }
case 162:
                    r0 = _closure1_slot192;
                    r0 = r0.bind(r4)(r8);
                    r14 = undefined;
                    r5 = null;
                    if(!r0) { _fun3192_ip = 1203; continue _fun3192 }
case 181:
                    r0 = _closure1_slot191;
                    r0 = r0.bind(r4)(r8);
                    if(r0) { _fun3192_ip = 249; continue _fun3192 }
case 193:
                    r0 = _closure1_slot192;
                    r0 = r0.bind(r4)(r8);
                    if(r0) { _fun3192_ip = 237; continue _fun3192 }
case 205:
                    r0 = 'topSelectionChange';
                    if(!(r0 !== r8)) { _fun3192_ip = 225; continue _fun3192 }
case 213:
                    r0 = _closure1_slot38;
                    r12 = r0.scrollShouldSetResponder;
                    _fun3192_ip = 235; continue _fun3192;
case 225:
                    r0 = _closure1_slot38;
                    r12 = r0.selectionChangeShouldSetResponder;
case 235:
                    _fun3192_ip = 247; continue _fun3192;
case 237:
                    r0 = _closure1_slot38;
                    r12 = r0.moveShouldSetResponder;
case 247:
                    _fun3192_ip = 259; continue _fun3192;
case 249:
                    r0 = _closure1_slot38;
                    r12 = r0.startShouldSetResponder;
case 259:
                    r6 = _closure1_slot36;
                    r0 = r13;
                    r1 = undefined;
                    if(!r6) { _fun3192_ip = 502; continue _fun3192 }
case 274:
                    r15 = _closure1_slot36;
                    r17 = 0;
                    r11 = 0;
                    r7 = r15;
                    r6 = 0;
                    if(!r15) { _fun3192_ip = 308; continue _fun3192 }
case 290:
                    r11 = r11 + 1;
                    r16 = _closure1_slot202;
                    r7 = r16.bind(r4)(r7);
                    r6 = r11;
                    if(r7) { _fun3192_ip = 290; continue _fun3192 }
case 308:
                    r11 = 0;
                    r7 = r13;
                    r16 = 0;
                    if(!r13) { _fun3192_ip = 336; continue _fun3192 }
case 318:
                    r11 = r11 + 1;
                    r18 = _closure1_slot202;
                    r7 = r18.bind(r4)(r7);
                    r16 = r11;
                    if(r7) { _fun3192_ip = 318; continue _fun3192 }
case 336:
                    r7 = r6 - r16;
                    r18 = r15;
                    r11 = r6;
                    r15 = r18;
                    r6 = r11;
                    if(!(r17 < r7)) { _fun3192_ip = 385; continue _fun3192 }
case 356:
                    r7 = _closure1_slot202;
                    r18 = r7.bind(r4)(r18);
                    r19 = r11 - 1;
                    r7 = r19 - r16;
                    r11 = r19;
                    r15 = r18;
                    r6 = r11;
                    if(r17 < r7) { _fun3192_ip = 356; continue _fun3192 }
case 385:
                    r7 = r16 - r6;
                    r11 = r13;
                    r13 = r11;
                    if(!(r17 < r7)) { _fun3192_ip = 425; continue _fun3192 }
case 399:
                    r7 = _closure1_slot202;
                    r11 = r7.bind(r4)(r11);
                    r19 = r16 - 1;
                    r7 = r19 - r6;
                    r16 = r19;
                    r13 = r11;
                    if(r17 < r7) { _fun3192_ip = 399; continue _fun3192 }
case 425:
                    r7 = parseFloat(r6);
                    r11 = r7 - 1;
                    r6 = r11;
                    if(!r7) { _fun3192_ip = 497; continue _fun3192 }
case 437:
                    r18 = r13;
                    r17 = r15;
                    r7 = r11;
                    r0 = r17;
                    r1 = r7;
                    if(!(r17 !== r18)) { _fun3192_ip = 502; continue _fun3192 }
case 456:
                    r16 = r18.alternate;
                    r1 = r7;
                    r0 = r17;
                    if(!(r0 !== r16)) { _fun3192_ip = 502; continue _fun3192 }
case 471:
                    r16 = _closure1_slot202;
                    r15 = r16.bind(r4)(r17);
                    r13 = r16.bind(r4)(r18);
                    r7 = parseFloat(r7);
                    r11 = r7 - 1;
                    r6 = r11;
                    if(r7) { _fun3192_ip = 437; continue _fun3192 }
case 497:
                    r1 = r6;
                    r0 = null;
case 502:
                    r6 = _closure1_slot36;
                    r11 = _closure1_slot31;
                    r7 = r11.getPooled;
                    r27 = r11;
                    r26 = r12;
                    r25 = r0;
                    r24 = r10;
                    r23 = r9;
                    r7 = r27[r7](r26, r25, r24, r23, r22);
                    r11 = _closure1_slot35;
                    r11 = r11.touchHistory;
                    r7['touchHistory'] = r11;
                    if(!(r0 !== r6)) { _fun3192_ip = 570; continue _fun3192 }
case 554:
                    r6 = _closure1_slot200;
                    r0 = _closure1_slot208;
                    r0 = r6.bind(r4)(r7, r0);
                    _fun3192_ip = 584; continue _fun3192;
case 570:
                    r6 = _closure1_slot200;
                    r0 = _closure1_slot207;
                    r0 = r6.bind(r4)(r7, r0);
case 584:
                    r16 = r7._dispatchListeners;
                    r12 = r7._dispatchInstances;
                    r0 = _closure1_slot2;
                    r0 = r0.bind(r4)(r16);
                    if(r0) { _fun3192_ip = 632; continue _fun3192 }
case 606:
                    r0 = r1;
                    if(!r16) { _fun3192_ip = 730; continue _fun3192 }
case 612:
                    r6 = r16.bind(r4)(r7, r12);
                    r0 = r1;
                    r11 = r12;
                    r1 = r0;
                    if(r6) { _fun3192_ip = 735; continue _fun3192 }
case 630:
                    _fun3192_ip = 730; continue _fun3192;
case 632:
                    r6 = r16.length;
                    r13 = 0;
                    r6 = r13 < r6;
                    r0 = 0;
                    if(!r6) { _fun3192_ip = 730; continue _fun3192 }
case 648:
                    r6 = r7.isPropagationStopped;
                    r6 = r6.bind(r7)();
                    r15 = 0;
                    r0 = 0;
                    if(r6) { _fun3192_ip = 730; continue _fun3192 }
case 665:
                    r13 = r16[r15];
                    r6 = r12[r15];
                    r13 = r13.bind(r16)(r7, r6);
                    r6 = r15;
                    if(r13) { _fun3192_ip = 721; continue _fun3192 }
case 685:
                    r17 = r6 + 1;
                    r13 = r16.length;
                    r0 = r17;
                    if(!(r0 < r13)) { _fun3192_ip = 730; continue _fun3192 }
case 700:
                    r13 = r7.isPropagationStopped;
                    r13 = r13.bind(r7)();
                    r15 = r17;
                    r0 = r15;
                    if(r13) { _fun3192_ip = 730; continue _fun3192 }
case 719:
                    _fun3192_ip = 665; continue _fun3192;
case 721:
                    r11 = r12[r6];
                    r1 = r6;
                    _fun3192_ip = 735; continue _fun3192;
case 730:
                    r1 = r0;
                    r11 = null;
case 735:
                    r7['_dispatchInstances'] = r3;
                    r7['_dispatchListeners'] = r3;
                    r0 = r7.isPersistent;
                    r0 = r0.bind(r7)();
                    if(r0) { _fun3192_ip = 776; continue _fun3192 }
case 760:
                    r6 = r7.constructor;
                    r0 = r6.release;
                    r0 = r0.bind(r6)(r7);
case 776:
                    r14 = r1;
                    r5 = null;
                    if(!r11) { _fun3192_ip = 1203; continue _fun3192 }
case 787:
                    r0 = _closure1_slot36;
                    r14 = r1;
                    r5 = null;
                    if(!(r11 !== r0)) { _fun3192_ip = 1203; continue _fun3192 }
case 803:
                    r7 = _closure1_slot31;
                    r6 = r7.getPooled;
                    r0 = _closure1_slot38;
                    r26 = r0.responderGrant;
                    r27 = r7;
                    r25 = r11;
                    r24 = r10;
                    r23 = r9;
                    r12 = r27[r6](r26, r25, r24, r23, r22);
                    r0 = _closure1_slot35;
                    r0 = r0.touchHistory;
                    r12['touchHistory'] = r0;
                    r6 = _closure1_slot200;
                    r0 = _closure1_slot206;
                    r0 = r6.bind(r4)(r12, r0);
                    r0 = _closure1_slot184;
                    r6 = r0.bind(r4)(r12);
                    r0 = true;
                    r7 = r0 === r6;
                    r0 = _closure1_slot36;
                    if(r0) { _fun3192_ip = 918; continue _fun3192 }
case 890:
                    r0 = _closure1_slot198;
                    r5 = r0.bind(r4)(r4, r12);
                    r6 = _closure1_slot201;
                    r6 = r6.bind(r4)(r11, r7);
                    r14 = r1;
                    _fun3192_ip = 1203; continue _fun3192;
case 918:
                    r13 = _closure1_slot31;
                    r6 = r13.getPooled;
                    r0 = _closure1_slot38;
                    r26 = r0.responderTerminationRequest;
                    r25 = _closure1_slot36;
                    r27 = r13;
                    r24 = r10;
                    r23 = r9;
                    r15 = r27[r6](r26, r25, r24, r23, r22);
                    r0 = _closure1_slot35;
                    r0 = r0.touchHistory;
                    r15['touchHistory'] = r0;
                    r1 = _closure1_slot200;
                    r0 = _closure1_slot206;
                    r0 = r1.bind(r4)(r15, r0);
                    r0 = r15._dispatchListeners;
                    r1 = !r0;
                    if(r1) { _fun3192_ip = 1004; continue _fun3192 }
case 995:
                    r0 = _closure1_slot184;
                    r1 = r0.bind(r4)(r15);
case 1004:
                    r0 = r15.isPersistent;
                    r0 = r0.bind(r15)();
                    if(r0) { _fun3192_ip = 1033; continue _fun3192 }
case 1017:
                    r6 = r15.constructor;
                    r0 = r6.release;
                    r0 = r0.bind(r6)(r15);
case 1033:
                    r13 = _closure1_slot31;
                    r6 = r13.getPooled;
                    r0 = _closure1_slot38;
                    if(r1) { _fun3192_ip = 1116; continue _fun3192 }
case 1050:
                    r26 = r0.responderReject;
                    r27 = r13;
                    r25 = r11;
                    r24 = r10;
                    r23 = r9;
                    r16 = r27[r6](r26, r25, r24, r23, r22);
                    r1 = _closure1_slot35;
                    r1 = r1.touchHistory;
                    r16['touchHistory'] = r1;
                    r17 = _closure1_slot200;
                    r1 = _closure1_slot206;
                    r1 = r17.bind(r4)(r16, r1);
                    r1 = _closure1_slot198;
                    r5 = r1.bind(r4)(r4, r16);
                    r14 = r15;
                    _fun3192_ip = 1203; continue _fun3192;
case 1116:
                    r26 = r0.responderTerminate;
                    r25 = _closure1_slot36;
                    r27 = r13;
                    r24 = r10;
                    r23 = r9;
                    r1 = r27[r6](r26, r25, r24, r23, r22);
                    r0 = _closure1_slot35;
                    r0 = r0.touchHistory;
                    r1['touchHistory'] = r0;
                    r6 = _closure1_slot200;
                    r0 = _closure1_slot206;
                    r0 = r6.bind(r4)(r1, r0);
                    r6 = _closure1_slot198;
                    r0 = new Array(2);
                    r0[0] = r12;
                    r0[1] = r1;
                    r5 = r6.bind(r4)(r4, r0);
                    r6 = _closure1_slot201;
                    r6 = r6.bind(r4)(r11, r7);
                    r14 = r1;
case 1203:
                    r6 = _closure1_slot36;
                    if(!r6) { _fun3192_ip = 1219; continue _fun3192 }
case 1210:
                    r0 = _closure1_slot191;
                    r6 = r0.bind(r4)(r8);
case 1219:
                    r1 = _closure1_slot36;
                    if(!r1) { _fun3192_ip = 1235; continue _fun3192 }
case 1226:
                    r0 = _closure1_slot192;
                    r1 = r0.bind(r4)(r8);
case 1235:
                    r0 = _closure1_slot36;
                    if(!r0) { _fun3192_ip = 1264; continue _fun3192 }
case 1242:
                    r7 = 'topTouchEnd';
                    r7 = r7 === r8;
                    if(r7) { _fun3192_ip = 1261; continue _fun3192 }
case 1253:
                    r11 = 'topTouchCancel';
                    r7 = r11 === r8;
case 1261:
                    r0 = r7;
case 1264:
                    if(r6) { _fun3192_ip = 1299; continue _fun3192 }
case 1267:
                    if(r1) { _fun3192_ip = 1287; continue _fun3192 }
case 1270:
                    r11 = null;
                    if(!r0) { _fun3192_ip = 1285; continue _fun3192 }
case 1275:
                    r0 = _closure1_slot38;
                    r11 = r0.responderEnd;
case 1285:
                    _fun3192_ip = 1297; continue _fun3192;
case 1287:
                    r0 = _closure1_slot38;
                    r11 = r0.responderMove;
case 1297:
                    _fun3192_ip = 1309; continue _fun3192;
case 1299:
                    r0 = _closure1_slot38;
                    r11 = r0.responderStart;
case 1309:
                    r6 = r5;
                    if(!r11) { _fun3192_ip = 1384; continue _fun3192 }
case 1315:
                    r7 = _closure1_slot31;
                    r1 = r7.getPooled;
                    r25 = _closure1_slot36;
                    r27 = r7;
                    r26 = r11;
                    r24 = r10;
                    r23 = r9;
                    r1 = r27[r1](r26, r25, r24, r23, r22);
                    r0 = _closure1_slot35;
                    r0 = r0.touchHistory;
                    r1['touchHistory'] = r0;
                    r7 = _closure1_slot200;
                    r0 = _closure1_slot206;
                    r0 = r7.bind(r4)(r1, r0);
                    r0 = _closure1_slot198;
                    r6 = r0.bind(r4)(r5, r1);
case 1384:
                    r1 = _closure1_slot36;
                    if(!r1) { _fun3192_ip = 1399; continue _fun3192 }
case 1391:
                    r0 = 'topTouchCancel';
                    r1 = r0 === r8;
case 1399:
                    r0 = _closure1_slot36;
                    if(!r0) { _fun3192_ip = 1409; continue _fun3192 }
case 1406:
                    r0 = !r1;
case 1409:
                    if(!r0) { _fun3192_ip = 1434; continue _fun3192 }
case 1412:
                    r5 = 'topTouchEnd';
                    r5 = r5 === r8;
                    if(r5) { _fun3192_ip = 1431; continue _fun3192 }
case 1423:
                    r7 = 'topTouchCancel';
                    r5 = r7 === r8;
case 1431:
                    r0 = r5;
case 1434:
                    if(!r0) { _fun3192_ip = 1625; continue _fun3192 }
case 1440:
                    r13 = r10.touches;
                    r0 = true;
                    if(!r13) { _fun3192_ip = 1625; continue _fun3192 }
case 1454:
                    r5 = r13.length;
                    r11 = 0;
                    r0 = true;
                    if(!(r11 !== r5)) { _fun3192_ip = 1625; continue _fun3192 }
case 1470:
                    r5 = r13.length;
                    r5 = r11 < r5;
                    r7 = 0;
                    r0 = true;
                    if(!r5) { _fun3192_ip = 1625; continue _fun3192 }
case 1489:
                    r5 = r13[r7];
                    r17 = r5.target;
                    r5 = r7;
                    r16 = r14;
                    r15 = r16;
                    if(!(r3 !== r17)) { _fun3192_ip = 1599; continue _fun3192 }
case 1512:
                    r15 = r16;
                    if(!(r4 !== r17)) { _fun3192_ip = 1599; continue _fun3192 }
case 1519:
                    r15 = r16;
                    if(!(r11 !== r17)) { _fun3192_ip = 1599; continue _fun3192 }
case 1526:
                    r16 = _closure1_slot29;
                    r19 = r16.bind(r4)(r17);
                    r20 = _closure1_slot36;
                    r18 = r19;
                    if(!r18) { _fun3192_ip = 1586; continue _fun3192 }
case 1545:
                    r22 = r19;
                    r16 = true;
                    r17 = r22;
                    if(!(r20 !== r22)) { _fun3192_ip = 1591; continue _fun3192 }
case 1557:
                    r21 = r22.alternate;
                    r16 = true;
                    r17 = r22;
                    if(!(r20 !== r21)) { _fun3192_ip = 1591; continue _fun3192 }
case 1571:
                    r21 = _closure1_slot202;
                    r19 = r21.bind(r4)(r22);
                    r18 = r19;
                    if(r18) { _fun3192_ip = 1545; continue _fun3192 }
case 1586:
                    r17 = r18;
                    r16 = false;
case 1591:
                    r15 = r17;
                    r0 = false;
                    if(r16) { _fun3192_ip = 1625; continue _fun3192 }
case 1599:
                    r16 = r5 + 1;
                    r5 = r13.length;
                    r5 = r16 < r5;
                    r14 = r15;
                    r7 = r16;
                    r0 = true;
                    if(r5) { _fun3192_ip = 1489; continue _fun3192 }
case 1625:
                    if(r1) { _fun3192_ip = 1645; continue _fun3192 }
case 1628:
                    r8 = null;
                    if(!r0) { _fun3192_ip = 1643; continue _fun3192 }
case 1633:
                    r0 = _closure1_slot38;
                    r8 = r0.responderRelease;
case 1643:
                    _fun3192_ip = 1655; continue _fun3192;
case 1645:
                    r0 = _closure1_slot38;
                    r8 = r0.responderTerminate;
case 1655:
                    r0 = r6;
                    if(!r8) { _fun3192_ip = 1739; continue _fun3192 }
case 1661:
                    r7 = _closure1_slot31;
                    r5 = r7.getPooled;
                    r25 = _closure1_slot36;
                    r27 = r7;
                    r26 = r8;
                    r24 = r10;
                    r23 = r9;
                    r5 = r27[r5](r26, r25, r24, r23, r22);
                    r1 = _closure1_slot35;
                    r1 = r1.touchHistory;
                    r5['touchHistory'] = r1;
                    r7 = _closure1_slot200;
                    r1 = _closure1_slot206;
                    r1 = r7.bind(r4)(r5, r1);
                    r1 = _closure1_slot198;
                    r0 = r1.bind(r4)(r6, r5);
                    r2 = _closure1_slot201;
                    r2 = r2.bind(r4)(r3);
case 1739:
                    return r0;
                }
            };
            r47['extractEvents'] = r13;
            r47['GlobalResponderHandler'] = r10;
            r13 = {};
            r45 = function(a0) { // Original name: injectGlobalResponderHandler, environment: r5
                r1 = _closure1_slot39;
                r0 = a0;
                r1['GlobalResponderHandler'] = r0;
                r0 = undefined;
                return r0;
            };
            r13['injectGlobalResponderHandler'] = r45;
            r47['injection'] = r13;
            var _closure1_slot39 = r47;
            var _closure1_slot40 = r10;
            r59 = {};
            var _closure1_slot41 = r59;
            r13 = new Array(0);
            var _closure1_slot42 = r13;
            r13 = {};
            var _closure1_slot43 = r13;
            r13 = {};
            var _closure1_slot44 = r13;
            r13 = 2;
            r45 = r18[r13];
            r45 = r17.bind(r2)(r45);
            r45 = r45.ReactNativeViewConfigRegistry;
            r45 = r45.customBubblingEventTypes;
            var _closure1_slot45 = r45;
            r45 = r18[r13];
            r45 = r17.bind(r2)(r45);
            r45 = r45.ReactNativeViewConfigRegistry;
            r45 = r45.customDirectEventTypes;
            var _closure1_slot46 = r45;
            r45 = r0.Array;
            r45 = r45.prototype;
            r50 = r45.slice;
            r49 = r50.call;
            r45 = ['ResponderEventPlugin', 'ReactNativeBridgeEventPlugin'];
            r45 = r49.bind(r50)(r45);
            _closure1_slot40 = r45;
            r45 = r48.bind(r2)();
            r58 = {};
            r58['ResponderEventPlugin'] = r47;
            r45 = {};
            r49 = {};
            r45['eventTypes'] = r49;
            r49 = function(a0, a1, a2, a3) { // Original name: extractEvents, environment: r5
                _fun3194: for(var _fun3194_ip = 0; ; ) switch(_fun3194_ip) {
case 0:
                    r5 = a0;
                    r9 = a1;
                    r0 = null;
                    if(!(r0 != r9)) { _fun3194_ip = 238; continue _fun3194 }
case 15:
                    r1 = _closure1_slot45;
                    r4 = r1[r5];
                    r1 = _closure1_slot46;
                    r3 = r1[r5];
                    if(r4) { _fun3194_ip = 73; continue _fun3194 }
case 37:
                    if(r3) { _fun3194_ip = 73; continue _fun3194 }
case 40:
                    r1 = global;
                    r6 = r1.Error;
                    r1 = 'Unsupported top level event type "';
                    r7 = r1 + r5;
                    r5 = undefined;
                    r1 = '" dispatched';
                    r1 = r7 + r1;
                    r1 = r6.bind(r5)(r1);
                    throw r1;
case 73:
                    r8 = _closure1_slot187;
                    r7 = r8.getPooled;
                    r6 = r4;
                    if(r6) { _fun3194_ip = 92; continue _fun3194 }
case 89:
                    r6 = r3;
case 92:
                    r11 = a2;
                    r10 = a3;
                    r14 = r8;
                    r13 = r6;
                    r12 = r9;
                    r1 = r14[r7](r13, r12, r11, r10, r9);
                    if(r4) { _fun3194_ip = 137; continue _fun3194 }
case 114:
                    if(r3) { _fun3194_ip = 119; continue _fun3194 }
case 117:
                    return r0;
case 119:
                    r5 = _closure1_slot200;
                    r4 = _closure1_slot214;
                    r3 = undefined;
                    r3 = r5.bind(r3)(r1, r4);
                    _fun3194_ip = 236; continue _fun3194;
case 137:
                    if(!(r0 != r1)) { _fun3194_ip = 174; continue _fun3194 }
case 141:
                    r3 = r1.dispatchConfig;
                    r3 = r3.phasedRegistrationNames;
                    if(!(r0 != r3)) { _fun3194_ip = 174; continue _fun3194 }
case 155:
                    r3 = r1.dispatchConfig;
                    r3 = r3.phasedRegistrationNames;
                    r3 = r3.skipBubbling;
                    if(r3) { _fun3194_ip = 192; continue _fun3194 }
case 174:
                    r5 = _closure1_slot200;
                    r4 = _closure1_slot213;
                    r3 = undefined;
                    r3 = r5.bind(r3)(r1, r4);
                    _fun3194_ip = 236; continue _fun3194;
case 192:
                    r3 = r1;
                    if(!r3) { _fun3194_ip = 208; continue _fun3194 }
case 198:
                    r4 = r1.dispatchConfig;
                    r3 = r4.phasedRegistrationNames;
case 208:
                    if(!r3) { _fun3194_ip = 236; continue _fun3194 }
case 211:
                    r6 = _closure1_slot212;
                    r13 = r1._targetInst;
                    r12 = _closure1_slot211;
                    r14 = undefined;
                    r10 = true;
                    r11 = r1;
                    r2 = r14[r6](r13, r12, r11, r10, r9);
case 236:
                    return r1;
case 238:
                    return r0;
                }
            };
            r45['extractEvents'] = r49;
            r58['ReactNativeBridgeEventPlugin'] = r45;
            r56 = r58;
            r45 = true;
            r51 = false;
            r50 = undefined;
            r49 = false;
            for(r53 in r56)
case 4569:
            {
                r62 = r51;
                r49 = r62;
case 4584:
                r52 = r53;
                r60 = r58.hasOwnProperty;
                r60 = r60.bind(r58)(r52);
                r51 = r62;
                if(!r60) { _fun2786_ip = 4569; continue _fun2786 }
case 4603:
                r60 = r58[r52];
                r61 = r59.hasOwnProperty;
                r61 = r61.bind(r59)(r52);
                if(!r61) { _fun2786_ip = 4634; continue _fun2786 }
case 4620:
                r61 = r59[r52];
                r51 = r62;
                r50 = r60;
                if(r61 === r60) { _fun2786_ip = 4569; continue _fun2786 }
case 4634:
                r61 = r59[r52];
                if(r61) { _fun2786_ip = 4652; continue _fun2786 }
case 4641:
                r59[r52] = r60;
                r51 = true;
                r50 = r60;
                _fun2786_ip = 4569; continue _fun2786;
case 4652:
                r51 = r0.Error;
                r50 = '`.';
                r52 = r52 + r50;
                r50 = 'EventPluginRegistry: Cannot inject two different event plugins using the same name, `';
                r50 = r50 + r52;
                r50 = r51.bind(r2)(r50);
                throw r50;
            }
case 4681:
            if(!r49) { _fun2786_ip = 4688; continue _fun2786 }
case 4684:
            r48 = r48.bind(r2)();
case 4688:
            r48 = r0.Map;
            r49 = r48.prototype;
            r49 = Object.create(r49, {constructor: {value: r48}});
            r65 = r49;
            r48 = new r65[r48](r64);
            r48 = r48 instanceof Object ? r48 : r49;
            var _closure1_slot47 = r48;
            r48 = r0.Map;
            r49 = r48.prototype;
            r49 = Object.create(r49, {constructor: {value: r48}});
            r65 = r49;
            r48 = new r65[r48](r64);
            r48 = r48 instanceof Object ? r48 : r49;
            var _closure1_slot48 = r48;
            var _closure1_slot49 = r20;
            var _closure1_slot50 = r10;
            r48 = {};
            var _closure1_slot51 = r48;
            r48 = r18[r13];
            r48 = r17.bind(r2)(r48);
            r50 = r48.RCTEventEmitter;
            r49 = r50.register;
            r48 = {};
            r51 = function(a0, a1, a2) { // Original name: receiveEvent, environment: r5
                r4 = _closure1_slot219;
                r0 = undefined;
                r3 = a0;
                r2 = a1;
                r1 = a2;
                r1 = r4.bind(r0)(r3, r2, r1);
                return r0;
            };
            r48['receiveEvent'] = r51;
            r51 = function(a0, a1, a2) { // Original name: receiveTouches, environment: r5
                _fun3196: for(var _fun3196_ip = 0; ; ) switch(_fun3196_ip) {
case 0:
                    r8 = a0;
                    r7 = a1;
                    r4 = a2;
                    r0 = 'topTouchEnd';
                    if(!(r0 !== r8)) { _fun3196_ip = 87; continue _fun3196 }
case 17:
                    r0 = 'topTouchCancel';
                    if(!(r0 !== r8)) { _fun3196_ip = 87; continue _fun3196 }
case 25:
                    r2 = new Array(0);
                    r0 = r4.length;
                    r1 = 0;
                    r0 = r1 < r0;
                    r6 = r2;
                    if(!r0) { _fun3196_ip = 215; continue _fun3196 }
case 49:
                    r3 = r2.push;
                    r0 = r4[r1];
                    r0 = r7[r0];
                    r0 = r3.bind(r2)(r0);
                    r1 = r1 + 1;
                    r0 = r4.length;
                    r6 = r2;
                    if(r1 < r0) { _fun3196_ip = 49; continue _fun3196 }
case 82:
                    _fun3196_ip = 215; continue _fun3196;
case 87:
                    r0 = new Array(0);
                    r2 = r4.length;
                    r1 = 0;
                    r2 = r1 < r2;
                    r5 = null;
                    r3 = 0;
                    if(!r2) { _fun3196_ip = 143; continue _fun3196 }
case 109:
                    r2 = r4[r3];
                    r10 = r0.push;
                    r9 = r7[r2];
                    r9 = r10.bind(r0)(r9);
                    r7[r2] = r5;
                    r3 = r3 + 1;
                    r2 = r4.length;
                    if(r3 < r2) { _fun3196_ip = 109; continue _fun3196 }
case 143:
                    r2 = r7.length;
                    r2 = r1 < r2;
                    r4 = 0;
                    r3 = 0;
                    r1 = 0;
                    if(!r2) { _fun3196_ip = 206; continue _fun3196 }
case 161:
                    r12 = r7[r3];
                    r9 = r4;
                    r2 = r3;
                    r10 = r9;
                    if(!(r5 !== r12)) { _fun3196_ip = 188; continue _fun3196 }
case 178:
                    r11 = parseFloat(r9);
                    r10 = r11 + 1;
                    r7[r11] = r12;
case 188:
                    r3 = r2 + 1;
                    r2 = r7.length;
                    r4 = r10;
                    r1 = r4;
                    if(r3 < r2) { _fun3196_ip = 161; continue _fun3196 }
case 206:
                    r7['length'] = r1;
                    r6 = r0;
case 215:
                    r0 = r6.length;
                    r5 = 0;
                    r1 = r5 < r0;
                    r0 = undefined;
                    r3 = null;
                    r2 = 1;
                    if(!r1) { _fun3196_ip = 313; continue _fun3196 }
case 239:
                    r11 = r6[r5];
                    r11['changedTouches'] = r6;
                    r11['touches'] = r7;
                    r9 = r11.target;
                    r12 = r3 === r9;
                    r1 = r5;
                    if(r12) { _fun3196_ip = 275; continue _fun3196 }
case 271:
                    r12 = r0 === r9;
case 275:
                    if(r12) { _fun3196_ip = 282; continue _fun3196 }
case 278:
                    r12 = r2 > r9;
case 282:
                    r10 = null;
                    if(r12) { _fun3196_ip = 290; continue _fun3196 }
case 287:
                    r10 = r9;
case 290:
                    r9 = _closure1_slot219;
                    r9 = r9.bind(r0)(r10, r8, r11);
                    r5 = r1 + 1;
                    r1 = r6.length;
                    if(r5 < r1) { _fun3196_ip = 239; continue _fun3196 }
case 313:
                    return r0;
                }
            };
            r48['receiveTouches'] = r51;
            r48 = r49.bind(r50)(r48);
            r48 = function(a0) { // Original name: getFiberCurrentPropsFromNode$1, environment: r5
                _fun3197: for(var _fun3197_ip = 0; ; ) switch(_fun3197_ip) {
case 0:
                    r2 = _closure1_slot48;
                    r1 = r2.get;
                    r0 = a0;
                    r0 = r0._nativeTag;
                    r0 = r1.bind(r2)(r0);
                    if(r0) { _fun3197_ip = 30; continue _fun3197 }
case 28:
                    r0 = null;
case 30:
                    return r0;
                }
            };
            _closure1_slot28 = r48;
            _closure1_slot29 = r14;
            r48 = function(a0) { // Original name: getNodeFromInstance, environment: r5
                _fun3198: for(var _fun3198_ip = 0; ; ) switch(_fun3198_ip) {
case 0:
                    r0 = a0;
                    r4 = r0.stateNode;
                    r1 = r4._nativeTag;
                    r3 = undefined;
                    r2 = r3 === r1;
                    if(!r2) { _fun3198_ip = 33; continue _fun3198 }
case 22:
                    r5 = r4.canonical;
                    r0 = null;
                    r2 = r0 != r5;
case 33:
                    r0 = r4;
                    if(!r2) { _fun3198_ip = 61; continue _fun3198 }
case 39:
                    r2 = r4.canonical;
                    r1 = r2.nativeTag;
                    r4 = r4.canonical;
                    r0 = r4.publicInstance;
case 61:
                    if(r1) { _fun3198_ip = 83; continue _fun3198 }
case 64:
                    r1 = global;
                    r2 = r1.Error;
                    r1 = 'All native instances should have a tag.';
                    r1 = r2.bind(r3)(r1);
                    throw r1;
case 83:
                    return r0;
                }
            };
            _closure1_slot30 = r48;
            r49 = r47.injection;
            r48 = r49.injectGlobalResponderHandler;
            r47 = {};
            r50 = function(a0, a1, a2) { // Original name: onChange, environment: r5
                _fun3199: for(var _fun3199_ip = 0; ; ) switch(_fun3199_ip) {
case 0:
                    r0 = a1;
                    r1 = null;
                    if(!(r1 === r0)) { _fun3199_ip = 52; continue _fun3199 }
case 9:
                    r3 = _closure1_slot0;
                    r2 = _closure1_slot1;
                    r1 = 2;
                    r2 = r2[r1];
                    r1 = undefined;
                    r1 = r3.bind(r1)(r2);
                    r2 = r1.UIManager;
                    r1 = r2.clearJSResponder;
                    r1 = r1.bind(r2)();
                    _fun3199_ip = 108; continue _fun3199;
case 52:
                    r3 = _closure1_slot0;
                    r2 = _closure1_slot1;
                    r1 = 2;
                    r2 = r2[r1];
                    r1 = undefined;
                    r1 = r3.bind(r1)(r2);
                    r3 = r1.UIManager;
                    r2 = r3.setJSResponder;
                    r0 = r0.stateNode;
                    r1 = r0._nativeTag;
                    r0 = a2;
                    r0 = r2.bind(r3)(r1, r0);
case 108:
                    r0 = undefined;
                    return r0;
                }
            };
            r47['onChange'] = r50;
            r47 = r48.bind(r49)(r47);
            r47 = {};
            var _closure1_slot52 = r47;
            var _closure1_slot53 = r10;
            var _closure1_slot54 = r19;
            r47 = {};
            r47['unsafelyIgnoreFunctions'] = r45;
            var _closure1_slot55 = r47;
            r47 = function() { // Environment: r5
                r0 = function(a0, a1) { // Original name: ReactNativeFiberHostComponent, environment: r1
                    r2 = this;
                    r0 = undefined;
                    r2['_internalFiberInstanceHandleDEV'] = r0;
                    r2['viewConfig'] = r0;
                    r1 = a0;
                    r2['_nativeTag'] = r1;
                    r1 = new Array(0);
                    r2['_children'] = r1;
                    r1 = a1;
                    r2['viewConfig'] = r1;
                    return r0;
                };
                r2 = r0.prototype;
                r3 = function() { // Environment: r1
                    r2 = _closure1_slot0;
                    r1 = _closure1_slot1;
                    r0 = 2;
                    r1 = r1[r0];
                    r0 = undefined;
                    r1 = r2.bind(r0)(r1);
                    r3 = r1.TextInputState;
                    r2 = r3.blurTextInput;
                    r1 = this;
                    r1 = r2.bind(r3)(r1);
                    return r0;
                };
                r2['blur'] = r3;
                r3 = function() { // Environment: r1
                    r2 = _closure1_slot0;
                    r1 = _closure1_slot1;
                    r0 = 2;
                    r1 = r1[r0];
                    r0 = undefined;
                    r1 = r2.bind(r0)(r1);
                    r3 = r1.TextInputState;
                    r2 = r3.focusTextInput;
                    r1 = this;
                    r1 = r2.bind(r3)(r1);
                    return r0;
                };
                r2['focus'] = r3;
                r3 = function(a0) { // Environment: r1
                    r6 = this;
                    r3 = _closure1_slot0;
                    r2 = _closure1_slot1;
                    r0 = 2;
                    r2 = r2[r0];
                    r0 = undefined;
                    r2 = r3.bind(r0)(r2);
                    r4 = r2.UIManager;
                    r3 = r4.measure;
                    r2 = r6._nativeTag;
                    r5 = _closure1_slot230;
                    r1 = a0;
                    r1 = r5.bind(r0)(r6, r1);
                    r1 = r3.bind(r4)(r2, r1);
                    return r0;
                };
                r2['measure'] = r3;
                r3 = function(a0) { // Environment: r1
                    r6 = this;
                    r3 = _closure1_slot0;
                    r2 = _closure1_slot1;
                    r0 = 2;
                    r2 = r2[r0];
                    r0 = undefined;
                    r2 = r3.bind(r0)(r2);
                    r4 = r2.UIManager;
                    r3 = r4.measureInWindow;
                    r2 = r6._nativeTag;
                    r5 = _closure1_slot230;
                    r1 = a0;
                    r1 = r5.bind(r0)(r6, r1);
                    r1 = r3.bind(r4)(r2, r1);
                    return r0;
                };
                r2['measureInWindow'] = r3;
                r3 = function(a0, a1, a2) { // Environment: r1
                    _fun3206: for(var _fun3206_ip = 0; ; ) switch(_fun3206_ip) {
case 0:
                        r0 = a0;
                        r8 = this;
                        r2 = 'number';
                        r1 = typeof r0;
                        r5 = r0;
                        if(!(r2 !== r1)) { _fun3206_ip = 35; continue _fun3206 }
case 20:
                        r1 = r0._nativeTag;
                        r5 = undefined;
                        if(!r1) { _fun3206_ip = 35; continue _fun3206 }
case 30:
                        r5 = r0._nativeTag;
case 35:
                        r0 = null;
                        if(!(r0 != r5)) { _fun3206_ip = 118; continue _fun3206 }
case 41:
                        r2 = _closure1_slot0;
                        r3 = _closure1_slot1;
                        r1 = 2;
                        r1 = r3[r1];
                        r7 = undefined;
                        r1 = r2.bind(r7)(r1);
                        r4 = r1.UIManager;
                        r3 = r4.measureLayout;
                        r2 = r8._nativeTag;
                        r6 = _closure1_slot230;
                        r0 = a2;
                        r10 = r6.bind(r7)(r8, r0);
                        r0 = a1;
                        r9 = r6.bind(r7)(r8, r0);
                        r13 = r4;
                        r12 = r2;
                        r11 = r5;
                        r0 = r13[r3](r12, r11, r10, r9, r8);
case 118:
                        r0 = undefined;
                        return r0;
                    }
                };
                r2['measureLayout'] = r3;
                r1 = function(a0) { // Environment: r1
                    _fun3207: for(var _fun3207_ip = 0; ; ) switch(_fun3207_ip) {
case 0:
                        r1 = this;
                        r7 = _closure1_slot229;
                        r10 = _closure1_slot52;
                        r0 = r1.viewConfig;
                        r8 = r0.validAttributes;
                        r0 = undefined;
                        r3 = null;
                        r9 = a0;
                        r12 = undefined;
                        r11 = null;
                        r5 = r12[r7](r11, r10, r9, r8, r7);
                        if(!(r3 != r5)) { _fun3207_ip = 99; continue _fun3207 }
case 44:
                        r3 = _closure1_slot0;
                        r4 = _closure1_slot1;
                        r2 = 2;
                        r2 = r4[r2];
                        r2 = r3.bind(r0)(r2);
                        r4 = r2.UIManager;
                        r3 = r4.updateView;
                        r2 = r1._nativeTag;
                        r1 = r1.viewConfig;
                        r1 = r1.uiViewClassName;
                        r1 = r3.bind(r4)(r2, r1, r5);
case 99:
                        return r0;
                    }
                };
                r2['setNativeProps'] = r1;
                return r0;
            };
            r47 = r47.bind(r2)();
            var _closure1_slot56 = r47;
            var _closure1_slot57 = r10;
            var _closure1_slot58 = r10;
            r47 = r0.Math;
            r47 = r47.clz32;
            if(!r47) { _fun2786_ip = 4934; continue _fun2786 }
case 4922:
            r47 = r0.Math;
            r12 = r47.clz32;
case 4934:
            var _closure1_slot59 = r12;
            r12 = r0.Math;
            r12 = r12.log;
            var _closure1_slot60 = r12;
            r12 = r0.Math;
            r12 = r12.LN2;
            var _closure1_slot61 = r12;
            r12 = 128;
            var _closure1_slot62 = r12;
            r12 = 4194304;
            var _closure1_slot63 = r12;
            r12 = {};
            r12['getInspectorDataForInstance'] = r7;
            r47 = function() { // Original name: getInspectorDataForViewTag, environment: r5
                r0 = global;
                r2 = r0.Error;
                r1 = undefined;
                r0 = 'getInspectorDataForViewTag() is not available in production';
                r0 = r2.bind(r1)(r0);
                throw r0;
            };
            r12['getInspectorDataForViewTag'] = r47;
            r47 = function() { // Original name: getInspectorDataForViewAtPoint, environment: r5
                r0 = global;
                r2 = r0.Error;
                r1 = undefined;
                r0 = 'getInspectorDataForViewAtPoint() is not available in production.';
                r0 = r2.bind(r1)(r0);
                throw r0;
            };
            r12['getInspectorDataForViewAtPoint'] = r47;
            r47 = r18[r13];
            r47 = r17.bind(r2)(r47);
            r47 = r47.ReactNativeViewConfigRegistry;
            r47 = r47.get;
            var _closure1_slot64 = r47;
            r47 = 3;
            var _closure1_slot65 = r47;
            r47 = r0.setTimeout;
            var _closure1_slot66 = r47;
            r47 = r0.clearTimeout;
            var _closure1_slot67 = r47;
            var _closure1_slot68 = r19;
            r47 = {'$$typeof': null, 'Provider': null, 'Consumer': null, '_currentValue': null, '_currentValue2': null, '_threadCount': 0};
            r47['$$typeof'] = r23;
            var _closure1_slot69 = r47;
            r47 = new Array(0);
            var _closure1_slot70 = r47;
            var _closure1_slot71 = r16;
            r16 = {};
            var _closure1_slot72 = r16;
            r16 = r0.Object;
            r47 = r16.is;
            r16 = 'function';
            r47 = typeof r47;
            if(!(r16 === r47)) { _fun2786_ip = 5141; continue _fun2786 }
case 5129:
            r47 = r0.Object;
            r46 = r47.is;
case 5141:
            var _closure1_slot73 = r46;
            r46 = r0.WeakMap;
            r47 = r46.prototype;
            r47 = Object.create(r47, {constructor: {value: r46}});
            r65 = r47;
            r46 = new r65[r46](r64);
            r46 = r46 instanceof Object ? r46 : r47;
            var _closure1_slot74 = r46;
            r46 = r21.bind(r2)(r10);
            var _closure1_slot75 = r46;
            r46 = r21.bind(r2)(r10);
            var _closure1_slot76 = r46;
            r46 = r21.bind(r2)(r10);
            var _closure1_slot77 = r46;
            r46 = r21.bind(r2)(r10);
            var _closure1_slot78 = r46;
            var _closure1_slot79 = r10;
            r46 = new Array(0);
            var _closure1_slot80 = r46;
            var _closure1_slot81 = r19;
            var _closure1_slot82 = r19;
            var _closure1_slot83 = r10;
            var _closure1_slot84 = r10;
            var _closure1_slot85 = r20;
            var _closure1_slot86 = r20;
            var _closure1_slot87 = r20;
            var _closure1_slot88 = r19;
            var _closure1_slot89 = r10;
            var _closure1_slot90 = r19;
            var _closure1_slot91 = r19;
            var _closure1_slot92 = r10;
            var _closure1_slot93 = r20;
            var _closure1_slot94 = r20;
            r46 = r0.Object;
            r46 = r46.prototype;
            r46 = r46.hasOwnProperty;
            var _closure1_slot95 = r46;
            r47 = r0.Error;
            r46 = "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`";
            r46 = r47.bind(r2)(r46);
            var _closure1_slot96 = r46;
            r47 = r0.Error;
            r46 = "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React.";
            r46 = r47.bind(r2)(r46);
            var _closure1_slot97 = r46;
            r46 = {};
            r47 = function() { // Original name: then, environment: r5
                r0 = undefined;
                return r0;
            };
            r46['then'] = r47;
            var _closure1_slot98 = r46;
            var _closure1_slot99 = r10;
            var _closure1_slot100 = r10;
            var _closure1_slot101 = r19;
            r45 = r42.bind(r2)(r45);
            var _closure1_slot102 = r45;
            r42 = r42.bind(r2)(r20);
            var _closure1_slot103 = r42;
            r42 = r21.bind(r2)(r10);
            var _closure1_slot104 = r42;
            r42 = r21.bind(r2)(r19);
            var _closure1_slot105 = r42;
            r42 = r21.bind(r2)(r10);
            var _closure1_slot106 = r42;
            var _closure1_slot107 = r10;
            r42 = r21.bind(r2)(r19);
            var _closure1_slot108 = r42;
            var _closure1_slot109 = r19;
            var _closure1_slot110 = r10;
            var _closure1_slot111 = r10;
            var _closure1_slot112 = r10;
            var _closure1_slot113 = r20;
            var _closure1_slot114 = r20;
            var _closure1_slot115 = r20;
            var _closure1_slot116 = r19;
            var _closure1_slot117 = r10;
            var _closure1_slot118 = r19;
            r42 = function() { // Original name: createFunctionComponentUpdateQueue, environment: r5
                r0 = {'lastEffect': null, 'events': null, 'stores': null, 'memoCache': null};
                return r0;
            };
            var _closure1_slot119 = r42;
            r42 = {};
            r42['readContext'] = r37;
            r42['use'] = r39;
            r42['useCallback'] = r44;
            r42['useContext'] = r44;
            r42['useEffect'] = r44;
            r42['useImperativeHandle'] = r44;
            r42['useLayoutEffect'] = r44;
            r42['useInsertionEffect'] = r44;
            r42['useMemo'] = r44;
            r42['useReducer'] = r44;
            r42['useRef'] = r44;
            r42['useState'] = r44;
            r42['useDebugValue'] = r44;
            r42['useDeferredValue'] = r44;
            r42['useTransition'] = r44;
            r42['useSyncExternalStore'] = r44;
            r42['useId'] = r44;
            var _closure1_slot120 = r42;
            r42['useCacheRefresh'] = r44;
            r42['useMemoCache'] = r44;
            r42['useHostTransitionStatus'] = r44;
            r42['useFormState'] = r44;
            r42['useActionState'] = r44;
            r42['useOptimistic'] = r44;
            r42 = {};
            r42['readContext'] = r37;
            r42['use'] = r39;
            r44 = function(a0, a1) { // Original name: useCallback, environment: r5
                _fun3212: for(var _fun3212_ip = 0; ; ) switch(_fun3212_ip) {
case 0:
                    r0 = a0;
                    r4 = a1;
                    r1 = _closure1_slot309;
                    r5 = undefined;
                    r2 = r1.bind(r5)();
                    r1 = new Array(2);
                    r1[0] = r0;
                    r3 = null;
                    if(!(r5 !== r4)) { _fun3212_ip = 37; continue _fun3212 }
case 34:
                    r3 = r4;
case 37:
                    r1[1] = r3;
                    r2['memoizedState'] = r1;
                    return r0;
                }
            };
            r42['useCallback'] = r44;
            r42['useContext'] = r37;
            r42['useEffect'] = r43;
            r43 = function(a0, a1, a2) { // Original name: useImperativeHandle, environment: r5
                _fun3213: for(var _fun3213_ip = 0; ; ) switch(_fun3213_ip) {
case 0:
                    r6 = a0;
                    r2 = a2;
                    r3 = null;
                    r5 = null;
                    if(!(r3 !== r2)) { _fun3213_ip = 40; continue _fun3213 }
case 14:
                    r0 = undefined;
                    r5 = null;
                    if(!(r0 !== r2)) { _fun3213_ip = 40; continue _fun3213 }
case 22:
                    r1 = r2.concat;
                    r0 = new Array(1);
                    r0[0] = r6;
                    r5 = r1.bind(r2)(r0);
case 40:
                    r4 = _closure1_slot333;
                    r2 = _closure1_slot337;
                    r1 = r2.bind;
                    r0 = a1;
                    r8 = r1.bind(r2)(r3, r0, r6);
                    r0 = undefined;
                    r10 = 4194308;
                    r9 = 4;
                    r11 = undefined;
                    r7 = r5;
                    r1 = r11[r4](r10, r9, r8, r7, r6);
                    return r0;
                }
            };
            r42['useImperativeHandle'] = r43;
            r43 = function(a0, a1) { // Original name: useLayoutEffect, environment: r5
                r5 = _closure1_slot333;
                r0 = undefined;
                r9 = 4194308;
                r8 = 4;
                r7 = a0;
                r6 = a1;
                r10 = undefined;
                r1 = r10[r5](r9, r8, r7, r6, r5);
                return r0;
            };
            r42['useLayoutEffect'] = r43;
            r43 = function(a0, a1) { // Original name: useInsertionEffect, environment: r5
                r5 = _closure1_slot333;
                r0 = undefined;
                r9 = 4;
                r8 = 2;
                r7 = a0;
                r6 = a1;
                r10 = undefined;
                r1 = r10[r5](r9, r8, r7, r6, r5);
                return r0;
            };
            r42['useInsertionEffect'] = r43;
            r43 = function(a0, a1) { // Original name: useMemo, environment: r5
                _fun3216: for(var _fun3216_ip = 0; ; ) switch(_fun3216_ip) {
case 0:
                    r0 = a1;
                    r2 = a0;
                    r4 = _closure1_slot309;
                    r3 = undefined;
                    r4 = r4.bind(r3)();
                    r5 = null;
                    if(!(r3 !== r0)) { _fun3216_ip = 29; continue _fun3216 }
case 26:
                    r5 = r0;
case 29:
                    r0 = r2;
                    r0 = r0.bind(r3)();
                    r6 = _closure1_slot115;
                    if(!r6) { _fun3216_ip = 69; continue _fun3216 }
case 43:
                    r7 = _closure1_slot232;
                    r6 = true;
                    r6 = r7.bind(r3)(r6);
case 54: // try_start_0
                    r2 = r2.bind(r3)();
case 58: // try_end0
                    r6 = _closure1_slot232;
                    r2 = false;
                    r2 = r6.bind(r3)(r2);
case 69:
                    r2 = new Array(2);
                    r2[0] = r0;
                    r2[1] = r5;
                    r4['memoizedState'] = r2;
                    return r0;
case 89: // catch_target0
                    CatchBlockStart(arg_register=0);
                    r2 = _closure1_slot232;
                    r1 = false;
                    r1 = r2.bind(r3)(r1);
                    throw r0;
                }
            };
            r42['useMemo'] = r43;
            r43 = function(a0, a1, a2) { // Original name: useReducer, environment: r5
                _fun3217: for(var _fun3217_ip = 0; ; ) switch(_fun3217_ip) {
case 0:
                    r2 = a2;
                    r5 = a1;
                    r6 = r2;
                    r0 = _closure1_slot309;
                    r3 = undefined;
                    r0 = r0.bind(r3)();
                    if(!(r3 === r2)) { _fun3217_ip = 32; continue _fun3217 }
case 27:
                    r2 = r5;
                    _fun3217_ip = 83; continue _fun3217;
case 32:
                    r7 = r6;
                    r4 = r5;
                    r4 = r7.bind(r3)(r4);
                    r7 = _closure1_slot115;
                    r2 = r4;
                    if(!r7) { _fun3217_ip = 83; continue _fun3217 }
case 53:
                    r8 = _closure1_slot232;
                    r7 = true;
                    r7 = r8.bind(r3)(r7);
case 64: // try_start_0
                    r5 = r6.bind(r3)(r5);
case 69: // try_end0
                    r6 = _closure1_slot232;
                    r5 = false;
                    r5 = r6.bind(r3)(r5);
                    r2 = r4;
case 83:
                    r0['baseState'] = r2;
                    r0['memoizedState'] = r2;
                    r4 = {'pending': null, 'lanes': 0, 'dispatch': null};
                    r7 = null;
                    r5 = a0;
                    r4['lastRenderedReducer'] = r5;
                    r4['lastRenderedState'] = r2;
                    r0['queue'] = r4;
                    r6 = _closure1_slot342;
                    r5 = r6.bind;
                    r2 = _closure1_slot110;
                    r2 = r5.bind(r6)(r7, r2, r4);
                    r4['dispatch'] = r2;
                    r4 = r0.memoizedState;
                    r0 = new Array(2);
                    r0[0] = r4;
                    r0[1] = r2;
                    return r0;
case 172: // catch_target0
                    CatchBlockStart(arg_register=0);
                    r2 = _closure1_slot232;
                    r1 = false;
                    r1 = r2.bind(r3)(r1);
                    throw r0;
                }
            };
            r42['useReducer'] = r43;
            r43 = function(a0) { // Original name: useRef, environment: r5
                r1 = _closure1_slot309;
                r0 = undefined;
                r1 = r1.bind(r0)();
                r0 = {};
                r2 = a0;
                r0['current'] = r2;
                r1['memoizedState'] = r0;
                return r0;
            };
            r42['useRef'] = r43;
            r43 = function(a0) { // Original name: useState, environment: r5
                r3 = _closure1_slot321;
                r2 = undefined;
                r0 = a0;
                r0 = r3.bind(r2)(r0);
                r2 = r0.queue;
                r5 = _closure1_slot343;
                r4 = r5.bind;
                r3 = _closure1_slot110;
                r1 = null;
                r1 = r4.bind(r5)(r1, r3, r2);
                r2['dispatch'] = r1;
                r2 = r0.memoizedState;
                r0 = new Array(2);
                r0[0] = r2;
                r0[1] = r1;
                return r0;
            };
            r42['useState'] = r43;
            r42['useDebugValue'] = r29;
            r43 = function(a0, a1) { // Original name: useDeferredValue, environment: r5
                r1 = _closure1_slot309;
                r4 = undefined;
                r3 = r1.bind(r4)();
                r2 = _closure1_slot338;
                r1 = a0;
                r0 = a1;
                r0 = r2.bind(r4)(r3, r1, r0);
                return r0;
            };
            r42['useDeferredValue'] = r43;
            r43 = function() { // Original name: useTransition, environment: r5
                r1 = _closure1_slot321;
                r2 = undefined;
                r8 = false;
                r1 = r1.bind(r2)(r8);
                r7 = _closure1_slot340;
                r6 = r7.bind;
                r12 = _closure1_slot110;
                r11 = r1.queue;
                r13 = null;
                r10 = true;
                r14 = r7;
                r9 = false;
                r1 = r14[r6](r13, r12, r11, r10, r9, r8);
                r0 = _closure1_slot309;
                r0 = r0.bind(r2)();
                r0['memoizedState'] = r1;
                r0 = [false];
                r0[1] = r1;
                return r0;
            };
            r42['useTransition'] = r43;
            r43 = function(a0, a1) { // Original name: useSyncExternalStore, environment: r5
                _fun3222: for(var _fun3222_ip = 0; ; ) switch(_fun3222_ip) {
case 0:
                    r10 = a0;
                    r8 = a1;
                    r7 = _closure1_slot110;
                    r0 = _closure1_slot309;
                    r2 = undefined;
                    r3 = r0.bind(r2)();
                    r0 = r8.bind(r2)();
                    r4 = _closure1_slot147;
                    r6 = null;
                    if(!(r6 !== r4)) { _fun3222_ip = 220; continue _fun3222 }
case 41:
                    r5 = _closure1_slot149;
                    r4 = 60;
                    r5 = r5 & r4;
                    r4 = 0;
                    if(!(r4 === r5)) { _fun3222_ip = 70; continue _fun3222 }
case 58:
                    r4 = _closure1_slot316;
                    r4 = r4.bind(r2)(r7, r8, r0);
case 70:
                    r3['memoizedState'] = r0;
                    r4 = {};
                    r4['value'] = r0;
                    r4['getSnapshot'] = r8;
                    r3['queue'] = r4;
                    r9 = _closure1_slot335;
                    r5 = _closure1_slot318;
                    r3 = r5.bind;
                    r16 = r5;
                    r15 = null;
                    r14 = r7;
                    r13 = r4;
                    r12 = r10;
                    r5 = r16[r3](r15, r14, r13, r12, r11);
                    r3 = new Array(1);
                    r3[0] = r10;
                    r3 = r9.bind(r2)(r5, r3);
                    r5 = r7.flags;
                    r3 = 2048;
                    r3 = r5 | r3;
                    r7['flags'] = r3;
                    r5 = _closure1_slot332;
                    r3 = _closure1_slot317;
                    r1 = r3.bind;
                    r16 = r3;
                    r15 = null;
                    r14 = r7;
                    r13 = r4;
                    r12 = r0;
                    r11 = r8;
                    r14 = r16[r1](r15, r14, r13, r12, r11, r10);
                    r3 = {};
                    r3['destroy'] = r2;
                    r15 = 9;
                    r16 = undefined;
                    r13 = r3;
                    r12 = null;
                    r1 = r16[r5](r15, r14, r13, r12, r11);
                    return r0;
case 220:
                    r0 = global;
                    r1 = r0.Error;
                    r0 = 'Expected a work-in-progress root. This is a bug in React. Please file an issue.';
                    r0 = r1.bind(r2)(r0);
                    throw r0;
                }
            };
            r42['useSyncExternalStore'] = r43;
            r43 = function() { // Original name: useId, environment: r5
                r1 = _closure1_slot309;
                r0 = undefined;
                r1 = r1.bind(r0)();
                r0 = _closure1_slot147;
                r0 = r0.identifierPrefix;
                r2 = _closure1_slot118;
                r5 = parseFloat(r2);
                r2 = r5 + 1;
                _closure1_slot118 = r2;
                r2 = ':';
                r4 = r2 + r0;
                r3 = r5.toString;
                r0 = 32;
                r3 = r3.bind(r5)(r0);
                r0 = 'r';
                r0 = r4 + r0;
                r0 = r0 + r3;
                r0 = r0 + r2;
                r1['memoizedState'] = r0;
                return r0;
            };
            r42['useId'] = r43;
            r43 = function() { // Original name: useCacheRefresh, environment: r5
                r2 = _closure1_slot309;
                r1 = undefined;
                r1 = r2.bind(r1)();
                r4 = _closure1_slot341;
                r3 = r4.bind;
                r2 = _closure1_slot110;
                r0 = null;
                r0 = r3.bind(r4)(r0, r2);
                r1['memoizedState'] = r0;
                return r0;
            };
            r42['useCacheRefresh'] = r43;
            var _closure1_slot121 = r42;
            r42['useMemoCache'] = r25;
            r42['useHostTransitionStatus'] = r24;
            r42['useFormState'] = r40;
            r42['useActionState'] = r40;
            r40 = function(a0) { // Environment: r5
                r2 = a0;
                r3 = _closure1_slot309;
                r0 = undefined;
                r3 = r3.bind(r0)();
                r3['baseState'] = r2;
                r3['memoizedState'] = r2;
                r0 = {'pending': null, 'lanes': 0, 'dispatch': null, 'lastRenderedReducer': null, 'lastRenderedState': null};
                r10 = null;
                r3['queue'] = r0;
                r5 = _closure1_slot345;
                r4 = r5.bind;
                r9 = _closure1_slot110;
                r8 = true;
                r11 = r5;
                r7 = r0;
                r1 = r11[r4](r10, r9, r8, r7, r6);
                r0['dispatch'] = r1;
                r0 = new Array(2);
                r0[0] = r2;
                r0[1] = r1;
                return r0;
            };
            r42['useOptimistic'] = r40;
            r40 = {};
            r40['readContext'] = r37;
            r40['use'] = r39;
            r40['useCallback'] = r38;
            r40['useContext'] = r37;
            r40['useEffect'] = r36;
            r40['useImperativeHandle'] = r35;
            r40['useInsertionEffect'] = r34;
            r40['useLayoutEffect'] = r33;
            r40['useMemo'] = r32;
            r40['useReducer'] = r41;
            r40['useRef'] = r30;
            r41 = function() { // Original name: useState, environment: r5
                r2 = _closure1_slot313;
                r1 = _closure1_slot312;
                r0 = undefined;
                r0 = r2.bind(r0)(r1);
                return r0;
            };
            r40['useState'] = r41;
            r40['useDebugValue'] = r29;
            r41 = function(a0, a1) { // Original name: useDeferredValue, environment: r5
                r1 = _closure1_slot310;
                r5 = undefined;
                r9 = r1.bind(r5)();
                r3 = _closure1_slot339;
                r0 = _closure1_slot111;
                r8 = r0.memoizedState;
                r7 = a0;
                r6 = a1;
                r10 = undefined;
                r0 = r10[r3](r9, r8, r7, r6, r5);
                return r0;
            };
            r40['useDeferredValue'] = r41;
            r41 = function() { // Original name: useTransition, environment: r5
                _fun3228: for(var _fun3228_ip = 0; ; ) switch(_fun3228_ip) {
case 0:
                    r2 = _closure1_slot313;
                    r1 = _closure1_slot312;
                    r4 = undefined;
                    r2 = r2.bind(r4)(r1);
                    r1 = 0;
                    r3 = r2[r1];
                    r1 = _closure1_slot310;
                    r1 = r1.bind(r4)();
                    r1 = r1.memoizedState;
                    r6 = 'boolean';
                    r5 = typeof r3;
                    r2 = r3;
                    if(!(r6 !== r5)) { _fun3228_ip = 64; continue _fun3228 }
case 54:
                    r0 = _closure1_slot311;
                    r2 = r0.bind(r4)(r3);
case 64:
                    r0 = new Array(2);
                    r0[0] = r2;
                    r0[1] = r1;
                    return r0;
                }
            };
            r40['useTransition'] = r41;
            r40['useSyncExternalStore'] = r28;
            r40['useId'] = r27;
            var _closure1_slot122 = r40;
            r40['useCacheRefresh'] = r26;
            r40['useMemoCache'] = r25;
            r40['useHostTransitionStatus'] = r24;
            r40['useFormState'] = r22;
            r40['useActionState'] = r22;
            r22 = function(a0, a1) { // Environment: r5
                r1 = _closure1_slot310;
                r4 = undefined;
                r8 = r1.bind(r4)();
                r2 = _closure1_slot322;
                r6 = a0;
                r5 = a1;
                r9 = undefined;
                r7 = undefined;
                r0 = r9[r2](r8, r7, r6, r5, r4);
                return r0;
            };
            r40['useOptimistic'] = r22;
            r22 = {};
            r22['readContext'] = r37;
            r22['use'] = r39;
            r22['useCallback'] = r38;
            r22['useContext'] = r37;
            r22['useEffect'] = r36;
            r22['useImperativeHandle'] = r35;
            r22['useInsertionEffect'] = r34;
            r22['useLayoutEffect'] = r33;
            r22['useMemo'] = r32;
            r22['useReducer'] = r31;
            r22['useRef'] = r30;
            r30 = function() { // Original name: useState, environment: r5
                r2 = _closure1_slot315;
                r1 = _closure1_slot312;
                r0 = undefined;
                r0 = r2.bind(r0)(r1);
                return r0;
            };
            r22['useState'] = r30;
            r22['useDebugValue'] = r29;
            r29 = function(a0, a1) { // Original name: useDeferredValue, environment: r5
                _fun3231: for(var _fun3231_ip = 0; ; ) switch(_fun3231_ip) {
case 0:
                    r5 = a0;
                    r4 = a1;
                    r0 = _closure1_slot310;
                    r3 = undefined;
                    r2 = r0.bind(r3)();
                    r6 = _closure1_slot111;
                    r0 = null;
                    if(!(r0 !== r6)) { _fun3231_ip = 61; continue _fun3231 }
case 30:
                    r6 = _closure1_slot339;
                    r0 = _closure1_slot111;
                    r9 = r0.memoizedState;
                    r11 = undefined;
                    r10 = r2;
                    r8 = r5;
                    r7 = r4;
                    r0 = r11[r6](r10, r9, r8, r7, r6);
                    _fun3231_ip = 73; continue _fun3231;
case 61:
                    r1 = _closure1_slot338;
                    r0 = r1.bind(r3)(r2, r5, r4);
case 73:
                    return r0;
                }
            };
            r22['useDeferredValue'] = r29;
            r29 = function() { // Original name: useTransition, environment: r5
                _fun3232: for(var _fun3232_ip = 0; ; ) switch(_fun3232_ip) {
case 0:
                    r2 = _closure1_slot315;
                    r1 = _closure1_slot312;
                    r4 = undefined;
                    r2 = r2.bind(r4)(r1);
                    r1 = 0;
                    r3 = r2[r1];
                    r1 = _closure1_slot310;
                    r1 = r1.bind(r4)();
                    r1 = r1.memoizedState;
                    r6 = 'boolean';
                    r5 = typeof r3;
                    r2 = r3;
                    if(!(r6 !== r5)) { _fun3232_ip = 64; continue _fun3232 }
case 54:
                    r0 = _closure1_slot311;
                    r2 = r0.bind(r4)(r3);
case 64:
                    r0 = new Array(2);
                    r0[0] = r2;
                    r0[1] = r1;
                    return r0;
                }
            };
            r22['useTransition'] = r29;
            r22['useSyncExternalStore'] = r28;
            r22['useId'] = r27;
            var _closure1_slot123 = r22;
            r22['useCacheRefresh'] = r26;
            r22['useMemoCache'] = r25;
            r22['useHostTransitionStatus'] = r24;
            r22['useFormState'] = r11;
            r22['useActionState'] = r11;
            r11 = function(a0, a1) { // Environment: r5
                _fun3233: for(var _fun3233_ip = 0; ; ) switch(_fun3233_ip) {
case 0:
                    r4 = a0;
                    r1 = _closure1_slot310;
                    r3 = undefined;
                    r2 = r1.bind(r3)();
                    r5 = _closure1_slot111;
                    r1 = null;
                    if(!(r1 === r5)) { _fun3233_ip = 57; continue _fun3233 }
case 27:
                    r2['baseState'] = r4;
                    r1 = new Array(2);
                    r1[0] = r4;
                    r5 = r2.queue;
                    r5 = r5.dispatch;
                    r1[1] = r5;
                    return r1;
case 57:
                    r1 = _closure1_slot322;
                    r6 = a1;
                    r10 = undefined;
                    r9 = r2;
                    r8 = undefined;
                    r7 = r4;
                    r0 = r10[r1](r9, r8, r7, r6, r5);
                    return r0;
                }
            };
            r22['useOptimistic'] = r11;
            r11 = {};
            r22 = function(a0) { // Original name: isMounted, environment: r5
                _fun3234: for(var _fun3234_ip = 0; ; ) switch(_fun3234_ip) {
case 0:
                    r0 = a0;
                    r2 = r0._reactInternals;
                    r0 = false;
                    if(!r2) { _fun3234_ip = 32; continue _fun3234 }
case 14:
                    r3 = _closure1_slot220;
                    r1 = undefined;
                    r1 = r3.bind(r1)(r2);
                    r0 = r1 === r2;
case 32:
                    return r0;
                }
            };
            r11['isMounted'] = r22;
            r22 = function(a0, a1, a2) { // Original name: enqueueSetState, environment: r5
                _fun3235: for(var _fun3235_ip = 0; ; ) switch(_fun3235_ip) {
case 0:
                    r2 = a2;
                    r0 = a0;
                    r4 = r0._reactInternals;
                    r3 = _closure1_slot443;
                    r0 = undefined;
                    r3 = r3.bind(r0)(r4);
                    r5 = _closure1_slot276;
                    r5 = r5.bind(r0)(r3);
                    r6 = a1;
                    r5['payload'] = r6;
                    r6 = r0 !== r2;
                    if(!r6) { _fun3235_ip = 59; continue _fun3235 }
case 53:
                    r7 = null;
                    r6 = r7 !== r2;
case 59:
                    if(!r6) { _fun3235_ip = 68; continue _fun3235 }
case 62:
                    r5['callback'] = r2;
case 68:
                    r2 = _closure1_slot277;
                    r2 = r2.bind(r0)(r4, r5, r3);
                    r5 = null;
                    if(!(r5 !== r2)) { _fun3235_ip = 110; continue _fun3235 }
case 86:
                    r5 = _closure1_slot445;
                    r5 = r5.bind(r0)(r2, r4, r3);
                    r1 = _closure1_slot278;
                    r1 = r1.bind(r0)(r2, r4, r3);
case 110:
                    return r0;
                }
            };
            r11['enqueueSetState'] = r22;
            r22 = function(a0, a1, a2) { // Original name: enqueueReplaceState, environment: r5
                _fun3236: for(var _fun3236_ip = 0; ; ) switch(_fun3236_ip) {
case 0:
                    r2 = a2;
                    r0 = a0;
                    r4 = r0._reactInternals;
                    r3 = _closure1_slot443;
                    r0 = undefined;
                    r3 = r3.bind(r0)(r4);
                    r5 = _closure1_slot276;
                    r5 = r5.bind(r0)(r3);
                    r6 = 1;
                    r5['tag'] = r6;
                    r6 = a1;
                    r5['payload'] = r6;
                    r6 = r0 !== r2;
                    if(!r6) { _fun3236_ip = 68; continue _fun3236 }
case 62:
                    r7 = null;
                    r6 = r7 !== r2;
case 68:
                    if(!r6) { _fun3236_ip = 77; continue _fun3236 }
case 71:
                    r5['callback'] = r2;
case 77:
                    r2 = _closure1_slot277;
                    r2 = r2.bind(r0)(r4, r5, r3);
                    r5 = null;
                    if(!(r5 !== r2)) { _fun3236_ip = 119; continue _fun3236 }
case 95:
                    r5 = _closure1_slot445;
                    r5 = r5.bind(r0)(r2, r4, r3);
                    r1 = _closure1_slot278;
                    r1 = r1.bind(r0)(r2, r4, r3);
case 119:
                    return r0;
                }
            };
            r11['enqueueReplaceState'] = r22;
            r22 = function(a0, a1) { // Original name: enqueueForceUpdate, environment: r5
                _fun3237: for(var _fun3237_ip = 0; ; ) switch(_fun3237_ip) {
case 0:
                    r2 = a1;
                    r0 = a0;
                    r4 = r0._reactInternals;
                    r3 = _closure1_slot443;
                    r0 = undefined;
                    r3 = r3.bind(r0)(r4);
                    r5 = _closure1_slot276;
                    r5 = r5.bind(r0)(r3);
                    r6 = 2;
                    r5['tag'] = r6;
                    r6 = r0 !== r2;
                    if(!r6) { _fun3237_ip = 59; continue _fun3237 }
case 53:
                    r7 = null;
                    r6 = r7 !== r2;
case 59:
                    if(!r6) { _fun3237_ip = 68; continue _fun3237 }
case 62:
                    r5['callback'] = r2;
case 68:
                    r2 = _closure1_slot277;
                    r2 = r2.bind(r0)(r4, r5, r3);
                    r5 = null;
                    if(!(r5 !== r2)) { _fun3237_ip = 110; continue _fun3237 }
case 86:
                    r5 = _closure1_slot445;
                    r5 = r5.bind(r0)(r2, r4, r3);
                    r1 = _closure1_slot278;
                    r1 = r1.bind(r0)(r2, r4, r3);
case 110:
                    return r0;
                }
            };
            r11['enqueueForceUpdate'] = r22;
            var _closure1_slot124 = r11;
            r11 = r0.reportError;
            r11 = typeof r11;
            if(!(r16 !== r11)) { _fun2786_ip = 6134; continue _fun2786 }
case 6127:
            r11 = function(a0) { // Environment: r5
                _fun3238: for(var _fun3238_ip = 0; ; ) switch(_fun3238_ip) {
case 0:
                    r2 = a0;
                    r0 = global;
                    r1 = r0.window;
                    r3 = 'object';
                    r1 = typeof r1;
                    if(!(r3 === r1)) { _fun3238_ip = 44; continue _fun3238 }
case 21:
                    r1 = r0.window;
                    r1 = r1.ErrorEvent;
                    r4 = 'function';
                    r1 = typeof r1;
                    if(!(r4 !== r1)) { _fun3238_ip = 109; continue _fun3238 }
case 44:
                    r1 = r0.process;
                    r1 = typeof r1;
                    if(!(r3 === r1)) { _fun3238_ip = 251; continue _fun3238 }
case 59:
                    r1 = r0.process;
                    r1 = r1.emit;
                    r4 = 'function';
                    r1 = typeof r1;
                    if(!(r4 === r1)) { _fun3238_ip = 251; continue _fun3238 }
case 84:
                    r5 = r0.process;
                    r4 = r5.emit;
                    r1 = 'uncaughtException';
                    r1 = r4.bind(r5)(r1, r2);
                    r1 = undefined;
                    return r1;
case 109:
                    r1 = r0.window;
                    r5 = r1.ErrorEvent;
                    r4 = {'bubbles': true, 'cancelable': true};
                    r1 = typeof r2;
                    if(!(r3 === r1)) { _fun3238_ip = 160; continue _fun3238 }
case 138:
                    r1 = null;
                    if(!(r1 !== r2)) { _fun3238_ip = 160; continue _fun3238 }
case 144:
                    r1 = r2.message;
                    r3 = 'string';
                    r1 = typeof r1;
                    if(!(r3 !== r1)) { _fun3238_ip = 175; continue _fun3238 }
case 160:
                    r3 = r0.String;
                    r1 = undefined;
                    r1 = r3.bind(r1)(r2);
                    _fun3238_ip = 193; continue _fun3238;
case 175:
                    r7 = r0.String;
                    r6 = r2.message;
                    r3 = undefined;
                    r1 = r7.bind(r3)(r6);
case 193:
                    r4['message'] = r1;
                    r4['error'] = r2;
                    r1 = r5.prototype;
                    r3 = Object.create(r1, {constructor: {value: r5}});
                    r9 = 'error';
                    r10 = r3;
                    r8 = r4;
                    r1 = new r10[r5](r9, r8, r7);
                    r4 = r1 instanceof Object ? r1 : r3;
                    r3 = r0.window;
                    r1 = r3.dispatchEvent;
                    r1 = r1.bind(r3)(r4);
                    if(r1) { _fun3238_ip = 251; continue _fun3238 }
case 247:
                    r1 = undefined;
                    return r1;
case 251:
                    r1 = r0.console;
                    r0 = r1.error;
                    r0 = r0.bind(r1)(r2);
                    r0 = undefined;
                    return r0;
                }
            };
            _fun2786_ip = 6140; continue _fun2786;
case 6134:
            r11 = r0.reportError;
case 6140:
            var _closure1_slot125 = r11;
            r22 = r0.Error;
            r11 = "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue.";
            r11 = r22.bind(r2)(r11);
            var _closure1_slot126 = r11;
            var _closure1_slot127 = r20;
            r11 = {'dehydrated': null, 'treeContext': null, 'retryLane': 0};
            var _closure1_slot128 = r11;
            r11 = r21.bind(r2)(r10);
            var _closure1_slot129 = r11;
            var _closure1_slot130 = r10;
            var _closure1_slot131 = r10;
            r22 = r0.AbortController;
            r11 = 'undefined';
            r22 = typeof r22;
            if(!(r11 === r22)) { _fun2786_ip = 6222; continue _fun2786 }
case 6215:
            r22 = function() { // Environment: r5
                r1 = this;
                r2 = new Array(0);
                var _closure2_slot0 = r2;
                r2 = {};
                r3 = false;
                r2['aborted'] = r3;
                r3 = function(a0, a1) { // Original name: addEventListener, environment: r0
                    r2 = _closure2_slot0;
                    r1 = r2.push;
                    r0 = a1;
                    r0 = r1.bind(r2)(r0);
                    r0 = undefined;
                    return r0;
                };
                r2['addEventListener'] = r3;
                r1['signal'] = r2;
                var _closure2_slot1 = r2;
                r0 = function() { // Environment: r0
                    r2 = _closure2_slot1;
                    r1 = true;
                    r2['aborted'] = r1;
                    r2 = _closure2_slot0;
                    r1 = r2.forEach;
                    r0 = function(a0) { // Environment: r0
                        r1 = a0;
                        r0 = undefined;
                        r0 = r1.bind(r0)();
                        return r0;
                    };
                    r0 = r1.bind(r2)(r0);
                    r0 = undefined;
                    return r0;
                };
                r1['abort'] = r0;
                r0 = undefined;
                return r0;
            };
            _fun2786_ip = 6228; continue _fun2786;
case 6222:
            r22 = r0.AbortController;
case 6228:
            var _closure1_slot132 = r22;
            r22 = {'$$typeof': null, 'Consumer': null, 'Provider': null, '_currentValue': null, '_currentValue2': null, '_threadCount': 0};
            r22['$$typeof'] = r23;
            var _closure1_slot133 = r22;
            r22 = r15.S;
            var _closure1_slot134 = r22;
            r22 = function(a0, a1) { // Environment: r5
                _fun3243: for(var _fun3243_ip = 0; ; ) switch(_fun3243_ip) {
case 0:
                    r3 = a1;
                    r1 = 'object';
                    r0 = typeof r3;
                    r0 = r1 === r0;
                    if(!r0) { _fun3243_ip = 23; continue _fun3243 }
case 17:
                    r1 = null;
                    r0 = r1 !== r3;
case 23:
                    if(!r0) { _fun3243_ip = 42; continue _fun3243 }
case 26:
                    r1 = r3.then;
                    r2 = 'function';
                    r1 = typeof r1;
                    r0 = r2 === r1;
case 42:
                    if(!r0) { _fun3243_ip = 61; continue _fun3243 }
case 45:
                    r1 = _closure1_slot271;
                    r0 = undefined;
                    r0 = r1.bind(r0)(r0, r3);
case 61:
                    r2 = _closure1_slot134;
                    r1 = null;
                    if(!(r1 !== r2)) { _fun3243_ip = 89; continue _fun3243 }
case 74:
                    r2 = _closure1_slot134;
                    r1 = undefined;
                    r0 = a0;
                    r0 = r2.bind(r1)(r0, r3);
case 89:
                    r0 = undefined;
                    return r0;
                }
            };
            r15['S'] = r22;
            r21 = r21.bind(r2)(r10);
            var _closure1_slot135 = r21;
            var _closure1_slot136 = r20;
            var _closure1_slot137 = r20;
            r21 = r0.WeakSet;
            r21 = typeof r21;
            if(!(r16 !== r21)) { _fun2786_ip = 6311; continue _fun2786 }
case 6303:
            r21 = r0.Set;
            _fun2786_ip = 6317; continue _fun2786;
case 6311:
            r21 = r0.WeakSet;
case 6317:
            var _closure1_slot138 = r21;
            var _closure1_slot139 = r10;
            var _closure1_slot140 = r20;
            var _closure1_slot141 = r10;
            var _closure1_slot142 = r20;
            r21 = 8192;
            var _closure1_slot143 = r21;
            r21 = {};
            r22 = function(a0) { // Original name: getCacheForType, environment: r5
                _fun3244: for(var _fun3244_ip = 0; ; ) switch(_fun3244_ip) {
case 0:
                    r4 = a0;
                    r2 = _closure1_slot393;
                    r0 = _closure1_slot133;
                    r1 = undefined;
                    r2 = r2.bind(r1)(r0);
                    r3 = r2.data;
                    r0 = r3.get;
                    r0 = r0.bind(r3)(r4);
                    if(!(r1 === r0)) { _fun3244_ip = 64; continue _fun3244 }
case 41:
                    r1 = r4.bind(r1)();
                    r3 = r2.data;
                    r2 = r3.set;
                    r2 = r2.bind(r3)(r4, r1);
                    r0 = r1;
case 64:
                    return r0;
                }
            };
            r21['getCacheForType'] = r22;
            var _closure1_slot144 = r21;
            r21 = r0.WeakMap;
            r21 = typeof r21;
            if(!(r16 !== r21)) { _fun2786_ip = 6383; continue _fun2786 }
case 6375:
            r21 = r0.Map;
            _fun2786_ip = 6389; continue _fun2786;
case 6383:
            r21 = r0.WeakMap;
case 6389:
            var _closure1_slot145 = r21;
            var _closure1_slot146 = r19;
            var _closure1_slot147 = r10;
            var _closure1_slot148 = r10;
            var _closure1_slot149 = r19;
            var _closure1_slot150 = r19;
            var _closure1_slot151 = r10;
            var _closure1_slot152 = r20;
            var _closure1_slot153 = r20;
            var _closure1_slot154 = r20;
            var _closure1_slot155 = r19;
            var _closure1_slot156 = r19;
            var _closure1_slot157 = r19;
            var _closure1_slot158 = r19;
            var _closure1_slot159 = r19;
            var _closure1_slot160 = r19;
            var _closure1_slot161 = r19;
            var _closure1_slot162 = r10;
            var _closure1_slot163 = r10;
            var _closure1_slot164 = r20;
            var _closure1_slot165 = r19;
            r21 = r0.Infinity;
            var _closure1_slot166 = r21;
            var _closure1_slot167 = r10;
            var _closure1_slot168 = r10;
            var _closure1_slot169 = r20;
            var _closure1_slot170 = r10;
            var _closure1_slot171 = r19;
            var _closure1_slot172 = r19;
            var _closure1_slot173 = r10;
            var _closure1_slot174 = r19;
            var _closure1_slot175 = r10;
            r3 = r3.version;
            r19 = '19.0.0';
            if(!(r19 === r3)) { _fun2786_ip = 6835; continue _fun2786 }
case 6536:
            r13 = r18[r13];
            r13 = r17.bind(r2)(r13);
            r13 = r13.ReactFiberErrorDialog;
            r13 = r13.showErrorDialog;
            r13 = typeof r13;
            if(!(r16 === r13)) { _fun2786_ip = 6818; continue _fun2786 }
case 6567:
            r13 = function(a0, a1) { // Original name: batchedUpdatesImpl, environment: r5
                _fun3245: for(var _fun3245_ip = 0; ; ) switch(_fun3245_ip) {
case 0:
                    r3 = a0;
                    r0 = a1;
                    r5 = _closure1_slot146;
                    r2 = r5;
                    r4 = 1;
                    r4 = r5 | r4;
                    _closure1_slot146 = r4;
case 27: // try_start_0
                    r6 = undefined;
                    r0 = r3.bind(r6)(r0);
case 34: // try_end0
                    r3 = r2;
                    _closure1_slot146 = r3;
                    r5 = 0;
                    if(!(r5 === r3)) { _fun3245_ip = 103; continue _fun3245 }
case 47:
                    r4 = _closure1_slot0;
                    r7 = _closure1_slot1;
                    r3 = 3;
                    r3 = r7[r3];
                    r4 = r4.bind(r6)(r3);
                    r3 = r4.unstable_now;
                    r4 = r3.bind(r4)();
                    r3 = 500;
                    r3 = r4 + r3;
                    _closure1_slot166 = r3;
                    r4 = _closure1_slot265;
                    r3 = true;
                    r3 = r4.bind(r6)(r5, r3);
case 103:
                    return r0;
case 105: // catch_target0
                    CatchBlockStart(arg_register=0);
                    _closure1_slot146 = r2;
                    r4 = 0;
                    if(!(r4 === r2)) { _fun3245_ip = 175; continue _fun3245 }
case 117:
                    r5 = _closure1_slot0;
                    r3 = _closure1_slot1;
                    r2 = 3;
                    r2 = r3[r2];
                    r3 = undefined;
                    r5 = r5.bind(r3)(r2);
                    r2 = r5.unstable_now;
                    r5 = r2.bind(r5)();
                    r2 = 500;
                    r2 = r5 + r2;
                    _closure1_slot166 = r2;
                    r2 = _closure1_slot265;
                    r1 = true;
                    r1 = r2.bind(r3)(r4, r1);
case 175:
                    throw r0;
                }
            };
            _closure1_slot216 = r13;
            r13 = r0.Map;
            r16 = r13.prototype;
            r16 = Object.create(r16, {constructor: {value: r13}});
            r65 = r16;
            r13 = new r65[r13](r64);
            r13 = r13 instanceof Object ? r13 : r16;
            var _closure1_slot176 = r13;
            r13 = {'bundleType': 0, 'version': '19.0.0', 'rendererPackageName': 'react-native-renderer', 'currentDispatcherRef': null, 'findFiberByHostInstance': null, 'reconcilerVersion': '19.0.0'};
            r13['currentDispatcherRef'] = r15;
            r13['findFiberByHostInstance'] = r14;
            r9 = r13;
            if(!(r10 !== r12)) { _fun2786_ip = 6644; continue _fun2786 }
case 6635:
            r10 = r9;
            r10['rendererConfig'] = r12;
case 6644:
            r10 = r0.__REACT_DEVTOOLS_GLOBAL_HOOK__;
            r10 = typeof r10;
            if(!(r11 !== r10)) { _fun2786_ip = 6710; continue _fun2786 }
case 6657:
            r10 = r0.__REACT_DEVTOOLS_GLOBAL_HOOK__;
            r8 = r10;
            r10 = r10.isDisabled;
            if(r10) { _fun2786_ip = 6710; continue _fun2786 }
case 6675:
            r10 = r8;
            r10 = r10.supportsFiber;
            if(!r10) { _fun2786_ip = 6710; continue _fun2786 }
case 6687: // try_start_0
            r10 = r8.inject;
            r9 = r10.bind(r8)(r9);
            _closure1_slot57 = r9;
            _closure1_slot58 = r8;
case 6706: // try_end0
            _fun2786_ip = 6710; continue _fun2786;
case 6708: // catch_target0
            CatchBlockStart(arg_register=8);
case 6710:
            r8 = function(a0, a1) { // Environment: r5
                _fun3246: for(var _fun3246_ip = 0; ; ) switch(_fun3246_ip) {
case 0:
                    r5 = undefined;
                    r1 = undefined;
                    r4 = _closure1_slot487;
                    r2 = arguments.length;
                    r0 = 2;
                    r6 = r0 < r2;
                    r2 = null;
                    if(!r6) { _fun3246_ip = 41; continue _fun3246 }
case 27:
                    r6 = arguments[r0];
                    r2 = null;
                    if(!(r5 !== r6)) { _fun3246_ip = 41; continue _fun3246 }
case 37:
                    r2 = arguments[r0];
case 41:
                    r10 = a0;
                    r9 = a1;
                    r11 = undefined;
                    r8 = null;
                    r7 = r2;
                    r0 = r11[r4](r10, r9, r8, r7, r6);
                    return r0;
                }
            };
            r4['createPortal'] = r8;
            r8 = function(a0, a1, a2) { // Environment: r5
                _fun3247: for(var _fun3247_ip = 0; ; ) switch(_fun3247_ip) {
case 0:
                    r9 = a0;
                    r4 = a1;
                    r3 = a2;
                    r0 = r9._nativeTag;
                    r1 = null;
                    if(!(r1 == r0)) { _fun3247_ip = 58; continue _fun3247 }
case 20:
                    r5 = _closure1_slot0;
                    r2 = _closure1_slot1;
                    r0 = 2;
                    r2 = r2[r0];
                    r0 = undefined;
                    r2 = r5.bind(r0)(r2);
                    r0 = r2.getNativeTagFromPublicInstance;
                    r5 = r0.bind(r2)(r9);
                    _fun3247_ip = 63; continue _fun3247;
case 58:
                    r5 = r9._nativeTag;
case 63:
                    if(!(r1 != r5)) { _fun3247_ip = 165; continue _fun3247 }
case 67:
                    r8 = _closure1_slot0;
                    r2 = _closure1_slot1;
                    r7 = 2;
                    r2 = r2[r7];
                    r6 = undefined;
                    r8 = r8.bind(r6)(r2);
                    r2 = r8.getNodeFromPublicInstance;
                    r2 = r2.bind(r8)(r9);
                    if(!(r1 == r2)) { _fun3247_ip = 145; continue _fun3247 }
case 107:
                    r1 = _closure1_slot0;
                    r0 = _closure1_slot1;
                    r0 = r0[r7];
                    r0 = r1.bind(r6)(r0);
                    r1 = r0.UIManager;
                    r0 = r1.dispatchViewManagerCommand;
                    r0 = r0.bind(r1)(r5, r4, r3);
                    _fun3247_ip = 165; continue _fun3247;
case 145:
                    r0 = global;
                    r1 = r0.nativeFabricUIManager;
                    r0 = r1.dispatchCommand;
                    r0 = r0.bind(r1)(r2, r4, r3);
case 165:
                    r0 = undefined;
                    return r0;
                }
            };
            r4['dispatchCommand'] = r8;
            r8 = function(a0) { // Environment: r5
                _fun3248: for(var _fun3248_ip = 0; ; ) switch(_fun3248_ip) {
case 0:
                    r2 = a0;
                    r0 = null;
                    r1 = r0 == r2;
                    if(r1) { _fun3248_ip = 76; continue _fun3248 }
case 12:
                    r1 = r2.canonical;
                    if(!r1) { _fun3248_ip = 34; continue _fun3248 }
case 20:
                    r1 = r2.canonical;
                    r1 = r1.publicInstance;
                    if(r1) { _fun3248_ip = 62; continue _fun3248 }
case 34:
                    r3 = r2._nativeTag;
                    r1 = r2;
                    if(r3) { _fun3248_ip = 60; continue _fun3248 }
case 45:
                    r4 = _closure1_slot488;
                    r3 = undefined;
                    r1 = r4.bind(r3)(r2);
case 60:
                    _fun3248_ip = 73; continue _fun3248;
case 62:
                    r2 = r2.canonical;
                    r1 = r2.publicInstance;
case 73:
                    r0 = r1;
case 76:
                    return r0;
                }
            };
            r4['findHostInstance_DEPRECATED'] = r8;
            r8 = function(a0) { // Environment: r5
                _fun3249: for(var _fun3249_ip = 0; ; ) switch(_fun3249_ip) {
case 0:
                    r1 = a0;
                    r0 = null;
                    if(!(r0 != r1)) { _fun3249_ip = 190; continue _fun3249 }
case 12:
                    r3 = 'number';
                    r2 = typeof r1;
                    if(!(r3 !== r2)) { _fun3249_ip = 188; continue _fun3249 }
case 26:
                    r2 = r1._nativeTag;
                    if(r2) { _fun3249_ip = 181; continue _fun3249 }
case 37:
                    r2 = r1.canonical;
                    if(!(r0 != r2)) { _fun3249_ip = 61; continue _fun3249 }
case 46:
                    r2 = r1.canonical;
                    r2 = r2.nativeTag;
                    if(!(r0 == r2)) { _fun3249_ip = 168; continue _fun3249 }
case 61:
                    r3 = _closure1_slot0;
                    r2 = _closure1_slot1;
                    r8 = 2;
                    r2 = r2[r8];
                    r7 = undefined;
                    r3 = r3.bind(r7)(r2);
                    r2 = r3.getNativeTagFromPublicInstance;
                    r2 = r2.bind(r3)(r1);
                    if(r2) { _fun3249_ip = 166; continue _fun3249 }
case 100:
                    r3 = _closure1_slot488;
                    r5 = r3.bind(r7)(r1);
                    r3 = r5;
                    if(!(r0 != r3)) { _fun3249_ip = 164; continue _fun3249 }
case 117:
                    r6 = r5._nativeTag;
                    if(!(r0 == r6)) { _fun3249_ip = 156; continue _fun3249 }
case 126:
                    r6 = _closure1_slot0;
                    r4 = _closure1_slot1;
                    r4 = r4[r8];
                    r6 = r6.bind(r7)(r4);
                    r4 = r6.getNativeTagFromPublicInstance;
                    r4 = r4.bind(r6)(r5);
                    _fun3249_ip = 161; continue _fun3249;
case 156:
                    r4 = r5._nativeTag;
case 161:
                    r3 = r4;
case 164:
                    return r3;
case 166:
                    return r2;
case 168:
                    r2 = r1.canonical;
                    r2 = r2.nativeTag;
                    return r2;
case 181:
                    r2 = r1._nativeTag;
                    return r2;
case 188:
                    return r1;
case 190:
                    return r0;
                }
            };
            r4['findNodeHandle'] = r8;
            r4['getInspectorDataForInstance'] = r7;
            r7 = function() { // Environment: r5
                r0 = global;
                r2 = r0.Error;
                r1 = undefined;
                r0 = 'isChildPublicInstance() is not available in production.';
                r0 = r2.bind(r1)(r0);
                throw r0;
            };
            r4['isChildPublicInstance'] = r7;
            r7 = function(a0, a1, a2, a3) { // Environment: r5
                _fun3251: for(var _fun3251_ip = 0; ; ) switch(_fun3251_ip) {
case 0:
                    r5 = a1;
                    r1 = a3;
                    r3 = _closure1_slot176;
                    r0 = r3.get;
                    r0 = r0.bind(r3)(r5);
                    if(r0) { _fun3251_ip = 297; continue _fun3251 }
case 29:
                    r11 = _closure1_slot490;
                    r10 = _closure1_slot491;
                    r9 = _closure1_slot355;
                    r3 = r1;
                    if(!r1) { _fun3251_ip = 62; continue _fun3251 }
case 50:
                    r6 = r1.onUncaughtError;
                    r4 = undefined;
                    r3 = r4 !== r6;
case 62:
                    if(!r3) { _fun3251_ip = 71; continue _fun3251 }
case 65:
                    r11 = r1.onUncaughtError;
case 71:
                    r3 = r1;
                    if(!r1) { _fun3251_ip = 89; continue _fun3251 }
case 77:
                    r6 = r1.onCaughtError;
                    r4 = undefined;
                    r3 = r4 !== r6;
case 89:
                    if(!r3) { _fun3251_ip = 98; continue _fun3251 }
case 92:
                    r10 = r1.onCaughtError;
case 98:
                    r3 = r1;
                    if(!r3) { _fun3251_ip = 116; continue _fun3251 }
case 104:
                    r6 = r1.onRecoverableError;
                    r4 = undefined;
                    r3 = r4 !== r6;
case 116:
                    if(!r3) { _fun3251_ip = 125; continue _fun3251 }
case 119:
                    r9 = r1.onRecoverableError;
case 125:
                    r6 = _closure1_slot486;
                    r1 = r6.prototype;
                    r3 = Object.create(r1, {constructor: {value: r6}});
                    r17 = false;
                    r16 = '';
                    r20 = r3;
                    r19 = r5;
                    r18 = 0;
                    r15 = r11;
                    r14 = r10;
                    r13 = r9;
                    r12 = null;
                    r1 = new r20[r6](r19, r18, r17, r16, r15, r14, r13, r12, r11);
                    r1 = r1 instanceof Object ? r1 : r3;
                    r4 = _closure1_slot477;
                    r6 = undefined;
                    r19 = 3;
                    r20 = undefined;
                    r18 = null;
                    r17 = null;
                    r16 = 0;
                    r4 = r20[r4](r19, r18, r17, r16, r15);
                    r1['current'] = r4;
                    r4['stateNode'] = r1;
                    r3 = _closure1_slot396;
                    r7 = r3.bind(r6)();
                    r3 = r7.refCount;
                    r3 = r3 + 1;
                    r7['refCount'] = r3;
                    r1['pooledCache'] = r7;
                    r3 = r7.refCount;
                    r3 = r3 + 1;
                    r7['refCount'] = r3;
                    r3 = {'element': null, 'isDehydrated': false};
                    r3['cache'] = r7;
                    r4['memoizedState'] = r3;
                    r3 = _closure1_slot274;
                    r3 = r3.bind(r6)(r4);
                    r4 = _closure1_slot176;
                    r3 = r4.set;
                    r3 = r3.bind(r4)(r5, r1);
                    r0 = r1;
case 297:
                    r5 = _closure1_slot489;
                    r3 = undefined;
                    r19 = a0;
                    r16 = a2;
                    r20 = undefined;
                    r18 = r0;
                    r17 = undefined;
                    r1 = r20[r5](r19, r18, r17, r16, r15);
                    r1 = r0.current;
                    r4 = r1.child;
                    r0 = null;
                    if(!r4) { _fun3251_ip = 391; continue _fun3251 }
case 336:
                    r4 = r1.child;
                    r5 = r4.tag;
                    r4 = 27;
                    if(!(r4 !== r5)) { _fun3251_ip = 372; continue _fun3251 }
case 353:
                    r4 = 5;
                    if(!(r4 !== r5)) { _fun3251_ip = 372; continue _fun3251 }
case 360:
                    r4 = r1.child;
                    r0 = r4.stateNode;
                    _fun3251_ip = 391; continue _fun3251;
case 372:
                    r2 = _closure1_slot250;
                    r1 = r1.child;
                    r1 = r1.stateNode;
                    r0 = r2.bind(r3)(r1);
case 391:
                    return r0;
                }
            };
            r4['render'] = r7;
            r7 = function(a0, a1) { // Environment: r5
                _fun3252: for(var _fun3252_ip = 0; ; ) switch(_fun3252_ip) {
case 0:
                    r8 = a0;
                    r3 = a1;
                    r0 = r8._nativeTag;
                    r1 = null;
                    if(!(r1 == r0)) { _fun3252_ip = 55; continue _fun3252 }
case 17:
                    r4 = _closure1_slot0;
                    r2 = _closure1_slot1;
                    r0 = 2;
                    r2 = r2[r0];
                    r0 = undefined;
                    r2 = r4.bind(r0)(r2);
                    r0 = r2.getNativeTagFromPublicInstance;
                    r4 = r0.bind(r2)(r8);
                    _fun3252_ip = 60; continue _fun3252;
case 55:
                    r4 = r8._nativeTag;
case 60:
                    if(!(r1 != r4)) { _fun3252_ip = 155; continue _fun3252 }
case 64:
                    r7 = _closure1_slot0;
                    r2 = _closure1_slot1;
                    r6 = 2;
                    r2 = r2[r6];
                    r5 = undefined;
                    r7 = r7.bind(r5)(r2);
                    r2 = r7.getNodeFromPublicInstance;
                    r2 = r2.bind(r7)(r8);
                    if(!(r1 == r2)) { _fun3252_ip = 135; continue _fun3252 }
case 104:
                    r1 = _closure1_slot0;
                    r0 = _closure1_slot1;
                    r0 = r0[r6];
                    r1 = r1.bind(r5)(r0);
                    r0 = r1.legacySendAccessibilityEvent;
                    r0 = r0.bind(r1)(r4, r3);
                    _fun3252_ip = 155; continue _fun3252;
case 135:
                    r0 = global;
                    r1 = r0.nativeFabricUIManager;
                    r0 = r1.sendAccessibilityEvent;
                    r0 = r0.bind(r1)(r2, r3);
case 155:
                    r0 = undefined;
                    return r0;
                }
            };
            r4['sendAccessibilityEvent'] = r7;
            r4['unmountComponentAtNode'] = r6;
            r5 = function(a0) { // Environment: r5
                r3 = a0;
                r2 = _closure1_slot492;
                r0 = undefined;
                r2 = r2.bind(r0)(r3);
                r2 = _closure1_slot0;
                r4 = _closure1_slot1;
                r1 = 2;
                r1 = r4[r1];
                r1 = r2.bind(r0)(r1);
                r2 = r1.UIManager;
                r1 = r2.removeRootView;
                r1 = r1.bind(r2)(r3);
                return r0;
            };
            r4['unmountComponentAtNodeAndRemoveContainer'] = r5;
            r4['unstable_batchedUpdates'] = r1;
            return r2;
case 6818:
            r4 = r0.Error;
            r1 = 'Expected ReactFiberErrorDialog.showErrorDialog to be a function.';
            r1 = r4.bind(r2)(r1);
            throw r1;
case 6835:
            r1 = r0.Error;
            r0 = '\n  - react-native-renderer:  19.0.0\nLearn more: https://react.dev/warnings/version-mismatch';
            r3 = r3 + r0;
            r0 = 'Incompatible React versions: The "react" and "react-native-renderer" packages must have the exact same version. Instead got:\n  - react:                  ';
            r0 = r0 + r3;
            r0 = r1.bind(r2)(r0);
            throw r0;
        }
    };
    r6 = 274;
    r5 = [61, 119, 261, 270];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun3254: for(var _fun3254_ip = 0; ; ) switch(_fun3254_ip) {
case 0:
            r7 = a1;
            r2 = a5;
            r8 = a6;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r4
                _fun3255: for(var _fun3255_ip = 0; ; ) switch(_fun3255_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun3255_ip = 104; continue _fun3255 }
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
                        _fun3256: for(var _fun3256_ip = 0; ; ) switch(_fun3256_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun3256_ip = 15; continue _fun3256 }
case 9:
                            r0 = _closure2_slot0;
                            _fun3256_ip = 19; continue _fun3256;
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
            r0 = 0;
            r1 = r8[r0];
            r0 = undefined;
            r6 = r7.bind(r0)(r1);
            r20 = global;
            r9 = r20.Object;
            r5 = r9.defineProperty;
            r3 = {};
            r1 = true;
            r3['value'] = r1;
            r1 = '__esModule';
            r1 = r5.bind(r9)(r2, r1, r3);
            r2['default'] = r0;
            r1 = 1;
            r1 = r8[r1];
            r1 = r7.bind(r0)(r1);
            r1 = r6.bind(r0)(r1);
            var _closure1_slot0 = r1;
            r1 = 2;
            r1 = r8[r1];
            r1 = r7.bind(r0)(r1);
            r3 = r6.bind(r0)(r1);
            var _closure1_slot1 = r3;
            r1 = 3;
            r1 = r8[r1];
            r1 = r7.bind(r0)(r1);
            r1 = r6.bind(r0)(r1);
            var _closure1_slot2 = r1;
            r5 = 4;
            r5 = r8[r5];
            r5 = r7.bind(r0)(r5);
            r5 = r6.bind(r0)(r5);
            var _closure1_slot3 = r5;
            r5 = 5;
            r5 = r8[r5];
            r9 = r7.bind(r0)(r5);
            if(!r9) { _fun3254_ip = 184; continue _fun3254 }
case 170:
            r5 = r9.__esModule;
            r6 = r9;
            if(r5) { _fun3254_ip = 451; continue _fun3254 }
case 184:
            r19 = null;
            if(!(r19 !== r9)) { _fun3254_ip = 442; continue _fun3254 }
case 193:
            r10 = typeof r9;
            r5 = 'object';
            if(!(r5 !== r10)) { _fun3254_ip = 215; continue _fun3254 }
case 204:
            r5 = 'function';
            if(!(r5 === r10)) { _fun3254_ip = 442; continue _fun3254 }
case 215:
            r5 = _closure1_slot9;
            r10 = r5.bind(r0)(r0);
            if(!r10) { _fun3254_ip = 243; continue _fun3254 }
case 227:
            r5 = r10.has;
            r5 = r5.bind(r10)(r9);
            if(r5) { _fun3254_ip = 430; continue _fun3254 }
case 243:
            r5 = Object.create(r19);
            r11 = r20.Object;
            r18 = r11.defineProperty;
            if(!r18) { _fun3254_ip = 271; continue _fun3254 }
case 260:
            r11 = r20.Object;
            r18 = r11.getOwnPropertyDescriptor;
case 271:
            r16 = r9;
            r12 = 'default';
            r11 = undefined;
            for(r13 in r16)
case 288:
            {
case 297:
                r24 = r13;
                if(r12 === r24) { _fun3254_ip = 288; continue _fun3254 }
case 304:
                r21 = {};
                r22 = r21.hasOwnProperty;
                r21 = r22.call;
                r21 = r21.bind(r22)(r9, r24);
                if(!r21) { _fun3254_ip = 288; continue _fun3254 }
case 325:
                r21 = null;
                if(!r18) { _fun3254_ip = 347; continue _fun3254 }
case 330:
                r23 = r20.Object;
                r22 = r23.getOwnPropertyDescriptor;
                r21 = r22.bind(r23)(r9, r24);
case 347:
                if(!r21) { _fun3254_ip = 366; continue _fun3254 }
case 350:
                r22 = r21.get;
                if(r22) { _fun3254_ip = 379; continue _fun3254 }
case 358:
                r22 = r21.set;
                if(r22) { _fun3254_ip = 379; continue _fun3254 }
case 366:
                r22 = r9[r24];
                r5[r24] = r22;
                r11 = r21;
                _fun3254_ip = 288; continue _fun3254;
case 379:
                r23 = r20.Object;
                r22 = r23.defineProperty;
                r22 = r22.bind(r23)(r5, r24, r21);
                r11 = r21;
                _fun3254_ip = 288; continue _fun3254;
            }
case 402:
            r5['default'] = r9;
            r6 = r5;
            if(!r10) { _fun3254_ip = 451; continue _fun3254 }
case 414:
            r11 = r10.set;
            r11 = r11.bind(r10)(r9, r5);
            r6 = r5;
            _fun3254_ip = 451; continue _fun3254;
case 430:
            r5 = r10.get;
            r6 = r5.bind(r10)(r9);
            _fun3254_ip = 451; continue _fun3254;
case 442:
            r5 = {};
            r5['default'] = r9;
            r6 = r5;
case 451:
            r5 = 6;
            r5 = r8[r5];
            r5 = r7.bind(r0)(r5);
            var _closure1_slot4 = r5;
            r5 = ['animating', 'color', 'hidesWhenStopped', 'onLayout', 'size', 'style'];
            var _closure1_slot5 = r5;
            r1 = r1.default;
            r5 = r1.OS;
            r1 = 'android';
            if(!(r5 !== r1)) { _fun3254_ip = 516; continue _fun3254 }
case 497:
            r1 = 8;
            r1 = r8[r1];
            r1 = r7.bind(r0)(r1);
            r1 = r1.default;
            _fun3254_ip = 533; continue _fun3254;
case 516:
            r5 = 7;
            r5 = r8[r5];
            r5 = r7.bind(r0)(r5);
            r1 = r5.default;
case 533:
            var _closure1_slot6 = r1;
            r1 = '#999999';
            var _closure1_slot7 = r1;
            r5 = r6.forwardRef;
            r1 = function(a0, a1) { // Original name: ActivityIndicator, environment: r4
                _fun3257: for(var _fun3257_ip = 0; ; ) switch(_fun3257_ip) {
case 0:
                    r8 = a0;
                    r1 = r8.animating;
                    r3 = undefined;
                    r13 = true;
                    if(!(r1 !== r3)) { _fun3257_ip = 19; continue _fun3257 }
case 16:
                    r13 = r1;
case 19:
                    r12 = r8.color;
                    if(!(r12 === r3)) { _fun3257_ip = 62; continue _fun3257 }
case 28:
                    r1 = _closure1_slot2;
                    r1 = r1.default;
                    r5 = r1.OS;
                    r4 = 'ios';
                    r1 = null;
                    if(!(r5 === r4)) { _fun3257_ip = 59; continue _fun3257 }
case 55:
                    r1 = _closure1_slot7;
case 59:
                    r12 = r1;
case 62:
                    r1 = r8.hidesWhenStopped;
                    r0 = true;
                    if(!(r1 !== r3)) { _fun3257_ip = 77; continue _fun3257 }
case 74:
                    r0 = r1;
case 77:
                    r4 = r8.onLayout;
                    r2 = r8.size;
                    r1 = 'small';
                    r5 = r1;
                    if(!(r2 !== r3)) { _fun3257_ip = 101; continue _fun3257 }
case 98:
                    r5 = r2;
case 101:
                    r9 = r8.style;
                    r2 = _closure1_slot0;
                    r7 = r2.default;
                    r2 = _closure1_slot5;
                    r8 = r7.bind(r3)(r8, r2);
                    if(!(r1 !== r5)) { _fun3257_ip = 169; continue _fun3257 }
case 132:
                    r2 = 'large';
                    if(!(r2 !== r5)) { _fun3257_ip = 154; continue _fun3257 }
case 140:
                    r11 = {};
                    r11['height'] = r5;
                    r11['width'] = r5;
                    r10 = undefined;
                    _fun3257_ip = 182; continue _fun3257;
case 154:
                    r5 = _closure1_slot8;
                    r11 = r5.sizeLarge;
                    r10 = r2;
                    _fun3257_ip = 182; continue _fun3257;
case 169:
                    r2 = _closure1_slot8;
                    r11 = r2.sizeSmall;
                    r10 = r1;
case 182:
                    r5 = global;
                    r7 = r5.Object;
                    r2 = r7.assign;
                    r1 = {};
                    r1['animating'] = r13;
                    r1['color'] = r12;
                    r1['hidesWhenStopped'] = r0;
                    r0 = {};
                    r12 = a1;
                    r0['ref'] = r12;
                    r0['style'] = r11;
                    r0['size'] = r10;
                    r11 = r2.bind(r7)(r1, r8, r0);
                    r0 = _closure1_slot4;
                    r2 = r0.jsx;
                    r0 = _closure1_slot3;
                    r1 = r0.default;
                    r0 = {};
                    r0['onLayout'] = r4;
                    r4 = _closure1_slot1;
                    r8 = r4.default;
                    r7 = r8.compose;
                    r4 = _closure1_slot8;
                    r4 = r4.container;
                    r4 = r7.bind(r8)(r4, r9);
                    r0['style'] = r4;
                    r4 = _closure1_slot2;
                    r4 = r4.default;
                    r7 = r4.OS;
                    r4 = 'android';
                    if(!(r7 !== r4)) { _fun3257_ip = 355; continue _fun3257 }
case 315:
                    r4 = _closure1_slot4;
                    r8 = r4.jsx;
                    r7 = _closure1_slot6;
                    r10 = r5.Object;
                    r9 = r10.assign;
                    r4 = {};
                    r4 = r9.bind(r10)(r4, r11);
                    r4 = r8.bind(r3)(r7, r4);
                    _fun3257_ip = 404; continue _fun3257;
case 355:
                    r7 = _closure1_slot4;
                    r7 = r7.jsx;
                    r6 = _closure1_slot6;
                    r10 = r5.Object;
                    r9 = r10.assign;
                    r8 = {};
                    r5 = {'styleAttr': 'Normal', 'indeterminate': true};
                    r5 = r9.bind(r10)(r8, r11, r5);
                    r4 = r7.bind(r3)(r6, r5);
case 404:
                    r0['children'] = r4;
                    r0 = r2.bind(r3)(r1, r0);
                    return r0;
                }
            };
            r1 = r5.bind(r6)(r1);
            r5 = 'ActivityIndicator';
            r1['displayName'] = r5;
            r6 = r3.default;
            r5 = r6.create;
            r3 = {};
            r7 = {'alignItems': 'center', 'justifyContent': 'center'};
            r3['container'] = r7;
            r7 = {'width': 20, 'height': 20};
            r3['sizeSmall'] = r7;
            r7 = {'width': 36, 'height': 36};
            r3['sizeLarge'] = r7;
            r3 = r5.bind(r6)(r3);
            var _closure1_slot8 = r3;
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 275;
    r5 = [1, 203, 253, 33, 248, 119, 251, 276, 282];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r4 = a1;
        r2 = a5;
        r5 = a6;
        r0 = 0;
        r3 = r5[r0];
        r0 = undefined;
        r6 = r4.bind(r0)(r3);
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
        r3 = r5[r3];
        r3 = r4.bind(r0)(r3);
        r3 = r6.bind(r0)(r3);
        var _closure1_slot0 = r3;
        r3 = 2;
        r3 = r5[r3];
        r3 = r4.bind(r0)(r3);
        r3 = r6.bind(r0)(r3);
        var _closure1_slot1 = r3;
        r3 = 3;
        r3 = r5[r3];
        r3 = r4.bind(r0)(r3);
        var _closure1_slot2 = r3;
        r3 = ['styleAttr', 'indeterminate', 'animating'];
        var _closure1_slot3 = r3;
        r3 = 4;
        r3 = r5[r3];
        r4 = r4.bind(r0)(r3);
        r3 = r4.forwardRef;
        r1 = function(a0, a1) { // Original name: ProgressBarAndroid, environment: r1
            _fun3259: for(var _fun3259_ip = 0; ; ) switch(_fun3259_ip) {
case 0:
                r5 = a0;
                r0 = r5.styleAttr;
                r9 = 'Normal';
                r3 = undefined;
                if(!(r0 !== r3)) { _fun3259_ip = 22; continue _fun3259 }
case 19:
                r9 = r0;
case 22:
                r1 = r5.indeterminate;
                r8 = true;
                if(!(r1 !== r3)) { _fun3259_ip = 37; continue _fun3259 }
case 34:
                r8 = r1;
case 37:
                r1 = r5.animating;
                r0 = true;
                if(!(r1 !== r3)) { _fun3259_ip = 51; continue _fun3259 }
case 48:
                r0 = r1;
case 51:
                r2 = _closure1_slot0;
                r4 = r2.default;
                r2 = _closure1_slot3;
                r7 = r4.bind(r3)(r5, r2);
                r2 = _closure1_slot2;
                r2 = r2.jsx;
                r1 = _closure1_slot1;
                r1 = r1.default;
                r4 = global;
                r6 = r4.Object;
                r5 = r6.assign;
                r4 = {};
                r4['styleAttr'] = r9;
                r4['indeterminate'] = r8;
                r4['animating'] = r0;
                r0 = {};
                r8 = a1;
                r0['ref'] = r8;
                r0 = r5.bind(r6)(r4, r7, r0);
                r0 = r2.bind(r3)(r1, r0);
                return r0;
            }
        };
        r1 = r3.bind(r4)(r1);
        r2['default'] = r1;
        return r0;
    };
    r6 = 276;
    r5 = [1, 203, 277, 251, 119];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun3260: for(var _fun3260_ip = 0; ; ) switch(_fun3260_ip) {
case 0:
            r2 = a5;
            var _closure1_slot0 = r2;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r3
                _fun3261: for(var _fun3261_ip = 0; ; ) switch(_fun3261_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun3261_ip = 104; continue _fun3261 }
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
                        _fun3262: for(var _fun3262_ip = 0; ; ) switch(_fun3262_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun3262_ip = 15; continue _fun3262 }
case 9:
                            r0 = _closure2_slot0;
                            _fun3262_ip = 19; continue _fun3262;
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
            if(!r6) { _fun3260_ip = 98; continue _fun3260 }
case 84:
            r5 = r6.__esModule;
            r1 = r6;
            if(r5) { _fun3260_ip = 365; continue _fun3260 }
case 98:
            r16 = null;
            if(!(r16 !== r6)) { _fun3260_ip = 356; continue _fun3260 }
case 107:
            r7 = typeof r6;
            r5 = 'object';
            if(!(r5 !== r7)) { _fun3260_ip = 129; continue _fun3260 }
case 118:
            r5 = 'function';
            if(!(r5 === r7)) { _fun3260_ip = 356; continue _fun3260 }
case 129:
            r5 = _closure1_slot3;
            r7 = r5.bind(r0)(r0);
            if(!r7) { _fun3260_ip = 157; continue _fun3260 }
case 141:
            r5 = r7.has;
            r5 = r5.bind(r7)(r6);
            if(r5) { _fun3260_ip = 344; continue _fun3260 }
case 157:
            r5 = Object.create(r16);
            r8 = r4.Object;
            r15 = r8.defineProperty;
            if(!r15) { _fun3260_ip = 185; continue _fun3260 }
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
                if(r9 === r20) { _fun3260_ip = 202; continue _fun3260 }
case 218:
                r17 = {};
                r18 = r17.hasOwnProperty;
                r17 = r18.call;
                r17 = r17.bind(r18)(r6, r20);
                if(!r17) { _fun3260_ip = 202; continue _fun3260 }
case 239:
                r17 = null;
                if(!r15) { _fun3260_ip = 261; continue _fun3260 }
case 244:
                r19 = r4.Object;
                r18 = r19.getOwnPropertyDescriptor;
                r17 = r18.bind(r19)(r6, r20);
case 261:
                if(!r17) { _fun3260_ip = 280; continue _fun3260 }
case 264:
                r18 = r17.get;
                if(r18) { _fun3260_ip = 293; continue _fun3260 }
case 272:
                r18 = r17.set;
                if(r18) { _fun3260_ip = 293; continue _fun3260 }
case 280:
                r18 = r6[r20];
                r5[r20] = r18;
                r8 = r17;
                _fun3260_ip = 202; continue _fun3260;
case 293:
                r19 = r4.Object;
                r18 = r19.defineProperty;
                r18 = r18.bind(r19)(r5, r20, r17);
                r8 = r17;
                _fun3260_ip = 202; continue _fun3260;
            }
case 316:
            r5['default'] = r6;
            r1 = r5;
            if(!r7) { _fun3260_ip = 365; continue _fun3260 }
case 328:
            r8 = r7.set;
            r8 = r8.bind(r7)(r6, r5);
            r1 = r5;
            _fun3260_ip = 365; continue _fun3260;
case 344:
            r5 = r7.get;
            r1 = r5.bind(r7)(r6);
            _fun3260_ip = 365; continue _fun3260;
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
                _fun3263: for(var _fun3263_ip = 0; ; ) switch(_fun3263_ip) {
case 0:
                    r4 = a0;
                    var _closure2_slot0 = r4;
                    r0 = 'default';
                    if(!(r4 !== r0)) { _fun3263_ip = 152; continue _fun3263 }
case 20:
                    r0 = '__esModule';
                    if(!(r4 !== r0)) { _fun3263_ip = 152; continue _fun3263 }
case 31:
                    r1 = global;
                    r0 = r1.Object;
                    r0 = r0.prototype;
                    r6 = r0.hasOwnProperty;
                    r3 = r6.call;
                    r2 = _closure1_slot1;
                    r2 = r3.bind(r6)(r2, r4);
                    if(r2) { _fun3263_ip = 148; continue _fun3263 }
case 70:
                    r2 = _closure1_slot0;
                    r2 = r4 in r2;
                    if(!r2) { _fun3263_ip = 101; continue _fun3263 }
case 81:
                    r2 = _closure1_slot0;
                    r3 = r2[r4];
                    r2 = _closure1_slot2;
                    r2 = r2[r4];
                    if(!(r3 !== r2)) { _fun3263_ip = 144; continue _fun3263 }
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
    r6 = 277;
    r5 = [278];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r4 = a1;
        r2 = a5;
        r6 = a6;
        r0 = 0;
        r3 = r6[r0];
        r0 = undefined;
        r5 = r4.bind(r0)(r3);
        r3 = global;
        r9 = r3.Object;
        r8 = r9.defineProperty;
        r7 = {};
        r3 = true;
        r7['value'] = r3;
        r3 = '__esModule';
        r3 = r8.bind(r9)(r2, r3, r7);
        r2['__INTERNAL_VIEW_CONFIG'] = r0;
        r2['default'] = r0;
        r3 = 1;
        r3 = r6[r3];
        r3 = r4.bind(r0)(r3);
        r3 = r5.bind(r0)(r3);
        r3 = {};
        r5 = 'AndroidProgressBar';
        r3['uiViewClassName'] = r5;
        r7 = {'styleAttr': true, 'typeAttr': true, 'indeterminate': true, 'progress': true, 'animating': true, 'color': null, 'testID': true};
        r8 = {};
        r9 = 2;
        r9 = r6[r9];
        r9 = r4.bind(r0)(r9);
        r9 = r9.default;
        r8['process'] = r9;
        r7['color'] = r8;
        r3['validAttributes'] = r7;
        r2['__INTERNAL_VIEW_CONFIG'] = r3;
        var _closure1_slot0 = r3;
        r3 = 3;
        r3 = r6[r3];
        r4 = r4.bind(r0)(r3);
        r3 = r4.get;
        r1 = function() { // Environment: r1
            r0 = _closure1_slot0;
            return r0;
        };
        r1 = r3.bind(r4)(r5, r1);
        r2['default'] = r1;
        return r0;
    };
    r6 = 278;
    r5 = [1, 279, 89, 86];
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
        r3 = 2;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot2 = r3;
        r1 = function(a0, a1) { // Original name: codegenNativeComponent, environment: r1
            _fun3268: for(var _fun3268_ip = 0; ; ) switch(_fun3268_ip) {
case 0:
                r8 = a0;
                r1 = a1;
                r2 = _closure1_slot0;
                r2 = r2.RN$Bridgeless;
                r4 = r8;
                if(!r1) { _fun3268_ip = 46; continue _fun3268 }
case 25:
                r3 = r1.paperComponentName;
                r2 = null;
                r4 = r8;
                if(!(r3 != r2)) { _fun3268_ip = 46; continue _fun3268 }
case 40:
                r4 = r1.paperComponentName;
case 46:
                r6 = null;
                r2 = r4;
                if(!(r1 != r6)) { _fun3268_ip = 221; continue _fun3268 }
case 58:
                r3 = r1.paperComponentNameDeprecated;
                r2 = r4;
                if(!(r3 != r6)) { _fun3268_ip = 221; continue _fun3268 }
case 74:
                r3 = _closure1_slot2;
                r4 = r3.default;
                r3 = r4.hasViewManagerConfig;
                r3 = r3.bind(r4)(r8);
                r2 = r8;
                if(r3) { _fun3268_ip = 221; continue _fun3268 }
case 100:
                r3 = r1.paperComponentNameDeprecated;
                if(!(r3 != r6)) { _fun3268_ip = 139; continue _fun3268 }
case 110:
                r3 = _closure1_slot2;
                r5 = r3.default;
                r4 = r5.hasViewManagerConfig;
                r3 = r1.paperComponentNameDeprecated;
                r3 = r4.bind(r5)(r3);
                if(r3) { _fun3268_ip = 215; continue _fun3268 }
case 139:
                r3 = global;
                r5 = r3.Error;
                r4 = r1.paperComponentNameDeprecated;
                r6 = r4 != r6;
                r7 = '(unknown)';
                if(!r6) { _fun3268_ip = 167; continue _fun3268 }
case 164:
                r7 = r4;
case 167:
                r3 = r3.HermesInternal;
                r6 = r3.concat;
                r4 = 'Failed to find native component for either ';
                r3 = ' or ';
                r11 = r6.bind(r4)(r8, r3, r7);
                r4 = r5.prototype;
                r4 = Object.create(r4, {constructor: {value: r5}});
                r12 = r4;
                r3 = new r12[r5](r11, r10);
                r3 = r3 instanceof Object ? r3 : r4;
                throw r3;
case 215:
                r2 = r1.paperComponentNameDeprecated;
case 221:
                r0 = _closure1_slot1;
                r1 = r0.default;
                r0 = undefined;
                r0 = r1.bind(r0)(r2);
                return r0;
            }
        };
        r2['default'] = r1;
        return r0;
    };
    r6 = 279;
    r5 = [1, 280, 44];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r2 = a5;
        r0 = a1;
        var _closure1_slot0 = r0;
        r0 = a6;
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
        r2['default'] = r0;
        r1 = function(a0) { // Original name: requireNativeComponent, environment: r1
            r3 = a0;
            var _closure2_slot0 = r3;
            r4 = _closure1_slot0;
            r2 = _closure1_slot1;
            r1 = 0;
            r2 = r2[r1];
            r1 = undefined;
            r2 = r4.bind(r1)(r2);
            r1 = r2.default;
            r0 = function() { // Environment: r0
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 1;
                r1 = r1[r0];
                r0 = undefined;
                r2 = r2.bind(r0)(r1);
                r1 = r2.default;
                r0 = _closure2_slot0;
                r0 = r1.bind(r2)(r0);
                return r0;
            };
            r0 = r1.bind(r2)(r3, r0);
            return r0;
        };
        r2['default'] = r1;
        return r0;
    };
    r6 = 280;
    r5 = [281, 87];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r2 = a5;
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
        r4 = a6;
        r3 = 0;
        r4 = r4[r3];
        r3 = a1;
        r3 = r3.bind(r0)(r4);
        r3 = r3.ReactNativeViewConfigRegistry;
        r3 = r3.register;
        var _closure1_slot0 = r3;
        r1 = function(a0, a1) { // Original name: createReactNativeComponentClass, environment: r1
            r3 = _closure1_slot0;
            r2 = undefined;
            r1 = a0;
            r0 = a1;
            r0 = r3.bind(r2)(r1, r0);
            return r0;
        };
        r2['default'] = r1;
        return r0;
    };
    r6 = 281;
    r5 = [261];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun3274: for(var _fun3274_ip = 0; ; ) switch(_fun3274_ip) {
case 0:
            r2 = a5;
            var _closure1_slot0 = r2;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r3
                _fun3275: for(var _fun3275_ip = 0; ; ) switch(_fun3275_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun3275_ip = 104; continue _fun3275 }
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
                        _fun3276: for(var _fun3276_ip = 0; ; ) switch(_fun3276_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun3276_ip = 15; continue _fun3276 }
case 9:
                            r0 = _closure2_slot0;
                            _fun3276_ip = 19; continue _fun3276;
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
            if(!r6) { _fun3274_ip = 98; continue _fun3274 }
case 84:
            r5 = r6.__esModule;
            r1 = r6;
            if(r5) { _fun3274_ip = 365; continue _fun3274 }
case 98:
            r16 = null;
            if(!(r16 !== r6)) { _fun3274_ip = 356; continue _fun3274 }
case 107:
            r7 = typeof r6;
            r5 = 'object';
            if(!(r5 !== r7)) { _fun3274_ip = 129; continue _fun3274 }
case 118:
            r5 = 'function';
            if(!(r5 === r7)) { _fun3274_ip = 356; continue _fun3274 }
case 129:
            r5 = _closure1_slot3;
            r7 = r5.bind(r0)(r0);
            if(!r7) { _fun3274_ip = 157; continue _fun3274 }
case 141:
            r5 = r7.has;
            r5 = r5.bind(r7)(r6);
            if(r5) { _fun3274_ip = 344; continue _fun3274 }
case 157:
            r5 = Object.create(r16);
            r8 = r4.Object;
            r15 = r8.defineProperty;
            if(!r15) { _fun3274_ip = 185; continue _fun3274 }
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
                if(r9 === r20) { _fun3274_ip = 202; continue _fun3274 }
case 218:
                r17 = {};
                r18 = r17.hasOwnProperty;
                r17 = r18.call;
                r17 = r17.bind(r18)(r6, r20);
                if(!r17) { _fun3274_ip = 202; continue _fun3274 }
case 239:
                r17 = null;
                if(!r15) { _fun3274_ip = 261; continue _fun3274 }
case 244:
                r19 = r4.Object;
                r18 = r19.getOwnPropertyDescriptor;
                r17 = r18.bind(r19)(r6, r20);
case 261:
                if(!r17) { _fun3274_ip = 280; continue _fun3274 }
case 264:
                r18 = r17.get;
                if(r18) { _fun3274_ip = 293; continue _fun3274 }
case 272:
                r18 = r17.set;
                if(r18) { _fun3274_ip = 293; continue _fun3274 }
case 280:
                r18 = r6[r20];
                r5[r20] = r18;
                r8 = r17;
                _fun3274_ip = 202; continue _fun3274;
case 293:
                r19 = r4.Object;
                r18 = r19.defineProperty;
                r18 = r18.bind(r19)(r5, r20, r17);
                r8 = r17;
                _fun3274_ip = 202; continue _fun3274;
            }
case 316:
            r5['default'] = r6;
            r1 = r5;
            if(!r7) { _fun3274_ip = 365; continue _fun3274 }
case 328:
            r8 = r7.set;
            r8 = r8.bind(r7)(r6, r5);
            r1 = r5;
            _fun3274_ip = 365; continue _fun3274;
case 344:
            r5 = r7.get;
            r1 = r5.bind(r7)(r6);
            _fun3274_ip = 365; continue _fun3274;
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
                _fun3277: for(var _fun3277_ip = 0; ; ) switch(_fun3277_ip) {
case 0:
                    r4 = a0;
                    var _closure2_slot0 = r4;
                    r0 = 'default';
                    if(!(r4 !== r0)) { _fun3277_ip = 152; continue _fun3277 }
case 20:
                    r0 = '__esModule';
                    if(!(r4 !== r0)) { _fun3277_ip = 152; continue _fun3277 }
case 31:
                    r1 = global;
                    r0 = r1.Object;
                    r0 = r0.prototype;
                    r6 = r0.hasOwnProperty;
                    r3 = r6.call;
                    r2 = _closure1_slot1;
                    r2 = r3.bind(r6)(r2, r4);
                    if(r2) { _fun3277_ip = 148; continue _fun3277 }
case 70:
                    r2 = _closure1_slot0;
                    r2 = r4 in r2;
                    if(!r2) { _fun3277_ip = 101; continue _fun3277 }
case 81:
                    r2 = _closure1_slot0;
                    r3 = r2[r4];
                    r2 = _closure1_slot2;
                    r2 = r2[r4];
                    if(!(r3 !== r2)) { _fun3277_ip = 144; continue _fun3277 }
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
    r6 = 282;
    r5 = [283];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r4 = a1;
        r2 = a5;
        r6 = a6;
        r0 = 0;
        r3 = r6[r0];
        r0 = undefined;
        r5 = r4.bind(r0)(r3);
        r3 = global;
        r9 = r3.Object;
        r8 = r9.defineProperty;
        r7 = {};
        r3 = true;
        r7['value'] = r3;
        r3 = '__esModule';
        r3 = r8.bind(r9)(r2, r3, r7);
        r2['__INTERNAL_VIEW_CONFIG'] = r0;
        r2['default'] = r0;
        r3 = 1;
        r3 = r6[r3];
        r3 = r4.bind(r0)(r3);
        r3 = r5.bind(r0)(r3);
        r3 = {};
        r5 = 'RCTActivityIndicatorView';
        r3['uiViewClassName'] = r5;
        r7 = {'hidesWhenStopped': true, 'animating': true, 'color': null, 'size': true};
        r8 = {};
        r9 = 2;
        r9 = r6[r9];
        r9 = r4.bind(r0)(r9);
        r9 = r9.default;
        r8['process'] = r9;
        r7['color'] = r8;
        r3['validAttributes'] = r7;
        r2['__INTERNAL_VIEW_CONFIG'] = r3;
        var _closure1_slot0 = r3;
        r3 = 3;
        r3 = r6[r3];
        r4 = r4.bind(r0)(r3);
        r3 = r4.get;
        r1 = function() { // Environment: r1
            r0 = _closure1_slot0;
            return r0;
        };
        r1 = r3.bind(r4)(r5, r1);
        r2['default'] = r1;
        return r0;
    };
    r6 = 283;
    r5 = [1, 279, 89, 86];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun3281: for(var _fun3281_ip = 0; ; ) switch(_fun3281_ip) {
case 0:
            r10 = a1;
            r2 = a5;
            r11 = a6;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r4
                _fun3282: for(var _fun3282_ip = 0; ; ) switch(_fun3282_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun3282_ip = 104; continue _fun3282 }
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
                        _fun3283: for(var _fun3283_ip = 0; ; ) switch(_fun3283_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun3283_ip = 15; continue _fun3283 }
case 9:
                            r0 = _closure2_slot0;
                            _fun3283_ip = 19; continue _fun3283;
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
            r1 = r11[r0];
            r0 = undefined;
            r9 = r10.bind(r0)(r1);
            r8 = global;
            r6 = r8.Object;
            r5 = r6.defineProperty;
            r3 = {};
            r1 = true;
            r3['value'] = r1;
            r1 = '__esModule';
            r1 = r5.bind(r6)(r2, r1, r3);
            r2['default'] = r0;
            r1 = 1;
            r1 = r11[r1];
            r1 = r10.bind(r0)(r1);
            r3 = r9.bind(r0)(r1);
            r1 = 2;
            r1 = r11[r1];
            r1 = r10.bind(r0)(r1);
            r1 = r9.bind(r0)(r1);
            var _closure1_slot0 = r1;
            r1 = 3;
            r1 = r11[r1];
            r1 = r10.bind(r0)(r1);
            r7 = r9.bind(r0)(r1);
            var _closure1_slot1 = r7;
            r1 = 4;
            r1 = r11[r1];
            r1 = r10.bind(r0)(r1);
            r5 = r9.bind(r0)(r1);
            r1 = 5;
            r1 = r11[r1];
            r1 = r10.bind(r0)(r1);
            r1 = r9.bind(r0)(r1);
            r6 = 6;
            r6 = r11[r6];
            r6 = r10.bind(r0)(r6);
            r6 = r9.bind(r0)(r6);
            var _closure1_slot2 = r6;
            r6 = 7;
            r6 = r11[r6];
            r6 = r10.bind(r0)(r6);
            r6 = r9.bind(r0)(r6);
            var _closure1_slot3 = r6;
            r6 = 8;
            r6 = r11[r6];
            r12 = r10.bind(r0)(r6);
            if(!r12) { _fun3281_ip = 235; continue _fun3281 }
case 221:
            r9 = r12.__esModule;
            r6 = r12;
            if(r9) { _fun3281_ip = 502; continue _fun3281 }
case 235:
            r22 = null;
            if(!(r22 !== r12)) { _fun3281_ip = 493; continue _fun3281 }
case 244:
            r13 = typeof r12;
            r9 = 'object';
            if(!(r9 !== r13)) { _fun3281_ip = 266; continue _fun3281 }
case 255:
            r9 = 'function';
            if(!(r9 === r13)) { _fun3281_ip = 493; continue _fun3281 }
case 266:
            r9 = _closure1_slot7;
            r13 = r9.bind(r0)(r0);
            if(!r13) { _fun3281_ip = 294; continue _fun3281 }
case 278:
            r9 = r13.has;
            r9 = r9.bind(r13)(r12);
            if(r9) { _fun3281_ip = 481; continue _fun3281 }
case 294:
            r9 = Object.create(r22);
            r14 = r8.Object;
            r21 = r14.defineProperty;
            if(!r21) { _fun3281_ip = 322; continue _fun3281 }
case 311:
            r14 = r8.Object;
            r21 = r14.getOwnPropertyDescriptor;
case 322:
            r19 = r12;
            r15 = 'default';
            r14 = undefined;
            for(r16 in r19)
case 339:
            {
case 348:
                r26 = r16;
                if(r15 === r26) { _fun3281_ip = 339; continue _fun3281 }
case 355:
                r23 = {};
                r24 = r23.hasOwnProperty;
                r23 = r24.call;
                r23 = r23.bind(r24)(r12, r26);
                if(!r23) { _fun3281_ip = 339; continue _fun3281 }
case 376:
                r23 = null;
                if(!r21) { _fun3281_ip = 398; continue _fun3281 }
case 381:
                r25 = r8.Object;
                r24 = r25.getOwnPropertyDescriptor;
                r23 = r24.bind(r25)(r12, r26);
case 398:
                if(!r23) { _fun3281_ip = 417; continue _fun3281 }
case 401:
                r24 = r23.get;
                if(r24) { _fun3281_ip = 430; continue _fun3281 }
case 409:
                r24 = r23.set;
                if(r24) { _fun3281_ip = 430; continue _fun3281 }
case 417:
                r24 = r12[r26];
                r9[r26] = r24;
                r14 = r23;
                _fun3281_ip = 339; continue _fun3281;
case 430:
                r25 = r8.Object;
                r24 = r25.defineProperty;
                r24 = r24.bind(r25)(r9, r26, r23);
                r14 = r23;
                _fun3281_ip = 339; continue _fun3281;
            }
case 453:
            r9['default'] = r12;
            r6 = r9;
            if(!r13) { _fun3281_ip = 502; continue _fun3281 }
case 465:
            r14 = r13.set;
            r14 = r14.bind(r13)(r12, r9);
            r6 = r9;
            _fun3281_ip = 502; continue _fun3281;
case 481:
            r9 = r13.get;
            r6 = r9.bind(r13)(r12);
            _fun3281_ip = 502; continue _fun3281;
case 493:
            r9 = {};
            r9['default'] = r12;
            r6 = r9;
case 502:
            r9 = 9;
            r9 = r11[r9];
            r9 = r10.bind(r0)(r9);
            var _closure1_slot4 = r9;
            r9 = r7.default;
            r10 = r9.OS;
            r9 = 'android';
            if(!(r10 !== r9)) { _fun3281_ip = 543; continue _fun3281 }
case 536:
            r1 = r1.default;
            _fun3281_ip = 548; continue _fun3281;
case 543:
            r1 = r5.default;
case 548:
            var _closure1_slot5 = r1;
            r5 = r6.forwardRef;
            r1 = function(a0, a1) { // Environment: r4
                _fun3284: for(var _fun3284_ip = 0; ; ) switch(_fun3284_ip) {
case 0:
                    r3 = a0;
                    r23 = r3.accessibilityLabel;
                    r18 = r3.accessibilityState;
                    r29 = r3.aria-busy;
                    r27 = r3.aria-checked;
                    r19 = r3.aria-disabled;
                    r11 = r3.aria-expanded;
                    r22 = r3.aria-label;
                    r10 = r3.aria-selected;
                    r0 = r3.importantForAccessibility;
                    r30 = r3.color;
                    r5 = r3.onPress;
                    r4 = r3.touchSoundDisabled;
                    r2 = r3.title;
                    r17 = r3.hasTVPreferredFocus;
                    r16 = r3.nextFocusDown;
                    r15 = r3.nextFocusForward;
                    r14 = r3.nextFocusLeft;
                    r13 = r3.nextFocusRight;
                    r8 = r3.nextFocusUp;
                    r6 = r3.testID;
                    r26 = r3.accessible;
                    r25 = r3.accessibilityActions;
                    r21 = r3.accessibilityHint;
                    r20 = r3.accessibilityLanguage;
                    r24 = r3.onAccessibilityAction;
                    r1 = _closure1_slot6;
                    r1 = r1.button;
                    r9 = new Array(1);
                    r9[0] = r1;
                    r1 = _closure1_slot6;
                    r1 = r1.text;
                    r12 = new Array(1);
                    r12[0] = r1;
                    if(!r30) { _fun3284_ip = 247; continue _fun3284 }
case 191:
                    r1 = _closure1_slot1;
                    r1 = r1.default;
                    r28 = r1.OS;
                    r1 = 'ios';
                    if(!(r28 !== r1)) { _fun3284_ip = 231; continue _fun3284 }
case 213:
                    r28 = r9.push;
                    r1 = {};
                    r1['backgroundColor'] = r30;
                    r1 = r28.bind(r9)(r1);
                    _fun3284_ip = 247; continue _fun3284;
case 231:
                    r28 = r12.push;
                    r1 = {};
                    r1['color'] = r30;
                    r1 = r28.bind(r12)(r1);
case 247:
                    r28 = {};
                    r1 = null;
                    if(!(r29 == r1)) { _fun3284_ip = 273; continue _fun3284 }
case 255:
                    r31 = r18 == r1;
                    r30 = undefined;
                    if(r31) { _fun3284_ip = 270; continue _fun3284 }
case 264:
                    r30 = r18.busy;
case 270:
                    r29 = r30;
case 273:
                    r28['busy'] = r29;
                    if(!(r27 == r1)) { _fun3284_ip = 300; continue _fun3284 }
case 282:
                    r30 = r18 == r1;
                    r29 = undefined;
                    if(r30) { _fun3284_ip = 297; continue _fun3284 }
case 291:
                    r29 = r18.checked;
case 297:
                    r27 = r29;
case 300:
                    r28['checked'] = r27;
                    if(!(r19 == r1)) { _fun3284_ip = 326; continue _fun3284 }
case 309:
                    r29 = r18 == r1;
                    r27 = undefined;
                    if(r29) { _fun3284_ip = 323; continue _fun3284 }
case 318:
                    r27 = r18.disabled;
case 323:
                    r19 = r27;
case 326:
                    r28['disabled'] = r19;
                    if(!(r11 == r1)) { _fun3284_ip = 352; continue _fun3284 }
case 334:
                    r27 = r18 == r1;
                    r19 = undefined;
                    if(r27) { _fun3284_ip = 349; continue _fun3284 }
case 343:
                    r19 = r18.expanded;
case 349:
                    r11 = r19;
case 352:
                    r28['expanded'] = r11;
                    if(!(r10 == r1)) { _fun3284_ip = 379; continue _fun3284 }
case 361:
                    r19 = r18 == r1;
                    r11 = undefined;
                    if(r19) { _fun3284_ip = 376; continue _fun3284 }
case 370:
                    r11 = r18.selected;
case 376:
                    r10 = r11;
case 379:
                    r28['selected'] = r10;
                    r10 = r3.disabled;
                    if(!(r10 == r1)) { _fun3284_ip = 409; continue _fun3284 }
case 393:
                    r10 = r28 == r1;
                    r11 = undefined;
                    if(r10) { _fun3284_ip = 407; continue _fun3284 }
case 402:
                    r11 = r28.disabled;
case 407:
                    _fun3284_ip = 414; continue _fun3284;
case 409:
                    r11 = r3.disabled;
case 414:
                    r10 = r28 == r1;
                    r3 = undefined;
                    r1 = undefined;
                    if(r10) { _fun3284_ip = 430; continue _fun3284 }
case 425:
                    r1 = r28.disabled;
case 430:
                    r19 = r28;
                    if(!(r11 !== r1)) { _fun3284_ip = 465; continue _fun3284 }
case 437:
                    r1 = global;
                    r27 = r1.Object;
                    r18 = r27.assign;
                    r10 = {};
                    r10['disabled'] = r11;
                    r1 = {};
                    r19 = r18.bind(r27)(r1, r28, r10);
case 465:
                    if(!r11) { _fun3284_ip = 508; continue _fun3284 }
case 468:
                    r10 = r9.push;
                    r1 = _closure1_slot6;
                    r1 = r1.buttonDisabled;
                    r1 = r10.bind(r9)(r1);
                    r10 = r12.push;
                    r1 = _closure1_slot6;
                    r1 = r1.textDisabled;
                    r1 = r10.bind(r12)(r1);
case 508:
                    r1 = _closure1_slot3;
                    r18 = r1.default;
                    r10 = typeof r2;
                    r1 = 'string';
                    r10 = r10 === r1;
                    r1 = 'The title prop of a Button must be a string';
                    r1 = r18.bind(r3)(r10, r1);
                    r1 = _closure1_slot1;
                    r1 = r1.default;
                    r18 = r1.OS;
                    r1 = 'android';
                    r10 = r2;
                    if(!(r18 === r1)) { _fun3284_ip = 573; continue _fun3284 }
case 563:
                    r1 = r2.toUpperCase;
                    r10 = r1.bind(r2)();
case 573:
                    r18 = 'no-hide-descendants';
                    r1 = 'no';
                    if(!(r0 !== r1)) { _fun3284_ip = 588; continue _fun3284 }
case 585:
                    r18 = r0;
case 588:
                    r0 = _closure1_slot4;
                    r2 = r0.jsx;
                    r1 = _closure1_slot5;
                    r0 = {};
                    r0['accessible'] = r26;
                    r0['accessibilityActions'] = r25;
                    r0['onAccessibilityAction'] = r24;
                    if(r22) { _fun3284_ip = 624; continue _fun3284 }
case 621:
                    r22 = r23;
case 624:
                    r0['accessibilityLabel'] = r22;
                    r0['accessibilityHint'] = r21;
                    r0['accessibilityLanguage'] = r20;
                    r20 = 'button';
                    r0['accessibilityRole'] = r20;
                    r0['accessibilityState'] = r19;
                    r0['importantForAccessibility'] = r18;
                    r0['hasTVPreferredFocus'] = r17;
                    r0['nextFocusDown'] = r16;
                    r0['nextFocusForward'] = r15;
                    r0['nextFocusLeft'] = r14;
                    r0['nextFocusRight'] = r13;
                    r0['nextFocusUp'] = r8;
                    r0['testID'] = r6;
                    r0['disabled'] = r11;
                    r0['onPress'] = r5;
                    r0['touchSoundDisabled'] = r4;
                    r4 = a1;
                    r0['ref'] = r4;
                    r8 = _closure1_slot4;
                    r6 = r8.jsx;
                    r4 = _closure1_slot2;
                    r5 = r4.default;
                    r4 = {};
                    r4['style'] = r9;
                    r9 = r8.jsx;
                    r7 = _closure1_slot0;
                    r8 = r7.default;
                    r7 = {};
                    r7['style'] = r12;
                    r7['disabled'] = r11;
                    r7['children'] = r10;
                    r7 = r9.bind(r3)(r8, r7);
                    r4['children'] = r7;
                    r4 = r6.bind(r3)(r5, r4);
                    r0['children'] = r4;
                    r0 = r2.bind(r3)(r1, r0);
                    return r0;
                }
            };
            r1 = r5.bind(r6)(r1);
            r5 = 'Button';
            r1['displayName'] = r5;
            r6 = r3.default;
            r5 = r6.create;
            r3 = {};
            r11 = r7.default;
            r10 = r11.select;
            r9 = {};
            r12 = {};
            r9['ios'] = r12;
            r12 = {'elevation': 4, 'backgroundColor': '#2196F3', 'borderRadius': 2};
            r9['android'] = r12;
            r9 = r10.bind(r11)(r9);
            r3['button'] = r9;
            r11 = r8.Object;
            r10 = r11.assign;
            r12 = r7.default;
            r9 = r12.select;
            r8 = {};
            r13 = {'color': '#007AFF', 'fontSize': 18};
            r8['ios'] = r13;
            r13 = {'color': 'white', 'fontWeight': '500'};
            r8['android'] = r13;
            r9 = r9.bind(r12)(r8);
            r8 = {'textAlign': 'center', 'margin': 8};
            r8 = r10.bind(r11)(r8, r9);
            r3['text'] = r8;
            r10 = r7.default;
            r9 = r10.select;
            r8 = {};
            r11 = {};
            r8['ios'] = r11;
            r11 = {'elevation': 0, 'backgroundColor': '#dfdfdf'};
            r8['android'] = r11;
            r8 = r9.bind(r10)(r8);
            r3['buttonDisabled'] = r8;
            r9 = r7.default;
            r8 = r9.select;
            r7 = {};
            r10 = {};
            r11 = '#cdcdcd';
            r10['color'] = r11;
            r7['ios'] = r10;
            r10 = {};
            r11 = '#a1a1a1';
            r10['color'] = r11;
            r7['android'] = r10;
            r7 = r8.bind(r9)(r7);
            r3['textDisabled'] = r7;
            r3 = r5.bind(r6)(r3);
            var _closure1_slot6 = r3;
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 284;
    r5 = [1, 253, 285, 33, 297, 298, 248, 20, 119, 251];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r3 = a1;
        r2 = a5;
        r5 = a6;
        var _closure1_slot0 = r3;
        var _closure1_slot1 = r5;
        r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r4
            _fun3286: for(var _fun3286_ip = 0; ; ) switch(_fun3286_ip) {
case 0:
                r1 = global;
                r2 = r1.WeakMap;
                r3 = 'function';
                r2 = typeof r2;
                if(!(r3 === r2)) { _fun3286_ip = 104; continue _fun3286 }
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
                    _fun3287: for(var _fun3287_ip = 0; ; ) switch(_fun3287_ip) {
case 0:
                        r0 = a0;
                        if(r0) { _fun3287_ip = 15; continue _fun3287 }
case 9:
                        r0 = _closure2_slot0;
                        _fun3287_ip = 19; continue _fun3287;
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
        r6 = function(a0, a1) { // Original name: _interopRequireWildcard, environment: r4
            _fun3288: for(var _fun3288_ip = 0; ; ) switch(_fun3288_ip) {
case 0:
                r0 = a0;
                if(!r0) { _fun3288_ip = 17; continue _fun3288 }
case 6:
                r1 = r0.__esModule;
                if(r1) { _fun3288_ip = 284; continue _fun3288 }
case 17:
                r12 = null;
                if(!(r12 !== r0)) { _fun3288_ip = 276; continue _fun3288 }
case 26:
                r2 = typeof r0;
                r1 = 'object';
                if(!(r1 !== r2)) { _fun3288_ip = 48; continue _fun3288 }
case 37:
                r1 = 'function';
                if(!(r1 === r2)) { _fun3288_ip = 276; continue _fun3288 }
case 48:
                r1 = _closure1_slot16;
                r3 = undefined;
                r2 = r1.bind(r3)(r3);
                if(!r2) { _fun3288_ip = 81; continue _fun3288 }
case 65:
                r1 = r2.has;
                r1 = r1.bind(r2)(r0);
                if(r1) { _fun3288_ip = 264; continue _fun3288 }
case 81:
                r1 = Object.create(r12);
                r11 = global;
                r4 = r11.Object;
                r10 = r4.defineProperty;
                if(!r10) { _fun3288_ip = 111; continue _fun3288 }
case 100:
                r4 = r11.Object;
                r10 = r4.getOwnPropertyDescriptor;
case 111:
                r8 = r0;
                r4 = 'default';
                r3 = undefined;
                for(r5 in r8)
case 128:
                {
case 137:
                    r16 = r5;
                    if(r4 === r16) { _fun3288_ip = 128; continue _fun3288 }
case 144:
                    r13 = {};
                    r14 = r13.hasOwnProperty;
                    r13 = r14.call;
                    r13 = r13.bind(r14)(r0, r16);
                    if(!r13) { _fun3288_ip = 128; continue _fun3288 }
case 165:
                    r13 = null;
                    if(!r10) { _fun3288_ip = 187; continue _fun3288 }
case 170:
                    r15 = r11.Object;
                    r14 = r15.getOwnPropertyDescriptor;
                    r13 = r14.bind(r15)(r0, r16);
case 187:
                    if(!r13) { _fun3288_ip = 206; continue _fun3288 }
case 190:
                    r14 = r13.get;
                    if(r14) { _fun3288_ip = 219; continue _fun3288 }
case 198:
                    r14 = r13.set;
                    if(r14) { _fun3288_ip = 219; continue _fun3288 }
case 206:
                    r14 = r0[r16];
                    r1[r16] = r14;
                    r3 = r13;
                    _fun3288_ip = 128; continue _fun3288;
case 219:
                    r15 = r11.Object;
                    r14 = r15.defineProperty;
                    r14 = r14.bind(r15)(r1, r16, r13);
                    r3 = r13;
                    _fun3288_ip = 128; continue _fun3288;
                }
case 242:
                r1['default'] = r0;
                if(!r2) { _fun3288_ip = 262; continue _fun3288 }
case 251:
                r3 = r2.set;
                r3 = r3.bind(r2)(r0, r1);
case 262:
                return r1;
case 264:
                r1 = r2.get;
                r1 = r1.bind(r2)(r0);
                return r1;
case 276:
                r1 = {};
                r1['default'] = r0;
                return r1;
case 284:
                return r0;
            }
        };
        r0 = function(a0) { // Original name: useTextPressability, environment: r4
            r1 = a0;
            r16 = r1.onLongPress;
            var _closure2_slot0 = r16;
            r15 = r1.onPress;
            var _closure2_slot1 = r15;
            r14 = r1.onPressIn;
            var _closure2_slot2 = r14;
            r13 = r1.onPressOut;
            var _closure2_slot3 = r13;
            r11 = r1.onResponderGrant;
            var _closure2_slot4 = r11;
            r10 = r1.onResponderMove;
            var _closure2_slot5 = r10;
            r9 = r1.onResponderRelease;
            var _closure2_slot6 = r9;
            r8 = r1.onResponderTerminate;
            var _closure2_slot7 = r8;
            r7 = r1.onResponderTerminationRequest;
            var _closure2_slot8 = r7;
            r2 = r1.onStartShouldSetResponder;
            var _closure2_slot9 = r2;
            r17 = r1.pressRetentionOffset;
            var _closure2_slot10 = r17;
            r4 = r1.suppressHighlighting;
            var _closure2_slot11 = r4;
            r3 = _closure1_slot9;
            r6 = r3.useState;
            r3 = undefined;
            r5 = false;
            r12 = r6.bind(r3)(r5);
            r5 = _closure1_slot2;
            r6 = r5.default;
            r5 = 2;
            r12 = r6.bind(r3)(r12, r5);
            r5 = 0;
            r5 = r12[r5];
            var _closure2_slot12 = r5;
            r6 = 1;
            r6 = r12[r6];
            var _closure2_slot13 = r6;
            r6 = _closure1_slot9;
            r12 = r6.useMemo;
            r6 = new Array(6);
            r6[0] = r17;
            r6[1] = r16;
            r6[2] = r15;
            r6[3] = r14;
            r6[4] = r13;
            r6[5] = r4;
            r4 = function() { // Environment: r0
                _fun3290: for(var _fun3290_ip = 0; ; ) switch(_fun3290_ip) {
case 0:
                    r2 = _closure2_slot2;
                    r1 = _closure2_slot3;
                    r4 = _closure1_slot7;
                    r4 = r4.default;
                    r5 = r4.OS;
                    r4 = 'ios';
                    if(!(r5 === r4)) { _fun3290_ip = 48; continue _fun3290 }
case 38:
                    r2 = function(a0) { // Original name: _onPressIn, environment: r0
                        _fun3291: for(var _fun3291_ip = 0; ; ) switch(_fun3291_ip) {
case 0:
                            r4 = _closure2_slot13;
                            r0 = _closure2_slot11;
                            r3 = null;
                            r2 = r0 == r3;
                            if(r2) { _fun3291_ip = 27; continue _fun3291 }
case 20:
                            r0 = _closure2_slot11;
                            r2 = !r0;
case 27:
                            r0 = undefined;
                            r2 = r4.bind(r0)(r2);
                            r2 = _closure2_slot2;
                            if(!(r2 != r3)) { _fun3291_ip = 54; continue _fun3291 }
case 42:
                            r2 = _closure2_slot2;
                            r1 = a0;
                            r1 = r2.bind(r0)(r1);
case 54:
                            return r0;
                        }
                    };
                    r1 = function(a0) { // Original name: _onPressOut, environment: r0
                        _fun3292: for(var _fun3292_ip = 0; ; ) switch(_fun3292_ip) {
case 0:
                            r3 = _closure2_slot13;
                            r0 = undefined;
                            r2 = false;
                            r2 = r3.bind(r0)(r2);
                            r3 = _closure2_slot3;
                            r2 = null;
                            if(!(r3 != r2)) { _fun3292_ip = 38; continue _fun3292 }
case 26:
                            r2 = _closure2_slot3;
                            r1 = a0;
                            r1 = r2.bind(r0)(r1);
case 38:
                            return r0;
                        }
                    };
case 48:
                    r0 = {};
                    r4 = false;
                    r0['disabled'] = r4;
                    r4 = _closure2_slot10;
                    r0['pressRectOffset'] = r4;
                    r4 = _closure2_slot0;
                    r0['onLongPress'] = r4;
                    r3 = _closure2_slot1;
                    r0['onPress'] = r3;
                    r0['onPressIn'] = r2;
                    r0['onPressOut'] = r1;
                    return r0;
                }
            };
            r6 = r12.bind(r3)(r4, r6);
            r4 = _closure1_slot4;
            r4 = r4.default;
            r12 = r4.bind(r3)(r6);
            var _closure2_slot14 = r12;
            r4 = _closure1_slot9;
            r6 = r4.useMemo;
            r4 = new Array(7);
            r4[0] = r12;
            r4[1] = r11;
            r4[2] = r10;
            r4[3] = r9;
            r4[4] = r8;
            r4[5] = r7;
            r4[6] = r2;
            r2 = function() { // Environment: r0
                _fun3293: for(var _fun3293_ip = 0; ; ) switch(_fun3293_ip) {
case 0:
                    r0 = _closure2_slot14;
                    r4 = null;
                    r1 = r0 == r4;
                    r0 = null;
                    if(r1) { _fun3293_ip = 138; continue _fun3293 }
case 20:
                    r1 = {};
                    r5 = function(a0) { // Original name: onResponderGrant, environment: r2
                        _fun3294: for(var _fun3294_ip = 0; ; ) switch(_fun3294_ip) {
case 0:
                            r2 = a0;
                            r3 = _closure2_slot14;
                            r1 = r3.onResponderGrant;
                            r1 = r1.bind(r3)(r2);
                            r3 = _closure2_slot4;
                            r1 = null;
                            if(!(r3 != r1)) { _fun3294_ip = 42; continue _fun3294 }
case 31:
                            r1 = _closure2_slot4;
                            r0 = undefined;
                            r0 = r1.bind(r0)(r2);
case 42:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r1['onResponderGrant'] = r5;
                    r5 = function(a0) { // Original name: onResponderMove, environment: r2
                        _fun3295: for(var _fun3295_ip = 0; ; ) switch(_fun3295_ip) {
case 0:
                            r2 = a0;
                            r3 = _closure2_slot14;
                            r1 = r3.onResponderMove;
                            r1 = r1.bind(r3)(r2);
                            r3 = _closure2_slot5;
                            r1 = null;
                            if(!(r3 != r1)) { _fun3295_ip = 42; continue _fun3295 }
case 31:
                            r1 = _closure2_slot5;
                            r0 = undefined;
                            r0 = r1.bind(r0)(r2);
case 42:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r1['onResponderMove'] = r5;
                    r5 = function(a0) { // Original name: onResponderRelease, environment: r2
                        _fun3296: for(var _fun3296_ip = 0; ; ) switch(_fun3296_ip) {
case 0:
                            r2 = a0;
                            r3 = _closure2_slot14;
                            r1 = r3.onResponderRelease;
                            r1 = r1.bind(r3)(r2);
                            r3 = _closure2_slot6;
                            r1 = null;
                            if(!(r3 != r1)) { _fun3296_ip = 42; continue _fun3296 }
case 31:
                            r1 = _closure2_slot6;
                            r0 = undefined;
                            r0 = r1.bind(r0)(r2);
case 42:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r1['onResponderRelease'] = r5;
                    r2 = function(a0) { // Original name: onResponderTerminate, environment: r2
                        _fun3297: for(var _fun3297_ip = 0; ; ) switch(_fun3297_ip) {
case 0:
                            r2 = a0;
                            r3 = _closure2_slot14;
                            r1 = r3.onResponderTerminate;
                            r1 = r1.bind(r3)(r2);
                            r3 = _closure2_slot7;
                            r1 = null;
                            if(!(r3 != r1)) { _fun3297_ip = 42; continue _fun3297 }
case 31:
                            r1 = _closure2_slot7;
                            r0 = undefined;
                            r0 = r1.bind(r0)(r2);
case 42:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r1['onResponderTerminate'] = r2;
                    r2 = _closure2_slot14;
                    r2 = r2.onClick;
                    r1['onClick'] = r2;
                    r2 = _closure2_slot8;
                    if(!(r2 == r4)) { _fun3293_ip = 97; continue _fun3293 }
case 85:
                    r2 = _closure2_slot14;
                    r2 = r2.onResponderTerminationRequest;
                    _fun3293_ip = 101; continue _fun3293;
case 97:
                    r2 = _closure2_slot8;
case 101:
                    r1['onResponderTerminationRequest'] = r2;
                    r2 = _closure2_slot9;
                    if(!(r2 == r4)) { _fun3293_ip = 126; continue _fun3293 }
case 114:
                    r2 = _closure2_slot14;
                    r2 = r2.onStartShouldSetResponder;
                    _fun3293_ip = 130; continue _fun3293;
case 126:
                    r2 = _closure2_slot9;
case 130:
                    r1['onStartShouldSetResponder'] = r2;
                    r0 = r1;
case 138:
                    return r0;
                }
            };
            r4 = r6.bind(r3)(r2, r4);
            var _closure2_slot15 = r4;
            r1 = _closure1_slot9;
            r2 = r1.useMemo;
            r1 = new Array(2);
            r1[0] = r5;
            r1[1] = r4;
            r0 = function() { // Environment: r0
                r2 = _closure2_slot12;
                r0 = new Array(2);
                r0[0] = r2;
                r1 = _closure2_slot15;
                r0[1] = r1;
                return r0;
            };
            r0 = r2.bind(r3)(r0, r1);
            return r0;
        };
        var _closure1_slot17 = r0;
        r0 = 0;
        r1 = r5[r0];
        r0 = undefined;
        r7 = r3.bind(r0)(r1);
        r1 = global;
        r10 = r1.Object;
        r9 = r10.defineProperty;
        r8 = {};
        r1 = true;
        r8['value'] = r1;
        r1 = '__esModule';
        r1 = r9.bind(r10)(r2, r1, r8);
        r2['default'] = r0;
        r1 = 1;
        r1 = r5[r1];
        r1 = r3.bind(r0)(r1);
        r1 = r7.bind(r0)(r1);
        var _closure1_slot2 = r1;
        r1 = 2;
        r1 = r5[r1];
        r1 = r3.bind(r0)(r1);
        r1 = r7.bind(r0)(r1);
        var _closure1_slot3 = r1;
        r1 = 3;
        r1 = r5[r1];
        r1 = r3.bind(r0)(r1);
        r1 = r6.bind(r0)(r1);
        r1 = 4;
        r1 = r5[r1];
        r1 = r3.bind(r0)(r1);
        r1 = r7.bind(r0)(r1);
        var _closure1_slot4 = r1;
        r1 = 5;
        r1 = r5[r1];
        r1 = r3.bind(r0)(r1);
        r1 = r7.bind(r0)(r1);
        var _closure1_slot5 = r1;
        r1 = 6;
        r1 = r5[r1];
        r1 = r3.bind(r0)(r1);
        r1 = r7.bind(r0)(r1);
        var _closure1_slot6 = r1;
        r1 = 7;
        r1 = r5[r1];
        r1 = r3.bind(r0)(r1);
        r1 = r7.bind(r0)(r1);
        var _closure1_slot7 = r1;
        r1 = 8;
        r1 = r5[r1];
        r1 = r3.bind(r0)(r1);
        r1 = r7.bind(r0)(r1);
        var _closure1_slot8 = r1;
        r1 = 9;
        r1 = r5[r1];
        r1 = r3.bind(r0)(r1);
        r6 = r6.bind(r0)(r1);
        var _closure1_slot9 = r6;
        r1 = 10;
        r1 = r5[r1];
        r1 = r3.bind(r0)(r1);
        var _closure1_slot10 = r1;
        r1 = ['accessible', 'accessibilityLabel', 'accessibilityState', 'allowFontScaling', 'aria-busy', 'aria-checked', 'aria-disabled', 'aria-expanded', 'aria-label', 'aria-selected', 'children', 'ellipsizeMode', 'disabled', 'id', 'nativeID', 'numberOfLines', 'onLongPress', 'onPress', 'onPressIn', 'onPressOut', 'onResponderGrant', 'onResponderMove', 'onResponderRelease', 'onResponderTerminate', 'onResponderTerminationRequest', 'onStartShouldSetResponder', 'pressRetentionOffset', 'selectable', 'selectionColor', 'suppressHighlighting', 'style'];
        var _closure1_slot11 = r1;
        r3 = r6.forwardRef;
        r1 = function(a0, a1) { // Environment: r4
            _fun3299: for(var _fun3299_ip = 0; ; ) switch(_fun3299_ip) {
case 0:
                r31 = a0;
                r17 = a1;
                r3 = undefined;
                r18 = undefined;
                r32 = undefined;
                r33 = r31.accessible;
                r28 = r31.accessibilityLabel;
                r22 = r31.accessibilityState;
                r39 = r31.allowFontScaling;
                r35 = r31.aria-busy;
                r34 = r31.aria-checked;
                r30 = r31.aria-disabled;
                r23 = r31.aria-expanded;
                r1 = r31.aria-label;
                r19 = r31.aria-selected;
                r4 = r31.children;
                r38 = r31.ellipsizeMode;
                r21 = r31.disabled;
                r2 = r31.id;
                r26 = r31.nativeID;
                r24 = r31.numberOfLines;
                r16 = r31.onLongPress;
                r15 = r31.onPress;
                r14 = r31.onPressIn;
                r13 = r31.onPressOut;
                r12 = r31.onResponderGrant;
                r11 = r31.onResponderMove;
                r10 = r31.onResponderRelease;
                r9 = r31.onResponderTerminate;
                r8 = r31.onResponderTerminationRequest;
                r7 = r31.onStartShouldSetResponder;
                r6 = r31.pressRetentionOffset;
                r29 = r31.selectable;
                r25 = r31.selectionColor;
                r5 = r31.suppressHighlighting;
                r36 = r31.style;
                r20 = _closure1_slot3;
                r27 = r20.default;
                r20 = _closure1_slot11;
                r20 = r27.bind(r3)(r31, r20);
                r31 = null;
                if(!(r1 != r31)) { _fun3299_ip = 222; continue _fun3299 }
case 219:
                r28 = r1;
case 222:
                if(!(r35 == r31)) { _fun3299_ip = 245; continue _fun3299 }
case 226:
                if(!(r34 == r31)) { _fun3299_ip = 245; continue _fun3299 }
case 230:
                if(!(r30 == r31)) { _fun3299_ip = 245; continue _fun3299 }
case 234:
                if(!(r23 == r31)) { _fun3299_ip = 245; continue _fun3299 }
case 238:
                r27 = r22;
                if(!(r19 != r31)) { _fun3299_ip = 358; continue _fun3299 }
case 245:
                if(!(r22 == r31)) { _fun3299_ip = 280; continue _fun3299 }
case 249:
                r1 = {};
                r1['busy'] = r35;
                r1['checked'] = r34;
                r1['disabled'] = r30;
                r1['expanded'] = r23;
                r1['selected'] = r19;
                r27 = r1;
                _fun3299_ip = 358; continue _fun3299;
case 280:
                r1 = {};
                if(!(r35 == r31)) { _fun3299_ip = 292; continue _fun3299 }
case 286:
                r35 = r22.busy;
case 292:
                r1['busy'] = r35;
                if(!(r34 == r31)) { _fun3299_ip = 307; continue _fun3299 }
case 301:
                r34 = r22.checked;
case 307:
                r1['checked'] = r34;
                if(!(r30 == r31)) { _fun3299_ip = 321; continue _fun3299 }
case 316:
                r30 = r22.disabled;
case 321:
                r1['disabled'] = r30;
                if(!(r23 == r31)) { _fun3299_ip = 335; continue _fun3299 }
case 329:
                r23 = r22.expanded;
case 335:
                r1['expanded'] = r23;
                if(!(r19 == r31)) { _fun3299_ip = 350; continue _fun3299 }
case 344:
                r19 = r22.selected;
case 350:
                r1['selected'] = r19;
                r27 = r1;
case 358:
                r1 = r27 == r31;
                r19 = undefined;
                if(r1) { _fun3299_ip = 372; continue _fun3299 }
case 367:
                r19 = r27.disabled;
case 372:
                r34 = r19;
                if(!(r21 != r31)) { _fun3299_ip = 382; continue _fun3299 }
case 379:
                r34 = r21;
case 382:
                r1 = r15 != r31;
                if(r1) { _fun3299_ip = 393; continue _fun3299 }
case 389:
                r1 = r16 != r31;
case 393:
                if(r1) { _fun3299_ip = 400; continue _fun3299 }
case 396:
                r1 = r7 != r31;
case 400:
                if(!r1) { _fun3299_ip = 409; continue _fun3299 }
case 403:
                r22 = true;
                r1 = r34 !== r22;
case 409:
                r22 = r25 != r31;
                r23 = undefined;
                if(!r22) { _fun3299_ip = 432; continue _fun3299 }
case 418:
                r22 = _closure1_slot6;
                r22 = r22.default;
                r23 = r22.bind(r3)(r25);
case 432:
                r25 = r24;
                if(!(r24 != r31)) { _fun3299_ip = 450; continue _fun3299 }
case 439:
                r22 = 0;
                r25 = r24;
                if(!(!(r25 >= r22))) { _fun3299_ip = 450; continue _fun3299 }
case 448:
                r25 = 0;
case 450:
                r22 = _closure1_slot5;
                r22 = r22.default;
                r37 = r22.bind(r3)(r36);
                r22 = r36;
                r24 = r29;
                if(!(r37 != r31)) { _fun3299_ip = 647; continue _fun3299 }
case 477:
                r30 = r37.fontWeight;
                r35 = typeof r30;
                r30 = 'number';
                r41 = null;
                if(!(r35 === r30)) { _fun3299_ip = 522; continue _fun3299 }
case 496:
                r30 = {};
                r40 = r37.fontWeight;
                r35 = r40.toString;
                r35 = r35.bind(r40)();
                r30['fontWeight'] = r35;
                r41 = r30;
case 522:
                r30 = r37.userSelect;
                r40 = r41;
                if(!(r30 != r31)) { _fun3299_ip = 569; continue _fun3299 }
case 535:
                r35 = _closure1_slot14;
                r30 = r37.userSelect;
                r35 = r35[r30];
                r30 = r41;
                if(r41) { _fun3299_ip = 557; continue _fun3299 }
case 555:
                r30 = {};
case 557:
                r30['userSelect'] = r3;
                r40 = r30;
                r29 = r35;
case 569:
                r30 = r37.verticalAlign;
                r35 = r40;
                if(!(r30 != r31)) { _fun3299_ip = 619; continue _fun3299 }
case 582:
                r30 = r40;
                if(r40) { _fun3299_ip = 590; continue _fun3299 }
case 588:
                r30 = {};
case 590:
                r40 = _closure1_slot15;
                r37 = r37.verticalAlign;
                r37 = r40[r37];
                r30['textAlignVertical'] = r37;
                r30['verticalAlign'] = r3;
                r35 = r30;
case 619:
                r22 = r36;
                r24 = r29;
                if(!(r35 != r31)) { _fun3299_ip = 647; continue _fun3299 }
case 629:
                r30 = new Array(2);
                r30[0] = r36;
                r30[1] = r35;
                r22 = r30;
                r24 = r29;
case 647:
                if(!(r2 != r31)) { _fun3299_ip = 654; continue _fun3299 }
case 651:
                r26 = r2;
case 654:
                r2 = _closure1_slot9;
                r29 = r2.useContext;
                r2 = _closure1_slot8;
                r2 = r2.default;
                r2 = r29.bind(r3)(r2);
                if(r2) { _fun3299_ip = 1305; continue _fun3299 }
case 684:
                r41 = r27;
                if(!(r34 !== r19)) { _fun3299_ip = 745; continue _fun3299 }
case 691:
                if(!(r34 != r31)) { _fun3299_ip = 701; continue _fun3299 }
case 695:
                r2 = false;
                if(!(r34 === r2)) { _fun3299_ip = 717; continue _fun3299 }
case 701:
                r41 = r27;
                if(!(r19 != r31)) { _fun3299_ip = 745; continue _fun3299 }
case 708:
                r2 = false;
                r41 = r27;
                if(!(r19 !== r2)) { _fun3299_ip = 745; continue _fun3299 }
case 717:
                r2 = global;
                r30 = r2.Object;
                r29 = r30.assign;
                r19 = {};
                r19['disabled'] = r34;
                r2 = {};
                r41 = r29.bind(r30)(r2, r27, r19);
case 745:
                r2 = _closure1_slot7;
                r30 = r2.default;
                r29 = r30.select;
                r2 = {};
                r19 = false;
                r35 = r33 !== r19;
                r2['ios'] = r35;
                r35 = r33;
                if(!(r35 == r31)) { _fun3299_ip = 794; continue _fun3299 }
case 780:
                r36 = r15 != r31;
                if(r36) { _fun3299_ip = 791; continue _fun3299 }
case 787:
                r36 = r16 != r31;
case 791:
                r35 = r36;
case 794:
                r2['android'] = r35;
                r2['default'] = r33;
                r40 = r29.bind(r30)(r2);
                r2 = _closure1_slot10;
                r33 = r2.jsx;
                if(r1) { _fun3299_ip = 961; continue _fun3299 }
case 823:
                r29 = _closure1_slot0;
                r30 = _closure1_slot1;
                r2 = 11;
                r2 = r30[r2];
                r2 = r29.bind(r3)(r2);
                r29 = r2.NativeText;
                r2 = global;
                r36 = r2.Object;
                r35 = r36.assign;
                r30 = {};
                r30['accessibilityLabel'] = r28;
                r30['accessibilityState'] = r41;
                r30['accessible'] = r40;
                r2 = r39 !== r19;
                r30['allowFontScaling'] = r2;
                r30['disabled'] = r34;
                r37 = r38 != r31;
                r2 = 'tail';
                if(!r37) { _fun3299_ip = 905; continue _fun3299 }
case 902:
                r2 = r38;
case 905:
                r30['ellipsizeMode'] = r2;
                r30['nativeID'] = r26;
                r30['numberOfLines'] = r25;
                r30['ref'] = r17;
                r30['selectable'] = r24;
                r30['selectionColor'] = r23;
                r30['style'] = r22;
                r30['children'] = r4;
                r2 = {};
                r2 = r35.bind(r36)(r2, r20, r30);
                r2 = r33.bind(r3)(r29, r2);
                _fun3299_ip = 1145; continue _fun3299;
case 961:
                r30 = _closure1_slot13;
                r29 = {};
                r29['ref'] = r17;
                r35 = global;
                r37 = r35.Object;
                r36 = r37.assign;
                r35 = {};
                r35['accessibilityLabel'] = r28;
                r35['accessibilityState'] = r41;
                r35['accessible'] = r40;
                r39 = r39 !== r19;
                r35['allowFontScaling'] = r39;
                r35['disabled'] = r34;
                r39 = r38 != r31;
                r34 = 'tail';
                if(!r39) { _fun3299_ip = 1027; continue _fun3299 }
case 1024:
                r34 = r38;
case 1027:
                r35['ellipsizeMode'] = r34;
                r35['nativeID'] = r26;
                r35['numberOfLines'] = r25;
                r35['selectable'] = r24;
                r35['selectionColor'] = r23;
                r35['style'] = r22;
                r35['children'] = r4;
                r34 = {};
                r34 = r36.bind(r37)(r34, r20, r35);
                r29['textProps'] = r34;
                r34 = {};
                r34['onLongPress'] = r16;
                r34['onPress'] = r15;
                r34['onPressIn'] = r14;
                r34['onPressOut'] = r13;
                r34['onResponderGrant'] = r12;
                r34['onResponderMove'] = r11;
                r34['onResponderRelease'] = r10;
                r34['onResponderTerminate'] = r9;
                r34['onResponderTerminationRequest'] = r8;
                r34['onStartShouldSetResponder'] = r7;
                r34['pressRetentionOffset'] = r6;
                r34['suppressHighlighting'] = r5;
                r29['textPressabilityProps'] = r34;
                r2 = r33.bind(r3)(r30, r29);
case 1145:
                if(!(r4 != r31)) { _fun3299_ip = 1303; continue _fun3299 }
case 1152:
                r29 = global;
                r30 = r29.Array;
                r29 = r30.isArray;
                r29 = r29.bind(r30)(r4);
                if(!r29) { _fun3299_ip = 1185; continue _fun3299 }
case 1173:
                r30 = r4.length;
                r29 = 3;
                if(!(!(r30 <= r29))) { _fun3299_ip = 1198; continue _fun3299 }
case 1185:
                r30 = typeof r4;
                r29 = 'object';
                if(!(r30 !== r29)) { _fun3299_ip = 1259; continue _fun3299 }
case 1196:
                return r2;
case 1198:
                r18 = false;
                r30 = r4;
                r29 = r30[Symbol.iterator];
                r30 = r29().next;
                r19 = 'object';
case 1210:
                r33 = r30().value;
                r34 = r29;
                if(!(r34 !== r3)) { _fun3299_ip = 1254; continue _fun3299 }
case 1221: // try_start_0
                r32 = r33;
                if(!(r33 != r31)) { _fun3299_ip = 1238; continue _fun3299 }
case 1228:
                r33 = r32;
                r33 = typeof r33;
                if(!(r33 !== r19)) { _fun3299_ip = 1240; continue _fun3299 }
case 1238: // try_end0
                _fun3299_ip = 1210; continue _fun3299;
case 1240: // try_start_1
                r18 = true;
case 1242: // try_end1
                r29.return();
                _fun3299_ip = 1254; continue _fun3299;
case 1247: // catch_target0 // catch_target1
                CatchBlockStart(arg_register=19);
                r29.return();
                throw r19;
case 1254:
                if(r18) { _fun3299_ip = 1259; continue _fun3299 }
case 1257:
                return r2;
case 1259:
                r18 = _closure1_slot10;
                r29 = r18.jsx;
                r18 = _closure1_slot8;
                r18 = r18.default;
                r19 = r18.Provider;
                r18 = {};
                r30 = true;
                r18['value'] = r30;
                r18['children'] = r2;
                r18 = r29.bind(r3)(r19, r18);
                return r18;
case 1303:
                return r2;
case 1305:
                r2 = _closure1_slot10;
                r2 = r2.jsx;
                if(r1) { _fun3299_ip = 1419; continue _fun3299 }
case 1317:
                r18 = _closure1_slot0;
                r19 = _closure1_slot1;
                r1 = 11;
                r1 = r19[r1];
                r1 = r18.bind(r3)(r1);
                r18 = r1.NativeVirtualText;
                r1 = global;
                r30 = r1.Object;
                r29 = r30.assign;
                r19 = {};
                r19['accessibilityLabel'] = r28;
                r19['accessibilityState'] = r27;
                r19['nativeID'] = r26;
                r19['numberOfLines'] = r25;
                r19['ref'] = r17;
                r19['selectable'] = r24;
                r19['selectionColor'] = r23;
                r19['style'] = r22;
                r19['disabled'] = r21;
                r19['children'] = r4;
                r1 = {};
                r1 = r29.bind(r30)(r1, r20, r19);
                r1 = r2.bind(r3)(r18, r1);
                return r1;
case 1419:
                r1 = _closure1_slot12;
                r0 = {};
                r0['ref'] = r17;
                r17 = global;
                r19 = r17.Object;
                r18 = r19.assign;
                r17 = {};
                r17['accessibilityLabel'] = r28;
                r17['accessibilityState'] = r27;
                r17['nativeID'] = r26;
                r17['numberOfLines'] = r25;
                r17['selectable'] = r24;
                r17['selectionColor'] = r23;
                r17['style'] = r22;
                r17['disabled'] = r21;
                r17['children'] = r4;
                r4 = {};
                r4 = r18.bind(r19)(r4, r20, r17);
                r0['textProps'] = r4;
                r4 = {};
                r4['onLongPress'] = r16;
                r4['onPress'] = r15;
                r4['onPressIn'] = r14;
                r4['onPressOut'] = r13;
                r4['onResponderGrant'] = r12;
                r4['onResponderMove'] = r11;
                r4['onResponderRelease'] = r10;
                r4['onResponderTerminate'] = r9;
                r4['onResponderTerminationRequest'] = r8;
                r4['onStartShouldSetResponder'] = r7;
                r4['pressRetentionOffset'] = r6;
                r4['suppressHighlighting'] = r5;
                r0['textPressabilityProps'] = r4;
                r0 = r2.bind(r3)(r1, r0);
                return r0;
            }
        };
        r1 = r3.bind(r6)(r1);
        r3 = 'Text';
        r1['displayName'] = r3;
        r5 = r6.forwardRef;
        r3 = function(a0, a1) { // Environment: r4
            r0 = a0;
            r8 = r0.textProps;
            r2 = r0.textPressabilityProps;
            r0 = _closure1_slot17;
            r3 = undefined;
            r4 = r0.bind(r3)(r2);
            r0 = _closure1_slot2;
            r2 = r0.default;
            r0 = 2;
            r4 = r2.bind(r3)(r4, r0);
            r0 = 0;
            r0 = r4[r0];
            r2 = 1;
            r10 = r4[r2];
            r2 = _closure1_slot10;
            r2 = r2.jsx;
            r4 = _closure1_slot0;
            r5 = _closure1_slot1;
            r1 = 11;
            r1 = r5[r1];
            r1 = r4.bind(r3)(r1);
            r1 = r1.NativeVirtualText;
            r4 = global;
            r6 = r4.Object;
            r5 = r6.assign;
            r4 = {};
            r4['isHighlighted'] = r0;
            r0 = true;
            r4['isPressable'] = r0;
            r0 = a1;
            r4['ref'] = r0;
            r12 = {};
            r13 = r6;
            r11 = r8;
            r9 = r4;
            r0 = r13[r5](r12, r11, r10, r9, r8);
            r0 = r2.bind(r3)(r1, r0);
            return r0;
        };
        r3 = r5.bind(r6)(r3);
        var _closure1_slot12 = r3;
        r5 = r6.forwardRef;
        r3 = function(a0, a1) { // Environment: r4
            r0 = a0;
            r8 = r0.textProps;
            r2 = r0.textPressabilityProps;
            r0 = _closure1_slot17;
            r3 = undefined;
            r4 = r0.bind(r3)(r2);
            r0 = _closure1_slot2;
            r2 = r0.default;
            r0 = 2;
            r4 = r2.bind(r3)(r4, r0);
            r0 = 0;
            r0 = r4[r0];
            r2 = 1;
            r10 = r4[r2];
            r2 = _closure1_slot10;
            r2 = r2.jsx;
            r4 = _closure1_slot0;
            r5 = _closure1_slot1;
            r1 = 11;
            r1 = r5[r1];
            r1 = r4.bind(r3)(r1);
            r1 = r1.NativeText;
            r4 = global;
            r6 = r4.Object;
            r5 = r6.assign;
            r4 = {};
            r4['isHighlighted'] = r0;
            r0 = true;
            r4['isPressable'] = r0;
            r0 = a1;
            r4['ref'] = r0;
            r12 = {};
            r13 = r6;
            r11 = r8;
            r9 = r4;
            r0 = r13[r5](r12, r11, r10, r9, r8);
            r0 = r2.bind(r3)(r1, r0);
            return r0;
        };
        r3 = r5.bind(r6)(r3);
        var _closure1_slot13 = r3;
        r3 = {'auto': true, 'text': true, 'none': false, 'contain': true, 'all': true};
        var _closure1_slot14 = r3;
        r3 = {'auto': 'auto', 'top': 'top', 'bottom': 'bottom', 'middle': 'center'};
        var _closure1_slot15 = r3;
        r2['default'] = r1;
        return r0;
    };
    r6 = 285;
    r5 = [1, 38, 203, 286, 287, 128, 89, 33, 249, 119, 251, 296];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun3302: for(var _fun3302_ip = 0; ; ) switch(_fun3302_ip) {
case 0:
            r2 = a1;
            r6 = a5;
            r3 = a6;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun3303: for(var _fun3303_ip = 0; ; ) switch(_fun3303_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun3303_ip = 104; continue _fun3303 }
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
                        _fun3304: for(var _fun3304_ip = 0; ; ) switch(_fun3304_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun3304_ip = 15; continue _fun3304 }
case 9:
                            r0 = _closure2_slot0;
                            _fun3304_ip = 19; continue _fun3304;
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
            r4 = r3[r0];
            r0 = undefined;
            r5 = r2.bind(r0)(r4);
            r15 = global;
            r9 = r15.Object;
            r8 = r9.defineProperty;
            r7 = {};
            r4 = true;
            r7['value'] = r4;
            r4 = '__esModule';
            r4 = r8.bind(r9)(r6, r4, r7);
            r4 = function(a0) { // Original name: PressabilityDebugView, environment: r1
                r0 = null;
                return r0;
            };
            r6['PressabilityDebugView'] = r4;
            r4 = function() { // Original name: isEnabled, environment: r1
                r0 = false;
                return r0;
            };
            r6['isEnabled'] = r4;
            r4 = function(a0) { // Original name: setEnabled, environment: r1
                r0 = undefined;
                return r0;
            };
            r6['setEnabled'] = r4;
            r4 = 1;
            r4 = r3[r4];
            r4 = r2.bind(r0)(r4);
            r4 = r5.bind(r0)(r4);
            r4 = 2;
            r4 = r3[r4];
            r4 = r2.bind(r0)(r4);
            r4 = r5.bind(r0)(r4);
            r4 = 3;
            r4 = r3[r4];
            r4 = r2.bind(r0)(r4);
            if(!r4) { _fun3302_ip = 158; continue _fun3302 }
case 147:
            r5 = r4.__esModule;
            if(r5) { _fun3302_ip = 416; continue _fun3302 }
case 158:
            r14 = null;
            if(!(r14 !== r4)) { _fun3302_ip = 410; continue _fun3302 }
case 167:
            r6 = typeof r4;
            r5 = 'object';
            if(!(r5 !== r6)) { _fun3302_ip = 189; continue _fun3302 }
case 178:
            r5 = 'function';
            if(!(r5 === r6)) { _fun3302_ip = 410; continue _fun3302 }
case 189:
            r1 = _closure1_slot0;
            r5 = r1.bind(r0)(r0);
            if(!r5) { _fun3302_ip = 217; continue _fun3302 }
case 201:
            r1 = r5.has;
            r1 = r1.bind(r5)(r4);
            if(r1) { _fun3302_ip = 398; continue _fun3302 }
case 217:
            r6 = Object.create(r14);
            r1 = r15.Object;
            r13 = r1.defineProperty;
            if(!r13) { _fun3302_ip = 245; continue _fun3302 }
case 234:
            r1 = r15.Object;
            r13 = r1.getOwnPropertyDescriptor;
case 245:
            r11 = r4;
            r7 = 'default';
            r1 = undefined;
            for(r8 in r11)
case 262:
            {
case 271:
                r19 = r8;
                if(r7 === r19) { _fun3302_ip = 262; continue _fun3302 }
case 278:
                r16 = {};
                r17 = r16.hasOwnProperty;
                r16 = r17.call;
                r16 = r16.bind(r17)(r4, r19);
                if(!r16) { _fun3302_ip = 262; continue _fun3302 }
case 299:
                r16 = null;
                if(!r13) { _fun3302_ip = 321; continue _fun3302 }
case 304:
                r18 = r15.Object;
                r17 = r18.getOwnPropertyDescriptor;
                r16 = r17.bind(r18)(r4, r19);
case 321:
                if(!r16) { _fun3302_ip = 340; continue _fun3302 }
case 324:
                r17 = r16.get;
                if(r17) { _fun3302_ip = 353; continue _fun3302 }
case 332:
                r17 = r16.set;
                if(r17) { _fun3302_ip = 353; continue _fun3302 }
case 340:
                r17 = r4[r19];
                r6[r19] = r17;
                r1 = r16;
                _fun3302_ip = 262; continue _fun3302;
case 353:
                r18 = r15.Object;
                r17 = r18.defineProperty;
                r17 = r17.bind(r18)(r6, r19, r16);
                r1 = r16;
                _fun3302_ip = 262; continue _fun3302;
            }
case 376:
            r6['default'] = r4;
            if(!r5) { _fun3302_ip = 416; continue _fun3302 }
case 385:
            r1 = r5.set;
            r1 = r1.bind(r5)(r4, r6);
            _fun3302_ip = 416; continue _fun3302;
case 398:
            r1 = r5.get;
            r1 = r1.bind(r5)(r4);
            _fun3302_ip = 416; continue _fun3302;
case 410:
            r1 = {};
            r1['default'] = r4;
case 416:
            r1 = 4;
            r1 = r3[r1];
            r1 = r2.bind(r0)(r1);
            return r0;
        }
    };
    r6 = 286;
    r5 = [1, 248, 90, 119, 251];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r3 = a1;
        r6 = a5;
        r4 = a6;
        r0 = 0;
        r1 = r4[r0];
        r0 = undefined;
        r5 = r3.bind(r0)(r1);
        r1 = global;
        r9 = r1.Object;
        r8 = r9.defineProperty;
        r7 = {};
        r1 = true;
        r7['value'] = r1;
        r1 = '__esModule';
        r1 = r8.bind(r9)(r6, r1, r7);
        r1 = function(a0) { // Original name: usePressability, environment: r2
            _fun3309: for(var _fun3309_ip = 0; ; ) switch(_fun3309_ip) {
case 0:
                r4 = a0;
                var _closure2_slot0 = r4;
                r0 = _closure1_slot1;
                r2 = r0.useRef;
                r5 = undefined;
                r0 = null;
                r2 = r2.bind(r5)(r0);
                if(!(r4 != r0)) { _fun3309_ip = 81; continue _fun3309 }
case 34:
                r6 = r2.current;
                if(!(r6 == r0)) { _fun3309_ip = 81; continue _fun3309 }
case 43:
                r6 = _closure1_slot0;
                r6 = r6.default;
                r7 = r6.prototype;
                r7 = Object.create(r7, {constructor: {value: r6}});
                r10 = r7;
                r9 = r4;
                r6 = new r10[r6](r9, r8);
                r6 = r6 instanceof Object ? r6 : r7;
                r2['current'] = r6;
case 81:
                r2 = r2.current;
                var _closure2_slot1 = r2;
                r6 = _closure1_slot1;
                r7 = r6.useEffect;
                r6 = new Array(2);
                r6[0] = r4;
                r6[1] = r2;
                r4 = function() { // Environment: r1
                    _fun3310: for(var _fun3310_ip = 0; ; ) switch(_fun3310_ip) {
case 0:
                        r1 = _closure2_slot0;
                        r2 = null;
                        if(!(r1 != r2)) { _fun3310_ip = 40; continue _fun3310 }
case 13:
                        r1 = _closure2_slot1;
                        if(!(r1 != r2)) { _fun3310_ip = 40; continue _fun3310 }
case 21:
                        r2 = _closure2_slot1;
                        r1 = r2.configure;
                        r0 = _closure2_slot0;
                        r0 = r1.bind(r2)(r0);
case 40:
                        r0 = undefined;
                        return r0;
                    }
                };
                r4 = r7.bind(r5)(r4, r6);
                r3 = _closure1_slot1;
                r4 = r3.useEffect;
                r3 = new Array(1);
                r3[0] = r2;
                r1 = function() { // Environment: r1
                    _fun3311: for(var _fun3311_ip = 0; ; ) switch(_fun3311_ip) {
case 0:
                        r1 = _closure2_slot1;
                        r0 = null;
                        if(!(r1 == r0)) { _fun3311_ip = 17; continue _fun3311 }
case 13:
                        r0 = undefined;
                        return r0;
case 17:
                        r0 = function() { // Environment: r0
                            r1 = _closure2_slot1;
                            r0 = r1.reset;
                            r0 = r0.bind(r1)();
                            r0 = undefined;
                            return r0;
                        };
                        return r0;
                    }
                };
                r1 = r4.bind(r5)(r1, r3);
                r1 = r2 == r0;
                r0 = null;
                if(r1) { _fun3309_ip = 169; continue _fun3309 }
case 159:
                r1 = r2.getEventHandlers;
                r0 = r1.bind(r2)();
case 169:
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
        var _closure1_slot1 = r1;
        return r0;
    };
    r6 = 287;
    r5 = [1, 288, 119];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r6 = a1;
        r3 = a5;
        r7 = a6;
        var _closure1_slot0 = r6;
        var _closure1_slot1 = r7;
        r0 = function(a0) { // Original name: normalizeDelay, environment: r2
            _fun3314: for(var _fun3314_ip = 0; ; ) switch(_fun3314_ip) {
case 0:
                r4 = a0;
                r6 = undefined;
                r1 = undefined;
                r2 = arguments.length;
                r0 = 1;
                r2 = r2 > r0;
                r3 = 0;
                if(!r2) { _fun3314_ip = 36; continue _fun3314 }
case 22:
                r2 = arguments[r0];
                r3 = 0;
                if(!(r2 !== r6)) { _fun3314_ip = 36; continue _fun3314 }
case 32:
                r3 = arguments[r0];
case 36:
                r2 = arguments.length;
                r0 = 2;
                r5 = r2 > r0;
                r2 = 0;
                if(!r5) { _fun3314_ip = 65; continue _fun3314 }
case 51:
                r5 = arguments[r0];
                r2 = 0;
                if(!(r5 !== r6)) { _fun3314_ip = 65; continue _fun3314 }
case 61:
                r2 = arguments[r0];
case 65:
                r0 = global;
                r1 = r0.Math;
                r0 = r1.max;
                r5 = null;
                if(!(r4 != r5)) { _fun3314_ip = 87; continue _fun3314 }
case 84:
                r2 = r4;
case 87:
                r0 = r0.bind(r1)(r3, r2);
                return r0;
            }
        };
        var _closure1_slot18 = r0;
        r0 = function(a0) { // Original name: convertPointerEventToMouseEvent, environment: r2
            r4 = a0;
            r0 = r4.nativeEvent;
            r6 = r0.clientX;
            r5 = r0.clientY;
            r0 = global;
            r3 = r0.Object;
            r2 = r3.assign;
            r1 = {};
            r0 = {};
            r0['clientX'] = r6;
            r0['clientY'] = r5;
            r0['pageX'] = r6;
            r0['pageY'] = r5;
            r5 = r4.timeStamp;
            r0['timestamp'] = r5;
            r1['nativeEvent'] = r0;
            r0 = {};
            r0 = r2.bind(r3)(r0, r4, r1);
            return r0;
        };
        var _closure1_slot19 = r0;
        r0 = 0;
        r1 = r7[r0];
        r0 = undefined;
        r5 = r6.bind(r0)(r1);
        r1 = global;
        r10 = r1.Object;
        r9 = r10.defineProperty;
        r8 = {};
        r4 = true;
        r8['value'] = r4;
        r4 = '__esModule';
        r4 = r9.bind(r10)(r3, r4, r8);
        r3['default'] = r0;
        r4 = 1;
        r4 = r7[r4];
        r4 = r6.bind(r0)(r4);
        r4 = r5.bind(r0)(r4);
        var _closure1_slot2 = r4;
        r4 = 2;
        r4 = r7[r4];
        r4 = r6.bind(r0)(r4);
        r4 = r5.bind(r0)(r4);
        var _closure1_slot3 = r4;
        r4 = 3;
        r4 = r7[r4];
        r4 = r6.bind(r0)(r4);
        r4 = r5.bind(r0)(r4);
        var _closure1_slot4 = r4;
        r4 = 4;
        r4 = r7[r4];
        r4 = r6.bind(r0)(r4);
        r4 = r5.bind(r0)(r4);
        var _closure1_slot5 = r4;
        r4 = 5;
        r4 = r7[r4];
        r4 = r6.bind(r0)(r4);
        r4 = r5.bind(r0)(r4);
        var _closure1_slot6 = r4;
        r4 = 6;
        r4 = r7[r4];
        r4 = r6.bind(r0)(r4);
        r4 = r5.bind(r0)(r4);
        var _closure1_slot7 = r4;
        r4 = 7;
        r4 = r7[r4];
        r4 = r6.bind(r0)(r4);
        r4 = r5.bind(r0)(r4);
        var _closure1_slot8 = r4;
        r4 = 8;
        r4 = r7[r4];
        r4 = r6.bind(r0)(r4);
        r4 = r5.bind(r0)(r4);
        var _closure1_slot9 = r4;
        r5 = r1.Object;
        r4 = r5.freeze;
        r1 = {};
        r6 = {'DELAY': 'ERROR', 'RESPONDER_GRANT': 'RESPONDER_INACTIVE_PRESS_IN', 'RESPONDER_RELEASE': 'ERROR', 'RESPONDER_TERMINATED': 'ERROR', 'ENTER_PRESS_RECT': 'ERROR', 'LEAVE_PRESS_RECT': 'ERROR', 'LONG_PRESS_DETECTED': 'ERROR'};
        r1['NOT_RESPONDER'] = r6;
        r6 = {'DELAY': 'RESPONDER_ACTIVE_PRESS_IN', 'RESPONDER_GRANT': 'ERROR', 'RESPONDER_RELEASE': 'NOT_RESPONDER', 'RESPONDER_TERMINATED': 'NOT_RESPONDER', 'ENTER_PRESS_RECT': 'RESPONDER_INACTIVE_PRESS_IN', 'LEAVE_PRESS_RECT': 'RESPONDER_INACTIVE_PRESS_OUT', 'LONG_PRESS_DETECTED': 'ERROR'};
        r1['RESPONDER_INACTIVE_PRESS_IN'] = r6;
        r6 = {'DELAY': 'RESPONDER_ACTIVE_PRESS_OUT', 'RESPONDER_GRANT': 'ERROR', 'RESPONDER_RELEASE': 'NOT_RESPONDER', 'RESPONDER_TERMINATED': 'NOT_RESPONDER', 'ENTER_PRESS_RECT': 'RESPONDER_INACTIVE_PRESS_IN', 'LEAVE_PRESS_RECT': 'RESPONDER_INACTIVE_PRESS_OUT', 'LONG_PRESS_DETECTED': 'ERROR'};
        r1['RESPONDER_INACTIVE_PRESS_OUT'] = r6;
        r6 = {'DELAY': 'ERROR', 'RESPONDER_GRANT': 'ERROR', 'RESPONDER_RELEASE': 'NOT_RESPONDER', 'RESPONDER_TERMINATED': 'NOT_RESPONDER', 'ENTER_PRESS_RECT': 'RESPONDER_ACTIVE_PRESS_IN', 'LEAVE_PRESS_RECT': 'RESPONDER_ACTIVE_PRESS_OUT', 'LONG_PRESS_DETECTED': 'RESPONDER_ACTIVE_LONG_PRESS_IN'};
        r1['RESPONDER_ACTIVE_PRESS_IN'] = r6;
        r6 = {'DELAY': 'ERROR', 'RESPONDER_GRANT': 'ERROR', 'RESPONDER_RELEASE': 'NOT_RESPONDER', 'RESPONDER_TERMINATED': 'NOT_RESPONDER', 'ENTER_PRESS_RECT': 'RESPONDER_ACTIVE_PRESS_IN', 'LEAVE_PRESS_RECT': 'RESPONDER_ACTIVE_PRESS_OUT', 'LONG_PRESS_DETECTED': 'ERROR'};
        r1['RESPONDER_ACTIVE_PRESS_OUT'] = r6;
        r6 = {'DELAY': 'ERROR', 'RESPONDER_GRANT': 'ERROR', 'RESPONDER_RELEASE': 'NOT_RESPONDER', 'RESPONDER_TERMINATED': 'NOT_RESPONDER', 'ENTER_PRESS_RECT': 'RESPONDER_ACTIVE_LONG_PRESS_IN', 'LEAVE_PRESS_RECT': 'RESPONDER_ACTIVE_LONG_PRESS_OUT', 'LONG_PRESS_DETECTED': 'RESPONDER_ACTIVE_LONG_PRESS_IN'};
        r1['RESPONDER_ACTIVE_LONG_PRESS_IN'] = r6;
        r6 = {'DELAY': 'ERROR', 'RESPONDER_GRANT': 'ERROR', 'RESPONDER_RELEASE': 'NOT_RESPONDER', 'RESPONDER_TERMINATED': 'NOT_RESPONDER', 'ENTER_PRESS_RECT': 'RESPONDER_ACTIVE_LONG_PRESS_IN', 'LEAVE_PRESS_RECT': 'RESPONDER_ACTIVE_LONG_PRESS_OUT', 'LONG_PRESS_DETECTED': 'ERROR'};
        r1['RESPONDER_ACTIVE_LONG_PRESS_OUT'] = r6;
        r6 = {'DELAY': 'NOT_RESPONDER', 'RESPONDER_GRANT': 'RESPONDER_INACTIVE_PRESS_IN', 'RESPONDER_RELEASE': 'NOT_RESPONDER', 'RESPONDER_TERMINATED': 'NOT_RESPONDER', 'ENTER_PRESS_RECT': 'NOT_RESPONDER', 'LEAVE_PRESS_RECT': 'NOT_RESPONDER', 'LONG_PRESS_DETECTED': 'NOT_RESPONDER'};
        r1['ERROR'] = r6;
        r1 = r4.bind(r5)(r1);
        var _closure1_slot10 = r1;
        r1 = function(a0) { // Original name: isActiveSignal, environment: r2
            _fun3316: for(var _fun3316_ip = 0; ; ) switch(_fun3316_ip) {
case 0:
                r2 = a0;
                r0 = 'RESPONDER_ACTIVE_PRESS_IN';
                r0 = r2 === r0;
                if(r0) { _fun3316_ip = 22; continue _fun3316 }
case 14:
                r1 = 'RESPONDER_ACTIVE_LONG_PRESS_IN';
                r0 = r2 === r1;
case 22:
                return r0;
            }
        };
        var _closure1_slot11 = r1;
        r1 = function(a0) { // Original name: isActivationSignal, environment: r2
            _fun3317: for(var _fun3317_ip = 0; ; ) switch(_fun3317_ip) {
case 0:
                r2 = a0;
                r0 = 'RESPONDER_ACTIVE_PRESS_OUT';
                r0 = r2 === r0;
                if(r0) { _fun3317_ip = 22; continue _fun3317 }
case 14:
                r1 = 'RESPONDER_ACTIVE_PRESS_IN';
                r0 = r2 === r1;
case 22:
                return r0;
            }
        };
        var _closure1_slot12 = r1;
        r1 = function(a0) { // Original name: isPressInSignal, environment: r2
            _fun3318: for(var _fun3318_ip = 0; ; ) switch(_fun3318_ip) {
case 0:
                r2 = a0;
                r0 = 'RESPONDER_INACTIVE_PRESS_IN';
                r0 = r2 === r0;
                if(r0) { _fun3318_ip = 22; continue _fun3318 }
case 14:
                r1 = 'RESPONDER_ACTIVE_PRESS_IN';
                r0 = r2 === r1;
case 22:
                if(r0) { _fun3318_ip = 33; continue _fun3318 }
case 25:
                r1 = 'RESPONDER_ACTIVE_LONG_PRESS_IN';
                r0 = r2 === r1;
case 33:
                return r0;
            }
        };
        var _closure1_slot13 = r1;
        r1 = function(a0) { // Original name: isTerminalSignal, environment: r2
            _fun3319: for(var _fun3319_ip = 0; ; ) switch(_fun3319_ip) {
case 0:
                r2 = a0;
                r0 = 'RESPONDER_TERMINATED';
                r0 = r2 === r0;
                if(r0) { _fun3319_ip = 22; continue _fun3319 }
case 14:
                r1 = 'RESPONDER_RELEASE';
                r0 = r2 === r1;
case 22:
                return r0;
            }
        };
        var _closure1_slot14 = r1;
        r1 = {'bottom': 30, 'left': 20, 'right': 20, 'top': 20};
        var _closure1_slot15 = r1;
        r1 = 10;
        var _closure1_slot16 = r1;
        r1 = function() { // Environment: r2
            r4 = function(a0) { // Original name: Pressability, environment: r1
                r3 = this;
                var _closure3_slot0 = r3;
                r0 = _closure1_slot2;
                r4 = r0.default;
                r2 = _closure2_slot0;
                r0 = undefined;
                r2 = r4.bind(r0)(r3, r2);
                r2 = null;
                r3['_eventHandlers'] = r2;
                r3['_hoverInDelayTimeout'] = r2;
                r3['_hoverOutDelayTimeout'] = r2;
                r4 = false;
                r3['_isHovered'] = r4;
                r3['_longPressDelayTimeout'] = r2;
                r3['_pressDelayTimeout'] = r2;
                r3['_pressOutDelayTimeout'] = r2;
                r3['_responderID'] = r2;
                r3['_responderRegion'] = r2;
                r2 = 'NOT_RESPONDER';
                r3['_touchState'] = r2;
                r1 = function(a0, a1, a2, a3, a4, a5) { // Environment: r1
                    _fun3322: for(var _fun3322_ip = 0; ; ) switch(_fun3322_ip) {
case 0:
                        r4 = a2;
                        r5 = a3;
                        r3 = a4;
                        r2 = a5;
                        r0 = a0;
                        if(r0) { _fun3322_ip = 40; continue _fun3322 }
case 18:
                        r0 = a1;
                        if(r0) { _fun3322_ip = 40; continue _fun3322 }
case 24:
                        if(r4) { _fun3322_ip = 40; continue _fun3322 }
case 27:
                        if(r5) { _fun3322_ip = 40; continue _fun3322 }
case 30:
                        if(r3) { _fun3322_ip = 40; continue _fun3322 }
case 33:
                        if(r2) { _fun3322_ip = 40; continue _fun3322 }
case 36:
                        r0 = undefined;
                        return r0;
case 40:
                        r1 = _closure3_slot0;
                        r0 = {};
                        r5 = r2 + r5;
                        r0['bottom'] = r5;
                        r0['left'] = r3;
                        r3 = r3 + r4;
                        r0['right'] = r3;
                        r0['top'] = r2;
                        r1['_responderRegion'] = r0;
                        r0 = undefined;
                        return r0;
                    }
                };
                r3['_measureCallback'] = r1;
                r2 = r3.configure;
                r1 = a0;
                r1 = r2.bind(r3)(r1);
                return r0;
            };
            var _closure2_slot0 = r4;
            r0 = _closure1_slot3;
            r3 = r0.default;
            r0 = {};
            r2 = 'configure';
            r0['key'] = r2;
            r2 = function(a0) { // Original name: configure, environment: r1
                r1 = a0;
                r0 = this;
                r0['_config'] = r1;
                r0 = undefined;
                return r0;
            };
            r0['value'] = r2;
            r2 = new Array(16);
            r2[0] = r0;
            r0 = {};
            r5 = 'reset';
            r0['key'] = r5;
            r5 = function() { // Original name: reset, environment: r1
                r1 = this;
                r0 = r1._cancelHoverInDelayTimeout;
                r0 = r0.bind(r1)();
                r0 = r1._cancelHoverOutDelayTimeout;
                r0 = r0.bind(r1)();
                r0 = r1._cancelLongPressDelayTimeout;
                r0 = r0.bind(r1)();
                r0 = r1._cancelPressDelayTimeout;
                r0 = r0.bind(r1)();
                r0 = r1._cancelPressOutDelayTimeout;
                r0 = r0.bind(r1)();
                r0 = global;
                r3 = r0.Object;
                r2 = r3.freeze;
                r0 = {};
                r0 = r2.bind(r3)(r0);
                r1['_config'] = r0;
                r0 = undefined;
                return r0;
            };
            r0['value'] = r5;
            r2[1] = r0;
            r0 = {};
            r5 = 'getEventHandlers';
            r0['key'] = r5;
            r5 = function() { // Original name: getEventHandlers, environment: r1
                _fun3325: for(var _fun3325_ip = 0; ; ) switch(_fun3325_ip) {
case 0:
                    r0 = this;
                    r2 = r0._eventHandlers;
                    r1 = null;
                    if(!(r2 == r1)) { _fun3325_ip = 30; continue _fun3325 }
case 14:
                    r1 = r0._createEventHandlers;
                    r1 = r1.bind(r0)();
                    r0['_eventHandlers'] = r1;
case 30:
                    r0 = r0._eventHandlers;
                    return r0;
                }
            };
            r0['value'] = r5;
            r2[2] = r0;
            r0 = {};
            r5 = '_createEventHandlers';
            r0['key'] = r5;
            r5 = function() { // Original name: _createEventHandlers, environment: r1
                _fun3326: for(var _fun3326_ip = 0; ; ) switch(_fun3326_ip) {
case 0:
                    r1 = this;
                    var _closure3_slot0 = r1;
                    r5 = {};
                    r2 = function(a0) { // Original name: onBlur, environment: r0
                        _fun3327: for(var _fun3327_ip = 0; ; ) switch(_fun3327_ip) {
case 0:
                            r0 = _closure3_slot0;
                            r0 = r0._config;
                            r2 = r0.onBlur;
                            r0 = null;
                            if(!(r2 != r0)) { _fun3327_ip = 34; continue _fun3327 }
case 24:
                            r1 = undefined;
                            r0 = a0;
                            r0 = r2.bind(r1)(r0);
case 34:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r5['onBlur'] = r2;
                    r2 = function(a0) { // Original name: onFocus, environment: r0
                        _fun3328: for(var _fun3328_ip = 0; ; ) switch(_fun3328_ip) {
case 0:
                            r0 = _closure3_slot0;
                            r0 = r0._config;
                            r2 = r0.onFocus;
                            r0 = null;
                            if(!(r2 != r0)) { _fun3328_ip = 34; continue _fun3328 }
case 24:
                            r1 = undefined;
                            r0 = a0;
                            r0 = r2.bind(r1)(r0);
case 34:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r5['onFocus'] = r2;
                    r4 = {};
                    r2 = function() { // Original name: onStartShouldSetResponder, environment: r0
                        _fun3329: for(var _fun3329_ip = 0; ; ) switch(_fun3329_ip) {
case 0:
                            r0 = _closure3_slot0;
                            r0 = r0._config;
                            r0 = r0.disabled;
                            r1 = !r0;
                            r2 = null;
                            r0 = true;
                            if(!(r1 != r2)) { _fun3329_ip = 31; continue _fun3329 }
case 28:
                            r0 = r1;
case 31:
                            return r0;
                        }
                    };
                    r4['onStartShouldSetResponder'] = r2;
                    r2 = function(a0) { // Original name: onResponderGrant, environment: r0
                        _fun3330: for(var _fun3330_ip = 0; ; ) switch(_fun3330_ip) {
case 0:
                            r8 = a0;
                            var _closure4_slot0 = r8;
                            r0 = r8.persist;
                            r0 = r0.bind(r8)();
                            r3 = _closure3_slot0;
                            r2 = r3._cancelPressOutDelayTimeout;
                            r2 = r2.bind(r3)();
                            r2 = r8.currentTarget;
                            r3['_responderID'] = r2;
                            r2 = 'NOT_RESPONDER';
                            r3['_touchState'] = r2;
                            r4 = r3._receiveSignal;
                            r2 = 'RESPONDER_GRANT';
                            r2 = r4.bind(r3)(r2, r8);
                            r5 = _closure1_slot18;
                            r3 = r3._config;
                            r3 = r3.delayPressIn;
                            r4 = undefined;
                            r5 = r5.bind(r4)(r3);
                            r3 = 0;
                            if(!(!(r5 > r3))) { _fun3330_ip = 127; continue _fun3330 }
case 105:
                            r7 = _closure3_slot0;
                            r6 = r7._receiveSignal;
                            r3 = 'DELAY';
                            r3 = r6.bind(r7)(r3, r8);
                            _fun3330_ip = 156; continue _fun3330;
case 127:
                            r6 = _closure3_slot0;
                            r3 = global;
                            r7 = r3.setTimeout;
                            r3 = function() { // Environment: r1
                                r3 = _closure3_slot0;
                                r2 = r3._receiveSignal;
                                r1 = _closure4_slot0;
                                r0 = 'DELAY';
                                r0 = r2.bind(r3)(r0, r1);
                                r0 = undefined;
                                return r0;
                            };
                            r3 = r7.bind(r4)(r3, r5);
                            r6['_pressDelayTimeout'] = r3;
case 156:
                            r7 = _closure1_slot18;
                            r0 = _closure3_slot0;
                            r2 = r0._config;
                            r6 = r2.delayLongPress;
                            r2 = 500;
                            r3 = r2 - r5;
                            r2 = 10;
                            r2 = r7.bind(r4)(r6, r2, r3);
                            r3 = global;
                            r3 = r3.setTimeout;
                            r2 = r2 + r5;
                            r1 = function() { // Environment: r1
                                r2 = _closure3_slot0;
                                r1 = r2._handleLongPress;
                                r0 = _closure4_slot0;
                                r0 = r1.bind(r2)(r0);
                                r0 = undefined;
                                return r0;
                            };
                            r1 = r3.bind(r4)(r1, r2);
                            r0['_longPressDelayTimeout'] = r1;
                            r0 = r0._config;
                            r1 = r0.blockNativeResponder;
                            r0 = true;
                            r0 = r1 === r0;
                            return r0;
                        }
                    };
                    r4['onResponderGrant'] = r2;
                    r2 = function(a0) { // Original name: onResponderMove, environment: r0
                        _fun3333: for(var _fun3333_ip = 0; ; ) switch(_fun3333_ip) {
case 0:
                            r4 = a0;
                            r0 = _closure3_slot0;
                            r0 = r0._config;
                            r2 = r0.onPressMove;
                            r7 = null;
                            if(!(r2 != r7)) { _fun3333_ip = 34; continue _fun3333 }
case 27:
                            r0 = undefined;
                            r0 = r2.bind(r0)(r4);
case 34:
                            r0 = _closure3_slot0;
                            r6 = r0._responderRegion;
                            if(!(r6 != r7)) { _fun3333_ip = 273; continue _fun3333 }
case 51:
                            r3 = _closure1_slot17;
                            r0 = undefined;
                            r5 = r3.bind(r0)(r4);
                            if(!(r5 != r7)) { _fun3333_ip = 241; continue _fun3333 }
case 72:
                            r3 = _closure3_slot0;
                            r3 = r3._touchActivatePosition;
                            if(!(r3 != r7)) { _fun3333_ip = 172; continue _fun3333 }
case 86:
                            r3 = _closure3_slot0;
                            r7 = r3._touchActivatePosition;
                            r8 = r7.pageX;
                            r7 = r5.pageX;
                            r9 = r8 - r7;
                            r3 = r3._touchActivatePosition;
                            r7 = r3.pageY;
                            r3 = r5.pageY;
                            r8 = r7 - r3;
                            r3 = global;
                            r7 = r3.Math;
                            r3 = r7.hypot;
                            r3 = r3.bind(r7)(r9, r8);
                            r2 = _closure1_slot16;
                            if(!(r3 > r2)) { _fun3333_ip = 172; continue _fun3333 }
case 158:
                            r3 = _closure3_slot0;
                            r2 = r3._cancelLongPressDelayTimeout;
                            r2 = r2.bind(r3)();
case 172:
                            r3 = _closure3_slot0;
                            r2 = r3._isTouchWithinResponderRegion;
                            r2 = r2.bind(r3)(r5, r6);
                            r5 = _closure3_slot0;
                            if(r2) { _fun3333_ip = 223; continue _fun3333 }
case 195:
                            r2 = r5._cancelLongPressDelayTimeout;
                            r2 = r2.bind(r5)();
                            r3 = r5._receiveSignal;
                            r2 = 'LEAVE_PRESS_RECT';
                            r2 = r3.bind(r5)(r2, r4);
                            _fun3333_ip = 239; continue _fun3333;
case 223:
                            r3 = r5._receiveSignal;
                            r2 = 'ENTER_PRESS_RECT';
                            r2 = r3.bind(r5)(r2, r4);
case 239:
                            return r0;
case 241:
                            r3 = _closure3_slot0;
                            r1 = r3._cancelLongPressDelayTimeout;
                            r1 = r1.bind(r3)();
                            r2 = r3._receiveSignal;
                            r1 = 'LEAVE_PRESS_RECT';
                            r1 = r2.bind(r3)(r1, r4);
                            return r0;
case 273:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r4['onResponderMove'] = r2;
                    r2 = function(a0) { // Original name: onResponderRelease, environment: r0
                        r3 = _closure3_slot0;
                        r2 = r3._receiveSignal;
                        r1 = 'RESPONDER_RELEASE';
                        r0 = a0;
                        r0 = r2.bind(r3)(r1, r0);
                        r0 = undefined;
                        return r0;
                    };
                    r4['onResponderRelease'] = r2;
                    r2 = function(a0) { // Original name: onResponderTerminate, environment: r0
                        r3 = _closure3_slot0;
                        r2 = r3._receiveSignal;
                        r1 = 'RESPONDER_TERMINATED';
                        r0 = a0;
                        r0 = r2.bind(r3)(r1, r0);
                        r0 = undefined;
                        return r0;
                    };
                    r4['onResponderTerminate'] = r2;
                    r2 = function() { // Original name: onResponderTerminationRequest, environment: r0
                        _fun3336: for(var _fun3336_ip = 0; ; ) switch(_fun3336_ip) {
case 0:
                            r0 = _closure3_slot0;
                            r0 = r0._config;
                            r1 = r0.cancelable;
                            r0 = null;
                            r2 = r1 != r0;
                            r0 = true;
                            if(!r2) { _fun3336_ip = 32; continue _fun3336 }
case 29:
                            r0 = r1;
case 32:
                            return r0;
                        }
                    };
                    r4['onResponderTerminationRequest'] = r2;
                    r2 = function(a0) { // Original name: onClick, environment: r0
                        _fun3337: for(var _fun3337_ip = 0; ; ) switch(_fun3337_ip) {
case 0:
                            r2 = a0;
                            r1 = null;
                            if(!(r2 != r1)) { _fun3337_ip = 44; continue _fun3337 }
case 9:
                            r4 = r2.nativeEvent;
                            if(!(r4 != r1)) { _fun3337_ip = 44; continue _fun3337 }
case 18:
                            r0 = r4.hasOwnProperty;
                            if(!(r0 != r1)) { _fun3337_ip = 44; continue _fun3337 }
case 27:
                            r3 = r4.hasOwnProperty;
                            r0 = 'pointerType';
                            r0 = r3.bind(r4)(r0);
                            if(r0) { _fun3337_ip = 135; continue _fun3337 }
case 44:
                            r3 = r2 == r1;
                            r0 = undefined;
                            r4 = undefined;
                            if(r3) { _fun3337_ip = 61; continue _fun3337 }
case 55:
                            r4 = r2.currentTarget;
case 61:
                            r5 = r2 == r1;
                            r3 = undefined;
                            if(r5) { _fun3337_ip = 76; continue _fun3337 }
case 70:
                            r3 = r2.target;
case 76:
                            if(!(r4 === r3)) { _fun3337_ip = 119; continue _fun3337 }
case 80:
                            r3 = _closure3_slot0;
                            r4 = r3._config;
                            r3 = r4.onPress;
                            r5 = r4.disabled;
                            if(!(r3 != r1)) { _fun3337_ip = 117; continue _fun3337 }
case 106:
                            r4 = true;
                            if(!(r5 !== r4)) { _fun3337_ip = 117; continue _fun3337 }
case 112:
                            r3 = r3.bind(r0)(r2);
case 117:
                            return r0;
case 119:
                            if(!(r2 != r1)) { _fun3337_ip = 133; continue _fun3337 }
case 123:
                            r1 = r2.stopPropagation;
                            r1 = r1.bind(r2)();
case 133:
                            return r0;
case 135:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r4['onClick'] = r2;
                    r3 = _closure1_slot5;
                    r6 = r3.default;
                    r3 = r6.shouldPressibilityUseW3CPointerEventsForHover;
                    r3 = r3.bind(r6)();
                    if(r3) { _fun3326_ip = 233; continue _fun3326 }
case 127:
                    r3 = _closure1_slot7;
                    r3 = r3.default;
                    r8 = r3.OS;
                    r3 = 'ios';
                    r7 = null;
                    if(!(r8 !== r3)) { _fun3326_ip = 200; continue _fun3326 }
case 151:
                    r2 = _closure1_slot7;
                    r2 = r2.default;
                    r3 = r2.OS;
                    r2 = 'android';
                    r7 = null;
                    if(!(r3 !== r2)) { _fun3326_ip = 200; continue _fun3326 }
case 175:
                    r2 = {};
                    r3 = function(a0) { // Original name: onMouseEnter, environment: r0
                        _fun3342: for(var _fun3342_ip = 0; ; ) switch(_fun3342_ip) {
case 0:
                            r5 = a0;
                            var _closure4_slot0 = r5;
                            r3 = _closure1_slot0;
                            r2 = _closure1_slot1;
                            r0 = 9;
                            r2 = r2[r0];
                            r0 = undefined;
                            r2 = r3.bind(r0)(r2);
                            r2 = r2.isHoverEnabled;
                            r2 = r2.bind(r0)();
                            if(!r2) { _fun3342_ip = 172; continue _fun3342 }
case 50:
                            r3 = _closure3_slot0;
                            r6 = true;
                            r3['_isHovered'] = r6;
                            r6 = r3._cancelHoverOutDelayTimeout;
                            r6 = r6.bind(r3)();
                            r3 = r3._config;
                            r3 = r3.onHoverIn;
                            var _closure4_slot1 = r3;
                            r6 = null;
                            if(!(r3 != r6)) { _fun3342_ip = 172; continue _fun3342 }
case 96:
                            r6 = _closure1_slot18;
                            r4 = _closure3_slot0;
                            r4 = r4._config;
                            r4 = r4.delayHoverIn;
                            r4 = r6.bind(r0)(r4);
                            r6 = 0;
                            if(!(!(r4 > r6))) { _fun3342_ip = 133; continue _fun3342 }
case 126:
                            r3 = r3.bind(r0)(r5);
                            _fun3342_ip = 172; continue _fun3342;
case 133:
                            r3 = r5.persist;
                            r3 = r3.bind(r5)();
                            r2 = _closure3_slot0;
                            r3 = global;
                            r3 = r3.setTimeout;
                            r1 = function() { // Environment: r1
                                r2 = _closure4_slot1;
                                r1 = _closure4_slot0;
                                r0 = undefined;
                                r1 = r2.bind(r0)(r1);
                                return r0;
                            };
                            r1 = r3.bind(r0)(r1, r4);
                            r2['_hoverInDelayTimeout'] = r1;
case 172:
                            return r0;
                        }
                    };
                    r2['onMouseEnter'] = r3;
                    r3 = function(a0) { // Original name: onMouseLeave, environment: r0
                        _fun3344: for(var _fun3344_ip = 0; ; ) switch(_fun3344_ip) {
case 0:
                            r5 = a0;
                            var _closure4_slot0 = r5;
                            r2 = _closure3_slot0;
                            r2 = r2._isHovered;
                            if(!r2) { _fun3344_ip = 152; continue _fun3344 }
case 28:
                            r2 = _closure3_slot0;
                            r3 = false;
                            r2['_isHovered'] = r3;
                            r3 = r2._cancelHoverInDelayTimeout;
                            r3 = r3.bind(r2)();
                            r2 = r2._config;
                            r2 = r2.onHoverOut;
                            var _closure4_slot1 = r2;
                            r3 = null;
                            if(!(r2 != r3)) { _fun3344_ip = 152; continue _fun3344 }
case 71:
                            r6 = _closure1_slot18;
                            r3 = _closure3_slot0;
                            r3 = r3._config;
                            r3 = r3.delayHoverOut;
                            r4 = undefined;
                            r3 = r6.bind(r4)(r3);
                            r6 = 0;
                            if(!(!(r3 > r6))) { _fun3344_ip = 113; continue _fun3344 }
case 106:
                            r2 = r2.bind(r4)(r5);
                            _fun3344_ip = 152; continue _fun3344;
case 113:
                            r2 = r5.persist;
                            r2 = r2.bind(r5)();
                            r1 = _closure3_slot0;
                            r2 = global;
                            r2 = r2.setTimeout;
                            r0 = function() { // Environment: r0
                                r2 = _closure4_slot1;
                                r1 = _closure4_slot0;
                                r0 = undefined;
                                r1 = r2.bind(r0)(r1);
                                return r0;
                            };
                            r0 = r2.bind(r4)(r0, r3);
                            r1['_hoverInDelayTimeout'] = r0;
case 152:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r2['onMouseLeave'] = r3;
                    r7 = r2;
case 200:
                    r2 = global;
                    r6 = r2.Object;
                    r3 = r6.assign;
                    r12 = {};
                    r13 = r6;
                    r11 = r5;
                    r10 = r4;
                    r9 = r7;
                    r2 = r13[r3](r12, r11, r10, r9, r8);
                    return r2;
case 233:
                    r3 = {};
                    r2 = undefined;
                    r3['onPointerEnter'] = r2;
                    r3['onPointerLeave'] = r2;
                    r1 = r1._config;
                    r6 = r1.onHoverIn;
                    var _closure3_slot1 = r6;
                    r2 = r1.onHoverOut;
                    var _closure3_slot2 = r2;
                    r1 = null;
                    if(!(r6 != r1)) { _fun3326_ip = 289; continue _fun3326 }
case 278:
                    r6 = function(a0) { // Environment: r0
                        _fun3338: for(var _fun3338_ip = 0; ; ) switch(_fun3338_ip) {
case 0:
                            r5 = a0;
                            var _closure4_slot0 = r5;
                            r3 = _closure3_slot0;
                            r2 = true;
                            r3['_isHovered'] = r2;
                            r2 = r3._cancelHoverOutDelayTimeout;
                            r2 = r2.bind(r3)();
                            r3 = _closure3_slot1;
                            r2 = null;
                            if(!(r3 != r2)) { _fun3338_ip = 138; continue _fun3338 }
case 44:
                            r6 = _closure1_slot18;
                            r3 = _closure3_slot0;
                            r3 = r3._config;
                            r3 = r3.delayHoverIn;
                            r4 = undefined;
                            r3 = r6.bind(r4)(r3);
                            r6 = 0;
                            if(!(!(r3 > r6))) { _fun3338_ip = 99; continue _fun3338 }
case 79:
                            r6 = _closure3_slot1;
                            r2 = _closure1_slot19;
                            r2 = r2.bind(r4)(r5);
                            r2 = r6.bind(r4)(r2);
                            _fun3338_ip = 138; continue _fun3338;
case 99:
                            r2 = r5.persist;
                            r2 = r2.bind(r5)();
                            r1 = _closure3_slot0;
                            r2 = global;
                            r2 = r2.setTimeout;
                            r0 = function() { // Environment: r0
                                r2 = _closure3_slot1;
                                r3 = _closure1_slot19;
                                r1 = _closure4_slot0;
                                r0 = undefined;
                                r1 = r3.bind(r0)(r1);
                                r1 = r2.bind(r0)(r1);
                                return r0;
                            };
                            r0 = r2.bind(r4)(r0, r3);
                            r1['_hoverInDelayTimeout'] = r0;
case 138:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r3['onPointerEnter'] = r6;
case 289:
                    if(!(r2 != r1)) { _fun3326_ip = 304; continue _fun3326 }
case 293:
                    r0 = function(a0) { // Environment: r0
                        _fun3340: for(var _fun3340_ip = 0; ; ) switch(_fun3340_ip) {
case 0:
                            r5 = a0;
                            var _closure4_slot0 = r5;
                            r2 = _closure3_slot0;
                            r2 = r2._isHovered;
                            if(!r2) { _fun3340_ip = 154; continue _fun3340 }
case 28:
                            r3 = _closure3_slot0;
                            r2 = false;
                            r3['_isHovered'] = r2;
                            r2 = r3._cancelHoverInDelayTimeout;
                            r2 = r2.bind(r3)();
                            r3 = _closure3_slot2;
                            r2 = null;
                            if(!(r3 != r2)) { _fun3340_ip = 154; continue _fun3340 }
case 60:
                            r6 = _closure1_slot18;
                            r3 = _closure3_slot0;
                            r3 = r3._config;
                            r3 = r3.delayHoverOut;
                            r4 = undefined;
                            r3 = r6.bind(r4)(r3);
                            r6 = 0;
                            if(!(!(r3 > r6))) { _fun3340_ip = 115; continue _fun3340 }
case 95:
                            r6 = _closure3_slot2;
                            r2 = _closure1_slot19;
                            r2 = r2.bind(r4)(r5);
                            r2 = r6.bind(r4)(r2);
                            _fun3340_ip = 154; continue _fun3340;
case 115:
                            r2 = r5.persist;
                            r2 = r2.bind(r5)();
                            r1 = _closure3_slot0;
                            r2 = global;
                            r2 = r2.setTimeout;
                            r0 = function() { // Environment: r0
                                r2 = _closure3_slot2;
                                r3 = _closure1_slot19;
                                r1 = _closure4_slot0;
                                r0 = undefined;
                                r1 = r3.bind(r0)(r1);
                                r1 = r2.bind(r0)(r1);
                                return r0;
                            };
                            r0 = r2.bind(r4)(r0, r3);
                            r1['_hoverOutDelayTimeout'] = r0;
case 154:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r3['onPointerLeave'] = r0;
case 304:
                    r0 = global;
                    r2 = r0.Object;
                    r1 = r2.assign;
                    r12 = {};
                    r13 = r2;
                    r11 = r5;
                    r10 = r4;
                    r9 = r3;
                    r0 = r13[r1](r12, r11, r10, r9, r8);
                    return r0;
                }
            };
            r0['value'] = r5;
            r2[3] = r0;
            r0 = {};
            r5 = '_receiveSignal';
            r0['key'] = r5;
            r5 = function(a0, a1) { // Original name: _receiveSignal, environment: r1
                _fun3346: for(var _fun3346_ip = 0; ; ) switch(_fun3346_ip) {
case 0:
                    r6 = a0;
                    r5 = a1;
                    r2 = this;
                    var _closure3_slot0 = r6;
                    var _closure3_slot1 = r5;
                    r1 = r5.nativeEvent;
                    r1 = r1.timestamp;
                    r3 = null;
                    if(!(r1 != r3)) { _fun3346_ip = 63; continue _fun3346 }
case 35:
                    r1 = _closure1_slot8;
                    r4 = r1.default;
                    r1 = r4.emitEvent;
                    r0 = function() { // Environment: r0
                        r0 = {};
                        r2 = _closure3_slot0;
                        r0['signal'] = r2;
                        r1 = _closure3_slot1;
                        r1 = r1.nativeEvent;
                        r1 = r1.timestamp;
                        r0['nativeTimestamp'] = r1;
                        return r0;
                    };
                    r0 = r1.bind(r4)(r0);
case 63:
                    r4 = r2._touchState;
                    r0 = _closure1_slot10;
                    r8 = r0[r4];
                    r9 = r8 == r3;
                    r0 = undefined;
                    r1 = undefined;
                    if(r9) { _fun3346_ip = 95; continue _fun3346 }
case 91:
                    r1 = r8[r6];
case 95:
                    r8 = r2._responderID;
                    if(!(r8 == r3)) { _fun3346_ip = 113; continue _fun3346 }
case 105:
                    r8 = 'RESPONDER_RELEASE';
                    if(!(r6 !== r8)) { _fun3346_ip = 223; continue _fun3346 }
case 113:
                    r7 = _closure1_slot9;
                    r9 = r7.default;
                    r8 = r1 != r3;
                    if(!r8) { _fun3346_ip = 137; continue _fun3346 }
case 129:
                    r3 = 'ERROR';
                    r8 = r1 !== r3;
case 137:
                    r3 = r2._responderID;
                    r7 = '<<host component>>';
                    r10 = typeof r3;
                    r3 = 'number';
                    if(!(r10 === r3)) { _fun3346_ip = 164; continue _fun3346 }
case 158:
                    r7 = r2._responderID;
case 164:
                    r14 = 'Pressability: Invalid signal `%s` for state `%s` on responder: %s';
                    r16 = undefined;
                    r15 = r8;
                    r13 = r6;
                    r12 = r4;
                    r11 = r7;
                    r3 = r16[r9](r15, r14, r13, r12, r11, r10);
                    if(!(r4 !== r1)) { _fun3346_ip = 221; continue _fun3346 }
case 190:
                    r3 = r2._performTransitionSideEffects;
                    r16 = r2;
                    r15 = r4;
                    r14 = r1;
                    r13 = r6;
                    r12 = r5;
                    r3 = r16[r3](r15, r14, r13, r12, r11);
                    r2['_touchState'] = r1;
case 221:
                    return r0;
case 223:
                    return r0;
                }
            };
            r0['value'] = r5;
            r2[4] = r0;
            r0 = {};
            r5 = '_performTransitionSideEffects';
            r0['key'] = r5;
            r5 = function(a0, a1, a2, a3) { // Original name: _performTransitionSideEffects, environment: r1
                _fun3348: for(var _fun3348_ip = 0; ; ) switch(_fun3348_ip) {
case 0:
                    r8 = a0;
                    r6 = a1;
                    r7 = a2;
                    r3 = a3;
                    r2 = this;
                    r1 = _closure1_slot14;
                    r0 = undefined;
                    r1 = r1.bind(r0)(r7);
                    if(!r1) { _fun3348_ip = 49; continue _fun3348 }
case 31:
                    r1 = null;
                    r2['_touchActivatePosition'] = r1;
                    r1 = r2._cancelLongPressDelayTimeout;
                    r1 = r1.bind(r2)();
case 49:
                    r1 = 'NOT_RESPONDER';
                    r5 = r8 === r1;
                    if(!r5) { _fun3348_ip = 68; continue _fun3348 }
case 60:
                    r1 = 'RESPONDER_INACTIVE_PRESS_IN';
                    r5 = r6 === r1;
case 68:
                    r1 = _closure1_slot12;
                    r9 = r1.bind(r0)(r8);
                    r1 = !r9;
                    if(r9) { _fun3348_ip = 92; continue _fun3348 }
case 83:
                    r9 = _closure1_slot12;
                    r1 = r9.bind(r0)(r6);
case 92:
                    if(r5) { _fun3348_ip = 98; continue _fun3348 }
case 95:
                    if(!r1) { _fun3348_ip = 108; continue _fun3348 }
case 98:
                    r1 = r2._measureResponderRegion;
                    r1 = r1.bind(r2)();
case 108:
                    r1 = _closure1_slot13;
                    r1 = r1.bind(r0)(r8);
                    if(!r1) { _fun3348_ip = 150; continue _fun3348 }
case 120:
                    r1 = 'LONG_PRESS_DETECTED';
                    if(!(r7 === r1)) { _fun3348_ip = 150; continue _fun3348 }
case 128:
                    r1 = r2._config;
                    r1 = r1.onLongPress;
                    r5 = null;
                    if(!(r1 != r5)) { _fun3348_ip = 150; continue _fun3348 }
case 145:
                    r1 = r1.bind(r0)(r3);
case 150:
                    r5 = _closure1_slot11;
                    r1 = r5.bind(r0)(r8);
                    r5 = r5.bind(r0)(r6);
                    if(r1) { _fun3348_ip = 183; continue _fun3348 }
case 167:
                    if(!r5) { _fun3348_ip = 183; continue _fun3348 }
case 170:
                    r6 = r2._activate;
                    r6 = r6.bind(r2)(r3);
                    _fun3348_ip = 200; continue _fun3348;
case 183:
                    if(!r1) { _fun3348_ip = 200; continue _fun3348 }
case 186:
                    if(r5) { _fun3348_ip = 200; continue _fun3348 }
case 189:
                    r6 = r2._deactivate;
                    r6 = r6.bind(r2)(r3);
case 200:
                    r6 = _closure1_slot13;
                    r6 = r6.bind(r0)(r8);
                    if(!r6) { _fun3348_ip = 352; continue _fun3348 }
case 215:
                    r6 = 'RESPONDER_RELEASE';
                    if(!(r7 === r6)) { _fun3348_ip = 352; continue _fun3348 }
case 226:
                    if(r5) { _fun3348_ip = 254; continue _fun3348 }
case 229:
                    if(r1) { _fun3348_ip = 254; continue _fun3348 }
case 232:
                    r1 = r2._activate;
                    r1 = r1.bind(r2)(r3);
                    r1 = r2._deactivate;
                    r1 = r1.bind(r2)(r3);
case 254:
                    r5 = r2._config;
                    r7 = r5.onLongPress;
                    r1 = r5.onPress;
                    r6 = r5.android_disableSound;
                    r5 = null;
                    if(!(r1 != r5)) { _fun3348_ip = 352; continue _fun3348 }
case 282:
                    r5 = r7 != r5;
                    if(!r5) { _fun3348_ip = 297; continue _fun3348 }
case 289:
                    r7 = 'RESPONDER_ACTIVE_LONG_PRESS_IN';
                    r5 = r8 === r7;
case 297:
                    if(r5) { _fun3348_ip = 352; continue _fun3348 }
case 300:
                    r5 = _closure1_slot7;
                    r5 = r5.default;
                    r7 = r5.OS;
                    r5 = 'android';
                    if(!(r7 === r5)) { _fun3348_ip = 347; continue _fun3348 }
case 322:
                    r5 = true;
                    if(!(r6 !== r5)) { _fun3348_ip = 347; continue _fun3348 }
case 328:
                    r4 = _closure1_slot4;
                    r5 = r4.default;
                    r4 = r5.playTouchSound;
                    r4 = r4.bind(r5)();
case 347:
                    r1 = r1.bind(r0)(r3);
case 352:
                    r1 = r2._cancelPressDelayTimeout;
                    r1 = r1.bind(r2)();
                    return r0;
                }
            };
            r0['value'] = r5;
            r2[5] = r0;
            r0 = {};
            r5 = '_activate';
            r0['key'] = r5;
            r5 = function(a0) { // Original name: _activate, environment: r1
                _fun3349: for(var _fun3349_ip = 0; ; ) switch(_fun3349_ip) {
case 0:
                    r2 = a0;
                    r4 = this;
                    r0 = r4._config;
                    r1 = r0.onPressIn;
                    r3 = _closure1_slot17;
                    r0 = undefined;
                    r3 = r3.bind(r0)(r2);
                    r6 = r3.pageX;
                    r5 = r3.pageY;
                    r3 = {};
                    r3['pageX'] = r6;
                    r3['pageY'] = r5;
                    r4['_touchActivatePosition'] = r3;
                    r3 = global;
                    r5 = r3.Date;
                    r3 = r5.now;
                    r3 = r3.bind(r5)();
                    r4['_touchActivateTime'] = r3;
                    r3 = null;
