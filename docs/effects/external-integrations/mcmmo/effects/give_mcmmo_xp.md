# `give_mcmmo_xp`
:::infoRequires:
McMMO
:::

:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Gives experience points for a certain skill
# Example Config
```yaml
- id: give_mcmmo_xp
  args:
    amount: 100 # The amount of xp to give
    skill: exploration # The skill to give the xp for
  ...other config (eg triggers, filters, mutators, etc)
```