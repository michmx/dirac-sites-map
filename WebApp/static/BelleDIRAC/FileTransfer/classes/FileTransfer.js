Ext.define('BelleDIRAC.FileTransfer.classes.FileTransfer', {
  extend : 'Ext.dirac.core.Module',

  requires :
  ["Ext.dirac.utils.DiracGridPanel", "Ext.dirac.utils.DiracAjaxProxy", "Ext.form.field.ComboBox", "Ext.dirac.utils.Notification"],

  initComponent : function() {
    var me = this;
    if (GLOBAL.VIEW_ID == "desktop") {
      me.launcher.title = "File Transfer";
      me.launcher.maximized = false;

      var oDimensions = GLOBAL.APP.MAIN_VIEW.getViewMainDimensions();

      me.launcher.width = oDimensions[0];
      me.launcher.height = oDimensions[1] - GLOBAL.APP.MAIN_VIEW.taskbar.getHeight();

      me.launcher.x = 0;
      me.launcher.y = 0;
    }
    if (GLOBAL.VIEW_ID == "tabs") {
      me.launcher.title = "File Transfer";
      me.launcher.maximized = false;

      var oDimensions = GLOBAL.APP.MAIN_VIEW.getViewMainDimensions();

      me.launcher.width = oDimensions[0];
      me.launcher.height = oDimensions[1] - GLOBAL.APP.MAIN_VIEW.taskbar.getHeight();

      me.launcher.x = 0;
      me.launcher.y = 0;
    }
    Ext.apply(me, {
      layout : 'border',
      bodyBorder : false,
      defaults : {
        collapsible : true,
        split : true
      }
    });
    me.callParent(arguments);
  },

  buildUI : function() {
    var me = this;
    this.id = 'wholeapp'

    me.dataStoreSE = new Ext.data.JsonStore({
      proxy : {
        type : 'ajax',
        url : GLOBAL.BASE_URL + 'FileTransfer/getSEList',
        reader : {
          type : 'json',
          root : 'result'
        },
        timeout : 1800000
      },
      fields : [
        { name : 'StorageElement' },
        // { name : 'SEHealth' },
      ],
      autoLoad : true
    });

    me.leftPanel = new Ext.create('Ext.panel.Panel', {
      title : 'Transfer Request Form',
      region : 'west',
      width : 650,
      minWidth : 650,
      maxWidth : 650,
      bodyPadding : 5,
      autoScroll : true,
      items: [
        {
            xtype      : 'fieldcontainer',
            fieldLabel : 'Type of Tansfer *',
            labelWidth: 170,
            defaultType: 'radiofield',
            id: 'dataSetOrFile',
            defaults: {
                flex: 1
            },
            layout: 'hbox',
            items: [
                {
                    boxLabel  : 'Dataset',
                    name      : 'Type of Tansfer *',
                    inputValue: 'Dataset',
                    checked   :  true,
                    handler: function(){
                            me.textLFN.labelEl.update('LPN of '+Ext.getCmp('dataSetOrFile').items.get(0).getGroupValue()+' *');
                          }
                }, {
                    boxLabel  : 'File',
                    name      : 'Type of Tansfer *',
                    inputValue: 'File',
                }
            ],

        }

    ],
      layout : {
        type : 'vbox',
        align : 'stretch',
        pack : 'start'
      }
    });


    me.ComboBoxSE = Ext.create('Ext.form.field.ComboBox', {
        fieldLabel: 'Destination Storage Element *',
        displayField: 'StorageElement',
        margins: {top:10, left: 1, right: 1, bottom:1},
        width: 370,
        labelWidth: 170,
        store: me.dataStoreSE,
        editable: true,
        typeAhead: true,
        forceSelection:true,
        allowBlank : false,
        autoShow: true,
        // autoSelect: true,
        onLoad: function(){
          me.ComboBoxSE.focus(false);
        }
    });



    // me.dataStoreLPN = new Ext.data.JsonStore({
    //   proxy : {
    //     type : 'ajax',
    //     url : GLOBAL.BASE_URL + 'FileTransfer/getLFN',
    //     reader : {
    //       type : 'json',
    //       root : 'result'
    //     },
    //     timeout : 1800000
    //   },
    //   fields : [
    //     { name : 'partialLPN' },
    //   ],
    //   autoLoad : false
    // });

    var validLPN = "false";

    me.textLFN = new Ext.create('Ext.form.field.Text', {
      width: 550,
      labelWidth: 170,
      fieldLabel : "LPN of Dataset *",
      value: "/",
      allowBlank : false,
      scope: me,
      listeners: {
          'change': function() {
            validLPN = "false";
            me.btnLPNPathCheck.setIconCls("dirac-icon-list");
            me.btnLPNPathCheck.setText("Check Path")
          },
          'specialkey': function(f,e){
                if (e.getKey() == e.ENTER) {
                  me.btnLPNPathCheck.fireEvent('click');
                }
          }
      }
    });


    me.btnLPNPathCheck = new Ext.Button({
                text : 'Check Path',
                width: 100,
                margins: {top:10, left: 250, right: 130, bottom:1},
                textAlign: 'right',
                //margin : 10,
                iconCls : "dirac-icon-list",
                scope : me,
  	      listeners: {
          		'click': function() {
                    me.btnLPNPathCheck.setIconCls("loading_item");
                    if (me.textLFN.value.length == 0){
                      me.textLFN.setValue("/");
                    }
                    Ext.Ajax.request({
                            url : GLOBAL.BASE_URL + 'FileTransfer/setLFNFromText',
                            params : {
                                    partialLPNFromText: me.textLFN.getValue()
                            },
                            scope : me,
                            success : function(response) {
                              validLPN = String(Ext.JSON.decode(response.responseText).success);

                              if (validLPN==="noExist"){
                                me.btnLPNPathCheck.setIconCls("dirac-icon-kill");
                                me.btnLPNPathCheck.setText("Not Found");
                                me.textLFN.focus(false,1);
                              }else{
                                if (validLPN==="isDirectory"){
                                  me.btnLPNPathCheck.setText("Is A Valid Directory");
                                  // me.ComboBoxLPN.focus(false,1);
                                }else if (validLPN==="isFile"){
                                  me.btnLPNPathCheck.setText("Is A Valid File")
                                } else if (validLPN==="isDataset"){
                                  me.btnLPNPathCheck.setText("Is A Valid Dataset")
                                }
                                me.btnLPNPathCheck.setIconCls("dirac-icon-submit");
                                // me.ComboBoxLPN.setValue(me.textLFN.getValue());
                                // me.dataStoreLPN.reload();
                              }
                            }
                    });
          		}
  	      }
    });


    me.LPNPanel = new Ext.create('Ext.Container', {
    layout: {
        type: 'hbox',
        margins: {top:5, left: 1, right: 1, bottom:5}

        }
    });

    //
    // me.ComboBoxLPN = Ext.create('Ext.form.field.ComboBox', {
    //     fieldLabel: 'LPN Explorer',
    //     displayField: 'partialLPN',
    //     width: 370,
    //     labelWidth: 170,
    //     margins: {top:10, left: 1, right: 1, bottom:5},
    //     store: me.dataStoreLPN,
    //     editable: false,
    //     queryMode: 'local',
    //     scope: me,
    //     listeners : {
    //             'select' : function() {
    //                 me.textLFN.setValue(this.getValue());
    //                 me.btnLPNPathCheck.setIconCls("dirac-icon-list");
    //                 me.textLFN.focus(false,1);
    //             }
    //         }
    // });






    me.treeFileCatalogStore = Ext.create('Ext.data.TreeStore', {
          proxy : {
            type : 'ajax',
            url : GLOBAL.BASE_URL + 'FileTransfer/getBrowserSubnodeFiles',
            reader : {
              type : 'json',
              root : 'nodes'
            }
          },
          root : {
            text : '/'
          },
          listeners : {
            beforeexpand : function(oNode, eOpts) {
              var pathname = oNode.getPath("text");
              while (pathname[0]=='/'){
                pathname=pathname.substring(1);
              }
              pathname="/"+pathname;
              me.treeFileCatalogStore.proxy.extraParams = {
                "path" : pathname
              };
              // Ext.Msg.alert('Status', 'pathname:  '+pathname);

            }
          }
        });

    me.treeFileCatalogStore.getRootNode().expand();

    me.fileCatalogTree = new Ext.create('Ext.tree.Panel', {
          // region : 'south',
          store : me.treeFileCatalogStore,
          header : false,
          height : 300,
          listeners : {

            itemclick : function(oView, oNode, item, index, e, eOpts) {
              e.preventDefault();
              var pathname = oNode.getPath("text");
              pathname="/"+pathname;
              while(pathname.includes("//")){
                pathname = pathname.replace(/\/\//g,"/");
              }
              me.textLFN.setValue(pathname);
              return false;
            }
          }
        });


        me.btnLPNBrowse = new Ext.Button({
                    text : 'Browse',
                    width: 90,
                    // textAlign: 'right',
                    //margin : 10,
                    // iconCls : "dirac-icon-list",
                    scope : me,
              listeners: {
                  'click': function() {
                        if(validLPN==="isDirectory" || validLPN==="isDataset"){
                          if (me.textLFN.value.length == 0){
                            me.textLFN.setValue("/");
                          }else{
                            var treeRootText = me.textLFN.getValue();
                            if(treeRootText.length != 0){
                              treeRootText = "/"+treeRootText;
                              while(treeRootText.includes("//")){
                                treeRootText = treeRootText.replace(/\/\//g,"/");
                              }
                              if (treeRootText.substring(treeRootText.length-1)=="/" && treeRootText.length!=1){
                                treeRootText=treeRootText.substring(0, treeRootText.length-1);
                              }
                            }else{
                              treeRootText='/';
                            }
                            var rootNode = me.fileCatalogTree.getStore().getRootNode();
                            rootNode.data.text = treeRootText;
                            while(rootNode.firstChild) {
                              rootNode.removeChild(rootNode.firstChild);
                            }
                            me.treeFileCatalogStore.proxy.extraParams = {
                              "path" : treeRootText
                            };
                            me.treeFileCatalogStore.getRootNode().expand();
                            me.treeFileCatalogStore.load();
                          }
                        }else{
                          Ext.Msg.alert('Status', 'Please press "Check Path" and check that the LPN is a valid directory');
                        }
                  }
              }
        });



    me.leftPanel.add(me.fileCatalogTree);
    // me.leftPanel.add(me.textLFN);
    me.LPNPanel.add(me.textLFN);
    me.LPNPanel.add(me.btnLPNBrowse);
    me.leftPanel.add(me.LPNPanel);
    me.leftPanel.add(me.btnLPNPathCheck);
    me.leftPanel.insert(me.ComboBoxSE);
    // me.leftPanel.insert(0,[me.ComboBoxSE]);
    // me.leftPanel.add(me.ComboBoxLPN);


    me.resultDataStore = new Ext.data.JsonStore({
        proxy : {
            type : 'ajax',
            url : GLOBAL.BASE_URL + 'FileTransfer/showTransferRequest',
            reader : {
                type : 'json',
                root : 'result'
            },
            timeout : 1800000
        },
        fields : [
                  { name : 'ID' },
                  { name : 'STATUS' },
                  { name : 'LPN' },
                  { name : 'DEST_SE' },
                  { name : 'SIZE' },
                  // { name : 'OwnerDN' },
                  { name : 'OwnerGroup' },
                  { name : 'LastUpdate' },
                  { name : 'LFNS_SUBMITTED' },
                  { name : 'LFNS_COMPLETED' },
                  { name : 'LFNS_DONE_Percent' },
                  { name : 'LFNS_FAILED' },
                  { name : 'LFNS_FAILED_Percent' },
                  { name : 'LFNS_PROCESSED' },
                  ],
        autoLoad : true
    });

    me.resultDataStore.sort('ID','DESC');

    var oColumns = [
        {header: "ID", dataIndex: 'ID', sortable: true, width: 45},
        {header: "Status", dataIndex: 'STATUS',
         renderer: function(value) {
           allResultStatusIconUpdate();
           var htmlString = '<p style="float: left; margin: 0;"><img src="static/BelleDIRAC/FileTransfer/images/';
           if (  value === 'Assigned' ){
             htmlString += 'running.gif';
           }else if ( value === 'Done'){
             htmlString += 'done.gif';
           }else if ( value === 'Failed'){
             htmlString += 'failed.gif';
           }else if ( value === 'Queued'){
             htmlString += 'waiting.gif';
           }else if( value === 'Canceled'){
             htmlString += 'kill.gif';
           }else if( value === 'Closed'){
             htmlString += 'unknown.gif';
           }else {
             htmlString += 'unknown.gif';
           }
           htmlString += '"></p><p style="margin: 0;">&nbsp;&nbsp;'+value+'</p>';
           return htmlString;
         },
         sortable: true, width: 100},
        {header: "LPN", dataIndex: 'LPN', sortable: true, width: 200},
		    {header: "Target SE", dataIndex: 'DEST_SE', sortable: true, width: 150},
        {header: "Size", dataIndex: 'SIZE', sortable: true, width: 80},
        {header: "Submitted", dataIndex: 'LFNS_SUBMITTED', sortable: true, width: 60},
        {header: "Done", dataIndex: 'LFNS_COMPLETED', sortable: true, width: 50},
        {header: "Done (%)", dataIndex: 'LFNS_DONE_Percent', sortable: true, width: 65},
        {header: "Failed", dataIndex: 'LFNS_FAILED', sortable: true, width: 60},
        {header: "Failed (%)", dataIndex: 'LFNS_FAILED_Percent', sortable: true, width: 65},
        // {header: "OwnerDN", dataIndex: 'OwnerDN', sortable: true, width: 200},
        {header: "OwnerGroup", dataIndex: 'OwnerGroup', sortable: true, width: 80},
        {header: "LastUpdate", dataIndex: 'LastUpdate', sortable: true, width: 120}
    ];

    me.popUpPanel = Ext.create('Ext.panel.Panel', {
      floating: true,
      closable: true,
      closeAction: 'hide',
      draggable: true,
      resizable: true,
      title : 'Expanded Transfer Information',
      // region : 'west',
      width : 1200,
      height: 700,
      // minWidth : 650,
      // maxWidth : 650,
      bodyPadding : 5,
      autoScroll : true,
      layout : {
        type : 'vbox',
        align : 'stretch',
        pack : 'start'
      }
    });

    me.expandedDataStore = new Ext.data.JsonStore({
        fields : [
                  { name : 'ID' },
                  { name : 'STATUS' },
                  { name : 'LPN' },
                  { name : 'DEST_SE' },
                  { name : 'SIZE' },
                  // { name : 'OwnerDN' },
                  { name : 'OwnerGroup' },
                  { name : 'LastUpdate' },
                  { name : 'LFNS_SUBMITTED' },
                  { name : 'LFNS_COMPLETED' },
                  { name : 'LFNS_DONE_Percent' },
                  { name : 'LFNS_FAILED' },
                  { name : 'LFNS_FAILED_Percent' },
                  { name : 'LFNS_PROCESSED' },
                  ],
        autoLoad : false
    });

    var currentRecord = undefined;
    me.expandedGrid = Ext.create('Ext.dirac.utils.DiracGridPanel', {
      store : me.expandedDataStore,
      dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        height: 24,
        scope: me,
        items: [{
          scope: me,
          id : "cancelTransferIcon",
          text: "Cancel Transfer",
          iconCls: "dirac-icon-kill",
          handler : function(){
            if (Ext.typeOf(currentRecord) == "undefined") {
              Ext.Msg.alert('Error', 'No Tansfer Selected - please click on a transfer on which to operate');
              return;
            }
            var trID = currentRecord.get('ID');
            Ext.MessageBox.show({
                title: 'Stop Transfer?',
                msg: 'Are you sure you want to cancel the transfer with ID ' + trID +'?',
                buttons: Ext.MessageBox.OKCANCEL,
                iconCls: "dirac-icon-kill",
                fn: function(btn){
                    if(btn == 'ok'){
                      Ext.Ajax.request({
                              url : GLOBAL.BASE_URL + 'FileTransfer/cancelTransferRequest',
                              params : {
                                      trIDToCancel: trID
                              },
                              scope : me,
                              success : function(response) {
                                me.btnRefresh.handler.call(me.btnRefresh.scope, me.btnRefresh, Ext.EventObject);
                                me.popUpPanel.hide();

                                var response = Ext.JSON.decode(response.responseText);
                                if (Ext.typeOf(me.notification) != "undefined") {
                                   me.notification.destroy();
                                }
                                me.notification = new Ext.create('widget.uxNotification', {
                                    title: '<p style="float: left; margin: 0;"><img src="static/BelleDIRAC/FileTransfer/images/icon-info.gif" height="15" width="15"></p><p style="margin: 0;">&nbsp;&nbsp;File Transfer Notification</p>',
                                    position: 'br',
                                    autoHeight: true,
                                    minWidth: 600,
                                    autoCloseDelay: 60000,
                                    autoDestroy: true,
                                    html: response.returnMessage,
                                    scope: me
                                }).show();
                              }
                      });
                      currentRecord=undefined;
                    }
                }
            });

          }
        }],
      }],
      listeners : {
        itemclick: function(dv, record, item, index, e) {
          currentRecord = record;
        }
      },
      columns : oColumns,
      columnLines : true,
      scope : me
    });
    me.popUpPanel.add(me.expandedGrid);

    me.grid = Ext.create('Ext.dirac.utils.DiracGridPanel', {
      store : me.resultDataStore,
      dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        height: 24,
        scope: me,
        items: [{
          scope: me,
          id : "resultStatusIcon",
          text: "No Transfers In Progress",
          iconCls: "dirac-icon-unknown",
          handler : function(){
            me.btnRefresh.handler.call(me.btnRefresh.scope, me.btnRefresh, Ext.EventObject)
          },
        }],
      }],
      listeners : {
                        // itemcontextmenu: function(view,record,item,index,e) {
                        //     var me = this;
                        //     var r = record.data;
                        //     e.stopEvent();
                        //
                        //     new Ext.menu.Menu({
                        //                 autoShow: true,
                        //                 items : [{
                        //                             text : 'Add'
                        //                 }, {
                        //                             text : 'Add'
                        //                 }]
                        //     }).showAt(e.getXY());
                        //    }
                        // itemkeydown: function(dv, record, item, index, e){
                        //       // if (e.getKey() == e.ENTER) {
                        //         Ext.Msg.alert('Status', 'Error: All marked * are required');
                        //
                        //         me.grid.fireEvent('itemdblclick');
                        //       // }
                        // },
                        itemdblclick: function(dv, record, item, index, e) {
                          // Ext.MessageBox.show({
                          //     title: 'Expand?',
                          //     msg: 'Expand Transfer Information?',
                          //     buttons: Ext.MessageBox.OKCANCEL,
                          //     iconCls: "dirac-icon-upload",
                          //     fn: function(btn){
                          //         if(btn == 'ok'){
                                    me.expandedDataStore.removeAll();
                                    me.expandedDataStore.addSorted(record);
                                    me.popUpPanel.show();
                                  // }
                              // }
                          // });
                        }
        },
      columns : oColumns,
      columnLines : true,
      scope : me
    });

    function allResultStatusIconUpdate(){
      if(  (String(me.resultDataStore.find('STATUS', 'Assigned')) != String(-1)) || (String(me.resultDataStore.find('STATUS', 'Queued')) != String(-1)) ){
        Ext.ComponentQuery.query('#resultStatusIcon')[0].setIconCls("dirac-icon-running");
        Ext.ComponentQuery.query('#resultStatusIcon')[0].setText("Transfers in Progress: Please Refresh-Status to Update");
      }else{
        Ext.ComponentQuery.query('#resultStatusIcon')[0].setIconCls("dirac-icon-unknown");
        Ext.ComponentQuery.query('#resultStatusIcon')[0].setText("No Transfers In Progress");
      }
    };



    me.btnSubmit = new Ext.Button({

        text : 'Upload Transfer Request',
        margin : 1,
        iconCls : "dirac-icon-upload",

        handler : function() {
            if( (me.textLFN.getRawValue().length == 0 ) || (me.ComboBoxSE.getRawValue().length == 0 ) ){
              Ext.Msg.alert('Status', 'Error: All marked * are required');
            }else{

                if(Ext.getCmp('dataSetOrFile').items.get(0).getGroupValue() ==='Dataset'){
                  var pythonFunctionUrl = 'FileTransfer/transferDataset';
                }else if(Ext.getCmp('dataSetOrFile').items.get(0).getGroupValue() ==='File'){
                  var pythonFunctionUrl = 'FileTransfer/transferFile';
                }else{
                  Ext.Msg.alert('Status', 'Please select whether you wish to transfer a dataset or an individual file.');
                  return;
                }

                if (validLPN==="false"){
                  Ext.Msg.alert('Status', 'Please press search and check that the LPN is valid.');
                  return;
                } else if (validLPN==="isDirectory"){
                  Ext.Msg.alert('Status', 'The selected LPN is of a directory, please choose either a valid file or dataset');
                  return;
                } else if (validLPN==="noExist"){
                  Ext.Msg.alert('Status', 'Invalid LPN: please check for errors and try again.');
                  return;
                } else if ((validLPN==="isFile") && (Ext.getCmp('dataSetOrFile').items.get(0).getGroupValue() ==='Dataset')) {
                  Ext.Msg.alert('Status', 'The selected LPN is of a file, please select \'File\' as type of transfer or choose a dataset');
                  return;
                } else if ((validLPN==="isDataset") && (Ext.getCmp('dataSetOrFile').items.get(0).getGroupValue() ==='File')) {
                  Ext.Msg.alert('Status', 'The selected LPN is of a dataset, please select \'Dataset\' as type of transfer or choose a file');
                  return;
                }
                else{
                  Ext.MessageBox.show({
                      title: 'Upload Transfer Request',
                      msg: 'Submit the Transfer Request?',
                      buttons: Ext.MessageBox.OKCANCEL,
                      iconCls: "dirac-icon-upload",
                      fn: function(btn){
                          if(btn == 'ok'){
                            Ext.Ajax.request({
                                    url : GLOBAL.BASE_URL + pythonFunctionUrl,
                                    params : {
                                            valueSE: me.ComboBoxSE.getValue(),
                                            valueLFN: me.textLFN.getValue()
                                    },
                                    scope : me,
                                    success : function(response) {
                                      me.resultDataStore.on('load', allResultStatusIconUpdate);

                                      me.resultDataStore.load();
                                      allResultStatusIconUpdate();
                                      var response = Ext.JSON.decode(response.responseText);

                                      if (Ext.typeOf(me.notification) != "undefined") {
                                         me.notification.destroy();
                                      }
                                      me.notification = new Ext.create('widget.uxNotification', {
                                          title: '<p style="float: left; margin: 0;"><img src="static/BelleDIRAC/FileTransfer/images/icon-info.gif" height="15" width="15"></p><p style="margin: 0;">&nbsp;&nbsp;File Transfer Notification</p>',
                                          position: 'br',
                                          autoHeight: true,
                                          minWidth: 600,
                                          autoCloseDelay: 60000,
                                          autoDestroy: true,
                                          html: response.returnMessage,
                                          scope: me
                                      }).show();

                                    }
                            });
                          }
                      }
                  });

                }

            }

        },
        scope : me
    });

    me.btnClear = new Ext.Button({
                text : 'Clear All',
                margins: {top:1, left:1, right: 175, bottom:1},
                buttonAlign:'left',
                iconCls : "dirac-icon-delete",
                scope : me,
        	      handler: function() {
                  me.ComboBoxSE.setValue("");
                  me.textLFN.setValue("/");
                  // me.ComboBoxLPN.setValue("");

                  var rootNode = me.fileCatalogTree.getStore().getRootNode();
                  rootNode.data.text = "/";
                  while(rootNode.firstChild) {
                    rootNode.removeChild(rootNode.firstChild);
                  }
                  me.treeFileCatalogStore.proxy.extraParams = {
                    "path" : "/"
                  };
                  me.treeFileCatalogStore.getRootNode().expand();
                  me.treeFileCatalogStore.load();

        	      }
    });

    me.btnInfo = new Ext.Button({
                text : 'Help',
                margins: {top:1, left:175, right: 1, bottom:1},
                buttonAlign:'left',
                iconCls : "dirac-icon-error",
                scope : me,
        	      handler: function() {
                  Ext.Msg.show({
                    title:'Having Problems?',
                    iconCls: "dirac-icon-error",
                    msg:
                    "<ul>" +
                    "<li>All inputs marked with an asterisk(*) are required.</li>" +
                    "<li>'Destination Storage Element *' is the destination Storage Element (SE) you wish to transfer the file to. This list shows only the 'healthy' SEs, if you do not see the desired SE, please check the 'Storage Health' App.</li>" +
                    "<li>'LFN of file' is the full path of the file you wish to transfer, starting with '/' and ending in the file itself. If you are unsure of the path, please press the 'Search' button, this will load the subdirectories (if any) of the current directory</li>" +
                    "<li>The 'Search' button will check if the entered path is a valid directory path, showing a ✔. If the entered path is to a file (not a directory) or does not exist, a ✖ will be shown." +
                    "<li>If the 'Search' button has been pressed with a valid path to a directory, 'LPN' will show the full path to the currently entered directory and its contents (subdirectories and files) .</li>" +
                    "<li>'Clear All' will empty all the form entry information.</li>" +
                    "<li>When you are happy with your transfer information, press 'Upload Transfer Request' to begin the transfer. A pop up will appear with information on if the transfer was successfully submitted, or any error messages if not.</li>" +
                    "<li>Once a transfer request has been successfully recieved, the information and status of this transfer will appear in the right hand panel. Please press 'Refresh-Status' to check its status.</li>" +
                    "</ul>" +
                    "If you have any questions, issues, spot any bugs, or have an app feature request, please send an email to: "+ '<a href="mailto:ahawthorne@student.unimelb.edu.au" target="_top">ahawthorne@student.unimelb.edu.au</a>',
                    multiLine: true
                  });
        	      }
    });

    var oLeftPanelToolbar = new Ext.toolbar.Toolbar({
        dock : 'bottom',
        layout : {
            pack : 'left'
        },
        items : [me.btnClear, me.btnSubmit, me.btnInfo]
    });


    var oPanelButtons = new Ext.create('Ext.toolbar.Toolbar', {
                dock : 'bottom',
                layout : {
                  pack : 'left'
                },
                items : []
    });
  	me.btnRefresh = new Ext.Button({
                text : 'Refresh-Status',
                margin : 3,
                iconCls : "dirac-icon-refresh",
                scope : me,
  	      handler: function() {
                           me.resultDataStore.on('load', allResultStatusIconUpdate);
                           me.resultDataStore.reload();

  	      }
    });

    oPanelButtons.add(me.btnRefresh);

    me.grid.addDocked(oPanelButtons);


    me.leftPanel.addDocked([oLeftPanelToolbar]);

    me.add([ me.leftPanel, me.grid ]);
  },
});
