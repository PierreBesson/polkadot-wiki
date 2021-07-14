module.exports = {
  docs: [
    {
      type: "category",
      label: "General",
      items: [
        "getting-started",
        "claims",
        "redenomination",
        "grants",
        "thousand-validators",
        "ambassadors",
        "research",
        "community",
        "contributing",
        "contributors",
        "glossary",
        "ens",
        "learn-ledger",
        "learn-scams",
        "learn-dyor",
        "faq",
      ],
    },
    {
      type: "category",
      label: "Learn",
      items: [
        "learn-launch",
        {
          type: "category",
          label: "Basics",
          items: [
            "learn-architecture",
            "learn-accounts",
            "learn-account-generation",
            "learn-account-restore",
            "learn-DOT",
            "learn-security",
            "learn-consensus",
            "learn-nominator",
            "learn-validator",
            "learn-collator",
            "learn-governance",
            "learn-identity",
            "learn-balance-transfers",
            "learn-transaction-fees",
            "learn-polkadot-host",
            "learn-treasury",
            "learn-registrar",
          ],
        },
        {
          type: "category",
          label: "Parachains",
          items: [
            "learn-parachains",
            "learn-parathreads",
            "learn-bridges",
            "learn-common-goods",
            "learn-auction",
            "learn-crowdloans",
            "learn-teleport",
          ],
        },
        {
          type: "category",
          label: "Advanced",
          items: [
            "learn-staking",
            "learn-proxies",
            "learn-availability",
            "learn-randomness",
            "learn-crosschain",
            "learn-spree",
            "learn-wasm",
            "learn-phragmen",
            "learn-simple-payouts",
          ],
        },
        {
          type: "category",
          label: "Cryptography",
          items: ["learn-cryptography", "learn-keys"],
        },
        {
          type: "category",
          label: "Polkadot Comparisons",
          items: [
            "learn-kusama-vs-polkadot",
            "learn-comparisons-ethereum-2",
            "learn-comparisons-cosmos",
            "learn-comparisons",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Build",
      items: [
        "build-index",
        {
          type: "category",
          label: "Development Guide",
          items: [
            "build-build-with-polkadot",
            "build-pdk",
            "learn-implementers-guide",
            "build-cumulus",
            "build-parachains-rococo",
            "build-smart-contracts",
            "build-oracle",
            "build-ss58-registry",
            "build-wallets",
          ],
        },
        {
          type: "category",
          label: "Integration Guide",
          items: [
            "build-integration",
            "build-protocol-info",
            "build-integrate-assets",
            "build-node-management",
            "build-node-interaction",
            "build-transaction-construction",
          ],
        },
        {
          type: "category",
          label: "Tools",
          items: ["build-tools-index"],
        },
        {
          type: "category",
          label: "Resources",
          items: ["build-hackathon"],
        },
      ],
    },
    {
      type: "category",
      label: "Maintain",
      items: [
        "maintain-index",
        "maintain-polkadot-parameters",
        {
          type: "category",
          label: "Nodes and Dapps",
          items: ["maintain-sync", "maintain-networks", "maintain-wss", "maintain-errors"],
        },
        {
          type: "category",
          label: "Nominator Guides",
          items: ["maintain-guides-how-to-nominate-polkadot", "maintain-guides-how-to-unbond"],
        },
        {
          type: "category",
          label: "Validator Guides",
          items: [
            "maintain-guides-how-to-validate-polkadot",
            "maintain-guides-validator-payout",
            "maintain-guides-how-to-systemd",
            "maintain-guides-secure-validator",
            "maintain-guides-how-to-use-polkadot-validator",
            "maintain-guides-how-to-upgrade",
            "maintain-guides-how-to-monitor-your-node",
            "maintain-guides-how-to-chill",
            "maintain-guides-how-to-stop-validating",
          ],
        },
        {
          type: "category",
          label: "Governance Guides",
          items: [
            "maintain-guides-democracy",
            "maintain-guides-how-to-join-council",
            "maintain-guides-how-to-vote-councillor",
          ],
        },
      ],
    },
  ],
};
