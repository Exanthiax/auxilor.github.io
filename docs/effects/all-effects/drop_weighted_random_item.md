# `drop_weighted_random_item`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Drops a random item at a location, with weighting for different items

# Effect Syntax
```yaml
- id: drop_weighted_random_item
  args:
    items: # The list of items to choose from
      - items: # You can specify a list of items for each weight
          - diamond 2
          - ancient_debris 2
        weight: 2
      - item: ancient_debris # Or just a single item
        weight: 5
  ...other config (eg triggers, filters, mutators, etc)
```
