const reactions = {
    facil: [
        { reactants: ['S', 'O2'], products: ['SO2'], balanced: [1, 1, 1], hint: 'Formação do dióxido de enxofre' },
        { reactants: ['Ca', 'O2'], products: ['CaO'], balanced: [2, 1, 2], hint: 'O cálcio se oxida' },
        { reactants: ['Mg', 'O2'], products: ['MgO'], balanced: [2, 1, 2], hint: 'O magnésio queima' },
        { reactants: ['N2', 'H2'], products: ['NH3'], balanced: [1, 3, 2], hint: 'Processo de Haber' },
        { reactants: ['Na', 'Cl2'], products: ['NaCl'], balanced: [2, 1, 2], hint: 'Sódio com cloro' },
        { reactants: ['K', 'Br2'], products: ['KBr'], balanced: [2, 1, 2], hint: 'Potássio com bromo' },
        { reactants: ['Li', 'O2'], products: ['Li2O'], balanced: [4, 1, 2], hint: 'Lítio forma óxido' },
        { reactants: ['C', 'O2'], products: ['CO2'], balanced: [1, 1, 1], hint: 'Combustão do carbono' },
        { reactants: ['H2', 'O2'], products: ['H2O'], balanced: [2, 1, 2], hint: 'Formação da água' },
        { reactants: ['N2', 'O2'], products: ['NO'], balanced: [1, 1, 2], hint: 'Óxido nítrico' },
        { reactants: ['Fe', 'O2'], products: ['FeO'], balanced: [2, 1, 2], hint: 'Óxido ferroso' },
        { reactants: ['Cu', 'O2'], products: ['CuO'], balanced: [2, 1, 2], hint: 'Óxido de cobre' },
        { reactants: ['Zn', 'O2'], products: ['ZnO'], balanced: [2, 1, 2], hint: 'Óxido de zinco' },
        { reactants: ['Al', 'Cl2'], products: ['AlCl3'], balanced: [2, 3, 2], hint: 'Cloreto de alumínio' },
        { reactants: ['Mg', 'N2'], products: ['Mg3N2'], balanced: [3, 1, 1], hint: 'Nitreto de magnésio' },
        { reactants: ['Ca', 'Cl2'], products: ['CaCl2'], balanced: [1, 1, 1], hint: 'Cloreto de cálcio' },
        { reactants: ['Fe', 'S'], products: ['FeS'], balanced: [1, 1, 1], hint: 'Sulfeto ferroso' },
        { reactants: ['Cu', 'S'], products: ['Cu2S'], balanced: [2, 1, 1], hint: 'Sulfeto de cobre' },
        { reactants: ['Na', 'F2'], products: ['NaF'], balanced: [2, 1, 2], hint: 'Fluoreto de sódio' },
        { reactants: ['K', 'I2'], products: ['KI'], balanced: [2, 1, 2], hint: 'Iodeto de potássio' },
        { reactants: ['Mg', 'Br2'], products: ['MgBr2'], balanced: [1, 1, 1], hint: 'Brometo de magnésio' },
        { reactants: ['Ca', 'Br2'], products: ['CaBr2'], balanced: [1, 1, 1], hint: 'Brometo de cálcio' },
        { reactants: ['Al', 'Br2'], products: ['AlBr3'], balanced: [2, 3, 2], hint: 'Brometo de alumínio' },
        { reactants: ['Fe', 'Br2'], products: ['FeBr2'], balanced: [1, 1, 1], hint: 'Brometo ferroso' },
        { reactants: ['Zn', 'Cl2'], products: ['ZnCl2'], balanced: [1, 1, 1], hint: 'Cloreto de zinco' },
        { reactants: ['Na', 'Br2'], products: ['NaBr'], balanced: [2, 1, 2], hint: 'Brometo de sódio' },
        { reactants: ['Li', 'Cl2'], products: ['LiCl'], balanced: [2, 1, 2], hint: 'Cloreto de lítio' },
        { reactants: ['Ba', 'O2'], products: ['BaO'], balanced: [2, 1, 2], hint: 'Óxido de bário' },
        { reactants: ['Sr', 'O2'], products: ['SrO'], balanced: [2, 1, 2], hint: 'Óxido de estrôncio' },
        { reactants: ['Rb', 'Cl2'], products: ['RbCl'], balanced: [2, 1, 2], hint: 'Cloreto de rubídio' },
        { reactants: ['Cs', 'Cl2'], products: ['CsCl'], balanced: [2, 1, 2], hint: 'Cloreto de césio' },
        { reactants: ['Al', 'S'], products: ['Al2S3'], balanced: [2, 3, 1], hint: 'Sulfeto de alumínio' },
        { reactants: ['Fe', 'Cl2'], products: ['FeCl2'], balanced: [1, 1, 1], hint: 'Cloreto ferroso' },
        { reactants: ['Mg', 'F2'], products: ['MgF2'], balanced: [1, 1, 1], hint: 'Fluoreto de magnésio' },
        { reactants: ['Ca', 'F2'], products: ['CaF2'], balanced: [1, 1, 1], hint: 'Fluoreto de cálcio' },
        { reactants: ['Na', 'I2'], products: ['NaI'], balanced: [2, 1, 2], hint: 'Iodeto de sódio' },
        { reactants: ['K', 'F2'], products: ['KF'], balanced: [2, 1, 2], hint: 'Fluoreto de potássio' },
        { reactants: ['Li', 'Br2'], products: ['LiBr'], balanced: [2, 1, 2], hint: 'Brometo de lítio' },
        { reactants: ['Cu', 'Cl2'], products: ['CuCl2'], balanced: [1, 1, 1], hint: 'Cloreto de cobre' },
        { reactants: ['Zn', 'Br2'], products: ['ZnBr2'], balanced: [1, 1, 1], hint: 'Brometo de zinco' },
        { reactants: ['Fe', 'I2'], products: ['FeI2'], balanced: [1, 1, 1], hint: 'Iodeto ferroso' },
        { reactants: ['Al', 'I2'], products: ['AlI3'], balanced: [2, 3, 2], hint: 'Iodeto de alumínio' },
        { reactants: ['Mg', 'I2'], products: ['MgI2'], balanced: [1, 1, 1], hint: 'Iodeto de magnésio' },
        { reactants: ['Ca', 'I2'], products: ['CaI2'], balanced: [1, 1, 1], hint: 'Iodeto de cálcio' },
        { reactants: ['Ba', 'Cl2'], products: ['BaCl2'], balanced: [1, 1, 1], hint: 'Cloreto de bário' },
        { reactants: ['Ba', 'Br2'], products: ['BaBr2'], balanced: [1, 1, 1], hint: 'Brometo de bário' },
        { reactants: ['Sr', 'Cl2'], products: ['SrCl2'], balanced: [1, 1, 1], hint: 'Cloreto de estrôncio' },
        { reactants: ['Li', 'I2'], products: ['LiI'], balanced: [2, 1, 2], hint: 'Iodeto de lítio' },
        { reactants: ['K', 'Cl2'], products: ['KCl'], balanced: [2, 1, 2], hint: 'Cloreto de potássio' },
        { reactants: ['Rb', 'Br2'], products: ['RbBr'], balanced: [2, 1, 2], hint: 'Brometo de rubídio' },
        { reactants: ['Cs', 'Br2'], products: ['CsBr'], balanced: [2, 1, 2], hint: 'Brometo de césio' },
        { reactants: ['Zn', 'I2'], products: ['ZnI2'], balanced: [1, 1, 1], hint: 'Iodeto de zinco' },
        { reactants: ['Cu', 'Br2'], products: ['CuBr2'], balanced: [1, 1, 1], hint: 'Brometo de cobre' },
        { reactants: ['Fe', 'F2'], products: ['FeF2'], balanced: [1, 1, 1], hint: 'Fluoreto ferroso' },
        { reactants: ['Al', 'F2'], products: ['AlF3'], balanced: [2, 3, 2], hint: 'Fluoreto de alumínio' },
        { reactants: ['Ba', 'F2'], products: ['BaF2'], balanced: [1, 1, 1], hint: 'Fluoreto de bário' },
        { reactants: ['Sr', 'Br2'], products: ['SrBr2'], balanced: [1, 1, 1], hint: 'Brometo de estrôncio' },
        { reactants: ['Mg', 'Cl2'], products: ['MgCl2'], balanced: [1, 1, 1], hint: 'Cloreto de magnésio' },
        { reactants: ['Ba', 'I2'], products: ['BaI2'], balanced: [1, 1, 1], hint: 'Iodeto de bário' },
        { reactants: ['Sr', 'I2'], products: ['SrI2'], balanced: [1, 1, 1], hint: 'Iodeto de estrôncio' },
        { reactants: ['Rb', 'I2'], products: ['RbI'], balanced: [2, 1, 2], hint: 'Iodeto de rubídio' },
        { reactants: ['Cs', 'I2'], products: ['CsI'], balanced: [2, 1, 2], hint: 'Iodeto de césio' },
        { reactants: ['Cu', 'I2'], products: ['CuI'], balanced: [2, 1, 2], hint: 'Iodeto de cobre' },
        { reactants: ['Fe', 'Cl2'], products: ['FeCl3'], balanced: [2, 3, 2], hint: 'Cloreto férrico' },
        { reactants: ['Zn', 'F2'], products: ['ZnF2'], balanced: [1, 1, 1], hint: 'Fluoreto de zinco' },
        { reactants: ['Cu', 'F2'], products: ['CuF2'], balanced: [1, 1, 1], hint: 'Fluoreto de cobre' },
        { reactants: ['Na', 'S'], products: ['Na2S'], balanced: [2, 1, 1], hint: 'Sulfeto de sódio' },
        { reactants: ['K', 'S'], products: ['K2S'], balanced: [2, 1, 1], hint: 'Sulfeto de potássio' },
        { reactants: ['Li', 'S'], products: ['Li2S'], balanced: [2, 1, 1], hint: 'Sulfeto de lítio' },
        { reactants: ['Ca', 'S'], products: ['CaS'], balanced: [1, 1, 1], hint: 'Sulfeto de cálcio' },
        { reactants: ['Ba', 'S'], products: ['BaS'], balanced: [1, 1, 1], hint: 'Sulfeto de bário' },
        { reactants: ['Sr', 'S'], products: ['SrS'], balanced: [1, 1, 1], hint: 'Sulfeto de estrôncio' },
        { reactants: ['Mg', 'S'], products: ['MgS'], balanced: [1, 1, 1], hint: 'Sulfeto de magnésio' },
        { reactants: ['Al', 'N2'], products: ['AlN'], balanced: [2, 1, 2], hint: 'Nitreto de alumínio' }
    ],
    medio: [
        { reactants: ['Fe', 'O2', 'H2O'], products: ['Fe(OH)3'], balanced: [4, 3, 6, 4], hint: 'Ferro com oxigênio e água' },
        { reactants: ['Al', 'O2'], products: ['Al2O3'], balanced: [4, 3, 2], hint: 'Óxido de alumínio' },
        { reactants: ['Na', 'H2O'], products: ['NaOH', 'H2'], balanced: [2, 2, 2, 1], hint: 'Sódio com água' },
        { reactants: ['Ca', 'H2O'], products: ['Ca(OH)2', 'H2'], balanced: [1, 2, 1, 1], hint: 'Cálcio com água' },
        { reactants: ['Mg', 'HCl'], products: ['MgCl2', 'H2'], balanced: [1, 2, 1, 1], hint: 'Magnésio com HCl' },
        { reactants: ['Zn', 'HCl'], products: ['ZnCl2', 'H2'], balanced: [1, 2, 1, 1], hint: 'Zinco com HCl' },
        { reactants: ['P', 'O2'], products: ['P2O5'], balanced: [4, 5, 2], hint: 'Pentóxido de fósforo' },
        { reactants: ['K', 'Cl2'], products: ['KCl'], balanced: [2, 1, 2], hint: 'Cloreto de potássio' },
        { reactants: ['Al', 'HCl'], products: ['AlCl3', 'H2'], balanced: [2, 6, 2, 3], hint: 'Alumínio com HCl' },
        { reactants: ['Fe', 'HCl'], products: ['FeCl2', 'H2'], balanced: [1, 2, 1, 1], hint: 'Ferro com HCl' },
        { reactants: ['Fe', 'S'], products: ['Fe2S3'], balanced: [2, 3, 1], hint: 'Sulfeto férrico' },
        { reactants: ['Al', 'N2'], products: ['AlN'], balanced: [2, 1, 2], hint: 'Nitreto de alumínio' },
        { reactants: ['Mg', 'H2O'], products: ['Mg(OH)2', 'H2'], balanced: [1, 2, 1, 1], hint: 'Magnésio com água' },
        { reactants: ['Fe', 'O2'], products: ['Fe3O4'], balanced: [3, 2, 1], hint: 'Magnetita' },
        { reactants: ['Cu', 'H2SO4'], products: ['CuSO4', 'H2'], balanced: [1, 1, 1, 1], hint: 'Cobre com ácido sulfúrico' },
        { reactants: ['Zn', 'H2SO4'], products: ['ZnSO4', 'H2'], balanced: [1, 1, 1, 1], hint: 'Zinco com ácido sulfúrico' },
        { reactants: ['Al', 'NaOH', 'H2O'], products: ['NaAlO2', 'H2'], balanced: [2, 2, 2, 2, 3], hint: 'Alumínio com NaOH' },
        { reactants: ['Fe', 'H2O'], products: ['Fe3O4', 'H2'], balanced: [3, 4, 1, 4], hint: 'Ferro com vapor' },
        { reactants: ['Mg', 'CO2'], products: ['MgO', 'C'], balanced: [2, 1, 2, 1], hint: 'Magnésio com CO2' },
        { reactants: ['CaCO3'], products: ['CaO', 'CO2'], balanced: [1, 1, 1], hint: 'Decomposição da calcita' },
        { reactants: ['NaHCO3'], products: ['Na2CO3', 'H2O', 'CO2'], balanced: [2, 1, 1, 1], hint: 'Decomposição do bicarbonato' },
        { reactants: ['KClO3'], products: ['KCl', 'O2'], balanced: [2, 2, 3], hint: 'Decomposição do clorato de potássio' },
        { reactants: ['H2O2'], products: ['H2O', 'O2'], balanced: [2, 2, 1], hint: 'Decomposição do peróxido' },
        { reactants: ['K', 'H2O'], products: ['KOH', 'H2'], balanced: [2, 2, 2, 1], hint: 'Potássio com água' },
        { reactants: ['Li', 'H2O'], products: ['LiOH', 'H2'], balanced: [2, 2, 2, 1], hint: 'Lítio com água' },
        { reactants: ['Ca', 'HCl'], products: ['CaCl2', 'H2'], balanced: [1, 2, 1, 1], hint: 'Cálcio com HCl' },
        { reactants: ['Ba', 'HCl'], products: ['BaCl2', 'H2'], balanced: [1, 2, 1, 1], hint: 'Bário com HCl' },
        { reactants: ['Sr', 'HCl'], products: ['SrCl2', 'H2'], balanced: [1, 2, 1, 1], hint: 'Estrôncio com HCl' },
        { reactants: ['Fe', 'H2SO4'], products: ['FeSO4', 'H2'], balanced: [1, 1, 1, 1], hint: 'Ferro com H2SO4' },
        { reactants: ['Al', 'H2SO4'], products: ['Al2(SO4)3', 'H2'], balanced: [2, 3, 1, 3], hint: 'Alumínio com H2SO4' },
        { reactants: ['Mg', 'H2SO4'], products: ['MgSO4', 'H2'], balanced: [1, 1, 1, 1], hint: 'Magnésio com H2SO4' },
        { reactants: ['Ca', 'H2SO4'], products: ['CaSO4', 'H2'], balanced: [1, 1, 1, 1], hint: 'Cálcio com H2SO4' },
        { reactants: ['Fe', 'CuSO4'], products: ['FeSO4', 'Cu'], balanced: [1, 1, 1, 1], hint: 'Ferro com sulfato de cobre' },
        { reactants: ['Zn', 'CuSO4'], products: ['ZnSO4', 'Cu'], balanced: [1, 1, 1, 1], hint: 'Zinco com sulfato de cobre' },
        { reactants: ['Al', 'CuSO4'], products: ['Al2(SO4)3', 'Cu'], balanced: [2, 3, 1, 3], hint: 'Alumínio com sulfato de cobre' },
        { reactants: ['Fe', 'AgNO3'], products: ['Fe(NO3)2', 'Ag'], balanced: [1, 2, 1, 2], hint: 'Ferro com nitrato de prata' },
        { reactants: ['Cu', 'AgNO3'], products: ['Cu(NO3)2', 'Ag'], balanced: [1, 2, 1, 2], hint: 'Cobre com nitrato de prata' },
        { reactants: ['Zn', 'AgNO3'], products: ['Zn(NO3)2', 'Ag'], balanced: [1, 2, 1, 2], hint: 'Zinco com nitrato de prata' },
        { reactants: ['Mg', 'AgNO3'], products: ['Mg(NO3)2', 'Ag'], balanced: [1, 2, 1, 2], hint: 'Magnésio com nitrato de prata' },
        { reactants: ['Al', 'Fe2O3'], products: ['Al2O3', 'Fe'], balanced: [2, 1, 1, 2], hint: 'Reação termita' },
        { reactants: ['Mg', 'N2'], products: ['Mg3N2'], balanced: [3, 1, 1], hint: 'Nitreto de magnésio' },
        { reactants: ['Ca', 'N2'], products: ['Ca3N2'], balanced: [3, 1, 1], hint: 'Nitreto de cálcio' },
        { reactants: ['Al', 'Fe3O4'], products: ['Al2O3', 'Fe'], balanced: [8, 3, 4, 9], hint: 'Termita com magnetita' },
        { reactants: ['Fe', 'Cl2'], products: ['FeCl3'], balanced: [2, 3, 2], hint: 'Cloreto férrico' },
        { reactants: ['Al', 'Br2'], products: ['AlBr3'], balanced: [2, 3, 2], hint: 'Brometo de alumínio' },
        { reactants: ['Fe', 'Br2'], products: ['FeBr3'], balanced: [2, 3, 2], hint: 'Brometo férrico' },
        { reactants: ['Cu', 'HNO3'], products: ['Cu(NO3)2', 'NO2', 'H2O'], balanced: [1, 4, 1, 2, 2], hint: 'Cobre com HNO3 concentrado' },
        { reactants: ['Zn', 'HNO3'], products: ['Zn(NO3)2', 'NH4NO3', 'H2O'], balanced: [4, 10, 4, 1, 3], hint: 'Zinco com HNO3 diluído' },
        { reactants: ['Fe', 'HNO3'], products: ['Fe(NO3)3', 'NO', 'H2O'], balanced: [1, 4, 1, 1, 2], hint: 'Ferro com HNO3' },
        { reactants: ['Cu', 'H2SO4'], products: ['CuSO4', 'SO2', 'H2O'], balanced: [1, 2, 1, 1, 2], hint: 'Cobre com H2SO4 concentrado' },
        { reactants: ['C', 'H2O'], products: ['CO', 'H2'], balanced: [1, 1, 1, 1], hint: 'Gás de água' },
        { reactants: ['Fe', 'CO2'], products: ['FeO', 'CO'], balanced: [1, 1, 1, 1], hint: 'Redução do CO2' },
        { reactants: ['Zn', 'NaOH'], products: ['Na2ZnO2', 'H2'], balanced: [1, 2, 1, 1], hint: 'Zinco com NaOH' },
        { reactants: ['Al', 'KOH', 'H2O'], products: ['KAlO2', 'H2'], balanced: [2, 2, 2, 2, 3], hint: 'Alumínio com KOH' },
        { reactants: ['Fe', 'NaOH'], products: ['Na2FeO2', 'H2'], balanced: [1, 2, 1, 1], hint: 'Ferro com NaOH' },
        { reactants: ['Zn', 'NaOH', 'H2O'], products: ['Na2[Zn(OH)4]', 'H2'], balanced: [1, 2, 2, 1, 1], hint: 'Zinco com NaOH aquoso' },
        { reactants: ['Al', 'HNO3'], products: ['Al(NO3)3', 'NO', 'H2O'], balanced: [1, 4, 1, 1, 2], hint: 'Alumínio com HNO3' },
        { reactants: ['Mg', 'HNO3'], products: ['Mg(NO3)2', 'NH4NO3', 'H2O'], balanced: [4, 10, 4, 1, 3], hint: 'Magnésio com HNO3 diluído' },
        { reactants: ['Ca', 'HNO3'], products: ['Ca(NO3)2', 'H2'], balanced: [1, 2, 1, 1], hint: 'Cálcio com HNO3' },
        { reactants: ['Fe', 'I2'], products: ['FeI2'], balanced: [1, 1, 1], hint: 'Iodeto ferroso' },
        { reactants: ['Cu', 'I2'], products: ['CuI'], balanced: [2, 1, 2], hint: 'Iodeto de cobre' },
        { reactants: ['Fe', 'P'], products: ['Fe3P2'], balanced: [3, 2, 1], hint: 'Fosfeto de ferro' },
        { reactants: ['Al', 'P'], products: ['AlP'], balanced: [1, 1, 1], hint: 'Fosfeto de alumínio' },
        { reactants: ['Mg', 'P'], products: ['Mg3P2'], balanced: [3, 2, 1], hint: 'Fosfeto de magnésio' },
        { reactants: ['Ca', 'P'], products: ['Ca3P2'], balanced: [3, 2, 1], hint: 'Fosfeto de cálcio' },
        { reactants: ['Na', 'P'], products: ['Na3P'], balanced: [3, 1, 1], hint: 'Fosfeto de sódio' },
        { reactants: ['K', 'P'], products: ['K3P'], balanced: [3, 1, 1], hint: 'Fosfeto de potássio' },
        { reactants: ['Fe', 'C'], products: ['Fe3C'], balanced: [3, 1, 1], hint: 'Cementita' },
        { reactants: ['W', 'O2'], products: ['WO3'], balanced: [2, 3, 2], hint: 'Trióxido de tungstênio' },
        { reactants: ['Mn', 'O2'], products: ['MnO2'], balanced: [1, 1, 1], hint: 'Dióxido de manganês' },
        { reactants: ['Cr', 'O2'], products: ['Cr2O3'], balanced: [4, 3, 2], hint: 'Óxido de cromo' },
        { reactants: ['Ti', 'O2'], products: ['TiO2'], balanced: [1, 1, 1], hint: 'Dióxido de titânio' },
        { reactants: ['Si', 'O2'], products: ['SiO2'], balanced: [1, 1, 1], hint: 'Dióxido de silício' },
        { reactants: ['B', 'O2'], products: ['B2O3'], balanced: [4, 3, 2], hint: 'Trióxido de boro' },
        { reactants: ['Sn', 'O2'], products: ['SnO2'], balanced: [1, 1, 1], hint: 'Dióxido de estanho' },
        { reactants: ['Pb', 'O2'], products: ['PbO2'], balanced: [1, 1, 1], hint: 'Dióxido de chumbo' },
        { reactants: ['As', 'O2'], products: ['As2O3'], balanced: [4, 3, 2], hint: 'Trióxido de arsênio' },
        { reactants: ['Sb', 'O2'], products: ['Sb2O3'], balanced: [4, 3, 2], hint: 'Trióxido de antimônio' },
        { reactants: ['Bi', 'O2'], products: ['Bi2O3'], balanced: [4, 3, 2], hint: 'Trióxido de bismuto' },
        { reactants: ['Se', 'O2'], products: ['SeO2'], balanced: [1, 1, 1], hint: 'Dióxido de selênio' },
        { reactants: ['Te', 'O2'], products: ['TeO2'], balanced: [1, 1, 1], hint: 'Dióxido de telúrio' },
        { reactants: ['V', 'O2'], products: ['V2O5'], balanced: [4, 5, 2], hint: 'Pentóxido de vanádio' },
        { reactants: ['Mo', 'O2'], products: ['MoO3'], balanced: [2, 3, 2], hint: 'Trióxido de molibdênio' },
        { reactants: ['Co', 'O2'], products: ['CoO'], balanced: [2, 1, 2], hint: 'Óxido de cobalto' },
        { reactants: ['Ni', 'O2'], products: ['NiO'], balanced: [2, 1, 2], hint: 'Óxido de níquel' },
        { reactants: ['Mn', 'Cl2'], products: ['MnCl2'], balanced: [1, 1, 1], hint: 'Cloreto de manganês' },
        { reactants: ['Cr', 'Cl2'], products: ['CrCl3'], balanced: [2, 3, 2], hint: 'Cloreto de cromo' },
        { reactants: ['Ti', 'Cl2'], products: ['TiCl4'], balanced: [1, 2, 1], hint: 'Cloreto de titânio' },
        { reactants: ['Si', 'Cl2'], products: ['SiCl4'], balanced: [1, 2, 1], hint: 'Cloreto de silício' },
        { reactants: ['Mn', 'S'], products: ['MnS'], balanced: [1, 1, 1], hint: 'Sulfeto de manganês' },
        { reactants: ['Cr', 'S'], products: ['Cr2S3'], balanced: [2, 3, 1], hint: 'Sulfeto de cromo' },
        { reactants: ['Co', 'S'], products: ['CoS'], balanced: [1, 1, 1], hint: 'Sulfeto de cobalto' },
        { reactants: ['Ni', 'S'], products: ['NiS'], balanced: [1, 1, 1], hint: 'Sulfeto de níquel' },
        { reactants: ['Mn', 'HCl'], products: ['MnCl2', 'H2'], balanced: [1, 2, 1, 1], hint: 'Manganês com HCl' },
        { reactants: ['Cr', 'HCl'], products: ['CrCl3', 'H2'], balanced: [2, 6, 2, 3], hint: 'Cromo com HCl' },
        { reactants: ['Co', 'HCl'], products: ['CoCl2', 'H2'], balanced: [1, 2, 1, 1], hint: 'Cobalto com HCl' },
        { reactants: ['Ni', 'HCl'], products: ['NiCl2', 'H2'], balanced: [1, 2, 1, 1], hint: 'Níquel com HCl' },
        { reactants: ['Mn', 'H2SO4'], products: ['MnSO4', 'H2'], balanced: [1, 1, 1, 1], hint: 'Manganês com H2SO4' },
        { reactants: ['Cr', 'H2SO4'], products: ['Cr2(SO4)3', 'H2'], balanced: [2, 3, 1, 3], hint: 'Cromo com H2SO4' },
        { reactants: ['Co', 'H2SO4'], products: ['CoSO4', 'H2'], balanced: [1, 1, 1, 1], hint: 'Cobalto com H2SO4' },
        { reactants: ['Ni', 'H2SO4'], products: ['NiSO4', 'H2'], balanced: [1, 1, 1, 1], hint: 'Níquel com H2SO4' }
    ],
    dificil: [
        { reactants: ['C', 'H2', 'O2'], products: ['CH4', 'H2O'], balanced: [1, 4, 1, 1, 2], hint: 'Formação do metano' },
        { reactants: ['Fe', 'HCl'], products: ['FeCl3', 'H2'], balanced: [2, 6, 2, 3], hint: 'Ferro com HCl' },
        { reactants: ['Al', 'HCl'], products: ['AlCl3', 'H2'], balanced: [2, 6, 2, 3], hint: 'Alumínio com HCl' },
        { reactants: ['Fe2O3', 'C'], products: ['Fe', 'CO2'], balanced: [2, 3, 4, 3], hint: 'Redução do óxido de ferro' },
        { reactants: ['CH4', 'O2'], products: ['CO2', 'H2O'], balanced: [1, 2, 1, 2], hint: 'Combustão do metano' },
        { reactants: ['C3H8', 'O2'], products: ['CO2', 'H2O'], balanced: [1, 5, 3, 4], hint: 'Combustão do propano' },
        { reactants: ['Al', 'Fe2O3'], products: ['Al2O3', 'Fe'], balanced: [2, 1, 1, 2], hint: 'Reação termita' },
        { reactants: ['Na', 'H2O'], products: ['NaOH', 'H2'], balanced: [2, 2, 2, 1], hint: 'Sódio com água' },
        { reactants: ['Fe2O3', 'H2'], products: ['Fe', 'H2O'], balanced: [1, 3, 2, 3], hint: 'Redução do ferro com H2' },
        { reactants: ['CuO', 'H2'], products: ['Cu', 'H2O'], balanced: [1, 1, 1, 1], hint: 'Redução do cobre com H2' },
        { reactants: ['ZnO', 'C'], products: ['Zn', 'CO'], balanced: [1, 1, 1, 1], hint: 'Redução do zinco com carbono' },
        { reactants: ['CuO', 'C'], products: ['Cu', 'CO2'], balanced: [2, 1, 2, 1], hint: 'Redução do cobre com carbono' },
        { reactants: ['Fe2O3', 'CO'], products: ['Fe', 'CO2'], balanced: [1, 3, 2, 3], hint: 'Redução do ferro com CO' },
        { reactants: ['Fe3O4', 'CO'], products: ['Fe', 'CO2'], balanced: [1, 4, 3, 4], hint: 'Redução da magnetita' },
        { reactants: ['FeO', 'CO'], products: ['Fe', 'CO2'], balanced: [1, 1, 1, 1], hint: 'Redução do FeO' },
        { reactants: ['MnO2', 'C'], products: ['Mn', 'CO2'], balanced: [1, 1, 1, 1], hint: 'Redução do manganês' },
        { reactants: ['Cr2O3', 'Al'], products: ['Cr', 'Al2O3'], balanced: [1, 2, 2, 1], hint: 'Termita com cromo' },
        { reactants: ['TiO2', 'C'], products: ['Ti', 'CO2'], balanced: [1, 1, 1, 1], hint: 'Redução do titânio' },
        { reactants: ['SiO2', 'C'], products: ['Si', 'CO'], balanced: [1, 2, 1, 2], hint: 'Redução do silício' },
        { reactants: ['WO3', 'H2'], products: ['W', 'H2O'], balanced: [1, 3, 1, 3], hint: 'Redução do tungstênio' },
        { reactants: ['V2O5', 'C'], products: ['V', 'CO2'], balanced: [2, 5, 4, 5], hint: 'Redução do vanádio' },
        { reactants: ['MoO3', 'H2'], products: ['Mo', 'H2O'], balanced: [1, 3, 1, 3], hint: 'Redução do molibdênio' },
        { reactants: ['B2O3', 'Mg'], products: ['B', 'MgO'], balanced: [1, 3, 2, 3], hint: 'Redução do boro' },
        { reactants: ['C2H6', 'O2'], products: ['CO2', 'H2O'], balanced: [2, 7, 4, 6], hint: 'Combustão do etano' },
        { reactants: ['C2H4', 'O2'], products: ['CO2', 'H2O'], balanced: [1, 3, 2, 2], hint: 'Combustão do etileno' },
        { reactants: ['C2H2', 'O2'], products: ['CO2', 'H2O'], balanced: [2, 5, 4, 2], hint: 'Combustão do acetileno' },
        { reactants: ['C4H10', 'O2'], products: ['CO2', 'H2O'], balanced: [2, 13, 8, 10], hint: 'Combustão do butano' },
        { reactants: ['C5H12', 'O2'], products: ['CO2', 'H2O'], balanced: [1, 8, 5, 6], hint: 'Combustão do pentano' },
        { reactants: ['C6H6', 'O2'], products: ['CO2', 'H2O'], balanced: [2, 15, 12, 6], hint: 'Combustão do benzeno' },
        { reactants: ['CH3OH', 'O2'], products: ['CO2', 'H2O'], balanced: [2, 3, 2, 4], hint: 'Combustão do metanol' },
        { reactants: ['C2H5OH', 'O2'], products: ['CO2', 'H2O'], balanced: [1, 3, 2, 3], hint: 'Combustão do etanol' },
        { reactants: ['NH3', 'O2'], products: ['NO', 'H2O'], balanced: [4, 5, 4, 6], hint: 'Oxidação da amônia' },
        { reactants: ['PH3', 'O2'], products: ['P2O5', 'H2O'], balanced: [2, 4, 1, 3], hint: 'Combustão da fosfina' },
        { reactants: ['H2S', 'O2'], products: ['SO2', 'H2O'], balanced: [2, 3, 2, 2], hint: 'Combustão do H2S' },
        { reactants: ['Cu2S', 'O2'], products: ['Cu2O', 'SO2'], balanced: [2, 3, 2, 2], hint: 'Queima do sulfeto de cobre' },
        { reactants: ['FeS2', 'O2'], products: ['Fe2O3', 'SO2'], balanced: [4, 11, 2, 8], hint: 'Pirita queimando' },
        { reactants: ['ZnS', 'O2'], products: ['ZnO', 'SO2'], balanced: [2, 3, 2, 2], hint: 'Queima do sulfeto de zinco' },
        { reactants: ['PbS', 'O2'], products: ['PbO', 'SO2'], balanced: [2, 3, 2, 2], hint: 'Queima da galena' },
        { reactants: ['HgO'], products: ['Hg', 'O2'], balanced: [2, 2, 1], hint: 'Decomposição do óxido de mercúrio' },
        { reactants: ['Ag2O'], products: ['Ag', 'O2'], balanced: [2, 4, 1], hint: 'Decomposição do óxido de prata' },
        { reactants: ['Na2O2', 'H2O'], products: ['NaOH', 'O2'], balanced: [2, 2, 4, 1], hint: 'Peróxido de sódio com água' },
        { reactants: ['CaC2', 'H2O'], products: ['Ca(OH)2', 'C2H2'], balanced: [1, 2, 1, 1], hint: 'Carbureto de cálcio' },
        { reactants: ['Al4C3', 'H2O'], products: ['Al(OH)3', 'CH4'], balanced: [1, 12, 4, 3], hint: 'Carbureto de alumínio' },
        { reactants: ['Mg3N2', 'H2O'], products: ['Mg(OH)2', 'NH3'], balanced: [1, 6, 3, 2], hint: 'Nitreto de magnésio com água' },
        { reactants: ['Ca3N2', 'H2O'], products: ['Ca(OH)2', 'NH3'], balanced: [1, 6, 3, 2], hint: 'Nitreto de cálcio com água' },
        { reactants: ['Na2O', 'H2O'], products: ['NaOH'], balanced: [1, 1, 2], hint: 'Óxido de sódio com água' },
        { reactants: ['K2O', 'H2O'], products: ['KOH'], balanced: [1, 1, 2], hint: 'Óxido de potássio com água' },
        { reactants: ['BaO', 'H2O'], products: ['Ba(OH)2'], balanced: [1, 1, 1], hint: 'Óxido de bário com água' },
        { reactants: ['SrO', 'H2O'], products: ['Sr(OH)2'], balanced: [1, 1, 1], hint: 'Óxido de estrôncio com água' },
        { reactants: ['P4O10', 'H2O'], products: ['H3PO4'], balanced: [1, 6, 4], hint: 'Pentóxido de fósforo com água' },
        { reactants: ['SO3', 'H2O'], products: ['H2SO4'], balanced: [1, 1, 1], hint: 'Trióxido de enxofre com água' },
        { reactants: ['CO2', 'H2O'], products: ['H2CO3'], balanced: [1, 1, 1], hint: 'Formação do ácido carbônico' },
        { reactants: ['SO2', 'H2O'], products: ['H2SO3'], balanced: [1, 1, 1], hint: 'Formação do ácido sulfuroso' },
        { reactants: ['NO2', 'H2O'], products: ['HNO3', 'NO'], balanced: [3, 1, 2, 1], hint: 'Formação do ácido nítrico' },
        { reactants: ['Cl2', 'H2O'], products: ['HCl', 'HClO'], balanced: [1, 1, 1, 1], hint: 'Cloro com água' },
        { reactants: ['Na2O2', 'CO2'], products: ['Na2CO3', 'O2'], balanced: [2, 2, 2, 1], hint: 'Peróxido de sódio com CO2' },
        { reactants: ['KO2', 'H2O'], products: ['KOH', 'O2', 'H2O2'], balanced: [2, 2, 2, 1, 1], hint: 'Superóxido de potássio' },
        { reactants: ['Na', 'O2'], products: ['Na2O2'], balanced: [2, 1, 1], hint: 'Peróxido de sódio' },
        { reactants: ['K', 'O2'], products: ['KO2'], balanced: [1, 1, 1], hint: 'Superóxido de potássio' },
        { reactants: ['Rb', 'O2'], products: ['RbO2'], balanced: [1, 1, 1], hint: 'Superóxido de rubídio' },
        { reactants: ['Cs', 'O2'], products: ['CsO2'], balanced: [1, 1, 1], hint: 'Superóxido de césio' },
        { reactants: ['Na', 'S'], products: ['Na2S'], balanced: [2, 1, 1], hint: 'Sulfeto de sódio' },
        { reactants: ['K', 'S'], products: ['K2S'], balanced: [2, 1, 1], hint: 'Sulfeto de potássio' },
        { reactants: ['Ca', 'N2'], products: ['Ca3N2'], balanced: [3, 1, 1], hint: 'Nitreto de cálcio' },
        { reactants: ['Sr', 'N2'], products: ['Sr3N2'], balanced: [3, 1, 1], hint: 'Nitreto de estrôncio' },
        { reactants: ['Ba', 'N2'], products: ['Ba3N2'], balanced: [3, 1, 1], hint: 'Nitreto de bário' },
        { reactants: ['Li', 'N2'], products: ['Li3N'], balanced: [6, 1, 2], hint: 'Nitreto de lítio' },
        { reactants: ['Ca3P2', 'H2O'], products: ['Ca(OH)2', 'PH3'], balanced: [1, 6, 3, 2], hint: 'Fosfeto de cálcio com água' },
        { reactants: ['Na3P', 'H2O'], products: ['NaOH', 'PH3'], balanced: [1, 3, 3, 1], hint: 'Fosfeto de sódio com água' },
        { reactants: ['AlP', 'H2O'], products: ['Al(OH)3', 'PH3'], balanced: [1, 3, 1, 1], hint: 'Fosfeto de alumínio com água' },
        { reactants: ['CaF2', 'H2SO4'], products: ['CaSO4', 'HF'], balanced: [1, 1, 1, 2], hint: 'Fluorita com ácido sulfúrico' },
        { reactants: ['CaCO3', 'HCl'], products: ['CaCl2', 'H2O', 'CO2'], balanced: [1, 2, 1, 1, 1], hint: 'Calcita com HCl' },
        { reactants: ['Na2CO3', 'HCl'], products: ['NaCl', 'H2O', 'CO2'], balanced: [1, 2, 2, 1, 1], hint: 'Carbonato com HCl' },
        { reactants: ['K2CO3', 'HCl'], products: ['KCl', 'H2O', 'CO2'], balanced: [1, 2, 2, 1, 1], hint: 'Carbonato de potássio com HCl' },
        { reactants: ['MgCO3', 'HCl'], products: ['MgCl2', 'H2O', 'CO2'], balanced: [1, 2, 1, 1, 1], hint: 'Magnesita com HCl' },
        { reactants: ['Fe2O3', 'HCl'], products: ['FeCl3', 'H2O'], balanced: [1, 6, 2, 3], hint: 'Óxido de ferro com HCl' },
        { reactants: ['Al2O3', 'HCl'], products: ['AlCl3', 'H2O'], balanced: [1, 6, 2, 3], hint: 'Óxido de alumínio com HCl' },
        { reactants: ['CuO', 'HCl'], products: ['CuCl2', 'H2O'], balanced: [1, 2, 1, 1], hint: 'Óxido de cobre com HCl' },
        { reactants: ['ZnO', 'HCl'], products: ['ZnCl2', 'H2O'], balanced: [1, 2, 1, 1], hint: 'Óxido de zinco com HCl' },
        { reactants: ['Fe2O3', 'H2SO4'], products: ['Fe2(SO4)3', 'H2O'], balanced: [1, 3, 1, 3], hint: 'Óxido de ferro com H2SO4' },
        { reactants: ['Al2O3', 'H2SO4'], products: ['Al2(SO4)3', 'H2O'], balanced: [1, 3, 1, 3], hint: 'Óxido de alumínio com H2SO4' },
        { reactants: ['CuO', 'H2SO4'], products: ['CuSO4', 'H2O'], balanced: [1, 1, 1, 1], hint: 'Óxido de cobre com H2SO4' },
        { reactants: ['ZnO', 'H2SO4'], products: ['ZnSO4', 'H2O'], balanced: [1, 1, 1, 1], hint: 'Óxido de zinco com H2SO4' },
        { reactants: ['Fe(OH)3'], products: ['Fe2O3', 'H2O'], balanced: [2, 1, 3], hint: 'Decomposição do hidróxido de ferro' },
        { reactants: ['Al(OH)3'], products: ['Al2O3', 'H2O'], balanced: [2, 1, 3], hint: 'Decomposição do hidróxido de alumínio' },
        { reactants: ['Cu(OH)2'], products: ['CuO', 'H2O'], balanced: [1, 1, 1], hint: 'Decomposição do hidróxido de cobre' },
        { reactants: ['Mg(OH)2'], products: ['MgO', 'H2O'], balanced: [1, 1, 1], hint: 'Decomposição do hidróxido de magnésio' },
        { reactants: ['Ca(OH)2', 'CO2'], products: ['CaCO3', 'H2O'], balanced: [1, 1, 1, 1], hint: 'Cal apagada com CO2' },
        { reactants: ['Ba(OH)2', 'CO2'], products: ['BaCO3', 'H2O'], balanced: [1, 1, 1, 1], hint: 'Hidróxido de bário com CO2' },
        { reactants: ['NaOH', 'CO2'], products: ['Na2CO3', 'H2O'], balanced: [2, 1, 1, 1], hint: 'NaOH com CO2' },
        { reactants: ['KOH', 'CO2'], products: ['K2CO3', 'H2O'], balanced: [2, 1, 1, 1], hint: 'KOH com CO2' },
        { reactants: ['Ca(OH)2', 'SO2'], products: ['CaSO3', 'H2O'], balanced: [1, 1, 1, 1], hint: 'Cal com SO2' },
        { reactants: ['NaOH', 'SO2'], products: ['Na2SO3', 'H2O'], balanced: [2, 1, 1, 1], hint: 'NaOH com SO2' },
        { reactants: ['KOH', 'SO2'], products: ['K2SO3', 'H2O'], balanced: [2, 1, 1, 1], hint: 'KOH com SO2' },
        { reactants: ['CaO', 'SiO2'], products: ['CaSiO3'], balanced: [1, 1, 1], hint: 'Formação do silicato' },
        { reactants: ['Na2O', 'SiO2'], products: ['Na2SiO3'], balanced: [1, 1, 1], hint: 'Silicato de sódio' },
        { reactants: ['FeO', 'SiO2'], products: ['Fe2SiO4'], balanced: [2, 1, 1], hint: 'Silicato ferroso' },
        { reactants: ['MgO', 'SiO2'], products: ['Mg2SiO4'], balanced: [2, 1, 1], hint: 'Silicato de magnésio' }
    ]
};

let score = 0;
let currentReaction = null;
let correctAnswers = 0;
let errors = 0;
let maxErrors = 3;
let gameStartTime = null;
let questionStartTime = null;
let timerInterval = null;
let hintsUsed = 0;
let maxHints = 3;
let difficulty = null;
let gameDuration = null;
let hintedIndex = null;
let gamePaused = false;
let pausedTime = 0;
let usedReactions = [];

function selectDifficulty(diff) {
    difficulty = diff;
    errors = 0;
    document.getElementById('difficulty-popup').classList.remove('show');
    document.getElementById('overlay').classList.remove('show');
    document.getElementById('game-header').classList.add('show');
    document.getElementById('game-main').classList.add('show');
    
    const labels = { facil: 'Fácil', medio: 'Médio', dificil: 'Difícil' };
    document.getElementById('difficulty-label').textContent = labels[diff];
    
    const machoPanel = document.getElementById('macho-panel');
    machoPanel.classList.remove('blurred');
    machoPanel.classList.remove('show');
    
    if (diff === 'facil') {
        gameDuration = null;
        document.getElementById('timer').textContent = '∞';
        document.getElementById('errors-count').textContent = '∞';
    } else if (diff === 'medio') {
        gameDuration = 600;
        document.getElementById('timer').textContent = '10:00';
        document.getElementById('errors-count').textContent = maxErrors;
    } else {
        gameDuration = 300;
        document.getElementById('timer').textContent = '5:00';
        document.getElementById('errors-count').textContent = '0';
        machoPanel.classList.add('blurred');
    }
    
    document.getElementById('game-timer').textContent = '0:00';
    startTimer();
    nextReaction();
}

function showDifficultyPopup() {
    clearInterval(timerInterval);
    document.getElementById('modal-final').classList.remove('show');
    document.getElementById('difficulty-popup').classList.add('show');
    document.getElementById('overlay').classList.add('show');
    document.getElementById('game-header').classList.remove('show');
    document.getElementById('game-main').classList.remove('show');
    resetGame();
}

function closeDifficultyPopup() {
    document.getElementById('difficulty-popup').classList.remove('show');
    document.getElementById('overlay').classList.remove('show');
}

function resetGame() {
    score = 0;
    correctAnswers = 0;
    errors = 0;
    hintsUsed = 0;
    hintedIndex = null;
    usedReactions = [];
    document.getElementById('score').textContent = '0';
    document.getElementById('correct-count').textContent = '0';
    document.getElementById('errors-count').textContent = '-';
    document.getElementById('timer').textContent = '--:--';
    document.getElementById('game-timer').textContent = '0:00';
    document.getElementById('difficulty-label').textContent = '-';
    document.getElementById('message').textContent = '';
    document.getElementById('hints-area').innerHTML = '';
    document.getElementById('equation-display').innerHTML = '';
    document.getElementById('coefficients-area').innerHTML = '';
}

function startTimer() {
    gameStartTime = Date.now();
    pausedTime = 0;
    timerInterval = setInterval(updateTimers, 100);
}

function updateTimers() {
    const totalElapsed = Math.floor((Date.now() - gameStartTime) / 1000);
    const totalMin = Math.floor(totalElapsed / 60);
    const totalSec = totalElapsed % 60;
    document.getElementById('game-timer').textContent = 
        `${totalMin}:${totalSec.toString().padStart(2, '0')}`;
    
    if (!gamePaused && questionStartTime) {
        const questionElapsed = Math.floor((Date.now() - questionStartTime) / 1000);
        
        if (gameDuration) {
            const remaining = gameDuration - questionElapsed;
            if (remaining <= 0) {
                endGame();
                return;
            }
            const min = Math.floor(remaining / 60);
            const sec = remaining % 60;
            document.getElementById('timer').textContent = 
                `${min}:${sec.toString().padStart(2, '0')}`;
        } else {
            const min = Math.floor(questionElapsed / 60);
            const sec = questionElapsed % 60;
            document.getElementById('timer').textContent = 
                `${min}:${sec.toString().padStart(2, '0')}`;
        }
    }
}

function getRandomReaction() {
    const available = reactions[difficulty];
    const unused = available.filter((_, index) => !usedReactions.includes(index));
    
    if (unused.length === 0) {
        usedReactions = [];
        return available[Math.floor(Math.random() * available.length)];
    }
    
    const randomIndex = Math.floor(Math.random() * unused.length);
    const originalIndex = available.indexOf(unused[randomIndex]);
    usedReactions.push(originalIndex);
    
    return unused[randomIndex];
}

function renderEquation(reaction) {
    const display = document.getElementById('equation-display');
    display.innerHTML = '';
    
    const reactantsStr = reaction.reactants.join(' + ');
    const productsStr = reaction.products.join(' + ');
    const latex = `\\ce{${reactantsStr} -> ${productsStr}}`;
    
    const span = document.createElement('span');
    span.className = 'equation-latex';
    display.appendChild(span);
    
    katex.render(latex, span, {
        throwOnError: false,
        displayMode: true
    });
}

function renderCoefficientInputs(reaction) {
    const area = document.getElementById('coefficients-area');
    area.innerHTML = '';
    hintedIndex = null;
    
    const allCompounds = [...reaction.reactants, ...reaction.products];
    
    allCompounds.forEach((compound, index) => {
        const div = document.createElement('div');
        div.className = 'coeff-item';
        
        const label = document.createElement('label');
        label.className = 'coeff-label';
        katex.render(`\\ce{${compound}}`, label, {
            throwOnError: false,
            displayMode: false
        });
        
        const input = document.createElement('input');
        input.type = 'number';
        input.id = `coeff-${index}`;
        input.min = '1';
        input.max = '20';
        
        div.appendChild(label);
        div.appendChild(input);
        area.appendChild(div);
    });
    
    document.getElementById('coeff-0').focus();
}

function checkAnswer() {
    if (gamePaused) return;

    const inputs = document.querySelectorAll('.coeff-item input');
    const userValues = Array.from(inputs).map(input => {
        const value = parseInt(input.value, 10);
        return Number.isNaN(value) ? 0 : value;
    });
    
    const isCorrect = currentReaction.balanced.every((val, index) => val === userValues[index]);
    
    if (isCorrect) {
        correctAnswers++;
        document.getElementById('correct-count').textContent = correctAnswers;
        
        gamePaused = true;
        const timeBonus = Math.max(0, 100 - Math.floor((Date.now() - questionStartTime) / 1000));
        const hintPenalty = hintsUsed * 20;
        const diffMultiplier = difficulty === 'facil' ? 1 : difficulty === 'medio' ? 1.5 : 2;
        const points = Math.round(Math.max(10, (timeBonus + 50) * diffMultiplier - hintPenalty));
        
        score += points;
        document.getElementById('score').textContent = score;
        
        inputs.forEach(input => input.classList.add('correct'));
        showMessage(`Correto! +${points} pontos`, 'success');
        
        setTimeout(nextReaction, 1500);
    } else {
        errors++;
        inputs.forEach(input => input.classList.add('incorrect'));
        
        if (difficulty === 'medio') {
            const remaining = maxErrors - errors;
            document.getElementById('errors-count').textContent = remaining;
            
            if (errors >= maxErrors) {
                gamePaused = true;
                showMessage('3 erros! Pulando para próxima...', 'error');
                setTimeout(nextReaction, 1500);
                return;
            }
            showMessage(`Incorreto! Erros restantes: ${remaining}`, 'error');
        } else if (difficulty === 'dificil') {
            gamePaused = true;
            document.getElementById('errors-count').textContent = errors;
            showMessage('Incorreto! Trocando equação...', 'error');
            setTimeout(nextReaction, 1000);
            return;
        } else {
            showMessage('Incorreto! Tente novamente', 'error');
        }
        
        setTimeout(() => {
            inputs.forEach((input, i) => {
                input.classList.remove('incorrect');
                if (i !== hintedIndex) {
                    input.value = '';
                }
            });
            document.getElementById('coeff-0').focus();
        }, 1000);
    }
}

function showMessage(text, type) {
    const messageEl = document.getElementById('message');
    messageEl.textContent = text;
    messageEl.className = 'message ' + type;
}

function showHint() {
    if (hintsUsed >= maxHints) {
        showMessage('Sem dicas restantes!', 'error');
        return;
    }
    
    const inputs = document.querySelectorAll('.coeff-item input');
    const emptyIndices = [];
    
    inputs.forEach((input, index) => {
        if (!input.value || input.value === '') {
            emptyIndices.push(index);
        }
    });
    
    if (emptyIndices.length === 0) {
        showMessage('Todos os campos já estão preenchidos!', 'error');
        return;
    }
    
    const randomEmptyIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
    const correctValue = currentReaction.balanced[randomEmptyIndex];
    
    inputs[randomEmptyIndex].value = correctValue;
    inputs[randomEmptyIndex].classList.add('hinted');
    inputs[randomEmptyIndex].readOnly = true;
    hintedIndex = randomEmptyIndex;
    
    hintsUsed++;
    const hintsArea = document.getElementById('hints-area');
    const compound = [...currentReaction.reactants, ...currentReaction.products][randomEmptyIndex];
    
    hintsArea.innerHTML = '';
    const p1 = document.createElement('p');
    p1.textContent = 'Dica: O coeficiente de ';
    const strong1 = document.createElement('strong');
    const compoundSpan = document.createElement('span');
    katex.render(`\\ce{${compound}}`, compoundSpan, { throwOnError: false });
    strong1.appendChild(compoundSpan);
    p1.appendChild(strong1);
    p1.append(` é `);
    const strong2 = document.createElement('strong');
    strong2.textContent = correctValue;
    p1.appendChild(strong2);
    hintsArea.appendChild(p1);
    
    const p2 = document.createElement('p');
    p2.textContent = `Dicas restantes: ${maxHints - hintsUsed}`;
    hintsArea.appendChild(p2);
    
    showMessage(`Dica usada! -${hintsUsed * 20} pontos na próxima resposta`, 'hint');
}

function skipQuestion() {
    gamePaused = true;
    const correctStr = currentReaction.balanced.join(', ');
    showMessage(`Reação pulada. Respostas: ${correctStr}`, 'error');
    setTimeout(nextReaction, 1500);
}

function nextReaction() {
    currentReaction = getRandomReaction();
    questionStartTime = Date.now();
    hintsUsed = 0;
    gamePaused = false;
    if (difficulty === 'medio') {
        errors = 0;
        document.getElementById('errors-count').textContent = maxErrors;
    }
    renderEquation(currentReaction);
    renderCoefficientInputs(currentReaction);
    document.getElementById('message').textContent = '';
    document.getElementById('hints-area').innerHTML = '';
}

function endGame() {
    clearInterval(timerInterval);
    const totalTime = Math.floor((Date.now() - gameStartTime) / 1000);
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    
    document.getElementById('final-score').textContent = score;
    document.getElementById('final-total-correct').textContent = correctAnswers;
    document.getElementById('total-time').textContent = 
        `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    document.getElementById('modal-final').classList.add('show');
}

function handleKeyPress(event) {
    if (event.key === 'Escape') {
        const popup = document.getElementById('difficulty-popup');
        if (popup.classList.contains('show')) {
            closeDifficultyPopup();
            return;
        }
    }
    
    if (event.key === 'Enter') {
        const popup = document.getElementById('difficulty-popup');
        if (popup.classList.contains('show')) return;
        
        const finalModal = document.getElementById('modal-final');
        if (finalModal.classList.contains('show')) return;
        
        checkAnswer();
    } else if (event.key === 'Tab') {
        event.preventDefault();
        const inputs = document.querySelectorAll('.coeff-item input');
        const currentIndex = Array.from(inputs).indexOf(document.activeElement);
        const nextIndex = (currentIndex + 1) % inputs.length;
        inputs[nextIndex].focus();
    }
}

function toggleMachoPanel() {
    const panel = document.getElementById('macho-panel');
    panel.classList.toggle('show');
}

document.addEventListener('keydown', handleKeyPress);

document.getElementById('overlay').addEventListener('click', closeDifficultyPopup);

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const diff = params.get('diff');
    
    if (diff && ['facil', 'medio', 'dificil'].includes(diff)) {
        selectDifficulty(diff);
    } else {
        document.getElementById('difficulty-popup').classList.add('show');
        document.getElementById('overlay').classList.add('show');
    }
});
