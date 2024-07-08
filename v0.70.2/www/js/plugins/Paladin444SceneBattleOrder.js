#Processes a common event before damage

# Use this in the skill/item notetag:  <ce_before_damage: x>
#
#   Where x is the common event id you want to run
#
# Ex.  <ce_before_damage: 5>  - Runs common event 5 before damage.

class Scene_Battle < Scene_Base
  alias nel_common_event_previous_apply use_item
  def use_item
    item = @subject.current_action.item
    if item.note =~ /<ce_before_damage:[ ](\d+)>/
      $game_temp.reserve_common_event($1.to_i)
      process_event
    end
    nel_common_event_previous_apply
  end
end