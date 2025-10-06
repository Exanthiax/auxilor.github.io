---
title: External Item Integrations
sidebar_position: 1
---
The Item Lookup System allows you to use custom items from other plugins, inside of your eco plugins.

This means you can use items from plugins like Oraxen, ItemsAdder, and more.

## Using external items within Item Lookup
To use external items within The Item Lookup System, you need to use the relevant plugin's lookup-key.

| Plugin          | Lookup Key                                                                                                                 |
|-----------------|----------------------------------------------------------------------------------------------------------------------------|
| CustomCrafting  | `customcrafting:<id>`                                                                                                      |
| Denizen         | `denizen:<id>`                                                                                                             |
| ExecutableItems | `executableitems:<id>`                                                                                                     |
| HeadDatabase    | `headdb:<id>`                                                                                                              |
| ItemBridge      | `itembridge:saved__<id>` for items you've saved.<br/>`itembridge:<prefix>__<id>` for plugin items supported in ItemBridge. |
| ItemsAdder      | `itemsadder:<namespace__key>` ItemsAdder items are namespaced, example below. **There is a double underscore! `__`**       |
| Oraxen          | `oraxen:<id>`                                                                                                              |
| Nexo            | `nexo:<id>`                                                                                                                |

#### ItemsAdder Usage

```yaml
# ** ItemsAdder configuration **
info:
  namespace: my_items
items:
  my_helmet:
    display_name: "&9Custom Helmet"
```

ItemsAdder items are namespaced, so for example, the above would be `itemsadder:crystal_pack__alumite_pickaxe`, where `crystal_pack` is the namespace, and `alumite_pickaxe` is the item ID.

## Using items from eco plugins externally
You can also use items from eco plugins in other plugins, such as MythicMobs, or ShopGUIPlus.

| Plugin      | Item Lookup Key                                                                                            |
|-------------|------------------------------------------------------------------------------------------------------------|
| MythicMobs  | To use a lookup item in MythicMobs, use `eco{type=<lookup_key>}`. e.g, `eco{type=ecoitems:grappling_hook}` |
| ShopGUIPlus | *Example below                                                                                             |

```yaml
** ShopGUIPlus configuration **
type: item
item:
eco: "ecoitems:holy_flesh"
quantity: 1
sellPrice: 7500
slot: 27
```
