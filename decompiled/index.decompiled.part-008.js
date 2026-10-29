                    r20 = r22.bind(r18)(r19);
case 214:
                    r7[r21] = r20;
                    _fun1457_ip = 224; continue _fun1457;
case 220:
                    r7[r21] = r19;
case 224:
                    r20 = _closure1_slot3;
                    r20[r21] = r10;
                    r20 = _closure1_slot4;
                    r20 = r20 - 1;
                    _closure1_slot4 = r20;
                    r1 = r19;
                    r0 = r18;
                    _fun1457_ip = 90; continue _fun1457;
case 254:
                    r0 = r6.length;
                    r0 = parseFloat(r0);
                    r4 = r0 - 1;
                    if(!r0) { _fun1457_ip = 318; continue _fun1457 }
case 268:
                    r0 = _closure1_slot4;
                    r2 = 0;
                    r1 = undefined;
                    if(!(r0 > r2)) { _fun1457_ip = 318; continue _fun1457 }
case 283:
                    r8 = _closure1_slot7;
                    r0 = r6[r4];
                    r0 = r8.bind(r1)(r7, r0, r5);
                    r0 = parseFloat(r4);
                    r8 = r0 - 1;
                    if(!r0) { _fun1457_ip = 318; continue _fun1457 }
case 307:
                    r0 = _closure1_slot4;
                    r4 = r8;
                    if(r0 > r2) { _fun1457_ip = 283; continue _fun1457 }
                }
case 318:
                r0 = undefined;
                return r0;
            }
        };
        var _closure1_slot7 = r0;
        r0 = function(a0, a1, a2, a3) { // Original name: diffNestedArrayProperty, environment: r2
            _fun1458: for(var _fun1458_ip = 0; ; ) switch(_fun1458_ip) {
case 0:
                r0 = a0;
                r9 = a1;
                r7 = a2;
                r6 = a3;
                r2 = r9.length;
                r1 = r7.length;
                if(!(!(r2 < r1))) { _fun1458_ip = 33; continue _fun1458 }
case 26:
                r8 = r7.length;
                _fun1458_ip = 38; continue _fun1458;
case 33:
                r8 = r9.length;
case 38:
                r3 = 0;
                r10 = r3 < r8;
                r4 = undefined;
                r2 = r0;
                r1 = 0;
                r0 = r2;
                if(!r10) { _fun1458_ip = 97; continue _fun1458 }
case 60:
                r12 = _closure1_slot9;
                r15 = r9[r1];
                r14 = r7[r1];
                r17 = undefined;
                r16 = r2;
                r13 = r6;
                r2 = r17[r12](r16, r15, r14, r13, r12);
                r1 = r1 + 1;
                r0 = r2;
                r3 = r1;
                if(r3 < r8) { _fun1458_ip = 60; continue _fun1458 }
case 97:
                r1 = r9.length;
                r8 = r0;
                r2 = r3;
                r0 = r8;
                r3 = r2;
                if(!(r3 < r1)) { _fun1458_ip = 151; continue _fun1458 }
case 118:
                r10 = _closure1_slot11;
                r1 = r9[r2];
                r8 = r10.bind(r4)(r8, r1, r6);
                r2 = r2 + 1;
                r1 = r9.length;
                r0 = r8;
                r3 = r2;
                if(r3 < r1) { _fun1458_ip = 118; continue _fun1458 }
case 151:
                r1 = r7.length;
                r2 = r0;
                r0 = r2;
                if(!(r3 < r1)) { _fun1458_ip = 196; continue _fun1458 }
case 166:
                r8 = _closure1_slot10;
                r1 = r7[r3];
                r2 = r8.bind(r4)(r2, r1, r6);
                r3 = r3 + 1;
                r1 = r7.length;
                r0 = r2;
                if(r3 < r1) { _fun1458_ip = 166; continue _fun1458 }
case 196:
                return r0;
            }
        };
        var _closure1_slot8 = r0;
        r0 = function(a0, a1, a2, a3) { // Original name: diffNestedProperty, environment: r2
            _fun1459: for(var _fun1459_ip = 0; ; ) switch(_fun1459_ip) {
case 0:
                r5 = a0;
                r4 = a1;
                r3 = a2;
                r2 = a3;
                if(r5) { _fun1459_ip = 21; continue _fun1459 }
case 15:
                if(!(r4 === r3)) { _fun1459_ip = 21; continue _fun1459 }
case 19:
                return r5;
case 21:
                if(!r4) { _fun1459_ip = 27; continue _fun1459 }
case 24:
                if(r3) { _fun1459_ip = 71; continue _fun1459 }
case 27:
                if(r3) { _fun1459_ip = 53; continue _fun1459 }
case 30:
                if(r4) { _fun1459_ip = 35; continue _fun1459 }
case 33:
                return r5;
case 35:
                r1 = _closure1_slot11;
                r0 = undefined;
                r0 = r1.bind(r0)(r5, r4, r2);
                return r0;
case 53:
                r1 = _closure1_slot10;
                r0 = undefined;
                r0 = r1.bind(r0)(r5, r3, r2);
                return r0;
case 71:
                r0 = global;
                r6 = r0.Array;
                r1 = r6.isArray;
                r1 = r1.bind(r6)(r4);
                if(r1) { _fun1459_ip = 138; continue _fun1459 }
case 92:
                r6 = r0.Array;
                r1 = r6.isArray;
                r1 = r1.bind(r6)(r3);
                if(r1) { _fun1459_ip = 138; continue _fun1459 }
case 111:
                r6 = _closure1_slot12;
                r12 = undefined;
                r11 = r5;
                r10 = r4;
                r9 = r3;
                r8 = r2;
                r1 = r12[r6](r11, r10, r9, r8, r7);
                return r1;
case 138:
                r6 = r0.Array;
                r1 = r6.isArray;
                r1 = r1.bind(r6)(r4);
                if(!r1) { _fun1459_ip = 176; continue _fun1459 }
case 157:
                r6 = r0.Array;
                r1 = r6.isArray;
                r1 = r1.bind(r6)(r3);
                if(r1) { _fun1459_ip = 257; continue _fun1459 }
case 176:
                r1 = r0.Array;
                r0 = r1.isArray;
                r7 = r0.bind(r1)(r4);
                r6 = _closure1_slot12;
                r0 = _closure1_slot0;
                r0 = r0.default;
                r1 = undefined;
                if(r7) { _fun1459_ip = 235; continue _fun1459 }
case 213:
                r9 = r0.bind(r1)(r3);
                r12 = undefined;
                r11 = r5;
                r10 = r4;
                r8 = r2;
                r7 = r12[r6](r11, r10, r9, r8, r7);
                return r7;
case 235:
                r10 = r0.bind(r1)(r4);
                r12 = undefined;
                r11 = r5;
                r9 = r3;
                r8 = r2;
                r0 = r12[r6](r11, r10, r9, r8, r7);
                return r0;
case 257:
                r1 = _closure1_slot8;
                r12 = undefined;
                r11 = r5;
                r10 = r4;
                r9 = r3;
                r8 = r2;
                r0 = r12[r1](r11, r10, r9, r8, r7);
                return r0;
            }
        };
        var _closure1_slot9 = r0;
        r0 = function(a0, a1, a2) { // Original name: addNestedProperty, environment: r2
            _fun1460: for(var _fun1460_ip = 0; ; ) switch(_fun1460_ip) {
case 0:
                r0 = a0;
                r7 = a1;
                r6 = a2;
                if(r7) { _fun1460_ip = 14; continue _fun1460 }
case 12:
                return r0;
case 14:
                r1 = global;
                r2 = r1.Array;
                r1 = r2.isArray;
                r1 = r1.bind(r2)(r7);
                if(r1) { _fun1460_ip = 53; continue _fun1460 }
case 35:
                r2 = _closure1_slot13;
                r1 = undefined;
                r1 = r2.bind(r1)(r0, r7, r6);
                return r1;
case 53:
                r1 = r7.length;
                r5 = 0;
                r1 = r5 < r1;
                r3 = undefined;
                r2 = r0;
                r0 = r2;
                if(!r1) { _fun1460_ip = 108; continue _fun1460 }
case 78:
                r8 = _closure1_slot10;
                r1 = r7[r5];
                r2 = r8.bind(r3)(r2, r1, r6);
                r5 = r5 + 1;
                r1 = r7.length;
                r0 = r2;
                if(r5 < r1) { _fun1460_ip = 78; continue _fun1460 }
case 108:
                return r0;
            }
        };
        var _closure1_slot10 = r0;
        r0 = function(a0, a1, a2) { // Original name: clearNestedProperty, environment: r2
            _fun1461: for(var _fun1461_ip = 0; ; ) switch(_fun1461_ip) {
case 0:
                r0 = a0;
                r7 = a1;
                r6 = a2;
                if(r7) { _fun1461_ip = 14; continue _fun1461 }
case 12:
                return r0;
case 14:
                r1 = global;
                r2 = r1.Array;
                r1 = r2.isArray;
                r1 = r1.bind(r2)(r7);
                if(r1) { _fun1461_ip = 53; continue _fun1461 }
case 35:
                r2 = _closure1_slot14;
                r1 = undefined;
                r1 = r2.bind(r1)(r0, r7, r6);
                return r1;
case 53:
                r1 = r7.length;
                r5 = 0;
                r1 = r5 < r1;
                r3 = undefined;
                r2 = r0;
                r0 = r2;
                if(!r1) { _fun1461_ip = 108; continue _fun1461 }
case 78:
                r8 = _closure1_slot11;
                r1 = r7[r5];
                r2 = r8.bind(r3)(r2, r1, r6);
                r5 = r5 + 1;
                r1 = r7.length;
                r0 = r2;
                if(r5 < r1) { _fun1461_ip = 78; continue _fun1461 }
case 108:
                return r0;
            }
        };
        var _closure1_slot11 = r0;
        r0 = function(a0, a1, a2, a3) { // Original name: diffProperties, environment: r2
            _fun1462: for(var _fun1462_ip = 0; ; ) switch(_fun1462_ip) {
case 0:
                r5 = a0;
                r17 = a1;
                r16 = a2;
                r15 = a3;
                r23 = r16;
                r14 = undefined;
                r13 = 'function';
                r12 = 'object';
                r10 = null;
                r19 = 0;
                r18 = false;
                r6 = 'undefined';
                r9 = true;
                r4 = undefined;
                r3 = undefined;
                r2 = undefined;
                r1 = undefined;
                r0 = r5;
                r8 = undefined;
                r7 = undefined;
                for(r20 in r23)
case 66:
                {
                    r28 = r5;
                    r8 = r4;
                    r25 = r2;
                    r0 = r28;
                    r7 = r25;
case 93:
                    r29 = r20;
                    r27 = r15[r29];
                    r5 = r28;
                    r4 = r27;
                    r2 = r25;
                    if(!r27) { _fun1462_ip = 66; continue _fun1462 }
case 112:
                    r30 = r17[r29];
                    r26 = r16[r29];
                    r25 = typeof r26;
                    r31 = r30;
                    if(!(r25 === r13)) { _fun1462_ip = 146; continue _fun1462 }
case 130:
                    r25 = typeof r30;
                    r26 = true;
                    r31 = r30;
                    if(!(r25 === r13)) { _fun1462_ip = 146; continue _fun1462 }
case 142:
                    r26 = true;
                    r31 = true;
case 146:
                    r30 = typeof r26;
                    r25 = r31;
                    if(!(r30 === r6)) { _fun1462_ip = 172; continue _fun1462 }
case 156:
                    r30 = typeof r31;
                    r26 = null;
                    r25 = r31;
                    if(!(r30 === r6)) { _fun1462_ip = 172; continue _fun1462 }
case 168:
                    r26 = null;
                    r25 = null;
case 172:
                    r30 = _closure1_slot3;
                    if(!r30) { _fun1462_ip = 187; continue _fun1462 }
case 179:
                    r30 = _closure1_slot3;
                    r30[r29] = r18;
case 187:
                    if(!r28) { _fun1462_ip = 201; continue _fun1462 }
case 190:
                    r30 = r28[r29];
                    if(!(r30 === r14)) { _fun1462_ip = 546; continue _fun1462 }
case 201:
                    r5 = r28;
                    r4 = r27;
                    r3 = r26;
                    r2 = r25;
                    if(r25 === r26) { _fun1462_ip = 66; continue _fun1462 }
case 220:
                    r30 = typeof r27;
                    if(!(r30 === r12)) { _fun1462_ip = 483; continue _fun1462 }
case 230:
                    r30 = r27.diff;
                    r30 = typeof r30;
                    if(!(r30 !== r13)) { _fun1462_ip = 357; continue _fun1462 }
case 242:
                    r30 = r27.process;
                    r30 = typeof r30;
                    if(!(r30 !== r13)) { _fun1462_ip = 357; continue _fun1462 }
case 254:
                    _closure1_slot3 = r10;
                    _closure1_slot4 = r19;
                    r30 = _closure1_slot9;
                    r38 = undefined;
                    r37 = r28;
                    r36 = r25;
                    r35 = r26;
                    r34 = r27;
                    r30 = r38[r30](r37, r36, r35, r34, r33);
                    r31 = _closure1_slot4;
                    r5 = r30;
                    r4 = r27;
                    r3 = r26;
                    r2 = r25;
                    if(!(r31 > r19)) { _fun1462_ip = 66; continue _fun1462 }
case 307:
                    r4 = r27;
                    r3 = r26;
                    r2 = r25;
                    r5 = r30;
                    if(!r5) { _fun1462_ip = 66; continue _fun1462 }
case 325:
                    r31 = _closure1_slot7;
                    r31 = r31.bind(r14)(r30, r26, r27);
                    _closure1_slot3 = r10;
                    r5 = r30;
                    r4 = r27;
                    r3 = r26;
                    r2 = r25;
                    _fun1462_ip = 66; continue _fun1462;
case 357:
                    r30 = r25 === r14;
                    if(r30) { _fun1462_ip = 402; continue _fun1462 }
case 364:
                    r31 = r27.diff;
                    r31 = typeof r31;
                    if(!(r31 !== r13)) { _fun1462_ip = 388; continue _fun1462 }
case 376:
                    r31 = _closure1_slot6;
                    r31 = r31.bind(r14)(r25, r26);
                    _fun1462_ip = 399; continue _fun1462;
case 388:
                    r32 = r27.diff;
                    r31 = r32.bind(r27)(r25, r26);
case 399:
                    r30 = r31;
case 402:
                    r5 = r28;
                    r4 = r27;
                    r3 = r26;
                    r2 = r25;
                    if(!r30) { _fun1462_ip = 66; continue _fun1462 }
case 420:
                    r30 = r27.process;
                    r31 = typeof r30;
                    r30 = r26;
                    if(!(r31 === r13)) { _fun1462_ip = 445; continue _fun1462 }
case 435:
                    r31 = r27.process;
                    r30 = r31.bind(r27)(r26);
case 445:
                    r32 = r28;
                    r31 = r32;
                    if(r28) { _fun1462_ip = 459; continue _fun1462 }
case 454:
                    r32 = {};
                    r31 = r32;
case 459:
                    r32[r29] = r30;
                    r5 = r31;
                    r4 = r27;
                    r3 = r26;
                    r2 = r25;
                    r1 = r30;
                    _fun1462_ip = 66; continue _fun1462;
case 483:
                    r30 = _closure1_slot6;
                    r30 = r30.bind(r14)(r25, r26);
                    r5 = r28;
                    r4 = r27;
                    r3 = r26;
                    r2 = r25;
                    if(!r30) { _fun1462_ip = 66; continue _fun1462 }
case 511:
                    r31 = r28;
                    r30 = r31;
                    if(r28) { _fun1462_ip = 525; continue _fun1462 }
case 520:
                    r31 = {};
                    r30 = r31;
case 525:
                    r31[r29] = r26;
                    r5 = r30;
                    r4 = r27;
                    r3 = r26;
                    r2 = r25;
                    _fun1462_ip = 66; continue _fun1462;
case 546:
                    r30 = typeof r27;
                    if(!(r30 === r12)) { _fun1462_ip = 638; continue _fun1462 }
case 553:
                    r30 = r27.diff;
                    r30 = typeof r30;
                    if(!(r30 !== r13)) { _fun1462_ip = 592; continue _fun1462 }
case 565:
                    r30 = r27.process;
                    r30 = typeof r30;
                    r5 = r28;
                    r4 = r27;
                    r3 = r26;
                    r2 = r25;
                    if(r30 !== r13) { _fun1462_ip = 66; continue _fun1462 }
case 592:
                    r30 = r27.process;
                    r31 = typeof r30;
                    r30 = r26;
                    if(!(r31 === r13)) { _fun1462_ip = 617; continue _fun1462 }
case 607:
                    r31 = r27.process;
                    r30 = r31.bind(r27)(r26);
case 617:
                    r28[r29] = r30;
                    r5 = r28;
                    r4 = r27;
                    r3 = r26;
                    r2 = r25;
                    _fun1462_ip = 66; continue _fun1462;
case 638:
                    r28[r29] = r26;
                    r5 = r28;
                    r4 = r27;
                    r3 = r26;
                    r2 = r25;
                    _fun1462_ip = 66; continue _fun1462;
                }
case 659:
                r5 = r17;
                r1 = r0;
                r0 = r1;
                for(r2 in r5)
case 679:
                {
                    r23 = r1;
                    r0 = r23;
case 697:
                    r22 = r2;
                    r18 = r16[r22];
                    r1 = r23;
                    if(r18 !== r14) { _fun1462_ip = 679; continue _fun1462 }
case 711:
                    r19 = r15[r22];
                    r1 = r23;
                    r8 = r19;
                    if(!r8) { _fun1462_ip = 679; continue _fun1462 }
case 724:
                    if(!r23) { _fun1462_ip = 741; continue _fun1462 }
case 727:
                    r18 = r23[r22];
                    r1 = r23;
                    r8 = r19;
                    if(r18 !== r14) { _fun1462_ip = 679; continue _fun1462 }
case 741:
                    r18 = r17[r22];
                    r1 = r23;
                    r8 = r19;
                    r7 = r18;
                    if(r18 === r14) { _fun1462_ip = 679; continue _fun1462 }
case 758:
                    r20 = typeof r19;
                    if(!(r20 === r12)) { _fun1462_ip = 808; continue _fun1462 }
case 765:
                    r20 = r19.diff;
                    r20 = typeof r20;
                    if(!(r20 !== r13)) { _fun1462_ip = 808; continue _fun1462 }
case 777:
                    r20 = r19.process;
                    r20 = typeof r20;
                    if(!(r20 !== r13)) { _fun1462_ip = 808; continue _fun1462 }
case 789:
                    r20 = _closure1_slot11;
                    r1 = r20.bind(r14)(r23, r18, r19);
                    r8 = r19;
                    r7 = r18;
                    _fun1462_ip = 679; continue _fun1462;
case 808:
                    r21 = r23;
                    r20 = r21;
                    if(r23) { _fun1462_ip = 822; continue _fun1462 }
case 817:
                    r21 = {};
                    r20 = r21;
case 822:
                    r21[r22] = r10;
                    r21 = _closure1_slot3;
                    if(r21) { _fun1462_ip = 839; continue _fun1462 }
case 833:
                    r21 = {};
                    _closure1_slot3 = r21;
case 839:
                    r21 = _closure1_slot3;
                    r21 = r21[r22];
                    r1 = r20;
                    r8 = r19;
                    r7 = r18;
                    if(r21) { _fun1462_ip = 679; continue _fun1462 }
case 862:
                    r21 = _closure1_slot3;
                    r21[r22] = r9;
                    r21 = _closure1_slot4;
                    r21 = r21 + 1;
                    _closure1_slot4 = r21;
                    r1 = r20;
                    r8 = r19;
                    r7 = r18;
                    _fun1462_ip = 679; continue _fun1462;
                }
case 895:
                return r0;
            }
        };
        var _closure1_slot12 = r0;
        r0 = function(a0, a1, a2) { // Original name: addProperties, environment: r2
            r5 = _closure1_slot12;
            r8 = _closure1_slot2;
            r10 = undefined;
            r9 = a0;
            r7 = a1;
            r6 = a2;
            r0 = r10[r5](r9, r8, r7, r6, r5);
            return r0;
        };
        var _closure1_slot13 = r0;
        r0 = function(a0, a1, a2) { // Original name: clearProperties, environment: r2
            r5 = _closure1_slot12;
            r7 = _closure1_slot2;
            r10 = undefined;
            r9 = a0;
            r8 = a1;
            r6 = a2;
            r0 = r10[r5](r9, r8, r7, r6, r5);
            return r0;
        };
        var _closure1_slot14 = r0;
        r1 = 0;
        r3 = r7[r1];
        r0 = undefined;
        r5 = r6.bind(r0)(r3);
        r3 = global;
        r11 = r3.Object;
        r10 = r11.defineProperty;
        r9 = {};
        r3 = true;
        r9['value'] = r3;
        r4 = '__esModule';
        r4 = r10.bind(r11)(r8, r4, r9);
        r4 = function(a0, a1) { // Original name: create, environment: r2
            r4 = _closure1_slot13;
            r3 = undefined;
            r2 = null;
            r1 = a0;
            r0 = a1;
            r0 = r4.bind(r3)(r2, r1, r0);
            return r0;
        };
        r8['create'] = r4;
        r4 = function(a0, a1, a2) { // Original name: diff, environment: r2
            r5 = _closure1_slot12;
            r10 = undefined;
            r9 = null;
            r8 = a0;
            r7 = a1;
            r6 = a2;
            r0 = r10[r5](r9, r8, r7, r6, r5);
            return r0;
        };
        r8['diff'] = r4;
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
        r4 = {};
        var _closure1_slot2 = r4;
        r4 = null;
        var _closure1_slot3 = r4;
        var _closure1_slot4 = r1;
        r1 = {};
        r1['unsafelyIgnoreFunctions'] = r3;
        var _closure1_slot5 = r1;
        return r0;
    };
    r6 = 127;
    r5 = [1, 128, 129];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r2 = a5;
        r1 = function(a0) { // Original name: flattenStyle, environment: r0
            _fun1468: for(var _fun1468_ip = 0; ; ) switch(_fun1468_ip) {
case 0:
                r5 = a0;
                r0 = null;
                if(!(r5 !== r0)) { _fun1468_ip = 125; continue _fun1468 }
case 9:
                r1 = typeof r5;
                r0 = 'object';
                if(!(r1 === r0)) { _fun1468_ip = 125; continue _fun1468 }
case 20:
                r0 = global;
                r1 = r0.Array;
                r0 = r1.isArray;
                r0 = r0.bind(r1)(r5);
                if(r0) { _fun1468_ip = 43; continue _fun1468 }
case 41:
                return r5;
case 43:
                r0 = {};
                r4 = r5.length;
                r3 = 0;
                r6 = r3 < r4;
                r1 = undefined;
                if(!r6) { _fun1468_ip = 123; continue _fun1468 }
case 64:
                r7 = _closure1_slot0;
                r6 = r5[r3];
                r12 = r7.bind(r1)(r6);
                r6 = r3;
                if(!r12) { _fun1468_ip = 116; continue _fun1468 }
case 83:
                r10 = r12;
                for(r7 in r10)
case 94:
                {
case 103:
                    r14 = r7;
                    r13 = r12[r14];
                    r0[r14] = r13;
                    _fun1468_ip = 94; continue _fun1468;
                }
case 116:
                r3 = r6 + 1;
                if(r3 < r4) { _fun1468_ip = 64; continue _fun1468 }
case 123:
                return r0;
case 125:
                r0 = undefined;
                return r0;
            }
        };
        var _closure1_slot0 = r1;
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
        r2['default'] = r1;
        return r0;
    };
    r6 = 128;
    r5 = new Array(0);
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r2 = a5;
        r1 = function(a0, a1) { // Original name: deepDiffer, environment: r3
            _fun1471: for(var _fun1471_ip = 0; ; ) switch(_fun1471_ip) {
case 0:
                r3 = a0;
                r2 = a1;
                r0 = undefined;
                r6 = undefined;
                r1 = arguments.length;
                r4 = 2;
                r5 = r1 > r4;
                r8 = -1;
                r1 = r8;
                if(!r5) { _fun1471_ip = 47; continue _fun1471 }
case 32:
                r5 = arguments[r4];
                r1 = r8;
                if(!(r5 !== r0)) { _fun1471_ip = 47; continue _fun1471 }
case 43:
                r1 = arguments[r4];
case 47:
                r5 = arguments.length;
                r4 = 3;
                r7 = r5 > r4;
                r5 = undefined;
                if(!r7) { _fun1471_ip = 66; continue _fun1471 }
case 62:
                r5 = arguments[r4];
case 66:
                r6 = typeof r1;
                r4 = 'number';
                r4 = r6 === r4;
                r6 = r1;
                if(!r4) { _fun1471_ip = 86; continue _fun1471 }
case 83:
                r6 = r5;
case 86:
                if(!r4) { _fun1471_ip = 92; continue _fun1471 }
case 89:
                r8 = r1;
case 92:
                r7 = 0;
                if(!(r8 !== r7)) { _fun1471_ip = 502; continue _fun1471 }
case 101:
                if(!(r3 !== r2)) { _fun1471_ip = 498; continue _fun1471 }
case 108:
                r1 = typeof r3;
                r5 = 'function';
                if(!(r1 === r5)) { _fun1471_ip = 129; continue _fun1471 }
case 119:
                r4 = typeof r2;
                if(!(r4 !== r5)) { _fun1471_ip = 401; continue _fun1471 }
case 129:
                r5 = 'object';
                if(!(r1 === r5)) { _fun1471_ip = 395; continue _fun1471 }
case 140:
                r1 = null;
                if(!(r3 !== r1)) { _fun1471_ip = 395; continue _fun1471 }
case 149:
                r4 = typeof r2;
                if(!(r4 === r5)) { _fun1471_ip = 391; continue _fun1471 }
case 159:
                if(!(r2 !== r1)) { _fun1471_ip = 391; continue _fun1471 }
case 166:
                r4 = r3.constructor;
                r1 = r2.constructor;
                if(!(r4 === r1)) { _fun1471_ip = 387; continue _fun1471 }
case 183:
                r1 = global;
                r4 = r1.Array;
                r1 = r4.isArray;
                r1 = r1.bind(r4)(r3);
                if(r1) { _fun1471_ip = 308; continue _fun1471 }
case 204:
                r12 = r3;
                r4 = 1;
                for(r9 in r12)
case 221:
                {
case 230:
                    r1 = r9;
                    r16 = _closure1_slot1;
                    r20 = r3[r1];
                    r19 = r2[r1];
                    r18 = r8 - r4;
                    r21 = undefined;
                    r17 = r6;
                    r1 = r21[r16](r20, r19, r18, r17, r16);
                    if(!r1) { _fun1471_ip = 221; continue _fun1471 }
case 261:
                    r1 = true;
                    return r1;
                }
case 265:
                r10 = r2;
                for(r4 in r10)
case 276:
                {
case 285:
                    r1 = r4;
                    r12 = r3[r1];
                    if(r12 !== r0) { _fun1471_ip = 276; continue _fun1471 }
case 296:
                    r1 = r2[r1];
                    if(r1 === r0) { _fun1471_ip = 276; continue _fun1471 }
case 304:
                    r1 = true;
                    return r1;
case 308:
                    r5 = r3.length;
                    r1 = r2.length;
                    if(!(r1 === r5)) { _fun1471_ip = 383; continue _fun1471 }
case 322:
                    r9 = r7 < r5;
                    r1 = 1;
                    r7 = 0;
                    if(!r9) { _fun1471_ip = 375; continue _fun1471 }
case 337:
                    r12 = _closure1_slot1;
                    r20 = r3[r7];
                    r19 = r2[r7];
                    r18 = r8 - r1;
                    r21 = undefined;
                    r17 = r6;
                    r10 = r21[r12](r20, r19, r18, r17, r16);
                    r9 = r7;
                    if(r10) { _fun1471_ip = 379; continue _fun1471 }
case 368:
                    r7 = r9 + 1;
                    if(r7 < r5) { _fun1471_ip = 337; continue _fun1471 }
                }
case 375:
                r1 = false;
                return r1;
case 379:
                r1 = true;
                return r1;
case 383:
                r1 = true;
                return r1;
case 387:
                r1 = true;
                return r1;
case 391:
                r1 = true;
                return r1;
case 395:
                r1 = r3 !== r2;
                return r1;
case 401:
                r1 = null;
                r4 = r6 == r1;
                r0 = undefined;
                if(r4) { _fun1471_ip = 418; continue _fun1471 }
case 412:
                r0 = r6.unsafelyIgnoreFunctions;
case 418:
                if(!(r0 == r1)) { _fun1471_ip = 493; continue _fun1471 }
case 422:
                r5 = _closure1_slot0;
                r0 = true;
                if(!r5) { _fun1471_ip = 493; continue _fun1471 }
case 434:
                r5 = _closure1_slot0;
                r5 = r5.onDifferentFunctionsIgnored;
                r0 = true;
                if(!r5) { _fun1471_ip = 493; continue _fun1471 }
case 449:
                if(!r6) { _fun1471_ip = 465; continue _fun1471 }
case 452:
                r5 = 'unsafelyIgnoreFunctions';
                r5 = r5 in r6;
                r0 = true;
                if(r5) { _fun1471_ip = 493; continue _fun1471 }
case 465:
                r5 = _closure1_slot0;
                r4 = r5.onDifferentFunctionsIgnored;
                r3 = r3.name;
                r2 = r2.name;
                r2 = r4.bind(r5)(r3, r2);
                r0 = true;
case 493:
                r0 = !r0;
                return r0;
case 498:
                r0 = false;
                return r0;
case 502:
                r0 = true;
                return r0;
            }
        };
        var _closure1_slot1 = r1;
        r0 = global;
        r6 = r0.Object;
        r5 = r6.defineProperty;
        r4 = {};
        r0 = true;
        r4['value'] = r0;
        r0 = '__esModule';
        r0 = r5.bind(r6)(r2, r0, r4);
        r0 = undefined;
        r2['default'] = r0;
        r3 = function(a0) { // Original name: unstable_setLogListeners, environment: r3
            r0 = a0;
            var _closure1_slot0 = r0;
            r0 = undefined;
            return r0;
        };
        r1['unstable_setLogListeners'] = r3;
        r2['default'] = r1;
        return r0;
    };
    r6 = 129;
    r5 = new Array(0);
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r6 = a1;
        r2 = a5;
        r7 = a6;
        var _closure1_slot0 = r6;
        var _closure1_slot1 = r7;
        r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r1
            _fun1473: for(var _fun1473_ip = 0; ; ) switch(_fun1473_ip) {
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
                if(r0) { _fun1473_ip = 61; continue _fun1473 }
case 48:
                r0 = r8.apply;
                r0 = r0.bind(r8)(r3, r5);
                _fun1473_ip = 107; continue _fun1473;
case 61:
                r6 = global;
                r7 = r6.Reflect;
                r6 = r7.construct;
                if(r5) { _fun1473_ip = 81; continue _fun1473 }
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
            _fun1474: for(var _fun1474_ip = 0; ; ) switch(_fun1474_ip) {
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
                _fun1474_ip = 74; continue _fun1474;
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
        r4 = 7;
        r4 = r7[r4];
        r4 = r6.bind(r0)(r4);
        r4 = r5.bind(r0)(r4);
        var _closure1_slot7 = r4;
        r3 = r3.default;
        r1 = function(a0) { // Environment: r1
            r3 = function() { // Original name: ReadOnlyCharacterData, environment: r5
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
            r1 = _closure1_slot6;
            r4 = r1.default;
            r2 = undefined;
            r1 = a0;
            r1 = r4.bind(r2)(r3, r1);
            r0 = _closure1_slot3;
            r1 = r0.default;
            r4 = {};
            r0 = 'nextElementSibling';
            r4['key'] = r0;
            r0 = function() { // Original name: get, environment: r5
                r1 = _closure1_slot0;
                r2 = _closure1_slot1;
                r0 = 8;
                r0 = r2[r0];
                r3 = undefined;
                r0 = r1.bind(r3)(r0);
                r2 = r0.getElementSibling;
                r1 = this;
                r0 = 'next';
                r0 = r2.bind(r3)(r1, r0);
                return r0;
            };
            r4['get'] = r0;
            r0 = new Array(7);
            r0[0] = r4;
            r4 = {};
            r6 = 'previousElementSibling';
            r4['key'] = r6;
            r6 = function() { // Original name: get, environment: r5
                r1 = _closure1_slot0;
                r2 = _closure1_slot1;
                r0 = 8;
                r0 = r2[r0];
                r3 = undefined;
                r0 = r1.bind(r3)(r0);
                r2 = r0.getElementSibling;
                r1 = this;
                r0 = 'previous';
                r0 = r2.bind(r3)(r1, r0);
                return r0;
            };
            r4['get'] = r6;
            r0[1] = r4;
            r4 = {};
            r6 = 'data';
            r4['key'] = r6;
            r6 = function() { // Original name: get, environment: r5
                _fun1481: for(var _fun1481_ip = 0; ; ) switch(_fun1481_ip) {
case 0:
                    r2 = _closure1_slot0;
                    r3 = _closure1_slot1;
                    r1 = 9;
                    r1 = r3[r1];
                    r3 = undefined;
                    r1 = r2.bind(r3)(r1);
                    r2 = r1.getNativeTextReference;
                    r1 = this;
                    r2 = r2.bind(r3)(r1);
                    r1 = null;
                    if(!(r2 == r1)) { _fun1481_ip = 50; continue _fun1481 }
case 44:
                    r1 = '';
                    return r1;
case 50:
                    r0 = _closure1_slot7;
                    r1 = r0.default;
                    r0 = r1.getTextContent;
                    r0 = r0.bind(r1)(r2);
                    return r0;
                }
            };
            r4['get'] = r6;
            r0[2] = r4;
            r4 = {};
            r6 = 'length';
            r4['key'] = r6;
            r6 = function() { // Original name: get, environment: r5
                r0 = this;
                r0 = r0.data;
                r0 = r0.length;
                return r0;
            };
            r4['get'] = r6;
            r0[3] = r4;
            r4 = {};
            r6 = 'textContent';
            r4['key'] = r6;
            r6 = function() { // Original name: get, environment: r5
                r0 = this;
                r0 = r0.data;
                return r0;
            };
            r4['get'] = r6;
            r0[4] = r4;
            r4 = {};
            r6 = 'nodeValue';
            r4['key'] = r6;
            r6 = function() { // Original name: get, environment: r5
                r0 = this;
                r0 = r0.data;
                return r0;
            };
            r4['get'] = r6;
            r0[5] = r4;
            r4 = {};
            r6 = 'substringData';
            r4['key'] = r6;
            r5 = function(a0, a1) { // Original name: substringData, environment: r5
                _fun1485: for(var _fun1485_ip = 0; ; ) switch(_fun1485_ip) {
case 0:
                    r4 = a0;
                    r0 = a1;
                    r1 = this;
                    r1 = r1.data;
                    r2 = 0;
                    if(!(!(r4 < r2))) { _fun1485_ip = 128; continue _fun1485 }
case 19:
                    r3 = r1.length;
                    if(!(!(r4 > r3))) { _fun1485_ip = 63; continue _fun1485 }
case 28:
                    if(!(!(r0 < r2))) { _fun1485_ip = 41; continue _fun1485 }
case 32:
                    r2 = r1.length;
                    if(!(r0 > r2)) { _fun1485_ip = 46; continue _fun1485 }
case 41:
                    r0 = r1.length;
case 46:
                    r2 = r1.slice;
                    r0 = r4 + r0;
                    r0 = r2.bind(r1)(r4, r0);
                    return r0;
case 63:
                    r0 = global;
                    r2 = r0.TypeError;
                    r8 = r1.length;
                    r0 = r0.HermesInternal;
                    r5 = r0.concat;
                    r11 = "Failed to execute 'substringData' on 'CharacterData': The offset ";
                    r9 = " is greater than the node's length (";
                    r7 = ').';
                    r10 = r4;
                    r10 = r11[r5](r10, r9, r8, r7, r6);
                    r1 = r2.prototype;
                    r1 = Object.create(r1, {constructor: {value: r2}});
                    r11 = r1;
                    r0 = new r11[r2](r10, r9);
                    r0 = r0 instanceof Object ? r0 : r1;
                    throw r0;
case 128:
                    r0 = global;
                    r2 = r0.TypeError;
                    r0 = r0.HermesInternal;
                    r3 = r0.concat;
                    r1 = "Failed to execute 'substringData' on 'CharacterData': The offset ";
                    r0 = ' is negative.';
                    r10 = r3.bind(r1)(r4, r0);
                    r1 = r2.prototype;
                    r1 = Object.create(r1, {constructor: {value: r2}});
                    r11 = r1;
                    r0 = new r11[r2](r10, r9);
                    r0 = r0 instanceof Object ? r0 : r1;
                    throw r0;
                }
            };
            r4['value'] = r5;
            r0[6] = r4;
            r0 = r1.bind(r2)(r3, r0);
            return r0;
        };
        r1 = r1.bind(r0)(r3);
        r2['default'] = r1;
        return r0;
    };
    r6 = 130;
    r5 = [1, 12, 13, 23, 25, 28, 72, 76, 81, 77];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r6 = a1;
        r2 = a5;
        r7 = a6;
        r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r1
            _fun1487: for(var _fun1487_ip = 0; ; ) switch(_fun1487_ip) {
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
                r0 = _closure1_slot7;
                r0 = r0.bind(r2)();
                if(r0) { _fun1487_ip = 61; continue _fun1487 }
case 48:
                r0 = r8.apply;
                r0 = r0.bind(r8)(r3, r5);
                _fun1487_ip = 107; continue _fun1487;
case 61:
                r6 = global;
                r7 = r6.Reflect;
                r6 = r7.construct;
                if(r5) { _fun1487_ip = 81; continue _fun1487 }
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
        var _closure1_slot6 = r0;
        r0 = function() { // Original name: _isNativeReflectConstruct, environment: r1
            _fun1488: for(var _fun1488_ip = 0; ; ) switch(_fun1488_ip) {
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
                _fun1488_ip = 74; continue _fun1488;
case 72: // catch_target0
                CatchBlockStart(arg_register=1);
case 74:
                r1 = function() { // Original name: _isNativeReflectConstruct, environment: r0
                    r0 = _closure2_slot0;
                    r0 = !r0;
                    r0 = !r0;
                    return r0;
                };
                _closure1_slot7 = r1;
                r0 = undefined;
                r0 = r1.bind(r0)();
                return r0;
            }
        };
        var _closure1_slot7 = r0;
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
        r3 = r3.default;
        r1 = function(a0) { // Environment: r1
            r3 = function() { // Original name: ReadOnlyText, environment: r5
                r4 = this;
                r3 = undefined;
                r0 = undefined;
                r2 = _closure1_slot0;
                r5 = r2.default;
                r2 = _closure2_slot0;
                r5 = r5.bind(r3)(r4, r2);
                r1 = _closure1_slot6;
                r0 = arguments;
                r0 = r1.bind(r3)(r4, r2, r0);
                return r0;
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
            r0 = 'nodeName';
            r4['key'] = r0;
            r0 = function() { // Original name: get, environment: r5
                r0 = '#text';
                return r0;
            };
            r4['get'] = r0;
            r0 = new Array(2);
            r0[0] = r4;
            r4 = {};
            r6 = 'nodeType';
            r4['key'] = r6;
            r5 = function() { // Original name: get, environment: r5
                r0 = _closure1_slot5;
                r0 = r0.default;
                r0 = r0.TEXT_NODE;
                return r0;
            };
            r4['get'] = r5;
            r0[1] = r4;
            r0 = r1.bind(r2)(r3, r0);
            return r0;
        };
        r1 = r1.bind(r0)(r3);
        r2['default'] = r1;
        return r0;
    };
    r6 = 131;
    r5 = [1, 12, 13, 23, 25, 28, 130, 72];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun1495: for(var _fun1495_ip = 0; ; ) switch(_fun1495_ip) {
case 0:
            r2 = a0;
            r6 = a1;
            r7 = a6;
            var _closure1_slot0 = r2;
            r0 = 0;
            r1 = r7[r0];
            r0 = undefined;
            r5 = r6.bind(r0)(r1);
            r1 = 1;
            r1 = r7[r1];
            r1 = r6.bind(r0)(r1);
            r1 = r5.bind(r0)(r1);
            r3 = 2;
            r3 = r7[r3];
            r3 = r6.bind(r0)(r3);
            r3 = r5.bind(r0)(r3);
            r3 = r3.default;
            if(r3) { _fun1495_ip = 117; continue _fun1495 }
case 70:
            r3 = r2.performance;
            if(r3) { _fun1495_ip = 148; continue _fun1495 }
case 78:
            r3 = {};
            r5 = function() { // Original name: mark, environment: r4
                r0 = undefined;
                return r0;
            };
            r3['mark'] = r5;
            r5 = function() { // Original name: measure, environment: r4
                r0 = undefined;
                return r0;
            };
            r3['measure'] = r5;
            r4 = function() { // Original name: now, environment: r4
                _fun1498: for(var _fun1498_ip = 0; ; ) switch(_fun1498_ip) {
case 0:
                    r0 = _closure1_slot0;
                    r1 = r0.nativePerformanceNow;
                    if(r1) { _fun1498_ip = 29; continue _fun1498 }
case 16:
                    r0 = global;
                    r0 = r0.Date;
                    r1 = r0.now;
case 29:
                    r0 = undefined;
                    r0 = r1.bind(r0)();
                    return r0;
                }
            };
            r3['now'] = r4;
            r2['performance'] = r3;
            _fun1495_ip = 148; continue _fun1495;
case 117:
            r1 = r1.default;
            r3 = r1.prototype;
            r3 = Object.create(r3, {constructor: {value: r1}});
            r9 = r3;
            r1 = new r9[r1](r8);
            r1 = r1 instanceof Object ? r1 : r3;
            r2['performance'] = r1;
case 148:
            return r0;
        }
    };
    r6 = 132;
    r5 = [1, 133, 137];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun1499: for(var _fun1499_ip = 0; ; ) switch(_fun1499_ip) {
case 0:
            r5 = a1;
            r2 = a5;
            r6 = a6;
            var _closure1_slot0 = r5;
            var _closure1_slot1 = r6;
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
            r5 = r4.bind(r0)(r3);
            var _closure1_slot7 = r5;
            r3 = r5.default;
            r4 = null;
            r6 = r3 == r4;
            r3 = undefined;
            if(r6) { _fun1499_ip = 239; continue _fun1499 }
case 229:
            r5 = r5.default;
            r3 = r5.now;
case 239:
            if(!(r3 == r4)) { _fun1499_ip = 252; continue _fun1499 }
case 243:
            r5 = a0;
            r3 = r5.nativePerformanceNow;
case 252:
            if(!(r3 == r4)) { _fun1499_ip = 261; continue _fun1499 }
case 256:
            r3 = function() { // Environment: r1
                r0 = global;
                r1 = r0.Date;
                r0 = r1.now;
                r0 = r0.bind(r1)();
                return r0;
            };
case 261:
            var _closure1_slot8 = r3;
            r3 = ['mark', 'measure'];
            var _closure1_slot9 = r3;
            r1 = function() { // Environment: r1
                r3 = function() { // Original name: Performance, environment: r4
                    r2 = this;
                    r0 = _closure1_slot3;
                    r4 = r0.default;
                    r3 = _closure2_slot0;
                    r0 = undefined;
                    r3 = r4.bind(r0)(r2, r3);
                    r3 = _closure1_slot0;
                    r4 = _closure1_slot1;
                    r1 = 8;
                    r1 = r4[r1];
                    r1 = r3.bind(r0)(r1);
                    r1 = r1.EventCounts;
                    r3 = r1.prototype;
                    r3 = Object.create(r3, {constructor: {value: r1}});
                    r7 = r3;
                    r1 = new r7[r1](r6);
                    r1 = r1 instanceof Object ? r1 : r3;
                    r2['eventCounts'] = r1;
                    return r0;
                };
                var _closure2_slot0 = r3;
                r0 = _closure1_slot4;
                r2 = r0.default;
                r0 = {};
                r1 = 'memory';
                r0['key'] = r1;
                r1 = function() { // Original name: get, environment: r4
                    _fun1503: for(var _fun1503_ip = 0; ; ) switch(_fun1503_ip) {
case 0:
                        r1 = _closure1_slot7;
                        r1 = r1.default;
                        r4 = null;
                        if(!(r1 != r4)) { _fun1503_ip = 36; continue _fun1503 }
case 18:
                        r1 = _closure1_slot7;
                        r1 = r1.default;
                        r1 = r1.getSimpleMemoryInfo;
                        if(r1) { _fun1503_ip = 67; continue _fun1503 }
case 36:
                        r1 = _closure1_slot5;
                        r1 = r1.default;
                        r2 = r1.prototype;
                        r2 = Object.create(r2, {constructor: {value: r1}});
                        r6 = r2;
                        r1 = new r6[r1](r5);
                        r1 = r1 instanceof Object ? r1 : r2;
                        return r1;
case 67:
                        r1 = _closure1_slot7;
                        r2 = r1.default;
                        r1 = r2.getSimpleMemoryInfo;
                        r1 = r1.bind(r2)();
                        r3 = r1.hasOwnProperty;
                        r2 = 'hermes_heapSize';
                        r2 = r3.bind(r1)(r2);
                        if(r2) { _fun1503_ip = 134; continue _fun1503 }
case 103:
                        r2 = _closure1_slot5;
                        r2 = r2.default;
                        r3 = r2.prototype;
                        r3 = Object.create(r3, {constructor: {value: r2}});
                        r6 = r3;
                        r2 = new r6[r2](r5);
                        r2 = r2 instanceof Object ? r2 : r3;
                        return r2;
case 134:
                        r3 = r1.hermes_heapSize;
                        r1 = r1.hermes_allocatedBytes;
                        r0 = _closure1_slot5;
                        r2 = r0.default;
                        r0 = {};
                        r0['jsHeapSizeLimit'] = r4;
                        r0['totalJSHeapSize'] = r3;
                        r0['usedJSHeapSize'] = r1;
                        r1 = r2.prototype;
                        r1 = Object.create(r1, {constructor: {value: r2}});
                        r6 = r1;
                        r5 = r0;
                        r0 = new r6[r2](r5, r4);
                        r0 = r0 instanceof Object ? r0 : r1;
                        return r0;
                    }
                };
                r0['get'] = r1;
                r1 = new Array(10);
                r1[0] = r0;
                r0 = {};
                r5 = 'rnStartupTiming';
                r0['key'] = r5;
                r5 = function() { // Original name: get, environment: r4
                    _fun1504: for(var _fun1504_ip = 0; ; ) switch(_fun1504_ip) {
case 0:
                        r1 = _closure1_slot7;
                        r2 = r1.default;
                        r1 = null;
                        if(!(r2 != r1)) { _fun1504_ip = 36; continue _fun1504 }
case 18:
                        r1 = _closure1_slot7;
                        r1 = r1.default;
                        r1 = r1.getReactNativeStartupTiming;
                        if(r1) { _fun1504_ip = 67; continue _fun1504 }
case 36:
                        r1 = _closure1_slot6;
                        r1 = r1.default;
                        r2 = r1.prototype;
                        r2 = Object.create(r2, {constructor: {value: r1}});
                        r9 = r2;
                        r1 = new r9[r1](r8);
                        r1 = r1 instanceof Object ? r1 : r2;
                        return r1;
case 67:
                        r1 = _closure1_slot7;
                        r2 = r1.default;
                        r1 = r2.getReactNativeStartupTiming;
                        r1 = r1.bind(r2)();
                        r7 = r1.startTime;
                        r6 = r1.endTime;
                        r5 = r1.initializeRuntimeStart;
                        r4 = r1.initializeRuntimeEnd;
                        r3 = r1.executeJavaScriptBundleEntryPointStart;
                        r1 = r1.executeJavaScriptBundleEntryPointEnd;
                        r0 = _closure1_slot6;
                        r2 = r0.default;
                        r0 = {};
                        r0['startTime'] = r7;
                        r0['endTime'] = r6;
                        r0['initializeRuntimeStart'] = r5;
                        r0['initializeRuntimeEnd'] = r4;
                        r0['executeJavaScriptBundleEntryPointStart'] = r3;
                        r0['executeJavaScriptBundleEntryPointEnd'] = r1;
                        r1 = r2.prototype;
                        r1 = Object.create(r1, {constructor: {value: r2}});
                        r9 = r1;
                        r8 = r0;
                        r0 = new r9[r2](r8, r7);
                        r0 = r0 instanceof Object ? r0 : r1;
                        return r0;
                    }
                };
                r0['get'] = r5;
                r1[1] = r0;
                r0 = {};
                r5 = 'mark';
                r0['key'] = r5;
                r5 = function(a0, a1) { // Original name: mark, environment: r4
                    _fun1505: for(var _fun1505_ip = 0; ; ) switch(_fun1505_ip) {
case 0:
                        r3 = a0;
                        r4 = a1;
                        r1 = _closure1_slot7;
                        r1 = r1.default;
                        r5 = null;
                        if(!(r1 != r5)) { _fun1505_ip = 42; continue _fun1505 }
case 24:
                        r1 = _closure1_slot7;
                        r1 = r1.default;
                        r1 = r1.markWithResult;
                        if(r1) { _fun1505_ip = 93; continue _fun1505 }
case 42:
                        r6 = _closure1_slot0;
                        r2 = _closure1_slot1;
                        r1 = 9;
                        r1 = r2[r1];
                        r2 = undefined;
                        r1 = r6.bind(r2)(r1);
                        r1 = r1.warnNoNativePerformance;
                        r1 = r1.bind(r2)();
                        r1 = global;
                        r2 = r1.performance;
                        r1 = r2.now;
                        r6 = r1.bind(r2)();
                        _fun1505_ip = 128; continue _fun1505;
case 93:
                        r1 = _closure1_slot7;
                        r7 = r1.default;
                        r2 = r7.markWithResult;
                        r8 = r4 == r5;
                        r1 = undefined;
                        if(r8) { _fun1505_ip = 122; continue _fun1505 }
case 117:
                        r1 = r4.startTime;
case 122:
                        r6 = r2.bind(r7)(r3, r1);
case 128:
                        r2 = _closure1_slot0;
                        r1 = _closure1_slot1;
                        r0 = 10;
                        r0 = r1[r0];
                        r1 = undefined;
                        r0 = r2.bind(r1)(r0);
                        r2 = r0.PerformanceMark;
                        r0 = {};
                        r0['startTime'] = r6;
                        r5 = r4 == r5;
                        if(r5) { _fun1505_ip = 175; continue _fun1505 }
case 169:
                        r1 = r4.detail;
case 175:
                        r0['detail'] = r1;
                        r1 = r2.prototype;
                        r1 = Object.create(r1, {constructor: {value: r2}});
                        r11 = r1;
                        r10 = r3;
                        r9 = r0;
                        r0 = new r11[r2](r10, r9, r8);
                        r0 = r0 instanceof Object ? r0 : r1;
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[2] = r0;
                r0 = {};
                r5 = 'clearMarks';
                r0['key'] = r5;
                r5 = function(a0) { // Original name: clearMarks, environment: r4
                    _fun1506: for(var _fun1506_ip = 0; ; ) switch(_fun1506_ip) {
case 0:
                        r1 = _closure1_slot7;
                        r2 = r1.default;
                        r1 = null;
                        if(!(r2 != r1)) { _fun1506_ip = 36; continue _fun1506 }
case 18:
                        r1 = _closure1_slot7;
                        r1 = r1.default;
                        r1 = r1.clearMarks;
                        if(r1) { _fun1506_ip = 70; continue _fun1506 }
case 36:
                        r3 = _closure1_slot0;
                        r2 = _closure1_slot1;
                        r1 = 9;
                        r2 = r2[r1];
                        r1 = undefined;
                        r2 = r3.bind(r1)(r2);
                        r2 = r2.warnNoNativePerformance;
                        r2 = r2.bind(r1)();
                        return r1;
case 70:
                        r0 = _closure1_slot7;
                        r2 = r0.default;
                        r1 = r2.clearMarks;
                        r0 = a0;
                        r0 = r1.bind(r2)(r0);
                        r0 = undefined;
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[3] = r0;
                r0 = {};
                r5 = 'measure';
                r0['key'] = r5;
                r5 = function(a0, a1, a2) { // Original name: measure, environment: r4
                    _fun1507: for(var _fun1507_ip = 0; ; ) switch(_fun1507_ip) {
case 0:
                        r3 = a0;
                        r5 = a1;
                        r2 = a2;
                        r1 = typeof r5;
                        r0 = 'string';
                        if(!(r1 !== r0)) { _fun1507_ip = 307; continue _fun1507 }
case 23:
                        r6 = undefined;
                        r4 = undefined;
                        r12 = undefined;
                        r11 = r2;
                        r10 = 0;
                        r9 = 0;
                        r8 = undefined;
                        if(!(r5 !== r8)) { _fun1507_ip = 321; continue _fun1507 }
case 45:
                        if(!(r2 === r6)) { _fun1507_ip = 273; continue _fun1507 }
case 52:
                        r1 = r5.start;
                        if(!(r1 === r6)) { _fun1507_ip = 74; continue _fun1507 }
case 61:
                        r1 = r5.end;
                        if(!(r1 !== r6)) { _fun1507_ip = 239; continue _fun1507 }
case 74:
                        r1 = r5.start;
                        if(!(r1 !== r6)) { _fun1507_ip = 102; continue _fun1507 }
case 83:
                        r1 = r5.end;
                        if(!(r1 !== r6)) { _fun1507_ip = 102; continue _fun1507 }
case 93:
                        r1 = r5.duration;
                        if(!(r1 === r6)) { _fun1507_ip = 205; continue _fun1507 }
case 102:
                        r1 = r5.start;
                        r1 = typeof r1;
                        r14 = 'number';
                        if(!(r1 !== r14)) { _fun1507_ip = 127; continue _fun1507 }
case 118:
                        r13 = r5.start;
                        r1 = 0;
                        _fun1507_ip = 134; continue _fun1507;
case 127:
                        r1 = r5.start;
                        r13 = undefined;
case 134:
                        r7 = r5.end;
                        r7 = typeof r7;
                        if(!(r7 !== r14)) { _fun1507_ip = 157; continue _fun1507 }
case 147:
                        r7 = r5.end;
                        r0 = 0;
                        _fun1507_ip = 166; continue _fun1507;
case 157:
                        r0 = r5.end;
                        r7 = r2;
case 166:
                        r14 = r5.duration;
                        r15 = null;
                        r15 = r14 != r15;
                        r6 = undefined;
                        if(!r15) { _fun1507_ip = 185; continue _fun1507 }
case 182:
                        r6 = r14;
case 185:
                        r8 = r6;
                        r4 = r5;
                        r12 = r13;
                        r11 = r7;
                        r10 = r1;
                        r9 = r0;
                        _fun1507_ip = 321; continue _fun1507;
case 205:
                        r0 = global;
                        r6 = r0.TypeError;
                        r0 = r6.prototype;
                        r1 = Object.create(r0, {constructor: {value: r6}});
                        r21 = "Performance.measure: Can't have both start/end and duration explicitly in options";
                        r22 = r1;
                        r0 = new r22[r6](r21, r20);
                        r0 = r0 instanceof Object ? r0 : r1;
                        throw r0;
case 239:
                        r0 = global;
                        r6 = r0.TypeError;
                        r0 = r6.prototype;
                        r1 = Object.create(r0, {constructor: {value: r6}});
                        r21 = 'Performance.measure: Must have at least one of start/end specified in options';
                        r22 = r1;
                        r0 = new r22[r6](r21, r20);
                        r0 = r0 instanceof Object ? r0 : r1;
                        throw r0;
case 273:
                        r0 = global;
                        r6 = r0.TypeError;
                        r0 = r6.prototype;
                        r1 = Object.create(r0, {constructor: {value: r6}});
                        r21 = "Performance.measure: Can't have both options and endMark";
                        r22 = r1;
                        r0 = new r22[r6](r21, r20);
                        r0 = r0 instanceof Object ? r0 : r1;
                        throw r0;
case 307:
                        r4 = {};
                        r8 = undefined;
                        r10 = 0;
                        r12 = r5;
                        r11 = r2;
                        r9 = 0;
case 321:
                        r1 = _closure1_slot7;
                        r1 = r1.default;
                        r5 = null;
                        if(!(r1 != r5)) { _fun1507_ip = 357; continue _fun1507 }
case 339:
                        r1 = _closure1_slot7;
                        r1 = r1.default;
                        r1 = r1.measureWithResult;
                        if(r1) { _fun1507_ip = 397; continue _fun1507 }
case 357:
                        r6 = _closure1_slot0;
                        r2 = _closure1_slot1;
                        r1 = 9;
                        r1 = r2[r1];
                        r2 = undefined;
                        r1 = r6.bind(r2)(r1);
                        r1 = r1.warnNoNativePerformance;
                        r1 = r1.bind(r2)();
                        r6 = r10;
                        r7 = r8;
                        _fun1507_ip = 470; continue _fun1507;
case 397:
                        r1 = _closure1_slot7;
                        r2 = r1.default;
                        r1 = r2.measureWithResult;
                        r22 = r2;
                        r21 = r3;
                        r20 = r10;
                        r19 = r9;
                        r18 = r8;
                        r17 = r12;
                        r16 = r11;
                        r9 = r22[r1](r21, r20, r19, r18, r17, r16, r15);
                        r1 = _closure1_slot2;
                        r8 = r1.default;
                        r2 = undefined;
                        r1 = 2;
                        r8 = r8.bind(r2)(r9, r1);
                        r1 = 0;
                        r6 = r8[r1];
                        r1 = 1;
                        r7 = r8[r1];
case 470:
                        r2 = _closure1_slot0;
                        r1 = _closure1_slot1;
                        r0 = 10;
                        r0 = r1[r0];
                        r1 = undefined;
                        r0 = r2.bind(r1)(r0);
                        r2 = r0.PerformanceMeasure;
                        r0 = {};
                        r0['startTime'] = r6;
                        r8 = r7 != r5;
                        r6 = 0;
                        if(!r8) { _fun1507_ip = 516; continue _fun1507 }
case 513:
                        r6 = r7;
case 516:
                        r0['duration'] = r6;
                        r5 = r4 == r5;
                        r1 = undefined;
                        if(r5) { _fun1507_ip = 535; continue _fun1507 }
case 529:
                        r1 = r4.detail;
case 535:
                        r0['detail'] = r1;
                        r1 = r2.prototype;
                        r1 = Object.create(r1, {constructor: {value: r2}});
                        r22 = r1;
                        r21 = r3;
                        r20 = r0;
                        r0 = new r22[r2](r21, r20, r19);
                        r0 = r0 instanceof Object ? r0 : r1;
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[4] = r0;
                r0 = {};
                r5 = 'clearMeasures';
                r0['key'] = r5;
                r5 = function(a0) { // Original name: clearMeasures, environment: r4
                    _fun1508: for(var _fun1508_ip = 0; ; ) switch(_fun1508_ip) {
case 0:
                        r1 = _closure1_slot7;
                        r1 = r1.default;
                        r2 = null;
                        if(!(r1 != r2)) { _fun1508_ip = 36; continue _fun1508 }
case 18:
                        r1 = _closure1_slot7;
                        r1 = r1.default;
                        r1 = r1.clearMeasures;
                        if(r1) { _fun1508_ip = 70; continue _fun1508 }
case 36:
                        r4 = _closure1_slot0;
                        r3 = _closure1_slot1;
                        r1 = 9;
                        r3 = r3[r1];
                        r1 = undefined;
                        r3 = r4.bind(r1)(r3);
                        r3 = r3.warnNoNativePerformance;
                        r3 = r3.bind(r1)();
                        return r1;
case 70:
                        r1 = _closure1_slot7;
                        r1 = r1.default;
                        if(!(r1 != r2)) { _fun1508_ip = 106; continue _fun1508 }
case 83:
                        r0 = _closure1_slot7;
                        r2 = r0.default;
                        r1 = r2.clearMeasures;
                        r0 = a0;
                        r0 = r1.bind(r2)(r0);
case 106:
                        r0 = undefined;
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[5] = r0;
                r0 = {};
                r5 = 'now';
                r0['key'] = r5;
                r5 = function() { // Original name: now, environment: r4
                    r1 = _closure1_slot8;
                    r0 = undefined;
                    r0 = r1.bind(r0)();
                    return r0;
                };
                r0['value'] = r5;
                r1[6] = r0;
                r0 = {};
                r5 = 'getEntries';
                r0['key'] = r5;
                r5 = function() { // Original name: getEntries, environment: r4
                    _fun1510: for(var _fun1510_ip = 0; ; ) switch(_fun1510_ip) {
case 0:
                        r1 = _closure1_slot7;
                        r2 = r1.default;
                        r1 = null;
                        if(!(r2 != r1)) { _fun1510_ip = 36; continue _fun1510 }
case 18:
                        r1 = _closure1_slot7;
                        r1 = r1.default;
                        r1 = r1.getEntries;
                        if(r1) { _fun1510_ip = 74; continue _fun1510 }
case 36:
                        r3 = _closure1_slot0;
                        r2 = _closure1_slot1;
                        r1 = 9;
                        r1 = r2[r1];
                        r2 = undefined;
                        r1 = r3.bind(r2)(r1);
                        r1 = r1.warnNoNativePerformance;
                        r1 = r1.bind(r2)();
                        r1 = new Array(0);
                        return r1;
case 74:
                        r1 = _closure1_slot7;
                        r2 = r1.default;
                        r1 = r2.getEntries;
                        r2 = r1.bind(r2)();
                        r1 = r2.map;
                        r4 = _closure1_slot0;
                        r3 = _closure1_slot1;
                        r0 = 11;
                        r3 = r3[r0];
                        r0 = undefined;
                        r0 = r4.bind(r0)(r3);
                        r0 = r0.rawToPerformanceEntry;
                        r0 = r1.bind(r2)(r0);
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[7] = r0;
                r0 = {};
                r5 = 'getEntriesByType';
                r0['key'] = r5;
                r5 = function(a0) { // Original name: getEntriesByType, environment: r4
                    _fun1511: for(var _fun1511_ip = 0; ; ) switch(_fun1511_ip) {
case 0:
                        r7 = a0;
                        r2 = null;
                        if(!(r7 != r2)) { _fun1511_ip = 58; continue _fun1511 }
case 9:
                        r1 = _closure1_slot9;
                        r0 = r1.includes;
                        r0 = r0.bind(r1)(r7);
                        if(r0) { _fun1511_ip = 58; continue _fun1511 }
case 30:
                        r0 = global;
                        r3 = r0.console;
                        r1 = r3.warn;
                        r0 = 'Deprecated API for given entry type.';
                        r0 = r1.bind(r3)(r0);
                        r0 = new Array(0);
                        return r0;
case 58:
                        r1 = _closure1_slot7;
                        r1 = r1.default;
                        if(!(r1 != r2)) { _fun1511_ip = 92; continue _fun1511 }
case 74:
                        r1 = _closure1_slot7;
                        r1 = r1.default;
                        r1 = r1.getEntriesByType;
                        if(r1) { _fun1511_ip = 130; continue _fun1511 }
case 92:
                        r3 = _closure1_slot0;
                        r2 = _closure1_slot1;
                        r1 = 9;
                        r1 = r2[r1];
                        r2 = undefined;
                        r1 = r3.bind(r2)(r1);
                        r1 = r1.warnNoNativePerformance;
                        r1 = r1.bind(r2)();
                        r1 = new Array(0);
                        return r1;
case 130:
                        r1 = _closure1_slot7;
                        r6 = r1.default;
                        r2 = r6.getEntriesByType;
                        r4 = _closure1_slot0;
                        r5 = _closure1_slot1;
                        r0 = 11;
                        r1 = r5[r0];
                        r3 = undefined;
                        r1 = r4.bind(r3)(r1);
                        r1 = r1.performanceEntryTypeToRaw;
                        r1 = r1.bind(r3)(r7);
                        r2 = r2.bind(r6)(r1);
                        r1 = r2.map;
                        r0 = r5[r0];
                        r0 = r4.bind(r3)(r0);
                        r0 = r0.rawToPerformanceEntry;
                        r0 = r1.bind(r2)(r0);
                        return r0;
                    }
                };
                r0['value'] = r5;
                r1[8] = r0;
                r0 = {};
                r5 = 'getEntriesByName';
                r0['key'] = r5;
                r4 = function(a0, a1) { // Original name: getEntriesByName, environment: r4
                    _fun1512: for(var _fun1512_ip = 0; ; ) switch(_fun1512_ip) {
case 0:
                        r6 = a1;
                        r1 = null;
                        if(!(r6 != r1)) { _fun1512_ip = 58; continue _fun1512 }
case 9:
                        r2 = _closure1_slot9;
                        r0 = r2.includes;
                        r0 = r0.bind(r2)(r6);
                        if(r0) { _fun1512_ip = 58; continue _fun1512 }
case 30:
                        r0 = global;
                        r3 = r0.console;
                        r2 = r3.warn;
                        r0 = 'Deprecated API for given entry type.';
                        r0 = r2.bind(r3)(r0);
                        r0 = new Array(0);
                        return r0;
case 58:
                        r2 = _closure1_slot7;
                        r2 = r2.default;
                        if(!(r2 != r1)) { _fun1512_ip = 92; continue _fun1512 }
case 74:
                        r2 = _closure1_slot7;
                        r2 = r2.default;
                        r2 = r2.getEntriesByName;
                        if(r2) { _fun1512_ip = 130; continue _fun1512 }
case 92:
                        r4 = _closure1_slot0;
                        r3 = _closure1_slot1;
                        r2 = 9;
                        r2 = r3[r2];
                        r3 = undefined;
                        r2 = r4.bind(r3)(r2);
                        r2 = r2.warnNoNativePerformance;
                        r2 = r2.bind(r3)();
                        r2 = new Array(0);
                        return r2;
case 130:
                        r2 = _closure1_slot7;
                        r5 = r2.default;
                        r3 = r5.getEntriesByName;
                        r1 = r6 != r1;
                        r4 = undefined;
                        r2 = undefined;
                        if(!r1) { _fun1512_ip = 187; continue _fun1512 }
case 156:
                        r7 = _closure1_slot0;
                        r8 = _closure1_slot1;
                        r1 = 11;
                        r1 = r8[r1];
                        r1 = r7.bind(r4)(r1);
                        r1 = r1.performanceEntryTypeToRaw;
                        r2 = r1.bind(r4)(r6);
case 187:
                        r1 = a0;
                        r2 = r3.bind(r5)(r1, r2);
                        r1 = r2.map;
                        r3 = _closure1_slot0;
                        r5 = _closure1_slot1;
                        r0 = 11;
                        r0 = r5[r0];
                        r0 = r3.bind(r4)(r0);
                        r0 = r0.rawToPerformanceEntry;
                        r0 = r1.bind(r2)(r0);
                        return r0;
                    }
                };
                r0['value'] = r4;
                r1[9] = r0;
                r0 = undefined;
                r0 = r2.bind(r0)(r3, r1);
                return r0;
            };
            r1 = r1.bind(r0)();
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 133;
    r5 = [1, 134, 38, 12, 13, 135, 136, 137, 138, 140, 142, 143];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r0 = a4;
        r1 = function(a0) { // Original name: _readOnlyError, environment: r1
            r0 = global;
            r2 = r0.TypeError;
            r1 = '"';
            r0 = a0;
            r3 = r1 + r0;
            r0 = r2.prototype;
            r1 = Object.create(r0, {constructor: {value: r2}});
            r0 = '" is read-only';
            r4 = r3 + r0;
            r5 = r1;
            r0 = new r5[r2](r4, r3);
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
    r6 = 134;
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
        r3 = 3;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        var _closure1_slot2 = r3;
        r3 = 4;
        r3 = r6[r3];
        r3 = r5.bind(r0)(r3);
        r3 = r4.bind(r0)(r3);
        r5 = r3.default;
        r4 = 'jsHeapSizeLimit';
        r4 = r5.bind(r0)(r4);
        var _closure1_slot3 = r4;
        r5 = r3.default;
        r4 = 'totalJSHeapSize';
        r4 = r5.bind(r0)(r4);
        var _closure1_slot4 = r4;
        r4 = r3.default;
        r3 = 'usedJSHeapSize';
        r3 = r4.bind(r0)(r3);
        var _closure1_slot5 = r3;
        r1 = function() { // Environment: r1
            r3 = function(a0) { // Original name: MemoryInfo, environment: r4
                _fun1517: for(var _fun1517_ip = 0; ; ) switch(_fun1517_ip) {
case 0:
                    r1 = a0;
                    r4 = this;
                    r0 = _closure1_slot0;
                    r5 = r0.default;
                    r2 = _closure2_slot0;
                    r0 = undefined;
                    r2 = r5.bind(r0)(r4, r2);
                    r2 = global;
                    r9 = r2.Object;
                    r7 = r9.defineProperty;
                    r6 = _closure1_slot3;
                    r5 = {};
                    r8 = true;
                    r5['writable'] = r8;
                    r5['value'] = r0;
                    r5 = r7.bind(r9)(r4, r6, r5);
                    r9 = r2.Object;
                    r7 = r9.defineProperty;
                    r6 = _closure1_slot4;
                    r5 = {};
                    r5['writable'] = r8;
                    r5['value'] = r0;
                    r5 = r7.bind(r9)(r4, r6, r5);
                    r7 = r2.Object;
                    r6 = r7.defineProperty;
                    r5 = _closure1_slot5;
                    r2 = {};
                    r2['writable'] = r8;
                    r2['value'] = r0;
                    r2 = r6.bind(r7)(r4, r5, r2);
                    r2 = null;
                    if(!(r1 != r2)) { _fun1517_ip = 217; continue _fun1517 }
case 138:
                    r2 = _closure1_slot2;
                    r5 = r2.default;
                    r7 = _closure1_slot3;
                    r6 = r5.bind(r0)(r4, r7);
                    r5 = r1.jsHeapSizeLimit;
                    r6[r7] = r5;
                    r5 = r2.default;
                    r7 = _closure1_slot4;
                    r6 = r5.bind(r0)(r4, r7);
                    r5 = r1.totalJSHeapSize;
                    r6[r7] = r5;
                    r2 = r2.default;
                    r3 = _closure1_slot5;
                    r2 = r2.bind(r0)(r4, r3);
                    r1 = r1.usedJSHeapSize;
                    r2[r3] = r1;
case 217:
                    return r0;
                }
            };
            var _closure2_slot0 = r3;
            r0 = _closure1_slot1;
            r2 = r0.default;
            r0 = {};
            r1 = 'jsHeapSizeLimit';
            r0['key'] = r1;
            r1 = function() { // Original name: get, environment: r4
                r1 = _closure1_slot2;
                r3 = r1.default;
                r1 = _closure1_slot3;
                r2 = undefined;
                r0 = this;
                r0 = r3.bind(r2)(r0, r1);
                r0 = r0[r1];
                return r0;
            };
            r0['get'] = r1;
            r1 = new Array(3);
            r1[0] = r0;
            r0 = {};
            r5 = 'totalJSHeapSize';
            r0['key'] = r5;
            r5 = function() { // Original name: get, environment: r4
                r1 = _closure1_slot2;
                r3 = r1.default;
                r1 = _closure1_slot4;
                r2 = undefined;
                r0 = this;
                r0 = r3.bind(r2)(r0, r1);
                r0 = r0[r1];
                return r0;
            };
            r0['get'] = r5;
            r1[1] = r0;
            r0 = {};
            r5 = 'usedJSHeapSize';
            r0['key'] = r5;
            r4 = function() { // Original name: get, environment: r4
                r1 = _closure1_slot2;
                r3 = r1.default;
                r1 = _closure1_slot5;
                r2 = undefined;
                r0 = this;
                r0 = r3.bind(r2)(r0, r1);
                r0 = r0[r1];
                return r0;
            };
            r0['get'] = r4;
            r1[2] = r0;
            r0 = undefined;
            r0 = r2.bind(r0)(r3, r1);
            return r0;
        };
        r1 = r1.bind(r0)();
        r2['default'] = r1;
        return r0;
    };
    r6 = 135;
    r5 = [1, 12, 13, 31, 32];
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
        r5 = r3.default;
        r4 = 'startTime';
        r4 = r5.bind(r0)(r4);
        var _closure1_slot3 = r4;
        r5 = r3.default;
        r4 = 'endTime';
        r4 = r5.bind(r0)(r4);
        var _closure1_slot4 = r4;
        r5 = r3.default;
        r4 = 'initializeRuntimeStart';
        r4 = r5.bind(r0)(r4);
        var _closure1_slot5 = r4;
        r5 = r3.default;
        r4 = 'initializeRuntimeEnd';
        r4 = r5.bind(r0)(r4);
        var _closure1_slot6 = r4;
        r5 = r3.default;
        r4 = 'executeJavaScriptBundleEntryPointStart';
        r4 = r5.bind(r0)(r4);
        var _closure1_slot7 = r4;
        r4 = r3.default;
        r3 = 'executeJavaScriptBundleEntryPointEnd';
        r3 = r4.bind(r0)(r3);
        var _closure1_slot8 = r3;
        r1 = function() { // Environment: r1
            r3 = function(a0) { // Original name: ReactNativeStartupTiming, environment: r4
                _fun1523: for(var _fun1523_ip = 0; ; ) switch(_fun1523_ip) {
case 0:
                    r1 = a0;
                    r4 = this;
                    r0 = _closure1_slot0;
                    r5 = r0.default;
                    r2 = _closure2_slot0;
                    r0 = undefined;
                    r2 = r5.bind(r0)(r4, r2);
                    r2 = global;
                    r9 = r2.Object;
                    r7 = r9.defineProperty;
                    r6 = _closure1_slot3;
                    r5 = {};
                    r8 = true;
                    r5['writable'] = r8;
                    r5['value'] = r0;
                    r5 = r7.bind(r9)(r4, r6, r5);
                    r9 = r2.Object;
                    r7 = r9.defineProperty;
                    r6 = _closure1_slot4;
                    r5 = {};
                    r5['writable'] = r8;
                    r5['value'] = r0;
                    r5 = r7.bind(r9)(r4, r6, r5);
                    r9 = r2.Object;
                    r7 = r9.defineProperty;
                    r6 = _closure1_slot5;
                    r5 = {};
                    r5['writable'] = r8;
                    r5['value'] = r0;
                    r5 = r7.bind(r9)(r4, r6, r5);
                    r9 = r2.Object;
                    r7 = r9.defineProperty;
                    r6 = _closure1_slot6;
                    r5 = {};
                    r5['writable'] = r8;
                    r5['value'] = r0;
                    r5 = r7.bind(r9)(r4, r6, r5);
                    r9 = r2.Object;
                    r7 = r9.defineProperty;
                    r6 = _closure1_slot7;
                    r5 = {};
                    r5['writable'] = r8;
                    r5['value'] = r0;
                    r5 = r7.bind(r9)(r4, r6, r5);
                    r7 = r2.Object;
                    r6 = r7.defineProperty;
                    r5 = _closure1_slot8;
                    r2 = {};
                    r2['writable'] = r8;
                    r2['value'] = r0;
                    r2 = r6.bind(r7)(r4, r5, r2);
                    r2 = null;
                    if(!(r1 != r2)) { _fun1523_ip = 390; continue _fun1523 }
case 237:
                    r2 = _closure1_slot2;
                    r5 = r2.default;
                    r7 = _closure1_slot3;
                    r6 = r5.bind(r0)(r4, r7);
                    r5 = r1.startTime;
                    r6[r7] = r5;
                    r5 = r2.default;
                    r7 = _closure1_slot4;
                    r6 = r5.bind(r0)(r4, r7);
                    r5 = r1.endTime;
                    r6[r7] = r5;
                    r5 = r2.default;
                    r7 = _closure1_slot5;
                    r6 = r5.bind(r0)(r4, r7);
                    r5 = r1.initializeRuntimeStart;
                    r6[r7] = r5;
                    r5 = r2.default;
                    r7 = _closure1_slot6;
                    r6 = r5.bind(r0)(r4, r7);
                    r5 = r1.initializeRuntimeEnd;
                    r6[r7] = r5;
                    r5 = r2.default;
                    r7 = _closure1_slot7;
                    r6 = r5.bind(r0)(r4, r7);
                    r5 = r1.executeJavaScriptBundleEntryPointStart;
                    r6[r7] = r5;
                    r2 = r2.default;
                    r3 = _closure1_slot8;
                    r2 = r2.bind(r0)(r4, r3);
                    r1 = r1.executeJavaScriptBundleEntryPointEnd;
                    r2[r3] = r1;
case 390:
                    return r0;
                }
            };
            var _closure2_slot0 = r3;
            r0 = _closure1_slot1;
            r2 = r0.default;
            r0 = {};
            r1 = 'startTime';
            r0['key'] = r1;
            r1 = function() { // Original name: get, environment: r4
                r1 = _closure1_slot2;
                r3 = r1.default;
                r1 = _closure1_slot3;
                r2 = undefined;
                r0 = this;
                r0 = r3.bind(r2)(r0, r1);
                r0 = r0[r1];
                return r0;
            };
            r0['get'] = r1;
            r1 = new Array(6);
            r1[0] = r0;
            r0 = {};
            r5 = 'endTime';
            r0['key'] = r5;
            r5 = function() { // Original name: get, environment: r4
                r1 = _closure1_slot2;
                r3 = r1.default;
                r1 = _closure1_slot4;
                r2 = undefined;
                r0 = this;
                r0 = r3.bind(r2)(r0, r1);
                r0 = r0[r1];
                return r0;
            };
            r0['get'] = r5;
            r1[1] = r0;
            r0 = {};
            r5 = 'initializeRuntimeStart';
            r0['key'] = r5;
            r5 = function() { // Original name: get, environment: r4
                r1 = _closure1_slot2;
                r3 = r1.default;
                r1 = _closure1_slot5;
                r2 = undefined;
                r0 = this;
                r0 = r3.bind(r2)(r0, r1);
                r0 = r0[r1];
                return r0;
            };
            r0['get'] = r5;
            r1[2] = r0;
            r0 = {};
            r5 = 'initializeRuntimeEnd';
            r0['key'] = r5;
            r5 = function() { // Original name: get, environment: r4
                r1 = _closure1_slot2;
                r3 = r1.default;
                r1 = _closure1_slot6;
                r2 = undefined;
                r0 = this;
                r0 = r3.bind(r2)(r0, r1);
                r0 = r0[r1];
                return r0;
            };
            r0['get'] = r5;
            r1[3] = r0;
            r0 = {};
            r5 = 'executeJavaScriptBundleEntryPointStart';
            r0['key'] = r5;
            r5 = function() { // Original name: get, environment: r4
                r1 = _closure1_slot2;
                r3 = r1.default;
                r1 = _closure1_slot7;
                r2 = undefined;
                r0 = this;
                r0 = r3.bind(r2)(r0, r1);
                r0 = r0[r1];
                return r0;
            };
            r0['get'] = r5;
            r1[4] = r0;
            r0 = {};
            r5 = 'executeJavaScriptBundleEntryPointEnd';
            r0['key'] = r5;
            r4 = function() { // Original name: get, environment: r4
                r1 = _closure1_slot2;
                r3 = r1.default;
                r1 = _closure1_slot8;
                r2 = undefined;
                r0 = this;
                r0 = r3.bind(r2)(r0, r1);
                r0 = r0[r1];
                return r0;
            };
            r0['get'] = r4;
            r1[5] = r0;
            r0 = undefined;
            r0 = r2.bind(r0)(r3, r1);
            return r0;
        };
        r1 = r1.bind(r0)();
        r2['default'] = r1;
        return r0;
    };
    r6 = 136;
    r5 = [1, 12, 13, 31, 32];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun1530: for(var _fun1530_ip = 0; ; ) switch(_fun1530_ip) {
case 0:
            r2 = a5;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun1531: for(var _fun1531_ip = 0; ; ) switch(_fun1531_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun1531_ip = 104; continue _fun1531 }
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
                        _fun1532: for(var _fun1532_ip = 0; ; ) switch(_fun1532_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun1532_ip = 15; continue _fun1532 }
case 9:
                            r0 = _closure2_slot0;
                            _fun1532_ip = 19; continue _fun1532;
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
            if(!r3) { _fun1530_ip = 88; continue _fun1530 }
case 74:
            r5 = r3.__esModule;
            r4 = r3;
            if(r5) { _fun1530_ip = 355; continue _fun1530 }
case 88:
            r14 = null;
            if(!(r14 !== r3)) { _fun1530_ip = 346; continue _fun1530 }
case 97:
            r6 = typeof r3;
            r5 = 'object';
            if(!(r5 !== r6)) { _fun1530_ip = 119; continue _fun1530 }
case 108:
            r5 = 'function';
            if(!(r5 === r6)) { _fun1530_ip = 346; continue _fun1530 }
case 119:
            r1 = _closure1_slot0;
            r5 = r1.bind(r0)(r0);
            if(!r5) { _fun1530_ip = 147; continue _fun1530 }
case 131:
            r1 = r5.has;
            r1 = r1.bind(r5)(r3);
            if(r1) { _fun1530_ip = 334; continue _fun1530 }
case 147:
            r1 = Object.create(r14);
            r6 = r15.Object;
            r13 = r6.defineProperty;
            if(!r13) { _fun1530_ip = 175; continue _fun1530 }
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
                if(r7 === r19) { _fun1530_ip = 192; continue _fun1530 }
case 208:
                r16 = {};
                r17 = r16.hasOwnProperty;
                r16 = r17.call;
                r16 = r16.bind(r17)(r3, r19);
                if(!r16) { _fun1530_ip = 192; continue _fun1530 }
case 229:
                r16 = null;
                if(!r13) { _fun1530_ip = 251; continue _fun1530 }
case 234:
                r18 = r15.Object;
                r17 = r18.getOwnPropertyDescriptor;
                r16 = r17.bind(r18)(r3, r19);
case 251:
                if(!r16) { _fun1530_ip = 270; continue _fun1530 }
case 254:
                r17 = r16.get;
                if(r17) { _fun1530_ip = 283; continue _fun1530 }
case 262:
                r17 = r16.set;
                if(r17) { _fun1530_ip = 283; continue _fun1530 }
case 270:
                r17 = r3[r19];
                r1[r19] = r17;
                r6 = r16;
                _fun1530_ip = 192; continue _fun1530;
case 283:
                r18 = r15.Object;
                r17 = r18.defineProperty;
                r17 = r17.bind(r18)(r1, r19, r16);
                r6 = r16;
                _fun1530_ip = 192; continue _fun1530;
            }
case 306:
            r1['default'] = r3;
            r4 = r1;
            if(!r5) { _fun1530_ip = 355; continue _fun1530 }
case 318:
            r6 = r5.set;
            r6 = r6.bind(r5)(r3, r1);
            r4 = r1;
            _fun1530_ip = 355; continue _fun1530;
case 334:
            r1 = r5.get;
            r4 = r1.bind(r5)(r3);
            _fun1530_ip = 355; continue _fun1530;
case 346:
            r1 = {};
            r1['default'] = r3;
            r4 = r1;
case 355:
            r3 = r4.get;
            r1 = 'NativePerformanceCxx';
            r1 = r3.bind(r4)(r1);
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 137;
    r5 = [36];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r4 = a1;
        r2 = a5;
        r5 = a6;
        r0 = a0;
        var _closure1_slot0 = r0;
        var _closure1_slot1 = r4;
        var _closure1_slot2 = r5;
        r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r1
            _fun1534: for(var _fun1534_ip = 0; ; ) switch(_fun1534_ip) {
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
                r0 = _closure1_slot16;
                r0 = r0.bind(r2)();
                if(r0) { _fun1534_ip = 61; continue _fun1534 }
case 48:
                r0 = r8.apply;
                r0 = r0.bind(r8)(r3, r5);
                _fun1534_ip = 107; continue _fun1534;
case 61:
                r6 = global;
                r7 = r6.Reflect;
                r6 = r7.construct;
                if(r5) { _fun1534_ip = 81; continue _fun1534 }
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
        var _closure1_slot15 = r0;
        r0 = function() { // Original name: _isNativeReflectConstruct, environment: r1
            _fun1535: for(var _fun1535_ip = 0; ; ) switch(_fun1535_ip) {
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
                _fun1535_ip = 74; continue _fun1535;
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
        r0 = function(a0, a1, a2, a3) { // Original name: _superPropGet, environment: r1
            _fun1538: for(var _fun1538_ip = 0; ; ) switch(_fun1538_ip) {
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
                if(!r7) { _fun1538_ip = 54; continue _fun1538 }
case 49:
                r0 = r4.prototype;
case 54:
                r4 = undefined;
                r3 = r3.bind(r4)(r0);
                r0 = 'toJSON';
                r4 = r5.bind(r4)(r3, r0, r6);
                var _closure2_slot1 = r4;
                r0 = 2;
                r2 = r0 & r2;
                r0 = r4;
                if(!r2) { _fun1538_ip = 108; continue _fun1538 }
case 89:
                r3 = 'function';
                r2 = typeof r4;
                r0 = r4;
                if(!(r3 === r2)) { _fun1538_ip = 108; continue _fun1538 }
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
        var _closure1_slot17 = r0;
        r0 = function() { // Original name: getCachedEventCounts, environment: r1
            _fun1540: for(var _fun1540_ip = 0; ; ) switch(_fun1540_ip) {
case 0:
                r1 = _closure1_slot14;
                if(r1) { _fun1540_ip = 234; continue _fun1540 }
case 13:
                r1 = _closure1_slot10;
                r1 = r1.default;
                if(!r1) { _fun1540_ip = 58; continue _fun1540 }
case 25:
                r1 = _closure1_slot10;
                r1 = r1.default;
                r2 = null;
                if(!(r1 != r2)) { _fun1540_ip = 58; continue _fun1540 }
case 40:
                r1 = _closure1_slot10;
                r1 = r1.default;
                r1 = r1.getEventCounts;
                if(r1) { _fun1540_ip = 124; continue _fun1540 }
case 58:
                r4 = _closure1_slot1;
                r3 = _closure1_slot2;
                r1 = 11;
                r1 = r3[r1];
                r3 = undefined;
                r1 = r4.bind(r3)(r1);
                r1 = r1.warnNoNativePerformance;
                r1 = r1.bind(r3)();
                r1 = global;
                r1 = r1.Map;
                r3 = r1.prototype;
                r3 = Object.create(r3, {constructor: {value: r1}});
                r7 = r3;
                r1 = new r7[r1](r6);
                r1 = r1 instanceof Object ? r1 : r3;
                var _closure1_slot14 = r1;
                return r1;
case 124:
                r1 = global;
                r3 = r1.Map;
                r1 = _closure1_slot10;
                r1 = r1.default;
                r1 = r1.getEventCounts;
                r4 = r1 == r2;
                r1 = undefined;
                if(r4) { _fun1540_ip = 175; continue _fun1540 }
case 156:
                r4 = _closure1_slot10;
                r5 = r4.default;
                r4 = r5.getEventCounts;
                r1 = r4.bind(r5)();
case 175:
                if(!(r1 == r2)) { _fun1540_ip = 183; continue _fun1540 }
case 179:
                r1 = new Array(0);
case 183:
                r2 = r3.prototype;
                r2 = Object.create(r2, {constructor: {value: r3}});
                r7 = r2;
                r6 = r1;
                r1 = new r7[r3](r6, r5);
                r1 = r1 instanceof Object ? r1 : r2;
                _closure1_slot14 = r1;
                r4 = _closure1_slot0;
                r3 = r4.queueMicrotask;
                r2 = function() { // Environment: r2
                    r0 = null;
                    _closure1_slot14 = r0;
                    r0 = undefined;
                    return r0;
                };
                r2 = r3.bind(r4)(r2);
                return r1;
case 234:
                r0 = _closure1_slot14;
                return r0;
            }
        };
        var _closure1_slot18 = r0;
        r0 = 0;
        r3 = r5[r0];
        r0 = undefined;
        r7 = r4.bind(r0)(r3);
        r3 = global;
        r9 = r3.Object;
        r8 = r9.defineProperty;
        r6 = {};
        r3 = true;
        r6['value'] = r3;
        r3 = '__esModule';
        r3 = r8.bind(r9)(r2, r3, r6);
        r2['EventCounts'] = r0;
        r2['PerformanceEventTiming'] = r0;
        r3 = 1;
        r3 = r5[r3];
        r3 = r4.bind(r0)(r3);
        r3 = r7.bind(r0)(r3);
        var _closure1_slot3 = r3;
        r3 = 2;
        r3 = r5[r3];
        r3 = r4.bind(r0)(r3);
        r3 = r7.bind(r0)(r3);
        var _closure1_slot4 = r3;
        r3 = 3;
        r3 = r5[r3];
        r3 = r4.bind(r0)(r3);
        r3 = r7.bind(r0)(r3);
        var _closure1_slot5 = r3;
        r3 = 4;
        r3 = r5[r3];
        r3 = r4.bind(r0)(r3);
        r3 = r7.bind(r0)(r3);
        var _closure1_slot6 = r3;
        r3 = 5;
        r3 = r5[r3];
        r3 = r4.bind(r0)(r3);
        r3 = r7.bind(r0)(r3);
        var _closure1_slot7 = r3;
        r3 = 6;
        r3 = r5[r3];
        r3 = r4.bind(r0)(r3);
        r3 = r7.bind(r0)(r3);
        var _closure1_slot8 = r3;
        r3 = 7;
        r3 = r5[r3];
        r3 = r4.bind(r0)(r3);
        r3 = r7.bind(r0)(r3);
        var _closure1_slot9 = r3;
        r3 = 8;
        r3 = r5[r3];
        r3 = r4.bind(r0)(r3);
        r3 = r7.bind(r0)(r3);
        r6 = 9;
        r6 = r5[r6];
        r6 = r4.bind(r0)(r6);
        r6 = r7.bind(r0)(r6);
        var _closure1_slot10 = r6;
        r7 = r3.default;
        r6 = 'processingStart';
        r6 = r7.bind(r0)(r6);
        var _closure1_slot11 = r6;
        r7 = r3.default;
        r6 = 'processingEnd';
        r6 = r7.bind(r0)(r6);
        var _closure1_slot12 = r6;
        r6 = r3.default;
        r3 = 'interactionId';
        r3 = r6.bind(r0)(r3);
        var _closure1_slot13 = r3;
        r3 = 10;
        r3 = r5[r3];
        r3 = r4.bind(r0)(r3);
        r4 = r3.PerformanceEntry;
        r3 = function(a0) { // Environment: r1
            r3 = function(a0) { // Original name: PerformanceEventTiming, environment: r5
                _fun1543: for(var _fun1543_ip = 0; ; ) switch(_fun1543_ip) {
case 0:
                    r4 = a0;
                    r8 = this;
                    r0 = _closure1_slot3;
                    r0 = r0.default;
                    r7 = _closure2_slot0;
                    r6 = undefined;
                    r0 = r0.bind(r6)(r8, r7);
                    r1 = _closure1_slot15;
                    r9 = {};
                    r0 = r4.name;
                    r9['name'] = r0;
                    r0 = 'event';
                    r9['entryType'] = r0;
                    r10 = r4.startTime;
                    r5 = null;
                    r11 = r10 != r5;
                    r0 = 0;
                    if(!r11) { _fun1543_ip = 75; continue _fun1543 }
case 72:
                    r0 = r10;
case 75:
                    r9['startTime'] = r0;
                    r10 = r4.duration;
                    r11 = r10 != r5;
                    r0 = 0;
                    if(!r11) { _fun1543_ip = 96; continue _fun1543 }
case 93:
                    r0 = r10;
case 96:
                    r9['duration'] = r0;
                    r0 = new Array(1);
                    r0[0] = r9;
                    r0 = r1.bind(r6)(r8, r7, r0);
                    r1 = global;
                    r10 = r1.Object;
                    r9 = r10.defineProperty;
                    r8 = _closure1_slot11;
                    r7 = {};
                    r11 = true;
                    r7['writable'] = r11;
                    r7['value'] = r6;
                    r7 = r9.bind(r10)(r0, r8, r7);
                    r12 = r1.Object;
                    r10 = r12.defineProperty;
                    r9 = _closure1_slot12;
                    r7 = {};
                    r7['writable'] = r11;
                    r7['value'] = r6;
                    r7 = r10.bind(r12)(r0, r9, r7);
                    r10 = r1.Object;
                    r9 = r10.defineProperty;
                    r7 = _closure1_slot13;
                    r1 = {};
                    r1['writable'] = r11;
                    r1['value'] = r6;
                    r1 = r9.bind(r10)(r0, r7, r1);
                    r1 = _closure1_slot9;
                    r1 = r1.default;
                    r7 = r1.bind(r6)(r0, r8);
                    r9 = r4.processingStart;
                    r10 = r9 != r5;
                    r1 = 0;
                    if(!r10) { _fun1543_ip = 248; continue _fun1543 }
case 245:
                    r1 = r9;
case 248:
                    r7[r8] = r1;
                    r1 = _closure1_slot9;
                    r1 = r1.default;
                    r8 = _closure1_slot12;
                    r7 = r1.bind(r6)(r0, r8);
                    r9 = r4.processingEnd;
                    r10 = r9 != r5;
                    r1 = 0;
                    if(!r10) { _fun1543_ip = 289; continue _fun1543 }
case 286:
                    r1 = r9;
case 289:
                    r7[r8] = r1;
                    r1 = _closure1_slot9;
                    r1 = r1.default;
                    r2 = _closure1_slot13;
                    r1 = r1.bind(r6)(r0, r2);
                    r4 = r4.interactionId;
                    r5 = r4 != r5;
                    r3 = 0;
                    if(!r5) { _fun1543_ip = 330; continue _fun1543 }
case 327:
                    r3 = r4;
case 330:
                    r1[r2] = r3;
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
            r0 = 'processingStart';
            r4['key'] = r0;
            r0 = function() { // Original name: get, environment: r5
                r1 = _closure1_slot9;
                r3 = r1.default;
                r1 = _closure1_slot11;
                r2 = undefined;
                r0 = this;
                r0 = r3.bind(r2)(r0, r1);
                r0 = r0[r1];
                return r0;
            };
            r4['get'] = r0;
            r0 = new Array(4);
            r0[0] = r4;
            r4 = {};
            r6 = 'processingEnd';
            r4['key'] = r6;
            r6 = function() { // Original name: get, environment: r5
                r1 = _closure1_slot9;
                r3 = r1.default;
                r1 = _closure1_slot12;
                r2 = undefined;
                r0 = this;
                r0 = r3.bind(r2)(r0, r1);
                r0 = r0[r1];
                return r0;
            };
            r4['get'] = r6;
            r0[1] = r4;
            r4 = {};
            r6 = 'interactionId';
            r4['key'] = r6;
            r6 = function() { // Original name: get, environment: r5
                r1 = _closure1_slot9;
                r3 = r1.default;
                r1 = _closure1_slot13;
                r2 = undefined;
                r0 = this;
                r0 = r3.bind(r2)(r0, r1);
                r0 = r0[r1];
                return r0;
            };
            r4['get'] = r6;
            r0[2] = r4;
            r4 = {};
            r6 = 'toJSON';
            r4['key'] = r6;
            r5 = function() { // Original name: toJSON, environment: r5
                r7 = this;
                r0 = global;
                r4 = r0.Object;
                r3 = r4.assign;
                r8 = _closure1_slot17;
                r13 = _closure2_slot0;
                r6 = undefined;
                r12 = 'toJSON';
                r10 = 3;
                r14 = undefined;
                r11 = r7;
                r1 = r14[r8](r13, r12, r11, r10, r9);
                r0 = new Array(0);
                r2 = r1.bind(r6)(r0);
                r1 = {};
                r0 = _closure1_slot9;
                r8 = r0.default;
                r9 = _closure1_slot11;
                r8 = r8.bind(r6)(r7, r9);
                r8 = r8[r9];
                r1['processingStart'] = r8;
                r8 = r0.default;
                r9 = _closure1_slot12;
                r8 = r8.bind(r6)(r7, r9);
                r8 = r8[r9];
                r1['processingEnd'] = r8;
                r0 = r0.default;
                r5 = _closure1_slot13;
                r0 = r0.bind(r6)(r7, r5);
                r0 = r0[r5];
                r1['interactionId'] = r0;
                r0 = {};
                r0 = r3.bind(r4)(r0, r2, r1);
                return r0;
            };
            r4['value'] = r5;
            r0[3] = r4;
            r0 = r1.bind(r2)(r3, r0);
            return r0;
        };
        r3 = r3.bind(r0)(r4);
        r2['PerformanceEventTiming'] = r3;
        r1 = function() { // Environment: r1
            r3 = function() { // Original name: EventCounts, environment: r4
                r0 = _closure1_slot3;
                r3 = r0.default;
                r2 = _closure2_slot0;
                r0 = undefined;
                r1 = this;
                r1 = r3.bind(r0)(r1, r2);
                return r0;
            };
            var _closure2_slot0 = r3;
            r0 = _closure1_slot4;
            r2 = r0.default;
            r0 = {};
            r1 = 'size';
            r0['key'] = r1;
            r1 = function() { // Original name: get, environment: r4
                r1 = _closure1_slot18;
                r0 = undefined;
                r0 = r1.bind(r0)();
                r0 = r0.size;
                return r0;
            };
            r0['get'] = r1;
            r1 = new Array(7);
            r1[0] = r0;
            r0 = {};
            r5 = 'entries';
            r0['key'] = r5;
            r5 = function() { // Original name: entries, environment: r4
                r1 = _closure1_slot18;
                r0 = undefined;
                r1 = r1.bind(r0)();
                r0 = r1.entries;
                r0 = r0.bind(r1)();
                return r0;
            };
            r0['value'] = r5;
            r1[1] = r0;
            r0 = {};
            r5 = 'forEach';
            r0['key'] = r5;
            r5 = function(a0) { // Original name: forEach, environment: r4
                r1 = _closure1_slot18;
                r0 = undefined;
                r2 = r1.bind(r0)();
                r1 = r2.forEach;
                r0 = a0;
                r0 = r1.bind(r2)(r0);
                return r0;
            };
            r0['value'] = r5;
            r1[2] = r0;
            r0 = {};
            r5 = 'get';
            r0['key'] = r5;
            r5 = function(a0) { // Original name: get, environment: r4
                r1 = _closure1_slot18;
                r0 = undefined;
                r2 = r1.bind(r0)();
                r1 = r2.get;
                r0 = a0;
                r0 = r1.bind(r2)(r0);
                return r0;
            };
            r0['value'] = r5;
            r1[3] = r0;
            r0 = {};
            r5 = 'has';
            r0['key'] = r5;
            r5 = function(a0) { // Original name: has, environment: r4
                r1 = _closure1_slot18;
                r0 = undefined;
                r2 = r1.bind(r0)();
                r1 = r2.has;
                r0 = a0;
                r0 = r1.bind(r2)(r0);
                return r0;
            };
            r0['value'] = r5;
            r1[4] = r0;
            r0 = {};
            r5 = 'keys';
            r0['key'] = r5;
            r5 = function() { // Original name: keys, environment: r4
                r1 = _closure1_slot18;
                r0 = undefined;
                r1 = r1.bind(r0)();
                r0 = r1.keys;
                r0 = r0.bind(r1)();
                return r0;
            };
            r0['value'] = r5;
            r1[5] = r0;
            r0 = {};
            r5 = 'values';
            r0['key'] = r5;
            r4 = function() { // Original name: values, environment: r4
                r1 = _closure1_slot18;
                r0 = undefined;
                r1 = r1.bind(r0)();
                r0 = r1.values;
                r0 = r0.bind(r1)();
                return r0;
            };
            r0['value'] = r4;
            r1[6] = r0;
            r0 = undefined;
            r0 = r2.bind(r0)(r3, r1);
            return r0;
        };
        r1 = r1.bind(r0)();
        r2['EventCounts'] = r1;
        return r0;
    };
    r6 = 138;
    r5 = [1, 12, 13, 23, 25, 26, 28, 31, 32, 137, 139, 140];
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
        r2['PerformanceEntry'] = r0;
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
        r5 = r3.default;
        r4 = 'name';
        r4 = r5.bind(r0)(r4);
        var _closure1_slot3 = r4;
        r5 = r3.default;
        r4 = 'entryType';
        r4 = r5.bind(r0)(r4);
        var _closure1_slot4 = r4;
        r5 = r3.default;
        r4 = 'startTime';
        r4 = r5.bind(r0)(r4);
        var _closure1_slot5 = r4;
        r4 = r3.default;
        r3 = 'duration';
        r3 = r4.bind(r0)(r3);
        var _closure1_slot6 = r3;
        r1 = function() { // Environment: r1
            r3 = function(a0) { // Original name: PerformanceEntry, environment: r4
                r1 = a0;
                r4 = this;
                r0 = _closure1_slot0;
                r5 = r0.default;
                r3 = _closure2_slot0;
                r0 = undefined;
                r3 = r5.bind(r0)(r4, r3);
                r3 = global;
                r7 = r3.Object;
                r6 = r7.defineProperty;
                r9 = _closure1_slot3;
                r5 = {};
                r11 = true;
                r5['writable'] = r11;
                r5['value'] = r0;
                r5 = r6.bind(r7)(r4, r9, r5);
                r7 = r3.Object;
                r6 = r7.defineProperty;
                r8 = _closure1_slot4;
                r5 = {};
                r5['writable'] = r11;
                r5['value'] = r0;
                r5 = r6.bind(r7)(r4, r8, r5);
                r10 = r3.Object;
                r6 = r10.defineProperty;
                r7 = _closure1_slot5;
                r5 = {};
                r5['writable'] = r11;
                r5['value'] = r0;
                r5 = r6.bind(r10)(r4, r7, r5);
                r10 = r3.Object;
                r6 = r10.defineProperty;
                r3 = _closure1_slot6;
                r5 = {};
                r5['writable'] = r11;
                r5['value'] = r0;
                r5 = r6.bind(r10)(r4, r3, r5);
                r2 = _closure1_slot2;
                r5 = r2.default;
                r6 = r5.bind(r0)(r4, r9);
                r5 = r1.name;
                r6[r9] = r5;
                r5 = r2.default;
                r6 = r5.bind(r0)(r4, r8);
                r5 = r1.entryType;
                r6[r8] = r5;
                r5 = r2.default;
                r6 = r5.bind(r0)(r4, r7);
                r5 = r1.startTime;
                r6[r7] = r5;
                r2 = r2.default;
                r2 = r2.bind(r0)(r4, r3);
                r1 = r1.duration;
                r2[r3] = r1;
                return r0;
            };
            var _closure2_slot0 = r3;
            r0 = _closure1_slot1;
            r2 = r0.default;
            r0 = {};
            r1 = 'name';
            r0['key'] = r1;
            r1 = function() { // Original name: get, environment: r4
                r1 = _closure1_slot2;
                r3 = r1.default;
                r1 = _closure1_slot3;
                r2 = undefined;
                r0 = this;
                r0 = r3.bind(r2)(r0, r1);
                r0 = r0[r1];
                return r0;
            };
            r0['get'] = r1;
            r1 = new Array(5);
            r1[0] = r0;
            r0 = {};
            r5 = 'entryType';
            r0['key'] = r5;
            r5 = function() { // Original name: get, environment: r4
                r1 = _closure1_slot2;
                r3 = r1.default;
                r1 = _closure1_slot4;
                r2 = undefined;
                r0 = this;
                r0 = r3.bind(r2)(r0, r1);
                r0 = r0[r1];
                return r0;
            };
            r0['get'] = r5;
            r1[1] = r0;
            r0 = {};
            r5 = 'startTime';
            r0['key'] = r5;
            r5 = function() { // Original name: get, environment: r4
                r1 = _closure1_slot2;
                r3 = r1.default;
                r1 = _closure1_slot5;
                r2 = undefined;
                r0 = this;
                r0 = r3.bind(r2)(r0, r1);
                r0 = r0[r1];
                return r0;
            };
            r0['get'] = r5;
            r1[2] = r0;
            r0 = {};
            r5 = 'duration';
            r0['key'] = r5;
            r5 = function() { // Original name: get, environment: r4
                r1 = _closure1_slot2;
                r3 = r1.default;
                r1 = _closure1_slot6;
                r2 = undefined;
                r0 = this;
                r0 = r3.bind(r2)(r0, r1);
                r0 = r0[r1];
                return r0;
            };
            r0['get'] = r5;
            r1[3] = r0;
            r0 = {};
            r5 = 'toJSON';
            r0['key'] = r5;
            r4 = function() { // Original name: toJSON, environment: r4
                r4 = this;
                r0 = {};
                r1 = _closure1_slot2;
                r5 = r1.default;
                r6 = _closure1_slot3;
                r3 = undefined;
                r5 = r5.bind(r3)(r4, r6);
                r5 = r5[r6];
                r0['name'] = r5;
                r5 = r1.default;
                r6 = _closure1_slot4;
                r5 = r5.bind(r3)(r4, r6);
                r5 = r5[r6];
                r0['entryType'] = r5;
                r5 = r1.default;
                r6 = _closure1_slot5;
                r5 = r5.bind(r3)(r4, r6);
                r5 = r5[r6];
                r0['startTime'] = r5;
                r1 = r1.default;
                r2 = _closure1_slot6;
                r1 = r1.bind(r3)(r4, r2);
                r1 = r1[r2];
                r0['duration'] = r1;
                return r0;
            };
            r0['value'] = r4;
            r1[4] = r0;
            r0 = undefined;
            r0 = r2.bind(r0)(r3, r1);
            return r0;
        };
        r1 = r1.bind(r0)();
        r2['PerformanceEntry'] = r1;
        return r0;
    };
    r6 = 139;
    r5 = [1, 12, 13, 31, 32];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r4 = a1;
        r6 = a5;
        r5 = a6;
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
        r1 = function() { // Original name: warnNoNativePerformance, environment: r2
            r0 = _closure1_slot0;
            r3 = r0.default;
            r0 = undefined;
            r2 = 'missing-native-performance';
            r1 = 'Missing native implementation of Performance';
            r1 = r3.bind(r0)(r2, r1);
            return r0;
        };
        r6['warnNoNativePerformance'] = r1;
        r1 = 1;
        r1 = r5[r1];
        r1 = r4.bind(r0)(r1);
        r1 = r3.bind(r0)(r1);
        var _closure1_slot0 = r1;
        return r0;
    };
    r6 = 140;
    r5 = [1, 141];
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
        r3 = {};
        var _closure1_slot0 = r3;
        r1 = function(a0, a1) { // Original name: warnOnce, environment: r1
            _fun1568: for(var _fun1568_ip = 0; ; ) switch(_fun1568_ip) {
case 0:
                r2 = a0;
                r1 = _closure1_slot0;
                r1 = r1[r2];
                if(r1) { _fun1568_ip = 52; continue _fun1568 }
case 17:
                r1 = global;
                r4 = r1.console;
                r3 = r4.warn;
                r1 = a1;
                r1 = r3.bind(r4)(r1);
                r1 = _closure1_slot0;
                r0 = true;
                r1[r2] = r0;
                r0 = undefined;
                return r0;
case 52:
                r0 = undefined;
                return r0;
            }
        };
        r2['default'] = r1;
        return r0;
    };
    r6 = 141;
    r5 = new Array(0);
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r4 = a1;
        r2 = a5;
        r5 = a6;
        r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r1
            _fun1570: for(var _fun1570_ip = 0; ; ) switch(_fun1570_ip) {
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
                if(r0) { _fun1570_ip = 61; continue _fun1570 }
case 48:
                r0 = r8.apply;
                r0 = r0.bind(r8)(r3, r5);
                _fun1570_ip = 107; continue _fun1570;
case 61:
                r6 = global;
                r7 = r6.Reflect;
                r6 = r7.construct;
                if(r5) { _fun1570_ip = 81; continue _fun1570 }
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
            _fun1571: for(var _fun1571_ip = 0; ; ) switch(_fun1571_ip) {
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
                _fun1571_ip = 74; continue _fun1571;
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
        r2['PerformanceMark'] = r0;
        r2['PerformanceMeasure'] = r0;
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
        r3 = r6.bind(r0)(r3);
        var _closure1_slot2 = r3;
        r3 = 4;
        r3 = r5[r3];
        r3 = r4.bind(r0)(r3);
        r3 = r6.bind(r0)(r3);
        var _closure1_slot3 = r3;
        r3 = 5;
        r3 = r5[r3];
        r3 = r4.bind(r0)(r3);
        r3 = r6.bind(r0)(r3);
        var _closure1_slot4 = r3;
        r3 = 6;
        r3 = r5[r3];
        r3 = r4.bind(r0)(r3);
        r3 = r6.bind(r0)(r3);
        var _closure1_slot5 = r3;
        r3 = 7;
        r3 = r5[r3];
        r3 = r4.bind(r0)(r3);
        r6 = r6.bind(r0)(r3);
        r3 = r6.default;
        r7 = 'detail';
        r3 = r3.bind(r0)(r7);
        var _closure1_slot6 = r3;
        r3 = 8;
        r8 = r5[r3];
        r8 = r4.bind(r0)(r8);
        r9 = r8.PerformanceEntry;
        r8 = function(a0) { // Environment: r1
            r3 = function(a0, a1) { // Original name: PerformanceMark, environment: r0
                _fun1575: for(var _fun1575_ip = 0; ; ) switch(_fun1575_ip) {
case 0:
                    r1 = a1;
                    r6 = this;
                    r0 = _closure1_slot0;
                    r0 = r0.default;
                    r5 = _closure2_slot0;
                    r4 = undefined;
                    r0 = r0.bind(r4)(r6, r5);
                    r2 = _closure1_slot8;
                    r7 = {};
                    r0 = a0;
                    r7['name'] = r0;
                    r0 = 'mark';
                    r7['entryType'] = r0;
                    r8 = null;
                    r9 = r1 == r8;
                    r0 = undefined;
                    if(r9) { _fun1575_ip = 70; continue _fun1575 }
case 65:
                    r0 = r1.startTime;
case 70:
                    if(!(r0 == r8)) { _fun1575_ip = 91; continue _fun1575 }
case 74:
                    r8 = global;
                    r9 = r8.performance;
                    r8 = r9.now;
                    r0 = r8.bind(r9)();
case 91:
                    r7['startTime'] = r0;
                    r0 = 0;
                    r7['duration'] = r0;
                    r0 = new Array(1);
                    r0[0] = r7;
                    r0 = r2.bind(r4)(r6, r5, r0);
                    r2 = global;
                    r7 = r2.Object;
                    r6 = r7.defineProperty;
                    r5 = _closure1_slot6;
                    r2 = {};
                    r8 = true;
                    r2['writable'] = r8;
                    r2['value'] = r4;
                    r2 = r6.bind(r7)(r0, r5, r2);
                    if(!r1) { _fun1575_ip = 184; continue _fun1575 }
case 155:
                    r2 = _closure1_slot5;
                    r2 = r2.default;
                    r3 = _closure1_slot6;
                    r2 = r2.bind(r4)(r0, r3);
                    r1 = r1.detail;
                    r2[r3] = r1;
case 184:
                    return r0;
                }
            };
            var _closure2_slot0 = r3;
            r2 = _closure1_slot4;
            r5 = r2.default;
            r2 = undefined;
            r4 = a0;
            r4 = r5.bind(r2)(r3, r4);
            r1 = _closure1_slot1;
            r1 = r1.default;
            r4 = {};
            r5 = 'detail';
            r4['key'] = r5;
            r0 = function() { // Original name: get, environment: r0
                r1 = _closure1_slot5;
                r3 = r1.default;
                r1 = _closure1_slot6;
                r2 = undefined;
                r0 = this;
                r0 = r3.bind(r2)(r0, r1);
                r0 = r0[r1];
                return r0;
            };
            r4['get'] = r0;
            r0 = new Array(1);
            r0[0] = r4;
            r0 = r1.bind(r2)(r3, r0);
            return r0;
        };
        r8 = r8.bind(r0)(r9);
        r2['PerformanceMark'] = r8;
        r6 = r6.default;
        r6 = r6.bind(r0)(r7);
        var _closure1_slot7 = r6;
        r3 = r5[r3];
        r3 = r4.bind(r0)(r3);
        r3 = r3.PerformanceEntry;
        r1 = function(a0) { // Environment: r1
            r3 = function(a0, a1) { // Original name: PerformanceMeasure, environment: r0
                _fun1578: for(var _fun1578_ip = 0; ; ) switch(_fun1578_ip) {
case 0:
                    r1 = a1;
                    r6 = this;
                    r0 = _closure1_slot0;
                    r0 = r0.default;
                    r5 = _closure2_slot0;
                    r4 = undefined;
                    r0 = r0.bind(r4)(r6, r5);
                    r2 = _closure1_slot8;
                    r7 = {};
                    r0 = a0;
                    r7['name'] = r0;
                    r0 = 'measure';
                    r7['entryType'] = r0;
                    r0 = r1.startTime;
                    r7['startTime'] = r0;
                    r0 = r1.duration;
                    r7['duration'] = r0;
                    r0 = new Array(1);
                    r0[0] = r7;
                    r0 = r2.bind(r4)(r6, r5, r0);
                    r2 = global;
                    r7 = r2.Object;
                    r6 = r7.defineProperty;
                    r5 = _closure1_slot7;
                    r2 = {};
                    r8 = true;
                    r2['writable'] = r8;
                    r2['value'] = r4;
                    r2 = r6.bind(r7)(r0, r5, r2);
                    if(!r1) { _fun1578_ip = 155; continue _fun1578 }
case 126:
                    r2 = _closure1_slot5;
                    r2 = r2.default;
                    r3 = _closure1_slot7;
                    r2 = r2.bind(r4)(r0, r3);
                    r1 = r1.detail;
                    r2[r3] = r1;
case 155:
                    return r0;
                }
            };
            var _closure2_slot0 = r3;
            r2 = _closure1_slot4;
            r5 = r2.default;
            r2 = undefined;
            r4 = a0;
            r4 = r5.bind(r2)(r3, r4);
            r1 = _closure1_slot1;
            r1 = r1.default;
            r4 = {};
            r5 = 'detail';
            r4['key'] = r5;
            r0 = function() { // Original name: get, environment: r0
                r1 = _closure1_slot5;
                r3 = r1.default;
                r1 = _closure1_slot7;
                r2 = undefined;
                r0 = this;
                r0 = r3.bind(r2)(r0, r1);
                r0 = r0[r1];
                return r0;
            };
            r4['get'] = r0;
            r0 = new Array(1);
            r0[0] = r4;
            r0 = r1.bind(r2)(r3, r0);
            return r0;
        };
        r1 = r1.bind(r0)(r3);
        r2['PerformanceMeasure'] = r1;
        return r0;
    };
    r6 = 142;
    r5 = [1, 12, 13, 23, 25, 28, 31, 32, 139];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r3 = a5;
        r0 = a1;
        var _closure1_slot0 = r0;
        r0 = a6;
        var _closure1_slot1 = r0;
        r1 = function(a0) { // Original name: rawToPerformanceEntryType, environment: r2
            _fun1582: for(var _fun1582_ip = 0; ; ) switch(_fun1582_ip) {
case 0:
                r3 = a0;
                r1 = _closure1_slot2;
                r1 = r1.MARK;
                if(!(r1 !== r3)) { _fun1582_ip = 130; continue _fun1582 }
case 20:
                r1 = _closure1_slot2;
                r1 = r1.MEASURE;
                if(!(r1 !== r3)) { _fun1582_ip = 124; continue _fun1582 }
case 34:
                r1 = _closure1_slot2;
                r1 = r1.EVENT;
                if(!(r1 !== r3)) { _fun1582_ip = 118; continue _fun1582 }
case 48:
                r0 = _closure1_slot2;
                r0 = r0.LONGTASK;
                if(!(r0 !== r3)) { _fun1582_ip = 112; continue _fun1582 }
case 62:
                r0 = global;
                r2 = r0.TypeError;
                r0 = r0.HermesInternal;
                r1 = r0.concat;
                r0 = 'rawToPerformanceEntryType: unexpected performance entry type received: ';
                r4 = r1.bind(r0)(r3);
                r1 = r2.prototype;
                r1 = Object.create(r1, {constructor: {value: r2}});
                r5 = r1;
                r0 = new r5[r2](r4, r3);
                r0 = r0 instanceof Object ? r0 : r1;
                throw r0;
case 112:
                r0 = 'longtask';
                return r0;
case 118:
                r0 = 'event';
                return r0;
case 124:
                r0 = 'measure';
                return r0;
case 130:
                r0 = 'mark';
                return r0;
            }
        };
        var _closure1_slot3 = r1;
        r0 = global;
        r6 = r0.Object;
        r5 = r6.defineProperty;
        r4 = {};
        r0 = true;
        r4['value'] = r0;
        r0 = '__esModule';
        r0 = r5.bind(r6)(r3, r0, r4);
        r0 = undefined;
        r3['RawPerformanceEntryTypeValues'] = r0;
        r4 = function(a0) { // Original name: performanceEntryTypeToRaw, environment: r2
            _fun1583: for(var _fun1583_ip = 0; ; ) switch(_fun1583_ip) {
case 0:
                r3 = a0;
                r0 = 'mark';
                if(!(r0 !== r3)) { _fun1583_ip = 130; continue _fun1583 }
case 11:
                r0 = 'measure';
                if(!(r0 !== r3)) { _fun1583_ip = 115; continue _fun1583 }
case 19:
                r0 = 'event';
                if(!(r0 !== r3)) { _fun1583_ip = 100; continue _fun1583 }
case 27:
                r0 = 'longtask';
                if(!(r0 !== r3)) { _fun1583_ip = 85; continue _fun1583 }
case 35:
                r0 = global;
                r2 = r0.TypeError;
                r0 = r0.HermesInternal;
                r1 = r0.concat;
                r0 = 'performanceEntryTypeToRaw: unexpected performance entry type received: ';
                r4 = r1.bind(r0)(r3);
                r1 = r2.prototype;
                r1 = Object.create(r1, {constructor: {value: r2}});
                r5 = r1;
                r0 = new r5[r2](r4, r3);
                r0 = r0 instanceof Object ? r0 : r1;
                throw r0;
case 85:
                r0 = _closure1_slot2;
                r0 = r0.LONGTASK;
                return r0;
case 100:
                r0 = _closure1_slot2;
                r0 = r0.EVENT;
                return r0;
case 115:
                r0 = _closure1_slot2;
                r0 = r0.MEASURE;
                return r0;
case 130:
                r0 = _closure1_slot2;
                r0 = r0.MARK;
                return r0;
            }
        };
        r3['performanceEntryTypeToRaw'] = r4;
        r4 = function(a0) { // Original name: rawToPerformanceEntry, environment: r2
            _fun1581: for(var _fun1581_ip = 0; ; ) switch(_fun1581_ip) {
case 0:
                r1 = a0;
                r3 = r1.entryType;
                r2 = _closure1_slot2;
                r2 = r2.EVENT;
                if(!(r3 !== r2)) { _fun1581_ip = 446; continue _fun1581 }
case 29:
                r3 = r1.entryType;
                r2 = _closure1_slot2;
                r2 = r2.LONGTASK;
                if(!(r3 !== r2)) { _fun1581_ip = 344; continue _fun1581 }
case 52:
                r3 = r1.entryType;
                r2 = _closure1_slot2;
                r2 = r2.MARK;
                if(!(r3 !== r2)) { _fun1581_ip = 275; continue _fun1581 }
case 75:
                r3 = r1.entryType;
                r2 = _closure1_slot2;
                r2 = r2.MEASURE;
                if(!(r3 !== r2)) { _fun1581_ip = 197; continue _fun1581 }
case 95:
                r3 = _closure1_slot0;
                r4 = _closure1_slot1;
                r2 = 3;
                r2 = r4[r2];
                r6 = undefined;
                r2 = r3.bind(r6)(r2);
                r4 = r2.PerformanceEntry;
                r2 = {};
                r3 = r1.name;
                r2['name'] = r3;
                r5 = _closure1_slot3;
                r3 = r1.entryType;
                r3 = r5.bind(r6)(r3);
                r2['entryType'] = r3;
                r3 = r1.startTime;
                r2['startTime'] = r3;
                r3 = r1.duration;
                r2['duration'] = r3;
                r3 = r4.prototype;
                r3 = Object.create(r3, {constructor: {value: r4}});
                r9 = r3;
                r8 = r2;
                r2 = new r9[r4](r8, r7);
                r2 = r2 instanceof Object ? r2 : r3;
                return r2;
case 197:
                r4 = _closure1_slot0;
                r3 = _closure1_slot1;
                r2 = 2;
                r3 = r3[r2];
                r2 = undefined;
                r2 = r4.bind(r2)(r3);
                r5 = r2.PerformanceMeasure;
                r8 = r1.name;
                r2 = {};
                r3 = r1.startTime;
                r2['startTime'] = r3;
                r3 = r1.duration;
                r2['duration'] = r3;
                r3 = r5.prototype;
                r3 = Object.create(r3, {constructor: {value: r5}});
                r9 = r3;
                r7 = r2;
                r2 = new r9[r5](r8, r7, r6);
                r2 = r2 instanceof Object ? r2 : r3;
                return r2;
case 275:
                r4 = _closure1_slot0;
                r3 = _closure1_slot1;
                r2 = 2;
                r3 = r3[r2];
                r2 = undefined;
                r2 = r4.bind(r2)(r3);
                r5 = r2.PerformanceMark;
                r8 = r1.name;
                r2 = {};
                r3 = r1.startTime;
                r2['startTime'] = r3;
                r3 = r5.prototype;
                r3 = Object.create(r3, {constructor: {value: r5}});
                r9 = r3;
                r7 = r2;
                r2 = new r9[r5](r8, r7, r6);
                r2 = r2 instanceof Object ? r2 : r3;
                return r2;
case 344:
                r3 = _closure1_slot0;
                r4 = _closure1_slot1;
                r2 = 1;
                r2 = r4[r2];
                r6 = undefined;
                r2 = r3.bind(r6)(r2);
                r4 = r2.PerformanceLongTaskTiming;
                r2 = {};
                r3 = r1.name;
                r2['name'] = r3;
                r5 = _closure1_slot3;
                r3 = r1.entryType;
                r3 = r5.bind(r6)(r3);
                r2['entryType'] = r3;
                r3 = r1.startTime;
                r2['startTime'] = r3;
                r3 = r1.duration;
                r2['duration'] = r3;
                r3 = r4.prototype;
                r3 = Object.create(r3, {constructor: {value: r4}});
                r9 = r3;
                r8 = r2;
                r2 = new r9[r4](r8, r7);
                r2 = r2 instanceof Object ? r2 : r3;
                return r2;
case 446:
                r3 = _closure1_slot0;
                r2 = _closure1_slot1;
                r0 = 0;
                r2 = r2[r0];
                r0 = undefined;
                r0 = r3.bind(r0)(r2);
                r2 = r0.PerformanceEventTiming;
                r0 = {};
                r3 = r1.name;
                r0['name'] = r3;
                r3 = r1.startTime;
                r0['startTime'] = r3;
                r3 = r1.duration;
                r0['duration'] = r3;
                r3 = r1.processingStart;
                r0['processingStart'] = r3;
                r3 = r1.processingEnd;
                r0['processingEnd'] = r3;
                r1 = r1.interactionId;
                r0['interactionId'] = r1;
                r1 = r2.prototype;
                r1 = Object.create(r1, {constructor: {value: r2}});
                r9 = r1;
                r8 = r0;
                r0 = new r9[r2](r8, r7);
                r0 = r0 instanceof Object ? r0 : r1;
                return r0;
            }
        };
        r3['rawToPerformanceEntry'] = r4;
        r3['rawToPerformanceEntryType'] = r1;
        r1 = {'MARK': 1, 'MEASURE': 2, 'EVENT': 3, 'LONGTASK': 4};
        r3['RawPerformanceEntryTypeValues'] = r1;
        var _closure1_slot2 = r1;
        return r0;
    };
    r6 = 143;
    r5 = [138, 144, 142, 139];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r4 = a1;
        r2 = a5;
        r5 = a6;
        r0 = function(a0, a1, a2, a3) { // Original name: _superPropGet, environment: r1
            _fun1585: for(var _fun1585_ip = 0; ; ) switch(_fun1585_ip) {
case 0:
                r4 = a0;
                r6 = a2;
                var _closure2_slot0 = r6;
                r2 = _closure1_slot0;
                r5 = r2.default;
                r0 = _closure1_slot4;
                r3 = r0.default;
                r0 = 1;
                r2 = 3;
                r7 = r0 & r2;
                r0 = r4;
                if(!r7) { _fun1585_ip = 54; continue _fun1585 }
case 49:
                r0 = r4.prototype;
case 54:
                r4 = undefined;
                r3 = r3.bind(r4)(r0);
                r0 = 'toJSON';
                r4 = r5.bind(r4)(r3, r0, r6);
                var _closure2_slot1 = r4;
                r0 = 2;
                r2 = r0 & r2;
                r0 = r4;
                if(!r2) { _fun1585_ip = 108; continue _fun1585 }
case 89:
                r3 = 'function';
                r2 = typeof r4;
                r0 = r4;
                if(!(r3 === r2)) { _fun1585_ip = 108; continue _fun1585 }
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
        var _closure1_slot7 = r0;
        r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r1
            _fun1587: for(var _fun1587_ip = 0; ; ) switch(_fun1587_ip) {
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
                r0 = _closure1_slot9;
                r0 = r0.bind(r2)();
                if(r0) { _fun1587_ip = 61; continue _fun1587 }
case 48:
                r0 = r8.apply;
                r0 = r0.bind(r8)(r3, r5);
                _fun1587_ip = 107; continue _fun1587;
case 61:
                r6 = global;
                r7 = r6.Reflect;
                r6 = r7.construct;
                if(r5) { _fun1587_ip = 81; continue _fun1587 }
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
        var _closure1_slot8 = r0;
        r0 = function() { // Original name: _isNativeReflectConstruct, environment: r1
            _fun1588: for(var _fun1588_ip = 0; ; ) switch(_fun1588_ip) {
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
                _fun1588_ip = 74; continue _fun1588;
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
        r0 = 0;
        r3 = r5[r0];
        r0 = undefined;
        r7 = r4.bind(r0)(r3);
        r6 = global;
        r10 = r6.Object;
        r9 = r10.defineProperty;
        r8 = {};
        r3 = true;
        r8['value'] = r3;
        r3 = '__esModule';
        r3 = r9.bind(r10)(r2, r3, r8);
        r2['PerformanceLongTaskTiming'] = r0;
        r2['TaskAttributionTiming'] = r0;
        r3 = 1;
        r3 = r5[r3];
        r3 = r4.bind(r0)(r3);
        r3 = r7.bind(r0)(r3);
        var _closure1_slot0 = r3;
        r3 = 2;
        r3 = r5[r3];
        r3 = r4.bind(r0)(r3);
        r3 = r7.bind(r0)(r3);
        var _closure1_slot1 = r3;
        r3 = 3;
        r3 = r5[r3];
        r3 = r4.bind(r0)(r3);
        r3 = r7.bind(r0)(r3);
        var _closure1_slot2 = r3;
        r3 = 4;
        r3 = r5[r3];
        r3 = r4.bind(r0)(r3);
        r3 = r7.bind(r0)(r3);
        var _closure1_slot3 = r3;
        r3 = 5;
        r3 = r5[r3];
        r3 = r4.bind(r0)(r3);
        r3 = r7.bind(r0)(r3);
        var _closure1_slot4 = r3;
        r3 = 6;
        r3 = r5[r3];
        r3 = r4.bind(r0)(r3);
        r3 = r7.bind(r0)(r3);
        var _closure1_slot5 = r3;
        r3 = 7;
        r7 = r5[r3];
        r7 = r4.bind(r0)(r7);
        r8 = r7.PerformanceEntry;
        r7 = function(a0) { // Environment: r1
            r2 = function() { // Original name: TaskAttributionTiming, environment: r0
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
            var _closure2_slot0 = r2;
            r1 = _closure1_slot5;
            r4 = r1.default;
            r1 = undefined;
            r3 = a0;
            r3 = r4.bind(r1)(r2, r3);
            r0 = _closure1_slot1;
            r0 = r0.default;
            r0 = r0.bind(r1)(r2);
            return r0;
        };
        r7 = r7.bind(r0)(r8);
        r2['TaskAttributionTiming'] = r7;
        r8 = r6.Object;
        r7 = r8.preventExtensions;
        r6 = new Array(0);
        r6 = r7.bind(r8)(r6);
        var _closure1_slot6 = r6;
        r3 = r5[r3];
        r3 = r4.bind(r0)(r3);
        r3 = r3.PerformanceEntry;
        r1 = function(a0) { // Environment: r1
            r3 = function() { // Original name: PerformanceLongTaskTiming, environment: r5
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
            r1 = _closure1_slot5;
            r4 = r1.default;
            r2 = undefined;
            r1 = a0;
            r1 = r4.bind(r2)(r3, r1);
            r0 = _closure1_slot1;
            r1 = r0.default;
            r4 = {};
            r0 = 'attribution';
            r4['key'] = r0;
            r0 = function() { // Original name: get, environment: r5
                r0 = _closure1_slot6;
                return r0;
            };
            r4['get'] = r0;
            r0 = new Array(2);
            r0[0] = r4;
            r4 = {};
            r6 = 'toJSON';
            r4['key'] = r6;
            r5 = function() { // Original name: toJSON, environment: r5
                r0 = this;
                r1 = global;
                r4 = r1.Object;
                r3 = r4.assign;
                r7 = _closure1_slot7;
                r11 = _closure2_slot0;
                r5 = undefined;
                r10 = 'toJSON';
                r8 = 3;
                r12 = undefined;
                r9 = r0;
                r2 = r12[r7](r11, r10, r9, r8, r7);
                r1 = new Array(0);
                r2 = r2.bind(r5)(r1);
                r1 = {};
                r0 = r0.attribution;
                r1['attribution'] = r0;
                r0 = {};
                r0 = r3.bind(r4)(r0, r2, r1);
                return r0;
            };
            r4['value'] = r5;
            r0[1] = r4;
            r0 = r1.bind(r2)(r3, r0);
            return r0;
        };
        r1 = r1.bind(r0)(r3);
        r2['PerformanceLongTaskTiming'] = r1;
        return r0;
    };
    r6 = 144;
    r5 = [1, 26, 13, 12, 23, 25, 28, 139];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun1597: for(var _fun1597_ip = 0; ; ) switch(_fun1597_ip) {
case 0:
            r0 = a0;
            r4 = a1;
            r3 = a6;
            var _closure1_slot0 = r4;
            var _closure1_slot1 = r3;
            r6 = null;
            if(!(r0 != r6)) { _fun1597_ip = 57; continue _fun1597 }
case 25:
            r5 = r0.HermesInternal;
            if(!(r5 != r6)) { _fun1597_ip = 57; continue _fun1597 }
case 34:
            r2 = r5.hasPromise;
            if(!(r2 != r6)) { _fun1597_ip = 57; continue _fun1597 }
case 44:
            r2 = r5.hasPromise;
            r2 = r2.bind(r5)();
            if(r2) { _fun1597_ip = 92; continue _fun1597 }
case 57:
            r2 = 0;
            r3 = r3[r2];
            r2 = undefined;
            r4 = r4.bind(r2)(r3);
            r3 = r4.polyfillGlobal;
            r2 = 'Promise';
            r1 = function() { // Environment: r1
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 1;
                r1 = r1[r0];
                r0 = undefined;
                r0 = r2.bind(r0)(r1);
                r0 = r0.default;
                return r0;
            };
            r1 = r3.bind(r4)(r2, r1);
            _fun1597_ip = 97; continue _fun1597;
case 92:
            r0 = r0.Promise;
case 97:
            r0 = undefined;
            return r0;
        }
    };
    r6 = 145;
    r5 = [65, 146];
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
        r3 = 2;
        r3 = r5[r3];
        r3 = r4.bind(r0)(r3);
        r1 = r1.default;
        r2['default'] = r1;
        return r0;
    };
    r6 = 146;
    r5 = [1, 147, 149];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r3 = a1;
        r4 = a6;
        var _closure1_slot0 = r3;
        var _closure1_slot1 = r4;
        r6 = function(a0) { // Original name: valuePromise, environment: r1
            r3 = _closure1_slot0;
            r4 = _closure1_slot1;
            r0 = 0;
            r2 = r4[r0];
            r1 = undefined;
            r2 = r3.bind(r1)(r2);
            r0 = r4[r0];
            r0 = r3.bind(r1)(r0);
            r5 = r0._D;
            r1 = r2.prototype;
            r1 = Object.create(r1, {constructor: {value: r2}});
            r6 = r1;
            r0 = new r6[r2](r5, r4);
            r0 = r0 instanceof Object ? r0 : r1;
            r1 = 1;
            r0['_y'] = r1;
            r1 = a0;
            r0['_z'] = r1;
            return r0;
        };
        var _closure1_slot9 = r6;
        r0 = function(a0) { // Original name: onSettledFulfill, environment: r1
            r0 = {};
            r1 = 'fulfilled';
            r0['status'] = r1;
            r1 = a0;
            r0['value'] = r1;
            return r0;
        };
        var _closure1_slot10 = r0;
        r0 = function(a0) { // Original name: onSettledReject, environment: r1
            r0 = {};
            r1 = 'rejected';
            r0['status'] = r1;
            r1 = a0;
            r0['reason'] = r1;
            return r0;
        };
        var _closure1_slot11 = r0;
        r0 = function(a0) { // Original name: mapAllSettled, environment: r1
            _fun1604: for(var _fun1604_ip = 0; ; ) switch(_fun1604_ip) {
case 0:
                r3 = a0;
                if(!r3) { _fun1604_ip = 108; continue _fun1604 }
case 6:
                r1 = typeof r3;
                r0 = 'object';
                if(!(r1 !== r0)) { _fun1604_ip = 25; continue _fun1604 }
case 17:
                r0 = 'function';
                if(!(r1 === r0)) { _fun1604_ip = 108; continue _fun1604 }
case 25:
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r6 = 0;
                r1 = r1[r6];
                r5 = undefined;
                r1 = r2.bind(r5)(r1);
                r1 = r3 instanceof r1;
                if(!r1) { _fun1604_ip = 92; continue _fun1604 }
case 56:
                r2 = r3.then;
                r4 = _closure1_slot0;
                r1 = _closure1_slot1;
                r1 = r1[r6];
                r1 = r4.bind(r5)(r1);
                r1 = r1.prototype;
                r1 = r1.then;
                if(!(r2 !== r1)) { _fun1604_ip = 192; continue _fun1604 }
case 92:
                r2 = r3.then;
                r4 = typeof r2;
                r1 = 'function';
                if(!(r4 !== r1)) { _fun1604_ip = 124; continue _fun1604 }
case 108:
                r4 = _closure1_slot10;
                r1 = undefined;
                r1 = r4.bind(r1)(r3);
                return r1;
case 124:
                r4 = _closure1_slot0;
                r1 = _closure1_slot1;
                r1 = r1[r6];
                r4 = r4.bind(r5)(r1);
                r1 = r2.bind;
                r8 = r1.bind(r2)(r3);
                r2 = r4.prototype;
                r2 = Object.create(r2, {constructor: {value: r4}});
                r9 = r2;
                r1 = new r9[r4](r8, r7);
                r5 = r1 instanceof Object ? r1 : r2;
                r4 = r5.then;
                r2 = _closure1_slot10;
                r1 = _closure1_slot11;
                r1 = r4.bind(r5)(r2, r1);
                return r1;
case 192:
                r2 = r3.then;
                r1 = _closure1_slot10;
                r0 = _closure1_slot11;
                r0 = r2.bind(r3)(r1, r0);
                return r0;
            }
        };
        var _closure1_slot12 = r0;
        r0 = function(a0) { // Original name: getAggregateError, environment: r1
            _fun1605: for(var _fun1605_ip = 0; ; ) switch(_fun1605_ip) {
case 0:
                r3 = a0;
                r0 = global;
                r1 = r0.AggregateError;
                r2 = typeof r1;
                r1 = 'function';
                if(!(r2 !== r1)) { _fun1605_ip = 70; continue _fun1605 }
case 22:
                r4 = r0.Error;
                r1 = r4.prototype;
                r2 = Object.create(r1, {constructor: {value: r4}});
                r6 = 'All promises were rejected';
                r7 = r2;
                r1 = new r7[r4](r6, r5);
                r1 = r1 instanceof Object ? r1 : r2;
                r2 = 'AggregateError';
                r1['name'] = r2;
                r1['errors'] = r3;
                return r1;
case 70:
                r2 = r0.AggregateError;
                r0 = r2.prototype;
                r1 = Object.create(r0, {constructor: {value: r2}});
                r5 = 'All promises were rejected';
                r7 = r1;
                r6 = r3;
                r0 = new r7[r2](r6, r5, r4);
                r0 = r0 instanceof Object ? r0 : r1;
                return r0;
            }
        };
        var _closure1_slot13 = r0;
        r2 = 0;
        r5 = r4[r2];
        r0 = undefined;
        r7 = r3.bind(r0)(r5);
        r5 = a4;
        r5['exports'] = r7;
        r5 = true;
        r5 = r6.bind(r0)(r5);
        var _closure1_slot2 = r5;
        r5 = false;
        r5 = r6.bind(r0)(r5);
        var _closure1_slot3 = r5;
        r5 = null;
        r5 = r6.bind(r0)(r5);
        var _closure1_slot4 = r5;
        r5 = r6.bind(r0)(r0);
        var _closure1_slot5 = r5;
        r5 = r6.bind(r0)(r2);
        var _closure1_slot6 = r5;
        r5 = '';
        r5 = r6.bind(r0)(r5);
        var _closure1_slot7 = r5;
        r5 = r4[r2];
        r6 = r3.bind(r0)(r5);
        r5 = function(a0) { // Environment: r1
            _fun1606: for(var _fun1606_ip = 0; ; ) switch(_fun1606_ip) {
case 0:
                r7 = a0;
                r3 = r7;
                r5 = undefined;
                r4 = undefined;
                r8 = _closure1_slot0;
                r0 = _closure1_slot1;
                r6 = 0;
                r0 = r0[r6];
                r0 = r8.bind(r5)(r0);
                r7 = r7 instanceof r0;
                r0 = r3;
                if(r7) { _fun1606_ip = 316; continue _fun1606 }
case 47:
                r7 = null;
                if(!(r0 !== r7)) { _fun1606_ip = 310; continue _fun1606 }
case 56:
                r7 = r3;
                if(!(r7 !== r5)) { _fun1606_ip = 304; continue _fun1606 }
case 66:
                r8 = r3;
                r7 = true;
                if(!(r8 !== r7)) { _fun1606_ip = 298; continue _fun1606 }
case 78:
                r8 = r3;
                r7 = false;
                if(!(r8 !== r7)) { _fun1606_ip = 292; continue _fun1606 }
case 90:
                r7 = r3;
                if(!(r7 !== r6)) { _fun1606_ip = 286; continue _fun1606 }
case 100:
                r8 = r3;
                r7 = '';
                if(!(r8 !== r7)) { _fun1606_ip = 280; continue _fun1606 }
case 114:
                r7 = r3;
                r8 = typeof r7;
                r7 = 'object';
                if(!(r8 !== r7)) { _fun1606_ip = 142; continue _fun1606 }
case 128:
                r7 = r3;
                r8 = typeof r7;
                r7 = 'function';
                if(!(r8 === r7)) { _fun1606_ip = 164; continue _fun1606 }
case 142: // try_start_0
                r7 = r3;
                r7 = r7.then;
                r4 = r7;
                r8 = typeof r7;
                r7 = 'function';
                if(!(r8 !== r7)) { _fun1606_ip = 178; continue _fun1606 }
case 164: // try_end0
                r8 = _closure1_slot9;
                r7 = r3;
                r7 = r8.bind(r5)(r7);
                return r7;
case 178: // try_start_1
                r8 = _closure1_slot0;
                r7 = _closure1_slot1;
                r7 = r7[r6];
                r7 = r8.bind(r5)(r7);
                r8 = r4;
                r4 = r8.bind;
                r9 = r4.bind(r8)(r3);
                r4 = r7.prototype;
                r4 = Object.create(r4, {constructor: {value: r7}});
                r10 = r4;
                r3 = new r10[r7](r9, r8);
                r3 = r3 instanceof Object ? r3 : r4;
case 228: // try_end1
                return r3;
case 230: // catch_target0 // catch_target1
                CatchBlockStart(arg_register=3);
                var _closure2_slot0 = r3;
                r4 = _closure1_slot0;
                r3 = _closure1_slot1;
                r3 = r3[r6];
                r4 = r4.bind(r5)(r3);
                r3 = r4.prototype;
                r3 = Object.create(r3, {constructor: {value: r4}});
                r9 = function(a0, a1) { // Environment: r2
                    r2 = _closure2_slot0;
                    r1 = a1;
                    r0 = undefined;
                    r1 = r1.bind(r0)(r2);
                    return r0;
                };
                r10 = r3;
                r2 = new r10[r4](r9, r8);
                r2 = r2 instanceof Object ? r2 : r3;
                return r2;
case 280:
                r2 = _closure1_slot7;
                return r2;
case 286:
                r2 = _closure1_slot6;
                return r2;
case 292:
                r2 = _closure1_slot3;
                return r2;
case 298:
                r2 = _closure1_slot2;
                return r2;
case 304:
                r2 = _closure1_slot5;
                return r2;
case 310:
                r1 = _closure1_slot4;
                return r1;
case 316:
                return r0;
            }
        };
        r6['resolve'] = r5;
        r5 = function(a0) { // Original name: iterableToArray, environment: r1
            _fun1608: for(var _fun1608_ip = 0; ; ) switch(_fun1608_ip) {
case 0:
                r2 = a0;
                r0 = global;
                r1 = r0.Array;
                r1 = r1.from;
                r3 = typeof r1;
                r1 = 'function';
                if(!(r3 !== r1)) { _fun1608_ip = 69; continue _fun1608 }
case 27:
                r1 = function(a0) { // Original name: iterableToArray, environment: r1
                    r0 = global;
                    r0 = r0.Array;
                    r0 = r0.prototype;
                    r2 = r0.slice;
                    r1 = r2.call;
                    r0 = a0;
                    r0 = r1.bind(r2)(r0);
                    return r0;
                };
                _closure1_slot8 = r1;
                r1 = r0.Array;
                r1 = r1.prototype;
                r3 = r1.slice;
                r1 = r3.call;
                r1 = r1.bind(r3)(r2);
                return r1;
case 69:
                r1 = r0.Array;
                r3 = r1.from;
                _closure1_slot8 = r3;
                r1 = r0.Array;
                r0 = r1.from;
                r0 = r0.bind(r1)(r2);
                return r0;
            }
        };
        var _closure1_slot8 = r5;
        r5 = r4[r2];
        r6 = r3.bind(r0)(r5);
        r5 = function(a0) { // Environment: r1
            r4 = _closure1_slot8;
            r3 = undefined;
            r2 = a0;
            r2 = r4.bind(r3)(r2);
            var _closure2_slot0 = r2;
            r2 = _closure1_slot0;
            r4 = _closure1_slot1;
            r1 = 0;
            r1 = r4[r1];
            r2 = r2.bind(r3)(r1);
            r1 = r2.prototype;
            r1 = Object.create(r1, {constructor: {value: r2}});
            r5 = function(a0, a1) { // Environment: r0
                _fun1611: for(var _fun1611_ip = 0; ; ) switch(_fun1611_ip) {
case 0:
                    r2 = a0;
                    var _closure3_slot0 = r2;
                    r0 = a1;
                    var _closure3_slot1 = r0;
                    r5 = function(a0, a1) { // Original name: res, environment: r6
                        _fun1612: for(var _fun1612_ip = 0; ; ) switch(_fun1612_ip) {
case 0:
                            r3 = a0;
                            r0 = a1;
                            var _closure4_slot0 = r3;
                            if(!r0) { _fun1612_ip = 120; continue _fun1612 }
case 15:
                            r4 = typeof r0;
                            r2 = 'object';
                            if(!(r4 !== r2)) { _fun1612_ip = 34; continue _fun1612 }
case 26:
                            r2 = 'function';
                            if(!(r4 === r2)) { _fun1612_ip = 120; continue _fun1612 }
case 34:
                            r6 = _closure1_slot0;
                            r2 = _closure1_slot1;
                            r7 = 0;
                            r5 = r2[r7];
                            r2 = undefined;
                            r5 = r6.bind(r2)(r5);
                            r5 = r0 instanceof r5;
                            if(!r5) { _fun1612_ip = 104; continue _fun1612 }
case 65:
                            r6 = r0.then;
                            r8 = _closure1_slot0;
                            r5 = _closure1_slot1;
                            r5 = r5[r7];
                            r5 = r8.bind(r2)(r5);
                            r5 = r5.prototype;
                            r5 = r5.then;
                            if(!(r6 !== r5)) { _fun1612_ip = 242; continue _fun1612 }
case 104:
                            r5 = r0.then;
                            r8 = typeof r5;
                            r6 = 'function';
                            if(!(r8 !== r6)) { _fun1612_ip = 170; continue _fun1612 }
case 120:
                            r8 = _closure2_slot0;
                            r8[r3] = r0;
                            r9 = _closure3_slot2;
                            r10 = r9 - 1;
                            _closure3_slot2 = r10;
                            r9 = 0;
                            if(!(r10 === r9)) { _fun1612_ip = 166; continue _fun1612 }
case 151:
                            r9 = _closure3_slot0;
                            r8 = _closure2_slot0;
                            r6 = undefined;
                            r6 = r9.bind(r6)(r8);
case 166:
                            r6 = undefined;
                            return r6;
case 170:
                            r6 = _closure1_slot0;
                            r4 = _closure1_slot1;
                            r4 = r4[r7];
                            r6 = r6.bind(r2)(r4);
                            r4 = r5.bind;
                            r12 = r4.bind(r5)(r0);
                            r5 = r6.prototype;
                            r5 = Object.create(r5, {constructor: {value: r6}});
                            r13 = r5;
                            r4 = new r13[r6](r12, r11);
                            r7 = r4 instanceof Object ? r4 : r5;
                            r6 = r7.then;
                            r5 = _closure3_slot1;
                            r4 = function(a0) { // Environment: r1
                                r3 = _closure3_slot3;
                                r2 = _closure4_slot0;
                                r0 = undefined;
                                r1 = a0;
                                r1 = r3.bind(r0)(r2, r1);
                                return r0;
                            };
                            r4 = r6.bind(r7)(r4, r5);
                            return r2;
case 242:
                            r4 = r0._y;
                            r6 = 3;
                            r5 = r0;
                            r0 = r5;
                            if(!(r4 === r6)) { _fun1612_ip = 283; continue _fun1612 }
case 261:
                            r7 = r5._z;
                            r4 = r7._y;
                            r5 = r7;
                            r0 = r5;
                            if(r4 === r6) { _fun1612_ip = 261; continue _fun1612 }
case 283:
                            r5 = r0._y;
                            r4 = 1;
                            if(!(r5 !== r4)) { _fun1612_ip = 352; continue _fun1612 }
case 296:
                            r5 = r0._y;
                            r4 = 2;
                            if(!(r5 === r4)) { _fun1612_ip = 327; continue _fun1612 }
case 309:
                            r5 = _closure3_slot1;
                            r4 = r0._z;
                            r4 = r5.bind(r2)(r4);
case 327:
                            r5 = r0.then;
                            r4 = _closure3_slot1;
                            r1 = function(a0) { // Environment: r1
                                r3 = _closure3_slot3;
                                r2 = _closure4_slot0;
                                r0 = undefined;
                                r1 = a0;
                                r1 = r3.bind(r0)(r2, r1);
                                return r0;
                            };
                            r1 = r5.bind(r0)(r1, r4);
                            return r2;
case 352:
                            r1 = _closure3_slot3;
                            r0 = r0._z;
                            r0 = r1.bind(r2)(r3, r0);
                            return r0;
                        }
                    };
                    var _closure3_slot3 = r5;
                    r0 = _closure2_slot0;
                    r0 = r0.length;
                    r3 = 0;
                    if(!(r0 !== r3)) { _fun1611_ip = 100; continue _fun1611 }
case 43:
                    r0 = _closure2_slot0;
                    r1 = r0.length;
                    var _closure3_slot2 = r1;
                    r0 = r0.length;
                    r1 = r3 < r0;
                    r0 = undefined;
                    r3 = 0;
                    if(!r1) { _fun1611_ip = 98; continue _fun1611 }
case 72:
                    r1 = _closure2_slot0;
                    r6 = r1[r3];
                    r6 = r5.bind(r0)(r3, r6);
                    r3 = r3 + 1;
                    r1 = r1.length;
                    if(r3 < r1) { _fun1611_ip = 72; continue _fun1611 }
case 98:
                    return r0;
case 100:
                    r1 = undefined;
                    r0 = new Array(0);
                    r0 = r2.bind(r1)(r0);
                    return r0;
                }
            };
            r6 = r1;
            r0 = new r6[r2](r5, r4);
            r0 = r0 instanceof Object ? r0 : r1;
            return r0;
        };
        r6['all'] = r5;
        r5 = r4[r2];
        r6 = r3.bind(r0)(r5);
        r5 = function(a0) { // Environment: r1
            r2 = _closure1_slot0;
            r3 = _closure1_slot1;
            r1 = 0;
            r1 = r3[r1];
            r5 = undefined;
            r2 = r2.bind(r5)(r1);
            r1 = r2.all;
            r4 = _closure1_slot8;
            r3 = a0;
            r4 = r4.bind(r5)(r3);
            r3 = r4.map;
            r0 = _closure1_slot12;
            r0 = r3.bind(r4)(r0);
            r0 = r1.bind(r2)(r0);
            return r0;
        };
        r6['allSettled'] = r5;
        r5 = r4[r2];
        r6 = r3.bind(r0)(r5);
        r5 = function(a0) { // Environment: r1
            r1 = a0;
            var _closure2_slot0 = r1;
            r3 = _closure1_slot0;
            r2 = _closure1_slot1;
            r1 = 0;
            r2 = r2[r1];
            r1 = undefined;
            r2 = r3.bind(r1)(r2);
            r1 = r2.prototype;
            r1 = Object.create(r1, {constructor: {value: r2}});
            r4 = function(a0, a1) { // Environment: r0
                r2 = _closure2_slot0;
                r1 = a1;
                r0 = undefined;
                r1 = r1.bind(r0)(r2);
                return r0;
            };
            r5 = r1;
            r0 = new r5[r2](r4, r3);
            r0 = r0 instanceof Object ? r0 : r1;
            return r0;
        };
        r6['reject'] = r5;
        r5 = r4[r2];
        r6 = r3.bind(r0)(r5);
        r5 = function(a0) { // Environment: r1
            r1 = a0;
            var _closure2_slot0 = r1;
            r3 = _closure1_slot0;
            r2 = _closure1_slot1;
            r1 = 0;
            r2 = r2[r1];
            r1 = undefined;
            r2 = r3.bind(r1)(r2);
            r1 = r2.prototype;
            r1 = Object.create(r1, {constructor: {value: r2}});
            r4 = function(a0, a1) { // Environment: r0
                r0 = a0;
                var _closure3_slot0 = r0;
                r0 = a1;
                var _closure3_slot1 = r0;
                r3 = _closure1_slot8;
                r2 = _closure2_slot0;
                r0 = undefined;
                r3 = r3.bind(r0)(r2);
                r2 = r3.forEach;
                r1 = function(a0) { // Environment: r1
                    r2 = _closure1_slot0;
                    r1 = _closure1_slot1;
                    r0 = 0;
                    r1 = r1[r0];
                    r0 = undefined;
                    r3 = r2.bind(r0)(r1);
                    r2 = r3.resolve;
                    r1 = a0;
                    r4 = r2.bind(r3)(r1);
                    r3 = r4.then;
                    r2 = _closure3_slot0;
                    r1 = _closure3_slot1;
                    r1 = r3.bind(r4)(r2, r1);
                    return r0;
                };
                r1 = r2.bind(r3)(r1);
                return r0;
            };
            r5 = r1;
            r0 = new r5[r2](r4, r3);
            r0 = r0 instanceof Object ? r0 : r1;
            return r0;
        };
        r6['race'] = r5;
        r5 = r4[r2];
        r5 = r3.bind(r0)(r5);
        r6 = r5.prototype;
        r5 = function(a0) { // Environment: r1
            r3 = this;
            r2 = r3.then;
            r1 = null;
            r0 = a0;
            r0 = r2.bind(r3)(r1, r0);
            return r0;
        };
        r6['catch'] = r5;
        r2 = r4[r2];
        r2 = r3.bind(r0)(r2);
        r1 = function(a0) { // Original name: promiseAny, environment: r1
            r1 = a0;
            var _closure2_slot0 = r1;
            r3 = _closure1_slot0;
            r2 = _closure1_slot1;
            r1 = 0;
            r2 = r2[r1];
            r1 = undefined;
            r2 = r3.bind(r1)(r2);
            r1 = r2.prototype;
            r1 = Object.create(r1, {constructor: {value: r2}});
            r4 = function(a0, a1) { // Environment: r0
                _fun1623: for(var _fun1623_ip = 0; ; ) switch(_fun1623_ip) {
case 0:
                    r2 = a1;
                    r0 = a0;
                    var _closure3_slot0 = r0;
                    var _closure3_slot1 = r2;
                    r0 = function(a0) { // Original name: resolveOnce, environment: r4
                        _fun1624: for(var _fun1624_ip = 0; ; ) switch(_fun1624_ip) {
case 0:
                            r1 = _closure3_slot3;
                            if(r1) { _fun1624_ip = 30; continue _fun1624 }
case 10:
                            r1 = true;
                            _closure3_slot3 = r1;
                            r2 = _closure3_slot0;
                            r1 = undefined;
                            r0 = a0;
                            r0 = r2.bind(r1)(r0);
case 30:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    var _closure3_slot5 = r0;
                    r0 = function(a0) { // Original name: rejectionCheck, environment: r4
                        _fun1625: for(var _fun1625_ip = 0; ; ) switch(_fun1625_ip) {
case 0:
                            r3 = _closure3_slot4;
                            r2 = r3.push;
                            r1 = a0;
                            r1 = r2.bind(r3)(r1);
                            r1 = _closure3_slot4;
                            r2 = r1.length;
                            r1 = _closure3_slot2;
                            r1 = r1.length;
                            if(!(r2 === r1)) { _fun1625_ip = 69; continue _fun1625 }
case 42:
                            r2 = _closure3_slot1;
                            r3 = _closure1_slot13;
                            r0 = _closure3_slot4;
                            r1 = undefined;
                            r0 = r3.bind(r1)(r0);
                            r0 = r2.bind(r1)(r0);
case 69:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    var _closure3_slot6 = r0;
                    r5 = _closure1_slot8;
                    r3 = _closure2_slot0;
                    r0 = undefined;
                    r6 = r5.bind(r0)(r3);
                    var _closure3_slot2 = r6;
                    r3 = false;
                    var _closure3_slot3 = r3;
                    r3 = new Array(0);
                    var _closure3_slot4 = r3;
                    r7 = r6.length;
                    r5 = 0;
                    if(!(r7 !== r5)) { _fun1623_ip = 101; continue _fun1623 }
case 84:
                    r5 = r6.forEach;
                    r4 = function(a0) { // Environment: r4
                        r2 = _closure1_slot0;
                        r1 = _closure1_slot1;
                        r0 = 0;
                        r1 = r1[r0];
                        r0 = undefined;
                        r3 = r2.bind(r0)(r1);
                        r2 = r3.resolve;
                        r1 = a0;
                        r4 = r2.bind(r3)(r1);
                        r3 = r4.then;
                        r2 = _closure3_slot5;
                        r1 = _closure3_slot6;
                        r1 = r3.bind(r4)(r2, r1);
                        return r0;
                    };
                    r4 = r5.bind(r6)(r4);
                    _fun1623_ip = 115; continue _fun1623;
case 101:
                    r1 = _closure1_slot13;
                    r1 = r1.bind(r0)(r3);
                    r1 = r2.bind(r0)(r1);
case 115:
                    return r0;
                }
            };
            r5 = r1;
            r0 = new r5[r2](r4, r3);
            r0 = r0 instanceof Object ? r0 : r1;
            return r0;
        };
        r2['any'] = r1;
        return r0;
    };
    r6 = 147;
    r5 = [148];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r2 = function() { // Original name: noop, environment: r0
            r0 = undefined;
            return r0;
        };
        var _closure1_slot2 = r2;
        r1 = function(a0) { // Original name: getThen, environment: r0
            _fun1629: for(var _fun1629_ip = 0; ; ) switch(_fun1629_ip) {
case 0:
                r0 = a0;
case 3: // try_start_0
                r0 = r0.then;
case 8: // try_end0
                return r0;
case 10: // catch_target0
                CatchBlockStart(arg_register=1);
                _closure1_slot0 = r1;
                r0 = _closure1_slot1;
                return r0;
            }
        };
        var _closure1_slot3 = r1;
        r1 = function(a0, a1) { // Original name: tryCallOne, environment: r0
            _fun1630: for(var _fun1630_ip = 0; ; ) switch(_fun1630_ip) {
case 0:
                r1 = a0;
                r0 = a1;
case 6: // try_start_0
                r2 = r1;
                r1 = r0;
                r0 = undefined;
                r0 = r2.bind(r0)(r1);
case 19: // try_end0
                return r0;
case 21: // catch_target0
                CatchBlockStart(arg_register=1);
                _closure1_slot0 = r1;
                r0 = _closure1_slot1;
                return r0;
            }
        };
        var _closure1_slot4 = r1;
        r1 = function(a0, a1, a2) { // Original name: tryCallTwo, environment: r0
            _fun1631: for(var _fun1631_ip = 0; ; ) switch(_fun1631_ip) {
case 0:
                r2 = a0;
                r1 = a1;
                r0 = a2;
case 9: // try_start_0
                r3 = r2;
                r2 = r1;
                r1 = r0;
                r0 = undefined;
                r1 = r3.bind(r0)(r2, r1);
case 26: // try_end0
                return r0;
case 28: // catch_target0
                CatchBlockStart(arg_register=1);
                _closure1_slot0 = r1;
                r0 = _closure1_slot1;
                return r0;
            }
        };
        var _closure1_slot5 = r1;
        r1 = function(a0) { // Original name: Promise, environment: r0
            _fun1632: for(var _fun1632_ip = 0; ; ) switch(_fun1632_ip) {
case 0:
                r3 = a0;
                r2 = this;
                r1 = typeof r2;
                r0 = 'object';
                if(!(r1 === r0)) { _fun1632_ip = 119; continue _fun1632 }
case 17:
                r1 = typeof r3;
                r0 = 'function';
                if(!(r1 === r0)) { _fun1632_ip = 85; continue _fun1632 }
case 28:
                r0 = 0;
                r2['_x'] = r0;
                r2['_y'] = r0;
                r0 = null;
                r2['_z'] = r0;
                r2['_A'] = r0;
                r1 = _closure1_slot2;
                if(!(r3 !== r1)) { _fun1632_ip = 81; continue _fun1632 }
case 67:
                r1 = _closure1_slot14;
                r0 = undefined;
                r1 = r1.bind(r0)(r3, r2);
                return r0;
case 81:
                r0 = undefined;
                return r0;
case 85:
                r0 = global;
                r2 = r0.TypeError;
                r0 = r2.prototype;
                r1 = Object.create(r0, {constructor: {value: r2}});
                r5 = "Promise constructor's argument is not a function";
                r6 = r1;
                r0 = new r6[r2](r5, r4);
                r0 = r0 instanceof Object ? r0 : r1;
                throw r0;
case 119:
                r0 = global;
                r2 = r0.TypeError;
                r0 = r2.prototype;
                r1 = Object.create(r0, {constructor: {value: r2}});
                r5 = 'Promises must be constructed via new';
                r6 = r1;
                r0 = new r6[r2](r5, r4);
                r0 = r0 instanceof Object ? r0 : r1;
                throw r0;
            }
        };
        var _closure1_slot6 = r1;
        r3 = function(a0, a1, a2) { // Original name: safeThen, environment: r0
            r1 = a0;
            var _closure2_slot0 = r1;
            r2 = a1;
            var _closure2_slot1 = r2;
            r2 = a2;
            var _closure2_slot2 = r2;
            r2 = r1.constructor;
            r1 = r2.prototype;
            r1 = Object.create(r1, {constructor: {value: r2}});
            r3 = function(a0, a1) { // Environment: r0
                r3 = _closure1_slot6;
                r9 = _closure1_slot2;
                r2 = r3.prototype;
                r2 = Object.create(r2, {constructor: {value: r3}});
                r10 = r2;
                r0 = new r10[r3](r9, r8);
                r6 = r0 instanceof Object ? r0 : r2;
                r3 = r6.then;
                r2 = a0;
                r0 = a1;
                r0 = r3.bind(r6)(r2, r0);
                r3 = _closure1_slot8;
                r2 = _closure2_slot0;
                r5 = _closure1_slot13;
                r9 = _closure2_slot1;
                r8 = _closure2_slot2;
                r1 = r5.prototype;
                r1 = Object.create(r1, {constructor: {value: r5}});
                r10 = r1;
                r7 = r6;
                r0 = new r10[r5](r9, r8, r7, r6);
                r1 = r0 instanceof Object ? r0 : r1;
                r0 = undefined;
                r1 = r3.bind(r0)(r2, r1);
                return r0;
            };
            r4 = r1;
            r0 = new r4[r2](r3, r2);
            r0 = r0 instanceof Object ? r0 : r1;
            return r0;
        };
        var _closure1_slot7 = r3;
        r3 = function(a0, a1) { // Original name: handle, environment: r0
            _fun1635: for(var _fun1635_ip = 0; ; ) switch(_fun1635_ip) {
case 0:
                r0 = a0;
                r1 = a1;
                r2 = r0._y;
                r4 = 3;
                r3 = r0;
                r0 = r3;
                if(!(r2 === r4)) { _fun1635_ip = 47; continue _fun1635 }
case 25:
                r5 = r3._z;
                r2 = r5._y;
                r3 = r5;
                r0 = r3;
                if(r2 === r4) { _fun1635_ip = 25; continue _fun1635 }
case 47:
                r3 = _closure1_slot6;
                r3 = r3._B;
                if(!r3) { _fun1635_ip = 78; continue _fun1635 }
case 63:
                r4 = _closure1_slot6;
                r3 = r4._B;
                r3 = r3.bind(r4)(r0);
case 78:
                r4 = r0._y;
                r3 = 0;
                if(!(r4 !== r3)) { _fun1635_ip = 104; continue _fun1635 }
case 90:
                r4 = _closure1_slot9;
                r2 = undefined;
                r4 = r4.bind(r2)(r0, r1);
                return r2;
case 104:
                r2 = r0._x;
                if(!(r2 !== r3)) { _fun1635_ip = 184; continue _fun1635 }
case 114:
                r3 = r0._x;
                r2 = 1;
                if(!(r3 !== r2)) { _fun1635_ip = 147; continue _fun1635 }
case 127:
                r3 = r0._A;
                r2 = r3.push;
                r2 = r2.bind(r3)(r1);
                r2 = undefined;
                return r2;
case 147:
                r2 = 2;
                r0['_x'] = r2;
                r3 = r0._A;
                r2 = new Array(2);
                r2[0] = r3;
                r2[1] = r1;
                r0['_A'] = r2;
                r2 = undefined;
                return r2;
case 184:
                r2 = 1;
                r0['_x'] = r2;
                r0['_A'] = r1;
                r0 = undefined;
                return r0;
            }
        };
        var _closure1_slot8 = r3;
        r3 = function(a0, a1) { // Original name: handleResolved, environment: r0
            r0 = a0;
            var _closure2_slot0 = r0;
            r0 = a1;
            var _closure2_slot1 = r0;
            r0 = global;
            r2 = r0.setImmediate;
            r0 = undefined;
            r1 = function() { // Environment: r1
                _fun1637: for(var _fun1637_ip = 0; ; ) switch(_fun1637_ip) {
case 0:
                    r1 = _closure2_slot0;
                    r1 = r1._y;
                    r2 = 1;
                    if(!(r1 !== r2)) { _fun1637_ip = 32; continue _fun1637 }
case 20:
                    r1 = _closure2_slot1;
                    r6 = r1.onRejected;
                    _fun1637_ip = 42; continue _fun1637;
case 32:
                    r1 = _closure2_slot1;
                    r6 = r1.onFulfilled;
case 42:
                    r1 = null;
                    if(!(r6 !== r1)) { _fun1637_ip = 129; continue _fun1637 }
case 48:
                    r5 = _closure1_slot4;
                    r1 = _closure2_slot0;
                    r4 = r1._z;
                    r1 = undefined;
                    r6 = r5.bind(r1)(r6, r4);
                    r4 = _closure1_slot1;
                    if(!(r6 !== r4)) { _fun1637_ip = 103; continue _fun1637 }
case 81:
                    r5 = _closure1_slot10;
                    r4 = _closure2_slot1;
                    r4 = r4.promise;
                    r4 = r5.bind(r1)(r4, r6);
                    _fun1637_ip = 127; continue _fun1637;
case 103:
                    r5 = _closure1_slot11;
                    r4 = _closure2_slot1;
                    r4 = r4.promise;
                    r3 = _closure1_slot0;
                    r3 = r5.bind(r1)(r4, r3);
case 127:
                    return r1;
case 129:
                    r1 = _closure2_slot0;
                    r1 = r1._y;
                    if(!(r1 !== r2)) { _fun1637_ip = 180; continue _fun1637 }
case 143:
                    r4 = _closure1_slot11;
                    r1 = _closure2_slot1;
                    r3 = r1.promise;
                    r1 = _closure2_slot0;
                    r2 = r1._z;
                    r1 = undefined;
                    r1 = r4.bind(r1)(r3, r2);
                    _fun1637_ip = 215; continue _fun1637;
case 180:
                    r3 = _closure1_slot10;
                    r1 = _closure2_slot1;
                    r2 = r1.promise;
                    r0 = _closure2_slot0;
                    r1 = r0._z;
                    r0 = undefined;
                    r0 = r3.bind(r0)(r2, r1);
case 215:
                    r0 = undefined;
                    return r0;
                }
            };
            r1 = r2.bind(r0)(r1);
            return r0;
        };
        var _closure1_slot9 = r3;
        r3 = function(a0, a1) { // Original name: resolve, environment: r0
            _fun1638: for(var _fun1638_ip = 0; ; ) switch(_fun1638_ip) {
case 0:
                r3 = a0;
                r2 = a1;
                if(!(r2 !== r3)) { _fun1638_ip = 183; continue _fun1638 }
case 13:
                if(!r2) { _fun1638_ip = 88; continue _fun1638 }
case 16:
                r1 = typeof r2;
                r0 = 'object';
                if(!(r1 !== r0)) { _fun1638_ip = 35; continue _fun1638 }
case 27:
                r0 = 'function';
                if(!(r1 === r0)) { _fun1638_ip = 88; continue _fun1638 }
case 35:
                r4 = _closure1_slot3;
                r0 = undefined;
                r6 = r4.bind(r0)(r2);
                r4 = _closure1_slot1;
                if(!(r6 !== r4)) { _fun1638_ip = 167; continue _fun1638 }
case 57:
                r4 = r3.then;
                if(!(r6 === r4)) { _fun1638_ip = 77; continue _fun1638 }
case 66:
                r4 = _closure1_slot6;
                r4 = r2 instanceof r4;
                if(r4) { _fun1638_ip = 141; continue _fun1638 }
case 77:
                r5 = typeof r6;
                r4 = 'function';
                if(!(r5 !== r4)) { _fun1638_ip = 119; continue _fun1638 }
case 88:
                r4 = 1;
                r3['_y'] = r4;
                r3['_z'] = r2;
                r5 = _closure1_slot12;
                r4 = undefined;
                r5 = r5.bind(r4)(r3);
                return r4;
case 119:
                r5 = _closure1_slot14;
                r4 = r6.bind;
                r4 = r4.bind(r6)(r2);
                r4 = r5.bind(r0)(r4, r3);
                return r0;
case 141:
                r4 = 3;
                r3['_y'] = r4;
                r3['_z'] = r2;
                r2 = _closure1_slot12;
                r2 = r2.bind(r0)(r3);
                return r0;
case 167:
                r2 = _closure1_slot11;
                r1 = _closure1_slot0;
                r1 = r2.bind(r0)(r3, r1);
                return r0;
case 183:
                r2 = _closure1_slot11;
                r0 = global;
                r4 = r0.TypeError;
                r0 = r4.prototype;
                r1 = Object.create(r0, {constructor: {value: r4}});
                r8 = 'A promise cannot be resolved with itself.';
                r9 = r1;
                r0 = new r9[r4](r8, r7);
                r1 = r0 instanceof Object ? r0 : r1;
                r0 = undefined;
                r1 = r2.bind(r0)(r3, r1);
                return r0;
            }
        };
        var _closure1_slot10 = r3;
        r3 = function(a0, a1) { // Original name: reject, environment: r0
            _fun1639: for(var _fun1639_ip = 0; ; ) switch(_fun1639_ip) {
case 0:
                r2 = a0;
                r4 = a1;
                r0 = 2;
                r2['_y'] = r0;
                r2['_z'] = r4;
                r1 = _closure1_slot6;
                r1 = r1._C;
                if(!r1) { _fun1639_ip = 53; continue _fun1639 }
case 37:
                r3 = _closure1_slot6;
                r1 = r3._C;
                r1 = r1.bind(r3)(r2, r4);
case 53:
                r1 = _closure1_slot12;
                r0 = undefined;
                r1 = r1.bind(r0)(r2);
                return r0;
            }
        };
        var _closure1_slot11 = r3;
        r3 = function(a0) { // Original name: finale, environment: r0
            _fun1640: for(var _fun1640_ip = 0; ; ) switch(_fun1640_ip) {
case 0:
                r1 = a0;
                r2 = r1._x;
                r0 = 1;
                if(!(r2 === r0)) { _fun1640_ip = 45; continue _fun1640 }
case 16:
                r3 = _closure1_slot8;
                r2 = r1._A;
                r0 = undefined;
                r0 = r3.bind(r0)(r1, r2);
                r0 = null;
                r1['_A'] = r0;
case 45:
                r2 = r1._x;
                r0 = 2;
                if(!(r2 === r0)) { _fun1640_ip = 129; continue _fun1640 }
case 58:
                r0 = r1._A;
                r0 = r0.length;
                r4 = 0;
                r0 = r4 < r0;
                r2 = undefined;
                if(!r0) { _fun1640_ip = 121; continue _fun1640 }
case 83:
                r5 = _closure1_slot8;
                r0 = r1._A;
                r0 = r0[r4];
                r0 = r5.bind(r2)(r1, r0);
                r4 = r4 + 1;
                r0 = r1._A;
                r0 = r0.length;
                if(r4 < r0) { _fun1640_ip = 83; continue _fun1640 }
case 121:
                r0 = null;
                r1['_A'] = r0;
case 129:
                r0 = undefined;
                return r0;
            }
        };
        var _closure1_slot12 = r3;
        r3 = function(a0, a1, a2) { // Original name: Handler, environment: r0
            _fun1641: for(var _fun1641_ip = 0; ; ) switch(_fun1641_ip) {
case 0:
                r5 = a0;
                r2 = a1;
                r1 = this;
                r6 = typeof r5;
                r4 = 'function';
                r3 = null;
                if(!(r6 === r4)) { _fun1641_ip = 25; continue _fun1641 }
case 22:
                r3 = r5;
case 25:
                r1['onFulfilled'] = r3;
                r3 = typeof r2;
                r0 = null;
                if(!(r3 === r4)) { _fun1641_ip = 43; continue _fun1641 }
case 40:
                r0 = r2;
case 43:
                r1['onRejected'] = r0;
                r0 = a2;
                r1['promise'] = r0;
                r0 = undefined;
                return r0;
            }
        };
        var _closure1_slot13 = r3;
        r3 = function(a0, a1) { // Original name: doResolve, environment: r0
            _fun1642: for(var _fun1642_ip = 0; ; ) switch(_fun1642_ip) {
case 0:
                r3 = a1;
                var _closure2_slot0 = r3;
                r0 = false;
                var _closure2_slot1 = r0;
                r7 = _closure1_slot5;
                r0 = undefined;
                r6 = a0;
                r5 = function(a0) { // Environment: r4
                    _fun1643: for(var _fun1643_ip = 0; ; ) switch(_fun1643_ip) {
case 0:
                        r1 = _closure2_slot1;
                        if(r1) { _fun1643_ip = 40; continue _fun1643 }
case 10:
                        r1 = true;
                        _closure2_slot1 = r1;
                        r3 = _closure1_slot10;
                        r2 = _closure2_slot0;
                        r0 = undefined;
                        r1 = a0;
                        r1 = r3.bind(r0)(r2, r1);
                        return r0;
case 40:
                        r0 = undefined;
                        return r0;
                    }
                };
                r2 = function(a0) { // Environment: r4
                    _fun1644: for(var _fun1644_ip = 0; ; ) switch(_fun1644_ip) {
case 0:
                        r1 = _closure2_slot1;
                        if(r1) { _fun1644_ip = 40; continue _fun1644 }
case 10:
                        r1 = true;
                        _closure2_slot1 = r1;
                        r3 = _closure1_slot11;
                        r2 = _closure2_slot0;
                        r0 = undefined;
                        r1 = a0;
                        r1 = r3.bind(r0)(r2, r1);
                        return r0;
case 40:
                        r0 = undefined;
                        return r0;
                    }
                };
                r5 = r7.bind(r0)(r6, r5, r2);
                r2 = _closure2_slot1;
                if(r2) { _fun1642_ip = 79; continue _fun1642 }
case 51:
                r2 = _closure1_slot1;
                if(!(r5 === r2)) { _fun1642_ip = 79; continue _fun1642 }
case 59:
                r2 = true;
                _closure2_slot1 = r2;
                r2 = _closure1_slot11;
                r1 = _closure1_slot0;
                r1 = r2.bind(r0)(r3, r1);
case 79:
                return r0;
            }
        };
        var _closure1_slot14 = r3;
        r3 = null;
        var _closure1_slot0 = r3;
        r4 = {};
        var _closure1_slot1 = r4;
        r4 = a4;
        r4['exports'] = r1;
        r1['_B'] = r3;
        r1['_C'] = r3;
        r1['_D'] = r2;
        r1 = r1.prototype;
        r0 = function(a0, a1) { // Environment: r0
            _fun1645: for(var _fun1645_ip = 0; ; ) switch(_fun1645_ip) {
case 0:
                r4 = a0;
                r3 = a1;
                r2 = this;
                r5 = r2.constructor;
                r1 = _closure1_slot6;
                if(!(r5 === r1)) { _fun1645_ip = 100; continue _fun1645 }
case 25:
                r6 = _closure1_slot6;
                r10 = _closure1_slot2;
                r5 = r6.prototype;
                r5 = Object.create(r5, {constructor: {value: r6}});
                r11 = r5;
                r1 = new r11[r6](r10, r9);
                r1 = r1 instanceof Object ? r1 : r5;
                r7 = _closure1_slot8;
                r5 = _closure1_slot13;
                r6 = r5.prototype;
                r6 = Object.create(r6, {constructor: {value: r5}});
                r11 = r6;
                r10 = r4;
                r9 = r3;
                r8 = r1;
                r5 = new r11[r5](r10, r9, r8, r7);
                r6 = r5 instanceof Object ? r5 : r6;
                r5 = undefined;
                r5 = r7.bind(r5)(r2, r6);
                return r1;
case 100:
                r1 = _closure1_slot7;
                r0 = undefined;
                r0 = r1.bind(r0)(r2, r4, r3);
                return r0;
            }
        };
        r1['then'] = r0;
        r0 = undefined;
        return r0;
    };
    r6 = 148;
    r5 = new Array(0);
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r3 = a1;
        r4 = a6;
        var _closure1_slot0 = r3;
        var _closure1_slot1 = r4;
        r2 = 0;
        r5 = r4[r2];
        r0 = undefined;
        r6 = r3.bind(r0)(r5);
        r5 = a4;
        r5['exports'] = r6;
        r2 = r4[r2];
        r2 = r3.bind(r0)(r2);
        r2 = r2.prototype;
        r1 = function(a0) { // Environment: r1
            r3 = this;
            r1 = a0;
            var _closure2_slot0 = r1;
            r2 = r3.then;
            r1 = function(a0) { // Environment: r0
                r1 = a0;
                var _closure3_slot0 = r1;
                r2 = _closure1_slot0;
                r3 = _closure1_slot1;
                r1 = 0;
                r1 = r3[r1];
                r4 = undefined;
                r3 = r2.bind(r4)(r1);
                r2 = r3.resolve;
                r1 = _closure2_slot0;
                r1 = r1.bind(r4)();
                r2 = r2.bind(r3)(r1);
                r1 = r2.then;
                r0 = function() { // Environment: r0
                    r0 = _closure3_slot0;
                    return r0;
                };
                r0 = r1.bind(r2)(r0);
                return r0;
            };
            r0 = function(a0) { // Environment: r0
                r1 = a0;
                var _closure3_slot0 = r1;
                r2 = _closure1_slot0;
                r3 = _closure1_slot1;
                r1 = 0;
                r1 = r3[r1];
                r4 = undefined;
                r3 = r2.bind(r4)(r1);
                r2 = r3.resolve;
                r1 = _closure2_slot0;
                r1 = r1.bind(r4)();
                r2 = r2.bind(r3)(r1);
                r1 = r2.then;
                r0 = function() { // Environment: r0
                    r0 = _closure3_slot0;
                    throw r0;
                };
                r0 = r1.bind(r2)(r0);
                return r0;
            };
            r0 = r2.bind(r3)(r1, r0);
            return r0;
        };
        r2['finally'] = r1;
        return r0;
    };
    r6 = 149;
    r5 = [148];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun1652: for(var _fun1652_ip = 0; ; ) switch(_fun1652_ip) {
case 0:
            r2 = a0;
            r3 = a1;
            r4 = a6;
            var _closure1_slot0 = r3;
            var _closure1_slot1 = r4;
            r5 = r2.RN$Bridgeless;
            r1 = true;
            if(!(r5 !== r1)) { _fun1652_ip = 207; continue _fun1652 }
case 34:
            r7 = function(a0) { // Original name: defineLazyTimer, environment: r0
                r4 = a0;
                var _closure2_slot0 = r4;
                r3 = _closure1_slot0;
                r2 = _closure1_slot1;
                r0 = 0;
                r2 = r2[r0];
                r0 = undefined;
                r3 = r3.bind(r0)(r2);
                r2 = r3.polyfillGlobal;
                r1 = function() { // Environment: r1
                    r2 = _closure1_slot0;
                    r1 = _closure1_slot1;
                    r0 = 4;
                    r1 = r1[r0];
                    r0 = undefined;
                    r0 = r2.bind(r0)(r1);
                    r1 = r0.default;
                    r0 = _closure2_slot0;
                    r0 = r1[r0];
                    return r0;
                };
                r1 = r2.bind(r3)(r4, r1);
                return r0;
            };
            r6 = undefined;
            r5 = 'setTimeout';
            r5 = r7.bind(r6)(r5);
            r5 = 'clearTimeout';
            r5 = r7.bind(r6)(r5);
            r5 = 'setInterval';
            r5 = r7.bind(r6)(r5);
            r5 = 'clearInterval';
            r5 = r7.bind(r6)(r5);
            r5 = 'requestAnimationFrame';
            r5 = r7.bind(r6)(r5);
            r5 = 'cancelAnimationFrame';
            r5 = r7.bind(r6)(r5);
            r5 = 'requestIdleCallback';
            r5 = r7.bind(r6)(r5);
            r5 = 'cancelIdleCallback';
            r5 = r7.bind(r6)(r5);
            r5 = 0;
            r7 = r4[r5];
            r10 = r3.bind(r6)(r7);
            r9 = r10.polyfillGlobal;
            r8 = 'queueMicrotask';
            r7 = function() { // Environment: r0
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 5;
                r1 = r1[r0];
                r0 = undefined;
                r0 = r2.bind(r0)(r1);
                r0 = r0.default;
                return r0;
            };
            r7 = r9.bind(r10)(r8, r7);
            r7 = r4[r5];
            r10 = r3.bind(r6)(r7);
            r9 = r10.polyfillGlobal;
            r8 = 'setImmediate';
            r7 = function() { // Environment: r0
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 4;
                r1 = r1[r0];
                r0 = undefined;
                r0 = r2.bind(r0)(r1);
                r0 = r0.default;
                r0 = r0.queueReactNativeMicrotask;
                return r0;
            };
            r7 = r9.bind(r10)(r8, r7);
            r5 = r4[r5];
            r8 = r3.bind(r6)(r5);
            r7 = r8.polyfillGlobal;
            r6 = 'clearImmediate';
            r5 = function() { // Environment: r0
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 4;
                r1 = r1[r0];
                r0 = undefined;
                r0 = r2.bind(r0)(r1);
                r0 = r0.default;
                r0 = r0.clearReactNativeMicrotask;
                return r0;
            };
            r5 = r7.bind(r8)(r6, r5);
            _fun1652_ip = 362; continue _fun1652;
case 207:
            r2['RN$enableMicrotasksInReact'] = r1;
            r1 = 0;
            r5 = r4[r1];
            r2 = undefined;
            r8 = r3.bind(r2)(r5);
            r7 = r8.polyfillGlobal;
            r6 = 'queueMicrotask';
            r5 = function() { // Environment: r0
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 1;
                r1 = r1[r0];
                r0 = undefined;
                r0 = r2.bind(r0)(r1);
                r0 = r0.default;
                r0 = r0.queueMicrotask;
                return r0;
            };
            r5 = r7.bind(r8)(r6, r5);
            r5 = r4[r1];
            r8 = r3.bind(r2)(r5);
            r7 = r8.polyfillGlobal;
            r6 = 'setImmediate';
            r5 = function() { // Environment: r0
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 2;
                r1 = r1[r0];
                r0 = undefined;
                r0 = r2.bind(r0)(r1);
                r0 = r0.setImmediate;
                return r0;
            };
            r5 = r7.bind(r8)(r6, r5);
            r5 = r4[r1];
            r8 = r3.bind(r2)(r5);
            r7 = r8.polyfillGlobal;
            r6 = 'clearImmediate';
            r5 = function() { // Environment: r0
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 2;
                r1 = r1[r0];
                r0 = undefined;
                r0 = r2.bind(r0)(r1);
                r0 = r0.clearImmediate;
                return r0;
            };
            r5 = r7.bind(r8)(r6, r5);
            r5 = r4[r1];
            r8 = r3.bind(r2)(r5);
            r7 = r8.polyfillGlobal;
            r6 = 'requestIdleCallback';
            r5 = function() { // Environment: r0
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 3;
                r1 = r1[r0];
                r0 = undefined;
                r0 = r2.bind(r0)(r1);
                r0 = r0.default;
                r0 = r0.requestIdleCallback;
                return r0;
            };
            r5 = r7.bind(r8)(r6, r5);
            r1 = r4[r1];
            r3 = r3.bind(r2)(r1);
            r2 = r3.polyfillGlobal;
            r1 = 'cancelIdleCallback';
            r0 = function() { // Environment: r0
                r2 = _closure1_slot0;
                r1 = _closure1_slot1;
                r0 = 3;
                r1 = r1[r0];
                r0 = undefined;
                r0 = r2.bind(r0)(r1);
                r0 = r0.default;
                r0 = r0.cancelIdleCallback;
                return r0;
            };
            r0 = r2.bind(r3)(r1, r0);
case 362:
            r0 = undefined;
            return r0;
        }
    };
    r6 = 150;
    r5 = [65, 151, 152, 153, 154, 157];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun1663: for(var _fun1663_ip = 0; ; ) switch(_fun1663_ip) {
case 0:
            r2 = a5;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun1664: for(var _fun1664_ip = 0; ; ) switch(_fun1664_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun1664_ip = 104; continue _fun1664 }
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
                        _fun1665: for(var _fun1665_ip = 0; ; ) switch(_fun1665_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun1665_ip = 15; continue _fun1665 }
case 9:
                            r0 = _closure2_slot0;
                            _fun1665_ip = 19; continue _fun1665;
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
            if(!r3) { _fun1663_ip = 88; continue _fun1663 }
case 74:
            r5 = r3.__esModule;
            r4 = r3;
            if(r5) { _fun1663_ip = 355; continue _fun1663 }
case 88:
            r14 = null;
            if(!(r14 !== r3)) { _fun1663_ip = 346; continue _fun1663 }
case 97:
            r6 = typeof r3;
            r5 = 'object';
            if(!(r5 !== r6)) { _fun1663_ip = 119; continue _fun1663 }
case 108:
            r5 = 'function';
            if(!(r5 === r6)) { _fun1663_ip = 346; continue _fun1663 }
case 119:
            r1 = _closure1_slot0;
            r5 = r1.bind(r0)(r0);
            if(!r5) { _fun1663_ip = 147; continue _fun1663 }
case 131:
            r1 = r5.has;
            r1 = r1.bind(r5)(r3);
            if(r1) { _fun1663_ip = 334; continue _fun1663 }
case 147:
            r1 = Object.create(r14);
            r6 = r15.Object;
            r13 = r6.defineProperty;
            if(!r13) { _fun1663_ip = 175; continue _fun1663 }
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
                if(r7 === r19) { _fun1663_ip = 192; continue _fun1663 }
case 208:
                r16 = {};
                r17 = r16.hasOwnProperty;
                r16 = r17.call;
                r16 = r16.bind(r17)(r3, r19);
                if(!r16) { _fun1663_ip = 192; continue _fun1663 }
case 229:
                r16 = null;
                if(!r13) { _fun1663_ip = 251; continue _fun1663 }
case 234:
                r18 = r15.Object;
                r17 = r18.getOwnPropertyDescriptor;
                r16 = r17.bind(r18)(r3, r19);
case 251:
                if(!r16) { _fun1663_ip = 270; continue _fun1663 }
case 254:
                r17 = r16.get;
                if(r17) { _fun1663_ip = 283; continue _fun1663 }
case 262:
                r17 = r16.set;
                if(r17) { _fun1663_ip = 283; continue _fun1663 }
case 270:
                r17 = r3[r19];
                r1[r19] = r17;
                r6 = r16;
                _fun1663_ip = 192; continue _fun1663;
case 283:
                r18 = r15.Object;
                r17 = r18.defineProperty;
                r17 = r17.bind(r18)(r1, r19, r16);
                r6 = r16;
                _fun1663_ip = 192; continue _fun1663;
            }
case 306:
            r1['default'] = r3;
            r4 = r1;
            if(!r5) { _fun1663_ip = 355; continue _fun1663 }
case 318:
            r6 = r5.set;
            r6 = r6.bind(r5)(r3, r1);
            r4 = r1;
            _fun1663_ip = 355; continue _fun1663;
case 334:
            r1 = r5.get;
            r4 = r1.bind(r5)(r3);
            _fun1663_ip = 355; continue _fun1663;
case 346:
            r1 = {};
            r1['default'] = r3;
            r4 = r1;
case 355:
            r3 = r4.getEnforcing;
            r1 = 'NativeMicrotasksCxx';
            r1 = r3.bind(r4)(r1);
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 151;
    r5 = [36];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
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
        r2 = function(a0) { // Original name: clearImmediate, environment: r1
            r2 = _closure1_slot2;
            r1 = r2.add;
            r0 = a0;
            r0 = r1.bind(r2)(r0);
            r0 = undefined;
            return r0;
        };
        r3['clearImmediate'] = r2;
        r2 = function(a0) { // Original name: setImmediate, environment: r1
            _fun1667: for(var _fun1667_ip = 0; ; ) switch(_fun1667_ip) {
case 0:
                r1 = a0;
                r3 = undefined;
                var _closure2_slot0 = r1;
                r7 = arguments.length;
                r0 = global;
                r8 = r0.Array;
                r4 = 1;
                r6 = r7 > r4;
                r5 = 0;
                if(!r6) { _fun1667_ip = 38; continue _fun1667 }
case 34:
                r5 = r7 - r4;
case 38:
                r6 = r8.prototype;
                r6 = Object.create(r6, {constructor: {value: r8}});
                r11 = r6;
                r10 = r5;
                r5 = new r11[r8](r10, r9);
                r6 = r5 instanceof Object ? r5 : r6;
                var _closure2_slot1 = r6;
                r8 = r4 < r7;
                r5 = r4;
                if(!r8) { _fun1667_ip = 94; continue _fun1667 }
case 75:
                r9 = r5 - r4;
                r8 = arguments[r5];
                r6[r9] = r8;
                r5 = r5 + 1;
                if(r5 < r7) { _fun1667_ip = 75; continue _fun1667 }
case 94:
                r3 = arguments.length;
                if(!(!(r3 < r4))) { _fun1667_ip = 218; continue _fun1667 }
case 101:
                r3 = typeof r1;
                r1 = 'function';
                if(!(r3 === r1)) { _fun1667_ip = 186; continue _fun1667 }
case 112:
                r1 = _closure1_slot1;
                r1 = parseFloat(r1);
                r4 = r1 + 1;
                _closure1_slot1 = r4;
                var _closure2_slot2 = r1;
                r5 = _closure1_slot2;
                r4 = r5.has;
                r4 = r4.bind(r5)(r1);
                if(!r4) { _fun1667_ip = 164; continue _fun1667 }
case 150:
                r5 = _closure1_slot2;
                r4 = r5.delete;
                r4 = r4.bind(r5)(r1);
case 164:
                r4 = _closure1_slot0;
                r3 = r4.queueMicrotask;
                r2 = function() { // Environment: r2
                    _fun1668: for(var _fun1668_ip = 0; ; ) switch(_fun1668_ip) {
case 0:
                        r4 = _closure1_slot2;
                        r3 = r4.has;
                        r2 = _closure2_slot2;
                        r2 = r3.bind(r4)(r2);
                        if(r2) { _fun1668_ip = 50; continue _fun1668 }
case 27:
                        r5 = _closure2_slot0;
                        r4 = r5.apply;
                        r3 = _closure2_slot1;
                        r2 = undefined;
                        r2 = r4.bind(r5)(r2, r3);
                        _fun1668_ip = 68; continue _fun1668;
case 50:
                        r2 = _closure1_slot2;
                        r1 = r2.delete;
                        r0 = _closure2_slot2;
                        r0 = r1.bind(r2)(r0);
case 68:
                        r0 = undefined;
                        return r0;
                    }
                };
                r2 = r3.bind(r4)(r2);
                return r1;
case 186:
                r3 = r0.TypeError;
                r1 = r3.prototype;
                r2 = Object.create(r1, {constructor: {value: r3}});
                r10 = 'The first argument to setImmediate must be a function.';
                r11 = r2;
                r1 = new r11[r3](r10, r9);
                r1 = r1 instanceof Object ? r1 : r2;
                throw r1;
case 218:
                r2 = r0.TypeError;
                r0 = r2.prototype;
                r1 = Object.create(r0, {constructor: {value: r2}});
                r10 = 'setImmediate must be called with at least one argument (a function to call)';
                r11 = r1;
                r0 = new r11[r2](r10, r9);
                r0 = r0 instanceof Object ? r0 : r1;
                throw r0;
            }
        };
        r3['setImmediate'] = r2;
        r2 = 1;
        var _closure1_slot1 = r2;
        r0 = r0.Set;
        r2 = r0.prototype;
        r2 = Object.create(r2, {constructor: {value: r0}});
        r10 = r2;
        r0 = new r10[r0](r9);
        r0 = r0 instanceof Object ? r0 : r2;
        var _closure1_slot2 = r0;
        r0 = undefined;
        return r0;
    };
    r6 = 152;
    r5 = new Array(0);
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun1670: for(var _fun1670_ip = 0; ; ) switch(_fun1670_ip) {
case 0:
            r2 = a5;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun1671: for(var _fun1671_ip = 0; ; ) switch(_fun1671_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun1671_ip = 104; continue _fun1671 }
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
                        _fun1672: for(var _fun1672_ip = 0; ; ) switch(_fun1672_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun1672_ip = 15; continue _fun1672 }
case 9:
                            r0 = _closure2_slot0;
                            _fun1672_ip = 19; continue _fun1672;
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
            if(!r3) { _fun1670_ip = 88; continue _fun1670 }
case 74:
            r5 = r3.__esModule;
            r4 = r3;
            if(r5) { _fun1670_ip = 355; continue _fun1670 }
case 88:
            r14 = null;
            if(!(r14 !== r3)) { _fun1670_ip = 346; continue _fun1670 }
case 97:
            r6 = typeof r3;
            r5 = 'object';
            if(!(r5 !== r6)) { _fun1670_ip = 119; continue _fun1670 }
case 108:
            r5 = 'function';
            if(!(r5 === r6)) { _fun1670_ip = 346; continue _fun1670 }
case 119:
            r1 = _closure1_slot0;
            r5 = r1.bind(r0)(r0);
            if(!r5) { _fun1670_ip = 147; continue _fun1670 }
case 131:
            r1 = r5.has;
            r1 = r1.bind(r5)(r3);
            if(r1) { _fun1670_ip = 334; continue _fun1670 }
case 147:
            r1 = Object.create(r14);
            r6 = r15.Object;
            r13 = r6.defineProperty;
            if(!r13) { _fun1670_ip = 175; continue _fun1670 }
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
                if(r7 === r19) { _fun1670_ip = 192; continue _fun1670 }
case 208:
                r16 = {};
                r17 = r16.hasOwnProperty;
                r16 = r17.call;
                r16 = r16.bind(r17)(r3, r19);
                if(!r16) { _fun1670_ip = 192; continue _fun1670 }
case 229:
                r16 = null;
                if(!r13) { _fun1670_ip = 251; continue _fun1670 }
case 234:
                r18 = r15.Object;
                r17 = r18.getOwnPropertyDescriptor;
                r16 = r17.bind(r18)(r3, r19);
case 251:
                if(!r16) { _fun1670_ip = 270; continue _fun1670 }
case 254:
                r17 = r16.get;
                if(r17) { _fun1670_ip = 283; continue _fun1670 }
case 262:
                r17 = r16.set;
                if(r17) { _fun1670_ip = 283; continue _fun1670 }
case 270:
                r17 = r3[r19];
                r1[r19] = r17;
                r6 = r16;
                _fun1670_ip = 192; continue _fun1670;
case 283:
                r18 = r15.Object;
                r17 = r18.defineProperty;
                r17 = r17.bind(r18)(r1, r19, r16);
                r6 = r16;
                _fun1670_ip = 192; continue _fun1670;
            }
case 306:
            r1['default'] = r3;
            r4 = r1;
            if(!r5) { _fun1670_ip = 355; continue _fun1670 }
case 318:
            r6 = r5.set;
            r6 = r6.bind(r5)(r3, r1);
            r4 = r1;
            _fun1670_ip = 355; continue _fun1670;
case 334:
            r1 = r5.get;
            r4 = r1.bind(r5)(r3);
            _fun1670_ip = 355; continue _fun1670;
case 346:
            r1 = {};
            r1['default'] = r3;
            r4 = r1;
case 355:
            r3 = r4.getEnforcing;
            r1 = 'NativeIdleCallbacksCxx';
            r1 = r3.bind(r4)(r1);
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 153;
    r5 = [36];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun1673: for(var _fun1673_ip = 0; ; ) switch(_fun1673_ip) {
case 0:
            r5 = a1;
            r2 = a5;
            r6 = a6;
            r0 = a0;
            var _closure1_slot0 = r0;
            var _closure1_slot1 = r5;
            var _closure1_slot2 = r6;
            r0 = function() { // Original name: _getFreeIndex, environment: r7
                _fun1674: for(var _fun1674_ip = 0; ; ) switch(_fun1674_ip) {
case 0:
                    r2 = _closure1_slot8;
                    r1 = r2.pop;
                    r1 = r1.bind(r2)();
                    r2 = undefined;
                    if(!(r1 !== r2)) { _fun1674_ip = 25; continue _fun1674 }
case 23:
                    return r1;
case 25:
                    r0 = _closure1_slot7;
                    r0 = r0.length;
                    return r0;
                }
            };
            var _closure1_slot16 = r0;
            r0 = function(a0, a1) { // Original name: _allocateCallback, environment: r7
                r0 = _closure1_slot12;
                r0 = parseFloat(r0);
                r2 = r0 + 1;
                _closure1_slot12 = r2;
                r3 = _closure1_slot16;
                r2 = undefined;
                r3 = r3.bind(r2)();
                r2 = _closure1_slot7;
                r2[r3] = r0;
                r4 = _closure1_slot5;
                r2 = a0;
                r4[r3] = r2;
                r2 = _closure1_slot6;
                r1 = a1;
                r2[r3] = r1;
                return r0;
            };
            var _closure1_slot17 = r0;
            r0 = function(a0, a1, a2) { // Original name: _callTimer, environment: r7
                _fun1676: for(var _fun1676_ip = 0; ; ) switch(_fun1676_ip) {
case 0:
                    r10 = a0;
                    r0 = a1;
                    var _closure2_slot0 = r0;
                    r5 = a2;
                    r0 = undefined;
                    r3 = undefined;
                    r2 = undefined;
                    r4 = _closure1_slot12;
                    if(!(r10 > r4)) { _fun1676_ip = 55; continue _fun1676 }
case 32:
                    r4 = global;
                    r8 = r4.console;
                    r7 = r8.warn;
                    r4 = 'Tried to call timer with ID %s but no such timer exists.';
                    r4 = r7.bind(r8)(r4, r10);
case 55:
                    r7 = _closure1_slot7;
                    r4 = r7.indexOf;
                    r8 = r4.bind(r7)(r10);
                    r4 = -1;
                    if(!(r8 !== r4)) { _fun1676_ip = 333; continue _fun1676 }
case 82:
                    r4 = _closure1_slot6;
                    r3 = r4[r8];
                    r4 = _closure1_slot5;
                    r4 = r4[r8];
                    r2 = r4;
                    if(!r4) { _fun1676_ip = 110; continue _fun1676 }
case 104:
                    r4 = r3;
                    if(r4) { _fun1676_ip = 138; continue _fun1676 }
case 110:
                    r4 = global;
                    r9 = r4.console;
                    r7 = r9.error;
                    r4 = 'No callback found for timerID ';
                    r4 = r4 + r10;
                    r4 = r7.bind(r9)(r4);
                    return r0;
case 138:
                    r4 = r3;
                    r7 = 'setInterval';
                    if(!(r4 === r7)) { _fun1676_ip = 151; continue _fun1676 }
case 149:
                    _fun1676_ip = 160; continue _fun1676;
case 151:
                    r4 = _closure1_slot20;
                    r4 = r4.bind(r0)(r8);
case 160: // try_start_0
                    r8 = r3;
                    r4 = 'setTimeout';
                    if(!(r8 !== r4)) { _fun1676_ip = 309; continue _fun1676 }
case 174:
                    r4 = r3;
                    if(!(r4 !== r7)) { _fun1676_ip = 309; continue _fun1676 }
case 184:
                    r7 = r3;
                    r4 = 'queueReactNativeMicrotask';
                    if(!(r7 !== r4)) { _fun1676_ip = 309; continue _fun1676 }
case 195:
                    r7 = r3;
                    r4 = 'requestAnimationFrame';
                    if(!(r7 !== r4)) { _fun1676_ip = 281; continue _fun1676 }
case 206:
                    r7 = r3;
                    r4 = 'requestIdleCallback';
                    if(!(r7 !== r4)) { _fun1676_ip = 248; continue _fun1676 }
case 217:
                    r4 = global;
                    r7 = r4.console;
                    r4 = r7.error;
                    r8 = r3;
                    r3 = 'Tried to call a callback with invalid type: ';
                    r3 = r3 + r8;
                    r3 = r4.bind(r7)(r3);
                    _fun1676_ip = 313; continue _fun1676;
case 248:
                    r4 = r2;
                    r3 = {};
                    r6 = function() { // Original name: timeRemaining, environment: r6
                        r0 = global;
                        r3 = r0.Math;
                        r2 = r3.max;
                        r1 = _closure1_slot4;
                        r0 = _closure1_slot0;
                        r4 = r0.performance;
                        r0 = r4.now;
                        r4 = r0.bind(r4)();
                        r0 = _closure2_slot0;
                        r0 = r4 - r0;
                        r1 = r1 - r0;
                        r0 = 0;
                        r0 = r2.bind(r3)(r0, r1);
                        return r0;
                    };
                    r3['timeRemaining'] = r6;
                    r5 = !r5;
                    r5 = !r5;
                    r3['didTimeout'] = r5;
                    r3 = r4.bind(r0)(r3);
                    _fun1676_ip = 313; continue _fun1676;
case 281:
                    r4 = r2;
                    r3 = _closure1_slot0;
                    r5 = r3.performance;
                    r3 = r5.now;
                    r3 = r3.bind(r5)();
                    r3 = r4.bind(r0)(r3);
                    _fun1676_ip = 313; continue _fun1676;
case 309:
                    r2 = r2.bind(r0)();
case 313: // try_end0
                    _fun1676_ip = 331; continue _fun1676;
case 315: // catch_target0
                    CatchBlockStart(arg_register=3);
                    r2 = _closure1_slot13;
                    r1 = r2.push;
                    r1 = r1.bind(r2)(r3);
case 331:
                    return r0;
case 333:
                    return r0;
                }
            };
            var _closure1_slot18 = r0;
            r0 = function() { // Original name: _callReactNativeMicrotasksPass, environment: r7
                _fun1678: for(var _fun1678_ip = 0; ; ) switch(_fun1678_ip) {
case 0:
                    r1 = _closure1_slot9;
                    r2 = r1.length;
                    r1 = 0;
                    if(!(r2 !== r1)) { _fun1678_ip = 87; continue _fun1678 }
case 18:
                    r5 = _closure1_slot9;
                    r2 = new Array(0);
                    _closure1_slot9 = r2;
                    r2 = r5.length;
                    r2 = r1 < r2;
                    r4 = undefined;
                    r3 = 0;
                    if(!r2) { _fun1678_ip = 72; continue _fun1678 }
case 46:
                    r6 = _closure1_slot18;
                    r2 = r5[r3];
                    r2 = r6.bind(r4)(r2, r1);
                    r3 = r3 + 1;
                    r2 = r5.length;
                    if(r3 < r2) { _fun1678_ip = 46; continue _fun1678 }
case 72:
                    r0 = _closure1_slot9;
                    r0 = r0.length;
                    r0 = r0 > r1;
                    return r0;
case 87:
                    r0 = false;
                    return r0;
                }
            };
            var _closure1_slot19 = r0;
            r0 = function(a0) { // Original name: _clearIndex, environment: r7
                r2 = a0;
                r1 = _closure1_slot7;
                r3 = null;
                r1[r2] = r3;
                r1 = _closure1_slot5;
                r1[r2] = r3;
                r1 = _closure1_slot6;
                r1[r2] = r3;
                r1 = _closure1_slot8;
                r0 = r1.push;
                r0 = r0.bind(r1)(r2);
                r0 = undefined;
                return r0;
            };
            var _closure1_slot20 = r0;
            r0 = function(a0) { // Original name: _freeCallback, environment: r7
                _fun1680: for(var _fun1680_ip = 0; ; ) switch(_fun1680_ip) {
case 0:
                    r2 = a0;
                    r0 = null;
                    if(!(r2 != r0)) { _fun1680_ip = 84; continue _fun1680 }
case 9:
                    r3 = _closure1_slot7;
                    r1 = r3.indexOf;
                    r5 = r1.bind(r3)(r2);
                    r1 = -1;
                    if(!(r5 !== r1)) { _fun1680_ip = 80; continue _fun1680 }
case 36:
                    r1 = _closure1_slot6;
                    r4 = r1[r5];
                    r3 = _closure1_slot20;
                    r1 = undefined;
                    r3 = r3.bind(r1)(r5);
                    r3 = 'queueReactNativeMicrotask';
                    if(!(r4 !== r3)) { _fun1680_ip = 80; continue _fun1680 }
case 63:
                    r3 = 'requestIdleCallback';
                    if(!(r4 !== r3)) { _fun1680_ip = 80; continue _fun1680 }
case 71:
                    r0 = _closure1_slot23;
                    r0 = r0.bind(r1)(r2);
case 80:
                    r0 = undefined;
                    return r0;
case 84:
                    r0 = undefined;
                    return r0;
                }
            };
            var _closure1_slot21 = r0;
            r0 = function(a0, a1, a2, a3) { // Original name: createTimer, environment: r7
                r3 = _closure1_slot1;
                r2 = _closure1_slot2;
                r0 = 2;
                r2 = r2[r0];
                r0 = undefined;
                r4 = r3.bind(r0)(r2);
                r2 = _closure1_slot3;
                r3 = r2.default;
                r2 = 'NativeTiming is available';
                r2 = r4.bind(r0)(r3, r2);
                r1 = _closure1_slot3;
                r6 = r1.default;
                r5 = r6.createTimer;
                r10 = a0;
                r9 = a1;
                r8 = a2;
                r7 = a3;
                r11 = r6;
                r1 = r11[r5](r10, r9, r8, r7, r6);
                return r0;
            };
            var _closure1_slot22 = r0;
            r0 = function(a0) { // Original name: deleteTimer, environment: r7
                r3 = _closure1_slot1;
                r2 = _closure1_slot2;
                r0 = 2;
                r2 = r2[r0];
                r0 = undefined;
                r4 = r3.bind(r0)(r2);
                r2 = _closure1_slot3;
                r3 = r2.default;
                r2 = 'NativeTiming is available';
                r2 = r4.bind(r0)(r3, r2);
                r1 = _closure1_slot3;
                r3 = r1.default;
                r2 = r3.deleteTimer;
                r1 = a0;
                r1 = r2.bind(r3)(r1);
                return r0;
            };
            var _closure1_slot23 = r0;
            r0 = function(a0) { // Original name: setSendIdleEvents, environment: r7
                r3 = _closure1_slot1;
                r2 = _closure1_slot2;
                r0 = 2;
                r2 = r2[r0];
                r0 = undefined;
                r4 = r3.bind(r0)(r2);
                r2 = _closure1_slot3;
                r3 = r2.default;
                r2 = 'NativeTiming is available';
                r2 = r4.bind(r0)(r3, r2);
                r1 = _closure1_slot3;
                r3 = r1.default;
                r2 = r3.setSendIdleEvents;
                r1 = a0;
                r1 = r2.bind(r3)(r1);
                return r0;
            };
            var _closure1_slot24 = r0;
            r0 = 0;
            r1 = r6[r0];
            r0 = undefined;
            r8 = r5.bind(r0)(r1);
            r4 = global;
            r10 = r4.Object;
            r9 = r10.defineProperty;
            r3 = {};
            r1 = true;
            r3['value'] = r1;
            r1 = '__esModule';
            r1 = r9.bind(r10)(r2, r1, r3);
            r2['default'] = r0;
            r3 = 1;
            r1 = r6[r3];
            r1 = r5.bind(r0)(r1);
            r1 = r8.bind(r0)(r1);
            var _closure1_slot3 = r1;
            r8 = 16.666666666666668;
            var _closure1_slot4 = r8;
            r8 = new Array(0);
            var _closure1_slot5 = r8;
            r8 = new Array(0);
            var _closure1_slot6 = r8;
            r8 = new Array(0);
            var _closure1_slot7 = r8;
            r8 = new Array(0);
            var _closure1_slot8 = r8;
            r8 = new Array(0);
            var _closure1_slot9 = r8;
            r8 = new Array(0);
            var _closure1_slot10 = r8;
            r8 = {};
            var _closure1_slot11 = r8;
            var _closure1_slot12 = r3;
            r3 = new Array(0);
            var _closure1_slot13 = r3;
            r3 = false;
            var _closure1_slot14 = r3;
            r3 = {};
            r8 = function(a0, a1) { // Original name: setTimeout, environment: r7
                _fun1684: for(var _fun1684_ip = 0; ; ) switch(_fun1684_ip) {
case 0:
                    r5 = a1;
                    r4 = undefined;
                    r9 = undefined;
                    r1 = a0;
                    var _closure2_slot0 = r1;
                    r8 = arguments.length;
                    r1 = global;
                    r10 = r1.Array;
                    r7 = 2;
                    r6 = r8 > r7;
                    r3 = 0;
                    if(!r6) { _fun1684_ip = 43; continue _fun1684 }
case 39:
                    r3 = r8 - r7;
case 43:
                    r6 = r10.prototype;
                    r6 = Object.create(r6, {constructor: {value: r10}});
                    r16 = r6;
                    r15 = r3;
                    r3 = new r16[r10](r15, r14);
                    r6 = r3 instanceof Object ? r3 : r6;
                    var _closure2_slot1 = r6;
                    r10 = r7 < r8;
                    r3 = r7;
                    if(!r10) { _fun1684_ip = 99; continue _fun1684 }
case 80:
                    r11 = r3 - r7;
                    r10 = arguments[r3];
                    r6[r11] = r10;
                    r3 = r3 + 1;
                    if(r3 < r8) { _fun1684_ip = 80; continue _fun1684 }
case 99:
                    r7 = _closure1_slot17;
                    r6 = function() { // Environment: r0
                        r3 = _closure2_slot0;
                        r2 = r3.apply;
                        r1 = _closure2_slot1;
                        r0 = undefined;
                        r0 = r2.bind(r3)(r0, r1);
                        return r0;
                    };
                    r0 = 'setTimeout';
                    r0 = r7.bind(r4)(r6, r0);
                    r3 = _closure1_slot22;
                    if(r5) { _fun1684_ip = 130; continue _fun1684 }
case 128:
                    r5 = 0;
case 130:
                    r2 = r1.Date;
                    r1 = r2.now;
                    r13 = r1.bind(r2)();
                    r12 = false;
                    r16 = undefined;
                    r15 = r0;
                    r14 = r5;
                    r1 = r16[r3](r15, r14, r13, r12, r11);
                    return r0;
                }
            };
            r3['setTimeout'] = r8;
            r8 = function(a0, a1) { // Original name: setInterval, environment: r7
                _fun1686: for(var _fun1686_ip = 0; ; ) switch(_fun1686_ip) {
case 0:
                    r5 = a1;
                    r4 = undefined;
                    r9 = undefined;
                    r1 = a0;
                    var _closure2_slot0 = r1;
                    r8 = arguments.length;
                    r1 = global;
                    r10 = r1.Array;
                    r7 = 2;
                    r6 = r8 > r7;
                    r3 = 0;
                    if(!r6) { _fun1686_ip = 43; continue _fun1686 }
case 39:
                    r3 = r8 - r7;
case 43:
                    r6 = r10.prototype;
                    r6 = Object.create(r6, {constructor: {value: r10}});
                    r16 = r6;
                    r15 = r3;
                    r3 = new r16[r10](r15, r14);
                    r6 = r3 instanceof Object ? r3 : r6;
                    var _closure2_slot1 = r6;
                    r10 = r7 < r8;
                    r3 = r7;
                    if(!r10) { _fun1686_ip = 99; continue _fun1686 }
case 80:
                    r11 = r3 - r7;
                    r10 = arguments[r3];
                    r6[r11] = r10;
                    r3 = r3 + 1;
                    if(r3 < r8) { _fun1686_ip = 80; continue _fun1686 }
case 99:
                    r7 = _closure1_slot17;
                    r6 = function() { // Environment: r0
                        r3 = _closure2_slot0;
                        r2 = r3.apply;
                        r1 = _closure2_slot1;
                        r0 = undefined;
                        r0 = r2.bind(r3)(r0, r1);
                        return r0;
                    };
                    r0 = 'setInterval';
                    r0 = r7.bind(r4)(r6, r0);
                    r3 = _closure1_slot22;
                    if(r5) { _fun1686_ip = 130; continue _fun1686 }
case 128:
                    r5 = 0;
case 130:
                    r2 = r1.Date;
                    r1 = r2.now;
                    r13 = r1.bind(r2)();
                    r12 = true;
                    r16 = undefined;
                    r15 = r0;
                    r14 = r5;
                    r1 = r16[r3](r15, r14, r13, r12, r11);
                    return r0;
                }
            };
            r3['setInterval'] = r8;
            r8 = function(a0) { // Original name: queueReactNativeMicrotask, environment: r7
                _fun1688: for(var _fun1688_ip = 0; ; ) switch(_fun1688_ip) {
case 0:
                    r4 = undefined;
                    r6 = undefined;
                    r1 = a0;
                    var _closure2_slot0 = r1;
                    r5 = arguments.length;
                    r1 = global;
                    r7 = r1.Array;
                    r3 = 1;
                    r2 = r5 > r3;
                    r1 = 0;
                    if(!r2) { _fun1688_ip = 40; continue _fun1688 }
case 36:
                    r1 = r5 - r3;
case 40:
                    r2 = r7.prototype;
                    r2 = Object.create(r2, {constructor: {value: r7}});
                    r11 = r2;
                    r10 = r1;
                    r1 = new r11[r7](r10, r9);
                    r2 = r1 instanceof Object ? r1 : r2;
                    var _closure2_slot1 = r2;
                    r7 = r3 < r5;
                    r1 = r3;
                    if(!r7) { _fun1688_ip = 96; continue _fun1688 }
case 77:
                    r8 = r1 - r3;
                    r7 = arguments[r1];
                    r2[r8] = r7;
                    r1 = r1 + 1;
                    if(r1 < r5) { _fun1688_ip = 77; continue _fun1688 }
case 96:
                    r3 = _closure1_slot17;
                    r2 = function() { // Environment: r0
                        r3 = _closure2_slot0;
                        r2 = r3.apply;
                        r1 = _closure2_slot1;
                        r0 = undefined;
                        r0 = r2.bind(r3)(r0, r1);
                        return r0;
                    };
                    r0 = 'queueReactNativeMicrotask';
                    r0 = r3.bind(r4)(r2, r0);
                    r2 = _closure1_slot9;
                    r1 = r2.push;
                    r1 = r1.bind(r2)(r0);
                    return r0;
                }
            };
            r3['queueReactNativeMicrotask'] = r8;
            r8 = function(a0) { // Original name: requestAnimationFrame, environment: r7
                r3 = _closure1_slot17;
                r5 = undefined;
                r2 = a0;
                r0 = 'requestAnimationFrame';
                r0 = r3.bind(r5)(r2, r0);
                r4 = _closure1_slot22;
                r1 = global;
                r2 = r1.Date;
                r1 = r2.now;
                r7 = r1.bind(r2)();
                r8 = 1;
                r6 = false;
                r10 = undefined;
                r9 = r0;
                r1 = r10[r4](r9, r8, r7, r6, r5);
                return r0;
            };
            r3['requestAnimationFrame'] = r8;
            r8 = function(a0, a1) { // Original name: requestIdleCallback, environment: r7
                _fun1691: for(var _fun1691_ip = 0; ; ) switch(_fun1691_ip) {
case 0:
                    r7 = a0;
                    r0 = a1;
                    var _closure2_slot0 = r7;
                    r3 = _closure1_slot10;
                    r4 = r3.length;
                    r3 = 0;
                    if(!(r4 === r3)) { _fun1691_ip = 43; continue _fun1691 }
case 30:
                    r5 = _closure1_slot24;
                    r4 = undefined;
                    r3 = true;
                    r3 = r5.bind(r4)(r3);
case 43:
                    r5 = r0;
                    if(!r5) { _fun1691_ip = 55; continue _fun1691 }
case 49:
                    r5 = r0.timeout;
case 55:
                    r6 = _closure1_slot17;
                    r3 = null;
                    if(!(r5 != r3)) { _fun1691_ip = 70; continue _fun1691 }
case 65:
                    r7 = function(a0) { // Environment: r2
                        _fun1692: for(var _fun1692_ip = 0; ; ) switch(_fun1692_ip) {
case 0:
                            r3 = _closure1_slot11;
                            r2 = _closure2_slot1;
                            r4 = r3[r2];
                            if(!r4) { _fun1692_ip = 47; continue _fun1692 }
case 21:
                            r3 = _closure1_slot15;
                            r2 = r3.clearTimeout;
                            r2 = r2.bind(r3)(r4);
                            r2 = _closure1_slot11;
                            r1 = _closure2_slot1;
                            r1 = delete r2[r1];
case 47:
                            r2 = _closure2_slot0;
                            r1 = undefined;
                            r0 = a0;
                            r0 = r2.bind(r1)(r0);
                            return r0;
                        }
                    };
case 70:
                    r4 = undefined;
                    r0 = 'requestIdleCallback';
                    r0 = r6.bind(r4)(r7, r0);
                    var _closure2_slot1 = r0;
                    r6 = _closure1_slot10;
                    r4 = r6.push;
                    r4 = r4.bind(r6)(r0);
                    if(!(r5 != r3)) { _fun1691_ip = 132; continue _fun1691 }
case 104:
                    r4 = _closure1_slot15;
                    r3 = r4.setTimeout;
                    r2 = function() { // Environment: r2
                        _fun1693: for(var _fun1693_ip = 0; ; ) switch(_fun1693_ip) {
case 0:
                            r4 = _closure1_slot10;
                            r3 = r4.indexOf;
                            r2 = _closure2_slot1;
                            r5 = r3.bind(r4)(r2);
                            r2 = -1;
                            if(!(r5 > r2)) { _fun1693_ip = 90; continue _fun1693 }
case 34:
                            r4 = _closure1_slot10;
                            r3 = r4.splice;
                            r2 = 1;
                            r2 = r3.bind(r4)(r5, r2);
                            r6 = _closure1_slot18;
                            r5 = _closure2_slot1;
                            r2 = _closure1_slot0;
                            r3 = r2.performance;
                            r2 = r3.now;
                            r4 = r2.bind(r3)();
                            r3 = undefined;
                            r2 = true;
                            r2 = r6.bind(r3)(r5, r4, r2);
case 90:
                            r2 = _closure1_slot11;
                            r1 = _closure2_slot1;
                            r1 = delete r2[r1];
                            r1 = _closure1_slot10;
                            r2 = r1.length;
                            r1 = 0;
                            if(!(r2 === r1)) { _fun1693_ip = 130; continue _fun1693 }
case 117:
                            r2 = _closure1_slot24;
                            r1 = undefined;
                            r0 = false;
                            r0 = r2.bind(r1)(r0);
case 130:
                            r0 = undefined;
                            return r0;
                        }
                    };
                    r2 = r3.bind(r4)(r2, r5);
                    r1 = _closure1_slot11;
                    r1[r0] = r2;
case 132:
                    return r0;
                }
            };
            r3['requestIdleCallback'] = r8;
            r8 = function(a0) { // Original name: cancelIdleCallback, environment: r7
                _fun1694: for(var _fun1694_ip = 0; ; ) switch(_fun1694_ip) {
case 0:
                    r3 = a0;
                    r2 = _closure1_slot21;
                    r0 = undefined;
                    r2 = r2.bind(r0)(r3);
                    r4 = _closure1_slot10;
                    r2 = r4.indexOf;
                    r6 = r2.bind(r4)(r3);
                    r2 = -1;
                    if(!(r6 !== r2)) { _fun1694_ip = 60; continue _fun1694 }
case 41:
                    r5 = _closure1_slot10;
                    r4 = r5.splice;
                    r2 = 1;
                    r2 = r4.bind(r5)(r6, r2);
case 60:
                    r2 = _closure1_slot11;
                    r5 = r2[r3];
                    if(!r5) { _fun1694_ip = 93; continue _fun1694 }
case 71:
                    r4 = _closure1_slot15;
                    r2 = r4.clearTimeout;
                    r2 = r2.bind(r4)(r5);
                    r2 = _closure1_slot11;
                    r2 = delete r2[r3];
case 93:
                    r2 = _closure1_slot10;
                    r3 = r2.length;
                    r2 = 0;
                    if(!(r3 === r2)) { _fun1694_ip = 119; continue _fun1694 }
case 108:
                    r2 = _closure1_slot24;
                    r1 = false;
                    r1 = r2.bind(r0)(r1);
case 119:
                    return r0;
                }
            };
            r3['cancelIdleCallback'] = r8;
            r8 = function(a0) { // Original name: clearTimeout, environment: r7
                r2 = _closure1_slot21;
                r0 = undefined;
                r1 = a0;
                r1 = r2.bind(r0)(r1);
                return r0;
            };
            r3['clearTimeout'] = r8;
            r8 = function(a0) { // Original name: clearInterval, environment: r7
                r2 = _closure1_slot21;
                r0 = undefined;
                r1 = a0;
                r1 = r2.bind(r0)(r1);
                return r0;
            };
            r3['clearInterval'] = r8;
            r8 = function(a0) { // Original name: clearReactNativeMicrotask, environment: r7
                _fun1697: for(var _fun1697_ip = 0; ; ) switch(_fun1697_ip) {
case 0:
                    r4 = a0;
                    r2 = _closure1_slot21;
                    r0 = undefined;
                    r2 = r2.bind(r0)(r4);
                    r3 = _closure1_slot9;
                    r2 = r3.indexOf;
                    r4 = r2.bind(r3)(r4);
                    r2 = -1;
                    if(!(r4 !== r2)) { _fun1697_ip = 60; continue _fun1697 }
case 41:
                    r3 = _closure1_slot9;
                    r2 = r3.splice;
                    r1 = 1;
                    r1 = r2.bind(r3)(r4, r1);
case 60:
                    return r0;
                }
            };
            r3['clearReactNativeMicrotask'] = r8;
            r8 = function(a0) { // Original name: cancelAnimationFrame, environment: r7
                r2 = _closure1_slot21;
                r0 = undefined;
                r1 = a0;
                r1 = r2.bind(r0)(r1);
                return r0;
            };
            r3['cancelAnimationFrame'] = r8;
            r8 = function(a0) { // Original name: callTimers, environment: r7
                _fun1699: for(var _fun1699_ip = 0; ; ) switch(_fun1699_ip) {
case 0:
                    r6 = a0;
                    r3 = _closure1_slot1;
                    r2 = _closure1_slot2;
                    r1 = 2;
                    r1 = r2[r1];
                    r2 = undefined;
                    r7 = r3.bind(r2)(r1);
                    r3 = r6.length;
                    r1 = 0;
                    r4 = r3 !== r1;
                    r3 = 'Cannot call `callTimers` with an empty list of IDs.';
                    r3 = r7.bind(r2)(r4, r3);
                    r3 = _closure1_slot13;
                    r3['length'] = r1;
                    r3 = r6.length;
                    r3 = r1 < r3;
                    r4 = 0;
                    if(!r3) { _fun1699_ip = 101; continue _fun1699 }
case 75:
                    r7 = _closure1_slot18;
                    r3 = r6[r4];
                    r3 = r7.bind(r2)(r3, r1);
                    r4 = r4 + 1;
                    r3 = r6.length;
                    if(r4 < r3) { _fun1699_ip = 75; continue _fun1699 }
case 101:
                    r3 = _closure1_slot13;
                    r4 = r3.length;
                    if(!(!(r4 > r1))) { _fun1699_ip = 116; continue _fun1699 }
case 114:
                    return r2;
case 116:
                    r3 = 1;
                    if(!(r4 > r3)) { _fun1699_ip = 178; continue _fun1699 }
case 123:
                    r6 = r3 < r4;
                    r2 = null;
                    if(!r6) { _fun1699_ip = 178; continue _fun1699 }
case 132:
                    r8 = _closure1_slot15;
                    r7 = r8.setTimeout;
                    r10 = function(a0) { // Environment: r5
                        r0 = a0;
                        throw r0;
                    };
                    r9 = r10.bind;
                    r6 = _closure1_slot13;
                    r6 = r6[r3];
                    r6 = r9.bind(r10)(r2, r6);
                    r6 = r7.bind(r8)(r6, r1);
                    r3 = r3 + 1;
                    if(r3 < r4) { _fun1699_ip = 132; continue _fun1699 }
case 178:
                    r0 = _closure1_slot13;
                    r0 = r0[r1];
                    throw r0;
                }
            };
            r3['callTimers'] = r8;
            r8 = function(a0) { // Original name: callIdleCallbacks, environment: r7
                _fun1701: for(var _fun1701_ip = 0; ; ) switch(_fun1701_ip) {
case 0:
                    r6 = a0;
                    r2 = _closure1_slot4;
                    r1 = global;
                    r3 = r1.Date;
                    r1 = r3.now;
                    r1 = r1.bind(r3)();
                    r1 = r1 - r6;
                    r2 = r2 - r1;
                    r1 = 1;
                    if(!(!(r2 < r1))) { _fun1701_ip = 175; continue _fun1701 }
case 45:
                    r1 = _closure1_slot13;
                    r2 = 0;
                    r1['length'] = r2;
                    r1 = _closure1_slot10;
                    r1 = r1.length;
                    if(!(r1 > r2)) { _fun1701_ip = 124; continue _fun1701 }
case 70:
                    r5 = _closure1_slot10;
                    r1 = new Array(0);
                    _closure1_slot10 = r1;
                    r1 = r5.length;
                    r1 = r2 < r1;
                    r4 = undefined;
                    r3 = 0;
                    if(!r1) { _fun1701_ip = 124; continue _fun1701 }
case 98:
                    r7 = _closure1_slot18;
                    r1 = r5[r3];
                    r1 = r7.bind(r4)(r1, r6);
                    r3 = r3 + 1;
                    r1 = r5.length;
                    if(r3 < r1) { _fun1701_ip = 98; continue _fun1701 }
case 124:
                    r1 = _closure1_slot10;
                    r1 = r1.length;
                    if(!(r1 === r2)) { _fun1701_ip = 150; continue _fun1701 }
case 137:
                    r3 = _closure1_slot24;
                    r2 = undefined;
                    r1 = false;
                    r1 = r3.bind(r2)(r1);
case 150:
                    r2 = _closure1_slot13;
                    r1 = r2.forEach;
                    r0 = function(a0) { // Environment: r0
                        r1 = a0;
                        var _closure3_slot0 = r1;
                        r3 = _closure1_slot15;
                        r2 = r3.setTimeout;
                        r1 = function() { // Environment: r0
                            r0 = _closure3_slot0;
                            throw r0;
                        };
                        r0 = 0;
                        r0 = r2.bind(r3)(r1, r0);
                        return r0;
                    };
                    r0 = r1.bind(r2)(r0);
                    r0 = undefined;
                    return r0;
case 175:
                    r0 = undefined;
                    return r0;
                }
            };
            r3['callIdleCallbacks'] = r8;
            r8 = function() { // Original name: callReactNativeMicrotasks, environment: r7
                _fun1704: for(var _fun1704_ip = 0; ; ) switch(_fun1704_ip) {
case 0:
                    r2 = _closure1_slot13;
                    r0 = 0;
                    r2['length'] = r0;
                    r2 = _closure1_slot19;
                    r0 = undefined;
                    r2 = r2.bind(r0)();
                    if(!r2) { _fun1704_ip = 39; continue _fun1704 }
case 28:
                    r2 = _closure1_slot19;
                    r2 = r2.bind(r0)();
                    if(r2) { _fun1704_ip = 28; continue _fun1704 }
case 39:
                    r3 = _closure1_slot13;
                    r2 = r3.forEach;
                    r1 = function(a0) { // Environment: r1
                        r1 = a0;
                        var _closure3_slot0 = r1;
                        r3 = _closure1_slot15;
                        r2 = r3.setTimeout;
                        r1 = function() { // Environment: r0
                            r0 = _closure3_slot0;
                            throw r0;
                        };
                        r0 = 0;
                        r0 = r2.bind(r3)(r1, r0);
                        return r0;
                    };
                    r1 = r2.bind(r3)(r1);
                    return r0;
                }
            };
            r3['callReactNativeMicrotasks'] = r8;
            r8 = function(a0) { // Original name: emitTimeDriftWarning, environment: r7
                _fun1707: for(var _fun1707_ip = 0; ; ) switch(_fun1707_ip) {
case 0:
                    r0 = _closure1_slot14;
                    if(r0) { _fun1707_ip = 41; continue _fun1707 }
case 10:
                    r0 = true;
                    _closure1_slot14 = r0;
                    r0 = global;
                    r2 = r0.console;
                    r1 = r2.warn;
                    r0 = a0;
                    r0 = r1.bind(r2)(r0);
                    r0 = undefined;
                    return r0;
case 41:
                    r0 = undefined;
                    return r0;
                }
            };
            r3['emitTimeDriftWarning'] = r8;
            var _closure1_slot15 = r3;
            r7 = r1.default;
            r1 = r3;
            if(r7) { _fun1673_ip = 467; continue _fun1673 }
case 420:
            r8 = r4.console;
            r7 = r8.warn;
            r4 = "Timing native module is not available, can't set timers.";
            r4 = r7.bind(r8)(r4);
            r4 = {};
            r7 = r3.callReactNativeMicrotasks;
            r4['callReactNativeMicrotasks'] = r7;
            r7 = r3.queueReactNativeMicrotask;
            r4['queueReactNativeMicrotask'] = r7;
            r1 = r4;
case 467:
            r4 = 3;
            r4 = r6[r4];
            r4 = r5.bind(r0)(r4);
            r5 = r4.default;
            r4 = r5.setReactNativeMicrotasksCallback;
            r3 = r3.callReactNativeMicrotasks;
            r3 = r4.bind(r5)(r3);
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 154;
    r5 = [1, 155, 20, 4];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun1708: for(var _fun1708_ip = 0; ; ) switch(_fun1708_ip) {
case 0:
            r2 = a5;
            var _closure1_slot0 = r2;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r3
                _fun1709: for(var _fun1709_ip = 0; ; ) switch(_fun1709_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun1709_ip = 104; continue _fun1709 }
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
                        _fun1710: for(var _fun1710_ip = 0; ; ) switch(_fun1710_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun1710_ip = 15; continue _fun1710 }
case 9:
                            r0 = _closure2_slot0;
                            _fun1710_ip = 19; continue _fun1710;
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
            if(!r6) { _fun1708_ip = 98; continue _fun1708 }
case 84:
            r5 = r6.__esModule;
            r1 = r6;
            if(r5) { _fun1708_ip = 365; continue _fun1708 }
case 98:
            r16 = null;
            if(!(r16 !== r6)) { _fun1708_ip = 356; continue _fun1708 }
case 107:
            r7 = typeof r6;
            r5 = 'object';
            if(!(r5 !== r7)) { _fun1708_ip = 129; continue _fun1708 }
case 118:
            r5 = 'function';
            if(!(r5 === r7)) { _fun1708_ip = 356; continue _fun1708 }
case 129:
            r5 = _closure1_slot3;
            r7 = r5.bind(r0)(r0);
            if(!r7) { _fun1708_ip = 157; continue _fun1708 }
case 141:
            r5 = r7.has;
            r5 = r5.bind(r7)(r6);
            if(r5) { _fun1708_ip = 344; continue _fun1708 }
case 157:
            r5 = Object.create(r16);
            r8 = r4.Object;
            r15 = r8.defineProperty;
            if(!r15) { _fun1708_ip = 185; continue _fun1708 }
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
                if(r9 === r20) { _fun1708_ip = 202; continue _fun1708 }
case 218:
                r17 = {};
                r18 = r17.hasOwnProperty;
                r17 = r18.call;
                r17 = r17.bind(r18)(r6, r20);
                if(!r17) { _fun1708_ip = 202; continue _fun1708 }
case 239:
                r17 = null;
                if(!r15) { _fun1708_ip = 261; continue _fun1708 }
case 244:
                r19 = r4.Object;
                r18 = r19.getOwnPropertyDescriptor;
                r17 = r18.bind(r19)(r6, r20);
case 261:
                if(!r17) { _fun1708_ip = 280; continue _fun1708 }
case 264:
                r18 = r17.get;
                if(r18) { _fun1708_ip = 293; continue _fun1708 }
case 272:
                r18 = r17.set;
                if(r18) { _fun1708_ip = 293; continue _fun1708 }
case 280:
                r18 = r6[r20];
                r5[r20] = r18;
                r8 = r17;
                _fun1708_ip = 202; continue _fun1708;
case 293:
                r19 = r4.Object;
                r18 = r19.defineProperty;
                r18 = r18.bind(r19)(r5, r20, r17);
                r8 = r17;
                _fun1708_ip = 202; continue _fun1708;
            }
case 316:
            r5['default'] = r6;
            r1 = r5;
            if(!r7) { _fun1708_ip = 365; continue _fun1708 }
case 328:
            r8 = r7.set;
            r8 = r8.bind(r7)(r6, r5);
            r1 = r5;
            _fun1708_ip = 365; continue _fun1708;
case 344:
            r5 = r7.get;
            r1 = r5.bind(r7)(r6);
            _fun1708_ip = 365; continue _fun1708;
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
                _fun1711: for(var _fun1711_ip = 0; ; ) switch(_fun1711_ip) {
case 0:
                    r4 = a0;
                    var _closure2_slot0 = r4;
                    r0 = 'default';
                    if(!(r4 !== r0)) { _fun1711_ip = 152; continue _fun1711 }
case 20:
                    r0 = '__esModule';
                    if(!(r4 !== r0)) { _fun1711_ip = 152; continue _fun1711 }
case 31:
                    r1 = global;
                    r0 = r1.Object;
                    r0 = r0.prototype;
                    r6 = r0.hasOwnProperty;
                    r3 = r6.call;
                    r2 = _closure1_slot1;
                    r2 = r3.bind(r6)(r2, r4);
                    if(r2) { _fun1711_ip = 148; continue _fun1711 }
case 70:
                    r2 = _closure1_slot0;
                    r2 = r4 in r2;
                    if(!r2) { _fun1711_ip = 101; continue _fun1711 }
case 81:
                    r2 = _closure1_slot0;
                    r3 = r2[r4];
                    r2 = _closure1_slot2;
                    r2 = r2[r4];
                    if(!(r3 !== r2)) { _fun1711_ip = 144; continue _fun1711 }
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
    r6 = 155;
    r5 = [156];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun1713: for(var _fun1713_ip = 0; ; ) switch(_fun1713_ip) {
case 0:
            r2 = a5;
            r0 = function(a0) { // Original name: _getRequireWildcardCache, environment: r1
                _fun1714: for(var _fun1714_ip = 0; ; ) switch(_fun1714_ip) {
case 0:
                    r1 = global;
                    r2 = r1.WeakMap;
                    r3 = 'function';
                    r2 = typeof r2;
                    if(!(r3 === r2)) { _fun1714_ip = 104; continue _fun1714 }
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
                        _fun1715: for(var _fun1715_ip = 0; ; ) switch(_fun1715_ip) {
case 0:
                            r0 = a0;
                            if(r0) { _fun1715_ip = 15; continue _fun1715 }
case 9:
                            r0 = _closure2_slot0;
                            _fun1715_ip = 19; continue _fun1715;
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
            if(!r3) { _fun1713_ip = 88; continue _fun1713 }
case 74:
            r5 = r3.__esModule;
            r4 = r3;
            if(r5) { _fun1713_ip = 355; continue _fun1713 }
case 88:
            r14 = null;
            if(!(r14 !== r3)) { _fun1713_ip = 346; continue _fun1713 }
case 97:
            r6 = typeof r3;
            r5 = 'object';
            if(!(r5 !== r6)) { _fun1713_ip = 119; continue _fun1713 }
case 108:
            r5 = 'function';
            if(!(r5 === r6)) { _fun1713_ip = 346; continue _fun1713 }
case 119:
            r1 = _closure1_slot0;
            r5 = r1.bind(r0)(r0);
            if(!r5) { _fun1713_ip = 147; continue _fun1713 }
case 131:
            r1 = r5.has;
            r1 = r1.bind(r5)(r3);
            if(r1) { _fun1713_ip = 334; continue _fun1713 }
case 147:
            r1 = Object.create(r14);
            r6 = r15.Object;
            r13 = r6.defineProperty;
            if(!r13) { _fun1713_ip = 175; continue _fun1713 }
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
                if(r7 === r19) { _fun1713_ip = 192; continue _fun1713 }
case 208:
                r16 = {};
                r17 = r16.hasOwnProperty;
                r16 = r17.call;
                r16 = r16.bind(r17)(r3, r19);
                if(!r16) { _fun1713_ip = 192; continue _fun1713 }
case 229:
                r16 = null;
                if(!r13) { _fun1713_ip = 251; continue _fun1713 }
case 234:
                r18 = r15.Object;
                r17 = r18.getOwnPropertyDescriptor;
                r16 = r17.bind(r18)(r3, r19);
case 251:
                if(!r16) { _fun1713_ip = 270; continue _fun1713 }
case 254:
                r17 = r16.get;
                if(r17) { _fun1713_ip = 283; continue _fun1713 }
case 262:
                r17 = r16.set;
                if(r17) { _fun1713_ip = 283; continue _fun1713 }
case 270:
                r17 = r3[r19];
                r1[r19] = r17;
                r6 = r16;
                _fun1713_ip = 192; continue _fun1713;
case 283:
                r18 = r15.Object;
                r17 = r18.defineProperty;
                r17 = r17.bind(r18)(r1, r19, r16);
                r6 = r16;
                _fun1713_ip = 192; continue _fun1713;
            }
case 306:
            r1['default'] = r3;
            r4 = r1;
            if(!r5) { _fun1713_ip = 355; continue _fun1713 }
case 318:
            r6 = r5.set;
            r6 = r6.bind(r5)(r3, r1);
            r4 = r1;
            _fun1713_ip = 355; continue _fun1713;
case 334:
            r1 = r5.get;
            r4 = r1.bind(r5)(r3);
            _fun1713_ip = 355; continue _fun1713;
case 346:
            r1 = {};
            r1['default'] = r3;
            r4 = r1;
case 355:
            r3 = r4.get;
            r1 = 'Timing';
            r1 = r3.bind(r4)(r1);
            r2['default'] = r1;
            return r0;
        }
    };
    r6 = 156;
    r5 = [36];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r1 = a5;
        r0 = global;
        r4 = r0.Object;
        r3 = r4.defineProperty;
        r2 = {};
        r0 = true;
        r2['value'] = r0;
        r0 = '__esModule';
        r0 = r3.bind(r4)(r1, r0, r2);
        r0 = function(a0) { // Original name: queueMicrotask, environment: r0
            _fun1717: for(var _fun1717_ip = 0; ; ) switch(_fun1717_ip) {
case 0:
                r3 = a0;
                r0 = undefined;
                r1 = undefined;
                r2 = arguments.length;
                r1 = 1;
                if(!(!(r2 < r1))) { _fun1717_ip = 126; continue _fun1717 }
case 17:
                r2 = typeof r3;
                r1 = 'function';
                if(!(r2 === r1)) { _fun1717_ip = 92; continue _fun1717 }
case 28:
                r2 = _closure1_slot0;
                if(r2) { _fun1717_ip = 62; continue _fun1717 }
case 38:
                r1 = global;
                r5 = r1.Promise;
                r1 = r5.resolve;
                r1 = r1.bind(r5)();
                var _closure1_slot0 = r1;
                r2 = r1;
case 62:
                r1 = r2.then;
                r3 = r1.bind(r2)(r3);
                r2 = r3.catch;
                r1 = function(a0) { // Environment: r1
                    r1 = a0;
                    var _closure3_slot0 = r1;
                    r1 = global;
                    r3 = r1.setTimeout;
                    r2 = undefined;
                    r1 = function() { // Environment: r0
                        r0 = _closure3_slot0;
                        throw r0;
                    };
                    r0 = 0;
                    r0 = r3.bind(r2)(r1, r0);
                    return r0;
                };
                r1 = r2.bind(r3)(r1);
                return r0;
case 92:
                r0 = global;
                r2 = r0.TypeError;
                r0 = r2.prototype;
                r1 = Object.create(r0, {constructor: {value: r2}});
                r6 = 'The argument to queueMicrotask must be a function.';
                r7 = r1;
                r0 = new r7[r2](r6, r5);
                r0 = r0 instanceof Object ? r0 : r1;
                throw r0;
case 126:
                r0 = global;
                r2 = r0.TypeError;
                r0 = r2.prototype;
                r1 = Object.create(r0, {constructor: {value: r2}});
                r6 = 'queueMicrotask must be called with at least one argument (a function to call)';
                r7 = r1;
                r0 = new r7[r2](r6, r5);
                r0 = r0 instanceof Object ? r0 : r1;
                throw r0;
            }
        };
        r1['default'] = r0;
        r0 = undefined;
        return r0;
    };
    r6 = 157;
    r5 = new Array(0);
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        _fun1720: for(var _fun1720_ip = 0; ; ) switch(_fun1720_ip) {
case 0:
            r1 = a0;
            r3 = a1;
            r4 = a6;
            r5 = r1.RN$useAlwaysAvailableJSErrorHandling;
            r2 = true;
            if(!(r5 !== r2)) { _fun1720_ip = 97; continue _fun1720 }
case 23:
            r2 = 0;
            r5 = r4[r2];
            r2 = undefined;
            r5 = r3.bind(r2)(r5);
            r6 = r5.default;
            var _closure1_slot0 = r6;
            r5 = r6.installConsoleErrorReporter;
            r5 = r5.bind(r6)();
            r1 = r1.__fbDisableExceptionsManager;
            if(r1) { _fun1720_ip = 97; continue _fun1720 }
case 64:
            r1 = 1;
            r1 = r4[r1];
            r1 = r3.bind(r2)(r1);
            r2 = r1.default;
            r1 = r2.setGlobalHandler;
            r0 = function(a0, a1) { // Original name: handleError, environment: r0
                _fun1721: for(var _fun1721_ip = 0; ; ) switch(_fun1721_ip) {
case 0:
                    r0 = a0;
                    r1 = a1;
case 6: // try_start_0
                    r4 = _closure1_slot0;
                    r3 = r4.handleException;
                    r2 = r0;
                    r1 = r3.bind(r4)(r2, r1);
case 28: // try_end0
                    r1 = undefined;
                    return r1;
case 32: // catch_target0
                    CatchBlockStart(arg_register=1);
                    r2 = global;
                    r4 = r2.console;
                    r3 = r4.log;
                    r2 = r1.message;
                    r1 = 'Failed to print error: ';
                    r1 = r3.bind(r4)(r1, r2);
                    throw r0;
                }
            };
            r0 = r1.bind(r2)(r0);
case 97:
            r0 = undefined;
            return r0;
        }
    };
    r6 = 158;
    r5 = [159, 18];
    r5 = r8.bind(r2)(r7, r6, r5);
    r8 = r0.__d;
    r7 = function(a0, a1, a2, a3, a4, a5, a6) { // Environment: r3
        r7 = a1;
        r2 = a5;
        r8 = a6;
        r0 = a0;
        var _closure1_slot0 = r0;
        var _closure1_slot1 = r7;
        var _closure1_slot2 = r8;
        r0 = function(a0, a1, a2) { // Original name: _callSuper, environment: r3
            _fun1723: for(var _fun1723_ip = 0; ; ) switch(_fun1723_ip) {
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
                if(r0) { _fun1723_ip = 61; continue _fun1723 }
case 48:
                r0 = r8.apply;
                r0 = r0.bind(r8)(r3, r5);
                _fun1723_ip = 107; continue _fun1723;
case 61:
                r6 = global;
                r7 = r6.Reflect;
                r6 = r7.construct;
                if(r5) { _fun1723_ip = 81; continue _fun1723 }
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
        r0 = function() { // Original name: _isNativeReflectConstruct, environment: r3
            _fun1724: for(var _fun1724_ip = 0; ; ) switch(_fun1724_ip) {
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
                _fun1724_ip = 74; continue _fun1724;
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
        r0 = function(a0) { // Original name: preprocessException, environment: r3
            _fun1728: for(var _fun1728_ip = 0; ; ) switch(_fun1728_ip) {
case 0:
                r0 = a0;
                r1 = _closure1_slot9;
                if(!r1) { _fun1728_ip = 68; continue _fun1728 }
case 13:
                r1 = _closure1_slot10;
                if(r1) { _fun1728_ip = 68; continue _fun1728 }
case 20:
                r1 = true;
                _closure1_slot10 = r1;
case 26: // try_start_0 // try_start_1
                r4 = _closure1_slot9;
                r2 = r0;
                r1 = undefined;
                r1 = r4.bind(r1)(r2);
case 40: // try_end0 // try_end1
                r2 = false;
                _closure1_slot10 = r2;
                return r1;
case 48: // try_start_2 // catch_target0
                CatchBlockStart(arg_register=1);
case 50: // try_end2
                r1 = false;
                _closure1_slot10 = r1;
                _fun1728_ip = 68; continue _fun1728;
case 58: // catch_target1 // catch_target2
                CatchBlockStart(arg_register=1);
                r2 = false;
                _closure1_slot10 = r2;
                throw r1;
case 68:
                return r0;
            }
        };
        var _closure1_slot16 = r0;
        r0 = function(a0, a1, a2) { // Original name: reportException, environment: r3
            _fun1729: for(var _fun1729_ip = 0; ; ) switch(_fun1729_ip) {
case 0:
                r2 = a0;
                r4 = a1;
                r5 = _closure1_slot1;
                r3 = _closure1_slot2;
                r0 = 7;
                r3 = r3[r0];
                r0 = undefined;
                r3 = r5.bind(r0)(r3);
                r6 = r3.default;
                r5 = null;
                r7 = r2 == r5;
                r3 = undefined;
                if(r7) { _fun1729_ip = 52; continue _fun1729 }
case 47:
                r3 = r2.stack;
case 52:
                r10 = r6.bind(r0)(r3);
                r3 = _closure1_slot12;
                r9 = r3 + 1;
                _closure1_slot12 = r9;
                r12 = r2.message;
                if(r12) { _fun1729_ip = 80; continue _fun1729 }
case 76:
                r12 = '';
case 80:
                r3 = r2.componentStack;
                r6 = r12;
                if(!(r3 != r5)) { _fun1729_ip = 123; continue _fun1729 }
case 92:
                r8 = r2.componentStack;
                r3 = global;
                r3 = r3.HermesInternal;
                r7 = r3.concat;
                r3 = '\n\nThis error is located at:';
                r3 = r7.bind(r3)(r8);
                r6 = r12 + r3;
case 123:
                r3 = r2.name;
                r7 = r3 == r5;
                r13 = '';
                r3 = r13;
                if(r7) { _fun1729_ip = 182; continue _fun1729 }
case 142:
                r7 = r2.name;
                r3 = r13;
                if(!(r7 !== r3)) { _fun1729_ip = 182; continue _fun1729 }
case 154:
                r11 = r2.name;
                r7 = global;
                r7 = r7.HermesInternal;
                r8 = r7.concat;
                r7 = ': ';
                r3 = r8.bind(r13)(r11, r7);
case 182:
                r7 = r6.startsWith;
                r7 = r7.bind(r6)(r3);
                r8 = r6;
                if(r7) { _fun1729_ip = 203; continue _fun1729 }
case 199:
                r8 = r3 + r6;
case 203:
                r3 = r2.jsEngine;
                r14 = r8;
                if(!(r3 != r5)) { _fun1729_ip = 246; continue _fun1729 }
case 216:
                r7 = r2.jsEngine;
                r3 = global;
                r3 = r3.HermesInternal;
                r6 = r3.concat;
                r3 = ', js engine: ';
                r14 = r6.bind(r13)(r8, r3, r7);
case 246:
                r6 = global;
                r15 = r6.Object;
                r11 = r15.assign;
                r3 = _closure1_slot11;
                r8 = r2[r3];
                r7 = {};
                r3 = r2.jsEngine;
                r7['jsEngine'] = r3;
                r3 = r2.stack;
                r7['rawStack'] = r3;
                r3 = {};
                r8 = r11.bind(r15)(r3, r8, r7);
                r3 = r2.cause;
                if(!(r3 != r5)) { _fun1729_ip = 380; continue _fun1729 }
case 309:
                r3 = r2.cause;
                r7 = typeof r3;
                r3 = 'object';
                if(!(r7 === r3)) { _fun1729_ip = 380; continue _fun1729 }
case 326:
                r3 = r2.cause;
                r3 = r3.stackSymbols;
                r8['stackSymbols'] = r3;
                r3 = r2.cause;
                r3 = r3.stackReturnAddresses;
                r8['stackReturnAddresses'] = r3;
                r3 = r2.cause;
                r3 = r3.stackElements;
                r8['stackElements'] = r3;
case 380:
                r7 = _closure1_slot16;
                r3 = {};
                r3['message'] = r14;
                r11 = null;
                if(!(r14 !== r12)) { _fun1729_ip = 399; continue _fun1729 }
case 396:
                r11 = r12;
case 399:
                r3['originalMessage'] = r11;
                r11 = r2.name;
                r12 = r11 == r5;
                r11 = null;
                if(r12) { _fun1729_ip = 434; continue _fun1729 }
case 418:
                r12 = r2.name;
                r11 = null;
                if(!(r12 !== r13)) { _fun1729_ip = 434; continue _fun1729 }
case 429:
                r11 = r2.name;
case 434:
                r3['name'] = r11;
                r11 = r2.componentStack;
                r13 = typeof r11;
                r12 = 'string';
                r11 = null;
                if(!(r13 === r12)) { _fun1729_ip = 461; continue _fun1729 }
case 456:
                r11 = r2.componentStack;
case 461:
                r3['componentStack'] = r11;
                r3['stack'] = r10;
                r3['id'] = r9;
                r3['isFatal'] = r4;
                r3['extraData'] = r8;
                r3 = r7.bind(r0)(r3);
                r7 = a2;
                if(!r7) { _fun1729_ip = 515; continue _fun1729 }
case 494:
                r8 = r6.console;
                r7 = r8.error;
                r6 = r3.message;
                r6 = r7.bind(r8)(r6);
case 515:
                if(r4) { _fun1729_ip = 531; continue _fun1729 }
case 518:
                r6 = r2.type;
                r2 = 'warn';
                if(!(r6 !== r2)) { _fun1729_ip = 632; continue _fun1729 }
case 531:
                r6 = _closure1_slot1;
                r7 = _closure1_slot2;
                r2 = 8;
                r2 = r7[r2];
                r2 = r6.bind(r0)(r2);
                r2 = r2.default;
                if(!r2) { _fun1729_ip = 632; continue _fun1729 }
case 559:
                if(!r4) { _fun1729_ip = 621; continue _fun1729 }
case 562:
                r4 = _closure1_slot0;
                r4 = r4.RN$hasHandledFatalException;
                if(!(r4 != r5)) { _fun1729_ip = 593; continue _fun1729 }
case 576:
                r6 = _closure1_slot0;
                r4 = r6.RN$hasHandledFatalException;
                r4 = r4.bind(r6)();
                if(r4) { _fun1729_ip = 634; continue _fun1729 }
case 593:
                r4 = _closure1_slot0;
                r4 = r4.RN$notifyOfFatalException;
                if(!(r4 != r5)) { _fun1729_ip = 621; continue _fun1729 }
case 607:
                r4 = _closure1_slot0;
                r1 = r4.RN$notifyOfFatalException;
                r1 = r1.bind(r4)();
case 621:
                r1 = r2.reportException;
                r1 = r1.bind(r2)(r3);
case 632:
                return r0;
case 634:
                return r0;
            }
        };
        var _closure1_slot17 = r0;
        r0 = function() { // Original name: reactConsoleErrorHandler, environment: r3
            _fun1731: for(var _fun1731_ip = 0; ; ) switch(_fun1731_ip) {
case 0:
                r0 = undefined;
                r7 = undefined;
                r6 = arguments.length;
                r1 = global;
                r3 = r1.Array;
                r4 = r3.prototype;
                r4 = Object.create(r4, {constructor: {value: r3}});
                r12 = r4;
                r11 = r6;
                r3 = new r12[r3](r11, r10);
                r5 = r3 instanceof Object ? r3 : r4;
                r4 = 0;
                r8 = r4 < r6;
                r3 = 0;
                if(!r8) { _fun1731_ip = 66; continue _fun1731 }
case 51:
                r8 = arguments[r3];
                r5[r3] = r8;
                r3 = r3 + 1;
                if(r3 < r6) { _fun1731_ip = 51; continue _fun1731 }
case 66:
                r7 = r1.console;
                r6 = r7._errorOriginal;
                r3 = r6.apply;
                r3 = r3.bind(r6)(r7, r5);
                r1 = r1.console;
                r1 = r1.reportErrorsAsExceptions;
                if(r1) { _fun1731_ip = 106; continue _fun1731 }
case 104:
                return r0;
case 106:
                r3 = _closure1_slot13;
                if(r3) { _fun1731_ip = 355; continue _fun1731 }
case 119:
