# `lands_balance_below`
:::infoRequires:
Lands
:::

Requires the Land's bank balance to be below a value
# Condition Syntax
```yaml
- id: lands_balance_below
  args:
    amount: 10000 # The maximum balance
```

:::note  
  
Since players can be members of multiple Lands simultaneously with different roles, this Condition applies only to the Land where the player is currently located.

:::