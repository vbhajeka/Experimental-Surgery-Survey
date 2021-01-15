const right_labrum =
  // right_labrum
  {
    block_id: 'right_labrum',
    block_header: 'Right Labrum Details',
    block_description: 'Details about the Right Labrum',
    enabled: false,
    required: true,
    questions: [
      {
        id: '0',
        question_header: 'Right Labrum',
        question_desc: 'What was the status of the Right Labrum?',
        enabled: true,
        required: true,
        type: 'MC',
        options: [
          { value: 'Normal', children: [], blocks_enabled: [] },
          {
            value: 'Abnormal',
            children: ['1', '50', '20'],
            blocks_enabled: [],
          },
        ],
        value: [],
      },
      {
        id: '50',
        question_header: 'Right Labrum',
        question_desc: 'Was this a takedown for refixation?',
        enabled: false,
        required: true,
        type: 'MC',
        options: [
          { value: 'Yes', children: [], blocks_enabled: [] },
          { value: 'No', children: [], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: '1',
        question_header: 'Right Labral Tear',
        question_desc: 'Was there a Right Labral Tear?',
        enabled: false,
        required: true,
        type: 'MC',
        options: [
          { value: 'Yes', children: ['2', '3', '4', '69'], blocks_enabled: [] },
          {
            value: 'No',
            children: ['21', '22', '23'],
            blocks_enabled: [],
          },
        ],
        value: [],
      },
      {
        id: '69',
        question_header: 'Right Labral Tear',
        question_desc: 'What was the type of Labral Tear?',
        enabled: false,
        required: true,
        type: 'MC',
        options: [
          { value: 'Flap', children: [], blocks_enabled: [] },
          { value: 'Fibrillated', children: [], blocks_enabled: [] },
          { value: 'Degenerative', children: [], blocks_enabled: [] },
          { value: 'Radial', children: [], blocks_enabled: [] },
          {
            value: 'Labral Chondral Separation',
            children: [],
            blocks_enabled: [],
          },
        ],
        value: [],
      },
      {
        id: '20',
        question_header: 'Other Labrum Abnormalities',
        question_desc: 'What other Labrum abnormalites were observed?',
        enabled: false,
        required: false,
        type: 'SATA',
        options: [
          {
            value: 'Hypertrophic',
            children: [],
            blocks_enabled: [],
          },
          { value: 'Hypotrophic', children: [], blocks_enabled: [] },
          { value: 'Ossified', children: [], blocks_enabled: [] },
          { value: 'Calcific', children: [], blocks_enabled: [] },
          { value: 'Mucinoid', children: [], blocks_enabled: [] },
          { value: 'Bruised', children: [], blocks_enabled: [] },
          { value: 'Other', children: ['63'], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: '63',
        question_header: 'Other Labrum Abnormalities',
        question_desc: 'What was the Other Labrum Abnormalities System?',
        enabled: false,
        required: true,
        type: 'FR',
        fr_type: 'text',
        options: [],
        value: [],
      },
      {
        id: '2',
        question_header: 'Tear clockface "from"',
        long_question_desc: ["Anterior - 3 o'clock", "Lateral - 12 o'clock"],
        enabled: false,
        required: true,
        type: 'DDS',
        options: [
          { value: '12', children: [], blocks_enabled: [] },
          { value: '1', children: [], blocks_enabled: [] },
          { value: '2', children: [], blocks_enabled: [] },
          { value: '3', children: [], blocks_enabled: [] },
          { value: '4', children: [], blocks_enabled: [] },
          { value: '5', children: [], blocks_enabled: [] },
          { value: '6', children: [], blocks_enabled: [] },
          { value: '7', children: [], blocks_enabled: [] },
          { value: '8', children: [], blocks_enabled: [] },
          { value: '9', children: [], blocks_enabled: [] },
          { value: '10', children: [], blocks_enabled: [] },
          { value: '11', children: [], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: '3',
        question_header: 'Tear clockface "to"',
        long_question_desc: ["Anterior - 3 o'clock", "Lateral - 12 o'clock"],
        enabled: false,
        required: true,
        type: 'DDS',
        options: [
          { value: '12', children: [], blocks_enabled: [] },
          { value: '1', children: [], blocks_enabled: [] },
          { value: '2', children: [], blocks_enabled: [] },
          { value: '3', children: [], blocks_enabled: [] },
          { value: '4', children: [], blocks_enabled: [] },
          { value: '5', children: [], blocks_enabled: [] },
          { value: '6', children: [], blocks_enabled: [] },
          { value: '7', children: [], blocks_enabled: [] },
          { value: '8', children: [], blocks_enabled: [] },
          { value: '9', children: [], blocks_enabled: [] },
          { value: '10', children: [], blocks_enabled: [] },
          { value: '11', children: [], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: '4',
        question_header: 'Tear Treatment',
        question_desc: 'How was the tear treated?',
        enabled: false,
        required: true,
        type: 'MC',
        options: [
          { value: 'Debridement', children: [], blocks_enabled: [] },
          { value: 'Labrectomy', children: [], blocks_enabled: [] },
          {
            value: 'Repair',
            children: ['6', '7', '10'],
            blocks_enabled: [],
          },
          {
            value: 'Reconstruction',
            children: ['18', '19', '6', '7'],
            blocks_enabled: [],
          },
          {
            value: 'Augmentation',
            children: ['18', '19', '6', '7'],
            blocks_enabled: [],
          },
          { value: 'None', children: [], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: '18',
        question_header: 'Type of Labral Graft',
        question_desc: 'What was the type of Labral Graft?',
        enabled: false,
        required: true,
        type: 'MC',
        options: [
          { value: 'Allograft', children: ['107'], blocks_enabled: [] },
          { value: 'Autograft', children: ['108'], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: '107',
        question_header: 'Allograft Graft Type',
        question_desc: 'What was the Graft Type?',
        enabled: false,
        required: true,
        type: 'MC',
        options: [
          { value: 'IT Band', children: [], blocks_enabled: [] },
          { value: 'Hamstring', children: [], blocks_enabled: [] },
          { value: 'Posterior Tibialis', children: [], blocks_enabled: [] },
          { value: 'Anterior Tibialis', children: [], blocks_enabled: [] },
          { value: 'Other', children: ['109'], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: '108',
        question_header: 'Autograft Graft Type',
        question_desc: 'What was the Graft Type?',
        enabled: false,
        required: true,
        type: 'MC',
        options: [
          { value: 'IT Band', children: [], blocks_enabled: [] },
          { value: 'Hamstring', children: [], blocks_enabled: [] },
          { value: 'Other', children: ['109'], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: '109',
        question_header: 'Other Graft Type',
        question_desc: 'Enter Other Graft Type',
        enabled: false,
        required: true,
        type: 'FR',
        fr_type: 'text',
        value: [],
      },
      {
        id: '19',
        question_header: 'Length of Graft',
        question_desc: 'What was the length of the Graft in centimeters?',
        enabled: false,
        required: true,
        type: 'FR',
        fr_type: 'number',
        options: [],
        value: [],
      },
      {
        id: '6',
        question_header: 'Implant Manufacturer',
        question_desc: 'Who manufactured the implant?',
        enabled: false,
        required: true,
        type: 'SATA',
        options: [
          { value: 'Arthex', children: ['11'], blocks_enabled: [] },
          { value: 'Biomet', children: ['12'], blocks_enabled: [] },
          { value: 'Conmed', children: ['13'], blocks_enabled: [] },
          {
            value: 'Smith & Nephew',
            children: ['14'],
            blocks_enabled: [],
          },
          { value: 'Stryker / Pivot', children: ['15'], blocks_enabled: [] },
          { value: 'Medacta', children: ['16'], blocks_enabled: [] },
          { value: 'Other', children: ['58', '8', '9'], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: '58',
        question_header: 'Other Implant Manufacturer',
        question_desc: 'What was the Other Implant Manufacturer?',
        enabled: false,
        required: true,
        type: 'FR',
        fr_type: 'text',
        options: [],
        value: [],
      },
      {
        id: '11',
        question_header: 'Arthex Implant System',
        question_desc: 'What was the Arthex Implant System?',
        enabled: false,
        required: true,
        type: 'SATA',
        options: [
          { value: 'Pushlock', children: [], blocks_enabled: [] },
          {
            value: 'Biocomposite Pushlock',
            children: [],
            blocks_enabled: [],
          },
          { value: 'PEEK SutureTak', children: [], blocks_enabled: [] },
          {
            value: 'Biocomposite SutureTak',
            children: [],
            blocks_enabled: [],
          },
          { value: 'Knotless FiberTak', children: [], blocks_enabled: [] },
          { value: 'Other', children: ['59'], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: '59',
        question_header: 'Other Arthex Implant System',
        question_desc: 'What was the Other Arthex Implant System?',
        enabled: false,
        required: true,
        type: 'FR',
        fr_type: 'text',
        options: [],
        value: [],
      },
      {
        id: '12',
        question_header: 'Biomet Implant System',
        question_desc: 'What was the Biomet Implant System?',
        enabled: false,
        required: true,
        type: 'SATA',
        options: [
          {
            value: 'Juggerknot Long Soft Anchor',
            children: [],
            blocks_enabled: [],
          },
          { value: 'Other', children: ['60'], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: '60',
        question_header: 'Other Biomet Implant System',
        question_desc: 'What was the Other Biomet Implant System?',
        enabled: false,
        required: true,
        type: 'FR',
        fr_type: 'text',
        options: [],
        value: [],
      },
      {
        id: '13',
        question_header: 'Conmed Implant System',
        question_desc: 'What was the Conmed Implant System?',
        enabled: false,
        required: true,
        type: 'SATA',
        options: [
          {
            value: 'Poplok',
            children: [],
            blocks_enabled: [],
          },
          { value: 'Press FT', children: [], blocks_enabled: [] },
          { value: 'Bio Mini Revo', children: [], blocks_enabled: [] },
          { value: 'Y Knot', children: [], blocks_enabled: [] },
          { value: 'Other', children: ['61'], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: '61',
        question_header: 'Other Conmed Implant System',
        question_desc: 'What was the Other Conmed Implant System?',
        enabled: false,
        required: true,
        type: 'FR',
        fr_type: 'text',
        options: [],
        value: [],
      },
      {
        id: '14',
        question_header: 'Smith & Nephew Implant System',
        question_desc: 'What was the Smith & Nephew Implant System?',
        enabled: false,
        required: true,
        type: 'SATA',
        options: [
          { value: 'Bioraptor Knotless', children: [], blocks_enabled: [] },
          { value: 'Bioraptor PK', children: [], blocks_enabled: [] },
          { value: 'Labralock P', children: [], blocks_enabled: [] },
          { value: 'Mini Magnum', children: [], blocks_enabled: [] },
          { value: 'Mini Magnum Plus', children: [], blocks_enabled: [] },
          { value: 'Osteoraptor', children: [], blocks_enabled: [] },
          { value: 'Q-Fix', children: [], blocks_enabled: [] },
          { value: 'Mini Q-Fix', children: [], blocks_enabled: [] },
          { value: 'Speedlock', children: [], blocks_enabled: [] },
          { value: 'Speedlock Plus', children: [], blocks_enabled: [] },
          { value: 'Speedlock Ultra', children: [], blocks_enabled: [] },
          { value: 'Other', children: ['62'], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: '62',
        question_header: 'Other Smith & Nephew Implant System',
        question_desc: 'What was the Other Smith & Nephew Implant System?',
        enabled: false,
        required: true,
        type: 'FR',
        fr_type: 'text',
        options: [],
        value: [],
      },
      {
        id: '15',
        question_header: 'Stryker / Pivot Implant System',
        question_desc: 'What was the Stryker / Pivot Implant System?',
        enabled: false,
        required: true,
        type: 'SATA',
        options: [
          { value: 'Iconix', children: [], blocks_enabled: [] },
          { value: 'Pivot Cinchlock SS', children: [], blocks_enabled: [] },
          { value: 'Pivot Nanotak Flex', children: [], blocks_enabled: [] },
          { value: 'Other', children: ['87'], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: '87',
        question_header: 'Other Stryker / Pivot Implant System',
        question_desc: 'What was the Other Stryker / Pivot Implant System?',
        enabled: false,
        required: true,
        type: 'FR',
        fr_type: 'text',
        options: [],
        value: [],
      },
      {
        id: '16',
        question_header: 'Medacta Implant System',
        question_desc: 'What was the Medacta Implant System?',
        enabled: false,
        required: true,
        type: 'SATA',
        options: [
          { value: 'Mectalock PPEK', children: [], blocks_enabled: [] },
          { value: 'Mectalock TI', children: [], blocks_enabled: [] },
          { value: 'Mectatap TI', children: [], blocks_enabled: [] },
          { value: 'Mectalock All Suture', children: [], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: '17',
        question_header: 'Other Implant System',
        question_desc: 'What was the Other Implant System?',
        enabled: false,
        required: true,
        type: 'FR',
        fr_type: 'text',
        options: [],
        value: [],
      },
      {
        id: '7',
        question_header: 'Number of Anchors',
        question_desc: 'How many anchors were used?',
        enabled: false,
        required: true,
        type: 'DDS',
        options: [
          { value: '1', children: [], blocks_enabled: [] },
          { value: '2', children: [], blocks_enabled: [] },
          { value: '3', children: [], blocks_enabled: [] },
          { value: '4', children: [], blocks_enabled: [] },
          { value: '5', children: [], blocks_enabled: [] },
          { value: '6', children: [], blocks_enabled: [] },
          { value: '7', children: [], blocks_enabled: [] },
          { value: '8', children: [], blocks_enabled: [] },
          { value: '9', children: [], blocks_enabled: [] },
          { value: '10', children: [], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: '8',
        question_header: 'Anchor Material',
        question_desc: 'What was the material of the anchor?',
        enabled: false,
        required: true,
        type: 'SATA',
        options: [
          { value: 'All-suture Based', children: [], blocks_enabled: [] },
          { value: 'Metal', children: [], blocks_enabled: [] },
          { value: 'Bioabsorbable', children: [], blocks_enabled: [] },
          { value: 'PEEK', children: [], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: '9',
        question_header: 'Anchor Type',
        question_desc: 'What type of anchor was used?',
        enabled: false,
        required: true,
        type: 'SATA',
        options: [
          { value: 'Knotted', children: [], blocks_enabled: [] },
          { value: 'Knotless', children: [], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: '10',
        question_header: 'Suture Configuration',
        question_desc: 'What was the suture configuration?',
        enabled: false,
        required: true,
        type: 'SATA',
        options: [
          { value: 'Simple', children: [], blocks_enabled: [] },
          { value: 'Mattress', children: [], blocks_enabled: [] },
          { value: 'Hybrid', children: [], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: '21',
        question_header: 'Other clockface "from"',
        long_question_desc: ["Anterior - 3 o'clock", "Lateral - 12 o'clock"],
        enabled: false,
        required: true,
        type: 'DDS',
        options: [
          { value: '12', children: [], blocks_enabled: [] },
          { value: '1', children: [], blocks_enabled: [] },
          { value: '2', children: [], blocks_enabled: [] },
          { value: '3', children: [], blocks_enabled: [] },
          { value: '4', children: [], blocks_enabled: [] },
          { value: '5', children: [], blocks_enabled: [] },
          { value: '6', children: [], blocks_enabled: [] },
          { value: '7', children: [], blocks_enabled: [] },
          { value: '8', children: [], blocks_enabled: [] },
          { value: '9', children: [], blocks_enabled: [] },
          { value: '10', children: [], blocks_enabled: [] },
          { value: '11', children: [], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: '22',
        question_header: 'Other clockface "to"',
        long_question_desc: ["Anterior - 3 o'clock", "Lateral - 12 o'clock"],
        enabled: false,
        required: true,
        type: 'DDS',
        options: [
          { value: '12', children: [], blocks_enabled: [] },
          { value: '1', children: [], blocks_enabled: [] },
          { value: '2', children: [], blocks_enabled: [] },
          { value: '3', children: [], blocks_enabled: [] },
          { value: '4', children: [], blocks_enabled: [] },
          { value: '5', children: [], blocks_enabled: [] },
          { value: '6', children: [], blocks_enabled: [] },
          { value: '7', children: [], blocks_enabled: [] },
          { value: '8', children: [], blocks_enabled: [] },
          { value: '9', children: [], blocks_enabled: [] },
          { value: '10', children: [], blocks_enabled: [] },
          { value: '11', children: [], blocks_enabled: [] },
        ],
        value: [],
      },
      {
        id: '23',
        question_header: 'Other Abnormalitiy Treatment',
        question_desc: 'How was the tear treated?',
        enabled: false,
        required: true,
        type: 'MC',
        options: [
          { value: 'None', children: [], blocks_enabled: [] },
          {
            value: 'Debridement / Resection',
            children: [],
            blocks_enabled: [],
          },
          {
            value: 'Repair',
            children: [],
            blocks_enabled: [],
          },
          {
            value: 'Reconstruction',
            children: [],
            blocks_enabled: [],
          },
        ],
        value: [],
      },
    ],
  };

module.exports = right_labrum;
