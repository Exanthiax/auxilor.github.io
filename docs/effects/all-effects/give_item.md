# `give_item`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Gives a player an item

# Effect Syntax
```yaml
- id: give_item
  args:
    item: "diamond_sword razor:5" # The item to give
    items: # You can also specify a list of items
      - "ecoitems:enchanted_diamond 1"
      - "diamond_pickaxe 1 unbreaking:2"
    slot: hand # (Optional) The slot to give in, can be any numeric slot, hand, or 'any' (Defaults to any)
  ...other config (eg triggers, filters, mutators, etc)
```