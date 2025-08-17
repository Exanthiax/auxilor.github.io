---
title: "Commands and Permissions"
sidebar_position: 5
---

## General Information
All crates commands can be either `/crates`, `/crate`, or `/ecocrates`

| Command                                                      | Description                                   | Permission                           |
|--------------------------------------------------------------|-----------------------------------------------|--------------------------------------|
| `/crates reload`                                             | Reloads the plugin                            | `ecocrates.command.reload`           |
| `/crates set <crate>`                                        | Set the block you're looking at to be a crate | `ecocrates.command.set`              |
| `/crates give <player> <crate> [physical/physical] [amount]` | Gives a player a key                          | `ecocrates.command.give`             |
| `/crates giveall <crate> [physical/physical] [amount]`       | Give all online players a key                 | `ecocrates.command.giveall`          |
| `/crates take <player> <crate> [physical/physical] [amount]` | Takes a key from a player                     | `ecocrates.command.take`             |
| `/crates keys`                                               | View your keys                                | `ecocrates.command.keys`             |
| `/crates preview <crate>`                                    | Open the preview for a crate                  | `ecocrates.command.preview`          |
| `/crates open <crate> [player]`                              | Opens a crate virtually                       | `ecocrates.command.open`             |
| `/crates forceopen <crate>`                                  | Force-opens a crate without a key             | `ecocrates.command.forceopen`        |
| `/crates forceopen <crate> [player]`                         | Force-opens a crate for another player        | `ecocrates.command.forceopen.others` |
| `/crates resetwins <player/all>`                             | Resets the wins for a reward                  | `ecocrates.command.resetwins`        |