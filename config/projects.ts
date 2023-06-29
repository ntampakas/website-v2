export const projects = [
  {
    id: 1,
    image: "rlnlogo.webp",
    name: "Rate-Limiting Nullifier",
    tldr: "A protocol for deterring spam and maintaining anonymity in communication systems.",
    description:
      "Rate-Limiting Nullifier (RLN) is a protocol designed to combat spam and denial of service attacks in privacy-preserving environments. It allows users in an anonymous system to penalize those who exceed the rate limit, either by withdrawing the offender's stake or revealing their secrets. This mechanism helps maintain system integrity and deters abuse. RLN is built on the Semaphore protocol and uses zero-knowledge proofs and the Shamir’s Secret Sharing scheme to reveal the spammer's private key. It's particularly useful for developers working on communication systems that require privacy and anonymity, such as chat apps, client-server communications, and peer-to-peer communications. It's already being used in projects like Zerokit and Waku, and is also being developed for use with the KZG polynomial commitment scheme.",
    links: {
      github: "https://github.com/Rate-Limiting-Nullifier/circom-rln",
      website: "https://rate-limiting-nullifier.github.io/rln-docs/",
      twitter: "none",
      discord: "none",
    },
    tags: {
      themes: ["Anonymity/privacy"],
      types: ["Infrastructure/protocol"],
      builtWith: ["Circom", "Solidity", "Semaphore"],
    },
  },
  {
    id: 2,
    image: "zkitterlogo.webp",
    name: "Zkitter",
    tldr: "A decentralized social network prioritizing privacy and anonymity",
    description:
      "Zkitter is a decentralized social network that emphasizes privacy by default. It allows users to share thoughts and communicate in various modes: as known identities, as a member of a group, or entirely anonymously. Built with Semaphore and RLN, Zkitter offers familiar social media features such as posting, chatting, following, and liking, but with a strong focus on user privacy and anonymity. It serves as an experiment to explore new ways of engaging in conversations without the fear of damaging one’s personal reputation and is an example of a user-facing application using zero-knowledge primitives such as Semaphore, CryptKeeper, ZK-Chat, and Interep. Users can sign up using an Ethereum address or ENS name, or create an anonymous account, with options for anonymous chat and posting.",
    links: {
      github: "https://github.com/zkitter",
      website: "https://www.zkitter.com/explore/",
      twitter: "none",
      discord: "https://discord.gg/Em4Z9yE8eW",
    },

    tags: {
      themes: ["Anonymity/privacy", "Social", "Identity"],
      types: ["Application", "Infrastructure/protocol"],
      builtWith: ["Semaphore", "RLN", "Interep", "zkchat"],
    },
  },
  {
    id: 3,
    image: "macilogo.webp",
    name: "MACI",
    tldr: "A secure e-voting solution minimizing the risk of collusion and bribery",
    description:
      "Minimal Anti-Collusion Infrastructure (MACI) is a protocol designed to provide a highly secure e-voting solution. It enables organizations to conduct on-chain voting processes with a significantly reduced risk of cheating, such as bribery or collusion. MACI uses zero-knowledge proofs to implement a receipt-free voting scheme, making it impossible for anyone other than the vote coordinator to verify how a specific user voted. This ensures the correct execution of votes and allows anyone to verify the results. It's particularly beneficial for governance and funding events, where its anti-collusion mechanisms help ensure fair and transparent outcomes.",
    links: {
      github: "https://github.com/privacy-scaling-explorations/maci",

      website:
        "https://mirror.xyz/privacy-scaling-explorations.eth/ltCt68hslI5jmMf1AnfkrP2eUwkeZ8_fgkHc_WyD9Nc",

      twitter: "none",
      discord: "none",
    },
    tags: {
      themes: ["Anonymity/privacy", "Voting/governance"],
      types: ["Lego sets/toolkits", "Infrastructure/protocol"],
      builtWith: ["P0tion", "JubjubLib"],
    },
  },
  {
    id: 4,
    image: "waxlogo.webp",
    name: "WAX: Wallet Account eXperiments",
    tldr: "Streamlining web3 product development with smart account components for enhanced wallets, dApps, and SDKs.",
    description:
      "Wallet Account eXperiments (WAX), formerly known as BLS Wallet, is a suite of production-ready smart account components that provide advanced features for wallets, SDKs, and dApps. It's designed to lower gas costs on EVM rollups through aggregated BLS signatures, simplifying the integration of contract wallets and reducing the cost of layer 2 transactions. This makes WAX particularly beneficial for web3 projects targeting developing economies. WAX components incorporate advanced cryptographic primitives in a secure and intuitive way, using Safe contracts for a familiar and battle-tested foundation. Each additional module can be audited and added or removed at the account holder's discretion. WAX offers features like cheaper L2 transactions, modular smart contract components, ERC 4337 compatibility, zk email verification, passkeys verification, multi-action transactions, gasless transactions, and wallet upgradability. The primary use cases for WAX include scaling, key management, and the creation of prototypes for the web3 ecosystem.",
    links: {
      github: "https://github.com/getwax",
      website: "https://getwax.org/",
      twitter: "none",
      discord: "https://discord.gg/hGDmAhcRyz",
    },
    tags: {
      builtWith: [
        "Hardhat",
        "Node",
        "Solidity BLS library",
        "sqlite",
        "docker",
        "ethers",
        "deno",
      ],

      themes: ["Scaling", "Key management"],
      types: ["Prototype", "Proof of concept", "Lego sets/toolkits"],
    },
  },

  {
    id: 5,
    image: "",
    name: "ZK-Chat",
    tldr: "A protocol for integrating decentralized, anonymous, and spam-protected chat into applications.",
    description:
      "ZK-Chat is a protocol that enables developers to incorporate decentralized, anonymous chat features into their applications, complete with spam protection and anonymous group signaling. It uses Waku decentralized messaging, Semaphore for anonymous signaling, and Rate-Limiting Nullifier (RLN) for spam prevention. This creates a decentralized, client-server model that offers unstoppable, anonymous chat with registry on-chain. It's designed for both developers and users, offering an app and a library for easy integration into various applications.",
    links: {
      github: "https://github.com/kayleegeorge/zk-chat//",

      website: "https://www.notion.so/6649797a76ed4858933015360fc76650?pvs=21",
      twitter: "none",
      discord: "none",
    },
    tags: {
      themes: ["Anonymity/privacy", "Social"],
      types: ["Legos/dev tools", "Proof of concept", "Application"],
      builtWith: ["RLN", "Semaphore", "Waku"],
    },
  },
  {
    id: 6,
    image: "cryptkeeperlogo.webp",
    name: "CryptKeeper",
    tldr: "A browser extension for secure, portable anonymous identity management across applications.",
    description:
      "CryptKeeper is a browser extension that generates Semaphore and RLN proofs for websites, providing a secure and portable solution for managing anonymous identity secrets across different applications. It simplifies the integration of zero-knowledge (ZK) identities and proofs into applications, allowing developers to focus on building the front-end and logic of their applications. By handling complex aspects of cryptography, circuits, caching, and storage, CryptKeeper enables users to interact with decentralized applications (dapps) without revealing their private identity secrets. It is aimed at building secure community standards for the growing ZK ecosystem.",
    links: {
      github: "https://github.com/CryptKeeperZK",
      website: "none",
      twitter: "none",
      discord: "none",
    },
    tags: {
      themes: ["Anonymity/privacy", "Social", "Identity"],
      types: ["Application", "Infrastructure/protocol", "Lego sets/toolkits"],

      builtWith: ["Semaphore", "RLN"],
    },
  },
  {
    id: 7,
    image: "semaphorelogo.webp",
    name: "Semaphore",
    tldr: "A zero-knowledge protocol enabling anonymous group membership proof and signaling.",
    description:
      "Semaphore is a protocol that allows users to prove their membership in a group and transmit anonymous data, such as votes or feedback, without revealing their identities. It is designed for developers aiming to build privacy-preserving applications. Semaphore enables the creation of identities and their corresponding public values, which can be added to Merkle trees. This facilitates the authentication of anonymous user messages through zero-knowledge proofs, where membership is proven using Merkle proofs within the circuit. Key use cases include anonymous voting applications, receiving anonymous feedback from event attendees, and anonymous text messages. It is currently in production and is being used in a wide variety of projects.",
    links: {
      github: "https://github.com/semaphore-protocol",
      website: "https://semaphore.appliedzkp.org/",
      twitter: "none",
      discord: "https://semaphore.appliedzkp.org/discord",
    },
    tags: {
      themes: [
        "Anonymity/privacy",
        "Social",
        "Identity",
        "Transaction privacy",
        "Voting/governance",
        "Reputation",
        "Education",
        "Scaling",
        "Key management",
        "Other (group membership)",
      ],

      types: [
        "Legos/dev tools",
        "Lego sets/toolkits",
        "Infrastructure/protocol",
      ],
      builtWith: ["ZK-kit", "circom", "snarkjs"],
    },
  },
  {
    id: 8,
    image: "",
    name: "PSE Security",
    tldr: "Proactively securing Ethereum's L2 and ZK ecosystems.",
    description:
      "PSE Security is a division of the Privacy & Scaling Explorations team at the Ethereum Foundation. Its primary goal is to identify and rectify bugs, thereby enhancing the security of the Ethereum Layer 2 and Zero-Knowledge ecosystems. Recognizing the potential for critical bugs to cause significant setbacks, PSE Security is committed to preemptively addressing these issues. The team offers open-source projects like the ZK Bug Tracker and Bridge Bug Tracker, which track real bugs and exploits in production code, and encourages community contributions. PSE Security also conducts manual audits and plans to help teach the community more about security and ways they can prevent bugs themselves.",
    links: {
      github: "https://github.com/privacy-scaling-explorations/security",
      website:
        "https://mirror.xyz/privacy-scaling-explorations.eth/BaqGMfBhEZR1cvTJlA9E3Xu5ZhD7IthLiUK-Q75rQMM",
      discord: "none",
      twitter: "none",
    },
    tags: {
      themes: [
        "Anonymity/privacy",
        "Education",
        "Key management",
        "Scaling",
        "Security",
      ],
      types: ["Legos/dev tools"],
      builtWith: ["Slither", "Ecne", "Circomspect", "Echidna"],
    },
  },

  {
    id: 9,
    image: "",
    name: "zkEVM Community Edition",
    tldr: "A zero-knowledge proof mechanism for Ethereum block verification.",
    description:
      "zkEVM Community Edition is a project aimed at validating Ethereum blocks using zero-knowledge proofs. It is designed to be fully compatible with Ethereum's EVM and serves two primary goals. First, it enables the creation of a layer 2 network (zkRollup) compatible with the Ethereum ecosystem, which uses zero-knowledge proofs to validate blocks, thus enhancing scalability. Second, it allows the generation of zero-knowledge proofs for blocks from the existing layer 1 Ethereum network, enabling light clients to quickly synchronize many blocks with low resource consumption while ensuring block correctness without needing trust in external parties.",
    links: {
      github: "https://github.com/privacy-scaling-explorations/zkevm-circuits",
      website:
        "https://mirror.xyz/privacy-scaling-explorations.eth/I5BzurX-T6slFaPbA4i3hVrO7U2VkBR45eO-N3CSnSg",
      twitter: "none",
      discord: "none",
    },
    tags: {
      themes: ["Scaling"],
      types: ["Infrastructure/protocol", "Lego sets/toolkits"],
      builtWith: ["halo2 from zcash", "Rust", "geth"],
    },
  },

  {
    id: 10,
    image: "bandadalogo.webp",
    name: "Bandada",
    tldr: "An open-source system for managing privacy-preserving groups of anonymous individuals.",
    description:
      "Bandada is a project designed to simplify the management of privacy-preserving Semaphore groups. It is aimed at developers who want to build privacy-based applications and integrate anonymity sets, as well as non-developers working in DAOs, governments, international institutions, non-profit organizations, and associations that want to create and manage anonymous groups. Bandada offers a plug-and-play infrastructure, reducing the time and complexity required for managing anonymity sets. It enables anonymous signaling, such as voting, messaging, login, or endorsing, in various use cases like private organizations, GitHub repository contributors, and groups of wallets holding a specific NFT.",
    links: {
      github: "https://github.com/privacy-scaling-explorations/bandada",
      website: "https://bandada.appliedzkp.org/",
      twitter: "none",
      discord: "none",
    },
    tags: {
      themes: [
        "Anonymity/privacy",
        "Social",
        "Identity",
        "Transaction privacy",
        "Voting/governance",
        "Reputation",
        "Education",
        "Scaling",
        "Key management",
      ],
      type: [
        "Legos/dev tools",
        "Lego sets/toolkits",
        "Prototype",
        "Proof of concept",
        "Infrastructure/protocol",
        "Plugin",
        "Application",
      ],
      builtWith: ["Semaphore", "ZK-kit"],
    },
  },

  {
    id: 11,
    image: "",
    name: "DSL Working Group",
    tldr: "Exploration of languages for writing zk circuits",
    description:
      "The DSL Working Group is focused on the exploration and improvement of languages used to write zero-knowledge circuits. The group's primary goal is to enhance the state of zk circuit languages, making them easier to write and review by offering the right abstractions. They also aim to make it harder to write unsound circuits by implementing static analysis and enforcing safer patterns. Additionally, they are working to support next-generation (Incrementally Verifiable Computation or IVC) proving systems. The group is currently working on Chiquito, a high-level Domain-Specific Language (DSL) for Halo2 circuits that lowers the entry barrier to write zk circuits with a state-machine abstraction API.",
    links: {
      github: "https://github.com/privacy-scaling-explorations/chiquito/",
      website: "none",
      twitter: "none",
      discord: "none",
    },
    tags: {
      type: ["Legos/dev tools", "Proof of concept", "Developer tooling"],
      themes: [],
      builtWith: [],
    },
  },

  {
    id: 12,
    image: "",
    name: "ZKML (Zero-Knowledge Machine Learning)",
    tldr: "ZKML leverages zero-knowledge proofs for privacy-preserving machine learning, enabling model and data privacy with transparent verification.",
    description:
      "ZKML is a solution that combines the power of zero-knowledge proofs (ZKPs) and machine learning to address the privacy concerns in traditional machine learning. It provides a platform for machine learning developers to convert their TensorFlow Keras models into ZK-compatible versions, ensuring model privacy, data privacy, and transparent verification. ZKML can be used to verify if a specific machine learning model was used to generate a particular piece of content, without revealing the input or the model used. It has potential use cases in on-chain biometric authentication, private data marketplace, proprietary ML model sharing, and AIGC NFTs.",
    links: {
      github: "https://github.com/socathie",

      website:
        "https://mirror.xyz/privacy-scaling-explorations.eth/K88lOS4XegJGzMoav9K5bLuT9Zhn3Hz2KkhB3ITq-m8",
      twitter: "none",
      discord: "none",
    },
    tags: {
      themes: ["Anonymity/privacy", "Scaling"],
      type: ["Proof of concept", "Infrastructure/protocol"],
      builtWith: ["circom", "halo2", "nova"],
    },
  },

  {
    id: 13,
    image: "",
    name: "Trusted Setups",
    tldr: "Aiding developers with tools for trusted setups.",
    description:
      "The Trusted Setups project is dedicated to simplifying the process of trusted setups, which are crucial for privacy or scaling solutions. Trusted setups involve multiple participants contributing to the generation of secrets. As long as one participant forgets their part of the secret, the final solution remains secure. The team recognizes the complexity of developing contribution programs and coordinating the participants' queue in a trusted setup. To address this, they are developing tools, including scripts, WebApps, and APIs, to streamline the contribution and coordination effort. This allows developers to focus on building their circuits and applications, enhancing efficiency and productivity in the development of zero-knowledge applications.",
    links: {
      github: "https://github.com/zkparty",

      website: "https://docs.google.com/presentation/d/1dTKWaZDPCZFI5W",
      twitter: "none",
      discord: "none",
    },
    tags: {
      themes: ["Scaling", "Education"],
      type: ["Legos/dev tools", "Lego sets/toolkits"],
      builtWith: [],
    },
  },

  {
    id: 14,
    image: "",
    name: "zk3",
    tldr: "Utilizing ZK proofs in social networks",
    description:
      "Zk3 is a protocol that leverages Zero Knowledge Proofs (ZKPs) to allow users to prove their membership in a group without revealing their identity. This is particularly useful for social media applications built on Lens or other on-chain platforms. The protocol helps to moderate conversations and reduce bot activity while preserving user privacy. It provides developers with the tools to verify group eligibility, create ZK proofs, and use ZK proofs in Lens. ZK3 consists of a smart contract system for user interactions and network rules, and a GraphQL API for flexible interaction, enabling the development of diverse applications, including web 2.0 integrations.",
    links: {
      github: "http://github.com/monemetrics/semaphore-zk3",
      website: "http://zk3.io/",
      twitter: "http://twitter.com/zk3org",
      discord: "none",
    },
    tags: {
      themes: ["Anonymity/privacy", "Social", "Identity", "Reputation"],
      type: [
        "Legos/dev tools",
        "Lego sets/toolkits",
        "Infrastructure/protocol",
        "Plugin",
      ],
      builtWith: ["Semaphore", "Lens protocol"],
    },
  },

  {
    id: 15,
    image: "tlsnlogo.webp",
    name: "TLSNotary",
    tldr: "A protocol for creating cryptographic proofs of authenticity for any data on the web.",
    description:
      "TLSNotary is useful for developers of privacy focused projects that need data provenance from secure web servers. It leverages the widely-used Transport Layer Security (TLS) protocol to securely and privately prove a transcript of communications took place with a webserver. The protocol involves splitting TLS session keys between two parties: the User and the Notary. Neither the User nor Notary are in possession of the full TLS session keys, they only hold a share of those keys. This ensures the security assumptions of TLS while enabling the User to prove the authenticity of the communication to the Notary. The Notary remains unaware of which webserver is being queried, and the Notary never has access to the unencrypted communications. All of this is achieved while maintaining full privacy.",
    links: {
      github: "none",
      website: "none",
      twitter: "none",
      discord: "none",
    },
    tags: {
      themes: [],
      type: [],
      builtWith: [],
    },
  },

  {
    id: 16,
    image: "",
    name: "EigenTrust",
    tldr: "A distributed reputation system with zero-knowledge features.",
    description:
      "EigenTrust is a library designed to manage trust within a distributed network, incorporating zero-knowledge features. It serves as a reputation bank for the Ethereum ecosystem, providing an interoperable layer for managing reputation and trust. The protocol creates zero-knowledge proofs of reputation scores based on ratings given by network participants. This allows for the creation of a reputation system for peer-to-peer marketplaces and exchanges, reputation-weighted voting, and community gatekeeping.",
    links: {
      github: "https://github.com/eigen-trust/protocol",
      website: "none",
      twitter: "none",
      discord: "none",
    },
    tags: {
      themes: ["Reputation", "Identity"],
      type: ["Infrastructure/protocol"],
      builtWith: ["Ethereum Attestation Service", "Halo2", "ethers.rs"],
    },
  },

  {
    id: 17,
    image: "",
    name: "AnonKlub",
    tldr: "A mechanism for anonymous proof of Ethereum address ownership.",
    description:
      "AnonKlub is a tool designed for Ethereum developers that allows for anonymous proof of Ethereum address ownership. It doesn't directly address the public observability of Ethereum transactions but provides a workaround for privacy. Users can prepare a list of Ethereum addresses, sign a message from an address they own, and use that signature to generate a zero-knowledge proof. This proof enables users to perform actions anonymously that would typically require ownership of an address from the initial list. Use cases include anonymous NFT minting and Discord verification for DAOs without disclosing the public address.",
    links: {
      github: "https://github.com/privacy-scaling-explorations/e2e-zk-ecdsa",
      website: "https://anonklub.fly.dev/",
      twitter: "none",
      discord: "none",
    },
    tags: {
      themes: [
        "Transaction privacy",
        "Anonymity/privacy",
        "Social",
        "Identity",
        "Voting/governance",
      ],
      type: ["Infrastructure/protocol", "Prototype", "Proof of concept"],
      builtWith: ["Circom", "snarkjs", "halo2"],
    },
  },

  {
    id: 18,
    image: "",
    name: "Summa",
    tldr: "Protocol enabling centralized exchanges to prove solvency without compromising private information.",
    description:
      "Summa allows centralized exchanges to demonstrate that their assets exceed their liabilities without revealing critical business information such as individual user balances, total number of users, and total liabilities or assets. It uses zero-knowledge proofs to ensure that exchanges can demonstrate they have sufficient assets to cover all user balances. The protocol involves building a Merkle Sum Tree of user balances, generating proofs for each user, and allowing users to verify these proofs.",
    links: {
      github: "https://github.com/summa-dev",
      website: "none",
      twitter: "none",
      discord: "none",
    },
    tags: {
      themes: ["Anonymity/privacy", "Computational Integrity"],
      type: ["Infrastructure/protocol", "Application"],
      builtWith: ["Halo2 PSE"],
    },
  },
]