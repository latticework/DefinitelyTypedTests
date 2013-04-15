var SwitchTag;
(function (SwitchTag) {
    var template = '<input type="checkbox" />' + '<div>' + '<div class="x-switch-text" ontext="ON" offtext="OFF"></div>' + '<div><div class="x-switch-knob"><br/></div></div>' + '<div class="x-switch-knob">' + '<div class="x-switch-background">' + '<div class="x-switch-text x-switch-on" ontext="ON" offtext="OFF"></div>' + '<div><div class="x-switch-knob"><br/></div></div>' + '<div class="x-switch-text x-switch-off" ontext="ON" offtext="OFF"></div>' + '</div>' + '</div>' + '</div>';
    var LifecycleOptions = (function () {
        function LifecycleOptions() { }
        LifecycleOptions.prototype.created = function (prototype) {
            this.innerHTML = template;
            (this).onText = (this).onText;
            (this).offText = (this).offText;
            (this).checked = (this).checked;
            (this).formName = (this).formName;
        };
        return LifecycleOptions;
    })();
    SwitchTag.LifecycleOptions = LifecycleOptions;    
})(SwitchTag || (SwitchTag = {}));
(function () {
    function textSetter(state) {
        var obj = {
            get: function () {
                return this.getAttribute(state + 'text') || state;
            }
        };
        obj['set:attribute(' + state + 'text)'] = function (text) {
            xtag.query(this, '[' + state + 'text]').forEach(function (el) {
                el.setAttribute(state + 'text', text);
            });
        };
        return obj;
    }
    xtag.register('x-switch', {
        lifecycle: new SwitchTag.LifecycleOptions(),
        methods: {
            toggle: function (state) {
                this.checked = typeof state == 'undefined' ? (this.checked ? false : true) : state;
            }
        },
        events: {
            'change': function (e) {
                e.target.focus();
                this.checked = this.checked;
            }
        },
        accessors: {
            onText: textSetter('on'),
            offText: textSetter('off'),
            checked: {
                get: function () {
                    return this.firstElementChild.checked;
                },
                'set:attribute': function (state) {
                    this.firstElementChild.checked = state;
                    this.firstElementChild.checked ? this.removeAttribute('checked') : this.setAttribute('checked', null);
                }
            },
            formName: {
                get: function () {
                    return this.firstElementChild.getAttribute('name') || this.getAttribute('formName');
                },
                'set:attribute(formname)': function (value) {
                    this.firstElementChild.setAttribute('name', value);
                }
            }
        }
    });
})();
//@ sourceMappingURL=switch.js.map
