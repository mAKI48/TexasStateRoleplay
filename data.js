// ============================================================
// TEXAS STATE ROLEPLAY - RULES DATA
// Easy to edit: Add, remove, or modify rules here.
// The website will automatically update.
// ============================================================

const siteConfig = {
  title: "Texas State Roleplay",
  subtitle: "Official Rules & Codes Reference",
  tagline: "Quality RP comes before winning.",
  values: ["Professional", "Fair", "Realistic", "Community Driven"]
};

// ============================================================
// IN-GAME RULES
// ============================================================
const inGameRules = [
  {
    id: "ig-1",
    number: 1,
    title: "Stay In Character",
    short: "Remain IC during active RP.",
    meaning: "You must stay in character (IC) at all times while participating in active roleplay. Breaking character by speaking out-of-character (OOC) during scenes disrupts immersion for everyone.",
    howToFollow: "Use /me and /do for actions. Keep all communication in-character unless using designated OOC channels or commands. If you need to say something OOC, use the appropriate OOC chat or pause the RP politely.",
    whenApplies: "During any active RP scenario, pursuits, interactions, or scenes on the server.",
    examplesAllowed: [
      "Using /me to describe actions realistically",
      "Speaking as your character would",
      "Using OOC only when necessary and clearly marked"
    ],
    examplesNotAllowed: [
      "Suddenly talking about real-life topics mid-scene",
      "Using OOC information to influence IC decisions without proper channels",
      "Breaking immersion by joking OOC during serious RP"
    ],
    exceptions: "Brief OOC clarifications that do not break the scene are sometimes acceptable if marked clearly (e.g., ((OOC: AFK 2 min))). Staff may grant temporary OOC if needed."
  },
  {
    id: "ig-2",
    number: 2,
    title: "FearRP",
    short: "Value your life and react realistically to danger.",
    meaning: "Fear Roleplay means your character must value their life. When faced with realistic threats (guns, knives, superior numbers, etc.), you must react as a normal person would — with fear, compliance, or logical attempts to escape, not bravado.",
    howToFollow: "If a gun is pointed at you at close range, comply or attempt a realistic escape. Do not laugh it off, pull your own gun immediately without reason, or act invincible. Consider the situation from your character's perspective.",
    whenApplies: "Any situation involving threats to your character's life or safety — robberies, traffic stops that escalate, hostage situations, armed confrontations.",
    examplesAllowed: [
      "Putting hands up when ordered at gunpoint",
      "Attempting to slowly drive away if there is a realistic opportunity",
      "Negotiating or complying during a robbery"
    ],
    examplesNotAllowed: [
      "Ignoring a gun pointed at your head and continuing to fight",
      "Pulling a weapon when clearly outnumbered and covered",
      "Acting like your character has no fear of death"
    ],
    exceptions: "If you have a clear and realistic tactical advantage, or if the threat is not credible (e.g., someone far away yelling threats), FearRP may not fully apply. Staff discretion applies in gray areas."
  },
  {
    id: "ig-3",
    number: 3,
    title: "NLR (New Life Rule)",
    short: "After dying/respawning, do not return to the previous scene or use previous-life information.",
    meaning: "When your character dies and you respawn, that life is over. You cannot return to the same scene, seek revenge based on the previous life, or use any information your character learned in that previous life.",
    howToFollow: "After death, treat it as a new life. Do not go back to the location of your death for a reasonable amount of time. Forget everything that happened in the previous life regarding that specific incident.",
    whenApplies: "After any character death that results in respawn.",
    examplesAllowed: [
      "Respawning at hospital and starting a new scenario elsewhere",
      "Not knowing who killed you or why from the previous life"
    ],
    examplesNotAllowed: [
      "Immediately returning to the scene of your death to attack the person who killed you",
      "Using knowledge from your previous life (e.g., where evidence was hidden) in the new life",
      "Calling friends to continue the fight based on previous-life events"
    ],
    exceptions: "Some departments may have specific medical RP that allows limited memory. Check with staff. Very short deaths with immediate revival by EMS may have different handling — ask staff."
  },
  {
    id: "ig-4",
    number: 4,
    title: "FailRP",
    short: "Unrealistic actions that ruin RP are prohibited.",
    meaning: "FailRP is any action that is unrealistic, breaks immersion, or ruins the roleplay experience for others. This includes impossible physics, ignoring injuries, or acting in ways no real person would.",
    howToFollow: "Always ask yourself: 'Would this make sense in real life or a serious RP setting?' If the answer is no, don't do it. Roleplay injuries, limitations, and realistic consequences.",
    whenApplies: "At all times during RP.",
    examplesAllowed: [
      "Roleplaying being wounded after being shot",
      "Taking time to search a vehicle properly",
      "Driving at realistic speeds for the situation"
    ],
    examplesNotAllowed: [
      "Running at full speed after being shot multiple times",
      "Climbing impossible surfaces or performing superhuman feats",
      "Ignoring obvious RP cues from other players"
    ],
    exceptions: "Minor cinematic liberties that enhance RP without breaking immersion may be allowed at staff discretion."
  },
  {
    id: "ig-5",
    number: 5,
    title: "Metagaming",
    short: "Do not use OOC information for IC decisions.",
    meaning: "Metagaming is using information your character would not know (from Discord, streams, OOC chat, previous lives, etc.) to make in-character decisions.",
    howToFollow: "Only use information your character has learned through IC means (seeing it, hearing it, being told by another character, etc.). Separate what you know as a player from what your character knows.",
    whenApplies: "Always. Especially relevant with Discord, streams, and side chats.",
    examplesAllowed: [
      "Acting on information given to your character by another character",
      "Investigating based on what you saw or heard IC"
    ],
    examplesNotAllowed: [
      "Going to a location because you saw it on a stream or Discord",
      "Knowing someone's criminal history because you read it OOC",
      "Using voice chat OOC info during an active scene"
    ],
    exceptions: "None. Metagaming is strictly prohibited. If you accidentally receive OOC info, do not act on it."
  },
  {
    id: "ig-6",
    number: 6,
    title: "Powergaming",
    short: "Do not force actions or outcomes onto another player without giving them a chance to respond.",
    meaning: "Powergaming is forcing an action, outcome, or state onto another player without allowing them a fair chance to roleplay a response or counter it.",
    howToFollow: "Describe your actions and give the other player time and opportunity to react. Use /me properly and wait for responses in confrontational situations.",
    whenApplies: "Any interaction involving other players, especially combat, arrests, robberies, and negotiations.",
    examplesAllowed: [
      "\"/me points the gun at John's head and demands he put his hands up\" — then waiting for response",
      "Giving clear commands and allowing compliance time"
    ],
    examplesNotAllowed: [
      "\"/me shoots and kills John instantly\" without giving reaction time",
      "Forcing someone into cuffs without interaction",
      "Declaring that someone is knocked out without RP"
    ],
    exceptions: "In some high-intensity situations with clear prior RP, faster escalation may be acceptable. Staff will judge context."
  },
  {
    id: "ig-7",
    number: 7,
    title: "Combat Logging",
    short: "Do not leave to avoid an active RP situation, arrest, pursuit, robbery, or death.",
    meaning: "Combat logging is disconnecting, crashing intentionally, or leaving the server to escape an ongoing RP situation that is not in your favor.",
    howToFollow: "Stay connected and finish the RP. If you have a real emergency, notify staff or the other party if possible. Returning later does not erase the previous situation.",
    whenApplies: "During any active RP: chases, shootouts, arrests, robberies, interrogations, etc.",
    examplesAllowed: [
      "Finishing the scene even if you will be arrested",
      "Notifying others if you must leave for a real-life reason"
    ],
    examplesNotAllowed: [
      "Alt-F4 during a pursuit to avoid being caught",
      "Disconnecting when surrounded by police",
      "Leaving mid-robbery when things go wrong"
    ],
    exceptions: "Genuine connection issues or emergencies. Provide proof to staff if accused. Repeated 'disconnects' will be treated as combat logging."
  },
  {
    id: "ig-8",
    number: 8,
    title: "Cop Baiting",
    short: "Do not intentionally provoke police just to start a chase.",
    meaning: "Cop baiting is deliberately committing minor or obvious crimes in front of police solely to force a pursuit or interaction for entertainment, rather than for legitimate RP reasons.",
    howToFollow: "Engage with police through natural RP. Commit crimes with purpose and realism, not just to get a reaction from LEOs.",
    whenApplies: "Whenever interacting with or near law enforcement.",
    examplesAllowed: [
      "Committing a crime as part of a planned criminal RP",
      "Reacting to a traffic stop realistically"
    ],
    examplesNotAllowed: [
      "Speeding past a parked police car repeatedly just to get chased",
      "Flipping off officers and running for no reason",
      "Committing crimes only when officers are watching for the sake of a chase"
    ],
    exceptions: "Natural criminal activity that happens to be noticed by police is fine. Intent matters."
  },
  {
    id: "ig-9",
    number: 9,
    title: "RDM (Random Deathmatch)",
    short: "Do not randomly kill or attack players without a legitimate RP reason.",
    meaning: "RDM is killing or attacking another player without any prior roleplay reason, initiation, or justification.",
    howToFollow: "Always have a clear RP reason before using lethal force. Initiation and context are required.",
    whenApplies: "All combat situations.",
    examplesAllowed: [
      "Shooting someone who just robbed you after proper initiation",
      "Defending yourself when attacked",
      "Gang conflicts with prior RP context"
    ],
    examplesNotAllowed: [
      "Shooting a random player walking down the street",
      "Killing someone because you felt like it",
      "Attacking without any verbal or clear non-verbal initiation"
    ],
    exceptions: "Self-defense when clearly under attack. Staff will review context."
  },
  {
    id: "ig-10",
    number: 10,
    title: "VDM (Vehicle Deathmatch)",
    short: "Do not intentionally use a vehicle as a weapon without a legitimate RP reason.",
    meaning: "VDM is using a vehicle to intentionally run over, ram, or kill players or other vehicles without proper RP justification.",
    howToFollow: "Vehicles are for transportation. Using them as weapons requires the same justification as any other lethal force.",
    whenApplies: "Any time you are driving near other players or vehicles.",
    examplesAllowed: [
      "Ramming a vehicle during a high-speed pursuit as a last resort with justification",
      "Accidental collisions that are roleplayed"
    ],
    examplesNotAllowed: [
      "Running over players for fun",
      "Using a car to kill someone with no prior RP",
      "Repeatedly ramming the same person"
    ],
    exceptions: "Genuine accidents. Intentional use requires strong RP reason."
  },
  {
    id: "ig-11",
    number: 11,
    title: "Revenge Killing",
    short: "Do not return to attack someone because of a previous life.",
    meaning: "After dying, you cannot come back in a new life specifically to get revenge on the person who killed you or was involved in your previous death.",
    howToFollow: "Respect NLR. Start fresh. Any conflict must develop anew through fresh RP.",
    whenApplies: "After any death and respawn.",
    examplesAllowed: [
      "Encountering the same person later through natural RP and developing new conflict"
    ],
    examplesNotAllowed: [
      "Respawning and immediately hunting down the person who killed you",
      "Calling friends to attack someone based on your previous death"
    ],
    exceptions: "None. This is strictly enforced alongside NLR."
  },
  {
    id: "ig-12",
    number: 12,
    title: "Random Shooting",
    short: "Do not randomly shoot players, vehicles, or buildings.",
    meaning: "Firing weapons without a legitimate roleplay reason at people, cars, or structures is prohibited.",
    howToFollow: "Only discharge firearms when there is a clear RP justification (self-defense, crime in progress, etc.).",
    whenApplies: "Whenever you are armed.",
    examplesAllowed: [
      "Returning fire when shot at",
      "Shooting during a justified armed robbery or defense"
    ],
    examplesNotAllowed: [
      "Shooting into the air or at random cars for no reason",
      "Spraying buildings or groups of people without initiation"
    ],
    exceptions: "Training scenarios or range use if the server supports it and it is properly roleplayed."
  },
  {
    id: "ig-13",
    number: 13,
    title: "No Instant Escalation",
    short: "Do not immediately turn normal interactions into gunfights without a valid RP reason.",
    meaning: "Not every interaction should instantly become a shootout. Escalation must be earned through roleplay.",
    howToFollow: "Start with verbal interaction, commands, or lower levels of force. Only escalate when the situation realistically calls for it.",
    whenApplies: "Traffic stops, civilian interactions, robberies, negotiations, etc.",
    examplesAllowed: [
      "Giving verbal commands before drawing a weapon",
      "Attempting to de-escalate when possible"
    ],
    examplesNotAllowed: [
      "Pulling a gun the moment a traffic stop begins with no resistance",
      "Shooting someone for minor verbal disagreement"
    ],
    exceptions: "Situations that are already high-risk (active shooter, armed robbery in progress) may justify faster escalation."
  },
  {
    id: "ig-14",
    number: 14,
    title: "NO CUFF RUSHING",
    short: "Police may NOT run up and instantly cuff a player. Officers must establish an interaction, give reasonable commands, and allow a fair chance to comply.",
    meaning: "Officers cannot simply sprint up to a player and cuff them without any prior interaction or opportunity to comply.",
    howToFollow: "Announce presence, give clear commands (\"Hands up\", \"Don't move\"), allow reasonable time to comply, then proceed with arrest RP if needed.",
    whenApplies: "All arrests and detentions by law enforcement.",
    examplesAllowed: [
      "\"Step out of the vehicle and put your hands on the hood\" followed by time to comply",
      "Proper verbal commands before physical contact"
    ],
    examplesNotAllowed: [
      "Running up and cuffing someone with zero dialogue",
      "Cuffing a player who is clearly complying without any interaction"
    ],
    exceptions: "Active fight in progress, player actively resisting or fleeing, or immediate threat to officer safety may allow faster action. Context matters."
  },
  {
    id: "ig-15",
    number: 15,
    title: "NO AUTO JAILING",
    short: "Police may NOT automatically jail someone because they were stopped, caught, reported, or cuffed. There must be a legitimate reason for arrest and proper arrest RP.",
    meaning: "Being stopped, reported, or even cuffed does not automatically equal jail. There must be probable cause and proper process.",
    howToFollow: "Investigate, gather evidence or statements, explain charges, and roleplay the arrest process fully before jailing.",
    whenApplies: "All potential arrests.",
    examplesAllowed: [
      "Arresting after finding illegal items during a lawful search",
      "Arresting after a suspect admits to a crime or is caught in the act with evidence"
    ],
    examplesNotAllowed: [
      "Jailing someone solely because they were in a reported vehicle",
      "Skipping investigation and going straight to jail"
    ],
    exceptions: "Clear, on-view felonies with overwhelming evidence may move faster, but RP should still occur."
  },
  {
    id: "ig-16",
    number: 16,
    title: "Proper Arrest RP",
    short: "Explain the reason for arrest when practical and roleplay the arrest process.",
    meaning: "Arrests should feel like real arrests. Explain why the person is being arrested and go through the motions.",
    howToFollow: "State the charges or reason, place in cuffs properly, search if applicable, and transport with RP.",
    whenApplies: "Every arrest.",
    examplesAllowed: [
      "\"You are under arrest for armed robbery and assault on a peace officer.\"",
      "Reading rights when appropriate and roleplaying the process"
    ],
    examplesNotAllowed: [
      "Silent cuffing and jailing with no explanation",
      "Skipping all arrest RP"
    ],
    exceptions: "Extreme emergency situations where officer safety is immediately at risk."
  },
  {
    id: "ig-17",
    number: 17,
    title: "Reasonable Detainment",
    short: "Police need a legitimate RP reason to detain someone.",
    meaning: "You cannot detain players without reasonable suspicion or probable cause rooted in RP.",
    howToFollow: "Be able to articulate why you are detaining the person (matching description, suspicious activity, traffic violation, etc.).",
    whenApplies: "All stops and detentions.",
    examplesAllowed: [
      "Detaining a vehicle that matches a BOLO",
      "Stopping someone acting suspiciously near a recent crime scene"
    ],
    examplesNotAllowed: [
      "Detaining random players for no reason",
      "Holding someone indefinitely without investigation"
    ],
    exceptions: "None. Reasonable suspicion is required."
  },
  {
    id: "ig-18",
    number: 18,
    title: "Reasonable Searches",
    short: "Searches require a legitimate RP reason.",
    meaning: "You need probable cause, consent, or a warrant (or equivalent RP justification) to search a person or vehicle.",
    howToFollow: "Develop probable cause through investigation, obtain consent, or have other lawful RP grounds before searching.",
    whenApplies: "Any search of a person, vehicle, or property.",
    examplesAllowed: [
      "Searching a vehicle after smelling marijuana or seeing contraband in plain view",
      "Searching incident to a lawful arrest"
    ],
    examplesNotAllowed: [
      "Searching every vehicle you stop with no reason",
      "Forcing a search without any justification"
    ],
    exceptions: "Plain view doctrine, consent, and search incident to arrest are valid."
  },
  {
    id: "ig-19",
    number: 19,
    title: "Traffic Stops",
    short: "Explain the reason for the stop and give the driver an opportunity to comply.",
    meaning: "Traffic stops must be conducted professionally. State the reason and allow compliance.",
    howToFollow: "Activate lights, approach safely, greet, state the reason for the stop, request documents, and proceed based on the interaction.",
    whenApplies: "All traffic stops.",
    examplesAllowed: [
      "\"Good evening, I stopped you because you were doing 90 in a 45. License and registration please.\"",
      "Giving the driver time to provide documents"
    ],
    examplesNotAllowed: [
      "Stopping someone and immediately ordering them out at gunpoint with no reason given",
      "Failing to explain why they were stopped"
    ],
    exceptions: "High-risk stops (felony stops) follow different, more cautious procedures."
  },
  {
    id: "ig-20",
    number: 20,
    title: "Reasonable Force",
    short: "Use force appropriate to the situation. Lethal force must be reasonably justified.",
    meaning: "Force continuum applies. Use only the level of force necessary. Lethal force requires imminent threat of death or serious injury.",
    howToFollow: "Match force to resistance. Verbal → soft hands → hard hands → less-lethal → lethal only when justified.",
    whenApplies: "All use-of-force situations.",
    examplesAllowed: [
      "Using a taser on an actively resisting but non-lethal suspect",
      "Using lethal force when a suspect points a gun at you"
    ],
    examplesNotAllowed: [
      "Shooting a fleeing unarmed suspect in the back",
      "Using excessive force on a compliant subject"
    ],
    exceptions: "Officer safety is paramount. Reasonable belief of threat is key."
  },
  {
    id: "ig-21",
    number: 21,
    title: "No Police Powergaming",
    short: "Do not abuse rank, equipment, or mechanics to guarantee an outcome.",
    meaning: "Police should not use their tools, rank, or game mechanics in unrealistic ways to force wins.",
    howToFollow: "Play fair. Give criminals a chance. Use equipment realistically.",
    whenApplies: "All police RP.",
    examplesAllowed: [
      "Using spike strips in a realistic location during a pursuit",
      "Calling for backup when outnumbered"
    ],
    examplesNotAllowed: [
      "Abusing admin or rank perks for personal gain in RP",
      "Using unrealistic mechanics to make escapes impossible"
    ],
    exceptions: "None. Fair play is required."
  },
  {
    id: "ig-22",
    number: 22,
    title: "No Jail Farming",
    short: "Do not arrest/jail players to farm XP, money, arrests, or statistics.",
    meaning: "Arrests must be for legitimate RP reasons, not to pad stats or gain rewards.",
    howToFollow: "Only arrest when there is real probable cause and proper RP has occurred.",
    whenApplies: "All arrests.",
    examplesAllowed: [
      "Arresting based on solid evidence and RP"
    ],
    examplesNotAllowed: [
      "Making up charges to get arrest numbers",
      "Arresting low-level or minor things solely for stats"
    ],
    exceptions: "None."
  },
  {
    id: "ig-23",
    number: 23,
    title: "Police Create RP",
    short: "Communicate, investigate, negotiate, and create scenarios instead of simply arresting everyone.",
    meaning: "The best police RP comes from investigation, dialogue, and creating interesting scenarios, not just locking people up.",
    howToFollow: "Talk to people. Investigate. Negotiate. Give warnings when appropriate. Create stories.",
    whenApplies: "All police interactions.",
    examplesAllowed: [
      "Conducting a full investigation before arresting",
      "Negotiating during a standoff",
      "Issuing warnings for minor infractions"
    ],
    examplesNotAllowed: [
      "Arresting every single person you interact with",
      "Refusing to roleplay and only using mechanics"
    ],
    exceptions: "Serious crimes still require enforcement."
  },
  {
    id: "ig-24",
    number: 24,
    title: "Realistic Criminal RP",
    short: "Criminal activity must be believable and properly roleplayed.",
    meaning: "Crimes should make sense and be roleplayed properly from planning to execution to aftermath.",
    howToFollow: "Plan crimes with realism. Have reasons. Roleplay the entire process.",
    whenApplies: "All criminal activity.",
    examplesAllowed: [
      "Planning a robbery with lookouts and an escape plan",
      "Having a motive and backstory for criminal actions"
    ],
    examplesNotAllowed: [
      "Randomly robbing people with no RP",
      "Unrealistic crime sprees with no consequences considered"
    ],
    exceptions: "None."
  },
  {
    id: "ig-25",
    number: 25,
    title: "Robbery RP",
    short: "Give victims and responding officers a reasonable chance to participate.",
    meaning: "Robberies should be interactive. Victims and police should have opportunities to roleplay.",
    howToFollow: "Initiate properly, give commands, allow responses, and don't instantly kill everyone.",
    whenApplies: "All robberies and hold-ups.",
    examplesAllowed: [
      "Demanding money/items and giving the victim time to comply",
      "Allowing negotiation or police response time"
    ],
    examplesNotAllowed: [
      "Killing the victim immediately with no interaction",
      "Leaving zero chance for anyone else to RP"
    ],
    exceptions: "If the victim or police escalate lethally first, response can match."
  },
  {
    id: "ig-26",
    number: 26,
    title: "Hostage RP",
    short: "Hostage situations must involve meaningful RP and negotiation.",
    meaning: "Taking hostages is a serious scenario that requires proper roleplay, demands, and negotiation — not just using people as human shields for a shootout.",
    howToFollow: "Make demands, negotiate, give time, and treat the situation seriously.",
    whenApplies: "Any hostage or barricade situation.",
    examplesAllowed: [
      "Making clear demands and negotiating with police",
      "Using the hostage situation to create tension and RP"
    ],
    examplesNotAllowed: [
      "Taking a hostage and immediately executing them",
      "Using hostages purely as meat shields with no negotiation"
    ],
    exceptions: "If police attempt a rescue that goes wrong, the situation can escalate."
  },
  {
    id: "ig-27",
    number: 27,
    title: "No Mass Killing",
    short: "Do not kill players simply because they are present during a criminal scenario.",
    meaning: "Being nearby during a crime does not automatically make someone a valid target for lethal force.",
    howToFollow: "Only engage those who are actual threats or involved. Bystanders should generally be left alone unless they interfere.",
    whenApplies: "During crimes, shootouts, and large scenes.",
    examplesAllowed: [
      "Defending against people who actively join the fight against you"
    ],
    examplesNotAllowed: [
      "Shooting every civilian in the area during a robbery",
      "Killing witnesses for no reason other than they saw something"
    ],
    exceptions: "Active participants and clear threats are valid targets."
  },
  {
    id: "ig-28",
    number: 28,
    title: "No Instant Escalation (Criminals)",
    short: "Do not immediately shoot police/civilians without a legitimate RP reason.",
    meaning: "Same principle as rule 13, applied to criminal side. Don't turn every police interaction into an immediate gunfight.",
    howToFollow: "Attempt to talk, comply, or escape before resorting to lethal force when possible.",
    whenApplies: "Interactions with police and civilians.",
    examplesAllowed: [
      "Trying to talk your way out of a stop",
      "Fleeing when the opportunity exists"
    ],
    examplesNotAllowed: [
      "Shooting the officer the moment they walk up to the window with no prior reason"
    ],
    exceptions: "If the officer is already using lethal force or the situation is clearly going lethal."
  },
  {
    id: "ig-29",
    number: 29,
    title: "Realistic Driving",
    short: "Drive realistically. No excessive reckless driving, unrealistic jumps, or intentional crashes.",
    meaning: "Drive like a real person would in the situation. Avoid video-game-style driving that breaks immersion.",
    howToFollow: "Obey traffic laws when not in a pursuit or emergency. Even in pursuits, keep it believable.",
    whenApplies: "All driving.",
    examplesAllowed: [
      "High-speed pursuit driving that still respects basic physics",
      "Normal driving during regular RP"
    ],
    examplesNotAllowed: [
      "Constantly launching off ramps for no reason",
      "Driving on two wheels or performing impossible stunts mid-RP"
    ],
    exceptions: "Emergency vehicles in genuine emergency responses have more leeway."
  },
  {
    id: "ig-30",
    number: 30,
    title: "No Intentional Ramming",
    short: "Do not intentionally ram players or vehicles without a legitimate RP reason.",
    meaning: "Ramming is a form of force and requires justification, similar to VDM.",
    howToFollow: "Only ram when it makes sense in the RP (e.g., PIT maneuver training or last-resort intervention with reason).",
    whenApplies: "All vehicle interactions.",
    examplesAllowed: [
      "A justified PIT attempt during a dangerous pursuit"
    ],
    examplesNotAllowed: [
      "Ramming people for fun or to start fights",
      "Repeatedly ramming the same vehicle with no purpose"
    ],
    exceptions: "Accidents and justified police intervention techniques."
  },
  {
    id: "ig-31",
    number: 31,
    title: "No Vehicle Abuse",
    short: "Do not abuse glitches, physics, or desync for an advantage.",
    meaning: "Exploiting game physics, desync, or bugs with vehicles is prohibited.",
    howToFollow: "Play within the intended mechanics. Report bugs instead of abusing them.",
    whenApplies: "All vehicle use.",
    examplesAllowed: [
      "Normal driving and realistic collisions"
    ],
    examplesNotAllowed: [
      "Using desync to phase through barriers",
      "Abusing physics to launch vehicles unrealistically for advantage"
    ],
    exceptions: "None."
  },
  {
    id: "ig-32",
    number: 32,
    title: "Realistic Pursuits",
    short: "Prioritize realistic driving and quality RP during pursuits.",
    meaning: "Pursuits should feel cinematic and realistic, not like a pure deathmatch on wheels.",
    howToFollow: "Both sides should drive with some realism. Police should use proper techniques. Criminals should not make it impossible through abuse.",
    whenApplies: "All vehicle pursuits.",
    examplesAllowed: [
      "Using radio to coordinate, spike strips, and realistic intervention",
      "Criminals taking realistic escape routes"
    ],
    examplesNotAllowed: [
      "Driving in ways that only work because of game physics",
      "Ignoring all risk and driving like it's a video game"
    ],
    exceptions: "None major."
  },
  {
    id: "ig-33",
    number: 33,
    title: "Medical RP",
    short: "Seriously injured players should roleplay their injuries.",
    meaning: "If you are shot, stabbed, or badly hurt, you must roleplay the effects. You cannot simply run around at full speed after taking major damage.",
    howToFollow: "Act injured. Request EMS. Limit your movement and actions according to the severity.",
    whenApplies: "After any significant injury.",
    examplesAllowed: [
      "Limping, holding wounds, calling for help after being shot",
      "Going down and waiting for EMS when critically injured"
    ],
    examplesNotAllowed: [
      "Getting shot multiple times and continuing to sprint and gunfight with no effect",
      "Ignoring injuries completely"
    ],
    exceptions: "Very minor injuries may not require heavy RP. Adrenaline can be roleplayed briefly, but not indefinitely."
  },
  {
    id: "ig-34",
    number: 34,
    title: "EMS RP",
    short: "EMS should provide meaningful medical roleplay.",
    meaning: "EMS is not just a revive button. Provide actual medical roleplay.",
    howToFollow: "Assess the patient, describe treatments, ask questions, and create a scene.",
    whenApplies: "All EMS interactions.",
    examplesAllowed: [
      "Checking vitals, applying pressure, asking about allergies, transporting with RP"
    ],
    examplesNotAllowed: [
      "Instantly reviving with no interaction",
      "Treating EMS as a pure mechanic"
    ],
    exceptions: "Mass casualty events may require faster handling, but some RP should still occur."
  },
  {
    id: "ig-35",
    number: 35,
    title: "No Exploiting",
    short: "Do not abuse bugs, glitches, or unintended mechanics.",
    meaning: "Any use of bugs, glitches, or unintended game behavior for advantage is prohibited.",
    howToFollow: "Play the game as intended. Report bugs to staff instead of using them.",
    whenApplies: "Always.",
    examplesAllowed: [
      "Reporting a bug you find"
    ],
    examplesNotAllowed: [
      "Using any glitch to gain money, items, unfair combat advantage, or to escape situations"
    ],
    exceptions: "None. Exploiting is a serious offense."
  },
  {
    id: "ig-36",
    number: 36,
    title: "No Spawn Camping",
    short: "Do not attack or arrest players at protected spawns or hospitals.",
    meaning: "Safe zones such as hospitals and designated spawn areas are protected. Do not camp them to attack or arrest people the moment they appear.",
    howToFollow: "Allow players to leave safe zones and enter the world before engaging.",
    whenApplies: "Near hospitals, spawn points, and other protected areas.",
    examplesAllowed: [
      "Waiting outside a reasonable distance and engaging once they leave the safe area"
    ],
    examplesNotAllowed: [
      "Sitting at the hospital exit and arresting/shooting everyone who comes out",
      "Camping spawn points"
    ],
    exceptions: "If a player commits a crime inside or immediately uses the safe zone to escape an active situation, staff may rule differently."
  },
  {
    id: "ig-37",
    number: 37,
    title: "No Harassment",
    short: "Harassment, threats, bullying, and targeted abuse are prohibited.",
    meaning: "Targeting players repeatedly in a way that makes the game unenjoyable, or using OOC threats/harassment, is not allowed.",
    howToFollow: "Keep conflicts IC and fair. Do not single people out for repeated unwanted attention OOC or through abusive RP.",
    whenApplies: "Always, both IC and OOC.",
    examplesAllowed: [
      "IC rivalries that both parties are engaging with"
    ],
    examplesNotAllowed: [
      "Repeatedly targeting the same player with no RP reason",
      "OOC threats or bullying",
      "Making the game toxic for specific people"
    ],
    exceptions: "None."
  },
  {
    id: "ig-38",
    number: 38,
    title: "Give Players A Chance",
    short: "Allow others to respond, negotiate, comply, or escape when reasonable.",
    meaning: "Good RP gives other players opportunities to participate, react, and influence the outcome.",
    howToFollow: "Pause for responses. Offer chances to comply or negotiate. Don't railroad every scene.",
    whenApplies: "All interactive RP.",
    examplesAllowed: [
      "Waiting for a response after giving a command",
      "Allowing a criminal a chance to surrender"
    ],
    examplesNotAllowed: [
      "Instantly ending scenes with no input from the other side",
      "Refusing any form of negotiation when it would be realistic"
    ],
    exceptions: "When the other party has already chosen violence or is actively escaping in a way that removes the chance."
  },
  {
    id: "ig-39",
    number: 39,
    title: "RP Over Winning",
    short: "Creating a fun scenario is more important than winning an arrest, chase, robbery, or shootout.",
    meaning: "The primary goal is quality roleplay and fun for everyone involved, not 'winning' the encounter.",
    howToFollow: "Make decisions that create better stories even if it means you don't 'win'. Let interesting RP develop.",
    whenApplies: "Every scenario.",
    examplesAllowed: [
      "Letting a good chase continue because it's fun for both sides",
      "Choosing the more interesting RP option over the optimal mechanical win"
    ],
    examplesNotAllowed: [
      "Doing everything possible to guarantee a win at the expense of everyone's enjoyment",
      "Treating the server like a competitive deathmatch"
    ],
    exceptions: "None. This is a core philosophy."
  },
  {
    id: "ig-40",
    number: 40,
    title: "Common Sense",
    short: "Use common sense and prioritize fair, realistic, and enjoyable RP.",
    meaning: "Not every situation can be written into rules. Use good judgment. If something feels wrong or ruins RP, don't do it.",
    howToFollow: "Ask yourself whether your actions make the server better or worse for others. When in doubt, choose the option that creates better RP.",
    whenApplies: "Always.",
    examplesAllowed: [
      "Making judgment calls that keep scenes fun and fair"
    ],
    examplesNotAllowed: [
      "Looking for loopholes to justify poor behavior",
      "Doing something toxic just because it isn't explicitly banned"
    ],
    exceptions: "Staff have final say under staff discretion."
  }
];

// ============================================================
// DISCORD RULES
// ============================================================
const discordRules = [
  {
    id: "dc-1",
    number: 1,
    title: "RESPECT",
    short: "Treat all members with respect. Harassment, bullying, threats, hate speech, and targeted abuse are prohibited.",
    meaning: "Every member deserves to be treated with basic respect. Personal attacks, harassment, and hate speech destroy community.",
    howToFollow: "Speak to others the way you would want to be spoken to. Disagree with ideas, not people. Keep conversations civil.",
    whenApplies: "In all Discord channels, DMs related to the server, and voice chats.",
    examplesAllowed: [
      "Polite disagreement",
      "Constructive criticism of ideas or RP"
    ],
    examplesNotAllowed: [
      "Name-calling, insults, or personal attacks",
      "Hate speech of any kind",
      "Targeted harassment campaigns"
    ],
    exceptions: "None. Respect is non-negotiable."
  },
  {
    id: "dc-2",
    number: 2,
    title: "APPROPRIATE CONTENT",
    short: "No NSFW, excessively graphic, disturbing, or inappropriate content.",
    meaning: "Keep the server clean and appropriate for the community standards set by staff.",
    howToFollow: "Do not post or share NSFW images, videos, links, or excessively graphic content.",
    whenApplies: "All text and voice channels.",
    examplesAllowed: [
      "Normal conversation and memes within reason"
    ],
    examplesNotAllowed: [
      "Pornography or sexual content",
      "Gore or extremely disturbing imagery",
      "Content that violates Discord ToS"
    ],
    exceptions: "None."
  },
  {
    id: "dc-3",
    number: 3,
    title: "NO SPAM",
    short: "Do not flood chats with messages, emojis, images, mentions, or repeated content.",
    meaning: "Spamming makes channels unusable and is disrespectful to others trying to communicate.",
    howToFollow: "Post thoughtfully. Avoid rapid repeated messages, emoji floods, or mass mentions.",
    whenApplies: "All text channels.",
    examplesAllowed: [
      "Normal conversation pace",
      "Occasional emoji use"
    ],
    examplesNotAllowed: [
      "Sending the same message 10 times",
      "Emoji spam",
      "Mass @everyone or unnecessary pings"
    ],
    exceptions: "None."
  },
  {
    id: "dc-4",
    number: 4,
    title: "NO MIC/SOUND SPAM",
    short: "Do not scream, blast audio, spam soundboards, or intentionally disrupt voice channels.",
    meaning: "Voice channels should be usable. Disruptive audio ruins the experience for everyone.",
    howToFollow: "Use a normal speaking voice. Do not play loud music, soundboards, or scream into the mic.",
    whenApplies: "All voice channels.",
    examplesAllowed: [
      "Normal conversation and RP voice"
    ],
    examplesNotAllowed: [
      "Ear-rape, soundboard spam, screaming",
      "Intentionally disrupting ongoing conversations or RP"
    ],
    exceptions: "None."
  },
  {
    id: "dc-5",
    number: 5,
    title: "STAY ON TOPIC",
    short: "Use channels for their intended purpose and follow channel-specific rules.",
    meaning: "Channels exist for specific purposes. Off-topic content belongs in the appropriate place.",
    howToFollow: "Read channel descriptions and post accordingly. Move conversations if they drift.",
    whenApplies: "All channels.",
    examplesAllowed: [
      "Posting memes in a meme channel",
      "Asking for help in support channels"
    ],
    examplesNotAllowed: [
      "Posting random unrelated content in serious channels",
      "Ignoring channel topic rules"
    ],
    exceptions: "Staff may allow light off-topic in some channels."
  },
  {
    id: "dc-6",
    number: 6,
    title: "NO ADVERTISING",
    short: "Do not advertise other servers, communities, services, or projects without staff permission. This includes DMs.",
    meaning: "Unauthorized advertising is not allowed. This protects the community from spam and poaching.",
    howToFollow: "Do not promote other servers or services unless given explicit permission by staff.",
    whenApplies: "All channels and DMs to members regarding the server.",
    examplesAllowed: [
      "Discussing public information with permission"
    ],
    examplesNotAllowed: [
      "Posting invite links to other servers",
      "DMing members to join another community",
      "Promoting paid services without approval"
    ],
    exceptions: "Staff-approved partnerships or announcements."
  },
  {
    id: "dc-7",
    number: 7,
    title: "NO MALICIOUS CONTENT",
    short: "Phishing, malware, token grabbers, IP grabbers, scams, and malicious links are strictly prohibited.",
    meaning: "Any attempt to harm members through malicious links or scams is a serious offense.",
    howToFollow: "Never share suspicious links. Do not attempt to scam or phish anyone.",
    whenApplies: "Always.",
    examplesAllowed: [
      "Sharing legitimate, safe links"
    ],
    examplesNotAllowed: [
      "Any form of phishing, malware, token/IP grabbers, or scams"
    ],
    exceptions: "None. This results in permanent ban."
  },
  {
    id: "dc-8",
    number: 8,
    title: "NO IMPERSONATION",
    short: "Do not impersonate staff, Discord employees, officials, or other members.",
    meaning: "Pretending to be someone else, especially staff, is prohibited and can be used for scams or disruption.",
    howToFollow: "Use your own identity. Do not copy names, profile pictures, or claim ranks you do not have.",
    whenApplies: "Always.",
    examplesAllowed: [
      "Having a unique username and profile"
    ],
    examplesNotAllowed: [
      "Copying a staff member's name and pfp",
      "Claiming to be Discord staff or server leadership falsely"
    ],
    exceptions: "None."
  },
  {
    id: "dc-9",
    number: 9,
    title: "NO DOXXING",
    short: "Never share or threaten to share private or personal information.",
    meaning: "Sharing or threatening to share personal information (addresses, real names, workplaces, etc.) is strictly forbidden.",
    howToFollow: "Keep personal information private. Never threaten to expose anyone.",
    whenApplies: "Always.",
    examplesAllowed: [
      "Discussing public information"
    ],
    examplesNotAllowed: [
      "Posting or threatening to post personal information",
      "Any form of doxxing"
    ],
    exceptions: "None. Immediate permanent ban."
  },
  {
    id: "dc-10",
    number: 10,
    title: "NO RAIDING",
    short: "Raiding, mass mentions, spam attacks, or attempts to disrupt the server are prohibited.",
    meaning: "Organized or individual attempts to disrupt the server through raids or mass spam are banned.",
    howToFollow: "Do not participate in or organize any disruptive attacks on the server.",
    whenApplies: "Always.",
    examplesAllowed: [
      "Normal participation"
    ],
    examplesNotAllowed: [
      "Bringing in people to spam or disrupt",
      "Mass mention attacks",
      "Any coordinated disruption"
    ],
    exceptions: "None."
  },
  {
    id: "dc-11",
    number: 11,
    title: "NO BAN EVASION",
    short: "Do not use alternate accounts to evade punishments.",
    meaning: "If you are banned or punished, creating a new account to return is ban evasion.",
    howToFollow: "Accept punishments. Appeal through proper channels if you believe it was unfair.",
    whenApplies: "After any ban or restriction.",
    examplesAllowed: [
      "Appealing a ban properly"
    ],
    examplesNotAllowed: [
      "Creating alt accounts to bypass a ban",
      "Having friends share accounts to evade"
    ],
    exceptions: "None. Ban evasion extends the original punishment."
  },
  {
    id: "dc-12",
    number: 12,
    title: "NO DRAMA",
    short: "Keep personal disputes out of public channels. Do not intentionally create community drama.",
    meaning: "Public drama damages the community. Handle personal issues privately or through staff.",
    howToFollow: "Take disagreements to DMs or tickets. Do not air personal conflicts in public channels.",
    whenApplies: "All public channels.",
    examplesAllowed: [
      "Private resolution of issues",
      "Using the ticket system"
    ],
    examplesNotAllowed: [
      "Public call-outs and arguments",
      "Intentionally stirring up community conflict"
    ],
    exceptions: "None."
  },
  {
    id: "dc-13",
    number: 13,
    title: "RP DISPUTES",
    short: "Do not argue about in-game situations in Discord. Use the appropriate report system.",
    meaning: "In-game rule breaks and disputes belong in the report/ticket system, not public Discord arguments.",
    howToFollow: "If you believe a rule was broken, open a ticket or use the report system with evidence. Do not start arguments in chat.",
    whenApplies: "Any in-game dispute.",
    examplesAllowed: [
      "Filing a proper report with clips/screenshots"
    ],
    examplesNotAllowed: [
      "Publicly accusing players in Discord chats",
      "Arguing about who was right in an RP situation in general chat"
    ],
    exceptions: "None."
  },
  {
    id: "dc-14",
    number: 14,
    title: "NO FALSE REPORTS",
    short: "Do not knowingly submit fake, misleading, or manipulated reports.",
    meaning: "False reports waste staff time and can harm innocent players.",
    howToFollow: "Only report genuine issues. Provide honest evidence. Do not fabricate or edit clips to mislead.",
    whenApplies: "All reports and tickets.",
    examplesAllowed: [
      "Honest reports with accurate evidence"
    ],
    examplesNotAllowed: [
      "Fake reports to get someone in trouble",
      "Edited or misleading evidence"
    ],
    exceptions: "None. False reports are taken seriously."
  },
  {
    id: "dc-15",
    number: 15,
    title: "TICKETS",
    short: "Create one ticket per issue, provide honest information, and be patient while waiting for staff.",
    meaning: "The ticket system works best when used correctly and patiently.",
    howToFollow: "One issue per ticket. Include all relevant information and evidence. Wait for staff response without spamming.",
    whenApplies: "When using the support/ticket system.",
    examplesAllowed: [
      "A clear, detailed ticket with evidence"
    ],
    examplesNotAllowed: [
      "Opening multiple tickets for the same issue",
      "Providing false information",
      "Spamming staff about an open ticket"
    ],
    exceptions: "None."
  },
  {
    id: "dc-16",
    number: 16,
    title: "RESPECT STAFF",
    short: "You may disagree with a staff decision, but harassment or personal attacks are prohibited. Use the appeal system.",
    meaning: "Staff are volunteers keeping the community running. Disagreement is fine; abuse is not.",
    howToFollow: "If you disagree with a decision, use the official appeal process. Do not harass staff members.",
    whenApplies: "All interactions with staff.",
    examplesAllowed: [
      "Politely appealing a decision through the proper channel"
    ],
    examplesNotAllowed: [
      "Harassing staff in DMs or public channels over a decision",
      "Personal attacks on staff members"
    ],
    exceptions: "None."
  },
  {
    id: "dc-17",
    number: 17,
    title: "NO STAFF ABUSE",
    short: "Staff may not abuse permissions for personal reasons or to benefit themselves or friends.",
    meaning: "Staff are held to a high standard. Using powers for personal gain or favoritism is prohibited.",
    howToFollow: "Staff must act impartially and in the best interest of the community.",
    whenApplies: "All staff actions.",
    examplesAllowed: [
      "Fair enforcement of rules"
    ],
    examplesNotAllowed: [
      "Using admin powers to win RP or help friends unfairly",
      "Punishing people for personal reasons"
    ],
    exceptions: "None. Staff abuse is handled internally and seriously."
  },
  {
    id: "dc-18",
    number: 18,
    title: "NO METAGAMING (Discord)",
    short: "Do not use information from Discord to gain an unfair advantage during active RP.",
    meaning: "Information learned in Discord (locations, plans, identities) must not be used IC unless your character learned it properly.",
    howToFollow: "Keep Discord knowledge separate from in-game character knowledge.",
    whenApplies: "Whenever you have information from Discord that your character would not know.",
    examplesAllowed: [
      "Discussing public server information"
    ],
    examplesNotAllowed: [
      "Using Discord info about a player's location or plans during active RP",
      "Coordinating IC actions based purely on OOC Discord knowledge"
    ],
    exceptions: "None."
  },
  {
    id: "dc-19",
    number: 19,
    title: "FOLLOW DISCORD RULES",
    short: "All members must follow Discord's Terms of Service and Community Guidelines.",
    meaning: "In addition to our rules, you must follow Discord's own ToS and Guidelines.",
    howToFollow: "Do not violate Discord's rules. This includes age requirements, prohibited content, etc.",
    whenApplies: "Always.",
    examplesAllowed: [
      "Normal compliant use of Discord"
    ],
    examplesNotAllowed: [
      "Anything that violates Discord ToS (underage users, prohibited content, etc.)"
    ],
    exceptions: "None."
  },
  {
    id: "dc-20",
    number: 20,
    title: "COMMON SENSE",
    short: "If behavior clearly harms the community or RP experience, staff may take action even if it is not specifically listed.",
    meaning: "Rules cannot cover every possible situation. Staff may act on harmful behavior that is not explicitly written down.",
    howToFollow: "Use common sense. If something feels like it would hurt the community, don't do it.",
    whenApplies: "Always.",
    examplesAllowed: [
      "Behavior that supports a positive community"
    ],
    examplesNotAllowed: [
      "Looking for technical loopholes to justify harmful behavior"
    ],
    exceptions: "Staff discretion is final."
  }
];

// ============================================================
// LEO RADIO CODES
// ============================================================
const leoCodes = {
  tenCodes: [
    { code: "10-0", meaning: "Use caution / Officer down (varies)" },
    { code: "10-1", meaning: "Signal weak / Unable to copy / Change location" },
    { code: "10-2", meaning: "Signal good / Receiving well" },
    { code: "10-3", meaning: "Stop transmitting" },
    { code: "10-4", meaning: "Affirmative / Acknowledged / Message received (OK)" },
    { code: "10-5", meaning: "Relay message (to/from)" },
    { code: "10-6", meaning: "Busy / Stand by unless urgent" },
    { code: "10-7", meaning: "Out of service" },
    { code: "10-8", meaning: "In service / Available" },
    { code: "10-9", meaning: "Repeat / Say again" },
    { code: "10-10", meaning: "Fight in progress / Negative (varies by agency)" },
    { code: "10-11", meaning: "Dog case / Animal problem / On duty (employee #)" },
    { code: "10-12", meaning: "Stand by / Visitors or officials present" },
    { code: "10-13", meaning: "Weather and road conditions (NOTE: NYPD & some agencies = Officer needs help)" },
    { code: "10-14", meaning: "Prowler report / Suspicious person / Convoy or escort" },
    { code: "10-15", meaning: "Civil disturbance / Prisoner in custody" },
    { code: "10-16", meaning: "Domestic disturbance / Pick up prisoner" },
    { code: "10-17", meaning: "Meet complainant / En route / Pick up papers" },
    { code: "10-18", meaning: "Urgent / Complete assignment quickly" },
    { code: "10-19", meaning: "Return to station / In contact" },
    { code: "10-20", meaning: "Location / What is your location?" },
    { code: "10-21", meaning: "Call by telephone" },
    { code: "10-22", meaning: "Disregard / Cancel last message or assignment" },
    { code: "10-23", meaning: "Arrived at scene" },
    { code: "10-24", meaning: "Assignment completed" },
    { code: "10-25", meaning: "Report in person / Meet (person or location)" },
    { code: "10-26", meaning: "Detaining subject / Expedite / Estimated arrival time" },
    { code: "10-27", meaning: "Driver's license / Permit information check" },
    { code: "10-28", meaning: "Vehicle registration information check" },
    { code: "10-29", meaning: "Check for wanted / Stolen / Records or warrants check" },
    { code: "10-30", meaning: "Unnecessary use of radio / Does not conform to rules" },
    { code: "10-31", meaning: "Crime in progress" },
    { code: "10-32", meaning: "Person with a gun / Man with gun" },
    { code: "10-33", meaning: "Emergency / Clear the channel / Need immediate assistance" },
    { code: "10-34", meaning: "Riot / Major disturbance / Open door or window" },
    { code: "10-35", meaning: "Major crime alert / Confidential information" },
    { code: "10-36", meaning: "Correct time / Current time" },
    { code: "10-37", meaning: "Investigate suspicious vehicle" },
    { code: "10-38", meaning: "Stopping suspicious vehicle / Traffic stop" },
    { code: "10-39", meaning: "Urgent – Use lights and siren (Code 3)" },
    { code: "10-40", meaning: "Silent run – No lights or siren (Code 2)" },
    { code: "10-41", meaning: "Beginning tour of duty / Start of shift" },
    { code: "10-42", meaning: "Ending tour of duty / End of shift" },
    { code: "10-43", meaning: "Information / In pursuit (varies)" },
    { code: "10-44", meaning: "Permission to leave / Riot (varies)" },
    { code: "10-45", meaning: "Animal carcass / Condition of patient / Bomb threat (varies)" },
    { code: "10-46", meaning: "Assist motorist / Bank alarm (varies)" },
    { code: "10-47", meaning: "Emergency road repairs needed" },
    { code: "10-48", meaning: "Traffic control / Traffic standard repair" },
    { code: "10-49", meaning: "Traffic light out" },
    { code: "10-50", meaning: "Traffic accident / Vehicle collision (PD / PI / F)" },
    { code: "10-51", meaning: "Wrecker / Tow truck needed" },
    { code: "10-52", meaning: "Ambulance needed" },
    { code: "10-53", meaning: "Road blocked" },
    { code: "10-54", meaning: "Livestock on highway / Hit and run (varies)" },
    { code: "10-55", meaning: "Intoxicated driver (DUI/DWI)" },
    { code: "10-56", meaning: "Intoxicated pedestrian" },
    { code: "10-57", meaning: "Hit and run accident" },
    { code: "10-58", meaning: "Direct traffic" },
    { code: "10-59", meaning: "Convoy or escort" },
    { code: "10-60", meaning: "Squad / Unit in vicinity" },
    { code: "10-61", meaning: "Personnel in area / Stopping suspicious vehicle (varies)" },
    { code: "10-62", meaning: "Reply to message / Breaking and entering in progress (varies)" },
    { code: "10-63", meaning: "Prepare to copy / Prepare to receive assignment" },
    { code: "10-64", meaning: "Message for local delivery / Crime in progress (varies)" },
    { code: "10-65", meaning: "Net message / Armed robbery (varies)" },
    { code: "10-66", meaning: "Cancel message / Notify medical examiner (varies)" },
    { code: "10-67", meaning: "Clear for net message / Report of death (varies)" },
    { code: "10-68", meaning: "Dispatch information / Livestock in roadway (varies)" },
    { code: "10-69", meaning: "Message received / Advise telephone number" },
    { code: "10-70", meaning: "Fire alarm / Improperly parked vehicle" },
    { code: "10-71", meaning: "Advise nature of fire / Improper use of radio" },
    { code: "10-72", meaning: "Report progress on fire / Prisoner in custody" },
    { code: "10-73", meaning: "Smoke report / Mental subject" },
    { code: "10-74", meaning: "Negative / Prison or jail break" },
    { code: "10-75", meaning: "In contact with / Wanted or stolen" },
    { code: "10-76", meaning: "En route (to) / Prowler" },
    { code: "10-77", meaning: "Estimated time of arrival (ETA) / Direct traffic at fire scene" },
    { code: "10-78", meaning: "Need assistance / Request backup" },
    { code: "10-79", meaning: "Notify coroner / Bomb threat (varies)" },
    { code: "10-80", meaning: "Chase in progress / Fire alarm" },
    { code: "10-81", meaning: "Nature of fire / Breathalyzer operator" },
    { code: "10-82", meaning: "Fire in progress / Reserve lodging" },
    { code: "10-83", meaning: "Smoke visible / Work school crossing" },
    { code: "10-84", meaning: "No smoke visible / If meeting, advise ETA" },
    { code: "10-85", meaning: "Respond without lights/siren / Delayed response" },
    { code: "10-86", meaning: "Officer / Operator on duty" },
    { code: "10-87", meaning: "Pick up / Distribute checks" },
    { code: "10-88", meaning: "Present telephone number of / What phone can be reached at" },
    { code: "10-89", meaning: "Bomb threat" },
    { code: "10-90", meaning: "Bank alarm at" },
    { code: "10-91", meaning: "Pick up prisoner / Subject" },
    { code: "10-92", meaning: "Improperly parked vehicle" },
    { code: "10-93", meaning: "Blockade" },
    { code: "10-94", meaning: "Drag racing" },
    { code: "10-95", meaning: "Prisoner / Subject in custody" },
    { code: "10-96", meaning: "Mental subject / Unable to locate" },
    { code: "10-97", meaning: "Check (test) signal / Arrived at scene (some agencies)" },
    { code: "10-98", meaning: "Prison / Jail break / Assignment completed (some agencies)" },
    { code: "10-99", meaning: "Wanted / Stolen indicated / Unable to receive signal" },
    { code: "10-100", meaning: "Alert status / Remain in contact (specify)" }
  ],
  responseCodes: [
    { code: "Code 1", meaning: "Routine response – Normal driving, no lights or siren" },
    { code: "Code 2", meaning: "Urgent response – Expedite, limited use of lights/siren (or silent run)" },
    { code: "Code 3", meaning: "Emergency response – Lights and siren authorized" },
    { code: "Code 4", meaning: "No further assistance needed / Situation under control / Cancel" },
    { code: "Code 5", meaning: "Stakeout / Surveillance / Stay clear of area" },
    { code: "Code 6", meaning: "Responding from a distance / High-risk stop (varies)" },
    { code: "Code 7", meaning: "Meal break / Out of service for lunch" },
    { code: "Code 8", meaning: "Request backup / Officer needs assistance (non-emergency)" },
    { code: "Code 9", meaning: "Set up roadblock" },
    { code: "Code 10", meaning: "Bomb threat / Request SWAT or special unit (varies)" },
    { code: "Code 20", meaning: "Officer needs assistance" },
    { code: "Code 30", meaning: "Officer needs emergency help / Officer down" },
    { code: "Code 33", meaning: "Emergency traffic only – Clear the channel" },
    { code: "Code 99", meaning: "Emergency / All units respond" }
  ],
  signalCodes: [
    { code: "Signal 0 / 00", meaning: "Officer down – All units respond" },
    { code: "Signal 7", meaning: "Dead person / Deceased" },
    { code: "Signal 8", meaning: "Meet / Meet me at" },
    { code: "Signal 13", meaning: "Officer needs help (some agencies)" },
    { code: "Signal 20", meaning: "Mentally ill person" },
    { code: "Signal 25", meaning: "Officer needs help" },
    { code: "Signal 30", meaning: "Homicide / Murder" },
    { code: "Signal 34", meaning: "Arson" },
    { code: "Signal 37", meaning: "Suspicious person/vehicle" },
    { code: "Signal 38", meaning: "Traffic stop" },
    { code: "Signal 48", meaning: "Disorderly conduct / Fight" },
    { code: "Signal 50", meaning: "Accident" },
    { code: "Signal 52", meaning: "Armed robbery" },
    { code: "Signal 56", meaning: "Stolen vehicle" },
    { code: "Signal 59", meaning: "Bomb threat" },
    { code: "Signal 63", meaning: "Prowler" },
    { code: "Signal 76", meaning: "Abandoned vehicle" },
    { code: "Signal 88", meaning: "Fire" }
  ],
  phonetic: [
    { letter: "A", word: "Alpha" },
    { letter: "B", word: "Bravo" },
    { letter: "C", word: "Charlie" },
    { letter: "D", word: "Delta" },
    { letter: "E", word: "Echo" },
    { letter: "F", word: "Foxtrot" },
    { letter: "G", word: "Golf" },
    { letter: "H", word: "Hotel" },
    { letter: "I", word: "India" },
    { letter: "J", word: "Juliet" },
    { letter: "K", word: "Kilo" },
    { letter: "L", word: "Lima" },
    { letter: "M", word: "Mike" },
    { letter: "N", word: "November" },
    { letter: "O", word: "Oscar" },
    { letter: "P", word: "Papa" },
    { letter: "Q", word: "Quebec" },
    { letter: "R", word: "Romeo" },
    { letter: "S", word: "Sierra" },
    { letter: "T", word: "Tango" },
    { letter: "U", word: "Uniform" },
    { letter: "V", word: "Victor" },
    { letter: "W", word: "Whiskey" },
    { letter: "X", word: "X-ray" },
    { letter: "Y", word: "Yankee" },
    { letter: "Z", word: "Zulu" }
  ]
};

const leoNotes = [
  "There is no universal national standard for police 10-codes. Meanings vary significantly by department, city, county, and state.",
  "NYPD and several other large agencies use 10-13 to mean “Officer needs help” instead of weather conditions.",
  "California agencies frequently use Penal Code numbers as radio codes (e.g., 187 = Murder, 211 = Robbery, 459 = Burglary, 5150 = Mental health hold).",
  "Many modern agencies and the Department of Homeland Security encourage “plain language” instead of 10-codes to reduce confusion during multi-agency responses.",
  "Always learn the specific codes used by your department or the jurisdiction you are roleplaying.",
  "Suffixes are sometimes added (e.g., 10-7A = out of service at home, 10-50F = fatal accident)."
];
