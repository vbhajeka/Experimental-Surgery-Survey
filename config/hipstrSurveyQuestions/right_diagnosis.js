const right_diagnosis = {
  block_id: 'right_diagnosis',
  block_header: 'Right Hip Diagnosis',
  block_description: 'Select one or more Diagnoses from the three categories',
  enabled: false,
  required: true,
  questions: [
    {
      id: 'right_diagnosis_general',
      question_header: 'General Diagnosis',
      question_desc: 'Select all that apply',
      enabled: true,
      required: false,
      type: 'SATA',
      options: [
        { value: 'FAI', children: [], blocks_enabled: [] },
        { value: 'DDH', children: [], blocks_enabled: [] },
        { value: 'Hypermobility', children: [], blocks_enabled: [] },
        { value: 'OA', children: [], blocks_enabled: [] },
        { value: 'SCFE', children: [], blocks_enabled: [] },
        { value: 'Perthes', children: [], blocks_enabled: [] },
        { value: 'Loose Bodies', children: [], blocks_enabled: [] },
        { value: 'Inflammatory', children: [], blocks_enabled: [] },
        { value: 'Post Traumatic', children: [], blocks_enabled: [] },
        {
          value: 'AVN',
          children: [
            'right_diagnosis_avn_classification',
            'right_femur_avn_treatment',
          ],
          blocks_enabled: [],
        },
        { value: 'Undiagnosed Hip Pain', children: [], blocks_enabled: [] },
        {
          value: 'Other',
          children: ['right_diagnosis_other'],
          blocks_enabled: [],
        },
      ],
      value: [],
    },
    {
      id: 'right_diagnosis_other',
      question_header: 'Other Right Diagnosis',
      question_desc: 'Enter other diagnosis',
      enabled: false,
      required: true,
      type: 'FR',
      fr_type: 'text',
      value: [],
    },
    {
      id: 'right_diagnosis_avn_classification',
      question_header: 'AVN: Steinberg Classification',
      question_desc: 'What is the Steinberg Classification?',
      long_question_desc: [
        'Stage 0 - normal or nondiagnostic radiographs, bone scan, and/or MRI',
        'Stage I - normal radiograph; abnormal bone scan/MRI',
        'Stage II - abnormal radiograph; abnormal bone scan/MRI',
        'Stage III - subchondral collapse, crescent sign, without flattening',
        'Stage IV - flattening of femoral head',
        'Stage V - joint space narrowing and/or acetabular changes',
        'Stage VI - advanced degenerative changes',
      ],
      enabled: false,
      required: true,
      type: 'MC',
      options: [
        {
          value: 'Stage 0',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Stage I',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Stage II',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Stage III',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Stage IV',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Stage V',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Stage VI',
          children: [],
          blocks_enabled: [],
        },
      ],
      value: [],
    },
    {
      id: 'right_diagnosis_central_comp',
      question_header: 'Central Compartment Diagnosis',
      question_desc: 'Select all that apply',
      enabled: true,
      required: false,
      type: 'SATA',
      options: [
        { value: 'Labral Tear', children: [], blocks_enabled: [] },
        { value: 'Ligamentum Teres Tear', children: [], blocks_enabled: [] },
        {
          value: 'Chondral Lesion – non FAI',
          children: [],
          blocks_enabled: [],
        },
        { value: 'Post Traumatic OC Defect', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: 'right_diagnosis_extra_articular',
      question_header: 'Extra-Articular',
      question_desc: 'Select all that apply',
      enabled: true,
      required: false,
      type: 'SATA',
      options: [
        { value: 'Snapping IP', children: [], blocks_enabled: [] },
        { value: 'Snapping ITB', children: [], blocks_enabled: [] },
        {
          value: 'Troch Bursitis',
          children: [],
          blocks_enabled: [],
        },
        { value: 'Gluteus Tear', children: [], blocks_enabled: [] },
        {
          value: 'AIIS Subspine Impingement',
          children: [],
          blocks_enabled: [],
        },
        {
          value: 'Ischiofemoral Impingement',
          children: [],
          blocks_enabled: [],
        },
        { value: 'Deep Gluteal Syndrome', children: [], blocks_enabled: [] },
        { value: 'Hamstring Tendinopathy', children: [], blocks_enabled: [] },
        { value: 'Hamstring Avulsion', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
  ],
};

module.exports = right_diagnosis;
