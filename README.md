# @n8n-dev/n8n-nodes-nba

![nba Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-nba.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-nba)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing nba API integrations by hand.**

Every time you connect n8n to nba, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to nba took 5 minutes, not half a day?**

This node gives you **1+ resources** out of the box: **Default**: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-nba
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-nba`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **nba API** → paste your API key
3. Drag the **nba** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

| Resource | Operations |
|----------|------------|
| Default | Get allstarballotpredictor, Get boxscoreadvancedv 2, Get boxscorefourfactorsv 2, Get boxscoremiscv 2, Get boxscoreplayertrackv 2, Get boxscorescoringv 2, Get boxscoresummaryv 2, Get boxscoretraditionalv 2, Get boxscoreusagev 2, Get common team years, Get commonallplayers, Get commonplayerinfo, Get commonplayoffseries, Get commonteamroster, Get draftcombinedrillresults, Get draftcombinenonstationaryshooting, Get draftcombineplayeranthro, Get draftcombinespotshooting, Get draftcombinestats, Get drafthistory, Get franchisehistory, Get homepageleaders, Get homepagev 2, Get leaderstiles, Get leaguedashlineups, Get leaguedashplayerbiostats, Get leaguedashplayerclutch, Get leaguedashplayerptshot, Get leaguedashplayershotlocations, Get leaguedashplayerstats, Get leaguedashptdefend, Get leaguedashptteamdefend, Get leaguedashteamclutch, Get leaguedashteamptshot, Get leaguedashteamshotlocations, Get leaguedashteamstats, Get leagueleaders, Get playbyplay, Get playbyplayv 2, Get playercareerstats, Get playercompare, Get playerdashboardbyclutch, Get playerdashboardbygamesplits, Get playerdashboardbygeneralsplits, Get playerdashboardbylastngames, Get playerdashboardbyopponent, Get playerdashboardbyshootingsplits, Get playerdashboardbyteamperformance, Get playerdashboardbyyearoveryear, Get playerdashptpass, Get playerdashptreb, Get playerdashptshotdefend, Get playerdashptshots, Get playergamelog, Get playerprofile, Get playerprofilev 2, Get playersvsplayers, Get playervsplayer, Get playoffpicture, Get scoreboard, Get scoreboard v 2, Get shotchartdetail, Get shotchartlineupdetail, Get teamdashboardbyclutch, Get teamdashboardbygamesplits, Get teamdashboardbygeneralsplits, Get teamdashboardbylastngames, Get teamdashboardbyopponent, Get teamdashboardbyshootingsplits, Get teamdashboardbyteamperformance, Get teamdashboardbyyearoveryear, Get teamdashlineups, Get teamdashptpass, Get teamdashptreb, Get teamdashptshots, Get teamgamelog, Get teaminfocommon, Get teamplayerdashboard, Get teamplayeronoffdetails, Get teamplayeronoffsummary, Get teamvsplayer, Get teamyearbyyearstats, Get video status |

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from nba docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official nba OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **nba** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the nba API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
