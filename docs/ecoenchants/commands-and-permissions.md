---
title: "Commands and Permissions"
sidebar_position: 5
---

| Command                                                          | Description                                               | Permission                               |
|------------------------------------------------------------------|-----------------------------------------------------------|------------------------------------------|
| `/enchant <enchant> <level>`                                     | Enchant the held item                                     | `ecoenchants.command.enchant`            |
| `/enchantinfo <enchant>`                                         | Open the enchant info GUI for the specified enchantment   | `ecoenchants.command.enchantinfo`        |
| `/ecoenchants gui`                                               | Open the enchantment GUI                                  | `ecoenchants.command.gui`                |
| `/ecoenchants giverandombook <player> [type/rarity] [min] [max]` | Give a player a random enchanted book                     | `ecoenchants.command.giverandombook`     |
| `/ecoenchants import <id>`                                       | Import an enchant from [lrcdb](https://lrcdb.auxilor.io/) | `ecoenchants.command.import`             |
| `/ecoenchants export <id>`                                       | Export an enchant to [lrcdb](https://lrcdb.auxilor.io/)   | `ecoenchants.command.export`             | `ecoenchants.command.export`    |
| `/ecoenchants toggledescriptions`                                | Let players toggle enchantment descriptions               | `ecoenchants.command.toggledescriptions` |

### Additional Permissions

| Permission                   | Description                                                                                   |
|------------------------------|-----------------------------------------------------------------------------------------------|
| `ecoenchants.fromtable.<id>` | Permission to allow an enchantment to be obtained from an enchanting table (given by default) |