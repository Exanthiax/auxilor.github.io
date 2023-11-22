---
title: "Quests"
sidebar_position: 2
---

Quests consist of tasks, and when all tasks are completed the quest completes, giving the player rewards.

## Default configs

The default configs can be found here:

[GitHub](https://github.com/Auxilor/EcoQuests/blob/master/eco-core/core-plugin/src/main/resources/quests/)

## `_example.yml`

```yaml
# The ID of the quest is the name of the .yml file,
# for example traveller.yml has the ID of traveller
# You can place quests anywhere in this folder,
# including in subfolders if you want to organize your quest configs
# _example.yml is not loaded.

name: "Traveller"

description: "&7Stretch your legs! Walk around Lumoria and find new places to explore."

# Options for the /quests GUI
gui:
  enabled: true # If the quest should be shown in the GUI
  always: false # If the quest should always be in the GUI, even if it's not started
  # The item to show in the GUI, read https://plugins.auxilor.io/all-plugins/the-item-lookup-system
  item: paper

# How many minutes between this quest being reset (set to -1 to disable)
# 1 Day: 1440
# 1 Week: 10080
# 1 Month: 43200
reset-time: -1

# A list of tasks and their XP requirements to complete this quest.
# If the task is one action, set XP to 1.
# XP requirements can use placeholder math, for example %ecoskills_combat% * 100
tasks:
  - task: move
    xp: 1000

# (For resettable tasks) The amount of tasks to select from the list above.
# Set to -1 to use all tasks.
task-amount: -1

# The messages for the %rewards% placeholder in icons, messages, etc.
reward-messages:
  - " &8» &r&f+2 %ecoskills_defense_name%"

# A list of effects to run when the quest is completed.
# Read https://plugins.auxilor.io/effects/configuring-an-effect
rewards: []

# If the player should be told when they have started the quest.
announce-start: false

# A list of effects to run when the quest is started.
# Read https://plugins.auxilor.io/effects/configuring-an-effect
start-effects: []

# A list of conditions required to start the quest.
# The quest will be automatically started when these conditions are met.
# Read https://plugins.auxilor.io/conditions/configuring-a-condition
# If gui.always is true, then not-met-lines will show up on the GUI icon!
start-conditions: []

# If the quest should auto start when all conditions are met
# If this is set to false, the quest can only be started with /ecoquests start
auto-start: true
```