import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, Optional } from '@angular/core';
import { Router } from '@angular/router';

import { ContentDensity } from '@fundamental-ngx/core/utils';
import { BaseListItem } from '../base-list-item';
import { ListConfig } from '../list.config';

@Component({
    selector: 'fdp-standard-list-item',
    templateUrl: './standard-list-item.component.html',
    providers: [{ provide: BaseListItem, useExisting: forwardRef(() => StandardListItemComponent) }],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StandardListItemComponent extends BaseListItem {
    /** @hidden */
    _contentDensity: ContentDensity = this._listConfig.contentDensity;

    /**
     * @hidden
     * Used to define if contentDensity value is 'compact' or not.
     */
    isCompact = this._contentDensity === 'compact';

    /** @hidden */
    constructor(
        _changeDetectorRef: ChangeDetectorRef,
        public itemEl: ElementRef,
        protected _listConfig: ListConfig,
        @Optional() _router: Router
    ) {
        super(_changeDetectorRef, itemEl, _listConfig, _router);
    }
}