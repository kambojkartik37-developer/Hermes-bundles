            r0 = function(a0, a1) { // Original name: cutOffTailIfNeeded, environment: r5
                _fun3082: for(var _fun3082_ip = 0; ; ) switch(_fun3082_ip) {
case 0:
                    r1 = a0;
                    r2 = r1.tailMode;
                    r0 = 'hidden';
                    if(!(r0 !== r2)) { _fun3082_ip = 124; continue _fun3082 }
case 17:
                    r0 = 'collapsed';
                    if(!(r0 === r2)) { _fun3082_ip = 190; continue _fun3082 }
case 28:
                    r4 = r1.tail;
                    r0 = null;
                    r3 = null;
                    r2 = null;
                    if(!(r2 !== r4)) { _fun3082_ip = 76; continue _fun3082 }
case 43:
                    r7 = r4.alternate;
                    r5 = r4;
                    r6 = r3;
                    if(!(r0 !== r7)) { _fun3082_ip = 61; continue _fun3082 }
case 58:
                    r6 = r5;
case 61:
                    r4 = r5.sibling;
                    r3 = r6;
                    r2 = r3;
                    if(r0 !== r4) { _fun3082_ip = 43; continue _fun3082 }
case 76:
                    if(!(r0 !== r2)) { _fun3082_ip = 88; continue _fun3082 }
case 80:
                    r2['sibling'] = r0;
                    _fun3082_ip = 190; continue _fun3082;
case 88:
                    r2 = a1;
                    if(r2) { _fun3082_ip = 116; continue _fun3082 }
case 94:
                    r2 = r1.tail;
                    if(!(r0 !== r2)) { _fun3082_ip = 116; continue _fun3082 }
case 103:
                    r2 = r1.tail;
                    r2['sibling'] = r0;
                    _fun3082_ip = 190; continue _fun3082;
case 116:
                    r1['tail'] = r0;
                    _fun3082_ip = 190; continue _fun3082;
case 124:
                    r4 = r1.tail;
                    r0 = null;
                    r3 = null;
                    r2 = null;
                    if(!(r2 !== r4)) { _fun3082_ip = 172; continue _fun3082 }
case 139:
                    r7 = r4.alternate;
                    r5 = r4;
                    r6 = r3;
                    if(!(r0 !== r7)) { _fun3082_ip = 157; continue _fun3082 }
case 154:
                    r6 = r5;
case 157:
                    r4 = r5.sibling;
                    r3 = r6;
                    r2 = r3;
                    if(r0 !== r4) { _fun3082_ip = 139; continue _fun3082 }
case 172:
                    if(!(r0 !== r2)) { _fun3082_ip = 184; continue _fun3082 }
case 176:
                    r2['sibling'] = r0;
                    _fun3082_ip = 190; continue _fun3082;
case 184:
                    r1['tail'] = r0;
case 190:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot402 = r0;
            r0 = function(a0) { // Original name: bubbleProperties, environment: r5
                _fun3083: for(var _fun3083_ip = 0; ; ) switch(_fun3083_ip) {
case 0:
                    r2 = a0;
                    r0 = r2.alternate;
                    r8 = null;
                    r0 = r8 !== r0;
                    if(!r0) { _fun3083_ip = 36; continue _fun3083 }
case 17:
                    r1 = r2.alternate;
                    r3 = r1.child;
                    r1 = r2.child;
                    r0 = r3 === r1;
case 36:
                    r7 = r2.child;
                    if(r0) { _fun3083_ip = 121; continue _fun3083 }
case 44:
                    r6 = 0;
                    r5 = 0;
                    r3 = r7;
                    r1 = 0;
                    r4 = 0;
                    if(!(r8 !== r7)) { _fun3083_ip = 204; continue _fun3083 }
case 62:
                    r11 = r3.lanes;
                    r10 = r3.childLanes;
                    r10 = r11 | r10;
                    r6 = r6 | r10;
                    r10 = r3.subtreeFlags;
                    r11 = r5 | r10;
                    r10 = r3.flags;
                    r5 = r11 | r10;
                    r3['return'] = r2;
                    r3 = r3.sibling;
                    r1 = r6;
                    r4 = r5;
                    if(r8 !== r3) { _fun3083_ip = 62; continue _fun3083 }
case 119:
                    _fun3083_ip = 204; continue _fun3083;
case 121:
                    r6 = 31457280;
                    r5 = 0;
                    r3 = 0;
                    r1 = 0;
                    r4 = 0;
                    if(!(r8 !== r7)) { _fun3083_ip = 204; continue _fun3083 }
case 139:
                    r10 = r7.lanes;
                    r9 = r7.childLanes;
                    r9 = r10 | r9;
                    r5 = r5 | r9;
                    r9 = r7.subtreeFlags;
                    r9 = r9 & r6;
                    r10 = r7.flags;
                    r10 = r10 & r6;
                    r9 = r3 | r9;
                    r3 = r9 | r10;
                    r7['return'] = r2;
                    r7 = r7.sibling;
                    r1 = r5;
                    r4 = r3;
                    if(r8 !== r7) { _fun3083_ip = 139; continue _fun3083 }
case 204:
                    r3 = r2.subtreeFlags;
                    r3 = r3 | r4;
                    r2['subtreeFlags'] = r3;
                    r2['childLanes'] = r1;
                    return r0;
                }
            };
            var _closure1_slot403 = r0;
            r0 = function(a0, a1, a2) { // Original name: completeWork, environment: r5
                _fun3084: for(var _fun3084_ip = 0; ; ) switch(_fun3084_ip) {
case 0:
                    r5 = a0;
                    r0 = a1;
                    r1 = a2;
                    r6 = r0.pendingProps;
                    r2 = r0.tag;
                    SwitchImm(value_reg=2, jump_table_address=3010, default_jump_address=2972, unsigned_min_value=0, unsigned_max_value=29) // Switch table: [2953, 2934, 2972, 2697, 1399, 2186, 1935, 2953, 2953, 2953, 1365, 2953, 2953, 1426, 2953, 2953, 2953, 1346, 2972, 515, 2972, 2972, 129, 129, 45, 41, 2186, 2186, 2953, 37];
case 37:
                    r2 = null;
                    return r2;
case 41:
                    r2 = null;
                    return r2;
case 45:
                    r2 = null;
                    r4 = null;
                    if(!(r4 !== r5)) { _fun3084_ip = 63; continue _fun3084 }
case 53:
                    r3 = r5.memoizedState;
                    r4 = r3.cache;
case 63:
                    r3 = r0.memoizedState;
                    r3 = r3.cache;
                    if(!(r3 !== r4)) { _fun3084_ip = 98; continue _fun3084 }
case 77:
                    r4 = r0.flags;
                    r3 = 2048;
                    r3 = r4 | r3;
                    r0['flags'] = r3;
case 98:
                    r8 = _closure1_slot387;
                    r7 = _closure1_slot133;
                    r4 = undefined;
                    r7 = r8.bind(r4)(r7);
                    r3 = _closure1_slot403;
                    r3 = r3.bind(r4)(r0);
                    return r2;
case 129:
                    r2 = _closure1_slot300;
                    r7 = undefined;
                    r2 = r2.bind(r7)(r0);
                    r2 = _closure1_slot296;
                    r2 = r2.bind(r7)();
                    r4 = r0.memoizedState;
                    r2 = null;
                    r8 = r2 !== r4;
                    r4 = r2 !== r5;
                    if(r4) { _fun3084_ip = 197; continue _fun3084 }
case 171:
                    if(!r8) { _fun3084_ip = 231; continue _fun3084 }
case 174:
                    r10 = r0.flags;
                    r9 = 8192;
                    r9 = r10 | r9;
                    r0['flags'] = r9;
                    _fun3084_ip = 231; continue _fun3084;
case 197:
                    r9 = r5.memoizedState;
                    r9 = r2 !== r9;
                    if(!(r9 !== r8)) { _fun3084_ip = 231; continue _fun3084 }
case 210:
                    r10 = r0.flags;
                    r9 = 8192;
                    r9 = r10 | r9;
                    r0['flags'] = r9;
case 231:
                    if(!r8) { _fun3084_ip = 252; continue _fun3084 }
case 234:
                    r9 = r0.mode;
                    r8 = 1;
                    r8 = r9 & r8;
                    r10 = 0;
                    if(!(r10 === r8)) { _fun3084_ip = 264; continue _fun3084 }
case 252:
                    r8 = _closure1_slot403;
                    r8 = r8.bind(r7)(r0);
                    _fun3084_ip = 346; continue _fun3084;
case 264:
                    r8 = 536870912;
                    r8 = r1 & r8;
                    r8 = r10 !== r8;
                    if(!r8) { _fun3084_ip = 297; continue _fun3084 }
case 281:
                    r11 = r0.flags;
                    r9 = 128;
                    r9 = r11 & r9;
                    r8 = r10 === r9;
case 297:
                    if(!r8) { _fun3084_ip = 346; continue _fun3084 }
case 300:
                    r8 = _closure1_slot403;
                    r8 = r8.bind(r7)(r0);
                    r9 = r0.subtreeFlags;
                    r8 = 6;
                    r8 = r9 & r8;
                    if(!r8) { _fun3084_ip = 346; continue _fun3084 }
case 325:
                    r9 = r0.flags;
                    r8 = 8192;
                    r8 = r9 | r8;
                    r0['flags'] = r8;
case 346:
                    r8 = r0.updateQueue;
                    if(!(r2 !== r8)) { _fun3084_ip = 372; continue _fun3084 }
case 355:
                    r9 = _closure1_slot401;
                    r8 = r8.retryQueue;
                    r8 = r9.bind(r7)(r0, r8);
case 372:
                    r8 = r4;
                    if(!r8) { _fun3084_ip = 387; continue _fun3084 }
case 378:
                    r9 = r5.memoizedState;
                    r8 = r2 !== r9;
case 387:
                    if(!r8) { _fun3084_ip = 404; continue _fun3084 }
case 390:
                    r9 = r5.memoizedState;
                    r9 = r9.cachePool;
                    r8 = r2 !== r9;
case 404:
                    r9 = null;
                    if(!r8) { _fun3084_ip = 425; continue _fun3084 }
case 409:
                    r8 = r5.memoizedState;
                    r8 = r8.cachePool;
                    r9 = r8.pool;
case 425:
                    r8 = r0.memoizedState;
                    r10 = r2 !== r8;
                    if(!r10) { _fun3084_ip = 451; continue _fun3084 }
case 437:
                    r8 = r0.memoizedState;
                    r8 = r8.cachePool;
                    r10 = r2 !== r8;
case 451:
                    r8 = null;
                    if(!r10) { _fun3084_ip = 472; continue _fun3084 }
case 456:
                    r10 = r0.memoizedState;
                    r10 = r10.cachePool;
                    r8 = r10.pool;
case 472:
                    if(!(r8 !== r9)) { _fun3084_ip = 497; continue _fun3084 }
case 476:
                    r9 = r0.flags;
                    r8 = 2048;
                    r8 = r9 | r8;
                    r0['flags'] = r8;
case 497:
                    if(!r4) { _fun3084_ip = 513; continue _fun3084 }
case 500:
                    r4 = _closure1_slot251;
                    r3 = _closure1_slot135;
                    r3 = r4.bind(r7)(r3);
case 513:
                    return r2;
case 515:
                    r7 = _closure1_slot251;
                    r2 = _closure1_slot108;
                    r4 = undefined;
                    r2 = r7.bind(r4)(r2);
                    r10 = r0.memoizedState;
                    r2 = null;
                    if(!(r2 !== r10)) { _fun3084_ip = 1334; continue _fun3084 }
case 547:
                    r7 = r0.flags;
                    r13 = 128;
                    r7 = r7 & r13;
                    r9 = 0;
                    r7 = r9 !== r7;
                    r12 = r10.rendering;
                    if(!(r2 !== r12)) { _fun3084_ip = 891; continue _fun3084 }
case 578:
                    r11 = r7;
                    if(r7) { _fun3084_ip = 820; continue _fun3084 }
case 587:
                    r8 = _closure1_slot301;
                    r8 = r8.bind(r4)(r12);
                    if(!(r2 === r8)) { _fun3084_ip = 721; continue _fun3084 }
case 601:
                    r15 = _closure1_slot0;
                    r16 = _closure1_slot1;
                    r14 = 3;
                    r14 = r16[r14];
                    r15 = r15.bind(r4)(r14);
                    r14 = r15.unstable_now;
                    r15 = r14.bind(r15)();
                    r14 = 2;
                    r15 = r14 * r15;
                    r14 = r10.renderingStartTime;
                    r15 = r15 - r14;
                    r14 = _closure1_slot166;
                    r14 = r15 > r14;
                    if(!r14) { _fun3084_ip = 668; continue _fun3084 }
case 658:
                    r15 = 536870912;
                    r14 = r15 !== r1;
case 668:
                    r11 = r7;
                    if(!r14) { _fun3084_ip = 820; continue _fun3084 }
case 677:
                    r14 = r0.flags;
                    r14 = r14 | r13;
                    r0['flags'] = r14;
                    r15 = _closure1_slot402;
                    r14 = false;
                    r14 = r15.bind(r4)(r10, r14);
                    r14 = 4194304;
                    r0['lanes'] = r14;
                    r11 = true;
                    _fun3084_ip = 820; continue _fun3084;
case 721:
                    r14 = r0.flags;
                    r14 = r14 | r13;
                    r0['flags'] = r14;
                    r14 = r8.updateQueue;
                    r0['updateQueue'] = r14;
                    r8 = _closure1_slot401;
                    r8 = r8.bind(r4)(r0, r14);
                    r8 = _closure1_slot402;
                    r14 = true;
                    r8 = r8.bind(r4)(r10, r14);
                    r8 = r10.tail;
                    r11 = true;
                    if(!(r2 === r8)) { _fun3084_ip = 820; continue _fun3084 }
case 782:
                    r15 = r10.tailMode;
                    r8 = 'hidden';
                    r11 = true;
                    if(!(r8 === r15)) { _fun3084_ip = 820; continue _fun3084 }
case 798:
                    r8 = r12.alternate;
                    r11 = true;
                    if(r8) { _fun3084_ip = 820; continue _fun3084 }
case 808:
                    r8 = _closure1_slot403;
                    r8 = r8.bind(r4)(r0);
                    return r2;
case 820:
                    r8 = r10.isBackwards;
                    if(r8) { _fun3084_ip = 866; continue _fun3084 }
case 829:
                    r8 = r10.last;
                    if(!(r2 === r8)) { _fun3084_ip = 846; continue _fun3084 }
case 838:
                    r0['child'] = r12;
                    _fun3084_ip = 852; continue _fun3084;
case 846:
                    r8['sibling'] = r12;
case 852:
                    r10['last'] = r12;
                    r8 = r11;
                    _fun3084_ip = 1203; continue _fun3084;
case 866:
                    r14 = r0.child;
                    r12['sibling'] = r14;
                    r0['child'] = r12;
                    r8 = r11;
                    _fun3084_ip = 1203; continue _fun3084;
case 891:
                    if(r7) { _fun3084_ip = 1187; continue _fun3084 }
case 897:
                    r11 = _closure1_slot156;
                    if(!(r9 === r11)) { _fun3084_ip = 922; continue _fun3084 }
case 905:
                    if(!(r2 !== r5)) { _fun3084_ip = 957; continue _fun3084 }
case 909:
                    r11 = r5.flags;
                    r11 = r11 & r13;
                    if(!(r9 !== r11)) { _fun3084_ip = 957; continue _fun3084 }
case 922:
                    r12 = r0.child;
                    if(!(r2 !== r12)) { _fun3084_ip = 957; continue _fun3084 }
case 931:
                    r11 = _closure1_slot301;
                    r11 = r11.bind(r4)(r12);
                    r14 = r12;
                    if(!(r2 === r11)) { _fun3084_ip = 1062; continue _fun3084 }
case 948:
                    r12 = r14.sibling;
                    if(r2 !== r12) { _fun3084_ip = 931; continue _fun3084 }
case 957:
                    r12 = r10.tail;
                    r12 = r2 !== r12;
                    if(!r12) { _fun3084_ip = 1006; continue _fun3084 }
case 969:
                    r15 = _closure1_slot0;
                    r16 = _closure1_slot1;
                    r14 = 3;
                    r14 = r16[r14];
                    r15 = r15.bind(r4)(r14);
                    r14 = r15.unstable_now;
                    r15 = r14.bind(r15)();
                    r14 = _closure1_slot166;
                    r12 = r15 > r14;
case 1006:
                    r8 = r7;
                    if(!r12) { _fun3084_ip = 1203; continue _fun3084 }
case 1015:
                    r12 = r0.flags;
                    r12 = r12 | r13;
                    r0['flags'] = r12;
                    r14 = _closure1_slot402;
                    r12 = false;
                    r12 = r14.bind(r4)(r10, r12);
                    r12 = 4194304;
                    r0['lanes'] = r12;
                    r8 = true;
                    _fun3084_ip = 1203; continue _fun3084;
case 1062:
                    r12 = r0.flags;
                    r12 = r12 | r13;
                    r0['flags'] = r12;
                    r13 = _closure1_slot402;
                    r12 = false;
                    r12 = r13.bind(r4)(r10, r12);
                    r12 = r11.updateQueue;
                    r0['updateQueue'] = r12;
                    r11 = _closure1_slot401;
                    r11 = r11.bind(r4)(r0, r12);
                    r0['subtreeFlags'] = r9;
                    r9 = r0.child;
                    if(!(r2 !== r9)) { _fun3084_ip = 1147; continue _fun3084 }
case 1127:
                    r11 = _closure1_slot480;
                    r11 = r11.bind(r4)(r9, r1);
                    r9 = r9.sibling;
                    if(r2 !== r9) { _fun3084_ip = 1127; continue _fun3084 }
case 1147:
                    r12 = _closure1_slot252;
                    r11 = _closure1_slot108;
                    r13 = r11.current;
                    r9 = 1;
                    r13 = r13 & r9;
                    r9 = 2;
                    r9 = r13 | r9;
                    r9 = r12.bind(r4)(r11, r9);
                    r9 = r0.child;
                    return r9;
case 1187:
                    r11 = _closure1_slot402;
                    r9 = false;
                    r9 = r11.bind(r4)(r10, r9);
                    r8 = r7;
case 1203:
                    r7 = r10.tail;
                    if(!(r2 === r7)) { _fun3084_ip = 1224; continue _fun3084 }
case 1212:
                    r7 = _closure1_slot403;
                    r7 = r7.bind(r4)(r0);
                    return r2;
case 1224:
                    r7 = r10.tail;
                    r10['rendering'] = r7;
                    r9 = r7.sibling;
                    r10['tail'] = r9;
                    r11 = _closure1_slot0;
                    r12 = _closure1_slot1;
                    r9 = 3;
                    r9 = r12[r9];
                    r11 = r11.bind(r4)(r9);
                    r9 = r11.unstable_now;
                    r9 = r9.bind(r11)();
                    r10['renderingStartTime'] = r9;
                    r7['sibling'] = r2;
                    r9 = _closure1_slot108;
                    r12 = r9.current;
                    r10 = _closure1_slot252;
                    r9 = _closure1_slot108;
                    r11 = 1;
                    r12 = r12 & r11;
                    if(r8) { _fun3084_ip = 1319; continue _fun3084 }
case 1314:
                    r8 = r12;
                    _fun3084_ip = 1326; continue _fun3084;
case 1319:
                    r11 = 2;
                    r8 = r12 | r11;
case 1326:
                    r8 = r10.bind(r4)(r9, r8);
                    return r7;
case 1334:
                    r3 = _closure1_slot403;
                    r3 = r3.bind(r4)(r0);
                    return r2;
case 1346:
                    r3 = _closure1_slot403;
                    r2 = undefined;
                    r2 = r3.bind(r2)(r0);
                    r2 = null;
                    return r2;
case 1365:
                    r7 = _closure1_slot387;
                    r4 = r0.type;
                    r3 = undefined;
                    r4 = r7.bind(r3)(r4);
                    r2 = _closure1_slot403;
                    r2 = r2.bind(r3)(r0);
                    r2 = null;
                    return r2;
case 1399:
                    r4 = _closure1_slot255;
                    r3 = undefined;
                    r4 = r4.bind(r3)();
                    r2 = _closure1_slot403;
                    r2 = r2.bind(r3)(r0);
                    r2 = null;
                    return r2;
case 1426:
                    r7 = r0.memoizedState;
                    r2 = null;
                    r4 = r2 === r5;
                    if(r4) { _fun3084_ip = 1470; continue _fun3084 }
case 1440:
                    r3 = r5.memoizedState;
                    if(!(r2 !== r3)) { _fun3084_ip = 1626; continue _fun3084 }
case 1452:
                    r3 = r5.memoizedState;
                    r3 = r3.dehydrated;
                    if(!(r2 !== r3)) { _fun3084_ip = 1626; continue _fun3084 }
case 1470:
                    if(!(r2 !== r7)) { _fun3084_ip = 1484; continue _fun3084 }
case 1474:
                    r3 = r7.dehydrated;
                    if(!(r2 === r3)) { _fun3084_ip = 1521; continue _fun3084 }
case 1484:
                    r10 = _closure1_slot79;
                    r3 = true;
                    if(!(r2 !== r10)) { _fun3084_ip = 1586; continue _fun3084 }
case 1497:
                    r12 = _closure1_slot447;
                    r11 = _closure1_slot79;
                    r10 = undefined;
                    r10 = r12.bind(r10)(r11);
                    _closure1_slot79 = r2;
                    r3 = true;
                    _fun3084_ip = 1586; continue _fun3084;
case 1521:
                    if(r4) { _fun3084_ip = 1914; continue _fun3084 }
case 1527:
                    r8 = r0.flags;
                    r4 = 128;
                    r8 = r8 & r4;
                    r4 = 0;
                    if(!(r4 === r8)) { _fun3084_ip = 1551; continue _fun3084 }
case 1545:
                    r0['memoizedState'] = r2;
case 1551:
                    r8 = r0.flags;
                    r4 = 4;
                    r4 = r8 | r4;
                    r0['flags'] = r4;
                    r8 = _closure1_slot403;
                    r4 = undefined;
                    r4 = r8.bind(r4)(r0);
                    r3 = false;
case 1586:
                    if(r3) { _fun3084_ip = 1626; continue _fun3084 }
case 1589:
                    r4 = r0.flags;
                    r3 = 256;
                    r3 = r4 & r3;
                    r8 = _closure1_slot300;
                    r4 = undefined;
                    r4 = r8.bind(r4)(r0);
                    if(r3) { _fun3084_ip = 1624; continue _fun3084 }
case 1622:
                    return r2;
case 1624:
                    return r0;
case 1626:
                    r8 = _closure1_slot300;
                    r4 = undefined;
                    r8 = r8.bind(r4)(r0);
                    r9 = r0.flags;
                    r8 = 128;
                    r9 = r9 & r8;
                    r8 = 0;
                    if(!(r8 === r9)) { _fun3084_ip = 1906; continue _fun3084 }
case 1662:
                    r8 = r2 !== r7;
                    r7 = r2 !== r5;
                    if(!r7) { _fun3084_ip = 1682; continue _fun3084 }
case 1673:
                    r9 = r5.memoizedState;
                    r7 = r2 !== r9;
case 1682:
                    if(!r8) { _fun3084_ip = 1839; continue _fun3084 }
case 1688:
                    r10 = r0.child;
                    r9 = r10.alternate;
                    r9 = r2 !== r9;
                    if(!r9) { _fun3084_ip = 1719; continue _fun3084 }
case 1705:
                    r11 = r10.alternate;
                    r11 = r11.memoizedState;
                    r9 = r2 !== r11;
case 1719:
                    if(!r9) { _fun3084_ip = 1741; continue _fun3084 }
case 1722:
                    r11 = r10.alternate;
                    r11 = r11.memoizedState;
                    r11 = r11.cachePool;
                    r9 = r2 !== r11;
case 1741:
                    r11 = null;
                    if(!r9) { _fun3084_ip = 1767; continue _fun3084 }
case 1746:
                    r9 = r10.alternate;
                    r9 = r9.memoizedState;
                    r9 = r9.cachePool;
                    r11 = r9.pool;
case 1767:
                    r9 = r10.memoizedState;
                    r12 = r2 !== r9;
                    if(!r12) { _fun3084_ip = 1793; continue _fun3084 }
case 1779:
                    r9 = r10.memoizedState;
                    r9 = r9.cachePool;
                    r12 = r2 !== r9;
case 1793:
                    r9 = null;
                    if(!r12) { _fun3084_ip = 1814; continue _fun3084 }
case 1798:
                    r12 = r10.memoizedState;
                    r12 = r12.cachePool;
                    r9 = r12.pool;
case 1814:
                    if(!(r9 !== r11)) { _fun3084_ip = 1839; continue _fun3084 }
case 1818:
                    r11 = r10.flags;
                    r9 = 2048;
                    r9 = r11 | r9;
                    r10['flags'] = r9;
case 1839:
                    r7 = r8 !== r7;
                    if(!r7) { _fun3084_ip = 1849; continue _fun3084 }
case 1846:
                    r7 = r8;
case 1849:
                    if(!r7) { _fun3084_ip = 1878; continue _fun3084 }
case 1852:
                    r8 = r0.child;
                    r9 = r8.flags;
                    r7 = 8192;
                    r7 = r9 | r7;
                    r8['flags'] = r7;
case 1878:
                    r8 = _closure1_slot401;
                    r7 = r0.updateQueue;
                    r7 = r8.bind(r4)(r0, r7);
                    r3 = _closure1_slot403;
                    r3 = r3.bind(r4)(r0);
                    return r2;
case 1906:
                    r0['lanes'] = r1;
                    return r0;
case 1914:
                    r1 = global;
                    r3 = r1.Error;
                    r2 = undefined;
                    r1 = 'A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.';
                    r1 = r3.bind(r2)(r1);
                    throw r1;
case 1935:
                    if(!r5) { _fun3084_ip = 1952; continue _fun3084 }
case 1938:
                    r2 = r0.stateNode;
                    r1 = null;
                    if(!(r1 == r2)) { _fun3084_ip = 2140; continue _fun3084 }
case 1952:
                    r2 = 'string';
                    r1 = typeof r6;
                    if(!(r2 !== r1)) { _fun3084_ip = 1977; continue _fun3084 }
case 1963:
                    r2 = r0.stateNode;
                    r1 = null;
                    if(!(r1 !== r2)) { _fun3084_ip = 2119; continue _fun3084 }
case 1977:
                    r1 = _closure1_slot77;
                    r9 = r1.current;
                    r1 = _closure1_slot75;
                    r1 = r1.current;
                    r1 = r1.isInAParentText;
                    if(r1) { _fun3084_ip = 2028; continue _fun3084 }
case 2007:
                    r1 = global;
                    r4 = r1.Error;
                    r3 = undefined;
                    r1 = 'Text strings must be rendered within a <Text> component.';
                    r1 = r4.bind(r3)(r1);
                    throw r1;
case 2028:
                    r1 = _closure1_slot247;
                    r7 = undefined;
                    r1 = r1.bind(r7)();
                    r4 = _closure1_slot0;
                    r8 = _closure1_slot1;
                    r3 = 2;
                    r3 = r8[r3];
                    r3 = r4.bind(r7)(r3);
                    r8 = r3.UIManager;
                    r7 = r8.createView;
                    r4 = {};
                    r4['text'] = r6;
                    r19 = 'RCTRawText';
                    r21 = r8;
                    r20 = r1;
                    r18 = r9;
                    r17 = r4;
                    r3 = r21[r7](r20, r19, r18, r17, r16);
                    r3 = _closure1_slot47;
                    r2 = r3.set;
                    r2 = r2.bind(r3)(r1, r0);
                    r0['stateNode'] = r1;
                    _fun3084_ip = 2167; continue _fun3084;
case 2119:
                    r1 = global;
                    r3 = r1.Error;
                    r2 = undefined;
                    r1 = 'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.';
                    r1 = r3.bind(r2)(r1);
                    throw r1;
case 2140:
                    r1 = r5.memoizedProps;
                    if(!(r1 !== r6)) { _fun3084_ip = 2167; continue _fun3084 }
case 2149:
                    r2 = r0.flags;
                    r1 = 4;
                    r1 = r2 | r1;
                    r0['flags'] = r1;
case 2167:
                    r2 = _closure1_slot403;
                    r1 = undefined;
                    r1 = r2.bind(r1)(r0);
                    r1 = null;
                    return r1;
case 2186:
                    r1 = _closure1_slot257;
                    r3 = undefined;
                    r1 = r1.bind(r3)(r0);
                    r7 = r0.type;
                    r1 = null;
                    if(!(r1 !== r5)) { _fun3084_ip = 2224; continue _fun3084 }
case 2212:
                    r4 = r0.stateNode;
                    if(!(r1 == r4)) { _fun3084_ip = 2637; continue _fun3084 }
case 2224:
                    if(r6) { _fun3084_ip = 2267; continue _fun3084 }
case 2227:
                    r4 = r0.stateNode;
                    if(!(r1 !== r4)) { _fun3084_ip = 2248; continue _fun3084 }
case 2236:
                    r4 = _closure1_slot403;
                    r4 = r4.bind(r3)(r0);
                    return r1;
case 2248:
                    r4 = global;
                    r8 = r4.Error;
                    r4 = 'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.';
                    r4 = r8.bind(r3)(r4);
                    throw r4;
case 2267:
                    r4 = _closure1_slot77;
                    r12 = r4.current;
                    r4 = _closure1_slot247;
                    r9 = r4.bind(r3)();
                    r4 = _closure1_slot64;
                    r8 = r4.bind(r3)(r7);
                    r10 = _closure1_slot229;
                    r19 = _closure1_slot52;
                    r17 = r8.validAttributes;
                    r21 = undefined;
                    r20 = null;
                    r18 = r6;
                    r17 = r21[r10](r20, r19, r18, r17, r16);
                    r7 = _closure1_slot0;
                    r10 = _closure1_slot1;
                    r4 = 2;
                    r4 = r10[r4];
                    r4 = r7.bind(r3)(r4);
                    r10 = r4.UIManager;
                    r7 = r10.createView;
                    r19 = r8.uiViewClassName;
                    r21 = r10;
                    r20 = r9;
                    r18 = r12;
                    r4 = r21[r7](r20, r19, r18, r17, r16);
                    r4 = _closure1_slot56;
                    r7 = r4.prototype;
                    r7 = Object.create(r7, {constructor: {value: r4}});
                    r21 = r7;
                    r20 = r9;
                    r19 = r8;
                    r18 = r0;
                    r4 = new r21[r4](r20, r19, r18, r17);
                    r7 = r4 instanceof Object ? r4 : r7;
                    r8 = _closure1_slot47;
                    r4 = r8.set;
                    r4 = r4.bind(r8)(r9, r0);
                    r8 = _closure1_slot48;
                    r4 = r8.set;
                    r4 = r4.bind(r8)(r9, r6);
                    r10 = r0.child;
                    r9 = 4;
                    r8 = 6;
                    r4 = 5;
                    if(!(r1 !== r10)) { _fun3084_ip = 2620; continue _fun3084 }
case 2451:
                    r11 = r10.tag;
                    r12 = r10;
                    if(!(r4 !== r11)) { _fun3084_ip = 2508; continue _fun3084 }
case 2463:
                    r11 = r12.tag;
                    if(!(r8 !== r11)) { _fun3084_ip = 2508; continue _fun3084 }
case 2472:
                    r11 = r12.tag;
                    if(!(r9 !== r11)) { _fun3084_ip = 2529; continue _fun3084 }
case 2481:
                    r11 = r12.child;
                    if(!(r1 !== r11)) { _fun3084_ip = 2529; continue _fun3084 }
case 2490:
                    r11 = r12.child;
                    r11['return'] = r12;
                    r11 = r12.child;
                    _fun3084_ip = 2610; continue _fun3084;
case 2508:
                    r15 = r7._children;
                    r14 = r15.push;
                    r13 = r12.stateNode;
                    r13 = r14.bind(r15)(r13);
case 2529:
                    if(!(r12 !== r0)) { _fun3084_ip = 2620; continue _fun3084 }
case 2533:
                    r13 = r12.sibling;
                    r14 = r12;
                    r12 = r14;
                    if(!(r1 === r13)) { _fun3084_ip = 2589; continue _fun3084 }
case 2548:
                    r15 = r14.return;
                    r13 = r14;
                    if(!(r1 !== r15)) { _fun3084_ip = 2620; continue _fun3084 }
case 2560:
                    r15 = r13.return;
                    if(!(r15 !== r0)) { _fun3084_ip = 2620; continue _fun3084 }
case 2569:
                    r15 = r13.return;
                    r13 = r15.sibling;
                    r14 = r15;
                    r12 = r14;
                    if(r1 === r13) { _fun3084_ip = 2548; continue _fun3084 }
case 2589:
                    r14 = r12.sibling;
                    r13 = r12.return;
                    r14['return'] = r13;
                    r11 = r12.sibling;
case 2610:
                    r10 = r11;
                    if(r1 !== r10) { _fun3084_ip = 2451; continue _fun3084 }
case 2620:
                    r0['stateNode'] = r7;
                    r4 = _closure1_slot249;
                    r4 = r4.bind(r3)(r7);
                    _fun3084_ip = 2664; continue _fun3084;
case 2637:
                    r4 = r5.memoizedProps;
                    if(!(r4 !== r6)) { _fun3084_ip = 2664; continue _fun3084 }
case 2646:
                    r6 = r0.flags;
                    r4 = 4;
                    r4 = r6 | r4;
                    r0['flags'] = r4;
case 2664:
                    r2 = _closure1_slot403;
                    r2 = r2.bind(r3)(r0);
                    r3 = r0.flags;
                    r2 = -16777217;
                    r2 = r3 & r2;
                    r0['flags'] = r2;
                    return r1;
case 2697:
                    r6 = r0.stateNode;
                    r1 = null;
                    r4 = r1 !== r5;
                    r3 = null;
                    if(!r4) { _fun3084_ip = 2723; continue _fun3084 }
case 2713:
                    r2 = r5.memoizedState;
                    r3 = r2.cache;
case 2723:
                    r2 = r0.memoizedState;
                    r2 = r2.cache;
                    if(!(r2 !== r3)) { _fun3084_ip = 2758; continue _fun3084 }
case 2737:
                    r3 = r0.flags;
                    r2 = 2048;
                    r2 = r3 | r2;
                    r0['flags'] = r2;
case 2758:
                    r8 = _closure1_slot387;
                    r7 = _closure1_slot133;
                    r3 = undefined;
                    r7 = r8.bind(r3)(r7);
                    r7 = _closure1_slot255;
                    r7 = r7.bind(r3)();
                    r7 = r6.pendingContext;
                    if(!r7) { _fun3084_ip = 2812; continue _fun3084 }
case 2794:
                    r7 = r6.pendingContext;
                    r6['context'] = r7;
                    r6['pendingContext'] = r1;
case 2812:
                    if(!r4) { _fun3084_ip = 2824; continue _fun3084 }
case 2815:
                    r6 = r5.child;
                    r4 = r1 !== r6;
case 2824:
                    if(r4) { _fun3084_ip = 2831; continue _fun3084 }
case 2827:
                    r4 = r1 === r5;
case 2831:
                    if(r4) { _fun3084_ip = 2872; continue _fun3084 }
case 2834:
                    r5 = r5.memoizedState;
                    r5 = r5.isDehydrated;
                    if(!r5) { _fun3084_ip = 2869; continue _fun3084 }
case 2848:
                    r7 = r0.flags;
                    r6 = 256;
                    r7 = r7 & r6;
                    r6 = 0;
                    r5 = r6 === r7;
case 2869:
                    r4 = r5;
case 2872:
                    if(r4) { _fun3084_ip = 2922; continue _fun3084 }
case 2875:
                    r5 = r0.flags;
                    r4 = 1024;
                    r4 = r5 | r4;
                    r0['flags'] = r4;
                    r4 = _closure1_slot79;
                    if(!(r1 !== r4)) { _fun3084_ip = 2922; continue _fun3084 }
case 2904:
                    r5 = _closure1_slot447;
                    r4 = _closure1_slot79;
                    r4 = r5.bind(r3)(r4);
                    _closure1_slot79 = r1;
case 2922:
                    r2 = _closure1_slot403;
                    r2 = r2.bind(r3)(r0);
                    return r1;
case 2934:
                    r2 = _closure1_slot403;
                    r1 = undefined;
                    r1 = r2.bind(r1)(r0);
                    r1 = null;
                    return r1;
case 2953:
                    r2 = _closure1_slot403;
                    r1 = undefined;
                    r1 = r2.bind(r1)(r0);
                    r1 = null;
                    return r1;
case 2972:
                    r1 = global;
                    r2 = r1.Error;
                    r1 = r0.tag;
                    r0 = 'Unknown unit of work tag (';
                    r3 = r0 + r1;
                    r1 = undefined;
                    r0 = '). This error is likely caused by a bug in React. Please file an issue.';
                    r0 = r3 + r0;
                    r0 = r2.bind(r1)(r0);
                    throw r0;
                }
            };
            var _closure1_slot404 = r0;
            r0 = function(a0, a1) { // Original name: unwindWork, environment: r5
                _fun3085: for(var _fun3085_ip = 0; ; ) switch(_fun3085_ip) {
case 0:
                    r1 = a1;
                    r0 = r1.tag;
                    SwitchImm(value_reg=0, jump_table_address=481, default_jump_address=477, unsigned_min_value=1, unsigned_max_value=27) // Switch table: [429, 477, 341, 171, 322, 477, 477, 477, 477, 147, 477, 477, 210, 477, 477, 477, 477, 477, 188, 477, 477, 53, 53, 30, 26, 322, 322];
case 26:
                    r0 = null;
                    return r0;
case 30:
                    r3 = _closure1_slot387;
                    r2 = _closure1_slot133;
                    r0 = undefined;
                    r0 = r3.bind(r0)(r2);
                    r0 = null;
                    return r0;
case 53:
                    r0 = _closure1_slot300;
                    r4 = undefined;
                    r0 = r0.bind(r4)(r1);
                    r0 = _closure1_slot296;
                    r0 = r0.bind(r4)();
                    r0 = null;
                    r3 = a0;
                    if(!(r0 !== r3)) { _fun3085_ip = 99; continue _fun3085 }
case 86:
                    r3 = _closure1_slot251;
                    r2 = _closure1_slot135;
                    r2 = r3.bind(r4)(r2);
case 99:
                    r3 = r1.flags;
                    r2 = 65536;
                    r2 = r3 & r2;
                    r0 = null;
                    if(!r2) { _fun3085_ip = 145; continue _fun3085 }
case 119:
                    r2 = -65537;
                    r3 = r3 & r2;
                    r2 = 128;
                    r2 = r3 | r2;
                    r1['flags'] = r2;
                    r0 = r1;
case 145:
                    return r0;
case 147:
                    r3 = _closure1_slot387;
                    r2 = r1.type;
                    r0 = undefined;
                    r0 = r3.bind(r0)(r2);
                    r0 = null;
                    return r0;
case 171:
                    r2 = _closure1_slot255;
                    r0 = undefined;
                    r0 = r2.bind(r0)();
                    r0 = null;
                    return r0;
case 188:
                    r3 = _closure1_slot251;
                    r2 = _closure1_slot108;
                    r0 = undefined;
                    r0 = r3.bind(r0)(r2);
                    r0 = null;
                    return r0;
case 210:
                    r0 = _closure1_slot300;
                    r3 = undefined;
                    r0 = r0.bind(r3)(r1);
                    r2 = r1.memoizedState;
                    r0 = null;
                    if(!(r0 !== r2)) { _fun3085_ip = 255; continue _fun3085 }
case 236:
                    r2 = r2.dehydrated;
                    if(!(r0 !== r2)) { _fun3085_ip = 255; continue _fun3085 }
case 246:
                    r2 = r1.alternate;
                    if(!(r0 !== r2)) { _fun3085_ip = 303; continue _fun3085 }
case 255:
                    r4 = r1.flags;
                    r2 = 65536;
                    r2 = r4 & r2;
                    r0 = null;
                    if(!r2) { _fun3085_ip = 301; continue _fun3085 }
case 275:
                    r2 = -65537;
                    r4 = r4 & r2;
                    r2 = 128;
                    r2 = r4 | r2;
                    r1['flags'] = r2;
                    r0 = r1;
case 301:
                    return r0;
case 303:
                    r0 = global;
                    r2 = r0.Error;
                    r0 = 'Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.';
                    r0 = r2.bind(r3)(r0);
                    throw r0;
case 322:
                    r2 = _closure1_slot257;
                    r0 = undefined;
                    r0 = r2.bind(r0)(r1);
                    r0 = null;
                    return r0;
case 341:
                    r4 = _closure1_slot387;
                    r3 = _closure1_slot133;
                    r2 = undefined;
                    r3 = r4.bind(r2)(r3);
                    r0 = _closure1_slot255;
                    r0 = r0.bind(r2)();
                    r4 = r1.flags;
                    r0 = 65536;
                    r2 = r4 & r0;
                    r5 = 0;
                    r0 = null;
                    if(!(r5 !== r2)) { _fun3085_ip = 427; continue _fun3085 }
case 391:
                    r3 = 128;
                    r2 = r4 & r3;
                    r0 = null;
                    if(!(r5 === r2)) { _fun3085_ip = 427; continue _fun3085 }
case 404:
                    r2 = -65537;
                    r2 = r4 & r2;
                    r2 = r2 | r3;
                    r1['flags'] = r2;
                    r0 = r1;
case 427:
                    return r0;
case 429:
                    r3 = r1.flags;
                    r0 = 65536;
                    r2 = r3 & r0;
                    r0 = null;
                    if(!r2) { _fun3085_ip = 475; continue _fun3085 }
case 449:
                    r2 = -65537;
                    r3 = r3 & r2;
                    r2 = 128;
                    r2 = r3 | r2;
                    r1['flags'] = r2;
                    r0 = r1;
case 475:
                    return r0;
case 477:
                    r0 = null;
                    return r0;
                }
            };
            var _closure1_slot405 = r0;
            r0 = function(a0, a1) { // Original name: unwindInterruptedWork, environment: r5
                _fun3086: for(var _fun3086_ip = 0; ; ) switch(_fun3086_ip) {
case 0:
                    r2 = a1;
                    r0 = r2.tag;
                    SwitchImm(value_reg=0, jump_table_address=223, default_jump_address=219, unsigned_min_value=3, unsigned_max_value=27) // Switch table: [192, 160, 175, 219, 219, 219, 219, 101, 219, 219, 143, 219, 219, 219, 219, 219, 123, 219, 219, 50, 50, 26, 219, 175, 175];
case 26:
                    r3 = _closure1_slot387;
                    r1 = _closure1_slot133;
                    r0 = undefined;
                    r0 = r3.bind(r0)(r1);
                    _fun3086_ip = 219; continue _fun3086;
case 50:
                    r1 = _closure1_slot300;
                    r3 = undefined;
                    r1 = r1.bind(r3)(r2);
                    r1 = _closure1_slot296;
                    r1 = r1.bind(r3)();
                    r4 = null;
                    r1 = a0;
                    if(!(r4 !== r1)) { _fun3086_ip = 219; continue _fun3086 }
case 86:
                    r1 = _closure1_slot251;
                    r0 = _closure1_slot135;
                    r0 = r1.bind(r3)(r0);
                    _fun3086_ip = 219; continue _fun3086;
case 101:
                    r3 = _closure1_slot387;
                    r1 = r2.type;
                    r0 = undefined;
                    r0 = r3.bind(r0)(r1);
                    _fun3086_ip = 219; continue _fun3086;
case 123:
                    r3 = _closure1_slot251;
                    r1 = _closure1_slot108;
                    r0 = undefined;
                    r0 = r3.bind(r0)(r1);
                    _fun3086_ip = 219; continue _fun3086;
case 143:
                    r1 = _closure1_slot300;
                    r0 = undefined;
                    r0 = r1.bind(r0)(r2);
                    _fun3086_ip = 219; continue _fun3086;
case 160:
                    r1 = _closure1_slot255;
                    r0 = undefined;
                    r0 = r1.bind(r0)();
                    _fun3086_ip = 219; continue _fun3086;
case 175:
                    r1 = _closure1_slot257;
                    r0 = undefined;
                    r0 = r1.bind(r0)(r2);
                    _fun3086_ip = 219; continue _fun3086;
case 192:
                    r3 = _closure1_slot387;
                    r2 = _closure1_slot133;
                    r1 = undefined;
                    r2 = r3.bind(r1)(r2);
                    r0 = _closure1_slot255;
                    r0 = r0.bind(r1)();
case 219:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot406 = r0;
            r0 = function(a0, a1) { // Original name: commitHookEffectListMount, environment: r5
                _fun3087: for(var _fun3087_ip = 0; ; ) switch(_fun3087_ip) {
case 0:
                    r4 = a0;
                    r1 = a1;
                    r0 = undefined;
                    r5 = undefined;
                    r6 = undefined;
                    r7 = undefined;
case 14: // try_start_0
                    r2 = r1;
                    r8 = r2.updateQueue;
                    r5 = r8;
                    r3 = null;
                    r2 = null;
                    if(!(r2 !== r8)) { _fun3087_ip = 42; continue _fun3087 }
case 33:
                    r8 = r5;
                    r2 = r8.lastEffect;
case 42:
                    r6 = r2;
                    if(!(r3 !== r2)) { _fun3087_ip = 129; continue _fun3087 }
case 49:
                    r2 = r6;
                    r2 = r2.next;
                    r7 = r2;
                    r5 = r2;
case 63:
                    r2 = r5;
                    r2 = r2.tag;
                    r3 = r4;
                    r2 = r2 & r3;
                    if(!(r2 === r3)) { _fun3087_ip = 111; continue _fun3087 }
case 82:
                    r6 = undefined;
                    r3 = r5;
                    r2 = r3.create;
                    r3 = r3.inst;
                    r2 = r2.bind(r0)();
                    r6 = r2;
                    r3['destroy'] = r2;
case 111:
                    r2 = r5;
                    r3 = r2.next;
                    r5 = r3;
                    r2 = r7;
                    if(r3 !== r2) { _fun3087_ip = 63; continue _fun3087 }
case 129: // try_end0
                    _fun3087_ip = 156; continue _fun3087;
case 131: // catch_target0
                    CatchBlockStart(arg_register=4);
                    r3 = _closure1_slot470;
                    r2 = r1;
                    r1 = r2.return;
                    r1 = r3.bind(r0)(r2, r1, r4);
case 156:
                    return r0;
                }
            };
            var _closure1_slot407 = r0;
            r0 = function(a0, a1, a2) { // Original name: commitHookEffectListUnmount, environment: r5
                _fun3088: for(var _fun3088_ip = 0; ; ) switch(_fun3088_ip) {
case 0:
                    r5 = a0;
                    r1 = a1;
                    r6 = a2;
                    r0 = undefined;
                    r7 = undefined;
                    r8 = undefined;
                    r9 = undefined;
                    r10 = undefined;
                    r11 = undefined;
                    r12 = undefined;
case 23: // try_start_1
                    r2 = r1;
                    r4 = r2.updateQueue;
                    r7 = r4;
                    r3 = null;
                    r2 = null;
                    if(!(r2 !== r4)) { _fun3088_ip = 51; continue _fun3088 }
case 42:
                    r4 = r7;
                    r2 = r4.lastEffect;
case 51:
                    r8 = r2;
                    if(!(r3 !== r2)) { _fun3088_ip = 184; continue _fun3088 }
case 61:
                    r2 = r8;
                    r2 = r2.next;
                    r9 = r2;
                    r7 = r2;
case 78:
                    r2 = r7;
                    r2 = r2.tag;
                    r3 = r5;
                    r2 = r2 & r3;
                    if(!(r2 === r3)) { _fun3088_ip = 166; continue _fun3088 }
case 97:
                    r2 = r7;
                    r2 = r2.inst;
                    r10 = r2;
                    r2 = r2.destroy;
                    r11 = r2;
                    if(!(r0 !== r2)) { _fun3088_ip = 166; continue _fun3088 }
case 122:
                    r2 = r10;
                    r2['destroy'] = r0;
                    r8 = r1;
                    r12 = r6;
case 137: // try_start_0
                    r2 = r11;
                    r2 = r2.bind(r0)();
case 144: // try_end0
                    _fun3088_ip = 166; continue _fun3088;
case 146: // catch_target0
                    CatchBlockStart(arg_register=14);
                    r13 = _closure1_slot470;
                    r3 = r8;
                    r2 = r12;
                    r2 = r13.bind(r0)(r3, r2, r14);
case 166:
                    r2 = r7;
                    r3 = r2.next;
                    r7 = r3;
                    r2 = r9;
                    if(r3 !== r2) { _fun3088_ip = 78; continue _fun3088 }
case 184: // try_end1
                    _fun3088_ip = 211; continue _fun3088;
case 186: // catch_target1
                    CatchBlockStart(arg_register=4);
                    r3 = _closure1_slot470;
                    r2 = r1;
                    r1 = r2.return;
                    r1 = r3.bind(r0)(r2, r1, r4);
case 211:
                    return r0;
                }
            };
            var _closure1_slot408 = r0;
            r0 = function(a0) { // Original name: commitClassCallbacks, environment: r5
                _fun3089: for(var _fun3089_ip = 0; ; ) switch(_fun3089_ip) {
case 0:
                    r4 = a0;
                    r1 = r4;
                    r0 = undefined;
                    r3 = undefined;
                    r2 = undefined;
                    r5 = r4.updateQueue;
                    r3 = r5;
                    r4 = null;
                    if(!(r4 !== r5)) { _fun3089_ip = 75; continue _fun3089 }
case 26:
                    r4 = r1;
                    r2 = r4.stateNode;
case 34: // try_start_0
                    r4 = _closure1_slot283;
                    r2 = r4.bind(r0)(r3, r2);
case 48: // try_end0
                    _fun3089_ip = 75; continue _fun3089;
case 50: // catch_target0
                    CatchBlockStart(arg_register=4);
                    r3 = _closure1_slot470;
                    r2 = r1;
                    r1 = r2.return;
                    r1 = r3.bind(r0)(r2, r1, r4);
case 75:
                    return r0;
                }
            };
            var _closure1_slot409 = r0;
            r0 = function(a0, a1, a2) { // Original name: safelyCallComponentWillUnmount, environment: r5
                _fun3090: for(var _fun3090_ip = 0; ; ) switch(_fun3090_ip) {
case 0:
                    r5 = a0;
                    r6 = a2;
                    r2 = r5;
                    r1 = a1;
                    r4 = r6;
                    r9 = _closure1_slot354;
                    r8 = r5.type;
                    r7 = r5.memoizedProps;
                    r0 = undefined;
                    r7 = r9.bind(r0)(r8, r7);
                    r6['props'] = r7;
                    r5 = r5.memoizedState;
                    r6['state'] = r5;
case 58: // try_start_0
                    r5 = r4;
                    r4 = r5.componentWillUnmount;
                    r4 = r4.bind(r5)();
case 71: // try_end0
                    _fun3090_ip = 87; continue _fun3090;
case 73: // catch_target0
                    CatchBlockStart(arg_register=4);
                    r3 = _closure1_slot470;
                    r1 = r3.bind(r0)(r2, r1, r4);
case 87:
                    return r0;
                }
            };
            var _closure1_slot410 = r0;
            r0 = function(a0, a1) { // Original name: safelyAttachRef, environment: r5
                _fun3091: for(var _fun3091_ip = 0; ; ) switch(_fun3091_ip) {
case 0:
                    r2 = a0;
                    r1 = a1;
                    r0 = undefined;
                    r5 = undefined;
                    r4 = undefined;
                    r3 = undefined;
case 14: // try_start_0
                    r6 = r2;
                    r7 = r6.ref;
                    r5 = r7;
                    r6 = null;
                    if(!(r6 !== r7)) { _fun3091_ip = 124; continue _fun3091 }
case 31:
                    r6 = r2;
                    r4 = r6.stateNode;
                    r7 = r6.tag;
                    r6 = 26;
                    if(!(r6 !== r7)) { _fun3091_ip = 70; continue _fun3091 }
case 51:
                    r6 = 27;
                    if(!(r6 !== r7)) { _fun3091_ip = 70; continue _fun3091 }
case 58:
                    r6 = 5;
                    if(!(r6 !== r7)) { _fun3091_ip = 70; continue _fun3091 }
case 65:
                    r3 = r4;
                    _fun3091_ip = 82; continue _fun3091;
case 70:
                    r6 = _closure1_slot250;
                    r3 = r6.bind(r0)(r4);
case 82:
                    r4 = r5;
                    r6 = 'function';
                    r4 = typeof r4;
                    if(!(r6 !== r4)) { _fun3091_ip = 110; continue _fun3091 }
case 96:
                    r6 = r5;
                    r4 = r3;
                    r6['current'] = r4;
                    _fun3091_ip = 124; continue _fun3091;
case 110:
                    r4 = r2;
                    r3 = r5.bind(r0)(r3);
                    r4['refCleanup'] = r3;
case 124: // try_end0
                    _fun3091_ip = 143; continue _fun3091;
case 126: // catch_target0
                    CatchBlockStart(arg_register=4);
                    r3 = _closure1_slot470;
                    r1 = r3.bind(r0)(r2, r1, r4);
case 143:
                    return r0;
                }
            };
            var _closure1_slot411 = r0;
            r0 = function(a0, a1) { // Original name: safelyDetachRef, environment: r5
                _fun3092: for(var _fun3092_ip = 0; ; ) switch(_fun3092_ip) {
case 0:
                    r2 = a0;
                    r1 = r2;
                    r3 = a1;
                    r0 = undefined;
                    r5 = undefined;
                    r4 = undefined;
                    r6 = r2.ref;
                    r5 = r6;
                    r4 = r2.refCleanup;
                    r2 = null;
                    if(!(r2 !== r6)) { _fun3092_ip = 161; continue _fun3092 }
case 38:
                    r6 = r4;
                    r7 = 'function';
                    r6 = typeof r6;
                    if(!(r7 !== r6)) { _fun3092_ip = 105; continue _fun3092 }
case 52:
                    r6 = r5;
                    r6 = typeof r6;
                    if(!(r7 !== r6)) { _fun3092_ip = 73; continue _fun3092 }
case 62:
                    r6 = r5;
                    r6['current'] = r2;
                    _fun3092_ip = 161; continue _fun3092;
case 73: // try_start_1
                    r5 = r5.bind(r0)(r2);
case 78: // try_end1
                    _fun3092_ip = 161; continue _fun3092;
case 80: // catch_target1
                    CatchBlockStart(arg_register=8);
                    r7 = _closure1_slot470;
                    r6 = r1;
                    r5 = r3;
                    r5 = r7.bind(r0)(r6, r5, r8);
                    _fun3092_ip = 161; continue _fun3092;
case 105: // try_start_0 // try_start_2
                    r4 = r4.bind(r0)();
case 109: // try_end0
                    _fun3092_ip = 131; continue _fun3092;
case 111: // catch_target0
                    CatchBlockStart(arg_register=6);
                    r5 = _closure1_slot470;
                    r4 = r1;
                    r3 = r5.bind(r0)(r4, r3, r6);
case 131: // try_end2
                    r3 = r1;
                    r3['refCleanup'] = r2;
                    r3 = r3.alternate;
                    r1 = r3;
                    if(!(r2 != r3)) { _fun3092_ip = 161; continue _fun3092 }
case 152:
                    r3 = r1;
                    r3['refCleanup'] = r2;
case 161:
                    return r0;
case 163: // catch_target2
                    CatchBlockStart(arg_register=0);
                    r3 = r1;
                    r3['refCleanup'] = r2;
                    r3 = r3.alternate;
                    r1 = r3;
                    if(!(r2 != r3)) { _fun3092_ip = 192; continue _fun3092 }
case 186:
                    r1['refCleanup'] = r2;
case 192:
                    throw r0;
                }
            };
            var _closure1_slot412 = r0;
            r0 = function(a0) { // Original name: isHostParent, environment: r5
                _fun3093: for(var _fun3093_ip = 0; ; ) switch(_fun3093_ip) {
case 0:
                    r1 = a0;
                    r2 = r1.tag;
                    r0 = 5;
                    r0 = r0 === r2;
                    if(r0) { _fun3093_ip = 30; continue _fun3093 }
case 18:
                    r3 = r1.tag;
                    r2 = 3;
                    r0 = r2 === r3;
case 30:
                    if(r0) { _fun3093_ip = 45; continue _fun3093 }
case 33:
                    r2 = r1.tag;
                    r1 = 4;
                    r0 = r1 === r2;
case 45:
                    return r0;
                }
            };
            var _closure1_slot413 = r0;
            r0 = function(a0) { // Original name: getHostSibling, environment: r5
                _fun3094: for(var _fun3094_ip = 0; ; ) switch(_fun3094_ip) {
case 0:
                    r10 = a0;
                    r9 = 2;
                    r8 = 18;
                    r7 = 6;
                    r6 = 5;
                    r5 = 4;
                    r0 = null;
                    r3 = undefined;
case 25:
                    r2 = r10.sibling;
                    r11 = r10;
                    r1 = r11;
                    if(!(r0 === r2)) { _fun3094_ip = 96; continue _fun3094 }
case 40:
                    r12 = r11.return;
                    r2 = r11;
                    if(!(r0 !== r12)) { _fun3094_ip = 293; continue _fun3094 }
case 55:
                    r13 = _closure1_slot413;
                    r12 = r2.return;
                    r12 = r13.bind(r3)(r12);
                    if(r12) { _fun3094_ip = 293; continue _fun3094 }
case 76:
                    r12 = r2.return;
                    r2 = r12.sibling;
                    r11 = r12;
                    r1 = r11;
                    if(r0 === r2) { _fun3094_ip = 40; continue _fun3094 }
case 96:
                    r11 = r1.sibling;
                    r2 = r1.return;
                    r11['return'] = r2;
                    r12 = r1.sibling;
                    r2 = r12.tag;
                    r1 = r12;
                    if(!(r6 !== r2)) { _fun3094_ip = 268; continue _fun3094 }
case 132:
                    r2 = r12.tag;
                    r1 = r12;
                    if(!(r7 !== r2)) { _fun3094_ip = 268; continue _fun3094 }
case 147:
                    r2 = r12.tag;
                    r11 = r12;
                    r1 = r11;
                    if(!(r8 !== r2)) { _fun3094_ip = 268; continue _fun3094 }
case 162:
                    r2 = r11.flags;
                    r12 = r2 & r9;
                    r2 = r11;
                    r10 = r2;
                    if(r12) { _fun3094_ip = 25; continue _fun3094 }
case 183:
                    r12 = r2.child;
                    r10 = r2;
                    if(r0 === r12) { _fun3094_ip = 25; continue _fun3094 }
case 198:
                    r12 = r2.tag;
                    r10 = r2;
                    if(r5 === r12) { _fun3094_ip = 25; continue _fun3094 }
case 213:
                    r12 = r2.child;
                    r12['return'] = r2;
                    r12 = r2.child;
                    r2 = r12.tag;
                    r1 = r12;
                    if(!(r6 !== r2)) { _fun3094_ip = 268; continue _fun3094 }
case 241:
                    r2 = r12.tag;
                    r1 = r12;
                    if(!(r7 !== r2)) { _fun3094_ip = 268; continue _fun3094 }
case 253:
                    r2 = r12.tag;
                    r11 = r12;
                    r1 = r11;
                    if(r8 !== r2) { _fun3094_ip = 162; continue _fun3094 }
case 268:
                    r2 = r1.flags;
                    r2 = r2 & r9;
                    r10 = r1;
                    if(r2) { _fun3094_ip = 25; continue _fun3094 }
case 286:
                    r1 = r1.stateNode;
                    return r1;
case 293:
                    return r0;
                }
            };
            var _closure1_slot414 = r0;
            r0 = function(a0, a1, a2) { // Original name: insertOrAppendPlacementNodeIntoContainer, environment: r5
                _fun3095: for(var _fun3095_ip = 0; ; ) switch(_fun3095_ip) {
case 0:
                    r1 = a0;
                    r2 = a1;
                    r0 = a2;
                    r4 = r1.tag;
                    r3 = 5;
                    if(!(r3 !== r4)) { _fun3095_ip = 101; continue _fun3095 }
case 21:
                    r3 = 6;
                    if(!(r3 !== r4)) { _fun3095_ip = 101; continue _fun3095 }
case 28:
                    r3 = 4;
                    if(!(r3 !== r4)) { _fun3095_ip = 192; continue _fun3095 }
case 38:
                    r3 = r1.child;
                    r6 = null;
                    if(!(r6 !== r3)) { _fun3095_ip = 192; continue _fun3095 }
case 52:
                    r7 = _closure1_slot415;
                    r4 = undefined;
                    r7 = r7.bind(r4)(r3, r2, r0);
                    r3 = r3.sibling;
                    if(!(r6 !== r3)) { _fun3095_ip = 192; continue _fun3095 }
case 78:
                    r7 = _closure1_slot415;
                    r7 = r7.bind(r4)(r3, r2, r0);
                    r3 = r3.sibling;
                    if(r6 !== r3) { _fun3095_ip = 78; continue _fun3095 }
case 99:
                    _fun3095_ip = 192; continue _fun3095;
case 101:
                    r1 = r1.stateNode;
                    if(r2) { _fun3095_ip = 181; continue _fun3095 }
case 109:
                    r4 = _closure1_slot0;
                    r3 = _closure1_slot1;
                    r2 = 2;
                    r3 = r3[r2];
                    r2 = undefined;
                    r2 = r4.bind(r2)(r3);
                    r3 = r2.UIManager;
                    r2 = r3.setChildren;
                    r6 = 'number';
                    r5 = typeof r1;
                    r4 = r1;
                    if(!(r6 !== r5)) { _fun3095_ip = 165; continue _fun3095 }
case 160:
                    r4 = r1._nativeTag;
case 165:
                    r1 = new Array(1);
                    r1[0] = r4;
                    r1 = r2.bind(r3)(r0, r1);
                    _fun3095_ip = 192; continue _fun3095;
case 181:
                    r1 = 'number';
                    r0 = typeof r0;
                    if(!(r1 !== r0)) { _fun3095_ip = 196; continue _fun3095 }
case 192:
                    r0 = undefined;
                    return r0;
case 196:
                    r0 = global;
                    r2 = r0.Error;
                    r1 = undefined;
                    r0 = 'Container does not support insertBefore operation';
                    r0 = r2.bind(r1)(r0);
                    throw r0;
                }
            };
            var _closure1_slot415 = r0;
            r0 = function(a0, a1, a2) { // Original name: insertOrAppendPlacementNode, environment: r5
                _fun3096: for(var _fun3096_ip = 0; ; ) switch(_fun3096_ip) {
case 0:
                    r0 = a0;
                    r3 = a1;
                    r2 = a2;
                    r4 = r0.tag;
                    r1 = 5;
                    if(!(r1 !== r4)) { _fun3096_ip = 107; continue _fun3096 }
case 21:
                    r1 = 6;
                    if(!(r1 !== r4)) { _fun3096_ip = 107; continue _fun3096 }
case 28:
                    r1 = 4;
                    if(!(r1 !== r4)) { _fun3096_ip = 667; continue _fun3096 }
case 38:
                    r1 = r0.child;
                    r6 = null;
                    if(!(r6 !== r1)) { _fun3096_ip = 667; continue _fun3096 }
case 52:
                    r7 = _closure1_slot416;
                    r4 = undefined;
                    r7 = r7.bind(r4)(r1, r3, r2);
                    r1 = r1.sibling;
                    if(!(r6 !== r1)) { _fun3096_ip = 667; continue _fun3096 }
case 81:
                    r7 = _closure1_slot416;
                    r7 = r7.bind(r4)(r1, r3, r2);
                    r1 = r1.sibling;
                    if(r6 !== r1) { _fun3096_ip = 81; continue _fun3096 }
case 102:
                    _fun3096_ip = 667; continue _fun3096;
case 107:
                    r6 = r0.stateNode;
                    if(r3) { _fun3096_ip = 391; continue _fun3096 }
case 118:
                    r4 = 'number';
                    r0 = typeof r6;
                    r1 = r6;
                    if(!(r4 !== r0)) { _fun3096_ip = 137; continue _fun3096 }
case 132:
                    r1 = r6._nativeTag;
case 137:
                    r0 = r2._children;
                    r4 = r0.indexOf;
                    r4 = r4.bind(r0)(r6);
                    r5 = 0;
                    if(!(!(r5 <= r4))) { _fun3096_ip = 269; continue _fun3096 }
case 159:
                    r5 = r0.push;
                    r5 = r5.bind(r0)(r6);
                    r8 = _closure1_slot0;
                    r7 = _closure1_slot1;
                    r5 = 2;
                    r7 = r7[r5];
                    r5 = undefined;
                    r5 = r8.bind(r5)(r7);
                    r12 = r5.UIManager;
                    r11 = r12.manageChildren;
                    r19 = r2._nativeTag;
                    r9 = new Array(1);
                    r9[0] = r1;
                    r5 = r0.length;
                    r1 = 1;
                    r1 = r5 - r1;
                    r8 = new Array(1);
                    r8[0] = r1;
                    r18 = new Array(0);
                    r17 = new Array(0);
                    r14 = new Array(0);
                    r20 = r12;
                    r16 = r9;
                    r15 = r8;
                    r1 = r20[r11](r19, r18, r17, r16, r15, r14, r13);
                    _fun3096_ip = 667; continue _fun3096;
case 269:
                    r5 = r0.splice;
                    r1 = 1;
                    r5 = r5.bind(r0)(r4, r1);
                    r5 = r0.push;
                    r5 = r5.bind(r0)(r6);
                    r8 = _closure1_slot0;
                    r7 = _closure1_slot1;
                    r5 = 2;
                    r7 = r7[r5];
                    r5 = undefined;
                    r5 = r8.bind(r5)(r7);
                    r10 = r5.UIManager;
                    r9 = r10.manageChildren;
                    r19 = r2._nativeTag;
                    r7 = new Array(1);
                    r7[0] = r4;
                    r0 = r0.length;
                    r0 = r0 - r1;
                    r5 = new Array(1);
                    r5[0] = r0;
                    r16 = new Array(0);
                    r15 = new Array(0);
                    r14 = new Array(0);
                    r20 = r10;
                    r18 = r7;
                    r17 = r5;
                    r0 = r20[r9](r19, r18, r17, r16, r15, r14, r13);
                    _fun3096_ip = 667; continue _fun3096;
case 391:
                    r5 = r2._children;
                    r0 = r5.indexOf;
                    r1 = r0.bind(r5)(r6);
                    r4 = 0;
                    if(!(!(r4 <= r1))) { _fun3096_ip = 546; continue _fun3096 }
case 416:
                    r0 = r5.indexOf;
                    r0 = r0.bind(r5)(r3);
                    r7 = r5.splice;
                    r7 = r7.bind(r5)(r0, r4, r6);
                    r9 = _closure1_slot0;
                    r8 = _closure1_slot1;
                    r7 = 2;
                    r8 = r8[r7];
                    r7 = undefined;
                    r7 = r9.bind(r7)(r8);
                    r13 = r7.UIManager;
                    r12 = r13.manageChildren;
                    r11 = r2._nativeTag;
                    r9 = 'number';
                    r8 = typeof r6;
                    r7 = r6;
                    if(!(r9 !== r8)) { _fun3096_ip = 500; continue _fun3096 }
case 495:
                    r7 = r6._nativeTag;
case 500:
                    r10 = new Array(1);
                    r10[0] = r7;
                    r9 = new Array(1);
                    r9[0] = r0;
                    r18 = new Array(0);
                    r17 = new Array(0);
                    r14 = new Array(0);
                    r20 = r13;
                    r19 = r11;
                    r16 = r10;
                    r15 = r9;
                    r0 = r20[r12](r19, r18, r17, r16, r15, r14, r13);
                    _fun3096_ip = 667; continue _fun3096;
case 546:
                    r7 = r5.splice;
                    r0 = 1;
                    r0 = r7.bind(r5)(r1, r0);
                    r0 = r5.indexOf;
                    r0 = r0.bind(r5)(r3);
                    r3 = r5.splice;
                    r3 = r3.bind(r5)(r0, r4, r6);
                    r5 = _closure1_slot0;
                    r4 = _closure1_slot1;
                    r3 = 2;
                    r4 = r4[r3];
                    r3 = undefined;
                    r3 = r5.bind(r3)(r4);
                    r7 = r3.UIManager;
                    r6 = r7.manageChildren;
                    r19 = r2._nativeTag;
                    r4 = new Array(1);
                    r4[0] = r1;
                    r3 = new Array(1);
                    r3[0] = r0;
                    r16 = new Array(0);
                    r15 = new Array(0);
                    r14 = new Array(0);
                    r20 = r7;
                    r18 = r4;
                    r17 = r3;
                    r0 = r20[r6](r19, r18, r17, r16, r15, r14, r13);
case 667:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot416 = r0;
            r0 = function(a0, a1) { // Original name: commitBeforeMutationEffects, environment: r5
                _fun3097: for(var _fun3097_ip = 0; ; ) switch(_fun3097_ip) {
case 0:
                    r0 = a1;
                    r7 = a0;
                    r8 = r0;
                    r6 = undefined;
                    r9 = undefined;
                    r10 = undefined;
                    r11 = undefined;
                    r12 = undefined;
                    _closure1_slot139 = r0;
                    r5 = null;
                    r4 = 1024;
                    r3 = 0;
                    r1 = 1028;
                    if(!(r5 !== r0)) { _fun3097_ip = 387; continue _fun3097 }
case 49:
                    r0 = _closure1_slot139;
                    r7 = r0;
                    r8 = r0.child;
                    r0 = r0.subtreeFlags;
                    r0 = r0 & r1;
                    if(!(r3 !== r0)) { _fun3097_ip = 84; continue _fun3097 }
case 74:
                    r0 = r8;
                    if(!(r5 === r0)) { _fun3097_ip = 360; continue _fun3097 }
case 84:
                    r0 = _closure1_slot139;
                    if(!(r5 !== r0)) { _fun3097_ip = 376; continue _fun3097 }
case 95:
                    r0 = _closure1_slot139;
                    r7 = r0;
                    r9 = r0.alternate;
                    r8 = r0.flags;
                    r0 = r0.tag;
                    SwitchImm(value_reg=0, jump_table_address=399, default_jump_address=271, unsigned_min_value=0, unsigned_max_value=27) // Switch table: [282, 135, 271, 282, 282, 282, 282, 271, 271, 271, 271, 282, 271, 271, 271, 282, 271, 282, 271, 271, 271, 271, 271, 271, 271, 271, 282, 282];
case 135:
                    r0 = r8;
                    r0 = r0 & r4;
                    if(!(r3 !== r0)) { _fun3097_ip = 282; continue _fun3097 }
case 149:
                    r0 = r9;
                    if(!(r5 !== r0)) { _fun3097_ip = 282; continue _fun3097 }
case 159:
                    r8 = undefined;
                    r0 = r7;
                    r10 = r0;
                    r13 = r9;
                    r11 = r13.memoizedProps;
                    r9 = r13.memoizedState;
                    r12 = r0.stateNode;
case 185: // try_start_0
                    r14 = _closure1_slot354;
                    r15 = r10;
                    r13 = r15.type;
                    r0 = r11;
                    r16 = r15.elementType;
                    r15 = r15.type;
                    r15 = r14.bind(r6)(r13, r0, r6);
                    r13 = r12;
                    r14 = r13.getSnapshotBeforeUpdate;
                    r0 = r9;
                    r0 = r14.bind(r13)(r15, r0);
                    r8 = r0;
                    r13['__reactInternalSnapshotBeforeUpdate'] = r0;
case 245: // try_end0
                    _fun3097_ip = 282; continue _fun3097;
case 247: // catch_target0
                    CatchBlockStart(arg_register=15);
                    r14 = _closure1_slot470;
                    r13 = r10;
                    r0 = r13.return;
                    r0 = r14.bind(r6)(r13, r0, r15);
                    _fun3097_ip = 282; continue _fun3097;
case 271:
                    r0 = r8;
                    r0 = r0 & r4;
                    if(!(r3 === r0)) { _fun3097_ip = 341; continue _fun3097 }
case 282:
                    r0 = r7;
                    r0 = r0.sibling;
                    r8 = r0;
                    if(!(r5 === r0)) { _fun3097_ip = 318; continue _fun3097 }
case 297:
                    r0 = r7;
                    r0 = r0.return;
                    _closure1_slot139 = r0;
                    if(r5 !== r0) { _fun3097_ip = 95; continue _fun3097 }
case 316:
                    _fun3097_ip = 376; continue _fun3097;
case 318:
                    r0 = r8;
                    r13 = r7;
                    r13 = r13.return;
                    r0['return'] = r13;
                    _closure1_slot139 = r0;
                    _fun3097_ip = 376; continue _fun3097;
case 341:
                    r0 = global;
                    r13 = r0.Error;
                    r0 = 'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.';
                    r0 = r13.bind(r6)(r0);
                    throw r0;
case 360:
                    r0 = r8;
                    r13 = r7;
                    r0['return'] = r13;
                    _closure1_slot139 = r0;
case 376:
                    r0 = _closure1_slot139;
                    if(r5 !== r0) { _fun3097_ip = 49; continue _fun3097 }
case 387:
                    r0 = _closure1_slot140;
                    r1 = false;
                    _closure1_slot140 = r1;
                    return r0;
                }
            };
            var _closure1_slot417 = r0;
            r0 = function(a0, a1, a2) { // Original name: commitLayoutEffectOnFiber, environment: r5
                _fun3098: for(var _fun3098_ip = 0; ; ) switch(_fun3098_ip) {
case 0:
                    r3 = a2;
                    r2 = a0;
                    r5 = a1;
                    r1 = r3;
                    r0 = undefined;
                    r4 = undefined;
                    r6 = undefined;
                    r4 = r3.flags;
                    r3 = r3.tag;
                    SwitchImm(value_reg=3, jump_table_address=958, default_jump_address=942, unsigned_min_value=0, unsigned_max_value=27) // Switch table: [890, 651, 942, 459, 942, 396, 942, 942, 942, 942, 942, 890, 371, 346, 942, 890, 942, 942, 942, 942, 942, 942, 46, 942, 942, 942, 396, 396];
case 46:
                    r3 = r1;
                    r7 = r3.mode;
                    r3 = 1;
                    r3 = r7 & r3;
                    r13 = 0;
                    if(!(r13 === r3)) { _fun3098_ip = 92; continue _fun3098 }
case 67:
                    r8 = _closure1_slot427;
                    r7 = r2;
                    r3 = r1;
                    r3 = r8.bind(r0)(r7, r3);
                    _fun3098_ip = 252; continue _fun3098;
case 92:
                    r3 = r1;
                    r3 = r3.memoizedState;
                    r7 = null;
                    r3 = r7 !== r3;
                    if(r3) { _fun3098_ip = 116; continue _fun3098 }
case 109:
                    r3 = _closure1_slot136;
case 116:
                    r6 = r3;
                    if(r3) { _fun3098_ip = 252; continue _fun3098 }
case 125:
                    r3 = r5;
                    r9 = r7 !== r3;
                    if(!r9) { _fun3098_ip = 147; continue _fun3098 }
case 135:
                    r3 = r5;
                    r3 = r3.memoizedState;
                    r9 = r7 !== r3;
case 147:
                    if(r9) { _fun3098_ip = 157; continue _fun3098 }
case 150:
                    r9 = _closure1_slot137;
case 157:
                    r5 = r9;
                    r8 = _closure1_slot136;
                    r3 = _closure1_slot137;
                    r10 = r6;
                    _closure1_slot136 = r10;
                    _closure1_slot137 = r9;
                    if(!r9) { _fun3098_ip = 227; continue _fun3098 }
case 185:
                    if(r3) { _fun3098_ip = 227; continue _fun3098 }
case 188:
                    r12 = _closure1_slot429;
                    r11 = r2;
                    r10 = r1;
                    r14 = r10.subtreeFlags;
                    r9 = 8772;
                    r9 = r14 & r9;
                    r9 = r13 !== r9;
                    r9 = r12.bind(r0)(r11, r10, r9);
                    _fun3098_ip = 244; continue _fun3098;
case 227:
                    r11 = _closure1_slot427;
                    r10 = r2;
                    r9 = r1;
                    r9 = r11.bind(r0)(r10, r9);
case 244:
                    _closure1_slot136 = r8;
                    _closure1_slot137 = r3;
case 252:
                    r7 = r4;
                    r3 = 512;
                    r3 = r7 & r3;
                    if(!r3) { _fun3098_ip = 956; continue _fun3098 }
case 271:
                    r3 = r1;
                    r3 = r3.memoizedProps;
                    r7 = r3.mode;
                    r3 = 'manual';
                    if(!(r3 !== r7)) { _fun3098_ip = 319; continue _fun3098 }
case 292:
                    r8 = _closure1_slot412;
                    r7 = r1;
                    r3 = r7.return;
                    r3 = r8.bind(r0)(r7, r3);
                    _fun3098_ip = 956; continue _fun3098;
case 319:
                    r8 = _closure1_slot411;
                    r7 = r1;
                    r3 = r7.return;
                    r3 = r8.bind(r0)(r7, r3);
                    _fun3098_ip = 956; continue _fun3098;
case 346:
                    r8 = _closure1_slot427;
                    r7 = r2;
                    r3 = r1;
                    r3 = r8.bind(r0)(r7, r3);
                    _fun3098_ip = 956; continue _fun3098;
case 371:
                    r8 = _closure1_slot427;
                    r7 = r2;
                    r3 = r1;
                    r3 = r8.bind(r0)(r7, r3);
                    _fun3098_ip = 956; continue _fun3098;
case 396:
                    r9 = _closure1_slot427;
                    r8 = r2;
                    r7 = r1;
                    r7 = r9.bind(r0)(r8, r7);
                    r8 = r4;
                    r7 = 512;
                    r7 = r8 & r7;
                    if(!r7) { _fun3098_ip = 956; continue _fun3098 }
case 435:
                    r8 = _closure1_slot411;
                    r7 = r1;
                    r3 = r7.return;
                    r3 = r8.bind(r0)(r7, r3);
                    _fun3098_ip = 956; continue _fun3098;
case 459:
                    r9 = _closure1_slot427;
                    r8 = r2;
                    r7 = r1;
                    r7 = r9.bind(r0)(r8, r7);
                    r8 = r4;
                    r7 = 64;
                    r7 = r8 & r7;
                    if(!r7) { _fun3098_ip = 956; continue _fun3098 }
case 495:
                    r7 = r1;
                    r7 = r7.updateQueue;
                    r4 = r7;
                    r8 = null;
                    if(!(r8 !== r7)) { _fun3098_ip = 956; continue _fun3098 }
case 515:
                    r2 = null;
                    r7 = r1;
                    r7 = r7.child;
                    if(!(r8 === r7)) { _fun3098_ip = 531; continue _fun3098 }
case 529:
                    _fun3098_ip = 602; continue _fun3098;
case 531:
                    r7 = r1;
                    r7 = r7.child;
                    r8 = r7.tag;
                    r7 = 27;
                    if(!(r7 !== r8)) { _fun3098_ip = 580; continue _fun3098 }
case 551:
                    r7 = 5;
                    if(!(r7 !== r8)) { _fun3098_ip = 580; continue _fun3098 }
case 558:
                    r7 = 1;
                    if(!(r7 === r8)) { _fun3098_ip = 602; continue _fun3098 }
case 565:
                    r7 = r1;
                    r7 = r7.child;
                    r2 = r7.stateNode;
                    _fun3098_ip = 602; continue _fun3098;
case 580:
                    r8 = _closure1_slot250;
                    r7 = r1;
                    r7 = r7.child;
                    r7 = r7.stateNode;
                    r2 = r8.bind(r0)(r7);
case 602: // try_start_0
                    r9 = _closure1_slot283;
                    r8 = r4;
                    r7 = r2;
                    r7 = r9.bind(r0)(r8, r7);
case 619: // try_end0
                    _fun3098_ip = 956; continue _fun3098;
case 624: // catch_target0
                    CatchBlockStart(arg_register=9);
                    r8 = _closure1_slot470;
                    r7 = r1;
                    r3 = r7.return;
                    r3 = r8.bind(r0)(r7, r3, r9);
                    _fun3098_ip = 956; continue _fun3098;
case 651:
                    r9 = _closure1_slot427;
                    r8 = r2;
                    r7 = r1;
                    r7 = r9.bind(r0)(r8, r7);
                    r8 = r4;
                    r7 = 4;
                    r7 = r8 & r7;
                    if(!r7) { _fun3098_ip = 827; continue _fun3098 }
case 687:
                    r7 = r1;
                    r2 = r7.stateNode;
                    r8 = r5;
                    r7 = null;
                    if(!(r7 !== r8)) { _fun3098_ip = 790; continue _fun3098 }
case 704:
                    r10 = _closure1_slot354;
                    r7 = r1;
                    r9 = r7.type;
                    r7 = r5;
                    r8 = r7.memoizedProps;
                    r6 = r10.bind(r0)(r9, r8);
                    r5 = r7.memoizedState;
case 736: // try_start_1
                    r9 = r2;
                    r8 = r9.componentDidUpdate;
                    r7 = r6;
                    r6 = r5;
                    r5 = r9.__reactInternalSnapshotBeforeUpdate;
                    r5 = r8.bind(r9)(r7, r6, r5);
case 764: // try_end1
                    _fun3098_ip = 827; continue _fun3098;
case 766: // catch_target1
                    CatchBlockStart(arg_register=8);
                    r7 = _closure1_slot470;
                    r6 = r1;
                    r5 = r6.return;
                    r5 = r7.bind(r0)(r6, r5, r8);
                    _fun3098_ip = 827; continue _fun3098;
case 790: // try_start_2
                    r6 = r2;
                    r5 = r6.componentDidMount;
                    r5 = r5.bind(r6)();
case 803: // try_end2
                    _fun3098_ip = 827; continue _fun3098;
case 805: // catch_target2
                    CatchBlockStart(arg_register=8);
                    r7 = _closure1_slot470;
                    r6 = r1;
                    r5 = r6.return;
                    r5 = r7.bind(r0)(r6, r5, r8);
case 827:
                    r6 = r4;
                    r5 = 64;
                    r5 = r6 & r5;
                    if(!r5) { _fun3098_ip = 853; continue _fun3098 }
case 840:
                    r6 = _closure1_slot409;
                    r5 = r1;
                    r5 = r6.bind(r0)(r5);
case 853:
                    r6 = r4;
                    r5 = 512;
                    r5 = r6 & r5;
                    if(!r5) { _fun3098_ip = 956; continue _fun3098 }
case 869:
                    r6 = _closure1_slot411;
                    r5 = r1;
                    r3 = r5.return;
                    r3 = r6.bind(r0)(r5, r3);
                    _fun3098_ip = 956; continue _fun3098;
case 890:
                    r7 = _closure1_slot427;
                    r6 = r2;
                    r5 = r1;
                    r5 = r7.bind(r0)(r6, r5);
                    r5 = r4;
                    r4 = 4;
                    r4 = r5 & r4;
                    if(!r4) { _fun3098_ip = 956; continue _fun3098 }
case 923:
                    r5 = _closure1_slot407;
                    r4 = r1;
                    r3 = 5;
                    r3 = r5.bind(r0)(r3, r4);
                    _fun3098_ip = 956; continue _fun3098;
case 942:
                    r3 = _closure1_slot427;
                    r1 = r3.bind(r0)(r2, r1);
case 956:
                    return r0;
                }
            };
            var _closure1_slot418 = r0;
            r0 = function(a0) { // Original name: detachFiberAfterEffects, environment: r5
                _fun3099: for(var _fun3099_ip = 0; ; ) switch(_fun3099_ip) {
case 0:
                    r1 = a0;
                    r4 = r1.alternate;
                    r0 = null;
                    if(!(r0 !== r4)) { _fun3099_ip = 35; continue _fun3099 }
case 14:
                    r1['alternate'] = r0;
                    r3 = _closure1_slot419;
                    r2 = undefined;
                    r2 = r3.bind(r2)(r4);
case 35:
                    r1['child'] = r0;
                    r1['deletions'] = r0;
                    r1['sibling'] = r0;
                    r1['stateNode'] = r0;
                    r1['return'] = r0;
                    r1['dependencies'] = r0;
                    r1['memoizedProps'] = r0;
                    r1['memoizedState'] = r0;
                    r1['pendingProps'] = r0;
                    r1['stateNode'] = r0;
                    r1['updateQueue'] = r0;
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot419 = r0;
            r0 = function(a0, a1, a2) { // Original name: recursivelyTraverseDeletionEffects, environment: r5
                _fun3100: for(var _fun3100_ip = 0; ; ) switch(_fun3100_ip) {
case 0:
                    r5 = a0;
                    r4 = a1;
                    r0 = a2;
                    r3 = r0.child;
                    r0 = undefined;
                    r1 = null;
                    if(!(r1 !== r3)) { _fun3100_ip = 46; continue _fun3100 }
case 25:
                    r6 = _closure1_slot421;
                    r6 = r6.bind(r0)(r5, r4, r3);
                    r3 = r3.sibling;
                    if(r1 !== r3) { _fun3100_ip = 25; continue _fun3100 }
case 46:
                    return r0;
                }
            };
            var _closure1_slot420 = r0;
            r0 = function(a0, a1, a2) { // Original name: commitDeletionEffectsOnFiber, environment: r5
                _fun3101: for(var _fun3101_ip = 0; ; ) switch(_fun3101_ip) {
case 0:
                    r3 = a0;
                    r2 = a1;
                    r1 = a2;
                    r0 = undefined;
                    r5 = undefined;
                    r6 = _closure1_slot58;
                    if(!r6) { _fun3101_ip = 71; continue _fun3101 }
case 23:
                    r6 = _closure1_slot58;
                    r6 = r6.onCommitFiberUnmount;
                    r7 = 'function';
                    r6 = typeof r6;
                    if(!(r7 === r6)) { _fun3101_ip = 71; continue _fun3101 }
case 44: // try_start_0
                    r9 = _closure1_slot58;
                    r8 = r9.onCommitFiberUnmount;
                    r7 = _closure1_slot57;
                    r6 = r1;
                    r6 = r8.bind(r9)(r7, r6);
case 67: // try_end0
                    _fun3101_ip = 71; continue _fun3101;
case 69: // catch_target0
                    CatchBlockStart(arg_register=6);
case 71:
                    r6 = r1;
                    r6 = r6.tag;
                    SwitchImm(value_reg=6, jump_table_address=892, default_jump_address=878, unsigned_min_value=0, unsigned_max_value=27) // Switch table: [348, 252, 878, 878, 430, 521, 545, 878, 878, 878, 878, 348, 878, 878, 348, 348, 878, 878, 495, 878, 878, 226, 97, 878, 878, 878, 521, 521];
case 97:
                    r6 = _closure1_slot137;
                    if(r6) { _fun3101_ip = 121; continue _fun3101 }
case 104:
                    r8 = _closure1_slot412;
                    r7 = r1;
                    r6 = r2;
                    r6 = r8.bind(r0)(r7, r6);
case 121:
                    r6 = r1;
                    r7 = r6.mode;
                    r6 = 1;
                    r6 = r7 & r6;
                    if(r6) { _fun3101_ip = 165; continue _fun3101 }
case 139:
                    r9 = _closure1_slot420;
                    r8 = r3;
                    r7 = r2;
                    r6 = r1;
                    r6 = r9.bind(r0)(r8, r7, r6);
                    _fun3101_ip = 890; continue _fun3101;
case 165:
                    r6 = _closure1_slot137;
                    r5 = r6;
                    if(r6) { _fun3101_ip = 189; continue _fun3101 }
case 175:
                    r7 = r1;
                    r8 = r7.memoizedState;
                    r7 = null;
                    r6 = r7 !== r8;
case 189:
                    _closure1_slot137 = r6;
                    r9 = _closure1_slot420;
                    r8 = r3;
                    r7 = r2;
                    r6 = r1;
                    r6 = r9.bind(r0)(r8, r7, r6);
                    r6 = r5;
                    _closure1_slot137 = r6;
                    _fun3101_ip = 890; continue _fun3101;
case 226:
                    r9 = _closure1_slot420;
                    r8 = r3;
                    r7 = r2;
                    r6 = r1;
                    r6 = r9.bind(r0)(r8, r7, r6);
                    _fun3101_ip = 890; continue _fun3101;
case 252:
                    r6 = _closure1_slot137;
                    if(r6) { _fun3101_ip = 322; continue _fun3101 }
case 259:
                    r8 = _closure1_slot412;
                    r6 = r1;
                    r7 = r2;
                    r7 = r8.bind(r0)(r6, r7);
                    r6 = r6.stateNode;
                    r5 = r6;
                    r6 = r6.componentWillUnmount;
                    r7 = 'function';
                    r6 = typeof r6;
                    if(!(r7 === r6)) { _fun3101_ip = 322; continue _fun3101 }
case 301:
                    r9 = _closure1_slot410;
                    r8 = r1;
                    r7 = r2;
                    r6 = r5;
                    r6 = r9.bind(r0)(r8, r7, r6);
case 322:
                    r9 = _closure1_slot420;
                    r8 = r3;
                    r7 = r2;
                    r6 = r1;
                    r6 = r9.bind(r0)(r8, r7, r6);
                    _fun3101_ip = 890; continue _fun3101;
case 348:
                    r6 = _closure1_slot137;
                    if(r6) { _fun3101_ip = 376; continue _fun3101 }
case 355:
                    r9 = _closure1_slot408;
                    r8 = r1;
                    r7 = r2;
                    r6 = 2;
                    r6 = r9.bind(r0)(r6, r8, r7);
case 376:
                    r6 = _closure1_slot137;
                    if(r6) { _fun3101_ip = 404; continue _fun3101 }
case 383:
                    r9 = _closure1_slot408;
                    r8 = r1;
                    r7 = r2;
                    r6 = 4;
                    r6 = r9.bind(r0)(r6, r8, r7);
case 404:
                    r9 = _closure1_slot420;
                    r8 = r3;
                    r7 = r2;
                    r6 = r1;
                    r6 = r9.bind(r0)(r8, r7, r6);
                    _fun3101_ip = 890; continue _fun3101;
case 430:
                    r7 = _closure1_slot141;
                    r5 = r7;
                    r6 = _closure1_slot142;
                    r11 = r1;
                    r8 = r11.stateNode;
                    r8 = r8.containerInfo;
                    _closure1_slot141 = r8;
                    r8 = true;
                    _closure1_slot142 = r8;
                    r10 = _closure1_slot420;
                    r9 = r3;
                    r8 = r2;
                    r8 = r10.bind(r0)(r9, r8, r11);
                    _closure1_slot141 = r7;
                    _closure1_slot142 = r6;
                    _fun3101_ip = 890; continue _fun3101;
case 495:
                    r7 = _closure1_slot141;
                    r6 = null;
                    if(!(r6 !== r7)) { _fun3101_ip = 890; continue _fun3101 }
case 508:
                    r6 = _closure1_slot245;
                    r6 = r6.bind(r0)();
                    _fun3101_ip = 890; continue _fun3101;
case 521:
                    r6 = _closure1_slot137;
                    if(r6) { _fun3101_ip = 545; continue _fun3101 }
case 528:
                    r8 = _closure1_slot412;
                    r7 = r1;
                    r6 = r2;
                    r6 = r8.bind(r0)(r7, r6);
case 545:
                    r7 = _closure1_slot141;
                    r8 = _closure1_slot142;
                    r6 = null;
                    _closure1_slot141 = r6;
                    r12 = _closure1_slot420;
                    r11 = r3;
                    r10 = r2;
                    r9 = r1;
                    r9 = r12.bind(r0)(r11, r10, r9);
                    _closure1_slot141 = r7;
                    _closure1_slot142 = r8;
                    if(!(r6 !== r7)) { _fun3101_ip = 890; continue _fun3101 }
case 595:
                    r6 = _closure1_slot142;
                    if(r6) { _fun3101_ip = 764; continue _fun3101 }
case 605: // try_start_1
                    r6 = _closure1_slot141;
                    r3 = r6;
                    r7 = r1;
                    r7 = r7.stateNode;
                    r5 = r7;
                    r5 = _closure1_slot248;
                    r5 = r5.bind(r0)(r7);
                    r9 = r6._children;
                    r5 = r9.indexOf;
                    r5 = r5.bind(r9)(r7);
                    r8 = r9.splice;
                    r7 = 1;
                    r7 = r8.bind(r9)(r5, r7);
                    r8 = _closure1_slot0;
                    r9 = _closure1_slot1;
                    r7 = 2;
                    r7 = r9[r7];
                    r7 = r8.bind(r0)(r7);
                    r12 = r7.UIManager;
                    r11 = r12.manageChildren;
                    r18 = r6._nativeTag;
                    r9 = new Array(1);
                    r9[0] = r5;
                    r17 = new Array(0);
                    r16 = new Array(0);
                    r15 = new Array(0);
                    r14 = new Array(0);
                    r19 = r12;
                    r13 = r9;
                    r5 = r19[r11](r18, r17, r16, r15, r14, r13, r12);
case 734: // try_end1
                    _fun3101_ip = 890; continue _fun3101;
case 739: // catch_target1
                    CatchBlockStart(arg_register=8);
                    r7 = _closure1_slot470;
                    r6 = r1;
                    r5 = r2;
                    r5 = r7.bind(r0)(r6, r5, r8);
                    _fun3101_ip = 890; continue _fun3101;
case 764: // try_start_2
                    r12 = _closure1_slot141;
                    r3 = r12;
                    r6 = _closure1_slot248;
                    r5 = r1;
                    r5 = r5.stateNode;
                    r5 = r6.bind(r0)(r5);
                    r6 = _closure1_slot0;
                    r7 = _closure1_slot1;
                    r5 = 2;
                    r5 = r7[r5];
                    r5 = r6.bind(r0)(r5);
                    r11 = r5.UIManager;
                    r10 = r11.manageChildren;
                    r17 = new Array(0);
                    r16 = new Array(0);
                    r15 = new Array(0);
                    r14 = new Array(0);
                    r13 = [0];
                    r19 = r11;
                    r18 = r12;
                    r5 = r19[r10](r18, r17, r16, r15, r14, r13, r12);
case 854: // try_end2
                    _fun3101_ip = 890; continue _fun3101;
case 856: // catch_target2
                    CatchBlockStart(arg_register=8);
                    r7 = _closure1_slot470;
                    r6 = r1;
                    r5 = r2;
                    r5 = r7.bind(r0)(r6, r5, r8);
                    _fun3101_ip = 890; continue _fun3101;
case 878:
                    r4 = _closure1_slot420;
                    r1 = r4.bind(r0)(r3, r2, r1);
case 890:
                    return r0;
                }
            };
            var _closure1_slot421 = r0;
            r0 = function(a0) { // Original name: getRetryCache, environment: r5
                _fun3102: for(var _fun3102_ip = 0; ; ) switch(_fun3102_ip) {
case 0:
                    r2 = a0;
                    r1 = r2.tag;
                    r0 = 13;
                    if(!(r0 !== r1)) { _fun3102_ip = 122; continue _fun3102 }
case 15:
                    r0 = 19;
                    if(!(r0 !== r1)) { _fun3102_ip = 122; continue _fun3102 }
case 22:
                    r0 = 22;
                    if(!(r0 !== r1)) { _fun3102_ip = 67; continue _fun3102 }
case 29:
                    r0 = global;
                    r3 = r0.Error;
                    r1 = r2.tag;
                    r0 = 'Unexpected Suspense handler tag (';
                    r4 = r0 + r1;
                    r1 = undefined;
                    r0 = '). This is a bug in React.';
                    r0 = r4 + r0;
                    r0 = r3.bind(r1)(r0);
                    throw r0;
case 67:
                    r3 = r2.stateNode;
                    r0 = r3._retryCache;
                    r1 = null;
                    if(!(r1 === r0)) { _fun3102_ip = 120; continue _fun3102 }
case 84:
                    r1 = _closure1_slot138;
                    r4 = r1.prototype;
                    r4 = Object.create(r4, {constructor: {value: r1}});
                    r6 = r4;
                    r1 = new r6[r1](r5);
                    r1 = r1 instanceof Object ? r1 : r4;
                    r3['_retryCache'] = r1;
                    r0 = r1;
case 120:
                    return r0;
case 122:
                    r0 = r2.stateNode;
                    r1 = null;
                    if(!(r1 === r0)) { _fun3102_ip = 169; continue _fun3102 }
case 133:
                    r1 = _closure1_slot138;
                    r3 = r1.prototype;
                    r3 = Object.create(r3, {constructor: {value: r1}});
                    r6 = r3;
                    r1 = new r6[r1](r5);
                    r1 = r1 instanceof Object ? r1 : r3;
                    r2['stateNode'] = r1;
                    r0 = r1;
case 169:
                    return r0;
                }
            };
            var _closure1_slot422 = r0;
            r0 = function(a0, a1) { // Original name: attachSuspenseRetryListeners, environment: r5
                r4 = a0;
                r3 = a1;
                var _closure2_slot0 = r4;
                r2 = _closure1_slot422;
                r0 = undefined;
                r2 = r2.bind(r0)(r4);
                var _closure2_slot1 = r2;
                r2 = r3.forEach;
                r1 = function(a0) { // Environment: r1
                    _fun3104: for(var _fun3104_ip = 0; ; ) switch(_fun3104_ip) {
case 0:
                        r2 = a0;
                        r5 = _closure1_slot474;
                        r4 = r5.bind;
                        r3 = _closure2_slot0;
                        r1 = null;
                        r1 = r4.bind(r5)(r1, r3, r2);
                        r4 = _closure2_slot1;
                        r3 = r4.has;
                        r3 = r3.bind(r4)(r2);
                        if(r3) { _fun3104_ip = 74; continue _fun3104 }
case 49:
                        r3 = _closure2_slot1;
                        r0 = r3.add;
                        r0 = r0.bind(r3)(r2);
                        r0 = r2.then;
                        r0 = r0.bind(r2)(r1, r1);
case 74:
                        r0 = undefined;
                        return r0;
                    }
                };
                r1 = r2.bind(r3)(r1);
                return r0;
            };
            var _closure1_slot423 = r0;
            r0 = function(a0, a1) { // Original name: recursivelyTraverseMutationEffects, environment: r5
                _fun3105: for(var _fun3105_ip = 0; ; ) switch(_fun3105_ip) {
case 0:
                    r5 = a0;
                    r0 = a1;
                    r13 = r0.deletions;
                    r4 = null;
                    if(!(r4 !== r13)) { _fun3105_ip = 224; continue _fun3105 }
case 20:
                    r1 = r13.length;
                    r12 = 0;
                    r1 = r12 < r1;
                    r2 = undefined;
                    r10 = false;
                    r9 = true;
                    r8 = 4;
                    r7 = 3;
                    r6 = 5;
                    r3 = 27;
                    if(!r1) { _fun3105_ip = 224; continue _fun3105 }
case 58:
                    r14 = r13[r12];
                    r1 = r12;
                    r16 = r0;
                    if(!(r4 !== r16)) { _fun3105_ip = 160; continue _fun3105 }
case 72:
                    r17 = r16.tag;
                    r15 = r16;
                    if(!(r3 !== r17)) { _fun3105_ip = 147; continue _fun3105 }
case 84:
                    if(!(r6 !== r17)) { _fun3105_ip = 147; continue _fun3105 }
case 88:
                    if(!(r7 !== r17)) { _fun3105_ip = 127; continue _fun3105 }
case 92:
                    if(!(r8 !== r17)) { _fun3105_ip = 107; continue _fun3105 }
case 96:
                    r16 = r15.return;
                    if(r4 !== r16) { _fun3105_ip = 72; continue _fun3105 }
case 105:
                    _fun3105_ip = 160; continue _fun3105;
case 107:
                    r16 = r15.stateNode;
                    r16 = r16.containerInfo;
                    _closure1_slot141 = r16;
                    _closure1_slot142 = r9;
                    _fun3105_ip = 160; continue _fun3105;
case 127:
                    r16 = r15.stateNode;
                    r16 = r16.containerInfo;
                    _closure1_slot141 = r16;
                    _closure1_slot142 = r9;
                    _fun3105_ip = 160; continue _fun3105;
case 147:
                    r15 = r15.stateNode;
                    _closure1_slot141 = r15;
                    _closure1_slot142 = r10;
case 160:
                    r15 = _closure1_slot141;
                    if(!(r4 !== r15)) { _fun3105_ip = 280; continue _fun3105 }
case 168:
                    r15 = _closure1_slot421;
                    r15 = r15.bind(r2)(r5, r0, r14);
                    _closure1_slot141 = r4;
                    _closure1_slot142 = r10;
                    r15 = r14.alternate;
                    if(!(r4 !== r15)) { _fun3105_ip = 203; continue _fun3105 }
case 197:
                    r15['return'] = r4;
case 203:
                    r14['return'] = r4;
                    r12 = r1 + 1;
                    r1 = r13.length;
                    if(r12 < r1) { _fun3105_ip = 58; continue _fun3105 }
case 224:
                    r3 = r0.subtreeFlags;
                    r1 = 13878;
                    r1 = r3 & r1;
                    if(!r1) { _fun3105_ip = 276; continue _fun3105 }
case 242:
                    r3 = r0.child;
                    r0 = undefined;
                    if(!(r4 !== r3)) { _fun3105_ip = 276; continue _fun3105 }
case 256:
                    r6 = _closure1_slot425;
                    r6 = r6.bind(r0)(r3, r5);
                    r3 = r3.sibling;
                    if(r4 !== r3) { _fun3105_ip = 256; continue _fun3105 }
case 276:
                    r0 = undefined;
                    return r0;
case 280:
                    r0 = global;
                    r1 = r0.Error;
                    r0 = 'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.';
                    r0 = r1.bind(r2)(r0);
                    throw r0;
                }
            };
            var _closure1_slot424 = r0;
            r0 = function(a0, a1) { // Original name: commitMutationEffectsOnFiber, environment: r5
                _fun3106: for(var _fun3106_ip = 0; ; ) switch(_fun3106_ip) {
case 0:
                    r5 = a0;
                    r2 = r5;
                    r3 = a1;
                    r0 = undefined;
                    r6 = undefined;
                    r4 = undefined;
                    r1 = undefined;
                    r9 = undefined;
                    r8 = undefined;
                    r7 = undefined;
                    r6 = r5.alternate;
                    r4 = r5.flags;
                    r5 = r5.tag;
                    SwitchImm(value_reg=5, jump_table_address=2382, default_jump_address=2356, unsigned_min_value=0, unsigned_max_value=27) // Switch table: [2262, 2058, 2356, 1542, 1507, 1756, 1577, 2356, 2356, 2356, 2356, 2262, 1472, 1274, 2262, 2262, 2356, 2356, 2356, 56, 2356, 2380, 150, 2356, 2356, 2356, 1756, 1756];
case 56:
                    r12 = _closure1_slot424;
                    r10 = r3;
                    r11 = r2;
                    r10 = r12.bind(r0)(r10, r11);
                    r10 = _closure1_slot426;
                    r10 = r10.bind(r0)(r11);
                    r11 = r4;
                    r10 = 4;
                    r10 = r11 & r10;
                    if(!r10) { _fun3106_ip = 2380; continue _fun3106 }
case 102:
                    r10 = r2;
                    r11 = r10.updateQueue;
                    r4 = r11;
                    r10 = null;
                    if(!(r10 !== r11)) { _fun3106_ip = 2380; continue _fun3106 }
case 122:
                    r11 = r2;
                    r11['updateQueue'] = r10;
                    r10 = _closure1_slot423;
                    r5 = r4;
                    r5 = r10.bind(r0)(r11, r5);
                    _fun3106_ip = 2380; continue _fun3106;
case 150:
                    r10 = r4;
                    r5 = 512;
                    r5 = r10 & r5;
                    if(!r5) { _fun3106_ip = 207; continue _fun3106 }
case 166:
                    r10 = _closure1_slot137;
                    if(r10) { _fun3106_ip = 185; continue _fun3106 }
case 176:
                    r12 = r6;
                    r11 = null;
                    r10 = r11 === r12;
case 185:
                    if(r10) { _fun3106_ip = 207; continue _fun3106 }
case 188:
                    r11 = _closure1_slot412;
                    r10 = r6;
                    r5 = r10.return;
                    r5 = r11.bind(r0)(r10, r5);
case 207:
                    r5 = r2;
                    r5 = r5.memoizedState;
                    r11 = null;
                    r9 = r11 !== r5;
                    r5 = r6;
                    r5 = r11 !== r5;
                    if(!r5) { _fun3106_ip = 243; continue _fun3106 }
case 231:
                    r10 = r6;
                    r10 = r10.memoizedState;
                    r5 = r11 !== r10;
case 243:
                    r8 = r5;
                    r5 = r2;
                    r5 = r5.mode;
                    r12 = 1;
                    r10 = r5 & r12;
                    if(r10) { _fun3106_ip = 286; continue _fun3106 }
case 267:
                    r14 = _closure1_slot424;
                    r13 = r3;
                    r10 = r2;
                    r10 = r14.bind(r0)(r13, r10);
                    _fun3106_ip = 348; continue _fun3106;
case 286:
                    r13 = _closure1_slot136;
                    r7 = r13;
                    r10 = _closure1_slot137;
                    if(r13) { _fun3106_ip = 303; continue _fun3106 }
case 300:
                    r13 = r9;
case 303:
                    _closure1_slot136 = r13;
                    r13 = r10;
                    if(r13) { _fun3106_ip = 316; continue _fun3106 }
case 313:
                    r13 = r8;
case 316:
                    _closure1_slot137 = r13;
                    r15 = _closure1_slot424;
                    r14 = r3;
                    r13 = r2;
                    r13 = r15.bind(r0)(r14, r13);
                    _closure1_slot137 = r10;
                    r10 = r7;
                    _closure1_slot136 = r10;
case 348:
                    r13 = _closure1_slot426;
                    r10 = r2;
                    r13 = r13.bind(r0)(r10);
                    r13 = r10.stateNode;
                    r3 = r13;
                    r13['_current'] = r10;
                    r14 = r13._visibility;
                    r10 = -3;
                    r10 = r14 & r10;
                    r13['_visibility'] = r10;
                    r14 = r13._visibility;
                    r10 = r13._pendingVisibility;
                    r16 = 2;
                    r10 = r10 & r16;
                    r10 = r14 | r10;
                    r13['_visibility'] = r10;
                    r13 = r4;
                    r10 = 8192;
                    r10 = r13 & r10;
                    if(!r10) { _fun3106_ip = 1190; continue _fun3106 }
case 443:
                    r13 = r3;
                    r10 = r9;
                    r14 = r3;
                    r15 = r14._visibility;
                    if(r10) { _fun3106_ip = 466; continue _fun3106 }
case 460:
                    r10 = r15 | r12;
                    _fun3106_ip = 476; continue _fun3106;
case 466:
                    r14 = -2;
                    r10 = r15 & r14;
case 476:
                    r13['_visibility'] = r10;
                    r10 = r9;
                    if(!r10) { _fun3106_ip = 555; continue _fun3106 }
case 488:
                    r10 = _closure1_slot136;
                    if(r10) { _fun3106_ip = 499; continue _fun3106 }
case 495:
                    r10 = _closure1_slot137;
case 499:
                    r3 = r10;
                    r10 = r6;
                    r10 = r11 === r10;
                    if(r10) { _fun3106_ip = 515; continue _fun3106 }
case 512:
                    r10 = r8;
case 515:
                    if(r10) { _fun3106_ip = 521; continue _fun3106 }
case 518:
                    r10 = r3;
case 521:
                    if(r10) { _fun3106_ip = 555; continue _fun3106 }
case 524:
                    r10 = r2;
                    r10 = r10.mode;
                    r12 = r10 & r12;
                    r10 = 0;
                    if(!(r10 !== r12)) { _fun3106_ip = 555; continue _fun3106 }
case 542:
                    r12 = _closure1_slot428;
                    r10 = r2;
                    r10 = r12.bind(r0)(r10);
case 555:
                    r10 = r2;
                    r10 = r10.memoizedProps;
                    if(!(r11 !== r10)) { _fun3106_ip = 591; continue _fun3106 }
case 567:
                    r10 = r2;
                    r10 = r10.memoizedProps;
                    r12 = r10.mode;
                    r10 = 'manual';
                    if(!(r10 !== r12)) { _fun3106_ip = 1190; continue _fun3106 }
case 591:
                    r6 = null;
                    r3 = r2;
                    r15 = 'none';
                    r14 = 23;
                    r13 = 22;
                    r12 = 6;
                    r10 = 5;
case 612:
                    r17 = r3;
                    r17 = r17.tag;
                    if(!(r10 !== r17)) { _fun3106_ip = 783; continue _fun3106 }
case 627:
                    r17 = r3;
                    r17 = r17.tag;
                    if(!(r12 !== r17)) { _fun3106_ip = 724; continue _fun3106 }
case 639:
                    r17 = r3;
                    r17 = r17.tag;
                    if(!(r13 !== r17)) { _fun3106_ip = 663; continue _fun3106 }
case 651:
                    r17 = r3;
                    r17 = r17.tag;
                    if(!(r14 === r17)) { _fun3106_ip = 688; continue _fun3106 }
case 663:
                    r17 = r3;
                    r17 = r17.memoizedState;
                    if(!(r11 !== r17)) { _fun3106_ip = 688; continue _fun3106 }
case 675:
                    r18 = r3;
                    r17 = r2;
                    if(!(r18 === r17)) { _fun3106_ip = 1068; continue _fun3106 }
case 688:
                    r17 = r3;
                    r17 = r17.child;
                    if(!(r11 !== r17)) { _fun3106_ip = 1068; continue _fun3106 }
case 703:
                    r17 = r3;
                    r18 = r17.child;
                    r18['return'] = r17;
                    r3 = r17.child;
                    _fun3106_ip = 612; continue _fun3106;
case 724:
                    r17 = r6;
                    if(!(r11 === r17)) { _fun3106_ip = 1068; continue _fun3106 }
case 734:
                    r8 = r3;
case 737: // try_start_0
                    r17 = global;
                    r18 = r17.Error;
                    r17 = 'Not yet implemented.';
                    r17 = r18.bind(r0)(r17);
                    throw r17;
case 756: // try_end0 // catch_target0
                    CatchBlockStart(arg_register=20);
                    r19 = _closure1_slot470;
                    r18 = r8;
                    r17 = r18.return;
                    r17 = r19.bind(r0)(r18, r17, r20);
                    _fun3106_ip = 1068; continue _fun3106;
case 783:
                    r17 = r6;
                    if(!(r11 === r17)) { _fun3106_ip = 1068; continue _fun3106 }
case 793:
                    r17 = r3;
                    r6 = r17;
                    r8 = r17;
case 802: // try_start_1
                    r17 = r8;
                    r1 = r17.stateNode;
                    r17 = r9;
                    if(r17) { _fun3106_ip = 949; continue _fun3106 }
case 819:
                    r17 = r8;
                    r18 = r17.stateNode;
                    r22 = r17.memoizedProps;
                    r17 = r18.viewConfig;
                    r21 = _closure1_slot21;
                    r20 = {};
                    r23 = r22.style;
                    r19 = new Array(2);
                    r19[0] = r23;
                    r23 = {};
                    r23['display'] = r15;
                    r19[1] = r23;
                    r20['style'] = r19;
                    r19 = {};
                    r27 = r21.bind(r0)(r19, r22, r20);
                    r20 = _closure1_slot229;
                    r25 = r17.validAttributes;
                    r29 = undefined;
                    r28 = null;
                    r26 = r22;
                    r21 = r29[r20](r28, r27, r26, r25, r24);
                    r20 = _closure1_slot0;
                    r19 = _closure1_slot1;
                    r19 = r19[r16];
                    r19 = r20.bind(r0)(r19);
                    r20 = r19.UIManager;
                    r19 = r20.updateView;
                    r18 = r18._nativeTag;
                    r17 = r17.uiViewClassName;
                    r17 = r19.bind(r20)(r18, r17, r21);
                    _fun3106_ip = 1044; continue _fun3106;
case 949:
                    r18 = r1;
                    r7 = r18;
                    r17 = r18.viewConfig;
                    r22 = _closure1_slot229;
                    r27 = _closure1_slot52;
                    r20 = {};
                    r19 = {};
                    r19['display'] = r15;
                    r20['style'] = r19;
                    r25 = r17.validAttributes;
                    r29 = undefined;
                    r28 = null;
                    r26 = r20;
                    r21 = r29[r22](r28, r27, r26, r25, r24);
                    r20 = _closure1_slot0;
                    r19 = _closure1_slot1;
                    r19 = r19[r16];
                    r19 = r20.bind(r0)(r19);
                    r20 = r19.UIManager;
                    r19 = r20.updateView;
                    r18 = r18._nativeTag;
                    r17 = r17.uiViewClassName;
                    r17 = r19.bind(r20)(r18, r17, r21);
case 1044: // try_end1
                    _fun3106_ip = 1068; continue _fun3106;
case 1046: // catch_target1
                    CatchBlockStart(arg_register=20);
                    r19 = _closure1_slot470;
                    r18 = r8;
                    r17 = r18.return;
                    r17 = r19.bind(r0)(r18, r17, r20);
case 1068:
                    r18 = r3;
                    r17 = r2;
                    if(!(r18 !== r17)) { _fun3106_ip = 1190; continue _fun3106 }
case 1078:
                    r17 = r3;
                    r17 = r17.sibling;
                    if(!(r11 === r17)) { _fun3106_ip = 1149; continue _fun3106 }
case 1090:
                    r17 = r3;
                    r17 = r17.return;
                    if(!(r11 !== r17)) { _fun3106_ip = 1190; continue _fun3106 }
case 1102:
                    r17 = r3;
                    r18 = r17.return;
                    r17 = r2;
                    if(!(r18 !== r17)) { _fun3106_ip = 1190; continue _fun3106 }
case 1117:
                    r18 = r6;
                    r17 = r3;
                    if(!(r18 === r17)) { _fun3106_ip = 1129; continue _fun3106 }
case 1127:
                    r6 = null;
case 1129:
                    r17 = r3;
                    r17 = r17.return;
                    r3 = r17;
                    r17 = r17.sibling;
                    if(r11 === r17) { _fun3106_ip = 1090; continue _fun3106 }
case 1149:
                    r18 = r6;
                    r17 = r3;
                    if(!(r18 === r17)) { _fun3106_ip = 1161; continue _fun3106 }
case 1159:
                    r6 = null;
case 1161:
                    r17 = r3;
                    r19 = r17.sibling;
                    r18 = r17.return;
                    r19['return'] = r18;
                    r3 = r17.sibling;
                    _fun3106_ip = 612; continue _fun3106;
case 1190:
                    r12 = r4;
                    r10 = 4;
                    r10 = r12 & r10;
                    if(!r10) { _fun3106_ip = 2380; continue _fun3106 }
case 1206:
                    r10 = r2;
                    r10 = r10.updateQueue;
                    r4 = r10;
                    if(!(r11 !== r10)) { _fun3106_ip = 2380; continue _fun3106 }
case 1224:
                    r10 = r4;
                    r10 = r10.retryQueue;
                    r1 = r10;
                    if(!(r11 !== r10)) { _fun3106_ip = 2380; continue _fun3106 }
case 1243:
                    r10 = r4;
                    r10['retryQueue'] = r11;
                    r11 = _closure1_slot423;
                    r10 = r2;
                    r5 = r1;
                    r5 = r11.bind(r0)(r10, r5);
                    _fun3106_ip = 2380; continue _fun3106;
case 1274:
                    r12 = _closure1_slot424;
                    r11 = r3;
                    r10 = r2;
                    r11 = r12.bind(r0)(r11, r10);
                    r11 = _closure1_slot426;
                    r11 = r11.bind(r0)(r10);
                    r10 = r10.child;
                    r11 = r10.flags;
                    r10 = 8192;
                    r10 = r11 & r10;
                    if(!r10) { _fun3106_ip = 1408; continue _fun3106 }
case 1327:
                    r10 = r6;
                    r11 = null;
                    r10 = r11 !== r10;
                    if(!r10) { _fun3106_ip = 1351; continue _fun3106 }
case 1339:
                    r12 = r6;
                    r12 = r12.memoizedState;
                    r10 = r11 !== r12;
case 1351:
                    r1 = r10;
                    r10 = r2;
                    r10 = r10.memoizedState;
                    r10 = r11 === r10;
                    if(r10) { _fun3106_ip = 1372; continue _fun3106 }
case 1369:
                    r10 = r1;
case 1372:
                    if(r10) { _fun3106_ip = 1408; continue _fun3106 }
case 1375:
                    r11 = _closure1_slot0;
                    r12 = _closure1_slot1;
                    r10 = 3;
                    r10 = r12[r10];
                    r11 = r11.bind(r0)(r10);
                    r10 = r11.unstable_now;
                    r10 = r10.bind(r11)();
                    _closure1_slot165 = r10;
case 1408:
                    r11 = r4;
                    r10 = 4;
                    r10 = r11 & r10;
                    if(!r10) { _fun3106_ip = 2380; continue _fun3106 }
case 1424:
                    r10 = r2;
                    r11 = r10.updateQueue;
                    r4 = r11;
                    r10 = null;
                    if(!(r10 !== r11)) { _fun3106_ip = 2380; continue _fun3106 }
case 1444:
                    r11 = r2;
                    r11['updateQueue'] = r10;
                    r10 = _closure1_slot423;
                    r5 = r4;
                    r5 = r10.bind(r0)(r11, r5);
                    _fun3106_ip = 2380; continue _fun3106;
case 1472:
                    r12 = _closure1_slot424;
                    r11 = r3;
                    r10 = r2;
                    r11 = r12.bind(r0)(r11, r10);
                    r5 = _closure1_slot426;
                    r5 = r5.bind(r0)(r10);
                    _fun3106_ip = 2380; continue _fun3106;
case 1507:
                    r12 = _closure1_slot424;
                    r11 = r3;
                    r10 = r2;
                    r11 = r12.bind(r0)(r11, r10);
                    r5 = _closure1_slot426;
                    r5 = r5.bind(r0)(r10);
                    _fun3106_ip = 2380; continue _fun3106;
case 1542:
                    r12 = _closure1_slot424;
                    r11 = r3;
                    r10 = r2;
                    r11 = r12.bind(r0)(r11, r10);
                    r5 = _closure1_slot426;
                    r5 = r5.bind(r0)(r10);
                    _fun3106_ip = 2380; continue _fun3106;
case 1577:
                    r12 = _closure1_slot424;
                    r10 = r3;
                    r11 = r2;
                    r10 = r12.bind(r0)(r10, r11);
                    r10 = _closure1_slot426;
                    r10 = r10.bind(r0)(r11);
                    r11 = r4;
                    r10 = 4;
                    r10 = r11 & r10;
                    if(!r10) { _fun3106_ip = 2380; continue _fun3106 }
case 1623:
                    r10 = r2;
                    r11 = r10.stateNode;
                    r10 = null;
                    if(!(r10 !== r11)) { _fun3106_ip = 1737; continue _fun3106 }
case 1637:
                    r10 = r2;
                    r4 = r10.memoizedProps;
                    r1 = r10.stateNode;
case 1650: // try_start_2
                    r11 = _closure1_slot0;
                    r12 = _closure1_slot1;
                    r10 = 2;
                    r10 = r12[r10];
                    r10 = r11.bind(r0)(r10);
                    r14 = r10.UIManager;
                    r13 = r14.updateView;
                    r12 = r1;
                    r11 = {};
                    r10 = r4;
                    r11['text'] = r10;
                    r10 = 'RCTRawText';
                    r10 = r13.bind(r14)(r12, r10, r11);
case 1705: // try_end2
                    _fun3106_ip = 2380; continue _fun3106;
case 1710: // catch_target2
                    CatchBlockStart(arg_register=12);
                    r11 = _closure1_slot470;
                    r10 = r2;
                    r5 = r10.return;
                    r5 = r11.bind(r0)(r10, r5, r12);
                    _fun3106_ip = 2380; continue _fun3106;
case 1737:
                    r5 = global;
                    r10 = r5.Error;
                    r5 = 'This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.';
                    r5 = r10.bind(r0)(r5);
                    throw r5;
case 1756:
                    r12 = _closure1_slot424;
                    r10 = r3;
                    r11 = r2;
                    r10 = r12.bind(r0)(r10, r11);
                    r10 = _closure1_slot426;
                    r10 = r10.bind(r0)(r11);
                    r11 = r4;
                    r10 = 512;
                    r10 = r11 & r10;
                    if(!r10) { _fun3106_ip = 1840; continue _fun3106 }
case 1802:
                    r10 = _closure1_slot137;
                    if(r10) { _fun3106_ip = 1818; continue _fun3106 }
case 1809:
                    r12 = r6;
                    r11 = null;
                    r10 = r11 === r12;
case 1818:
                    if(r10) { _fun3106_ip = 1840; continue _fun3106 }
case 1821:
                    r12 = _closure1_slot412;
                    r11 = r6;
                    r10 = r11.return;
                    r10 = r12.bind(r0)(r11, r10);
case 1840:
                    r11 = r4;
                    r10 = 4;
                    r10 = r11 & r10;
                    if(!r10) { _fun3106_ip = 2380; continue _fun3106 }
case 1856:
                    r10 = r2;
                    r10 = r10.stateNode;
                    r11 = null;
                    if(!(r11 != r10)) { _fun3106_ip = 2380; continue _fun3106 }
case 1873:
                    r10 = r2;
                    r4 = r10.memoizedProps;
                    r10 = r6;
                    if(!(r11 === r10)) { _fun3106_ip = 1893; continue _fun3106 }
case 1888:
                    r10 = r4;
                    _fun3106_ip = 1901; continue _fun3106;
case 1893:
                    r12 = r6;
                    r10 = r12.memoizedProps;
case 1901:
                    r1 = r10;
case 1904: // try_start_3
                    r10 = r2;
                    r12 = r10.stateNode;
                    r9 = r12;
                    r10 = r12.viewConfig;
                    r8 = r10;
                    r15 = _closure1_slot48;
                    r13 = r15.set;
                    r12 = r12._nativeTag;
                    r14 = r4;
                    r12 = r13.bind(r15)(r12, r14);
                    r13 = _closure1_slot229;
                    r27 = r1;
                    r25 = r10.validAttributes;
                    r29 = undefined;
                    r28 = null;
                    r26 = r14;
                    r10 = r29[r13](r28, r27, r26, r25, r24);
                    r7 = r10;
                    if(!(r11 != r10)) { _fun3106_ip = 2026; continue _fun3106 }
case 1977:
                    r11 = _closure1_slot0;
                    r12 = _closure1_slot1;
                    r10 = 2;
                    r10 = r12[r10];
                    r10 = r11.bind(r0)(r10);
                    r11 = r10.UIManager;
                    r10 = r11.updateView;
                    r9 = r9._nativeTag;
                    r8 = r8.uiViewClassName;
                    r7 = r10.bind(r11)(r9, r8, r7);
case 2026: // try_end3
                    _fun3106_ip = 2380; continue _fun3106;
case 2031: // catch_target3
                    CatchBlockStart(arg_register=9);
                    r8 = _closure1_slot470;
                    r7 = r2;
                    r5 = r7.return;
                    r5 = r8.bind(r0)(r7, r5, r9);
                    _fun3106_ip = 2380; continue _fun3106;
case 2058:
                    r9 = _closure1_slot424;
                    r7 = r3;
                    r8 = r2;
                    r7 = r9.bind(r0)(r7, r8);
                    r7 = _closure1_slot426;
                    r7 = r7.bind(r0)(r8);
                    r8 = r4;
                    r7 = 512;
                    r7 = r8 & r7;
                    if(!r7) { _fun3106_ip = 2142; continue _fun3106 }
case 2104:
                    r7 = _closure1_slot137;
                    if(r7) { _fun3106_ip = 2120; continue _fun3106 }
case 2111:
                    r9 = r6;
                    r8 = null;
                    r7 = r8 === r9;
case 2120:
                    if(r7) { _fun3106_ip = 2142; continue _fun3106 }
case 2123:
                    r8 = _closure1_slot412;
                    r7 = r6;
                    r6 = r7.return;
                    r6 = r8.bind(r0)(r7, r6);
case 2142:
                    r7 = r4;
                    r6 = 64;
                    r6 = r7 & r6;
                    if(!r6) { _fun3106_ip = 2380; continue _fun3106 }
case 2158:
                    r5 = _closure1_slot136;
                    if(!r5) { _fun3106_ip = 2380; continue _fun3106 }
case 2168:
                    r5 = r2;
                    r5 = r5.updateQueue;
                    r2 = r5;
                    r7 = null;
                    if(!(r7 !== r5)) { _fun3106_ip = 2380; continue _fun3106 }
case 2188:
                    r5 = r2;
                    r5 = r5.callbacks;
                    r4 = r5;
                    if(!(r7 !== r5)) { _fun3106_ip = 2380; continue _fun3106 }
case 2207:
                    r5 = r2;
                    r6 = r5.shared;
                    r6 = r6.hiddenCallbacks;
                    r1 = r6;
                    r5 = r5.shared;
                    if(!(r7 !== r6)) { _fun3106_ip = 2251; continue _fun3106 }
case 2233:
                    r7 = r1;
                    r6 = r7.concat;
                    r1 = r4;
                    r1 = r6.bind(r7)(r1);
                    _fun3106_ip = 2254; continue _fun3106;
case 2251:
                    r1 = r4;
case 2254:
                    r5['hiddenCallbacks'] = r1;
                    _fun3106_ip = 2380; continue _fun3106;
case 2262:
                    r7 = _closure1_slot424;
                    r5 = r3;
                    r6 = r2;
                    r5 = r7.bind(r0)(r5, r6);
                    r5 = _closure1_slot426;
                    r5 = r5.bind(r0)(r6);
                    r5 = r4;
                    r4 = 4;
                    r4 = r5 & r4;
                    if(!r4) { _fun3106_ip = 2380; continue _fun3106 }
case 2305:
                    r6 = _closure1_slot408;
                    r5 = r2;
                    r7 = r5.return;
                    r4 = 3;
                    r7 = r6.bind(r0)(r4, r5, r7);
                    r1 = _closure1_slot407;
                    r1 = r1.bind(r0)(r4, r5);
                    r4 = r5.return;
                    r1 = 5;
                    r1 = r6.bind(r0)(r1, r5, r4);
                    _fun3106_ip = 2380; continue _fun3106;
case 2356:
                    r4 = _closure1_slot424;
                    r3 = r4.bind(r0)(r3, r2);
                    r1 = _closure1_slot426;
                    r1 = r1.bind(r0)(r2);
case 2380:
                    return r0;
                }
            };
            var _closure1_slot425 = r0;
            r0 = function(a0) { // Original name: commitReconciliationEffects, environment: r5
                _fun3107: for(var _fun3107_ip = 0; ; ) switch(_fun3107_ip) {
case 0:
                    r3 = a0;
                    r1 = r3;
                    r0 = undefined;
                    r9 = undefined;
                    r5 = undefined;
                    r2 = undefined;
                    r3 = r3.flags;
                    r4 = 2;
                    r4 = r3 & r4;
                    if(!r4) { _fun3107_ip = 320; continue _fun3107 }
case 32: // try_start_0
                    r4 = r1;
                    r6 = r4.return;
                    r9 = r6;
                    r8 = null;
                    if(!(r8 !== r6)) { _fun3107_ip = 83; continue _fun3107 }
case 52:
                    r7 = _closure1_slot413;
                    r6 = r9;
                    r7 = r7.bind(r0)(r6);
                    r6 = r9;
                    if(r7) { _fun3107_ip = 102; continue _fun3107 }
case 71:
                    r7 = r6.return;
                    r9 = r7;
                    if(r8 !== r7) { _fun3107_ip = 52; continue _fun3107 }
case 83:
                    r7 = global;
                    r8 = r7.Error;
                    r7 = 'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.';
                    r7 = r8.bind(r0)(r7);
                    throw r7;
case 102:
                    r5 = r6;
                    r7 = r6.tag;
                    r6 = 27;
                    if(!(r6 !== r7)) { _fun3107_ip = 197; continue _fun3107 }
case 117:
                    r6 = 5;
                    if(!(r6 !== r7)) { _fun3107_ip = 197; continue _fun3107 }
case 124:
                    r6 = 3;
                    if(!(r6 !== r7)) { _fun3107_ip = 157; continue _fun3107 }
case 131:
                    r6 = 4;
                    if(!(r6 !== r7)) { _fun3107_ip = 157; continue _fun3107 }
case 138:
                    r6 = global;
                    r7 = r6.Error;
                    r6 = 'Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.';
                    r6 = r7.bind(r0)(r6);
                    throw r6;
case 157:
                    r6 = r5;
                    r6 = r6.stateNode;
                    r9 = r6.containerInfo;
                    r6 = _closure1_slot414;
                    r8 = r1;
                    r7 = r6.bind(r0)(r8);
                    r6 = _closure1_slot415;
                    r6 = r6.bind(r0)(r8, r7, r9);
                    _fun3107_ip = 269; continue _fun3107;
case 197:
                    r6 = r5;
                    r2 = r6.stateNode;
                    r7 = r6.flags;
                    r6 = 32;
                    r6 = r7 & r6;
                    if(!r6) { _fun3107_ip = 244; continue _fun3107 }
case 220:
                    r6 = r5;
                    r7 = r6.flags;
                    r5 = -33;
                    r5 = r7 & r5;
                    r6['flags'] = r5;
case 244:
                    r5 = _closure1_slot414;
                    r6 = r1;
                    r5 = r5.bind(r0)(r6);
                    r4 = _closure1_slot416;
                    r2 = r4.bind(r0)(r6, r5, r2);
case 269: // try_end0
                    _fun3107_ip = 296; continue _fun3107;
case 271: // catch_target0
                    CatchBlockStart(arg_register=6);
                    r5 = _closure1_slot470;
                    r4 = r1;
                    r2 = r4.return;
                    r2 = r5.bind(r0)(r4, r2, r6);
case 296:
                    r4 = r1;
                    r5 = r4.flags;
                    r2 = -3;
                    r2 = r5 & r2;
                    r4['flags'] = r2;
case 320:
                    r2 = 4096;
                    r2 = r3 & r2;
                    if(!r2) { _fun3107_ip = 357; continue _fun3107 }
case 333:
                    r2 = r1;
                    r3 = r2.flags;
                    r1 = -4097;
                    r1 = r3 & r1;
                    r2['flags'] = r1;
case 357:
                    return r0;
                }
            };
            var _closure1_slot426 = r0;
            r0 = function(a0, a1) { // Original name: recursivelyTraverseLayoutEffects, environment: r5
                _fun3108: for(var _fun3108_ip = 0; ; ) switch(_fun3108_ip) {
case 0:
                    r4 = a0;
                    r0 = a1;
                    r2 = r0.subtreeFlags;
                    r1 = 8772;
                    r1 = r2 & r1;
                    if(!r1) { _fun3108_ip = 66; continue _fun3108 }
case 24:
                    r3 = r0.child;
                    r1 = undefined;
                    r0 = null;
                    if(!(r0 !== r3)) { _fun3108_ip = 66; continue _fun3108 }
case 40:
                    r6 = _closure1_slot418;
                    r5 = r3.alternate;
                    r5 = r6.bind(r1)(r4, r5, r3);
                    r3 = r3.sibling;
                    if(r0 !== r3) { _fun3108_ip = 40; continue _fun3108 }
case 66:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot427 = r0;
            r0 = function(a0) { // Original name: recursivelyTraverseDisappearLayoutEffects, environment: r5
                _fun3109: for(var _fun3109_ip = 0; ; ) switch(_fun3109_ip) {
case 0:
                    r0 = a0;
                    r15 = r0.child;
                    r0 = undefined;
                    r14 = null;
                    r12 = 4;
                    r11 = 'function';
                    r10 = 22;
                    r9 = 5;
                    r8 = 27;
                    r7 = 26;
                    r6 = 1;
                    r5 = 15;
                    r4 = 14;
                    r3 = 11;
                    r2 = 0;
                    r1 = undefined;
                    if(!(r14 !== r15)) { _fun3109_ip = 325; continue _fun3109 }
case 57:
                    r17 = r15.tag;
                    r16 = r15;
                    r18 = r1;
                    if(!(r2 !== r17)) { _fun3109_ip = 280; continue _fun3109 }
case 75:
                    if(!(r3 !== r17)) { _fun3109_ip = 280; continue _fun3109 }
case 82:
                    if(!(r4 !== r17)) { _fun3109_ip = 280; continue _fun3109 }
case 89:
                    if(!(r5 !== r17)) { _fun3109_ip = 280; continue _fun3109 }
case 96:
                    if(!(r6 !== r17)) { _fun3109_ip = 214; continue _fun3109 }
case 100:
                    if(!(r7 !== r17)) { _fun3109_ip = 183; continue _fun3109 }
case 104:
                    if(!(r8 !== r17)) { _fun3109_ip = 183; continue _fun3109 }
case 108:
                    if(!(r9 !== r17)) { _fun3109_ip = 183; continue _fun3109 }
case 112:
                    if(!(r10 !== r17)) { _fun3109_ip = 134; continue _fun3109 }
case 116:
                    r17 = _closure1_slot428;
                    r17 = r17.bind(r0)(r16);
                    r17 = r18;
                    _fun3109_ip = 310; continue _fun3109;
case 134:
                    r20 = _closure1_slot412;
                    r19 = r16.return;
                    r19 = r20.bind(r0)(r16, r19);
                    r19 = r16.memoizedState;
                    r17 = r18;
                    if(!(r14 === r19)) { _fun3109_ip = 310; continue _fun3109 }
case 165:
                    r19 = _closure1_slot428;
                    r19 = r19.bind(r0)(r16);
                    r17 = r18;
                    _fun3109_ip = 310; continue _fun3109;
case 183:
                    r20 = _closure1_slot412;
                    r19 = r16.return;
                    r19 = r20.bind(r0)(r16, r19);
                    r19 = _closure1_slot428;
                    r19 = r19.bind(r0)(r16);
                    r17 = r18;
                    _fun3109_ip = 310; continue _fun3109;
case 214:
                    r20 = _closure1_slot412;
                    r19 = r16.return;
                    r19 = r20.bind(r0)(r16, r19);
                    r19 = r16.stateNode;
                    r20 = r19.componentWillUnmount;
                    r20 = typeof r20;
                    if(!(r11 === r20)) { _fun3109_ip = 265; continue _fun3109 }
case 248:
                    r21 = _closure1_slot410;
                    r20 = r16.return;
                    r20 = r21.bind(r0)(r16, r20, r19);
case 265:
                    r20 = _closure1_slot428;
                    r20 = r20.bind(r0)(r16);
                    r17 = r19;
                    _fun3109_ip = 310; continue _fun3109;
case 280:
                    r20 = _closure1_slot408;
                    r19 = r16.return;
                    r19 = r20.bind(r0)(r12, r16, r19);
                    r19 = _closure1_slot428;
                    r19 = r19.bind(r0)(r16);
                    r17 = r18;
case 310:
                    r15 = r16.sibling;
                    r1 = r17;
                    if(r14 !== r15) { _fun3109_ip = 57; continue _fun3109 }
case 325:
                    return r0;
                }
            };
            var _closure1_slot428 = r0;
            r0 = function(a0, a1, a2) { // Original name: recursivelyTraverseReappearLayoutEffects, environment: r5
                _fun3110: for(var _fun3110_ip = 0; ; ) switch(_fun3110_ip) {
case 0:
                    r13 = a0;
                    r1 = a1;
                    r12 = a2;
                    r0 = undefined;
                    r8 = undefined;
                    r9 = undefined;
                    r10 = undefined;
                    r11 = undefined;
                    if(!r12) { _fun3110_ip = 43; continue _fun3110 }
case 22:
                    r3 = r1.subtreeFlags;
                    r2 = 8772;
                    r3 = r3 & r2;
                    r2 = 0;
                    r12 = r2 !== r3;
case 43:
                    r7 = r1.child;
                    r6 = null;
                    r4 = 4;
                    r3 = 64;
                    r2 = 0;
                    r1 = 'function';
                    if(!(r6 !== r7)) { _fun3110_ip = 534; continue _fun3110 }
case 72:
                    r8 = r13;
                    r16 = r7.flags;
                    r15 = r7.tag;
                    r14 = r7;
                    SwitchImm(value_reg=15, jump_table_address=536, default_jump_address=507, unsigned_min_value=0, unsigned_max_value=27) // Switch table: [479, 227, 507, 507, 507, 191, 507, 507, 507, 507, 507, 479, 171, 151, 507, 479, 507, 507, 507, 507, 507, 507, 106, 507, 507, 507, 191, 191];
case 106:
                    r15 = r14.memoizedState;
                    if(!(r6 === r15)) { _fun3110_ip = 130; continue _fun3110 }
case 115:
                    r17 = _closure1_slot429;
                    r15 = r8;
                    r15 = r17.bind(r0)(r15, r14, r12);
case 130:
                    r17 = _closure1_slot411;
                    r15 = r14.return;
                    r15 = r17.bind(r0)(r14, r15);
                    _fun3110_ip = 522; continue _fun3110;
case 151:
                    r17 = _closure1_slot429;
                    r15 = r8;
                    r15 = r17.bind(r0)(r15, r14, r12);
                    _fun3110_ip = 522; continue _fun3110;
case 171:
                    r17 = _closure1_slot429;
                    r15 = r8;
                    r15 = r17.bind(r0)(r15, r14, r12);
                    _fun3110_ip = 522; continue _fun3110;
case 191:
                    r17 = _closure1_slot429;
                    r15 = r8;
                    r15 = r17.bind(r0)(r15, r14, r12);
                    r17 = _closure1_slot411;
                    r15 = r14.return;
                    r15 = r17.bind(r0)(r14, r15);
                    _fun3110_ip = 522; continue _fun3110;
case 227:
                    r17 = _closure1_slot429;
                    r15 = r8;
                    r15 = r17.bind(r0)(r15, r14, r12);
                    r8 = r14;
                    r15 = r14.stateNode;
                    r9 = r15;
                    r15 = r15.componentDidMount;
                    r15 = typeof r15;
                    if(!(r1 === r15)) { _fun3110_ip = 303; continue _fun3110 }
case 266: // try_start_0
                    r17 = r9;
                    r15 = r17.componentDidMount;
                    r15 = r15.bind(r17)();
case 279: // try_end0
                    _fun3110_ip = 303; continue _fun3110;
case 281: // catch_target0
                    CatchBlockStart(arg_register=19);
                    r18 = _closure1_slot470;
                    r17 = r8;
                    r15 = r17.return;
                    r15 = r18.bind(r0)(r17, r15, r19);
case 303:
                    r8 = r14;
                    r15 = r14.updateQueue;
                    r9 = r15;
                    if(!(r6 !== r15)) { _fun3110_ip = 438; continue _fun3110 }
case 318:
                    r15 = r8;
                    r10 = r15.stateNode;
case 326: // try_start_1
                    r15 = r9;
                    r15 = r15.shared;
                    r15 = r15.hiddenCallbacks;
                    r11 = r15;
                    if(!(r6 !== r15)) { _fun3110_ip = 414; continue _fun3110 }
case 347:
                    r15 = r9;
                    r15 = r15.shared;
                    r15['hiddenCallbacks'] = r6;
                    r9 = 0;
                    r15 = r11;
                    r15 = r15.length;
                    if(!(r2 < r15)) { _fun3110_ip = 414; continue _fun3110 }
case 375:
                    r20 = _closure1_slot282;
                    r15 = r11;
                    r17 = r9;
                    r19 = r15[r17];
                    r18 = r10;
                    r18 = r20.bind(r0)(r19, r18);
                    r17 = r17 + 1;
                    r9 = r17;
                    r15 = r15.length;
                    if(r17 < r15) { _fun3110_ip = 375; continue _fun3110 }
case 414: // try_end1
                    _fun3110_ip = 438; continue _fun3110;
case 416: // catch_target1
                    CatchBlockStart(arg_register=19);
                    r18 = _closure1_slot470;
                    r17 = r8;
                    r15 = r17.return;
                    r15 = r18.bind(r0)(r17, r15, r19);
case 438:
                    r15 = r12;
                    if(!r15) { _fun3110_ip = 448; continue _fun3110 }
case 444:
                    r15 = r16 & r3;
case 448:
                    if(!r15) { _fun3110_ip = 461; continue _fun3110 }
case 451:
                    r15 = _closure1_slot409;
                    r15 = r15.bind(r0)(r14);
case 461:
                    r16 = _closure1_slot411;
                    r15 = r14.return;
                    r15 = r16.bind(r0)(r14, r15);
                    _fun3110_ip = 522; continue _fun3110;
case 479:
                    r16 = _closure1_slot429;
                    r15 = r8;
                    r15 = r16.bind(r0)(r15, r14, r12);
                    r15 = _closure1_slot407;
                    r15 = r15.bind(r0)(r4, r14);
                    _fun3110_ip = 522; continue _fun3110;
case 507:
                    r16 = _closure1_slot429;
                    r15 = r8;
                    r15 = r16.bind(r0)(r15, r14, r12);
case 522:
                    r7 = r14.sibling;
                    if(r6 !== r7) { _fun3110_ip = 72; continue _fun3110 }
case 534:
                    return r0;
                }
            };
            var _closure1_slot429 = r0;
            r0 = function(a0, a1) { // Original name: commitOffscreenPassiveMountEffects, environment: r5
                _fun3111: for(var _fun3111_ip = 0; ; ) switch(_fun3111_ip) {
case 0:
                    r3 = a0;
                    r1 = a1;
                    r0 = null;
                    r4 = r0 !== r3;
                    if(!r4) { _fun3111_ip = 24; continue _fun3111 }
case 15:
                    r2 = r3.memoizedState;
                    r4 = r0 !== r2;
case 24:
                    if(!r4) { _fun3111_ip = 41; continue _fun3111 }
case 27:
                    r2 = r3.memoizedState;
                    r2 = r2.cachePool;
                    r4 = r0 !== r2;
case 41:
                    r2 = null;
                    if(!r4) { _fun3111_ip = 62; continue _fun3111 }
case 46:
                    r3 = r3.memoizedState;
                    r3 = r3.cachePool;
                    r2 = r3.pool;
case 62:
                    r3 = r1.memoizedState;
                    r4 = r0 !== r3;
                    if(!r4) { _fun3111_ip = 88; continue _fun3111 }
case 74:
                    r3 = r1.memoizedState;
                    r3 = r3.cachePool;
                    r4 = r0 !== r3;
case 88:
                    r3 = null;
                    if(!r4) { _fun3111_ip = 109; continue _fun3111 }
case 93:
                    r1 = r1.memoizedState;
                    r1 = r1.cachePool;
                    r3 = r1.pool;
case 109:
                    if(!(r3 !== r2)) { _fun3111_ip = 150; continue _fun3111 }
case 113:
                    if(!(r0 != r3)) { _fun3111_ip = 131; continue _fun3111 }
case 117:
                    r1 = r3.refCount;
                    r1 = r1 + 1;
                    r3['refCount'] = r1;
case 131:
                    if(!(r0 != r2)) { _fun3111_ip = 150; continue _fun3111 }
case 135:
                    r1 = _closure1_slot397;
                    r0 = undefined;
                    r0 = r1.bind(r0)(r2);
case 150:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot430 = r0;
            r0 = function(a0, a1) { // Original name: commitCachePassiveMountEffect, environment: r5
                _fun3112: for(var _fun3112_ip = 0; ; ) switch(_fun3112_ip) {
case 0:
                    r1 = a1;
                    r3 = r1.alternate;
                    r0 = null;
                    r2 = null;
                    if(!(r2 !== r3)) { _fun3112_ip = 31; continue _fun3112 }
case 16:
                    r3 = r1.alternate;
                    r3 = r3.memoizedState;
                    r2 = r3.cache;
case 31:
                    r1 = r1.memoizedState;
                    r3 = r1.cache;
                    if(!(r3 !== r2)) { _fun3112_ip = 78; continue _fun3112 }
case 45:
                    r1 = r3.refCount;
                    r1 = r1 + 1;
                    r3['refCount'] = r1;
                    if(!(r0 != r2)) { _fun3112_ip = 78; continue _fun3112 }
case 63:
                    r1 = _closure1_slot397;
                    r0 = undefined;
                    r0 = r1.bind(r0)(r2);
case 78:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot431 = r0;
            r0 = function(a0, a1, a2, a3) { // Original name: recursivelyTraversePassiveMountEffects, environment: r5
                _fun3113: for(var _fun3113_ip = 0; ; ) switch(_fun3113_ip) {
case 0:
                    r6 = a0;
                    r0 = a1;
                    r5 = a2;
                    r4 = a3;
                    r2 = r0.subtreeFlags;
                    r1 = 10256;
                    r1 = r2 & r1;
                    if(!r1) { _fun3113_ip = 76; continue _fun3113 }
case 30:
                    r3 = r0.child;
                    r0 = null;
                    if(!(r0 !== r3)) { _fun3113_ip = 76; continue _fun3113 }
case 44:
                    r7 = _closure1_slot433;
                    r12 = undefined;
                    r11 = r6;
                    r10 = r3;
                    r9 = r5;
                    r8 = r4;
                    r7 = r12[r7](r11, r10, r9, r8, r7);
                    r3 = r3.sibling;
                    if(r0 !== r3) { _fun3113_ip = 44; continue _fun3113 }
case 76:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot432 = r0;
            r0 = function(a0, a1, a2, a3) { // Original name: commitPassiveMountOnFiber, environment: r5
                _fun3114: for(var _fun3114_ip = 0; ; ) switch(_fun3114_ip) {
case 0:
                    r2 = a1;
                    r6 = a0;
                    r1 = r2;
                    r5 = a2;
                    r3 = a3;
                    r0 = undefined;
                    r10 = undefined;
                    r7 = undefined;
                    r8 = undefined;
                    r4 = r2.flags;
                    r9 = r2.tag;
                    r15 = 0;
                    if(!(r15 !== r9)) { _fun3114_ip = 832; continue _fun3114 }
case 42:
                    r2 = 11;
                    if(!(r2 !== r9)) { _fun3114_ip = 832; continue _fun3114 }
case 52:
                    r2 = 15;
                    if(!(r2 !== r9)) { _fun3114_ip = 832; continue _fun3114 }
case 62:
                    r2 = 3;
                    if(!(r2 !== r9)) { _fun3114_ip = 694; continue _fun3114 }
case 72:
                    r2 = 12;
                    if(!(r2 !== r9)) { _fun3114_ip = 515; continue _fun3114 }
case 82:
                    r2 = 23;
                    if(!(r2 !== r9)) { _fun3114_ip = 888; continue _fun3114 }
case 92:
                    r2 = 22;
                    if(!(r2 !== r9)) { _fun3114_ip = 203; continue _fun3114 }
case 99:
                    r2 = 24;
                    if(!(r2 !== r9)) { _fun3114_ip = 137; continue _fun3114 }
case 106:
                    r13 = _closure1_slot432;
                    r21 = r6;
                    r20 = r1;
                    r19 = r5;
                    r18 = r3;
                    r22 = undefined;
                    r2 = r22[r13](r21, r20, r19, r18, r17);
                    _fun3114_ip = 888; continue _fun3114;
case 137:
                    r14 = _closure1_slot432;
                    r21 = r6;
                    r20 = r1;
                    r19 = r5;
                    r18 = r3;
                    r22 = undefined;
                    r9 = r22[r14](r21, r20, r19, r18, r17);
                    r9 = 2048;
                    r9 = r4 & r9;
                    if(!r9) { _fun3114_ip = 888; continue _fun3114 }
case 179:
                    r9 = _closure1_slot431;
                    r2 = r1;
                    r11 = r2.alternate;
                    r2 = r9.bind(r0)(r0, r2);
                    _fun3114_ip = 888; continue _fun3114;
case 203:
                    r2 = r1;
                    r10 = r2.stateNode;
                    r9 = r2.memoizedState;
                    r2 = null;
                    if(!(r2 === r9)) { _fun3114_ip = 342; continue _fun3114 }
case 222:
                    r2 = r10;
                    r2 = r2._visibility;
                    r11 = 4;
                    r2 = r2 & r11;
                    if(r2) { _fun3114_ip = 311; continue _fun3114 }
case 240:
                    r9 = r10;
                    r2 = r9._visibility;
                    r2 = r2 | r11;
                    r9['_visibility'] = r2;
                    r14 = _closure1_slot434;
                    r21 = r6;
                    r12 = r1;
                    r19 = r5;
                    r18 = r3;
                    r16 = r12.subtreeFlags;
                    r2 = 10256;
                    r2 = r16 & r2;
                    r17 = r15 !== r2;
                    r22 = undefined;
                    r20 = r12;
                    r2 = r22[r14](r21, r20, r19, r18, r17, r16);
                    _fun3114_ip = 472; continue _fun3114;
case 311:
                    r13 = _closure1_slot432;
                    r21 = r6;
                    r20 = r1;
                    r19 = r5;
                    r18 = r3;
                    r22 = undefined;
                    r2 = r22[r13](r21, r20, r19, r18, r17);
                    _fun3114_ip = 472; continue _fun3114;
case 342:
                    r2 = r10;
                    r2 = r2._visibility;
                    r11 = 4;
                    r2 = r2 & r11;
                    if(r2) { _fun3114_ip = 446; continue _fun3114 }
case 360:
                    r2 = r1;
                    r9 = r2.mode;
                    r2 = 1;
                    r2 = r9 & r2;
                    if(r2) { _fun3114_ip = 424; continue _fun3114 }
case 378:
                    r9 = r10;
                    r2 = r9._visibility;
                    r2 = r2 | r11;
                    r9['_visibility'] = r2;
                    r13 = _closure1_slot432;
                    r21 = r6;
                    r20 = r1;
                    r19 = r5;
                    r18 = r3;
                    r22 = undefined;
                    r2 = r22[r13](r21, r20, r19, r18, r17);
                    _fun3114_ip = 472; continue _fun3114;
case 424:
                    r11 = _closure1_slot435;
                    r9 = r6;
                    r2 = r1;
                    r2 = r11.bind(r0)(r9, r2);
                    _fun3114_ip = 472; continue _fun3114;
case 446:
                    r13 = _closure1_slot432;
                    r21 = r6;
                    r20 = r1;
                    r19 = r5;
                    r18 = r3;
                    r22 = undefined;
                    r2 = r22[r13](r21, r20, r19, r18, r17);
case 472:
                    r2 = 2048;
                    r2 = r4 & r2;
                    if(!r2) { _fun3114_ip = 888; continue _fun3114 }
case 488:
                    r11 = _closure1_slot430;
                    r9 = r1;
                    r2 = r9.alternate;
                    r2 = r11.bind(r0)(r2, r9);
                    _fun3114_ip = 888; continue _fun3114;
case 515:
                    r2 = 2048;
                    r11 = r4 & r2;
                    r15 = _closure1_slot432;
                    r21 = r6;
                    r9 = r1;
                    r19 = r5;
                    r18 = r3;
                    r22 = undefined;
                    r20 = r9;
                    r12 = r22[r15](r21, r20, r19, r18, r17);
                    if(r11) { _fun3114_ip = 562; continue _fun3114 }
case 557:
                    _fun3114_ip = 888; continue _fun3114;
case 562:
                    r6 = r9.stateNode;
case 567: // try_start_0
                    r9 = r1;
                    r9 = r9.memoizedProps;
                    r10 = r9;
                    r7 = r9.id;
                    r9 = r9.onPostCommit;
                    r8 = r9;
                    r10 = 'function';
                    r9 = typeof r9;
                    if(!(r10 === r9)) { _fun3114_ip = 662; continue _fun3114 }
case 603:
                    r11 = r8;
                    r10 = r7;
                    r7 = r1;
                    r8 = r7.alternate;
                    r9 = 'update';
                    r7 = null;
                    if(!(r7 === r8)) { _fun3114_ip = 631; continue _fun3114 }
case 627:
                    r9 = 'mount';
case 631:
                    r7 = r6;
                    r19 = r7.passiveEffectDuration;
                    r18 = -0.0;
                    r22 = undefined;
                    r21 = r10;
                    r20 = r9;
                    r7 = r22[r11](r21, r20, r19, r18, r17);
case 662: // try_end0
                    _fun3114_ip = 888; continue _fun3114;
case 667: // catch_target0
                    CatchBlockStart(arg_register=9);
                    r8 = _closure1_slot470;
                    r7 = r1;
                    r2 = r7.return;
                    r2 = r8.bind(r0)(r7, r2, r9);
                    _fun3114_ip = 888; continue _fun3114;
case 694:
                    r11 = _closure1_slot432;
                    r21 = r6;
                    r20 = r1;
                    r19 = r5;
                    r18 = r3;
                    r22 = undefined;
                    r7 = r22[r11](r21, r20, r19, r18, r17);
                    r7 = 2048;
                    r7 = r4 & r7;
                    if(!r7) { _fun3114_ip = 888; continue _fun3114 }
case 736:
                    r8 = null;
                    r6 = null;
                    r7 = r1;
                    r7 = r7.alternate;
                    if(!(r8 !== r7)) { _fun3114_ip = 770; continue _fun3114 }
case 752:
                    r7 = r1;
                    r7 = r7.alternate;
                    r7 = r7.memoizedState;
                    r6 = r7.cache;
case 770:
                    r7 = r1;
                    r7 = r7.memoizedState;
                    r9 = r7.cache;
                    r1 = r9;
                    r7 = r6;
                    if(!(r9 !== r7)) { _fun3114_ip = 888; continue _fun3114 }
case 793:
                    r9 = r1;
                    r7 = r9.refCount;
                    r7 = r7 + 1;
                    r9['refCount'] = r7;
                    r7 = r6;
                    if(!(r8 != r7)) { _fun3114_ip = 888; continue _fun3114 }
case 817:
                    r7 = _closure1_slot397;
                    r2 = r6;
                    r2 = r7.bind(r0)(r2);
                    _fun3114_ip = 888; continue _fun3114;
case 832:
                    r8 = _closure1_slot432;
                    r21 = r6;
                    r20 = r1;
                    r19 = r5;
                    r18 = r3;
                    r22 = undefined;
                    r3 = r22[r8](r21, r20, r19, r18, r17);
                    r3 = 2048;
                    r3 = r4 & r3;
                    if(!r3) { _fun3114_ip = 888; continue _fun3114 }
case 871:
                    r3 = _closure1_slot407;
                    r2 = r1;
                    r1 = 9;
                    r1 = r3.bind(r0)(r1, r2);
case 888:
                    return r0;
                }
            };
            var _closure1_slot433 = r0;
            r0 = function(a0, a1, a2, a3, a4) { // Original name: recursivelyTraverseReconnectPassiveEffects, environment: r5
                _fun3115: for(var _fun3115_ip = 0; ; ) switch(_fun3115_ip) {
case 0:
                    r18 = a0;
                    r0 = a1;
                    r17 = a2;
                    r16 = a3;
                    r15 = a4;
                    if(!r15) { _fun3115_ip = 39; continue _fun3115 }
case 18:
                    r2 = r0.subtreeFlags;
                    r1 = 10256;
                    r2 = r2 & r1;
                    r1 = 0;
                    r15 = r1 !== r2;
case 39:
                    r14 = r0.child;
                    r0 = undefined;
                    r13 = null;
                    r11 = 8;
                    r10 = 2048;
                    r9 = 4;
                    r8 = 1;
                    r7 = 24;
                    r6 = 22;
                    r5 = 23;
                    r4 = 15;
                    r3 = 11;
                    r2 = 0;
                    r1 = undefined;
                    if(!(r13 !== r14)) { _fun3115_ip = 505; continue _fun3115 }
case 92:
                    r24 = r14.flags;
                    r22 = r14.tag;
                    r19 = r14;
                    r21 = r1;
                    if(!(r2 !== r22)) { _fun3115_ip = 450; continue _fun3115 }
case 115:
                    if(!(r3 !== r22)) { _fun3115_ip = 450; continue _fun3115 }
case 122:
                    if(!(r4 !== r22)) { _fun3115_ip = 450; continue _fun3115 }
case 129:
                    r20 = r21;
                    if(!(r5 !== r22)) { _fun3115_ip = 490; continue _fun3115 }
case 139:
                    if(!(r6 !== r22)) { _fun3115_ip = 250; continue _fun3115 }
case 143:
                    if(!(r7 !== r22)) { _fun3115_ip = 181; continue _fun3115 }
case 147:
                    r22 = _closure1_slot434;
                    r31 = undefined;
                    r30 = r18;
                    r29 = r19;
                    r28 = r17;
                    r27 = r16;
                    r26 = r15;
                    r22 = r31[r22](r30, r29, r28, r27, r26, r25);
                    r20 = r21;
                    _fun3115_ip = 490; continue _fun3115;
case 181:
                    r22 = _closure1_slot434;
                    r31 = undefined;
                    r30 = r18;
                    r29 = r19;
                    r28 = r17;
                    r27 = r16;
                    r26 = r15;
                    r22 = r31[r22](r30, r29, r28, r27, r26, r25);
                    r22 = r15;
                    if(!r15) { _fun3115_ip = 217; continue _fun3115 }
case 213:
                    r22 = r24 & r10;
case 217:
                    r20 = r21;
                    if(!r22) { _fun3115_ip = 490; continue _fun3115 }
case 226:
                    r22 = _closure1_slot431;
                    r23 = r19.alternate;
                    r22 = r22.bind(r0)(r0, r19);
                    r20 = r21;
                    _fun3115_ip = 490; continue _fun3115;
case 250:
                    r22 = r19.stateNode;
                    r23 = r19.memoizedState;
                    if(!(r13 === r23)) { _fun3115_ip = 307; continue _fun3115 }
case 264:
                    r23 = r22._visibility;
                    r23 = r23 | r9;
                    r22['_visibility'] = r23;
                    r23 = _closure1_slot434;
                    r31 = undefined;
                    r30 = r18;
                    r29 = r19;
                    r28 = r17;
                    r27 = r16;
                    r26 = r15;
                    r23 = r31[r23](r30, r29, r28, r27, r26, r25);
                    _fun3115_ip = 413; continue _fun3115;
case 307:
                    r23 = r22._visibility;
                    r23 = r23 & r9;
                    if(r23) { _fun3115_ip = 387; continue _fun3115 }
case 319:
                    r23 = r19.mode;
                    r23 = r23 & r8;
                    if(r23) { _fun3115_ip = 374; continue _fun3115 }
case 331:
                    r23 = r22._visibility;
                    r23 = r23 | r9;
                    r22['_visibility'] = r23;
                    r23 = _closure1_slot434;
                    r31 = undefined;
                    r30 = r18;
                    r29 = r19;
                    r28 = r17;
                    r27 = r16;
                    r26 = r15;
                    r23 = r31[r23](r30, r29, r28, r27, r26, r25);
                    _fun3115_ip = 413; continue _fun3115;
case 374:
                    r23 = _closure1_slot435;
                    r23 = r23.bind(r0)(r18, r19);
                    _fun3115_ip = 413; continue _fun3115;
case 387:
                    r23 = _closure1_slot434;
                    r31 = undefined;
                    r30 = r18;
                    r29 = r19;
                    r28 = r17;
                    r27 = r16;
                    r26 = r15;
                    r23 = r31[r23](r30, r29, r28, r27, r26, r25);
case 413:
                    r23 = r15;
                    if(!r23) { _fun3115_ip = 423; continue _fun3115 }
case 419:
                    r23 = r24 & r10;
case 423:
                    r20 = r22;
                    if(!r23) { _fun3115_ip = 490; continue _fun3115 }
case 429:
                    r24 = _closure1_slot430;
                    r23 = r19.alternate;
                    r23 = r24.bind(r0)(r23, r19);
                    r20 = r22;
                    _fun3115_ip = 490; continue _fun3115;
case 450:
                    r22 = _closure1_slot434;
                    r31 = undefined;
                    r30 = r18;
                    r29 = r19;
                    r28 = r17;
                    r27 = r16;
                    r26 = r15;
                    r22 = r31[r22](r30, r29, r28, r27, r26, r25);
                    r22 = _closure1_slot407;
                    r22 = r22.bind(r0)(r11, r19);
                    r20 = r21;
case 490:
                    r14 = r19.sibling;
                    r1 = r20;
                    if(r13 !== r14) { _fun3115_ip = 92; continue _fun3115 }
case 505:
                    return r0;
                }
            };
            var _closure1_slot434 = r0;
            r0 = function(a0, a1) { // Original name: recursivelyTraverseAtomicPassiveEffects, environment: r5
                _fun3116: for(var _fun3116_ip = 0; ; ) switch(_fun3116_ip) {
case 0:
                    r7 = a0;
                    r0 = a1;
                    r2 = r0.subtreeFlags;
                    r1 = 10256;
                    r1 = r2 & r1;
                    if(!r1) { _fun3116_ip = 168; continue _fun3116 }
case 27:
                    r6 = r0.child;
                    r5 = null;
                    r3 = undefined;
                    r2 = 2048;
                    r1 = 24;
                    r0 = 22;
                    if(!(r5 !== r6)) { _fun3116_ip = 168; continue _fun3116 }
case 55:
                    r9 = r6.flags;
                    r10 = r6.tag;
                    r8 = r6;
                    if(!(r0 !== r10)) { _fun3116_ip = 125; continue _fun3116 }
case 72:
                    if(!(r1 !== r10)) { _fun3116_ip = 89; continue _fun3116 }
case 76:
                    r10 = _closure1_slot435;
                    r10 = r10.bind(r3)(r7, r8);
                    _fun3116_ip = 159; continue _fun3116;
case 89:
                    r10 = _closure1_slot435;
                    r10 = r10.bind(r3)(r7, r8);
                    r10 = r9 & r2;
                    if(!r10) { _fun3116_ip = 159; continue _fun3116 }
case 107:
                    r10 = _closure1_slot431;
                    r11 = r8.alternate;
                    r10 = r10.bind(r3)(r3, r8);
                    _fun3116_ip = 159; continue _fun3116;
case 125:
                    r10 = _closure1_slot435;
                    r10 = r10.bind(r3)(r7, r8);
                    r9 = r9 & r2;
                    if(!r9) { _fun3116_ip = 159; continue _fun3116 }
case 143:
                    r10 = _closure1_slot430;
                    r9 = r8.alternate;
                    r9 = r10.bind(r3)(r9, r8);
case 159:
                    r6 = r8.sibling;
                    if(r5 !== r6) { _fun3116_ip = 55; continue _fun3116 }
case 168:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot435 = r0;
            r0 = function(a0) { // Original name: recursivelyAccumulateSuspenseyCommit, environment: r5
                _fun3117: for(var _fun3117_ip = 0; ; ) switch(_fun3117_ip) {
case 0:
                    r0 = a0;
                    r2 = r0.subtreeFlags;
                    r1 = _closure1_slot143;
                    r1 = r2 & r1;
                    if(!r1) { _fun3117_ip = 54; continue _fun3117 }
case 22:
                    r2 = r0.child;
                    r1 = undefined;
                    r0 = null;
                    if(!(r0 !== r2)) { _fun3117_ip = 54; continue _fun3117 }
case 35:
                    r4 = _closure1_slot437;
                    r4 = r4.bind(r1)(r2);
                    r2 = r2.sibling;
                    if(r0 !== r2) { _fun3117_ip = 35; continue _fun3117 }
case 54:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot436 = r0;
            r0 = function(a0) { // Original name: accumulateSuspenseyCommitOnFiber, environment: r5
                _fun3118: for(var _fun3118_ip = 0; ; ) switch(_fun3118_ip) {
case 0:
                    r3 = a0;
                    r1 = r3.tag;
                    r0 = 26;
                    if(!(r0 !== r1)) { _fun3118_ip = 187; continue _fun3118 }
case 18:
                    r0 = 5;
                    if(!(r0 !== r1)) { _fun3118_ip = 170; continue _fun3118 }
case 28:
                    r0 = 3;
                    if(!(r0 !== r1)) { _fun3118_ip = 153; continue _fun3118 }
case 35:
                    r0 = 4;
                    if(!(r0 !== r1)) { _fun3118_ip = 153; continue _fun3118 }
case 42:
                    r0 = 22;
                    if(!(r0 !== r1)) { _fun3118_ip = 69; continue _fun3118 }
case 49:
                    r1 = _closure1_slot436;
                    r0 = undefined;
                    r0 = r1.bind(r0)(r3);
                    _fun3118_ip = 240; continue _fun3118;
case 69:
                    r0 = r3.memoizedState;
                    r1 = null;
                    if(!(r1 === r0)) { _fun3118_ip = 240; continue _fun3118 }
case 83:
                    r0 = r3.alternate;
                    if(!(r1 !== r0)) { _fun3118_ip = 101; continue _fun3118 }
case 92:
                    r0 = r0.memoizedState;
                    if(!(r1 === r0)) { _fun3118_ip = 118; continue _fun3118 }
case 101:
                    r1 = _closure1_slot436;
                    r0 = undefined;
                    r0 = r1.bind(r0)(r3);
                    _fun3118_ip = 240; continue _fun3118;
case 118:
                    r0 = _closure1_slot143;
                    r2 = 16777216;
                    _closure1_slot143 = r2;
                    r4 = _closure1_slot436;
                    r2 = undefined;
                    r2 = r4.bind(r2)(r3);
                    _closure1_slot143 = r0;
                    _fun3118_ip = 240; continue _fun3118;
case 153:
                    r1 = _closure1_slot436;
                    r0 = undefined;
                    r0 = r1.bind(r0)(r3);
                    _fun3118_ip = 240; continue _fun3118;
case 170:
                    r1 = _closure1_slot436;
                    r0 = undefined;
                    r0 = r1.bind(r0)(r3);
                    _fun3118_ip = 240; continue _fun3118;
case 187:
                    r2 = _closure1_slot436;
                    r1 = undefined;
                    r2 = r2.bind(r1)(r3);
                    r4 = r3.flags;
                    r2 = _closure1_slot143;
                    r2 = r4 & r2;
                    if(!r2) { _fun3118_ip = 229; continue _fun3118 }
case 218:
                    r4 = r3.memoizedState;
                    r3 = null;
                    r2 = r3 !== r4;
case 229:
                    if(!r2) { _fun3118_ip = 240; continue _fun3118 }
case 232:
                    r0 = _closure1_slot246;
                    r0 = r0.bind(r1)();
case 240:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot437 = r0;
            r0 = function(a0) { // Original name: detachAlternateSiblings, environment: r5
                _fun3119: for(var _fun3119_ip = 0; ; ) switch(_fun3119_ip) {
case 0:
                    r0 = a0;
                    r2 = r0.alternate;
                    r1 = null;
                    if(!(r1 !== r2)) { _fun3119_ip = 47; continue _fun3119 }
case 14:
                    r0 = r2.child;
                    if(!(r1 !== r0)) { _fun3119_ip = 47; continue _fun3119 }
case 23:
                    r2['child'] = r1;
case 29:
                    r2 = r0.sibling;
                    r0['sibling'] = r1;
                    r0 = r2;
                    if(r1 !== r0) { _fun3119_ip = 29; continue _fun3119 }
case 47:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot438 = r0;
            r0 = function(a0) { // Original name: recursivelyTraversePassiveUnmountEffects, environment: r5
                _fun3120: for(var _fun3120_ip = 0; ; ) switch(_fun3120_ip) {
case 0:
                    r0 = a0;
                    r5 = r0.deletions;
                    r2 = r0.flags;
                    r1 = 16;
                    r1 = r2 & r1;
                    r4 = 0;
                    if(!(r4 !== r1)) { _fun3120_ip = 97; continue _fun3120 }
case 26:
                    r1 = null;
                    if(!(r1 !== r5)) { _fun3120_ip = 82; continue _fun3120 }
case 32:
                    r1 = r5.length;
                    r1 = r4 < r1;
                    r2 = undefined;
                    r4 = 0;
                    if(!r1) { _fun3120_ip = 82; continue _fun3120 }
case 51:
                    r6 = r5[r4];
                    _closure1_slot139 = r6;
                    r1 = _closure1_slot442;
                    r1 = r1.bind(r2)(r6, r0);
                    r4 = r4 + 1;
                    r1 = r5.length;
                    if(r4 < r1) { _fun3120_ip = 51; continue _fun3120 }
case 82:
                    r2 = _closure1_slot438;
                    r1 = undefined;
                    r1 = r2.bind(r1)(r0);
case 97:
                    r2 = r0.subtreeFlags;
                    r1 = 10256;
                    r1 = r2 & r1;
                    if(!r1) { _fun3120_ip = 150; continue _fun3120 }
case 115:
                    r3 = r0.child;
                    r1 = undefined;
                    r0 = null;
                    if(!(r0 !== r3)) { _fun3120_ip = 150; continue _fun3120 }
case 131:
                    r4 = _closure1_slot440;
                    r4 = r4.bind(r1)(r3);
                    r3 = r3.sibling;
                    if(r0 !== r3) { _fun3120_ip = 131; continue _fun3120 }
case 150:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot439 = r0;
            r0 = function(a0) { // Original name: commitPassiveUnmountOnFiber, environment: r5
                _fun3121: for(var _fun3121_ip = 0; ; ) switch(_fun3121_ip) {
case 0:
                    r4 = a0;
                    r1 = r4.tag;
                    r0 = 0;
                    if(!(r0 !== r1)) { _fun3121_ip = 233; continue _fun3121 }
case 17:
                    r0 = 11;
                    if(!(r0 !== r1)) { _fun3121_ip = 233; continue _fun3121 }
case 27:
                    r0 = 15;
                    if(!(r0 !== r1)) { _fun3121_ip = 233; continue _fun3121 }
case 37:
                    r0 = 3;
                    if(!(r0 !== r1)) { _fun3121_ip = 216; continue _fun3121 }
case 47:
                    r0 = 12;
                    if(!(r0 !== r1)) { _fun3121_ip = 199; continue _fun3121 }
case 57:
                    r0 = 22;
                    if(!(r0 !== r1)) { _fun3121_ip = 84; continue _fun3121 }
case 64:
                    r1 = _closure1_slot439;
                    r0 = undefined;
                    r0 = r1.bind(r0)(r4);
                    _fun3121_ip = 286; continue _fun3121;
case 84:
                    r1 = r4.stateNode;
                    r0 = r4.memoizedState;
                    r2 = null;
                    if(!(r2 !== r0)) { _fun3121_ip = 141; continue _fun3121 }
case 100:
                    r3 = r1._visibility;
                    r0 = 4;
                    r0 = r3 & r0;
                    if(!r0) { _fun3121_ip = 141; continue _fun3121 }
case 115:
                    r0 = r4.return;
                    if(!(r2 !== r0)) { _fun3121_ip = 161; continue _fun3121 }
case 124:
                    r0 = r4.return;
                    r2 = r0.tag;
                    r0 = 13;
                    if(!(r0 === r2)) { _fun3121_ip = 161; continue _fun3121 }
case 141:
                    r2 = _closure1_slot439;
                    r0 = undefined;
                    r0 = r2.bind(r0)(r4);
                    _fun3121_ip = 286; continue _fun3121;
case 161:
                    r2 = r1._visibility;
                    r0 = -5;
                    r0 = r2 & r0;
                    r1['_visibility'] = r0;
                    r1 = _closure1_slot441;
                    r0 = undefined;
                    r0 = r1.bind(r0)(r4);
                    _fun3121_ip = 286; continue _fun3121;
case 199:
                    r1 = _closure1_slot439;
                    r0 = undefined;
                    r0 = r1.bind(r0)(r4);
                    _fun3121_ip = 286; continue _fun3121;
case 216:
                    r1 = _closure1_slot439;
                    r0 = undefined;
                    r0 = r1.bind(r0)(r4);
                    _fun3121_ip = 286; continue _fun3121;
case 233:
                    r1 = _closure1_slot439;
                    r3 = undefined;
                    r1 = r1.bind(r3)(r4);
                    r2 = r4.flags;
                    r1 = 2048;
                    r1 = r2 & r1;
                    if(!r1) { _fun3121_ip = 286; continue _fun3121 }
case 266:
                    r2 = _closure1_slot408;
                    r1 = r4.return;
                    r0 = 9;
                    r0 = r2.bind(r3)(r0, r4, r1);
case 286:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot440 = r0;
            r0 = function(a0) { // Original name: recursivelyTraverseDisconnectPassiveEffects, environment: r5
                _fun3122: for(var _fun3122_ip = 0; ; ) switch(_fun3122_ip) {
case 0:
                    r1 = a0;
                    r6 = r1.deletions;
                    r2 = r1.flags;
                    r0 = 16;
                    r2 = r2 & r0;
                    r0 = undefined;
                    r11 = 0;
                    r10 = undefined;
                    if(!(r11 !== r2)) { _fun3122_ip = 107; continue _fun3122 }
case 30:
                    r3 = null;
                    r2 = undefined;
                    if(!(r3 !== r6)) { _fun3122_ip = 91; continue _fun3122 }
case 38:
                    r3 = r6.length;
                    r3 = r11 < r3;
                    r4 = 0;
                    r2 = 0;
                    if(!r3) { _fun3122_ip = 91; continue _fun3122 }
case 57:
                    r7 = r6[r4];
                    _closure1_slot139 = r7;
                    r3 = _closure1_slot442;
                    r3 = r3.bind(r0)(r7, r1);
                    r4 = r4 + 1;
                    r3 = r6.length;
                    r2 = r4;
                    if(r2 < r3) { _fun3122_ip = 57; continue _fun3122 }
case 91:
                    r3 = _closure1_slot438;
                    r3 = r3.bind(r0)(r1);
                    r10 = r2;
case 107:
                    r9 = r1.child;
                    r8 = null;
                    r6 = 8;
                    r5 = -5;
                    r4 = 4;
                    r3 = 22;
                    r2 = 15;
                    r1 = 11;
                    if(!(r8 !== r9)) { _fun3122_ip = 282; continue _fun3122 }
case 145:
                    r13 = r9.tag;
                    r12 = r9;
                    r14 = r10;
                    if(!(r11 !== r13)) { _fun3122_ip = 237; continue _fun3122 }
case 160:
                    if(!(r1 !== r13)) { _fun3122_ip = 237; continue _fun3122 }
case 164:
                    if(!(r2 !== r13)) { _fun3122_ip = 237; continue _fun3122 }
case 168:
                    if(!(r3 !== r13)) { _fun3122_ip = 187; continue _fun3122 }
case 172:
                    r13 = _closure1_slot441;
                    r13 = r13.bind(r0)(r12);
                    r13 = r14;
                    _fun3122_ip = 267; continue _fun3122;
case 187:
                    r15 = r12.stateNode;
                    r16 = r15._visibility;
                    r16 = r16 & r4;
                    r13 = r15;
                    if(!r16) { _fun3122_ip = 267; continue _fun3122 }
case 207:
                    r16 = r15._visibility;
                    r16 = r16 & r5;
                    r15['_visibility'] = r16;
                    r16 = _closure1_slot441;
                    r16 = r16.bind(r0)(r12);
                    r13 = r15;
                    _fun3122_ip = 267; continue _fun3122;
case 237:
                    r16 = _closure1_slot408;
                    r15 = r12.return;
                    r15 = r16.bind(r0)(r6, r12, r15);
                    r15 = _closure1_slot441;
                    r15 = r15.bind(r0)(r12);
                    r13 = r14;
case 267:
                    r9 = r12.sibling;
                    r10 = r13;
                    if(r8 !== r9) { _fun3122_ip = 145; continue _fun3122 }
case 282:
                    return r0;
                }
            };
            var _closure1_slot441 = r0;
            r0 = function(a0, a1) { // Original name: commitPassiveUnmountEffectsInsideOfDeletedTree_begin, environment: r5
                _fun3123: for(var _fun3123_ip = 0; ; ) switch(_fun3123_ip) {
case 0:
                    r14 = a0;
                    r13 = a1;
                    r1 = _closure1_slot139;
                    r0 = undefined;
                    r11 = null;
                    r10 = 8;
                    r9 = 24;
                    r8 = 22;
                    r7 = 23;
                    r6 = 15;
                    r5 = 11;
                    r4 = 0;
                    r3 = undefined;
                    r2 = undefined;
                    if(!(r11 !== r1)) { _fun3123_ip = 314; continue _fun3123 }
case 48:
                    r19 = _closure1_slot139;
                    r15 = r19.tag;
                    r17 = r3;
                    r1 = r2;
                    if(!(r4 !== r15)) { _fun3123_ip = 168; continue _fun3123 }
case 67:
                    if(!(r5 !== r15)) { _fun3123_ip = 168; continue _fun3123 }
case 71:
                    if(!(r6 !== r15)) { _fun3123_ip = 168; continue _fun3123 }
case 75:
                    if(!(r7 !== r15)) { _fun3123_ip = 109; continue _fun3123 }
case 79:
                    if(!(r8 !== r15)) { _fun3123_ip = 109; continue _fun3123 }
case 83:
                    if(!(r9 === r15)) { _fun3123_ip = 180; continue _fun3123 }
case 87:
                    r16 = _closure1_slot397;
                    r15 = r19.memoizedState;
                    r15 = r15.cache;
                    r15 = r16.bind(r0)(r15);
                    _fun3123_ip = 180; continue _fun3123;
case 109:
                    r15 = r19.memoizedState;
                    if(!(r11 !== r15)) { _fun3123_ip = 180; continue _fun3123 }
case 118:
                    r15 = r19.memoizedState;
                    r15 = r15.cachePool;
                    if(!(r11 !== r15)) { _fun3123_ip = 180; continue _fun3123 }
case 132:
                    r15 = r19.memoizedState;
                    r15 = r15.cachePool;
                    r16 = r15.pool;
                    if(!(r11 != r16)) { _fun3123_ip = 180; continue _fun3123 }
case 152:
                    r15 = r16.refCount;
                    r15 = r15 + 1;
                    r16['refCount'] = r15;
                    _fun3123_ip = 180; continue _fun3123;
case 168:
                    r15 = _closure1_slot408;
                    r15 = r15.bind(r0)(r10, r19, r13);
case 180:
                    r18 = r19.child;
                    if(!(r11 === r18)) { _fun3123_ip = 281; continue _fun3123 }
case 189:
                    r20 = _closure1_slot139;
                    r16 = r17;
                    r15 = r1;
                    if(!(r11 !== r20)) { _fun3123_ip = 297; continue _fun3123 }
case 203:
                    r22 = _closure1_slot139;
                    r21 = r22.sibling;
                    r20 = r22.return;
                    r23 = _closure1_slot419;
                    r23 = r23.bind(r0)(r22);
                    if(!(r22 !== r14)) { _fun3123_ip = 269; continue _fun3123 }
case 231:
                    if(!(r11 === r21)) { _fun3123_ip = 251; continue _fun3123 }
case 235:
                    _closure1_slot139 = r20;
                    r16 = r21;
                    r15 = r20;
                    if(r11 !== r20) { _fun3123_ip = 203; continue _fun3123 }
case 249:
                    _fun3123_ip = 297; continue _fun3123;
case 251:
                    r21['return'] = r20;
                    _closure1_slot139 = r21;
                    r16 = r21;
                    r15 = r20;
                    _fun3123_ip = 297; continue _fun3123;
case 269:
                    _closure1_slot139 = r11;
                    r16 = r21;
                    r15 = r20;
                    _fun3123_ip = 297; continue _fun3123;
case 281:
                    r18['return'] = r19;
                    _closure1_slot139 = r18;
                    r16 = r17;
                    r15 = r1;
case 297:
                    r1 = _closure1_slot139;
                    r3 = r16;
                    r2 = r15;
                    if(r11 !== r1) { _fun3123_ip = 48; continue _fun3123 }
case 314:
                    return r0;
                }
            };
            var _closure1_slot442 = r0;
            r0 = function(a0) { // Original name: requestUpdateLane, environment: r5
                _fun3124: for(var _fun3124_ip = 0; ; ) switch(_fun3124_ip) {
case 0:
                    r0 = a0;
                    r1 = r0.mode;
                    r0 = 1;
                    r0 = r1 & r0;
                    r2 = 0;
                    if(!(r2 !== r0)) { _fun3124_ip = 113; continue _fun3124 }
case 21:
                    r3 = _closure1_slot146;
                    r1 = 2;
                    r1 = r3 & r1;
                    if(!(r2 !== r1)) { _fun3124_ip = 47; continue _fun3124 }
case 39:
                    r1 = _closure1_slot149;
                    if(!(r2 === r1)) { _fun3124_ip = 100; continue _fun3124 }
case 47:
                    r1 = _closure1_slot3;
                    r3 = r1.T;
                    r1 = null;
                    if(!(r1 === r3)) { _fun3124_ip = 79; continue _fun3124 }
case 62:
                    r3 = _closure1_slot68;
                    r1 = 32;
                    if(!(r2 !== r3)) { _fun3124_ip = 77; continue _fun3124 }
case 73:
                    r1 = _closure1_slot68;
case 77:
                    return r1;
case 79:
                    r1 = _closure1_slot91;
                    if(!(r2 === r1)) { _fun3124_ip = 98; continue _fun3124 }
case 87:
                    r3 = _closure1_slot270;
                    r2 = undefined;
                    r1 = r3.bind(r2)();
case 98:
                    return r1;
case 100:
                    r1 = _closure1_slot149;
                    r0 = -r1;
                    r0 = r1 & r0;
                    return r0;
case 113:
                    r0 = 2;
                    return r0;
                }
            };
            var _closure1_slot443 = r0;
            r0 = function() { // Original name: requestDeferredLane, environment: r5
                _fun3125: for(var _fun3125_ip = 0; ; ) switch(_fun3125_ip) {
case 0:
                    r1 = _closure1_slot160;
                    r3 = 0;
                    if(!(r3 === r1)) { _fun3125_ip = 45; continue _fun3125 }
case 13:
                    r2 = _closure1_slot149;
                    r1 = 536870912;
                    r2 = r2 & r1;
                    if(!(r3 === r2)) { _fun3125_ip = 41; continue _fun3125 }
case 31:
                    r3 = _closure1_slot237;
                    r2 = undefined;
                    r1 = r3.bind(r2)();
case 41:
                    _closure1_slot160 = r1;
case 45:
                    r1 = _closure1_slot106;
                    r2 = r1.current;
                    r1 = null;
                    if(!(r1 !== r2)) { _fun3125_ip = 78; continue _fun3125 }
case 60:
                    r3 = r2.flags;
                    r1 = 32;
                    r1 = r3 | r1;
                    r2['flags'] = r1;
case 78:
                    r0 = _closure1_slot160;
                    return r0;
                }
            };
            var _closure1_slot444 = r0;
            r0 = function(a0, a1, a2) { // Original name: scheduleUpdateOnFiber, environment: r5
                _fun3126: for(var _fun3126_ip = 0; ; ) switch(_fun3126_ip) {
case 0:
                    r6 = a0;
                    r4 = a2;
                    r0 = _closure1_slot147;
                    if(!(r6 === r0)) { _fun3126_ip = 28; continue _fun3126 }
case 17:
                    r2 = _closure1_slot150;
                    r0 = 2;
                    if(!(r0 !== r2)) { _fun3126_ip = 40; continue _fun3126 }
case 28:
                    r2 = r6.cancelPendingCommit;
                    r0 = null;
                    if(!(r0 !== r2)) { _fun3126_ip = 79; continue _fun3126 }
case 40:
                    r2 = _closure1_slot452;
                    r7 = undefined;
                    r0 = 0;
                    r0 = r2.bind(r7)(r6, r0);
                    r5 = _closure1_slot450;
                    r12 = _closure1_slot149;
                    r11 = _closure1_slot160;
                    r10 = false;
                    r14 = undefined;
                    r13 = r6;
                    r0 = r14[r5](r13, r12, r11, r10, r9);
case 79:
                    r2 = _closure1_slot240;
                    r0 = undefined;
                    r2 = r2.bind(r0)(r6, r4);
                    r3 = _closure1_slot146;
                    r2 = 2;
                    r5 = r3 & r2;
                    r3 = 0;
                    if(!(r3 !== r5)) { _fun3126_ip = 119; continue _fun3126 }
case 108:
                    r5 = _closure1_slot147;
                    if(!(r6 !== r5)) { _fun3126_ip = 292; continue _fun3126 }
case 119:
                    r5 = _closure1_slot147;
                    if(!(r6 === r5)) { _fun3126_ip = 186; continue _fun3126 }
case 127:
                    r5 = _closure1_slot146;
                    r5 = r5 & r2;
                    if(!(r3 === r5)) { _fun3126_ip = 151; continue _fun3126 }
case 139:
                    r5 = _closure1_slot158;
                    r5 = r5 | r4;
                    _closure1_slot158 = r5;
case 151:
                    r7 = _closure1_slot156;
                    r5 = 4;
                    if(!(r5 === r7)) { _fun3126_ip = 186; continue _fun3126 }
case 162:
                    r9 = _closure1_slot450;
                    r12 = _closure1_slot149;
                    r11 = _closure1_slot160;
                    r10 = false;
                    r14 = undefined;
                    r13 = r6;
                    r5 = r14[r9](r13, r12, r11, r10, r9);
case 186:
                    r5 = _closure1_slot264;
                    r5 = r5.bind(r0)(r6);
                    r2 = r2 === r4;
                    if(!r2) { _fun3126_ip = 211; continue _fun3126 }
case 203:
                    r4 = _closure1_slot146;
                    r2 = r3 === r4;
case 211:
                    if(!r2) { _fun3126_ip = 233; continue _fun3126 }
case 214:
                    r4 = a1;
                    r5 = r4.mode;
                    r4 = 1;
                    r4 = r5 & r4;
                    r2 = r3 === r4;
case 233:
                    if(!r2) { _fun3126_ip = 292; continue _fun3126 }
case 236:
                    r4 = _closure1_slot0;
                    r5 = _closure1_slot1;
                    r2 = 3;
                    r2 = r5[r2];
                    r4 = r4.bind(r0)(r2);
                    r2 = r4.unstable_now;
                    r4 = r2.bind(r4)();
                    r2 = 500;
                    r2 = r4 + r2;
                    _closure1_slot166 = r2;
                    r2 = _closure1_slot265;
                    r1 = true;
                    r1 = r2.bind(r0)(r3, r1);
case 292:
                    return r0;
                }
            };
            var _closure1_slot445 = r0;
            r0 = function(a0, a1, a2) { // Original name: performWorkOnRoot, environment: r5
                _fun3127: for(var _fun3127_ip = 0; ; ) switch(_fun3127_ip) {
case 0:
                    r2 = a0;
                    r3 = a1;
                    r0 = _closure1_slot146;
                    r17 = 6;
                    r0 = r0 & r17;
                    r6 = 0;
                    if(!(r6 === r0)) { _fun3127_ip = 958; continue _fun3127 }
case 29:
                    r0 = a2;
                    r7 = !r0;
                    if(!r7) { _fun3127_ip = 49; continue _fun3127 }
case 38:
                    r0 = 60;
                    r0 = r3 & r0;
                    r7 = r6 === r0;
case 49:
                    if(!r7) { _fun3127_ip = 66; continue _fun3127 }
case 52:
                    r0 = r2.expiredLanes;
                    r0 = r3 & r0;
                    r7 = r6 === r0;
case 66:
                    if(r7) { _fun3127_ip = 81; continue _fun3127 }
case 69:
                    r4 = _closure1_slot235;
                    r0 = undefined;
                    r7 = r4.bind(r0)(r2, r3);
case 81:
                    if(r7) { _fun3127_ip = 102; continue _fun3127 }
case 84:
                    r5 = _closure1_slot457;
                    r4 = undefined;
                    r0 = true;
                    r16 = r5.bind(r4)(r2, r3, r0);
                    _fun3127_ip = 115; continue _fun3127;
case 102:
                    r4 = _closure1_slot459;
                    r0 = undefined;
                    r16 = r4.bind(r0)(r2, r3);
case 115:
                    r0 = undefined;
                    r5 = false;
                    r22 = 2;
                    r8 = 4;
                    r21 = null;
                    r15 = 536870912;
                    r14 = -536870913;
                    r13 = r3;
                    r12 = r7;
                    r11 = undefined;
                    r10 = undefined;
case 149:
                    r4 = r13;
                    r18 = r16;
                    r3 = r12;
                    if(!(r6 !== r18)) { _fun3127_ip = 912; continue _fun3127 }
case 165:
                    if(!(r17 !== r18)) { _fun3127_ip = 884; continue _fun3127 }
case 172:
                    r9 = r2.current;
                    r20 = r9.alternate;
                    if(!r3) { _fun3127_ip = 217; continue _fun3127 }
case 185:
                    r3 = _closure1_slot449;
                    r3 = r3.bind(r0)(r20);
                    if(r3) { _fun3127_ip = 217; continue _fun3127 }
case 198:
                    r3 = _closure1_slot457;
                    r16 = r3.bind(r0)(r2, r4, r5);
                    r13 = r4;
                    r12 = false;
                    _fun3127_ip = 149; continue _fun3127;
case 217:
                    r19 = r2.tag;
                    r9 = r4;
                    r3 = r18;
                    if(!(r6 !== r19)) { _fun3127_ip = 425; continue _fun3127 }
case 235:
                    r9 = r4;
                    r3 = r18;
                    if(!(r22 === r18)) { _fun3127_ip = 425; continue _fun3127 }
case 248:
                    r19 = r2.errorRecoveryDisabledLanes;
                    r23 = r19 & r4;
                    r19 = 0;
                    if(r23) { _fun3127_ip = 297; continue _fun3127 }
case 263:
                    r23 = r2.pendingLanes;
                    r24 = r23 & r14;
                    r23 = r24;
                    if(!(r6 === r23)) { _fun3127_ip = 294; continue _fun3127 }
case 279:
                    r25 = r24 & r15;
                    r24 = 0;
                    if(!r25) { _fun3127_ip = 291; continue _fun3127 }
case 288:
                    r24 = r15;
case 291:
                    r23 = r24;
case 294:
                    r19 = r23;
case 297:
                    r9 = r4;
                    r3 = r18;
                    if(!(r6 !== r19)) { _fun3127_ip = 425; continue _fun3127 }
case 307:
                    r24 = _closure1_slot162;
                    r18 = _closure1_slot457;
                    r23 = r18.bind(r0)(r2, r19, r5);
                    r18 = r23;
                    if(!(r22 !== r18)) { _fun3127_ip = 398; continue _fun3127 }
case 330:
                    r25 = _closure1_slot154;
                    if(r25) { _fun3127_ip = 367; continue _fun3127 }
case 337:
                    r25 = _closure1_slot163;
                    _closure1_slot163 = r24;
                    r18 = r23;
                    if(!(r21 !== r25)) { _fun3127_ip = 398; continue _fun3127 }
case 352:
                    r24 = _closure1_slot447;
                    r24 = r24.bind(r0)(r25);
                    r18 = r23;
                    _fun3127_ip = 398; continue _fun3127;
case 367:
                    r24 = r2.errorRecoveryDisabledLanes;
                    r24 = r24 | r4;
                    r2['errorRecoveryDisabledLanes'] = r24;
                    r24 = _closure1_slot158;
                    r24 = r24 | r4;
                    _closure1_slot158 = r24;
                    r18 = r8;
case 398:
                    r16 = r18;
                    r13 = r19;
                    r12 = false;
                    r11 = r23;
                    r10 = r2;
                    r9 = r13;
                    r3 = r16;
                    if(r22 !== r3) { _fun3127_ip = 149; continue _fun3127 }
case 425:
                    r10 = 1;
                    if(!(r10 !== r3)) { _fun3127_ip = 850; continue _fun3127 }
case 435:
                    if(!(r6 !== r3)) { _fun3127_ip = 831; continue _fun3127 }
case 442:
                    if(!(r10 !== r3)) { _fun3127_ip = 831; continue _fun3127 }
case 449:
                    if(!(r8 !== r3)) { _fun3127_ip = 496; continue _fun3127 }
case 453:
                    if(!(r22 !== r3)) { _fun3127_ip = 490; continue _fun3127 }
case 457:
                    r8 = 3;
                    if(!(r8 !== r3)) { _fun3127_ip = 513; continue _fun3127 }
case 464:
                    r8 = 5;
                    if(!(r8 !== r3)) { _fun3127_ip = 513; continue _fun3127 }
case 471:
                    r8 = global;
                    r10 = r8.Error;
                    r8 = 'Unknown root exit status.';
                    r8 = r10.bind(r0)(r8);
                    throw r8;
case 490:
                    _closure1_slot163 = r21;
                    _fun3127_ip = 513; continue _fun3127;
case 496:
                    r8 = 4194176;
                    r8 = r9 & r8;
                    if(!(r8 !== r9)) { _fun3127_ip = 801; continue _fun3127 }
case 513:
                    r2['finishedWork'] = r20;
                    r2['finishedLanes'] = r9;
                    r8 = 62914560;
                    r8 = r9 & r8;
                    if(!(r8 === r9)) { _fun3127_ip = 597; continue _fun3127 }
case 539:
                    r11 = 3;
                    if(!(r11 === r3)) { _fun3127_ip = 597; continue _fun3127 }
case 546:
                    r8 = _closure1_slot165;
                    r3 = 300;
                    r8 = r8 + r3;
                    r10 = _closure1_slot0;
                    r3 = _closure1_slot1;
                    r3 = r3[r11];
                    r10 = r10.bind(r0)(r3);
                    r3 = r10.unstable_now;
                    r3 = r3.bind(r10)();
                    r10 = r8 - r3;
                    r3 = 10;
                    if(!(!(r3 < r10))) { _fun3127_ip = 664; continue _fun3127 }
case 597:
                    r17 = _closure1_slot448;
                    r37 = _closure1_slot163;
                    r36 = _closure1_slot167;
                    r35 = _closure1_slot164;
                    r33 = _closure1_slot160;
                    r32 = _closure1_slot158;
                    r31 = _closure1_slot161;
                    r30 = _closure1_slot152;
                    r28 = -0.0;
                    r40 = undefined;
                    r39 = r2;
                    r38 = r20;
                    r34 = r9;
                    r29 = 0;
                    r27 = 0;
                    r3 = r40[r17](r39, r38, r37, r36, r35, r34, r33, r32, r31, r30, r29, r28, r27, r26);
                    _fun3127_ip = 946; continue _fun3127;
case 664:
                    r11 = _closure1_slot450;
                    r37 = _closure1_slot160;
                    r3 = _closure1_slot152;
                    r36 = !r3;
                    r40 = undefined;
                    r39 = r2;
                    r38 = r9;
                    r3 = r40[r11](r39, r38, r37, r36, r35);
                    r3 = _closure1_slot234;
                    r3 = r3.bind(r0)(r2, r6);
                    if(!(r6 === r3)) { _fun3127_ip = 946; continue _fun3127 }
case 709:
                    r8 = _closure1_slot66;
                    r19 = _closure1_slot448;
                    r18 = r19.bind;
                    r36 = _closure1_slot163;
                    r35 = _closure1_slot167;
                    r34 = _closure1_slot164;
                    r32 = _closure1_slot160;
                    r31 = _closure1_slot158;
                    r30 = _closure1_slot161;
                    r29 = _closure1_slot152;
                    r27 = -0.0;
                    r40 = r19;
                    r39 = null;
                    r38 = r2;
                    r37 = r20;
                    r33 = r9;
                    r28 = r22;
                    r26 = 0;
                    r3 = r40[r18](r39, r38, r37, r36, r35, r34, r33, r32, r31, r30, r29, r28, r27, r26, r25);
                    r3 = r8.bind(r0)(r3, r10);
                    r2['timeoutHandle'] = r3;
                    _fun3127_ip = 946; continue _fun3127;
case 801:
                    r10 = _closure1_slot450;
                    r37 = _closure1_slot160;
                    r3 = _closure1_slot152;
                    r36 = !r3;
                    r40 = undefined;
                    r39 = r2;
                    r38 = r9;
                    r3 = r40[r10](r39, r38, r37, r36, r35);
                    _fun3127_ip = 946; continue _fun3127;
case 831:
                    r3 = global;
                    r8 = r3.Error;
                    r3 = 'Root did not complete. This is a bug in React.';
                    r3 = r8.bind(r0)(r3);
                    throw r3;
case 850:
                    r3 = _closure1_slot452;
                    r3 = r3.bind(r0)(r2, r6);
                    r8 = _closure1_slot450;
                    r36 = true;
                    r40 = undefined;
                    r39 = r2;
                    r38 = r9;
                    r37 = 0;
                    r3 = r40[r8](r39, r38, r37, r36, r35);
                    _fun3127_ip = 946; continue _fun3127;
case 884:
                    r8 = _closure1_slot450;
                    r3 = _closure1_slot152;
                    r36 = !r3;
                    r40 = undefined;
                    r39 = r2;
                    r38 = r4;
                    r37 = 0;
                    r3 = r40[r8](r39, r38, r37, r36, r35);
                    _fun3127_ip = 946; continue _fun3127;
case 912:
                    r3 = _closure1_slot153;
                    if(!r3) { _fun3127_ip = 922; continue _fun3127 }
case 919:
                    r3 = !r7;
case 922:
                    if(!r3) { _fun3127_ip = 946; continue _fun3127 }
case 925:
                    r3 = _closure1_slot450;
                    r40 = undefined;
                    r39 = r2;
                    r38 = r4;
                    r37 = 0;
                    r36 = false;
                    r3 = r40[r3](r39, r38, r37, r36, r35);
case 946:
                    r1 = _closure1_slot264;
                    r1 = r1.bind(r0)(r2);
                    return r0;
case 958:
                    r0 = global;
                    r2 = r0.Error;
                    r1 = undefined;
                    r0 = 'Should not already be working.';
                    r0 = r2.bind(r1)(r0);
                    throw r0;
                }
            };
            var _closure1_slot446 = r0;
            r0 = function(a0) { // Original name: queueRecoverableErrors, environment: r5
                _fun3128: for(var _fun3128_ip = 0; ; ) switch(_fun3128_ip) {
case 0:
                    r1 = a0;
                    r3 = _closure1_slot163;
                    r2 = null;
                    if(!(r2 !== r3)) { _fun3128_ip = 42; continue _fun3128 }
case 16:
                    r2 = _closure1_slot163;
                    r4 = r2.push;
                    r3 = r4.apply;
                    r2 = _closure1_slot163;
                    r2 = r3.bind(r4)(r2, r1);
                    _fun3128_ip = 46; continue _fun3128;
case 42:
                    _closure1_slot163 = r1;
case 46:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot447 = r0;
            r0 = function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12) { // Original name: commitRootWhenReady, environment: r5
                _fun3129: for(var _fun3129_ip = 0; ; ) switch(_fun3129_ip) {
case 0:
                    r2 = a1;
                    r8 = a0;
                    r3 = r2;
                    r7 = a2;
                    r6 = a3;
                    r1 = a5;
                    r5 = a6;
                    r4 = a7;
                    r0 = a8;
                    r9 = r2.subtreeFlags;
                    r1 = r9;
                    r2 = 8192;
                    r2 = r9 & r2;
                    if(r2) { _fun3129_ip = 65; continue _fun3129 }
case 48:
                    r9 = r1;
                    r10 = 16785408;
                    r9 = r9 & r10;
                    r2 = r10 === r9;
case 65:
                    if(!r2) { _fun3129_ip = 86; continue _fun3129 }
case 68:
                    r10 = _closure1_slot437;
                    r9 = r3;
                    r2 = undefined;
                    r2 = r10.bind(r2)(r9);
case 86:
                    r9 = _closure1_slot3;
                    r3 = r9.T;
                    r1 = _closure1_slot68;
case 102: // try_start_0
                    r9 = 2;
                    _closure1_slot68 = r9;
                    r10 = _closure1_slot3;
                    r9 = null;
                    r10['T'] = r9;
                    r10 = _closure1_slot466;
                    r21 = r8;
                    r20 = r7;
                    r19 = r6;
                    r16 = r5;
                    r15 = r4;
                    r14 = r0;
                    r0 = undefined;
                    r22 = undefined;
                    r18 = undefined;
                    r17 = undefined;
                    r13 = undefined;
                    r12 = undefined;
                    r11 = undefined;
                    r4 = r22[r10](r21, r20, r19, r18, r17, r16, r15, r14, r13, r12, r11, r10);
case 162: // try_end0
                    r5 = _closure1_slot3;
                    r4 = r3;
                    r5['T'] = r4;
                    r4 = r1;
                    _closure1_slot68 = r4;
                    return r0;
case 184: // catch_target0
                    CatchBlockStart(arg_register=0);
                    r4 = _closure1_slot3;
                    r4['T'] = r3;
                    _closure1_slot68 = r1;
                    throw r0;
                }
            };
            var _closure1_slot448 = r0;
            r0 = function(a0) { // Original name: isRenderConsistentWithExternalStores, environment: r5
                _fun3130: for(var _fun3130_ip = 0; ; ) switch(_fun3130_ip) {
case 0:
                    r12 = a0;
                    r7 = undefined;
                    r8 = undefined;
                    r9 = undefined;
                    r10 = undefined;
                    r11 = undefined;
                    r6 = null;
                    r5 = 16384;
                    r4 = 0;
                    r2 = 15;
                    r1 = 11;
                    r0 = r12;
case 35:
                    r13 = r0.tag;
                    r8 = r13;
                    r14 = r0;
                    if(!(r4 !== r13)) { _fun3130_ip = 67; continue _fun3130 }
case 50:
                    r13 = r8;
                    if(!(r1 !== r13)) { _fun3130_ip = 67; continue _fun3130 }
case 57:
                    r13 = r8;
                    if(!(r2 === r13)) { _fun3130_ip = 193; continue _fun3130 }
case 67:
                    r13 = r14.flags;
                    r13 = r13 & r5;
                    if(!r13) { _fun3130_ip = 193; continue _fun3130 }
case 79:
                    r13 = r14.updateQueue;
                    r8 = r13;
                    if(!(r6 !== r13)) { _fun3130_ip = 193; continue _fun3130 }
case 91:
                    r13 = r8;
                    r13 = r13.stores;
                    r8 = r13;
                    if(!(r6 !== r13)) { _fun3130_ip = 193; continue _fun3130 }
case 107:
                    r9 = 0;
                    r13 = r8;
                    r13 = r13.length;
                    if(!(r4 < r13)) { _fun3130_ip = 193; continue _fun3130 }
case 121:
                    r15 = r8;
                    r13 = r9;
                    r13 = r15[r13];
                    r10 = r13;
                    r11 = r13.getSnapshot;
                    r10 = r13.value;
case 145: // try_start_0
                    r16 = _closure1_slot73;
                    r13 = r11;
                    r15 = r13.bind(r7)();
                    r13 = r10;
                    r13 = r16.bind(r7)(r15, r13);
                    if(r13) { _fun3130_ip = 172; continue _fun3130 }
case 168: // try_end0
                    r13 = false;
                    return r13;
case 172:
                    r13 = r9;
                    r15 = r13 + 1;
                    r9 = r15;
                    r13 = r8;
                    r13 = r13.length;
                    if(r15 < r13) { _fun3130_ip = 121; continue _fun3130 }
case 193:
                    r8 = r14.child;
                    r13 = r14.subtreeFlags;
                    r13 = r13 & r5;
                    if(!r13) { _fun3130_ip = 217; continue _fun3130 }
case 210:
                    r13 = r8;
                    if(!(r6 === r13)) { _fun3130_ip = 311; continue _fun3130 }
case 217:
                    if(!(r14 !== r12)) { _fun3130_ip = 307; continue _fun3130 }
case 221:
                    r15 = r14.sibling;
                    r16 = r14;
                    r13 = r16;
                    if(!(r6 === r15)) { _fun3130_ip = 277; continue _fun3130 }
case 236:
                    r17 = r16.return;
                    r15 = r16;
                    if(!(r6 !== r17)) { _fun3130_ip = 303; continue _fun3130 }
case 248:
                    r17 = r15.return;
                    if(!(r17 !== r12)) { _fun3130_ip = 303; continue _fun3130 }
case 257:
                    r17 = r15.return;
                    r15 = r17.sibling;
                    r16 = r17;
                    r13 = r16;
                    if(r6 === r15) { _fun3130_ip = 236; continue _fun3130 }
case 277:
                    r16 = r13.sibling;
                    r15 = r13.return;
                    r16['return'] = r15;
                    r0 = r13.sibling;
                    _fun3130_ip = 35; continue _fun3130;
case 303:
                    r13 = true;
                    return r13;
case 307:
                    r13 = true;
                    return r13;
case 311:
                    r13 = r8;
                    r13['return'] = r14;
                    r0 = r13;
                    _fun3130_ip = 35; continue _fun3130;
case 328: // catch_target0
                    CatchBlockStart(arg_register=0);
                    r0 = false;
                    return r0;
                }
            };
            var _closure1_slot449 = r0;
            r0 = function(a0, a1, a2, a3) { // Original name: markRootSuspended, environment: r5
                _fun3131: for(var _fun3131_ip = 0; ; ) switch(_fun3131_ip) {
case 0:
                    r4 = a0;
                    r3 = a2;
                    r0 = _closure1_slot159;
                    r2 = ~r0;
                    r0 = a1;
                    r2 = r0 & r2;
                    r0 = _closure1_slot158;
                    r0 = ~r0;
                    r2 = r2 & r0;
                    r0 = r4.suspendedLanes;
                    r0 = r0 | r2;
                    r4['suspendedLanes'] = r0;
                    r5 = r4.pingedLanes;
                    r0 = ~r2;
                    r0 = r5 & r0;
                    r4['pingedLanes'] = r0;
                    r0 = a3;
                    if(!r0) { _fun3131_ip = 90; continue _fun3131 }
case 74:
                    r0 = r4.warmLanes;
                    r0 = r0 | r2;
                    r4['warmLanes'] = r0;
case 90:
                    r10 = r4.expirationTimes;
                    r0 = undefined;
                    r9 = 31;
                    r8 = -1;
                    r7 = 1;
                    r5 = 0;
                    r6 = r2;
                    if(!(r5 < r6)) { _fun3131_ip = 151; continue _fun3131 }
case 119:
                    r11 = _closure1_slot59;
                    r11 = r11.bind(r0)(r6);
                    r11 = r9 - r11;
                    r10[r11] = r8;
                    r11 = r7 << r11;
                    r11 = ~r11;
                    r6 = r6 & r11;
                    if(r5 < r6) { _fun3131_ip = 119; continue _fun3131 }
case 151:
                    if(!(r5 !== r3)) { _fun3131_ip = 166; continue _fun3131 }
case 155:
                    r1 = _closure1_slot242;
                    r1 = r1.bind(r0)(r4, r3, r2);
case 166:
                    return r0;
                }
            };
            var _closure1_slot450 = r0;
            r0 = function() { // Original name: resetWorkInProgressStack, environment: r5
                _fun3132: for(var _fun3132_ip = 0; ; ) switch(_fun3132_ip) {
case 0:
                    r2 = _closure1_slot148;
                    r0 = null;
                    if(!(r0 !== r2)) { _fun3132_ip = 105; continue _fun3132 }
case 13:
                    r3 = _closure1_slot150;
                    r2 = 0;
                    if(!(r2 !== r3)) { _fun3132_ip = 61; continue _fun3132 }
case 23:
                    r5 = _closure1_slot148;
                    _closure1_slot130 = r0;
                    _closure1_slot131 = r0;
                    r4 = _closure1_slot308;
                    r3 = undefined;
                    r3 = r4.bind(r3)(r5);
                    _closure1_slot100 = r0;
                    _closure1_slot101 = r2;
                    r3 = _closure1_slot148;
                    _fun3132_ip = 70; continue _fun3132;
case 61:
                    r2 = _closure1_slot148;
                    r3 = r2.return;
case 70:
                    r2 = undefined;
                    if(!(r0 !== r3)) { _fun3132_ip = 101; continue _fun3132 }
case 76:
                    r5 = _closure1_slot406;
                    r4 = r3.alternate;
                    r4 = r5.bind(r2)(r4, r3);
                    r3 = r3.return;
                    if(r0 !== r3) { _fun3132_ip = 76; continue _fun3132 }
case 101:
                    _closure1_slot148 = r0;
case 105:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot451 = r0;
            r0 = function(a0, a1) { // Original name: prepareFreshStack, environment: r5
                _fun3133: for(var _fun3133_ip = 0; ; ) switch(_fun3133_ip) {
case 0:
                    r5 = a0;
                    r4 = a1;
                    r6 = null;
                    r5['finishedWork'] = r6;
                    r9 = 0;
                    r5['finishedLanes'] = r9;
                    r2 = r5.timeoutHandle;
                    r0 = -1;
                    if(!(r0 !== r2)) { _fun3133_ip = 58; continue _fun3133 }
case 38:
                    r5['timeoutHandle'] = r0;
                    r1 = _closure1_slot67;
                    r0 = undefined;
                    r0 = r1.bind(r0)(r2);
case 58:
                    r1 = r5.cancelPendingCommit;
                    if(!(r6 !== r1)) { _fun3133_ip = 80; continue _fun3133 }
case 68:
                    r5['cancelPendingCommit'] = r6;
                    r0 = undefined;
                    r0 = r1.bind(r0)();
case 80:
                    r0 = _closure1_slot451;
                    r2 = undefined;
                    r0 = r0.bind(r2)();
                    _closure1_slot147 = r5;
                    r3 = _closure1_slot479;
                    r0 = r5.current;
                    r0 = r3.bind(r2)(r0, r6);
                    _closure1_slot148 = r0;
                    _closure1_slot149 = r4;
                    _closure1_slot150 = r9;
                    _closure1_slot151 = r6;
                    r3 = false;
                    _closure1_slot152 = r3;
                    r7 = _closure1_slot235;
                    r7 = r7.bind(r2)(r5, r4);
                    _closure1_slot153 = r7;
                    _closure1_slot154 = r3;
                    _closure1_slot156 = r9;
                    _closure1_slot157 = r9;
                    _closure1_slot158 = r9;
                    _closure1_slot159 = r9;
                    _closure1_slot160 = r9;
                    _closure1_slot161 = r9;
                    _closure1_slot162 = r6;
                    _closure1_slot163 = r6;
                    _closure1_slot164 = r3;
                    r3 = 8;
                    r3 = r4 & r3;
                    r10 = r4;
                    if(!(r9 !== r3)) { _fun3133_ip = 215; continue _fun3133 }
case 204:
                    r3 = 32;
                    r3 = r4 & r3;
                    r10 = r4 | r3;
case 215:
                    r4 = r5.entangledLanes;
                    r3 = r10;
                    if(!(r9 !== r4)) { _fun3133_ip = 293; continue _fun3133 }
case 228:
                    r8 = r5.entanglements;
                    r7 = r4 & r10;
                    r6 = 31;
                    r5 = 1;
                    r4 = r10;
                    r3 = r4;
                    if(!(r9 < r7)) { _fun3133_ip = 293; continue _fun3133 }
case 254:
                    r10 = _closure1_slot59;
                    r10 = r10.bind(r2)(r7);
                    r10 = r6 - r10;
                    r11 = r8[r10];
                    r4 = r4 | r11;
                    r10 = r5 << r10;
                    r10 = ~r10;
                    r7 = r7 & r10;
                    r3 = r4;
                    if(r9 < r7) { _fun3133_ip = 254; continue _fun3133 }
case 293:
                    _closure1_slot155 = r3;
                    r1 = _closure1_slot258;
                    r1 = r1.bind(r2)();
                    return r0;
                }
            };
            var _closure1_slot452 = r0;
            r0 = function(a0, a1) { // Original name: handleThrow, environment: r5
                _fun3134: for(var _fun3134_ip = 0; ; ) switch(_fun3134_ip) {
case 0:
                    r3 = a0;
                    r5 = a1;
                    r2 = null;
                    _closure1_slot110 = r2;
                    r4 = _closure1_slot3;
                    r1 = _closure1_slot120;
                    r4['H'] = r1;
                    r1 = _closure1_slot96;
                    if(!(r5 !== r1)) { _fun3134_ip = 131; continue _fun3134 }
case 37:
                    r1 = _closure1_slot97;
                    if(!(r5 !== r1)) { _fun3134_ip = 111; continue _fun3134 }
case 45:
                    r4 = _closure1_slot126;
                    r1 = 8;
                    if(!(r5 !== r4)) { _fun3134_ip = 105; continue _fun3134 }
case 56:
                    r8 = 1;
                    r4 = r8;
                    if(!(r2 !== r5)) { _fun3134_ip = 102; continue _fun3134 }
case 66:
                    r7 = 'object';
                    r6 = typeof r5;
                    r4 = r8;
                    if(!(r7 === r6)) { _fun3134_ip = 102; continue _fun3134 }
case 80:
                    r6 = r5.then;
                    r7 = 'function';
                    r6 = typeof r6;
                    r4 = r8;
                    if(!(r7 === r6)) { _fun3134_ip = 102; continue _fun3134 }
case 99:
                    r4 = 6;
case 102:
                    r1 = r4;
case 105:
                    _closure1_slot150 = r1;
                    _fun3134_ip = 149; continue _fun3134;
case 111:
                    r4 = _closure1_slot288;
                    r1 = undefined;
                    r5 = r4.bind(r1)();
                    r4 = 4;
                    _closure1_slot150 = r4;
                    _fun3134_ip = 149; continue _fun3134;
case 131:
                    r4 = _closure1_slot288;
                    r1 = undefined;
                    r5 = r4.bind(r1)();
                    r4 = 3;
                    _closure1_slot150 = r4;
case 149:
                    _closure1_slot151 = r5;
                    r1 = _closure1_slot148;
                    if(!(r2 === r1)) { _fun3134_ip = 196; continue _fun3134 }
case 161:
                    r1 = 1;
                    _closure1_slot156 = r1;
                    r2 = _closure1_slot356;
                    r4 = _closure1_slot253;
                    r0 = r3.current;
                    r1 = undefined;
                    r0 = r4.bind(r1)(r5, r0);
                    r0 = r2.bind(r1)(r3, r0);
case 196:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot453 = r0;
            r0 = function() { // Original name: pushDispatcher, environment: r5
                _fun3135: for(var _fun3135_ip = 0; ; ) switch(_fun3135_ip) {
case 0:
                    r0 = _closure1_slot3;
                    r0 = r0.H;
                    r3 = _closure1_slot3;
                    r2 = _closure1_slot120;
                    r3['H'] = r2;
                    r2 = null;
                    if(!(r2 === r0)) { _fun3135_ip = 36; continue _fun3135 }
case 32:
                    r0 = _closure1_slot120;
case 36:
                    return r0;
                }
            };
            var _closure1_slot454 = r0;
            r0 = function() { // Original name: pushAsyncDispatcher, environment: r5
                r0 = _closure1_slot3;
                r0 = r0.A;
                r2 = _closure1_slot3;
                r1 = _closure1_slot144;
                r2['A'] = r1;
                return r0;
            };
            var _closure1_slot455 = r0;
            r0 = function() { // Original name: renderDidSuspendDelayIfPossible, environment: r5
                _fun3137: for(var _fun3137_ip = 0; ; ) switch(_fun3137_ip) {
case 0:
                    r1 = 4;
                    _closure1_slot156 = r1;
                    r1 = _closure1_slot152;
                    if(r1) { _fun3137_ip = 60; continue _fun3137 }
case 17:
                    r3 = _closure1_slot149;
                    r2 = 4194176;
                    r3 = r3 & r2;
                    r2 = _closure1_slot149;
                    r2 = r3 !== r2;
                    if(!r2) { _fun3137_ip = 57; continue _fun3137 }
case 42:
                    r3 = _closure1_slot106;
                    r4 = r3.current;
                    r3 = null;
                    r2 = r3 !== r4;
case 57:
                    r1 = r2;
case 60:
                    if(r1) { _fun3137_ip = 69; continue _fun3137 }
case 63:
                    r1 = true;
                    _closure1_slot153 = r1;
case 69:
                    r1 = _closure1_slot157;
                    r4 = 134217727;
                    r1 = r1 & r4;
                    r3 = 0;
                    r1 = r3 === r1;
                    if(!r1) { _fun3137_ip = 104; continue _fun3137 }
case 92:
                    r2 = _closure1_slot158;
                    r2 = r2 & r4;
                    r1 = r3 === r2;
case 104:
                    if(r1) { _fun3137_ip = 117; continue _fun3137 }
case 107:
                    r3 = _closure1_slot147;
                    r2 = null;
                    r1 = r2 === r3;
case 117:
                    if(r1) { _fun3137_ip = 145; continue _fun3137 }
case 120:
                    r5 = _closure1_slot450;
                    r9 = _closure1_slot147;
                    r8 = _closure1_slot149;
                    r7 = _closure1_slot160;
                    r10 = undefined;
                    r6 = false;
                    r0 = r10[r5](r9, r8, r7, r6, r5);
case 145:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot456 = r0;
            r0 = function(a0, a1, a2) { // Original name: renderRootSync, environment: r5
                _fun3138: for(var _fun3138_ip = 0; ; ) switch(_fun3138_ip) {
case 0:
                    r13 = a0;
                    r3 = r13;
                    r4 = a1;
                    r5 = a2;
                    r2 = undefined;
                    r7 = undefined;
                    r8 = undefined;
                    r9 = undefined;
                    r10 = undefined;
                    r11 = undefined;
                    r12 = _closure1_slot146;
                    r6 = r12;
                    r0 = 2;
                    r12 = r12 | r0;
                    _closure1_slot146 = r12;
                    r12 = _closure1_slot454;
                    r7 = r12.bind(r2)();
                    r12 = _closure1_slot455;
                    r8 = r12.bind(r2)();
                    r12 = _closure1_slot147;
                    if(!(r12 === r13)) { _fun3138_ip = 82; continue _fun3138 }
case 71:
                    r13 = _closure1_slot149;
                    r12 = r4;
                    if(!(r13 !== r12)) { _fun3138_ip = 105; continue _fun3138 }
case 82:
                    r12 = null;
                    _closure1_slot167 = r12;
                    r14 = _closure1_slot452;
                    r13 = r3;
                    r12 = r4;
                    r12 = r14.bind(r2)(r13, r12);
case 105:
                    r4 = false;
                    r9 = _closure1_slot156;
case 111: // try_start_0
                    r13 = _closure1_slot150;
                    r12 = 0;
                    if(!(r12 !== r13)) { _fun3138_ip = 271; continue _fun3138 }
case 124:
                    r14 = _closure1_slot148;
                    r13 = null;
                    if(!(r13 !== r14)) { _fun3138_ip = 271; continue _fun3138 }
case 137:
                    r10 = _closure1_slot148;
                    r11 = _closure1_slot151;
                    r15 = _closure1_slot150;
                    r14 = 8;
                    if(!(r14 !== r15)) { _fun3138_ip = 290; continue _fun3138 }
case 159:
                    r14 = 3;
                    if(!(r14 !== r15)) { _fun3138_ip = 211; continue _fun3138 }
case 166:
                    if(!(r0 !== r15)) { _fun3138_ip = 211; continue _fun3138 }
case 170:
                    r14 = 6;
                    if(!(r14 !== r15)) { _fun3138_ip = 211; continue _fun3138 }
case 177:
                    r19 = _closure1_slot150;
                    _closure1_slot150 = r12;
                    _closure1_slot151 = r13;
                    r17 = _closure1_slot463;
                    r22 = r3;
                    r21 = r10;
                    r20 = r11;
                    r23 = undefined;
                    r14 = r23[r17](r22, r21, r20, r19, r18);
                    _fun3138_ip = 271; continue _fun3138;
case 211:
                    r14 = _closure1_slot106;
                    r14 = r14.current;
                    if(!(r13 === r14)) { _fun3138_ip = 226; continue _fun3138 }
case 224:
                    r4 = true;
case 226:
                    r19 = _closure1_slot150;
                    _closure1_slot150 = r12;
                    _closure1_slot151 = r13;
                    r16 = _closure1_slot463;
                    r22 = r3;
                    r21 = r10;
                    r20 = r11;
                    r23 = undefined;
                    r13 = r23[r16](r22, r21, r20, r19, r18);
                    r13 = r5;
                    if(!r13) { _fun3138_ip = 271; continue _fun3138 }
case 264:
                    r13 = _closure1_slot153;
                    if(r13) { _fun3138_ip = 286; continue _fun3138 }
case 271:
                    r13 = _closure1_slot458;
                    r13 = r13.bind(r2)();
                    r9 = _closure1_slot156;
case 284: // try_end0
                    _fun3138_ip = 302; continue _fun3138;
case 286: // try_start_1
                    r9 = 0;
case 288: // try_end1
                    _fun3138_ip = 302; continue _fun3138;
case 290: // try_start_2
                    r13 = _closure1_slot451;
                    r13 = r13.bind(r2)();
                    r9 = 6;
case 302: // try_end2
                    r13 = r4;
                    if(!r13) { _fun3138_ip = 326; continue _fun3138 }
case 308:
                    r14 = r3;
                    r13 = r14.shellSuspendCounter;
                    r13 = r13 + 1;
                    r14['shellSuspendCounter'] = r13;
case 326:
                    r13 = null;
                    _closure1_slot130 = r13;
                    _closure1_slot131 = r13;
                    r14 = r6;
                    _closure1_slot146 = r14;
                    r15 = _closure1_slot3;
                    r14 = r7;
                    r15['H'] = r14;
                    r15 = _closure1_slot3;
                    r14 = r8;
                    r15['A'] = r14;
                    r14 = _closure1_slot148;
                    if(!(r13 === r14)) { _fun3138_ip = 394; continue _fun3138 }
case 377:
                    _closure1_slot147 = r13;
                    _closure1_slot149 = r12;
                    r12 = _closure1_slot258;
                    r12 = r12.bind(r2)();
case 394:
                    r12 = r9;
                    return r12;
case 399: // catch_target0 // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=14);
                    r13 = _closure1_slot453;
                    r12 = r3;
                    r12 = r13.bind(r2)(r12, r14);
                    _fun3138_ip = 111; continue _fun3138;
                }
            };
            var _closure1_slot457 = r0;
            r0 = function() { // Original name: workLoopSync, environment: r5
                _fun3139: for(var _fun3139_ip = 0; ; ) switch(_fun3139_ip) {
case 0:
                    r1 = _closure1_slot148;
                    r0 = undefined;
                    r2 = null;
                    if(!(r2 !== r1)) { _fun3139_ip = 37; continue _fun3139 }
case 15:
                    r4 = _closure1_slot461;
                    r1 = _closure1_slot148;
                    r1 = r4.bind(r0)(r1);
                    r1 = _closure1_slot148;
                    if(r2 !== r1) { _fun3139_ip = 15; continue _fun3139 }
case 37:
                    return r0;
                }
            };
            var _closure1_slot458 = r0;
            r0 = function(a0, a1) { // Original name: renderRootConcurrent, environment: r5
                _fun3140: for(var _fun3140_ip = 0; ; ) switch(_fun3140_ip) {
case 0:
                    r15 = a0;
                    r4 = r15;
                    var _closure2_slot0 = r15;
                    r5 = a1;
                    r2 = undefined;
                    r7 = undefined;
                    r8 = undefined;
                    r9 = undefined;
                    r10 = undefined;
                    r11 = undefined;
                    r12 = undefined;
                    r13 = undefined;
                    r14 = _closure1_slot146;
                    r6 = r14;
                    r0 = 2;
                    r14 = r14 | r0;
                    _closure1_slot146 = r14;
                    r14 = _closure1_slot454;
                    r7 = r14.bind(r2)();
                    r14 = _closure1_slot455;
                    r8 = r14.bind(r2)();
                    r14 = _closure1_slot147;
                    if(!(r14 === r15)) { _fun3140_ip = 111; continue _fun3140 }
case 78:
                    r15 = _closure1_slot149;
                    r14 = r5;
                    if(!(r15 === r14)) { _fun3140_ip = 111; continue _fun3140 }
case 89:
                    r16 = _closure1_slot235;
                    r15 = r4;
                    r14 = r5;
                    r14 = r16.bind(r2)(r15, r14);
                    _closure1_slot153 = r14;
                    _fun3140_ip = 177; continue _fun3140;
case 111:
                    r14 = null;
                    _closure1_slot167 = r14;
                    r15 = _closure1_slot0;
                    r16 = _closure1_slot1;
                    r14 = 3;
                    r14 = r16[r14];
                    r15 = r15.bind(r2)(r14);
                    r14 = r15.unstable_now;
                    r15 = r14.bind(r15)();
                    r14 = 500;
                    r14 = r15 + r14;
                    _closure1_slot166 = r14;
                    r16 = _closure1_slot452;
                    r15 = r4;
                    r14 = r5;
                    r14 = r16.bind(r2)(r15, r14);
case 177: // try_start_0
                    r15 = _closure1_slot150;
                    r14 = 0;
                    if(!(r14 !== r15)) { _fun3140_ip = 719; continue _fun3140 }
case 190:
                    r16 = _closure1_slot148;
                    r15 = null;
                    if(!(r15 !== r16)) { _fun3140_ip = 719; continue _fun3140 }
case 203:
                    r5 = _closure1_slot148;
                    r9 = _closure1_slot151;
                    r17 = _closure1_slot150;
                    r19 = 1;
                    if(!(r19 !== r17)) { _fun3140_ip = 688; continue _fun3140 }
case 225:
                    if(!(r0 !== r17)) { _fun3140_ip = 625; continue _fun3140 }
case 232:
                    r16 = 3;
                    if(!(r16 !== r17)) { _fun3140_ip = 616; continue _fun3140 }
case 242:
                    r16 = 4;
                    if(!(r16 !== r17)) { _fun3140_ip = 607; continue _fun3140 }
case 252:
                    r21 = 7;
                    if(!(r21 !== r17)) { _fun3140_ip = 540; continue _fun3140 }
case 262:
                    r22 = 5;
                    if(!(r22 !== r17)) { _fun3140_ip = 356; continue _fun3140 }
case 269:
                    r23 = 6;
                    if(!(r23 !== r17)) { _fun3140_ip = 320; continue _fun3140 }
case 276:
                    r16 = 8;
                    if(!(r16 !== r17)) { _fun3140_ip = 302; continue _fun3140 }
case 283:
                    r16 = global;
                    r17 = r16.Error;
                    r16 = 'Unexpected SuspendedReason. This is a bug in React.';
                    r16 = r17.bind(r2)(r16);
                    throw r16;
case 302:
                    r16 = _closure1_slot451;
                    r16 = r16.bind(r2)();
                    _closure1_slot156 = r23;
case 315: // try_end0
                    _fun3140_ip = 728; continue _fun3140;
case 320: // try_start_1
                    _closure1_slot150 = r14;
                    _closure1_slot151 = r15;
                    r20 = _closure1_slot463;
                    r27 = r4;
                    r26 = r5;
                    r25 = r9;
                    r28 = undefined;
                    r24 = r23;
                    r16 = r28[r20](r27, r26, r25, r24, r23);
                    _fun3140_ip = 719; continue _fun3140;
case 356:
                    r10 = null;
                    r16 = _closure1_slot148;
                    r17 = r16.tag;
                    r16 = 26;
                    if(!(r16 !== r17)) { _fun3140_ip = 387; continue _fun3140 }
case 374:
                    if(!(r22 !== r17)) { _fun3140_ip = 396; continue _fun3140 }
case 378:
                    r16 = 27;
                    if(!(r16 !== r17)) { _fun3140_ip = 396; continue _fun3140 }
case 385:
                    _fun3140_ip = 423; continue _fun3140;
case 387:
                    r16 = _closure1_slot148;
                    r10 = r16.memoizedState;
case 396:
                    r11 = _closure1_slot148;
                    r17 = r10;
                    r16 = r19;
                    if(!r17) { _fun3140_ip = 420; continue _fun3140 }
case 409:
                    r17 = _closure1_slot246;
                    r17 = r17.bind(r2)(r2);
                    r16 = undefined;
case 420:
                    if(r16) { _fun3140_ip = 459; continue _fun3140 }
case 423:
                    _closure1_slot150 = r14;
                    _closure1_slot151 = r15;
                    r20 = _closure1_slot463;
                    r27 = r4;
                    r26 = r5;
                    r25 = r9;
                    r28 = undefined;
                    r24 = r22;
                    r16 = r28[r20](r27, r26, r25, r24, r23);
                    _fun3140_ip = 719; continue _fun3140;
case 459:
                    _closure1_slot150 = r14;
                    _closure1_slot151 = r15;
                    r16 = r11;
                    r16 = r16.sibling;
                    r12 = r16;
                    if(!(r15 === r16)) { _fun3140_ip = 528; continue _fun3140 }
case 482:
                    r16 = r11;
                    r16 = r16.return;
                    r13 = r16;
                    if(!(r15 === r16)) { _fun3140_ip = 506; continue _fun3140 }
case 497:
                    _closure1_slot148 = r15;
                    _fun3140_ip = 719; continue _fun3140;
case 506:
                    r17 = r13;
                    _closure1_slot148 = r17;
                    r16 = _closure1_slot464;
                    r16 = r16.bind(r2)(r17);
                    _fun3140_ip = 719; continue _fun3140;
case 528:
                    r16 = r12;
                    _closure1_slot148 = r16;
                    _fun3140_ip = 719; continue _fun3140;
case 540:
                    r17 = _closure1_slot285;
                    r16 = r9;
                    r16 = r17.bind(r2)(r16);
                    _closure1_slot150 = r14;
                    _closure1_slot151 = r15;
                    if(r16) { _fun3140_ip = 592; continue _fun3140 }
case 564:
                    r20 = _closure1_slot463;
                    r27 = r4;
                    r26 = r5;
                    r25 = r9;
                    r28 = undefined;
                    r24 = r21;
                    r16 = r28[r20](r27, r26, r25, r24, r23);
                    _fun3140_ip = 719; continue _fun3140;
case 592:
                    r17 = _closure1_slot462;
                    r16 = r5;
                    r16 = r17.bind(r2)(r16);
                    _fun3140_ip = 719; continue _fun3140;
case 607:
                    r16 = 5;
                    _closure1_slot150 = r16;
case 614: // try_end1
                    _fun3140_ip = 728; continue _fun3140;
case 616: // try_start_2
                    r16 = 7;
                    _closure1_slot150 = r16;
case 623: // try_end2
                    _fun3140_ip = 728; continue _fun3140;
case 625: // try_start_3
                    r17 = _closure1_slot285;
                    r16 = r9;
                    r16 = r17.bind(r2)(r16);
                    if(r16) { _fun3140_ip = 665; continue _fun3140 }
case 641:
                    r18 = function() { // Original name: lanes, environment: r3
                        _fun3141: for(var _fun3141_ip = 0; ; ) switch(_fun3141_ip) {
case 0:
                            r2 = _closure1_slot150;
                            r1 = 2;
                            r1 = r1 === r2;
                            if(!r1) { _fun3141_ip = 32; continue _fun3141 }
case 17:
                            r3 = _closure1_slot147;
                            r2 = _closure2_slot0;
                            r1 = r3 === r2;
case 32:
                            if(!r1) { _fun3141_ip = 42; continue _fun3141 }
case 35:
                            r1 = 7;
                            _closure1_slot150 = r1;
case 42:
                            r2 = _closure1_slot264;
                            r1 = _closure2_slot0;
                            r0 = undefined;
                            r1 = r2.bind(r0)(r1);
                            return r0;
                        }
                    };
                    r5 = r18;
                    r17 = r9;
                    r16 = r17.then;
                    r16 = r16.bind(r17)(r18, r18);
case 663: // try_end3
                    _fun3140_ip = 728; continue _fun3140;
case 665: // try_start_4
                    _closure1_slot150 = r14;
                    _closure1_slot151 = r15;
                    r17 = _closure1_slot462;
                    r16 = r5;
                    r16 = r17.bind(r2)(r16);
                    _fun3140_ip = 719; continue _fun3140;
case 688:
                    _closure1_slot150 = r14;
                    _closure1_slot151 = r15;
                    r18 = _closure1_slot463;
                    r27 = r4;
                    r26 = r5;
                    r25 = r9;
                    r28 = undefined;
                    r24 = r19;
                    r15 = r28[r18](r27, r26, r25, r24, r23);
case 719:
                    r15 = _closure1_slot460;
                    r15 = r15.bind(r2)();
case 728: // try_end4
                    r15 = null;
                    _closure1_slot130 = r15;
                    _closure1_slot131 = r15;
                    r17 = _closure1_slot3;
                    r16 = r7;
                    r17['H'] = r16;
                    r17 = _closure1_slot3;
                    r16 = r8;
                    r17['A'] = r16;
                    r16 = r6;
                    _closure1_slot146 = r16;
                    r16 = _closure1_slot148;
                    if(!(r15 === r16)) { _fun3140_ip = 802; continue _fun3140 }
case 779:
                    _closure1_slot147 = r15;
                    _closure1_slot149 = r14;
                    r15 = _closure1_slot258;
                    r15 = r15.bind(r2)();
                    r15 = _closure1_slot156;
                    return r15;
case 802:
                    return r14;
case 804: // catch_target0 // catch_target1 // catch_target2 // catch_target3 // catch_target4
                    CatchBlockStart(arg_register=16);
                    r15 = _closure1_slot453;
                    r14 = r4;
                    r14 = r15.bind(r2)(r14, r16);
                    _fun3140_ip = 177; continue _fun3140;
                }
            };
            var _closure1_slot459 = r0;
            r0 = function() { // Original name: workLoopConcurrent, environment: r5
                _fun3142: for(var _fun3142_ip = 0; ; ) switch(_fun3142_ip) {
case 0:
                    r0 = _closure1_slot148;
                    r3 = null;
                    if(!(r3 !== r0)) { _fun3142_ip = 100; continue _fun3142 }
case 13:
                    r5 = _closure1_slot0;
                    r0 = _closure1_slot1;
                    r2 = 3;
                    r0 = r0[r2];
                    r1 = undefined;
                    r5 = r5.bind(r1)(r0);
                    r0 = r5.unstable_shouldYield;
                    r0 = r0.bind(r5)();
                    if(r0) { _fun3142_ip = 100; continue _fun3142 }
case 48:
                    r5 = _closure1_slot461;
                    r0 = _closure1_slot148;
                    r0 = r5.bind(r1)(r0);
                    r0 = _closure1_slot148;
                    if(!(r3 !== r0)) { _fun3142_ip = 100; continue _fun3142 }
case 70:
                    r5 = _closure1_slot0;
                    r0 = _closure1_slot1;
                    r0 = r0[r2];
                    r5 = r5.bind(r1)(r0);
                    r0 = r5.unstable_shouldYield;
                    r0 = r0.bind(r5)();
                    if(!r0) { _fun3142_ip = 48; continue _fun3142 }
case 100:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot460 = r0;
            r0 = function(a0) { // Original name: performUnitOfWork, environment: r5
                _fun3143: for(var _fun3143_ip = 0; ; ) switch(_fun3143_ip) {
case 0:
                    r2 = a0;
                    r5 = _closure1_slot385;
                    r4 = r2.alternate;
                    r3 = _closure1_slot155;
                    r0 = undefined;
                    r3 = r5.bind(r0)(r4, r2, r3);
                    r4 = r2.pendingProps;
                    r2['memoizedProps'] = r4;
                    r4 = null;
                    if(!(r4 !== r3)) { _fun3143_ip = 52; continue _fun3143 }
case 46:
                    _closure1_slot148 = r3;
                    _fun3143_ip = 62; continue _fun3143;
case 52:
                    r1 = _closure1_slot464;
                    r1 = r1.bind(r0)(r2);
case 62:
                    return r0;
                }
            };
            var _closure1_slot461 = r0;
            r0 = function(a0) { // Original name: replaySuspendedUnitOfWork, environment: r5
                _fun3144: for(var _fun3144_ip = 0; ; ) switch(_fun3144_ip) {
case 0:
                    r2 = a0;
                    r7 = r2.alternate;
                    r1 = r2.tag;
                    r0 = 15;
                    if(!(r0 !== r1)) { _fun3144_ip = 161; continue _fun3144 }
case 23:
                    r0 = 0;
                    if(!(r0 !== r1)) { _fun3144_ip = 161; continue _fun3144 }
case 32:
                    r0 = 11;
                    if(!(r0 !== r1)) { _fun3144_ip = 114; continue _fun3144 }
case 39:
                    r0 = 5;
                    if(!(r0 === r1)) { _fun3144_ip = 61; continue _fun3144 }
case 46:
                    r1 = _closure1_slot308;
                    r0 = undefined;
                    r0 = r1.bind(r0)(r2);
case 61:
                    r1 = _closure1_slot406;
                    r3 = undefined;
                    r1 = r1.bind(r3)(r7, r2);
                    r4 = _closure1_slot480;
                    r1 = _closure1_slot155;
                    r1 = r4.bind(r3)(r2, r1);
                    _closure1_slot148 = r2;
                    r1 = _closure1_slot385;
                    r0 = _closure1_slot155;
                    r1 = r1.bind(r3)(r7, r2, r0);
                    _fun3144_ip = 197; continue _fun3144;
case 114:
                    r8 = _closure1_slot370;
                    r12 = r2.pendingProps;
                    r3 = r2.type;
                    r11 = r3.render;
                    r10 = r2.ref;
                    r9 = _closure1_slot149;
                    r15 = undefined;
                    r14 = r7;
                    r13 = r2;
                    r1 = r15[r8](r14, r13, r12, r11, r10, r9, r8);
                    _fun3144_ip = 197; continue _fun3144;
case 161:
                    r6 = _closure1_slot370;
                    r12 = r2.pendingProps;
                    r11 = r2.type;
                    r9 = _closure1_slot149;
                    r15 = undefined;
                    r14 = r7;
                    r13 = r2;
                    r10 = undefined;
                    r1 = r15[r6](r14, r13, r12, r11, r10, r9, r8);
case 197:
                    r0 = r2.pendingProps;
                    r2['memoizedProps'] = r0;
                    r0 = null;
                    if(!(r0 !== r1)) { _fun3144_ip = 223; continue _fun3144 }
case 214:
                    _closure1_slot148 = r1;
                    _fun3144_ip = 238; continue _fun3144;
case 223:
                    r1 = _closure1_slot464;
                    r0 = undefined;
                    r0 = r1.bind(r0)(r2);
case 238:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot462 = r0;
            r0 = function(a0, a1, a2, a3) { // Original name: throwAndUnwindWorkLoop, environment: r5
                _fun3145: for(var _fun3145_ip = 0; ; ) switch(_fun3145_ip) {
case 0:
                    r9 = a1;
                    r6 = a0;
                    r7 = r9;
                    r5 = a2;
                    r8 = a3;
                    r3 = undefined;
                    r1 = undefined;
                    r4 = null;
                    _closure1_slot130 = r4;
                    _closure1_slot131 = r4;
                    r10 = _closure1_slot308;
                    r10 = r10.bind(r3)(r9);
                    _closure1_slot100 = r4;
                    r10 = 0;
                    _closure1_slot101 = r10;
                    r1 = r9.return;
case 57: // try_start_0
                    r15 = _closure1_slot361;
                    r20 = r6;
                    r19 = r1;
                    r18 = r7;
                    r17 = r5;
                    r16 = _closure1_slot149;
                    r21 = undefined;
                    r9 = r21[r15](r20, r19, r18, r17, r16, r15);
                    if(r9) { _fun3145_ip = 299; continue _fun3145 }
case 90: // try_end0
                    r9 = r7;
                    r11 = r9.flags;
                    r9 = 32768;
                    r9 = r11 & r9;
                    if(r9) { _fun3145_ip = 129; continue _fun3145 }
case 111:
                    r11 = _closure1_slot464;
                    r9 = r7;
                    r9 = r11.bind(r3)(r9);
                    _fun3145_ip = 297; continue _fun3145;
case 129:
                    r11 = r8;
                    r9 = 1;
                    if(!(r9 !== r11)) { _fun3145_ip = 278; continue _fun3145 }
case 142:
                    r9 = _closure1_slot153;
                    if(r9) { _fun3145_ip = 274; continue _fun3145 }
case 152:
                    r11 = _closure1_slot149;
                    r9 = 536870912;
                    r9 = r11 & r9;
                    if(!(r10 === r9)) { _fun3145_ip = 274; continue _fun3145 }
case 170:
                    r9 = true;
                    r6 = true;
                    _closure1_slot152 = r9;
                    r10 = r8;
                    r9 = 2;
                    if(!(r9 !== r10)) { _fun3145_ip = 208; continue _fun3145 }
case 188:
                    r10 = r8;
                    r9 = 3;
                    if(!(r9 !== r10)) { _fun3145_ip = 208; continue _fun3145 }
case 198:
                    r10 = r8;
                    r9 = 6;
                    if(!(r9 === r10)) { _fun3145_ip = 280; continue _fun3145 }
case 208:
                    r9 = _closure1_slot106;
                    r10 = r9.current;
                    r8 = r10;
                    r10 = r4 !== r10;
                    r9 = r10;
                    if(!r10) { _fun3145_ip = 245; continue _fun3145 }
case 230:
                    r10 = r8;
                    r11 = r10.tag;
                    r10 = 13;
                    r9 = r10 === r11;
case 245:
                    if(!r9) { _fun3145_ip = 280; continue _fun3145 }
case 248:
                    r9 = r8;
                    r10 = r9.flags;
                    r8 = 16384;
                    r8 = r10 | r8;
                    r9['flags'] = r8;
                    _fun3145_ip = 280; continue _fun3145;
case 274:
                    r6 = false;
                    _fun3145_ip = 280; continue _fun3145;
case 278:
                    r6 = true;
case 280:
                    r9 = _closure1_slot465;
                    r8 = r7;
                    r7 = r6;
                    r7 = r9.bind(r3)(r8, r7);
case 297:
                    return r3;
case 299: // try_start_1
                    r7 = 1;
                    _closure1_slot156 = r7;
                    r9 = _closure1_slot356;
                    r8 = r6;
                    r11 = _closure1_slot253;
                    r10 = r5;
                    r7 = r8.current;
                    r7 = r11.bind(r3)(r10, r7);
                    r7 = r9.bind(r3)(r8, r7);
                    _closure1_slot148 = r4;
case 342: // try_end1
                    return r3;
case 344: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=0);
                    r7 = r1;
                    if(!(r4 === r7)) { _fun3145_ip = 395; continue _fun3145 }
case 353:
                    r7 = 1;
                    _closure1_slot156 = r7;
                    r7 = _closure1_slot356;
                    r9 = _closure1_slot253;
                    r8 = r5;
                    r5 = r6.current;
                    r5 = r9.bind(r3)(r8, r5);
                    r5 = r7.bind(r3)(r6, r5);
                    _closure1_slot148 = r4;
                    return r3;
case 395:
                    _closure1_slot148 = r1;
                    throw r0;
                }
            };
            var _closure1_slot463 = r0;
            r0 = function(a0) { // Original name: completeUnitOfWork, environment: r5
                _fun3146: for(var _fun3146_ip = 0; ; ) switch(_fun3146_ip) {
case 0:
                    r8 = a0;
                    r7 = null;
                    r0 = undefined;
                    r5 = 32768;
                    r6 = 0;
case 18:
                    r2 = r8.flags;
                    r2 = r2 & r5;
                    r3 = r8;
                    if(!(r6 === r2)) { _fun3146_ip = 113; continue _fun3146 }
case 34:
                    r9 = r3.return;
                    r10 = _closure1_slot404;
                    r4 = r3.alternate;
                    r2 = _closure1_slot155;
                    r2 = r10.bind(r0)(r4, r3, r2);
                    if(!(r7 === r2)) { _fun3146_ip = 107; continue _fun3146 }
case 64:
                    r4 = r3.sibling;
                    if(!(r7 === r4)) { _fun3146_ip = 101; continue _fun3146 }
case 73:
                    _closure1_slot148 = r9;
                    r8 = r9;
                    if(r7 !== r8) { _fun3146_ip = 18; continue _fun3146 }
case 84:
                    r5 = _closure1_slot156;
                    if(!(r6 === r5)) { _fun3146_ip = 99; continue _fun3146 }
case 92:
                    r5 = 5;
                    _closure1_slot156 = r5;
case 99:
                    return r0;
case 101:
                    _closure1_slot148 = r4;
                    return r0;
case 107:
                    _closure1_slot148 = r2;
                    return r0;
case 113:
                    r2 = _closure1_slot465;
                    r1 = _closure1_slot152;
                    r1 = r2.bind(r0)(r3, r1);
                    return r0;
                }
            };
            var _closure1_slot464 = r0;
            r0 = function(a0, a1) { // Original name: unwindUnitOfWork, environment: r5
                _fun3147: for(var _fun3147_ip = 0; ; ) switch(_fun3147_ip) {
case 0:
                    r8 = a0;
                    r7 = a1;
                    r3 = null;
                    r6 = 32768;
                    r5 = 0;
                    r0 = undefined;
case 21:
                    r4 = _closure1_slot405;
                    r1 = r8.alternate;
                    r1 = r4.bind(r0)(r1, r8);
                    r10 = r8;
                    if(!(r3 === r1)) { _fun3147_ip = 124; continue _fun3147 }
case 44:
                    r9 = r10.return;
                    r4 = r3 !== r9;
                    if(!r4) { _fun3147_ip = 83; continue _fun3147 }
case 56:
                    r11 = r9.flags;
                    r11 = r11 | r6;
                    r9['flags'] = r11;
                    r9['subtreeFlags'] = r5;
                    r9['deletions'] = r3;
case 83:
                    if(r7) { _fun3147_ip = 101; continue _fun3147 }
case 86:
                    r10 = r10.sibling;
                    if(!(r3 !== r10)) { _fun3147_ip = 101; continue _fun3147 }
case 95:
                    _closure1_slot148 = r10;
                    return r0;
case 101:
                    _closure1_slot148 = r9;
                    r8 = r9;
                    if(r4) { _fun3147_ip = 21; continue _fun3147 }
case 111:
                    r4 = 6;
                    _closure1_slot156 = r4;
                    _closure1_slot148 = r3;
                    return r0;
case 124:
                    r4 = r1.flags;
                    r3 = 32767;
                    r3 = r4 & r3;
                    r1['flags'] = r3;
                    _closure1_slot148 = r1;
                    return r0;
                }
            };
            var _closure1_slot465 = r0;
            r0 = function(a0, a1, a2, a3, a4, a5, a6, a7) { // Original name: commitRootImpl, environment: r5
                _fun3148: for(var _fun3148_ip = 0; ; ) switch(_fun3148_ip) {
case 0:
                    r3 = a0;
                    r9 = a1;
                    r2 = undefined;
                    r0 = null;
case 13:
                    r4 = _closure1_slot468;
                    r4 = r4.bind(r2)();
                    r4 = _closure1_slot170;
                    if(r0 !== r4) { _fun3148_ip = 13; continue _fun3148 }
case 30:
                    r5 = _closure1_slot146;
                    r4 = 6;
                    r5 = r5 & r4;
                    r4 = 0;
                    if(!(r4 === r5)) { _fun3148_ip = 742; continue _fun3148 }
case 50:
                    r5 = r3.finishedWork;
                    r7 = r3.finishedLanes;
                    if(!(r0 !== r5)) { _fun3148_ip = 740; continue _fun3148 }
case 69:
                    r3['finishedWork'] = r0;
                    r3['finishedLanes'] = r4;
                    r6 = r3.current;
                    if(!(r5 !== r6)) { _fun3148_ip = 721; continue _fun3148 }
case 93:
                    r3['callbackNode'] = r0;
                    r3['callbackPriority'] = r4;
                    r3['cancelPendingCommit'] = r0;
                    r8 = r5.lanes;
                    r6 = r5.childLanes;
                    r8 = r8 | r6;
                    r6 = _closure1_slot82;
                    r8 = r8 | r6;
                    r12 = _closure1_slot241;
                    r17 = a5;
                    r16 = a6;
                    r15 = a7;
                    r21 = undefined;
                    r20 = r3;
                    r19 = r7;
                    r18 = r8;
                    r6 = r21[r12](r20, r19, r18, r17, r16, r15, r14);
                    r6 = _closure1_slot147;
                    if(!(r3 === r6)) { _fun3148_ip = 181; continue _fun3148 }
case 169:
                    _closure1_slot147 = r0;
                    _closure1_slot148 = r0;
                    _closure1_slot149 = r4;
case 181:
                    r6 = r5.subtreeFlags;
                    r11 = 10256;
                    r6 = r6 & r11;
                    r6 = r4 === r6;
                    if(!r6) { _fun3148_ip = 216; continue _fun3148 }
case 203:
                    r10 = r5.flags;
                    r10 = r10 & r11;
                    r6 = r4 === r10;
case 216:
                    if(r6) { _fun3148_ip = 223; continue _fun3148 }
case 219:
                    r6 = _closure1_slot169;
case 223:
                    if(r6) { _fun3148_ip = 287; continue _fun3148 }
case 226:
                    r6 = true;
                    _closure1_slot169 = r6;
                    _closure1_slot172 = r8;
                    r6 = a2;
                    _closure1_slot173 = r6;
                    r11 = _closure1_slot475;
                    r10 = _closure1_slot0;
                    r12 = _closure1_slot1;
                    r6 = 3;
                    r6 = r12[r6];
                    r6 = r10.bind(r2)(r6);
                    r10 = r6.unstable_NormalPriority;
                    r6 = function() { // Environment: r6
                        r1 = _closure1_slot468;
                        r0 = undefined;
                        r0 = r1.bind(r0)(r0);
                        r0 = null;
                        return r0;
                    };
                    r6 = r11.bind(r2)(r10, r6);
case 287:
                    r6 = r5.flags;
                    r11 = 15990;
                    r6 = r6 & r11;
                    r10 = r5.subtreeFlags;
                    r10 = r10 & r11;
                    if(!(r4 === r10)) { _fun3148_ip = 330; continue _fun3148 }
case 315:
                    if(!(r4 === r6)) { _fun3148_ip = 330; continue _fun3148 }
case 319:
                    r3['current'] = r5;
                    _fun3148_ip = 468; continue _fun3148;
case 330:
                    r6 = _closure1_slot3;
                    r10 = r6.T;
                    r6 = _closure1_slot3;
                    r6['T'] = r0;
                    r6 = _closure1_slot68;
                    r11 = 2;
                    _closure1_slot68 = r11;
                    r11 = _closure1_slot146;
                    r12 = 4;
                    r12 = r11 | r12;
                    _closure1_slot146 = r12;
                    r12 = _closure1_slot417;
                    r12 = r12.bind(r2)(r3, r5);
                    r12 = _closure1_slot425;
                    r12 = r12.bind(r2)(r5, r3);
                    r3['current'] = r5;
                    r13 = _closure1_slot418;
                    r12 = r5.alternate;
                    r12 = r13.bind(r2)(r3, r12, r5);
                    r13 = _closure1_slot0;
                    r14 = _closure1_slot1;
                    r12 = 3;
                    r12 = r14[r12];
                    r13 = r13.bind(r2)(r12);
                    r12 = r13.unstable_requestPaint;
                    r12 = r12.bind(r13)();
                    _closure1_slot146 = r11;
                    _closure1_slot68 = r6;
                    r6 = _closure1_slot3;
                    r6['T'] = r10;
case 468:
                    r6 = _closure1_slot169;
                    if(r6) { _fun3148_ip = 488; continue _fun3148 }
case 475:
                    r6 = _closure1_slot467;
                    r6 = r6.bind(r2)(r3, r8);
                    _fun3148_ip = 502; continue _fun3148;
case 488:
                    r6 = false;
                    _closure1_slot169 = r6;
                    _closure1_slot170 = r3;
                    _closure1_slot171 = r7;
case 502:
                    r6 = r3.pendingLanes;
                    if(!(r4 === r6)) { _fun3148_ip = 515; continue _fun3148 }
case 511:
                    _closure1_slot168 = r0;
case 515:
                    r6 = _closure1_slot231;
                    r5 = r5.stateNode;
                    r5 = r6.bind(r2)(r5, r2);
                    r5 = _closure1_slot264;
                    r5 = r5.bind(r2)(r3);
                    if(!(r0 !== r9)) { _fun3148_ip = 602; continue _fun3148 }
case 544:
                    r8 = r3.onRecoverableError;
                    r5 = r9.length;
                    r5 = r4 < r5;
                    r6 = 0;
                    if(!r5) { _fun3148_ip = 602; continue _fun3148 }
case 564:
                    r11 = r9[r6];
                    r10 = r11.value;
                    r5 = {};
                    r11 = r11.stack;
                    r5['componentStack'] = r11;
                    r5 = r8.bind(r2)(r10, r5);
                    r6 = r6 + 1;
                    r5 = r9.length;
                    if(r6 < r5) { _fun3148_ip = 564; continue _fun3148 }
case 602:
                    r6 = _closure1_slot171;
                    r5 = 3;
                    r5 = r6 & r5;
                    r5 = r4 !== r5;
                    if(!r5) { _fun3148_ip = 629; continue _fun3148 }
case 620:
                    r6 = r3.tag;
                    r5 = r4 !== r6;
case 629:
                    if(!r5) { _fun3148_ip = 641; continue _fun3148 }
case 632:
                    r5 = _closure1_slot468;
                    r5 = r5.bind(r2)();
case 641:
                    r6 = r3.pendingLanes;
                    r5 = 4194218;
                    r5 = r7 & r5;
                    if(!(r4 !== r5)) { _fun3148_ip = 671; continue _fun3148 }
case 660:
                    r5 = 42;
                    r5 = r6 & r5;
                    if(!(r4 === r5)) { _fun3148_ip = 677; continue _fun3148 }
case 671:
                    _closure1_slot174 = r4;
                    _fun3148_ip = 706; continue _fun3148;
case 677:
                    r5 = _closure1_slot175;
                    if(!(r3 !== r5)) { _fun3148_ip = 695; continue _fun3148 }
case 685:
                    _closure1_slot174 = r4;
                    _closure1_slot175 = r3;
                    _fun3148_ip = 706; continue _fun3148;
case 695:
                    r3 = _closure1_slot174;
                    r3 = r3 + 1;
                    _closure1_slot174 = r3;
case 706:
                    r3 = _closure1_slot265;
                    r1 = false;
                    r1 = r3.bind(r2)(r4, r1);
                    return r0;
case 721:
                    r1 = global;
                    r3 = r1.Error;
                    r1 = 'Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.';
                    r1 = r3.bind(r2)(r1);
                    throw r1;
case 740:
                    return r0;
case 742:
                    r0 = global;
                    r1 = r0.Error;
                    r0 = 'Should not already be working.';
                    r0 = r1.bind(r2)(r0);
                    throw r0;
                }
            };
            var _closure1_slot466 = r0;
            r0 = function(a0, a1) { // Original name: releaseRootPooledCache, environment: r5
                _fun3150: for(var _fun3150_ip = 0; ; ) switch(_fun3150_ip) {
case 0:
                    r1 = a0;
                    r2 = r1.pooledCacheLanes;
                    r0 = a1;
                    r2 = r2 & r0;
                    r1['pooledCacheLanes'] = r2;
                    r0 = 0;
                    if(!(r0 === r2)) { _fun3150_ip = 61; continue _fun3150 }
case 28:
                    r2 = r1.pooledCache;
                    r0 = null;
                    if(!(r0 != r2)) { _fun3150_ip = 61; continue _fun3150 }
case 40:
                    r1['pooledCache'] = r0;
                    r1 = _closure1_slot397;
                    r0 = undefined;
                    r0 = r1.bind(r0)(r2);
case 61:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot467 = r0;
            r0 = function() { // Original name: flushPassiveEffects, environment: r5
                _fun3151: for(var _fun3151_ip = 0; ; ) switch(_fun3151_ip) {
case 0:
                    r4 = undefined;
                    r2 = undefined;
                    r1 = undefined;
                    r9 = undefined;
                    r5 = undefined;
                    r6 = undefined;
                    r0 = undefined;
                    r7 = undefined;
                    r11 = undefined;
                    r10 = _closure1_slot170;
                    r8 = null;
                    if(!(r8 === r10)) { _fun3151_ip = 35; continue _fun3151 }
case 31:
                    r10 = false;
                    return r10;
case 35:
                    r2 = _closure1_slot170;
                    r1 = _closure1_slot172;
                    r10 = 0;
                    _closure1_slot172 = r10;
                    r13 = _closure1_slot244;
                    r12 = _closure1_slot171;
                    r9 = r13.bind(r4)(r12);
                    r12 = _closure1_slot3;
                    r5 = r12.T;
                    r6 = _closure1_slot68;
case 75: // try_start_1
                    r13 = r9;
                    r12 = 32;
                    r13 = r12 > r13;
                    if(r13) { _fun3151_ip = 91; continue _fun3151 }
case 88:
                    r12 = r9;
case 91:
                    _closure1_slot68 = r12;
                    r12 = _closure1_slot3;
                    r12['T'] = r8;
                    r12 = _closure1_slot170;
                    if(!(r8 !== r12)) { _fun3151_ip = 308; continue _fun3151 }
case 116:
                    r9 = _closure1_slot173;
                    _closure1_slot173 = r8;
                    r7 = _closure1_slot170;
                    r11 = _closure1_slot171;
                    _closure1_slot170 = r8;
                    _closure1_slot171 = r10;
                    r12 = _closure1_slot146;
                    r8 = 6;
                    r8 = r12 & r8;
                    if(!(r10 === r8)) { _fun3151_ip = 289; continue _fun3151 }
case 158:
                    r8 = _closure1_slot146;
                    r12 = 4;
                    r12 = r8 | r12;
                    _closure1_slot146 = r12;
                    r13 = _closure1_slot440;
                    r14 = r7;
                    r12 = r14.current;
                    r12 = r13.bind(r4)(r12);
                    r13 = _closure1_slot433;
                    r17 = r14.current;
                    r16 = r11;
                    r15 = r9;
                    r19 = undefined;
                    r18 = r14;
                    r9 = r19[r13](r18, r17, r16, r15, r14);
                    _closure1_slot146 = r8;
                    r9 = _closure1_slot265;
                    r8 = false;
                    r8 = r9.bind(r4)(r10, r8);
                    r8 = _closure1_slot58;
                    if(!r8) { _fun3151_ip = 285; continue _fun3151 }
case 240:
                    r8 = _closure1_slot58;
                    r8 = r8.onPostCommitFiberRoot;
                    r9 = 'function';
                    r8 = typeof r8;
                    if(!(r9 === r8)) { _fun3151_ip = 285; continue _fun3151 }
case 261: // try_start_0
                    r10 = _closure1_slot58;
                    r9 = r10.onPostCommitFiberRoot;
                    r8 = _closure1_slot57;
                    r7 = r9.bind(r10)(r8, r7);
case 281: // try_end0
                    _fun3151_ip = 285; continue _fun3151;
case 283: // catch_target0
                    CatchBlockStart(arg_register=7);
case 285:
                    r0 = true;
                    _fun3151_ip = 310; continue _fun3151;
case 289:
                    r7 = global;
                    r8 = r7.Error;
                    r7 = 'Cannot flush passive effects while already rendering.';
                    r7 = r8.bind(r4)(r7);
                    throw r7;
case 308:
                    r0 = false;
case 310: // try_end1
                    r7 = r6;
                    _closure1_slot68 = r7;
                    r8 = _closure1_slot3;
                    r7 = r5;
                    r8['T'] = r7;
                    r9 = _closure1_slot467;
                    r8 = r2;
                    r7 = r1;
                    r7 = r9.bind(r4)(r8, r7);
                    return r0;
case 349: // catch_target1
                    CatchBlockStart(arg_register=0);
                    _closure1_slot68 = r6;
                    r6 = _closure1_slot3;
                    r6['T'] = r5;
                    r3 = _closure1_slot467;
                    r1 = r3.bind(r4)(r2, r1);
                    throw r0;
                }
            };
            var _closure1_slot468 = r0;
            r0 = function(a0, a1, a2) { // Original name: captureCommitPhaseErrorOnRoot, environment: r5
                _fun3152: for(var _fun3152_ip = 0; ; ) switch(_fun3152_ip) {
case 0:
                    r5 = a0;
                    r4 = _closure1_slot253;
                    r0 = undefined;
                    r3 = a2;
                    r2 = a1;
                    r6 = r4.bind(r0)(r3, r2);
                    r3 = _closure1_slot358;
                    r2 = r5.stateNode;
                    r4 = 2;
                    r3 = r3.bind(r0)(r2, r6, r4);
                    r2 = _closure1_slot277;
                    r2 = r2.bind(r0)(r5, r3, r4);
                    r3 = null;
                    if(!(r3 !== r2)) { _fun3152_ip = 82; continue _fun3152 }
case 62:
                    r3 = _closure1_slot240;
                    r3 = r3.bind(r0)(r2, r4);
                    r1 = _closure1_slot264;
                    r1 = r1.bind(r0)(r2);
case 82:
                    return r0;
                }
            };
            var _closure1_slot469 = r0;
            r0 = function(a0, a1, a2) { // Original name: captureCommitPhaseError, environment: r5
                _fun3153: for(var _fun3153_ip = 0; ; ) switch(_fun3153_ip) {
case 0:
                    r3 = a0;
                    r10 = a1;
                    r2 = a2;
                    r0 = r3.tag;
                    r9 = 3;
                    if(!(r9 !== r0)) { _fun3153_ip = 253; continue _fun3153 }
case 24:
                    r4 = undefined;
                    r5 = null;
                    r8 = 'function';
                    r7 = 1;
                    r6 = undefined;
                    if(!(r5 !== r10)) { _fun3153_ip = 270; continue _fun3153 }
case 47:
                    r11 = r10.tag;
                    r1 = r10;
                    r12 = r6;
                    if(!(r9 !== r11)) { _fun3153_ip = 239; continue _fun3153 }
case 65:
                    r11 = r1.tag;
                    if(!(r7 === r11)) { _fun3153_ip = 141; continue _fun3153 }
case 74:
                    r13 = r1.stateNode;
                    r11 = r1.type;
                    r11 = r11.getDerivedStateFromError;
                    r11 = typeof r11;
                    if(!(r8 !== r11)) { _fun3153_ip = 155; continue _fun3153 }
case 97:
                    r11 = r13.componentDidCatch;
                    r11 = typeof r11;
                    r12 = r13;
                    if(!(r8 === r11)) { _fun3153_ip = 141; continue _fun3153 }
case 113:
                    r11 = _closure1_slot168;
                    if(!(r5 !== r11)) { _fun3153_ip = 155; continue _fun3153 }
case 121:
                    r14 = _closure1_slot168;
                    r11 = r14.has;
                    r11 = r11.bind(r14)(r13);
                    r12 = r13;
                    if(!r11) { _fun3153_ip = 155; continue _fun3153 }
case 141:
                    r10 = r1.return;
                    r6 = r12;
                    if(r5 !== r10) { _fun3153_ip = 47; continue _fun3153 }
case 153:
                    _fun3153_ip = 270; continue _fun3153;
case 155:
                    r6 = _closure1_slot253;
                    r9 = r6.bind(r4)(r2, r3);
                    r6 = _closure1_slot359;
                    r7 = 2;
                    r8 = r6.bind(r4)(r7);
                    r6 = _closure1_slot277;
                    r6 = r6.bind(r4)(r1, r8, r7);
                    if(!(r5 !== r6)) { _fun3153_ip = 270; continue _fun3153 }
case 194:
                    r5 = _closure1_slot360;
                    r19 = undefined;
                    r18 = r8;
                    r17 = r6;
                    r16 = r1;
                    r15 = r9;
                    r5 = r19[r5](r18, r17, r16, r15, r14);
                    r5 = _closure1_slot240;
                    r5 = r5.bind(r4)(r6, r7);
                    r5 = _closure1_slot264;
                    r5 = r5.bind(r4)(r6);
                    _fun3153_ip = 270; continue _fun3153;
case 239:
                    r0 = _closure1_slot469;
                    r0 = r0.bind(r4)(r1, r3, r2);
                    _fun3153_ip = 270; continue _fun3153;
case 253:
                    r1 = _closure1_slot469;
                    r0 = undefined;
                    r0 = r1.bind(r0)(r3, r3, r2);
case 270:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot470 = r0;
            r0 = function(a0, a1, a2) { // Original name: attachPingListener, environment: r5
                _fun3154: for(var _fun3154_ip = 0; ; ) switch(_fun3154_ip) {
case 0:
                    r5 = a0;
                    r2 = a1;
                    r4 = a2;
                    r7 = r5.pingCache;
                    r3 = null;
                    if(!(r3 !== r7)) { _fun3154_ip = 81; continue _fun3154 }
case 21:
                    r0 = r7.get;
                    r1 = r0.bind(r7)(r2);
                    r0 = undefined;
                    if(!(r0 === r1)) { _fun3154_ip = 156; continue _fun3154 }
case 37:
                    r0 = global;
                    r0 = r0.Set;
                    r6 = r0.prototype;
                    r6 = Object.create(r6, {constructor: {value: r0}});
                    r12 = r6;
                    r0 = new r12[r0](r11);
                    r0 = r0 instanceof Object ? r0 : r6;
                    r6 = r7.set;
                    r6 = r6.bind(r7)(r2, r0);
                    r1 = r0;
                    _fun3154_ip = 156; continue _fun3154;
case 81:
                    r0 = _closure1_slot145;
                    r6 = r0.prototype;
                    r6 = Object.create(r6, {constructor: {value: r0}});
                    r12 = r6;
                    r0 = new r12[r0](r11);
                    r7 = r0 instanceof Object ? r0 : r6;
                    r5['pingCache'] = r7;
                    r0 = global;
                    r0 = r0.Set;
                    r6 = r0.prototype;
                    r6 = Object.create(r6, {constructor: {value: r0}});
                    r12 = r6;
                    r0 = new r12[r0](r11);
                    r0 = r0 instanceof Object ? r0 : r6;
                    r6 = r7.set;
                    r6 = r6.bind(r7)(r2, r0);
                    r1 = r0;
case 156:
                    r0 = r1.has;
                    r0 = r0.bind(r1)(r4);
                    r6 = r1;
                    if(r0) { _fun3154_ip = 230; continue _fun3154 }
case 172:
                    r1 = true;
                    _closure1_slot154 = r1;
                    r1 = r6.add;
                    r1 = r1.bind(r6)(r4);
                    r1 = _closure1_slot472;
                    r0 = r1.bind;
                    r12 = r1;
                    r11 = null;
                    r10 = r5;
                    r9 = r2;
                    r8 = r4;
                    r1 = r12[r0](r11, r10, r9, r8, r7);
                    r0 = r2.then;
                    r0 = r0.bind(r2)(r1, r1);
case 230:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot471 = r0;
            r0 = function(a0, a1, a2) { // Original name: pingSuspendedRoot, environment: r5
                _fun3155: for(var _fun3155_ip = 0; ; ) switch(_fun3155_ip) {
case 0:
                    r2 = a0;
                    r3 = a2;
                    r4 = r2.pingCache;
                    r0 = null;
                    if(!(r0 !== r4)) { _fun3155_ip = 31; continue _fun3155 }
case 18:
                    r1 = r4.delete;
                    r0 = a1;
                    r0 = r1.bind(r4)(r0);
case 31:
                    r1 = r2.pingedLanes;
                    r0 = r2.suspendedLanes;
                    r0 = r0 & r3;
                    r0 = r1 | r0;
                    r2['pingedLanes'] = r0;
                    r1 = r2.warmLanes;
                    r0 = ~r3;
                    r0 = r1 & r0;
                    r2['warmLanes'] = r0;
                    r1 = _closure1_slot147;
                    r1 = r1 === r2;
                    if(!r1) { _fun3155_ip = 101; continue _fun3155 }
case 89:
                    r4 = _closure1_slot149;
                    r4 = r4 & r3;
                    r1 = r4 === r3;
case 101:
                    if(!r1) { _fun3155_ip = 259; continue _fun3155 }
case 107:
                    r4 = _closure1_slot156;
                    r1 = 4;
                    if(!(r1 !== r4)) { _fun3155_ip = 211; continue _fun3155 }
case 118:
                    r1 = _closure1_slot156;
                    r4 = 3;
                    if(!(r4 === r1)) { _fun3155_ip = 197; continue _fun3155 }
case 129:
                    r5 = _closure1_slot149;
                    r1 = 62914560;
                    r5 = r5 & r1;
                    r1 = _closure1_slot149;
                    if(!(r5 === r1)) { _fun3155_ip = 197; continue _fun3155 }
case 151:
                    r5 = _closure1_slot0;
                    r1 = _closure1_slot1;
                    r4 = r1[r4];
                    r1 = undefined;
                    r4 = r5.bind(r1)(r4);
                    r1 = r4.unstable_now;
                    r4 = r1.bind(r4)();
                    r1 = _closure1_slot165;
                    r4 = r4 - r1;
                    r1 = 300;
                    if(!(!(r1 > r4))) { _fun3155_ip = 211; continue _fun3155 }
case 197:
                    r1 = _closure1_slot159;
                    r1 = r1 | r3;
                    _closure1_slot159 = r1;
                    _fun3155_ip = 241; continue _fun3155;
case 211:
                    r3 = _closure1_slot146;
                    r1 = 2;
                    r1 = r3 & r1;
                    r4 = 0;
                    if(!(r4 === r1)) { _fun3155_ip = 241; continue _fun3155 }
case 228:
                    r3 = _closure1_slot452;
                    r1 = undefined;
                    r1 = r3.bind(r1)(r2, r4);
case 241:
                    r3 = _closure1_slot161;
                    r1 = _closure1_slot149;
                    if(!(r3 === r1)) { _fun3155_ip = 259; continue _fun3155 }
case 253:
                    r1 = 0;
                    _closure1_slot161 = r1;
case 259:
                    r1 = _closure1_slot264;
                    r0 = undefined;
                    r1 = r1.bind(r0)(r2);
                    return r0;
                }
            };
            var _closure1_slot472 = r0;
            r0 = function(a0, a1) { // Original name: retryTimedOutBoundary, environment: r5
                _fun3156: for(var _fun3156_ip = 0; ; ) switch(_fun3156_ip) {
case 0:
                    r3 = a0;
                    r4 = a1;
                    r2 = 0;
                    if(!(r2 === r4)) { _fun3156_ip = 47; continue _fun3156 }
case 12:
                    r1 = r3.mode;
                    r0 = 1;
                    r1 = r1 & r0;
                    r0 = 2;
                    if(!(r2 !== r1)) { _fun3156_ip = 44; continue _fun3156 }
case 31:
                    r2 = _closure1_slot238;
                    r1 = undefined;
                    r0 = r2.bind(r1)();
case 44:
                    r4 = r0;
case 47:
                    r2 = _closure1_slot261;
                    r0 = undefined;
                    r2 = r2.bind(r0)(r3, r4);
                    r3 = null;
                    if(!(r3 !== r2)) { _fun3156_ip = 89; continue _fun3156 }
case 69:
                    r3 = _closure1_slot240;
                    r3 = r3.bind(r0)(r2, r4);
                    r1 = _closure1_slot264;
                    r1 = r1.bind(r0)(r2);
case 89:
                    return r0;
                }
            };
            var _closure1_slot473 = r0;
            r0 = function(a0, a1) { // Original name: resolveRetryWakeable, environment: r5
                _fun3157: for(var _fun3157_ip = 0; ; ) switch(_fun3157_ip) {
case 0:
                    r3 = a0;
                    r1 = r3.tag;
                    r0 = 13;
                    if(!(r0 !== r1)) { _fun3157_ip = 74; continue _fun3157 }
case 15:
                    r0 = 19;
                    if(!(r0 !== r1)) { _fun3157_ip = 65; continue _fun3157 }
case 22:
                    r0 = 22;
                    if(!(r0 !== r1)) { _fun3157_ip = 50; continue _fun3157 }
case 29:
                    r0 = global;
                    r2 = r0.Error;
                    r1 = undefined;
                    r0 = 'Pinged unknown suspense boundary type. This is probably a bug in React.';
                    r0 = r2.bind(r1)(r0);
                    throw r0;
case 50:
                    r0 = r3.stateNode;
                    r4 = r0._retryCache;
                    r2 = 0;
                    _fun3157_ip = 104; continue _fun3157;
case 65:
                    r4 = r3.stateNode;
                    r2 = 0;
                    _fun3157_ip = 104; continue _fun3157;
case 74:
                    r0 = r3.stateNode;
                    r1 = r3.memoizedState;
                    r2 = 0;
                    r5 = null;
                    r4 = r0;
                    if(!(r5 !== r1)) { _fun3157_ip = 104; continue _fun3157 }
case 95:
                    r2 = r1.retryLane;
                    r4 = r0;
case 104:
                    r0 = null;
                    if(!(r0 !== r4)) { _fun3157_ip = 123; continue _fun3157 }
case 110:
                    r1 = r4.delete;
                    r0 = a1;
                    r0 = r1.bind(r4)(r0);
case 123:
                    r1 = _closure1_slot473;
                    r0 = undefined;
                    r1 = r1.bind(r0)(r3, r2);
                    return r0;
                }
            };
            var _closure1_slot474 = r0;
            r0 = function(a0, a1) { // Original name: scheduleCallback, environment: r5
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 3;
                r1 = r1[r0];
                r0 = undefined;
                r3 = r2.bind(r0)(r1);
                r2 = r3.unstable_scheduleCallback;
                r1 = a0;
                r0 = a1;
                r0 = r2.bind(r3)(r1, r0);
                return r0;
            };
            var _closure1_slot475 = r0;
            r0 = function(a0, a1, a2, a3) { // Original name: FiberNode, environment: r5
                r1 = this;
                r0 = a0;
                r1['tag'] = r0;
                r0 = a2;
                r1['key'] = r0;
                r0 = null;
                r1['elementType'] = r0;
                r1['type'] = r0;
                r1['stateNode'] = r0;
                r1['return'] = r0;
                r1['child'] = r0;
                r1['sibling'] = r0;
                r2 = 0;
                r1['index'] = r2;
                r1['ref'] = r0;
                r1['refCleanup'] = r0;
                r3 = a1;
                r1['pendingProps'] = r3;
                r1['memoizedProps'] = r0;
                r1['updateQueue'] = r0;
                r1['memoizedState'] = r0;
                r1['dependencies'] = r0;
                r3 = a3;
                r1['mode'] = r3;
                r1['flags'] = r2;
                r1['subtreeFlags'] = r2;
                r1['deletions'] = r0;
                r1['lanes'] = r2;
                r1['childLanes'] = r2;
                r1['alternate'] = r0;
                r0 = undefined;
                return r0;
            };
            var _closure1_slot476 = r0;
            r0 = function(a0, a1, a2, a3) { // Original name: createFiberImplClass, environment: r5
                r5 = _closure1_slot476;
                r0 = r5.prototype;
                r1 = Object.create(r0, {constructor: {value: r5}});
                r9 = a0;
                r8 = a1;
                r7 = a2;
                r6 = a3;
                r10 = r1;
                r0 = new r10[r5](r9, r8, r7, r6, r5);
                r0 = r0 instanceof Object ? r0 : r1;
                return r0;
            };
            var _closure1_slot477 = r0;
            r0 = function(a0) { // Original name: shouldConstruct, environment: r5
                _fun3161: for(var _fun3161_ip = 0; ; ) switch(_fun3161_ip) {
case 0:
                    r0 = a0;
                    r1 = r0.prototype;
                    r0 = !r1;
                    if(r0) { _fun3161_ip = 23; continue _fun3161 }
case 14:
                    r1 = r1.isReactComponent;
                    r0 = !r1;
case 23:
                    r0 = !r0;
                    return r0;
                }
            };
            var _closure1_slot478 = r0;
            r0 = function(a0, a1) { // Original name: createWorkInProgress, environment: r5
                _fun3162: for(var _fun3162_ip = 0; ; ) switch(_fun3162_ip) {
case 0:
                    r1 = a0;
                    r8 = a1;
                    r0 = r1.alternate;
                    r2 = null;
                    if(!(r2 !== r0)) { _fun3162_ip = 56; continue _fun3162 }
case 17:
                    r0['pendingProps'] = r8;
                    r3 = r1.type;
                    r0['type'] = r3;
                    r3 = 0;
                    r0['flags'] = r3;
                    r0['subtreeFlags'] = r3;
                    r0['deletions'] = r2;
                    _fun3162_ip = 136; continue _fun3162;
case 56:
                    r7 = _closure1_slot477;
                    r12 = r1.tag;
                    r10 = r1.key;
                    r9 = r1.mode;
                    r13 = undefined;
                    r11 = r8;
                    r3 = r13[r7](r12, r11, r10, r9, r8);
                    r4 = r1.elementType;
                    r3['elementType'] = r4;
                    r4 = r1.type;
                    r3['type'] = r4;
                    r4 = r1.stateNode;
                    r3['stateNode'] = r4;
                    r3['alternate'] = r1;
                    r1['alternate'] = r3;
                    r0 = r3;
case 136:
                    r4 = r1.flags;
                    r3 = 31457280;
                    r3 = r4 & r3;
                    r0['flags'] = r3;
                    r3 = r1.childLanes;
                    r0['childLanes'] = r3;
                    r3 = r1.lanes;
                    r0['lanes'] = r3;
                    r3 = r1.child;
                    r0['child'] = r3;
                    r3 = r1.memoizedProps;
                    r0['memoizedProps'] = r3;
                    r3 = r1.memoizedState;
                    r0['memoizedState'] = r3;
                    r3 = r1.updateQueue;
                    r0['updateQueue'] = r3;
                    r4 = r1.dependencies;
                    r2 = null;
                    if(!(r2 !== r4)) { _fun3162_ip = 259; continue _fun3162 }
case 234:
                    r3 = {};
                    r5 = r4.lanes;
                    r3['lanes'] = r5;
                    r4 = r4.firstContext;
                    r3['firstContext'] = r4;
                    r2 = r3;
case 259:
                    r0['dependencies'] = r2;
                    r2 = r1.sibling;
                    r0['sibling'] = r2;
                    r2 = r1.index;
                    r0['index'] = r2;
                    r2 = r1.ref;
                    r0['ref'] = r2;
                    r1 = r1.refCleanup;
                    r0['refCleanup'] = r1;
                    return r0;
                }
            };
            var _closure1_slot479 = r0;
            r0 = function(a0, a1) { // Original name: resetWorkInProgress, environment: r5
                _fun3163: for(var _fun3163_ip = 0; ; ) switch(_fun3163_ip) {
case 0:
                    r0 = a0;
                    r2 = r0.flags;
                    r1 = 31457282;
                    r1 = r2 & r1;
                    r0['flags'] = r1;
                    r2 = r0.alternate;
                    r1 = null;
                    if(!(r1 !== r2)) { _fun3163_ip = 173; continue _fun3163 }
case 38:
                    r3 = r2.childLanes;
                    r0['childLanes'] = r3;
                    r3 = r2.lanes;
                    r0['lanes'] = r3;
                    r3 = r2.child;
                    r0['child'] = r3;
                    r3 = 0;
                    r0['subtreeFlags'] = r3;
                    r0['deletions'] = r1;
                    r3 = r2.memoizedProps;
                    r0['memoizedProps'] = r3;
                    r3 = r2.memoizedState;
                    r0['memoizedState'] = r3;
                    r3 = r2.updateQueue;
                    r0['updateQueue'] = r3;
                    r3 = r2.type;
                    r0['type'] = r3;
                    r4 = r2.dependencies;
                    r2 = null;
                    if(!(r2 !== r4)) { _fun3163_ip = 165; continue _fun3163 }
case 140:
                    r3 = {};
                    r5 = r4.lanes;
                    r3['lanes'] = r5;
                    r4 = r4.firstContext;
                    r3['firstContext'] = r4;
                    r2 = r3;
case 165:
                    r0['dependencies'] = r2;
                    _fun3163_ip = 232; continue _fun3163;
case 173:
                    r2 = 0;
                    r0['childLanes'] = r2;
                    r3 = a1;
                    r0['lanes'] = r3;
                    r0['child'] = r1;
                    r0['subtreeFlags'] = r2;
                    r0['memoizedProps'] = r1;
                    r0['memoizedState'] = r1;
                    r0['updateQueue'] = r1;
                    r0['dependencies'] = r1;
                    r0['stateNode'] = r1;
case 232:
                    return r0;
                }
            };
            var _closure1_slot480 = r0;
            r0 = function(a0, a1, a2, a3, a4, a5) { // Original name: createFiberFromTypeAndProps, environment: r5
                _fun3164: for(var _fun3164_ip = 0; ; ) switch(_fun3164_ip) {
case 0:
                    r3 = a0;
                    r8 = a1;
                    r9 = a2;
                    r4 = a4;
                    r1 = a5;
                    r10 = typeof r3;
                    r0 = 'function';
                    if(!(r0 !== r10)) { _fun3164_ip = 572; continue _fun3164 }
case 29:
                    r7 = 5;
                    r0 = 'string';
                    r6 = r9;
                    r2 = r3;
                    r5 = r4;
                    if(!(r0 !== r10)) { _fun3164_ip = 613; continue _fun3164 }
case 52:
                    r11 = _closure1_slot7;
                    if(!(r11 !== r3)) { _fun3164_ip = 545; continue _fun3164 }
case 66:
                    r11 = _closure1_slot8;
                    if(!(r11 !== r3)) { _fun3164_ip = 495; continue _fun3164 }
case 77:
                    r11 = _closure1_slot9;
                    if(!(r11 !== r3)) { _fun3164_ip = 450; continue _fun3164 }
case 88:
                    r11 = _closure1_slot14;
                    if(!(r11 !== r3)) { _fun3164_ip = 409; continue _fun3164 }
case 99:
                    r11 = _closure1_slot15;
                    if(!(r11 !== r3)) { _fun3164_ip = 368; continue _fun3164 }
case 110:
                    r11 = _closure1_slot18;
                    if(!(r11 !== r3)) { _fun3164_ip = 343; continue _fun3164 }
case 121:
                    r11 = 'object';
                    if(!(r11 === r10)) { _fun3164_ip = 286; continue _fun3164 }
case 132:
                    r14 = null;
                    if(!(r14 !== r3)) { _fun3164_ip = 286; continue _fun3164 }
case 141:
                    r12 = r3["$$typeof"];
                    r11 = _closure1_slot10;
                    r13 = 10;
                    r6 = r9;
                    r2 = r3;
                    r5 = r4;
                    r7 = r13;
                    if(!(r11 !== r12)) { _fun3164_ip = 613; continue _fun3164 }
case 172:
                    r11 = _closure1_slot12;
                    r6 = r9;
                    r2 = r3;
                    r5 = r4;
                    r7 = r13;
                    if(!(r11 !== r12)) { _fun3164_ip = 613; continue _fun3164 }
case 195:
                    r11 = _closure1_slot11;
                    r7 = 9;
                    r6 = r9;
                    r2 = r3;
                    r5 = r4;
                    if(!(r11 !== r12)) { _fun3164_ip = 613; continue _fun3164 }
case 218:
                    r11 = _closure1_slot13;
                    r7 = 11;
                    r6 = r9;
                    r2 = r3;
                    r5 = r4;
                    if(!(r11 !== r12)) { _fun3164_ip = 613; continue _fun3164 }
case 241:
                    r11 = _closure1_slot16;
                    r7 = 14;
                    r6 = r9;
                    r2 = r3;
                    r5 = r4;
                    if(!(r11 !== r12)) { _fun3164_ip = 613; continue _fun3164 }
case 264:
                    r11 = _closure1_slot17;
                    r7 = 16;
                    r6 = r9;
                    r2 = null;
                    r5 = r4;
                    if(!(r11 !== r12)) { _fun3164_ip = 613; continue _fun3164 }
case 286:
                    r11 = global;
                    r13 = r11.Error;
                    r15 = 'null';
                    r11 = null;
                    if(!(r11 !== r3)) { _fun3164_ip = 307; continue _fun3164 }
case 304:
                    r15 = r10;
case 307:
                    r12 = undefined;
                    r14 = 'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: ';
                    r10 = '.';
                    r10 = r15 + r10;
                    r10 = r14 + r10;
                    r6 = r13.bind(r12)(r10);
                    r7 = 29;
                    r2 = null;
                    r5 = r4;
                    _fun3164_ip = 613; continue _fun3164;
case 343:
                    r11 = _closure1_slot483;
                    r20 = undefined;
                    r19 = r9;
                    r18 = r4;
                    r17 = r1;
                    r16 = r8;
                    r10 = r20[r11](r19, r18, r17, r16, r15);
                    return r10;
case 368:
                    r12 = _closure1_slot477;
                    r20 = undefined;
                    r19 = 19;
                    r18 = r9;
                    r17 = r8;
                    r16 = r4;
                    r10 = r20[r12](r19, r18, r17, r16, r15);
