// ══════════════════════════════════════════════════
// PRODUCT DATA — Resinating Memories
// ══════════════════════════════════════════════════
const PRODUCTS = [

  // ────────────────────────────────────────────────
  // TRAYS
  // ────────────────────────────────────────────────
  {
    id: 'acrylic-tray-10x10',
    category: 'trays',
    nameRegular: 'Acrylic Tray',
    nameItalic: '10" × 10"',
    desc: 'Elegant acrylic tray preserving your flowers in crystal-clear resin. Handle color & invitation available.',
    basePrice: 400,
    image: 'images/Acrylic Tray 10x10/placeholder.svg',
    options: [
      {
        key: 'handleColor',
        label: 'Handle Color',
        type: 'select',
        required: true,
        choices: [
          { label: 'Gold', value: 'Gold' },
          { label: 'Silver', value: 'Silver' },
          { label: 'Black', value: 'Black' }
        ]
      },
      {
        key: 'invitation',
        label: 'Add an Invitation (no charge)',
        type: 'checkbox'
      },
      {
        key: 'leafAccent',
        label: 'Leaf Accent (no charge)',
        type: 'select',
        choices: [
          { label: 'None', value: 'None' },
          { label: 'Gold Leaf', value: 'Gold Leaf' },
          { label: 'Silver Leaf', value: 'Silver Leaf' }
        ]
      }
    ]
  },
  {
    id: 'acrylic-tray-12x12',
    category: 'trays',
    nameRegular: 'Acrylic Tray',
    nameItalic: '12" × 12"',
    desc: 'Elegant acrylic tray preserving your flowers in crystal-clear resin. Handle color & invitation available.',
    basePrice: 550,
    image: 'images/Acrylic Tray 12x12/placeholder.svg',
    options: [
      {
        key: 'handleColor',
        label: 'Handle Color',
        type: 'select',
        required: true,
        choices: [
          { label: 'Gold', value: 'Gold' },
          { label: 'Silver', value: 'Silver' },
          { label: 'Black', value: 'Black' }
        ]
      },
      {
        key: 'invitation',
        label: 'Add an Invitation (no charge)',
        type: 'checkbox'
      },
      {
        key: 'leafAccent',
        label: 'Leaf Accent (no charge)',
        type: 'select',
        choices: [
          { label: 'None', value: 'None' },
          { label: 'Gold Leaf', value: 'Gold Leaf' },
          { label: 'Silver Leaf', value: 'Silver Leaf' }
        ]
      }
    ]
  },
  {
    id: 'acrylic-tray-11x14',
    category: 'trays',
    nameRegular: 'Acrylic Tray',
    nameItalic: '11" × 14"',
    desc: 'Elegant acrylic tray preserving your flowers in crystal-clear resin. Handle color & invitation available.',
    basePrice: 600,
    image: 'images/Acrylic Tray 11x14/placeholder.svg',
    options: [
      {
        key: 'handleColor',
        label: 'Handle Color',
        type: 'select',
        required: true,
        choices: [
          { label: 'Gold', value: 'Gold' },
          { label: 'Silver', value: 'Silver' },
          { label: 'Black', value: 'Black' }
        ]
      },
      {
        key: 'invitation',
        label: 'Add an Invitation (no charge)',
        type: 'checkbox'
      },
      {
        key: 'leafAccent',
        label: 'Leaf Accent (no charge)',
        type: 'select',
        choices: [
          { label: 'None', value: 'None' },
          { label: 'Gold Leaf', value: 'Gold Leaf' },
          { label: 'Silver Leaf', value: 'Silver Leaf' }
        ]
      }
    ]
  },
  {
    id: 'acrylic-tray-12x16',
    category: 'trays',
    nameRegular: 'Acrylic Tray',
    nameItalic: '12" × 16"',
    desc: 'Elegant acrylic tray preserving your flowers in crystal-clear resin. Handle color & invitation available.',
    basePrice: 700,
    image: 'images/Acrylic Tray 12x16/placeholder.svg',
    options: [
      {
        key: 'handleColor',
        label: 'Handle Color',
        type: 'select',
        required: true,
        choices: [
          { label: 'Gold', value: 'Gold' },
          { label: 'Silver', value: 'Silver' },
          { label: 'Black', value: 'Black' }
        ]
      },
      {
        key: 'invitation',
        label: 'Add an Invitation (no charge)',
        type: 'checkbox'
      },
      {
        key: 'leafAccent',
        label: 'Leaf Accent (no charge)',
        type: 'select',
        choices: [
          { label: 'None', value: 'None' },
          { label: 'Gold Leaf', value: 'Gold Leaf' },
          { label: 'Silver Leaf', value: 'Silver Leaf' }
        ]
      }
    ]
  },
  {
    id: 'rectangle-tray-13',
    category: 'trays',
    nameRegular: 'Resin Rectangle',
    nameItalic: 'Tray 13"',
    desc: 'Can add an invitation under a 4" × 6" image.',
    basePrice: 350,
    image: 'images/Rectangle Tray 13/download-1.avif',
    images: [
      'images/Rectangle Tray 13/download-1.avif',
      'images/Rectangle Tray 13/download-2.avif',
      'images/Rectangle Tray 13/download.avif',
      'images/Rectangle Tray 13/e3ab39_074d7ef1c0f9411c9795117a85fa8563~mv2.avif',
      'images/Rectangle Tray 13/e3ab39_11e1cfb861d34cd59ef9b17b4bf195e0~mv2.avif',
      'images/Rectangle Tray 13/e3ab39_3c45411e1acc4791962b922d580f0dc2~mv2.avif',
      'images/Rectangle Tray 13/e3ab39_800466b176b4422daaa2a9a456f4901d~mv2.avif',
      'images/Rectangle Tray 13/e3ab39_e2d4eae583ef4bae9372bdb79cf3e52b~mv2.avif',
    ],
    options: [
      {
        key: 'handleColor',
        label: 'Handle Color',
        type: 'select',
        required: true,
        choices: [
          { label: 'Gold', value: 'Gold' },
          { label: 'Silver', value: 'Silver' },
          { label: 'Black', value: 'Black' }
        ]
      },
      {
        key: 'invitation',
        label: 'Add Invitation under 4"×6" image (no charge)',
        type: 'checkbox'
      },
      {
        key: 'leafAccent',
        label: 'Leaf Accent (no charge)',
        type: 'select',
        choices: [
          { label: 'None', value: 'None' },
          { label: 'Gold Leaf', value: 'Gold Leaf' },
          { label: 'Silver Leaf', value: 'Silver Leaf' }
        ]
      }
    ]
  },
  {
    id: 'hexagonal-tray-12',
    category: 'trays',
    nameRegular: 'Hexagonal',
    nameItalic: 'Tray 12"',
    desc: 'Can add an invitation at any size.',
    basePrice: 350,
    image: 'images/Hexagonal Tray 12/e3ab39_ec64506841f1435db5ac589eac633231~mv2.avif',
    images: [
      'images/Hexagonal Tray 12/e3ab39_ec64506841f1435db5ac589eac633231~mv2.avif',
      'images/Hexagonal Tray 12/e3ab39_f32582324c1349c5a73a3d7f43d7c511~mv2.avif',
    ],
    options: [
      {
        key: 'handleColor',
        label: 'Handle Color',
        type: 'select',
        required: true,
        choices: [
          { label: 'Gold', value: 'Gold' },
          { label: 'Silver', value: 'Silver' },
          { label: 'Black', value: 'Black' }
        ]
      },
      {
        key: 'invitation',
        label: 'Add Invitation (any size, no charge)',
        type: 'checkbox'
      },
      {
        key: 'leafAccent',
        label: 'Leaf Accent (no charge)',
        type: 'select',
        choices: [
          { label: 'None', value: 'None' },
          { label: 'Gold Leaf', value: 'Gold Leaf' },
          { label: 'Silver Leaf', value: 'Silver Leaf' }
        ]
      }
    ]
  },

  // ────────────────────────────────────────────────
  // INITIALS, BOOKENDS & BLOCKS
  // ────────────────────────────────────────────────
  {
    id: 'initial-7',
    category: 'initials',
    nameRegular: 'Initial',
    nameItalic: '7"',
    desc: '$200 per initial. Specify the letter(s) you\'d like.',
    basePrice: 200,
    image: 'images/Initial 7/e3ab39_98e871d2a7b149f78b8970cacdc6a442~mv2.avif',
    images: [
      'images/Initial 7/e3ab39_98e871d2a7b149f78b8970cacdc6a442~mv2.avif',
      'images/Initial 7/e3ab39_a0721b4f7e1d4dd1a6224800cdea392a~mv2.avif',
      'images/Initial 7/e3ab39_c167bf662804427dbe3915815a81c0e9~mv2.avif',
      'images/Initial 7/e3ab39_d5f8a3e1d0214ddca993ffebf113b852~mv2.avif',
    ],
    options: [
      {
        key: 'letter',
        label: 'Which letter(s)?',
        type: 'text',
        required: true,
        placeholder: 'e.g.  M  or  M & B'
      },
      {
        key: 'leafAccent',
        label: 'Leaf Accent (no charge)',
        type: 'select',
        choices: [
          { label: 'None', value: 'None' },
          { label: 'Gold Leaf', value: 'Gold Leaf' },
          { label: 'Silver Leaf', value: 'Silver Leaf' }
        ]
      }
    ]
  },
  {
    id: 'bookends',
    category: 'initials',
    nameRegular: 'Bookends',
    nameItalic: 'Set of 2',
    desc: '6.5" bookends beautifully cast in resin.',
    basePrice: 350,
    image: 'images/Bookends 6.5/e3ab39_141b6d77fd0f4f59b127f69bb331a82d~mv2.avif',
    options: [
      {
        key: 'leafAccent',
        label: 'Leaf Accent (no charge)',
        type: 'select',
        choices: [
          { label: 'None', value: 'None' },
          { label: 'Gold Leaf', value: 'Gold Leaf' },
          { label: 'Silver Leaf', value: 'Silver Leaf' }
        ]
      }
    ]
  },
  {
    id: 'square-block-8',
    category: 'initials',
    nameRegular: '8" Square',
    nameItalic: 'Block',
    desc: 'Stunning square resin display block.',
    basePrice: 275,
    image: 'images/Square Block/0045312D-B7E7-49AA-A7EA-4C371B601EB0.jpg',
    images: [
      'images/Square Block/0045312D-B7E7-49AA-A7EA-4C371B601EB0.jpg',
      'images/Square Block/7ECA053D-809E-4626-9E1F-5D08C06BB1CC.jpg',
      'images/Square Block/IMG_0700.jpg',
      'images/Square Block/e3ab39_045d706c123a412cb45eb6185965d783~mv2.avif',
    ],
    options: [
      {
        key: 'leafAccent',
        label: 'Leaf Accent (no charge)',
        type: 'select',
        choices: [
          { label: 'None', value: 'None' },
          { label: 'Gold Leaf', value: 'Gold Leaf' },
          { label: 'Silver Leaf', value: 'Silver Leaf' }
        ]
      }
    ]
  },
  {
    id: 'arched-block',
    category: 'initials',
    nameRegular: 'Arched',
    nameItalic: 'Block',
    desc: 'Elegant arched resin block.',
    basePrice: 350,
    image: 'images/Arched Block/0.png',
    options: [
      {
        key: 'leafAccent',
        label: 'Leaf Accent (no charge)',
        type: 'select',
        choices: [
          { label: 'None', value: 'None' },
          { label: 'Gold Leaf', value: 'Gold Leaf' },
          { label: 'Silver Leaf', value: 'Silver Leaf' }
        ]
      }
    ]
  },
  {
    id: 'hexagon-10',
    category: 'initials',
    nameRegular: 'Hexagon',
    nameItalic: '10"',
    desc: 'Geometric hexagon resin piece.',
    basePrice: 300,
    image: 'images/Hexagon 10/e3ab39_f70645f72c9d47e3b6d698eb2b3f252e~mv2.avif',
    options: [
      {
        key: 'leafAccent',
        label: 'Leaf Accent (no charge)',
        type: 'select',
        choices: [
          { label: 'None', value: 'None' },
          { label: 'Gold Leaf', value: 'Gold Leaf' },
          { label: 'Silver Leaf', value: 'Silver Leaf' }
        ]
      }
    ]
  },
  {
    id: 'heart-7',
    category: 'initials',
    nameRegular: '7" Heart',
    nameItalic: 'Block',
    desc: 'Beautiful heart-shaped resin piece.',
    basePrice: 250,
    image: 'images/Heart 7/e3ab39_5f7aeaffa2e34dfa8a0394f335b93706~mv2.avif',
    images: [
      'images/Heart 7/e3ab39_5f7aeaffa2e34dfa8a0394f335b93706~mv2.avif',
      'images/Heart 7/e3ab39_f5ea53a326d746298e0c1db8b3cb29e7~mv2.avif',
    ],
    options: [
      {
        key: 'leafAccent',
        label: 'Leaf Accent (no charge)',
        type: 'select',
        choices: [
          { label: 'None', value: 'None' },
          { label: 'Gold Leaf', value: 'Gold Leaf' },
          { label: 'Silver Leaf', value: 'Silver Leaf' }
        ]
      }
    ]
  },

  // ────────────────────────────────────────────────
  // COASTERS
  // ────────────────────────────────────────────────
  {
    id: 'round-coasters',
    category: 'coasters',
    nameRegular: 'Round',
    nameItalic: 'Coasters',
    desc: 'Beautifully crafted round resin coasters.',
    basePrice: 50,
    image: 'images/Round Coasters/e3ab39_055d2091025a4c719abc2716b6dc88a8~mv2.avif',
    images: [
      'images/Round Coasters/0-1.jpg',
      'images/Round Coasters/0-3.jpg',
      'images/Round Coasters/40D9B967-3AAC-4D5D-ADCB-C847A5BBAAD0.jpg',
      'images/Round Coasters/5F4D85D3-927B-42C2-B4B9-EA7E706884BC.jpg',
      'images/Round Coasters/AE5A0000-4A00-4D26-A2F3-04CC89FF4A91.jpg',
      'images/Round Coasters/B68FA54C-08A1-4B26-8079-AEEC07B19869.jpg',
      'images/Round Coasters/e3ab39_055d2091025a4c719abc2716b6dc88a8~mv2.avif',
      'images/Round Coasters/e3ab39_25c877028d214a44b8710f232b4b897b~mv2.avif',
      'images/Round Coasters/e3ab39_654d82ee69704826a08df53ec5988c57~mv2.avif',
      'images/Round Coasters/e3ab39_8bd6463334b440559a57b08427f4a24d~mv2.avif',
      'images/Round Coasters/e3ab39_d69a6bb6a8634b3e9a0fec9c0813d1be~mv2.avif',
    ],
    options: [
      {
        key: 'quantity',
        label: 'Set Size',
        type: 'select',
        required: true,
        priceByValue: true,
        choices: [
          { label: 'Set of 4  —  $100', value: 'Set of 4', price: 100 },
          { label: 'Set of 2  —  $50',  value: 'Set of 2', price: 50  }
        ]
      },
      {
        key: 'leafAccent',
        label: 'Leaf Accent (no charge)',
        type: 'select',
        choices: [
          { label: 'None', value: 'None' },
          { label: 'Gold Leaf', value: 'Gold Leaf' },
          { label: 'Silver Leaf', value: 'Silver Leaf' }
        ]
      }
    ]
  },
  {
    id: 'square-coasters',
    category: 'coasters',
    nameRegular: 'Square',
    nameItalic: 'Coasters',
    desc: 'Elegant square resin coasters.',
    basePrice: 50,
    image: 'images/Square Coasters/e3ab39_8a69400c7c6247a8b173b4e7f85880bd~mv2.avif',
    images: [
      'images/Square Coasters/0-4.jpg',
      'images/Square Coasters/0-7.jpg',
      'images/Square Coasters/IMG_0660.jpg',
      'images/Square Coasters/e3ab39_8a69400c7c6247a8b173b4e7f85880bd~mv2.avif',
    ],
    options: [
      {
        key: 'quantity',
        label: 'Set Size',
        type: 'select',
        required: true,
        priceByValue: true,
        choices: [
          { label: 'Set of 4  —  $100', value: 'Set of 4', price: 100 },
          { label: 'Set of 2  —  $50',  value: 'Set of 2', price: 50  }
        ]
      },
      {
        key: 'leafAccent',
        label: 'Leaf Accent (no charge)',
        type: 'select',
        choices: [
          { label: 'None', value: 'None' },
          { label: 'Gold Leaf', value: 'Gold Leaf' },
          { label: 'Silver Leaf', value: 'Silver Leaf' }
        ]
      }
    ]
  },
  {
    id: 'geode-coasters',
    category: 'coasters',
    nameRegular: 'Geode',
    nameItalic: 'Coasters',
    desc: 'Unique geode-style resin coasters.',
    basePrice: 50,
    image: 'images/Geode Coaster/e3ab39_a51cd2efee1a4aeda3d1ecf6a2b2341a~mv2.avif',
    options: [
      {
        key: 'quantity',
        label: 'Set Size',
        type: 'select',
        required: true,
        priceByValue: true,
        choices: [
          { label: 'Set of 4  —  $100', value: 'Set of 4', price: 100 },
          { label: 'Set of 2  —  $50',  value: 'Set of 2', price: 50  }
        ]
      },
      {
        key: 'leafAccent',
        label: 'Leaf Accent (no charge)',
        type: 'select',
        choices: [
          { label: 'None', value: 'None' },
          { label: 'Gold Leaf', value: 'Gold Leaf' },
          { label: 'Silver Leaf', value: 'Silver Leaf' }
        ]
      }
    ]
  },

  {
    id: 'wooden-coasters',
    category: 'coasters',
    nameRegular: 'Wooden',
    nameItalic: 'Coasters',
    desc: 'Handcrafted wooden coasters with preserved flowers set in resin.',
    basePrice: 60,
    image: 'images/Wooden Coasters/2E6D66D8-64E0-449A-BDCD-730FBEB4D3A2.jpg',
    images: [
      'images/Wooden Coasters/2E6D66D8-64E0-449A-BDCD-730FBEB4D3A2.jpg',
    ],
    options: [
      {
        key: 'quantity',
        label: 'Set Size',
        type: 'select',
        required: true,
        priceByValue: true,
        choices: [
          { label: 'Set of 4  —  $100', value: 'Set of 4', price: 100 },
          { label: 'Set of 2  —  $60',  value: 'Set of 2', price: 60  }
        ]
      },
      {
        key: 'leafAccent',
        label: 'Leaf Accent (no charge)',
        type: 'select',
        choices: [
          { label: 'None', value: 'None' },
          { label: 'Gold Leaf', value: 'Gold Leaf' },
          { label: 'Silver Leaf', value: 'Silver Leaf' }
        ]
      }
    ]
  },

  // ────────────────────────────────────────────────
  // ORNAMENTS & HOUSEHOLD
  // ────────────────────────────────────────────────
  {
    id: 'ornaments',
    category: 'ornaments',
    nameRegular: 'Resin',
    nameItalic: 'Ornaments',
    desc: 'Preserved flower ornaments — a perfect keepsake.',
    basePrice: 25,
    image: 'images/Ornaments/e3ab39_39af24f8ae744795a1b2523e660a46de~mv2.avif',
    images: [
      'images/Ornaments/e3ab39_39af24f8ae744795a1b2523e660a46de~mv2.avif',
      'images/Ornaments/e3ab39_3c0aade38db64e05a4e24485405ef3c8~mv2.avif',
      'images/Ornaments/e3ab39_c9c4aed5b4844947b3b9d3f6bf6511c0~mv2.avif',
    ],
    options: [
      {
        key: 'quantity',
        label: 'Quantity',
        type: 'select',
        required: true,
        priceByValue: true,
        choices: [
          { label: '4 Ornaments  —  $100', value: '4 Ornaments', price: 100 },
          { label: '1 Ornament  —  $25',   value: '1 Ornament',  price: 25  }
        ]
      },
      {
        key: 'leafAccent',
        label: 'Leaf Accent (no charge)',
        type: 'select',
        choices: [
          { label: 'None', value: 'None' },
          { label: 'Gold Leaf', value: 'Gold Leaf' },
          { label: 'Silver Leaf', value: 'Silver Leaf' }
        ]
      }
    ]
  },
  {
    id: 'wine-stoppers',
    category: 'ornaments',
    nameRegular: 'Wine',
    nameItalic: 'Stoppers',
    desc: 'Elegant resin wine stoppers — gorgeous gift idea.',
    basePrice: 25,
    image: 'images/Wine Stoppers/01.jpg',
    images: [
      'images/Wine Stoppers/01.jpg',
      'images/Wine Stoppers/02.jpg',
      'images/Wine Stoppers/03.jpg',
      'images/Wine Stoppers/04.avif',
      'images/Wine Stoppers/05.avif',
    ],
    options: [
      {
        key: 'quantity',
        label: 'Quantity',
        type: 'select',
        required: true,
        priceByValue: true,
        choices: [
          { label: '4 Stoppers  —  $100', value: '4 Stoppers', price: 100 },
          { label: '1 Stopper  —  $25',   value: '1 Stopper',  price: 25  }
        ]
      },
      {
        key: 'stopperColor',
        label: 'Stopper Color',
        type: 'select',
        required: true,
        choices: [
          { label: 'Gold', value: 'Gold' },
          { label: 'Silver', value: 'Silver' }
        ]
      },
      {
        key: 'leafAccent',
        label: 'Leaf Accent (no charge)',
        type: 'select',
        choices: [
          { label: 'None', value: 'None' },
          { label: 'Gold Leaf', value: 'Gold Leaf' },
          { label: 'Silver Leaf', value: 'Silver Leaf' }
        ]
      }
    ]
  },
  {
    id: 'large-bowl-8',
    category: 'ornaments',
    nameRegular: 'Large Bowl',
    nameItalic: '8"',
    desc: 'Stunning large resin bowl.',
    basePrice: 350,
    image: 'images/Large Bowl 8/B8FF3431-08B8-40E4-BE89-8E853B0C096D.jpg',
    images: [
      'images/Large Bowl 8/B8FF3431-08B8-40E4-BE89-8E853B0C096D.jpg',
      'images/Large Bowl 8/EFB65696-96EF-46E5-AD2C-A2697BCE6E27.jpg',
      'images/Large Bowl 8/e3ab39_0f1598988a464ad0956a18ee9daaf49a~mv2.avif',
      'images/Large Bowl 8/e3ab39_1876dd772eaf47c3afb203a9bf7b2132~mv2.avif',
    ],
    options: [
      {
        key: 'leafAccent',
        label: 'Leaf Accent (no charge)',
        type: 'select',
        choices: [
          { label: 'None', value: 'None' },
          { label: 'Gold Leaf', value: 'Gold Leaf' },
          { label: 'Silver Leaf', value: 'Silver Leaf' }
        ]
      }
    ]
  },
  {
    id: 'hexagon-vase-9',
    category: 'ornaments',
    nameRegular: '9" Hexagon',
    nameItalic: 'Vase',
    desc: 'Geometric hexagon resin vase.',
    basePrice: 300,
    image: 'images/Hexagon Vase 9/14CE1BB5-98FD-445F-93D5-C45529C97E51.jpg',
    options: [
      {
        key: 'leafAccent',
        label: 'Leaf Accent (no charge)',
        type: 'select',
        choices: [
          { label: 'None', value: 'None' },
          { label: 'Gold Leaf', value: 'Gold Leaf' },
          { label: 'Silver Leaf', value: 'Silver Leaf' }
        ]
      }
    ]
  },
  {
    id: 'striped-vase-6',
    category: 'ornaments',
    nameRegular: '6" Striped',
    nameItalic: 'Vase',
    desc: 'Gorgeous striped resin vase.',
    basePrice: 200,
    image: 'images/Striped Vase 6.5/0-5.jpg',
    images: [
      'images/Striped Vase 6.5/0-5.jpg',
      'images/Striped Vase 6.5/0B8E2AB4-7BCA-4AF7-8CC5-C8F60893FD2D.jpg',
      'images/Striped Vase 6.5/5B509106-F3BB-4B23-A149-309F8710F70E.jpg',
      'images/Striped Vase 6.5/IMG_0671.jpg',
      'images/Striped Vase 6.5/e3ab39_260a151506b54a9aa3f7b66b85643a77~mv2.avif',
      'images/Striped Vase 6.5/e3ab39_31c8d941c4ba4664807cf4fe55e22384~mv2.avif',
    ],
    options: [
      {
        key: 'leafAccent',
        label: 'Leaf Accent (no charge)',
        type: 'select',
        choices: [
          { label: 'None', value: 'None' },
          { label: 'Gold Leaf', value: 'Gold Leaf' },
          { label: 'Silver Leaf', value: 'Silver Leaf' }
        ]
      }
    ]
  },
  {
    id: 'tea-light-handle',
    category: 'ornaments',
    nameRegular: 'Tea Light Handle',
    nameItalic: 'Holder',
    desc: 'Medium tea light handle holder.',
    basePrice: 75,
    image: 'images/Tea Light Handle Holder/placeholder.svg',
    options: [
      {
        key: 'leafAccent',
        label: 'Leaf Accent (no charge)',
        type: 'select',
        choices: [
          { label: 'None', value: 'None' },
          { label: 'Gold Leaf', value: 'Gold Leaf' },
          { label: 'Silver Leaf', value: 'Silver Leaf' }
        ]
      }
    ]
  },
  {
    id: 'globe-tea-light',
    category: 'ornaments',
    nameRegular: 'Globe Tea Light',
    nameItalic: 'Candle Holder',
    desc: 'Large globe tea light candle holder.',
    basePrice: 100,
    image: 'images/Globe Tea Light Candle Holder/placeholder.svg',
    options: [
      {
        key: 'leafAccent',
        label: 'Leaf Accent (no charge)',
        type: 'select',
        choices: [
          { label: 'None', value: 'None' },
          { label: 'Gold Leaf', value: 'Gold Leaf' },
          { label: 'Silver Leaf', value: 'Silver Leaf' }
        ]
      }
    ]
  },
  {
    id: 'perfume-tray',
    category: 'ornaments',
    nameRegular: 'Perfume',
    nameItalic: 'Tray',
    desc: 'Elegant perfume tray cast in resin.',
    basePrice: 300,
    image: 'images/Perfume Tray/placeholder.svg',
    options: [
      {
        key: 'leafAccent',
        label: 'Leaf Accent (no charge)',
        type: 'select',
        choices: [
          { label: 'None', value: 'None' },
          { label: 'Gold Leaf', value: 'Gold Leaf' },
          { label: 'Silver Leaf', value: 'Silver Leaf' }
        ]
      }
    ]
  },

  // ────────────────────────────────────────────────
  // JEWELRY
  // ────────────────────────────────────────────────
  {
    id: 'trinket-tray',
    category: 'jewelry',
    nameRegular: 'Trinket',
    nameItalic: 'Tray',
    desc: 'Delicate resin trinket tray.',
    basePrice: 100,
    image: 'images/Trinket Tray/0-1.jpg',
    images: [
      'images/Trinket Tray/0-1.jpg',
      'images/Trinket Tray/4BE8EC92-5CD9-4D45-858A-6A0324328CD2.jpg',
      'images/Trinket Tray/A3635D5C-AAA2-4D23-88B8-83414DF7EF06.jpg',
      'images/Trinket Tray/D23D5E6D-696F-4C2C-B05B-114B74745186.jpg',
      'images/Trinket Tray/e3ab39_401377ce94ed4def8bc9ea2d72d999a0~mv2.avif',
      'images/Trinket Tray/e3ab39_6c0527d57d7f42efb756cdd694e5dc54~mv2.avif',
      'images/Trinket Tray/e3ab39_8b3c217aea364fcb8f3a6d2d059509bb~mv2.avif',
      'images/Trinket Tray/e3ab39_aa6e2d1ca4bb47238d6eae10f72dd46f~mv2.avif',
      'images/Trinket Tray/e3ab39_fb0b0d2cc2e6422498d9dd9dc44cf470~mv2.avif',
    ],
    options: [
      {
        key: 'leafAccent',
        label: 'Leaf Accent (no charge)',
        type: 'select',
        choices: [
          { label: 'None', value: 'None' },
          { label: 'Gold Leaf', value: 'Gold Leaf' },
          { label: 'Silver Leaf', value: 'Silver Leaf' }
        ]
      }
    ]
  },
  {
    id: 'sink-tray',
    category: 'jewelry',
    nameRegular: 'Sink',
    nameItalic: 'Tray',
    desc: 'Bathroom sink tray cast in resin.',
    basePrice: 100,
    image: 'images/Sink Tray/406AD32E-DAFA-4EA7-AA0A-CA953515C7A9.jpg',
    images: [
      'images/Sink Tray/406AD32E-DAFA-4EA7-AA0A-CA953515C7A9.jpg',
      'images/Sink Tray/CA2217B3-EDC6-4156-8FA9-A43A92503711.jpg',
      'images/Sink Tray/E5DBA8CA-C239-4ED2-9956-9E6E0AC35581.jpg',
      'images/Sink Tray/E6B1B5E5-FF1C-43C9-B4F5-6200F45F8849.jpg',
      'images/Sink Tray/e3ab39_2afc34be4df44fe995986825e25ee928~mv2.avif',
    ],
    options: [
      {
        key: 'handleColor',
        label: 'Handle Style',
        type: 'select',
        required: true,
        choices: [
          { label: 'Gold Handles',   value: 'Gold Handles'   },
          { label: 'Silver Handles', value: 'Silver Handles' },
          { label: 'Black Handles',  value: 'Black Handles'  },
          { label: 'Diamond Knobs',  value: 'Diamond Knobs'  }
        ]
      },
      {
        key: 'leafAccent',
        label: 'Leaf Accent (no charge)',
        type: 'select',
        choices: [
          { label: 'None', value: 'None' },
          { label: 'Gold Leaf', value: 'Gold Leaf' },
          { label: 'Silver Leaf', value: 'Silver Leaf' }
        ]
      }
    ]
  },
  {
    id: 'diamond-jewelry-jar',
    category: 'jewelry',
    nameRegular: 'Diamond Jewelry',
    nameItalic: 'Jar',
    desc: 'Stunning diamond-cut resin jewelry jar.',
    basePrice: 100,
    image: 'images/Diamond Jewelry Jar/e3ab39_8eb21c9278d343e9835a70480324162c~mv2.avif',
    images: [
      'images/Diamond Jewelry Jar/e3ab39_8eb21c9278d343e9835a70480324162c~mv2.avif',
      'images/Diamond Jewelry Jar/e3ab39_bcbc07000f9f43a39e3cd13dc4939e1b~mv2.avif',
      'images/Diamond Jewelry Jar/e3ab39_fa3c1558e4b84088bac838004c9102d9~mv2.avif',
    ],
    options: [
      {
        key: 'leafAccent',
        label: 'Leaf Accent (no charge)',
        type: 'select',
        choices: [
          { label: 'None', value: 'None' },
          { label: 'Gold Leaf', value: 'Gold Leaf' },
          { label: 'Silver Leaf', value: 'Silver Leaf' }
        ]
      }
    ]
  },
  {
    id: 'striped-jewelry-jar',
    category: 'jewelry',
    nameRegular: 'Striped Jewelry',
    nameItalic: 'Jar',
    desc: 'Beautiful striped resin jewelry jar.',
    basePrice: 100,
    image: 'images/Striped Jewelry Jar/7B8FDC34-ED02-4427-8AE3-1626370700C8.jpg',
    images: [
      'images/Striped Jewelry Jar/01.avif',
      'images/Striped Jewelry Jar/7B8FDC34-ED02-4427-8AE3-1626370700C8.jpg',
    ],
    options: [
      {
        key: 'leafAccent',
        label: 'Leaf Accent (no charge)',
        type: 'select',
        choices: [
          { label: 'None', value: 'None' },
          { label: 'Gold Leaf', value: 'Gold Leaf' },
          { label: 'Silver Leaf', value: 'Silver Leaf' }
        ]
      }
    ]
  },
  {
    id: 'jewelry-boat',
    category: 'jewelry',
    nameRegular: 'Jewelry',
    nameItalic: 'Boat',
    desc: 'Unique boat-shaped resin jewelry holder.',
    basePrice: 100,
    image: 'images/Jewelry Boat/81E9E735-6686-4C41-BFD3-D92D9D887DC3.jpg',
    images: [
      'images/Jewelry Boat/81E9E735-6686-4C41-BFD3-D92D9D887DC3.jpg',
      'images/Jewelry Boat/IMG_0657.jpg',
      'images/Jewelry Boat/e3ab39_c0480a4b7b8842b2854846b2b3890b66~mv2.avif',
    ],
    options: [
      {
        key: 'leafAccent',
        label: 'Leaf Accent (no charge)',
        type: 'select',
        choices: [
          { label: 'None', value: 'None' },
          { label: 'Gold Leaf', value: 'Gold Leaf' },
          { label: 'Silver Leaf', value: 'Silver Leaf' }
        ]
      }
    ]
  },
  {
    id: 'small-ring-holder',
    category: 'jewelry',
    nameRegular: 'Small Ring',
    nameItalic: 'Holder',
    desc: 'Petite resin ring holder.',
    basePrice: 25,
    image: 'images/Triangle Ring Holder/01.jpg',
    images: [
      'images/Triangle Ring Holder/01.jpg',
      'images/Triangle Ring Holder/02.avif',
    ],
    options: [
      {
        key: 'leafAccent',
        label: 'Leaf Accent (no charge)',
        type: 'select',
        choices: [
          { label: 'None', value: 'None' },
          { label: 'Gold Leaf', value: 'Gold Leaf' },
          { label: 'Silver Leaf', value: 'Silver Leaf' }
        ]
      }
    ]
  },
  {
    id: 'xl-ring-holder',
    category: 'jewelry',
    nameRegular: 'XL Ring',
    nameItalic: 'Holder',
    desc: 'Oversized statement resin ring holder.',
    basePrice: 100,
    image: 'images/XL Ring Holder/IMG_0661.jpg',
    options: [
      {
        key: 'leafAccent',
        label: 'Leaf Accent (no charge)',
        type: 'select',
        choices: [
          { label: 'None', value: 'None' },
          { label: 'Gold Leaf', value: 'Gold Leaf' },
          { label: 'Silver Leaf', value: 'Silver Leaf' }
        ]
      }
    ]
  },
  {
    id: 'heart-jewelry-tray',
    category: 'jewelry',
    nameRegular: 'Heart Jewelry',
    nameItalic: 'Tray',
    desc: 'Heart-shaped resin jewelry tray.',
    basePrice: 100,
    image: 'images/Heart Jewelry Dish/e3ab39_c2da5b41d67b40759c2cb133af69c651~mv2.avif',
    options: [
      {
        key: 'leafAccent',
        label: 'Leaf Accent (no charge)',
        type: 'select',
        choices: [
          { label: 'None', value: 'None' },
          { label: 'Gold Leaf', value: 'Gold Leaf' },
          { label: 'Silver Leaf', value: 'Silver Leaf' }
        ]
      }
    ]
  },
  {
    id: 'square-jewelry-dish',
    category: 'jewelry',
    nameRegular: 'Square Jewelry',
    nameItalic: 'Dish',
    desc: 'Elegant square resin jewelry dish.',
    basePrice: 100,
    image: 'images/Square Jewelry Dish/e3ab39_9e829389781544fe873241c13666d60d~mv2.avif',
    options: [
      {
        key: 'leafAccent',
        label: 'Leaf Accent (no charge)',
        type: 'select',
        choices: [
          { label: 'None', value: 'None' },
          { label: 'Gold Leaf', value: 'Gold Leaf' },
          { label: 'Silver Leaf', value: 'Silver Leaf' }
        ]
      }
    ]
  }

];
