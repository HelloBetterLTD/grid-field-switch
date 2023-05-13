<?php

namespace SilverStripers\GridSwitch\Field;

use SilverStripe\Forms\FormField;
use SilverStripe\View\Requirements;

class SwitchField extends FormField
{

    private $on = false;

    public function Field($properties = [])
    {
        Requirements::javascript('silverstripers/grid-field-switch:client/dist/js/bundle.js');
        Requirements::css('silverstripers/grid-field-switch:client/dist/styles/bundle.css');
        return parent::Field($properties);
    }

    public function setOn($on = true)
    {
        return $this->on = $on;
        return $this;
    }

    public function IsOn()
    {
        return $this->on;
    }

}
