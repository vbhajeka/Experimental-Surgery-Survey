const right_acetabulum_articular_cartilage = {
  block_id: 'right_acetabulum_articular_cartilage',
  block_header: 'Right Acetabulum Articular Cartilage Details',
  block_description: 'Details about the Right Acetabulum Articular Cartilage',
  enabled: false,
  required: true,
  questions: [
    {
      id: 'right_acetabulum_articular_status',
      question_header: 'Right Acetabulum Articular Cartilage',
      question_desc:
        'What was the status of the Right Acetabulum Articular Cartilage?',
      enabled: true,
      required: true,
      type: 'MC',
      options: [
        { value: 'Normal', children: [], blocks_enabled: [] },
        {
          value: 'Abnormal',
          children: [
            'right_acetabulum_lesion_loc',
            'right_acetabulum_articular_extent_damage',
            'right_acetabulum_articular_beck',
            'right_acetabulum_cartilage_treatment',
          ],
          blocks_enabled: [],
        },
      ],
      value: [],
    },
    {
      id: 'right_acetabulum_lesion_loc',
      question_header: 'Acetabular Lesion Location',
      question_desc: 'Select areas of GREATEST Articular Cartilage Damage',
      enabled: false,
      required: true,
      type: 'SATA',
      img: `/hip-images/hip-regions.png`,
      options: [
        { value: '1', children: [], blocks_enabled: [] },
        { value: '2', children: [], blocks_enabled: [] },
        { value: '3', children: [], blocks_enabled: [] },
        { value: '4', children: [], blocks_enabled: [] },
        { value: '5', children: [], blocks_enabled: [] },
        { value: '6', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: 'right_acetabulum_articular_extent_damage',
      question_header: 'Extent of Damage',
      question_desc: 'Distance from the Rim to the Cotyloid Fossa',
      enabled: false,
      required: true,
      type: 'MC',
      options: [
        { value: '< 1/3', children: [], blocks_enabled: [] },
        { value: '1/3 to 2/3', children: [], blocks_enabled: [] },
        { value: '> 2/3', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: 'right_acetabulum_articular_beck',
      question_header:
        'Select Beck Classification for the Degree of Worst Cartilage Damage:',
      long_question_desc: [
        'Normal - Macroscopically sound cartilage',
        'Malacia - Roughening of surface, fibrillation',
        'Debonding - Loss of fixation to the subchondral bone, macroscopically sound cartilage, carpet phenomenon',
        'Cleavage - Loss of fixation to the subchondral bone, frayed edges, thinning of cartilage',
        'Defect - Full thickness defect',
      ],
      enabled: false,
      required: true,
      type: 'MC',
      options: [
        {
          value: 'Normal',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Malacia',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Debonding',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Cleavage',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Defect',
          children: [],
          blocks_enabled: [],
        },
      ],
      value: [],
    },
    {
      id: 'right_acetabulum_cartilage_treatment',
      question_header: 'Articular Cartilage Treatment',
      question_desc: 'What was the Treatment for the Chondral Lesion?',
      enabled: false,
      required: true,
      type: 'MC',
      options: [
        { value: 'Chondroplasty', children: [], blocks_enabled: [] },
        { value: 'Microfracture', children: [], blocks_enabled: [] },
        { value: 'Cartilage Scaffold', children: [], blocks_enabled: [] },
        {
          value: 'Juvenile Cartilage Cells',
          children: [],
          blocks_enabled: [],
        },
        { value: 'Suture / Anchor Repair', children: [], blocks_enabled: [] },
        { value: 'Fibrin Glue', children: [], blocks_enabled: [] },
        { value: 'None', children: [], blocks_enabled: [] },
        {
          value: 'Other',
          children: ['right_acetabulum_cartilage_treatment_other'],
          blocks_enabled: [],
        },
      ],
      value: [],
    },
    {
      id: 'right_acetabulum_cartilage_treatment_other',
      question_header: 'Other Articular Separation Treatment',
      question_desc: 'What was the Other Chondral Lesion Treatment?',
      enabled: false,
      required: true,
      type: 'FR',
      fr_type: 'text',
      options: [],
      value: [],
    },
  ],
};

module.exports = right_acetabulum_articular_cartilage;
