# `multiply_global_points`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Multiply global points (check the [points](https://plugins.auxilor.io/effects/points) wiki page if you don't know what these are)

# Effect Syntax
```yaml
- id: multiply_global_points
  args:
    type: item_stock # The point to multiply
    multiplier: 2 # The amount to multiply it by
  ...other config (eg triggers, filters, mutators, etc)
```