var _0x3403 = ["\x69\x6E\x70\x75\x74", "\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72", "\x73\x65\x6C\x65\x63\x74", "\x62\x75\x74\x74\x6F\x6E", "\x6E\x61\x74\x69\x67\x61", "\x67\x65\x74\x49\x74\x65\x6D", "", "\x73\x65\x74\x49\x74\x65\x6D", "\x2C", "\x73\x70\x6C\x69\x74", "\x6C\x65\x6E\x67\x74\x68", "\x69\x6E\x63\x6C\x75\x64\x65\x73", "\u062A\u0645\x20\u0627\u064A\u0642\u0627\u0641\x20\u0627\u0633\u062A\u0639\u0644\u0627\u0645\u0643\x20\u0639\u0646\x20\u0627\u0644\u062F\u0631\u062C\u0627\u062A\x20\u0644\u0627\u0646\x20\u0627\u0644\u062D\u062F\x20\u0627\u0644\u0627\u0642\u0635\u064A\x20\u0644\u0644\u0627\u0633\u062A\u0639\u0644\u0627\u0645\u0627\u062A\x20\u0645\u0631\u062A\u064A\u0646\x20\u0641\u0642\u0637\x20\u064A\u0645\u0643\u0646\u0643\x20\u0627\u0633\u062A\u062E\u062F\u0627\u0645\x20\u0641\u0642\u0637\x20\u0631\u0642\u0645\u064A\u0646\x20\u0627\u0644\u062C\u0644\u0648\u0633\x20\u0627\u0644\u0644\u064A\x20\u0627\u0633\u062A\u0639\u0644\u0645\u062A\x20\u0639\u0646\u0647\u0645\x20\u0645\u0646\x20\u0642\u0628\u0644\x20", "\x20\u0648\x20", "\x6D\x79\x2D\x77\x6F\x72\x64", "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64", "\x63\x6C\x69\x63\x6B", "\x72\x65\x6D\x6F\x76\x65\x49\x74\x65\x6D", "\x72\x65\x6C\x6F\x61\x64", "\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72", "\x6F\x6E\x63\x6C\x69\x63\x6B", "\x76\x61\x6C\x75\x65", "\x73\x65\x63\x31", "\x73\x65\x63\x32\x5F\x61\x6C\x6D\x65", "\x73\x65\x63\x32\x5F\x61\x64\x61\x62\x69", "\u062C\u0644\u0648\u0633", "\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C", "\x62\x6F\x64\x79", "\x64\x69\x76", "\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74", "\x74\x65\x78\x74\x43\x6F\x6E\x74\x65\x6E\x74", "\u062E\u0637\u0623\x3A\x20\u0644\u0645\x20\u064A\u062A\u0645\x20\u0627\u0644\u0639\u062B\u0648\u0631\x20\u0639\u0644\u0649\x20\u0631\u0642\u0645\x20\u0627\u0644\u062C\u0644\u0648\u0633\x2E", "\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x43\x6F\x6C\x6F\x72", "\x73\x74\x79\x6C\x65", "\x72\x65\x64", "\x63\x6F\x6C\x6F\x72", "\x77\x68\x69\x74\x65", "\x70\x61\x64\x64\x69\x6E\x67", "\x31\x30\x70\x78", "\x62\x6F\x72\x64\x65\x72\x52\x61\x64\x69\x75\x73", "\x35\x70\x78", "\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64", "\x70\x6F\x73\x69\x74\x69\x6F\x6E", "\x66\x69\x78\x65\x64", "\x6C\x65\x66\x74", "\x35\x30\x25", "\x74\x6F\x70", "\x74\x72\x61\x6E\x73\x66\x6F\x72\x6D", "\x74\x72\x61\x6E\x73\x6C\x61\x74\x65\x28\x2D\x35\x30\x25\x2C\x20\x2D\x35\x30\x25\x29", "\x7A\x49\x6E\x64\x65\x78", "\x39\x39\x39\x39", "\x64\x69\x73\x70\x6C\x61\x79", "\x6E\x6F\x6E\x65"];
let input = document[_0x3403[1]](_0x3403[0]);
let year = document[_0x3403[1]](_0x3403[2]);
let btn = document[_0x3403[1]](_0x3403[3]);
if (!localStorage[_0x3403[5]](_0x3403[4])) {
    localStorage[_0x3403[7]](_0x3403[4], _0x3403[6])
}
function stopSearch(_0x2119x5) {
    let _0x2119x6 = [... new Set(localStorage[_0x3403[5]](_0x3403[4])[_0x3403[9]](_0x3403[8]))];
    return _0x2119x6[_0x3403[10]] <= 2 || _0x2119x6[_0x3403[11]](_0x2119x5)
}
function stopMessage() {
    let _0x2119x6 = localStorage[_0x3403[5]](_0x3403[4])[_0x3403[9]](_0x3403[8]);
    alert(_0x3403[12] + _0x2119x6[0] + _0x3403[13] + _0x2119x6[1])
}
const word = document[_0x3403[15]](_0x3403[14]);
let clicks = 0;
word[_0x3403[19]](_0x3403[16], function () {
    clicks++; if (clicks === 3) {
        localStorage[_0x3403[17]](_0x3403[4]); location[_0x3403[18]]()
    }
}
); btn[_0x3403[20]] = () => {
    let _0x2119x5 = input[_0x3403[21]];
    if (!stopSearch(_0x2119x5)) {
        stopMessage(); return
    }
    let _0x2119xa = 0;
    let _0x2119xb = year[_0x3403[21]];
    let _0x2119xc = [];
    if (_0x2119xb == _0x3403[22]) {
        _0x2119xc = sec_1
    }
    else {
        if (_0x2119xb == _0x3403[23]) {
            _0x2119xc = sec_2_alme
        }
        else {
            if (_0x2119xb == _0x3403[24]) {
                _0x2119xc = sec_2_adabi
            }
        }
    }
    for (let _0x2119xd = 0; _0x2119xd < _0x2119xc[_0x3403[10]]; _0x2119xd++) {
        _0x2119xa = _0x2119x5 == _0x2119xc[_0x2119xd][_0x3403[25]] ? _0x2119xd : 0; if (_0x2119xa) {
            break
        }
    }
    if (_0x2119xa != 0) {
        localStorage[_0x3403[7]](_0x3403[4], [... new Set(String(localStorage[_0x3403[5]](_0x3403[4]) + _0x2119x5 + _0x3403[8])[_0x3403[9]](_0x3403[8]))]); document[_0x3403[27]][_0x3403[26]] = getNatiga(_0x2119xa, _0x2119xc)
    }
    else {
        const _0x2119xe = document[_0x3403[29]](_0x3403[28]);
        _0x2119xe[_0x3403[30]] = _0x3403[31]; _0x2119xe[_0x3403[33]][_0x3403[32]] = _0x3403[34]; _0x2119xe[_0x3403[33]][_0x3403[35]] = _0x3403[36]; _0x2119xe[_0x3403[33]][_0x3403[37]] = _0x3403[38]; _0x2119xe[_0x3403[33]][_0x3403[39]] = _0x3403[40]; document[_0x3403[27]][_0x3403[41]](_0x2119xe); _0x2119xe[_0x3403[33]][_0x3403[42]] = _0x3403[43]; _0x2119xe[_0x3403[33]][_0x3403[44]] = _0x3403[45]; _0x2119xe[_0x3403[33]][_0x3403[46]] = _0x3403[45]; _0x2119xe[_0x3403[33]][_0x3403[47]] = _0x3403[48]; _0x2119xe[_0x3403[33]][_0x3403[49]] = _0x3403[50]; setTimeout(function () {
            _0x2119xe[_0x3403[33]][_0x3403[51]] = _0x3403[52]
        }
            , 3000)
    }
}
