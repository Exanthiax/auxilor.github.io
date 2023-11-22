---
title: "Tasks"
sidebar_position: 3
---

Tasks are goals the player must achieve in order to complete quests.

## Default configs

The default configs can be found here:

[GitHub](https://github.com/Auxilor/EcoQuests/blob/master/eco-core/core-plugin/src/main/resources/tasks/)

## `_example.yml`

```yaml
# The ID of the task is the name of the .yml file,
# for example break_100_stone.yml has the ID of break_100_stone
# You can place tasks anywhere in this folder,
# including in subfolders if you want to organize your task configs
# _example.yml is not loaded.

# If multiple quests have the same task, gaining task XP for one quest
# will not gain task XP for other quests with the same task.

# The description of the task.
# %xp% - The amount of XP the player has in this task
# %required-xp% - The amount of XP required to complete this task
description: "&fBreak stone blocks (&a%xp%&8/&a%required-xp%&f)"

# An XP gain method takes a trigger, a multiplier, conditions, and filters.
# The multiplier takes the value produced by the trigger and multiplies it
# by some value to calculate the experience that should be given.
xp-gain-methods:
  - trigger: mine_block
    multiplier: 1
    filters:
      blocks:
        - stone

```