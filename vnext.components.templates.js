angular.module("vnext.components.templates",[]).run(["$templateCache",function(n){n.put("address/address-display.tpl.html",'<div class="row" data-ng-show="address.address1 !== \'\'"  data-ng-click="onClick()">\n	<div class="col-xs-10">\n		<div class="th-address__display__addressPart">{{ address.firstName }}&nbsp;{{ address.lastName }}</div>\n		<div class="th-address__display__addressPart">{{ address.address1 }}</div>\n		<div data-ng-if="address.address2 != \'\'" class="th-address__display__addressPart">{{ address.address2 }}</div>\n		<div class="th-address__display__addressPart" data-ng-show="isLocationUS">{{ address.city }},&nbsp;{{ address.state }}&nbsp;{{ address.postalCode }}</div>\n		<div class="th-address__display__addressPart" data-ng-show="isLocationUS">{{ address.phoneNumber | vnUsPhone }}</div>\n\n		<div class="th-address__display__addressPart" data-ng-show="!isLocationUS">{{ address.city }}</div>\n		<div class="th-address__display__addressPart" data-ng-show="!isLocationUS">{{ address.state }}&nbsp;{{ address.postalCode }}</div>\n		<div class="th-address__display__addressPart" data-ng-show="!isLocationUS">{{ address.country }}</div>\n		<div class="th-address__display__addressPart" data-ng-show="!isLocationUS">{{ address.phoneNumber }}</div>\n\n<!--		<div class="th-address__display__addressPart" data-ng-if="shippingValue" data-ng-show="address.residential">Type: Residential</div>\n		<div class="th-address__display__addressPart" data-ng-if="shippingValue" data-ng-show="!address.residential">Type: Business</div>-->\n	</div>\n	<div class="col-xs-2" ng-show="showEditButton">\n		<i class="fa fa-angle-right fa-2x pull-right"></i>\n	</div>\n</div>\n'),n.put("address/vn-address-display-actions.tpl.html",'<div class="container-fluid no-padding">\n	<div data-ng-if="shipping==\'true\'" data-vn-address-display data-address="address" data-shipping="true"></div>\n	<div data-ng-if="shipping!=\'true\'" data-vn-address-display data-address="address"></div>\n	<div class="row th-address__display__actions">\n		<div class="col-xs-7">\n			<span data-ng-if="!address.preferred">\n				<button class="btn btn-default btn-sm"\n						data-ng-click="onMakePreferredClicked()">Make Preferred\n				</button>\n			</span>\n			<span class="th-address__display__actions__preferred text-success" data-ng-if="address.preferred">\n				<i class="fa fa-check"></i>&nbsp;Preferred</span>\n		</div>\n		<div class="col-xs-4 col-xs-offset-1 col-sm-3 col-sm-offset-2 col-md-2 col-md-offset-3">\n			<div class="row">\n				<div class="col-xs-6">\n					<a href data-ng-click="onEditClicked({address:address})"><i class="fa fa-pencil"></i></a>\n				</div>\n				<div class="col-xs-6">\n					<a href data-ng-click="onDeleteClicked({address:address})"><i class="fa fa-trash-o"></i></a>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>\n'),n.put("address/vn-address-editor.html",'<div class="th-address">\n\n	<form id="frmAddress" name="frmAddress" novalidate data-ng-submit="updateAddress(address)">\n\n<!--		<div class="th-address__location">\n			<div class="btn-group">\n				<button type="button" data-ng-click="setCountryToUS()"\n						class="btn btn-sm"\n						data-ng-class="{ \'btn-primary\' : isLocationUS, \'btn-default\' : !isLocationUS }">United States\n				</button>\n				<button type="button" data-ng-click="setCountryToOther()"\n						class="btn btn-sm"\n						data-ng-class="{ \'btn-primary\': !isLocationUS, \'btn-default\' : isLocationUS }">International\n				</button>\n			</div>\n		</div>-->\n\n		<div class="th-address__form-wrapper">\n			<div class="row">\n				<div class="col-xs-6">\n					<div class="form-group">\n						<input type="text"\n							   name="inputUSFirstName"\n							   class="form-control input-lg immediate-help"\n							   id="first-name"\n							   data-vn-placeholder="First Name"\n							   data-ng-model="address.firstName"\n							   data-vn-invalid-char required/>\n\n						<data-vn-popover-first-name data-ng-if="frmAddress.inputUSFirstName.$touched"/>\n\n					</div>\n				</div>\n				<div class="col-xs-6">\n					<div class="form-group">\n						<input type="text"\n							   name="inputUSLastName"\n							   class="form-control input-lg -right immediate-help"\n							   id="last-name"\n							   data-vn-placeholder="Last Name"\n							   data-ng-model="address.lastName"\n							   data-vn-invalid-char required/>\n\n						<data-vn-popover-last-name data-ng-if="frmAddress.inputUSLastName.$touched"/>\n\n					</div>\n				</div>\n			</div>\n			<div class="row">\n				<div class="col-xs-12">\n					<div class="form-group">\n						<input type="text"\n							   name="inputUSAddress1Line"\n							   class="form-control input-lg immediate-help"\n							   id="address-1"\n							   data-vn-placeholder="Address Line 1"\n							   data-ng-model="address.address1"\n							   required/>\n\n						<data-vn-popover-address data-ng-if="frmAddress.inputUSAddress1Line.$touched"/>\n\n					</div>\n				</div>\n			</div>\n			<div class="row">\n				<div class="col-xs-12">\n					<div class="form-group">\n						<input type="text"\n							   name="inputUSAddressLine2"\n							   class="form-control input-lg"\n							   id="address-2"\n							   data-vn-placeholder="Address Line 2"\n							   data-ng-model="address.address2"/>\n					</div>\n				</div>\n			</div>\n			<div class="row" data-ng-if="isLocationUS"\n				 data-ng-hide="check.useShippingAddress">\n				<div class="col-xs-5">\n					<div class="form-group">\n						<input type="text"\n							   name="inputUSCity"\n							   class="form-control input-lg immediate-help"\n							   id="city"\n							   data-ng-change="validateChange()"\n							   data-vn-placeholder="City"\n							   data-ng-model="address.city"\n							   data-vn-invalid-char ng-required="isLocationUS"/>\n\n						<data-vn-popover-city data-ng-if="frmAddress.inputUSCity.$touched"/>\n\n					</div>\n				</div>\n				<div class="col-xs-3">\n					<div class="form-group">\n						<div class="th-address__state th-dropdown">\n							<vn-dropdown name="inputUSState" availableoptions="address.selectedCountry.states"\n										 placeholder="State" optionselect="onStateChanged"\n										 ng-model="address.selectedState" selected-field="code"\n										 data-vn-required-field\n										 data-error-key="stateEmpty">\n								<data-vn-popover-state data-ng-if="frmAddress.inputUSState.$touched"></data-vn-popover-state>\n							<vn-dropdown>\n						</div>\n					</div>\n				</div>\n				<div class="col-xs-4">\n					<div class="form-group">\n						<input type="text"\n							   name="inputUSZip"\n							   class="form-control input-lg immediate-help"\n							   id="zip"\n							   data-vn-placeholder="Zip"\n							   data-ng-model="address.postalCode"\n								 data-vn-format-zip\n							   data-vn-zip-validate ng-required="isLocationUS"/>\n						<data-vn-popover-zip data-ng-if="frmAddress.inputUSZip.$touched"/>\n\n					</div>\n				</div>\n			</div>\n			<div class="row" data-ng-if="!isLocationUS">\n				<div class="col-xs-12">\n					<div class="form-group">\n						<input type="text"\n							   name="inputWorldwideCity"\n							   class="form-control input-lg immediate-help"\n							   id="international-city"\n							   data-vn-placeholder="City"\n							   data-ng-model="address.city"\n							   data-vn-invalid-char required/>\n\n						<data-vn-popover-city data-ng-if="frmAddress.inputWorldwideCity.$touched"></data-vn-popover-city>\n					</div>\n				</div>\n			</div>\n			<div class="row" data-ng-if="!isLocationUS">\n				<div class="col-xs-6">\n					<div class="form-group">\n						<input type="text"\n							   name="inputWorldwideRegion"\n							   class="form-control input-lg immediate-help"\n							   id="region"\n							   data-vn-placeholder="Region"\n							   data-ng-model="address.state"\n							   data-vn-invalid-char ng-required="!isLocationUS"/>\n						<data-vn-popover-region data-ng-if="frmAddress.inputWorldwideRegion.$touched"></data-vn-popover-region>\n					</div>\n				</div>\n				<div class="col-xs-6">\n					<div class="form-group">\n						<input type="text"\n							   name="inputWorldwidePostalCode"\n							   class="form-control input-lg immediate-help"\n							   id="postal-code"\n							   maxlength="15"\n							   data-vn-placeholder="Postal code"\n							   data-ng-model="address.postalCode"\n							   data-vn-postal-code-validate ng-required="!isLocationUS"/>\n						<data-vn-popover-postal-code data-ng-if="frmAddress.inputWorldwidePostalCode.$touched"></data-vn-popover-postal-code>\n					</div>\n				</div>\n			</div>\n			<div class="row" data-ng-show="!isLocationUS ">\n				<div class="col-xs-12">\n					<div class="form-group">\n						<div class="th-address__country th-dropdown">\n							<vn-dropdown name="inputWorldwideCountry" data-availableoptions="countries"\n                                     placeholder="Country" optionselect="onCountryChanged"\n                                     data-error-key="countryEmpty"\n                                     ng-model="address.selectedCountry" data-error-key="countryEmpty"\n                                     ng-required="!isLocationUS" data-vn-required-field>\n                            <vn-dropdown>\n                            <data-vn-popover-country data-ng-if="frmAddress.inputWorldwideCountry.$touched"></data-vn-popover-country>\n						</div>\n					</div>\n				</div>\n			</div>\n\n			<div class="row" data-ng-if="isLocationUS">\n				<div class="col-xs-12">\n					<div class="form-group">\n						<input type="text"\n							   name="inputUSPhoneNumber"\n							   class="form-control input-lg immediate-help"\n							   id="phone-number"\n							   data-vn-placeholder="Phone Number"\n							   data-ng-model="address.phoneNumber"\n							   data-vn-us-phone-validate\n							   data-vn-format-us-phone-number />\n\n						<data-vn-popover-us-phone data-ng-if="frmAddress.inputUSPhoneNumber.$touched"/>\n					</div>\n				</div>\n			</div>\n\n			<div class="row" data-ng-if="!isLocationUS">\n				<div class="col-xs-12">\n					<div class="form-group">\n						<input type="text"\n							   name="inputIntlPhoneNumber"\n							   class="form-control input-lg immediate-help"\n							   maxlength="35"\n							   data-vn-placeholder="Phone Number"\n							   data-ng-model="address.phoneNumber"/>\n\n						<data-vn-popover-required location="top" field="Phone Number" data-ng-if="frmAddress.inputIntlPhoneNumber.$touched"></data-vn-popover-required>\n					</div>\n				</div>\n			</div>\n			<!--<div class="row" data-ng-if="shipping==\'true\'">\n				<div class="col-xs-12">\n					<div class="form-group">\n						<input type="checkbox"\n							   name="type"\n							   class="immediate-help"\n							   id="residential-1"\n							   data-ng-model="address.residential"\n							   data-ng-true-value="false"\n							   data-ng-false-value="true"\n							   />\n						<label for="residential-1" role="button" tabindex="0">This is a business address</label>\n					</div>\n				</div>\n			</div>\n			<div class="row">\n				<div class="col-xs-12">\n					<div class="form-group">\n						<input type="checkbox"\n							   name="isPreferred"\n							   class="immediate-help"\n							   id="preferred"\n							   data-ng-model="address.preferred"/>\n						<label for="preferred" role="button" tabindex="0">Preferred</label>\n					</div>\n				</div>\n			</div>-->\n		</div>\n\n		<div class="row" data-ng-if="showCancelButtonValue">\n			<div class="col-xs-6">\n				<button class="btn btn-default btn-block btn-lg"\n						data-ng-click="onCancel()">\n					{{cancelText}}</i>\n				</button>\n			</div>\n			<div class="col-xs-6">\n				<button class="btn btn-primary btn-block btn-lg"\n						data-ng-click="saveAddress()"\n						data-ng-disabled="!frmAddress.$valid"\n						data-ng-if="showSaveButtonValue">\n					{{saveText}}&nbsp;<i class="fa fa-angle-right"></i>\n				</button>\n			</div>\n		</div>\n		<div class="row" data-ng-if="!showCancelButtonValue">\n			<div class="col-xs-12">\n				<button class="btn btn-primary btn-block btn-lg"\n						data-ng-click="saveAddress()"\n						data-ng-disabled="!frmAddress.$valid"\n						data-ng-if="showSaveButtonValue">\n					{{saveText}}&nbsp;<i class="fa fa-angle-right"></i>\n				</button>\n			</div>\n		</div>\n	</form>\n</div>\n'),n.put("address/vn-address-picker.tpl.html",'<div class="th-checkout__step__drawer" data-ng-class="{\'-open\': openAddressPicker}">\n\n	<div class="th-checkout__step__drawer__body" data-ng-show="openAddressPicker" data-ng-switch="state" data-ng-cloak>\n		<a href class="th-checkout__step__drawer__close" data-ng-click="selectAddress()">\n			<i class="fa fa-close fa-2x"></i>\n		</a>\n\n		<div class="th-checkout__step__drawer__title">\n			<span data-ng-switch-when="ADDRESSLIST">{{:: selectAddressTitle}}</span>\n			<span data-ng-switch-when="NEWADDRESS">{{:: newAddressTitle}}</span>\n		</div>\n\n		<div class="th-address__choose" data-ng-switch-when="ADDRESSLIST">\n			<div class="list-group" ng-cloak>\n				<a class="list-group-item -clickable" ng-repeat-end data-ng-click="createNewAddress()">\n					Enter a different address\n				</a>\n				<label class="list-group-item -radio" data-ng-repeat="address in addressList track by $index"\n					   for="address{{ $index }}">\n					<input type="radio" id="address{{ $index }}" name="billingAddress"\n						   data-ng-value="true"\n						   data-ng-model="address.preferred"\n						   data-ng-change="setPreferredAddress({{ $index }}); selectAddress()"/>\n\n					<div>\n						<vn-address-display data-ng-if="shipping==\'true\'" data-address="address"\n											data-show-edit-button="allowEdit"\n											data-shipping="true"></vn-address-display>\n						<vn-address-display data-ng-if="shipping!=\'true\'" data-address="address"\n											data-show-edit-button="allowEdit"></vn-address-display>\n					</div>\n				</label>\n			</div>\n			<button class="btn btn-primary btn-block btn-lg th-checkout__step__btn__continue"\n					data-ng-click="selectAddress()">\n				Continue&nbsp;<i class="fa fa-angle-right"></i>\n			</button>\n		</div>\n\n\n		<div data-ng-switch-when="NEWADDRESS">\n			<div class="th-address__same-as"\n				 data-ng-if="showCopyAddress">\n				<input type="checkbox" id="chkAddressCopy" name="chkAddressCopy"\n					   data-ng-model="addressCopied"\n					   data-ng-change="copyAddressHandler()"/>\n				<label for="chkAddressCopy">{{:: copyAddressText}}</label>\n			</div>\n			<div class="th-address__enterAddress panel panel-default">\n				<div data-ng-if="shipping==\'true\'" data-vn-address-editor="" address="newAddress" countries="countries"\n					 data-on-dirty="setCopyAddressFalse()" data-on-save="saveAddress({newAddress: newAddress})"\n					 data-shipping="true" class="panel-body"></div>\n				<div data-ng-if="shipping!=\'true\'" data-vn-address-editor="" address="newAddress" countries="countries"\n					 data-on-dirty="setCopyAddressFalse()" data-on-save="saveAddress({newAddress: newAddress})" class="panel-body"></div>\n			</div>\n		</div>\n\n\n		<!--<div class="th__back-button">\n			<a href="javascript:void(0);" data-ng-click="selectAddress()">\n				<i class="fa fa-arrow-left">&nbsp;{{:: backToText}}</i>\n			</a>\n		</div>-->\n	</div>\n</div>\n'),n.put("busy-animation/vnBusyAnimation.tpl.html",'<ng-transclude></ng-transclude>\n<div class="{{ class }}" title="1" data-ng-if="show">\n	<svg version="1.1" id="loader-1"\n		xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\n		x="0px" y="0px" ng-attr-width="{{ size }}" ng-attr-height="{{ size }}"\n		viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">\n\n		<path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">\n			<animateTransform\n				attributeType="xml"\n				attributeName="transform"\n				type="rotate"\n				from="0 25 25"\n				to="360 25 25"\n				dur=".6s"\n				repeatCount="indefinite"/>\n		</path>\n	</svg>\n</div>\n'),n.put("app-messages/vnAppMessage.tpl.html",'<alert class="vn-app-message container-fluid vn-app-message--{{messagePosition}}" ng-repeat="alert in appMessagesCtrl.alerts track by alert.id" type="{{ alert.type }}">\n	<div class="row">\n		<div class="col-xs-8">\n			<span class="vn-app-message__text">{{alert.text}}</span>\n		</div>\n		<div class="col-xs-4 align-right">\n			<button class="btn vn-app-message__button th-alert__button" data-ng-click="appMessagesCtrl.closeAlert(alert.id)">Ok</button>\n		</div>\n	</div>\n</alert>\n'),n.put("dropdown/vn-dropdown.tpl.html",'<div class="vn-dropdown th-dropdown" dropdown>\n	<button id="dropdownButton"\n			name="{{name + \'Label\'}}"\n			class="vn-dropdown__trigger form-control dropdown-toggle"\n			data-vn-placeholder="{{placeholder}}"\n			data-ng-model="selectedOption.selectedDisplayValue"\n			data-toggle="dropdown"\n			type="button"\n			value="{{selectedOption.selectedDisplayValue}}">{{selectedOption.selectedDisplayValue}}<span\n			class="caret"></span>\n	</button>\n	<ul class="vn-dropdown__menu dropdown-menu" role="menu">\n		<li role="presentation" data-ng-repeat="option in options">\n			<a role="menuitem" data-ng-click="changeOption($index)" href>{{option.displayValue}}</a>\n		</li>\n	</ul>\n	<select name="{{name}}" class="vn-dropdown__select" ng-model="selectedOption"\n			ng-options="option.selectedDisplayValue for option in options">\n	</select>\n</div>\n'),n.put("easy-zoom/vnEasyZoom.tpl.html",'<div class="easyzoom" data-ng-class="{ \'easyzoom--adjacent\': ezAdjacent, \'easyzoom--overlay\': ezOverlay }">\n    <a data-ng-href="{{ezZoomSrc}}">\n        <img class="img-responsive" data-ng-src="{{ngSrc}}" alt="{{alt}}">\n        <div class="th-product-view__zoom"></div>\n    </a>\n</div>\n'),n.put("login/vn-login-email.html",'<div data-ng-switch="vm.state">\n	<div data-ng-switch-when="start" class="container-fluid">\n		<div class="th__title h2">Please enter your email address.</div>\n\n		<div class="th-login__form">\n			<form id="frmLoginEmail" name="vm.frmLoginEmail" novalidate data-ng-submit="vm.checkEmail()">\n				<div class="row">\n					<div class="col-xs-12">\n						<div class="form-group">\n							<input type="email"\n									 data-vn-email-validate\n									 id="inputLoginEmail"\n								   name="inputLoginEmail"\n								   class="form-control input-lg immediate-help"\n								   data-vn-placeholder="E-mail address"\n								   data-ng-model="vm.user.email"\n								   pattern=".{1,75}" required/>\n						</div>\n					</div>\n				</div>\n			</form>\n\n			<button class="btn btn-primary btn-block btn-lg th-login__continue"\n					data-ng-disabled="!vm.frmLoginEmail.$valid"\n					data-ng-click="vm.checkEmail()">\n				Continue <i class="fa fa-angle-right"></i>\n			</button>\n		</div>\n	</div>\n	<div data-ng-switch-when="login">\n		<div data-vn-login\n			 data-allow-anonymous="false"\n			 data-redirect-to="{{redirectTo}}"\n			 data-show-create-account="false"\n			 data-email="{{vm.user.email}}"\n			 data-button-text="{{buttonText}}"\n			 data-title="{{title}}"></div>\n	</div>\n	<div data-ng-switch-when="anonymous">Anonymous</div>\n</div>\n'),n.put("meta/vn-meta.tpl.html",'<meta ng-if="product" name="twitter:card" content="summary" />\n<meta ng-if="product" name="twitter:site" content="{{storeInfo.twitterName}}" />\n<meta ng-if="product" name="twitter:creator" content="{{storeInfo.twitterName}}" />\n<meta ng-if="product" name="twitter:title" content="{{product.name}}" />\n<meta ng-if="product" name="twitter:description" content="{{product.descriptions.long}}" />\n<meta ng-if="product" name="twitter:image" content="{{product.images[0].imageLink.fullUri}}" />\n<meta ng-if="product" property="og:type"                         content="product" />\n<meta ng-if="product" property="og:url"                          content="TODO" />\n<meta ng-if="product" property="og:title"                        content="{{product.name}}" />\n<meta ng-if="product" property="og:description"                  content="{{product.descriptions.long}}" />\n<meta ng-if="product" property="og:image"                        content="{{product.images[0].imageLink.fullUri}}" />\n<meta ng-if="product" property="product:price:amount"            content="{{product.price}}" />\n<title>{{seo.title}}</title>\n<meta name="keywords" content="{{seo.keywords}}" />\n<meta name="description" content="{{seo.description}}" />\n<meta name="robots" content="{{seo.enableRobotsMetatags}}" />\n'),n.put("popover/vn-popover.tpl.html",'<div class="input-help {{ ::location }}">\n	<div class="arrow"></div>\n	<h4>{{ ::title }}</h4>\n</div>\n'),n.put("validators/vn-validation-messages.html",'<span data-ng-message="emailEmpty">Emails is empty</span>\n<span data-ng-message="validEmail">Invalid Email</span>\n<span data-ng-message="validLength">Invalid Length</span>\n<span data-ng-message="zipHasValidFormat">Zip Code must be formatted as 99999[-9999]</span>\n\n'),n.put("video/vn-video.html",'<iframe type="text/html"\n		width="{{width}}"\n		height="{{height}}"\n		data-ng-src="{{trustedUrl}}"\n		frameborder="0"/>\n'),n.put("vn-category/vn-category.tpl.html",'<div class="vn-category-info vn-category-info--{{cssId}}">\n    <div class="vn-category-info__img" data-ng-if="image">\n        <img ng-src="{{image.imageLink.fullUri}}" alt="{{image.altText}}">\n    </div>\n\n    <div class="vn-category-info__title page-header" data-ng-if="headingText">\n        <h1>{{headingText}}</h1>\n    </div>\n    <div class="vn-category-info__desc" data-ng-if="descriptionText" data-ng-bind-html="descriptionText"></div>\n\n    <ul class="vn-category-info__sub-categories">\n        <li data-ng-repeat="subcategory in category.descendants">\n            <a data-ui-sref="category({slug: subcategory.seo.friendlyName})" ui-sref-opts="{inherit: false}">{{subcategory.name}}</a>\n        </li>\n    </ul>\n</div>\n'),n.put("vn-product/vn-product-grid.tpl.html",'<div class="vn-product-grid" data-ng-class="{\'vn-product-grid--{{cssId}}\': cssId != undefined}">\n\n	<form class="vn-product-grid__filter form-inline" data-ng-show="enableFilter">\n		<div class="form-group">\n			<label class="sr-only" for="product-search">Search</label>\n			<div class="input-group">\n				<input type="text" class="form-control" id="product-search" placeholder="Search" data-ng-model="productFilter" data-model-options="{updateOn: \'submit\'}">\n				<span class="input-group-btn">\n					<button type="submit" class="btn btn-primary" data-ng-click="filterProducts()"><i class="fa fa-search"></i></button>\n				</span>\n			</div>\n		</div>\n	</form>\n\n    <div data-vn-product-sort data-on-sort-changed="sortChanged(sort)" data-sort-by-query="initialSort" data-ng-if="enableSort"></div>\n\n	<div class="vn-product-grid__products row">\n		<div class="vn-product-grid__no-products vn-product-grid__no-products--filter col-xs-12 text-center" data-ng-show="products.length == 0 && angular.isDefined(submittedFilterText) && submittedFilterText != \'\'">There are no products matching "{{submittedFilterText}}"</div>\n		<div class="vn-product-grid__no-products col-xs-12 text-center" data-ng-show="products.length == 0 && (!angular.isDefined(submittedFilterText) || submittedFilterText == \'\')">There are no products in this category</div>\n		<div data-ng-if="displayType===\'grid\'">\n            <div data-vn-product-tile product="product"\n                ng-repeat-start="product in products track by product.id"\n                data-show-description="showProductDescription"\n                data-show-add-to-cart="showAddToCart"\n                on-add-to-cart-clicked="addToCartHandler({product: product})"\n                data-column-size="{desktop: 12/numberOfColumns.desktop, tablet: 12/numberOfColumns.tablet, phone: 12/numberOfColumns.phone}">\n            </div>\n            <div class="clearfix visible-lg visible-md" data-ng-if="($index + 1) % numberOfColumns.desktop == 0"></div>\n            <div class="clearfix visible-sm" data-ng-if="($index + 1) % numberOfColumns.tablet == 0"></div>\n            <div class="clearfix visible-xs" data-ng-if="($index + 1) % numberOfColumns.phone == 0" ng-repeat-end></div>\n		</div>\n        <div data-ng-if="displayType===\'list\'">\n            <div data-vn-product-list-item product="product"\n                 ng-repeat="product in products track by product.id"\n                 data-show-add-to-cart="showAddToCart"\n                 on-add-to-cart-clicked="addToCartHandler({product: product})"\n                 data-show-description="showProductDescription">\n            </div>\n        </div>\n	</div>\n    <div class="vn-product-grid__products-pager row pull-right" data-ng-if="displayPaging">\n        <pagination total-items="totalItems" ng-model="currentPage"\n                    max-size="maxSize" class="pagination-sm"\n                    boundary-links="true" rotate="true" ng-change="onPageChanged({pageNumber: currentPage})"\n                    num-pages="numPages" items-per-page="pageSize"\n                    previous-text="&lsaquo;" next-text="&rsaquo;"\n                    first-text="&laquo;" last-text="&raquo;"></pagination>\n    </div>\n</div>\n'),n.put("vn-product/vn-product-image.html",'<img data-ng-src="{{ getImagePath(product.imageCollections) }}" class="img-responsive" alt="{{ product.name }}">\n'),n.put("vn-product/vn-product-listitem.tpl.html",'<div class="vn-product-listitem col-xs-12 col-sm-12 col-md-12 col-lg-12" itemscope itemtype="http://schema.org/Product">\n    <div class="row">\n        <div class="col-xs-4 col-md-3">\n            <a ui-sref="product({code: product.seo.friendlyName})" class="vn-product-listitem__img">\n                <img ng-src="{{ product.images[0].imageLink.fullUri }}" class="img-responsive" alt="">\n            </a>\n        </div>\n        <div class="col-xs-8 col-xs-9">\n            <a ui-sref="product({code: product.seo.friendlyName})" itemprop="name" class="vn-product-listitem__title">{{\n                product.name}}</a>\n\n            <div class="vn-product-listitem__price product__price--regular"\n                 data-ng-class="{\'vn-product-listitem__price--strike\': isOnSale(product.msrp, product.price)}"\n                 data-ng-if="isOnSale(product.msrp, product.price)">\n                {{product.msrp | currency}}\n            </div>\n\n            <div class="vn-product-listitem__price product__price--sale" itemprop="offers" itemscope itemtype="http://schema.org/Offer"><span itemprop="price">{{ product.price | currency }}</span></div>\n\n            <div class="vn-product-listitem__desc" data-ng-if="showDescription && product.descriptions.short"\n                 data-ng-bind-html="product.descriptions.short"></div>\n\n            <div ng-if="showAddToCart" class="product-info__section product-info__add-to-cart">\n                <button data-ng-click="onAddToCartClicked()" class="btn btn-lg btn-primary" data-translate="product.addToCart">Add to Cart</button>\n            </div>\n        </div>\n    </div>\n</div>\n'),n.put("vn-product/vn-product-sort.tpl.html",'\n<div class="btn-group vn-product-grid__sort" dropdown>\n    <button type="button" class="btn btn-default btn-sm dropdown-toggle" dropdown-toggle ng-disabled="disabled">\n        <span data-ng-bind-html="selectedSort.title"></span> <span class="caret"></span>\n    </button>\n    <ul class="dropdown-menu" role="menu">\n        <li ng-repeat="sort in sortOptions">\n            <a href data-ng-bind-html="sort.title" data-ng-click="changeSort($index)"></a>\n        </li>\n    </ul>\n</div>'),n.put("vn-product/vn-product-tile.tpl.html",'<div class="vn-product-tile col-xs-{{columnSize.phone}} col-sm-{{columnSize.tablet}} col-md-{{columnSize.desktop}} col-lg-{{columnSize.desktop}}">\n	<a ui-sref="product({code: product.seo.friendlyName})" class="vn-product-tile__img">\n		<img ng-src="{{ product.images[0].imageLink.fullUri }}" class="img-responsive" alt="">\n	</a>\n	<a ui-sref="product({code: product.seo.friendlyName})" class="vn-product-tile__title" itemprop="name" >{{ product.name}}</a>\n	<div class="vn-product-tile__desc" data-ng-if="showDescription && product.descriptions.short" data-ng-bind-html="product.descriptions.short"></div>\n	<div class="vn-product-tile__price-wrap" itemscope itemtype="http://schema.org/Offer">\n		<div class="vn-product-tile__price product__price--regular"\n			 data-ng-class="{\'vn-product-tile__price--strike\': isOnSale(product.msrp, product.price)}"\n			 data-ng-if="isOnSale(product.msrp, product.price)">\n			{{product.msrp | currency}}\n		</div>\n		<div class="vn-product-tile__price product__price--sale" itemprop="price">{{ product.price | currency }}</div>\n        <div ng-if="showAddToCart" class="product-info__section product-info__add-to-cart">\n            <button data-ng-click="onAddToCartClicked()" class="btn btn-lg btn-primary" data-translate="product.addToCart">Add to Cart</button>\n        </div>\n	</div>\n</div>\n'),n.put("vnMenus/menu.tpl.html",'<div class="vn-menu">\n	<span class="vn-menu__name">{{::menu.name}}</span>\n	<ul class="vn-menu__items" data-ng-include="\'menuTpl\'"></ul>\n</div>\n\n<script type="text/ng-template" id="menuTpl">\n    <li class="vn-menu-item" data-ng-class="\'vn-menu-item--{{menu.type}}\'" data-ng-repeat="menu in ::menu.items">\n    	<a class="vn-menu-item__content" data-ng-if="menu.type == \'link\'" data-ng-href="{{menu.url}}">{{menu.name}}</a>\n    	<span class="vn-menu-item__content" data-ng-if="menu.type == \'text\'">{{menu.name}}</span>\n    	<span class="vn-menu-item__content" data-ng-if="menu.type == \'heading\'">{{menu.name}}</span>\n    	<a class="vn-menu-item__content" data-ng-if="menu.type == \'product\'" ui-sref-opts="{inherit: false}" data-ui-sref="product({code: menu.code})">{{menu.name}}</a>\n    	<a class="vn-menu-item__content" data-ng-if="menu.type == \'category\'" ui-sref-opts="{inherit: false}" data-ui-sref="category({slug: menu.code})">{{menu.name}}</a>\n    	<ul class="vn-menu__items" data-ng-if="menu.items.length > 0" data-ng-include="\'menuTpl\'"></ul>\n    </li>\n</script>\n')}]);