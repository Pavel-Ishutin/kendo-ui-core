var tests = [
    "autocomplete/initialization.html",
    "autocomplete/filtering.html",
    "autocomplete/suggestion.html",
    "autocomplete/navigation.html",
    "autocomplete/separator.html",
    "autocomplete/events.html",
    "autocomplete/placeholder.html",
    "autocomplete/mvvm.html",
    "autocomplete/lint.html",
    "autocomplete/aria.html",
    "barcode/encodings/encoding11.html",
    "barcode/encodings/encoding39.html",
    "barcode/encodings/encoding39Extended.html",
    "barcode/encodings/encoding93.html",
    "barcode/encodings/encoding93Extended.html",
    "barcode/encodings/encoding128.html",
    "barcode/encodings/encoding128A.html",
    "barcode/encodings/encoding128B.html",
    "barcode/encodings/encoding128C.html",
    "barcode/encodings/encoding-ean8.html",
    "barcode/encodings/encoding-ean13.html",
    "barcode/encodings/encodingGS1-128.html",
    "barcode/encodings/encodingMSI.html",
    "barcode/encodings/encodingPOSTNET.html",
    "barcode/lint.html",
    "breadcrumbs/breadcrumbs.html",
    "breadcrumbs/lint.html",
    "calendar/initialization.html",
    "calendar/rendering.html",
    "calendar/api.html",
    "calendar/events.html",
    "calendar/mvvm.html",
    "calendar/lint.html",
    "calendar/navigation.html",
    "calendar/aria.html",
    "chart/configuration.html",
    "chart/databinding.html",
    "chart/helpers.html",
    "chart/viewmodel.html",
    "chart/rendering.html",
    "chart/svg.html",
    "chart/vml.html",
    "chart/canvas.html",
    "chart/plotarea.html",
    "chart/barchart.html",
    "chart/numericaxis.html",
    "chart/categoryaxis.html",
    "chart/dateaxis.html",
    "chart/barseries.html",
    "chart/linechart.html",
    "chart/areachart.html",
    "chart/piechart.html",
    "chart/donutchart.html",
    "chart/tooltip.html",
    "chart/highlight.html",
    "chart/animations.html",
    "chart/scatterlinechart.html",
    "chart/scatterchart.html",
    "chart/bubblechart.html",
    "chart/bulletchart.html",
    "chart/candlestickchart.html",
    "chart/ohlcchart.html",
    "chart/polarareachart.html",
    "chart/polaraxis.html",
    "chart/polarplotarea.html",
    "chart/radarareachart.html",
    "chart/radarbarchart.html",
    "chart/radarcategoryaxis.html",
    "chart/radarlinechart.html",
    "chart/radarnumericaxis.html",
    "chart/radarplotarea.html",
    "chart/selection.html",
    "chart/mvvm.html",
    "chart/api.html",
    "chart/lint.html",
    "colorpicker/initialization.html",
    "colorpicker/aria.html",
    "colorpicker/mvvm.html",
    "colorpicker/parseColor.html",
    "colorpicker/lint.html",
    "columnmenu/columnmenu.html",
    "columnmenu/lint.html",
    "combobox/initialization.html",
    "combobox/navigation.html",
    "combobox/searching.html",
    "combobox/api.html",
    "combobox/events.html",
    "combobox/suggestion.html",
    "combobox/placeholder.html",
    "combobox/mvvm.html",
    "combobox/cascadingcomboboxes.html",
    "combobox/lint.html",
    "combobox/aria.html",
    "core/class.html",
    "core/accessor.html",
    "core/kendo-jquery.html",
    "core/init.html",
    "core/dispatch.html",
    "core/destroy.html",
    "core/observable.html",
    "core/time.html",
    "core/widget.html",
    "core/animation.html",
    "core/wrap.html",
    "core/format.html",
    "core/dateformatting.html",
    "core/dateparsing.html",
    "core/deepextend.html",
    "core/numberformatting.html",
    "core/numberparsing.html",
    "core/culture.html",
    "core/GlobalizeIntegration.html",
    "core/json.html",
    "core/template.html",
    "core/mobileos.html",
    "core/lint.html",
    "data/datareader.html",
    "data/xmldatareader.html",
    "data/datasource/read.html",
    "data/datasource/initialization.html",
    "data/datasource/query.html",
    "data/query-expr.html",
    "data/datasource/sync.html",
    "data/datasource/range.html",
    "data/datasource/buffer.html",
    "data/hierarchy.html",
    "data/datasource/observable-array.html",
    "data/query.html",
    "data/lint.html",
    "data/aspnetmvc-transport.html",
    "data/remotetransport.html",
    "data/odata.html",
    "data/inmemorycache.html",
    "data/datasource/model.html",
    "data/datasource/sync-response.html",
    "datepicker/initialization.html",
    "datepicker/api.html",
    "datepicker/navigation.html",
    "datepicker/events.html",
    "datepicker/mvvm.html",
    "datepicker/lint.html",
    "datepicker/aria.html",
    "datetimepicker/initialization.html",
    "datetimepicker/api.html",
    "datetimepicker/navigation.html",
    "datetimepicker/events.html",
    "datetimepicker/mvvm.html",
    "datetimepicker/lint.html",
    "datetimepicker/aria.html",
    "demos/application.html",
    "demos/navigation.html",
    "demos/lint.html",
    "download-builder/script-resolver.html",
    "download-builder/kendo-config.html",
    "dragdrop/pane.html",
    "dragdrop/draggable.html",
    "dragdrop/hint.html",
    "dragdrop/droptarget.html",
    "dragdrop/droptargetarea.html",
    "dragdrop/lint.html",
    "dropdownlist/initialization.html",
    "dropdownlist/navigation.html",
    "dropdownlist/events.html",
    "dropdownlist/api.html",
    "dropdownlist/searching.html",
    "dropdownlist/mvvm.html",
    "dropdownlist/lint.html",
    "dropdownlist/integration.html",
    "dropdownlist/aria.html",
    "dropdownlist/cascadingdropdownlists.html",
    "editable/editable.html",
    "editable/validation.html",
    "editable/lint.html",
    "editor/lint.html",
    "editor/api.html",
    "editor/apply-block-formats.html",
    "editor/apply-inline-formats.html",
    "editor/blockformatfinder.html",
    "editor/mvvm.html",
    "editor/blockformatter.html",
    "editor/clipboard.html",
    "editor/components.html",
    "editor/dom.html",
    "editor/events.html",
    "editor/exec.html",
    "editor/expand-range.html",
    "editor/formatblock.html",
    "editor/formatcommand.html",
    "editor/formattingtool.html",
    "editor/genericcommand.html",
    "editor/greedyblockformatter.html",
    "editor/greedyinlineformatfinder.html",
    "editor/greedyinlineformatter.html",
    "editor/imagecommand.html",
    "editor/indentcommand.html",
    "editor/indentformatter.html",
    "editor/initialization.html",
    "editor/inlineformatfinder.html",
    "editor/inlineformatter.html",
    "editor/inserthtmlcommand.html",
    "editor/keyboard.html",
    "editor/linkcommand.html",
    "editor/listcommand.html",
    "editor/listformatfinder.html",
    "editor/listformatter.html",
    "editor/marker.html",
    "editor/mswordformatcleaner.html",
    "editor/webkitformatcleaner.html",
    "editor/newline.html",
    "editor/outdentcommand.html",
    "editor/paragraph.html",
    "editor/range.html",
    "editor/rangeenumerator.html",
    "editor/restorepoint.html",
    "editor/rtl.html",
    "editor/selection.html",
    "editor/serialization.html",
    "editor/shortcuts.html",
    "editor/style.html",
    "editor/systemhandler.html",
    "editor/tablecommand.html",
    "editor/insertrowcommand.html",
    "editor/insertcolumncommand.html",
    "editor/inserttabletool.html",
    "editor/deleterowcommand.html",
    "editor/deletecolumncommand.html",
    "editor/typinghandler.html",
    "editor/toolbar.html",
    "editor/undoredostack.html",
    "editor/unlinkcommand.html",
    "editor/viewhtmlcommand.html",
    "filtermenu/filtermenu.html",
    "filtermenu/lint.html",
    "fx/animation.html",
    "fx/new.html",
    "fx/lint.html",
    "gauge/configuration.html",
    "gauge/radialscale.html",
    "gauge/radialpointer.html",
    "gauge/radialplotarea.html",
    "gauge/linearscale.html",
    "gauge/linearpointer.html",
    "gauge/linearplotarea.html",
    "gauge/api.html",
    "gauge/mvvm.html",
    "gauge/lint.html",
    "grid/initialization.html",
    "grid/rowtemplate.html",
    "grid/paging.html",
    "grid/sortable.html",
    "grid/databinding.html",
    "grid/selection.html",
    "grid/grouping.html",
    "grid/aggregates.html",
    "grid/virtualscrolling.html",
    "grid/detailview.html",
    "grid/editing.html",
    "grid/editinginline.html",
    "grid/editingpopup.html",
    "grid/deleting.html",
    "grid/inserting.html",
    "grid/toolbar.html",
    "grid/editingnavigation.html",
    "grid/mvvm.html",
    "grid/columnresizing.html",
    "grid/columnreorder.html",
    "grid/columnhiding.html",
    "grid/columnmenu.html",
    "grid/lint.html",
    "grid/aria.html",
    "groupable/groupable.html",
    "groupable/lint.html",
    "imagebrowser/imagebrowser.html",
    "imagebrowser/lint.html",
    "listview/listview.html",
    "listview/editing.html",
    "listview/mvvm.html",
    "listview/lint.html",
    "menu/api.html",
    "menu/events.html",
    "menu/keyboard.html",
    "menu/openOnClick.html",
    "menu/aria.html",
    "menu/mvvm.html",
    "menu/lint.html",
    "mobile/actionsheet.html",
    "mobile/application.html",
    "mobile/button.html",
    "mobile/buttongroup.html",
    "mobile/core.html",
    "mobile/drawer/drawer.html",
    "mobile/integration.html",
    "mobile/lint.html",
    "mobile/listview/initialization.html",
    "mobile/listview/databinding.html",
    "mobile/listview/filtering.html",
    "mobile/listview/manipulation.html",
    "mobile/listview/mvvm.html",
    "mobile/loader.html",
    "mobile/modalview.html",
    "mobile/navbar.html",
    "mobile/popover.html",
    "mobile/pane.html",
    "mobile/shim.html",
    "mobile/splitview.html",
    "mobile/swipe.html",
    "mobile/switch/switch.html",
    "mobile/switch/mvvm.html",
    "mobile/tabstrip.html",
    "mobile/themebuilder/colorengine.html",
    "mobile/themebuilder/gradientengine.html",
    "mobile/view/view.html",
    "mobile/view/layout.html",
    "mobile/view/engine.html",
    "mobile/view/view.html",
    "mobile/view/layout.html",
    "mobile/view/engine.html",
    "mobile/scrollview/pager.html",
    "mobile/scrollview/virtual-page.html",
    "model/get.html",
    "model/initialization.html",
    "model/set.html",
    "multiselect/initialization.html",
    "multiselect/interaction.html",
    "multiselect/filtering.html",
    "multiselect/navigation.html",
    "multiselect/api.html",
    "multiselect/events.html",
    "multiselect/placeholder.html",
    "multiselect/aria.html",
    "multiselect/mvvm.html",
    "multiselect/lint.html",
    "mvvm/observableobject.html",
    "mvvm/observablearray.html",
    "mvvm/binding.html",
    "mvvm/changing.html",
    "mvvm/widget.html",
    "mvvm/lint.html",
    "pager/pager.html",
    "pager/lint.html",
    "pager/mvvm.html",
    "panelbar/api.html",
    "panelbar/ExpandCollapse.html",
    "panelbar/Selection.html",
    "panelbar/SingleExpandApi.html",
    "panelbar/SingleExpandCollapse.html",
    "panelbar/AjaxLoading.html",
    "panelbar/mvvm.html",
    "panelbar/lint.html",
    "panelbar/navigation.html",
    "panelbar/aria.html",
    "popup/popup.html",
    "popup/lint.html",
    "qrcode/encoding.html",
    "qrcode/helperFunctions.html",
    "qrcode/lint.html",
    "reorderable/reorderable.html",
    "reorderable/lint.html",
    "resizable/resizable.html",
    "router/router.html",
    "router/lint.html",
    "scheduler/initialization.html",
    "scheduler/datasource.html",
    "scheduler/agendaview.html",
    "scheduler/resources.html",
    "scheduler/resizing.html",
    "scheduler/moving.html",
    "scheduler/multidayview.html",
    "scheduler/monthview.html",
    "scheduler/databinding.html",
    "scheduler/editing-destroy.html",
    "scheduler/editing.html",
    "scheduler/ruleparser.html",
    "scheduler/rulestring.html",
    "scheduler/recurring-widget.html",
    "scheduler/occurrences.html",
    "scheduler/mvvm.html",
    "scheduler/lint.html",
    "searchbox/searchbox.html",
    "searchbox/lint.html",
    "selectable/selectable.html",
    "selectable/lint.html",
    "slider/clientsideapi.html",
    "slider/rangeslider.html",
    "slider/rendering.html",
    "slider/slider.html",
    "slider/mvvm.html",
    "slider/lint.html",
    "sortable/sortable.html",
    "sortable/lint.html",
    "sparkline/configuration.html",
    "sparkline/databinding.html",
    "sparkline/lint.html",
    "splitter/initialization.html",
    "splitter/events.html",
    "splitter/api.html",
    "splitter/expandcollapse.html",
    "splitter/loadondemand.html",
    "splitter/paneresizing.html",
    "splitter/panesizing.html",
    "splitter/mvvm.html",
    "splitter/navigation.html",
    "splitter/lint.html",
    "splitter/aria.html",
    "stock/configuration.html",
    "stock/databinding.html",
    "stock/selection.html",
    "stock/lint.html",
    "tabstrip/api.html",
    "tabstrip/initialization.html",
    "tabstrip/databinding.html",
    "tabstrip/AjaxLoading.html",
    "tabstrip/mvvm.html",
    "tabstrip/lint.html",
    "tabstrip/navigation.html",
    "tabstrip/aria.html",
    "textbox/initialization.html",
    "textbox/api.html",
    "textbox/events.html",
    "textbox/navigation.html",
    "textbox/mvvm.html",
    "textbox/lint.html",
    "textbox/aria.html",
    "themebuilder/themecollection.html",
    "themebuilder/lesstheme.html",
    "themebuilder/colorengine.html",
    "themebuilder/colorpicker.html",
    "themebuilder/integration.html",
    "themebuilder/dataviz.html",
    "themebuilder/lint.html",
    "timepicker/initialization.html",
    "timepicker/api.html",
    "timepicker/navigation.html",
    "timepicker/events.html",
    "timepicker/mvvm.html",
    "timepicker/lint.html",
    "timepicker/aria.html",
    "tooltip/tooltip.html",
    "tooltip/ajaxloading.html",
    "tooltip/aria.html",
    "tooltip/lint.html",
    "treeview/initialization.html",
    "treeview/checkboxes.html",
    "treeview/datasource.html",
    "treeview/rendering.html",
    "treeview/interaction.html",
    "treeview/api.html",
    "treeview/events.html",
    "treeview/templates.html",
    "treeview/mvvm.html",
    "treeview/lint.html",
    "upload/rendering.html",
    "upload/draganddrop.html",
    "upload/formdataupload.html",
    "upload/iframeupload.html",
    "upload/syncupload.html",
    "upload/mvvm.html",
    "upload/api.html",
    "upload/lint.html",
    "userevents/userevents.html",
    "userevents/lint.html",
    "validation/validator.html",
    "validation/mvcintegration.html",
    "validation/lint.html",
    "view/view.html",
    "view/lint.html",
    "window/initialization.html",
    "window/api.html",
    "window/events.html",
    "window/mvvm.html",
    "window/interaction.html",
    "window/lint.html",
    "window/aria.html"
];
