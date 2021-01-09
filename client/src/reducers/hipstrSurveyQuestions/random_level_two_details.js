export const random_level_two_details = {
  block_id: 'random_level_two_details',
  block_header: 'Paralysis, Operation Time, & Anesthesia Details',
  enabled: false,
  required: false,
  questions: [
    {
      id: '0',
      question_header: 'Fluoroscopy Time',
      question_desc: 'Enter the Fluoroscpy Time in Minutes',
      enabled: true,
      required: false,
      type: 'FR',
      fr_type: 'number',
      value: [],
    },
    {
      id: '1',
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
      id: '2',
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
      id: '3',
      question_header: 'Anesthesia',
      question_desc: 'Select the Anesthesia Used',
      enabled: true,
      required: false,
      type: 'MC',
      options: [
        { value: 'General', children: [], blocks_enabled: [] },
        { value: 'Spinal', children: [], blocks_enabled: [] },
        { value: 'Lumbar Plexus Block', children: [], blocks_enabled: [] },
        { value: 'Spinal / Epidural', children: [], blocks_enabled: [] },
        { value: 'Other', children: ['4'], blocks_enabled: [] },
      ],
      value: [],
    },
    {
      id: '4',
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
      question_desc: 'Was there paralysis observed?',
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
