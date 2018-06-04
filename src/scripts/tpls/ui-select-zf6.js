angular.module('ui.select.zf6', []).run(['$templateCache', function($templateCache) {$templateCache.put('zf6/choices.tpl.html','<ul class="ui-select-choices ui-select-choices-content">\n  <li class="ui-select-choices-group" id="ui-select-choices-{{ $select.generatedId }}" >\n    <div class="divider" ng-show="$select.isGrouped && $index > 0"></div>\n    <div ng-show="$select.isGrouped" class="ui-select-choices-group-label dropdown-header" ng-bind="$group.name"></div>\n    <div ng-attr-id="ui-select-choices-row-{{ $select.generatedId }}-{{$index}}" class="ui-select-choices-row"\n    ng-class="{active: $select.isActive(this), disabled: $select.isDisabled(this)}" role="option">\n      <span class="ui-select-choices-row-inner"></span>\n    </div>\n  </li>\n</ul>\n');
$templateCache.put('zf6/footer.tpl.html','<div class="ui-select-footer" ng-transclude></div>\n');
$templateCache.put('zf6/header.tpl.html','<div class="ui-select-header" ng-transclude></div>\n');
$templateCache.put('zf6/match-multiple.tpl.html','<span class="ui-select-match">\n  <span ng-repeat="$item in $select.selected track by $index">\n    <button\n            class="ui-select-match-item button tiny"\n            tabindex="-1"\n            type="button"\n            ng-disabled="$select.disabled"\n            ng-click="$selectMultiple.activeMatchIndex = $index;"\n            ng-class="{\'primary\':$selectMultiple.activeMatchIndex === $index, \'select-locked\':$select.isLocked(this, $index)}"\n            ui-select-sort="$select.selected">\n        <span class="close-button tiny ui-select-match-close" ng-hide="$select.disabled" ng-click="$selectMultiple.removeChoice($index)">&nbsp;&times;</span>\n        <span uis-transclude-append></span>\n    </button>\n  </span>\n</span>\n');
$templateCache.put('zf6/match.tpl.html','<div class="ui-select-match" ng-hide="$select.open && $select.searchEnabled" ng-disabled="$select.disabled" ng-class="{\'button-focus\':$select.focus}">\n  <span tabindex="-1"\n      class="button hollow ui-select-toggle"\n      aria-label="{{ $select.baseTitle }} activate"\n      ng-disabled="$select.disabled"\n      ng-click="$select.activate()"\n      style="outline: 0;">\n    <span ng-show="$select.isEmpty()" class="ui-select-placeholder text-muted">{{$select.placeholder}}</span>\n    <span ng-hide="$select.isEmpty()" class="ui-select-match-text" ng-class="{\'ui-select-allow-clear\': $select.allowClear && !$select.isEmpty()}" ng-transclude=""></span>\n\n    <button type="button"\n            class="close-button small"\n            ng-show="$select.allowClear && !$select.isEmpty() && ($select.disabled !== true)"\n            aria-label="{{ $select.baseTitle }} clear"\n            ng-click="$select.clear($event)"\n    ><span aria-hidden="true">&times;</span></button>\n  </span>\n</div>\n');
$templateCache.put('zf6/no-choice.tpl.html','<ul class="ui-select-no-choice dropdown-menu"\n    ng-show="$select.items.length == 0">\n    <li ng-transclude>\n\n    </li>\n</ul>\n');
$templateCache.put('zf6/select-multiple.tpl.html','<div class="ui-select-container ui-select-multiple ui-select-zf6" ng-class="{open: $select.open}">\n  <div>\n    <div class="ui-select-match"></div>\n    <span ng-show="$select.open && $select.refreshing && $select.spinnerEnabled" class="ui-select-refreshing {{$select.spinnerClass}}"></span>\n    <input type="search"\n           autocomplete="off"\n           autocorrect="off"\n           autocapitalize="off"\n           spellcheck="false"\n           class="ui-select-search input-xs"\n           placeholder="{{$select.getPlaceholder()}}"\n           ng-disabled="$select.disabled"\n           ng-click="$select.activate()"\n           ng-model="$select.search"\n           role="combobox"\n           aria-expanded="{{$select.open}}"\n           aria-label="{{$select.baseTitle}}"\n           ng-class="{\'spinner\': $select.refreshing}"\n           data-disallow-drop=data-disallow-drop>\n  </div>\n  <div ng-show="$select.open && $select.items.length > 0" class="ui-select-dropdown dropdown-pane">\n    <div class="ui-select-header"></div>\n    <div class="ui-select-choices"></div>\n    <div class="ui-select-footer"></div>\n  </div>\n  <div class="ui-select-no-choice"></div>\n</div>\n');
$templateCache.put('zf6/select.tpl.html','<div class="ui-select-container ui-select-zf6" ng-class="{open: $select.open}">\n  <div class="ui-select-match"></div>\n  <span ng-show="$select.open && $select.refreshing  && $select.spinnerEnabled" class="ui-select-refreshing {{$select.spinnerClass}}"></span>\n  <input type="search" autocomplete="off" tabindex="-1"\n         aria-expanded="true"\n         aria-label="{{ $select.baseTitle }}"\n         aria-owns="ui-select-choices-{{ $select.generatedId }}"\n         class="ui-select-search"\n         ng-class="{ \'ui-select-search-hidden\' : !$select.searchEnabled }"\n         placeholder="{{$select.placeholder}}"\n         ng-model="$select.search"\n         ng-show="$select.open">\n  <div ng-show="$select.open && $select.items.length > 0" class="ui-select-dropdown dropdown-pane" ng-class="{\'is-open\': $select.open}">\n    <div class="ui-select-header"></div>\n    <div class="ui-select-choices"></div>\n    <div class="ui-select-footer"></div>\n  </div>\n  <div class="ui-select-no-choice"></div>\n</div>\n');}]);