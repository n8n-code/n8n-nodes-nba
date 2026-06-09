import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "GET Allstarballotpredictor",
					"value": "GET Allstarballotpredictor",
					"action": "GET Allstarballotpredictor",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/allstarballotpredictor"
						}
					}
				},
				{
					"name": "GET Boxscoreadvancedv 2",
					"value": "GET Boxscoreadvancedv 2",
					"action": "GET Boxscoreadvancedv 2",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/boxscoreadvancedv2"
						}
					}
				},
				{
					"name": "GET Boxscorefourfactorsv 2",
					"value": "GET Boxscorefourfactorsv 2",
					"action": "GET Boxscorefourfactorsv 2",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/boxscorefourfactorsv2"
						}
					}
				},
				{
					"name": "GET Boxscoremiscv 2",
					"value": "GET Boxscoremiscv 2",
					"action": "GET Boxscoremiscv 2",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/boxscoremiscv2"
						}
					}
				},
				{
					"name": "GET Boxscoreplayertrackv 2",
					"value": "GET Boxscoreplayertrackv 2",
					"action": "GET Boxscoreplayertrackv 2",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/boxscoreplayertrackv2"
						}
					}
				},
				{
					"name": "GET Boxscorescoringv 2",
					"value": "GET Boxscorescoringv 2",
					"action": "GET Boxscorescoringv 2",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/boxscorescoringv2"
						}
					}
				},
				{
					"name": "GET Boxscoresummaryv 2",
					"value": "GET Boxscoresummaryv 2",
					"action": "GET Boxscoresummaryv 2",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/boxscoresummaryv2"
						}
					}
				},
				{
					"name": "GET Boxscoretraditionalv 2",
					"value": "GET Boxscoretraditionalv 2",
					"action": "GET Boxscoretraditionalv 2",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/boxscoretraditionalv2"
						}
					}
				},
				{
					"name": "GET Boxscoreusagev 2",
					"value": "GET Boxscoreusagev 2",
					"action": "GET Boxscoreusagev 2",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/boxscoreusagev2"
						}
					}
				},
				{
					"name": "GET Common Team Years",
					"value": "GET Common Team Years",
					"action": "GET Common Team Years",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/commonTeamYears"
						}
					}
				},
				{
					"name": "GET Commonallplayers",
					"value": "GET Commonallplayers",
					"action": "GET Commonallplayers",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/commonallplayers"
						}
					}
				},
				{
					"name": "GET Commonplayerinfo",
					"value": "GET Commonplayerinfo",
					"action": "GET Commonplayerinfo",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/commonplayerinfo"
						}
					}
				},
				{
					"name": "GET Commonplayoffseries",
					"value": "GET Commonplayoffseries",
					"action": "GET Commonplayoffseries",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/commonplayoffseries"
						}
					}
				},
				{
					"name": "GET Commonteamroster",
					"value": "GET Commonteamroster",
					"action": "GET Commonteamroster",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/commonteamroster"
						}
					}
				},
				{
					"name": "GET Draftcombinedrillresults",
					"value": "GET Draftcombinedrillresults",
					"action": "GET Draftcombinedrillresults",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/draftcombinedrillresults"
						}
					}
				},
				{
					"name": "GET Draftcombinenonstationaryshooting",
					"value": "GET Draftcombinenonstationaryshooting",
					"action": "GET Draftcombinenonstationaryshooting",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/draftcombinenonstationaryshooting"
						}
					}
				},
				{
					"name": "GET Draftcombineplayeranthro",
					"value": "GET Draftcombineplayeranthro",
					"action": "GET Draftcombineplayeranthro",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/draftcombineplayeranthro"
						}
					}
				},
				{
					"name": "GET Draftcombinespotshooting",
					"value": "GET Draftcombinespotshooting",
					"action": "GET Draftcombinespotshooting",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/draftcombinespotshooting"
						}
					}
				},
				{
					"name": "GET Draftcombinestats",
					"value": "GET Draftcombinestats",
					"action": "GET Draftcombinestats",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/draftcombinestats"
						}
					}
				},
				{
					"name": "GET Drafthistory",
					"value": "GET Drafthistory",
					"action": "GET Drafthistory",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/drafthistory"
						}
					}
				},
				{
					"name": "GET Franchisehistory",
					"value": "GET Franchisehistory",
					"action": "GET Franchisehistory",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/franchisehistory"
						}
					}
				},
				{
					"name": "GET Homepageleaders",
					"value": "GET Homepageleaders",
					"action": "GET Homepageleaders",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/homepageleaders"
						}
					}
				},
				{
					"name": "GET Homepagev 2",
					"value": "GET Homepagev 2",
					"action": "GET Homepagev 2",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/homepagev2"
						}
					}
				},
				{
					"name": "GET Leaderstiles",
					"value": "GET Leaderstiles",
					"action": "GET Leaderstiles",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/leaderstiles"
						}
					}
				},
				{
					"name": "GET Leaguedashlineups",
					"value": "GET Leaguedashlineups",
					"action": "GET Leaguedashlineups",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/leaguedashlineups"
						}
					}
				},
				{
					"name": "GET Leaguedashplayerbiostats",
					"value": "GET Leaguedashplayerbiostats",
					"action": "GET Leaguedashplayerbiostats",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/leaguedashplayerbiostats"
						}
					}
				},
				{
					"name": "GET Leaguedashplayerclutch",
					"value": "GET Leaguedashplayerclutch",
					"action": "GET Leaguedashplayerclutch",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/leaguedashplayerclutch"
						}
					}
				},
				{
					"name": "GET Leaguedashplayerptshot",
					"value": "GET Leaguedashplayerptshot",
					"action": "GET Leaguedashplayerptshot",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/leaguedashplayerptshot"
						}
					}
				},
				{
					"name": "GET Leaguedashplayershotlocations",
					"value": "GET Leaguedashplayershotlocations",
					"action": "GET Leaguedashplayershotlocations",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/leaguedashplayershotlocations"
						}
					}
				},
				{
					"name": "GET Leaguedashplayerstats",
					"value": "GET Leaguedashplayerstats",
					"action": "GET Leaguedashplayerstats",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/leaguedashplayerstats"
						}
					}
				},
				{
					"name": "GET Leaguedashptdefend",
					"value": "GET Leaguedashptdefend",
					"action": "GET Leaguedashptdefend",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/leaguedashptdefend"
						}
					}
				},
				{
					"name": "GET Leaguedashptteamdefend",
					"value": "GET Leaguedashptteamdefend",
					"action": "GET Leaguedashptteamdefend",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/leaguedashptteamdefend"
						}
					}
				},
				{
					"name": "GET Leaguedashteamclutch",
					"value": "GET Leaguedashteamclutch",
					"action": "GET Leaguedashteamclutch",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/leaguedashteamclutch"
						}
					}
				},
				{
					"name": "GET Leaguedashteamptshot",
					"value": "GET Leaguedashteamptshot",
					"action": "GET Leaguedashteamptshot",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/leaguedashteamptshot"
						}
					}
				},
				{
					"name": "GET Leaguedashteamshotlocations",
					"value": "GET Leaguedashteamshotlocations",
					"action": "GET Leaguedashteamshotlocations",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/leaguedashteamshotlocations"
						}
					}
				},
				{
					"name": "GET Leaguedashteamstats",
					"value": "GET Leaguedashteamstats",
					"action": "GET Leaguedashteamstats",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/leaguedashteamstats"
						}
					}
				},
				{
					"name": "GET Leagueleaders",
					"value": "GET Leagueleaders",
					"action": "GET Leagueleaders",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/leagueleaders"
						}
					}
				},
				{
					"name": "GET Playbyplay",
					"value": "GET Playbyplay",
					"action": "GET Playbyplay",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/playbyplay"
						}
					}
				},
				{
					"name": "GET Playbyplayv 2",
					"value": "GET Playbyplayv 2",
					"action": "GET Playbyplayv 2",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/playbyplayv2"
						}
					}
				},
				{
					"name": "GET Playercareerstats",
					"value": "GET Playercareerstats",
					"action": "GET Playercareerstats",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/playercareerstats"
						}
					}
				},
				{
					"name": "GET Playercompare",
					"value": "GET Playercompare",
					"action": "GET Playercompare",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/playercompare"
						}
					}
				},
				{
					"name": "GET Playerdashboardbyclutch",
					"value": "GET Playerdashboardbyclutch",
					"action": "GET Playerdashboardbyclutch",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/playerdashboardbyclutch"
						}
					}
				},
				{
					"name": "GET Playerdashboardbygamesplits",
					"value": "GET Playerdashboardbygamesplits",
					"action": "GET Playerdashboardbygamesplits",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/playerdashboardbygamesplits"
						}
					}
				},
				{
					"name": "GET Playerdashboardbygeneralsplits",
					"value": "GET Playerdashboardbygeneralsplits",
					"action": "GET Playerdashboardbygeneralsplits",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/playerdashboardbygeneralsplits"
						}
					}
				},
				{
					"name": "GET Playerdashboardbylastngames",
					"value": "GET Playerdashboardbylastngames",
					"action": "GET Playerdashboardbylastngames",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/playerdashboardbylastngames"
						}
					}
				},
				{
					"name": "GET Playerdashboardbyopponent",
					"value": "GET Playerdashboardbyopponent",
					"action": "GET Playerdashboardbyopponent",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/playerdashboardbyopponent"
						}
					}
				},
				{
					"name": "GET Playerdashboardbyshootingsplits",
					"value": "GET Playerdashboardbyshootingsplits",
					"action": "GET Playerdashboardbyshootingsplits",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/playerdashboardbyshootingsplits"
						}
					}
				},
				{
					"name": "GET Playerdashboardbyteamperformance",
					"value": "GET Playerdashboardbyteamperformance",
					"action": "GET Playerdashboardbyteamperformance",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/playerdashboardbyteamperformance"
						}
					}
				},
				{
					"name": "GET Playerdashboardbyyearoveryear",
					"value": "GET Playerdashboardbyyearoveryear",
					"action": "GET Playerdashboardbyyearoveryear",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/playerdashboardbyyearoveryear"
						}
					}
				},
				{
					"name": "GET Playerdashptpass",
					"value": "GET Playerdashptpass",
					"action": "GET Playerdashptpass",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/playerdashptpass"
						}
					}
				},
				{
					"name": "GET Playerdashptreb",
					"value": "GET Playerdashptreb",
					"action": "GET Playerdashptreb",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/playerdashptreb"
						}
					}
				},
				{
					"name": "GET Playerdashptshotdefend",
					"value": "GET Playerdashptshotdefend",
					"action": "GET Playerdashptshotdefend",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/playerdashptshotdefend"
						}
					}
				},
				{
					"name": "GET Playerdashptshots",
					"value": "GET Playerdashptshots",
					"action": "GET Playerdashptshots",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/playerdashptshots"
						}
					}
				},
				{
					"name": "GET Playergamelog",
					"value": "GET Playergamelog",
					"action": "GET Playergamelog",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/playergamelog"
						}
					}
				},
				{
					"name": "GET Playerprofile",
					"value": "GET Playerprofile",
					"action": "GET Playerprofile",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/playerprofile"
						}
					}
				},
				{
					"name": "GET Playerprofilev 2",
					"value": "GET Playerprofilev 2",
					"action": "GET Playerprofilev 2",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/playerprofilev2"
						}
					}
				},
				{
					"name": "GET Playersvsplayers",
					"value": "GET Playersvsplayers",
					"action": "GET Playersvsplayers",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/playersvsplayers"
						}
					}
				},
				{
					"name": "GET Playervsplayer",
					"value": "GET Playervsplayer",
					"action": "GET Playervsplayer",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/playervsplayer"
						}
					}
				},
				{
					"name": "GET Playoffpicture",
					"value": "GET Playoffpicture",
					"action": "GET Playoffpicture",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/playoffpicture"
						}
					}
				},
				{
					"name": "GET Scoreboard",
					"value": "GET Scoreboard",
					"action": "GET Scoreboard",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/scoreboard"
						}
					}
				},
				{
					"name": "GET Scoreboard V 2",
					"value": "GET Scoreboard V 2",
					"action": "GET Scoreboard V 2",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/scoreboardV2"
						}
					}
				},
				{
					"name": "GET Shotchartdetail",
					"value": "GET Shotchartdetail",
					"action": "GET Shotchartdetail",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shotchartdetail"
						}
					}
				},
				{
					"name": "GET Shotchartlineupdetail",
					"value": "GET Shotchartlineupdetail",
					"action": "GET Shotchartlineupdetail",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/shotchartlineupdetail"
						}
					}
				},
				{
					"name": "GET Teamdashboardbyclutch",
					"value": "GET Teamdashboardbyclutch",
					"action": "GET Teamdashboardbyclutch",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamdashboardbyclutch"
						}
					}
				},
				{
					"name": "GET Teamdashboardbygamesplits",
					"value": "GET Teamdashboardbygamesplits",
					"action": "GET Teamdashboardbygamesplits",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamdashboardbygamesplits"
						}
					}
				},
				{
					"name": "GET Teamdashboardbygeneralsplits",
					"value": "GET Teamdashboardbygeneralsplits",
					"action": "GET Teamdashboardbygeneralsplits",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamdashboardbygeneralsplits"
						}
					}
				},
				{
					"name": "GET Teamdashboardbylastngames",
					"value": "GET Teamdashboardbylastngames",
					"action": "GET Teamdashboardbylastngames",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamdashboardbylastngames"
						}
					}
				},
				{
					"name": "GET Teamdashboardbyopponent",
					"value": "GET Teamdashboardbyopponent",
					"action": "GET Teamdashboardbyopponent",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamdashboardbyopponent"
						}
					}
				},
				{
					"name": "GET Teamdashboardbyshootingsplits",
					"value": "GET Teamdashboardbyshootingsplits",
					"action": "GET Teamdashboardbyshootingsplits",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamdashboardbyshootingsplits"
						}
					}
				},
				{
					"name": "GET Teamdashboardbyteamperformance",
					"value": "GET Teamdashboardbyteamperformance",
					"action": "GET Teamdashboardbyteamperformance",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamdashboardbyteamperformance"
						}
					}
				},
				{
					"name": "GET Teamdashboardbyyearoveryear",
					"value": "GET Teamdashboardbyyearoveryear",
					"action": "GET Teamdashboardbyyearoveryear",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamdashboardbyyearoveryear"
						}
					}
				},
				{
					"name": "GET Teamdashlineups",
					"value": "GET Teamdashlineups",
					"action": "GET Teamdashlineups",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamdashlineups"
						}
					}
				},
				{
					"name": "GET Teamdashptpass",
					"value": "GET Teamdashptpass",
					"action": "GET Teamdashptpass",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamdashptpass"
						}
					}
				},
				{
					"name": "GET Teamdashptreb",
					"value": "GET Teamdashptreb",
					"action": "GET Teamdashptreb",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamdashptreb"
						}
					}
				},
				{
					"name": "GET Teamdashptshots",
					"value": "GET Teamdashptshots",
					"action": "GET Teamdashptshots",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamdashptshots"
						}
					}
				},
				{
					"name": "GET Teamgamelog",
					"value": "GET Teamgamelog",
					"action": "GET Teamgamelog",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamgamelog"
						}
					}
				},
				{
					"name": "GET Teaminfocommon",
					"value": "GET Teaminfocommon",
					"action": "GET Teaminfocommon",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teaminfocommon"
						}
					}
				},
				{
					"name": "GET Teamplayerdashboard",
					"value": "GET Teamplayerdashboard",
					"action": "GET Teamplayerdashboard",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamplayerdashboard"
						}
					}
				},
				{
					"name": "GET Teamplayeronoffdetails",
					"value": "GET Teamplayeronoffdetails",
					"action": "GET Teamplayeronoffdetails",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamplayeronoffdetails"
						}
					}
				},
				{
					"name": "GET Teamplayeronoffsummary",
					"value": "GET Teamplayeronoffsummary",
					"action": "GET Teamplayeronoffsummary",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamplayeronoffsummary"
						}
					}
				},
				{
					"name": "GET Teamvsplayer",
					"value": "GET Teamvsplayer",
					"action": "GET Teamvsplayer",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamvsplayer"
						}
					}
				},
				{
					"name": "GET Teamyearbyyearstats",
					"value": "GET Teamyearbyyearstats",
					"action": "GET Teamyearbyyearstats",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/teamyearbyyearstats"
						}
					}
				},
				{
					"name": "GET Video Status",
					"value": "GET Video Status",
					"action": "GET Video Status",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/videoStatus"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /allstarballotpredictor",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Allstarballotpredictor"
					]
				}
			}
		},
		{
			"displayName": "GET /boxscoreadvancedv2",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Boxscoreadvancedv 2"
					]
				}
			}
		},
		{
			"displayName": "GET /boxscorefourfactorsv2",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Boxscorefourfactorsv 2"
					]
				}
			}
		},
		{
			"displayName": "GET /boxscoremiscv2",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Boxscoremiscv 2"
					]
				}
			}
		},
		{
			"displayName": "GET /boxscoreplayertrackv2",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Boxscoreplayertrackv 2"
					]
				}
			}
		},
		{
			"displayName": "GET /boxscorescoringv2",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Boxscorescoringv 2"
					]
				}
			}
		},
		{
			"displayName": "GET /boxscoresummaryv2",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Boxscoresummaryv 2"
					]
				}
			}
		},
		{
			"displayName": "GET /boxscoretraditionalv2",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Boxscoretraditionalv 2"
					]
				}
			}
		},
		{
			"displayName": "GET /boxscoreusagev2",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Boxscoreusagev 2"
					]
				}
			}
		},
		{
			"displayName": "GET /commonTeamYears",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Common Team Years"
					]
				}
			}
		},
		{
			"displayName": "GET /commonallplayers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Commonallplayers"
					]
				}
			}
		},
		{
			"displayName": "GET /commonplayerinfo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Commonplayerinfo"
					]
				}
			}
		},
		{
			"displayName": "GET /commonplayoffseries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Commonplayoffseries"
					]
				}
			}
		},
		{
			"displayName": "GET /commonteamroster",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Commonteamroster"
					]
				}
			}
		},
		{
			"displayName": "GET /draftcombinedrillresults",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Draftcombinedrillresults"
					]
				}
			}
		},
		{
			"displayName": "GET /draftcombinenonstationaryshooting",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Draftcombinenonstationaryshooting"
					]
				}
			}
		},
		{
			"displayName": "GET /draftcombineplayeranthro",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Draftcombineplayeranthro"
					]
				}
			}
		},
		{
			"displayName": "GET /draftcombinespotshooting",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Draftcombinespotshooting"
					]
				}
			}
		},
		{
			"displayName": "GET /draftcombinestats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Draftcombinestats"
					]
				}
			}
		},
		{
			"displayName": "GET /drafthistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Drafthistory"
					]
				}
			}
		},
		{
			"displayName": "GET /franchisehistory",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Franchisehistory"
					]
				}
			}
		},
		{
			"displayName": "GET /homepageleaders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Homepageleaders"
					]
				}
			}
		},
		{
			"displayName": "GET /homepagev2",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Homepagev 2"
					]
				}
			}
		},
		{
			"displayName": "GET /leaderstiles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Leaderstiles"
					]
				}
			}
		},
		{
			"displayName": "GET /leaguedashlineups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Leaguedashlineups"
					]
				}
			}
		},
		{
			"displayName": "GET /leaguedashplayerbiostats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Leaguedashplayerbiostats"
					]
				}
			}
		},
		{
			"displayName": "GET /leaguedashplayerclutch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Leaguedashplayerclutch"
					]
				}
			}
		},
		{
			"displayName": "GET /leaguedashplayerptshot",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Leaguedashplayerptshot"
					]
				}
			}
		},
		{
			"displayName": "GET /leaguedashplayershotlocations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Leaguedashplayershotlocations"
					]
				}
			}
		},
		{
			"displayName": "GET /leaguedashplayerstats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Leaguedashplayerstats"
					]
				}
			}
		},
		{
			"displayName": "GET /leaguedashptdefend",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Leaguedashptdefend"
					]
				}
			}
		},
		{
			"displayName": "GET /leaguedashptteamdefend",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Leaguedashptteamdefend"
					]
				}
			}
		},
		{
			"displayName": "GET /leaguedashteamclutch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Leaguedashteamclutch"
					]
				}
			}
		},
		{
			"displayName": "GET /leaguedashteamptshot",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Leaguedashteamptshot"
					]
				}
			}
		},
		{
			"displayName": "GET /leaguedashteamshotlocations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Leaguedashteamshotlocations"
					]
				}
			}
		},
		{
			"displayName": "GET /leaguedashteamstats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Leaguedashteamstats"
					]
				}
			}
		},
		{
			"displayName": "GET /leagueleaders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Leagueleaders"
					]
				}
			}
		},
		{
			"displayName": "GET /playbyplay",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Playbyplay"
					]
				}
			}
		},
		{
			"displayName": "GET /playbyplayv2",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Playbyplayv 2"
					]
				}
			}
		},
		{
			"displayName": "GET /playercareerstats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Playercareerstats"
					]
				}
			}
		},
		{
			"displayName": "GET /playercompare",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Playercompare"
					]
				}
			}
		},
		{
			"displayName": "GET /playerdashboardbyclutch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Playerdashboardbyclutch"
					]
				}
			}
		},
		{
			"displayName": "GET /playerdashboardbygamesplits",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Playerdashboardbygamesplits"
					]
				}
			}
		},
		{
			"displayName": "GET /playerdashboardbygeneralsplits",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Playerdashboardbygeneralsplits"
					]
				}
			}
		},
		{
			"displayName": "GET /playerdashboardbylastngames",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Playerdashboardbylastngames"
					]
				}
			}
		},
		{
			"displayName": "GET /playerdashboardbyopponent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Playerdashboardbyopponent"
					]
				}
			}
		},
		{
			"displayName": "GET /playerdashboardbyshootingsplits",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Playerdashboardbyshootingsplits"
					]
				}
			}
		},
		{
			"displayName": "GET /playerdashboardbyteamperformance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Playerdashboardbyteamperformance"
					]
				}
			}
		},
		{
			"displayName": "GET /playerdashboardbyyearoveryear",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Playerdashboardbyyearoveryear"
					]
				}
			}
		},
		{
			"displayName": "GET /playerdashptpass",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Playerdashptpass"
					]
				}
			}
		},
		{
			"displayName": "GET /playerdashptreb",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Playerdashptreb"
					]
				}
			}
		},
		{
			"displayName": "GET /playerdashptshotdefend",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Playerdashptshotdefend"
					]
				}
			}
		},
		{
			"displayName": "GET /playerdashptshots",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Playerdashptshots"
					]
				}
			}
		},
		{
			"displayName": "GET /playergamelog",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Playergamelog"
					]
				}
			}
		},
		{
			"displayName": "GET /playerprofile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Playerprofile"
					]
				}
			}
		},
		{
			"displayName": "GET /playerprofilev2",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Playerprofilev 2"
					]
				}
			}
		},
		{
			"displayName": "GET /playersvsplayers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Playersvsplayers"
					]
				}
			}
		},
		{
			"displayName": "GET /playervsplayer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Playervsplayer"
					]
				}
			}
		},
		{
			"displayName": "GET /playoffpicture",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Playoffpicture"
					]
				}
			}
		},
		{
			"displayName": "GET /scoreboard",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Scoreboard"
					]
				}
			}
		},
		{
			"displayName": "GET /scoreboardV2",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Scoreboard V 2"
					]
				}
			}
		},
		{
			"displayName": "GET /shotchartdetail",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Shotchartdetail"
					]
				}
			}
		},
		{
			"displayName": "GET /shotchartlineupdetail",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Shotchartlineupdetail"
					]
				}
			}
		},
		{
			"displayName": "GET /teamdashboardbyclutch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Teamdashboardbyclutch"
					]
				}
			}
		},
		{
			"displayName": "GET /teamdashboardbygamesplits",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Teamdashboardbygamesplits"
					]
				}
			}
		},
		{
			"displayName": "GET /teamdashboardbygeneralsplits",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Teamdashboardbygeneralsplits"
					]
				}
			}
		},
		{
			"displayName": "GET /teamdashboardbylastngames",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Teamdashboardbylastngames"
					]
				}
			}
		},
		{
			"displayName": "GET /teamdashboardbyopponent",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Teamdashboardbyopponent"
					]
				}
			}
		},
		{
			"displayName": "GET /teamdashboardbyshootingsplits",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Teamdashboardbyshootingsplits"
					]
				}
			}
		},
		{
			"displayName": "GET /teamdashboardbyteamperformance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Teamdashboardbyteamperformance"
					]
				}
			}
		},
		{
			"displayName": "GET /teamdashboardbyyearoveryear",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Teamdashboardbyyearoveryear"
					]
				}
			}
		},
		{
			"displayName": "GET /teamdashlineups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Teamdashlineups"
					]
				}
			}
		},
		{
			"displayName": "GET /teamdashptpass",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Teamdashptpass"
					]
				}
			}
		},
		{
			"displayName": "GET /teamdashptreb",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Teamdashptreb"
					]
				}
			}
		},
		{
			"displayName": "GET /teamdashptshots",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Teamdashptshots"
					]
				}
			}
		},
		{
			"displayName": "GET /teamgamelog",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Teamgamelog"
					]
				}
			}
		},
		{
			"displayName": "GET /teaminfocommon",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Teaminfocommon"
					]
				}
			}
		},
		{
			"displayName": "GET /teamplayerdashboard",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Teamplayerdashboard"
					]
				}
			}
		},
		{
			"displayName": "GET /teamplayeronoffdetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Teamplayeronoffdetails"
					]
				}
			}
		},
		{
			"displayName": "GET /teamplayeronoffsummary",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Teamplayeronoffsummary"
					]
				}
			}
		},
		{
			"displayName": "GET /teamvsplayer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Teamvsplayer"
					]
				}
			}
		},
		{
			"displayName": "GET /teamyearbyyearstats",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Teamyearbyyearstats"
					]
				}
			}
		},
		{
			"displayName": "GET /videoStatus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Video Status"
					]
				}
			}
		},
];
