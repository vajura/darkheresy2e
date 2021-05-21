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
function calcAdvExp() {
    getSectionIDs('repeating_advancements', (sectionIDs) => {
        let repeatingValues = [];
        let staticValues = [];
        for(let a = 0; a < sectionIDs.length; a++) {
            repeatingValues.push(`repeating_advancements_${sectionIDs[a]}_advancement1rexp`);
            repeatingValues.push(`repeating_advancements_${sectionIDs[a]}_advancement2rexp`);
            repeatingValues.push(`repeating_advancements_${sectionIDs[a]}_advancement3rexp`);
        }
        staticValues.push('exptotal');
        getAttrs(staticValues, (values1) => {
            getAttrs(repeatingValues, (values2) => {
                const keys = Object.keys(values2);
                let sum = 0;
                for (let a = 0; a < keys.length; a++) {
                    sum += sanitizeToNumber(values2[keys[a]]);
                }
                setAttrs({
                    expspent: sum,
                    exptoSpend: values1['exptotal'] - sum
                });
            });
        });
    });
}
on('change:repeating_advancements change:exptotal sheet:opened', () => {
    calcAdvExp();
});
