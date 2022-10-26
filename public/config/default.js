window.config = {
  // default: '/'
  routerBasename: '/',
  extensions: [],
  showStudyList: true,
  //filterQueryParam: false,
  disableServersCache: false,
  
  /* UPdated on 29/8/2022 BY M.Omer this is to set dcm4che archive to into the local server
  servers: {
    dicomWeb: [
      {
        name: 'DCM4CHEE',
        wadoUriRoot: 'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/wado',
        qidoRoot: 'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/rs',
        wadoRoot: 'https://server.dcmjs.org/dcm4chee-arc/aets/DCM4CHEE/rs',
        qidoSupportsIncludeField: true,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
        supportsFuzzyMatching: true,
      },
    ],
  },
  */
 
  servers: {
    dicomWeb: [
      {
        name: 'DCM4CHEE',
        wadoUriRoot: 'http://localhost:8080/dcm4chee-arc/aets/DCM4CHEE/wado',
        qidoRoot: 'http://localhost:8080/dcm4chee-arc/aets/DCM4CHEE/rs',
        wadoRoot: 'http://localhost:8080/dcm4chee-arc/aets/DCM4CHEE/rs',
        imageRendering: 'wadouri',//
        thumbnailRendering: 'wadors',
        qidoSupportsIncludeField: false,
        enableStudyLazyLoad: true,
        supportsFuzzyMatching: true,
        requestOptions: {
          auth: 'administrator:admin',
          auth: 'admin:admin',
          auth: 'paxs:paxs',
          auth: 'simo:simo',
        },
      },
    ],
    dimse:[
    { 
      name:"DCM4CHEE_DIMSE",
        wadoUriRoot: 'http://localhost:8080/dcm4chee-arc/aets/DCM4CHEE/wado',
    

    peers: [{
    host:'0.0.0.0',
    port:'11112',
    aeTitle:'DCM4CHEE',
    default:'true',
    server:'true'
    }]
  
   } ],


  },
  studyListFunctionsEnabled: true,



  // Extensions should be able to suggest default values for these?
  // Or we can require that these be explicitly set
  hotkeys: [
    // ~ Global
    {
      commandName: 'incrementActiveViewport',
      label: 'Next Viewport',
      keys: ['right'],
    },
    {
      commandName: 'decrementActiveViewport',
      label: 'Previous Viewport',
      keys: ['left'],
    },
    // Supported Keys: https://craig.is/killing/mice
    // ~ Cornerstone Extension
    { commandName: 'rotateViewportCW', label: 'Rotate Right', keys: ['r'] },
    { commandName: 'rotateViewportCCW', label: 'Rotate Left', keys: ['l'] },
    { commandName: 'invertViewport', label: 'Invert', keys: ['i'] },
    {
      commandName: 'flipViewportVertical',
      label: 'Flip Horizontally',
      keys: ['h'],
    },
    {
      commandName: 'flipViewportHorizontal',
      label: 'Flip Vertically',
      keys: ['v'],
    },
    { commandName: 'scaleUpViewport', label: 'Zoom In', keys: ['+'] },
    { commandName: 'scaleDownViewport', label: 'Zoom Out', keys: ['-'] },
    { commandName: 'fitViewportToWindow', label: 'Zoom to Fit', keys: ['='] },
    { commandName: 'resetViewport', label: 'Reset', keys: ['space'] },
    // clearAnnotations
    { commandName: 'nextImage', label: 'Next -DICOM- Image', keys: ['down'] },
    { commandName: 'previousImage', label: 'Previous -DIMO- Image', keys: ['up'] },
    // firstImage
    // lastImage
    {
      commandName: 'previousViewportDisplaySet',
      label: 'Previous Series',
      keys: ['pagedown'],
    },
    {
      commandName: 'nextViewportDisplaySet',
      label: 'Next Series',
      keys: ['pageup'],
    },
    // ~ Cornerstone Tools
    { commandName: 'setZoomTool', label: 'Zoom', keys: ['z'] },
    // ~ Window level presets
    {
      commandName: 'windowLevelPreset1',
      label: 'W/L Preset 1',
      keys: ['1'],
    },
    {
      commandName: 'windowLevelPreset2',
      label: 'W/L Preset 2',
      keys: ['2'],
    },
    {
      commandName: 'windowLevelPreset3',
      label: 'W/L Preset 3',
      keys: ['3'],
    },
    {
      commandName: 'windowLevelPreset4',
      label: 'W/L Preset 4',
      keys: ['4'],
    },
    {
      commandName: 'windowLevelPreset5',
      label: 'W/L Preset 5',
      keys: ['5'],
    },
    {
      commandName: 'windowLevelPreset6',
      label: 'W/L Preset 6',
      keys: ['6'],
    },
    {
      commandName: 'windowLevelPreset7',
      label: 'W/L Preset 7',
      keys: ['7'],
    },
    {
      commandName: 'windowLevelPreset8',
      label: 'W/L Preset 8',
      keys: ['8'],
    },
    {
      commandName: 'windowLevelPreset9',
      label: 'W/L Preset 9',
      keys: ['9'],
    },
  ],

   i18n: {
    LOCIZE_PROJECTID: 'a8da3f9a-e467-4dd6-af33-474d582a0294',
    LOCIZE_API_KEY: null, // Developers can use this to do in-context editing. DO NOT COMMIT THIS KEY!
    USE_LOCIZE: true,
  },
  cornerstoneExtensionConfig: {},
  // Following property limits number of simultaneous series metadata requests.
  // For http/1.x-only servers, set this to 5 or less to improve
  //  on first meaningful display in viewer
  // If the server is particularly slow to respond to series metadata
  //  requests as it extracts the metadata from raw files everytime,
  //  try setting this to even lower value
  // Leave it undefined for no limit, suitable for HTTP/2 enabled servers
  // maxConcurrentMetadataRequests: 5,
};
