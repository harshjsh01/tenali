/**
 * Data-driven configurations for Division Fair Sharing Demonstrations and Activities.
 * Uses character IDs ('maya', 'rohan', 'priya', 'leo', 'sam') with zero emojis.
 */

export const DIVISION_DEMOS = [
  {
    id: 'demo-1',
    total: 4,
    friends: 2,
    friendNames: ['Maya', 'Rohan'],
    characterIds: ['maya', 'rohan'],
    remainder: 0,
    speedMs: 1400
  },
  {
    id: 'demo-2',
    total: 6,
    friends: 2,
    friendNames: ['Priya', 'Leo'],
    characterIds: ['priya', 'leo'],
    remainder: 0,
    speedMs: 1200
  },
  {
    id: 'demo-3',
    total: 7,
    friends: 2,
    friendNames: ['Sam', 'Maya'],
    characterIds: ['sam', 'maya'],
    remainder: 1,
    speedMs: 1200
  }
];

export const DIVISION_ACTIVITIES = [
  {
    id: 1,
    title: 'Activity 1',
    subtitle: 'Exact Sharing',
    hasRemainder: false,
    guidanceLevel: 'high',
    problems: [
      { total: 6, friends: 2, friendNames: ['Maya', 'Rohan'], characterIds: ['maya', 'rohan'] },
      { total: 8, friends: 4, friendNames: ['Leo', 'Priya', 'Sam', 'Maya'], characterIds: ['leo', 'priya', 'sam', 'maya'] },
      { total: 9, friends: 3, friendNames: ['Rohan', 'Priya', 'Leo'], characterIds: ['rohan', 'priya', 'leo'] }
    ]
  },
  {
    id: 2,
    title: 'Activity 2',
    subtitle: 'Larger Exact Sharing',
    hasRemainder: false,
    guidanceLevel: 'medium',
    problems: [
      { total: 10, friends: 2, friendNames: ['Priya', 'Sam'], characterIds: ['priya', 'sam'] },
      { total: 12, friends: 3, friendNames: ['Maya', 'Rohan', 'Leo'], characterIds: ['maya', 'rohan', 'leo'] },
      { total: 12, friends: 4, friendNames: ['Sam', 'Priya', 'Maya', 'Rohan'], characterIds: ['sam', 'priya', 'maya', 'rohan'] }
    ]
  },
  {
    id: 3,
    title: 'Activity 3',
    subtitle: 'Remainder Discovery',
    hasRemainder: true,
    guidanceLevel: 'medium',
    problems: [
      { total: 7, friends: 2, friendNames: ['Maya', 'Priya'], characterIds: ['maya', 'priya'] },
      { total: 10, friends: 3, friendNames: ['Rohan', 'Leo', 'Sam'], characterIds: ['rohan', 'leo', 'sam'] },
      { total: 11, friends: 4, friendNames: ['Maya', 'Rohan', 'Priya', 'Leo'], characterIds: ['maya', 'rohan', 'priya', 'leo'] }
    ]
  },
  {
    id: 4,
    title: 'Activity 4',
    subtitle: 'Independent Challenge',
    hasRemainder: true,
    guidanceLevel: 'minimal',
    problems: [
      { total: 14, friends: 3, friendNames: ['Sam', 'Maya', 'Rohan'], characterIds: ['sam', 'maya', 'rohan'] },
      { total: 15, friends: 4, friendNames: ['Priya', 'Leo', 'Sam', 'Maya'], characterIds: ['priya', 'leo', 'sam', 'maya'] },
      { total: 16, friends: 5, friendNames: ['Maya', 'Rohan', 'Priya', 'Leo', 'Sam'], characterIds: ['maya', 'rohan', 'priya', 'leo', 'sam'] }
    ]
  }
];

export const DIVISION_GROUPING_ACTIVITIES = [
  {
    id: 1,
    title: 'Grouping 1',
    subtitle: 'Exact Groups of 2 & 3',
    hasRemainder: false,
    problems: [
      { total: 6, targetSize: 2, maxBags: 3, prompt: 'Put 2 candies in each bag' },
      { total: 6, targetSize: 3, maxBags: 2, prompt: 'Put 3 candies in each bag' },
      { total: 8, targetSize: 2, maxBags: 4, prompt: 'Put 2 candies in each bag' }
    ]
  },
  {
    id: 2,
    title: 'Grouping 2',
    subtitle: 'Grouping with Leftovers',
    hasRemainder: true,
    problems: [
      { total: 7, targetSize: 2, maxBags: 3, prompt: 'Put 2 candies in each bag' },
      { total: 10, targetSize: 3, maxBags: 3, prompt: 'Put 3 candies in each bag' },
      { total: 11, targetSize: 3, maxBags: 3, prompt: 'Put 3 candies in each bag' }
    ]
  },
  {
    id: 3,
    title: 'Grouping 3',
    subtitle: 'Larger Grouping Discovery',
    hasRemainder: true,
    problems: [
      { total: 12, targetSize: 4, maxBags: 3, prompt: 'Put 4 candies in each bag' },
      { total: 14, targetSize: 3, maxBags: 4, prompt: 'Put 3 candies in each bag' },
      { total: 15, targetSize: 4, maxBags: 3, prompt: 'Put 4 candies in each bag' }
    ]
  }
];

export const DIVISION_REPAIR_ACTIVITIES = [
  {
    id: 1,
    title: 'Repair 1',
    subtitle: 'Fix Unequal Sharing',
    problems: [
      {
        total: 6,
        friends: 2,
        friendNames: ['Maya', 'Rohan'],
        characterIds: ['maya', 'rohan'],
        initialCounts: [4, 2],
        initialJar: 0,
        targetPerFriend: 3,
        prompt: 'Maya has 4 and Rohan has 2. Move candies to make their shares equal!'
      },
      {
        total: 6,
        friends: 3,
        friendNames: ['Maya', 'Rohan', 'Leo'],
        characterIds: ['maya', 'rohan', 'leo'],
        initialCounts: [3, 3, 0],
        initialJar: 0,
        targetPerFriend: 2,
        prompt: 'Leo was left out! Move candies so all 3 friends have equal shares.'
      },
      {
        total: 8,
        friends: 3,
        friendNames: ['Priya', 'Leo', 'Sam'],
        characterIds: ['priya', 'leo', 'sam'],
        initialCounts: [3, 4, 1],
        initialJar: 0,
        targetPerFriend: 2,
        targetLeftover: 2,
        prompt: 'Shares are uneven. Equalize so everyone gets 2, with 2 valid leftovers in the jar!'
      }
    ]
  }
];
