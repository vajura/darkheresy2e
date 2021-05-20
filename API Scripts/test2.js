function calcAdvExp() {
    getSectionIDs("repeating_advancements", (sectionIDs) => {
        let repeatingValues = [];
        for(let a = 0; a < sectionIDs.length; a++) {
            repeatingValues.push(`repeating_advancements_${sectionIDs[a]}_advancement1rexp}`)
            repeatingValues.push(`repeating_advancements_${sectionIDs[a]}_advancement2rexp}`)
            repeatingValues.push(`repeating_advancements_${sectionIDs[a]}_advancement3rexp}`)
        }
        getAttrs(repeatingValues, (values) => {
            //setAttrs({
            //    repeating_spells_SpellDamage: Math.floor(values.repeating_spells_SpellLevel / 2) + 10
            //});
            console.log('Values get');
            console.log(values);
        });
    });
}
on('change:repeating_advancements', () => {
    calcAdvExp();
});
/*
attr_EXPToSpend
attr_EXPSpent
attr_EXPTotal
repeating_advancements
attr_advancement1Rexp
attr_advancement2Rexp
attr_advancement3Rexp
*/
