# `play_animation`
:::infoRequires:
Model Engine
:::

:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Plays a Model Engine animation (The entity must have a custom model active)
# Example Config
```yaml
- id: play_animation
  args:
    animation: strike # The name of the animation
  ...other config (eg triggers, filters, mutators, etc)
```
