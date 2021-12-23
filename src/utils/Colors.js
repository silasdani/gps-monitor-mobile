const colors = {
    transparent: 'transparent',
    white: 'white',
    black: 'black',
    red: '#FF3333',
    teal: '#33CCCC',
    blueSteel: '#454E56',
    barelyGray: '#F2F4F3',
    ghostsWhisperGray: '#DCDCDD',
    loginGray: '#979797',
    cementGray: '#858B9A',
    midnightBlue: '#0C2132',
    lightGray: '#AAB8BE',
    foggyDayGray: '#78868D',
    fancyGreen: '#49C2C6',
    green: 'green',
    activeGreen: '#32CD32',
    kindaGray: '#e8e8f6'
  };
  
  const Colors = {
    ...colors,
  
    // General
    primary: colors.teal,
    linkColor: '#00b3ef',
    buttonColor: colors.green,
    disabledButtonColor: colors.lightGray,
    error: '#F74C45',
  
    // Header
    headerBackgroundColor: colors.blueSteel,
  
    // Tabs
    //inactiveCircleColor: '#43434C',
    activeTabTextColor: colors.teal,
    inactiveTabTextColor: colors.loginGray,
    inactiveTabBackgroundColor: colors.blueSteel,
    activeTabBackgroundColor: '#36424D',
  
    // Scene
    sceneBackgroundColor: colors.kindaGray,
  
    // Jobs Tabs
    activeJobsTabColor: colors.red,
    inactiveJobsTabColor: colors.cementGray,
    jobsTabHairlineColor: 'transparent',
  
    // Find Jobs Button Gradient
    findJobsStartColor: colors.teal,
    findJobsEndColor: '#006e6d',
  
    // Red Badge
    redBadge: colors.teal,
    redBadgeText: 'white',
    redBadgeBorderColor: colors.blueSteel,
  
    // Day Panel
    dayPanelHeadingColor: 'white',
  
    // Login Scene
    loginPlaceholderColor: colors.loginGray,
    loginBorderColor: colors.loginGray,
    loginTextColor: 'white',
    loginTextInputBackgroundColor: 'rgba(213,213,213,0.1)',
    loginBackgroundColor: colors.blueSteel,
  
    // Forgot Password Scene
    forgotPasswordTextColor: colors.ghostsWhisperGray,
    forgotPasswordRedColor: colors.red,
  
    // Set New Password Scene
    setNewPasswordTextColor: colors.ghostsWhisperGray,
    setNewPasswordRedColor: colors.red,
  
    // Password Success Scene
    passwordSuccessTextColor: colors.ghostsWhisperGray,
    passwordSuccessRedColor: colors.red,
  
    // Overflow Menu
    overflowMenuBackgroundColor: '#E51C23',
    overflowOpacityBackgroundColor: 'rgba(9,9,26,0.4)',
  
    // Spinner
    spinnerOpacityBackgroundColor: 'rgba(0,0,0,0.5)',
  
    // Alerts
    alertOpacityBackgroundColor: 'rgba(0,0,0,0.5)',
  
    // Form Inputs
    formTextInputBorderColor: '#B9B6BA',
    formTextInputLabelColor: colors.foggyDayGray,
    formTextInputColor: colors.midnightBlue,
    formTextInputBackgroundColor: 'white',
    formTextInputPlaceholderColor: '#94989C',
    formPanelBottomBorderColor: 'rgba(94,95,118,0.35)',
    formAgreementTextColor: colors.cementGray,
    formAgreementCheckColor: colors.teal,
    formFooterTextColor: colors.cementGray,
    hidableFormInputPanelTextColor: colors.red,
  
    // Nata Mismatch popup
    nataMismatchTextColor: '#354D5D',
  
    // Camera
    cameraOptionTitleColor: '#8f8f8f',
    cameraOptionTextColor: '#2F303F',
    cameraOptionCancelColor: '#007AFF',
    cameraButtonBackgroundColor: 'white',
    cameraOptionsBackgroundColor: 'rgba(0,0,0,0.4)',
    cameraButtonTextColor: 'black',
  
    // Find Jobs
    availableJobsList: {
      sectionHeader: 'lightgrey',
      eventTitle: colors.midnightBlue,
      textColor: '#98A1A5',
      applyButton: colors.red,
      pendingButtonBackground: colors.barelyGray,
    },
  
    gamedayList: {
      listItemBackgroundColor: colors.white,
      timeColor: colors.blueSteel,
      eventNameColor: colors.blueSteel,
      detailsColor: colors.lightGray,
      columnDivider: 'rgba(94,95,118,0.35)',
      checkedInColor: colors.teal,
    },
  
    jobFilters: {
      headerColor: colors.blueSteel,
      backgroundColor: colors.barelyGray,
      normalTextColor: colors.foggyDayGray,
      selectedTextColor: colors.blueSteel,
      clearFiltersColor: colors.cementGray,
      borderColor: colors.lightGray,
    },
  
    gamedayDetails: {
      countdownColor: colors.cementGray,
      detailsColor: colors.foggyDayGray,
      checkedInColor: colors.teal,
      endOfShiftColor: colors.blueSteel,
      endOfShiftExtendedColor: colors.teal,
      endOfShiftDivider: 'rgba(94,95,118,0.35)',
    },
  
    // Credentials
    credentials: {
      textColor: colors.cementGray,
      highlightColor: colors.midnightBlue,
      dividerColor: '#78868D',
      previewToolbarBackgroundColor: 'rgba(0.27, 0.31, 0.34, 0.5)',
    },
  
    emergencyActionPlan: {
      sectionHeader: colors.blueSteel,
      sectionDivider: 'rgba(94,95,118,0.35)',
      addressText: colors.cementGray,
      subHeader: colors.loginGray,
      enumColor: colors.foggyDayGray,
    },
  
    // Event Details
    eventDetailsDivider: 'rgba(94,95,118,0.35)',
    eventDetailsHeaders: colors.midnightBlue,
  
    // Finances
    financesDivider: 'rgba(220,220,221,0.65)',
    darkText: colors.midnightBlue,
    lightText: colors.lightGray,
  
    // Banner
    bannerNotice: '#48C1C4',
  };
  
  export default Colors;
  