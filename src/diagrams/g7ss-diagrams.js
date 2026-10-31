// Grade 7 SS "Label the Diagram": diagrams from Jamie's own notes (his "How the structure of the Earth leads to
// volcanoes" sheet, 31 Oct 2026; original in src/assets/tests/g7ss-volcano-sheet-original.jpg). The labels were wiped
// off the picture and each pin sits where the label was. Memo lines come from the same sheet.
// Planned next (Jamie will send the diagrams): 3 ways tectonic plates move, convection currents, how an earthquake happens.
// Each diagram: { key, name, t (a deck topic key: its icon and colour are used), pic, pins: [[x %, y %, label, memo line], ...] }
const DIAGRAMS_G7SS = {
  id: 'g7ss-label', title: 'Grade 7 SS Diagrams', grade: 7, subject: 'Social Sciences',
  // pictures: key -> file in src/assets/tests (inlined by the build)
  pics: { earth: '__TESTIMG_g7ss-earth-layers__', volcano: '__TESTIMG_g7ss-volcano__' },
  diagrams: [
    { key: 'earth', name: 'Layers of the Earth', t: 'Q', pic: 'earth', pins: [
      [87, 5, 'Crust', 'The thin, solid, brittle outer layer, made of rock. It is broken into tectonic plates that move.'],
      [87, 26.5, 'Mantle', 'A very thick layer of hot, solid rock. Heat makes some of it melt and move slowly in currents.'],
      [87, 59, 'Outer core', 'A liquid layer made of iron and nickel. Its movement creates Earth’s magnetic field.'],
      [87, 81.8, 'Inner core', 'A solid ball of iron and nickel, extremely hot and under huge pressure.'],
    ] },
    { key: 'volcano', name: 'Parts of a Volcano', t: 'Q', pic: 'volcano', pins: [
      [84.3, 14.2, 'Ash, gas and steam', 'Blasted out of the top of the volcano when it erupts.'],
      [82.2, 27.7, 'Crater', 'The bowl-shaped top of a volcano.'],
      [84.8, 38.5, 'Lava flow', 'Lava is magma that reaches the Earth’s surface. It flows down the sides and cools.'],
      [84.7, 58.9, 'Layers of lava and ash', 'Every eruption adds a new layer, building the volcano bigger.'],
      [32.4, 64.6, 'Vent', 'An opening in the crust through which magma escapes.'],
      [82.8, 87.7, 'Magma chamber', 'Where molten rock collects beneath the crust. Pressure builds up!'],
    ] },
  ],
};
if (typeof module !== 'undefined') module.exports = DIAGRAMS_G7SS;
