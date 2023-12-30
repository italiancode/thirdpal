export const airdropData = [
  {
    id: 1,
    name: "Sample Airdrop 1",
    description: "Description of the first sample airdrop.",
    organizer: {
      name: "Organizer Name 1",
      website: "https://example.com/organizer1",
      contactEmail: "organizer1@example.com",
      projectImage: "",
    },
    network: "ETH",
    type: "Social Media",
    taskName: "Follow on Twitter",
    taskDescription: "Follow our Twitter account.",
    taskType: "Social Media",
    task: {
      id: 1,
      taskData: {
        platform: "Twitter",
        username: "sample_twitter",
        link: "https://twitter.com/sample_twitter",
      },
    },
    reward: "50 tokens",
    completionCriteria:
      "Follow the Twitter account and stay followed until the end of the airdrop.",
    completed: false, // Status of completion for the user
    startDate: "2023-01-01",
    endDate: "2023-01-31",
    rewardToken: "USDT",
    totalRewards: "50",
    participants: [
      {
        userId: 123,
        completedTasks: [1], // IDs of completed tasks by the user
        claimed: false, // Whether the user has claimed the reward
      },

      {
        userId: 321,
        completedTasks: [1], // IDs of completed tasks by the user
        claimed: false, // Whether the user has claimed the reward
      },
      // Add more participants as needed
    ],
  },

  {
    id: 2,
    name: "Sample Airdrop 2",
    description: "Description of the second sample airdrop.",
    organizer: {
      name: "Organizer Name 2",
      website: "https://example.com/organizer2",
      contactEmail: "organizer1@example.com",
      projectImage: "",
    },
    type: "Social Media",
    network: "BSC",
    taskName: "Follow on Twitter",
    taskDescription: "Follow our Twitter account.",
    taskType: "Social Media",
    task: {
      id: 1,
      taskData: {
        platform: "Twitter",
        username: "sample_twitter",
        link: "https://twitter.com/sample_twitter",
      },
    },
    reward: "50 tokens",
    completionCriteria:
      "Follow the Twitter account and stay followed until the end of the airdrop.",
    completed: false, // Status of completion for the user
    startDate: "2023-01-01",
    endDate: "2023-01-31",
    rewardToken: "USDT",
    totalRewards: "50",
    participants: [
      {
        userId: 123,
        completedTasks: [1], // IDs of completed tasks by the user
        claimed: false, // Whether the user has claimed the reward
      },
      // Add more participants as needed
    ],
  },

  {
    id: 3,
    name: "Sample Airdrop 3",
    description: "Description of the third sample airdrop.",
    organizer: {
      name: "Organizer Name 3",
      website: "https://example.com/organizer3",
      contactEmail: "organizer1@example.com",
      projectImage: "",
    },
    type: "Quiz",
    network: "ARB",
    taskName: "Educational Quiz",
    taskDescription:
      "Complete an educational quiz related to blockchain or the organizer's project.",
    taskType: "Quiz",
    task: {
      id: 1,
      taskData: {
        quizLink: "[Link to the quiz]",
        score: "[Score achieved in the quiz]",
      },
    },
    reward: 50,
    completionCriteria:
      "Achieve a passing score in the quiz within the given attempts.",
    example:
      "Complete the blockchain fundamentals quiz with a minimum score of 80% to earn 50 tokens.",

    completed: false,
    startDate: "2023-01-01",
    endDate: "2023-01-31",
    rewardToken: "USDT",
    totalRewards: "50",
    participants: [
      {
        userId: 123,
        completedTasks: [1], // IDs of completed tasks by the user
        claimed: false, // Whether the user has claimed the reward
      },
      // Add more participants as needed
    ],
  },

  {
    id: 4,
    name: "Sample Airdrop 4",
    description: "Description of the third sample airdrop.",
    organizer: {
      name: "Organizer Name 4",
      website: "https://example.com/organizer4",
      contactEmail: "organizer1@example.com",
      projectImage: "",
    },
    type: "Token Swap",
    network: "ARB",
    taskName: "Token Swap",
    taskDescription:
      "Swap a specific amount of tokens for the organizer's token.",
    taskType: "Token Swap",
    task: {
      id: 1,
      taskData: {
        platform: "[Exchange Name/Platform]",
        amount: "[Amount to Swap]",
        transactionID: "[Transaction ID after successful swap]",
      },
    },
    reward: 100,
    completionCriteria:
      "Successful token swap completed within the specified deadline.",
    example:
      "Swap 0.1 ETH for XYZ tokens on Uniswap and submit the transaction ID.",

    completed: false,
    startDate: "2023-01-01",
    endDate: "2023-01-31",
    rewardToken: "USDT",
    totalRewards: "50",
    participants: [
      {
        userId: 123,
        completedTasks: [1], // IDs of completed tasks by the user
        claimed: false, // Whether the user has claimed the reward
      },
      // Add more participants as needed
    ],
  },

  {
    id: 5,
    name: "Sample Airdrop 5",
    description: "Description of the third sample airdrop.",
    organizer: {
      name: "Organizer Name 5",
      website: "https://example.com/organizer5",
      contactEmail: "organizer1@example.com",
      projectImage: "",
    },
    type: "Referral",
    network: "SOL",
    taskName: "Referral Program",
    taskDescription:
      "Invite friends to join the Airdrop using your referral link or code.",
    taskType: "Referral",
    task: {
      id: 1,
      taskData: {
        referralLinkCode: "[Unique referral link or code]",
        invitedUsers: "[List of invited users]",
      },
    },
    reward: 20,
    completionCriteria:
      "Invited users successfully join the Airdrop and complete at least one task.",
    example:
      "Invite friends to join using your referral link, and for each successful referral, earn 20 tokens.",

    completed: false,
    startDate: "2023-01-01",
    endDate: "2023-01-31",
    rewardToken: "USDT",
    totalRewards: "50",
    participants: [
      {
        userId: 123,
        completedTasks: [1], // IDs of completed tasks by the user
        claimed: false, // Whether the user has claimed the reward
      },
      // Add more participants as needed
    ],
  },

  {
    id: 6,
    name: "Sample Airdrop 6",
    description: "Description of the third sample airdrop.",
    organizer: {
      name: "Organizer Name 6",
      website: "https://example.com/organizer6",
      contactEmail: "organizer1@example.com",
      projectImage: "",
    },
    type: "Content Creation",
    network: "ETH",
    taskName: "Create Content",
    taskDescription:
      "Create original content (article, video, artwork, etc.) about the organizer's project.",
    taskType: "Content Creation",
    task: {
      id: 1,
      taskData: {
        contentLink: "[Link to the created content]",
        contentType: "[Type of content created]",
      },
    },
    reward: 200,
    completionCriteria:
      "Submitted content should meet the organizer's quality standards and be shared on social media or a specific platform.",
    example:
      "Create an informative article/video about the project and share it on Twitter with a specific hashtag.",

    completed: false,
    startDate: "2023-01-01",
    endDate: "2023-01-31",
    rewardToken: "USDT",
    totalRewards: "50",
    participants: [
      {
        userId: 123,
        completedTasks: [1], // IDs of completed tasks by the user
        claimed: false, // Whether the user has claimed the reward
      },
      // Add more participants as needed
    ],
  },
  // Add more airdrops as needed
];
