import React from 'react';
import ReactDOM from 'react-dom';

import LightSwitch from '../components/LightSwitch';

jQuery.entwine('ss', ($) => {
    $('.js-switch-field:visible').entwine({
        onmatch() {
            this._super();
            this.refresh();
        },
        refresh() {
            const name = this.data('name');
            const link = this.data('recordlink');
            const on = this.data('on') == '1';

            console.log(this.data('on'), on);

            ReactDOM.render(
                <LightSwitch
                    name={name}
                    link={link}
                    on={on} />
                , this[0]);
        }
    });
});
