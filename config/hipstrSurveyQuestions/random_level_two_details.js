const random_level_two_details = {
  block_id: 'random_level_two_details',
  block_header: 'Operative Details',
  enabled: false,
  required: false,
  questions: [
    {
      id: 'op_details_fluo_time',
      question_header: 'Fluoroscopy Time',
      question_desc: 'Enter the Fluoroscpy Time in Minutes',
      enabled: true,
      required: false,
      type: 'FR',
      fr_type: 'number',
      value: [],
    },
    {
      id: 'op_details_op_time',
      question_header: 'Operation Time',
      question_desc:
        'Enter the Operation Time in Minutes, from Incision to Closure',
      enabled: true,
      required: false,
      type: 'FR',
      fr_type: 'number',
      value: [],
    },
    {
      id: 'op_details_traction_time',
      question_header: 'Traction Time',
      question_desc: 'Select the Traction Time in Minutes',
      enabled: true,
      required: false,
      type: 'MC',
      options: [
        { value: '< 30 min', children: [], blocks_enabled: [] },
        { value: '31 - 60 min', children: [], blocks_enabled: [] },
        { value: '61 - 90 min', children: [], blocks_enabled: [] },
        { value: '91 - 120 min', children: [], blocks_enabled: [] },
        { value: '121 - 150 min', children: [], blocks_enabled: [] },
        { value: '> 150 min', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: 'op_details_anesthesia',
      question_header: 'Anesthesia',
      question_desc: 'Select the Anesthesia Used',
      enabled: true,
      required: false,
      type: 'MC',
      options: [
        { value: 'General', children: [], blocks_enabled: [] },
        { value: 'Spinal / Epidural', children: [], blocks_enabled: [] },
        { value: 'Lumbar Plexus Block', children: [], blocks_enabled: [] },
        {
          value: 'Other',
          children: ['op_details_anesthesia_other'],
          blocks_enabled: [],
        },
      ],
      value: [],
    },
    {
      id: 'op_details_anesthesia_other',
      question_header: 'Other Anesthesia',
      question_desc: 'What Anesthesia was used?',
      enabled: false,
      required: true,
      type: 'FR',
      fr_type: 'text',
      value: [],
    },
    {
      id: '5',
      question_header: 'Paralysis',
      question_desc: 'Was there paralysis utilized?',
      enabled: true,
      required: false,
      type: 'MC',
      options: [
        { value: 'Yes', children: [], blocks_enabled: [] },
        { value: 'No', children: [], blocks_enabled: [] },
      ],
      value: [],
    },
  ],
};

module.exports = random_level_two_details;
