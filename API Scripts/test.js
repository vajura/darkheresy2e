on('ready', () => {
    sendChat('test', 'started');
});
//{'name':'set_manual','current':'5','max':'','_id':'-Ma5KNgiclvVsELIiRaL','_type':'attribute','_characterid':'-Ma5KLRFEbrszt8hViu9'}
on('change:attribute', (ev) => {
    log(ev.get('name'));
    //if (ev.get('name') === 'EXPTotal' || ev.get('name') === 'EXPSpent') {
    //    calculateAdvExp(ev);
    //}
});

function calculateAdvExp(ev) {
    const charId = ev.get('_characterid');
    const total = getAttrByName(charId, 'EXPTotal');
    const spent = getAttrByName(charId, 'EXPSpent');
    const toSpend = findObjs({
        type: 'attribute',
        characterid: charId,
        name: 'EXPToSpend'
    }, {caseInsensitive: true})[0];
    toSpend.set('current', sanitizeToNumber(total) - sanitizeToNumber(spent));
}

function sanitizeToNumber(input) {
    let num = 0;
    if (typeof input !== 'number' && typeof input !== 'string') {
        return num;
    }
    if (typeof input === 'string') {
        num = parseInt(input, 10);
    } else {
        num = input;
    }
    return num;
}
